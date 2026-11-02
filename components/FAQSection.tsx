"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    id: 1,
    question: "How does invest2growth ensure 100% legal title clearance?",
    answer:
      "Every asset listed on invest2growth undergoes an exhaustive 30-year revenue title search conducted by accredited Gujarat Bar Council advocates. We scrutinize 7/12 & 8-A revenue records, NA zoning permissions, and issue public notices in leading dailies to certify zero litigation or encumbrances.",
  },
  {
    id: 2,
    question: "Can NRIs invest in agricultural land or commercial assets in Gujarat?",
    answer:
      "Under RBI & FEMA guidelines, NRIs and OCIs can freely purchase commercial and residential properties across India. For agricultural land, where state farmer-status laws apply, our legal advisory desk assists with compliant NA plots, farmhouse estates, and institutional structures.",
  },
  {
    id: 3,
    question: "What is the typical timeline for RERA possession and handover?",
    answer:
      "All residential and commercial developments on our portal are verified with valid Gujarat RERA registrations. Possession schedules typically range from Ready-to-Move to 18-36 months for under-construction towers, fully protected by RERA escrow accounts.",
  },
  {
    id: 4,
    question: "Do you assist with GIDC industrial land transfers & GPCB NOCs?",
    answer:
      "Yes. Our Industrial Advisory team directly liaisons with GIDC for plot allotments, transfer deeds, high-tension power line sanctioning, and coordinates Consent to Establish (CTE) and Consent to Operate (CTO) with the Gujarat Pollution Control Board.",
  },
  {
    id: 5,
    question: "Are there any hidden brokerage fees or intermediary markups?",
    answer:
      "Zero hidden fees. We operate on a 100% transparent direct-to-developer and direct-landowner model. All pricing, legal verification fees, and statutory government stamp duty & registration charges are clearly itemized upfront.",
  },
  {
    id: 6,
    question: "How can I schedule an on-site property inspection or legal consult?",
    answer:
      "Simply click 'Get in touch' or 'Book Advisory' on any listing. Our client stewardship team coordinates personalized chauffeured site inspections or a direct virtual consultation with our advocates within 2 business hours.",
  },
];

export default function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleAccordion = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      className="relative w-full py-16 sm:py-20 lg:py-24 bg-white text-zinc-900 border-t border-gray-100 overflow-hidden scroll-mt-20"
    >
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ================= COMPACT SECTION HEADER ================= */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#b8612b]/10 border border-[#b8612b]/25 text-[#b8612b] text-xs font-bold tracking-widest uppercase shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#b8612b]" />
            FREQUENTLY ASKED QUESTIONS
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-[family-name:var(--font-jakarta)] font-semibold text-[#002E11] tracking-[-0.03em] leading-tight">
            Frequently Asked Questions
          </h2>

          <p className="text-sm sm:text-base text-zinc-600 font-light leading-relaxed max-w-2xl mx-auto">
            Essential answers about property acquisition, legal vetting, and investment security with invest2growth.
          </p>
        </div>

        {/* ================= COMPACT ACCORDION LIST (5-6 QUESTIONS) ================= */}
        <div className="space-y-3">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "bg-zinc-50/80 border-[#b8612b]/40 shadow-sm"
                    : "bg-white border-gray-200 hover:border-gray-300"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full py-4 sm:py-4.5 px-4 sm:px-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start gap-3 min-w-0">
                    <span
                      className={`text-xs font-mono font-bold pt-0.5 shrink-0 transition-colors ${
                        isOpen ? "text-[#b8612b]" : "text-zinc-400"
                      }`}
                    >
                      {String(faq.id).padStart(2, "0")}
                    </span>

                    <div className="min-w-0">
                      <h3
                        className={`text-sm sm:text-base font-bold transition-colors ${
                          isOpen ? "text-[#002E11]" : "text-zinc-800"
                        }`}
                      >
                        {faq.question}
                      </h3>
                    </div>
                  </div>

                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-200 ${
                      isOpen
                        ? "rotate-180 bg-[#002E11] text-white"
                        : "bg-gray-100 text-zinc-500 hover:text-zinc-900"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-6 pb-4 sm:pb-5 pt-1 border-t border-gray-100/80">
                    <p className="text-xs sm:text-[14px] text-zinc-600 font-light leading-relaxed pl-6">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

