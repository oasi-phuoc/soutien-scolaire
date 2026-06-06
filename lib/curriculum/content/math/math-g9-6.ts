import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_G9_6_LESSON: MathSubmoduleLesson = {
    submoduleId: "G9-6",
    submoduleCode: "G9.6",
    theory: {
      title: {
        fr: "Construire un diagramme en bâtons",
      },
      paragraphs: {
        fr: [
          "Étapes : (1) tracer les deux axes et les graduer ; (2) choisir l'échelle (la hauteur max de l'axe y doit dépasser la plus grande valeur) ; (3) dessiner une barre pour chaque catégorie ; (4) nommer les axes et donner un titre.",
          "L'axe horizontal liste les catégories (noms, mois, classes…). L'axe vertical indique les valeurs (fréquences, nombres…).",
          "Les barres ne se touchent pas entre elles (contrairement à l'histogramme). Elles sont de largeur constante.",
          "Exemple : notes de 5 élèves : 12, 15, 9, 18, 11. Axe y de 0 à 20 avec échelle 2.",
        ],
      },
    },
    exercises: [
      { id: "g9-6-e1", promptFr: "Pour un diagramme en bâtons, les barres doivent-elles se toucher ? (oui/non)", type: "short_text", acceptable: ["non"] },
      { id: "g9-6-e2", promptFr: "Données : lundi 5, mardi 8, mercredi 3. Quelle hauteur de barre pour mardi ?", type: "number", acceptable: ["8"] },
      { id: "g9-6-e3", promptFr: "L'axe vertical d'un diagramme en bâtons commence toujours à ?", type: "number", acceptable: ["0"] },
      { id: "g9-6-e4", promptFr: "Si la plus grande valeur est 35, l'axe y doit aller jusqu'à au moins ?", type: "number", acceptable: ["35", "36", "40"] },
      { id: "g9-6-e5", promptFr: "Faut-il donner un titre à un diagramme ? (oui/non)", type: "short_text", acceptable: ["oui"] },
    ],
  };
