
import Image from "next/image";
import Link from "next/link";
export const metadata = { title: "Laser Soldering Machine - High-Precision PCB Soldering Solutions in India", 
  description: "Explore our advanced Laser Soldering Machines for precise PCB assembly. Ideal for electronics manufacturing, BGA rework, and fine-pitch soldering. Get reliable, non-contact soldering solutions with free installation and support across India.",
};

export default function LaserSolderingPage() {
  

  const machines = [
    {
      name: "Fiber Laser Marking Machine",
      link: "/laser-machines/laser-marking-machine/fiber-laser",
      image: "/laser-machines/fiber-laser-machine.webp",
    },
    {
      name: "CO2 Laser Marking Machine",
      link: "/laser-machines/co2-laser",
      image: "/laser-machines/co2-laser-marking.webp",
    },
    {
      name: "UV Laser Marking Machine",
      link: "/laser-machines/laser-marking-machine/uv-laser",
      image: "/laser-machines/uv-marking-machine.webp",
    },
    {
      name: "Laser Soldering Machine",
      link: "/laser-machines/soldering",
      image: "/laser-machines/laser-soldering-machine.webp",
      active: true,
    },
  ];

  const specs = [
    { param: "Laser Source", value: "Fiber / Diode / YAG" },
    { param: "Wavelength", value: "808 nm / 980 nm / 1064 nm" },
    { param: "Laser Power", value: "20W / 50W / 100W / 200W" },
    { param: "Soldering Spot Size", value: "0.3 mm – 5 mm (Adjustable)" },
    { param: "Soldering Speed", value: "Up to 500 mm/s" },
    { param: "Repeat Accuracy", value: "±0.02 mm" },
    { param: "Positioning System", value: "CCD Vision + Galvo / XYZ Stage" },
    { param: "Cooling Method", value: "Air Cooling / Water Cooling" },
    { param: "Power Supply", value: "220V / 50Hz" },
    { param: "Software", value: "Proprietary GUI / Compatible with CAD files" },
    { param: "Operating Life", value: "50,000+ hours (Diode source)" },
    { param: "Warranty", value: "1 Year (Extendable)" },
  ];

  const whyUs = [
    { title: "Pan-India Service Network", desc: "Dedicated engineers available across major Indian cities." },
    { title: "Free Installation & Training", desc: "On-site setup and operator training included with purchase." },
    { title: "Genuine Imported Parts", desc: "High-quality laser sources and optics with verified authenticity." },
    { title: "Fast Delivery", desc: "Ready stock available; dispatch within 3–7 business days." },
    { title: "After-Sales Support", desc: "365-day support via call, WhatsApp, and remote diagnostics." },
  ];

  const faqs =[
  {
    q: "What is a Laser Soldering Machine used for?",
    a: "It uses a focused laser beam to melt solder and create precise electrical connections on PCBs, SMD components, BGA chips, and micro-assemblies. It is widely used in high-end electronics manufacturing, aerospace, and automotive industries.",
  },
  {
    q: "What materials can a Laser Soldering Machine work with?",
    a: "It is compatible with standard solder alloys (lead-free, Sn-Ag-Cu, and Sn-Pb) across FR4, ceramic, flexible PCBs, and rigid-flex assemblies. It easily handles SMD, THT, BGA, and fine-pitch components.",
  },
  {
    q: "What is the advantage of laser soldering over traditional soldering?",
    a: "Laser soldering is a non-contact process providing highly localized heat. This minimizes thermal stress on adjacent parts, prevents mechanical damage, eliminates flux splatter, and delivers ultra-precise joints for dense electronics.",
  },
  {
    q: "What is the price of a Laser Soldering Machine in India?",
    a: "Prices generally range from ₹3 Lakhs to ₹25 Lakhs. The total cost depends on laser power output, CCD vision alignment, and the level of system automation. Contact us for a live demo and custom quote.",
  },
  {
    q: "Is laser soldering suitable for BGA and fine-pitch components?",
    a: "Yes. It excels at fine-pitch IC soldering and BGA rework. The highly adjustable laser spot selectively heats a single connection without overheating or shifting neighboring components.",
  },
  {
    q: "Do you provide installation and training?",
    a: "Yes, IndiaLaser provides free on-site installation, system calibration, and complete operator training with every purchase to ensure your production team runs the machine independently.",
  },
]

  const comparisonData = [
    { feature: "Process Type", laser: "Non-contact", iron: "Contact", reflow: "Batch/Oven" },
    { feature: "Heat Precision", laser: "Very High (spot-level)", iron: "Moderate", reflow: "Low (whole board)" },
    { feature: "Component Risk", laser: "Minimal", iron: "Moderate", reflow: "High (heat soak)" },
    { feature: "Speed", laser: "Fast (single joint)", iron: "Slow", reflow: "Fast (batch)" },
    { feature: "Suitable for BGA", laser: "Yes", iron: "No", reflow: "Partial" },
    { feature: "Automation", laser: "Fully Automatable", iron: "Manual", reflow: "Semi/Full Auto" },
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
                <span className="text-blue-600">Laser Soldering Machine</span>
              </p>
            </nav>
            <h1 className="text-2xl font-bold text-gray-900 mt-1">
              Laser Soldering Machine
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              High-precision laser soldering for PCB, SMD, BGA & fine-pitch electronics — non-contact, fast, and reliable
            </p>
          </div>

          {/* HERO IMAGE */}
          <div className="flex justify-center items-center w-full">
            <Image
              src="/laser-machines/laser soldering(2).png"
              alt="Laser Soldering Machine by IndiaLaser"
              width={600}
              height={400}
              className="object-contain"
            />
          </div>

          {/* MAIN CONTENT CARD */}
          <div className="bg-white rounded-2xl p-6 shadow-md space-y-8">

            {/* ABOUT */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Laser Soldering Machine</h2>
              <div className="w-10 h-0.5 bg-blue-600 mt-1 mb-4 rounded" />
              <p className="text-gray-600 text-sm leading-relaxed">
                Laser Soldering Machines are advanced precision systems designed for high-quality, contact-free soldering applications in modern manufacturing industries. These machines use a focused laser beam to deliver controlled heat energy for accurate and reliable soldering with minimal thermal impact on surrounding components.

                Laser soldering technology provides excellent precision, clean joints, and consistent performance, making it ideal for delicate and complex electronic assemblies. The process ensures strong solder connections while reducing the risk of component damage, oxidation, and material deformation.

                These machines are suitable for soldering electronic components, circuit boards, connectors, sensors, wires, batteries, medical devices, and precision instruments. With programmable control systems and high-speed operation, Laser Soldering Machines improve production efficiency, repeatability, and product quality.

                Laser Soldering Machines are widely used in industries such as electronics manufacturing, automotive electronics, telecommunications, medical equipment, aerospace, battery production, and precision engineering where accuracy, reliability, and clean soldering are essential.
              </p>
            </div>

            {/* IMPORTED PRODUCTS */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Imported Products</h2>
              <div className="w-12 h-1 bg-blue-600 mt-1 mb-4 rounded" />
              <p className="text-gray-600 text-sm leading-relaxed">
                We offer a wide range of imported laser soldering machines sourced from globally
                recognized manufacturers. These systems meet international quality standards
                and are ideal for precision electronics soldering where conventional soldering
                methods fall short. Our imported machines deliver highly focused energy delivery,
                exceptional repeatability, and long operational life — making them the preferred
                choice for electronics manufacturers and OEMs across India.
              </p>
            </div>

            {/* FEATURES */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Features of Laser Soldering Machine</h2>
              <div className="w-12 h-1 bg-blue-600 mt-1 mb-4 rounded" />
              <ul className="list-disc pl-5 text-gray-600 text-sm space-y-2">
                <li>Non-contact soldering process — zero mechanical stress on components</li>
                <li>Highly focused laser spot (as small as 0.3 mm) for micro-precision soldering</li>
                <li>CCD vision alignment system for automatic component detection and positioning</li>
                <li>Programmable energy profiles — precisely control heat input for each joint</li>
                <li>Compatible with SMD, THT, BGA, QFN, and connector soldering</li>
                <li>Real-time temperature monitoring and closed-loop control</li>
                <li>Fully automatable — integrates with conveyor lines and robotic systems</li>
                <li>Compatible with lead-free and leaded solder alloys</li>
              </ul>
            </div>

            {/* ADVANTAGES */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Advantages</h2>
              <div className="w-12 h-1 bg-blue-600 mt-1 mb-4 rounded" />
              <ul className="list-disc pl-5 text-gray-600 text-sm space-y-2">
                <li>Selective heating eliminates thermal damage to adjacent sensitive components</li>
                <li>Consistent, repeatable joint quality — ideal for high-reliability applications</li>
                <li>No physical contact means no tool wear, contamination, or tip replacement costs</li>
                <li>Extremely low flux consumption; reduced cleaning requirements post-soldering</li>
                <li>High-speed soldering cycle — significantly faster than manual iron soldering</li>
                <li>Suitable for thermally sensitive substrates including flex PCBs and ceramics</li>
              </ul>
            </div>

            {/* WORKING */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800">How a Laser Soldering Machine Works</h2>
              <div className="w-12 h-1 bg-blue-600 mt-1 mb-4 rounded" />
              <p className="text-gray-600 text-sm leading-relaxed">
                A laser soldering machine delivers a precisely focused laser beam onto a solder
                joint or solder paste deposit. The laser energy is absorbed by the solder and
                surrounding pad, raising the temperature above the solder's melting point within
                milliseconds. The solder flows and wets the component lead or pad, forming a
                reliable metallurgical bond upon cooling. The entire process is controlled by
                programmable power ramp profiles, ensuring optimal heat delivery without
                overheating the PCB substrate or neighboring components. CCD vision systems
                guide the beam to the exact joint coordinates for fully automated or
                semi-automated operation.
              </p>
            </div>

            {/* TYPES */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Types of Laser Soldering Machines</h2>
              <div className="w-12 h-1 bg-blue-600 mt-1 mb-4 rounded" />
              <ul className="list-disc pl-5 text-gray-600 text-sm space-y-2">
                <li><strong>Desktop Laser Soldering Machine</strong> — Compact benchtop unit for lab, R&D, and small-volume production</li>
                <li><strong>Inline Laser Soldering Machine</strong> — Conveyor-integrated system for high-volume SMT production lines</li>
                <li><strong>Robotic Laser Soldering System</strong> — 6-axis robot arm with laser head for complex 3D soldering paths</li>
                <li><strong>BGA Laser Rework Station</strong> — Specialized system for BGA chip removal, reballing, and reattachment</li>
                <li><strong>Galvo Laser Soldering Machine</strong> — High-speed galvo scanning for rapid multi-joint soldering</li>
                <li><strong>Handheld / Semi-Auto Laser Soldering Gun</strong> — Portable unit for rework and repair applications</li>
              </ul>
            </div>

            {/* APPLICATIONS */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Applications</h2>
              <div className="w-12 h-1 bg-blue-600 mt-1 mb-4 rounded" />
              <ul className="list-disc pl-5 text-gray-600 text-sm space-y-2">
                <li>PCB assembly — SMD and THT component soldering on rigid and flexible boards</li>
                <li>BGA and CSP rework — chip-level removal, reballing, and reattachment</li>
                <li>Automotive electronics — ECU, sensor module, and connector assembly</li>
                <li>Aerospace & defense — high-reliability soldering for mission-critical electronics</li>
                <li>Medical devices — precision soldering for implantable and diagnostic electronics</li>
                <li>Consumer electronics — camera modules, wearables, and micro-assemblies</li>
                <li>LED & lighting — LED array bonding and driver board assembly</li>
              </ul>
            </div>
          </div>

          {/* ── TECHNICAL SPECIFICATIONS ── */}
          <div className="bg-white rounded-2xl p-6 shadow-md">
            <h2 className="text-xl font-semibold text-gray-800">Technical Specifications</h2>
            <div className="w-12 h-1 bg-blue-600 mt-1 mb-4 rounded" />
            <p className="text-sm text-gray-500 mb-4">
              Standard specifications for our 20W–200W Laser Soldering Machines. Custom configurations available on request.
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

          {/* ── SOLDERING METHOD COMPARISON ── */}
          <div className="bg-white rounded-2xl p-6 shadow-md">
            <h2 className="text-xl font-semibold text-gray-800">Laser vs Soldering Iron vs Reflow — Which is Right for You?</h2>
            <div className="w-12 h-1 bg-blue-600 mt-1 mb-4 rounded" />
            <p className="text-sm text-gray-500 mb-4">
              Understanding the differences helps you choose the best soldering technology for your production requirements.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-800 text-white">
                    <th className="text-left px-4 py-2.5 rounded-tl-lg">Feature</th>
                    <th className="text-center px-4 py-2.5 bg-blue-600">Laser Soldering ✓</th>
                    <th className="text-center px-4 py-2.5">Soldering Iron</th>
                    <th className="text-center px-4 py-2.5 rounded-tr-lg">Reflow Oven</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-4 py-2.5 text-gray-700 font-medium border-b border-gray-100">{row.feature}</td>
                      <td className="px-4 py-2.5 text-center text-blue-700 font-semibold border-b border-gray-100 bg-blue-50">{row.laser}</td>
                      <td className="px-4 py-2.5 text-center text-gray-600 border-b border-gray-100">{row.iron}</td>
                      <td className="px-4 py-2.5 text-center text-gray-600 border-b border-gray-100">{row.reflow}</td>
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
    Frequently Asked Questions — Laser Soldering Machine
  </h2>
  <div className="w-12 h-1 bg-blue-600 mt-1 mb-4 rounded" />
  <p className="text-sm text-gray-500 mb-5">
    Common questions about laser soldering machines, pricing, and operation in India.
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
            <h2 className="text-xl font-semibold text-gray-800">Laser Soldering Machine in India</h2>
            <div className="w-12 h-1 bg-blue-600 mt-1 mb-4 rounded" />
            <p className="text-gray-600 text-sm leading-relaxed">
              Looking for a <strong>laser soldering machine price in India</strong>? IndiaLaser offers
              the best laser soldering systems across all power levels — 20W, 50W, 100W, and 200W — suitable for
              small electronics workshops to large-scale PCB manufacturing facilities. Whether you need a{" "}
              <strong>desktop laser soldering machine for PCB rework</strong>, an{" "}
              <strong>inline laser soldering system for SMT lines</strong>, or an{" "}
              <strong>automated laser soldering robot for high-volume production</strong>, we have the right solution.
              Our machines are available in <strong>Delhi, Mumbai, Chennai, Bengaluru, Hyderabad, Pune,
                Ahmedabad</strong>, and all across India with quick delivery and dedicated after-sales support.
              Compare our laser soldering machines with conventional iron and reflow alternatives, or{" "}
              <Link href="/contact-us" className="text-blue-600 font-semibold hover:underline">
                contact our team
              </Link>{" "}
              for a customized quotation today.
            </p>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-blue-900 to-blue-600 rounded-2xl p-6 text-center text-white shadow-md">
            <h2 className="text-xl font-bold mb-2">Ready to Buy a Laser Soldering Machine?</h2>
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