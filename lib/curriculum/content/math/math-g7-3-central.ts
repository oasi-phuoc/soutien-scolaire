import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_G7_3_LESSON: MathSubmoduleLesson = {
  submoduleId: "G7-3",
  submoduleCode: "G7.3",
  theory: {
    title: { fr: "Symétrie centrale" },
    blocks: [
      { type: "heading", fr: "Centre de symétrie", black: true },
      {
        type: "plain",
        fr: "La **symétrie centrale** de centre O associe à chaque point M son image M' telle que **O est le milieu** de [MM']. C'est une rotation de **180°** autour de O.",
      },
      { type: "highlight", fr: "Propriétés" },
      {
        type: "section",
        labelFr: "",
        itemsFr: [
          "Conservation des **distances**, des **angles** et des **aires**.",
          "Le centre O est le milieu de chaque segment [MM'].",
          "Les figures originale et image sont **superposables** par un demi-tour.",
        ],
      },
      { type: "highlight", fr: "Construction" },
      {
        type: "section",
        labelFr: "",
        itemsFr: [
          "Tracer la droite (OM).",
          "Reporter la longueur OM de l'autre côté de O pour obtenir M'.",
          "Sur un quadrillage : si O est l'origine, (x ; y) → (−x ; −y).",
        ],
      },
      { type: "highlight", fr: "Figures avec un centre de symétrie" },
      {
        type: "bullets",
        itemsFr: [
          "Parallélogramme, rectangle, losange, carré, cercle",
          "Pas le triangle en général",
        ],
      },
    ],
    paragraphs: { fr: [] },
  },
  exercises: [
    { id: "g7-3-e1", promptFr: "La symétrie centrale conserve-t-elle les longueurs ? (oui/non)", type: "short_text", acceptable: ["oui"] },
    { id: "g7-3-e2", promptFr: "Le symétrique du point (2 ; 3) par rapport à O(0,0) est le point (? ; ?).", type: "short_text", acceptable: ["(-2;-3)", "(−2;−3)", "-2,-3"] },
    { id: "g7-3-e3", promptFr: "Un triangle a-t-il généralement un centre de symétrie ? (oui/non)", type: "short_text", acceptable: ["non"] },
    { id: "g7-3-e4", promptFr: "Un parallélogramme a-t-il un centre de symétrie ? (oui/non)", type: "short_text", acceptable: ["oui"] },
    { id: "g7-3-e5", promptFr: "La symétrie centrale est équivalente à une rotation de combien de degrés ?", type: "number", acceptable: ["180"] },
  ],
};
