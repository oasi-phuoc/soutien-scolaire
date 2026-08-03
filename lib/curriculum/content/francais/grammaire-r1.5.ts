import type { ConjLesson } from "../../conjugation-data";

/** Ancien fichier conjugaison — théorie/exercices fusionnés dans G1.5 / G1.8. */
export const A1_CONJ_L07: ConjLesson = {
  slug: "a1-conj-l07",
  code: "R1.5",
  level: "A1",
  title: "Les verbes en -er au présent",
  // Théorie intégrée dans G1.5 (général) et G1.8 (particularités) — ne pas re-fusionner ici.
  theory: [],
  exercises: [],
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
