import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A10_5_LESSON: MathSubmoduleLesson = {
    submoduleId: "A10-5",
    submoduleCode: "A10.5",
    theory: {
      title: {
        fr: "Équations avec fractions",
        en: "Equations with fractions",
        ar: "معادلات بالكسور",
        fa: "معادلات با کسر",
        ti: "ምዕርርያ ምስ ምምቅቅዮ",
        uk: "Рівняння з дробами",
      },
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
      { id: "a10-5-ep01", promptFr: "Résous x/2 + 3 = 7. x = ?", type: "number", acceptable: ["8"] },
      { id: "a10-5-ep02", promptFr: "Résous x/3 = 4. x = ?", type: "number", acceptable: ["12"] },
      { id: "a10-5-ep03", promptFr: "Résous x/4 + 1 = 5. x = ?", type: "number", acceptable: ["16"] },
      { id: "a10-5-ep04", promptFr: "Résous 2x/3 = 6. x = ?", type: "number", acceptable: ["9"] },
      { id: "a10-5-ep05", promptFr: "Résous x/5 + 2 = 4. x = ?", type: "number", acceptable: ["10"] },
      { id: "a10-5-ep06", promptFr: "Résous 3x/2 = 9. x = ?", type: "number", acceptable: ["6"] },
      { id: "a10-5-ep07", promptFr: "Résous x/3 + x/6 = 5. x = ?", type: "number", acceptable: ["10"] },
      { id: "a10-5-ep08", promptFr: "Résous x/4 = 3. x = ?", type: "number", acceptable: ["12"] },
      { id: "a10-5-ep09", promptFr: "Résous x/2 + x/4 = 6. x = ?", type: "number", acceptable: ["8"] },
      { id: "a10-5-ep10", promptFr: "Résous x/2 − 1 = 3. x = ?", type: "number", acceptable: ["8"] },
    ],
    poolSize: 5,
  };
