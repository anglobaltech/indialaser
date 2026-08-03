import Image from "next/image";
import Link from "next/link";
export const metadata = {  description: "Explore our high-quality Laser Welding Machines for precision metal joining. Ideal for automotive, aerospace, jewellery, and industrial applications across India. Get reliable, fast, and clean welds with our advanced laser welding solutions.",  
  title: "Laser Welding Machine - High-Precision Metal Joining Solutions in India",
};


export default function LaserWeldingPage() {
  

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
      name: "Laser Welding Machine",
      link: "/laser-machines/laser-welding-machine",
      image: "/laser-machines/laser-welding-machine.webp",
      active: true,
    },
  ];

  const specs = [
    { param: "Laser Source", value: "Fiber / YAG / Diode" },
    { param: "Wavelength", value: "1064 nm / 1080 nm" },
    { param: "Laser Power", value: "500W / 1000W / 1500W / 2000W / 3000W" },
    { param: "Welding Spot Size", value: "0.2 mm – 6 mm (Adjustable)" },
    { param: "Welding Speed", value: "Up to 120 mm/s (material dependent)" },
    { param: "Repeat Accuracy", value: "±0.03 mm" },
    { param: "Positioning System", value: "CCD Vision + XYZ Stage / Robotic Arm" },
    { param: "Cooling Method", value: "Water Cooling" },
    { param: "Power Supply", value: "380V / 50Hz (3-phase)" },
    { param: "Software", value: "Proprietary GUI / Compatible with CAD/CAM files" },
    { param: "Operating Life", value: "100,000+ hours (Fiber source)" },
    { param: "Warranty", value: "1 Year (Extendable)" },
  ];

  const whyUs = [
    { title: "Pan-India Service Network", desc: "Dedicated engineers available across major Indian cities." },
    { title: "Free Installation & Training", desc: "On-site setup and operator training included with purchase." },
    { title: "Genuine Imported Parts", desc: "High-quality laser sources and optics with verified authenticity." },
    { title: "Fast Delivery", desc: "Ready stock available; dispatch within 3–7 business days." },
    { title: "After-Sales Support", desc: "365-day support via call, WhatsApp, and remote diagnostics." },
  ];

  const faqs = [
  {
    q: "What is a Laser Welding Machine used for?",
    a: "It uses a high-intensity focused laser beam to precisely fuse metals or thermoplastics. It is widely used for high-precision joining in the automotive, aerospace, medical, electronics, and jewellery industries.",
  },
  {
    q: "What materials can a Laser Welding Machine work with?",
    a: "It works with stainless steel, mild steel, aluminium, titanium, copper, brass, gold, silver, and dissimilar metal combinations. Depending on laser power, it can weld sections from 0.1 mm to over 10 mm thick.",
  },
  {
    q: "What is the advantage of laser welding over traditional welding?",
    a: "Laser welding offers faster speeds, deeper penetration, and minimal heat distortion due to a narrow heat-affected zone. It is a non-contact process that can be fully automated and rarely requires filler material.",
  },
  {
    q: "What is the price of a Laser Welding Machine in India?",
    a: "Prices typically range from ₹5 Lakhs to ₹50 Lakhs. Handheld fiber laser welders generally cost between ₹5 Lakhs and ₹10 Lakhs, while automated industrial systems go higher. Contact us for a live demo and custom quote.",
  },
  {
    q: "Is laser welding suitable for thin sheets and precision parts?",
    a: "Yes. It excels at welding ultra-thin metal sheets (from 0.1 mm) and micro-components. The highly focused beam prevents delicate parts from warping, burning, or changing structural properties.",
  },
  {
    q: "Do you provide installation and training?",
    a: "Yes, IndiaLaser provides free on-site installation and comprehensive operator training with every machine purchase to ensure your production team can operate the system independently.",
  },
];

  const comparisonData = [
    { feature: "Process Type", laser: "Non-contact", tig: "Contact (Arc)", mig: "Contact (Wire Feed)" },
    { feature: "Heat Precision", laser: "Very High (spot-level)", tig: "Moderate", mig: "Low" },
    { feature: "Heat-Affected Zone", laser: "Very Narrow", tig: "Moderate", mig: "Wide" },
    { feature: "Distortion", laser: "Minimal", tig: "Moderate", mig: "High" },
    { feature: "Welding Speed", laser: "Very Fast", tig: "Slow", mig: "Moderate" },
    { feature: "Automation", laser: "Fully Automatable", tig: "Semi/Manual", mig: "Semi/Full Auto" },
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
                <span className="text-blue-600">Laser Welding Machine</span>
              </p>
            </nav>
            <h1 className="text-2xl font-bold text-gray-900 mt-1">
              Laser Welding Machine
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              High-precision laser welding for metal fabrication, automotive, jewellery & industrial manufacturing — non-contact, fast, and reliable
            </p>
          </div>

          {/* HERO IMAGE */}
          <div className="flex justify-center items-center w-full">
            <Image
              src="/laser-machines/laser welding.jpeg"
              alt="Laser Welding Machine by IndiaLaser"
              width={600}
              height={400}
              className="object-contain"
            />
          </div>

          {/* MAIN CONTENT CARD */}
          <div className="bg-white rounded-2xl p-6 shadow-md space-y-8">

            {/* ABOUT */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Laser Welding Machine</h2>
              <div className="w-10 h-0.5 bg-blue-600 mt-1 mb-4 rounded" />
              <p className="text-gray-600 text-sm leading-relaxed">
                Laser Welding Machines are advanced precision systems designed for high-quality, non-contact metal joining applications across modern manufacturing industries. These machines use a high-intensity focused laser beam to deliver controlled heat energy, creating strong, clean, and reliable welds with minimal thermal impact on surrounding material.

                Laser welding technology provides exceptional precision, narrow heat-affected zones, and consistent performance, making it ideal for complex and delicate metal assemblies. The process ensures deep penetration welds with minimal distortion, oxidation, and material deformation — even on thin sheets and intricate geometries.

                These machines are suitable for welding stainless steel, aluminium, titanium, copper, brass, gold, silver, tool steel, and dissimilar metals across a wide range of thicknesses. With programmable control systems and high-speed operation, Laser Welding Machines improve production efficiency, repeatability, and weld quality significantly.

                Laser Welding Machines are widely used in industries such as automotive, aerospace, jewellery manufacturing, medical devices, battery production, precision engineering, and sheet metal fabrication where accuracy, strength, and minimal distortion are essential requirements.
              </p>
            </div>

            {/* IMPORTED PRODUCTS */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Imported Products</h2>
              <div className="w-12 h-1 bg-blue-600 mt-1 mb-4 rounded" />
              <p className="text-gray-600 text-sm leading-relaxed">
                We offer a wide range of imported laser welding machines sourced from globally
                recognized manufacturers. These systems meet international quality standards
                and are ideal for precision metal welding where conventional TIG, MIG, or
                spot welding methods fall short. Our imported machines deliver highly focused
                energy, exceptional weld repeatability, and long operational life — making
                them the preferred choice for metal fabricators, OEMs, and precision
                manufacturers across India.
              </p>
            </div>

            {/* FEATURES */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Features of Laser Welding Machine</h2>
              <div className="w-12 h-1 bg-blue-600 mt-1 mb-4 rounded" />
              <ul className="list-disc pl-5 text-gray-600 text-sm space-y-2">
                <li>Non-contact welding process — zero mechanical stress, no electrode wear</li>
                <li>Highly focused laser spot for deep penetration and narrow weld bead</li>
                <li>CCD vision alignment system for automatic joint detection and positioning</li>
                <li>Programmable energy and pulse profiles — precisely control heat input per joint</li>
                <li>Compatible with butt, lap, fillet, spot, and seam welding configurations</li>
                <li>Real-time power monitoring and closed-loop control for consistent weld quality</li>
                <li>Fully automatable — integrates with robotic arms, XYZ stages, and conveyor systems</li>
                <li>Compatible with dissimilar metals and reflective materials including copper and aluminium</li>
              </ul>
            </div>

            {/* ADVANTAGES */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Advantages</h2>
              <div className="w-12 h-1 bg-blue-600 mt-1 mb-4 rounded" />
              <ul className="list-disc pl-5 text-gray-600 text-sm space-y-2">
                <li>Minimal heat-affected zone (HAZ) — drastically reduces warping and distortion</li>
                <li>Consistent, repeatable weld quality — ideal for high-reliability and regulated industries</li>
                <li>No filler material required for many applications — cleaner, faster, cost-effective</li>
                <li>Extremely high weld strength with fine, aesthetically clean bead appearance</li>
                <li>High-speed welding cycle — significantly faster than TIG or conventional arc welding</li>
                <li>Suitable for thin materials (0.1 mm+), exotic alloys, and reflective metals</li>
              </ul>
            </div>

            {/* WORKING */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800">How a Laser Welding Machine Works</h2>
              <div className="w-12 h-1 bg-blue-600 mt-1 mb-4 rounded" />
              <p className="text-gray-600 text-sm leading-relaxed">
                A laser welding machine focuses a high-powered laser beam — typically fiber or YAG — onto
                the metal workpiece at the joint area. The concentrated energy rapidly heats the metal
                beyond its melting point, forming a molten pool that fuses the two surfaces together.
                As the laser moves along the weld path, the molten pool solidifies behind it, creating
                a strong metallurgical bond. The entire process is governed by programmable power ramp
                profiles and pulse control, ensuring optimal penetration and fusion without burning
                through or excessively heating the surrounding base material. CCD vision systems
                and XYZ or robotic positioning guide the beam precisely along the joint coordinates
                for fully automated or semi-automated production.
              </p>
            </div>

            {/* TYPES */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Types of Laser Welding Machines</h2>
              <div className="w-12 h-1 bg-blue-600 mt-1 mb-4 rounded" />
              <ul className="list-disc pl-5 text-gray-600 text-sm space-y-2">
                <li><strong>Handheld Fiber Laser Welding Machine</strong> — Portable, operator-guided unit for on-site, repair, and flexible production welding</li>
                <li><strong>Desktop / Benchtop Laser Welder</strong> — Compact unit for jewellery, dental, and small precision component welding</li>
                <li><strong>Automatic CNC Laser Welding Machine</strong> — XYZ-stage controlled system for high-precision seam and contour welding</li>
                <li><strong>Robotic Laser Welding System</strong> — 6-axis robot arm with laser head for 3D weld paths and large assemblies</li>
                <li><strong>Inline / Continuous Laser Welding Machine</strong> — Conveyor-integrated system for high-volume production line welding</li>
                <li><strong>Pulse / Spot Laser Welding Machine</strong> — Pulsed YAG or fiber laser for spot welds, thin foils, and delicate micro-welding</li>
              </ul>
            </div>

            {/* APPLICATIONS */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Applications</h2>
              <div className="w-12 h-1 bg-blue-600 mt-1 mb-4 rounded" />
              <ul className="list-disc pl-5 text-gray-600 text-sm space-y-2">
                <li>Automotive — body panels, exhaust systems, gear components, sensor housings, battery modules</li>
                <li>Aerospace & defence — structural joints, turbine components, and high-reliability assemblies</li>
                <li>Jewellery manufacturing — gold, silver, and platinum ring sizing, repairs, and fine detailing</li>
                <li>Medical devices — surgical instruments, implants, catheter assemblies, and device housings</li>
                <li>Sheet metal fabrication — thin-wall enclosures, frames, brackets, and industrial assemblies</li>
                <li>Battery & energy — lithium cell tab welding, battery pack assembly, and EV module manufacturing</li>
                <li>Moulds & tooling — mould repair, die repair, and tool steel welding without distortion</li>
              </ul>
            </div>
          </div>

          {/* ── TECHNICAL SPECIFICATIONS ── */}
          <div className="bg-white rounded-2xl p-6 shadow-md">
            <h2 className="text-xl font-semibold text-gray-800">Technical Specifications</h2>
            <div className="w-12 h-1 bg-blue-600 mt-1 mb-4 rounded" />
            <p className="text-sm text-gray-500 mb-4">
              Standard specifications for our 500W–3000W Laser Welding Machines. Custom configurations available on request.
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

          {/* ── WELDING METHOD COMPARISON ── */}
          <div className="bg-white rounded-2xl p-6 shadow-md">
            <h2 className="text-xl font-semibold text-gray-800">Laser vs TIG vs MIG Welding — Which is Right for You?</h2>
            <div className="w-12 h-1 bg-blue-600 mt-1 mb-4 rounded" />
            <p className="text-sm text-gray-500 mb-4">
              Understanding the differences helps you choose the best welding technology for your production requirements.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-800 text-white">
                    <th className="text-left px-4 py-2.5 rounded-tl-lg">Feature</th>
                    <th className="text-center px-4 py-2.5 bg-blue-600">Laser Welding ✓</th>
                    <th className="text-center px-4 py-2.5">TIG Welding</th>
                    <th className="text-center px-4 py-2.5 rounded-tr-lg">MIG Welding</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-4 py-2.5 text-gray-700 font-medium border-b border-gray-100">{row.feature}</td>
                      <td className="px-4 py-2.5 text-center text-blue-700 font-semibold border-b border-gray-100 bg-blue-50">{row.laser}</td>
                      <td className="px-4 py-2.5 text-center text-gray-600 border-b border-gray-100">{row.tig}</td>
                      <td className="px-4 py-2.5 text-center text-gray-600 border-b border-gray-100">{row.mig}</td>
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
    Frequently Asked Questions — Laser Welding Machine
  </h2>
  <div className="w-12 h-1 bg-blue-600 mt-1 mb-4 rounded" />
  <p className="text-sm text-gray-500 mb-5">
    Common questions about laser welding machines, pricing, and operation in India.
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
                { title: "Export-Grade Packing", desc: "Foam-padded wooden crates with anti-static and shock-absorbing material" },
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
            <h2 className="text-xl font-semibold text-gray-800">Laser Welding Machine in India</h2>
            <div className="w-12 h-1 bg-blue-600 mt-1 mb-4 rounded" />
            <p className="text-gray-600 text-sm leading-relaxed">
              Looking for a <strong>laser welding machine price in India</strong>? IndiaLaser offers
              the best laser welding systems across all power levels — 500W, 1000W, 1500W, 2000W, and 3000W — suitable for
              small fabrication shops to large-scale industrial manufacturing facilities. Whether you need a{" "}
              <strong>handheld fiber laser welding machine for on-site repairs</strong>, a{" "}
              <strong>desktop laser welder for jewellery and dental labs</strong>, or an{" "}
              <strong>automated robotic laser welding system for high-volume production</strong>, we have the right solution.
              Our machines are available in <strong>Delhi, Mumbai, Chennai, Bengaluru, Hyderabad, Pune,
                Ahmedabad</strong>, and all across India with quick delivery and dedicated after-sales support.
              Compare our laser welding machines with conventional TIG and MIG alternatives, or{" "}
              <Link href="/contact-us" className="text-blue-600 font-semibold hover:underline">
                contact our team
              </Link>{" "}
              for a customized quotation today.
            </p>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-blue-900 to-blue-600 rounded-2xl p-6 text-center text-white shadow-md">
            <h2 className="text-xl font-bold mb-2">Ready to Buy a Laser Welding Machine?</h2>
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