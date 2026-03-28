"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Lang = "en" | "ar";

interface LanguageContextType {
  lang: Lang;
  toggleLang: () => void;
  t: (en: string, ar: string) => string;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  toggleLang: () => {},
  t: (en) => en,
  isRTL: false,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  const toggleLang = () => setLang((l) => (l === "en" ? "ar" : "en"));
  const t = (en: string, ar: string) => (lang === "en" ? en : ar);
  const isRTL = lang === "ar";

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t, isRTL }}>
      <div dir={isRTL ? "rtl" : "ltr"}>{children}</div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
