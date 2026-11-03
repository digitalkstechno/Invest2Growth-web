"use client";

import React from "react";
import Link from "next/link";

interface Article {
  id: string;
  title: string;
  excerpt?: string;
  image: string;
  author: string;
  avatar?: string;
  date: string;
  href: string;
}

const leftBannerArticle = {
  title: "Prime Corporate Towers: Grade-A Commercial Spaces",
  author: "Kavita Shah",
  date: "26 Oct, 2026",
};

const mainArticle: Article = {
  id: "gift-city-expansion",
  title: "GIFT City Phase-2: Strategic Commercial & High-Rise Land Corridors",
  excerpt:
    "Gujarat government greenlights 3,300-acre master expansion connecting GIFT City with Gandhinagar, unlocking high-yield commercial and luxury residential investments.",
  image:
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
  author: "Rajesh Patel",
  avatar:
    "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=160&q=80",
  date: "28 Oct, 2026",
  href: "#news",
};

const bannerArticle: Article = {
  id: "dholera-expressway",
  title: "Dholera SIR: Rapid Growth Along Ahmedabad-Dholera Expressway",
  image:
    "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
  author: "Harsh Patel",
  date: "24 Oct, 2026",
  href: "#news",
};

const bottomArticles: Article[] = [
  {
    id: "gujarat-rera-guidance",
    title: "Gujarat RERA: Digital Title Verification & Clear Land Ownership",
    image:
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=600&q=80",
    author: "Legal Advisory Desk",
    date: "21 Oct, 2026",
    href: "#news",
  },
  {
    id: "surat-commercial-boom",
    title: "Surat Diamond Corridor: Prime Commercial Office Space Absorption",
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80",
    author: "Market Analytics",
    date: "18 Oct, 2026",
    href: "#news",
  },
  {
    id: "sanand-industrial-hubs",
    title: "Sanand GIDC Phase-II: High-Demand Industrial & Warehouse Plots",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80",
    author: "Industrial Watch",
    date: "15 Oct, 2026",
    href: "#news",
  },
];

export default function LatestNewsSection() {
  return (
    <section
      id="news"
      className="relative w-full px-4 sm:px-8 lg:px-12 xl:px-16 py-16 sm:py-20 lg:py-18 bg-[#fafafa] text-zinc-900 border-t border-gray-100 scroll-mt-20"
    >
      <div className=" mx-auto">
        {/* ================= SECTION TITLE ================= */}
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

        {/* ================= 2-ROW BLOG GRID ================= */}
        <div className="space-y-6 sm:space-y-8">
          {/* Row 1: Left wide card (2 cols) + Right vertical card (1 col) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Top Left: Horizontal Card */}
            <div className="lg:col-span-2 bg-white rounded-3xl overflow-hidden border border-gray-200/80 shadow-md shadow-zinc-900/[0.03] hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row group sm:h-[280px]">
              <div className="sm:w-1/2 p-2.5 sm:p-3 shrink-0 flex flex-col h-full">
                <div className="w-full h-[180px] sm:h-full rounded-2xl overflow-hidden bg-gray-100 flex flex-col justify-between">
                  <div className="flex-1 w-full min-h-0 overflow-hidden">
                    <img
                      src={mainArticle.image}
                      alt={mainArticle.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Dark Green Banner matching "Minimal workspace for inspirations" */}
                  <div className="bg-[#002E11] text-white p-3.5 sm:p-4 space-y-1 rounded-b-2xl shrink-0">
                    <h3 className="text-xs sm:text-sm font-bold text-white leading-snug line-clamp-1 font-[family-name:var(--font-jakarta)]">
                      {leftBannerArticle.title}
                    </h3>
                    <div className="text-[12.5px] text-white/80">
                      {leftBannerArticle.author} • {leftBannerArticle.date}
                    </div>
                  </div>
                </div>
              </div>

              <div className="sm:w-1/2 p-5 sm:p-6 flex flex-col justify-between space-y-3">
                <div className="space-y-1.5">
                  <h3 className="text-base sm:text-lg font-bold text-zinc-900 leading-snug line-clamp-2 group-hover:text-[#002E11] transition-colors">
                    {mainArticle.title}
                  </h3>
                  <p className="text-sm sm:text-sm text-zinc-600 font-light leading-relaxed max-w-2xl mx-auto">
                    {mainArticle.excerpt}
                  </p>
                </div>

                <div className="flex items-center gap-2.5 pt-1">
                  <img
                    src={mainArticle.avatar}
                    alt={mainArticle.author}
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-full object-cover border border-gray-200 "
                  />
                  <div className="text-xs">
                    <div className="font-semibold text-zinc-800 text-[12.5px]">
                      {mainArticle.author}
                    </div>
                    <div className="text-[11px] text-zinc-400 text-[11.5px]">
                      {mainArticle.date}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Top Right: Vertical Card with Color Banner */}
            <div className="lg:col-span-1 bg-white rounded-3xl overflow-hidden border border-gray-200/80 shadow-md shadow-zinc-900/[0.03] hover:shadow-xl transition-all duration-300 flex flex-col group sm:h-[280px]">
              <div className="flex-1 w-full min-h-[140px] overflow-hidden bg-gray-100">
                <img
                  src={bannerArticle.image}
                  alt={bannerArticle.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="bg-[#002E11] text-white p-3.5 sm:p-4 space-y-1 rounded-b-3xl shrink-0">
                <h3 className="text-xs sm:text-sm font-bold text-white leading-snug line-clamp-1">
                  {bannerArticle.title}
                </h3>
                <div className="text-[12.5px] text-white/80">
                  {bannerArticle.author} • {bannerArticle.date}
                </div>
              </div>
            </div>
          </div>

          {/* Row 2: 3 Cards in equal columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {bottomArticles.map((article) => (
              <div
                key={article.id}
                className="bg-white rounded-3xl overflow-hidden border border-gray-200/80 shadow-md shadow-zinc-900/[0.03] hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                <div className="h-[180px] sm:h-[270px] w-full overflow-hidden bg-gray-100">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-5 space-y-1.5 flex-1 flex flex-col justify-between">
                  <h4 className="text-sm sm:text-base font-bold text-zinc-900 leading-snug line-clamp-1 group-hover:text-[#002E11] transition-colors">
                    {article.title}
                  </h4>
                  <div className="text-[12.5px] text-zinc-400 font-normal">
                    {article.author} • {article.date}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
