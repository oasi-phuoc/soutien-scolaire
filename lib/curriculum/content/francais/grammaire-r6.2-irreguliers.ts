import type { GrammarLesson } from "../../grammar-data";

export const A2_GR_IMPARFAIT_IRREGULIERS: GrammarLesson = {
  slug: "a2-gr-imparfait-irreguliers",
  code: "R6.2",
  level: "A2",
  title: "Les verbes irréguliers à l'imparfait",
  theory: [
    { type: "heading", text: "Les verbes irréguliers à l'imparfait" },
    {
      type: "plain_list",
      items: [
        "La plupart des verbes utilisent la base de {a}nous{/a} au présent, même quand leur infinitif est irrégulier.",
        "Le seul verbe avec une base totalement irrégulière est {a}être{/a} : ét-.",
      ],
    },
    {
      type: "grid",
      headers: ["Verbe", "Base", "Exemple"],
      rows: [
        ["être", "ét-", "j'étais, nous étions"],
        ["avoir", "av-", "j'avais, ils avaient"],
        ["faire", "fais-", "tu faisais"],
        ["aller", "all-", "elle allait"],
        ["venir", "ven-", "vous veniez"],
        ["prendre", "pren-", "nous prenions"],
      ],
      boldFirstCol: true,
    },
    {
      type: "highlight",
      label: "Orthographe",
      items: [
        "Les verbes en -ger gardent le e devant a : je mangeais, ils voyageaient.",
        "Les verbes en -cer prennent ç devant a : je commençais, ils avançaient.",
      ],
    },
  ],
  exercises: [],
};
