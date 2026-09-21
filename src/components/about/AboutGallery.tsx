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
        <div className="relative aspect-4/3 rounded-3xl overflow-hidden shadow-xl border border-[#C5A059]/30 bg-[#14141A]">
          <Image
            src="/images/heritage/heritage-shop.jpg"
            alt="โชว์รูมและโรงงานวานิชจิวเวลรี่"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-5 left-5 text-white">
            <p className="font-heading-th text-xs font-medium text-zinc-200">โชว์รูมใหญ่และโรงงาน ณ อ.ปัว จ.น่าน</p>
          </div>
        </div>

        <div className="relative aspect-4/3 rounded-3xl overflow-hidden shadow-xl border border-[#C5A059]/30 bg-[#14141A]">
          <Image
            src="/images/heritage/heritage-laser.jpg"
            alt="เครื่องจักรเลเซอร์และหล่อเครื่องเงิน"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-5 left-5 text-white">
            <p className="font-heading-th text-xs font-medium text-zinc-200">เครื่องจักรเลเซอร์ความแม่นยำสูงมาตรฐานสากล</p>
          </div>
        </div>
      </div>

      {/* 4 Pillars */}
      <div className="bg-[#121217] rounded-3xl p-8 sm:p-12 border border-white/10 shadow-2xl space-y-8">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <h3 className="font-serif-luxury text-2xl sm:text-3xl font-light text-white">
            หัวใจหลักแห่งคุณภาพของ Wanich Jewelry
          </h3>
          <p className="text-xs text-zinc-400 font-light">
            4 เสาหลักที่ทำให้ผลงานของเราได้รับความไว้วางใจจากลูกค้าทั้งในประเทศและต่างประเทศ
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 border border-[#C5A059]/30 flex items-center justify-center text-[#E5C378]">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="font-heading-th text-sm font-semibold text-white">{item.title}</h4>
                <p className="text-zinc-400 leading-relaxed font-light">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
