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

const MODAL_VERBS = [
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

export const A1_CONJ_L15: ConjLesson = {
  slug: "a1-conj-l15",
  code: "R2.3",
  level: "A1",
  title: "Les verbes modaux",
  theory: [
    {
      type: "plain_list",
      items: [
        "Ces verbes expriment un état, une capacité ou une obligation.",
        "Ils sont toujours suivis d'un {a}infinitif{/a}.",
      ],
      transItems: {
        en: ["These verbs express a state, an ability or an obligation.", "They are always followed by an {a}infinitive{/a}."],
        ar: ["هذه الأفعال تعبّر عن حالة أو قدرة أو التزام.", "يتبعها دائماً {a}مصدر{/a}."],
        fa: ["این افعال بیانگر حالت، توانایی یا الزام هستند.", "همیشه به دنبال آن‌ها یک {a}مصدر{/a} می‌آید."],
        ti: ["እዞም ግሲታት ኩነታት፣ ክእለት ወይ ግዴታ የመልክቱ።", "ኩሉ ግዜ ብ{a}መሰረታዊ ግሲ{/a} ይስዕቡ።"],
        uk: ["Ці дієслова виражають стан, здатність або обов'язок.", "За ними завжди йде {a}інфінітив{/a}."],
      },
    },
    { type: "heading", text: "La forme affirmative", trans: { en: "The affirmative form", ar: "صيغة الإثبات", fa: "صورت مثبت", ti: "ኣረጋጋጺ ቅርጺ", uk: "Стверджувальна форма" } },
    {
      type: "verb_toggle",
      buttonCols: 3,
      verbs: MODAL_VERBS,
    },
    {
      type: "highlight",
      label: "Exemple",
      items: [
        "Je veux apprendre le français.",
        "Tu peux venir ce soir.",
        "Il doit respecter les règles.",
        "Elle sait parler trois langues.",
        "Il faut étudier chaque jour.",
      ],
      transLabel: { en: "Example", ar: "مثال", fa: "مثال", ti: "ኣብነት", uk: "Приклад" },
      transItems: {
        en: ["I want to learn French.", "You can come tonight.", "He must respect the rules.", "She can speak three languages.", "You must study every day."],
        ar: ["أريد أن أتعلم الفرنسية.", "يمكنك أن تأتي هذا المساء.", "عليه أن يحترم القواعد.", "هي تستطيع التحدث بثلاث لغات.", "يجب الدراسة كل يوم."],
        fa: ["می‌خواهم فرانسوی یاد بگیرم.", "می‌توانی امشب بیایی.", "او باید قوانین را رعایت کند.", "او می‌تواند به سه زبان صحبت کند.", "باید هر روز درس خواند."],
        ti: ["ፈረንሳይ ክመሃር እደሊ።", "ሎሚ ምሸት ክትመጽእ ትኽእል።", "ንሱ ነቶም ሕግታት ከኽብር ኣለዎ።", "ንሳ ብሰለስተ ቋንቋታት ክትዛረብ ትኽእል።", "ኩሉ መዓልቲ ምጽናዕ የድሊ።"],
        uk: ["Я хочу вивчити французьку.", "Ти можеш прийти сьогодні ввечері.", "Він повинен дотримуватися правил.", "Вона вміє говорити трьома мовами.", "Потрібно вчитися щодня."],
      },
    },
    {
      type: "grid",
      headers: ["Verbe", "Sens"],
      transHeaders: {
        en: ["Verb", "Meaning"],
        ar: ["الفعل", "المعنى"],
        fa: ["فعل", "معنی"],
        ti: ["ግሲ", "ትርጉም"],
        uk: ["Дієслово", "Значення"],
      },
      transRows: {
        en: [["{a}vouloir{/a}", "desire / intention"], ["{a}pouvoir{/a}", "ability / permission"], ["{a}devoir{/a}", "obligation / necessity"], ["{a}savoir{/a}", "skill / learned ability"], ["{a}falloir{/a}", "impersonal necessity"]],
        ar: [["{a}vouloir{/a}", "رغبة / نية"], ["{a}pouvoir{/a}", "قدرة / إذن"], ["{a}devoir{/a}", "التزام / ضرورة"], ["{a}savoir{/a}", "مهارة / قدرة مكتسبة"], ["{a}falloir{/a}", "ضرورة غير شخصية"]],
        fa: [["{a}vouloir{/a}", "خواست / قصد"], ["{a}pouvoir{/a}", "توانایی / اجازه"], ["{a}devoir{/a}", "الزام / ضرورت"], ["{a}savoir{/a}", "مهارت / توانایی آموخته‌شده"], ["{a}falloir{/a}", "ضرورت غیرشخصی"]],
        ti: [["{a}vouloir{/a}", "ድሌት / ሓሳብ"], ["{a}pouvoir{/a}", "ክእለት / ፍቓድ"], ["{a}devoir{/a}", "ግዴታ / ኣድላይነት"], ["{a}savoir{/a}", "ክእለት / ዝተመሃረ ክእለት"], ["{a}falloir{/a}", "ዘይብሕታዊ ኣድላይነት"]],
        uk: [["{a}vouloir{/a}", "бажання / намір"], ["{a}pouvoir{/a}", "здатність / дозвіл"], ["{a}devoir{/a}", "обов'язок / необхідність"], ["{a}savoir{/a}", "вміння / набута здатність"], ["{a}falloir{/a}", "безособова необхідність"]],
      },
      boldFirstCol: true,
      rows: [
        ["{a}vouloir{/a}", "désir / intention"],
        ["{a}pouvoir{/a}", "capacité / permission"],
        ["{a}devoir{/a}", "obligation / nécessité"],
        ["{a}savoir{/a}", "compétence / capacité apprise"],
        ["{a}falloir{/a}", "nécessité impersonnelle"],
      ],
    },
    { type: "heading", text: "La forme négative", trans: { en: "The negative form", ar: "صيغة النفي", fa: "صورت منفی", ti: "ኣሉታዊ ቅርጺ", uk: "Заперечна форма" } },
    {
      type: "verb_toggle",
      buttonCols: 3,
      negation: true,
      verbs: MODAL_VERBS,
    },
    {
      type: "highlight",
      label: "Exemple",
      items: [
        "Je ne veux pas partir.",
        "Tu ne peux pas rester ici.",
        "Il ne doit pas fumer.",
        "Elle ne sait pas conduire.",
        "Il ne faut pas oublier.",
      ],
      transLabel: { en: "Example", ar: "مثال", fa: "مثال", ti: "ኣብነት", uk: "Приклад" },
      transItems: {
        en: ["I don't want to leave.", "You can't stay here.", "He must not smoke.", "She can't drive.", "You must not forget."],
        ar: ["لا أريد المغادرة.", "لا يمكنك البقاء هنا.", "يجب ألا يدخّن.", "هي لا تعرف القيادة.", "يجب ألا تنسى."],
        fa: ["نمی‌خواهم بروم.", "نمی‌توانی اینجا بمانی.", "او نباید سیگار بکشد.", "او رانندگی بلد نیست.", "نباید فراموش کرد."],
        ti: ["ክኸይድ ኣይደልን።", "ኣብዚ ክትጸንሕ ኣይትኽእልን።", "ንሱ ክትከኽ የብሉን።", "ንሳ ክትዝውር ኣይትፈልጥን።", "ምርሳዕ የብልካን።"],
        uk: ["Я не хочу йти.", "Ти не можеш тут залишатися.", "Він не повинен палити.", "Вона не вміє водити.", "Не можна забувати."],
      },
    },
    { type: "heading", text: "Politesse avec vouloir", trans: { en: "Politeness with «vouloir»", ar: "التأدّب مع الفعل «vouloir»", fa: "ادب با فعل «vouloir»", ti: "ብ«vouloir» ምኽባር", uk: "Ввічливість із «vouloir»" } },
    {
      type: "plain_list",
      noBulletItems: [0],
      items: [
        "Je voudrais (conditionnel) est plus poli que «je veux».",
      ],
      transItems: {
        en: ["«Je voudrais» (conditional) is more polite than «je veux» (I want)."],
        ar: ["«Je voudrais» (الشرطي) أكثر تأدباً من «je veux» (أريد)."],
        fa: ["«Je voudrais» (شرطی) مودبانه‌تر از «je veux» (می‌خواهم) است."],
        ti: ["«Je voudrais» (ቅድመ-ኩነታዊ) ካብ «je veux» (እደሊ) ዝያዳ ኣኽብሮታዊ እዩ።"],
        uk: ["«Je voudrais» (умовний спосіб) ввічливіше, ніж «je veux» (я хочу)."],
      },
    },
  ],
  exercises: [
    // ── Exercice 1 — Conjuguez les verbes ───────────────────────────────────
    {
      type: "fill",
      title: "Exercice 1",
      instruction: "Conjuguez les verbes entre parenthèses.",
      transInstruction: { en: "Conjugate the verbs in parentheses.", ar: "صرّف الأفعال الموجودة بين القوسين.", fa: "افعال داخل پرانتز را صرف کنید.", ti: "ኣብ ቅንፍ ዘለዉ ግሲታት ኣጻርይ.", uk: "Відмінюйте дієслова в дужках." },
      items: [],
      pool: ex1Pool,
      poolSize: 8,
    },

    // ── Exercice 2 — Conjuguez les verbes (autres phrases) ──────────────────
    {
      type: "fill",
      title: "Exercice 2",
      instruction: "Conjuguez les verbes entre parenthèses.",
      transInstruction: { en: "Conjugate the verbs in parentheses.", ar: "صرّف الأفعال الموجودة بين القوسين.", fa: "افعال داخل پرانتز را صرف کنید.", ti: "ኣብ ቅንፍ ዘለዉ ግሲታት ኣጻርይ.", uk: "Відмінюйте дієслова в дужках." },
      items: [],
      pool: ex2Pool,
      poolSize: 8,
    },

    // ── Exercice 3 — Mettez les phrases au pluriel ──────────────────────────
    {
      type: "fill",
      title: "Exercice 3",
      instruction: "Mettez les phrases au pluriel.",
      transInstruction: { en: "Put the sentences in the plural.", ar: "حوّل الجمل إلى صيغة الجمع.", fa: "جمله‌ها را به جمع تبدیل کنید.", ti: "ነተን ሓሳባት ናብ ብዙሕ ቁጽሪ ቀይሮ.", uk: "Поставте речення у множину." },
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
      transInstruction: { en: "Identify the type of the complement in bold.", ar: "حدّد نوع المتمّم بالخط العريض.", fa: "نوع متمم پررنگ را مشخص کنید.", ti: "ዓይነት ናይቲ ብትር ዘሎ መመላእታ ፍለ.", uk: "Визначте тип виділеного жирним додатка." },
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
      transInstruction: { en: "Put the words back in the correct order to form a correct sentence.", ar: "أعد ترتيب الكلمات لتكوين جملة صحيحة.", fa: "کلمات را به ترتیب درست بچینید تا جمله‌ی درستی بسازید.", ti: "ነተን ቃላት ቅኑዕ ሓሳብ ንምግባር ብቅኑዕ ስርዓት መድብ.", uk: "Розставте слова у правильному порядку, щоб утворити правильне речення." },
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
      transInstruction: { en: "Select a color, then click each word to identify it: Subject (yellow), Verb (red), Complement (green).", ar: "اختر لوناً، ثم انقر على كل كلمة لتحديدها: الفاعل (أصفر)، الفعل (أحمر)، المتمّم (أخضر).", fa: "یک رنگ انتخاب کنید، سپس روی هر کلمه کلیک کنید تا مشخص شود: فاعل (زرد)، فعل (قرمز)، متمم (سبز).", ti: "ሕብሪ ምረጽ፣ ድሕሪኡ ነፍሲ ወከፍ ቃል ንምፍላይ ጠውቕ፦ ርእሲ (ብጫ)፣ ግሲ (ቀይሕ)፣ መመላእታ (ቀጠልያ).", uk: "Виберіть колір, потім натисніть на кожне слово, щоб визначити його: Підмет (жовтий), Дієслово (червоний), Додаток (зелений)." },
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
      transInstruction: { en: "Write a sentence with the verb given.\nThe sentence must have a subject, a modal verb and an infinitive.\nIt starts with a capital letter and ends with a full stop.", ar: "اكتب جملة باستخدام الفعل المقترح.\nيجب أن تحتوي الجملة على فاعل وفعل مساعد ومصدر.\nتبدأ بحرف كبير وتنتهي بنقطة.", fa: "با فعل داده‌شده یک جمله بنویسید.\nجمله باید فاعل، فعل کمکی وجهی و مصدر داشته باشد.\nبا حرف بزرگ شروع و با نقطه تمام می‌شود.", ti: "ብእቲ ዝቐረበ ግሲ ሓደ ሓሳብ ጽሓፍ።\nእቲ ሓሳብ ርእሲ፣ ሞዳላዊ ግሲን መሰረታዊ ግሲን ክህልዎ ኣለዎ።\nብዓብዪ ፊደል ይጅምር ብነጥቢ ይውዳእ።", uk: "Напишіть речення із запропонованим дієсловом.\nРечення повинно мати підмет, модальне дієслово та інфінітив.\nВоно починається з великої літери і закінчується крапкою." },
      prompts: [
        "vouloir",
        "pouvoir",
        "devoir",
        "savoir",
        "falloir",
      ],
    },
  ],

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
