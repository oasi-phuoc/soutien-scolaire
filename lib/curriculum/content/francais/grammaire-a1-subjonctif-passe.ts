import type { GrammarLesson } from "../../grammar-data";

/** Unité 71 — Le subjonctif passé (G4.41) */
export const A1_GR_SUBJONCTIF_PASSE: GrammarLesson = {
  slug: "a1-gr-subjonctif-passe",
  code: "G4.41",
  level: "A1",
  title: "Le subjonctif passé",
  theory: [
    {
      type: "heading",
      text: "Utilisation",
    },
    {
      type: "plain_list",
      items: [
        "Mêmes expressions que le subjonctif présent.",
        "On l'emploie quand l'action du verbe 2 se situe {a}avant{/a} celle du verbe 1.",
        "Exemple : Je {a}suis{/a} content qu'il {a}ait gagné{/a} les trois courses.",
        "Sujets identiques → infinitif (pas de subjonctif). → Nous sommes fiers d'{a}être montés{/a} sur le podium.",
        "Aussi après certaines conjonctions.",
      ],
      allBullets: true,
    },
    {
      type: "heading",
      text: "Conjugaison",
    },
    {
      type: "plain_list",
      items: [
        "Temps composé : auxiliaire {a}avoir{/a} ou {a}être{/a} au subjonctif présent + participe passé.",
        "Choix de l'auxiliaire et accord du participe : mêmes règles qu'au passé composé.",
      ],
      allBullets: true,
    },
    {
      type: "highlight",
      label: "Exemples",
      items: [
        "Je trouve incroyable qu'il {a}ait gagné{/a} trois fois. (avoir)",
        "Je suis triste qu'elle {a}soit arrivée{/a} la dernière. (être + accord)",
        "C'est dommage que tu {a}te sois inscrit{/a} trop tard. (pronominal)",
      ],
    },
    {
      type: "note",
      text: "Sujets différents : Nous sommes fiers qu'il {a}soit monté{/a} trois fois sur le podium. Même sujet : Nous sommes fiers d'{a}être montés{/a}…",
    },
  ],
  exercises: [
    {
      type: "qcm",
      title: "Subjonctif passé",
      instruction: "Choisissez la forme correcte.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "Je suis content qu'il ___ les courses. (gagner)", choices: ["ait gagné", "a gagné", "ait gagnés", "gagne"], correctIdx: 0 },
        { sentence: "Nous sommes fiers qu'il ___ sur le podium. (monter)", choices: ["soit monté", "est monté", "ait monté", "monte"], correctIdx: 0 },
        { sentence: "Je suis triste qu'elle ___ la dernière. (arriver)", choices: ["soit arrivée", "est arrivée", "ait arrivé", "soit arrivé"], correctIdx: 0 },
        { sentence: "C'est dommage que tu ___ trop tard. (s'inscrire)", choices: ["te sois inscrit", "t'es inscrit", "t'aies inscrit", "sois inscrit"], correctIdx: 0 },
        { sentence: "Je trouve incroyable qu'il ___ trois fois. (gagner)", choices: ["ait gagné", "a gagné", "gagne", "ait gagnée"], correctIdx: 0 },
        { sentence: "Même sujet : Nous sommes fiers ___ sur le podium.", choices: ["d'être montés", "que nous soyons montés", "qu'on soit montés", "être montés"], correctIdx: 0 },
        { sentence: "Auxiliaire au ___ + participe passé.", choices: ["subjonctif présent", "indicatif présent", "imparfait", "passé composé"], correctIdx: 0 },
        { sentence: "L'action du verbe 2 est ___ celle du verbe 1.", choices: ["avant", "après", "en même temps que", "sans lien avec"], correctIdx: 0 },
        { sentence: "Je suis content qu'ils ___ . (partir, être)", choices: ["soient partis", "sont partis", "aient partis", "partent"], correctIdx: 0 },
        { sentence: "C'est bien qu'elle ___ . (finir, avoir)", choices: ["ait fini", "a fini", "soit fini", "finit"], correctIdx: 0 },
      ],
    },
    {
      type: "fill",
      title: "Complétez",
      instruction: "Écrivez le verbe au subjonctif passé.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "Je suis content qu'il ___ . (gagner)", hint: "avoir", answer: "ait gagné" },
        { sentence: "Nous sommes fiers qu'il ___ . (monter)", hint: "être", answer: "soit monté" },
        { sentence: "Je suis triste qu'elle ___ . (arriver)", hint: "être + accord", answer: "soit arrivée" },
        { sentence: "C'est dommage que tu ___ . (s'inscrire)", hint: "pronominal", answer: "te sois inscrit" },
        { sentence: "Je trouve incroyable qu'il ___ . (gagner)", hint: "avoir", answer: "ait gagné" },
        { sentence: "C'est bien qu'elle ___ . (finir)", hint: "avoir", answer: "ait fini" },
        { sentence: "Je suis content qu'ils ___ . (partir)", hint: "être", answer: "soient partis" },
        { sentence: "Nous sommes fiers ___ . (même sujet, monter)", hint: "infinitif passé", answer: "d'être montés" },
        { sentence: "C'est dommage qu'elle ___ . (ne pas venir)", hint: "être", answer: "ne soit pas venue" },
        { sentence: "Je suis surpris que vous ___ . (accepter)", hint: "avoir", answer: "ayez accepté" },
      ],
    },
  ],
};
