import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_G2_2_LESSON: MathSubmoduleLesson = {
    submoduleId: "G2-2",
    submoduleCode: "G2.2",
    theory: {
      title: {
        fr: "Périmètre du rectangle",
      },
      paragraphs: {
        fr: [
          "Un rectangle a deux longueurs (L) et deux largeurs (l).",
          "Formule : P = 2L + 2l = 2(L + l).",
          "Exemple : rectangle 8 cm × 5 cm → P = 2(8 + 5) = 2 × 13 = 26 cm.",
          "Si on connaît le périmètre et la longueur : l = (P ÷ 2) − L.",
        ],
      },
    },
    exercises: [
      { id: "g2-2-e1", promptFr: "Calcule le périmètre d'un rectangle 10 cm × 4 cm.", type: "number", acceptable: ["28"] },
      { id: "g2-2-e2", promptFr: "Rectangle de périmètre 30 cm et longueur 10 cm. Largeur = ?", type: "number", acceptable: ["5"] },
      { id: "g2-2-e3", promptFr: "Calcule le périmètre d'un rectangle 7 m × 3 m.", type: "number", acceptable: ["20"] },
      { id: "g2-2-e4", promptFr: "Un rectangle 6 cm × 6 cm est-il un carré ? (oui/non)", type: "short_text", acceptable: ["oui"] },
      { id: "g2-2-e5", promptFr: "Rectangle 12 cm × 5 cm. Calcule P.", type: "number", acceptable: ["34"] },
    ],
  };
