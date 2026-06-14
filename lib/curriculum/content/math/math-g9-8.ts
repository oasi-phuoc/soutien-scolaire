import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_G9_8_LESSON: MathSubmoduleLesson = {
    submoduleId: "G9-8",
    submoduleCode: "G9.8",
    theory: {
      title: {
        fr: "Volume de la pyramide",
      },
      paragraphs: {
        fr: [
          "Volume de la pyramide : V = (1/3) × Aire de la base × hauteur = B × h / 3.",
          "La hauteur est la distance perpendiculaire du sommet à la base.",
          "Exemple : pyramide à base carrée de côté 6 cm et hauteur 9 cm → B = 36 cm². V = 36 × 9 / 3 = 108 cm³.",
          "Le volume d'une pyramide est exactement 1/3 du volume du prisme de même base et hauteur.",
        ],
      },
    },
    exercises: [
      { id: "g8-8-e1", promptFr: "Pyramide à base carrée 4 cm, hauteur 6 cm. V = ?", type: "number", acceptable: ["32"] },
      { id: "g8-8-e2", promptFr: "Pyramide à base rectangulaire 6×4 cm, hauteur 9 cm. V = ?", type: "number", acceptable: ["72"] },
      { id: "g8-8-e3", promptFr: "Pyramide B = 30 cm², h = 6 cm. V = ?", type: "number", acceptable: ["60"] },
      { id: "g8-8-e4", promptFr: "Pyramide triangulaire (tétraèdre) : B = 12 cm², h = 5 cm. V = ?", type: "number", acceptable: ["20"] },
      { id: "g8-8-e5", promptFr: "Si un prisme a V = 90 cm³, la pyramide de même base et hauteur a V = ?", type: "number", acceptable: ["30"] },
    ],
  };
