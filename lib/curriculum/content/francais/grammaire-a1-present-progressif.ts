import type { GrammarLesson } from "../../grammar-data";

/** Unité 10 — Le présent progressif (G1.11) */
export const A1_GR_PRESENT_PROGRESSIF: GrammarLesson = {
  slug: "a1-gr-present-progressif",
  code: "G1.11",
  level: "A1",
  title: "Le présent progressif",
  theory: [
    {
      type: "heading",
      text: "Utilisation",
    },
    {
      type: "plain_list",
      items: [
        "{a}1.{/a} On utilise le présent progressif à la place du présent simple pour parler d'une action qui se passe au moment exact où l'on parle.",
      ],
    },
    {
      type: "plain_list",
      items: [
        "{a}2.{/a} On l'emploie souvent pour expliquer pourquoi on ne peut pas faire autre chose.",
      ],
    },
    {
      type: "plain_list",
      items: [
        "{a}3.{/a} On ne peut pas l'utiliser pour une action habituelle ou une description générale.",
      ],
    },
    {
      type: "grid",
      headers: ["Aspect", "Exemple"],
      colWidths: ["11rem", "auto"],
      rows: [
        ["Présent simple", "Non, je {a}prends{/a} ma douche. (information)"],
        ["Présent progressif", "Non, je {a}suis en train de prendre{/a} ma douche. (insiste sur le déroulement)"],
      ],
    },
    {
      type: "heading",
      text: "Forme",
    },
    {
      type: "plain_list",
      items: ["Verbe {a}être{/a} (présent) + {a}en train de{/a} + infinitif."],
    },
    {
      type: "highlight",
      label: "",
      items: ["Il {a}est en train de{/a} dormir."],
      noBulletItems: [0],
    },
    {
      type: "plain_list",
      items: ["Avec un verbe pronominal, le pronom se place devant l'infinitif."],
    },
    {
      type: "highlight",
      label: "",
      items: ["Elles {a}sont en train de{/a} se préparer."],
      noBulletItems: [0],
    },
    {
      type: "plain_list",
      items: ["À la forme négative, {a}ne… pas{/a} encadre le verbe être."],
    },
    {
      type: "highlight",
      label: "",
      items: ["Ils {a}ne{/a} sont {a}pas{/a} en train de travailler."],
      noBulletItems: [0],
    },
    {
      type: "heading",
      text: "Orthographe",
    },
    {
      type: "plain_list",
      items: [
        "{a}De{/a} devient {a}d'{/a} devant un verbe qui commence par une voyelle ou un h muet.",
      ],
    },
    {
      type: "highlight",
      label: "",
      items: [
        "Nous sommes en train {s}de{/s} apprendre le français.",
        "Nous sommes en train {a}d'{/a}apprendre le français.",
      ],
      noBulletItems: [0, 1],
      inlineArrows: true,
    },
  ],
  exercises: [
    {
      type: "qcm",
      title: "Présent progressif",
      instruction: "Choisissez la forme correcte.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "Je ___ en train de prendre ma douche.", choices: ["suis", "es", "est", "sommes"], correctIdx: 0 },
        { sentence: "Il ___ en train de dormir.", choices: ["est", "es", "suis", "sont"], correctIdx: 0 },
        { sentence: "Nous ___ en train d'apprendre le français.", choices: ["sommes", "êtes", "suis", "sont"], correctIdx: 0 },
        { sentence: "Elles sont en train ___ se préparer.", choices: ["de", "d'", "à", "pour"], correctIdx: 0 },
        { sentence: "Nous sommes en train ___ apprendre.", choices: ["d'", "de", "à", "pour"], correctIdx: 0 },
        { sentence: "Ils ne ___ pas en train de travailler.", choices: ["sont", "est", "suis", "êtes"], correctIdx: 0 },
        { sentence: "Tu ___ en train de répondre ?", choices: ["es", "est", "suis", "êtes"], correctIdx: 0 },
        { sentence: "Vous ___ en train de manger.", choices: ["êtes", "sommes", "sont", "es"], correctIdx: 0 },
        { sentence: "On ___ en train de partir.", choices: ["est", "sont", "suis", "es"], correctIdx: 0 },
        { sentence: "Elle est en train ___ écrire.", choices: ["d'", "de", "à", "pour"], correctIdx: 0 },
      ],
    },
    {
      type: "fill",
      title: "Complétez",
      instruction: "Complétez avec la forme correcte (être + en train de / d').",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "Je ___ prendre ma douche.", hint: "suis en train de", answer: "suis en train de" },
        { sentence: "Il ___ dormir.", hint: "est en train de", answer: "est en train de" },
        { sentence: "Nous ___ apprendre le français.", hint: "sommes en train d'", answer: "sommes en train d'" },
        { sentence: "Elles ___ se préparer.", hint: "sont en train de", answer: "sont en train de" },
        { sentence: "Tu ___ répondre ?", hint: "es en train de", answer: "es en train de" },
        { sentence: "Vous ___ manger.", hint: "êtes en train de", answer: "êtes en train de" },
        { sentence: "Ils ne ___ pas travailler.", hint: "sont en train de", answer: "sont en train de" },
        { sentence: "Elle ___ écrire un message.", hint: "est en train d'", answer: "est en train d'" },
        { sentence: "On ___ partir.", hint: "est en train de", answer: "est en train de" },
        { sentence: "Je ___ m'habiller.", hint: "suis en train de", answer: "suis en train de" },
      ],
    },
  ],
};
