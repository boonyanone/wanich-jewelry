"use client";

import React, { useState, useEffect } from "react";
import GrandIntroSlide, { HeroSlideData } from "./GrandIntroSlide";

const SLIDES: HeroSlideData[] = [
  {
    id: "nan-heritage",
    badge: "NAN STERLING SILVER HERITAGE 20+ YRS",
    frenchTitle: "HAUTE JOAILLERIE D’ART DE SIAM",
    thaiTitle: "เครื่องเงินแท้ชั้นสูงแห่งเมืองน่าน",
    thaiHighlight: "และอัญมณีแท้ทรงคุณค่า",
    desc: "ถ่ายทอดมนต์เสน่ห์หัตถศิลป์ลวดลายโบราณ จากโรงงานดอยซิลเวอร์สู่ชิ้นงานร่วมสมัย รังสรรค์ด้วยมือช่างเงินน่านรุ่นครู เงินแท้ 925 ตอกลายดอกพิกุลและหัวบัววิจิตร",
    image: "/images/banners/banner-masterpiece.jpg",
    productHighlight: {
      title: "กำไลโอนิกซ์ครอบเงินฉลุลายฝังทับทิม",
      sku: "PROD-1925",
      price: "16,900 ฿",
    },
  },
  {
    id: "bespoke-craft",
    badge: "PRECISION CRAFTSMANSHIP & 3D CAD",
    frenchTitle: "SUR-MESURE & ATELIER D’EXCEPTION",
    thaiTitle: "งานสั่งทำพิเศษเฉพาะบุคคล",
    thaiHighlight: "ผสานเทคโนโลยี 3D CAD & งานมือช่างเงิน",
    desc: "เนรมิตเครื่องประดับในฝัน ทั้งกำไล สร้อยคอ แหวนประจำตระกูล และของขวัญล้ำค่า ขึ้นรูป 3 มิติ ตรวจสอบแบบเสมือนจริงก่อนลงมือหล่อและตอกลายเงินแท้",
    image: "/images/banners/banner-craft.jpg",
    productHighlight: {
      title: "กำไลเงินแท้ 95% ตอกลายพุดตานโบราณ",
      sku: "PROD-1914",
      price: "12,900 ฿",
    },
  },
  {
    id: "editorial-lookbook",
    badge: "CONTEMPORARY MASTERPIECE 2026",
    frenchTitle: "COLLECTION PRÉCIEUSE STERLING 925",
    thaiTitle: "สร้อยข้อมือโซ่ตัน & กำไลโบราณ",
    thaiHighlight: "สะท้อนรสนิยมอันสง่างามเหนือกาลเวลา",
    desc: "ความสมบูรณ์แบบของเนื้อเงินแท้ 92.5% แน่นตัน ไม่เปราะบาง ไม่ลอก ผ่านการขัดเงาและรมดำตามขนบธรรมเนียมล้านนาโบราณ",
    image: "/images/banners/hero-editorial.jpg",
    productHighlight: {
      title: "สร้อยข้อมือเงินแท้ 925 ลายโซ่ตันคลาสสิก",
      sku: "PROD-1941",
      price: "8,900 ฿",
    },
  },
];

export default function GrandIntroBanner() {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full min-h-[86vh] sm:min-h-[92vh] flex items-center overflow-hidden bg-[#0B0B0D]">
      {/* Slides Deck */}
      {SLIDES.map((slide, idx) => (
        <GrandIntroSlide key={slide.id} slide={slide} isActive={currentIdx === idx} />
      ))}

      {/* Slide Navigation Dots & Progress Bar */}
      <div className="absolute bottom-8 right-6 sm:right-12 z-30 flex items-center gap-3">
        {SLIDES.map((s, idx) => (
          <button
            key={s.id}
            onClick={() => setCurrentIdx(idx)}
            className="group flex flex-col items-start gap-1 p-1"
            aria-label={`Slide ${idx + 1}`}
          >
            <div
              className={`h-1.5 rounded-full transition-all duration-500 ${
                currentIdx === idx
                  ? "w-10 bg-gradient-to-r from-[#F3E5AB] to-[#C5A059]"
                  : "w-3 bg-white/30 group-hover:bg-white/60"
              }`}
            />
            <span
              className={`text-[9px] uppercase tracking-wider font-mono transition-colors ${
                currentIdx === idx ? "text-[#E5C378] font-bold" : "text-zinc-500 hidden sm:block"
              }`}
            >
              0{idx + 1}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}
