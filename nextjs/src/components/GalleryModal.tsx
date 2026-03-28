"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";

interface GalleryModalProps {
  images: string[];
  currentIndex: number;
  title: string;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function GalleryModal({
  images,
  currentIndex,
  title,
  onClose,
  onPrev,
  onNext,
}: GalleryModalProps) {
  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    },
    [onClose, onPrev, onNext]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [handleKey]);

  return (
    <div
      className="fixed inset-0 z-100 flex items-center justify-center bg-brown-deep/95 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Counter */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 text-brown-light text-xs tracking-widest uppercase">
        {title} — {currentIndex + 1} / {images.length}
      </div>

      {/* Close */}
      <button
        type="button"
        onClick={onClose}
        className="absolute top-4 right-6 text-brown-light hover:text-gold transition-colors text-2xl leading-none"
        aria-label="Close gallery"
      >
        ✕
      </button>

      {/* Image */}
      <div
        className="relative max-w-4xl max-h-[80vh] w-full mx-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full h-[70vh]">
          <Image
            src={images[currentIndex]}
            alt={`${title} - photo ${currentIndex + 1}`}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 80vw"
          />
        </div>
        <div className="absolute inset-0 border border-gold/20 pointer-events-none" />
      </div>

      {/* Prev */}
      <button
        type="button"
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-brown-light hover:text-gold transition-colors border border-gold/30 hover:border-gold bg-brown-deep/60"
        aria-label="Previous image"
      >
        ←
      </button>

      {/* Next */}
      <button
        type="button"
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-brown-light hover:text-gold transition-colors border border-gold/30 hover:border-gold bg-brown-deep/60"
        aria-label="Next image"
      >
        →
      </button>

      {/* Thumbnail strip */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1.5 px-4 overflow-x-auto">
        {images.map((img, i) => (
          <button
            type="button"
            key={i}
            onClick={(e) => e.stopPropagation()}
            aria-label={`View photo ${i + 1}`}
            className={`relative w-12 h-8 shrink-0 border transition-all duration-200 ${
              i === currentIndex
                ? "border-gold"
                : "border-gold/20 opacity-50 hover:opacity-80"
            }`}
          >
            <Image
              src={img}
              alt={`${title} thumbnail ${i + 1}`}
              fill
              className="object-cover"
              sizes="48px"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
