import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A2_4_LESSON: MathSubmoduleLesson = {
  submoduleId: "A2-4",
  submoduleCode: "A2.4",
  theory: {
    title: { fr: "Problèmes" },
    blocks: [
      { type: "heading", fr: "Problèmes avec « plus que » et « moins que »", black: true },

      { type: "highlight", fr: "La règle importante" },
      { type: "bullets", labelFr: "Quand on lit un problème, il faut trouver :", itemsFr: [
        "**1.** Qui a la quantité connue ?",
        "**2.** Qui a plus ou moins ?",
        "**3.** Qui est demandé dans la question ?",
      ] },

      { type: "heading", fr: "A. Avec « plus que »", black: true },
      { type: "highlight", fr: "Cas 1 : on cherche la personne qui a PLUS" },
      { type: "section", labelFr: "Énoncé :", itemsFr: [
        "Ali a 5 pommes.",
        "Sophie a 3 pommes de plus qu'Ali.",
        "Combien Sophie a-t-elle ?",
      ] },
      { type: "section", labelFr: "Analyse :", itemsFr: [
        "Sophie a **plus**.",
        "On fait **+**.",
      ] },
      { type: "section", labelFr: "Calcul :", itemsFr: ["5 + 3 = **8**"] },
      { type: "section", labelFr: "Réponse :", itemsFr: ["Sophie a **8 pommes**."] },

      { type: "highlight", fr: "Cas 2 : on cherche la personne qui a MOINS" },
      { type: "section", labelFr: "Énoncé :", itemsFr: [
        "Ali a 5 pommes de plus que Sophie.",
        "Ali a 12 pommes.",
        "Combien Sophie a-t-elle ?",
      ] },
      { type: "section", labelFr: "Analyse :", itemsFr: [
        "Ali a **plus**.",
        "Sophie a **moins**.",
        "On enlève la différence.",
      ] },
      { type: "section", labelFr: "Calcul :", itemsFr: ["12 − 5 = **7**"] },
      { type: "section", labelFr: "Réponse :", itemsFr: ["Sophie a **7 pommes**."] },

      { type: "heading", fr: "B. Avec « moins que »", black: true },
      { type: "highlight", fr: "Cas 1 : on cherche la personne qui a MOINS" },
      { type: "section", labelFr: "Énoncé :", itemsFr: [
        "Ali a 10 pommes.",
        "Sophie a 4 pommes de moins qu'Ali.",
        "Combien Sophie a-t-elle ?",
      ] },
      { type: "section", labelFr: "Analyse :", itemsFr: [
        "Sophie a **moins**.",
        "On fait **−**.",
      ] },
      { type: "section", labelFr: "Calcul :", itemsFr: ["10 − 4 = **6**"] },
      { type: "section", labelFr: "Réponse :", itemsFr: ["Sophie a **6 pommes**."] },

      { type: "highlight", fr: "Cas 2 : on cherche la personne qui a PLUS" },
      { type: "section", labelFr: "Énoncé :", itemsFr: [
        "Ali a 4 pommes de moins que Sophie.",
        "Ali a 6 pommes.",
        "Combien Sophie a-t-elle ?",
      ] },
      { type: "section", labelFr: "Analyse :", itemsFr: [
        "Ali a **moins**.",
        "Sophie a **plus**.",
        "On ajoute la différence.",
      ] },
      { type: "section", labelFr: "Calcul :", itemsFr: ["6 + 4 = **10**"] },
      { type: "section", labelFr: "Réponse :", itemsFr: ["Sophie a **10 pommes**."] },

      { type: "heading", fr: "Méthode simple", black: true },
      { type: "section", labelFr: "Question 1 :", itemsFr: [
        "La personne demandée a-t-elle **plus** ou **moins** ?",
        "Elle a **plus** → on fait **+**.",
        "Elle a **moins** → on fait **−**.",
      ] },

      { type: "heading", fr: "Tableau résumé" },
      { type: "table",
        headersFr: ["Phrase", "Question", "Opération"],
        accentHeader: true,
        rows: [
          ["Sophie a 3 de plus qu'Ali. Ali a 5.", "Combien Sophie a ?", "5 + 3"],
          ["Ali a 3 de plus que Sophie. Ali a 8.", "Combien Sophie a ?", "8 − 3"],
          ["Sophie a 3 de moins qu'Ali. Ali a 8.", "Combien Sophie a ?", "8 − 3"],
          ["Ali a 3 de moins que Sophie. Ali a 5.", "Combien Sophie a ?", "5 + 3"],
        ],
      },

      { type: "heading", fr: "Verbes et expressions fréquents" },
      { type: "section", labelFr: "Souvent additionner", itemsFr: [
        "**recevoir**", "**gagner**", "**ajouter**", "**acheter encore**", "**augmenter**",
        "**en plus**", "**de plus**", "**au total**", "**en tout**", "**ensemble**",
      ] },
      { type: "section", labelFr: "Souvent soustraire", itemsFr: [
        "**perdre**", "**dépenser**", "**donner**", "**enlever**", "**retirer**",
        "**vendre**", "**diminuer**", "**il reste**", "**de moins**", "**différence**",
      ] },

      { type: "note", fr: "Attention : les mots **plus que** et **moins que** ne suffisent pas. Il faut toujours demander : **la personne que je cherche a plus ou moins ?**" },
      { type: "highlight", fr: "Exemple à retenir" },
      { type: "section", labelFr: "Énoncé :", itemsFr: [
        "Ali a 5 pommes de plus que Sophie.",
        "Ali a 12 pommes.",
        "Combien Sophie a-t-elle ?",
      ] },
      { type: "section", labelFr: "Analyse :", itemsFr: [
        "Ali a **plus**.",
        "Donc Sophie a **moins**.",
      ] },
      { type: "section", labelFr: "Calcul :", itemsFr: ["12 − 5 = **7**"] },
      { type: "section", labelFr: "Réponse :", itemsFr: ["Sophie a **7 pommes**."] },
    ],
    paragraphs: { fr: [] },
  },
  exercises: [],
  exercisePool: [],
  poolSize: 0,
};
