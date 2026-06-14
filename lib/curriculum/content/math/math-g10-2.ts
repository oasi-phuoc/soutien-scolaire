import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_G10_2_LESSON: MathSubmoduleLesson = {
    submoduleId: "G10-2",
    submoduleCode: "G10.2",
    theory: {
      title: {
        fr: "Lire et placer des points",
      },
      paragraphs: {
        fr: [
          "Pour lire les coordonnées d'un point : partir du point, descendre (ou monter) jusqu'à l'axe Ox → abscisse ; aller à gauche (ou droite) jusqu'à Oy → ordonnée.",
          "Pour placer un point (a ; b) : partir de O, aller de a unités sur Ox, puis de b unités parallèlement à Oy.",
          "Exemple : placer A(−2 ; 3). Aller à −2 sur Ox, puis monter de 3 → A est en haut à gauche de O.",
          "Mnémotechnique : « On va d'abord en couloir (x) puis en escalier (y) ».",
        ],
      },
    },
    exercises: [
      { id: "g9-2-e1", promptFr: "Place le point A(3 ; 5). Quelle est son abscisse ?", type: "number", acceptable: ["3"] },
      { id: "g9-2-e2", promptFr: "Le point B(0 ; 4) est-il sur l'axe Oy ? (oui/non)", type: "short_text", acceptable: ["oui"] },
      { id: "g9-2-e3", promptFr: "Le point C(−3 ; 0) est-il sur l'axe Ox ? (oui/non)", type: "short_text", acceptable: ["oui"] },
      { id: "g9-2-e4", promptFr: "Pour placer D(2 ; −3) : on va 2 vers la droite puis ? vers le bas.", type: "number", acceptable: ["3"] },
      { id: "g9-2-e5", promptFr: "L'axe Ox est-il horizontal ou vertical ?", type: "short_text", acceptable: ["horizontal"] },
    ],
  };
