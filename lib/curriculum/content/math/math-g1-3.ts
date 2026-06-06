import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_G1_3_LESSON: MathSubmoduleLesson = {
    submoduleId: "G1-3",
    submoduleCode: "G1.3",
    theory: {
      title: {
        fr: "Cercle : rayon, diamètre, corde",
      },
      paragraphs: {
        fr: [
          "Un cercle est l'ensemble des points équidistants d'un point fixe appelé centre. La distance commune est le rayon (r).",
          "Vocabulaire : rayon = distance du centre à tout point du cercle ; diamètre = 2r (plus grande corde passant par le centre) ; corde = segment reliant deux points du cercle.",
          "Périmètre du cercle (circonférence) : C = 2πr = πd. Aire du disque : A = πr².",
          "π ≈ 3,14159… C'est un nombre irrationnel. On utilise souvent π ≈ 3,14 pour les calculs.",
        ],
      },
    },
    exercises: [
      { id: "g1-3-e1", promptFr: "Un cercle a un rayon de 5 cm. Quel est son diamètre ?", type: "number", acceptable: ["10"] },
      { id: "g1-3-e2", promptFr: "Un cercle a un diamètre de 12 cm. Quel est son rayon ?", type: "number", acceptable: ["6"] },
      { id: "g1-3-e3", promptFr: "Calcule la circonférence d'un cercle de rayon 7 cm (π ≈ 3,14, arrondi à l'unité).", type: "number", acceptable: ["44"] },
      { id: "g1-3-e4", promptFr: "Qu'est-ce qu'une corde ? (segment reliant deux points/segment partant du centre)", type: "short_text", acceptable: ["segment reliant deux points", "segment entre deux points"] },
      { id: "g1-3-e5", promptFr: "Le diamètre est-il la plus grande corde d'un cercle ? (oui/non)", type: "short_text", acceptable: ["oui"] },
    ],
  };
