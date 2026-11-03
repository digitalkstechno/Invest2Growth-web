"use client";

import React from "react";
import Link from "next/link";
import { Compass, Home, Factory, Building2, Palmtree, ArrowRight } from "lucide-react";

interface CategoryItem {
  id: string;
  title: string;
  image: string;
  icon: React.ElementType;
  count: string;
  description: string;
  href: string;
}

const categories: CategoryItem[] = [
  {
    id: "land",
    title: "LAND",
    image: "/categories/land.png",
    icon: Compass,
    count: "210+ Land Parcels",
    description: "Agricultural, NA & Industrial plots",
    href: "#land",
  },
  {
    id: "residential",
    title: "RESIDENTIAL",
    image: "/categories/residential.png",
    icon: Home,
    count: "450+ Luxury Homes",
    description: "Villas, duplexes & skyline flats",
    href: "#residential",
  },
  {
    id: "industrial",
    title: "INDUSTRIAL",
    image: "/categories/industrial.png",
    icon: Factory,
    count: "85+ Industrial Hubs",
    description: "Warehouses, sheds & logistics parks",
    href: "#industrial",
  },
  {
    id: "commercial",
    title: "COMMERCIAL",
    image: "/categories/commercial.png",
    icon: Building2,
    count: "120+ Prime Offices",
    description: "SCO plots, towers & retail spaces",
    href: "#commercial",
  },
  {
    id: "other",
    title: "OTHER",
    image: "/categories/other.png",
    icon: Palmtree,
    count: "40+ Exclusive Assets",
    description: "Luxury resorts & weekend estates",
    href: "#other",
  },
];

export default function PropertyCategoriesSection() {
  return (
    <section
      id="property-categories"
      className="relative w-full py-8 px-4 sm:px-8 lg:px-12 xl:px-16 bg-white text-zinc-900 overflow-hidden border-t border-zinc-200/80"
    >
      {/* Light Architectural Blueprint Grid Background */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="w-full h-full bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] bg-[size:3.5rem_3.5rem]" />
      </div>

      {/* Subtle Brand Ambient Glows */}
      <div className="absolute top-0 right-1/4 w-[450px] h-[450px] rounded-full bg-[#b8612b]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[450px] h-[450px] rounded-full bg-[#002E11]/5 blur-3xl pointer-events-none" />

      <div className="relative z-10">
        {/* ================= SECTION HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-2 rounded-full bg-[#b8612b]/10 border border-[#b8612b]/25 text-[#b8612b] text-xs font-bold tracking-widest uppercase shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#b8612b]" />
            EXPLORE ASSET CLASSES
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-2 font-[family-name:var(--font-jakarta)] font-semibold text-[#002E11] tracking-[-0.03em] leading-tight">
            Explore Property Categories
          </h2>

          <p className="text-sm sm:text-base text-zinc-600 font-light leading-relaxed max-w-2xl mx-auto">
            Explore verified portfolios across high-growth lands, luxury residential architectures, GIDC industrial zones, and prime commercial hubs.
          </p>
        </div>

        {/* ================= 5 CATEGORY DIORAMA CARDS ================= */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-5">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <Link
                key={cat.id}
                href={cat.href}
                className="group relative flex flex-col items-center p-4 sm:p-5 rounded-2xl bg-white hover:bg-zinc-50/80 border border-zinc-200/90 hover:border-[#b8612b]/50 shadow-md shadow-zinc-900/[0.04] hover:shadow-2xl hover:shadow-[#b8612b]/10 transition-all duration-300 hover:-translate-y-2"
              >
                {/* 3D Diorama Image Container - Clean without black box frame */}
                <div className="relative w-full aspect-[16/10] flex items-center justify-center overflow-hidden rounded-xl">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover filter drop-shadow-md group-hover:scale-105 transition-all duration-300 will-change-transform"
                  />
                </div>

                {/* Badge Label: Positioned BELOW the image, CENTERED (as requested) */}
                <div className="w-full mt-4 flex flex-col items-center">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#002E11] text-white border border-[#b8612b]/40 shadow-md shadow-[#002E11]/20 group-hover:bg-[#b8612b] group-hover:border-[#b8612b] group-hover:shadow-[#b8612b]/30 transition-all duration-300">
                    <Icon className="w-3.5 h-3.5 text-[#e59a67] group-hover:text-white shrink-0 transition-colors" />
                    <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-white font-sans whitespace-nowrap">
                      {cat.title}
                    </span>
                  </div>

                  {/* Subtitle / Unit count */}
                  <span className="text-[11px] sm:text-sm text-[#002E11] font-semibold mt-2.5 group-hover:text-[#b8612b] transition-colors text-center whitespace-nowrap">
                    {cat.count}
                  </span>

                  {/* Sub-description */}
                  <p className="text-[10px] sm:text-[13px] text-zinc-500 mt-0.5 text-center line-clamp-1 group-hover:text-zinc-700 transition-colors">
                    {cat.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
