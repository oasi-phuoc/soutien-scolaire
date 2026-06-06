import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_S2_7_LESSON: MathSubmoduleLesson = {
    submoduleId: "S2-7",
    submoduleCode: "S2.7",
    theory: {
      title: {
        fr: "Introduction aux combinaisons",
      },
      paragraphs: {
        fr: [
          "Dénombrer les résultats possibles d'une expérience est essentiel pour calculer des probabilités classiques. Plus les résultats sont nombreux, plus on a besoin de méthodes systématiques.",
          "Principe multiplicatif : si une expérience se déroule en deux étapes indépendantes avec n₁ résultats possibles à la première et n₂ à la seconde, le nombre total de résultats possibles est n₁ × n₂.",
          "Exemple : on choisit un plat parmi 3 entrées et 4 desserts → 3 × 4 = 12 menus possibles. On lance 2 dés → 6 × 6 = 36 résultats possibles.",
          "Arrangement avec répétition de k objets parmi n : nᵏ résultats. Exemple : 3 chiffres de 0 à 9 (avec répétition) → 10³ = 1000 combinaisons.",
          "Combinaison (choix sans ordre ni répétition) de k éléments parmi n : C(n,k) = n! / (k! × (n−k)!). Exemple : choisir 2 élèves parmi 5 → C(5,2) = 10.",
        ],
      },
    },
    exercises: [
      {
        id: "s2-7-e1",
        promptFr: "Un restaurant propose 4 plats et 3 desserts. Combien de repas différents (plat + dessert) peut-on former ?",
        type: "number",
        acceptable: ["12"],
      },
      {
        id: "s2-7-e2",
        promptFr: "On lance 2 dés à 6 faces. Combien de résultats possibles y a-t-il au total ?",
        type: "number",
        acceptable: ["36"],
      },
      {
        id: "s2-7-e3",
        promptFr: "Un code PIN contient 4 chiffres (0 à 9) avec répétition autorisée. Combien de codes différents existent ?",
        type: "number",
        acceptable: ["10000"],
      },
      {
        id: "s2-7-e4",
        promptFr: "On veut choisir 2 élèves parmi 5 pour représenter la classe. Combien de façons différentes y a-t-il ? (C(5,2) = ?)",
        type: "number",
        acceptable: ["10"],
      },
      {
        id: "s2-7-e5",
        promptFr: "On tire 2 billes (sans remise) d'un sac de 4 billes distinctes. Combien de paires différentes peut-on obtenir ? (C(4,2) = ?)",
        type: "number",
        acceptable: ["6"],
      },
    ],
  };
