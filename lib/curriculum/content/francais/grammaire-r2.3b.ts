import type { ConjLesson } from "../../conjugation-data";

/** Ancien fichier conjugaison — théorie/exercices fusionnés dans G1.7 / G1.9 / G1.10. */
export const A1_CONJ_L15: ConjLesson = {
  slug: "a1-conj-l15",
  code: "R2.3",
  level: "A1",
  title: "Les verbes modaux",
  // Théorie intégrée dans G1.7 (modaux) et G1.9/G1.10 (irréguliers) — ne pas re-fusionner ici.
  theory: [],
  exercises: [],

  evalExercises: [
    {
      type: "qcm",
      title: "Évaluation — Question 1",
      instruction: "Choisissez le bon verbe modal.",
      transInstruction: { en: "Choose the correct modal verb.", ar: "اختر الفعل المساعد الصحيح.", fa: "فعل کمکی وجهی درست را انتخاب کنید.", ti: "ቅኑዕ ሞዳላዊ ግሲ ምረጽ.", uk: "Виберіть правильне модальне дієслово." },
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "Je ___ travailler demain. (obligation)",        choices: ["dois", "peux", "veux"], correctIdx: 0 },
        { sentence: "Elle ___ parler trois langues. (capacité)",     choices: ["peut", "doit", "veut"], correctIdx: 0 },
        { sentence: "Nous ___ aller au cinéma ce soir. (désir)",     choices: ["voulons", "pouvons", "devons"], correctIdx: 0 },
        { sentence: "Tu ___ faire tes devoirs maintenant !",         choices: ["dois", "peux", "veux"],  correctIdx: 0 },
        { sentence: "Ils ___ partir à 8h pour le train.",            choices: ["doivent", "peuvent", "veulent"], correctIdx: 0 },
        { sentence: "Je ___ un café, s'il vous plaît. (désir)",      choices: ["veux", "dois", "peux"],    correctIdx: 0 },
        { sentence: "Vous ___ réserver à l'avance. (obligation)",    choices: ["devez", "pouvez", "voulez"],  correctIdx: 0 },
        { sentence: "Il ___ m'aider ? (capacité + demande polie)",   choices: ["peut", "doit", "veut"], correctIdx: 0 },
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
