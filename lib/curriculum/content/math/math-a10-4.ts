import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A10_4_LESSON: MathSubmoduleLesson = {
    submoduleId: "A10-4",
    submoduleCode: "A10.4",
    theory: {
      title: {
        fr: "Équations avec parenthèses",
        en: "Equations with parentheses",
        ar: "معادلات بالأقواس",
        fa: "معادلات با پرانتز",
        ti: "ምዕርርያ ምስ ቅርሕ",
        uk: "Рівняння з дужками",
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
      { id: "a10-4-ep01", promptFr: "Résous 2(x + 3) = 14. x = ?", type: "number", acceptable: ["4"] },
      { id: "a10-4-ep02", promptFr: "Résous 3(x − 2) = 9. x = ?", type: "number", acceptable: ["5"] },
      { id: "a10-4-ep03", promptFr: "Résous 4(2x + 1) = 20. x = ?", type: "number", acceptable: ["2"] },
      { id: "a10-4-ep04", promptFr: "Résous 3(2x − 1) = 21. x = ?", type: "number", acceptable: ["4"] },
      { id: "a10-4-ep05", promptFr: "Résous 2(x + 5) = 18. x = ?", type: "number", acceptable: ["4"] },
      { id: "a10-4-ep06", promptFr: "Résous 5(x − 3) = 10. x = ?", type: "number", acceptable: ["5"] },
      { id: "a10-4-ep07", promptFr: "Résous 2(3x + 2) = 16. x = ?", type: "number", acceptable: ["2"] },
      { id: "a10-4-ep08", promptFr: "Résous 4(x + 1) = 28. x = ?", type: "number", acceptable: ["6"] },
      { id: "a10-4-ep09", promptFr: "Résous 3(x + 4) = 3. x = ?", type: "number", acceptable: ["-3"] },
      { id: "a10-4-ep10", promptFr: "Résous 6(2x − 3) = 30. x = ?", type: "number", acceptable: ["4"] },
    ],
    poolSize: 5,
  };
