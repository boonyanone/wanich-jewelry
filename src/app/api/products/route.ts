import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { Product } from "@/types/jewelry";

const productsFilePath = path.join(process.cwd(), "src/data/products.json");

export async function GET() {
  try {
    const fileData = fs.readFileSync(productsFilePath, "utf-8");
    const products: Product[] = JSON.parse(fileData);
    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json({ error: "Failed to read products" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const newProduct: Product = await req.json();
    const fileData = fs.readFileSync(productsFilePath, "utf-8");
    const products: Product[] = JSON.parse(fileData);

    // If ID exists, update; otherwise create
    const existingIndex = products.findIndex((p) => p.id === newProduct.id);
    if (existingIndex >= 0) {
      products[existingIndex] = newProduct;
    } else {
      newProduct.id = newProduct.id || Date.now().toString();
      products.unshift(newProduct);
    }

    fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2), "utf-8");
    return NextResponse.json({ success: true, product: newProduct });
  } catch (error) {
    return NextResponse.json({ error: "Failed to save product" }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    if (!id) {
      return NextResponse.json({ error: "Missing ID" }, { status: 400 });
    }

    const fileData = fs.readFileSync(productsFilePath, "utf-8");
    let products: Product[] = JSON.parse(fileData);
    products = products.filter((p) => p.id !== id);

    fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2), "utf-8");
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete product" }, { status: 500 });
  }
}
