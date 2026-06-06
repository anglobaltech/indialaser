import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Laser Machine Sales",
    description:
      "We supply a wide range of industrial-grade laser machines including fiber laser marking machines, CO₂ laser cutting machines, laser engraving machines, and laser soldering systems — built for performance, durability, and long operational life.",
    highlights: [
      "Fiber laser & CO₂ laser machines",
      "Trusted brands & manufacturers",
      "Bulk & custom orders accepted",
    ],
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 4a1 1 0 011-1h.01a1 1 0 110 2H12a1 1 0 01-1-1zm-4 4h10M7 8v10a2 2 0 002 2h6a2 2 0 002-2V8M9 8V6a3 3 0 016 0v2" />
      </svg>
    ),
  },
  {
    title: "Installation & Setup",
    description:
      "Our certified engineers handle complete on-site installation, commissioning, and calibration of laser machines so your equipment is operational from day one — safely and efficiently across India.",
    highlights: [
      "On-site laser machine installation",
      "Equipment commissioning & testing",
      "Safety compliance checks",
    ],
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Warranty & AMC for Laser Machines",
    description:
      "Protect your laser machine investment with our comprehensive warranty coverage and Annual Maintenance Contracts (AMC) — designed to keep your fiber laser and CO₂ laser systems running at peak performance year-round.",
    highlights: [
      "Standard & extended warranty",
      "Scheduled preventive maintenance",
      "Priority breakdown response",
    ],
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Laser Machine Support",
    description:
      "Our dedicated laser machine support team is always ready to assist with technical queries, remote diagnostics, breakdown repair, and spare parts supply — minimising downtime and maximising productivity across India.",
    highlights: [
      "Dedicated laser support helpline",
      "Remote & on-site assistance",
      "Fast response turnaround",
    ],
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
];

const process = [
  { step: "01", title: "Submit Request", desc: "Contact us with your laser machine details and service requirements — sales, AMC, repair, or installation." },
  { step: "02", title: "Assessment", desc: "Our laser machine experts evaluate your equipment and provide a detailed service or quotation plan." },
  { step: "03", title: "Service Execution", desc: "Precision work carried out by certified engineers at our facility or on-site at your location across India." },
  { step: "04", title: "Report & Delivery", desc: "Receive service reports and your fully operational laser machine — delivered on time." },
];

export default function Services() {
  return (
    <div className="bg-white">

      {/* ── FULL SCREEN HERO BANNER ── */}
      <section className="relative w-full h-[40vh] sm:h-[55vh] md:h-[70vh] lg:min-h-screen xl:h-screen">
        <Image
          src="/images/services(4).png"
          alt="Indialaser laser machine services - installation, AMC, and support across India"
          fill
          sizes="100vw"
          className="object-fill object-center"
          priority
        />
  
      </section>

      {/* ── SERVICES TITLE BAR ── */}
      <div className="bg-[#003B7E] text-center py-3 md:py-4">
        <h1 className="text-xl md:text-3xl font-semibold text-white tracking-wide">
          Laser Machine Services in India
        </h1>
      </div>

      {/* ── INTRO STRIP ── */}
      <section className="bg-blue-50 border-b border-blue-100 py-10 px-4 text-center">
        <p className="text-gray-600 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
          Indialaser delivers end-to-end laser machine services trusted by manufacturers across India —
          from laser machine installation and commissioning to Annual Maintenance Contracts (AMC),
          breakdown repair, spare parts supply, and operator training.
        </p>
        <div className="flex flex-wrap justify-center gap-3 mt-6">
          <span className="bg-white border border-blue-200 text-blue-700 text-xs font-semibold px-4 py-1.5 rounded-full">Pan-India Coverage</span>
        </div>
      </section>

      {/* ── SERVICES CARDS GRID ── */}
      <section className="bg-gray-100 py-14 px-4 md:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
              What We Offer
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Our Laser Machine Services</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {services.map((svc) => (
              <div
                key={svc.title}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col overflow-hidden group"
              >
                <div className="h-1.5 bg-blue-600 w-full" />
                <div className="p-6 flex flex-col flex-1">
                  <div className="w-14 h-14 bg-blue-50 group-hover:bg-blue-600 text-blue-600 group-hover:text-white rounded-xl flex items-center justify-center mb-4 transition-colors duration-300">
                    {svc.icon}
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-2 uppercase tracking-wide">
                    {svc.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4 flex-1">
                    {svc.description}
                  </p>
                  <ul className="space-y-1">
                    {svc.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2 text-xs text-gray-600">
                        <svg className="w-3.5 h-3.5 text-blue-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="bg-white py-14 px-4 md:px-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
              Our Process
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">How Our Laser Machine Service Works</h2>
            <p className="text-gray-500 mt-2 text-sm max-w-xl mx-auto">
              A simple, transparent process — from service request to delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 relative">
            <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-blue-100 z-0" />

            {process.map((p) => (
              <div key={p.step} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-[#003B7E] text-white flex flex-col items-center justify-center mb-4 shadow-lg shadow-blue-200">
                  <span className="text-xs font-semibold text-blue-200 leading-none">STEP</span>
                  <span className="text-2xl font-extrabold leading-tight">{p.step}</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-1">{p.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL ── */}
      <section className="bg-white py-14 px-4 md:px-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
              Testimonials
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">What Our Clients Say About Our Laser Services</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                quote: "Indialaser's installation and AMC team is thorough and professional. Their laser machine service turnaround time is exceptional and we've had zero unplanned downtime since.",
                name: "Rajesh Mehta",
                role: "QA Manager, Pharma Company",
              },
              {
                quote: "Their Annual Maintenance Contract for our laser marking machines has dramatically reduced equipment downtime. Highly recommend their laser machine support across India.",
                name: "Anita Singh",
                role: "Operations Head, Auto Components Ltd.",
              },
              {
                quote: "Indialaser's laser machine repair service is top-notch. They quickly diagnosed and fixed our CO₂ laser cutter, minimizing disruption to our production schedule.",
                name: "Vikram Patel",
                role: "Plant Manager, Packaging Firm",
              },
              {
                quote: "The team at Indialaser provided excellent support for our laser welding machine. Their expertise and timely service have been invaluable to our operations.",
                name: "Priya Sharma",
                role: "Production Manager, Electronics Manufacturer",
              }
            ].map((t) => (
              <div key={t.name} className="bg-gray-100 border border-blue-100 rounded-2xl p-6 relative">
               
                <p className="text-gray-600 text-sm leading-relaxed mb-5 bold">{t.quote}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm">{t.name}</p>
                    <p className="text-xs text-gray-400">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="bg-gray-500 py-14 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Need Laser Machine Service or Support in India?
          </h2>
          <p className="text-blue-100 text-sm md:text-base mb-7">
            Whether you need a new laser machine, an Annual Maintenance Contract (AMC), breakdown
            repair, or spare parts — our expert team is available across 28+ cities in India.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact-us"
              className="bg-white text-blue-600 font-semibold px-7 py-3 rounded-lg hover:bg-blue-50 transition shadow"
            >
              Contact Us
            </Link>
            <a
              href="tel:+919876543210"
              className="border-2 border-white text-white font-semibold px-7 py-3 rounded-lg hover:bg-white/10 transition"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}