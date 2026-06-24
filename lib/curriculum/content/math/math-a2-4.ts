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
  exercisePool: [
    { id: "a2-4-ep01", promptFr: "Luc a 45 billes. Il en gagne 18 de plus que Marc. Marc a 27 billes. Combien Luc a-t-il de billes ?", type: "number", acceptable: ["45"], hintFr: "Luc a plus : on additionne la différence (27 + 18 = 45)." },
    { id: "a2-4-ep02", promptFr: "Sofia a 12 autocollants de moins qu'Eva. Eva a 35 autocollants. Combien Sofia a-t-elle ?", type: "number", acceptable: ["23"], hintFr: "Sofia a moins : 35 − 12 = ?" },
    { id: "a2-4-ep03", promptFr: "Tom a 56 cartes. Il a 14 cartes de plus que Lisa. Combien Lisa a-t-elle de cartes ?", type: "number", acceptable: ["42"], hintFr: "Lisa a moins : 56 − 14 = ?" },
    { id: "a2-4-ep04", promptFr: "Ana a 8 livres de moins que Paul. Paul a 20 livres. Combien Ana a-t-elle de livres ?", type: "number", acceptable: ["12"], hintFr: "Ana a moins : 20 − 8 = ?" },
    { id: "a2-4-ep05", promptFr: "Karim a 30 points. Il a 9 points de plus que Nora. Combien Nora a-t-elle de points ?", type: "number", acceptable: ["21"], hintFr: "Nora a moins : 30 − 9 = ?" },
    { id: "a2-4-ep06", promptFr: "Léa a 15 bonbons de plus que Zoé. Zoé a 24 bonbons. Combien Léa a-t-elle de bonbons ?", type: "number", acceptable: ["39"], hintFr: "Léa a plus : 24 + 15 = ?" },
    { id: "a2-4-ep07", promptFr: "Hugo a 63 images. Il en a 27 de plus que Camille. Combien Camille a-t-elle d'images ?", type: "number", acceptable: ["36"], hintFr: "Camille a moins : 63 − 27 = ?" },
    { id: "a2-4-ep08", promptFr: "Jade a 19 feutres de moins que Rayan. Rayan a 48 feutres. Combien Jade a-t-elle de feutres ?", type: "number", acceptable: ["29"], hintFr: "Jade a moins : 48 − 19 = ?" },
    { id: "a2-4-ep09", promptFr: "Oscar a 32 points. Sara en a 11 de plus qu'Oscar. Combien Sara a-t-elle de points ?", type: "number", acceptable: ["43"], hintFr: "Sara a plus : 32 + 11 = ?" },
    { id: "a2-4-ep10", promptFr: "Mia a 50 billes. Elle en a 17 de moins que Max. Combien Max a-t-il de billes ?", type: "number", acceptable: ["67"], hintFr: "Max a plus : 50 + 17 = ?" },
    { id: "a2-4-ep11", promptFr: "Ines a 74 pages lues. Elle a lu 28 pages de plus que Rémi. Combien Rémi a-t-il lu de pages ?", type: "number", acceptable: ["46"], hintFr: "Rémi a moins : 74 − 28 = ?" },
    { id: "a2-4-ep12", promptFr: "Yann a 36 pièces. Il en a 14 de moins que Clara. Combien Clara a-t-elle de pièces ?", type: "number", acceptable: ["50"], hintFr: "Clara a plus : 36 + 14 = ?" },
  ],
  poolSize: 5,
};
