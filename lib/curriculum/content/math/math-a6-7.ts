import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A6_7_LESSON: MathSubmoduleLesson = {
  submoduleId: "A6-7",
  submoduleCode: "A6.7",
  theory: {
    title: { fr: "Problèmes",},
    paragraphs: {
      fr: [
        "Une échelle est un rapport entre la dimension sur le plan (ou la carte) et la dimension réelle. Échelle 1:1000 signifie que 1 cm sur le plan représente 1000 cm = 10 m en réalité.",
        "Distance réelle = distance sur le plan × dénominateur de l'échelle.",
        "Distance sur le plan = distance réelle / dénominateur de l'échelle.",
        "Exemple : sur un plan à l'échelle 1:500, un couloir mesure 3,4 cm. Distance réelle : 3,4 × 500 = 1 700 cm = 17 m.",
      ],
    },
    blocks: [
      { type: "heading", fr: "Problèmes mixtes de pourcentage", black: true },
      { type: "plain", fr: "Dans la vie quotidienne, les problèmes de pourcentage combinent souvent plusieurs opérations : calculer un pourcentage, exprimer une partie en %, appliquer une augmentation ou une réduction. Il faut identifier quelle opération utiliser." },
      { type: "plain", fr: "" },
      { type: "heading", fr: "Les 4 types de problèmes" },
      { type: "table", headersFr: ["Type de problème", "Formule", "Exemple"], accentHeader: true,
        rows: [
          ["Calculer p% d'une quantité", "N × p ÷ 100", "20% de 150 = 30"],
          ["Exprimer une partie en %", "(partie ÷ total) × 100", "30 sur 120 = 25%"],
          ["Augmenter de p%", "N × (1 + p/100)", "+15% sur 200 = 230"],
          ["Réduire de p%", "N × (1 − p/100)", "−20% sur 200 = 160"],
        ]
      },
      { type: "plain", fr: "" },
      { type: "heading", fr: "Problème combiné : étapes à suivre" },
      { type: "section", labelFr: "Méthode générale", itemsFr: [
        "**Étape 1** — Lire attentivement l'énoncé et identifier ce qu'on cherche",
        "**Étape 2** — Choisir la bonne formule (calcul, expression, augmentation ou réduction)",
        "**Étape 3** — Effectuer le calcul",
        "**Étape 4** — Vérifier que la réponse est cohérente (unité, ordre de grandeur)",
      ]},
      { type: "plain", fr: "" },
      { type: "heading", fr: "Exemples pratiques" },
      { type: "example", fr: "Article à 80 CHF soldé −25%, puis −10% supplémentaires :\n1er solde : 80 × 0,75 = 60 CHF\nSolde final : 60 × 0,90 = 54 CHF" },
      { type: "example", fr: "Salaire de 2 400 CHF augmenté de 5% :\nAugmentation : 2 400 × 0,05 = 120 CHF\nNouveau salaire : 2 400 × 1,05 = 2 520 CHF" },
      { type: "plain", fr: "" },
      { type: "bullets", labelFr: "Erreurs fréquentes à éviter", itemsFr: [
        "Confondre « p% de N » et « exprimer N en % de M »",
        "Additionner deux réductions successives (−20% puis −10% ≠ −30%)",
        "Oublier que le coefficient d'augmentation est > 1 et celui de réduction est < 1",
        "Ne pas vérifier l'unité du résultat (CHF, %, nombre d'élèves...)",
      ]},
      { type: "note", fr: "Deux réductions successives de 20% et 10% donnent : 1 × 0,80 × 0,90 = 0,72, soit une réduction totale de 28%, et non 30%." },
    ],
  },
  exercises: [
    { id: "a6-7-e1", promptFr: "Échelle 1:500. Sur le plan : 3,4 cm. Distance réelle en m ?", type: "number", acceptable: ["17"] },
    { id: "a6-7-e2", promptFr: "Échelle 1:1000. Sur le plan : 5 cm. Distance réelle en m ?", type: "number", acceptable: ["50"] },
    { id: "a6-7-e3", promptFr: "Échelle 1:100. Distance réelle : 8 m = 800 cm. Distance sur le plan en cm ?", type: "number", acceptable: ["8"] },
    { id: "a6-7-e4", promptFr: "Échelle 1:25 000. Sur la carte : 4 cm. Distance réelle en km ?", type: "number", acceptable: ["1"] },
    { id: "a6-7-e5", promptFr: "Quelle est l'unité d'échelle la plus agrandie : 1:10 ou 1:1000 ?", type: "short_text", acceptable: ["1:10"] },
  ],
};
