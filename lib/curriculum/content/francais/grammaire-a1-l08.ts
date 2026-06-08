import type { GrammarLesson } from "../../grammar-data";

export const A1_GR_L08: GrammarLesson = {
  slug: "a1-gr-l08",
  code: "G.18",
  level: "A1",
  title: "L'interrogation avec quel(le)(s)",
  theory: [
    { type: "heading", text: "Quel, Quelle, Quels, Quelles" },
    {
      type: "grid",
      headers: ["", "Singulier", "Pluriel"],
      boldFirstCol: true,
      rows: [
        ["Masculin", "Quel", "Quels"],
        ["Féminin", "Quelle", "Quelles"],
      ],
      transHeaders: {
        en: ["", "Singular", "Plural"],
        ar: ["", "المفرد", "الجمع"],
        fa: ["", "مفرد", "جمع"],
        ti: ["", "ነጠላ", "ብዙሓት"],
        uk: ["", "Однина", "Множина"],
      },
      transRows: {
        en: [["Masculine", "Which/What", "Which/What"], ["Feminine", "Which/What", "Which/What"]],
      },
    },
    {
      type: "note",
      text: "Tous se prononcent [kɛl] — même prononciation !",
    },
    {
      type: "rule",
      text: "Quel(le)(s) + est/sont + nom ?",
      examples: [
        { correct: "Quel est ton prénom ?" },
        { correct: "Quelle est ta nationalité ?" },
        { correct: "Quels sont tes objectifs ?" },
        { correct: "Quelles sont tes langues ?" },
      ],
    },
    {
      type: "rule",
      text: "Quel(le)(s) + nom (sans verbe) ?",
      examples: [
        { correct: "Quelle heure est-il ?" },
        { correct: "Quel cours tu préfères ?" },
      ],
    },
  ],
  exercises: [],
};
