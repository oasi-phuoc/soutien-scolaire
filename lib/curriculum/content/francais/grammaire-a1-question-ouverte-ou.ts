import type { GrammarLesson } from "../../grammar-data";

/** Unité 30 — La question ouverte : où, quand, comment, combien, pourquoi (G3.10) */
export const A1_GR_QUESTION_OUVERTE_OU: GrammarLesson = {
  slug: "a1-gr-question-ouverte-ou",
  code: "G3.10",
  level: "A1",
  title: "La question ouverte : où, quand, comment, combien, pourquoi",
  theory: [
    {
      type: "heading",
      text: "Utilisation",
    },
    {
      type: "plain_list",
      items: [
        "On utilise {a}où{/a}, {a}quand{/a}, {a}comment{/a}, {a}combien{/a}, {a}pourquoi{/a} pour poser une {a}question ouverte{/a} sur :",
        "le lieu → Tu habites où ?",
        "le moment → Quand est-ce que tu arrives ?",
        "la manière → Comment est-ce que tu vas au bureau ?",
        "la quantité → Tu parles combien de langues ?",
        "la cause → Pourquoi est-ce que tu étudies le français ?",
        "La réponse donne des informations précises.",
      ],
      allBullets: true,
    },
    {
      type: "heading",
      text: "Formes",
    },
    {
      type: "plain_list",
      items: [
        "On utilise ces mots seuls ou avec {a}est-ce que{/a}. La place des mots est importante.",
      ],
      noBulletItems: [0],
    },
    {
      type: "grid",
      headers: ["", "Intonation", "Avec est-ce que"],
      boldFirstCol: true,
      rows: [
        ["où", "Vous allez où ?", "Où est-ce que vous allez ?"],
        ["quand", "Tu arrives quand ?", "Quand est-ce que tu arrives ?"],
        ["comment", "Tu voyages comment ?", "Comment est-ce que tu voyages ?"],
        ["combien", "Ça coûte combien ?", "Combien est-ce que ça coûte ?"],
        ["combien de/d'", "Il y a combien de personnes ?", "Combien de personnes est-ce qu'il y a ?"],
        ["pourquoi", "Pourquoi vous marchez vite ?", "Pourquoi est-ce que vous marchez vite ?"],
      ],
    },
    {
      type: "note",
      text: "{a}Pourquoi{/a} est toujours au début de la phrase.",
    },
    {
      type: "heading",
      text: "Prononciation et orthographe",
    },
    {
      type: "plain_list",
      items: [
        "Élision : {a}que{/a} → {a}qu'{/a} devant une voyelle ou un h muet. → Où est-ce qu'il travaille ?",
        "Avec {a}quand{/a}, on fait la liaison : on prononce [t]. → Quand est-ce qu'il commence ?",
      ],
      allBullets: true,
    },
  ],
  exercises: [
    {
      type: "qcm",
      title: "Question ouverte",
      instruction: "Choisissez le mot interrogatif correct.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "Vous voulez aller ___ ?", choices: ["où", "quand", "comment"], correctIdx: 0 },
        { sentence: "___ est-ce que tu arrives ?", choices: ["Quand", "Où", "Combien"], correctIdx: 0 },
        { sentence: "___ est-ce que tu vas au bureau ?", choices: ["Comment", "Où", "Quand"], correctIdx: 0 },
        { sentence: "Tu parles ___ de langues ?", choices: ["combien", "comment", "où"], correctIdx: 0 },
        { sentence: "___ est-ce que tu étudies le français ?", choices: ["Pourquoi", "Quand", "Où"], correctIdx: 0 },
        { sentence: "___ vous marchez vite ?", choices: ["Pourquoi", "Vous pourquoi", "Marchez pourquoi"], correctIdx: 0 },
        { sentence: "___ est-ce que vous allez ?", choices: ["Où", "Quand", "Comment"], correctIdx: 0 },
        { sentence: "Ça coûte ___ ?", choices: ["combien", "comment", "où"], correctIdx: 0 },
        { sentence: "Où est-ce ___ il travaille ?", choices: ["qu'", "que", "qui"], correctIdx: 0 },
        { sentence: "La réponse à une question ouverte donne ___ .", choices: ["des informations précises", "seulement oui ou non", "rien"], correctIdx: 0 },
      ],
    },
    {
      type: "fill",
      title: "Complétez",
      instruction: "Écrivez où, quand, comment, combien ou pourquoi.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "Tu habites ___ ?", hint: "lieu", answer: "où" },
        { sentence: "___ est-ce que tu arrives ?", hint: "moment", answer: "Quand" },
        { sentence: "___ est-ce que tu voyages ?", hint: "manière", answer: "Comment" },
        { sentence: "Ça coûte ___ ?", hint: "quantité", answer: "combien" },
        { sentence: "Il y a ___ de personnes ?", hint: "quantité", answer: "combien" },
        { sentence: "___ est-ce que tu étudies le français ?", hint: "cause", answer: "Pourquoi" },
        { sentence: "Vous allez ___ ?", hint: "lieu", answer: "où" },
        { sentence: "Tu arrives ___ ?", hint: "moment", answer: "quand" },
        { sentence: "Tu voyages ___ ?", hint: "manière", answer: "comment" },
        { sentence: "Où est-ce ___ il travaille ?", hint: "élision", answer: "qu'" },
      ],
    },
  ],
};
