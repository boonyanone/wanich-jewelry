"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Sparkles, ArrowRight, ShieldCheck, Gem } from "lucide-react";
import brandData from "@/data/brand.json";

export default function HeroBanner() {
  const [activeSlide, setActiveSlide] = useState(0);

  const heroBanners = [
    {
      badge: "NAN SILVERSMITH HERITAGE 20+ YEARS",
      titleTop: "เครื่องเงินแท้ชั้นสูง",
      titleHighlight: "แห่งเมืองน่านและอัญมณี",
      subTitle: "ศิลปะหัตถศิลป์ลวดลายโบราณ จากโรงงานดอยซิลเวอร์สู่งานจิวเวลรี่ร่วมสมัย",
      desc: "รังสรรค์ด้วยมือช่างเงินน่านรุ่นครู ผสานความประณีตของเงินแท้ 925, กำไลโอนิกซ์ครอบเงินฝังทับทิมแท้, สร้อยข้อมือโซ่ตัน และบริการสั่งทำพิเศษ 3D CAD",
      image: "/images/banners/banner-masterpiece.jpg",
      tag: "Signature Editorial 2026",
    },
    {
      badge: "AUTHENTIC HANDCRAFTED SILVER",
      titleTop: "หัตถศิลป์ช่างเงินน่าน",
      titleHighlight: "ตอกลายวิจิตรด้วยมือทุกชิ้น",
      subTitle: "สืบทอดเทคนิคการตีและตอกสิ่วโบราณกว่า 2 ทศวรรษ",
      desc: "เอกลักษณ์ลายดอกพิกุล ลายหัวบัว และลายรังผึ้งที่ทรงคุณค่า ทนทาน ไม่ลอก ไม่ดำ พร้อมรับประกันดูแลตลอดอายุการใช้งาน",
      image: "/images/banners/banner-craft.jpg",
      tag: "Masterpiece Nan Craft",
    },
  ];

  const current = heroBanners[activeSlide];

  return (
    <section className="relative pt-28 pb-14 md:pt-36 md:pb-20 overflow-hidden bg-gradient-to-b from-[#FAF8F5] via-[#F6F2EA] to-[#FAF8F5]">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#E5C378]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Editorial Content */}
          <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 border border-[#C5A059]/40 shadow-xs backdrop-blur-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
              <span className="text-[11px] font-semibold tracking-widest text-[#8C7034] uppercase">
                {current.badge}
              </span>
            </div>

            <div className="space-y-2">
              <h1 className="font-serif-luxury text-3.5xl sm:text-5xl lg:text-6xl font-light text-[#18181B] tracking-tight leading-[1.12]">
                {current.titleTop} <br />
                <span className="font-normal italic text-transparent bg-clip-text bg-gradient-to-r from-[#B8934A] via-[#D4AF37] to-[#8C7034]">
                  {current.titleHighlight}
                </span>
              </h1>
              <p className="font-heading-th text-sm sm:text-base text-[#3F3F46] font-medium pt-1">
                {current.subTitle}
              </p>
            </div>

            <p className="text-xs sm:text-sm text-[#71717A] max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
              {current.desc}
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap justify-center lg:justify-start gap-3.5">
              <Link
                href="/catalog"
                className="glint-effect inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-[#B8934A] to-[#D4AF37] hover:from-[#A47F35] hover:to-[#C5A059] shadow-md hover:shadow-lg transition-all"
              >
                <span>ยลโฉมคอลเลกชันเครื่องเงิน</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={brandData.lineUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full text-xs font-semibold text-[#18181B] bg-white border border-[#C5A059]/40 hover:bg-[#FBF9F5] shadow-xs transition-all"
              >
                <Gem className="w-4 h-4 text-[#C5A059]" />
                <span>ปรึกษาสั่งทำพิเศษ 3D CAD</span>
              </a>
            </div>

            {/* Trust Seals */}
            <div className="pt-5 border-t border-[#E5C378]/30 flex flex-wrap justify-center lg:justify-start gap-5 text-[11px] text-[#52525B]">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
                การันตีเงินแท้ 92.5% - 95%
              </span>
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#C5A059]" />
                ตอกลายทำมือช่างน่าน
              </span>
              <span className="flex items-center gap-1.5">
                <Gem className="w-4 h-4 text-[#C5A059]" />
                Central Chidlom & Phuket
              </span>
            </div>
          </div>

          {/* Editorial Visual Podium with Switcher */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative aspect-4/5 w-full rounded-2xl overflow-hidden shadow-2xl border border-[#C5A059]/40 bg-zinc-900">
                <Image
                  src={current.image}
                  alt={current.titleTop}
                  fill
                  priority
                  className="object-cover object-center transition-all duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white flex justify-between items-end">
                  <div>
                    <span className="text-[10px] uppercase font-semibold text-[#E5C378] tracking-widest block">
                      ✦ {current.tag}
                    </span>
                    <p className="font-heading-th text-xs sm:text-sm font-semibold">
                      วานิชจิวเวลรี่ หัตถศิลป์เครื่องเงินน่าน
                    </p>
                  </div>

                  {/* Switcher Dots */}
                  <div className="flex gap-2">
                    {heroBanners.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveSlide(i)}
                        className={`h-2 rounded-full transition-all ${
                          activeSlide === i ? "w-6 bg-[#E5C378]" : "w-2 bg-white/50"
                        }`}
                        aria-label={`Slide ${i + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
