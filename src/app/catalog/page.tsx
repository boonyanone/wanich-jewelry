"use client";

import React, { useState, useMemo } from "react";
import { Sparkles } from "lucide-react";
import { Product } from "@/types/jewelry";
import productsData from "@/data/products.json";
import ProductCard from "@/components/catalog/ProductCard";
import ProductDetailModal from "@/components/catalog/ProductDetailModal";
import CatalogFilterBar from "@/components/catalog/CatalogFilterBar";

export default function CatalogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("default");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const allProducts: Product[] = productsData as Product[];

  const categories = [
    { id: "all", label: "ทั้งหมด" },
    { id: "กำไล", label: "กำไลเงินแท้ (Bangles)" },
    { id: "สร้อยข้อมือ", label: "สร้อยข้อมือ (Bracelets)" },
    { id: "เข็มขัด", label: "เข็มขัดเงินโบราณ (Belts)" },
    { id: "แหวน", label: "แหวนเงิน & พลอย (Rings)" },
    { id: "ต่างหู", label: "ต่างหู (Earrings)" },
    { id: "โอนิกซ์", label: "กำไลโอนิกซ์ทับทิม (Onyx)" },
  ];

  const filteredProducts = useMemo(() => {
    return allProducts
      .filter((p) => {
        const matchesCat =
          selectedCategory === "all" ||
          p.category.toLowerCase().includes(selectedCategory.toLowerCase()) ||
          p.title.toLowerCase().includes(selectedCategory.toLowerCase());

        const matchesSearch =
          searchQuery === "" ||
          p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.sku.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.category.toLowerCase().includes(searchQuery.toLowerCase());

        return matchesCat && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === "price-low") return (a.price || 0) - (b.price || 0);
        if (sortBy === "price-high") return (b.price || 0) - (a.price || 0);
        if (sortBy === "name") return a.title.localeCompare(b.title);
        return 0;
      });
  }, [allProducts, selectedCategory, searchQuery, sortBy]);

  return (
    <div className="pt-28 pb-20 bg-[#FAF8F5] min-h-screen">
      <div className="bg-white border-b border-zinc-200/80 py-12 mb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF8F5] border border-[#C5A059]/40">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            <span className="text-xs font-semibold text-[#8C7034] uppercase tracking-wider">
              Jewelry Catalog & Collections
            </span>
          </div>
          <h1 className="font-serif-luxury text-3xl sm:text-5xl font-light text-[#18181B]">
            คอลเลกชันเครื่องประดับเงินแท้ 925
          </h1>
          <p className="text-xs sm:text-sm text-[#71717A] max-w-2xl mx-auto">
            รวมงานหัตถศิลป์เครื่องเงินน่านโบราณ กำไลตอกลาย สร้อยข้อมือโซ่ และงานอัญมณีแท้ {allProducts.length} รายการ
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CatalogFilterBar
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          sortBy={sortBy}
          onSortChange={setSortBy}
          totalCount={filteredProducts.length}
          categories={categories}
        />

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl border border-zinc-200 p-8 space-y-3">
            <p className="text-base font-semibold text-zinc-700">ไม่พบสินค้าตามเงื่อนไขที่ค้นหา</p>
            <p className="text-xs text-zinc-500">ลองล้างคำค้นหาหรือเลือกหมวดหมู่อื่นดูนะครับ</p>
          </div>
        )}
      </div>

      <ProductDetailModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
