import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_G7_3_LESSON: MathSubmoduleLesson = {
    submoduleId: "G7-3",
    submoduleCode: "G7.3",
    theory: {
      title: {
        fr: "Calculer l'hypoténuse",
      },
      paragraphs: {
        fr: [
          "Quand on connaît les deux cathètes a et b, on trouve l'hypoténuse c : c = √(a² + b²).",
          "Méthode : (1) calculer a² et b² ; (2) les additionner ; (3) prendre la racine carrée.",
          "Exemple : a = 5, b = 12 → c² = 25 + 144 = 169 → c = √169 = 13.",
          "Si le résultat n'est pas un carré parfait, utiliser la calculatrice ou donner une valeur approchée.",
        ],
      },
    },
    exercises: [
      { id: "g7-3-e1", promptFr: "a = 3, b = 4. c = ?", type: "number", acceptable: ["5"] },
      { id: "g7-3-e2", promptFr: "a = 6, b = 8. c = ?", type: "number", acceptable: ["10"] },
      { id: "g7-3-e3", promptFr: "a = 9, b = 12. c = ?", type: "number", acceptable: ["15"] },
      { id: "g7-3-e4", promptFr: "a = 1, b = 1. c = √? (donne le nombre sous la racine)", type: "number", acceptable: ["2"] },
      { id: "g7-3-e5", promptFr: "a = 8, b = 15. c = ?", type: "number", acceptable: ["17"] },
    ],
  };
