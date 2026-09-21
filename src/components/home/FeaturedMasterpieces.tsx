"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";
import { Product } from "@/types/jewelry";
import productsData from "@/data/products.json";
import ProductCard from "@/components/catalog/ProductCard";
import ProductDetailModal from "@/components/catalog/ProductDetailModal";

export default function FeaturedMasterpieces() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = [
    { id: "all", label: "ทั้งหมด" },
    { id: "กำไล", label: "กำไลเงินแท้" },
    { id: "สร้อยข้อมือ", label: "สร้อยข้อมือ" },
    { id: "เข็มขัด", label: "เข็มขัดเงินโบราณ" },
    { id: "แหวน", label: "แหวน & พลอย" },
    { id: "โอนิกซ์", label: "กำไลโอนิกซ์" },
  ];

  const allProducts: Product[] = productsData as Product[];

  const filteredProducts =
    selectedCategory === "all"
      ? allProducts.slice(0, 8)
      : allProducts
          .filter(
            (p) =>
              p.category.includes(selectedCategory) ||
              p.title.includes(selectedCategory)
          )
          .slice(0, 8);

  return (
    <section className="py-24 bg-[#0D0D11] border-y border-white/10 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Category Filters */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          <div className="text-center md:text-left space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-[#C5A059]/40">
              <Sparkles className="w-3.5 h-3.5 text-[#E5C378]" />
              <span className="text-xs font-semibold text-[#E5C378] uppercase tracking-wider">
                SIGNATURE MASTERPIECE SELECTION
              </span>
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-5xl font-light text-white">
              ผลงานชิ้นเอกที่คัดสรร
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400">
              เครื่องประดับเงินแท้ 925 ลวดลายวิจิตรบรรจง พร้อมให้คุณครอบครองและส่งต่อ
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                  selectedCategory === cat.id
                    ? "bg-gradient-to-r from-[#F3E5AB] via-[#E5C378] to-[#C5A059] text-[#0B0B0D] font-semibold shadow-md"
                    : "bg-white/5 text-zinc-300 hover:text-white border border-white/10 hover:border-[#C5A059]/50"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={(p) => {
                setSelectedProduct(p);
                setIsModalOpen(true);
              }}
            />
          ))}
        </div>

        {/* View All CTA */}
        <div className="mt-14 text-center">
          <Link
            href="/catalog"
            className="glint-effect inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs font-semibold text-[#0B0B0D] bg-gradient-to-r from-[#F3E5AB] via-[#E5C378] to-[#C5A059] hover:brightness-110 shadow-lg transition-all"
          >
            <span>ชมแคตตาล็อกสินค้าทั้งหมด ({allProducts.length} รายการ)</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
