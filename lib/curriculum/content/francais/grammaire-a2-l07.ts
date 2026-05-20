import type { GrammarLesson } from "../../grammar-data";

export const A2_GR_L07: GrammarLesson = {
  slug: "a2-gr-l07",
  code: "G.32",
  level: "A2",
  title: "L'interrogation (questions fermées)",
  theory: [
    { type: "heading", text: "Les 3 formes de questions fermées" },
    {
      type: "plain_list",
      items: [
        "Une question {a}fermée{/a} a pour réponse oui / non / si.",
        "Il existe 3 structures, du plus familier au plus formel.",
      ],
    },
    {
      type: "grid",
      headers: ["Structure", "Registre", "Exemple"],
      boldFirstCol: true,
      rows: [
        ["{a}Intonation montante{/a}", "familier / oral", "Tu parles français {a}↗{/a} ?"],
        ["{a}Est-ce que{/a} + sujet + verbe", "neutre / courant", "Est-ce que tu parles français ?"],
        ["{a}Inversion{/a} verbe-sujet", "formel / écrit", "Parlez-vous français ?"],
      ],
    },
    { type: "heading", text: "Est-ce que (forme la plus courante)", sub: true, accent: true },
    {
      type: "grid",
      headers: ["Affirmatif", "Question avec est-ce que"],
      rows: [
        ["Tu aimes le café.", "{a}Est-ce que{/a} tu aimes le café ?"],
        ["Il est libre.", "{a}Est-ce qu'{/a}il est libre ?"],
        ["Vous avez le temps.", "{a}Est-ce que{/a} vous avez le temps ?"],
        ["Elles sont arrivées.", "{a}Est-ce qu'{/a}elles sont arrivées ?"],
      ],
    },
    { type: "heading", text: "L'inversion verbe-sujet (formel)", sub: true, accent: true },
    {
      type: "grid",
      headers: ["Affirmatif", "Inversion"],
      rows: [
        ["Vous parlez français.", "Parlez-{a}vous{/a} français ?"],
        ["Il comprend.", "Comprend-{a}il{/a} ?"],
        ["Elle va venir.", "Va-{a}t-elle{/a} venir ? (t euphonique)"],
        ["On peut entrer.", "Peut-{a}on{/a} entrer ?"],
      ],
    },
    {
      type: "highlight",
      label: "Le -t- euphonique",
      items: [
        "Quand le verbe se termine par une {a}voyelle{/a} + il / elle / on, on insère {a}-t-{/a}.",
        "va → va-{a}t{/a}-il / va-{a}t{/a}-elle / va-{a}t{/a}-on",
        "a → a-{a}t{/a}-il (avoir) / aime-{a}t{/a}-il (aimer)",
        "Cette règle s'applique uniquement à l'inversion.",
      ],
      noBulletItems: [0],
    },
    { type: "heading", text: "Questions avec un nom sujet (forme formelle)", sub: true, accent: true },
    {
      type: "grid",
      headers: ["Exemple", "Structure"],
      rows: [
        ["Marie vient-{a}elle{/a} demain ?", "Nom + verbe + pronom reprise-t-il/elle"],
        ["Paul a-{a}t-il{/a} appelé ?", "Nom + verbe + -t- + pronom"],
        ["Les enfants sont-{a}ils{/a} prêts ?", "Nom pluriel + verbe + pronom pluriel"],
      ],
    },
  ],
  exercises: [],
};
