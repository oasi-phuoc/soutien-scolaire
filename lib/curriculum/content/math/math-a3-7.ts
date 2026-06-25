import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A3_7_LESSON: MathSubmoduleLesson = {
  submoduleId: "A3-7",
  submoduleCode: "A3.7",
  theory: {
    title: { fr: "Problèmes" },
    blocks: [
      { type: "heading", fr: "Problèmes : multiplication ou division", black: true },
      { type: "highlight", fr: "Règle importante" },
      { type: "plain", fr: "Je ne choisis pas l'opération avec un mot. Je la choisis avec **la question**." },
      { type: "section", labelFr: "Méthode", itemsFr: [
        "**1.** Je lis la question.",
        "**2.** Je repère ce qui se répète : une ligne, un paquet, une boîte, une équipe, un prix.",
        "**3.** Je demande : est-ce que je cherche un **total** ou une **part** ?",
      ] },
      { type: "section", labelFr: "", itemsFr: [
        "Si je cherche le total, je fais **×**.",
        "Si je cherche une part ou un nombre de groupes, je fais **÷**.",
        "Je vérifie que ma réponse est logique : un total est souvent plus grand, une part est souvent plus petite.",
      ] },
      { type: "theory_tabs", tabs: [
        {
          label: "Multiplier",
          blocks: [
            { type: "heading", fr: "Quand faut-il multiplier ?", black: true },
            { type: "highlight", fr: "Je cherche un total avec des groupes égaux" },
            { type: "plain", fr: "On multiplie quand la même quantité se répète plusieurs fois." },
            { type: "section", labelFr: "Exemple", itemsFr: [
              "Il y a 6 boîtes.",
              "Dans chaque boîte, il y a 8 crayons.",
              "Combien y a-t-il de crayons en tout ?",
              "On cherche le total.",
              "Calcul : **6 × 8 = 48**",
              "Réponse : **Il y a 48 crayons.**",
            ] },
            { type: "section", labelFr: "On multiplie souvent avec", itemsFr: [
              "des lignes et des colonnes",
              "des paquets identiques",
              "des équipes avec le même nombre de joueurs",
              "un prix répété plusieurs fois",
              "une quantité qui est **2 fois, 3 fois, 4 fois** plus grande",
            ] },
            { type: "heading", fr: "Double, triple et quadruple" },
            { type: "highlight", fr: "Ce sont des multiplications" },
            { type: "section", labelFr: "Double", itemsFr: [
              "Pour obtenir le double d'un nombre, on le multiplie par **2**.",
              "Exemple : le double de 4 est 8, car **4 × 2 = 8**.",
            ] },
            { type: "section", labelFr: "Triple", itemsFr: [
              "Pour obtenir le triple d'un nombre, on le multiplie par **3**.",
              "Exemple : le triple de 4 est 12, car **4 × 3 = 12**.",
            ] },
            { type: "section", labelFr: "Quadruple", itemsFr: [
              "Pour obtenir le quadruple d'un nombre, on le multiplie par **4**.",
              "Exemple : le quadruple de 4 est 16, car **4 × 4 = 16**.",
            ] },
          ],
        },
        {
          label: "Diviser",
          blocks: [
            { type: "heading", fr: "Quand faut-il diviser ?", black: true },
            { type: "highlight", fr: "Je cherche une part ou un nombre de groupes" },
            { type: "plain", fr: "On divise quand on partage une quantité en parts égales ou quand on cherche combien de groupes identiques on peut former." },
            { type: "section", labelFr: "Exemple 1 : partager", itemsFr: [
              "On a 45 cahiers.",
              "On les partage également entre 5 élèves.",
              "Combien de cahiers reçoit chaque élève ?",
              "Calcul : **45 ÷ 5 = 9**",
              "Réponse : **Chaque élève reçoit 9 cahiers.**",
            ] },
            { type: "section", labelFr: "Exemple 2 : grouper", itemsFr: [
              "On a 72 bouteilles.",
              "On met 12 bouteilles dans chaque carton.",
              "Combien de cartons peut-on remplir ?",
              "Calcul : **72 ÷ 12 = 6**",
              "Réponse : **On peut remplir 6 cartons.**",
            ] },
            { type: "heading", fr: "Moitié, tiers et quart", black: true },
            { type: "highlight", fr: "Ce sont des divisions" },
            { type: "section", labelFr: "Moitié", itemsFr: [
              "Pour obtenir la moitié d'un nombre, on divise par **2**.",
              "Exemple : la moitié de 12 est 6, car **12 ÷ 2 = 6**.",
            ] },
            { type: "section", labelFr: "Tiers", itemsFr: [
              "Pour obtenir le tiers d'un nombre, on divise par **3**.",
              "Exemple : le tiers de 12 est 4, car **12 ÷ 3 = 4**.",
            ] },
            { type: "section", labelFr: "Quart", itemsFr: [
              "Pour obtenir le quart d'un nombre, on divise par **4**.",
              "Exemple : le quart de 12 est 3, car **12 ÷ 4 = 3**.",
            ] },
          ],
        },
      ] },
    ],
    paragraphs: { fr: [] },
  },
  exercises: [],
  exercisePool: [],
  poolSize: 0,
};
