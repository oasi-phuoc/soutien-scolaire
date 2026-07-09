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
        fr: "Des termes semblables sont des termes qui ont la même variable. On peut les additionner ou soustraire en regroupant leurs coefficients.",
      }
    },
    {
      text: {
        fr: "Exemples",
      }
    },
    {
      items: {
        fr: [
          "**5x** et **3x**    (même variable **x**, même exposant 1)",
          "**4a²** et **−**2**a²** (même variable **a**, même exposant 2)",
          "**7** et **−**3**     (deux termes constants)",
        ],
      }
    },
    {
      text: {
        fr: "Termes NON semblables",
      }
    },
    {
      text: {
        fr: "Les termes qui ont des exposants différents ou des variables différentes ne peuvent pas se regrouper.",
      }
    },
    {
      text: {
        fr: "Exemples",
      }
    },
    {
      items: {
        fr: [
          "**3x** et **3x²** (exposants différents)",
          "**4x** et **4y** (variables différentes)",
          "**5a** et **5** (l'un a une variable, l'autre non)",
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
  ],
};
