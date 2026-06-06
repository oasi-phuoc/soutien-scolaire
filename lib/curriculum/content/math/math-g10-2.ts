import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_G10_2_LESSON: MathSubmoduleLesson = {
    submoduleId: "G10-2",
    submoduleCode: "G10.2",
    theory: {
      title: {
        fr: "sin, cos, tan",
      },
      paragraphs: {
        fr: [
          "Dans un triangle rectangle, pour un angle aigu α donné, on définit trois rapports à partir des côtés : sinus, cosinus et tangente.",
          "Nomme les côtés par rapport à l'angle α : le côté opposé (en face de α), le côté adjacent (à côté de α, mais pas l'hypoténuse) et l'hypoténuse (le plus long).",
          "sin(α) = côté opposé / hypoténuse · cos(α) = côté adjacent / hypoténuse · tan(α) = côté opposé / côté adjacent.",
          "Moyen mnémotechnique SOH-CAH-TOA : Sinus = Opposé / Hypoténuse, Cosinus = Adjacent / Hypoténuse, Tangente = Opposé / Adjacent.",
          "Ces rapports ne dépendent que de l'angle, pas de la taille du triangle : tous les triangles rectangles ayant le même angle α ont le même sin(α).",
        ],
      },
    },
    exercises: [
      {
        id: "g10-2-e1",
        promptFr: "Dans un triangle rectangle, le côté opposé à α mesure 3 et l'hypoténuse mesure 5. Quelle est la valeur de sin(α) ? (Écris une fraction irréductible.)",
        type: "short_text",
        acceptable: ["3/5", "0.6"],
      },
      {
        id: "g10-2-e2",
        promptFr: "Pour le même triangle (opposé = 3, hypoténuse = 5, adjacent = 4), quelle est la valeur de cos(α) ?",
        type: "short_text",
        acceptable: ["4/5", "0.8"],
      },
      {
        id: "g10-2-e3",
        promptFr: "Pour le même triangle, quelle est la valeur de tan(α) ?",
        type: "short_text",
        acceptable: ["3/4", "0.75"],
      },
      {
        id: "g10-2-e4",
        promptFr: "Quel rapport trigonométrique correspond à SOH (Sinus = Opposé / ___) ?",
        type: "short_text",
        acceptable: ["hypoténuse", "Hypoténuse", "hypotenuse"],
      },
      {
        id: "g10-2-e5",
        promptFr: "Si sin(30°) = 0,5, quelle est la valeur de cos(60°) ?",
        type: "short_text",
        acceptable: ["0,5", "0.5", "1/2"],
      },
    ],
  };
