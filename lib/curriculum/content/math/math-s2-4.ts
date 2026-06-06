import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_S2_4_LESSON: MathSubmoduleLesson = {
    submoduleId: "S2-4",
    submoduleCode: "S2.4",
    theory: {
      title: {
        fr: "Événements impossibles et certains",
      },
      paragraphs: {
        fr: [
          "Un événement impossible est un événement qui ne peut jamais se réaliser. Sa probabilité est P(∅) = 0.",
          "Un événement certain est un événement qui se réalise toujours quelles que soient les conditions. Sa probabilité est P(Ω) = 1.",
          "Entre ces extrêmes, 0 < P(A) < 1 pour tout événement ni impossible ni certain.",
          "Exemples : P(obtenir un 7 avec un dé à 6 faces) = 0 (impossible). P(obtenir un nombre entre 1 et 6 avec un dé à 6 faces) = 1 (certain).",
          "Sur une droite des probabilités : 0 (impossible) — 0,5 (aussi probable qu'improbable) — 1 (certain). Plus P(A) est proche de 1, plus l'événement est probable.",
        ],
      },
    },
    exercises: [
      {
        id: "s2-4-e1",
        promptFr: "Quelle est la probabilité de l'événement impossible ?",
        type: "number",
        acceptable: ["0"],
      },
      {
        id: "s2-4-e2",
        promptFr: "Quelle est la probabilité de l'événement certain ?",
        type: "number",
        acceptable: ["1"],
      },
      {
        id: "s2-4-e3",
        promptFr: "On tire une boule d'un sac contenant uniquement 5 boules rouges. Quelle est la probabilité de tirer une boule verte ?",
        type: "number",
        acceptable: ["0"],
      },
      {
        id: "s2-4-e4",
        promptFr: "On tire une boule d'un sac contenant uniquement 5 boules rouges. Quelle est la probabilité de tirer une boule rouge ?",
        type: "number",
        acceptable: ["1"],
      },
      {
        id: "s2-4-e5",
        promptFr: "P(A) = 0,75. Cet événement est-il impossible, certain ou ni l'un ni l'autre ?",
        type: "short_text",
        acceptable: ["ni l'un ni l'autre", "ni impossible ni certain", "aucun des deux"],
      },
    ],
  };
