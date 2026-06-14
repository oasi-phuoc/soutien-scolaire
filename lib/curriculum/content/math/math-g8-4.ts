import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_G8_4_LESSON: MathSubmoduleLesson = {
    submoduleId: "G8-4",
    submoduleCode: "G8.4",
    theory: {
      title: {
        fr: "Calculer une cathète",
      },
      paragraphs: {
        fr: [
          "Quand on connaît l'hypoténuse c et une cathète a, on trouve l'autre cathète b : b = √(c² − a²).",
          "Méthode : on réarrange a² + b² = c² → b² = c² − a² → b = √(c² − a²).",
          "Exemple : c = 13, a = 5 → b² = 169 − 25 = 144 → b = 12.",
          "Vérification : 5² + 12² = 25 + 144 = 169 = 13² ✓.",
        ],
      },
    },
    exercises: [
      { id: "g7-4-e1", promptFr: "c = 10, a = 6. b = ?", type: "number", acceptable: ["8"] },
      { id: "g7-4-e2", promptFr: "c = 13, a = 12. b = ?", type: "number", acceptable: ["5"] },
      { id: "g7-4-e3", promptFr: "c = 5, a = 3. b = ?", type: "number", acceptable: ["4"] },
      { id: "g7-4-e4", promptFr: "c = 17, a = 8. b = ?", type: "number", acceptable: ["15"] },
      { id: "g7-4-e5", promptFr: "c = 25, a = 7. b² = 25² − 7² = ?", type: "number", acceptable: ["576"] },
    ],
  };
