import type { GrammarLesson } from "../../grammar-data";

const C = "#E8604A"; // orange-red — l'objet / la personne
const T = "#1BA8A8"; // teal — la référence spatiale

const svg = (body: string) =>
  `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" style="display:block;width:100%;height:auto">${body}</svg>`;

const rect = (x: number, y: number, w: number, h: number, r = 3, color = T) =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="${color}"/>`;

const circle = (cx: number, cy: number, r: number, color = C) =>
  `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${color}"/>`;

const PREPS = [
  // ── Verticals ────────────────────────────────────────────────────────────────
  {
    label: "sur",
    svg: svg(
      rect(12, 46, 56, 18) +
      circle(40, 33, 13)
    ),
  },
  {
    label: "au-dessus de",
    svg: svg(
      rect(12, 54, 56, 14) +
      circle(40, 23, 13)
    ),
  },
  {
    label: "sous",
    svg: svg(
      rect(12, 16, 56, 18) +
      circle(40, 47, 13)
    ),
  },
  {
    label: "en-dessous de",
    svg: svg(
      rect(12, 10, 56, 16) +
      circle(40, 57, 13)
    ),
  },

  // ── Inside / outside ─────────────────────────────────────────────────────────
  {
    label: "dans",
    svg: svg(
      `<rect x="8" y="8" width="64" height="64" rx="4" fill="none" stroke="${T}" stroke-width="5"/>` +
      circle(40, 40, 18)
    ),
  },
  {
    label: "à l'extérieur de",
    svg: svg(
      `<rect x="28" y="10" width="44" height="60" rx="4" fill="none" stroke="${T}" stroke-width="5"/>` +
      circle(12, 40, 10)
    ),
  },

  // ── Front / back ─────────────────────────────────────────────────────────────
  {
    label: "devant",
    svg: svg(
      rect(28, 18, 44, 44) +
      circle(32, 40, 16)
    ),
  },
  {
    label: "derrière",
    svg: svg(
      circle(50, 40, 16) +
      rect(8, 18, 44, 44)
    ),
  },

  // ── Between / among ──────────────────────────────────────────────────────────
  {
    label: "entre",
    svg: svg(
      rect(4, 22, 14, 36) +
      rect(62, 22, 14, 36) +
      circle(40, 40, 14)
    ),
  },
  {
    label: "parmi",
    svg: svg(
      circle(20, 20, 9, T) +
      circle(46, 13, 9, T) +
      circle(65, 22, 9, T) +
      circle(10, 44, 9, T) +
      circle(68, 44, 9, T) +
      circle(18, 65, 9, T) +
      circle(52, 65, 9, T) +
      circle(38, 40, 14)
    ),
  },

  // ── Side / distance ──────────────────────────────────────────────────────────
  {
    label: "à côté de",
    svg: svg(
      rect(40, 18, 34, 44) +
      circle(25, 40, 14)
    ),
  },
  {
    label: "en face de",
    svg: svg(
      circle(16, 40, 13) +
      circle(64, 40, 13, T) +
      `<line x1="31" y1="40" x2="49" y2="40" stroke="#9CA3AF" stroke-width="1.5" stroke-dasharray="3,3"/>`
    ),
  },
  {
    label: "près de",
    svg: svg(
      rect(46, 20, 28, 40) +
      circle(24, 40, 12)
    ),
  },
  {
    label: "loin de",
    svg: svg(
      rect(56, 28, 20, 24, 2) +
      circle(10, 40, 9) +
      `<line x1="21" y1="40" x2="54" y2="40" stroke="#9CA3AF" stroke-width="1.5" stroke-dasharray="4,3"/>`
    ),
  },

  // ── Against / at ─────────────────────────────────────────────────────────────
  {
    label: "contre",
    svg: svg(
      rect(40, 15, 32, 50) +
      circle(26, 40, 14)
    ),
  },
  {
    label: "chez (+ personne)",
    svg: svg(
      `<polygon points="8,42 40,12 72,42" fill="${T}"/>` +
      rect(16, 40, 48, 32, 2) +
      circle(40, 55, 11)
    ),
  },
];

export const A1_GR_L11: GrammarLesson = {
  slug: "a1-gr-l11",
  code: "R2.5",
  level: "A1",
  title: "Les prépositions de lieu",
  theory: [
    // ── Titre ────────────────────────────────────────────────────────────────────
    {
      type: "heading",
      text: "Les prépositions de lieu",
      trans: {
        en: "Prepositions of place",
        ar: "حروف الجر المكانية",
        fa: "حروف اضافه مکانی",
        ti: "ናይ ቦታ ቅድሚ ስም ዝኸዱ ቃላት",
        uk: "Прийменники місця",
      },
    },

    {
      type: "plain_list",
      items: [
        "Les prépositions de lieu indiquent où se trouve quelque chose ou quelqu'un par rapport à un autre objet ou endroit.",
      ],
      transItems: {
        en: ["Prepositions of place indicate where something or someone is located in relation to another object or place."],
        ar: ["حروف الجر المكانية تدل على موقع شيء ما أو شخص ما بالنسبة لشيء آخر أو مكان آخر."],
        fa: ["حروف اضافه مکانی نشان می‌دهند که چیزی یا کسی نسبت به شیء یا مکان دیگری کجا قرار دارد."],
        ti: ["ናይ ቦታ ቅድሚ ስም ዝኸዱ ቃላት ኣበይ ነገር ወይ ሰብ ኣብ ዝኾነ ካልእ ነገር ወይ ቦታ ከምዘሎ ይሕብሩ።"],
        uk: ["Прийменники місця вказують, де знаходиться щось або хтось відносно іншого предмета чи місця."],
      },
    },

    // ── Illustrations ─────────────────────────────────────────────────────────
    { type: "illus_cards", items: PREPS, cols: 4 },

    // ── Exemples ─────────────────────────────────────────────────────────────────
    {
      type: "highlight",
      label: "Exemples en phrases",
      noBulletItems: [0, 1, 2, 3, 4, 5, 6, 7],
      items: [
        "Le livre est {a}sur{/a} la table.",
        "Le chat est {a}sous{/a} la chaise.",
        "Il attend {a}devant{/a} l'école.",
        "Le jardin est {a}derrière{/a} la maison.",
        "La banque est {a}entre{/a} la poste et la pharmacie.",
        "La boulangerie est {a}à côté de{/a} la pharmacie.",
        "L'hôtel est {a}en face de{/a} la gare.",
        "Elle habite {a}chez{/a} ses parents.",
      ],
      transLabel: {
        en: "Example sentences",
        ar: "أمثلة في جمل",
        fa: "مثال‌هایی در جملات",
        ti: "ኣብ ሓሳባት ዝርከቡ ኣብነታት",
        uk: "Приклади речень",
      },
      transItems: {
        en: [
          "The book is {a}on{/a} the table.",
          "The cat is {a}under{/a} the chair.",
          "He waits {a}in front of{/a} the school.",
          "The garden is {a}behind{/a} the house.",
          "The bank is {a}between{/a} the post office and the pharmacy.",
          "The bakery is {a}next to{/a} the pharmacy.",
          "The hotel is {a}opposite{/a} the station.",
          "She lives {a}at{/a} her parents' place.",
        ],
        ar: [
          "الكتاب {a}على{/a} المائدة.",
          "القطة {a}تحت{/a} الكرسي.",
          "ينتظر {a}أمام{/a} المدرسة.",
          "الحديقة {a}خلف{/a} المنزل.",
          "البنك {a}بين{/a} البريد والصيدلية.",
          "المخبز {a}بجانب{/a} الصيدلية.",
          "الفندق {a}في مواجهة{/a} المحطة.",
          "هي تسكن {a}عند{/a} والديها.",
        ],
        fa: [
          "کتاب {a}روی{/a} میز است.",
          "گربه {a}زیر{/a} صندلی است.",
          "او {a}جلوی{/a} مدرسه منتظر است.",
          "باغ {a}پشت{/a} خانه است.",
          "بانک {a}بین{/a} پست و داروخانه است.",
          "نانوایی {a}کنار{/a} داروخانه است.",
          "هتل {a}روبروی{/a} ایستگاه است.",
          "او {a}پیش{/a} پدر و مادرش زندگی می‌کند.",
        ],
        ti: [
          "መጽሓፍ {a}ኣብ ልዕሊ{/a} ሜዳ ኣሎ።",
          "ድሙ {a}ትሕቲ{/a} ወንበር ኣሎ።",
          "{a}ቅድሚ{/a} ቤትትምህርቲ ይጽበ ኣሎ።",
          "ሓርሻ {a}ኣብ ሕቅፈት{/a} ቤቱ ኣሎ።",
          "ባንኪ {a}ኣብ መቐቐ{/a} ፖስጣን ፋርማሲን ኣሎ።",
          "ሓድሽ ዝተሃርዓ {a}ጸጋም{/a} ፋርማሲ ኣሎ።",
          "ሆቴል ምስ ናይ ባቡር ጣቢያ {a}ፊት ንፊት{/a} እዩ።",
          "ኣብ ቤት {a}ናይ{/a} ወለዳ ትቕመጥ ኣላ།",
        ],
        uk: [
          "Книга {a}на{/a} столі.",
          "Кіт {a}під{/a} стільцем.",
          "Він чекає {a}перед{/a} школою.",
          "Сад {a}позаду{/a} будинку.",
          "Банк {a}між{/a} поштою та аптекою.",
          "Пекарня {a}поруч з{/a} аптекою.",
          "Готель {a}навпроти{/a} вокзалу.",
          "Вона живе {a}у{/a} батьків.",
        ],
      },
    },

    // ── Contractions ─────────────────────────────────────────────────────────────
    {
      type: "heading",
      text: "Articles contractés",
      sub: true,
      trans: {
        en: "Contracted articles",
        ar: "المقاطع المدمجة",
        fa: "حروف تعریف ادغام‌شده",
        ti: "ዝተሓጸሩ ናይ ዓንቀጽ",
        uk: "Злиті артиклі",
      },
    },

    {
      type: "grid",
      headers: ["Contraction", "Exemple"],
      boldFirstCol: true,
      rows: [
        ["{a}à + le → au{/a}", "Je vais {a}au{/a} marché. — L'appartement est {a}au{/a} 2ᵉ étage."],
        ["{a}à + les → aux{/a}", "Je parle {a}aux{/a} enfants. — Nous allons {a}aux{/a} Champs-Élysées."],
        ["{a}de + le → du{/a}", "loin {a}du{/a} centre — Il sort {a}du{/a} magasin."],
        ["{a}de + les → des{/a}", "près {a}des{/a} magasins — à côté {a}des{/a} bureaux."],
      ],
      transHeaders: {
        en: ["Contraction", "Example"],
        ar: ["الإدماج", "مثال"],
        fa: ["ادغام", "مثال"],
        ti: ["ምድምሳስ", "ኣብነት"],
        uk: ["Злиття", "Приклад"],
      },
      transRows: {
        en: [
          ["{a}à + le → au{/a}", "I'm going to the market. — The apartment is on the 2nd floor."],
          ["{a}à + les → aux{/a}", "I'm talking to the children. — We're going to the Champs-Élysées."],
          ["{a}de + le → du{/a}", "far from the centre — He leaves the shop."],
          ["{a}de + les → des{/a}", "near the shops — next to the offices."],
        ],
        ar: [
          ["{a}à + le → au{/a}", "أذهب إلى السوق. — الشقة في الطابق الثاني."],
          ["{a}à + les → aux{/a}", "أتحدث إلى الأطفال. — نذهب إلى الشانزليزيه."],
          ["{a}de + le → du{/a}", "بعيد عن المركز. — يخرج من المتجر."],
          ["{a}de + les → des{/a}", "قريب من المحلات. — بجانب المكاتب."],
        ],
        fa: [
          ["{a}à + le → au{/a}", "به بازار می‌روم. — آپارتمان در طبقه دوم است."],
          ["{a}à + les → aux{/a}", "با بچه‌ها صحبت می‌کنم. — ما به شانزلیزه می‌رویم."],
          ["{a}de + le → du{/a}", "دور از مرکز. — از مغازه خارج می‌شود."],
          ["{a}de + les → des{/a}", "نزدیک مغازه‌ها. — کنار دفاتر."],
        ],
        ti: [
          ["{a}à + le → au{/a}", "ናብ ዕዳጋ ይኸይድ ኣለኹ። — ናይ ካልኣይ ደርቢ እዩ።"],
          ["{a}à + les → aux{/a}", "ምስ ቆልዑ ይዛረብ ኣለኹ። — ናብ ሻምዝሊዝ ንኸይድ።"],
          ["{a}de + le → du{/a}", "ካብ ማእከል ርሒቕ። — ካብ ሱቕ ይወጽእ።"],
          ["{a}de + les → des{/a}", "ቀረባ ሱቓት። — ጸጋም ቤት ጽሕፈታት።"],
        ],
        uk: [
          ["{a}à + le → au{/a}", "Я йду на ринок. — Квартира на другому поверсі."],
          ["{a}à + les → aux{/a}", "Я розмовляю з дітьми. — Ми йдемо на Єлисейські поля."],
          ["{a}de + le → du{/a}", "далеко від центру. — Він виходить з магазину."],
          ["{a}de + les → des{/a}", "поруч з магазинами. — поряд з офісами."],
        ],
      },
    },

    {
      type: "grid",
      headers: ["", "Masculin", "Féminin", "Pluriel"],
      boldFirstCol: true,
      rows: [
        ["{a}de +{/a}", "{a}du{/a} (de + le)", "de la", "{a}des{/a} (de + les)"],
      ],
    },
  ],
  exercises: [
    // ── Exercice 1 — QCM + SVG : 3 images, 3 choix en toggle vertical ────────
    {
      type: "qcm",
      title: "Exercice 1",
      instruction: "Quelle préposition est illustrée ?",
      svgChoiceLayout: "stacked",
      items: [],
      pool: [
        { svg: PREPS[0].svg,  sentence: "", choices: ["sur",             "sous",          "au-dessus de"],   correctIdx: 0 },
        { svg: PREPS[1].svg,  sentence: "", choices: ["au-dessus de",    "sur",           "en-dessous de"],  correctIdx: 0 },
        { svg: PREPS[2].svg,  sentence: "", choices: ["sous",            "sur",           "dans"],            correctIdx: 0 },
        { svg: PREPS[3].svg,  sentence: "", choices: ["en-dessous de",   "sous",          "au-dessus de"],   correctIdx: 0 },
        { svg: PREPS[4].svg,  sentence: "", choices: ["dans",            "à l'extérieur de","devant"],        correctIdx: 0 },
        { svg: PREPS[5].svg,  sentence: "", choices: ["à l'extérieur de","dans",          "devant"],          correctIdx: 0 },
        { svg: PREPS[6].svg,  sentence: "", choices: ["devant",          "derrière",      "dans"],            correctIdx: 0 },
        { svg: PREPS[7].svg,  sentence: "", choices: ["derrière",        "devant",        "dans"],            correctIdx: 0 },
        { svg: PREPS[8].svg,  sentence: "", choices: ["entre",           "parmi",         "à côté de"],       correctIdx: 0 },
        { svg: PREPS[9].svg,  sentence: "", choices: ["parmi",           "entre",         "dans"],            correctIdx: 0 },
        { svg: PREPS[10].svg, sentence: "", choices: ["à côté de",       "en face de",    "entre"],           correctIdx: 0 },
        { svg: PREPS[11].svg, sentence: "", choices: ["en face de",      "à côté de",     "contre"],          correctIdx: 0 },
        { svg: PREPS[12].svg, sentence: "", choices: ["près de",         "loin de",       "contre"],          correctIdx: 0 },
        { svg: PREPS[13].svg, sentence: "", choices: ["loin de",         "près de",       "en face de"],      correctIdx: 0 },
        { svg: PREPS[14].svg, sentence: "", choices: ["contre",          "à côté de",     "près de"],         correctIdx: 0 },
        { svg: PREPS[15].svg, sentence: "", choices: ["chez",            "dans",          "devant"],          correctIdx: 0 },
      ],
      poolSize: 4,
    },

    // ── Exercice 2 — Associez définition ↔ préposition (letterSelect) ─────────
    {
      type: "fill_select",
      title: "Exercice 2",
      instruction: "Associez chaque définition à la bonne préposition. Choisissez la lettre correspondante.",
      letterSelect: true,
      wordBank: ["sur", "sous", "dans", "devant", "derrière", "entre", "à côté de", "en face de"],
      items: [],
      pool: [
        { sentence: "contact avec la surface supérieure",          hint: "", answer: "sur" },
        { sentence: "contact avec la surface inférieure",          hint: "", answer: "sous" },
        { sentence: "à l'intérieur d'un espace",                  hint: "", answer: "dans" },
        { sentence: "face avant d'un objet ou lieu",               hint: "", answer: "devant" },
        { sentence: "face arrière d'un objet ou lieu",             hint: "", answer: "derrière" },
        { sentence: "au milieu de deux ou plusieurs éléments",     hint: "", answer: "entre" },
        { sentence: "côte à côte avec quelque chose",              hint: "", answer: "à côté de" },
        { sentence: "face à face avec quelque chose",              hint: "", answer: "en face de" },
      ],
      poolSize: 5,
    },

    // ── Exercice 3 — Articles contractés avec "de" ───────────────────────────
    {
      type: "fill_select",
      title: "Exercice 3",
      instruction: "Complétez les phrases avec le bon article (du, de la, de l', des).",
      hideWordBank: true,
      wordBank: ["du", "de la", "de l'", "des"],
      items: [
        { sentence: "Le café est loin ___ centre-ville.",          hint: "de + le",  answer: "du" },
        { sentence: "Il sort ___ magasin avec des sacs.",          hint: "de + le",  answer: "du" },
        { sentence: "La pharmacie est près ___ boulangerie.",      hint: "de + la",  answer: "de la" },
        { sentence: "Elle habite loin ___ université.",            hint: "de + l'",  answer: "de l'" },
        { sentence: "Elle revient ___ cours de français.",         hint: "de + les", answer: "des" },
        { sentence: "Le parc est à côté ___ écoles.",             hint: "de + les", answer: "des" },
      ],
    },

    // ── Exercice 4 — Remettre les mots dans le bon ordre ─────────────────────
    {
      type: "word_order",
      title: "Exercice 4",
      instruction: "Remettez les mots dans le bon ordre.",
      items: [],
      pool: [
        { sentence: "Le livre est sur la table.",                      words: ["Le", "livre", "est", "sur", "la", "table."] },
        { sentence: "Le chat dort sous le lit.",                       words: ["Le", "chat", "dort", "sous", "le", "lit."] },
        { sentence: "Les clés sont dans le sac.",                      words: ["Les", "clés", "sont", "dans", "le", "sac."] },
        { sentence: "La voiture est devant la maison.",                words: ["La", "voiture", "est", "devant", "la", "maison."] },
        { sentence: "Le jardin est derrière la maison.",               words: ["Le", "jardin", "est", "derrière", "la", "maison."] },
        { sentence: "La pharmacie est à côté de la boulangerie.",      words: ["La", "pharmacie", "est", "à", "côté", "de", "la", "boulangerie."] },
        { sentence: "La banque est entre la poste et la pharmacie.",   words: ["La", "banque", "est", "entre", "la", "poste", "et", "la", "pharmacie."] },
        { sentence: "L'hôtel est en face de la gare.",                 words: ["L'hôtel", "est", "en", "face", "de", "la", "gare."] },
      ],
      poolSize: 5,
    },
  ],

  evalExercises: [
    {
      type: "qcm",
      title: "Évaluation — Question 1",
      instruction: "Choisissez la bonne préposition de lieu.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "Le livre est ___ la table.",          choices: ["sur",       "sous",     "dans",     "devant"],   correctIdx: 0 },
        { sentence: "Le chat est ___ le lit.",             choices: ["sous",      "sur",      "dans",     "devant"],   correctIdx: 0 },
        { sentence: "Les stylos sont ___ la trousse.",     choices: ["dans",      "sur",      "sous",     "derrière"], correctIdx: 0 },
        { sentence: "La voiture est ___ la maison.",       choices: ["devant",    "derrière", "dans",     "sur"],      correctIdx: 0 },
        { sentence: "Le jardin est ___ la maison.",        choices: ["derrière",  "devant",   "dans",     "sous"],     correctIdx: 0 },
        { sentence: "La pharmacie est ___ la boulangerie.",choices: ["à côté de", "devant",   "derrière", "dans"],     correctIdx: 0 },
        { sentence: "L'école est ___ ici.",                choices: ["près de",   "loin de",  "dans",     "sur"],      correctIdx: 0 },
        { sentence: "Le parc est ___ la mairie.",          choices: ["en face de","à côté de","dans",     "sur"],      correctIdx: 0 },
        { sentence: "Je suis assis ___ Paul et Marie.",    choices: ["entre",     "devant",   "derrière", "sur"],      correctIdx: 0 },
        { sentence: "Le chat est caché ___ le canapé.",    choices: ["derrière",  "devant",   "dans",     "sur"],      correctIdx: 0 },
      ],
    },
    {
      type: "fill",
      title: "Évaluation — Question 2",
      instruction: "Complétez avec la bonne préposition de lieu.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "Le livre est ___ la table.",               hint: "contact / dessus",    answer: "sur"       },
        { sentence: "Le chat dort ___ le lit.",                 hint: "contact / dessous",   answer: "sous"      },
        { sentence: "Les clés sont ___ le sac.",                hint: "à l'intérieur",       answer: "dans"      },
        { sentence: "La voiture est garée ___ l'immeuble.",     hint: "face avant",          answer: "devant"    },
        { sentence: "Le garage est ___ la maison.",             hint: "face arrière",        answer: "derrière"  },
        { sentence: "La poste est ___ la gare.",                hint: "face à face",         answer: "en face de"},
        { sentence: "Mon école est ___ chez moi.",              hint: "distance faible",     answer: "près de"   },
        { sentence: "Je suis assis ___ deux amis.",             hint: "au milieu",           answer: "entre"     },
        { sentence: "Le supermarché est ___ la pharmacie.",     hint: "côte à côte",         answer: "à côté de" },
        { sentence: "La bibliothèque est ___ ici.",             hint: "distance grande",     answer: "loin de"   },
      ],
    },
  ],
};
