"use client";

import React, { useState } from "react";
import { MessageCircle } from "lucide-react";
import brandData from "@/data/brand.json";

export default function BespokeForm() {
  const [jewelryType, setJewelryType] = useState("แหวนสั่งทำพิเศษ (Custom Ring)");
  const [metalType, setMetalType] = useState("เงินแท้ 925 (Sterling Silver 925)");
  const [gemstoneType, setGemstoneType] = useState("ทับทิมแท้ / พลอยมงคล (Natural Ruby/Gemstone)");
  const [budget, setBudget] = useState("5,000 - 15,000 บาท");
  const [note, setNote] = useState("");

  const handleSendLine = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `💎 ขอคำปรึกษาสั่งทำเครื่องประดับพิเศษ (Bespoke Inquiry)\n- ประเภท: ${jewelryType}\n- เนื้อโลหะ: ${metalType}\n- อัญมณี: ${gemstoneType}\n- งบประมาณ: ${budget}\n- รายละเอียดเพิ่มเติม: ${note || "ไม่มี"}`
    );
    window.open(`${brandData.lineUrl}?text=${text}`, "_blank");
  };

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#C5A059]/40 shadow-lg space-y-6">
      <div>
        <span className="text-[10px] uppercase font-semibold text-[#8C7034] tracking-wider block">
          Custom Order Inquiry
        </span>
        <h2 className="font-heading-th text-xl font-bold text-[#18181B] mt-1">
          ประเมินราคาและส่งความต้องการ
        </h2>
        <p className="text-xs text-[#71717A] mt-1">
          เลือกสเปกเบื้องต้น ระบบจะสร้างข้อความและนำคุณสู่ LINE OA ทันที
        </p>
      </div>

      <form onSubmit={handleSendLine} className="space-y-4 text-xs">
        <div>
          <label className="block font-semibold text-[#18181B] mb-1.5">
            ประเภทเครื่องประดับ
          </label>
          <select
            value={jewelryType}
            onChange={(e) => setJewelryType(e.target.value)}
            className="w-full p-2.5 rounded-xl border border-zinc-200 bg-[#FAF8F5]"
          >
            <option>แหวนสั่งทำพิเศษ (Custom Ring)</option>
            <option>กำไลข้อมือตอกลาย (Custom Bangle)</option>
            <option>สร้อยข้อมือโซ่เงิน (Custom Bracelet)</option>
            <option>กรอบพระเงินแท้ผ่าหวาย (Amulet Frame)</option>
            <option>เข็มขัดเงินแท้ชุดไทย (Custom Belt)</option>
            <option>จี้หรือเครื่องประดับอื่นๆ (Other Jewelry)</option>
          </select>
        </div>

        <div>
          <label className="block font-semibold text-[#18181B] mb-1.5">
            เนื้อโลหะที่ต้องการ
          </label>
          <select
            value={metalType}
            onChange={(e) => setMetalType(e.target.value)}
            className="w-full p-2.5 rounded-xl border border-zinc-200 bg-[#FAF8F5]"
          >
            <option>เงินแท้ 925 (Sterling Silver 925)</option>
            <option>เงินแท้ 95% หัตถกรรมน่าน (Nan Silver 95%)</option>
            <option>เงินแท้ชุบทองคำโบราณ (Gold Plating)</option>
            <option>ทองคำแท้ 18K / 90% (18K Gold)</option>
          </select>
        </div>

        <div>
          <label className="block font-semibold text-[#18181B] mb-1.5">
            อัญมณีที่ต้องการฝัง
          </label>
          <select
            value={gemstoneType}
            onChange={(e) => setGemstoneType(e.target.value)}
            className="w-full p-2.5 rounded-xl border border-zinc-200 bg-[#FAF8F5]"
          >
            <option>ทับทิมแท้ / พลอยมงคล (Natural Ruby/Gemstone)</option>
            <option>หินแท้โอนิกซ์ (Onyx Stone)</option>
            <option>เพชรแท้ GIA / เพชรเบลเยี่ยม (Natural Diamond)</option>
            <option>ไม่มีอัญมณี (เงินเกลี้ยง / ตอกลายล้วน)</option>
          </select>
        </div>

        <div>
          <label className="block font-semibold text-[#18181B] mb-1.5">
            งบประมาณโดยประมาณ
          </label>
          <select
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="w-full p-2.5 rounded-xl border border-zinc-200 bg-[#FAF8F5]"
          >
            <option>ต่ำกว่า 5,000 บาท</option>
            <option>5,000 - 15,000 บาท</option>
            <option>15,000 - 30,000 บาท</option>
            <option>30,000 - 50,000 บาท</option>
            <option>50,000 บาทขึ้นไป (Masterpiece / Gold)</option>
          </select>
        </div>

        <div>
          <label className="block font-semibold text-[#18181B] mb-1.5">
            รายละเอียดเพิ่มเติม / ลวดลายที่ชอบ
          </label>
          <textarea
            rows={3}
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="เช่น ไซส์แหวน 54, ลายตอกพิกุลโบราณ..."
            className="w-full p-2.5 rounded-xl border border-zinc-200 bg-[#FAF8F5]"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3.5 rounded-xl text-xs font-semibold text-white bg-[#06C755] hover:bg-[#05b34c] flex items-center justify-center gap-2 transition-all shadow-xs"
        >
          <MessageCircle className="w-4 h-4" />
          <span>ส่งข้อมูลประเมินราคาผ่าน LINE OA ทันที</span>
        </button>
      </form>
    </div>
  );
}
