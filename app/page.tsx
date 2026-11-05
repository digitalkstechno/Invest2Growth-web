"use client";

import { useState } from "react";
import HeroHeader from "@/components/HeroHeader";
import HeroSearchFilter from "@/components/HeroSearchFilter";
import PropertyCategories from "@/components/PropertyCategories";
import PopularProperties from "@/components/PopularProperties";
import TrustAndPromoBanner from "@/components/TrustAndPromoBanner";

export default function Home() {
  const [activeTab, setActiveTab] = useState<"buy" | "rent" | "sell" | null>(null);
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedType, setSelectedType] = useState("Any Type");
  const [selectedBudget, setSelectedBudget] = useState("Any Budget");

  const handleResetFilters = () => {
    setSelectedCity("");
    setSelectedType("Any Type");
    setSelectedBudget("Any Budget");
    setActiveTab(null);
  };

  const handleSearch = () => {
    const el = document.getElementById("popular-properties");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col bg-[#FDFAF5] text-zinc-900 overflow-x-clip scroll-smooth">
      {/* Main Content Area */}
      <main className="flex-1 w-full relative">
        {/* 1. Hero Header Banner */}
        <HeroHeader />

        {/* 2. Overlapping Hero Search Filter Card */}
        <HeroSearchFilter
          activeTab={activeTab}
          onTabChange={setActiveTab}
          selectedCity={selectedCity}
          onCityChange={setSelectedCity}
          selectedType={selectedType}
          onTypeChange={setSelectedType}
          selectedBudget={selectedBudget}
          onBudgetChange={setSelectedBudget}
          onSearch={handleSearch}
        />

        {/* 3. Aap kya dhoondh rahe hain? (Categories Section - pure showcase) */}
        <PropertyCategories />

        {/* 4. Popular Properties Section */}
        <PopularProperties
          selectedCity={selectedCity}
          selectedType={selectedType}
          selectedBudget={selectedBudget}
          activeTab={activeTab}
          onResetFilters={handleResetFilters}
        />

        {/* 5. Trust Features Bar & Promo CTA Banner */}
        <TrustAndPromoBanner />
      </main>
    </div>
  );
}