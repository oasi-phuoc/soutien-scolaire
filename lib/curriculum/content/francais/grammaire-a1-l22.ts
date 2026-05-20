import type { GrammarLesson } from "../../grammar-data";

export const A1_GR_L22: GrammarLesson = {
  slug: "a1-gr-l22",
  code: "G.20",
  level: "A1",
  title: "La fréquence",
  theory: [
    { type: "heading", text: "Les adverbes de fréquence" },
    {
      type: "plain_list",
      items: [
        "Les adverbes de fréquence indiquent {a}combien de fois{/a} une action se produit.",
        "Ils se placent généralement {a}après le verbe{/a}.",
      ],
    },
    {
      type: "grid",
      headers: ["Adverbe", "Fréquence", "Exemple"],
      boldFirstCol: true,
      rows: [
        ["{a}toujours{/a}", "100%", "Il mange toujours à midi."],
        ["{a}souvent{/a}", "~75%", "Elle va souvent au cinéma."],
        ["{a}parfois / quelquefois{/a}", "~50%", "Nous mangeons parfois au restaurant."],
        ["{a}rarement{/a}", "~25%", "Je prends rarement le bus."],
        ["{a}ne … jamais{/a}", "0%", "Il ne fume jamais."],
      ],
    },
    { type: "heading", text: "Place de l'adverbe", sub: true },
    {
      type: "grid",
      headers: ["Temps", "Position", "Exemple"],
      boldFirstCol: true,
      rows: [
        ["Présent", "après le verbe", "Je travaille {a}souvent{/a} le soir."],
        ["Passé composé", "entre auxiliaire et participe", "J'ai {a}souvent{/a} voyagé."],
      ],
    },
    {
      type: "highlight",
      label: "Ne … jamais",
      items: [
        "{a}jamais{/a} s'utilise avec {a}ne{/a} pour la négation totale.",
        "Je {a}ne{/a} fais {a}jamais{/a} de sport.",
        "Elle {a}n'{/a}est {a}jamais{/a} en retard.",
      ],
      noBulletItems: [0],
    },
    {
      type: "highlight",
      label: "Expressions de fréquence",
      items: [
        "{a}tous les jours{/a} / {a}chaque jour{/a} → every day",
        "{a}une fois par semaine{/a} → once a week",
        "{a}deux fois par mois{/a} → twice a month",
        "{a}de temps en temps{/a} → from time to time",
      ],
    },
  ],
  exercises: [],
};
