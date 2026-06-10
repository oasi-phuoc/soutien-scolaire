import type { GrammarLesson } from "../../grammar-data";

export const A1_GR_L06: GrammarLesson = {
  slug: "a1-gr-l06",
  code: "G1.7",
  level: "A1",
  title: "Être et avoir — révision",
  theory: [
    { type: "heading", text: "ÊTRE ou AVOIR ?" },
    {
      type: "rule",
      text: "ÊTRE + nationalité/profession/adjectif.",
      examples: [
        { correct: "Elle est française." },
        { correct: "Il est professeur." },
        { correct: "Ils sont dynamiques." },
      ],
    },
    {
      type: "rule",
      text: "AVOIR + âge / avoir + nom (avec article) / expressions.",
      examples: [
        { correct: "Elle a 45 ans." },
        { correct: "J'ai cours demain." },
        { correct: "Ils ont un bureau." },
      ],
    },
    {
      type: "table",
      tables: [
        {
          verb: "Expressions avec AVOIR",
          rows: [
            { pronoun: "avoir + âge", form: "avoir 20 ans" },
            { pronoun: "avoir cours", form: "avoir cours le lundi" },
            { pronoun: "avoir rendez-vous", form: "avoir rendez-vous avec quelqu'un" },
            { pronoun: "avoir du temps", form: "être disponible" },
          ],
        },
      ],
    },
  ],
  exercises: [],
};
