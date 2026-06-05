import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A10_2_LESSON: MathSubmoduleLesson = {
    submoduleId: "A10-2",
    submoduleCode: "A10.2",
    theory: {
      title: {
        fr: "Résolution : ax = b",
      },
      paragraphs: { fr: [] },
      blocks: [
        {
          type: "heading",
          fr: "Forme ax = b",
          black: true,
        },
        {
          type: "plain",
          fr: "La forme ax = b se résout en divisant les deux membres par a (avec a ≠ 0) : on isole x.",
        },
        {
          type: "rule",
          titleFr: "Règle de résolution",
          itemsFr: [
            "ax = b  →  x = b ÷ a  (on divise par **a** des deux côtés)",
          ],
        },
        {
          type: "heading",
          fr: "Exemples",
          black: true,
        },
        {
          type: "table",
          headersFr: ["Équation", "Résolution", "Solution", "Vérification"],
          accentHeader: true,
          rows: [
            ["3x = 15", "x = 15 ÷ 3", "x = 5", "3 × 5 = 15 ✓"],
            ["**−**4x = 20", "x = 20 ÷ (**−**4)", "x = **−**5", "**−**4 × (**−**5) = 20 ✓"],
            ["7x = 0", "x = 0 ÷ 7", "x = 0", "7 × 0 = 0 ✓"],
          ],
        },
        {
          type: "heading",
          fr: "Cas particuliers",
          black: true,
        },
        {
          type: "bullets",
          labelFr: "",
          itemsFr: [
            "Si a = 0 et b = 0 : tout nombre est solution (infinité de solutions)",
            "Si a = 0 et b ≠ 0 : aucune solution (l'équation est impossible)",
          ],
        },
        {
          type: "note",
          fr: "On ne divise jamais par 0. Si a = 0, l'équation ne peut pas être résolue par cette méthode.",
        },
      ],
    },
    exercises: [],
    exercisePool: [
      { id: "a10-2-ep01", promptFr: "Résous 3x = 15. x = ?", type: "number", acceptable: ["5"], hintFr: "Divise les deux membres par le coefficient de x pour trouver sa valeur."},
      { id: "a10-2-ep02", promptFr: "Résous 4x = 20. x = ?", type: "number", acceptable: ["5"], hintFr: "Divise les deux membres par le coefficient de x pour trouver sa valeur."},
      { id: "a10-2-ep03", promptFr: "Résous 7x = 35. x = ?", type: "number", acceptable: ["5"], hintFr: "Divise les deux membres par le coefficient de x pour trouver sa valeur."},
      { id: "a10-2-ep04", promptFr: "Résous 2x = 18. x = ?", type: "number", acceptable: ["9"], hintFr: "Divise les deux membres par le coefficient de x pour trouver sa valeur."},
      { id: "a10-2-ep05", promptFr: "Résous −3x = 12. x = ?", type: "number", acceptable: ["-4"], hintFr: "Divise les deux membres par le coefficient de x pour trouver sa valeur."},
      { id: "a10-2-ep06", promptFr: "Résous 5x = 40. x = ?", type: "number", acceptable: ["8"], hintFr: "Divise les deux membres par le coefficient de x pour trouver sa valeur."},
      { id: "a10-2-ep07", promptFr: "Résous 6x = 54. x = ?", type: "number", acceptable: ["9"], hintFr: "Divise les deux membres par le coefficient de x pour trouver sa valeur."},
      { id: "a10-2-ep08", promptFr: "Résous −2x = 10. x = ?", type: "number", acceptable: ["-5"], hintFr: "Divise les deux membres par le coefficient de x pour trouver sa valeur."},
      { id: "a10-2-ep09", promptFr: "Résous 9x = 63. x = ?", type: "number", acceptable: ["7"], hintFr: "Divise les deux membres par le coefficient de x pour trouver sa valeur."},
      { id: "a10-2-ep10", promptFr: "Résous 8x = 56. x = ?", type: "number", acceptable: ["7"], hintFr: "Divise les deux membres par le coefficient de x pour trouver sa valeur."},
    ],
    poolSize: 5,
  };
