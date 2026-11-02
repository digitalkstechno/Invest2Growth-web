"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";

interface SlideData {
  id: number;
  image: string;
  title: string;
  alt: string;
  href: string;
}

const slides: SlideData[] = [
  {
    id: 1,
    image: "/hero/hero-slide-1.jpg",
    title: "Invest Smart. Grow Bigger - Premium Properties & Capital Growth",
    alt: "invest2growth luxury residential villa with capital growth chart and coins",
    href: "#property-categories",
  },
  {
    id: 2,
    image: "/hero/hero-slide-2.jpg",
    title: "Invest Smart. Grow Bigger - Properties, Lands & Services",
    alt: "invest2growth verified properties, valuable lands and trusted legal services",
    href: "#property-categories",
  },
  {
    id: 3,
    image: "/hero/hero-slide-3.jpg",
    title: "Invest Smart. Grow Bigger - Your Trusted Real Estate Partner",
    alt: "invest2growth elevated land holding, modern architecture and strategic advisory",
    href: "#property-categories",
  },
];

export default function HeroHeader() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Next Slide handler
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  // Previous Slide handler
  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  // Automatic slide every 3.8 seconds
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      nextSlide();
    }, 3800);

    return () => clearInterval(timer);
  }, [nextSlide, isPaused]);

  // Handle keyboard arrow keys
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Touch Swipe Handlers for mobile & tablet
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) nextSlide();
    if (isRightSwipe) prevSlide();

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section
      aria-label="Featured Real Estate Opportunities Slider"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="relative w-full overflow-hidden bg-white border-b border-gray-100"
    >
      {/* ================= FULL HEIGHT & WIDTH EDGE-TO-EDGE SLIDER TRACK ================= */}
      <div className="relative w-full h-[380px] sm:h-[480px] md:h-[580px] lg:h-[calc(100vh-108px)] xl:h-[calc(100vh-108px)] 2xl:h-[calc(100vh-108px)] min-h-[520px] lg:min-h-[640px] bg-white overflow-hidden flex items-center justify-center">
        <div
          className="flex h-full w-full transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className="min-w-full w-full h-full flex-shrink-0 relative flex items-center justify-center bg-white overflow-hidden"
            >
              <Link
                href={slide.href}
                className="relative flex items-center justify-center w-full h-full cursor-pointer focus:outline-none"
                tabIndex={currentSlide === index ? 0 : -1}
                aria-label={slide.title}
              >
                {/* 100% full width and full height fit - zero side gaps, zero cutoffs */}
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className="w-full h-full object-cover object-center pointer-events-none"
                  loading={index === 0 ? "eager" : "lazy"}
                />
              </Link>
            </div>
          ))}
        </div>

        {/* ================= MINIMALIST BOTTOM PROGRESS DOTS ================= */}
        <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/25 backdrop-blur-md border border-white/20 shadow-md">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrentSlide(index)}
              className={`transition-all duration-300 rounded-full focus:outline-none ${
                currentSlide === index
                  ? "w-7 h-2 bg-[#002E11] ring-1 ring-white/60 shadow-xs"
                  : "w-2 h-2 bg-white/70 hover:bg-white"
              }`}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={currentSlide === index ? "true" : "false"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}