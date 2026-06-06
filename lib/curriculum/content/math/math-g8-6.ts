import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_G8_6_LESSON: MathSubmoduleLesson = {
    submoduleId: "G8-6",
    submoduleCode: "G8.6",
    theory: {
      title: {
        fr: "Volume du prisme",
      },
      paragraphs: {
        fr: [
          "Volume d'un prisme : V = Aire de la base × hauteur = B × h.",
          "La base peut être n'importe quel polygone. La hauteur est la distance perpendiculaire entre les deux bases.",
          "Exemple — prisme triangulaire : base = triangle de base 6 cm et hauteur 4 cm → B = (6×4)/2 = 12 cm². Hauteur du prisme = 10 cm. V = 12 × 10 = 120 cm³.",
          "Le pavé droit est un prisme rectangulaire : B = L × l, donc V = L × l × h.",
        ],
      },
    },
    exercises: [
      { id: "g8-6-e1", promptFr: "Prisme à base triangulaire (B = 15 cm²), hauteur 8 cm. V = ?", type: "number", acceptable: ["120"] },
      { id: "g8-6-e2", promptFr: "Prisme à base carrée (côté 4 cm), hauteur 6 cm. V = ?", type: "number", acceptable: ["96"] },
      { id: "g8-6-e3", promptFr: "Prisme : B = 20 cm², V = 100 cm³. h = ?", type: "number", acceptable: ["5"] },
      { id: "g8-6-e4", promptFr: "Prisme triangulaire : triangle base 8, hauteur 6 cm ; prisme h = 10 cm. V = ?", type: "number", acceptable: ["240"] },
      { id: "g8-6-e5", promptFr: "Prisme à base hexagonale (B = 24 cm²), hauteur 5 cm. V = ?", type: "number", acceptable: ["120"] },
    ],
  };
