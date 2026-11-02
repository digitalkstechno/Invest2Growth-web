"use client";

import React, { useState } from "react";
import {
  Award,
  CheckCircle2,
  ChevronRight,
  Briefcase,
  Scale,
  Compass,
  FileText,
  BadgeCheck,
} from "lucide-react";

interface Professional {
  id: string;
  name: string;
  role: string;
  experience: string;
  license: string;
  phone: string;
  email: string;
  bio: string;
  specialties: string[];
  certifications: string[];
  image: string;
  icon: React.ElementType;
}

const professionals: Professional[] = [
  {
    id: "legal-rera",
    name: "Adv. Rajesh V. Desai",
    role: "Senior RERA & Revenue Land Advocate",
    experience: "24+ Years",
    license: "Gujarat Bar Council • RERA Reg. No. GJRERA/ADV/1042",
    phone: "+91 98250 12345",
    email: "legal@invest2growth.com",
    bio: "Pioneering Gujarat revenue laws, 7/12 land titles, NA zoning permissions, and RERA litigation for over two decades. Has personally vetted 4,000+ land parcels across Ahmedabad, Surat, and GIFT corridor with zero post-acquisition dispute record.",
    specialties: [
      "Revenue 7/12 & 8-A Title Clearance",
      "Agricultural to Non-Agricultural (NA) Zoning",
      "Gujarat RERA Compliance & Registration",
      "Sale Deed & Escrow Contract Structuring",
    ],
    certifications: ["Bar Council of Gujarat", "RERA Certified Counsel", "Apex Revenue Law Specialist"],
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&q=80",
    icon: Scale,
  },
  {
    id: "urban-architect",
    name: "Ar. Snehal Patel",
    role: "Principal Urban Planner & Master Architect",
    experience: "19+ Years",
    license: "Council of Architecture (CA/2005/34120) • IIA Fellow",
    phone: "+91 98795 23456",
    email: "planning@invest2growth.com",
    bio: "Internationally acclaimed master planner specializing in large-scale residential townships, luxury resort villas, and IGBC Green Building certified architectures. Blends contemporary biophilic aesthetics with statutory FSI optimization.",
    specialties: [
      "Integrated Township Master Layouts",
      "IGBC & LEED Green Building Planning",
      "FSI Optimization & AUDA / SUDA Bylaws",
      "Biophilic Villa & Landscape Architecture",
    ],
    certifications: ["Council of Architecture", "Indian Institute of Architects", "IGBC Accredited AP"],
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    icon: Compass,
  },
  {
    id: "tax-portfolio",
    name: "CA Harshit Shah",
    role: "Real Estate Tax & Capital Gains Strategist",
    experience: "16+ Years",
    license: "ICAI Fellow (FCA 098432) • DISA Certified",
    phone: "+91 98980 34567",
    email: "tax@invest2growth.com",
    bio: "Authority on real estate capital gains exemptions (Section 54, 54F, 54EC), NRI property acquisitions, joint development agreements (JDA), and institutional investment yield modeling across Gujarat and international desks.",
    specialties: [
      "Capital Gains Tax Optimization (Sec 54)",
      "NRI Property Tax & FEMA Regulatory Compliance",
      "Joint Development Agreement (JDA) Structuring",
      "Commercial Lease ROI & IRR Analytics",
    ],
    certifications: ["Fellow Chartered Accountant", "Information Systems Auditor", "Real Estate Financial Modeler"],
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    icon: FileText,
  },
  {
    id: "gidc-liaison",
    name: "Er. Vikramaditya Rathore",
    role: "Industrial & GIDC Land Acquisition Director",
    experience: "21+ Years",
    license: "Former Industry Liaison Board Member • B.Tech Civil",
    phone: "+91 98242 45678",
    email: "industrial@invest2growth.com",
    bio: "Ex-GIDC infrastructure liaison with direct oversight of Changodar, Sanand, Dahej PCPIR, and Jhagadia industrial corridors. Directs industrial land allotment, pollution board (GPCB) clearances, high-tension power line approvals, and highway access.",
    specialties: [
      "GIDC Plot Direct Allotment & Transfer",
      "Gujarat Pollution Control Board (GPCB) NOCs",
      "HT Power Substation & Industrial Water Feeders",
      "Heavy Logistics Frontage Approvals",
    ],
    certifications: ["Industrial Corridor Strategist", "Civil Infrastructure Specialist", "GIDC Compliance Lead"],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    icon: Briefcase,
  },
  {
    id: "luxury-advisory",
    name: "Bhavna Solanki",
    role: "Bespoke Residential Wealth Advisor",
    experience: "14+ Years",
    license: "RICS Accredited Advisor • National Realty Council",
    phone: "+91 98790 56789",
    email: "advisory@invest2growth.com",
    bio: "Dedicated advisor to ultra-high-net-worth families, NRI investors, and corporate leaders. Curates bespoke off-market villas, skyline penthouses, and private weekend estates with complete confidentiality and end-to-end asset stewardship.",
    specialties: [
      "Off-Market Confidential Property Dealings",
      "Bespoke Luxury Villa & Penthouse Acquisitions",
      "Family Office Real Estate Asset Allocation",
      "Post-Purchase Concierge & Asset Management",
    ],
    certifications: ["Royal Institution of Chartered Surveyors (RICS)", "Luxury Real Estate Specialist", "Client Stewardship Award"],
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80",
    icon: Award,
  },
];

export default function ProfessionalSection() {
  const [selectedId, setSelectedId] = useState<string>(professionals[0].id);
  const activeProf = professionals.find((p) => p.id === selectedId) || professionals[0];

  return (
    <section
      id="professional"
      className="relative w-full py-20 lg:py-28 px-4 sm:px-8 lg:px-12 xl:px-16 bg-[#fafaf9] text-zinc-900 border-t border-zinc-200/80 overflow-hidden scroll-mt-20"
    >
      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-25">
        <div className="w-full h-full bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      {/* Subtle Warm Brand Ambient Glows */}
      <div className="absolute -top-32 right-1/4 w-[500px] h-[500px] rounded-full bg-[#b8612b]/5 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 left-1/4 w-[500px] h-[500px] rounded-full bg-[#002E11]/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto ">
        {/* ================= SECTION HEADER (CENTERED & MATCHING ESTABLISHED TYPOGRAPHY) ================= */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#b8612b]/10 border border-[#b8612b]/25 text-[#b8612b] text-xs font-bold tracking-widest uppercase shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#b8612b]" />
            ACCREDITED ADVISORY COUNCIL
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-[family-name:var(--font-jakarta)] font-semibold text-[#002E11] tracking-[-0.03em] leading-tight">
            Meet Our Industry Professionals
          </h2>

          <p className="text-sm sm:text-base text-zinc-600 font-light leading-relaxed max-w-2xl mx-auto">
            Direct access to Gujarat&apos;s leading RERA advocates, chartered revenue valuers, urban master planners, and industrial acquisition specialists.
          </p>
        </div>

        {/* ================= UNIQUE NON-CARD EDITORIAL SPLIT SHOWCASE ================= */}
        {/* Interactive Master Directory on Left + Immersive Dossier Console on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* ================= LEFT: EDITORIAL DIRECTORY LIST (NO CARDS) ================= */}
          <div className="lg:col-span-5 flex flex-col divide-y divide-zinc-200 border-y border-zinc-200">

            {professionals.map((prof, index) => {
              const isSelected = prof.id === selectedId;
              const Icon = prof.icon;

              return (
                <button
                  key={prof.id}
                  type="button"
                  onClick={() => setSelectedId(prof.id)}
                  className={`group relative text-left py-5 px-3 transition-all duration-300 cursor-pointer flex items-center justify-between gap-4 ${
                    isSelected
                      ? "bg-white shadow-sm pl-4 pr-3 border-l-4 border-l-[#b8612b] -ml-[1px]"
                      : "hover:bg-zinc-100/60"
                  }`}
                >
                  <div className="flex items-start gap-4 min-w-0">
                    {/* Index Number */}
                    <span
                      className={`text-xs font-mono font-bold pt-1 transition-colors ${
                        isSelected ? "text-[#b8612b]" : "text-zinc-400 group-hover:text-zinc-600"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* Professional Info */}
                    <div className="min-w-0">
                      

                      <h3
                        className={`text-base font-bold mt-1 transition-colors truncate ${
                          isSelected ? "text-zinc-900" : "text-zinc-700 group-hover:text-zinc-900"
                        }`}
                      >
                        {prof.name}
                      </h3>

                      <p className="text-sm text-zinc-500 truncate mt-0.5 font-light">
                        {prof.role} • {prof.experience} Exp.
                      </p>
                    </div>
                  </div>

                  {/* Indicator Arrow */}
                  <div
                    className={`flex items-center justify-center w-8 h-8 rounded-full transition-all shrink-0 ${
                      isSelected
                        ? "bg-[#002E11] text-white shadow-sm translate-x-0"
                        : "text-zinc-400 group-hover:text-zinc-700 group-hover:translate-x-1"
                    }`}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </button>
              );
            })}
          </div>

          {/* ================= RIGHT: IMMERSIVE DOSSIER CONSOLE ================= */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-zinc-200/90 shadow-xl shadow-zinc-900/[0.04] p-6 sm:p-8 lg:p-10 relative overflow-hidden transition-all duration-300">
            {/* Top Accent Strip in Sync with Brand Colors */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#002E11] via-[#b8612b] to-[#002E11]" />

            {/* Profile Header Row with Photo & Core Credentials */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pb-6 border-b border-zinc-100">
              {/* Professional Architectural Portrait */}
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden bg-zinc-100 shrink-0 ring-4 ring-zinc-50 shadow-md">
                <img
                  src={activeProf.image}
                  alt={activeProf.name}
                  className="w-full h-full object-cover"
                />
                
              </div>

              {/* Title & Statutory Accreditations */}
              <div className="flex-1 min-w-0 space-y-1.5">

                <div className="flex items-center gap-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight">
                    {activeProf.name}
                  </h3>
                  <BadgeCheck className="w-5 h-5 text-sky-500 shrink-0" />
                </div>

                <p className="text-xs text-zinc-500 font-mono">
                  {activeProf.license}
                </p>
              </div>
            </div>

            {/* In-depth Professional Dossier Bio */}
            <div className="py-6 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                Executive Background & Advisory Mandate
              </h4>
              <p className="text-sm sm:text-[14.5px] text-zinc-600 font-light leading-relaxed">
                {activeProf.bio}
              </p>
            </div>

            {/* Core Competencies & Clearances Grid */}
            <div className="py-5 border-t border-zinc-100">
              <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-3">
                Key Competencies & Clearances
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {activeProf.specialties.map((spec, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-xs font-medium text-zinc-700 bg-zinc-50 hover:bg-zinc-100/80 rounded-lg p-2.5 transition-colors"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#b8612b] shrink-0" />
                    <span className="truncate">{spec}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

