import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A6_1_LESSON: MathSubmoduleLesson = {
    submoduleId: "A6-1",
    submoduleCode: "A6.1",
    theory: {
      title: { fr: "Notion de pourcentage",},
      paragraphs: {
        fr: [
          "Un pourcentage est une fraction dont le dénominateur est 100. Le symbole est %. Exemple : 35% = 35/100 = 0,35.",
          "On utilise les pourcentages pour comparer des quantités sur une même base de 100. Exemple : 75% de réussite signifie 75 élèves sur 100 ont réussi.",
          "Conversion : fraction → % : multiplier par 100. Exemple : 3/4 × 100 = 75%. Décimal → % : multiplier par 100. Exemple : 0,6 × 100 = 60%.",
        ],
      },
      blocks: [
        { type: "heading", fr: "Introduction aux pourcentages", black: true },
        { type: "plain", fr: "Un **pourcentage** exprime une partie sur cent. Le symbole **%** signifie « pour cent ». On utilise les pourcentages pour comparer des quantités sur une même base de 100." },
        { type: "rule", titleFr: "Définition", itemsFr: [
          "**p%** signifie p parties sur 100",
          "**p%** = p/100 (fraction) = p ÷ 100 (décimal)",
          "Exemple : 35% = 35/100 = 0,35",
        ]},
        { type: "plain", fr: "" },
        { type: "heading", fr: "Points de repère essentiels" },
        { type: "bullets", labelFr: "Valeurs à retenir", itemsFr: [
          "**0%** → rien du tout (la quantité est nulle)",
          "**50%** → la moitié (la quantité est divisée par 2)",
          "**100%** → la totalité (toute la quantité)",
          "**200%** → le double (deux fois la quantité)",
        ]},
        { type: "plain", fr: "" },
        { type: "heading", fr: "Conversions : pourcentage, fraction, décimal" },
        { type: "table", headersFr: ["Pourcentage", "Fraction", "Décimal"], accentHeader: true,
          rows: [
            ["10%", "1/10", "0,10"],
            ["25%", "1/4", "0,25"],
            ["50%", "1/2", "0,50"],
            ["75%", "3/4", "0,75"],
            ["100%", "1", "1,00"],
          ]
        },
        { type: "plain", fr: "" },
        { type: "heading", fr: "Convertir une fraction en pourcentage" },
        { type: "section", labelFr: "Méthode", itemsFr: [
          "**Étape 1** — Diviser le numérateur par le dénominateur",
          "**Étape 2** — Multiplier le résultat par 100",
        ]},
        { type: "example", fr: "3/4 → 3 ÷ 4 = 0,75 → 0,75 × 100 = 75%" },
        { type: "example", fr: "1/5 → 1 ÷ 5 = 0,20 → 0,20 × 100 = 20%" },
        { type: "plain", fr: "" },
        { type: "heading", fr: "Convertir un décimal en pourcentage" },
        { type: "section", labelFr: "Méthode", itemsFr: [
          "Multiplier le nombre décimal par 100",
        ]},
        { type: "example", fr: "0,6 × 100 = 60%   |   0,08 × 100 = 8%   |   1,2 × 100 = 120%" },
        { type: "note", fr: "Un pourcentage peut dépasser 100% ! Par exemple, 120% signifie 1,2 fois la quantité de départ. 75% de réussite signifie 75 élèves sur 100 ont réussi." },
      ],
    },
    exercises: [
      { id: "a6-1-e1", promptFr: "Convertissez 35% en décimal.", type: "short_text", acceptable: ["0,35", "0.35"] },
      { id: "a6-1-e2", promptFr: "Convertissez 3/4 en pourcentage.", type: "short_text", acceptable: ["75%", "75"] },
      { id: "a6-1-e3", promptFr: "Convertissez 0,08 en pourcentage.", type: "short_text", acceptable: ["8%", "8"] },
      { id: "a6-1-e4", promptFr: "Convertissez 120% en décimal.", type: "short_text", acceptable: ["1,2", "1.2"] },
      { id: "a6-1-e5", promptFr: "Convertissez 1/5 en pourcentage.", type: "short_text", acceptable: ["20%", "20"] },
    ],
  };
