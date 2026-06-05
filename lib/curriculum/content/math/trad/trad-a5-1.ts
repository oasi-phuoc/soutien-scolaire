import type { SubmoduleTrad } from "./trad-types";

export const TRAD_A5_1: SubmoduleTrad = {
  submoduleId: "A5-1",
  title: {
    fr: "Lire et arrondir les décimaux",
    en: "Reading and rounding decimals",
    ar: "قراءة وتقريب الأعداد العشرية",
    fa: "خواندن و گرد کردن اعشار",
    ti: "ምንባብ ምልካዕ ቁጽሪ ቪርጉላ",
    uk: "Читання і округлення десяткових",
  },
  blocks: [
    {
      text: {
        fr: "Structure d'un nombre décimal",
      }
    },
    {
      text: {
        fr: "Définition",
      }
    },
    {
      items: {
        fr: [
            "Un nombre décimal contient une **virgule**.",
            "Avant la virgule → **partie entière** (milliers, centaines, dizaines, unités)",
            "Après la virgule → **partie décimale** (dixièmes, centièmes, millièmes)",
          ],
      }
    },
    {
      headers: {
        fr: ["M", "C", "D", "U", "", "dx", "cx"],
      }
    },
    {
      text: {
        fr: "",
      }
    },
    {
      label: {
        fr: "Valeur de chaque chiffre :",
      },
      items: {
        fr: [
            "4 → 4 milliers = 4 000",
            "3 → 3 centaines = 300",
            "2 → 2 dizaines = 20",
            "1 → 1 unité = 1",
            "9 → 9 **dixièmes** = 0,9",
            "8 → 8 **centièmes** = 0,08",
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
        fr: "Zéros après la virgule",
      }
    },
    {
      text: {
        fr: "Zéros inutiles",
      }
    },
    {
      text: {
        fr: "On peut ajouter des zéros à droite de la partie décimale sans changer la valeur.",
      }
    },
    {
      label: {
        fr: "4,2 = 4,2**0** = 4,2**00**",
      },
      items: {
        fr: [
            "",
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
        fr: "Comparer et ordonner",
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
            "**1**. Comparer les parties entières en premier.",
            "**2**. Si égales → comparer les dixièmes, puis les centièmes…",
            "**3**. Ajouter des zéros si nécessaire : 3,5 = 3,50",
          ],
      }
    },
    {
      headers: {
        fr: ["Comparaison", "Résultat", "Raison"],
      }
    },
  ],
};
