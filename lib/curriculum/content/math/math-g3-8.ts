import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_G3_8_LESSON: MathSubmoduleLesson = {
    submoduleId: "G3-8",
    submoduleCode: "G3.8",
    theory: {
      title: {
        fr: "Figures à trous",
      },
      paragraphs: {
        fr: [
          "Une figure à trou est une grande figure dont on a retiré une figure intérieure. On calcule l'aire en soustrayant.",
          "Formule : A = A_grande − A_trou.",
          "Exemple : cadre rectangulaire extérieur 12×8 cm, intérieur 8×4 cm → A = (12×8) − (8×4) = 96 − 32 = 64 cm².",
          "Exemple anneau : grand disque r=6 cm, trou r=3 cm → A = π×6² − π×3² = π(36−9) = 27π ≈ 84,8 cm².",
        ],
      },
    },
    exercises: [
      { id: "g3-8-e1", promptFr: "Cadre : extérieur 10×8 cm, intérieur 6×4 cm. Aire du cadre = ?", type: "number", acceptable: ["56"] },
      { id: "g3-8-e2", promptFr: "Carré 10×10 cm avec trou carré 4×4 cm. Aire restante = ?", type: "number", acceptable: ["84"] },
      { id: "g3-8-e3", promptFr: "Anneau : rayon extérieur 5 cm, rayon intérieur 3 cm (π ≈ 3,14). Aire ≈ ?", type: "number", acceptable: ["50,24", "50.24"] },
      { id: "g3-8-e4", promptFr: "Rectangle 12×7 cm avec disque de rayon 2 cm découpé (π ≈ 3,14). Aire ≈ ?", type: "number", acceptable: ["71,44", "71.44"] },
      { id: "g3-8-e5", promptFr: "Grand rectangle 20×10 cm, trou rectangle 5×4 cm. Aire = ?", type: "number", acceptable: ["180"] },
    ],
  };
