import type { VocabLesson } from "../../vocabulary-data";

export const A1_VOC_L13: VocabLesson = {
  slug: "a1-voc-l13",
  code: "V.5",
  level: "A1",
  title: "Les moyens de transport",
  theory: [
    { type: "heading", text: "Les modes de transport" },
    {
      type: "vocab",
      title: "Les transports courants",
      items: [
        "en voiture",
        "à vélo",
        "en avion",
        "en train",
        "en bus",
        "en métro",
        "en tramway",
        "à pied",
        "en taxi",
        "en bateau",
      ],
    },
    {
      type: "rule",
      text: "EN + transport motorisé ou fermé ; À + transport non motorisé ou monture.",
      examples: [
        { correct: "Je vais au travail en voiture.", wrong: "Je vais au travail à voiture." },
        { correct: "Elle va à l'école à vélo.", wrong: "Elle va à l'école en vélo." },
        { correct: "Nous partons en avion.", wrong: "Nous partons à avion." },
      ],
    },
    {
      type: "vocab",
      title: "Verbes utiles",
      items: [
        "prendre (le bus / le train / le métro)",
        "aller (en voiture / à pied)",
        "mettre (30 minutes / 2 heures)",
        "arriver / partir",
      ],
    },
    {
      type: "rule",
      text: "Pour indiquer la durée : mettre + durée.",
      examples: [
        { correct: "Je mets 20 minutes en vélo." },
        { correct: "Le train met 3 heures." },
      ],
    },
    {
      type: "note",
      text: "À pied = walking. On dit toujours « à pied » et non « en pied ».",
    },
  ],
  exercises: [
    {
      type: "match",
      title: "Associer le transport et la préposition",
      instruction: "Reliez chaque moyen de transport à la bonne préposition (en ou à).",
      pairs: [
        { left: "___ voiture", right: "en" },
        { left: "___ vélo", right: "à" },
        { left: "___ avion", right: "en" },
        { left: "___ pied", right: "à" },
        { left: "___ métro", right: "en" },
        { left: "___ bus", right: "en" },
      ],
    },
    {
      type: "fill",
      title: "Compléter les phrases",
      instruction: "Complétez chaque phrase avec le bon moyen de transport.",
      items: [
        { sentence: "Pour traverser l'Atlantique, on prend l'___.", hint: "avion", answer: "avion" },
        { sentence: "Paris a un réseau de ___ très développé.", hint: "métro", answer: "métro" },
        { sentence: "Elle va à l'université à ___ car c'est près de chez elle.", hint: "pied", answer: "pied" },
        { sentence: "Je prends le ___ pour aller de Lyon à Paris.", hint: "train", answer: "train" },
        { sentence: "Il met 10 minutes à ___ pour aller au bureau.", hint: "vélo", answer: "vélo" },
      ],
    },
    {
      type: "qcm",
      title: "Choisir la bonne préposition",
      instruction: "Choisissez la bonne préposition pour chaque transport.",
      items: [
        { sentence: "Ils vont à la mer ___ voiture.", choices: ["en", "à", "par", "de"], correctIdx: 0 },
        { sentence: "Je préfère aller ___ vélo en été.", choices: ["à", "en", "par", "avec"], correctIdx: 0 },
        { sentence: "On prend le TGV ; on est ___ train.", choices: ["en", "à", "au", "par"], correctIdx: 0 },
        { sentence: "Tu vas ___ pied ou en bus ?", choices: ["à", "en", "par", "de"], correctIdx: 0 },
      ],
    },
  ],
};
