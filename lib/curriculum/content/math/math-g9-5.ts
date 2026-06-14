import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_G9_5_LESSON: MathSubmoduleLesson = {
    submoduleId: "G9-5",
    submoduleCode: "G9.5",
    theory: {
      title: {
        fr: "Pavé droit (cuboid)",
      },
      paragraphs: {
        fr: [
          "Volume du pavé droit : V = L × l × h.",
          "Exemple : pavé 6 cm × 4 cm × 3 cm → V = 6 × 4 × 3 = 72 cm³.",
          "Applications : volume d'une boîte, d'un container, d'une pièce.",
          "Trouver une dimension : h = V / (L × l).",
        ],
      },
    },
    exercises: [
      { id: "g8-5-e1", promptFr: "Volume d'un pavé 5 × 3 × 4 cm.", type: "number", acceptable: ["60"] },
      { id: "g8-5-e2", promptFr: "Volume d'un pavé 10 × 6 × 2 cm.", type: "number", acceptable: ["120"] },
      { id: "g8-5-e3", promptFr: "Pavé V = 120 cm³, L = 5, l = 4. h = ?", type: "number", acceptable: ["6"] },
      { id: "g8-5-e4", promptFr: "Volume d'une pièce 4 m × 3 m × 2,5 m (en m³).", type: "number", acceptable: ["30"] },
      { id: "g8-5-e5", promptFr: "Pavé 8 × 8 × 8 cm. C'est un cube ? (oui/non)", type: "short_text", acceptable: ["oui"] },
    ],
  };
