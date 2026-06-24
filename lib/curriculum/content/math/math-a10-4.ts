import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A10_4_LESSON: MathSubmoduleLesson = {
    submoduleId: "A10-4",
    submoduleCode: "A10.4",
    theory: {
      title: {
        fr: "",
      },
      paragraphs: { fr: [] },
      blocks: [
        {
          type: "heading",
          fr: "Démarche générale",
          black: true,
        },
        {
          type: "rule",
          titleFr: "Étapes avec parenthèses",
          itemsFr: [
            "1. Développer toutes les parenthèses",
            "2. Réduire les termes semblables",
            "3. Résoudre l'équation obtenue",
            "4. Vérifier la solution",
          ],
        },
        {
          type: "heading",
          fr: "Exemples",
          black: true,
        },
        {
          type: "highlight",
          fr: "Exemple simple",
        },
        {
          type: "section",
          labelFr: "",
          itemsFr: [
            "3(2x **+** 1) = 21",
            "→ 6x **+** 3 = 21",
            "→ 6x = 18",
            "→ x = 3",
          ],
        },
        {
          type: "highlight",
          fr: "Exemple avec plusieurs parenthèses",
        },
        {
          type: "section",
          labelFr: "",
          itemsFr: [
            "2(x **+** 3) **−** (x **−** 1) = 8",
            "→ 2x **+** 6 **−** x **+** 1 = 8",
            "→ x **+** 7 = 8",
            "→ x = 1",
          ],
        },
        {
          type: "heading",
          fr: "Piège : le signe − devant une parenthèse",
          black: true,
        },
        {
          type: "note",
          fr: "Le signe − devant une parenthèse inverse tous les signes à l'intérieur.",
        },
        {
          type: "section",
          labelFr: "Exemples de développement",
          itemsFr: [
            "**−**(x **−** 5) = **−**x **+** 5",
            "**−**(2x **+** 3) = **−**2x **−** 3",
            "**−**(a **−** b) = **−**a **+** b",
          ],
        },
      ],
    },
  exercises: [],
  exercisePool: [
    { id: "a10-4-ep01", promptFr: "Résous 3(x + 4) = 21. x = ?", type: "number", acceptable: ["3"], hintFr: "3x + 12 = 21, puis 3x = 9." },
    { id: "a10-4-ep02", promptFr: "Résous 4(x − 5) = 8. x = ?", type: "number", acceptable: ["7"], hintFr: "4x − 20 = 8, puis 4x = 28." },
    { id: "a10-4-ep03", promptFr: "Résous 2(3x + 1) = 26. x = ?", type: "number", acceptable: ["4"], hintFr: "6x + 2 = 26, puis 6x = 24." },
    { id: "a10-4-ep04", promptFr: "Résous 5(2x − 3) = 25. x = ?", type: "number", acceptable: ["4"], hintFr: "10x − 15 = 25, puis 10x = 40." },
    { id: "a10-4-ep05", promptFr: "Résous 3(x + 6) = 27. x = ?", type: "number", acceptable: ["3"], hintFr: "3x + 18 = 27, puis 3x = 9." },
    { id: "a10-4-ep06", promptFr: "Résous 6(x − 2) = 24. x = ?", type: "number", acceptable: ["6"], hintFr: "6x − 12 = 24, puis 6x = 36." },
    { id: "a10-4-ep07", promptFr: "Résous 4(2x + 3) = 36. x = ?", type: "number", acceptable: ["3"], hintFr: "8x + 12 = 36, puis 8x = 24." },
    { id: "a10-4-ep08", promptFr: "Résous 2(x + 7) = 30. x = ?", type: "number", acceptable: ["8"], hintFr: "2x + 14 = 30, puis 2x = 16." },
    { id: "a10-4-ep09", promptFr: "Résous 5(x + 2) = 5. x = ?", type: "number", acceptable: ["-1"], hintFr: "5x + 10 = 5, puis 5x = −5." },
    { id: "a10-4-ep10", promptFr: "Résous 3(4x − 5) = 21. x = ?", type: "number", acceptable: ["3"], hintFr: "12x − 15 = 21, puis 12x = 36." },
    { id: "a10-4-ep11", promptFr: "Résous 7(x + 1) = 42. x = ?", type: "number", acceptable: ["5"], hintFr: "7x + 7 = 42, puis 7x = 35." },
    { id: "a10-4-ep12", promptFr: "Résous 2(5x − 6) = 28. x = ?", type: "number", acceptable: ["4"], hintFr: "10x − 12 = 28, puis 10x = 40." },
  ],
  poolSize: 5,
};
