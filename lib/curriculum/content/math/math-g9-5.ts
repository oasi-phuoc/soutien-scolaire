import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_G9_5_LESSON: MathSubmoduleLesson = {
    submoduleId: "G9-5",
    submoduleCode: "G9.5",
    theory: {
      title: {
        fr: "Courbes",
      },
      paragraphs: {
        fr: [
          "Une courbe (graphique en ligne) relie des points pour montrer l'évolution d'une valeur dans le temps ou selon une variable.",
          "Lecture : identifier la valeur y pour chaque x ; trouver les maxima, minima, moments de croissance/décroissance.",
          "Construction : (1) placer les points ; (2) les relier dans l'ordre par des segments droits ou une courbe lisse.",
          "Utilisation : températures, cours boursiers, croissance d'une plante, vitesse d'un véhicule.',",
        ],
      },
    },
    exercises: [
      { id: "g9-5-e1", promptFr: "Un graphique montre T(°C) en fonction du temps. Comment appelle-t-on cette représentation ?", type: "short_text", acceptable: ["courbe", "graphique en ligne"] },
      { id: "g9-5-e2", promptFr: "Si la courbe monte de gauche à droite, la valeur est-elle croissante ou décroissante ?", type: "short_text", acceptable: ["croissante"] },
      { id: "g9-5-e3", promptFr: "Un maximum sur une courbe est un point où la valeur est ? (la plus haute/la plus basse)", type: "short_text", acceptable: ["la plus haute"] },
      { id: "g9-5-e4", promptFr: "Pour tracer une courbe, on commence par faire quoi ?", type: "short_text", acceptable: ["un tableau de valeurs", "placer les points"] },
      { id: "g9-5-e5", promptFr: "Une courbe horizontale indique que la valeur est constante ? (oui/non)", type: "short_text", acceptable: ["oui"] },
    ],
  };
