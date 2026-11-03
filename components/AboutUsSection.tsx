"use client";

import React, { useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

interface TabContent {
  id: string;
  label: string;
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  image: string;
  imageAlt: string;
}

const tabsData: TabContent[] = [
  {
    id: "about",
    label: "About",
    title: "About",
    description:
      "At the heart of our mission lies a simple yet powerful commitment: to transform the traditional real estate process into an engaging, seamless, and empowering experience for everyone involved. invest2growth is your trusted partner every step of the way.",
    buttonText: "More about us",
    buttonHref: "#professional",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
    imageAlt: "invest2growth modern minimalist living interior",
  },
];

export default function AboutUsSection() {
  const [activeTabId, setActiveTabId] = useState<string>("about");

  const currentTab =
    tabsData.find((tab) => tab.id === activeTabId) || tabsData[0];

  return (
    <section
      id="about"
      className="relative w-full bg-white  py-16 sm:py-20 lg:py-18 px-4 sm:px-8 lg:px-12 xl:px-16 border-t border-b border-gray-100 scroll-mt-24 overflow-hidden"
    >
      <span id="about-us" className="absolute -top-24 pointer-events-none" />
      <span id="aboutus" className="absolute -top-24 pointer-events-none" />

      {/* Subtle Architectural Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-25">
        <div className="w-full h-full bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:3.5rem_3.5rem]" />
      </div>

      <div className="relative z-10 mx-auto">
        {/* ================= TOP HEADER (2-COL) ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start justify-between pb-12 sm:pb-16 border-b border-gray-100">
          {/* Left Title */}
          <div className="lg:col-span-7 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#b8612b]/10 border border-[#b8612b]/25 text-[#b8612b] text-xs font-bold tracking-widest uppercase shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#b8612b]" />
              ABOUT INVEST2GROWTH
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-[family-name:var(--font-jakarta)] font-semibold text-[#002E11] tracking-[-0.03em] leading-tight">
              Your Trusted Property, <br /> Partner 
            </h2>
          </div>

          {/* Right Subtitle */}
          <div className="lg:col-span-5 flex items-center h-full pt-4 lg:pt-8">
            <p className="text-sm sm:text-base text-zinc-600 font-light leading-relaxed max-w-2xl mx-auto">
              Founded by a team of seasoned real estate professionals and digital
              innovators, we&apos;ve built <span className="text-[#002E11] font-semibold">invest2growth</span> on the pillars of
              transparency, expertise, and technology.
            </p>
          </div>
        </div>

        {/* ================= MAIN CONTENT GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch pt-12 ">
          {/* ================= LEFT BENTO: 4 STATS CARDS (5 COLS) ================= */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4 h-full">
            {/* Card 1: 18k+ Happy Customers (Stone Light) */}
            <div className="bg-stone-50/90 border border-stone-200/80 rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 hover:border-[#b8612b]/40 hover:shadow-md hover:scale-[1.02] min-h-[160px] sm:min-h-[180px]">
              <span className="text-4xl sm:text-5xl lg:text-[54px] font-black text-[#002E11] tracking-tight leading-none">
                18k+
              </span>
              <span className="text-xs sm:text-sm font-semibold text-zinc-600 mt-6 sm:mt-10 font-[family-name:var(--font-jakarta)]">
                Happy Customers
              </span>
            </div>

            {/* Card 2: 25+ Years of Experience (Deep Green Brand Card #002E11) */}
            <div className="relative overflow-hidden bg-[#002E11] text-white rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 hover:scale-[1.02] min-h-[160px] sm:min-h-[180px] shadow-xl shadow-[#002E11]/20 border border-emerald-900/40 group">
              {/* Subtle Warm Amber Glow */}
              <div className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-[#b8612b]/20 blur-xl pointer-events-none group-hover:bg-[#b8612b]/35 transition-all" />

              <span className="relative z-10 text-4xl sm:text-5xl lg:text-[54px] font-black text-white tracking-tight leading-none">
                25+
              </span>
              <span className="relative z-10 text-xs sm:text-sm font-semibold text-[#e59a67] mt-6 sm:mt-10 font-[family-name:var(--font-jakarta)]">
                Years of Experience
              </span>
            </div>

            {/* Card 3: 250+ (Stone Light) */}
            <div className="bg-stone-50/90 border border-stone-200/80 rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 hover:border-[#b8612b]/40 hover:shadow-md hover:scale-[1.02] min-h-[160px] sm:min-h-[180px]">
              <span className="text-4xl sm:text-5xl lg:text-[54px] font-black text-[#002E11] tracking-tight leading-none">
                250+
              </span>
              <span className="text-xs sm:text-sm font-semibold text-zinc-600 mt-6 sm:mt-10 font-[family-name:var(--font-jakarta)]">
                Verified Projects
              </span>
            </div>

            {/* Card 4: 32+ (Stone Light) */}
            <div className="bg-stone-50/90 border border-stone-200/80 rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 hover:border-[#b8612b]/40 hover:shadow-md hover:scale-[1.02] min-h-[160px] sm:min-h-[180px]">
              <span className="text-4xl sm:text-5xl lg:text-[54px] font-black text-[#002E11] tracking-tight leading-none">
                32+
              </span>
              <span className="text-xs sm:text-sm font-semibold text-zinc-600 mt-6 sm:mt-10 font-[family-name:var(--font-jakarta)]">
                Strategic Hubs
              </span>
            </div>
          </div>

          {/* ================= RIGHT BENTO: PILLS + MAIN ABOUT CARD (7 COLS) ================= */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-3 h-full">
            {/* Main Interactive Card */}
            <div className="flex-1 bg-stone-50/90 border border-stone-200/80 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row gap-6 sm:gap-8 items-center justify-between shadow-xs">
              {/* Left Text Column */}
              <div className="flex-1 flex flex-col justify-between h-full space-y-3">
                <div className="space-y-3">
                  <h3 className="text-2xl sm:text-3xl font-[family-name:var(--font-jakarta)] font-normal text-[#002E11] tracking-tight">
                    {currentTab.title}
                  </h3>
                  <p className="text-sm sm:text-base text-zinc-600 font-light leading-relaxed max-w-2xl mx-auto">
                    {currentTab.description}
                  </p>
                </div>

                <div className="pt-2">
                  <Link
                    href={currentTab.buttonHref}
                    className="inline-flex items-center gap-2 bg-[#002E11] font-[family-name:var(--font-jakarta)] text-white text-xs sm:text-sm font-semibold px-6 py-2.5 rounded-full transition-all group shadow-sm shadow-[#b8612b]/20 hover:scale-[1.02]"
                  >
                    <span>{currentTab.buttonText}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Right Image */}
              <div className="relative w-full md:w-56 lg:w-64 h-56 sm:h-64 rounded-2xl overflow-hidden shrink-0 shadow-sm border border-stone-200/80">
                <img
                  src={currentTab.image}
                  alt={currentTab.imageAlt}
                  className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
