import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_S1_1_LESSON: MathSubmoduleLesson = {
    submoduleId: "S1-1",
    submoduleCode: "S1.1",
    theory: {
      title: {
        fr: "Collecte de données et tableaux",
      },
      paragraphs: {
        fr: [
          "Les statistiques commencent par la collecte de données : enquête, mesure, observation. Chaque valeur relevée s'appelle une donnée ou une observation.",
          "Un tableau de données recense les valeurs d'une variable statistique pour une population ou un échantillon. Chaque ligne correspond à un individu.",
          "Tableau de fréquences : on regroupe les valeurs identiques et on compte leur effectif (combien de fois cette valeur apparaît).",
          "Fréquence relative = effectif de la valeur / effectif total. Elle s'exprime en fraction, en décimal ou en pourcentage. La somme des fréquences relatives = 1 (ou 100 %).",
          "Vocabulaire clé : population (ensemble étudié), individu (élément), variable (caractère observé), effectif (nombre d'occurrences), modalité (valeur possible de la variable).",
        ],
      },
    },
    exercises: [
      {
        id: "s1-1-e1",
        promptFr: "Une classe de 30 élèves a rendu des copies. Les notes sont : 10 élèves ont eu 12, 8 ont eu 14, 12 ont eu 16. Quel est l'effectif total ?",
        type: "number",
        acceptable: ["30"],
      },
      {
        id: "s1-1-e2",
        promptFr: "Avec les données ci-dessus, quelle est la fréquence relative de la note 14 ? (Donne le résultat en fraction irréductible.)",
        type: "short_text",
        acceptable: ["8/30", "4/15"],
      },
      {
        id: "s1-1-e3",
        promptFr: "On observe les couleurs préférées de 20 élèves : 8 bleu, 7 rouge, 5 vert. La fréquence relative du bleu est …",
        type: "short_text",
        acceptable: ["8/20", "2/5", "0,4", "0.4", "40%", "40 %"],
      },
      {
        id: "s1-1-e4",
        promptFr: "Complète la phrase : dans un tableau de fréquences, la somme de toutes les fréquences relatives est égale à ___.",
        type: "number",
        acceptable: ["1"],
      },
      {
        id: "s1-1-e5",
        promptFr: "Quel terme désigne l'ensemble de tous les individus étudiés dans une étude statistique ?",
        type: "short_text",
        acceptable: ["population", "la population"],
      },
    ],
  };
