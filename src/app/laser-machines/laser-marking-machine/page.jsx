"use client";

import { useState } from "react";
import Link from "next/link";

// ─── DATA ─────────────────────────────────────

const machineVariants = [
  {
    id: "fiber",
    label: "Fiber Laser",
    tagline: "High-speed metal precision",
    desc: "Ideal for marking metals like steel, aluminum, copper and alloys with high speed and deep engraving capability.",
  },
  {
    id: "co2",
    label: "CO₂ Laser",
    tagline: "Non-metal marking solution",
    desc: "Perfect for wood, acrylic, leather, rubber and glass with excellent surface finish and clarity.",
  },
  {
    id: "uv",
    label: "UV Laser",
    tagline: "Cold marking technology",
    desc: "Best for heat-sensitive materials like PCB, plastics, medical packaging and fine precision work.",
  },
];

const specs = {
  fiber: [
    ["Laser Power", "20W / 30W / 50W / 100W"],
    ["Speed", "Up to 7000 mm/s"],
    ["Accuracy", "±0.002 mm"],
    ["Cooling", "Air Cooled"],
  ],
  co2: [
    ["Laser Power", "30W / 60W / 100W"],
    ["Speed", "Up to 3000 mm/s"],
    ["Accuracy", "±0.005 mm"],
    ["Cooling", "Air/Water"],
  ],
  uv: [
    ["Laser Power", "3W / 5W / 10W"],
    ["Speed", "Up to 4000 mm/s"],
    ["Accuracy", "±0.001 mm"],
    ["Cooling", "Air Cooled"],
  ],
};

const faqs = [
  {
    q: "Which laser is best for metal?",
    a: "Fiber laser is best for all types of metal marking due to its high absorption and speed.",
  },
  {
    q: "Can one machine mark all materials?",
    a: "No. Fiber is for metal, CO₂ for non-metal, UV for sensitive materials.",
  },
  {
    q: "What is the maintenance requirement?",
    a: "Regular cleaning and occasional part replacement, depending on usage.",
  },
  {
    q: "How long is the warranty?",
    a: "We offer a standard 1-year warranty on all our laser marking machines.",
  }
];

// ─── MAIN COMPONENT ───────────────────────────

export default function LaserPage() {
  const [active, setActive] = useState("fiber");

  return (
    <div className="font-sans text-slate-800">

      {/* VARIANTS */}
      <section className="py-[70px] px-[20px] bg-[#003B7E]">
        <div className="max-w-[1280px] mx-auto">

          <h2 className="text-[30px] font-semibold text-slate-200 mb-[10px] text-center">
            Laser Marking Machine Types
          </h2>

          <p className="text-[15px] text-slate-200 text-center max-w-[720px] mx-auto mb-[40px] leading-[1.6]">
            We offer Fiber, CO₂ and UV laser marking machines designed for different materials and industrial applications.
            Each technology delivers precise, permanent marking with reliable performance.
          </p>

          <div className="grid gap-[24px] grid-cols-[repeat(auto-fit,minmax(280px,1fr))]">

            {machineVariants.map((m) => (
              <div
                key={m.id}
                className="border border-slate-200 p-[24px] rounded-[10px] bg-white cursor-pointer hover:shadow-md transition"
                onClick={() => setActive(m.id)}
              >

                <h3 className="text-[18px] font-semibold text-slate-800 mb-[6px]">
                  {m.label} Marking Machine
                </h3>

                <p className="text-blue-600 text-[13px] mb-[10px]">
                  {m.tagline}
                </p>

                <p className="text-slate-500 text-[14px] leading-[1.6]">
                  {m.desc}
                </p>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* FIBER LASER SECTION */}
      <section className="py-[70px] px-[20px] bg-white">
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-3 gap-[30px] items-center">

          {/* LEFT IMAGE */}
          <div className="md:col-span-1">
            <div className="h-[260px] bg-white rounded-[10px]">
              <img
                src="/laser-machines/fiber-laser-machine.webp"
                alt="fiber laser marking machine for metal marking"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="md:col-span-2">

            <h2 className="text-[26px] font-semibold mb-[10px] text-slate-800">
              Fiber Laser Marking Machine
            </h2>

            <p className="text-[14px] text-slate-600 leading-[1.6] mb-[10px]">
              Ideal for marking metals like steel, aluminum, copper and alloys with high speed
              and deep engraving capability.
            </p>

            <p className="text-[14px] text-slate-500 leading-[1.6] mb-[15px]">
              This fiber laser marking machine is widely used in industrial manufacturing
              for permanent marking, serial numbers, QR codes and branding. It ensures
              high precision, fast processing speed and long-term durability without consumables.
            </p>

            <h3 className="text-[15px] font-semibold mb-[8px] text-slate-700">
              Key Specifications
            </h3>

            <div>
              {specs.fiber.map((s, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center border-b border-slate-200 py-[6px] text-[13px]"
                >
                  <span className="text-slate-700">{s[0]}</span>
                  <span className="text-slate-500 text-right">{s[1]}</span>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* CO2 DETAILS */}
      <section className="py-[70px] px-[20px] bg-white">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-[40px] items-center">

          {/* LEFT: CONTENT (takes 2 columns) */}
          <div className="md:col-span-2">

            <h2 className="text-[26px] font-semibold mb-[10px] text-slate-800">
              CO₂ Laser Marking Machine
            </h2>

            <p className="text-[14px] text-slate-600 leading-[1.7] mb-[12px]">
              Perfect for non-metal materials such as wood, acrylic, leather, rubber,
              and glass. It delivers smooth surface finishing with high precision and clarity.
            </p>

            <p className="text-[14px] text-slate-500 leading-[1.7] mb-[16px]">
              Designed for industries like packaging, handicrafts, and branding,
              this machine ensures consistent marking quality with reliable performance
              in continuous production environments.
            </p>

            <h3 className="text-[15px] font-semibold mb-[10px] text-slate-700">
              Key Specifications
            </h3>

            <div className="space-y-[6px]">
              {specs["co2"].map((s, i) => (
                <div
                  key={i}
                  className="flex justify-between border-b border-slate-200 pb-[6px] text-[14px]"
                >
                  <span className="text-slate-700">{s[0]}</span>
                  <span className="text-slate-500">{s[1]}</span>
                </div>
              ))}
            </div>

          </div>

          {/* RIGHT: IMAGE (1 column) */}
          <div className="md:col-span-1">
            <div className="h-[260px] bg-white rounded-[10px]">
              <img
                src="/laser-machines/co2-laser-marking.webp"
                alt="CO2 laser marking machine for wood acrylic leather glass engraving"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

        </div>
      </section>

      {/* UV LASER SECTION */}
      <section className="py-[70px] px-[20px] bg-white">
        <div className="max-w-[1100px] mx-auto grid md:grid-cols-3 gap-[30px] items-center">

          {/* IMAGE (LEFT) */}
          <div className="md:col-span-1">
            <div className="h-[260px] bg-white rounded-[10px]">
              <img
                src="/laser-machines/uv-marking-machine.webp"
                alt="UV laser marking machine for plastic PCB and medical packaging"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* CONTENT (RIGHT - spans 2 columns) */}
          <div className="md:col-span-2">

            <h2 className="text-[26px] font-semibold mb-[10px] text-slate-800">
              UV Laser Marking Machine
            </h2>

            <p className="text-[14px] text-slate-600 leading-[1.7] mb-[12px]">
              Best for heat-sensitive materials like PCB, plastics, medical packaging and fine precision work.
            </p>

            <p className="text-[14px] text-slate-500 leading-[1.7] mb-[18px]">
              UV laser marking uses cold marking technology that prevents material damage,
              making it ideal for delicate surfaces and high-precision industrial applications.
            </p>

            <h3 className="text-[15px] font-semibold mb-[10px] text-slate-700">
              Key Specifications
            </h3>

            <div className="space-y-[6px]">
              {specs["uv"].map((s, i) => (
                <div
                  key={i}
                  className="flex justify-between border-b border-slate-200 pb-[4px] text-[14px]"
                >
                  <span className="text-slate-700">{s[0]}</span>
                  <span className="text-slate-500">{s[1]}</span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="py-[60px] px-[20px] bg-gray-100">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="text-[28px] mb-[20px]">Applications</h2>

          <div className="grid gap-[20px] grid-cols-[repeat(auto-fit,minmax(220px,1fr))]">
            {["Automotive", "Electronics", "Jewellery", "Packaging"].map((a, i) => (
              <div key={i} className="border border-slate-200 p-[20px] rounded-[8px]">
                <h4>{a}</h4>
                <p className="text-[13px] text-[#003B7E] font-bold">
                  Industrial marking and traceability solutions.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#003B7E] py-[60px] px-[20px]">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-center text-[28px] text-slate-200">FAQ</h2>

          {faqs.map((f, i) => (
            <div key={i} className="border-b border-slate-500 py-[15px]">
              <p className="font-semibold text-slate-200">{f.q}</p>
              <p className="text-slate-400 text-[14px]">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-200 text-black font-semibold text-center py-[60px] px-[20px]">
        <h2>Need Help Choosing the Right Machine?</h2>
        <Link
          href="/contact-us"
          className="inline-block mt-[20px] bg-white text-pink-600 px-[20px] py-[10px] rounded-[6px] no-underline"
        >
          Contact Us →
        </Link>
      </section>

    </div>
  );
}