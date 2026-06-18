import type { ConjLesson } from "../../conjugation-data";

export const A1_CONJ_L29: ConjLesson = {
  slug: "a1-conj-l29",
  code: "R4.4",
  level: "A1",
  title: "Passé composé avec avoir",
  theory: [
    { type: "heading", text: "Le passé composé avec avoir" },
    {
      type: "plain_list",
      items: [
        "Le passé composé exprime une action {a}terminée dans le passé{/a}.",
        "Structure : {a}avoir{/a} (présent) + {a}participe passé{/a}",
      ],
    },
    {
      type: "table",
      tables: [
        {
          verb: "avoir (auxiliaire)",
          accentForms: true,
          rows: [
            { pronoun: "j'", form: "ai" },
            { pronoun: "tu", form: "as" },
            { pronoun: "il / elle / on", form: "a" },
            { pronoun: "nous", form: "avons" },
            { pronoun: "vous", form: "avez" },
            { pronoun: "ils / elles", form: "ont" },
          ],
        },
      ],
    },
    { type: "heading", text: "Formation du participe passé", sub: true, accent: true },
    {
      type: "grid",
      headers: ["Infinitif", "Terminaison", "Participe passé", "Exemple"],
      boldFirstCol: true,
      rows: [
        ["verbes en -er", "-er → {a}-é{/a}", "parler → {a}parlé{/a}", "J'ai parlé."],
        ["verbes en -ir (2e groupe)", "-ir → {a}-i{/a}", "finir → {a}fini{/a}", "Tu as fini."],
        ["verbes en -re", "-re → {a}-u{/a}", "vendre → {a}vendu{/a}", "Il a vendu."],
      ],
    },
    {
      type: "highlight",
      label: "Participes passés irréguliers à mémoriser",
      items: [
        "avoir → {a}eu{/a}    |    être → {a}été{/a}    |    faire → {a}fait{/a}",
        "dire → {a}dit{/a}    |    écrire → {a}écrit{/a}    |    lire → {a}lu{/a}",
        "prendre → {a}pris{/a}    |    voir → {a}vu{/a}    |    vouloir → {a}voulu{/a}",
        "pouvoir → {a}pu{/a}    |    savoir → {a}su{/a}    |    mettre → {a}mis{/a}",
      ],
    },
    { type: "heading", text: "Forme négative", sub: true, accent: true },
    {
      type: "plain_list",
      items: [
        "{a}ne … pas{/a} encadre l'auxiliaire {a}avoir{/a}.",
      ],
    },
    {
      type: "grid",
      headers: ["Affirmatif", "Négatif"],
      rows: [
        ["J'ai mangé.", "Je {a}n'{/a}ai {a}pas{/a} mangé."],
        ["Tu as fini.", "Tu {a}n'{/a}as {a}pas{/a} fini."],
        ["Il a vu.", "Il {a}n'{/a}a {a}pas{/a} vu."],
      ],
    },
    {
      type: "highlight",
      label: "Accord du participe passé avec avoir",
      items: [
        "Avec avoir, le participe passé {a}ne s'accorde PAS{/a} avec le sujet.",
        "Exception : si le COD est placé AVANT le verbe → accord obligatoire.",
        "Exemple : La lettre qu'il a écrite. (que = COD féminin → écrite)",
      ],
      noBulletItems: [0],
    },
  ],
  exercises: [],
};
