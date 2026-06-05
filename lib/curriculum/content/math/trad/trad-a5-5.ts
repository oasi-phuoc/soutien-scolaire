import type { SubmoduleTrad } from "./trad-types";

export const TRAD_A5_5: SubmoduleTrad = {
  submoduleId: "A5-5",
  title: {
    fr: "Multiplication de décimaux",
    en: "Multiplication of decimals",
    ar: "ضرب الأعداد العشرية",
    fa: "ضرب اعشار",
    ti: "ዘርፊ ቁጽሪ ቪርጉላ",
    uk: "Множення десяткових",
  },
  blocks: [
    {
      text: {
        fr: "Méthode en 4 étapes",
      }
    },
    {
      text: {
        fr: "Principe",
      }
    },
    {
      items: {
        fr: [
            "1. **Enlever les virgules** des deux facteurs.",
            "2. **Multiplier** comme des entiers (en colonnes).",
            "3. **Compter** le total de décimales dans les deux facteurs.",
            "4. **Replacer la virgule** dans le résultat.",
          ],
      }
    },
    {},
    {
      text: {
        fr: "3,14 × 2,5 = 7,85",
      }
    },
    {
      text: {
        fr: "",
      }
    },
    {
      text: {
        fr: "Astuces avec certains facteurs",
      }
    },
    {
      headers: {
        fr: ["Facteur", "Astuce", "Exemple"],
      }
    },
  ],
};
