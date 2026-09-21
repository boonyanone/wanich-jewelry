"use client";

import React from "react";
import { Sparkles, MessageCircle, Layers, Cpu, Hammer, CheckCircle2 } from "lucide-react";
import brandData from "@/data/brand.json";

export default function BespokeStudioSection() {
  const steps = [
    {
      num: "01",
      icon: Layers,
      title: "1. ปรึกษาแนวคิด & เลือกพลอยแท้",
      desc: "พูดคุยดีไซน์ ขนาดข้อมือ และเลือกอัญมณีแท้ (ทับทิม, หยก, โอนิกซ์) ตามงบประมาณที่คุณต้องการ",
    },
    {
      num: "02",
      icon: Cpu,
      title: "2. ขึ้นรูป 3D CAD จำลองเสมือนจริง",
      desc: "นักออกแบบขึ้นรูป 3 มิติความละเอียดสูง เพื่อให้คุณเห็นมิติชิ้นงานจริงรอบทิศทางก่อนหล่อ",
    },
    {
      num: "03",
      icon: Hammer,
      title: "3. ช่างฝีมือน่านขึ้นตัวเรือน & ตอกลาย",
      desc: "หล่อเนื้อเงินแท้ 925 หรือ 95% และลงมือตอกลาย/ฝังอัญมณีด้วยมืออย่างประณีตด้วยเครื่องมือช่างครู",
    },
    {
      num: "04",
      icon: CheckCircle2,
      title: "4. ตรวจสอบคุณภาพ & ใบรับประกัน",
      desc: "ขัดแต่งชิ้นงานเงางาม พร้อมตรวจเช็กเปอร์เซ็นต์โลหะ บรรจุกล่องหรูหราพร้อมใบรับประกันตลอดชีพ",
    },
  ];

  return (
    <section className="py-24 bg-[#0B0B0D] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Bespoke Overview */}
          <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-[#C5A059]/40">
              <Sparkles className="w-3.5 h-3.5 text-[#E5C378]" />
              <span className="text-xs font-semibold text-[#E5C378] uppercase tracking-wider">
                HAUTE BESPOKE & 3D CAD ATELIER
              </span>
            </div>

            <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-light text-white leading-tight">
              รังสรรค์จิวเวลรี่ชิ้นเดียวในโลก <br />
              <span className="font-normal italic text-transparent bg-clip-text bg-gradient-to-r from-[#F3E5AB] via-[#E5C378] to-[#C5A059]">
                ตามจินตนาการของคุณ
              </span>
            </h2>

            <p className="text-sm text-zinc-400 leading-relaxed font-light">
              ไม่ว่าจะเป็นกำไลประจำตระกูล, สร้อยข้อมือสั่งทำพิเศษ, กรอบพระเงินแท้ผ่าหวาย หรือของขวัญชิ้นพิเศษ โรงงานวานิชจิวเวลรี่พร้อมเปลี่ยนแบบในฝันของคุณให้กลายเป็นชิ้นงานจริง
            </p>

            <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <a
                href={brandData.lineUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-xs font-semibold text-white bg-[#06C755] hover:bg-[#05b34c] shadow-lg transition-all"
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
                  className="bg-[#121217] rounded-2xl p-6 border border-white/10 hover:border-[#C5A059]/60 shadow-lg transition-all space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-[#C5A059]/30 flex items-center justify-center text-[#E5C378]">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="font-serif-luxury text-xl font-bold text-[#E5C378]">
                      {step.num}
                    </span>
                  </div>

                  <h3 className="font-heading-th text-base font-semibold text-white">
                    {step.title}
                  </h3>

                  <p className="text-xs text-zinc-400 leading-relaxed">
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
