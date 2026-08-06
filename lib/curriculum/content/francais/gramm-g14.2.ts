import type { GrammarLesson } from "../../grammar-data";
import { A2_GR_ADVERBES } from "./gramm-r10.5-les-adverbes";

/** G14.2 — Les adverbes en -ment, enrichis avec G19.22 (types d'adverbes) */
export const A1_GR_ADVERBES_MENT: GrammarLesson = {
  slug: "a1-gr-adverbes-ment",
  code: "G14.2",
  level: "A1",
  title: "Les adverbes en -ment",
  theory: [
    {
      type: "heading",
      text: "Utilisation",
    },
    {
      type: "plain_list",
      items: [
        "Souvent la manière d'une action. → Roulez prudemment. (= avec prudence)",
        "Peut modifier un adjectif ou une expression. → Ils sont généralement prudents. ; Elle est fréquemment en retard.",
        "Peut être précédé d'un adverbe d'intensité. → Il roule très prudemment.",
      ],
      allBullets: true,
    },
    {
      type: "heading",
      text: "Formation",
    },
    {
      type: "plain_list",
      items: [
        "Cas général : féminin de l'adjectif + {a}-ment{/a}. → douce → doucement ; longue → longuement.",
      ],
      noBulletItems: [0],
    },
    {
      type: "highlight",
      label: "Cas particuliers",
      items: [
        "Adjectif masculin en voyelle : + {a}-ment{/a} sur le masculin. → poli → poliment ; vrai → vraiment ; absolu → absolument.",
        "Exception : gai → gaiement.",
        "Adjectifs en {a}-ant / -ent{/a} → {a}-amment / -emment{/a}. → courant → couramment ; patient → patiemment.",
        "Exception : lent → lentement.",
        "Irréguliers : précis → précisément ; bref → brièvement ; gentil → gentiment.",
      ],
    },
    {
      type: "heading",
      text: "Place",
    },
    {
      type: "plain_list",
      items: [
        "Devant l'adjectif ou l'expression. → généralement prudents ; complètement d'accord.",
        "Après le verbe en général. → Il parle rapidement. ; Il a parlé rapidement.",
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
        "{a}-amment{/a} et {a}-emment{/a} se prononcent pareil. → couramment ; fréquemment.",
      ],
      noBulletItems: [0],
    },
    ...A2_GR_ADVERBES.theory,
  ],
  // G19.22 (types d'adverbes) n'avait pas d'exercices : on conserve ceux en -ment.
  exercises: [
    {
      type: "qcm",
      title: "Adverbes en -ment",
      instruction: "Choisissez la forme correcte.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "Roulez ___ . (prudent)", choices: ["prudemment", "prudentement", "prudement"], correctIdx: 0 },
        { sentence: "Arrêtez-vous ___ . (régulier)", choices: ["régulièrement", "régulièrment", "régulièremen"], correctIdx: 0 },
        { sentence: "douce → ___", choices: ["doucement", "doucementent", "doucment"], correctIdx: 0 },
        { sentence: "vrai → ___", choices: ["vraiment", "vraimentent", "vraieement"], correctIdx: 0 },
        { sentence: "gai → ___", choices: ["gaiement", "gaiment", "gaiemment"], correctIdx: 0 },
        { sentence: "courant → ___", choices: ["couramment", "courantement", "courentment"], correctIdx: 0 },
        { sentence: "patient → ___", choices: ["patiemment", "patientement", "patiament"], correctIdx: 0 },
        { sentence: "lent → ___", choices: ["lentement", "lenamment", "lenemment"], correctIdx: 0 },
        { sentence: "gentil → ___", choices: ["gentiment", "gentillement", "gentilement"], correctIdx: 0 },
        { sentence: "bref → ___", choices: ["brièvement", "brefement", "brevement"], correctIdx: 0 },
      ],
    },
    {
      type: "fill",
      title: "Complétez",
      instruction: "Écrivez l'adverbe en -ment.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "Il parle ___ . (rapide)", hint: "féminin + ment", answer: "rapidement" },
        { sentence: "Ils sont ___ prudents. (général)", hint: "formation", answer: "généralement" },
        { sentence: "Elle est ___ d'accord. (complet)", hint: "voyelle", answer: "complètement" },
        { sentence: "Il roule ___ . (prudent)", hint: "-ent → -emment", answer: "prudemment" },
        { sentence: "On parle chinois ___ . (courant)", hint: "-amment", answer: "couramment" },
        { sentence: "Il attend ___ . (patient)", hint: "-emment", answer: "patiemment" },
        { sentence: "Il marche ___ . (lent)", hint: "exception", answer: "lentement" },
        { sentence: "Il a répondu ___ . (poli)", hint: "voyelle", answer: "poliment" },
        { sentence: "C'est ___ vrai. (absolu)", hint: "voyelle", answer: "absolument" },
        { sentence: "Il a expliqué ___ . (précis)", hint: "irrégulier", answer: "précisément" },
      ],
    },
  ],
};
