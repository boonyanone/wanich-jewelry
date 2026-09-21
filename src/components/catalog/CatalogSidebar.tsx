"use client";

import React from "react";
import { Hammer, MessageCircle, X, ChevronRight } from "lucide-react";
import brandData from "@/data/brand.json";

export interface CategoryItem {
  id: string;
  label: string;
  en: string;
  count: number;
}

interface CatalogSidebarProps {
  categories: CategoryItem[];
  selectedCategory: string;
  onSelectCategory: (id: string) => void;
  isOpenMobile?: boolean;
  onCloseMobile?: () => void;
}

export default function CatalogSidebar({
  categories,
  selectedCategory,
  onSelectCategory,
  isOpenMobile = false,
  onCloseMobile,
}: CatalogSidebarProps) {
  const sidebarContent = (
    <div className="flex flex-col space-y-2">
      {/* Category Section Header */}
      <div className="flex items-center justify-between border-b border-[#C5A059]/20 pb-2">
        <div>
          <span className="text-[8px] uppercase tracking-[0.25em] text-[#C5A059] font-mono block">
            FINE JEWELRY
          </span>
          <h2 className="font-brand-en text-[11.5px] tracking-widest text-white mt-0.5 font-medium">
            หมวดหมู่คอลเลกชัน
          </h2>
        </div>
        {isOpenMobile && onCloseMobile && (
          <button
            onClick={onCloseMobile}
            className="p-1 rounded-full text-zinc-400 hover:text-white bg-white/5"
            aria-label="Close filters"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {/* Category Navigation Items */}
      <nav className="space-y-0.5">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => {
                onSelectCategory(cat.id);
                if (onCloseMobile) onCloseMobile();
              }}
              className={`w-full group flex items-center justify-between px-2.5 py-1.5 rounded-lg text-left transition-all duration-200 ${
                isActive
                  ? "bg-[#181822] text-[#F3E5AB] border border-[#C5A059]/40 shadow-xs font-medium"
                  : "text-zinc-400 hover:text-zinc-200 hover:bg-white/5"
              }`}
            >
              <div className="flex items-center gap-2">
                <span
                  className={`w-1 h-3 rounded-full transition-colors ${
                    isActive ? "bg-[#C5A059]" : "bg-transparent group-hover:bg-zinc-700"
                  }`}
                />
                <div>
                  <span className="text-[11px] tracking-wide block leading-tight">{cat.label}</span>
                  <span className="text-[8px] text-zinc-500 font-mono tracking-wider block">
                    {cat.en}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1.5">
                <span
                  className={`text-[9px] font-mono px-1.5 py-0.2 rounded-full ${
                    isActive
                      ? "bg-[#C5A059]/20 text-[#E5C378] border border-[#C5A059]/30"
                      : "bg-white/5 text-zinc-400"
                  }`}
                >
                  {cat.count}
                </span>
                <ChevronRight
                  className={`w-3 h-3 transition-transform ${
                    isActive ? "text-[#E5C378] translate-x-0.5" : "text-zinc-600 group-hover:text-zinc-400"
                  }`}
                />
              </div>
            </button>
          );
        })}
      </nav>

      {/* Bespoke VIP Banner (Fits flush to container edge) */}
      <div className="pt-1">
        <div className="p-2.5 rounded-xl bg-gradient-to-br from-[#181824] to-[#111116] border border-[#C5A059]/30 shadow-md space-y-1.5">
          <div className="flex items-center justify-between text-[#E5C378]">
            <div className="flex items-center gap-1.5">
              <Hammer className="w-3 h-3 text-[#C5A059]" />
              <span className="text-[8.5px] font-mono uppercase tracking-widest font-semibold">BESPOKE ATELIER</span>
            </div>
            <span className="text-[7.5px] font-mono text-zinc-500 uppercase">3D CAD</span>
          </div>
          <p className="text-[10px] text-zinc-300 font-light leading-snug">
            สั่งทำแหวนหรือกำไลเฉพาะบุคคล ประเมินราคาฟรี
          </p>
          <a
            href={brandData.lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="glint-effect inline-flex items-center justify-center gap-1.5 w-full py-1.5 px-2.5 rounded-lg text-[10.5px] font-medium text-[#0B0B0D] bg-gradient-to-r from-[#F3E5AB] via-[#E5C378] to-[#C5A059] shadow-xs hover:brightness-110 transition-all"
          >
            <MessageCircle className="w-3 h-3" />
            <span>ปรึกษาช่างทอง LINE OA</span>
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sticky Sidebar - Perfectly Fitted Without Any Scrolling */}
      <aside className="hidden lg:block w-60 shrink-0 sticky top-24 self-start z-30">
        <div className="bg-[#121217] rounded-2xl p-3 border border-white/10 shadow-2xl">
          {sidebarContent}
        </div>
      </aside>

      {/* Mobile Drawer */}
      {isOpenMobile && (
        <div className="fixed inset-0 z-50 lg:hidden flex justify-start">
          <div className="fixed inset-0 bg-black/80 backdrop-blur-xs" onClick={onCloseMobile} />
          <div className="relative w-68 max-w-[85vw] bg-[#101015] text-white h-full p-3.5 overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden z-10 border-r border-[#C5A059]/30 shadow-2xl">
            {sidebarContent}
          </div>
        </div>
      )}
    </>
  );
}
