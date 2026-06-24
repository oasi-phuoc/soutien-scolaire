import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A10_5_LESSON: MathSubmoduleLesson = {
    submoduleId: "A10-5",
    submoduleCode: "A10.5",
    theory: {
      title: {
        fr: "Équations avec fractions",
      },
      paragraphs: { fr: [] },
      blocks: [
        {
          type: "heading",
          fr: "Éliminer les fractions",
          black: true,
        },
        {
          type: "plain",
          fr: "Pour résoudre une équation contenant des fractions, on commence par éliminer les dénominateurs en multipliant tous les termes par le dénominateur commun (ou le PPCM des dénominateurs).",
        },
        {
          type: "rule",
          titleFr: "Méthode",
          itemsFr: [
            "1. Trouver le PPCM de tous les dénominateurs",
            "2. Multiplier chaque terme des deux membres par ce PPCM",
            "3. Simplifier : les fractions disparaissent",
            "4. Résoudre l'équation entière obtenue",
            "5. Vérifier la solution",
          ],
        },
        {
          type: "heading",
          fr: "Exemples",
          black: true,
        },
        {
          type: "highlight",
          fr: "Exemple avec un seul dénominateur",
        },
        {
          type: "section",
          labelFr: "",
          itemsFr: [
            "x/2 **+** 3 = 7",
            "→ Multiplier par 2 : x **+** 6 = 14",
            "→ x = 8",
            "Vérification : 8/2 **+** 3 = 4 **+** 3 = 7 ✓",
          ],
        },
        {
          type: "highlight",
          fr: "Exemple avec deux dénominateurs différents",
        },
        {
          type: "section",
          labelFr: "",
          itemsFr: [
            "x/3 **+** x/6 = 5",
            "→ PPCM(3, 6) = 6",
            "→ Multiplier par 6 : 2x **+** x = 30",
            "→ 3x = 30  →  x = 10",
            "Vérification : 10/3 **+** 10/6 = 3,33 **+** 1,67 = 5 ✓",
          ],
        },
        {
          type: "note",
          fr: "La vérification est indispensable : après avoir trouvé la solution, la substituer dans l'équation originale (avec les fractions) pour valider.",
        },
      ],
    },
  exercises: [],
  exercisePool: [
    { id: "a10-5-ep01", promptFr: "Résous x/3 + 4 = 8. x = ?", type: "number", acceptable: ["12"], hintFr: "x/3 = 8 − 4 = 4, puis x = 4 × 3." },
    { id: "a10-5-ep02", promptFr: "Résous x/5 = 6. x = ?", type: "number", acceptable: ["30"], hintFr: "x = 6 × 5 = ?" },
    { id: "a10-5-ep03", promptFr: "Résous x/4 + 2 = 7. x = ?", type: "number", acceptable: ["20"], hintFr: "x/4 = 5, puis x = 5 × 4." },
    { id: "a10-5-ep04", promptFr: "Résous 3x/4 = 9. x = ?", type: "number", acceptable: ["12"], hintFr: "3x = 9 × 4 = 36, puis x = 36 ÷ 3." },
    { id: "a10-5-ep05", promptFr: "Résous x/2 + 5 = 9. x = ?", type: "number", acceptable: ["8"], hintFr: "x/2 = 4, puis x = 4 × 2." },
    { id: "a10-5-ep06", promptFr: "Résous 2x/5 = 4. x = ?", type: "number", acceptable: ["10"], hintFr: "2x = 4 × 5 = 20, puis x = 20 ÷ 2." },
    { id: "a10-5-ep07", promptFr: "Résous x/6 + x/3 = 3. x = ?", type: "number", acceptable: ["6"], hintFr: "x/6 + 2x/6 = 3x/6 = x/2 = 3, donc x = 6." },
    { id: "a10-5-ep08", promptFr: "Résous x/3 = 5. x = ?", type: "number", acceptable: ["15"], hintFr: "x = 5 × 3 = ?" },
    { id: "a10-5-ep09", promptFr: "Résous x/4 + x/2 = 6. x = ?", type: "number", acceptable: ["8"], hintFr: "x/4 + 2x/4 = 3x/4 = 6, donc x = 8." },
    { id: "a10-5-ep10", promptFr: "Résous x/2 − 3 = 5. x = ?", type: "number", acceptable: ["16"], hintFr: "x/2 = 8, puis x = 8 × 2." },
    { id: "a10-5-ep11", promptFr: "Résous x/7 = 4. x = ?", type: "number", acceptable: ["28"], hintFr: "x = 4 × 7 = ?" },
    { id: "a10-5-ep12", promptFr: "Résous 4x/3 = 8. x = ?", type: "number", acceptable: ["6"], hintFr: "4x = 8 × 3 = 24, puis x = 24 ÷ 4." },
  ],
  poolSize: 5,
};
