import type { GrammarLesson } from "../../grammar-data";

export const A1_GR_L25: GrammarLesson = {
  slug: "a1-gr-l25",
  code: "R9.5",
  level: "A2",
  title: "Savoir ou connaître ?",
  theory: [
    { type: "heading", text: "SAVOIR ou CONNAÎTRE ?", trans: { en: "SAVOIR or CONNAÎTRE? (to know)", ar: "SAVOIR أم CONNAÎTRE؟ (يعرف)", fa: "SAVOIR یا CONNAÎTRE؟ (دانستن)", ti: "SAVOIR ወይ CONNAÎTRE? (ምፍላጥ)", uk: "SAVOIR чи CONNAÎTRE? (знати)" } },
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
      transHeaders: {
        en: ["Verb", "Use", "Example"],
        ar: ["الفعل", "الاستخدام", "مثال"],
        fa: ["فعل", "کاربرد", "مثال"],
        ti: ["ግሲ", "ኣጠቓቕማ", "ኣብነት"],
        uk: ["Дієслово", "Вживання", "Приклад"],
      },
      transRows: {
        en: [["{a}savoir{/a}", "+ infinitive (ability)", "Je sais nager. (I can swim.)"], ["{a}savoir{/a}", "+ que / si / où… (fact)", "Je sais qu'il est français. (I know he is French.)"], ["{a}savoir{/a}", "+ noun (information)", "Tu sais l'heure ? (Do you know the time?)"], ["{a}connaître{/a}", "+ person", "Je connais Marco. (I know Marco.)"], ["{a}connaître{/a}", "+ place / thing", "Elle connaît bien Paris. (She knows Paris well.)"], ["{a}connaître{/a}", "+ work / field", "Tu connais ce film ? (Do you know this film?)"]],
        ar: [["{a}savoir{/a}", "+ المصدر (القدرة)", "Je sais nager. (أعرف السباحة.)"], ["{a}savoir{/a}", "+ que / si / où… (حقيقة)", "Je sais qu'il est français. (أعرف أنه فرنسي.)"], ["{a}savoir{/a}", "+ اسم (معلومة)", "Tu sais l'heure ? (هل تعرف الوقت؟)"], ["{a}connaître{/a}", "+ شخص", "Je connais Marco. (أعرف ماركو.)"], ["{a}connaître{/a}", "+ مكان / شيء", "Elle connaît bien Paris. (تعرف باريس جيداً.)"], ["{a}connaître{/a}", "+ عمل / مجال", "Tu connais ce film ? (هل تعرف هذا الفيلم؟)"]],
        fa: [["{a}savoir{/a}", "+ مصدر (توانایی)", "Je sais nager. (شنا بلدم.)"], ["{a}savoir{/a}", "+ que / si / où… (واقعیت)", "Je sais qu'il est français. (می‌دانم او فرانسوی است.)"], ["{a}savoir{/a}", "+ اسم (اطلاعات)", "Tu sais l'heure ? (ساعت را می‌دانی؟)"], ["{a}connaître{/a}", "+ شخص", "Je connais Marco. (مارکو را می‌شناسم.)"], ["{a}connaître{/a}", "+ مکان / چیز", "Elle connaît bien Paris. (پاریس را خوب می‌شناسد.)"], ["{a}connaître{/a}", "+ اثر / حوزه", "Tu connais ce film ? (این فیلم را می‌شناسی؟)"]],
        ti: [["{a}savoir{/a}", "+ መሰረታዊ ግሲ (ክእለት)", "Je sais nager. (ምሕምባስ እኽእል።)"], ["{a}savoir{/a}", "+ que / si / où… (ሓቂ)", "Je sais qu'il est français. (ፈረንሳዊ ምዃኑ እፈልጥ።)"], ["{a}savoir{/a}", "+ ስም (ሓበሬታ)", "Tu sais l'heure ? (ሰዓት ትፈልጥ ዶ?)"], ["{a}connaître{/a}", "+ ሰብ", "Je connais Marco. (ንማርኮ እፈልጦ።)"], ["{a}connaître{/a}", "+ ቦታ / ነገር", "Elle connaît bien Paris. (ንፓሪስ ጽቡቕ ትፈልጣ።)"], ["{a}connaître{/a}", "+ ስራሕ / ዓውዲ", "Tu connais ce film ? (ነዚ ፊልም ትፈልጦ ዶ?)"]],
        uk: [["{a}savoir{/a}", "+ інфінітив (вміння)", "Je sais nager. (Я вмію плавати.)"], ["{a}savoir{/a}", "+ que / si / où… (факт)", "Je sais qu'il est français. (Я знаю, що він француз.)"], ["{a}savoir{/a}", "+ іменник (інформація)", "Tu sais l'heure ? (Ти знаєш, котра година?)"], ["{a}connaître{/a}", "+ особа", "Je connais Marco. (Я знаю Марко.)"], ["{a}connaître{/a}", "+ місце / річ", "Elle connaît bien Paris. (Вона добре знає Париж.)"], ["{a}connaître{/a}", "+ твір / галузь", "Tu connais ce film ? (Ти знаєш цей фільм?)"]],
      },
    },
    {
      type: "highlight",
      label: "Règle simple",
      items: [
        "{a}Savoir{/a} = un fait, une information, une capacité.",
        "{a}Connaître{/a} = être familier avec une personne, un lieu ou une chose.",
      ],
      transLabel: { en: "Simple rule", ar: "قاعدة بسيطة", fa: "قاعده‌ی ساده", ti: "ቀሊል ሕጊ", uk: "Просте правило" },
      transItems: {
        en: ["{a}Savoir{/a} = a fact, an information, an ability.", "{a}Connaître{/a} = to be familiar with a person, a place or a thing."],
        ar: ["{a}Savoir{/a} = حقيقة أو معلومة أو قدرة.", "{a}Connaître{/a} = أن تكون مألوفاً بشخص أو مكان أو شيء."],
        fa: ["{a}Savoir{/a} = یک واقعیت، یک اطلاعات، یک توانایی.", "{a}Connaître{/a} = آشنا بودن با یک شخص، مکان یا چیز."],
        ti: ["{a}Savoir{/a} = ሓቂ፣ ሓበሬታ፣ ክእለት።", "{a}Connaître{/a} = ምስ ሰብ፣ ቦታ ወይ ነገር ምልላይ።"],
        uk: ["{a}Savoir{/a} = факт, інформація, вміння.", "{a}Connaître{/a} = бути знайомим з особою, місцем або річчю."],
      },
    },
    {
      type: "highlight",
      label: "Attention",
      items: [
        "On ne dit pas {s}je sais Paris{/s} mais {a}je connais Paris{/a}.",
        "On ne dit pas {s}je connais nager{/s} mais {a}je sais nager{/a}.",
      ],
      transLabel: { en: "Warning", ar: "انتباه", fa: "توجه", ti: "ኣቓልቦ", uk: "Увага" },
      transItems: {
        en: ["You don't say {s}je sais Paris{/s} but {a}je connais Paris{/a}.", "You don't say {s}je connais nager{/s} but {a}je sais nager{/a}."],
        ar: ["لا تقل {s}je sais Paris{/s} بل {a}je connais Paris{/a}.", "لا تقل {s}je connais nager{/s} بل {a}je sais nager{/a}."],
        fa: ["نمی‌گویید {s}je sais Paris{/s} بلکه {a}je connais Paris{/a}.", "نمی‌گویید {s}je connais nager{/s} بلکه {a}je sais nager{/a}."],
        ti: ["{s}je sais Paris{/s} ኣይትብልን ግን {a}je connais Paris{/a}።", "{s}je connais nager{/s} ኣይትብልን ግን {a}je sais nager{/a}።"],
        uk: ["Не кажуть {s}je sais Paris{/s}, а {a}je connais Paris{/a}.", "Не кажуть {s}je connais nager{/s}, а {a}je sais nager{/a}."],
      },
    },
  ],
  exercises: [],
};
