import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A2_4_LESSON: MathSubmoduleLesson = {
  submoduleId: "A2-4",
  submoduleCode: "A2.4",
  theory: {
    title: { fr: "Problèmes" },
    blocks: [
      { type: "heading", fr: "Problèmes", black: true },
      { type: "plain", fr: "Un problème décrit une situation réelle. Il faut lire attentivement pour trouver l'opération à effectuer." },

      { type: "heading", fr: "Mots clés : addition" },
      { type: "bullets", labelFr: "", itemsFr: [
        "**ajouter, mettre, rajouter** → on ajoute quelque chose",
        "**gagner, recevoir, acheter** → on reçoit davantage",
        "**rejoindre, arriver, monter** → quelqu'un s'ajoute au groupe",
        "**en tout, au total, de plus** → on cherche la somme",
        "**plus que** → on additionne",
      ]},

      { type: "highlight", fr: "Exemple addition" },
      { type: "section", labelFr: "Énoncé :", itemsFr: ["Paul a 12 billes. Il en gagne 5 de plus. Combien en a-t-il ?"] },
      { type: "section", labelFr: "Solution :", itemsFr: ["Mot clé : « gagne » → addition", "12 + 5 = **17**", "Réponse : 17 billes."] },

      { type: "heading", fr: "Mots clés : soustraction" },
      { type: "bullets", labelFr: "", itemsFr: [
        "**enlever, retirer, ôter** → on enlève quelque chose",
        "**perdre, dépenser, vendre** → on perd ou consomme",
        "**partir, descendre, quitter** → quelqu'un quitte le groupe",
        "**reste-t-il, il reste, de moins** → on cherche le reste",
        "**moins que** → on soustrait",
      ]},

      { type: "highlight", fr: "Exemple soustraction" },
      { type: "section", labelFr: "Énoncé :", itemsFr: ["Marie a 20 CHF. Elle dépense 8 CHF. Combien lui reste-t-il ?"] },
      { type: "section", labelFr: "Solution :", itemsFr: ["Mot clé : « dépense » → soustraction", "20 − 8 = **12**", "Réponse : 12 CHF."] },

      { type: "heading", fr: "Démarche", black: true },
      { type: "bullets", labelFr: "", itemsFr: [
        "**1.** Je lis attentivement l'énoncé.",
        "**2.** Je repère les nombres et les mots clés.",
        "**3.** Je choisis l'opération (**+** ou **−**).",
        "**4.** Je calcule et j'écris la réponse.",
      ]},
    ],
    paragraphs: { fr: [] },
  },
  exercises: [],
  exercisePool: [],
  poolSize: 0,
};
