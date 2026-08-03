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
  // Théorie intégrée dans G1.5 (général) et G1.8 (particularités) — ne pas re-fusionner ici.
  theory: [],
  exercises: [
    {
      type: "fill",
      title: "Exercice 1",
      instruction: "Complétez la terminaison des verbes.",
      transInstruction: { en: "Complete the verb endings.", ar: "أكمل نهايات الأفعال.", fa: "پایانه‌های فعل را کامل کنید.", ti: "መወዳእታ ግሲታት ምላእ።", uk: "Доповніть закінчення дієслів." },
      items: [],
      pool: EX1_POOL,
      poolSize: 8,
    },
    {
      type: "fill",
      title: "Exercice 2",
      instruction: "Conjuguez les verbes entre parenthèses.",
      transInstruction: { en: "Conjugate the verbs in parentheses.", ar: "صرّف الأفعال الموجودة بين القوسين.", fa: "افعال داخل پرانتز را صرف کنید.", ti: "ኣብ ቅንፍ ዘለዉ ግሲታት ኣጻርይ።", uk: "Відмінюйте дієслова в дужках." },
      items: [],
      pool: EX2_POOL,
      poolSize: 8,
    },
    {
      type: "fill",
      title: "Exercice 3",
      instruction: "Mettez les phrases au pluriel.",
      transInstruction: { en: "Put the sentences in the plural.", ar: "ضع الجمل في صيغة الجمع.", fa: "جمله‌ها را به صورت جمع بنویسید.", ti: "ነቶም ሓረጋት ናብ ብዙሕ ቅርጺ ኣቐምጥ።", uk: "Поставте речення у множину." },
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
      transInstruction: { en: "Conjugate the verb in parentheses.", ar: "صرّف الفعل الموجود بين القوسين.", fa: "فعل داخل پرانتز را صرف کنید.", ti: "ኣብ ቅንፍ ዘሎ ግሲ ኣጻርይ።", uk: "Відмінюйте дієслово в дужках." },
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
      transInstruction: { en: "Choose the correct conjugation of the -er verb.", ar: "اختر التصريف الصحيح للفعل المنتهي بـ -er.", fa: "صرف درست فعل -er را انتخاب کنید.", ti: "ቅኑዕ ናይ -er ግሲ ምጥቃም ምረጽ።", uk: "Оберіть правильне відмінювання дієслова на -er." },
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
