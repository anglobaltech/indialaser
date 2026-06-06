
import Image from "next/image";
import Link from "next/link";
export const metadata = {   title: "XRF Gold Testing Equipment in India",                      
  description: "Discover our high-quality XRF Gold Testing Machine for precise gold purity analysis. Ideal for laboratories, refineries, and hallmarking centers across India. Get accurate results with our reliable XRF solutions.",    
};



export default function XRFGoldMachinePage() {

  
  const machines = [
    {
      name: "XRF Gold Testing Machine",
      link: "/other-products/gold-testing-equiments/xrf-machine",
      image: "/laser-machines/xrf-gold file.png",
      active: true,
    },

  ];

  const specs = [
    { param: "Technology", value: "X-Ray Fluorescence (XRF)" },
    { param: "X-Ray Tube", value: "Mini X-Ray Tube (Ag / Rh / W target)" },
    { param: "Detector", value: "High-Resolution SDD (Silicon Drift Detector)" },
    { param: "Measurable Elements", value: "Au, Ag, Pt, Pd, Cu, Zn, Ni, Fe, and 40+ elements" },
    { param: "Gold Purity Range", value: "1K – 24K (0.1% – 99.9%)" },
    { param: "Measurement Accuracy", value: "±0.05% (Gold)" },
    { param: "Measurement Time", value: "2 – 60 seconds (Adjustable)" },
    { param: "Sample Chamber", value: "Open / Closed Chamber (Model Dependent)" },
    { param: "Display", value: "7-inch Touch Screen LCD" },
    { param: "Data Output", value: "USB / RS-232 / Thermal Printer" },
    { param: "Power Supply", value: "110V–240V / 50–60Hz" },
    { param: "Warranty", value: "1 Year (Extendable)" },
  ];

  const whyUs = [
    { title: "Pan-India Service Network", desc: "Dedicated engineers available across major Indian cities." },
    { title: "Free Installation & Training", desc: "On-site setup and operator training included with purchase." },
    { title: "Genuine Imported Parts", desc: "High-quality SDD detectors and X-ray tubes with verified authenticity." },
    { title: "Fast Delivery", desc: "Ready stock available; dispatch within 3–7 business days." },
    { title: "After-Sales Support", desc: "365-day support via call, WhatsApp, and remote diagnostics." },
  ];

  const faqs = [
{
    q: "What is an XRF Gold Testing Machine used for?",
    a: "It uses X-Ray Fluorescence to accurately measure gold purity (karat value) and detect alloying elements like silver and copper. It provides instant, non-destructive analysis for jewellers, gold traders, hallmarking centres, and pawn shops.",
  },
  {
    q: "What materials can an XRF Gold Analyzer test?",
    a: "It can test gold, silver, platinum, and over 40 other elements simultaneously. It works perfectly on jewellery, bars, coins, scrap, and plated items in solid, powder, or liquid forms.",
  },
  {
    q: "What is the advantage of XRF testing over acid testing or fire assay?",
    a: "XRF is 100% non-destructive, highly accurate (±0.05%), and delivers digital reports in seconds without scratching or melting the sample. Acid testing is inaccurate and destructive, while fire assay is slow and completely destroys the sample.",
  },
  {
    q: "What is the price of an XRF Gold Testing Machine in India?",
    a: "Prices typically range from ₹3.5 Lakhs to ₹20 Lakhs, depending on the detector type, speed, and automation level. Contact us for the latest pricing and a live demo.",
  },
  {
    q: "Is XRF testing accurate for hallmarking and BIS compliance?",
    a: "Yes, XRF analyzers are a primary tool used by BIS-approved hallmarking centres across India for quality control and certification. Our machines comply with international standards and include certified calibration.",
  },
  {
    q: "Do you provide installation and training?",
    a: "Yes, IndiaLaser provides free on-site installation and comprehensive operator training with every machine purchase to ensure your team can operate it independently.",
  },
  ];

  const comparisonData = [
    { feature: "Process Type", xrf: "Non-destructive", acid: "Destructive", fire: "Destructive" },
    { feature: "Test Time", xrf: "2–60 seconds", acid: "2–5 minutes", fire: "Several hours" },
    { feature: "Accuracy", xrf: "±0.05%", acid: "±0.5–1%", fire: "±0.01% (but slow)" },
    { feature: "Sample Damage", xrf: "None", acid: "Surface Scratched", fire: "Sample Destroyed" },
    { feature: "Multi-Element", xrf: "Yes (40+ elements)", acid: "No (Single element)", fire: "Partial" },
    { feature: "Skill Required", xrf: "Low (Automated)", acid: "Moderate", fire: "High (Expert)" },
  ];

  return (
    <div className="bg-gray-100 py-10 px-4 min-h-screen overflow-x-clip w-full">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 w-full items-start">

        {/* ── LEFT SIDEBAR ── */}
        <div className="space-y-6 md:sticky md:top-24 self-start">
          <div className="bg-white rounded-2xl p-5 shadow-md">
            <h2 className="text-lg font-semibold text-gray-800 mb-5">
              XRF Testing Machines
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
            <p className="text-xs text-gray-500">Talk to our XRF experts for pricing, demo, and customization.</p>
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
                <span className="text-blue-600">XRF Gold Testing Machine</span>
              </p>
            </nav>
            <h1 className="text-2xl font-bold text-gray-900 mt-1">
              XRF Gold Testing Machine
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              High-accuracy XRF gold purity analyzer for jewellery, karat testing & precious metal analysis — non-destructive, fast, and reliable
            </p>
          </div>

          {/* HERO IMAGE */}
          <div className="flex justify-center items-center w-full">
            <Image
              src="/laser-machines/xrf-gold file.png"
              alt="XRF Gold Testing Machine by IndiaLaser"
              width={600}
              height={400}
              className="object-contain"
            />
          </div>

          {/* MAIN CONTENT CARD */}
          <div className="bg-white rounded-2xl p-6 shadow-md space-y-8">

            {/* ABOUT */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800">XRF Gold Testing Machine</h2>
              <div className="w-10 h-0.5 bg-blue-600 mt-1 mb-4 rounded" />
              <p className="text-gray-600 text-sm leading-relaxed">
                XRF Gold Testing Machines are advanced analytical instruments designed for accurate, non-destructive gold purity analysis and precious metal composition testing in modern jewellery, trading, and refinery industries. These machines use X-Ray Fluorescence (XRF) technology to deliver fast and precise measurement of gold karat value and alloying element content without damaging the sample.

                XRF gold testing technology provides excellent accuracy, reliable results, and consistent performance, making it ideal for hallmarking centres, jewellery manufacturers, gold traders, pawn shops, and quality control laboratories. The process ensures accurate identification of gold purity while eliminating the need for acid testing, fire assay, or any destructive method.

                These machines are suitable for testing gold jewellery, gold bars, coins, dental gold, electronic scrap, plated items, and precious metal alloys. With programmable control systems and high-speed analysis, XRF Gold Testing Machines improve testing efficiency, traceability, and compliance with BIS and international purity standards.

                XRF Gold Testing Machines are widely used in industries such as jewellery manufacturing, gold refining, hallmarking, bullion trading, pawn broking, electronics recycling, and precious metal recycling where accuracy, speed, and non-destructive testing are essential.
              </p>
            </div>

            {/* IMPORTED PRODUCTS */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Imported Products</h2>
              <div className="w-12 h-1 bg-blue-600 mt-1 mb-4 rounded" />
              <p className="text-gray-600 text-sm leading-relaxed">
                We offer a wide range of imported XRF gold testing machines sourced from globally
                recognized manufacturers. These systems meet international quality standards
                and are ideal for precision gold purity analysis where conventional acid testing
                or fire assay methods fall short. Our imported machines deliver highly accurate
                elemental analysis, exceptional repeatability, and long operational life —
                making them the preferred choice for jewellers, hallmarking centres, and gold
                refineries across India.
              </p>
            </div>

            {/* FEATURES */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Features of XRF Gold Testing Machine</h2>
              <div className="w-12 h-1 bg-blue-600 mt-1 mb-4 rounded" />
              <ul className="list-disc pl-5 text-gray-600 text-sm space-y-2">
                <li>Non-destructive testing — no damage, no scratching, no melting of the sample</li>
                <li>High-resolution SDD detector for accurate multi-element analysis in seconds</li>
                <li>7-inch touchscreen interface with intuitive one-touch operation</li>
                <li>Simultaneous detection of 40+ elements including Au, Ag, Pt, Pd, Cu, Zn, Ni</li>
                <li>Compatible with gold jewellery, bars, coins, dental gold, and electronic scrap</li>
                <li>Real-time result display with automatic karat and purity calculation</li>
                <li>Built-in thermal printer and USB/RS-232 data export for reporting</li>
                <li>Compatible with lead-free RoHS compliance and precious metal recycling</li>
              </ul>
            </div>

            {/* ADVANTAGES */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Advantages</h2>
              <div className="w-12 h-1 bg-blue-600 mt-1 mb-4 rounded" />
              <ul className="list-disc pl-5 text-gray-600 text-sm space-y-2">
                <li>Zero sample damage — tested jewellery can be returned to the customer immediately</li>
                <li>Results in 2–60 seconds — significantly faster than fire assay or wet chemistry</li>
                <li>No chemicals required — safe, eco-friendly, and zero consumable cost per test</li>
                <li>High accuracy of ±0.05% for gold — suitable for BIS hallmarking and trade compliance</li>
                <li>Multi-element analysis in a single measurement — no repeat testing needed</li>
                <li>Suitable for all gold alloy types including yellow, white, and rose gold</li>
              </ul>
            </div>

            {/* WORKING */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800">How an XRF Gold Testing Machine Works</h2>
              <div className="w-12 h-1 bg-blue-600 mt-1 mb-4 rounded" />
              <p className="text-gray-600 text-sm leading-relaxed">
                An XRF gold testing machine directs a focused beam of X-rays onto the surface
                of the gold sample placed in the measurement chamber. The X-ray energy excites
                the atoms in the sample, causing them to emit characteristic fluorescent X-rays
                at energy levels unique to each element. The high-resolution SDD detector
                captures these emitted X-rays and identifies the elemental composition by
                analyzing their energy signatures. The onboard software instantly calculates
                the gold purity percentage, karat value, and concentration of all alloying
                elements, displaying results on screen and generating a detailed report.
                The entire process is fully automated and requires no operator expertise
                beyond placing the sample.
              </p>
            </div>

            {/* TYPES */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Types of XRF Gold Testing Machines</h2>
              <div className="w-12 h-1 bg-blue-600 mt-1 mb-4 rounded" />
              <ul className="list-disc pl-5 text-gray-600 text-sm space-y-2">
                <li><strong>Benchtop XRF Gold Analyzer</strong> — Compact tabletop unit for jewellery shops, hallmarking centres, and labs</li>
                <li><strong>Handheld XRF Gold Tester</strong> — Portable gun-type device for on-site gold testing and field use</li>
                <li><strong>Industrial XRF Analyzer</strong> — High-throughput system for gold refineries and large-scale recycling operations</li>
                <li><strong>Closed Beam XRF Analyzer</strong> — Enclosed chamber design for safe operation without radiation shielding concerns</li>
                <li><strong>Open Beam XRF Analyzer</strong> — Open-geometry design for testing large or irregularly shaped items</li>
                <li><strong>Micro-XRF Analyzer</strong> — Ultra-precise spot analysis for plated jewellery and thin-film gold coatings</li>
              </ul>
            </div>

            {/* APPLICATIONS */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Applications</h2>
              <div className="w-12 h-1 bg-blue-600 mt-1 mb-4 rounded" />
              <ul className="list-disc pl-5 text-gray-600 text-sm space-y-2">
                <li>Jewellery manufacturing — gold purity verification and alloy composition QC</li>
                <li>BIS hallmarking centres — mandatory purity testing for gold hallmarking compliance</li>
                <li>Gold trading & bullion — fast karat verification for buying, selling, and valuation</li>
                <li>Pawn shops & second-hand gold dealers — instant non-destructive gold authentication</li>
                <li>Gold refineries — incoming material analysis and finished product certification</li>
                <li>Electronic scrap recycling — precious metal content analysis for e-waste recovery</li>
                <li>Dental gold — composition analysis of dental alloys and crowns</li>
              </ul>
            </div>
          </div>

          {/* ── TECHNICAL SPECIFICATIONS ── */}
          <div className="bg-white rounded-2xl p-6 shadow-md">
            <h2 className="text-xl font-semibold text-gray-800">Technical Specifications</h2>
            <div className="w-12 h-1 bg-blue-600 mt-1 mb-4 rounded" />
            <p className="text-sm text-gray-500 mb-4">
              Standard specifications for our XRF Gold Testing Machines. Custom configurations available on request.
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
            <h2 className="text-xl font-semibold text-gray-800">XRF vs Acid Test vs Fire Assay — Which is Right for You?</h2>
            <div className="w-12 h-1 bg-blue-600 mt-1 mb-4 rounded" />
            <p className="text-sm text-gray-500 mb-4">
              Understanding the differences helps you choose the best gold testing technology for your business requirements.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-800 text-white">
                    <th className="text-left px-4 py-2.5 rounded-tl-lg">Feature</th>
                    <th className="text-center px-4 py-2.5 bg-blue-600">XRF Testing ✓</th>
                    <th className="text-center px-4 py-2.5">Acid Test</th>
                    <th className="text-center px-4 py-2.5 rounded-tr-lg">Fire Assay</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-4 py-2.5 text-gray-700 font-medium border-b border-gray-100">{row.feature}</td>
                      <td className="px-4 py-2.5 text-center text-blue-700 font-semibold border-b border-gray-100 bg-blue-50">{row.xrf}</td>
                      <td className="px-4 py-2.5 text-center text-gray-600 border-b border-gray-100">{row.acid}</td>
                      <td className="px-4 py-2.5 text-center text-gray-600 border-b border-gray-100">{row.fire}</td>
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
    Frequently Asked Questions — XRF Gold Testing Machine
  </h2>
  <div className="w-12 h-1 bg-blue-600 mt-1 mb-4 rounded" />
  <p className="text-sm text-gray-500 mb-5">
    Common questions about XRF gold testing machines, pricing, and operation in India.
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
            <h2 className="text-xl font-semibold text-gray-800">XRF Gold Testing Machine in India</h2>
            <div className="w-12 h-1 bg-blue-600 mt-1 mb-4 rounded" />
            <p className="text-gray-600 text-sm leading-relaxed">
              Looking for an <strong>XRF gold testing machine price in India</strong>? IndiaLaser offers
              the best XRF gold analyzers across all performance levels — benchtop, handheld, and industrial — suitable for
              small jewellery shops to large-scale gold refineries. Whether you need a{" "}
              <strong>benchtop XRF gold analyzer for hallmarking</strong>, a{" "}
              <strong>handheld XRF tester for on-site gold valuation</strong>, or an{" "}
              <strong>industrial XRF system for high-volume refinery operations</strong>, we have the right solution.
              Our machines are available in <strong>Delhi, Mumbai, Chennai, Bengaluru, Hyderabad, Pune,
                Ahmedabad, Surat, Jaipur</strong>, and all across India with quick delivery and dedicated after-sales support.
              Compare our XRF gold testing machines with conventional acid test and fire assay alternatives, or{" "}
              <Link href="/contact-us" className="text-blue-600 font-semibold hover:underline">
                contact our team
              </Link>{" "}
              for a customized quotation today.
            </p>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-blue-900 to-blue-600 rounded-2xl p-6 text-center text-white shadow-md">
            <h2 className="text-xl font-bold mb-2">Ready to Buy an XRF Gold Testing Machine?</h2>
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
