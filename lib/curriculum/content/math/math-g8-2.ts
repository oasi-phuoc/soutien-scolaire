import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_G8_2_LESSON: MathSubmoduleLesson = {
    submoduleId: "G8-2",
    submoduleCode: "G8.2",
    theory: {
      title: {
        fr: "Énoncé du théorème : a² + b² = c²",
      },
      paragraphs: {
        fr: [
          "Le théorème de Pythagore : dans un triangle rectangle, le carré de l'hypoténuse est égal à la somme des carrés des deux cathètes.",
          "Formule : a² + b² = c², où c est l'hypoténuse et a, b sont les cathètes.",
          "Exemple : triangle avec cathètes 3 cm et 4 cm → c² = 3² + 4² = 9 + 16 = 25 → c = √25 = 5 cm.",
          "Le triplet (3, 4, 5) est le plus connu des triplets pythagoriciens. Autres : (5, 12, 13) ; (8, 15, 17).",
        ],
      },
    },
    exercises: [
      { id: "g7-2-e1", promptFr: "Cathètes 6 et 8 cm. Hypoténuse = ?", type: "number", acceptable: ["10"] },
      { id: "g7-2-e2", promptFr: "Cathètes 5 et 12 cm. Hypoténuse = ?", type: "number", acceptable: ["13"] },
      { id: "g7-2-e3", promptFr: "Cathètes 3 et 4 cm. c² = 3² + 4² = ?", type: "number", acceptable: ["25"] },
      { id: "g7-2-e4", promptFr: "Est-ce un triplet pythagoricien : (8, 15, 17) ? (oui/non)", type: "short_text", acceptable: ["oui"] },
      { id: "g7-2-e5", promptFr: "Cathètes 1 et 1 cm. Hypoténuse = √? cm.", type: "number", acceptable: ["2"] },
    ],
  };
