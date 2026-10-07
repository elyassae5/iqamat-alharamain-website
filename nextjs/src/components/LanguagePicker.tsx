"use client";

import { useEffect, useId, useRef, useState } from "react";
import { languages } from "@/lib/i18n";
import { useLanguage } from "@/lib/language-context";
import Icon from "./Icon";

// Arabic names need the Arabic typeface even when the page itself is in a Latin language.
const nameFont = (dir: string) =>
  dir === "rtl" ? "font-[family-name:var(--font-plex-arabic)]" : "font-[family-name:var(--font-manrope)]";

/** Compact dropdown for the header. */
export function LanguageMenu({ onDark = false }: { onDark?: boolean }) {
  const { lang, t, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const listId = useId();
  const current = languages.find((l) => l.code === lang) ?? languages[0];

  useEffect(() => {
    if (!open) return;
    const onPointer = (e: PointerEvent) => {
      if (!root.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("pointerdown", onPointer);
    window.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={root} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls={listId}
        aria-label={`${t.nav.language}: ${current.name}`}
        className={`flex h-10 items-center gap-1.5 rounded-full border px-3 text-sm font-semibold transition-colors ${
          onDark ? "border-white/40 hover:bg-white/15" : "border-line hover:border-ink"
        }`}
      >
        <Icon name="globe" className="h-4 w-4 opacity-80" />
        <span className="uppercase sm:hidden">{current.code}</span>
        <span lang={current.code} className={`hidden sm:inline ${nameFont(current.dir)}`}>
          {current.name}
        </span>
        <Icon name="chevron" className={`h-3.5 w-3.5 opacity-70 transition-transform ${open ? "-rotate-90" : "rotate-90"}`} />
      </button>

      {open && (
        <ul
          id={listId}
          className="absolute end-0 top-full z-10 mt-2 w-52 rounded-2xl border border-line bg-paper p-1.5 text-ink shadow-[0_20px_50px_rgb(29_27_24/0.18)]"
        >
          {languages.map((l) => {
            const active = l.code === lang;
            return (
              <li key={l.code}>
                <button
                  type="button"
                  lang={l.code}
                  aria-current={active ? "true" : undefined}
                  onClick={() => {
                    setLang(l.code);
                    setOpen(false);
                  }}
                  className={`flex w-full items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-start text-[0.95rem] transition-colors ${
                    active ? "bg-ink text-paper" : "hover:bg-sand"
                  } ${nameFont(l.dir)}`}
                >
                  {l.name}
                  <span className="font-[family-name:var(--font-manrope)] text-xs uppercase opacity-60">{l.code}</span>
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

/** Full grid for the mobile menu, with large tap targets. */
export function LanguageGrid() {
  const { lang, t, setLang } = useLanguage();
  return (
    <div>
      <p className="eyebrow text-muted">{t.nav.language}</p>
      <ul className="mt-3 grid grid-cols-3 gap-2">
        {languages.map((l) => {
          const active = l.code === lang;
          return (
            <li key={l.code}>
              <button
                type="button"
                lang={l.code}
                aria-current={active ? "true" : undefined}
                onClick={() => setLang(l.code)}
                className={`flex h-12 w-full items-center justify-center rounded-2xl border px-2 text-sm font-semibold transition-colors ${
                  active ? "border-ink bg-ink text-paper" : "border-line hover:border-ink"
                } ${nameFont(l.dir)}`}
              >
                {l.name}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
