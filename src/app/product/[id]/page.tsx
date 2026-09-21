import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import productsData from "@/data/products.json";
import { Product } from "@/types/jewelry";
import ProductGalleryView from "@/components/product/ProductGalleryView";
import ProductMainInfo from "@/components/product/ProductMainInfo";
import ProductSpecsTabs from "@/components/product/ProductSpecsTabs";
import RelatedProductsSection from "@/components/product/RelatedProductsSection";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const product = (productsData as Product[]).find((p) => p.id === id);
  if (!product) return { title: "ชิ้นงานไม่พบ | WANICH Jewelry" };

  return {
    title: `${product.title} (${product.sku}) | WANICH Jewelry เครื่องเงินแท้`,
    description: `${product.title} เครื่องเงินแท้ 92.5% สลักตอกลายโบราณเมืองน่าน วานิช จิวเวลรี่`,
    openGraph: {
      title: `${product.title} | WANICH Jewelry`,
      description: `เครื่องประดับเงินแท้ รหัส ${product.sku} - วานิช จิวเวลรี่`,
      images: [product.image],
    },
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { id } = await params;
  const allProducts = productsData as Product[];
  const product = allProducts.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  return (
    <div className="pt-28 pb-20 bg-[#0B0B0D] min-h-screen text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left: Gallery & Zoom Loupe */}
          <div className="lg:col-span-6 w-full">
            <ProductGalleryView product={product} />
          </div>

          {/* Right: Info, Price, Actions */}
          <div className="lg:col-span-6 w-full">
            <ProductMainInfo product={product} />
          </div>
        </div>

        {/* Bottom: Tabs (Specs, Craft, Care) */}
        <ProductSpecsTabs product={product} />

        {/* Bottom: Related Products */}
        <RelatedProductsSection currentProduct={product} allProducts={allProducts} />
      </div>
    </div>
  );
}
