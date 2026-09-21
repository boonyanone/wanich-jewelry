"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Sparkles, ArrowUpRight } from "lucide-react";

const CATEGORIES = [
  {
    name: "กำไลเงินแท้ 925",
    sub: "Nan Bangles",
    image: "/images/products/prod-1912-1.jpg",
    query: "กำไล",
    badge: "Masterpiece",
  },
  {
    name: "สร้อยข้อมือโซ่ตัน",
    sub: "Chain Bracelets",
    image: "/images/products/prod-1941-1.jpg",
    query: "สร้อยข้อมือ",
    badge: "Solid 925",
  },
  {
    name: "กำไลโอนิกซ์ทับทิม",
    sub: "Ruby Onyx Series",
    image: "/images/products/prod-1925-1.jpg",
    query: "โอนิกซ์",
    badge: "Precious Gem",
  },
  {
    name: "เข็มขัดเงินโบราณ",
    sub: "Lanna Belts",
    image: "/images/products/prod-1939-1.jpg",
    query: "เข็มขัด",
    badge: "Nan Heritage",
  },
  {
    name: "แหวนเงิน & พลอย",
    sub: "Gemstone Rings",
    image: "/images/products/prod-2248-1.jpg",
    query: "แหวน",
    badge: "Prestige",
  },
  {
    name: "กำไลสานเงินแท้",
    sub: "Woven Bangles",
    image: "/images/products/prod-1947-1.jpg",
    query: "กำไล",
    badge: "Masterpiece",
  },
];

export default function CategoryQuickStrip() {
  return (
    <section className="relative z-20 -mt-10 sm:-mt-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-[#121216]/95 backdrop-blur-xl border border-[#C5A059]/35 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-2xl">
        <div className="flex items-center justify-between pb-3.5 border-b border-white/10 mb-4">
          <div className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#E5C378]" />
            <h3 className="text-xs sm:text-sm font-medium tracking-wide text-zinc-200">
              หมวดหมู่ชิ้นงานเด่น <span className="text-[10px] text-zinc-500 font-mono ml-1 font-light tracking-wider">COLLECTIONS PREVIEW</span>
            </h3>
          </div>
          <Link
            href="/catalog"
            className="text-xs text-[#E5C378] hover:text-[#F3E5AB] flex items-center gap-1 transition-colors tracking-wide font-light"
          >
            <span>ดูทั้งหมด</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.name}
              href={`/catalog?cat=${encodeURIComponent(cat.query)}`}
              className="group jewelry-podium relative rounded-xl p-3 sm:p-3.5 border border-white/5 hover:border-[#C5A059]/60 transition-all flex flex-col items-center text-center"
            >
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 mb-2.5 overflow-hidden">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-contain p-1 group-hover:scale-115 transition-transform duration-500"
                />
              </div>

              <span className="text-[11px] sm:text-xs font-semibold text-white group-hover:text-[#E5C378] transition-colors line-clamp-1">
                {cat.name}
              </span>
              <span className="text-[9px] text-zinc-400 font-serif-luxury italic line-clamp-1">
                {cat.sub}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
