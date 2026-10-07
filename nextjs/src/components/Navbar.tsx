"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";
import { navLinks, PHONE_DISPLAY, PHONE_HREF, whatsappLink } from "@/lib/site";
import Icon from "./Icon";
import Logo from "./Logo";
import { LanguageGrid, LanguageMenu } from "./LanguagePicker";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [openPath, setOpenPath] = useState<string | null>(null);
  const { t } = useLanguage();
  const pathname = usePathname();
  // The menu closes itself on navigation because it is tied to the path it was opened on.
  const menuOpen = openPath === pathname;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpenPath(null);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  // Over the home hero photo the bar is transparent with light text.
  const overPhoto = pathname === "/" && !scrolled && !menuOpen;

  return (
    <>
      <a href="#main" className="skip-link">
        {t.nav.skipToContent}
      </a>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,color] duration-500 ${
          overPhoto
            ? "text-white on-dark"
            : "bg-sand/90 text-ink shadow-[0_1px_0_var(--color-line)] backdrop-blur-xl"
        }`}
      >
        <nav
          aria-label={t.nav.main}
          className="mx-auto flex h-16 max-w-7xl items-center gap-3 px-4 sm:px-6 md:h-20 lg:px-10"
        >
          <Link
            href="/"
            className="flex shrink-0 items-center gap-2.5"
            aria-label={t.nav.homeLabel}
          >
            <Logo
              className={`h-9 w-9 transition-colors ${overPhoto ? "text-white [--logo-arch:#1d1b18]" : "text-ink"}`}
            />
            <span className="flex flex-col leading-none">
              <span lang="ar" className="font-[family-name:var(--font-messiri)] text-lg font-semibold leading-none">
                إقامة الحرمين
              </span>
              <span lang="en" className="mt-1 text-[10px] font-semibold uppercase tracking-[0.2em] opacity-70">
                Iqamat Al-Haramain
              </span>
            </span>
          </Link>

          <ul className="ms-auto hidden items-center gap-1 md:flex">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={`relative rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                      active
                        ? overPhoto
                          ? "bg-white/15"
                          : "bg-ink/[0.07]"
                        : "opacity-80 hover:opacity-100"
                    }`}
                  >
                    {t.nav[link.key]}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="ms-auto flex items-center gap-2 md:ms-4">
            <LanguageMenu onDark={overPhoto} />

            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className={`btn hidden min-h-10! px-5! text-sm md:inline-flex ${
                overPhoto ? "bg-white text-ink hover:bg-sand" : "btn-ink"
              }`}
            >
              <Icon name="whatsapp" className="h-4 w-4" />
              {t.common.bookNow}
            </a>

            <button
              type="button"
              onClick={() => setOpenPath(menuOpen ? null : pathname)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? t.nav.closeMenu : t.nav.openMenu}
              className={`flex h-10 w-10 items-center justify-center rounded-full border md:hidden ${
                overPhoto ? "border-white/40" : "border-line"
              }`}
            >
              <Icon name={menuOpen ? "close" : "menu"} className="h-5 w-5" />
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[45] flex flex-col bg-sand px-4 pb-8 pt-24 sm:px-6 md:hidden"
          >
            <ul className="flex flex-col">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + i * 0.06, duration: 0.4 }}
                  className="border-b border-line"
                >
                  <Link
                    href={link.href}
                    aria-current={pathname === link.href ? "page" : undefined}
                    className="flex items-center justify-between py-5 font-display text-4xl"
                  >
                    {t.nav[link.key]}
                    <Icon name="arrow" className="h-6 w-6 text-clay rtl:-scale-x-100" />
                  </Link>
                </motion.li>
              ))}
            </ul>
            <div className="mt-auto grid gap-3">
              <div className="mb-4">
                <LanguageGrid />
              </div>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn btn-clay w-full">
                <Icon name="whatsapp" className="h-5 w-5" />
                {t.common.bookOnWhatsApp}
              </a>
              <a href={PHONE_HREF} className="btn btn-line w-full">
                <Icon name="phone" className="h-5 w-5" />
                <span dir="ltr">{PHONE_DISPLAY}</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
