import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A5_1_LESSON: MathSubmoduleLesson = {
    submoduleId: "A5-1",
    submoduleCode: "A5.1",
    theory: {
      title: { fr: "Lire et écrire les décimaux", en: "Reading and writing decimals", ar: "قراءة وكتابة الأعداد العشرية", fa: "خواندن و نوشتن اعشار", ti: "ቁጽሪ ቪርጉላ ምንባብ ምጽሓፍ", uk: "Читання і запис десяткових чисел" },
      blocks: [
        { type: "heading", fr: "Structure d'un nombre décimal", black: true },
        { type: "highlight", fr: "Définition" },
        {
          type: "section", labelFr: "", itemsFr: [
            "Un nombre décimal contient une **virgule**.",
            "Avant la virgule → **partie entière** (milliers, centaines, dizaines, unités)",
            "Après la virgule → **partie décimale** (dixièmes, centièmes, millièmes)",
          ],
        },
        { type: "heading", fr: "Exemple : 4 321,98", black: false },
        {
          type: "table",
          headersFr: ["M", "C", "D", "U", "", "dx", "cx"],
          accentHeader: true,
          rows: [["4", "3", "2", "1", ",", "9", "8"]],
        },
        {
          type: "section", labelFr: "Valeur de chaque chiffre :", itemsFr: [
            "4 → 4 milliers = 4 000",
            "3 → 3 centaines = 300",
            "2 → 2 dizaines = 20",
            "1 → 1 unité = 1",
            "9 → 9 **dixièmes** = 0,9",
            "8 → 8 **centièmes** = 0,08",
          ],
        },
        { type: "plain", fr: "" },
        { type: "heading", fr: "Zéros après la virgule", black: true },
        { type: "highlight", fr: "Zéros inutiles" },
        {
          type: "section", labelFr: "", itemsFr: [
            "On peut ajouter des zéros à droite de la partie décimale sans changer la valeur.",
          ],
        },
        { type: "note", fr: "4,2 = 4,20 = 4,200" },
      ],
      paragraphs: { fr: [] },
    },
    exercises: [
      { id: "a5-1-e1", promptFr: "Dans 3,47, quel est le chiffre des dixièmes ?", type: "number", acceptable: ["4"] },
      { id: "a5-1-e2", promptFr: "Dans 5,82, quel est le chiffre des centièmes ?", type: "number", acceptable: ["2"] },
      { id: "a5-1-e3", promptFr: "4,20 est-il égal à 4,2 ? (oui/non)", type: "short_text", acceptable: ["oui", "yes"] },
      { id: "a5-1-e4", promptFr: "Écrivez 3 unités, 5 dixièmes et 7 centièmes sous forme décimale.", type: "short_text", acceptable: ["3,57", "3.57"] },
      { id: "a5-1-e5", promptFr: "Dans 12,345, quel est le chiffre des millièmes ?", type: "number", acceptable: ["5"] },
    ],
  };
