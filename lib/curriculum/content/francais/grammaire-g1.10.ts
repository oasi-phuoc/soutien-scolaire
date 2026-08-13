import { type GrammarLesson, type VerbToggleVerb } from "../../grammar-data";
import { verbsToSelector } from "../../verb-selector";
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
      text: "Les verbes avec un infinitif en {a}-re{/a} ou en {a}-oir{/a} ont des conjugaisons très irrégulières.\nIl y a plusieurs modèles de conjugaison. Les terminaisons sont généralement : {a}s, s, t/d, ons, ez, ent{/a}.",
      transText: {
        en: "Verbs with an infinitive ending in {a}-re{/a} or {a}-oir{/a} have very irregular conjugations.\nThere are several conjugation patterns. The endings are generally: {a}s, s, t/d, ons, ez, ent{/a}.",
        ar: "الأفعال التي ينتهي مصدرها بـ {a}-re{/a} أو {a}-oir{/a} لها تصريفات شديدة الشذوذ.\nتوجد عدة نماذج للتصريف. والنهايات تكون عادةً: {a}s, s, t/d, ons, ez, ent{/a}.",
        fa: "فعل‌هایی که مصدرشان به {a}-re{/a} یا {a}-oir{/a} ختم می‌شود، صرف‌های بسیار بی‌قاعده‌ای دارند.\nچندین الگوی صرف وجود دارد. شناسه‌ها معمولاً عبارت‌اند از: {a}s, s, t/d, ons, ez, ent{/a}.",
        pt: "Os verbos cujo infinitivo termina em {a}-re{/a} ou {a}-oir{/a} têm conjugações muito irregulares.\nHá vários modelos de conjugação. As terminações são geralmente: {a}s, s, t/d, ons, ez, ent{/a}.",
        so: "Ficillada uu falka aan la rogin ku dhammaado {a}-re{/a} ama {a}-oir{/a} waxay leeyihiin isku-xirid aad u aan joogto ahayn.\nWaxaa jira dhowr qaab oo isku-xiridda falalka ah. Dhammaadyadu guud ahaan waa: {a}s, s, t/d, ons, ez, ent{/a}.",
        ti: "መሰረታዊ ቅርጾም ብ {a}-re{/a} ወይ {a}-oir{/a} ዝውዳእ ግሲታት ኣዝዮም ዘይስሩዕ ኣገባብ ምጽራይ ኣለዎም።\nብዙሓት ኣርኣያታት ምጽራይ ኣለዉ። መወዳእታታት ብሓፈሻ እዚኣቶም እዮም፦ {a}s, s, t/d, ons, ez, ent{/a}።",
        tr: "Mastarları {a}-re{/a} veya {a}-oir{/a} ile biten fiillerin çekimleri çok düzensizdir.\nBirkaç farklı çekim modeli vardır. Ekler genellikle şunlardır: {a}s, s, t/d, ons, ez, ent{/a}.",
        ps: "هغه فعلونه چې مصدر یې په {a}-re{/a} یا {a}-oir{/a} پای ته رسېږي، ډېرې بې‌قاعده صرفي بڼې لري.\nد صرف څو بېلابېل ډولونه شته. پایونه عموماً دا دي: {a}s, s, t/d, ons, ez, ent{/a}.",
        uk: "Дієслова з інфінітивом на {a}-re{/a} або {a}-oir{/a} мають дуже неправильні дієвідміни.\nІснує кілька моделей дієвідміни. Закінчення зазвичай такі: {a}s, s, t/d, ons, ez, ent{/a}.",
      },
    },

    {
      type: "heading",
      text: "Verbe irrégulier",
      trans: { en: "Irregular verb", ar: "الفعل الشاذ", fa: "فعل بی‌قاعده", pt: "Verbo irregular", so: "Fal aan caadi ahayn", ti: "ዘይስሩዕ ግሲ", tr: "Düzensiz fiil", ps: "بې قاعده فعل", uk: "Неправильне дієслово" },
    },
    verbsToSelector(VT_IRREGULIER, { buttonCols: 3 }),

    {
      type: "heading",
      text: "Verbes en -dre",
      trans: { en: "Verbs ending in -dre", ar: "الأفعال المنتهية بـ -dre", fa: "فعل‌های پایان‌یافته به -dre", pt: "Verbos terminados em -dre", so: "Falalka ku dhammaada -dre", ti: "ብ -dre ዝውድኡ ግሲታት", tr: "-dre ile biten fiiller", ps: "په -dre پای ته رسېدونکي فعلونه", uk: "Дієслова на -dre" },
    },
    verbsToSelector(VT_DRE, { buttonCols: 3 }),

    {
      type: "heading",
      text: "Verbes en -ire",
      trans: { en: "Verbs ending in -ire", ar: "الأفعال المنتهية بـ -ire", fa: "فعل‌های پایان‌یافته به -ire", pt: "Verbos terminados em -ire", so: "Falalka ku dhammaada -ire", ti: "ብ -ire ዝውድኡ ግሲታት", tr: "-ire ile biten fiiller", ps: "په -ire پای ته رسېدونکي فعلونه", uk: "Дієслова на -ire" },
    },
    verbsToSelector(VT_IRE, { buttonCols: 3 }),

    {
      type: "heading",
      text: "Verbes en -oir",
      trans: { en: "Verbs ending in -oir", ar: "الأفعال المنتهية بـ -oir", fa: "فعل‌های پایان‌یافته به -oir", pt: "Verbos terminados em -oir", so: "Falalka ku dhammaada -oir", ti: "ብ -oir ዝውድኡ ግሲታት", tr: "-oir ile biten fiiller", ps: "په -oir پای ته رسېدونکي فعلونه", uk: "Дієслова на -oir" },
    },
    verbsToSelector(VT_OIR, { buttonCols: 3 }),

    {
      type: "heading",
      text: "Verbes en -indre",
      trans: { en: "Verbs ending in -indre", ar: "الأفعال المنتهية بـ -indre", fa: "فعل‌های پایان‌یافته به -indre", pt: "Verbos terminados em -indre", so: "Falalka ku dhammaada -indre", ti: "ብ -indre ዝውድኡ ግሲታት", tr: "-indre ile biten fiiller", ps: "په -indre پای ته رسېدونکي فعلونه", uk: "Дієслова на -indre" },
    },
    verbsToSelector(VT_INDRE, { buttonCols: 3 }),

    {
      type: "heading",
      text: "Savoir et connaître",
      trans: { en: "Savoir and connaître", ar: "Savoir وconnaître", fa: "Savoir و connaître", pt: "Savoir e connaître", so: "Savoir iyo connaître", ti: "Savoirን connaîtreን", tr: "Savoir ve connaître", ps: "Savoir او connaître", uk: "Savoir і connaître" },
    },
    verbsToSelector(VT_SAVOIR_CONNAITRE, { buttonCols: 2 }),
    {
      type: "text",
      label: "Savoir ou connaître ?",
      items: [
        "On utilise {a}savoir{/a} pour parler de ce que l'on est capable de faire ou d'une information que l'on a apprise.",
        "On utilise {a}connaître{/a} pour parler d'une personne ou d'une chose avec laquelle on est familier.",
      ],
      transItems: {
        en: [
          "We use {a}savoir{/a} to talk about what we are able to do or about information that we have learned.",
          "We use {a}connaître{/a} to talk about a person or a thing that we are familiar with.",
        ],
        ar: [
          "نستخدم {a}savoir{/a} للحديث عمّا نستطيع القيام به أو عن معلومة تعلّمناها.",
          "نستخدم {a}connaître{/a} للحديث عن شخص أو شيء نحن على دراية به.",
        ],
        fa: [
          "از {a}savoir{/a} برای صحبت کردن دربارهٔ کارهایی که قادر به انجام آن‌ها هستیم یا اطلاعاتی که یاد گرفته‌ایم استفاده می‌کنیم.",
          "از {a}connaître{/a} برای صحبت کردن دربارهٔ شخص یا چیزی که با آن آشنا هستیم استفاده می‌کنیم.",
        ],
        pt: [
          "Usamos {a}savoir{/a} para falar sobre aquilo que somos capazes de fazer ou sobre uma informação que aprendemos.",
          "Usamos {a}connaître{/a} para falar de uma pessoa ou de uma coisa com a qual estamos familiarizados.",
        ],
        so: [
          "Waxaan isticmaalnaa {a}savoir{/a} si aan uga hadalno waxa aan awoodno inaan samayno ama xog aan barannay.",
          "Waxaan isticmaalnaa {a}connaître{/a} si aan uga hadalno qof ama shay aan aqoon u leenahay ama aan la qabsannay.",
        ],
        ti: [
          "ን{a}savoir{/a} ነቲ ክንገብሮ እንኽእል ነገር ወይ ዝተማሃርናዮ ሓበሬታ ንምዝራብ ንጥቀመሉ።",
          "ን{a}connaître{/a} ምስ ሓደ ሰብ ወይ ነገር ዘለና ልምዲ ወይ ትውውቅ ንምግላጽ ንጥቀመሉ።",
        ],
        tr: [
          "Yapabildiğimiz şeylerden veya öğrendiğimiz bir bilgiden bahsetmek için {a}savoir{/a} kullanılır.",
          "Aşina olduğumuz bir kişiden veya şeyden bahsetmek için {a}connaître{/a} kullanılır.",
        ],
        ps: [
          "له {a}savoir{/a} څخه د هغه څه په اړه د خبرو لپاره کار اخلو چې موږ یې کولی شو، یا د هغې معلوماتو په اړه چې موږ زده کړي دي.",
          "له {a}connaître{/a} څخه د هغه شخص یا شي په اړه د خبرو لپاره کار اخلو چې موږ ورسره اشنا یو.",
        ],
        uk: [
          "Ми використовуємо {a}savoir{/a}, щоб говорити про те, що ми вміємо робити, або про інформацію, яку ми вивчили.",
          "Ми використовуємо {a}connaître{/a}, щоб говорити про людину або річ, з якою ми знайомі.",
        ],
      },
      noBulletItems: [0,1],
      text: "Savoir et connaître ont tous les deux le {a}même sens{/a}, mais ils ne {a}s'utilisent pas de la même manière{/a}.",
      transText: {
        en: "We use savoir to talk about what we are {a}able to do{/a} or about {a}information{/a}. We use connaître to talk about a {a}person{/a} or a {a}thing{/a} that we are {a}familiar with{/a}. Savoir and connaître both have the {a}same meaning{/a}, but they are not {a}used in the same way{/a}.",
        ar: "نستخدم savoir للحديث عمّا نحن {a}قادرون على فعله{/a} أو عن {a}المعلومات{/a}. ونستخدم connaître للحديث عن {a}شخص{/a} أو {a}شيء{/a} نحن {a}على دراية به{/a}. لكل من savoir و connaître {a}المعنى نفسه{/a}، لكنهما لا {a}يُستخدمان بالطريقة نفسها{/a}.",
        fa: "از savoir برای صحبت کردن دربارهٔ کارهایی که {a}قادر به انجام آن‌ها هستیم{/a} یا دربارهٔ {a}اطلاعات{/a} استفاده می‌کنیم. از connaître برای صحبت کردن دربارهٔ یک {a}شخص{/a} یا یک {a}چیز{/a} که با آن {a}آشنایی داریم{/a} استفاده می‌کنیم. savoir و connaître هر دو {a}معنای یکسانی{/a} دارند، اما به {a}یک شکل استفاده نمی‌شوند{/a}.",
        pt: "Usamos savoir para falar sobre o que somos {a}capazes de fazer{/a} ou sobre {a}informações{/a}. Usamos connaître para falar de uma {a}pessoa{/a} ou de uma {a}coisa{/a} com a qual estamos {a}familiarizados{/a}. Savoir e connaître têm ambos o {a}mesmo significado{/a}, mas não são {a}usados da mesma maneira{/a}.",
        so: "Waxaan isticmaalnaa savoir si aan uga hadalno waxa aan {a}awoodno inaan samayno{/a} ama {a}macluumaad{/a}. Waxaan isticmaalnaa connaître si aan uga hadalno {a}qof{/a} ama {a}shay{/a} aan {a}aqoon u leenahay{/a}. Savoir iyo connaître labaduba waxay leeyihiin {a}macne isku mid ah{/a}, laakiin looma {a}isticmaalo si isku mid ah{/a}.",
        ti: "savoir ንዝኽእልና {a}ነገር{/a} ወይ ን{a}ሓበሬታ{/a} ንምግላጽ ንጥቀመሉ። connaître ድማ ብዛዕባ {a}ሰብ{/a} ወይ {a}ነገር{/a} እን{a}ፈልጦ{/a} ንምዝራብ ንጥቀመሉ። savoirን connaîtreን ክልቲኦም {a}ተመሳሳሊ ትርጉም{/a} ኣለዎም፣ ግን {a}ብተመሳሳሊ መንገዲ ኣይጥቀሙን{/a}.",
        tr: "savoir fiillerini {a}yapabildiğimiz şeylerden{/a} veya {a}bilgilerden{/a} bahsetmek için kullanırız. connaître fiilini ise {a}tanıdığımız{/a} bir {a}kişi{/a} veya {a}aşina olduğumuz bir şey{/a} hakkında konuşmak için kullanırız. Savoir ve connaître {a}aynı anlama{/a} gelir, ancak {a}aynı şekilde kullanılmazlar{/a}.",
        ps: "موږ savoir د هغو کارونو په اړه د خبرو لپاره کاروو چې موږ یې {a}کولی شو ترسره کړو{/a} یا د {a}معلوماتو{/a} لپاره. موږ connaître د داسې {a}شخص{/a} یا {a}شي{/a} په اړه د خبرو لپاره کاروو چې موږ ورسره {a}اشنا یو{/a}. savoir او connaître دواړه {a}یو شان معنا{/a} لري، خو {a}په یوه ډول نه کارول کېږي{/a}.",
        uk: "Ми використовуємо savoir, щоб говорити про те, що ми {a}вміємо робити{/a}, або про {a}інформацію{/a}. Ми використовуємо connaître, щоб говорити про {a}людину{/a} або {a}річ{/a}, з якою ми {a}знайомі{/a}. Savoir і connaître мають {a}однакове значення{/a}, але {a}вживаються по-різному{/a}.",
      },
    },
    {
      type: "grid",
      headers: ["Verbe", "Utilisation", "", "Exemple"],
      boldFirstCol: true,
      rows: [
        ["savoir\n+ {a}infinitif{/a}", "Capacité", "Je sais {a}nager{/a}."],
        ["savoir\n+ {a}que{/a}, {a}si{/a} ou {a}où{/a}", "Fait", "Je sais qu'il est {a}français{/a}.\nTu sais si {a}le magasin est ouvert{/a} ?\nJe sais où {a}il habite{/a}."],
        ["savoir\n+ {a}nom{/a}", "Information", "Tu sais {a}l'heure{/a} ?"],
        ["connaître\n+ {a}personne{/a}", "", "Je connais {a}Iryna{/a}."],
        ["connaître\n+ {a}lieu{/a} ou {a}chose{/a}", "", "Elle connaît bien {a}Bern{/a}.\nVous connaissez {a}ce restaurant{/a} ?"],
        ["connaître\n+ {a}œuvre{/a} ou {a}domaine{/a}", "", "Tu connais {a}ce film{/a} ?\nIl connaît bien {a}la musique{/a}."],
      ],
      transRows: {
        en: [
          ["savoir\n+ {a}infinitive{/a}", "Ability", "Je sais {a}nager{/a}."],
          ["savoir\n+ {a}that{/a}, {a}if{/a} or {a}where{/a}", "Fact", "Je sais qu'il est {a}français{/a}.\nTu sais si {a}le magasin est ouvert{/a} ?\nJe sais où {a}il habite{/a}."],
          ["savoir\n+ {a}noun{/a}", "Information", "Tu sais {a}l'heure{/a} ?"],
          ["connaître\n+ {a}person{/a}", "", "Je connais {a}Iryna{/a}."],
          ["connaître\n+ {a}place{/a} or {a}thing{/a}", "", "Elle connaît bien {a}Bern{/a}.\nVous connaissez {a}ce restaurant{/a} ?"],
          ["connaître\n+ {a}work{/a} or {a}field{/a}", "", "Tu connais {a}ce film{/a} ?\nIl connaît bien {a}la musique{/a}."],
        ],
        ar: [
          ["savoir\n+ {a}مصدر{/a}", "القدرة", "Je sais {a}nager{/a}."],
          ["savoir\n+ {a}أن{/a}، {a}إذا{/a} أو {a}أين{/a}", "حقيقة", "Je sais qu'il est {a}français{/a}.\nTu sais si {a}le magasin est ouvert{/a} ?\nJe sais où {a}il habite{/a}."],
          ["savoir\n+ {a}اسم{/a}", "معلومة", "Tu sais {a}l'heure{/a} ?"],
          ["connaître\n+ {a}شخص{/a}", "", "Je connais {a}Iryna{/a}."],
          ["connaître\n+ {a}مكان{/a} أو {a}شيء{/a}", "", "Elle connaît bien {a}Bern{/a}.\nVous connaissez {a}ce restaurant{/a} ?"],
          ["connaître\n+ {a}عمل{/a} أو {a}مجال{/a}", "", "Tu connais {a}ce film{/a} ?\nIl connaît bien {a}la musique{/a}."],
        ],
        fa: [
          ["savoir\n+ {a}مصدر{/a}", "توانایی", "Je sais {a}nager{/a}."],
          ["savoir\n+ {a}که{/a}، {a}آیا{/a} یا {a}کجا{/a}", "واقعیت", "Je sais qu'il est {a}français{/a}.\nTu sais si {a}le magasin est ouvert{/a} ?\nJe sais où {a}il habite{/a}."],
          ["savoir\n+ {a}اسم{/a}", "اطلاعات", "Tu sais {a}l'heure{/a} ?"],
          ["connaître\n+ {a}شخص{/a}", "", "Je connais {a}Iryna{/a}."],
          ["connaître\n+ {a}مکان{/a} یا {a}چیز{/a}", "", "Elle connaît bien {a}Bern{/a}.\nVous connaissez {a}ce restaurant{/a} ?"],
          ["connaître\n+ {a}اثر{/a} یا {a}حوزه{/a}", "", "Tu connais {a}ce film{/a} ?\nIl connaît bien {a}la musique{/a}."],
        ],
        pt: [
          ["savoir\n+ {a}infinitivo{/a}", "Capacidade", "Je sais {a}nager{/a}."],
          ["savoir\n+ {a}que{/a}, {a}se{/a} ou {a}onde{/a}", "Fato", "Je sais qu'il est {a}français{/a}.\nTu sais si {a}le magasin est ouvert{/a} ?\nJe sais où {a}il habite{/a}."],
          ["savoir\n+ {a}substantivo{/a}", "Informação", "Tu sais {a}l'heure{/a} ?"],
          ["connaître\n+ {a}pessoa{/a}", "", "Je connais {a}Iryna{/a}."],
          ["connaître\n+ {a}lugar{/a} ou {a}coisa{/a}", "", "Elle connaît bien {a}Bern{/a}.\nVous connaissez {a}ce restaurant{/a} ?"],
          ["connaître\n+ {a}obra{/a} ou {a}área{/a}", "", "Tu connais {a}ce film{/a} ?\nIl connaît bien {a}la musique{/a}."],
        ],
        so: [
          ["savoir\n+ {a}fal aan la rogin{/a}", "Awood", "Je sais {a}nager{/a}."],
          ["savoir\n+ {a}in{/a}, {a}haddii{/a} ama {a}halka{/a}", "Xaqiiqo", "Je sais qu'il est {a}français{/a}.\nTu sais si {a}le magasin est ouvert{/a} ?\nJe sais où {a}il habite{/a}."],
          ["savoir\n+ {a}magac{/a}", "Macluumaad", "Tu sais {a}l'heure{/a} ?"],
          ["connaître\n+ {a}qof{/a}", "", "Je connais {a}Iryna{/a}."],
          ["connaître\n+ {a}meel{/a} ama {a}shay{/a}", "", "Elle connaît bien {a}Bern{/a}.\nVous connaissez {a}ce restaurant{/a} ?"],
          ["connaître\n+ {a}shaqo{/a} ama {a}dhinac{/a}", "", "Tu connais {a}ce film{/a} ?\nIl connaît bien {a}la musique{/a}."],
        ],
        ti: [
          ["savoir\n+ {a}ምውሳእ{/a}", "ክእለት", "Je sais {a}nager{/a}."],
          ["savoir\n+ {a}ከም{/a}፣ {a}እንተ{/a} ወይ {a}ኣበይ{/a}", "ሓቂ", "Je sais qu'il est {a}français{/a}.\nTu sais si {a}le magasin est ouvert{/a} ?\nJe sais où {a}il habite{/a}."],
          ["savoir\n+ {a}ስም{/a}", "ሓበሬታ", "Tu sais {a}l'heure{/a} ?"],
          ["connaître\n+ {a}ሰብ{/a}", "", "Je connais {a}Iryna{/a}."],
          ["connaître\n+ {a}ቦታ{/a} ወይ {a}ነገር{/a}", "", "Elle connaît bien {a}Bern{/a}.\nVous connaissez {a}ce restaurant{/a} ?"],
          ["connaître\n+ {a}ስራሕ ጥበብ{/a} ወይ {a}ዓውዲ{/a}", "", "Tu connais {a}ce film{/a} ?\nIl connaît bien {a}la musique{/a}."],
        ],
        tr: [
          ["savoir\n+ {a}mastar{/a}", "Yetenek", "Je sais {a}nager{/a}."],
          ["savoir\n+ {a}ki{/a}, {a}eğer{/a} veya {a}nerede{/a}", "Bilgi", "Je sais qu'il est {a}français{/a}.\nTu sais si {a}le magasin est ouvert{/a} ?\nJe sais où {a}il habite{/a}."],
          ["savoir\n+ {a}isim{/a}", "Bilgi", "Tu sais {a}l'heure{/a} ?"],
          ["connaître\n+ {a}kişi{/a}", "", "Je connais {a}Iryna{/a}."],
          ["connaître\n+ {a}yer{/a} veya {a}şey{/a}", "", "Elle connaît bien {a}Bern{/a}.\nVous connaissez {a}ce restaurant{/a} ?"],
          ["connaître\n+ {a}eser{/a} veya {a}alan{/a}", "", "Tu connais {a}ce film{/a} ?\nIl connaît bien {a}la musique{/a}."],
        ],
        ps: [
          ["savoir\n+ {a}مصدر{/a}", "وړتیا", "Je sais {a}nager{/a}."],
          ["savoir\n+ {a}چې{/a}، {a}که{/a} یا {a}چېرته{/a}", "حقیقت", "Je sais qu'il est {a}français{/a}.\nTu sais si {a}le magasin est ouvert{/a} ?\nJe sais où {a}il habite{/a}."],
          ["savoir\n+ {a}نوم{/a}", "معلومات", "Tu sais {a}l'heure{/a} ?"],
          ["connaître\n+ {a}شخص{/a}", "", "Je connais {a}Iryna{/a}."],
          ["connaître\n+ {a}ځای{/a} یا {a}شی{/a}", "", "Elle connaît bien {a}Bern{/a}.\nVous connaissez {a}ce restaurant{/a} ?"],
          ["connaître\n+ {a}اثر{/a} یا {a}ساحه{/a}", "", "Tu connais {a}ce film{/a} ?\nIl connaît bien {a}la musique{/a}."],
        ],
        uk: [
          ["savoir\n+ {a}інфінітив{/a}", "Здатність", "Je sais {a}nager{/a}."],
          ["savoir\n+ {a}що{/a}, {a}чи{/a} або {a}де{/a}", "Факт", "Je sais qu'il est {a}français{/a}.\nTu sais si {a}le magasin est ouvert{/a} ?\nJe sais où {a}il habite{/a}."],
          ["savoir\n+ {a}іменник{/a}", "Інформація", "Tu sais {a}l'heure{/a} ?"],
          ["connaître\n+ {a}особа{/a}", "", "Je connais {a}Iryna{/a}."],
          ["connaître\n+ {a}місце{/a} або {a}річ{/a}", "", "Elle connaît bien {a}Bern{/a}.\nVous connaissez {a}ce restaurant{/a} ?"],
          ["connaître\n+ {a}твір{/a} або {a}галузь{/a}", "", "Tu connais {a}ce film{/a} ?\nIl connaît bien {a}la musique{/a}."],
        ],
      },
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
    },
  ],
  exercises: G1_EXERCISES["G1.10"](),
};
