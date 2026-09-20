import React from "react";
import { Search, Plus } from "lucide-react";

interface ProductSearchBarProps {
  searchQuery: string;
  onSearchChange: (val: string) => void;
  onAddNew: () => void;
}

export default function ProductSearchBar({
  searchQuery,
  onSearchChange,
  onAddNew,
}: ProductSearchBarProps) {
  return (
    <div className="bg-white rounded-2xl p-4 sm:p-6 border border-zinc-200/80 shadow-xs flex flex-col md:flex-row justify-between items-center gap-4">
      <div className="relative w-full md:w-96">
        <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="ค้นหาชื่อ, รหัส SKU, หมวดหมู่..."
          className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-zinc-200 text-xs bg-[#FAF8F5] focus:outline-none focus:border-[#C5A059]"
        />
      </div>

      <button
        onClick={onAddNew}
        className="w-full md:w-auto px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-[#B8934A] to-[#D4AF37] hover:from-[#A47F35] hover:to-[#C5A059] flex items-center justify-center gap-2 shadow transition-all"
      >
        <Plus className="w-4 h-4" />
        <span>เพิ่มสินค้าใหม่</span>
      </button>
    </div>
  );
}
