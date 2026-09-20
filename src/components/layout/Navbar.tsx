"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, MessageCircle, Menu, X, Sparkles, TrendingUp } from "lucide-react";
import brandData from "@/data/brand.json";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "หน้าแรก", href: "/" },
    { name: "คอลเลกชันเครื่องเงิน", href: "/catalog" },
    { name: "สั่งทำพิเศษ (Bespoke)", href: "/bespoke" },
    { name: "ราคากระดานเงินสด", href: "/silver-price" },
    { name: "เรื่องราวของเรา", href: "/about" },
    { name: "ติดต่อโชว์รูม", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Notification Bar */}
      <div className="bg-[#18181B] text-[#FAF8F5] text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#10B981] animate-pulse"></span>
            <span className="font-light text-zinc-300">
              รับประกันเงินแท้ 92.5% - 95% หัตถศิลป์เครื่องเงินน่านมาตรฐานส่งออกกว่า 20 ปี
            </span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-zinc-300">
            <a
              href="tel:088-260-4198"
              className="flex items-center gap-1.5 hover:text-[#C5A059] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>088-260-4198</span>
            </a>
            <a
              href={brandData.lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-[#C5A059] transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#10B981]" />
              <span>LINE: {brandData.lineId}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-[#E5C378]/30 py-3"
            : "bg-white/85 backdrop-blur-sm border-b border-zinc-200/60 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 overflow-hidden rounded-full border border-[#C5A059]/40 p-0.5 bg-[#FAF8F5]">
              <Image
                src="/images/logo.png"
                alt="Wanich Jewelry Logo"
                fill
                className="object-contain p-1 group-hover:scale-105 transition-transform"
              />
            </div>
            <div>
              <span className="font-serif-luxury text-xl sm:text-2xl font-semibold tracking-wider text-[#18181B] block leading-none">
                WANICH <span className="text-[#C5A059] font-normal">JEWELRY</span>
              </span>
              <span className="text-[10px] tracking-[0.2em] text-[#71717A] uppercase font-light block mt-0.5">
                Nan Sterling Silver 925
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-[#27272A] hover:text-[#C5A059] transition-colors relative py-1 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C5A059] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/silver-price"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-[#8C7034] bg-[#FAF8F5] border border-[#E5C378]/50 hover:bg-[#F5EED9] transition-colors"
            >
              <TrendingUp className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>กระดานราคาเงิน</span>
            </Link>

            <a
              href={brandData.lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium text-white bg-gradient-to-r from-[#B8934A] to-[#D4AF37] hover:from-[#A47F35] hover:to-[#C5A059] shadow-sm hover:shadow transition-all"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>นัดหมาย VIP</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#27272A] hover:text-[#C5A059] focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white/98 border-t border-[#E5C378]/30 px-4 pt-3 pb-6 space-y-3 shadow-xl">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-base font-medium text-[#27272A] hover:text-[#C5A059] py-2 border-b border-zinc-100"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-2 flex flex-col gap-2">
              <a
                href={brandData.lineUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-2.5 rounded-lg text-sm font-medium text-white bg-[#06C755] flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>ปรึกษาผ่าน LINE: {brandData.lineId}</span>
              </a>
              <a
                href="tel:088-260-4198"
                className="w-full text-center py-2.5 rounded-lg text-sm font-medium text-[#18181B] bg-[#FAF8F5] border border-zinc-200 flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#C5A059]" />
                <span>โทรด่วน: 088-260-4198</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
