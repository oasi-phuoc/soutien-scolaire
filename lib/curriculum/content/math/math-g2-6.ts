import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_G2_6_LESSON: MathSubmoduleLesson = {
  submoduleId: "G2-6",
  submoduleCode: "G2.6",
  theory: {
    title: { fr: "Figures composées" },
    blocks: [
      { type: "heading", fr: "Figures composées", black: true },
      {
        type: "plain",
        fr: "Une figure composée est formée avec plusieurs figures simples. Pour calculer son **périmètre**, on additionne uniquement les longueurs qui sont sur le contour extérieur.",
      },
      { type: "highlight", fr: "Méthode" },
      {
        type: "section",
        labelFr: "",
        itemsFr: [
          "Repérez les côtés qui appartiennent au contour.",
          "Ignorez les traits intérieurs et les traits en pointillés.",
          "Additionnez toutes les longueurs du contour.",
          "Si une longueur manque, utilisez le périmètre donné pour la retrouver.",
        ],
      },
      { type: "rule", titleFr: "À retenir", itemsFr: ["Périmètre = somme des longueurs du contour extérieur"] },
    ],
    paragraphs: { fr: [] },
  },
  exercises: [],
};
