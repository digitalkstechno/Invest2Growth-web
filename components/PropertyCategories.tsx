"use client";

import React from "react";

interface CategoryItem {
  title: string;
  image: string;
}

const categories: CategoryItem[] = [
  {
    title: "Flats & Apartments",
    image: "/flats-apartments.png",
  },
  {
    title: "Independent Houses",
    image: "/independent-houses.png",
  },
  {
    title: "Plots & Land",
    image: "/plots-land.png",
  },
  {
    title: "Shops & Offices",
    image: "/shops-offices.png",
  },
  {
    title: "PG & Shared",
    image: "/pg-shared.png",
  },
  {
    title: "Agricultural Land",
    image: "/agricultural-land.png",
  },
];

export default function PropertyCategories() {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 mt-2 sm:mt-4 mb-10 sm:mb-10">
      {/* Section Header with Golden Accent Lines */}
      <div className="flex items-center justify-center gap-3 sm:gap-5 mb-5 sm:mb-5">
        <span className="h-[1.5px] w-10 sm:w-16 md:w-24 bg-[#D4A373] rounded-full shrink-0" />
        <h2 className="text-[#001D4A] font-[family-name:var(--font-poppins)] font-semibold text-lg sm:text-xl md:text-[33px] tracking-tight text-center">
          Aap kya dhoondh rahe hain?
        </h2>
        <span className="h-[1.5px] w-10 sm:w-16 md:w-24 bg-[#D4A373] rounded-full shrink-0" />
      </div>

      {/* 6 Category Cards Grid (Pure visual showcase - no filter, no click, no href) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-3.5 lg:gap-4">
        {categories.map((cat) => (
          <div
            key={cat.title}
            className="group bg-white rounded-2xl overflow-hidden pb-3 sm:pb-3.5 border border-[#E9EBEF] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col select-none"
          >
            {/* Image Preview Container with rounded corners */}
            <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100 rounded-t-2xl">
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Category Title */}
            <div className="mt-2 sm:mt-2.5 min-h-[36px] sm:min-h-[38px] flex items-center justify-center text-center px-1">
              <span className="font-[family-name:var(--font-poppins)] font-medium text-[12px] sm:text-[13px] md:text-[17px] text-[#1E293B] leading-snug">
                {cat.title}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}