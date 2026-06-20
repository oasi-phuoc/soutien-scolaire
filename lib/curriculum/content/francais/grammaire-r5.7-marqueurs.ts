import type { GrammarLesson } from "../../grammar-data";

export const A1_GR_MARQUEURS_CHRONOLOGIQUES: GrammarLesson = {
  slug: "a1-gr-marqueurs-chronologiques",
  code: "R5.7",
  level: "A1",
  title: "Les marqueurs chronologiques",
  theory: [
    { type: "heading", text: "Les marqueurs chronologiques" },
    {
      type: "grid",
      headers: ["Marqueur", "Emploi", "Exemple"],
      rows: [
        ["depuis", "action commencée dans le passé et toujours en cours", "J'habite ici depuis 2020."],
        ["il y a", "moment situé dans le passé", "Je suis arrivé il y a deux jours."],
        ["pendant", "durée complète", "J'ai étudié pendant trois heures."],
        ["dans", "moment situé dans le futur", "Je pars dans dix minutes."],
        ["pour", "durée prévue", "Je pars pour une semaine."],
      ],
      boldFirstCol: true,
    },
    {
      type: "highlight",
      label: "À retenir",
      items: [
        "{a}Depuis{/a} répond à « depuis quand ? » et continue jusqu'au présent.",
        "{a}Il y a{/a} regarde vers le passé ; {a}dans{/a} regarde vers le futur.",
        "{a}Pendant{/a} indique une durée réalisée ; {a}pour{/a} une durée prévue.",
      ],
    },
  ],
  exercises: [],
};
