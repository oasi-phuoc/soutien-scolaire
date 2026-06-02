import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A13_3_LESSON: MathSubmoduleLesson = {
    submoduleId: "A13-3",
    submoduleCode: "A13.3",
    theory: {
      title: {
        fr: "Graphique dans un repère",
        en: "Graph in a coordinate system",
        ar: "الرسم البياني في منظومة إحداثيات",
        fa: "نمودار در دستگاه مختصات",
        ti: "ስዕሊ ኣብ ናይ ቦታ ስርዓት",
        uk: "Графік у системі координат",
      },
      paragraphs: { fr: [] },
      blocks: [
        {
          type: "heading",
          fr: "Le repère cartésien",
          black: true,
        },
        {
          type: "plain",
          fr: "Le repère cartésien est formé de deux axes perpendiculaires qui se croisent en l'**origine O(0, 0)**.",
        },
        {
          type: "table",
          headersFr: ["Axe", "Direction", "Variable", "Nom"],
          accentHeader: true,
          rows: [
            ["Axe des abscisses", "Horizontal (→)", "x", "Axe x"],
            ["Axe des ordonnées", "Vertical (↑)", "y", "Axe y"],
          ],
        },
        {
          type: "heading",
          fr: "Lire et placer des coordonnées",
          black: true,
        },
        {
          type: "rule",
          titleFr: "Comment placer un point (x ; y)",
          itemsFr: [
            "1. Repérer la valeur x sur l'axe horizontal",
            "2. Depuis ce point, monter (ou descendre) jusqu'à la valeur y",
            "3. Marquer le point à l'intersection",
          ],
        },
        {
          type: "section",
          labelFr: "Exemples de coordonnées",
          itemsFr: [
            "A(3 ; 7) → x = 3, y = 7 (3 vers la droite, 7 vers le haut)",
            "B(**−**2 ; 5) → x = **−**2, y = 5 (2 vers la gauche, 5 vers le haut)",
            "O(0 ; 0) → l'origine, intersection des deux axes",
          ],
        },
        {
          type: "heading",
          fr: "Tracer le graphique d'une fonction",
          black: true,
        },
        {
          type: "rule",
          titleFr: "3 étapes",
          itemsFr: [
            "1. Construire le tableau de valeurs",
            "2. Placer chaque point (x ; f(x)) dans le repère",
            "3. Relier les points par une courbe lisse (ou une droite si la fonction est affine/linéaire)",
          ],
        },
        {
          type: "note",
          fr: "Lecture graphique : pour un x donné → lire y sur la courbe. Pour un y donné → aller horizontalement jusqu'à la courbe, lire x.",
        },
      ],
    },
    exercises: [],
    exercisePool: [
      { id: "a13-3-ep01", promptFr: "Sur la droite f(x) = 2x + 1, quelle est l'ordonnée du point d'abscisse 3 ?", type: "number", acceptable: ["7"], hintFr: "L'ordonnée d'un point est f(x) : remplace x par l'abscisse donnée."},
      { id: "a13-3-ep02", promptFr: "Sur la droite f(x) = x − 2, quelle est l'ordonnée du point d'abscisse 5 ?", type: "number", acceptable: ["3"], hintFr: "L'ordonnée d'un point est f(x) : remplace x par l'abscisse donnée."},
      { id: "a13-3-ep03", promptFr: "Sur la droite f(x) = 3x, quelle est l'ordonnée du point d'abscisse 4 ?", type: "number", acceptable: ["12"], hintFr: "L'ordonnée d'un point est f(x) : remplace x par l'abscisse donnée."},
      { id: "a13-3-ep04", promptFr: "Sur la droite f(x) = −x + 4, quelle est l'ordonnée du point d'abscisse 2 ?", type: "number", acceptable: ["2"], hintFr: "L'ordonnée d'un point est f(x) : remplace x par l'abscisse donnée."},
      { id: "a13-3-ep05", promptFr: "Quelle est l'abscisse du point (3 ; 7) ?", type: "number", acceptable: ["3"], hintFr: "L'ordonnée d'un point est f(x) : remplace x par l'abscisse donnée."},
      { id: "a13-3-ep06", promptFr: "Quelle est l'ordonnée du point (3 ; 7) ?", type: "number", acceptable: ["7"], hintFr: "L'ordonnée d'un point est f(x) : remplace x par l'abscisse donnée."},
      { id: "a13-3-ep07", promptFr: "Sur la droite f(x) = 2x − 3, quelle est l'ordonnée du point d'abscisse 4 ?", type: "number", acceptable: ["5"], hintFr: "L'ordonnée d'un point est f(x) : remplace x par l'abscisse donnée."},
      { id: "a13-3-ep08", promptFr: "Sur la droite f(x) = x + 6, quelle est l'ordonnée du point d'abscisse −2 ?", type: "number", acceptable: ["4"], hintFr: "L'ordonnée d'un point est f(x) : remplace x par l'abscisse donnée."},
      { id: "a13-3-ep09", promptFr: "Sur la droite f(x) = 4x − 1, quelle est l'ordonnée du point d'abscisse 2 ?", type: "number", acceptable: ["7"], hintFr: "L'ordonnée d'un point est f(x) : remplace x par l'abscisse donnée."},
      { id: "a13-3-ep10", promptFr: "Sur la droite f(x) = −2x + 5, quelle est l'ordonnée du point d'abscisse 3 ?", type: "number", acceptable: ["-1"], hintFr: "L'ordonnée d'un point est f(x) : remplace x par l'abscisse donnée."},
    ],
    poolSize: 5,
  };
