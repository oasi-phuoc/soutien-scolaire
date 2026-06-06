import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_G1_1_LESSON: MathSubmoduleLesson = {
    submoduleId: "G1-1",
    submoduleCode: "G1.1",
    theory: {
      title: {
        fr: "Polygones",
      },
      paragraphs: {
        fr: [
          "Un polygone est une figure plane fermée formée de segments appelés côtés. Les points de rencontre des côtés sont les sommets.",
          "Polygones selon le nombre de côtés : triangle (3), quadrilatère (4), pentagone (5), hexagone (6), heptagone (7), octogone (8).",
          "Un polygone est régulier si tous ses côtés sont égaux et tous ses angles sont égaux.",
          "Somme des angles intérieurs : triangle = 180°, quadrilatère = 360°, pentagone = 540°. Formule générale : (n − 2) × 180°.",
        ],
      },
    },
    exercises: [
      { id: "g1-1-e1", promptFr: "Comment s'appelle un polygone à 5 côtés ?", type: "short_text", acceptable: ["pentagone"] },
      { id: "g1-1-e2", promptFr: "Quelle est la somme des angles d'un triangle ?", type: "number", acceptable: ["180"] },
      { id: "g1-1-e3", promptFr: "Un hexagone a combien de côtés ?", type: "number", acceptable: ["6"] },
      { id: "g1-1-e4", promptFr: "Quelle est la somme des angles d'un quadrilatère ?", type: "number", acceptable: ["360"] },
      { id: "g1-1-e5", promptFr: "Calcule la somme des angles d'un pentagone.", type: "number", acceptable: ["540"] },
    ],
  };
