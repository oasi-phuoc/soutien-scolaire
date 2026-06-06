import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_G2_3_LESSON: MathSubmoduleLesson = {
    submoduleId: "G2-3",
    submoduleCode: "G2.3",
    theory: {
      title: {
        fr: "Périmètre du triangle",
      },
      paragraphs: {
        fr: [
          "Le périmètre d'un triangle est la somme de ses trois côtés : P = a + b + c.",
          "Triangle équilatéral (3 côtés égaux) : P = 3a. Triangle isocèle (2 côtés égaux) : P = 2a + b.",
          "Exemple : triangle de côtés 5, 7, 9 cm → P = 5 + 7 + 9 = 21 cm.",
          "Inégalité triangulaire : la somme de deux côtés quelconques doit être supérieure au troisième côté.",
        ],
      },
    },
    exercises: [
      { id: "g2-3-e1", promptFr: "Calcule P : triangle de côtés 3, 4, 5 cm.", type: "number", acceptable: ["12"] },
      { id: "g2-3-e2", promptFr: "Triangle équilatéral de côté 8 cm. P = ?", type: "number", acceptable: ["24"] },
      { id: "g2-3-e3", promptFr: "Triangle isocèle : deux côtés = 6 cm, base = 4 cm. P = ?", type: "number", acceptable: ["16"] },
      { id: "g2-3-e4", promptFr: "P d'un triangle = 30 cm. Deux côtés sont 8 et 11 cm. Troisième côté = ?", type: "number", acceptable: ["11"] },
      { id: "g2-3-e5", promptFr: "Peut-on former un triangle avec les côtés 2, 3, 7 ? (oui/non)", type: "short_text", acceptable: ["non"] },
    ],
  };
