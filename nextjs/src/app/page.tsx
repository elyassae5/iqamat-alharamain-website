"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { apartments } from "@/lib/apartments";
import { useLanguage } from "@/lib/language-context";
import {
  amenities,
  CHECK_IN,
  CHECK_OUT,
  MAPS_HREF,
  PHONE_DISPLAY,
  PHONE_HREF,
  roomTypes,
  STARTING_PRICE_MAD,
  whatsappLink,
} from "@/lib/site";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";

const ease = [0.22, 1, 0.36, 1] as const;

export default function HomePage() {
  const { t, isRTL } = useLanguage();
  const rail = useRef<HTMLDivElement>(null);

  const scrollRail = (direction: 1 | -1) => {
    const el = rail.current;
    if (!el) return;
    // In RTL the scroll axis runs the other way.
    el.scrollBy({ left: direction * el.clientWidth * 0.8 * (isRTL ? -1 : 1), behavior: "smooth" });
  };

  return (
    <>
      {/* HERO */}
      <section className="on-dark relative flex min-h-[100svh] items-end overflow-hidden bg-night text-white">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.4, ease }}
        >
          <Image
            src="/assets/apartment2/Screenshot 2025-07-30 162441.png"
            alt={t(
              "Living room with a traditional Moroccan salon and tiled floor",
              "صالون مغربي تقليدي بأرضية من البلاط"
            )}
            fill
            preload
            quality={70}
            sizes="100vw"
            className="photo-grade object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-linear-to-t from-night via-night/55 to-night/25" />
        <div className="absolute inset-0 hidden bg-linear-to-r from-night/70 via-night/20 to-transparent lg:block rtl:bg-linear-to-l" />
        <div className="absolute inset-x-0 top-0 h-40 bg-linear-to-b from-night/60 to-transparent" />

        <div className="relative mx-auto w-full max-w-7xl px-4 pb-32 pt-32 sm:px-6 md:pb-20 lg:px-10">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease }}
            className="eyebrow flex items-center gap-3 text-white/85"
          >
            <span className="h-px w-8 bg-brass" />
            {t("Apartments in Zaio, Morocco", "شقق في زايو، المغرب")}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease }}
            className="font-display mt-6 max-w-4xl text-[2.9rem] leading-[1.02] font-normal sm:text-6xl lg:text-[5.5rem]"
          >
            {t("Your home away from home in Zaio.", "بيتك الثاني في قلب زايو.")}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.45, ease }}
            className="mt-6 max-w-xl text-lg text-white/85"
          >
            {t(
              "Eight furnished apartments in the centre of town, for families, short stays and long visits home. Book directly with us.",
              "ثماني شقق مفروشة في وسط المدينة، للعائلات وللإقامات القصيرة والزيارات الطويلة. احجز معنا مباشرة."
            )}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6, ease }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn btn-clay">
              <Icon name="whatsapp" className="h-5 w-5" />
              {t("Book on WhatsApp", "احجز عبر واتساب")}
            </a>
            <Link href="/rooms" className="btn btn-glass">
              {t("See the apartments", "شاهد الشقق")}
              <Icon name="arrow" className="h-4 w-4 rtl:-scale-x-100" />
            </Link>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="mt-12 grid max-w-2xl grid-cols-3 gap-4 border-t border-white/20 pt-6"
          >
            <div>
              <dt className="text-xs text-white/65 sm:text-sm">{t("From", "ابتداءً من")}</dt>
              <dd className="font-display mt-1 text-2xl sm:text-3xl">
                {STARTING_PRICE_MAD}
                <span className="block font-sans text-xs text-white/70 sm:inline sm:ms-1.5 sm:text-sm">
                  {t("MAD / night", "درهم / ليلة")}
                </span>
              </dd>
            </div>
            <div>
              <dt className="text-xs text-white/65 sm:text-sm">{t("Check-in", "الوصول")}</dt>
              <dd className="font-display mt-1 text-2xl sm:text-3xl">{CHECK_IN}</dd>
            </div>
            <div>
              <dt className="text-xs text-white/65 sm:text-sm">{t("Check-out", "المغادرة")}</dt>
              <dd className="font-display mt-1 text-2xl sm:text-3xl">{CHECK_OUT}</dd>
            </div>
          </motion.dl>
        </div>
      </section>

      {/* INTRO */}
      <section className="relative overflow-hidden py-24 md:py-36">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-12 lg:px-10">
          <div className="lg:col-span-6">
            <Reveal>
              <p className="eyebrow text-clay">{t("Welcome", "أهلاً وسهلاً")}</p>
              <h2 className="font-display mt-5 text-4xl leading-[1.08] sm:text-5xl lg:text-6xl">
                {t(
                  "A quiet base for family time in Zaio.",
                  "مكان هادئ لقضاء وقت العائلة في زايو."
                )}
              </h2>
              <p className="mt-7 max-w-lg text-lg text-ink-soft">
                {t(
                  "Iqamat Al-Haramain offers 8 comfortable apartments in the center of Zaio. Whether you are visiting for business or leisure, we provide a welcoming atmosphere and modern amenities for a pleasant stay.",
                  "تقدم إقامة الحرمين 8 شقق مريحة في وسط مدينة زايو. سواء كانت زيارتك للعمل أو للترفيه، نوفر لك أجواء ترحيبية ووسائل راحة حديثة لإقامة ممتعة."
                )}
              </p>
              <Link
                href="/rooms"
                className="group mt-9 inline-flex items-center gap-3 border-b border-ink pb-1 font-semibold"
              >
                {t("Explore the apartments", "اكتشف الشقق")}
                <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1" />
              </Link>
            </Reveal>
          </div>

          <div className="relative lg:col-span-6">
            <Reveal className="relative mx-auto max-w-md lg:me-0">
              <div className="arch relative aspect-[3/4] overflow-hidden bg-stone">
                <Image
                  src="/assets/apartment4/Screenshot 2025-07-30 160510.png"
                  alt={t("Carved arch leading into a bedroom", "قوس منحوت يؤدي إلى غرفة نوم")}
                  fill
                  quality={70}
                  sizes="(max-width: 1024px) 90vw, 448px"
                  className="photo-grade object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -start-2 w-[46%] overflow-hidden rounded-2xl border-[6px] border-sand shadow-[0_20px_50px_rgb(29_27_24/0.18)] sm:-start-16">
                <div className="relative aspect-square">
                  <Image
                    src="/assets/apartment3/Screenshot 2025-07-30 164035.png"
                    alt={t("Fitted kitchen with red cabinets", "مطبخ مجهز بخزائن حمراء")}
                    fill
                    quality={70}
                    sizes="220px"
                    className="photo-grade object-cover"
                  />
                </div>
              </div>
              <div className="checker absolute -top-4 -end-4 h-16 w-16 opacity-[0.12]" aria-hidden="true" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* AMENITIES */}
      <section className="bg-paper py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <Reveal className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow text-clay">{t("Why stay with us", "لماذا تختارنا")}</p>
              <h2 className="font-display mt-5 max-w-2xl text-4xl leading-[1.08] sm:text-5xl">
                {t("The essentials, taken care of.", "كل ما تحتاجه، متوفر.")}
              </h2>
            </div>
          </Reveal>
          <ul className="mt-14 grid grid-cols-2 border-s border-t border-line md:grid-cols-4">
            {amenities.map((item, i) => (
              <li key={item.en} className="border-b border-e border-line">
                <Reveal delay={i * 0.04} className="flex h-full flex-col gap-6 p-5 sm:p-7">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-clay-soft text-clay">
                    <Icon name={item.icon} className="h-5 w-5" />
                  </span>
                  <span className="text-base font-semibold leading-snug sm:text-lg">{t(item.en, item.ar)}</span>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ROOM TYPES */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <Reveal className="max-w-2xl">
            <p className="eyebrow text-clay">{t("Two layouts", "نوعان من الشقق")}</p>
            <h2 className="font-display mt-5 text-4xl leading-[1.08] sm:text-5xl">
              {t("Room for the whole family.", "مساحة تتسع للعائلة كلها.")}
            </h2>
            <p className="mt-6 text-lg text-ink-soft">
              {t(
                "Every apartment has a dining area and a washing machine.",
                "كل شقة تحتوي على مكان لتناول الطعام وغسالة ملابس."
              )}
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {roomTypes.map((type, i) => (
              <Reveal key={type.en} delay={i * 0.1}>
                <article className="group relative overflow-hidden rounded-3xl bg-night text-white on-dark">
                  <div className="relative aspect-[4/5] sm:aspect-[5/4]">
                    <Image
                      src={type.image}
                      alt=""
                      fill
                      quality={70}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="photo-grade object-cover transition-transform duration-[1.4s] ease-(--ease-soft) group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-night via-night/50 to-transparent" />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                    <p className="eyebrow text-brass">{t("Apartment type", "نوع الشقة")}</p>
                    <h3 className="font-display mt-3 text-3xl sm:text-4xl">{t(type.en, type.ar)}</h3>
                    <ul className="mt-5 flex flex-wrap gap-2 text-sm">
                      <li className="flex items-center gap-2 rounded-full bg-white/12 px-3.5 py-2 backdrop-blur">
                        <Icon name="bed" className="h-4 w-4" />
                        {t(type.detailEn, type.detailAr)}
                      </li>
                      <li className="flex items-center gap-2 rounded-full bg-white/12 px-3.5 py-2 backdrop-blur">
                        <Icon name="dining" className="h-4 w-4" />
                        {t("Dining area", "مكان للطعام")}
                      </li>
                      <li className="flex items-center gap-2 rounded-full bg-white/12 px-3.5 py-2 backdrop-blur">
                        <Icon name="washer" className="h-4 w-4" />
                        {t("Washing machine", "غسالة")}
                      </li>
                    </ul>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* APARTMENT RAIL */}
      <section className="overflow-hidden bg-paper py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <Reveal className="flex items-end justify-between gap-6">
            <div>
              <p className="eyebrow text-clay">{t("The apartments", "الشقق")}</p>
              <h2 className="font-display mt-5 text-4xl leading-[1.08] sm:text-5xl">
                {t("Pick your place.", "اختر شقتك.")}
              </h2>
            </div>
            <div className="hidden gap-2 md:flex">
              <button
                type="button"
                onClick={() => scrollRail(-1)}
                aria-label={t("Previous apartments", "الشقق السابقة")}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-line transition-colors hover:border-ink"
              >
                <Icon name="chevron" className="h-5 w-5 -scale-x-100 rtl:scale-x-100" />
              </button>
              <button
                type="button"
                onClick={() => scrollRail(1)}
                aria-label={t("More apartments", "المزيد من الشقق")}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-line transition-colors hover:border-ink"
              >
                <Icon name="chevron" className="h-5 w-5 rtl:-scale-x-100" />
              </button>
            </div>
          </Reveal>
        </div>

        <div
          ref={rail}
          className="no-scrollbar mt-12 flex snap-x snap-mandatory scroll-px-4 gap-4 overflow-x-auto px-4 pb-2 sm:scroll-px-6 sm:px-6 lg:scroll-px-[max(2.5rem,calc((100vw-80rem)/2+2.5rem))] lg:px-[max(2.5rem,calc((100vw-80rem)/2+2.5rem))]"
        >
          {apartments.map((apt) => (
            <Link
              key={apt.id}
              href={`/rooms#apartment-${apt.id}`}
              className="group w-[78%] shrink-0 snap-start sm:w-[44%] lg:w-[30%]"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-stone">
                <Image
                  src={apt.coverImage}
                  alt=""
                  fill
                  quality={70}
                  sizes="(max-width: 640px) 78vw, (max-width: 1024px) 44vw, 30vw"
                  className="photo-grade object-cover transition-transform duration-[1.4s] ease-(--ease-soft) group-hover:scale-105"
                />
                <span className="absolute start-4 top-4 flex items-center gap-1.5 rounded-full bg-night/70 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur">
                  <Icon name="images" className="h-3.5 w-3.5" />
                  {apt.photoCount}
                </span>
              </div>
              <div className="mt-4 flex items-baseline justify-between gap-3">
                <h3 className="font-display text-2xl">{t(apt.titleEn, apt.titleAr)}</h3>
                <p className="text-sm text-muted">
                  <span className="font-semibold text-ink">{apt.priceMAD}</span> {t("MAD / night", "درهم / ليلة")}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* LOCATION */}
      <section className="on-dark relative overflow-hidden bg-night py-24 text-paper md:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-10">
          <Reveal>
            <p className="eyebrow text-brass">{t("Location", "الموقع")}</p>
            <h2 className="font-display mt-5 text-4xl leading-[1.08] sm:text-5xl lg:text-6xl">
              {t("In the centre of Zaio.", "في وسط مدينة زايو.")}
            </h2>
            <p className="mt-6 max-w-md text-lg text-paper/75">
              {t(
                "Find us in the centre of Zaio, in the province of Nador. Open the map for directions.",
                "تجدوننا في وسط مدينة زايو، إقليم الناظور. افتح الخريطة للاتجاهات."
              )}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href={MAPS_HREF} target="_blank" rel="noopener noreferrer" className="btn bg-paper text-ink hover:bg-white">
                <Icon name="pin" className="h-5 w-5" />
                {t("Open in Google Maps", "افتح في خرائط جوجل")}
              </a>
              <Link href="/contact" className="btn btn-glass">
                {t("Contact details", "معلومات الاتصال")}
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <a
              href={MAPS_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block overflow-hidden rounded-3xl border border-white/10 bg-night-soft p-8 sm:p-10"
            >
              <span className="sr-only">{t("Open the location in Google Maps", "افتح الموقع في خرائط جوجل")}</span>
              <div
                className="absolute inset-0 opacity-[0.07]"
                aria-hidden="true"
                style={{
                  backgroundImage:
                    "linear-gradient(var(--color-paper) 1px, transparent 1px), linear-gradient(90deg, var(--color-paper) 1px, transparent 1px)",
                  backgroundSize: "36px 36px",
                }}
              />
              <div className="relative flex aspect-[4/3] flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="eyebrow text-paper/60">Zaio</span>
                  <span className="eyebrow text-paper/60" dir="ltr">MA</span>
                </div>
                <div className="flex justify-center">
                  <span className="relative flex h-16 w-16 items-center justify-center">
                    <span className="absolute inset-0 animate-ping rounded-full bg-clay/40 motion-reduce:animate-none" />
                    <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-clay text-white">
                      <Icon name="pin" className="h-6 w-6" />
                    </span>
                  </span>
                </div>
                <p dir="ltr" className="font-display text-center text-2xl text-paper/90 sm:text-3xl">
                  34.9408&deg; N, 2.7335&deg; W
                </p>
              </div>
            </a>
          </Reveal>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="py-24 md:py-32">
        <Reveal className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <div className="checker mx-auto h-3.5 w-28 opacity-80" aria-hidden="true" />
          <h2 className="font-display mt-10 text-4xl leading-[1.05] sm:text-6xl">
            {t("Ready to book your stay?", "هل أنت مستعد لحجز إقامتك؟")}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-ink-soft">
            {t(
              "Message or call us to check availability. We are reachable around the clock.",
              "راسلنا أو اتصل بنا للتحقق من التوافر. نحن متاحون على مدار الساعة."
            )}
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn btn-clay">
              <Icon name="whatsapp" className="h-5 w-5" />
              {t("Book on WhatsApp", "احجز عبر واتساب")}
            </a>
            <a href={PHONE_HREF} className="btn btn-line">
              <Icon name="phone" className="h-5 w-5" />
              <span dir="ltr">{PHONE_DISPLAY}</span>
            </a>
          </div>
        </Reveal>
      </section>
    </>
  );
}
