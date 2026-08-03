import type { GrammarLesson, VerbToggleVerb } from "../../grammar-data";
import { G1_EXERCISES } from "./g1-lesson-profiles";

const VT_DRE: VerbToggleVerb[] = [
  {
    infinitive: "prendre",
    radical: "",
    rows: [
      { pronoun: "je", ending: "prends" },
      { pronoun: "tu", ending: "prends" },
      { pronoun: "il / elle / on", ending: "prend" },
      { pronoun: "nous", ending: "prenons" },
      { pronoun: "vous", ending: "prenez" },
      { pronoun: "ils / elles", ending: "prennent" },
    ],
  },
  {
    infinitive: "attendre",
    radical: "attend",
    rows: [
      { pronoun: "j'", ending: "s" },
      { pronoun: "tu", ending: "s" },
      { pronoun: "il / elle / on", ending: "" },
      { pronoun: "nous", ending: "ons" },
      { pronoun: "vous", ending: "ez" },
      { pronoun: "ils / elles", ending: "ent" },
    ],
  },
  {
    infinitive: "vendre",
    radical: "vend",
    rows: [
      { pronoun: "je", ending: "s" },
      { pronoun: "tu", ending: "s" },
      { pronoun: "il / elle / on", ending: "" },
      { pronoun: "nous", ending: "ons" },
      { pronoun: "vous", ending: "ez" },
      { pronoun: "ils / elles", ending: "ent" },
    ],
  },
];

const VT_IRE: VerbToggleVerb[] = [
  {
    infinitive: "lire",
    radical: "",
    rows: [
      { pronoun: "je", ending: "lis" },
      { pronoun: "tu", ending: "lis" },
      { pronoun: "il / elle / on", ending: "lit" },
      { pronoun: "nous", ending: "lisons" },
      { pronoun: "vous", ending: "lisez" },
      { pronoun: "ils / elles", ending: "lisent" },
    ],
  },
  {
    infinitive: "écrire",
    radical: "",
    rows: [
      { pronoun: "j'", ending: "écris" },
      { pronoun: "tu", ending: "écris" },
      { pronoun: "il / elle / on", ending: "écrit" },
      { pronoun: "nous", ending: "écrivons" },
      { pronoun: "vous", ending: "écrivez" },
      { pronoun: "ils / elles", ending: "écrivent" },
    ],
  },
  {
    infinitive: "rire",
    radical: "ri",
    rows: [
      { pronoun: "je", ending: "s" },
      { pronoun: "tu", ending: "s" },
      { pronoun: "il / elle / on", ending: "t" },
      { pronoun: "nous", ending: "ons" },
      { pronoun: "vous", ending: "ez" },
      { pronoun: "ils / elles", ending: "ent" },
    ],
  },
];

const VT_IRREGULIER: VerbToggleVerb[] = [
  {
    infinitive: "faire",
    radical: "",
    rows: [
      { pronoun: "je", ending: "fais" },
      { pronoun: "tu", ending: "fais" },
      { pronoun: "il / elle / on", ending: "fait" },
      { pronoun: "nous", ending: "faisons" },
      { pronoun: "vous", ending: "faites" },
      { pronoun: "ils / elles", ending: "font" },
    ],
  },
  {
    infinitive: "dire",
    radical: "",
    rows: [
      { pronoun: "je", ending: "dis" },
      { pronoun: "tu", ending: "dis" },
      { pronoun: "il / elle / on", ending: "dit" },
      { pronoun: "nous", ending: "disons" },
      { pronoun: "vous", ending: "dites" },
      { pronoun: "ils / elles", ending: "disent" },
    ],
  },
  {
    infinitive: "mettre",
    radical: "mett",
    rows: [
      { pronoun: "je", ending: "s", radical: "met" },
      { pronoun: "tu", ending: "s", radical: "met" },
      { pronoun: "il / elle / on", ending: "", radical: "met" },
      { pronoun: "nous", ending: "ons" },
      { pronoun: "vous", ending: "ez" },
      { pronoun: "ils / elles", ending: "ent" },
    ],
  },
];

const VT_OIR: VerbToggleVerb[] = [
  {
    infinitive: "voir",
    radical: "",
    rows: [
      { pronoun: "je", ending: "vois" },
      { pronoun: "tu", ending: "vois" },
      { pronoun: "il / elle / on", ending: "voit" },
      { pronoun: "nous", ending: "voyons" },
      { pronoun: "vous", ending: "voyez" },
      { pronoun: "ils / elles", ending: "voient" },
    ],
  },
  {
    infinitive: "recevoir",
    radical: "",
    rows: [
      { pronoun: "je", ending: "reçois" },
      { pronoun: "tu", ending: "reçois" },
      { pronoun: "il / elle / on", ending: "reçoit" },
      { pronoun: "nous", ending: "recevons" },
      { pronoun: "vous", ending: "recevez" },
      { pronoun: "ils / elles", ending: "reçoivent" },
    ],
  },
  {
    infinitive: "boire",
    radical: "",
    rows: [
      { pronoun: "je", ending: "bois" },
      { pronoun: "tu", ending: "bois" },
      { pronoun: "il / elle / on", ending: "boit" },
      { pronoun: "nous", ending: "buvons" },
      { pronoun: "vous", ending: "buvez" },
      { pronoun: "ils / elles", ending: "boivent" },
    ],
  },
];

const VT_INDRE: VerbToggleVerb[] = [
  {
    infinitive: "peindre",
    radical: "",
    rows: [
      { pronoun: "je", ending: "peins" },
      { pronoun: "tu", ending: "peins" },
      { pronoun: "il / elle / on", ending: "peint" },
      { pronoun: "nous", ending: "peignons" },
      { pronoun: "vous", ending: "peignez" },
      { pronoun: "ils / elles", ending: "peignent" },
    ],
  },
  {
    infinitive: "éteindre",
    radical: "",
    rows: [
      { pronoun: "j'", ending: "éteins" },
      { pronoun: "tu", ending: "éteins" },
      { pronoun: "il / elle / on", ending: "éteint" },
      { pronoun: "nous", ending: "éteignons" },
      { pronoun: "vous", ending: "éteignez" },
      { pronoun: "ils / elles", ending: "éteignent" },
    ],
  },
  {
    infinitive: "rejoindre",
    radical: "",
    rows: [
      { pronoun: "je", ending: "rejoins" },
      { pronoun: "tu", ending: "rejoins" },
      { pronoun: "il / elle / on", ending: "rejoint" },
      { pronoun: "nous", ending: "rejoignons" },
      { pronoun: "vous", ending: "rejoignez" },
      { pronoun: "ils / elles", ending: "rejoignent" },
    ],
  },
];

const VT_SAVOIR_CONNAITRE: VerbToggleVerb[] = [
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
    infinitive: "connaître",
    radical: "",
    rows: [
      { pronoun: "je", ending: "connais" },
      { pronoun: "tu", ending: "connais" },
      { pronoun: "il / elle / on", ending: "connaît" },
      { pronoun: "nous", ending: "connaissons" },
      { pronoun: "vous", ending: "connaissez" },
      { pronoun: "ils / elles", ending: "connaissent" },
    ],
  },
];

/** Unité 9 — Les verbes en -re et en -oir (G1.10) */
export const A1_GR_VERBES_RE_OIR: GrammarLesson = {
  slug: "a1-gr-verbes-re-oir",
  code: "G1.10",
  level: "A1",
  title: "Les verbes en -re et en -oir",
  theory: [
    {
      type: "plain_list",
      items: [
        "Les verbes avec un infinitif en {a}-re{/a} ou en {a}-oir{/a} ont des conjugaisons très irrégulières. Ils ont un, deux ou trois radicaux. Il y a plusieurs modèles de conjugaison. Les terminaisons sont généralement : {a}s, s, t/d, ons, ez, ent{/a}.",
      ],
      transItems: {
        en: ["Verbs with an infinitive ending in {a}-re{/a} or {a}-oir{/a} have very irregular conjugations. They have one, two or three stems. There are several conjugation patterns. The endings are generally: {a}s, s, t/d, ons, ez, ent{/a}."],
        ar: ["الأفعال التي ينتهي مصدرها بـ {a}-re{/a} أو {a}-oir{/a} لها تصريفات شاذة جداً. ولها جذر واحد أو جذران أو ثلاثة جذور. توجد عدة نماذج للتصريف. والنهايات عموماً هي: {a}s, s, t/d, ons, ez, ent{/a}."],
        fa: ["فعل‌هایی که مصدرشان به {a}-re{/a} یا {a}-oir{/a} ختم می‌شود، صرف‌های بسیار بی‌قاعده‌ای دارند. آن‌ها یک، دو یا سه بن دارند. چندین الگوی صرف وجود دارد. شناسه‌ها معمولاً عبارت‌اند از: {a}s, s, t/d, ons, ez, ent{/a}."],
        ti: ["መሰረታዊ ቅርጾም ብ {a}-re{/a} ወይ {a}-oir{/a} ዝውዳእ ግሲታት ኣዝዮም ዘይስሩዕ ምጽራይ ኣለዎም። ሓደ፣ ክልተ ወይ ሰለስተ ሱራት ኣለዎም። ብዙሓት ሞዴላት ምጽራይ ኣለዉ። መወዳእታታቱ ብሓፈሻ፦ {a}s, s, t/d, ons, ez, ent{/a}።"],
        uk: ["Дієслова з інфінітивом на {a}-re{/a} або {a}-oir{/a} мають дуже неправильні дієвідміни. Вони мають одну, дві або три основи. Існує кілька моделей дієвідміни. Закінчення зазвичай такі: {a}s, s, t/d, ons, ez, ent{/a}."],
      },
    },

    {
      type: "heading",
      text: "Verbe irrégulier",
      trans: { en: "Irregular verb", ar: "الفعل الشاذ", fa: "فعل بی‌قاعده", ti: "ዘይስሩዕ ግሲ", uk: "Неправильне дієслово" },
    },
    { type: "verb_toggle", buttonCols: 3, verbs: VT_IRREGULIER },

    {
      type: "heading",
      text: "Verbes en -dre",
      trans: { en: "Verbs ending in -dre", ar: "الأفعال المنتهية بـ -dre", fa: "فعل‌های پایان‌یافته به -dre", ti: "ብ -dre ዝውድኡ ግሲታት", uk: "Дієслова на -dre" },
    },
    { type: "verb_toggle", buttonCols: 3, verbs: VT_DRE },

    {
      type: "heading",
      text: "Verbes en -ire",
      trans: { en: "Verbs ending in -ire", ar: "الأفعال المنتهية بـ -ire", fa: "فعل‌های پایان‌یافته به -ire", ti: "ብ -ire ዝውድኡ ግሲታት", uk: "Дієслова на -ire" },
    },
    { type: "verb_toggle", buttonCols: 3, verbs: VT_IRE },

    {
      type: "heading",
      text: "Verbes en -oir",
      trans: { en: "Verbs ending in -oir", ar: "الأفعال المنتهية بـ -oir", fa: "فعل‌های پایان‌یافته به -oir", ti: "ብ -oir ዝውድኡ ግሲታት", uk: "Дієслова на -oir" },
    },
    { type: "verb_toggle", buttonCols: 3, verbs: VT_OIR },

    {
      type: "heading",
      text: "Verbes en -indre",
      trans: { en: "Verbs ending in -indre", ar: "الأفعال المنتهية بـ -indre", fa: "فعل‌های پایان‌یافته به -indre", ti: "ብ -indre ዝውድኡ ግሲታት", uk: "Дієслова на -indre" },
    },
    { type: "verb_toggle", buttonCols: 3, verbs: VT_INDRE },

    {
      type: "heading",
      text: "Savoir et connaître",
      trans: { en: "Savoir and connaître", ar: "Savoir وconnaître", fa: "Savoir و connaître", ti: "Savoirን connaîtreን", uk: "Savoir і connaître" },
    },
    { type: "verb_toggle", buttonCols: 2, verbs: VT_SAVOIR_CONNAITRE },
    {
      type: "heading",
      text: "SAVOIR ou CONNAÎTRE ?",
      sub: true,
      accent: true,
      trans: { en: "SAVOIR or CONNAÎTRE?", ar: "SAVOIR أم CONNAÎTRE؟", fa: "SAVOIR یا CONNAÎTRE؟", ti: "SAVOIR ወይ CONNAÎTRE?", uk: "SAVOIR чи CONNAÎTRE?" },
    },
    {
      type: "grid",
      headers: ["Verbe", "Utilisation", "Exemple"],
      boldFirstCol: true,
      rows: [
        ["savoir", "+ infinitif (capacité)", "Je sais nager."],
        ["savoir", "+ que / si / où… (fait)", "Je sais qu'il est français."],
        ["savoir", "+ nom (information)", "Tu sais l'heure ?"],
        ["connaître", "+ personne", "Je connais Marco."],
        ["connaître", "+ lieu / chose", "Elle connaît bien Paris."],
        ["connaître", "+ œuvre / domaine", "Tu connais ce film ?"],
      ],
      transHeaders: {
        en: ["Verb", "Usage", "Example"],
        ar: ["الفعل", "الاستخدام", "مثال"],
        fa: ["فعل", "کاربرد", "مثال"],
        ti: ["ግሲ", "ኣጠቓቕማ", "ኣብነት"],
        uk: ["Дієслово", "Вживання", "Приклад"],
      },
      transRows: {
        en: [["savoir", "+ infinitive (ability)", "Je sais nager."], ["savoir", "+ que / si / où… (fact)", "Je sais qu'il est français."], ["savoir", "+ noun (information)", "Tu sais l'heure ?"], ["connaître", "+ person", "Je connais Marco."], ["connaître", "+ place / thing", "Elle connaît bien Paris."], ["connaître", "+ work / field", "Tu connais ce film ?"]],
        ar: [["savoir", "+ المصدر (القدرة)", "Je sais nager."], ["savoir", "+ que / si / où… (حقيقة)", "Je sais qu'il est français."], ["savoir", "+ اسم (معلومة)", "Tu sais l'heure ?"], ["connaître", "+ شخص", "Je connais Marco."], ["connaître", "+ مكان / شيء", "Elle connaît bien Paris."], ["connaître", "+ عمل / مجال", "Tu connais ce film ?"]],
        fa: [["savoir", "+ مصدر (توانایی)", "Je sais nager."], ["savoir", "+ que / si / où… (واقعیت)", "Je sais qu'il est français."], ["savoir", "+ اسم (اطلاعات)", "Tu sais l'heure ?"], ["connaître", "+ شخص", "Je connais Marco."], ["connaître", "+ مکان / چیز", "Elle connaît bien Paris."], ["connaître", "+ اثر / حوزه", "Tu connais ce film ?"]],
        ti: [["savoir", "+ መሰረታዊ ግሲ (ዓቕሚ)", "Je sais nager."], ["savoir", "+ que / si / où… (ሓቂ)", "Je sais qu'il est français."], ["savoir", "+ ስም (ሓበሬታ)", "Tu sais l'heure ?"], ["connaître", "+ ሰብ", "Je connais Marco."], ["connaître", "+ ቦታ / ነገር", "Elle connaît bien Paris."], ["connaître", "+ ስራሕ / ዓውዲ", "Tu connais ce film ?"]],
        uk: [["savoir", "+ інфінітив (уміння)", "Je sais nager."], ["savoir", "+ que / si / où… (факт)", "Je sais qu'il est français."], ["savoir", "+ іменник (інформація)", "Tu sais l'heure ?"], ["connaître", "+ особа", "Je connais Marco."], ["connaître", "+ місце / річ", "Elle connaît bien Paris."], ["connaître", "+ твір / галузь", "Tu connais ce film ?"]],
      },
    },
    {
      type: "highlight",
      label: "Règle simple",
      items: [
        "{a}Savoir{/a} = un fait, une information, une capacité.",
        "{a}Connaître{/a} = être familier avec une personne, un lieu ou une chose.",
      ],
      transLabel: { en: "Simple rule", ar: "قاعدة بسيطة", fa: "قاعده ساده", ti: "ቀሊል ሕጊ", uk: "Просте правило" },
      transItems: {
        en: ["{a}Savoir{/a} = a fact, information or an ability.", "{a}Connaître{/a} = to be familiar with a person, place or thing."],
        ar: ["{a}Savoir{/a} = حقيقة أو معلومة أو قدرة.", "{a}Connaître{/a} = معرفة شخص أو مكان أو شيء معرفةً مسبقة."],
        fa: ["{a}Savoir{/a} = یک واقعیت، اطلاعات یا توانایی.", "{a}Connaître{/a} = با یک شخص، مکان یا چیز آشنا بودن."],
        ti: ["{a}Savoir{/a} = ሓቂ፣ ሓበሬታ ወይ ዓቕሚ።", "{a}Connaître{/a} = ምስ ሰብ፣ ቦታ ወይ ነገር ዝተላለኻ ምዃን።"],
        uk: ["{a}Savoir{/a} = факт, інформація або вміння.", "{a}Connaître{/a} = бути знайомим з особою, місцем або річчю."],
      },
    },
    {
      type: "highlight",
      label: "Attention",
      items: [
        "On ne dit pas {s}je sais Paris{/s} mais {a}je connais Paris{/a}.",
        "On ne dit pas {s}je connais nager{/s} mais {a}je sais nager{/a}.",
      ],
      transLabel: { en: "Caution", ar: "تنبيه", fa: "توجه", ti: "ኣስተውዕል", uk: "Увага" },
    },
  ],
  exercises: G1_EXERCISES["G1.10"](),
};
