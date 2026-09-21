"use client";

import React, { useState } from "react";
import { Product } from "@/types/jewelry";
import { cleanProductDescription } from "@/lib/formatters";
import { ShieldCheck, Sparkles, Hammer, Info } from "lucide-react";

interface ProductSpecsTabsProps {
  product: Product;
}

export default function ProductSpecsTabs({ product }: ProductSpecsTabsProps) {
  const [activeTab, setActiveTab] = useState<"desc" | "craft" | "care">("desc");

  return (
    <div className="bg-[#111116] border border-white/10 rounded-2xl overflow-hidden mt-10">
      {/* Tabs Header */}
      <div className="flex border-b border-white/10 bg-[#0E0E12] overflow-x-auto [scrollbar-width:none]">
        <button
          type="button"
          onClick={() => setActiveTab("desc")}
          className={`py-3.5 px-5 text-xs sm:text-sm font-medium tracking-wide transition-colors whitespace-nowrap border-b-2 cursor-pointer ${
            activeTab === "desc"
              ? "border-[#C5A059] text-[#F3E5AB] bg-[#14141B]"
              : "border-transparent text-zinc-400 hover:text-white"
          }`}
        >
          รายละเอียดชิ้นงาน
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("craft")}
          className={`py-3.5 px-5 text-xs sm:text-sm font-medium tracking-wide transition-colors whitespace-nowrap border-b-2 cursor-pointer ${
            activeTab === "craft"
              ? "border-[#C5A059] text-[#F3E5AB] bg-[#14141B]"
              : "border-transparent text-zinc-400 hover:text-white"
          }`}
        >
          มาตรฐานโลหะ & งานช่าง
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("care")}
          className={`py-3.5 px-5 text-xs sm:text-sm font-medium tracking-wide transition-colors whitespace-nowrap border-b-2 cursor-pointer ${
            activeTab === "care"
              ? "border-[#C5A059] text-[#F3E5AB] bg-[#14141B]"
              : "border-transparent text-zinc-400 hover:text-white"
          }`}
        >
          การรับประกัน & การดูแลรักษา
        </button>
      </div>

      {/* Tab Contents */}
      <div className="p-6 text-xs sm:text-sm font-light text-zinc-300 leading-relaxed">
        {activeTab === "desc" && (
          <div className="space-y-4">
            <p className="whitespace-pre-line text-zinc-300">
              {cleanProductDescription(product.description) || "เครื่องประดับเงินแท้ฝีมือช่างเมืองน่าน"}
            </p>
          </div>
        )}

        {activeTab === "craft" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-[#16161E] border border-white/5 space-y-1.5">
              <div className="flex items-center gap-2 text-[#E5C378] font-medium text-xs">
                <ShieldCheck className="w-4 h-4" />
                <span>มาตรฐานโลหะเงินแท้</span>
              </div>
              <p className="text-xs text-zinc-400">
                {product.purity || "เงินแท้ 92.5% - 99.9% มาตรฐานสากล Sterling Silver ไม่มีสารนิกเกิลที่ก่อให้เกิดการแพ้"}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#16161E] border border-white/5 space-y-1.5">
              <div className="flex items-center gap-2 text-[#E5C378] font-medium text-xs">
                <Hammer className="w-4 h-4" />
                <span>กรรมวิธีหัตถศิลป์</span>
              </div>
              <p className="text-xs text-zinc-400">
                {product.craftsmanship || "งานตอกลายดุนลาย สานมือโบราณด้วยช่างเงินน่านประสบการณ์กว่า 20 ปี"}
              </p>
            </div>
          </div>
        )}

        {activeTab === "care" && (
          <div className="space-y-3">
            <div className="flex items-start gap-2.5">
              <Info className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
              <p className="text-xs text-zinc-400">
                เครื่องเงินแท้ทำปฏิกิริยากับออกซิเจนและความชื้นตามธรรมชาติ เมื่อไม่ใช้งานควรเก็บในถุงซิปล็อคป้องกันอากาศเข้า
              </p>
            </div>
            <div className="flex items-start gap-2.5">
              <Sparkles className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
              <p className="text-xs text-zinc-400">
                สามารถทำความสะอาดด้วยผ้าเช็ดเงิน หรือน้ำยาล้างเครื่องเงินเฉพาะทาง เพื่อคืนความขาวสว่างเงางาม
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
