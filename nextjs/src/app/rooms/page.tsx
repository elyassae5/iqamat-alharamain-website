"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence } from "framer-motion";
import { apartments } from "@/lib/apartments";
import { useLanguage } from "@/lib/language-context";
import { CHECK_IN, CHECK_OUT, roomTypes, STARTING_PRICE_MAD, whatsappLink } from "@/lib/site";
import GalleryModal from "@/components/GalleryModal";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";

export default function RoomsPage() {
  const { t } = useLanguage();
  const [open, setOpen] = useState<{ apt: number; img: number } | null>(null);
  const active = open ? apartments[open.apt] : null;

  return (
    <>
      {/* HEADER */}
      <section className="pt-32 md:pt-44">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <Reveal>
            <p className="eyebrow text-clay">{t("The apartments", "الشقق")}</p>
            <h1 className="font-display mt-5 max-w-4xl text-5xl leading-[1.02] sm:text-6xl lg:text-[5.5rem]">
              {t("Choose your apartment.", "اختر شقتك.")}
            </h1>
            <p className="mt-7 max-w-xl text-lg text-ink-soft">
              {t(
                "Each apartment offers comfort and authentic Moroccan charm in the heart of Zaio. Tap any photo to see the full gallery.",
                "كل شقة تقدم الراحة والسحر المغربي الأصيل في قلب مدينة زايو. اضغط على أي صورة لمشاهدة المعرض كاملاً."
              )}
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <dl className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-line bg-line lg:grid-cols-4">
              <div className="bg-paper p-4 sm:p-6">
                <dt className="text-sm text-muted">{t("From, per night", "ابتداءً من، لليلة")}</dt>
                <dd className="font-display mt-2 text-lg sm:text-2xl">
                  {STARTING_PRICE_MAD} {t("MAD", "درهم")}
                </dd>
              </div>
              <div className="bg-paper p-4 sm:p-6">
                <dt className="text-sm text-muted">{t("Check-in / Check-out", "الوصول / المغادرة")}</dt>
                <dd className="font-display mt-2 text-lg sm:text-2xl">
                  <span dir="ltr">{CHECK_IN} / {CHECK_OUT}</span>
                </dd>
              </div>
              {roomTypes.map((type) => (
                <div key={type.en} className="bg-paper p-4 sm:p-6">
                  <dt className="text-sm text-muted">{t(type.en, type.ar)}</dt>
                  <dd className="font-display mt-2 text-lg sm:text-2xl">{t(type.detailEn, type.detailAr)}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <nav
            aria-label={t("Jump to an apartment", "انتقل إلى شقة")}
            className="no-scrollbar -mx-4 mt-10 flex gap-2 overflow-x-auto px-4 sm:mx-0 sm:px-0"
          >
            {apartments.map((apt) => (
              <a
                key={apt.id}
                href={`#apartment-${apt.id}`}
                className="shrink-0 rounded-full border border-line px-4 py-2 text-sm font-semibold transition-colors hover:border-ink hover:bg-ink hover:text-paper"
              >
                {t(apt.titleEn, apt.titleAr)}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* APARTMENTS */}
      <section className="pb-24 pt-10 md:pb-32 md:pt-16">
        <div className="mx-auto max-w-7xl space-y-20 px-4 sm:px-6 md:space-y-32 lg:px-10">
          {apartments.map((apt, i) => {
            const flip = i % 2 === 1;
            const title = t(apt.titleEn, apt.titleAr);
            const extra = apt.images.length - 3;
            const secondary = apt.images.filter((src) => src !== apt.coverImage).slice(0, 2);
            const message = t(
              `Hello, I would like to ask about ${apt.titleEn} at Iqamat Al-Haramain.`,
              `مرحباً، أود الاستفسار عن ${apt.titleAr} في إقامة الحرمين.`
            );
            return (
              <article
                key={apt.id}
                id={`apartment-${apt.id}`}
                className="grid scroll-mt-28 gap-8 lg:grid-cols-12 lg:items-center lg:gap-14"
              >
                <Reveal className={`lg:col-span-7 ${flip ? "lg:order-2" : ""}`}>
                  <div className="grid grid-cols-3 gap-2 sm:gap-3">
                    <button
                      type="button"
                      onClick={() => setOpen({ apt: i, img: apt.images.indexOf(apt.coverImage) })}
                      aria-label={t(`Open ${title} gallery`, `فتح معرض ${title}`)}
                      className="group relative col-span-3 aspect-[4/3] overflow-hidden rounded-3xl bg-stone"
                    >
                      <Image
                        src={apt.coverImage}
                        alt=""
                        fill
                        quality={70}
                        sizes="(max-width: 1024px) 100vw, 58vw"
                        className="photo-grade object-cover transition-transform duration-[1.4s] ease-(--ease-soft) group-hover:scale-105"
                      />
                    </button>
                    {secondary.map((src) => (
                        <button
                          type="button"
                          key={src}
                          onClick={() => setOpen({ apt: i, img: apt.images.indexOf(src) })}
                          aria-label={t(`Open ${title} gallery`, `فتح معرض ${title}`)}
                          className="group relative aspect-square overflow-hidden rounded-2xl bg-stone"
                        >
                          <Image
                            src={src}
                            alt=""
                            fill
                            quality={70}
                            sizes="(max-width: 1024px) 33vw, 20vw"
                            className="photo-grade object-cover transition-transform duration-[1.4s] ease-(--ease-soft) group-hover:scale-105"
                          />
                        </button>
                    ))}
                    <button
                      type="button"
                      onClick={() => setOpen({ apt: i, img: 0 })}
                      className="flex aspect-square flex-col items-center justify-center gap-1 rounded-2xl bg-ink text-paper transition-colors hover:bg-night-soft"
                    >
                      <Icon name="images" className="h-6 w-6 text-brass" />
                      <span dir="ltr" className="font-display text-2xl leading-none">+{extra}</span>
                      <span className="text-xs text-paper/70">{t("photos", "صور")}</span>
                    </button>
                  </div>
                </Reveal>

                <Reveal delay={0.1} className={`lg:col-span-5 ${flip ? "lg:order-1" : ""}`}>
                  <p className="font-display text-7xl leading-none text-clay/25 md:text-8xl" aria-hidden="true">
                    {String(apt.id).padStart(2, "0")}
                  </p>
                  <h2 className="font-display mt-2 text-4xl sm:text-5xl">{title}</h2>
                  <p className="mt-5 text-lg text-ink-soft">{t(apt.descriptionEn, apt.descriptionAr)}</p>

                  <div className="mt-7 flex items-end gap-3 border-y border-line py-5">
                    <p className="font-display text-4xl">
                      {apt.priceMAD}
                      <span className="ms-1.5 font-sans text-base text-muted">{t("MAD / night", "درهم / ليلة")}</span>
                    </p>
                    <p className="mb-1 text-sm text-muted">
                      <span className="sr-only">{t("Was", "كان")} </span>
                      <s>{apt.originalPriceMAD} {t("MAD", "درهم")}</s>
                    </p>
                  </div>

                  <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                    <a
                      href={whatsappLink(message)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-clay"
                    >
                      <Icon name="whatsapp" className="h-5 w-5" />
                      {t("Ask about this apartment", "استفسر عن هذه الشقة")}
                    </a>
                    <button type="button" onClick={() => setOpen({ apt: i, img: 0 })} className="btn btn-line">
                      <Icon name="images" className="h-5 w-5" />
                      {t(`View all ${apt.photoCount} photos`, `عرض كل الصور (${apt.photoCount})`)}
                    </button>
                  </div>
                </Reveal>
              </article>
            );
          })}
        </div>
      </section>

      <AnimatePresence>
        {open && active && (
          <GalleryModal
            images={active.images}
            index={open.img}
            title={t(active.titleEn, active.titleAr)}
            onClose={() => setOpen(null)}
            onIndexChange={(img) => setOpen({ apt: open.apt, img })}
          />
        )}
      </AnimatePresence>
    </>
  );
}
