import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_S1_7_LESSON: MathSubmoduleLesson = {
  submoduleId: "S1-7",
  submoduleCode: "S1.7",
  theory: {
    title: {
      fr: "Lecture critique des statistiques",
    },
    paragraphs: {
      fr: [
        "Les statistiques peuvent être utilisées pour informer honnêtement ou pour induire en erreur. Savoir lire un graphique de manière critique est une compétence essentielle.",
        "Pièges fréquents dans les graphiques : axe vertical qui ne commence pas à 0 (exagère les différences), échelle non uniforme, titre trompeur, échantillon non représentatif.",
        "Exemple : un graphique montrant les ventes passe de 100 à 110. Si l'axe Y commence à 95, la barre paraît doubler — alors que la hausse réelle n'est que de 10 %.",
        "Questions à se poser : Qui a collecté les données ? Quelle est la taille de l'échantillon ? Les données sont-elles récentes ? Y a-t-il un biais de sélection ? Les axes sont-ils bien étiquetés ?",
        "Corrélation ≠ causalité : deux variables peuvent évoluer ensemble sans que l'une cause l'autre. Exemple : le nombre de pirates a diminué et la température mondiale a augmenté, mais il n'y a pas de lien causal.",
      ],
    },
  },
  exercises: [
    {
      id: "s1-7-e1",
      promptFr: "Un graphique montre l'axe Y commençant à 90 au lieu de 0. Quel est l'effet sur la perception des différences entre les barres ?",
      type: "short_text",
      acceptable: ["elles paraissent plus grandes", "exagérées", "amplifiées", "les différences semblent plus grandes"],
    },
    {
      id: "s1-7-e2",
      promptFr: "Un sondage est réalisé auprès de 10 personnes dans une ville de 100 000 habitants. Ce résultat est-il fiable ? Réponds par oui ou non.",
      type: "short_text",
      acceptable: ["non", "Non", "NON"],
    },
    {
      id: "s1-7-e3",
      promptFr: "On observe que les ventes de glaces et les noyades augmentent ensemble en été. Peut-on dire que les glaces causent les noyades ?",
      type: "short_text",
      acceptable: ["non", "Non", "NON"],
    },
    {
      id: "s1-7-e4",
      promptFr: "Complète la phrase : 'Deux variables qui évoluent ensemble ont une ___, mais pas nécessairement une relation de cause à effet.'",
      type: "short_text",
      acceptable: ["corrélation", "une corrélation"],
    },
    {
      id: "s1-7-e5",
      promptFr: "Un titre de graphique dit 'Les ventes ont explosé !' mais l'augmentation est de 2 %. Ce graphique est-il objectif ? Réponds par oui ou non.",
      type: "short_text",
      acceptable: ["non", "Non", "NON"],
    },
  ],
};
