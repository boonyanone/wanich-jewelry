import React from "react";
import { X, Save } from "lucide-react";
import { Product } from "@/types/jewelry";

interface ProductEditModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onSave: (e: React.FormEvent) => void;
  onChange: (updated: Product) => void;
}

export default function ProductEditModal({
  product,
  isOpen,
  onClose,
  onSave,
  onChange,
}: ProductEditModalProps) {
  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-[#C5A059]/40 p-6 sm:p-8 space-y-6 my-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-zinc-400 hover:text-zinc-700"
        >
          <X className="w-5 h-5" />
        </button>

        <div>
          <h2 className="font-serif-luxury text-xl font-bold text-[#18181B]">
            {product.id ? "แก้ไขข้อมูลสินค้า" : "เพิ่มสินค้าใหม่"}
          </h2>
          <p className="text-xs text-zinc-500">รหัสอ้างอิง: {product.sku}</p>
        </div>

        <form onSubmit={onSave} className="space-y-4 text-xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold mb-1">รหัสสินค้า (SKU)</label>
              <input
                type="text"
                value={product.sku}
                onChange={(e) => onChange({ ...product, sku: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-zinc-200 bg-[#FAF8F5]"
                required
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">หมวดหมู่</label>
              <select
                value={product.category}
                onChange={(e) => onChange({ ...product, category: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-zinc-200 bg-[#FAF8F5]"
              >
                <option>กำไลเงินแท้ 925</option>
                <option>สร้อยข้อมือเงินแท้ 925</option>
                <option>เข็มขัดเงินแท้โบราณ</option>
                <option>แหวนเงินแท้ & พลอย</option>
                <option>ต่างหูเงินแท้ 925</option>
                <option>สร้อยคอเงินแท้</option>
                <option>กำไลหินโอนิกซ์ฝังทับทิม</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block font-semibold mb-1">ชื่อสินค้า (Title)</label>
            <input
              type="text"
              value={product.title}
              onChange={(e) => onChange({ ...product, title: e.target.value })}
              className="w-full p-2.5 rounded-xl border border-zinc-200 bg-[#FAF8F5]"
              required
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold mb-1">ราคา (บาท)</label>
              <input
                type="number"
                value={product.price || 0}
                onChange={(e) => {
                  const val = parseFloat(e.target.value) || 0;
                  onChange({
                    ...product,
                    price: val,
                    priceFormatted: val > 0 ? `฿${val.toLocaleString()}` : "ติดต่อสอบถามราคา",
                  });
                }}
                className="w-full p-2.5 rounded-xl border border-zinc-200 bg-[#FAF8F5]"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">มาตรฐานเนื้อเงิน</label>
              <input
                type="text"
                value={product.purity}
                onChange={(e) => onChange({ ...product, purity: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-zinc-200 bg-[#FAF8F5]"
              />
            </div>
          </div>

          <div>
            <label className="block font-semibold mb-1">ที่อยู่รูปภาพ (Image URL)</label>
            <input
              type="text"
              value={product.image}
              onChange={(e) =>
                onChange({
                  ...product,
                  image: e.target.value,
                  images: [e.target.value],
                })
              }
              className="w-full p-2.5 rounded-xl border border-zinc-200 bg-[#FAF8F5] font-mono"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">รายละเอียดสินค้า (Description)</label>
            <textarea
              rows={3}
              value={product.description}
              onChange={(e) => onChange({ ...product, description: e.target.value })}
              className="w-full p-2.5 rounded-xl border border-zinc-200 bg-[#FAF8F5]"
            />
          </div>

          <div className="pt-2 flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-medium border border-zinc-300 text-zinc-700 hover:bg-zinc-100"
            >
              ยกเลิก
            </button>
            <button
              type="submit"
              className="px-6 py-2 rounded-xl text-xs font-semibold text-white bg-[#18181B] hover:bg-zinc-800 flex items-center gap-1.5 shadow"
            >
              <Save className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>บันทึกข้อมูล</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
