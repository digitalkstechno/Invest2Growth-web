"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Clock,
  ArrowUpRight,
  Calendar,
  Bookmark,
} from "lucide-react";

interface NewsArticle {
  id: string;
  category: string;
  title: string;
  excerpt: string;
  image: string;
  source: string;
  href: string;
}

const leadStory: NewsArticle = {
  id: "gift-city-expansion",
  category: "URBAN DEVELOPMENT",
  title: "GIFT City Phase-2 Expansion: 3,300 Acres Greenlit for Global Fintech, Universities & Riverfront Towers",
  excerpt: "The Government of Gujarat officially approves the master expansion blueprint connecting GIFT City with Gandhinagar riverfront, introducing zero-emission transit networks and high-density mixed-use development zones.",
  image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
  source: "invest2growth Research Desk",
  href: "#gift-city-news",
};

const newsFeed: NewsArticle[] = [
  {
    id: "dholera-expressway",
    category: "INFRASTRUCTURE",
    title: "Ahmedabad-Dholera 109km Expressway Enters Final Asphalt Paving Phase",
    excerpt: "Travel time between Ahmedabad and Dholera SIR set to reduce to under 45 minutes, unlocking massive agricultural and industrial land valuations.",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=400&q=80",
    source: "Infrastructure Bureau",
    href: "#dholera-news",
  },
  {
    id: "rera-blockchain",
    category: "RERA REGULATORY",
    title: "Gujarat RERA Directs Digital Title Verification for All New Launches",
    excerpt: "New regulatory mandate integrates revenue records with digital escrow protocols, eliminating title disputes and protecting retail homebuyer equity.",
    image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=400&q=80",
    source: "Legal Advisory Desk",
    href: "#rera-news",
  },
  {
    id: "surat-diamond-surge",
    category: "COMMERCIAL MARKETS",
    title: "Surat Diamond Bourse Commercial Absorption Surges 34% Year-on-Year",
    excerpt: "Global trading desks and institutional diamond merchants drive record grade-A office absorption across Khajod and Vesu commercial corridors.",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=400&q=80",
    source: "Market Analytics",
    href: "#surat-news",
  },
  {
    id: "sanand-industrial",
    category: "INDUSTRIAL GROWTH",
    title: "Sanand GIDC Phase-II Attracts ₹12,000 Cr Semiconductor Allocations",
    excerpt: "High-tech manufacturing clusters, dedicated 400KV power feeders, and rail freight infrastructure accelerate industrial plot demand.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&q=80",
    source: "Industrial Watch",
    href: "#sanand-news",
  },
];

export default function LatestNewsSection() {
  const [activeStory, setActiveStory] = useState<NewsArticle>(leadStory);
  const [savedArticles, setSavedArticles] = useState<Record<string, boolean>>({});


  return (
    <section
      id="news"
      className="relative w-full px-4 sm:px-8 lg:px-12 xl:px-16 py-16 sm:py-20 lg:py-24  bg-white text-zinc-900 border-t border-gray-100 overflow-hidden scroll-mt-20"
    >
      {/* Background Architectural Blueprint Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-25">
        <div className="w-full h-full bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:3.5rem_3.5rem]" />
      </div>

      <div className="relative z-1mx-auto">
        {/* ================= SECTION HEADER (CENTERED & MATCHING ESTABLISHED TYPOGRAPHY) ================= */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#b8612b]/10 border border-[#b8612b]/25 text-[#b8612b] text-xs font-bold tracking-widest uppercase shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#b8612b]" />
            MARKET INTELLIGENCE
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-[family-name:var(--font-jakarta)] font-semibold text-[#002E11] tracking-[-0.03em] leading-tight">
            Latest News &amp; Market Insights
          </h2>

          <p className="text-sm sm:text-base text-zinc-600 font-light leading-relaxed max-w-2xl mx-auto">
            Stay informed with verified policy updates, regulatory clearances, infrastructure developments, and investment trends across Gujarat.
          </p>
        </div>

        {/* ================= UNIQUE NON-CARD EDITORIAL MAGAZINE SPREAD ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* ================= LEFT: FEATURED LEAD EDITORIAL HEADLINE STORY (7 Cols) ================= */}
          <div className="lg:col-span-7 flex flex-col space-y-5">
            {/* Lead Story Visual Frame */}
            <div className="relative w-full h-[280px] sm:h-[380px] rounded-2xl overflow-hidden bg-gray-100 shadow-md group">
              <img
                src={activeStory.image}
                alt={activeStory.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-between p-5 sm:p-6 text-white">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-[#002E11]/90 backdrop-blur-md text-emerald-300 text-xs font-bold tracking-wider uppercase border border-emerald-500/30">
                    {activeStory.category}
                  </span>

                </div>

                <div className="space-y-2">

                  <h3 className="text-lg sm:text-2xl font-sans  text-white leading-tight line-clamp-2">
                    {activeStory.title}
                  </h3>
                </div>
              </div>
            </div>

            {/* Lead Story Editorial Body Excerpt */}
            <div className="space-y-3 pt-1">
              <p className="text-sm sm:text-base text-zinc-600 font-light leading-relaxed">
                {activeStory.excerpt}
              </p>

              <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                <div className="text-xs text-zinc-500 font-medium">
                  Reported by <span className="text-[#002E11] font-bold">{activeStory.source}</span>
                </div>

                <Link
                  href={activeStory.href}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#b8612b] hover:text-[#a35322] uppercase tracking-wider transition-colors"
                >
                  <span>Read Full Coverage</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* ================= RIGHT: CURATED DISPATCH DIGEST FEED (5 Cols, NOT CARDS) ================= */}
          <div className="lg:col-span-5 flex flex-col divide-y divide-gray-200 border-y border-gray-200">
            {newsFeed.map((article) => {
              const isSelected = activeStory.id === article.id;

              return (
                <div
                  key={article.id}
                  onClick={() => setActiveStory(article)}
                  className={`py-4 sm:py-5 px-2 sm:px-3 transition-all duration-200 cursor-pointer flex items-start justify-between gap-4 group ${
                    isSelected ? "bg-zinc-50/90 pl-3 border-l-4 border-l-[#b8612b]" : "hover:bg-zinc-50/50"
                  }`}
                >
                  {/* Article Text Content */}
                  <div className="space-y-1.5 min-w-0 flex-1">
                    <div className="flex items-center gap-2 text-[13px] font-bold uppercase tracking-wider text-[#b8612b]">
                      <span>{article.category}</span>
                      <span className="text-zinc-300">•</span>
                    </div>

                    <h4 className="text-sm sm:text-[15px] font-bold text-zinc-900 group-hover:text-[#002E11] transition-colors line-clamp-2 leading-snug">
                      {article.title}
                    </h4>

                    <p className="text-sm text-zinc-500 font-light line-clamp-2 leading-relaxed">
                      {article.excerpt}
                    </p>
                  </div>

                  {/* Micro Thumbnail Photo */}
                  <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-gray-100 shrink-0 shadow-xs">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

