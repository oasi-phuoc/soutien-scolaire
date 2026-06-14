import type { GrammarLesson } from "../../grammar-data";

export const A1_GR_CEST: GrammarLesson = {
  slug: "a1-gr-cest-il-est",
  code: "R1.9",
  level: "A1",
  title: "C'est ou il est ?",
  theory: [
    { type: "heading", text: "C'est ou il/elle est ?" },
    {
      type: "grid",
      headers: ["C'est + article + nom", "Il / elle est + adjectif ou profession"],
      equalCols: true,
      rows: [
        ["C'est {a}un{/a} médecin.", "Il est {a}médecin{/a}."],
        ["C'est {a}une{/a} étudiante.", "Elle est {a}étudiante{/a}."],
        ["C'est {a}mon{/a} ami.", "Il est {a}sympa{/a}."],
        ["C'est {a}la{/a} voiture de Paul.", "Elle est {a}rouge{/a}."],
      ],
    },
    {
      type: "rule",
      text: "C'est = identifier ou présenter (toujours avec un article ou un pronom).",
      examples: [
        { correct: "C'est un professeur." },
        { correct: "C'est Marie." },
        { correct: "C'est ma sœur." },
      ],
    },
    {
      type: "rule",
      text: "Il / elle est = décrire (adjectif ou profession sans article).",
      examples: [
        { correct: "Il est grand et sympathique." },
        { correct: "Elle est française." },
        { correct: "Il est ingénieur." },
      ],
    },
    {
      type: "note",
      text: "Attention : avec une profession + adjectif, on utilise C'est : C'est un bon médecin. (article + adjectif + nom)",
    },
  ],
  exercises: [
    {
      type: "qcm",
      title: "Exercice 1",
      instruction: "Choisissez C'est ou Il/Elle est.",
      items: [
        { sentence: "___ professeur de français.", choices: ["Il est", "C'est", "Elle est", "C'est un"], correctIdx: 0 },
        { sentence: "___ un ami de Thomas.", choices: ["C'est", "Il est", "Elle est", "C'est un"], correctIdx: 0 },
        { sentence: "___ intelligente et curieuse.", choices: ["Elle est", "C'est", "Il est", "C'est une"], correctIdx: 0 },
        { sentence: "___ la maison de mes parents.", choices: ["C'est", "Il est", "Elle est", "C'est une"], correctIdx: 0 },
        { sentence: "___ une bonne idée !", choices: ["C'est", "Il est", "Elle est", "C'est un"], correctIdx: 0 },
        { sentence: "___ français et il parle bien anglais.", choices: ["Il est", "C'est", "C'est un", "Elle est"], correctIdx: 0 },
      ],
    },
    {
      type: "fill",
      title: "Exercice 2",
      instruction: "Complétez avec C'est, Il est ou Elle est.",
      items: [
        { sentence: "___ (C'est / Il est) mon frère. ___ (C'est / Il est) étudiant.", hint: "identifier puis décrire", answer: "c'est" },
        { sentence: "Regarde cette voiture ! ___ (C'est / Elle est) belle.", hint: "décrire avec adjectif", answer: "elle est" },
        { sentence: "___ (C'est / Il est) un très bon restaurant.", hint: "identifier avec article", answer: "c'est" },
        { sentence: "Ma mère ? ___ (C'est / Elle est) médecin.", hint: "profession sans article", answer: "elle est" },
        { sentence: "___ (C'est / Il est) le directeur de l'école.", hint: "identifier avec article défini", answer: "c'est" },
      ],
    },
    {
      type: "classify",
      title: "Exercice 3",
      instruction: "Classez chaque phrase : identification ou description.",
      categories: ["Identification (C'est)", "Description (Il/Elle est)"],
      items: [
        { word: "C'est une étudiante en médecine.",   categoryIdx: 0 },
        { word: "Il est très patient.",               categoryIdx: 1 },
        { word: "C'est mon livre de grammaire.",      categoryIdx: 0 },
        { word: "Elle est italienne.",                categoryIdx: 1 },
        { word: "C'est le train pour Paris.",         categoryIdx: 0 },
        { word: "Il est architecte.",                 categoryIdx: 1 },
      ],
    },
    {
      type: "word_order",
      title: "Exercice 4",
      instruction: "Remettez les mots dans le bon ordre.",
      items: [
        {
          sentence: "C'est une bonne professeure.",
          words: ["C'est", "une", "bonne", "professeure"],
        },
        {
          sentence: "Il est grand et sportif.",
          words: ["Il", "est", "grand", "et", "sportif"],
        },
        {
          sentence: "C'est la voiture de mon père.",
          words: ["C'est", "la", "voiture", "de", "mon", "père"],
        },
      ],
    },
  ],
};
