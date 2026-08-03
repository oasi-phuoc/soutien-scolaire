import type { GrammarLesson, VerbToggleVerb } from "../../grammar-data";
import { G1_EXERCISES } from "./g1-lesson-profiles";

const PRONOMINAUX_VERBS: VerbToggleVerb[] = [
  {
    infinitive: "se lever", radical: "",
    reflexivePronouns: ["me", "te", "se", "nous", "vous", "se"],
    rows: [
      { pronoun: "je",              ending: "e",    radical: "lèv" },
      { pronoun: "tu",              ending: "es",   radical: "lèv" },
      { pronoun: "il / elle / on",  ending: "e",    radical: "lèv" },
      { pronoun: "nous",            ending: "ons",  radical: "lev" },
      { pronoun: "vous",            ending: "ez",   radical: "lev" },
      { pronoun: "ils / elles",     ending: "ent",  radical: "lèv" },
    ],
  },
  {
    infinitive: "se coucher", radical: "couch",
    reflexivePronouns: ["me", "te", "se", "nous", "vous", "se"],
    rows: [
      { pronoun: "je",              ending: "e"   },
      { pronoun: "tu",              ending: "es"  },
      { pronoun: "il / elle / on",  ending: "e"   },
      { pronoun: "nous",            ending: "ons" },
      { pronoun: "vous",            ending: "ez"  },
      { pronoun: "ils / elles",     ending: "ent" },
    ],
  },
  {
    infinitive: "se laver", radical: "lav",
    reflexivePronouns: ["me", "te", "se", "nous", "vous", "se"],
    rows: [
      { pronoun: "je",              ending: "e"   },
      { pronoun: "tu",              ending: "es"  },
      { pronoun: "il / elle / on",  ending: "e"   },
      { pronoun: "nous",            ending: "ons" },
      { pronoun: "vous",            ending: "ez"  },
      { pronoun: "ils / elles",     ending: "ent" },
    ],
  },
  {
    infinitive: "se doucher", radical: "douch",
    reflexivePronouns: ["me", "te", "se", "nous", "vous", "se"],
    rows: [
      { pronoun: "je",              ending: "e"   },
      { pronoun: "tu",              ending: "es"  },
      { pronoun: "il / elle / on",  ending: "e"   },
      { pronoun: "nous",            ending: "ons" },
      { pronoun: "vous",            ending: "ez"  },
      { pronoun: "ils / elles",     ending: "ent" },
    ],
  },
  {
    infinitive: "se brosser", radical: "bross",
    reflexivePronouns: ["me", "te", "se", "nous", "vous", "se"],
    rows: [
      { pronoun: "je",              ending: "e"   },
      { pronoun: "tu",              ending: "es"  },
      { pronoun: "il / elle / on",  ending: "e"   },
      { pronoun: "nous",            ending: "ons" },
      { pronoun: "vous",            ending: "ez"  },
      { pronoun: "ils / elles",     ending: "ent" },
    ],
  },
  {
    infinitive: "se raser", radical: "ras",
    reflexivePronouns: ["me", "te", "se", "nous", "vous", "se"],
    rows: [
      { pronoun: "je",              ending: "e"   },
      { pronoun: "tu",              ending: "es"  },
      { pronoun: "il / elle / on",  ending: "e"   },
      { pronoun: "nous",            ending: "ons" },
      { pronoun: "vous",            ending: "ez"  },
      { pronoun: "ils / elles",     ending: "ent" },
    ],
  },
  {
    infinitive: "se coiffer", radical: "coiff",
    reflexivePronouns: ["me", "te", "se", "nous", "vous", "se"],
    rows: [
      { pronoun: "je",              ending: "e"   },
      { pronoun: "tu",              ending: "es"  },
      { pronoun: "il / elle / on",  ending: "e"   },
      { pronoun: "nous",            ending: "ons" },
      { pronoun: "vous",            ending: "ez"  },
      { pronoun: "ils / elles",     ending: "ent" },
    ],
  },
  {
    infinitive: "s'habiller", radical: "habill",
    reflexivePronouns: ["m'", "t'", "s'", "nous", "vous", "s'"],
    rows: [
      { pronoun: "je",              ending: "e"   },
      { pronoun: "tu",              ending: "es"  },
      { pronoun: "il / elle / on",  ending: "e"   },
      { pronoun: "nous",            ending: "ons" },
      { pronoun: "vous",            ending: "ez"  },
      { pronoun: "ils / elles",     ending: "ent" },
    ],
  },
  {
    infinitive: "se reposer", radical: "repos",
    reflexivePronouns: ["me", "te", "se", "nous", "vous", "se"],
    rows: [
      { pronoun: "je",              ending: "e"   },
      { pronoun: "tu",              ending: "es"  },
      { pronoun: "il / elle / on",  ending: "e"   },
      { pronoun: "nous",            ending: "ons" },
      { pronoun: "vous",            ending: "ez"  },
      { pronoun: "ils / elles",     ending: "ent" },
    ],
  },
];

/** Unité 5 — Les verbes pronominaux (G1.6) */
export const A1_GR_PRONOMINAUX: GrammarLesson = {
  slug: "a1-gr-pronominaux",
  code: "G1.6",
  level: "A1",
  title: "Les verbes pronominaux",
  theory: [
    {
      type: "heading",
      text: "Utilisation",
      trans: { en: "Usage", ar: "الاستخدام", fa: "کاربرد", ti: "ኣጠቓቕማ", uk: "Вживання" },
    },
    {
      type: "plain_list",
      items: [
        "Le sujet du verbe fait l'action sur lui-même. Un verbe pronominal est toujours accompagné d'un pronom réfléchi.",
      ],
      transItems: {
        en: ["The subject of the verb performs the action on itself. A reflexive verb is always accompanied by a reflexive pronoun."],
        ar: ["يقوم فاعل الفعل بالفعل على نفسه. ويكون الفعل الانعكاسي دائماً مصحوباً بضمير انعكاسي."],
        fa: ["فاعل، عمل فعل را روی خودش انجام می‌دهد. فعل انعکاسی همیشه با یک ضمیر انعکاسی همراه است."],
        ti: ["ተግባር ናይቲ ግሲ እቲ ርእሲ ኣብ ገዛእ ርእሱ ይፍጽሞ። ርእሰ-ግሲ ወትሩ ምስ ርእሰ-ተካኢ ስም ይመጽእ።"],
        uk: ["Підмет виконує дію над самим собою. Зворотне дієслово завжди супроводжується зворотним займенником."],
      },
    },
    {
      type: "highlight",
      label: "",
      items: ["Elle {a}se regarde{/a} dans le miroir."],
      noBulletItems: [0],
    },

    {
      type: "heading",
      text: "Conjugaison",
      trans: { en: "Conjugation", ar: "التصريف", fa: "صرف", ti: "ምጽራይ", uk: "Дієвідміна" },
    },
    {
      type: "plain_list",
      items: [
        "Les verbes pronominaux se conjuguent avec deux pronoms : le pronom sujet + un second pronom de la même personne. À l'infinitif, on utilise le pronom {a}se{/a} : se lever, se doucher.",
      ],
      transItems: {
        en: ["Reflexive verbs are conjugated with two pronouns: the subject pronoun + a second pronoun for the same person. In the infinitive, the pronoun {a}se{/a} is used: se lever, se doucher."],
        ar: ["تُصرَّف الأفعال الانعكاسية مع ضميرين: ضمير الفاعل + ضمير ثانٍ للشخص نفسه. في المصدر نستخدم الضمير {a}se{/a}: se lever, se doucher."],
        fa: ["فعل‌های انعکاسی با دو ضمیر صرف می‌شوند: ضمیر فاعلی + ضمیر دومی برای همان شخص. در مصدر از ضمیر {a}se{/a} استفاده می‌شود: se lever, se doucher."],
        ti: ["ርእሰ-ግሲታት ብኽልተ ተካኢ ስማት ይጻረዩ፦ ተካኢ ስም ርእሲ + ናይቲ ተመሳሳሊ ሰብ ካልኣይ ተካኢ ስም። ኣብ መሰረታዊ ግሲ {a}se{/a} ንጥቀም፦ se lever, se doucher።"],
        uk: ["Зворотні дієслова відмінюються з двома займенниками: займенником-підметом + другим займенником тієї самої особи. В інфінітиві вживається займенник {a}se{/a}: se lever, se doucher."],
      },
    },
    {
      type: "grid",
      headers: ["Sujet", "Pronom réfléchi"],
      transHeaders: {
        en: ["Subject", "Reflexive pronoun"],
        ar: ["الفاعل", "الضمير الانعكاسي"],
        fa: ["فاعل", "ضمیر انعکاسی"],
        ti: ["ርእሲ", "ርእሰ-ተካኢ ስም"],
        uk: ["Підмет", "Зворотний займенник"],
      },
      boldFirstCol: true,
      rows: [
        ["je", "me (m')"],
        ["tu", "te (t')"],
        ["il / elle / on", "se (s')"],
        ["nous", "nous"],
        ["vous", "vous"],
        ["ils / elles", "se (s')"],
      ],
    },

    {
      type: "heading",
      text: "Prononciation et orthographe",
      trans: { en: "Pronunciation and spelling", ar: "النطق والإملاء", fa: "تلفظ و املا", ti: "ኣደማምጻን ኣጸሓሕፋን", uk: "Вимова та правопис" },
    },
    {
      type: "plain_list",
      items: [
        "Les pronoms {a}me, te, se{/a} deviennent {a}m', t', s'{/a} devant une voyelle ou un h muet.",
      ],
      transItems: {
        en: ["The pronouns {a}me, te, se{/a} become {a}m', t', s'{/a} before a vowel or a silent h."],
        ar: ["تتحول الضمائر {a}me, te, se{/a} إلى {a}m', t', s'{/a} قبل حرف متحرك أو h صامت."],
        fa: ["ضمیرهای {a}me, te, se{/a} پیش از واکه یا h بی‌صدا به {a}m', t', s'{/a} تبدیل می‌شوند."],
        ti: ["እቶም {a}me, te, se{/a} ዝብሉ ተካኢ ስማት ቅድሚ ኣድማጺ ፊደል ወይ ዘይድመጽ h ናብ {a}m', t', s'{/a} ይቕየሩ።"],
        uk: ["Займенники {a}me, te, se{/a} перетворюються на {a}m', t', s'{/a} перед голосною або німою h."],
      },
    },
    {
      type: "highlight",
      label: "",
      items: [
        "Je {s}me{/s} habille → Je {a}m'{/a}habille.",
        "Tu {s}te{/s} amuses → Tu {a}t'{/a}amuses.",
        "Elle {s}se{/s} arrête → Elle {a}s'{/a}arrête.",
        "Ils {s}se{/s} embrassent → Ils {a}s'{/a}embrassent.",
      ],
      noBulletItems: [0, 1, 2, 3],
    },

    {
      type: "heading",
      text: "Verbes pronominaux courants",
      trans: { en: "Common reflexive verbs", ar: "أفعال انعكاسية شائعة", fa: "افعال انعکاسی پرکاربرد", ti: "ልሙዳት ናይ ርእሰ-ግሲታት", uk: "Поширені зворотні дієслова" },
    },
    { type: "verb_toggle", verbs: PRONOMINAUX_VERBS, buttonCols: 3 },

    {
      type: "heading",
      text: "La négation",
      trans: { en: "The negation", ar: "النفي", fa: "نفی", ti: "ኣሉታ", uk: "Заперечення" },
    },
    {
      type: "plain_list",
      items: [
        "La négation {a}ne … pas{/a} encadre le pronom réfléchi ET le verbe.",
      ],
      transItems: {
        en: ["The negation {a}ne … pas{/a} surrounds both the reflexive pronoun AND the verb."],
        ar: ["يحيط النفي {a}ne … pas{/a} بالضمير الانعكاسي والفعل معاً."],
        fa: ["ساخت منفی {a}ne … pas{/a} هم ضمیر انعکاسی و هم فعل را دربر می‌گیرد."],
        ti: ["እቲ {a}ne … pas{/a} ዝብል ኣሉታ ነቲ ርእሰ-ተካኢ ስምን ነቲ ግስን ብሓደ ይኸቦም።"],
        uk: ["Заперечення {a}ne … pas{/a} охоплює і зворотний займенник, І дієслово."],
      },
    },
    {
      type: "highlight",
      label: "",
      items: ["Sujet + {a}ne{/a} + pronom réfléchi + verbe + {a}pas{/a}"],
      transItems: {
        en: ["Subject + {a}ne{/a} + reflexive pronoun + verb + {a}pas{/a}"],
        ar: ["الفاعل + {a}ne{/a} + الضمير الانعكاسي + الفعل + {a}pas{/a}"],
        fa: ["فاعل + {a}ne{/a} + ضمیر انعکاسی + فعل + {a}pas{/a}"],
        ti: ["ርእሲ + {a}ne{/a} + ርእሰ-ተካኢ ስም + ግሲ + {a}pas{/a}"],
        uk: ["Підмет + {a}ne{/a} + зворотний займенник + дієслово + {a}pas{/a}"],
      },
      noBulletItems: [0],
    },
    { type: "verb_toggle", negation: true, verbs: PRONOMINAUX_VERBS, buttonCols: 3 },

    {
      type: "heading",
      text: "Réfléchis vs réciproques",
      sub: true,
      accent: true,
      trans: { en: "Reflexive vs reciprocal", ar: "انعكاسي مقابل متبادل", fa: "انعکاسی در برابر متقابل", ti: "ርእሰ-ግሲ ኣንጻር ምልውዋጥ", uk: "Зворотні проти взаємних" },
    },
    {
      type: "grid",
      headers: ["Type", "Sens", "Exemple"],
      transHeaders: {
        en: ["Type", "Meaning", "Example"],
        ar: ["النوع", "المعنى", "مثال"],
        fa: ["نوع", "معنی", "مثال"],
        ti: ["ዓይነት", "ትርጉም", "ኣብነት"],
        uk: ["Тип", "Значення", "Приклад"],
      },
      boldFirstCol: true,
      rows: [
        ["Réfléchi", "Le sujet agit sur lui-même.", "Je {a}me{/a} regarde dans le miroir."],
        ["Réciproque", "Les sujets agissent l'un sur l'autre.", "Nous {a}nous{/a} regardons. (each other)"],
      ],
      transRows: {
        en: [["Reflexive", "The subject acts on itself.", "Je {a}me{/a} regarde dans le miroir."], ["Reciprocal", "The subjects act on each other.", "Nous {a}nous{/a} regardons. (each other)"]],
        ar: [["انعكاسي", "يقوم الفاعل بالفعل على نفسه.", "Je {a}me{/a} regarde dans le miroir."], ["متبادل", "يقوم الفاعلون بالفعل بعضهم على بعض.", "Nous {a}nous{/a} regardons. (each other)"]],
        fa: [["انعکاسی", "فاعل عمل را روی خودش انجام می‌دهد.", "Je {a}me{/a} regarde dans le miroir."], ["متقابل", "فاعل‌ها عمل را روی یکدیگر انجام می‌دهند.", "Nous {a}nous{/a} regardons. (each other)"]],
        ti: [["ርእሰ-ግሲ", "እቲ ርእሲ ኣብ ገዛእ ርእሱ ይፍጽም።", "Je {a}me{/a} regarde dans le miroir."], ["ምልውዋጥ", "እቶም ርእስታት ኣብ ነንሓድሕዶም ይፍጽሙ።", "Nous {a}nous{/a} regardons. (each other)"]],
        uk: [["Зворотний", "Підмет діє на самого себе.", "Je {a}me{/a} regarde dans le miroir."], ["Взаємний", "Підмети діють один на одного.", "Nous {a}nous{/a} regardons. (each other)"]],
      },
    },
    {
      type: "heading",
      text: "Attention",
      trans: { en: "Important", ar: "انتبه", fa: "توجه", ti: "ኣስተውዕል", uk: "Увага" },
    },
    {
      type: "plain_list",
      items: [
        "Quand le verbe commence par une voyelle ou un h, {a}me / te / se{/a} devient {a}m' / t' / s'{/a}.",
      ],
      transItems: {
        en: ["When the verb begins with a vowel or h, {a}me / te / se{/a} becomes {a}m' / t' / s'{/a}."],
        ar: ["عندما يبدأ الفعل بحرف متحرك أو h، تتحول {a}me / te / se{/a} إلى {a}m' / t' / s'{/a}."],
        fa: ["وقتی فعل با واکه یا h شروع می‌شود، {a}me / te / se{/a} به {a}m' / t' / s'{/a} تبدیل می‌شود."],
        ti: ["እቲ ግሲ ብኣድማጺ ፊደል ወይ h ምስ ዝጅምር፣ {a}me / te / se{/a} ናብ {a}m' / t' / s'{/a} ይቕየር።"],
        uk: ["Коли дієслово починається з голосної або h, {a}me / te / se{/a} перетворюється на {a}m' / t' / s'{/a}."],
      },
    },
    {
      type: "highlight",
      label: "",
      items: [
        "je {s}me{/s} appelle → je {a}m'{/a}appelle",
        "il {s}se{/s} habille → il {a}s'{/a}habille",
      ],
      noBulletItems: [0, 1],
    },
  ],
  exercises: G1_EXERCISES["G1.6"](),
};
