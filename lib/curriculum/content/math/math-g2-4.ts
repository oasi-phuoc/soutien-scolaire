import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_G2_4_LESSON: MathSubmoduleLesson = {
    submoduleId: "G2-4",
    submoduleCode: "G2.4",
    theory: {
      title: {
        fr: "Périmètre des polygones réguliers",
      },
      paragraphs: {
        fr: [
          "Un polygone régulier a tous ses côtés de même longueur. Son périmètre est : P = n × c, où n est le nombre de côtés et c la longueur d'un côté.",
          "Exemples : pentagone régulier de côté 6 cm → P = 5 × 6 = 30 cm ; hexagone régulier de côté 4 cm → P = 6 × 4 = 24 cm.",
          "Pour tout polygone non régulier : P = somme de tous les côtés.",
          "Application : un terrain hexagonal régulier de côté 10 m a un périmètre de 60 m.",
        ],
      },
    },
    exercises: [
      { id: "g2-4-e1", promptFr: "Périmètre d'un hexagone régulier de côté 5 cm.", type: "number", acceptable: ["30"] },
      { id: "g2-4-e2", promptFr: "Périmètre d'un octogone régulier de côté 3 cm.", type: "number", acceptable: ["24"] },
      { id: "g2-4-e3", promptFr: "Un polygone régulier a un périmètre de 40 cm et des côtés de 8 cm. Combien de côtés ?", type: "number", acceptable: ["5"] },
      { id: "g2-4-e4", promptFr: "Périmètre d'un pentagone régulier de côté 7 cm.", type: "number", acceptable: ["35"] },
      { id: "g2-4-e5", promptFr: "Périmètre d'un triangle équilatéral de côté 9 cm.", type: "number", acceptable: ["27"] },
    ],
  };
