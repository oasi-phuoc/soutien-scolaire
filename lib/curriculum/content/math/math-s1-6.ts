import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_S1_6_LESSON: MathSubmoduleLesson = {
  submoduleId: "S1-6",
  submoduleCode: "S1.6",
  theory: {
    title: {
      fr: "Diagrammes statistiques",
    },
    paragraphs: {
      fr: [
        "Un diagramme représente visuellement des données statistiques. Le choix du type de diagramme dépend de la nature des données et du message à transmettre.",
        "Diagramme en bâtons (barres) : pour des données discrètes ou qualitatives. L'axe vertical montre les effectifs ou fréquences, l'axe horizontal les modalités. Les barres ne se touchent pas si les données sont qualitatives.",
        "Diagramme en secteurs (camembert) : représente des parties d'un tout. Chaque secteur correspond à une modalité ; son angle = (effectif / total) × 360°.",
        "Histogramme : pour des données continues ou regroupées en classes. Les barres sont contiguës et les aires sont proportionnelles aux fréquences.",
        "Courbe des effectifs cumulés : utile pour lire la médiane et les quartiles graphiquement.",
      ],
    },
  },
  exercises: [
    {
      id: "s1-6-e1",
      promptFr: "Un secteur d'un diagramme circulaire représente 25 % du total. Quel est son angle en degrés ?",
      type: "number",
      acceptable: ["90"],
    },
    {
      id: "s1-6-e2",
      promptFr: "Dans un diagramme en bâtons, la barre de la valeur 14 a une hauteur de 8. Il y a 40 élèves au total. Quelle est la fréquence relative de 14 ? (en %)",
      type: "number",
      acceptable: ["20"],
    },
    {
      id: "s1-6-e3",
      promptFr: "Quel type de diagramme utilise des barres contiguës (collées) pour représenter des données continues ?",
      type: "short_text",
      acceptable: ["histogramme", "l'histogramme"],
    },
    {
      id: "s1-6-e4",
      promptFr: "Dans un diagramme circulaire, un secteur a un angle de 72°. Quelle fraction du total représente-t-il ?",
      type: "short_text",
      acceptable: ["1/5", "72/360", "0,2", "0.2", "20%"],
    },
    {
      id: "s1-6-e5",
      promptFr: "Une série a 50 valeurs. 15 valeurs égalent 10. Quel angle (en degrés) représente la valeur 10 dans un diagramme en secteurs ?",
      type: "number",
      acceptable: ["108"],
    },
  ],
};
