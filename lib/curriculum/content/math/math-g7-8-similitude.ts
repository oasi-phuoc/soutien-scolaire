import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_G7_8_LESSON: MathSubmoduleLesson = {
  submoduleId: "G7-8",
  submoduleCode: "G7.8",
  theory: {
    title: { fr: "Homothétie et longueurs" },
    blocks: [
      { type: "heading", fr: "Figures semblables", black: true },
      {
        type: "plain",
        fr: "Deux figures **semblables** ont la même forme mais pas nécessairement la même taille. Elles sont reliées par une **homothétie** (ou une similitude).",
      },
      { type: "highlight", fr: "Coefficient de similitude k" },
      {
        type: "section",
        labelFr: "",
        itemsFr: [
          "k = longueur image / longueur originale.",
          "Rapport des **périmètres** : **k**.",
          "Rapport des **aires** : **k²**.",
          "Exemple : k = 3 → périmètres × 3, aires × 9.",
        ],
      },
      { type: "highlight", fr: "Applications" },
      {
        type: "section",
        labelFr: "",
        itemsFr: [
          "Plans et maquettes : k < 1 pour une **réduction**.",
          "Agrandissement : k > 1.",
        ],
      },
    ],
    paragraphs: { fr: [] },
  },
  exercises: [
    { id: "g7-8-e1", promptFr: "Deux figures semblables, k = 4. Un côté de 3 cm → côté image = ?", type: "number", acceptable: ["12"] },
    { id: "g7-8-e2", promptFr: "k = 3. Rapport des aires = ?", type: "number", acceptable: ["9"] },
    { id: "g7-8-e3", promptFr: "k = 2. Périmètre original = 10 cm. Périmètre image = ?", type: "number", acceptable: ["20"] },
    { id: "g7-8-e4", promptFr: "k = 1/3. Un côté de 9 cm → côté image = ?", type: "number", acceptable: ["3"] },
    { id: "g7-8-e5", promptFr: "k = 2. Aire originale = 8 cm². Aire image = ?", type: "number", acceptable: ["32"] },
  ],
};
