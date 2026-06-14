import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_G10_8_LESSON: MathSubmoduleLesson = {
    submoduleId: "G10-8",
    submoduleCode: "G10.8",
    theory: {
      title: {
        fr: "Interpréter un graphique",
      },
      paragraphs: {
        fr: [
          "Interpréter un graphique consiste à extraire des informations pertinentes : valeurs précises, tendances, comparaisons, anomalies.",
          "Questions type : Quelle est la valeur maximale ? Quand la valeur est-elle minimale ? La tendance est-elle à la hausse ou à la baisse ? Quel écart entre deux valeurs ?",
          "Attention aux échelles trompeuses : un axe y ne commençant pas à 0 peut exagérer les différences. Un axe compressé peut masquer des variations importantes.",
          "Conclusion : toujours contextualiser les chiffres (date, unités, source des données).",
        ],
      },
    },
    exercises: [
      { id: "g9-8-e1", promptFr: "Un graphique montre des ventes en hausse chaque mois. La tendance est ?", type: "short_text", acceptable: ["croissante", "à la hausse"] },
      { id: "g9-8-e2", promptFr: "Sur un camembert, le plus grand secteur représente la catégorie ?", type: "short_text", acceptable: ["la plus fréquente", "la plus grande"] },
      { id: "g9-8-e3", promptFr: "Un axe y commençant à 50 au lieu de 0 risque de quel problème ?", type: "short_text", acceptable: ["exagérer les différences", "tromper le lecteur"] },
      { id: "g9-8-e4", promptFr: "Sur un graphique de températures, le minimum en été est moins intéressant qu'en ?", type: "short_text", acceptable: ["hiver"] },
      { id: "g9-8-e5", promptFr: "Un graphique sans titre ni unité est-il complet ? (oui/non)", type: "short_text", acceptable: ["non"] },
    ],
  };
