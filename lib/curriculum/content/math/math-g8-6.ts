import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_G8_6_LESSON: MathSubmoduleLesson = {
    submoduleId: "G8-6",
    submoduleCode: "G8.6",
    theory: {
      title: {
        fr: "Applications",
      },
      paragraphs: {
        fr: [
          "Le théorème de Pythagore a de nombreuses applications pratiques : calcul de distances, hauteurs, diagonales.",
          "Exemple 1 — diagonale d'un rectangle : rectangle 6 × 8 cm. Diagonale = √(6² + 8²) = √100 = 10 cm.",
          "Exemple 2 — hauteur d'un triangle isocèle : base 10 cm, côtés égaux 13 cm. La hauteur coupe la base en 5 cm. h = √(13² − 5²) = √(169 − 25) = √144 = 12 cm.",
          "Exemple 3 — distance GPS : point A(0,0), B(3,4). Distance = √(3² + 4²) = 5 unités.",
        ],
      },
    },
    exercises: [
      { id: "g7-6-e1", promptFr: "Diagonale d'un carré de côté 1 cm. d = √? cm (donne le nombre sous la racine).", type: "number", acceptable: ["2"] },
      { id: "g7-6-e2", promptFr: "Diagonale d'un rectangle 5×12 cm.", type: "number", acceptable: ["13"] },
      { id: "g7-6-e3", promptFr: "Une échelle de 10 m appuyée contre un mur à 6 m du pied. Hauteur atteinte = ? m.", type: "number", acceptable: ["8"] },
      { id: "g7-6-e4", promptFr: "Distance entre A(0;0) et B(6;8).", type: "number", acceptable: ["10"] },
      { id: "g7-6-e5", promptFr: "Triangle isocèle : base 16 cm, côtés 17 cm. Hauteur = ?", type: "number", acceptable: ["15"] },
    ],
  };
