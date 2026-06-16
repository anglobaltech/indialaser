import Image from "next/image";
import Link from "next/link";
export const metadata = {
  title: "UV Laser Marking Machine - High-Precision Laser Marking Solutions in India",
  description: "Discover our advanced UV Laser Marking Machine for ultra-precise marking on glass, plastics, PCBs, and heat-sensitive materials. Ideal for electronics, medical devices, and delicate substrates. Get high-quality, permanent marks with minimal heat effect. Contact us for pricing and demo in India.",
};

export default function UVLaserPage() {


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
      active: true,
    },
  ];

  const specs = [
    { param: "Laser Source", value: "Solid-State DPSS UV Laser" },
    { param: "Wavelength", value: "355 nm" },
    { param: "Laser Power", value: "3W / 5W / 10W / 15W" },
    { param: "Marking / Work Area", value: "100×100 mm to 300×300 mm" },
    { param: "Marking Speed", value: "Up to 3000 mm/s" },
    { param: "Repeat Accuracy", value: "±0.01 mm" },
    { param: "Beam Quality (M²)", value: "< 1.2" },
    { param: "Cooling Method", value: "Air Cooling" },
    { param: "Power Supply", value: "220V / 50Hz" },
    { param: "Software", value: "EzCad2 / LightBurn Compatible" },
    { param: "Operating Life", value: "20,000+ hours" },
    { param: "Warranty", value: "1 Year (Extendable)" },
  ];

  const whyUs = [
    { title: "Pan-India Service Network", desc: "Dedicated engineers available across major Indian cities." },
    { title: "Free Installation & Training", desc: "On-site setup and operator training included with purchase." },
    { title: "Genuine Imported Parts", desc: "Premium DPSS UV laser modules with verified authenticity." },
    { title: "Fast Delivery", desc: "Ready stock available; dispatch within 3–7 business days." },
    { title: "After-Sales Support", desc: "365-day support via call, WhatsApp, and remote diagnostics." },
  ];

  const faqs =[
  {
    q: "What is a UV Laser Marking Machine used for?",
    a: "It is used for ultra-precise cold marking and engraving on heat-sensitive materials like glass, plastics, PCBs, and ceramics. Its short 355 nm wavelength prevents thermal damage, making it perfect for delicate substrates.",
  },
  {
    q: "What materials can a UV Laser mark?",
    a: "It marks a wide range of materials, including glass, silicon wafers, PCBs, ceramics, white plastics (PVC, PP, PE), packaging, and most transparent surfaces that fiber or CO2 lasers fail to mark.",
  },
  {
    q: "What is 'cold marking' and why does it matter?",
    a: "Cold marking is a photochemical process where the UV laser breaks molecular bonds directly instead of using heat. This leaves a near-zero heat-affected zone, eliminating micro-cracking, charring, or warping.",
  },
  {
    q: "What is the price of a UV Laser Marking Machine in India?",
    a: "Prices typically range from ₹2.5 Lakhs to ₹10 Lakhs depending on the wattage (3W–15W) and system setup. They cost more than fiber or CO2 systems due to high-end optical components. Contact us for a quote.",
  },
  {
    q: "Is UV Laser suitable for PCB and electronics marking?",
    a: "Yes. It is the electronics industry standard for marking micro-text, barcodes, and serial codes on PCBs. The cold marking method protects circuit layers, ensuring electronic integrity is never compromised.",
  },
  {
    q: "Do you provide installation and training?",
    a: "Yes, IndiaLaser offers free on-site installation, precision optical alignment, and operator training with every machine to make sure your production team can run it confidently.",
  },
]

  const comparisonData = [
    { feature: "Best For", fiber: "Metals & hard plastics", co2: "Wood, acrylic, leather", uv: "Glass, plastic, PCB" },
    { feature: "Wavelength", fiber: "1064 nm", co2: "10,600 nm", uv: "355 nm" },
    { feature: "Marking Speed", fiber: "Very Fast", co2: "Fast", uv: "Moderate" },
    { feature: "Running Cost", fiber: "Very Low", co2: "Low", uv: "Moderate" },
    { feature: "Heat Affected Zone", fiber: "Minimal", co2: "Moderate", uv: "Near Zero" },
    { feature: "Maintenance", fiber: "Very Low", co2: "Low–Medium", uv: "Low" },
  ];

  return (
    // CHANGED: overflow-x-hidden → overflow-x-clip (hidden breaks sticky positioning)
    <div className="bg-gray-100 py-10 px-4 min-h-screen overflow-x-clip w-full">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 w-full items-start">

        {/* ── LEFT SIDEBAR ── */}
        {/* CHANGED: removed h-fit, added self-start, kept sticky + top-24 */}
        <div className="space-y-6 md:sticky md:top-24 self-start">
          <div className="bg-white rounded-2xl p-5 shadow-md">
            <h2 className="text-lg font-semibold text-gray-800 mb-5">
              Laser Marking Machines
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
                <Link href="/laser-machines" className="hover:text-blue-600">Laser Marking Machines</Link>
                {" > "}
                <span className="text-blue-600">UV Laser Marking Machine</span>
              </p>
            </nav>
            <h1 className="text-2xl font-bold text-gray-900 mt-1">
              UV Laser Marking Machine
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              Ultra-precise 355 nm cold marking on glass, PCB, plastic, ceramics & heat-sensitive materials
            </p>
          </div>

          {/* HERO IMAGE */}
          <div className="flex justify-center items-center w-full">
            <Image
              src="/laser-machines/uv-laser.png"
              alt="UV Laser Marking Machine by IndiaLaser"
              width={600}
              height={400}
              className="object-contain"
            />
          </div>

          {/* MAIN CONTENT CARD */}
          <div className="bg-white rounded-2xl p-6 shadow-md space-y-8">

            {/* ABOUT */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800">UV Laser Marking Machine</h2>
              <div className="w-10 h-0.5 bg-blue-600 mt-1 mb-4 rounded" />
              <p className="text-gray-600 text-sm leading-relaxed">
                UV Laser Marking Machines are advanced precision laser systems designed for ultra-fine and high-accuracy marking applications. These machines use ultraviolet laser technology with a shorter wavelength, allowing highly detailed marking with minimal heat effect and exceptional surface protection.

                UV laser marking is especially suitable for delicate, heat-sensitive, and high-precision materials where traditional laser systems may cause damage or burning. The machine delivers clean, sharp, and permanent markings on plastics, glass, ceramics, silicon, electronic components, medical devices, and coated materials.

                These systems are ideal for micro marking, QR codes, serial numbers, logos, barcodes, date coding, and precision engraving applications requiring superior clarity and accuracy. Due to the cold marking process, UV lasers minimize thermal stress and maintain the original quality of the material surface.

                UV Laser Marking Machines are widely used in industries such as electronics, semiconductor manufacturing, medical equipment, cosmetics packaging, mobile components, precision instruments, and high-end industrial applications where fine marking quality and reliability are essential.
              </p>
            </div>

            {/* IMPORTED PRODUCTS */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Imported Products</h2>
              <div className="w-12 h-1 bg-blue-600 mt-1 mb-4 rounded" />
              <p className="text-gray-600 text-sm leading-relaxed">
                We offer a wide range of imported UV laser machines sourced from globally
                recognized manufacturers. These products meet international quality standards
                and are ideal for high-resolution marking and micro-engraving on delicate materials.
                Our imported UV machines feature premium DPSS laser modules, advanced galvo scanning
                systems, and industry-leading beam quality — delivering consistent, repeatable results
                across demanding production environments throughout India.
              </p>
            </div>

            {/* FEATURES */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Features of UV Laser Machine</h2>
              <div className="w-12 h-1 bg-blue-600 mt-1 mb-4 rounded" />
              <ul className="list-disc pl-5 text-gray-600 text-sm space-y-2">
                <li>355 nm short wavelength enables cold marking with near-zero heat-affected zone</li>
                <li>Exceptional beam quality (M² &lt; 1.2) for ultra-fine spot size and micro-text marking</li>
                <li>Ideal for transparent, translucent, and heat-sensitive substrates</li>
                <li>High-speed galvo scanning system for fast, precise batch marking</li>
                <li>Compatible with EzCad2 and LightBurn software for easy operation</li>
                <li>Supports serial numbers, barcodes, QR codes, logos, and intricate patterns</li>
                <li>Compatible with Windows 7 / 10 / 11 operating systems</li>
              </ul>
            </div>

            {/* ADVANTAGES */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Advantages</h2>
              <div className="w-12 h-1 bg-blue-600 mt-1 mb-4 rounded" />
              <ul className="list-disc pl-5 text-gray-600 text-sm space-y-2">
                <li>Cold photochemical process prevents burning, cracking, or discoloration</li>
                <li>Finest mark resolution among all laser types — suitable for micro-scale features</li>
                <li>Marks glass and crystal without cracking or stress fractures</li>
                <li>Permanent, tamper-proof marks that resist chemicals, heat, and abrasion</li>
                <li>Eco-friendly process — no inks, chemicals, or consumables required</li>
                <li>Low maintenance with air-cooled design and no water chiller needed</li>
              </ul>
            </div>

            {/* WORKING */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800">How a UV Laser Marking Machine Works</h2>
              <div className="w-12 h-1 bg-blue-600 mt-1 mb-4 rounded" />
              <p className="text-gray-600 text-sm leading-relaxed">
                A UV laser marking machine uses a solid-state diode-pumped (DPSS) laser to generate
                a 355 nm ultraviolet beam through a process of frequency tripling from the fundamental
                1064 nm infrared wavelength. Unlike thermal laser processes, UV light interacts with
                material at a photochemical level — breaking molecular bonds directly rather than
                melting or vaporizing through heat. The focused beam is steered by a high-speed galvo
                scanning head and positioned with sub-micron accuracy, producing extremely fine, clean
                marks on even the most delicate surfaces without any surrounding thermal damage.
              </p>
            </div>

            {/* TYPES */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Types of UV Laser Marking Machines</h2>
              <div className="w-12 h-1 bg-blue-600 mt-1 mb-4 rounded" />
              <ul className="list-disc pl-5 text-gray-600 text-sm space-y-2">
                <li><strong>Desktop UV Laser Marking Machine</strong> — Compact unit for labs, R&D centers, and small-scale production</li>
                <li><strong>Inline UV Laser Marking System</strong> — Conveyor-integrated for high-speed automated production lines</li>
                <li><strong>Flying UV Laser Marker</strong> — On-the-fly marking for continuous packaging and bottling lines</li>
                <li><strong>3W UV Laser Machine</strong> — Entry-level for glass, plastics, and light industrial applications</li>
                <li><strong>5W / 10W UV Laser Machine</strong> — Higher power for PCBs, semiconductors, and ceramics</li>
                <li><strong>15W UV Laser Machine</strong> — Industrial-grade for high-throughput electronics and medical device marking</li>
              </ul>
            </div>

            {/* APPLICATIONS */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Applications</h2>
              <div className="w-12 h-1 bg-blue-600 mt-1 mb-4 rounded" />
              <ul className="list-disc pl-5 text-gray-600 text-sm space-y-2">
                <li>PCB and electronics — serial numbers, QR codes, component traceability</li>
                <li>Glass and crystal — bottles, awards, optical lenses, display panels</li>
                <li>Pharmaceutical packaging — expiry dates, batch numbers on blister packs and vials</li>
                <li>Medical devices — UDI codes, surgical instruments, implants, and catheters</li>
                <li>White and transparent plastics — PVC, PP, PE, HDPE bottles and containers</li>
                <li>Ceramics and sapphire — semiconductor substrates, watch faces, and tiles</li>
                <li>Flexible circuits and FPCs — micro-scale marking without delamination</li>
              </ul>
            </div>
          </div>

          {/* ── TECHNICAL SPECIFICATIONS ── */}
          <div className="bg-white rounded-2xl p-6 shadow-md">
            <h2 className="text-xl font-semibold text-gray-800">Technical Specifications</h2>
            <div className="w-12 h-1 bg-blue-600 mt-1 mb-4 rounded" />
            <p className="text-sm text-gray-500 mb-4">
              Standard specifications for our 3W–15W UV Laser Marking Machines. Custom configurations available on request.
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

          {/* ── LASER TYPE COMPARISON ── */}
          <div className="bg-white rounded-2xl p-6 shadow-md">
            <h2 className="text-xl font-semibold text-gray-800">UV vs Fiber vs CO2 Laser — Which is Right for You?</h2>
            <div className="w-12 h-1 bg-blue-600 mt-1 mb-4 rounded" />
            <p className="text-sm text-gray-500 mb-4">
              Understanding the differences helps you choose the best laser marking technology for your application.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-800 text-white">
                    <th className="text-left px-4 py-2.5 rounded-tl-lg">Feature</th>
                    <th className="text-center px-4 py-2.5">Fiber Laser</th>
                    <th className="text-center px-4 py-2.5">CO2 Laser</th>
                    <th className="text-center px-4 py-2.5 bg-blue-600 rounded-tr-lg">UV Laser ✓</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-4 py-2.5 text-gray-700 font-medium border-b border-gray-100">{row.feature}</td>
                      <td className="px-4 py-2.5 text-center text-gray-600 border-b border-gray-100">{row.fiber}</td>
                      <td className="px-4 py-2.5 text-center text-gray-600 border-b border-gray-100">{row.co2}</td>
                      <td className="px-4 py-2.5 text-center text-blue-700 font-semibold border-b border-gray-100 bg-blue-50">{row.uv}</td>
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
              Frequently Asked Questions — UV Laser Marking Machine
            </h2>
            <div className="w-12 h-1 bg-blue-600 mt-1 mb-4 rounded" />
            <p className="text-sm text-gray-500 mb-5">
              Common questions about UV laser marking machines, pricing, and operation in India.
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
                { title: "Export-Grade Packing", desc: "Foam-padded wooden crates with shock-absorbing material" },
                { title: "Pan-India Delivery", desc: "Shipping to all major cities via trusted freight partners" },
                { title: "On-Site Installation", desc: "Engineer deputed for installation and operator training" },
              ].map((item, i) => (
                <div key={i} className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <div className="text-sm font-semibold text-gray-800">{item.title}</div>
                  <div className="text-xs text-gray-500 mt-1">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── SEO PARAGRAPH ── */}
          <div className="bg-white rounded-2xl p-6 shadow-md">
            <h2 className="text-xl font-semibold text-gray-800">UV Laser Marking Machine in India</h2>
            <div className="w-12 h-1 bg-blue-600 mt-1 mb-4 rounded" />
            <p className="text-gray-600 text-sm leading-relaxed">
              Looking for a <strong>UV laser marking machine price in India</strong>? IndiaLaser offers
              the best UV laser machines across all wattages — 3W, 5W, 10W, and 15W — suitable for
              precision labs to large-scale electronics manufacturing. Whether you need a{" "}
              <strong>UV laser marking machine for glass and PCB</strong>, a{" "}
              <strong>cold laser marking machine for pharmaceutical packaging</strong>, or an{" "}
              <strong>industrial UV laser system for medical devices and ceramics</strong>, we have the right solution.
              Our machines are available in <strong>Delhi, Mumbai, Chennai, Bengaluru, Hyderabad, Pune,
                Ahmedabad</strong>, and all across India with quick delivery and dedicated after-sales support.
              Compare our UV laser machines with Fiber and CO2 laser alternatives, or{" "}
              <Link href="/contact-us" className="text-blue-600 font-semibold hover:underline">
                contact our team
              </Link>{" "}
              for a customized quotation today.
            </p>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-blue-900 to-blue-600 rounded-2xl p-6 text-center text-white shadow-md">
            <h2 className="text-xl font-bold mb-2">Ready to Buy a UV Laser Marking Machine?</h2>
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