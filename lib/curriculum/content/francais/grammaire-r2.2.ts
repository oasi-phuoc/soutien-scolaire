import type { ConjLesson } from "../../conjugation-data";

// ── Exercise 1 helpers ────────────────────────────────────────────────────────
// Fill in the verb ending — reflexive pronoun already visible in sentence.

const ex1Pool = (() => {
  const items: Array<{ sentence: string; hint: string; answer: string }> = [];
  const hint = "-e / -es / -ons / -ez / -ent";

  // se lever (stem change: lèv singular/ils, lev nous/vous)
  const leverTails = [
    " à sept heures.", " tôt le matin.", " tard le week-end.", " avant le soleil.",
    " à midi.", " après l'alarme.", " à six heures.", " de bonne heure.",
    " chaque matin.", " vers huit heures.",
  ];
  type LeverRow = { display: string; refl: string; stem: string; ending: string };
  const leverRows: LeverRow[] = [
    { display: "Je",    refl: "me ",   stem: "lèv", ending: "e"   },
    { display: "Tu",    refl: "te ",   stem: "lèv", ending: "es"  },
    { display: "Il",    refl: "se ",   stem: "lèv", ending: "e"   },
    { display: "Elle",  refl: "se ",   stem: "lèv", ending: "e"   },
    { display: "Nous",  refl: "nous ", stem: "lev", ending: "ons" },
    { display: "Vous",  refl: "vous ", stem: "lev", ending: "ez"  },
    { display: "Ils",   refl: "se ",   stem: "lèv", ending: "ent" },
    { display: "Elles", refl: "se ",   stem: "lèv", ending: "ent" },
  ];
  leverRows.forEach((p, i) => {
    const tail = leverTails[i % leverTails.length]!;
    items.push({ sentence: `${p.display} ${p.refl}${p.stem}___${tail}`, hint, answer: p.ending });
  });

  // se coucher
  const coucherTails = [
    " après minuit.", " avant vingt-deux heures.", " tôt le soir.", " très tard.",
    " à dix heures.", " avant les enfants.", " après le dîner.", " assez tôt.",
    " vers onze heures.", " sans tarder.",
  ];
  type SimpleRow = { display: string; refl: string; ending: string };
  const coucherRows: SimpleRow[] = [
    { display: "Je",    refl: "me ",   ending: "e"   },
    { display: "Tu",    refl: "te ",   ending: "es"  },
    { display: "Il",    refl: "se ",   ending: "e"   },
    { display: "Elle",  refl: "se ",   ending: "e"   },
    { display: "Nous",  refl: "nous ", ending: "ons" },
    { display: "Vous",  refl: "vous ", ending: "ez"  },
    { display: "Ils",   refl: "se ",   ending: "ent" },
    { display: "Elles", refl: "se ",   ending: "ent" },
  ];
  coucherRows.forEach((p, i) => {
    const tail = coucherTails[i % coucherTails.length]!;
    items.push({ sentence: `${p.display} ${p.refl}couch___${tail}`, hint, answer: p.ending });
  });

  // se laver
  const laverTails = [
    " les mains avant le repas.", " les cheveux ce matin.", " le visage à l'eau froide.", " le dos.",
    " les dents après le dîner.", " les mains souvent.", " rapidement.", " les bras.",
    " les pieds.", " avant de sortir.",
  ];
  const laverRows: SimpleRow[] = [
    { display: "Je",    refl: "me ",   ending: "e"   },
    { display: "Tu",    refl: "te ",   ending: "es"  },
    { display: "Il",    refl: "se ",   ending: "e"   },
    { display: "Elle",  refl: "se ",   ending: "e"   },
    { display: "Nous",  refl: "nous ", ending: "ons" },
    { display: "Vous",  refl: "vous ", ending: "ez"  },
    { display: "Ils",   refl: "se ",   ending: "ent" },
    { display: "Elles", refl: "se ",   ending: "ent" },
  ];
  laverRows.forEach((p, i) => {
    const tail = laverTails[i % laverTails.length]!;
    items.push({ sentence: `${p.display} ${p.refl}lav___${tail}`, hint, answer: p.ending });
  });

  // se doucher
  const doucherTails = [
    " chaque matin.", " avant de partir.", " à l'eau chaude.", " rapidement.",
    " après le sport.", " le soir.", " en cinq minutes.", " tous les jours.",
    " avant le dîner.", " à l'eau froide.",
  ];
  const doucherRows: SimpleRow[] = [
    { display: "Je",    refl: "me ",   ending: "e"   },
    { display: "Tu",    refl: "te ",   ending: "es"  },
    { display: "Il",    refl: "se ",   ending: "e"   },
    { display: "Elle",  refl: "se ",   ending: "e"   },
    { display: "Nous",  refl: "nous ", ending: "ons" },
    { display: "Vous",  refl: "vous ", ending: "ez"  },
    { display: "Ils",   refl: "se ",   ending: "ent" },
    { display: "Elles", refl: "se ",   ending: "ent" },
  ];
  doucherRows.forEach((p, i) => {
    const tail = doucherTails[i % doucherTails.length]!;
    items.push({ sentence: `${p.display} ${p.refl}douch___${tail}`, hint, answer: p.ending });
  });

  // se brosser
  const brosserTails = [
    " les dents le matin.", " les cheveux avant de sortir.", " les dents après les repas.", " les dents deux fois par jour.",
    " les cheveux longtemps.", " les dents avec soin.", " les cheveux chaque soir.", " les dents rapidement.",
    " les cheveux en silence.", " les dents soigneusement.",
  ];
  const brosserRows: SimpleRow[] = [
    { display: "Je",    refl: "me ",   ending: "e"   },
    { display: "Tu",    refl: "te ",   ending: "es"  },
    { display: "Il",    refl: "se ",   ending: "e"   },
    { display: "Elle",  refl: "se ",   ending: "e"   },
    { display: "Nous",  refl: "nous ", ending: "ons" },
    { display: "Vous",  refl: "vous ", ending: "ez"  },
    { display: "Ils",   refl: "se ",   ending: "ent" },
    { display: "Elles", refl: "se ",   ending: "ent" },
  ];
  brosserRows.forEach((p, i) => {
    const tail = brosserTails[i % brosserTails.length]!;
    items.push({ sentence: `${p.display} ${p.refl}bross___${tail}`, hint, answer: p.ending });
  });

  // se raser
  const raserTails = [
    " tous les matins.", " avant de partir au travail.", " rapidement.", " chaque jour.",
    " lentement.", " sans se couper.", " avec soin.", " le week-end.",
    " le visage.", " le matin.",
  ];
  const raserRows: SimpleRow[] = [
    { display: "Je",    refl: "me ",   ending: "e"   },
    { display: "Tu",    refl: "te ",   ending: "es"  },
    { display: "Il",    refl: "se ",   ending: "e"   },
    { display: "Elle",  refl: "se ",   ending: "e"   },
    { display: "Nous",  refl: "nous ", ending: "ons" },
    { display: "Vous",  refl: "vous ", ending: "ez"  },
    { display: "Ils",   refl: "se ",   ending: "ent" },
    { display: "Elles", refl: "se ",   ending: "ent" },
  ];
  raserRows.forEach((p, i) => {
    const tail = raserTails[i % raserTails.length]!;
    items.push({ sentence: `${p.display} ${p.refl}ras___${tail}`, hint, answer: p.ending });
  });

  // se coiffer
  const coifferTails = [
    " devant le miroir.", " rapidement.", " avant de sortir.", " chaque matin.",
    " avec soin.", " longuement.", " en cinq minutes.", " avant le travail.",
    " lentement.", " après la douche.",
  ];
  const coifferRows: SimpleRow[] = [
    { display: "Je",    refl: "me ",   ending: "e"   },
    { display: "Tu",    refl: "te ",   ending: "es"  },
    { display: "Il",    refl: "se ",   ending: "e"   },
    { display: "Elle",  refl: "se ",   ending: "e"   },
    { display: "Nous",  refl: "nous ", ending: "ons" },
    { display: "Vous",  refl: "vous ", ending: "ez"  },
    { display: "Ils",   refl: "se ",   ending: "ent" },
    { display: "Elles", refl: "se ",   ending: "ent" },
  ];
  coifferRows.forEach((p, i) => {
    const tail = coifferTails[i % coifferTails.length]!;
    items.push({ sentence: `${p.display} ${p.refl}coiff___${tail}`, hint, answer: p.ending });
  });

  // s'habiller (m'/t'/s' before vowel)
  const habillerTails = [
    " chaudement en hiver.", " élégamment pour la fête.", " rapidement le matin.", " avec soin.",
    " pour l'école.", " en cinq minutes.", " avant de sortir.", " légèrement en été.",
    " en bleu.", " pour le travail.",
  ];
  type HabillerRow = { display: string; refl: string; ending: string };
  const habillerRows: HabillerRow[] = [
    { display: "Je",    refl: "m'",    ending: "e"   },
    { display: "Tu",    refl: "t'",    ending: "es"  },
    { display: "Il",    refl: "s'",    ending: "e"   },
    { display: "Elle",  refl: "s'",    ending: "e"   },
    { display: "Nous",  refl: "nous ", ending: "ons" },
    { display: "Vous",  refl: "vous ", ending: "ez"  },
    { display: "Ils",   refl: "s'",    ending: "ent" },
    { display: "Elles", refl: "s'",    ending: "ent" },
  ];
  habillerRows.forEach((p, i) => {
    const tail = habillerTails[i % habillerTails.length]!;
    items.push({ sentence: `${p.display} ${p.refl}habill___${tail}`, hint, answer: p.ending });
  });

  // se reposer
  const reposerTails = [
    " après le déjeuner.", " le week-end.", " sur le canapé.", " en silence.",
    " un peu avant de repartir.", " toute la journée.", " dans le jardin.", " après le travail.",
    " quelques minutes.", " pendant les vacances.",
  ];
  const reposerRows: SimpleRow[] = [
    { display: "Je",    refl: "me ",   ending: "e"   },
    { display: "Tu",    refl: "te ",   ending: "es"  },
    { display: "Il",    refl: "se ",   ending: "e"   },
    { display: "Elle",  refl: "se ",   ending: "e"   },
    { display: "Nous",  refl: "nous ", ending: "ons" },
    { display: "Vous",  refl: "vous ", ending: "ez"  },
    { display: "Ils",   refl: "se ",   ending: "ent" },
    { display: "Elles", refl: "se ",   ending: "ent" },
  ];
  reposerRows.forEach((p, i) => {
    const tail = reposerTails[i % reposerTails.length]!;
    items.push({ sentence: `${p.display} ${p.refl}repos___${tail}`, hint, answer: p.ending });
  });

  return items;
})();

// ── Exercise 2 helpers ────────────────────────────────────────────────────────
// Conjugate the full reflexive form (pronoun + verb) from infinitive.

const ex2Pool = (() => {
  const items: Array<{ sentence: string; hint: string; answer: string }> = [];

  // se lever
  const leverTails2 = [
    " à sept heures.", " tôt le matin.", " de bonne heure.", " très tard.",
    " avant le soleil.", " chaque matin.", " après l'alarme.", " le week-end.",
    " à six heures.", " vers huit heures.",
  ];
  type Ex2Row = { display: string; answer: string; sep: string };
  const leverForms2: Ex2Row[] = [
    { display: "Je",    answer: "me lève",    sep: " " },
    { display: "Tu",    answer: "te lèves",   sep: " " },
    { display: "Il",    answer: "se lève",    sep: " " },
    { display: "Elle",  answer: "se lève",    sep: " " },
    { display: "Nous",  answer: "nous levons", sep: " " },
    { display: "Vous",  answer: "vous levez",  sep: " " },
    { display: "Ils",   answer: "se lèvent",  sep: " " },
    { display: "Elles", answer: "se lèvent",  sep: " " },
  ];
  leverForms2.forEach((p, i) => {
    const tail = leverTails2[i % leverTails2.length]!;
    items.push({
      sentence: `${p.display}${p.sep}___ (se lever)${tail}`,
      hint: "me lève / te lèves / se lève / nous levons / vous levez / se lèvent",
      answer: p.answer,
    });
  });

  // se coucher
  const coucherTails2 = [
    " après minuit.", " avant vingt-deux heures.", " tôt le soir.", " très tard.",
    " à dix heures.", " avant les enfants.", " après le dîner.", " assez tôt.",
    " vers onze heures.", " sans tarder.",
  ];
  const coucherForms2: Ex2Row[] = [
    { display: "Je",    answer: "me couche",     sep: " " },
    { display: "Tu",    answer: "te couches",    sep: " " },
    { display: "Il",    answer: "se couche",     sep: " " },
    { display: "Elle",  answer: "se couche",     sep: " " },
    { display: "Nous",  answer: "nous couchons", sep: " " },
    { display: "Vous",  answer: "vous couchez",  sep: " " },
    { display: "Ils",   answer: "se couchent",   sep: " " },
    { display: "Elles", answer: "se couchent",   sep: " " },
  ];
  coucherForms2.forEach((p, i) => {
    const tail = coucherTails2[i % coucherTails2.length]!;
    items.push({
      sentence: `${p.display}${p.sep}___ (se coucher)${tail}`,
      hint: "me couche / te couches / se couche / nous couchons / vous couchez / se couchent",
      answer: p.answer,
    });
  });

  // se laver
  const laverTails2 = [
    " les mains avant le repas.", " les cheveux ce matin.", " le visage le soir.", " le dos.",
    " les dents après le dîner.", " rapidement.", " les bras.", " les pieds.",
    " avant de sortir.", " soigneusement.",
  ];
  const laverForms2: Ex2Row[] = [
    { display: "Je",    answer: "me lave",     sep: " " },
    { display: "Tu",    answer: "te laves",    sep: " " },
    { display: "Il",    answer: "se lave",     sep: " " },
    { display: "Elle",  answer: "se lave",     sep: " " },
    { display: "Nous",  answer: "nous lavons", sep: " " },
    { display: "Vous",  answer: "vous lavez",  sep: " " },
    { display: "Ils",   answer: "se lavent",   sep: " " },
    { display: "Elles", answer: "se lavent",   sep: " " },
  ];
  laverForms2.forEach((p, i) => {
    const tail = laverTails2[i % laverTails2.length]!;
    items.push({
      sentence: `${p.display}${p.sep}___ (se laver)${tail}`,
      hint: "me lave / te laves / se lave / nous lavons / vous lavez / se lavent",
      answer: p.answer,
    });
  });

  // se doucher
  const doucherTails2 = [
    " chaque matin.", " avant de partir.", " à l'eau chaude.", " rapidement.",
    " après le sport.", " le soir.", " en cinq minutes.", " tous les jours.",
    " avant le dîner.", " à l'eau froide.",
  ];
  const doucherForms2: Ex2Row[] = [
    { display: "Je",    answer: "me douche",      sep: " " },
    { display: "Tu",    answer: "te douches",     sep: " " },
    { display: "Il",    answer: "se douche",      sep: " " },
    { display: "Elle",  answer: "se douche",      sep: " " },
    { display: "Nous",  answer: "nous douchons",  sep: " " },
    { display: "Vous",  answer: "vous douchez",   sep: " " },
    { display: "Ils",   answer: "se douchent",    sep: " " },
    { display: "Elles", answer: "se douchent",    sep: " " },
  ];
  doucherForms2.forEach((p, i) => {
    const tail = doucherTails2[i % doucherTails2.length]!;
    items.push({
      sentence: `${p.display}${p.sep}___ (se doucher)${tail}`,
      hint: "me douche / te douches / se douche / nous douchons / vous douchez / se douchent",
      answer: p.answer,
    });
  });

  // se brosser
  const brosserTails2 = [
    " les dents le matin.", " les cheveux avant de sortir.", " les dents après les repas.", " les dents deux fois par jour.",
    " les cheveux avec soin.", " les dents rapidement.", " les cheveux chaque soir.", " les dents soigneusement.",
    " les cheveux longuement.", " les dents le soir.",
  ];
  const brosserForms2: Ex2Row[] = [
    { display: "Je",    answer: "me brosse",      sep: " " },
    { display: "Tu",    answer: "te brosses",     sep: " " },
    { display: "Il",    answer: "se brosse",      sep: " " },
    { display: "Elle",  answer: "se brosse",      sep: " " },
    { display: "Nous",  answer: "nous brossons",  sep: " " },
    { display: "Vous",  answer: "vous brossez",   sep: " " },
    { display: "Ils",   answer: "se brossent",    sep: " " },
    { display: "Elles", answer: "se brossent",    sep: " " },
  ];
  brosserForms2.forEach((p, i) => {
    const tail = brosserTails2[i % brosserTails2.length]!;
    items.push({
      sentence: `${p.display}${p.sep}___ (se brosser)${tail}`,
      hint: "me brosse / te brosses / se brosse / nous brossons / vous brossez / se brossent",
      answer: p.answer,
    });
  });

  // se raser
  const raserTails2 = [
    " tous les matins.", " avant de partir au travail.", " rapidement.", " chaque jour.",
    " avec soin.", " le matin.", " lentement.", " sans se couper.",
    " le week-end.", " le visage.",
  ];
  const raserForms2: Ex2Row[] = [
    { display: "Je",    answer: "me rase",     sep: " " },
    { display: "Tu",    answer: "te rases",    sep: " " },
    { display: "Il",    answer: "se rase",     sep: " " },
    { display: "Elle",  answer: "se rase",     sep: " " },
    { display: "Nous",  answer: "nous rasons", sep: " " },
    { display: "Vous",  answer: "vous rasez",  sep: " " },
    { display: "Ils",   answer: "se rasent",   sep: " " },
    { display: "Elles", answer: "se rasent",   sep: " " },
  ];
  raserForms2.forEach((p, i) => {
    const tail = raserTails2[i % raserTails2.length]!;
    items.push({
      sentence: `${p.display}${p.sep}___ (se raser)${tail}`,
      hint: "me rase / te rases / se rase / nous rasons / vous rasez / se rasent",
      answer: p.answer,
    });
  });

  // se coiffer
  const coifferTails2 = [
    " devant le miroir.", " avant de sortir.", " rapidement.", " avec soin.",
    " longuement.", " en cinq minutes.", " chaque matin.", " avant le travail.",
    " après la douche.", " le matin.",
  ];
  const coifferForms2: Ex2Row[] = [
    { display: "Je",    answer: "me coiffe",      sep: " " },
    { display: "Tu",    answer: "te coiffes",     sep: " " },
    { display: "Il",    answer: "se coiffe",      sep: " " },
    { display: "Elle",  answer: "se coiffe",      sep: " " },
    { display: "Nous",  answer: "nous coiffons",  sep: " " },
    { display: "Vous",  answer: "vous coiffez",   sep: " " },
    { display: "Ils",   answer: "se coiffent",    sep: " " },
    { display: "Elles", answer: "se coiffent",    sep: " " },
  ];
  coifferForms2.forEach((p, i) => {
    const tail = coifferTails2[i % coifferTails2.length]!;
    items.push({
      sentence: `${p.display}${p.sep}___ (se coiffer)${tail}`,
      hint: "me coiffe / te coiffes / se coiffe / nous coiffons / vous coiffez / se coiffent",
      answer: p.answer,
    });
  });

  // s'habiller
  const habillerTails2 = [
    " chaudement en hiver.", " élégamment pour la fête.", " rapidement le matin.", " avec soin.",
    " pour l'école.", " en cinq minutes.", " avant de sortir.", " légèrement en été.",
    " en bleu.", " pour le travail.",
  ];
  const habillerForms2: Ex2Row[] = [
    { display: "Je",    answer: "m'habille",      sep: " " },
    { display: "Tu",    answer: "t'habilles",     sep: " " },
    { display: "Il",    answer: "s'habille",      sep: " " },
    { display: "Elle",  answer: "s'habille",      sep: " " },
    { display: "Nous",  answer: "nous habillons", sep: " " },
    { display: "Vous",  answer: "vous habillez",  sep: " " },
    { display: "Ils",   answer: "s'habillent",    sep: " " },
    { display: "Elles", answer: "s'habillent",    sep: " " },
  ];
  habillerForms2.forEach((p, i) => {
    const tail = habillerTails2[i % habillerTails2.length]!;
    items.push({
      sentence: `${p.display}${p.sep}___ (s'habiller)${tail}`,
      hint: "m'habille / t'habilles / s'habille / nous habillons / vous habillez / s'habillent",
      answer: p.answer,
    });
  });

  // se reposer
  const reposerTails2 = [
    " après le déjeuner.", " le week-end.", " sur le canapé.", " en silence.",
    " un peu avant de repartir.", " toute la journée.", " dans le jardin.", " après le travail.",
    " quelques minutes.", " pendant les vacances.",
  ];
  const reposerForms2: Ex2Row[] = [
    { display: "Je",    answer: "me repose",      sep: " " },
    { display: "Tu",    answer: "te reposes",     sep: " " },
    { display: "Il",    answer: "se repose",      sep: " " },
    { display: "Elle",  answer: "se repose",      sep: " " },
    { display: "Nous",  answer: "nous reposons",  sep: " " },
    { display: "Vous",  answer: "vous reposez",   sep: " " },
    { display: "Ils",   answer: "se reposent",    sep: " " },
    { display: "Elles", answer: "se reposent",    sep: " " },
  ];
  reposerForms2.forEach((p, i) => {
    const tail = reposerTails2[i % reposerTails2.length]!;
    items.push({
      sentence: `${p.display}${p.sep}___ (se reposer)${tail}`,
      hint: "me repose / te reposes / se repose / nous reposons / vous reposez / se reposent",
      answer: p.answer,
    });
  });

  return items;
})();

// ── Exercise 3 helpers ────────────────────────────────────────────────────────
// Singular → plural: given "Je me lève tôt. → Nous nous ___", answer: "levons"

const ex3Pool = (() => {
  const items: Array<{ sentence: string; hint: string; answer: string }> = [];

  type SingPlurRow = {
    singDisplay: string;
    singRefl: string;
    singForm: string;
    plurDisplay: string;
    plurRefl: string;
    plurForm: string;
  };

  function makePronouns(
    singForms: [string, string, string, string],
    plurForms: [string, string, string, string],
    tails: string[],
  ) {
    const rows: SingPlurRow[] = [
      { singDisplay: "Je",    singRefl: "me ",   singForm: singForms[0], plurDisplay: "Nous",  plurRefl: "nous ",  plurForm: plurForms[0] },
      { singDisplay: "Tu",    singRefl: "te ",   singForm: singForms[1], plurDisplay: "Vous",  plurRefl: "vous ",  plurForm: plurForms[1] },
      { singDisplay: "Il",    singRefl: "se ",   singForm: singForms[2], plurDisplay: "Ils",   plurRefl: "se ",    plurForm: plurForms[2] },
      { singDisplay: "Elle",  singRefl: "se ",   singForm: singForms[3], plurDisplay: "Elles", plurRefl: "se ",    plurForm: plurForms[3] },
    ];
    rows.forEach((p, i) => {
      const tail = tails[i % tails.length]!;
      items.push({
        sentence: `${p.singDisplay} ${p.singRefl}${p.singForm}${tail} → ${p.plurDisplay} ${p.plurRefl}___${tail}`,
        hint: "pluraliser la forme",
        answer: p.plurForm,
      });
    });
  }

  // se lever (stem change)
  const leverPairs: SingPlurRow[] = [
    { singDisplay: "Je",    singRefl: "me ",   singForm: "lève",   plurDisplay: "Nous",  plurRefl: "nous ",  plurForm: "levons"  },
    { singDisplay: "Tu",    singRefl: "te ",   singForm: "lèves",  plurDisplay: "Vous",  plurRefl: "vous ",  plurForm: "levez"   },
    { singDisplay: "Il",    singRefl: "se ",   singForm: "lève",   plurDisplay: "Ils",   plurRefl: "se ",    plurForm: "lèvent"  },
    { singDisplay: "Elle",  singRefl: "se ",   singForm: "lève",   plurDisplay: "Elles", plurRefl: "se ",    plurForm: "lèvent"  },
  ];
  const leverTails3 = [" tôt le matin.", " vers sept heures.", " avant le soleil.", " après l'alarme."];
  leverPairs.forEach((p, i) => {
    const tail = leverTails3[i % leverTails3.length]!;
    items.push({
      sentence: `${p.singDisplay} ${p.singRefl}${p.singForm}${tail} → ${p.plurDisplay} ${p.plurRefl}___${tail}`,
      hint: "pluraliser la forme",
      answer: p.plurForm,
    });
  });

  // se coucher
  makePronouns(
    ["couche", "couches", "couche", "couche"],
    ["couchons", "couchez", "couchent", "couchent"],
    [" tôt.", " avant minuit.", " après le dîner.", " à dix heures."],
  );

  // se laver
  makePronouns(
    ["lave", "laves", "lave", "lave"],
    ["lavons", "lavez", "lavent", "lavent"],
    [" les mains.", " les cheveux.", " le visage.", " avant le repas."],
  );

  // se doucher
  makePronouns(
    ["douche", "douches", "douche", "douche"],
    ["douchons", "douchez", "douchent", "douchent"],
    [" le matin.", " après le sport.", " rapidement.", " chaque soir."],
  );

  // se brosser
  makePronouns(
    ["brosse", "brosses", "brosse", "brosse"],
    ["brossons", "brossez", "brossent", "brossent"],
    [" les dents.", " les cheveux.", " les dents après le repas.", " les cheveux le matin."],
  );

  // se raser
  makePronouns(
    ["rase", "rases", "rase", "rase"],
    ["rasons", "rasez", "rasent", "rasent"],
    [" le matin.", " chaque jour.", " avec soin.", " avant de sortir."],
  );

  // se coiffer
  makePronouns(
    ["coiffe", "coiffes", "coiffe", "coiffe"],
    ["coiffons", "coiffez", "coiffent", "coiffent"],
    [" devant le miroir.", " avant de sortir.", " rapidement.", " le matin."],
  );

  // s'habiller — singular: m'/t'/s' habille, plural: nous/vous/s' habillons/…
  const habillerPairs: SingPlurRow[] = [
    { singDisplay: "Je",    singRefl: "m'",   singForm: "habille",   plurDisplay: "Nous",  plurRefl: "nous ",  plurForm: "habillons" },
    { singDisplay: "Tu",    singRefl: "t'",   singForm: "habilles",  plurDisplay: "Vous",  plurRefl: "vous ",  plurForm: "habillez"  },
    { singDisplay: "Il",    singRefl: "s'",   singForm: "habille",   plurDisplay: "Ils",   plurRefl: "s'",     plurForm: "habillent" },
    { singDisplay: "Elle",  singRefl: "s'",   singForm: "habille",   plurDisplay: "Elles", plurRefl: "s'",     plurForm: "habillent" },
  ];
  const habillerTails3 = [" rapidement.", " avec soin.", " pour l'école.", " avant de sortir."];
  habillerPairs.forEach((p, i) => {
    const tail = habillerTails3[i % habillerTails3.length]!;
    items.push({
      sentence: `${p.singDisplay} ${p.singRefl}${p.singForm}${tail} → ${p.plurDisplay} ${p.plurRefl}___${tail}`,
      hint: "pluraliser la forme",
      answer: p.plurForm,
    });
  });

  // se reposer
  makePronouns(
    ["repose", "reposes", "repose", "repose"],
    ["reposons", "reposez", "reposent", "reposent"],
    [" après le déjeuner.", " le week-end.", " sur le canapé.", " après le travail."],
  );

  return items;
})();

// ── Lesson ─────────────────────────────────────────────────────────────────────

export const A1_CONJ_L09: ConjLesson = {
  slug: "a1-conj-l09",
  code: "R2.2",
  level: "A1",
  title: "Les verbes pronominaux",
  // Théorie intégrée dans G1.6 — ne pas re-fusionner ici.
  theory: [],
  exercises: [
    // ── Exercice 1 — Complétez avec la terminaison ──────────────────────────
    {
      type: "fill",
      title: "Exercice 1",
      instruction: "Complétez avec la terminaison du verbe pronominal.",
      transInstruction: { en: "Complete with the ending of the reflexive verb.", ar: "أكمل بنهاية الفعل الانعكاسي.", fa: "با پایانه‌ی فعل انعکاسی کامل کنید.", ti: "ብመወዳእታ ናይቲ ናይ ርእሰ-ግሲ ምላእ.", uk: "Доповніть закінченням зворотного дієслова." },
      items: [],
      pool: ex1Pool,
      poolSize: 8,
    },

    // ── Exercice 2 — Conjuguez les verbes pronominaux ───────────────────────
    {
      type: "fill",
      title: "Exercice 2",
      instruction: "Conjuguez les verbes pronominaux entre parenthèses (pronom réfléchi + verbe).",
      transInstruction: { en: "Conjugate the reflexive verbs in parentheses (reflexive pronoun + verb).", ar: "صرّف الأفعال الانعكاسية بين القوسين (الضمير الانعكاسي + الفعل).", fa: "افعال انعکاسی داخل پرانتز را صرف کنید (ضمیر انعکاسی + فعل).", ti: "ኣብ ቅንፍ ዘለዉ ናይ ርእሰ-ግሲታት ኣጻርይ (ናይ ርእሰ-ጸጋ ቃል + ግሲ).", uk: "Відмінюйте зворотні дієслова в дужках (зворотний займенник + дієслово)." },
      items: [],
      pool: ex2Pool,
      poolSize: 8,
    },

    // ── Exercice 3 — Mettez au pluriel ──────────────────────────────────────
    {
      type: "fill",
      title: "Exercice 3",
      instruction: "Mettez les phrases au pluriel. Écrivez seulement la forme verbale.",
      transInstruction: { en: "Put the sentences in the plural. Write only the verb form.", ar: "حوّل الجمل إلى صيغة الجمع. اكتب صيغة الفعل فقط.", fa: "جمله‌ها را به جمع تبدیل کنید. فقط صورت فعل را بنویسید.", ti: "ነተን ሓሳባት ናብ ብዙሕ ቁጽሪ ቀይሮ። ቅርጺ ግሲ ጥራይ ጽሓፍ.", uk: "Поставте речення у множину. Напишіть лише форму дієслова." },
      items: [],
      pool: ex3Pool,
      poolSize: 8,
    },

    // ── Exercice 4 — Classez Sujet / Verbe / Complément ────────────────────
    {
      type: "classify",
      title: "Exercice 4",
      instruction: "Classez chaque élément en gras dans la bonne catégorie.",
      transInstruction: { en: "Sort each item in bold into the correct category.", ar: "صنّف كل عنصر بالخط العريض في الفئة الصحيحة.", fa: "هر عنصر پررنگ را در دسته‌ی درست قرار دهید.", ti: "ነፍሲ ወከፍ ብትር ዘሎ ኣካል ናብ ቅኑዕ ምድብ ኣእቱ.", uk: "Розподіліть кожен виділений жирним елемент у правильну категорію." },
      categories: ["Sujet", "Verbe", "Complément"],
      pool: [
        // Sentence 1 : Elle se lève à sept heures.
        { word: "{a}Elle{/a} se lève à sept heures.",        categoryIdx: 0 },
        { word: "Elle {a}se lève{/a} à sept heures.",        categoryIdx: 1 },
        { word: "Elle se lève {a}à sept heures{/a}.",        categoryIdx: 2 },
        // Sentence 2 : Nous nous couchons tôt.
        { word: "{a}Nous{/a} nous couchons tôt.",            categoryIdx: 0 },
        { word: "Nous {a}nous couchons{/a} tôt.",            categoryIdx: 1 },
        { word: "Nous nous couchons {a}tôt{/a}.",            categoryIdx: 2 },
        // Sentence 3 : Il ne se rase pas le soir.
        { word: "{a}Il{/a} ne se rase pas le soir.",         categoryIdx: 0 },
        { word: "Il ne {a}se rase{/a} pas le soir.",         categoryIdx: 1 },
        { word: "Il ne se rase pas {a}le soir{/a}.",         categoryIdx: 2 },
        // Sentence 4 : Elle se repose dans le jardin.
        { word: "{a}Elle{/a} se repose dans le jardin.",     categoryIdx: 0 },
        { word: "Elle {a}se repose{/a} dans le jardin.",     categoryIdx: 1 },
        { word: "Elle se repose {a}dans le jardin{/a}.",     categoryIdx: 2 },
        // Sentence 5 : Est-ce que tu te laves les mains ?
        { word: "{a}Tu{/a} te laves les mains ?",            categoryIdx: 0 },
        { word: "Tu {a}te laves{/a} les mains ?",            categoryIdx: 1 },
        { word: "Tu te laves {a}les mains{/a} ?",            categoryIdx: 2 },
      ],
      items: [],
      poolSize: 6,
    },

    // ── Exercice 5 — Type de complément ────────────────────────────────────
    {
      type: "classify",
      title: "Exercice 5",
      instruction: "Identifiez le type du complément en gras.",
      transInstruction: { en: "Identify the type of the complement in bold.", ar: "حدّد نوع المتمّم بالخط العريض.", fa: "نوع متمم پررنگ را مشخص کنید.", ti: "ዓይነት ናይቲ ብትር ዘሎ መመላእታ ፍለ.", uk: "Визначте тип виділеного жирним додатка." },
      categories: ["COD", "CC de lieu", "CC de temps / manière"],
      items: [
        { word: "Elle se brosse {a}les cheveux{/a}.",           categoryIdx: 0 },
        { word: "Il se douche {a}dans la salle de bain{/a}.",   categoryIdx: 1 },
        { word: "Nous nous levons {a}tôt le matin{/a}.",        categoryIdx: 2 },
        { word: "Tu te laves {a}les mains{/a}.",                categoryIdx: 0 },
        { word: "Ils se reposent {a}dans le jardin{/a}.",       categoryIdx: 1 },
        { word: "Elle se coiffe {a}rapidement{/a}.",            categoryIdx: 2 },
      ],
    },

    // ── Exercice 6 — Remettez les mots dans le bon ordre ───────────────────
    {
      type: "word_order",
      title: "Exercice 6",
      instruction: "Remettez les mots dans le bon ordre pour former une phrase correcte.",
      transInstruction: { en: "Put the words back in the correct order to form a correct sentence.", ar: "أعد ترتيب الكلمات لتكوين جملة صحيحة.", fa: "کلمات را به ترتیب درست بچینید تا جمله‌ی درستی بسازید.", ti: "ነተን ቃላት ቅኑዕ ሓሳብ ንምግባር ብቅኑዕ ስርዓት መድብ.", uk: "Розставте слова у правильному порядку, щоб утворити правильне речення." },
      items: [],
      poolSize: 5,
      pool: [
        // A1 — phrases courtes, verbes pronominaux simples
        { sentence: "Elle se lève à sept heures.", words: ["Elle", "se", "lève", "à", "sept", "heures."] },
        { sentence: "Il ne se couche pas avant minuit.", words: ["Il", "ne", "se", "couche", "pas", "avant", "minuit."] },
        { sentence: "Je me lave les mains.", words: ["Je", "me", "lave", "les", "mains."] },
        { sentence: "Tu te brosses les dents ?", words: ["Tu", "te", "brosses", "les", "dents"] },
        { sentence: "Elle s'habille vite le matin.", words: ["Elle", "s'habille", "vite", "le", "matin."] },
        { sentence: "Nous nous reposons le dimanche.", words: ["Nous", "nous", "reposons", "le", "dimanche."] },
        { sentence: "Je me couche tôt.", words: ["Je", "me", "couche", "tôt."] },
        { sentence: "Il se rase chaque matin.", words: ["Il", "se", "rase", "chaque", "matin."] },
        { sentence: "Vous vous levez à quelle heure ?", words: ["Vous", "vous", "levez", "à", "quelle", "heure"] },
        { sentence: "Elle se coiffe devant le miroir.", words: ["Elle", "se", "coiffe", "devant", "le", "miroir."] },
        // A2 — contexte quotidien, phrases plus longues
        { sentence: "Est-ce que vous vous reposez le week-end ?", words: ["Est-ce que", "vous", "vous", "reposez", "le", "week-end"] },
        { sentence: "Je me douche avant d'aller au travail.", words: ["Je", "me", "douche", "avant", "d'aller", "au", "travail."] },
        { sentence: "Elle se lève très tôt pour préparer les enfants.", words: ["Elle", "se", "lève", "très", "tôt", "pour", "préparer", "les", "enfants."] },
        { sentence: "Tu te couches tard le soir ?", words: ["Tu", "te", "couches", "tard", "le", "soir"] },
        { sentence: "Nous nous levons à six heures tous les matins.", words: ["Nous", "nous", "levons", "à", "six", "heures", "tous", "les", "matins."] },
        { sentence: "Elle s'habille toujours avec soin.", words: ["Elle", "s'habille", "toujours", "avec", "soin."] },
        { sentence: "Il se rase deux fois par semaine.", words: ["Il", "se", "rase", "deux", "fois", "par", "semaine."] },
        { sentence: "Je me repose un peu après le repas.", words: ["Je", "me", "repose", "un", "peu", "après", "le", "repas."] },
        { sentence: "Ils se lèvent tard le samedi.", words: ["Ils", "se", "lèvent", "tard", "le", "samedi."] },
        { sentence: "Ils ne se lavent pas les mains avant de manger.", words: ["Ils", "ne", "se", "lavent", "pas", "les", "mains", "avant", "de", "manger."] },
        // B1 — vocabulaire précis, thèmes d'intégration
        { sentence: "Je me lève tôt pour ne pas manquer le cours de français.", words: ["Je", "me", "lève", "tôt", "pour", "ne", "pas", "manquer", "le", "cours."] },
        { sentence: "Elle se prépare chaque soir pour l'école du lendemain.", words: ["Elle", "se", "prépare", "chaque", "soir", "pour", "l'école", "du", "lendemain."] },
        { sentence: "Nous nous adaptons progressivement à la vie en Suisse.", words: ["Nous", "nous", "adaptons", "progressivement", "à", "la", "vie", "en", "Suisse."] },
        { sentence: "Ils se renseignent auprès des services sociaux.", words: ["Ils", "se", "renseignent", "auprès", "des", "services", "sociaux."] },
        { sentence: "Tu te retrouves souvent seul face aux démarches.", words: ["Tu", "te", "retrouves", "souvent", "seul", "face", "aux", "démarches."] },
        { sentence: "Je me sens mieux depuis que je suis en formation.", words: ["Je", "me", "sens", "mieux", "depuis", "que", "je", "suis", "en", "formation."] },
        { sentence: "Elle se concentre sur ses progrès en langue française.", words: ["Elle", "se", "concentre", "sur", "ses", "progrès", "en", "langue", "française."] },
        { sentence: "Ils se retrouvent chaque semaine pour pratiquer le français.", words: ["Ils", "se", "retrouvent", "chaque", "semaine", "pour", "pratiquer", "le", "français."] },
        { sentence: "Vous vous inscrivez au cours de français pour adultes ?", words: ["Vous", "vous", "inscrivez", "au", "cours", "de", "français", "pour", "adultes"] },
        { sentence: "Nous nous entraidons dans cette association de quartier.", words: ["Nous", "nous", "entraidons", "dans", "cette", "association", "de", "quartier."] },
      ],
    },

    // ── Exercice 7 — Identifiez S / V / C ──────────────────────────────────
    {
      type: "color_highlight",
      title: "Exercice 7",
      instruction: "Sélectionnez une couleur, puis cliquez sur chaque mot pour l'identifier : Sujet (jaune), Verbe (rouge), Complément (vert).",
      transInstruction: { en: "Select a color, then click each word to identify it: Subject (yellow), Verb (red), Complement (green).", ar: "اختر لوناً، ثم انقر على كل كلمة لتحديدها: الفاعل (أصفر)، الفعل (أحمر)، المتمّم (أخضر).", fa: "یک رنگ انتخاب کنید، سپس روی هر کلمه کلیک کنید تا مشخص شود: فاعل (زرد)، فعل (قرمز)، متمم (سبز).", ti: "ሕብሪ ምረጽ፣ ድሕሪኡ ነፍሲ ወከፍ ቃል ንምፍላይ ጠውቕ፦ ርእሲ (ብጫ)፣ ግሲ (ቀይሕ)፣ መመላእታ (ቀጠልያ).", uk: "Виберіть колір, потім натисніть на кожне слово, щоб визначити його: Підмет (жовтий), Дієслово (червоний), Додаток (зелений)." },
      colors: ["Sujet", "Verbe", "Complément"],
      items: [
        {
          words: ["Elle", "se", "lève", "à", "sept", "heures."],
          answers: [0, 1, 1, 2, 2, 2],
        },
        {
          words: ["Il", "ne", "se", "couche", "pas", "le", "soir."],
          answers: [0, 1, 1, 1, 1, 2, 2],
        },
        {
          words: ["Est-ce que", "tu", "te", "laves", "les", "mains"],
          answers: [null, 0, 1, 1, 2, 2, null],
        },
      ],
    },

    // ── Exercice 8 — Écrivez une phrase ────────────────────────────────────
    {
      type: "write",
      title: "Exercice 8",
      instruction: "Écrivez une phrase avec le verbe pronominal proposé.\nLa phrase doit avoir un sujet, un verbe pronominal et un complément.\nElle commence par une majuscule et se termine par un point.",
      transInstruction: { en: "Write a sentence with the reflexive verb given.\nThe sentence must have a subject, a reflexive verb and a complement.\nIt starts with a capital letter and ends with a full stop.", ar: "اكتب جملة باستخدام الفعل الانعكاسي المقترح.\nيجب أن تحتوي الجملة على فاعل وفعل انعكاسي ومتمّم.\nتبدأ بحرف كبير وتنتهي بنقطة.", fa: "با فعل انعکاسی داده‌شده یک جمله بنویسید.\nجمله باید فاعل، فعل انعکاسی و متمم داشته باشد.\nبا حرف بزرگ شروع و با نقطه تمام می‌شود.", ti: "ብእቲ ዝቐረበ ናይ ርእሰ-ግሲ ሓደ ሓሳብ ጽሓፍ።\nእቲ ሓሳብ ርእሲ፣ ናይ ርእሰ-ግሲን መመላእታን ክህልዎ ኣለዎ።\nብዓብዪ ፊደል ይጅምር ብነጥቢ ይውዳእ።", uk: "Напишіть речення із запропонованим зворотним дієсловом.\nРечення повинно мати підмет, зворотне дієслово та додаток.\nВоно починається з великої літери і закінчується крапкою." },
      verbPool: [
        "se lever", "se coucher", "se laver", "se doucher", "se brosser",
        "se raser", "se coiffer", "s'habiller", "se reposer",
      ],
      verbPoolSize: 5,
    },
  ],

  evalExercises: [
    {
      type: "fill",
      title: "Évaluation — Question 1",
      instruction: "Conjuguez le verbe pronominal.",
      transInstruction: { en: "Conjugate the reflexive verb.", ar: "صرّف الفعل الانعكاسي.", fa: "فعل انعکاسی را صرف کنید.", ti: "ነቲ ናይ ርእሰ-ግሲ ኣጻርይ.", uk: "Відмінюйте зворотне дієслово." },
      items: [],
      poolSize: 6,
      pool: [
        { sentence: "Je (se lever) → Je ___ lève.",        hint: "me / m'",   answer: "me"  },
        { sentence: "Tu (se coucher) → Tu ___ couches.",   hint: "te / t'",   answer: "te"  },
        { sentence: "Il (se laver) → Il ___ lave.",        hint: "se / s'",   answer: "se"  },
        { sentence: "Nous (se préparer) → Nous ___ préparons.", hint: "nous", answer: "nous"},
        { sentence: "Vous (s'habiller) → Vous ___ habillez.",   hint: "vous", answer: "vous"},
        { sentence: "Ils (se lever) → Ils ___ lèvent.",    hint: "se / s'",   answer: "se"  },
        { sentence: "Elle (s'appeler) → Elle ___ appelle.", hint: "se / s'",  answer: "s'"  },
        { sentence: "Je (s'habiller) → Je ___ habille.",   hint: "me / m'",   answer: "m'"  },
        { sentence: "Tu (se lever) → Tu ___ lèves.",       hint: "te / t'",   answer: "te"  },
        { sentence: "On (se coucher) → On ___ couche.",    hint: "se / s'",   answer: "se"  },
      ],
    },
    {
      type: "qcm",
      title: "Évaluation — Question 2",
      instruction: "Choisissez la bonne forme du verbe pronominal.",
      transInstruction: { en: "Choose the correct form of the reflexive verb.", ar: "اختر الصيغة الصحيحة للفعل الانعكاسي.", fa: "صورت درست فعل انعکاسی را انتخاب کنید.", ti: "ቅኑዕ ቅርጺ ናይቲ ናይ ርእሰ-ግሲ ምረጽ.", uk: "Виберіть правильну форму зворотного дієслова." },
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "Je ___ lève à 7h.",              choices: ["me",    "se",   "te",   "nous"],  correctIdx: 0 },
        { sentence: "Elle ___ habille vite.",          choices: ["s'",    "se",   "me",   "te"],    correctIdx: 0 },
        { sentence: "Nous ___ préparons le matin.",    choices: ["nous",  "se",   "me",   "vous"],  correctIdx: 0 },
        { sentence: "Tu ___ couches tard ?",           choices: ["te",    "se",   "me",   "nous"],  correctIdx: 0 },
        { sentence: "Ils ___ lèvent tôt.",             choices: ["se",    "me",   "te",   "nous"],  correctIdx: 0 },
        { sentence: "Vous ___ réveillez à quelle heure ?", choices: ["vous","se","me","nous"],      correctIdx: 0 },
        { sentence: "Il ___ rase le matin.",           choices: ["se",    "me",   "te",   "nous"],  correctIdx: 0 },
        { sentence: "Je ___ douche le soir.",          choices: ["me",    "se",   "te",   "vous"],  correctIdx: 0 },
      ],
    },
  ],
};
