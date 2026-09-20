"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, Sparkles, MessageCircle, Phone, ShieldCheck, Check, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { Product } from "@/types/jewelry";
import brandData from "@/data/brand.json";

interface ProductDetailModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProductDetailModal({ product, isOpen, onClose }: ProductDetailModalProps) {
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  if (!isOpen || !product) return null;

  const images = product.images && product.images.length > 0 ? product.images : [product.image];

  // LINE Deep link with product title and SKU prefilled
  const lineInquiryMessage = encodeURIComponent(
    `สวัสดีครับ/ค่ะ สนใจสอบถามสินค้า: ${product.title} (รหัส: ${product.sku}) ราคา: ${product.priceFormatted}`
  );
  const lineDeepLink = `${brandData.lineUrl}?text=${lineInquiryMessage}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-xs transition-opacity">
      <div
        className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl border border-[#C5A059]/40 overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-[#FAF8F5] text-[#18181B] hover:text-[#C5A059] hover:bg-[#F5EED9] border border-zinc-200 transition-all"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 p-6 sm:p-8">
          {/* Left Column: Gallery & Lens Zoom */}
          <div className="md:col-span-6 space-y-4">
            {/* Main Stage Image */}
            <div className="jewelry-podium relative aspect-square w-full rounded-xl border border-[#C5A059]/30 overflow-hidden flex items-center justify-center p-6 shadow-inner">
              <div className="relative w-full h-full">
                <Image
                  src={images[activeImageIdx] || product.image}
                  alt={product.title}
                  fill
                  className="object-contain p-2 hover:scale-110 transition-transform duration-500 cursor-zoom-in"
                />
              </div>

              {/* Angle Navigation Arrows if multiple images */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={() => setActiveImageIdx((prev) => (prev > 0 ? prev - 1 : images.length - 1))}
                    className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-white/90 shadow border border-zinc-200 hover:bg-[#FAF8F5]"
                  >
                    <ChevronLeft className="w-4 h-4 text-zinc-700" />
                  </button>
                  <button
                    onClick={() => setActiveImageIdx((prev) => (prev < images.length - 1 ? prev + 1 : 0))}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-white/90 shadow border border-zinc-200 hover:bg-[#FAF8F5]"
                  >
                    <ChevronRight className="w-4 h-4 text-zinc-700" />
                  </button>
                </>
              )}
            </div>

            {/* Thumbnail Strip */}
            {images.length > 1 && (
              <div className="flex gap-2.5 overflow-x-auto pb-1">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIdx(idx)}
                    className={`relative w-16 h-16 rounded-lg border-2 overflow-hidden bg-white shrink-0 transition-all ${
                      activeImageIdx === idx ? "border-[#C5A059] shadow-sm scale-105" : "border-zinc-200 opacity-70 hover:opacity-100"
                    }`}
                  >
                    <Image src={img} alt="" fill className="object-contain p-1" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Product Details & Direct Inquiry */}
          <div className="md:col-span-6 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              {/* Category & SKU */}
              <div className="flex items-center justify-between">
                <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#8C7034] bg-[#FAF8F5] px-2.5 py-1 rounded border border-[#C5A059]/30">
                  {product.category}
                </span>
                <span className="text-xs text-zinc-400 font-mono">รหัส: {product.sku}</span>
              </div>

              {/* Title */}
              <h2 className="font-heading-th text-2xl font-bold text-[#18181B] leading-snug">
                {product.title}
              </h2>

              {/* Price */}
              <div className="pt-1">
                <span className="font-serif-luxury text-3xl font-bold text-[#B8934A]">
                  {product.priceFormatted}
                </span>
                {product.price > 0 && (
                  <span className="text-xs text-zinc-400 ml-2">รวมภาษีและรับประกันดูแลตลอดอายุการใช้งาน</span>
                )}
              </div>

              {/* Product Specifications */}
              <div className="p-4 rounded-xl bg-[#FAF8F5] border border-zinc-200/80 space-y-2 text-xs">
                <div className="flex items-center gap-2 text-zinc-700">
                  <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
                  <span><strong>มาตรฐานโลหะ:</strong> {product.purity}</span>
                </div>
                <div className="flex items-center gap-2 text-zinc-700">
                  <Sparkles className="w-4 h-4 text-[#C5A059]" />
                  <span><strong>กรรมวิธีการผลิต:</strong> {product.craftsmanship}</span>
                </div>
                <div className="flex items-center gap-2 text-zinc-700">
                  <Check className="w-4 h-4 text-[#10B981]" />
                  <span><strong>บริการหลังการขาย:</strong> ทำความสะอาดและตรวจเช็กฟรีตลอดอายุการใช้งาน</span>
                </div>
              </div>

              {/* Description */}
              <div className="text-xs sm:text-sm text-zinc-600 leading-relaxed max-h-40 overflow-y-auto pr-1">
                <p>{product.description}</p>
              </div>
            </div>

            {/* Direct Inquiry CTAs */}
            <div className="pt-4 border-t border-zinc-200 space-y-2.5">
              <a
                href={lineDeepLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl text-sm font-semibold text-white bg-[#06C755] hover:bg-[#05b34c] flex items-center justify-center gap-2 shadow-sm transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>สั่งซื้อ / สอบถามชิ้นนี้ผ่าน LINE OA</span>
              </a>

              <a
                href="tel:088-260-4198"
                className="w-full py-2.5 rounded-xl text-xs font-medium text-zinc-700 bg-white border border-zinc-300 hover:bg-[#FAF8F5] flex items-center justify-center gap-2 transition-all"
              >
                <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>โทรสอบถามผู้เชี่ยวชาญ: 088-260-4198</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
