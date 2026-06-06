import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_G3_2_LESSON: MathSubmoduleLesson = {
    submoduleId: "G3-2",
    submoduleCode: "G3.2",
    theory: {
      title: {
        fr: "Aire du rectangle",
      },
      paragraphs: {
        fr: [
          "Formule : A = L × l, où L est la longueur et l la largeur.",
          "Exemple : rectangle 8 cm × 5 cm → A = 8 × 5 = 40 cm².",
          "Si on connaît l'aire et la longueur : l = A ÷ L.",
          "Unités : attention aux conversions. 1 m² = 10 000 cm² ; 1 km² = 1 000 000 m².",
        ],
      },
    },
    exercises: [
      { id: "g3-2-e1", promptFr: "Aire d'un rectangle 9 cm × 4 cm.", type: "number", acceptable: ["36"] },
      { id: "g3-2-e2", promptFr: "Rectangle d'aire 60 cm² et longueur 12 cm. Largeur = ?", type: "number", acceptable: ["5"] },
      { id: "g3-2-e3", promptFr: "Aire d'un rectangle 7 m × 3 m.", type: "number", acceptable: ["21"] },
      { id: "g3-2-e4", promptFr: "1 m² = combien de cm² ?", type: "number", acceptable: ["10000"] },
      { id: "g3-2-e5", promptFr: "Rectangle 15 cm × 6 cm. Aire = ?", type: "number", acceptable: ["90"] },
    ],
  };
