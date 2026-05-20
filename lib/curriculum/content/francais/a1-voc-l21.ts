import type { VocabLesson } from "../../vocabulary-data";

export const A1_VOC_L21: VocabLesson = {
  slug: "a1-voc-l21",
  code: "V.7",
  level: "A1",
  title: "Les expressions de temps",
  theory: [
    { type: "heading", text: "Situer dans le temps" },
    {
      type: "vocab",
      title: "Jours autour d'aujourd'hui",
      items: [
        "aujourd'hui (ce jour)",
        "demain (le jour suivant)",
        "après-demain (dans 2 jours)",
        "hier (le jour précédent)",
        "avant-hier (il y a 2 jours)",
      ],
    },
    {
      type: "vocab",
      title: "Les semaines",
      items: [
        "cette semaine",
        "la semaine prochaine",
        "la semaine dernière",
        "le week-end prochain",
        "le week-end dernier",
      ],
    },
    {
      type: "vocab",
      title: "Moments de la journée",
      items: [
        "ce matin",
        "cet après-midi",
        "ce soir",
        "cette nuit",
      ],
    },
    {
      type: "rule",
      text: "Dans + durée = futur. Il y a + durée = passé.",
      examples: [
        { correct: "Le cours commence dans 3 jours." },
        { correct: "J'ai mangé il y a 2 heures." },
        { correct: "Il a appelé il y a une semaine." },
      ],
    },
    {
      type: "vocab",
      title: "Autres expressions utiles",
      items: [
        "maintenant",
        "bientôt",
        "tout à l'heure",
        "en ce moment",
        "d'abord / ensuite / enfin",
        "pendant (during)",
        "depuis (since/for)",
      ],
    },
    {
      type: "note",
      text: "Tout à l'heure = in a little while (futur) ou a little while ago (passé) selon le contexte.",
    },
  ],
  exercises: [
    {
      type: "match",
      title: "Associer l'expression et sa signification",
      instruction: "Reliez chaque expression de temps à sa définition.",
      pairs: [
        { left: "aujourd'hui", right: "ce jour" },
        { left: "demain", right: "le lendemain" },
        { left: "avant-hier", right: "il y a deux jours" },
        { left: "la semaine prochaine", right: "après cette semaine" },
        { left: "hier", right: "le jour précédent" },
        { left: "après-demain", right: "dans deux jours" },
      ],
    },
    {
      type: "fill",
      title: "Compléter avec la bonne expression",
      instruction: "Complétez chaque phrase avec la bonne expression de temps.",
      items: [
        { sentence: "Le cours a commencé ___ 10 minutes.", hint: "il y a", answer: "il y a" },
        { sentence: "La réunion est ___ 3 jours.", hint: "dans", answer: "dans" },
        { sentence: "J'ai mangé au restaurant ___.", hint: "hier", answer: "hier" },
        { sentence: "___, il fait beau et chaud.", hint: "aujourd'hui", answer: "aujourd'hui" },
        { sentence: "Il part en vacances ___.", hint: "demain", answer: "demain" },
      ],
    },
    {
      type: "qcm",
      title: "Futur ou passé ?",
      instruction: "Choisissez l'expression correcte pour chaque phrase.",
      items: [
        { sentence: "Nous avons visité le musée ___ deux jours.", choices: ["il y a", "dans", "depuis", "pendant"], correctIdx: 0 },
        { sentence: "Le concert commence ___ une heure.", choices: ["dans", "il y a", "hier", "avant"], correctIdx: 0 },
        { sentence: "Elle travaille ici ___ trois ans.", choices: ["depuis", "dans", "il y a", "après"], correctIdx: 0 },
        { sentence: "___ je vais au cinéma avec des amis.", choices: ["Ce soir", "Hier soir", "Il y a soir", "Avant soir"], correctIdx: 0 },
      ],
    },
  ],
};
