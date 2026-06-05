import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A6_3_LESSON: MathSubmoduleLesson = {
    submoduleId: "A6-3",
    submoduleCode: "A6.3",
    theory: {
      title: { fr: "Trouver le pourcentage",},
      paragraphs: {
        fr: [
          "Pour trouver quel pourcentage représente une partie par rapport à un total, on divise la partie par le total et on multiplie par 100.",
          "Formule : % = (partie / total) × 100.",
          "Exemple : 18 élèves sur 24 ont réussi → % de réussite = (18/24) × 100 = 0,75 × 100 = 75%.",
        ],
      },
      blocks: [
        { type: "heading", fr: "Exprimer une partie en pourcentage", black: true },
        { type: "plain", fr: "Parfois on connaît la **partie** et le **total**, et on veut savoir quel pourcentage cela représente. Par exemple : 30 élèves sur 120 ont réussi — quel est le taux de réussite ?" },
        { type: "rule", titleFr: "Formule", itemsFr: [
          "**Pourcentage** = (partie ÷ total) × 100",
          "Résultat en %",
        ]},
        { type: "plain", fr: "" },
        { type: "heading", fr: "Méthode pas à pas" },
        { type: "section", labelFr: "Étapes", itemsFr: [
          "**Étape 1** — Diviser la partie par le total",
          "**Étape 2** — Multiplier le résultat par 100",
          "**Étape 3** — Ajouter le symbole %",
        ]},
        { type: "example", fr: "30 sur 120 → 30 ÷ 120 = 0,25 → 0,25 × 100 = 25%" },
        { type: "example", fr: "18 sur 24  → 18 ÷ 24 = 0,75 → 0,75 × 100 = 75%" },
        { type: "example", fr: "7 sur 20   → 7 ÷ 20 = 0,35 → 0,35 × 100 = 35%" },
        { type: "plain", fr: "" },
        { type: "heading", fr: "Exemples concrets" },
        { type: "table", headersFr: ["Situation", "Calcul", "Résultat"], accentHeader: true,
          rows: [
            ["18 élèves sur 24 ont réussi", "(18 ÷ 24) × 100", "75%"],
            ["45 points sur 60 à un test", "(45 ÷ 60) × 100", "75%"],
            ["30 articles vendus sur 120", "(30 ÷ 120) × 100", "25%"],
            ["3 fautes sur 4 questions", "(3 ÷ 4) × 100", "75%"],
          ]
        },
        { type: "plain", fr: "" },
        { type: "note", fr: "Le résultat est toujours entre 0% et 100% si la partie est inférieure ou égale au total. Vérifiez que vous avez bien divisé la partie par le total, et non l'inverse." },
      ],
    },
    exercises: [
      { id: "a6-3-e1", promptFr: "18 élèves sur 24 ont réussi. Quel est le pourcentage de réussite ?", type: "short_text", acceptable: ["75%", "75"] },
      { id: "a6-3-e2", promptFr: "45 sur 60. Quel pourcentage ?", type: "short_text", acceptable: ["75%", "75"] },
      { id: "a6-3-e3", promptFr: "30 sur 120. Quel pourcentage ?", type: "short_text", acceptable: ["25%", "25"] },
      { id: "a6-3-e4", promptFr: "7 sur 20. Quel pourcentage ?", type: "short_text", acceptable: ["35%", "35"] },
      { id: "a6-3-e5", promptFr: "3 sur 4. Quel pourcentage ?", type: "short_text", acceptable: ["75%", "75"] },
    ],
  };
