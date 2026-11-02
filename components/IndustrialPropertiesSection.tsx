"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import {
  MapPin,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface IndustrialProperty {
  id: string;
  nameEn: string;
  tagline: string;
  location: string;
  city: string;
  categoryBadge: string;
  statusBadge: string;
  description: string;
  image: string;
  href: string;
}

const industrialProperties: IndustrialProperty[] = [
  {
    id: "logix-global",
    nameEn: "Logix Global Logistics Park",
    tagline: "Modern Heavy Industrial Infrastructure • Ahmedabad",
    location: "Changodar GIDC Industrial Zone",
    city: "Ahmedabad",
    categoryBadge: "Industrial-Shed",
    statusBadge: "Ready for Possession",
    description: "Heavy-duty pre-engineered industrial shed with 40ft road frontage, 150 HP power feeder & dedicated weighbridge facility.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
    href: "#logix-global",
  },
  {
    id: "dahej-pcpir",
    nameEn: "Dahej Petrochem Industrial Hub",
    tagline: "PCPIR Special Investment Region • Bharuch",
    location: "Dahej SEZ - PCPIR Corridor",
    city: "Bharuch",
    categoryBadge: "Chemical-Industrial-Plot",
    statusBadge: "GPCB Approved",
    description: "Allotted industrial land with effluent pipeline connectivity, steam distribution grid, and direct sea port proximity.",
    image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=800&q=80",
    href: "#dahej-pcpir",
  },
  {
    id: "sanand-ancillary",
    nameEn: "Sanand Auto Ancillary Park",
    tagline: "Automotive Growth Corridor • Sanand",
    location: "Sanand GIDC Phase II",
    city: "Ahmedabad",
    categoryBadge: "Manufacturing-Facility",
    statusBadge: "Ongoing",
    description: "World-class engineering plant layout featuring crane gantries, epoxy flooring, 500 KVA substation & zero liquid discharge.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    href: "#sanand-ancillary",
  },
  {
    id: "halol-manufacturing",
    nameEn: "Halol Manufacturing Zone",
    tagline: "Engineering & Precision Fabrication • Vadodara",
    location: "Halol - Vadodara Expressway",
    city: "Vadodara",
    categoryBadge: "Industrial-Land",
    statusBadge: "Immediate Registry",
    description: "Levelled clear-title industrial land parcel with dual-carriage highway access, water treatment and high-voltage supply.",
    image: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=800&q=80",
    href: "#halol-manufacturing",
  },
  {
    id: "surat-textile-park",
    nameEn: "Surat Diamond & Textile Park",
    tagline: "High-Volume Apparel & Processing • Surat",
    location: "Sachin GIDC - Palsana Road",
    city: "Surat",
    categoryBadge: "Textile-Industrial-Park",
    statusBadge: "Ready for Possession",
    description: "Integrated textile & diamond processing units with common effluent treatment plant (CETP) and natural gas pipeline.",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80",
    href: "#surat-textile-park",
  },
  {
    id: "jhagadia-megapark",
    nameEn: "Jhagadia Megapark Logistics Hub",
    tagline: "Strategic Rail & Highway Logistics • Bharuch",
    location: "Jhagadia GIDC Highway",
    city: "Bharuch",
    categoryBadge: "Cold-Storage-Warehouse",
    statusBadge: "New Launch",
    description: "Modern temperature-controlled warehouse and multi-modal freight terminal with automated dock levellers.",
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=800&q=80",
    href: "#jhagadia-megapark",
  },
];

export default function IndustrialPropertiesSection() {
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
      id="industrial"
      className="relative w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-12 xl:px-16 bg-white text-zinc-900 border-t border-gray-100 overflow-hidden scroll-mt-20"
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
            GIDC & LOGISTICS HUBS
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-[family-name:var(--font-jakarta)] font-semibold text-[#002E11] tracking-[-0.03em] leading-tight">
            Industrial Properties
          </h2>

          <p className="text-sm sm:text-base text-zinc-600 font-light leading-relaxed max-w-2xl mx-auto">
            Explore verified GIDC plots, heavy manufacturing facilities, modern logistics parks, and cold storage warehouses across Gujarat&apos;s prime industrial corridors.
          </p>
        </div>

        {/* ================= HORIZONTALLY SCROLLABLE CARDS SLIDER ================= */}
        <div className="relative">
          {/* Floating Left Arrow */}
          <button
            type="button"
            onClick={() => scroll("left")}
            className="absolute -left-2 sm:-left-5 top-1/2 -translate-y-1/2 z-30 flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white hover:bg-[#002E11] text-[#002E11] hover:text-white border border-gray-200/90 shadow-xl shadow-zinc-900/10 active:scale-95 transition-all duration-200 cursor-pointer"
            aria-label="Scroll left to previous industrial properties"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Floating Right Arrow */}
          <button
            type="button"
            onClick={() => scroll("right")}
            className="absolute -right-2 sm:-right-5 top-1/2 -translate-y-1/2 z-30 flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white hover:bg-[#002E11] text-[#002E11] hover:text-white border border-gray-200/90 shadow-xl shadow-zinc-900/10 active:scale-95 transition-all duration-200 cursor-pointer"
            aria-label="Scroll right to next industrial properties"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Horizontal Slider Track: Uniform Width & Height Cards with Overlapping Editorial Style */}
          <div
            ref={scrollContainerRef}
            className="flex items-stretch gap-6 overflow-x-auto scroll-smooth pb-6 pt-2 snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {industrialProperties.map((property) => {
              const isFav = favoriteIds[property.id];

              return (
                <div
                  key={property.id}
                  className="w-[295px] sm:w-[325px] md:w-[340px] flex-shrink-0 snap-start flex flex-col rounded-2xl bg-white border border-gray-200/90 hover:border-[#b8612b]/40 shadow-md shadow-zinc-900/[0.04] hover:shadow-2xl hover:shadow-[#b8612b]/15 transition-all duration-300 hover:-translate-y-1.5 overflow-hidden"
                >
                  {/* 1. TOP IMAGE CONTAINER */}
                  <div className="relative w-full h-52 sm:h-56 overflow-hidden bg-gray-100 shrink-0">
                    <img
                      src={property.image}
                      alt={property.nameEn}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>

                  {/* 2. OVERLAPPING WHITE CONTENT CARD (Exact editorial layout) */}
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

                      {/* Location Row */}
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