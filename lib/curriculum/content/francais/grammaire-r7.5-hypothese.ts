import type { GrammarLesson } from "../../grammar-data";

export const A2_GR_HYPOTHESE_FUTUR: GrammarLesson = {
  slug: "a2-gr-hypothese-futur",
  code: "R4.8",
  level: "A2",
  title: "L'hypothèse sur le futur",
  theory: [
    { type: "heading", text: "Si + présent → futur simple", trans: { en: "Si + present → simple future", ar: "Si + المضارع ← المستقبل البسيط", fa: "Si + حال ← آینده‌ی ساده", ti: "Si + ህሉው → ቀሊል መጻኢ", uk: "Si + теперішній → простий майбутній" } },
    {
      type: "highlight",
      label: "Structure",
      items: ["Condition : {a}si + présent{/a}.", "Conséquence : {a}futur simple{/a}.", "Si tu viens demain, nous mangerons ensemble."],
      transLabel: { en: "Structure", ar: "البنية", fa: "ساختار", ti: "ቅርጺ", uk: "Структура" },
      transItems: {
        en: ["Condition: {a}si + present{/a}.", "Consequence: {a}simple future{/a}.", "Si tu viens demain, nous mangerons ensemble. (If you come tomorrow, we will eat together.)"],
        ar: ["الشرط: {a}si + المضارع{/a}.", "النتيجة: {a}المستقبل البسيط{/a}.", "Si tu viens demain, nous mangerons ensemble. (إذا أتيت غداً، سنأكل معاً.)"],
        fa: ["شرط: {a}si + حال{/a}.", "نتیجه: {a}آینده‌ی ساده{/a}.", "Si tu viens demain, nous mangerons ensemble. (اگر فردا بیایی، با هم غذا می‌خوریم.)"],
        ti: ["ኩነት፦ {a}si + ህሉው{/a}።", "ሳዕቤን፦ {a}ቀሊል መጻኢ{/a}።", "Si tu viens demain, nous mangerons ensemble. (ጽባሕ እንተመጺእካ፣ ብሓባር ክንበልዕ ኢና።)"],
        uk: ["Умова: {a}si + теперішній{/a}.", "Наслідок: {a}простий майбутній{/a}.", "Si tu viens demain, nous mangerons ensemble. (Якщо ти прийдеш завтра, ми поїмо разом.)"],
      },
    },
    {
      type: "plain_list",
      items: ["L'ordre des deux propositions peut changer : nous mangerons ensemble si tu viens demain.", "On n'utilise jamais le futur juste après si dans cette structure."],
      transItems: {
        en: ["The order of the two clauses can change: nous mangerons ensemble si tu viens demain. (we will eat together if you come tomorrow).", "The future is never used right after «si» in this structure."],
        ar: ["يمكن أن يتغير ترتيب الجملتين: nous mangerons ensemble si tu viens demain. (سنأكل معاً إذا أتيت غداً).", "لا يُستخدم المستقبل أبداً مباشرة بعد «si» في هذه البنية."],
        fa: ["ترتیب دو عبارت می‌تواند تغییر کند: nous mangerons ensemble si tu viens demain. (با هم غذا می‌خوریم اگر فردا بیایی).", "در این ساختار هرگز بعد از «si» از آینده استفاده نمی‌شود."],
        ti: ["ቅደም ተኸተል ናይ ክልቲኡ ሓሳባት ክቕየር ይኽእል፦ nous mangerons ensemble si tu viens demain. (ጽባሕ እንተመጺእካ ብሓባር ክንበልዕ ኢና)።", "ኣብዚ ቅርጺ ድሕሪ «si» ፈጺሙ መጻኢ ኣይጥቀምን።"],
        uk: ["Порядок двох частин може змінюватися: nous mangerons ensemble si tu viens demain. (ми поїмо разом, якщо ти прийдеш завтра).", "Майбутній час ніколи не вживається одразу після «si» в цій структурі."],
      },
    },
    { type: "highlight", label: "Élision avec il", items: ["si + il devient {a}s'il{/a} : s'il pleut, nous resterons à la maison.", "On écrit si elle, si on, si ils n'existe pas."],
      transLabel: { en: "Elision with «il»", ar: "الحذف مع «il»", fa: "حذف با «il»", ti: "ምሕጻር ምስ «il»", uk: "Елізія з «il»" },
      transItems: {
        en: ["si + il becomes {a}s'il{/a}: s'il pleut, nous resterons à la maison. (if it rains, we will stay at home).", "We write «si elle», «si on»; «si ils» does not exist."],
        ar: ["si + il يصبح {a}s'il{/a}: s'il pleut, nous resterons à la maison. (إذا أمطرت، سنبقى في المنزل).", "نكتب «si elle» و«si on»؛ «si ils» غير موجودة."],
        fa: ["si + il به {a}s'il{/a} تبدیل می‌شود: s'il pleut, nous resterons à la maison. (اگر باران ببارد، در خانه می‌مانیم).", "می‌نویسیم «si elle»، «si on»؛ «si ils» وجود ندارد."],
        ti: ["si + il ናብ {a}s'il{/a} ይቕየር፦ s'il pleut, nous resterons à la maison. (እንተዘንቢሉ፣ ኣብ ገዛ ክንተርፍ ኢና)።", "«si elle»፣ «si on» ንጽሕፍ፤ «si ils» የለን።"],
        uk: ["si + il стає {a}s'il{/a}: s'il pleut, nous resterons à la maison. (якщо піде дощ, ми залишимося вдома).", "Пишемо «si elle», «si on»; «si ils» не існує."],
      },
    },
  ],
  exercises: [],
};
