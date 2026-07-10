import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_G7_2_LESSON: MathSubmoduleLesson = {
  submoduleId: "G7-2",
  submoduleCode: "G7.2",
  theory: {
    title: { fr: "Symétrie axiale" },
    blocks: [
      { type: "heading", fr: "Axes de symétrie", black: true },
      {
        type: "plain",
        fr: "Un axe de symétrie est une droite qui agit comme un miroir : chaque point de la figure a son correspondant de l'autre côté, à égale distance de l'axe.",
      },
      { type: "highlight", fr: "Repérer les axes" },
      {
        type: "section",
        labelFr: "",
        itemsFr: [
          "Imaginez de **plier** la figure le long d'une droite : les deux moitiés doivent se superposer.",
          "Une figure peut avoir **plusieurs** axes (carré, croix…) ou **aucun** (parallélogramme quelconque).",
          "Sur le quadrillage, les axes sont souvent **horizontaux**, **verticaux** ou en **diagonale à 45°**.",
        ],
      },
      { type: "highlight", fr: "Exemples" },
      {
        type: "bullets",
        itemsFr: [
          "Triangle isocèle → **1** axe (médiane)",
          "Rectangle → **2** axes (milieux des côtés)",
          "Carré → **4** axes (2 médianes + 2 diagonales)",
          "Parallélogramme non rectangle → **0** axe",
        ],
      },
      {
        type: "note",
        fr: "Cliquez deux intersections pour tracer un axe. Retracez le même axe pour l'effacer. Dessinez tous les axes de la figure.",
      },
    ],
    paragraphs: { fr: [] },
  },
  exercises: [],
};
