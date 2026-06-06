import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_G10_3_LESSON: MathSubmoduleLesson = {
    submoduleId: "G10-3",
    submoduleCode: "G10.3",
    theory: {
      title: {
        fr: "Calculer un rapport trigonométrique",
      },
      paragraphs: {
        fr: [
          "Pour calculer sin(α), cos(α) ou tan(α), identifie d'abord l'angle α dans le triangle rectangle, puis nomme les trois côtés (opposé, adjacent, hypoténuse).",
          "Étape 1 : repère l'hypoténuse (côté le plus long, face à l'angle droit). Étape 2 : identifie le côté opposé à α et le côté adjacent à α.",
          "Étape 3 : applique la formule choisie. Exemple : si opposé = 5 et hypoténuse = 13, alors sin(α) = 5/13.",
          "Pour obtenir la mesure de l'angle à partir d'un rapport, utilise la fonction inverse : α = arcsin(5/13) sur la calculatrice (touche sin⁻¹ ou asin).",
        ],
      },
    },
    exercises: [
      {
        id: "g10-3-e1",
        promptFr: "Dans un triangle rectangle, le côté adjacent à α mesure 12 et l'hypoténuse mesure 13. Calcule cos(α) sous forme de fraction.",
        type: "short_text",
        acceptable: ["12/13"],
      },
      {
        id: "g10-3-e2",
        promptFr: "Le côté opposé à β mesure 8 et l'hypoténuse mesure 17. Calcule sin(β) sous forme de fraction.",
        type: "short_text",
        acceptable: ["8/17"],
      },
      {
        id: "g10-3-e3",
        promptFr: "Le côté opposé à γ mesure 7 et le côté adjacent mesure 24. Calcule tan(γ) sous forme de fraction.",
        type: "short_text",
        acceptable: ["7/24"],
      },
      {
        id: "g10-3-e4",
        promptFr: "Dans un triangle rectangle, opposé = 4 et adjacent = 3. Calcule tan(α).",
        type: "short_text",
        acceptable: ["4/3"],
      },
      {
        id: "g10-3-e5",
        promptFr: "Un triangle rectangle a des côtés 9, 40 et 41. Calcule sin(α) pour l'angle α opposé au côté de longueur 9.",
        type: "short_text",
        acceptable: ["9/41"],
      },
    ],
  };
