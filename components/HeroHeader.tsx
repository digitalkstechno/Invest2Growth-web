import React from "react";

export default function HeroHeader() {
  return (
    <section
      aria-label="Hero Banner"
      className="relative w-full overflow-hidden bg-white"
    >
      <div className="relative w-full overflow-hidden flex items-center justify-center">
        <div
          className="relative block w-full select-none"
          aria-label="Apna ghar, apni jagah — yahin se shuru karein"
        >
          {/* Responsive Hero Banner Image */}
          <img
            src="/header.png"
            alt="Apna ghar, apni jagah — yahin se shuru karein. Buy, Sell & Rent Properties Across India"
            className="w-full h-auto object-cover object-center pointer-events-none"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}