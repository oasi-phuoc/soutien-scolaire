import type { GrammarLesson } from "../../grammar-data";
import { G1_EXERCISES } from "./g1-lesson-profiles";

/** G1.6 — Les verbes pronominaux */
export const A1_GR_PRONOMINAUX: GrammarLesson = {
  slug: "a1-gr-pronominaux",
  code: "G1.6",
  level: "A1",
  title: "Les verbes pronominaux",
  theory: [
    {
      type: "heading",
      text: "Utilisation",
      trans: {
        en: "Usage",
        ar: "الاستخدام",
        fa: "کاربرد",
        pt: "Utilização",
        so: "Isticmaal",
        ti: "ኣጠቓቕማ",
        tr: "Kullanım",
        ps: "کارونه",
        uk: "Вживання",
      },
    },
    {
      type: "text",
      noBulletItems: [
        0,
      ],
      items: [
        "Le sujet du verbe fait l'action sur lui-même. Un verbe pronominal est toujours accompagné d'un {a}pronom réfléchi{/a}.",
      ],
      transItems: {
        en: [
          "The subject of the verb performs the action on itself. A reflexive verb is always accompanied by a reflexive pronoun.",
        ],
        ar: [
          "يقوم فاعل الفعل بالفعل على نفسه. ويكون الفعل الانعكاسي دائماً مصحوباً بضمير انعكاسي.",
        ],
        fa: [
          "فاعل، عمل فعل را روی خودش انجام می‌دهد. فعل انعکاسی همیشه با یک ضمیر انعکاسی همراه است.",
        ],
        pt: [
          "O sujeito do verbo realiza a ação sobre si próprio. Um verbo reflexo é sempre acompanhado de um pronome reflexo.",
        ],
        so: [
          "Falaha falku ficilka isaga ayuu ku sameeyaa. Fal iscelin ah mar walba waxaa la socda magac-u-yaal iscelin.",
        ],
        ti: [
          "ተግባር ናይቲ ግሲ እቲ ርእሲ ኣብ ገዛእ ርእሱ ይፍጽሞ። ርእሰ-ግሲ ወትሩ ምስ ርእሰ-ተካኢ ስም ይመጽእ።",
        ],
        tr: [
          "Fiilin öznesi eylemi kendi üzerinde gerçekleştirir. Dönüşlü fiil her zaman dönüşlü zamirle birlikte kullanılır.",
        ],
        ps: [
          "د فعل فاعل عمل پر خپل ځان ترسره کوي. انعکاسي فعل تل له انعکاسي ضمیر سره راځي.",
        ],
        uk: [
          "Підмет виконує дію над самим собою. Зворотне дієслово завжди супроводжується зворотним займенником.",
        ],
      },
    },
    {
      type: "text",
      label: "Exemples",
      items: [
        "Elle {a}se{/a} regarde dans le miroir.",
      ],
      noBulletItems: [
        0,
      ],
    },
    {
      type: "heading",
      text: "Conjugaison",
      trans: {
        en: "Conjugation",
        ar: "التصريف",
        fa: "صرف",
        pt: "Conjugação",
        so: "Sarrifka falka",
        ti: "ምጽራይ",
        tr: "Fiil çekimi",
        ps: "ګردان",
        uk: "Дієвідміна",
      },
    },
    {
      type: "text",
      noBulletItems: [
        0,
      ],
      items: [
        "Les verbes pronominaux se conjuguent avec deux pronoms : le pronom sujet + un second pronom de la même personne. À l'infinitif, on utilise le pronom {a}se{/a} : se lever, se doucher.",
      ],
      transItems: {
        en: [
          "Reflexive verbs are conjugated with two pronouns: the subject pronoun + a second pronoun for the same person. In the infinitive, the pronoun {a}se{/a} is used: se lever, se doucher.",
        ],
        ar: [
          "تُصرَّف الأفعال الانعكاسية مع ضميرين: ضمير الفاعل + ضمير ثانٍ للشخص نفسه. في المصدر نستخدم الضمير {a}se{/a}: se lever, se doucher.",
        ],
        fa: [
          "فعل‌های انعکاسی با دو ضمیر صرف می‌شوند: ضمیر فاعلی + ضمیر دومی برای همان شخص. در مصدر از ضمیر {a}se{/a} استفاده می‌شود: se lever, se doucher.",
        ],
        pt: [
          "Os verbos reflexos conjugam-se com dois pronomes: o pronome sujeito + um segundo pronome para a mesma pessoa. No infinitivo, usa-se o pronome {a}se{/a}: se lever, se doucher.",
        ],
        so: [
          "Falalka iscelinta waxaa lagu sarraysiiyaa laba magac-u-yaal: magac-u-yaalka falaha + magac-u-yaal labaad oo isla qofka ah. Qaabka infinitif-ka, magac-u-yaalka {a}se{/a} ayaa la isticmaalaa: se lever, se doucher.",
        ],
        ti: [
          "ርእሰ-ግሲታት ብኽልተ ተካኢ ስማት ይጻረዩ፦ ተካኢ ስም ርእሲ + ናይቲ ተመሳሳሊ ሰብ ካልኣይ ተካኢ ስም። ኣብ መሰረታዊ ግሲ {a}se{/a} ንጥቀም፦ se lever, se doucher።",
        ],
        tr: [
          "Dönüşlü fiiller iki zamirle çekilir: özne zamiri + aynı kişi için ikinci bir zamir. Mastarda {a}se{/a} zamiri kullanılır: se lever, se doucher.",
        ],
        ps: [
          "انعکاسي فعلونه له دوو ضمیرونو سره ګردانېږي: فاعلي ضمیر + د هماغه شخص لپاره دوهم ضمیر. په مصدر کې {a}se{/a} ضمیر کارول کېږي: se lever, se doucher.",
        ],
        uk: [
          "Зворотні дієслова відмінюються з двома займенниками: займенником-підметом + другим займенником тієї самої особи. В інфінітиві вживається займенник {a}se{/a}: se lever, se doucher.",
        ],
      },
    },
    {
      type: "grid",
      headers: [
        "Sujet",
        "Pronom réfléchi",
      ],
      transHeaders: {
        en: [
          "Subject",
          "Reflexive pronoun",
        ],
        ar: [
          "الفاعل",
          "الضمير الانعكاسي",
        ],
        fa: [
          "فاعل",
          "ضمیر انعکاسی",
        ],
        pt: [
          "Sujeito",
          "Pronome reflexo",
        ],
        so: [
          "Fale",
          "Magac-u-yaal iscelin",
        ],
        ti: [
          "ርእሲ",
          "ርእሰ-ተካኢ ስም",
        ],
        tr: [
          "Özne",
          "Dönüşlü zamir",
        ],
        ps: [
          "فاعل",
          "انعکاسي ضمیر",
        ],
        uk: [
          "Підмет",
          "Зворотний займенник",
        ],
      },
      colWidths: [
        "33%",
        "67%",
      ],
      boldFirstCol: true,
      rows: [
        [
          "je",
          "me (m')",
        ],
        [
          "tu",
          "te (t')",
        ],
        [
          "il / elle / on",
          "se (s')",
        ],
        [
          "nous",
          "nous",
        ],
        [
          "vous",
          "vous",
        ],
        [
          "ils / elles",
          "se (s')",
        ],
      ],
    },
    {
      type: "heading",
      text: "Prononciation et orthographe",
      trans: {
        en: "Pronunciation and spelling",
        ar: "النطق والإملاء",
        fa: "تلفظ و املا",
        pt: "Pronúncia e ortografia",
        so: "Ku dhawaaqid iyo higaad",
        ti: "ኣደማምጻን ኣጸሓሕፋን",
        tr: "Telaffuz ve yazım",
        ps: "تلفظ او املا",
        uk: "Вимова та правопис",
      },
    },
    {
      type: "text",
      noBulletItems: [
        0,
      ],
      items: [
        "Les pronoms {a}me, te, se{/a} deviennent {a}m', t', s'{/a} devant une voyelle ou un h muet.",
      ],
      transItems: {
        en: [
          "The pronouns {a}me, te, se{/a} become {a}m', t', s'{/a} before a vowel or a silent h.",
        ],
        ar: [
          "تتحول الضمائر {a}me, te, se{/a} إلى {a}m', t', s'{/a} قبل حرف متحرك أو h صامت.",
        ],
        fa: [
          "ضمیرهای {a}me, te, se{/a} پیش از واکه یا h بی‌صدا به {a}m', t', s'{/a} تبدیل می‌شوند.",
        ],
        pt: [
          "Os pronomes {a}me, te, se{/a} tornam-se {a}m', t', s'{/a} antes de uma vogal ou de um h mudo.",
        ],
        so: [
          "Magac-u-yaallada {a}me, te, se{/a} waxay noqdaan {a}m', t', s'{/a} ka hor shaqal ama h aan dhawaaqin.",
        ],
        ti: [
          "እቶም {a}me, te, se{/a} ዝብሉ ተካኢ ስማት ቅድሚ ኣድማጺ ፊደል ወይ ዘይድመጽ h ናብ {a}m', t', s'{/a} ይቕየሩ።",
        ],
        tr: [
          "{a}me, te, se{/a} zamirleri bir ünlüden veya sessiz h'den önce {a}m', t', s'{/a} olur.",
        ],
        ps: [
          "ضمیرونه {a}me, te, se{/a} د واول یا چوپ h مخکې {a}m', t', s'{/a} کېږي.",
        ],
        uk: [
          "Займенники {a}me, te, se{/a} перетворюються на {a}m', t', s'{/a} перед голосною або німою h.",
        ],
      },
    },
    {
      type: "text",
      label: "",
      items: [
        "Je {s}me{/s} habille → Je {a}m'{/a}habille.",
        "Tu {s}te{/s} amuses → Tu {a}t'{/a}amuses.",
        "Elle {s}se{/s} arrête → Elle {a}s'{/a}arrête.",
        "Ils {s}se{/s} embrassent → Ils {a}s'{/a}embrassent.",
      ],
      noBulletItems: [
        0,
        1,
        2,
        3,
      ],
    },
    {
      type: "heading",
      text: "Verbes pronominaux courants",
      trans: {
        en: "Common reflexive verbs",
        ar: "أفعال انعكاسية شائعة",
        fa: "افعال انعکاسی پرکاربرد",
        pt: "Verbos reflexos comuns",
        so: "Falal iscelin oo caadi ah",
        ti: "ልሙዳት ናይ ርእሰ-ግሲታት",
        tr: "Yaygın dönüşlü fiiller",
        ps: "عام انعکاسي فعلونه",
        uk: "Поширені зворотні дієслова",
      },
    },
    {
      type: "verb_toggle",
      verbs: [
        {
          infinitive: "se lever",
          radical: "",
          reflexivePronouns: [
            "me",
            "te",
            "se",
            "nous",
            "vous",
            "se",
          ],
          rows: [
            {
              pronoun: "je",
              ending: "e",
              radical: "lèv",
            },
            {
              pronoun: "tu",
              ending: "es",
              radical: "lèv",
            },
            {
              pronoun: "il / elle / on",
              ending: "e",
              radical: "lèv",
            },
            {
              pronoun: "nous",
              ending: "ons",
              radical: "lev",
            },
            {
              pronoun: "vous",
              ending: "ez",
              radical: "lev",
            },
            {
              pronoun: "ils / elles",
              ending: "ent",
              radical: "lèv",
            },
          ],
        },
        {
          infinitive: "se coucher",
          radical: "couch",
          reflexivePronouns: [
            "me",
            "te",
            "se",
            "nous",
            "vous",
            "se",
          ],
          rows: [
            {
              pronoun: "je",
              ending: "e",
            },
            {
              pronoun: "tu",
              ending: "es",
            },
            {
              pronoun: "il / elle / on",
              ending: "e",
            },
            {
              pronoun: "nous",
              ending: "ons",
            },
            {
              pronoun: "vous",
              ending: "ez",
            },
            {
              pronoun: "ils / elles",
              ending: "ent",
            },
          ],
        },
        {
          infinitive: "se laver",
          radical: "lav",
          reflexivePronouns: [
            "me",
            "te",
            "se",
            "nous",
            "vous",
            "se",
          ],
          rows: [
            {
              pronoun: "je",
              ending: "e",
            },
            {
              pronoun: "tu",
              ending: "es",
            },
            {
              pronoun: "il / elle / on",
              ending: "e",
            },
            {
              pronoun: "nous",
              ending: "ons",
            },
            {
              pronoun: "vous",
              ending: "ez",
            },
            {
              pronoun: "ils / elles",
              ending: "ent",
            },
          ],
        },
        {
          infinitive: "se doucher",
          radical: "douch",
          reflexivePronouns: [
            "me",
            "te",
            "se",
            "nous",
            "vous",
            "se",
          ],
          rows: [
            {
              pronoun: "je",
              ending: "e",
            },
            {
              pronoun: "tu",
              ending: "es",
            },
            {
              pronoun: "il / elle / on",
              ending: "e",
            },
            {
              pronoun: "nous",
              ending: "ons",
            },
            {
              pronoun: "vous",
              ending: "ez",
            },
            {
              pronoun: "ils / elles",
              ending: "ent",
            },
          ],
        },
        {
          infinitive: "se brosser",
          radical: "bross",
          reflexivePronouns: [
            "me",
            "te",
            "se",
            "nous",
            "vous",
            "se",
          ],
          rows: [
            {
              pronoun: "je",
              ending: "e",
            },
            {
              pronoun: "tu",
              ending: "es",
            },
            {
              pronoun: "il / elle / on",
              ending: "e",
            },
            {
              pronoun: "nous",
              ending: "ons",
            },
            {
              pronoun: "vous",
              ending: "ez",
            },
            {
              pronoun: "ils / elles",
              ending: "ent",
            },
          ],
        },
        {
          infinitive: "se raser",
          radical: "ras",
          reflexivePronouns: [
            "me",
            "te",
            "se",
            "nous",
            "vous",
            "se",
          ],
          rows: [
            {
              pronoun: "je",
              ending: "e",
            },
            {
              pronoun: "tu",
              ending: "es",
            },
            {
              pronoun: "il / elle / on",
              ending: "e",
            },
            {
              pronoun: "nous",
              ending: "ons",
            },
            {
              pronoun: "vous",
              ending: "ez",
            },
            {
              pronoun: "ils / elles",
              ending: "ent",
            },
          ],
        },
        {
          infinitive: "se coiffer",
          radical: "coiff",
          reflexivePronouns: [
            "me",
            "te",
            "se",
            "nous",
            "vous",
            "se",
          ],
          rows: [
            {
              pronoun: "je",
              ending: "e",
            },
            {
              pronoun: "tu",
              ending: "es",
            },
            {
              pronoun: "il / elle / on",
              ending: "e",
            },
            {
              pronoun: "nous",
              ending: "ons",
            },
            {
              pronoun: "vous",
              ending: "ez",
            },
            {
              pronoun: "ils / elles",
              ending: "ent",
            },
          ],
        },
        {
          infinitive: "s'habiller",
          radical: "habill",
          reflexivePronouns: [
            "m'",
            "t'",
            "s'",
            "nous",
            "vous",
            "s'",
          ],
          rows: [
            {
              pronoun: "je",
              ending: "e",
            },
            {
              pronoun: "tu",
              ending: "es",
            },
            {
              pronoun: "il / elle / on",
              ending: "e",
            },
            {
              pronoun: "nous",
              ending: "ons",
            },
            {
              pronoun: "vous",
              ending: "ez",
            },
            {
              pronoun: "ils / elles",
              ending: "ent",
            },
          ],
        },
        {
          infinitive: "se reposer",
          radical: "repos",
          reflexivePronouns: [
            "me",
            "te",
            "se",
            "nous",
            "vous",
            "se",
          ],
          rows: [
            {
              pronoun: "je",
              ending: "e",
            },
            {
              pronoun: "tu",
              ending: "es",
            },
            {
              pronoun: "il / elle / on",
              ending: "e",
            },
            {
              pronoun: "nous",
              ending: "ons",
            },
            {
              pronoun: "vous",
              ending: "ez",
            },
            {
              pronoun: "ils / elles",
              ending: "ent",
            },
          ],
        },
      ],
      buttonCols: 3,
    },
    {
      type: "heading",
      text: "La négation",
      trans: {
        en: "The negation",
        ar: "النفي",
        fa: "نفی",
        pt: "A negação",
        so: "Diidmada",
        ti: "ኣሉታ",
        tr: "Olumsuzluk",
        ps: "نفي",
        uk: "Заперечення",
      },
    },
    {
      type: "text",
      noBulletItems: [
        0,
      ],
      items: [
        "La négation {a}ne … pas{/a} encadre le pronom réfléchi ET le verbe.",
      ],
      transItems: {
        en: [
          "The negation {a}ne … pas{/a} surrounds both the reflexive pronoun AND the verb.",
        ],
        ar: [
          "يحيط النفي {a}ne … pas{/a} بالضمير الانعكاسي والفعل معاً.",
        ],
        fa: [
          "ساخت منفی {a}ne … pas{/a} هم ضمیر انعکاسی و هم فعل را دربر می‌گیرد.",
        ],
        pt: [
          "A negação {a}ne … pas{/a} envolve tanto o pronome reflexo COMO o verbo.",
        ],
        so: [
          "Diidmada {a}ne … pas{/a} waxay ku wareegtaa magac-u-yaalka iscelinta IYO falka.",
        ],
        ti: [
          "እቲ {a}ne … pas{/a} ዝብል ኣሉታ ነቲ ርእሰ-ተካኢ ስምን ነቲ ግስን ብሓደ ይኸቦም።",
        ],
        tr: [
          "{a}ne … pas{/a} olumsuzluğu hem dönüşlü zamiri HEM de fiili çevreler.",
        ],
        ps: [
          "نفي {a}ne … pas{/a} هم انعکاسي ضمیر او هم فعل راچاپېروي.",
        ],
        uk: [
          "Заперечення {a}ne … pas{/a} охоплює і зворотний займенник, І дієслово.",
        ],
      },
    },
    {
      type: "text",
      label: "",
      items: [
        "Sujet + {a}ne{/a} + pronom réfléchi + verbe + {a}pas{/a}",
      ],
      transItems: {
        en: [
          "Subject + {a}ne{/a} + reflexive pronoun + verb + {a}pas{/a}",
        ],
        ar: [
          "الفاعل + {a}ne{/a} + الضمير الانعكاسي + الفعل + {a}pas{/a}",
        ],
        fa: [
          "فاعل + {a}ne{/a} + ضمیر انعکاسی + فعل + {a}pas{/a}",
        ],
        pt: [
          "Sujeito + {a}ne{/a} + pronome reflexo + verbo + {a}pas{/a}",
        ],
        so: [
          "Fale + {a}ne{/a} + magac-u-yaal iscelin + fal + {a}pas{/a}",
        ],
        ti: [
          "ርእሲ + {a}ne{/a} + ርእሰ-ተካኢ ስም + ግሲ + {a}pas{/a}",
        ],
        tr: [
          "Özne + {a}ne{/a} + dönüşlü zamir + fiil + {a}pas{/a}",
        ],
        ps: [
          "فاعل + {a}ne{/a} + انعکاسي ضمیر + فعل + {a}pas{/a}",
        ],
        uk: [
          "Підмет + {a}ne{/a} + зворотний займенник + дієслово + {a}pas{/a}",
        ],
      },
      noBulletItems: [
        0,
      ],
    },
    {
      type: "verb_toggle",
      negation: true,
      verbs: [
        {
          infinitive: "se lever",
          radical: "",
          reflexivePronouns: [
            "me",
            "te",
            "se",
            "nous",
            "vous",
            "se",
          ],
          rows: [
            {
              pronoun: "je",
              ending: "e",
              radical: "lèv",
            },
            {
              pronoun: "tu",
              ending: "es",
              radical: "lèv",
            },
            {
              pronoun: "il / elle / on",
              ending: "e",
              radical: "lèv",
            },
            {
              pronoun: "nous",
              ending: "ons",
              radical: "lev",
            },
            {
              pronoun: "vous",
              ending: "ez",
              radical: "lev",
            },
            {
              pronoun: "ils / elles",
              ending: "ent",
              radical: "lèv",
            },
          ],
        },
        {
          infinitive: "se coucher",
          radical: "couch",
          reflexivePronouns: [
            "me",
            "te",
            "se",
            "nous",
            "vous",
            "se",
          ],
          rows: [
            {
              pronoun: "je",
              ending: "e",
            },
            {
              pronoun: "tu",
              ending: "es",
            },
            {
              pronoun: "il / elle / on",
              ending: "e",
            },
            {
              pronoun: "nous",
              ending: "ons",
            },
            {
              pronoun: "vous",
              ending: "ez",
            },
            {
              pronoun: "ils / elles",
              ending: "ent",
            },
          ],
        },
        {
          infinitive: "se laver",
          radical: "lav",
          reflexivePronouns: [
            "me",
            "te",
            "se",
            "nous",
            "vous",
            "se",
          ],
          rows: [
            {
              pronoun: "je",
              ending: "e",
            },
            {
              pronoun: "tu",
              ending: "es",
            },
            {
              pronoun: "il / elle / on",
              ending: "e",
            },
            {
              pronoun: "nous",
              ending: "ons",
            },
            {
              pronoun: "vous",
              ending: "ez",
            },
            {
              pronoun: "ils / elles",
              ending: "ent",
            },
          ],
        },
        {
          infinitive: "se doucher",
          radical: "douch",
          reflexivePronouns: [
            "me",
            "te",
            "se",
            "nous",
            "vous",
            "se",
          ],
          rows: [
            {
              pronoun: "je",
              ending: "e",
            },
            {
              pronoun: "tu",
              ending: "es",
            },
            {
              pronoun: "il / elle / on",
              ending: "e",
            },
            {
              pronoun: "nous",
              ending: "ons",
            },
            {
              pronoun: "vous",
              ending: "ez",
            },
            {
              pronoun: "ils / elles",
              ending: "ent",
            },
          ],
        },
        {
          infinitive: "se brosser",
          radical: "bross",
          reflexivePronouns: [
            "me",
            "te",
            "se",
            "nous",
            "vous",
            "se",
          ],
          rows: [
            {
              pronoun: "je",
              ending: "e",
            },
            {
              pronoun: "tu",
              ending: "es",
            },
            {
              pronoun: "il / elle / on",
              ending: "e",
            },
            {
              pronoun: "nous",
              ending: "ons",
            },
            {
              pronoun: "vous",
              ending: "ez",
            },
            {
              pronoun: "ils / elles",
              ending: "ent",
            },
          ],
        },
        {
          infinitive: "se raser",
          radical: "ras",
          reflexivePronouns: [
            "me",
            "te",
            "se",
            "nous",
            "vous",
            "se",
          ],
          rows: [
            {
              pronoun: "je",
              ending: "e",
            },
            {
              pronoun: "tu",
              ending: "es",
            },
            {
              pronoun: "il / elle / on",
              ending: "e",
            },
            {
              pronoun: "nous",
              ending: "ons",
            },
            {
              pronoun: "vous",
              ending: "ez",
            },
            {
              pronoun: "ils / elles",
              ending: "ent",
            },
          ],
        },
        {
          infinitive: "se coiffer",
          radical: "coiff",
          reflexivePronouns: [
            "me",
            "te",
            "se",
            "nous",
            "vous",
            "se",
          ],
          rows: [
            {
              pronoun: "je",
              ending: "e",
            },
            {
              pronoun: "tu",
              ending: "es",
            },
            {
              pronoun: "il / elle / on",
              ending: "e",
            },
            {
              pronoun: "nous",
              ending: "ons",
            },
            {
              pronoun: "vous",
              ending: "ez",
            },
            {
              pronoun: "ils / elles",
              ending: "ent",
            },
          ],
        },
        {
          infinitive: "s'habiller",
          radical: "habill",
          reflexivePronouns: [
            "m'",
            "t'",
            "s'",
            "nous",
            "vous",
            "s'",
          ],
          rows: [
            {
              pronoun: "je",
              ending: "e",
            },
            {
              pronoun: "tu",
              ending: "es",
            },
            {
              pronoun: "il / elle / on",
              ending: "e",
            },
            {
              pronoun: "nous",
              ending: "ons",
            },
            {
              pronoun: "vous",
              ending: "ez",
            },
            {
              pronoun: "ils / elles",
              ending: "ent",
            },
          ],
        },
        {
          infinitive: "se reposer",
          radical: "repos",
          reflexivePronouns: [
            "me",
            "te",
            "se",
            "nous",
            "vous",
            "se",
          ],
          rows: [
            {
              pronoun: "je",
              ending: "e",
            },
            {
              pronoun: "tu",
              ending: "es",
            },
            {
              pronoun: "il / elle / on",
              ending: "e",
            },
            {
              pronoun: "nous",
              ending: "ons",
            },
            {
              pronoun: "vous",
              ending: "ez",
            },
            {
              pronoun: "ils / elles",
              ending: "ent",
            },
          ],
        },
      ],
      buttonCols: 3,
    },
    {
      type: "heading",
      text: "Réfléchis vs réciproques",
      sub: true,
      accent: true,
      trans: {
        en: "Reflexive vs reciprocal",
        ar: "انعكاسي مقابل متبادل",
        fa: "انعکاسی در برابر متقابل",
        pt: "Reflexo vs recíproco",
        so: "Iscelin iyo isdhaafsi",
        ti: "ርእሰ-ግሲ ኣንጻር ምልውዋጥ",
        tr: "Dönüşlü ve karşılıklı",
        ps: "انعکاسي او متقابل",
        uk: "Зворотні проти взаємних",
      },
    },
    {
      type: "grid",
      headers: [
        "Type",
        "Sens",
        "Exemple",
      ],
      transHeaders: {
        en: [
          "Type",
          "Meaning",
          "Example",
        ],
        ar: [
          "النوع",
          "المعنى",
          "مثال",
        ],
        fa: [
          "نوع",
          "معنی",
          "مثال",
        ],
        pt: [
          "Tipo",
          "Significado",
          "Exemplo",
        ],
        so: [
          "Nooc",
          "Macne",
          "Tusaale",
        ],
        ti: [
          "ዓይነት",
          "ትርጉም",
          "ኣብነት",
        ],
        tr: [
          "Tür",
          "Anlam",
          "Örnek",
        ],
        ps: [
          "ډول",
          "معنا",
          "بېلګه",
        ],
        uk: [
          "Тип",
          "Значення",
          "Приклад",
        ],
      },
      boldFirstCol: true,
      rows: [
        [
          "Réfléchi",
          "Le sujet agit sur lui-même.",
          "Je {a}me{/a} regarde dans le miroir.",
        ],
        [
          "Réciproque",
          "Les sujets agissent l'un sur l'autre.",
          "Nous {a}nous{/a} regardons. (each other)",
        ],
      ],
      transRows: {
        en: [
          [
            "Reflexive",
            "The subject acts on itself.",
            "Je {a}me{/a} regarde dans le miroir.",
          ],
          [
            "Reciprocal",
            "The subjects act on each other.",
            "Nous {a}nous{/a} regardons. (each other)",
          ],
        ],
        ar: [
          [
            "انعكاسي",
            "يقوم الفاعل بالفعل على نفسه.",
            "Je {a}me{/a} regarde dans le miroir.",
          ],
          [
            "متبادل",
            "يقوم الفاعلون بالفعل بعضهم على بعض.",
            "Nous {a}nous{/a} regardons. (each other)",
          ],
        ],
        fa: [
          [
            "انعکاسی",
            "فاعل عمل را روی خودش انجام می‌دهد.",
            "Je {a}me{/a} regarde dans le miroir.",
          ],
          [
            "متقابل",
            "فاعل‌ها عمل را روی یکدیگر انجام می‌دهند.",
            "Nous {a}nous{/a} regardons. (each other)",
          ],
        ],
        pt: [
          [
            "Reflexo",
            "O sujeito age sobre si próprio.",
            "Je {a}me{/a} regarde dans le miroir.",
          ],
          [
            "Recíproco",
            "Os sujeitos agem uns sobre os outros.",
            "Nous {a}nous{/a} regardons. (each other)",
          ],
        ],
        so: [
          [
            "Iscelin",
            "Faluhu ficilka isaga ayuu ku sameeyaa.",
            "Je {a}me{/a} regarde dans le miroir.",
          ],
          [
            "Isdhaafsi",
            "Falayaashu midba midka kale ayuu ficilka ku sameeyaa.",
            "Nous {a}nous{/a} regardons. (each other)",
          ],
        ],
        ti: [
          [
            "ርእሰ-ግሲ",
            "እቲ ርእሲ ኣብ ገዛእ ርእሱ ይፍጽም።",
            "Je {a}me{/a} regarde dans le miroir.",
          ],
          [
            "ምልውዋጥ",
            "እቶም ርእስታት ኣብ ነንሓድሕዶም ይፍጽሙ።",
            "Nous {a}nous{/a} regardons. (each other)",
          ],
        ],
        tr: [
          [
            "Dönüşlü",
            "Özne eylemi kendisi üzerinde yapar.",
            "Je {a}me{/a} regarde dans le miroir.",
          ],
          [
            "Karşılıklı",
            "Özneler birbirleri üzerinde eylem yapar.",
            "Nous {a}nous{/a} regardons. (each other)",
          ],
        ],
        ps: [
          [
            "انعکاسي",
            "فاعل عمل پر خپل ځان کوي.",
            "Je {a}me{/a} regarde dans le miroir.",
          ],
          [
            "متقابل",
            "فاعلونه پر یو بل عمل کوي.",
            "Nous {a}nous{/a} regardons. (each other)",
          ],
        ],
        uk: [
          [
            "Зворотний",
            "Підмет діє на самого себе.",
            "Je {a}me{/a} regarde dans le miroir.",
          ],
          [
            "Взаємний",
            "Підмети діють один на одного.",
            "Nous {a}nous{/a} regardons. (each other)",
          ],
        ],
      },
    },
    {
      type: "heading",
      text: "Attention",
      trans: {
        en: "Important",
        ar: "انتبه",
        fa: "توجه",
        pt: "Importante",
        so: "Muhiim",
        ti: "ኣስተውዕል",
        tr: "Önemli",
        ps: "مهم",
        uk: "Увага",
      },
    },
    {
      type: "text",
      noBulletItems: [
        0,
      ],
      items: [
        "Quand le verbe commence par une voyelle ou un h, {a}me / te / se{/a} devient {a}m' / t' / s'{/a}.",
      ],
      transItems: {
        en: [
          "When the verb begins with a vowel or h, {a}me / te / se{/a} becomes {a}m' / t' / s'{/a}.",
        ],
        ar: [
          "عندما يبدأ الفعل بحرف متحرك أو h، تتحول {a}me / te / se{/a} إلى {a}m' / t' / s'{/a}.",
        ],
        fa: [
          "وقتی فعل با واکه یا h شروع می‌شود، {a}me / te / se{/a} به {a}m' / t' / s'{/a} تبدیل می‌شود.",
        ],
        pt: [
          "Quando o verbo começa por vogal ou h, {a}me / te / se{/a} torna-se {a}m' / t' / s'{/a}.",
        ],
        so: [
          "Marka falku ku bilaabmo shaqal ama h, {a}me / te / se{/a} waxay noqdaan {a}m' / t' / s'{/a}.",
        ],
        ti: [
          "እቲ ግሲ ብኣድማጺ ፊደል ወይ h ምስ ዝጅምር፣ {a}me / te / se{/a} ናብ {a}m' / t' / s'{/a} ይቕየር።",
        ],
        tr: [
          "Fiil bir ünlüyle veya h ile başladığında {a}me / te / se{/a}, {a}m' / t' / s'{/a} olur.",
        ],
        ps: [
          "کله چې فعل په واول یا h پیل شي، {a}me / te / se{/a} په {a}m' / t' / s'{/a} بدلېږي.",
        ],
        uk: [
          "Коли дієслово починається з голосної або h, {a}me / te / se{/a} перетворюється на {a}m' / t' / s'{/a}.",
        ],
      },
    },
    {
      type: "text",
      label: "",
      items: [
        "je {s}me{/s} appelle → je {a}m'{/a}appelle",
        "il {s}se{/s} habille → il {a}s'{/a}habille",
      ],
      noBulletItems: [
        0,
        1,
      ],
    },
    {
      type: "heading",
      text: "Entraînement conjugaison",
    },
    {
      type: "heading",
      text: "Les verbes pronominaux",
      trans: {
        en: "Reflexive verbs",
        ar: "الأفعال الانعكاسية",
        fa: "افعال انعکاسی",
        ti: "ርእሰ-ጠቓሚ ግሳት",
        uk: "Зворотні дієслова",
      },
    },
    {
      type: "text",
      text: "Un verbe pronominal s'utilise avec un {a}pronom réfléchi{/a} (me, te, se, nous, vous, se).",
      transText: {
        en: "A reflexive verb is used with a {a}reflexive pronoun{/a} (me, te, se, nous, vous, se).",
        ar: "يُستخدم الفعل الانعكاسي مع {a}ضمير انعكاسي{/a} (me, te, se, nous, vous, se).",
        fa: "فعل انعکاسی با {a}ضمیر انعکاسی{/a} (me, te, se, nous, vous, se) به‌کار می‌رود.",
        ti: "ርእሰ-ጠቓሚ ግሲ ምስ {a}ናይ ርእሲ ጸጋ ቃል{/a} (me, te, se, nous, vous, se) ይጥቀም።",
        uk: "Зворотне дієслово вживається з {a}зворотним займенником{/a} (me, te, se, nous, vous, se).",
      },
      items: [
        "Le pronom réfléchi change selon le sujet.",
        "À l'infinitif : {a}se{/a} laver, {a}se{/a} lever, {a}s'{/a}appeler…",
      ],
      transItems: {
        en: [
          "The reflexive pronoun changes according to the subject.",
          "In the infinitive: {a}se{/a} laver, {a}se{/a} lever, {a}s'{/a}appeler…",
        ],
        ar: [
          "يتغير الضمير الانعكاسي حسب الفاعل.",
          "في المصدر: {a}se{/a} laver، {a}se{/a} lever، {a}s'{/a}appeler…",
        ],
        fa: [
          "ضمیر انعکاسی بسته به فاعل تغییر می‌کند.",
          "در مصدر: {a}se{/a} laver، {a}se{/a} lever، {a}s'{/a}appeler…",
        ],
        ti: [
          "ናይ ርእሲ ጸጋ ቃል ብኣንጻረ ርእሲ ይቕየር።",
          "ኣብ መሰረታዊ ግሲ፦ {a}se{/a} laver፣ {a}se{/a} lever፣ {a}s'{/a}appeler…",
        ],
        uk: [
          "Зворотний займенник змінюється залежно від підмета.",
          "В інфінітиві: {a}se{/a} laver, {a}se{/a} lever, {a}s'{/a}appeler…",
        ],
      },
    },
    {
      type: "heading",
      text: "Conjugaison : se laver",
      sub: true,
      accent: true,
      trans: {
        en: "Conjugation: se laver",
        ar: "التصريف: se laver",
        fa: "صرف: se laver",
        ti: "ምጥቃም፦ se laver",
        uk: "Відмінювання: se laver",
      },
    },
    {
      type: "table",
      tables: [
        {
          verb: "se laver",
          accentForms: true,
          rows: [
            {
              pronoun: "je",
              form: "me lave",
            },
            {
              pronoun: "tu",
              form: "te laves",
            },
            {
              pronoun: "il / elle / on",
              form: "se lave",
            },
            {
              pronoun: "nous",
              form: "nous lavons",
            },
            {
              pronoun: "vous",
              form: "vous lavez",
            },
            {
              pronoun: "ils / elles",
              form: "se lavent",
            },
          ],
        },
        {
          verb: "s'appeler",
          accentForms: true,
          rows: [
            {
              pronoun: "je",
              form: "m'appelle",
            },
            {
              pronoun: "tu",
              form: "t'appelles",
            },
            {
              pronoun: "il / elle / on",
              form: "s'appelle",
            },
            {
              pronoun: "nous",
              form: "nous appelons",
            },
            {
              pronoun: "vous",
              form: "vous appelez",
            },
            {
              pronoun: "ils / elles",
              form: "s'appellent",
            },
          ],
        },
      ],
    },
    {
      type: "heading",
      text: "Réfléchis vs réciproques",
      sub: true,
      accent: true,
      trans: {
        en: "Reflexive vs reciprocal",
        ar: "انعكاسي مقابل تبادلي",
        fa: "انعکاسی در برابر متقابل",
        ti: "ርእሰ-ጠቓሚ ከምኡ ድማ ተዋሳእታዊ",
        uk: "Зворотні та взаємні",
      },
    },
    {
      type: "grid",
      headers: [
        "Type",
        "Sens",
        "Exemple",
      ],
      boldFirstCol: true,
      rows: [
        [
          "Réfléchi",
          "Le sujet agit sur lui-même.",
          "Je {a}me{/a} regarde dans le miroir.",
        ],
        [
          "Réciproque",
          "Les sujets agissent l'un sur l'autre.",
          "Nous {a}nous{/a} regardons. (each other)",
        ],
      ],
      transHeaders: {
        en: [
          "Type",
          "Meaning",
          "Example",
        ],
        ar: [
          "النوع",
          "المعنى",
          "مثال",
        ],
        fa: [
          "نوع",
          "معنا",
          "مثال",
        ],
        ti: [
          "ዓይነት",
          "ትርጉም",
          "ኣብነት",
        ],
        uk: [
          "Тип",
          "Значення",
          "Приклад",
        ],
      },
      transRows: {
        en: [
          [
            "Reflexive",
            "The subject acts on itself.",
            "Je {a}me{/a} regarde dans le miroir. (I look at myself in the mirror.)",
          ],
          [
            "Reciprocal",
            "The subjects act on each other.",
            "Nous {a}nous{/a} regardons. (We look at each other.)",
          ],
        ],
        ar: [
          [
            "انعكاسي",
            "الفاعل يتصرّف على نفسه.",
            "Je {a}me{/a} regarde dans le miroir. (أنظر إلى نفسي في المرآة.)",
          ],
          [
            "تبادلي",
            "الفاعلون يتصرّفون على بعضهم.",
            "Nous {a}nous{/a} regardons. (ننظر إلى بعضنا.)",
          ],
        ],
        fa: [
          [
            "انعکاسی",
            "فاعل بر خودش عمل می‌کند.",
            "Je {a}me{/a} regarde dans le miroir. (به آینه نگاه می‌کنم.)",
          ],
          [
            "متقابل",
            "فاعل‌ها بر یکدیگر عمل می‌کنند.",
            "Nous {a}nous{/a} regardons. (به یکدیگر نگاه می‌کنیم.)",
          ],
        ],
        ti: [
          [
            "ርእሰ-ጠቓሚ",
            "ርእሲ ኣብ ነብሱ ይሰርሕ።",
            "Je {a}me{/a} regarde dans le miroir. (ኣብ መስትያት ነብሰይ እርእይ።)",
          ],
          [
            "ተዋሳእታዊ",
            "ርእስያት ኣብ ሓድሕዶም ይሰርሑ።",
            "Nous {a}nous{/a} regardons. (ሓድሕድና ንርእይ።)",
          ],
        ],
        uk: [
          [
            "Зворотний",
            "Підмет діє на себе.",
            "Je {a}me{/a} regarde dans le miroir. (Я дивлюся на себе в дзеркалі.)",
          ],
          [
            "Взаємний",
            "Підмети діють один на одного.",
            "Nous {a}nous{/a} regardons. (Ми дивимося один на одного.)",
          ],
        ],
      },
    },
    {
      type: "text",
      label: "Verbes pronominaux courants",
      items: [
        "se lever — se coucher — se réveiller (routine quotidienne)",
        "se laver — se coiffer — s'habiller (hygiène)",
        "se souvenir — s'ennuyer — se sentir (état)",
        "se parler — se voir — s'écrire (réciproques)",
      ],
      transLabel: {
        en: "Common reflexive verbs",
        ar: "أفعال انعكاسية شائعة",
        fa: "افعال انعکاسی رایج",
        ti: "ተደጋጋሚ ርእሰ-ጠቓሚ ግሳት",
        uk: "Поширені зворотні дієслова",
      },
      transItems: {
        en: [
          "se lever — se coucher — se réveiller (daily routine)",
          "se laver — se coiffer — s'habiller (hygiene)",
          "se souvenir — s'ennuyer — se sentir (state)",
          "se parler — se voir — s'écrire (reciprocal)",
        ],
        ar: [
          "se lever — se coucher — se réveiller (الروتين اليومي)",
          "se laver — se coiffer — s'habiller (النظافة)",
          "se souvenir — s'ennuyer — se sentir (الحالة)",
          "se parler — se voir — s'écrire (تبادلي)",
        ],
        fa: [
          "se lever — se coucher — se réveiller (روال روزانه)",
          "se laver — se coiffer — s'habiller (بهداشت)",
          "se souvenir — s'ennuyer — se sentir (حالت)",
          "se parler — se voir — s'écrire (متقابل)",
        ],
        ti: [
          "se lever — se coucher — se réveiller (መዓልታዊ ልማድ)",
          "se laver — se coiffer — s'habiller (ንጽሕና)",
          "se souvenir — s'ennuyer — se sentir (ኩነታት)",
          "se parler — se voir — s'écrire (ተዋሳእታዊ)",
        ],
        uk: [
          "se lever — se coucher — se réveiller (щоденна рутина)",
          "se laver — se coiffer — s'habiller (гігієна)",
          "se souvenir — s'ennuyer — se sentir (стан)",
          "se parler — se voir — s'écrire (взаємні)",
        ],
      },
    },
    {
      type: "heading",
      text: "Forme négative",
      sub: true,
      accent: true,
      trans: {
        en: "Negative form",
        ar: "صيغة النفي",
        fa: "صورت منفی",
        ti: "ኣሉታዊ ቅርጺ",
        uk: "Заперечна форма",
      },
    },
    {
      type: "grid",
      headers: [
        "Affirmatif",
        "Négatif",
      ],
      rows: [
        [
          "Je me lève.",
          "Je {a}ne{/a} me lève {a}pas{/a}.",
        ],
        [
          "Il se rase.",
          "Il {a}ne{/a} se rase {a}pas{/a}.",
        ],
        [
          "Nous nous voyons.",
          "Nous {a}ne{/a} nous voyons {a}pas{/a}.",
        ],
      ],
      transHeaders: {
        en: [
          "Affirmative",
          "Negative",
        ],
        ar: [
          "إيجابي",
          "سلبي",
        ],
        fa: [
          "مثبت",
          "منفی",
        ],
        ti: [
          "ኣረጋግጺ",
          "ኣሉታዊ",
        ],
        uk: [
          "Стверджувальна",
          "Заперечна",
        ],
      },
      transRows: {
        en: [
          [
            "Je me lève. (I get up.)",
            "Je {a}ne{/a} me lève {a}pas{/a}. (I don't get up.)",
          ],
          [
            "Il se rase. (He shaves.)",
            "Il {a}ne{/a} se rase {a}pas{/a}. (He doesn't shave.)",
          ],
          [
            "Nous nous voyons. (We see each other.)",
            "Nous {a}ne{/a} nous voyons {a}pas{/a}. (We don't see each other.)",
          ],
        ],
        ar: [
          [
            "Je me lève. (أستيقظ.)",
            "Je {a}ne{/a} me lève {a}pas{/a}. (لا أستيقظ.)",
          ],
          [
            "Il se rase. (يحلق.)",
            "Il {a}ne{/a} se rase {a}pas{/a}. (لا يحلق.)",
          ],
          [
            "Nous nous voyons. (نرى بعضنا.)",
            "Nous {a}ne{/a} nous voyons {a}pas{/a}. (لا نرى بعضنا.)",
          ],
        ],
        fa: [
          [
            "Je me lève. (بلند می‌شوم.)",
            "Je {a}ne{/a} me lève {a}pas{/a}. (بلند نمی‌شوم.)",
          ],
          [
            "Il se rase. (اصلاح می‌کند.)",
            "Il {a}ne{/a} se rase {a}pas{/a}. (اصلاح نمی‌کند.)",
          ],
          [
            "Nous nous voyons. (همدیگر را می‌بینیم.)",
            "Nous {a}ne{/a} nous voyons {a}pas{/a}. (همدیگر را نمی‌بینیم.)",
          ],
        ],
        ti: [
          [
            "Je me lève. (ተንሲአ.)",
            "Je {a}ne{/a} me lève {a}pas{/a}. (ኣይተንሲእኩን.)",
          ],
          [
            "Il se rase. (ይሓጽብ.)",
            "Il {a}ne{/a} se rase {a}pas{/a}. (ኣይሓጽብን.)",
          ],
          [
            "Nous nous voyons. (ሓድሕድና ንርእይ.)",
            "Nous {a}ne{/a} nous voyons {a}pas{/a}. (ሓድሕድና ኣይንርእይን.)",
          ],
        ],
        uk: [
          [
            "Je me lève. (Я встаю.)",
            "Je {a}ne{/a} me lève {a}pas{/a}. (Я не встаю.)",
          ],
          [
            "Il se rase. (Він голиться.)",
            "Il {a}ne{/a} se rase {a}pas{/a}. (Він не голиться.)",
          ],
          [
            "Nous nous voyons. (Ми бачимо одне одного.)",
            "Nous {a}ne{/a} nous voyons {a}pas{/a}. (Ми не бачимо одне одного.)",
          ],
        ],
      },
    },
  ],
  exercises: G1_EXERCISES["G1.6"](),
};
