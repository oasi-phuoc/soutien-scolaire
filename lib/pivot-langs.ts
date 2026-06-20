export const PIVOT_LANGS = [
  { code: "fr", label: "Français", labelFr: "Français" },
  { code: "en", label: "English", labelFr: "Anglais" },
  { code: "ar", label: "العربية", labelFr: "Arabe" },
  { code: "fa", label: "فارسی", labelFr: "Farsi" },
  { code: "pt", label: "Português", labelFr: "Portugais" },
  { code: "so", label: "Soomaali", labelFr: "Somali" },
  { code: "ti", label: "ትግርኛ", labelFr: "Tigrinya" },
  { code: "tr", label: "Türkçe", labelFr: "Turc" },
  { code: "ps", label: "پښتو", labelFr: "Pachto" },
  { code: "uk", label: "Українська", labelFr: "Ukrainien" },
] as const;

export type PivotCode = (typeof PIVOT_LANGS)[number]["code"];

export function isPivotCode(value: string | null | undefined): value is PivotCode {
  if (value == null || value === "") return false;
  return PIVOT_LANGS.some((l) => l.code === value);
}
