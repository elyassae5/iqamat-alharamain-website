"use client";

import { useLanguage } from "@/lib/language-context";
import {
  CHECK_IN,
  CHECK_OUT,
  MAP_EMBED_SRC,
  MAPS_HREF,
  PHONE_DISPLAY,
  PHONE_HREF,
  whatsappLink,
} from "@/lib/site";
import Icon, { IconName } from "@/components/Icon";
import Reveal from "@/components/Reveal";

export default function ContactPage() {
  const { t } = useLanguage();

  const channels: {
    icon: IconName;
    title: string;
    note: string;
    value: string;
    ltrValue?: boolean;
    href: string;
    external?: boolean;
    primary?: boolean;
  }[] = [
    {
      icon: "whatsapp",
      title: "WhatsApp",
      note: t("Fastest way to book", "أسرع طريقة للحجز"),
      value: PHONE_DISPLAY,
      ltrValue: true,
      href: whatsappLink(),
      external: true,
      primary: true,
    },
    {
      icon: "phone",
      title: t("Call us", "اتصل بنا"),
      note: t("Direct booking by phone", "الحجز المباشر عبر الهاتف"),
      value: PHONE_DISPLAY,
      ltrValue: true,
      href: PHONE_HREF,
    },
    {
      icon: "pin",
      title: t("Location", "الموقع"),
      note: t("Find us in the heart of Zaio", "تجدوننا في قلب مدينة زايو"),
      value: t("Zaio, Morocco", "زايو، المغرب"),
      href: MAPS_HREF,
      external: true,
    },
  ];

  return (
    <>
      <section className="pt-32 md:pt-44">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-x-14 lg:px-10">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow text-clay">{t("Contact", "تواصل معنا")}</p>
            <h1 className="font-display mt-5 text-5xl leading-[1.02] sm:text-6xl lg:text-7xl">
              {t("Talk to us directly.", "تواصل معنا مباشرة.")}
            </h1>
            <p className="mt-7 max-w-md text-lg text-ink-soft">
              {t(
                "Reach out to reserve your apartment or ask any question. We are available around the clock.",
                "تواصل معنا لحجز شقتك أو لطرح أي سؤال. نحن متاحون على مدار الساعة."
              )}
            </p>
          </Reveal>

          <div className="lg:col-span-7 lg:row-span-2">
            <ul className="grid gap-4">
              {channels.map((c, i) => (
                <li key={c.icon}>
                  <Reveal delay={0.08 * i}>
                    <a
                      href={c.href}
                      target={c.external ? "_blank" : undefined}
                      rel={c.external ? "noopener noreferrer" : undefined}
                      className={`group flex items-center gap-5 rounded-3xl p-5 transition-colors sm:p-7 ${
                        c.primary
                          ? "bg-clay text-white hover:bg-clay-dark"
                          : "border border-line bg-paper hover:border-ink"
                      }`}
                    >
                      <span
                        className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${
                          c.primary ? "bg-white/15" : "bg-clay-soft text-clay"
                        }`}
                      >
                        <Icon name={c.icon} className="h-6 w-6" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="font-display block text-2xl sm:text-3xl">{c.title}</span>
                        <span className={`block text-sm ${c.primary ? "text-white/85" : "text-muted"}`}>{c.note}</span>
                        <span className="mt-2 block font-semibold sm:text-lg">
                          <span dir={c.ltrValue ? "ltr" : undefined}>{c.value}</span>
                        </span>
                      </span>
                      <Icon
                        name="arrow"
                        className="h-6 w-6 shrink-0 transition-transform group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1"
                      />
                    </a>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>

          <Reveal delay={0.1} className="lg:col-span-5 lg:col-start-1 lg:row-start-2">
            <div className="rounded-3xl bg-ink p-7 text-paper on-dark">
              <div className="flex items-center gap-3">
                <Icon name="clock" className="h-5 w-5 text-brass" />
                <h2 className="eyebrow text-brass">{t("Hours", "الأوقات")}</h2>
              </div>
              <dl className="mt-6 grid grid-cols-2 gap-6">
                <div>
                  <dt className="text-sm text-paper/65">{t("Check-in", "تسجيل الوصول")}</dt>
                  <dd className="font-display mt-1 text-4xl">{CHECK_IN}</dd>
                </div>
                <div>
                  <dt className="text-sm text-paper/65">{t("Check-out", "المغادرة")}</dt>
                  <dd className="font-display mt-1 text-4xl">{CHECK_OUT}</dd>
                </div>
              </dl>
              <p className="mt-6 border-t border-white/10 pt-5 text-sm text-paper/70">
                {t("We are available around the clock.", "نحن متاحون على مدار الساعة.")}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow text-clay">{t("Find us", "اعثر علينا")}</p>
              <h2 className="font-display mt-5 text-4xl sm:text-5xl">{t("Our location", "موقعنا")}</h2>
            </div>
            <a href={MAPS_HREF} target="_blank" rel="noopener noreferrer" className="btn btn-ink self-start sm:self-auto">
              <Icon name="pin" className="h-5 w-5" />
              {t("Open in Google Maps", "افتح في خرائط جوجل")}
            </a>
          </Reveal>
          <Reveal delay={0.1} className="relative mt-10 overflow-hidden rounded-3xl border border-line bg-stone">
            <a
              href={MAPS_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-muted"
            >
              <Icon name="pin" className="h-8 w-8 text-clay" />
              {t("Open the map in Google Maps", "افتح الخريطة في خرائط جوجل")}
            </a>
            <iframe
              src={MAP_EMBED_SRC}
              className="relative block h-[380px] w-full border-0 grayscale-[35%] md:h-[520px]"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={t("Map showing Iqamat Al-Haramain in Zaio", "خريطة تظهر موقع إقامة الحرمين في زايو")}
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
