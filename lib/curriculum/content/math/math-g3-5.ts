import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_G3_5_LESSON: MathSubmoduleLesson = {
    submoduleId: "G3-5",
    submoduleCode: "G3.5",
    theory: {
      title: {
        fr: "Aire du trapèze",
      },
      paragraphs: {
        fr: [
          "Le trapèze a deux bases parallèles (grande base B et petite base b) et une hauteur h.",
          "Formule : A = (B + b) × h ÷ 2.",
          "Exemple : trapèze avec B = 10 cm, b = 6 cm, h = 4 cm → A = (10 + 6) × 4 ÷ 2 = 32 cm².",
          "Intuition : la formule fait la moyenne des deux bases, multipliée par la hauteur (comme un rectangle de base moyenne).",
        ],
      },
    },
    exercises: [
      { id: "g3-5-e1", promptFr: "Aire d'un trapèze : B = 8, b = 4, h = 5 cm.", type: "number", acceptable: ["30"] },
      { id: "g3-5-e2", promptFr: "Aire d'un trapèze : B = 12, b = 6, h = 4 cm.", type: "number", acceptable: ["36"] },
      { id: "g3-5-e3", promptFr: "Trapèze d'aire 40 cm², B = 10, b = 6. h = ?", type: "number", acceptable: ["5"] },
      { id: "g3-5-e4", promptFr: "Aire d'un trapèze : B = 9, b = 3, h = 6 cm.", type: "number", acceptable: ["36"] },
      { id: "g3-5-e5", promptFr: "Si b = B (deux bases égales), quelle figure est-ce ?", type: "short_text", acceptable: ["parallélogramme", "rectangle", "parallelogramme"] },
    ],
  };
