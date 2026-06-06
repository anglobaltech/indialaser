
import Image from "next/image";
import Link from "next/link";
export const metadata = { title: "CO2 Laser Marking Machine - High-Quality Non-Metal Engraving Solutions in India",   
  description: "Discover our high-performance CO2 Laser Marking Machine for precise engraving and cutting on wood, acrylic, leather, and non-metal materials. Ideal for packaging, handicrafts, signage, and textile industries across India. Get reliable and cost-effective laser marking solutions with IndiaLaser.",
};

export default function CO2LaserPage() {
  

  const machines = [
    {
      name: "Fiber Laser Marking Machine",
      link: "/laser-machines/laser-marking-machine/fiber-laser",
      image: "/laser-machines/fiber-laser-machine.webp",
    },
    {
      name: "CO2 Laser Marking Machine",
      link: "/laser-machines/laser-marking-machine/co2-laser",
      image: "/laser-machines/co2-laser-marking.webp",
      active: true,
    },
    {
      name: "UV Laser Marking Machine",
      link: "/laser-machines/laser-marking-machine/uv-laser",
      image: "/laser-machines/uv-marking-machine.webp",
    },
  ];

  const specs = [
    { param: "Laser Source", value: "CO2 Glass / RF Metal Tube" },
    { param: "Wavelength", value: "10,600 nm" },
    { param: "Laser Power", value: "30W / 60W / 80W / 100W / 150W" },
    { param: "Marking / Work Area", value: "300×300 mm to 1300×900 mm" },
    { param: "Marking Speed", value: "Up to 3000 mm/s" },
    { param: "Repeat Accuracy", value: "±0.01 mm" },
    { param: "Beam Quality (M²)", value: "< 1.3" },
    { param: "Cooling Method", value: "Water Cooling / Air Cooling" },
    { param: "Power Supply", value: "220V / 50Hz" },
    { param: "Software", value: "LaserCAD / LightBurn Compatible" },
    { param: "Operating Life (RF)", value: "45,000+ hours" },
    { param: "Warranty", value: "1 Year (Extendable)" },
  ];

  const whyUs = [
    { title: "Pan-India Service Network", desc: "Dedicated engineers available across major Indian cities." },
    { title: "Free Installation & Training", desc: "On-site setup and operator training included with purchase." },
    { title: "Genuine Imported Parts", desc: "High-quality RF and glass CO2 tubes with verified authenticity." },
    { title: "Fast Delivery", desc: "Ready stock available; dispatch within 3–7 business days." },
    { title: "After-Sales Support", desc: "365-day support via call, WhatsApp, and remote diagnostics." },
  ];

  const faqs = [
  {
    q: "What is a CO2 Laser Marking Machine used for?",
    a: "It is used to permanently engrave, mark, and cut non-metallic materials like wood, acrylic, leather, glass, paper, and textiles. It is widely utilized in the packaging, advertising, handicrafts, and garment industries.",
  },
  {
    q: "What materials can a CO2 Laser mark or cut?",
    a: "It excels on organic, non-metal substrates including wood, MDF, acrylic, leather, fabrics, rubber, glass, and cardboard. It can also mark anodized or specially coated metals.",
  },
  {
    q: "How long does a CO2 Laser tube last?",
    a: "Standard glass CO2 tubes last between 3,000 and 8,000 hours. Premium RF metal tubes last over 45,000 hours, provide finer beam quality, and can be refilled for long-term industrial manufacturing.",
  },
  {
    q: "What is the price of a CO2 Laser Marking Machine in India?",
    a: "Prices generally range from ₹80,000 to ₹5 Lakhs. The total cost is determined by laser power (30W–150W), the choice between a glass or RF tube, and the working bed size. Contact us for a custom quote.",
  },
  {
    q: "Is the CO2 Laser Machine suitable for small businesses?",
    a: "Yes. Due to its affordability, ease of operation, and material versatility, it is a top choice for startups, small workshops, and gift shops specializing in custom engraving and signage.",
  },
  {
    q: "Do you provide installation and training?",
    a: "Yes, IndiaLaser offers free on-site machine setup, laser power optimization, and software training with every purchase to make sure your team runs production independently.",
  },
];
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
                <span className="text-blue-600">CO2 Laser Marking Machine</span>
              </p>
            </nav>
            <h1 className="text-2xl font-bold text-gray-900 mt-1">
              CO2 Laser Marking Machine
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              High-performance CO2 laser for engraving, cutting & marking on wood, acrylic, leather & non-metals
            </p>
          </div>

          {/* HERO IMAGE */}
          <div className="flex justify-center items-center w-full">
            <Image
              src="/laser-machines/co2 laser machine(1).png"
              alt="CO2 Laser Marking Machine by IndiaLaser"
              width={600}
              height={400}
              className="object-contain"
            />
          </div>

          {/* MAIN CONTENT CARD */}
          <div className="bg-white rounded-2xl p-6 shadow-md space-y-8">

            {/* ABOUT */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800">CO2 Laser Marking Machine</h2>
              <div className="w-10 h-0.5 bg-blue-600 mt-1 mb-4 rounded" />
              <p className="text-gray-600 text-sm leading-relaxed">
                CO2 Laser Marking Machines are high-performance laser systems specially designed for marking, engraving, and coding on non-metal and organic materials. These machines use a carbon dioxide laser beam with a wavelength of 10.6 μm to create clean, precise, and permanent markings with excellent clarity and speed.

                CO2 laser technology is widely preferred for applications involving wood, acrylic, leather, rubber, paper, glass, fabric, packaging materials, plastics, and other non-metal surfaces. The laser produces smooth and detailed results without direct contact, making the process efficient, reliable, and maintenance-friendly.

                These machines are ideal for engraving logos, serial numbers, barcodes, QR codes, product details, branding graphics, and decorative patterns. CO2 laser marking systems deliver consistent performance with high-speed operation and minimal material damage, making them suitable for both industrial production and customized applications.

                CO2 Laser Marking Machines are extensively used in industries such as packaging, handicrafts, footwear, textiles, advertising, electronics, food processing, pharmaceuticals, and gift manufacturing due to their versatility, precision, and cost-effective operation.
              </p>
            </div>

            {/* IMPORTED PRODUCTS */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Imported Products</h2>
              <div className="w-12 h-1 bg-blue-600 mt-1 mb-4 rounded" />
              <p className="text-gray-600 text-sm leading-relaxed">
                We offer a wide range of imported CO2 laser machines sourced from globally
                recognized manufacturers. These products meet international quality standards
                and are ideal for precision engraving and cutting on non-metal materials. Our
                imported machines deliver superior beam quality, high engraving speed, and
                outstanding durability — making them the preferred choice for businesses across
                India.
              </p>
            </div>

            {/* FEATURES */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Features of CO2 Laser Machine</h2>
              <div className="w-12 h-1 bg-blue-600 mt-1 mb-4 rounded" />
              <ul className="list-disc pl-5 text-gray-600 text-sm space-y-2">
                <li>Best suited for non-metal materials — wood, acrylic, leather, glass, fabric</li>
                <li>High-speed engraving up to 3,000 mm/s for increased productivity</li>
                <li>Precise and smooth marking output with excellent beam quality (M² &lt;1.3)</li>
                <li>Compact design with user-friendly LaserCAD / LightBurn software</li>
                <li>Supports engraving, cutting, and marking in a single machine</li>
                <li>Compatible with bitmap images, vectors, text, barcodes, and QR codes</li>
                <li>Compatible with Windows 7 / 10 / 11 operating systems</li>
              </ul>
            </div>

            {/* ADVANTAGES */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Advantages</h2>
              <div className="w-12 h-1 bg-blue-600 mt-1 mb-4 rounded" />
              <ul className="list-disc pl-5 text-gray-600 text-sm space-y-2">
                <li>Cost-effective for bulk production and high-volume engraving jobs</li>
                <li>Non-contact process ensures zero material damage or mechanical stress</li>
                <li>Permanent, high-contrast, and aesthetically clean marks</li>
                <li>Low operating cost with minimal consumables required</li>
                <li>Eco-friendly process — no ink, chemicals, or solvents needed</li>
                <li>Versatile — handles both engraving and cutting on a wide range of materials</li>
              </ul>
            </div>

            {/* WORKING */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800">How a CO2 Laser Marking Machine Works</h2>
              <div className="w-12 h-1 bg-blue-600 mt-1 mb-4 rounded" />
              <p className="text-gray-600 text-sm leading-relaxed">
                A CO2 laser marking machine generates a laser beam by electrically exciting
                a mixture of carbon dioxide and other gases inside a sealed tube. The resulting
                10,600 nm infrared beam is reflected through mirrors and focused via a lens onto
                the material surface. The concentrated heat vaporizes or ablates the top layer of
                the material, producing a clean and permanent engraving or cut. The beam path is
                controlled digitally via a galvo scanning system or gantry mechanism, ensuring
                precise positioning and full repeatability across every job.
              </p>
            </div>

            {/* TYPES */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Types of CO2 Laser Marking Machines</h2>
              <div className="w-12 h-1 bg-blue-600 mt-1 mb-4 rounded" />
              <ul className="list-disc pl-5 text-gray-600 text-sm space-y-2">
                <li><strong>Desktop CO2 Laser Engraving Machine</strong> — Compact, ideal for small workshops, home studios, and labs</li>
                <li><strong>CO2 Laser Cutting Machine</strong> — Large-format cutting for acrylic, wood, MDF, and fabric panels</li>
                <li><strong>Galvo CO2 Laser Marking Machine</strong> — High-speed galvo head for fast batch marking on small parts</li>
                <li><strong>Enclosed CO2 Laser System</strong> — Fully enclosed cabinet design for safety compliance in production lines</li>
                <li><strong>RF CO2 Laser Machine</strong> — Metal RF tube for longer life and higher duty cycle in industrial environments</li>
                <li><strong>Large Bed CO2 Laser Machine (1300×900 mm)</strong> — Wide-format engraving and cutting for signage and furniture</li>
              </ul>
            </div>

            {/* APPLICATIONS */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Applications</h2>
              <div className="w-12 h-1 bg-blue-600 mt-1 mb-4 rounded" />
              <ul className="list-disc pl-5 text-gray-600 text-sm space-y-2">
                <li>Wood and handicraft engraving — furniture, photo frames, decorative items</li>
                <li>Acrylic cutting and marking — signage, display boards, awards</li>
                <li>Leather industry — bags, belts, shoes, wallets, and garments</li>
                <li>Packaging and labeling — cardboard boxes, paper bags, corrugated sheets</li>
                <li>Advertising and signage — banners, name boards, PVC flex</li>
                <li>Textile and fabric — jeans washing effect, pattern cutting, branding</li>
                <li>Glass and ceramics — trophy engraving, bottle marking, tile decoration</li>
              </ul>
            </div>
          </div>

          {/* ── TECHNICAL SPECIFICATIONS ── */}
          <div className="bg-white rounded-2xl p-6 shadow-md">
            <h2 className="text-xl font-semibold text-gray-800">Technical Specifications</h2>
            <div className="w-12 h-1 bg-blue-600 mt-1 mb-4 rounded" />
            <p className="text-sm text-gray-500 mb-4">
              Standard specifications for our 30W–150W CO2 Laser Marking Machines. Custom configurations available on request.
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
            <h2 className="text-xl font-semibold text-gray-800">CO2 vs Fiber vs UV Laser — Which is Right for You?</h2>
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
                    <th className="text-center px-4 py-2.5 bg-blue-600">CO2 Laser ✓</th>
                    <th className="text-center px-4 py-2.5 rounded-tr-lg">UV Laser</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-4 py-2.5 text-gray-700 font-medium border-b border-gray-100">{row.feature}</td>
                      <td className="px-4 py-2.5 text-center text-gray-600 border-b border-gray-100">{row.fiber}</td>
                      <td className="px-4 py-2.5 text-center text-blue-700 font-semibold border-b border-gray-100 bg-blue-50">{row.co2}</td>
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
    Frequently Asked Questions — CO2 Laser Marking Machine
  </h2>
  <div className="w-12 h-1 bg-blue-600 mt-1 mb-4 rounded" />
  <p className="text-sm text-gray-500 mb-5">
    Common questions about CO2 laser marking machines, pricing, and operation in India.
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
            <h2 className="text-xl font-semibold text-gray-800">CO2 Laser Marking Machine in India</h2>
            <div className="w-12 h-1 bg-blue-600 mt-1 mb-4 rounded" />
            <p className="text-gray-600 text-sm leading-relaxed">
              Looking for a <strong>CO2 laser marking machine price in India</strong>? IndiaLaser offers
              the best CO2 laser machines across all wattages — 30W, 60W, 80W, 100W, and 150W — suitable for
              small workshops to large-scale production facilities. Whether you need a{" "}
              <strong>CO2 laser engraving machine for wood and acrylic</strong>, a{" "}
              <strong>laser cutting machine for leather and fabric</strong>, or an{" "}
              <strong>industrial CO2 laser system for packaging and signage</strong>, we have the right solution.
              Our machines are available in <strong>Delhi, Mumbai, Chennai, Bengaluru, Hyderabad, Pune,
                Ahmedabad</strong>, and all across India with quick delivery and dedicated after-sales support.
              Compare our CO2 laser machines with Fiber and UV laser alternatives, or{" "}
              <Link href="/contact-us" className="text-blue-600 font-semibold hover:underline">
                contact our team
              </Link>{" "}
              for a customized quotation today.
            </p>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-blue-900 to-blue-600 rounded-2xl p-6 text-center text-white shadow-md">
            <h2 className="text-xl font-bold mb-2">Ready to Buy a CO2 Laser Marking Machine?</h2>
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