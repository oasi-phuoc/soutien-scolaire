import type { ConjLesson } from "../../conjugation-data";

export const A2_CONJ_L06: ConjLesson = {
  slug: "a2-conj-l06",
  code: "RX.24",
  level: "A2",
  title: "Le passé composé — avoir et être",
  theory: [
    { type: "heading", text: "Révision complète du passé composé" },
    {
      type: "plain_list",
      items: [
        "Le passé composé = {a}auxiliaire{/a} (avoir ou être au présent) + {a}participe passé{/a}.",
        "Choix de l'auxiliaire : la règle principale s'apprend par catégorie.",
      ],
    },
    {
      type: "grid",
      headers: ["Catégorie", "Auxiliaire", "Exemples"],
      boldFirstCol: true,
      rows: [
        ["La grande majorité des verbes", "{a}AVOIR{/a}", "manger, finir, prendre, voir…"],
        ["17 verbes de mouvement / état", "{a}ÊTRE{/a}", "aller, venir, partir, rester…"],
        ["Tous les verbes pronominaux", "{a}ÊTRE{/a}", "se lever, se voir, se parler…"],
      ],
    },
    { type: "heading", text: "Accord du participe passé", sub: true, accent: true },
    {
      type: "grid",
      headers: ["Auxiliaire", "Accord", "Exemple"],
      boldFirstCol: true,
      rows: [
        ["{a}avoir{/a}", "Pas d'accord avec le sujet", "Elle a mangé. / Ils ont fini."],
        ["{a}avoir{/a} + COD avant", "Accord avec le COD", "La lettre qu'il a écrit{a}e{/a}."],
        ["{a}être{/a}", "Accord avec le sujet", "Elle est arriv{a}ée{/a}. / Ils sont parti{a}s{/a}."],
      ],
    },
    { type: "heading", text: "Verbes à double auxiliaire", sub: true, accent: true },
    {
      type: "plain_list",
      items: [
        "Ces verbes utilisent {a}avoir{/a} s'ils ont un COD, {a}être{/a} s'ils n'en ont pas :",
        "monter, descendre, sortir, rentrer, entrer, passer, retourner",
      ],
    },
    {
      type: "grid",
      headers: ["Avec COD → avoir", "Sans COD → être"],
      rows: [
        ["J'ai {a}sorti{/a} la poubelle.", "Je suis {a}sorti{/a}."],
        ["Elle a {a}monté{/a} les valises.", "Elle est {a}montée{/a}."],
        ["Il a {a}passé{/a} un examen.", "Il est {a}passé{/a} devant la fenêtre."],
      ],
    },
    { type: "heading", text: "Pronominaux au passé composé", sub: true, accent: true },
    {
      type: "grid",
      headers: ["Affirmatif", "Négatif"],
      rows: [
        ["Elle {a}s'est levée{/a}.", "Elle {a}ne s'est pas levée{/a}."],
        ["Ils {a}se sont vus{/a}.", "Ils {a}ne se sont pas vus{/a}."],
        ["Nous {a}nous sommes parlé{/a}.", "(COI → pas d'accord)"],
      ],
    },
    {
      type: "highlight",
      label: "Marqueurs temporels du passé composé",
      items: [
        "hier, avant-hier, la semaine dernière, l'année dernière",
        "il y a + durée : Il y a deux ans, je suis allé en France.",
        "soudain, tout à coup, enfin, puis (actions ponctuelles)",
      ],
    },
  ],
  exercises: [],
};
