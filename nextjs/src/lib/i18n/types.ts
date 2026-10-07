import type en from "./en";

export type Dir = "ltr" | "rtl";

// Every language file must have exactly the shape of the English one.
export type Dictionary = typeof en;
