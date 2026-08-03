import type { ConjLesson } from "../../conjugation-data";

export const A2_CONJ_L02: ConjLesson = {
  slug: "a2-conj-l02",
  code: "R2.5",
  level: "A2",
  title: "Les verbes en -ir (2e et 3e groupes)",
  // Théorie intégrée dans G1.9 — ne pas re-fusionner ici.
  theory: [],
  exercises: [],

  evalExercises: [
    {
      type: "fill",
      title: "Évaluation — Question 1",
      instruction: "Conjuguez le verbe en -ir.",
      transInstruction: { en: "Conjugate the -ir verb.", ar: "صرّف الفعل المنتهي بـ -ir.", fa: "فعل -ir را صرف کنید.", ti: "ነቲ -ir ናይ ዘለዎ ግሲ ኣጻርይ.", uk: "Відмінюйте дієслово на -ir." },
      items: [],
      poolSize: 6,
      pool: [
        { sentence: "Je ___ (finir) mes devoirs.",           hint: "finis",       answer: "finis"       },
        { sentence: "Elle ___ (choisir) sa formation.",     hint: "choisit",     answer: "choisit"     },
        { sentence: "Nous ___ (réussir) l'examen.",        hint: "réussissons", answer: "réussissons" },
        { sentence: "Il ___ (partir) à sept heures.",       hint: "part",        answer: "part"        },
        { sentence: "Ils ___ (venir) de Turquie.",          hint: "viennent",    answer: "viennent"    },
        { sentence: "Tu ___ (dormir) bien en Suisse ?",     hint: "dors",        answer: "dors"        },
        { sentence: "Vous ___ (finir) la leçon ?",         hint: "finissez",    answer: "finissez"    },
        { sentence: "Elle ___ (sortir) le soir.",           hint: "sort",        answer: "sort"        },
        { sentence: "J'___ (ouvrir) la porte.",             hint: "ouvre",       answer: "ouvre"       },
        { sentence: "Nous ___ (partir) en vacances.",       hint: "partons",     answer: "partons"     },
      ],
    },
    {
      type: "qcm",
      title: "Évaluation — Question 2",
      instruction: "Choisissez la bonne forme du verbe en -ir.",
      transInstruction: { en: "Choose the correct form of the -ir verb.", ar: "اختر الصيغة الصحيحة للفعل المنتهي بـ -ir.", fa: "صورت درست فعل -ir را انتخاب کنید.", ti: "ቅኑዕ ቅርጺ ናይቲ -ir ናይ ዘለዎ ግሲ ምረጽ.", uk: "Виберіть правильну форму дієслова на -ir." },
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "Je ___ mon travail.",                  choices: ["finis",     "finit",      "finissons",  "finissent"  ], correctIdx: 0 },
        { sentence: "Ils ___ demain.",                      choices: ["viennent",  "venons",     "vient",      "viens"      ], correctIdx: 0 },
        { sentence: "Elle ___ une école.",                  choices: ["choisit",   "choisis",    "choisissons","choisissent"], correctIdx: 0 },
        { sentence: "Nous ___ à midi.",                     choices: ["partons",   "partez",     "partent",    "part"       ], correctIdx: 0 },
        { sentence: "Tu ___ tard ?",                        choices: ["dors",      "dort",       "dormons",    "dorment"    ], correctIdx: 0 },
        { sentence: "Vous ___ aux règles ?",                choices: ["obéissez",  "obéis",      "obéit",      "obéissent"  ], correctIdx: 0 },
        { sentence: "Il ___ ce soir.",                      choices: ["sort",      "sors",       "sortons",    "sortent"    ], correctIdx: 0 },
        { sentence: "J'___ la fenêtre.",                    choices: ["ouvre",     "ouvres",     "ouvrons",    "ouvrent"    ], correctIdx: 0 },
      ],
    },
  ],
};
