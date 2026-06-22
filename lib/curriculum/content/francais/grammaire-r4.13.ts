import type { GrammarLesson } from "../../grammar-data";

export const A2_GR_L09: GrammarLesson = {
  slug: "a2-gr-l09",
  code: "RX.13",
  level: "A2",
  title: "Répondre aux questions fermées",
  theory: [
    { type: "heading", text: "Oui, Non, Si", trans: { en: "Oui (yes), Non (no), Si (yes, to a negative)", ar: "Oui (نعم)، Non (لا)، Si (بلى)", fa: "Oui (بله)، Non (خیر)، Si (چرا)", ti: "Oui (እወ)፣ Non (ኣይፋል)፣ Si (እወ ንኣሉታ)", uk: "Oui (так), Non (ні), Si (так, на заперечне)" } },
    {
      type: "grid",
      headers: ["Réponse", "Quand l'utiliser", "Exemple"],
      boldFirstCol: true,
      rows: [
        ["{a}Oui{/a}", "Réponse {a}affirmative{/a}", "Tu aimes le café ?\n— {a}Oui{/a}, j'aime le café."],
        ["{a}Non{/a}", "Réponse {a}négative{/a}", "Tu aimes le café ?\n— {a}Non{/a}, je {a}n'{/a}aime {a}pas{/a} le café."],
        ["{a}Si{/a}", "Réponse {a}affirmative{/a} à une question {a}négative{/a}", "Tu {a}ne{/a} parles {a}pas{/a} français ?\n— {a}Si{/a}, je parle français !"],
      ],
      transHeaders: {
        en: ["Answer", "When to use it", "Example"],
        ar: ["الإجابة", "متى نستخدمها", "مثال"],
        fa: ["پاسخ", "زمان استفاده", "مثال"],
        ti: ["መልሲ", "መዓስ ከም ዝጥቀመሉ", "ኣብነት"],
        uk: ["Відповідь", "Коли вживати", "Приклад"],
      },
      transRows: {
        en: [["{a}Oui{/a}", "{a}Affirmative{/a} answer", "Tu aimes le café ?\n— {a}Oui{/a}, j'aime le café. (Do you like coffee? — Yes, I like coffee.)"], ["{a}Non{/a}", "{a}Negative{/a} answer", "Tu aimes le café ?\n— {a}Non{/a}, je {a}n'{/a}aime {a}pas{/a} le café. (Do you like coffee? — No, I don't.)"], ["{a}Si{/a}", "{a}Affirmative{/a} answer to a {a}negative{/a} question", "Tu {a}ne{/a} parles {a}pas{/a} français ?\n— {a}Si{/a}, je parle français ! (Don't you speak French? — Yes, I do!)"]],
        ar: [["{a}Oui{/a}", "إجابة {a}مثبتة{/a}", "Tu aimes le café ?\n— {a}Oui{/a}, j'aime le café. (هل تحب القهوة؟ — نعم، أحب القهوة.)"], ["{a}Non{/a}", "إجابة {a}منفية{/a}", "Tu aimes le café ?\n— {a}Non{/a}, je {a}n'{/a}aime {a}pas{/a} le café. (هل تحب القهوة؟ — لا.)"], ["{a}Si{/a}", "إجابة {a}مثبتة{/a} على سؤال {a}منفي{/a}", "Tu {a}ne{/a} parles {a}pas{/a} français ?\n— {a}Si{/a}, je parle français ! (ألا تتكلم الفرنسية؟ — بلى، أتكلمها!)"]],
        fa: [["{a}Oui{/a}", "پاسخ {a}مثبت{/a}", "Tu aimes le café ?\n— {a}Oui{/a}, j'aime le café. (قهوه دوست داری؟ — بله، قهوه دوست دارم.)"], ["{a}Non{/a}", "پاسخ {a}منفی{/a}", "Tu aimes le café ?\n— {a}Non{/a}, je {a}n'{/a}aime {a}pas{/a} le café. (قهوه دوست داری؟ — خیر.)"], ["{a}Si{/a}", "پاسخ {a}مثبت{/a} به پرسش {a}منفی{/a}", "Tu {a}ne{/a} parles {a}pas{/a} français ?\n— {a}Si{/a}, je parle français ! (فرانسوی صحبت نمی‌کنی؟ — چرا، می‌کنم!)"]],
        ti: [["{a}Oui{/a}", "ኣረጋጋጺ {a}መልሲ{/a}", "Tu aimes le café ?\n— {a}Oui{/a}, j'aime le café. (ቡን ትፈቱ ዶ? — እወ፣ ቡን እፈቱ።)"], ["{a}Non{/a}", "{a}ኣሉታዊ{/a} መልሲ", "Tu aimes le café ?\n— {a}Non{/a}, je {a}n'{/a}aime {a}pas{/a} le café. (ቡን ትፈቱ ዶ? — ኣይፋል።)"], ["{a}Si{/a}", "ኣረጋጋጺ {a}መልሲ{/a} ናብ {a}ኣሉታዊ{/a} ሕቶ", "Tu {a}ne{/a} parles {a}pas{/a} français ?\n— {a}Si{/a}, je parle français ! (ፈረንሳይ ኣይትዛረብን ዲኻ? — እወ፣ ፈረንሳይ እዛረብ!)"]],
        uk: [["{a}Oui{/a}", "{a}Стверджувальна{/a} відповідь", "Tu aimes le café ?\n— {a}Oui{/a}, j'aime le café. (Ти любиш каву? — Так, люблю.)"], ["{a}Non{/a}", "{a}Заперечна{/a} відповідь", "Tu aimes le café ?\n— {a}Non{/a}, je {a}n'{/a}aime {a}pas{/a} le café. (Ти любиш каву? — Ні.)"], ["{a}Si{/a}", "{a}Стверджувальна{/a} відповідь на {a}заперечне{/a} питання", "Tu {a}ne{/a} parles {a}pas{/a} français ?\n— {a}Si{/a}, je parle français ! (Хіба ти не говориш французькою? — Так, говорю!)"]],
      },
    },
    {
      type: "highlight",
      label: "SI : le mot clé",
      items: [
        "{a}Si{/a} s'utilise uniquement pour contredire une question négative.",
        "Tu ne viens pas ? — {a}Si{/a}, je viens ! (pas Oui !)",
        "Il ne travaille pas ? — {a}Si{/a}, il travaille !",
      ],
      noBulletItems: [0],
      transLabel: { en: "SI: the key word", ar: "SI: الكلمة المفتاحية", fa: "SI: کلمه‌ی کلیدی", ti: "SI: እታ ቁልፊ ቃል", uk: "SI: ключове слово" },
      transItems: {
        en: ["{a}Si{/a} is used only to contradict a negative question.", "Tu ne viens pas ? — {a}Si{/a}, je viens ! (Aren't you coming? — Yes, I am!) (not Oui!)", "Il ne travaille pas ? — {a}Si{/a}, il travaille ! (Doesn't he work? — Yes, he does!)"],
        ar: ["{a}Si{/a} يُستخدم فقط للرد على سؤال منفي.", "Tu ne viens pas ? — {a}Si{/a}, je viens ! (ألا تأتي؟ — بلى، آتي!) (ليس Oui!)", "Il ne travaille pas ? — {a}Si{/a}, il travaille ! (ألا يعمل؟ — بلى، يعمل!)"],
        fa: ["{a}Si{/a} فقط برای رد کردن یک پرسش منفی به کار می‌رود.", "Tu ne viens pas ? — {a}Si{/a}, je viens ! (نمی‌آیی؟ — چرا، می‌آیم!) (نه Oui!)", "Il ne travaille pas ? — {a}Si{/a}, il travaille ! (کار نمی‌کند؟ — چرا، می‌کند!)"],
        ti: ["{a}Si{/a} ንኣሉታዊ ሕቶ ንምቅዋም ጥራይ ይጥቀም።", "Tu ne viens pas ? — {a}Si{/a}, je viens ! (ኣይትመጽእን ዲኻ? — እወ፣ እመጽእ!) (ኣይኮነን Oui!)", "Il ne travaille pas ? — {a}Si{/a}, il travaille ! (ኣይሰርሕን ድዩ? — እወ፣ ይሰርሕ!)"],
        uk: ["{a}Si{/a} вживається лише для заперечення заперечного питання.", "Tu ne viens pas ? — {a}Si{/a}, je viens ! (Хіба ти не йдеш? — Так, іду!) (не Oui!)", "Il ne travaille pas ? — {a}Si{/a}, il travaille ! (Хіба він не працює? — Так, працює!)"],
      },
    },
    { type: "heading", text: "Les réponses en écho avec « moi »", sub: true, trans: { en: "Echo responses with \"moi\"", ar: "الردود الصدى مع «moi»", fa: "پاسخ‌های بازتابی با «moi»", ti: "ናይ ምስምማዕ ምላሽ ብ«moi»", uk: "Ехо-відповіді з «moi»" } },
    {
      type: "plain_list",
      items: ["On utilise {a}Moi aussi{/a}, {a}Moi non plus{/a}, {a}Moi si{/a} ou {a}Moi pas{/a} pour dire rapidement si on est pareil ou différent."],
      transItems: {
        en: ["We use {a}Moi aussi{/a}, {a}Moi non plus{/a}, {a}Moi si{/a} or {a}Moi pas{/a} to quickly say whether we feel the same or different."],
        ar: ["نستخدم {a}Moi aussi{/a} و{a}Moi non plus{/a} و{a}Moi si{/a} أو {a}Moi pas{/a} لنقول بسرعة إن كنا متفقين أم لا."],
        fa: ["از {a}Moi aussi{/a}، {a}Moi non plus{/a}، {a}Moi si{/a} یا {a}Moi pas{/a} استفاده می‌کنیم تا سریع بگوییم آیا همانند هستیم یا متفاوت."],
        ti: ["{a}Moi aussi{/a}፣ {a}Moi non plus{/a}፣ {a}Moi si{/a} ወይ {a}Moi pas{/a} ብቕልጡፍ ምስ ሰምዕናዮ ወይ ዘይሰምዕናዮ ንምምሳል ንጥቀም።"],
        uk: ["{a}Moi aussi{/a}, {a}Moi non plus{/a}, {a}Moi si{/a} або {a}Moi pas{/a} використовуємо, щоб швидко сказати, чи відчуваємо те саме, чи ні."],
      },
    },
    {
      type: "grid",
      headers: ["Situation", "Réaction accord", "Réaction désaccord"],
      rows: [
        ["Affirmation positive", "Moi {a}aussi{/a} !", "Moi {a}pas{/a}. / {a}Pas{/a} moi."],
        ["Affirmation négative", "Moi {a}non plus{/a} !", "Moi {a}si{/a} !"],
      ],
      transHeaders: {
        en: ["Situation", "Agreeing reaction", "Disagreeing reaction"],
        ar: ["الموقف", "رد الموافقة", "رد الاعتراض"],
        fa: ["موقعیت", "واکنش موافق", "واکنش مخالف"],
        ti: ["ኩነታት", "ናይ ስምምዕ ግብረ-መልሲ", "ናይ ዘይምስምማዕ ግብረ-መልሲ"],
        uk: ["Ситуація", "Реакція згоди", "Реакція незгоди"],
      },
      transRows: {
        en: [["Positive statement", "Moi {a}aussi{/a} ! (Me too!)", "Moi {a}pas{/a}. / {a}Pas{/a} moi. (Not me.)"], ["Negative statement", "Moi {a}non plus{/a} ! (Me neither!)", "Moi {a}si{/a} ! (I do!)"]],
        ar: [["تأكيد إيجابي", "Moi {a}aussi{/a} ! (أنا أيضاً!)", "Moi {a}pas{/a}. / {a}Pas{/a} moi. (ليس أنا.)"], ["تأكيد سلبي", "Moi {a}non plus{/a} ! (ولا أنا!)", "Moi {a}si{/a} ! (بلى أنا!)"]],
        fa: [["جمله‌ی مثبت", "Moi {a}aussi{/a} ! (من هم!)", "Moi {a}pas{/a}. / {a}Pas{/a} moi. (من نه.)"], ["جمله‌ی منفی", "Moi {a}non plus{/a} ! (من هم نه!)", "Moi {a}si{/a} ! (چرا، من!)"]],
        ti: [["ኣወንታዊ ኣረጋግጻ", "Moi {a}aussi{/a} ! (ኣነ እውን!)", "Moi {a}pas{/a}. / {a}Pas{/a} moi. (ኣነ ኣይኮንኩን።)"], ["ኣሉታዊ ኣረጋግጻ", "Moi {a}non plus{/a} ! (ኣነ እውን ኣይኮንኩን!)", "Moi {a}si{/a} ! (እወ ኣነ!)"]],
        uk: [["Стверджувальне твердження", "Moi {a}aussi{/a} ! (Я теж!)", "Moi {a}pas{/a}. / {a}Pas{/a} moi. (Я ні.)"], ["Заперечне твердження", "Moi {a}non plus{/a} ! (Я теж ні!)", "Moi {a}si{/a} ! (А я так!)"]],
      },
    },
    {
      type: "grid",
      headers: ["Ce qu'il dit", "Tu es d'accord", "Tu n'es pas d'accord"],
      rows: [
        ["J'aime le café.", "Moi {a}aussi{/a} !", "Moi {a}pas{/a}."],
        ["Je ne fume pas.", "Moi {a}non plus{/a} !", "Moi {a}si{/a} !"],
      ],
      transHeaders: {
        en: ["What he says", "You agree", "You disagree"],
        ar: ["ما يقوله", "أنت توافق", "أنت تعترض"],
        fa: ["آنچه می‌گوید", "موافقی", "مخالفی"],
        ti: ["ዝብሎ", "ትሰማማዕ", "ኣይትሰማማዕን"],
        uk: ["Що він каже", "Ти згоден", "Ти не згоден"],
      },
      transRows: {
        en: [["J'aime le café. (I like coffee.)", "Moi {a}aussi{/a} ! (Me too!)", "Moi {a}pas{/a}. (Not me.)"], ["Je ne fume pas. (I don't smoke.)", "Moi {a}non plus{/a} ! (Me neither!)", "Moi {a}si{/a} ! (I do!)"]],
        ar: [["J'aime le café. (أحب القهوة.)", "Moi {a}aussi{/a} ! (أنا أيضاً!)", "Moi {a}pas{/a}. (ليس أنا.)"], ["Je ne fume pas. (لا أدخّن.)", "Moi {a}non plus{/a} ! (ولا أنا!)", "Moi {a}si{/a} ! (بلى أنا!)"]],
        fa: [["J'aime le café. (قهوه دوست دارم.)", "Moi {a}aussi{/a} ! (من هم!)", "Moi {a}pas{/a}. (من نه.)"], ["Je ne fume pas. (سیگار نمی‌کشم.)", "Moi {a}non plus{/a} ! (من هم نه!)", "Moi {a}si{/a} ! (چرا، من!)"]],
        ti: [["J'aime le café. (ቡን እፈቱ።)", "Moi {a}aussi{/a} ! (ኣነ እውን!)", "Moi {a}pas{/a}. (ኣነ ኣይኮንኩን።)"], ["Je ne fume pas. (ኣይትክኽን።)", "Moi {a}non plus{/a} ! (ኣነ እውን ኣይኮንኩን!)", "Moi {a}si{/a} ! (እወ ኣነ!)"]],
        uk: [["J'aime le café. (Я люблю каву.)", "Moi {a}aussi{/a} ! (Я теж!)", "Moi {a}pas{/a}. (Я ні.)"], ["Je ne fume pas. (Я не палю.)", "Moi {a}non plus{/a} ! (Я теж ні!)", "Moi {a}si{/a} ! (А я палю!)"]],
      },
    },
  ],
  exercises: [],
};
