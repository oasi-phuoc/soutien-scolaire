import type { GrammarLesson } from "../../grammar-data";

export const A1_GR_L23: GrammarLesson = {
  slug: "a1-gr-l23",
  code: "G.21",
  level: "A1",
  title: "Les adjectifs qualificatifs",
  theory: [
    { type: "heading", text: "Accord en genre" },
    {
      type: "plain_list",
      items: [
        "L'adjectif s'accorde en {a}genre{/a} et en {a}nombre{/a} avec le nom.",
      ],
    },
    {
      type: "grid",
      headers: ["Masculin", "Féminin", "Règle"],
      rows: [
        ["grand", "grand{a}e{/a}", "+ e"],
        ["petit", "petit{a}e{/a}", "+ e"],
        ["français", "français{a}e{/a}", "+ e"],
        ["sympa", "sympa", "invariable (déjà en -a)"],
        ["moderne", "moderne", "invariable (déjà en -e)"],
        ["beau", "bell{a}e{/a}", "irrégulier"],
        ["nouveau", "nouvell{a}e{/a}", "irrégulier"],
        ["vieux", "vieil{a}le{/a}", "irrégulier"],
      ],
    },
    { type: "heading", text: "Accord en nombre", sub: true },
    {
      type: "grid",
      headers: ["Singulier", "Pluriel", "Règle"],
      rows: [
        ["grand", "grand{a}s{/a}", "+ s"],
        ["grande", "grande{a}s{/a}", "+ s"],
        ["beau", "beau{a}x{/a}", "-eau → -eaux"],
        ["nouveau", "nouveau{a}x{/a}", "-eau → -eaux"],
        ["gros", "gros", "déjà en -s : invariable"],
      ],
    },
    { type: "heading", text: "Place de l'adjectif", sub: true },
    {
      type: "plain_list",
      items: [
        "En général, l'adjectif se place {a}après{/a} le nom.",
        "Certains adjectifs courts et courants se placent {a}avant{/a} le nom ({a}BAGS{/a}).",
      ],
    },
    {
      type: "highlight",
      label: "BAGS — adjectifs avant le nom",
      items: [
        "{a}B{/a}eauté : beau, joli",
        "{a}A{/a}ge : vieux, jeune, nouveau",
        "{a}G{/a}randeur : grand, petit, gros, long",
        "{a}S{/a}entiment/bonté : bon, mauvais, gentil",
      ],
    },
    {
      type: "grid",
      headers: ["Avant le nom (BAGS)", "Après le nom (autres)"],
      rows: [
        ["un {a}beau{/a} film", "un film {a}intéressant{/a}"],
        ["une {a}petite{/a} ville", "une ville {a}moderne{/a}"],
        ["un {a}bon{/a} restaurant", "un restaurant {a}français{/a}"],
        ["un {a}jeune{/a} homme", "un homme {a}sympa{/a}"],
      ],
    },
  ],
  exercises: [],
};
