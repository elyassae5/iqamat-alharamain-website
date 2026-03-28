"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { apartments } from "@/lib/apartments";
import { useLanguage } from "@/lib/language-context";
import GalleryModal from "@/components/GalleryModal";

export default function RoomsPage() {
  const { t } = useLanguage();
  const [selected, setSelected] = useState<{
    apartmentIndex: number;
    imageIndex: number;
  } | null>(null);

  const openGallery = (aptIdx: number, imgIdx = 0) =>
    setSelected({ apartmentIndex: aptIdx, imageIndex: imgIdx });

  const closeGallery = () => setSelected(null);

  const prev = () => {
    if (!selected) return;
    const apt = apartments[selected.apartmentIndex];
    setSelected({
      ...selected,
      imageIndex:
        (selected.imageIndex - 1 + apt.images.length) % apt.images.length,
    });
  };

  const next = () => {
    if (!selected) return;
    const apt = apartments[selected.apartmentIndex];
    setSelected({
      ...selected,
      imageIndex: (selected.imageIndex + 1) % apt.images.length,
    });
  };

  const activeApt = selected !== null ? apartments[selected.apartmentIndex] : null;

  return (
    <>
      {/* ─── PAGE HEADER ─── */}
      <section className="bg-linear-to-br from-brown-deep via-brown-dark to-brown pt-40 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 dot-texture-sm pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/40 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs tracking-[0.3em] text-white/60 uppercase font-medium mb-4"
          >
            {t("Our Collection", "مجموعتنا")}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-5xl lg:text-6xl font-bold text-white mb-5"
          >
            {t("Our Apartments", "شققنا")}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex justify-center mb-6"
          >
            <div className="h-px w-16 bg-linear-to-r from-transparent via-white/40 to-transparent" />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/75 text-xl max-w-xl mx-auto leading-relaxed"
          >
            {t(
              "Discover our eight elegantly appointed apartments, each offering comfort and authentic Moroccan charm in the heart of Zaio.",
              "اكتشف شققنا الثمانية الأنيقة، كل منها يقدم راحة وسحراً مغربياً أصيلاً في قلب مدينة زايو."
            )}
          </motion.p>
        </div>
      </section>

      {/* ─── APARTMENTS GRID ─── */}
      <section className="bg-ivory py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {apartments.map((apt, i) => (
              <motion.div
                key={apt.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group cursor-pointer card-lift rounded-sm overflow-hidden bg-ivory"
                onClick={() => openGallery(i)}
              >
                {/* Image */}
                <div className="relative aspect-4/3 overflow-hidden">
                  <Image
                    src={apt.coverImage}
                    alt={t(apt.titleEn, apt.titleAr)}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-brown-deep/70 via-brown-deep/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                  {/* Photo count */}
                  <div className="absolute top-4 right-4 bg-brown-deep/70 backdrop-blur-sm px-3 py-1.5 flex items-center gap-1.5">
                    <svg className="w-3 h-3 text-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                    </svg>
                    <span className="text-white text-xs">{apt.photoCount}</span>
                  </div>

                  {/* View gallery hint */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white text-xs tracking-[0.25em] uppercase border border-white/60 px-4 py-2">
                      {t("View Gallery", "عرض المعرض")}
                    </span>
                  </div>
                </div>

                {/* Card content */}
                <div className="pt-5 pb-6 px-4 border-b border-cream-dark">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-display text-xl font-semibold text-brown-dark group-hover:text-gold transition-colors">
                      {t(apt.titleEn, apt.titleAr)}
                    </h3>
                    <div className="text-right">
                      <p className="text-xs text-brown-medium line-through">
                        {apt.originalPriceMAD} MAD
                      </p>
                      <p className="text-amber font-bold text-base">
                        {apt.priceMAD} MAD
                        <span className="text-xs font-normal text-brown-medium">
                          {" "}/ {t("night", "ليلة")}
                        </span>
                      </p>
                    </div>
                  </div>
                  <p className="text-brown text-base leading-relaxed">
                    {t(apt.descriptionEn, apt.descriptionAr)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BOOKING CTA ─── */}
      <section className="bg-cream py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs tracking-[0.3em] text-gold uppercase font-medium mb-4">
              {t("Reserve Now", "احجز الآن")}
            </p>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-brown-deep mb-5">
              {t("Found Your Perfect Apartment?", "وجدت شقتك المثالية؟")}
            </h2>
            <p className="text-brown mb-8 leading-relaxed">
              {t(
                "Contact us via WhatsApp or phone to check availability and confirm your booking.",
                "تواصل معنا عبر واتساب أو الهاتف للتحقق من التوافر وتأكيد حجزك."
              )}
            </p>
            <a
              href="https://wa.me/212670959747"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-white text-sm tracking-widest uppercase font-medium hover:bg-gold-dark transition-colors"
            >
              {t("Book via WhatsApp", "احجز عبر واتساب")}
              <span>→</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Gallery modal */}
      {selected !== null && activeApt && (
        <GalleryModal
          images={activeApt.images}
          currentIndex={selected.imageIndex}
          title={t(activeApt.titleEn, activeApt.titleAr)}
          onClose={closeGallery}
          onPrev={prev}
          onNext={next}
        />
      )}
    </>
  );
}
