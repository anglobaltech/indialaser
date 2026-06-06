"use client";

const products = [
  {
    name: "X-Ray Fluorescence Spectrometer (XRF)",
    image: "/other-products/xrf-gold.webp",
    desc: "Provides instant and non-destructive gold purity testing with high accuracy. Ideal for jewellery shops, hallmarking centers and bullion analysis where fast and reliable results are required.",
  },
  {
    name: "Fire Assay Furnace",
    image: "/other-products/assay-furnace.jpg",
    desc: "Traditional and highly accurate method for gold testing using high-temperature analysis. Widely used in laboratories for precise determination of gold content in samples.",
  },
  {
    name: "Cupellation Furnace",
    image: "/other-products/Cupellation-Furnace-Open-Door-View.webp",
    desc: "Used in fire assay processes to separate precious metals from base metals. Ensures accurate gold and silver analysis in metallurgical and laboratory applications.",
  },
  {
    name: "Muffle Furnace",
    image: "/other-products/muffle-furnace.jpg",
    desc: "Designed for controlled high-temperature heating in gold testing and laboratory use. Provides uniform heat distribution for consistent and reliable results.",
  },
];

export default function OtherProductsPage() {
  return (
    <div className="bg-gray-300 min-h-screen py-8 px-4">

      <div className="max-w-7xl mx-auto">

        {/* HEADING */}
        <div className="text-center mb-12">
          <h1 className="text-[32px] font-semibold text-slate-800 mb-3">
            Gold Testing Equipments
          </h1>
          <p className="text-black text-[14px] font-semibold max-w-70xl mx-auto">
            Explore advanced gold testing machines including XRF analyzers, furnaces and assay systems designed for accurate purity testing and laboratory use.
          </p>
        </div>

        {/* SECTION TITLE */}
        <h2 className="text-[22px] font-semibold text-slate-800 mb-6 border-l-4 border-blue-600 pl-3">
          Gold Testing Machines
        </h2>

        {/* GRID */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-9">

          {products.map((item, index) => (
            <div
              key={index}
              className="bg-slate-200 border border-slate-200 rounded-[10px] overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
            >

              {/* IMAGE (TOP SAME LIKE YOUR UI) */}
              <div className="h-[200px] bg-white flex items-center justify-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full object-contain p-4"
                />
              </div>

              {/* CONTENT */}
              <div className="p-4">
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
    </div>
  );
}