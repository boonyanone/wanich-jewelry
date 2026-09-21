import React from "react";
import Image from "next/image";

export default function AboutFounders() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      <div className="lg:col-span-6 space-y-5">
        <span className="text-xs font-bold text-[#E5C378] uppercase tracking-wider font-mono">
          ✦ ประวัติความเป็นมาและการก่อตั้ง
        </span>
        <h2 className="font-serif-luxury text-3xl sm:text-4xl font-light text-white leading-tight">
          จากหัวใจช่างหัตถกรรมเมืองน่าน <br />
          <span className="italic text-[#F3E5AB]">สู่มาตรฐานจิวเวลรี่ส่งออกสากล</span>
        </h2>
        <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-light">
          <strong className="text-white">บริษัท ดีเอส วาณิช จำกัด (DS WANICH CO., LTD.)</strong> ภายใต้แบรนด์ <strong className="text-[#E5C378]">Wanich Jewelry (วานิชจิวเวลรี่)</strong> ก่อตั้งขึ้นโดย <strong className="text-white">คุณชวภรณ์ จันทร์สายชล</strong> (ประธานบริษัทและหัวหน้านักออกแบบ) และ <strong className="text-white">คุณชัยพฤกษ์ รุ่งรชตะวาณิช</strong> (รองประธานและผู้จัดการ บริษัท ดอยซิลเวอร์แฟคตอรี่ จำกัด)
        </p>
        <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-light">
          ด้วยความผูกพันและประสบการณ์คลุกคลีในวงการผลิตและส่งออกเครื่องประดับเงินแท้ของอำเภอปัว จังหวัดน่าน มายาวนานกว่า 20 ปี เรามุ่งมั่นที่จะนำลายตอกเงินโบราณอันทรงคุณค่ามาผสมผสานกับนวัตกรรมการออกแบบ 3D CAD ยุคใหม่ เพื่อให้เครื่องเงินน่านสามารถสวมใส่ได้อย่างสง่างามในชีวิตประจำวันและงานพิธีสำคัญ
        </p>
      </div>

      <div className="lg:col-span-6">
        <div className="relative aspect-4/3 rounded-3xl overflow-hidden shadow-2xl border border-[#C5A059]/40 bg-[#14141A]">
          <Image
            src="/images/heritage/heritage-team.jpg"
            alt="ทีมงานและผู้บริหารวานิชจิวเวลรี่"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-5 left-5 right-5 text-white">
            <span className="text-[10px] uppercase tracking-wider text-[#E5C378] font-bold block font-mono">
              DOI SILVER FACTORY & WANICH JEWELRY TEAM
            </span>
            <p className="font-heading-th text-xs font-light text-zinc-300">
              ทีมช่างฝีมือผู้ชำนาญการ ณ อำเภอปัว จังหวัดน่าน
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
