import type { GrammarLesson } from "../../grammar-data";
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
      trans: { en: "The verb aller", ar: "فعل aller", fa: "فعل aller", ti: "ግሲ aller", uk: "Дієслово aller" },
    },
    {
      type: "plain_list",
      items: [
        "Le verbe {a}aller{/a} sert à indiquer un déplacement (il est alors suivi d'un lieu ou d'un infinitif) ou à prendre et donner des nouvelles.",
      ],
      transItems: {
        en: ["The verb {a}aller{/a} is used to indicate movement (it is then followed by a place or an infinitive) or to ask for and give news."],
        ar: ["يُستخدم الفعل {a}aller{/a} للدلالة على التنقّل (ويتبع عندئذٍ بمكان أو مصدر) أو للسؤال عن الأحوال وإخبار الآخرين بها."],
        fa: ["فعل {a}aller{/a} برای نشان دادن جابه‌جایی (که در این حالت پس از آن مکان یا مصدر می‌آید) یا برای احوال‌پرسی و خبر دادن به کار می‌رود."],
        ti: ["እቲ {a}aller{/a} ዝብል ግሲ ምንቅስቓስ ንምግላጽ (ድሕሪኡ ቦታ ወይ መሰረታዊ ግሲ ይመጽእ) ወይ ዜና ንምሕታትን ንምሃብን ይጥቀም።"],
        uk: ["Дієслово {a}aller{/a} вживається для позначення переміщення (тоді після нього стоїть місце або інфінітив), а також щоб запитати про справи чи повідомити новини."],
      },
    },
    {
      type: "grid",
      headers: ["Emploi", "Exemple"],
      transHeaders: {
        en: ["Use", "Example"],
        ar: ["الاستخدام", "مثال"],
        fa: ["کاربرد", "مثال"],
        ti: ["ኣጠቓቕማ", "ኣብነት"],
        uk: ["Вживання", "Приклад"],
      },
      colWidths: ["33%", "67%"],
      rows: [
        ["Déplacement", "Tu {a}vas{/a} où ?\nNous {a}allons{/a} en Espagne."],
        ["Nouvelles", "Tu {a}vas{/a} bien ?\nOui, je {a}vais{/a} bien."],
      ],
      transRows: {
        en: [["Movement", "Tu {a}vas{/a} où ?\nNous {a}allons{/a} en Espagne."], ["Asking how someone is", "Tu {a}vas{/a} bien ?\nOui, je {a}vais{/a} bien."]],
        ar: [["تنقّل", "Tu {a}vas{/a} où ?\nNous {a}allons{/a} en Espagne."], ["السؤال عن الأحوال", "Tu {a}vas{/a} bien ?\nOui, je {a}vais{/a} bien."]],
        fa: [["جابه‌جایی", "Tu {a}vas{/a} où ?\nNous {a}allons{/a} en Espagne."], ["احوال‌پرسی", "Tu {a}vas{/a} bien ?\nOui, je {a}vais{/a} bien."]],
        ti: [["ምንቅስቓስ", "Tu {a}vas{/a} où ?\nNous {a}allons{/a} en Espagne."], ["ዜና ምሕታት", "Tu {a}vas{/a} bien ?\nOui, je {a}vais{/a} bien."]],
        uk: [["Переміщення", "Tu {a}vas{/a} où ?\nNous {a}allons{/a} en Espagne."], ["Запитання про справи", "Tu {a}vas{/a} bien ?\nOui, je {a}vais{/a} bien."]],
      },
    },
    {
      type: "heading",
      text: "Conjugaison",
      trans: { en: "Conjugation", ar: "التصريف", fa: "صرف", ti: "ምጽራይ", uk: "Дієвідміна" },
    },
    {
      type: "grid",
      headers: ["Pronom", "Aller", "Exemple"],
      transHeaders: {
        en: ["Pronoun", "Aller", "Example"],
        ar: ["الضمير", "Aller", "مثال"],
        fa: ["ضمیر", "Aller", "مثال"],
        ti: ["ተካኢ ስም", "Aller", "ኣብነት"],
        uk: ["Займенник", "Aller", "Приклад"],
      },
      boldFirstCol: true,
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
      text: "Prononciation",
      trans: { en: "Pronunciation", ar: "النطق", fa: "تلفظ", ti: "ኣደማምጻ", uk: "Вимова" },
    },
    {
      type: "plain_list",
      items: ["{a}1.{/a} On fait la liaison."],
      transItems: {
        en: ["{a}1.{/a} A liaison is made."],
        ar: ["{a}1.{/a} نُجري الوصل الصوتي."],
        fa: ["{a}1.{/a} پیوند آوایی انجام می‌شود."],
        ti: ["{a}1.{/a} ሊያዞን ንገብር።"],
        uk: ["{a}1.{/a} Робимо лієзон."],
      },
    },
    {
      type: "highlight",
      label: "",
      items: ["Nou{li}s|a{/li}llons, vou{li}s|a{/li}llez."],
      noBulletItems: [0],
    },

    {
      type: "heading",
      text: "Verbes en -ayer, -oyer et -uyer",
      trans: { en: "Verbs in -ayer, -oyer and -uyer", ar: "أفعال -ayer / -oyer / -uyer", fa: "افعال -ayer / -oyer / -uyer", ti: "ግሲያት -ayer / -oyer / -uyer", uk: "Дієслова на -ayer, -oyer і -uyer" },
    },
    {
      type: "plain_list",
      items: ["{a}1.{/a} Le {a}y{/a} devient {a}i{/a} devant une terminaison muette (je, tu, il, ils)."],
      transItems: {
        en: ["{a}1.{/a} The {a}y{/a} becomes {a}i{/a} before a silent ending (je, tu, il, ils)."],
        ar: ["{a}1.{/a} يتحول {a}y{/a} إلى {a}i{/a} قبل نهاية صامتة (je, tu, il, ils)."],
        fa: ["{a}1.{/a} حرف {a}y{/a} پیش از پایان بی‌صدا (je, tu, il, ils) به {a}i{/a} تبدیل می‌شود."],
        ti: ["{a}1.{/a} እቲ {a}y{/a} ቅድሚ ዘይድመጽ መወዳእታ (je, tu, il, ils) ናብ {a}i{/a} ይቕየር።"],
        uk: ["{a}1.{/a} {a}y{/a} перетворюється на {a}i{/a} перед німим закінченням (je, tu, il, ils)."],
      },
    },
    {
      type: "plain_list",
      items: ["{a}2.{/a} Avec {a}je, tu, il/elle/on, ils/elles{/a}, le {a}y{/a} du radical est remplacé par un {a}i{/a}."],
      transItems: {
        en: ["{a}2.{/a} With {a}je, tu, il/elle/on, ils/elles{/a}, the {a}y{/a} in the stem is replaced by an {a}i{/a}."],
        ar: ["{a}2.{/a} مع {a}je, tu, il/elle/on, ils/elles{/a}، يُستبدل {a}y{/a} في الجذر بـ {a}i{/a}."],
        fa: ["{a}2.{/a} با {a}je, tu, il/elle/on, ils/elles{/a}، حرف {a}y{/a} در بن با {a}i{/a} جایگزین می‌شود."],
        ti: ["{a}2.{/a} ምስ {a}je, tu, il/elle/on, ils/elles{/a}፣ እቲ ኣብ ሱር ዘሎ {a}y{/a} ብ {a}i{/a} ይትካእ።"],
        uk: ["{a}2.{/a} З {a}je, tu, il/elle/on, ils/elles{/a} літера {a}y{/a} в основі замінюється на {a}i{/a}."],
      },
    },
    {
      type: "plain_list",
      items: ["{a}3.{/a} Les verbes en {a}-ayer{/a} ont deux orthographes possibles (paie / paye)."],
      transItems: {
        en: ["{a}3.{/a} Verbs ending in {a}-ayer{/a} have two possible spellings (paie / paye)."],
        ar: ["{a}3.{/a} للأفعال المنتهية بـ {a}-ayer{/a} طريقتان ممكنتان في الكتابة (paie / paye)."],
        fa: ["{a}3.{/a} فعل‌های پایان‌یافته به {a}-ayer{/a} دو املای ممکن دارند (paie / paye)."],
        ti: ["{a}3.{/a} ብ {a}-ayer{/a} ዝውድኡ ግሲታት ክልተ ናይ ኣጸሓሕፋ ኣማራጺታት ኣለዎም (paie / paye)።"],
        uk: ["{a}3.{/a} Дієслова на {a}-ayer{/a} мають два можливі варіанти написання (paie / paye)."],
      },
    },
    {
      type: "verb_toggle",
      buttonCols: 3,
      verbs: [
        {
          infinitive: "payer", radical: "pay",
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
          infinitive: "nettoyer", radical: "nettoy",
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
          infinitive: "s'ennuyer", radical: "ennuy",
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
    },

    {
      type: "heading",
      text: "Verbes en -ger et -cer",
      trans: { en: "Verbs in -ger and -cer", ar: "أفعال -ger / -cer", fa: "افعال -ger / -cer", ti: "ግሲያት -ger / -cer", uk: "Дієслова на -ger і -cer" },
    },
    {
      type: "plain_list",
      items: ["On ajoute {a}e{/a} après le {a}g{/a} à la forme {a}nous{/a} pour garder le son [ʒ]."],
      transItems: {
        en: ["An {a}e{/a} is added after {a}g{/a} in the {a}nous{/a} form to keep the [ʒ] sound."],
        ar: ["نضيف {a}e{/a} بعد {a}g{/a} في صيغة {a}nous{/a} للحفاظ على الصوت [ʒ]."],
        fa: ["برای حفظ صدای [ʒ]، در صورت {a}nous{/a} پس از {a}g{/a} یک {a}e{/a} اضافه می‌شود."],
        ti: ["እቲ [ʒ] ዝብል ድምጺ ንምዕቃብ፣ ኣብ ቅርጺ {a}nous{/a} ድሕሪ {a}g{/a} {a}e{/a} ንውስኽ።"],
        uk: ["У формі {a}nous{/a} після {a}g{/a} додається {a}e{/a}, щоб зберегти звук [ʒ]."],
      },
    },
    {
      type: "verb_toggle",
      buttonCols: 3,
      verbs: [
        {
          infinitive: "manger", radical: "mang",
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
          infinitive: "voyager", radical: "voyag",
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
          infinitive: "changer", radical: "chang",
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
    },
    {
      type: "plain_list",
      items: ["Le {a}c{/a} devient {a}ç{/a} devant {a}o{/a} à la forme {a}nous{/a} pour garder le son [s]."],
      transItems: {
        en: ["The {a}c{/a} becomes {a}ç{/a} before {a}o{/a} in the {a}nous{/a} form to keep the [s] sound."],
        ar: ["يتحول {a}c{/a} إلى {a}ç{/a} قبل {a}o{/a} في صيغة {a}nous{/a} للحفاظ على الصوت [s]."],
        fa: ["برای حفظ صدای [s]، در صورت {a}nous{/a} حرف {a}c{/a} پیش از {a}o{/a} به {a}ç{/a} تبدیل می‌شود."],
        ti: ["እቲ [s] ዝብል ድምጺ ንምዕቃብ፣ ኣብ ቅርጺ {a}nous{/a} {a}c{/a} ቅድሚ {a}o{/a} ናብ {a}ç{/a} ይቕየር።"],
        uk: ["У формі {a}nous{/a} {a}c{/a} перетворюється на {a}ç{/a} перед {a}o{/a}, щоб зберегти звук [s]."],
      },
    },
    {
      type: "verb_toggle",
      buttonCols: 3,
      verbs: [
        {
          infinitive: "commencer", radical: "commenc",
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
          infinitive: "avancer", radical: "avanc",
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
          infinitive: "lancer", radical: "lanc",
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
    },

    {
      type: "heading",
      text: "Verbes en -eler, -eter et -érer",
      trans: { en: "Verbs in -eler, -eter and -érer", ar: "أفعال -eler / -eter / -érer", fa: "افعال -eler / -eter / -érer", ti: "ግሲያት -eler / -eter / -érer", uk: "Дієслова на -eler, -eter і -érer" },
    },
    {
      type: "plain_list",
      items: [
        "{a}1.{/a} Avec {a}je, tu, il/elle/on, ils/elles{/a}, ces verbes ont une particularité orthographique qui change la prononciation.",
      ],
      transItems: {
        en: ["{a}1.{/a} With {a}je, tu, il/elle/on, ils/elles{/a}, these verbs have a spelling change that affects pronunciation."],
        ar: ["{a}1.{/a} مع {a}je, tu, il/elle/on, ils/elles{/a}، تتميز هذه الأفعال بتغيير إملائي يؤثر في النطق."],
        fa: ["{a}1.{/a} با {a}je, tu, il/elle/on, ils/elles{/a}، این فعل‌ها تغییر املایی ویژه‌ای دارند که تلفظ را عوض می‌کند."],
        ti: ["{a}1.{/a} ምስ {a}je, tu, il/elle/on, ils/elles{/a}፣ እዞም ግሲታት ንኣደማምጻ ዝቕይር ፍሉይ ኣጸሓሕፋ ኣለዎም።"],
        uk: ["{a}1.{/a} З {a}je, tu, il/elle/on, ils/elles{/a} ці дієслова мають орфографічну особливість, яка змінює вимову."],
      },
    },
    {
      type: "plain_list",
      items: [
        "{a}2.{/a} Ils ont deux radicaux : le 1er (comme l'infinitif) pour {a}nous{/a} et {a}vous{/a} ; le 2e (modifié) pour les autres personnes.",
      ],
      transItems: {
        en: ["{a}2.{/a} They have two stems: the 1st (as in the infinitive) for {a}nous{/a} and {a}vous{/a}; the 2nd (modified) for the other persons."],
        ar: ["{a}2.{/a} لها جذران: الأول (مثل المصدر) مع {a}nous{/a} و{a}vous{/a}؛ والثاني (المعدّل) مع بقية الأشخاص."],
        fa: ["{a}2.{/a} آن‌ها دو بن دارند: بن اول (مانند مصدر) برای {a}nous{/a} و {a}vous{/a}؛ بن دوم (تغییریافته) برای سایر اشخاص."],
        ti: ["{a}2.{/a} ክልተ ሱራት ኣለዎም፦ እቲ 1ይ (ከም መሰረታዊ ግሲ) ን {a}nous{/a}ን {a}vous{/a}ን፣ እቲ 2ይ (ዝተቐየረ) ንኻልኦት ሰባት።"],
        uk: ["{a}2.{/a} Вони мають дві основи: 1-шу (як в інфінітиві) для {a}nous{/a} і {a}vous{/a}; 2-гу (змінену) для інших осіб."],
      },
    },
    {
      type: "plain_list",
      items: ["{a}3.{/a} Les verbes comme {a}jeter{/a} doublent le {a}t{/a} devant une terminaison muette."],
      transItems: {
        en: ["{a}3.{/a} Verbs like {a}jeter{/a} double the {a}t{/a} before a silent ending."],
        ar: ["{a}3.{/a} الأفعال مثل {a}jeter{/a} تضاعف حرف {a}t{/a} قبل نهاية صامتة."],
        fa: ["{a}3.{/a} فعل‌هایی مانند {a}jeter{/a} پیش از پایان بی‌صدا حرف {a}t{/a} را دو برابر می‌کنند."],
        ti: ["{a}3.{/a} ከም {a}jeter{/a} ዝኣመሰሉ ግሲታት ቅድሚ ዘይድመጽ መወዳእታ {a}t{/a} ይደርቡ።"],
        uk: ["{a}3.{/a} Дієслова на зразок {a}jeter{/a} подвоюють {a}t{/a} перед німим закінченням."],
      },
    },
    {
      type: "plain_list",
      items: ["{a}4.{/a} Les verbes comme {a}appeler{/a} doublent le {a}l{/a} devant une terminaison muette."],
      transItems: {
        en: ["{a}4.{/a} Verbs like {a}appeler{/a} double the {a}l{/a} before a silent ending."],
        ar: ["{a}4.{/a} الأفعال مثل {a}appeler{/a} تضاعف حرف {a}l{/a} قبل نهاية صامتة."],
        fa: ["{a}4.{/a} فعل‌هایی مانند {a}appeler{/a} پیش از پایان بی‌صدا حرف {a}l{/a} را دو برابر می‌کنند."],
        ti: ["{a}4.{/a} ከም {a}appeler{/a} ዝኣመሰሉ ግሲታት ቅድሚ ዘይድመጽ መወዳእታ {a}l{/a} ይደርቡ።"],
        uk: ["{a}4.{/a} Дієслова на зразок {a}appeler{/a} подвоюють {a}l{/a} перед німим закінченням."],
      },
    },
    {
      type: "verb_toggle",
      buttonCols: 3,
      verbs: [
        {
          infinitive: "jeter", radical: "jet",
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
          infinitive: "appeler", radical: "appel",
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
          infinitive: "préférer", radical: "préfér",
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
    },
  ],
  exercises: G1_EXERCISES["G1.8"](),
};
