"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Sparkles, ArrowRight, ShieldCheck, Gem } from "lucide-react";
import brandData from "@/data/brand.json";

export default function HeroBanner() {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-[#FAF8F5] via-[#F6F2EA] to-[#FAF8F5]">
      {/* Ambient Silk & Glow Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#E5C378]/12 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Brand Editorial Story */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 border border-[#C5A059]/40 shadow-xs backdrop-blur-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
              <span className="text-xs font-medium tracking-widest text-[#8C7034] uppercase">
                NAN SILVERSMITH HERITAGE 20+ YEARS
              </span>
            </div>

            <div className="space-y-3">
              <h1 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl font-light text-[#18181B] tracking-tight leading-[1.12]">
                เครื่องเงินแท้ชั้นสูง <br />
                <span className="font-normal italic text-transparent bg-clip-text bg-gradient-to-r from-[#B8934A] via-[#D4AF37] to-[#8C7034]">
                  แห่งเมืองน่านและอัญมณี
                </span>
              </h1>
              <p className="font-heading-th text-base sm:text-lg text-[#3F3F46] font-medium pt-1">
                ศิลปะหัตถศิลป์ลวดลายโบราณ จากโรงงานดอยซิลเวอร์สู่งานจิวเวลรี่ร่วมสมัย
              </p>
            </div>

            <p className="text-xs sm:text-sm text-[#71717A] max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
              รังสรรค์ด้วยมือช่างเงินน่านรุ่นครู ผสานความประณีตของเงินแท้ 925, กำไลโอนิกซ์ครอบเงินฝังทับทิมแท้, สร้อยข้อมือโซ่ตัน และบริการสั่งทำพิเศษ 3D CAD
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap justify-center lg:justify-start gap-4">
              <Link
                href="/catalog"
                className="glint-effect inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-[#B8934A] to-[#D4AF37] hover:from-[#A47F35] hover:to-[#C5A059] shadow-md hover:shadow-lg transition-all"
              >
                <span>ยลโฉมคอลเลกชันทั้งหมด</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={brandData.lineUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs font-semibold text-[#18181B] bg-white border border-[#C5A059]/40 hover:bg-[#FBF9F5] hover:border-[#C5A059] shadow-xs transition-all"
              >
                <Gem className="w-4 h-4 text-[#C5A059]" />
                <span>ปรึกษางานสั่งทำพิเศษ</span>
              </a>
            </div>

            {/* Trust Seals */}
            <div className="pt-6 border-t border-[#E5C378]/30 flex flex-wrap justify-center lg:justify-start gap-6 text-xs text-[#52525B]">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
                <span>การันตีเงินแท้ 92.5% - 95%</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#C5A059]" />
                <span>ตอกลายทำมือทุกชิ้น</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Gem className="w-4 h-4 text-[#C5A059]" />
                <span>Central Chidlom & Phuket</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Lifestyle Duo */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Editorial Photo */}
              <div className="relative aspect-4/5 w-full rounded-2xl overflow-hidden shadow-2xl border border-[#C5A059]/30 bg-white">
                <Image
                  src="/images/banners/hero-editorial.jpg"
                  alt="Wanich Jewelry Editorial Model"
                  fill
                  priority
                  className="object-cover object-top hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white space-y-1">
                  <span className="text-[10px] uppercase font-semibold text-[#E5C378] tracking-widest block">
                    ✦ High Fine Jewelry
                  </span>
                  <p className="font-heading-th text-sm font-semibold">
                    ความสง่างามที่สวมใส่ได้ในทุกช่วงเวลาสำคัญ
                  </p>
                </div>
              </div>

              {/* Floating Inset Masterpiece Card */}
              <div className="absolute -bottom-6 -left-6 z-20 bg-white/95 backdrop-blur-md p-3.5 rounded-xl border border-[#C5A059]/40 shadow-xl hidden sm:flex items-center gap-3 max-w-xs">
                <div className="relative w-14 h-14 rounded-lg bg-[#FAF8F5] border border-zinc-200 overflow-hidden shrink-0">
                  <Image
                    src="/images/products/prod-1912-1.jpg"
                    alt=""
                    fill
                    className="object-contain p-1"
                  />
                </div>
                <div className="space-y-0.5">
                  <span className="text-[10px] font-bold text-[#8C7034] uppercase tracking-wider block">
                    Nan Masterpiece
                  </span>
                  <p className="text-xs font-semibold text-[#18181B] line-clamp-1">
                    กำไลตอกลายพิกุลโบราณ
                  </p>
                  <p className="text-[10px] text-zinc-500">เงินแท้ 925 ทำมือทั้งชิ้น</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
