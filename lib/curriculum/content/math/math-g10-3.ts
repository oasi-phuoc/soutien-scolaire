import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_G10_3_LESSON: MathSubmoduleLesson = {
    submoduleId: "G10-3",
    submoduleCode: "G10.3",
    theory: {
      title: {
        fr: "Diagramme en bâtons",
      },
      paragraphs: {
        fr: [
          "Un diagramme en bâtons (ou en barres) représente des données par des rectangles (barres) dont la hauteur (ou longueur) est proportionnelle à la valeur.",
          "Lecture : la hauteur de chaque barre correspond à la valeur de la catégorie. On lit la valeur sur l'axe vertical.",
          "Construction : (1) choisir l'échelle de l'axe y ; (2) dessiner des barres de largeur égale pour chaque catégorie ; (3) annoter les axes.",
          "Utilisation : comparer des catégories distinctes (notes, effectifs, ventes par mois…).",
        ],
      },
    },
    exercises: [
      { id: "g9-3-e1", promptFr: "Dans un diagramme en bâtons, la hauteur d'une barre représente quoi ?", type: "short_text", acceptable: ["la valeur", "la fréquence", "le nombre"] },
      { id: "g9-3-e2", promptFr: "Les barres d'un diagramme en bâtons doivent-elles avoir la même largeur ? (oui/non)", type: "short_text", acceptable: ["oui"] },
      { id: "g9-3-e3", promptFr: "Un diagramme en bâtons est utile pour comparer des catégories ? (oui/non)", type: "short_text", acceptable: ["oui"] },
      { id: "g9-3-e4", promptFr: "Sur l'axe vertical on lit quelle information ?", type: "short_text", acceptable: ["la valeur", "la fréquence", "les données"] },
      { id: "g9-3-e5", promptFr: "5 élèves ont eu A, 8 ont eu B, 3 ont eu C. Quelle note a la barre la plus haute ?", type: "short_text", acceptable: ["B"] },
    ],
  };
