import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_G11_4_LESSON: MathSubmoduleLesson = {
    submoduleId: "G11-4",
    submoduleCode: "G11.4",
    theory: {
      title: {
        fr: "Angle à partir du rapport",
      },
      paragraphs: {
        fr: [
          "Si tu connais un rapport trigonométrique (sin, cos ou tan), tu peux retrouver l'angle correspondant grâce aux fonctions inverses.",
          "Fonctions inverses : arcsin (sin⁻¹), arccos (cos⁻¹), arctan (tan⁻¹). Sur la calculatrice, appuie sur [2nd] ou [SHIFT] puis sur sin, cos ou tan.",
          "Exemple : sin(α) = 0,6 → α = arcsin(0,6) ≈ 36,9°. Vérifie que ta calculatrice est en mode degrés (DEG).",
          "Remarque importante : dans un triangle, la somme des angles est 180°. Donc si tu trouves un angle aigu α, l'autre angle aigu vaut 90° − α.",
          "Angles courants à mémoriser : sin(30°) = 0,5 · cos(30°) = √3/2 ≈ 0,866 · tan(45°) = 1 · sin(60°) = √3/2.",
        ],
      },
    },
    exercises: [
      {
        id: "g10-4-e1",
        promptFr: "sin(α) = 0,5. Sans calculatrice, donne la valeur de α en degrés.",
        type: "number",
        acceptable: ["30"],
      },
      {
        id: "g10-4-e2",
        promptFr: "tan(β) = 1. Quelle est la valeur de β en degrés ?",
        type: "number",
        acceptable: ["45"],
      },
      {
        id: "g10-4-e3",
        promptFr: "cos(γ) = 0,5. Quelle est la valeur de γ en degrés ?",
        type: "number",
        acceptable: ["60"],
      },
      {
        id: "g10-4-e4",
        promptFr: "Dans un triangle rectangle, les deux angles aigus sont α et β. Si α = 37°, quelle est la valeur de β ?",
        type: "number",
        acceptable: ["53"],
      },
      {
        id: "g10-4-e5",
        promptFr: "sin(α) = 0,866. Donne la valeur approximative de α (à 1° près).",
        type: "number",
        acceptable: ["60"],
      },
    ],
  };
