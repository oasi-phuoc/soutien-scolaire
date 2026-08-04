import type { GrammarLesson } from "../../grammar-data";
import { G1_EXERCISES } from "./g1-lesson-profiles";

/** Unité 10 — Le présent progressif (G1.11) */
export const A1_GR_PRESENT_PROGRESSIF: GrammarLesson = {
  slug: "a1-gr-present-progressif",
  code: "G1.11",
  level: "A1",
  title: "Le présent progressif",
  theory: [
    {
      type: "heading",
      text: "Utilisation",
      trans: { en: "Usage", ar: "الاستخدام", fa: "کاربرد", ti: "ኣጠቓቕማ", uk: "Вживання" },
    },
    {
      type: "plain_list",
      items: [
        "{a}1.{/a} On utilise le présent progressif à la place du présent simple pour parler d'une action qui se passe au moment exact où l'on parle.",
      ],
      transItems: {
        en: ["{a}1.{/a} The present progressive is used instead of the simple present to talk about an action happening at the exact moment of speaking."],
        ar: ["{a}1.{/a} يُستخدم الحاضر المستمر بدلاً من الحاضر البسيط للتحدث عن فعل يحدث في اللحظة نفسها التي نتكلم فيها."],
        fa: ["{a}1.{/a} از حال استمراری به‌جای حال ساده برای صحبت دربارهٔ کاری استفاده می‌شود که دقیقاً در لحظهٔ سخن گفتن در حال انجام است."],
        ti: ["{a}1.{/a} ኣብታ እንዛረበላ ቅጽበት ዝካየድ ዘሎ ተግባር ንምግላጽ፣ ቀጻሊ ህሉው ኣብ ክንዲ ቀሊል ህሉው ንጥቀም።"],
        uk: ["{a}1.{/a} Теперішній тривалий час уживають замість простого теперішнього, щоб говорити про дію, яка відбувається саме в момент мовлення."],
      },
    },
    {
      type: "plain_list",
      items: [
        "{a}2.{/a} On l'emploie souvent pour expliquer pourquoi on ne peut pas faire autre chose.",
      ],
      transItems: {
        en: ["{a}2.{/a} It is often used to explain why someone cannot do something else."],
        ar: ["{a}2.{/a} يُستخدم غالباً لشرح سبب عدم القدرة على فعل شيء آخر."],
        fa: ["{a}2.{/a} اغلب برای توضیح اینکه چرا نمی‌توان کار دیگری انجام داد، به کار می‌رود."],
        ti: ["{a}2.{/a} ስለምንታይ ካልእ ነገር ክንገብር ከም ዘይንኽእል ንምግላጽ ብዙሕ ግዜ ንጥቀመሉ።"],
        uk: ["{a}2.{/a} Його часто вживають, щоб пояснити, чому неможливо робити щось інше."],
      },
    },
    {
      type: "plain_list",
      items: [
        "{a}3.{/a} On ne peut pas l'utiliser pour une action habituelle ou une description générale.",
      ],
      transItems: {
        en: ["{a}3.{/a} It cannot be used for a habitual action or a general description."],
        ar: ["{a}3.{/a} لا يمكن استخدامه لفعل معتاد أو لوصف عام."],
        fa: ["{a}3.{/a} نمی‌توان از آن برای یک کار همیشگی یا یک توصیف کلی استفاده کرد."],
        ti: ["{a}3.{/a} ንልሙድ ተግባር ወይ ንሓፈሻዊ መግለጺ ክንጥቀመሉ ኣይንኽእልን።"],
        uk: ["{a}3.{/a} Його не можна вживати для звичної дії або загального опису."],
      },
    },
    {
      type: "grid",
      headers: ["Aspect", "Exemple"],
      colWidths: ["33%", "67%"],
      rows: [
        ["Présent\nsimple", "Non, je {a}prends{/a} ma douche. (information)"],
        ["Présent\nprogressif", "Non, je {a}suis en train de prendre{/a} ma douche. (insiste sur le déroulement)"],
      ],
      transHeaders: {
        en: ["Aspect", "Example"],
        ar: ["الجانب", "مثال"],
        fa: ["جنبه", "مثال"],
        ti: ["መልክዕ", "ኣብነት"],
        uk: ["Аспект", "Приклад"],
      },
      transRows: {
        en: [["Simple\npresent", "Non, je {a}prends{/a} ma douche. (information)"], ["Present\nprogressive", "Non, je {a}suis en train de prendre{/a} ma douche. (insiste sur le déroulement)"]],
        ar: [["الحاضر\nالبسيط", "Non, je {a}prends{/a} ma douche. (information)"], ["الحاضر\nالمستمر", "Non, je {a}suis en train de prendre{/a} ma douche. (insiste sur le déroulement)"]],
        fa: [["حال\nساده", "Non, je {a}prends{/a} ma douche. (information)"], ["حال\nاستمراری", "Non, je {a}suis en train de prendre{/a} ma douche. (insiste sur le déroulement)"]],
        ti: [["ቀሊል\nህሉው", "Non, je {a}prends{/a} ma douche. (information)"], ["ቀጻሊ\nህሉው", "Non, je {a}suis en train de prendre{/a} ma douche. (insiste sur le déroulement)"]],
        uk: [["Простий\nтеперішній", "Non, je {a}prends{/a} ma douche. (information)"], ["Теперішній\nтривалий", "Non, je {a}suis en train de prendre{/a} ma douche. (insiste sur le déroulement)"]],
      },
    },
    {
      type: "heading",
      text: "Forme",
      trans: { en: "Form", ar: "الصيغة", fa: "صورت", ti: "ቅርጺ", uk: "Форма" },
    },
    {
      type: "plain_list",
      items: ["Verbe {a}être{/a} (présent) + {a}en train de{/a} + infinitif."],
      transItems: {
        en: ["Verb {a}être{/a} (present) + {a}en train de{/a} + infinitive."],
        ar: ["الفعل {a}être{/a} (في الحاضر) + {a}en train de{/a} + المصدر."],
        fa: ["فعل {a}être{/a} (حال) + {a}en train de{/a} + مصدر."],
        ti: ["ግሲ {a}être{/a} (ህሉው) + {a}en train de{/a} + መሰረታዊ ግሲ።"],
        uk: ["Дієслово {a}être{/a} (теперішній час) + {a}en train de{/a} + інфінітив."],
      },
    },
    {
      type: "highlight",
      label: "",
      items: ["Il {a}est en train de{/a} dormir."],
      noBulletItems: [0],
    },
    {
      type: "plain_list",
      items: ["Avec un verbe pronominal, le pronom se place devant l'infinitif."],
      transItems: {
        en: ["With a pronominal verb, the pronoun is placed before the infinitive."],
        ar: ["مع الفعل الضميري، يوضع الضمير قبل المصدر."],
        fa: ["در فعل ضمیری، ضمیر پیش از مصدر قرار می‌گیرد."],
        ti: ["ምስ ተመላላሲ ግሲ፣ እቲ ተካኢ ስም ቅድሚ መሰረታዊ ግሲ ይቕመጥ።"],
        uk: ["Із займенниковим дієсловом займенник ставиться перед інфінітивом."],
      },
    },
    {
      type: "highlight",
      label: "",
      items: ["Elles {a}sont en train de{/a} se préparer."],
      noBulletItems: [0],
    },
    {
      type: "plain_list",
      items: ["À la forme négative, {a}ne… pas{/a} encadre le verbe être."],
      transItems: {
        en: ["In the negative form, {a}ne… pas{/a} surrounds the verb être."],
        ar: ["في صيغة النفي، تحيط {a}ne… pas{/a} بالفعل être."],
        fa: ["در شکل منفی، {a}ne… pas{/a} دو طرف فعل être قرار می‌گیرد."],
        ti: ["ኣብ ኣሉታዊ ቅርጺ፣ {a}ne… pas{/a} ንግሲ être ይኸብቦ።"],
        uk: ["У заперечній формі {a}ne… pas{/a} оточує дієслово être."],
      },
    },
    {
      type: "highlight",
      label: "",
      items: ["Ils {a}ne{/a} sont {a}pas{/a} en train de travailler."],
      noBulletItems: [0],
    },
    {
      type: "heading",
      text: "Orthographe",
      trans: { en: "Spelling", ar: "الإملاء", fa: "املا", ti: "ኣጸሓሕፋ", uk: "Правопис" },
    },
    {
      type: "plain_list",
      items: [
        "{a}De{/a} devient {a}d'{/a} devant un verbe qui commence par une voyelle ou un h muet.",
      ],
      transItems: {
        en: ["{a}De{/a} becomes {a}d'{/a} before a verb beginning with a vowel or a silent h."],
        ar: ["تتحول {a}de{/a} إلى {a}d'{/a} قبل فعل يبدأ بحرف علة أو h صامتة."],
        fa: ["{a}De{/a} پیش از فعلی که با حرف صدادار یا h بی‌صدا آغاز می‌شود، به {a}d'{/a} تبدیل می‌شود."],
        ti: ["{a}De{/a} ቅድሚ ብድምጺ ፊደል ወይ ብዘይድመጽ h ዝጅምር ግሲ፣ ናብ {a}d'{/a} ይቕየር።"],
        uk: ["{a}De{/a} змінюється на {a}d'{/a} перед дієсловом, що починається з голосної або німого h."],
      },
    },
    {
      type: "highlight",
      label: "",
      items: [
        "Nous sommes en train {s}de{/s} apprendre le français.",
        "Nous sommes en train {a}d'{/a}apprendre le français.",
      ],
      noBulletItems: [0, 1],
      inlineArrows: true,
    },
  ],
  exercises: G1_EXERCISES["G1.11"](),
};
