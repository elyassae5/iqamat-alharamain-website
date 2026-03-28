"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/language-context";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-linear-to-br from-brown-deep via-brown-dark to-brown text-white">
      <div className="h-px bg-linear-to-r from-transparent via-white/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <p className="font-display text-3xl font-bold text-white mb-1">
                إقامة الحرمين
              </p>
              <p className="text-sm tracking-[0.2em] text-white/50 uppercase">
                Iqamat Al-Haramain
              </p>
            </div>
            <p className="text-base text-white/70 leading-relaxed">
              {t(
                "Your home away from home in the heart of Zaio, Morocco.",
                "بيتك الثاني في قلب مدينة زايو، المغرب."
              )}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm tracking-[0.2em] uppercase text-white/50 font-medium mb-5">
              {t("Navigation", "التنقل")}
            </h4>
            <ul className="space-y-4">
              {[
                { href: "/", en: "Home", ar: "الرئيسية" },
                { href: "/rooms", en: "Rooms", ar: "الغرف" },
                { href: "/contact", en: "Contact", ar: "اتصل بنا" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-base text-white/75 hover:text-white transition-colors"
                  >
                    {t(link.en, link.ar)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm tracking-[0.2em] uppercase text-white/50 font-medium mb-5">
              {t("Contact", "تواصل معنا")}
            </h4>
            <ul className="space-y-4 text-base text-white/75">
              <li>
                <a href="tel:+212670959747" className="hover:text-white transition-colors" dir="ltr">
                  +212 670 959 747
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/212670959747"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="https://www.google.com/maps/place/34.94077411965649,-2.733531736509832"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {t("Zaio, Morocco", "زايو، المغرب")}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/50">
          <p>
            &copy; {new Date().getFullYear()} Iqamat Al-Haramain.{" "}
            {t("All rights reserved.", "جميع الحقوق محفوظة.")}
          </p>
          <p className="tracking-widest uppercase">
            {t("Zaio, Morocco", "زايو، المغرب")}
          </p>
        </div>
      </div>
    </footer>
  );
}
