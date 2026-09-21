import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0B0B0D] flex items-center justify-center px-4 text-center">
      <div className="max-w-md space-y-4">
        <span className="text-xs font-mono text-[#C5A059] uppercase tracking-widest block">
          404 NOT FOUND
        </span>
        <h1 className="text-2xl font-light text-white font-heading-th">
          ไม่พบหน้าที่คุณต้องการ
        </h1>
        <p className="text-xs text-zinc-400">
          ชิ้นงานเครื่องประดับหรือหน้าที่คุณกำลังค้นหาอาจถูกย้าย หรือไม่มีอยู่ในระบบ
        </p>
        <div className="pt-2">
          <Link
            href="/catalog"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium text-[#0B0B0D] bg-gradient-to-r from-[#F3E5AB] via-[#E5C378] to-[#C5A059] hover:brightness-110 transition-all cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>กลับไปเลือกชมคอลเลกชัน</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
