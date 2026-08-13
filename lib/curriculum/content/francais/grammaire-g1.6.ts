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
      text: "Le sujet du verbe fait l'action sur lui-même. Un verbe pronominal est toujours accompagné d'un {a}pronom réfléchi{/a}.",
      transText: {
        en: "The subject of the verb performs the action on itself. A reflexive verb is always accompanied by a reflexive pronoun.",
        ar: "يقوم فاعل الفعل بالفعل على نفسه. ويكون الفعل الانعكاسي دائماً مصحوباً بضمير انعكاسي.",
        fa: "فاعل، عمل فعل را روی خودش انجام می‌دهد. فعل انعکاسی همیشه با یک ضمیر انعکاسی همراه است.",
        pt: "O sujeito do verbo realiza a ação sobre si próprio. Um verbo reflexo é sempre acompanhado de um pronome reflexo.",
        so: "Falaha falku ficilka isaga ayuu ku sameeyaa. Fal iscelin ah mar walba waxaa la socda magac-u-yaal iscelin.",
        ti: "ተግባር ናይቲ ግሲ እቲ ርእሲ ኣብ ገዛእ ርእሱ ይፍጽሞ። ርእሰ-ግሲ ወትሩ ምስ ርእሰ-ተካኢ ስም ይመጽእ።",
        tr: "Fiilin öznesi eylemi kendi üzerinde gerçekleştirir. Dönüşlü fiil her zaman dönüşlü zamirle birlikte kullanılır.",
        ps: "د فعل فاعل عمل پر خپل ځان ترسره کوي. انعکاسي فعل تل له انعکاسي ضمیر سره راځي.",
        uk: "Підмет виконує дію над самим собою. Зворотне дієслово завжди супроводжується зворотним займенником.",
      },
      items: [
        "Elle {a}se{/a} regarde dans le miroir.",
      ],
      noBulletItems: [0],
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
      text: "Les verbes pronominaux se conjuguent avec deux pronoms : le pronom {a}sujet{/a} + un pronom {a}réfléchi{/a} de la même personne.\nÀ l'infinitif, on utilise le pronom {a}se{/a} : se lever, se doucher.",
      transText: {
        en: "Reflexive verbs are conjugated with two pronouns: the {a}subject{/a} pronoun + a {a}reflexive{/a} pronoun for the same person.\nIn the infinitive, the pronoun {a}se{/a} is used: se lever, se doucher.",
        ar: "تُصرَّف الأفعال الانعكاسية مع ضميرين: ضمير {a}الفاعل{/a} + ضمير {a}انعكاسي{/a} للشخص نفسه.\nفي المصدر، نستخدم الضمير {a}se{/a}: se lever, se doucher.",
        fa: "فعل‌های انعکاسی با دو ضمیر صرف می‌شوند: ضمیر {a}فاعل{/a} + یک ضمیر {a}انعکاسی{/a} برای همان شخص.\nدر مصدر، از ضمیر {a}se{/a} استفاده می‌شود: se lever, se doucher.",
        pt: "Os verbos reflexos conjugam-se com dois pronomes: o pronome {a}sujeito{/a} + um pronome {a}reflexivo{/a} da mesma pessoa.\nNo infinitivo, usa-se o pronome {a}se{/a}: se lever, se doucher.",
        so: "Falalka iscelinta waxaa lagu sarraysiiyaa laba magac-u-yaal: magac-u-yaalka {a}sujiect{/a} + magac-u-yaal {a}iscelin{/a} oo isla qofka ah.\nQaabka infinitif-ka, magac-u-yaalka {a}se{/a} ayaa la isticmaalaa: se lever, se doucher.",
        ti: "ርእሰ-ግሲታት ብኽልተ ተካእቲ ስማት ይጽረዩ፦ ተካኢ ስም {a}ተግባሪ{/a} + ናይቲ ተመሳሳሊ ሰብ {a}ተንጸባራቒ{/a} ተካኢ ስም።\nኣብ መሰረታዊ ግሲ፣ ተካኢ ስም {a}se{/a} ንጥቀም፦ se lever, se doucher።",
        tr: "Dönüşlü fiiller iki zamirle çekilir: {a}özne{/a} zamiri + aynı kişi için bir {a}dönüşlülük{/a} zamiri.\nMastarda {a}se{/a} zamiri kullanılır: se lever, se doucher.",
        ps: "انعکاسي فعلونه له دوو ضمیرونو سره ګردانېږي: د {a}فاعل{/a} ضمیر + د هماغه شخص لپاره یو {a}انعکاسي{/a} ضمیر.\nپه مصدر کې د {a}se{/a} ضمیر کارول کېږي: se lever, se doucher.",
        uk: "Зворотні дієслова відмінюються з двома займенниками: {a}займенником-підметом{/a} + {a}зворотним{/a} займенником тієї самої особи.\nВ інфінітиві вживається займенник {a}se{/a}: se lever, se doucher.",
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
          "{a}me{/a} (m')",
        ],
        [
          "tu",
          "{a}te{/a} (t')",
        ],
        [
          "il / elle / on",
          "{a}se{/a} (s')",
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
          "{a}se{/a} (s')",
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
      text: "Les pronoms {a}me, te, se{/a} deviennent {a}m', t', s'{/a} devant une voyelle ou un h muet.",
      transText: {
        en: "The pronouns {a}me, te, se{/a} become {a}m', t', s'{/a} before a vowel or a silent h.",
        ar: "تتحول الضمائر {a}me, te, se{/a} إلى {a}m', t', s'{/a} قبل حرف متحرك أو h صامت.",
        fa: "ضمیرهای {a}me, te, se{/a} پیش از واکه یا h بی‌صدا به {a}m', t', s'{/a} تبدیل می‌شوند.",
        pt: "Os pronomes {a}me, te, se{/a} tornam-se {a}m', t', s'{/a} antes de uma vogal ou de um h mudo.",
        so: "Magac-u-yaallada {a}me, te, se{/a} waxay noqdaan {a}m', t', s'{/a} ka hor shaqal ama h aan dhawaaqin.",
        ti: "እቶም {a}me, te, se{/a} ዝብሉ ተካኢ ስማት ቅድሚ ኣድማጺ ፊደል ወይ ዘይድመጽ h ናብ {a}m', t', s'{/a} ይቕየሩ።",
        tr: "{a}me, te, se{/a} zamirleri bir ünlüden veya sessiz h'den önce {a}m', t', s'{/a} olur.",
        ps: "ضمیرونه {a}me, te, se{/a} د واول یا چوپ h مخکې {a}m', t', s'{/a} کېږي.",
        uk: "Займенники {a}me, te, se{/a} перетворюються на {a}m', t', s'{/a} перед голосною або німою h.",
      },
      items: [
        "Je {s}me{/s} habille → Je {a}m'{/a}habille.",
        "Tu {s}te{/s} amuses → Tu {a}t'{/a}amuses.",
        "Elle {s}se{/s} arrête → Elle {a}s'{/a}arrête.",
        "Ils {s}se{/s} embrassent → Ils {a}s'{/a}embrassent.",
      ],
      noBulletItems: [0, 1, 2, 3],
    },
    {
      type: "text",
      label: "",
      
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
      type: "selector",
      buttonCols: 3,
      tabs: [
        {
          label: "se lever",
          content: [
            {
              type: "table",
              tables: [
                {
                  verb: "se lever",
                  accentForms: true,
                  rows: [
                    { pronoun: "je", form: "me lève" },
                    { pronoun: "tu", form: "te lèves" },
                    { pronoun: "il / elle / on", form: "se lève" },
                    { pronoun: "nous", form: "nous levons" },
                    { pronoun: "vous", form: "vous levez" },
                    { pronoun: "ils / elles", form: "se lèvent" },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: "se coucher",
          content: [
            {
              type: "table",
              tables: [
                {
                  verb: "se coucher",
                  accentForms: true,
                  rows: [
                    { pronoun: "je", form: "me couche" },
                    { pronoun: "tu", form: "te couches" },
                    { pronoun: "il / elle / on", form: "se couche" },
                    { pronoun: "nous", form: "nous couchons" },
                    { pronoun: "vous", form: "vous couchez" },
                    { pronoun: "ils / elles", form: "se couchent" },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: "se laver",
          content: [
            {
              type: "table",
              tables: [
                {
                  verb: "se laver",
                  accentForms: true,
                  rows: [
                    { pronoun: "je", form: "me lave" },
                    { pronoun: "tu", form: "te laves" },
                    { pronoun: "il / elle / on", form: "se lave" },
                    { pronoun: "nous", form: "nous lavons" },
                    { pronoun: "vous", form: "vous lavez" },
                    { pronoun: "ils / elles", form: "se lavent" },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: "se doucher",
          content: [
            {
              type: "table",
              tables: [
                {
                  verb: "se doucher",
                  accentForms: true,
                  rows: [
                    { pronoun: "je", form: "me douche" },
                    { pronoun: "tu", form: "te douches" },
                    { pronoun: "il / elle / on", form: "se douche" },
                    { pronoun: "nous", form: "nous douchons" },
                    { pronoun: "vous", form: "vous douchez" },
                    { pronoun: "ils / elles", form: "se douchent" },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: "se brosser",
          content: [
            {
              type: "table",
              tables: [
                {
                  verb: "se brosser",
                  accentForms: true,
                  rows: [
                    { pronoun: "je", form: "me brosse" },
                    { pronoun: "tu", form: "te brosses" },
                    { pronoun: "il / elle / on", form: "se brosse" },
                    { pronoun: "nous", form: "nous brossons" },
                    { pronoun: "vous", form: "vous brossez" },
                    { pronoun: "ils / elles", form: "se brossent" },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: "se raser",
          content: [
            {
              type: "table",
              tables: [
                {
                  verb: "se raser",
                  accentForms: true,
                  rows: [
                    { pronoun: "je", form: "me rase" },
                    { pronoun: "tu", form: "te rases" },
                    { pronoun: "il / elle / on", form: "se rase" },
                    { pronoun: "nous", form: "nous rasons" },
                    { pronoun: "vous", form: "vous rasez" },
                    { pronoun: "ils / elles", form: "se rasent" },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: "se coiffer",
          content: [
            {
              type: "table",
              tables: [
                {
                  verb: "se coiffer",
                  accentForms: true,
                  rows: [
                    { pronoun: "je", form: "me coiffe" },
                    { pronoun: "tu", form: "te coiffes" },
                    { pronoun: "il / elle / on", form: "se coiffe" },
                    { pronoun: "nous", form: "nous coiffons" },
                    { pronoun: "vous", form: "vous coiffez" },
                    { pronoun: "ils / elles", form: "se coiffent" },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: "s'habiller",
          content: [
            {
              type: "table",
              tables: [
                {
                  verb: "s'habiller",
                  accentForms: true,
                  rows: [
                    { pronoun: "je", form: "m'habille" },
                    { pronoun: "tu", form: "t'habilles" },
                    { pronoun: "il / elle / on", form: "s'habille" },
                    { pronoun: "nous", form: "nous habillons" },
                    { pronoun: "vous", form: "vous habillez" },
                    { pronoun: "ils / elles", form: "s'habillent" },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: "se reposer",
          content: [
            {
              type: "table",
              tables: [
                {
                  verb: "se reposer",
                  accentForms: true,
                  rows: [
                    { pronoun: "je", form: "me repose" },
                    { pronoun: "tu", form: "te reposes" },
                    { pronoun: "il / elle / on", form: "se repose" },
                    { pronoun: "nous", form: "nous reposons" },
                    { pronoun: "vous", form: "vous reposez" },
                    { pronoun: "ils / elles", form: "se reposent" },
                  ],
                },
              ],
            },
          ],
        },
      ],
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
      text: "La négation {a}ne … pas{/a} encadre le pronom réfléchi ET le verbe.",
      transText: {
        en: "The negation {a}ne … pas{/a} surrounds both the reflexive pronoun AND the verb.",
        ar: "يحيط النفي {a}ne … pas{/a} بالضمير الانعكاسي والفعل معاً.",
        fa: "ساخت منفی {a}ne … pas{/a} هم ضمیر انعکاسی و هم فعل را دربر می‌گیرد.",
        pt: "A negação {a}ne … pas{/a} envolve tanto o pronome reflexo COMO o verbo.",
        so: "Diidmada {a}ne … pas{/a} waxay ku wareegtaa magac-u-yaalka iscelinta IYO falka.",
        ti: "እቲ {a}ne … pas{/a} ዝብል ኣሉታ ነቲ ርእሰ-ተካኢ ስምን ነቲ ግስን ብሓደ ይኸቦም።",
        tr: "{a}ne … pas{/a} olumsuzluğu hem dönüşlü zamiri HEM de fiili çevreler.",
        ps: "نفي {a}ne … pas{/a} هم انعکاسي ضمیر او هم فعل راچاپېروي.",
        uk: "Заперечення {a}ne … pas{/a} охоплює і зворотний займенник, І дієслово.",
      },
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
      noBulletItems: [0],
    },
    {
      type: "text",
      label: "",
      
    },
    {
      type: "selector",
      buttonCols: 3,
      tabs: [
        {
          label: "se lever",
          content: [
            {
              type: "table",
              tables: [
                {
                  verb: "se lever",
                  accentForms: true,
                  rows: [
                    { pronoun: "je", form: "ne me lève pas" },
                    { pronoun: "tu", form: "ne te lèves pas" },
                    { pronoun: "il / elle / on", form: "ne se lève pas" },
                    { pronoun: "nous", form: "ne nous levons pas" },
                    { pronoun: "vous", form: "ne vous levez pas" },
                    { pronoun: "ils / elles", form: "ne se lèvent pas" },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: "se coucher",
          content: [
            {
              type: "table",
              tables: [
                {
                  verb: "se coucher",
                  accentForms: true,
                  rows: [
                    { pronoun: "je", form: "ne me couche pas" },
                    { pronoun: "tu", form: "ne te couches pas" },
                    { pronoun: "il / elle / on", form: "ne se couche pas" },
                    { pronoun: "nous", form: "ne nous couchons pas" },
                    { pronoun: "vous", form: "ne vous couchez pas" },
                    { pronoun: "ils / elles", form: "ne se couchent pas" },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: "se laver",
          content: [
            {
              type: "table",
              tables: [
                {
                  verb: "se laver",
                  accentForms: true,
                  rows: [
                    { pronoun: "je", form: "ne me lave pas" },
                    { pronoun: "tu", form: "ne te laves pas" },
                    { pronoun: "il / elle / on", form: "ne se lave pas" },
                    { pronoun: "nous", form: "ne nous lavons pas" },
                    { pronoun: "vous", form: "ne vous lavez pas" },
                    { pronoun: "ils / elles", form: "ne se lavent pas" },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: "se doucher",
          content: [
            {
              type: "table",
              tables: [
                {
                  verb: "se doucher",
                  accentForms: true,
                  rows: [
                    { pronoun: "je", form: "ne me douche pas" },
                    { pronoun: "tu", form: "ne te douches pas" },
                    { pronoun: "il / elle / on", form: "ne se douche pas" },
                    { pronoun: "nous", form: "ne nous douchons pas" },
                    { pronoun: "vous", form: "ne vous douchez pas" },
                    { pronoun: "ils / elles", form: "ne se douchent pas" },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: "se brosser",
          content: [
            {
              type: "table",
              tables: [
                {
                  verb: "se brosser",
                  accentForms: true,
                  rows: [
                    { pronoun: "je", form: "ne me brosse pas" },
                    { pronoun: "tu", form: "ne te brosses pas" },
                    { pronoun: "il / elle / on", form: "ne se brosse pas" },
                    { pronoun: "nous", form: "ne nous brossons pas" },
                    { pronoun: "vous", form: "ne vous brossez pas" },
                    { pronoun: "ils / elles", form: "ne se brossent pas" },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: "se raser",
          content: [
            {
              type: "table",
              tables: [
                {
                  verb: "se raser",
                  accentForms: true,
                  rows: [
                    { pronoun: "je", form: "ne me rase pas" },
                    { pronoun: "tu", form: "ne te rases pas" },
                    { pronoun: "il / elle / on", form: "ne se rase pas" },
                    { pronoun: "nous", form: "ne nous rasons pas" },
                    { pronoun: "vous", form: "ne vous rasez pas" },
                    { pronoun: "ils / elles", form: "ne se rasent pas" },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: "se coiffer",
          content: [
            {
              type: "table",
              tables: [
                {
                  verb: "se coiffer",
                  accentForms: true,
                  rows: [
                    { pronoun: "je", form: "ne me coiffe pas" },
                    { pronoun: "tu", form: "ne te coiffes pas" },
                    { pronoun: "il / elle / on", form: "ne se coiffe pas" },
                    { pronoun: "nous", form: "ne nous coiffons pas" },
                    { pronoun: "vous", form: "ne vous coiffez pas" },
                    { pronoun: "ils / elles", form: "ne se coiffent pas" },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: "s'habiller",
          content: [
            {
              type: "table",
              tables: [
                {
                  verb: "s'habiller",
                  accentForms: true,
                  rows: [
                    { pronoun: "je", form: "ne m'habille pas" },
                    { pronoun: "tu", form: "ne t'habilles pas" },
                    { pronoun: "il / elle / on", form: "ne s'habille pas" },
                    { pronoun: "nous", form: "ne nous habillons pas" },
                    { pronoun: "vous", form: "ne vous habillez pas" },
                    { pronoun: "ils / elles", form: "ne s'habillent pas" },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: "se reposer",
          content: [
            {
              type: "table",
              tables: [
                {
                  verb: "se reposer",
                  accentForms: true,
                  rows: [
                    { pronoun: "je", form: "ne me repose pas" },
                    { pronoun: "tu", form: "ne te reposes pas" },
                    { pronoun: "il / elle / on", form: "ne se repose pas" },
                    { pronoun: "nous", form: "ne nous reposons pas" },
                    { pronoun: "vous", form: "ne vous reposez pas" },
                    { pronoun: "ils / elles", form: "ne se reposent pas" },
                  ],
                },
              ],
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
          "Nous {a}nous{/a} regardons.",
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
            "Nous {a}nous{/a} regardons.",
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
            "Nous {a}nous{/a} regardons.",
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
            "Nous {a}nous{/a} regardons.",
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
            "Nous {a}nous{/a} regardons.",
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
            "Nous {a}nous{/a} regardons.",
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
            "Nous {a}nous{/a} regardons.",
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
            "Nous {a}nous{/a} regardons.",
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
            "Nous {a}nous{/a} regardons.",
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
            "Nous {a}nous{/a} regardons.",
          ],
        ],
      },
    },
  ],
  exercises: G1_EXERCISES["G1.6"](),
};
