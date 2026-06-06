import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_G3_1_LESSON: MathSubmoduleLesson = {
    submoduleId: "G3-1",
    submoduleCode: "G3.1",
    theory: {
      title: {
        fr: "Aire du carré",
      },
      paragraphs: {
        fr: [
          "L'aire mesure la surface intérieure d'une figure. Elle s'exprime en unités carrées (cm², m², km²…).",
          "Formule : A = c², où c est la longueur du côté.",
          "Exemple : carré de côté 6 cm → A = 6² = 36 cm².",
          "Pour trouver le côté connaissant l'aire : c = √A.",
        ],
      },
    },
    exercises: [
      { id: "g3-1-e1", promptFr: "Calcule l'aire d'un carré de côté 5 cm.", type: "number", acceptable: ["25"] },
      { id: "g3-1-e2", promptFr: "Calcule l'aire d'un carré de côté 12 cm.", type: "number", acceptable: ["144"] },
      { id: "g3-1-e3", promptFr: "Un carré a une aire de 49 cm². Quel est son côté ?", type: "number", acceptable: ["7"] },
      { id: "g3-1-e4", promptFr: "Carré de côté 3,5 cm. Aire = ?", type: "number", acceptable: ["12,25", "12.25"] },
      { id: "g3-1-e5", promptFr: "Un carré a une aire de 100 m². Quel est son côté ?", type: "number", acceptable: ["10"] },
    ],
  };
