import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_S2_3_LESSON: MathSubmoduleLesson = {
    submoduleId: "S2-3",
    submoduleCode: "S2.3",
    theory: {
      title: {
        fr: "Événement complémentaire",
      },
      paragraphs: {
        fr: [
          "L'événement complémentaire de A, noté Ā ou A', est l'événement qui se réalise exactement quand A ne se réalise pas.",
          "Propriété fondamentale : P(A) + P(Ā) = 1, donc P(Ā) = 1 − P(A).",
          "Exemple : si P(pluie demain) = 0,3, alors P(pas de pluie demain) = 1 − 0,3 = 0,7.",
          "Utilité pratique : parfois il est plus facile de calculer P(Ā) et d'en déduire P(A) = 1 − P(Ā). C'est la méthode du complémentaire.",
          "Exemple d'application : P(obtenir au moins un 6 en lançant deux dés) = 1 − P(aucun 6) = 1 − (5/6)² = 1 − 25/36 = 11/36.",
        ],
      },
    },
    exercises: [
      {
        id: "s2-3-e1",
        promptFr: "P(A) = 0,35. Quelle est la probabilité de l'événement complémentaire Ā ?",
        type: "short_text",
        acceptable: ["0,65", "0.65"],
      },
      {
        id: "s2-3-e2",
        promptFr: "On lance un dé. P(obtenir 1 ou 2) = 1/3. Quelle est P(ne pas obtenir 1 ni 2) ?",
        type: "short_text",
        acceptable: ["2/3"],
      },
      {
        id: "s2-3-e3",
        promptFr: "P(Ā) = 3/8. Quelle est la valeur de P(A) ?",
        type: "short_text",
        acceptable: ["5/8"],
      },
      {
        id: "s2-3-e4",
        promptFr: "Complète : P(A) + P(Ā) = ___.",
        type: "number",
        acceptable: ["1"],
      },
      {
        id: "s2-3-e5",
        promptFr: "Un sac contient 4 billes rouges et 6 billes bleues. Quelle est la probabilité de ne PAS tirer une bille bleue ?",
        type: "short_text",
        acceptable: ["4/10", "2/5", "0,4", "0.4", "40%"],
      },
    ],
  };
