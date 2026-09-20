"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, Award, ShieldCheck, ArrowRight, CheckCircle2 } from "lucide-react";

export default function HeritageStorySection() {
  return (
    <section className="py-24 bg-white border-b border-zinc-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Archival Photography Collage */}
          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative aspect-4/3 rounded-2xl overflow-hidden shadow-md border border-[#C5A059]/30 bg-zinc-100">
                  <Image
                    src="/images/heritage/heritage-team.jpg"
                    alt="ทีมช่างฝีมือวานิชจิวเวลรี่"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-black/60 text-white text-[10px]">
                    ทีมช่างหัตถศิลป์เมืองน่าน
                  </div>
                </div>

                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-md border border-[#C5A059]/30 bg-zinc-100">
                  <Image
                    src="/images/heritage/heritage-laser.jpg"
                    alt="เครื่องจักรเลเซอร์มาตรฐานสากล"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-black/60 text-white text-[10px]">
                    เครื่องจักรเลเซอร์มาตรฐานส่งออก
                  </div>
                </div>
              </div>

              <div className="pt-8 space-y-4">
                <div className="relative aspect-4/5 rounded-2xl overflow-hidden shadow-lg border border-[#C5A059]/40 bg-zinc-100">
                  <Image
                    src="/images/heritage/heritage-shop.jpg"
                    alt="บรรยากาศโชว์รูมวานิชจิวเวลรี่"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-black/60 text-white text-[10px]">
                    โชว์รูมและโรงงาน อ.ปัว จ.น่าน
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#C5A059]/40 text-center space-y-1">
                  <span className="font-serif-luxury text-2xl font-bold text-[#B8934A]">20+ YEARS</span>
                  <p className="text-[11px] text-zinc-600 font-medium">สืบสานตำนานช่างเงินดอยซิลเวอร์</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Storytelling Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF8F5] border border-[#C5A059]/40">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
              <span className="text-xs font-semibold text-[#8C7034] uppercase tracking-wider">
                Nan Heritage & Craftsmanship
              </span>
            </div>

            <h2 className="font-serif-luxury text-3xl sm:text-4xl font-light text-[#18181B] leading-tight">
              สืบสานตำนานช่างเงินเมืองน่าน <br />
              <span className="font-normal italic text-[#B8934A]">
                สู่จิวเวลรี่มาตรฐานส่งออกสากล
              </span>
            </h2>

            <p className="text-xs sm:text-sm text-[#52525B] leading-relaxed">
              <strong>วานิชจิวเวลรี่ (Wanich Jewelry)</strong> โดย บริษัท ดีเอส วาณิช จำกัด ก่อตั้งขึ้นโดย <strong>คุณชวภรณ์ จันทร์สายชล</strong> และ <strong>คุณชัยพฤกษ์ รุ่งรชตะวาณิช</strong> (ผู้จัดการโรงงานดอยซิลเวอร์แฟคตอรี่ อ.ปัว จ.น่าน) เพื่อยกระดับงานหัตถศิลป์ตอกลายโบราณอันเป็นมรดกทางวัฒนธรรม ให้สวมใส่ได้อย่างสง่างามในระดับสากล
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 text-xs text-[#27272A]">
                <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                <span><strong>เงินแท้ 92.5% และ 95%:</strong> การันตีความบริสุทธิ์ของเนื้อโลหะ ไม่ลอก ไม่ดำง่าย ปลอดสารนิเกิล</span>
              </div>
              <div className="flex items-start gap-3 text-xs text-[#27272A]">
                <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                <span><strong>ช่างฝีมือท้องถิ่นกว่า 20 ปี:</strong> ร่วมสร้างงานและอนุรักษ์ภูมิปัญญาการตอกลายดอกพิกุลและลายหัวบัว</span>
              </div>
              <div className="flex items-start gap-3 text-xs text-[#27272A]">
                <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                <span><strong>จุดจำหน่ายห้างชั้นนำ:</strong> พร้อมต้อนรับที่ เซ็นทรัล ชิดลม (ชั้น 7), เซ็นทรัล ภูเก็ต และ โชว์รูม อ.ปัว จ.น่าน</span>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold text-[#18181B] bg-[#FAF8F5] border border-[#C5A059]/40 hover:bg-[#F5EED9] transition-all"
              >
                <span>อ่านประวัติความเป็นมาและเรื่องราวของแบรนด์</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C5A059]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
