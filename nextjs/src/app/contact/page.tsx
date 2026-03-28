"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";

const contactCards = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    titleEn: "Call Us",
    titleAr: "اتصل بنا",
    descEn: "Direct booking by phone",
    descAr: "الحجز المباشر عبر الهاتف",
    valueEn: "+212 670 959 747",
    valueAr: "+212 670 959 747",
    href: "tel:+212670959747",
    actionEn: "Call Now",
    actionAr: "اتصل الآن",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
    titleEn: "WhatsApp",
    titleAr: "واتساب",
    descEn: "Quick communication & booking",
    descAr: "تواصل سريع وحجز",
    valueEn: "+212 670 959 747",
    valueAr: "+212 670 959 747",
    href: "https://wa.me/212670959747",
    actionEn: "Message Us",
    actionAr: "راسلنا",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    titleEn: "Location",
    titleAr: "الموقع",
    descEn: "Find us in the heart of Zaio",
    descAr: "اعثر علينا في قلب مدينة زايو",
    valueEn: "Zaio, Morocco",
    valueAr: "زايو، المغرب",
    href: "https://www.google.com/maps/place/34.94077411965649,-2.733531736509832",
    actionEn: "View on Maps",
    actionAr: "عرض الخريطة",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    titleEn: "Hours",
    titleAr: "الأوقات",
    descEn: "We're available around the clock",
    descAr: "نحن متاحون على مدار الساعة",
    valueEn: "Check-in: 13:00 — Check-out: 12:00",
    valueAr: "تسجيل الوصول: 13:00 — المغادرة: 12:00",
    href: null,
    actionEn: null,
    actionAr: null,
  },
];

export default function ContactPage() {
  const { t } = useLanguage();

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
            {t("Get In Touch", "تواصل معنا")}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-5xl lg:text-6xl font-bold text-white mb-5"
          >
            {t("Contact Us", "اتصل بنا")}
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
              "Reach out to us directly to reserve your apartment or ask any questions. We're here for you.",
              "تواصل معنا مباشرة لحجز شقتك أو طرح أي أسئلة. نحن هنا من أجلك."
            )}
          </motion.p>
        </div>
      </section>

      {/* ─── CONTACT CARDS ─── */}
      <section className="bg-ivory py-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <div className="grid sm:grid-cols-2 gap-6">
            {contactCards.map((card, i) => {
              const Wrapper = card.href ? "a" : "div";
              const wrapperProps = card.href
                ? {
                    href: card.href,
                    target: card.href.startsWith("http") ? "_blank" : undefined,
                    rel: card.href.startsWith("http") ? "noopener noreferrer" : undefined,
                  }
                : {};
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Wrapper
                    {...wrapperProps}
                    className={`group flex flex-col card-lift border border-cream-dark bg-ivory hover:border-gold/40 transition-all duration-300 h-full${card.href ? " cursor-pointer" : ""}`}
                  >
                    {/* Card body */}
                    <div className="p-8 flex-1">
                      {/* Icon */}
                      <div className="w-12 h-12 flex items-center justify-center border border-gold/30 text-gold mb-6 group-hover:bg-gold group-hover:text-white group-hover:border-gold transition-all duration-300">
                        {card.icon}
                      </div>

                      <h3 className="font-display text-xl font-semibold text-brown-dark mb-1">
                        {t(card.titleEn, card.titleAr)}
                      </h3>
                      <p className="text-brown-medium text-base mb-4">
                        {t(card.descEn, card.descAr)}
                      </p>
                      <p
                        className="text-brown font-medium text-base"
                        dir={card.valueEn.match(/^\+/) ? "ltr" : undefined}
                      >
                        {t(card.valueEn, card.valueAr)}
                      </p>
                    </div>

                    {/* Action bar — full width, easy to tap */}
                    {card.href && card.actionEn && (
                      <div className="px-8 py-4 border-t border-cream-dark flex items-center justify-between bg-cream/50 group-hover:bg-gold group-hover:border-gold transition-all duration-300">
                        <span className="text-sm tracking-widest uppercase text-gold font-medium group-hover:text-white transition-colors">
                          {t(card.actionEn, card.actionAr)}
                        </span>
                        <span className="text-gold group-hover:text-white transition-colors">→</span>
                      </div>
                    )}
                  </Wrapper>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── MAP ─── */}
      <section className="bg-cream py-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <p className="text-xs tracking-[0.3em] text-gold uppercase font-medium mb-3">
              {t("Find Us", "اعثر علينا")}
            </p>
            <h2 className="font-display text-3xl font-bold text-brown-deep">
              {t("Our Location", "موقعنا")}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative border border-gold/30"
          >
            {/* Gold corner accents */}
            <div className="absolute -top-px -left-px w-6 h-6 border-t-2 border-l-2 border-gold" />
            <div className="absolute -top-px -right-px w-6 h-6 border-t-2 border-r-2 border-gold" />
            <div className="absolute -bottom-px -left-px w-6 h-6 border-b-2 border-l-2 border-gold" />
            <div className="absolute -bottom-px -right-px w-6 h-6 border-b-2 border-r-2 border-gold" />

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3234.123!2d-2.7335317!3d34.9407741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDU2JzI2LjgiTiAywrA0NCcwMS43Ilc!5e0!3m2!1sen!2sma!4v1700000000000"
              width="100%"
              height="420"
              className="block border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Iqamat Al-Haramain location"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-8 text-center"
          >
            <a
              href="https://www.google.com/maps/place/34.94077411965649,-2.733531736509832"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gold text-white text-sm tracking-widest uppercase font-medium hover:bg-gold-dark transition-colors"
            >
              {t("Open in Google Maps", "فتح في خرائط جوجل")}
              <span>→</span>
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
