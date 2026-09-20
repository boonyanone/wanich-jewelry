import React from "react";
import { TrendingUp } from "lucide-react";
import brandData from "@/data/brand.json";
import SilverPriceCards from "@/components/silver/SilverPriceCards";
import SilverWeightTable from "@/components/silver/SilverWeightTable";
import SilverCalculator from "@/components/silver/SilverCalculator";

export default function SilverPricePage() {
  const silver = brandData.silverPriceDefault;

  return (
    <div className="pt-28 pb-20 bg-[#FAF8F5] min-h-screen">
      <div className="bg-white border-b border-zinc-200/80 py-12 mb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF8F5] border border-[#C5A059]/40">
            <TrendingUp className="w-3.5 h-3.5 text-[#C5A059]" />
            <span className="text-xs font-semibold text-[#8C7034] uppercase tracking-wider">
              Wanich Live Bullion & Silver Trading Board
            </span>
          </div>
          <h1 className="font-serif-luxury text-3xl sm:text-5xl font-light text-[#18181B]">
            กระดานราคาทองคำ & เม็ดเงินแท้
          </h1>
          <p className="text-xs sm:text-sm text-[#71717A] max-w-2xl mx-auto">
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
