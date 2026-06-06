"use client";

import Link from "next/link";

import { useState } from "react";



const products = [

  { label: "Laser Machines", href: "/laser-machines" },

  { label: "Laser Soldering Machine", href: "/laser-machines/soldering" },

  { label: "Laser Cutting Machine", href: "/laser-machines/cutting" },

  { label: "Laser Welding Machine", href: "/laser-machines/welding" },

];



const quickLinks = [

  { label: "Home", href: "/" },

  { label: "About Us", href: "/about-us" },

  { label: "Other Products", href: "/other-products" },

  { label: "Contact Us", href: "/contact-us" },

];



const contactDetails = [

  {

    icon: "📍",

    text: "S-63, 7th Floor, Urbtech NPX, Noida Sector-153, Uttar Pradesh, India — Pin 201310",

    href: null,

  },

  {

    icon: "✉️",

    text: "info@indialaser.in",

    href: "mailto:info@indialaser.in",

  },

  {

    icon: "📞",

    text: "+91 7782069184",

    href: "tel:+917782069184",

  },

  {

    icon: "🕐",

    text: "Mon – Sat: 9:30 AM – 6:30 PM",

    href: null,

  },

];



export default function Footer() {

  const [hovered, setHovered] = useState(null);



  return (

   <footer className="bg-gray-900 border-t border-white/5 w-full">



      {/* ── top accent bar ── */}

      <div className="h-1 w-full bg-gradient-to-r from-blue-700 via-blue-400 to-blue-700" />



      {/* ── main grid ── */}

      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">



        {/* ── BRAND ── */}

        <div className="md:col-span-1">

          {/* logo text */}

          <div className="flex items-center gap-1 mb-4">

            <span className="text-2xl font-black tracking-widest text-white uppercase">

              India

            </span>

            <span className="text-2xl font-black tracking-widest text-blue-400 uppercase">

              Laser

            </span>

          </div>



          <p className="text-gray-400 text-[13px] leading-relaxed mb-5">

            India's trusted laser tech solutions provider for over 8 years.

            Authorized dealers for gold testing machines. High-precision laser

            cutting, soldering, and microbalancing. Quality, innovation, and

            outstanding service.

          </p>



          {/* social buttons */}

          <div className="flex flex-wrap gap-2">

            <a

              href="https://instagram.com/indialaserofficial"

              target="_blank"

              rel="noopener noreferrer"

              className="flex items-center gap-2 border border-white/10 rounded-md px-3 py-1.5 text-[12px] text-gray-300 hover:border-pink-500 hover:text-pink-400 transition-all duration-200"

            >

              {/* Instagram SVG */}

              <svg width="13" height="13" viewBox="0 0 24 24" fill="none"

                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">

                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />

                <circle cx="12" cy="12" r="4" />

                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />

              </svg>

              Instagram

            </a>



          </div>

        </div>



        {/* ── PRODUCTS ── */}

        <div>

          <h4 className="text-[11px] font-semibold tracking-[0.12em] uppercase text-blue-400 mb-4 pb-1 border-b border-white/10">

            Laser Machines

          </h4>

          <ul className="space-y-2.5">

            {products.map((item) => (

              <li key={item.label}>

                <Link

                  href={item.href}

                  onMouseEnter={() => setHovered(item.label)}

                  onMouseLeave={() => setHovered(null)}

                  className={`text-[13px] transition-all duration-200 flex items-center gap-1.5

                    ${hovered === item.label ? "text-blue-400 pl-1" : "text-gray-400"}`}

                >

                  <span className={`w-1 h-1 rounded-full bg-blue-500 flex-shrink-0 transition-opacity duration-200

                    ${hovered === item.label ? "opacity-100" : "opacity-0"}`}

                  />

                  {item.label}

                </Link>

              </li>

            ))}

          </ul>

        </div>



        {/* ── QUICK LINKS ── */}

        <div>

          <h4 className="text-[11px] font-semibold tracking-[0.12em] uppercase text-blue-400 mb-4 pb-1 border-b border-white/10">

            Quick Links

          </h4>

          <ul className="space-y-2.5">

            {quickLinks.map((item) => (

              <li key={item.label}>

                <Link

                  href={item.href}

                  onMouseEnter={() => setHovered(item.label)}

                  onMouseLeave={() => setHovered(null)}

                  className={`text-[13px] transition-all duration-200 flex items-center gap-1.5

                    ${hovered === item.label ? "text-blue-400 pl-1" : "text-gray-400"}`}

                >

                  <span className={`w-1 h-1 rounded-full bg-blue-500 flex-shrink-0 transition-opacity duration-200

                    ${hovered === item.label ? "opacity-100" : "opacity-0"}`}

                  />

                  {item.label}

                </Link>

              </li>

            ))}

          </ul>

        </div>



        {/* ── CONTACT ── */}

        <div>

          <h4 className="text-[11px] font-semibold tracking-[0.12em] uppercase text-blue-400 mb-4 pb-1 border-b border-white/10">

            Contact

          </h4>

          <ul className="space-y-3">

            {contactDetails.map((item, i) => (

              <li key={i} className="flex items-start gap-2.5">

                {/* icon box */}

                <span className="w-7 h-7 rounded-md bg-blue-500/10 flex items-center justify-center text-[13px] flex-shrink-0 mt-0.5">

                  {item.icon}

                </span>

                {item.href ? (

                  <a

                    href={item.href}

                    className="text-[13px] text-gray-400 hover:text-blue-400 transition-colors duration-200 leading-relaxed"

                  >

                    {item.text}

                  </a>

                ) : (

                  <p className="text-[13px] text-gray-400 leading-relaxed">

                    {item.text}

                  </p>

                )}

              </li>

            ))}

          </ul>

        </div>

      </div>



      {/* ── divider ── */}

      <div className="border-t border-white/5 mx-6" />



      {/* ── copyright bar ── */}

      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">

        <p className="text-[12px] text-gray-500">

          © 2026{" "}

          <span className="text-gray-400 font-medium">IndiaLaser</span>

          {" · "}IndiaLaser.in · All rights reserved.

        </p>

        <p className="text-[12px] text-gray-600 tracking-wider">

          Precision · Innovation · Quality

        </p>

      </div>



    </footer>

  );


}