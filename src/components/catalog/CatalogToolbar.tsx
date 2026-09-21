"use client";

import React from "react";
import { Search, ArrowUpDown, SlidersHorizontal, LayoutGrid, Columns2, Grid3X3, X } from "lucide-react";

export type ViewMode = "grid" | "lookbook" | "compact";

interface CatalogToolbarProps {
  searchQuery: string;
  onSearchChange: (val: string) => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
  totalCount: number;
  onOpenMobileFilters: () => void;
  activeCategoryLabel: string;
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
}

export default function CatalogToolbar({
  searchQuery,
  onSearchChange,
  sortBy,
  onSortChange,
  totalCount,
  onOpenMobileFilters,
  activeCategoryLabel,
  viewMode,
  onViewModeChange,
}: CatalogToolbarProps) {
  return (
    <div className="bg-[#121217] rounded-2xl p-3 sm:p-3.5 border border-white/10 shadow-xl mb-4 flex flex-col md:flex-row gap-3 justify-between items-center">
      {/* Search Input */}
      <div className="relative w-full md:w-72">
        <Search className="w-3.5 h-3.5 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="ค้นหาชิ้นงาน หรือรหัส SKU..."
          className="w-full pl-9 pr-8 py-2 rounded-xl border border-white/10 text-xs focus:outline-none focus:border-[#C5A059] bg-[#181820] text-white placeholder-zinc-500 tracking-wide"
        />
        {searchQuery && (
          <button
            onClick={() => onSearchChange("")}
            className="absolute right-2.5 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white p-0.5"
            aria-label="ล้างคำค้นหา"
          >
            <X className="w-3 h-3" />
          </button>
        )}
      </div>

      {/* Controls: Count, View Mode Switcher, Sort, Mobile Filter */}
      <div className="flex items-center gap-2.5 w-full md:w-auto justify-between md:justify-end flex-wrap">
        {/* Mobile Filter Button */}
        <button
          onClick={onOpenMobileFilters}
          className="lg:hidden flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 border border-[#C5A059]/40 text-xs text-[#E5C378]"
        >
          <SlidersHorizontal className="w-3.5 h-3.5" />
          <span>{activeCategoryLabel}</span>
        </button>

        {/* Count Label */}
        <span className="text-xs text-zinc-400 font-light hidden sm:inline-block">
          พบ <strong className="text-[#E5C378] font-mono">{totalCount}</strong> ชิ้น
        </span>

        {/* View Layout Switcher */}
        <div className="hidden sm:flex items-center p-1 bg-[#181820] rounded-xl border border-white/10 gap-0.5">
          <button
            onClick={() => onViewModeChange("lookbook")}
            className={`p-1.5 rounded-lg transition-colors ${
              viewMode === "lookbook"
                ? "bg-[#C5A059]/25 text-[#F3E5AB] border border-[#C5A059]/40 shadow-xs"
                : "text-zinc-500 hover:text-zinc-300"
            }`}
            title="มุมมองนิตยสาร (Lookbook ภาพใหญ่)"
            aria-label="Lookbook View"
          >
            <Columns2 className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => onViewModeChange("grid")}
            className={`p-1.5 rounded-lg transition-colors ${
              viewMode === "grid"
                ? "bg-[#C5A059]/25 text-[#F3E5AB] border border-[#C5A059]/40 shadow-xs"
                : "text-zinc-500 hover:text-zinc-300"
            }`}
            title="มุมมองแกลเลอรีมาตรฐาน (3 คอลัมน์)"
            aria-label="Grid View"
          >
            <LayoutGrid className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => onViewModeChange("compact")}
            className={`p-1.5 rounded-lg transition-colors ${
              viewMode === "compact"
                ? "bg-[#C5A059]/25 text-[#F3E5AB] border border-[#C5A059]/40 shadow-xs"
                : "text-zinc-500 hover:text-zinc-300"
            }`}
            title="มุมมองกะทัดรัด (4 คอลัมน์)"
            aria-label="Compact View"
          >
            <Grid3X3 className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Sort Dropdown */}
        <div className="flex items-center gap-1.5 bg-[#181820] px-2.5 py-1.5 rounded-xl border border-white/10">
          <ArrowUpDown className="w-3 h-3 text-zinc-400" />
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
            className="bg-transparent text-xs text-zinc-300 focus:outline-none cursor-pointer"
          >
            <option value="default" className="bg-[#14141A]">ค่าเริ่มต้น</option>
            <option value="price-low" className="bg-[#14141A]">ราคา: ต่ำไปสูง</option>
            <option value="price-high" className="bg-[#14141A]">ราคา: สูงไปต่ำ</option>
            <option value="name" className="bg-[#14141A]">ชื่อชิ้นงาน (ก-ฮ)</option>
          </select>
        </div>
      </div>
    </div>
  );
}
