import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About Us - India Laser",
  description: "Learn more about India Laser and our commitment to providing high-quality laser machines and testing equipment.",
};

const stats = [
  { value: "8+", label: "Years of Excellence" },
  { value: "500+", label: "Laser Machines Installed" },
  { value: "1000+", label: "Happy Clients" },
  { value: "28+", label: "Cities Served Pan India" },
];

const values = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Precision First",
    desc: "Every laser machine we build and every service we deliver is held to the highest accuracy and quality standards.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Innovation Driven",
    desc: "We continuously invest in R&D to bring cutting-edge fiber laser and CO₂ laser technology to Indian industries.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    title: "Customer Centric",
    desc: "From pre-sales consultation to post-installation laser machine support, we stand with our clients at every step.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75l2.25 2.25 4.5-4.5m0 0a9 9 0 10-12.728 0M12 3v.75" />
      </svg>
    ),
    title: "Quality Assured",
    desc: "All our laser marking, cutting, and engraving machines undergo rigorous quality checks before delivery and installation.",
  },
];

const products = [
  {
    name: "Laser Marking Machines",
    desc: "Industrial-grade fiber laser marking machines and CO₂ laser marking machines for permanent marking on metals, plastics, ceramics, and more — widely used in automotive, electronics, and medical device manufacturing.",
  },
  {
    name: "Laser Cutting Machines",
    desc: "High-precision laser cutting machines for metal sheets, acrylic, wood, and fabric — ideal for sheet metal fabrication, signage, and garment industries.",
  },
  {
    name: "Laser Engraving Machines",
    desc: "Precision laser engraving machines for fine-detail work on metals, wood, glass, leather, and plastics — from jewellery engraving to large industrial part marking.",
  },
  {
    name: "Laser Soldering Systems",
    desc: "Laser soldering systems for contactless, precision soldering of PCBs, SMD components, and micro-electronic assemblies — reducing thermal damage in sensitive electronics manufacturing.",
  },
];

const services = [
  { title: "Installation & Commissioning", desc: "Expert on-site setup and laser machine commissioning by our certified engineers across India." },
  { title: "Annual Maintenance Contracts (AMC)", desc: "Scheduled AMC servicing plans to keep your laser machines running at peak performance year-round." },
  { title: "Breakdown Support", desc: "Fast-response laser machine repair service across 28+ cities in India — minimising your production downtime." },
  { title: "Operator Training", desc: "Hands-on training programmes for your team to get the most from your laser marking, cutting, and engraving machines." },
  { title: "Spare Parts Supply", desc: "Genuine spare parts and consumables available for all our laser machine models — delivered pan India." },
  { title: "Remote Diagnostics", desc: "Remote laser machine troubleshooting via our technical support team — quick resolution without a site visit." },
];

export default function About() {
  return (
    <div className="font-[Poppins]">

      {/* ── HERO ── */}
      <section className="relative py-16  bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#1d4ed8]">
        <div className="absolute inset-0 max-w-7xl mx-auto">
          <div className="absolute inset-0 " />
        </div>

        <div className="relative z-10  mx-auto px-6 text-center">
          <span className="inline-block bg-white/60 text-blue-800 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            About Indialaser
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 text-white">
            India's Trusted Laser Machine Manufacturer & Supplier
          </h1>
          <p className="text-white text-bold sm:text-base md:text-lg leading-relaxed max-w-5xl mx-auto">
            Indialaser is India's leading laser machine manufacturer and supplier, with over 8 years of
            experience delivering precision laser marking machines, laser cutting machines, laser engraving
            machines, and laser soldering systems. Trusted by 1,000+ clients across 28+ cities, we help
            manufacturers achieve industrial-grade precision at scale.
          </p>
        </div>

        {/* Cards */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-gray-200 p-6 rounded-xl shadow-md text-center hover:shadow-xl transition duration-300 border-t-4 border-blue-600">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold mb-2 text-gray-900">Laser Machines for Every Industry</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              High-quality laser marking, cutting, engraving, and soldering machines built for precision and industrial performance across automotive, electronics, medical, and more.
            </p>
          </div>

          <div className="bg-gray-200 p-6 rounded-xl shadow-md text-center hover:shadow-xl transition duration-300 border-t-4 border-blue-600">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold mb-2 text-gray-900">End-to-End Laser Machine Support</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Installation, Annual Maintenance Contracts (AMC), operator training, spare parts supply, and round-the-clock technical support to ensure smooth and efficient operations.
            </p>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="bg-gray-900 py-10 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-3xl md:text-4xl font-extrabold">{s.value}</p>
              <p className="text-sm text-blue-100 font-medium mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── MISSION & VISION ── */}
      <section className="bg-white py-16 px-4 md:px-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8">
            <div className="w-12 h-12 bg-blue-600 text-black rounded-xl flex items-center justify-center mb-5">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Our Mission</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              To make precision laser technology accessible to every Indian manufacturer — delivering
              reliable laser marking, cutting, and engraving machines backed by world-class after-sales
              support. We believe every factory deserves industrial laser accuracy.
            </p>
          </div>
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8 text-white">
            <div className="w-12 h-12 bg-blue-500 text-black rounded-xl flex items-center justify-center mb-5">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Our Vision</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              To be India's most trusted laser machine company — recognized not just for our fiber laser
              and CO₂ laser systems, but for the long-term partnerships we build, the uptime we guarantee,
              and the manufacturing sectors we transform through innovation.
            </p>
          </div>
        </div>
      </section>

      {/* ── CORE VALUES ── */}
      <section className="bg-gray-200 py-16 px-4 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
              Our DNA
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Core Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 text-center">
                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  {v.icon}
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{v.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES SNAPSHOT ── */}
      <section className="bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#1d4ed8] py-16 px-4 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block bg-white/20 text-white text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
              After-Sales
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Laser Machine Services We Provide</h2>
            <p className="text-white text-sm mt-2">We don't just sell laser machines — we support them for life with AMC, spare parts, and on-site service across India.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {services.map((s) => (
              <div key={s.title} className="bg-white border border-white/20 rounded-xl p-5 hover:bg-white/20 transition">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-white shrink-0 mt-2" />
                  <div>
                    <h4 className="font-semibold text-black mb-1 text-sm">{s.title}</h4>
                    <p className="text-gray-600 text-xs leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className=" bg-gray-900 py-14 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Looking for a Laser Machine Supplier in India?
          </h2>
          <p className="text-white text-sm md:text-base mb-7">
            Whether you need a new laser marking, cutting, or engraving machine, or after-sales support
            for an existing laser system — our expert team is available across India.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact-us"
              className="bg-white text-blue-600 font-semibold px-7 py-3 rounded-xl hover:bg-blue-50 transition shadow">
              Get in Touch
            </Link>
            <Link href="/services"
              className="border-2 border-white text-white font-semibold px-7 py-3 rounded-xl  hover:bg-blue-500 transition">
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* ── PRODUCTS SNAPSHOT ── */}
      <section className="bg-white py-16 px-4 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
              Product Range
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Our Laser Machine Product Range</h2>
            <p className="text-gray-500 text-sm mt-2 max-w-xl mx-auto">
              A comprehensive range of fiber laser and CO₂ laser systems for every industrial need.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {products.map((p) => (
              <div key={p.name} className="flex items-start gap-4 bg-gray-50 border border-gray-100 rounded-xl p-5 hover:border-blue-200 hover:bg-blue-50 transition-all duration-200">
                <div className="text-3xl shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">{p.name}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}