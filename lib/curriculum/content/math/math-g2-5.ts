import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_G2_5_LESSON: MathSubmoduleLesson = {
    submoduleId: "G2-5",
    submoduleCode: "G2.5",
    theory: {
      title: {
        fr: "Cercle et π",
      },
      paragraphs: {
        fr: [
          "La circonférence (périmètre) d'un cercle est C = 2πr = πd, où r est le rayon et d le diamètre.",
          "π (pi) est un nombre irrationnel ≈ 3,14159… On utilise souvent π ≈ 3,14 ou la touche π de la calculatrice.",
          "Exemple : cercle de rayon 5 cm → C = 2 × π × 5 = 10π ≈ 31,4 cm.",
          "Attention : ne pas confondre circonférence (périmètre du cercle) et aire du disque (A = πr²).",
        ],
      },
    },
    exercises: [
      { id: "g2-5-e1", promptFr: "Calcule la circonférence d'un cercle de rayon 10 cm (π ≈ 3,14).", type: "number", acceptable: ["62,8", "62.8"] },
      { id: "g2-5-e2", promptFr: "Calcule la circonférence d'un cercle de diamètre 6 cm (π ≈ 3,14).", type: "number", acceptable: ["18,84", "18.84"] },
      { id: "g2-5-e3", promptFr: "Un cercle a une circonférence de 31,4 cm. Quel est son rayon (π ≈ 3,14) ?", type: "number", acceptable: ["5"] },
      { id: "g2-5-e4", promptFr: "π est approximativement égal à ?", type: "short_text", acceptable: ["3,14", "3.14", "3.14159"] },
      { id: "g2-5-e5", promptFr: "Un cercle de rayon 3 cm : C = 2π × 3 ≈ ? (arrondi à l'unité, π ≈ 3,14)", type: "number", acceptable: ["19"] },
    ],
  };
