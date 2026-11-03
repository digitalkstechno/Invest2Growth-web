"use client";

import React from "react";
import { MapPin, Tag } from "lucide-react";

export interface PropertyItem {
  id: string;
  name: string;
  category: "LAND" | "RESIDENTIAL" | "INDUSTRIAL" | "COMMERCIAL" | "OTHER";
  location: string;
  city: string;
  specs: string;
  description: string;
  image: string;
  href: string;
}

// 10 Properties: 5 in Line 1, 5 in Line 2 (2 cards for each of the 5 property categories)
const propertiesList: PropertyItem[] = [
  // ================= LINE 1 (5 PROPERTIES) =================
  {
    id: "prop-land-1",
    category: "LAND",
    name: "Greenfield Agro Estates",
    location: "Sanand - Nal Sarovar Highway",
    city: "Ahmedabad",
    specs: "1,500 - 5,000 Sq.Yd Plots",
    description: "Fertile agricultural & farmhouse land parcels with paved road access.",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=700&q=80",
    href: "#prop-land-1",
  },
  {
    id: "prop-res-1",
    category: "RESIDENTIAL",
    name: "The Golden Palm City",
    location: "Kosamba - Mahuuvej Road",
    city: "Surat",
    specs: "Villas & Plots • 180-450 Sq.Yd",
    description: "Master-planned gated living featuring luxury clubhouse and gardens.",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=700&q=80",
    href: "#prop-res-1",
  },
  {
    id: "prop-ind-1",
    category: "INDUSTRIAL",
    name: "Logix Industrial Hub",
    location: "Changodar GIDC Industrial Zone",
    city: "Ahmedabad",
    specs: "15,000 - 45,000 Sq.Ft Sheds",
    description: "Heavy-duty industrial sheds with power substation and 40ft road frontage.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=700&q=80",
    href: "#prop-ind-1",
  },
  {
    id: "prop-com-1",
    category: "COMMERCIAL",
    name: "Horizon Corporate Towers",
    location: "GIFT City Corridor",
    city: "Gandhinagar",
    specs: "Grade-A • 1,800 - 8,500 Sq.Ft",
    description: "Pre-leased corporate suites with high-speed lifts and double-glazed facade.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=700&q=80",
    href: "#prop-com-1",
  },
  {
    id: "prop-oth-1",
    category: "OTHER",
    name: "Azure Waters Resort",
    location: "Dwarka - Somnath Coastal Road",
    city: "Dwarka",
    specs: "Coastal Cottages & Suites",
    description: "Beachside leisure villas managed by a premier hospitality brand.",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=700&q=80",
    href: "#prop-oth-1",
  },

  // ================= LINE 2 (5 PROPERTIES) =================
  {
    id: "prop-land-2",
    category: "LAND",
    name: "Dholera Expressway Corridor",
    location: "Dholera SIR Highway",
    city: "Dholera",
    specs: "NA Plots • 2,000-10,000 Sq.Yd",
    description: "Prime commercial land next to the 109km expressway and airport zone.",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=700&q=80",
    href: "#prop-land-2",
  },
  {
    id: "prop-res-2",
    category: "RESIDENTIAL",
    name: "Royal Palms Luxury Enclave",
    location: "Sindhu Bhavan Extension",
    city: "Ahmedabad",
    specs: "4 & 5 BHK • 4,200 Sq.Ft",
    description: "Private villas with sprawling private lawns and smart automation.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=700&q=80",
    href: "#prop-res-2",
  },
  {
    id: "prop-ind-2",
    category: "INDUSTRIAL",
    name: "Dahej Petrochem Industrial Hub",
    location: "Dahej SEZ - PCPIR Corridor",
    city: "Bharuch",
    specs: "Plots • 5 - 25 Acres",
    description: "Industrial land with effluent pipeline grid and sea port proximity.",
    image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=700&q=80",
    href: "#prop-ind-2",
  },
  {
    id: "prop-com-2",
    category: "COMMERCIAL",
    name: "One International Financial Hub",
    location: "SG Highway, Bodakdev",
    city: "Ahmedabad",
    specs: "HQ Suites • 3,200-15,000 Sq.Ft",
    description: "Landmark corporate headquarters with EV stations and 3 basements.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=700&q=80",
    href: "#prop-com-2",
  },
  {
    id: "prop-oth-2",
    category: "OTHER",
    name: "Gir Sanctuary Eco Farmlands",
    location: "Talala - Sasan Gir Road",
    city: "Junagadh",
    specs: "Mango Orchards • 2 - 8 Acres",
    description: "Organic Kesar mango orchard lands with farmhouse zoning and water rights.",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=700&q=80",
    href: "#prop-oth-2",
  },
];

export default function Property() {
  return (
    <section
      id="distinguished-properties"
      className="relative w-full py-16 sm:py-20 lg:py-18 px-4 sm:px-8 lg:px-12 xl:px-16 bg-zinc-50 text-zinc-900 border-t border-gray-100 overflow-hidden"
    >
      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="w-full h-full bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:3.5rem_3.5rem]" />
      </div>

      <div className="relative z-10 mx-auto">
        {/* ================= SECTION HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#b8612b]/10 border border-[#b8612b]/25 text-[#b8612b] text-xs font-bold tracking-widest uppercase shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#b8612b]" />
            COMPLETE ASSET PORTFOLIO
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-[family-name:var(--font-jakarta)] font-semibold text-[#002E11] tracking-[-0.03em] leading-tight">
            Our Property Portfolio
          </h2>

          <p className="text-sm sm:text-base text-zinc-600 font-light leading-relaxed max-w-2xl mx-auto">
            verified premium properties across Gujarat — featuring 2 prime assets each across Land, Residential, Industrial, Commercial, and Other investment categories.
          </p>
        </div>

        {/* ================= 10 PROPERTIES GRID: LINE 1 (5 CARDS) & LINE 2 (5 CARDS) ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
          {propertiesList.map((property) => (
            <div
              key={property.id}
              className="flex flex-col justify-between rounded-3xl bg-white border border-gray-200/90 hover:border-[#b8612b]/50 shadow-md shadow-zinc-900/[0.03] hover:shadow-xl hover:shadow-[#b8612b]/10 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >

              {/* 2. Top: Property Image with Overlay Category Badge */}
              <div className="p-2.5 pb-0 shrink-0">
                <div className="relative w-full h-[165px] rounded-2xl overflow-hidden bg-gray-100">
                  {/* Category Badge on top of image */}
                  <div className="absolute top-2 left-2 z-10 px-2 py-0.5 rounded-md text-[9.5px] font-bold uppercase tracking-wider bg-[#002E11]/90 text-white backdrop-blur-xs border border-white/20 shadow-xs flex items-center gap-1">
                    <span className="w-1.2 h-1.2 rounded-full bg-[#b8612b]" />
                    {property.category}
                  </div>

                  <img
                    src={property.image}
                    alt={property.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>

              {/* 3. Middle & Content: Details */}
              <div className="p-3.5 space-y-2 flex-1 flex flex-col justify-between">
                <div className="space-y-1.5">
                  {/* Property Name */}
                  <h3 className="text-sm font-bold text-zinc-900 tracking-tight line-clamp-1 hover:text-[#002E11] transition-colors" title={property.name}>
                    {property.name}
                  </h3>

                  {/* Location & City */}
                  <div className="flex items-center text-xs text-zinc-500 gap-1">
                    <MapPin className="w-3 h-3 text-[#b8612b] shrink-0" />
                    <span className="truncate text-[12px]">{property.location}</span>
                  </div>

                  {/* Specification Tag */}
                  <div className="text-[11.5px] font-medium text-[#002E11] bg-[#002E11]/5 px-2 py-1 rounded-lg line-clamp-1">
                    {property.specs}
                  </div>

                  {/* Description */}
                  <p className="text-[11.9px] text-zinc-500 line-clamp-2 leading-relaxed font-light">
                    {property.description}
                  </p>
                </div>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}