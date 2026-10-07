"use client";

import { ReactNode, useCallback, useEffect, useSyncExternalStore } from "react";

export type Lang = "en" | "ar";

const STORAGE_KEY = "iqamat-lang";
const listeners = new Set<() => void>();
let current: Lang | null = null;

function isLang(value: unknown): value is Lang {
  return value === "en" || value === "ar";
}

// A ?lang=ar link (for example one shared on WhatsApp) wins over the stored choice.
function readInitial(): Lang {
  try {
    const fromUrl = new URLSearchParams(window.location.search).get("lang");
    if (isLang(fromUrl)) {
      localStorage.setItem(STORAGE_KEY, fromUrl);
      return fromUrl;
    }
    const stored = localStorage.getItem(STORAGE_KEY);
    if (isLang(stored)) return stored;
  } catch {
    // Storage can be unavailable (private mode); fall back to English.
  }
  return "en";
}

function getSnapshot(): Lang {
  if (current === null) current = readInitial();
  return current;
}

function getServerSnapshot(): Lang {
  return "en";
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function setLang(lang: Lang) {
  current = lang;
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch {}
  listeners.forEach((l) => l());
}

export function useLanguage() {
  const lang = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const t = useCallback(
    (en: string, ar: string) => (lang === "en" ? en : ar),
    [lang]
  );
  const toggleLang = useCallback(
    () => setLang(lang === "en" ? "ar" : "en"),
    [lang]
  );
  return { lang, t, toggleLang, isRTL: lang === "ar" };
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const { lang, isRTL } = useLanguage();

  useEffect(() => {
    const root = document.documentElement;
    root.lang = lang;
    root.dir = isRTL ? "rtl" : "ltr";
  }, [lang, isRTL]);

  return <>{children}</>;
}
