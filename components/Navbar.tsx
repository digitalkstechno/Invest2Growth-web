"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  ChevronDown,
  Plus,
  User,
  Menu,
  X,
  ArrowRight,
} from "lucide-react";

interface SubMenuItem {
  title: string;
  desc?: string;
  href: string;
  badge?: string;
}

interface MenuDropdownItem {
  id: string;
  name: string;
  href: string;
  items: SubMenuItem[];
}

const navMenus: MenuDropdownItem[] = [
  {
    id: "buy",
    name: "Buy",
    href: "/#distinguished-properties",
    items: [
      {
        title: "Residential Apartments",
        desc: "2, 3 & 4 BHK luxury flats in Gujarat",
        href: "/#residential",
      },
      {
        title: "Luxury Villas & Bungalows",
        desc: "Private gated community estates",
        href: "/#residential",
      },
      {
        title: "Penthouses & Duplexes",
        desc: "Exclusive skyline residences",
        href: "/#residential",
      },
      {
        title: "Commercial Offices & Shops",
        desc: "High footfall retail & corporate hubs",
        href: "/#commercial",
      },
      {
        title: "Investment Land & NA Plots",
        desc: "Clear-title strategic corridors",
        href: "/#land",
      },
    ],
  },
  {
    id: "rent",
    name: "Rent",
    href: "/#distinguished-properties",
    items: [
      {
        title: "Residential Flats for Rent",
        desc: "Furnished & semi-furnished apartments",
        href: "/#residential",
      },
      {
        title: "Executive Villas for Lease",
        desc: "Spacious luxury homes with amenities",
        href: "/#residential",
      },
      {
        title: "Grade-A Corporate Office Space",
        desc: "Plug-and-play modern business suites",
        href: "/#commercial",
      },
      {
        title: "Retail Showrooms & Outlets",
        desc: "Prime high-street commercial locations",
        href: "/#commercial",
      },
      {
        title: "Warehouses & Logistics Sheds",
        desc: "Strategic industrial storage spaces",
        href: "/#industrial",
      },
    ],
  },
  {
    id: "sell",
    name: "Sell",
    href: "/contactUs",
    items: [
      {
        title: "Post Property for Free",
        desc: "Direct reach to verified high-net-worth buyers",
        href: "/contactUs",
        badge: "Free",
      },
      {
        title: "Property Valuation Advisory",
        desc: "Accurate fair market value assessment",
        href: "/contactUs",
      },
      {
        title: "Sell Commercial Real Estate",
        desc: "Offices, retail complexes & SCO plots",
        href: "/contactUs",
      },
      {
        title: "Sell Land & Agricultural Parcels",
        desc: "Highway corridors, TP/DP & NA plots",
        href: "/contactUs",
      },
      {
        title: "Dedicated Legal Due Diligence",
        desc: "Fast clearance & transparent title support",
        href: "/contactUs",
      },
    ],
  },
  {
    id: "commercial",
    name: "Commercial",
    href: "/#commercial",
    items: [
      {
        title: "Grade-A Corporate Towers",
        desc: "Modern office towers in GIFT City & Surat",
        href: "/#commercial",
      },
      {
        title: "Retail Showrooms & High-Street",
        desc: "High footfall commercial shopping centers",
        href: "/#commercial",
      },
      {
        title: "Commercial SCO Plots",
        desc: "Shop-cum-office masterplanned assets",
        href: "/#commercial",
      },
      {
        title: "Co-working & Business Centers",
        desc: "Flexible plug-and-play corporate spaces",
        href: "/#commercial",
      },
      {
        title: "Logistics Hubs & Warehouses",
        desc: "Expressway frontage industrial sheds",
        href: "/#industrial",
      },
    ],
  },
  {
    id: "plots",
    name: "Plots",
    href: "/#land",
    items: [
      {
        title: "Residential Gated Plots",
        desc: "Ready for immediate bungalow construction",
        href: "/#residential",
      },
      {
        title: "NA & Commercial Land Corridors",
        desc: "Highway-facing clear-title non-agri plots",
        href: "/#land",
      },
      {
        title: "Heavy GIDC Industrial Land",
        desc: "Approved zones with power & effluent grids",
        href: "/#industrial",
      },
      {
        title: "Scenic Farmhouses & Agro Land",
        desc: "Organic orchards & weekend retreats",
        href: "/#land",
      },
      {
        title: "Dholera SIR Expressway Corridors",
        desc: "High-growth special investment region land",
        href: "/#land",
      },
    ],
  },
  {
    id: "help",
    name: "Help",
    href: "/contactUs",
    items: [
      {
        title: "Contact Our Advisory Desk",
        desc: "Speak with accredited Gujarat real estate consultants",
        href: "/contactUs",
      },
      {
        title: "Legal & Title Due Diligence",
        desc: "7/12, NA order, TP/DP scrutiny by advocates",
        href: "/contactUs",
      },
      {
        title: "NRI Investor Concierge",
        desc: "Complete remote acquisition & management",
        href: "/contactUs",
      },
      {
        title: "Frequently Asked Questions",
        desc: "Answers regarding process, taxes & approvals",
        href: "/contactUs",
      },
      {
        title: "Direct WhatsApp / Call Support",
        desc: "+91 98765 43210 (Mon - Sat, 9 AM - 8 PM)",
        href: "tel:+919876543210",
      },
    ],
  },
];

export default function Navbar() {
  const pathname = usePathname();

  // Hide Navbar completely on the login page
  if (pathname?.startsWith("/login")) {
    return null;
  }

  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Scroll detection for sticky shadow/border polish
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll on mobile drawer open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const handleMouseEnter = (id: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setActiveDropdown(id);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const toggleMobileAccordion = (id: string) => {
    setMobileAccordion((prev) => (prev === id ? null : id));
  };

  const handleScrollToSection = (href: string) => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);

    if (href.startsWith("/#")) {
      const targetId = href.replace("/#", "");
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className="sticky top-0 z-[100] w-full bg-white transition-all duration-200">
      {/* Top Navbar Container */}
      <nav
        className={`w-full transition-all duration-200 border-b ${
          scrolled
            ? "border-gray-200/90 shadow-sm bg-white/98 backdrop-blur-md py-2.5 sm:py-3"
            : "border-gray-100 bg-white py-3 sm:py-3.5"
        }`}
      >
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="flex items-center justify-between gap-2 sm:gap-4">
            
            {/* Left Section: Logo */}
            <div className="flex items-center shrink-0">
              {/* invest2growth Brand Logo */}
              <Link
                href="/"
                className="flex items-center group transition-transform duration-150 hover:scale-[1.01]"
                aria-label="invest2growth Home"
              >
                <div className="relative h-8 sm:h-9 md:h-10 w-auto">
                  <img
                    src="/logo.png"
                    alt="invest2growth"
                    className="h-8 sm:h-9 md:h-10 w-auto object-contain"
                  />
                </div>
              </Link>
            </div>

            {/* Middle Section: Home Button + Navigation Links with ChevronDown (Buy, Rent, Sell, Commercial, Plots, Help) */}
            <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {/* Orange tinted Home icon button (Right next to Buy as shown in screenshot) */}
              <Link
                href="/"
                aria-label="Home"
                className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#FFF2E8] hover:bg-[#ffe3ce] transition-colors shrink-0 shadow-2xs mr-2 xl:mr-3"
              >
                <Home className="w-4 h-4 sm:w-5 sm:h-5 text-[#015BE1] fill-[#015BE1]" />
              </Link>

              {navMenus.map((menu) => {
                const isOpen = activeDropdown === menu.id;
                return (
                  <div
                    key={menu.id}
                    className="relative"
                    onMouseEnter={() => handleMouseEnter(menu.id)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button
                      type="button"
                      onClick={() => {
                        setActiveDropdown((prev) => (prev === menu.id ? null : menu.id));
                      }}
                      className={`flex items-center gap-1 px-2.5 xl:px-3 py-1.5 text-[13px] font-medium hover:font-semibold font-[family-name:var(--font-poppins)] rounded-lg transition-colors duration-150 cursor-pointer select-none ${
                        isOpen
                          ? "text-[#015BE1] bg-blue-50/70"
                          : "text-[#0a1a33] hover:text-[#015BE1] hover:bg-gray-50"
                      }`}
                    >
                      <span className="font-[family-name:var(--font-poppins)] text-[14.5px]">
                        {menu.name}
                      </span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 text-gray-500 transition-transform duration-200 ${
                          isOpen ? "rotate-180 text-[#015BE1]" : ""
                        }`}
                      />
                    </button>

                    {/* Desktop Dropdown Flyout Card */}
                    {isOpen && (
                      <div className="absolute left-0 top-full pt-2 z-50 w-72 sm:w-80 animate-in fade-in-0 zoom-in-95 duration-150">
                        <div className="bg-white rounded-2xl shadow-xl border border-gray-100/90 p-2.5 overflow-hidden">
                          {/* Dropdown Header */}
                          <div className="px-3 py-2 border-b border-gray-100 flex items-center justify-between">
                            <span className="text-xs font-semibold text-[#FC8018] uppercase tracking-wider font-[family-name:var(--font-poppins)]">
                              {menu.name} Options
                            </span>
                            <span className="text-[11px] text-gray-400 font-medium font-[family-name:var(--font-poppins)]">
                              Gujarat Verified
                            </span>
                          </div>

                          {/* Dropdown Links */}
                          <div className="mt-1 space-y-0.5">
                            {menu.items.map((subItem) => (
                              <Link
                                key={subItem.title}
                                href={subItem.href}
                                onClick={() => handleScrollToSection(subItem.href)}
                                className="group/item flex items-start justify-between p-2.5 rounded-xl hover:bg-blue-50/60 transition-colors"
                              >
                                <div className="pr-2">
                                  <div className="flex items-center gap-1.5">
                                    <span className="text-[12.5px] font-semibold text-gray-800 group-hover/item:text-[#015BE1] transition-colors font-[family-name:var(--font-poppins)]">
                                      {subItem.title}
                                    </span>
                                    {subItem.badge && (
                                      <span className="text-[9.5px] font-semibold px-1.5 py-0.5 rounded-full bg-[#FC8018]/10 text-[#FC8018] border border-[#FC8018]/20 font-[family-name:var(--font-poppins)]">
                                        {subItem.badge}
                                      </span>
                                    )}
                                  </div>
                                  {subItem.desc && (
                                    <p className="text-[11px] text-gray-500 mt-0.5 line-clamp-1 font-[family-name:var(--font-poppins)]">
                                      {subItem.desc}
                                    </p>
                                  )}
                                </div>
                                <ArrowRight className="w-3.5 h-3.5 text-gray-400 group-hover/item:text-[#015BE1] group-hover/item:translate-x-0.5 transition-all shrink-0 mt-1" />
                              </Link>
                            ))}
                          </div>

                          {/* Dropdown Footer Action */}
                          <div className="mt-2 pt-2 border-t border-gray-100">
                            <Link
                              href={menu.href}
                              onClick={() => handleScrollToSection(menu.href)}
                              className="w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-gray-50 hover:bg-[#FC8018] text-gray-700 hover:text-white text-xs font-semibold transition-all font-[family-name:var(--font-poppins)] group/btn"
                            >
                              <span>Explore {menu.name}</span>
                              <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Right Section: "+ Post Property" (Orange) & "👤 Login" (White Outline) */}
            <div className="hidden md:flex items-center gap-2.5 sm:gap-3 shrink-0">
              {/* + Post Property Button (Vibrant Orange #FC8018, Poppins 600, 13px) */}
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-xl bg-[#FC8018] hover:bg-[#e26e0e] active:scale-95 text-white font-semibold text-[13px] shadow-xs transition-all font-[family-name:var(--font-poppins)] whitespace-nowrap"
              >
                <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
                <span>Post Property</span>
              </Link>

              {/* Login Button (White background with gray border, Poppins 500, 13px) */}
              <Link
                href="/login"
                className="inline-flex items-center justify-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl bg-white hover:bg-gray-50 active:scale-95 border border-gray-300 hover:border-gray-400 text-gray-800 hover:text-[#015BE1] font-medium text-[13px] shadow-xs transition-all font-[family-name:var(--font-poppins)] whitespace-nowrap"
              >
                <User className="w-3.5 h-3.5 text-gray-600" />
                <span>Login</span>
              </Link>
            </div>

            {/* Mobile / Small Screen Controls */}
            <div className="flex md:hidden items-center gap-2 shrink-0">
              {/* Mobile Post Property Quick Button */}
              <Link
                href="/contactUs"
                className="inline-flex items-center justify-center gap-1 px-3 py-1.5 rounded-lg bg-[#FC8018] text-white font-semibold text-xs shadow-xs font-[family-name:var(--font-poppins)] whitespace-nowrap"
              >
                <Plus className="w-3 h-3 stroke-[2.5]" />
                <span>Post</span>
              </Link>

              {/* Hamburger Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-gray-700 hover:text-[#015BE1] hover:bg-blue-50 transition-colors"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 text-gray-900" />
                ) : (
                  <Menu className="w-6 h-6 text-gray-900" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Backdrop & Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[120] lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Panel */}
          <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-2xl flex flex-col z-[130] animate-in slide-in-from-right duration-200 font-[family-name:var(--font-poppins)]">
            {/* Drawer Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
              <div className="flex items-center gap-2.5">
                <img
                  src="/logo.png"
                  alt="invest2growth"
                  className="h-8 w-auto object-contain"
                />
              </div>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-xl text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Drawer Navigation List with Accordions */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-1.5">
              {/* Home Quick Link */}
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 px-3.5 py-3 rounded-xl bg-[#FFF2E8] text-[#015BE1] font-semibold text-[13.5px] font-[family-name:var(--font-poppins)]"
              >
                <Home className="w-4 h-4 text-[#015BE1] fill-[#015BE1]" />
                <span>Home</span>
              </Link>

              {/* Nav Menus Accordion */}
              {navMenus.map((menu) => {
                const isExpanded = mobileAccordion === menu.id;
                return (
                  <div key={menu.id} className="border border-gray-100 rounded-xl overflow-hidden">
                    <button
                      type="button"
                      onClick={() => toggleMobileAccordion(menu.id)}
                      className={`w-full flex items-center justify-between px-4 py-2.5 text-left font-medium text-[13px] transition-colors font-[family-name:var(--font-poppins)] ${
                        isExpanded
                          ? "bg-blue-50/70 text-[#015BE1] font-semibold"
                          : "bg-white text-gray-800 hover:bg-gray-50"
                      }`}
                    >
                      <span>{menu.name}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                          isExpanded ? "rotate-180 text-[#015BE1]" : ""
                        }`}
                      />
                    </button>

                    {isExpanded && (
                      <div className="bg-gray-50/80 px-3 py-2 space-y-1 border-t border-gray-100">
                        {menu.items.map((subItem) => (
                          <Link
                            key={subItem.title}
                            href={subItem.href}
                            onClick={() => handleScrollToSection(subItem.href)}
                            className="block p-2 rounded-lg hover:bg-white transition-colors"
                          >
                            <div className="text-[12.5px] font-medium text-gray-800 font-[family-name:var(--font-poppins)]">
                              {subItem.title}
                            </div>
                            {subItem.desc && (
                              <p className="text-[11px] text-gray-500 mt-0.5 line-clamp-1 font-[family-name:var(--font-poppins)]">
                                {subItem.desc}
                              </p>
                            )}
                          </Link>
                        ))}

                        <Link
                          href={menu.href}
                          onClick={() => handleScrollToSection(menu.href)}
                          className="mt-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-[#FC8018] text-white text-xs font-semibold font-[family-name:var(--font-poppins)]"
                        >
                          <span>Explore All {menu.name}</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Drawer Bottom Actions: Post Property + Login */}
            <div className="p-4 border-t border-gray-100 bg-gray-50/50 space-y-2.5">
              <Link
                href="/contactUs"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#FC8018] hover:bg-[#e26e0e] text-white font-semibold text-[13px] shadow-xs font-[family-name:var(--font-poppins)] transition-colors"
              >
                <Plus className="w-4 h-4 stroke-[2.5]" />
                <span>Post Property</span>
              </Link>

              <Link
                href="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white border border-gray-300 text-gray-800 hover:text-[#015BE1] font-medium text-[13px] shadow-xs font-[family-name:var(--font-poppins)] transition-colors"
              >
                <User className="w-4 h-4 text-gray-600" />
                <span>Login</span>
              </Link>

              {/* Contact info snippet */}
              <div className="pt-2 text-center text-xs text-gray-500 font-[family-name:var(--font-poppins)]">
                <span>Inquiries: </span>
                <a href="tel:+919876543210" className="font-semibold text-gray-700 hover:text-[#015BE1]">
                  +91 98765 43210
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
