import type { GrammarLesson } from "../../grammar-data";

/** Unité 11 — Masculin et féminin des noms (personnes) (G2.1) */
export const A1_GR_GENRE_PERSONNES: GrammarLesson = {
  slug: "a1-gr-genre-personnes",
  code: "G2.1",
  level: "A1",
  title: "Le masculin et le féminin des noms (personnes)",
  theory: [
    {
      type: "heading",
      text: "Utilisation",
    },
    {
      type: "plain_list",
      items: [
        "Pour les personnes, les noms indiquent souvent une profession (un ingénieur), un lien de famille (le fils) ou une nationalité (une Espagnole). Ils sont masculins ou féminins.",
        "Un nom s'emploie toujours avec un déterminant (un, la, des, ce, mon…). Le déterminant indique le genre : {a}un{/a} homme, {a}une{/a} femme.",
      ],
      allBullets: true,
    },
    {
      type: "heading",
      text: "Formation du féminin : cas général",
    },
    {
      type: "plain_list",
      items: [
        "Au masculin, les noms ont des terminaisons très variées : un employé, un célibataire, un Espagnol, un commerçant, un Suédois…",
        "En général, nom féminin = nom masculin + {a}e{/a}. → un employé / une employée ; un ami / une amie ; un ingénieur / une ingénieure ; un étudiant / une étudiante ; un Espagnol / une Espagnole.",
        "Quand le nom masculin se termine déjà par {a}e{/a}, le féminin ne change pas. → un journaliste / une journaliste ; un fonctionnaire / une fonctionnaire.",
      ],
      allBullets: true,
    },
    {
      type: "note",
      text: "Exception : enfant a la même forme au masculin et au féminin — un enfant / une enfant.",
    },
    {
      type: "heading",
      text: "Prononciation et orthographe",
    },
    {
      type: "plain_list",
      items: [
        "Même prononciation quand le masculin se termine par une voyelle, ou par {a}l{/a} / {a}eur{/a}. → un employé / une employée ; un ami / une amie ; un Espagnol / une Espagnole ; un ingénieur / une ingénieure.",
        "Prononciation différente quand le masculin se termine par une consonne (le e final fait entendre la consonne). → un Anglais / une Anglaise ; un assistant / une assistante ; un Mexicain / une Mexicaine.",
        "Les noms de nationalité prennent une majuscule. → un Irlandais.",
      ],
      allBullets: true,
    },
  ],
  exercises: [
    {
      type: "qcm",
      title: "Masculin / féminin (personnes)",
      instruction: "Choisissez la forme correcte.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "___ étudiante lit un livre.", choices: ["Une", "Un", "Le", "Des"], correctIdx: 0 },
        { sentence: "C'est ___ ami.", choices: ["un", "une", "la", "des"], correctIdx: 0 },
        { sentence: "C'est ___ amie.", choices: ["une", "un", "le", "des"], correctIdx: 0 },
        { sentence: "un employé → une ___", choices: ["employée", "employé", "employéee", "employée "], correctIdx: 0 },
        { sentence: "un Espagnol → une ___", choices: ["Espagnole", "Espagnol", "Espagnolle", "espagnole"], correctIdx: 0 },
        { sentence: "un journaliste → une ___", choices: ["journaliste", "journalistée", "journalista", "journalistes"], correctIdx: 0 },
        { sentence: "un enfant → une ___", choices: ["enfant", "enfante", "enfants", "enfantee"], correctIdx: 0 },
        { sentence: "un ingénieur → une ___", choices: ["ingénieure", "ingénieur", "ingénieuree", "ingénieure "], correctIdx: 0 },
        { sentence: "un Anglais → une ___", choices: ["Anglaise", "Anglais", "Anglaisses", "anglaise"], correctIdx: 0 },
        { sentence: "___ homme travaille ici.", choices: ["Un", "Une", "La", "Des"], correctIdx: 0 },
      ],
    },
    {
      type: "fill",
      title: "Formez le féminin",
      instruction: "Écrivez la forme féminine du nom.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "un ami → une ___", hint: "+ e", answer: "amie" },
        { sentence: "un étudiant → une ___", hint: "+ e", answer: "étudiante" },
        { sentence: "un employé → une ___", hint: "+ e", answer: "employée" },
        { sentence: "un Espagnol → une ___", hint: "+ e", answer: "Espagnole" },
        { sentence: "un ingénieur → une ___", hint: "+ e", answer: "ingénieure" },
        { sentence: "un journaliste → une ___", hint: "identique", answer: "journaliste" },
        { sentence: "un enfant → une ___", hint: "identique", answer: "enfant" },
        { sentence: "un Anglais → une ___", hint: "+ e", answer: "Anglaise" },
        { sentence: "un assistant → une ___", hint: "+ e", answer: "assistante" },
        { sentence: "un Mexicain → une ___", hint: "+ e", answer: "Mexicaine" },
      ],
    },
  ],
};
