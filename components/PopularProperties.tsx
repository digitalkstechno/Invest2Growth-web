"use client";

import React, { useState } from "react";
import { MapPin, Heart, RotateCcw, SearchX } from "lucide-react";

export interface PropertyItem {
  id: string;
  type: "buy" | "sell" | "rent";
  badgeText: string;
  image: string;
  price: string;
  priceSuffix?: string;
  location: string;
  city: string;
  category: string;
  details: string;
  budgetNumeric: number; // in lakhs for buy/sell (e.g. 45, 78, 135 for 1.35 Cr), or in rupees for rent (e.g. 18000)
}

export const allProperties: PropertyItem[] = [
  // 1. Default Card 1 - Buy
  {
    id: "prop-1",
    type: "buy",
    badgeText: "For Buy",
    image: "/property-jaipur.jpg",
    price: "₹45 Lakh",
    location: "Vaishali Nagar, Jaipur",
    city: "Jaipur",
    category: "Flats & Apartments",
    details: "2 BHK | 1050 Sq.Ft | Ready to Move",
    budgetNumeric: 45,
  },
  // 2. Default Card 2 - Sell
  {
    id: "prop-2",
    type: "sell",
    badgeText: "For Sell",
    image: "/property-kolkata.jpg",
    price: "₹78 Lakh",
    location: "New Town, Kolkata",
    city: "Kolkata",
    category: "Independent Houses",
    details: "3 BHK | 1800 Sq.Ft | With Parking",
    budgetNumeric: 78,
  },
  // 3. Default Card 3 - Rent
  {
    id: "prop-3",
    type: "rent",
    badgeText: "For Rent",
    image: "/property-pune.jpg",
    price: "₹18,000",
    priceSuffix: " / month",
    location: "Wakad, Pune",
    city: "Pune",
    category: "Flats & Apartments",
    details: "2 BHK | 950 Sq.Ft | Fully Furnished",
    budgetNumeric: 18000,
  },
];

interface PopularPropertiesProps {
  selectedCity?: string;
  selectedType?: string;
  selectedBudget?: string;
  activeTab?: "buy" | "rent" | "sell" | null;
  onResetFilters?: () => void;
}

export default function PopularProperties({
  selectedCity = "",
  selectedType = "Any Type",
  selectedBudget = "Any Budget",
  activeTab = null,
  onResetFilters,
}: PopularPropertiesProps) {
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});

  const toggleFavorite = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    e.stopPropagation();
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const isCityFilterActive = Boolean(selectedCity && selectedCity.trim() !== "");
  const isTypeFilterActive = Boolean(selectedType && selectedType !== "Any Type");
  const isBudgetFilterActive = Boolean(selectedBudget && selectedBudget !== "Any Budget");
  const isTabFilterActive = Boolean(activeTab !== null);
  const isAnyFilterActive = isCityFilterActive || isTypeFilterActive || isBudgetFilterActive || isTabFilterActive;

  // Filter properties according to active filters
  const filteredProperties = allProperties.filter((prop) => {
    // 1. Filter by City / Locality
    if (isCityFilterActive) {
      const query = selectedCity.trim().toLowerCase();
      const matchCity = prop.city.toLowerCase().includes(query);
      const matchLocation = prop.location.toLowerCase().includes(query);
      if (!matchCity && !matchLocation) {
        return false;
      }
    }

    // 2. Filter by Buy / Rent / Sell Tab (when a tab is selected)
    if (activeTab) {
      if (activeTab === "rent") {
        if (prop.type !== "rent") return false;
      } else if (activeTab === "buy") {
        if (prop.type !== "buy") return false;
      } else if (activeTab === "sell") {
        if (prop.type !== "sell") return false;
      }
    }

    // 3. Filter by Property Type
    if (isTypeFilterActive) {
      if (prop.category.toLowerCase() !== selectedType.toLowerCase()) {
        return false;
      }
    }

    // 4. Filter by Budget
    if (isBudgetFilterActive) {
      if (selectedBudget === "Under ₹50 Lakh") {
        // Exclude monthly rent; only Buy/Sell under 50 Lakhs
        if (prop.type === "rent") return false;
        if (prop.budgetNumeric > 50) return false;
      } else if (selectedBudget === "₹50 Lakh - ₹1 Cr") {
        // Exclude monthly rent; only Buy/Sell between 50L and 100L (1 Cr)
        if (prop.type === "rent") return false;
        if (prop.budgetNumeric < 50 || prop.budgetNumeric > 100) return false;
      } else if (selectedBudget === "Above ₹1 Cr") {
        // Exclude monthly rent; only Buy/Sell above 100L (1 Cr)
        if (prop.type === "rent") return false;
        if (prop.budgetNumeric <= 100) return false;
      } else if (selectedBudget === "Under ₹25,000 / mo") {
        // Exclude buy/sell; only monthly Rent under 25,000 / mo
        if (prop.type !== "rent") return false;
        if (prop.budgetNumeric > 25000) return false;
      }
    }

    return true;
  });

  // When no filters are active, display the 3 default featured properties: 1 Buy, 1 Sell, 1 Rent
  const displayedProperties = isAnyFilterActive ? filteredProperties : allProperties.slice(0, 3);

  return (
    <section id="popular-properties" className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 mt-2 sm:mt-4 mb-10 sm:mb-10 scroll-mt-20">
      {/* Section Header with Golden Accent Lines */}
      <div className="flex items-center justify-center gap-3 sm:gap-5 mb-5 sm:mb-5">
        <span className="h-[1.5px] w-10 sm:w-16 md:w-24 bg-[#D4A373] rounded-full shrink-0" />
        <h2 className="text-[#001D4A] font-[family-name:var(--font-poppins)] font-semibold text-lg sm:text-xl md:text-[33px] tracking-tight text-center">
          Popular properties
        </h2>
        <span className="h-[1.5px] w-10 sm:w-16 md:w-24 bg-[#D4A373] rounded-full shrink-0" />
      </div>

      {/* Filter status indicator when filters are active */}
      {isAnyFilterActive && (
        <div className="flex flex-wrap items-center justify-center gap-2 mb-5">
          <span className="text-xs text-gray-500 font-[family-name:var(--font-poppins)]">
            Showing {filteredProperties.length} {filteredProperties.length === 1 ? "property" : "properties"}
            {selectedCity && (
              <> in <strong className="text-gray-800">&ldquo;{selectedCity}&rdquo;</strong></>
            )}
            {selectedType !== "Any Type" && (
              <> • <strong className="text-gray-800">{selectedType}</strong></>
            )}
            {selectedBudget !== "Any Budget" && (
              <> • <strong className="text-gray-800">{selectedBudget}</strong></>
            )}
            {activeTab && (
              <> • <span className="capitalize font-semibold text-gray-800">{activeTab}</span></>
            )}
          </span>
          {onResetFilters && (
            <button
              type="button"
              onClick={onResetFilters}
              className="inline-flex items-center gap-1 text-xs text-[#015BE1] hover:underline font-[family-name:var(--font-poppins)] cursor-pointer font-medium ml-2"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Clear Filter</span>
            </button>
          )}
        </div>
      )}

      {/* Property Cards Grid (NO href) */}
      {displayedProperties.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {displayedProperties.map((prop) => {
            const isFav = !!favorites[prop.id];

            return (
              <div
                key={prop.id}
                className="group bg-white rounded-2xl overflow-hidden border border-[#E9EBEF] shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col cursor-pointer select-none"
              >
                {/* Card Image Area with Badge & Heart */}
                <div className="relative w-full aspect-[2.4/1] sm:aspect-[2.35/1] overflow-hidden bg-gray-100">
                  <img
                    src={prop.image}
                    alt={prop.location}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  {/* Badge: For Buy (#002D5E), For Sell (#00A179), For Rent (#0975F6) */}
                  <div
                    className={`absolute top-2.5 left-3 px-3 py-1 rounded-full text-white font-[family-name:var(--font-poppins)] font-medium text-[11px] sm:text-[11.5px] shadow-xs select-none ${
                      prop.type === "rent"
                        ? "bg-[#0975F6]"
                        : prop.type === "sell"
                        ? "bg-[#00A179]"
                        : "bg-[#002D5E]"
                    }`}
                  >
                    {prop.badgeText}
                  </div>

                  {/* Favorite Heart Button */}
                  <button
                    type="button"
                    onClick={(e) => toggleFavorite(e, prop.id)}
                    aria-label="Save property"
                    className="absolute top-2.5 right-3 w-8 h-8 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer shadow-xs group/btn"
                  >
                    <Heart
                      className={`w-4 h-4 transition-colors ${
                        isFav
                          ? "fill-[#EF4444] text-[#EF4444]"
                          : "text-white stroke-[2.2] group-hover/btn:text-red-500"
                      }`}
                    />
                  </button>
                </div>

                {/* Card Content Area */}
                <div className="p-3.5 sm:p-4 flex flex-col justify-between flex-1 bg-white">
                  <div>
                    {/* Price with font size 16px and weight 600 */}
                    <div className="font-[family-name:var(--font-poppins)] font-semibold text-[16px] text-[#001D4A] tracking-tight">
                      {prop.price}
                      {prop.priceSuffix && (
                        <span className="text-[13px] font-normal text-gray-500">
                          {prop.priceSuffix}
                        </span>
                      )}
                    </div>

                    {/* Location with Pin icon, font size 11px and weight 400 */}
                    <div className="flex items-center gap-1.5 mt-1 sm:mt-1.5 text-gray-700">
                      <MapPin className="w-3.5 h-3.5 text-gray-800 shrink-0" />
                      <span className="font-[family-name:var(--font-poppins)] font-normal text-[11px] truncate">
                        {prop.location}
                      </span>
                    </div>

                    {/* Property Details with font size 10px and weight 400 */}
                    <p className="mt-1 font-[family-name:var(--font-poppins)] font-normal text-[10px] text-gray-500 truncate">
                      {prop.details}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        /* Empty State when no properties match the filter */
        <div className="w-full bg-white rounded-2xl border border-dashed border-gray-300 p-8 sm:p-12 flex flex-col items-center justify-center text-center">
          <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mb-3">
            <SearchX className="w-7 h-7 text-[#002D5E]" />
          </div>
          <h3 className="text-base sm:text-lg font-semibold text-gray-800 font-[family-name:var(--font-poppins)]">
            No properties found
          </h3>
          {onResetFilters && (
            <button
              type="button"
              onClick={onResetFilters}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#002D5E] text-white rounded-xl text-xs sm:text-[13px] font-medium font-[family-name:var(--font-poppins)] hover:bg-[#002042] transition-colors cursor-pointer shadow-xs mt-3"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Show All Properties</span>
            </button>
          )}
        </div>
      )}
    </section>
  );
}