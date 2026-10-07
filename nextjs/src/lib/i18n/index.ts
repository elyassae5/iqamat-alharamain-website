import en from "./en";
import ar from "./ar";
import fr from "./fr";
import nl from "./nl";
import de from "./de";
import es from "./es";
import type { Dictionary } from "./types";

// To add a language: create its file next to these (typed as Dictionary) and add it here.
const all = [en, fr, nl, de, es, ar] satisfies Dictionary[];

export type Lang = string;
export type { Dictionary, Dir } from "./types";

export const dictionaries: Record<Lang, Dictionary> = Object.fromEntries(
  all.map((d) => [d.meta.code, d])
);
export const languages = all.map((d) => d.meta);
export const defaultLang: Lang = "en";
