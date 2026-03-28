"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/lib/language-context";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, toggleLang, t } = useLanguage();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", labelEn: "Home", labelAr: "الرئيسية" },
    { href: "/rooms", labelEn: "Rooms", labelAr: "الغرف" },
    { href: "/contact", labelEn: "Contact", labelAr: "اتصل بنا" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-ivory/95 backdrop-blur-md shadow-[0_2px_20px_rgba(37,99,235,0.12)]"
          : "bg-ivory/85 backdrop-blur-sm"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-tight group shrink-0">
          <span className="font-display text-xl font-bold text-gold transition-colors group-hover:text-gold-dark">
            إقامة الحرمين
          </span>
          <span className="text-[10px] tracking-[0.2em] text-brown-medium uppercase">
            Iqamat Al-Haramain
          </span>
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative text-sm tracking-wide font-medium transition-colors duration-200 pb-1 group ${
                    isActive ? "text-gold" : "text-brown hover:text-gold"
                  }`}
                >
                  {t(link.labelEn, link.labelAr)}
                  <span
                    className={`absolute bottom-0 left-0 h-px bg-gold transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Right side — always visible */}
        <div className="flex items-center gap-3 ml-auto md:ml-0">
          {/* Language toggle — ALWAYS visible */}
          <button
            type="button"
            onClick={toggleLang}
            className="flex items-center gap-1.5 px-3 py-1.5 border border-gold/30 text-xs tracking-widest text-brown-medium hover:text-gold hover:border-gold transition-colors font-medium uppercase rounded-sm"
          >
            <svg className="w-3.5 h-3.5 opacity-70" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253" />
            </svg>
            {lang === "en" ? "العربية" : "English"}
          </button>

          {/* Book Now — desktop only */}
          <a
            href="https://wa.me/212670959747"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex px-5 py-2.5 bg-gold text-white text-xs tracking-widest uppercase font-medium hover:bg-gold-dark transition-colors duration-200"
          >
            {t("Book Now", "احجز الآن")}
          </a>

          {/* Hamburger — mobile only */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-0.5 bg-brown transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-5 h-0.5 bg-brown transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-0.5 bg-brown transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu — nav links + Book Now only */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        } bg-ivory border-t border-gold-muted`}
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`text-sm font-medium py-1 transition-colors ${
                pathname === link.href ? "text-gold" : "text-brown hover:text-gold"
              }`}
            >
              {t(link.labelEn, link.labelAr)}
            </Link>
          ))}
          <div className="pt-2 border-t border-gold-muted">
            <a
              href="https://wa.me/212670959747"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex px-5 py-2.5 bg-gold text-white text-xs tracking-widest uppercase font-medium"
            >
              {t("Book Now", "احجز الآن")}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
