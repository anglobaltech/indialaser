"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState({});
  const [search, setSearch] = useState("");
  const searchRef = useRef(null);
  const mobileSearchRef = useRef(null);

  const products = [
    { name: "Table Top Laser Marking Machine", link: "/laser-machines/laser-marking-machine" },
    { name: "Laser Soldering Machine", link: "/laser-machines/Soldering" },
    { name: "Laser Cutting Machine", link: "/laser-machines/cutting" },
    { name: "Metal Marking Laser Machine", link: "/laser-machines/Metal-marking" },
    { name: "Gold Testing Machine", link: "/laser-machines/Gold-testing" },
    { name: "Fiber Laser Marking Machine", link: "/laser-machines/fiber-laser" },
    { name: "CO2 Laser Marking Machine", link: "/laser-machines/co2-laser" },
    { name: "UV Laser Marking Machine", link: "/laser-machines/uv-laser" },
    { name: "Laser Welding Machine", link: "/laser-machines/welding" },
    { name: "Universal Testing Machine I", link: "/other-products/solar-testing-equipments/universal-testing-machineI" },
    { name: "Universal Testing Machine II", link: "/other-products/solar-testing-equipments/universal-testing-machineII" },
    { name: "XRF Machine", link: "/other-products/gold-testing-equiments/xrf-machine" },
    { name: "Fire Assay Furnace", link: "/other-products/gold-testing-equiments/fire-assay-furnace" },
    { name: "Cupellation Furnace", link: "/other-products/gold-testing-equiments/cupellation-furnace" },
    { name: "High Precision Assay Furnace", link: "/other-products/gold-testing-equiments/high-precision-assay-furnace" },
    { name: "Muffle Furnace", link: "/other-products/gold-testing-equiments/muffle-furnace" },

  ];

  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const toggleDropdown = (key) => {
    setOpenDropdowns((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  useEffect(() => {
    const handler = (e) => {
      if (
        searchRef.current && !searchRef.current.contains(e.target) &&
        mobileSearchRef.current && !mobileSearchRef.current.contains(e.target)
      ) {
        setSearch("");
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header className="w-full bg-white sticky top-0 z-[1000] border-b border-gray-100 shadow-sm font-['Inter',sans-serif]">
        {/*
          Breakpoints used:
          - < 1024px  → hamburger menu (mobile drawer)
          - 1024–1279px → compact desktop nav (search hidden, tighter gaps)
          - 1280px+   → full desktop nav with search bar
        */}
        <div className="max-w-[1350px] mx-auto flex items-center justify-between px-4 sm:px-6 py-3 w-full">

          {/* ── Left group ── */}
          <div className="flex items-center gap-3 xl:gap-6 flex-1 min-w-0">

            {/* Logo */}
            <Link href="/" className="flex-shrink-0 flex items-center">
              <Image
                src="/images/logoo.png"
                alt="India Laser Logo"
                width={120}
                height={40}
                className="w-auto h-9 sm:h-10 xl:h-12"
                priority
              />
            </Link>

            {/* Search Bar — only on xl+ so nav has enough room at 1024px */}
            <div ref={searchRef} className="relative hidden xl:block w-[220px] 2xl:w-[260px] flex-shrink-0">
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md py-2 px-4 text-sm font-light text-gray-600 outline-none transition-all placeholder:text-gray-400 focus:border-gray-400 focus:ring-1 focus:ring-gray-400"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              {search && (
                <div className="absolute top-[calc(100%+6px)] left-0 right-0 bg-white border border-gray-200 rounded-md shadow-lg z-[300] max-h-[300px] overflow-y-auto">
                  {filteredProducts.length > 0 ? (
                    filteredProducts.map((item, i) => (
                      <Link
                        key={i}
                        href={item.link}
                        onClick={() => setSearch("")}
                        className="block px-4 py-2.5 text-xs text-gray-700 border-b border-gray-50 last:border-none hover:bg-red-50 hover:text-[#e63946] transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))
                  ) : (
                    <p className="px-4 py-2.5 text-xs text-gray-400 m-0">No product found</p>
                  )}
                </div>
              )}
            </div>

            {/* Desktop Nav — visible lg+ */}
            <nav className="hidden lg:flex items-center gap-2 xl:gap-5 font-['Rajdhani',sans-serif] font-semibold text-[12px] xl:text-[14px] 2xl:text-[15px] tracking-wide text-gray-900  whitespace-nowrap">

              <Link href="/" className="hover:text-[#e63946] transition-colors py-2 px-1">Home</Link>
              <Link href="/about-us" className="hover:text-[#e63946] transition-colors py-2 px-1">About Us</Link>

              {/* Laser Machine Dropdown */}
              <div className="relative group py-2 px-1">
                <Link href="/laser-machines" className="hover:text-[#e63946] transition-colors flex items-center gap-1">
                  Laser Machine <span className="text-[9px]">▼</span>
                </Link>
                <div className="absolute top-full left-0 min-w-[240px] bg-white border-t-2 border-[#e63946] shadow-xl rounded-b-md opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0 transition-all duration-200 z-[200]">
                  <div className="relative group/sub">
                    <Link href="/laser-machines/laser-marking-machine" className="flex justify-between items-center px-4 py-3 font-['Inter',sans-serif] text-sm font-medium tracking-normal normal-case text-gray-700 border-b border-gray-100 hover:bg-red-50 hover:text-[#e63946]">
                      Laser Marking Machine <span className="text-[10px] text-gray-400">▶</span>
                    </Link>
                    <div className="absolute left-full top-0 min-w-[220px] bg-white border-t-2 border-[#e63946] shadow-xl rounded-b-md opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible translate-x-2 group-hover/sub:translate-x-0 transition-all duration-200">
                      <Link href="/laser-machines/laser-marking-machine/fiber-laser" className="block px-5 py-3 font-['Inter',sans-serif] text-sm font-medium text-gray-700 border-b border-gray-100 last:border-none hover:bg-red-50 hover:text-[#e63946] hover:pl-6 transition-all">Fiber Laser</Link>
                      <Link href="/laser-machines/laser-marking-machine/co2-laser" className="block px-5 py-3 font-['Inter',sans-serif] text-sm font-medium text-gray-700 border-b border-gray-100 last:border-none hover:bg-red-50 hover:text-[#e63946] hover:pl-6 transition-all">CO2 Laser</Link>
                      <Link href="/laser-machines/laser-marking-machine/uv-laser" className="block px-5 py-3 font-['Inter',sans-serif] text-sm font-medium text-gray-700 border-b border-gray-100 last:border-none hover:bg-red-50 hover:text-[#e63946] hover:pl-6 transition-all">UV Laser</Link>
                    </div>
                  </div>
                  <Link href="/laser-machines/soldering" className="block px-4 py-3 font-['Inter',sans-serif] text-sm font-medium normal-case text-gray-700 border-b border-gray-100 last:border-none hover:bg-red-50 hover:text-[#e63946] hover:pl-6 transition-all">Laser Soldering Machine</Link>
                  <Link href="/laser-machines/cutting" className="block px-4 py-3 font-['Inter',sans-serif] text-sm font-medium normal-case text-gray-700 border-b border-gray-100 last:border-none hover:bg-red-50 hover:text-[#e63946] hover:pl-6 transition-all">Laser Cutting Machine</Link>
                  <Link href="/laser-machines/welding" className="block px-4 py-3 font-['Inter',sans-serif] text-sm font-medium normal-case text-gray-700 border-b border-gray-100 last:border-none hover:bg-red-50 hover:text-[#e63946] hover:pl-6 transition-all">Laser Welding Machine</Link>
                </div>
              </div>

              {/* Other Products Dropdown */}
              <div className="relative group py-2 px-1">
                <Link href="/other-products" className="hover:text-[#e63946] transition-colors flex items-center gap-1">
                  Other Products <span className="text-[9px]">▼</span>
                </Link>
                <div className="absolute top-full left-0 min-w-[250px] bg-white border-t-2 border-[#e63946] shadow-xl rounded-b-md opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0 transition-all duration-200 z-[200]">

                  <div className="relative group/sub">
                    <Link href="/other-products/gold-testing-equiments" className="flex justify-between items-center px-4 py-3 font-['Inter',sans-serif] text-sm font-medium normal-case text-gray-700 border-b border-gray-100 hover:bg-red-50 group-hover/sub:bg-red-50 group-hover/sub:text-[#e63946]">
                      Gold Testing Machine <span className="text-[10px]">▶</span>
                    </Link>
                    <div className="absolute left-full top-0 min-w-[260px] bg-white border-t-2 border-[#e63946] shadow-xl rounded-b-md opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-150">
                      <Link href="/other-products/gold-testing-equiments/xrf-machine" className="block px-5 py-3 font-['Inter',sans-serif] text-sm font-medium text-gray-700 border-b border-gray-100 hover:bg-gray-50 hover:text-[#e63946] transition-colors">xrf machine</Link>
                      <Link href="/other-products/gold-testing-equiments/fire-assay-furnace" className="block px-5 py-3 font-['Inter',sans-serif] text-sm font-medium text-gray-700 border-b border-gray-100 hover:bg-gray-50 hover:text-[#e63946] transition-colors">Fire Assay Furnace</Link>
                      <Link href="/other-products/gold-testing-equiments/cupellation-furnace" className="block px-5 py-3 font-['Inter',sans-serif] text-sm font-medium text-gray-700 border-b border-gray-100 hover:bg-gray-50 hover:text-[#e63946] transition-colors">Cupellation Furnace</Link>
                      <Link href="/other-products/gold-testing-equiments/high-precision-assay-furnace" className="block px-5 py-3 font-['Inter',sans-serif] text-sm font-medium text-gray-700 last:border-none hover:bg-gray-50 hover:text-[#e63946] transition-colors">High Precision Assay Furnace</Link>
                      <Link href="/other-products/gold-testing-equiments/muffle-furnace" className="block px-5 py-3 font-['Inter',sans-serif] text-sm font-medium text-gray-700 last:border-none hover:bg-gray-50 hover:text-[#e63946] transition-colors">Muffle Furnace</Link>
                    </div>
                  </div>

                  {/* <div className="relative group/sub">
                    <Link href="/other-products/footwear" className="flex justify-between items-center px-4 py-3 font-['Inter',sans-serif] text-sm font-medium normal-case text-gray-700 border-b border-gray-100 hover:bg-red-50 hover:text-[#e63946]">
                      Footwear Testing Machine <span className="text-[10px]">▶</span>
                    </Link>
                    <div className="absolute left-full top-0 min-w-[240px] bg-white border-t-2 border-[#e63946] shadow-xl rounded-b-md opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-150">
                      <Link href="/other-products/footwear-testing-equipments/safety-testing-equipment" className="block px-5 py-3 font-['Inter',sans-serif] text-sm font-medium text-gray-700 border-b border-gray-100 hover:bg-gray-50 hover:text-[#e63946] transition-colors">Safety Testing Equipment</Link>
                     <Link href="/other-products/Footwear-testing/t2" className="block px-5 py-3 font-['Inter',sans-serif] text-sm font-medium text-gray-700 border-b border-gray-100 hover:bg-gray-50 hover:text-[#e63946] transition-colors">Footwear Testing II</Link>
                      <Link href="/other-products/Footwear-testing/t3" className="block px-5 py-3 font-['Inter',sans-serif] text-sm font-medium text-gray-700 last:border-none hover:bg-gray-50 hover:text-[#e63946] transition-colors">Footwear Testing III</Link> 
                    
                    </div>
                  </div> */}

                  <div className="relative group/sub">
                    {/* Changed from Link to button so it doesn't redirect on click */}
                    <button
                      type="button"
                      className="w-full flex justify-between items-center px-4 py-3 font-['Inter',sans-serif] text-sm font-medium normal-case text-gray-700 border-b border-gray-100 hover:bg-red-50 hover:text-[#e63946] text-left"
                    >
                      Solar Panel Machine <span className="text-[10px]">▶</span>
                    </button>

                    <div className="absolute left-full top-0 min-w-[240px] bg-white border-t-2 border-[#e63946] shadow-xl rounded-b-md opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-150">
                      {/* Fixed minor typo 'I' at the end of the URL path if needed */}
                      <Link href="/other-products/solar-testing-equipments/universal-testing-machineI" className="block px-5 py-3 font-['Inter',sans-serif] text-sm font-medium text-gray-700 border-b border-gray-100 hover:bg-gray-50 hover:text-[#e63946] transition-colors">Universal Testing Machine I</Link>
                      <Link href="/other-products/solar-testing-equipments/universal-testing-machineII" className="block px-5 py-3 font-['Inter',sans-serif] text-sm font-medium text-gray-700 last:border-none hover:bg-gray-50 hover:text-[#e63946] transition-colors">Universal Testing Machine II</Link>
                    </div>
                  </div>

                  {/* <div className="relative group/sub">
                    <Link href="/other-products/Toys-testing" className="flex justify-between items-center px-4 py-3 font-['Inter',sans-serif] text-sm font-medium normal-case text-gray-700 last:border-none hover:bg-red-50 hover:text-[#e63946]">
                      Toys Testing <span className="text-[10px]">▶</span>
                    </Link>
                    <div className="absolute left-full top-0 min-w-[200px] bg-white border-t-2 border-[#e63946] shadow-xl rounded-b-md opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-150">
                      <Link href="/other-products/Toys-testing/t1" className="block px-5 py-3 font-['Inter',sans-serif] text-sm font-medium text-gray-700 border-b border-gray-100 hover:bg-gray-50 hover:text-[#e63946] transition-colors">Toys Testing I</Link>
                      <Link href="/other-products/Toys-testing/t2" className="block px-5 py-3 font-['Inter',sans-serif] text-sm font-medium text-gray-700 last:border-none hover:bg-gray-50 hover:text-[#e63946] transition-colors">Toys Testing II</Link>
                    </div>
                  </div> */}
                </div>
              </div>

              <Link href="/services" className="hover:text-[#e63946] transition-colors py-2 px-1">Services</Link>
              <Link href="/contact-us" className="hover:text-[#e63946] transition-colors py-2 px-1">Contact</Link>
            </nav>
          </div>

          {/* Hamburger — below lg only */}
          <button
            className="flex lg:hidden flex-col justify-center gap-1.5 p-2 bg-transparent border-none cursor-pointer z-[1100] flex-shrink-0 ml-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle structural menu view"
          >
            <span className={`block w-6 h-[2px] bg-gray-900 rounded-sm transition-all duration-300 origin-center ${menuOpen ? "translate-y-[8px] rotate-45" : ""}`} />
            <span className={`block w-6 h-[2px] bg-gray-900 rounded-sm transition-all duration-300 origin-center ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`block w-6 h-[2px] bg-gray-900 rounded-sm transition-all duration-300 origin-center ${menuOpen ? "-translate-y-[8px] -rotate-45" : ""}`} />
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 z-[1050] transition-opacity duration-300 lg:hidden ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile Slide Drawer */}
      <div className={`fixed top-0 bottom-0 left-0 w-[300px] max-w-[85vw] bg-[#1a1a2e] z-[1100] flex flex-col transition-transform duration-300 ease-out lg:hidden ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex-shrink-0 flex items-center justify-between p-4 bg-[#12122a] border-b border-white/5">
          <span className="font-['Rajdhani',sans-serif] font-bold text-base tracking-[2px] text-white">Menu</span>
          <button className="bg-transparent border-none text-gray-400 text-xl cursor-pointer p-1 hover:text-[#e63946]" onClick={() => setMenuOpen(false)}>✕</button>
        </div>

        <div className="flex-1 overflow-y-auto py-4">
          {/* Mobile Search */}
          <div ref={mobileSearchRef} className="p-4 border-b border-white/5">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full bg-white/5 border border-white/10 rounded-md py-2 px-4 text-white text-sm outline-none font-['Inter',sans-serif] focus:border-[#e63946]"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            {search && (
              <div className="mt-1.5 bg-white/5 rounded overflow-hidden max-h-[200px] overflow-y-auto">
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((item, i) => (
                    <Link
                      key={i}
                      href={item.link}
                      onClick={() => { setSearch(""); setMenuOpen(false); }}
                      className="block px-3 py-2 text-xs text-gray-300 border-b border-white/5 last:border-none hover:bg-[#e63946]/10 hover:text-[#e63946]"
                    >
                      {item.name}
                    </Link>
                  ))
                ) : (
                  <p className="px-3 py-2 text-xs text-gray-500 m-0">No product found</p>
                )}
              </div>
            )}
          </div>

          <Link href="/" className="block p-4 font-['Rajdhani',sans-serif] font-semibold text-base tracking-wider text-gray-200 border-b border-white/5 hover:bg-white/5" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/about-us" className="block p-4 font-['Rajdhani',sans-serif] font-semibold text-base tracking-wider  text-gray-200 border-b border-white/5 hover:bg-white/5" onClick={() => setMenuOpen(false)}>About Us</Link>

          {/* Mobile Accordion: Laser Machines */}
          <div className="border-b border-white/5">
            <div className="flex justify-between items-center p-4 font-['Rajdhani',sans-serif] font-semibold text-base tracking-wider  text-gray-200 cursor-pointer hover:bg-white/5" onClick={() => toggleDropdown("laserMachines")}>
              <span>Laser Machines</span>
              <span className={`text-xs text-gray-500 transition-transform duration-200 ${openDropdowns.laserMachines ? "rotate-180" : ""}`}>▼</span>
            </div>
            <div className={`overflow-hidden bg-black/20 transition-all duration-300 ${openDropdowns.laserMachines ? "max-h-[1000px]" : "max-h-0"}`}>
              <div className="flex justify-between items-center p-3 pl-6 font-['Inter',sans-serif] text-xs text-gray-300 bg-black/10 cursor-pointer hover:text-white" onClick={() => toggleDropdown("laserMarking")}>
                <span>Laser Marking Machine</span>
                <span className={`text-[10px] transition-transform duration-200 ${openDropdowns.laserMarking ? "rotate-180" : ""}`}>▼</span>
              </div>
              <div className={`overflow-hidden transition-all duration-300 ${openDropdowns.laserMarking ? "max-h-[500px]" : "max-h-0"}`}>
                <Link href="/laser-machines/laser-marking-machine/fiber-laser" className="block py-2.5 pl-12 text-xs text-gray-400 border-b border-white/5 hover:text-white" onClick={() => setMenuOpen(false)}>Fiber Laser</Link>
                <Link href="/laser-machines/laser-marking-machine/co2-laser" className="block py-2.5 pl-12 text-xs text-gray-400 border-b border-white/5 hover:text-white" onClick={() => setMenuOpen(false)}>CO2 Laser</Link>
                <Link href="/laser-machines/laser-marking-machine/uv-laser" className="block py-2.5 pl-12 text-xs text-gray-400 border-b border-white/5 hover:text-white" onClick={() => setMenuOpen(false)}>UV Laser</Link>
              </div>
              <Link href="/laser-machines/Soldering" className="block py-2.5 pl-6 text-xs text-gray-400 border-b border-white/5 hover:text-white" onClick={() => setMenuOpen(false)}>Laser Soldering Machine</Link>
              <Link href="/laser-machines/cutting" className="block py-2.5 pl-6 text-xs text-gray-400 border-b border-white/5 hover:text-white" onClick={() => setMenuOpen(false)}>Laser Cutting Machine</Link>
              <Link href="/laser-machines/welding" className="block py-2.5 pl-6 text-xs text-gray-400 border-b border-white/5 hover:text-white" onClick={() => setMenuOpen(false)}>Laser Welding Machine</Link>
            </div>
          </div>

          {/* Mobile Accordion: Other Products */}
          <div className="border-b border-white/5">
            <div className="flex justify-between items-center p-4 font-['Rajdhani',sans-serif] font-semibold text-base tracking-wider  text-gray-200 cursor-pointer hover:bg-white/5" onClick={() => toggleDropdown("otherProducts")}>
              <span>Other Products</span>
              <span className={`text-xs text-gray-500 transition-transform duration-200 ${openDropdowns.otherProducts ? "rotate-180" : ""}`}>▼</span>
            </div>
            <div className={`overflow-hidden bg-black/20 transition-all duration-300 ${openDropdowns.otherProducts ? "max-h-[1200px]" : "max-h-0"}`}>

              <div className="flex justify-between items-center p-3 pl-6 font-['Inter',sans-serif] text-xs text-gray-300 bg-black/10 cursor-pointer hover:text-white" onClick={() => toggleDropdown("goldTesting")}>
                <span>Gold Testing Machine</span>
                <span className={`text-[10px] transition-transform duration-200 ${openDropdowns.goldTesting ? "rotate-180" : ""}`}>▼</span>
              </div>
              <div className={`overflow-hidden transition-all duration-300 ${openDropdowns.goldTesting ? "max-h-[500px]" : "max-h-0"}`}>
                <Link href="/other-products\gold-testing-equiments\xrf-machine" className="block py-2.5 pl-12 text-xs text-gray-400 border-b border-white/5 hover:text-white" onClick={() => setMenuOpen(false)}>XRF Machine</Link>
                <Link href="/other-products\gold-testing-equiments\fire-assay-furnace" className="block py-2.5 pl-12 text-xs text-gray-400 border-b border-white/5 hover:text-white" onClick={() => setMenuOpen(false)}>FIRE ASSAY FURNACE</Link>
                <Link href="/other-products\gold-testing-equiments\cupellation-furnace" className="block py-2.5 pl-12 text-xs text-gray-400 border-b border-white/5 hover:text-white" onClick={() => setMenuOpen(false)}>CUPELLATION FURNACE</Link>
                <Link href="/other-products\gold-testing-equiments\high-precision-assay-furnace" className="block py-2.5 pl-12 text-xs text-gray-400 border-b border-white/5 hover:text-white" onClick={() => setMenuOpen(false)}>HIGH PRECISION BALANCE FURNACE</Link>
                <Link href="/other-products\gold-testing-equiments\muffle-furnace" className="block py-2.5 pl-12 text-xs text-gray-400 border-b border-white/5 hover:text-white" onClick={() => setMenuOpen(false)}>MUFFLE FURNACE</Link>

              </div>

              {/* <div className="flex justify-between items-center p-3 pl-6 font-['Inter',sans-serif] text-xs text-gray-300 bg-black/10 cursor-pointer hover:text-white" onClick={() => toggleDropdown("footwearTesting")}>
                <span>Footwear Testing Machine</span>
                <span className={`text-[10px] transition-transform duration-200 ${openDropdowns.footwearTesting ? "rotate-180" : ""}`}>▼</span>
              </div> */}
              <div className={`overflow-hidden transition-all duration-300 ${openDropdowns.footwearTesting ? "max-h-[500px]" : "max-h-0"}`}>
                <Link href="/other-products\footwear-testing-equipments\safety-testing-equipment" className="block py-2.5 pl-12 text-xs text-gray-400 border-b border-white/5 hover:text-white" onClick={() => setMenuOpen(false)}>SAFETY TESTING EQUIPMENT</Link>
                {/* <Link href="/other-products/Footwear-testing/t2" className="block py-2.5 pl-12 text-xs text-gray-400 border-b border-white/5 hover:text-white" onClick={() => setMenuOpen(false)}>Footwear Testing II</Link>
                <Link href="/other-products/Footwear-testing/t3" className="block py-2.5 pl-12 text-xs text-gray-400 border-b border-white/5 hover:text-white" onClick={() => setMenuOpen(false)}>Footwear Testing III</Link> */}
              </div>

              {/* <div className="flex justify-between items-center p-3 pl-6 font-['Inter',sans-serif] text-xs text-gray-300 bg-black/10 cursor-pointer hover:text-white" onClick={() => toggleDropdown("toysTesting")}>
                <span>Toys Testing</span>
                <span className={`text-[10px] transition-transform duration-200 ${openDropdowns.toysTesting ? "rotate-180" : ""}`}>▼</span>
              </div> */}
              <div className={`overflow-hidden transition-all duration-300 ${openDropdowns.toysTesting ? "max-h-[500px]" : "max-h-0"}`}>
                <Link href="/other-products/Toys-testing/t1" className="block py-2.5 pl-12 text-xs text-gray-400 border-b border-white/5 hover:text-white" onClick={() => setMenuOpen(false)}>Toys Testing I</Link>
                <Link href="/other-products/Toys-testing/t2" className="block py-2.5 pl-12 text-xs text-gray-400 border-b border-white/5 hover:text-white" onClick={() => setMenuOpen(false)}>Toys Testing II</Link>
              </div>

              <div className="flex justify-between items-center p-3 pl-6 font-['Inter',sans-serif] text-xs text-gray-300 bg-black/10 cursor-pointer hover:text-white" onClick={() => toggleDropdown("solarPanel")}>
                <span>Solar Panel Equipment</span>
                <span className={`text-[10px] transition-transform duration-200 ${openDropdowns.solarPanel ? "rotate-180" : ""}`}>▼</span>
              </div>
              <div className={`overflow-hidden transition-all duration-300 ${openDropdowns.solarPanel ? "max-h-[500px]" : "max-h-0"}`}>
                <Link href="/other-products\solar-testing-equipments\universal-testing-machineI" className="block py-2.5 pl-12 text-xs text-gray-400 border-b border-white/5 hover:text-white" onClick={() => setMenuOpen(false)}>UNIVERSAL TESTING MACHINE I</Link>
                <Link href="/other-products\solar-testing-equipments\universal-testing-machineII" className="block py-2.5 pl-12 text-xs text-gray-400 border-b border-white/5 hover:text-white" onClick={() => setMenuOpen(false)}>UNIVERSAL TESTING MACHINE II</Link>
              </div>
            </div>
          </div>

          <Link href="/services" className="block p-4 font-['Rajdhani',sans-serif] font-semibold text-base tracking-wider uppercase text-gray-200 border-b border-white/5 hover:bg-white/5" onClick={() => setMenuOpen(false)}>Services</Link>
          <Link href="/contact-us" className="block p-4 font-['Rajdhani',sans-serif] font-semibold text-base tracking-wider uppercase text-gray-200 border-b border-white/5 hover:bg-white/5" onClick={() => setMenuOpen(false)}>Contact Us</Link>
        </div>
      </div>
    </>
  );
}