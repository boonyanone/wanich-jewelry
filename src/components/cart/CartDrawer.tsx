"use client";

import React from "react";
import Image from "next/image";
import { X, Trash2, Plus, Minus, MessageCircle, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import brandData from "@/data/brand.json";

export default function CartDrawer() {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, totalItems, totalAmount } =
    useCart();

  if (!isCartOpen) return null;

  const generateLineMessage = () => {
    let msg = `💎 วานิชจิวเวลรี่: สนใจสั่งซื้อสินค้า (${totalItems} ชิ้น)\n\n`;
    cart.forEach((item, idx) => {
      msg += `${idx + 1}. ${item.product.title}\n   รหัส: ${item.product.sku} | ${item.quantity} ชิ้น | ${(item.product.price * item.quantity).toLocaleString()} บาท\n`;
    });
    msg += `\nยอดรวมประมาณการ: ${totalAmount.toLocaleString()} บาท\nต้องการเช็กสต๊อกและการจัดส่งครับ`;
    return encodeURIComponent(msg);
  };

  const lineOrderUrl = `${brandData.lineUrl}?text=${generateLineMessage()}`;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-xs transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="relative w-full max-w-md bg-[#101014] text-white h-full shadow-2xl border-l border-[#C5A059]/30 flex flex-col z-10 animate-in slide-in-from-right duration-300">
        {/* Header */}
        <div className="p-5 border-b border-white/10 flex items-center justify-between bg-[#14141A]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-white/10 text-[#E5C378] border border-[#C5A059]/30 flex items-center justify-center">
              <ShoppingBag className="w-4 h-4" />
            </div>
            <div>
              <h2 className="font-serif-luxury text-base font-semibold text-white leading-tight">
                รายการชิ้นงานที่เลือก ({totalItems})
              </h2>
              <span className="text-[10px] text-zinc-400 block font-mono">
                Wanich Jewelry Selection
              </span>
            </div>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-1.5 rounded-full hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Item List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-3">
          {cart.length === 0 ? (
            <div className="text-center py-20 space-y-3">
              <div className="w-16 h-16 mx-auto rounded-full bg-white/5 border border-[#C5A059]/30 flex items-center justify-center text-[#E5C378]">
                <ShoppingBag className="w-7 h-7" />
              </div>
              <p className="text-sm font-semibold text-zinc-200">ยังไม่มีสินค้าในรายการ</p>
              <p className="text-xs text-zinc-400 max-w-xs mx-auto">
                เลือกชมเครื่องประดับเงินแท้ 925 หรือกำไลน่านโบราณแล้วกด &ldquo;เพิ่มลงในรายการ&rdquo;
              </p>
            </div>
          ) : (
            cart.map((item) => (
              <div
                key={item.product.id}
                className="flex gap-3.5 p-3 bg-[#18181F] rounded-xl border border-white/10 hover:border-[#C5A059]/40 transition-colors"
              >
                <div className="relative w-18 h-18 rounded-lg overflow-hidden shrink-0 border border-white/10 bg-[#101014]">
                  <Image
                    src={item.product.image}
                    alt={item.product.title}
                    fill
                    className="object-contain p-1"
                  />
                </div>

                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-[#E5C378]">
                      {item.product.sku}
                    </span>
                    <h3 className="text-xs font-semibold text-zinc-200 line-clamp-1">
                      {item.product.title}
                    </h3>
                    <p className="text-xs font-bold text-[#F3E5AB] mt-0.5">
                      {item.product.price > 0
                        ? `${(item.product.price * item.quantity).toLocaleString()} ฿`
                        : "ติดต่อสอบถาม"}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center gap-2 bg-[#101014] rounded-md border border-white/10 px-2 py-0.5">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="p-0.5 text-zinc-400 hover:text-white"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-xs font-semibold text-zinc-200">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="p-0.5 text-zinc-400 hover:text-white"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.product.id)}
                      className="text-zinc-500 hover:text-red-400 text-xs p-1 transition-colors"
                      title="ลบรายการ"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="p-5 border-t border-white/10 bg-[#14141A] space-y-3.5">
            <div className="space-y-1">
              <div className="flex justify-between text-xs text-zinc-400">
                <span>จำนวนรวม</span>
                <span className="font-medium text-white">{totalItems} ชิ้น</span>
              </div>
              <div className="flex justify-between text-sm font-semibold text-white pt-1 border-t border-white/10">
                <span>ราคารวมโดยประมาณ</span>
                <span className="text-[#F3E5AB] font-serif-luxury text-lg">
                  {totalAmount.toLocaleString()} บาท
                </span>
              </div>
            </div>

            <a
              href={lineOrderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="glint-effect flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-xl text-xs font-semibold text-white bg-[#06C755] hover:bg-[#05b34c] shadow-lg transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>ส่งรายการสรุป & สั่งซื้อทาง LINE OA</span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
