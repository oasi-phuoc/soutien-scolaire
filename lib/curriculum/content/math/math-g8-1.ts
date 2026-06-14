import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_G8_1_LESSON: MathSubmoduleLesson = {
    submoduleId: "G8-1",
    submoduleCode: "G8.1",
    theory: {
      title: {
        fr: "Triangle rectangle",
      },
      paragraphs: {
        fr: [
          "Un triangle rectangle est un triangle qui possède un angle droit (90°). Le côté opposé à l'angle droit s'appelle l'hypoténuse. Les deux autres côtés sont les cathètes (ou jambes).",
          "L'hypoténuse est toujours le côté le plus long du triangle rectangle.",
          "Exemple : triangle avec angles 90°, 30°, 60°. Le côté opposé au 90° est l'hypoténuse.",
          "Pour identifier un triangle rectangle : vérifier si un angle vaut exactement 90° ou si la relation a² + b² = c² est satisfaite.",
        ],
      },
    },
    exercises: [
      { id: "g7-1-e1", promptFr: "Dans un triangle rectangle, comment s'appelle le côté opposé à l'angle droit ?", type: "short_text", acceptable: ["hypoténuse", "hypotenuse"] },
      { id: "g7-1-e2", promptFr: "L'hypoténuse est-elle le côté le plus long ? (oui/non)", type: "short_text", acceptable: ["oui"] },
      { id: "g7-1-e3", promptFr: "Un triangle avec angles 90°, 45°, 45° est-il rectangle ? (oui/non)", type: "short_text", acceptable: ["oui"] },
      { id: "g7-1-e4", promptFr: "Combien d'angles droits a un triangle rectangle ?", type: "number", acceptable: ["1"] },
      { id: "g7-1-e5", promptFr: "Les deux côtés non-hypoténuse s'appellent ?", type: "short_text", acceptable: ["cathètes", "cathetes", "jambes"] },
    ],
  };
