"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, MessageCircle, Menu, X, ShoppingBag, Search } from "lucide-react";
import brandData from "@/data/brand.json";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalItems, setIsCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "หน้าแรก", href: "/" },
    { name: "คอลเลกชัน", href: "/catalog" },
    { name: "สั่งทำพิเศษ", href: "/bespoke" },
    { name: "ราคากระดานเงิน", href: "/silver-price" },
    { name: "ประวัติแบรนด์", href: "/about" },
    { name: "โชว์รูม", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Announcement Bar - Minimalist Luxury */}
      <div className="bg-[#050507] text-zinc-400 text-[11px] py-1.5 px-4 border-b border-[#C5A059]/15">
        <div className="max-w-7xl mx-auto flex justify-between items-center tracking-wider">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E5C378] animate-pulse" />
            <span className="text-zinc-300 font-light">
              WANICH ATELIER · หัตถศิลป์เครื่องเงินน่าน & จิวเวลรี่ชั้นสูง
            </span>
          </div>
          <div className="hidden md:flex items-center gap-5 text-[11px] text-zinc-400">
            <a href="tel:088-260-4198" className="hover:text-[#E5C378] transition-colors flex items-center gap-1.5">
              <Phone className="w-3 h-3 text-[#C5A059]" />
              <span>088-260-4198</span>
            </a>
            <span className="text-white/10">|</span>
            <a href={brandData.lineUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#E5C378] transition-colors flex items-center gap-1.5">
              <MessageCircle className="w-3 h-3 text-[#22c55e]" />
              <span>LINE: {brandData.lineId}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Luxury Navigation Bar */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? "bg-[#0B0B0D]/95 backdrop-blur-md shadow-2xl border-b border-[#C5A059]/25 py-3"
            : "bg-[#0B0B0D]/85 backdrop-blur-md border-b border-white/5 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Brand Identity */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative w-8 h-8 rounded-full border border-[#C5A059]/40 p-0.5 bg-[#121217] shadow-md">
              <Image
                src="/images/logo.png"
                alt="Wanich Jewelry Logo"
                fill
                className="object-contain p-0.5 group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div>
              <span className="font-brand-en text-sm sm:text-base tracking-[0.14em] text-white block leading-none font-medium">
                WANICH <span className="text-[#E5C378] font-serif italic text-xs sm:text-sm">JEWELRY</span>
              </span>
              <span className="text-[7.5px] sm:text-[8px] tracking-[0.32em] text-zinc-400 uppercase font-light block mt-0.5 font-mono">
                HAUTE JOAILLERIE
              </span>
            </div>
          </Link>

          {/* Desktop Links with Refined Typography */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[12px] font-light text-zinc-300 hover:text-[#E5C378] transition-colors relative py-1 group tracking-wider"
              >
                {link.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#E5C378] to-transparent transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Actions & Utilities */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            <Link
              href="/catalog"
              className="p-1.5 text-zinc-400 hover:text-[#E5C378] transition-colors"
              title="ค้นหาคอลเลกชัน"
            >
              <Search className="w-3.5 h-3.5" />
            </Link>

            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-1.5 text-zinc-400 hover:text-[#E5C378] transition-colors"
              title="รายการชิ้นงานที่เลือก"
              aria-label="ตะกร้าสินค้า"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              {totalItems > 0 && (
                <span className="absolute top-0.5 right-0.5 w-3.5 h-3.5 rounded-full bg-gradient-to-r from-[#C5A059] to-[#E5C378] text-[#0B0B0D] text-[8.5px] font-bold flex items-center justify-center shadow-md">
                  {totalItems}
                </span>
              )}
            </button>

            <a
              href={brandData.lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-medium text-[#0B0B0D] bg-gradient-to-r from-[#F3E5AB] via-[#E5C378] to-[#C5A059] hover:brightness-110 shadow-sm transition-all"
            >
              <MessageCircle className="w-3 h-3" />
              <span>ปรึกษาช่างทอง</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-zinc-300 hover:text-[#E5C378]"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0D0D11]/98 border-t border-[#C5A059]/20 px-6 pt-3 pb-6 space-y-2 shadow-2xl">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between text-sm font-light text-zinc-200 hover:text-[#E5C378] py-2.5 border-b border-white/5"
              >
                <span>{link.name}</span>
                <span className="text-zinc-600 text-xs font-mono">→</span>
              </Link>
            ))}
            <div className="pt-3">
              <a
                href={brandData.lineUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl text-xs font-medium text-white bg-[#06C755] flex items-center justify-center gap-2 shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>แชท LINE OA: {brandData.lineId}</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
