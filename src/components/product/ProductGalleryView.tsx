"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Product } from "@/types/jewelry";
import JewelryImageLoupe from "@/components/catalog/JewelryImageLoupe";
import { ChevronLeft, ChevronRight, ShieldCheck } from "lucide-react";

interface ProductGalleryViewProps {
  product: Product;
}

export default function ProductGalleryView({ product }: ProductGalleryViewProps) {
  const [activeIdx, setActiveIdx] = useState(0);
  const images = product.images && product.images.length > 0 ? product.images : [product.image];
  const activeImage = images[activeIdx] || product.image;

  const nextImg = () => setActiveIdx((prev) => (prev + 1) % images.length);
  const prevImg = () => setActiveIdx((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="space-y-4">
      {/* Main Luxury Podium with Loupe */}
      <div className="jewelry-podium relative aspect-square w-full rounded-3xl border border-[#C5A059]/30 bg-[#121217] overflow-hidden flex items-center justify-center p-4 sm:p-6 shadow-2xl">
        {/* Craftsmanship & Purity Badge */}
        <div className="absolute top-4 left-4 z-20 flex flex-col gap-1.5 items-start">
          <span className="text-[10px] uppercase font-mono tracking-widest text-[#E5C378] bg-[#0B0B0D]/90 backdrop-blur-md px-3 py-1 rounded-full border border-[#C5A059]/40 shadow-sm">
            {product.category}
          </span>
          <span className="inline-flex items-center gap-1 text-[9px] text-zinc-300 bg-white/10 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/10">
            <ShieldCheck className="w-3 h-3 text-[#C5A059]" />
            <span>{product.purity || "เงินแท้ 92.5%"}</span>
          </span>
        </div>

        {/* Loupe Component */}
        <JewelryImageLoupe src={activeImage} alt={product.title} />

        {/* Prev / Next Controls if multiple photos */}
        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={prevImg}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/60 hover:bg-black/85 border border-white/15 flex items-center justify-center text-white transition-colors cursor-pointer"
              aria-label="รูปภาพก่อนหน้า"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={nextImg}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/60 hover:bg-black/85 border border-white/15 flex items-center justify-center text-white transition-colors cursor-pointer"
              aria-label="รูปภาพถัดไป"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </>
        )}
      </div>

      {/* Thumbnails Row */}
      {images.length > 1 && (
        <div className="flex items-center gap-2.5 overflow-x-auto py-1 [scrollbar-width:none]">
          {images.map((img, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveIdx(idx)}
              className={`relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden border shrink-0 transition-all cursor-pointer ${
                activeIdx === idx
                  ? "border-[#C5A059] ring-2 ring-[#C5A059]/30 scale-105 bg-[#171720]"
                  : "border-white/10 hover:border-white/30 bg-[#121217] opacity-60 hover:opacity-100"
              }`}
            >
              <Image
                src={img}
                alt={`${product.title} มุมมอง ${idx + 1}`}
                fill
                sizes="80px"
                className="object-contain p-1.5"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
