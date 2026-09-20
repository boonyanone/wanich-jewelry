export interface Product {
  id: string;
  sku: string;
  title: string;
  slug: string;
  category: string;
  categoryEn: string;
  price: number;
  priceFormatted: string;
  description: string;
  shortExcerpt: string;
  image: string;
  images: string[];
  isFeatured: boolean;
  purity: string;
  craftsmanship: string;
  dimensions?: string;
  weightGrams?: number;
}

export interface ProductCategory {
  id: string;
  name: string;
  nameEn: string;
  slug: string;
  description: string;
  image: string;
  itemCount: number;
}

export interface RetailBranch {
  name: string;
  address: string;
  hours: string;
  tel: string;
  lat?: number;
  lng?: number;
}

export interface SilverPriceData {
  buyPricePerKg: number;
  sellPricePerKg: number;
  pureSilverPct: number;
  standardSilverPct: number;
  updatedAt: string;
}

export interface BrandInfo {
  name: string;
  nameTh: string;
  company: string;
  tagline: string;
  taglineEn: string;
  experienceYears: number;
  phoneNumbers: string[];
  lineId: string;
  lineUrl: string;
  email: string;
  facebook: string;
  facebookName: string;
  factoryAddress: string;
  retailBranches: RetailBranch[];
  silverPriceDefault: SilverPriceData;
}
