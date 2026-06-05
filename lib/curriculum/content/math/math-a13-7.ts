import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A13_7_LESSON: MathSubmoduleLesson = {
    submoduleId: "A13-7",
    submoduleCode: "A13.7",
    theory: {
      title: {
        fr: "Lecture graphique",
      },
      paragraphs: { fr: [] },
      blocks: [
        {
          type: "heading",
          fr: "Lire un graphique sans calculer",
          black: true,
        },
        {
          type: "plain",
          fr: "La lecture graphique permet d'extraire des informations directement depuis une courbe, sans effectuer de calcul algébrique.",
        },
        {
          type: "heading",
          fr: "Deux opérations fondamentales",
          black: true,
        },
        {
          type: "highlight",
          fr: "Trouver f(a) : image d'un x donné",
        },
        {
          type: "section",
          labelFr: "",
          itemsFr: [
            "1. Repérer la valeur a sur l'axe x",
            "2. Monter verticalement jusqu'à la courbe",
            "3. Lire la valeur y correspondante sur l'axe y",
          ],
        },
        {
          type: "highlight",
          fr: "Trouver x tel que f(x) = k",
        },
        {
          type: "section",
          labelFr: "",
          itemsFr: [
            "1. Repérer la valeur k sur l'axe y",
            "2. Aller horizontalement jusqu'à la courbe",
            "3. Lire la valeur x correspondante sur l'axe x",
          ],
        },
        {
          type: "heading",
          fr: "Identifier les points clés d'un graphique",
          black: true,
        },
        {
          type: "table",
          headersFr: ["Point / Intersection", "Signification", "Méthode de lecture"],
          accentHeader: true,
          rows: [
            ["Intersection avec axe x", "f(x) = 0 (racines/zéros)", "Lire x quand la courbe croise l'axe x"],
            ["Intersection avec axe y", "Ordonnée à l'origine (x = 0)", "Lire y quand la courbe croise l'axe y"],
          ],
        },
        {
          type: "heading",
          fr: "Croissance et décroissance",
          black: true,
        },
        {
          type: "bullets",
          labelFr: "Sur un graphique :",
          itemsFr: [
            "**Croissante** : la courbe monte de gauche à droite (y augmente quand x augmente)",
            "**Décroissante** : la courbe descend de gauche à droite (y diminue quand x augmente)",
            "**Constante** : la courbe est horizontale (y ne change pas)",
          ],
        },
        {
          type: "example",
          fr: "f(x) = 2x + 1\n• f(3) = ? → monter depuis x=3 jusqu'à la droite → lire y = 7\n• f(x) = 5 pour x = ? → partir de y=5 → aller jusqu'à la droite → lire x = 2\n• Intersection avec axe x : f(x) = 0 → x = −0,5",
        },
      ],
    },
    exercises: [],
    exercisePool: [
      { id: "a13-7-ep01", promptFr: "f(x) = 2x + 1. Calcule f(3).", type: "number", acceptable: ["7"], hintFr: "Pour trouver x à partir de f(x), pose l'équation f(x) = valeur et résous."},
      { id: "a13-7-ep02", promptFr: "f(x) = 2x + 1. Pour quelle valeur de x est-ce que f(x) = 5 ?", type: "number", acceptable: ["2"], hintFr: "Pour trouver x à partir de f(x), pose l'équation f(x) = valeur et résous."},
      { id: "a13-7-ep03", promptFr: "f(x) = 3x − 6. Quelle est l'abscisse à l'origine (f(x) = 0) ?", type: "number", acceptable: ["2"], hintFr: "Pour trouver x à partir de f(x), pose l'équation f(x) = valeur et résous."},
      { id: "a13-7-ep04", promptFr: "f(x) = x + 4. Pour quelle valeur de x est-ce que f(x) = 9 ?", type: "number", acceptable: ["5"], hintFr: "Pour trouver x à partir de f(x), pose l'équation f(x) = valeur et résous."},
      { id: "a13-7-ep05", promptFr: "f(x) = 2x − 4. Quelle est l'abscisse à l'origine ?", type: "number", acceptable: ["2"], hintFr: "Pour trouver x à partir de f(x), pose l'équation f(x) = valeur et résous."},
      { id: "a13-7-ep06", promptFr: "f(x) = −x + 6. Pour quelle valeur de x est-ce que f(x) = 0 ?", type: "number", acceptable: ["6"], hintFr: "Pour trouver x à partir de f(x), pose l'équation f(x) = valeur et résous."},
      { id: "a13-7-ep07", promptFr: "f(x) = 4x + 4. Quelle est l'ordonnée à l'origine ?", type: "number", acceptable: ["4"], hintFr: "Pour trouver x à partir de f(x), pose l'équation f(x) = valeur et résous."},
      { id: "a13-7-ep08", promptFr: "f(x) = 3x + 3. Pour quelle valeur de x est-ce que f(x) = 12 ?", type: "number", acceptable: ["3"], hintFr: "Pour trouver x à partir de f(x), pose l'équation f(x) = valeur et résous."},
      { id: "a13-7-ep09", promptFr: "f(x) = −2x + 8. Pour quelle valeur de x est-ce que f(x) = 0 ?", type: "number", acceptable: ["4"], hintFr: "Pour trouver x à partir de f(x), pose l'équation f(x) = valeur et résous."},
      { id: "a13-7-ep10", promptFr: "f(x) = 5x − 10. Quelle est l'abscisse à l'origine ?", type: "number", acceptable: ["2"], hintFr: "Pour trouver x à partir de f(x), pose l'équation f(x) = valeur et résous."},
    ],
    poolSize: 5,
  };
