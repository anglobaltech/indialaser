"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function UniversalTestingMachineDoubleArmSolarPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const machines = [
    {
      name: "Universal Testing Machine (Double Arm) – Solar Testing",
      link: "/other-products/solar-testing-equipments/universal-testing-machineI",
      image: "/other-products/double-arm.png",
      active: true,
    },
    {
      name: "Universal Testing Machine (Single Arm) – Solar Testing",
      link: "/other-products/solar-testing-equipments/universal-testing-machineII",
      image: "/other-products/single-arm.png",
      active: true,
    }
  ];

  const specs = [
    { param: "Machine Type", value: "Double Arm / Twin-Column Universal Testing Machine (UTM) – Solar Panel & Module Testing" },
    { param: "Load Capacity", value: "10 kN – 1000 kN (Custom capacities available)" },
    { param: "Frame Type", value: "Dual-Arm / Twin-Column Rigid Steel Frame" },
    { param: "Drive System", value: "Electromechanical (Ball Screw) / Hydraulic (Model Dependent)" },
    { param: "Test Space (Clearance)", value: "Up to 1500 mm (Adjustable crosshead) — accommodates full-size solar module specimens" },
    { param: "Crosshead Speed", value: "0.001 mm/min – 500 mm/min (Programmable)" },
    { param: "Load Measurement Accuracy", value: "±0.5% of Reading (Class 0.5 per IS/ASTM/ISO/IEC)" },
    { param: "Displacement Resolution", value: "0.001 mm" },
    { param: "Controller", value: "PC-Based Digital Controller with Dedicated UTM Software" },
    { param: "Test Standards", value: "IEC 61215, IEC 61730, IEC 62782, IEC 62938, IS, ASTM, ISO Compatible" },
    { param: "Power Supply", value: "220V–440V / 50 Hz (Single/Three Phase)" },
    { param: "Warranty", value: "1 Year (Extendable)" },
  ];

  const whyUs = [
    { title: "Pan-India Service Network", desc: "Dedicated engineers available across major Indian cities for installation, calibration, and AMC support." },
    { title: "Free Installation & Training", desc: "On-site setup, software configuration, and complete operator training included with every UTM purchase." },
    { title: "Genuine Load Cells & Spare Parts", desc: "Calibrated load cells, solar test grips, and genuine spare parts for uninterrupted daily solar testing operations." },
    { title: "Fast Delivery", desc: "Ready stock available; dispatch within 5–10 business days across India." },
    { title: "After-Sales Support", desc: "365-day support via call, WhatsApp, and remote diagnostics to keep your solar testing lab running." },
  ];

  const faqs = [
    {
      q: "What is a Double Arm UTM used for in solar panel testing?",
      a: "A Double Arm (Twin-Column) Universal Testing Machine for solar testing is a high-capacity precision mechanical testing instrument used to evaluate the structural integrity of full-size solar PV modules, solar panel frames, mounting structures, and large solar assembly components under tensile, compressive, flexural, and shear loading. The rigid twin-column frame ensures perfectly axial, symmetric force application — essential for large-specimen solar tests such as static mechanical load (wind and snow load simulation per IEC 61215 clause 10.16), frame pull strength, solar mounting rail and bracket structural testing, and full-module flexural testing. Double arm UTMs for solar testing are used in solar module certification labs, NABL-accredited PV testing centres, solar panel manufacturing structural QC departments, and solar mounting system manufacturers across India.",
    },
    {
      q: "What solar components can be tested on a Double Arm (Twin Column) UTM?",
      a: "A Double Arm UTM for solar testing covers large-specimen, high-load solar mechanical tests. These include full-size PV module static mechanical load testing (wind and snow load simulation per IEC 61215 clause 10.16 and IEC 62938 non-uniform snow load), solar panel aluminium frame tensile and compressive strength testing, solar module frame corner joint and mitre joint strength testing, solar mounting rail, bracket, and clamp structural load testing, solar tracker structural component tensile and compressive testing, utility-scale PV racking system pull-out and shear strength testing, large composite and laminate solar panel flexural strength testing (3-point and 4-point bending), and solar pile and ground-mount anchor pull-out force testing. For material-level solar tests (encapsulant peel, backsheet tensile, junction box adhesion), a Single Arm UTM is the recommended choice.",
    },
    {
      q: "What is the difference between a Single Arm and a Double Arm UTM for solar testing?",
      a: "A Single Arm (Single Column) UTM is designed for lower load capacities (up to 50 kN) and is ideal for solar material and component-level tests such as encapsulant peel strength, backsheet tensile testing, junction box adhesion, and PV ribbon tensile strength. A Double Arm (Twin Column) UTM provides a rigid, symmetrically loaded frame for higher load capacities (10 kN to 1000 kN) and larger specimen sizes — making it the correct choice for full-module static mechanical load testing (IEC 61215), solar frame structural testing, mounting system strength testing, and large PV assembly structural qualification. A comprehensive solar testing laboratory or certification centre will typically require both: a single arm UTM for material-level tests and a double arm UTM for module-level and structural-level tests.",
    },
    {
      q: "Which IEC standards does a Double Arm UTM support for solar module testing?",
      a: "IndiaLaser's Double Arm UTM for solar testing supports the structural and mechanical test methods in IEC 61215 (static mechanical load test, clause 10.16 — 2400 Pa and 5400 Pa wind/snow load), IEC 61730 (PV module safety qualification — mechanical stress tests), IEC 62782 (cyclic dynamic mechanical load testing of PV modules), IEC 62938 (non-uniform snow load testing), IEC 61400 (wind turbine and solar tracker structural component testing), ASTM E1820 (fracture toughness), ASTM D7264 (flexural properties of polymer matrix composite panels), and IS/ASTM/ISO standards for aluminium alloy and structural steel used in solar frames and mounting systems. The dedicated UTM software includes pre-programmed IEC solar test templates with automatic pass/fail reporting.",
    },
    {
      q: "What is the price of a Double Arm UTM for solar testing in India?",
      a: "The price of a Double Arm UTM for solar testing in India typically ranges from ₹5 Lakhs to ₹40 Lakhs depending on load capacity (10 kN to 1000 kN), drive system (electromechanical vs. hydraulic), controller type (basic digital vs. PC-based closed-loop servo), test space for full-module specimens, and IEC/ASTM standard compliance. Entry-level double arm UTMs for solar frame and mounting structural testing are at the lower end, while high-capacity hydraulic UTMs for full-module IEC 61215 static load and NABL-accredited solar certification labs command higher prices. Contact IndiaLaser for the latest pricing, live demo, and customized quotations based on your solar structural testing requirements.",
    },
    {
      q: "Is a Double Arm UTM required for IEC 61215 solar module certification?",
      a: "Yes. IEC 61215 clause 10.16 (Static Mechanical Load Test) requires the application of a uniform pressure load of 2400 Pa (and optionally 5400 Pa) to the front and rear surfaces of a full-size solar PV module to simulate wind and snow loading. This test requires a test fixture and loading frame with sufficient capacity and test space to uniformly load a full-size module — typically requiring a double arm (twin-column) UTM or a dedicated mechanical load test frame with load capacity of 10 kN to 100 kN depending on module size. IndiaLaser provides double arm UTMs and IEC 61215 mechanical load test fixtures for solar module certification labs, NABL-accredited PV testing centres, and solar manufacturing quality departments across India.",
    },
  ];

  const comparisonData = [
    { feature: "Frame Design", single: "Single Column (Cantilever)", double: "Twin Column (Symmetric) ✓", hydraulic: "Twin Column (Hydraulic)" },
    { feature: "Load Capacity Range", single: "0.5 kN – 50 kN", double: "10 kN – 1000 kN ✓", hydraulic: "100 kN – 3000 kN" },
    { feature: "Test Space", single: "Compact (small specimens)", double: "Large — fits full solar modules ✓", hydraulic: "Very Large" },
    { feature: "Drive System", single: "Electromechanical (Servo)", double: "Electromechanical / Hydraulic ✓", hydraulic: "Hydraulic" },
    { feature: "Speed Control", single: "Programmable (0.001–500 mm/min)", double: "Programmable (0.001–500 mm/min) ✓", hydraulic: "Variable (lower precision)" },
    { feature: "Best For Solar", single: "Encapsulants, backsheets, J-box, ribbon", double: "Full-module static load, frames, mounting ✓", hydraulic: "Ultra-heavy structural PV components" },
  ];

  return (
    <div className="bg-gray-100 py-10 px-4 min-h-screen overflow-x-clip w-full">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 w-full items-start">

        {/* ── LEFT SIDEBAR ── */}
        <div className="space-y-6 md:sticky md:top-24 self-start">
          <div className="bg-white rounded-2xl p-5 shadow-md">
            <h2 className="text-lg font-semibold text-gray-800 mb-5">UTM Machines</h2>
            <div className="space-y-4">
              {machines.map((item, i) => (
                <Link href={item.link} key={i}>
                  <div
                    className={`flex items-center justify-between p-3 rounded-xl cursor-pointer transition
                      ${item.active
                        ? "bg-blue-50 border border-blue-200"
                        : "bg-gray-50 hover:bg-gray-100"
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
                    <div className="w-7 h-7 flex items-center justify-center bg-blue-600 text-white rounded-full text-sm">→</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Enquiry CTA */}
          <div className="bg-white rounded-2xl p-5 shadow-md space-y-3">
            <h3 className="text-sm font-semibold text-gray-800">Get a Free Quote</h3>
            <p className="text-xs text-gray-500">Talk to our UTM experts for pricing, demo, and customization.</p>
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
                <span className="text-blue-600">Universal Testing Machine (Double Arm) – Solar Testing</span>
              </p>
            </nav>
            <h1 className="text-2xl font-bold text-gray-900 mt-1">
              Universal Testing Machine (Double Arm) – Solar Testing
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              Twin-column UTM for full-module IEC 61215 static mechanical load testing, solar frame structural testing, solar mounting system strength testing, and large PV assembly qualification — high-capacity solar testing equipment for certification labs and solar manufacturers across India
            </p>
          </div>

          {/* HERO IMAGE */}
          <div className="flex justify-center items-center w-full">
            <Image
              src="/other-products/double-arm.png"
              alt="Universal Testing Machine Double Arm for Solar Testing by IndiaLaser"
              width={600}
              height={400}
              className="object-contain"
            />
          </div>

          {/* MAIN CONTENT CARD */}
          <div className="bg-white rounded-2xl p-6 shadow-md space-y-8">

            {/* ABOUT */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Universal Testing Machine (Double Arm) – Solar Testing</h2>
              <div className="w-10 h-0.5 bg-blue-600 mt-1 mb-4 rounded" />
              <p className="text-gray-600 text-sm leading-relaxed">
                The Universal Testing Machine (Double Arm) for Solar Testing — also known as a
                Twin-Column UTM or Dual-Arm UTM for PV module testing — is a high-capacity,
                high-precision mechanical testing instrument specifically engineered for the
                structural qualification of full-size solar photovoltaic (PV) modules, solar
                panel frames, solar mounting structures, utility-scale racking systems, and
                large solar assembly components under controlled tensile, compressive, flexural,
                and shear loading. The twin-column frame provides a rigid, symmetric load path
                with a large, unobstructed test space — capable of accommodating full-size
                solar modules (up to 2400 mm × 1200 mm with appropriate fixtures) for IEC
                61215 static mechanical load testing, frame pull strength qualification, and
                module-level flexural and dynamic load testing.

                Double Arm UTMs for solar testing are the primary structural testing instrument
                in solar module certification and type approval labs (IEC 61215, IEC 61730, IEC
                62782), NABL-accredited PV testing centres, solar panel manufacturing structural
                QC departments, solar mounting and racking system manufacturers, and solar
                tracker and utility-scale structure manufacturers. Load capacities from 10 kN
                to 1000 kN cover the complete range of module-level and structural-level solar
                mechanical tests that demand higher forces and larger specimen sizes than single
                arm machines can accommodate.

                IndiaLaser's Double Arm UTMs for solar testing are built for demanding daily
                structural laboratory and production-floor use, featuring PC-based digital
                controllers, programmable crosshead speeds, calibrated load cells with ±0.5%
                accuracy, large test space with adjustable crosshead, and full compatibility
                with IEC 61215, IEC 61730, IEC 62782, IEC 62938, ASTM, and ISO solar test
                standards. Each machine is supplied with solar module test fixtures, calibration
                certificates, and dedicated UTM software with pre-configured IEC solar test
                templates for automatic pass/fail reporting.
              </p>
            </div>

            {/* IMPORTED PRODUCTS */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Imported & Domestic Products</h2>
              <div className="w-12 h-1 bg-blue-600 mt-1 mb-4 rounded" />
              <p className="text-gray-600 text-sm leading-relaxed">
                We supply both imported and domestically manufactured Double Arm UTMs for solar
                testing to meet the diverse requirements of solar testing laboratories and
                manufacturing facilities across India. Our imported models from globally
                recognized UTM manufacturers deliver advanced PC-based closed-loop servo
                control, high-resolution encoders, multi-channel data acquisition, and superior
                load cell accuracy for NABL-accredited solar certification labs requiring full
                compliance with IEC 61215 and IEC 61730 structural test methods. Our domestic
                double arm UTM models for solar testing offer excellent cost-performance ratios
                for solar module manufacturing structural QC departments, solar mounting
                system manufacturers, educational institutes, and solar R&D centres that
                require reliable structural testing of PV modules, frames, and mounting
                components at accessible price points. All models are supplied with IEC/ASTM
                compatible software, solar module test fixtures, calibration certificates,
                and complete documentation for lab compliance.
              </p>
            </div>

            {/* FEATURES */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Features of Double Arm UTM for Solar Testing</h2>
              <div className="w-12 h-1 bg-blue-600 mt-1 mb-4 rounded" />
              <ul className="list-disc pl-5 text-gray-600 text-sm space-y-2">
                <li>Rigid twin-column steel frame with large, symmetric test space accommodating full-size solar modules and large structural solar components for IEC 61215 mechanical load testing</li>
                <li>Wide load capacity range from 10 kN to 1000 kN covering full-module static load tests, frame structural tests, mounting rail pull-out tests, and solar tracker structural qualification</li>
                <li>PC-based digital controller with dedicated UTM software featuring pre-programmed IEC 61215, IEC 61730, IEC 62782, IEC 62938, and ASTM solar test templates with automatic pass/fail reporting</li>
                <li>Precision ball-screw drive (electromechanical) or hydraulic actuator with programmable crosshead speed from 0.001 mm/min to 500 mm/min for accurate load application rate control</li>
                <li>Calibrated load cell with ±0.5% of reading accuracy (Class 0.5 per IEC/ISO 7500-1) for traceable, NABL-compliant solar structural test results</li>
                <li>High-resolution displacement encoder with 0.001 mm resolution for accurate module deflection, frame deformation, and structural displacement measurement</li>
                <li>Adjustable crosshead and large test space with optional solar module loading fixture for uniform pressure load application per IEC 61215 clause 10.16</li>
                <li>Compatible with IEC 61215, IEC 61730, IEC 62782, IEC 62938, ASTM, ISO, and IS test methods — multi-standard pre-configured test templates included</li>
              </ul>
            </div>

            {/* ADVANTAGES */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Advantages</h2>
              <div className="w-12 h-1 bg-blue-600 mt-1 mb-4 rounded" />
              <ul className="list-disc pl-5 text-gray-600 text-sm space-y-2">
                <li>Twin-column frame provides superior rigidity and symmetric load path — essential for accurate, reproducible full-module solar mechanical load tests per IEC 61215</li>
                <li>Large test space and high load capacity enable a single machine to handle all module-level and structural-level solar tests — from frame corner joints to full-panel wind load simulation</li>
                <li>Pre-programmed IEC solar test templates eliminate setup time, reduce operator error, and generate automatic pass/fail reports compliant with IEC 61215 type approval requirements</li>
                <li>Programmable crosshead speed enables precise load application rate control for cyclic dynamic load tests (IEC 62782) and quasi-static structural load tests on solar frames and mounting systems</li>
                <li>Class 0.5 load accuracy satisfies IEC 61215, IEC 61730 mechanical test requirements and NABL accreditation criteria for solar PV testing laboratories</li>
                <li>Robust frame construction and versatile fixture compatibility make it a long-term asset for solar module certification labs and solar structural QC departments with evolving test requirements</li>
              </ul>
            </div>

            {/* WORKING */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800">How a Double Arm UTM Works for Solar Panel Testing</h2>
              <div className="w-12 h-1 bg-blue-600 mt-1 mb-4 rounded" />
              <p className="text-gray-600 text-sm leading-relaxed">
                The Double Arm UTM for solar testing operates by applying a precisely controlled,
                measurable structural load to a solar test specimen and simultaneously recording
                the force-displacement response. For full-module IEC 61215 static mechanical
                load testing, the solar module is mounted in the dedicated loading fixture
                between the twin columns. A uniformly distributed pressure load (2400 Pa for
                wind and snow load, or 5400 Pa for enhanced load per IEC 61215 clause 10.16)
                is applied to the module front face, held for 1 hour, then reversed to the rear
                face — the UTM controller precisely manages the load application rate and hold
                duration, while continuously recording applied force and module deflection.

                For solar frame and mounting structural tests, frame sections, rail profiles,
                bracket assemblies, or clamp components are secured in appropriate fixtures
                between the crossheads. The controller drives the crosshead at the programmed
                speed — applying tensile, compressive, or shear load to the solar structural
                specimen while the calibrated load cell (±0.5% accuracy) and high-resolution
                encoder (0.001 mm resolution) record force and displacement in real time.

                The UTM software plots the force-displacement curve, calculates key structural
                parameters — ultimate load (kN), failure mode, deflection at rated load (mm),
                stiffness (kN/mm), and pass/fail status against the IEC or ASTM acceptance
                criterion — and generates a full test report for certification documentation,
                NABL records, or customer quality assurance files. For cyclic dynamic load tests
                per IEC 62782, the controller executes the programmed load cycle sequence
                automatically with full data logging throughout.
              </p>
            </div>

            {/* TYPES */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Types of Double Arm UTMs for Solar Testing</h2>
              <div className="w-12 h-1 bg-blue-600 mt-1 mb-4 rounded" />
              <ul className="list-disc pl-5 text-gray-600 text-sm space-y-2">
                <li><strong>Full-Module Static Load UTM</strong> — High-capacity model (50 kN–200 kN) with IEC 61215 loading fixture for uniform pressure load application to full-size PV modules; wind and snow load simulation per clause 10.16</li>
                <li><strong>Solar Frame Structural UTM</strong> — Medium-capacity electromechanical model (10 kN–100 kN) for aluminium frame tensile, compressive, corner joint, and mitre joint strength testing of solar panel frames</li>
                <li><strong>Solar Mounting & Racking UTM</strong> — Configured with shear, pull-out, and bending fixtures for structural qualification of solar mounting rails, brackets, clamps, and ground-mount anchors</li>
                <li><strong>Cyclic Dynamic Load UTM (IEC 62782)</strong> — Servo-controlled model with cycle counter and dynamic load profile programming for cyclic mechanical fatigue testing of PV modules per IEC 62782</li>
                <li><strong>High-Capacity Hydraulic Solar UTM</strong> — Heavy-duty three-phase hydraulic model (200 kN–1000 kN) for utility-scale solar tracker structural components, pile pull-out, and large composite PV panel testing</li>
                <li><strong>PC-Controlled Solar UTM</strong> — Advanced closed-loop servo control with full IEC/ASTM solar test template library, automatic pass/fail reporting, and data export for NABL-accredited solar certification labs</li>
              </ul>
            </div>

            {/* APPLICATIONS */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Applications</h2>
              <div className="w-12 h-1 bg-blue-600 mt-1 mb-4 rounded" />
              <ul className="list-disc pl-5 text-gray-600 text-sm space-y-2">
                <li>IEC 61215 static mechanical load testing — full-size PV module wind and snow load simulation at 2400 Pa and 5400 Pa for type approval certification</li>
                <li>Solar panel aluminium frame structural testing — tensile, compressive, and corner joint strength of solar module frames for manufacturing QC and design qualification</li>
                <li>Solar mounting rail and bracket structural testing — tensile, pull-out, shear, and bending strength of rooftop and ground-mount solar racking components</li>
                <li>Solar module flexural testing — 3-point and 4-point bending of solar panels and thin-film modules to evaluate structural stiffness and failure load</li>
                <li>IEC 62782 cyclic dynamic mechanical load testing — cyclic fatigue testing of PV modules for rooftop and high-wind applications</li>
                <li>IEC 62938 non-uniform snow load testing — asymmetric load application to simulate real-world non-uniform snow accumulation on solar modules</li>
                <li>Solar tracker structural component testing — tensile and compressive strength of single-axis and dual-axis tracker structural members and drive assemblies</li>
                <li>NABL-accredited solar mechanical testing labs — calibrated, traceable IEC and ASTM structural tests for solar module certification and quality assurance</li>
              </ul>
            </div>
          </div>

          {/* ── TECHNICAL SPECIFICATIONS ── */}
          <div className="bg-white rounded-2xl p-6 shadow-md">
            <h2 className="text-xl font-semibold text-gray-800">Technical Specifications</h2>
            <div className="w-12 h-1 bg-blue-600 mt-1 mb-4 rounded" />
            <p className="text-sm text-gray-500 mb-4">
              Standard specifications for our Double Arm UTMs for solar testing. Custom load capacities and solar module fixture configurations available on request.
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
            <p className="text-xs text-gray-400 mt-3">* Specifications may vary by model and capacity. Contact us for detailed datasheet.</p>
          </div>

          {/* ── COMPARISON TABLE ── */}
          <div className="bg-white rounded-2xl p-6 shadow-md">
            <h2 className="text-xl font-semibold text-gray-800">Single Arm UTM vs Double Arm UTM vs Hydraulic UTM — Which Do You Need for Solar Testing?</h2>
            <div className="w-12 h-1 bg-blue-600 mt-1 mb-4 rounded" />
            <p className="text-sm text-gray-500 mb-4">
              Choosing the right UTM configuration for your solar testing lab depends on specimen size, load capacity, and solar test standard requirements.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-800 text-white">
                    <th className="text-left px-4 py-2.5 rounded-tl-lg">Feature</th>
                    <th className="text-center px-4 py-2.5">Single Arm UTM</th>
                    <th className="text-center px-4 py-2.5 bg-blue-600">Double Arm UTM ✓</th>
                    <th className="text-center px-4 py-2.5 rounded-tr-lg">Hydraulic UTM</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-4 py-2.5 text-gray-700 font-medium border-b border-gray-100">{row.feature}</td>
                      <td className="px-4 py-2.5 text-center text-gray-600 border-b border-gray-100">{row.single}</td>
                      <td className="px-4 py-2.5 text-center text-blue-700 font-semibold border-b border-gray-100 bg-blue-50">{row.double}</td>
                      <td className="px-4 py-2.5 text-center text-gray-600 border-b border-gray-100">{row.hydraulic}</td>
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
                  <div className="w-8 h-8 flex-shrink-0 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-sm">✓</div>
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
              Frequently Asked Questions — Double Arm UTM for Solar Testing
            </h2>
            <div className="w-12 h-1 bg-blue-600 mt-1 mb-4 rounded" />
            <p className="text-sm text-gray-500 mb-5">
              Common questions about double arm UTMs for solar panel structural testing, IEC 61215 mechanical load testing, and solar testing laboratory setup in India.
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
                { title: "Export-Grade Packing", desc: "Foam-padded wooden crates with twin-column frame protection, load cell cushioning, and fixture packaging for safe solar UTM transit" },
                { title: "Pan-India Delivery", desc: "Shipping to all major cities via trusted freight partners with real-time tracking and doorstep delivery to your solar lab" },
                { title: "On-Site Installation", desc: "Engineer deputed for machine levelling, load cell calibration, IEC solar fixture setup, software configuration, and operator training" },
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
            <h2 className="text-xl font-semibold text-gray-800">Double Arm UTM for Solar Testing in India</h2>
            <div className="w-12 h-1 bg-blue-600 mt-1 mb-4 rounded" />
            <p className="text-gray-600 text-sm leading-relaxed">
              Looking for a{" "}
              <strong>Double Arm UTM for solar panel testing price in India</strong>?
              IndiaLaser offers the best twin-column UTMs for solar module structural testing
              laboratories — from medium-capacity electromechanical models for solar frame
              and mounting structural testing to high-capacity hydraulic UTMs for full-module
              IEC 61215 static mechanical load testing and NABL-accredited solar certification
              labs. Whether you need a{" "}
              <strong>double arm UTM for IEC 61215 solar module mechanical load testing</strong>, a{" "}
              <strong>twin-column UTM for solar frame structural qualification</strong>, or a{" "}
              <strong>high-capacity solar mounting system testing machine</strong>,
              we have the right solution for your solar structural testing equipment requirements.
              Our Double Arm UTMs for solar testing are available in{" "}
              <strong>Delhi, Mumbai, Chennai, Bengaluru, Hyderabad, Pune, Ahmedabad, Surat, Jaipur, Kochi</strong>,
              and across India with fast delivery, IEC/ASTM calibration certificates, IEC 61215
              solar module test fixtures, genuine spare parts, and dedicated after-sales support.
              Compare double arm solar UTMs with single arm models and hydraulic UTMs, or{" "}
              <Link href="/contact-us" className="text-blue-600 font-semibold hover:underline">
                contact our team
              </Link>{" "}
              for a customized quotation and complete solar structural testing laboratory setup guidance today.
            </p>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-blue-900 to-blue-600 rounded-2xl p-6 text-center text-white shadow-md">
            <h2 className="text-xl font-bold mb-2">Ready to Buy a Double Arm UTM for Solar Testing?</h2>
            <p className="text-sm text-blue-100 mb-4">
              Get the best price, free demo, and expert guidance from IndiaLaser's solar testing equipment team.
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