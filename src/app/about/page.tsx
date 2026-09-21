import React from "react";
import { Sparkles } from "lucide-react";
import AboutFounders from "@/components/about/AboutFounders";
import AboutGallery from "@/components/about/AboutGallery";

export default function AboutPage() {
  return (
    <div className="pt-28 pb-24 bg-[#0B0B0D] min-h-screen text-white">
      <div className="bg-[#0E0E12] border-b border-white/10 py-12 mb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-[#C5A059]/40">
            <Sparkles className="w-3.5 h-3.5 text-[#E5C378]" />
            <span className="text-xs font-semibold text-[#E5C378] uppercase tracking-wider">
              OUR HERITAGE & CRAFTSMANSHIP
            </span>
          </div>
          <h1 className="font-serif-luxury text-3xl sm:text-5xl font-light text-white">
            เรื่องราวแห่งวานิชจิวเวลรี่
          </h1>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-2xl mx-auto">
            สืบสานหัตถศิลป์เครื่องเงินเมืองน่านโบราณ ต่อยอดจากประสบการณ์ช่างทองและช่างเงินกว่า 20 ปี
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <AboutFounders />
        <AboutGallery />
      </div>
    </div>
  );
}
