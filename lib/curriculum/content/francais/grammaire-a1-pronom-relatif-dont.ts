import type { GrammarLesson } from "../../grammar-data";

/** Unité 62 — Le pronom relatif dont (G4.32) */
export const A1_GR_PRONOM_RELATIF_DONT: GrammarLesson = {
  slug: "a1-gr-pronom-relatif-dont",
  code: "G4.32",
  level: "A1",
  title: "Le pronom relatif dont",
  theory: [
    {
      type: "heading",
      text: "Utilisation",
    },
    {
      type: "plain_list",
      items: [
        "{a}Dont{/a} remplace un nom (chose ou personne) complément introduit par {a}de{/a} ; il réunit deux phrases.",
        "Tu as vu le film ? Je t'ai parlé de ce film. → Tu as vu le film dont je t'ai parlé ?",
        "Je connais la ville. Le prince de la ville est un enfant. → Je connais la ville dont le prince est un enfant.",
      ],
      allBullets: true,
    },
    {
      type: "highlight",
      label: "Complément d'un verbe + de",
      items: [
        "C'est le film dont je parle. ; Voici l'enfant dont je m'occupe.",
        "Verbes : avoir besoin/envie/peur de, faire partie de, manquer de, se méfier de, parler de, s'occuper de, se servir de, se souvenir de…",
      ],
    },
    {
      type: "highlight",
      label: "Complément d'un adjectif + de",
      items: [
        "C'est un collègue dont je suis proche. ; C'est le dossier dont je suis responsable.",
        "Adjectifs : amoureux, content, fier, heureux, proche, responsable, satisfait, sûr de…",
      ],
    },
    {
      type: "highlight",
      label: "Complément d'un nom + de",
      items: [
        "J'ai un collègue dont la femme est actrice.",
        "C'est un document dont le contenu est confidentiel.",
      ],
    },
    {
      type: "note",
      text: "Pas d'adjectif possessif après {a}dont{/a}. → J'ai un collègue dont la femme est actrice. (pas : dont sa femme)",
    },
  ],
  exercises: [
    {
      type: "qcm",
      title: "Pronom dont",
      instruction: "Choisissez la forme correcte.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "La pièce ___ je t'ai parlé.", choices: ["dont", "qui", "que"], correctIdx: 0 },
        { sentence: "Le film ___ je parle.", choices: ["dont", "qui", "que"], correctIdx: 0 },
        { sentence: "L'enfant ___ je m'occupe.", choices: ["dont", "qui", "que"], correctIdx: 0 },
        { sentence: "Un collègue ___ je suis proche.", choices: ["dont", "qui", "que"], correctIdx: 0 },
        { sentence: "Le dossier ___ je suis responsable.", choices: ["dont", "qui", "que"], correctIdx: 0 },
        { sentence: "Un collègue ___ la femme est actrice.", choices: ["dont", "qui", "que"], correctIdx: 0 },
        { sentence: "Un document ___ le contenu est confidentiel.", choices: ["dont", "qui", "que"], correctIdx: 0 },
        { sentence: "J'ai un ami dont ___ femme est actrice.", choices: ["la", "sa", "son"], correctIdx: 0 },
        { sentence: "« Dont » remplace un complément avec ___ .", choices: ["de", "à", "sur"], correctIdx: 0 },
        { sentence: "Voici le livre ___ j'ai besoin.", choices: ["dont", "qui", "que"], correctIdx: 0 },
      ],
    },
    {
      type: "fill",
      title: "Complétez",
      instruction: "Écrivez dont, qui, que ou où.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "Le film ___ je t'ai parlé.", hint: "parler de", answer: "dont" },
        { sentence: "L'enfant ___ je m'occupe.", hint: "s'occuper de", answer: "dont" },
        { sentence: "Le collègue ___ je suis fier.", hint: "fier de", answer: "dont" },
        { sentence: "Un ami ___ la sœur habite ici.", hint: "nom + de", answer: "dont" },
        { sentence: "Le dossier ___ je suis responsable.", hint: "adjectif + de", answer: "dont" },
        { sentence: "La fille ___ sort avec Lucas.", hint: "sujet", answer: "qui" },
        { sentence: "La fille ___ on a vue.", hint: "COD", answer: "qu'" },
        { sentence: "Le jour ___ je l'ai rencontré.", hint: "temps", answer: "où" },
        { sentence: "Le livre ___ j'ai besoin.", hint: "besoin de", answer: "dont" },
        { sentence: "La ville ___ le prince est un enfant.", hint: "nom + de", answer: "dont" },
      ],
    },
  ],
};
