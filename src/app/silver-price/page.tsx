import React from "react";
import { TrendingUp } from "lucide-react";
import brandData from "@/data/brand.json";
import SilverPriceCards from "@/components/silver/SilverPriceCards";
import SilverWeightTable from "@/components/silver/SilverWeightTable";
import SilverCalculator from "@/components/silver/SilverCalculator";

export default function SilverPricePage() {
  const silver = brandData.silverPriceDefault;

  return (
    <div className="pt-28 pb-24 bg-[#0B0B0D] min-h-screen text-white">
      <div className="bg-[#0E0E12] border-b border-white/10 py-12 mb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-[#C5A059]/40">
            <TrendingUp className="w-3.5 h-3.5 text-[#E5C378]" />
            <span className="text-xs font-semibold text-[#E5C378] uppercase tracking-wider">
              WANICH LIVE BULLION & SILVER TRADING BOARD
            </span>
          </div>
          <h1 className="font-serif-luxury text-3xl sm:text-5xl font-light text-white">
            กระดานราคาทองคำ & เม็ดเงินแท้
          </h1>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-2xl mx-auto">
            อัปเดตราคาซื้อ-ขายแท่งเงินบริสุทธิ์ 99.9% และเม็ดเงินมาตรฐาน 92.5% สำหรับการลงทุนและขึ้นรูปเครื่องประดับ
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <SilverPriceCards silver={silver} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7">
            <SilverWeightTable sellPricePerKg={silver.sellPricePerKg} />
          </div>
          <div className="lg:col-span-5">
            <SilverCalculator silver={silver} />
          </div>
        </div>
      </div>
    </div>
  );
}
