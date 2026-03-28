"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

const amenities = [
  { icon: "🏠", en: "8 Apartments", ar: "8 شقق" },
  { icon: "📍", en: "Central Location", ar: "موقع مركزي" },
  { icon: "💰", en: "Affordable Prices", ar: "أسعار مناسبة" },
  { icon: "📶", en: "Free WiFi", ar: "واي فاي مجاني" },
  { icon: "❄️", en: "Air Conditioning", ar: "مكيف هواء" },
  { icon: "👨‍👩‍👧", en: "Family Friendly", ar: "مناسب للعائلات" },
  { icon: "📞", en: "24/7 Availability", ar: "متاح 24/7" },
  { icon: "🫧", en: "Washing Machine", ar: "غسالة" },
];

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-ivory">
        {/* Dot texture */}
        <div className="dot-texture absolute inset-0 opacity-[0.03] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-20 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: text */}
            <div>
              <motion.p
                custom={0}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="text-xs tracking-[0.3em] text-gold uppercase font-medium mb-6"
              >
                {t("Welcome to", "مرحباً بكم في")}
              </motion.p>

              <motion.h1
                custom={1}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="font-display text-5xl lg:text-7xl font-bold text-brown-deep leading-[1.05] mb-4"
              >
                {t("Iqamat", "إقامة")}
                <br />
                <span className="text-gold">
                  {t("Al-Haramain", "الحرمين")}
                </span>
              </motion.h1>

              <motion.div
                custom={2}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="flex items-center gap-3 mb-8"
              >
                <div className="h-px w-12 bg-gold" />
                <p className="text-xs tracking-[0.2em] text-brown-medium uppercase">
                  {t("Zaio, Morocco", "زايو، المغرب")}
                </p>
                <div className="h-px w-12 bg-gold" />
              </motion.div>

              <motion.p
                custom={3}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="text-brown text-lg leading-relaxed mb-10 max-w-md"
              >
                {t(
                  "Eight elegantly appointed apartments offering warm Moroccan hospitality in the heart of Zaio. Whether you visit for business or leisure, a distinguished stay awaits.",
                  "ثمان شقق أنيقة تقدم ضيافة مغربية دافئة في قلب مدينة زايو. سواء كانت زيارتك للعمل أو الترفيه، إقامة مميزة تنتظرك."
                )}
              </motion.p>

              <motion.div
                custom={4}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="flex flex-wrap gap-4"
              >
                <Link
                  href="/rooms"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-white text-sm tracking-widest uppercase font-medium hover:bg-gold-dark transition-colors duration-200"
                >
                  {t("View Apartments", "شاهد الشقق")}
                  <span>→</span>
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 border border-gold text-gold text-sm tracking-widest uppercase font-medium hover:bg-gold/10 transition-colors duration-200"
                >
                  {t("Contact Us", "تواصل معنا")}
                </Link>
              </motion.div>
            </div>

            {/* Right: image */}
            <motion.div
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="relative"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/assets/apartment2/Screenshot 2025-07-30 162441.png"
                  alt="Iqamat Al-Haramain apartment"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-brown-deep/40 via-transparent to-transparent" />
              </div>

              {/* Offset border */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-gold/30 -z-10" />

              {/* Price badge */}
              <div className="absolute bottom-6 left-6 bg-brown-deep/95 backdrop-blur-sm px-5 py-4 border-l-4 border-amber">
                <p className="text-amber text-xs tracking-[0.2em] uppercase mb-1 font-medium">
                  {t("From", "ابتداءً من")}
                </p>
                <p className="font-display text-white text-3xl font-bold">
                  499{" "}
                  <span className="text-sm font-normal text-brown-light">
                    MAD / {t("night", "ليلة")}
                  </span>
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <div className="w-px h-12 bg-linear-to-b from-gold to-transparent" />
        </motion.div>
      </section>

      {/* ─── AMENITIES ─── */}
      <section className="bg-cream py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-xs tracking-[0.3em] text-gold uppercase font-medium mb-4">
              {t("Why Choose Us", "لماذا تختارنا")}
            </p>
            <h2
              className="font-display text-4xl lg:text-5xl font-bold text-brown-deep"
            >
              {t("The Iqamat Experience", "تجربة إقامة الحرمين")}
            </h2>
            <div className="flex justify-center mt-5">
              <div className="h-px w-16 bg-linear-to-r from-transparent via-gold to-transparent" />
            </div>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {amenities.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="card-lift bg-ivory rounded-sm p-6 text-center group cursor-default border border-cream-dark hover:border-gold/30 transition-colors duration-300"
              >
                <span className="text-4xl mb-3 block">{item.icon}</span>
                <p className="text-sm font-semibold text-brown-dark tracking-wide group-hover:text-gold transition-colors">
                  {t(item.en, item.ar)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURED APARTMENTS ─── */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-xs tracking-[0.3em] text-gold uppercase font-medium mb-4">
              {t("Our Collection", "مجموعتنا")}
            </p>
            <h2
              className="font-display text-4xl lg:text-5xl font-bold text-brown-deep"
            >
              {t("Discover Our Apartments", "اكتشف شققنا")}
            </h2>
            <div className="flex justify-center mt-5">
              <div className="h-px w-16 bg-linear-to-r from-transparent via-gold to-transparent" />
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                src: "/assets/apartment2/Screenshot 2025-07-30 162749.png",
                en: "Apartment 2",
                ar: "الشقة 2",
              },
              {
                src: "/assets/apartment4/Screenshot 2025-07-30 160700.png",
                en: "Apartment 4",
                ar: "الشقة 4",
              },
              {
                src: "/assets/apartment3/Screenshot 2025-07-30 164151.png",
                en: "Apartment 3",
                ar: "الشقة 3",
              },
            ].map((apt, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link href="/rooms" className="group block card-lift rounded-sm overflow-hidden">
                  <div className="relative aspect-4/3 overflow-hidden">
                    <Image
                      src={apt.src}
                      alt={t(apt.en, apt.ar)}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-brown-deep/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-white text-xs tracking-widest uppercase border border-white/60 px-3 py-1.5">
                        {t("View Gallery", "عرض المعرض")}
                      </p>
                    </div>
                  </div>
                  <div className="bg-ivory px-4 py-4 flex items-center justify-between border-t border-cream-dark">
                    <p className="font-display text-brown-deep font-semibold">
                      {t(apt.en, apt.ar)}
                    </p>
                    <p className="text-amber font-bold text-base">
                      499 <span className="text-xs font-normal text-brown-medium">MAD</span>
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/rooms"
              className="inline-flex items-center gap-3 px-10 py-4 border border-gold text-gold text-sm tracking-widest uppercase font-medium hover:bg-gold hover:text-white transition-all duration-200"
            >
              {t("View All Apartments", "عرض جميع الشقق")}
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="bg-linear-to-br from-brown-deep via-brown-dark to-brown py-24 relative overflow-hidden">
        <div className="dot-texture-sm absolute inset-0 opacity-5 pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/40 to-transparent" />

        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs tracking-[0.3em] text-white/60 uppercase font-medium mb-4">
              {t("Reserve Your Stay", "احجز إقامتك")}
            </p>
            <h2
              className="font-display text-4xl lg:text-5xl font-bold text-white mb-6"
            >
              {t(
                "Ready to Experience Moroccan Hospitality?",
                "هل أنت مستعد لتجربة الضيافة المغربية؟"
              )}
            </h2>
            <p className="text-white/75 text-xl mb-10 leading-relaxed">
              {t(
                "Contact us directly to reserve your apartment or inquire about availability. We are here for you around the clock.",
                "تواصل معنا مباشرة لحجز شقتك أو الاستفسار عن التوافر. نحن هنا لك على مدار الساعة."
              )}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/212670959747"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold text-white text-sm tracking-widest uppercase font-medium hover:bg-gold-light transition-colors"
              >
                {t("WhatsApp Us", "راسلنا على واتساب")}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/40 text-white/80 text-sm tracking-widest uppercase font-medium hover:border-white hover:text-white transition-colors"
              >
                {t("View Contact Info", "معلومات الاتصال")}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
