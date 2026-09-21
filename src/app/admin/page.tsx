"use client";

import React, { useState, useEffect } from "react";
import { Package, TrendingUp, CheckCircle2 } from "lucide-react";
import { Product, SilverPriceData } from "@/types/jewelry";
import brandData from "@/data/brand.json";
import AdminHeader from "@/components/admin/AdminHeader";
import ProductSearchBar from "@/components/admin/ProductSearchBar";
import ProductTable from "@/components/admin/ProductTable";
import ProductEditModal from "@/components/admin/ProductEditModal";
import SilverPriceEditor from "@/components/admin/SilverPriceEditor";

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<"products" | "silver">("products");
  const [products, setProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [notification, setNotification] = useState<string | null>(null);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [silverPrice, setSilverPrice] = useState<SilverPriceData>(brandData.silverPriceDefault);
  const [isSavingPrice, setIsSavingPrice] = useState(false);

  const fetchProducts = async () => {
    try {
      const res = await fetch("/api/products");
      const data = await res.json();
      setProducts(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const showToast = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3000);
  };

  const handleSaveProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingProduct) return;
    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editingProduct),
      });
      if (res.ok) {
        showToast("บันทึกข้อมูลสินค้าเรียบร้อยแล้ว!");
        setIsModalOpen(false);
        fetchProducts();
      }
    } catch {
      alert("เกิดข้อผิดพลาดในการบันทึก");
    }
  };

  const handleDeleteProduct = async (id: string) => {
    if (!confirm("คุณแน่ใจหรือไม่ว่าต้องการลบสินค้ารายการนี้?")) return;
    try {
      const res = await fetch(`/api/products?id=${id}`, { method: "DELETE" });
      if (res.ok) {
        showToast("ลบสินค้าเรียบร้อยแล้ว!");
        fetchProducts();
      }
    } catch {
      alert("เกิดข้อผิดพลาดในการลบ");
    }
  };

  const handleSaveSilverPrice = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSavingPrice(true);
    try {
      const res = await fetch("/api/silver-price", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(silverPrice),
      });
      if (res.ok) showToast("อัปเดตราคากระดานเงินเรียบร้อยแล้ว!");
    } finally {
      setIsSavingPrice(false);
    }
  };

  const handleAddNew = () => {
    setEditingProduct({
      id: Date.now().toString(),
      sku: `WNJ-${Date.now().toString().slice(-4)}`,
      title: "",
      slug: "",
      category: "กำไลเงินแท้ 925",
      categoryEn: "Bangles",
      price: 0,
      priceFormatted: "ติดต่อสอบถามราคา",
      description: "เครื่องเงินแท้ 925 มาตรฐานหัตถศิลป์ช่างเงินเมืองน่าน 20 ปี",
      shortExcerpt: "",
      image: "/images/products/prod-1912-1.jpg",
      images: ["/images/products/prod-1912-1.jpg"],
      isFeatured: false,
      purity: "เงินแท้ 92.5% (Sterling Silver 925)",
      craftsmanship: "หัตถศิลป์ช่างเงินเมืองน่าน 20 ปี",
    });
    setIsModalOpen(true);
  };

  const filteredProducts = products.filter(
    (p) =>
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.sku.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="pt-28 pb-20 bg-[#0B0B0D] min-h-screen text-white">
      {notification && (
        <div className="fixed top-24 right-6 z-50 px-4 py-3 rounded-xl bg-[#14141C] text-white text-xs flex items-center gap-2 shadow-2xl border border-[#C5A059]">
          <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
          <span>{notification}</span>
        </div>
      )}

      <AdminHeader />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex gap-2 border-b border-white/10 pb-3">
          <button
            onClick={() => setActiveTab("products")}
            className={`px-4 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all ${
              activeTab === "products"
                ? "bg-gradient-to-r from-[#F3E5AB] via-[#E5C378] to-[#C5A059] text-[#0B0B0D]"
                : "bg-white/5 text-zinc-400 hover:text-white border border-white/10"
            }`}
          >
            <Package className="w-4 h-4" />
            <span>จัดการสินค้า ({products.length})</span>
          </button>
          <button
            onClick={() => setActiveTab("silver")}
            className={`px-4 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all ${
              activeTab === "silver"
                ? "bg-gradient-to-r from-[#F3E5AB] via-[#E5C378] to-[#C5A059] text-[#0B0B0D]"
                : "bg-white/5 text-zinc-400 hover:text-white border border-white/10"
            }`}
          >
            <TrendingUp className="w-4 h-4" />
            <span>อัปเดตราคากระดานเงินสด</span>
          </button>
        </div>

        {activeTab === "products" && (
          <div className="space-y-6">
            <ProductSearchBar
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              onAddNew={handleAddNew}
            />
            <ProductTable
              products={filteredProducts}
              onEdit={(p) => {
                setEditingProduct(p);
                setIsModalOpen(true);
              }}
              onDelete={handleDeleteProduct}
            />
          </div>
        )}

        {activeTab === "silver" && (
          <SilverPriceEditor
            silverPrice={silverPrice}
            isSaving={isSavingPrice}
            onPriceChange={setSilverPrice}
            onSave={handleSaveSilverPrice}
          />
        )}
      </div>

      <ProductEditModal
        product={editingProduct}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveProduct}
        onChange={setEditingProduct}
      />
    </div>
  );
}
