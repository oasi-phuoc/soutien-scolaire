import type { GrammarLesson, VerbToggleVerb } from "../../grammar-data";

const MODAL_VERBS: VerbToggleVerb[] = [
  {
    infinitive: "vouloir",
    radical: "",
    rows: [
      { pronoun: "je", ending: "veux" },
      { pronoun: "tu", ending: "veux" },
      { pronoun: "il / elle / on", ending: "veut" },
      { pronoun: "nous", ending: "voulons" },
      { pronoun: "vous", ending: "voulez" },
      { pronoun: "ils / elles", ending: "veulent" },
    ],
  },
  {
    infinitive: "pouvoir",
    radical: "",
    rows: [
      { pronoun: "je", ending: "peux" },
      { pronoun: "tu", ending: "peux" },
      { pronoun: "il / elle / on", ending: "peut" },
      { pronoun: "nous", ending: "pouvons" },
      { pronoun: "vous", ending: "pouvez" },
      { pronoun: "ils / elles", ending: "peuvent" },
    ],
  },
  {
    infinitive: "devoir",
    radical: "",
    rows: [
      { pronoun: "je", ending: "dois" },
      { pronoun: "tu", ending: "dois" },
      { pronoun: "il / elle / on", ending: "doit" },
      { pronoun: "nous", ending: "devons" },
      { pronoun: "vous", ending: "devez" },
      { pronoun: "ils / elles", ending: "doivent" },
    ],
  },
  {
    infinitive: "savoir",
    radical: "",
    rows: [
      { pronoun: "je", ending: "sais" },
      { pronoun: "tu", ending: "sais" },
      { pronoun: "il / elle / on", ending: "sait" },
      { pronoun: "nous", ending: "savons" },
      { pronoun: "vous", ending: "savez" },
      { pronoun: "ils / elles", ending: "savent" },
    ],
  },
  {
    infinitive: "falloir",
    radical: "",
    rows: [
      { pronoun: "il", ending: "faut" },
    ],
  },
];

/** Unité 6 — Pouvoir, vouloir, devoir, savoir et falloir (G1.7) */
export const A1_GR_MODAUX: GrammarLesson = {
  slug: "a1-gr-modaux",
  code: "G1.7",
  level: "A1",
  title: "Les verbes pouvoir, vouloir, devoir, savoir et falloir",
  theory: [
    {
      type: "heading",
      text: "Utilisation",
      trans: { en: "Usage", ar: "الاستخدام", fa: "کاربرد", ti: "ኣጠቓቕማ", uk: "Вживання" },
    },
    {
      type: "plain_list",
      items: [
        "Ces verbes expriment un état, une capacité ou une obligation. Ils sont toujours suivis d'un infinitif.",
      ],
    },

    {
      type: "plain_list",
      items: ["{a}Vouloir{/a} sert à exprimer un désir ou une volonté."],
    },
    {
      type: "grid",
      headers: ["Emploi", "Exemple"],
      rows: [
        ["Désir :", "Je veux manger une pizza."],
        ["Volonté :", "Je veux apprendre le français."],
      ],
    },

    {
      type: "plain_list",
      items: [
        "{a}Pouvoir{/a} sert à exprimer une capacité, une possibilité, une autorisation ou une interdiction (à la forme négative).",
      ],
    },
    {
      type: "grid",
      headers: ["Emploi", "Exemple"],
      rows: [
        ["Capacité :", "Je peux nager."],
        ["Possibilité :", "Nous pouvons partir maintenant."],
        ["Autorisation :", "Est-ce que je peux entrer ?"],
        ["Interdiction :", "Vous ne pouvez pas fumer ici."],
      ],
    },

    {
      type: "plain_list",
      items: [
        "{a}Devoir{/a} sert à exprimer une obligation, une nécessité, une interdiction (à la forme négative) ou une somme à payer.",
      ],
    },
    {
      type: "grid",
      headers: ["Emploi", "Exemple"],
      rows: [
        ["Obligation :", "Je dois faire mes devoirs."],
        ["Nécessité :", "Nous devons partir tôt."],
        ["Interdiction :", "Tu ne dois pas courir."],
        ["Somme à payer :", "Je vous dois 20 francs."],
      ],
    },

    {
      type: "plain_list",
      items: [
        "{a}Il faut{/a} sert à exprimer une nécessité générale ou une interdiction (à la forme négative).",
      ],
    },
    {
      type: "grid",
      headers: ["Emploi", "Exemple"],
      rows: [
        ["Nécessité générale :", "Il faut un passeport pour voyager. / Il faut arriver à l'heure."],
        ["Interdiction :", "Il ne faut pas parler pendant l'examen."],
      ],
    },

    {
      type: "plain_list",
      items: [
        "{a}Savoir{/a} sert à exprimer une connaissance, une compétence ou un savoir-faire.",
      ],
    },
    {
      type: "grid",
      headers: ["Emploi", "Exemple"],
      rows: [
        ["Connaissance :", "Je sais où habite Marie."],
        ["Compétence / savoir-faire :", "Elle sait cuisiner."],
      ],
    },

    {
      type: "heading",
      text: "La forme affirmative",
      trans: { en: "The affirmative form", ar: "صيغة الإثبات", fa: "صورت مثبت", ti: "ኣረጋጋጺ ቅርጺ", uk: "Стверджувальна форма" },
    },
    { type: "verb_toggle", buttonCols: 3, verbs: MODAL_VERBS },

    {
      type: "heading",
      text: "La forme négative",
      trans: { en: "The negative form", ar: "صيغة النفي", fa: "صورت منفی", ti: "ኣሉታዊ ቅርጺ", uk: "Заперечна форма" },
    },
    { type: "verb_toggle", buttonCols: 3, negation: true, verbs: MODAL_VERBS },

    {
      type: "heading",
      text: "Remarques",
      trans: { en: "Notes", ar: "ملاحظات", fa: "نکات", ti: "መተሓሳሰቢታት", uk: "Зауваження" },
    },
    {
      type: "plain_list",
      items: [
        "Pour demander quelque chose de façon polie, on utilise souvent {a}Je voudrais{/a} à la place de {a}Je veux{/a}.",
        "{a}Je voudrais{/a} un ticket de métro, s'il vous plaît.",
      ],
      allBullets: true,
    },
  ],
  exercises: [
    {
      type: "qcm",
      title: "Pouvoir, vouloir, devoir",
      instruction: "Choisissez la forme correcte.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "Je ___ aller avec toi.", choices: ["veux", "veut", "voulons", "peux"], correctIdx: 0 },
        { sentence: "Tu ___ parler français ?", choices: ["peux", "peut", "dois", "veux"], correctIdx: 0 },
        { sentence: "Il ___ être à l'aéroport avant 10 h.", choices: ["doit", "dois", "peut", "veut"], correctIdx: 0 },
        { sentence: "Nous ___ entrer ?", choices: ["pouvons", "pouvez", "devons", "voulons"], correctIdx: 0 },
        { sentence: "Vous ___ une chambre ?", choices: ["voulez", "veulent", "pouvez", "devez"], correctIdx: 0 },
        { sentence: "Ils ___ aller à l'aéroport.", choices: ["doivent", "doit", "peuvent", "veulent"], correctIdx: 0 },
        { sentence: "On ___ pas fumer dans l'avion.", choices: ["ne doit", "ne dois", "ne peut", "ne veut"], correctIdx: 0 },
        { sentence: "Il ___ faire la queue.", choices: ["faut", "dois", "peut", "veut"], correctIdx: 0 },
        { sentence: "Elle ___ une terrasse.", choices: ["veut", "veux", "peut", "doit"], correctIdx: 0 },
        { sentence: "Vous ___ parler sept langues !", choices: ["pouvez", "pouvons", "devez", "voulez"], correctIdx: 0 },
        { sentence: "Je ___ nager.", choices: ["sais", "sait", "connais", "savons"], correctIdx: 0 },
        { sentence: "Elle ___ cuisiner.", choices: ["sait", "sais", "connaît", "savez"], correctIdx: 0 },
      ],
    },
    {
      type: "fill",
      title: "Conjuguez le verbe",
      instruction: "Conjuguez le verbe entre parenthèses au présent.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "Je ___ (vouloir) un ticket.", hint: "vouloir → je", answer: "veux" },
        { sentence: "Tu ___ (pouvoir) m'aider ?", hint: "pouvoir → tu", answer: "peux" },
        { sentence: "Il ___ (devoir) partir.", hint: "devoir → il", answer: "doit" },
        { sentence: "Nous ___ (pouvoir) entrer ?", hint: "pouvoir → nous", answer: "pouvons" },
        { sentence: "Vous ___ (vouloir) un café ?", hint: "vouloir → vous", answer: "voulez" },
        { sentence: "Ils ___ (devoir) faire la queue.", hint: "devoir → ils", answer: "doivent" },
        { sentence: "Elle ___ (pouvoir) venir.", hint: "pouvoir → elle", answer: "peut" },
        { sentence: "On ___ (devoir) attendre.", hint: "devoir → on", answer: "doit" },
        { sentence: "Il ___ (falloir) un passeport.", hint: "falloir → il", answer: "faut" },
        { sentence: "Je ___ (devoir) combien ?", hint: "devoir → je", answer: "dois" },
        { sentence: "Je ___ (savoir) où habite Marie.", hint: "savoir → je", answer: "sais" },
        { sentence: "Elle ___ (savoir) cuisiner.", hint: "savoir → elle", answer: "sait" },
      ],
    },
  ],
};
