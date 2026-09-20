import React from "react";
import Image from "next/image";
import { ShieldCheck, Award, Sparkles, MapPin } from "lucide-react";

export default function AboutGallery() {
  const pillars = [
    {
      icon: ShieldCheck,
      title: "เงินแท้ 92.5% - 95%",
      desc: "การันตีเนื้อโลหะบริสุทธิ์ ตอกโค้ดสากลทุกชิ้น ปราศจากสารก่อมะเร็งและนิเกิล",
    },
    {
      icon: Award,
      title: "ช่างฝีมือน่านแท้",
      desc: "สืบทอดเทคนิคการตอกลายดอกพิกุล ลายเปีย และลายรังผึ้งจากรุ่นสู่รุ่น",
    },
    {
      icon: Sparkles,
      title: "เครื่องจักรระดับส่งออก",
      desc: "ติดตั้งเครื่องเลเซอร์ตัดแต่งความแม่นยำสูง เครื่องฉีดเทียน และเตาหลอมสุญญากาศ",
    },
    {
      icon: MapPin,
      title: "จุดจำหน่ายห้างชั้นนำ",
      desc: "พร้อมต้อนรับที่เซ็นทรัลชิดลม ชั้น 7, เซ็นทรัลภูเก็ต และโชว์รูมใหญ่ อ.ปัว จ.น่าน",
    },
  ];

  return (
    <div className="space-y-12">
      {/* 2-Photo Showcase Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative aspect-4/3 rounded-2xl overflow-hidden shadow-md border border-[#C5A059]/30 bg-zinc-100">
          <Image
            src="/images/heritage/heritage-shop.jpg"
            alt="โชว์รูมและโรงงานวานิชจิวเวลรี่"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 text-white">
            <p className="font-heading-th text-xs font-semibold">โชว์รูมใหญ่และโรงงาน ณ อ.ปัว จ.น่าน</p>
          </div>
        </div>

        <div className="relative aspect-4/3 rounded-2xl overflow-hidden shadow-md border border-[#C5A059]/30 bg-zinc-100">
          <Image
            src="/images/heritage/heritage-laser.jpg"
            alt="เครื่องจักรเลเซอร์และหล่อเครื่องเงิน"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 text-white">
            <p className="font-heading-th text-xs font-semibold">เครื่องจักรเลเซอร์ความแม่นยำสูงมาตรฐานสากล</p>
          </div>
        </div>
      </div>

      {/* 4 Pillars */}
      <div className="bg-white rounded-2xl p-8 sm:p-12 border border-zinc-200/80 shadow-xs space-y-8">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#18181B]">
            หัวใจหลักแห่งคุณภาพของ Wanich Jewelry
          </h3>
          <p className="text-xs text-[#71717A]">
            4 เสาหลักที่ทำให้ผลงานของเราได้รับความไว้วางใจจากลูกค้าทั้งในประเทศและต่างประเทศ
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="p-5 rounded-xl bg-[#FAF8F5] border border-zinc-200/80 space-y-2">
                <div className="w-9 h-9 rounded-lg bg-white border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059]">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="font-heading-th text-sm font-bold text-[#18181B]">{item.title}</h4>
                <p className="text-[#71717A] leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
