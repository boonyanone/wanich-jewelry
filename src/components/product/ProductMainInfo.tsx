"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MessageCircle, ShoppingBag, Check, ShieldCheck, Phone, ChevronRight } from "lucide-react";
import { Product } from "@/types/jewelry";
import brandData from "@/data/brand.json";
import { useCart } from "@/context/CartContext";
import ProductPriceInquiryBlock from "@/components/catalog/ProductPriceInquiryBlock";

interface ProductMainInfoProps {
  product: Product;
}

export default function ProductMainInfo({ product }: ProductMainInfoProps) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const lineMessage = encodeURIComponent(
    `สวัสดีครับ สนใจสั่งจอง/สอบถามเครื่องประดับ: ${product.title} (รหัส SKU: ${product.sku})`
  );
  const lineDeepLink = `${brandData.lineUrl}?text=${lineMessage}`;

  const handleAdd = () => {
    addToCart(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2200);
  };

  return (
    <div className="space-y-6">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-xs text-zinc-400 font-light flex-wrap">
        <Link href="/" className="hover:text-white transition-colors">หน้าแรก</Link>
        <ChevronRight className="w-3 h-3 text-zinc-600" />
        <Link href="/catalog" className="hover:text-white transition-colors">คอลเลกชัน</Link>
        <ChevronRight className="w-3 h-3 text-zinc-600" />
        <span className="text-[#C5A059] truncate max-w-[200px]">{product.title}</span>
      </nav>

      {/* Header Info */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs text-[#E5C378] bg-[#C5A059]/15 border border-[#C5A059]/30 px-2.5 py-0.5 rounded-full">
            SKU: {product.sku}
          </span>
          <span className="text-xs text-zinc-400 font-mono">
            {product.category}
          </span>
        </div>
        <h1 className="font-heading-th text-2xl sm:text-3xl font-light text-white tracking-wide leading-snug">
          {product.title}
        </h1>
        <p className="text-xs text-zinc-400 font-light flex items-center gap-1.5 pt-1">
          <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" />
          <span>การันตีเนื้อเงินแท้ พร้อมใบรับประกันความบริสุทธิ์จาก WANICH Jewelry</span>
        </p>
      </div>

      {/* Price Inquiry Section */}
      <div className="pt-2 pb-2">
        <ProductPriceInquiryBlock product={product} />
      </div>

      {/* Action Buttons & Quantity */}
      <div className="space-y-3 pt-2">
        <div className="flex items-center gap-3">
          <div className="flex items-center border border-white/15 rounded-xl bg-[#14141A] px-3 py-2 text-sm text-zinc-200">
            <button
              type="button"
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="px-2 text-zinc-400 hover:text-white transition-colors"
            >
              -
            </button>
            <span className="px-3 font-mono text-white min-w-[2rem] text-center">{quantity}</span>
            <button
              type="button"
              onClick={() => setQuantity((q) => q + 1)}
              className="px-2 text-zinc-400 hover:text-white transition-colors"
            >
              +
            </button>
          </div>

          <button
            type="button"
            onClick={handleAdd}
            className="flex-1 py-3 px-5 rounded-xl text-xs sm:text-sm font-medium tracking-wide bg-gradient-to-r from-[#F3E5AB] via-[#E5C378] to-[#C5A059] text-[#0B0B0D] hover:brightness-110 active:scale-[0.99] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#C5A059]/15 cursor-pointer"
          >
            {added ? (
              <>
                <Check className="w-4 h-4 text-[#0B0B0D]" />
                <span>บันทึกลงถุงแล้ว</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-4 h-4" />
                <span>ใส่ถุงเครื่องประดับ</span>
              </>
            )}
          </button>
        </div>

        {/* LINE & Tel Inquiries */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
          <a
            href={lineDeepLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 px-4 rounded-xl text-xs font-medium text-emerald-400 bg-[#0f241a] hover:bg-[#133022] border border-emerald-500/30 transition-colors flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            <span>สอบถาม & สั่งจองทาง LINE</span>
          </a>
          <a
            href={`tel:${brandData.phoneNumbers[0]}`}
            className="w-full py-2.5 px-4 rounded-xl text-xs font-medium text-zinc-200 bg-[#16161D] hover:bg-[#1E1E28] border border-white/10 transition-colors flex items-center justify-center gap-2"
          >
            <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>โทรสายด่วน {brandData.phoneNumbers[0]}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
