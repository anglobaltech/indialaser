"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function SafetyPerformanceChemicalTestingPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const machines = [
   
    {
      name: "Safety Performance & Chemical Testing Equipment",
      link: "/other-products/safety-performance-chemical-testing",
      image: "/other-products/SAFETY CHEMICAL TESTING.png",
      active: true,
    },
  ];

  const specs = [
    { param: "Equipment Categories", value: "Mechanical, Chemical, Safety & Environmental Testing" },
    { param: "Testing Standards", value: "IS, BIS, ASTM, ISO, EN, IEC Compliant" },
    { param: "Hardness Testing Range", value: "HRC 20–70 / HRB 25–100 / HB 8–650 (model-dependent)" },
    { param: "UTM Load Capacity", value: "1 kN – 1000 kN (as per model)" },
    { param: "pH Measurement Range", value: "0.00 – 14.00 pH (±0.01 accuracy)" },
    { param: "Salt Spray Chamber Capacity", value: "60 L – 400 L test volume options" },
    { param: "Chemical Testing Accuracy", value: "±0.5% of Full Scale (Calibrated)" },
    { param: "Data Output", value: "Digital Display / RS232 / USB / PC Software" },
    { param: "Operating Temperature Range", value: "Ambient – 300°C (model-specific)" },
    { param: "Power Supply", value: "220V–440V / 50Hz (Single/Three Phase)" },
    { param: "Compliance", value: "CE, BIS, ISO 17025 Traceable Calibration Available" },
    { param: "Warranty", value: "1 Year Standard (AMC Available)" },
  ];

  const whyUs = [
    { title: "Pan-India Service Network", desc: "Certified service engineers available across Delhi, Mumbai, Chennai, Bengaluru, Hyderabad, Pune, and 50+ cities." },
    { title: "Free Installation & Calibration", desc: "On-site commissioning, calibration, and operator training included with every instrument." },
    { title: "NABL-Traceable Calibration", desc: "ISO 17025-accredited calibration certificates provided for all testing equipment where applicable." },
    { title: "Genuine OEM Spare Parts", desc: "Certified spare parts, consumables, and reagents stocked for fast turnaround." },
    { title: "365-Day After-Sales Support", desc: "Dedicated helpline, WhatsApp support, and remote diagnostics for uninterrupted laboratory operations." },
  ];

  const faqs = [
    {
      q: "What is Safety, Performance & Chemical Testing Equipment?",
      a: "Safety, Performance & Chemical Testing Equipment refers to a broad category of laboratory and industrial instruments used to evaluate the mechanical properties, chemical composition, corrosion resistance, and safety compliance of materials, products, and manufactured goods. This includes Universal Testing Machines (UTMs) for tensile and compressive strength testing, hardness testers (Rockwell, Vickers, Brinell), pH meters and titration systems for chemical analysis, salt spray chambers for corrosion testing, and flammability or burn testers for safety certification. These instruments are essential for quality control in manufacturing, compliance testing to IS/ASTM/ISO standards, and R&D laboratories across sectors like steel, automotive, textiles, pharma, chemicals, and construction.",
    },
    {
      q: "What industries require Safety, Performance & Chemical Testing Equipment?",
      a: "Industries requiring these instruments include steel and metals manufacturing (hardness testing, tensile testing), automotive OEMs and component suppliers (UTM, salt spray, fatigue testing), pharmaceutical and chemical companies (pH meters, titration, spectroscopy), textile and garment exporters (tensile, tear, colour fastness testing), paint and coating manufacturers (adhesion, corrosion, hardness testing), construction material manufacturers (compression testing, cement testing), electronics and electrical goods companies (IEC safety testing, dielectric testing), and polymer/rubber/plastic processors (tensile, elongation, melt flow testing). Any business supplying goods against BIS, ASTM, ISO, or EN quality standards will require a relevant combination of these instruments.",
    },
    {
      q: "What is a Universal Testing Machine (UTM) and what does it test?",
      a: "A Universal Testing Machine (UTM) is a multi-purpose mechanical testing instrument capable of applying controlled tensile (pull), compressive (push), flexural (bend), and shear forces to a test specimen to measure its mechanical properties. UTMs measure tensile strength, yield strength, elongation at break, compressive strength, flexural modulus, peel strength, and adhesion force, among other parameters. UTMs are used across metals, polymers, textiles, rubber, paper, adhesives, and composites, making them the most versatile performance testing instruments in any quality control laboratory. Load capacities range from 1 kN for laboratory samples to 1000 kN or more for structural testing applications.",
    },
    {
      q: "What is a Salt Spray Chamber used for?",
      a: "A Salt Spray Chamber (also called a Salt Fog Chamber or Corrosion Test Cabinet) is used to simulate accelerated corrosion conditions on metal surfaces, coatings, paints, platings, and treated components. The chamber atomizes a 5% sodium chloride (NaCl) solution into a fine mist at a controlled temperature (typically 35°C per ASTM B117 / ISO 9227), exposing test specimens to a continuously corrosive environment. This accelerated test replicates months or years of outdoor weathering in a matter of days or weeks, enabling manufacturers to evaluate the corrosion resistance of coatings, surface treatments, galvanizing, powder coatings, and plating finishes. Salt spray testing is mandatory for automotive components, fasteners, hardware, electrical enclosures, and painted metal products supplied to major OEMs.",
    },
    {
      q: "What is the price of a Universal Testing Machine in India?",
      a: "The price of a Universal Testing Machine (UTM) in India ranges widely depending on load capacity, testing type, controller sophistication, and brand. Entry-level single-column UTMs for plastics and textiles (1–5 kN) are typically priced between ₹1.5 Lakh and ₹4 Lakhs. Mid-range dual-column UTMs for metals and composites (10–100 kN) range from ₹4 Lakhs to ₹15 Lakhs. High-capacity industrial UTMs (200–1000 kN) for structural and steel testing can range from ₹15 Lakhs to ₹60 Lakhs or more. Contact IndiaLaser for the latest pricing, live demonstrations, and customized quotations based on your specific testing requirements.",
    },
    {
      q: "Do you provide NABL-traceable calibration for testing equipment?",
      a: "Yes. IndiaLaser provides ISO 17025-accredited NABL-traceable calibration services for all applicable testing instruments including Universal Testing Machines, hardness testers, pH meters, and salt spray chambers. Calibration certificates traceable to national standards are issued with each instrument and are available annually as part of our Annual Maintenance Contract (AMC) program. For laboratories seeking NABL accreditation or ISO 9001/ISO 17025 certification, our calibration documentation supports your quality management system requirements.",
    },
  ];

  const comparisonData = [
    { feature: "Primary Function", mech: "Tensile/Compressive/Flexural Strength", chem: "pH, Titration, Chemical Composition", safety: "Corrosion, Flammability, Safety Compliance" },
    { feature: "Key Instrument", mech: "Universal Testing Machine (UTM)", chem: "pH Meter / Spectrophotometer", safety: "Salt Spray Chamber / Burn Tester" },
    { feature: "Test Standard Examples", mech: "ASTM E8, IS 1608, ISO 6892", chem: "ASTM E70, IS 2580, USP", safety: "ASTM B117, ISO 9227, UL 94" },
    { feature: "Industries Served", mech: "Metals, Plastics, Textiles, Composites", chem: "Pharma, Chemicals, Food, Water", safety: "Automotive, Coating, Electrical, Hardware" },
    { feature: "Output", mech: "Stress-Strain Curve, Load-Displacement", chem: "pH Value, Concentration, Purity %", safety: "Pass/Fail vs Standard, Corrosion Rating" },
    { feature: "Best For", mech: "QC labs, R&D, Material Certification", chem: "Process labs, QA, Compliance testing", safety: "OEM approval, Export certification" },
  ];

  return (
    <div className="bg-gray-100 py-10 px-4 min-h-screen overflow-x-clip w-full">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 w-full items-start">

        {/* ── LEFT SIDEBAR ── */}
        <div className="space-y-6 md:sticky md:top-24 self-start">
          <div className="bg-white rounded-2xl p-5 shadow-md">
            <h2 className="text-lg font-semibold text-gray-800 mb-5">
              Safety, Performance & Chemical Testing Equipment
            </h2>
            <div className="space-y-4">
              {machines.map((item, i) => (
                <Link href={item.link} key={i}>
                  <div
                    className={`flex items-center justify-between p-3 rounded-xl cursor-pointer transition
                      ${item.active
                        ? "bg-blue-100 border border-blue-200"
                        : "bg-gray-100 hover:bg-gray-200"
                      }`}
                  >
                    <div className="flex items-center gap-3">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={40}
                        height={40}
                        className="object-contain"
                      />
                      <span className="text-sm font-medium text-gray-700">{item.name}</span>
                    </div>
                    <div className="w-7 h-7 flex items-center justify-center bg-blue-600 text-white rounded-full text-sm">
                      →
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Enquiry CTA */}
          <div className="bg-white rounded-2xl p-5 shadow-md space-y-3">
            <h3 className="text-sm font-semibold text-gray-800">Get a Free Quote</h3>
            <p className="text-xs text-gray-500">Talk to our testing equipment experts for pricing, demo, and customization.</p>
            <Link href="/contact-us">
              <div className="bg-blue-600 text-white text-center text-sm font-semibold py-2.5 rounded-xl hover:bg-blue-700 transition cursor-pointer mt-2">
                Request a Quote →
              </div>
            </Link>
          </div>

          <div className="flex flex-col gap-4">
            <Link href="/other-products">
              <div className="bg-blue-600 text-white rounded-xl p-4 cursor-pointer hover:bg-blue-700 transition shadow-md">
                <h3 className="text-sm font-semibold mb-1">Explore Products</h3>
                <p className="text-xs text-blue-100">View all our testing and industrial products</p>
              </div>
            </Link>
            <Link href="/contact-us">
              <div className="bg-gray-800 text-white rounded-xl p-4 cursor-pointer hover:bg-gray-900 transition shadow-md">
                <h3 className="text-sm font-semibold mb-1">Contact Us</h3>
                <p className="text-xs text-gray-300">Get pricing and expert support</p>
              </div>
            </Link>
          </div>
        </div>

        {/* ── RIGHT CONTENT ── */}
        <div className="md:col-span-2 space-y-6">

          {/* BREADCRUMB + TITLE */}
          <div>
            <nav aria-label="Breadcrumb">
              <p className="text-sm text-gray-400 mt-1">
                <Link href="/" className="hover:text-blue-600">Home</Link>
                {" > "}
                <Link href="/other-products" className="hover:text-blue-600">Other Products</Link>
                {" > "}
                <span className="text-blue-600">Safety, Performance & Chemical Testing Equipment</span>
              </p>
            </nav>
            <h1 className="text-2xl font-bold text-gray-900 mt-1">
              Safety, Performance & Chemical Testing Equipment
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              Precision mechanical, chemical, and safety testing instruments for quality control, compliance, and R&D laboratories across Indian industries — BIS, ASTM, ISO, and EN compliant
            </p>
          </div>

          {/* HERO IMAGE */}
          <div className="flex justify-center items-center w-full">
            <Image
              src="/other-products/SAFETY CHEMICAL TESTING.png"
              alt="Safety Performance and Chemical Testing Equipment by IndiaLaser"
              width={600}
              height={400}
              className="object-contain"
            />
          </div>

          {/* MAIN CONTENT CARD */}
          <div className="bg-white rounded-2xl p-6 shadow-md space-y-8">

            {/* ABOUT */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Safety, Performance & Chemical Testing Equipment</h2>
              <div className="w-10 h-0.5 bg-blue-600 mt-1 mb-4 rounded" />
              <p className="text-gray-600 text-sm leading-relaxed">
                Safety, Performance & Chemical Testing Equipment encompasses a comprehensive range of
                laboratory and industrial instruments designed to evaluate the mechanical performance,
                chemical characteristics, corrosion resistance, and regulatory safety compliance of
                materials, components, and finished products. From Universal Testing Machines (UTMs)
                that measure tensile and compressive strength, to Rockwell and Brinell hardness testers
                that qualify surface and bulk hardness, to pH meters and titration systems that verify
                chemical purity and concentration — these instruments form the backbone of quality
                assurance and compliance testing across Indian industry.

                Safety and environmental testing equipment such as salt spray corrosion chambers, UV
                weathering testers, and flammability test apparatus ensure that products meet IS, BIS,
                ASTM, ISO, and EN safety and durability standards — critical for domestic approvals,
                OEM supply, and export certification. Whether your laboratory tests metals, polymers,
                textiles, chemicals, rubber, or electronic components, the right combination of
                performance and chemical testing instruments ensures that your products consistently
                meet specification and regulatory requirements.

                IndiaLaser supplies a curated range of safety, performance, and chemical testing
                equipment to quality control laboratories, R&D departments, third-party testing labs,
                government inspection bodies, and manufacturing facilities across India — with full
                on-site installation, NABL-traceable calibration, operator training, and comprehensive
                after-sales support.
              </p>
            </div>

            {/* IMPORTED PRODUCTS */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Imported & Domestic Products</h2>
              <div className="w-12 h-1 bg-blue-600 mt-1 mb-4 rounded" />
              <p className="text-gray-600 text-sm leading-relaxed">
                We supply both imported and domestically manufactured safety, performance, and chemical
                testing instruments to suit every laboratory budget and compliance requirement. Our
                imported range from globally recognized manufacturers offers advanced digital controllers,
                high-precision load cells, multi-parameter chemical analyzers, and large-format
                environmental test chambers for demanding industrial and export-oriented quality
                control operations. Our domestic range provides excellent accuracy and reliability
                for routine quality control, incoming inspection, and process monitoring at accessible
                price points. All instruments are supplied with calibration certificates, spare parts,
                and complete technical documentation to support ISO, NABL, and BIS laboratory accreditation.
              </p>
            </div>

            {/* FEATURES */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Features of Our Testing Equipment Range</h2>
              <div className="w-12 h-1 bg-blue-600 mt-1 mb-4 rounded" />
              <ul className="list-disc pl-5 text-gray-600 text-sm space-y-2">
                <li>Wide range of mechanical testing instruments: UTMs, hardness testers, impact testers, fatigue testers, and bend testers</li>
                <li>Chemical testing instruments: pH meters, Karl Fischer titrators, spectrophotometers, and dissolved oxygen analyzers</li>
                <li>Safety and environmental chambers: salt spray, UV weathering, humidity, thermal cycling, and flammability testers</li>
                <li>Digital controllers with PC connectivity, real-time data acquisition, and automatic test report generation</li>
                <li>NABL-traceable calibration available for all instruments; ISO 17025-compliant calibration certificates on request</li>
                <li>Compliance with IS, BIS, ASTM, ISO, EN, IEC, and UL test standards across all instrument categories</li>
                <li>Modular, upgradeable designs with accessories and fixtures for multi-material, multi-standard testing</li>
                <li>Single-point service and supply for complete laboratory setup — from instrument selection to installation and training</li>
              </ul>
            </div>

            {/* ADVANTAGES */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Advantages</h2>
              <div className="w-12 h-1 bg-blue-600 mt-1 mb-4 rounded" />
              <ul className="list-disc pl-5 text-gray-600 text-sm space-y-2">
                <li>Comprehensive one-stop supply for mechanical, chemical, and safety testing — eliminating multiple vendor dependencies</li>
                <li>Instruments calibrated to national and international reference standards ensuring measurement traceability and audit readiness</li>
                <li>Broad instrument portfolio covers all major material types: metals, polymers, textiles, rubber, chemicals, and composites</li>
                <li>Reduces cost of quality failures by enabling rigorous incoming, in-process, and outgoing quality control</li>
                <li>Supports compliance with statutory BIS certifications, export quality approvals, and OEM supply qualifications</li>
                <li>Long instrument service life and low cost of ownership backed by pan-India spare parts availability and AMC support</li>
              </ul>
            </div>

            {/* WORKING */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800">How Safety, Performance & Chemical Testing Works</h2>
              <div className="w-12 h-1 bg-blue-600 mt-1 mb-4 rounded" />
              <p className="text-gray-600 text-sm leading-relaxed">
                Safety, performance, and chemical testing involves the systematic application of
                standardized test methods to evaluate whether a material or product meets defined
                specification limits. In mechanical performance testing, a specimen is subjected to
                controlled loads (tension, compression, bending, or impact) using a calibrated
                instrument — such as a UTM or hardness tester — and the resulting force-deformation
                response is measured and compared against material or product specifications. In
                chemical testing, a sample is analyzed using electrochemical methods (pH, conductivity),
                volumetric titration, spectrophotometric absorption, or chromatography to determine
                its composition, purity, concentration, or reactivity. In safety and environmental
                testing, samples are exposed to accelerated stress conditions — corrosive salt fog,
                UV radiation, high humidity, elevated temperature cycles, or open flame — under
                controlled chamber conditions that replicate real-world service environments at
                accelerated rates. The test results are recorded, compared against the applicable
                IS, ASTM, ISO, or EN standard limits, and documented in a calibrated test report
                that forms the basis of product release, compliance certification, or failure
                investigation. IndiaLaser's instruments support all three testing disciplines,
                enabling a complete quality assurance workflow within a single laboratory setup.
              </p>
            </div>

            {/* TYPES */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Types of Safety, Performance & Chemical Testing Equipment</h2>
              <div className="w-12 h-1 bg-blue-600 mt-1 mb-4 rounded" />
              <ul className="list-disc pl-5 text-gray-600 text-sm space-y-2">
                <li><strong>Universal Testing Machine (UTM)</strong> — Multi-mode tensile, compressive, flexural, and peel testing for metals, plastics, textiles, rubber, and composites</li>
                <li><strong>Rockwell / Brinell / Vickers Hardness Tester</strong> — Surface and bulk hardness measurement for metals, alloys, castings, and heat-treated components</li>
                <li><strong>Impact Testing Machine (Charpy / Izod)</strong> — Impact energy absorption testing for metals and polymers at ambient and low temperatures</li>
                <li><strong>pH Meter & Titration System</strong> — Precise pH measurement, acid-base titration, and dissolved ion analysis for chemical, pharma, and water quality labs</li>
                <li><strong>Salt Spray / Fog Corrosion Test Chamber</strong> — Accelerated corrosion testing per ASTM B117, ISO 9227 for coatings, platings, and treated metal parts</li>
                <li><strong>UV Weathering / Xenon Arc Test Chamber</strong> — Accelerated UV degradation and colour fastness testing for paints, plastics, and outdoor products</li>
                <li><strong>Flammability / Burn Tester</strong> — Vertical and horizontal flame spread and burning rate testing for plastics (UL 94), textiles, and building materials</li>
                <li><strong>Spectrophotometer / Colorimeter</strong> — Colour measurement, light absorption, and concentration analysis for chemical, textile, and coating labs</li>
              </ul>
            </div>

            {/* APPLICATIONS */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Applications</h2>
              <div className="w-12 h-1 bg-blue-600 mt-1 mb-4 rounded" />
              <ul className="list-disc pl-5 text-gray-600 text-sm space-y-2">
                <li>Steel, aluminium, and metal processing — mechanical certification, incoming raw material inspection, and heat treatment qualification</li>
                <li>Automotive OEMs and Tier 1/2 suppliers — component qualification, corrosion testing, and material compliance to OEM standards</li>
                <li>Pharmaceutical and chemical manufacturing — pH, purity, titration, and chemical stability testing for batch release</li>
                <li>Paint, coating, and surface treatment — adhesion, hardness, salt spray, and UV durability testing for product approval</li>
                <li>Textile and apparel export — tensile, tear, seam strength, and colour fastness testing for export compliance</li>
                <li>Plastics and rubber processing — tensile, elongation, hardness, and flammability testing for product qualification</li>
                <li>Third-party testing labs and government inspection agencies — multi-standard testing services across material categories</li>
                <li>Construction and building materials — compression, flexural, and chemical resistance testing for infrastructure projects</li>
              </ul>
            </div>
          </div>

          {/* ── TECHNICAL SPECIFICATIONS ── */}
          <div className="bg-white rounded-2xl p-6 shadow-md">
            <h2 className="text-xl font-semibold text-gray-800">Technical Specifications</h2>
            <div className="w-12 h-1 bg-blue-600 mt-1 mb-4 rounded" />
            <p className="text-sm text-gray-500 mb-4">
              Representative specifications across our Safety, Performance & Chemical Testing Equipment range. Individual instrument datasheets available on request.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-blue-600 text-white">
                    <th className="text-left px-4 py-2.5 rounded-tl-lg font-semibold">Parameter</th>
                    <th className="text-left px-4 py-2.5 rounded-tr-lg font-semibold">Specification</th>
                  </tr>
                </thead>
                <tbody>
                  {specs.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-4 py-2.5 text-gray-700 font-medium border-b border-gray-100">{row.param}</td>
                      <td className="px-4 py-2.5 text-gray-600 border-b border-gray-100">{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-400 mt-3">* Specifications vary by instrument model. Contact us for individual instrument datasheets.</p>
          </div>

          {/* ── COMPARISON TABLE ── */}
          <div className="bg-white rounded-2xl p-6 shadow-md">
            <h2 className="text-xl font-semibold text-gray-800">Mechanical Testing vs Chemical Testing vs Safety Testing — Which Equipment Do You Need?</h2>
            <div className="w-12 h-1 bg-blue-600 mt-1 mb-4 rounded" />
            <p className="text-sm text-gray-500 mb-4">
              Understanding the difference between testing disciplines helps you build the right laboratory instrument set for your quality and compliance requirements.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-800 text-white">
                    <th className="text-left px-4 py-2.5 rounded-tl-lg">Feature</th>
                    <th className="text-center px-4 py-2.5 bg-blue-600">Mechanical / Performance ✓</th>
                    <th className="text-center px-4 py-2.5">Chemical Testing</th>
                    <th className="text-center px-4 py-2.5 rounded-tr-lg">Safety / Environmental</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-4 py-2.5 text-gray-700 font-medium border-b border-gray-100">{row.feature}</td>
                      <td className="px-4 py-2.5 text-center text-blue-700 font-semibold border-b border-gray-100 bg-blue-50">{row.mech}</td>
                      <td className="px-4 py-2.5 text-center text-gray-600 border-b border-gray-100">{row.chem}</td>
                      <td className="px-4 py-2.5 text-center text-gray-600 border-b border-gray-100">{row.safety}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* ── WHY CHOOSE INDIALASER ── */}
          <div className="bg-white rounded-2xl p-6 shadow-md">
            <h2 className="text-xl font-semibold text-gray-800">Why Choose IndiaLaser?</h2>
            <div className="w-12 h-1 bg-blue-600 mt-1 mb-4 rounded" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {whyUs.map((item, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <div className="w-8 h-8 flex-shrink-0 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-sm">
                    ✓
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-800">{item.title}</div>
                    <div className="text-xs text-gray-500 mt-0.5">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── FAQ ── */}
          <div className="bg-white rounded-2xl p-6 shadow-md">
            <h2 className="text-xl font-semibold text-gray-800">
              Frequently Asked Questions — Safety, Performance & Chemical Testing Equipment
            </h2>
            <div className="w-12 h-1 bg-blue-600 mt-1 mb-4 rounded" />
            <p className="text-sm text-gray-500 mb-5">
              Common questions about mechanical testing, chemical analysis, safety compliance instruments, and laboratory setup in India.
            </p>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                  <button
                    className="w-full text-left px-4 py-3.5 flex justify-between items-center bg-gray-50 hover:bg-blue-50 transition"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                  >
                    <span className="text-sm font-semibold text-gray-800 pr-4">{faq.q}</span>
                    <span className={`text-blue-600 text-lg flex-shrink-0 transition-transform ${openFaq === i ? "rotate-45" : ""}`}>+</span>
                  </button>
                  {openFaq === i && (
                    <div className="px-4 py-3 bg-white border-t border-gray-100">
                      <p className="text-sm text-gray-600 leading-relaxed">{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* ── PACKING & DELIVERY ── */}
          <div className="bg-white rounded-2xl p-6 shadow-md">
            <h2 className="text-xl font-semibold text-gray-800">Packing, Shipping & Delivery</h2>
            <div className="w-12 h-1 bg-blue-600 mt-1 mb-4 rounded" />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              {[
                { title: "Export-Grade Packing", desc: "Foam-padded wooden crates and anti-vibration packaging for safe instrument transit across India" },
                { title: "Pan-India Delivery", desc: "Shipping to all major cities and industrial zones via trusted freight partners; 3–10 day dispatch" },
                { title: "On-Site Installation", desc: "Engineer deployed for instrument installation, calibration, and full operator training at your facility" },
              ].map((item, i) => (
                <div key={i} className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                  <div className="text-sm font-semibold text-gray-800">{item.title}</div>
                  <div className="text-xs text-gray-500 mt-1">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── SEO PARAGRAPH ── */}
          <div className="bg-white rounded-2xl p-6 shadow-md">
            <h2 className="text-xl font-semibold text-gray-800">Safety, Performance & Chemical Testing Equipment in India</h2>
            <div className="w-12 h-1 bg-blue-600 mt-1 mb-4 rounded" />
            <p className="text-gray-600 text-sm leading-relaxed">
              Looking for the best <strong>safety, performance, and chemical testing equipment price in India</strong>?
              IndiaLaser offers a comprehensive range of mechanical, chemical, and safety testing instruments
              for quality control laboratories, R&D centers, and manufacturing facilities across India.
              Whether you need a{" "}
              <strong>Universal Testing Machine for tensile and compressive strength testing</strong>, a{" "}
              <strong>Rockwell hardness tester for metal quality control</strong>, a{" "}
              <strong>salt spray corrosion chamber for coating qualification</strong>, or a{" "}
              <strong>pH meter and titration system for chemical analysis</strong>,
              we have the right instrument for your testing and compliance requirements. Our testing equipment
              is available in{" "}
              <strong>Delhi, Mumbai, Chennai, Bengaluru, Hyderabad, Pune, Ahmedabad, Surat, Ludhiana, Coimbatore</strong>,
              and across India with fast delivery, NABL-traceable calibration, and dedicated after-sales support.
              Compare mechanical, chemical, and safety testing instrument categories, or{" "}
              <Link href="/contact-us" className="text-blue-600 font-semibold hover:underline">
                contact our team
              </Link>{" "}
              for a customized laboratory instrument quotation and setup consultation today.
            </p>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-blue-900 to-blue-600 rounded-2xl p-6 text-center text-white shadow-md">
            <h2 className="text-xl font-bold mb-2">Ready to Build Your Testing Laboratory?</h2>
            <p className="text-sm text-blue-100 mb-4">
              Get the best price, free demo, and expert guidance from IndiaLaser's safety & performance testing equipment team.
            </p>
            <a
              href="/contact-us"
              className="inline-block bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
            >
              Submit Enquiry →
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}