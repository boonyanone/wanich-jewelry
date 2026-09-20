"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Sparkles, ArrowRight } from "lucide-react";

export default function CuratedCollections() {
  const collections = [
    {
      id: "bangles",
      name: "กำไลเงินแท้ 925 & กำไลน่าน",
      nameEn: "Nan Heritage Bangles",
      desc: "ตอกลายดอกพิกุลโบราณ ลายหัวบัว และลายรังผึ้งเอกลักษณ์ช่างน่าน",
      image: "/images/products/prod-1912-1.jpg",
      href: "/catalog?cat=bangles",
      count: "48+ ดีไซน์",
      tag: "คอลเลกชันยอดนิยม",
    },
    {
      id: "bracelets",
      name: "สร้อยข้อมือเงินแท้ 925",
      nameEn: "Classic Chain Bracelets",
      desc: "ลายโซ่ตันคลาสสิก ลายถักเปีย และงานรมดำสำหรับสุภาพบุรุษและสุภาพสตรี",
      image: "/images/products/prod-1941-1.jpg",
      href: "/catalog?cat=bracelets",
      count: "29+ ดีไซน์",
      tag: "Signature Chain",
    },
    {
      id: "onyx",
      name: "กำไลหินแท้โอนิกซ์ฝังทับทิม",
      nameEn: "Onyx Gemstone Series",
      desc: "ครอบกรอบเงินแท้ 95% ฝังทับทิมแท้ เสริมพลังมงคลและบารมี",
      image: "/images/products/prod-1925-1.jpg",
      href: "/catalog?cat=onyx",
      count: "16 เฉดสีมงคล",
      tag: "Prestige Gemstone",
    },
    {
      id: "belts",
      name: "เข็มขัดเงินแท้โบราณ",
      nameEn: "Traditional Silver Belts",
      desc: "งานถักเปียและตอกลายวิจิตร สำหรับชุดไทยพระราชนิยมและชุดไทยล้านนา",
      image: "/images/products/prod-1939-1.jpg",
      href: "/catalog?cat=belts",
      count: "12+ ลวดลาย",
      tag: "Master Craft",
    },
  ];

  return (
    <section className="py-20 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#C5A059]/40">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            <span className="text-xs font-medium text-[#8C7034] tracking-wider uppercase">
              Curated Masterpieces
            </span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl font-light text-[#18181B]">
            หมวดหมู่เครื่องประดับเอกลักษณ์
          </h2>
          <p className="text-sm text-[#71717A] leading-relaxed">
            คัดสรรชิ้นงานหัตถศิลป์เครื่องเงินแท้ 925 และอัญมณีล้ำค่า ออกแบบด้วยความประณีตระดับงานส่งออก
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {collections.map((col) => (
            <Link
              key={col.id}
              href={col.href}
              className="group jewelry-podium relative rounded-2xl p-6 border border-zinc-200/80 hover:border-[#C5A059]/60 shadow-xs hover:shadow-xl transition-all duration-400 flex flex-col justify-between"
            >
              {/* Top Tag & Count */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] uppercase font-semibold text-[#8C7034] bg-white px-2.5 py-1 rounded-full border border-[#C5A059]/30">
                  {col.tag}
                </span>
                <span className="text-xs text-[#71717A] font-mono">{col.count}</span>
              </div>

              {/* Center Image */}
              <div className="relative aspect-square w-full rounded-xl bg-white/80 p-4 mb-5 flex items-center justify-center overflow-hidden">
                <Image
                  src={col.image}
                  alt={col.name}
                  fill
                  className="object-contain p-2 group-hover:scale-110 transition-transform duration-500 ease-out"
                />
              </div>

              {/* Bottom Content */}
              <div className="space-y-2">
                <h3 className="font-heading-th text-base font-bold text-[#18181B] group-hover:text-[#B8934A] transition-colors">
                  {col.name}
                </h3>
                <p className="text-xs text-[#71717A] line-clamp-2 leading-relaxed">
                  {col.desc}
                </p>

                <div className="pt-2 flex items-center gap-1.5 text-xs font-semibold text-[#B8934A]">
                  <span>สำรวจคอลเลกชัน</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
