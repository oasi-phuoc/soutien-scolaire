import type { GrammarLesson } from "../../grammar-data";

/** Unité 29 — La question ouverte : qui, qu'est-ce que/quoi, quel/lequel (G3.9) */
export const A1_GR_QUESTION_OUVERTE_QUI: GrammarLesson = {
  slug: "a1-gr-question-ouverte-qui",
  code: "G3.9",
  level: "A1",
  title: "La question ouverte : qui, qu'est-ce que/quoi, quel/lequel",
  theory: [
    {
      type: "heading",
      text: "Utilisation",
    },
    {
      type: "plain_list",
      items: [
        "La question partielle est une {a}question ouverte{/a} : la réponse donne une information précise (pas seulement oui/non).",
        "Personne → {a}qui{/a}. Chose → {a}qu'est-ce que{/a} / {a}quoi{/a}. Précisions → adjectif {a}quel{/a} ou pronom {a}lequel{/a}.",
      ],
      allBullets: true,
    },
    {
      type: "heading",
      text: "Qui, qu'est-ce que / quoi",
    },
    {
      type: "plain_list",
      items: [
        "{a}Qui{/a} : sujet ou complément. → Qui est là ? ; Vous cherchez qui ?",
        "{a}Qu'est-ce que{/a} / {a}quoi{/a} : complément. → Qu'est-ce que tu cherches ? ; Tu cherches quoi ?",
        "Avec une préposition, {a}qui{/a} et {a}quoi{/a} peuvent être au début ou à la fin. → Avec quoi vous écrivez ? / Vous écrivez avec quoi ? ; Avec qui tu travailles ? / Tu travailles avec qui ?",
      ],
      allBullets: true,
    },
    {
      type: "heading",
      text: "L'adjectif quel",
    },
    {
      type: "plain_list",
      items: [
        "S'accorde en genre et en nombre avec le nom.",
      ],
      noBulletItems: [0],
    },
    {
      type: "grid",
      headers: ["Forme", "Exemple"],
      boldFirstCol: true,
      rows: [
        ["quel (ms)", "Vous avez quel âge ? / Quel âge vous avez ?"],
        ["quelle (fs)", "Quelle est votre nationalité ?"],
        ["quels (mp)", "Quels sont tes films préférés ?"],
        ["quelles (fp)", "Tu parles quelles langues ? / Quelles langues tu parles ?"],
      ],
    },
    {
      type: "note",
      text: "Avec le verbe {a}être{/a}, {a}quel(le)(s){/a} est toujours au début. → Quel est votre nom ?",
    },
    {
      type: "heading",
      text: "Lequel, laquelle, lesquels, lesquelles",
    },
    {
      type: "plain_list",
      items: [
        "Pronoms pour préciser un choix parmi des personnes ou des choses déjà mentionnées.",
        "Regarde ces deux femmes. Laquelle est la mère et laquelle est la fille ?",
        "Entre ces deux films, lequel tu préfères ?",
      ],
      allBullets: true,
    },
    {
      type: "heading",
      text: "Prononciation",
    },
    {
      type: "plain_list",
      items: [
        "Quel, quels, quelle, quelles se prononcent de la même façon.",
        "Liaison devant une voyelle. → Quels amis ? ; Quelles amies ?",
      ],
      allBullets: true,
    },
  ],
  exercises: [
    {
      type: "qcm",
      title: "Question ouverte",
      instruction: "Choisissez la forme correcte.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "___ est à l'appareil ?", choices: ["Qui", "Quoi", "Quel", "Lequel"], correctIdx: 0 },
        { sentence: "___ tu veux ?", choices: ["Qu'est-ce que", "Qui", "Lequel", "Quelle"], correctIdx: 0 },
        { sentence: "Tu cherches ___ ?", choices: ["quoi", "qui", "quel", "lequel"], correctIdx: 0 },
        { sentence: "Vous avez ___ âge ?", choices: ["quel", "quelle", "quels", "lequel"], correctIdx: 0 },
        { sentence: "___ est votre nationalité ?", choices: ["Quelle", "Quel", "Quels", "Lequel"], correctIdx: 0 },
        { sentence: "___ sont tes films préférés ?", choices: ["Quels", "Quel", "Quelle", "Lesquels"], correctIdx: 0 },
        { sentence: "Tu parles ___ langues ?", choices: ["quelles", "quels", "quelle", "lequel"], correctIdx: 0 },
        { sentence: "Entre ces deux films, ___ tu préfères ?", choices: ["lequel", "laquelle", "quels", "quoi"], correctIdx: 0 },
        { sentence: "Tu travailles avec ___ ?", choices: ["qui", "quoi", "quel", "lequel"], correctIdx: 0 },
        { sentence: "La question partielle est une question ___ .", choices: ["ouverte", "fermée", "totale", "négative"], correctIdx: 0 },
      ],
    },
    {
      type: "fill",
      title: "Complétez",
      instruction: "Écrivez qui, quoi, quel(le)(s) ou lequel/laquelle…",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "___ est là ?", hint: "personne", answer: "Qui" },
        { sentence: "Tu cherches ___ ?", hint: "chose", answer: "quoi" },
        { sentence: "___ âge vous avez ?", hint: "ms", answer: "Quel" },
        { sentence: "___ est votre nom ?", hint: "être + ms", answer: "Quel" },
        { sentence: "___ est votre nationalité ?", hint: "être + fs", answer: "Quelle" },
        { sentence: "___ langues tu parles ?", hint: "fp", answer: "Quelles" },
        { sentence: "Entre ces deux femmes, ___ est la mère ?", hint: "fs", answer: "laquelle" },
        { sentence: "Avec ___ vous écrivez ?", hint: "chose + prép.", answer: "quoi" },
        { sentence: "Avec ___ tu travailles ?", hint: "personne + prép.", answer: "qui" },
        { sentence: "___ tu veux ?", hint: "chose + est-ce que", answer: "Qu'est-ce que" },
      ],
    },
  ],
};
