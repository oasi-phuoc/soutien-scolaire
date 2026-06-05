import type { SubmoduleTrad } from "./trad-types";

export const TRAD_A9_4: SubmoduleTrad = {
  submoduleId: "A9-4",
  title: {
    fr: "Réduction (termes semblables)",
    en: "Simplification (like terms)",
    ar: "التبسيط (الحدود المتشابهة)",
    fa: "ساده‌سازی (جملات مشابه)",
    ti: "ምቅናስ (ተመሳሳሊ ወጽዓ)",
    uk: "Зведення подібних доданків",
  },
  blocks: [
    {
      text: {
        fr: "Termes semblables",
      }
    },
    {
      text: {
        fr: "Des termes semblables (ou termes similaires) sont des termes qui ont la même variable portée au même exposant. On peut les additionner ou soustraire en regroupant leurs coefficients.",
      }
    },
    {
      text: {
        fr: "Règle de réduction",
      },
      items: {
        fr: [
            "Pour additionner des termes semblables : on additionne leurs **coefficients**",
            "Les termes constants (sans variable) se regroupent entre eux",
          ],
      }
    },
    {
      text: {
        fr: "Exemples de réduction",
      }
    },
    {
      headers: {
        fr: ["Expression", "Réduction", "Résultat"],
      }
    },
    {
      text: {
        fr: "Ce qui n'est PAS semblable",
      }
    },
    {
      text: {
        fr: "3x et 3x² ne sont PAS des termes semblables (exposants différents). 3x et 3y ne le sont pas non plus (variables différentes). On ne peut pas les regrouper.",
      }
    },
    {
      label: {
        fr: "Termes semblables → peuvent se regrouper",
      },
      items: {
        fr: [
            "5x et 3x (même variable x, même exposant 1)",
            "4a² et **−**2a² (même variable a, même exposant 2)",
            "7 et **−**3 (deux termes constants)",
          ],
      }
    },
    {
      label: {
        fr: "Termes NON semblables → ne peuvent pas se regrouper",
      },
      items: {
        fr: [
            "3x et 3x² (exposants différents)",
            "4x et 4y (variables différentes)",
            "5a et 5 (l'un a une variable, l'autre non)",
          ],
      }
    },
  ],
};
