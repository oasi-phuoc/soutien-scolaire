import type { ConjLesson } from "../../conjugation-data";

// ── Exercise 1 helpers ────────────────────────────────────────────────────────
// Fill in the verb ending (skip aller/venir — irregular empty radical)

type P = { display: string; ending: string };

const ex1Pool = (() => {
  const items: Array<{ sentence: string; hint: string; answer: string }> = [];

  // partir  (radical "par")
  const partirHint = "-s / -t / -tons / -tez / -tent";
  const partirTails = [
    " pour le travail.", " en vacances.", " tôt le matin.", " en voyage.",
    " à l'étranger.", " en voiture.", " à midi.", " seul.",
    " sans attendre.", " le week-end.",
  ];
  const partirPronouns: P[] = [
    { display: "Je",   ending: "s"    },
    { display: "Tu",   ending: "s"    },
    { display: "Il",   ending: "t"    },
    { display: "Elle", ending: "t"    },
    { display: "Nous", ending: "tons" },
    { display: "Vous", ending: "tez"  },
    { display: "Ils",  ending: "tent" },
    { display: "Elles",ending: "tent" },
  ];
  partirPronouns.forEach((p, i) => {
    const tail = partirTails[i % partirTails.length];
    const sep = p.display.endsWith("'") ? "" : " ";
    items.push({
      sentence: `${p.display}${sep}par___${tail}`,
      hint: partirHint,
      answer: p.ending,
    });
  });

  // arriver (radical "arriv", vowel-start: j')
  const arriverHint = "-e / -es / -ons / -ez / -ent";
  const arriverTails = [
    " à l'école.", " en retard.", " à l'heure.", " à la gare.",
    " à Paris.", " le soir.", " tôt.", " en avance.",
    " au bureau.", " vers 8h.",
  ];
  const arriverPronouns: P[] = [
    { display: "J'",   ending: "e"   },
    { display: "Tu",   ending: "es"  },
    { display: "Il",   ending: "e"   },
    { display: "Elle", ending: "e"   },
    { display: "Nous", ending: "ons" },
    { display: "Vous", ending: "ez"  },
    { display: "Ils",  ending: "ent" },
    { display: "Elles",ending: "ent" },
  ];
  arriverPronouns.forEach((p, i) => {
    const tail = arriverTails[i % arriverTails.length];
    const sep = p.display.endsWith("'") ? "" : " ";
    items.push({
      sentence: `${p.display}${sep}arriv___${tail}`,
      hint: arriverHint,
      answer: p.ending,
    });
  });

  // entrer (radical "entr", vowel-start: j')
  const entrerHint = "-e / -es / -ons / -ez / -ent";
  const entrerTails = [
    " dans la salle.", " dans la maison.", " en classe.", " dans le magasin.",
    " sans frapper.", " par la porte.", " dans le couloir.", " dans la cuisine.",
    " dans l'immeuble.", " rapidement.",
  ];
  const entrerPronouns: P[] = [
    { display: "J'",   ending: "e"   },
    { display: "Tu",   ending: "es"  },
    { display: "Il",   ending: "e"   },
    { display: "Elle", ending: "e"   },
    { display: "Nous", ending: "ons" },
    { display: "Vous", ending: "ez"  },
    { display: "Ils",  ending: "ent" },
    { display: "Elles",ending: "ent" },
  ];
  entrerPronouns.forEach((p, i) => {
    const tail = entrerTails[i % entrerTails.length];
    const sep = p.display.endsWith("'") ? "" : " ";
    items.push({
      sentence: `${p.display}${sep}entr___${tail}`,
      hint: entrerHint,
      answer: p.ending,
    });
  });

  // sortir (radical "sor")
  const sortirHint = "-s / -t / -tons / -tez / -tent";
  const sortirTails = [
    " du travail.", " de la maison.", " le soir.", " avec des amis.",
    " le week-end.", " tard.", " de l'école.", " en courant.",
    " par la fenêtre.", " souvent.",
  ];
  const sortirPronouns: P[] = [
    { display: "Je",   ending: "s"    },
    { display: "Tu",   ending: "s"    },
    { display: "Il",   ending: "t"    },
    { display: "Elle", ending: "t"    },
    { display: "Nous", ending: "tons" },
    { display: "Vous", ending: "tez"  },
    { display: "Ils",  ending: "tent" },
    { display: "Elles",ending: "tent" },
  ];
  sortirPronouns.forEach((p, i) => {
    const tail = sortirTails[i % sortirTails.length];
    const sep = p.display.endsWith("'") ? "" : " ";
    items.push({
      sentence: `${p.display}${sep}sor___${tail}`,
      hint: sortirHint,
      answer: p.ending,
    });
  });

  // monter (radical "mont")
  const monterHint = "-e / -es / -ons / -ez / -ent";
  const monterTails = [
    " dans le bus.", " à l'étage.", " les escaliers.", " sur le toit.",
    " vite.", " dans le train.", " lentement.", " au premier étage.",
    " dans la voiture.", " à cheval.",
  ];
  const monterPronouns: P[] = [
    { display: "Je",   ending: "e"   },
    { display: "Tu",   ending: "es"  },
    { display: "Il",   ending: "e"   },
    { display: "Elle", ending: "e"   },
    { display: "Nous", ending: "ons" },
    { display: "Vous", ending: "ez"  },
    { display: "Ils",  ending: "ent" },
    { display: "Elles",ending: "ent" },
  ];
  monterPronouns.forEach((p, i) => {
    const tail = monterTails[i % monterTails.length];
    const sep = p.display.endsWith("'") ? "" : " ";
    items.push({
      sentence: `${p.display}${sep}mont___${tail}`,
      hint: monterHint,
      answer: p.ending,
    });
  });

  // descendre (radical "descend")
  const descendreHint = "-s / -ons / -ez / -ent";
  const descendreTails = [
    " à la cave.", " du bus.", " les escaliers.", " du train.",
    " dans la rue.", " rapidement.", " au rez-de-chaussée.", " du vélo.",
    " en courant.", " à la cuisine.",
  ];
  const descendrePronouns: P[] = [
    { display: "Je",   ending: "s"   },
    { display: "Tu",   ending: "s"   },
    { display: "Il",   ending: ""    },
    { display: "Elle", ending: ""    },
    { display: "Nous", ending: "ons" },
    { display: "Vous", ending: "ez"  },
    { display: "Ils",  ending: "ent" },
    { display: "Elles",ending: "ent" },
  ];
  descendrePronouns.forEach((p, i) => {
    const tail = descendreTails[i % descendreTails.length];
    const sep = p.display.endsWith("'") ? "" : " ";
    items.push({
      sentence: `${p.display}${sep}descend___${tail}`,
      hint: descendreHint,
      answer: p.ending,
    });
  });

  // marcher (radical "march")
  const marcherHint = "-e / -es / -ons / -ez / -ent";
  const marcherTails = [
    " vite.", " dans la rue.", " dans le parc.", " tous les jours.",
    " lentement.", " au bord de la mer.", " sous la pluie.", " longtemps.",
    " pieds nus.", " jusqu'à l'école.",
  ];
  const marcherPronouns: P[] = [
    { display: "Je",   ending: "e"   },
    { display: "Tu",   ending: "es"  },
    { display: "Il",   ending: "e"   },
    { display: "Elle", ending: "e"   },
    { display: "Nous", ending: "ons" },
    { display: "Vous", ending: "ez"  },
    { display: "Ils",  ending: "ent" },
    { display: "Elles",ending: "ent" },
  ];
  marcherPronouns.forEach((p, i) => {
    const tail = marcherTails[i % marcherTails.length];
    const sep = p.display.endsWith("'") ? "" : " ";
    items.push({
      sentence: `${p.display}${sep}march___${tail}`,
      hint: marcherHint,
      answer: p.ending,
    });
  });

  // courir (radical "cour")
  const couririHint = "-s / -t / -ons / -ez / -ent";
  const couririTails = [
    " dans le parc.", " tous les matins.", " vite.", " après le bus.",
    " le week-end.", " sous la pluie.", " longtemps.", " avec des amis.",
    " dehors.", " en forêt.",
  ];
  const couririPronouns: P[] = [
    { display: "Je",   ending: "s"   },
    { display: "Tu",   ending: "s"   },
    { display: "Il",   ending: "t"   },
    { display: "Elle", ending: "t"   },
    { display: "Nous", ending: "ons" },
    { display: "Vous", ending: "ez"  },
    { display: "Ils",  ending: "ent" },
    { display: "Elles",ending: "ent" },
  ];
  couririPronouns.forEach((p, i) => {
    const tail = couririTails[i % couririTails.length];
    const sep = p.display.endsWith("'") ? "" : " ";
    items.push({
      sentence: `${p.display}${sep}cour___${tail}`,
      hint: couririHint,
      answer: p.ending,
    });
  });

  return items;
})();

// ── Exercise 2 helpers ────────────────────────────────────────────────────────
// Fill full conjugated form (all 10 verbs, including aller/venir)

const ex2Pool = (() => {
  const items: Array<{ sentence: string; hint: string; answer: string }> = [];

  // partir
  const partirTails2 = [
    " tôt demain.", " en avion.", " en train.", " d'ici.",
    " ce soir.", " de bonne heure.", " pour Paris.", " immédiatement.",
    " en groupe.", " après le repas.",
  ];
  const partirForms2 = [
    { display: "Je",   stem: "par", ending: "s",    sep: " " },
    { display: "Tu",   stem: "par", ending: "s",    sep: " " },
    { display: "Il",   stem: "par", ending: "t",    sep: " " },
    { display: "Elle", stem: "par", ending: "t",    sep: " " },
    { display: "Nous", stem: "par", ending: "tons",  sep: " " },
    { display: "Vous", stem: "par", ending: "tez",   sep: " " },
    { display: "Ils",  stem: "par", ending: "tent",  sep: " " },
    { display: "Elles",stem: "par", ending: "tent",  sep: " " },
  ];
  partirForms2.forEach((p, i) => {
    const tail = partirTails2[i % partirTails2.length];
    items.push({
      sentence: `${p.display}${p.sep}___ (partir)${tail}`,
      hint: "-s / -t / -tons / -tez / -tent",
      answer: p.stem + p.ending,
    });
  });

  // arriver (vowel: j')
  const arriverTails2 = [
    " chez nous.", " de l'aéroport.", " avec des bagages.", " de Suisse.",
    " au village.", " à l'improviste.", " de loin.", " à la fête.",
    " par le train.", " en taxi.",
  ];
  const arriverForms2 = [
    { display: "J'",   stem: "arriv", ending: "e",   sep: "" },
    { display: "Tu",   stem: "arriv", ending: "es",  sep: " " },
    { display: "Il",   stem: "arriv", ending: "e",   sep: " " },
    { display: "Elle", stem: "arriv", ending: "e",   sep: " " },
    { display: "Nous", stem: "arriv", ending: "ons", sep: " " },
    { display: "Vous", stem: "arriv", ending: "ez",  sep: " " },
    { display: "Ils",  stem: "arriv", ending: "ent", sep: " " },
    { display: "Elles",stem: "arriv", ending: "ent", sep: " " },
  ];
  arriverForms2.forEach((p, i) => {
    const tail = arriverTails2[i % arriverTails2.length];
    items.push({
      sentence: `${p.display}${p.sep}___ (arriver)${tail}`,
      hint: "-e / -es / -ons / -ez / -ent",
      answer: p.stem + p.ending,
    });
  });

  // entrer (vowel: j')
  const entrerTails2 = [
    " chez le directeur.", " dans l'ascenseur.", " en scène.", " dans le bâtiment.",
    " tranquillement.", " dans la bibliothèque.", " dans le restaurant.", " dans la cour.",
    " dans le bureau.", " sans bruit.",
  ];
  const entrerForms2 = [
    { display: "J'",   stem: "entr", ending: "e",   sep: "" },
    { display: "Tu",   stem: "entr", ending: "es",  sep: " " },
    { display: "Il",   stem: "entr", ending: "e",   sep: " " },
    { display: "Elle", stem: "entr", ending: "e",   sep: " " },
    { display: "Nous", stem: "entr", ending: "ons", sep: " " },
    { display: "Vous", stem: "entr", ending: "ez",  sep: " " },
    { display: "Ils",  stem: "entr", ending: "ent", sep: " " },
    { display: "Elles",stem: "entr", ending: "ent", sep: " " },
  ];
  entrerForms2.forEach((p, i) => {
    const tail = entrerTails2[i % entrerTails2.length];
    items.push({
      sentence: `${p.display}${p.sep}___ (entrer)${tail}`,
      hint: "-e / -es / -ons / -ez / -ent",
      answer: p.stem + p.ending,
    });
  });

  // sortir
  const sortirTails2 = [
    " en famille.", " pour une promenade.", " du supermarché.", " par la sortie.",
    " de sa chambre.", " dehors.", " d'un concert.", " en groupe.",
    " du cinéma.", " à l'air libre.",
  ];
  const sortirForms2 = [
    { display: "Je",   stem: "sor", ending: "s",    sep: " " },
    { display: "Tu",   stem: "sor", ending: "s",    sep: " " },
    { display: "Il",   stem: "sor", ending: "t",    sep: " " },
    { display: "Elle", stem: "sor", ending: "t",    sep: " " },
    { display: "Nous", stem: "sor", ending: "tons",  sep: " " },
    { display: "Vous", stem: "sor", ending: "tez",   sep: " " },
    { display: "Ils",  stem: "sor", ending: "tent",  sep: " " },
    { display: "Elles",stem: "sor", ending: "tent",  sep: " " },
  ];
  sortirForms2.forEach((p, i) => {
    const tail = sortirTails2[i % sortirTails2.length];
    items.push({
      sentence: `${p.display}${p.sep}___ (sortir)${tail}`,
      hint: "-s / -t / -tons / -tez / -tent",
      answer: p.stem + p.ending,
    });
  });

  // monter
  const monterTails2 = [
    " au deuxième étage.", " en haut.", " dans l'avion.", " sur scène.",
    " à pied.", " au grenier.", " dans la tour.", " par l'escalier.",
    " sur le mur.", " au sommet.",
  ];
  const monterForms2 = [
    { display: "Je",   stem: "mont", ending: "e",   sep: " " },
    { display: "Tu",   stem: "mont", ending: "es",  sep: " " },
    { display: "Il",   stem: "mont", ending: "e",   sep: " " },
    { display: "Elle", stem: "mont", ending: "e",   sep: " " },
    { display: "Nous", stem: "mont", ending: "ons", sep: " " },
    { display: "Vous", stem: "mont", ending: "ez",  sep: " " },
    { display: "Ils",  stem: "mont", ending: "ent", sep: " " },
    { display: "Elles",stem: "mont", ending: "ent", sep: " " },
  ];
  monterForms2.forEach((p, i) => {
    const tail = monterTails2[i % monterTails2.length];
    items.push({
      sentence: `${p.display}${p.sep}___ (monter)${tail}`,
      hint: "-e / -es / -ons / -ez / -ent",
      answer: p.stem + p.ending,
    });
  });

  // descendre
  const descendreTails2 = [
    " au sous-sol.", " au premier étage.", " à la plage.", " de l'avion.",
    " doucement.", " par les escaliers.", " en bas.", " du grenier.",
    " dans le jardin.", " au marché.",
  ];
  const descendreForms2 = [
    { display: "Je",   stem: "descend", ending: "s",   sep: " " },
    { display: "Tu",   stem: "descend", ending: "s",   sep: " " },
    { display: "Il",   stem: "descend", ending: "",    sep: " " },
    { display: "Elle", stem: "descend", ending: "",    sep: " " },
    { display: "Nous", stem: "descend", ending: "ons", sep: " " },
    { display: "Vous", stem: "descend", ending: "ez",  sep: " " },
    { display: "Ils",  stem: "descend", ending: "ent", sep: " " },
    { display: "Elles",stem: "descend", ending: "ent", sep: " " },
  ];
  descendreForms2.forEach((p, i) => {
    const tail = descendreTails2[i % descendreTails2.length];
    items.push({
      sentence: `${p.display}${p.sep}___ (descendre)${tail}`,
      hint: "-s / -ons / -ez / -ent",
      answer: p.stem + p.ending,
    });
  });

  // marcher
  const marcherTails2 = [
    " jusqu'à la gare.", " pendant une heure.", " en silence.", " d'un bon pas.",
    " vers l'école.", " le long du fleuve.", " jusqu'au village.", " sans s'arrêter.",
    " derrière moi.", " dans la nature.",
  ];
  const marcherForms2 = [
    { display: "Je",   stem: "march", ending: "e",   sep: " " },
    { display: "Tu",   stem: "march", ending: "es",  sep: " " },
    { display: "Il",   stem: "march", ending: "e",   sep: " " },
    { display: "Elle", stem: "march", ending: "e",   sep: " " },
    { display: "Nous", stem: "march", ending: "ons", sep: " " },
    { display: "Vous", stem: "march", ending: "ez",  sep: " " },
    { display: "Ils",  stem: "march", ending: "ent", sep: " " },
    { display: "Elles",stem: "march", ending: "ent", sep: " " },
  ];
  marcherForms2.forEach((p, i) => {
    const tail = marcherTails2[i % marcherTails2.length];
    items.push({
      sentence: `${p.display}${p.sep}___ (marcher)${tail}`,
      hint: "-e / -es / -ons / -ez / -ent",
      answer: p.stem + p.ending,
    });
  });

  // courir
  const couririTails2 = [
    " sur la plage.", " autour du parc.", " très rapidement.", " pour attraper le bus.",
    " dans le couloir.", " pendant 20 minutes.", " jusqu'à la maison.", " dans la forêt.",
    " à toute vitesse.", " sans s'arrêter.",
  ];
  const couririForms2 = [
    { display: "Je",   stem: "cour", ending: "s",   sep: " " },
    { display: "Tu",   stem: "cour", ending: "s",   sep: " " },
    { display: "Il",   stem: "cour", ending: "t",   sep: " " },
    { display: "Elle", stem: "cour", ending: "t",   sep: " " },
    { display: "Nous", stem: "cour", ending: "ons", sep: " " },
    { display: "Vous", stem: "cour", ending: "ez",  sep: " " },
    { display: "Ils",  stem: "cour", ending: "ent", sep: " " },
    { display: "Elles",stem: "cour", ending: "ent", sep: " " },
  ];
  couririForms2.forEach((p, i) => {
    const tail = couririTails2[i % couririTails2.length];
    items.push({
      sentence: `${p.display}${p.sep}___ (courir)${tail}`,
      hint: "-s / -t / -ons / -ez / -ent",
      answer: p.stem + p.ending,
    });
  });

  // aller (irregular, full forms)
  const allerTails2 = [
    " à l'école.", " au marché.", " en France.", " chez le médecin.",
    " en vacances.", " au travail.", " au cinéma.", " à la plage.",
    " au restaurant.", " en ville.",
  ];
  const allerForms2 = [
    { display: "Je",   answer: "vais",   sep: " " },
    { display: "Tu",   answer: "vas",    sep: " " },
    { display: "Il",   answer: "va",     sep: " " },
    { display: "Elle", answer: "va",     sep: " " },
    { display: "Nous", answer: "allons", sep: " " },
    { display: "Vous", answer: "allez",  sep: " " },
    { display: "Ils",  answer: "vont",   sep: " " },
    { display: "Elles",answer: "vont",   sep: " " },
  ];
  allerForms2.forEach((p, i) => {
    const tail = allerTails2[i % allerTails2.length];
    items.push({
      sentence: `${p.display}${p.sep}___ (aller)${tail}`,
      hint: "vais / vas / va / allons / allez / vont",
      answer: p.answer,
    });
  });

  // venir (irregular, full forms)
  const venirTails2 = [
    " de l'école.", " du marché.", " de France.", " chez moi.",
    " à la fête.", " du travail.", " du cinéma.", " de la plage.",
    " du restaurant.", " en aide.",
  ];
  const venirForms2 = [
    { display: "Je",   answer: "viens",    sep: " " },
    { display: "Tu",   answer: "viens",    sep: " " },
    { display: "Il",   answer: "vient",    sep: " " },
    { display: "Elle", answer: "vient",    sep: " " },
    { display: "Nous", answer: "venons",   sep: " " },
    { display: "Vous", answer: "venez",    sep: " " },
    { display: "Ils",  answer: "viennent", sep: " " },
    { display: "Elles",answer: "viennent", sep: " " },
  ];
  venirForms2.forEach((p, i) => {
    const tail = venirTails2[i % venirTails2.length];
    items.push({
      sentence: `${p.display}${p.sep}___ (venir)${tail}`,
      hint: "viens / vient / venons / venez / viennent",
      answer: p.answer,
    });
  });

  return items;
})();

// ── Exercise 3 helpers ────────────────────────────────────────────────────────
// Singular → plural transformation (all 10 verbs)

type Pair = {
  singDisplay: string;
  singEnding: string;
  plurDisplay: string;
  plurEnding: string;
};

const ex3Pool = (() => {
  const items: Array<{ sentence: string; hint: string; answer: string }> = [];

  function makePairs(
    stem: string,
    singForms: [string, string, string, string],  // je/tu/il/elle endings
    plurForms: [string, string, string, string],  // nous/vous/ils/elles endings
    jeDisplay: string,
    tails: string[],
    isVowelStart: boolean,
  ) {
    // Je→Nous, Tu→Vous, Il→Ils, Elle→Elles
    const pairs: Pair[] = [
      { singDisplay: isVowelStart ? "J'" : "Je",  singEnding: singForms[0], plurDisplay: "Nous",  plurEnding: plurForms[0] },
      { singDisplay: "Tu",   singEnding: singForms[1], plurDisplay: "Vous",  plurEnding: plurForms[1] },
      { singDisplay: "Il",   singEnding: singForms[2], plurDisplay: "Ils",   plurEnding: plurForms[2] },
      { singDisplay: "Elle", singEnding: singForms[3], plurDisplay: "Elles", plurEnding: plurForms[3] },
    ];
    pairs.forEach((p, i) => {
      const tail = tails[i % tails.length];
      const singSep = p.singDisplay.endsWith("'") ? "" : " ";
      const plurSep = " ";
      items.push({
        sentence: `${p.singDisplay}${singSep}${stem}${p.singEnding}${tail} → ${p.plurDisplay}${plurSep}___${tail}`,
        hint: "pluraliser la forme",
        answer: stem + p.plurEnding,
      });
    });
  }

  // partir
  makePairs(
    "par",
    ["s", "s", "t", "t"],
    ["tons", "tez", "tent", "tent"],
    "Je",
    [" à l'heure.", " en réunion.", " en congé.", " bientôt."],
    false,
  );

  // arriver (vowel start)
  makePairs(
    "arriv",
    ["e", "es", "e", "e"],
    ["ons", "ez", "ent", "ent"],
    "J'",
    [" à temps.", " fatigués.", " contents.", " en taxi."],
    true,
  );

  // entrer (vowel start)
  makePairs(
    "entr",
    ["e", "es", "e", "e"],
    ["ons", "ez", "ent", "ent"],
    "J'",
    [" poliment.", " en souriant.", " doucement.", " avec permission."],
    true,
  );

  // sortir
  makePairs(
    "sor",
    ["s", "s", "t", "t"],
    ["tons", "tez", "tent", "tent"],
    "Je",
    [" à pied.", " ensemble.", " par la grande porte.", " dans le froid."],
    false,
  );

  // monter
  makePairs(
    "mont",
    ["e", "es", "e", "e"],
    ["ons", "ez", "ent", "ent"],
    "Je",
    [" lentement.", " en courant.", " à voix basse.", " par les escaliers."],
    false,
  );

  // descendre
  makePairs(
    "descend",
    ["s", "s", "", ""],
    ["ons", "ez", "ent", "ent"],
    "Je",
    [" avec soin.", " prudemment.", " sans bruit.", " à reculons."],
    false,
  );

  // marcher
  makePairs(
    "march",
    ["e", "es", "e", "e"],
    ["ons", "ez", "ent", "ent"],
    "Je",
    [" côte à côte.", " au soleil.", " en famille.", " en groupe."],
    false,
  );

  // courir
  makePairs(
    "cour",
    ["s", "s", "t", "t"],
    ["ons", "ez", "ent", "ent"],
    "Je",
    [" rapidement.", " dans le jardin.", " sur la piste.", " ensemble."],
    false,
  );

  // aller (full forms — irregular)
  const allerTails3 = [" au cinéma.", " au parc.", " en montagne.", " au musée."];
  const allerPairs: Pair[] = [
    { singDisplay: "Je",   singEnding: "vais", plurDisplay: "Nous",  plurEnding: "allons" },
    { singDisplay: "Tu",   singEnding: "vas",  plurDisplay: "Vous",  plurEnding: "allez"  },
    { singDisplay: "Il",   singEnding: "va",   plurDisplay: "Ils",   plurEnding: "vont"   },
    { singDisplay: "Elle", singEnding: "va",   plurDisplay: "Elles", plurEnding: "vont"   },
  ];
  allerPairs.forEach((p, i) => {
    const tail = allerTails3[i % allerTails3.length];
    items.push({
      sentence: `${p.singDisplay} ${p.singEnding}${tail} → ${p.plurDisplay} ___${tail}`,
      hint: "pluraliser la forme",
      answer: p.plurEnding,
    });
  });

  // venir (full forms — irregular)
  const venirTails3 = [" à la réunion.", " en aide.", " à la fête.", " au rendez-vous."];
  const venirPairs: Pair[] = [
    { singDisplay: "Je",   singEnding: "viens", plurDisplay: "Nous",  plurEnding: "venons"   },
    { singDisplay: "Tu",   singEnding: "viens", plurDisplay: "Vous",  plurEnding: "venez"    },
    { singDisplay: "Il",   singEnding: "vient", plurDisplay: "Ils",   plurEnding: "viennent" },
    { singDisplay: "Elle", singEnding: "vient", plurDisplay: "Elles", plurEnding: "viennent" },
  ];
  venirPairs.forEach((p, i) => {
    const tail = venirTails3[i % venirTails3.length];
    items.push({
      sentence: `${p.singDisplay} ${p.singEnding}${tail} → ${p.plurDisplay} ___${tail}`,
      hint: "pluraliser la forme",
      answer: p.plurEnding,
    });
  });

  return items;
})();

// ── Lesson ─────────────────────────────────────────────────────────────────────

export const A1_CONJ_L08: ConjLesson = {
  slug: "a1-conj-l08",
  code: "G.9",
  level: "A1",
  title: "Les verbes de mouvement",
  theory: [
    {
      type: "heading",
      text: "Les verbes de mouvement au présent",
      trans: { en: "Movement verbs in the present", ar: "أفعال الحركة في المضارع", fa: "افعال حرکتی در زمان حال", ti: "ግሲያት ምቅስቃስ ኣብ ሕጂ ጊዜ", uk: "Дієслова руху у теперішньому часі" },
    },
    {
      type: "plain_list",
      items: [
        "Ces verbes expriment un déplacement ou un mouvement. Clique sur chaque verbe pour voir sa conjugaison.",
      ],
      noBulletItems: [0],
      transItems: {
        en: ["These verbs express movement or displacement. Click each verb to see its conjugation."],
        ar: ["تعبّر هذه الأفعال عن الحركة أو التنقل. انقر على كل فعل لرؤية تصريفه."],
        fa: ["این افعال حرکت یا جابجایی را بیان می‌کنند. روی هر فعل کلیک کنید تا صرف آن را ببینید."],
        ti: ["ነዚ ግሲያት ምቅስቃስ ወይ ምንቅስቓስ ይገልጹ. ንኹሉ ግሲ ጠውቕ ናይ ምቕያር ንምርካብ."],
        uk: ["Ці дієслова виражають рух або переміщення. Клацніть на кожне дієслово, щоб побачити відмінювання."],
      },
    },
    {
      type: "verb_toggle",
      buttonCols: 5,
      verbs: [
        {
          infinitive: "aller",
          radical: "",
          rows: [
            { pronoun: "je", ending: "vais" },
            { pronoun: "tu", ending: "vas" },
            { pronoun: "il / elle / on", ending: "va" },
            { pronoun: "nous", ending: "allons" },
            { pronoun: "vous", ending: "allez" },
            { pronoun: "ils / elles", ending: "vont" },
          ],
        },
        {
          infinitive: "venir",
          radical: "",
          rows: [
            { pronoun: "je", ending: "viens" },
            { pronoun: "tu", ending: "viens" },
            { pronoun: "il / elle / on", ending: "vient" },
            { pronoun: "nous", ending: "venons" },
            { pronoun: "vous", ending: "venez" },
            { pronoun: "ils / elles", ending: "viennent" },
          ],
        },
        {
          infinitive: "partir",
          radical: "par",
          rows: [
            { pronoun: "je", ending: "s" },
            { pronoun: "tu", ending: "s" },
            { pronoun: "il / elle / on", ending: "t" },
            { pronoun: "nous", ending: "tons" },
            { pronoun: "vous", ending: "tez" },
            { pronoun: "ils / elles", ending: "tent" },
          ],
        },
        {
          infinitive: "arriver",
          radical: "arriv",
          rows: [
            { pronoun: "j'", ending: "e" },
            { pronoun: "tu", ending: "es" },
            { pronoun: "il / elle / on", ending: "e" },
            { pronoun: "nous", ending: "ons" },
            { pronoun: "vous", ending: "ez" },
            { pronoun: "ils / elles", ending: "ent" },
          ],
        },
        {
          infinitive: "entrer",
          radical: "entr",
          rows: [
            { pronoun: "j'", ending: "e" },
            { pronoun: "tu", ending: "es" },
            { pronoun: "il / elle / on", ending: "e" },
            { pronoun: "nous", ending: "ons" },
            { pronoun: "vous", ending: "ez" },
            { pronoun: "ils / elles", ending: "ent" },
          ],
        },
        {
          infinitive: "sortir",
          radical: "sor",
          rows: [
            { pronoun: "je", ending: "s" },
            { pronoun: "tu", ending: "s" },
            { pronoun: "il / elle / on", ending: "t" },
            { pronoun: "nous", ending: "tons" },
            { pronoun: "vous", ending: "tez" },
            { pronoun: "ils / elles", ending: "tent" },
          ],
        },
        {
          infinitive: "monter",
          radical: "mont",
          rows: [
            { pronoun: "je", ending: "e" },
            { pronoun: "tu", ending: "es" },
            { pronoun: "il / elle / on", ending: "e" },
            { pronoun: "nous", ending: "ons" },
            { pronoun: "vous", ending: "ez" },
            { pronoun: "ils / elles", ending: "ent" },
          ],
        },
        {
          infinitive: "descendre",
          radical: "descend",
          rows: [
            { pronoun: "je", ending: "s" },
            { pronoun: "tu", ending: "s" },
            { pronoun: "il / elle / on", ending: "" },
            { pronoun: "nous", ending: "ons" },
            { pronoun: "vous", ending: "ez" },
            { pronoun: "ils / elles", ending: "ent" },
          ],
        },
        {
          infinitive: "marcher",
          radical: "march",
          rows: [
            { pronoun: "je", ending: "e" },
            { pronoun: "tu", ending: "es" },
            { pronoun: "il / elle / on", ending: "e" },
            { pronoun: "nous", ending: "ons" },
            { pronoun: "vous", ending: "ez" },
            { pronoun: "ils / elles", ending: "ent" },
          ],
        },
        {
          infinitive: "courir",
          radical: "cour",
          rows: [
            { pronoun: "je", ending: "s" },
            { pronoun: "tu", ending: "s" },
            { pronoun: "il / elle / on", ending: "t" },
            { pronoun: "nous", ending: "ons" },
            { pronoun: "vous", ending: "ez" },
            { pronoun: "ils / elles", ending: "ent" },
          ],
        },
      ],
    },
  ],
  exercises: [
    // ── Exercice 1 — Complétez avec la terminaison ──────────────────────────
    {
      type: "fill",
      title: "Exercice 1",
      instruction: "Complétez avec la terminaison des verbes.",
      items: [],
      pool: ex1Pool,
      poolSize: 8,
    },

    // ── Exercice 2 — Conjuguez les verbes ───────────────────────────────────
    {
      type: "fill",
      title: "Exercice 2",
      instruction: "Conjuguez les verbes entre parenthèses.",
      items: [],
      pool: ex2Pool,
      poolSize: 8,
    },

    // ── Exercice 3 — Mettez les phrases au pluriel ──────────────────────────
    {
      type: "fill",
      title: "Exercice 3",
      instruction: "Mettez les phrases au pluriel.",
      items: [],
      pool: ex3Pool,
      poolSize: 8,
    },

    // ── Exercice 4 — Classez Sujet / Verbe / Complément ────────────────────
    {
      type: "classify",
      title: "Exercice 4",
      instruction: "Classez chaque élément en gras dans la bonne catégorie.",
      categories: ["Sujet", "Verbe", "Complément"],
      pool: [
        // Sentence 1 : Marie arrive à l'école.
        { word: "{a}Marie{/a} arrive à l'école.",       categoryIdx: 0 },
        { word: "Marie {a}arrive{/a} à l'école.",       categoryIdx: 1 },
        { word: "Marie arrive {a}à l'école{/a}.",       categoryIdx: 2 },
        // Sentence 2 : Nous partons en vacances.
        { word: "{a}Nous{/a} partons en vacances.",     categoryIdx: 0 },
        { word: "Nous {a}partons{/a} en vacances.",     categoryIdx: 1 },
        { word: "Nous partons {a}en vacances{/a}.",     categoryIdx: 2 },
        // Sentence 3 : Il ne sort pas le soir.
        { word: "{a}Il{/a} ne sort pas le soir.",       categoryIdx: 0 },
        { word: "Il ne {a}sort{/a} pas le soir.",       categoryIdx: 1 },
        { word: "Il ne sort pas {a}le soir{/a}.",       categoryIdx: 2 },
        // Sentence 4 : Elle court dans le parc.
        { word: "{a}Elle{/a} court dans le parc.",      categoryIdx: 0 },
        { word: "Elle {a}court{/a} dans le parc.",      categoryIdx: 1 },
        { word: "Elle court {a}dans le parc{/a}.",      categoryIdx: 2 },
        // Sentence 5 : Est-ce que tu pars ce soir ?
        { word: "{a}Tu{/a} pars ce soir ?",             categoryIdx: 0 },
        { word: "Tu {a}pars{/a} ce soir ?",             categoryIdx: 1 },
        { word: "Tu pars {a}ce soir{/a} ?",             categoryIdx: 2 },
      ],
      items: [],
      poolSize: 6,
    },

    // ── Exercice 5 — Type de complément ────────────────────────────────────
    {
      type: "classify",
      title: "Exercice 5",
      instruction: "Identifiez le type du complément en gras.",
      categories: ["COD", "CC de lieu", "CC de temps / manière"],
      items: [
        { word: "Elle monte {a}les bagages{/a}.",        categoryIdx: 0 },
        { word: "Il court {a}dans le parc{/a}.",         categoryIdx: 1 },
        { word: "Nous partons {a}tôt le matin{/a}.",     categoryIdx: 2 },
        { word: "Elle descend {a}les valises{/a}.",      categoryIdx: 0 },
        { word: "Tu arrives {a}à Paris{/a}.",            categoryIdx: 1 },
        { word: "Ils marchent {a}lentement{/a}.",        categoryIdx: 2 },
      ],
    },

    // ── Exercice 6 — Remettez les mots dans le bon ordre ───────────────────
    {
      type: "word_order",
      title: "Exercice 6",
      instruction: "Remettez les mots dans le bon ordre pour former une phrase correcte.",
      items: [
        {
          sentence: "Elle arrive à la gare.",
          words: ["Elle", "arrive", "à", "la", "gare"],
        },
        {
          sentence: "Il ne sort pas le soir.",
          words: ["Il", "ne", "sort", "pas", "le", "soir"],
        },
        {
          sentence: "Est-ce que vous montez à l'étage ?",
          words: ["Est-ce que", "vous", "montez", "à", "l'étage"],
        },
      ],
    },

    // ── Exercice 7 — Identifiez S / V / C ──────────────────────────────────
    {
      type: "color_highlight",
      title: "Exercice 7",
      instruction: "Sélectionnez une couleur, puis cliquez sur chaque mot pour l'identifier : Sujet (jaune), Verbe (rouge), Complément (vert).",
      colors: ["Sujet", "Verbe", "Complément"],
      items: [
        {
          words: ["Marie", "court", "dans", "le", "parc."],
          answers: [0, 1, 2, 2, 2],
        },
        {
          words: ["Il", "ne", "sort", "pas", "le", "soir."],
          answers: [0, 1, 1, 1, 2, 2],
        },
        {
          words: ["Est-ce que", "tu", "pars", "ce", "soir", "?"],
          answers: [null, 0, 1, 2, 2, null],
        },
      ],
    },

    // ── Exercice 8 — Écrivez une phrase ────────────────────────────────────
    {
      type: "write",
      title: "Exercice 8",
      instruction: "Écrivez une phrase avec le verbe proposé.\nLa phrase doit avoir un sujet, un verbe et un complément.\nElle commence par une majuscule et se termine par un point.",
      verbPool: [
        "aller", "venir", "partir", "arriver", "entrer",
        "sortir", "monter", "descendre", "marcher", "courir",
      ],
      verbPoolSize: 5,
    },
  ],
};
