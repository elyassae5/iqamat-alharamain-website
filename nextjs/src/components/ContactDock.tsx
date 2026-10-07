"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/lib/language-context";
import { PHONE_HREF, whatsappLink } from "@/lib/site";
import Icon from "./Icon";

// Mobile: a fixed two-button bar, since most guests arrive from WhatsApp on a phone.
// On the home page it waits until the hero (which has the same buttons) is scrolled past.
// Desktop: a single round WhatsApp button.
export default function ContactDock() {
  const { t } = useLanguage();
  const isHome = usePathname() === "/";
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    const onScroll = () => setPastHero(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const showDock = !isHome || pastHero;

  return (
    <>
      <div
        aria-hidden={!showDock}
        inert={!showDock}
        className={`fixed inset-x-0 bottom-0 z-40 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] transition-[opacity,translate] duration-500 md:hidden ${
          showDock ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
        }`}
      >
        <div className="flex gap-2 rounded-full border border-white/10 bg-night/95 p-1.5 shadow-[0_12px_40px_rgb(0_0_0/0.25)] backdrop-blur-xl on-dark">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-clay min-h-12! flex-1"
          >
            <Icon name="whatsapp" className="h-5 w-5" />
            {t.common.bookOnWhatsApp}
          </a>
          <a
            href={PHONE_HREF}
            aria-label={t.common.callUs}
            className="btn min-h-12! w-12 px-0! text-paper hover:bg-white/10"
          >
            <Icon name="phone" className="h-5 w-5" />
          </a>
        </div>
      </div>

      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t.dock.whatsappLabel}
        className="fixed bottom-8 end-8 z-40 hidden h-14 w-14 items-center justify-center rounded-full bg-[#1f8f4e] text-white shadow-[0_10px_30px_rgb(31_143_78/0.35)] transition-transform hover:scale-105 md:flex"
      >
        <Icon name="whatsapp" className="h-7 w-7" />
      </a>
    </>
  );
}
