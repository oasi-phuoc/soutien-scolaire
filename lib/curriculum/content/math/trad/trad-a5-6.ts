import type { SubmoduleTrad } from "./trad-types";

export const TRAD_A5_6: SubmoduleTrad = {
  submoduleId: "A5-6",
  title: {
    fr: "Division de décimaux",
    en: "Division of decimals",
    ar: "قسمة الأعداد العشرية",
    fa: "تقسیم اعشار",
    ti: "ክፍፍል ቁጽሪ ቪርጉላ",
    uk: "Ділення десяткових",
  },
  blocks: [
    {
      text: {
        fr: "Vocabulaire",
      }
    },
    {
      headers: {
        fr: ["Terme", "Rôle", "Exemple"],
      }
    },
    {
      text: {
        fr: "On ne peut PAS échanger dividende et diviseur : 82,5 ÷ 6 ≠ 6 ÷ 82,5",
      }
    },
    {
      text: {
        fr: "",
      }
    },
    {
      text: {
        fr: "Division avec décimale",
      }
    },
    {
      text: {
        fr: "Méthode",
      }
    },
    {
      items: {
        fr: [
            "1. Multiplier le dividende pour supprimer la virgule (× 10, × 100…).",
            "2. Diviser comme des entiers.",
            "3. Diviser le quotient par le même facteur → replacer la virgule.",
          ],
      }
    },
    {},
    {
      text: {
        fr: "82,5 ÷ 6 = 13,75",
      }
    },
    {
      text: {
        fr: "",
      }
    },
    {
      text: {
        fr: "Vérification",
      }
    },
    {
      items: {
        fr: [
            "quotient × diviseur = dividende",
            "13,75 × 6 = 82,5 ✓",
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
        fr: "Astuces pour diviser",
      }
    },
    {
      headers: {
        fr: ["Diviseur", "Astuce", "Exemple"],
      }
    },
  ],
};
