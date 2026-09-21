"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";

export default function HeritageStorySection() {
  return (
    <section className="py-24 bg-[#0D0D11] text-white border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Archival Photography Collage */}
          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative aspect-4/3 rounded-2xl overflow-hidden shadow-xl border border-[#C5A059]/30 bg-zinc-900">
                  <Image
                    src="/images/heritage/heritage-team.jpg"
                    alt="ทีมช่างฝีมือวานิชจิวเวลรี่"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-2 left-2 px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-xs text-white text-[10px]">
                    ทีมช่างหัตถศิลป์เมืองน่าน
                  </div>
                </div>

                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl border border-[#C5A059]/30 bg-zinc-900">
                  <Image
                    src="/images/heritage/heritage-laser.jpg"
                    alt="เครื่องจักรเลเซอร์มาตรฐานสากล"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-2 left-2 px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-xs text-white text-[10px]">
                    เครื่องจักรเลเซอร์มาตรฐานส่งออก
                  </div>
                </div>
              </div>

              <div className="pt-8 space-y-4">
                <div className="relative aspect-4/5 rounded-2xl overflow-hidden shadow-2xl border border-[#C5A059]/40 bg-zinc-900">
                  <Image
                    src="/images/heritage/heritage-shop.jpg"
                    alt="บรรยากาศโชว์รูมวานิชจิวเวลรี่"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-2 left-2 px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-xs text-white text-[10px]">
                    โชว์รูมและโรงงาน อ.ปัว จ.น่าน
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#14141A] border border-[#C5A059]/40 text-center space-y-1 shadow-md">
                  <span className="font-serif-luxury text-2xl font-bold text-[#F3E5AB]">20+ YEARS</span>
                  <p className="text-[11px] text-zinc-400 font-medium">สืบสานตำนานช่างเงินดอยซิลเวอร์</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Storytelling Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-[#C5A059]/40">
              <Sparkles className="w-3.5 h-3.5 text-[#E5C378]" />
              <span className="text-xs font-semibold text-[#E5C378] uppercase tracking-wider">
                NAN HERITAGE & CRAFTSMANSHIP
              </span>
            </div>

            <h2 className="font-serif-luxury text-3xl sm:text-4xl font-light text-white leading-tight">
              สืบสานตำนานช่างเงินเมืองน่าน <br />
              <span className="font-normal italic text-transparent bg-clip-text bg-gradient-to-r from-[#F3E5AB] via-[#E5C378] to-[#C5A059]">
                สู่จิวเวลรี่มาตรฐานส่งออกสากล
              </span>
            </h2>

            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-light">
              <strong>วานิชจิวเวลรี่ (Wanich Jewelry)</strong> โดย บริษัท ดีเอส วาณิช จำกัด ก่อตั้งขึ้นโดย <strong>คุณชวภรณ์ จันทร์สายชล</strong> และ <strong>คุณชัยพฤกษ์ รุ่งรชตะวาณิช</strong> (ผู้จัดการโรงงานดอยซิลเวอร์แฟคตอรี่ อ.ปัว จ.น่าน) เพื่อยกระดับงานหัตถศิลป์ตอกลายโบราณอันเป็นมรดกทางวัฒนธรรม ให้สวมใส่ได้อย่างสง่างามในระดับสากล
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 text-xs text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>เงินแท้ 92.5% และ 95%:</strong> การันตีความบริสุทธิ์ของเนื้อโลหะ ไม่ลอก ไม่ดำง่าย ปลอดสารนิเกิล</span>
              </div>
              <div className="flex items-start gap-3 text-xs text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>ช่างฝีมือท้องถิ่นกว่า 20 ปี:</strong> ร่วมสร้างงานและอนุรักษ์ภูมิปัญญาการตอกลายดอกพิกุลและลายหัวบัว</span>
              </div>
              <div className="flex items-start gap-3 text-xs text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>รองรับบริการหลังการขาย:</strong> ทำความสะอาด ปรับขยายไซส์ และชุบเคลือบดูแลตลอดอายุการใช้งาน</span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#E5C378] hover:text-[#F3E5AB] group"
              >
                <span>อ่านเรื่องราวและประวัติความเป็นมาทั้งหมด</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
