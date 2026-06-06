"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function UniversalTestingMachineSingleArmSolarPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const machines = [
    {
      name: "Universal Testing Machine (Single Arm) – Solar Testing",
      link: "/other-products/solar-testing-equipments/universal-testing-machineII",
      image: "/other-products/single-arm.png",
      active: true,
    },
    {
      name: "Universal Testing Machine (Double Arm) – Solar Testing",
      link: "/other-products/solar-testing-equipments/universal-testing-machineI",
      image: "/other-products/double-arm.png",
      active: true,
    },
  ];

  const specs = [
    { param: "Machine Type", value: "Single Column / Single Arm Universal Testing Machine (UTM) – Solar Panel & Module Testing" },
    { param: "Load Capacity", value: "0.5 kN – 50 kN (Custom capacities available)" },
    { param: "Frame Type", value: "Single-Column Cantilever Rigid Steel Frame" },
    { param: "Drive System", value: "Electromechanical (Ball Screw) – Precision Servo Motor" },
    { param: "Test Space (Clearance)", value: "Up to 1200 mm (Adjustable crosshead)" },
    { param: "Crosshead Speed", value: "0.001 mm/min – 500 mm/min (Programmable)" },
    { param: "Load Measurement Accuracy", value: "±0.5% of Reading (Class 0.5 per IS/ASTM/ISO/IEC)" },
    { param: "Displacement Resolution", value: "0.001 mm" },
    { param: "Controller", value: "PC-Based Digital Controller with Dedicated UTM Software" },
    { param: "Test Standards", value: "IEC 61215, IEC 61730, IS, ASTM, ISO Compatible" },
    { param: "Power Supply", value: "220V / 50 Hz (Single Phase)" },
    { param: "Warranty", value: "1 Year (Extendable)" },
  ];

  const whyUs = [
    { title: "Pan-India Service Network", desc: "Dedicated engineers available across major Indian cities for installation, calibration, and AMC support." },
    { title: "Free Installation & Training", desc: "On-site setup, software configuration, and complete operator training included with every UTM purchase." },
    { title: "Genuine Load Cells & Spare Parts", desc: "Calibrated load cells, grips, and genuine spare parts for uninterrupted daily solar testing operations." },
    { title: "Fast Delivery", desc: "Ready stock available; dispatch within 5–10 business days across India." },
    { title: "After-Sales Support", desc: "365-day support via call, WhatsApp, and remote diagnostics to keep your solar testing lab running." },
  ];

  const faqs = [
    {
      q: "What is a Single Arm UTM used for in solar panel testing?",
      a: "A Single Arm Universal Testing Machine (UTM) for solar testing is a precision mechanical testing instrument used to evaluate the structural integrity and mechanical performance of solar panels, photovoltaic (PV) modules, backsheets, encapsulants, junction box adhesion, frame pull-out strength, and solar mounting system components. It performs tensile, peel, shear, compressive, and flexural tests on solar module materials and assemblies to ensure compliance with IEC 61215, IEC 61730, and other international PV quality standards. The single-column frame design provides a compact footprint ideal for R&D labs and quality control departments in solar manufacturing facilities where smaller specimen sizes and lower load ranges (up to 50 kN) are typical.",
    },
    {
      q: "What solar components and materials can be tested on a Single Arm UTM?",
      a: "A Single Arm UTM for solar applications can test a wide range of PV module materials and components. These include solar cell encapsulants (EVA, POE, TPU) for tensile and peel adhesion strength, backsheet laminates for tensile and elongation properties (IEC 61215), junction box and connector pull-out and push-in force testing, solar panel frame and edge tape adhesion testing, busbars and ribbon solder joint tensile strength, thin-film solar cell peel and adhesion testing, solar mounting bracket and clamp clamping force testing, polymer potting and sealant adhesion testing, and bypass diode solder joint strength testing. The machine can also perform 3-point and 4-point flexural testing of mini solar modules and test specimens cut from full-sized panels.",
    },
    {
      q: "What is the difference between a Single Arm UTM and a Double Arm UTM for solar testing?",
      a: "A Single Arm (Single Column) UTM has one vertical column and is designed for lower load capacities (typically up to 50 kN), making it ideal for solar encapsulant peel tests, backsheet tensile tests, junction box adhesion, and other moderate-force solar component tests. Its compact footprint suits cleanroom and R&D lab environments in solar manufacturing. A Double Arm (Twin Column) UTM has two symmetrically placed columns for higher loads (10 kN–1000 kN), larger specimen sizes, and superior axial alignment. For solar testing, single arm UTMs cover the majority of material-level and component-level tests, while double arm UTMs are required for full-module static load testing (wind and snow load simulation) and large PV structure testing. IndiaLaser offers both configurations for comprehensive solar quality lab setups.",
    },
    {
      q: "Which IEC standards does a Single Arm UTM support for solar panel testing?",
      a: "IndiaLaser's Single Arm UTM for solar testing supports the mechanical test methods specified in IEC 61215 (Design qualification and type approval for crystalline silicon terrestrial PV modules), IEC 61730 (PV module safety qualification), IEC 62782 (Cyclic dynamic mechanical load testing), IEC 62938 (Non-uniform snow load testing), ASTM D882 (tensile properties of thin plastic sheeting for backsheets and encapsulants), ASTM D903 (peel or stripping strength of adhesive bonds), and ASTM D1002 (lap-shear adhesive strength). The dedicated UTM software includes pre-programmed test templates for common IEC and ASTM solar test methods, enabling fast, standard-compliant testing with automatic pass/fail reporting.",
    },
    {
      q: "What is the price of a Single Arm UTM for solar testing in India?",
      a: "The price of a Single Arm UTM for solar testing in India typically ranges from ₹2 Lakhs to ₹15 Lakhs depending on load capacity (0.5 kN to 50 kN), controller type (basic digital vs. PC-based closed-loop servo), extensometer and grip configurations, and IEC/ASTM standard compliance. Entry-level models for solar backsheet and encapsulant testing are at the lower end, while high-specification PC-controlled models for NABL-accredited solar testing labs command higher prices. Contact IndiaLaser for the latest pricing, live demo, and customized quotations based on your solar material testing requirements.",
    },
    {
      q: "Do you provide calibration and installation for Single Arm UTMs?",
      a: "Yes. IndiaLaser provides free on-site installation, software setup, and comprehensive operator training with every Single Arm UTM purchase. Our engineers handle machine levelling, load cell calibration, software configuration for IEC/ASTM/ISO test standards, grip and fixture installation, and a full demonstration test run on your solar specimens. We also provide periodic calibration services and Annual Maintenance Contracts (AMC) to ensure your UTM maintains its accuracy and compliance over its operating life — essential for solar manufacturing quality labs seeking NABL accreditation or BIS/MNRE certification.",
    },
  ];

  const comparisonData = [
    { feature: "Frame Design", single: "Single Column (Cantilever) ✓", double: "Twin Column (Symmetric)", hydraulic: "Twin Column (Hydraulic)" },
    { feature: "Load Capacity Range", single: "0.5 kN – 50 kN ✓", double: "10 kN – 600 kN", hydraulic: "100 kN – 3000 kN" },
    { feature: "Footprint / Lab Space", single: "Compact — ideal for cleanrooms ✓", double: "Medium", hydraulic: "Large" },
    { feature: "Drive System", single: "Electromechanical (Servo) ✓", double: "Electromechanical", hydraulic: "Hydraulic" },
    { feature: "Speed Control", single: "Programmable (0.001–500 mm/min) ✓", double: "Programmable", hydraulic: "Variable (lower precision)" },
    { feature: "Best For Solar", single: "Encapsulants, backsheets, J-box, ribbon ✓", double: "Full-module static load, frames", hydraulic: "Large structural PV components" },
  ];

  return (
    <div className="bg-gray-100 py-10 px-4 min-h-screen overflow-x-clip w-full">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 w-full items-start">

        {/* ── LEFT SIDEBAR ── */}
        <div className="space-y-6 md:sticky md:top-24 self-start">
          <div className="bg-white rounded-2xl p-5 shadow-md">
            <h2 className="text-lg font-semibold text-gray-800 mb-5">
              UTM Machines
            </h2>
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
                <span className="text-blue-600">Universal Testing Machine (Single Arm) – Solar Testing</span>
              </p>
            </nav>
            <h1 className="text-2xl font-bold text-gray-900 mt-1">
              Universal Testing Machine (Single Arm) – Solar Testing
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              Single-column UTM for solar panel encapsulant peel tests, backsheet tensile testing, junction box adhesion, and PV module material testing — precision solar testing equipment for solar manufacturing labs and R&D centres across India
            </p>
          </div>

          {/* HERO IMAGE */}
          <div className="flex justify-center items-center w-full">
            <Image
              src="/other-products/single-arm.png"
              alt="Universal Testing Machine Single Arm for Solar Testing by IndiaLaser"
              width={600}
              height={400}
              className="object-contain"
            />
          </div>

          {/* MAIN CONTENT CARD */}
          <div className="bg-white rounded-2xl p-6 shadow-md space-y-8">

            {/* ABOUT */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Universal Testing Machine (Single Arm) – Solar Testing</h2>
              <div className="w-10 h-0.5 bg-blue-600 mt-1 mb-4 rounded" />
              <p className="text-gray-600 text-sm leading-relaxed">
                The Universal Testing Machine (Single Arm) for Solar Testing — also known as a
                Single-Column UTM or Single Arm UTM — is a compact, high-precision mechanical
                testing instrument specifically configured for the structural and adhesion
                qualification of solar photovoltaic (PV) modules, solar cell encapsulants,
                backsheets, junction boxes, busbars, ribbons, mounting clamps, and related solar
                energy components. The single-column frame design provides an unobstructed,
                open test space on three sides, making it ideal for solar material specimens of
                varying geometries — from narrow encapsulant peel strips to junction box
                assemblies and ribbon solder joint samples — without the space constraints of
                larger twin-column machines.

                Single Arm UTMs for solar testing are the primary mechanical testing instrument
                in solar module manufacturing quality control labs, PV R&D centres, solar
                testing and certification labs (IEC 61215, IEC 61730), and solar backsheet and
                encapsulant film production facilities. Load capacities from 0.5 kN to 50 kN
                cover the complete range of solar material and component-level mechanical tests,
                while the PC-based digital controller with programmable crosshead speed delivers
                the strain-rate precision demanded by international solar test standards.

                IndiaLaser's Single Arm UTMs for solar testing are built for demanding daily
                laboratory use, featuring precision servo-driven ball screw actuators, calibrated
                load cells with ±0.5% accuracy, and full compatibility with IEC 61215, IEC 61730,
                IEC 62782, ASTM D882, ASTM D903, and other solar industry test standards. Each
                machine is supplied with solar-specific test grips and fixtures (peel fixtures,
                lap-shear fixtures, tensile grips), calibration certificates, and dedicated UTM
                software with pre-configured solar test templates.
              </p>
            </div>

            {/* IMPORTED PRODUCTS */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Imported & Domestic Products</h2>
              <div className="w-12 h-1 bg-blue-600 mt-1 mb-4 rounded" />
              <p className="text-gray-600 text-sm leading-relaxed">
                We supply both imported and domestically manufactured Single Arm UTMs for solar
                testing to meet the diverse requirements of solar testing laboratories across
                India. Our imported models from globally recognized UTM manufacturers deliver
                advanced PC-based closed-loop servo control, high-resolution encoders,
                multi-channel data acquisition, and superior load cell accuracy for
                NABL-accredited solar testing labs seeking IEC 61215 and IEC 61730 compliance.
                Our domestic single arm UTM models offer excellent cost-performance ratios for
                solar module manufacturing QC departments, solar R&D centres, educational
                institutes, and solar start-ups that require reliable daily testing of
                encapsulants, backsheets, junction box adhesion, and PV ribbon tensile strength
                at accessible price points. All models are supplied with IEC/ASTM-compatible
                software, solar-specific test grips, calibration certificates, and complete
                documentation for lab compliance.
              </p>
            </div>

            {/* FEATURES */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Features of Single Arm UTM for Solar Testing</h2>
              <div className="w-12 h-1 bg-blue-600 mt-1 mb-4 rounded" />
              <ul className="list-disc pl-5 text-gray-600 text-sm space-y-2">
                <li>Compact single-column frame with open three-sided test access, ideal for solar material specimens — encapsulant strips, backsheet coupons, junction box assemblies, and ribbon samples</li>
                <li>Load capacity range from 0.5 kN to 50 kN covering all solar encapsulant, backsheet, adhesive, solder joint, and mounting component mechanical tests</li>
                <li>PC-based digital controller with dedicated UTM software featuring pre-programmed IEC 61215, IEC 61730, ASTM D882, ASTM D903 solar test templates</li>
                <li>Precision servo motor ball-screw drive with programmable crosshead speed from 0.001 mm/min to 500 mm/min for accurate peel rate and strain-rate control</li>
                <li>Calibrated load cell with ±0.5% of reading accuracy (Class 0.5) for traceable, NABL-compliant solar material test results</li>
                <li>High-resolution displacement encoder with 0.001 mm resolution for accurate elongation, peel distance, and adhesion deformation measurement</li>
                <li>Solar-specific grip and fixture set: 90° and 180° peel fixtures, lap-shear fixtures, tensile grips for ribbon and busbar testing, junction box pull fixtures</li>
                <li>Compatible with IEC 61215, IEC 61730, IEC 62782, ASTM, ISO, and IS test methods — automatic pass/fail reporting against user-defined acceptance criteria</li>
              </ul>
            </div>

            {/* ADVANTAGES */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Advantages</h2>
              <div className="w-12 h-1 bg-blue-600 mt-1 mb-4 rounded" />
              <ul className="list-disc pl-5 text-gray-600 text-sm space-y-2">
                <li>Compact footprint and open test space make it easy to integrate into solar manufacturing cleanrooms, R&D labs, and quality control stations with limited floor space</li>
                <li>Covers the complete range of solar material and component-level mechanical tests in a single instrument — encapsulant peel, backsheet tensile, J-box adhesion, ribbon strength, and more</li>
                <li>Pre-programmed IEC and ASTM solar test templates eliminate setup time, reduce operator error, and ensure standard-compliant test conditions for every sample</li>
                <li>Precision servo drive enables accurate peel rate control (mm/min) for adhesion and peel tests where test speed directly affects measured peel force values</li>
                <li>Class 0.5 load accuracy satisfies IEC 61215 / IEC 61730 mechanical test requirements and supports NABL accreditation for solar testing laboratories</li>
                <li>Low maintenance electromechanical drive (no hydraulics, no oil) minimizes contamination risk in cleanroom solar manufacturing environments and reduces operating costs</li>
              </ul>
            </div>

            {/* WORKING */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800">How a Single Arm UTM Works for Solar Panel Testing</h2>
              <div className="w-12 h-1 bg-blue-600 mt-1 mb-4 rounded" />
              <p className="text-gray-600 text-sm leading-relaxed">
                The Single Arm UTM for solar testing operates by applying a precisely controlled,
                measurable force to a solar material specimen and simultaneously recording the
                resulting force-displacement response. The test specimen — whether a 25 mm wide
                EVA encapsulant peel strip, a backsheet tensile dumbbell, a junction box bonded
                to a glass substrate, a busbar ribbon solder joint, or a mounting clamp assembly
                — is secured between the machine's specialized solar test grips or fixtures,
                attached to the fixed lower crosshead and the movable upper crosshead respectively.

                When the test begins, the PC-based controller drives the movable crosshead at
                the programmed speed via the precision servo motor ball-screw drive. For peel
                tests (e.g., EVA-to-glass or backsheet delamination), the crosshead lifts one
                end of the laminated specimen at a controlled peel rate (commonly 100 mm/min
                per IEC 61215), while the load cell continuously measures the peel force with
                ±0.5% accuracy and the encoder tracks peel distance to 0.001 mm resolution.
                For tensile tests (e.g., PV ribbon or busbar), the crosshead separates the grips
                at the programmed strain rate until specimen failure.

                The UTM software captures force and displacement data in real time, plots the
                force-displacement curve, and automatically calculates key solar material
                properties — average peel strength (N/mm), maximum peel force (N), tensile
                strength (MPa), elongation at break (%), adhesion energy (J/m²), shear strength
                (MPa), and junction box pull-out force (N) — as required by the applicable
                IEC, ASTM, or ISO solar test standard. Results are stored, printed, and exported
                with automatic pass/fail comparison against defined acceptance criteria.
              </p>
            </div>

            {/* TYPES */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Types of Single Arm UTMs for Solar Testing</h2>
              <div className="w-12 h-1 bg-blue-600 mt-1 mb-4 rounded" />
              <ul className="list-disc pl-5 text-gray-600 text-sm space-y-2">
                <li><strong>Encapsulant & Backsheet Peel UTM</strong> — Configured with 90°/180° peel fixtures and load cell optimized for low-force (10 N–500 N) adhesion peel testing of EVA, POE, backsheet films per IEC 61215 and ASTM D903</li>
                <li><strong>Junction Box & Connector Adhesion UTM</strong> — Higher load capacity (up to 5 kN) model with tensile and push-pull fixtures for junction box pull-out, cable retention, and connector insertion/extraction force testing</li>
                <li><strong>Busbar & Ribbon Tensile UTM</strong> — Precision grips for narrow busbar and interconnect ribbon tensile and solder joint strength testing, with extensometer option for modulus measurement</li>
                <li><strong>Multi-Test Solar UTM</strong> — Versatile model with interchangeable grip/fixture set covering peel, tensile, lap-shear, and compressive tests across the full range of solar material and component tests in one machine</li>
                <li><strong>PC-Controlled Solar UTM</strong> — Advanced closed-loop servo control with IEC/ASTM solar test template library, automatic pass/fail reporting, and data export for NABL-accredited solar testing labs</li>
                <li><strong>Economy Solar UTM</strong> — Budget-friendly model for solar manufacturing QC departments and small-scale solar R&D labs requiring basic peel, tensile, and adhesion testing at accessible price points</li>
              </ul>
            </div>

            {/* APPLICATIONS */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Applications</h2>
              <div className="w-12 h-1 bg-blue-600 mt-1 mb-4 rounded" />
              <ul className="list-disc pl-5 text-gray-600 text-sm space-y-2">
                <li>Solar encapsulant adhesion testing — EVA, POE, TPU peel strength and adhesion to glass and backsheet per IEC 61215, ASTM D903</li>
                <li>Solar backsheet tensile and elongation testing — tensile strength, yield strength, and elongation at break of PV backsheet laminates per ASTM D882, IEC 61215</li>
                <li>Junction box and potting adhesion testing — pull-out force, peel adhesion, and potting compound bond strength of junction boxes bonded to module backsurface</li>
                <li>PV ribbon and busbar solder joint tensile strength — interconnect ribbon pull and solder bond strength testing for cell string quality control</li>
                <li>Solar mounting clamp and bracket force testing — clamping force, pull-out force, and structural strength of solar module mounting hardware</li>
                <li>Solar frame sealant and gasket adhesion — silicone sealant bond strength and gasket peel adhesion testing for frame and junction box sealing quality</li>
                <li>NABL-accredited solar testing labs — calibrated, traceable IEC and ASTM mechanical tests for solar module certification and quality assurance</li>
                <li>Solar R&D and material development — characterization of new encapsulant, backsheet, and adhesive formulations for next-generation PV modules</li>
              </ul>
            </div>
          </div>

          {/* ── TECHNICAL SPECIFICATIONS ── */}
          <div className="bg-white rounded-2xl p-6 shadow-md">
            <h2 className="text-xl font-semibold text-gray-800">Technical Specifications</h2>
            <div className="w-12 h-1 bg-blue-600 mt-1 mb-4 rounded" />
            <p className="text-sm text-gray-500 mb-4">
              Standard specifications for our Single Arm UTMs for solar testing. Custom load capacities and solar-specific configurations available on request.
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
              Choosing the right UTM configuration for your solar testing lab depends on load capacity, specimen size, and solar test standard requirements.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-800 text-white">
                    <th className="text-left px-4 py-2.5 rounded-tl-lg">Feature</th>
                    <th className="text-center px-4 py-2.5 bg-blue-600">Single Arm UTM ✓</th>
                    <th className="text-center px-4 py-2.5">Double Arm UTM</th>
                    <th className="text-center px-4 py-2.5 rounded-tr-lg">Hydraulic UTM</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-4 py-2.5 text-gray-700 font-medium border-b border-gray-100">{row.feature}</td>
                      <td className="px-4 py-2.5 text-center text-blue-700 font-semibold border-b border-gray-100 bg-blue-50">{row.single}</td>
                      <td className="px-4 py-2.5 text-center text-gray-600 border-b border-gray-100">{row.double}</td>
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
              Frequently Asked Questions — Single Arm UTM for Solar Testing
            </h2>
            <div className="w-12 h-1 bg-blue-600 mt-1 mb-4 rounded" />
            <p className="text-sm text-gray-500 mb-5">
              Common questions about single arm UTMs, solar panel mechanical testing, and solar material testing laboratory setup in India.
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
                { title: "Export-Grade Packing", desc: "Foam-padded wooden crates with frame protection, load cell cushioning, and anti-static packaging for safe Single Arm UTM transit" },
                { title: "Pan-India Delivery", desc: "Shipping to all major cities via trusted freight partners with real-time tracking and doorstep delivery to your solar lab" },
                { title: "On-Site Installation", desc: "Engineer deputed for machine levelling, load cell calibration, software setup, solar grip/fixture installation, and operator training" },
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
            <h2 className="text-xl font-semibold text-gray-800">Single Arm UTM for Solar Testing in India</h2>
            <div className="w-12 h-1 bg-blue-600 mt-1 mb-4 rounded" />
            <p className="text-gray-600 text-sm leading-relaxed">
              Looking for a{" "}
              <strong>Single Arm UTM for solar panel testing price in India</strong>?
              IndiaLaser offers the best single-column UTMs for solar material testing
              laboratories — from compact electromechanical models for encapsulant peel
              testing and backsheet tensile testing to high-specification PC-controlled
              solar UTMs for NABL-accredited IEC 61215 and IEC 61730 certification labs.
              Whether you need a{" "}
              <strong>single arm UTM for EVA encapsulant peel strength testing</strong>, a{" "}
              <strong>PC-controlled UTM for solar backsheet mechanical qualification</strong>, or a{" "}
              <strong>junction box adhesion testing machine for solar module manufacturing QC</strong>,
              we have the right solution for your solar testing equipment requirements. Our
              Single Arm UTMs for solar testing are available in{" "}
              <strong>Delhi, Mumbai, Chennai, Bengaluru, Hyderabad, Pune, Ahmedabad, Surat, Jaipur, Kochi</strong>,
              and across India with fast delivery, IEC/ASTM calibration certificates, genuine
              spare parts, solar-specific grip and fixture sets, and dedicated after-sales
              support. Compare single arm solar UTMs with double arm UTMs and hydraulic UTMs,
              or{" "}
              <Link href="/contact-us" className="text-blue-600 font-semibold hover:underline">
                contact our team
              </Link>{" "}
              for a customized quotation and complete solar material testing laboratory setup guidance today.
            </p>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-blue-900 to-blue-600 rounded-2xl p-6 text-center text-white shadow-md">
            <h2 className="text-xl font-bold mb-2">Ready to Buy a Single Arm UTM for Solar Testing?</h2>
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