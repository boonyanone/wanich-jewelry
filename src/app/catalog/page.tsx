"use client";

import React, { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Product } from "@/types/jewelry";
import productsData from "@/data/products.json";
import ProductCard from "@/components/catalog/ProductCard";
import ProductDetailModal from "@/components/catalog/ProductDetailModal";
import CatalogSidebar, { CategoryItem } from "@/components/catalog/CatalogSidebar";
import CatalogToolbar, { ViewMode } from "@/components/catalog/CatalogToolbar";
import QuickPillFilters, { QuickFilterPill } from "@/components/catalog/QuickPillFilters";

function CatalogContent() {
  const searchParams = useSearchParams();
  const initialCat = searchParams.get("cat") || "all";

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(initialCat);
  const [activePillId, setActivePillId] = useState("all");
  const [sortBy, setSortBy] = useState("default");
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const allProducts: Product[] = productsData as Product[];

  const categories: CategoryItem[] = useMemo(() => {
    const rawCategories = [
      { id: "all", label: "ทั้งหมด", en: "All Pieces" },
      { id: "กำไล", label: "กำไลเงินแท้", en: "Sterling Bangles" },
      { id: "สร้อยข้อมือ", label: "สร้อยข้อมือ", en: "Chain Bracelets" },
      { id: "เข็มขัด", label: "เข็มขัดเงินโบราณ", en: "Heritage Belts" },
      { id: "แหวน", label: "แหวนเงิน & พลอย", en: "Gemstone Rings" },
      { id: "ต่างหู", label: "ต่างหูเงินแท้", en: "Silver Earrings" },
      { id: "โอนิกซ์", label: "กำไลโอนิกซ์ทับทิม", en: "Onyx & Ruby" },
    ];

    return rawCategories.map((cat) => {
      const count =
        cat.id === "all"
          ? allProducts.length
          : allProducts.filter(
              (p) =>
                p.category.toLowerCase().includes(cat.id) ||
                p.title.toLowerCase().includes(cat.id)
            ).length;
      return { ...cat, count };
    });
  }, [allProducts]);

  const handleClearAll = () => {
    setSelectedCategory("all");
    setSearchQuery("");
    setActivePillId("all");
  };

  const handlePillSelect = (pill: QuickFilterPill) => {
    if (activePillId === pill.id) {
      handleClearAll();
      return;
    }
    setActivePillId(pill.id);
    if (pill.id === "all") {
      handleClearAll();
    } else {
      setSelectedCategory("all");
      setSearchQuery(pill.query);
    }
  };

  const isFiltered = selectedCategory !== "all" || searchQuery !== "" || activePillId !== "all";

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
          p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (p.description && p.description.toLowerCase().includes(searchQuery.toLowerCase()));

        return matchesCat && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === "price-low") return (a.price || 0) - (b.price || 0);
        if (sortBy === "price-high") return (b.price || 0) - (a.price || 0);
        if (sortBy === "name") return a.title.localeCompare(b.title);
        return 0;
      });
  }, [allProducts, selectedCategory, searchQuery, sortBy]);

  const activeCategoryObj = categories.find((c) => c.id === selectedCategory);
  const activeLabel = activeCategoryObj ? activeCategoryObj.label : "ทั้งหมด";

  const gridClass =
    viewMode === "lookbook"
      ? "grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
      : viewMode === "compact"
      ? "grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5"
      : "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6";

  return (
    <div className="pt-28 pb-24 bg-[#0B0B0D] min-h-screen text-white">
      {/* Editorial Header */}
      <div className="bg-[#0E0E12] border-b border-white/5 py-7 mb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-1.5">
          <span className="text-[9px] tracking-[0.25em] text-[#C5A059] uppercase font-mono block">
            WANICH JEWELRY COLLECTION
          </span>
          <h1 className="font-brand-en text-xl sm:text-2xl font-light text-white tracking-wide">
            คอลเลกชันเครื่องประดับเงินแท้
          </h1>
          <p className="text-[11.5px] text-zinc-400 max-w-lg mx-auto font-light">
            เครื่องเงินน่าน กำไลตอกลายโบราณ สร้อยข้อมือ และเครื่องประดับเงินแท้ 92.5%
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Left Category Sidebar */}
          <CatalogSidebar
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={(id) => {
              setSelectedCategory(id);
              setActivePillId("all");
            }}
            isOpenMobile={mobileFilterOpen}
            onCloseMobile={() => setMobileFilterOpen(false)}
          />

          {/* Right Product Grid Column */}
          <main className="flex-1 w-full min-w-0">
            <CatalogToolbar
              searchQuery={searchQuery}
              onSearchChange={(q) => {
                setSearchQuery(q);
                setActivePillId("all");
              }}
              sortBy={sortBy}
              onSortChange={setSortBy}
              totalCount={filteredProducts.length}
              onOpenMobileFilters={() => setMobileFilterOpen(true)}
              activeCategoryLabel={activeLabel}
              viewMode={viewMode}
              onViewModeChange={setViewMode}
            />

            {/* Quick Material & Gemstone Filters */}
            <QuickPillFilters
              activePillId={activePillId}
              onSelectPill={handlePillSelect}
              onClearAll={handleClearAll}
              isFiltered={isFiltered}
            />

            {/* Products Grid / Lookbook */}
            {filteredProducts.length > 0 ? (
              <div className={gridClass}>
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    viewMode={viewMode}
                    onQuickView={(p) => {
                      setSelectedProduct(p);
                      setIsModalOpen(true);
                    }}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-[#121217] rounded-3xl border border-white/10 p-8 space-y-4">
                <p className="text-sm font-medium text-zinc-200">ไม่พบชิ้นงานตามเงื่อนไขที่ค้นหา</p>
                <p className="text-xs text-zinc-400 max-w-sm mx-auto">
                  สามารถกดปุ่มด้านล่างเพื่อแสดงรายการเครื่องประดับทั้งหมดในร้าน
                </p>
                <button
                  type="button"
                  onClick={handleClearAll}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-medium text-[#0B0B0D] bg-gradient-to-r from-[#F3E5AB] via-[#E5C378] to-[#C5A059] hover:brightness-110 transition-all shadow-md cursor-pointer"
                >
                  แสดงชิ้นงานทั้งหมด
                </button>
              </div>
            )}
          </main>
        </div>
      </div>

      <ProductDetailModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}

export default function CatalogPage() {
  return (
    <Suspense fallback={<div className="pt-32 text-center text-xs text-zinc-500">กำลังโหลดแคตตาล็อก...</div>}>
      <CatalogContent />
    </Suspense>
  );
}
