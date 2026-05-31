import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A5_1_LESSON: MathSubmoduleLesson = {
    submoduleId: "A5-1",
    submoduleCode: "A5.1",
    theory: {
      title: { fr: "Lire et arrondir les décimaux", en: "Reading and rounding decimals", ar: "قراءة وتقريب الأعداد العشرية", fa: "خواندن و گرد کردن اعشار", ti: "ምንባብ ምልካዕ ቁጽሪ ቪርጉላ", uk: "Читання і округлення десяткових" },
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
        { type: "plain", fr: "" },
        { type: "heading", fr: "Comparer et ordonner", black: true },
        { type: "highlight", fr: "Méthode" },
        {
          type: "section", labelFr: "", itemsFr: [
            "1. Comparer les parties entières en premier.",
            "2. Si égales → comparer les dixièmes, puis les centièmes…",
            "3. Ajouter des zéros si nécessaire : 3,5 = 3,50",
          ],
        },
        {
          type: "table",
          headersFr: ["Comparaison", "Résultat", "Raison"],
          accentHeader: true,
          rows: [
            ["3,5 vs 3,50", "3,5 = 3,50", "mêmes valeurs"],
            ["4,7 vs 4,69", "4,7 > 4,69", "dixième : 7 > 6"],
            ["2,04 vs 2,40", "2,04 < 2,40", "dixième : 0 < 4"],
          ],
        },
        { type: "plain", fr: "" },
        { type: "heading", fr: "Arrondir les décimaux", black: true },
        { type: "highlight", fr: "Comment arrondir" },
        {
          type: "section", labelFr: "", itemsFr: [
            "1. Repérer la **position d'arrondi** (unité, dixième, centième…).",
            "2. Regarder le chiffre **juste après** cette position.",
          ],
        },
        {
          type: "rule", titleFr: "", itemsFr: [
            "Chiffre ≥ 5  →  arrondir vers le HAUT (augmenter d'un)",
            "Chiffre < 5  →  arrondir vers le BAS (laisser tel quel)",
          ],
        },
        { type: "plain", fr: "" },
        { type: "heading", fr: "Exemples d'arrondi", black: false },
        {
          type: "table",
          headersFr: ["Nombre", "Arrondi à", "Chiffre suivant", "Résultat"],
          accentHeader: true,
          rows: [
            ["3,47",  "dixième",  "7 ≥ 5", "→ 3,5"],
            ["3,42",  "dixième",  "2 < 5", "→ 3,4"],
            ["3,479", "centième", "9 ≥ 5", "→ 3,48"],
            ["12,5",  "unité",    "5 ≥ 5", "→ 13"],
            ["12,45", "unité",    "4 < 5", "→ 12"],
          ],
        },
        { type: "note", fr: "Après l'arrondi, on supprime les chiffres après la position arrondie." },
      ],
      paragraphs: { fr: [] },
    },
    exercises: [],
    exercisePool: [],
    poolSize: 5,
  };
