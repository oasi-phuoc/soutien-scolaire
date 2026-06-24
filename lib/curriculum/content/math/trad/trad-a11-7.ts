import type { SubmoduleTrad } from "./trad-types";

export const TRAD_A11_7: SubmoduleTrad = {
  submoduleId: "A11-7",
  title: {
    fr: "Lecture graphique",
    en: "Reading graphs",
    ar: "قراءة الرسوم البيانية",
    fa: "خواندن نمودار",
    ti: "ናይ ስዕሊ ምንባብ",
    uk: "Читання графіків",
  },
  blocks: [
    {
      text: {
        fr: "Lire un graphique sans calculer",
      }
    },
    {
      text: {
        fr: "La lecture graphique permet d'extraire des informations directement depuis une courbe, sans effectuer de calcul algébrique.",
      }
    },
    {
      text: {
        fr: "Deux opérations fondamentales",
      }
    },
    {
      text: {
        fr: "Trouver f(a) : image d'un x donné",
      }
    },
    {
      items: {
        fr: [
            "1. Repérer la valeur a sur l'axe x",
            "2. Monter verticalement jusqu'à la courbe",
            "3. Lire la valeur y correspondante sur l'axe y",
          ],
      }
    },
    {
      text: {
        fr: "Trouver x tel que f(x) = k",
      }
    },
    {
      items: {
        fr: [
            "1. Repérer la valeur k sur l'axe y",
            "2. Aller horizontalement jusqu'à la courbe",
            "3. Lire la valeur x correspondante sur l'axe x",
          ],
      }
    },
    {
      text: {
        fr: "Identifier les points clés d'un graphique",
      }
    },
    {
      headers: {
        fr: ["Point / Intersection", "Signification", "Méthode de lecture"],
      }
    },
    {
      text: {
        fr: "Croissance et décroissance",
      }
    },
    {
      label: {
        fr: "Sur un graphique :",
      },
      items: {
        fr: [
            "**Croissante** : la courbe monte de gauche à droite (y augmente quand x augmente)",
            "**Décroissante** : la courbe descend de gauche à droite (y diminue quand x augmente)",
            "**Constante** : la courbe est horizontale (y ne change pas)",
          ],
      }
    },
    {
      text: {
        fr: "f(x) = 2x + 1\n• f(3) = ? → monter depuis x=3 jusqu'à la droite → lire y = 7\n• f(x) = 5 pour x = ? → partir de y=5 → aller jusqu'à la droite → lire x = 2\n• Intersection avec axe x : f(x) = 0 → x = −0,5",
      }
    },
  ],
};
