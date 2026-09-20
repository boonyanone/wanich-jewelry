"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, ArrowRight, MessageCircle, Layers, Cpu, Hammer, CheckCircle2 } from "lucide-react";
import brandData from "@/data/brand.json";

export default function BespokeStudioSection() {
  const steps = [
    {
      num: "01",
      icon: Layers,
      title: "1. ปรึกษาแนวคิด & เลือกพลอยแท้",
      desc: "พูดคุยดีไซน์ ขนาดแหวน/กำไล และเลือกอัญมณีแท้ (ทับทิม, หยก, โอนิกซ์, เพชรแท้) ตามงบประมาณที่คุณต้องการ",
    },
    {
      num: "02",
      icon: Cpu,
      title: "2. ขึ้นรูป 3D CAD จำลองเสมือนจริง",
      desc: "นักออกแบบขึ้นรูป 3 มิติความละเอียดสูง เพื่อให้คุณปรับแก้และเห็นมิติชิ้นงานจริงก่อนทำการหล่อ",
    },
    {
      num: "03",
      icon: Hammer,
      title: "3. ช่างฝีมือขึ้นรูปตัวเรือน & ฝังอัญมณี",
      desc: "หล่อเนื้อเงินแท้ 925 / ทองคำ 18K และตอกลาย/ฝังอัญมณีด้วยมืออย่างประณีตด้วยเครื่องมือมาตรฐานส่งออก",
    },
    {
      num: "04",
      icon: CheckCircle2,
      title: "4. ตรวจสอบคุณภาพ & ใบรับประกัน",
      desc: "ขัดแต่งชิ้นงานเงางาม พร้อมตรวจเช็กเปอร์เซ็นต์โลหะและบรรจุกล่องหรูหราพร้อมใบรับประกันตลอดชีพ",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#FAF8F5] via-[#F4EFE6] to-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Bespoke Overview */}
          <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#C5A059]/40">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
              <span className="text-xs font-semibold text-[#8C7034] uppercase tracking-wider">
                Bespoke & OEM Studio
              </span>
            </div>

            <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-light text-[#18181B] leading-tight">
              รังสรรค์จิวเวลรี่ชิ้นเดียวในโลก <br />
              <span className="font-normal italic text-[#B8934A]">
                ตามจินตนาการของคุณ
              </span>
            </h2>

            <p className="text-sm text-[#71717A] leading-relaxed">
              ไม่ว่าจะเป็นแหวนแต่งงาน, กำไลประจำตระกูล, กรอบพระเงินแท้ผ่าหวาย หรือของขวัญชิ้นพิเศษ โรงงานวานิชจิวเวลรี่พร้อมเปลี่ยนแบบในฝันของคุณให้กลายเป็นชิ้นงานจริงด้วยมาตรฐานช่างระดับสูง
            </p>

            <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <a
                href={brandData.lineUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-semibold text-white bg-[#06C755] hover:bg-[#05b34c] shadow-sm transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>ส่งแบบประเมินราคาฟรีผ่าน LINE</span>
              </a>
            </div>
          </div>

          {/* Right Column: 4-Step Process Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {steps.map((step) => {
              const IconComp = step.icon;
              return (
                <div
                  key={step.num}
                  className="bg-white rounded-2xl p-6 border border-[#C5A059]/30 hover:border-[#C5A059] shadow-xs hover:shadow-md transition-all space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059]">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="font-serif-luxury text-xl font-bold text-[#E5C378]">
                      {step.num}
                    </span>
                  </div>

                  <h3 className="font-heading-th text-base font-bold text-[#18181B]">
                    {step.title}
                  </h3>

                  <p className="text-xs text-[#71717A] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
