import type { SubmoduleTrad } from "./trad-types";

export const TRAD_A9_5: SubmoduleTrad = {
  submoduleId: "A9-5",
  title: {
    fr: "Développement",
    en: "Simple expansion",
    ar: "التوسيع البسيط",
    fa: "توسعه ساده",
    ti: "ቀሊል ምስፋሕ",
    uk: "Просте розкриття дужок",
  },
  blocks: [
    {
      text: {
        fr: "Développer une expression",
      }
    },
    {
      text: {
        fr: "Développer signifie supprimer les parenthèses en distribuant la multiplication sur chaque terme à l'intérieur.",
      }
    },
    {
      text: {
        fr: "Propriété distributive",
      },
      items: {
        fr: [
            "a(b **+** c) = ab **+** ac",
            "a(b **−** c) = ab **−** ac",
          ],
      }
    },
    {
      text: {
        fr: "Exemples fondamentaux",
      }
    },
    {
      headers: {
        fr: ["Expression", "Développement", "Résultat"],
      }
    },
    {
      text: {
        fr: "Facteur négatif devant une parenthèse",
      }
    },
    {
      text: {
        fr: "Quand le facteur est négatif, tous les signes à l'intérieur de la parenthèse s'inversent.",
      }
    },
    {
      label: {
        fr: "Exemples avec facteur négatif",
      },
      items: {
        fr: [
            "**−**2(x **−** 3) = **−**2x **+** 6  (le **−** × **−** donne **+**)",
            "**−**(x **−** 5) = **−**x **+** 5",
            "**−**(2x **+** 7) = **−**2x **−** 7",
          ],
      }
    },
    {
      text: {
        fr: "Double distribution",
      }
    },
    {
      text: {
        fr: "(a + b)(c + d)",
      },
      items: {
        fr: [
            "(a **+** b)(c **+** d) = ac **+** ad **+** bc **+** bd",
          ],
      }
    },
    {
      text: {
        fr: "(x + 2)(x + 3) = x² + 3x + 2x + 6 = x² + 5x + 6",
      }
    },
  ],
};
