import type { GrammarLesson } from "../../grammar-data";

export const A1_GR_L17: GrammarLesson = {
  slug: "a1-gr-l17",
  code: "G.16",
  level: "A1",
  title: "Il y a et les prépositions dans la maison",
  theory: [
    { type: "heading", text: "Il y a / Il n'y a pas de" },
    {
      type: "plain_list",
      items: [
        "{a}Il y a{/a} + nom → signale l'existence de quelque chose.",
        "{a}Il n'y a pas de{/a} + nom → indique l'absence.",
      ],
    },
    {
      type: "grid",
      headers: ["Affirmatif", "Négatif"],
      rows: [
        ["Il y a {a}un{/a} cinéma.", "Il n'y a {a}pas de{/a} cinéma."],
        ["Il y a {a}une{/a} école.", "Il n'y a {a}pas d'{/a}école."],
        ["Il y a {a}des{/a} restaurants.", "Il n'y a {a}pas de{/a} restaurants."],
      ],
    },
    { type: "heading", text: "Les pièces de la maison", sub: true, accent: true },
    {
      type: "grid",
      headers: ["Pièce", "Article"],
      boldFirstCol: true,
      rows: [
        ["{a}le salon{/a}", "la pièce principale"],
        ["{a}la cuisine{/a}", "pour cuisiner"],
        ["{a}la chambre{/a}", "pour dormir"],
        ["{a}la salle de bains{/a}", "pour se laver"],
        ["{a}les toilettes{/a}", "WC"],
        ["{a}le couloir{/a}", "passage entre les pièces"],
        ["{a}le balcon{/a}", "espace extérieur"],
      ],
    },
    { type: "heading", text: "Localiser dans la maison", sub: true },
    {
      type: "grid",
      headers: ["Préposition", "Exemple"],
      boldFirstCol: true,
      rows: [
        ["{a}dans{/a}", "Le chat est {a}dans{/a} la chambre."],
        ["{a}sur{/a}", "Le livre est {a}sur{/a} le bureau."],
        ["{a}sous{/a}", "Les chaussures sont {a}sous{/a} le lit."],
        ["{a}devant{/a}", "La table est {a}devant{/a} la fenêtre."],
        ["{a}derrière{/a}", "Le canapé est {a}derrière{/a} la porte."],
        ["{a}à côté de{/a}", "La lampe est {a}à côté du{/a} lit."],
        ["{a}en face de{/a}", "La télé est {a}en face du{/a} canapé."],
      ],
    },
    {
      type: "highlight",
      label: "Exemples de description",
      items: [
        "Dans mon appartement, il y a trois pièces.",
        "Il n'y a pas de balcon, mais il y a une grande cuisine.",
        "Le canapé est devant la télévision.",
      ],
    },
  ],
  exercises: [],
};
