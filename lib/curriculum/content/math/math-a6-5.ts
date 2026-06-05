import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A6_5_LESSON: MathSubmoduleLesson = {
    submoduleId: "A6-5",
    submoduleCode: "A6.5",
    theory: {
      title: { fr: "Réduction",},
      paragraphs: {
        fr: [
          "Deux grandeurs sont proportionnelles si leur rapport est constant. Dans un tableau de proportionnalité, on peut passer d'une ligne à l'autre en multipliant ou divisant par le même nombre (coefficient de proportionnalité).",
          "Exemple : si 3 stylos coûtent 6 CHF, alors 1 stylo coûte 2 CHF (coefficient = 2), et 7 stylos coûtent 14 CHF.",
          "Pour vérifier la proportionnalité : les produits en croix doivent être égaux. Si a/b = c/d, alors a × d = b × c.",
        ],
      },
      blocks: [
        { type: "heading", fr: "Réduction en pourcentage", black: true },
        { type: "plain", fr: "Réduire une valeur de **p%** signifie qu'on lui soustrait p% de sa propre valeur. On utilise un **coefficient multiplicateur** inférieur à 1 pour effectuer ce calcul en une seule étape." },
        { type: "rule", titleFr: "Formule — Réduction", itemsFr: [
          "Nouvelle valeur = valeur initiale × (1 − p/100)",
          "Exemple : −30% sur 200 → 200 × 0,70 = 140",
        ]},
        { type: "plain", fr: "" },
        { type: "heading", fr: "Le coefficient multiplicateur" },
        { type: "section", labelFr: "Comment trouver le coefficient", itemsFr: [
          "Pour une réduction de **p%** : coefficient = 1 − p/100",
          "Réduction de 20% → 1 − 0,20 = **0,80**",
          "Réduction de 30% → 1 − 0,30 = **0,70**",
          "Réduction de 10% → 1 − 0,10 = **0,90**",
        ]},
        { type: "plain", fr: "" },
        { type: "heading", fr: "Exemples de calcul" },
        { type: "example", fr: "−30% sur 200 → 200 × 0,70 = 140" },
        { type: "example", fr: "−20% sur 200 → 200 × 0,80 = 160" },
        { type: "example", fr: "−25% sur 80  → 80 × 0,75 = 60" },
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
        { type: "note", fr: "Une réduction de 20% puis une augmentation de 20% ne redonne PAS la valeur initiale. Exemple : 100 − 20% = 80 ; 80 + 20% = 96 ≠ 100." },
      ],
    },
    exercises: [
      { id: "a6-5-e1", promptFr: "3 stylos coûtent 6 CHF. Combien coûtent 7 stylos ?", type: "number", acceptable: ["14"] },
      { id: "a6-5-e2", promptFr: "Quel est le coefficient de proportionnalité si 5 m de tissu coûtent 20 CHF ?", type: "number", acceptable: ["4"] },
      { id: "a6-5-e3", promptFr: "Si 4 kg coûtent 12 CHF, combien coûtent 9 kg ?", type: "number", acceptable: ["27"] },
      { id: "a6-5-e4", promptFr: "Est-ce proportionnel : 2/6 = 3/9 ? (oui/non)", type: "short_text", acceptable: ["oui", "yes"] },
      { id: "a6-5-e5", promptFr: "Un robinet remplit 3 litres en 5 minutes. Combien de litres en 20 minutes ?", type: "number", acceptable: ["12"] },
    ],
  };
