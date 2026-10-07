"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { AnimatePresence, motion, PanInfo } from "framer-motion";
import { useLanguage } from "@/lib/language-context";
import Icon from "./Icon";

interface GalleryModalProps {
  images: string[];
  index: number;
  title: string;
  onClose: () => void;
  onIndexChange: (index: number) => void;
}

export default function GalleryModal({ images, index, title, onClose, onIndexChange }: GalleryModalProps) {
  const { t, isRTL } = useLanguage();
  const dialog = useRef<HTMLDivElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const thumbs = useRef<HTMLDivElement>(null);

  const count = images.length;
  const go = (step: number) => onIndexChange((index + step + count) % count);

  // Keep the latest handlers reachable from the one-time key listener.
  const handlers = useRef({ go, onClose });
  useEffect(() => {
    handlers.current = { go, onClose };
  });

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    closeButton.current?.focus();
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      const { go, onClose } = handlers.current;
      if (e.key === "Escape") onClose();
      // Arrow keys follow reading direction.
      if (e.key === "ArrowRight") go(isRTL ? -1 : 1);
      if (e.key === "ArrowLeft") go(isRTL ? 1 : -1);
      if (e.key === "Tab" && dialog.current) {
        const focusable = dialog.current.querySelectorAll<HTMLElement>("button");
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      previouslyFocused?.focus();
    };
  }, [isRTL]);

  useEffect(() => {
    thumbs.current
      ?.querySelector<HTMLElement>(`[data-index="${index}"]`)
      ?.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });
  }, [index]);

  const onDragEnd = (_: unknown, info: PanInfo) => {
    const swipe = info.offset.x + info.velocity.x * 0.2;
    if (Math.abs(swipe) < 60) return;
    // Swiping toward the start edge shows the next photo.
    const towardStart = isRTL ? swipe > 0 : swipe < 0;
    go(towardStart ? 1 : -1);
  };

  return (
    <motion.div
      ref={dialog}
      role="dialog"
      aria-modal="true"
      aria-label={t.gallery.label(title)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="on-dark fixed inset-0 z-[100] flex flex-col bg-night text-paper"
    >
      <div className="flex items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <div>
          <p className="font-display text-xl">{title}</p>
          <p className="text-sm text-paper/60" aria-live="polite">
            <span dir="ltr">
              {index + 1} / {count}
            </span>
          </p>
        </div>
        <button
          ref={closeButton}
          type="button"
          onClick={onClose}
          aria-label={t.gallery.close}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 transition-colors hover:bg-white/10"
        >
          <Icon name="close" className="h-5 w-5" />
        </button>
      </div>

      <div className="relative flex-1 overflow-hidden">
        <AnimatePresence initial={false} mode="popLayout">
          <motion.div
            key={index}
            className="absolute inset-0 touch-pan-y px-2 sm:px-20"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.6}
            onDragEnd={onDragEnd}
          >
            <Image
              src={images[index]}
              alt={t.gallery.photoAlt(title, index + 1, count)}
              fill
              quality={75}
              sizes="100vw"
              className="pointer-events-none select-none object-contain"
              draggable={false}
            />
          </motion.div>
        </AnimatePresence>

        <button
          type="button"
          onClick={() => go(-1)}
          aria-label={t.gallery.previous}
          className="absolute start-4 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 backdrop-blur transition-colors hover:bg-white/20 sm:flex"
        >
          <Icon name="chevron" className="h-5 w-5 -scale-x-100 rtl:scale-x-100" />
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label={t.gallery.next}
          className="absolute end-4 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 backdrop-blur transition-colors hover:bg-white/20 sm:flex"
        >
          <Icon name="chevron" className="h-5 w-5 rtl:-scale-x-100" />
        </button>
      </div>

      <div ref={thumbs} className="no-scrollbar flex gap-2 overflow-x-auto px-4 py-4 sm:justify-center sm:px-6">
        {images.map((src, i) => (
          <button
            type="button"
            key={src}
            data-index={i}
            onClick={() => onIndexChange(i)}
            aria-label={t.gallery.show(i + 1)}
            aria-current={i === index ? "true" : undefined}
            className={`relative h-14 w-20 shrink-0 overflow-hidden rounded-lg transition-opacity ${
              i === index ? "opacity-100 ring-2 ring-brass" : "opacity-45 hover:opacity-80"
            }`}
          >
            <Image src={src} alt="" fill quality={70} sizes="80px" className="object-cover" />
          </button>
        ))}
      </div>
    </motion.div>
  );
}
