"use client";

import React, { useState } from "react";
import { Calculator } from "lucide-react";
import { SilverPriceData } from "@/types/jewelry";

interface SilverCalculatorProps {
  silver: SilverPriceData;
}

export default function SilverCalculator({ silver }: SilverCalculatorProps) {
  const [calcWeightGrams, setCalcWeightGrams] = useState<number>(100);
  const [calcType, setCalcType] = useState<"buy" | "sell">("sell");

  const pricePerGram =
    calcType === "sell" ? silver.sellPricePerKg / 1000 : silver.buyPricePerKg / 1000;
  const rawSubtotal = pricePerGram * calcWeightGrams;
  const vatAmount = rawSubtotal * 0.07;
  const totalAmount = rawSubtotal + vatAmount;

  return (
    <div className="bg-[#121217] rounded-3xl p-6 sm:p-8 border border-[#C5A059]/40 shadow-2xl space-y-4">
      <h2 className="font-serif-luxury text-xl font-medium text-white flex items-center gap-2">
        <Calculator className="w-4 h-4 text-[#E5C378]" />
        <span>คำนวณราคาเงินตามน้ำหนัก</span>
      </h2>

      <div className="space-y-4 text-xs">
        <div className="grid grid-cols-2 gap-2 p-1 rounded-xl bg-white/5 border border-white/10">
          <button
            onClick={() => setCalcType("sell")}
            className={`py-2 rounded-lg font-medium transition-all ${
              calcType === "sell"
                ? "bg-gradient-to-r from-[#F3E5AB] via-[#E5C378] to-[#C5A059] text-[#0B0B0D] font-bold"
                : "text-zinc-400"
            }`}
          >
            ราคาขายออก
          </button>
          <button
            onClick={() => setCalcType("buy")}
            className={`py-2 rounded-lg font-medium transition-all ${
              calcType === "buy"
                ? "bg-gradient-to-r from-[#F3E5AB] via-[#E5C378] to-[#C5A059] text-[#0B0B0D] font-bold"
                : "text-zinc-400"
            }`}
          >
            ราคารับซื้อ
          </button>
        </div>

        <div>
          <label className="block font-medium text-zinc-300 mb-1">
            ระบุน้ำหนัก (กรัม)
          </label>
          <input
            type="number"
            value={calcWeightGrams}
            onChange={(e) => setCalcWeightGrams(Math.max(1, parseFloat(e.target.value) || 0))}
            className="w-full p-3 rounded-xl border border-white/10 bg-[#181820] text-white font-mono text-sm focus:outline-none focus:border-[#C5A059]"
          />
        </div>

        <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
          <div className="flex justify-between text-zinc-400">
            <span>ราคาเนื้อเงิน ({calcWeightGrams} กรัม):</span>
            <span className="font-mono text-zinc-200">฿{rawSubtotal.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
          </div>
          <div className="flex justify-between text-zinc-400">
            <span>ภาษีมูลค่าเพิ่ม VAT (7%):</span>
            <span className="font-mono text-zinc-200">฿{vatAmount.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
          </div>
          <div className="pt-2 border-t border-white/10 flex justify-between items-baseline">
            <span className="font-semibold text-zinc-200">ยอดรวมสุทธิ:</span>
            <span className="font-serif-luxury text-2xl font-bold text-[#F3E5AB]">
              ฿{totalAmount.toLocaleString(undefined, { maximumFractionDigits: 0 })}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
