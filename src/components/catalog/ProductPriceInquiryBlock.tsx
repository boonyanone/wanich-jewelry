"use client";

import React from "react";
import { Clock } from "lucide-react";
import { Product } from "@/types/jewelry";

interface ProductPriceInquiryBlockProps {
  product: Product;
}

export default function ProductPriceInquiryBlock({ product }: ProductPriceInquiryBlockProps) {
  const hasPrice = typeof product.price === "number" && product.price > 0;

  if (hasPrice) {
    return (
      <div className="space-y-0.5">
        <span className="text-[10px] text-zinc-500 font-mono block">ราคา</span>
        <div className="flex items-baseline gap-2">
          <span className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#F3E5AB]">
            ฿{product.price.toLocaleString()}
          </span>
          <span className="text-[11px] text-zinc-400 font-light">
            (รวมใบรับประกันเงินแท้)
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="p-3.5 rounded-2xl bg-gradient-to-r from-[#171720] via-[#14141B] to-[#101015] border border-[#C5A059]/40 shadow-inner space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-[9px] font-mono tracking-[0.2em] text-[#E5C378] uppercase">
          PRICE ON REQUEST
        </span>
        <span className="text-[10px] text-zinc-400 flex items-center gap-1">
          <Clock className="w-3 h-3 text-[#C5A059]" />
          <span>ตอบกลับรวดเร็ว</span>
        </span>
      </div>

      <div className="flex items-baseline justify-between gap-2">
        <h4 className="text-sm font-medium text-white tracking-wide">
          {product.priceFormatted || "ติดต่อสอบถามราคา"}
        </h4>
        <span className="text-[11px] font-mono text-[#E5C378] bg-[#C5A059]/15 px-2.5 py-0.5 rounded-full border border-[#C5A059]/30 shrink-0">
          สอบถามผ่าน LINE / Inbox
        </span>
      </div>

      <p className="text-[11px] text-zinc-400 font-light leading-relaxed">
        สามารถบันทึกภาพหน้าจอหรือแจ้งรหัส SKU <span className="font-mono text-[#E5C378]">{product.sku}</span> เพื่อสอบถามน้ำหนัก ขนาด และสั่งจองกับทางร้านได้โดยตรง
      </p>
    </div>
  );
}
