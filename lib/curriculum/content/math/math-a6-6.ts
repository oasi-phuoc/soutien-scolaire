import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A6_6_LESSON: MathSubmoduleLesson = {
    submoduleId: "A6-6",
    submoduleCode: "A6.6",
    theory: {
      title: { fr: "Règle de trois",},
      paragraphs: {
        fr: [
          "La règle de trois (ou produit en croix) permet de trouver une valeur inconnue dans une proportion. Si a/b = c/x, alors x = (b × c) / a.",
          "Étapes : 1) Identifiez les 3 valeurs connues et la valeur x inconnue. 2) Écrivez la proportion. 3) Multipliez en croix. 4) Divisez par le nombre restant.",
          "Exemple : Si 2 pommes coûtent 4 CHF, combien coûtent 6 pommes ? → 2/4 = 6/x → x = (4 × 6) / 2 = 24 / 2 = 12 CHF.",
        ],
      },
      blocks: [
        { type: "heading", fr: "Comparaison de pourcentages", black: true },
        { type: "plain", fr: "Comparer des pourcentages permet de prendre de meilleures décisions : quelle offre est plus avantageuse ? Quel produit a le meilleur rapport qualité-prix ? Les pourcentages permettent de comparer des quantités de bases différentes." },
        { type: "plain", fr: "" },
        { type: "heading", fr: "Comparer des offres commerciales" },
        { type: "section", labelFr: "Méthode", itemsFr: [
          "**Étape 1** — Calculer le montant de la réduction pour chaque offre",
          "**Étape 2** — Comparer les montants obtenus",
          "**Étape 3** — Choisir l'offre la plus avantageuse selon la situation",
        ]},
        { type: "example", fr: "Offre A : −20% sur 150 CHF → 150 × 0,80 = 120 CHF  (économie : 30 CHF)" },
        { type: "example", fr: "Offre B : −15% sur 130 CHF → 130 × 0,85 = 110,50 CHF  (économie : 19,50 CHF)" },
        { type: "plain", fr: "" },
        { type: "heading", fr: "Tableau comparatif : exemple de magasins" },
        { type: "table", headersFr: ["Produit", "Prix initial", "Réduction", "Prix final"], accentHeader: true,
          rows: [
            ["Veste — Magasin A", "200 CHF", "−25%", "150 CHF"],
            ["Veste — Magasin B", "180 CHF", "−20%", "144 CHF"],
            ["Veste — Magasin C", "220 CHF", "−30%", "154 CHF"],
          ]
        },
        { type: "note", fr: "La plus grande réduction en % ne garantit pas le prix le plus bas. Toujours calculer le prix final pour comparer correctement." },
        { type: "plain", fr: "" },
        { type: "heading", fr: "Comparer des taux (notes, résultats...)" },
        { type: "section", labelFr: "Principe", itemsFr: [
          "Convertir chaque résultat en pourcentage pour comparer sur la même base",
          "Classe A : 18/24 réussites → (18 ÷ 24) × 100 = **75%**",
          "Classe B : 21/30 réussites → (21 ÷ 30) × 100 = **70%**",
          "→ La classe A a un meilleur taux de réussite",
        ]},
        { type: "plain", fr: "" },
        { type: "bullets", labelFr: "Cas concrets d'utilisation", itemsFr: [
          "Comparer deux soldes dans des magasins différents",
          "Comparer des résultats scolaires de classes de tailles différentes",
          "Évaluer l'efficacité de deux médicaments testés sur des groupes différents",
          "Comparer des taux d'inflation ou de croissance",
        ]},
      ],
    },
    exercises: [
      { id: "a6-6-e1", promptFr: "2 pommes coûtent 4 CHF. Combien coûtent 6 pommes ?", type: "number", acceptable: ["12"] },
      { id: "a6-6-e2", promptFr: "5 livres pèsent 2 kg. Combien pèsent 15 livres ?", type: "number", acceptable: ["6"] },
      { id: "a6-6-e3", promptFr: "Un train roule 150 km en 2h. En 5h, quelle distance ?", type: "number", acceptable: ["375"] },
      { id: "a6-6-e4", promptFr: "3 chemises coûtent 45 CHF. Combien pour 7 chemises ?", type: "number", acceptable: ["105"] },
      { id: "a6-6-e5", promptFr: "4 ouvriers font un travail en 6 jours. Combien de jours pour 8 ouvriers ?", type: "number", acceptable: ["3"] },
    ],
  };
