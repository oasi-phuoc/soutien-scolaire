import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A5_4_LESSON: MathSubmoduleLesson = {
    submoduleId: "A5-4",
    submoduleCode: "A5.4",
    theory: {
      title: { fr: "Addition et soustraction de décimaux", en: "Addition and subtraction of decimals", ar: "جمع وطرح الأعداد العشرية", fa: "جمع و تفریق اعشار", ti: "ምደማር ምቅናስ ቁጽሪ ቪርጉላ", uk: "Додавання і віднімання десяткових" },
      blocks: [
        { type: "heading", fr: "Addition en colonnes", black: true },
        { type: "highlight", fr: "Règle fondamentale" },
        {
          type: "section", labelFr: "", itemsFr: [
            "**Aligner les virgules** : chaque chiffre doit être dans sa colonne.",
            "Additionner de droite à gauche (dixièmes → unités → dizaines).",
            "Si la somme ≥ 10 → poser les unités et **retenir 1**.",
          ],
        },
        {
          type: "add_step_cards",
          colLabels: ["D", "U", ",", "dx"],
          op: "+",
          carryLabel: "R",
          a: [5, 7, null, 9],
          b: [null, 2, null, 4],
          steps: [
            {
              numFr: "1. On pose les nombres",
              textsFr: ["Aligner les virgules. Dixièmes sous dixièmes, unités sous unités."],
              carries: [null, null, null, null],
              result:  [null, null, null, null],
            },
            {
              numFr: "2. Dixièmes : 9 + 4 = 13",
              textsFr: ["9 + 4 = 13 → pose 3, retient 1"],
              carries: [null, 1, null, null],
              result:  [null, null, null, 3],
            },
            {
              numFr: "3. Unités : 1 + 7 + 2 = 10",
              textsFr: ["1 (retenue) + 7 + 2 = 10 → pose 0, retient 1"],
              carries: [1, null, null, null],
              result:  [null, 0, null, 3],
            },
            {
              numFr: "4. Dizaines : 1 + 5 = 6",
              textsFr: ["1 (retenue) + 5 = 6 → pose 6", "Résultat : 57,9 + 2,4 = 60,3"],
              carries: [null, null, null, null],
              result:  [6, 0, null, 3],
            },
          ],
        },
        { type: "note", fr: "57,9 + 2,4 = 60,3" },
        { type: "plain", fr: "" },
        { type: "heading", fr: "Soustraction en colonnes", black: true },
        { type: "highlight", fr: "Règle de l'emprunt" },
        {
          type: "section", labelFr: "", itemsFr: [
            "Si soustraction impossible (ex. 3 − 8) → **emprunter 1** à la colonne de gauche.",
            "La colonne empruntée est réduite de 1. La colonne courante gagne 10.",
          ],
        },
        { type: "highlight", fr: "Exemple : 14,3 − 5,8" },
        {
          type: "section", labelFr: "", itemsFr: [
            "dx : 3 − 8 impossible → emprunter → 13 − 8 = 5",
            "U : (4 − 1) − 5 = 3 − 5 impossible → emprunter → 13 − 5 = 8",
            "D : (1 − 1) − 0 = 0",
          ],
        },
        { type: "note", fr: "14,3 − 5,8 = 8,5" },
      ],
      paragraphs: { fr: [] },
    },
    exercises: [],
    exercisePool: [],
    poolSize: 5,
  };
