"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Link2,
  Home as HomeIcon,
  PhoneCall,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
  ArrowUp,
} from "lucide-react";

export default function Footer() {
  const pathname = usePathname();

  // Hide footer on login page (matches navbar behavior)
  if (pathname?.startsWith("/login")) {
    return null;
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToPopular = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById("popular-properties");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full bg-[#FDFAF5] border-t border-[#EADCD0] ">
      {/* ================= EXACT CONTAINER LINE PRESERVED ================= */}
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 mt-2 sm:mt-10 mb-10 sm:mb-10">
        
        {/* ================= 4 BALANCED COLUMNS GRID (HEADINGS ALIGNED IN A LINE) ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8 items-start mb-0">
          
          {/* Column 1: Brand Logo, Slogan, Subtext & Skyline touching bottom (5 Cols - More Space) */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div className="space-y-2 sm:space-y-2.5">
              {/* Logo - Centered in h-8 sm:h-9 to align with other column headings */}
              <div className="h-8 sm:h-9 flex items-center">
                <img
                  src="/logo.png"
                  alt="invest2growth"
                  className="h-8 sm:h-9 w-auto object-contain"
                />
              </div>

              {/* Big Heading Slogan (24 to 28px) */}
              <div className="pt-0.5">
                <h3 className="font-[family-name:var(--font-poppins)] font-bold text-[#001D4A] text-[20px] sm:text-[23px] md:text-[25px] leading-tight tracking-tight">
                  Har sapne ke ghar tak, ab aur aasan raasta!
                </h3>
                {/* Orange Swoop Underline Curve */}
                <svg
                  className="w-28 sm:w-32 h-2 text-[#F15A24] mt-0.5"
                  viewBox="0 0 120 10"
                  fill="none"
                >
                  <path
                    d="M2 7C38 1 82 1 118 7"
                    stroke="#F15A24"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              {/* Normal Body Subtext (14 to 16px) */}
              <p className="font-[family-name:var(--font-poppins)] font-normal text-[15px] text-gray-700 leading-snug">
                Buy, Sell and Rent Properties across India with verified trust.
              </p>
            </div>

            {/* City Skyline Illustration - Touches Bottom Navy Bar Seamlessly with Smooth Edge */}
            <div className="w-full max-w-[420px] lg:max-w-[460px] mt-4 sm:mt-6 -mb-[1px] relative z-10 leading-none">
              <img
                src="/skyline.png"
                alt="City Skyline"
                className="w-full h-auto object-contain object-bottom block"
              />
            </div>
          </div>

          {/* Column 2: Popular Cities (2 Cols) */}
          <div className="lg:col-span-2 space-y-3 pb-2 sm:pb-3">
            {/* Heading aligned in a straight line with h-8 sm:h-9 */}
            <div className="h-8 sm:h-9 flex items-center gap-2.5">

              <h4 className="font-[family-name:var(--font-poppins)] font-semibold text-[#001D4A] text-[18px] sm:text-[20px] tracking-tight">
                Popular Cities
              </h4>
            </div>

            {/* List with Blue Chevrons (14 to 16px) */}
            <ul className="space-y-1.5 font-[family-name:var(--font-poppins)] text-[15px] text-gray-700">
              <li>
                <a
                  href="#popular-properties"
                  onClick={scrollToPopular}
                  className="group inline-flex items-center gap-2 hover:text-[#015BE1] transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4 text-[#015BE1] shrink-0 group-hover:translate-x-0.5 transition-transform" />
                  <span>Jaipur Properties</span>
                </a>
              </li>
              <li>
                <a
                  href="#popular-properties"
                  onClick={scrollToPopular}
                  className="group inline-flex items-center gap-2 hover:text-[#015BE1] transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4 text-[#015BE1] shrink-0 group-hover:translate-x-0.5 transition-transform" />
                  <span>Kolkata Properties</span>
                </a>
              </li>
              <li>
                <a
                  href="#popular-properties"
                  onClick={scrollToPopular}
                  className="group inline-flex items-center gap-2 hover:text-[#015BE1] transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4 text-[#015BE1] shrink-0 group-hover:translate-x-0.5 transition-transform" />
                  <span>Pune Properties</span>
                </a>
              </li>
              <li>
                <a
                  href="#popular-properties"
                  onClick={scrollToPopular}
                  className="group inline-flex items-center gap-2 hover:text-[#015BE1] transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4 text-[#015BE1] shrink-0 group-hover:translate-x-0.5 transition-transform" />
                  <span>Ahmedabad Properties</span>
                </a>
              </li>
              <li>
                <a
                  href="#popular-properties"
                  onClick={scrollToPopular}
                  className="group inline-flex items-center gap-2 hover:text-[#015BE1] transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4 text-[#015BE1] shrink-0 group-hover:translate-x-0.5 transition-transform" />
                  <span>Mumbai Properties</span>
                </a>
              </li>
              <li>
                <a
                  href="#popular-properties"
                  onClick={scrollToPopular}
                  className="group inline-flex items-center gap-2 hover:text-[#015BE1] transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4 text-[#015BE1] shrink-0 group-hover:translate-x-0.5 transition-transform" />
                  <span>Delhi NCR Properties</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Property Types (2 Cols) */}
          <div className="lg:col-span-2 space-y-3 pb-2 sm:pb-3">
            {/* Heading aligned in a straight line with h-8 sm:h-9 */}
            <div className="h-8 sm:h-9 flex items-center gap-2.5">

              <h4 className="font-[family-name:var(--font-poppins)] font-semibold text-[#001D4A] text-[18px] sm:text-[20px] tracking-tight">
                Property Types
              </h4>
            </div>

            {/* List with Blue Chevrons (14 to 16px) */}
            <ul className="space-y-1.5 font-[family-name:var(--font-poppins)] text-[15px] text-gray-700">
              <li className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-[#015BE1] shrink-0" />
                <span>Flats &amp; Apartments</span>
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-[#015BE1] shrink-0" />
                <span>Independent Houses</span>
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-[#015BE1] shrink-0" />
                <span>Plots &amp; Land</span>
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-[#015BE1] shrink-0" />
                <span>Shops &amp; Offices</span>
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-[#015BE1] shrink-0" />
                <span>PG &amp; Shared</span>
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-[#015BE1] shrink-0" />
                <span>Agricultural Land</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Us (3 Cols) */}
          <div className="lg:col-span-3 space-y-3 pb-2 sm:pb-3">
            {/* Heading aligned in a straight line with h-8 sm:h-9 */}
            <div className="h-8 sm:h-9 flex items-center gap-2.5">
              <h4 className="font-[family-name:var(--font-poppins)] font-semibold text-[#001D4A] text-[18px] sm:text-[20px] tracking-tight">
                Contact Us
              </h4>
            </div>

            {/* Contact Items - Clean Monochrome Icons without colored circles */}
            <div className="space-y-2.5 font-[family-name:var(--font-poppins)] text-[15px] text-gray-700">
              {/* Email */}
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#002D5E] shrink-0" />
                <a
                  href="mailto:info@invest2growth.com"
                  className="hover:text-[#015BE1] transition-colors truncate"
                >
                  info@invest2growth.com
                </a>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#002D5E] shrink-0" />
                <a
                  href="tel:+919876543210"
                  className="hover:text-[#015BE1] transition-colors font-medium text-gray-800"
                >
                  +91 98765 43210
                </a>
              </div>

              {/* Address */}
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#002D5E] shrink-0 mt-0.5" />
                <span className="text-gray-700 leading-snug">
                  123 Real Estate Park,
                  <br />
                  SG Highway, Ahmedabad
                </span>
              </div>
            </div>

            {/* Social Media Badges - Unified brand color (no bright multicolored backgrounds) */}
            <div className="pt-1 flex items-center gap-2.5">
              {/* Facebook */}
              <a
                // href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full bg-[#002D5E] text-white flex items-center justify-center shadow-xs hover:bg-[#001D4A] hover:scale-105 active:scale-95 transition-all cursor-pointer"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                // href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="w-8 h-8 rounded-full bg-[#002D5E] text-white flex items-center justify-center shadow-xs hover:bg-[#001D4A] hover:scale-105 active:scale-95 transition-all cursor-pointer"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                // href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-full bg-[#002D5E] text-white flex items-center justify-center shadow-xs hover:bg-[#001D4A] hover:scale-105 active:scale-95 transition-all cursor-pointer"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                // href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full bg-[#002D5E] text-white flex items-center justify-center shadow-xs hover:bg-[#001D4A] hover:scale-105 active:scale-95 transition-all cursor-pointer"
              >
                <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* ================= BOTTOM DARK NAVY BAR (DIRECTLY TOUCHES SKYLINE) ================= */}
        <div className="w-full bg-[#002D5E] rounded-2xl px-5 sm:px-8 py-3.5 sm:py-4 flex flex-col md:flex-row items-center justify-between gap-3 text-white shadow-md relative z-0">
          {/* Copyright (14 to 16px) */}
          <p className="font-[family-name:var(--font-poppins)] text-[14px] sm:text-[15px] font-normal text-white text-center md:text-left">
            &copy; 2026 <strong className="font-semibold text-white">Invest2Growth</strong>. All Rights Reserved.
          </p>

          {/* Links & Back to Top (14 to 16px) */}
          <div className="flex items-center gap-3 sm:gap-4 font-[family-name:var(--font-poppins)] text-[14px] sm:text-[15px] text-white/90">
            <Link href="/login" className="hover:text-white transition-colors">
              Login
            </Link>
            <span className="text-white/40">|</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
