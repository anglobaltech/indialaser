import Image from "next/image";
import Link from "next/link";
export const metadata = { title: "Cupellation Furnace Machine - Gold Testing Equipment in India", 
  description: "Discover our high-quality Cupellation Furnace Machine for precise gold testing. Ideal for laboratories, refineries, and hallmarking centers across India. Get accurate results with our reliable cupellation furnace solutions.",
};
export default function CupellationFurnacePage() {


  const machines = [
    {
      name: "Cupellation Furnace Machine",
      link: "/other-products/gold-testing-equiments/cupellation-furnace",
      image: "/other-products/CUPELLATION FURNACE.png",
      active: true,
    },
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
    { param: "Technology", value: "High-Temperature Muffle Furnace (Cupellation)" },
    { param: "Temperature Range", value: "Room Temperature – 1100°C" },
    { param: "Cupellation Temperature", value: "850°C – 1000°C (Adjustable)" },
    { param: "Temperature Accuracy", value: "±2°C (PID Controller)" },
    { param: "Chamber Capacity", value: "Up to 18 Cupels per Batch" },
    { param: "Heating Elements", value: "Silicon Carbide (SiC) Rods / Kanthal Wire" },
    { param: "Chamber Material", value: "High-Alumina Refractory Lining with MgO Cupel Tray" },
    { param: "Control System", value: "Programmable PID Digital Controller with Timer" },
    { param: "Heating Rate", value: "Adjustable up to 20°C/min" },
    { param: "Atmosphere Control", value: "Open Air / Ventilation Port (Oxidizing Atmosphere)" },
    { param: "Power Supply", value: "220V–440V / 50–60Hz (Single/Three Phase)" },
    { param: "Warranty", value: "1 Year (Extendable)" },
  ];

  const whyUs = [
    { title: "Pan-India Service Network", desc: "Dedicated engineers available across major Indian cities." },
    { title: "Free Installation & Training", desc: "On-site setup and cupellation process training included with every purchase." },
    { title: "Genuine Refractory & Heating Parts", desc: "High-grade MgO cupels, SiC heating elements, and certified spare parts." },
    { title: "Fast Delivery", desc: "Ready stock available; dispatch within 3–7 business days." },
    { title: "After-Sales Support", desc: "365-day support via call, WhatsApp, and remote diagnostics." },
  ];

  const faqs = [
    {
      q: "What is a Cupellation Furnace used for?",
      a: "A Cupellation Furnace is a specialized high-temperature muffle furnace used to separate and recover gold and silver from a lead button produced during the fire assay fusion stage. In the cupellation process, the lead button is placed on a porous magnesia (MgO) cupel inside the furnace at 850°C–1000°C. The furnace maintains an oxidizing atmosphere, causing the lead to oxidize into litharge (PbO), which is absorbed by the cupel, leaving behind a tiny pure precious metal bead — called the prill — containing only gold and silver. This prill is then weighed and parted to determine the exact gold and silver content of the original sample. Cupellation furnaces are essential in fire assay laboratories, gold refineries, BIS hallmarking centres, and mining assay labs.",
    },
    {
      q: "What is the difference between a Fusion Furnace and a Cupellation Furnace?",
      a: "A Fusion Furnace operates at higher temperatures (950°C–1200°C) and is used for the first stage of fire assay — melting the ore sample with lead oxide flux to collect all precious metals into a lead button. A Cupellation Furnace operates at a slightly lower and more precisely controlled temperature range (850°C–1000°C) and is used for the second stage — oxidizing the lead from the lead button in an open oxidizing atmosphere to leave behind only the gold-silver prill. Both are muffle furnaces but are optimized for different thermal and atmospheric conditions. Some combined fire assay furnaces can perform both stages in one unit.",
    },
    {
      q: "What materials can be processed in a Cupellation Furnace?",
      a: "Cupellation furnaces process lead buttons obtained from fire assay fusion of gold ore samples, mine concentrates, doré bars, bullion, jewellery scrap, electronic scrap gold concentrates, dental gold, and any precious metal alloy that has undergone the fire assay fusion stage. The process is specifically optimized for gold and silver recovery, with the resulting prill suitable for gravimetric weighing and acid parting to determine individual gold and silver content.",
    },
    {
      q: "What is the price of a Cupellation Furnace in India?",
      a: "The price of a Cupellation Furnace in India typically ranges from ₹1 Lakh to ₹8 Lakhs depending on chamber capacity (number of cupels), temperature rating, controller sophistication, heating element type, and brand. Small laboratory models for hallmarking and jewellery testing are available at the lower end, while high-capacity mining and refinery models command higher prices. Contact us for the latest pricing, live demos, and customized quotations.",
    },
    {
      q: "Is a Cupellation Furnace required for BIS hallmarking?",
      a: "Yes. BIS-approved Assaying and Hallmarking Centres that conduct fire assay testing as part of their purity verification process require a cupellation furnace as part of their laboratory setup. The fire assay method — which includes both fusion and cupellation stages — is recognized by BIS as a reference method for gold purity determination. Centres performing fire assay must have both a fusion muffle furnace and a cupellation furnace, or a combined fire assay furnace capable of both stages.",
    },
    {
      q: "Do you provide installation and training for Cupellation Furnaces?",
      a: "Yes, IndiaLaser provides free on-site installation and hands-on operator training with every cupellation furnace purchase. Our engineers guide your laboratory team through furnace commissioning, cupel tray loading, temperature profile setting, oxidizing atmosphere management, prill recovery procedures, and safe operating practices — ensuring your team can confidently conduct accurate fire assay cupellation from day one.",
    },
  ];

  const comparisonData = [
    { feature: "Stage in Fire Assay", cup: "Stage 2 — Lead Removal", fusion: "Stage 1 — Metal Collection", combined: "Stage 1 + 2 Combined" },
    { feature: "Operating Temperature", cup: "850°C – 1000°C", fusion: "950°C – 1200°C", combined: "850°C – 1200°C" },
    { feature: "Atmosphere Required", cup: "Oxidizing (Open Air)", fusion: "Reducing / Neutral", combined: "Switchable" },
    { feature: "Output", cup: "Gold-Silver Prill (Bead)", fusion: "Lead Button", combined: "Gold-Silver Prill" },
    { feature: "Cupel Required", cup: "Yes (MgO Cupel)", fusion: "No (Fireclay Crucible)", combined: "Yes (Both)" },
    { feature: "Best For", cup: "Dedicated cupellation labs", fusion: "High-volume fusion only", combined: "Compact lab setups" },
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
                <span className="text-blue-600">Cupellation Furnace Machine</span>
              </p>
            </nav>
            <h1 className="text-2xl font-bold text-gray-900 mt-1">
              Cupellation Furnace Machine
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              Precision cupellation furnace for gold and silver prill recovery in fire assay — essential gold testing equipment for hallmarking centres, refineries, and mining laboratories
            </p>
          </div>

          {/* HERO IMAGE */}
          <div className="flex justify-center items-center w-full">
            <Image
              src="/other-products/CUPELLATION FURNACE.png"
              alt="Cupellation Furnace Machine by IndiaLaser"
              width={600}
              height={400}
              className="object-contain"
            />
          </div>

          {/* MAIN CONTENT CARD */}
          <div className="bg-white rounded-2xl p-6 shadow-md space-y-8">

            {/* ABOUT */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Cupellation Furnace Machine</h2>
              <div className="w-10 h-0.5 bg-blue-600 mt-1 mb-4 rounded" />
              <p className="text-gray-600 text-sm leading-relaxed">
                Cupellation Furnace Machines are precision high-temperature muffle furnaces purpose-built
                for the cupellation stage of the fire assay process — the critical step where lead is
                oxidized and absorbed from the lead button to isolate a pure gold-silver prill for
                accurate gravimetric weighing. The cupellation furnace maintains a tightly controlled
                oxidizing atmosphere at temperatures between 850°C and 1000°C, enabling complete and
                efficient lead removal from the assay bead without loss of precious metal.

                As an essential piece of gold testing equipment in any fire assay laboratory, the
                cupellation furnace works in tandem with the fusion muffle furnace to deliver the
                complete fire assay workflow — the internationally recognized gold standard for
                precious metal determination. The process requires no reagents during cupellation
                itself, relying entirely on controlled oxidation within the furnace chamber to
                achieve separation of base metals from gold and silver.

                Cupellation furnaces are indispensable in BIS hallmarking and assaying laboratories,
                gold and silver refineries, mining assay labs, smelters, jewellery manufacturing
                quality control, and electronic scrap precious metal recovery operations. With
                programmable PID temperature controllers, multi-cupel tray capacity, and robust
                refractory chamber construction, these furnaces deliver the precision and
                repeatability required for laboratory-grade precious metal analysis.

                Cupellation Furnace Machines from IndiaLaser are designed for reliable daily
                operation in demanding assay environments, combining accurate temperature control,
                long heating element life, and easy maintenance into a compact and efficient
                laboratory furnace.
              </p>
            </div>

            {/* IMPORTED PRODUCTS */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Imported & Domestic Products</h2>
              <div className="w-12 h-1 bg-blue-600 mt-1 mb-4 rounded" />
              <p className="text-gray-600 text-sm leading-relaxed">
                We supply both imported and domestically manufactured cupellation furnaces to meet
                the requirements of every type of gold testing laboratory in India. Our imported
                models from globally recognized laboratory furnace manufacturers offer advanced
                PID controllers, superior SiC heating elements, and large multi-cupel chamber
                capacities for high-throughput assay operations. Our domestic models provide
                excellent value for smaller hallmarking centres and jewellery testing labs
                that require reliable cupellation performance at an accessible price point.
                All models are supplied with certified magnesia cupels, spare heating elements,
                and complete documentation for BIS assaying laboratory compliance.
              </p>
            </div>

            {/* FEATURES */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Features of Cupellation Furnace Machine</h2>
              <div className="w-12 h-1 bg-blue-600 mt-1 mb-4 rounded" />
              <ul className="list-disc pl-5 text-gray-600 text-sm space-y-2">
                <li>Precise temperature control at 850°C–1000°C optimized for lead oxidation and prill recovery</li>
                <li>PID programmable controller with ±2°C accuracy for consistent cupellation results</li>
                <li>High-capacity MgO cupel tray accommodating up to 18 cupels per batch</li>
                <li>Open oxidizing atmosphere chamber design for efficient litharge absorption into cupels</li>
                <li>High-alumina refractory brick lining with MgO cupel tray for low contamination</li>
                <li>Silicon carbide (SiC) heating elements for long service life and uniform heat distribution</li>
                <li>Programmable timer for automatic soak period control at cupellation temperature</li>
                <li>Ventilation port compatibility for safe fume extraction in enclosed laboratories</li>
              </ul>
            </div>

            {/* ADVANTAGES */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Advantages</h2>
              <div className="w-12 h-1 bg-blue-600 mt-1 mb-4 rounded" />
              <ul className="list-disc pl-5 text-gray-600 text-sm space-y-2">
                <li>Delivers a clean, well-formed gold-silver prill with minimal precious metal loss during cupellation</li>
                <li>Precise oxidizing atmosphere control ensures complete lead removal without over-cupellation</li>
                <li>Multi-cupel batch capacity maximizes laboratory throughput for high-volume assay operations</li>
                <li>Consistent temperature uniformity across the chamber eliminates between-position variation in results</li>
                <li>Compatible with all standard magnesia (MgO) cupel sizes used in fire assay laboratories</li>
                <li>Long heating element lifespan reduces consumable costs and unplanned downtime in daily operations</li>
              </ul>
            </div>

            {/* WORKING */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800">How a Cupellation Furnace Works</h2>
              <div className="w-12 h-1 bg-blue-600 mt-1 mb-4 rounded" />
              <p className="text-gray-600 text-sm leading-relaxed">
                After the fire assay fusion stage produces a lead button containing all the gold
                and silver from the original sample, this lead button is placed on a pre-heated
                porous magnesia (MgO) cupel inside the cupellation furnace. The furnace is
                maintained at a carefully controlled temperature between 850°C and 1000°C in
                an open oxidizing atmosphere. At this temperature, the surface of the molten
                lead button oxidizes continuously, forming lead oxide (litharge, PbO). The
                porous cupel absorbs the litharge as it forms, progressively removing the lead
                from the bead. As the lead is absorbed, the bead shrinks and brightens —
                a phenomenon called "blick" or the brightening flash — which signals that
                cupellation is complete and only the gold-silver alloy prill remains. The
                furnace is then opened and the cupel with the prill is removed using tongs
                and allowed to cool. The prill is weighed on a precision analytical balance,
                then subjected to acid parting in dilute nitric acid to dissolve the silver,
                leaving pure gold for final weighing. The difference between the prill weight
                and the gold weight gives the silver content. Both values are calculated as
                a percentage of the original sample weight to report the gold and silver assay result.
              </p>
            </div>

            {/* TYPES */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Types of Cupellation Furnaces</h2>
              <div className="w-12 h-1 bg-blue-600 mt-1 mb-4 rounded" />
              <ul className="list-disc pl-5 text-gray-600 text-sm space-y-2">
                <li><strong>Standard Laboratory Cupellation Furnace</strong> — Benchtop muffle furnace for hallmarking centres, jewellery labs, and small assay operations (6–12 cupel capacity)</li>
                <li><strong>High-Capacity Cupellation Furnace</strong> — Large-chamber model for mining assay labs and refineries processing high daily sample volumes (12–18+ cupels)</li>
                <li><strong>Combined Fire Assay Furnace</strong> — Dual-function unit capable of both fusion and cupellation stages for compact laboratory setups</li>
                <li><strong>Programmable Ramp Cupellation Furnace</strong> — Advanced PLC-controlled model with custom thermal profiles and automatic timer for unattended cupellation</li>
                <li><strong>Three-Phase Industrial Cupellation Furnace</strong> — Heavy-duty three-phase powered model for large refineries and smelters requiring rapid heat-up and high thermal stability</li>
                <li><strong>Economy Cupellation Furnace</strong> — Cost-effective single-phase model for budget-conscious hallmarking laboratories and jewellery testing units</li>
              </ul>
            </div>

            {/* APPLICATIONS */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Applications</h2>
              <div className="w-12 h-1 bg-blue-600 mt-1 mb-4 rounded" />
              <ul className="list-disc pl-5 text-gray-600 text-sm space-y-2">
                <li>BIS hallmarking and assaying centres — mandatory gold purity determination by fire assay method</li>
                <li>Gold and silver refineries — incoming doré and outgoing bullion purity certification</li>
                <li>Mining and exploration laboratories — ore grade determination and resource estimation</li>
                <li>Jewellery manufacturing — gold alloy composition verification and quality control</li>
                <li>Smelters and precious metal processors — settlement testing between buyer and seller</li>
                <li>Electronic scrap recycling — gold and silver content determination in e-waste concentrates</li>
                <li>Pawn shops and second-hand gold dealers — fire assay verification for high-value purchases</li>
              </ul>
            </div>
          </div>

          {/* ── TECHNICAL SPECIFICATIONS ── */}
          <div className="bg-white rounded-2xl p-6 shadow-md">
            <h2 className="text-xl font-semibold text-gray-800">Technical Specifications</h2>
            <div className="w-12 h-1 bg-blue-600 mt-1 mb-4 rounded" />
            <p className="text-sm text-gray-500 mb-4">
              Standard specifications for our Cupellation Furnace Machines. Custom configurations available on request.
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
            <h2 className="text-xl font-semibold text-gray-800">Cupellation Furnace vs Fusion Furnace vs Combined Fire Assay Furnace — Which Do You Need?</h2>
            <div className="w-12 h-1 bg-blue-600 mt-1 mb-4 rounded" />
            <p className="text-sm text-gray-500 mb-4">
              Understanding the role of each furnace type helps you build the right fire assay laboratory setup for your gold testing requirements.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-800 text-white">
                    <th className="text-left px-4 py-2.5 rounded-tl-lg">Feature</th>
                    <th className="text-center px-4 py-2.5 bg-blue-600">Cupellation Furnace ✓</th>
                    <th className="text-center px-4 py-2.5">Fusion Furnace</th>
                    <th className="text-center px-4 py-2.5 rounded-tr-lg">Combined Furnace</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-4 py-2.5 text-gray-700 font-medium border-b border-gray-100">{row.feature}</td>
                      <td className="px-4 py-2.5 text-center text-blue-700 font-semibold border-b border-gray-100 bg-blue-50">{row.cup}</td>
                      <td className="px-4 py-2.5 text-center text-gray-600 border-b border-gray-100">{row.fusion}</td>
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
    Frequently Asked Questions — Cupellation Furnace Machine
  </h2>
  <div className="w-12 h-1 bg-blue-600 mt-1 mb-4 rounded" />
  <p className="text-sm text-gray-500 mb-5">
    Common questions about cupellation furnaces, the cupellation process, and gold testing laboratory setup in India.
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
                { title: "Export-Grade Packing", desc: "Foam-padded wooden crates with refractory protection and shock-absorbing material for safe furnace transit" },
                { title: "Pan-India Delivery", desc: "Shipping to all major cities via trusted freight partners" },
                { title: "On-Site Installation", desc: "Engineer deputed for furnace installation, cupel tray setup, and operator training" },
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
            <h2 className="text-xl font-semibold text-gray-800">Cupellation Furnace Machine in India</h2>
            <div className="w-12 h-1 bg-blue-600 mt-1 mb-4 rounded" />
            <p className="text-gray-600 text-sm leading-relaxed">
              Looking for a <strong>cupellation furnace price in India</strong>? IndiaLaser offers the best
              cupellation furnaces for gold testing laboratories — from compact benchtop models for
              BIS hallmarking centres and jewellery assay labs to high-capacity industrial units for
              gold refineries and mining laboratories. Whether you need a{" "}
              <strong>laboratory cupellation furnace for fire assay gold testing</strong>, a{" "}
              <strong>high-capacity cupellation muffle furnace for mining assay labs</strong>, or a{" "}
              <strong>combined fire assay and cupellation furnace for compact hallmarking setups</strong>,
              we have the right solution for your gold testing equipment requirements. Our cupellation
              furnaces are available in{" "}
              <strong>Delhi, Mumbai, Chennai, Bengaluru, Hyderabad, Pune, Ahmedabad, Surat, Jaipur, Kochi</strong>,
              and across India with fast delivery, genuine spare parts, and dedicated after-sales support.
              Compare our cupellation furnaces with fusion furnaces and combined fire assay units, or{" "}
              <Link href="/contact-us" className="text-blue-600 font-semibold hover:underline">
                contact our team
              </Link>{" "}
              for a customized quotation and laboratory setup guidance today.
            </p>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-blue-900 to-blue-600 rounded-2xl p-6 text-center text-white shadow-md">
            <h2 className="text-xl font-bold mb-2">Ready to Buy a Cupellation Furnace Machine?</h2>
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