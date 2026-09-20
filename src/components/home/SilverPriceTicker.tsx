"use client";

import React from "react";
import Link from "next/link";
import { TrendingUp, ArrowRight, ShieldCheck, Clock } from "lucide-react";
import brandData from "@/data/brand.json";

export default function SilverPriceTicker() {
  const silver = brandData.silverPriceDefault;

  return (
    <div className="bg-white border-y border-[#C5A059]/20 shadow-xs py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Header Title with Live Pulse */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#FAF8F5] border border-[#C5A059]/40 flex items-center justify-center text-[#C5A059]">
              <TrendingUp className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-[#18181B] tracking-wider uppercase">
                  WANICH LIVE SILVER BOARD
                </span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-[10px] font-medium text-emerald-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  เรียลไทม์
                </span>
              </div>
              <p className="text-[11px] text-[#71717A]">
                ราคากระดานซื้อ-ขายแท่งเงินมาตรฐาน 99.9% / 92.5%
              </p>
            </div>
          </div>

          {/* Price Metrics Bar */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-center sm:text-left">
            {/* Buy Rate */}
            <div className="px-4 py-1.5 rounded-lg bg-[#FAF8F5] border border-zinc-200">
              <span className="text-[10px] uppercase text-[#71717A] block font-medium">
                ราคารับซื้อ (ต่อ 1 กิโลกรัม)
              </span>
              <span className="font-serif-luxury text-lg font-bold text-[#18181B]">
                ฿{silver.buyPricePerKg.toLocaleString()}
              </span>
            </div>

            {/* Sell Rate */}
            <div className="px-4 py-1.5 rounded-lg bg-[#FAF8F5] border border-[#C5A059]/30">
              <span className="text-[10px] uppercase text-[#8C7034] block font-medium">
                ราคาขายออก (ต่อ 1 กิโลกรัม)
              </span>
              <span className="font-serif-luxury text-lg font-bold text-[#B8934A]">
                ฿{silver.sellPricePerKg.toLocaleString()}
              </span>
            </div>
          </div>

          {/* Call to Action */}
          <div className="flex items-center gap-3">
            <Link
              href="/silver-price"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium text-[#18181B] bg-[#FAF8F5] border border-[#C5A059]/40 hover:bg-[#F5EED9] transition-all"
            >
              <span>ดูกระดานราคาทั้งหมด</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#C5A059]" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
