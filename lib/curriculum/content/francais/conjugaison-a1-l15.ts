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

// ── Lesson ─────────────────────────────────────────────────────────────────────

export const A1_CONJ_L15: ConjLesson = {
  slug: "a1-conj-l15",
  code: "G.11",
  level: "A1",
  title: "Vouloir, pouvoir, devoir",
  theory: [
    { type: "heading", text: "Les verbes modaux" },
    {
      type: "plain_list",
      items: [
        "Ces verbes expriment un état, une capacité ou une obligation.",
        "Ils sont toujours suivis d'un {a}infinitif{/a}.",
      ],
    },
    {
      type: "table",
      tables: [
        {
          verb: "vouloir", accentForms: true,
          rows: [
            { pronoun: "je", form: "veux" },
            { pronoun: "tu", form: "veux" },
            { pronoun: "il / elle", form: "veut" },
            { pronoun: "nous", form: "voulons" },
            { pronoun: "vous", form: "voulez" },
            { pronoun: "ils / elles", form: "veulent" },
          ],
        },
        {
          verb: "pouvoir", accentForms: true,
          rows: [
            { pronoun: "je", form: "peux" },
            { pronoun: "tu", form: "peux" },
            { pronoun: "il / elle", form: "peut" },
            { pronoun: "nous", form: "pouvons" },
            { pronoun: "vous", form: "pouvez" },
            { pronoun: "ils / elles", form: "peuvent" },
          ],
        },
        {
          verb: "devoir", accentForms: true,
          rows: [
            { pronoun: "je", form: "dois" },
            { pronoun: "tu", form: "dois" },
            { pronoun: "il / elle", form: "doit" },
            { pronoun: "nous", form: "devons" },
            { pronoun: "vous", form: "devez" },
            { pronoun: "ils / elles", form: "doivent" },
          ],
        },
      ],
    },
    {
      type: "grid",
      headers: ["Verbe", "Sens", "Exemple"],
      boldFirstCol: true,
      rows: [
        ["{a}vouloir{/a}", "désir / intention", "Je veux partir."],
        ["{a}pouvoir{/a}", "capacité / permission", "Tu peux entrer."],
        ["{a}devoir{/a}", "obligation / nécessité", "Elle doit étudier."],
      ],
    },
    {
      type: "verb_toggle",
      buttonCols: 3,
      verbs: [
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
      ],
    },
    { type: "heading", text: "Négation", sub: true },
    {
      type: "grid",
      headers: ["Affirmatif", "Négatif"],
      rows: [
        ["Je veux partir.", "Je {a}ne{/a} veux {a}pas{/a} partir."],
        ["Tu peux venir.", "Tu {a}ne{/a} peux {a}pas{/a} venir."],
        ["Il doit travailler.", "Il {a}ne{/a} doit {a}pas{/a} travailler."],
      ],
    },
    {
      type: "highlight",
      label: "Astuce : politesse avec vouloir",
      items: [
        "{a}Je voudrais{/a} (conditionnel) est plus poli que «je veux».",
        "Je voudrais un café, s'il vous plaît.",
        "Vous voudriez de l'aide ?",
      ],
      noBulletItems: [0],
    },
  ],
  exercises: [
    // ── Exercice 1 — Conjuguez les verbes ───────────────────────────────────
    {
      type: "fill",
      title: "Exercice 1",
      instruction: "Conjuguez les verbes entre parenthèses.",
      items: [],
      pool: ex1Pool,
      poolSize: 8,
    },

    // ── Exercice 2 — Conjuguez les verbes (autres phrases) ──────────────────
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
        // Sentence 1 : Elle veut apprendre le français.
        { word: "{a}Elle{/a} veut apprendre le français.",        categoryIdx: 0 },
        { word: "Elle {a}veut{/a} apprendre le français.",        categoryIdx: 1 },
        { word: "Elle veut {a}apprendre le français{/a}.",        categoryIdx: 2 },
        // Sentence 2 : Nous ne pouvons pas partir maintenant.
        { word: "{a}Nous{/a} ne pouvons pas partir maintenant.", categoryIdx: 0 },
        { word: "Nous ne {a}pouvons{/a} pas partir maintenant.", categoryIdx: 1 },
        { word: "Nous ne pouvons pas {a}partir maintenant{/a}.", categoryIdx: 2 },
        // Sentence 3 : Il doit travailler ce soir.
        { word: "{a}Il{/a} doit travailler ce soir.",            categoryIdx: 0 },
        { word: "Il {a}doit{/a} travailler ce soir.",            categoryIdx: 1 },
        { word: "Il doit {a}travailler ce soir{/a}.",            categoryIdx: 2 },
        // Sentence 4 : Est-ce que tu sais conduire ?
        { word: "{a}Tu{/a} sais conduire ?",                     categoryIdx: 0 },
        { word: "Tu {a}sais{/a} conduire ?",                     categoryIdx: 1 },
        { word: "Tu sais {a}conduire{/a} ?",                     categoryIdx: 2 },
        // Sentence 5 : Il faut partir maintenant.
        { word: "{a}Il{/a} faut partir maintenant.",             categoryIdx: 0 },
        { word: "Il {a}faut{/a} partir maintenant.",             categoryIdx: 1 },
        { word: "Il faut {a}partir maintenant{/a}.",             categoryIdx: 2 },
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
        { word: "Je veux {a}apprendre le français{/a}.",          categoryIdx: 0 },
        { word: "Ils doivent travailler {a}au bureau{/a}.",       categoryIdx: 1 },
        { word: "Elle peut chanter {a}très bien{/a}.",            categoryIdx: 2 },
        { word: "Tu dois rendre {a}ce livre{/a}.",                categoryIdx: 0 },
        { word: "Nous pouvons nous rejoindre {a}à la gare{/a}.",  categoryIdx: 1 },
        { word: "Il faut partir {a}maintenant{/a}.",              categoryIdx: 2 },
      ],
    },

    // ── Exercice 6 — Remettez les mots dans le bon ordre ───────────────────
    {
      type: "word_order",
      title: "Exercice 6",
      instruction: "Remettez les mots dans le bon ordre pour former une phrase correcte.",
      items: [
        {
          sentence: "Elle veut apprendre le français.",
          words: ["Elle", "veut", "apprendre", "le", "français"],
        },
        {
          sentence: "Nous ne pouvons pas partir maintenant.",
          words: ["Nous", "ne", "pouvons", "pas", "partir", "maintenant"],
        },
        {
          sentence: "Est-ce que tu sais conduire ?",
          words: ["Est-ce que", "tu", "sais", "conduire"],
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
          words: ["Il", "doit", "travailler", "ce", "soir."],
          answers: [0, 1, 2, 2, 2],
        },
        {
          words: ["Nous", "ne", "pouvons", "pas", "partir", "maintenant."],
          answers: [0, 1, 1, 1, 2, 2],
        },
        {
          words: ["Est-ce que", "tu", "sais", "conduire", "?"],
          answers: [null, 0, 1, 2, null],
        },
      ],
    },

    // ── Exercice 8 — Écrivez une phrase ────────────────────────────────────
    {
      type: "write",
      title: "Exercice 8",
      instruction: "Écrivez une phrase avec le verbe proposé.\nLa phrase doit avoir un sujet, un verbe modal et un infinitif.\nElle commence par une majuscule et se termine par un point.",
      prompts: [
        "vouloir",
        "pouvoir",
        "devoir",
        "savoir",
        "falloir",
      ],
    } as any,
  ],
};
