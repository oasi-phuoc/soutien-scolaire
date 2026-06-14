import type { GrammarLesson } from "../../grammar-data";

export const A1_GR_L20: GrammarLesson = {
  slug: "a1-gr-l20",
  code: "R3.7",
  level: "A1",
  title: "L'impératif",
  theory: [
    { type: "heading", text: "L'impératif : donner un ordre ou un conseil" },
    {
      type: "grid",
      headers: ["Personne", "Présent → Impératif", "Exemple"],
      rows: [
        ["tu", "-s supprimé pour -ER", "Tu parles → Parle !"],
        ["nous", "= présent", "Nous parlons → Parlons !"],
        ["vous", "= présent", "Vous parlez → Parlez !"],
      ],
      transHeaders: {
        en: ["Person", "Present → Imperative", "Example"],
        ar: ["الشخص", "المضارع → الأمر", "مثال"],
        fa: ["شخص", "حال → امر", "مثال"],
        ti: ["ሰብ", "ሕጂ → ኣዝዝ", "ኣብነት"],
        uk: ["Особа", "Теперішній → Наказовий", "Приклад"],
      },
    },
    {
      type: "grid",
      headers: ["", "parler", "finir", "prendre", "aller"],
      rows: [
        ["tu", "Parle !", "Finis !", "Prends !", "Va !"],
        ["nous", "Parlons !", "Finissons !", "Prenons !", "Allons !"],
        ["vous", "Parlez !", "Finissez !", "Prenez !", "Allez !"],
      ],
    },
    {
      type: "rule",
      text: "Négatif : ne + verbe + pas → «Ne parle pas !» / «Ne mangez pas !»",
      examples: [
        { correct: "Viens à partir de 20 h !" },
        { correct: "Ne venez pas à 19 h !" },
        { correct: "Prenons un taxi !" },
      ],
    },
    {
      type: "note",
      text: "Attention : ÊTRE → Sois / Soyons / Soyez — AVOIR → Aie / Ayons / Ayez",
    },
  ],
  exercises: [],
};
