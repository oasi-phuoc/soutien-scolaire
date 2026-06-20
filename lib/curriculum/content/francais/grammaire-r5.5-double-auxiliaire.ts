import type { GrammarLesson } from "../../grammar-data";

export const A1_GR_DOUBLE_AUXILIAIRE: GrammarLesson = {
  slug: "a1-gr-verbes-double-auxiliaire",
  code: "R5.5",
  level: "A1",
  title: "Les verbes à double auxiliaire",
  theory: [
    { type: "heading", text: "Les verbes à double auxiliaire" },
    {
      type: "plain_list",
      items: [
        "Certains verbes se conjuguent avec {a}être{/a} ou {a}avoir{/a} au passé composé selon leur construction.",
        "Principaux verbes : sortir, rentrer, entrer, passer, monter, descendre et retourner.",
      ],
    },
    {
      type: "highlight",
      label: "Règle",
      items: [
        "Sans complément d'objet direct (COD) : auxiliaire {a}être{/a}.",
        "Avec un COD : auxiliaire {a}avoir{/a}.",
      ],
    },
    {
      type: "grid",
      headers: ["Sans COD : être", "Avec COD : avoir"],
      rows: [
        ["Elle est sortie.", "Elle a sorti la poubelle."],
        ["Ils sont montés.", "Ils ont monté les valises."],
        ["Nous sommes descendus.", "Nous avons descendu l'escalier."],
        ["Il est retourné chez lui.", "Il a retourné la feuille."],
      ],
      equalCols: true,
    },
    {
      type: "highlight",
      label: "Accord",
      items: [
        "Avec {a}être{/a}, le participe passé s'accorde avec le sujet : elle est rentrée, ils sont sortis.",
        "Avec {a}avoir{/a}, il ne s'accorde généralement pas avec le sujet : elle a sorti les clés.",
      ],
    },
  ],
  exercises: [],
};
