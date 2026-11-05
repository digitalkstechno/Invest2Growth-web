"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  Home,
  Bed,
  Megaphone,
  MapPin,
  LayoutGrid,
  IndianRupee,
  ChevronDown,
  Search,
  X,
  Check,
} from "lucide-react";

interface HeroSearchFilterProps {
  activeTab: "buy" | "rent" | "sell" | null;
  onTabChange: (tab: "buy" | "rent" | "sell" | null) => void;
  selectedCity: string;
  onCityChange: (city: string) => void;
  selectedType: string;
  onTypeChange: (type: string) => void;
  selectedBudget: string;
  onBudgetChange: (budget: string) => void;
  onSearch?: () => void;
}

const PROPERTY_TYPES = [
  "Any Type",
  "Flats & Apartments",
  "Independent Houses",
  "Plots & Land",
  "Shops & Offices",
  "PG & Shared",
  "Agricultural Land",
];

const BUDGET_OPTIONS = [
  "Any Budget",
  "Under ₹50 Lakh",
  "₹50 Lakh - ₹1 Cr",
  "Above ₹1 Cr",
  "Under ₹25,000 / mo",
];

const POPULAR_CITIES = [
  "Jaipur",
  "Delhi NCR",
  "Mumbai",
  "Bengaluru",
  "Pune",
  "Ahmedabad",
  "Surat",
  "Lucknow",
  "Udaipur",
  "Kolkata",
];

export default function HeroSearchFilter({
  activeTab,
  onTabChange,
  selectedCity,
  onCityChange,
  selectedType,
  onTypeChange,
  selectedBudget,
  onBudgetChange,
  onSearch,
}: HeroSearchFilterProps) {
  const [isTypeOpen, setIsTypeOpen] = useState(false);
  const [isBudgetOpen, setIsBudgetOpen] = useState(false);

  const typeDropdownRef = useRef<HTMLDivElement>(null);
  const budgetDropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdowns on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        typeDropdownRef.current &&
        !typeDropdownRef.current.contains(event.target as Node)
      ) {
        setIsTypeOpen(false);
      }
      if (
        budgetDropdownRef.current &&
        !budgetDropdownRef.current.contains(event.target as Node)
      ) {
        setIsBudgetOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSearchClick = () => {
    if (onSearch) {
      onSearch();
    }
    const el = document.getElementById("popular-properties");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleCityPillClick = (city: string) => {
    if (selectedCity.trim().toLowerCase() === city.toLowerCase()) {
      onCityChange("");
    } else {
      onCityChange(city);
    }
  };

  // Toggle selection on click, or unselect on double click / click on selected tab
  const handleTabClick = (tab: "buy" | "rent" | "sell") => {
    if (activeTab === tab) {
      onTabChange(null);
    } else {
      onTabChange(tab);
    }
  };

  const handleTabDoubleClick = (tab: "buy" | "rent" | "sell") => {
    if (activeTab === tab) {
      onTabChange(null);
    }
  };

  return (
    <div className="relative z-30 w-full max-w-[1260px] mx-auto px-4 sm:px-6 lg:px-8 -mt-12 sm:-mt-20 md:-mt-28 lg:-mt-32 mb-4 sm:mb-6 flex flex-col items-center">
      {/* ================= 1 & 2: UPPER SECTION (TABS + SEARCH CARD) ================= */}
      <div className="w-full max-w-[1140px] mx-auto">
        {/* 1. TOP TABS (Buy / Rent / Sell) - Double click or click when selected unselects */}
        <div className="inline-flex items-stretch bg-white rounded-t-xl shadow-xs overflow-hidden border-t border-x border-gray-100 ml-6 sm:ml-8 md:ml-10">
          {/* Buy Tab */}
          <button
            type="button"
            onClick={() => handleTabClick("buy")}
            onDoubleClick={() => handleTabDoubleClick("buy")}
            className={`flex items-center gap-2 px-4.5 sm:px-6 py-2 sm:py-3 transition-colors cursor-pointer select-none ${
              activeTab === "buy"
                ? "bg-[#002D5E] text-white"
                : "bg-white text-black hover:bg-gray-50"
            }`}
          >
            <Home
              className={`w-4 h-4 shrink-0 transition-colors ${
                activeTab === "buy" ? "text-white fill-white" : "text-black fill-black"
              }`}
            />
            <span className="font-[family-name:var(--font-poppins)] font-semibold text-[13px] sm:text-[14px]">
              Buy
            </span>
          </button>

          {/* Rent Tab */}
          <button
            type="button"
            onClick={() => handleTabClick("rent")}
            onDoubleClick={() => handleTabDoubleClick("rent")}
            className={`flex items-center gap-2 px-4.5 sm:px-5.5 py-2 sm:py-2.5 transition-colors cursor-pointer select-none border-l border-gray-100 ${
              activeTab === "rent"
                ? "bg-[#002D5E] text-white"
                : "bg-white text-black hover:bg-gray-50"
            }`}
          >
            <Bed
              className={`w-4 h-4 shrink-0 transition-colors ${
                activeTab === "rent" ? "text-white fill-white" : "text-black fill-black"
              }`}
            />
            <span className="font-[family-name:var(--font-poppins)] font-semibold text-[13px] sm:text-[14px]">
              Rent
            </span>
          </button>

          {/* Sell Tab */}
          <button
            type="button"
            onClick={() => handleTabClick("sell")}
            onDoubleClick={() => handleTabDoubleClick("sell")}
            className={`flex items-center gap-2 px-4.5 sm:px-5.5 py-2 sm:py-2.5 transition-colors cursor-pointer select-none border-l border-gray-100 ${
              activeTab === "sell"
                ? "bg-[#002D5E] text-white"
                : "bg-white text-black hover:bg-gray-50"
            }`}
          >
            <Megaphone
              className={`w-4 h-4 shrink-0 transition-colors ${
                activeTab === "sell" ? "text-white fill-white" : "text-black fill-black"
              }`}
            />
            <span className="font-[family-name:var(--font-poppins)] font-semibold text-[13px] sm:text-[14px]">
              Sell
            </span>
          </button>
        </div>

        {/* 2. MAIN SEARCH CARD */}
        <div className="bg-white rounded-2xl shadow-xl shadow-gray-200/60 border border-gray-100 p-4 sm:p-6">
          {/* Form Controls Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3.5 sm:gap-4 items-end">
            {/* City / Locality Field */}
            <div className="lg:col-span-4 space-y-1.5">
              <label className="block font-[family-name:var(--font-poppins)] font-medium text-[11px] sm:text-[13px] text-gray-700">
                City / Locality
              </label>
              <div className="relative flex items-center h-[46px] px-3.5 rounded-xl border border-gray-200 bg-white hover:border-gray-300 focus-within:border-[#015BE1] focus-within:ring-1 focus-within:ring-[#015BE1]/20 transition-all">
                <MapPin className="w-4 h-4 fill-black text-black shrink-0 mr-2" />
                <input
                  type="text"
                  placeholder="Jaipur, Delhi, Mumbai..."
                  value={selectedCity}
                  onChange={(e) => onCityChange(e.target.value)}
                  className="w-full bg-transparent border-none outline-none font-[family-name:var(--font-poppins)] font-normal text-[12px] sm:text-[13px] text-gray-800 placeholder:text-gray-400"
                />
                {selectedCity && (
                  <button
                    type="button"
                    onClick={() => onCityChange("")}
                    className="p-1 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition-colors cursor-pointer shrink-0"
                    title="Clear search"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>

            {/* Property Type Dropdown */}
            <div className="lg:col-span-3 space-y-1.5">
              <label className="block font-[family-name:var(--font-poppins)] font-medium text-[11px] sm:text-[13px] text-gray-700">
                Property Type
              </label>
              <div ref={typeDropdownRef} className="relative">
                <button
                  type="button"
                  onClick={() => {
                    setIsTypeOpen(!isTypeOpen);
                    setIsBudgetOpen(false);
                  }}
                  className="w-full flex items-center justify-between h-[46px] px-3.5 rounded-xl border border-gray-200 bg-white hover:border-gray-300 focus:outline-none cursor-pointer select-none transition-colors text-left"
                >
                  <div className="flex items-center gap-2 min-w-0">
                    <LayoutGrid className="w-4 h-4 fill-black text-black shrink-0" />
                    <span className="font-[family-name:var(--font-poppins)] font-normal text-[12px] sm:text-[13px] text-gray-800 truncate">
                      {selectedType}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-gray-400 shrink-0 ml-1.5 transition-transform duration-200 ${
                      isTypeOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Type Dropdown Menu */}
                {isTypeOpen && (
                  <div className="absolute top-full mt-1.5 left-0 w-full bg-white rounded-xl shadow-xl border border-gray-100 py-1.5 z-50">
                    {PROPERTY_TYPES.map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => {
                          onTypeChange(type);
                          setIsTypeOpen(false);
                        }}
                        className={`w-full flex items-center justify-between px-3.5 py-2 text-left text-xs sm:text-[13px] font-[family-name:var(--font-poppins)] hover:bg-gray-50 transition-colors cursor-pointer ${
                          selectedType === type
                            ? "text-[#002D5E] font-semibold bg-blue-50/50"
                            : "text-gray-700 font-normal"
                        }`}
                      >
                        <span className="truncate">{type}</span>
                        {selectedType === type && (
                          <Check className="w-3.5 h-3.5 text-[#002D5E] shrink-0 ml-2" />
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Budget Dropdown */}
            <div className="lg:col-span-2 xl:col-span-3 space-y-1.5">
              <label className="block font-[family-name:var(--font-poppins)] font-medium text-[11px] sm:text-[13px] text-gray-700">
                Budget
              </label>
              <div ref={budgetDropdownRef} className="relative">
                <button
                  type="button"
                  onClick={() => {
                    setIsBudgetOpen(!isBudgetOpen);
                    setIsTypeOpen(false);
                  }}
                  className="w-full flex items-center justify-between h-[46px] px-3.5 rounded-xl border border-gray-200 bg-white hover:border-gray-300 focus:outline-none cursor-pointer select-none transition-colors text-left"
                >
                  <div className="flex items-center gap-2 min-w-0">
                    <IndianRupee className="w-4 h-4 text-black stroke-[2.5] shrink-0" />
                    <span className="font-[family-name:var(--font-poppins)] font-normal text-[12px] sm:text-[13px] text-gray-800 truncate">
                      {selectedBudget}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-gray-400 shrink-0 ml-1.5 transition-transform duration-200 ${
                      isBudgetOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Budget Dropdown Menu */}
                {isBudgetOpen && (
                  <div className="absolute top-full mt-1.5 left-0 w-full bg-white rounded-xl shadow-xl border border-gray-100 py-1.5 z-50">
                    {BUDGET_OPTIONS.map((budget) => (
                      <button
                        key={budget}
                        type="button"
                        onClick={() => {
                          onBudgetChange(budget);
                          setIsBudgetOpen(false);
                        }}
                        className={`w-full flex items-center justify-between px-3.5 py-2 text-left text-xs sm:text-[13px] font-[family-name:var(--font-poppins)] hover:bg-gray-50 transition-colors cursor-pointer ${
                          selectedBudget === budget
                            ? "text-[#002D5E] font-semibold bg-blue-50/50"
                            : "text-gray-700 font-normal"
                        }`}
                      >
                        <span className="truncate">{budget}</span>
                        {selectedBudget === budget && (
                          <Check className="w-3.5 h-3.5 text-[#002D5E] shrink-0 ml-2" />
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Search Properties Action Button */}
            <div className="lg:col-span-3 xl:col-span-2 space-y-1.5">
              <label className="hidden lg:block opacity-0 font-[family-name:var(--font-poppins)] text-[11px] sm:text-[13px] select-none pointer-events-none">
                Search
              </label>
              <button
                type="button"
                onClick={handleSearchClick}
                className="w-full h-[46px] flex items-center justify-center gap-2 bg-[#00875A] hover:bg-[#00744e] active:scale-[0.99] text-white rounded-xl px-4 font-[family-name:var(--font-poppins)] font-semibold text-[13px] shadow-sm shadow-[#00875A]/25 transition-all cursor-pointer whitespace-nowrap"
              >
                <Search className="w-4 h-4 stroke-[2.5]" />
                <span className="font-[family-name:var(--font-poppins)] font-medium text-[11px] sm:text-[13px]">
                  Search Properties
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ================= 3. SEPARATE FLOATING CAPSULE BAR: POPULAR CITIES (Wider width) ================= */}
      <div className="w-full max-w-[1260px] bg-[#F7EEE5] rounded-2xl sm:rounded-full border border-[#eadcd0] px-5 sm:px-8 py-2.5 sm:py-3 flex items-center justify-between gap-2 overflow-x-auto scrollbar-none shadow-xs">
        {/* Label with blue Pin (#0671FD) */}
        <div className="flex items-center gap-1.5 shrink-0 mr-1 sm:mr-3">
          <MapPin className="w-3.5 h-3.5 fill-[#0671FD] text-[#0671FD] shrink-0" />
          <span className="font-[family-name:var(--font-poppins)] font-semibold text-[13px] text-gray-800 whitespace-nowrap">
            Popular Cities:
          </span>
        </div>

        {/* City Pills evenly distributed across the entire width */}
        <div className="flex items-center justify-between flex-1 gap-1.5 sm:gap-2">
          {POPULAR_CITIES.map((city) => {
            const isSelected =
              selectedCity.trim().toLowerCase() === city.toLowerCase();

            return (
              <button
                key={city}
                type="button"
                onClick={() => handleCityPillClick(city)}
                className={`px-3 sm:px-4 py-1.5 rounded-full border text-[11.5px] sm:text-[12px] font-[family-name:var(--font-poppins)] transition-all cursor-pointer whitespace-nowrap shadow-2xs ${
                  isSelected
                    ? "bg-[#0671FD] border-[#0671FD] text-white font-medium"
                    : "bg-white border-[#e5d5c7] text-gray-800 hover:border-[#0671FD] hover:text-[#0671FD] font-normal"
                }`}
              >
                {city}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}