"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Eye, ShoppingBag, ArrowUpRight } from "lucide-react";
import { Product } from "@/types/jewelry";
import brandData from "@/data/brand.json";
import { useCart } from "@/context/CartContext";
import { cleanProductDescription } from "@/lib/formatters";

interface ProductCardProps {
  product: Product;
  onQuickView: (product: Product) => void;
  viewMode?: "grid" | "lookbook" | "compact";
}

export default function ProductCard({
  product,
  onQuickView,
  viewMode = "grid",
}: ProductCardProps) {
  const [activeImgIdx, setActiveImgIdx] = useState(0);
  const { addToCart } = useCart();

  const images = product.images && product.images.length > 0 ? product.images : [product.image];
  const displayImage = images[activeImgIdx] || product.image;

  const lineMessage = encodeURIComponent(
    `สวัสดีครับ สนใจสินค้า: ${product.title} (รหัส: ${product.sku})`
  );
  const lineDeepLink = `${brandData.lineUrl}?text=${lineMessage}`;
  const hasPrice = typeof product.price === "number" && product.price > 0;
  const isLookbook = viewMode === "lookbook";

  return (
    <div
      className={`group relative bg-[#131317] rounded-2xl border border-white/10 hover:border-[#C5A059]/70 shadow-lg hover:shadow-2xl hover:shadow-[#C5A059]/10 transition-all duration-300 overflow-hidden flex flex-col justify-between ${
        isLookbook ? "md:p-1.5 bg-gradient-to-b from-[#15151B] to-[#101014]" : ""
      }`}
    >
      {/* Top Image Podium with Silver Shimmer Sweep */}
      <div
        className={`jewelry-podium silver-shimmer-sweep relative w-full overflow-hidden flex items-center justify-center border-b border-white/5 ${
          isLookbook ? "aspect-4/3 sm:aspect-square p-6" : "aspect-square p-4 sm:p-5"
        }`}
      >
        {/* Category & Craftsmanship Badge */}
        <div className="absolute top-2.5 left-2.5 z-20 flex flex-col gap-1 items-start">
          <span className="text-[8.5px] uppercase font-mono tracking-wider text-[#E5C378] bg-[#0B0B0D]/85 backdrop-blur-md px-2 py-0.5 rounded-full border border-[#C5A059]/35 shadow-xs">
            {product.category}
          </span>
          {isLookbook && product.craftsmanship && (
            <span className="text-[8px] font-sans text-zinc-300 bg-white/10 backdrop-blur-md px-2 py-0.2 rounded-full border border-white/10">
              {product.craftsmanship}
            </span>
          )}
        </div>

        {/* Quick Actions on Hover */}
        <div className="absolute inset-0 z-20 flex items-center justify-center gap-2 bg-black/55 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-3">
          <Link
            href={`/product/${product.id}`}
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-gradient-to-r from-[#F3E5AB] via-[#E5C378] to-[#C5A059] text-[11px] font-medium text-[#0B0B0D] hover:brightness-110 shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-all"
          >
            <span>ดูรายละเอียด</span>
            <ArrowUpRight className="w-3 h-3" />
          </Link>
          <button
            type="button"
            onClick={() => onQuickView(product)}
            className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-[#18181F]/90 text-[11px] font-light text-zinc-200 border border-[#C5A059]/60 hover:text-white hover:border-[#C5A059] shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-all cursor-pointer"
            title="ส่องด่วนแบบป๊อปอัป"
          >
            <Eye className="w-3 h-3 text-[#E5C378]" />
            <span>ส่องด่วน</span>
          </button>
        </div>

        {/* Product Image with Zoom Effect */}
        <div className="relative w-full h-full">
          <Image
            src={displayImage}
            alt={product.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-contain p-2 group-hover:scale-108 transition-transform duration-700 ease-out"
          />
        </div>

        {/* Multiple Angle Dots Indicator */}
        {images.length > 1 && (
          <div className="absolute bottom-2 inset-x-0 z-20 flex items-center justify-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            {images.slice(0, 5).map((_, idx) => (
              <button
                key={idx}
                onMouseEnter={() => setActiveImgIdx(idx)}
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveImgIdx(idx);
                }}
                className={`w-1.5 h-1.5 rounded-full transition-all ${
                  activeImgIdx === idx ? "w-3.5 bg-[#E5C378]" : "bg-white/40 hover:bg-white/80"
                }`}
                aria-label={`มุมมองที่ ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Product Content Details */}
      <div className={`p-3.5 flex flex-col flex-1 justify-between bg-[#131317] space-y-2 ${isLookbook ? "sm:p-4.5" : ""}`}>
        <div className="space-y-1">
          <div className="flex items-center justify-between text-[9px] text-zinc-500 font-mono">
            <span>{product.sku}</span>
            <span className="text-[#C5A059] font-medium tracking-wide">
              {product.purity || "เงินแท้ 925"}
            </span>
          </div>

          <h3>
            <Link
              href={`/product/${product.id}`}
              className="font-heading-th text-xs sm:text-[13px] font-light text-zinc-200 hover:text-[#E5C378] transition-colors line-clamp-2 leading-relaxed tracking-wide block"
            >
              {product.title}
            </Link>
          </h3>

          {isLookbook && product.shortExcerpt && (
            <p className="text-[11px] text-zinc-400 font-light line-clamp-2 pt-1 leading-normal">
              {cleanProductDescription(product.shortExcerpt)}
            </p>
          )}
        </div>

        {/* Price and CTA Row */}
        <div className="pt-2 border-t border-white/10 flex items-center justify-between">
          <div>
            {hasPrice ? (
              <div className="flex flex-col">
                <span className="text-[8px] text-zinc-500 font-mono tracking-wider">ราคา</span>
                <span className="font-serif-luxury text-sm sm:text-base font-semibold text-[#F3E5AB] tracking-wide">
                  ฿{product.price.toLocaleString()}
                </span>
              </div>
            ) : (
              <div className="flex flex-col">
                <span className="text-[7.5px] uppercase tracking-widest text-zinc-500 font-mono">PRICE</span>
                <span className="text-[11px] font-medium text-[#E5C378] tracking-wide">
                  {product.priceFormatted || "ติดต่อสอบถามราคา"}
                </span>
              </div>
            )}
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={() => addToCart(product, 1)}
              className="p-1.5 rounded-lg bg-white/5 text-zinc-400 hover:text-[#E5C378] hover:bg-white/10 border border-white/10 transition-colors"
              title="บันทึกชิ้นงาน"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
            </button>
            <a
              href={lineDeepLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg bg-white/5 text-zinc-400 hover:text-[#22c55e] hover:bg-white/10 border border-white/10 transition-colors"
              title="สอบถามผ่าน LINE"
            >
              <MessageCircle className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
