import React from "react";
import GrandIntroBanner from "@/components/home/GrandIntroBanner";
import CategoryQuickStrip from "@/components/home/CategoryQuickStrip";
import SilverPriceTicker from "@/components/home/SilverPriceTicker";
import CuratedCollections from "@/components/home/CuratedCollections";
import EditorialLookbookBanner from "@/components/home/EditorialLookbookBanner";
import FeaturedMasterpieces from "@/components/home/FeaturedMasterpieces";
import BespokeStudioSection from "@/components/home/BespokeStudioSection";
import HeritageStorySection from "@/components/home/HeritageStorySection";
import TrustGuarantees from "@/components/home/TrustGuarantees";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0B0B0D]">
      {/* 1. Haute Joaillerie Grand Cinematic Intro Banner */}
      <GrandIntroBanner />

      {/* 2. Instant Category Quick Discovery Ribbon */}
      <CategoryQuickStrip />

      {/* 3. Real-time Silver Bullion & Scrap Ticker */}
      <div className="mt-14">
        <SilverPriceTicker />
      </div>

      {/* 4. Curated Signature Collections */}
      <CuratedCollections />

      {/* 5. Grand Lookbook Editorial Banner */}
      <EditorialLookbookBanner />

      {/* 6. Featured Masterpieces with Filter & Quick View */}
      <FeaturedMasterpieces />

      {/* 7. Bespoke 3D CAD Custom Jewelry Studio */}
      <BespokeStudioSection />

      {/* 8. Authentic Heritage Story (Doi Silver to Wanich Jewelry) */}
      <HeritageStorySection />

      {/* 9. Trust Seals & Guarantees */}
      <TrustGuarantees />
    </div>
  );
}
