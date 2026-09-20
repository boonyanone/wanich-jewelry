"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Sparkles, MessageCircle, Eye } from "lucide-react";
import { Product } from "@/types/jewelry";
import brandData from "@/data/brand.json";

interface ProductCardProps {
  product: Product;
  onQuickView: (product: Product) => void;
}

export default function ProductCard({ product, onQuickView }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Use second image if available on hover
  const displayImage =
    isHovered && product.images && product.images.length > 1
      ? product.images[1]
      : product.image;

  // Direct LINE link
  const lineMessage = encodeURIComponent(
    `สวัสดีครับ/ค่ะ สนใจสินค้า: ${product.title} (รหัส: ${product.sku})`
  );
  const lineDeepLink = `${brandData.lineUrl}?text=${lineMessage}`;

  return (
    <div
      className="group relative bg-white rounded-2xl border border-zinc-200/80 hover:border-[#C5A059]/60 shadow-xs hover:shadow-xl transition-all duration-400 overflow-hidden flex flex-col justify-between"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Top Image Podium */}
      <div className="jewelry-podium relative aspect-square w-full overflow-hidden p-6 flex items-center justify-center">
        {/* Category Pill Tag */}
        <div className="absolute top-3 left-3 z-10">
          <span className="text-[10px] uppercase font-semibold tracking-wider text-[#8C7034] bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-full border border-[#C5A059]/30 shadow-2xs">
            {product.category}
          </span>
        </div>

        {/* Quick View Button on Hover */}
        <button
          onClick={() => onQuickView(product)}
          className="absolute inset-0 z-20 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          aria-label="ดูรายละเอียดสินค้า"
        >
          <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-xs font-semibold text-[#18181B] shadow-md hover:bg-[#FAF8F5] transform translate-y-2 group-hover:translate-y-0 transition-all">
            <Eye className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>ดูรายละเอียด & ส่องลาย</span>
          </span>
        </button>

        {/* Product Image */}
        <div className="relative w-full h-full">
          <Image
            src={displayImage}
            alt={product.title}
            fill
            className="object-contain p-2 group-hover:scale-108 transition-transform duration-500 ease-out"
          />
        </div>
      </div>

      {/* Product Content Details */}
      <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between bg-white border-t border-zinc-100 space-y-3">
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-[11px] text-zinc-400 font-mono">
            <span>{product.sku}</span>
            <span className="text-[#C5A059] flex items-center gap-1">
              <Sparkles className="w-2.5 h-2.5" />
              <span>เงินแท้ 925</span>
            </span>
          </div>

          <h3
            onClick={() => onQuickView(product)}
            className="font-heading-th text-sm font-semibold text-[#18181B] hover:text-[#B8934A] transition-colors line-clamp-2 cursor-pointer"
          >
            {product.title}
          </h3>
        </div>

        {/* Price and CTA Row */}
        <div className="pt-2 border-t border-zinc-100 flex items-center justify-between">
          <div>
            <span className="font-serif-luxury text-base sm:text-lg font-bold text-[#B8934A]">
              {product.priceFormatted}
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <a
              href={lineDeepLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[#FAF8F5] text-zinc-600 hover:text-[#06C755] hover:bg-[#EBFBF0] border border-zinc-200 transition-colors"
              title="สอบถามผ่าน LINE"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            <button
              onClick={() => onQuickView(product)}
              className="px-3 py-1.5 rounded-full text-xs font-medium text-[#18181B] bg-[#FAF8F5] border border-zinc-200 hover:bg-[#F5EED9] hover:border-[#C5A059] transition-all"
            >
              ชมชิ้นงาน
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
