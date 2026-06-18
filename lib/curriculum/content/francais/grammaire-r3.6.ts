import type { GrammarLesson } from "../../grammar-data";

export const A1_GR_L09: GrammarLesson = {
  slug: "a1-gr-l09",
  code: "R3.6",
  level: "A1",
  title: "Le futur proche",
  theory: [
    { type: "heading", text: "Le futur proche : aller + infinitif" },
    {
      type: "grid",
      headers: ["Sujet", "ALLER", "Exemple"],
      rows: [
        ["je", "vais", "Je vais partir."],
        ["tu", "vas", "Tu vas manger ?"],
        ["il / elle / on", "va", "Elle va arriver."],
        ["nous", "allons", "Nous allons travailler."],
        ["vous", "allez", "Vous allez voyager."],
        ["ils / elles", "vont", "Ils vont finir."],
      ],
      transHeaders: {
        en: ["Subject", "TO GO", "Example"],
        ar: ["الفاعل", "يذهب", "مثال"],
        fa: ["فاعل", "رفتن", "مثال"],
        ti: ["ተካኢ", "ምኻድ", "ኣብነት"],
        uk: ["Підмет", "ЙТИ", "Приклад"],
      },
      transRows: {
        en: [
          ["I", "am going to", "I am going to leave."],
          ["you", "are going to", "Are you going to eat?"],
          ["he / she / one", "is going to", "She is going to arrive."],
          ["we", "are going to", "We are going to work."],
          ["you (pl.)", "are going to", "You are going to travel."],
          ["they", "are going to", "They are going to finish."],
        ],
      },
    },
    {
      type: "rule",
      text: "Futur proche = aller (présent) + infinitif. Exprime une action proche ou planifiée.",
      examples: [
        { correct: "Ce soir, je vais regarder un film." },
        { correct: "Demain, nous allons visiter Paris." },
        { correct: "Je ne vais pas partir. (négatif)" },
      ],
    },
    {
      type: "note",
      text: "Forme négative : ne + aller + pas + infinitif → «Il ne va pas venir.»",
    },
  ],
  exercises: [],
};
