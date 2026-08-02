import type { GrammarLesson } from "../../grammar-data";

/** Unité 51 — L'expression du temps : il y a, dans, depuis… (G4.21) */
export const A1_GR_MARQUEURS_TEMPS: GrammarLesson = {
  slug: "a1-gr-marqueurs-temps",
  code: "G4.21",
  level: "A1",
  title: "L'expression du temps : il y a, dans, depuis, pour, pendant, en…",
  theory: [
    {
      type: "heading",
      text: "Utilisation",
    },
    {
      type: "plain_list",
      items: [
        "Ces expressions situent une action dans le temps (passé, présent, futur) : action terminée, en cours ou à venir ; durée, début ou fin.",
        "Exemple : Ils se sont rencontrés il y a 40 ans. Ils sont mariés depuis 35 ans. Ils veulent rester ensemble encore pour longtemps !",
      ],
      allBullets: true,
    },
    {
      type: "heading",
      text: "Il y a, dans, depuis, pour",
    },
    {
      type: "highlight",
      label: "Il y a",
      items: [
        "Durée entre une action terminée et le moment où l'on parle ; avec le passé composé. → Bruno est rentré de voyage il y a 3 mois.",
      ],
    },
    {
      type: "highlight",
      label: "Dans",
      items: [
        "Durée entre le moment présent et une action future ; avec le présent ou le futur. → Clara va partir dans deux mois.",
      ],
    },
    {
      type: "highlight",
      label: "Depuis",
      items: [
        "Action non terminée : point de départ ou durée jusqu'au présent. → Je travaille depuis le 1er avril. ; Je n'ai pas travaillé depuis trois mois.",
        "En général avec le présent ou le passé composé négatif.",
      ],
    },
    {
      type: "highlight",
      label: "Pour",
      items: [
        "Durée prévue d'une action à partir du moment où l'on parle (présent, passé ou futur). → Clara va partir pour un mois.",
      ],
    },
    {
      type: "heading",
      text: "Pendant, en, à partir de, jusqu'à",
    },
    {
      type: "plain_list",
      items: [
        "{a}Pendant{/a} : durée d'une action. → Pendant les vacances, je me repose.",
        "{a}En{/a} : temps nécessaire pour faire une action. → Je vais au travail en une demi-heure.",
        "{a}À partir de{/a} : début d'une action. → Le magasin ouvre à partir du 1er décembre.",
        "{a}Jusqu'à{/a} : fin d'une action. → Hier soir, j'ai travaillé jusqu'à minuit.",
        "Avec un mois, une saison ou une année : {a}jusqu'en{/a}. → Il va partir jusqu'en mai.",
      ],
      allBullets: true,
    },
    {
      type: "note",
      text: "Avec pendant, en, à partir de et jusqu'à, le verbe peut être au présent, au passé ou au futur.",
    },
  ],
  exercises: [
    {
      type: "qcm",
      title: "Marqueurs de temps",
      instruction: "Choisissez la forme correcte.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "Bruno est rentré ___ 3 mois.", choices: ["il y a", "dans", "depuis", "pour"], correctIdx: 0 },
        { sentence: "Clara va partir ___ deux mois.", choices: ["dans", "il y a", "depuis", "pendant"], correctIdx: 0 },
        { sentence: "Je travaille ___ le 1er avril.", choices: ["depuis", "il y a", "dans", "pour"], correctIdx: 0 },
        { sentence: "Clara va partir ___ un mois.", choices: ["pour", "depuis", "il y a", "en"], correctIdx: 0 },
        { sentence: "___ les vacances, je me repose.", choices: ["Pendant", "En", "Dans", "Depuis"], correctIdx: 0 },
        { sentence: "Je vais au travail ___ une demi-heure.", choices: ["en", "pendant", "depuis", "pour"], correctIdx: 0 },
        { sentence: "Le magasin ouvre ___ du 1er décembre.", choices: ["à partir", "jusqu'à", "depuis", "il y a"], correctIdx: 0 },
        { sentence: "J'ai travaillé ___ minuit.", choices: ["jusqu'à", "à partir de", "depuis", "dans"], correctIdx: 0 },
        { sentence: "Il va partir ___ mai.", choices: ["jusqu'en", "jusqu'à", "depuis", "il y a"], correctIdx: 0 },
        { sentence: "Ils sont mariés ___ 35 ans.", choices: ["depuis", "il y a", "dans", "pour"], correctIdx: 0 },
      ],
    },
    {
      type: "fill",
      title: "Complétez",
      instruction: "Écrivez il y a, dans, depuis, pour, pendant, en, à partir de, jusqu'à ou jusqu'en.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "Ils se sont rencontrés ___ 40 ans.", hint: "passé", answer: "il y a" },
        { sentence: "Elle part ___ deux semaines.", hint: "futur", answer: "dans" },
        { sentence: "Je travaille ___ trois mois.", hint: "encore maintenant", answer: "depuis" },
        { sentence: "Je pars ___ un mois.", hint: "durée prévue", answer: "pour" },
        { sentence: "___ l'été, je voyage.", hint: "durée", answer: "Pendant" },
        { sentence: "Je fais le trajet ___ 20 minutes.", hint: "temps nécessaire", answer: "en" },
        { sentence: "Les soldes commencent ___ lundi.", hint: "début", answer: "à partir de" },
        { sentence: "Le magasin est ouvert ___ 20 heures.", hint: "fin", answer: "jusqu'à" },
        { sentence: "Il reste ___ septembre.", hint: "mois", answer: "jusqu'en" },
        { sentence: "Je n'ai pas vu Paul ___ longtemps.", hint: "négatif", answer: "depuis" },
      ],
    },
  ],
};
