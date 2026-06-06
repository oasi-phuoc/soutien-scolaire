import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_G6_2_LESSON: MathSubmoduleLesson = {
    submoduleId: "G6-2",
    submoduleCode: "G6.2",
    theory: {
      title: {
        fr: "Lire une échelle",
      },
      paragraphs: {
        fr: [
          "Lire une échelle consiste à retrouver la distance réelle à partir d'une mesure sur le dessin, ou inversement.",
          "Formule : distance réelle = distance dessinée × dénominateur de l'échelle.",
          "Exemple : plan échelle 1:50. Longueur sur le plan = 6 cm → longueur réelle = 6 × 50 = 300 cm = 3 m.",
          "Inversement : trouver la distance dessinée → distance dessinée = distance réelle ÷ dénominateur.",
        ],
      },
    },
    exercises: [
      { id: "g6-2-e1", promptFr: "Échelle 1:100. Dessin : 4,5 cm. Réalité : ? cm.", type: "number", acceptable: ["450"] },
      { id: "g6-2-e2", promptFr: "Échelle 1:200. Réalité : 600 cm. Dessin : ? cm.", type: "number", acceptable: ["3"] },
      { id: "g6-2-e3", promptFr: "Échelle 1:50. Dessin : 8 cm. Réalité : ? m.", type: "number", acceptable: ["4"] },
      { id: "g6-2-e4", promptFr: "Échelle 1:1000. Dessin : 3 cm. Réalité : ? m.", type: "number", acceptable: ["30"] },
      { id: "g6-2-e5", promptFr: "Échelle 1:25. Réalité : 75 cm. Dessin : ? cm.", type: "number", acceptable: ["3"] },
    ],
  };
