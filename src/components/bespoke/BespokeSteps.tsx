import React from "react";
import { Sparkles } from "lucide-react";

export default function BespokeSteps() {
  const steps = [
    {
      num: "01",
      title: "1. ปรึกษาแบบ & เลือกอัญมณี",
      desc: "ส่งรูปตัวอย่าง ขนาดแหวน หรือไอเดียที่คุณต้องการ พร้อมเลือกอัญมณีแท้ที่ต้องการฝัง",
    },
    {
      num: "02",
      title: "2. ขึ้นรูป 3D CAD Render",
      desc: "ช่างออกแบบจำลองภาพ 3 มิติทุกมุมมองเพื่อความแม่นยำก่อนเริ่มกระบวนการหล่อ",
    },
    {
      num: "03",
      title: "3. หล่อตัวเรือน & ตอกลายฝังอัญมณี",
      desc: "หล่อเนื้อเงินแท้ 925 / ทองคำ 18K และตอกลาย/ฝังอัญมณีด้วยความประณีตระดับสูง",
    },
    {
      num: "04",
      title: "4. ตรวจสอบคุณภาพ & ส่งมอบ",
      desc: "ขัดเงา ตรวจสอบน้ำหนักและความบริสุทธิ์ พร้อมใบรับประกันและกล่องกำมะหยี่หรูหรา",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="bg-[#121217] rounded-3xl p-6 sm:p-8 border border-white/10 shadow-xl space-y-6">
        <h2 className="font-serif-luxury text-2xl font-light text-white flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-[#E5C378]" />
          <span>ขั้นตอนการสั่งทำพิเศษ 4 ขั้นตอน</span>
        </h2>

        <div className="space-y-6">
          {steps.map((s) => (
            <div key={s.num} className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-[#C5A059]/40 flex items-center justify-center font-serif-luxury font-bold text-[#E5C378] shrink-0">
                {s.num}
              </div>
              <div>
                <h3 className="font-heading-th text-sm font-semibold text-white">{s.title}</h3>
                <p className="text-xs text-zinc-400 mt-1 font-light leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#16161E] text-white rounded-3xl p-6 sm:p-8 border border-[#C5A059]/40 space-y-3 shadow-2xl">
        <span className="text-[10px] uppercase tracking-wider text-[#E5C378] font-mono">
          FACTORY & MACHINERY STANDARDS
        </span>
        <h3 className="font-serif-luxury text-xl font-light">
          เครื่องจักรทันสมัย มาตรฐานส่งออกสากล
        </h3>
        <p className="text-xs text-zinc-400 leading-relaxed font-light">
          โรงงานวานิชจิวเวลรี่พร้อมด้วยเครื่องจักรเลเซอร์ (Laser Machine), เครื่องฉีดเทียน (Wax Injection) และเตาหลอมสุญญากาศมาตรฐานส่งออก รองรับทั้งงานสั่งทำชิ้นเดียวและงาน OEM
        </p>
      </div>
    </div>
  );
}
