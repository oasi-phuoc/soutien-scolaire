import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_G11_5_LESSON: MathSubmoduleLesson = {
    submoduleId: "G11-5",
    submoduleCode: "G11.5",
    theory: {
      title: {
        fr: "Calculer un côté inconnu",
      },
      paragraphs: {
        fr: [
          "Si tu connais un angle aigu α et au moins un côté d'un triangle rectangle, tu peux calculer n'importe quel autre côté à l'aide de sin, cos ou tan.",
          "Méthode : écris la formule trigonométrique reliant l'angle connu aux deux côtés (dont l'un est inconnu), puis isole le côté inconnu.",
          "Exemple 1 — chercher l'opposé : sin(30°) = opposé / 10 → opposé = 10 × sin(30°) = 10 × 0,5 = 5.",
          "Exemple 2 — chercher l'adjacent : cos(40°) = adjacent / 8 → adjacent = 8 × cos(40°) ≈ 8 × 0,766 ≈ 6,13.",
          "Exemple 3 — chercher l'hypoténuse : sin(35°) = 6 / hypoténuse → hypoténuse = 6 / sin(35°) ≈ 6 / 0,574 ≈ 10,45.",
        ],
      },
    },
    exercises: [
      {
        id: "g10-5-e1",
        promptFr: "Dans un triangle rectangle, α = 30° et l'hypoténuse = 10. Calcule le côté opposé à α.",
        type: "number",
        acceptable: ["5"],
      },
      {
        id: "g10-5-e2",
        promptFr: "α = 45° et l'hypoténuse = 14. Calcule le côté adjacent (arrondi à 2 décimales). (cos 45° ≈ 0,707)",
        type: "short_text",
        acceptable: ["9,90", "9.90", "9,9", "9.9"],
      },
      {
        id: "g10-5-e3",
        promptFr: "α = 60° et le côté adjacent = 6. Calcule l'hypoténuse. (cos 60° = 0,5)",
        type: "number",
        acceptable: ["12"],
      },
      {
        id: "g10-5-e4",
        promptFr: "α = 30° et le côté opposé = 4. Calcule l'hypoténuse. (sin 30° = 0,5)",
        type: "number",
        acceptable: ["8"],
      },
      {
        id: "g10-5-e5",
        promptFr: "α = 45° et le côté opposé = 5. Calcule le côté adjacent.",
        type: "number",
        acceptable: ["5"],
      },
    ],
  };
