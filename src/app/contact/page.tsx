import React from "react";
import { Phone, MapPin, MessageCircle, Clock, Sparkles, Navigation } from "lucide-react";
import brandData from "@/data/brand.json";

export default function ContactPage() {
  return (
    <div className="pt-28 pb-24 bg-[#0B0B0D] min-h-screen text-white">
      {/* Header Banner */}
      <div className="bg-[#0E0E12] border-b border-white/10 py-12 mb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-[#C5A059]/40">
            <Sparkles className="w-3.5 h-3.5 text-[#E5C378]" />
            <span className="text-xs font-semibold text-[#E5C378] uppercase tracking-wider">
              SHOWROOM LOCATIONS & VIP CONCIERGE
            </span>
          </div>
          <h1 className="font-serif-luxury text-3xl sm:text-5xl font-light text-white">
            ติดต่อและเยี่ยมชมโชว์รูม
          </h1>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-2xl mx-auto">
            สัมผัสความงดงามของชิ้นงานจริงได้ที่โชว์รูมใหญ่ จ.น่าน หรือเคาน์เตอร์ในห้างสรรพสินค้าเซ็นทรัล
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* 3 Showroom Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {brandData.retailBranches.map((branch, idx) => (
            <div
              key={idx}
              className="bg-[#121217] rounded-3xl p-6 sm:p-8 border border-white/10 hover:border-[#C5A059]/50 shadow-xl hover:shadow-2xl transition-all flex flex-col justify-between space-y-5"
            >
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-[#C5A059]/30 flex items-center justify-center text-[#E5C378]">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="font-heading-th text-base font-semibold text-white">
                  {branch.name}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed font-light">
                  {branch.address}
                </p>
                <div className="text-xs text-zinc-400 space-y-1.5 pt-2">
                  <p className="flex items-center gap-2 text-[#E5C378]">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{branch.hours}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-[#E5C378]" />
                    <a href={`tel:${branch.tel}`} className="hover:underline text-zinc-300">
                      {branch.tel}
                    </a>
                  </p>
                </div>
              </div>

              {branch.lat && branch.lng && (
                <div className="pt-4 border-t border-white/10">
                  <a
                    href={`https://www.google.com/maps?q=${branch.lat},${branch.lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-[#E5C378] hover:text-[#F3E5AB] hover:underline"
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
        <div className="bg-[#14141C] text-white rounded-3xl p-8 sm:p-12 border border-[#C5A059]/40 flex flex-col md:flex-row justify-between items-center gap-8 shadow-2xl">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-[10px] uppercase tracking-wider text-[#E5C378] font-mono">
              INSTANT ONLINE CONCIERGE
            </span>
            <h2 className="font-serif-luxury text-2xl sm:text-3xl font-light">
              ปรึกษาทีมงานผู้เชี่ยวชาญแบบเรียลไทม์
            </h2>
            <p className="text-xs text-zinc-400 max-w-xl leading-relaxed font-light">
              ต้องการสอบถามสต๊อกสินค้า, วัดขนาดไซส์แหวน, ประเมินราคาแท่งเงิน หรือนัดหมายพิเศษ สามารถแอด LINE พูดคุยกับเราได้ทันที
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href={brandData.lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="glint-effect px-6 py-3.5 rounded-xl text-xs font-semibold text-white bg-[#06C755] hover:bg-[#05b34c] flex items-center justify-center gap-2 shadow-lg"
            >
              <MessageCircle className="w-4 h-4" />
              <span>แชท LINE OA: {brandData.lineId}</span>
            </a>

            <a
              href="tel:088-260-4198"
              className="px-6 py-3.5 rounded-xl text-xs font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/10 flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#E5C378]" />
              <span>088-260-4198</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
