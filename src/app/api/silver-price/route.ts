import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { BrandInfo, SilverPriceData } from "@/types/jewelry";

const brandFilePath = path.join(process.cwd(), "src/data/brand.json");

export async function GET() {
  try {
    const fileData = fs.readFileSync(brandFilePath, "utf-8");
    const brand: BrandInfo = JSON.parse(fileData);
    return NextResponse.json(brand.silverPriceDefault);
  } catch (error) {
    return NextResponse.json({ error: "Failed to read silver price" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const newPriceData: SilverPriceData = await req.json();
    const fileData = fs.readFileSync(brandFilePath, "utf-8");
    const brand: BrandInfo = JSON.parse(fileData);

    brand.silverPriceDefault = {
      ...brand.silverPriceDefault,
      ...newPriceData,
      updatedAt: new Date().toLocaleDateString("th-TH", {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    fs.writeFileSync(brandFilePath, JSON.stringify(brand, null, 2), "utf-8");
    return NextResponse.json({ success: true, silverPrice: brand.silverPriceDefault });
  } catch (error) {
    return NextResponse.json({ error: "Failed to update silver price" }, { status: 500 });
  }
}
