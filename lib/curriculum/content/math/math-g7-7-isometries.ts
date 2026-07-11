import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_G7_7_LESSON: MathSubmoduleLesson = {
  submoduleId: "G7-7",
  submoduleCode: "G7.7",
  theory: {
    title: { fr: "Isométries" },
    blocks: [
      { type: "heading", fr: "Transformations qui conservent les distances", black: true },
      {
        type: "plain",
        fr: "Une **isométrie** conserve les **distances** (donc aussi les angles et les aires). Les figures originale et image sont **congruentes** (superposables).",
      },
      { type: "highlight", fr: "Les quatre isométries du plan" },
      {
        type: "bullets",
        itemsFr: [
          "**Translation**",
          "**Rotation**",
          "**Réflexion** (symétrie axiale)",
          "**Symétrie glissante** (réflexion + translation)",
        ],
      },
      { type: "highlight", fr: "Directes et indirectes" },
      {
        type: "section",
        labelFr: "",
        itemsFr: [
          "Isométries **directes** (conservent l'orientation) : translation, rotation.",
          "Isométries **indirectes** (inversent l'orientation) : réflexion, symétrie glissante.",
          "L'**homothétie** (avec k ≠ ±1) n'est **pas** une isométrie : elle change les distances.",
        ],
      },
    ],
    paragraphs: { fr: [] },
  },
  exercises: [
    { id: "g7-7-e1", promptFr: "La translation est-elle une isométrie ? (oui/non)", type: "short_text", acceptable: ["oui"] },
    { id: "g7-7-e2", promptFr: "L'homothétie de rapport 2 est-elle une isométrie ? (oui/non)", type: "short_text", acceptable: ["non"] },
    { id: "g7-7-e3", promptFr: "Cite deux isométries directes.", type: "short_text", acceptable: ["translation et rotation", "rotation et translation"] },
    { id: "g7-7-e4", promptFr: "Une isométrie conserve-t-elle les aires ? (oui/non)", type: "short_text", acceptable: ["oui"] },
    { id: "g7-7-e5", promptFr: "Combien d'isométries du plan existe-t-il (types fondamentaux) ?", type: "number", acceptable: ["4"] },
  ],
};
