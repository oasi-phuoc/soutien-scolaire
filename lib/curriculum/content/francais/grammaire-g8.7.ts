import type { GrammarLesson } from "../../grammar-data";

/** G8.7 — L'imparfait / Le passé composé, enrichi avec G19.25 */
export const A1_GR_IMPARFAIT_PASSE_COMPOSE: GrammarLesson = {
  slug: "a1-gr-imparfait-passe-compose",
  code: "G8.7",
  level: "A1",
  title: "L'imparfait / Le passé composé",
  theory: [
    {
      type: "heading",
      text: "Utilisation",
    },
    {
      type: "text",
      items: [
        "Pour raconter un événement passé, on combine souvent l'imparfait et le passé composé.",
        "Exemple : Nous étions dans le bus, il y avait beaucoup de monde, je lisais. Soudain, le chauffeur a freiné et elle est tombée sur moi !",
      ],
      allBullets: true,
    },
    {
      type: "text",
      label: "L'imparfait",
      items: [
        "Circonstances, décor, description. → Nous étions dans le bus ; j'étais assis ; Chloé était debout.",
        "Habitude passée. → Avant, j'allais au bureau en voiture.",
        "Action en cours : {a}être en train de{/a} à l'imparfait. → J'étais en train de lire (= je lisais) quand elle est tombée.",
      ],
    },
    {
      type: "text",
      label: "Le passé composé",
      items: [
        "Action avec un début et une fin. → Soudain, le chauffeur a freiné et Chloé est tombée sur moi.",
        "Action qui met fin à une habitude. → Un jour, j'ai eu un accident.",
      ],
    },
    {
      type: "heading",
      text: "Expressions de temps",
    },
    {
      type: "text",
      items: [
        "Souvent avec l'imparfait : {a}pendant que{/a}. → Elle est tombée sur moi pendant que je lisais.",
        "Souvent avec le passé composé : {a}quand, tout à coup, soudain, brusquement, à ce moment-là, un jour…{/a} → Soudain, le chauffeur a freiné.",
      ],
      allBullets: true,
    },
    {
      type: "heading",
      text: "Prononciation",
    },
    {
      type: "text",
      text: "Ne pas confondre passé composé et imparfait des verbes en {a}-er{/a} avec {a}je{/a}. → J'ai marché. ≠ Je marchais.",
    },
    { type: "heading", text: "Passé composé ou imparfait ?", trans: { en: "Passé composé or imparfait?", ar: "الماضي المركّب أم الماضي الناقص؟", fa: "گذشته‌ی نقلی یا ماضی استمراری؟", ti: "ሕሉፍ ግዜ ወይ ሕሉፍ ቀጻሊ?", uk: "Passé composé чи imparfait?" } },
    {
      type: "text",
      text: "Au niveau A2, il est important de bien {a}conjuguer{/a} et bien {a}utiliser{/a} le passé composé et l'imparfait pour raconter des événements passés.",
      transText: {
        en: "At A2 level, it is important to {a}conjugate{/a} and {a}use{/a} the passé composé and imparfait correctly to talk about past events.",
        ar: "في المستوى A2، من المهم {a}تصريف{/a} و{a}استخدام{/a} الماضي المركّب والماضي الناقص بشكل صحيح لسرد أحداث الماضي.",
        fa: "در سطح A2، {a}صرف{/a} و {a}استفاده{/a} درست از گذشتهٔ نقلی و ماضی استمراری برای روایت گذشته مهم است.",
        ti: "ኣብ ደረጃ A2፣ ንሕሉፍ ፍጻመታት ንምዝራብ passé composéን imparfaitን ብኹሉ {a}ምስረዝ{/a}ን {a}ጥቕሚ{/a}ን ኣገዳሲ እዩ።",
        uk: "На рівні A2 важливо правильно {a}відмінювати{/a} та {a}вживати{/a} passé composé й imparfait, щоб розповідати про минулі події.",
      },
    },
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
    { type: "heading", text: "Les emplois du passé composé", sub: true, accent: true, trans: { en: "Uses of the passé composé", ar: "استخدامات الماضي المركّب", fa: "کاربردهای گذشتهٔ نقلی", ti: "ጥቕሚታት passé composé", uk: "Вживання passé composé" } },
    {
      type: "text",
      text: "Raconter un {a}événement ponctuel{/a} : Hier, j'{a}ai vu{/a} Lola dans la rue.",
      transText: {
        en: "Tell a {a}one-off event{/a}: Hier, j'{a}ai vu{/a} Lola dans la rue. (Yesterday I saw Lola in the street.)",
        ar: "سرد {a}حدث لحظي{/a}: Hier, j'{a}ai vu{/a} Lola dans la rue.",
        fa: "روایت {a}رویداد لحظه‌ای{/a}: Hier, j'{a}ai vu{/a} Lola dans la rue.",
        ti: "{a}ሓደ ግዜ ዝፍጸም ፍጻመ{/a} ምዝራብ: Hier, j'{a}ai vu{/a} Lola dans la rue.",
        uk: "Розповісти про {a}разову подію{/a}: Hier, j'{a}ai vu{/a} Lola dans la rue.",
      },
      items: [
        "Parler d'une action sur une {a}période de temps définie{/a} : Je suis née en 1985. · J'ai fait du sport pendant 2 heures. · J'ai fait du sport de 14 h à 16 h.",
      ],
      transItems: {
        en: [
          "Talk about an action over a {a}defined period{/a}: Je suis née en 1985. · J'ai fait du sport pendant 2 heures.",
        ],
        ar: [
          "الحديث عن فعل في {a}فترة زمنية محددة{/a}.",
        ],
        fa: [
          "صحبت دربارهٔ عمل در {a}بازهٔ زمانی مشخص{/a}.",
        ],
        ti: [
          "ኣብ {a}ዝተወሰነ ግዜ{/a} ዝተገብረ ተግባር ምዝራብ።",
        ],
        uk: [
          "Говорити про дію протягом {a}визначеного періоду{/a}.",
        ],
      },
    },
    { type: "heading", text: "Les emplois de l'imparfait", sub: true, accent: true, trans: { en: "Uses of the imparfait", ar: "استخدامات الماضي الناقص", fa: "کاربردهای ماضی استمراری", ti: "ጥቕሚታት imparfait", uk: "Вживання imparfait" } },
    {
      type: "text",
      text: "Exprimer une {a}habitude dans le passé{/a} : Tous les matins, je {a}mangeais{/a} un pain au chocolat avec un verre de jus de fruits.",
      transText: {
        en: "Express a {a}past habit{/a}: Tous les matins, je {a}mangeais{/a} un pain au chocolat…",
        ar: "التعبير عن {a}عادة في الماضي{/a}.",
        fa: "بیان {a}عادت گذشته{/a}.",
        ti: "{a}ኣብ ሕሉፍ ልምዲ{/a} ምግላጽ።",
        uk: "Виразити {a}минулу звичку{/a}.",
      },
      items: [
        "Faire une {a}description{/a} : Lydie {a}était{/a} douce et gentille. · Quand j'étais petit, ma chambre {a}paraissait{/a} très grande.",
      ],
      transItems: {
        en: [
          "Give a {a}description{/a}: Lydie {a}était{/a} douce et gentille.",
        ],
        ar: [
          "إعطاء {a}وصف{/a}.",
        ],
        fa: [
          "ارائهٔ {a}توصیف{/a}.",
        ],
        ti: [
          "{a}መግለጺ{/a} ምቅራብ።",
        ],
        uk: [
          "Дати {a}опис{/a}.",
        ],
      },
    },
    {
      type: "text",
      label: "Dans un récit au passé, on utilise souvent les deux temps",
      items: [
        "Quand j'{a}ai vu{/a} Lola (= événement ponctuel), la rue {a}était{/a} déserte (= description).",
      ],
      transLabel: { en: "In a past narrative, both tenses are often used", ar: "في سرد الماضي، يُستعمل الزمانان معاً", fa: "در روایت گذشته، هر دو زمان به‌کار می‌روند", ti: "ኣብ ሕሉፍ ዛንታ መብዛሕትኡ ግዜ ክልቲኡ ግዜ ይጥቀሙ", uk: "У минулому наративі часто вживають обидва часи" },
      transItems: {
        en: ["Quand j'{a}ai vu{/a} Lola (= one-off event), la rue {a}était{/a} déserte (= description). (When I saw Lola, the street was empty.)"],
        ar: ["Quand j'{a}ai vu{/a} Lola (= حدث لحظي)، la rue {a}était{/a} déserte (= وصف)."],
        fa: ["Quand j'{a}ai vu{/a} Lola (= رویداد لحظه‌ای)، la rue {a}était{/a} déserte (= توصیف)."],
        ti: ["Quand j'{a}ai vu{/a} Lola (= ሓደ ግዜ ፍጻመ)፣ la rue {a}était{/a} déserte (= መግለጺ)።"],
        uk: ["Quand j'{a}ai vu{/a} Lola (= разова подія), la rue {a}était{/a} déserte (= опис)."],
      },
      noBulletItems: [0],
    },
    {
      type: "text",
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
      type: "text",
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
