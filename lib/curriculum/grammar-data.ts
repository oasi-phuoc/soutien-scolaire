// Grammar lesson content: types + data for all 28 A1/A2 grammar lessons.
// Types are imported from conjugation-data to avoid duplication.

import type { TheoryBlock, Exercise, VerbToggleVerb } from "./conjugation-data";

export type { TheoryBlock, Exercise };

export type GrammarLesson = {
  slug: string;
  code: string;
  level: "A1" | "A2";
  title: string;
  theory: TheoryBlock[];
  exercises: Exercise[];
};

// ── A1 Lessons ────────────────────────────────────────────────────────────────

const a1GrL01: GrammarLesson = {
  slug: "a1-gr-l01",
  code: "G.1",
  level: "A1",
  title: "Pronoms sujets et le verbe être",
  theory: [
    { type: "heading", text: "Les pronoms sujets" },
    {
      type: "table",
      tables: [
        {
          verb: "être",
          rows: [
            { pronoun: "je", form: "suis" },
            { pronoun: "tu", form: "es" },
            { pronoun: "il / elle", form: "est" },
            { pronoun: "nous", form: "sommes" },
            { pronoun: "vous", form: "êtes" },
            { pronoun: "ils / elles", form: "sont" },
          ],
        },
      ],
    },
    {
      type: "rule",
      text: "J'utilise ÊTRE pour la nationalité, la profession ou un adjectif.",
      examples: [
        { correct: "Je suis française." },
        { correct: "Il est professeur." },
        { correct: "Nous sommes étudiants." },
      ],
    },
    {
      type: "rule",
      text: "TU = informel (amis, famille) ; VOUS = formel ou pluriel.",
      examples: [
        { correct: "Salut ! Tu es française ? (informel)" },
        { correct: "Bonjour Madame, vous êtes française ? (formel)" },
      ],
    },
    {
      type: "note",
      text: "s'appeler : je m'appelle, tu t'appelles, il/elle s'appelle, nous nous appelons, vous vous appelez, ils/elles s'appellent",
    },
  ],
  exercises: [
    {
      type: "qcm",
      title: "Pronoms et être",
      instruction: "Choisissez la forme correcte de ÊTRE.",
      items: [
        { sentence: "Je ___ étudiant.", choices: ["suis", "est", "es", "sommes"], correctIdx: 0 },
        { sentence: "Elle ___ française.", choices: ["est", "suis", "êtes", "sont"], correctIdx: 0 },
        { sentence: "Nous ___ professeurs.", choices: ["sommes", "êtes", "suis", "est"], correctIdx: 0 },
        { sentence: "Ils ___ japonais.", choices: ["sont", "est", "suis", "sommes"], correctIdx: 0 },
      ],
    },
    {
      type: "fill",
      title: "Complétez avec être ou s'appeler",
      instruction: "Conjuguez le verbe entre parenthèses.",
      items: [
        { sentence: "Je ___ (s'appeler) Marco.", hint: "s'appeler", answer: "m'appelle" },
        { sentence: "Tu ___ (être) anglais ?", hint: "être", answer: "es" },
        { sentence: "Elle ___ (s'appeler) Aiko.", hint: "s'appeler", answer: "s'appelle" },
        { sentence: "Nous ___ (être) étudiants.", hint: "être", answer: "sommes" },
        { sentence: "Vous ___ (être) professeur ?", hint: "être", answer: "êtes" },
      ],
    },
  ],
};

// ── G.6 — Les phrases ─────────────────────────────────────────────────────────

const a1GrPhrases: GrammarLesson = {
  slug: "a1-gr-phrases",
  code: "G.6",
  level: "A1",
  title: "Les phrases",
  theory: [
    { type: "heading", text: "La structure de la phrase", trans: { en: "The structure of the sentence", ar: "بنية الجملة", fa: "ساختار جمله", ti: "ቅርጺ ሓሳብ", uk: "Структура речення" } },
    {
      type: "plain_list",
      items: [
        "En français, une phrase suit l'ordre : {su}Sujet{/su} + {ve}Verbe{/ve} + {co}Complément{/co}.",
      ],
      noBulletItems: [0],
      transItems: {
        en: ["In French, a sentence follows the order: {su}Subject{/su} + {ve}Verb{/ve} + {co}Complement{/co}."],
        ar: ["في الفرنسية، تتبع الجملة الترتيب: {su}الفاعل{/su} + {ve}الفعل{/ve} + {co}المتمم{/co}."],
        fa: ["در فرانسه، جمله از ترتیب زیر پیروی می‌کند: {su}فاعل{/su} + {ve}فعل{/ve} + {co}متمم{/co}."],
        ti: ["ብፈረንሳይ፣ ሓሳብ ነዚ ስርዓት ይኸተል: {su}ሓካይ{/su} + {ve}ግሲ{/ve} + {co}መወከስ{/co}."],
        uk: ["У французькій, речення слідує порядку: {su}Підмет{/su} + {ve}Присудок{/ve} + {co}Додаток{/co}."],
      },
    },
    {
      type: "grid",
      headers: ["Sujet (S)", "Verbe (V)", "Complément (C)"],
      equalCols: true,
      rows: [
        ["Paul", "mange", "une pomme."],
        ["Elle", "habite", "à Paris."],
        ["Les enfants", "jouent", "dans le parc."],
        ["Je", "parle", "à Marie."],
      ],
      transHeaders: {
        en: ["Subject (S)", "Verb (V)", "Complement (C)"],
        ar: ["الفاعل (S)", "الفعل (V)", "المتمم (C)"],
        fa: ["فاعل (S)", "فعل (V)", "متمم (C)"],
        ti: ["ሓካይ (S)", "ግሲ (V)", "መወከስ (C)"],
        uk: ["Підмет (S)", "Присудок (V)", "Додаток (C)"],
      },
      transRows: {
        en: [["Paul", "eats", "an apple."], ["She", "lives", "in Paris."], ["The children", "play", "in the park."], ["I", "speak", "to Marie."]],
        ar: [["بول", "يأكل", "تفاحة."], ["هي", "تسكن", "في باريس."], ["الأطفال", "يلعبون", "في الحديقة."], ["أنا", "أتحدث", "مع ماري."]],
        fa: [["پول", "می‌خورد", "یک سیب."], ["او", "زندگی می‌کند", "در پاریس."], ["بچه‌ها", "بازی می‌کنند", "در پارک."], ["من", "صحبت می‌کنم", "با ماری."]],
        ti: [["ጳውሎስ", "ይበልዕ", "ሓደ ጣፍ."], ["ንሳ", "ትቕመጥ", "ኣብ ፓሪስ."], ["ቆልዑ", "ይጻወቱ", "ኣብ ጃርዲን."], ["ኣነ", "ይዛረብ", "ምስ ማሪ."]],
        uk: [["Пол", "їсть", "яблуко."], ["Вона", "живе", "в Парижі."], ["Діти", "грають", "у парку."], ["Я", "розмовляю", "з Марі."]],
      },
    },
    { type: "heading", text: "Le sujet (S)", sub: true, trans: { en: "The subject (S)", ar: "الفاعل (S)", fa: "فاعل (S)", ti: "ሓካይ (S)", uk: "Підмет (S)" } },
    {
      type: "plain_list",
      items: [
        "Le sujet répond à la question : {a}Qui fait l'action ?{/a}",
        "C'est souvent un pronom ({a}je, tu, il, elle…{/a}) ou un nom ({a}Marie, le chat…{/a}).",
        "Le verbe s'accorde toujours avec le sujet.",
      ],
      transItems: {
        en: ["The subject answers the question: {a}Who performs the action?{/a}", "It is often a pronoun ({a}I, you, he, she…{/a}) or a noun ({a}Marie, the cat…{/a}).", "The verb always agrees with the subject."],
        ar: ["الفاعل يجيب على السؤال: {a}من يقوم بالفعل؟{/a}", "غالبًا ضمير ({a}أنا، أنت، هو، هي…{/a}) أو اسم ({a}ماري، القط…{/a}).", "يتوافق الفعل دائمًا مع الفاعل."],
        fa: ["فاعل به سؤال پاسخ می‌دهد: {a}چه کسی عمل را انجام می‌دهد؟{/a}", "اغلب یک ضمیر ({a}من، تو، او…{/a}) یا یک اسم ({a}ماری، گربه…{/a}) است.", "فعل همیشه با فاعل مطابقت دارد."],
        ti: ["ሓካይ ነዚ ሕቶ ይምልስ: {a}መን ስራሕ ይሰርሕ?{/a}", "ብብዝሒ ተዛረብቲ ({a}ኣነ፣ ንስኻ፣ ንሱ/ንሳ…{/a}) ወይ ሽም ({a}ማሪ፣ ድሙ…{/a}) እዩ.", "ግሲ ምስ ሓካይ ኩሉ ጊዜ ይሰማማዕ."],
        uk: ["Підмет відповідає на запитання: {a}Хто виконує дію?{/a}", "Це часто займенник ({a}я, ти, він, вона…{/a}) або іменник ({a}Марі, кіт…{/a}).", "Дієслово завжди узгоджується з підметом."],
      },
    },
    { type: "heading", text: "Le verbe (V)", sub: true, trans: { en: "The verb (V)", ar: "الفعل (V)", fa: "فعل (V)", ti: "ግሲ (V)", uk: "Присудок (V)" } },
    {
      type: "plain_list",
      items: ["Le verbe exprime {a}l'action{/a} ou {a}l'état{/a} du sujet."],
      transItems: {
        en: ["The verb expresses {a}the action{/a} or {a}the state{/a} of the subject."],
        ar: ["الفعل يعبر عن {a}الحدث{/a} أو {a}الحالة{/a} للفاعل."],
        fa: ["فعل {a}عمل{/a} یا {a}حالت{/a} فاعل را بیان می‌کند."],
        ti: ["ግሲ {a}ስራሕ{/a} ወይ {a}ሃለዋት{/a} ናይ ሓካይ ይገልጽ."],
        uk: ["Дієслово виражає {a}дію{/a} або {a}стан{/a} підмета."],
      },
    },
    {
      type: "highlight",
      label: "Exemples d'actions",
      items: ["manger", "partir", "travailler"],
      transLabel: { en: "Examples of actions", ar: "أمثلة على الأفعال", fa: "نمونه‌های عمل", ti: "ኣብነታት ስራሕ", uk: "Приклади дій" },
      transItems: {
        en: ["to eat", "to leave", "to work"],
        ar: ["يأكل", "يغادر", "يعمل"],
        fa: ["خوردن", "رفتن", "کار کردن"],
        ti: ["ምብላዕ", "ምኻድ", "ምስራሕ"],
        uk: ["їсти", "іти", "працювати"],
      },
    },
    {
      type: "highlight",
      label: "Exemples d'états",
      items: ["être", "avoir", "sembler"],
      transLabel: { en: "Examples of states", ar: "أمثلة على الحالات", fa: "نمونه‌های حالت", ti: "ኣብነታት ሃለዋት", uk: "Приклади станів" },
      transItems: {
        en: ["to be", "to have", "to seem"],
        ar: ["يكون", "يملك", "يبدو"],
        fa: ["بودن", "داشتن", "به نظر رسیدن"],
        ti: ["ምዃን", "ምሓዝ", "ምምሳል"],
        uk: ["бути", "мати", "здаватися"],
      },
    },
    { type: "heading", text: "Le complément (C)", sub: true, trans: { en: "The complement (C)", ar: "المتمم (C)", fa: "متمم (C)", ti: "መወከስ (C)", uk: "Додаток (C)" } },
    {
      type: "plain_list",
      items: ["Le complément complète le verbe. Le complément n'est pas toujours obligatoire. Il y a trois types :"],
      noBulletItems: [0],
      transItems: {
        en: ["The complement completes the verb. The complement is not always required. There are three types:"],
        ar: ["المتمم يكمل الفعل. المتمم ليس دائمًا إلزاميًا. هناك ثلاثة أنواع:"],
        fa: ["متمم فعل را تکمیل می‌کند. متمم همیشه اجباری نیست. سه نوع وجود دارد:"],
        ti: ["መወከስ ግሲ ይምልእ. ኩሉ ጊዜ ግዴታ ኣይኮነን. ሰለስተ ዓይነታት ኣለዉ:"],
        uk: ["Додаток доповнює дієслово. Він не завжди обов'язковий. Є три типи:"],
      },
    },
    {
      type: "highlight",
      label: "COD — Complément d'Objet Direct",
      items: [
        "Le complément répond à la question {a}quoi ? / qui ?{/a}",
        "Je mange {a}une pomme{/a}.",
      ],
      noBulletItems: [0],
      transLabel: { en: "COD — Direct Object", ar: "COD — المفعول به المباشر", fa: "COD — مفعول مستقیم", ti: "COD — ቀጥታዊ ተወሳኺ", uk: "COD — Прямий додаток" },
      transItems: {
        en: ["The complement answers the question {a}what? / who?{/a}", "I eat {a}an apple{/a}."],
        ar: ["المتمم يجيب على السؤال {a}ماذا؟ / من؟{/a}", "أنا آكل {a}تفاحة{/a}."],
        fa: ["متمم به سؤال {a}چه؟ / چه کسی؟{/a} پاسخ می‌دهد", "من {a}یک سیب{/a} می‌خورم."],
        ti: ["መወከስ ነዚ ሕቶ ይምልስ {a}ምንታይ? / መን?{/a}", "ኣነ {a}ሓደ ጣፍ{/a} ይበልዕ."],
        uk: ["Додаток відповідає на запитання {a}що? / кого?{/a}", "Я їм {a}яблуко{/a}."],
      },
    },
    {
      type: "highlight",
      label: "COI — Complément d'Objet Indirect",
      items: [
        "Le complément répond à la question {a}à qui ? / à quoi ?{/a}",
        "Je parle {a}à Marie{/a}.",
      ],
      noBulletItems: [0],
      transLabel: { en: "COI — Indirect Object", ar: "COI — المفعول به غير المباشر", fa: "COI — مفعول غیرمستقیم", ti: "COI — ዘይቀጥታዊ ተወሳኺ", uk: "COI — Непрямий додаток" },
      transItems: {
        en: ["The complement answers the question {a}to whom? / to what?{/a}", "I speak {a}to Marie{/a}."],
        ar: ["المتمم يجيب على السؤال {a}لمن؟ / لماذا؟{/a}", "أنا أتحدث {a}مع ماري{/a}."],
        fa: ["متمم به سؤال {a}به چه کسی؟ / به چه؟{/a} پاسخ می‌دهد", "من با {a}ماری{/a} صحبت می‌کنم."],
        ti: ["መወከስ ነዚ ሕቶ ይምልስ {a}ንመን? / ንምንታይ?{/a}", "ምስ {a}ማሪ{/a} ይዛረብ."],
        uk: ["Додаток відповідає на запитання {a}кому? / чому?{/a}", "Я розмовляю {a}з Марі{/a}."],
      },
    },
    {
      type: "highlight",
      label: "CC — Complément Circonstanciel",
      items: [
        "Le complément répond à la question {a}où ? / quand ? / comment ?{/a}",
        "J'habite {a}à Paris{/a}.",
      ],
      noBulletItems: [0],
      transLabel: { en: "CC — Adverbial Complement", ar: "CC — المتمم الظرفي", fa: "CC — متمم قیدی", ti: "CC — ናይ ሁኔታ ተወሳኺ", uk: "CC — Обставинний додаток" },
      transItems: {
        en: ["The complement answers the question {a}where? / when? / how?{/a}", "I live {a}in Paris{/a}."],
        ar: ["المتمم يجيب على السؤال {a}أين؟ / متى؟ / كيف؟{/a}", "أنا أسكن {a}في باريس{/a}."],
        fa: ["متمم به سؤال {a}کجا؟ / کِی؟ / چطور؟{/a} پاسخ می‌دهد", "من در {a}پاریس{/a} زندگی می‌کنم."],
        ti: ["መወከስ ነዚ ሕቶ ይምልስ {a}ኣበይ? / መዓዝ? / ብኸመይ?{/a}", "ኣብ {a}ፓሪስ{/a} ይቕመጥ."],
        uk: ["Додаток відповідає на запитання {a}де? / коли? / як?{/a}", "Я живу {a}у Парижі{/a}."],
      },
    },
  ],
  exercises: [
    {
      type: "classify",
      title: "Exercice 1",
      instruction: "Classez chaque mot souligné dans la bonne colonne.",
      categories: ["Sujet", "Verbe", "Complément"],
      items: [
        { word: "Marie [mange] une salade.", categoryIdx: 1 },
        { word: "[Marie] mange une salade.", categoryIdx: 0 },
        { word: "Marie mange [une salade].", categoryIdx: 2 },
        { word: "[Ils] parlent français.", categoryIdx: 0 },
        { word: "Ils [parlent] français.", categoryIdx: 1 },
        { word: "Ils parlent [français].", categoryIdx: 2 },
        { word: "[Le professeur] explique la leçon.", categoryIdx: 0 },
        { word: "Le professeur [explique] la leçon.", categoryIdx: 1 },
        { word: "Le professeur explique [la leçon].", categoryIdx: 2 },
      ],
    },
    {
      type: "qcm",
      title: "Exercice 2",
      instruction: "Quel est le type du complément en gras ?",
      items: [
        {
          sentence: "Je mange **une pomme**.",
          choices: ["COD", "COI", "CC"],
          correctIdx: 0,
        },
        {
          sentence: "Elle parle **à son ami**.",
          choices: ["COD", "COI", "CC"],
          correctIdx: 1,
        },
        {
          sentence: "Nous habitons **à Lyon**.",
          choices: ["COD", "COI", "CC"],
          correctIdx: 2,
        },
        {
          sentence: "Il regarde **un film**.",
          choices: ["COD", "COI", "CC"],
          correctIdx: 0,
        },
        {
          sentence: "Tu téléphones **à ta mère**.",
          choices: ["COD", "COI", "CC"],
          correctIdx: 1,
        },
        {
          sentence: "Ils arrivent **demain**.",
          choices: ["COD", "COI", "CC"],
          correctIdx: 2,
        },
      ],
    },
    {
      type: "write",
      title: "Exercice 3",
      instruction: "Construisez une phrase correcte avec les éléments proposés.",
      prompts: [
        "les enfants / jouer / dans le jardin",
        "elle / manger / une pizza",
        "nous / parler / à nos amis",
        "le chat / dormir / sur le canapé",
        "je / lire / un livre",
      ],
    },
  ],
};

const a1GrL02: GrammarLesson = {
  slug: "a1-gr-l02",
  code: "G.7",
  level: "A1",
  title: "La négation",
  theory: [
    {
      type: "heading",
      text: "La forme négative",
      trans: { en: "The negative form", ar: "الصيغة المنفية", fa: "شکل منفی", ti: "ቅጺ ምኽሓድ", uk: "Заперечна форма" },
    },
    {
      type: "plain_list",
      items: [
        "La structure de la négation utilise {a}ne{/a} + {a}pas{/a}.",
        "Sujet + {a}ne{/a} + verbe + {a}pas{/a}",
      ],
      transItems: {
        en: ["The negation structure uses {a}ne{/a} + {a}pas{/a}.", "Subject + {a}ne{/a} + verb + {a}pas{/a}"],
        ar: ["بنية النفي تستخدم {a}ne{/a} + {a}pas{/a}.", "الفاعل + {a}ne{/a} + الفعل + {a}pas{/a}"],
        fa: ["ساختار نفی از {a}ne{/a} + {a}pas{/a} استفاده می‌کند.", "فاعل + {a}ne{/a} + فعل + {a}pas{/a}"],
        ti: ["ዝምድና ምኽሓድ {a}ne{/a} + {a}pas{/a} ይጥቀም.", "ሓካይ + {a}ne{/a} + ግሲ + {a}pas{/a}"],
        uk: ["Структура заперечення використовує {a}ne{/a} + {a}pas{/a}.", "Підмет + {a}ne{/a} + дієслово + {a}pas{/a}"],
      },
    },
    {
      type: "heading",
      text: "Négation du verbe ÊTRE",
      sub: true,
      trans: { en: "Negation of ÊTRE", ar: "نفي فعل ÊTRE", fa: "نفی فعل ÊTRE", ti: "ምኽሓድ ግሲ ÊTRE", uk: "Заперечення ÊTRE" },
    },
    {
      type: "grid",
      headers: ["Affirmatif", "Négatif"],
      rows: [
        ["Je suis content(e).", "Je {a}ne{/a} suis {a}pas{/a} content(e)."],
        ["Tu es à Genève.", "Tu {a}n'{/a}es {a}pas{/a} à Genève."],
        ["Il/Elle est médecin.", "Il/Elle {a}n'{/a}est {a}pas{/a} médecin."],
        ["Nous sommes prêts.", "Nous {a}ne{/a} sommes {a}pas{/a} prêts."],
        ["Vous êtes fatigués.", "Vous {a}n'{/a}êtes {a}pas{/a} fatigués."],
        ["Ils/Elles sont là.", "Ils/Elles {a}ne{/a} sont {a}pas{/a} là."],
      ],
      transHeaders: {
        en: ["Affirmative", "Negative"],
        ar: ["الإيجاب", "النفي"],
        fa: ["مثبت", "منفی"],
        ti: ["ኣወንታ", "ምኽሓድ"],
        uk: ["Стверджувальна", "Заперечна"],
      },
      transRows: {
        en: [["I am happy.", "I am not happy."], ["You are in Geneva.", "You are not in Geneva."], ["He/She is a doctor.", "He/She is not a doctor."], ["We are ready.", "We are not ready."], ["You are tired.", "You are not tired."], ["They are there.", "They are not there."]],
        ar: [["أنا سعيد(ة).", "لست سعيداً/سعيدة."], ["أنت في جنيف.", "لست في جنيف."], ["هو/هي طبيب.", "هو/هي ليس طبيباً."], ["نحن مستعدون.", "لسنا مستعدين."], ["أنتم متعبون.", "لستم متعبين."], ["هم/هن هناك.", "هم/هن ليسوا هناك."]],
        fa: [["من خوشحالم.", "من خوشحال نیستم."], ["تو در ژنو هستی.", "تو در ژنو نیستی."], ["او دکتر است.", "او دکتر نیست."], ["ما آماده‌ایم.", "ما آماده نیستیم."], ["شما خسته‌اید.", "شما خسته نیستید."], ["آن‌ها آنجا هستند.", "آن‌ها آنجا نیستند."]],
        ti: [["ሕጉስ/ሕጉስቲ እየ.", "ሕጉስ/ሕጉስቲ ኣይኮንኩን."], ["ኣብ ጀኔቫ ኢኻ.", "ኣብ ጀኔቫ ኣይኮንካን."], ["ሓኪም እዩ/ኣያ.", "ሓኪም ኣይኮነን."], ["ቅሩባት ኢና.", "ቅሩባት ኣይኮናን."], ["ሕምሙቓት ኢኹም.", "ሕምሙቓት ኣይኮናን."], ["ኣለዉ.", "ኣየለዉን."]],
        uk: [["Я щасливий/щаслива.", "Я не щасливий/щаслива."], ["Ти у Женеві.", "Ти не у Женеві."], ["Він/Вона лікар.", "Він/Вона не лікар."], ["Ми готові.", "Ми не готові."], ["Ви втомлені.", "Ви не втомлені."], ["Вони там.", "Вони не там."]],
      },
    },
    {
      type: "heading",
      text: "Négation du verbe AVOIR",
      sub: true,
      trans: { en: "Negation of AVOIR", ar: "نفي فعل AVOIR", fa: "نفی فعل AVOIR", ti: "ምኽሓድ ግሲ AVOIR", uk: "Заперечення AVOIR" },
    },
    {
      type: "grid",
      headers: ["Affirmatif", "Négatif"],
      rows: [
        ["J'ai faim.", "Je {a}n'{/a}ai {a}pas{/a} faim."],
        ["Tu as un vélo.", "Tu {a}n'{/a}as {a}pas{/a} de vélo."],
        ["Il/Elle a 25 ans.", "Il/Elle {a}n'{/a}a {a}pas{/a} d'enfant."],
        ["Nous avons soif.", "Nous {a}n'{/a}avons {a}pas{/a} soif."],
        ["Vous avez raison.", "Vous {a}n'{/a}avez {a}pas{/a} raison."],
        ["Ils/Elles ont peur.", "Ils/Elles {a}n'{/a}ont {a}pas{/a} peur."],
      ],
      transHeaders: {
        en: ["Affirmative", "Negative"],
        ar: ["الإيجاب", "النفي"],
        fa: ["مثبت", "منفی"],
        ti: ["ኣወንታ", "ምኽሓድ"],
        uk: ["Стверджувальна", "Заперечна"],
      },
      transRows: {
        en: [["I am hungry.", "I am not hungry."], ["You have a bike.", "You don't have a bike."], ["He/She is 25.", "He/She doesn't have a child."], ["We are thirsty.", "We are not thirsty."], ["You are right.", "You are not right."], ["They are afraid.", "They are not afraid."]],
        ar: [["أنا جائع(ة).", "لست جائعاً."], ["عندك دراجة.", "ليس عندك دراجة."], ["عمره/عمرها 25 سنة.", "ليس لديه/لديها طفل."], ["نحن عطشانون.", "لسنا عطشانين."], ["أنتم على حق.", "لستم على حق."], ["هم/هن خائفون.", "هم/هن ليسوا خائفين."]],
        fa: [["من گرسنه‌ام.", "من گرسنه نیستم."], ["تو دوچرخه داری.", "تو دوچرخه نداری."], ["او ۲۵ سال دارد.", "او بچه ندارد."], ["ما تشنه‌ایم.", "ما تشنه نیستیم."], ["شما درست می‌گویید.", "شما درست نمی‌گویید."], ["آن‌ها ترسیده‌اند.", "آن‌ها نمی‌ترسند."]],
        ti: [["ጠሚየ.", "ጠሚየ ኣይኮነን."], ["ብሽክለታ ኣሎካ.", "ብሽክለታ የብልካን."], ["25 ዓመት ኣሎዎ/ኣሎዋ.", "ቆልዓ የብሉን."], ["ጸሚና ኣሎ.", "ጸሚና ኣይኮነን."], ["ልክዕ ኢኹም.", "ልክዕ ኣይኮናን."], ["ፈሪሖም ኣለዉ.", "ፈሪሖም ኣይኮነን."]],
        uk: [["Я голодний/голодна.", "Я не голодний/голодна."], ["У тебе є велосипед.", "У тебе немає велосипеда."], ["Йому/їй 25 років.", "У нього/неї немає дитини."], ["Ми хочемо пити.", "Ми не хочемо пити."], ["Ви праві.", "Ви не праві."], ["Вони бояться.", "Вони не бояться."]],
      },
    },
    { type: "heading", text: "La négation des verbes en -er", sub: true, trans: { en: "Negation of -er verbs", ar: "نفي أفعال -er", fa: "نفی افعال -er", ti: "ምኽሓድ ግሲያት -er", uk: "Заперечення дієслів на -er" } },
    {
      type: "plain_list",
      items: ["Pour nier, on encadre le verbe avec {a}ne{/a} … {a}pas{/a}."],
      transItems: {
        en: ["To negate, wrap the verb with {a}ne{/a} … {a}pas{/a}."],
        ar: ["للنفي، ضع الفعل بين {a}ne{/a} … {a}pas{/a}."],
        fa: ["برای نفی، فعل را بین {a}ne{/a} … {a}pas{/a} قرار دهید."],
        ti: ["ንምኽሓድ ግሲ ብ{a}ne{/a} … {a}pas{/a} ወሰን."],
        uk: ["Для заперечення дієслово обрамляється {a}ne{/a} … {a}pas{/a}."],
      },
    },
    {
      type: "verb_toggle",
      negation: true,
      verbs: [
        { infinitive: "parler", radical: "parl", rows: [{ pronoun: "je", ending: "e" }, { pronoun: "tu", ending: "es" }, { pronoun: "il / elle / on", ending: "e" }, { pronoun: "nous", ending: "ons" }, { pronoun: "vous", ending: "ez" }, { pronoun: "ils / elles", ending: "ent" }] },
        { infinitive: "aimer", radical: "aim", rows: [{ pronoun: "je", ending: "e" }, { pronoun: "tu", ending: "es" }, { pronoun: "il / elle / on", ending: "e" }, { pronoun: "nous", ending: "ons" }, { pronoun: "vous", ending: "ez" }, { pronoun: "ils / elles", ending: "ent" }] },
        { infinitive: "écouter", radical: "écout", rows: [{ pronoun: "je", ending: "e" }, { pronoun: "tu", ending: "es" }, { pronoun: "il / elle / on", ending: "e" }, { pronoun: "nous", ending: "ons" }, { pronoun: "vous", ending: "ez" }, { pronoun: "ils / elles", ending: "ent" }] },
        { infinitive: "habiter", radical: "habit", rows: [{ pronoun: "je", ending: "e" }, { pronoun: "tu", ending: "es" }, { pronoun: "il / elle / on", ending: "e" }, { pronoun: "nous", ending: "ons" }, { pronoun: "vous", ending: "ez" }, { pronoun: "ils / elles", ending: "ent" }] },
      ] as VerbToggleVerb[],
    },
    {
      type: "highlight",
      label: "Attention",
      transLabel: { en: "Note", ar: "ملاحظة", fa: "توجه", ti: "ኣስተውዕል", uk: "Увага" },
      inlineArrows: true,
      noBulletItems: [0],
      items: [
        "Quand le verbe commence par une voyelle ou un h, {a}ne{/a} devient {a}n'{/a}.",
        "il n{s}e{/s} est pas là → il n'est pas là",
        "je n{s}e{/s} ai pas 5 ans → je n'ai pas 5 ans",
      ],
      transItems: {
        en: ["When the verb begins with a vowel or h, {a}ne{/a} becomes {a}n'{/a}.", "il n{s}e{/s} est pas là → il n'est pas là", "je n{s}e{/s} ai pas 5 ans → je n'ai pas 5 ans"],
        ar: ["عندما يبدأ الفعل بحرف علة أو h، يصبح {a}ne{/a} {a}n'{/a}.", "il n{s}e{/s} est pas là → il n'est pas là", "je n{s}e{/s} ai pas 5 ans → je n'ai pas 5 ans"],
        fa: ["وقتی فعل با یک حرف صدادار یا h شروع می‌شود، {a}ne{/a} به {a}n'{/a} تبدیل می‌شود.", "il n{s}e{/s} est pas là → il n'est pas là", "je n{s}e{/s} ai pas 5 ans → je n'ai pas 5 ans"],
        ti: ["ግሲ ብሞዓዝ ወይ h ምስ ዝጅምር፣ {a}ne{/a} {a}n'{/a} ይኸውን.", "il n{s}e{/s} est pas là → il n'est pas là", "je n{s}e{/s} ai pas 5 ans → je n'ai pas 5 ans"],
        uk: ["Коли дієслово починається з голосної або h, {a}ne{/a} стає {a}n'{/a}.", "il n{s}e{/s} est pas là → il n'est pas là", "je n{s}e{/s} ai pas 5 ans → je n'ai pas 5 ans"],
      },
    },
  ],
  exercises: [],
};

const a1GrL03: GrammarLesson = {
  slug: "a1-gr-l03",
  code: "G.4",
  level: "A1",
  title: "Le genre des noms et des adjectifs",
  theory: [
    { type: "heading", text: "Le genre des noms", trans: { en: "Gender of nouns", ar: "جنس الأسماء", fa: "جنسیت اسم‌ها", ti: "ጾታ ሳሙ ናይ ስም", uk: "Рід іменників" } },
    {
      type: "plain_list",
      items: ["En français, les noms ont un genre. Un nom peut être :", "masculin", "féminin"],
      transItems: {
        en: ["In French, nouns have a gender. A noun can be:", "masculine", "feminine"],
        ar: ["في الفرنسية، للأسماء جنس. يمكن أن يكون الاسم:", "مذكراً", "مؤنثاً"],
        fa: ["در فرانسه، اسم‌ها جنسیت دارند. یک اسم می‌تواند باشد:", "مذکر", "مؤنث"],
        ti: ["ኣብ ፈረንሳይኛ ስምታት ጾታ ኣሎዎ. ስም ክኸውን ይኽእል:", "ተባዕታይ", "ኣንስታይ"],
        uk: ["У французькій мові іменники мають рід. Іменник може бути:", "чоловічого роду", "жіночого роду"],
      },
    },
    { type: "heading", text: "Comment reconnaître le genre ?", sub: true, trans: { en: "How to recognise the gender?", ar: "كيف تتعرف على الجنس؟", fa: "چگونه جنسیت را تشخیص دهیم؟", ti: "ጾታ ብኸመይ ትፈልጥ?", uk: "Як розпізнати рід?" } },
    {
      type: "plain_list",
      items: ["Il n'y a pas toujours une règle. Il faut souvent apprendre le nom avec son article."],
      transItems: {
        en: ["There is not always a rule. You often need to learn the noun with its article."],
        ar: ["ليس هناك دائماً قاعدة. يجب في الغالب تعلم الاسم مع أداة التعريف."],
        fa: ["همیشه یک قانون وجود ندارد. اغلب باید اسم را با حرف تعریفش یاد گرفت."],
        ti: ["ኩሉ ሳዕ ሕጊ የለን. ስም ምስ ዓንቀጹ ምስ ምቕሳን ዝበለጸ እዩ."],
        uk: ["Правила не завжди існують. Часто потрібно вчити іменник разом з його артиклем."],
      },
    },
    {
      type: "highlight",
      label: "Souvent masculins",
      transLabel: { en: "Often masculine", ar: "غالباً مذكر", fa: "اغلب مذکر", ti: "ብዙሕ ጊዜ ተባዕታይ", uk: "Часто чоловічого роду" },
      items: [
        "{a}-age{/a} → le vill{a}age{/a}",
        "{a}-ment{/a} → le docu{a}ment{/a}",
        "{a}-eau{/a} → le bat{a}eau{/a}",
      ],
      transItems: {
        en: ["{a}-age{/a} → le vill{a}age{/a} (village)", "{a}-ment{/a} → le docu{a}ment{/a} (document)", "{a}-eau{/a} → le bat{a}eau{/a} (boat)"],
        ar: ["{a}-age{/a} → le vill{a}age{/a} (قرية)", "{a}-ment{/a} → le docu{a}ment{/a} (وثيقة)", "{a}-eau{/a} → le bat{a}eau{/a} (قارب)"],
        fa: ["{a}-age{/a} → le vill{a}age{/a} (روستا)", "{a}-ment{/a} → le docu{a}ment{/a} (سند)", "{a}-eau{/a} → le bat{a}eau{/a} (قایق)"],
        ti: ["{a}-age{/a} → le vill{a}age{/a} (ዓዲ)", "{a}-ment{/a} → le docu{a}ment{/a} (ሰነድ)", "{a}-eau{/a} → le bat{a}eau{/a} (ዓሳ ዘይሳቅ)"],
        uk: ["{a}-age{/a} → le vill{a}age{/a} (село)", "{a}-ment{/a} → le docu{a}ment{/a} (документ)", "{a}-eau{/a} → le bat{a}eau{/a} (човен)"],
      },
      inlineArrows: true,
    },
    {
      type: "highlight",
      label: "Souvent féminins",
      transLabel: { en: "Often feminine", ar: "غالباً مؤنث", fa: "اغلب مؤنث", ti: "ብዙሕ ጊዜ ኣንስታይ", uk: "Часто жіночого роду" },
      items: [
        "{a}-tion{/a} → la ques{a}tion{/a}",
        "{a}-ette{/a} → la table{a}tte{/a}",
        "{a}-ure{/a} → la voi{a}ture{/a}",
      ],
      transItems: {
        en: ["{a}-tion{/a} → la ques{a}tion{/a} (question)", "{a}-ette{/a} → la table{a}tte{/a} (tablet)", "{a}-ure{/a} → la voi{a}ture{/a} (car)"],
        ar: ["{a}-tion{/a} → la ques{a}tion{/a} (سؤال)", "{a}-ette{/a} → la table{a}tte{/a} (لوح)", "{a}-ure{/a} → la voi{a}ture{/a} (سيارة)"],
        fa: ["{a}-tion{/a} → la ques{a}tion{/a} (سوال)", "{a}-ette{/a} → la table{a}tte{/a} (تبلت)", "{a}-ure{/a} → la voi{a}ture{/a} (ماشین)"],
        ti: ["{a}-tion{/a} → la ques{a}tion{/a} (ሕቶ)", "{a}-ette{/a} → la table{a}tte{/a} (ታብሌት)", "{a}-ure{/a} → la voi{a}ture{/a} (መኪና)"],
        uk: ["{a}-tion{/a} → la ques{a}tion{/a} (питання)", "{a}-ette{/a} → la table{a}tte{/a} (планшет)", "{a}-ure{/a} → la voi{a}ture{/a} (автомобіль)"],
      },
      inlineArrows: true,
    },
    {
      type: "highlight",
      label: "Astuce",
      transLabel: { en: "Tip", ar: "نصيحة", fa: "نکته", ti: "ምኽሪ", uk: "Порада" },
      items: ["La majorité des mots qui terminent par {a}-e{/a} sont féminins, mais il existe des exceptions."],
      transItems: {
        en: ["The majority of words ending in {a}-e{/a} are feminine, but there are exceptions."],
        ar: ["معظم الكلمات التي تنتهي بـ{a}-e{/a} مؤنثة، لكن هناك استثناءات."],
        fa: ["اکثر کلماتی که به {a}-e{/a} ختم می‌شوند مؤنث هستند، اما استثناءاتی وجود دارد."],
        ti: ["ብዙሓት ቃላት ብ{a}-e{/a} ዝወድኡ ኣንስታይ እዮም፣ ግን ፍሉያት ኣለዉ."],
        uk: ["Більшість слів, що закінчуються на {a}-e{/a}, є жіночого роду, але є винятки."],
      },
      noBulletItems: [0],
    },
    { type: "heading", text: "Les adjectifs", trans: { en: "Adjectives", ar: "الصفات", fa: "صفت‌ها", ti: "ቅጽላት", uk: "Прикметники" } },
    {
      type: "plain_list",
      items: ["L'adjectif donne une information sur le nom. Les adjectifs changent aussi selon le genre."],
      transItems: {
        en: ["The adjective gives information about the noun. Adjectives also change according to gender."],
        ar: ["الصفة تعطي معلومة عن الاسم. تتغير الصفات أيضاً حسب الجنس."],
        fa: ["صفت اطلاعاتی درباره اسم می‌دهد. صفت‌ها هم‌چنین بر اساس جنسیت تغییر می‌کنند."],
        ti: ["ቅጽሊ ናብ ስም ሓበሬታ ይህብ. ቅጽላት ከምኡ'ውን ብጾታ ይቅየሩ."],
        uk: ["Прикметник дає інформацію про іменник. Прикметники також змінюються за родом."],
      },
    },
    {
      type: "plain_list",
      items: ["On ajoute souvent {a}-e{/a} au féminin."],
      transItems: {
        en: ["We often add {a}-e{/a} for the feminine."],
        ar: ["نضيف في الغالب {a}-e{/a} للمؤنث."],
        fa: ["معمولاً {a}-e{/a} برای مؤنث اضافه می‌شود."],
        ti: ["ንኣንስታይ {a}-e{/a} ብዙሕ ጊዜ ንወስኾ."],
        uk: ["Для жіночого роду зазвичай додаємо {a}-e{/a}."],
      },
    },
    {
      type: "grid",
      headers: ["Masculin", "Féminin"],
      rows: [
        ["Le sac est petit.", "La voiture est petit{a}e{/a}."],
        ["Un homme français parle.", "Une femme français{a}e{/a} parle."],
      ],
      transHeaders: {
        en: ["Masculine", "Feminine"],
        ar: ["المذكر", "المؤنث"],
        fa: ["مذکر", "مؤنث"],
        ti: ["ተባዕታይ", "ኣንስታይ"],
        uk: ["Чоловічий", "Жіночий"],
      },
      transRows: {
        en: [["The bag is small.", "The car is small."], ["A French man speaks.", "A French woman speaks."]],
        ar: [["الحقيبة صغيرة.", "السيارة صغيرة."], ["رجل فرنسي يتكلم.", "امرأة فرنسية تتكلم."]],
        fa: [["کیف کوچک است.", "ماشین کوچک است."], ["یک مرد فرانسوی صحبت می‌کند.", "یک زن فرانسوی صحبت می‌کند."]],
        ti: [["ቦርሳ ንእሽቶ ኣዩ.", "መኪና ንእሽቶ ኣያ."], ["ፈረንሳዊ ሰብኣይ ይዛረብ.", "ፈረንሳዊት ሰበይቲ ትዛረብ."]],
        uk: [["Сумка маленька.", "Машина маленька."], ["Французький чоловік розмовляє.", "Французька жінка розмовляє."]],
      },
    },
    {
      type: "plain_list",
      items: ["On ajoute souvent {a}-s{/a} au pluriel."],
      transItems: {
        en: ["We often add {a}-s{/a} for the plural."],
        ar: ["نضيف في الغالب {a}-s{/a} للجمع."],
        fa: ["معمولاً {a}-s{/a} برای جمع اضافه می‌شود."],
        ti: ["ንብዙሕ {a}-s{/a} ብዙሕ ጊዜ ንወስኾ."],
        uk: ["Для множини зазвичай додаємо {a}-s{/a}."],
      },
    },
    {
      type: "grid",
      headers: ["Singulier", "Pluriel"],
      rows: [
        ["Le sac est petit.", "Les sacs sont petit{a}s{/a}."],
        ["La voiture est petite.", "Les voitures sont petite{a}s{/a}."],
      ],
      transHeaders: {
        en: ["Singular", "Plural"],
        ar: ["المفرد", "الجمع"],
        fa: ["مفرد", "جمع"],
        ti: ["ነጠላ", "ብዙሕ"],
        uk: ["Однина", "Множина"],
      },
      transRows: {
        en: [["The bag is small.", "The bags are small."], ["The car is small.", "The cars are small."]],
        ar: [["الحقيبة صغيرة.", "الحقائب صغيرة."], ["السيارة صغيرة.", "السيارات صغيرة."]],
        fa: [["کیف کوچک است.", "کیف‌ها کوچک هستند."], ["ماشین کوچک است.", "ماشین‌ها کوچک هستند."]],
        ti: [["ቦርሳ ንእሽቶ ኣዩ.", "ቦርሳታት ንእሽቶ እዮም."], ["መኪና ንእሽቶ ኣያ.", "መኪናታት ንእሽቶ እዮን."]],
        uk: [["Сумка маленька.", "Сумки маленькі."], ["Машина маленька.", "Машини маленькі."]],
      },
    },
    {
      type: "highlight",
      label: "Adjectifs spéciaux",
      transLabel: { en: "Special adjectives", ar: "صفات خاصة", fa: "صفت‌های خاص", ti: "ፍሉያት ቅጽላት", uk: "Особливі прикметники" },
      items: ["Certains adjectifs changent beaucoup."],
      transItems: {
        en: ["Some adjectives change a lot."],
        ar: ["بعض الصفات تتغير كثيراً."],
        fa: ["برخی صفت‌ها تغییرات زیادی دارند."],
        ti: ["ገሊኦም ቅጽላት ብዙሕ ይቅየሩ."],
        uk: ["Деякі прикметники сильно змінюються."],
      },
      noBulletItems: [0],
    },
    {
      type: "grid",
      headers: ["Masculin", "Féminin"],
      rows: [
        ["beau", "bell{a}e{/a}"],
        ["nouveau", "nouvell{a}e{/a}"],
        ["vieux", "vieil{a}le{/a}"],
      ],
      transHeaders: {
        en: ["Masculine", "Feminine"],
        ar: ["المذكر", "المؤنث"],
        fa: ["مذکر", "مؤنث"],
        ti: ["ተባዕታይ", "ኣንስታይ"],
        uk: ["Чоловічий", "Жіночий"],
      },
      transRows: {
        en: [["beautiful (m.)", "beautiful (f.)"], ["new (m.)", "new (f.)"], ["old (m.)", "old (f.)"]],
        ar: [["جميل", "جميلة"], ["جديد", "جديدة"], ["قديم", "قديمة"]],
        fa: [["زیبا (مذکر)", "زیبا (مؤنث)"], ["جدید (مذکر)", "جدید (مؤنث)"], ["پیر (مذکر)", "پیر (مؤنث)"]],
        ti: [["ጽቡቕ (ተባዕ.)", "ጽቡቕ (ኣንስ.)"], ["ሓዲሽ (ተባዕ.)", "ሓዲሽ (ኣንስ.)"], ["ኣረጊት (ተባዕ.)", "ኣረጊት (ኣንስ.)"]],
        uk: [["гарний", "гарна"], ["новий", "нова"], ["старий", "стара"]],
      },
    },
  ],
  exercises: [
    {
      type: "tag2",
      title: "Exercice 1",
      instruction: "Indiquez si le mot est Singulier (S) ou Pluriel (P), et Masculin (M) ou Féminin (F).",
      transInstruction: {
        en: "Indicate whether the word is Singular (S) or Plural (P), and Masculine (M) or Feminine (F).",
        ar: "حدد ما إذا كانت الكلمة مفردة (S) أو جمعاً (P)، ومذكراً (M) أو مؤنثاً (F).",
        fa: "مشخص کنید آیا کلمه مفرد (S) یا جمع (P) است، و مذکر (M) یا مؤنث (F).",
        ti: "ቃሉ ነጠላ (S) ወይ ብዙሕ (P)፣ ተባዕታይ (M) ወይ ኣንስታይ (F) ምዃኑ ሕሰቡ.",
        uk: "Вкажіть, є слово одниною (S) чи множиною (P), та чоловічим (M) чи жіночим (F) родом.",
      },
      poolSize: 10,
      pool: [
        { word: "petit", gender: "M", number: "S" },
        { word: "petits", gender: "M", number: "P" },
        { word: "petite", gender: "F", number: "S" },
        { word: "petites", gender: "F", number: "P" },
        { word: "grand", gender: "M", number: "S" },
        { word: "grands", gender: "M", number: "P" },
        { word: "grande", gender: "F", number: "S" },
        { word: "grandes", gender: "F", number: "P" },
        { word: "beau", gender: "M", number: "S" },
        { word: "beaux", gender: "M", number: "P" },
        { word: "belle", gender: "F", number: "S" },
        { word: "belles", gender: "F", number: "P" },
        { word: "nouveau", gender: "M", number: "S" },
        { word: "nouveaux", gender: "M", number: "P" },
        { word: "nouvelle", gender: "F", number: "S" },
        { word: "nouvelles", gender: "F", number: "P" },
        { word: "joli", gender: "M", number: "S" },
        { word: "jolis", gender: "M", number: "P" },
        { word: "jolie", gender: "F", number: "S" },
        { word: "jolies", gender: "F", number: "P" },
        { word: "bon", gender: "M", number: "S" },
        { word: "bons", gender: "M", number: "P" },
        { word: "bonne", gender: "F", number: "S" },
        { word: "bonnes", gender: "F", number: "P" },
        { word: "noir", gender: "M", number: "S" },
        { word: "noirs", gender: "M", number: "P" },
        { word: "noire", gender: "F", number: "S" },
        { word: "noires", gender: "F", number: "P" },
        { word: "blanc", gender: "M", number: "S" },
        { word: "blancs", gender: "M", number: "P" },
        { word: "blanche", gender: "F", number: "S" },
        { word: "blanches", gender: "F", number: "P" },
        { word: "brun", gender: "M", number: "S" },
        { word: "bruns", gender: "M", number: "P" },
        { word: "brune", gender: "F", number: "S" },
        { word: "brunes", gender: "F", number: "P" },
        { word: "intelligent", gender: "M", number: "S" },
        { word: "intelligents", gender: "M", number: "P" },
        { word: "intelligente", gender: "F", number: "S" },
        { word: "intelligentes", gender: "F", number: "P" },
        { word: "content", gender: "M", number: "S" },
        { word: "contents", gender: "M", number: "P" },
        { word: "contente", gender: "F", number: "S" },
        { word: "contentes", gender: "F", number: "P" },
        { word: "vieille", gender: "F", number: "S" },
        { word: "vieilles", gender: "F", number: "P" },
        { word: "ami", gender: "M", number: "S" },
        { word: "amis", gender: "M", number: "P" },
        { word: "amie", gender: "F", number: "S" },
        { word: "amies", gender: "F", number: "P" },
        { word: "arbre", gender: "M", number: "S" },
        { word: "arbres", gender: "M", number: "P" },
        { word: "cahier", gender: "M", number: "S" },
        { word: "cahiers", gender: "M", number: "P" },
        { word: "chat", gender: "M", number: "S" },
        { word: "chats", gender: "M", number: "P" },
        { word: "cousin", gender: "M", number: "S" },
        { word: "cousins", gender: "M", number: "P" },
        { word: "cousine", gender: "F", number: "S" },
        { word: "cousines", gender: "F", number: "P" },
        { word: "école", gender: "F", number: "S" },
        { word: "écoles", gender: "F", number: "P" },
        { word: "fille", gender: "F", number: "S" },
        { word: "filles", gender: "F", number: "P" },
        { word: "garçon", gender: "M", number: "S" },
        { word: "garçons", gender: "M", number: "P" },
        { word: "langue", gender: "F", number: "S" },
        { word: "langues", gender: "F", number: "P" },
        { word: "maison", gender: "F", number: "S" },
        { word: "maisons", gender: "F", number: "P" },
        { word: "père", gender: "M", number: "S" },
        { word: "pères", gender: "M", number: "P" },
        { word: "question", gender: "F", number: "S" },
        { word: "questions", gender: "F", number: "P" },
        { word: "table", gender: "F", number: "S" },
        { word: "tables", gender: "F", number: "P" },
        { word: "voiture", gender: "F", number: "S" },
        { word: "voitures", gender: "F", number: "P" },
        { word: "sac", gender: "M", number: "S" },
        { word: "sacs", gender: "M", number: "P" },
        { word: "porte", gender: "F", number: "S" },
        { word: "portes", gender: "F", number: "P" },
        { word: "livre", gender: "M", number: "S" },
        { word: "livres", gender: "M", number: "P" },
        { word: "mère", gender: "F", number: "S" },
        { word: "mères", gender: "F", number: "P" },
        { word: "sœur", gender: "F", number: "S" },
        { word: "sœurs", gender: "F", number: "P" },
        { word: "frère", gender: "M", number: "S" },
        { word: "frères", gender: "M", number: "P" },
        { word: "tante", gender: "F", number: "S" },
        { word: "tantes", gender: "F", number: "P" },
        { word: "oncle", gender: "M", number: "S" },
        { word: "oncles", gender: "M", number: "P" },
        { word: "homme", gender: "M", number: "S" },
        { word: "hommes", gender: "M", number: "P" },
        { word: "femme", gender: "F", number: "S" },
        { word: "femmes", gender: "F", number: "P" },
        { word: "stylo", gender: "M", number: "S" },
        { word: "stylos", gender: "M", number: "P" },
      ],
    },
  ],
};

const a1GrL04: GrammarLesson = {
  slug: "a1-gr-l04",
  code: "G.3",
  level: "A1",
  title: "Les articles définis et indéfinis",
  theory: [
    { type: "heading", text: "Les articles définis", trans: { en: "Definite articles", ar: "المعرفات", fa: "حروف تعریف معین", ti: "ዝተፈልጠ ዓንቀጽ", uk: "Означені артиклі" } },
    {
      type: "plain_list",
      items: ["Les articles définis parlent de quelque chose de connu, précis et identifiable."],
      transItems: {
        en: ["Definite articles refer to something known, specific and identifiable."],
        ar: ["المعرفات تشير إلى شيء معروف ومحدد وقابل للتعريف."],
        fa: ["حروف تعریف معین به چیزی شناخته‌شده، خاص و قابل شناسایی اشاره دارند."],
        ti: ["ዝተፈልጠ ዓንቀጽ ናይ ዝፍለጥ ዝተወሰነ ነገር ዝዛረብ እዩ."],
        uk: ["Означені артиклі стосуються відомого, конкретного та ідентифікованого."],
      },
    },
    {
      type: "grid",
      headers: ["Masculin", "Féminin", "Pluriel"],
      equalCols: true,
      rows: [
        ["{a}le{/a} téléphone", "{a}la{/a} chaise", "{a}les{/a} élèves"],
      ],
      transHeaders: {
        en: ["Masculine", "Feminine", "Plural"],
        ar: ["المذكر", "المؤنث", "الجمع"],
        fa: ["مذکر", "مؤنث", "جمع"],
        ti: ["ተባዕታይ", "ኣንስታይ", "ብዙሕ"],
        uk: ["Чоловічий", "Жіночий", "Множина"],
      },
    },
    {
      type: "highlight",
      label: "Attention",
      transLabel: { en: "Note", ar: "ملاحظة", fa: "توجه", ti: "ኣስተውዕል", uk: "Увага" },
      items: [
        "Devant une {b}voyelle{/b} ou un {b}h{/b}, {a}le{/a} et {a}la{/a} deviennent {a}l'{/a}.",
        "{a}le{/a} → l'arbre",
        "{a}la{/a} → l'école",
      ],
      transItems: {
        en: ["Before a {b}vowel{/b} or {b}h{/b}, {a}le{/a} and {a}la{/a} become {a}l'{/a}.", "{a}le{/a} → l'arbre (tree)", "{a}la{/a} → l'école (school)"],
        ar: ["قبل {b}حرف علة{/b} أو {b}h{/b}، يصبح {a}le{/a} و{a}la{/a} {a}l'{/a}.", "{a}le{/a} → l'arbre", "{a}la{/a} → l'école"],
        fa: ["قبل از {b}حرف صدادار{/b} یا {b}h{/b}، {a}le{/a} و {a}la{/a} به {a}l'{/a} تبدیل می‌شوند.", "{a}le{/a} → l'arbre", "{a}la{/a} → l'école"],
        ti: ["ቅድሚ {b}ሞዓዝ{/b} ወይ {b}h{/b}፣ {a}le{/a} ን {a}la{/a} {a}l'{/a} ይኾናን.", "{a}le{/a} → l'arbre", "{a}la{/a} → l'école"],
        uk: ["Перед {b}голосним{/b} або {b}h{/b}, {a}le{/a} і {a}la{/a} стають {a}l'{/a}.", "{a}le{/a} → l'arbre", "{a}la{/a} → l'école"],
      },
      noBulletItems: [0],
      inlineArrows: true,
    },
    { type: "heading", text: "Les articles indéfinis", trans: { en: "Indefinite articles", ar: "النكرات", fa: "حروف تعریف نامعین", ti: "ዘይተፈልጠ ዓንቀጽ", uk: "Неозначені артиклі" } },
    {
      type: "plain_list",
      items: ["Les articles indéfinis parlent d'une chose en général, non précise ou inconnue."],
      transItems: {
        en: ["Indefinite articles refer to something in general, non-specific or unknown."],
        ar: ["النكرات تشير إلى شيء عام غير محدد أو غير معروف."],
        fa: ["حروف تعریف نامعین به چیزی به‌طور کلی، نامشخص یا ناشناخته اشاره دارند."],
        ti: ["ዘይተፈልጠ ዓንቀጽ ብሓፈሻ ናይ ዘይተፈልጠ ነገር ዝዛረብ እዩ."],
        uk: ["Неозначені артиклі стосуються чогось загального, неконкретного або невідомого."],
      },
    },
    {
      type: "grid",
      headers: ["Masculin", "Féminin", "Pluriel"],
      equalCols: true,
      rows: [
        ["{a}un{/a} livre", "{a}une{/a} voiture", "{a}des{/a} chaussures"],
      ],
      transHeaders: {
        en: ["Masculine", "Feminine", "Plural"],
        ar: ["المذكر", "المؤنث", "الجمع"],
        fa: ["مذکر", "مؤنث", "جمع"],
        ti: ["ተባዕታይ", "ኣንስታይ", "ብዙሕ"],
        uk: ["Чоловічий", "Жіночий", "Множина"],
      },
    },
    { type: "heading", text: "Différence entre défini et indéfini", sub: true, trans: { en: "Difference between definite and indefinite", ar: "الفرق بين المعرف والنكرة", fa: "تفاوت بین معین و نامعین", ti: "ፍልልይ ዝተፈልጠን ዘይተፈልጠን", uk: "Різниця між означеним і неозначеним" } },
    {
      type: "highlight",
      label: "Article défini",
      transLabel: { en: "Definite article", ar: "المعرف", fa: "حرف تعریف معین", ti: "ዝተፈልጠ ዓንቀጽ", uk: "Означений артикль" },
      items: [
        "La porte est connue, par exemple la porte de la maison.",
        "Je ferme {a}la{/a} porte.",
      ],
      transItems: {
        en: ["The door is known, for example the door of the house.", "I close {a}the{/a} door."],
        ar: ["الباب معروف، مثلاً باب البيت.", "أغلق {a}الباب{/a}."],
        fa: ["در شناخته‌شده است، مثلاً در خانه.", "من {a}آن در{/a} را می‌بندم."],
        ti: ["እቲ ማዕጾ ይፍለጥ እዩ፣ ንኣብነት ማዕጾ ቤት.", "ነቲ {a}ማዕጾ{/a} ዓጽዮ."],
        uk: ["Двері відомі, наприклад двері будинку.", "Я закриваю {a}ці{/a} двері."],
      },
      noBulletItems: [0],
    },
    {
      type: "highlight",
      label: "Article indéfini",
      transLabel: { en: "Indefinite article", ar: "النكرة", fa: "حرف تعریف نامعین", ti: "ዘይተፈልጠ ዓንቀጽ", uk: "Неозначений артикль" },
      items: [
        "Une porte que je ne connais pas, une parmi d'autres.",
        "Je cherche {a}une{/a} porte.",
      ],
      transItems: {
        en: ["A door I do not know, one among others.", "I am looking for {a}a{/a} door."],
        ar: ["باب لا أعرفه، واحد من بين أبواب كثيرة.", "أبحث عن {a}باب{/a}."],
        fa: ["دری که نمی‌شناسم، یکی از چندین در.", "دنبال {a}یک{/a} در می‌گردم."],
        ti: ["ዘይፍለጥ ማዕጾ፣ ካብ ብዙሓት ሓደ.", "ሓደ {a}ማዕጾ{/a} ይደሊ."],
        uk: ["Двері, яких я не знаю, одні з багатьох.", "Я шукаю {a}якісь{/a} двері."],
      },
      noBulletItems: [0],
    },
  ],
  exercises: [
    {
      type: "tag2",
      title: "Exercice 3",
      instruction: "Indiquez si le mot est Singulier (S) ou Pluriel (P), et Masculin (M) ou Féminin (F).",
      transInstruction: {
        en: "Indicate whether the word is Singular (S) or Plural (P), and Masculine (M) or Feminine (F).",
        ar: "حدد ما إذا كانت الكلمة مفردة (S) أو جمعاً (P)، ومذكراً (M) أو مؤنثاً (F).",
        fa: "مشخص کنید آیا کلمه مفرد (S) یا جمع (P) است، و مذکر (M) یا مؤنث (F).",
        ti: "ቃሉ ነጠላ (S) ወይ ብዙሕ (P)፣ ተባዕታይ (M) ወይ ኣንስታይ (F) ምዃኑ ሕሰቡ.",
        uk: "Вкажіть, є слово одниною (S) чи множиною (P), та чоловічим (M) чи жіночим (F) родом.",
      },
      poolSize: 10,
      pool: [
        { word: "ami", gender: "M", number: "S" },
        { word: "amis", gender: "M", number: "P" },
        { word: "amie", gender: "F", number: "S" },
        { word: "amies", gender: "F", number: "P" },
        { word: "arbre", gender: "M", number: "S" },
        { word: "arbres", gender: "M", number: "P" },
        { word: "bureau", gender: "M", number: "S" },
        { word: "bureaux", gender: "M", number: "P" },
        { word: "cahier", gender: "M", number: "S" },
        { word: "cahiers", gender: "M", number: "P" },
        { word: "chat", gender: "M", number: "S" },
        { word: "chats", gender: "M", number: "P" },
        { word: "chien", gender: "M", number: "S" },
        { word: "chiens", gender: "M", number: "P" },
        { word: "cousin", gender: "M", number: "S" },
        { word: "cousins", gender: "M", number: "P" },
        { word: "cousine", gender: "F", number: "S" },
        { word: "cousines", gender: "F", number: "P" },
        { word: "enfant", gender: "M", number: "S" },
        { word: "enfants", gender: "M", number: "P" },
        { word: "frère", gender: "M", number: "S" },
        { word: "frères", gender: "M", number: "P" },
        { word: "garçon", gender: "M", number: "S" },
        { word: "garçons", gender: "M", number: "P" },
        { word: "gâteau", gender: "M", number: "S" },
        { word: "gâteaux", gender: "M", number: "P" },
        { word: "homme", gender: "M", number: "S" },
        { word: "hommes", gender: "M", number: "P" },
        { word: "journal", gender: "M", number: "S" },
        { word: "journaux", gender: "M", number: "P" },
        { word: "livre", gender: "M", number: "S" },
        { word: "livres", gender: "M", number: "P" },
        { word: "magasin", gender: "M", number: "S" },
        { word: "magasins", gender: "M", number: "P" },
        { word: "manteau", gender: "M", number: "S" },
        { word: "manteaux", gender: "M", number: "P" },
        { word: "mot", gender: "M", number: "S" },
        { word: "mots", gender: "M", number: "P" },
        { word: "oncle", gender: "M", number: "S" },
        { word: "oncles", gender: "M", number: "P" },
        { word: "ordinateur", gender: "M", number: "S" },
        { word: "ordinateurs", gender: "M", number: "P" },
        { word: "père", gender: "M", number: "S" },
        { word: "pères", gender: "M", number: "P" },
        { word: "sac", gender: "M", number: "S" },
        { word: "sacs", gender: "M", number: "P" },
        { word: "stylo", gender: "M", number: "S" },
        { word: "stylos", gender: "M", number: "P" },
        { word: "téléphone", gender: "M", number: "S" },
        { word: "téléphones", gender: "M", number: "P" },
        { word: "chanson", gender: "F", number: "S" },
        { word: "chansons", gender: "F", number: "P" },
        { word: "chaussure", gender: "F", number: "S" },
        { word: "chaussures", gender: "F", number: "P" },
        { word: "classe", gender: "F", number: "S" },
        { word: "classes", gender: "F", number: "P" },
        { word: "couleur", gender: "F", number: "S" },
        { word: "couleurs", gender: "F", number: "P" },
        { word: "école", gender: "F", number: "S" },
        { word: "écoles", gender: "F", number: "P" },
        { word: "fenêtre", gender: "F", number: "S" },
        { word: "fenêtres", gender: "F", number: "P" },
        { word: "fille", gender: "F", number: "S" },
        { word: "filles", gender: "F", number: "P" },
        { word: "fleur", gender: "F", number: "S" },
        { word: "fleurs", gender: "F", number: "P" },
        { word: "histoire", gender: "F", number: "S" },
        { word: "histoires", gender: "F", number: "P" },
        { word: "langue", gender: "F", number: "S" },
        { word: "langues", gender: "F", number: "P" },
        { word: "lettre", gender: "F", number: "S" },
        { word: "lettres", gender: "F", number: "P" },
        { word: "maison", gender: "F", number: "S" },
        { word: "maisons", gender: "F", number: "P" },
        { word: "mère", gender: "F", number: "S" },
        { word: "mères", gender: "F", number: "P" },
        { word: "nationalité", gender: "F", number: "S" },
        { word: "nationalités", gender: "F", number: "P" },
        { word: "photo", gender: "F", number: "S" },
        { word: "photos", gender: "F", number: "P" },
        { word: "porte", gender: "F", number: "S" },
        { word: "portes", gender: "F", number: "P" },
        { word: "question", gender: "F", number: "S" },
        { word: "questions", gender: "F", number: "P" },
        { word: "rue", gender: "F", number: "S" },
        { word: "rues", gender: "F", number: "P" },
        { word: "semaine", gender: "F", number: "S" },
        { word: "semaines", gender: "F", number: "P" },
        { word: "sœur", gender: "F", number: "S" },
        { word: "sœurs", gender: "F", number: "P" },
        { word: "table", gender: "F", number: "S" },
        { word: "tables", gender: "F", number: "P" },
        { word: "tante", gender: "F", number: "S" },
        { word: "tantes", gender: "F", number: "P" },
        { word: "voiture", gender: "F", number: "S" },
        { word: "voitures", gender: "F", number: "P" },
        { word: "problème", gender: "M", number: "S" },
        { word: "problèmes", gender: "M", number: "P" },
        { word: "adresse", gender: "F", number: "S" },
        { word: "adresses", gender: "F", number: "P" },
      ],
    },
  ],
};

const a1GrL05: GrammarLesson = {
  slug: "a1-gr-l05",
  code: "G.16",
  level: "A1",
  title: "Le verbe avoir et les adjectifs possessifs",
  theory: [
    { type: "heading", text: "Le verbe AVOIR au présent" },
    {
      type: "table",
      tables: [
        {
          verb: "avoir", accentForms: true,
          rows: [
            { pronoun: "j'", form: "ai" },
            { pronoun: "tu", form: "as" },
            { pronoun: "il / elle / on", form: "a" },
            { pronoun: "nous", form: "avons" },
            { pronoun: "vous", form: "avez" },
            { pronoun: "ils / elles", form: "ont" },
          ],
        },
      ],
    },
    {
      type: "highlight",
      label: "Emplois de AVOIR",
      items: [
        "Possession : {a}J'ai{/a} un téléphone.",
        "Âge : {a}J'ai{/a} 25 ans. (jamais ÊTRE pour l'âge)",
        "Sensations : {a}Nous avons{/a} faim / soif / froid / chaud / peur / mal.",
        "Expressions : {a}Il a{/a} de la chance. / {a}Tu as{/a} raison.",
      ],
    },
    { type: "heading", text: "Les adjectifs possessifs" },
    {
      type: "plain_list",
      items: ["Ils s'accordent avec le {a}nom possédé{/a} (et non avec le possesseur)."],
    },
    {
      type: "grid",
      headers: ["Possesseur", "Masc. sing.", "Fém. sing.", "Pluriel"],
      boldFirstCol: true,
      rows: [
        ["{a}je{/a}", "mon", "ma", "mes"],
        ["{a}tu{/a}", "ton", "ta", "tes"],
        ["{a}il / elle{/a}", "son", "sa", "ses"],
        ["{a}nous{/a}", "notre", "notre", "nos"],
        ["{a}vous{/a}", "votre", "votre", "vos"],
        ["{a}ils / elles{/a}", "leur", "leur", "leurs"],
      ],
    },
    {
      type: "highlight",
      label: "Exemples",
      items: [
        "{a}mon{/a} frère, {a}ma{/a} sœur, {a}mes{/a} parents",
        "{a}son{/a} père, {a}sa{/a} mère, {a}ses{/a} enfants",
        "{a}notre{/a} maison, {a}nos{/a} voisins",
      ],
    },
    {
      type: "highlight",
      label: "Attention : devant voyelle au féminin",
      items: [
        "ma / ta / sa + voyelle → {a}mon / ton / son{/a}",
        "{s}ma{/s} amie → {a}mon{/a} amie",
        "{s}ta{/s} école → {a}ton{/a} école",
      ],
      noBulletItems: [0],
    },
  ],
  exercises: [],
};


const a1GrL06: GrammarLesson = {
  slug: "a1-gr-l06",
  code: "G.7",
  level: "A1",
  title: "Être et avoir — révision",
  theory: [
    { type: "heading", text: "ÊTRE ou AVOIR ?" },
    {
      type: "rule",
      text: "ÊTRE + nationalité/profession/adjectif.",
      examples: [
        { correct: "Elle est française." },
        { correct: "Il est professeur." },
        { correct: "Ils sont dynamiques." },
      ],
    },
    {
      type: "rule",
      text: "AVOIR + âge / avoir + nom (avec article) / expressions.",
      examples: [
        { correct: "Elle a 45 ans." },
        { correct: "J'ai cours demain." },
        { correct: "Ils ont un bureau." },
      ],
    },
    {
      type: "table",
      tables: [
        {
          verb: "Expressions avec AVOIR",
          rows: [
            { pronoun: "avoir + âge", form: "avoir 20 ans" },
            { pronoun: "avoir cours", form: "avoir cours le lundi" },
            { pronoun: "avoir rendez-vous", form: "avoir rendez-vous avec quelqu'un" },
            { pronoun: "avoir du temps", form: "être disponible" },
          ],
        },
      ],
    },
  ],
  exercises: [],
};

const a1GrL10: GrammarLesson = {
  slug: "a1-gr-l10",
  code: "G.13",
  level: "A1",
  title: "L'interrogation avec les mots interrogatifs",
  theory: [
    { type: "heading", text: "Les mots interrogatifs" },
    {
      type: "plain_list",
      items: [
        "Les mots interrogatifs permettent de poser des questions précises.",
        "Ils se placent en début de question (ou à la fin à l'oral informel).",
      ],
    },
    {
      type: "grid",
      headers: ["Mot", "Sens", "Exemple"],
      boldFirstCol: true,
      rows: [
        ["{a}Où ?{/a}", "lieu", "Où est-ce que tu habites ?"],
        ["{a}Quand ?{/a}", "temps", "Quand est-ce qu'il arrive ?"],
        ["{a}Qui ?{/a}", "personne", "Qui est-ce que tu appelles ?"],
        ["{a}Qu'est-ce que ?{/a}", "chose", "Qu'est-ce que tu manges ?"],
        ["{a}Comment ?{/a}", "manière / état", "Comment tu t'appelles ?"],
        ["{a}Pourquoi ?{/a}", "raison", "Pourquoi tu étudies le français ?"],
        ["{a}Combien ?{/a}", "quantité", "Combien d'enfants vous avez ?"],
        ["{a}Quel / Quelle ?{/a}", "choix parmi plusieurs", "Quel bus prends-tu ?"],
      ],
    },
    { type: "heading", text: "Deux façons de construire la question", sub: true },
    {
      type: "highlight",
      label: "Registre neutre",
      items: [
        "Mot interrogatif + {a}est-ce que{/a} + sujet + verbe ?",
        "Où est-ce que tu habites ?",
        "Quand est-ce qu'il arrive ?",
        "Comment est-ce que vous vous appelez ?",
      ],
      noBulletItems: [0],
    },
    {
      type: "highlight",
      label: "Registre informel (oral)",
      items: [
        "Sujet + verbe + mot interrogatif ?",
        "Tu habites où ?",
        "Il arrive quand ?",
        "Tu t'appelles comment ?",
      ],
      noBulletItems: [0],
    },
    {
      type: "highlight",
      label: "Quel / Quelle — accord",
      items: [
        "{a}Quel{/a} + nom masculin singulier : Quel jour ?",
        "{a}Quelle{/a} + nom féminin singulier : Quelle heure ?",
        "{a}Quels{/a} + nom masculin pluriel : Quels films ?",
        "{a}Quelles{/a} + nom féminin pluriel : Quelles langues ?",
      ],
    },
  ],
  exercises: [],
};


const a1GrL11: GrammarLesson = {
  slug: "a1-gr-l11",
  code: "G.14",
  level: "A1",
  title: "Les prépositions de lieu",
  theory: [
    { type: "heading", text: "Les prépositions de lieu" },
    {
      type: "plain_list",
      items: [
        "Les prépositions de lieu indiquent où se trouve quelque chose ou quelqu'un.",
      ],
    },
    {
      type: "grid",
      headers: ["Préposition", "Sens", "Exemple"],
      boldFirstCol: true,
      rows: [
        ["{a}dans{/a}", "à l'intérieur", "Le stylo est dans le sac."],
        ["{a}sur{/a}", "à la surface", "Le livre est sur la table."],
        ["{a}sous{/a}", "en dessous", "Le chat est sous la chaise."],
        ["{a}devant{/a}", "face avant", "Je suis devant l'école."],
        ["{a}derrière{/a}", "face arrière", "La voiture est derrière la maison."],
        ["{a}entre{/a}", "au milieu de deux", "La banque est entre la poste et la pharmacie."],
        ["{a}à côté de{/a}", "à proximité", "La boulangerie est à côté du cinéma."],
        ["{a}en face de{/a}", "vis-à-vis", "L'arrêt est en face de la gare."],
        ["{a}près de{/a}", "pas loin", "L'hôpital est près d'ici."],
        ["{a}loin de{/a}", "à grande distance", "La gare est loin du centre."],
      ],
    },
    { type: "heading", text: "Articles contractés", sub: true, accent: true },
    {
      type: "grid",
      headers: ["Contraction", "Exemple"],
      boldFirstCol: true,
      rows: [
        ["{a}à + le → au{/a}", "Je vais {a}au{/a} cinéma."],
        ["{a}à + les → aux{/a}", "Je parle {a}aux{/a} enfants."],
        ["{a}de + le → du{/a}", "Je viens {a}du{/a} marché."],
        ["{a}de + les → des{/a}", "Je parle {a}des{/a} enfants."],
      ],
    },
    {
      type: "highlight",
      label: "Attention",
      items: [
        "{a}à + la{/a} et {a}de + la{/a} ne se contractent pas.",
        "Je vais {a}à la{/a} pharmacie. (pas : {s}au{/s} pharmacie)",
        "Je viens {a}de la{/a} boulangerie. (pas : {s}du{/s} boulangerie)",
      ],
      noBulletItems: [0],
    },
  ],
  exercises: [],
};


const a1GrL14: GrammarLesson = {
  slug: "a1-gr-l14",
  code: "G.15",
  level: "A1",
  title: "Les articles partitifs et la quantité",
  theory: [
    { type: "heading", text: "Les articles partitifs" },
    {
      type: "plain_list",
      items: [
        "Les articles partitifs expriment une quantité indéterminée — une partie de quelque chose.",
      ],
    },
    {
      type: "grid",
      headers: ["Genre", "Article", "Exemple"],
      boldFirstCol: true,
      rows: [
        ["Masculin singulier", "{a}du{/a} (de + le)", "Je mange {a}du{/a} pain."],
        ["Féminin singulier", "{a}de la{/a}", "Je bois {a}de la{/a} limonade."],
        ["Devant voyelle", "{a}de l'{/a}", "Je bois {a}de l'{/a}eau."],
        ["Pluriel", "{a}des{/a}", "Je mange {a}des{/a} légumes."],
      ],
    },
    { type: "heading", text: "Partitif vs défini", sub: true },
    {
      type: "grid",
      headers: ["Partitif (quantité indéterminée)", "Défini (chose précise)"],
      rows: [
        ["Je mange {a}du{/a} pain.", "Je mange {a}le{/a} pain que tu as fait."],
        ["Elle boit {a}de la{/a} soupe.", "Elle boit {a}la{/a} soupe de sa mère."],
      ],
    },
    { type: "heading", text: "Négation : partitif → de / d'", sub: true, accent: true },
    {
      type: "grid",
      headers: ["Affirmatif", "Négatif"],
      rows: [
        ["Je mange du pain.", "Je ne mange {a}pas de{/a} pain."],
        ["Tu bois de la soupe.", "Tu ne bois {a}pas de{/a} soupe."],
        ["Elle prend de l'huile.", "Elle ne prend {a}pas d'{/a}huile."],
        ["Ils ont des enfants.", "Ils n'ont {a}pas d'{/a}enfants."],
      ],
    },
    { type: "heading", text: "La quantité déterminée", sub: true },
    {
      type: "plain_list",
      items: ["Avec une quantité précise : {a}quantité + de + nom{/a} (sans article)."],
    },
    {
      type: "highlight",
      label: "Exemples",
      items: [
        "un kilo {a}de{/a} pommes",
        "une bouteille {a}d'{/a}eau",
        "beaucoup {a}de{/a} lait",
        "un peu {a}de{/a} sucre",
        "assez {a}de{/a} pain",
        "trop {a}de{/a} sel",
      ],
    },
  ],
  exercises: [],
};


const a1GrL17: GrammarLesson = {
  slug: "a1-gr-l17",
  code: "G.17",
  level: "A1",
  title: "Il y a et les prépositions dans la maison",
  theory: [
    { type: "heading", text: "Il y a / Il n'y a pas de" },
    {
      type: "plain_list",
      items: [
        "{a}Il y a{/a} + nom → signale l'existence de quelque chose.",
        "{a}Il n'y a pas de{/a} + nom → indique l'absence.",
      ],
    },
    {
      type: "grid",
      headers: ["Affirmatif", "Négatif"],
      rows: [
        ["Il y a {a}un{/a} cinéma.", "Il n'y a {a}pas de{/a} cinéma."],
        ["Il y a {a}une{/a} école.", "Il n'y a {a}pas d'{/a}école."],
        ["Il y a {a}des{/a} restaurants.", "Il n'y a {a}pas de{/a} restaurants."],
      ],
    },
    { type: "heading", text: "Les pièces de la maison", sub: true, accent: true },
    {
      type: "grid",
      headers: ["Pièce", "Article"],
      boldFirstCol: true,
      rows: [
        ["{a}le salon{/a}", "la pièce principale"],
        ["{a}la cuisine{/a}", "pour cuisiner"],
        ["{a}la chambre{/a}", "pour dormir"],
        ["{a}la salle de bains{/a}", "pour se laver"],
        ["{a}les toilettes{/a}", "WC"],
        ["{a}le couloir{/a}", "passage entre les pièces"],
        ["{a}le balcon{/a}", "espace extérieur"],
      ],
    },
    { type: "heading", text: "Localiser dans la maison", sub: true },
    {
      type: "grid",
      headers: ["Préposition", "Exemple"],
      boldFirstCol: true,
      rows: [
        ["{a}dans{/a}", "Le chat est {a}dans{/a} la chambre."],
        ["{a}sur{/a}", "Le livre est {a}sur{/a} le bureau."],
        ["{a}sous{/a}", "Les chaussures sont {a}sous{/a} le lit."],
        ["{a}devant{/a}", "La table est {a}devant{/a} la fenêtre."],
        ["{a}derrière{/a}", "Le canapé est {a}derrière{/a} la porte."],
        ["{a}à côté de{/a}", "La lampe est {a}à côté du{/a} lit."],
        ["{a}en face de{/a}", "La télé est {a}en face du{/a} canapé."],
      ],
    },
    {
      type: "highlight",
      label: "Exemples de description",
      items: [
        "Dans mon appartement, il y a trois pièces.",
        "Il n'y a pas de balcon, mais il y a une grande cuisine.",
        "Le canapé est devant la télévision.",
      ],
    },
  ],
  exercises: [],
};


const a1GrL18: GrammarLesson = {
  slug: "a1-gr-l18",
  code: "G.18",
  level: "A1",
  title: "Les adjectifs démonstratifs",
  theory: [
    { type: "heading", text: "Les adjectifs démonstratifs" },
    {
      type: "plain_list",
      items: [
        "Ils servent à désigner ou montrer quelque chose de précis.",
        "Ils s'accordent avec le {a}nom{/a} qu'ils accompagnent.",
      ],
    },
    {
      type: "grid",
      headers: ["Genre / Nombre", "Démonstratif", "Exemple"],
      boldFirstCol: true,
      rows: [
        ["Masculin singulier", "{a}ce{/a}", "Je prends {a}ce{/a} livre."],
        ["Masculin sing. + voyelle / h", "{a}cet{/a}", "J'aime {a}cet{/a} appartement."],
        ["Féminin singulier", "{a}cette{/a}", "Regarde {a}cette{/a} voiture."],
        ["Pluriel (m. et f.)", "{a}ces{/a}", "J'aime {a}ces{/a} chaussures."],
      ],
    },
    {
      type: "highlight",
      label: "Attention : cet",
      items: [
        "{a}cet{/a} s'utilise devant un nom masculin commençant par une voyelle ou un {a}h{/a} muet.",
        "{s}ce{/s} étudiant → {a}cet{/a} étudiant",
        "{s}ce{/s} hôtel → {a}cet{/a} hôtel",
      ],
      noBulletItems: [0],
    },
    { type: "heading", text: "Exemples en contexte", sub: true },
    {
      type: "grid",
      headers: ["Phrase", "Remarque"],
      rows: [
        ["Tu connais {a}cette{/a} ville ?", "féminin sing."],
        ["J'aime {a}cet{/a} acteur.", "masculin + voyelle"],
        ["{a}Ces{/a} films sont excellents.", "pluriel"],
        ["Prends {a}ce{/a} bus !", "masculin sing. + consonne"],
      ],
    },
    {
      type: "highlight",
      label: "Astuce : -ci / -là",
      items: [
        "On peut ajouter {a}-ci{/a} (proche) ou {a}-là{/a} (loin) pour préciser.",
        "ce livre-{a}ci{/a} (this book here) / ce livre-{a}là{/a} (that book there)",
      ],
      noBulletItems: [0],
    },
  ],
  exercises: [],
};


const a1GrL19: GrammarLesson = {
  slug: "a1-gr-l19",
  code: "G.19",
  level: "A1",
  title: "Les adjectifs possessifs",
  theory: [
    { type: "heading", text: "Les adjectifs possessifs" },
    {
      type: "plain_list",
      items: [
        "Ils expriment l'appartenance.",
        "Ils s'accordent avec le {a}nom possédé{/a} (et non avec le possesseur).",
      ],
    },
    {
      type: "grid",
      headers: ["Possesseur", "Masc. sing.", "Fém. sing.", "Pluriel"],
      boldFirstCol: true,
      rows: [
        ["{a}je{/a}", "mon", "ma", "mes"],
        ["{a}tu{/a}", "ton", "ta", "tes"],
        ["{a}il / elle / on{/a}", "son", "sa", "ses"],
        ["{a}nous{/a}", "notre", "notre", "nos"],
        ["{a}vous{/a}", "votre", "votre", "vos"],
        ["{a}ils / elles{/a}", "leur", "leur", "leurs"],
      ],
    },
    {
      type: "highlight",
      label: "Exemples",
      items: [
        "{a}mon{/a} père, {a}ma{/a} mère, {a}mes{/a} parents",
        "{a}son{/a} livre (à lui ou à elle), {a}sa{/a} voiture, {a}ses{/a} affaires",
        "{a}notre{/a} appartement, {a}nos{/a} voisins",
        "{a}leur{/a} maison, {a}leurs{/a} enfants",
      ],
    },
    {
      type: "highlight",
      label: "Attention : devant voyelle au féminin",
      items: [
        "ma / ta / sa + voyelle ou h muet → {a}mon / ton / son{/a}",
        "{s}ma{/s} amie → {a}mon{/a} amie",
        "{s}ta{/s} histoire → {a}ton{/a} histoire",
        "{s}sa{/s} école → {a}son{/a} école",
      ],
      noBulletItems: [0],
    },
    {
      type: "highlight",
      label: "Son / Sa : attention à l'ambiguïté",
      items: [
        "{a}son{/a} = son (à lui) ou son (à elle) selon le contexte.",
        "Marco parle à {a}son{/a} ami. (= l'ami de Marco)",
        "Aiko parle à {a}son{/a} ami. (= l'ami d'Aiko)",
      ],
      noBulletItems: [0],
    },
  ],
  exercises: [],
};


const a1GrL22: GrammarLesson = {
  slug: "a1-gr-l22",
  code: "G.20",
  level: "A1",
  title: "La fréquence",
  theory: [
    { type: "heading", text: "Les adverbes de fréquence" },
    {
      type: "plain_list",
      items: [
        "Les adverbes de fréquence indiquent {a}combien de fois{/a} une action se produit.",
        "Ils se placent généralement {a}après le verbe{/a}.",
      ],
    },
    {
      type: "grid",
      headers: ["Adverbe", "Fréquence", "Exemple"],
      boldFirstCol: true,
      rows: [
        ["{a}toujours{/a}", "100%", "Il mange toujours à midi."],
        ["{a}souvent{/a}", "~75%", "Elle va souvent au cinéma."],
        ["{a}parfois / quelquefois{/a}", "~50%", "Nous mangeons parfois au restaurant."],
        ["{a}rarement{/a}", "~25%", "Je prends rarement le bus."],
        ["{a}ne … jamais{/a}", "0%", "Il ne fume jamais."],
      ],
    },
    { type: "heading", text: "Place de l'adverbe", sub: true },
    {
      type: "grid",
      headers: ["Temps", "Position", "Exemple"],
      boldFirstCol: true,
      rows: [
        ["Présent", "après le verbe", "Je travaille {a}souvent{/a} le soir."],
        ["Passé composé", "entre auxiliaire et participe", "J'ai {a}souvent{/a} voyagé."],
      ],
    },
    {
      type: "highlight",
      label: "Ne … jamais",
      items: [
        "{a}jamais{/a} s'utilise avec {a}ne{/a} pour la négation totale.",
        "Je {a}ne{/a} fais {a}jamais{/a} de sport.",
        "Elle {a}n'{/a}est {a}jamais{/a} en retard.",
      ],
      noBulletItems: [0],
    },
    {
      type: "highlight",
      label: "Expressions de fréquence",
      items: [
        "{a}tous les jours{/a} / {a}chaque jour{/a} → every day",
        "{a}une fois par semaine{/a} → once a week",
        "{a}deux fois par mois{/a} → twice a month",
        "{a}de temps en temps{/a} → from time to time",
      ],
    },
  ],
  exercises: [],
};


const a1GrL23: GrammarLesson = {
  slug: "a1-gr-l23",
  code: "G.21",
  level: "A1",
  title: "Les adjectifs qualificatifs",
  theory: [
    { type: "heading", text: "Accord en genre" },
    {
      type: "plain_list",
      items: [
        "L'adjectif s'accorde en {a}genre{/a} et en {a}nombre{/a} avec le nom.",
      ],
    },
    {
      type: "grid",
      headers: ["Masculin", "Féminin", "Règle"],
      rows: [
        ["grand", "grand{a}e{/a}", "+ e"],
        ["petit", "petit{a}e{/a}", "+ e"],
        ["français", "français{a}e{/a}", "+ e"],
        ["sympa", "sympa", "invariable (déjà en -a)"],
        ["moderne", "moderne", "invariable (déjà en -e)"],
        ["beau", "bell{a}e{/a}", "irrégulier"],
        ["nouveau", "nouvell{a}e{/a}", "irrégulier"],
        ["vieux", "vieil{a}le{/a}", "irrégulier"],
      ],
    },
    { type: "heading", text: "Accord en nombre", sub: true },
    {
      type: "grid",
      headers: ["Singulier", "Pluriel", "Règle"],
      rows: [
        ["grand", "grand{a}s{/a}", "+ s"],
        ["grande", "grande{a}s{/a}", "+ s"],
        ["beau", "beau{a}x{/a}", "-eau → -eaux"],
        ["nouveau", "nouveau{a}x{/a}", "-eau → -eaux"],
        ["gros", "gros", "déjà en -s : invariable"],
      ],
    },
    { type: "heading", text: "Place de l'adjectif", sub: true },
    {
      type: "plain_list",
      items: [
        "En général, l'adjectif se place {a}après{/a} le nom.",
        "Certains adjectifs courts et courants se placent {a}avant{/a} le nom ({a}BAGS{/a}).",
      ],
    },
    {
      type: "highlight",
      label: "BAGS — adjectifs avant le nom",
      items: [
        "{a}B{/a}eauté : beau, joli",
        "{a}A{/a}ge : vieux, jeune, nouveau",
        "{a}G{/a}randeur : grand, petit, gros, long",
        "{a}S{/a}entiment/bonté : bon, mauvais, gentil",
      ],
    },
    {
      type: "grid",
      headers: ["Avant le nom (BAGS)", "Après le nom (autres)"],
      rows: [
        ["un {a}beau{/a} film", "un film {a}intéressant{/a}"],
        ["une {a}petite{/a} ville", "une ville {a}moderne{/a}"],
        ["un {a}bon{/a} restaurant", "un restaurant {a}français{/a}"],
        ["un {a}jeune{/a} homme", "un homme {a}sympa{/a}"],
      ],
    },
  ],
  exercises: [],
};


const a1GrL24: GrammarLesson = {
  slug: "a1-gr-l24",
  code: "G.27",
  level: "A1",
  title: "Le comparatif et le superlatif",
  theory: [
    { type: "heading", text: "Le comparatif" },
    {
      type: "plain_list",
      items: [
        "Le comparatif permet de comparer deux éléments.",
        "Structure : {a}plus / aussi / moins + adjectif + que{/a}",
      ],
    },
    {
      type: "grid",
      headers: ["Type", "Structure", "Exemple"],
      boldFirstCol: true,
      rows: [
        ["{a}Supériorité{/a}", "plus + adj + que", "Paris est {a}plus grande que{/a} Lyon."],
        ["{a}Égalité{/a}", "aussi + adj + que", "Ce film est {a}aussi intéressant que{/a} l'autre."],
        ["{a}Infériorité{/a}", "moins + adj + que", "Ce resto est {a}moins cher que{/a} l'autre."],
      ],
    },
    { type: "heading", text: "Comparatif de quantité (verbe ou nom)", sub: true },
    {
      type: "grid",
      headers: ["Type", "Exemple"],
      boldFirstCol: true,
      rows: [
        ["plus de + nom", "J'ai {a}plus de{/a} temps que toi."],
        ["autant de + nom", "Elle a {a}autant de{/a} travail que moi."],
        ["moins de + nom", "Il a {a}moins d'{/a}argent que nous."],
      ],
    },
    { type: "heading", text: "Le superlatif" },
    {
      type: "plain_list",
      items: [
        "Le superlatif exprime le degré le plus élevé ou le plus bas.",
        "Structure : {a}le / la / les + plus / moins + adjectif{/a}",
      ],
    },
    {
      type: "grid",
      headers: ["Type", "Exemple"],
      boldFirstCol: true,
      rows: [
        ["le/la/les + plus + adj", "C'est {a}le plus beau{/a} quartier de la ville."],
        ["le/la/les + moins + adj", "C'est {a}la moins chère{/a} des options."],
      ],
    },
    {
      type: "highlight",
      label: "Formes irrégulières",
      items: [
        "{a}bon{/a} → comparatif : {a}meilleur{/a} (pas : plus bon)",
        "{a}bien{/a} → comparatif : {a}mieux{/a} (pas : plus bien)",
        "{a}mauvais{/a} → comparatif : {a}pire{/a} ou {a}plus mauvais{/a}",
        "C'est {a}meilleur{/a} que ça. / Il va {a}mieux{/a} aujourd'hui.",
      ],
    },
  ],
  exercises: [],
};


const a1GrL25: GrammarLesson = {
  slug: "a1-gr-l25",
  code: "G.28",
  level: "A1",
  title: "Savoir ou connaître ?",
  theory: [
    { type: "heading", text: "SAVOIR ou CONNAÎTRE ?" },
    {
      type: "table",
      tables: [
        {
          verb: "savoir", accentForms: true,
          rows: [
            { pronoun: "je", form: "sais" },
            { pronoun: "tu", form: "sais" },
            { pronoun: "il / elle", form: "sait" },
            { pronoun: "nous", form: "savons" },
            { pronoun: "vous", form: "savez" },
            { pronoun: "ils / elles", form: "savent" },
          ],
        },
        {
          verb: "connaître", accentForms: true,
          rows: [
            { pronoun: "je", form: "connais" },
            { pronoun: "tu", form: "connais" },
            { pronoun: "il / elle", form: "connaît" },
            { pronoun: "nous", form: "connaissons" },
            { pronoun: "vous", form: "connaissez" },
            { pronoun: "ils / elles", form: "connaissent" },
          ],
        },
      ],
    },
    {
      type: "grid",
      headers: ["Verbe", "Utilisation", "Exemple"],
      boldFirstCol: true,
      rows: [
        ["{a}savoir{/a}", "+ infinitif (capacité)", "Je sais nager."],
        ["{a}savoir{/a}", "+ que / si / où… (fait)", "Je sais qu'il est français."],
        ["{a}savoir{/a}", "+ nom (information)", "Tu sais l'heure ?"],
        ["{a}connaître{/a}", "+ personne", "Je connais Marco."],
        ["{a}connaître{/a}", "+ lieu / chose", "Elle connaît bien Paris."],
        ["{a}connaître{/a}", "+ œuvre / domaine", "Tu connais ce film ?"],
      ],
    },
    {
      type: "highlight",
      label: "Règle simple",
      items: [
        "{a}Savoir{/a} = un fait, une information, une capacité.",
        "{a}Connaître{/a} = être familier avec une personne, un lieu ou une chose.",
      ],
    },
    {
      type: "highlight",
      label: "Attention",
      items: [
        "On ne dit pas {s}je sais Paris{/s} mais {a}je connais Paris{/a}.",
        "On ne dit pas {s}je connais nager{/s} mais {a}je sais nager{/a}.",
      ],
    },
  ],
  exercises: [],
};


// ── New A1 Lessons (G.17–G.19) ────────────────────────────────────────────────

const a1GrLCest: GrammarLesson = {
  slug: "a1-gr-l07",
  code: "G.18",
  level: "A1",
  title: "C'est / Il est",
  theory: [
    { type: "heading", text: "C'est ou Il/Elle est ?" },
    {
      type: "grid",
      headers: ["Forme", "Usage", "Exemple"],
      boldFirstCol: true,
      rows: [
        ["C'est", "article + nom → identifier", "C'est le professeur."],
        ["Ce sont", "article + nom pluriel → identifier", "Ce sont mes amis."],
        ["Il/Elle est", "adjectif ou profession → caractériser", "Il est très sympa."],
        ["Ils/Elles sont", "adjectif ou profession pluriel → caractériser", "Elles sont françaises."],
      ],
      transHeaders: {
        en: ["Form", "Usage", "Example"],
        ar: ["الصيغة", "الاستخدام", "مثال"],
        fa: ["فرم", "کاربرد", "مثال"],
        ti: ["ቅርጺ", "ኣጠቃቅማ", "ኣብነት"],
        uk: ["Форма", "Вживання", "Приклад"],
      },
      transRows: {
        en: [
          ["C'est", "article + noun → identify", "He is the teacher."],
          ["Ce sont", "article + noun (plural) → identify", "They are my friends."],
          ["Il/Elle est", "adjective or profession → characterise", "He is very nice."],
          ["Ils/Elles sont", "adjective or profession (plural) → characterise", "They are French."],
        ],
      },
    },
    {
      type: "rule",
      text: "Après «il/elle est» + profession : PAS d'article ! → «Il est médecin» (et non «Il est un médecin»).",
      examples: [
        { correct: "C'est un médecin. (identification avec article)" },
        { correct: "Il est médecin. (profession, sans article)" },
        { correct: "C'est Julia. Elle est très sympa." },
      ],
    },
    {
      type: "note",
      text: "C'est / Ce sont = on identifie. Il/Elle est = on caractérise.",
    },
  ],
  exercises: [],
};

const a1GrLQuel: GrammarLesson = {
  slug: "a1-gr-l08",
  code: "G.19",
  level: "A1",
  title: "L'interrogation avec quel(le)(s)",
  theory: [
    { type: "heading", text: "Quel, Quelle, Quels, Quelles" },
    {
      type: "grid",
      headers: ["", "Singulier", "Pluriel"],
      boldFirstCol: true,
      rows: [
        ["Masculin", "Quel", "Quels"],
        ["Féminin", "Quelle", "Quelles"],
      ],
      transHeaders: {
        en: ["", "Singular", "Plural"],
        ar: ["", "المفرد", "الجمع"],
        fa: ["", "مفرد", "جمع"],
        ti: ["", "ነጠላ", "ብዙሓት"],
        uk: ["", "Однина", "Множина"],
      },
      transRows: {
        en: [["Masculine", "Which/What", "Which/What"], ["Feminine", "Which/What", "Which/What"]],
      },
    },
    {
      type: "note",
      text: "Tous se prononcent [kɛl] — même prononciation !",
    },
    {
      type: "rule",
      text: "Quel(le)(s) + est/sont + nom ?",
      examples: [
        { correct: "Quel est ton prénom ?" },
        { correct: "Quelle est ta nationalité ?" },
        { correct: "Quels sont tes objectifs ?" },
        { correct: "Quelles sont tes langues ?" },
      ],
    },
    {
      type: "rule",
      text: "Quel(le)(s) + nom (sans verbe) ?",
      examples: [
        { correct: "Quelle heure est-il ?" },
        { correct: "Quel cours tu préfères ?" },
      ],
    },
  ],
  exercises: [],
};

const a1GrLFutur: GrammarLesson = {
  slug: "a1-gr-l09",
  code: "G.20",
  level: "A1",
  title: "Le futur proche",
  theory: [
    { type: "heading", text: "Le futur proche : aller + infinitif" },
    {
      type: "grid",
      headers: ["Sujet", "ALLER", "Exemple"],
      rows: [
        ["je", "vais", "Je vais partir."],
        ["tu", "vas", "Tu vas manger ?"],
        ["il / elle / on", "va", "Elle va arriver."],
        ["nous", "allons", "Nous allons travailler."],
        ["vous", "allez", "Vous allez voyager."],
        ["ils / elles", "vont", "Ils vont finir."],
      ],
      transHeaders: {
        en: ["Subject", "TO GO", "Example"],
        ar: ["الفاعل", "يذهب", "مثال"],
        fa: ["فاعل", "رفتن", "مثال"],
        ti: ["ተካኢ", "ምኻድ", "ኣብነት"],
        uk: ["Підмет", "ЙТИ", "Приклад"],
      },
      transRows: {
        en: [
          ["I", "am going to", "I am going to leave."],
          ["you", "are going to", "Are you going to eat?"],
          ["he / she / one", "is going to", "She is going to arrive."],
          ["we", "are going to", "We are going to work."],
          ["you (pl.)", "are going to", "You are going to travel."],
          ["they", "are going to", "They are going to finish."],
        ],
      },
    },
    {
      type: "rule",
      text: "Futur proche = aller (présent) + infinitif. Exprime une action proche ou planifiée.",
      examples: [
        { correct: "Ce soir, je vais regarder un film." },
        { correct: "Demain, nous allons visiter Paris." },
        { correct: "Je ne vais pas partir. (négatif)" },
      ],
    },
    {
      type: "note",
      text: "Forme négative : ne + aller + pas + infinitif → «Il ne va pas venir.»",
    },
  ],
  exercises: [],
};

const a1GrLImperatif: GrammarLesson = {
  slug: "a1-gr-l20",
  code: "G.21",
  level: "A1",
  title: "L'impératif",
  theory: [
    { type: "heading", text: "L'impératif : donner un ordre ou un conseil" },
    {
      type: "grid",
      headers: ["Personne", "Présent → Impératif", "Exemple"],
      rows: [
        ["tu", "-s supprimé pour -ER", "Tu parles → Parle !"],
        ["nous", "= présent", "Nous parlons → Parlons !"],
        ["vous", "= présent", "Vous parlez → Parlez !"],
      ],
      transHeaders: {
        en: ["Person", "Present → Imperative", "Example"],
        ar: ["الشخص", "المضارع → الأمر", "مثال"],
        fa: ["شخص", "حال → امر", "مثال"],
        ti: ["ሰብ", "ሕጂ → ኣዝዝ", "ኣብነት"],
        uk: ["Особа", "Теперішній → Наказовий", "Приклад"],
      },
    },
    {
      type: "grid",
      headers: ["", "parler", "finir", "prendre", "aller"],
      rows: [
        ["tu", "Parle !", "Finis !", "Prends !", "Va !"],
        ["nous", "Parlons !", "Finissons !", "Prenons !", "Allons !"],
        ["vous", "Parlez !", "Finissez !", "Prenez !", "Allez !"],
      ],
    },
    {
      type: "rule",
      text: "Négatif : ne + verbe + pas → «Ne parle pas !» / «Ne mangez pas !»",
      examples: [
        { correct: "Viens à partir de 20 h !" },
        { correct: "Ne venez pas à 19 h !" },
        { correct: "Prenons un taxi !" },
      ],
    },
    {
      type: "note",
      text: "Attention : ÊTRE → Sois / Soyons / Soyez — AVOIR → Aie / Ayons / Ayez",
    },
  ],
  exercises: [],
};

// ── A2 Lessons ────────────────────────────────────────────────────────────────

const a2GrL07: GrammarLesson = {
  slug: "a2-gr-l07",
  code: "G.32",
  level: "A2",
  title: "L'interrogation (questions fermées)",
  theory: [
    { type: "heading", text: "Les 3 formes de questions fermées" },
    {
      type: "plain_list",
      items: [
        "Une question {a}fermée{/a} a pour réponse oui / non / si.",
        "Il existe 3 structures, du plus familier au plus formel.",
      ],
    },
    {
      type: "grid",
      headers: ["Structure", "Registre", "Exemple"],
      boldFirstCol: true,
      rows: [
        ["{a}Intonation montante{/a}", "familier / oral", "Tu parles français {a}↗{/a} ?"],
        ["{a}Est-ce que{/a} + sujet + verbe", "neutre / courant", "Est-ce que tu parles français ?"],
        ["{a}Inversion{/a} verbe-sujet", "formel / écrit", "Parlez-vous français ?"],
      ],
    },
    { type: "heading", text: "Est-ce que (forme la plus courante)", sub: true, accent: true },
    {
      type: "grid",
      headers: ["Affirmatif", "Question avec est-ce que"],
      rows: [
        ["Tu aimes le café.", "{a}Est-ce que{/a} tu aimes le café ?"],
        ["Il est libre.", "{a}Est-ce qu'{/a}il est libre ?"],
        ["Vous avez le temps.", "{a}Est-ce que{/a} vous avez le temps ?"],
        ["Elles sont arrivées.", "{a}Est-ce qu'{/a}elles sont arrivées ?"],
      ],
    },
    { type: "heading", text: "L'inversion verbe-sujet (formel)", sub: true, accent: true },
    {
      type: "grid",
      headers: ["Affirmatif", "Inversion"],
      rows: [
        ["Vous parlez français.", "Parlez-{a}vous{/a} français ?"],
        ["Il comprend.", "Comprend-{a}il{/a} ?"],
        ["Elle va venir.", "Va-{a}t-elle{/a} venir ? (t euphonique)"],
        ["On peut entrer.", "Peut-{a}on{/a} entrer ?"],
      ],
    },
    {
      type: "highlight",
      label: "Le -t- euphonique",
      items: [
        "Quand le verbe se termine par une {a}voyelle{/a} + il / elle / on, on insère {a}-t-{/a}.",
        "va → va-{a}t{/a}-il / va-{a}t{/a}-elle / va-{a}t{/a}-on",
        "a → a-{a}t{/a}-il (avoir) / aime-{a}t{/a}-il (aimer)",
        "Cette règle s'applique uniquement à l'inversion.",
      ],
      noBulletItems: [0],
    },
    { type: "heading", text: "Questions avec un nom sujet (forme formelle)", sub: true, accent: true },
    {
      type: "grid",
      headers: ["Exemple", "Structure"],
      rows: [
        ["Marie vient-{a}elle{/a} demain ?", "Nom + verbe + pronom reprise-t-il/elle"],
        ["Paul a-{a}t-il{/a} appelé ?", "Nom + verbe + -t- + pronom"],
        ["Les enfants sont-{a}ils{/a} prêts ?", "Nom pluriel + verbe + pronom pluriel"],
      ],
    },
  ],
  exercises: [],
};

const a2GrL09: GrammarLesson = {
  slug: "a2-gr-l09",
  code: "G.33",
  level: "A2",
  title: "Répondre aux questions fermées",
  theory: [
    { type: "heading", text: "Oui, Non, Si" },
    {
      type: "grid",
      headers: ["Réponse", "Quand l'utiliser", "Exemple"],
      boldFirstCol: true,
      rows: [
        ["{a}Oui{/a}", "Question affirmative → réponse affirmative", "Tu aimes le café ? — {a}Oui{/a}, j'aime le café."],
        ["{a}Non{/a}", "Question (affirmative ou négative) → réponse négative", "Tu aimes le café ? — {a}Non{/a}, je n'aime pas le café."],
        ["{a}Si{/a}", "Question {a}négative{/a} → réponse affirmative", "Tu ne parles pas français ? — {a}Si{/a}, je parle français !"],
      ],
    },
    {
      type: "highlight",
      label: "SI : le mot clé",
      items: [
        "{a}Si{/a} s'utilise uniquement pour contredire une question négative.",
        "Tu ne viens pas ? — {a}Si{/a}, je viens ! (pas Oui !)",
        "Il ne travaille pas ? — {a}Si{/a}, il travaille !",
      ],
      noBulletItems: [0],
    },
    { type: "heading", text: "Moi aussi / Moi non plus / Moi si / Moi pas", sub: true, accent: true },
    {
      type: "grid",
      headers: ["Situation", "Réaction accord", "Réaction désaccord"],
      boldFirstCol: true,
      rows: [
        ["Affirmation {a}positive{/a}", "{a}Moi aussi !{/a}", "Moi pas. / Pas moi."],
        ["Affirmation {a}négative{/a}", "{a}Moi non plus !{/a}", "Moi si !"],
      ],
    },
    {
      type: "grid",
      headers: ["Ce qu'il dit", "Tu es d'accord", "Tu n'es pas d'accord"],
      rows: [
        ["J'aime le café.", "{a}Moi aussi !{/a}", "Moi pas."],
        ["Je ne fume pas.", "{a}Moi non plus !{/a}", "Moi si !"],
        ["Je n'aime pas ça.", "{a}Moi non plus !{/a}", "Moi si."],
        ["J'ai faim.", "{a}Moi aussi !{/a}", "Pas moi."],
      ],
    },
    { type: "heading", text: "Répondre avec des pronoms", sub: true, accent: true },
    {
      type: "grid",
      headers: ["Question", "Réponse courte"],
      rows: [
        ["Tu viens ce soir ?", "Oui, j'y viens. / Non, je n'y viens pas."],
        ["Elle a mangé ?", "Oui, elle a mangé. / Non, elle n'a pas mangé."],
        ["Vous avez des questions ?", "Oui, j'en ai une. / Non, je n'en ai pas."],
      ],
    },
  ],
  exercises: [],
};

const a2GrL11: GrammarLesson = {
  slug: "a2-gr-l11",
  code: "G.37",
  level: "A2",
  title: "Les adjectifs — généralités",
  theory: [
    { type: "heading", text: "L'accord des adjectifs qualificatifs" },
    {
      type: "plain_list",
      items: [
        "L'adjectif s'accorde toujours en {a}genre{/a} (masculin / féminin) et en {a}nombre{/a} (singulier / pluriel) avec le nom qu'il qualifie.",
      ],
    },
    {
      type: "grid",
      headers: ["", "Singulier", "Pluriel"],
      boldFirstCol: true,
      rows: [
        ["{a}Masculin{/a}", "grand", "grand{a}s{/a}"],
        ["{a}Féminin{/a}", "grand{a}e{/a}", "grand{a}es{/a}"],
      ],
    },
    { type: "heading", text: "Formation du féminin", sub: true, accent: true },
    {
      type: "grid",
      headers: ["Règle", "Masculin", "Féminin"],
      boldFirstCol: true,
      rows: [
        ["Règle générale : + {a}-e{/a}", "petit", "petite"],
        ["Déjà en -e : {a}invariable{/a}", "rapide", "rapide"],
        ["{a}-eux → -euse{/a}", "heureux", "heureuse"],
        ["{a}-eur → -euse{/a} (courant)", "travailleur", "travailleuse"],
        ["{a}-eur → -eure{/a} (comparatif)", "meilleur", "meilleure"],
        ["{a}-ien → -ienne{/a}", "ancien", "ancienne"],
        ["{a}-el → -elle{/a}", "naturel", "naturelle"],
        ["{a}-er → -ère{/a}", "premier", "première"],
        ["{a}-et → -ète / -ette{/a}", "secret", "secrète"],
        ["{a}-if → -ive{/a}", "actif", "active"],
        ["{a}-al → -ale{/a}", "normal", "normale"],
      ],
    },
    { type: "heading", text: "Formation du pluriel", sub: true, accent: true },
    {
      type: "grid",
      headers: ["Règle", "Singulier", "Pluriel"],
      boldFirstCol: true,
      rows: [
        ["Règle générale : + {a}-s{/a}", "grand", "grands"],
        ["Déjà en -s ou -x : {a}invariable{/a}", "heureux", "heureux"],
        ["{a}-al → -aux{/a}", "normal", "normaux"],
        ["{a}-eau → -eaux{/a}", "beau", "beaux"],
      ],
    },
    {
      type: "highlight",
      label: "Adjectifs invariables",
      items: [
        "Les adjectifs de couleur dérivés d'un nom sont {a}invariables{/a}.",
        "une robe {a}orange{/a} / des chaussures {a}marron{/a} / des yeux {a}noisette{/a}",
        "Exception : rose, mauve, écarlate, pourpre → accordés.",
      ],
      noBulletItems: [0],
    },
  ],
  exercises: [],
};

const a2GrL12: GrammarLesson = {
  slug: "a2-gr-l12",
  code: "G.38",
  level: "A2",
  title: "Les adjectifs — cas particuliers et place",
  theory: [
    { type: "heading", text: "Adjectifs à trois formes masculines" },
    {
      type: "plain_list",
      items: [
        "Certains adjectifs ont une forme masculine spéciale devant une {a}voyelle ou h muet{/a}.",
      ],
    },
    {
      type: "grid",
      headers: ["Masculin devant cons.", "Masculin devant voyelle/h muet", "Féminin", "Pluriel masc."],
      rows: [
        ["{a}beau{/a}", "{a}bel{/a}", "belle", "beaux"],
        ["{a}nouveau{/a}", "{a}nouvel{/a}", "nouvelle", "nouveaux"],
        ["{a}vieux{/a}", "{a}vieil{/a}", "vieille", "vieux"],
        ["{a}fou{/a}", "{a}fol{/a}", "folle", "fous"],
        ["{a}mou{/a}", "{a}mol{/a}", "molle", "mous"],
      ],
    },
    {
      type: "grid",
      headers: ["Devant consonne", "Devant voyelle / h muet"],
      rows: [
        ["un {a}beau{/a} film", "un {a}bel{/a} homme"],
        ["un {a}nouveau{/a} livre", "un {a}nouvel{/a} appartement"],
        ["un {a}vieux{/a} bâtiment", "un {a}vieil{/a} arbre"],
      ],
    },
    { type: "heading", text: "La place des adjectifs", sub: true, accent: true },
    {
      type: "plain_list",
      items: [
        "En français, la majorité des adjectifs se placent {a}après{/a} le nom.",
        "Mais un groupe d'adjectifs courants se placent {a}avant{/a} le nom.",
      ],
    },
    {
      type: "grid",
      headers: ["Place", "Catégorie", "Adjectifs"],
      boldFirstCol: true,
      rows: [
        ["{a}Avant{/a} le nom", "beauté / âge / bien / mal / taille", "beau, joli, jeune, vieux, bon, mauvais, grand, petit, gros"],
        ["{a}Après{/a} le nom", "nationalité, couleur, forme, religion", "français, bleu, rond, catholique"],
        ["{a}Après{/a} le nom", "adjectifs longs (participiaux…)", "intéressant, fatigant, extraordinaire"],
      ],
    },
    {
      type: "highlight",
      label: "Adjectifs qui changent de sens selon la place",
      items: [
        "{a}ancien{/a} : un {a}ancien{/a} collègue (= ex-) / un bâtiment {a}ancien{/a} (= vieux)",
        "{a}cher{/a} : un {a}cher{/a} ami (= bien-aimé) / un restaurant {a}cher{/a} (= coûteux)",
        "{a}grand{/a} : un {a}grand{/a} homme (= illustre) / un homme {a}grand{/a} (= de haute taille)",
        "{a}propre{/a} : ma {a}propre{/a} voiture (= à moi) / une voiture {a}propre{/a} (= clean)",
        "{a}pauvre{/a} : ce {a}pauvre{/a} garçon (= à plaindre) / un garçon {a}pauvre{/a} (= sans argent)",
      ],
    },
  ],
  exercises: [],
};

const a2GrL18: GrammarLesson = {
  slug: "a2-gr-l18",
  code: "G.36",
  level: "A2",
  title: "Les prépositions de lieu",
  theory: [
    { type: "heading", text: "Les prépositions de lieu" },
    {
      type: "grid",
      headers: ["Préposition", "Sens", "Exemple"],
      boldFirstCol: true,
      rows: [
        ["{a}dans{/a}", "à l'intérieur", "Le chat est {a}dans{/a} la boîte."],
        ["{a}sur{/a}", "en contact avec la surface", "Le livre est {a}sur{/a} la table."],
        ["{a}sous{/a}", "en dessous", "Les clés sont {a}sous{/a} le canapé."],
        ["{a}devant{/a}", "en avant de", "Il attend {a}devant{/a} l'entrée."],
        ["{a}derrière{/a}", "en arrière de", "Le jardin est {a}derrière{/a} la maison."],
        ["{a}entre{/a}", "au milieu de deux éléments", "La banque est {a}entre{/a} la boulangerie et la pharmacie."],
        ["{a}en face de{/a}", "vis-à-vis", "La mairie est {a}en face de{/a} l'église."],
        ["{a}à côté de{/a}", "à proximité immédiate", "L'arrêt est {a}à côté de{/a} la gare."],
        ["{a}près de{/a}", "à courte distance", "L'hôtel est {a}près de{/a} la plage."],
        ["{a}loin de{/a}", "à grande distance", "La gare est {a}loin du{/a} centre."],
        ["{a}au-dessus de{/a}", "plus haut que", "L'appartement est {a}au-dessus de{/a} la boulangerie."],
        ["{a}au-dessous de{/a}", "plus bas que", "La cave est {a}au-dessous de{/a} l'appartement."],
      ],
    },
    {
      type: "highlight",
      label: "Contractions obligatoires avec de",
      items: [
        "{a}de + le{/a} → {a}du{/a} : loin {a}du{/a} centre (pas de le)",
        "{a}de + les{/a} → {a}des{/a} : près {a}des{/a} magasins (pas de les)",
        "{a}de + la{/a} → de la : à côté {a}de la{/a} gare (pas de contraction)",
        "{a}de + l'{/a} → de l' : en face {a}de l'{/a}école (pas de contraction)",
      ],
    },
    { type: "heading", text: "Prépositions avec les villes et pays", sub: true, accent: true },
    {
      type: "grid",
      headers: ["Type", "Préposition", "Exemple"],
      boldFirstCol: true,
      rows: [
        ["Ville", "{a}à{/a}", "Je suis {a}à{/a} Paris."],
        ["Pays féminin", "{a}en{/a}", "Je suis {a}en{/a} France."],
        ["Pays masculin", "{a}au{/a}", "Je suis {a}au{/a} Maroc."],
        ["Pays pluriel", "{a}aux{/a}", "Je suis {a}aux{/a} États-Unis."],
        ["Île / région", "{a}à / en{/a}", "à Madagascar / en Corse"],
      ],
    },
  ],
  exercises: [],
};

const a2GrL19: GrammarLesson = {
  slug: "a2-gr-l19",
  code: "G.39",
  level: "A2",
  title: "Les pronoms relatifs qui et que",
  theory: [
    { type: "heading", text: "Les pronoms relatifs : relier deux phrases" },
    {
      type: "plain_list",
      items: [
        "Un pronom relatif permet de {a}relier deux phrases{/a} en évitant une répétition.",
        "Les deux principaux : {a}qui{/a} (sujet) et {a}que / qu'{/a} (objet direct).",
      ],
    },
    {
      type: "grid",
      headers: ["Pronom", "Fonction", "Ce qu'il suit directement"],
      boldFirstCol: true,
      rows: [
        ["{a}qui{/a}", "sujet de la proposition relative", "qui + {a}verbe{/a} directement"],
        ["{a}que / qu'{/a}", "objet direct de la proposition relative", "que + {a}sujet + verbe{/a}"],
      ],
    },
    { type: "heading", text: "QUI — sujet", sub: true, accent: true },
    {
      type: "grid",
      headers: ["Deux phrases", "→ Phrase avec QUI"],
      rows: [
        ["J'ai un ami. Cet ami parle japonais.", "J'ai un ami {a}qui{/a} parle japonais."],
        ["C'est une école. Cette école est connue.", "C'est une école {a}qui{/a} est connue."],
        ["Je cherche un appartement. Il est proche du centre.", "Je cherche un appartement {a}qui{/a} est proche du centre."],
      ],
    },
    { type: "heading", text: "QUE / QU' — objet direct", sub: true, accent: true },
    {
      type: "grid",
      headers: ["Deux phrases", "→ Phrase avec QUE"],
      rows: [
        ["C'est un film. J'aime ce film.", "C'est un film {a}que{/a} j'aime."],
        ["Voici la règle. Nous apprenons cette règle.", "Voici la règle {a}que{/a} nous apprenons."],
        ["C'est un livre. Il lit ce livre.", "C'est un livre {a}qu'{/a}il lit."],
      ],
    },
    {
      type: "highlight",
      label: "Comment choisir : qui ou que ?",
      items: [
        "{a}QUI{/a} → le pronom est {a}sujet{/a} : le verbe suivant n'a pas de sujet explicite.",
        "{a}QUE{/a} → le pronom est {a}objet{/a} : le verbe suivant a déjà son sujet.",
        "Astuce : si après le pronom vient directement un verbe conjugué → {a}QUI{/a}.",
        "Astuce : si après le pronom vient un sujet puis un verbe → {a}QUE{/a}.",
      ],
    },
    { type: "heading", text: "Accord du participe avec QUE au passé composé", sub: true, accent: true },
    {
      type: "grid",
      headers: ["Exemple", "Accord"],
      rows: [
        ["La lettre qu'il a écrit{a}e{/a}.", "que = la lettre (fém.) → écrite"],
        ["Les films que j'ai regard{a}és{/a}.", "que = les films (masc. plur.) → regardés"],
        ["Les filles qu'il a invit{a}ées{/a}.", "que = les filles (fém. plur.) → invitées"],
      ],
    },
  ],
  exercises: [],
};

const a2GrL25: GrammarLesson = {
  slug: "a2-gr-l25",
  code: "G.40",
  level: "A2",
  title: "La négation — ne…pas, ne…plus, ne…que",
  theory: [
    { type: "heading", text: "Les formes de négation courantes" },
    {
      type: "grid",
      headers: ["Négation", "Sens", "Exemple"],
      boldFirstCol: true,
      rows: [
        ["{a}ne … pas{/a}", "action inexistante / absente", "Je {a}ne{/a} parle {a}pas{/a} espagnol."],
        ["{a}ne … plus{/a}", "action qui a cessé", "Il {a}ne{/a} travaille {a}plus{/a} ici."],
        ["{a}ne … que{/a}", "restriction (= seulement)", "Je {a}ne{/a} mange {a}que{/a} des légumes."],
      ],
    },
    { type: "heading", text: "Ne … pas", sub: true, accent: true },
    {
      type: "grid",
      headers: ["Temps", "Structure", "Exemple"],
      boldFirstCol: true,
      rows: [
        ["Présent", "ne + verbe + pas", "Je {a}ne{/a} mange {a}pas{/a}."],
        ["Passé composé", "ne + auxiliaire + pas + participe", "Je {a}n'{/a}ai {a}pas{/a} mangé."],
        ["Futur proche", "ne + aller + pas + infinitif", "Je {a}ne{/a} vais {a}pas{/a} manger."],
        ["Infinitif", "ne pas + infinitif (ensemble)", "{a}Ne pas{/a} manger avant 12h."],
      ],
    },
    { type: "heading", text: "Ne … plus", sub: true, accent: true },
    {
      type: "plain_list",
      items: [
        "{a}ne … plus{/a} signifie que l'action s'est arrêtée.",
        "Implique qu'avant c'était le cas, maintenant non.",
      ],
    },
    {
      type: "grid",
      headers: ["Affirmatif (avant)", "Négatif (maintenant)"],
      rows: [
        ["Je fume.", "Je {a}ne{/a} fume {a}plus{/a}."],
        ["Il habite ici.", "Il {a}n'{/a}habite {a}plus{/a} ici."],
        ["Elle boit du café.", "Elle {a}ne{/a} boit {a}plus{/a} de café."],
      ],
    },
    { type: "heading", text: "Ne … que (restriction)", sub: true, accent: true },
    {
      type: "plain_list",
      items: [
        "{a}ne … que{/a} = seulement. Ce n'est {a}pas une vraie négation{/a} — le sens est positif mais limité.",
        "que se place juste avant l'élément restreint.",
      ],
    },
    {
      type: "grid",
      headers: ["Avec seulement", "Avec ne … que"],
      rows: [
        ["Je mange seulement des légumes.", "Je {a}ne{/a} mange {a}que{/a} des légumes."],
        ["Il reste seulement 5 minutes.", "Il {a}ne{/a} reste {a}que{/a} 5 minutes."],
        ["Elle a seulement 20 ans.", "Elle {a}n'{/a}a {a}que{/a} 20 ans."],
      ],
    },
    {
      type: "highlight",
      label: "Articles après la négation",
      items: [
        "Avec {a}ne…pas / ne…plus{/a} : un/une/des/du/de la → {a}de{/a} (ou d' devant voyelle).",
        "Je mange du pain → Je {a}ne{/a} mange {a}pas de{/a} pain.",
        "Avec {a}ne…que{/a} : l'article ne change pas.",
        "Je mange {a}que du{/a} pain. (que garde l'article)",
      ],
      noBulletItems: [0],
    },
  ],
  exercises: [],
};

const a2GrL35: GrammarLesson = {
  slug: "a2-gr-l35",
  code: "G.42",
  level: "A2",
  title: "Les pronoms COD et COI",
  theory: [
    { type: "heading", text: "Les pronoms COD et COI" },
    {
      type: "plain_list",
      items: [
        "Les pronoms personnels remplacent un {a}nom déjà mentionné{/a} pour éviter les répétitions.",
        "{a}COD{/a} = Complément d'Objet Direct (sans préposition).",
        "{a}COI{/a} = Complément d'Objet Indirect (avec la préposition {a}à{/a}).",
      ],
    },
    {
      type: "grid",
      headers: ["Personne", "COD", "COI"],
      boldFirstCol: true,
      rows: [
        ["1re sing.", "{a}me / m'{/a}", "{a}me / m'{/a}"],
        ["2e sing.", "{a}te / t'{/a}", "{a}te / t'{/a}"],
        ["3e sing. masc.", "{a}le / l'{/a}", "{a}lui{/a}"],
        ["3e sing. fém.", "{a}la / l'{/a}", "{a}lui{/a}"],
        ["1re plur.", "{a}nous{/a}", "{a}nous{/a}"],
        ["2e plur.", "{a}vous{/a}", "{a}vous{/a}"],
        ["3e plur.", "{a}les{/a}", "{a}leur{/a}"],
      ],
    },
    { type: "heading", text: "Comment identifier COD vs COI ?", sub: true, accent: true },
    {
      type: "grid",
      headers: ["Question à poser", "Réponse = …", "Pronom"],
      boldFirstCol: true,
      rows: [
        ["Je vois {a}qui / quoi ?{/a}", "COD (sans à)", "le, la, les, me, te…"],
        ["Je parle {a}à qui ?{/a}", "COI (avec à)", "lui, leur, me, te…"],
      ],
    },
    {
      type: "grid",
      headers: ["Phrase originale", "→ Avec pronom"],
      rows: [
        ["J'appelle Marco.", "Je {a}le{/a} appelle. → Je {a}l'{/a}appelle. (COD)"],
        ["Je parle à Marco.", "Je {a}lui{/a} parle. (COI)"],
        ["Je regarde le film.", "Je {a}le{/a} regarde. (COD)"],
        ["J'écris à mes amis.", "Je {a}leur{/a} écris. (COI)"],
        ["Il nous aide.", "Il {a}nous{/a} aide. (COD)"],
        ["Elle te téléphone.", "Elle {a}te{/a} téléphone. (COI)"],
      ],
    },
    { type: "heading", text: "Place du pronom", sub: true, accent: true },
    {
      type: "plain_list",
      items: [
        "Le pronom se place {a}avant{/a} le verbe conjugué.",
        "Au passé composé : avant l'auxiliaire.",
        "Avec infinitif : avant l'infinitif.",
      ],
    },
    {
      type: "grid",
      headers: ["Temps", "Exemple"],
      boldFirstCol: true,
      rows: [
        ["Présent", "Je {a}le{/a} vois."],
        ["Passé composé", "Je {a}l'{/a}ai vu."],
        ["Futur proche", "Je vais {a}le{/a} voir."],
        ["Négatif", "Je {a}ne{/a} {a}le{/a} vois {a}pas{/a}."],
        ["Impératif affirmatif", "Vois-{a}le{/a} ! (pronom après)"],
        ["Impératif négatif", "Ne {a}le{/a} vois {a}pas{/a} !"],
      ],
    },
  ],
  exercises: [],
};

const a2GrL36: GrammarLesson = {
  slug: "a2-gr-l36",
  code: "G.43",
  level: "A2",
  title: "Les pronoms Y et EN",
  theory: [
    { type: "heading", text: "Le pronom Y" },
    {
      type: "plain_list",
      items: [
        "{a}Y{/a} remplace un lieu ou un groupe {a}à + chose{/a} (verbes construits avec à).",
        "Il répond à la question : {a}où ?{/a} ou {a}à quoi ?{/a}",
      ],
    },
    {
      type: "grid",
      headers: ["Ce que Y remplace", "Phrase originale", "→ Avec Y"],
      boldFirstCol: true,
      rows: [
        ["Lieu ({a}à / en / dans…{/a})", "Je vais à Paris.", "J'{a}y{/a} vais."],
        ["Lieu ({a}à / en / dans…{/a})", "Il est à la maison.", "Il {a}y{/a} est."],
        ["Chose ({a}à + nom{/a})", "Je pense à ce projet.", "J'{a}y{/a} pense."],
        ["Chose ({a}à + nom{/a})", "Tu réponds à cette question ?", "Tu {a}y{/a} réponds ?"],
      ],
    },
    {
      type: "highlight",
      label: "Attention : Y ne remplace pas une personne",
      items: [
        "Je pense à Paul → Je pense {a}à lui{/a}. (pas : J'y pense)",
        "Pour les personnes, on utilise {a}à lui / à elle / à eux{/a}.",
        "Pour les choses et les lieux : {a}y{/a}.",
      ],
      noBulletItems: [0],
    },
    { type: "heading", text: "Le pronom EN", sub: true, accent: true },
    {
      type: "plain_list",
      items: [
        "{a}EN{/a} remplace un groupe {a}de + nom{/a} ou un nom avec article partitif / indéfini.",
        "Il répond à la question : {a}de quoi ? combien ?{/a}",
      ],
    },
    {
      type: "grid",
      headers: ["Ce que EN remplace", "Phrase originale", "→ Avec EN"],
      boldFirstCol: true,
      rows: [
        ["Partitif (du / de la / de l')", "Je mange du pain.", "J'{a}en{/a} mange."],
        ["Article indéfini (des / un / une)", "J'ai des amis.", "J'{a}en{/a} ai."],
        ["De + nom (verbe + de)", "J'ai besoin de temps.", "J'{a}en{/a} ai besoin."],
        ["De + lieu", "Je reviens de Paris.", "J'{a}en{/a} reviens."],
      ],
    },
    {
      type: "plain_list",
      items: [
        "Avec une quantité, on garde le {a}chiffre ou l'adverbe de quantité{/a} après le verbe.",
      ],
    },
    {
      type: "grid",
      headers: ["Phrase originale", "→ Avec EN"],
      rows: [
        ["J'ai deux chiens.", "J'{a}en{/a} ai {a}deux{/a}."],
        ["Je veux un café.", "J'{a}en{/a} veux {a}un{/a}."],
        ["Elle a beaucoup de travail.", "Elle {a}en{/a} a {a}beaucoup{/a}."],
      ],
    },
    { type: "heading", text: "Place de Y et EN", sub: true, accent: true },
    {
      type: "grid",
      headers: ["Temps", "Exemple avec Y", "Exemple avec EN"],
      boldFirstCol: true,
      rows: [
        ["Présent", "J'{a}y{/a} vais.", "J'{a}en{/a} mange."],
        ["Passé composé", "J'{a}y{/a} suis allé.", "J'{a}en{/a} ai mangé."],
        ["Futur proche", "Je vais {a}y{/a} aller.", "Je vais {a}en{/a} manger."],
        ["Négatif", "Je n'{a}y{/a} vais pas.", "Je n'{a}en{/a} mange pas."],
        ["Impératif affirmatif", "Vas-{a}y{/a} !", "Manges-{a}en{/a} !"],
      ],
    },
  ],
  exercises: [],
};

const a2GrL39: GrammarLesson = {
  slug: "a2-gr-l39",
  code: "G.47",
  level: "A2",
  title: "Le comparatif",
  theory: [
    { type: "heading", text: "Le comparatif" },
    {
      type: "plain_list",
      items: [
        "Le comparatif sert à {a}comparer{/a} deux éléments.",
        "Il existe 3 degrés : {a}supériorité, égalité, infériorité{/a}.",
      ],
    },
    {
      type: "grid",
      headers: ["Degré", "Avec adjectif / adverbe", "Avec verbe", "Avec nom"],
      boldFirstCol: true,
      rows: [
        ["{a}Supériorité{/a}", "{a}plus … que{/a}", "verbe + {a}plus que{/a}", "{a}plus de … que{/a}"],
        ["{a}Égalité{/a}", "{a}aussi … que{/a}", "verbe + {a}autant que{/a}", "{a}autant de … que{/a}"],
        ["{a}Infériorité{/a}", "{a}moins … que{/a}", "verbe + {a}moins que{/a}", "{a}moins de … que{/a}"],
      ],
    },
    { type: "heading", text: "Comparatif d'adjectifs", sub: true, accent: true },
    {
      type: "grid",
      headers: ["Degré", "Exemple"],
      boldFirstCol: true,
      rows: [
        ["Supériorité", "Paris est {a}plus grande que{/a} Lyon."],
        ["Égalité", "Cette ville est {a}aussi belle que{/a} l'autre."],
        ["Infériorité", "Ce restaurant est {a}moins cher que{/a} celui-là."],
      ],
    },
    { type: "heading", text: "Comparatif de verbes", sub: true, accent: true },
    {
      type: "grid",
      headers: ["Degré", "Exemple"],
      boldFirstCol: true,
      rows: [
        ["Supériorité", "Je travaille {a}plus que{/a} toi."],
        ["Égalité", "Il dort {a}autant que{/a} moi."],
        ["Infériorité", "Elle mange {a}moins que{/a} lui."],
      ],
    },
    { type: "heading", text: "Comparatif de noms (quantité)", sub: true, accent: true },
    {
      type: "grid",
      headers: ["Degré", "Exemple"],
      boldFirstCol: true,
      rows: [
        ["Supériorité", "Il a {a}plus de{/a} patience {a}que{/a} moi."],
        ["Égalité", "J'ai {a}autant de{/a} travail {a}que{/a} toi."],
        ["Infériorité", "Elle gagne {a}moins d'{/a}argent {a}que{/a} lui."],
      ],
    },
    { type: "heading", text: "Formes irrégulières (à mémoriser)", sub: true, accent: true },
    {
      type: "grid",
      headers: ["Adjectif / adverbe", "Comparatif de supériorité", "Exemple"],
      boldFirstCol: true,
      rows: [
        ["{a}bon(ne){/a}", "{a}meilleur(e)(s){/a} que", "Ce vin est {a}meilleur que{/a} l'autre. ({s}plus bon{/s})"],
        ["{a}mauvais(e){/a}", "{a}pire{/a} que (ou plus mauvais)", "C'est {a}pire que{/a} je pensais."],
        ["{a}bien{/a}", "{a}mieux{/a} que", "Elle parle {a}mieux que{/a} lui. ({s}plus bien{/s})"],
        ["{a}peu{/a}", "{a}moins{/a} que", "Je dors {a}moins que{/a} toi."],
      ],
    },
    {
      type: "highlight",
      label: "Le superlatif (pour aller plus loin)",
      items: [
        "Superlatif relatif : le / la / les + {a}plus / moins{/a} + adj.",
        "C'est {a}le plus beau{/a} film de l'année.",
        "Elle est {a}la moins rapide{/a} du groupe.",
        "Superlatif de bon : {a}le meilleur / la meilleure{/a}.",
      ],
    },
  ],
  exercises: [],
};

const a2GrL42: GrammarLesson = {
  slug: "a2-gr-l42",
  code: "G.41",
  level: "A2",
  title: "La négation — ne…jamais, ne…rien, ne…personne",
  theory: [
    { type: "heading", text: "Négation totale : jamais, rien, personne" },
    {
      type: "grid",
      headers: ["Négation", "Sens", "Contraire affirmatif"],
      boldFirstCol: true,
      rows: [
        ["{a}ne … jamais{/a}", "à aucun moment", "toujours / souvent / parfois"],
        ["{a}ne … rien{/a}", "aucune chose", "quelque chose / tout"],
        ["{a}ne … personne{/a}", "aucune personne", "quelqu'un / tout le monde"],
      ],
    },
    { type: "heading", text: "Au présent", sub: true, accent: true },
    {
      type: "grid",
      headers: ["Affirmatif", "Négatif"],
      rows: [
        ["Je mange toujours de la viande.", "Je {a}ne{/a} mange {a}jamais{/a} de viande."],
        ["Je fais quelque chose ce soir.", "Je {a}ne{/a} fais {a}rien{/a} ce soir."],
        ["Je connais quelqu'un ici.", "Je {a}ne{/a} connais {a}personne{/a} ici."],
      ],
    },
    { type: "heading", text: "Au passé composé", sub: true, accent: true },
    {
      type: "plain_list",
      items: [
        "{a}jamais et rien{/a} se placent entre l'auxiliaire et le participe.",
        "{a}personne{/a} se place après le participe.",
      ],
    },
    {
      type: "grid",
      headers: ["Négation", "Exemple au passé composé"],
      boldFirstCol: true,
      rows: [
        ["{a}jamais{/a}", "Je {a}n'{/a}ai {a}jamais{/a} voyagé."],
        ["{a}rien{/a}", "Il {a}n'{/a}a {a}rien{/a} dit."],
        ["{a}personne{/a}", "Nous {a}n'{/a}avons vu {a}personne{/a}."],
      ],
    },
    { type: "heading", text: "Rien et Personne comme sujets", sub: true, accent: true },
    {
      type: "plain_list",
      items: [
        "Quand {a}rien{/a} ou {a}personne{/a} est sujet, il se place en tête de phrase, et le verbe garde {a}ne{/a}.",
      ],
    },
    {
      type: "grid",
      headers: ["Structure", "Exemple"],
      rows: [
        ["{a}Rien{/a} + ne + verbe", "{a}Rien{/a} n'est impossible."],
        ["{a}Personne{/a} + ne + verbe", "{a}Personne{/a} ne parle."],
        ["{a}Rien{/a} + n'a + participe", "{a}Rien{/a} n'a changé."],
      ],
    },
    {
      type: "highlight",
      label: "Cumul de négations",
      items: [
        "On peut combiner {a}ne…jamais…rien{/a} ou {a}ne…jamais…personne{/a}.",
        "Je {a}ne{/a} vois {a}jamais{/a} {a}personne{/a} ici.",
        "Il {a}ne{/a} fait {a}jamais{/a} {a}rien{/a}.",
        "En français, le double négatif {a}renforce{/a} la négation (contrairement à l'anglais).",
      ],
    },
  ],
  exercises: [],
};

const a2GrL52: GrammarLesson = {
  slug: "a2-gr-l52",
  code: "G.48",
  level: "A2",
  title: "La cause et la conséquence",
  theory: [
    { type: "heading", text: "Exprimer la cause" },
    {
      type: "plain_list",
      items: [
        "La cause explique {a}pourquoi{/a} quelque chose se passe.",
        "On peut exprimer la cause avec différents mots selon le registre et la position dans la phrase.",
      ],
    },
    {
      type: "grid",
      headers: ["Connecteur", "Structure", "Registre", "Exemple"],
      boldFirstCol: true,
      rows: [
        ["{a}parce que{/a}", "+ sujet + verbe (milieu ou fin)", "courant", "Je reste parce qu'il pleut."],
        ["{a}car{/a}", "+ sujet + verbe (après virgule)", "soutenu / écrit", "Je reste, car il pleut."],
        ["{a}comme{/a}", "début de phrase uniquement", "courant", "Comme il pleut, je reste."],
        ["{a}puisque{/a}", "+ sujet + verbe (cause évidente)", "courant", "Puisque tu es là, restons."],
        ["{a}à cause de{/a}", "+ nom (connotation neutre/négative)", "courant", "Il est en retard à cause du trafic."],
        ["{a}grâce à{/a}", "+ nom (connotation positive)", "courant", "Elle a réussi grâce à son travail."],
        ["{a}en raison de{/a}", "+ nom (cause officielle)", "soutenu", "Fermeture en raison des travaux."],
      ],
    },
    { type: "heading", text: "Exprimer la conséquence", sub: true, accent: true },
    {
      type: "plain_list",
      items: [
        "La conséquence exprime {a}ce qui résulte{/a} d'une cause.",
      ],
    },
    {
      type: "grid",
      headers: ["Connecteur", "Structure", "Registre", "Exemple"],
      boldFirstCol: true,
      rows: [
        ["{a}donc{/a}", "virgule + donc + sujet + verbe", "courant", "Il pleut, {a}donc{/a} je prends un parapluie."],
        ["{a}alors{/a}", "virgule + alors + sujet + verbe", "familier", "J'ai faim, {a}alors{/a} je mange."],
        ["{a}c'est pourquoi{/a}", "phrase + c'est pourquoi + sujet + verbe", "courant/soutenu", "Il fait froid, {a}c'est pourquoi{/a} je mets un manteau."],
        ["{a}par conséquent{/a}", "phrase + par conséquent + sujet + verbe", "soutenu / écrit", "Il est absent. {a}Par conséquent{/a}, la réunion est annulée."],
        ["{a}du coup{/a}", "virgule + du coup + sujet + verbe", "familier / oral", "Il est parti tôt, {a}du coup{/a} j'ai fini seul."],
        ["{a}si bien que{/a}", "+ sujet + verbe", "soutenu", "Il a beaucoup étudié, {a}si bien qu'{/a}il a réussi."],
      ],
    },
    {
      type: "highlight",
      label: "À cause de vs Grâce à",
      items: [
        "{a}À cause de{/a} → connotation {a}négative{/a} : Il a échoué {a}à cause de{/a} sa paresse.",
        "{a}Grâce à{/a} → connotation {a}positive{/a} : Il a réussi {a}grâce à{/a} ses efforts.",
        "Les deux sont suivis d'un nom ou d'un pronom tonique.",
      ],
      noBulletItems: [0],
    },
    { type: "heading", text: "Construire un raisonnement", sub: true, accent: true },
    {
      type: "grid",
      headers: ["Structure", "Exemple"],
      rows: [
        ["Cause → conséquence", "Il pleut {a}donc{/a} je reste."],
        ["Conséquence ← cause", "Je reste {a}parce qu'{/a}il pleut."],
        ["Cause + conséquence liées", "{a}Comme{/a} il pleut, {a}c'est pourquoi{/a} je reste."],
      ],
    },
  ],
  exercises: [],
};


const a1GrInterro: GrammarLesson = {
  slug: "a1-gr-interro",
  code: "G.8",
  level: "A1",
  title: "L'interrogation de base",
  theory: [
    { type: "heading", text: "Poser une question", trans: { en: "Asking a question", ar: "طرح سؤال", fa: "پرسیدن سوال", ti: "ሕቶ ምሓታት", uk: "Постановка питання" } },
    {
      type: "plain_list",
      items: [
        "Il y a plusieurs façons de poser une question en français.",
        "La plus simple : monter la voix à la fin.",
        "La plus courante : utiliser {a}est-ce que{/a}.",
      ],
      transItems: {
        en: ["There are several ways to ask a question in French.", "The simplest: raise your voice at the end.", "The most common: use {a}est-ce que{/a}."],
        ar: ["هناك عدة طرق لطرح سؤال بالفرنسية.", "الأبسط: رفع الصوت في النهاية.", "الأكثر شيوعاً: استخدام {a}est-ce que{/a}."],
        fa: ["روش‌های مختلفی برای پرسیدن سوال در فرانسه وجود دارد.", "ساده‌ترین: بالا بردن صدا در پایان.", "رایج‌ترین: استفاده از {a}est-ce que{/a}."],
        ti: ["ኣብ ፈረንሳዊ ሕቶ ንምሓታት ብዙሕ መንገድታት ኣሎ.", "ዝቐለለ: ድምጺ ኣብ መወዳእታ ምድራዕ.", "ዝበዝሐ: {a}est-ce que{/a} ምጥቃም."],
        uk: ["Є кілька способів поставити питання французькою.", "Найпростіший: підвищити голос наприкінці.", "Найпоширеніший: використовувати {a}est-ce que{/a}."],
      },
    },
    {
      type: "plain_list",
      items: [
        "{a}Est-ce que{/a} + sujet + verbe ?",
        "Devant une voyelle : {a}est-ce qu'{/a}",
      ],
      transItems: {
        en: ["{a}Est-ce que{/a} + subject + verb ?", "Before a vowel: {a}est-ce qu'{/a}"],
        ar: ["{a}Est-ce que{/a} + الفاعل + الفعل ?", "قبل حرف علة: {a}est-ce qu'{/a}"],
        fa: ["{a}Est-ce que{/a} + فاعل + فعل ?", "قبل از حرف صدادار: {a}est-ce qu'{/a}"],
        ti: ["{a}Est-ce que{/a} + ሓካይ + ግሲ ?", "ቅድሚ ሞዓዝ: {a}est-ce qu'{/a}"],
        uk: ["{a}Est-ce que{/a} + підмет + дієслово ?", "Перед голосною: {a}est-ce qu'{/a}"],
      },
    },
    {
      type: "grid",
      headers: ["Affirmatif", "Question"],
      rows: [
        ["Tu parles français.", "Est-ce que tu parles français ?"],
        ["Il est libre.", "Est-ce qu'il est libre ?"],
        ["Elle a cours.", "Est-ce qu'elle a cours ?"],
        ["Vous êtes prêts.", "Est-ce que vous êtes prêts ?"],
      ],
      transHeaders: {
        en: ["Affirmative", "Question"],
        ar: ["الإيجاب", "السؤال"],
        fa: ["مثبت", "سوال"],
        ti: ["ኣወንታ", "ሕቶ"],
        uk: ["Стверджувальна", "Питання"],
      },
      transRows: {
        en: [["You speak French.", "Do you speak French?"], ["He is free.", "Is he free?"], ["She has class.", "Does she have class?"], ["You are ready.", "Are you ready?"]],
        ar: [["تتكلم الفرنسية.", "هل تتكلم الفرنسية؟"], ["هو حر.", "هل هو حر؟"], ["هي لديها دروس.", "هل لديها دروس؟"], ["أنتم مستعدون.", "هل أنتم مستعدون؟"]],
        fa: [["تو فرانسه صحبت می‌کنی.", "آیا فرانسه صحبت می‌کنی؟"], ["او آزاد است.", "آیا او آزاد است؟"], ["او کلاس دارد.", "آیا او کلاس دارد؟"], ["شما آماده‌اید.", "آیا آماده‌اید؟"]],
        ti: [["ፈረንሳዊ ትዛረብ.", "ፈረንሳዊ ትዛረብ ዶ?"], ["ናጻ እዩ.", "ናጻ ዶ እዩ?"], ["ትምህርቲ ኣሎዋ.", "ትምህርቲ ኣሎዋ ዶ?"], ["ቅሩባት ኢኹም.", "ቅሩባት ዶ ኢኹም?"]],
        uk: [["Ти говориш французькою.", "Ти говориш французькою?"], ["Він вільний.", "Він вільний?"], ["У неї заняття.", "У неї заняття?"], ["Ви готові.", "Ви готові?"]],
      },
    },
    {
      type: "highlight",
      label: "Intonation montante",
      transLabel: { en: "Rising intonation", ar: "التنغيم الصاعد", fa: "آهنگ صعودی", ti: "ዝልዓለ ቃና", uk: "Висхідна інтонація" },
      items: [
        "Pour une question très simple, on monte la voix à la fin.",
        "Tu parles français ?",
        "Il est libre ?",
      ],
      transItems: {
        en: ["For a very simple question, raise your voice at the end.", "You speak French?", "He is free?"],
        ar: ["لسؤال بسيط جداً، ارفع صوتك في النهاية.", "تتكلم الفرنسية؟", "هو حر؟"],
        fa: ["برای یک سوال بسیار ساده، صدای خود را در پایان بالا ببرید.", "فرانسه صحبت می‌کنی؟", "او آزاد است؟"],
        ti: ["ንሓደ ቀሊል ሕቶ ድምጺ ኣብ መወዳእታ ኣልዕሎ.", "ፈረንሳዊ ትዛረብ?", "ናጻ እዩ?"],
        uk: ["Для дуже простого питання підвищте голос наприкінці.", "Ти говориш французькою?", "Він вільний?"],
      },
      noBulletItems: [0],
    },
  ],
  exercises: [],
};

// ── Registry ──────────────────────────────────────────────────────────────────

const ALL_GRAMMAR_LESSONS: GrammarLesson[] = [
  a1GrL01,
  a1GrPhrases,
  a1GrL02,
  a1GrInterro,
  a1GrL03,
  a1GrL04,
  a1GrL05,
  a1GrL06,
  a1GrL10,
  a1GrL11,
  a1GrL14,
  a1GrL17,
  a1GrL18,
  a1GrL19,
  a1GrL22,
  a1GrL23,
  a1GrL24,
  a1GrL25,
  a1GrLCest,
  a1GrLQuel,
  a1GrLFutur,
  a1GrLImperatif,
  a2GrL07,
  a2GrL09,
  a2GrL11,
  a2GrL12,
  a2GrL18,
  a2GrL19,
  a2GrL25,
  a2GrL35,
  a2GrL36,
  a2GrL39,
  a2GrL42,
  a2GrL52,
];

export function getGrammarLesson(slug: string): GrammarLesson | undefined {
  return ALL_GRAMMAR_LESSONS.find((l) => l.slug === slug);
}

export function getAllGrammarLessons(): GrammarLesson[] {
  return ALL_GRAMMAR_LESSONS;
}
