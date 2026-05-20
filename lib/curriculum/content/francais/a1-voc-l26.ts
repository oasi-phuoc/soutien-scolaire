import type { VocabLesson } from "../../vocabulary-data";

export const A1_VOC_L26: VocabLesson = {
  slug: "a1-voc-l26",
  code: "V.8",
  level: "A1",
  title: "Le corps humain",
  theory: [
    { type: "heading", text: "Les parties du corps" },
    {
      type: "vocab",
      title: "La tête",
      items: [
        "la tête",
        "le visage",
        "les yeux (sing. : l'œil)",
        "le nez",
        "la bouche",
        "les oreilles (f.pl.)",
        "les cheveux (m.pl.)",
        "les dents (f.pl.)",
      ],
    },
    {
      type: "vocab",
      title: "Le corps",
      items: [
        "le cou",
        "les épaules (f.pl.)",
        "le dos",
        "la poitrine",
        "le ventre",
        "le bras / les bras",
        "la main / les mains",
        "la jambe / les jambes",
        "le pied / les pieds",
        "le genou / les genoux",
      ],
    },
    {
      type: "heading", text: "Exprimer la douleur : avoir mal à…",
    },
    {
      type: "rule",
      text: "Avoir mal à + article contracté : au (masc.), à la (fém.), à l' (voyelle), aux (pluriel).",
      examples: [
        { correct: "J'ai mal au dos. (le dos → au dos)" },
        { correct: "Il a mal à la gorge. (la gorge → à la gorge)" },
        { correct: "Elle a mal à l'estomac. (l'estomac → à l'estomac)" },
        { correct: "Nous avons mal aux pieds. (les pieds → aux pieds)" },
      ],
    },
    {
      type: "vocab",
      title: "Douleurs courantes",
      items: [
        "avoir mal à la tête (= avoir mal à la tête)",
        "avoir mal au dos",
        "avoir mal à la gorge",
        "avoir mal au ventre",
        "avoir mal au bras",
        "avoir mal à la jambe",
        "avoir mal aux yeux",
        "avoir mal aux oreilles",
      ],
    },
    {
      type: "note",
      text: "Pour demander où quelqu'un a mal : « Où est-ce que vous avez mal ? » ou « Où avez-vous mal ? »",
    },
  ],
  exercises: [
    {
      type: "match",
      title: "Associer le mot et l'article contracté",
      instruction: "Reliez chaque partie du corps à la bonne forme de « à + article ».",
      pairs: [
        { left: "le dos", right: "au dos" },
        { left: "la gorge", right: "à la gorge" },
        { left: "les pieds", right: "aux pieds" },
        { left: "l'estomac", right: "à l'estomac" },
        { left: "le bras", right: "au bras" },
        { left: "les oreilles", right: "aux oreilles" },
      ],
    },
    {
      type: "fill",
      title: "J'ai mal à...",
      instruction: "Complétez avec la bonne forme de « à + article ».",
      items: [
        { sentence: "Je lis trop et j'ai mal ___ yeux.", hint: "aux", answer: "aux" },
        { sentence: "Il a couru et maintenant il a mal ___ jambes.", hint: "aux", answer: "aux" },
        { sentence: "Tu as mal ___ tête ? Prends une aspirine.", hint: "à la", answer: "à la" },
        { sentence: "Elle a mal ___ dos depuis ce matin.", hint: "au", answer: "au" },
        { sentence: "Ouvre la bouche, vous avez mal ___ gorge ?", hint: "à la", answer: "à la" },
      ],
    },
    {
      type: "qcm",
      title: "Quel article contracté ?",
      instruction: "Choisissez la bonne forme pour compléter la phrase.",
      items: [
        { sentence: "J'ai mal ___ ventre.", choices: ["au", "à la", "à l'", "aux"], correctIdx: 0 },
        { sentence: "Elle a mal ___ oreilles.", choices: ["aux", "à l'", "au", "à la"], correctIdx: 0 },
        { sentence: "Tu as mal ___ épaule gauche ?", choices: ["à l'", "au", "à la", "aux"], correctIdx: 0 },
        { sentence: "Il a mal ___ pieds après la randonnée.", choices: ["aux", "au", "à la", "à l'"], correctIdx: 0 },
      ],
    },
  ],
};
