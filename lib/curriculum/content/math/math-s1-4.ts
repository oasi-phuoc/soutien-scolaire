import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_S1_4_LESSON: MathSubmoduleLesson = {
  submoduleId: "S1-4",
  submoduleCode: "S1.4",
  theory: {
    title: {
      fr: "Mode",
    },
    paragraphs: {
      fr: [
        "Le mode est la valeur qui apparaît le plus souvent dans une série de données. C'est la valeur d'effectif maximum.",
        "Une série peut avoir un seul mode (unimodale), deux modes (bimodale), plusieurs modes (multimodale) ou aucun mode si toutes les valeurs apparaissent le même nombre de fois.",
        "Exemple : 2, 3, 3, 5, 7, 7, 7, 9 → le mode est 7 (apparaît 3 fois). Exemple : 1, 2, 2, 3, 3 → deux modes : 2 et 3 (bimodale).",
        "Le mode est le seul indicateur de tendance centrale utilisable pour des données qualitatives (couleurs, catégories). La moyenne et la médiane ne s'appliquent qu'aux données numériques.",
        "Dans un tableau de fréquences, le mode correspond à la modalité ayant l'effectif le plus élevé.",
      ],
    },
  },
  exercises: [
    {
      id: "s1-4-e1",
      promptFr: "Trouve le mode de la série : 4, 6, 6, 8, 10, 6, 3.",
      type: "number",
      acceptable: ["6"],
    },
    {
      id: "s1-4-e2",
      promptFr: "Trouve le mode de la série : 1, 2, 2, 3, 3, 4.",
      type: "short_text",
      acceptable: ["2 et 3", "2 et 3", "2 et 3", "3 et 2"],
    },
    {
      id: "s1-4-e3",
      promptFr: "Les couleurs préférées de 20 élèves : 8 bleu, 7 rouge, 5 vert. Quelle est la couleur mode ?",
      type: "short_text",
      acceptable: ["bleu", "Bleu"],
    },
    {
      id: "s1-4-e4",
      promptFr: "Une série a les valeurs 1, 2, 3, 4, 5 (chacune une seule fois). Combien de modes a-t-elle ?",
      type: "number",
      acceptable: ["0"],
    },
    {
      id: "s1-4-e5",
      promptFr: "Dans un tableau de fréquences, la valeur 12 apparaît 5 fois, 14 apparaît 3 fois, 16 apparaît 7 fois. Quel est le mode ?",
      type: "number",
      acceptable: ["16"],
    },
  ],
};
