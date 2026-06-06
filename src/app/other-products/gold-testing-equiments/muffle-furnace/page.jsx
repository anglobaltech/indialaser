

import Image from "next/image";
import Link from "next/link";

export const metadata = { title: "Muffle Furnace Machine for Gold Testing - IndiaLaser",
description: "Explore our Muffle Furnace Machine for Gold Testing, designed for precise high-temperature ashing, annealing, and cupellation. Ideal for jewellery labs, refineries, and hallmarking centres across India, it delivers consistent results with advanced PID control and robust construction." 
};


export default function MuffleFurnacePage() {


  const machines = [
    {
      name: "Muffle Furnace Machine",
      link: "/other-products/gold-testing-equiments/muffle-furnace",
      image: "/laser-machines/muffle.png",
      active: true,
    },
    {
      name: "High Precision Assay Furnace",
      link: "/other-products/gold-testing-equiments/high-precision-assay-furnace",
      image: "/other-products/High precision assay .png",
      active: true,
    },
    {
      name: "XRF Gold Testing Machine",
      link: "/other-products/gold-testing-equiments/xrf-machine",
      image: "/laser-machines/xrf-gold file.png",
      active: true,
    },
    {
      name: "Fire Assay Furnace Machine",
      link: "/other-products/gold-testing-equiments/fire-assay-furnace",
      image: "/laser-machines/assay-furnace.png",
      active: true,
    },
    {
      name: "Cupellation Furnace Machine",
      link: "/other-products/gold-testing-equiments/cupellation-furnace",
      image: "/other-products/CUPELLATION FURNACE.png",
      active: true,
    },
  ];

  const specs = [
    { param: "Technology", value: "Resistance Heating Muffle Furnace" },
    { param: "Temperature Range", value: "Room Temperature – 1400°C" },
    { param: "Temperature Accuracy", value: "±2°C (PID Controller)" },
    { param: "Chamber Volume", value: "2 Litre – 30 Litre (Multiple Models)" },
    { param: "Heating Elements", value: "Kanthal / Silicon Carbide / MoSi2" },
    { param: "Chamber Material", value: "Ceramic Fibre / High-Alumina Refractory Lining" },
    { param: "Control System", value: "Programmable PID Digital Controller with Timer" },
    { param: "Heating Rate", value: "Adjustable up to 40°C/min" },
    { param: "Display", value: "Digital LED / Touchscreen Temperature Display" },
    { param: "Data Output", value: "USB / RS-232 / Thermocouple Interface" },
    { param: "Power Supply", value: "220V–440V / 50–60Hz (Single/Three Phase)" },
    { param: "Warranty", value: "1 Year (Extendable)" },
  ];

  const whyUs = [
    { title: "Pan-India Service Network", desc: "Dedicated engineers available across all major Indian cities for fast on-site support." },
    { title: "Free Installation & Training", desc: "On-site commissioning and hands-on operator training included with every furnace purchase." },
    { title: "Genuine Heating Elements & Spares", desc: "Authentic Kanthal, SiC, and MoSi2 elements with certified quality assurance." },
    { title: "Fast Delivery", desc: "Ready stock available across capacities; dispatch within 3–7 business days." },
    { title: "After-Sales Support", desc: "365-day support via call, WhatsApp, and remote diagnostics for uninterrupted lab operations." },
  ];

  const faqs = [
    {
      q: "What is a Muffle Furnace and how is it used for gold testing?",
      a: "A Muffle Furnace isolates samples from heating elements for high-temperature treatment. In gold testing, it is used for annealing, ashing, cupellation, and heat treatment stages during fire assay and precious metal refining.",
    },
    {
      q: "What is the difference between a Muffle Furnace and a Fire Assay Furnace?",
      a: "A muffle furnace is a general-purpose laboratory heating tool. A fire assay furnace is a specialized type of muffle furnace optimized explicitly for fusion crucibles and cupels with precise chamber geometry and atmosphere control.",
    },
    {
      q: "What temperature is required for gold testing in a muffle furnace?",
      a: "It depends on the stage: 920°C–1050°C for cupellation, 950°C–1100°C for sample fusion, and 650°C–850°C for annealing gold alloys. Our furnaces support temperatures up to 1400°C to cover all laboratory workflows.",
    },
    {
      q: "What is the price of a Muffle Furnace in India?",
      a: "Prices range from ₹20,000 for small benchtop units to over ₹5 Lakhs for large industrial models. Standard gold testing and laboratory models typically range from ₹60,000 to ₹3 Lakhs. Contact us for a custom quote.",
    },
    {
      q: "Is a Muffle Furnace suitable for silver testing as well?",
      a: "Yes. It works perfectly for silver testing. It handles the cupellation stage to yield the gold-silver prill, and is also used for annealing silver alloys or preparing silver samples for XRF and chemical analysis.",
    },
    {
      q: "Do you provide installation and calibration for Muffle Furnaces?",
      a: "Yes, IndiaLaser provides free on-site installation, temperature uniformity calibration, and operator training. We also offer periodic recalibration services and Annual Maintenance Contracts (AMC) to keep your instrument accurate.",
    },
  ]

  const comparisonData = [
    { feature: "Primary Use", muffle: "Ashing, Annealing, Cupellation, Sintering", fire: "Dedicated Fire Assay (Fusion + Cupellation)", xrf: "Rapid Non-Destructive Elemental Analysis" },
    { feature: "Temperature Range", muffle: "Up to 1400°C", fire: "Up to 1200°C (Optimised)", xrf: "Ambient (No Heating)" },
    { feature: "Sample Throughput", muffle: "Medium–High (Batch)", fire: "Medium (Batch Assay)", xrf: "Very High (1 sample / min)" },
    { feature: "Destructive?", muffle: "Yes (Sample consumed)", fire: "Yes (Sample consumed)", xrf: "No (Non-destructive)" },
    { feature: "Versatility", muffle: "High (Multi-application)", fire: "Limited (Assay-specific)", xrf: "High (Multi-element)" },
    { feature: "Accuracy for Gold", muffle: "±0.01% (with fire assay protocol)", fire: "±0.01% (Highest)", xrf: "±0.05–0.1%" },
  ];

  return (
    <div className="bg-gray-100 py-10 px-4 min-h-screen overflow-x-clip w-full">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 w-full items-start">

        {/* ── LEFT SIDEBAR ── */}
        <div className="space-y-6 md:sticky md:top-24 self-start">
          <div className="bg-white rounded-2xl p-5 shadow-md">
            <h2 className="text-lg font-semibold text-gray-800 mb-5">
              Muffle Furnace & Related Machines
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
            <p className="text-xs text-gray-500">Speak to our muffle furnace specialists for pricing, demo, and lab setup advice.</p>
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
                <span className="text-blue-600">Muffle Furnace Machine for Gold Testing</span>
              </p>
            </nav>
            <h1 className="text-2xl font-bold text-gray-900 mt-1">
              Muffle Furnace Machine for Gold Testing
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              Precision high-temperature muffle furnaces for gold ashing, annealing, cupellation, and fire assay — trusted by jewellery labs, refineries, and hallmarking centres across India
            </p>
          </div>

          {/* HERO IMAGE */}
          <div className="flex justify-center items-center w-full">
            <Image
              src="/laser-machines/muffle.png"
              alt="Muffle Furnace Machine for Gold Testing by IndiaLaser"
              width={600}
              height={400}
              className="object-contain"
            />
          </div>

          {/* MAIN CONTENT CARD */}
          <div className="bg-white rounded-2xl p-6 shadow-md space-y-8">

            {/* ABOUT */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Muffle Furnace Machine for Gold Testing</h2>
              <div className="w-10 h-0.5 bg-blue-600 mt-1 mb-4 rounded" />
              <p className="text-gray-600 text-sm leading-relaxed">
                Muffle Furnace Machines are essential high-temperature laboratory instruments used
                across gold testing, precious metal analysis, jewellery manufacturing, and
                metallurgical research. The defining characteristic of a muffle furnace is the
                thermally isolated chamber — the "muffle" — which completely separates the sample
                from the heating elements and combustion gases, ensuring contamination-free
                thermal treatment at precisely controlled temperatures.

                In the context of gold and precious metal testing, muffle furnaces serve multiple
                critical functions: ashing organic material from ore or jewellery samples before
                analysis, annealing gold alloys and rolled products, performing the cupellation
                stage of the fire assay process, sintering precious metal powders, and heat-treating
                jewellery components during manufacture. Their wide operating temperature range —
                up to 1400°C in advanced models — combined with programmable PID controllers
                makes them indispensable in both routine quality control and high-accuracy
                reference testing environments.

                Muffle furnaces are widely used in gold and silver refineries, BIS-approved
                hallmarking and assaying laboratories, jewellery manufacturing units, mining
                assay labs, e-waste precious metal recovery facilities, universities, and
                government testing institutions. With robust refractory chamber construction,
                long-life heating elements, and digital temperature management, modern muffle
                furnaces deliver consistent performance across thousands of thermal cycles.
              </p>
            </div>

            {/* IMPORTED & DOMESTIC */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Imported & Domestic Models</h2>
              <div className="w-12 h-1 bg-blue-600 mt-1 mb-4 rounded" />
              <p className="text-gray-600 text-sm leading-relaxed">
                We supply both internationally sourced muffle furnaces from globally recognized
                laboratory instrument manufacturers and quality domestically engineered models
                tailored for the Indian laboratory environment. Our imported range includes
                high-precision models with multi-segment programmable controllers, over-temperature
                protection, and advanced atmosphere control — ideal for research and certified
                testing laboratories. Our domestic range offers robust, cost-effective solutions
                with full technical support, readily available spare parts, and fast service
                response times, making them the preferred choice for production labs, jewellery
                manufacturers, and assay laboratories across India.
              </p>
            </div>

            {/* FEATURES */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Features of Muffle Furnace Machine</h2>
              <div className="w-12 h-1 bg-blue-600 mt-1 mb-4 rounded" />
              <ul className="list-disc pl-5 text-gray-600 text-sm space-y-2">
                <li>Wide temperature range up to 1400°C — suitable for ashing, cupellation, sintering, annealing, and calcination</li>
                <li>PID programmable digital controller with ±2°C accuracy and multi-segment temperature ramping</li>
                <li>Ceramic fibre or high-alumina refractory muffle chamber for excellent heat retention and long service life</li>
                <li>Choice of Kanthal, Silicon Carbide (SiC), or Molybdenum Disilicide (MoSi2) heating elements for different temperature requirements</li>
                <li>Over-temperature protection and thermocouple alarm for laboratory safety</li>
                <li>Programmable dwell time, ramp rate, and cooling profile — automate your entire thermal cycle</li>
                <li>Multiple chamber sizes from 2L to 30L to match your throughput requirements</li>
                <li>Front-loading door with heat-insulated handle and stainless steel outer casing for safe, ergonomic operation</li>
              </ul>
            </div>

            {/* ADVANTAGES */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Advantages</h2>
              <div className="w-12 h-1 bg-blue-600 mt-1 mb-4 rounded" />
              <ul className="list-disc pl-5 text-gray-600 text-sm space-y-2">
                <li>Completely isolated muffle chamber prevents cross-contamination between samples and heating elements</li>
                <li>Uniform temperature distribution across the chamber ensures every cupel or crucible receives identical thermal treatment</li>
                <li>Versatile multi-application use — one furnace handles ashing, annealing, cupellation, and sintering tasks</li>
                <li>Energy-efficient ceramic fibre insulation reduces power consumption and heat-up time significantly</li>
                <li>Programmable automation reduces operator dependency and improves run-to-run repeatability</li>
                <li>Available in bench-top to floor-standing configurations to suit any laboratory space and throughput</li>
              </ul>
            </div>

            {/* WORKING */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800">How a Muffle Furnace Works for Gold Testing</h2>
              <div className="w-12 h-1 bg-blue-600 mt-1 mb-4 rounded" />
              <p className="text-gray-600 text-sm leading-relaxed">
                In a muffle furnace, electrical resistance heating elements — mounted outside the
                ceramic muffle chamber — heat the chamber walls to the programmed set point.
                Heat is transferred to the sample exclusively through radiation and convection
                within the isolated muffle, with no direct exposure to the heating element or
                any combustion products.

                For gold testing applications, the process depends on the task at hand. In
                ashing, a jewellery or ore sample is placed in a crucible inside the chamber
                at 450°C–600°C to burn off all organic matter, leaving an ash residue suitable
                for acid digestion or XRF analysis. In cupellation for fire assay, a lead button
                containing gold and silver is placed on a porous magnesia cupel inside the
                furnace at 950°C–1000°C; as the lead oxidizes, the cupel absorbs the litharge,
                leaving a pure precious metal prill for gravimetric measurement. In annealing,
                gold alloy samples or jewellery pieces are heated to a controlled temperature
                and held for a defined soak time to relieve internal stress and restore workability.

                The PID controller continuously monitors the thermocouple and adjusts heating
                element power to maintain exact temperature throughout the programmed cycle,
                ensuring every batch receives identical thermal treatment for reproducible results.
              </p>
            </div>

            {/* TYPES */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Types of Muffle Furnaces</h2>
              <div className="w-12 h-1 bg-blue-600 mt-1 mb-4 rounded" />
              <ul className="list-disc pl-5 text-gray-600 text-sm space-y-2">
                <li><strong>Standard Laboratory Muffle Furnace</strong> — Bench-top model up to 1100°C, ideal for ashing, annealing, and routine heat treatment in jewellery and hallmarking labs</li>
                <li><strong>High-Temperature Muffle Furnace</strong> — Models reaching 1200°C–1400°C with SiC or MoSi2 elements for sintering, ceramic testing, and refractory applications</li>
                <li><strong>Programmable Muffle Furnace</strong> — Multi-segment PLC-controlled units with custom ramp-and-soak profiles for automated assay and research cycles</li>
                <li><strong>Atmosphere-Controlled Muffle Furnace</strong> — Sealed chamber with gas inlet for inert or reducing atmosphere sintering of precious metal powders</li>
                <li><strong>Tube Muffle Furnace</strong> — Cylindrical chamber for continuous or flow-through thermal treatment of wire, foil, and tube samples</li>
                <li><strong>Industrial Muffle Furnace</strong> — High-capacity floor-standing models for production-scale heat treatment and large-batch assay laboratory operations</li>
              </ul>
            </div>

            {/* APPLICATIONS */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Applications</h2>
              <div className="w-12 h-1 bg-blue-600 mt-1 mb-4 rounded" />
              <ul className="list-disc pl-5 text-gray-600 text-sm space-y-2">
                <li>Gold and silver fire assay — cupellation stage for precious metal bead recovery from lead buttons</li>
                <li>Sample ashing — burning off organic matter in ore, soil, jewellery, and recycled material samples before chemical analysis</li>
                <li>Jewellery manufacturing — annealing gold, silver, and platinum alloys to restore ductility during fabrication</li>
                <li>BIS hallmarking laboratories — heat treatment and pre-treatment of jewellery samples for assay testing</li>
                <li>Gold and silver refinery operations — calcination, flux preparation, and heat treatment in the refining workflow</li>
                <li>E-waste recycling — ashing and pre-concentration of electronic scrap before precious metal recovery</li>
                <li>University and research laboratories — material science, ceramics, metallurgy, and analytical chemistry research</li>
              </ul>
            </div>
          </div>

          {/* ── TECHNICAL SPECIFICATIONS ── */}
          <div className="bg-white rounded-2xl p-6 shadow-md">
            <h2 className="text-xl font-semibold text-gray-800">Technical Specifications</h2>
            <div className="w-12 h-1 bg-blue-600 mt-1 mb-4 rounded" />
            <p className="text-sm text-gray-500 mb-4">
              Standard specifications for our Muffle Furnace Machines. Custom chamber sizes and temperature ratings available on request.
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
            <p className="text-xs text-gray-400 mt-3">* Specifications may vary by model. Contact us for model-specific datasheet.</p>
          </div>

          {/* ── COMPARISON TABLE ── */}
          <div className="bg-white rounded-2xl p-6 shadow-md">
            <h2 className="text-xl font-semibold text-gray-800">Muffle Furnace vs Fire Assay Furnace vs XRF — Which is Right for You?</h2>
            <div className="w-12 h-1 bg-blue-600 mt-1 mb-4 rounded" />
            <p className="text-sm text-gray-500 mb-4">
              Choosing the right equipment depends on your application, required accuracy, and throughput. Here's a clear comparison to guide your decision.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-800 text-white">
                    <th className="text-left px-4 py-2.5 rounded-tl-lg">Feature</th>
                    <th className="text-center px-4 py-2.5 bg-blue-600">Muffle Furnace ✓</th>
                    <th className="text-center px-4 py-2.5">Fire Assay Furnace</th>
                    <th className="text-center px-4 py-2.5 rounded-tr-lg">XRF Testing</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-4 py-2.5 text-gray-700 font-medium border-b border-gray-100">{row.feature}</td>
                      <td className="px-4 py-2.5 text-center text-blue-700 font-semibold border-b border-gray-100 bg-blue-50">{row.muffle}</td>
                      <td className="px-4 py-2.5 text-center text-gray-600 border-b border-gray-100">{row.fire}</td>
                      <td className="px-4 py-2.5 text-center text-gray-600 border-b border-gray-100">{row.xrf}</td>
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
              Frequently Asked Questions — Muffle Furnace for Gold Testing
            </h2>
            <div className="w-12 h-1 bg-blue-600 mt-1 mb-4 rounded" />
            <p className="text-sm text-gray-500 mb-5">
              Common questions about muffle furnaces, gold testing applications, pricing, and laboratory setup in India.
            </p>

            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="border border-gray-200 rounded-xl p-4 bg-gray-50">
                  {/* Question */}
                  <h3 className="text-sm font-semibold text-gray-800 mb-2">
                    {faq.q}
                  </h3>
                  {/* Answer */}
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {faq.a}
                  </p>
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
                { title: "Export-Grade Packing", desc: "Foam-padded wooden crates with vibration-absorbing material to protect the refractory chamber and heating elements during transit" },
                { title: "Pan-India Delivery", desc: "Shipping to all cities and states via trusted freight partners with real-time tracking" },
                { title: "On-Site Installation", desc: "Engineer deputed for furnace installation, temperature calibration, commissioning, and operator training at your laboratory" },
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
            <h2 className="text-xl font-semibold text-gray-800">Muffle Furnace for Gold Testing in India</h2>
            <div className="w-12 h-1 bg-blue-600 mt-1 mb-4 rounded" />
            <p className="text-gray-600 text-sm leading-relaxed">
              Looking for the best <strong>muffle furnace price in India for gold testing</strong>? IndiaLaser offers a
              comprehensive range of muffle furnaces for jewellery labs, hallmarking centres, refineries, and mining assay
              laboratories — from compact 2-litre benchtop models to large-chamber high-temperature industrial units.
              Whether you need a <strong>muffle furnace for fire assay cupellation</strong>, a{" "}
              <strong>programmable muffle furnace for gold annealing</strong>, a{" "}
              <strong>high-temperature muffle furnace for silver ashing</strong>, or a{" "}
              <strong>laboratory muffle furnace for BIS hallmarking centre setup</strong>, we have the right model for
              your requirements. Our muffle furnaces are available for delivery to{" "}
              <strong>Delhi, Mumbai, Chennai, Bengaluru, Hyderabad, Pune, Ahmedabad, Surat, Jaipur, Kochi, Kolkata,
                Rajkot, Coimbatore</strong>, and all across India with fast dispatch, free installation, and dedicated
              after-sales support. Compare our muffle furnaces with fire assay furnaces and XRF gold testing machines,
              or{" "}
              <Link href="/contact-us" className="text-blue-600 font-semibold hover:underline">
                contact our team
              </Link>{" "}
              for a customized quotation and live demonstration today.
            </p>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-blue-900 to-blue-600 rounded-2xl p-6 text-center text-white shadow-md">
            <h2 className="text-xl font-bold mb-2">Ready to Buy a Muffle Furnace for Gold Testing?</h2>
            <p className="text-sm text-blue-100 mb-4">
              Get the best price, free demo, and expert guidance from IndiaLaser's team.
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