import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_G8_9_LESSON: MathSubmoduleLesson = {
    submoduleId: "G8-9",
    submoduleCode: "G8.9",
    theory: {
      title: {
        fr: "Cône et sphère",
      },
      paragraphs: {
        fr: [
          "Volume du cône : V = (1/3) × πr²h. C'est 1/3 du cylindre de même base et hauteur.",
          "Exemple : cône r=3 cm, h=7 cm → V = (1/3) × π × 9 × 7 = 21π ≈ 65,9 cm³.",
          "Volume de la sphère : V = (4/3) × πr³.",
          "Exemple : sphère r=3 cm → V = (4/3) × π × 27 = 36π ≈ 113,1 cm³.",
        ],
      },
    },
    exercises: [
      { id: "g8-9-e1", promptFr: "Cône r=3 cm, h=4 cm. V = (1/3)π×9×4 ≈ ? (π≈3,14)", type: "number", acceptable: ["37,68", "37.68"] },
      { id: "g8-9-e2", promptFr: "Sphère r=1 cm. V = (4/3)π ≈ ? (π≈3,14)", type: "number", acceptable: ["4,19", "4.19"] },
      { id: "g8-9-e3", promptFr: "Si un cylindre a V=90π cm³, le cône de même base et hauteur a V=?π cm³.", type: "number", acceptable: ["30"] },
      { id: "g8-9-e4", promptFr: "Sphère r=2 cm. V = (4/3)π×8 ≈ ? (π≈3,14)", type: "number", acceptable: ["33,49", "33.49"] },
      { id: "g8-9-e5", promptFr: "Cône r=6 cm, h=7 cm. V ≈ ? (π≈3,14)", type: "number", acceptable: ["263,76", "263.76"] },
    ],
  };
