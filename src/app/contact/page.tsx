import React from "react";
import { Phone, Mail, MapPin, MessageCircle, Clock, Sparkles, Navigation } from "lucide-react";
import brandData from "@/data/brand.json";

export default function ContactPage() {
  return (
    <div className="pt-28 pb-20 bg-[#FAF8F5] min-h-screen">
      {/* Header Banner */}
      <div className="bg-white border-b border-zinc-200/80 py-12 mb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF8F5] border border-[#C5A059]/40">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            <span className="text-xs font-semibold text-[#8C7034] uppercase tracking-wider">
              Showroom Locations & Contact
            </span>
          </div>
          <h1 className="font-serif-luxury text-3xl sm:text-5xl font-light text-[#18181B]">
            ติดต่อและเยี่ยมชมโชว์รูม
          </h1>
          <p className="text-xs sm:text-sm text-[#71717A] max-w-2xl mx-auto">
            สัมผัสความงดงามของชิ้นงานจริงได้ที่โชว์รูมใหญ่ จ.น่าน หรือเคาน์เตอร์ในห้างสรรพสินค้าเซ็นทรัล
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* 3 Showroom Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {brandData.retailBranches.map((branch, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-zinc-200/80 hover:border-[#C5A059]/50 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059]">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="font-heading-th text-base font-bold text-[#18181B]">
                  {branch.name}
                </h3>
                <p className="text-xs text-[#71717A] leading-relaxed">
                  {branch.address}
                </p>
                <div className="text-xs text-zinc-500 space-y-1 pt-2">
                  <p className="flex items-center gap-1.5 text-[#8C7034]">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{branch.hours}</span>
                  </p>
                  <p className="flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
                    <a href={`tel:${branch.tel}`} className="hover:underline">
                      {branch.tel}
                    </a>
                  </p>
                </div>
              </div>

              {branch.lat && branch.lng && (
                <div className="pt-4 border-t border-zinc-100">
                  <a
                    href={`https://www.google.com/maps?q=${branch.lat},${branch.lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#B8934A] hover:underline"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>เปิดแผนที่ Google Maps</span>
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Multi-Channel VIP Contact Banner */}
        <div className="bg-[#18181B] text-white rounded-2xl p-8 sm:p-12 border border-[#C5A059]/40 flex flex-col md:flex-row justify-between items-center gap-8 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-[10px] uppercase tracking-wider text-[#D4AF37] font-semibold">
              Instant Online Consultation
            </span>
            <h2 className="font-serif-luxury text-2xl sm:text-3xl font-bold">
              ปรึกษาทีมงานผู้เชี่ยวชาญแบบเรียลไทม์
            </h2>
            <p className="text-xs text-zinc-300 max-w-xl leading-relaxed">
              ต้องการสอบถามสต๊อกสินค้า, วัดขนาดไซส์แหวน, ประเมินราคาแท่งเงิน หรือนัดหมายพิเศษ สามารถแอด LINE พูดคุยกับเราได้ทันที
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href={brandData.lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full text-xs font-semibold text-white bg-[#06C755] hover:bg-[#05b34c] flex items-center justify-center gap-2 shadow"
            >
              <MessageCircle className="w-4 h-4" />
              <span>แชทผ่าน LINE OA: {brandData.lineId}</span>
            </a>

            <a
              href="tel:088-260-4198"
              className="px-6 py-3 rounded-full text-xs font-semibold text-[#18181B] bg-white hover:bg-zinc-100 flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#C5A059]" />
              <span>088-260-4198</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
