import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_G2_1_LESSON: MathSubmoduleLesson = {
    submoduleId: "G2-1",
    submoduleCode: "G2.1",
    theory: {
      title: {
        fr: "Périmètre du carré",
      },
      paragraphs: {
        fr: [
          "Le périmètre est la longueur totale du contour d'une figure. Pour le carré, les 4 côtés sont égaux.",
          "Formule : P = 4 × c, où c est la longueur du côté.",
          "Exemple : carré de côté 7 cm → P = 4 × 7 = 28 cm.",
          "Pour trouver le côté connaissant le périmètre : c = P ÷ 4.",
        ],
      },
    },
    exercises: [
      { id: "g2-1-e1", promptFr: "Calcule le périmètre d'un carré de côté 9 cm.", type: "number", acceptable: ["36"] },
      { id: "g2-1-e2", promptFr: "Un carré a un périmètre de 48 cm. Quel est son côté ?", type: "number", acceptable: ["12"] },
      { id: "g2-1-e3", promptFr: "Calcule le périmètre d'un carré de côté 4,5 cm.", type: "number", acceptable: ["18"] },
      { id: "g2-1-e4", promptFr: "Combien de côtés a un carré ?", type: "number", acceptable: ["4"] },
      { id: "g2-1-e5", promptFr: "Un carré de côté 6 m : P = ?", type: "number", acceptable: ["24"] },
    ],
  };
