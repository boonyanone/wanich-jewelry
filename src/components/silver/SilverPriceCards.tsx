import React from "react";
import { SilverPriceData } from "@/types/jewelry";

interface SilverPriceCardsProps {
  silver: SilverPriceData;
}

export default function SilverPriceCards({ silver }: SilverPriceCardsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-zinc-200/80 shadow-xs space-y-4">
        <div className="flex items-center justify-between border-b border-zinc-100 pb-3">
          <span className="text-xs font-bold uppercase tracking-wider text-zinc-500">
            ราคารับซื้อแท่งเงิน (Buy Rate)
          </span>
          <span className="text-xs text-zinc-400">บริสุทธิ์ 99.9%</span>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="font-serif-luxury text-4xl sm:text-5xl font-bold text-[#18181B]">
            ฿{silver.buyPricePerKg.toLocaleString()}
          </span>
          <span className="text-xs text-zinc-500">/ 1 กิโลกรัม</span>
        </div>
        <p className="text-xs text-zinc-500 leading-relaxed">
          ราคารับซื้อแท่งเงินและเม็ดเงินมาตรฐาน ณ โชว์รูมและโรงงานวานิชจิวเวลรี่
        </p>
      </div>

      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#C5A059]/40 shadow-sm space-y-4">
        <div className="flex items-center justify-between border-b border-[#C5A059]/20 pb-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#8C7034]">
            ราคาขายออกแท่งเงิน (Sell Rate)
          </span>
          <span className="text-xs text-[#C5A059] font-medium">บริสุทธิ์ 99.9%</span>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="font-serif-luxury text-4xl sm:text-5xl font-bold text-[#B8934A]">
            ฿{silver.sellPricePerKg.toLocaleString()}
          </span>
          <span className="text-xs text-zinc-500">/ 1 กิโลกรัม</span>
        </div>
        <p className="text-xs text-zinc-500 leading-relaxed">
          แท่งเงินบริสุทธิ์ปั๊มตรา Wanich Silver พร้อมใบรับประกันเปอร์เซ็นต์ความบริสุทธิ์
        </p>
      </div>
    </div>
  );
}
