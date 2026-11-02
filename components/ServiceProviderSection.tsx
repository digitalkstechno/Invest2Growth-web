"use client";

import React from "react";
import Link from "next/link";
import {
  Compass,
  Scale,
  Building2,
  HardHat,
  Calculator,
  Palette,
  ArrowUpRight,
} from "lucide-react";

interface ServiceItem {
  id: string;
  number: string;
  titleEn: string;
  shortDesc: string;
  tag: string;
  icon: React.ElementType;
}

const services: ServiceItem[] = [
  {
    id: "survey",
    number: "01",
    titleEn: "Land Survey & Soil Testing",
    shortDesc: "DGPS boundary mapping, contour survey & soil bearing capacity reports.",
    tag: "DGPS Mapping",
    icon: Compass,
  },
  {
    id: "legal",
    number: "02",
    titleEn: "Revenue & Legal Title Advocates",
    shortDesc: "30-year title search, 7/12 scrutiny, NA zoning & RERA contract vetting.",
    tag: "Title Clearance",
    icon: Scale,
  },
  {
    id: "architecture",
    number: "03",
    titleEn: "Architects & Master Planners",
    shortDesc: "Municipal sanction blueprints, FSI optimization & photorealistic 3D renders.",
    tag: "Planning & 3D",
    icon: Building2,
  },
  {
    id: "contractor",
    number: "04",
    titleEn: "Civil & PEB Industrial Contractors",
    shortDesc: "Turnkey construction, pre-engineered industrial sheds & asphalt roads.",
    tag: "Turnkey Execution",
    icon: HardHat,
  },
  {
    id: "valuation",
    number: "05",
    titleEn: "Chartered Property Valuers",
    shortDesc: "Govt. & bank-approved fair market valuation & capital gains reports.",
    tag: "Bank Approved",
    icon: Calculator,
  },
  {
    id: "interior",
    number: "06",
    titleEn: "Turnkey Interior Designers",
    shortDesc: "Bespoke residential interiors, modular kitchens & corporate fitouts.",
    tag: "Interior Fitouts",
    icon: Palette,
  },
];

export default function ServiceProviderSection() {
  return (
    <section
      id="service"
      className="relative w-full py-16 sm:py-20 px-4 sm:px-8 lg:px-12 xl:px-16 bg-white text-zinc-900 border-t border-gray-100 overflow-hidden scroll-mt-20"
    >
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ================= MINIMAL CENTERED SECTION HEADER ================= */}
        <div className="text-center max-w-2xl mx-auto space-y-2.5 mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#b8612b]/10 border border-[#b8612b]/25 text-[#b8612b] text-xs font-bold tracking-widest uppercase shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#b8612b]" />
            SERVICE DIRECTORY
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-[family-name:var(--font-jakarta)] font-semibold text-[#002E11] tracking-[-0.03em] leading-tight">
            Service Providers
          </h2>

          <p className="text-sm sm:text-base text-zinc-600 font-light leading-relaxed max-w-2xl mx-auto">
            Direct access to verified land surveyors, legal advocates, architects, and turnkey contractors.
          </p>
        </div>

        {/* ================= SLEEK MINIMAL DIRECTORY LIST (NO CARDS, ZERO CLUTTER) ================= */}
        <div className="divide-y divide-gray-100 border-y border-gray-200">
          {services.map((item) => (
            <Link
              key={item.id}
              href="#contact"
              className="group py-4 sm:py-5 px-2 sm:px-4 flex items-center justify-between gap-4 hover:bg-zinc-50/80 rounded-xl transition-all duration-200"
            >
              {/* Left: Number + Icon + Title + Short 1-line Desc */}
              <div className="flex items-center gap-3.5 sm:gap-5 min-w-0">
                <span className="text-xs font-mono font-bold text-zinc-400 group-hover:text-[#b8612b] transition-colors shrink-0">
                  {item.number}
                </span>

                <div className="w-9 h-9 rounded-lg bg-[#002E11]/6 text-[#002E11] group-hover:bg-[#002E11] group-hover:text-white flex items-center justify-center shrink-0 transition-all duration-200">
                  <item.icon className="w-4 h-4" />
                </div>

                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm sm:text-base font-bold text-zinc-900 group-hover:text-[#002E11] transition-colors truncate">
                      {item.titleEn}
                    </h3>
                  </div>

                  <p className="text-sm text-zinc-500 font-light truncate mt-0.5">
                    {item.shortDesc}
                  </p>
                </div>
              </div>

              {/* Right: Compact Tag + Connect Action */}
              <div className="flex items-center gap-3 shrink-0">
                <span className="hidden md:inline-block px-2.5 py-0.5 rounded-full bg-gray-100 text-zinc-600 text-[11px] font-medium group-hover:bg-[#b8612b]/10 group-hover:text-[#b8612b] transition-colors">
                  {item.tag}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
