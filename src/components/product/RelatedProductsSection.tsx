"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Product } from "@/types/jewelry";
import { ArrowRight } from "lucide-react";

interface RelatedProductsSectionProps {
  currentProduct: Product;
  allProducts: Product[];
}

export default function RelatedProductsSection({
  currentProduct,
  allProducts,
}: RelatedProductsSectionProps) {
  const related = allProducts
    .filter(
      (p) =>
        p.id !== currentProduct.id &&
        (p.category === currentProduct.category || p.isFeatured)
    )
    .slice(0, 4);

  if (related.length === 0) return null;

  return (
    <div className="mt-16 pt-10 border-t border-white/10 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <span className="text-[9px] font-mono tracking-widest text-[#C5A059] uppercase block">
            CURATED PIECES
          </span>
          <h2 className="font-heading-th text-lg sm:text-xl font-light text-white">
            ชิ้นงานที่เข้าคู่กันในคอลเลกชัน
          </h2>
        </div>
        <Link
          href="/catalog"
          className="text-xs text-[#E5C378] hover:text-white flex items-center gap-1 transition-colors"
        >
          <span>ดูทั้งหมด</span>
          <ArrowRight className="w-3 h-3" />
        </Link>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {related.map((item) => (
          <Link
            key={item.id}
            href={`/product/${item.id}`}
            className="group bg-[#121217] rounded-2xl border border-white/10 hover:border-[#C5A059]/60 p-3 flex flex-col justify-between transition-all hover:-translate-y-1"
          >
            <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-[#0D0D10] mb-2.5">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="space-y-1">
              <span className="text-[8.5px] font-mono text-[#E5C378] block truncate">
                {item.sku}
              </span>
              <h3 className="text-xs text-zinc-300 group-hover:text-white line-clamp-1 font-light">
                {item.title}
              </h3>
              <p className="text-[11px] text-[#F3E5AB] font-serif-luxury font-medium">
                {typeof item.price === "number" && item.price > 0
                  ? `฿${item.price.toLocaleString()}`
                  : item.priceFormatted || "ติดต่อสอบถามราคา"}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
