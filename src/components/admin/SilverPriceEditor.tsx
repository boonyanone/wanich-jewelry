import React from "react";
import { Save } from "lucide-react";
import { SilverPriceData } from "@/types/jewelry";

interface SilverPriceEditorProps {
  silverPrice: SilverPriceData;
  isSaving: boolean;
  onPriceChange: (updated: SilverPriceData) => void;
  onSave: (e: React.FormEvent) => void;
}

export default function SilverPriceEditor({
  silverPrice,
  isSaving,
  onPriceChange,
  onSave,
}: SilverPriceEditorProps) {
  return (
    <div className="max-w-2xl mx-auto bg-white rounded-2xl p-6 sm:p-8 border border-zinc-200/80 shadow-xs space-y-6">
      <div>
        <span className="text-[10px] uppercase font-bold text-[#8C7034] tracking-wider block">
          Live Pricing Controller
        </span>
        <h2 className="font-serif-luxury text-2xl font-bold text-[#18181B] mt-1">
          ปรับราคากระดานซื้อ-ขายแท่งเงินสด
        </h2>
        <p className="text-xs text-zinc-500 mt-1">
          เมื่อกดบันทึก ราคาบนหน้าเว็บและในเครื่องคำนวณจะอัปเดตแบบเรียลไทม์ทันที
        </p>
      </div>

      <form onSubmit={onSave} className="space-y-4 text-xs">
        <div>
          <label className="block font-semibold text-[#18181B] mb-1">
            ราคารับซื้อแท่งเงินบริสุทธิ์ (บาท / กิโลกรัม)
          </label>
          <input
            type="number"
            value={silverPrice.buyPricePerKg}
            onChange={(e) =>
              onPriceChange({
                ...silverPrice,
                buyPricePerKg: parseFloat(e.target.value) || 0,
              })
            }
            className="w-full p-2.5 rounded-xl border border-zinc-200 bg-[#FAF8F5] font-mono text-sm"
          />
        </div>

        <div>
          <label className="block font-semibold text-[#18181B] mb-1">
            ราคาขายออกแท่งเงินบริสุทธิ์ (บาท / กิโลกรัม)
          </label>
          <input
            type="number"
            value={silverPrice.sellPricePerKg}
            onChange={(e) =>
              onPriceChange({
                ...silverPrice,
                sellPricePerKg: parseFloat(e.target.value) || 0,
              })
            }
            className="w-full p-2.5 rounded-xl border border-zinc-200 bg-[#FAF8F5] font-mono text-sm"
          />
        </div>

        <div className="p-4 rounded-xl bg-[#FAF8F5] border border-zinc-200 space-y-1 text-zinc-600">
          <p><strong>เปอร์เซ็นต์แท่งเงิน:</strong> {silverPrice.pureSilverPct}%</p>
          <p><strong>เปอร์เซ็นต์เครื่องเงินมาตรฐาน:</strong> {silverPrice.standardSilverPct}%</p>
          <p className="text-[11px] text-[#8C7034]">อัปเดตล่าสุด: {silverPrice.updatedAt}</p>
        </div>

        <button
          type="submit"
          disabled={isSaving}
          className="w-full py-3 rounded-xl text-xs font-semibold text-white bg-[#18181B] hover:bg-zinc-800 flex items-center justify-center gap-2 shadow transition-all"
        >
          <Save className="w-4 h-4 text-[#C5A059]" />
          <span>{isSaving ? "กำลังบันทึก..." : "บันทึกและเผยแพร่ราคาสดหน้าเว็บ"}</span>
        </button>
      </form>
    </div>
  );
}
