"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Sparkles, ArrowRight, Filter } from "lucide-react";
import { Product } from "@/types/jewelry";
import productsData from "@/data/products.json";
import ProductCard from "@/components/catalog/ProductCard";
import ProductDetailModal from "@/components/catalog/ProductDetailModal";

export default function FeaturedMasterpieces() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = [
    { id: "all", label: "ทั้งหมด (All)" },
    { id: "กำไล", label: "กำไลเงินแท้ (Bangles)" },
    { id: "สร้อยข้อมือ", label: "สร้อยข้อมือ (Bracelets)" },
    { id: "เข็มขัด", label: "เข็มขัดเงินโบราณ (Belts)" },
    { id: "แหวน", label: "แหวน & พลอย (Rings)" },
    { id: "โอนิกซ์", label: "กำไลโอนิกซ์ (Onyx)" },
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

  const handleQuickView = (prod: Product) => {
    setSelectedProduct(prod);
    setIsModalOpen(true);
  };

  return (
    <section className="py-20 bg-white border-y border-zinc-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Category Filters */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          <div className="text-center md:text-left space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF8F5] border border-[#C5A059]/40">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
              <span className="text-xs font-semibold text-[#8C7034] uppercase tracking-wider">
                Signature Collection
              </span>
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl font-light text-[#18181B]">
              ผลงานชิ้นเอกที่คัดสรร
            </h2>
            <p className="text-xs sm:text-sm text-[#71717A]">
              เครื่องประดับเงินแท้ 925 ลวดลายวิจิตรบรรจง พร้อมให้คุณครอบครอง
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
                    ? "bg-[#18181B] text-white shadow-sm"
                    : "bg-[#FAF8F5] text-[#52525B] hover:bg-[#F5EED9] hover:text-[#18181B] border border-zinc-200"
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
              onQuickView={handleQuickView}
            />
          ))}
        </div>

        {/* View All CTA */}
        <div className="mt-14 text-center">
          <Link
            href="/catalog"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-medium text-[#18181B] bg-[#FAF8F5] border border-[#C5A059]/50 hover:bg-[#F5EED9] hover:border-[#C5A059] shadow-xs hover:shadow transition-all"
          >
            <span>ชมแคตตาล็อกสินค้าทั้งหมด ({allProducts.length} รายการ)</span>
            <ArrowRight className="w-4 h-4 text-[#C5A059]" />
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
