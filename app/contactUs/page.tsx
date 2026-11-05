"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Send,
  CheckCircle2,
  Building2,
  Compass,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    category: "Residential",
    budget: "₹1 Cr - ₹3 Cr",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const categories = [
    "Residential",
    "Commercial",
    "Industrial",
    "Land & Plots",
    "Legal Due Diligence",
  ];


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate swift server response
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  return (
    <div className="min-h-screen w-full flex flex-col bg-white text-zinc-900 overflow-x-clip scroll-smooth">
      <main className="flex-1 w-full relative">
        {/* ================= HERO HEADER DOSSIER WITH contactUs.png BACKGROUND ================= */}
        <section className="relative w-full py-20 sm:py-24 lg:py-28 overflow-hidden bg-zinc-50 border-b border-gray-200/80">
          {/* Background Image from public/contactUs.png */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <img
              src="/contactUs.png"
              alt="Invest2Growth Gujarat Real Estate Counsel"
              className="w-full h-full object-cover object-center"
            />
            {/* Subtle soft gradient overlay to guarantee perfect contrast and readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/20 to-white/60 backdrop-blur-[0.5px]" />
          </div>

          <div className="relative z-10 mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 max-w-7xl">

            {/* Centered Hero Content Block */}
            <div className="max-w-3xl mx-auto text-center space-y-4 flex flex-col items-center">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-2 rounded-full bg-white/90 backdrop-blur-md border border-[#b8612b]/30 text-[#b8612b] text-xs font-bold tracking-widest uppercase shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#b8612b]" />
                DIRECT EXECUTIVE ADVISORY
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-[family-name:var(--font-jakarta)] font-semibold text-[#002E11] tracking-tight leading-tight text-center drop-shadow-xs mb-2">
                Connect with Gujarat&apos;s Premier <br className="hidden sm:inline" />
                <span className="text-[#b8612b] font-bold">Real Estate &amp; Land Counsel</span>
              </h1>

              <p className="text-sm sm:text-base text-zinc-700 font-medium leading-relaxed max-w-2xl mx-auto text-center drop-shadow-xs">
                From strategic land corridors and commercial towers to industrial plots and luxury estates — our accredited advisors provide seamless execution.
              </p>
            </div>
          </div>
        </section>

        {/* ================= MAIN SPLIT SECTION (CONTACT DETAILS + FORM) ================= */}
        <section className="relative w-full py-8 bg-[#fafafa] border-b border-gray-100">
          <div className="mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              {/* ================= LEFT COLUMN: CONTACT CHANNELS & HUBS (5 COLS) ================= */}
              <div className="lg:col-span-5 space-y-8">
                {/* 1. Quick Direct Channels Card */}
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/80 shadow-md shadow-zinc-900/[0.03] space-y-6">
                  <div className="border-b border-gray-100 pb-4 mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#b8612b]">
                      Priority Communication
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-[family-name:var(--font-jakarta)] font-normal text-[#002E11] mt-1">
                      Direct Advisory Desks
                    </h2>
                  </div>

                  <div className="space-y-4">
                    {/* Phone Channel */}
                    <a
                      href="tel:+919876543210"
                      className="group flex items-start gap-4 p-3.5 rounded-2xl text-[#002E11] hover:text-[#b8612b] hover:bg-[#b8612b]/[0.05] transition-all border border-transparent hover:border-[#b8612b]/20 cursor-pointer"
                    >
                      <div className="w-11 h-11 rounded-xl bg-[#002E11] text-[#e59a67] flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                          Central Inquiries &amp; WhatsApp
                        </span>
                        <p className="text-base font-bold text-current group-hover:!text-[#b8612b] hover:!text-[#b8612b] transition-colors">
                          +91 98765 43210
                        </p>
                      </div>
                    </a>

                    {/* Email Channel */}
                    <a
                      href="mailto:info@invest2growth.com"
                      className="group flex items-start gap-4 p-3.5 rounded-2xl text-[#002E11] hover:text-[#b8612b] hover:bg-[#b8612b]/[0.05] transition-all border border-transparent hover:border-[#b8612b]/20 cursor-pointer"
                    >
                      <div className="w-11 h-11 rounded-xl bg-[#002E11] text-[#e59a67] flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                          Official Correspondence
                        </span>
                        <p className="text-base font-bold text-current group-hover:!text-[#b8612b] hover:!text-[#b8612b] transition-colors">
                          info@invest2growth.com
                        </p>
                      </div>
                    </a>

                    {/* Address Channel - Exactly matching Contact & Email UI */}
                    <a
                      href="https://maps.google.com/?q=Executive+Suite+402+Vesu+Main+Road+Surat+395007"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-start gap-4 p-3.5 rounded-2xl text-[#002E11] hover:text-[#b8612b] hover:bg-[#b8612b]/[0.05] transition-all border border-transparent hover:border-[#b8612b]/20 cursor-pointer"
                    >
                      <div className="w-11 h-11 rounded-xl bg-[#002E11] text-[#e59a67] flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                          Corporate Headquarters &amp; Desk
                        </span>
                        <p className="text-sm font-bold text-current group-hover:!text-[#b8612b] hover:!text-[#b8612b] transition-colors">
                          Executive Suite 402, Vesu Main Road, Near Surat Airport Corridor, Surat 395007
                        </p>
                      </div>
                    </a>
                  </div>
                </div>

              </div>

              {/* ================= RIGHT COLUMN: INTERACTIVE INQUIRY FORM (7 COLS) ================= */}
              <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-gray-200/90 shadow-xl shadow-zinc-900/[0.04]">
                {isSubmitted ? (
                  /* Success Confirmation Screen */
                  <div className="py-12 sm:py-16 text-center space-y-6 animate-in fade-in zoom-in-95 duration-300">
                    <div className="w-20 h-20 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-md border border-emerald-100">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>

                    <div className="space-y-2 max-w-md mx-auto">
                      <h3 className="text-2xl sm:text-3xl font-[family-name:var(--font-jakarta)] font-normal text-[#002E11]">
                        Thank You, {formData.name || "Valued Client"}!
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed font-light">
                        Your inquiry regarding has been assigned to a Senior Advisory Counsel.
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          name: "",
                          phone: "",
                          email: "",
                          category: "Residential",
                          budget: "₹1 Cr - ₹3 Cr",
                          message: "",
                        });
                      }}
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#002E11] text-white text-xs font-semibold hover:bg-[#00230d] transition-all shadow-sm cursor-pointer"
                    >
                      <span>Submit Another Inquiry</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ) : (
                  /* Standard Form */
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="border-b border-gray-100 pb-4">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#b8612b]">
                        Direct Advisory Request
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-[family-name:var(--font-jakarta)] font-normal text-[#002E11] mt-1">
                        Send Your Investment Mandate
                      </h2>
                      <p className="text-[13px] text-zinc-700 font-medium leading-relaxed pt-1">
                        Please provide your contact information and requirements.
                      </p>
                    </div>

                    {/* Category Selection Pills */}
                    <div className="space-y-2.5">
                      <label className="block text-xs font-semibold text-gray-700 font-[family-name:var(--font-jakarta)]">
                        Asset Class / Interest Type <span className="text-[#b8612b]">*</span>
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {categories.map((cat) => {
                          const isSelected = formData.category === cat;
                          return (
                            <button
                              key={cat}
                              type="button"
                              onClick={() =>
                                setFormData((prev) => ({ ...prev, category: cat }))
                              }
                              className={`px-3.5 py-2 rounded-xl text-[13px] font-semibold transition-all cursor-pointer ${isSelected
                                ? "bg-[#002E11] text-white shadow-sm border border-[#002E11]"
                                : "bg-gray-50 border border-gray-200 text-gray-700 hover:border-[#b8612b]/50 hover:bg-zinc-100/60"
                                }`}
                            >
                              {cat}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Name & Phone in 2-Columns */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                      <div className="space-y-1.5">
                        <label className="block text-xs font-semibold text-gray-700 font-[family-name:var(--font-jakarta)]">
                          Full Legal Name <span className="text-[#b8612b]">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Rajesh Patel"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData((prev) => ({ ...prev, name: e.target.value }))
                          }
                          className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm text-gray-900 placeholder:text-gray-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#002E11]/20 focus:border-[#002E11] transition-all"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="block text-xs font-semibold text-gray-700 font-[family-name:var(--font-jakarta)]">
                          Direct Contact Number <span className="text-[#b8612b]">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          maxLength={10}
                          placeholder="+91 98765 00000"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData((prev) => ({ ...prev, phone: e.target.value }))
                          }
                          className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm text-gray-900 placeholder:text-gray-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#002E11]/20 focus:border-[#002E11] transition-all"
                        />
                      </div>
                    </div>

                    {/* Email & Budget in 2-Columns */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                      <div className="space-y-1.5">
                        <label className="block text-xs font-semibold text-gray-700 font-[family-name:var(--font-jakarta)]">
                          Corporate / Personal Email <span className="text-[#b8612b]">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="rajesh@company.com"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData((prev) => ({ ...prev, email: e.target.value }))
                          }
                          className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm text-gray-900 placeholder:text-gray-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#002E11]/20 focus:border-[#002E11] transition-all"
                        />
                      </div>
                    </div>

                    {/* Requirements Textarea */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-semibold text-gray-700 font-[family-name:var(--font-jakarta)]">
                        Specific Portfolio Requirements / Location Preference
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Detail your preferred micro-market (e.g. SG Highway, GIFT City, Sanand GIDC, Dholera SIR), configuration, or documentation needs..."
                        value={formData.message}
                        onChange={(e) =>
                          setFormData((prev) => ({ ...prev, message: e.target.value }))
                        }
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm text-gray-900 placeholder:text-gray-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#002E11]/20 focus:border-[#002E11] transition-all resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-[#002E11] hover:bg-[#00230d] text-white text-sm font-bold shadow-md shadow-[#002E11]/25 hover:shadow-lg transition-all cursor-pointer disabled:opacity-60"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            <span>Transmitting Request...</span>
                          </>
                        ) : (
                          <>
                            <span className="text-sm font-medium leading-relaxed max-w-2xl mx-auto text-center drop-shadow-xs">Request Advisory Call</span>
                            <Send className="w-4 h-4 text-[#e59a67]" />
                          </>
                        )}
                      </button>

                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}

