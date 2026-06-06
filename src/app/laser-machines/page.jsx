"use client";
const products = [
  {
    category: "Laser Marking Machine",
    items: [
      {
        name: "Fiber Laser Marking Machine",
        image: "/laser-machines/fiber-laser-machine.webp",
        desc: "Designed for high-speed and permanent marking on metals such as stainless steel, aluminum, brass and alloys. It delivers deep engraving, sharp contrast, and long-lasting results, making it ideal for industrial applications like automotive parts, tools and nameplates.",
      },
      {
        name: "CO₂ Laser Marking Machine",
        image: "/laser-machines/co2-laser-marking.webp",
        desc: "Best suited for non-metal materials including wood, acrylic, leather, glass and rubber. It provides smooth surface finishing and clear marking, widely used in packaging, handicrafts, and branding applications.",
      },
      {
        name: "UV Laser Marking Machine",
        image: "/laser-machines/uv-marking-machine.webp",
        desc: "Uses cold laser technology to mark heat-sensitive materials like plastics, PCB, glass and medical packaging. It ensures ultra-fine precision without burning or deformation, ideal for electronics and pharmaceutical industries.",
      },
    ],
  },
  {
    category: "Laser Welding Machine",
    items: [
      {
        name: "Laser Welding Machine",
        image: "/laser-machines/laser-welding-machine.webp",
        desc: "Our laser welding machine is designed for high-precision metal joining with minimal heat distortion and superior weld quality. It is widely used for stainless steel, mild steel, aluminum and sheet metal applications in automotive, fabrication and manufacturing industries. The machine ensures strong, clean welds with reduced post-processing, high speed operation and improved productivity compared to traditional welding methods.",
      },
    ],
  },
  {
    category: "Laser Cutting Machine",
    items: [
      {
        name: "Laser Cutting Machine",
        image: "/laser-machines/laser-cutter-machine.webp",
        desc: "This laser cutting machine delivers accurate and high-speed cutting for metal sheets, stainless steel, carbon steel and industrial materials. It provides smooth edge finishing, minimal material wastage and consistent performance, making it ideal for fabrication, signage and heavy manufacturing industries. The advanced cutting technology ensures high efficiency, precision and cost-effective production.",
      },
    ],
  },
  {
    category: "Laser Soldering Machine",
    items: [
      {
        name: "Laser Soldering Machine",
        image: "/laser-machines/laser-soldering-machine.jpg",
        desc: "The laser soldering machine is ideal for precision micro-soldering in electronics, PCB assembly and delicate components. It offers controlled heat input, ensuring reliable joints without damaging sensitive parts. Widely used in electronics manufacturing, it improves consistency, reduces defects and enhances production quality with high accuracy and repeatability.",
      },
    ],
  },
];

export default function ProductsPage() {
  return (
    <div className="bg-gray-300 min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto">

        {/* PAGE HEADING */}
        <div className="text-center mb-12">
          <h1 className="text-[32px] text-slate-800 mb-3">
            Our Laser Machines
          </h1>
          <p className="text-black text-[14px] font-semibold max-w-[600px] mx-auto">
            Explore our complete range of laser solutions including marking,
            welding, cutting and soldering machines designed for industrial use.
          </p>
        </div>

        {/* CATEGORY LOOP */}
        {products.map((section, i) => {
          const isSingle = section.items.length === 1;

          return (
            <div key={i} className="mb-14">

              {/* CATEGORY TITLE */}
              <h2 className="text-[22px] font-semibold text-slate-800 mb-6 border-l-4 border-blue-600 pl-3">
                {section.category}
              </h2>

              {/* GRID */}
              <div
                className={`grid gap-9 ${
                  isSingle ? "grid-cols-1" : "md:grid-cols-3 sm:grid-cols-2"
                }`}
              >
                {section.items.map((item, index) => (
                  <div
                    key={index}
                    className={`bg-slate-200 border border-slate-200 rounded-[10px] overflow-hidden 
                    transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer
                    ${isSingle ? "flex flex-row items-center" : ""}`}
                  >

                    {/* IMAGE — bigger containers */}
                    <div
                      className={`bg-white flex items-center justify-center
                      ${isSingle ? "w-[50%] h-[320px]" : "h-[280px] w-full"}`}
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-contain p-6"
                      />
                    </div>

                    {/* CONTENT */}
                    <div className={`p-4 ${isSingle ? "w-[50%]" : ""}`}>
                      <h3 className="text-[16px] font-semibold text-slate-800 mb-2">
                        {item.name}
                      </h3>
                      <p className="text-[13px] text-slate-500 leading-[1.6]">
                        {item.desc}
                      </p>
                    </div>

                  </div>
                ))}
              </div>
            </div>
          );
        })}

      </div>
    </div>
  );
}