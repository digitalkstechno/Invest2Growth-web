"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import {
  MapPin,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface CommercialProperty {
  id: string;
  nameEn: string;
  tagline: string;
  location: string;
  city: string;
  categoryBadge: string;
  statusBadge: string;
  price: string;
  description: string;
  image: string;
  href: string;
}

const commercialProperties: CommercialProperty[] = [
  {
    id: "horizon-towers",
    nameEn: "Horizon Corporate Towers",
    tagline: "Grade-A Smart Corporate Suites • Gandhinagar",
    location: "GIFT City Corridor",
    city: "Gandhinagar",
    categoryBadge: "Grade-A-Offices",
    statusBadge: "11.2% Expected ROI",
    price: "₹1.45 Cr+",
    description: "Pre-leased multi-tenant corporate office suites with high-speed elevators, central HVAC & double-glazed acoustic facade.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    href: "#horizon-towers",
  },
  {
    id: "one-financial-hub",
    nameEn: "One International Financial Hub",
    tagline: "SEZ & Domestic Business Spaces • Ahmedabad",
    location: "SG Highway, Bodakdev",
    city: "Ahmedabad",
    categoryBadge: "Corporate-HQ",
    statusBadge: "Ready for Fitouts",
    price: "₹2.20 Cr+",
    description: "Iconic commercial landmark featuring grand entrance lobby, 3-tier basements, EV charging bays & LEED Platinum rating.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    href: "#one-financial-hub",
  },
  {
    id: "palladium-retail",
    nameEn: "The Palladium Retail Galleria",
    tagline: "High-Footfall Luxury High-Street • Surat",
    location: "VIP Road, Vesu",
    city: "Surat",
    categoryBadge: "Retail-Showrooms",
    statusBadge: "New Launch",
    price: "₹1.80 Cr+",
    description: "Double-height ground retail shops and anchor showrooms with 120ft wide road frontage and automated valet parking.",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
    href: "#palladium-retail",
  },
  {
    id: "alkapuri-boulevard",
    nameEn: "Alkapuri Business Boulevard",
    tagline: "Bespoke Boutique Workspaces • Vadodara",
    location: "RC Dutt Road, Alkapuri",
    city: "Vadodara",
    categoryBadge: "Boutique-Offices",
    statusBadge: "Ready for Possession",
    price: "₹95 Lakh+",
    description: "Premium boutique corporate offices designed for chartered firms, consultants, and tech agencies with smart access controls.",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80",
    href: "#alkapuri-boulevard",
  },
  {
    id: "trade-square",
    nameEn: "Trade Square Commercial Hub",
    tagline: "Integrated Retail & Office Complex • Ahmedabad",
    location: "Sindhu Bhavan Road",
    city: "Ahmedabad",
    categoryBadge: "SCO-Commercial",
    statusBadge: "Ongoing",
    price: "₹1.65 Cr+",
    description: "Modern Shop-Cum-Office (SCO) development with terrace food court, escalators, and dedicated banking branches.",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80",
    href: "#trade-square",
  },
  {
    id: "apex-tech-park",
    nameEn: "Apex IT & Tech Park",
    tagline: "Plug & Play Global Tech Campus • Gandhinagar",
    location: "Infocity Corridor",
    city: "Gandhinagar",
    categoryBadge: "IT-Park-Spaces",
    statusBadge: "Immediate Registry",
    price: "₹2.75 Cr+",
    description: "Fully serviced commercial floor plates with 100% DG power backup, optical fiber backbone and cafeteria podium.",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80",
    href: "#apex-tech-park",
  },
];

export default function CommercialPropertiesSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [favoriteIds, setFavoriteIds] = useState<Record<string, boolean>>({});

  const toggleFavorite = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setFavoriteIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Manual scroll with Left / Right buttons
  const scroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const firstCard = container.querySelector<HTMLElement>(":scope > div");
    const cardWidth = firstCard ? firstCard.offsetWidth : 340;
    const gap = 24; // 1.5rem / gap-6
    const scrollAmount = cardWidth + gap;

    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="commercial"
      className="relative w-full px-4 sm:px-8 lg:px-12 xl:px-16 py-16 sm:py-20 lg:py-24 bg-white text-zinc-900 border-t border-gray-100 overflow-hidden scroll-mt-20"
    >
      {/* Background Architectural Blueprint Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="w-full h-full bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:3.5rem_3.5rem]" />
      </div>

      <div className="relative z-10 mx-auto">
        {/* ================= SECTION HEADER (CENTERED & MATCHING ESTABLISHED TYPOGRAPHY) ================= */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#b8612b]/10 border border-[#b8612b]/25 text-[#b8612b] text-xs font-bold tracking-widest uppercase shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#b8612b]" />
            PRIME CORPORATE ASSETS
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-[family-name:var(--font-jakarta)] font-semibold text-[#002E11] tracking-[-0.03em] leading-tight">
            Commercial Properties
          </h2>

          <p className="text-sm sm:text-base text-zinc-600 font-light leading-relaxed max-w-2xl mx-auto">
            Explore verified grade-A corporate towers, high-footfall retail showrooms, and modern business hubs across prime commercial corridors.
          </p>
        </div>

        {/* ================= HORIZONTALLY SCROLLABLE CARDS SLIDER ================= */}
        <div className="relative">
          {/* Floating Left Arrow */}
          <button
            type="button"
            onClick={() => scroll("left")}
            className="absolute -left-2 sm:-left-5 top-1/2 -translate-y-1/2 z-30 flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white hover:bg-[#002E11] text-[#002E11] hover:text-white border border-gray-200/90 shadow-xl shadow-zinc-900/10 active:scale-95 transition-all duration-200 cursor-pointer"
            aria-label="Scroll left to previous commercial properties"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Floating Right Arrow */}
          <button
            type="button"
            onClick={() => scroll("right")}
            className="absolute -right-2 sm:-right-5 top-1/2 -translate-y-1/2 z-30 flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white hover:bg-[#002E11] text-[#002E11] hover:text-white border border-gray-200/90 shadow-xl shadow-zinc-900/10 active:scale-95 transition-all duration-200 cursor-pointer"
            aria-label="Scroll right to next commercial properties"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Horizontal Slider Track: Clean image without badges on top */}
          <div
            ref={scrollContainerRef}
            className="flex items-stretch gap-6 overflow-x-auto scroll-smooth pb-6 pt-2 snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {commercialProperties.map((property) => {
              const isFav = favoriteIds[property.id];

              return (
                <div
                  key={property.id}
                  className="w-[295px] sm:w-[325px] md:w-[340px] flex-shrink-0 snap-start flex flex-col rounded-2xl bg-white border border-gray-200/90 hover:border-[#b8612b]/40 shadow-md shadow-zinc-900/[0.04] hover:shadow-2xl hover:shadow-[#b8612b]/15 transition-all duration-300 hover:-translate-y-1.5 overflow-hidden"
                >
                  {/* 1. TOP IMAGE CONTAINER - Clean photo, ZERO badges on top */}
                  <div className="relative w-full h-52 sm:h-56 overflow-hidden bg-gray-100 shrink-0">
                    <img
                      src={property.image}
                      alt={property.nameEn}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>

                  {/* 2. OVERLAPPING WHITE CONTENT CARD */}
                  <div className="relative -mt-8 mx-3.5 sm:mx-4 mb-4 z-20 bg-white rounded-xl shadow-lg border border-gray-100 p-4 sm:p-5 text-center flex flex-col justify-between flex-1">
                    <div>
                      {/* Project Title (English & Gujarati) with Verified Blue Checkmark */}
                      <div className="flex items-center justify-center gap-1.5 h-6">
                        <h3 className="text-sm sm:text-base font-bold text-zinc-900 tracking-tight line-clamp-1 uppercase hover:text-[#002E11] transition-colors">
                          {property.nameEn}
                        </h3>
                      </div>

                      {/* Subtitle / Tagline in Italic */}
                      <p className="text-[12.5px] text-zinc-500 mt-0.5 h-4 line-clamp-1 font-sans">
                        {property.tagline}
                      </p>

                      {/* Editorial Centered Thin Divider */}
                      <div className="w-12 h-0.5 bg-[#b8612b]/50 mx-auto my-2.5 rounded-full" />

                      {/* Location & Starting Price Row */}
                      <div className="flex items-center justify-center gap-1 text-xs text-zinc-600 mb-2 h-4.5">
                        <MapPin className="w-3.5 h-3.5 text-[#b8612b] shrink-0" />
                        <span className="truncate">{property.location}, {property.city}</span>
                      </div>

                      {/* Centered Description */}
                      <p className="text-[11.9px] text-zinc-500 line-clamp-2 leading-relaxed font-light h-9 overflow-hidden">
                        {property.description}
                      </p>

                      {/* Badges Row: Category pill & Status */}
                      <div className="flex items-center justify-center flex-wrap gap-2 mt-2.5 pt-2.5 border-t border-gray-100">
                        <span className="px-2.5 py-0.5 rounded-full border border-blue-200 bg-blue-50/70 text-blue-700 text-[11.5px] font-semibold">
                          {property.categoryBadge}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full border border-amber-300/80 bg-amber-50 text-amber-800 text-[10.5px] font-semibold">
                          {property.statusBadge}
                        </span>
                      </div>
                    </div>

                    {/* Centered LEARN MORE Button */}
                    <div className="mt-3.5 pt-1">
                      <Link
                        href={property.href}
                        className="inline-flex items-center justify-center w-full py-2.5 px-4 rounded-lg border border-gray-300 hover:border-[#b8612b] hover:bg-[#b8612b] text-zinc-700 hover:text-white text-xs font-bold tracking-widest uppercase transition-all duration-200 shadow-xs hover:shadow-md"
                      >
                        <span>LEARN MORE</span>
                        <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

