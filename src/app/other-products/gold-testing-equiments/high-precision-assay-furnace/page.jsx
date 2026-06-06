import Image from "next/image";
import Link from "next/link";
export const metadata = { title: "High Precision Assay Furnace - Gold Testing Equipment in India | IndiaLaser", 
description: "Discover our High Precision Assay Furnace, a crucial gold testing equipment for fire assay fusion. Ideal for BIS hallmarking centres, refineries, and mining labs across India, it delivers accurate and reproducible results for gold and silver content determination."
 };
export default function HighPrecisionAssayFurnacePage() {
  

  const machines = [
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
    { param: "Technology", value: "High-Temperature Muffle Furnace (Fire Assay / Fusion)" },
    { param: "Temperature Range", value: "Room Temperature – 1200°C" },
    { param: "Assay Temperature", value: "950°C – 1100°C (Adjustable)" },
    { param: "Temperature Accuracy", value: "±1°C (PID Controller)" },
    { param: "Chamber Capacity", value: "Up to 24 Crucibles per Batch" },
    { param: "Heating Elements", value: "Silicon Carbide (SiC) Rods / MoSi2 Elements" },
    { param: "Chamber Material", value: "High-Density Alumina Refractory Lining" },
    { param: "Control System", value: "Programmable PID Digital Controller with Multi-Segment Ramp/Soak Timer" },
    { param: "Heating Rate", value: "Adjustable up to 25°C/min" },
    { param: "Temperature Uniformity", value: "±3°C across chamber (at 1000°C)" },
    { param: "Power Supply", value: "220V–440V / 50–60Hz (Single/Three Phase)" },
    { param: "Warranty", value: "1 Year (Extendable)" },
  ];

  const whyUs = [
    { title: "Pan-India Service Network", desc: "Dedicated engineers available across major Indian cities for installation, calibration, and repair." },
    { title: "Free Installation & Training", desc: "On-site setup and complete fire assay process training included with every furnace purchase." },
    { title: "Genuine Refractory & Heating Parts", desc: "High-grade SiC/MoSi2 heating elements, certified fireclay crucibles, and genuine spare parts." },
    { title: "Fast Delivery", desc: "Ready stock available; dispatch within 3–7 business days across India." },
    { title: "After-Sales Support", desc: "365-day support via call, WhatsApp, and remote diagnostics for uninterrupted lab operations." },
  ];

  const faqs =[
  {
    q: "What is a High Precision Assay Furnace used for?",
    a: "It is a high-temperature furnace used for the fusion stage of fire assay—the global reference method for gold and silver purity. It heats samples with flux to 950°C–1100°C to isolate precious metals into a lead button for analysis. ",
  },
  {
    q: "What is the difference between an Assay Furnace and a Cupellation Furnace?",
    a: "An Assay (Fusion) Furnace runs at 950°C–1200°C under reducing conditions to melt the sample into a lead button. A Cupellation Furnace operates at 850°C–1000°C with air airflow to oxidize the lead and isolate the pure gold-silver prill. ",
  },
  {
    q: "What materials can be tested using a High Precision Assay Furnace?",
    a: "It processes almost any precious metal matrix, including gold/silver ores, mine concentrates, doré bars, bullion, jewellery scrap, e-waste, dental alloys, and refinery sweeps. Because fire assay is matrix-independent, it works on highly complex samples.",
  },
  {
    q: "What is the price of a High Precision Assay Furnace in India?",
    a: "Prices generally range from ₹1.5 Lakhs to ₹12 Lakhs. The cost depends on chamber capacity, heating element types (SiC or MoSi2), and automation features. Lab models for jewellery testing sit at the lower end, while mining units cost more. ",
  },
  {
    q: "Is a High Precision Assay Furnace required for BIS hallmarking?",
    a: "Yes. The Bureau of Indian Standards (BIS) mandates fire assay as the primary reference method for gold purity certification. Every BIS-approved hallmarking centre must use an assay fusion furnace alongside a cupellation setup.",
  },
  {
    q: "Do you provide installation and training for High Precision Assay Furnaces?",
    a: "Yes, IndiaLaser provides free on-site installation, system commissioning, and comprehensive operator training. Our team teaches your staff how to program temperature profiles, mix flux charges, handle crucibles, and maintain the equipment safely.",
  },
]
  const comparisonData = [
    { feature: "Stage in Fire Assay", assay: "Stage 1 — Fusion / Metal Collection", cup: "Stage 2 — Lead Removal", combined: "Stage 1 + 2 Combined" },
    { feature: "Operating Temperature", assay: "950°C – 1200°C", cup: "850°C – 1000°C", combined: "850°C – 1200°C" },
    { feature: "Atmosphere Required", assay: "Reducing / Neutral", cup: "Oxidizing (Open Air)", combined: "Switchable" },
    { feature: "Output", assay: "Lead Button (with Au/Ag)", cup: "Gold-Silver Prill (Bead)", combined: "Gold-Silver Prill" },
    { feature: "Crucible/Cupel Used", assay: "Fireclay Fusion Crucible", cup: "MgO Cupel", combined: "Both" },
    { feature: "Best For", assay: "High-volume fusion assay labs", cup: "Dedicated cupellation labs", combined: "Compact lab setups" },
  ];

  return (
    <div className="bg-gray-100 py-10 px-4 min-h-screen overflow-x-clip w-full">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 w-full items-start">

        {/* ── LEFT SIDEBAR ── */}
        <div className="space-y-6 md:sticky md:top-24 self-start">
          <div className="bg-white rounded-2xl p-5 shadow-md">
            <h2 className="text-lg font-semibold text-gray-800 mb-5">
              Gold Testing Equipment
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
            <p className="text-xs text-gray-500">Talk to our gold testing equipment experts for pricing, demo, and customization.</p>
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
                <span className="text-blue-600">High Precision Assay Furnace</span>
              </p>
            </nav>
            <h1 className="text-2xl font-bold text-gray-900 mt-1">
              High Precision Assay Furnace
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              High-temperature fusion assay furnace for fire assay gold and silver determination — essential gold testing equipment for hallmarking centres, refineries, and mining laboratories across India
            </p>
          </div>

          {/* HERO IMAGE */}
          <div className="flex justify-center items-center w-full">
            <Image
              src="/other-products/High precision assay .png"
              alt="High Precision Assay Furnace by IndiaLaser"
              width={600}
              height={400}
              className="object-contain"
            />
          </div>

          {/* MAIN CONTENT CARD */}
          <div className="bg-white rounded-2xl p-6 shadow-md space-y-8">

            {/* ABOUT */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800">High Precision Assay Furnace</h2>
              <div className="w-10 h-0.5 bg-blue-600 mt-1 mb-4 rounded" />
              <p className="text-gray-600 text-sm leading-relaxed">
                High Precision Assay Furnaces are purpose-built high-temperature muffle furnaces
                engineered for the fusion stage of fire assay — the most accurate and universally
                accepted method for determining gold and silver content in ores, alloys, bullion,
                and precious metal scrap. The fusion stage is the critical first step of fire assay,
                where a precisely weighed sample is mixed with a lead oxide flux charge and heated
                to 950°C–1100°C inside the furnace. The molten lead collects all gold and silver
                from the sample matrix into a dense lead button, ready for the subsequent cupellation
                stage where the lead is oxidized to isolate the pure gold-silver prill.

                As the foundation of every fire assay laboratory, the high precision assay furnace
                must deliver exceptional temperature uniformity, accurate PID control, and consistent
                batch-to-batch reproducibility. These furnaces accommodate multiple fireclay fusion
                crucibles per batch, enabling high-throughput assay operations without compromising
                accuracy. The fire assay method is matrix-independent and recognized internationally
                — including by BIS in India — as the primary reference method for gold purity
                determination, preferred over XRF and other techniques for its unmatched accuracy
                even in complex ore and alloy matrices.

                High Precision Assay Furnaces from IndiaLaser are built for demanding daily laboratory
                use in BIS hallmarking and assaying centres, gold and silver refineries, mining
                exploration labs, smelters, jewellery quality control departments, and electronic
                scrap precious metal recovery facilities. With robust SiC or MoSi2 heating elements,
                multi-segment programmable PID controllers, and high-density alumina refractory
                chamber construction, these furnaces deliver the temperature precision and
                repeatability required for laboratory-grade fire assay fusion.
              </p>
            </div>

            {/* IMPORTED PRODUCTS */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Imported & Domestic Products</h2>
              <div className="w-12 h-1 bg-blue-600 mt-1 mb-4 rounded" />
              <p className="text-gray-600 text-sm leading-relaxed">
                We supply both imported and domestically manufactured high precision assay furnaces
                to meet the requirements of every type of fire assay laboratory in India. Our
                imported models from globally recognized laboratory furnace manufacturers offer
                advanced multi-segment PID programming, superior MoSi2 heating elements rated
                to 1600°C, exceptional temperature uniformity (±3°C), and large multi-crucible
                chamber capacities for high-throughput assay operations in refineries and mining
                labs. Our domestic models provide excellent value for BIS hallmarking centres
                and jewellery testing laboratories that require reliable fire assay fusion
                performance at an accessible price point. All models are supplied with certified
                fireclay fusion crucibles, flux charge preparation guides, spare heating elements,
                and complete documentation for BIS assaying laboratory compliance.
              </p>
            </div>

            {/* FEATURES */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Features of High Precision Assay Furnace</h2>
              <div className="w-12 h-1 bg-blue-600 mt-1 mb-4 rounded" />
              <ul className="list-disc pl-5 text-gray-600 text-sm space-y-2">
                <li>Precise temperature control at 950°C–1100°C optimized for complete lead oxide flux fusion and metal collection</li>
                <li>Programmable multi-segment PID controller with ±1°C accuracy for repeatable fire assay fusion results</li>
                <li>High-capacity chamber accommodating up to 24 fireclay fusion crucibles per batch for high-throughput labs</li>
                <li>Superior temperature uniformity (±3°C across chamber) ensuring consistent lead button formation across all crucible positions</li>
                <li>High-density alumina refractory brick lining for long chamber life and minimal flux contamination</li>
                <li>Silicon carbide (SiC) or molybdenum disilicide (MoSi2) heating elements for extended service life and uniform heat distribution</li>
                <li>Multi-segment ramp-and-soak timer for programmable fusion temperature profiles and automatic soak period control</li>
                <li>Heavy-duty hinged door with counterbalance for safe crucible loading and unloading at high temperatures</li>
              </ul>
            </div>

            {/* ADVANTAGES */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Advantages</h2>
              <div className="w-12 h-1 bg-blue-600 mt-1 mb-4 rounded" />
              <ul className="list-disc pl-5 text-gray-600 text-sm space-y-2">
                <li>Delivers complete and reproducible lead button formation with minimal precious metal loss during fusion</li>
                <li>Exceptional temperature uniformity across the chamber eliminates position-to-position variation in fire assay results</li>
                <li>High batch capacity maximizes laboratory throughput for mining assay labs and refineries processing large daily sample volumes</li>
                <li>Matrix-independent performance — accurate results for sulphide ores, oxide ores, refractory gold, and complex alloy matrices</li>
                <li>Programmable thermal profiles allow optimization of fusion cycles for different ore types and flux charge compositions</li>
                <li>Long heating element lifespan and low maintenance design reduce operating costs and unplanned downtime in daily assay operations</li>
              </ul>
            </div>

            {/* WORKING */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800">How a High Precision Assay Furnace Works</h2>
              <div className="w-12 h-1 bg-blue-600 mt-1 mb-4 rounded" />
              <p className="text-gray-600 text-sm leading-relaxed">
                The fire assay fusion process begins with the preparation of the flux charge: a
                precisely weighed ore or alloy sample is mixed with a standardized flux charge
                consisting of litharge (lead oxide, PbO), anhydrous sodium carbonate (soda ash),
                borax glass, and a small amount of flour or starch as the reducing agent. The
                charge is mixed thoroughly and transferred into pre-heated fireclay fusion crucibles.
                These crucibles are loaded into the high precision assay furnace, which has been
                pre-heated to the target fusion temperature of 950°C–1100°C.

                Inside the furnace, the flour reduces the lead oxide to metallic lead, which melts
                and sinks to the bottom of the crucible. The molten lead acts as a collector,
                absorbing all the gold and silver from the sample through metal-metal affinity —
                a process called "lead collection." The flux components dissolve the gangue minerals
                and form a slag that floats above the lead. After a controlled soak period of
                approximately 60–90 minutes, the crucibles are removed from the furnace using
                long-handled tongs and the molten contents are immediately poured into pre-heated
                cast iron molds. As the melt cools, the dense lead button separates from the
                lighter slag and can be recovered for the cupellation stage. The lead button —
                now containing essentially all the gold and silver from the original sample —
                is then transferred to the cupellation furnace for the second stage of fire assay,
                where the lead is oxidized to leave behind the final gold-silver prill for weighing
                and acid parting.
              </p>
            </div>

            {/* TYPES */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Types of High Precision Assay Furnaces</h2>
              <div className="w-12 h-1 bg-blue-600 mt-1 mb-4 rounded" />
              <ul className="list-disc pl-5 text-gray-600 text-sm space-y-2">
                <li><strong>Standard Laboratory Assay Furnace</strong> — Benchtop or floor-standing muffle furnace for hallmarking centres, jewellery labs, and small fire assay operations (6–12 crucible capacity)</li>
                <li><strong>High-Capacity Assay Furnace</strong> — Large-chamber model for mining assay labs and refineries processing high daily sample volumes (12–24+ crucibles)</li>
                <li><strong>Combined Fire Assay Furnace</strong> — Dual-function unit capable of both fusion and cupellation stages for compact laboratory setups</li>
                <li><strong>Programmable Ramp Assay Furnace</strong> — Advanced PLC-controlled model with multi-segment thermal profiles and automatic timer for unattended fusion cycles</li>
                <li><strong>Three-Phase Industrial Assay Furnace</strong> — Heavy-duty three-phase powered model for large refineries and smelters requiring rapid heat-up, high thermal stability, and continuous high-volume operation</li>
                <li><strong>Economy Assay Furnace</strong> — Cost-effective single-phase model for budget-conscious BIS hallmarking laboratories and small jewellery testing units</li>
              </ul>
            </div>

            {/* APPLICATIONS */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Applications</h2>
              <div className="w-12 h-1 bg-blue-600 mt-1 mb-4 rounded" />
              <ul className="list-disc pl-5 text-gray-600 text-sm space-y-2">
                <li>BIS hallmarking and assaying centres — mandatory fire assay gold purity determination per BIS standards</li>
                <li>Gold and silver refineries — incoming doré and outgoing bullion purity certification by fire assay</li>
                <li>Mining and exploration laboratories — ore grade determination, resource estimation, and grade control</li>
                <li>Jewellery manufacturing — gold alloy composition verification and quality control for BIS compliance</li>
                <li>Smelters and precious metal processors — umpire assay and settlement testing between buyer and seller</li>
                <li>Electronic scrap recycling — fire assay gold and silver content determination in e-waste concentrates</li>
                <li>Platinum group metal (PGM) laboratories — nickel sulphide fire assay for platinum, palladium, and rhodium determination</li>
              </ul>
            </div>
          </div>

          {/* ── TECHNICAL SPECIFICATIONS ── */}
          <div className="bg-white rounded-2xl p-6 shadow-md">
            <h2 className="text-xl font-semibold text-gray-800">Technical Specifications</h2>
            <div className="w-12 h-1 bg-blue-600 mt-1 mb-4 rounded" />
            <p className="text-sm text-gray-500 mb-4">
              Standard specifications for our High Precision Assay Furnaces. Custom configurations available on request.
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
            <p className="text-xs text-gray-400 mt-3">* Specifications may vary by model. Contact us for datasheet.</p>
          </div>

          {/* ── COMPARISON TABLE ── */}
          <div className="bg-white rounded-2xl p-6 shadow-md">
            <h2 className="text-xl font-semibold text-gray-800">Assay Furnace vs Cupellation Furnace vs Combined Fire Assay Furnace — Which Do You Need?</h2>
            <div className="w-12 h-1 bg-blue-600 mt-1 mb-4 rounded" />
            <p className="text-sm text-gray-500 mb-4">
              Understanding the role of each furnace type helps you build the right fire assay laboratory setup for your gold testing requirements.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-800 text-white">
                    <th className="text-left px-4 py-2.5 rounded-tl-lg">Feature</th>
                    <th className="text-center px-4 py-2.5 bg-blue-600">Assay Furnace ✓</th>
                    <th className="text-center px-4 py-2.5">Cupellation Furnace</th>
                    <th className="text-center px-4 py-2.5 rounded-tr-lg">Combined Furnace</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-4 py-2.5 text-gray-700 font-medium border-b border-gray-100">{row.feature}</td>
                      <td className="px-4 py-2.5 text-center text-blue-700 font-semibold border-b border-gray-100 bg-blue-50">{row.assay}</td>
                      <td className="px-4 py-2.5 text-center text-gray-600 border-b border-gray-100">{row.cup}</td>
                      <td className="px-4 py-2.5 text-center text-gray-600 border-b border-gray-100">{row.combined}</td>
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
    Frequently Asked Questions — High Precision Assay Furnace
  </h2>
  <div className="w-12 h-1 bg-blue-600 mt-1 mb-4 rounded" />
  <p className="text-sm text-gray-500 mb-5">
    Common questions about high precision assay furnaces, the fire assay fusion process, and gold testing laboratory setup in India.
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
                { title: "Export-Grade Packing", desc: "Foam-padded wooden crates with refractory chamber protection and shock-absorbing material for safe furnace transit" },
                { title: "Pan-India Delivery", desc: "Shipping to all major cities via trusted freight partners with real-time tracking" },
                { title: "On-Site Installation", desc: "Engineer deputed for furnace installation, flux charge setup, temperature calibration, and operator training" },
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
            <h2 className="text-xl font-semibold text-gray-800">High Precision Assay Furnace in India</h2>
            <div className="w-12 h-1 bg-blue-600 mt-1 mb-4 rounded" />
            <p className="text-gray-600 text-sm leading-relaxed">
              Looking for a <strong>high precision assay furnace price in India</strong>? IndiaLaser offers the best
              fire assay furnaces for gold testing laboratories — from compact benchtop models for
              BIS hallmarking centres and jewellery assay labs to high-capacity industrial units for
              gold refineries and mining laboratories. Whether you need a{" "}
              <strong>laboratory assay furnace for fire assay gold testing</strong>, a{" "}
              <strong>high-capacity fusion assay furnace for mining and refinery labs</strong>, or a{" "}
              <strong>combined fire assay and cupellation furnace for compact hallmarking setups</strong>,
              we have the right solution for your gold testing equipment requirements. Our high precision
              assay furnaces are available in{" "}
              <strong>Delhi, Mumbai, Chennai, Bengaluru, Hyderabad, Pune, Ahmedabad, Surat, Jaipur, Kochi</strong>,
              and across India with fast delivery, genuine spare parts, and dedicated after-sales support.
              Compare our assay furnaces with cupellation furnaces and combined fire assay units, or{" "}
              <Link href="/contact-us" className="text-blue-600 font-semibold hover:underline">
                contact our team
              </Link>{" "}
              for a customized quotation and complete fire assay laboratory setup guidance today.
            </p>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-blue-900 to-blue-600 rounded-2xl p-6 text-center text-white shadow-md">
            <h2 className="text-xl font-bold mb-2">Ready to Buy a High Precision Assay Furnace?</h2>
            <p className="text-sm text-blue-100 mb-4">
              Get the best price, free demo, and expert guidance from IndiaLaser's gold testing equipment team.
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