import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_G7_5_LESSON: MathSubmoduleLesson = {
    submoduleId: "G7-5",
    submoduleCode: "G7.5",
    theory: {
      title: {
        fr: "Réciproque du théorème",
      },
      paragraphs: {
        fr: [
          "Réciproque de Pythagore : si dans un triangle ABC on a a² + b² = c² (où c est le plus grand côté), alors le triangle est rectangle (angle droit en face de c).",
          "Utilisation : pour vérifier si un triangle est rectangle sans mesurer les angles.",
          "Exemple : triangle de côtés 6, 8, 10. 6² + 8² = 36 + 64 = 100 = 10². Donc rectangle !",
          "Contre-exemple : côtés 5, 6, 8. 5² + 6² = 61 ≠ 64 = 8². Pas rectangle.",
        ],
      },
    },
    exercises: [
      { id: "g7-5-e1", promptFr: "Triangle de côtés 3, 4, 5. Est-il rectangle ? (oui/non)", type: "short_text", acceptable: ["oui"] },
      { id: "g7-5-e2", promptFr: "Triangle de côtés 5, 6, 7. Est-il rectangle ? (oui/non)", type: "short_text", acceptable: ["non"] },
      { id: "g7-5-e3", promptFr: "Triangle de côtés 9, 12, 15. Est-il rectangle ? (oui/non)", type: "short_text", acceptable: ["oui"] },
      { id: "g7-5-e4", promptFr: "Pour prouver qu'un triangle est rectangle, on vérifie a² + b² = ? (donne le côté)", type: "short_text", acceptable: ["c²", "hypoténuse au carré"] },
      { id: "g7-5-e5", promptFr: "Triangle côtés 7, 24, 25. 7² + 24² = 49 + 576 = ? Est-ce = 25² = 625 ?", type: "number", acceptable: ["625"] },
    ],
  };
