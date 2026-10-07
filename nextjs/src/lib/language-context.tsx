"use client";

import { ReactNode, useEffect, useSyncExternalStore } from "react";
import { defaultLang, dictionaries, type Lang } from "./i18n";

export type { Lang };

const STORAGE_KEY = "iqamat-lang";
const listeners = new Set<() => void>();
let current: Lang | null = null;

function isLang(value: unknown): value is Lang {
  return typeof value === "string" && value in dictionaries;
}

// Order: a ?lang= link (for example one shared on WhatsApp), then the saved choice,
// then the first browser language we support, then English.
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
    // Storage can be unavailable (private mode); fall through to the browser language.
  }
  for (const tag of navigator.languages ?? [navigator.language]) {
    const base = tag?.toLowerCase().split("-")[0];
    if (isLang(base)) return base;
  }
  return defaultLang;
}

function getSnapshot(): Lang {
  if (current === null) current = readInitial();
  return current;
}

function getServerSnapshot(): Lang {
  return defaultLang;
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function setLang(lang: Lang) {
  if (!isLang(lang)) return;
  current = lang;
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch {}
  listeners.forEach((l) => l());
}

export function useLanguage() {
  const lang = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const t = dictionaries[lang];
  return { lang, t, setLang, isRTL: t.meta.dir === "rtl" };
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const { lang, t } = useLanguage();

  useEffect(() => {
    const root = document.documentElement;
    root.lang = lang;
    root.dir = t.meta.dir;
  }, [lang, t]);

  return <>{children}</>;
}
