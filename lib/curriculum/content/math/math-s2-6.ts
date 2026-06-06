import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_S2_6_LESSON: MathSubmoduleLesson = {
    submoduleId: "S2-6",
    submoduleCode: "S2.6",
    theory: {
      title: {
        fr: "Simulation et fréquences",
      },
      paragraphs: {
        fr: [
          "La simulation consiste à réaliser une expérience aléatoire un grand nombre de fois (réellement ou à l'aide d'un logiciel) pour estimer des probabilités.",
          "Fréquence relative observée : f(A) = (nombre de fois où A s'est réalisé) / (nombre total d'essais). Cette fréquence est une estimation de P(A).",
          "Loi des grands nombres : plus le nombre d'essais est grand, plus la fréquence relative se rapproche de la probabilité théorique.",
          "Exemple : on lance une pièce 100 fois et on obtient 48 fois face. La fréquence observée est 48/100 = 0,48. La probabilité théorique est 0,5 — elles sont proches.",
          "Les simulations peuvent être réalisées avec un dé, des cartes, un tableur (fonction ALEA) ou un logiciel de statistiques.",
        ],
      },
    },
    exercises: [
      {
        id: "s2-6-e1",
        promptFr: "On lance une pièce 200 fois et on obtient 94 fois pile. Quelle est la fréquence relative de 'pile' ?",
        type: "short_text",
        acceptable: ["94/200", "47/100", "0,47", "0.47"],
      },
      {
        id: "s2-6-e2",
        promptFr: "On lance un dé 600 fois et on obtient un 6 exactement 95 fois. La fréquence observée de '6' est-elle proche de la probabilité théorique 1/6 ≈ 0,167 ? Réponds par oui ou non.",
        type: "short_text",
        acceptable: ["oui", "Oui", "OUI"],
      },
      {
        id: "s2-6-e3",
        promptFr: "Après 1000 lancers d'un dé équilibré, environ combien de fois devrait-on obtenir un 3 ?",
        type: "short_text",
        acceptable: ["167", "166", "about 167", "environ 167"],
      },
      {
        id: "s2-6-e4",
        promptFr: "Qu'est-ce que la loi des grands nombres nous dit sur la fréquence relative quand le nombre d'essais augmente ?",
        type: "short_text",
        acceptable: [
          "elle se rapproche de la probabilité théorique",
          "elle converge vers la probabilité",
          "elle tend vers la probabilité",
        ],
      },
      {
        id: "s2-6-e5",
        promptFr: "On observe que sur 500 essais, la fréquence de l'événement A est 0,32. Quelle est ton estimation de P(A) ?",
        type: "short_text",
        acceptable: ["0,32", "0.32", "32%", "32 %"],
      },
    ],
  };
