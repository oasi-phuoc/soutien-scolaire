import type { GrammarLesson } from "../../grammar-data";

export const A1_GR_L07: GrammarLesson = {
  slug: "a1-gr-l07",
  code: "R3.4",
  level: "A1",
  title: "C'est / Il est",
  theory: [
    { type: "heading", text: "C'est ou Il/Elle est ?" },
    {
      type: "grid",
      headers: ["Forme", "Usage", "Exemple"],
      boldFirstCol: true,
      rows: [
        ["C'est", "article + nom → identifier", "C'est le professeur."],
        ["Ce sont", "article + nom pluriel → identifier", "Ce sont mes amis."],
        ["Il/Elle est", "adjectif ou profession → caractériser", "Il est très sympa."],
        ["Ils/Elles sont", "adjectif ou profession pluriel → caractériser", "Elles sont françaises."],
      ],
      transHeaders: {
        en: ["Form", "Usage", "Example"],
        ar: ["الصيغة", "الاستخدام", "مثال"],
        fa: ["فرم", "کاربرد", "مثال"],
        ti: ["ቅርጺ", "ኣጠቃቅማ", "ኣብነት"],
        uk: ["Форма", "Вживання", "Приклад"],
      },
      transRows: {
        en: [
          ["C'est", "article + noun → identify", "He is the teacher."],
          ["Ce sont", "article + noun (plural) → identify", "They are my friends."],
          ["Il/Elle est", "adjective or profession → characterise", "He is very nice."],
          ["Ils/Elles sont", "adjective or profession (plural) → characterise", "They are French."],
        ],
      },
    },
    {
      type: "rule",
      text: "Après «il/elle est» + profession : PAS d'article ! → «Il est médecin» (et non «Il est un médecin»).",
      examples: [
        { correct: "C'est un médecin. (identification avec article)" },
        { correct: "Il est médecin. (profession, sans article)" },
        { correct: "C'est Julia. Elle est très sympa." },
      ],
    },
    {
      type: "note",
      text: "C'est / Ce sont = on identifie. Il/Elle est = on caractérise.",
    },
  ],
  exercises: [],
};
