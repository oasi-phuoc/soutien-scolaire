export const PIVOT_LANGS = [
  { code: "ar", label: "العربية", labelFr: "Arabe" },
  { code: "fa", label: "فارسی", labelFr: "Farsi" },
  { code: "ti", label: "ትግርኛ", labelFr: "Tigrinya" },
  { code: "uk", label: "Українська", labelFr: "Ukrainien" },
] as const;

export type PivotCode = (typeof PIVOT_LANGS)[number]["code"];
