import type { GrammarLesson, VerbToggleVerb } from "../../grammar-data";
import { G1_EXERCISES } from "./g1-lesson-profiles";

const VT_DRE: VerbToggleVerb[] = [
  {
    infinitive: "prendre",
    radical: "pren",
    rows: [
      { pronoun: "je", ending: "ds" },
      { pronoun: "tu", ending: "ds" },
      { pronoun: "il / elle / on", ending: "d" },
      { pronoun: "nous", ending: "ons" },
      { pronoun: "vous", ending: "ez" },
      { pronoun: "ils / elles", ending: "nent" },
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
    radical: "li",
    rows: [
      { pronoun: "je", ending: "s" },
      { pronoun: "tu", ending: "s" },
      { pronoun: "il / elle / on", ending: "t" },
      { pronoun: "nous", ending: "sons" },
      { pronoun: "vous", ending: "sez" },
      { pronoun: "ils / elles", ending: "sent" },
    ],
  },
  {
    infinitive: "écrire",
    radical: "écri",
    rows: [
      { pronoun: "j'", ending: "s" },
      { pronoun: "tu", ending: "s" },
      { pronoun: "il / elle / on", ending: "t" },
      { pronoun: "nous", ending: "vons" },
      { pronoun: "vous", ending: "vez" },
      { pronoun: "ils / elles", ending: "vent" },
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
    radical: "f",
    rows: [
      { pronoun: "je", ending: "ais" },
      { pronoun: "tu", ending: "ais" },
      { pronoun: "il / elle / on", ending: "ait" },
      { pronoun: "nous", ending: "aisons" },
      { pronoun: "vous", ending: "aites" },
      { pronoun: "ils / elles", ending: "ont" },
    ],
  },
  {
    infinitive: "dire",
    radical: "di",
    rows: [
      { pronoun: "je", ending: "s" },
      { pronoun: "tu", ending: "s" },
      { pronoun: "il / elle / on", ending: "t" },
      { pronoun: "nous", ending: "sons" },
      { pronoun: "vous", ending: "tes" },
      { pronoun: "ils / elles", ending: "sent" },
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
    radical: "vo",
    rows: [
      { pronoun: "je", ending: "is" },
      { pronoun: "tu", ending: "is" },
      { pronoun: "il / elle / on", ending: "it" },
      { pronoun: "nous", ending: "yons" },
      { pronoun: "vous", ending: "yez" },
      { pronoun: "ils / elles", ending: "ient" },
    ],
  },
  {
    infinitive: "recevoir",
    radical: "re",
    rows: [
      { pronoun: "je", ending: "çois" },
      { pronoun: "tu", ending: "çois" },
      { pronoun: "il / elle / on", ending: "çoit" },
      { pronoun: "nous", ending: "cevons" },
      { pronoun: "vous", ending: "cevez" },
      { pronoun: "ils / elles", ending: "çoivent" },
    ],
  },
  {
    infinitive: "boire",
    radical: "b",
    rows: [
      { pronoun: "je", ending: "ois" },
      { pronoun: "tu", ending: "ois" },
      { pronoun: "il / elle / on", ending: "oit" },
      { pronoun: "nous", ending: "uvons" },
      { pronoun: "vous", ending: "uvez" },
      { pronoun: "ils / elles", ending: "oivent" },
    ],
  },
];

const VT_INDRE: VerbToggleVerb[] = [
  {
    infinitive: "peindre",
    radical: "pei",
    rows: [
      { pronoun: "je", ending: "ns" },
      { pronoun: "tu", ending: "ns" },
      { pronoun: "il / elle / on", ending: "nt" },
      { pronoun: "nous", ending: "gnons" },
      { pronoun: "vous", ending: "gnez" },
      { pronoun: "ils / elles", ending: "gnent" },
    ],
  },
  {
    infinitive: "éteindre",
    radical: "étei",
    rows: [
      { pronoun: "j'", ending: "ns" },
      { pronoun: "tu", ending: "ns" },
      { pronoun: "il / elle / on", ending: "nt" },
      { pronoun: "nous", ending: "gnons" },
      { pronoun: "vous", ending: "gnez" },
      { pronoun: "ils / elles", ending: "gnent" },
    ],
  },
  {
    infinitive: "rejoindre",
    radical: "rejoi",
    rows: [
      { pronoun: "je", ending: "ns" },
      { pronoun: "tu", ending: "ns" },
      { pronoun: "il / elle / on", ending: "nt" },
      { pronoun: "nous", ending: "gnons" },
      { pronoun: "vous", ending: "gnez" },
      { pronoun: "ils / elles", ending: "gnent" },
    ],
  },
];

const VT_SAVOIR_CONNAITRE: VerbToggleVerb[] = [
  {
    infinitive: "savoir",
    radical: "sa",
    rows: [
      { pronoun: "je", ending: "is" },
      { pronoun: "tu", ending: "is" },
      { pronoun: "il / elle / on", ending: "it" },
      { pronoun: "nous", ending: "vons" },
      { pronoun: "vous", ending: "vez" },
      { pronoun: "ils / elles", ending: "vent" },
    ],
  },
  {
    infinitive: "connaître",
    radical: "conna",
    rows: [
      { pronoun: "je", ending: "is" },
      { pronoun: "tu", ending: "is" },
      { pronoun: "il / elle / on", ending: "ît" },
      { pronoun: "nous", ending: "issons" },
      { pronoun: "vous", ending: "issez" },
      { pronoun: "ils / elles", ending: "issent" },
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
      type: "text",
      text: "Les verbes avec un infinitif en {a}-re{/a} ou en {a}-oir{/a} ont des conjugaisons très irrégulières. Ils ont un, deux ou trois radicaux. Il y a plusieurs modèles de conjugaison. Les terminaisons sont généralement : {a}s, s, t/d, ons, ez, ent{/a}.",
      transText: {
        en: "Verbs with an infinitive ending in {a}-re{/a} or {a}-oir{/a} have very irregular conjugations. They have one, two or three stems. There are several conjugation patterns. The endings are generally: {a}s, s, t/d, ons, ez, ent{/a}.",
        ar: "الأفعال التي ينتهي مصدرها بـ {a}-re{/a} أو {a}-oir{/a} لها تصريفات شاذة جداً. ولها جذر واحد أو جذران أو ثلاثة جذور. توجد عدة نماذج للتصريف. والنهايات عموماً هي: {a}s, s, t/d, ons, ez, ent{/a}.",
        fa: "فعل‌هایی که مصدرشان به {a}-re{/a} یا {a}-oir{/a} ختم می‌شود، صرف‌های بسیار بی‌قاعده‌ای دارند. آن‌ها یک، دو یا سه بن دارند. چندین الگوی صرف وجود دارد. شناسه‌ها معمولاً عبارت‌اند از: {a}s, s, t/d, ons, ez, ent{/a}.",
        pt: "Os verbos com infinitivo terminado em {a}-re{/a} ou {a}-oir{/a} têm conjugações muito irregulares. Têm um, dois ou três radicais. Há vários modelos de conjugação. As terminações são geralmente: {a}s, s, t/d, ons, ez, ent{/a}.",
        so: "Falalka uu falka aan la rogin ku dhammaado {a}-re{/a} ama {a}-oir{/a} waxay leeyihiin qorid aad u aan caadi ahayn. Waxay leeyihiin hal, laba ama saddex jirridood. Waxaa jira dhowr qaab oo qorid fal ah. Dhammaadyadu guud ahaan waa: {a}s, s, t/d, ons, ez, ent{/a}.",
        ti: "መሰረታዊ ቅርጾም ብ {a}-re{/a} ወይ {a}-oir{/a} ዝውዳእ ግሲታት ኣዝዮም ዘይስሩዕ ምጽራይ ኣለዎም። ሓደ፣ ክልተ ወይ ሰለስተ ሱራት ኣለዎም። ብዙሓት ሞዴላት ምጽራይ ኣለዉ። መወዳእታታቱ ብሓፈሻ፦ {a}s, s, t/d, ons, ez, ent{/a}።",
        tr: "Mastarı {a}-re{/a} veya {a}-oir{/a} ile biten fiillerin çekimleri çok düzensizdir. Bir, iki veya üç kökleri vardır. Birkaç çekim modeli bulunur. Ekler genellikle şunlardır: {a}s, s, t/d, ons, ez, ent{/a}.",
        ps: "هغه فعلونه چې مصدر يې په {a}-re{/a} يا {a}-oir{/a} پای ته رسېږي، ډېر بې قاعده ګردانونه لري. دوی يو، دوه يا درې بنونه لري. د ګردان څو بېلګې شته. پایونه عموماً دا دي: {a}s, s, t/d, ons, ez, ent{/a}.",
        uk: "Дієслова з інфінітивом на {a}-re{/a} або {a}-oir{/a} мають дуже неправильні дієвідміни. Вони мають одну, дві або три основи. Існує кілька моделей дієвідміни. Закінчення зазвичай такі: {a}s, s, t/d, ons, ez, ent{/a}.",
      },
    },

    {
      type: "heading",
      text: "Verbe irrégulier",
      trans: { en: "Irregular verb", ar: "الفعل الشاذ", fa: "فعل بی‌قاعده", pt: "Verbo irregular", so: "Fal aan caadi ahayn", ti: "ዘይስሩዕ ግሲ", tr: "Düzensiz fiil", ps: "بې قاعده فعل", uk: "Неправильне дієслово" },
    },
    { type: "verb_toggle", buttonCols: 3, verbs: VT_IRREGULIER },

    {
      type: "heading",
      text: "Verbes en -dre",
      trans: { en: "Verbs ending in -dre", ar: "الأفعال المنتهية بـ -dre", fa: "فعل‌های پایان‌یافته به -dre", pt: "Verbos terminados em -dre", so: "Falalka ku dhammaada -dre", ti: "ብ -dre ዝውድኡ ግሲታት", tr: "-dre ile biten fiiller", ps: "په -dre پای ته رسېدونکي فعلونه", uk: "Дієслова на -dre" },
    },
    { type: "verb_toggle", buttonCols: 3, verbs: VT_DRE },

    {
      type: "heading",
      text: "Verbes en -ire",
      trans: { en: "Verbs ending in -ire", ar: "الأفعال المنتهية بـ -ire", fa: "فعل‌های پایان‌یافته به -ire", pt: "Verbos terminados em -ire", so: "Falalka ku dhammaada -ire", ti: "ብ -ire ዝውድኡ ግሲታት", tr: "-ire ile biten fiiller", ps: "په -ire پای ته رسېدونکي فعلونه", uk: "Дієслова на -ire" },
    },
    { type: "verb_toggle", buttonCols: 3, verbs: VT_IRE },

    {
      type: "heading",
      text: "Verbes en -oir",
      trans: { en: "Verbs ending in -oir", ar: "الأفعال المنتهية بـ -oir", fa: "فعل‌های پایان‌یافته به -oir", pt: "Verbos terminados em -oir", so: "Falalka ku dhammaada -oir", ti: "ብ -oir ዝውድኡ ግሲታት", tr: "-oir ile biten fiiller", ps: "په -oir پای ته رسېدونکي فعلونه", uk: "Дієслова на -oir" },
    },
    { type: "verb_toggle", buttonCols: 3, verbs: VT_OIR },

    {
      type: "heading",
      text: "Verbes en -indre",
      trans: { en: "Verbs ending in -indre", ar: "الأفعال المنتهية بـ -indre", fa: "فعل‌های پایان‌یافته به -indre", pt: "Verbos terminados em -indre", so: "Falalka ku dhammaada -indre", ti: "ብ -indre ዝውድኡ ግሲታት", tr: "-indre ile biten fiiller", ps: "په -indre پای ته رسېدونکي فعلونه", uk: "Дієслова на -indre" },
    },
    { type: "verb_toggle", buttonCols: 3, verbs: VT_INDRE },

    {
      type: "heading",
      text: "Savoir et connaître",
      trans: { en: "Savoir and connaître", ar: "Savoir وconnaître", fa: "Savoir و connaître", pt: "Savoir e connaître", so: "Savoir iyo connaître", ti: "Savoirን connaîtreን", tr: "Savoir ve connaître", ps: "Savoir او connaître", uk: "Savoir і connaître" },
    },
    { type: "verb_toggle", buttonCols: 2, verbs: VT_SAVOIR_CONNAITRE },
    {
      type: "heading",
      text: "SAVOIR ou CONNAÎTRE ?",
      sub: true,
      accent: true,
      trans: { en: "SAVOIR or CONNAÎTRE?", ar: "SAVOIR أم CONNAÎTRE؟", fa: "SAVOIR یا CONNAÎTRE؟", pt: "SAVOIR ou CONNAÎTRE?", so: "SAVOIR mise CONNAÎTRE?", ti: "SAVOIR ወይ CONNAÎTRE?", tr: "SAVOIR mi CONNAÎTRE mi?", ps: "SAVOIR که CONNAÎTRE؟", uk: "SAVOIR чи CONNAÎTRE?" },
    },
    {
      type: "grid",
      headers: ["Verbe", "Utilisation", "", "Exemple"],
      boldFirstCol: true,
      rows: [
        ["savoir", "+ {a}infinitif{/a}", "Capacité", "Je sais {a}nager{/a}."],
        ["savoir", "+ {a}que{/a}, si{/a} ou {a}où{/a}", "Fait", "Je sais qu'il est {a}français{/a}.\nTu sais si {a}le magasin est ouvert{/a} ?\nJe sais où {a}il habite{/a}."],
        ["savoir", "+ {a}nom{/a}", "Information", "Tu sais {a}l'heure{/a} ?"],
        ["connaître", "+ {a}personne{/a}", "Je connais {a}Iryna{/a}."],
        ["connaître", "+ {a}lieu{/a} ou {/a}chose{/a}", "Elle connaît bien {a}Bern{/a}.\nVous connaissez {a}ce restaurant{/a} ?"],
        ["connaître", "+ {a}œuvre{/a} ou {/a}domaine{/a}", "Tu connais {a}ce film{/a} ?\nIl connaît bien {a}la musique{/a}."],
      ],
      transHeaders: {
        en: ["Verb", "Usage", "Example"],
        ar: ["الفعل", "الاستخدام", "مثال"],
        fa: ["فعل", "کاربرد", "مثال"],
        pt: ["Verbo", "Uso", "Exemplo"],
        so: ["Fal", "Isticmaal", "Tusaale"],
        ti: ["ግሲ", "ኣጠቓቕማ", "ኣብነት"],
        tr: ["Fiil", "Kullanım", "Örnek"],
        ps: ["فعل", "کارونه", "بېلګه"],
        uk: ["Дієслово", "Вживання", "Приклад"],
      },
      transRows: {
        en: [
          ["savoir", "+ {a}infinitive{/a}", "Ability", "Je sais {a}nager{/a}."],
          ["savoir", "+ {a}que{/a}, {a}si{/a} or {a}où{/a}", "Fact", "Je sais qu'il est {a}français{/a}.\nDo you know if {a}the store is open{/a}?\nI know where {a}he lives{/a}."],
          ["savoir", "+ {a}noun{/a}", "Information", "Do you know {a}the time{/a}?"],
          ["connaître", "+ {a}person{/a}", "Person", "I know {a}Iryna{/a}."],
          ["connaître", "+ {a}place{/a} or {a}thing{/a}", "Place or thing", "She knows {a}Bern{/a} well.\nDo you know {a}this restaurant{/a}?"],
          ["connaître", "+ {a}work{/a} or {a}field{/a}", "Work or field", "Do you know {a}this film{/a}?\nHe knows {a}music{/a} well."],
        ],
        ar: [
          ["savoir", "+ {a}مصدر{/a}", "القدرة", "أعرف كيف {a}أسبح{/a}."],
          ["savoir", "+ {a}que{/a} أو {a}si{/a} أو {a}où{/a}", "حقيقة", "أعرف أنه {a}فرنسي{/a}.\nهل تعرف ما إذا كان {a}المتجر مفتوحًا{/a}؟\nأعرف أين {a}يسكن{/a}."],
          ["savoir", "+ {a}اسم{/a}", "معلومة", "هل تعرف {a}الوقت{/a}؟"],
          ["connaître", "+ {a}شخص{/a}", "شخص", "أنا أعرف {a}إيرينا{/a}."],
          ["connaître", "+ {a}مكان{/a} أو {a}شيء{/a}", "مكان أو شيء", "هي تعرف {a}برن{/a} جيدًا.\nهل تعرفون {a}هذا المطعم{/a}؟"],
          ["connaître", "+ {a}عمل{/a} أو {a}مجال{/a}", "عمل أو مجال", "هل تعرف {a}هذا الفيلم{/a}؟\nهو يعرف {a}الموسيقى{/a} جيدًا."],
        ],
        fa: [
          ["savoir", "+ {a}مصدر{/a}", "توانایی", "من می‌توانم {a}شنا کنم{/a}."],
          ["savoir", "+ {a}que{/a}، {a}si{/a} یا {a}où{/a}", "واقعیت", "می‌دانم که او {a}فرانسوی{/a} است.\nمی‌دانی آیا {a}فروشگاه باز است{/a}؟\nمی‌دانم {a}کجا زندگی می‌کند{/a}."],
          ["savoir", "+ {a}اسم{/a}", "اطلاعات", "ساعت را {a}می‌دانی{/a}؟"],
          ["connaître", "+ {a}شخص{/a}", "شخص", "من {a}ایرینا{/a} را می‌شناسم."],
          ["connaître", "+ {a}مکان{/a} یا {a}چیز{/a}", "مکان یا چیز", "او {a}برن{/a} را به‌خوبی می‌شناسد.\nآیا {a}این رستوران{/a} را می‌شناسید؟"],
          ["connaître", "+ {a}اثر{/a} یا {a}حوزه{/a}", "اثر یا حوزه", "این {a}فیلم{/a} را می‌شناسی؟\nاو {a}موسیقی{/a} را به‌خوبی می‌شناسد."],
        ],
        pt: [
          ["savoir", "+ {a}infinitivo{/a}", "Capacidade", "Eu sei {a}nadar{/a}."],
          ["savoir", "+ {a}que{/a}, {a}se{/a} ou {a}onde{/a}", "Facto", "Eu sei que ele é {a}francês{/a}.\nSabes se {a}a loja está aberta{/a}?\nEu sei onde {a}ele mora{/a}."],
          ["savoir", "+ {a}nome{/a}", "Informação", "Sabes {a}as horas{/a}?"],
          ["connaître", "+ {a}pessoa{/a}", "Pessoa", "Eu conheço {a}a Iryna{/a}."],
          ["connaître", "+ {a}lugar{/a} ou {a}coisa{/a}", "Lugar ou coisa", "Ela conhece bem {a}Berna{/a}.\nConhecem {a}este restaurante{/a}?"],
          ["connaître", "+ {a}obra{/a} ou {a}área{/a}", "Obra ou área", "Conheces {a}este filme{/a}?\nEle conhece bem {a}a música{/a}."],
        ],
        so: [
          ["savoir", "+ {a}fal aan la rogin{/a}", "Awood", "Waxaan garanayaa sida loo {a}dabaasho{/a}."],
          ["savoir", "+ {a}que{/a}, {a}si{/a} ama {a}où{/a}", "Xaqiiqo", "Waxaan ogahay inuu yahay {a}Faransiis{/a}.\nMa ogtahay haddii {a}dukaanku furan yahay{/a}?\nWaan ogahay meesha uu {a}ku nool yahay{/a}."],
          ["savoir", "+ {a}magac{/a}", "Xog", "Ma taqaannaa {a}saacadda{/a}?"],
          ["connaître", "+ {a}qof{/a}", "Qof", "Waxaan aqaan {a}Iryna{/a}."],
          ["connaître", "+ {a}meel{/a} ama {a}shay{/a}", "Meel ama shay", "Waxay si fiican u taqaan {a}Bern{/a}.\nMa taqaannaa {a}makhaayaddan{/a}?"],
          ["connaître", "+ {a}shaqo{/a} ama {a}goob{/a}", "Shaqo ama goob", "Ma taqaannaa {a}filimkan{/a}?\nWuxuu si fiican u yaqaan {a}muusigga{/a}."],
        ],
        ti: [
          ["savoir", "+ {a}መሰረታዊ ግሲ{/a}", "ዓቕሚ", "ምሕንባስ {a}እኽእል{/a}።"],
          ["savoir", "+ {a}que{/a}፣ {a}si{/a} ወይ {a}où{/a}", "ሓቂ", "ፈረንሳዊ {a}ምዃኑ{/a} እፈልጥ።\nድኳን {a}ክፉት እንተኾይኑ{/a} ትፈልጥዶ?\nኣበይ {a}ከም ዝነብር{/a} እፈልጥ።"],
          ["savoir", "+ {a}ስም{/a}", "ሓበሬታ", "{a}ሰዓት{/a} ትፈልጥዶ?"],
          ["connaître", "+ {a}ሰብ{/a}", "ሰብ", "{a}Iryna{/a} እፈልጣ።"],
          ["connaître", "+ {a}ቦታ{/a} ወይ {a}ነገር{/a}", "ቦታ ወይ ነገር", "{a}Bern{/a} ብጽቡቕ ትፈልጣ።\n{a}እዚ ምግብ ቤት{/a} ትፈልጥዎዶ?"],
          ["connaître", "+ {a}ስራሕ{/a} ወይ {a}ዓውዲ{/a}", "ስራሕ ወይ ዓውዲ", "{a}እዚ ፊልም{/a} ትፈልጦዶ?\n{a}ሙዚቃ{/a} ብጽቡቕ ይፈልጣ።"],
        ],
        tr: [
          ["savoir", "+ {a}mastar{/a}", "Yetenek", "{a}Yüzmeyi{/a} biliyorum."],
          ["savoir", "+ {a}que{/a}, {a}si{/a} veya {a}où{/a}", "Bilgi", "Onun {a}Fransız{/a} olduğunu biliyorum.\n{a}Mağazanın açık olup olmadığını{/a} biliyor musun?\n{a}Nerede yaşadığını{/a} biliyorum."],
          ["savoir", "+ {a}isim{/a}", "Bilgi", "{a}Saati{/a} biliyor musun?"],
          ["connaître", "+ {a}kişi{/a}", "Kişi", "{a}Iryna{/a}'yı tanıyorum."],
          ["connaître", "+ {a}yer{/a} veya {a}şey{/a}", "Yer veya şey", "{a}Bern{/a}'i iyi tanıyor.\n{a}Bu restoranı{/a} tanıyor musunuz?"],
          ["connaître", "+ {a}eser{/a} veya {a}alan{/a}", "Eser veya alan", "{a}Bu filmi{/a} biliyor musun?\n{a}Müziği{/a} iyi biliyor."],
        ],
        ps: [
          ["savoir", "+ {a}مصدر{/a}", "وړتیا", "زه {a}لامبو وهل{/a} کولی شم."],
          ["savoir", "+ {a}que{/a}، {a}si{/a} یا {a}où{/a}", "حقیقت", "زه پوهېږم چې هغه {a}فرانسوی{/a} دی.\nایا ته پوهېږې چې {a}پلورنځی خلاص دی{/a}؟\nزه پوهېږم چې هغه {a}چېرته اوسېږي{/a}."],
          ["savoir", "+ {a}نوم{/a}", "معلومات", "ایا ته {a}وخت{/a} پوهېږې؟"],
          ["connaître", "+ {a}شخص{/a}", "شخص", "زه {a}ایرینا{/a} پېژنم."],
          ["connaître", "+ {a}ځای{/a} یا {a}شی{/a}", "ځای یا شی", "هغه {a}برن{/a} ښه پېژني.\nایا تاسو {a}دا رستورانت{/a} پېژنئ؟"],
          ["connaître", "+ {a}اثر{/a} یا {a}ډګر{/a}", "اثر یا ډګر", "ایا ته {a}دا فلم{/a} پېژنې؟\nهغه {a}موسیقي{/a} ښه پېژني."],
        ],
        uk: [
          ["savoir", "+ {a}інфінітив{/a}", "Уміння", "Я вмію {a}плавати{/a}."],
          ["savoir", "+ {a}que{/a}, {a}si{/a} або {a}où{/a}", "Факт", "Я знаю, що він {a}француз{/a}.\nТи знаєш, чи {a}магазин відкритий{/a}?\nЯ знаю, де {a}він живе{/a}."],
          ["savoir", "+ {a}іменник{/a}", "Інформація", "Ти знаєш {a}час{/a}?"],
          ["connaître", "+ {a}особа{/a}", "Особа", "Я знаю {a}Ірину{/a}."],
          ["connaître", "+ {a}місце{/a} або {a}річ{/a}", "Місце або річ", "Вона добре знає {a}Берн{/a}.\nВи знаєте {a}цей ресторан{/a}?"],
          ["connaître", "+ {a}твір{/a} або {a}галузь{/a}", "Твір або галузь", "Ти знаєш {a}цей фільм{/a}?\nВін добре знає {a}музику{/a}."],
        ],
      },
    },
  ],
  exercises: G1_EXERCISES["G1.10"](),
};
