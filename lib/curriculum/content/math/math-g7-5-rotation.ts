import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_G7_5_ROTATION_LESSON: MathSubmoduleLesson = {
  submoduleId: "G7-5",
  submoduleCode: "G7.5",
  theory: {
    title: { fr: "Rotation" },
    blocks: [
      { type: "heading", fr: "Tourner une figure", black: true },
      {
        type: "plain",
        fr: "Une **rotation** fait tourner chaque point autour d'un centre, d'un angle donné. Sur le quadrillage, on repère le sens grâce à un **trait bleu** sur le bord de la grille.",
      },
      { type: "highlight", fr: "Le trait bleu" },
      {
        type: "section",
        labelFr: "",
        itemsFr: [
          "Sur le **modèle**, le trait bleu est toujours **à gauche**.",
          "Sur la grille vide, le trait bleu peut être **en haut**, **à droite** ou **en bas**.",
          "Ce trait indique comment la feuille a été **tournée** : il faut redessiner la figure dans ce nouveau sens.",
        ],
      },
      { type: "highlight", fr: "Les trois rotations" },
      {
        type: "bullets",
        itemsFr: [
          "Trait **en haut** → quart de tour horaire (**90°**)",
          "Trait **à droite** → demi-tour (**180°**)",
          "Trait **en bas** → trois quarts de tour horaire (**270°**)",
        ],
      },
      { type: "highlight", fr: "Propriétés" },
      {
        type: "section",
        labelFr: "",
        itemsFr: [
          "La rotation conserve les **distances**, les **angles** et les **aires**.",
          "La figure garde la **même taille** ; seule l'orientation change.",
          "Un tour complet (**360°**) ramène la figure à sa position initiale.",
        ],
      },
      {
        type: "note",
        fr: "Cliquez deux intersections pour tracer un segment ; cliquez deux fois le même point pour placer ou retirer un point.",
      },
    ],
    paragraphs: { fr: [] },
  },
  exercises: [],
};
