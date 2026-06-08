"use client";
import EnquiryPopup from "./EnquiryPopup";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
export const metadata = { title: "India Laser - High-Quality Laser Machines and Testing Equipment", 
  description: "Discover top-notch laser machines and testing equipment at India Laser. We offer a wide range of products including fiber lasers, CO2 lasers, UV lasers, welding machines, and gold testing equipment. Our solutions are designed to meet the needs of various industries with precision and reliability.",
};
const NAV = "#003B7E";
const NAV_DARK = "#002a5c";
const NAV_LIGHT = "#e8eef7";
const GRAY_BG = "#f5f6f8";
const GRAY_MID = "#6b7280";
const GRAY_BORDER = "#d1d5db";
const WHITE = "#ffffff";

const productCategories = [
  {
    id: "testing",
    badge: "gold testing machine",
    heading: "XRF Machine",
    body: [
      "XRF Gold Testing Machines are advanced analytical instruments designed for accurate, non-destructive gold purity analysis and precious metal composition testing in modern jewellery, trading, and refinery industries. These machines use X-Ray Fluorescence (XRF) technology to deliver fast and precise measurement of gold karat value and alloying element content without damaging the sample.",
      "XRF gold testing technology provides excellent accuracy, reliable results, and consistent performance, making it ideal for hallmarking centres, jewellery manufacturers, gold traders, pawn shops, and quality control laboratories. The process ensures accurate identification of gold purity while eliminating the need for acid testing, fire assay, or any destructive method.",
      "These machines are suitable for testing gold jewellery, gold bars, coins, dental gold, electronic scrap, plated items, and precious metal alloys. With programmable control systems and high-speed analysis, XRF Gold Testing Machines improve testing efficiency, traceability, and compliance with BIS and international purity standards.",
    ],
    img: {
      src: "/laser-machines/xrf-gold file.png",
      alt: "XRF gold testing machine for jewellery and precious metal purity analysis",
    },
    imageFirst: true,
  },
  {
    id: "solar panel",
    badge: "solar panel testing",
    heading: "Universal Testing Machine (Double Arm)",
    body: [
      "The Universal Testing Machine (Double Arm) for Solar Testing — also known as a Twin-Column UTM or Dual-Arm UTM for PV module testing — is a high-capacity, high-precision mechanical testing instrument specifically engineered for the structural qualification of full-size solar photovoltaic (PV) modules.",
      "Designed for solar panel frames, solar mounting structures, utility-scale racking systems, and large solar assembly components under controlled tensile, compressive, flexural, and shear loading. The twin-column frame provides a rigid, symmetric load path.",
      "With a large, unobstructed test space capable of accommodating full-size solar modules (up to 2400 mm × 1200 mm with appropriate fixtures) for IEC 61215 static mechanical load testing, frame pull strength qualification, and module-level flexural and dynamic load testing.",
    ],
    img: {
      src: "/other-products/double-arm.png",
      alt: "Universal testing machine double arm for solar panel structural testing",
    },
    imageFirst: false,
  },
  {
    id: "cutting",
    badge: "Laser cutting & soldering",
    heading: "Fiber Laser Cutting & Soldering Systems",
    body: [
      "Our laser soldering machines use a precision fiber laser beam for contactless soldering of PCBs, SMD components, and micro-electronic assemblies. Laser soldering eliminates mechanical stress and thermal damage, making it the preferred soldering solution for sensitive electronics manufacturing where traditional soldering methods fall short.",
      "Indialaser's laser soldering systems can solder a wide range of materials including steel, aluminium, stainless steel, polymers, and rubber components. Each system supports 2D barcode integration, serial number tracking, and seamless connectivity with your existing production line — delivering consistent, audit-ready results.",
    ],
    img: {
      src: "/laser-machines/laser soldering(2).png",
      alt: "Fiber laser cutting machine for metal sheet cutting India",
    },
    imageFirst: true,
  },
];

const faqItems = [
  {
    q: "What materials can your laser marking machines mark?",
    a: "Our fiber laser and CO₂ laser marking machines permanently mark steel, aluminium, stainless steel, titanium, polymers, rubber, coated metals, and many more industrial materials — with high-contrast, durable results that survive polishing and post-processing.",
  },
  {
    q: "Do you provide laser machine installation and operator training?",
    a: "Yes — every laser machine purchase includes on-site installation, full commissioning, and hands-on operator training so your team is productive from day one, anywhere in India.",
  },
  {
    q: "What warranty do your laser machines carry?",
    a: "We offer a 1-year comprehensive warranty on all laser machines, with optional Annual Maintenance Contracts (AMC) and extended service contracts available up to 3 years.",
  },
  {
    q: "Can laser machines be customised for my production line?",
    a: "Absolutely. We offer custom laser machine configurations including field size, power output, conveyor integration, rotary attachments, and software API access — tailored to your specific production workflow.",
  },
  {
    q: "What is the typical delivery timeline for a laser machine?",
    a: "Standard laser machine models are dispatched within 7–10 working days. Custom-configured laser systems typically take 3–4 weeks depending on specifications.",
  },
  {
    q: "Do you offer after-sales laser machine support across India?",
    a: "Yes. We have a pan-India network of trained laser machine service engineers who provide prompt on-site support, preventive maintenance under AMC, and genuine spare parts supply across 28+ cities.",
  },
];

function FAQItem({ q, a, isOpen, onToggle }) {
  return (
    <div className="border-b border-gray-200 first:border-t first:border-gray-200">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
      >
        <span
          className="text-[15px] font-semibold transition-colors"
          style={{ color: isOpen ? NAV : "#1f2937" }}
        >
          {q}
        </span>
        <span
          className="flex-shrink-0 w-6 h-6 rounded-full border flex items-center justify-center transition-all duration-200"
          style={{
            background: isOpen ? NAV : "#f3f4f6",
            borderColor: isOpen ? NAV : "#d1d5db",
            transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
          }}
          aria-hidden="true"
        >
          <svg
            style={{ color: isOpen ? "#ffffff" : "#6b7280" }}
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <line x1="6" y1="1" x2="6" y2="11" />
            <line x1="1" y1="6" x2="11" y2="6" />
          </svg>
        </span>
      </button>

      <div
        className="grid transition-all duration-300 ease-in-out"
        style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p className="text-sm text-gray-600 leading-relaxed pb-5">{a}</p>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const images = ["/images/home.png", "/images/home2.png"];

  const [current, setCurrent] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main>
      {/* ── HERO SLIDER ── */}
      <section className="relative w-full h-[55vh] sm:h-[65vh] md:h-[90vh] overflow-hidden">
        <div
          className="flex transition-transform duration-700 h-full"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {images.map((img, index) => (
            <div key={index} className="relative w-full h-full flex-shrink-0">
              <Image
                src={img}
                alt={
                  index === 0
                    ? "Indialaser fiber laser marking and cutting machines for industrial use"
                    : "Advanced CO₂ laser engraving and soldering machines by Indialaser India"
                }
                fill
                priority
                sizes="100vw"
                className="object-cover object-center"
              />
            </div>
          ))}
        </div>

        <div className="absolute inset-0" style={{ background: "rgba(0,15,40,0.62)" }} />

        <div className="absolute inset-0 flex items-center">
          <div
            className="flex transition-transform duration-700 w-full h-full"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {images.map((_, index) => (
              <div key={index} className="w-full flex-shrink-0 flex items-center">
                <div className="w-full md:w-2/3 lg:w-1/2 px-8 sm:px-12 md:px-20 py-6 md:py-10 flex flex-col gap-4">
                  <div
                    className="inline-block self-start text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-sm"
                    style={{
                      background: "rgba(255,255,255,0.12)",
                      color: "#c8d9f0",
                      border: "1px solid rgba(255,255,255,0.2)",
                      letterSpacing: "0.12em",
                    }}
                  >
                    India's Trusted Laser Machine Manufacturer
                  </div>

                  <h1 className="text-white text-2xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold leading-tight">
                    {index === 0
                      ? "Laser Marking, Cutting & Engraving Machines for Industries"
                      : "Fiber Laser & CO₂ Laser Machines Built for Precision Engineering"}
                  </h1>

                  <p
                    className="text-blue-100 text-sm sm:text-base leading-relaxed max-w-lg"
                    style={{ opacity: 0.85 }}
                  >
                    {index === 0
                      ? "Industrial-grade laser marking machines, laser cutting machines, and laser soldering systems — trusted by 1,000+ manufacturers across India for precision, durability, and efficiency."
                      : "Our fiber laser and CO₂ laser systems deliver sub-micron accuracy, high speed, and long-term reliability across automotive, electronics, jewellery, and heavy engineering industries."}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3 mt-1">
                    <Link href="/contact-us">
                      <button
                        className="text-white text-sm font-medium px-7 py-2.5 rounded transition-all"
                        style={{ background: NAV, border: `1px solid ${NAV}` }}
                        onMouseEnter={(e) => (e.currentTarget.style.background = NAV_DARK)}
                        onMouseLeave={(e) => (e.currentTarget.style.background = NAV)}
                      >
                        Get a Free Quote
                      </button>
                    </Link>
                    <Link href="/laser-machines">
                      <button
                        className="text-white text-sm font-medium px-7 py-2.5 rounded transition-all"
                        style={{
                          background: "transparent",
                          border: "1px solid rgba(255,255,255,0.45)",
                        }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.background = "rgba(255,255,255,0.1)")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.background = "transparent")
                        }
                      >
                        Explore Laser Machines
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className="transition-all duration-300 rounded-full"
              style={{
                width: current === index ? 24 : 8,
                height: 8,
                background: current === index ? WHITE : "rgba(255,255,255,0.4)",
              }}
            />
          ))}
        </div>
      </section>

      {/* ── ABOUT US CARD ── */}
      <section className="bg-gray-50 py-10 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <div>
            <span className="text-blue-600 text-xs font-bold tracking-widest uppercase">
              Who We Are
            </span>
            <h2 className="text-3xl font-extrabold mt-2 mb-6 leading-tight">
              India's Leading Laser Machine <br />
              Manufacturer & Supplier
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Indialaser specializes in advanced laser machines including fiber laser marking machines,
              CO₂ laser cutting machines, laser engraving machines, and laser soldering systems. With
              8+ years of experience, our mission is to deliver precision, innovation, and high-quality
              laser technology to industries across India — from jewellery to heavy engineering.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Trusted by 1,000+ clients across 28+ cities, we provide reliable laser machines designed
              to enhance productivity and efficiency — backed by end-to-end after-sales support
              including installation, AMC, and spare parts supply.
            </p>
            <div className="flex gap-4 flex-wrap">
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs">
                  ✓
                </span>
                Pan-India Laser Machine Support
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs">
                  ✓
                </span>
                Custom Laser Solutions
              </div>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="absolute -inset-4 bg-blue-100 rounded-3xl rotate-3" />
            <div className="relative bg-white rounded-2xl shadow-xl p-10 flex items-center justify-center">
              <Image
                src="/images/logoo.png"
                alt="Indialaser - laser machine manufacturer and supplier India"
                width={200}
                height={200}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── PRODUCT CATEGORIES ── */}
      <section className="bg-gray-50 px-4 py-10">
        {/* Section heading */}
        <div className="text-center mb-14">
          <span className="text-blue-600 text-xs font-bold tracking-widest uppercase">
            What We Offer
          </span>
          <h2 className="text-3xl font-bold text-gray-900 mt-2 tracking-wide uppercase">
            Our Products
          </h2>
          <div className="mt-3 mx-auto w-14 h-1 bg-blue-600 rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto space-y-10">
          {productCategories.map((item, index) => (
            <div
              key={item.id}
              className={`flex flex-col ${
                item.imageFirst ? "md:flex-row" : "md:flex-row-reverse"
              } bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100`}
            >
              {/* Image panel */}
              <div className="md:w-[42%] bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center p-10 min-h-[300px]">
                <img
                  src={item.img.src}
                  alt={item.img.alt}
                  className="w-full max-w-[300px] max-h-[260px] object-contain"
                />
              </div>

              {/* Vertical divider (desktop only) */}
              <div className="hidden md:block w-px bg-gray-100 self-stretch" />

              {/* Text panel */}
              <div className="md:w-[58%] p-8 md:p-10 flex flex-col justify-center">
                <span
                  className="inline-block self-start text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wider border"
                  style={{
                    background: "#eff6ff",
                    color: "#1d4ed8",
                    borderColor: "#bfdbfe",
                  }}
                >
                  {item.badge}
                </span>

                <h3 className="text-xl font-bold text-gray-900 mb-4 leading-snug">
                  {item.heading}
                </h3>

                <div className="space-y-3">
                  {item.body.map((para, i) => (
                    <p key={i} className="text-sm text-gray-600 leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>

                <div className="mt-7 flex items-center gap-3">
                  <Link href="/contact-us">
                    <button
                      className="text-sm font-semibold text-white px-6 py-2.5 rounded-lg transition-all"
                      style={{ background: NAV }}
                      onMouseEnter={(e) => (e.currentTarget.style.background = NAV_DARK)}
                      onMouseLeave={(e) => (e.currentTarget.style.background = NAV)}
                    >
                      Enquire Now →
                    </button>
                  </Link>
                  <Link href="/laser-machines">
                    <button
                      className="text-sm font-semibold px-6 py-2.5 rounded-lg border transition-all text-blue-700 hover:bg-blue-50"
                      style={{ borderColor: "#93c5fd" }}
                    >
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA SECTION ── */}
      <section className="cta-section relative w-full overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#1d4ed8]">
        <div className="cta-grid absolute inset-0 pointer-events-none" />
        <div className="orb-1 absolute top-[-80px] left-[-60px] w-[320px] h-[320px] rounded-full bg-blue-400 blur-[90px] pointer-events-none" />
        <div className="orb-2 absolute bottom-[-60px] right-[-40px] w-[280px] h-[280px] rounded-full bg-blue-300 blur-[80px] pointer-events-none" />
        <div className="orb-3 absolute top-[35%] left-[58%] w-[180px] h-[180px] rounded-full bg-indigo-400 blur-[60px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto py-12 sm:py-16 flex flex-col items-center text-center">
          <div className="badge-shimmer inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-1 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-300 inline-block" />
            <span className="text-blue-100 text-xs font-medium tracking-[0.14em] uppercase">
              Trusted by 1,000+ Manufacturers Across India
            </span>
          </div>

          <h2 className="cta-display text-white text-[clamp(2.2rem,4vw,3rem)] mb-4 max-w-5xl">
            Buy Smarter.&nbsp; Cut <span className="word-accent">Faster.</span>
            &nbsp; Mark Better.
          </h2>

          <p className="text-blue-100/80 text-sm sm:text-base max-w-2xl leading-relaxed mb-7">
            India's most trusted laser machine manufacturer — offering fiber laser marking machines,
            CO₂ laser cutting machines, laser engraving machines, and laser soldering systems backed
            by pan-India installation, AMC, and after-sales support.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 items-center mb-8">
            <Link href="/contact-us">
              <button className="btn-primary bg-white text-blue-800 font-semibold text-sm px-7 py-3 rounded-lg shadow-xl">
                Get a Free Quote →
              </button>
            </Link>
            <Link href="/laser-machines">
              <button className="btn-outline border border-white/30 text-white font-medium text-sm px-7 py-3 rounded-lg">
                Browse Laser Machines
              </button>
            </Link>
          </div>

          <div className="w-full max-w-7xl grid grid-cols-3 gap-0 rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm">
            {[
              { value: "1,000+", label: "Clients Across India" },
              { value: "8+", label: "Years Experience" },
              { value: "500+", label: "Laser Machines Installed" },
            ].map((s, i) => (
              <div
                key={i}
                className={`flex flex-col items-center justify-center py-4 px-3 ${
                  i < 2 ? "border-r border-white/10" : ""
                }`}
              >
                <span className="cta-display text-white text-2xl sm:text-3xl">{s.value}</span>
                <span className="text-blue-200/70 text-[10px] sm:text-[11px] mt-0.5 tracking-wide uppercase">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-gray-100/10 to-transparent pointer-events-none" />
      </section>

      {/* ── CLIENT REVIEWS SLIDER ── */}
      <section className="bg-gray-100 py-12 px-4 overflow-hidden">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">
          What Our Laser Machine Clients Say
        </h2>

        <div className="relative w-full overflow-hidden">
          <div className="flex gap-6 animate-scroll">
            <div className="min-w-[300px] bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 text-sm mb-4">
                "Excellent laser marking machine quality! Our production efficiency increased
                significantly after switching to Indialaser's fiber laser system."
              </p>
              <h4 className="font-semibold">Rahul Sharma</h4>
              <span className="text-xs text-gray-500">Manufacturing Industry</span>
            </div>

            <div className="min-w-[300px] bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 text-sm mb-4">
                "Very reliable and precise laser engraving machines. The after-sales support team is
                outstanding — quick response and genuine spare parts."
              </p>
              <h4 className="font-semibold">Neha Verma</h4>
              <span className="text-xs text-gray-500">Jewellery Business</span>
            </div>

            <div className="min-w-[300px] bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 text-sm mb-4">
                "Highly recommended for industrial laser solutions. Their laser cutting machine ROI is
                excellent — worth every penny for sheet metal fabrication."
              </p>
              <h4 className="font-semibold">Amit Gupta</h4>
              <span className="text-xs text-gray-500">Engineering Firm</span>
            </div>

            {/* Duplicates for smooth loop */}
            <div className="min-w-[300px] bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 text-sm mb-4">
                "Excellent laser marking machine quality! Our production efficiency increased
                significantly after switching to Indialaser's fiber laser system."
              </p>
              <h4 className="font-semibold">Rahul Sharma</h4>
            </div>

            <div className="min-w-[300px] bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 text-sm mb-4">
                "Very reliable and precise laser engraving machines. The after-sales support team is
                outstanding — quick response and genuine spare parts."
              </p>
              <h4 className="font-semibold">Neha Verma</h4>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="bg-gray-400 px-10 py-14">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-black tracking-wide pb-10">
            HOW TO BUY A LASER MACHINE FROM INDIALASER
          </h2>
        </div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Enquire",
                body: "Reach out via our enquiry form or call us. Describe your laser marking, cutting, or engraving application and production volume requirements.",
              },
              {
                step: "02",
                title: "Consult",
                body: "Our laser machine engineers assess your requirements and recommend the most suitable fiber laser or CO₂ laser system for your industry.",
              },
              {
                step: "03",
                title: "Configure",
                body: "We customise laser machine specifications — power, field size, software settings, rotary attachments, and accessories — to match your exact workflow.",
              },
              {
                step: "04",
                title: "Install & Train",
                body: "On-site laser machine delivery, full installation, commissioning, and hands-on operator training are included with every purchase across India.",
              },
            ].map((s, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl hover:-translate-y-2 hover:bg-blue-50 transition duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-blue-500 text-white font-bold text-lg flex items-center justify-center mx-auto mb-4">
                  {s.step}
                </div>
                <h3 className="text-base font-semibold mb-2">{s.title}</h3>
                <p className="text-gray-700 text-[14px] leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="bg-gray-100 py-10">
        <div className="bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#1d4ed8] py-4 text-center">
          <h2 className="text-3xl font-semibold text-white tracking-wide">
            WHY CHOOSE INDIALASER FOR LASER MACHINES
          </h2>
        </div>
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                title: "8+ Years as Laser Machine Manufacturer",
                body: "Over 8 years of delivering precision fiber laser and CO₂ laser solutions to industries across India — automotive, electronics, jewellery, pharma, and heavy engineering.",
              },
              {
                title: "Custom Laser Machine Configurations",
                body: "Every laser machine can be tailored to your production requirements — power output, field size, conveyor integration, rotary attachments, and software API access.",
              },
              {
                title: "Fast Delivery & On-Site Setup",
                body: "Quick turnaround from order to laser machine installation — with on-site commissioning and operator training included for every purchase across India.",
              },
              {
                title: "Pan-India Laser Machine Support",
                body: "Dedicated service engineers available across 28+ cities in India for prompt technical assistance, AMC servicing, and genuine spare parts supply.",
              },
              {
                title: "Sub-Micron Laser Precision",
                body: "Sub-micron accuracy on every laser marking, cutting, and engraving machine — ensuring your output consistently meets the strictest industrial quality standards.",
              },
              {
                title: "High ROI on Laser Machines",
                body: "Reduce waste, lower rework costs, and improve cycle times — most clients recover their laser machine investment within 12 months of installation.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-2 hover:bg-blue-50 transition duration-300"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-base font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-700 text-[14px] leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-14 px-6">
        <div className="text-center mb-10">
          <h2 className="font-semibold text-[#003B7E] text-2xl tracking-wide">
            FREQUENTLY ASKED QUESTIONS — LASER MACHINES
          </h2>
        </div>
        <div className="max-w-3xl mx-auto">
          {faqItems.map((f, i) => (
            <FAQItem
              key={i}
              q={f.q}
              a={f.a}
              isOpen={openFaq === i}
              onToggle={() => setOpenFaq((prev) => (prev === i ? null : i))}
            />
          ))}
        </div>
      </section>

      {showPopup && <EnquiryPopup onClose={() => setShowPopup(false)} />}
    </main>
  );
}