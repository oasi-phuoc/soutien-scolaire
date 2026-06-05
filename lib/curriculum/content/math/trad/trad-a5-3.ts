import type { SubmoduleTrad } from "./trad-types";

export const TRAD_A5_3: SubmoduleTrad = {
  submoduleId: "A5-3",
  title: {
    fr: "Arrondir les décimaux",
    en: "Rounding decimals",
    ar: "تقريب الأعداد العشرية",
    fa: "گرد کردن اعشار",
    ti: "ቁጽሪ ቪርጉላ ምልካዕ",
    uk: "Округлення десяткових",
  },
  blocks: [
    {
      text: {
        fr: "Règle d'arrondi",
      }
    },
    {
      text: {
        fr: "Comment arrondir",
      }
    },
    {
      items: {
        fr: [
            "1. Repérer la **position d'arrondi** (unité, dixième, centième…).",
            "2. Regarder le chiffre **juste après** cette position.",
          ],
      }
    },
    {
      text: {
        fr: "",
      },
      items: {
        fr: [
            "Chiffre ≥ 5  →  arrondir vers le HAUT (augmenter d'un)",
            "Chiffre < 5  →  arrondir vers le BAS (laisser tel quel)",
          ],
      }
    },
    {
      text: {
        fr: "",
      }
    },
    {
      text: {
        fr: "Exemples",
      }
    },
    {
      headers: {
        fr: ["Nombre", "Arrondi à", "Chiffre suivant", "Résultat"],
      }
    },
    {
      text: {
        fr: "Après l'arrondi, on supprime les chiffres après la position arrondie.",
      }
    },
  ],
};
