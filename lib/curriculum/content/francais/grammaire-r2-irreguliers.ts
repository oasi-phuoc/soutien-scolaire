import type { ConjLesson } from "../../conjugation-data";

export const A2_CONJ_IRREGULIERS: ConjLesson = {
  slug: "a2-conj-irreguliers",
  code: "R2.4",
  level: "A2",
  title: "Verbes irréguliers",
  // Théorie répartie dans G1.9/G1.10 — ne pas re-fusionner ici.
  theory: [],
  exercises: [],

  evalExercises: [
    {
      type: "fill",
      title: "Évaluation — Question 1",
      instruction: "Conjuguez le verbe irrégulier.",
      transInstruction: { en: "Conjugate the irregular verb.", ar: "صرّف الفعل الشاذ.", fa: "فعل بی‌قاعده را صرف کنید.", ti: "ነቲ ዘይስሩዕ ግሲ ኣጻርይ.", uk: "Відмінюйте неправильне дієслово." },
      items: [],
      poolSize: 6,
      pool: [
        { sentence: "Je ___ (faire) le ménage.",          hint: "fais",        answer: "fais"        },
        { sentence: "Tu ___ (prendre) le train.",          hint: "prends",      answer: "prends"      },
        { sentence: "Il ___ (savoir) conduire.",           hint: "sait",        answer: "sait"        },
        { sentence: "Nous ___ (connaître) ce quartier.",   hint: "connaissons", answer: "connaissons" },
        { sentence: "Vous ___ (faire) du sport ?",         hint: "faites",      answer: "faites"      },
        { sentence: "Ils ___ (prendre) le bus.",           hint: "prennent",    answer: "prennent"    },
        { sentence: "Elle ___ (boire) du lait.",           hint: "boit",        answer: "boit"        },
        { sentence: "Je ___ (croire) qu'il est gentil.",   hint: "crois",       answer: "crois"       },
        { sentence: "Tu ___ (connaître) ce médecin ?",     hint: "connais",     answer: "connais"     },
        { sentence: "Nous ___ (boire) de l'eau.",          hint: "buvons",      answer: "buvons"      },
      ],
    },
    {
      type: "qcm",
      title: "Évaluation — Question 2",
      instruction: "Choisissez la bonne forme du verbe irrégulier.",
      transInstruction: { en: "Choose the correct form of the irregular verb.", ar: "اختر الصيغة الصحيحة للفعل الشاذ.", fa: "صورت درست فعل بی‌قاعده را انتخاب کنید.", ti: "ቅኑዕ ቅርጺ ናይቲ ዘይስሩዕ ግሲ ምረጽ.", uk: "Виберіть правильну форму неправильного дієслова." },
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "Je ___ la cuisine.",                  choices: ["fais", "fait", "font"], correctIdx: 0 },
        { sentence: "Elle ___ le bus.",                    choices: ["prend", "prends", "prenons"], correctIdx: 0 },
        { sentence: "Ils ___ du sport.",                   choices: ["font", "fait", "fais"], correctIdx: 0 },
        { sentence: "Tu ___ ce médecin ?",                 choices: ["connais", "connaît", "connaissons"], correctIdx: 0 },
        { sentence: "Nous ___ parler français.",           choices: ["savons", "sais", "sait"], correctIdx: 0 },
        { sentence: "Vous ___ du café ?",                  choices: ["buvez", "boit", "boivent"], correctIdx: 0 },
        { sentence: "Elle ___ qu'il a raison.",            choices: ["croit", "crois", "croyons"], correctIdx: 0 },
        { sentence: "Je ___ le tramway.",                  choices: ["prends", "prend", "prenons"], correctIdx: 0 },
      ],
    },
  ],
};
