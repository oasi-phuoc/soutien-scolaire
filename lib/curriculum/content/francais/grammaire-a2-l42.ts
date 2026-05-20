import type { GrammarLesson } from "../../grammar-data";

export const A2_GR_L42: GrammarLesson = {
  slug: "a2-gr-l42",
  code: "G.41",
  level: "A2",
  title: "La négation — ne…jamais, ne…rien, ne…personne",
  theory: [
    { type: "heading", text: "Négation totale : jamais, rien, personne" },
    {
      type: "grid",
      headers: ["Négation", "Sens", "Contraire affirmatif"],
      boldFirstCol: true,
      rows: [
        ["{a}ne … jamais{/a}", "à aucun moment", "toujours / souvent / parfois"],
        ["{a}ne … rien{/a}", "aucune chose", "quelque chose / tout"],
        ["{a}ne … personne{/a}", "aucune personne", "quelqu'un / tout le monde"],
      ],
    },
    { type: "heading", text: "Au présent", sub: true, accent: true },
    {
      type: "grid",
      headers: ["Affirmatif", "Négatif"],
      rows: [
        ["Je mange toujours de la viande.", "Je {a}ne{/a} mange {a}jamais{/a} de viande."],
        ["Je fais quelque chose ce soir.", "Je {a}ne{/a} fais {a}rien{/a} ce soir."],
        ["Je connais quelqu'un ici.", "Je {a}ne{/a} connais {a}personne{/a} ici."],
      ],
    },
    { type: "heading", text: "Au passé composé", sub: true, accent: true },
    {
      type: "plain_list",
      items: [
        "{a}jamais et rien{/a} se placent entre l'auxiliaire et le participe.",
        "{a}personne{/a} se place après le participe.",
      ],
    },
    {
      type: "grid",
      headers: ["Négation", "Exemple au passé composé"],
      boldFirstCol: true,
      rows: [
        ["{a}jamais{/a}", "Je {a}n'{/a}ai {a}jamais{/a} voyagé."],
        ["{a}rien{/a}", "Il {a}n'{/a}a {a}rien{/a} dit."],
        ["{a}personne{/a}", "Nous {a}n'{/a}avons vu {a}personne{/a}."],
      ],
    },
    { type: "heading", text: "Rien et Personne comme sujets", sub: true, accent: true },
    {
      type: "plain_list",
      items: [
        "Quand {a}rien{/a} ou {a}personne{/a} est sujet, il se place en tête de phrase, et le verbe garde {a}ne{/a}.",
      ],
    },
    {
      type: "grid",
      headers: ["Structure", "Exemple"],
      rows: [
        ["{a}Rien{/a} + ne + verbe", "{a}Rien{/a} n'est impossible."],
        ["{a}Personne{/a} + ne + verbe", "{a}Personne{/a} ne parle."],
        ["{a}Rien{/a} + n'a + participe", "{a}Rien{/a} n'a changé."],
      ],
    },
    {
      type: "highlight",
      label: "Cumul de négations",
      items: [
        "On peut combiner {a}ne…jamais…rien{/a} ou {a}ne…jamais…personne{/a}.",
        "Je {a}ne{/a} vois {a}jamais{/a} {a}personne{/a} ici.",
        "Il {a}ne{/a} fait {a}jamais{/a} {a}rien{/a}.",
        "En français, le double négatif {a}renforce{/a} la négation (contrairement à l'anglais).",
      ],
    },
  ],
  exercises: [],
};
