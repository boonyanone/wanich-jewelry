import React from "react";
import { Sparkles } from "lucide-react";

interface SilverWeightTableProps {
  sellPricePerKg: number;
}

export default function SilverWeightTable({ sellPricePerKg }: SilverWeightTableProps) {
  const weights = [
    { name: "แท่งเงิน 15 กรัม (1 บาท)", weight: 15.2 },
    { name: "แท่งเงิน 50 กรัม", weight: 50 },
    { name: "แท่งเงิน 150 กรัม (10 บาท)", weight: 152 },
    { name: "แท่งเงิน 500 กรัม (ครึ่งกิโล)", weight: 500 },
    { name: "แท่งเงิน 1,000 กรัม (1 กิโลกรัม)", weight: 1000 },
  ];

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 border border-zinc-200/80 shadow-xs space-y-4">
      <h2 className="font-serif-luxury text-xl font-bold text-[#18181B] flex items-center gap-2">
        <Sparkles className="w-4 h-4 text-[#C5A059]" />
        <span>ตารางราคาน้ำหนักแท่งเงินมาตรฐาน</span>
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full text-xs text-left">
          <thead>
            <tr className="border-b border-zinc-200 text-zinc-500 uppercase tracking-wider">
              <th className="py-3 px-2">ขนาดแท่งเงิน</th>
              <th className="py-3 px-2 text-right">น้ำหนัก (กรัม)</th>
              <th className="py-3 px-2 text-right text-[#8C7034]">ราคาขายออกโดยประมาณ</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-100">
            {weights.map((w, idx) => {
              const estPrice = (sellPricePerKg / 1000) * w.weight;
              return (
                <tr key={idx} className="hover:bg-[#FAF8F5]">
                  <td className="py-3.5 px-2 font-medium text-[#18181B]">{w.name}</td>
                  <td className="py-3.5 px-2 text-right font-mono text-zinc-600">{w.weight} g</td>
                  <td className="py-3.5 px-2 text-right font-serif-luxury font-bold text-[#B8934A] text-sm">
                    ฿{estPrice.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
