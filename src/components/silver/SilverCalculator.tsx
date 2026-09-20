"use client";

import React, { useState } from "react";
import { Calculator, MessageCircle } from "lucide-react";
import { SilverPriceData } from "@/types/jewelry";
import brandData from "@/data/brand.json";

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
    <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#C5A059]/40 shadow-md space-y-4">
      <h2 className="font-serif-luxury text-xl font-bold text-[#18181B] flex items-center gap-2">
        <Calculator className="w-4 h-4 text-[#C5A059]" />
        <span>คำนวณราคาเงินตามน้ำหนัก</span>
      </h2>

      <div className="space-y-4 text-xs">
        <div className="grid grid-cols-2 gap-2 p-1 rounded-xl bg-[#FAF8F5] border border-zinc-200">
          <button
            onClick={() => setCalcType("sell")}
            className={`py-2 rounded-lg font-medium transition-all ${
              calcType === "sell" ? "bg-[#18181B] text-white" : "text-zinc-600"
            }`}
          >
            ราคาขายออก
          </button>
          <button
            onClick={() => setCalcType("buy")}
            className={`py-2 rounded-lg font-medium transition-all ${
              calcType === "buy" ? "bg-[#18181B] text-white" : "text-zinc-600"
            }`}
          >
            ราคารับซื้อ
          </button>
        </div>

        <div>
          <label className="block font-semibold text-[#18181B] mb-1">
            ระบุน้ำหนัก (กรัม)
          </label>
          <input
            type="number"
            value={calcWeightGrams}
            onChange={(e) => setCalcWeightGrams(Math.max(1, parseFloat(e.target.value) || 0))}
            className="w-full p-2.5 rounded-xl border border-zinc-200 bg-[#FAF8F5] font-mono text-sm"
          />
        </div>

        <div className="p-4 rounded-xl bg-[#FAF8F5] border border-zinc-200 space-y-2">
          <div className="flex justify-between text-zinc-600">
            <span>ราคาเนื้อเงิน ({calcWeightGrams} กรัม):</span>
            <span className="font-mono">฿{rawSubtotal.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
          </div>
          <div className="flex justify-between text-zinc-600">
            <span>ภาษีมูลค่าเพิ่ม VAT (7%):</span>
            <span className="font-mono">฿{vatAmount.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
          </div>
          <div className="pt-2 border-t border-zinc-200 flex justify-between items-baseline">
            <span className="font-bold text-[#18181B]">ยอดรวมสุทธิ:</span>
            <span className="font-serif-luxury text-2xl font-bold text-[#B8934A]">
              ฿{totalAmount.toLocaleString(undefined, { maximumFractionDigits: 0 })}
            </span>
          </div>
        </div>

        <a
          href={`${brandData.lineUrl}?text=${encodeURIComponent(
            `สวัสดีครับ/ค่ะ ต้องการสั่งซื้อ/สอบถามแท่งเงิน Wanich Silver น้ำหนัก ${calcWeightGrams} กรัม (ยอดคำนวณประมาณ: ฿${totalAmount.toLocaleString(
              undefined,
              { maximumFractionDigits: 0 }
            )})`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-3 rounded-xl text-xs font-semibold text-white bg-[#06C755] hover:bg-[#05b34c] flex items-center justify-center gap-2 transition-all shadow-xs"
        >
          <MessageCircle className="w-4 h-4" />
          <span>สั่งซื้อแท่งเงินผ่าน LINE OA</span>
        </a>
      </div>
    </div>
  );
}
