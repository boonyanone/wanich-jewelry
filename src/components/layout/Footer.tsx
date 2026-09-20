import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, MessageCircle, ShieldCheck, Award, Sparkles, Clock } from "lucide-react";
import brandData from "@/data/brand.json";

export default function Footer() {
  return (
    <footer className="bg-[#18181B] text-[#FAF8F5] pt-16 pb-10 border-t border-[#C5A059]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Brand Story & Trust Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-zinc-800">
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 overflow-hidden rounded-full border border-[#C5A059] p-0.5 bg-white">
                <Image
                  src="/images/logo.png"
                  alt="Wanich Jewelry Logo"
                  fill
                  className="object-contain p-1"
                />
              </div>
              <div>
                <span className="font-serif-luxury text-xl font-bold tracking-wider text-white block">
                  WANICH <span className="text-[#D4AF37]">JEWELRY</span>
                </span>
                <span className="text-xs text-zinc-400 font-light block">
                  {brandData.company}
                </span>
              </div>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              ผู้ผลิตและจัดจำหน่ายเครื่องประดับเงินแท้ 925 และหัตถศิลป์เครื่องเงินน่านโบราณ ต่อยอดจากประสบการณ์ช่างทองและช่างเงินดอยซิลเวอร์แฟคตอรี่กว่า 20 ปี สู่ผลงานระดับพรีเมียม
            </p>
            <div className="pt-2 flex items-center gap-3">
              <div className="flex items-center gap-1.5 text-xs text-[#E5C378]">
                <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
                <span>เงินแท้ 92.5% - 95%</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-[#E5C378]">
                <Award className="w-4 h-4 text-[#C5A059]" />
                <span>งานฝีมือ 20+ ปี</span>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider text-[#D4AF37] uppercase mb-4 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>คอลเลกชันเครื่องประดับ</span>
            </h4>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              <li>
                <Link href="/catalog?cat=bangles" className="hover:text-[#E5C378] transition-colors">
                  กำไลเงินแท้ 925 & กำไลน่านตอกลาย
                </Link>
              </li>
              <li>
                <Link href="/catalog?cat=bracelets" className="hover:text-[#E5C378] transition-colors">
                  สร้อยข้อมือโซ่เงินผู้ชาย & ผู้หญิง
                </Link>
              </li>
              <li>
                <Link href="/catalog?cat=belts" className="hover:text-[#E5C378] transition-colors">
                  เข็มขัดเงินแท้โบราณสำหรับชุดไทย
                </Link>
              </li>
              <li>
                <Link href="/catalog?cat=onyx" className="hover:text-[#E5C378] transition-colors">
                  กำไลหินแท้โอนิกซ์ฝังทับทิมแท้
                </Link>
              </li>
              <li>
                <Link href="/catalog?cat=rings" className="hover:text-[#E5C378] transition-colors">
                  แหวนเงินแท้ & แหวนพลอยมงคล
                </Link>
              </li>
              <li>
                <Link href="/bespoke" className="hover:text-[#E5C378] transition-colors">
                  บริการสั่งทำเครื่องประดับพิเศษ (3D CAD)
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Showrooms & Counters */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider text-[#D4AF37] uppercase mb-4 flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5" />
              <span>สาขาและจุดจำหน่าย</span>
            </h4>
            <div className="space-y-3 text-xs text-zinc-400">
              {brandData.retailBranches.map((branch, idx) => (
                <div key={idx} className="border-l-2 border-[#C5A059]/40 pl-3">
                  <p className="font-medium text-zinc-200">{branch.name}</p>
                  <p className="text-[11px] text-zinc-400 mt-0.5">{branch.address}</p>
                  <p className="text-[10px] text-[#C5A059] flex items-center gap-1 mt-0.5">
                    <Clock className="w-2.5 h-2.5" />
                    <span>{branch.hours}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Col 4: Contact & VIP Line */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider text-[#D4AF37] uppercase mb-4 flex items-center gap-2">
              <Phone className="w-3.5 h-3.5" />
              <span>ติดต่อปรึกษาผู้เชี่ยวชาญ</span>
            </h4>
            <div className="space-y-2.5 text-xs text-zinc-400">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C5A059]" />
                <a href="tel:088-260-4198" className="hover:text-white transition-colors">
                  088-260-4198, 086-364-4281
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-[#10B981]" />
                <a
                  href={brandData.lineUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  LINE ID: <span className="text-[#10B981] font-semibold">{brandData.lineId}</span>
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#C5A059]" />
                <a href={`mailto:${brandData.email}`} className="hover:text-white transition-colors">
                  {brandData.email}
                </a>
              </div>

              <div className="pt-3">
                <a
                  href={brandData.lineUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg bg-[#06C755] text-white font-medium hover:bg-[#05b34c] transition-colors shadow"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>แอด LINE สั่งซื้อ/สอบถาม</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-zinc-500 gap-4">
          <p>
            © {new Date().getFullYear()} {brandData.company}. สงวนลิขสิทธิ์ทุกประการ.
          </p>
          <div className="flex items-center gap-6">
            <span className="hover:text-zinc-400">Sterling Silver 925 Hallmark</span>
            <span className="hover:text-zinc-400">Handmade Nan Craftsmanship</span>
            <Link href="/admin" className="text-zinc-600 hover:text-[#C5A059] transition-colors">
              ระบบหลังบ้าน (Admin)
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
