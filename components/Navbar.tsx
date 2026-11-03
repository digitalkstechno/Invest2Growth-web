"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  ArrowUpRight,
  Building2,
  Sparkles,
  Newspaper,
  Compass,
  Phone,
  Mail,
  TrendingUp,
  Home,
  Factory,
} from "lucide-react";
interface SubPropertyItem {
  title: string;
  desc?: string;
  href: string;
}
interface PropertyCategory {
  id: string;
  name: string;
  image: string;
  icon: React.ElementType;
  subItems: SubPropertyItem[];
}

const propertyCategories: PropertyCategory[] = [
  {
    id: "residential",
    name: "Residential",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=160&q=80",
    icon: Home,
    subItems: [
      { title: "Luxury Villas & Bungalows", desc: "Ultra-luxury independent homes", href: "/#residential" },
      { title: "Apartments & High-Rise Flats", desc: "2, 3 & 4 BHK premium residences", href: "/#residential" },
      { title: "Penthouses & Duplexes", desc: "Exclusive skyline living", href: "/#residential" },
      { title: "Residential Gated Plots", desc: "Ready for residential construction", href: "/#residential" },
    ],
  },
  {
    id: "industrial",
    name: "Industrial",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=160&q=80",
    icon: Factory,
    subItems: [
      { title: "Warehouses & Logistics Parks", desc: "Strategic logistics storage hubs", href: "/#industrial" },
      { title: "Industrial Sheds & Plots", desc: "GIDC & approved industrial zones", href: "/#industrial" },
      { title: "Manufacturing Facilities", desc: "Heavy & light manufacturing units", href: "/#industrial" },
      { title: "Cold Storage & Processing", desc: "Temperature controlled assets", href: "/#industrial" },
    ],
  },
  {
    id: "commercial",
    name: "Commercial",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=160&q=80",
    icon: Building2,
    subItems: [
      { title: "Grade-A Corporate Offices", desc: "Modern business towers & suites", href: "/#commercial" },
      { title: "Retail Showrooms & Shops", desc: "High-footfall prime shopping hubs", href: "/#commercial" },
      { title: "Commercial SCO Plots", desc: "Shop-cum-office developments", href: "/#commercial" },
      { title: "Co-working & Business Centers", desc: "Plug-and-play flexible spaces", href: "/#commercial" },
    ],
  },
  {
    id: "land",
    name: "Land",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=160&q=80",
    icon: Compass,
    subItems: [
      { title: "Agricultural Lands & Farms", desc: "Fertile land & organic farming", href: "/#land" },
      { title: "NA / Commercial Plots", desc: "Non-agricultural clear title plots", href: "/#land" },
      { title: "Farmhouse Land Parcels", desc: "Scenic weekend land developments", href: "/#land" },
      { title: "Industrial Corridor Lands", desc: "Highway frontage & growth expressways", href: "/#land" },
    ],
  },
];

interface NavItem {
  name: string;
  href: string;
  icon?: React.ElementType;
  badge?: string;
  isPropertyDropdown?: boolean;
}

const navItems: NavItem[] = [
  {
    name: "Property",
    href: "/#distinguished-properties",
    icon: Building2,
    isPropertyDropdown: true,
  },
  {
    name: "Features",
    href: "/#featured-projects",
    icon: Sparkles,
  },
  {
    name: "News",
    href: "/#news",
    icon: Newspaper,
  },
  // {
  //   name: "Service",
  //   href: "#service",
  //   icon: Briefcase,
  // },
  // {
  //   name: "Professional",
  //   href: "#professional",
  //   icon: UserCheck,
  // },
  //  {
  //   name: "About Us",
  //   href: "#aboutus",
  //   icon: User,
  // },
  // {
  //   name: "F&Q",
  //   href: "#faq",
  //   icon: HelpCircle,
  // },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPropertyMenuOpen, setIsPropertyMenuOpen] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState<string>("Commercial");
  const [mobilePropertyExpanded, setMobilePropertyExpanded] = useState(false);
  const [mobileSubExpanded, setMobileSubExpanded] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  // Track scroll state for enhanced styling on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const selectedCategory = propertyCategories.find((c) => c.name === hoveredCategory) || propertyCategories[0];

  return (
    <header className="sticky top-0 z-[100] w-full transition-all duration-300">

      {/* Main Navigation Bar */}
      <nav
        className={`w-full transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-md border-b border-gray-200/80 py-2.5"
            : "bg-white/98 backdrop-blur-sm border-b border-gray-100 py-3.5"
        }`}
      >
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="flex items-center justify-between gap-4">
            {/* Left: Brand Logo (invest2growth) */}
            <Link
              href="/"
              className="group flex items-center gap-2.5 transition-transform duration-200 hover:scale-[1.01] shrink-0"
              aria-label="invest2growth homepage"
            >
              {/* Modern Real Estate / Growth Geometric Emblem */}
              <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-[#002E11] text-white shadow-md shadow-[#002E11]/25 group-hover:bg-[#00230d] transition-all">
                <TrendingUp className="w-5 h-5 text-[#e59a67] transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                <span className="absolute -bottom-1 -right-1 w-3 h-3 bg-[#b8612b] rounded-full border-2 border-white" />
              </div>

              {/* Brand Typography */}
              <div className="flex flex-col">
                <div className="flex items-baseline text-2xl font-black tracking-tight leading-none text-[#002E11]">
                  <span>invest</span>
                  <span className="text-[#b8612b] font-black mx-0.5">2</span>
                  <span>growth</span>
                </div>
                <span className="text-[9.5px] font-bold tracking-[0.22em] uppercase text-gray-500 mt-1">
                  Properties &bull; Lands &bull; Assets
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-1 xl:space-x-2 2xl:space-x-3">
              {navItems.map((item) => {
                if (item.isPropertyDropdown) {
                  return (
                    <div
                      key={item.name}
                      className="relative group"
                      onMouseEnter={() => setIsPropertyMenuOpen(true)}
                      onMouseLeave={() => setIsPropertyMenuOpen(false)}
                    >
                      <Link
                        href="/#distinguished-properties"
                        onClick={() => {
                          setIsPropertyMenuOpen(false);
                          const target =
                            document.getElementById("distinguished-properties") ||
                            document.getElementById("all-properties");
                          if (target) target.scrollIntoView({ behavior: "smooth" });
                        }}
                        className={`flex items-center gap-1.5 px-2.5 xl:px-3 py-2 text-[15px] font-semibold font-[family-name:var(--font-jakarta)] rounded-lg transition-all duration-150 whitespace-nowrap cursor-pointer ${
                          isPropertyMenuOpen
                            ? "text-[#002E11] bg-[#002E11]/8"
                            : "text-gray-700 hover:text-[#002E11] hover:bg-[#002E11]/5"
                        }`}
                      >
                        <span className="font-[family-name:var(--font-jakarta)]">{item.name}</span>
                        {item.badge && (
                          <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-[#b8612b]/10 text-[#b8612b] border border-[#b8612b]/20 leading-none">
                            {item.badge}
                          </span>
                        )}
                        <ChevronDown
                          className={`w-3.5 h-3.5 text-gray-400 transition-transform duration-200 group-hover:text-[#b8612b] ${
                            isPropertyMenuOpen ? "rotate-180 text-[#b8612b]" : ""
                          }`}
                        />
                      </Link>

                      {/* Dropdown Menu (Exact design from user screenshot: Residential, Industrial, Commercial, Land, Other) */}
                      {isPropertyMenuOpen && (
                        <div className="absolute left-0 top-full pt-2 z-50">
                          <div className="flex bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden divide-x divide-gray-100 animate-in fade-in-0 zoom-in-95 duration-150">
                            {/* Left Column: Category selector (No redirect, No URL change, strictly preview switch) */}
                            <div className="w-64 p-2.5 space-y-1">
                              {propertyCategories.map((cat) => {
                                const isHovered = hoveredCategory === cat.name;
                                return (
                                  <button
                                    key={cat.name}
                                    type="button"
                                    onClick={() => setHoveredCategory(cat.name)}
                                    onMouseEnter={() => setHoveredCategory(cat.name)}
                                    className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl transition-all cursor-pointer group text-left ${
                                      isHovered
                                        ? "bg-[#b8612b]/10 text-gray-900 shadow-xs"
                                        : "text-gray-700 hover:bg-zinc-50"
                                    }`}
                                  >
                                    <div className="flex items-center gap-3 flex-1 min-w-0">
                                      {/* Thumbnail Image matching screenshot */}
                                      <div className="relative w-8 h-8 rounded-lg overflow-hidden bg-gray-100 border border-gray-200/60 shrink-0">
                                        <img
                                          src={cat.image}
                                          alt={cat.name}
                                          className="w-full h-full object-cover"
                                        />
                                      </div>
                                      <span className="text-[15px] font-medium tracking-tight text-gray-800 group-hover:text-[#b8612b] font-[family-name:var(--font-jakarta)]">
                                        {cat.name}
                                      </span>
                                    </div>

                                    {/* Chevron Right '>' in #b8612b */}
                                    <ChevronRight
                                      className={`w-4 h-4 text-[#b8612b] shrink-0 ml-2 transition-transform duration-150 ${
                                        isHovered ? "translate-x-0.5 opacity-100" : "opacity-75"
                                      }`}
                                    />
                                  </button>
                                );
                              })}
                            </div>

                            {/* Right Column: Flyout Sub-menu preview */}
                            <div className="w-72 p-4 bg-gray-50/70 flex flex-col justify-between">
                              <div>
                                <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-gray-200/70">
                                  <div>
                                    <span className="text-xs font-bold uppercase tracking-wider text-[#b8612b] font-[family-name:var(--font-jakarta)]">
                                      {selectedCategory.name}
                                    </span>
                                    <p className="text-[11px] text-gray-500 mt-0.5">
                                      Verified properties in Gujarat
                                    </p>
                                  </div>
                                </div>

                                <div className="space-y-1">
                                  {selectedCategory.subItems.map((sub) => (
                                    <Link
                                      key={sub.title}
                                      href={sub.href}
                                      onClick={() => {
                                        setIsPropertyMenuOpen(false);
                                        const target = document.getElementById(selectedCategory.id);
                                        if (target) target.scrollIntoView({ behavior: "smooth" });
                                      }}
                                      className="group/item block p-2 rounded-lg hover:bg-white hover:shadow-xs transition-all"
                                    >
                                      <div className="text-xs font-bold text-gray-800 group-hover/item:text-[#b8612b] flex items-center justify-between font-[family-name:var(--font-jakarta)]">
                                        <span>{sub.title}</span>
                                        <ArrowUpRight className="w-3 h-3 text-gray-400 group-hover/item:text-[#b8612b] transition-colors" />
                                      </div>
                                      {sub.desc && (
                                        <p className="text-[10.5px] text-gray-500 mt-0.5">
                                          {sub.desc}
                                        </p>
                                      )}
                                    </Link>
                                  ))}
                                </div>
                              </div>

                              <Link
                                href="/#distinguished-properties"
                                onClick={() => {
                                  setIsPropertyMenuOpen(false);
                                  const target =
                                    document.getElementById("distinguished-properties") ||
                                    document.getElementById("all-properties");
                                  if (target) target.scrollIntoView({ behavior: "smooth" });
                                }}
                                className="mt-3 flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-[#b8612b] text-white text-xs font-bold hover:bg-[#a35322] transition-colors shadow-xs font-[family-name:var(--font-jakarta)]"
                              >
                                <span>View All Properties</span>
                                <ArrowUpRight className="w-3.5 h-3.5" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="px-2.5 xl:px-3 py-2 text-[15px] font-semibold font-[family-name:var(--font-jakarta)] text-gray-700 hover:text-[#b8612b] hover:bg-[#b8612b]/5 rounded-lg transition-all duration-150 whitespace-nowrap"
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>

            {/* Right: Get in Touch Button & Actions (in synced #b8612b luxury theme) */}
            <div className="hidden md:flex items-center gap-3 shrink-0">
              <Link
                href="/contactUs"
                className="group relative inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-bold font-[family-name:var(--font-jakarta)] text-white bg-[#002E11] rounded-full shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 whitespace-nowrap"
              >
                <span>Get in touch</span>
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/20 group-hover:bg-white/30 text-white transition-all">
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-45" />
                </span>
              </Link>
            </div>

            {/* Mobile / Tablet Menu Button (Hamburger) */}
            <div className="flex lg:hidden items-center gap-2">
              <Link
                href="/contactUs"
                className="sm:inline-flex md:hidden items-center px-3.5 py-1.5 text-xs font-bold text-white bg-[#b8612b] rounded-full shadow-sm hover:bg-[#a35322] transition-colors whitespace-nowrap"
              >
                Get in touch
              </Link>
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="p-2.5 rounded-xl text-gray-700 hover:text-[#002E11] hover:bg-[#002E11]/10 focus:outline-none focus:ring-2 focus:ring-[#002E11]/20 transition-colors"
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-expanded={isOpen}
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-xs z-40 lg:hidden animate-in fade-in duration-200"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu Off-Canvas / Slide-in Drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white z-50 shadow-2xl lg:hidden flex flex-col transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-[#002E11] text-white">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-300">
              <TrendingUp className="w-4 h-4" />
            </div>
            <div className="flex items-baseline text-xl font-bold tracking-tight text-white">
              <span>invest</span>
              <span className="text-emerald-400 font-extrabold mx-0.5">2</span>
              <span>growth</span>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-lg text-emerald-200 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Body - Scrollable Links */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-1">
          <div className="text-[11px] font-bold uppercase tracking-wider text-gray-400 px-3 py-1">
            Navigation Menu
          </div>

          {navItems.map((item) => {
            const Icon = item.icon || Building2;

            if (item.isPropertyDropdown) {
              return (
                <div key={item.name} className="border-b border-gray-50 pb-1">
                  <button
                    type="button"
                    onClick={() => setMobilePropertyExpanded(!mobilePropertyExpanded)}
                    className="w-full flex items-center justify-between px-3 py-3 rounded-xl text-gray-800 hover:bg-[#002E11]/5 hover:text-[#002E11] transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-emerald-50 text-[#002E11]">
                        <Icon className="w-4 h-4" />
                      </span>
                      <span className="text-base font-semibold font-[family-name:var(--font-jakarta)]">{item.name}</span>
                      {item.badge && (
                        <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-[#002E11]/10 text-[#002E11]">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <ChevronDown
                      className={`w-4 h-4 text-gray-400 transition-transform ${
                        mobilePropertyExpanded ? "rotate-180 text-[#002E11]" : ""
                      }`}
                    />
                  </button>

                  {/* Mobile Property Dropdown Accordion */}
                  {mobilePropertyExpanded && (
                    <div className="ml-4 pl-3 pr-2 py-1 space-y-1 border-l-2 border-[#002E11]/20">
                      {propertyCategories.map((cat) => {
                        const isSubOpen = mobileSubExpanded === cat.name;
                        return (
                          <div key={cat.name} className="space-y-1">
                            <button
                              type="button"
                              onClick={() =>
                                setMobileSubExpanded(isSubOpen ? null : cat.name)
                              }
                              className="w-full flex items-center justify-between p-2 rounded-lg hover:bg-zinc-100 transition-colors cursor-pointer text-left"
                            >
                              <div className="flex items-center gap-2.5 flex-1 min-w-0">
                                <img
                                  src={cat.image}
                                  alt={cat.name}
                                  className="w-6 h-6 rounded-md object-cover border border-gray-200"
                                />
                                <span className="text-sm font-semibold text-gray-800 font-[family-name:var(--font-jakarta)]">
                                  {cat.name}
                                </span>
                              </div>
                              <ChevronRight
                                className={`w-3.5 h-3.5 text-[#002E11] transition-transform ${
                                  isSubOpen ? "rotate-90" : ""
                                }`}
                              />
                            </button>

                            {isSubOpen && (
                              <div className="ml-8 pl-2 space-y-1 border-l border-gray-200">
                                {cat.subItems.map((sub) => (
                                  <Link
                                    key={sub.title}
                                    href={sub.href}
                                    onClick={() => {
                                      setIsOpen(false);
                                      const target = document.getElementById(cat.id);
                                      if (target) target.scrollIntoView({ behavior: "smooth" });
                                    }}
                                    className="block py-1.5 text-xs text-gray-600 hover:text-[#002E11] font-medium font-[family-name:var(--font-jakarta)]"
                                  >
                                    {sub.title}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        );
                      })}

                      {/* Mobile "View All Properties" button */}
                      <Link
                        href="/#distinguished-properties"
                        onClick={() => {
                          setIsOpen(false);
                          const target =
                            document.getElementById("distinguished-properties") ||
                            document.getElementById("all-properties");
                          if (target) target.scrollIntoView({ behavior: "smooth" });
                        }}
                        className="flex items-center justify-center gap-1.5 py-2.5 px-3 mt-2 rounded-lg bg-[#b8612b] text-white text-xs font-bold hover:bg-[#a35322] transition-colors shadow-xs font-[family-name:var(--font-jakarta)]"
                      >
                        <span>View All Properties</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <div key={item.name} className="border-b border-gray-50 last:border-b-0">
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between px-3 py-3 rounded-xl text-gray-800 hover:bg-[#002E11]/5 hover:text-[#002E11] transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-emerald-50 text-[#002E11]">
                      <Icon className="w-4 h-4" />
                    </span>
                    <span className="text-base font-semibold font-[family-name:var(--font-jakarta)]">{item.name}</span>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>

        {/* Drawer Footer - Contact Action & Details */}
        <div className="p-6 border-t border-gray-100 bg-gray-50/70 space-y-4">
          <Link
            href="/contactUs"
            onClick={() => setIsOpen(false)}
            className="w-full flex items-center justify-center gap-2 py-3.5 px-4 bg-[#b8612b] text-white rounded-xl font-bold shadow-md shadow-[#b8612b]/25 hover:bg-[#a35322] active:scale-[0.98] transition-all text-sm"
          >
            <span>Get in touch</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>

          <div className="pt-2 border-t border-gray-200/60 space-y-2 text-xs text-gray-500">
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-[#002E11]" />
              <span className="font-semibold text-gray-700">+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-[#002E11]" />
              <span>contact@invest2growth.com</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
