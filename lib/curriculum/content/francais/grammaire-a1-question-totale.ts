import type { GrammarLesson } from "../../grammar-data";

/** G5.3 — Les questions fermées */
export const A1_GR_QUESTION_TOTALE: GrammarLesson = {
  slug: "a1-gr-question-totale",
  code: "G5.3",
  level: "A1",
  title: "Les questions fermées",
  theory: [
    {
      type: "heading",
      text: "Utilisation",
    },
    {
      type: "plain_list",
      items: [
        "La {a}question fermée{/a} (aussi appelée question totale) attend une réponse oui/non (sans autre information).",
        "Réponses possibles : Oui. ; Non. ; Je ne sais pas. ; Si. (pour contredire une question négative) ; Peut-être.",
      ],
      allBullets: true,
    },
    {
      type: "heading",
      text: "Structure et intonation",
    },
    {
      type: "highlight",
      label: "Intonation montante",
      items: [
        "On utilise une phrase affirmative avec une intonation montante.",
        "Il regarde les papiers. → Il regarde les papiers ?",
        "Je conduis bien. → Je conduis bien ?",
      ],
      noBulletItems: [1, 2],
    },
    {
      type: "highlight",
      label: "Est-ce que",
      items: [
        "On ajoute {a}est-ce que{/a} au début d'une phrase affirmative. L'intonation peut être montante ou descendante.",
        "Est-ce que le policier regarde les papiers ?",
        "Est-ce que je conduis bien ?",
      ],
      noBulletItems: [1, 2],
    },
    {
      type: "heading",
      text: "Orthographe",
    },
    {
      type: "plain_list",
      items: [
        "Élision : {a}que{/a} → {a}qu'{/a} devant une voyelle ou un h muet. → Est-ce qu'il arrête la voiture ?",
        "À l'écrit, on ajoute un point d'interrogation {a}?{/a} à la fin.",
      ],
      allBullets: true,
    },
    { type: "heading", text: "Les 3 formes de questions fermées", trans: { en: "The 3 forms of closed (yes/no) questions", ar: "الأشكال الثلاثة للأسئلة المغلقة (نعم/لا)", fa: "سه شکل پرسش‌های بسته (بله/خیر)", ti: "ሰለስተ ቅርጽታት ናይ ዕጹዋት ሕቶታት (እወ/ኣይፋል)", uk: "3 форми закритих питань (так/ні)" } },
    {
      type: "plain_list",
      items: [
        "Une question {a}fermée{/a} a pour réponse {a}oui{/a} ou {a}non{/a}.",
        "Il existe 3 structures, du plus familier au plus formel.",
      ],
      transItems: {
        en: ["A {a}closed{/a} question is answered with oui (yes) / non (no) / si (yes, to a negative question).", "There are 3 structures, from the most informal to the most formal."],
        ar: ["السؤال {a}المغلق{/a} يُجاب عليه بـ oui (نعم) / non (لا) / si (بلى).", "هناك 3 بِنى، من الأكثر عامّية إلى الأكثر رسمية."],
        fa: ["پاسخ پرسش {a}بسته{/a} oui (بله) / non (خیر) / si (چرا، در پاسخ منفی) است.", "سه ساختار وجود دارد، از غیررسمی‌ترین تا رسمی‌ترین."],
        ti: ["ዕጹው ሕቶ መልሱ oui (እወ) / non (ኣይፋል) / si (እወ፣ ንኣሉታዊ ሕቶ) እዩ።", "ሰለስተ ቅርጽታት ኣለዋ፣ ካብ ዝያዳ ህዝባዊ ክሳብ ዝያዳ ወግዓዊ።"],
        uk: ["На {a}закрите{/a} питання відповідають oui (так) / non (ні) / si (так, на заперечне питання).", "Існує 3 структури — від найнеформальнішої до найформальнішої."],
      },
    },
    {
      type: "grid",
      headers: ["Structure", "Registre", "Exemple"],
      boldFirstCol: true,
      rows: [
        ["{a}Intonation montante{/a}", "familier / oral", "Tu parles français {a}↗{/a} ?"],
        ["{a}Est-ce que{/a} + sujet + verbe", "neutre / courant", "Est-ce que tu parles français ?"],
        ["{a}Inversion{/a} verbe-sujet", "formel / écrit", "Parlez-vous français ?"],
      ],
      transHeaders: {
        en: ["Structure", "Register", "Example"],
        ar: ["البنية", "المستوى", "مثال"],
        fa: ["ساختار", "سطح", "مثال"],
        ti: ["ቅርጺ", "ደረጃ", "ኣብነት"],
        uk: ["Структура", "Регістр", "Приклад"],
      },
      transRows: {
        en: [["{a}Rising intonation{/a}", "informal / spoken", "Tu parles français {a}↗{/a} ? (You speak French?)"], ["{a}Est-ce que{/a} + subject + verb", "neutral / common", "Est-ce que tu parles français ? (Do you speak French?)"], ["{a}Inversion{/a} verb-subject", "formal / written", "Parlez-vous français ? (Do you speak French?)"]],
        ar: [["{a}تنغيم صاعد{/a}", "عامّي / محكي", "Tu parles français {a}↗{/a} ? (تتكلم الفرنسية؟)"], ["{a}Est-ce que{/a} + الفاعل + الفعل", "محايد / شائع", "Est-ce que tu parles français ? (هل تتكلم الفرنسية؟)"], ["{a}القلب{/a} فعل-فاعل", "رسمي / كتابي", "Parlez-vous français ? (هل تتكلمون الفرنسية؟)"]],
        fa: [["{a}آهنگ بالارونده{/a}", "غیررسمی / گفتاری", "Tu parles français {a}↗{/a} ? (فرانسوی صحبت می‌کنی؟)"], ["{a}Est-ce que{/a} + فاعل + فعل", "خنثی / رایج", "Est-ce que tu parles français ? (آیا فرانسوی صحبت می‌کنی؟)"], ["{a}وارونگی{/a} فعل-فاعل", "رسمی / نوشتاری", "Parlez-vous français ? (آیا فرانسوی صحبت می‌کنید؟)"]],
        ti: [["{a}ዓሪጉ ዝኸይድ ቃና{/a}", "ህዝባዊ / ኣፋዊ", "Tu parles français {a}↗{/a} ? (ፈረንሳይ ትዛረብ ዶ?)"], ["{a}Est-ce que{/a} + ርእሲ + ግሲ", "ገለልተኛ / ልሙድ", "Est-ce que tu parles français ? (ፈረንሳይ ትዛረብ ዶ?)"], ["{a}ምግልባጥ{/a} ግሲ-ርእሲ", "ወግዓዊ / ጽሑፋዊ", "Parlez-vous français ? (ፈረንሳይ ትዛረቡ ዶ?)"]],
        uk: [["{a}Висхідна інтонація{/a}", "неформальний / усний", "Tu parles français {a}↗{/a} ? (Ти говориш французькою?)"], ["{a}Est-ce que{/a} + підмет + дієслово", "нейтральний / поширений", "Est-ce que tu parles français ? (Ти говориш французькою?)"], ["{a}Інверсія{/a} дієслово-підмет", "формальний / письмовий", "Parlez-vous français ? (Ви говорите французькою?)"]],
      },
    },
    { type: "heading", text: 'Questions avec "Est-ce que"', sub: true, trans: { en: 'Questions with "Est-ce que"', ar: 'الأسئلة بـ "Est-ce que"', fa: 'سوالات با "Est-ce que"', ti: 'ሕቶታት ብ "Est-ce que"', uk: 'Питання з "Est-ce que"' } },
    { type: "plain_list", items: ["C'est la forme la plus courante qui est utilisée."] },
    {
      type: "grid",
      headers: ["Affirmatif", "Question avec est-ce que"],
      rows: [
        ["Tu aimes le café.", "{a}Est-ce que{/a} tu aimes le café ?"],
        ["Il est libre.", "{a}Est-ce qu'{/a}il est libre ?"],
        ["Vous avez le temps.", "{a}Est-ce que{/a} vous avez le temps ?"],
        ["Elles sont arrivées.", "{a}Est-ce qu'{/a}elles sont arrivées ?"],
      ],
      transHeaders: {
        en: ["Affirmative", "Question with est-ce que"],
        ar: ["مثبت", "سؤال بـ est-ce que"],
        fa: ["مثبت", "پرسش با est-ce que"],
        ti: ["ኣረጋጋጺ", "ሕቶ ብ est-ce que"],
        uk: ["Стверджувальний", "Питання з est-ce que"],
      },
      transRows: {
        en: [["Tu aimes le café. (You like coffee.)", "{a}Est-ce que{/a} tu aimes le café ? (Do you like coffee?)"], ["Il est libre. (He is free.)", "{a}Est-ce qu'{/a}il est libre ? (Is he free?)"], ["Vous avez le temps. (You have time.)", "{a}Est-ce que{/a} vous avez le temps ? (Do you have time?)"], ["Elles sont arrivées. (They have arrived.)", "{a}Est-ce qu'{/a}elles sont arrivées ? (Have they arrived?)"]],
        ar: [["Tu aimes le café. (تحب القهوة.)", "{a}Est-ce que{/a} tu aimes le café ? (هل تحب القهوة؟)"], ["Il est libre. (هو متفرغ.)", "{a}Est-ce qu'{/a}il est libre ? (هل هو متفرغ؟)"], ["Vous avez le temps. (لديك وقت.)", "{a}Est-ce que{/a} vous avez le temps ? (هل لديك وقت؟)"], ["Elles sont arrivées. (وصلن.)", "{a}Est-ce qu'{/a}elles sont arrivées ? (هل وصلن؟)"]],
        fa: [["Tu aimes le café. (قهوه دوست داری.)", "{a}Est-ce que{/a} tu aimes le café ? (آیا قهوه دوست داری؟)"], ["Il est libre. (او آزاد است.)", "{a}Est-ce qu'{/a}il est libre ? (آیا او آزاد است؟)"], ["Vous avez le temps. (وقت دارید.)", "{a}Est-ce que{/a} vous avez le temps ? (آیا وقت دارید؟)"], ["Elles sont arrivées. (آن‌ها رسیدند.)", "{a}Est-ce qu'{/a}elles sont arrivées ? (آیا آن‌ها رسیدند؟)"]],
        ti: [["Tu aimes le café. (ቡን ትፈቱ ኢኻ።)", "{a}Est-ce que{/a} tu aimes le café ? (ቡን ትፈቱ ዶ?)"], ["Il est libre. (ንሱ ናጻ እዩ።)", "{a}Est-ce qu'{/a}il est libre ? (ንሱ ናጻ ዶ?)"], ["Vous avez le temps. (ግዜ ኣለኩም።)", "{a}Est-ce que{/a} vous avez le temps ? (ግዜ ኣለኩም ዶ?)"], ["Elles sont arrivées. (ንሰን ኣትየን።)", "{a}Est-ce qu'{/a}elles sont arrivées ? (ንሰን ኣትየን ዶ?)"]],
        uk: [["Tu aimes le café. (Ти любиш каву.)", "{a}Est-ce que{/a} tu aimes le café ? (Ти любиш каву?)"], ["Il est libre. (Він вільний.)", "{a}Est-ce qu'{/a}il est libre ? (Він вільний?)"], ["Vous avez le temps. (У вас є час.)", "{a}Est-ce que{/a} vous avez le temps ? (У вас є час?)"], ["Elles sont arrivées. (Вони прибули.)", "{a}Est-ce qu'{/a}elles sont arrivées ? (Вони прибули?)"]],
      },
    },
    { type: "heading", text: "L'inversion verbe-sujet", sub: true, trans: { en: "Verb-subject inversion", ar: "القلب فعل-فاعل", fa: "وارونگی فعل-فاعل", ti: "ምግልባጥ ግሲ-ርእሲ", uk: "Інверсія дієслово-підмет" } },
    { type: "plain_list", items: ["C'est la forme formelle, utilisée principalement à l'écrit et dans les situations officielles."] },
    {
      type: "grid",
      headers: ["Affirmatif", "Inversion"],
      rows: [
        ["Vous parlez français.", "Parlez-{a}vous{/a} français ?"],
        ["Il comprend.", "Comprend-{a}il{/a} ?"],
        ["Elle va venir.", "Va-{a}t-elle{/a} venir ? (t euphonique)"],
        ["On peut entrer.", "Peut-{a}on{/a} entrer ?"],
      ],
      transHeaders: {
        en: ["Affirmative", "Inversion"],
        ar: ["مثبت", "القلب"],
        fa: ["مثبت", "وارونگی"],
        ti: ["ኣረጋጋጺ", "ምግልባጥ"],
        uk: ["Стверджувальний", "Інверсія"],
      },
      transRows: {
        en: [["Vous parlez français. (You speak French.)", "Parlez-{a}vous{/a} français ? (Do you speak French?)"], ["Il comprend. (He understands.)", "Comprend-{a}il{/a} ? (Does he understand?)"], ["Elle va venir. (She is going to come.)", "Va-{a}t-elle{/a} venir ? (Is she going to come?) (euphonic t)"], ["On peut entrer. (We can come in.)", "Peut-{a}on{/a} entrer ? (May we come in?)"]],
        ar: [["Vous parlez français. (تتكلمون الفرنسية.)", "Parlez-{a}vous{/a} français ? (هل تتكلمون الفرنسية؟)"], ["Il comprend. (يفهم.)", "Comprend-{a}il{/a} ? (هل يفهم؟)"], ["Elle va venir. (سوف تأتي.)", "Va-{a}t-elle{/a} venir ? (هل ستأتي؟) (t للتسهيل)"], ["On peut entrer. (يمكننا الدخول.)", "Peut-{a}on{/a} entrer ? (هل يمكننا الدخول؟)"]],
        fa: [["Vous parlez français. (فرانسوی صحبت می‌کنید.)", "Parlez-{a}vous{/a} français ? (آیا فرانسوی صحبت می‌کنید؟)"], ["Il comprend. (می‌فهمد.)", "Comprend-{a}il{/a} ? (آیا می‌فهمد؟)"], ["Elle va venir. (می‌خواهد بیاید.)", "Va-{a}t-elle{/a} venir ? (آیا می‌آید؟) (t میانجی)"], ["On peut entrer. (می‌توانیم وارد شویم.)", "Peut-{a}on{/a} entrer ? (آیا می‌توانیم وارد شویم؟)"]],
        ti: [["Vous parlez français. (ፈረንሳይ ትዛረቡ ኢኹም።)", "Parlez-{a}vous{/a} français ? (ፈረንሳይ ትዛረቡ ዶ?)"], ["Il comprend. (ይርዳእ።)", "Comprend-{a}il{/a} ? (ይርዳእ ዶ?)"], ["Elle va venir. (ክትመጽእ እያ።)", "Va-{a}t-elle{/a} venir ? (ክትመጽእ ዶ?) (t ንምልስላስ)"], ["On peut entrer. (ክንኣቱ ንኽእል።)", "Peut-{a}on{/a} entrer ? (ክንኣቱ ንኽእል ዶ?)"]],
        uk: [["Vous parlez français. (Ви говорите французькою.)", "Parlez-{a}vous{/a} français ? (Ви говорите французькою?)"], ["Il comprend. (Він розуміє.)", "Comprend-{a}il{/a} ? (Він розуміє?)"], ["Elle va venir. (Вона зараз прийде.)", "Va-{a}t-elle{/a} venir ? (Вона прийде?) (евфонічне t)"], ["On peut entrer. (Ми можемо увійти.)", "Peut-{a}on{/a} entrer ? (Можна увійти?)"]],
      },
    },
    { type: "heading", text: "Le -t- euphonique", sub: true, trans: { en: "The euphonic -t-", ar: "الـ -t- للتسهيل", fa: "حرف میانجی -t-", ti: "ናይ ምልስላስ -t-", uk: "Евфонічне -t-" } },
    {
      type: "plain_list",
      items: ["Quand le verbe se termine par une {a}voyelle{/a} + il / elle / on, on insère {a}-t-{/a}."],
      transItems: {
        en: ["When the verb ends in a {a}vowel{/a} + il / elle / on, we insert {a}-t-{/a}."],
        ar: ["عندما ينتهي الفعل بـ {a}حرف علة{/a} + il / elle / on، نُدخل {a}-t-{/a}."],
        fa: ["وقتی فعل به {a}حرف صدادار{/a} + il / elle / on ختم می‌شود، {a}-t-{/a} اضافه می‌کنیم."],
        ti: ["እቲ ግሲ ብ{a}ድምጺ ፊደል{/a} + il / elle / on ምስ ዝውዳእ፣ {a}-t-{/a} ነእቱ።"],
        uk: ["Коли дієслово закінчується на {a}голосну{/a} + il / elle / on, вставляють {a}-t-{/a}."],
      },
    },
    {
      type: "highlight",
      label: "",
      items: [
        "va → va-{a}t{/a}-il / va-{a}t{/a}-elle / va-{a}t{/a}-on",
        "a → a-{a}t{/a}-il (avoir) / aime-{a}t{/a}-il (aimer)",
      ],
      noBulletItems: [0, 1],
    },
    {
      type: "plain_list",
      items: ["Cette règle s'applique uniquement à l'inversion."],
      transItems: {
        en: ["This rule applies only to inversion."],
        ar: ["تنطبق هذه القاعدة على القلب فقط."],
        fa: ["این قاعده فقط برای وارونگی به کار می‌رود."],
        ti: ["እዚ ሕጊ ኣብ ምግልባጥ ጥራይ እዩ ዝውዕል።"],
        uk: ["Це правило застосовується лише до інверсії."],
      },
    },
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
  // Former a2-gr-l07 and a2-gr-l09 exercise arrays are empty; generatedGrammarExercises supplies their combined pools.
  exercises: [],
};
