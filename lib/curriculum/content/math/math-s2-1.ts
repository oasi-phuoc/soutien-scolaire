import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_S2_1_LESSON: MathSubmoduleLesson = {
    submoduleId: "S2-1",
    submoduleCode: "S2.1",
    theory: {
      title: {
        fr: "Expérience aléatoire et univers",
      },
      paragraphs: {
        fr: [
          "Une expérience aléatoire est une expérience dont le résultat ne peut pas être prédit avec certitude à l'avance, même si l'on connaît toutes les conditions.",
          "L'univers (ou espace échantillonnal), noté Ω, est l'ensemble de tous les résultats possibles de l'expérience.",
          "Un événement est un sous-ensemble de Ω. L'événement certain = Ω (toujours réalisé). L'événement impossible = ∅ (jamais réalisé).",
          "Exemples d'univers : lancer un dé à 6 faces → Ω = {1, 2, 3, 4, 5, 6}. Lancer une pièce → Ω = {pile, face}. Tirer une carte dans un jeu de 52 → Ω a 52 éléments.",
          "Un événement élémentaire est composé d'un seul résultat. Un événement composé en regroupe plusieurs.",
        ],
      },
    },
    exercises: [
      {
        id: "s2-1-e1",
        promptFr: "On lance un dé à 6 faces. Écris l'univers Ω (liste tous les résultats possibles entre accolades).",
        type: "short_text",
        acceptable: ["{1,2,3,4,5,6}", "{1, 2, 3, 4, 5, 6}"],
      },
      {
        id: "s2-1-e2",
        promptFr: "On lance une pièce. Combien d'éléments contient l'univers Ω ?",
        type: "number",
        acceptable: ["2"],
      },
      {
        id: "s2-1-e3",
        promptFr: "On tire une carte dans un jeu de 52 cartes. Combien d'éléments contient Ω ?",
        type: "number",
        acceptable: ["52"],
      },
      {
        id: "s2-1-e4",
        promptFr: "L'événement 'obtenir un 7 en lançant un dé à 6 faces' est-il impossible ou certain ?",
        type: "short_text",
        acceptable: ["impossible", "Impossible"],
      },
      {
        id: "s2-1-e5",
        promptFr: "L'événement 'obtenir un nombre entre 1 et 6 en lançant un dé' est-il impossible, certain ou ni l'un ni l'autre ?",
        type: "short_text",
        acceptable: ["certain", "Certain"],
      },
    ],
  };
