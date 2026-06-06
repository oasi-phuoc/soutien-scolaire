import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_G6_3_LESSON: MathSubmoduleLesson = {
    submoduleId: "G6-3",
    submoduleCode: "G6.3",
    theory: {
      title: {
        fr: "Distance réelle",
      },
      paragraphs: {
        fr: [
          "Pour trouver une distance réelle à partir d'une carte ou d'un plan : mesurer la distance sur le dessin (en cm) puis multiplier par le dénominateur de l'échelle.",
          "Attention aux conversions : si l'échelle est 1:50 000, 1 cm sur la carte = 50 000 cm = 500 m = 0,5 km.",
          "Tableau de conversions : 1 km = 1 000 m = 100 000 cm. 1 m = 100 cm. 1 cm = 10 mm.",
          "Exemple : sur une carte 1:25 000, deux villes séparées de 8 cm → distance réelle = 8 × 25 000 = 200 000 cm = 2 km.",
        ],
      },
    },
    exercises: [
      { id: "g6-3-e1", promptFr: "Carte 1:50000. Distance sur carte : 3 cm. Distance réelle en km ?", type: "number", acceptable: ["1,5", "1.5"] },
      { id: "g6-3-e2", promptFr: "Carte 1:25000. Distance sur carte : 4 cm. Distance réelle en m ?", type: "number", acceptable: ["1000"] },
      { id: "g6-3-e3", promptFr: "Plan 1:200. Longueur dessinée : 7 cm. Longueur réelle en m ?", type: "number", acceptable: ["14"] },
      { id: "g6-3-e4", promptFr: "Carte 1:100000. 2 cm sur la carte. Réalité en km ?", type: "number", acceptable: ["2"] },
      { id: "g6-3-e5", promptFr: "1 km = combien de cm ?", type: "number", acceptable: ["100000"] },
    ],
  };
