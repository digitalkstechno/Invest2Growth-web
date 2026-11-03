"use client";

import React from "react";
import { MapPin } from "lucide-react";

interface ProjectItem {
  id: string;
  name: string;
  category: string;
  price: string;
  location: string;
  rating: string;
  reviewsCount: string;
  specs: string;
  description: string;
  image: string;
  badge: string;
  href: string;
}

const featuredProjects: ProjectItem[] = [
  {
    id: "palm-villas",
    name: "The Grand Palm Villas",
    category: "Residential",
    price: "₹2.85 Cr+",
    location: "Sindhu Bhavan Ext., Ahmedabad",
    rating: "4.9",
    reviewsCount: "128",
    specs: "4 & 5 BHK • 4,200 Sq.Ft",
    description: "Ultra-luxury independent villas with private lawns & heated infinity pool.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=700&q=80",
    badge: "RERA Approved",
    href: "#palm-villas",
  },
  {
    id: "horizon-tower",
    name: "Horizon Corporate Towers",
    category: "Commercial",
    price: "₹1.45 Cr+",
    location: "GIFT City Corridor, Gandhinagar",
    rating: "4.8",
    reviewsCount: "94",
    specs: "Grade-A Offices • 1,800 - 8,500 Sq.Ft",
    description: "High-yield smart corporate suites with pre-leased MNC tenant options.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=700&q=80",
    badge: "11.2% Expected ROI",
    href: "#horizon-tower",
  },
  {
    id: "greenfield-farms",
    name: "Greenfield Agro Estates",
    category: "Land",
    price: "₹65 Lakh+",
    location: "Sanand - Nal Sarovar Highway",
    rating: "4.9",
    reviewsCount: "112",
    specs: "1,500 - 5,000 Sq.Yd Plots",
    description: "100% legal clear title agricultural & NA land parcels with paved access.",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=700&q=80",
    badge: "Immediate Registry",
    href: "#greenfield-farms",
  },
  {
    id: "logix-park",
    name: "Logix Industrial Hub",
    category: "Industrial",
    price: "₹3.20 Cr+",
    location: "Changodar GIDC Zone, Ahmedabad",
    rating: "4.7",
    reviewsCount: "65",
    specs: "15,000 - 45,000 Sq.Ft Sheds",
    description: "Modern heavy industrial sheds with power substation and 40ft road frontage.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=700&q=80",
    badge: "GIDC Approved",
    href: "#logix-park",
  },
    {
    id: "azure-resort",
    name: "Azure Waters Resort",
    category: "Other",
    price: "₹1.95 Cr+",
    location: "Dwarka - Somnath Coastal Road",
    rating: "5.0",
    reviewsCount: "48",
    specs: "Coastal Cottages & Suites",
    description: "Private beachside retreat homes managed by premium hospitality brand.",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=700&q=80",
    badge: "Guaranteed Rental",
    href: "#azure-resort",
  },
    {
    id: "emerald-heights",
    name: "Emerald Heights Residences",
    category: "Residential",
    price: "₹1.15 Cr+",
    location: "South Bopal, Shela, Ahmedabad",
    rating: "4.8",
    reviewsCount: "86",
    specs: "3 & 4 BHK • 2,150 Sq.Ft",
    description: "High-rise apartments overlooking 3-acre green community podium.",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=700&q=80",
    badge: "Dec 2026 Possession",
    href: "#emerald-heights",
  },
];

export default function FeaturedProjectsSection() {
  return (
    <section
      id="featured-projects"
      className="relative w-full py-8 px-4 sm:px-8 lg:px-12 xl:px-16 bg-white text-zinc-900 border-t border-gray-100 overflow-hidden scroll-mt-20"
    >
      {/* Target anchor for both #features and #featured-projects */}
      <span id="features" className="absolute -top-24 pointer-events-none" />
      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="w-full h-full bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:3.5rem_3.5rem]" />
      </div>

      <div className="relative z-10 mx-auto">
        {/* ================= SECTION HEADER (CENTERED & MATCHING TYPOGRAPHY) ================= */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-2 rounded-full bg-[#b8612b]/10 border border-[#b8612b]/25 text-[#b8612b] text-xs font-bold tracking-widest uppercase shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#b8612b]" />
            SIGNATURE PORTFOLIO
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-2 font-[family-name:var(--font-jakarta)] font-semibold text-[#002E11] tracking-[-0.03em] leading-tight">
            Featured Projects
          </h2>

          <p className="text-sm sm:text-base text-zinc-600 font-light leading-relaxed max-w-2xl mx-auto">
            Explore verified prime residential developments, strategic land acquisitions, and grade-A commercial hubs.
          </p>
        </div>

        {/* ================= STATIC 4-CARD GRID (1 ROW OF 4 CARDS) ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-5 sm:gap-6">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col justify-between rounded-3xl bg-white border border-gray-200/90 hover:border-[#b8612b]/50 shadow-md shadow-zinc-900/[0.03] hover:shadow-xl hover:shadow-[#b8612b]/10 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              {/* Top: Project Image with Fixed Height & Exact Object Cover */}
              <div className="p-3 pb-0 shrink-0">
                <div className="relative w-full h-[200px] rounded-2xl overflow-hidden bg-gray-100">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>

              {/* Middle & Content: Uniform Heights for All Elements */}
              <div className="p-4 sm:p-5">
                <div className="space-y-2">
                  {/* Project Name (Fixed 1-line height) */}
                  <h3 className="text-sm sm:text-base font-bold text-zinc-900 tracking-tight line-clamp-1 h-6 flex items-center hover:text-[#002E11] transition-colors">
                    {project.name}
                  </h3>

                  {/* Location & Rating (Fixed height) */}
                  <div className="flex items-center justify-between text-xs text-zinc-500 gap-2 h-5">
                    <span className="flex items-center gap-1 truncate text-zinc-600">
                      <MapPin className="w-3.5 h-3.5 text-[#b8612b] shrink-0" />
                      <span className="truncate text-[13px]">{project.location}</span>
                    </span>
                  </div>

                  {/* Specification Tag (Fixed height) */}
                  <div className="flex items-center gap-1.5 text-[11px] font-semibold text-[#002E11] bg-[#002E11]/5 px-2.5 py-1 rounded-lg h-7">
                    <span className="truncate text-[12.5px]">{project.specs}</span>
                  </div>

                  {/* Short Description (Strict 2-line height container) */}
                  <div className="h-9 sm:h-10 overflow-hidden">
                    <p className="text-[12px] text-zinc-500 line-clamp-2 leading-relaxed font-light">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

