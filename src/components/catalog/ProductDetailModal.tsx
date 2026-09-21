"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, Hammer, MessageCircle, ShieldCheck, Check, ChevronLeft, ChevronRight, ShoppingBag, ExternalLink } from "lucide-react";
import { Product } from "@/types/jewelry";
import brandData from "@/data/brand.json";
import { useCart } from "@/context/CartContext";
import ProductPriceInquiryBlock from "./ProductPriceInquiryBlock";
import JewelryImageLoupe from "./JewelryImageLoupe";
import { cleanProductDescription } from "@/lib/formatters";

interface ProductDetailModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProductDetailModal({ product, isOpen, onClose }: ProductDetailModalProps) {
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const { addToCart } = useCart();

  if (!isOpen || !product) return null;

  const images = product.images && product.images.length > 0 ? product.images : [product.image];
  const lineInquiryMessage = encodeURIComponent(
    `สวัสดีครับ สนใจสอบถามสินค้า: ${product.title} (รหัส: ${product.sku}) ราคา: ${product.priceFormatted}`
  );
  const lineDeepLink = `${brandData.lineUrl}?text=${lineInquiryMessage}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md">
      <div
        className="relative w-full max-w-3xl bg-[#121216] text-white rounded-3xl shadow-2xl border border-[#C5A059]/40 overflow-hidden my-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3.5 right-3.5 z-20 p-2 rounded-full bg-white/10 text-zinc-400 hover:text-white bg-white/5 hover:bg-white/15 border border-white/10 transition-all"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 p-5 sm:p-6">
          {/* Gallery */}
          <div className="md:col-span-5 space-y-3">
            <div className="jewelry-podium relative aspect-square w-full rounded-2xl border border-[#C5A059]/25 overflow-hidden flex items-center justify-center p-3 sm:p-4 shadow-inner">
              <JewelryImageLoupe
                src={images[activeImageIdx] || product.image}
                alt={product.title}
              />

              {images.length > 1 && (
                <>
                  <button
                    onClick={() => setActiveImageIdx((prev) => (prev > 0 ? prev - 1 : images.length - 1))}
                    className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/60 hover:bg-black/80 text-white border border-white/20"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => setActiveImageIdx((prev) => (prev < images.length - 1 ? prev + 1 : 0))}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/60 hover:bg-black/80 text-white border border-white/20"
                  >
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </>
              )}
            </div>

            {images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-1">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIdx(idx)}
                    className={`relative w-12 h-12 rounded-lg border overflow-hidden bg-[#18181D] shrink-0 ${
                      activeImageIdx === idx ? "border-[#E5C378]" : "border-white/10 opacity-70"
                    }`}
                  >
                    <Image src={img} alt="" fill className="object-contain p-1" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details & Actions */}
          <div className="md:col-span-7 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono tracking-wider uppercase text-[#E5C378] bg-white/5 px-2.5 py-0.5 rounded-full border border-[#C5A059]/35">
                  {product.category}
                </span>
                <span className="text-[10px] text-zinc-400 font-mono">SKU: {product.sku}</span>
              </div>

              <h2 className="font-heading-th text-base sm:text-lg font-medium text-white leading-snug tracking-wide">
                {product.title}
              </h2>

              {/* Price or Inquiry Block */}
              <ProductPriceInquiryBlock product={product} />

              <div className="p-3 rounded-xl bg-[#18181F] border border-white/10 space-y-1.5 text-[11px] text-zinc-300">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#E5C378]" />
                  <span><strong>มาตรฐานโลหะ:</strong> {product.purity || "เงินแท้ 92.5% - 99.9%"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Hammer className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span><strong>ช่างฝีมือ:</strong> {product.craftsmanship || "หัตถศิลป์เครื่องเงินน่าน"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span><strong>การดูแล:</strong> บริการขัดชุบทำความสะอาดฟรีตลอดชีพ</span>
                </div>
              </div>

              <p className="text-[11px] text-zinc-400 leading-relaxed max-h-28 overflow-y-auto pr-1 whitespace-pre-line">
                {cleanProductDescription(product.description)}
              </p>
            </div>

            <div className="pt-3 border-t border-white/10 flex flex-col sm:flex-row gap-2">
              <button
                onClick={() => {
                  addToCart(product, 1);
                  onClose();
                }}
                className="flex-1 py-2.5 px-4 rounded-xl text-xs font-semibold text-[#0B0B0D] bg-gradient-to-r from-[#F3E5AB] via-[#E5C378] to-[#C5A059] hover:brightness-110 flex items-center justify-center gap-1.5 shadow-md transition-all cursor-pointer"
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>เพิ่มลงรายการ</span>
              </button>

              <a
                href={lineDeepLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 px-4 rounded-xl text-xs font-semibold text-white bg-[#06C755] hover:bg-[#05b34c] flex items-center justify-center gap-1.5 shadow-sm transition-all"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>สอบถามผ่าน LINE</span>
              </a>
            </div>

            <div className="text-center pt-1">
              <Link
                href={`/product/${product.id}`}
                onClick={onClose}
                className="inline-flex items-center gap-1.5 text-[11px] text-[#E5C378] hover:text-white transition-colors"
              >
                <span>เปิดดูหน้ารายละเอียดชิ้นงานเต็มรูปแบบ</span>
                <ExternalLink className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
