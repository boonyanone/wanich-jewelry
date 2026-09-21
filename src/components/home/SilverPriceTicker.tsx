"use client";

import React from "react";
import Link from "next/link";
import { TrendingUp, ArrowRight } from "lucide-react";
import brandData from "@/data/brand.json";

export default function SilverPriceTicker() {
  const silver = brandData.silverPriceDefault;

  return (
    <div className="bg-[#0D0D10] border-y border-[#C5A059]/25 py-5 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Header Title with Live Pulse */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#18181F] border border-[#C5A059]/40 flex items-center justify-center text-[#E5C378] shadow-inner">
              <TrendingUp className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-white tracking-wider uppercase">
                  WANICH REAL-TIME SILVER TICKER
                </span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-[10px] font-medium text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  กระดานสด
                </span>
              </div>
              <p className="text-[11px] text-zinc-400">
                ราคากระดานซื้อ-ขายแท่งเงินบริสุทธิ์มาตรฐาน 99.9% / 92.5% สมาคมค้าเงิน
              </p>
            </div>
          </div>

          {/* Price Metrics Bar */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-center sm:text-left">
            {/* Buy Rate */}
            <div className="px-5 py-2 rounded-xl bg-[#14141A] border border-white/10">
              <span className="text-[10px] uppercase text-zinc-400 block font-medium">
                ราคารับซื้อ (ต่อ 1 กก.)
              </span>
              <span className="font-serif-luxury text-lg font-bold text-zinc-200">
                ฿{silver.buyPricePerKg.toLocaleString()}
              </span>
            </div>

            {/* Sell Rate */}
            <div className="px-5 py-2 rounded-xl bg-[#14141A] border border-[#C5A059]/40 shadow-sm">
              <span className="text-[10px] uppercase text-[#E5C378] block font-medium">
                ราคาขายออก (ต่อ 1 กก.)
              </span>
              <span className="font-serif-luxury text-lg font-bold text-[#F3E5AB]">
                ฿{silver.sellPricePerKg.toLocaleString()}
              </span>
            </div>
          </div>

          {/* Call to Action */}
          <div className="flex items-center gap-3">
            <Link
              href="/silver-price"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-medium text-zinc-200 bg-white/5 border border-[#C5A059]/40 hover:bg-[#C5A059]/20 hover:text-white transition-all"
            >
              <span>ดูกระดานราคาทั้งหมด</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#E5C378]" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
