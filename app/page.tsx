import Navbar from "@/components/Navbar";
import HeroHeader from "@/components/HeroHeader";
import PropertyCategoriesSection from "@/components/PropertyCategoriesSection";
import FeaturedProjectsSection from "@/components/FeaturedProjectsSection";
import ResidentialPropertiesSection from "@/components/ResidentialPropertiesSection";
import IndustrialPropertiesSection from "@/components/IndustrialPropertiesSection";
import CommercialPropertiesSection from "@/components/CommercialPropertiesSection";
import LatestNewsSection from "@/components/LatestNewsSection";
import LandPropertiesSection from "@/components/LandPropertiesSection";
import ServiceProviderSection from "@/components/ServiceProviderSection";
import ProfessionalSection from "@/components/ProfessionalSection";
import AboutUsSection from "@/components/AboutUsSection";
import FAQSection from "@/components/FAQSection";

export default function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-white text-zinc-900 font-sans overflow-x-clip scroll-smooth">
      {/* Full-width Responsive Sticky Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1 w-full relative">
        {/* 1. Hero Header Slider with 3 custom invest2growth banners */}
        <HeroHeader />

        {/* 2. Property Categories Section with 3D Dioramas on White Background */}
        <PropertyCategoriesSection />

        {/* 3. Featured Projects Carousel with Manual Left & Right Navigation */}
        <FeaturedProjectsSection />

        {/* 4. Residential Properties Section with Horizontal Slider */}
        <ResidentialPropertiesSection />

        {/* 5. Professional Section with Unique Non-Card Editorial Split Showcase */}
        <ProfessionalSection />

        {/* 6. Industrial Properties Section with Matching Editorial Slider UI */}
        <IndustrialPropertiesSection />

        {/* 7. Service Provider Section with Unique Non-Card Editorial Split Showcase */}
        <ServiceProviderSection />

        {/* 8. Commercial Properties Section with Clean Photo & Zero Badges on Image */}
        <CommercialPropertiesSection/>

        {/* 9. Latest News Section */}
        <LatestNewsSection/>

        {/* 10. Land Properties Section */}
        <LandPropertiesSection/>

        {/* 11. About Us Section (Bento Grid Stats + Interactive Pill Showcase) */}
        <AboutUsSection />

        {/* 12. FAQ Section (Compact 6 Essential Questions & Answers) */}
        <FAQSection />
        
      </main>
    </div>
  );
}
