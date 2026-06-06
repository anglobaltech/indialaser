import Image from "next/image";
import Link from "next/link";


export const metadata = {   title: "Fire Assay Furnace Machine - Gold Testing Equipment in India",                      
  description: "Discover our high-quality Fire Assay Furnace Machine for precise gold testing. Ideal for laboratories, refineries, and hallmarking centers across India. Get accurate results with our reliable assay furnace solutions.",    
};


  


export default function FireAssayFurnacePage() {
 

  const machines = [
    {
      name: "Fire Assay Furnace Machine",
      link: "/other-products/gold-testing-equiments/fire-assay-furnace",
      image: "/laser-machines/assay-furnace.png",
      active: true,
    },
     {
      name: "XRF Gold Testing Machine",
      link: "/other-products/gold-testing-equiments/xrf-machine",
      image: "/laser-machines/xrf-gold file.png",
      active: true,
    },
      
  ];

  const specs = [
    { param: "Technology", value: "High-Temperature Muffle Furnace (Fire Assay)" },
    { param: "Temperature Range", value: "Room Temperature – 1200°C" },
    { param: "Temperature Accuracy", value: "±1°C (PID Controller)" },
    { param: "Chamber Capacity", value: "Up to 12 Cupels / Crucibles per Batch" },
    { param: "Heating Elements", value: "High-Grade Silicon Carbide / Kanthal Wires" },
    { param: "Chamber Material", value: "High-Alumina Refractory Brick Lining" },
    { param: "Control System", value: "Programmable PID Digital Controller" },
    { param: "Heating Rate", value: "Adjustable up to 30°C/min" },
    { param: "Display", value: "Digital LED / LCD Temperature Display" },
    { param: "Data Output", value: "USB / RS-232 / Thermocouple Interface" },
    { param: "Power Supply", value: "220V–440V / 50–60Hz (Single/Three Phase)" },
    { param: "Warranty", value: "1 Year (Extendable)" },
  ];

  const whyUs = [
    { title: "Pan-India Service Network", desc: "Dedicated engineers available across major Indian cities." },
    { title: "Free Installation & Training", desc: "On-site setup and operator training included with purchase." },
    { title: "Genuine Refractory & Heating Parts", desc: "High-grade silicon carbide elements and certified cupels with verified authenticity." },
    { title: "Fast Delivery", desc: "Ready stock available; dispatch within 3–7 business days." },
    { title: "After-Sales Support", desc: "365-day support via call, WhatsApp, and remote diagnostics." },
  ];

  const faqs = [
    {
      q: "What is a Fire Assay Furnace used for?",
      a: "A Fire Assay Furnace is a high-temperature muffle furnace used to determine the precise precious metal content — particularly gold and silver — in ore samples, concentrates, doré bars, and refined metals. The fire assay process involves fusion, cupellation, and parting to isolate and weigh precious metals with extremely high accuracy. It is the gold standard method used in mining, refineries, hallmarking laboratories, and geological survey institutions worldwide.",
    },
    {
      q: "What materials can be tested using Fire Assay?",
      a: "Fire Assay is primarily used for gold and silver determination in geological ore samples, mine concentrates, doré bars, bullion, jewellery alloys, electronic scrap, smelter outputs, and recycled precious metals. The process can also be adapted for platinum group metals (PGMs) including platinum and palladium with appropriate flux compositions.",
    },
    {
      q: "What is the difference between Fire Assay and XRF testing?",
      a: "Fire Assay is a destructive, wet-chemistry method that physically isolates and weighs the precious metal, offering extremely high accuracy (±0.01%) for gold and silver — especially at low concentrations in ores. XRF is non-destructive and fast, ideal for finished jewellery and alloy testing. Fire Assay is preferred where absolute accuracy is required at trace levels, such as in mine exploration and refinery settlements, while XRF is preferred for routine purity checks on fabricated metal items.",
    },
    {
      q: "What is the price of a Fire Assay Furnace in India?",
      a: "The price of a Fire Assay Furnace in India typically ranges from ₹1.5 Lakhs to ₹10 Lakhs depending on chamber size, temperature rating, capacity (number of cupels), automation level, and brand. Contact us for the latest pricing, live demos, and customized quotations.",
    },
    {
      q: "Is Fire Assay accepted for BIS and international gold certification?",
      a: "Yes. Fire Assay is recognized as the definitive reference method for precious metal determination by international standards bodies including ISO, ASTM, and BS. It is accepted by BIS-approved Assaying and Hallmarking Centres, mining regulatory authorities, and major commodity exchanges globally. Many hallmarking labs maintain fire assay capability for dispute resolution and reference verification alongside routine XRF testing.",
    },
    {
      q: "Do you provide installation and training for Fire Assay Furnaces?",
      a: "Yes, IndiaLaser provides free on-site installation and operator training with every fire assay furnace purchase. Our engineers guide your team through furnace commissioning, cupellation procedures, temperature profiling, flux preparation, and safe operating practices so your laboratory can achieve reliable results from day one.",
    },
  ];

  const comparisonData = [
    { feature: "Process Type", fire: "Destructive (Sample consumed)", xrf: "Non-destructive", wet: "Destructive" },
    { feature: "Test Time", fire: "4–8 hours", xrf: "2–60 seconds", wet: "2–4 hours" },
    { feature: "Accuracy", fire: "±0.01% (Highest)", xrf: "±0.05%", wet: "±0.1–0.5%" },
    { feature: "Detection Limit", fire: "ppb level (trace gold)", xrf: "ppm level", wet: "ppm level" },
    { feature: "Multi-Element", fire: "Au, Ag, PGMs", xrf: "Yes (40+ elements)", wet: "Limited" },
    { feature: "Skill Required", fire: "High (Expert Assayer)", xrf: "Low (Automated)", wet: "Moderate–High" },
  ];

  return (
    <div className="bg-gray-100 py-10 px-4 min-h-screen overflow-x-clip w-full">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 w-full items-start">

        {/* ── LEFT SIDEBAR ── */}
        <div className="space-y-6 md:sticky md:top-24 self-start">
          <div className="bg-white rounded-2xl p-5 shadow-md">
            <h2 className="text-lg font-semibold text-gray-800 mb-5">
              Fire Assay furnace machine
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
            <p className="text-xs text-gray-500">Talk to our fire assay experts for pricing, demo, and customization.</p>
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
                <span className="text-blue-600">Fire Assay Furnace Machine</span>
              </p>
            </nav>
            <h1 className="text-2xl font-bold text-gray-900 mt-1">
              Fire Assay Furnace Machine
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              High-temperature muffle furnace for precise gold & silver fire assay — trusted by mines, refineries, and hallmarking laboratories across India
            </p>
          </div>

          {/* HERO IMAGE */}
          <div className="flex justify-center items-center w-full">
            <Image
              src="/laser-machines/assay-furnace.png"
              alt="Fire Assay Furnace Machine by IndiaLaser"
              width={600}
              height={400}
              className="object-contain"
            />
          </div>

          {/* MAIN CONTENT CARD */}
          <div className="bg-white rounded-2xl p-6 shadow-md space-y-8">

            {/* ABOUT */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Fire Assay Furnace Machine</h2>
              <div className="w-10 h-0.5 bg-blue-600 mt-1 mb-4 rounded" />
              <p className="text-gray-600 text-sm leading-relaxed">
                Fire Assay Furnace Machines are specialized high-temperature muffle furnaces designed
                for the most accurate and definitive precious metal determination available in
                metallurgical science. Using the centuries-proven fire assay process — encompassing
                fusion, cupellation, and parting — these furnaces enable laboratories to precisely
                quantify gold, silver, and platinum group metals (PGMs) in ore samples, mine
                concentrates, doré bars, bullion, and recycled metals.

                Fire assay furnaces deliver unmatched accuracy at trace concentrations, making them
                the undisputed reference method for mine exploration, refinery settlement, and
                arbitration testing. The process involves mixing the sample with lead oxide flux,
                fusing at temperatures up to 1000°C, followed by cupellation at 950°C–1000°C to
                absorb base metals and isolate the precious metal bead for accurate gravimetric
                measurement.

                These furnaces are essential equipment in mining assay laboratories, gold and silver
                refineries, BIS hallmarking centres, geological survey institutions, smelters,
                and precious metal recycling operations. With programmable temperature controllers,
                even heat distribution, and rugged refractory chamber construction, fire assay
                furnaces ensure consistent, reproducible results batch after batch.

                Fire Assay Furnace Machines are widely trusted in industries including gold mining,
                silver refining, platinum group metal processing, jewellery manufacturing QC,
                e-waste precious metal recovery, and regulatory compliance testing where absolute
                accuracy is non-negotiable.
              </p>
            </div>

            {/* IMPORTED PRODUCTS */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Imported & Domestic Products</h2>
              <div className="w-12 h-1 bg-blue-600 mt-1 mb-4 rounded" />
              <p className="text-gray-600 text-sm leading-relaxed">
                We offer a wide range of fire assay furnaces — both imported units from globally
                recognized laboratory furnace manufacturers and high-quality domestically
                engineered models. These systems meet international laboratory standards
                and are purpose-built for the demanding thermal cycles of fusion and cupellation
                processes. Our furnaces feature superior refractory insulation, uniform heat
                distribution, and long-life heating elements, making them the preferred choice
                for mining assay labs, refineries, and hallmarking centres across India seeking
                reliable and cost-effective precious metal determination equipment.
              </p>
            </div>

            {/* FEATURES */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Features of Fire Assay Furnace Machine</h2>
              <div className="w-12 h-1 bg-blue-600 mt-1 mb-4 rounded" />
              <ul className="list-disc pl-5 text-gray-600 text-sm space-y-2">
                <li>High-temperature capability up to 1200°C for complete fusion and cupellation of all ore types</li>
                <li>PID programmable temperature controller with ±1°C accuracy for consistent, repeatable results</li>
                <li>High-alumina refractory brick lining for excellent thermal insulation and long chamber life</li>
                <li>Multi-cupel capacity — process up to 12 cupels or crucibles simultaneously per batch</li>
                <li>Silicon carbide or Kanthal heating elements for long service life and even heat distribution</li>
                <li>Programmable heating ramp and soak profiles for automated fusion and cupellation cycles</li>
                <li>Ventilation port and fume extraction compatibility for safe laboratory operation</li>
                <li>Rugged steel outer casing with heat-insulated handle and door for operator safety</li>
              </ul>
            </div>

            {/* ADVANTAGES */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Advantages</h2>
              <div className="w-12 h-1 bg-blue-600 mt-1 mb-4 rounded" />
              <ul className="list-disc pl-5 text-gray-600 text-sm space-y-2">
                <li>Highest accuracy of ±0.01% for gold and silver — the definitive method for mine and refinery settlement</li>
                <li>Detects trace precious metal concentrations down to parts-per-billion (ppb) levels in ore</li>
                <li>Internationally accepted reference method — recognized by ISO, ASTM, BS, and BIS standards</li>
                <li>Handles complex and refractory ore types that other testing methods cannot process accurately</li>
                <li>Batch processing capability increases laboratory throughput for high-volume assay operations</li>
                <li>No matrix effect limitations — fire assay accuracy is independent of sample mineralogy</li>
              </ul>
            </div>

            {/* WORKING */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800">How a Fire Assay Furnace Works</h2>
              <div className="w-12 h-1 bg-blue-600 mt-1 mb-4 rounded" />
              <p className="text-gray-600 text-sm leading-relaxed">
                The fire assay process begins with preparing the sample by mixing it with a carefully
                weighed flux comprising lead oxide (litharge), sodium carbonate, silica, and borax.
                This mixture is placed in a fireclay crucible and charged into the preheated furnace
                at 950°C–1050°C. During fusion, the lead oxide is reduced to metallic lead, which
                collects all gold and silver from the sample into a lead button. The slag is poured
                off and discarded. The lead button is then placed on a porous magnesia cupel inside
                the furnace at approximately 950°C for cupellation — the cupel absorbs the lead oxide
                as it oxidizes, leaving behind a tiny bead of pure gold and silver alloy (the
                prill). The prill is weighed, then parted in dilute nitric acid to dissolve the
                silver, leaving the pure gold for final gravimetric weighing. The entire process
                yields a definitive, legally accepted result for the precious metal content of
                the original sample.
              </p>
            </div>

            {/* TYPES */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Types of Fire Assay Furnaces</h2>
              <div className="w-12 h-1 bg-blue-600 mt-1 mb-4 rounded" />
              <ul className="list-disc pl-5 text-gray-600 text-sm space-y-2">
                <li><strong>Fusion Furnace</strong> — High-temperature unit (up to 1200°C) for the initial flux fusion and lead collection stage</li>
                <li><strong>Cupellation Furnace</strong> — Precision-controlled furnace (900°C–1050°C) for the lead oxidation and precious metal bead recovery stage</li>
                <li><strong>Combined Fusion & Cupellation Furnace</strong> — Dual-function furnace capable of both stages in one unit for compact laboratory setups</li>
                <li><strong>Multi-Chamber Furnace</strong> — High-capacity unit for large mining labs processing hundreds of samples daily</li>
                <li><strong>Programmable Ramp Furnace</strong> — Advanced PLC-controlled models with custom thermal profiles for automated assay cycles</li>
                <li><strong>Portable Assay Furnace</strong> — Compact, lower-capacity units for remote or field assay laboratories at mine sites</li>
              </ul>
            </div>

            {/* APPLICATIONS */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Applications</h2>
              <div className="w-12 h-1 bg-blue-600 mt-1 mb-4 rounded" />
              <ul className="list-disc pl-5 text-gray-600 text-sm space-y-2">
                <li>Gold and silver mining — ore grade determination and mine resource estimation</li>
                <li>Gold refineries — incoming doré bar and outgoing bullion certification</li>
                <li>BIS hallmarking laboratories — reference method for dispute resolution and audit testing</li>
                <li>Smelters and metal processors — precious metal accounting and settlement between parties</li>
                <li>Electronic scrap recycling — gold and silver content determination in e-waste concentrates</li>
                <li>Jewellery manufacturing — alloy composition verification and quality control at production stage</li>
                <li>Geological survey institutions — precious metal content mapping in rock and soil samples</li>
              </ul>
            </div>
          </div>

          {/* ── TECHNICAL SPECIFICATIONS ── */}
          <div className="bg-white rounded-2xl p-6 shadow-md">
            <h2 className="text-xl font-semibold text-gray-800">Technical Specifications</h2>
            <div className="w-12 h-1 bg-blue-600 mt-1 mb-4 rounded" />
            <p className="text-sm text-gray-500 mb-4">
              Standard specifications for our Fire Assay Furnace Machines. Custom configurations available on request.
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

          {/* ── TESTING METHOD COMPARISON ── */}
          <div className="bg-white rounded-2xl p-6 shadow-md">
            <h2 className="text-xl font-semibold text-gray-800">Fire Assay vs XRF vs Wet Chemistry — Which is Right for You?</h2>
            <div className="w-12 h-1 bg-blue-600 mt-1 mb-4 rounded" />
            <p className="text-sm text-gray-500 mb-4">
              Understanding the differences helps you choose the best precious metal testing method for your laboratory requirements.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-800 text-white">
                    <th className="text-left px-4 py-2.5 rounded-tl-lg">Feature</th>
                    <th className="text-center px-4 py-2.5 bg-blue-600">Fire Assay ✓</th>
                    <th className="text-center px-4 py-2.5">XRF Testing</th>
                    <th className="text-center px-4 py-2.5 rounded-tr-lg">Wet Chemistry</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-4 py-2.5 text-gray-700 font-medium border-b border-gray-100">{row.feature}</td>
                      <td className="px-4 py-2.5 text-center text-blue-700 font-semibold border-b border-gray-100 bg-blue-50">{row.fire}</td>
                      <td className="px-4 py-2.5 text-center text-gray-600 border-b border-gray-100">{row.xrf}</td>
                      <td className="px-4 py-2.5 text-center text-gray-600 border-b border-gray-100">{row.wet}</td>
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
    Frequently Asked Questions — Fire Assay Furnace Machine
  </h2>
  <div className="w-12 h-1 bg-blue-600 mt-1 mb-4 rounded" />
  <p className="text-sm text-gray-500 mb-5">
    Common questions about fire assay furnaces, the fire assay process, pricing, and laboratory setup in India.
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
                { title: "Export-Grade Packing", desc: "Foam-padded wooden crates with anti-static and shock-absorbing material for safe furnace transit" },
                { title: "Pan-India Delivery", desc: "Shipping to all major cities via trusted freight partners" },
                { title: "On-Site Installation", desc: "Engineer deputed for furnace installation, commissioning, and operator training" },
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
            <h2 className="text-xl font-semibold text-gray-800">Fire Assay Furnace Machine in India</h2>
            <div className="w-12 h-1 bg-blue-600 mt-1 mb-4 rounded" />
            <p className="text-gray-600 text-sm leading-relaxed">
              Looking for a <strong>fire assay furnace price in India</strong>? IndiaLaser offers the best
              fire assay furnaces across all capacity levels — benchtop laboratory models, mid-range fusion and
              cupellation units, and high-capacity industrial assay furnaces — suitable for small assay labs
              to large-scale mining and refinery operations. Whether you need a{" "}
              <strong>fire assay muffle furnace for gold ore testing</strong>, a{" "}
              <strong>cupellation furnace for silver and gold recovery</strong>, or a{" "}
              <strong>high-capacity fire assay furnace for refinery settlement testing</strong>, we have the
              right solution. Our machines are available in{" "}
              <strong>Delhi, Mumbai, Chennai, Bengaluru, Hyderabad, Pune, Ahmedabad, Surat, Jaipur, Kochi</strong>,
              and all across India with quick delivery and dedicated after-sales support.
              Compare our fire assay furnaces with XRF gold analyzers and wet chemistry alternatives, or{" "}
              <Link href="/contact-us" className="text-blue-600 font-semibold hover:underline">
                contact our team
              </Link>{" "}
              for a customized quotation today.
            </p>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-blue-900 to-blue-600 rounded-2xl p-6 text-center text-white shadow-md">
            <h2 className="text-xl font-bold mb-2">Ready to Buy a Fire Assay Furnace Machine?</h2>
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