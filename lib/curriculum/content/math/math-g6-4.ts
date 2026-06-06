import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_G6_4_LESSON: MathSubmoduleLesson = {
    submoduleId: "G6-4",
    submoduleCode: "G6.4",
    theory: {
      title: {
        fr: "Représentation à l'échelle",
      },
      paragraphs: {
        fr: [
          "Pour créer un dessin à l'échelle : (1) choisir une échelle adaptée ; (2) diviser chaque mesure réelle par le dénominateur de l'échelle pour obtenir la mesure à dessiner.",
          "Formule : distance dessinée = distance réelle ÷ dénominateur.",
          "Exemple : dessiner une pièce de 6 m × 4 m à l'échelle 1:50. → 6 m = 600 cm → 600 ÷ 50 = 12 cm ; 4 m = 400 cm → 400 ÷ 50 = 8 cm. Dessiner un rectangle 12 cm × 8 cm.",
          "Vérification : remultiplier les mesures du dessin par le dénominateur doit redonner les mesures réelles.",
        ],
      },
    },
    exercises: [
      { id: "g6-4-e1", promptFr: "Échelle 1:100. Pièce réelle 8 m de long. Dessin : ? cm.", type: "number", acceptable: ["8"] },
      { id: "g6-4-e2", promptFr: "Échelle 1:50. Mur réel 3 m. Dessin : ? cm.", type: "number", acceptable: ["6"] },
      { id: "g6-4-e3", promptFr: "Échelle 1:200. Jardin réel 20 m. Dessin : ? cm.", type: "number", acceptable: ["10"] },
      { id: "g6-4-e4", promptFr: "Échelle 1:25. Objet réel 1 m = 100 cm. Dessin : ? cm.", type: "number", acceptable: ["4"] },
      { id: "g6-4-e5", promptFr: "Échelle 1:500. Route réelle 5 km = 500000 cm. Dessin : ? cm.", type: "number", acceptable: ["1000"] },
    ],
  };
