import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";

export default function EditorialLookbookBanner() {
  return (
    <section className="relative my-10 overflow-hidden bg-[#070709] text-white border-y border-white/10">
      <div className="relative min-h-[480px] md:min-h-[540px] flex items-center">
        {/* Background Lookbook Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/banners/banner-bangles.jpg"
            alt="Wanich Jewelry Masterpiece Bangle Collection"
            fill
            className="object-cover object-center opacity-45 scale-105 transition-transform duration-1000 hover:scale-100"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#070709] via-[#070709]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-transparent to-[#070709]/60" />
        </div>

        {/* Content Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16">
          <div className="max-w-xl space-y-6">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-[#C5A059]/40 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#E5C378]" />
              <span className="text-[10px] sm:text-xs font-semibold text-[#E5C378] tracking-[0.2em] uppercase">
                THE ROYAL HERITAGE OF NAN
              </span>
            </div>

            <h2 className="font-serif-luxury text-3xl sm:text-5xl font-light leading-tight">
              กำไลเงินน่านตอกลายโบราณ <br />
              <span className="font-normal italic text-transparent bg-clip-text bg-gradient-to-r from-[#F3E5AB] via-[#E5C378] to-[#C5A059]">
                มนต์เสน่ห์แห่งหัตถศิลป์ล้านนา
              </span>
            </h2>

            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-light">
              ทุกริ้วลายตอกดอกพิกุลและลายหัวบัว เกิดจากปลายค้อนและสิ่วของช่างเงินเมืองน่านรุ่นครู ถ่ายทอดความเชื่อสิริมงคลและความงามอันเป็นนิรันดร์
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="/catalog?cat=กำไล"
                className="glint-effect inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs font-semibold text-[#0B0B0D] bg-gradient-to-r from-[#F3E5AB] via-[#E5C378] to-[#C5A059] hover:brightness-110 shadow-xl transition-all"
              >
                <span>ยลโฉมคอลเลกชันกำไลน่าน</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
