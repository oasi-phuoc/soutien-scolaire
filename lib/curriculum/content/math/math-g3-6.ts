import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_G3_6_LESSON: MathSubmoduleLesson = {
    submoduleId: "G3-6",
    submoduleCode: "G3.6",
    theory: {
      title: {
        fr: "Aire du disque",
      },
      paragraphs: {
        fr: [
          "Le disque est la région intérieure délimitée par le cercle. Formule : A = πr².",
          "Exemple : disque de rayon 5 cm → A = π × 5² = 25π ≈ 78,5 cm².",
          "Si on connaît le diamètre : r = d/2, donc A = π(d/2)² = πd²/4.",
          "Attention aux unités : si r est en cm, A est en cm².",
        ],
      },
    },
    exercises: [
      { id: "g3-6-e1", promptFr: "Aire d'un disque de rayon 4 cm (π ≈ 3,14).", type: "number", acceptable: ["50,24", "50.24"] },
      { id: "g3-6-e2", promptFr: "Aire d'un disque de rayon 10 cm (π ≈ 3,14).", type: "number", acceptable: ["314"] },
      { id: "g3-6-e3", promptFr: "Aire d'un disque de diamètre 8 cm (π ≈ 3,14).", type: "number", acceptable: ["50,24", "50.24"] },
      { id: "g3-6-e4", promptFr: "Un disque a une aire de 78,5 cm² (π ≈ 3,14). Quel est son rayon ?", type: "number", acceptable: ["5"] },
      { id: "g3-6-e5", promptFr: "Aire d'un disque de rayon 3 cm (π ≈ 3,14).", type: "number", acceptable: ["28,26", "28.26"] },
    ],
  };
