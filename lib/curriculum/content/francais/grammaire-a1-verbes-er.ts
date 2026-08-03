import type { GrammarLesson } from "../../grammar-data";
import { G1_EXERCISES } from "./g1-lesson-profiles";

/** Unité 4 — Les verbes en -er : cas général (G1.5) */
export const A1_GR_VERBES_ER: GrammarLesson = {
  slug: "a1-gr-verbes-er",
  code: "G1.5",
  level: "A1",
  title: "Les verbes en -er : cas général",
  theory: [
    {
      type: "heading",
      text: "Utilisation",
      trans: { en: "Usage", ar: "الاستخدام", fa: "کاربرد", ti: "ኣጠቓቕማ", uk: "Вживання" },
    },
    {
      type: "plain_list",
      items: [
        "Les verbes en {a}-er{/a} sont les verbes les plus fréquents en français. Ils font partie du 1er groupe. Le présent de l'indicatif est utilisé pour :",
      ],
      transItems: {
        en: ["Verbs ending in {a}-er{/a} are the most common verbs in French. They belong to the 1st group. The present indicative is used to:"],
        ar: ["الأفعال المنتهية بـ {a}-er{/a} هي الأكثر شيوعاً في الفرنسية. وهي تنتمي إلى المجموعة الأولى. يُستخدم المضارع للدلالة على:"],
        fa: ["فعل‌های پایان‌یافته به {a}-er{/a} رایج‌ترین فعل‌ها در زبان فرانسوی هستند. آن‌ها به گروه اول تعلق دارند. زمان حال اخباری برای موارد زیر به کار می‌رود:"],
        ti: ["ብ {a}-er{/a} ዝውድኡ ግሲታት ኣብ ፈረንሳይኛ እቶም ዝበዝሑ ግሲታት እዮም። ኣብ 1ይ ጉጅለ ይርከቡ። ህሉው ግዜ ንዚ ዝስዕብ ይጥቀም:"],
        uk: ["Дієслова на {a}-er{/a} — найпоширеніші у французькій мові. Вони належать до 1-ї групи. Теперішній час дійсного способу вживається, щоб:"],
      },
    },
    {
      type: "plain_list",
      items: ["{a}1.{/a} Parler d'une action qui se passe au moment où l'on parle."],
      transItems: {
        en: ["{a}1.{/a} Talk about an action happening at the moment of speaking."],
        ar: ["{a}1.{/a} التحدث عن فعل يحدث في لحظة الكلام."],
        fa: ["{a}1.{/a} صحبت دربارهٔ کاری که در لحظهٔ گفت‌وگو اتفاق می‌افتد."],
        ti: ["{a}1.{/a} ኣብ እዋን ምዝራብ ብዛዕባ ዝፍጸም ተግባር ምዝራብ።"],
        uk: ["{a}1.{/a} Говорити про дію, що відбувається в момент мовлення."],
      },
    },
    {
      type: "highlight",
      label: "",
      items: ["Vous {a}regardez{/a} la télévision en ce moment ?"],
      noBulletItems: [0],
    },
    {
      type: "plain_list",
      items: ["{a}2.{/a} Parler d'une action habituelle."],
      transItems: {
        en: ["{a}2.{/a} Talk about a habitual action."],
        ar: ["{a}2.{/a} التحدث عن فعل معتاد."],
        fa: ["{a}2.{/a} صحبت دربارهٔ یک کار همیشگی."],
        ti: ["{a}2.{/a} ብዛዕባ ልሙድ ተግባር ምዝራብ።"],
        uk: ["{a}2.{/a} Говорити про звичну дію."],
      },
    },
    {
      type: "highlight",
      label: "",
      items: ["Tous les matins, je {a}regarde{/a} mes mails."],
      noBulletItems: [0],
    },
    {
      type: "plain_list",
      items: ["{a}3.{/a} Faire une description générale au présent, ou exprimer des goûts et des idées."],
      transItems: {
        en: ["{a}3.{/a} Give a general description in the present, or express likes and ideas."],
        ar: ["{a}3.{/a} تقديم وصف عام في الحاضر، أو التعبير عن الأذواق والأفكار."],
        fa: ["{a}3.{/a} ارائهٔ توصیفی کلی در زمان حال، یا بیان سلیقه‌ها و ایده‌ها."],
        ti: ["{a}3.{/a} ኣብ ህሉው ግዜ ሓፈሻዊ መግለጺ ምሃብ፣ ወይ ድሌታትን ሓሳባትን ምግላጽ።"],
        uk: ["{a}3.{/a} Давати загальний опис у теперішньому часі або висловлювати вподобання та думки."],
      },
    },
    {
      type: "highlight",
      label: "",
      items: ["Vous {a}habitez{/a} à Paris ?"],
      noBulletItems: [0],
    },

    {
      type: "heading",
      text: "Comment former le verbe ?",
      trans: { en: "How to form the verb?", ar: "كيف تصرّف الفعل؟", fa: "چگونه فعل را صرف کنیم؟", ti: "ግሲ ብኸመይ ትሰርሕ?", uk: "Як утворити дієслово?" },
    },
    {
      type: "plain_list",
      items: [
        "En général, les verbes en {a}-er{/a} ont une base verbale. On ajoute la terminaison {a}e, es, e, ons, ez, ent{/a} à cette base.",
      ],
      transItems: {
        en: ["In general, verbs ending in {a}-er{/a} have a verb stem. The ending {a}e, es, e, ons, ez, ent{/a} is added to this stem."],
        ar: ["عموماً، للأفعال المنتهية بـ {a}-er{/a} جذر فعلي. نضيف النهايات {a}e, es, e, ons, ez, ent{/a} إلى هذا الجذر."],
        fa: ["به‌طور کلی، فعل‌های پایان‌یافته به {a}-er{/a} یک بن فعل دارند. پایان‌های {a}e, es, e, ons, ez, ent{/a} به این بن افزوده می‌شوند."],
        ti: ["ብሓፈሻ፣ ብ {a}-er{/a} ዝውድኡ ግሲታት ሱር ግሲ ኣለዎም። ኣብዚ ሱር {a}e, es, e, ons, ez, ent{/a} ዝብሉ መወዳእታታት ንውስኸሉ።"],
        uk: ["Зазвичай дієслова на {a}-er{/a} мають дієслівну основу. До неї додають закінчення {a}e, es, e, ons, ez, ent{/a}."],
      },
    },
    {
      type: "grid",
      headers: ["Infinitif", "Pronom", "Verbe", "Complément"],
      transHeaders: {
        en: ["Infinitive", "Pronoun", "Verb", "Complement"],
        ar: ["المصدر", "الضمير", "الفعل", "المتمّم"],
        fa: ["مصدر", "ضمیر", "فعل", "متمم"],
        ti: ["መሰረታዊ ግሲ", "ተካኢ ስም", "ግሲ", "መመላእታ"],
        uk: ["Інфінітив", "Займенник", "Дієслово", "Додаток"],
      },
      boldFirstCol: true,
      rows: [
        ["regarder", "Je", "regard{a}e{/a}", "mes mails."],
        ["écouter", "Tu", "écout{a}es{/a}", "la radio."],
        ["habiter", "Il / Elle / On", "habit{a}e{/a}", "à Paris."],
        ["parler", "Nous", "parl{a}ons{/a}", "français."],
        ["aimer", "Vous", "aim{a}ez{/a}", "le football."],
        ["étudier", "Ils / Elles", "étudi{a}ent{/a}", "les relations internationales."],
      ],
    },
    {
      type: "plain_list",
      items: ["On prend le verbe et on enlève {a}-er{/a}."],
      transItems: {
        en: ["Take the verb and remove {a}-er{/a}."],
        ar: ["نأخذ الفعل ونحذف {a}-er{/a}."],
        fa: ["فعل را می‌گیریم و {a}-er{/a} را حذف می‌کنیم."],
        ti: ["ነቲ ግሲ ወሲድና {a}-er{/a} ነውጽእ።"],
        uk: ["Беремо дієслово й відкидаємо {a}-er{/a}."],
      },
    },
    {
      type: "verb_toggle",
      buttonCols: 3,
      verbs: [
        {
          infinitive: "parler",
          radical: "parl",
          rows: [
            { pronoun: "je", ending: "e" },
            { pronoun: "tu", ending: "es" },
            { pronoun: "il / elle / on", ending: "e" },
            { pronoun: "nous", ending: "ons" },
            { pronoun: "vous", ending: "ez" },
            { pronoun: "ils / elles", ending: "ent" },
          ],
        },
        {
          infinitive: "aimer",
          radical: "aim",
          rows: [
            { pronoun: "je", ending: "e" },
            { pronoun: "tu", ending: "es" },
            { pronoun: "il / elle / on", ending: "e" },
            { pronoun: "nous", ending: "ons" },
            { pronoun: "vous", ending: "ez" },
            { pronoun: "ils / elles", ending: "ent" },
          ],
        },
        {
          infinitive: "écouter",
          radical: "écout",
          rows: [
            { pronoun: "je", ending: "e" },
            { pronoun: "tu", ending: "es" },
            { pronoun: "il / elle / on", ending: "e" },
            { pronoun: "nous", ending: "ons" },
            { pronoun: "vous", ending: "ez" },
            { pronoun: "ils / elles", ending: "ent" },
          ],
        },
        {
          infinitive: "habiter",
          radical: "habit",
          rows: [
            { pronoun: "je", ending: "e" },
            { pronoun: "tu", ending: "es" },
            { pronoun: "il / elle / on", ending: "e" },
            { pronoun: "nous", ending: "ons" },
            { pronoun: "vous", ending: "ez" },
            { pronoun: "ils / elles", ending: "ent" },
          ],
        },
        {
          infinitive: "regarder",
          radical: "regard",
          rows: [
            { pronoun: "je", ending: "e" },
            { pronoun: "tu", ending: "es" },
            { pronoun: "il / elle / on", ending: "e" },
            { pronoun: "nous", ending: "ons" },
            { pronoun: "vous", ending: "ez" },
            { pronoun: "ils / elles", ending: "ent" },
          ],
        },
        {
          infinitive: "étudier",
          radical: "étudi",
          rows: [
            { pronoun: "je", ending: "e" },
            { pronoun: "tu", ending: "es" },
            { pronoun: "il / elle / on", ending: "e" },
            { pronoun: "nous", ending: "ons" },
            { pronoun: "vous", ending: "ez" },
            { pronoun: "ils / elles", ending: "ent" },
          ],
        },
      ],
    },

    {
      type: "heading",
      text: "Prononciation et orthographe",
      trans: { en: "Pronunciation and spelling", ar: "النطق والإملاء", fa: "تلفظ و املا", ti: "ኣደማምጻን ኣጸሓሕፋን", uk: "Вимова та правопис" },
    },
    {
      type: "plain_list",
      items: ["{a}1.{/a} On prononce la consonne finale du radical, mais on ne prononce pas les terminaisons {a}-e, -es, -ent{/a}."],
      transItems: {
        en: ["{a}1.{/a} The final consonant of the stem is pronounced, but the endings {a}-e, -es, -ent{/a} are not."],
        ar: ["{a}1.{/a} يُنطق الحرف الساكن الأخير من الجذر، لكن لا تُنطق النهايات {a}-e, -es, -ent{/a}."],
        fa: ["{a}1.{/a} صامت پایانی بن تلفظ می‌شود، اما پایان‌های {a}-e, -es, -ent{/a} تلفظ نمی‌شوند."],
        ti: ["{a}1.{/a} ናይ ሱር ግሲ መወዳእታ ተነባቢ ይድመጽ፣ {a}-e, -es, -ent{/a} ዝብሉ መወዳእታታት ግን ኣይድመጹን።"],
        uk: ["{a}1.{/a} Кінцевий приголосний основи вимовляється, а закінчення {a}-e, -es, -ent{/a} — ні."],
      },
    },
    {
      type: "plain_list",
      items: ["{a}2.{/a} On fait la liaison."],
      transItems: {
        en: ["{a}2.{/a} A liaison is made."],
        ar: ["{a}2.{/a} نُجري الوصل الصوتي."],
        fa: ["{a}2.{/a} پیوند آوایی انجام می‌شود."],
        ti: ["{a}2.{/a} ሊያዞን ንገብር።"],
        uk: ["{a}2.{/a} Робимо лієзон."],
      },
    },
    {
      type: "highlight",
      label: "",
      items: ["O{li}n|a{/li}ime, nou{li}s|é{/li}coutons, vou{li}s|é{/li}tudiez, il{li}s|h{/li}abitent, elle{li}s|o{/li}ublient."],
      noBulletItems: [0],
    },
    {
      type: "plain_list",
      items: ["{a}3.{/a} Le pronom {a}je{/a} devient {a}j'{/a} devant une voyelle ou un h muet."],
      transItems: {
        en: ["{a}3.{/a} The pronoun {a}je{/a} becomes {a}j'{/a} before a vowel or a silent h."],
        ar: ["{a}3.{/a} يتحول الضمير {a}je{/a} إلى {a}j'{/a} قبل حرف متحرك أو h صامت."],
        fa: ["{a}3.{/a} ضمیر {a}je{/a} پیش از واکه یا h بی‌صدا به {a}j'{/a} تبدیل می‌شود."],
        ti: ["{a}3.{/a} እቲ {a}je{/a} ዝብል ተካኢ ስም ቅድሚ ኣድማጺ ፊደል ወይ ዘይድመጽ h ናብ {a}j'{/a} ይቕየር።"],
        uk: ["{a}3.{/a} Займенник {a}je{/a} перетворюється на {a}j'{/a} перед голосною або німою h."],
      },
    },
    {
      type: "highlight",
      label: "",
      items: [
        "{s}Je aime{/s} → {a}J'aime{/a} ma ville.",
        "{s}Je habite{/s} → {a}J'habite{/a} à Paris.",
      ],
      noBulletItems: [0, 1],
      inlineArrows: true,
    },
  ],
  exercises: G1_EXERCISES["G1.5"](),
};
