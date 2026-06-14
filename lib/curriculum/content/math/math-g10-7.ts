import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_G10_7_LESSON: MathSubmoduleLesson = {
    submoduleId: "G10-7",
    submoduleCode: "G10.7",
    theory: {
      title: {
        fr: "Construire un diagramme en secteurs",
      },
      paragraphs: {
        fr: [
          "Étapes : (1) calculer le total ; (2) calculer l'angle de chaque secteur : α = (valeur / total) × 360° ; (3) tracer un cercle ; (4) dessiner les secteurs avec le rapporteur en partant d'un rayon horizontal.",
          "Exemple : 3 catégories : A=10, B=25, C=15. Total=50. Angles : A=72°, B=180°, C=108°. Vérification : 72+180+108=360° ✓.",
          "Chaque secteur est coloré différemment et légendé.",
          "Utilisation préférable quand on veut montrer des parts d'un tout.",
        ],
      },
    },
    exercises: [
      { id: "g9-7-e1", promptFr: "Total = 100, valeur A = 40. Angle du secteur A = ?°", type: "number", acceptable: ["144"] },
      { id: "g9-7-e2", promptFr: "Total = 40, valeur B = 10. Angle B = ?°", type: "number", acceptable: ["90"] },
      { id: "g9-7-e3", promptFr: "La somme des angles de tous les secteurs vaut ?°", type: "number", acceptable: ["360"] },
      { id: "g9-7-e4", promptFr: "Un secteur de 180° représente quelle fraction ?", type: "short_text", acceptable: ["1/2", "50%"] },
      { id: "g9-7-e5", promptFr: "Quel outil utilise-t-on pour tracer les angles des secteurs ?", type: "short_text", acceptable: ["rapporteur"] },
    ],
  };
