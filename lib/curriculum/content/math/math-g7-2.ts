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
        fr: "Exercice 1 : cliquez deux intersections pour tracer un axe. Exercice 2 : complétez la figure de l'autre côté de l'axe bleu.",
      },
      { type: "highlight", fr: "Compléter par symétrie" },
      {
        type: "section",
        labelFr: "",
        itemsFr: [
          "L'axe vertical bleu est un **miroir** au centre de la grille.",
          "Chaque point de la figure donnée a son image à **égale distance** de l'autre côté.",
          "La moitié peut être à **gauche** ou à **droite** de l'axe : reproduisez l'autre moitié.",
        ],
      },
    ],
    paragraphs: { fr: [] },
  },
  exercises: [],
};
