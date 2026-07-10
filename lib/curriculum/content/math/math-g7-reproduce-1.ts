import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_G7_REPRODUCE_LESSON: MathSubmoduleLesson = {
  submoduleId: "G7-1",
  submoduleCode: "G7.1",
  theory: {
    title: { fr: "Reproduction de figures" },
    blocks: [
      { type: "heading", fr: "Reproduire sur un quadrillage", black: true },
      {
        type: "plain",
        fr: "Sur un quadrillage, une figure est formée de segments droits et parfois de points marqués aux intersections.",
      },
      { type: "highlight", fr: "Reproduire à l'identique" },
      {
        type: "section",
        labelFr: "",
        itemsFr: [
          "Observer la figure modèle.",
          "Compter les cases pour placer chaque segment au bon endroit.",
          "Vérifier que la forme a la même taille et la même orientation.",
        ],
      },
      { type: "highlight", fr: "Agrandir ou réduire" },
      {
        type: "section",
        labelFr: "",
        itemsFr: [
          "Chaque segment du modèle doit être **plus long** (agrandir) ou **plus court** (réduire) dans les mêmes proportions.",
          "Exemple : si le modèle fait 2 cases, la figure agrandie ×2 fera 4 cases.",
          "Tous les points se placent en multipliant leurs coordonnées par le même facteur.",
        ],
      },
      {
        type: "note",
        fr: "Cliquez deux intersections pour tracer un segment. Double-cliquez le même point (deux clics) pour placer un point.",
      },
    ],
    paragraphs: { fr: [] },
  },
  exercises: [],
};
