import { type GrammarLesson } from "../../grammar-data";
import { verbsToSelector } from "../../verb-selector";
import { G1_EXERCISES } from "./g1-lesson-profiles";

/** Unité 7 — Les verbes en -er : cas particuliers (G1.8) */

export const A1_GR_VERBES_ER_PART: GrammarLesson = {
  slug: "a1-gr-verbes-er-particuliers",
  code: "G1.8",
  level: "A1",
  title: "Les verbes en -er : cas particuliers",

  theory: [
    {
      type: "heading",
      text: "Le verbe aller",
      trans: {
        sq: "Folja aller",
        en: "The verb aller",
        ar: "فعل aller",
        am: "የ aller ግስ",
        prs: "فعل aller",
        es: "El verbo aller",
        it: "Il verbo aller",
        fa: "فعل aller",
        ps: "د aller فعل",
        pt: "O verbo aller",
        ru: "Глагол aller",
        so: "Falka aller",
        ti: "ግሲ aller",
        tr: "Aller fiili",
        uk: "Дієслово aller",
      },
    },

    {
      type: "text",
      text: "Le verbe {a}aller{/a} sert à indiquer un {a}déplacement{/a} ou à {a}prendre et donner des nouvelles{/a}.",
      transText: {
        sq: "Folja {a}aller{/a} përdoret për të treguar një {a}lëvizje{/a} ose për të {a}pyetur dhe dhënë lajme{/a}.",
        en: "The verb aller is used to indicate {a}movement{/a} or to {a}ask for and give news{/a}.",
        ar: "يُستخدم الفعل aller للدلالة على {a}التنقّل{/a} أو {a}السؤال عن الأحوال وإخبار الآخرين بها{/a}.",
        am: "aller የሚለው ግስ {a}እንቅስቃሴን{/a} ለማመልከት ወይም {a}ሁኔታን ለመጠየቅና ዜና ለመስጠት{/a} ይጠቀማል።",
        prs: "فعل aller برای نشان دادن {a}حرکت{/a} یا برای {a}پرسیدن احوال و خبر دادن{/a} به کار می‌رود.",
        es: "El verbo aller se utiliza para indicar un {a}desplazamiento{/a} o para {a}preguntar y dar noticias{/a}.",
        it: "Il verbo aller serve a indicare uno {a}spostamento{/a} o a {a}chiedere e dare notizie{/a}.",
        fa: "فعل aller برای نشان دادن {a}جابه‌جایی{/a} یا برای {a}احوال‌پرسی و خبر دادن{/a} به کار می‌رود.",
        ps: "د aller فعل د {a}تګ راتګ{/a} ښودلو یا {a}د احوال پوښتلو او خبر ورکولو{/a} لپاره کارول کېږي.",
        pt: "O verbo aller é usado para indicar uma {a}deslocação{/a} ou para {a}perguntar e dar notícias{/a}.",
        ru: "Глагол aller используется для обозначения {a}перемещения{/a}, а также чтобы {a}спросить о делах и сообщить новости{/a}.",
        so: "Falka aller waxaa loo isticmaalaa in lagu muujiyo {a}dhaqaaqid{/a} ama in lagu {a}weydiiyo oo lagu sheego war{/a}.",
        ti: "እቲ aller ዝብል ግሲ {a}ምንቅስቓስ{/a} ንምግላጽ ወይ {a}ዜና ንምሕታትን ንምሃብን{/a} ይጥቀም።",
        tr: "Aller fiili {a}hareket{/a} belirtmek veya {a}hâl hatır sormak ve haber vermek{/a} için kullanılır.",
        uk: "Дієслово aller вживається для позначення {a}переміщення{/a}, а також щоб {a}запитати про справи чи повідомити новини{/a}.",
      },
    },

    {
      type: "grid",
      headers: ["Emploi", "Exemple"],
      transHeaders: {
        sq: ["Përdorimi", "Shembull"],
        en: ["Use", "Example"],
        ar: ["الاستخدام", "مثال"],
        am: ["አጠቃቀም", "ምሳሌ"],
        prs: ["کاربرد", "مثال"],
        es: ["Uso", "Ejemplo"],
        it: ["Uso", "Esempio"],
        fa: ["کاربرد", "مثال"],
        pt: ["Uso", "Exemplo"],
        so: ["Isticmaal", "Tusaale"],
        ti: ["ኣጠቓቕማ", "ኣብነት"],
        tr: ["Kullanım", "Örnek"],
        ps: ["کارونه", "بېلګه"],
        ru: ["Употребление", "Пример"],
        uk: ["Вживання", "Приклад"],
      },
      colWidths: ["35%", "65%"],
      boldFirstCol: true,

      rows: [
        ["Déplacement", "Tu {a}vas{/a} où ?\nNous {a}allons{/a} en Espagne."],
        ["Nouvelles", "Tu {a}vas{/a} bien ?\nOui, je {a}vais{/a} bien."],
      ],

      // Seule la première colonne est traduite.
      transRows: {
        sq: [
          ["Lëvizje", "Tu {a}vas{/a} où ?\nNous {a}allons{/a} en Espagne."],
          ["Pyetja për gjendjen", "Tu {a}vas{/a} bien ?\nOui, je {a}vais{/a} bien."],
        ],
        en: [
          ["Movement", "Tu {a}vas{/a} où ?\nNous {a}allons{/a} en Espagne."],
          ["Asking how someone is", "Tu {a}vas{/a} bien ?\nOui, je {a}vais{/a} bien."],
        ],
        ar: [
          ["تنقّل", "Tu {a}vas{/a} où ?\nNous {a}allons{/a} en Espagne."],
          ["السؤال عن الأحوال", "Tu {a}vas{/a} bien ?\nOui, je {a}vais{/a} bien."],
        ],
        am: [
          ["እንቅስቃሴ", "Tu {a}vas{/a} où ?\nNous {a}allons{/a} en Espagne."],
          ["ስለ ሁኔታ መጠየቅ", "Tu {a}vas{/a} bien ?\nOui, je {a}vais{/a} bien."],
        ],
        prs: [
          ["جابه‌جایی", "Tu {a}vas{/a} où ?\nNous {a}allons{/a} en Espagne."],
          ["احوال‌پرسی", "Tu {a}vas{/a} bien ?\nOui, je {a}vais{/a} bien."],
        ],
        es: [
          ["Desplazamiento", "Tu {a}vas{/a} où ?\nNous {a}allons{/a} en Espagne."],
          ["Preguntar cómo está alguien", "Tu {a}vas{/a} bien ?\nOui, je {a}vais{/a} bien."],
        ],
        it: [
          ["Spostamento", "Tu {a}vas{/a} où ?\nNous {a}allons{/a} en Espagne."],
          ["Chiedere come sta qualcuno", "Tu {a}vas{/a} bien ?\nOui, je {a}vais{/a} bien."],
        ],
        fa: [
          ["جابه‌جایی", "Tu {a}vas{/a} où ?\nNous {a}allons{/a} en Espagne."],
          ["احوال‌پرسی", "Tu {a}vas{/a} bien ?\nOui, je {a}vais{/a} bien."],
        ],
        pt: [
          ["Deslocação", "Tu {a}vas{/a} où ?\nNous {a}allons{/a} en Espagne."],
          ["Perguntar como alguém está", "Tu {a}vas{/a} bien ?\nOui, je {a}vais{/a} bien."],
        ],
        ru: [
          ["Перемещение", "Tu {a}vas{/a} où ?\nNous {a}allons{/a} en Espagne."],
          ["Спросить, как кто-то себя чувствует", "Tu {a}vas{/a} bien ?\nOui, je {a}vais{/a} bien."],
        ],
        so: [
          ["Dhaqaaqid", "Tu {a}vas{/a} où ?\nNous {a}allons{/a} en Espagne."],
          ["Weydiinta xaaladda qof", "Tu {a}vas{/a} bien ?\nOui, je {a}vais{/a} bien."],
        ],
        ti: [
          ["ምንቅስቓስ", "Tu {a}vas{/a} où ?\nNous {a}allons{/a} en Espagne."],
          ["ዜና ምሕታት", "Tu {a}vas{/a} bien ?\nOui, je {a}vais{/a} bien."],
        ],
        tr: [
          ["Hareket", "Tu {a}vas{/a} où ?\nNous {a}allons{/a} en Espagne."],
          ["Birinin nasıl olduğunu sorma", "Tu {a}vas{/a} bien ?\nOui, je {a}vais{/a} bien."],
        ],
        ps: [
          ["تګ راتګ", "Tu {a}vas{/a} où ?\nNous {a}allons{/a} en Espagne."],
          ["د چا د احوال پوښتنه", "Tu {a}vas{/a} bien ?\nOui, je {a}vais{/a} bien."],
        ],
        uk: [
          ["Переміщення", "Tu {a}vas{/a} où ?\nNous {a}allons{/a} en Espagne."],
          ["Запитання про справи", "Tu {a}vas{/a} bien ?\nOui, je {a}vais{/a} bien."],
        ],
      },
    },

    {
      type: "heading",
      text: "Conjugaison",
      trans: {
        sq: "Zgjedhimi",
        en: "Conjugation",
        ar: "التصريف",
        am: "የግስ አገባብ",
        prs: "صرف",
        es: "Conjugación",
        it: "Coniugazione",
        fa: "صرف",
        pt: "Conjugação",
        so: "Qorista falka",
        ti: "ምጽራይ",
        tr: "Çekim",
        ps: "ګردان",
        ru: "Спряжение",
        uk: "Дієвідміна",
      },
    },

    {
      type: "grid",
      headers: ["Pronom", "Aller", "Exemple"],
      transHeaders: {
        sq: ["Përemri", "Aller", "Shembull"],
        en: ["Pronoun", "Aller", "Example"],
        ar: ["الضمير", "Aller", "مثال"],
        am: ["ተውላጠ ስም", "Aller", "ምሳሌ"],
        prs: ["ضمیر", "Aller", "مثال"],
        es: ["Pronombre", "Aller", "Ejemplo"],
        it: ["Pronome", "Aller", "Esempio"],
        fa: ["ضمیر", "Aller", "مثال"],
        pt: ["Pronome", "Aller", "Exemplo"],
        so: ["Magac-u-yaal", "Aller", "Tusaale"],
        ti: ["ተካኢ ስም", "Aller", "ኣብነት"],
        tr: ["Zamir", "Aller", "Örnek"],
        ps: ["ضمير", "Aller", "بېلګه"],
        ru: ["Местоимение", "Aller", "Пример"],
        uk: ["Займенник", "Aller", "Приклад"],
      },

      boldFirstCol: true,
      colWidths: ["33%", "17%", "50%"],

      rows: [
        ["Je", "vais", "au cinéma."],
        ["Tu", "vas", "à la pharmacie."],
        ["Il / Elle / On", "va", "au théâtre."],
        ["Nous", "allons", "à la médiathèque."],
        ["Vous", "allez", "au gymnase."],
        ["Ils / Elles", "vont", "à la piscine."],
      ],
    },

    {
      type: "heading",
      text: "Verbes en -ayer, -oyer et -uyer",
      trans: {
        sq: "Foljet në -ayer, -oyer dhe -uyer",
        en: "Verbs in -ayer, -oyer and -uyer",
        ar: "أفعال -ayer / -oyer / -uyer",
        am: "በ -ayer፣ -oyer እና -uyer የሚያልቁ ግሶች",
        prs: "افعال -ayer / -oyer / -uyer",
        es: "Verbos en -ayer, -oyer y -uyer",
        it: "Verbi in -ayer, -oyer e -uyer",
        fa: "افعال -ayer / -oyer / -uyer",
        pt: "Verbos em -ayer, -oyer e -uyer",
        so: "Falalka ku dhammaada -ayer, -oyer iyo -uyer",
        ti: "ግሲያት -ayer / -oyer / -uyer",
        tr: "-ayer, -oyer ve -uyer ile biten fiiller",
        ps: "په -ayer، -oyer او -uyer پای ته رسېدونکي فعلونه",
        ru: "Глаголы на -ayer, -oyer и -uyer",
        uk: "Дієслова на -ayer, -oyer і -uyer",
      },
    },

    {
      type: "text",
      text: "{a}1.{/a} Le {a}y{/a} devient {a}i{/a} devant une terminaison muette (je, tu, il, ils).",
      transText: {
        sq: "{a}1.{/a} {a}y{/a} bëhet {a}i{/a} para një mbaresë të heshtur (je, tu, il, ils).",
        en: "{a}1.{/a} The {a}y{/a} becomes {a}i{/a} before a silent ending (je, tu, il, ils).",
        ar: "{a}1.{/a} يتحول {a}y{/a} إلى {a}i{/a} قبل نهاية صامتة (je, tu, il, ils).",
        am: "{a}1.{/a} {a}y{/a} ዝስቕ መወዳእታ ቅድሚ ምምጻእ {a}i{/a} ይኸውን (je, tu, il, ils)።",
        prs: "{a}1.{/a} حرف {a}y{/a} پیش از پایان بی‌صدا (je, tu, il, ils) به {a}i{/a} تبدیل می‌شود.",
        es: "{a}1.{/a} La {a}y{/a} se convierte en {a}i{/a} delante de una terminación muda (je, tu, il, ils).",
        it: "{a}1.{/a} La {a}y{/a} diventa {a}i{/a} davanti a una desinenza muta (je, tu, il, ils).",
        fa: "{a}1.{/a} حرف {a}y{/a} پیش از پایان بی‌صدا (je, tu, il, ils) به {a}i{/a} تبدیل می‌شود.",
        pt: "{a}1.{/a} O {a}y{/a} passa a {a}i{/a} antes de uma terminação muda (je, tu, il, ils).",
        so: "{a}1.{/a} {a}y{/a} wuxuu isu beddelaa {a}i{/a} ka hor dhammaad aan la dhawaaqin (je, tu, il, ils).",
        ti: "{a}1.{/a} እቲ {a}y{/a} ቅድሚ ዘይድመጽ መወዳእታ (je, tu, il, ils) ናብ {a}i{/a} ይቕየር።",
        tr: "{a}1.{/a} {a}y{/a}, sessiz bir ekten önce {a}i{/a} olur (je, tu, il, ils).",
        ps: "{a}1.{/a} {a}y{/a} د بې غږه پای څخه مخکې په {a}i{/a} بدلېږي (je, tu, il, ils).",
        ru: "{a}1.{/a} {a}y{/a} превращается в {a}i{/a} перед немым окончанием (je, tu, il, ils).",
        uk: "{a}1.{/a} {a}y{/a} перетворюється на {a}i{/a} перед німим закінченням (je, tu, il, ils).",
      },
    },

    {
      type: "text",
      text: "{a}2.{/a} Avec {a}je, tu, il/elle/on, ils/elles{/a}, le {a}y{/a} du radical est remplacé par un {a}i{/a}.",
      transText: {
        sq: "{a}2.{/a} Me {a}je, tu, il/elle/on, ils/elles{/a}, {a}y{/a} i temës zëvendësohet me {a}i{/a}.",
        en: "{a}2.{/a} With {a}je, tu, il/elle/on, ils/elles{/a}, the {a}y{/a} in the stem is replaced by an {a}i{/a}.",
        ar: "{a}2.{/a} مع {a}je, tu, il/elle/on, ils/elles{/a}، يُستبدل {a}y{/a} في الجذر بـ {a}i{/a}.",
        am: "{a}2.{/a} ከ {a}je, tu, il/elle/on, ils/elles{/a} ጋር፣ በሥሩ ያለው {a}y{/a} በ {a}i{/a} ይተካል።",
        prs: "{a}2.{/a} با {a}je, tu, il/elle/on, ils/elles{/a}، حرف {a}y{/a} در بن با {a}i{/a} جایگزین می‌شود.",
        es: "{a}2.{/a} Con {a}je, tu, il/elle/on, ils/elles{/a}, la {a}y{/a} de la raíz se sustituye por una {a}i{/a}.",
        it: "{a}2.{/a} Con {a}je, tu, il/elle/on, ils/elles{/a}, la {a}y{/a} della radice viene sostituita da una {a}i{/a}.",
        fa: "{a}2.{/a} با {a}je, tu, il/elle/on, ils/elles{/a}، حرف {a}y{/a} در بن با {a}i{/a} جایگزین می‌شود.",
        pt: "{a}2.{/a} Com {a}je, tu, il/elle/on, ils/elles{/a}, o {a}y{/a} do radical é substituído por {a}i{/a}.",
        so: "{a}2.{/a} Marka la joogo {a}je, tu, il/elle/on, ils/elles{/a}, {a}y{/a}-ga jirridda waxaa lagu beddelaa {a}i{/a}.",
        ti: "{a}2.{/a} ምስ {a}je, tu, il/elle/on, ils/elles{/a}፣ እቲ ኣብ ሱር ዘሎ {a}y{/a} ብ {a}i{/a} ይትካእ።",
        tr: "{a}2.{/a} {a}je, tu, il/elle/on, ils/elles{/a} ile kökteki {a}y{/a}, {a}i{/a} ile değiştirilir.",
        ps: "{a}2.{/a} له {a}je, tu, il/elle/on, ils/elles{/a} سره، د بن {a}y{/a} په {a}i{/a} بدلېږي.",
        ru: "{a}2.{/a} С {a}je, tu, il/elle/on, ils/elles{/a} {a}y{/a} в основе заменяется на {a}i{/a}.",
        uk: "{a}2.{/a} З {a}je, tu, il/elle/on, ils/elles{/a} літера {a}y{/a} в основі замінюється на {a}i{/a}.",
      },
    },

    {
      type: "text",
      text: "{a}3.{/a} Les verbes en {a}-ayer{/a} ont deux orthographes possibles (paie / paye).",
      transText: {
        sq: "{a}3.{/a} Foljet që mbarojnë me {a}-ayer{/a} kanë dy mënyra të mundshme shkrimi (paie / paye).",
        en: "{a}3.{/a} Verbs ending in {a}-ayer{/a} have two possible spellings (paie / paye).",
        ar: "{a}3.{/a} للأفعال المنتهية بـ {a}-ayer{/a} طريقتان ممكنتان في الكتابة (paie / paye).",
        am: "{a}3.{/a} በ {a}-ayer{/a} የሚያልቁ ግሶች ሁለት የአጻጻፍ አማራጮች አሏቸው (paie / paye)።",
        prs: "{a}3.{/a} فعل‌های پایان‌یافته به {a}-ayer{/a} دو املای ممکن دارند (paie / paye).",
        es: "{a}3.{/a} Los verbos terminados en {a}-ayer{/a} tienen dos grafías posibles (paie / paye).",
        it: "{a}3.{/a} I verbi terminati in {a}-ayer{/a} hanno due grafie possibili (paie / paye).",
        fa: "{a}3.{/a} فعل‌های پایان‌یافته به {a}-ayer{/a} دو املای ممکن دارند (paie / paye).",
        pt: "{a}3.{/a} Os verbos terminados em {a}-ayer{/a} têm duas grafias possíveis (paie / paye).",
        so: "{a}3.{/a} Falalka ku dhammaada {a}-ayer{/a} waxay leeyihiin laba higgaad oo suurtagal ah (paie / paye).",
        ti: "{a}3.{/a} ብ {a}-ayer{/a} ዝውድኡ ግሲታት ክልተ ናይ ኣጸሓሕፋ ኣማራጺታት ኣለዎም (paie / paye)።",
        tr: "{a}3.{/a} {a}-ayer{/a} ile biten fiillerin iki olası yazımı vardır (paie / paye).",
        ps: "{a}3.{/a} په {a}-ayer{/a} پای ته رسېدونکي فعلونه دوه ممکنه املاوې لري (paie / paye).",
        ru: "{a}3.{/a} У глаголов на {a}-ayer{/a} возможны два варианта написания (paie / paye).",
        uk: "{a}3.{/a} Дієслова на {a}-ayer{/a} мають два можливі варіанти написання (paie / paye).",
      },
    },

    verbsToSelector(
      [
        {
          infinitive: "payer",
          radical: "pay",
          rows: [
            { pronoun: "je", ending: "e", radical: "pai" },
            { pronoun: "tu", ending: "es", radical: "pai" },
            { pronoun: "il / elle / on", ending: "e", radical: "pai" },
            { pronoun: "nous", ending: "ons" },
            { pronoun: "vous", ending: "ez" },
            { pronoun: "ils / elles", ending: "ent", radical: "pai" },
          ],
        },
        {
          infinitive: "nettoyer",
          radical: "nettoy",
          rows: [
            { pronoun: "je", ending: "e", radical: "nettoi" },
            { pronoun: "tu", ending: "es", radical: "nettoi" },
            { pronoun: "il / elle / on", ending: "e", radical: "nettoi" },
            { pronoun: "nous", ending: "ons" },
            { pronoun: "vous", ending: "ez" },
            { pronoun: "ils / elles", ending: "ent", radical: "nettoi" },
          ],
        },
        {
          infinitive: "s'ennuyer",
          radical: "ennuy",
          reflexivePronouns: ["m'", "t'", "s'", "nous", "vous", "s'"],
          rows: [
            { pronoun: "je", ending: "e", radical: "ennui" },
            { pronoun: "tu", ending: "es", radical: "ennui" },
            { pronoun: "il / elle / on", ending: "e", radical: "ennui" },
            { pronoun: "nous", ending: "ons" },
            { pronoun: "vous", ending: "ez" },
            { pronoun: "ils / elles", ending: "ent", radical: "ennui" },
          ],
        },
      ],
      { buttonCols: 3 },
    ),

    {
      type: "heading",
      text: "Verbes en -ger et -cer",
      trans: {
        sq: "Foljet në -ger dhe -cer",
        en: "Verbs in -ger and -cer",
        ar: "أفعال -ger / -cer",
        am: "በ -ger እና -cer የሚያልቁ ግሶች",
        prs: "افعال -ger / -cer",
        es: "Verbos en -ger y -cer",
        it: "Verbi in -ger e -cer",
        fa: "افعال -ger / -cer",
        pt: "Verbos em -ger e -cer",
        so: "Falalka ku dhammaada -ger iyo -cer",
        ti: "ግሲያት -ger / -cer",
        tr: "-ger ve -cer ile biten fiiller",
        ps: "په -ger او -cer پای ته رسېدونکي فعلونه",
        ru: "Глаголы на -ger и -cer",
        uk: "Дієслова на -ger і -cer",
      },
    },

    {
      type: "text",
      text: "On ajoute {a}e{/a} après le {a}g{/a} à la forme {a}nous{/a} pour garder le son [ʒ].",
      transText: {
        sq: "Shtohet {a}e{/a} pas {a}g{/a} në formën {a}nous{/a} për të ruajtur tingullin [ʒ].",
        en: "An {a}e{/a} is added after {a}g{/a} in the {a}nous{/a} form to keep the [ʒ] sound.",
        ar: "نضيف {a}e{/a} بعد {a}g{/a} في صيغة {a}nous{/a} للحفاظ على الصوت [ʒ].",
        am: "የ [ʒ] ድምፅን ለመጠበቅ በ {a}nous{/a} ቅርጽ ከ {a}g{/a} በኋላ {a}e{/a} ይጨመራል።",
        prs: "برای حفظ صدای [ʒ]، در شکل {a}nous{/a} پس از {a}g{/a} یک {a}e{/a} اضافه می‌شود.",
        es: "Se añade {a}e{/a} después de {a}g{/a} en la forma {a}nous{/a} para conservar el sonido [ʒ].",
        it: "Si aggiunge {a}e{/a} dopo {a}g{/a} nella forma {a}nous{/a} per mantenere il suono [ʒ].",
        fa: "برای حفظ صدای [ʒ]، در صورت {a}nous{/a} پس از {a}g{/a} یک {a}e{/a} اضافه می‌شود.",
        pt: "Acrescenta-se um {a}e{/a} depois de {a}g{/a} na forma {a}nous{/a} para manter o som [ʒ].",
        so: "{a}e{/a} ayaa lagu daraa ka dib {a}g{/a} qaabka {a}nous{/a} si loo ilaaliyo dhawaaqa [ʒ].",
        ti: "እቲ [ʒ] ዝብል ድምጺ ንምዕቃብ፣ ኣብ ቅርጺ {a}nous{/a} ድሕሪ {a}g{/a} {a}e{/a} ንውስኽ።",
        tr: "[ʒ] sesini korumak için {a}nous{/a} biçiminde {a}g{/a}'den sonra bir {a}e{/a} eklenir.",
        ps: "د [ʒ] غږ ساتلو لپاره، د {a}nous{/a} په بڼه کې له {a}g{/a} وروسته يو {a}e{/a} زياتېږي.",
        ru: "В форме {a}nous{/a} после {a}g{/a} добавляется {a}e{/a}, чтобы сохранить звук [ʒ].",
        uk: "У формі {a}nous{/a} після {a}g{/a} додається {a}e{/a}, щоб зберегти звук [ʒ].",
      },
    },

    verbsToSelector(
      [
        {
          infinitive: "manger",
          radical: "mang",
          rows: [
            { pronoun: "je", ending: "e" },
            { pronoun: "tu", ending: "es" },
            { pronoun: "il / elle / on", ending: "e" },
            { pronoun: "nous", ending: "ons", radical: "mange" },
            { pronoun: "vous", ending: "ez" },
            { pronoun: "ils / elles", ending: "ent" },
          ],
        },
        {
          infinitive: "voyager",
          radical: "voyag",
          rows: [
            { pronoun: "je", ending: "e" },
            { pronoun: "tu", ending: "es" },
            { pronoun: "il / elle / on", ending: "e" },
            { pronoun: "nous", ending: "ons", radical: "voyage" },
            { pronoun: "vous", ending: "ez" },
            { pronoun: "ils / elles", ending: "ent" },
          ],
        },
        {
          infinitive: "changer",
          radical: "chang",
          rows: [
            { pronoun: "je", ending: "e" },
            { pronoun: "tu", ending: "es" },
            { pronoun: "il / elle / on", ending: "e" },
            { pronoun: "nous", ending: "ons", radical: "change" },
            { pronoun: "vous", ending: "ez" },
            { pronoun: "ils / elles", ending: "ent" },
          ],
        },
      ],
      { buttonCols: 3 },
    ),

    {
      type: "text",
      text: "Le {a}c{/a} devient {a}ç{/a} devant {a}o{/a} à la forme {a}nous{/a} pour garder le son [s].",
      transText: {
        sq: "{a}c{/a} bëhet {a}ç{/a} para {a}o{/a} në formën {a}nous{/a} për të ruajtur tingullin [s].",
        en: "The {a}c{/a} becomes {a}ç{/a} before {a}o{/a} in the {a}nous{/a} form to keep the [s] sound.",
        ar: "يتحول {a}c{/a} إلى {a}ç{/a} قبل {a}o{/a} في صيغة {a}nous{/a} للحفاظ على الصوت [s].",
        am: "የ [s] ድምፅን ለመጠበቅ በ {a}nous{/a} ቅርጽ {a}c{/a} ከ {a}o{/a} በፊት ወደ {a}ç{/a} ይቀየራል።",
        prs: "برای حفظ صدای [s]، در شکل {a}nous{/a} حرف {a}c{/a} پیش از {a}o{/a} به {a}ç{/a} تبدیل می‌شود.",
        es: "La {a}c{/a} se convierte en {a}ç{/a} delante de {a}o{/a} en la forma {a}nous{/a} para conservar el sonido [s].",
        it: "La {a}c{/a} diventa {a}ç{/a} davanti a {a}o{/a} nella forma {a}nous{/a} per mantenere il suono [s].",
        fa: "برای حفظ صدای [s]، در صورت {a}nous{/a} حرف {a}c{/a} پیش از {a}o{/a} به {a}ç{/a} تبدیل می‌شود.",
        pt: "O {a}c{/a} passa a {a}ç{/a} antes de {a}o{/a} na forma {a}nous{/a} para manter o som [s].",
        so: "{a}c{/a} wuxuu isu beddelaa {a}ç{/a} ka hor {a}o{/a} qaabka {a}nous{/a} si loo ilaaliyo dhawaaqa [s].",
        ti: "እቲ [s] ዝብል ድምጺ ንምዕቃብ፣ ኣብ ቅርጺ {a}nous{/a} {a}c{/a} ቅድሚ {a}o{/a} ናብ {a}ç{/a} ይቕየር።",
        tr: "[s] sesini korumak için {a}nous{/a} biçiminde {a}o{/a}'dan önce {a}c{/a}, {a}ç{/a} olur.",
        ps: "د [s] غږ ساتلو لپاره، د {a}nous{/a} په بڼه کې له {a}o{/a} مخکې {a}c{/a} په {a}ç{/a} بدلېږي.",
        ru: "В форме {a}nous{/a} буква {a}c{/a} перед {a}o{/a} превращается в {a}ç{/a}, чтобы сохранить звук [s].",
        uk: "У формі {a}nous{/a} {a}c{/a} перетворюється на {a}ç{/a} перед {a}o{/a}, щоб зберегти звук [s].",
      },
    },

    verbsToSelector(
      [
        {
          infinitive: "commencer",
          radical: "commenc",
          rows: [
            { pronoun: "je", ending: "e" },
            { pronoun: "tu", ending: "es" },
            { pronoun: "il / elle / on", ending: "e" },
            { pronoun: "nous", ending: "ons", radical: "commenç" },
            { pronoun: "vous", ending: "ez" },
            { pronoun: "ils / elles", ending: "ent" },
          ],
        },
        {
          infinitive: "avancer",
          radical: "avanc",
          rows: [
            { pronoun: "je", ending: "e" },
            { pronoun: "tu", ending: "es" },
            { pronoun: "il / elle / on", ending: "e" },
            { pronoun: "nous", ending: "ons", radical: "avanç" },
            { pronoun: "vous", ending: "ez" },
            { pronoun: "ils / elles", ending: "ent" },
          ],
        },
        {
          infinitive: "lancer",
          radical: "lanc",
          rows: [
            { pronoun: "je", ending: "e" },
            { pronoun: "tu", ending: "es" },
            { pronoun: "il / elle / on", ending: "e" },
            { pronoun: "nous", ending: "ons", radical: "lanç" },
            { pronoun: "vous", ending: "ez" },
            { pronoun: "ils / elles", ending: "ent" },
          ],
        },
      ],
      { buttonCols: 3 },
    ),

    {
      type: "heading",
      text: "Verbes en -eler, -eter et -érer",
      trans: {
        sq: "Foljet në -eler, -eter dhe -érer",
        en: "Verbs in -eler, -eter and -érer",
        ar: "أفعال -eler / -eter / -érer",
        am: "በ -eler፣ -eter እና -érer የሚያልቁ ግሶች",
        prs: "افعال -eler / -eter / -érer",
        es: "Verbos en -eler, -eter y -érer",
        it: "Verbi in -eler, -eter e -érer",
        fa: "افعال -eler / -eter / -érer",
        pt: "Verbos em -eler, -eter e -érer",
        so: "Falalka ku dhammaada -eler, -eter iyo -érer",
        ti: "ግሲያት -eler / -eter / -érer",
        tr: "-eler, -eter ve -érer ile biten fiiller",
        ps: "په -eler، -eter او -érer پای ته رسېدونکي فعلونه",
        ru: "Глаголы на -eler, -eter и -érer",
        uk: "Дієслова на -eler, -eter і -érer",
      },
    },

    {
      type: "text",
      text: "Ils ont deux {a}radicaux{/a}. Le 1er pour {a}nous{/a} et {a}vous{/a} comme l'infinitif. Le 2e pour les autres personnes.",

      transText: {
        sq: "Kanë dy {a}tema{/a}. E para përdoret për {a}nous{/a} dhe {a}vous{/a}, si në infinitiv. E dyta përdoret për personat e tjerë.",
        en: "They have two {a}stems{/a}. The 1st is used for {a}nous{/a} and {a}vous{/a}, as in the infinitive. The 2nd is used for the other persons.",
        ar: "لها جذران. يُستخدم الجذر الأول مع {a}nous{/a} و{a}vous{/a} كما في المصدر. ويُستخدم الجذر الثاني مع بقية الأشخاص.",
        am: "ሁለት {a}ሥሮች{/a} አሏቸው። የመጀመሪያው እንደ ምንጭ ቅርጹ ለ {a}nous{/a} እና {a}vous{/a} ይጠቀማል። ሁለተኛው ለሌሎች ሰዎች ይጠቀማል።",
        prs: "آن‌ها دو {a}بن{/a} دارند. بن اول مانند مصدر برای {a}nous{/a} و {a}vous{/a} استفاده می‌شود. بن دوم برای سایر اشخاص به کار می‌رود.",
        es: "Tienen dos {a}raíces{/a}. La primera se usa para {a}nous{/a} y {a}vous{/a}, como en el infinitivo. La segunda se usa para las demás personas.",
        it: "Hanno due {a}radici{/a}. La prima si usa con {a}nous{/a} e {a}vous{/a}, come nell'infinito. La seconda si usa con le altre persone.",
        fa: "آن‌ها دو {a}بن{/a} دارند. بن اول، مانند مصدر، برای {a}nous{/a} و {a}vous{/a} استفاده می‌شود. بن دوم برای سایر اشخاص به کار می‌رود.",
        pt: "Têm dois {a}radicais{/a}. O primeiro é usado com {a}nous{/a} e {a}vous{/a}, como no infinitivo. O segundo é usado com as outras pessoas.",
        so: "Waxay leeyihiin laba {a}jirridood{/a}. Tan koowaad waxaa loo isticmaalaa {a}nous{/a} iyo {a}vous{/a}, sida falka aan la rogin. Tan labaad waxaa loo isticmaalaa dadka kale.",
        ti: "ክልተ {a}ሱራት{/a} ኣለዎም። እቲ ቀዳማይ ከም ኣብ መሰረታዊ ግሲ ምስ {a}nous{/a}ን {a}vous{/a}ን ይጥቀም። እቲ ካልኣይ ድማ ምስ ካልኦት ሰባት ይጥቀም።",
        tr: "İki {a}kökleri{/a} vardır. Birinci kök, mastardaki gibi {a}nous{/a} ve {a}vous{/a} için kullanılır. İkinci kök diğer kişiler için kullanılır.",
        ps: "دوی دوه {a}بنونه{/a} لري. لومړی بن، لکه په مصدر کې، د {a}nous{/a} او {a}vous{/a} لپاره کارول کېږي. دوهم بن د نورو اشخاصو لپاره کارول کېږي.",
        ru: "У них две {a}основы{/a}. Первая используется для {a}nous{/a} и {a}vous{/a}, как в инфинитиве. Вторая используется для остальных лиц.",
        uk: "Вони мають дві {a}основи{/a}. 1-ша, як в інфінітиві, використовується для {a}nous{/a} і {a}vous{/a}. 2-га використовується для інших осіб.",
      },

      items: [
        "Les verbes comme {a}jeter{/a} doublent le {a}t{/a} devant une terminaison muette.",
        "Les verbes comme {a}appeler{/a} doublent le {a}l{/a} devant une terminaison muette.",
      ],

      noBulletItems: [0, 1],

      transItems: {
        sq: [
          "Foljet si {a}jeter{/a} e dyfishojnë {a}t{/a} para një mbarimi të heshtur.",
          "Foljet si {a}appeler{/a} e dyfishojnë {a}l{/a} para një mbarimi të heshtur.",
        ],
        en: [
          "Verbs like {a}jeter{/a} double the {a}t{/a} before a silent ending.",
          "Verbs like {a}appeler{/a} double the {a}l{/a} before a silent ending.",
        ],
        ar: [
          "الأفعال مثل {a}jeter{/a} تضاعف حرف {a}t{/a} قبل نهاية صامتة.",
          "الأفعال مثل {a}appeler{/a} تضاعف حرف {a}l{/a} قبل نهاية صامتة.",
        ],
        am: [
          "እንደ {a}jeter{/a} ያሉ ግሶች ዝም ያለ መጨረሻ ከመጣ በፊት {a}t{/a}ን ሁለት ጊዜ ይጽፋሉ።",
          "እንደ {a}appeler{/a} ያሉ ግሶች ዝም ያለ መጨረሻ ከመጣ በፊት {a}l{/a}ን ሁለት ጊዜ ይጽፋሉ።",
        ],
        prs: [
          "فعل‌هایی مانند {a}jeter{/a} پیش از پایان بی‌صدا حرف {a}t{/a} را دو برابر می‌کنند.",
          "فعل‌هایی مانند {a}appeler{/a} پیش از پایان بی‌صدا حرف {a}l{/a} را دو برابر می‌کنند.",
        ],
        es: [
          "Los verbos como {a}jeter{/a} duplican la {a}t{/a} delante de una terminación muda.",
          "Los verbos como {a}appeler{/a} duplican la {a}l{/a} delante de una terminación muda.",
        ],
        it: [
          "I verbi come {a}jeter{/a} raddoppiano la {a}t{/a} davanti a una desinenza muta.",
          "I verbi come {a}appeler{/a} raddoppiano la {a}l{/a} davanti a una desinenza muta.",
        ],
        fa: [
          "فعل‌هایی مانند {a}jeter{/a} پیش از پایان بی‌صدا حرف {a}t{/a} را دو برابر می‌کنند.",
          "فعل‌هایی مانند {a}appeler{/a} پیش از پایان بی‌صدا حرف {a}l{/a} را دو برابر می‌کنند.",
        ],
        pt: [
          "Os verbos como {a}jeter{/a} duplicam o {a}t{/a} antes de uma terminação muda.",
          "Os verbos como {a}appeler{/a} duplicam o {a}l{/a} antes de uma terminação muda.",
        ],
        ru: [
          "Глаголы типа {a}jeter{/a} удваивают {a}t{/a} перед немым окончанием.",
          "Глаголы типа {a}appeler{/a} удваивают {a}l{/a} перед немым окончанием.",
        ],
        so: [
          "Falalka sida {a}jeter{/a} waxay labanlaabaan {a}t{/a} ka hor dhammaad aan la dhawaaqin.",
          "Falalka sida {a}appeler{/a} waxay labanlaabaan {a}l{/a} ka hor dhammaad aan la dhawaaqin.",
        ],
        ti: [
          "ከም {a}jeter{/a} ዝኣመሰሉ ግሲታት ቅድሚ ዘይድመጽ መወዳእታ {a}t{/a} ይደርቡ።",
          "ከም {a}appeler{/a} ዝኣመሰሉ ግሲታት ቅድሚ ዘይድመጽ መወዳእታ {a}l{/a} ይደርቡ።",
        ],
        tr: [
          "{a}jeter{/a} gibi fiiller sessiz bir ekten önce {a}t{/a}'yi çift yazar.",
          "{a}appeler{/a} gibi fiiller sessiz bir ekten önce {a}l{/a}'yi çift yazar.",
        ],
        ps: [
          "د {a}jeter{/a} په شان فعلونه د بې غږه پای څخه مخکې {a}t{/a} دوه برابره کوي.",
          "د {a}appeler{/a} په شان فعلونه د بې غږه پای څخه مخکې {a}l{/a} دوه برابره کوي.",
        ],
        uk: [
          "Дієслова на зразок {a}jeter{/a} подвоюють {a}t{/a} перед німим закінченням.",
          "Дієслова на зразок {a}appeler{/a} подвоюють {a}l{/a} перед німим закінченням.",
        ],
      },
    },

    verbsToSelector(
      [
        {
          infinitive: "jeter",
          radical: "jet",
          rows: [
            { pronoun: "je", ending: "e", radical: "jett" },
            { pronoun: "tu", ending: "es", radical: "jett" },
            { pronoun: "il / elle / on", ending: "e", radical: "jett" },
            { pronoun: "nous", ending: "ons" },
            { pronoun: "vous", ending: "ez" },
            { pronoun: "ils / elles", ending: "ent", radical: "jett" },
          ],
        },
        {
          infinitive: "appeler",
          radical: "appel",
          rows: [
            { pronoun: "j'", ending: "e", radical: "appell" },
            { pronoun: "tu", ending: "es", radical: "appell" },
            { pronoun: "il / elle / on", ending: "e", radical: "appell" },
            { pronoun: "nous", ending: "ons" },
            { pronoun: "vous", ending: "ez" },
            { pronoun: "ils / elles", ending: "ent", radical: "appell" },
          ],
        },
        {
          infinitive: "préférer",
          radical: "préfér",
          rows: [
            { pronoun: "je", ending: "e", radical: "préfèr" },
            { pronoun: "tu", ending: "es", radical: "préfèr" },
            { pronoun: "il / elle / on", ending: "e", radical: "préfèr" },
            { pronoun: "nous", ending: "ons" },
            { pronoun: "vous", ending: "ez" },
            { pronoun: "ils / elles", ending: "ent", radical: "préfèr" },
          ],
        },
      ],
      { buttonCols: 3 },
    ),
  ],

  exercises: G1_EXERCISES["G1.8"](),
};