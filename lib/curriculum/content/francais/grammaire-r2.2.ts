import type { ConjLesson } from "../../conjugation-data";

/** Ancien fichier conjugaison — théorie/exercices fusionnés dans G1.6. */
export const A1_CONJ_L09: ConjLesson = {
  slug: "a1-conj-l09",
  code: "R2.2",
  level: "A1",
  title: "Les verbes pronominaux",
  // Théorie intégrée dans G1.6 — ne pas re-fusionner ici.
  theory: [],
  exercises: [],

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
