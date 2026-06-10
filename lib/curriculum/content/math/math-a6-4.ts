import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A6_4_LESSON: MathSubmoduleLesson = {
    submoduleId: "A6-4",
    submoduleCode: "A6.4",
    theory: {
      title: { fr: "Comparaison de pourcentages",},
      paragraphs: {
        fr: [
          "Comparer des pourcentages permet de prendre de meilleures décisions : quelle offre est plus avantageuse ? Quel produit a le meilleur rapport qualité-prix ?",
          "Les pourcentages permettent de comparer des quantités de bases différentes.",
        ],
      },
      blocks: [
        { type: "heading", fr: "Comparaison de pourcentages", black: true },
        { type: "plain", fr: "Comparer des pourcentages permet de prendre de meilleures décisions : quelle offre est plus avantageuse ? Quel produit a le meilleur rapport qualité-prix ? Les pourcentages permettent de comparer des quantités de bases différentes." },
        { type: "plain", fr: "" },
        { type: "heading", fr: "Comparer des offres commerciales" },
        { type: "section", labelFr: "Méthode", itemsFr: [
          "**1.** Calculer le montant de la réduction pour chaque offre",
          "**2.** Comparer les montants obtenus",
          "**3.** Choisir l'offre la plus avantageuse selon la situation",
        ]},
        { type: "section", labelFr: "", itemsFr: [
          "Offre A : −20% sur 150 CHF → 150 × 0,80 = 120 CHF  (économie : 30 CHF)",
          "Offre B : −15% sur 130 CHF → 130 × 0,85 = 110,50 CHF  (économie : 19,50 CHF)",
        ]},
        { type: "plain", fr: "" },
        { type: "table", headersFr: ["Produit", "Prix initial", "Réduction", "Prix final"], accentHeader: true,
          rows: [
            ["Veste — Magasin A", "200 CHF", "−25%", "150 CHF"],
            ["Veste — Magasin B", "180 CHF", "−20%", "144 CHF"],
            ["Veste — Magasin C", "220 CHF", "−30%", "154 CHF"],
          ]
        },
        { type: "plain", fr: "" },
        { type: "heading", fr: "Comparer des taux (notes, résultats...)" },
        { type: "section", labelFr: "Principe", itemsFr: [
          "Convertir chaque résultat en pourcentage pour comparer sur la même base",
          "Classe A : 18/24 réussites → (18 ÷ 24) × 100 = **75%**",
          "Classe B : 21/30 réussites → (21 ÷ 30) × 100 = **70%**",
          "→ La classe A a un meilleur taux de réussite",
        ]},
        { type: "plain", fr: "" },
        { type: "note", fr: "La plus grande réduction en % ne garantit pas le prix le plus bas. Toujours calculer le prix final pour comparer correctement." },
      ],
    },
    exercises: [
      { id: "a6-4-e1", promptFr: "Offre A : −20% sur 150 CHF. Prix final ?", type: "number", acceptable: ["120"] },
      { id: "a6-4-e2", promptFr: "Offre B : −15% sur 130 CHF. Prix final ?", type: "number", acceptable: ["110.5", "110,5"] },
      { id: "a6-4-e3", promptFr: "Classe A : 18 sur 24. Taux de réussite ?", type: "short_text", acceptable: ["75%", "75"] },
      { id: "a6-4-e4", promptFr: "Classe B : 21 sur 30. Taux de réussite ?", type: "short_text", acceptable: ["70%", "70"] },
      { id: "a6-4-e5", promptFr: "Veste Magasin C : 220 CHF − 30%. Prix final ?", type: "number", acceptable: ["154"] },
    ],
  };
