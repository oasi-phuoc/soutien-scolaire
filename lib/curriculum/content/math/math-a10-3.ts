import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A10_3_LESSON: MathSubmoduleLesson = {
    submoduleId: "A10-3",
    submoduleCode: "A10.3",
    theory: {
      title: {
        fr: "",
      },
      paragraphs: { fr: [] },
      blocks: [
        {
          type: "heading",
          fr: "Méthode en deux étapes",
          black: true,
        },
        {
          type: "rule",
          titleFr: "Étapes de résolution",
          itemsFr: [
            "1. Isoler le terme en x : soustraire ou additionner b des deux membres",
            "2. Diviser les deux membres par le coefficient a",
            "3. Vérifier la solution dans l'équation originale",
          ],
        },
        {
          type: "highlight",
          fr: "Exemple standard",
        },
        {
          type: "section",
          labelFr: "",
          itemsFr: [
            "2x **+** 5 = 13",
            "→ 2x = 13 **−** 5 = 8",
            "→ x = 8 ÷ 2 = 4",
            "Vérification : 2(4) **+** 5 = 13 ✓",
          ],
        },
        {
          type: "heading",
          fr: "Termes en x des deux côtés",
          black: true,
        },
        {
          type: "plain",
          fr: "Quand des termes en x apparaissent des deux côtés de l'équation, on les regroupe d'un côté avant de résoudre.",
        },
        {
          type: "highlight",
          fr: "Exemple avec x des deux côtés",
        },
        {
          type: "section",
          labelFr: "",
          itemsFr: [
            "3x **+** 2 = x **+** 10",
            "→ 3x **−** x = 10 **−** 2",
            "→ 2x = 8",
            "→ x = 4",
            "Vérification : 3(4) **+** 2 = 14 et (4) **+** 10 = 14 ✓",
          ],
        },
        {
          type: "note",
          fr: "Toujours vérifier en substituant la valeur trouvée dans l'équation originale (pas dans une étape intermédiaire).",
        },
      ],
    },
  exercises: [],
  exercisePool: [
    { id: "a10-3-ep01", promptFr: "Résous 3x + 7 = 19. x = ?", type: "number", acceptable: ["4"], hintFr: "3x = 19 − 7 = 12, puis x = 12 ÷ 3." },
    { id: "a10-3-ep02", promptFr: "Résous 4x − 5 = 19. x = ?", type: "number", acceptable: ["6"], hintFr: "4x = 19 + 5 = 24, puis x = 24 ÷ 4." },
    { id: "a10-3-ep03", promptFr: "Résous 2x + 11 = 3. x = ?", type: "number", acceptable: ["-4"], hintFr: "2x = 3 − 11 = −8, puis x = −8 ÷ 2." },
    { id: "a10-3-ep04", promptFr: "Résous 5x − 8 = 22. x = ?", type: "number", acceptable: ["6"], hintFr: "5x = 22 + 8 = 30, puis x = 30 ÷ 5." },
    { id: "a10-3-ep05", promptFr: "Résous 6x + 4 = 28. x = ?", type: "number", acceptable: ["4"], hintFr: "6x = 28 − 4 = 24, puis x = 24 ÷ 6." },
    { id: "a10-3-ep06", promptFr: "Résous 4x + 3 = x + 15. x = ?", type: "number", acceptable: ["4"], hintFr: "4x − x = 15 − 3, donc 3x = 12." },
    { id: "a10-3-ep07", promptFr: "Résous 7x − 2 = 4x + 10. x = ?", type: "number", acceptable: ["4"], hintFr: "7x − 4x = 10 + 2, donc 3x = 12." },
    { id: "a10-3-ep08", promptFr: "Résous 5x + 6 = 2x + 21. x = ?", type: "number", acceptable: ["5"], hintFr: "5x − 2x = 21 − 6, donc 3x = 15." },
    { id: "a10-3-ep09", promptFr: "Résous 8x − 3 = 5x + 12. x = ?", type: "number", acceptable: ["5"], hintFr: "8x − 5x = 12 + 3, donc 3x = 15." },
    { id: "a10-3-ep10", promptFr: "Résous 3x + 5 = x + 13. x = ?", type: "number", acceptable: ["4"], hintFr: "3x − x = 13 − 5, donc 2x = 8." },
    { id: "a10-3-ep11", promptFr: "Résous 9x − 4 = 6x + 11. x = ?", type: "number", acceptable: ["5"], hintFr: "9x − 6x = 11 + 4, donc 3x = 15." },
    { id: "a10-3-ep12", promptFr: "Résous 2x + 14 = 5x − 1. x = ?", type: "number", acceptable: ["5"], hintFr: "14 + 1 = 5x − 2x, donc 3x = 15." },
  ],
  poolSize: 5,
};
