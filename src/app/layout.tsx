import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Wanich Jewelry (วานิชจิวเวลรี่) | เครื่องเงินแท้ 925 & หัตถศิลป์เครื่องเงินน่าน",
  description:
    "ผู้ผลิตและจำหน่ายเครื่องประดับเงินแท้ 925 เครื่องเงินน่านโบราณ กำไลโอนิกซ์ฝังทับทิมแท้ สร้อยข้อมือโซ่เงินตัน และบริการสั่งทำเครื่องประดับพิเศษ 3D CAD มาตรฐานส่งออก 20+ ปี",
  keywords: [
    "Wanich Jewelry",
    "วานิชจิวเวลรี่",
    "เครื่องเงินแท้ 925",
    "เครื่องเงินน่าน",
    "กำไลเงินแท้",
    "สร้อยข้อมือเงิน",
    "เข็มขัดเงินโบราณ",
    "กำไลโอนิกซ์",
    "ดอยซิลเวอร์แฟคตอรี่",
    "จิวเวลรี่เงินแท้",
  ],
  icons: {
    icon: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className="scroll-smooth">
      <body className="antialiased min-h-screen flex flex-col bg-[#FAF8F5] text-[#18181B]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
