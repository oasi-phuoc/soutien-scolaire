import type { ConjLesson } from "../../conjugation-data";

// ── Exercice 1 pool generator ─────────────────────────────────────────────────

type P = { display: string; ending: string };

// Verbes commençant par une consonne (parler → je parle)
const PC: P[] = [
  { display: "Je",    ending: "e"   },
  { display: "Tu",    ending: "es"  },
  { display: "Il",    ending: "e"   },
  { display: "Elle",  ending: "e"   },
  { display: "Nous",  ending: "ons" },
  { display: "Vous",  ending: "ez"  },
  { display: "Ils",   ending: "ent" },
  { display: "Elles", ending: "ent" },
];

// Verbes commençant par une voyelle (aimer → j'aime)
const PV: P[] = [
  { display: "J'",    ending: "e"   },
  { display: "Tu",    ending: "es"  },
  { display: "Il",    ending: "e"   },
  { display: "Elle",  ending: "e"   },
  { display: "Nous",  ending: "ons" },
  { display: "Vous",  ending: "ez"  },
  { display: "Ils",   ending: "ent" },
  { display: "Elles", ending: "ent" },
];

const HINT = "-e / -es / -ons / -ez / -ent";

function verbPool(stem: string, pronouns: P[], tails: string[]) {
  const items: { sentence: string; hint: string; answer: string }[] = [];
  for (const tail of tails) {
    for (const p of pronouns) {
      const sep = p.display.endsWith("'") ? "" : " ";
      items.push({ sentence: `${p.display}${sep}${stem}___${tail}`, hint: HINT, answer: p.ending });
    }
  }
  return items;
}

const EX1_POOL = [
  ...verbPool("parl", PC, [
    " français.",
    " avec des amis.",
    " trop vite.",
    " au téléphone.",
    " toujours en classe.",
  ]),
  ...verbPool("aim", PV, [
    " la musique.",
    " les animaux.",
    " le chocolat.",
    " voyager.",
    " lire des livres.",
  ]),
  ...verbPool("écout", PV, [
    " de la musique.",
    " le professeur.",
    " la radio.",
    " attentivement.",
    " les nouvelles.",
  ]),
  ...verbPool("habit", PV, [
    " à Genève.",
    " en Suisse.",
    " dans un appartement.",
    " près de l'école.",
    " en ville.",
  ]),
];

// Exercise 2 — full conjugated form (Je ___ (parler) français.)
function verbPool2(infinitive: string, stem: string, pronouns: P[], tails: string[]) {
  const items: { sentence: string; hint: string; answer: string }[] = [];
  for (const tail of tails) {
    for (const p of pronouns) {
      const sep = p.display.endsWith("'") ? "" : " ";
      items.push({
        sentence: `${p.display}${sep}___ (${infinitive})${tail}`,
        hint: HINT,
        answer: stem + p.ending,
      });
    }
  }
  return items;
}

// Exercise 3 — singular → plural transformation (Tu parles … → Vous ___ …)
type Pair = { singDisplay: string; singEnding: string; plurDisplay: string; plurEnding: string };

const PAIRS_C: Pair[] = [
  { singDisplay: "Je",   singEnding: "e",  plurDisplay: "Nous",  plurEnding: "ons" },
  { singDisplay: "Tu",   singEnding: "es", plurDisplay: "Vous",  plurEnding: "ez"  },
  { singDisplay: "Il",   singEnding: "e",  plurDisplay: "Ils",   plurEnding: "ent" },
  { singDisplay: "Elle", singEnding: "e",  plurDisplay: "Elles", plurEnding: "ent" },
];

const PAIRS_V: Pair[] = [
  { singDisplay: "J'",   singEnding: "e",  plurDisplay: "Nous",  plurEnding: "ons" },
  { singDisplay: "Tu",   singEnding: "es", plurDisplay: "Vous",  plurEnding: "ez"  },
  { singDisplay: "Il",   singEnding: "e",  plurDisplay: "Ils",   plurEnding: "ent" },
  { singDisplay: "Elle", singEnding: "e",  plurDisplay: "Elles", plurEnding: "ent" },
];

function verbPool3(stem: string, pairs: Pair[], tails: string[]) {
  const items: { sentence: string; hint: string; answer: string }[] = [];
  for (const tail of tails) {
    for (const pair of pairs) {
      const singSep = pair.singDisplay.endsWith("'") ? "" : " ";
      const singVerb = stem + pair.singEnding;
      items.push({
        sentence: `${pair.singDisplay}${singSep}${singVerb}${tail} → ${pair.plurDisplay} ___${tail}`,
        hint: HINT,
        answer: stem + pair.plurEnding,
      });
    }
  }
  return items;
}

const EX3_POOL = [
  ...verbPool3("parl", PAIRS_C, [
    " le français.",
    " trop vite.",
    " souvent en famille.",
    " à voix basse.",
    " de la météo.",
    " avec les voisins.",
    " bien l'anglais.",
    " toute la journée.",
    " à votre prof.",
    " doucement.",
  ]),
  ...verbPool3("aim", PAIRS_V, [
    " la musique.",
    " le chocolat.",
    " danser.",
    " lire.",
    " la nature.",
    " les films.",
    " les animaux.",
    " voyager.",
    " cuisiner.",
    " le sport.",
  ]),
  ...verbPool3("écout", PAIRS_V, [
    " la radio.",
    " attentivement.",
    " les conseils.",
    " une chanson.",
    " les oiseaux.",
    " les podcasts.",
    " en classe.",
    " la professeure.",
    " les nouvelles.",
    " de la musique.",
  ]),
  ...verbPool3("habit", PAIRS_V, [
    " en ville.",
    " au centre-ville.",
    " avec mes parents.",
    " loin d'ici.",
    " dans un appartement.",
    " dans une grande maison.",
    " près de l'école.",
    " en Suisse.",
    " à Lyon.",
    " au bord de la mer.",
  ]),
];

const EX2_POOL = [
  ...verbPool2("parler", "parl", PC, [
    " français.",
    " avec le professeur.",
    " bien anglais.",
    " tous les jours.",
    " en classe.",
  ]),
  ...verbPool2("aimer", "aim", PV, [
    " la France.",
    " les chats.",
    " le sport.",
    " cuisiner.",
    " les films.",
  ]),
  ...verbPool2("écouter", "écout", PV, [
    " des podcasts.",
    " les oiseaux.",
    " la professeure.",
    " bien en classe.",
    " une chanson.",
  ]),
  ...verbPool2("habiter", "habit", PV, [
    " au centre-ville.",
    " avec ma famille.",
    " à Paris.",
    " dans une maison.",
    " loin d'ici.",
  ]),
];

export const A1_CONJ_L07: ConjLesson = {
  slug: "a1-conj-l07",
  code: "R1.5",
  level: "A1",
  title: "Les verbes en -er au présent",
  theory: [
    {
      type: "plain_list",
      items: [
        "Les verbes en {a}-er{/a} sont les verbes les plus fréquents en français. Ils font partie du 1er groupe.",
      ],
      transItems: {
        en: ["-er verbs are the most frequent verbs in French. They belong to the 1st group."],
        ar: ["أفعال {a}-er{/a} هي الأكثر شيوعاً في الفرنسية. تنتمي إلى المجموعة الأولى."],
        fa: ["افعال {a}-er{/a} رایج‌ترین افعال در زبان فرانسه هستند. آن‌ها به گروه اول تعلق دارند."],
        ti: ["ግሲያት {a}-er{/a} ዝበዝሑ ጊዜ ዝጥቀሱ ፈረንሳዊ ግሲያት እዮም. ናይ ቀዳማይ ጉጅለ እዮም."],
        uk: ["Дієслова на {a}-er{/a} є найпоширенішими у французькій мові. Вони належать до 1-ї групи."],
      },
    },
    { type: "heading", text: "Comment former le verbe ?", trans: { en: "How to form the verb?", ar: "كيف تصرّف الفعل؟", fa: "چگونه فعل را صرف کنیم؟", ti: "ግሲ ብኸመይ ትሰርሕ?", uk: "Як утворити дієслово?" } },
    {
      type: "plain_list",
      items: [
        "On prend le verbe et on enlève {a}-er{/a}.",
      ],
      transItems: {
        en: ["Take the verb and remove {a}-er{/a}."],
        ar: ["خذ الفعل وأزل {a}-er{/a}."],
        fa: ["فعل را بگیرید و {a}-er{/a} را حذف کنید."],
        ti: ["ንግሲ ውሰድ ንሱ {a}-er{/a} ኣርሕቕ."],
        uk: ["Беремо дієслово і прибираємо {a}-er{/a}."],
      },
    },
    {
      type: "verb_toggle",
      verbs: [
        {
          infinitive: "parler",
          radical: "parl",
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
          infinitive: "aimer",
          radical: "aim",
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
          infinitive: "écouter",
          radical: "écout",
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
          infinitive: "habiter",
          radical: "habit",
          rows: [
            { pronoun: "je", ending: "e" },
            { pronoun: "tu", ending: "es" },
            { pronoun: "il / elle / on", ending: "e" },
            { pronoun: "nous", ending: "ons" },
            { pronoun: "vous", ending: "ez" },
            { pronoun: "ils / elles", ending: "ent" },
          ],
        },
      ],
    },
    {
      type: "highlight",
      label: "Attention",
      transLabel: { en: "Note", ar: "ملاحظة", fa: "توجه", ti: "ኣስተውዕል", uk: "Увага" },
      items: [
        "Quand le verbe commence par une {a}voyelle{/a} ou un {a}h{/a}, {a}je{/a} devient {a}j'{/a}.",
        "j{s}e{/s} aime → j'aime",
        "j{s}e{/s} écoute → j'écoute",
        "j{s}e{/s} habite → j'habite",
      ],
      transItems: {
        en: ["When the verb begins with a {a}vowel{/a} or {a}h{/a}, {a}je{/a} becomes {a}j'{/a}.", "j{s}e{/s} aime → j'aime", "j{s}e{/s} écoute → j'écoute", "j{s}e{/s} habite → j'habite"],
        ar: ["عندما يبدأ الفعل بـ{a}حرف علة{/a} أو {a}h{/a}، يصبح {a}je{/a} {a}j'{/a}.", "j{s}e{/s} aime → j'aime", "j{s}e{/s} écoute → j'écoute", "j{s}e{/s} habite → j'habite"],
        fa: ["وقتی فعل با {a}حرف صدادار{/a} یا {a}h{/a} شروع می‌شود، {a}je{/a} به {a}j'{/a} تبدیل می‌شود.", "j{s}e{/s} aime → j'aime", "j{s}e{/s} écoute → j'écoute", "j{s}e{/s} habite → j'habite"],
        ti: ["ግሲ ብ{a}ሞዓዝ{/a} ወይ {a}h{/a} ምስ ዝጅምር፣ {a}je{/a} {a}j'{/a} ይኸውን.", "j{s}e{/s} aime → j'aime", "j{s}e{/s} écoute → j'écoute", "j{s}e{/s} habite → j'habite"],
        uk: ["Коли дієслово починається з {a}голосної{/a} або {a}h{/a}, {a}je{/a} стає {a}j'{/a}.", "j{s}e{/s} aime → j'aime", "j{s}e{/s} écoute → j'écoute", "j{s}e{/s} habite → j'habite"],
      },
      noBulletItems: [0, 1, 2, 3],
      inlineArrows: true,
    },
  ],
  exercises: [
    {
      type: "fill",
      title: "Exercice 1",
      instruction: "Complétez la terminaison des verbes.",
      items: [],
      pool: EX1_POOL,
      poolSize: 8,
    },
    {
      type: "fill",
      title: "Exercice 2",
      instruction: "Conjuguez les verbes entre parenthèses.",
      items: [],
      pool: EX2_POOL,
      poolSize: 8,
    },
    {
      type: "fill",
      title: "Exercice 3",
      instruction: "Mettez les phrases au pluriel.",
      transInstruction: { en: "Put the sentences in the plural.", ar: "???? ????? ??? ?????.", fa: "??????? ?? ?? ??? ????? ????.", ti: "??? ???? ?? ??? ??? ?????", uk: "???????? ??????? ? ???????." },
      items: [],
      pool: EX3_POOL,
      poolSize: 8,
    },
  ],
  evalExercises: [
    {
      type: "fill",
      title: "Évaluation — Question 1",
      instruction: "Conjuguez le verbe entre parenthèses.",
      items: [],
      poolSize: 6,
      pool: [
        { sentence: "Je (parler) → Je ___.",          hint: "-er → je",       answer: "parle"      },
        { sentence: "Tu (manger) → Tu ___.",          hint: "-er → tu",       answer: "manges"     },
        { sentence: "Il (arriver) → Il ___.",         hint: "-er → il",       answer: "arrive"     },
        { sentence: "Nous (travailler) → Nous ___.", hint: "-er → nous",     answer: "travaillons" },
        { sentence: "Vous (chercher) → Vous ___.",    hint: "-er → vous",     answer: "cherchez"   },
        { sentence: "Ils (habiter) → Ils ___.",       hint: "-er → ils",      answer: "habitent"   },
        { sentence: "Elle (écouter) → Elle ___.",     hint: "-er → elle",     answer: "écoute"     },
        { sentence: "Nous (aimer) → Nous ___.",       hint: "-er → nous",     answer: "aimons"     },
        { sentence: "Tu (regarder) → Tu ___.",        hint: "-er → tu",       answer: "regardes"   },
        { sentence: "Elles (chanter) → Elles ___.",   hint: "-er → elles",    answer: "chantent"   },
        { sentence: "On (jouer) → On ___.",           hint: "-er → on",       answer: "joue"       },
        { sentence: "Vous (étudier) → Vous ___.",     hint: "-er → vous",     answer: "étudiez"    },
      ],
    },
    {
      type: "qcm",
      title: "Évaluation — Question 2",
      instruction: "Choisissez la bonne conjugaison du verbe en -er.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "Elle ___ à Paris. (habiter)",    choices: ["habite",      "habites",     "habitons",    "habitez"],      correctIdx: 0 },
        { sentence: "Vous ___ le français. (parler)", choices: ["parlez",      "parlons",     "parle",       "parlent"],      correctIdx: 0 },
        { sentence: "Ils ___ beaucoup. (travailler)", choices: ["travaillent", "travaille",   "travaillons", "travaillez"],   correctIdx: 0 },
        { sentence: "Nous ___ du sport. (aimer)",     choices: ["aimons",      "aiment",      "aimez",       "aimes"],        correctIdx: 0 },
        { sentence: "Tu ___ la radio ? (écouter)",    choices: ["écoutes",     "écoute",      "écoutez",     "écoutent"],     correctIdx: 0 },
        { sentence: "Je ___ un livre. (chercher)",    choices: ["cherche",     "cherches",    "cherchons",   "cherchez"],     correctIdx: 0 },
        { sentence: "Il ___ du sport. (pratiquer)",   choices: ["pratique",    "pratiques",   "pratiquons",  "pratiquez"],    correctIdx: 0 },
        { sentence: "Elles ___ à 8h. (arriver)",      choices: ["arrivent",    "arrivez",     "arrivons",    "arrive"],       correctIdx: 0 },
      ],
    },
  ],
};
