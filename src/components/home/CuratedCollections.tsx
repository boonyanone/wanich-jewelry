"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Sparkles, ArrowRight } from "lucide-react";

export default function CuratedCollections() {
  const collections = [
    {
      id: "bangles",
      name: "กำไลเงินแท้ 925 & น่านโบราณ",
      nameEn: "Nan Heritage Bangles",
      desc: "ตอกลายดอกพิกุล ลายหัวบัว และลายรังผึ้งเอกลักษณ์ช่างน่าน",
      image: "/images/products/prod-1912-1.jpg",
      href: "/catalog?cat=กำไล",
      count: "48+ ชิ้นงาน",
    },
    {
      id: "bracelets",
      name: "สร้อยข้อมือเงินแท้ 925",
      nameEn: "Classic Chain Bracelets",
      desc: "ลายโซ่ตันคลาสสิก ลายถักเปีย และงานรมดำสไตล์ล้านนา",
      image: "/images/products/prod-1941-1.jpg",
      href: "/catalog?cat=สร้อยข้อมือ",
      count: "29+ ดีไซน์",
    },
    {
      id: "onyx",
      name: "กำไลหินแท้โอนิกซ์ฝังทับทิม",
      nameEn: "Onyx Gemstone Series",
      desc: "ครอบกรอบเงินแท้ 95% ฝังทับทิมแท้ เสริมพลังบารมีและโชคลาภ",
      image: "/images/products/prod-1925-1.jpg",
      href: "/catalog?cat=โอนิกซ์",
      count: "16 แบบมงคล",
    },
    {
      id: "belts",
      name: "เข็มขัดเงินแท้โบราณ",
      nameEn: "Traditional Silver Belts",
      desc: "งานถักเปียและตอกลาย สำหรับชุดไทยพระราชนิยมและชุดไทยล้านนา",
      image: "/images/products/prod-1939-1.jpg",
      href: "/catalog?cat=เข็มขัด",
      count: "12+ ลวดลาย",
    },
    {
      id: "rings",
      name: "แหวนเงินแท้ & พลอยมงคล",
      nameEn: "Silver & Gemstone Rings",
      desc: "แหวนตอกลายโบราณ แหวนเงินเกลี้ยงขัดเงา และแหวนฝังพลอยแท้",
      image: "/images/products/prod-2248-1.jpg",
      href: "/catalog?cat=แหวน",
      count: "35+ แบบ",
    },
    {
      id: "woven",
      name: "กำไลสานเงินแท้ 925",
      nameEn: "Woven Heritage Bangles",
      desc: "กำไลลายสานเสื่อโบราณ และงานดัดกลีบดอกไม้เงินแท้ 925 วิจิตรพิสดาร",
      image: "/images/products/prod-1947-1.jpg",
      href: "/catalog?cat=กำไล",
      count: "28+ ลวดลาย",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#0B0B0D] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-[#C5A059]/40 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-[#E5C378]" />
              <span className="text-[11px] font-semibold text-[#E5C378] tracking-widest uppercase">
                LES COLLECTIONS DE LA MAISON
              </span>
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-5xl font-light text-white tracking-tight">
              คอลเลกชันเครื่องประดับแยกตามหมวดหมู่
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-xl">
              คัดสรรสุดยอดผลงานหัตถศิลป์เงินแท้ 925 แห่งเมืองน่าน ประณีต งดงาม และทรงคุณค่า
            </p>
          </div>

          <Link
            href="/catalog"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#E5C378] hover:text-[#F3E5AB] group"
          >
            <span>สำรวจสินค้าทั้งหมดในคลัง</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
          </Link>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {collections.map((col) => (
            <Link
              key={col.id}
              href={col.href}
              className="group jewelry-podium relative rounded-2xl p-4 sm:p-5 border border-white/10 hover:border-[#C5A059]/70 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative aspect-square w-full rounded-xl bg-[#18181D]/80 p-3 mb-3.5 flex items-center justify-center overflow-hidden border border-white/5">
                <Image
                  src={col.image}
                  alt={col.name}
                  fill
                  className="object-contain p-1 group-hover:scale-115 transition-transform duration-500 ease-out"
                />
              </div>

              <div className="space-y-1.5">
                <span className="text-[9px] uppercase font-mono text-[#E5C378] block">
                  {col.count}
                </span>
                <h3 className="font-heading-th text-xs font-semibold text-white group-hover:text-[#E5C378] transition-colors line-clamp-1">
                  {col.name}
                </h3>
                <span className="text-[10px] text-zinc-400 block line-clamp-1 font-serif-luxury italic">
                  {col.nameEn}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
