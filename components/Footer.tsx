"use client";

import React from "react";
import Link from "next/link";
import { TrendingUp, } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative w-full bg-black text-white overflow-hidden border-t border-zinc-900">
      {/* Subtle Dark Ambient Brand Glows */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[300px] rounded-full bg-[#002E11]/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[250px] rounded-full bg-[#b8612b]/15 blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto pt-16 sm:pt-20 pb-12 px-4 sm:px-8 lg:px-12 xl:px-16">
        {/* ================= TOP / MAIN FOOTER GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Left Column: Brand, Tagline, Big Headline, App Badges (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Logo: invest2growth Emblem */}
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 transition-transform hover:scale-[1.01]"
              aria-label="invest2growth homepage"
            >
              <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-[#002E11] text-white shadow-md shadow-[#002E11]/40 border border-emerald-500/20">
                <TrendingUp className="w-5 h-5 text-[#e59a67]" />
                <span className="absolute -bottom-1 -right-1 w-3 h-3 bg-[#b8612b] rounded-full border-2 border-black" />
              </div>

              <div className="flex flex-col">
                <div className="flex items-baseline text-2xl font-black tracking-tight leading-none text-white">
                  <span>invest</span>
                  <span className="text-[#b8612b] font-black mx-0.5">2</span>
                  <span>growth</span>
                </div>
                <span className="text-[9.5px] font-bold tracking-[0.24em] uppercase text-zinc-400 mt-1">
                  Properties &bull; Lands &bull; Assets
                </span>
              </div>
            </Link>

            {/* Big Headline from user reference */}
            <h2 className="text-3xl sm:text-4xl lg:text-3xl font-[family-name:var(--font-jakarta)] font-light text-white tracking-tight leading-tight mb-3">
              Find Your Perfect Property
            </h2>

            {/* Sub-description */}
            <p className="text-sm sm:text-base text-zinc-300 font-light leading-relaxed pr-10">
              Take control of your real estate journey with Gujarat&apos;s verified land and investment portal. Discover, buy, sell, and verify with complete legal trust.
            </p>

          </div>

          {/* Right Columns: Menu, Properties, Services, Social (7 Cols) */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {/* 1. Menu Column */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                Menu
              </h3>
              <ul className="space-y-2.5 text-xs text-zinc-400 font-light">
                <li>
                  <Link href="#" className="hover:text-white transition-colors text-sm">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="hover:text-white transition-colors text-sm">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#featured-projects" className="hover:text-white transition-colors text-sm">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#news" className="hover:text-white transition-colors text-sm">
                    News
                  </Link>
                </li>
                <li>
                  <Link href="#service" className="hover:text-white transition-colors text-sm">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="#professional" className="hover:text-white transition-colors text-sm">
                    Professionals
                  </Link>
                </li>
                <li>
                  <Link href="#faq" className="hover:text-white transition-colors text-sm">
                    F&amp;Q
                  </Link>
                </li>
              </ul>
            </div>

            {/* 2. Properties Column */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                Properties
              </h3>
              <ul className="space-y-2.5 text-xs text-zinc-400 font-light">
                <li>
                  <Link href="#residential" className="hover:text-white transition-colors text-sm">
                    Residential
                  </Link>
                </li>
                <li>
                  <Link href="#industrial" className="hover:text-white transition-colors text-sm">
                    Industrial
                  </Link>
                </li>
                <li>
                  <Link href="#commercial" className="hover:text-white transition-colors text-sm">
                    Commercial
                  </Link>
                </li>
                <li>
                  <Link href="#lands" className="hover:text-white transition-colors text-sm">
                    Land Properties
                  </Link>
                </li>
                <li>
                  <Link href="#property-categories" className="hover:text-white transition-colors text-sm">
                    Categories
                  </Link>
                </li>
              </ul>
            </div>

            {/* 3. Services Column */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider text-sm">
                Services
              </h3>
              <ul className="space-y-2.5 text-xs text-zinc-400 font-light">
                <li>
                  <Link href="#service" className="hover:text-white transition-colors text-sm">
                    Service Providers
                  </Link>
                </li>
                <li>
                  <Link href="#professional" className="hover:text-white transition-colors text-sm">
                    Legal Counsel
                  </Link>
                </li>
                <li>
                  <Link href="#service" className="hover:text-white transition-colors text-sm">
                    Land Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#professional" className="hover:text-white transition-colors text-sm">
                    Valuation Advisory
                  </Link>
                </li>
                <li>
                  <Link href="#faq" className="hover:text-white transition-colors text-sm">
                    Support &amp; FAQ
                  </Link>
                </li>
              </ul>
            </div>

            {/* 4. Social Column */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                Social
              </h3>
              <ul className="space-y-3 text-xs text-zinc-400 font-light ">
                <li>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 hover:text-[#b8612b] transition-colors group"
                  >
                    <svg className="w-3.5 h-3.5 fill-current text-zinc-400 group-hover:text-[#b8612b] transition-colors" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    <span className="text-sm">Facebook</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 hover:text-[#b8612b] transition-colors group"
                  >
                    <svg className="w-3.5 h-3.5 fill-none stroke-current text-zinc-400 group-hover:text-[#b8612b] transition-colors stroke-2" viewBox="0 0 24 24">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                    </svg>
                    <span className="text-sm">Instagram</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 hover:text-[#b8612b] transition-colors group"
                  >
                    <svg className="w-3.5 h-3.5 fill-current text-zinc-400 group-hover:text-[#b8612b] transition-colors" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                    <span className="text-sm">Twitter / X</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://whatsapp.com"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 hover:text-[#b8612b] transition-colors group"
                  >
                    <svg className="w-3.5 h-3.5 fill-current text-zinc-400 group-hover:text-[#b8612b] transition-colors" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
                    </svg>
                    <span className="text-sm">WhatsApp</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 hover:text-[#b8612b] transition-colors group"
                  >
                    <svg className="w-3.5 h-3.5 fill-current text-zinc-400 group-hover:text-[#b8612b] transition-colors" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                    <span className="text-sm">YouTube</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* ================= BOTTOM WATERMARK & LEGAL SUB-BAR ================= */}
        <div className="relative pt-10 overflow-hidden">
          

          {/* Micro Legal Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 text-[11px] text-zinc-500 font-light border-t border-zinc-900">

            {/* Copyright Tagline */}
            <p className="text-sm text-zinc-400 font-[family-name:var(--font-jakarta)]">
              2026 &copy; Invest2Growth,  All Rights Reserved.
            </p>

            <div className="flex items-center gap-4 text-zinc-400">
              <Link href="#faq" className="hover:text-white transition-colors text-sm">
                Help &amp; FAQ
              </Link>
              <span>&bull;</span>
              <Link href="#professional" className="hover:text-white transition-colors text-sm">
                Legal Advisory
              </Link>
              <span>&bull;</span>
              <Link href="#service" className="hover:text-white transition-colors text-sm">
                Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
