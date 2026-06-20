import type { ConjLesson } from "../../conjugation-data";

const IRREGULAR_VERBS = [
  {
    infinitive: "faire",
    radical: "",
    rows: [
      { pronoun: "je",             ending: "fais" },
      { pronoun: "tu",             ending: "fais" },
      { pronoun: "il / elle / on", ending: "fait" },
      { pronoun: "nous",           ending: "faisons" },
      { pronoun: "vous",           ending: "faites" },
      { pronoun: "ils / elles",    ending: "font" },
    ],
  },
  {
    infinitive: "croire",
    radical: "",
    rows: [
      { pronoun: "je",             ending: "crois" },
      { pronoun: "tu",             ending: "crois" },
      { pronoun: "il / elle / on", ending: "croit" },
      { pronoun: "nous",           ending: "croyons" },
      { pronoun: "vous",           ending: "croyez" },
      { pronoun: "ils / elles",    ending: "croient" },
    ],
  },
  {
    infinitive: "boire",
    radical: "",
    rows: [
      { pronoun: "je",             ending: "bois" },
      { pronoun: "tu",             ending: "bois" },
      { pronoun: "il / elle / on", ending: "boit" },
      { pronoun: "nous",           ending: "buvons" },
      { pronoun: "vous",           ending: "buvez" },
      { pronoun: "ils / elles",    ending: "boivent" },
    ],
  },
  {
    infinitive: "naître",
    radical: "",
    rows: [
      { pronoun: "je",             ending: "nais" },
      { pronoun: "tu",             ending: "nais" },
      { pronoun: "il / elle / on", ending: "naît" },
      { pronoun: "nous",           ending: "naissons" },
      { pronoun: "vous",           ending: "naissez" },
      { pronoun: "ils / elles",    ending: "naissent" },
    ],
  },
  {
    infinitive: "savoir",
    radical: "",
    rows: [
      { pronoun: "je",             ending: "sais" },
      { pronoun: "tu",             ending: "sais" },
      { pronoun: "il / elle / on", ending: "sait" },
      { pronoun: "nous",           ending: "savons" },
      { pronoun: "vous",           ending: "savez" },
      { pronoun: "ils / elles",    ending: "savent" },
    ],
  },
  {
    infinitive: "connaître",
    radical: "",
    rows: [
      { pronoun: "je",             ending: "connais" },
      { pronoun: "tu",             ending: "connais" },
      { pronoun: "il / elle / on", ending: "connaît" },
      { pronoun: "nous",           ending: "connaissons" },
      { pronoun: "vous",           ending: "connaissez" },
      { pronoun: "ils / elles",    ending: "connaissent" },
    ],
  },
  {
    infinitive: "prendre",
    radical: "",
    rows: [
      { pronoun: "je",             ending: "prends" },
      { pronoun: "tu",             ending: "prends" },
      { pronoun: "il / elle / on", ending: "prend" },
      { pronoun: "nous",           ending: "prenons" },
      { pronoun: "vous",           ending: "prenez" },
      { pronoun: "ils / elles",    ending: "prennent" },
    ],
  },
];

export const A2_CONJ_IRREGULIERS: ConjLesson = {
  slug: "a2-conj-irreguliers",
  code: "R2.4",
  level: "A2",
  title: "Verbes irréguliers",
  theory: [
    { type: "heading", text: "Verbes irréguliers au présent", trans: { en: "Irregular verbs in the present", ar: "أفعال شاذة في المضارع", fa: "افعال بی‌قاعده در حال", ti: "ዘይስሩዓት ግሲታት ኣብ ህሉው ግዜ", uk: "Неправильні дієслова в теперішньому часі" } },
    {
      type: "plain_list",
      items: [
        "Ces verbes ne suivent pas les terminaisons régulières : il faut mémoriser chaque forme.",
      ],
      transItems: {
        en: ["These verbs do not follow regular endings: each form must be memorised."],
        ar: ["هذه الأفعال لا تتبع النهايات المنتظمة: يجب حفظ كل صيغة."],
        fa: ["این افعال از پسوندهای منظم پیروی نمی‌کنند: باید هر شکل را حفظ کرد."],
        ti: ["እዞም ግሲታት ንስሩዓት መወዳእታታት ኣይስዕቡን፦ ነፍሲ ወከፍ ቅርጺ ብዝኽሪ ክምሃር ኣለዎ።"],
        uk: ["Ці дієслова не мають правильних закінчень: кожну форму треба запам'ятати."],
      },
    },
    { type: "verb_toggle", buttonCols: 4, verbs: IRREGULAR_VERBS },
    {
      type: "plain_list",
      items: [
        "{a}Prendre{/a}, apprendre et comprendre suivent le même modèle. Au pluriel, le radical devient pren- ; à la 3e personne du pluriel, le n est doublé : {a}prennent{/a}.",
      ],
      transItems: {
        en: ["{a}Prendre{/a} (to take), apprendre and comprendre follow the same pattern. In the plural, the stem becomes pren-; in the 3rd person plural, the n is doubled: {a}prennent{/a}."],
        ar: ["{a}Prendre{/a} (يأخذ) و apprendre و comprendre تتبع النموذج ذاته. في الجمع، يصبح الجذر pren-؛ في جمع الغائب يُضاعف الـ n: {a}prennent{/a}."],
        fa: ["{a}Prendre{/a} (گرفتن)، apprendre و comprendre از همان الگو پیروی می‌کنند. در جمع، ریشه pren- می‌شود؛ در سوم‌شخص جمع n دوتا می‌شود: {a}prennent{/a}."],
        ti: ["{a}Prendre{/a} (ምውሳድ)፣ apprendre ን comprendre ሓደ ዓይነት ኣገባብ ይስዕቡ። ኣብ ብዙሕ፣ እቲ መሰረት pren- ይኸውን፤ ኣብ 3ይ ኣካል ብዙሕ n ይድረብ፦ {a}prennent{/a}།"],
        uk: ["{a}Prendre{/a} (брати), apprendre і comprendre мають однакову модель. У множині основа стає pren-; у 3-й особі множини n подвоюється: {a}prennent{/a}."],
      },
    },
  ],
  exercises: [],
};
