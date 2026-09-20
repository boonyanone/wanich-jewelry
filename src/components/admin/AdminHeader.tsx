import React from "react";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

export default function AdminHeader() {
  return (
    <div className="bg-white border-b border-zinc-200/80 py-8 mb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="space-y-1 text-center md:text-left">
          <div className="flex items-center gap-2 justify-center md:justify-start">
            <span className="w-2 h-2 rounded-full bg-[#10B981]"></span>
            <span className="text-xs font-bold text-[#8C7034] uppercase tracking-wider">
              Wanich Jewelry CMS Backoffice
            </span>
          </div>
          <h1 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#18181B]">
            ระบบจัดการหลังบ้าน (Admin Dashboard)
          </h1>
        </div>

        <Link
          href="/"
          target="_blank"
          className="px-4 py-2 rounded-full text-xs font-medium text-zinc-700 bg-[#FAF8F5] border border-zinc-200 hover:bg-[#F5EED9] flex items-center gap-1.5 transition-all"
        >
          <span>ดูหน้าเว็บจริง</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
