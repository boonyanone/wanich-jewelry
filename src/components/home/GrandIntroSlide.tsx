"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, ArrowRight, Gem, ShieldCheck } from "lucide-react";
import brandData from "@/data/brand.json";

export interface HeroSlideData {
  id: string;
  badge: string;
  frenchTitle: string;
  thaiTitle: string;
  thaiHighlight: string;
  desc: string;
  image: string;
  productHighlight: {
    title: string;
    sku: string;
    price: string;
  };
}

export default function GrandIntroSlide({ slide, isActive }: { slide: HeroSlideData; isActive: boolean }) {
  return (
    <div
      className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
        isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
      }`}
    >
      {/* Background Cinematic Visual with Dark Luxury Vignette */}
      <div className="absolute inset-0">
        <Image
          src={slide.image}
          alt={slide.thaiTitle}
          fill
          priority
          className="object-cover object-center scale-105 animate-in zoom-in-95 duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D] via-[#0B0B0D]/70 to-[#0B0B0D]/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0D] via-[#0B0B0D]/60 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(197,160,89,0.12)_0%,transparent_70%)] pointer-events-none" />
      </div>

      {/* Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center pt-24 pb-20">
        <div className="max-w-2xl lg:max-w-3xl space-y-5">
          {/* French / Heritage Label */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-[#C5A059]/40 shadow-lg">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E5C378] animate-ping" />
            <span className="text-[9.5px] sm:text-[10.5px] font-medium tracking-[0.25em] text-[#E5C378] uppercase font-mono">
              {slide.badge}
            </span>
          </div>

          {/* Headline */}
          <div className="space-y-1.5">
            <span className="font-serif-luxury text-xs sm:text-sm font-normal tracking-[0.25em] text-zinc-400 uppercase block font-mono">
              {slide.frenchTitle}
            </span>
            <h1 className="font-serif-luxury text-2xl sm:text-4xl lg:text-5xl font-light text-white leading-[1.18] tracking-wide">
              {slide.thaiTitle} <br />
              <span className="font-normal italic text-transparent bg-clip-text bg-gradient-to-r from-[#F3E5AB] via-[#E5C378] to-[#C5A059]">
                {slide.thaiHighlight}
              </span>
            </h1>
          </div>

          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-light max-w-xl">
            {slide.desc}
          </p>

          {/* CTAs */}
          <div className="pt-2 flex flex-wrap items-center gap-3">
            <Link
              href="/catalog"
              className="glint-effect inline-flex items-center gap-2 px-5 sm:px-7 py-3 rounded-full text-xs font-semibold text-[#0B0B0D] bg-gradient-to-r from-[#F3E5AB] via-[#E5C378] to-[#C5A059] shadow-xl hover:brightness-110 transition-all transform hover:-translate-y-0.5"
            >
              <span>ยลโฉมคอลเลกชันเครื่องเงิน</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <a
              href={brandData.lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 sm:px-6 py-3 rounded-full text-xs font-medium text-zinc-200 bg-white/10 hover:bg-white/20 border border-[#C5A059]/40 backdrop-blur-md transition-all"
            >
              <Gem className="w-3.5 h-3.5 text-[#E5C378]" />
              <span>สั่งทำพิเศษ 3D CAD</span>
            </a>
          </div>

          {/* Guarantee Badges */}
          <div className="pt-6 border-t border-white/15 flex flex-wrap items-center gap-5 sm:gap-7 text-[11px] text-zinc-300">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#E5C378]" />
              เงินแท้ 92.5% - 95% มีใบรับรอง
            </span>
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[#E5C378]" />
              ตอกลายโบราณด้วยมือช่างน่าน
            </span>
            <span className="hidden sm:flex items-center gap-1.5">
              <Gem className="w-4 h-4 text-[#E5C378]" />
              โชว์รูมสยามสแควร์วัน & น่าน
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
