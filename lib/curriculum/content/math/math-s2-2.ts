import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_S2_2_LESSON: MathSubmoduleLesson = {
    submoduleId: "S2-2",
    submoduleCode: "S2.2",
    theory: {
      title: {
        fr: "Probabilité classique",
      },
      paragraphs: {
        fr: [
          "La probabilité classique s'applique quand tous les résultats possibles sont équiprobables (même chance de se produire).",
          "Formule : P(A) = (nombre de résultats favorables à A) / (nombre total de résultats possibles) = Card(A) / Card(Ω).",
          "Exemples : P(obtenir 3 avec un dé) = 1/6. P(obtenir un nombre pair) = 3/6 = 1/2. P(obtenir ≥ 5) = 2/6 = 1/3.",
          "Propriétés : 0 ≤ P(A) ≤ 1 pour tout événement A. P(∅) = 0. P(Ω) = 1.",
          "Si P(A) = 0, l'événement est impossible. Si P(A) = 1, il est certain. Plus P(A) est proche de 1, plus l'événement est probable.",
        ],
      },
    },
    exercises: [
      {
        id: "s2-2-e1",
        promptFr: "On lance un dé à 6 faces équilibré. Quelle est la probabilité d'obtenir un 4 ?",
        type: "short_text",
        acceptable: ["1/6"],
      },
      {
        id: "s2-2-e2",
        promptFr: "Quelle est la probabilité d'obtenir un nombre pair en lançant un dé à 6 faces ?",
        type: "short_text",
        acceptable: ["1/2", "3/6", "0,5", "0.5"],
      },
      {
        id: "s2-2-e3",
        promptFr: "On tire une carte au hasard dans un jeu de 52 cartes. Quelle est la probabilité de tirer un as ?",
        type: "short_text",
        acceptable: ["4/52", "1/13"],
      },
      {
        id: "s2-2-e4",
        promptFr: "Un sac contient 3 billes rouges et 7 billes bleues. Quelle est la probabilité de tirer une bille rouge ?",
        type: "short_text",
        acceptable: ["3/10", "0,3", "0.3", "30%"],
      },
      {
        id: "s2-2-e5",
        promptFr: "La probabilité d'un événement A est 0,4. Quelle est la probabilité que A ne se réalise pas ?",
        type: "short_text",
        acceptable: ["0,6", "0.6", "3/5", "60%"],
      },
    ],
  };
