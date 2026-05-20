import type { GrammarLesson } from "../../grammar-data";

export const A2_GR_L19: GrammarLesson = {
  slug: "a2-gr-l19",
  code: "G.39",
  level: "A2",
  title: "Les pronoms relatifs qui et que",
  theory: [
    { type: "heading", text: "Les pronoms relatifs : relier deux phrases" },
    {
      type: "plain_list",
      items: [
        "Un pronom relatif permet de {a}relier deux phrases{/a} en évitant une répétition.",
        "Les deux principaux : {a}qui{/a} (sujet) et {a}que / qu'{/a} (objet direct).",
      ],
    },
    {
      type: "grid",
      headers: ["Pronom", "Fonction", "Ce qu'il suit directement"],
      boldFirstCol: true,
      rows: [
        ["{a}qui{/a}", "sujet de la proposition relative", "qui + {a}verbe{/a} directement"],
        ["{a}que / qu'{/a}", "objet direct de la proposition relative", "que + {a}sujet + verbe{/a}"],
      ],
    },
    { type: "heading", text: "QUI — sujet", sub: true, accent: true },
    {
      type: "grid",
      headers: ["Deux phrases", "→ Phrase avec QUI"],
      rows: [
        ["J'ai un ami. Cet ami parle japonais.", "J'ai un ami {a}qui{/a} parle japonais."],
        ["C'est une école. Cette école est connue.", "C'est une école {a}qui{/a} est connue."],
        ["Je cherche un appartement. Il est proche du centre.", "Je cherche un appartement {a}qui{/a} est proche du centre."],
      ],
    },
    { type: "heading", text: "QUE / QU' — objet direct", sub: true, accent: true },
    {
      type: "grid",
      headers: ["Deux phrases", "→ Phrase avec QUE"],
      rows: [
        ["C'est un film. J'aime ce film.", "C'est un film {a}que{/a} j'aime."],
        ["Voici la règle. Nous apprenons cette règle.", "Voici la règle {a}que{/a} nous apprenons."],
        ["C'est un livre. Il lit ce livre.", "C'est un livre {a}qu'{/a}il lit."],
      ],
    },
    {
      type: "highlight",
      label: "Comment choisir : qui ou que ?",
      items: [
        "{a}QUI{/a} → le pronom est {a}sujet{/a} : le verbe suivant n'a pas de sujet explicite.",
        "{a}QUE{/a} → le pronom est {a}objet{/a} : le verbe suivant a déjà son sujet.",
        "Astuce : si après le pronom vient directement un verbe conjugué → {a}QUI{/a}.",
        "Astuce : si après le pronom vient un sujet puis un verbe → {a}QUE{/a}.",
      ],
    },
    { type: "heading", text: "Accord du participe avec QUE au passé composé", sub: true, accent: true },
    {
      type: "grid",
      headers: ["Exemple", "Accord"],
      rows: [
        ["La lettre qu'il a écrit{a}e{/a}.", "que = la lettre (fém.) → écrite"],
        ["Les films que j'ai regard{a}és{/a}.", "que = les films (masc. plur.) → regardés"],
        ["Les filles qu'il a invit{a}ées{/a}.", "que = les filles (fém. plur.) → invitées"],
      ],
    },
  ],
  exercises: [],
};
