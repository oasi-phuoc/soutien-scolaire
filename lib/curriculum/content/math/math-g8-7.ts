import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_G8_7_LESSON: MathSubmoduleLesson = {
    submoduleId: "G8-7",
    submoduleCode: "G8.7",
    theory: {
      title: {
        fr: "Volume du cylindre",
      },
      paragraphs: {
        fr: [
          "Un cylindre est un prisme à base circulaire. Volume : V = πr²h.",
          "Exemple : cylindre de rayon 3 cm et hauteur 10 cm → V = π × 9 × 10 = 90π ≈ 282,6 cm³.",
          "Application : boîtes de conserve, réservoirs, tuyaux.",
          "Trouver la hauteur : h = V / (πr²).",
        ],
      },
    },
    exercises: [
      { id: "g8-7-e1", promptFr: "Cylindre r=2 cm, h=5 cm. V = π×4×5 ≈ ? (π≈3,14)", type: "number", acceptable: ["62,8", "62.8"] },
      { id: "g8-7-e2", promptFr: "Cylindre r=5 cm, h=10 cm. V ≈ ? (π≈3,14)", type: "number", acceptable: ["785"] },
      { id: "g8-7-e3", promptFr: "Cylindre r=3 cm, V = 141,3 cm³ (π≈3,14). h = ?", type: "number", acceptable: ["5"] },
      { id: "g8-7-e4", promptFr: "Cylindre r=1 cm, h=1 cm. V = π ≈ ? (π≈3,14)", type: "number", acceptable: ["3,14", "3.14"] },
      { id: "g8-7-e5", promptFr: "Un cylindre de rayon 4 cm et hauteur 7 cm. V ≈ ? (π≈3,14)", type: "number", acceptable: ["351,68", "351.68"] },
    ],
  };
