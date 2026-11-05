"use client";

import React from "react";
import Link from "next/link";
import { Users, CalendarDays, Headphones } from "lucide-react";

export default function TrustAndPromoBanner() {
  const trustItems = [
    {
      title: "Verified listings",
      icon: (
        <svg className="w-5 h-5 text-[#00A179] shrink-0" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2L4 5v6.5c0 5.25 3.4 10.15 8 11.5 4.6-1.35 8-6.25 8-11.5V5l-8-3z"
            fill="#00A179"
          />
          <path
            d="M9 12l2 2 4-4"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Owner & broker options",
      icon: <Users className="w-5 h-5 text-[#00A179] fill-[#00A179] shrink-0" />,
    },
    {
      title: "Easy site visits",
      icon: <CalendarDays className="w-5 h-5 text-[#00A179] shrink-0 stroke-[2.2]" />,
    },
    {
      title: "Local support",
      icon: <Headphones className="w-5 h-5 text-[#00A179] shrink-0 stroke-[2.2]" />,
    },
  ];

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 mt-2 sm:mt-4 mb-10 sm:mb-10">
      {/* 1. TRUST BAR (Verified listings | Owner & broker options | Easy site visits | Local support) */}
      <div className="w-full bg-[#FFF3E3] rounded-2xl sm:rounded-full border border-[#F2DECA] px-4 sm:px-6 py-2.5 sm:py-3 shadow-2xs">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-2 items-center">
          {trustItems.map((item, idx) => (
            <div
              key={item.title}
              className={`flex items-center justify-center gap-2 px-2 sm:px-3 ${
                idx < trustItems.length - 1 ? "md:border-r md:border-[#E8D4C0]" : ""
              } ${idx === 0 || idx === 2 ? "border-r border-[#E8D4C0] md:border-r-0" : ""}`}
            >
              {item.icon}
              <span className="font-[family-name:var(--font-poppins)] font-medium text-[12px] sm:text-[13px] md:text-[16px] text-gray-800 whitespace-nowrap">
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 2. PROMO CTA BANNER (Invest2Growth - Har sapne ke ghar tak, ab aur aasan raasta! + Post Free Property) */}
      <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-[#DDEADC] shadow-xs hover:shadow-md transition-shadow mt-4 sm:mt-5">
        <img
          src="/cta-banner-full.png"
          alt="Invest2Growth - Har sapne ke ghar tak, ab aur aasan raasta! Post Free Property"
          className="w-full h-[105px] sm:h-[125px] md:h-[140px] lg:h-[150px] object-fill block select-none"
        />

        {/* Clickable Hotspot over "Post Free Property ->" Button */}
        <Link
          href="/"
          aria-label="Post Free Property"
          className="absolute rounded-full cursor-pointer transition-all hover:bg-white/10 active:scale-[0.98]"
          style={{
            left: "58.1%",
            top: "29.1%",
            width: "18.0%",
            height: "44.6%",
          }}
        />
      </div>
    </section>
  );
}

