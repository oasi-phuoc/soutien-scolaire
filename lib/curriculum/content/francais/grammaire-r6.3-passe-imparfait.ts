import type { GrammarLesson } from "../../grammar-data";

export const A2_GR_PASSE_OU_IMPARFAIT: GrammarLesson = {
  slug: "a2-gr-passe-compose-ou-imparfait",
  code: "R6.3",
  level: "A2",
  title: "Passé composé ou imparfait ?",
  theory: [
    { type: "heading", text: "Passé composé ou imparfait ?" },
    {
      type: "grid",
      headers: ["Imparfait", "Passé composé"],
      rows: [
        ["habitude ou répétition", "événement ponctuel"],
        ["description et contexte", "action principale"],
        ["action en cours", "action qui interrompt"],
        ["Avant, je marchais chaque jour.", "Hier, j'ai marché dix kilomètres."],
      ],
      equalCols: true,
    },
    {
      type: "highlight",
      label: "Simultanéité",
      items: [
        "Deux actions longues et simultanées se mettent souvent à l'imparfait.",
        "Pendant que je {a}cuisinais{/a}, elle {a}lisait{/a}.",
      ],
    },
    {
      type: "highlight",
      label: "Être en train de à l'imparfait",
      items: [
        "Pour insister sur une action en cours : être à l'imparfait + en train de + infinitif.",
        "J'{a}étais en train de dormir{/a} quand le téléphone a sonné.",
      ],
    },
  ],
  exercises: [],
};
