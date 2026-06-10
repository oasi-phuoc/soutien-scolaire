import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A6_3_LESSON: MathSubmoduleLesson = {
    submoduleId: "A6-3",
    submoduleCode: "A6.3",
    theory: {
      title: { fr: "Augmentation et réduction",},
      paragraphs: {
        fr: [
          "Augmenter de p% : multiplier par (1 + p/100). Exemple : augmenter 200 de 15% → 200 × 1,15 = 230.",
          "Diminuer de p% : multiplier par (1 − p/100). Exemple : diminuer 200 de 20% → 200 × 0,80 = 160.",
          "Coefficient multiplicateur : 1,15 correspond à une augmentation de 15% ; 0,80 à une réduction de 20%.",
        ],
      },
      blocks: [
        { type: "heading", fr: "Augmentation en pourcentage", black: true },
        { type: "plain", fr: "Augmenter une valeur de **p%** signifie qu'on lui ajoute p% de sa propre valeur. On utilise un **coefficient multiplicateur** supérieur à 1 pour effectuer ce calcul en une seule étape." },
        { type: "highlight", fr: "Formule — Augmentation" },
        { type: "section", labelFr: "", itemsFr: [
          "Nouvelle valeur = valeur initiale × (1 + p/100)",
          "Exemple : +20% sur 80 → 80 × 1,20 = 96",
        ]},
        { type: "plain", fr: "" },
        { type: "heading", fr: "Le coefficient multiplicateur" },
        { type: "section", labelFr: "Comment trouver le coefficient", itemsFr: [
          "Pour une augmentation de **p%** : coefficient = 1 + p/100",
          "Augmentation de 15% → 1 + 0,15 = **1,15**",
          "Augmentation de 5%  → 1 + 0,05 = **1,05**",
          "Augmentation de 100% → 1 + 1,00 = **2,00** (le double)",
        ]},
        { type: "plain", fr: "" },
        { type: "table", headersFr: ["Augmentation", "Coefficient", "Exemple (base 100)"], accentHeader: true,
          rows: [
            ["+5%", "× 1,05", "100 → 105"],
            ["+10%", "× 1,10", "100 → 110"],
            ["+15%", "× 1,15", "100 → 115"],
            ["+20%", "× 1,20", "100 → 120"],
            ["+50%", "× 1,50", "100 → 150"],
          ]
        },
        { type: "plain", fr: "" },
        { type: "heading", fr: "Réduction en pourcentage", black: true },
        { type: "plain", fr: "Réduire une valeur de **p%** signifie qu'on lui soustrait p% de sa propre valeur. On utilise un **coefficient multiplicateur** inférieur à 1 pour effectuer ce calcul en une seule étape." },
        { type: "highlight", fr: "Formule — Réduction" },
        { type: "section", labelFr: "", itemsFr: [
          "Nouvelle valeur = valeur initiale × (1 − p/100)",
          "Exemple : −30% sur 200 → 200 × 0,70 = 140",
        ]},
        { type: "plain", fr: "" },
        { type: "section", labelFr: "Comment trouver le coefficient", itemsFr: [
          "Pour une réduction de **p%** : coefficient = 1 − p/100",
          "Réduction de 20% → 1 − 0,20 = **0,80**",
          "Réduction de 30% → 1 − 0,30 = **0,70**",
          "Réduction de 10% → 1 − 0,10 = **0,90**",
        ]},
        { type: "plain", fr: "" },
        { type: "table", headersFr: ["Réduction", "Coefficient", "Exemple (base 200)"], accentHeader: true,
          rows: [
            ["−10%", "× 0,90", "200 → 180"],
            ["−20%", "× 0,80", "200 → 160"],
            ["−25%", "× 0,75", "200 → 150"],
            ["−30%", "× 0,70", "200 → 140"],
            ["−50%", "× 0,50", "200 → 100"],
          ]
        },
        { type: "plain", fr: "" },
        { type: "highlight", fr: "Augmentation vs Réduction" },
        { type: "section", labelFr: "", itemsFr: [
          "Augmentation de p% → coefficient **supérieur à 1** (ex: 1,20 pour +20%)",
          "Réduction de p% → coefficient **inférieur à 1** (ex: 0,80 pour −20%)",
        ]},
      ],
    },
    exercises: [
      { id: "a6-3-e1", promptFr: "Augmentez 200 de 15%.", type: "number", acceptable: ["230"] },
      { id: "a6-3-e2", promptFr: "Diminuez 200 de 20%.", type: "number", acceptable: ["160"] },
      { id: "a6-3-e3", promptFr: "Un article coûte 80 CHF. Réduction de 25%. Nouveau prix ?", type: "number", acceptable: ["60"] },
      { id: "a6-3-e4", promptFr: "Salaire de 3 200 CHF augmenté de 5%. Nouveau salaire ?", type: "number", acceptable: ["3360"] },
      { id: "a6-3-e5", promptFr: "Prix de 150 CHF avec une réduction de 10%. Prix final ?", type: "number", acceptable: ["135"] },
    ],
  };
