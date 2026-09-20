import React from "react";
import { Search, ArrowUpDown } from "lucide-react";

interface CategoryOption {
  id: string;
  label: string;
}

interface CatalogFilterBarProps {
  searchQuery: string;
  onSearchChange: (val: string) => void;
  selectedCategory: string;
  onCategoryChange: (cat: string) => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
  totalCount: number;
  categories: CategoryOption[];
}

export default function CatalogFilterBar({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  sortBy,
  onSortChange,
  totalCount,
  categories,
}: CatalogFilterBarProps) {
  return (
    <div className="bg-white rounded-2xl p-4 sm:p-6 border border-zinc-200/80 shadow-xs mb-8 space-y-4">
      <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
        <div className="relative w-full md:w-96">
          <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="ค้นหาชื่อสินค้า, รหัส SKU, หรือหมวดหมู่..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-zinc-200 text-xs focus:outline-none focus:border-[#C5A059] bg-[#FAF8F5]"
          />
        </div>

        <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end">
          <span className="text-xs text-[#71717A] font-medium">
            พบ <strong className="text-[#18181B]">{totalCount}</strong> รายการ
          </span>

          <div className="flex items-center gap-2">
            <ArrowUpDown className="w-3.5 h-3.5 text-zinc-500" />
            <select
              value={sortBy}
              onChange={(e) => onSortChange(e.target.value)}
              className="px-3 py-2 rounded-xl border border-zinc-200 text-xs text-[#18181B] bg-white focus:outline-none focus:border-[#C5A059]"
            >
              <option value="default">เรียงตามค่าเริ่มต้น</option>
              <option value="price-low">ราคา: ต่ำไปสูง</option>
              <option value="price-high">ราคา: สูงไปต่ำ</option>
              <option value="name">ชื่อสินค้า (ก-ฮ)</option>
            </select>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 pt-2 border-t border-zinc-100">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => onCategoryChange(cat.id)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
              selectedCategory === cat.id
                ? "bg-[#18181B] text-white shadow-xs"
                : "bg-[#FAF8F5] text-[#52525B] hover:bg-[#F5EED9] hover:text-[#18181B] border border-zinc-200"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>
    </div>
  );
}
