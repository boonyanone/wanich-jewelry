import React from "react";
import HeroBanner from "@/components/home/HeroBanner";
import SilverPriceTicker from "@/components/home/SilverPriceTicker";
import CuratedCollections from "@/components/home/CuratedCollections";
import EditorialLookbookBanner from "@/components/home/EditorialLookbookBanner";
import FeaturedMasterpieces from "@/components/home/FeaturedMasterpieces";
import BespokeStudioSection from "@/components/home/BespokeStudioSection";
import HeritageStorySection from "@/components/home/HeritageStorySection";
import TrustGuarantees from "@/components/home/TrustGuarantees";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Haute Joaillerie Hero Banner */}
      <HeroBanner />

      {/* 2. Real-time Silver & Bullion Price Bar */}
      <SilverPriceTicker />

      {/* 3. Curated Signature Collections */}
      <CuratedCollections />

      {/* 4. Grand Lookbook Editorial Banner */}
      <EditorialLookbookBanner />

      {/* 5. Featured Masterpieces with Filter & Quick View */}
      <FeaturedMasterpieces />

      {/* 6. Bespoke 3D CAD Custom Jewelry Studio */}
      <BespokeStudioSection />

      {/* 7. Authentic Heritage Story (Doi Silver to Wanich Jewelry) */}
      <HeritageStorySection />

      {/* 8. Trust Seals & Guarantees */}
      <TrustGuarantees />
    </div>
  );
}
