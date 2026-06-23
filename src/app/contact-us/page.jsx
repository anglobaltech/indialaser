"use client";
import { useState } from "react";
import Image from "next/image";
import ReCAPTCHA from "react-google-recaptcha"; // TODO: uncomment on production
import { collection, addDoc, serverTimestamp, getCountFromServer, setDoc, doc } from "firebase/firestore";
import { db } from "../../../lib/firebase";

const contactInfo = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: "Address",
    value: "URBTECH NPX, 153 Noida, Uttar Pradesh, India",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: "Phone",
    value: "+917782069184",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: "Email",
    value: "info@indialaser.in",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: "Working Hours",
    value: "Mon–Sat: 9:30AM – 6:30 PM",
  },
];

// ── Generates sequential ID like IL0001, IL0002 ... ──
// Uses a separate "counters" collection to track the latest number safely.
async function generateEnquiryId() {
  const counterRef = doc(db, "counters", "contacts");

  // Read current count from the contacts collection
  const snapshot = await getCountFromServer(collection(db, "contacts"));
  const nextNumber = snapshot.data().count + 1;

  // Zero-pad to 4 digits: 1 → "0001", 99 → "0099"
  const paddedNumber = String(nextNumber).padStart(4, "0");
  return `IL${paddedNumber}`;
}

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    type: "",
    message: "",
  });

  const [captchaToken, setCaptchaToken] = useState(null);  // TODO: uncomment on production
  const [captchaError, setCaptchaError] = useState(false); // TODO: uncomment on production
  const [submitted, setSubmitted] = useState(false);
  const [submittedId, setSubmittedId] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // ── Captcha guard (commented out for localhost testing) ──
    if (!captchaToken) {          // TODO: uncomment on production
      setCaptchaError(true);      // TODO: uncomment on production
      return;                     // TODO: uncomment on production
    }                             // TODO: uncomment on production
    setCaptchaError(false);       // TODO: uncomment on production

    setIsSubmitting(true);

    // ── STEP 1: Generate sequential ID then save to Firestore ──
    let firestoreSaved = false;
    let enquiryId = "";

    try {
      enquiryId = await generateEnquiryId();

      // Use setDoc with the custom ID instead of addDoc
      await setDoc(doc(db, "contacts", enquiryId), {
        enquiryId,
        name: form.name,
        email: form.email,
        phone: form.phone,
        type: form.type,
        message: form.message,
        createdAt: serverTimestamp(),
        status: "new",
        source: "contact-page",
      });

      firestoreSaved = true;
    } catch (firestoreError) {
      console.error("Firestore save failed:", firestoreError);
    }

    // ── STEP 2: Send email via API route ──
    let emailSent = false;
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          enquiryType: form.type,
          message: form.message,
          enquiryId,                  
          // captcha: captchaToken,    
        }),
      });
      const result = await response.json();
      if (result.success) emailSent = true;
      else console.error("Email API error:", result.message);
    } catch (emailError) {
      console.error("Email send failed:", emailError);
    }

    setIsSubmitting(false);

    // ── STEP 3: Show result ──
    if (firestoreSaved || emailSent) {
      setSubmittedId(enquiryId);
      setSubmitted(true);

      setTimeout(() => {
        setSubmitted(false);
        setForm({ name: "", email: "", phone: "", type: "", message: "" });
      }, 5000);

    } else {
      setError("Something went wrong. Please call or WhatsApp us directly.");
    }
  };

  const inputClass =
    "w-full border border-gray-200 bg-gray-50 focus:bg-white p-2.5 rounded-lg text-sm outline-none focus:ring-2 focus:ring-[#e63946]/30 focus:border-[#e63946]/50 transition";

  const chipBase = "flex items-center gap-2 text-sm px-4 py-2 rounded-full shadow-sm transition";
  const redChip = chipBase + " bg-white border border-[#e63946]/30 text-[#e63946] hover:bg-[#e63946] hover:text-white";
  const greenChip = chipBase + " bg-white border border-green-200 text-green-700 hover:bg-green-600 hover:text-white";

  return (
    <section className="relative w-full overflow-x-hidden font-['Inter',sans-serif]">

      {/* ── BACKGROUND ── */}
      <div className="absolute inset-0">
        <Image src="/images/contact.png" alt="background" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* ── HERO BANNER ── */}
      <div className="relative z-10 w-full bg-white py-14 px-5 text-center border-b border-gray-100">
        <div className="flex items-center justify-center gap-2 mb-3">
          <span className="w-5 h-[2px] bg-[#e63946] rounded" />
          <span className="text-[#e63946] text-xs font-semibold uppercase tracking-[2px]">Get in Touch</span>
          <span className="w-5 h-[2px] bg-[#e63946] rounded" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 font-['Rajdhani',sans-serif]">
          Do you have a question?
        </h1>
        <p className="text-gray-500 max-w-2xl mx-auto text-base">
          Our team is here to help you with product details, pricing, and support. Feel free to reach out anytime.
        </p>

        <div className="flex flex-wrap justify-center gap-6 mt-6">
          <div className="flex flex-col items-center gap-1">
            <a href="tel:+917782069184" className={redChip}>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Us
            </a>
            <span className="text-xs text-gray-500 font-medium">+91 77820 69184</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <a href="mailto:info@indialaser.in" className={redChip}>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email Us
            </a>
            <span className="text-xs text-gray-500 font-medium">info@indialaser.in</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <a href="https://wa.me/+917782069184" target="_blank" rel="noreferrer" className={greenChip}>
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.118 1.532 5.845L.057 23.489l5.783-1.517A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.796 9.796 0 01-5.006-1.375l-.36-.214-3.733.978.998-3.645-.234-.374A9.772 9.772 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182S21.818 6.58 21.818 12 17.42 21.818 12 21.818z" />
              </svg>
              WhatsApp
            </a>
            <span className="text-xs text-gray-500 font-medium">+91 77820 69184</span>
          </div>
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-10">
        <div className="grid md:grid-cols-2 gap-8">

          {/* ── FORM ── */}
          <div className="bg-white shadow-lg rounded-2xl p-6 md:p-8">
            {submitted ? (
              /* SUCCESS STATE */
              <div className="flex flex-col items-center justify-center h-full py-12 text-center space-y-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 font-['Rajdhani',sans-serif]">Your Enquiry has been Submitted!</h3>

                <p className="text-gray-500 text-sm max-w-xs leading-relaxed">
                  Thank you, <span className="font-semibold text-[#e63946]">{form.name || "there"}</span>!
                  We'll get back to you at <span className="font-semibold">{form.email}</span> within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setSubmittedId("");
                    // setCaptchaToken(null); // TODO: uncomment on production
                    setForm({ name: "", email: "", phone: "", type: "", message: "" });
                  }}
                  className="mt-2 text-sm text-[#e63946] border border-[#e63946]/30 px-5 py-2 rounded-lg hover:bg-red-50 transition-colors"
                >
                  Submit another enquiry
                </button>
              </div>
            ) : (
              /* FORM STATE */
              <>
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-4 h-[2px] bg-[#e63946] rounded" />
                    <span className="text-[11px] font-semibold tracking-[2px] uppercase text-[#e63946]">Contact Us</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 font-['Rajdhani',sans-serif]">Enquiry Form</h2>
                  <p className="text-gray-400 text-sm mt-1">Fill in the details and we'll be in touch</p>
                </div>

                {/* Global error */}
                {error && (
                  <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-600">
                    {error}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* NAME + EMAIL */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold mb-1 text-gray-700">
                        Name <span className="text-[#e63946]">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Your full name"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-1 text-gray-700">
                        Email <span className="text-[#e63946]">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder="you@email.com"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  {/* PHONE */}
                  <div>
                    <label className="block text-sm font-semibold mb-1 text-gray-700">
                      Phone <span className="text-[#e63946]">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className={inputClass}
                    />
                  </div>

                  {/* ENQUIRY TYPE */}
                  <div>
                    <label className="block text-sm font-semibold mb-1 text-gray-700">
                      Enquiry Type <span className="text-[#e63946]">*</span>
                    </label>
                    <select
                      required
                      value={form.type}
                      onChange={(e) => setForm({ ...form, type: e.target.value })}
                      className={inputClass}
                    >
                      <option value="">Select enquiry type</option>
                      <option value="product">Product Inquiry</option>
                      <option value="service">Service Support</option>
                      <option value="general">General Enquiry</option>
                    </select>
                  </div>

                  {/* MESSAGE */}
                  <div>
                    <label className="block text-sm font-semibold mb-1 text-gray-700">
                      Your Enquiry <span className="text-[#e63946]">*</span>
                    </label>
                    <textarea
                      rows="4"
                      placeholder="Write your requirement..."
                      required
                      value={form.message}
                      maxLength={500}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className={inputClass + " resize-none"}
                    />
                    <p className="text-xs text-gray-400 mt-1 text-right">{form.message.length}/500</p>
                  </div>

                  {/* ── RECAPTCHA (commented out for localhost testing) ── */}
                  {/* TODO: uncomment everything below on production */}
                  <div>
                    <ReCAPTCHA
                      sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                      onChange={(token) => {
                        setCaptchaToken(token);
                        if (token) setCaptchaError(false);
                      }}
                      onExpired={() => setCaptchaToken(null)}
                    />
                    {captchaError && (
                      <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                        <svg className="w-3.5 h-3.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        Please complete the captcha before submitting.
                      </p>
                    )}
                  </div>

                  {/* SUBMIT */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 text-white ${isSubmitting
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-blue-700 hover:bg-blue-900 active:scale-[0.98]"
                      }`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                        </svg>
                        Submitting...
                      </>
                    ) : (
                      <>
                       
                        Submit Enquiry
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>

          {/* ── MAP + CONTACT INFO ── */}
          <div className="bg-white shadow-lg rounded-2xl p-4 md:p-6 flex flex-col w-full">
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-4 h-[2px] bg-[#e63946] rounded" />
                <span className="text-[11px] font-semibold tracking-[2px] uppercase text-[#e63946]">Find Us</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 font-['Rajdhani',sans-serif]">Our Location</h2>
              <p className="text-gray-400 text-sm mt-1">Visit us at our Noida office</p>
            </div>

            <div className="w-full h-[300px] md:flex-1 rounded-xl overflow-hidden shadow-inner border border-gray-100">
              <iframe
                src="https://www.google.com/maps?q=NPX%20Tower%20Noida&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-5">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-start gap-3 bg-gray-50 border border-gray-100 rounded-xl p-3 hover:border-blue-500/20 transition-colors">
                  <div className="shrink-0 w-9 h-9 bg-blue-700 text-white rounded-lg flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">{item.label}</p>
                    <p className="text-sm text-gray-700 font-medium leading-snug">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}