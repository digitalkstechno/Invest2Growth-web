"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import {
  MapPin,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface LandProperty {
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

const landProperties: LandProperty[] = [
  {
    id: "greenfield-agro",
    nameEn: "Greenfield Agro Estates",
    tagline: "Fertile Agricultural & Farmhouse Land • Sanand",
    location: "Sanand - Nal Sarovar Highway",
    city: "Ahmedabad",
    categoryBadge: "Agricultural-Land",
    statusBadge: "100% Clear Title",
    price: "₹65 Lakh+",
    description: "100% legal clear-title fertile agricultural land parcels with private borewell water, paved road access, and perimeter fencing.",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80",
    href: "#greenfield-agro",
  },
  {
    id: "dholera-corridor",
    nameEn: "Dholera Expressway Investment Corridor",
    tagline: "High-Growth Mega SIR Belt • Dholera",
    location: "Dholera SIR - Expressway Highway",
    city: "Dholera",
    categoryBadge: "Non-Agricultural-NA",
    statusBadge: "Zone-A Commercial",
    price: "₹85 Lakh+",
    description: "Prime NA commercial and logistics land holding located adjacent to the 109km access-controlled expressway and international cargo airport.",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80",
    href: "#dholera-corridor",
  },
  {
    id: "gir-farms",
    nameEn: "Gir Sanctuary Organic Farm Lands",
    tagline: "Scenic Kesar Mango Orchards • Sasan Gir",
    location: "Talala - Sasan Gir Road",
    city: "Junagadh",
    categoryBadge: "Organic-Farmland",
    statusBadge: "Mature Orchard Yield",
    price: "₹1.10 Cr+",
    description: "Gated plantation estate featuring 120+ fruit-bearing organic Kesar mango trees, natural river stream frontage, and ready cottage foundation.",
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80",
    href: "#gir-farms",
  },
  {
    id: "palsana-land",
    nameEn: "Sachin - Palsana Industrial Land",
    tagline: "Heavy Industrial & Warehouse Land • Surat",
    location: "National Highway 48, Palsana",
    city: "Surat",
    categoryBadge: "Industrial-Corridor-Plot",
    statusBadge: "Immediate Registry",
    price: "₹2.40 Cr+",
    description: "Levelled heavy industrial land parcel with 100ft wide highway frontage, high-tension power line access, and direct container port connectivity.",
    image: "https://images.unsplash.com/photo-1590496793929-36417d3117de?auto=format&fit=crop&w=800&q=80",
    href: "#palsana-land",
  },
  {
    id: "narmada-riverfront",
    nameEn: "Narmada Riverfront Estate Land",
    tagline: "Pristine Waterfront Weekend Holding • Bharuch",
    location: "Zadeshwar - Narmada Riverbank",
    city: "Bharuch",
    categoryBadge: "Riverfront-Land",
    statusBadge: "Clear Title Registry",
    price: "₹1.25 Cr+",
    description: "Serene waterfront parcel tailored for weekend villas, eco-resorts, and leisure retreats with uninterrupted panoramic river views.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    href: "#narmada-riverfront",
  },
  {
    id: "gift-corridor-land",
    nameEn: "GIFT Corridor Strategic Land Parcel",
    tagline: "High-Density Residential & Commercial NA • Gandhinagar",
    location: "Koba - GIFT City Highway",
    city: "Gandhinagar",
    categoryBadge: "Commercial-NA-Land",
    statusBadge: "AUDA Sanctioned",
    price: "₹4.80 Cr+",
    description: "Prime institutional land parcel with high FSI potential, 4-lane arterial road access, and metro corridor connectivity.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    href: "#gift-corridor-land",
  },
];

export default function LandPropertiesSection() {
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
      id="lands"
      className="relative w-full px-4 sm:px-8 lg:px-12 xl:px-16 py-16 sm:py-20 lg:py-24 bg-white text-zinc-900 border-t border-gray-100 overflow-hidden scroll-mt-20"
    >
      {/* Anchor for #land from Property dropdown */}
      <span id="land" className="absolute -top-24 pointer-events-none" />

      {/* Background Architectural Blueprint Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="w-full h-full bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:3.5rem_3.5rem]" />
      </div>

      <div className="relative z-10 mx-auto">
        {/* ================= SECTION HEADER (CENTERED & MATCHING ESTABLISHED TYPOGRAPHY) ================= */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#b8612b]/10 border border-[#b8612b]/25 text-[#b8612b] text-xs font-bold tracking-widest uppercase shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#b8612b]" />
            STRATEGIC LAND HOLDINGS
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-[family-name:var(--font-jakarta)] font-semibold text-[#002E11] tracking-[-0.03em] leading-tight">
            Lands &amp; Strategic Parcels
          </h2>

          <p className="text-sm sm:text-base text-zinc-600 font-light leading-relaxed max-w-2xl mx-auto">
            Explore verified agricultural lands, industrial corridor holdings, and NA commercial plots with 100% legal title clearance across Gujarat.
          </p>
        </div>

        {/* ================= HORIZONTALLY SCROLLABLE CARDS SLIDER ================= */}
        <div className="relative">
          {/* Floating Left Arrow */}
          <button
            type="button"
            onClick={() => scroll("left")}
            className="absolute -left-2 sm:-left-5 top-1/2 -translate-y-1/2 z-30 flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white hover:bg-[#002E11] text-[#002E11] hover:text-white border border-gray-200/90 shadow-xl shadow-zinc-900/10 active:scale-95 transition-all duration-200 cursor-pointer"
            aria-label="Scroll left to previous land parcels"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Floating Right Arrow */}
          <button
            type="button"
            onClick={() => scroll("right")}
            className="absolute -right-2 sm:-right-5 top-1/2 -translate-y-1/2 z-30 flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white hover:bg-[#002E11] text-[#002E11] hover:text-white border border-gray-200/90 shadow-xl shadow-zinc-900/10 active:scale-95 transition-all duration-200 cursor-pointer"
            aria-label="Scroll right to next land parcels"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Horizontal Slider Track: Clean image without badges on top */}
          <div
            ref={scrollContainerRef}
            className="flex items-stretch gap-6 overflow-x-auto scroll-smooth pb-6 pt-2 snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {landProperties.map((property) => {
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

