import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_G8_4_LESSON: MathSubmoduleLesson = {
    submoduleId: "G8-4",
    submoduleCode: "G8.4",
    theory: {
      title: {
        fr: "Volume du cube",
      },
      paragraphs: {
        fr: [
          "Le volume mesure l'espace occupé par un solide. Il s'exprime en unités cubiques (cm³, m³, L…).",
          "Volume du cube : V = c³ (côté au cube).",
          "Exemple : cube de côté 4 cm → V = 4³ = 64 cm³.",
          "Conversions : 1 L = 1 dm³ = 1 000 cm³ ; 1 m³ = 1 000 L = 1 000 000 cm³.",
        ],
      },
    },
    exercises: [
      { id: "g8-4-e1", promptFr: "Volume d'un cube de côté 3 cm.", type: "number", acceptable: ["27"] },
      { id: "g8-4-e2", promptFr: "Volume d'un cube de côté 5 cm.", type: "number", acceptable: ["125"] },
      { id: "g8-4-e3", promptFr: "Un cube de volume 8 cm³. Quel est son côté ?", type: "number", acceptable: ["2"] },
      { id: "g8-4-e4", promptFr: "1 dm³ = combien de cm³ ?", type: "number", acceptable: ["1000"] },
      { id: "g8-4-e5", promptFr: "Volume d'un cube de côté 10 cm en litres.", type: "number", acceptable: ["1"] },
    ],
  };
