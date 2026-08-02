import type { GrammarLesson } from "../../grammar-data";

/** Unité 70 — Le subjonctif présent (G4.40) */
export const A1_GR_SUBJONCTIF_PRESENT: GrammarLesson = {
  slug: "a1-gr-subjonctif-present",
  code: "G4.40",
  level: "A1",
  title: "Le subjonctif présent",
  theory: [
    {
      type: "heading",
      text: "Utilisation",
    },
    {
      type: "plain_list",
      items: [
        "Mode verbal souvent après un verbe ou une expression + {a}que{/a}, pour exprimer une subjectivité.",
        "Indicatif (fait) : Aucun vaccin n'est nécessaire.",
        "Subjonctif (réaction) : Je suis surpris qu'aucun vaccin ne soit nécessaire.",
        "Exemple : Il faut que nous prenions un permis international ; j'étais surpris qu'aucun vaccin ne soit nécessaire.",
      ],
      allBullets: true,
    },
    {
      type: "heading",
      text: "Formation régulière",
    },
    {
      type: "plain_list",
      items: [
        "Radical du {a}ils{/a} du présent + {a}-e, -es, -e, -ions, -iez, -ent{/a}.",
        "Si {a}nous/vous{/a} ont un autre radical à l'indicatif, on le garde au subjonctif pour {a}nous/vous{/a} (deux radicaux).",
      ],
      allBullets: true,
    },
    {
      type: "grid",
      headers: ["", "parler", "prendre"],
      boldFirstCol: true,
      rows: [
        ["que je / j'", "parle", "prenne"],
        ["que tu", "parles", "prennes"],
        ["qu'il / elle / on", "parle", "prenne"],
        ["que nous", "parlions", "prenions"],
        ["que vous", "parliez", "preniez"],
        ["qu'ils / elles", "parlent", "prennent"],
      ],
    },
    {
      type: "heading",
      text: "Conjugaisons irrégulières",
    },
    {
      type: "grid",
      headers: ["", "être", "avoir", "aller", "faire", "pouvoir", "vouloir", "savoir"],
      boldFirstCol: true,
      rows: [
        ["je / j'", "sois", "aie", "aille", "fasse", "puisse", "veuille", "sache"],
        ["tu", "sois", "aies", "ailles", "fasses", "puisses", "veuilles", "saches"],
        ["il / elle / on", "soit", "ait", "aille", "fasse", "puisse", "veuille", "sache"],
        ["nous", "soyons", "ayons", "allions", "fassions", "puissions", "voulions", "sachions"],
        ["vous", "soyez", "ayez", "alliez", "fassiez", "puissiez", "vouliez", "sachiez"],
        ["ils / elles", "soient", "aient", "aillent", "fassent", "puissent", "veuillent", "sachent"],
      ],
    },
    {
      type: "heading",
      text: "Des utilisations du subjonctif",
    },
    {
      type: "highlight",
      label: "Nécessité / obligation",
      items: [
        "Il faut que nous prenions contact… ; Il est nécessaire que les objets soient bien protégés.",
      ],
    },
    {
      type: "highlight",
      label: "Sentiment",
      items: [
        "Je suis heureux que nous déménagions. ; C'est dommage que vous ne puissiez pas venir. ; Nous avons peur qu'elle se sente seule.",
      ],
    },
    {
      type: "highlight",
      label: "Jugement / appréciation",
      items: [
        "C'est bien qu'il ait une promotion. ; Je trouve incroyable qu'il prenne sa décision si rapidement.",
      ],
    },
    {
      type: "highlight",
      label: "Volonté / souhait",
      items: [
        "Je veux que tout soit prêt. ; J'aimerais que vous soyez présents.",
      ],
    },
    {
      type: "highlight",
      label: "Possibilité",
      items: [
        "Il est possible que nous ayons une augmentation. ; Il se peut qu'elle ne veuille pas.",
      ],
    },
    {
      type: "note",
      text: "Pas de subjonctif après {a}espérer{/a}. → J'espère que vous aimez votre nouvel appartement.",
    },
    {
      type: "note",
      text: "Subjonctif seulement si les sujets sont différents ; sinon infinitif. → Je souhaite partir. (pas : Je souhaite que je parte.)",
    },
    {
      type: "note",
      text: "Aussi après certaines conjonctions. → Je l'appelle avant qu'il parte.",
    },
    {
      type: "heading",
      text: "Prononciation",
    },
    {
      type: "plain_list",
      items: [
        "Ne pas confondre {a}avoir{/a} et {a}aller{/a} : que tu aies un visa ≠ que tu ailles au consulat.",
      ],
      noBulletItems: [0],
    },
  ],
  exercises: [
    {
      type: "qcm",
      title: "Subjonctif présent",
      instruction: "Choisissez la forme correcte.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "Il faut que nous ___ un permis.", choices: ["prenions", "prenons", "prendrons", "prendions"], correctIdx: 0 },
        { sentence: "Je suis surpris qu'aucun vaccin ne ___ nécessaire.", choices: ["soit", "est", "sera", "sois"], correctIdx: 0 },
        { sentence: "Il faut que je ___ . (parler)", choices: ["parle", "parles", "parlions", "parler"], correctIdx: 0 },
        { sentence: "Il faut que nous ___ . (prendre)", choices: ["prenions", "prenons", "prennent", "prendions"], correctIdx: 0 },
        { sentence: "Il faut que tu ___ . (être)", choices: ["sois", "es", "seras", "soit"], correctIdx: 0 },
        { sentence: "Il faut que tu ___ un visa. (avoir)", choices: ["aies", "as", "ailles", "aie"], correctIdx: 0 },
        { sentence: "Il faut que tu ___ au consulat. (aller)", choices: ["ailles", "vas", "aies", "aille"], correctIdx: 0 },
        { sentence: "Je veux que tout ___ prêt.", choices: ["soit", "est", "sera", "sois"], correctIdx: 0 },
        { sentence: "J'espère que vous ___ ça. (aimer)", choices: ["aimez", "aimiez", "aimiez-vous", "aimiez"], correctIdx: 0 },
        { sentence: "Je souhaite ___ . (même sujet)", choices: ["partir", "que je parte", "que je partis", "parte"], correctIdx: 0 },
      ],
    },
    {
      type: "fill",
      title: "Complétez",
      instruction: "Écrivez le verbe au subjonctif présent.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "Il faut que je ___ . (parler)", hint: "je", answer: "parle" },
        { sentence: "Il faut que nous ___ . (parler)", hint: "nous", answer: "parlions" },
        { sentence: "Il faut que je ___ . (prendre)", hint: "je", answer: "prenne" },
        { sentence: "Il faut que vous ___ . (prendre)", hint: "vous", answer: "preniez" },
        { sentence: "Il faut qu'il ___ . (être)", hint: "il", answer: "soit" },
        { sentence: "Il faut que nous ___ . (avoir)", hint: "nous", answer: "ayons" },
        { sentence: "Il faut qu'elle ___ . (aller)", hint: "elle", answer: "aille" },
        { sentence: "Il faut que je ___ . (faire)", hint: "je", answer: "fasse" },
        { sentence: "Il faut que vous ___ . (pouvoir)", hint: "vous", answer: "puissiez" },
        { sentence: "Je l'appelle avant qu'il ___ . (partir)", hint: "conjonction", answer: "parte" },
      ],
    },
  ],
};
