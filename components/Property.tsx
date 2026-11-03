"use client";

import React, { useState } from "react";
import { MapPin, ChevronDown } from "lucide-react";

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

// 20 Properties: 4 cards for each of the 5 property categories (LAND, RESIDENTIAL, INDUSTRIAL, COMMERCIAL, OTHER)
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
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=700&q=80",
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
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=700&q=80",
    href: "#prop-oth-2",
  },

  // ================= LINE 3 (5 PROPERTIES - 3RD SET) =================
  {
    id: "prop-land-3",
    category: "LAND",
    name: "Sanand Industrial Land Plots",
    location: "Sanand - Viramgam Highway",
    city: "Ahmedabad",
    specs: "NA Plots • 3,000 - 15,000 Sq.Yd",
    description: "Clear title non-agricultural plots with 4-lane highway connectivity and power.",
    image: "https://images.unsplash.com/photo-1500076656116-558758c991c1?auto=format&fit=crop&w=700&q=80",
    href: "#prop-land-3",
  },
  {
    id: "prop-res-3",
    category: "RESIDENTIAL",
    name: "The Skyline Penthouse Terraces",
    location: "Vesu Main Canal Road",
    city: "Surat",
    specs: "4 & 5 BHK Duplex • 3,800 Sq.Ft",
    description: "Exclusive skyline living with private plunge pools and panoramic views.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=700&q=80",
    href: "#prop-res-3",
  },
  {
    id: "prop-ind-3",
    category: "INDUSTRIAL",
    name: "Mandal - Becharaji Auto Logistics",
    location: "Mandal GIDC Zone",
    city: "Ahmedabad",
    specs: "20,000 - 60,000 Sq.Ft Sheds",
    description: "PEB structure logistics parks designed for auto component manufacturers.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=700&q=80",
    href: "#prop-ind-3",
  },
  {
    id: "prop-com-3",
    category: "COMMERCIAL",
    name: "The Capital Corporate Boulevard",
    location: "Science City Road, Sola",
    city: "Ahmedabad",
    specs: "Retail & Offices • 1,200 - 6,000 Sq.Ft",
    description: "High-footfall commercial shopping boulevard with corporate boutique offices.",
    image: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&w=700&q=80",
    href: "#prop-com-3",
  },
  {
    id: "prop-oth-3",
    category: "OTHER",
    name: "Saputara Valley Hills Estate",
    location: "Hill Station Scenic Highway",
    city: "Dang",
    specs: "Weekend Plots • 1 - 3 Acres",
    description: "Hillside nature plots ideal for luxury boutique eco-resorts and private villas.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=700&q=80",
    href: "#prop-oth-3",
  },

  // ================= LINE 4 (5 PROPERTIES - 4TH SET) =================
  {
    id: "prop-land-4",
    category: "LAND",
    name: "Surat-Navsari Twin City Corridor",
    location: "NH-48 Growth Belt",
    city: "Surat",
    specs: "Commercial Land • 5,000 - 25,000 Sq.Yd",
    description: "Strategic highway frontage parcel zoned for commercial logistics and retail.",
    image: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=700&q=80",
    href: "#prop-land-4",
  },
  {
    id: "prop-res-4",
    category: "RESIDENTIAL",
    name: "Eden Greens Golf Residences",
    location: "Raysan - GIFT City Link Road",
    city: "Gandhinagar",
    specs: "3 & 4 BHK Luxury • 2,400 Sq.Ft",
    description: "Golf-course facing residential apartments with club amenities and green vistas.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=700&q=80",
    href: "#prop-res-4",
  },
  {
    id: "prop-ind-4",
    category: "INDUSTRIAL",
    name: "Halol Manufacturing Park",
    location: "Halol GIDC Phase-IV",
    city: "Vadodara",
    specs: "Sheds & Plots • 25,000 Sq.Ft+",
    description: "Heavy engineering ready industrial sheds with crane provisions and substation.",
    image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=700&q=80",
    href: "#prop-ind-4",
  },
  {
    id: "prop-com-4",
    category: "COMMERCIAL",
    name: "GIFT City Global Fintech Tower",
    location: "SEZ Processing Zone, GIFT City",
    city: "Gandhinagar",
    specs: "Grade-A IT/ITES • 2,500 - 20,000 Sq.Ft",
    description: "State-of-the-art smart offices with dual power feeds and automated climate.",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=700&q=80",
    href: "#prop-com-4",
  },
  {
    id: "prop-oth-4",
    category: "OTHER",
    name: "Polo Forest Heritage Riverfront",
    location: "Idar - Polo Forest Sanctuary",
    city: "Sabarkantha",
    specs: "Riverside Lands • 3 - 10 Acres",
    description: "Pristine river-touch agricultural and leisure retreat land amidst dense forest.",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=700&q=80",
    href: "#prop-oth-4",
  },
];

export default function Property() {
  const [showAll, setShowAll] = useState(false);
  const displayedProperties = showAll ? propertiesList : propertiesList.slice(0, 10);

  return (
    <section
      id="distinguished-properties"
      className="relative w-full py-8 px-4 sm:px-8 lg:px-12 xl:px-16 bg-zinc-50 text-zinc-900 border-t border-gray-100 overflow-hidden"
    >
      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="w-full h-full bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:3.5rem_3.5rem]" />
      </div>

      <div className="relative z-10 mx-auto">
        {/* ================= SECTION HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-2 rounded-full bg-[#b8612b]/10 border border-[#b8612b]/25 text-[#b8612b] text-xs font-bold tracking-widest uppercase shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#b8612b]" />
            COMPLETE ASSET PORTFOLIO
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-2 font-[family-name:var(--font-jakarta)] font-semibold text-[#002E11] tracking-[-0.03em] leading-tight">
            Our Property Portfolio
          </h2>

          <p className="text-sm sm:text-base text-zinc-600 font-light leading-relaxed max-w-2xl mx-auto font-[family-name:var(--font-jakarta)]">
            Verified prime properties across Gujarat’s leading growth corridors.
          </p>
        </div>

        {/* ================= PROPERTIES GRID: 5 CARDS PER ROW ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
          {displayedProperties.map((property) => (
            <div
              key={property.id}
              className="flex flex-col justify-between rounded-3xl bg-white border border-gray-200/90 hover:border-[#b8612b]/50 shadow-md shadow-zinc-900/[0.03] hover:shadow-xl hover:shadow-[#b8612b]/10 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              {/* Top: Property Image with Overlay Category Badge */}
              <div className="p-2.5 pb-0 shrink-0">
                <div className="relative w-full h-[165px] rounded-2xl overflow-hidden bg-gray-100">
                  {/* Category Badge on top of image */}
                  <div className="absolute top-2 left-2 z-10 px-2 py-0.5 rounded-md text-[9.5px] font-bold uppercase tracking-wider bg-[#002E11]/90 text-white backdrop-blur-xs border border-white/20 shadow-xs flex items-center gap-1 font-[family-name:var(--font-jakarta)]">
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

              {/* Middle & Content: Details */}
              <div className="p-3.5 space-y-2 flex-1 flex flex-col justify-between">
                <div className="space-y-1.5">
                  {/* Property Name */}
                  <h3 className="text-sm font-bold text-zinc-900 tracking-tight line-clamp-1 hover:text-[#002E11] transition-colors font-[family-name:var(--font-jakarta)]" title={property.name}>
                    {property.name}
                  </h3>

                  {/* Location & City */}
                  <div className="flex items-center text-xs text-zinc-500 gap-1">
                    <MapPin className="w-3 h-3 text-[#b8612b] shrink-0" />
                    <span className="truncate text-[12px] font-[family-name:var(--font-jakarta)]">{property.location}</span>
                  </div>

                  {/* Specification Tag */}
                  <div className="text-[11.5px] font-medium text-[#002E11] bg-[#002E11]/5 px-2 py-1 rounded-lg line-clamp-1 font-[family-name:var(--font-jakarta)]">
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

        {/* ================= VIEW MORE / VIEW LESS BUTTON ================= */}
        <div className="mt-10 sm:mt-8 text-center">
          <button
            type="button"
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#002E11] hover:bg-[#b8612b] text-white text-xs sm:text-sm font-semibold transition-all shadow-md hover:shadow-lg cursor-pointer hover:-translate-y-0.5 font-[family-name:var(--font-jakarta)]"
          >
            <span>{showAll ? "View Less Properties" : "View More Properties"}</span>
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-300 ${
                showAll ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>
      </div>
    </section>
  );
}
