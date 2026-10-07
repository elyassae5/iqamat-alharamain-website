"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/language-context";
import {
  CHECK_IN,
  CHECK_OUT,
  MAPS_HREF,
  navLinks,
  PHONE_DISPLAY,
  PHONE_HREF,
  whatsappLink,
} from "@/lib/site";
import Logo from "./Logo";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="on-dark bg-night pb-28 text-paper md:pb-0">
      <div className="mx-auto max-w-7xl px-4 pt-20 sm:px-6 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo className="h-11 w-11 text-paper [--logo-arch:#191815]" />
            <p lang="ar" className="mt-6 font-[family-name:var(--font-messiri)] text-5xl font-semibold leading-tight">
              إقامة الحرمين
            </p>
            <p lang="en" className="mt-1 text-xs font-semibold uppercase tracking-[0.25em] text-paper/60">
              Iqamat Al-Haramain
            </p>
            <p className="mt-6 max-w-sm text-paper/75">
              {t.footer.tagline}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-7">
            <div>
              <h2 className="eyebrow text-brass">{t.footer.explore}</h2>
              <ul className="mt-5 space-y-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-paper/80 transition-colors hover:text-white">
                      {t.nav[link.key]}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="eyebrow text-brass">{t.footer.contact}</h2>
              <ul className="mt-5 space-y-3 text-paper/80">
                <li>
                  <a href={PHONE_HREF} className="transition-colors hover:text-white" dir="ltr">
                    {PHONE_DISPLAY}
                  </a>
                </li>
                <li>
                  <a
                    href={whatsappLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-white"
                  >
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a href={MAPS_HREF} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">
                    {t.common.zaioMorocco}
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <h2 className="eyebrow text-brass">{t.footer.yourStay}</h2>
              <dl className="mt-5 space-y-3 text-paper/80">
                <div className="flex justify-between gap-4 sm:block">
                  <dt>{t.common.checkIn}</dt>
                  <dd className="font-semibold text-paper">{CHECK_IN}</dd>
                </div>
                <div className="flex justify-between gap-4 sm:block">
                  <dt>{t.common.checkOut}</dt>
                  <dd className="font-semibold text-paper">{CHECK_OUT}</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start gap-6 border-t border-white/10 py-8 text-sm text-paper/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            <span dir="ltr">&copy; {new Date().getFullYear()} Iqamat Al-Haramain.</span>{" "}
            {t.footer.rights}
          </p>
          <a
            href="https://www.lanceerstudio.nl"
            target="_blank"
            rel="noopener noreferrer"
            dir="ltr"
            className="group flex items-center gap-1.5 text-xs text-paper/40 transition-colors hover:text-paper/75"
          >
            <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-white/10 text-[9px] font-bold text-paper/60 transition-colors group-hover:bg-orange-500 group-hover:text-white">
              L
            </span>
            <span lang="en">
              Powered by <span className="font-medium transition-colors group-hover:text-orange-400">Lanceer Studio</span>
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
