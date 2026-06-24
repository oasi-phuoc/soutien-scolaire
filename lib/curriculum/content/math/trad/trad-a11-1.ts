import type { SubmoduleTrad } from "./trad-types";

export const TRAD_A11_1: SubmoduleTrad = {
  submoduleId: "A11-1",
  title: {
    fr: "Notion de fonction",
    en: "Notion of function",
    ar: "مفهوم الدالة",
    fa: "مفهوم تابع",
    ti: "ናይ ስራሕ ሓሳብ",
    uk: "Поняття функції",
  },
  blocks: [
    {
      text: {
        fr: "Qu'est-ce qu'une fonction ?",
      }
    },
    {
      text: {
        fr: "Une fonction est une règle qui associe à chaque valeur d'entrée x **une et une seule** valeur de sortie y. On note f(x) = expression en x.",
      }
    },
    {
      text: {
        fr: "Vocabulaire essentiel",
      },
      items: {
        fr: [
            "**x** = valeur d'entrée (antécédent)",
            "**f(x)** = valeur de sortie (image de x)",
            "**Domaine** = ensemble des valeurs d'entrée autorisées",
          ],
      }
    },
    {
      text: {
        fr: "Comment utiliser une fonction",
      }
    },
    {
      text: {
        fr: "Calculer f(x) pour une valeur donnée",
      }
    },
    {
      items: {
        fr: [
            "f(x) = 2x **+** 3",
            "Pour x = 4 : f(4) = 2 × 4 **+** 3 = 8 **+** 3 = **11**",
            "On dit : « l'image de 4 par f est 11 »",
          ],
      }
    },
    {
      text: {
        fr: "Formes de représentation",
      }
    },
    {
      label: {
        fr: "Une fonction peut être représentée par :",
      },
      items: {
        fr: [
            "Une **formule** : f(x) = 2x **+** 3",
            "Un **tableau de valeurs** : liste de couples (x, f(x))",
            "Un **graphique** : courbe dans un repère cartésien",
          ],
      }
    },
    {
      headers: {
        fr: ["x", "0", "1", "2", "3", "4"],
      }
    },
  ],
};
