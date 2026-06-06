import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_G1_5_LESSON: MathSubmoduleLesson = {
    submoduleId: "G1-5",
    submoduleCode: "G1.5",
    theory: {
      title: {
        fr: "Angles",
      },
      paragraphs: {
        fr: [
          "Un angle est formé par deux demi-droites de même origine (le sommet). On le mesure en degrés (°). Plein tour = 360°.",
          "Types d'angles : nul (0°) ; aigu (0° < α < 90°) ; droit (90°) ; obtus (90° < α < 180°) ; plat (180°) ; rentrant (180° < α < 360°).",
          "Angles complémentaires : deux angles dont la somme est 90°. Angles supplémentaires : deux angles dont la somme est 180°.",
          "Angles opposés par le sommet : quand deux droites se croisent, les angles opposés par le sommet sont égaux.",
        ],
      },
    },
    exercises: [
      { id: "g1-5-e1", promptFr: "Un angle de 75° est-il aigu ou obtus ?", type: "short_text", acceptable: ["aigu"] },
      { id: "g1-5-e2", promptFr: "Deux angles complémentaires : l'un est 35°. Quel est l'autre ?", type: "number", acceptable: ["55"] },
      { id: "g1-5-e3", promptFr: "Deux angles supplémentaires : l'un est 110°. Quel est l'autre ?", type: "number", acceptable: ["70"] },
      { id: "g1-5-e4", promptFr: "Un angle droit mesure combien de degrés ?", type: "number", acceptable: ["90"] },
      { id: "g1-5-e5", promptFr: "Deux droites se coupent. Un angle est 40°. L'angle opposé par le sommet mesure ?", type: "number", acceptable: ["40"] },
    ],
  };
