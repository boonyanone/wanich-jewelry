import React from "react";
import { SilverPriceData } from "@/types/jewelry";

interface SilverPriceCardsProps {
  silver: SilverPriceData;
}

export default function SilverPriceCards({ silver }: SilverPriceCardsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-[#121217] rounded-3xl p-6 sm:p-8 border border-white/10 shadow-xl space-y-4">
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">
            ราคารับซื้อแท่งเงิน (Buy Rate)
          </span>
          <span className="text-xs text-zinc-400 font-mono">บริสุทธิ์ 99.9%</span>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="font-serif-luxury text-4xl sm:text-5xl font-bold text-white">
            ฿{silver.buyPricePerKg.toLocaleString()}
          </span>
          <span className="text-xs text-zinc-400">/ 1 กิโลกรัม</span>
        </div>
        <p className="text-xs text-zinc-400 leading-relaxed font-light">
          ราคารับซื้อแท่งเงินและเม็ดเงินมาตรฐาน ณ โชว์รูมและโรงงานวานิชจิวเวลรี่
        </p>
      </div>

      <div className="bg-[#121217] rounded-3xl p-6 sm:p-8 border border-[#C5A059]/40 shadow-2xl space-y-4">
        <div className="flex items-center justify-between border-b border-[#C5A059]/30 pb-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#E5C378]">
            ราคาขายออกแท่งเงิน (Sell Rate)
          </span>
          <span className="text-xs text-[#F3E5AB] font-medium font-mono">บริสุทธิ์ 99.9%</span>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="font-serif-luxury text-4xl sm:text-5xl font-bold text-[#F3E5AB]">
            ฿{silver.sellPricePerKg.toLocaleString()}
          </span>
          <span className="text-xs text-zinc-400">/ 1 กิโลกรัม</span>
        </div>
        <p className="text-xs text-zinc-400 leading-relaxed font-light">
          แท่งเงินบริสุทธิ์ปั๊มตรา Wanich Silver พร้อมใบรับประกันเปอร์เซ็นต์ความบริสุทธิ์
        </p>
      </div>
    </div>
  );
}
