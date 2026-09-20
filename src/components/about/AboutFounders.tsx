import React from "react";
import Image from "next/image";

export default function AboutFounders() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      <div className="lg:col-span-6 space-y-5">
        <span className="text-xs font-bold text-[#8C7034] uppercase tracking-wider">
          ✦ ประวัติความเป็นมาและการก่อตั้ง
        </span>
        <h2 className="font-serif-luxury text-3xl sm:text-4xl font-light text-[#18181B] leading-tight">
          จากหัวใจช่างหัตถกรรมเมืองน่าน <br />
          <span className="italic text-[#B8934A]">สู่มาตรฐานจิวเวลรี่ส่งออกสากล</span>
        </h2>
        <p className="text-xs sm:text-sm text-[#52525B] leading-relaxed">
          <strong>บริษัท ดีเอส วาณิช จำกัด (DS WANICH CO., LTD.)</strong> ภายใต้แบรนด์ <strong>Wanich Jewelry (วานิชจิวเวลรี่)</strong> ก่อตั้งขึ้นโดย <strong>คุณชวภรณ์ จันทร์สายชล</strong> (ประธานบริษัทและหัวหน้านักออกแบบ) และ <strong>คุณชัยพฤกษ์ รุ่งรชตะวาณิช</strong> (รองประธานและผู้จัดการ บริษัท ดอยซิลเวอร์แฟคตอรี่ จำกัด)
        </p>
        <p className="text-xs sm:text-sm text-[#52525B] leading-relaxed">
          ด้วยความผูกพันและประสบการณ์คลุกคลีในวงการผลิตและส่งออกเครื่องประดับเงินแท้ของอำเภอปัว จังหวัดน่าน มายาวนานกว่า 20 ปี เรามุ่งมั่นที่จะนำลายตอกเงินโบราณอันทรงคุณค่ามาผสมผสานกับนวัตกรรมการออกแบบ 3D CAD ยุคใหม่ เพื่อให้เครื่องเงินน่านสามารถสวมใส่ได้อย่างสง่างามในชีวิตประจำวันและงานพิธีสำคัญ
        </p>
      </div>

      <div className="lg:col-span-6">
        <div className="relative aspect-4/3 rounded-2xl overflow-hidden shadow-xl border border-[#C5A059]/40 bg-zinc-100">
          <Image
            src="/images/heritage/heritage-team.jpg"
            alt="ทีมงานและผู้บริหารวานิชจิวเวลรี่"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <span className="text-[10px] uppercase tracking-wider text-[#E5C378] font-bold block">
              Doi Silver Factory & Wanich Jewelry Team
            </span>
            <p className="font-heading-th text-xs font-medium">
              ทีมช่างฝีมือผู้ชำนาญการ ณ อำเภอปัว จังหวัดน่าน
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
