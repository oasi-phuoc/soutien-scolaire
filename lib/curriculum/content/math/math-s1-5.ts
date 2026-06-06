import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_S1_5_LESSON: MathSubmoduleLesson = {
  submoduleId: "S1-5",
  submoduleCode: "S1.5",
  theory: {
    title: {
      fr: "Étendue",
    },
    paragraphs: {
      fr: [
        "L'étendue est une mesure de dispersion : elle indique l'écart entre la valeur maximale et la valeur minimale d'une série de données.",
        "Formule : étendue = valeur max − valeur min.",
        "Exemple : série 3, 7, 12, 5, 19, 1 → max = 19, min = 1 → étendue = 19 − 1 = 18.",
        "Une grande étendue indique que les données sont très dispersées. Une petite étendue indique qu'elles sont regroupées autour d'une valeur centrale.",
        "Limite de l'étendue : elle ne dépend que de deux valeurs (max et min) et ignore toutes les autres. Si les valeurs extrêmes sont des anomalies, l'étendue peut être trompeuse.",
      ],
    },
  },
  exercises: [
    {
      id: "s1-5-e1",
      promptFr: "Calcule l'étendue de la série : 5, 12, 3, 18, 7.",
      type: "number",
      acceptable: ["15"],
    },
    {
      id: "s1-5-e2",
      promptFr: "Les températures minimales d'une semaine sont : −3, 0, 2, 5, 1, −1, 4. Calcule l'étendue.",
      type: "number",
      acceptable: ["8"],
    },
    {
      id: "s1-5-e3",
      promptFr: "Une série a une étendue de 12 et un minimum de 7. Quel est son maximum ?",
      type: "number",
      acceptable: ["19"],
    },
    {
      id: "s1-5-e4",
      promptFr: "Deux séries ont la même moyenne mais des étendues différentes (5 et 30). Laquelle est la plus dispersée ?",
      type: "short_text",
      acceptable: ["celle avec une étendue de 30", "étendue 30", "30"],
    },
    {
      id: "s1-5-e5",
      promptFr: "La série des notes est : 8, 10, 12, 14, 16, 18. Quelle est l'étendue ?",
      type: "number",
      acceptable: ["10"],
    },
  ],
};
