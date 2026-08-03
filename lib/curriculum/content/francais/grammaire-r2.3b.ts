import type { ConjLesson } from "../../conjugation-data";

// ── Exercise 1 helpers ────────────────────────────────────────────────────────
// Fill in the full conjugated form (infinitive hint given)

const ex1Pool = (() => {
  const items: Array<{ sentence: string; hint: string; answer: string }> = [];

  // vouloir
  const vouloirHint = "veux / veut / voulons / voulez / veulent";
  const vouloirForms = [
    { display: "Je",    answer: "veux",    tail: " apprendre le français." },
    { display: "Tu",    answer: "veux",    tail: " devenir médecin ?" },
    { display: "Il",    answer: "veut",    tail: " acheter une voiture." },
    { display: "Elle",  answer: "veut",    tail: " visiter Rome." },
    { display: "Nous",  answer: "voulons", tail: " changer de ville." },
    { display: "Vous",  answer: "voulez",  tail: " rester ici ?" },
    { display: "Ils",   answer: "veulent", tail: " manger au restaurant." },
    { display: "Elles", answer: "veulent", tail: " partir en vacances." },
  ];
  vouloirForms.forEach((p) => {
    items.push({
      sentence: `${p.display} ___ (vouloir)${p.tail}`,
      hint: vouloirHint,
      answer: p.answer,
    });
  });

  // pouvoir
  const pouvoirHint = "peux / peut / pouvons / pouvez / peuvent";
  const pouvoirForms = [
    { display: "Je",    answer: "peux",    tail: " t'aider avec ça." },
    { display: "Tu",    answer: "peux",    tail: " venir ce soir ?" },
    { display: "Il",    answer: "peut",    tail: " conduire sans lunettes." },
    { display: "Elle",  answer: "peut",    tail: " chanter très bien." },
    { display: "Nous",  answer: "pouvons", tail: " commencer maintenant." },
    { display: "Vous",  answer: "pouvez",  tail: " choisir votre place." },
    { display: "Ils",   answer: "peuvent", tail: " travailler ensemble." },
    { display: "Elles", answer: "peuvent", tail: " participer au concours." },
  ];
  pouvoirForms.forEach((p) => {
    items.push({
      sentence: `${p.display} ___ (pouvoir)${p.tail}`,
      hint: pouvoirHint,
      answer: p.answer,
    });
  });

  // devoir
  const devoirHint = "dois / doit / devons / devez / doivent";
  const devoirForms = [
    { display: "Je",    answer: "dois",    tail: " finir ce rapport." },
    { display: "Tu",    answer: "dois",    tail: " rentrer avant minuit." },
    { display: "Il",    answer: "doit",    tail: " respecter les règles." },
    { display: "Elle",  answer: "doit",    tail: " préparer l'examen." },
    { display: "Nous",  answer: "devons",  tail: " partir dans une heure." },
    { display: "Vous",  answer: "devez",   tail: " remettre le devoir demain." },
    { display: "Ils",   answer: "doivent", tail: " obéir aux consignes." },
    { display: "Elles", answer: "doivent", tail: " signer le contrat." },
  ];
  devoirForms.forEach((p) => {
    items.push({
      sentence: `${p.display} ___ (devoir)${p.tail}`,
      hint: devoirHint,
      answer: p.answer,
    });
  });

  // savoir
  const savoirHint = "sais / sait / savons / savez / savent";
  const savoirForms = [
    { display: "Je",    answer: "sais",   tail: " jouer de la guitare." },
    { display: "Tu",    answer: "sais",   tail: " réparer un vélo ?" },
    { display: "Il",    answer: "sait",   tail: " parler trois langues." },
    { display: "Elle",  answer: "sait",   tail: " cuisiner des plats exotiques." },
    { display: "Nous",  answer: "savons", tail: " résoudre ce problème." },
    { display: "Vous",  answer: "savez",  tail: " utiliser ce logiciel." },
    { display: "Ils",   answer: "savent", tail: " lire les cartes." },
    { display: "Elles", answer: "savent", tail: " danser le tango." },
  ];
  savoirForms.forEach((p) => {
    items.push({
      sentence: `${p.display} ___ (savoir)${p.tail}`,
      hint: savoirHint,
      answer: p.answer,
    });
  });

  return items;
})();

// ── Exercise 2 helpers ────────────────────────────────────────────────────────
// Fill in the full conjugated form — different sentence templates

const ex2Pool = (() => {
  const items: Array<{ sentence: string; hint: string; answer: string }> = [];

  // vouloir — different tails
  const vouloirHint2 = "veux / veut / voulons / voulez / veulent";
  const vouloirForms2 = [
    { display: "Je",    answer: "veux",    tail: " comprendre la leçon." },
    { display: "Tu",    answer: "veux",    tail: " adopter un chien ?" },
    { display: "Il",    answer: "veut",    tail: " réussir son bac." },
    { display: "Elle",  answer: "veut",    tail: " s'inscrire au cours." },
    { display: "Nous",  answer: "voulons", tail: " organiser une fête." },
    { display: "Vous",  answer: "voulez",  tail: " garder ce secret ?" },
    { display: "Ils",   answer: "veulent", tail: " louer un appartement." },
    { display: "Elles", answer: "veulent", tail: " lancer une entreprise." },
  ];
  vouloirForms2.forEach((p) => {
    items.push({
      sentence: `${p.display} ___ (vouloir)${p.tail}`,
      hint: vouloirHint2,
      answer: p.answer,
    });
  });

  // pouvoir — different tails
  const pouvoirHint2 = "peux / peut / pouvons / pouvez / peuvent";
  const pouvoirForms2 = [
    { display: "Je",    answer: "peux",    tail: " porter cette valise." },
    { display: "Tu",    answer: "peux",    tail: " rester encore un peu ?" },
    { display: "Il",    answer: "peut",    tail: " nager sur deux kilomètres." },
    { display: "Elle",  answer: "peut",    tail: " finir avant toi." },
    { display: "Nous",  answer: "pouvons", tail: " vous rejoindre plus tard." },
    { display: "Vous",  answer: "pouvez",  tail: " poser des questions." },
    { display: "Ils",   answer: "peuvent", tail: " s'inscrire en ligne." },
    { display: "Elles", answer: "peuvent", tail: " répondre en français." },
  ];
  pouvoirForms2.forEach((p) => {
    items.push({
      sentence: `${p.display} ___ (pouvoir)${p.tail}`,
      hint: pouvoirHint2,
      answer: p.answer,
    });
  });

  // devoir — different tails
  const devoirHint2 = "dois / doit / devons / devez / doivent";
  const devoirForms2 = [
    { display: "Je",    answer: "dois",    tail: " rendre ce livre demain." },
    { display: "Tu",    answer: "dois",    tail: " appeler ta mère." },
    { display: "Il",    answer: "doit",    tail: " prendre ce médicament." },
    { display: "Elle",  answer: "doit",    tail: " confirmer sa réservation." },
    { display: "Nous",  answer: "devons",  tail: " voter avant samedi." },
    { display: "Vous",  answer: "devez",   tail: " présenter votre billet." },
    { display: "Ils",   answer: "doivent", tail: " porter un uniforme." },
    { display: "Elles", answer: "doivent", tail: " terminer le projet ensemble." },
  ];
  devoirForms2.forEach((p) => {
    items.push({
      sentence: `${p.display} ___ (devoir)${p.tail}`,
      hint: devoirHint2,
      answer: p.answer,
    });
  });

  // savoir — different tails
  const savoirHint2 = "sais / sait / savons / savez / savent";
  const savoirForms2 = [
    { display: "Je",    answer: "sais",   tail: " nager depuis l'âge de cinq ans." },
    { display: "Tu",    answer: "sais",   tail: " faire du vélo ?" },
    { display: "Il",    answer: "sait",   tail: " écrire en arabe." },
    { display: "Elle",  answer: "sait",   tail: " piloter un avion." },
    { display: "Nous",  answer: "savons", tail: " travailler en équipe." },
    { display: "Vous",  answer: "savez",  tail: " expliquer ce concept ?" },
    { display: "Ils",   answer: "savent", tail: " gérer leur budget." },
    { display: "Elles", answer: "savent", tail: " chanter en harmonie." },
  ];
  savoirForms2.forEach((p) => {
    items.push({
      sentence: `${p.display} ___ (savoir)${p.tail}`,
      hint: savoirHint2,
      answer: p.answer,
    });
  });

  return items;
})();

// ── Exercise 3 helpers ────────────────────────────────────────────────────────
// Singular → plural transformation

const ex3Pool = (() => {
  const items: Array<{ sentence: string; hint: string; answer: string }> = [];

  // vouloir
  const vouloirPairs = [
    { sing: "Je veux",    plur: "Nous", answer: "voulons", tail: " apprendre." },
    { sing: "Tu veux",    plur: "Vous", answer: "voulez",  tail: " changer." },
    { sing: "Il veut",    plur: "Ils",  answer: "veulent", tail: " réussir." },
    { sing: "Elle veut",  plur: "Elles",answer: "veulent", tail: " partir." },
  ];
  vouloirPairs.forEach((p) => {
    items.push({
      sentence: `${p.sing}${p.tail} → ${p.plur} ___${p.tail}`,
      hint: "pluraliser la forme",
      answer: p.answer,
    });
  });

  // pouvoir
  const pouvoirPairs = [
    { sing: "Je peux",    plur: "Nous", answer: "pouvons", tail: " t'aider." },
    { sing: "Tu peux",    plur: "Vous", answer: "pouvez",  tail: " choisir." },
    { sing: "Il peut",    plur: "Ils",  answer: "peuvent", tail: " venir." },
    { sing: "Elle peut",  plur: "Elles",answer: "peuvent", tail: " attendre." },
  ];
  pouvoirPairs.forEach((p) => {
    items.push({
      sentence: `${p.sing}${p.tail} → ${p.plur} ___${p.tail}`,
      hint: "pluraliser la forme",
      answer: p.answer,
    });
  });

  // devoir
  const devoirPairs = [
    { sing: "Je dois",    plur: "Nous", answer: "devons",  tail: " travailler." },
    { sing: "Tu dois",    plur: "Vous", answer: "devez",   tail: " finir." },
    { sing: "Il doit",    plur: "Ils",  answer: "doivent", tail: " étudier." },
    { sing: "Elle doit",  plur: "Elles",answer: "doivent", tail: " signer." },
  ];
  devoirPairs.forEach((p) => {
    items.push({
      sentence: `${p.sing}${p.tail} → ${p.plur} ___${p.tail}`,
      hint: "pluraliser la forme",
      answer: p.answer,
    });
  });

  // savoir
  const savoirPairs = [
    { sing: "Je sais",    plur: "Nous", answer: "savons", tail: " lire." },
    { sing: "Tu sais",    plur: "Vous", answer: "savez",  tail: " cuisiner." },
    { sing: "Il sait",    plur: "Ils",  answer: "savent", tail: " danser." },
    { sing: "Elle sait",  plur: "Elles",answer: "savent", tail: " conduire." },
  ];
  savoirPairs.forEach((p) => {
    items.push({
      sentence: `${p.sing}${p.tail} → ${p.plur} ___${p.tail}`,
      hint: "pluraliser la forme",
      answer: p.answer,
    });
  });

  return items;
})();

export const A1_CONJ_L15: ConjLesson = {
  slug: "a1-conj-l15",
  code: "R2.3",
  level: "A1",
  title: "Les verbes modaux",
  // Théorie intégrée dans G1.7 (modaux) et G1.9/G1.10 (irréguliers) — ne pas re-fusionner ici.
  theory: [],
  exercises: [],

  evalExercises: [
    {
      type: "qcm",
      title: "Évaluation — Question 1",
      instruction: "Choisissez le bon verbe modal.",
      transInstruction: { en: "Choose the correct modal verb.", ar: "اختر الفعل المساعد الصحيح.", fa: "فعل کمکی وجهی درست را انتخاب کنید.", ti: "ቅኑዕ ሞዳላዊ ግሲ ምረጽ.", uk: "Виберіть правильне модальне дієслово." },
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "Je ___ travailler demain. (obligation)",        choices: ["dois",  "peux",  "veux",  "voulons"], correctIdx: 0 },
        { sentence: "Elle ___ parler trois langues. (capacité)",     choices: ["peut",  "doit",  "veut",  "peuvent"], correctIdx: 0 },
        { sentence: "Nous ___ aller au cinéma ce soir. (désir)",     choices: ["voulons","pouvons","devons","voulez"], correctIdx: 0 },
        { sentence: "Tu ___ faire tes devoirs maintenant !",         choices: ["dois",  "peux",  "veux",  "voulez"],  correctIdx: 0 },
        { sentence: "Ils ___ partir à 8h pour le train.",            choices: ["doivent","peuvent","veulent","devez"], correctIdx: 0 },
        { sentence: "Je ___ un café, s'il vous plaît. (désir)",      choices: ["veux",  "dois",  "peux",  "veut"],    correctIdx: 0 },
        { sentence: "Vous ___ réserver à l'avance. (obligation)",    choices: ["devez", "pouvez","voulez","doivent"],  correctIdx: 0 },
        { sentence: "Il ___ m'aider ? (capacité + demande polie)",   choices: ["peut",  "doit",  "veut",  "peuvent"], correctIdx: 0 },
      ],
    },
    {
      type: "fill",
      title: "Évaluation — Question 2",
      instruction: "Complétez avec la bonne forme de pouvoir, vouloir ou devoir.",
      transInstruction: { en: "Complete with the correct form of «pouvoir», «vouloir» or «devoir».", ar: "أكمل بالصيغة الصحيحة من pouvoir أو vouloir أو devoir.", fa: "با صورت درست pouvoir، vouloir یا devoir کامل کنید.", ti: "ብቅኑዕ ቅርጺ ናይ pouvoir፣ vouloir ወይ devoir ምላእ.", uk: "Доповніть правильною формою «pouvoir», «vouloir» або «devoir»." },
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "Tu ___ partir maintenant.",           hint: "obligation → devoir",   answer: "dois"    },
        { sentence: "Elle ___ faire du sport.",            hint: "désir → vouloir",       answer: "veut"    },
        { sentence: "Nous ___ payer maintenant ?",         hint: "capacité → pouvoir",    answer: "pouvons" },
        { sentence: "Je ___ rester ici, s'il te plaît.",  hint: "désir → vouloir",       answer: "veux"    },
        { sentence: "Ils ___ arriver avant midi.",         hint: "obligation → devoir",   answer: "doivent" },
        { sentence: "Vous ___ venir avec nous ?",          hint: "capacité → pouvoir",    answer: "pouvez"  },
        { sentence: "Il ___ travailler ce week-end.",      hint: "obligation → devoir",   answer: "doit"    },
        { sentence: "Je ne ___ pas manger du gluten.",     hint: "capacité → pouvoir",    answer: "peux"    },
      ],
    },
  ],
};
