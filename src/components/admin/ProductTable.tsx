import React from "react";
import Image from "next/image";
import { Edit2, Trash2 } from "lucide-react";
import { Product } from "@/types/jewelry";

interface ProductTableProps {
  products: Product[];
  onEdit: (product: Product) => void;
  onDelete: (id: string) => void;
}

export default function ProductTable({ products, onEdit, onDelete }: ProductTableProps) {
  return (
    <div className="bg-white rounded-2xl border border-zinc-200/80 shadow-xs overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-xs text-left">
          <thead className="bg-[#FAF8F5] border-b border-zinc-200 text-zinc-500 uppercase tracking-wider">
            <tr>
              <th className="py-3.5 px-4">รูปภาพ</th>
              <th className="py-3.5 px-4">รหัส / ชื่อสินค้า</th>
              <th className="py-3.5 px-4">หมวดหมู่</th>
              <th className="py-3.5 px-4 text-right">ราคา</th>
              <th className="py-3.5 px-4 text-center">จัดการ</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-100">
            {products.map((p) => (
              <tr key={p.id} className="hover:bg-[#FAF8F5]/80 transition-colors">
                <td className="py-3 px-4">
                  <div className="relative w-12 h-12 rounded-lg border border-zinc-200 bg-white p-1 overflow-hidden shrink-0">
                    <Image src={p.image} alt="" fill className="object-contain" />
                  </div>
                </td>
                <td className="py-3 px-4">
                  <p className="font-mono text-zinc-400 text-[11px]">{p.sku}</p>
                  <p className="font-semibold text-[#18181B] text-xs line-clamp-1">{p.title}</p>
                </td>
                <td className="py-3 px-4">
                  <span className="inline-block px-2.5 py-1 rounded-full bg-[#FAF8F5] border border-zinc-200 text-[11px] font-medium text-zinc-700">
                    {p.category}
                  </span>
                </td>
                <td className="py-3 px-4 text-right font-serif-luxury font-bold text-[#B8934A] text-sm">
                  {p.priceFormatted}
                </td>
                <td className="py-3 px-4 text-center">
                  <div className="flex items-center justify-center gap-2">
                    <button
                      onClick={() => onEdit(p)}
                      className="p-1.5 rounded-lg border border-zinc-200 bg-white text-zinc-700 hover:text-[#C5A059] hover:bg-[#FAF8F5]"
                      title="แก้ไขสินค้า"
                    >
                      <Edit2 className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => onDelete(p.id)}
                      className="p-1.5 rounded-lg border border-zinc-200 bg-white text-red-500 hover:bg-red-50"
                      title="ลบสินค้า"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
