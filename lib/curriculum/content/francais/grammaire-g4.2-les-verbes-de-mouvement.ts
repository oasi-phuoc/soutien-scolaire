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
  code: "R2.1",
  level: "A1",
  title: "Les verbes de mouvement",
  theory: [
    {
      type: "heading",
      text: "Les verbes de mouvement au présent",
      trans: { en: "Movement verbs in the present", ar: "أفعال الحركة في المضارع", fa: "افعال حرکتی در زمان حال", ti: "ግሲያት ምቅስቃስ ኣብ ሕጂ ጊዜ", uk: "Дієслова руху у теперішньому часі" },
    },
    {
      type: "text",
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

    // ── Prépositions avec les verbes de mouvement ─────────────────────────────
    {
      type: "heading",
      text: "Les prépositions avec les verbes de mouvement",
      trans: {
        en: "Prepositions with movement verbs",
        ar: "حروف الجر مع أفعال الحركة",
        fa: "حروف اضافه با افعال حرکتی",
        ti: "ናይ ምቅስቃስ ግሲያት ምስ ቅድሚ ስም ዝኸዱ ቃላት",
        uk: "Прийменники з дієсловами руху",
      },
      sub: true,
    },
    {
      type: "text",
      items: [
        "Certains verbes de mouvement sont suivis d'une préposition qui indique la destination ou l'origine.",
      ],
      noBulletItems: [0],
      transItems: {
        en: ["Some movement verbs are followed by a preposition indicating destination or origin."],
        ar: ["بعض أفعال الحركة تتبعها حروف جر تدل على الوجهة أو الأصل."],
        fa: ["برخی افعال حرکتی با حرف اضافه‌ای همراه می‌شوند که مقصد یا مبدأ را نشان می‌دهد."],
        ti: ["ገሊኦም ግሲያት ምቅስቃስ ምስ ቅድሚ ስም ይስዓቡ ዝዕላምኡ ወይ ምንጪ ዘርኢ።"],
        uk: ["Деякі дієслова руху супроводжуються прийменником, що вказує на напрямок або походження."],
      },
    },

    {
      type: "text",
      label: "aller + destination",
      items: [
        "{a}à{/a} + ville → Je vais {a}à{/a} Paris.",
        "{a}en{/a} + pays féminin → Elle va {a}en{/a} France.",
        "{a}au{/a} + pays masculin → Il va {a}au{/a} Maroc.",
        "{a}aux{/a} + pays pluriel → Nous allons {a}aux{/a} États-Unis.",
        "{a}chez{/a} + personne → Tu vas {a}chez{/a} le médecin.",
      ],
      noBulletItems: [0, 1, 2, 3, 4],
      transLabel: {
        en: "aller + destination",
        ar: "aller + الوجهة",
        fa: "aller + مقصد",
        ti: "aller + ናበይ",
        uk: "aller + напрямок",
      },
    },

    {
      type: "text",
      label: "venir + origine",
      items: [
        "{a}de{/a} + ville → Je viens {a}de{/a} Paris.",
        "{a}de{/a} + pays féminin → Elle vient {a}de{/a} France.",
        "{a}du{/a} + pays masculin → Il vient {a}du{/a} Maroc.",
        "{a}des{/a} + pays pluriel → Tu viens {a}des{/a} États-Unis.",
        "{a}de chez{/a} + personne → Elle vient {a}de chez{/a} le médecin.",
      ],
      noBulletItems: [0, 1, 2, 3, 4],
      transLabel: {
        en: "venir + origin",
        ar: "venir + الأصل",
        fa: "venir + مبدأ",
        ti: "venir + ካበይ",
        uk: "venir + походження",
      },
    },

    {
      type: "selector",
      tabs: [
        {
          label: "aller",
          content: [
            {
              type: "text",
              label: "Destination",
              items: [
                "{a}à{/a} + ville → Je vais {a}à{/a} Paris.",
                "{a}en{/a} + pays féminin → Elle va {a}en{/a} France.",
                "{a}au{/a} + pays masculin → Il va {a}au{/a} Maroc.",
                "{a}aux{/a} + pays pluriel → Nous allons {a}aux{/a} États-Unis.",
                "{a}chez{/a} + personne → Tu vas {a}chez{/a} le médecin.",
              ],
              noBulletItems: [0, 1, 2, 3, 4],
            },
          ],
        },
        {
          label: "venir",
          content: [
            {
              type: "text",
              label: "Origine",
              items: [
                "{a}de{/a} + ville → Je viens {a}de{/a} Paris.",
                "{a}de{/a} + pays féminin → Elle vient {a}de{/a} France.",
                "{a}du{/a} + pays masculin → Il vient {a}du{/a} Maroc.",
                "{a}des{/a} + pays pluriel → Tu viens {a}des{/a} États-Unis.",
                "{a}de chez{/a} + personne → Elle vient {a}de chez{/a} le médecin.",
              ],
              noBulletItems: [0, 1, 2, 3, 4],
            },
          ],
        },
        {
          label: "partir",
          content: [
            {
              type: "text",
              label: "",
              items: [
                "{a}de / du / des{/a} (origine) → Je pars {a}de{/a} Lyon.",
                "{a}pour{/a} (destination) → Il part {a}pour{/a} Rome.",
              ],
              noBulletItems: [0, 1],
            },
          ],
        },
        {
          label: "arriver",
          content: [
            {
              type: "text",
              label: "",
              items: [
                "{a}à / en / au / aux{/a} (destination) → Elle arrive {a}à{/a} la gare.",
                "{a}de / du / des{/a} (origine) → Il arrive {a}du{/a} travail.",
              ],
              noBulletItems: [0, 1],
            },
          ],
        },
        {
          label: "entrer",
          content: [
            {
              type: "text",
              label: "",
              items: [
                "{a}dans{/a} → Il entre {a}dans{/a} la salle.",
              ],
              noBulletItems: [0],
            },
          ],
        },
        {
          label: "sortir",
          content: [
            {
              type: "text",
              label: "",
              items: [
                "{a}de / du / de la{/a} → Elle sort {a}de{/a} l'école.",
                "Il sort {a}du{/a} bureau.",
              ],
              noBulletItems: [0, 1],
            },
          ],
        },
        {
          label: "monter",
          content: [
            {
              type: "text",
              label: "",
              items: [
                "{a}dans{/a} → Je monte {a}dans{/a} le bus.",
                "{a}sur{/a} → Elle monte {a}sur{/a} le vélo.",
              ],
              noBulletItems: [0, 1],
            },
          ],
        },
        {
          label: "descendre",
          content: [
            {
              type: "text",
              label: "",
              items: [
                "{a}du{/a} → Il descend {a}du{/a} train.",
                "{a}de{/a} → Elle descend {a}de{/a} la voiture.",
              ],
              noBulletItems: [0, 1],
            },
          ],
        },
        {
          label: "marcher",
          content: [
            {
              type: "text",
              label: "",
              items: [
                "{a}dans{/a} → Il marche {a}dans{/a} la rue.",
                "{a}vers{/a} → Nous marchons {a}vers{/a} l'école.",
                "{a}jusqu'à{/a} → Il marche {a}jusqu'à{/a} la gare.",
              ],
              noBulletItems: [0, 1, 2],
            },
          ],
        },
        {
          label: "courir",
          content: [
            {
              type: "text",
              label: "",
              items: [
                "{a}dans{/a} → Il court {a}dans{/a} le parc.",
                "{a}vers{/a} → Elle court {a}vers{/a} la sortie.",
                "{a}jusqu'à{/a} → Il court {a}jusqu'à{/a} l'arrivée.",
              ],
              noBulletItems: [0, 1, 2],
            },
          ],
        },
      ],
    },

    // ── Articles contractés ───────────────────────────────────────────────────
    {
      type: "heading",
      text: "Les articles contractés",
      trans: {
        en: "Contracted articles",
        ar: "المقاطع المدمجة",
        fa: "حروف تعریف ادغام‌شده",
        ti: "ዝተሓጸሩ ናይ ዓንቀጽ",
        uk: "Злиті артиклі",
      },
      sub: true,
    },
    {
      type: "text",
      items: [
        "Quand les prépositions {a}à{/a} et {a}de{/a} sont suivies de l'article {a}le{/a} ou {a}les{/a}, elles se contractent obligatoirement.",
      ],
      noBulletItems: [0],
      transItems: {
        en: ["When the prepositions {a}à{/a} and {a}de{/a} are followed by the article {a}le{/a} or {a}les{/a}, they must be contracted."],
        ar: ["عندما تتبع حروف الجر {a}à{/a} و{a}de{/a} المقال {a}le{/a} أو {a}les{/a}، تُدمج وجوبًا."],
        fa: ["وقتی حروف اضافه {a}à{/a} و {a}de{/a} قبل از حرف تعریف {a}le{/a} یا {a}les{/a} قرار می‌گیرند، باید ادغام شوند."],
        ti: ["ምስ {a}à{/a} ከምኡ'ውን {a}de{/a} ቅድሚ ናይ ዓንቀጽ {a}le{/a} ወይ {a}les{/a}, ምድምሳስ ግዴታ እዩ።"],
        uk: ["Коли прийменники {a}à{/a} та {a}de{/a} стоять перед артиклем {a}le{/a} або {a}les{/a}, вони обов'язково зливаються."],
      },
    },
    {
      type: "grid",
      headers: ["Préposition + article", "Contraction", "Exemple"],
      boldFirstCol: true,
      rows: [
        ["{a}à + le{/a}", "→ {a}au{/a}", "Je vais {a}au{/a} marché. (à + le marché)"],
        ["{a}à + les{/a}", "→ {a}aux{/a}", "Je vais {a}aux{/a} États-Unis. (à + les États-Unis)"],
        ["{a}de + le{/a}", "→ {a}du{/a}", "Je viens {a}du{/a} marché. (de + le marché)"],
        ["{a}de + les{/a}", "→ {a}des{/a}", "Il arrive {a}des{/a} États-Unis. (de + les États-Unis)"],
      ],
      transHeaders: {
        en: ["Preposition + article", "Contraction", "Example"],
        ar: ["حرف الجر + المقال", "الإدماج", "مثال"],
        fa: ["حرف اضافه + حرف تعریف", "ادغام", "مثال"],
        ti: ["ቅድሚ ስም + ናይ ዓንቀጽ", "ምድምሳስ", "ኣብነት"],
        uk: ["Прийменник + артикль", "Злиття", "Приклад"],
      },
    },
    {
      type: "text",
      items: ["à + la et de + la ne se contractent PAS."],
      noBulletItems: [0],
    },
    {
      type: "text",
      label: "",
      items: [
        "Je vais {a}à la{/a} pharmacie ✅",
        "Je viens {a}de la{/a} gare ✅",
      ],
      noBulletItems: [0, 1],
    },
    {
      type: "text",
      items: ["à + l' et de + l' ne se contractent PAS."],
      noBulletItems: [0],
    },
    {
      type: "text",
      label: "",
      items: [
        "Je vais {a}à l'{/a}école ✅",
        "Je viens {a}de l'{/a}hôpital ✅",
      ],
      noBulletItems: [0, 1],
    },
  ],
  exercises: [
    // ── Exercice 1 — Complétez avec la terminaison ──────────────────────────
    {
      type: "fill",
      title: "Exercice 1",
      instruction: "Complétez avec la terminaison des verbes.",
      transInstruction: { en: "Complete with the verb endings.", ar: "أكمل بنهايات الأفعال.", fa: "با پایانه‌های فعل کامل کنید.", ti: "ብመወዳእታ ግሲታት ምላእ።", uk: "Доповніть закінченнями дієслів." },
      items: [],
      pool: ex1Pool,
      poolSize: 8,
    },

    // ── Exercice 2 — Conjuguez les verbes ───────────────────────────────────
    {
      type: "fill",
      title: "Exercice 2",
      instruction: "Conjuguez les verbes entre parenthèses.",
      transInstruction: { en: "Conjugate the verbs in parentheses.", ar: "صرّف الأفعال الموجودة بين القوسين.", fa: "افعال داخل پرانتز را صرف کنید.", ti: "ኣብ ቅንፍ ዘለዉ ግሲታት ኣጻርይ።", uk: "Відмінюйте дієслова в дужках." },
      items: [],
      pool: ex2Pool,
      poolSize: 8,
    },

    // ── Exercice 3 — Mettez les phrases au pluriel ──────────────────────────
    {
      type: "fill",
      title: "Exercice 3",
      instruction: "Mettez les phrases au pluriel.",
      transInstruction: { en: "Put the sentences in the plural.", ar: "حوّل الجمل إلى صيغة الجمع.", fa: "جمله‌ها را به جمع تبدیل کنید.", ti: "ነተን ሓሳባት ናብ ብዙሕ ቁጽሪ ቀይሮ።", uk: "Поставте речення у множину." },
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
      transInstruction: { en: "Identify the type of the complement in bold.", ar: "حدّد نوع المتمّم بالخط العريض.", fa: "نوع متمم پررنگ را مشخص کنید.", ti: "ዓይነት ናይቲ ብትር ዘሎ መመላእታ ፍለ።", uk: "Визначте тип виділеного жирним додатка." },
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
      transInstruction: { en: "Put the words back in the correct order to form a correct sentence.", ar: "أعد ترتيب الكلمات لتكوين جملة صحيحة.", fa: "کلمات را به ترتیب درست بچینید تا جمله‌ی درستی بسازید.", ti: "ነተን ቃላት ቅኑዕ ሓሳብ ንምግባር ብቅኑዕ ስርዓት መድብ።", uk: "Розставте слова у правильному порядку, щоб утворити правильне речення." },
      items: [],
      poolSize: 5,
      pool: [
        // A1 — phrases courtes, verbes de mouvement simples
        { sentence: "Elle arrive à la gare.", words: ["Elle", "arrive", "à", "la", "gare."] },
        { sentence: "Il ne sort pas le soir.", words: ["Il", "ne", "sort", "pas", "le", "soir."] },
        { sentence: "Je pars à midi.", words: ["Je", "pars", "à", "midi."] },
        { sentence: "Tu montes à pied ?", words: ["Tu", "montes", "à", "pied"] },
        { sentence: "Il descend du bus.", words: ["Il", "descend", "du", "bus."] },
        { sentence: "Nous restons à la maison.", words: ["Nous", "restons", "à", "la", "maison."] },
        { sentence: "Elle entre dans la salle.", words: ["Elle", "entre", "dans", "la", "salle."] },
        { sentence: "Ils partent à 8h.", words: ["Ils", "partent", "à", "8h."] },
        { sentence: "Je monte les escaliers.", words: ["Je", "monte", "les", "escaliers."] },
        { sentence: "Tu retournes au bureau ?", words: ["Tu", "retournes", "au", "bureau"] },
        // A2 — contexte quotidien, phrases plus longues
        { sentence: "Elle n'arrive jamais à l'heure.", words: ["Elle", "n'arrive", "jamais", "à", "l'heure."] },
        { sentence: "Ils sortent ensemble après les cours.", words: ["Ils", "sortent", "ensemble", "après", "les", "cours."] },
        { sentence: "Je pars travailler très tôt le matin.", words: ["Je", "pars", "travailler", "très", "tôt", "le", "matin."] },
        { sentence: "Tu descends à quel arrêt ?", words: ["Tu", "descends", "à", "quel", "arrêt"] },
        { sentence: "Elle retourne chez sa famille le week-end.", words: ["Elle", "retourne", "chez", "sa", "famille", "le", "week-end."] },
        { sentence: "Les enfants entrent dans la classe sans bruit.", words: ["Les", "enfants", "entrent", "dans", "la", "classe", "sans", "bruit."] },
        { sentence: "Est-ce que vous montez à l'étage ?", words: ["Est-ce que", "vous", "montez", "à", "l'étage"] },
        { sentence: "Nous partons souvent en vacances en juillet.", words: ["Nous", "partons", "souvent", "en", "vacances", "en", "juillet."] },
        { sentence: "Il ne sort jamais sans son manteau en hiver.", words: ["Il", "ne", "sort", "jamais", "sans", "son", "manteau", "en", "hiver."] },
        { sentence: "Elle descend du bus au bon arrêt.", words: ["Elle", "descend", "du", "bus", "au", "bon", "arrêt."] },
        // B1 — vocabulaire précis, thèmes d'intégration
        { sentence: "Elle part travailler à pied chaque matin.", words: ["Elle", "part", "travailler", "à", "pied", "chaque", "matin."] },
        { sentence: "Ils entrent dans le programme de formation dès janvier.", words: ["Ils", "entrent", "dans", "le", "programme", "de", "formation", "dès", "janvier."] },
        { sentence: "Elle descend en ville pour ses démarches administratives.", words: ["Elle", "descend", "en", "ville", "pour", "ses", "démarches", "administratives."] },
        { sentence: "Tu restes en contact avec ta famille malgré la distance.", words: ["Tu", "restes", "en", "contact", "avec", "ta", "famille", "malgré", "la", "distance."] },
        { sentence: "Ils arrivent en Suisse après un long voyage.", words: ["Ils", "arrivent", "en", "Suisse", "après", "un", "long", "voyage."] },
        { sentence: "Elle monte en compétences grâce à cette formation.", words: ["Elle", "monte", "en", "compétences", "grâce", "à", "cette", "formation."] },
        { sentence: "Je pars chercher du travail dans une autre région.", words: ["Je", "pars", "chercher", "du", "travail", "dans", "une", "autre", "région."] },
        { sentence: "Nous sortons rarement faute de transport adapté.", words: ["Nous", "sortons", "rarement", "faute", "de", "transport", "adapté."] },
        { sentence: "Elle sort progressivement de son isolement grâce aux cours.", words: ["Elle", "sort", "progressivement", "de", "son", "isolement", "grâce", "aux", "cours."] },
        { sentence: "Nous entrons dans une nouvelle phase de notre vie.", words: ["Nous", "entrons", "dans", "une", "nouvelle", "phase", "de", "notre", "vie."] },
      ],
    },

    // ── Exercice 7 — Identifiez S / V / C ──────────────────────────────────
    {
      type: "color_highlight",
      title: "Exercice 7",
      instruction: "Sélectionnez une couleur, puis cliquez sur chaque mot pour l'identifier : Sujet (jaune), Verbe (rouge), Complément (vert).",
      transInstruction: { en: "Select a color, then click each word to identify it: Subject (yellow), Verb (red), Complement (green).", ar: "اختر لوناً، ثم انقر على كل كلمة لتحديدها: الفاعل (أصفر)، الفعل (أحمر)، المتمّم (أخضر).", fa: "یک رنگ انتخاب کنید، سپس روی هر کلمه کلیک کنید: فاعل (زرد)، فعل (قرمز)، متمم (سبز).", ti: "ሕብሪ ምረጽ፣ ድሕሪኡ ነፍሲ ወከፍ ቃል ፍለ፦ ርእሲ (ብጫ)፣ ግሲ (ቀይሕ)፣ መመላእታ (ቀጠልያ).", uk: "Виберіть колір, потім натисніть на кожне слово: Підмет (жовтий), Дієслово (червоний), Додаток (зелений)." },
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
          words: ["Est-ce que", "tu", "pars", "ce", "soir"],
          answers: [null, 0, 1, 2, 2, null],
        },
      ],
    },

    // ── Exercice 8 — Écrivez une phrase ────────────────────────────────────
    {
      type: "write",
      title: "Exercice 8",
      instruction: "Écrivez une phrase avec le verbe proposé.\nLa phrase doit avoir un sujet, un verbe et un complément.\nElle commence par une majuscule et se termine par un point.",
      transInstruction: { en: "Write a sentence with the verb provided.\nThe sentence must have a subject, a verb and a complement.\nIt starts with a capital letter and ends with a full stop.", ar: "اكتب جملة باستخدام الفعل المقترح.\nيجب أن تحتوي الجملة على فاعل وفعل ومتمّم.\nتبدأ بحرف كبير وتنتهي بنقطة.", fa: "یک جمله با فعل پیشنهادی بنویسید.\nجمله باید فاعل، فعل و متمم داشته باشد.\nبا حرف بزرگ شروع و با نقطه تمام می‌شود.", ti: "ሓደ ሓሳብ ብእቲ ዝቐረበ ግሲ ጽሓፍ።\nእቲ ሓሳብ ርእሲ፣ ግሲን መመላእታን ክህልዎ ኣለዎ።\nብዓብዪ ፊደል ይጅምር ብነጥቢ ይውዳእ።", uk: "Напишіть речення із запропонованим дієсловом.\nРечення повинно мати підмет, дієслово та додаток.\nВоно починається з великої літери і закінчується крапкою." },
      verbPool: [
        "aller", "venir", "partir", "arriver", "entrer",
        "sortir", "monter", "descendre", "marcher", "courir",
      ],
      verbPoolSize: 5,
    },
  ],

  evalExercises: [
    {
      type: "fill",
      title: "Évaluation — Question 1",
      instruction: "Complétez avec la bonne préposition (à, en, au, aux, chez, de, du, des, de chez).",
      transInstruction: { en: "Complete with the correct preposition (à, en, au, aux, chez, de, du, des, de chez).", ar: "أكمل بحرف الجر الصحيح (à, en, au, aux, chez, de, du, des, de chez).", fa: "با حرف اضافه‌ی درست کامل کنید (à, en, au, aux, chez, de, du, des, de chez).", ti: "ብቅኑዕ ቅድመ-ስም ምላእ (à, en, au, aux, chez, de, du, des, de chez).", uk: "Доповніть правильним прийменником (à, en, au, aux, chez, de, du, des, de chez)." },
      items: [],
      poolSize: 6,
      pool: [
        { sentence: "Je vais ___ Paris.",              hint: "ville",              answer: "à"       },
        { sentence: "Elle va ___ France.",             hint: "pays féminin",       answer: "en"      },
        { sentence: "Il vient ___ Maroc.",             hint: "du = de + le",       answer: "du"      },
        { sentence: "Nous allons ___ États-Unis.",     hint: "pays pluriel",       answer: "aux"     },
        { sentence: "Tu vas ___ médecin.",             hint: "chez + personne",    answer: "chez le" },
        { sentence: "Elle vient ___ Lyon.",            hint: "ville → de",         answer: "de"      },
        { sentence: "Il arrive ___ gare.",             hint: "à + la",             answer: "à la"    },
        { sentence: "Je viens ___ marché.",            hint: "du = de + le",       answer: "du"      },
        { sentence: "Nous partons ___ Rome.",          hint: "destination",        answer: "pour"    },
        { sentence: "Elle entre ___ la salle.",        hint: "entrer + …",         answer: "dans"    },
        { sentence: "Il sort ___ bureau.",             hint: "du = de + le",       answer: "du"      },
        { sentence: "Je monte ___ bus.",               hint: "monter + …",         answer: "dans le" },
      ],
    },
    {
      type: "qcm",
      title: "Évaluation — Question 2",
      instruction: "Choisissez la bonne préposition ou contraction.",
      transInstruction: { en: "Choose the correct preposition or contraction.", ar: "اختر حرف الجر أو الاندماج الصحيح.", fa: "حرف اضافه یا شکل ادغام‌شده‌ی درست را انتخاب کنید.", ti: "ቅኑዕ ቅድመ-ስም ወይ ምትእስሳር ምረጽ።", uk: "Оберіть правильний прийменник або скорочення." },
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "Je vais ___ supermarché.",       choices: ["au", "à le", "en"],   correctIdx: 0 },
        { sentence: "Elle vient ___ Espagne.",        choices: ["d'", "de", "du"],  correctIdx: 0 },
        { sentence: "Ils vont ___ États-Unis.",       choices: ["aux", "au", "en"],   correctIdx: 0 },
        { sentence: "Je vais ___ pharmacie.",         choices: ["à la", "au", "à le"],   correctIdx: 0 },
        { sentence: "Il part ___ Tokyo.",             choices: ["pour", "à", "en"],   correctIdx: 0 },
        { sentence: "Tu viens ___ école ?",           choices: ["de l'", "du", "de"],   correctIdx: 0 },
        { sentence: "Elle monte ___ voiture.",        choices: ["dans la", "dans le", "au"],  correctIdx: 0 },
        { sentence: "Nous arrivons ___ travail.",     choices: ["du", "de le", "de"],    correctIdx: 0 },
      ],
    },
  ],
};
