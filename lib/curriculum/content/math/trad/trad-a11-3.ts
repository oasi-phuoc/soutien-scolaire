import type { SubmoduleTrad } from "./trad-types";

export const TRAD_A11_3: SubmoduleTrad = {
  submoduleId: "A11-3",
  title: {
    fr: "Graphique dans un repère",
    en: "Graph in a coordinate system",
    ar: "الرسم البياني في منظومة إحداثيات",
    fa: "نمودار در دستگاه مختصات",
    ti: "ስዕሊ ኣብ ናይ ቦታ ስርዓት",
    uk: "Графік у системі координат",
  },
  blocks: [
    {
      text: {
        fr: "Le repère cartésien",
      }
    },
    {
      text: {
        fr: "Le repère cartésien est formé de deux axes perpendiculaires qui se croisent en l'**origine O(0, 0)**.",
      }
    },
    {
      headers: {
        fr: ["Axe", "Direction", "Variable", "Nom"],
      }
    },
    {
      text: {
        fr: "Lire et placer des coordonnées",
      }
    },
    {
      text: {
        fr: "Comment placer un point (x ; y)",
      },
      items: {
        fr: [
            "1. Repérer la valeur x sur l'axe horizontal",
            "2. Depuis ce point, monter (ou descendre) jusqu'à la valeur y",
            "3. Marquer le point à l'intersection",
          ],
      }
    },
    {
      label: {
        fr: "Exemples de coordonnées",
      },
      items: {
        fr: [
            "A(3 ; 7) → x = 3, y = 7 (3 vers la droite, 7 vers le haut)",
            "B(**−**2 ; 5) → x = **−**2, y = 5 (2 vers la gauche, 5 vers le haut)",
            "O(0 ; 0) → l'origine, intersection des deux axes",
          ],
      }
    },
    {
      text: {
        fr: "Tracer le graphique d'une fonction",
      }
    },
    {
      text: {
        fr: "3 étapes",
      },
      items: {
        fr: [
            "1. Construire le tableau de valeurs",
            "2. Placer chaque point (x ; f(x)) dans le repère",
            "3. Relier les points par une courbe lisse (ou une droite si la fonction est affine/linéaire)",
          ],
      }
    },
    {
      text: {
        fr: "Lecture graphique : pour un x donné → lire y sur la courbe. Pour un y donné → aller horizontalement jusqu'à la courbe, lire x.",
      }
    },
  ],
};
