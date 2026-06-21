import type { ConjLesson } from "../../conjugation-data";

export const A2_CONJ_L04: ConjLesson = {
  slug: "a2-conj-l04",
  code: "R6.1",
  level: "A2",
  title: "Le conditionnel de politesse",
  theory: [
    { type: "heading", text: "Le conditionnel présent", trans: { en: "The present conditional", ar: "الشرطي الحاضر", fa: "وجه شرطی حال", ti: "ህሉው ቅድመ-ኩነታዊ", uk: "Теперішній умовний спосіб" } },
    {
      type: "plain_list",
      items: [
        "Le conditionnel exprime une action {a}hypothétique, souhaitée ou polie{/a}.",
        "Formation : {a}base du futur{/a} + terminaisons de l'imparfait",
        "Terminaisons : {a}-ais / -ais / -ait / -ions / -iez / -aient{/a}",
      ],
      transItems: {
        en: ["The conditional expresses a {a}hypothetical, wished-for or polite{/a} action.", "Formation: {a}future stem{/a} + imperfect endings", "Endings: {a}-ais / -ais / -ait / -ions / -iez / -aient{/a}"],
        ar: ["الشرطي يعبّر عن فعل {a}افتراضي أو مرغوب أو مؤدّب{/a}.", "التكوين: {a}جذر المستقبل{/a} + نهايات الماضي الناقص", "النهايات: {a}-ais / -ais / -ait / -ions / -iez / -aient{/a}"],
        fa: ["وجه شرطی بیانگر عملی {a}فرضی، خواسته‌شده یا مودبانه{/a} است.", "ساختن: {a}ریشه‌ی آینده{/a} + پایانه‌های ماضی استمراری", "پایانه‌ها: {a}-ais / -ais / -ait / -ions / -iez / -aient{/a}"],
        ti: ["ቅድመ-ኩነታዊ {a}ግምታዊ፣ ዝድለ ወይ ኣኽብሮታዊ{/a} ተግባር የመልክት።", "ኣፈጣጥራ፦ {a}መሰረት ናይ መጻኢ{/a} + መወዳእታታት ናይ ሕሉፍ ቀጻሊ", "መወዳእታታት፦ {a}-ais / -ais / -ait / -ions / -iez / -aient{/a}"],
        uk: ["Умовний спосіб виражає {a}гіпотетичну, бажану або ввічливу{/a} дію.", "Утворення: {a}основа майбутнього{/a} + закінчення imparfait", "Закінчення: {a}-ais / -ais / -ait / -ions / -iez / -aient{/a}"],
      },
    },
    {
      type: "table",
      tables: [
        {
          verb: "aimer (conditionnel)",
          accentForms: true,
          rows: [
            { pronoun: "j'", form: "aimerais" },
            { pronoun: "tu", form: "aimerais" },
            { pronoun: "il / elle / on", form: "aimerait" },
            { pronoun: "nous", form: "aimerions" },
            { pronoun: "vous", form: "aimeriez" },
            { pronoun: "ils / elles", form: "aimeraient" },
          ],
        },
      ],
    },
    { type: "heading", text: "Bases irrégulières au conditionnel", sub: true, accent: true, trans: { en: "Irregular stems in the conditional", ar: "جذور شاذة في الشرطي", fa: "ریشه‌های بی‌قاعده در وجه شرطی", ti: "ዘይስሩዓት መሰረታት ኣብ ቅድመ-ኩነታዊ", uk: "Неправильні основи в умовному способі" } },
    {
      type: "grid",
      headers: ["Infinitif", "Base conditionnel", "Exemple"],
      boldFirstCol: true,
      rows: [
        ["être", "{a}ser-{/a}", "je serais"],
        ["avoir", "{a}aur-{/a}", "j'aurais"],
        ["aller", "{a}ir-{/a}", "j'irais"],
        ["faire", "{a}fer-{/a}", "je ferais"],
        ["pouvoir", "{a}pourr-{/a}", "je pourrais"],
        ["vouloir", "{a}voudr-{/a}", "je voudrais"],
        ["venir", "{a}viendr-{/a}", "je viendrais"],
        ["devoir", "{a}devr-{/a}", "je devrais"],
        ["savoir", "{a}saur-{/a}", "je saurais"],
      ],
      transHeaders: {
        en: ["Infinitive", "Conditional stem", "Example"],
        ar: ["المصدر", "جذر الشرطي", "مثال"],
        fa: ["مصدر", "ریشه‌ی شرطی", "مثال"],
        ti: ["መሰረታዊ ግሲ", "መሰረት ቅድመ-ኩነታዊ", "ኣብነት"],
        uk: ["Інфінітив", "Основа умовного способу", "Приклад"],
      },
    },
    { type: "heading", text: "Emplois du conditionnel", sub: true, accent: true, trans: { en: "Uses of the conditional", ar: "استخدامات الشرطي", fa: "کاربردهای وجه شرطی", ti: "ኣጠቓቕማ ቅድመ-ኩነታዊ", uk: "Вживання умовного способу" } },
    {
      type: "grid",
      headers: ["Usage", "Exemple"],
      boldFirstCol: true,
      rows: [
        ["Demande polie", "Je {a}voudrais{/a} un café, s'il vous plaît."],
        ["Conseil", "Tu {a}devrais{/a} consulter un médecin."],
        ["Souhait", "J'{a}aimerais{/a} voyager en Italie."],
        ["Hypothèse (si + imparfait)", "Si j'avais le temps, je {a}ferais{/a} du sport."],
        ["Information non confirmée", "Il {a}serait{/a} malade. (selon la rumeur)"],
      ],
      transHeaders: {
        en: ["Use", "Example"],
        ar: ["الاستخدام", "مثال"],
        fa: ["کاربرد", "مثال"],
        ti: ["ኣጠቓቕማ", "ኣብነት"],
        uk: ["Вживання", "Приклад"],
      },
      transRows: {
        en: [["Polite request", "Je {a}voudrais{/a} un café, s'il vous plaît. (I would like a coffee, please.)"], ["Advice", "Tu {a}devrais{/a} consulter un médecin. (You should see a doctor.)"], ["Wish", "J'{a}aimerais{/a} voyager en Italie. (I would like to travel to Italy.)"], ["Hypothesis (si + imperfect)", "Si j'avais le temps, je {a}ferais{/a} du sport. (If I had time, I would do sport.)"], ["Unconfirmed information", "Il {a}serait{/a} malade. (He is said to be ill.) (according to rumour)"]],
        ar: [["طلب مؤدّب", "Je {a}voudrais{/a} un café, s'il vous plaît. (أريد قهوة من فضلك.)"], ["نصيحة", "Tu {a}devrais{/a} consulter un médecin. (ينبغي أن ترى طبيباً.)"], ["أمنية", "J'{a}aimerais{/a} voyager en Italie. (أودّ السفر إلى إيطاليا.)"], ["افتراض (si + الماضي الناقص)", "Si j'avais le temps, je {a}ferais{/a} du sport. (لو كان لديّ وقت، لمارست الرياضة.)"], ["معلومة غير مؤكدة", "Il {a}serait{/a} malade. (يُقال إنه مريض.) (حسب الإشاعة)"]],
        fa: [["درخواست مودبانه", "Je {a}voudrais{/a} un café, s'il vous plaît. (یک قهوه می‌خواهم، لطفاً.)"], ["نصیحت", "Tu {a}devrais{/a} consulter un médecin. (باید به پزشک مراجعه کنی.)"], ["آرزو", "J'{a}aimerais{/a} voyager en Italie. (دوست دارم به ایتالیا سفر کنم.)"], ["فرض (si + ماضی استمراری)", "Si j'avais le temps, je {a}ferais{/a} du sport. (اگر وقت داشتم، ورزش می‌کردم.)"], ["اطلاعات تأیید‌نشده", "Il {a}serait{/a} malade. (گفته می‌شود او بیمار است.) (بر اساس شایعه)"]],
        ti: [["ኣኽብሮታዊ ሕቶ", "Je {a}voudrais{/a} un café, s'il vous plaît. (በጃኹም ሓደ ቡን እደሊ።)"], ["ምኽሪ", "Tu {a}devrais{/a} consulter un médecin. (ሓኪም ክትርኢ ኣለካ።)"], ["ድሌት", "J'{a}aimerais{/a} voyager en Italie. (ናብ ኢጣልያ ክገይሽ እደሊ።)"], ["ግምት (si + ሕሉፍ ቀጻሊ)", "Si j'avais le temps, je {a}ferais{/a} du sport. (ግዜ እንተዝህልወኒ፣ ስፖርት ምገበርኩ።)"], ["ዘይተረጋገጸ ሓበሬታ", "Il {a}serait{/a} malade. (ሓሚሙ ይብሃል።) (ከም ወረ)"]],
        uk: [["Ввічливе прохання", "Je {a}voudrais{/a} un café, s'il vous plaît. (Я хотів би каву, будь ласка.)"], ["Порада", "Tu {a}devrais{/a} consulter un médecin. (Тобі варто звернутися до лікаря.)"], ["Бажання", "J'{a}aimerais{/a} voyager en Italie. (Я хотів би поїхати до Італії.)"], ["Гіпотеза (si + imparfait)", "Si j'avais le temps, je {a}ferais{/a} du sport. (Якби я мав час, я б займався спортом.)"], ["Непідтверджена інформація", "Il {a}serait{/a} malade. (Кажуть, він хворий.) (за чутками)"]],
      },
    },
    {
      type: "highlight",
      label: "Politesse : impératif vs conditionnel",
      items: [
        "{a}Impératif{/a} (direct) : Donnez-moi un café !",
        "{a}Conditionnel{/a} (poli) : Je voudrais un café, s'il vous plaît.",
        "En contexte formel ou professionnel, privilégiez toujours le conditionnel.",
      ],
      transLabel: { en: "Politeness: imperative vs conditional", ar: "التأدّب: الأمر مقابل الشرطي", fa: "ادب: امری در برابر شرطی", ti: "ምኽባር፦ ትእዛዝ ኣንጻር ቅድመ-ኩነታዊ", uk: "Ввічливість: наказовий проти умовного" },
      transItems: {
        en: ["{a}Imperative{/a} (direct): Donnez-moi un café ! (Give me a coffee!)", "{a}Conditional{/a} (polite): Je voudrais un café, s'il vous plaît. (I would like a coffee, please.)", "In a formal or professional context, always prefer the conditional."],
        ar: ["{a}الأمر{/a} (مباشر): Donnez-moi un café ! (أعطني قهوة!)", "{a}الشرطي{/a} (مؤدّب): Je voudrais un café, s'il vous plaît. (أريد قهوة من فضلك.)", "في السياق الرسمي أو المهني، فضّل دائماً الشرطي."],
        fa: ["{a}امری{/a} (مستقیم): Donnez-moi un café ! (به من یک قهوه بده!)", "{a}شرطی{/a} (مودبانه): Je voudrais un café, s'il vous plaît. (یک قهوه می‌خواهم، لطفاً.)", "در بافت رسمی یا حرفه‌ای، همیشه شرطی را ترجیح دهید."],
        ti: ["{a}ትእዛዝ{/a} (ቀጥታዊ)፦ Donnez-moi un café ! (ሓደ ቡን ሃበኒ!)", "{a}ቅድመ-ኩነታዊ{/a} (ኣኽብሮታዊ)፦ Je voudrais un café, s'il vous plaît. (በጃኹም ሓደ ቡን እደሊ።)", "ኣብ ወግዓዊ ወይ ሞያዊ ኩነት፣ ኩሉ ግዜ ንቅድመ-ኩነታዊ ኣቐድሞ።"],
        uk: ["{a}Наказовий{/a} (прямий): Donnez-moi un café ! (Дайте мені каву!)", "{a}Умовний{/a} (ввічливий): Je voudrais un café, s'il vous plaît. (Я хотів би каву, будь ласка.)", "У формальному чи професійному контексті завжди надавайте перевагу умовному способу."],
      },
    },
  ],
  exercises: [],
};
