"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { ZoomIn } from "lucide-react";

interface JewelryImageLoupeProps {
  src: string;
  alt: string;
}

export default function JewelryImageLoupe({ src, alt }: JewelryImageLoupeProps) {
  const [isZooming, setIsZooming] = useState(false);
  const [coords, setCoords] = useState({ x: 50, y: 50 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setCoords({
      x: Math.max(0, Math.min(100, x)),
      y: Math.max(0, Math.min(100, y)),
    });
  };

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsZooming(true)}
      onMouseLeave={() => setIsZooming(false)}
      onMouseMove={handleMouseMove}
      className="relative w-full h-full cursor-crosshair overflow-hidden select-none"
    >
      {/* Normal Image */}
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className={`object-contain p-2 transition-opacity duration-200 ${
          isZooming ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* Loupe Macro Zoom on Hover */}
      {isZooming && (
        <div
          className="absolute inset-0 bg-no-repeat transition-all duration-75"
          style={{
            backgroundImage: `url(${src})`,
            backgroundPosition: `${coords.x}% ${coords.y}%`,
            backgroundSize: "260%",
          }}
        />
      )}

      {/* Gentle Hint Pill */}
      <div
        className={`absolute bottom-2 right-2 pointer-events-none transition-opacity duration-200 ${
          isZooming ? "opacity-0" : "opacity-75"
        }`}
      >
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-black/75 backdrop-blur-xs text-[9px] font-mono text-[#F3E5AB] border border-white/10">
          <ZoomIn className="w-2.5 h-2.5 text-[#C5A059]" />
          <span>เลื่อนเมาส์ส่องลายซูม 2.6x</span>
        </span>
      </div>
    </div>
  );
}
