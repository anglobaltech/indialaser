"use client";

import { useState } from "react";
import Image from "next/image";

export default function EnquiryPopup({ onClose }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    type: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          enquiryType: form.type || "Popup Enquiry",
          message: form.message || `Phone: ${form.phone}`,
          captcha: "skip",
        }),
      });

      const data = await res.json();

      if (data.success) {
        alert("Enquiry submitted successfully!");
        onClose();
      } else {
        alert(data.message || "Something went wrong");
      }
    } catch (error) {
      alert("Error submitting enquiry");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 px-0 sm:px-4">

      {/* Card — slides up on mobile, centered on sm+ */}
      <div className="relative w-full sm:max-w-md bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl overflow-hidden">

        {/* Top accent bar */}
        <div className="h-1 w-full bg-gradient-to-r from-blue-600 to-blue-400" />

        {/* Header */}
        <div className="flex items-center justify-between px-5 pt-4 pb-3 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logoo.png"
              alt="India Laser logo"
              width={36}
              height={36}
              className="object-contain"
            />
            <div>
              <p className="text-sm font-bold text-gray-900 leading-tight">India Laser</p>
              <p className="text-xs text-gray-400 leading-tight">Quick Enquiry</p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close enquiry form"
            className="w-8 h-8 flex items-center justify-center rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition text-lg font-bold"
          >
            ✕
          </button>
        </div>

        {/* Form body */}
        <form onSubmit={handleSubmit} className="px-5 py-4 space-y-3">

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input
              type="text"
              placeholder="Your name"
              className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              required
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <input
              type="tel"
              placeholder="Phone number"
              className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              required
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />
          </div>

          <input
            type="email"
            placeholder="Email address"
            className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            required
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <select
            className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-white appearance-none"
            required
            onChange={(e) => setForm({ ...form, type: e.target.value })}
            defaultValue=""
          >
            <option value="" disabled>Select service</option>
            <option value="Laser Marking">Laser Marking</option>
            <option value="Laser Cutting">Laser Cutting</option>
            <option value="Laser Engraving">Laser Engraving</option>
            <option value="Laser Soldering">Laser Soldering</option>
          </select>

          <textarea
            placeholder="Your message (optional)"
            className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
            rows="3"
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2.5 rounded-lg text-white text-sm font-semibold tracking-wide transition ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700 active:scale-[0.98]"
            }`}
          >
            {loading ? "Submitting..." : "Submit Enquiry"}
          </button>

          <p className="text-center text-[11px] text-gray-400 pb-1">
            We'll get back to you within 24 hours.
          </p>

        </form>
      </div>
    </div>
  );
}