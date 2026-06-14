import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_G9_10_LESSON: MathSubmoduleLesson = {
    submoduleId: "G9-10",
    submoduleCode: "G9.10",
    theory: {
      title: {
        fr: "Conversions de volumes",
      },
      paragraphs: {
        fr: [
          "Tableau de conversion : 1 m³ = 1 000 dm³ = 1 000 000 cm³ = 1 000 000 000 mm³.",
          "Relation volume/capacité : 1 dm³ = 1 L ; 1 cm³ = 1 mL ; 1 m³ = 1 000 L.",
          "Pour convertir vers une unité plus petite : multiplier par 1 000 à chaque pas (m³ → dm³ → cm³ → mm³).",
          "Pour convertir vers une unité plus grande : diviser par 1 000 à chaque pas.",
        ],
      },
    },
    exercises: [
      { id: "g8-10-e1", promptFr: "3 m³ = combien de dm³ ?", type: "number", acceptable: ["3000"] },
      { id: "g8-10-e2", promptFr: "2000 cm³ = combien de dm³ ?", type: "number", acceptable: ["2"] },
      { id: "g8-10-e3", promptFr: "1 m³ = combien de litres ?", type: "number", acceptable: ["1000"] },
      { id: "g8-10-e4", promptFr: "500 mL = combien de cm³ ?", type: "number", acceptable: ["500"] },
      { id: "g8-10-e5", promptFr: "2,5 L = combien de cm³ ?", type: "number", acceptable: ["2500"] },
    ],
  };
