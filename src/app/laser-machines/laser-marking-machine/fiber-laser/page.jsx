
import Image from "next/image";
import Link from "next/link";

export const metadata = {title: "Fiber Laser Marking Machine - High-Precision Metal Marking Solutions in India",    
  description: "Explore our advanced Fiber Laser Marking Machine for permanent, high-speed marking on metals and hard materials. Ideal for automotive, electronics, medical, and jewellery industries across India. Get precision engraving with low maintenance and long-lasting performance.",
};
export default function FiberLaserPage() {
 

  const machines = [
    {
      name: "Fiber Laser Marking Machine",
      link: "/laser-machines/laser-marking-machine/fiber-laser",
      image: "/laser-machines/fiber-laser-machine.webp",
      active: true,
    },
    {
      name: "CO2 Laser Marking Machine",
      link: "/laser-machines/laser-marking-machine/co2-laser",
      image: "/laser-machines/co2-laser-marking.webp",
    },
    {
      name: "UV Laser Marking Machine",
      link: "/laser-machines/laser-marking-machine/uv-laser",
      image: "/laser-machines/uv-marking-machine.webp",
    },
  ];

  const specs = [
    { param: "Laser Source", value: "Fiber (MOPA / Q-Switch)" },
    { param: "Wavelength", value: "1064 nm" },
    { param: "Laser Power", value: "20W / 30W / 50W / 100W" },
    { param: "Marking Area", value: "110×110 mm to 300×300 mm" },
    { param: "Marking Speed", value: "Up to 7000 mm/s" },
    { param: "Repeat Accuracy", value: "±0.003 mm" },
    { param: "Beam Quality (M²)", value: "< 1.5" },
    { param: "Cooling Method", value: "Air Cooling" },
    { param: "Power Supply", value: "220V / 50Hz" },
    { param: "Software", value: "EzCad2 / EZCAD3 Compatible" },
    { param: "Operating Life", value: "100,000+ hours" },
    { param: "Warranty", value: "1 Year (Extendable)" },
  ];

  const whyUs = [
    { title: "Pan-India Service Network", desc: "Dedicated engineers available across major Indian cities." },
    { title: "Free Installation & Training", desc: "On-site setup and operator training included with purchase." },
    { title: "Genuine Imported Parts", desc: "Raycus / IPG fiber sources with verified authenticity." },
    { title: "Fast Delivery", desc: "Ready stock available; dispatch within 3–7 business days." },
    { title: "After-Sales Support", desc: "365-day support via call, WhatsApp, and remote diagnostics." },
  ];

  const faqs = [
  {
    q: "What is a Fiber Laser Marking Machine used for?",
    a: "It is designed to permanently engrave text, logos, barcodes, and serial numbers onto metals and hard materials. It serves as a vital tool across the automotive, electronics, jewellery, and medical device manufacturing industries.",
  },
  {
    q: "What materials can a Fiber Laser mark?",
    a: "It works best on metals and engineered hard plastics. Fully compatible materials include stainless steel, mild steel, aluminium, brass, copper, titanium, gold, silver, and ABS plastics.",
  },
  {
    q: "How long does a Fiber Laser source last?",
    a: "A high-quality fiber laser source (like Raycus, IPG, or MAX) has an exceptional operational lifespan of over 100,000 hours, requiring virtually zero maintenance throughout its service life.",
  },
  {
    q: "What is the price of a Fiber Laser Marking Machine in India?",
    a: "Prices generally range from ₹1.5 Lakhs to ₹6 Lakhs depending on laser power (20W–100W), configuration setup, and the specific source brand. Contact us for our latest promotions and a customized quote.",
  },
  {
    q: "Is the Fiber Laser Machine suitable for small businesses?",
    a: "Yes. Our portable and desktop configurations feature compact footprints, straightforward software controls, and minimal overhead expenses—perfectly matching the needs of job shops and start-ups.",
  },
  {
    q: "Do you provide installation and training?",
    a: "Yes, IndiaLaser provides free on-site equipment installation, parameter calibration, and hands-on software training to ensure your manufacturing team runs production independently from day one.",
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
                <span className="text-blue-600">Fiber Laser Marking Machine</span>
              </p>
            </nav>
            <h1 className="text-2xl font-bold text-gray-900 mt-1">
              Fiber Laser Marking Machine
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              High-precision industrial fiber laser for permanent metal marking, engraving & traceability
            </p>
          </div>

          {/* HERO IMAGE */}
          <div className="flex justify-center items-center w-full">
            <Image
              src="/laser-machines/fiber-laser(2).png"
              alt="Fiber Laser Marking Machine by IndiaLaser"
              width={600}
              height={400}
              className="object-contain"
            />
          </div>

          {/* MAIN CONTENT CARD */}
          <div className="bg-white rounded-2xl p-6 shadow-md space-y-8">

            {/* ABOUT */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Fiber Laser Marking Machine</h2>
              <div className="w-10 h-0.5 bg-blue-600 mt-1 mb-4 rounded" />
              <p className="text-gray-600 text-sm leading-relaxed">
                Fiber Laser Marking Machines are advanced industrial systems designed for permanent, high-speed, and precision marking on metal and selected non-metal materials. These machines use a fiber laser source to generate a concentrated laser beam that creates sharp, durable, and high-contrast markings without physical contact or consumables.

                Fiber laser technology is widely used across industries because of its excellent beam quality, fast processing speed, low maintenance requirements, and long operational life. It is ideal for applications such as serial number engraving, barcode marking, QR code marking, logo engraving, deep engraving, and industrial traceability.

                These machines can mark on stainless steel, aluminum, brass, copper, iron, titanium, gold, silver, and various coated or hard plastic surfaces with exceptional accuracy and consistency. Fiber laser systems are highly efficient, energy-saving, and suitable for continuous industrial production environments.

                With stable performance, precision output, and modern laser control systems, Fiber Laser Marking Machines are trusted in industries including automotive, electronics, medical devices, jewelry, tools, aerospace, and manufacturing.
              </p>
            </div>

            {/* IMPORTED PRODUCTS */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Imported Products</h2>
              <div className="w-12 h-1 bg-blue-600 mt-1 mb-4 rounded" />
              <p className="text-gray-600 text-sm leading-relaxed">
                We offer a wide range of imported fiber laser machines sourced from globally
                recognized manufacturers including Raycus, IPG Photonics, and MAX. These products
                meet international quality standards and are ideal for precision-based industrial
                applications. Our imported machines deliver superior beam quality, fast marking
                speed, and outstanding durability.
              </p>
            </div>

            {/* FEATURES */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Features of Fiber Laser Machine</h2>
              <div className="w-12 h-1 bg-blue-600 mt-1 mb-4 rounded" />
              <ul className="list-disc pl-5 text-gray-600 text-sm space-y-2">
                <li>High precision marking with excellent M² beam quality (&lt;1.5)</li>
                <li>Marking speed up to 7,000 mm/s for increased productivity</li>
                <li>100,000+ hour laser source life — extremely low maintenance</li>
                <li>Compact desktop design with user-friendly EzCad / EZCAD3 software</li>
                <li>Suitable for all metals, alloys, and hard industrial materials</li>
                <li>Supports text, logos, barcodes, QR codes, serial numbers, and 2D Data Matrix</li>
                <li>Compatible with Windows 7 / 10 / 11 operating systems</li>
              </ul>
            </div>

            {/* ADVANTAGES */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Advantages</h2>
              <div className="w-12 h-1 bg-blue-600 mt-1 mb-4 rounded" />
              <ul className="list-disc pl-5 text-gray-600 text-sm space-y-2">
                <li>Energy efficient — consumes significantly less power than CO2 or lamp-pumped lasers</li>
                <li>Non-contact process ensures zero material damage or deformation</li>
                <li>Permanent, tamper-proof, and highly readable marks</li>
                <li>Very low operating cost with no consumables (no ink, no chemicals)</li>
                <li>Environment-friendly — no hazardous waste produced</li>
                <li>Air-cooled design — no chiller required for standard models</li>
              </ul>
            </div>

            {/* WORKING */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800">How a Fiber Laser Marking Machine Works</h2>
              <div className="w-12 h-1 bg-blue-600 mt-1 mb-4 rounded" />
              <p className="text-gray-600 text-sm leading-relaxed">
                A fiber laser marking machine generates a high-intensity laser beam by exciting
                rare-earth-doped optical fibers (typically Ytterbium) using pump diodes. The
                concentrated 1064 nm beam is guided through a galvo scanning head — two
                high-speed mirrors controlled by servo motors — which direct the beam across
                the material surface at precise coordinates. On metals, the beam causes rapid
                localized heating that oxidizes or ablates the surface, creating a permanent,
                high-contrast mark. The entire process is controlled digitally via software,
                ensuring micron-level accuracy and full repeatability.
              </p>
            </div>

            {/* TYPES */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Types of Fiber Laser Marking Machines</h2>
              <div className="w-12 h-1 bg-blue-600 mt-1 mb-4 rounded" />
              <ul className="list-disc pl-5 text-gray-600 text-sm space-y-2">
                <li><strong>Desktop Fiber Laser Marking Machine</strong> — Compact, ideal for benchtop use in workshops and labs</li>
                <li><strong>Portable / Handheld Fiber Laser Machine</strong> — Lightweight unit for on-site marking of large parts</li>
                <li><strong>Enclosed / Cabinet Fiber Laser System</strong> — Fully enclosed for safety compliance in production lines</li>
                <li><strong>Flying Fiber Laser System</strong> — Integrated inline marking for high-speed conveyor production</li>
                <li><strong>MOPA Fiber Laser Machine</strong> — Adjustable pulse for color marking on stainless steel and anodized aluminium</li>
                <li><strong>High Power Industrial Fiber Laser (50W–100W)</strong> — Deep engraving and cutting of thick metals</li>
              </ul>
            </div>

            {/* APPLICATIONS */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Applications</h2>
              <div className="w-12 h-1 bg-blue-600 mt-1 mb-4 rounded" />
              <ul className="list-disc pl-5 text-gray-600 text-sm space-y-2">
                <li>Automobile parts marking — VIN plates, engine components, gears</li>
                <li>Jewelry engraving — gold, silver, platinum, diamond settings</li>
                <li>Electronics and PCB marking — serial numbers, logos, barcodes</li>
                <li>Medical instrument marking — surgical tools, implants (FDA-compliant UDI)</li>
                <li>Industrial tools and hardware — drill bits, wrenches, bearings</li>
                <li>Aerospace components — titanium, Inconel, aluminium alloys</li>
                <li>Consumer goods — cutlery, watches, mobile accessories</li>
              </ul>
            </div>
          </div>

          {/* ── TECHNICAL SPECIFICATIONS ── */}
          <div className="bg-white rounded-2xl p-6 shadow-md">
            <h2 className="text-xl font-semibold text-gray-800">Technical Specifications</h2>
            <div className="w-12 h-1 bg-blue-600 mt-1 mb-4 rounded" />
            <p className="text-sm text-gray-500 mb-4">
              Standard specifications for our 20W–100W Fiber Laser Marking Machines. Custom configurations available on request.
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
            <h2 className="text-xl font-semibold text-gray-800">Fiber vs CO2 vs UV Laser — Which is Right for You?</h2>
            <div className="w-12 h-1 bg-blue-600 mt-1 mb-4 rounded" />
            <p className="text-sm text-gray-500 mb-4">
              Understanding the differences helps you choose the best laser marking technology for your application.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-800 text-white">
                    <th className="text-left px-4 py-2.5 rounded-tl-lg">Feature</th>
                    <th className="text-center px-4 py-2.5 bg-blue-600">Fiber Laser ✓</th>
                    <th className="text-center px-4 py-2.5">CO2 Laser</th>
                    <th className="text-center px-4 py-2.5 rounded-tr-lg">UV Laser</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-4 py-2.5 text-gray-700 font-medium border-b border-gray-100">{row.feature}</td>
                      <td className="px-4 py-2.5 text-center text-blue-700 font-semibold border-b border-gray-100 bg-blue-50">{row.fiber}</td>
                      <td className="px-4 py-2.5 text-center text-gray-600 border-b border-gray-100">{row.co2}</td>
                      <td className="px-4 py-2.5 text-center text-gray-600 border-b border-gray-100">{row.uv}</td>
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
    Frequently Asked Questions — Fiber Laser Marking Machine
  </h2>
  <div className="w-12 h-1 bg-blue-600 mt-1 mb-4 rounded" />
  <p className="text-sm text-gray-500 mb-5">
    Common questions about fiber laser marking machines, pricing, and operation in India.
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

          {/* ── RELATED KEYWORDS / LONG-TAIL SEO PARAGRAPH ── */}
          <div className="bg-white rounded-2xl p-6 shadow-md">
            <h2 className="text-xl font-semibold text-gray-800">Fiber Laser Marking Machine in India</h2>
            <div className="w-12 h-1 bg-blue-600 mt-1 mb-4 rounded" />
            <p className="text-gray-600 text-sm leading-relaxed">
              Looking for a <strong>fiber laser marking machine price in India</strong>? IndiaLaser offers
              the best fiber laser machines across all wattages — 20W, 30W, 50W, and 100W — suitable for
              small workshops to large-scale production facilities. Whether you need a{" "}
              <strong>fiber laser engraving machine for jewelry</strong>, a{" "}
              <strong>metal laser marking machine for automobile parts</strong>, or an{" "}
              <strong>industrial laser marking system for electronics</strong>, we have the right solution.
              Our machines are available in <strong>Delhi, Mumbai, Chennai, Bengaluru, Hyderabad, Pune,
                Ahmedabad</strong>, and all across India with quick delivery and dedicated after-sales support.
              Compare our fiber laser machines with CO2 and UV laser alternatives, or{" "}
              <Link href="/contact-us" className="text-blue-600 font-semibold hover:underline">
                contact our team
              </Link>{" "}
              for a customized quotation today.
            </p>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-blue-900 to-blue-600 rounded-2xl p-6 text-center text-white shadow-md">
            <h2 className="text-xl font-bold mb-2">Ready to Buy a Fiber Laser Marking Machine?</h2>
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