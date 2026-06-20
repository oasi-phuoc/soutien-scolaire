import type { GrammarLesson } from "../../grammar-data";

export const A2_GR_PASSE_OU_IMPARFAIT: GrammarLesson = {
  slug: "a2-gr-passe-compose-ou-imparfait",
  code: "R6.3",
  level: "A2",
  title: "Passé composé ou imparfait ?",
  theory: [
    { type: "heading", text: "Passé composé ou imparfait ?", trans: { en: "Passé composé or imparfait?", ar: "الماضي المركّب أم الماضي الناقص؟", fa: "گذشته‌ی نقلی یا ماضی استمراری؟", ti: "ሕሉፍ ግዜ ወይ ሕሉፍ ቀጻሊ?", uk: "Passé composé чи imparfait?" } },
    {
      type: "grid",
      headers: ["Imparfait", "Passé composé"],
      rows: [
        ["habitude ou répétition", "événement ponctuel"],
        ["description et contexte", "action principale"],
        ["action en cours", "action qui interrompt"],
        ["Avant, je marchais chaque jour.", "Hier, j'ai marché dix kilomètres."],
      ],
      equalCols: true,
      transHeaders: {
        en: ["Imparfait", "Passé composé"],
        ar: ["الماضي الناقص", "الماضي المركّب"],
        fa: ["ماضی استمراری", "گذشته‌ی نقلی"],
        ti: ["ሕሉፍ ቀጻሊ", "ሕሉፍ ግዜ"],
        uk: ["Imparfait", "Passé composé"],
      },
      transRows: {
        en: [["habit or repetition", "one-off event"], ["description and context", "main action"], ["ongoing action", "action that interrupts"], ["Avant, je marchais chaque jour. (Before, I used to walk every day.)", "Hier, j'ai marché dix kilomètres. (Yesterday, I walked ten kilometres.)"]],
        ar: [["عادة أو تكرار", "حدث عابر", ], ["وصف وسياق", "الفعل الرئيسي"], ["فعل جارٍ", "فعل يقطع"], ["Avant, je marchais chaque jour. (في الماضي، كنت أمشي كل يوم.)", "Hier, j'ai marché dix kilomètres. (أمس، مشيت عشرة كيلومترات.)"]],
        fa: [["عادت یا تکرار", "رویداد لحظه‌ای"], ["توصیف و بافت", "عمل اصلی"], ["عمل در حال جریان", "عملی که قطع می‌کند"], ["Avant, je marchais chaque jour. (قبلاً، هر روز پیاده‌روی می‌کردم.)", "Hier, j'ai marché dix kilomètres. (دیروز، ده کیلومتر راه رفتم.)"]],
        ti: [["ልምዲ ወይ ምድጋም", "ሓደ ግዜ ዝፍጸም ፍጻመ"], ["መግለጺን ኩነትን", "ቀንዲ ተግባር"], ["ኣብ ምስልሳል ዘሎ ተግባር", "ዝቋርጽ ተግባር"], ["Avant, je marchais chaque jour. (ቅድሚኡ፣ ኩሉ መዓልቲ እኸይድ ነይረ።)", "Hier, j'ai marché dix kilomètres. (ትማሊ፣ ዓሰርተ ኪሎሜተር ተጓዒዘ።)"]],
        uk: [["звичка або повторення", "одноразова подія"], ["опис і контекст", "головна дія"], ["дія, що триває", "дія, що перериває"], ["Avant, je marchais chaque jour. (Раніше я ходив пішки щодня.)", "Hier, j'ai marché dix kilomètres. (Вчора я пройшов десять кілометрів.)"]],
      },
    },
    {
      type: "highlight",
      label: "Simultanéité",
      items: [
        "Deux actions longues et simultanées se mettent souvent à l'imparfait.",
        "Pendant que je {a}cuisinais{/a}, elle {a}lisait{/a}.",
      ],
      transLabel: { en: "Simultaneity", ar: "التزامن", fa: "همزمانی", ti: "ሓባራዊ ግዜ", uk: "Одночасність" },
      transItems: {
        en: ["Two long, simultaneous actions often go in the imparfait.", "Pendant que je {a}cuisinais{/a}, elle {a}lisait{/a}. (While I was cooking, she was reading.)"],
        ar: ["فعلان طويلان متزامنان يوضعان غالباً في الماضي الناقص.", "Pendant que je {a}cuisinais{/a}, elle {a}lisait{/a}. (بينما كنت أطبخ، كانت تقرأ.)"],
        fa: ["دو عمل طولانی و همزمان اغلب در ماضی استمراری می‌آیند.", "Pendant que je {a}cuisinais{/a}, elle {a}lisait{/a}. (در حالی که آشپزی می‌کردم، او می‌خواند.)"],
        ti: ["ክልተ ነዋሕትን ሓባራዊ ግዜ ዘለዎምን ተግባራት መብዛሕትኡ ግዜ ኣብ ሕሉፍ ቀጻሊ ይኣትዉ።", "Pendant que je {a}cuisinais{/a}, elle {a}lisait{/a}. (ኣነ ይበስል ከለኹ፣ ንሳ ተንብብ ነበረት።)"],
        uk: ["Дві довгі одночасні дії часто стоять в imparfait.", "Pendant que je {a}cuisinais{/a}, elle {a}lisait{/a}. (Поки я готував, вона читала.)"],
      },
    },
    {
      type: "highlight",
      label: "Être en train de à l'imparfait",
      items: [
        "Pour insister sur une action en cours : être à l'imparfait + en train de + infinitif.",
        "J'{a}étais en train de dormir{/a} quand le téléphone a sonné.",
      ],
      transLabel: { en: "Être en train de in the imparfait", ar: "Être en train de في الماضي الناقص", fa: "Être en train de در ماضی استمراری", ti: "Être en train de ኣብ ሕሉፍ ቀጻሊ", uk: "Être en train de в imparfait" },
      transItems: {
        en: ["To stress an action in progress: être in the imparfait + en train de + infinitive.", "J'{a}étais en train de dormir{/a} quand le téléphone a sonné. (I was sleeping when the phone rang.)"],
        ar: ["للتأكيد على فعل جارٍ: être في الماضي الناقص + en train de + المصدر.", "J'{a}étais en train de dormir{/a} quand le téléphone a sonné. (كنت نائماً عندما رنّ الهاتف.)"],
        fa: ["برای تأکید بر عملی در حال جریان: être در ماضی استمراری + en train de + مصدر.", "J'{a}étais en train de dormir{/a} quand le téléphone a sonné. (وقتی تلفن زنگ زد، در حال خوابیدن بودم.)"],
        ti: ["ኣብ ምስልሳል ዘሎ ተግባር ንምጉላሕ፦ être ኣብ ሕሉፍ ቀጻሊ + en train de + መሰረታዊ ግሲ።", "J'{a}étais en train de dormir{/a} quand le téléphone a sonné. (ቴለፎን ክድውል ከሎ ኣብ ምድቃስ ነበርኩ።)"],
        uk: ["Щоб підкреслити дію, що триває: être в imparfait + en train de + інфінітив.", "J'{a}étais en train de dormir{/a} quand le téléphone a sonné. (Я спав, коли задзвонив телефон.)"],
      },
    },
  ],
  exercises: [],
};
