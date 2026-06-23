import Image from "next/image";
import Link from "next/link";
export const metadata = {
  title: "Laser Cutting Machine - High-Precision CO2 & Fiber Laser Cutters in India",
  description: "Explore our advanced Laser Cutting Machines featuring CO2 and Fiber laser technology for high-speed, precise cutting of metals, acrylic, wood, and industrial materials. Ideal for sheet metal fabrication, signage, automotive parts, and architectural applications across India. Get world-class cutting solutions with IndiaLaser.",
};
export default function LaserCuttingPage() {

 const machines = [
    {
      name: "Fiber Laser Marking Machine",
      link: "/laser-machines/laser-marking-machine/fiber-laser-marking-machine",
      image: "/laser-machines/fiber-laser-machine.webp",
    },
    {
      name: "CO2 Laser Marking Machine",
      link: "/laser-machines/laser-marking-machine/co2-laser-marking-machine",
      image: "/laser-machines/co2-laser-marking.webp",
    },
    {
      name: "UV Laser Marking Machine",
      link: "/laser-machines/laser-marking-machine/uv-laser-marking-machine",
      image: "/laser-machines/uv-marking-machine.webp",
    },
    {
      name: "Laser Soldering Machine",
      link: "/laser-machines/laser-soldering-machine",
      image: "/laser-machines/laser-soldering-machine.webp",
    },
    {
      name: "Laser Cutting Machine",
      link: "/laser-machines/laser-cutting-machine",
      image: "/laser-machines/laser-cutter-machine.webp",
      active: true,
    },
  ];

  const specs = [
    { param: "Laser Source", value: "CO2 / Fiber / Diode" },
    { param: "Wavelength", value: "10.6 µm (CO2) / 1064 nm (Fiber)" },
    { param: "Laser Power", value: "60W / 100W / 150W / 500W / 1000W / 2000W" },
    { param: "Cutting Area", value: "300×500 mm to 1500×3000 mm (Customizable)" },
    { param: "Max Cutting Speed", value: "Up to 60,000 mm/min" },
    { param: "Positioning Accuracy", value: "±0.03 mm" },
    { param: "Repeat Accuracy", value: "±0.02 mm" },
    { param: "Max Cutting Thickness (Metal)", value: "Up to 25 mm (Fiber, varies by power)" },
    { param: "Max Cutting Thickness (Non-Metal)", value: "Up to 50 mm (CO2, varies by material)" },
    { param: "Drive System", value: "Servo Motor + Linear Guide Rail" },
    { param: "Cooling Method", value: "Water Chiller (Industrial Grade)" },
    { param: "Software", value: "LightBurn / RD Works / Proprietary CAD/CAM" },
    { param: "Power Supply", value: "220V / 380V (Three Phase, varies by model)" },
    { param: "Warranty", value: "1 Year (Extendable)" },
  ];

  const whyUs = [
    { title: "Pan-India Service Network", desc: "Dedicated engineers available across major Indian cities for rapid on-site support." },
    { title: "Free Installation & Training", desc: "On-site machine setup and operator training included with every purchase." },
    { title: "Genuine Imported Components", desc: "Premium laser sources, optics, and motion systems from verified global suppliers." },
    { title: "Fast Delivery", desc: "Ready stock available; dispatch within 3–7 business days across India." },
    { title: "After-Sales Support", desc: "365-day support via call, WhatsApp, video call, and remote diagnostics." },
  ];

  const faqs = [
    {
      q: "What is a Laser Cutting Machine used for?",
      a: "It uses a high-powered, focused laser beam to cut, engrave, or etch metals, non-metals, and composites with extreme precision. It is widely used in sheet metal fabrication, signage, automotive components, and packaging.",
    },
    {
      q: "What is the difference between CO2 and Fiber Laser Cutting Machines?",
      a: "CO2 lasers (10.6 µm wavelength) excel at cutting non-metals like wood, acrylic, leather, and fabrics. Fiber lasers (1064 nm wavelength) are engineered for cutting metals like steel, aluminium, and brass at high speeds with lower operating costs.",
    },
    {
      q: "What materials can a Laser Cutting Machine cut?",
      a: "CO2 systems cut organic materials including wood, MDF, acrylic, plastics, fabrics, and leather. Fiber systems cut mild steel, stainless steel, carbon steel, aluminium, copper, and brass. Thickness limits depend entirely on the laser's wattage.",
    },
    {
      q: "What is the price of a Laser Cutting Machine in India?",
      a: "Prices range from ₹1.5 Lakhs for entry-level non-metal CO2 cutters up to ₹80 Lakhs or more for industrial, high-power fiber laser systems. The cost depends on power output, bed size, and automation features. Contact IndiaLaser for a custom quote.",
    },
    {
      q: "How thick a metal sheet can a fiber laser cutting machine cut?",
      a: "Capacity scales with power: 500W cuts mild steel up to 6 mm; 1000W handles 10–12 mm; 2000W cuts 16–20 mm; and 3000W+ systems cut 25 mm or more. Highly reflective metals like copper and aluminium require higher power thresholds.",
    },
    {
      q: "Do you provide installation and training for laser cutting machines?",
      a: "Yes, IndiaLaser provides free on-site machine installation, parameter calibration, and comprehensive operator training. Our engineers ensure your team can handle nested software files, system operation, and basic maintenance independently.",
    },
  ];
  const comparisonData = [
    { feature: "Process Type", laser: "Non-contact thermal", plasma: "Contact arc", waterjet: "Abrasive water stream" },
    { feature: "Cut Edge Quality", laser: "Excellent (smooth, clean)", plasma: "Moderate (rough edges)", waterjet: "Good (no heat zone)" },
    { feature: "Cutting Precision", laser: "Very High (±0.03 mm)", plasma: "Moderate (±0.5 mm)", waterjet: "High (±0.1 mm)" },
    { feature: "Heat-Affected Zone", laser: "Minimal", plasma: "Large", waterjet: "None" },
    { feature: "Cutting Speed", laser: "Very Fast", plasma: "Fast", waterjet: "Slow" },
    { feature: "Material Range", laser: "Metal + Non-Metal", plasma: "Mainly Metals", waterjet: "Metal + Non-Metal" },
    { feature: "Operating Cost", laser: "Low (Fiber) / Moderate (CO2)", plasma: "Low", waterjet: "High (abrasive)" },
    { feature: "Automation", laser: "Fully Automatable", plasma: "Semi/Full Auto", waterjet: "Semi/Full Auto" },
  ];

  return (
    <div className="bg-gray-100 py-10 px-4 min-h-screen overflow-x-clip w-full">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 w-full items-start">

        {/* ── LEFT SIDEBAR ── */}
        <div className="space-y-6 md:sticky md:top-24 self-start">
          <div className="bg-white rounded-2xl p-5 shadow-md">
            <h2 className="text-lg font-semibold text-gray-800 mb-5">
              Laser Machines
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
            <p className="text-xs text-gray-500">Talk to our laser experts for pricing, demo, and customization.</p>
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
                <Link href="/laser-machines" className="hover:text-blue-600">Laser Machines</Link>
                {" > "}
                <span className="text-blue-600">Laser Cutting Machine</span>
              </p>
            </nav>
            <h1 className="text-2xl font-bold text-gray-900 mt-1">
              Laser Cutting Machine
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              High-precision CO2 & fiber laser cutting for metal, acrylic, wood & industrial materials — fast, accurate, and fully automatable
            </p>
          </div>

          {/* HERO IMAGE */}
          <div className="flex justify-center items-center w-full">
            <Image
              src="/laser-machines/laser-cutting.png"
              alt="Laser Cutting Machine"
              width={600}
              height={400}
              className="object-contain"
            />
          </div>

          {/* MAIN CONTENT CARD */}
          <div className="bg-white rounded-2xl p-6 shadow-md space-y-8">

            {/* ABOUT */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Laser Cutting Machine</h2>
              <div className="w-10 h-0.5 bg-blue-600 mt-1 mb-4 rounded" />
              <p className="text-gray-600 text-sm leading-relaxed">
                Laser Cutting Machines are advanced, computer-controlled systems that use a focused, high-energy laser beam to cut, engrave, or etch a wide range of materials with exceptional precision and speed. The laser beam is directed through optical lenses and guided by servo-driven motion systems to follow programmed cutting paths with sub-millimetre accuracy.

                These machines deliver clean, burr-free cuts with minimal material wastage, making them the preferred choice for industrial fabrication, product manufacturing, and prototyping. Whether cutting intricate shapes in thin sheet metal or profiling thick structural steel, laser cutting technology offers unmatched edge quality and dimensional consistency.

                Laser cutting machines are widely used across sheet metal fabrication, automotive parts manufacturing, signage and advertising, architectural metalwork, packaging, electronics enclosures, jewellery, and textile industries. Their ability to handle complex geometries directly from CAD files eliminates the need for custom tooling, reducing lead times and production costs significantly.

                IndiaLaser supplies both CO2 and fiber laser cutting machines to meet the diverse material and power requirements of Indian manufacturers, from small workshops to large-scale industrial plants.
              </p>
            </div>

            {/* IMPORTED PRODUCTS */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Imported Products</h2>
              <div className="w-12 h-1 bg-blue-600 mt-1 mb-4 rounded" />
              <p className="text-gray-600 text-sm leading-relaxed">
                We supply a curated range of imported laser cutting machines from globally recognized manufacturers, designed to meet international quality and performance standards. Our imported systems feature high-power laser sources, precision linear guide rails, servo drive systems, and intelligent CNC controllers — delivering superior cutting speed, accuracy, and long-term reliability. These machines are the preferred choice for Indian manufacturers seeking world-class cutting capability with the support of a local service network.
              </p>
            </div>

            {/* FEATURES */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Features of Laser Cutting Machine</h2>
              <div className="w-12 h-1 bg-blue-600 mt-1 mb-4 rounded" />
              <ul className="list-disc pl-5 text-gray-600 text-sm space-y-2">
                <li>High-power laser source (CO2 or Fiber) for fast, clean cutting across all material types</li>
                <li>Precision servo motor drive with linear guide rails for high-speed, accurate motion</li>
                <li>Automatic focus adjustment (AFC) for consistent cutting quality at varying material thicknesses</li>
                <li>Intelligent CNC controller with user-friendly touchscreen interface and CAD/CAM compatibility</li>
                <li>Real-time nozzle height sensing for adaptive cutting over uneven surfaces</li>
                <li>Integrated fume extraction and dust collection for a clean, safe working environment</li>
                <li>Exchange table / pallet changer option for uninterrupted production in high-volume settings</li>
                <li>Compatible with DXF, AI, DWG, SVG, BMP, and other standard design file formats</li>
              </ul>
            </div>

            {/* ADVANTAGES */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Advantages</h2>
              <div className="w-12 h-1 bg-blue-600 mt-1 mb-4 rounded" />
              <ul className="list-disc pl-5 text-gray-600 text-sm space-y-2">
                <li>Non-contact cutting process eliminates tool wear and reduces maintenance costs</li>
                <li>Exceptional cut edge quality with smooth, clean surfaces requiring minimal post-processing</li>
                <li>Very narrow kerf width (as low as 0.1 mm) reduces material wastage significantly</li>
                <li>High cutting speeds dramatically reduce cycle times compared to traditional methods</li>
                <li>No custom tooling required — complex profiles cut directly from CAD files</li>
                <li>Suitable for prototyping, short-run, and high-volume production without retooling</li>
                <li>Minimal heat-affected zone (HAZ) preserves material properties around the cut edge</li>
              </ul>
            </div>

            {/* WORKING */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800">How a Laser Cutting Machine Works</h2>
              <div className="w-12 h-1 bg-blue-600 mt-1 mb-4 rounded" />
              <p className="text-gray-600 text-sm leading-relaxed">
                A laser cutting machine generates a high-energy laser beam from its laser source (CO2 tube or fiber laser module). This beam is directed through a series of mirrors and focused by a lens inside the cutting head onto the material surface, creating an extremely small, intensely hot focal spot. The concentrated energy rapidly heats the material beyond its melting or vaporization point in the focal zone. An assist gas — typically oxygen, nitrogen, or air — is blown coaxially through the cutting nozzle to eject molten material from the kerf and protect the lens from spatter. The CNC controller drives the X-Y gantry or the cutting head along the programmed cutting path at precise speed, producing the desired cut profile. Cutting parameters including laser power, cutting speed, focal position, and gas pressure are all programmable and can be optimized per material and thickness.
              </p>
            </div>

            {/* TYPES */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Types of Laser Cutting Machines</h2>
              <div className="w-12 h-1 bg-blue-600 mt-1 mb-4 rounded" />
              <ul className="list-disc pl-5 text-gray-600 text-sm space-y-2">
                <li><strong>CO2 Laser Cutting Machine</strong> — Best for acrylic, wood, MDF, fabric, leather, rubber, and thin metals (60W–150W typical)</li>
                <li><strong>Fiber Laser Cutting Machine</strong> — Optimized for all metals including stainless steel, mild steel, aluminium, copper, and brass (500W–6000W)</li>
                <li><strong>Flatbed Laser Cutting Machine</strong> — Standard gantry-type machine for sheet materials; most common industrial format</li>
                <li><strong>Tube & Sheet Combo Laser Cutting Machine</strong> — Dual-function machine for both flat sheets and hollow profiles (pipes, tubes, angles)</li>
                <li><strong>Large-Format Laser Cutting Machine</strong> — Oversized bed (up to 3 m × 6 m) for structural steel, large signage, and architectural panels</li>
                <li><strong>Mini / Desktop Laser Cutter</strong> — Compact benchtop unit for hobbyist, educational, and small-format production use</li>
                <li><strong>Exchange Table Laser Cutting Machine</strong> — Dual-pallet automatic loading system for non-stop high-volume production</li>
              </ul>
            </div>

            {/* APPLICATIONS */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Applications</h2>
              <div className="w-12 h-1 bg-blue-600 mt-1 mb-4 rounded" />
              <ul className="list-disc pl-5 text-gray-600 text-sm space-y-2">
                <li>Sheet metal fabrication — brackets, enclosures, panels, flanges, and structural parts</li>
                <li>Signage & advertising — illuminated letters, acrylic panels, and metal logos</li>
                <li>Automotive parts — body panels, brackets, exhaust components, and interior trim</li>
                <li>Architectural metalwork — decorative screens, railings, cladding, and facades</li>
                <li>Electronics enclosures — control panels, chassis, and instrument housings</li>
                <li>Jewellery & gifting — intricate gold/silver cutting and personalized engraving</li>
                <li>Textile & leather — precision pattern cutting for garments, footwear, and upholstery</li>
                <li>Packaging — custom corrugated box dies, carton blanks, and display standees</li>
              </ul>
            </div>
          </div>

          {/* ── TECHNICAL SPECIFICATIONS ── */}
          <div className="bg-white rounded-2xl p-6 shadow-md">
            <h2 className="text-xl font-semibold text-gray-800">Technical Specifications</h2>
            <div className="w-12 h-1 bg-blue-600 mt-1 mb-4 rounded" />
            <p className="text-sm text-gray-500 mb-4">
              Standard specifications for our CO2 and Fiber Laser Cutting Machines. Custom bed sizes, power levels, and configurations available on request.
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
            <p className="text-xs text-gray-400 mt-3">* Specifications may vary by model and configuration. Contact us for detailed datasheets.</p>
          </div>

          {/* ── CUTTING METHOD COMPARISON ── */}
          <div className="bg-white rounded-2xl p-6 shadow-md">
            <h2 className="text-xl font-semibold text-gray-800">Laser Cutting vs Plasma Cutting vs Waterjet — Which is Right for You?</h2>
            <div className="w-12 h-1 bg-blue-600 mt-1 mb-4 rounded" />
            <p className="text-sm text-gray-500 mb-4">
              Choosing the right cutting technology depends on your material, thickness, required edge quality, and production volume.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-800 text-white">
                    <th className="text-left px-4 py-2.5 rounded-tl-lg">Feature</th>
                    <th className="text-center px-4 py-2.5 bg-blue-600">Laser Cutting ✓</th>
                    <th className="text-center px-4 py-2.5">Plasma Cutting</th>
                    <th className="text-center px-4 py-2.5 rounded-tr-lg">Waterjet Cutting</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-4 py-2.5 text-gray-700 font-medium border-b border-gray-100">{row.feature}</td>
                      <td className="px-4 py-2.5 text-center text-blue-700 font-semibold border-b border-gray-100 bg-blue-50">{row.laser}</td>
                      <td className="px-4 py-2.5 text-center text-gray-600 border-b border-gray-100">{row.plasma}</td>
                      <td className="px-4 py-2.5 text-center text-gray-600 border-b border-gray-100">{row.waterjet}</td>
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
              Frequently Asked Questions — Laser Cutting Machine
            </h2>
            <div className="w-12 h-1 bg-blue-600 mt-1 mb-4 rounded" />
            <p className="text-sm text-gray-500 mb-5">
              Common questions about laser cutting machines, pricing, materials, and operation in India.
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
                { title: "Export-Grade Packing", desc: "Heavy-duty wooden crates with foam padding, anti-corrosion film, and shock-absorbing material for safe transit" },
                { title: "Pan-India Delivery", desc: "Reliable shipping to all major cities and industrial zones via trusted freight and logistics partners" },
                { title: "On-Site Installation", desc: "Factory-trained engineers deputed for full machine installation, levelling, calibration, and operator training" },
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
            <h2 className="text-xl font-semibold text-gray-800">Laser Cutting Machine in India</h2>
            <div className="w-12 h-1 bg-blue-600 mt-1 mb-4 rounded" />
            <p className="text-gray-600 text-sm leading-relaxed">
              Looking for the best <strong>laser cutting machine price in India</strong>? IndiaLaser supplies
              a comprehensive range of CO2 and fiber laser cutting systems — from compact desktop laser cutters to
              large-format industrial fiber laser cutting machines with exchange tables. Whether you need a{" "}
              <strong>CO2 laser cutter for acrylic and wood</strong>, a{" "}
              <strong>fiber laser cutting machine for sheet metal fabrication</strong>, or a{" "}
              <strong>tube and sheet combo laser cutting system</strong>, IndiaLaser has the right solution.
              Our machines are available across <strong>Delhi, Mumbai, Chennai, Bengaluru, Hyderabad, Pune,
                Ahmedabad, Surat, Ludhiana</strong>, and all across India with ready stock, fast delivery,
              and a dedicated pan-India service network. Compare our laser cutting machines with plasma and waterjet
              alternatives, or{" "}
              <Link href="/contact-us" className="text-blue-600 font-semibold hover:underline">
                contact our team
              </Link>{" "}
              for a customized quotation and live machine demonstration today.
            </p>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-blue-900 to-blue-600 rounded-2xl p-6 text-center text-white shadow-md">
            <h2 className="text-xl font-bold mb-2">Ready to Buy a Laser Cutting Machine?</h2>
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