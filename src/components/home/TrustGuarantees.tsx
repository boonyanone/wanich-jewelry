import React from "react";
import { ShieldCheck, Sparkles, RefreshCw, Truck, Award, Gem } from "lucide-react";

export default function TrustGuarantees() {
  const guarantees = [
    {
      icon: ShieldCheck,
      title: "เงินแท้ 92.5% - 95% มาตรฐานสากล",
      desc: "ตอกโค้ดรับประกันความบริสุทธิ์ของเนื้อโลหะทุกชิ้น ปราศจากนิเกิล ไม่ระคายเคืองผิว",
    },
    {
      icon: Award,
      title: "หัตถศิลป์ช่างเงินน่านกว่า 20 ปี",
      desc: "สืบทอดภูมิปัญญาตอกลายโบราณจากดอยซิลเวอร์แฟคตอรี่ ผสานการขึ้นรูป 3D ยุคใหม่",
    },
    {
      icon: RefreshCw,
      title: "ดูแลทำความสะอาดฟรีตลอดอายุการใช้งาน",
      desc: "บริการล้างขัดเงาและตรวจเช็กชิ้นงานฟรี สามารถส่งดูแลได้ที่เคาน์เตอร์ทุกสาขา",
    },
    {
      icon: Truck,
      title: "จัดส่งพรีเมียมพร้อมกล่องและประกันภัย",
      desc: "บรรจุกล่องกำมะหยี่หรูหรา พร้อมใบรับประกันสินค้า และบริการส่งด่วนพร้อมประกันภัยเต็มวงเงิน",
    },
  ];

  return (
    <section className="py-16 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {guarantees.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-zinc-200/80 hover:border-[#C5A059]/50 shadow-2xs hover:shadow-md transition-all text-center sm:text-left space-y-3"
              >
                <div className="w-11 h-11 rounded-xl bg-[#FAF8F5] border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059] mx-auto sm:mx-0">
                  <IconComp className="w-5 h-5" />
                </div>
                <h3 className="font-heading-th text-sm font-bold text-[#18181B]">
                  {item.title}
                </h3>
                <p className="text-xs text-[#71717A] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
