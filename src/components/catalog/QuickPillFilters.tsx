"use client";

import React, { useRef } from "react";
import { Filter, ChevronLeft, ChevronRight, X } from "lucide-react";

export interface QuickFilterPill {
  id: string;
  label: string;
  query: string;
  badge?: string;
}

const PILLS: QuickFilterPill[] = [
  { id: "all", label: "ทั้งหมด", query: "" },
  { id: "onyx", label: "กำไลโอนิกซ์ & ทับทิม", query: "โอนิกซ์", badge: "Signature" },
  { id: "nan-chased", label: "ตอกลายโบราณเมืองน่าน", query: "ตอกลาย", badge: "Masterpiece" },
  { id: "woven", label: "กำไลสานลายเสื่อ", query: "สาน", badge: "Craft" },
  { id: "chain", label: "สร้อยข้อมือโซ่ตัน", query: "สร้อยข้อมือ" },
  { id: "belts", label: "เข็มขัดเงินน่านโบราณ", query: "เข็มขัด" },
  { id: "rings", label: "แหวนเงิน & พลอย", query: "แหวน" },
];

interface QuickPillFiltersProps {
  activePillId: string;
  onSelectPill: (pill: QuickFilterPill) => void;
  onClearAll?: () => void;
  isFiltered?: boolean;
}

export default function QuickPillFilters({
  activePillId,
  onSelectPill,
  onClearAll,
  isFiltered = false,
}: QuickPillFiltersProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -200 : 200;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="relative flex items-center gap-1.5 mb-5 group">
      {/* Scroll Left Button */}
      <button
        type="button"
        onClick={() => handleScroll("left")}
        className="hidden sm:flex shrink-0 w-6 h-6 rounded-full bg-[#181820] border border-white/10 items-center justify-center text-zinc-400 hover:text-white hover:border-[#C5A059]/40 transition-colors shadow-sm"
        aria-label="เลื่อนซ้าย"
      >
        <ChevronLeft className="w-3.5 h-3.5" />
      </button>

      {/* Scrollable Container with Native Scroll & Wheel Support */}
      <div
        ref={scrollRef}
        className="flex items-center gap-2 overflow-x-auto py-1 scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden w-full"
      >
        <div className="flex items-center gap-1.5 shrink-0 pr-1 text-[11px] text-[#C5A059] font-mono tracking-wider uppercase select-none">
          <Filter className="w-3.5 h-3.5 text-[#C5A059]" />
          <span>เลือกตามลาย:</span>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          {PILLS.map((pill) => {
            const isActive = activePillId === pill.id;
            return (
              <button
                key={pill.id}
                type="button"
                onClick={() => onSelectPill(pill)}
                className={`group/pill inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-light tracking-wide whitespace-nowrap transition-all duration-200 border cursor-pointer ${
                  isActive
                    ? "bg-gradient-to-r from-[#2A2315] to-[#1C1A14] text-[#F3E5AB] border-[#C5A059] shadow-sm font-medium"
                    : "bg-[#141419] text-zinc-400 border-white/10 hover:border-[#C5A059]/40 hover:text-zinc-200 hover:bg-[#1A1A22]"
                }`}
              >
                {pill.badge && (
                  <span
                    className={`text-[8.5px] px-1.5 py-0.2 rounded-full font-mono uppercase ${
                      isActive
                        ? "bg-[#C5A059]/30 text-[#F3E5AB]"
                        : "bg-white/5 text-[#E5C378] group-hover/pill:bg-[#C5A059]/20"
                    }`}
                  >
                    {pill.badge}
                  </span>
                )}
                <span>{pill.label}</span>
              </button>
            );
          })}
        </div>

        {/* Clear Filter button if filtered */}
        {isFiltered && onClearAll && (
          <button
            type="button"
            onClick={onClearAll}
            className="shrink-0 inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] text-zinc-400 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors ml-1"
          >
            <X className="w-3 h-3 text-[#C5A059]" />
            <span>ล้างตัวกรองกลับหน้าแรก</span>
          </button>
        )}
      </div>

      {/* Scroll Right Button */}
      <button
        type="button"
        onClick={() => handleScroll("right")}
        className="hidden sm:flex shrink-0 w-6 h-6 rounded-full bg-[#181820] border border-white/10 items-center justify-center text-zinc-400 hover:text-white hover:border-[#C5A059]/40 transition-colors shadow-sm"
        aria-label="เลื่อนขวา"
      >
        <ChevronRight className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}
