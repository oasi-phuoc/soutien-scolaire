import type { ConjLesson } from "../../conjugation-data";

export const A2_CONJ_L06: ConjLesson = {
  slug: "a2-conj-l06",
  code: "RX.24",
  level: "A2",
  title: "Le passé composé — avoir et être",
  theory: [
    { type: "heading", text: "Révision complète du passé composé", trans: { en: "Full review of the passé composé", ar: "مراجعة شاملة للماضي المركّب", fa: "مرور کامل گذشتهٔ نقلی", ti: "ምሉእ ምክላስ ናይ ሕሉፍ ግዜ", uk: "Повний огляд passé composé" } },
    {
      type: "plain_list",
      items: [
        "Le passé composé = {a}auxiliaire{/a} (avoir ou être au présent) + {a}participe passé{/a}.",
        "Choix de l'auxiliaire : la règle principale s'apprend par catégorie.",
      ],
      transItems: {
        en: ["The passé composé = {a}auxiliary{/a} (avoir or être in the present) + {a}past participle{/a}.", "Choosing the auxiliary: the main rule is learned by category."],
        ar: ["الماضي المركّب = {a}فعل مساعد{/a} (avoir أو être في المضارع) + {a}اسم المفعول{/a}.", "اختيار الفعل المساعد: القاعدة الأساسية تُتعلّم حسب الفئة."],
        fa: ["گذشتهٔ نقلی = {a}فعل کمکی{/a} (avoir یا être در زمان حال) + {a}صفت مفعولی{/a}.", "انتخاب فعل کمکی: قاعدهٔ اصلی بر اساس دسته‌بندی آموخته می‌شود."],
        ti: ["ሕሉፍ ግዜ = {a}ሓጋዚ{/a} (avoir ወይ être ኣብ ህሉው) + {a}ናይ ሕሉፍ ተሳታፋይ{/a}።", "ምርጫ ሓጋዚ: እቲ ቀንዲ ሕጊ ብምድብ ይምሃር።"],
        uk: ["Passé composé = {a}допоміжне дієслово{/a} (avoir чи être у теперішньому часі) + {a}дієприкметник минулого часу{/a}.", "Вибір допоміжного дієслова: основне правило вивчають за категоріями."],
      },
    },
    {
      type: "grid",
      headers: ["Catégorie", "Auxiliaire", "Exemples"],
      boldFirstCol: true,
      rows: [
        ["La grande majorité des verbes", "{a}AVOIR{/a}", "manger, finir, prendre, voir…"],
        ["17 verbes de mouvement / état", "{a}ÊTRE{/a}", "aller, venir, partir, rester…"],
        ["Tous les verbes pronominaux", "{a}ÊTRE{/a}", "se lever, se voir, se parler…"],
      ],
      transHeaders: {
        en: ["Category", "Auxiliary", "Examples"],
        ar: ["الفئة", "الفعل المساعد", "أمثلة"],
        fa: ["دسته", "فعل کمکی", "مثال‌ها"],
        ti: ["ምድብ", "ሓጋዚ", "ኣብነታት"],
        uk: ["Категорія", "Допоміжне", "Приклади"],
      },
      transRows: {
        en: [["The vast majority of verbs", "{a}AVOIR{/a}", "manger, finir, prendre, voir…"], ["17 verbs of motion / state", "{a}ÊTRE{/a}", "aller, venir, partir, rester…"], ["All reflexive verbs", "{a}ÊTRE{/a}", "se lever, se voir, se parler…"]],
        ar: [["الغالبية العظمى من الأفعال", "{a}AVOIR{/a}", "manger, finir, prendre, voir…"], ["17 فعل حركة / حالة", "{a}ÊTRE{/a}", "aller, venir, partir, rester…"], ["جميع الأفعال الانعكاسية", "{a}ÊTRE{/a}", "se lever, se voir, se parler…"]],
        fa: [["اکثریت قریب به اتفاق افعال", "{a}AVOIR{/a}", "manger, finir, prendre, voir…"], ["۱۷ فعل حرکت / حالت", "{a}ÊTRE{/a}", "aller, venir, partir, rester…"], ["همهٔ افعال انعکاسی", "{a}ÊTRE{/a}", "se lever, se voir, se parler…"]],
        ti: [["ዓብላሊ ቁጽሪ ግስታት", "{a}AVOIR{/a}", "manger, finir, prendre, voir…"], ["17 ግስታት ምንቅስቓስ / ኩነታት", "{a}ÊTRE{/a}", "aller, venir, partir, rester…"], ["ኩሎም ናይ ገዛእ ርእሲ ግስታት", "{a}ÊTRE{/a}", "se lever, se voir, se parler…"]],
        uk: [["Переважна більшість дієслів", "{a}AVOIR{/a}", "manger, finir, prendre, voir…"], ["17 дієслів руху / стану", "{a}ÊTRE{/a}", "aller, venir, partir, rester…"], ["Усі зворотні дієслова", "{a}ÊTRE{/a}", "se lever, se voir, se parler…"]],
      },
    },
    { type: "heading", text: "Accord du participe passé", sub: true, accent: true, trans: { en: "Agreement of the past participle", ar: "مطابقة اسم المفعول", fa: "مطابقت صفت مفعولی", ti: "ምስምማዕ ናይ ሕሉፍ ተሳታፋይ", uk: "Узгодження дієприкметника минулого часу" } },
    {
      type: "grid",
      headers: ["Auxiliaire", "Accord", "Exemple"],
      boldFirstCol: true,
      rows: [
        ["{a}avoir{/a}", "Pas d'accord avec le sujet", "Elle a mangé. / Ils ont fini."],
        ["{a}avoir{/a} + COD avant", "Accord avec le COD", "La lettre qu'il a écrit{a}e{/a}."],
        ["{a}être{/a}", "Accord avec le sujet", "Elle est arriv{a}ée{/a}. / Ils sont parti{a}s{/a}."],
      ],
      transHeaders: {
        en: ["Auxiliary", "Agreement", "Example"],
        ar: ["الفعل المساعد", "المطابقة", "مثال"],
        fa: ["فعل کمکی", "مطابقت", "مثال"],
        ti: ["ሓጋዚ", "ምስምማዕ", "ኣብነት"],
        uk: ["Допоміжне", "Узгодження", "Приклад"],
      },
      transRows: {
        en: [["{a}avoir{/a}", "No agreement with the subject", "Elle a mangé. / Ils ont fini."], ["{a}avoir{/a} + COD before", "Agreement with the COD", "La lettre qu'il a écrit{a}e{/a}."], ["{a}être{/a}", "Agreement with the subject", "Elle est arriv{a}ée{/a}. / Ils sont parti{a}s{/a}."]],
        ar: [["{a}avoir{/a}", "لا مطابقة مع الفاعل", "Elle a mangé. / Ils ont fini."], ["{a}avoir{/a} + COD قبله", "مطابقة مع المفعول به", "La lettre qu'il a écrit{a}e{/a}."], ["{a}être{/a}", "مطابقة مع الفاعل", "Elle est arriv{a}ée{/a}. / Ils sont parti{a}s{/a}."]],
        fa: [["{a}avoir{/a}", "بدون مطابقت با فاعل", "Elle a mangé. / Ils ont fini."], ["{a}avoir{/a} + COD پیش از فعل", "مطابقت با مفعول مستقیم", "La lettre qu'il a écrit{a}e{/a}."], ["{a}être{/a}", "مطابقت با فاعل", "Elle est arriv{a}ée{/a}. / Ils sont parti{a}s{/a}."]],
        ti: [["{a}avoir{/a}", "ምስ ርእሲ ምስምማዕ የብሉን", "Elle a mangé. / Ils ont fini."], ["{a}avoir{/a} + COD ቅድሚኡ", "ምስ COD ይሰማማዕ", "La lettre qu'il a écrit{a}e{/a}."], ["{a}être{/a}", "ምስ ርእሲ ይሰማማዕ", "Elle est arriv{a}ée{/a}. / Ils sont parti{a}s{/a}."]],
        uk: [["{a}avoir{/a}", "Без узгодження з підметом", "Elle a mangé. / Ils ont fini."], ["{a}avoir{/a} + COD перед", "Узгодження з COD", "La lettre qu'il a écrit{a}e{/a}."], ["{a}être{/a}", "Узгодження з підметом", "Elle est arriv{a}ée{/a}. / Ils sont parti{a}s{/a}."]],
      },
    },
    { type: "heading", text: "Verbes à double auxiliaire", sub: true, accent: true, trans: { en: "Verbs with two possible auxiliaries", ar: "أفعال بفعلين مساعدين", fa: "افعال با دو فعل کمکی", ti: "ክልተ ሓጋዚ ዘለዎም ግስታት", uk: "Дієслова з двома допоміжними" } },
    {
      type: "plain_list",
      items: [
        "Ces verbes utilisent {a}avoir{/a} s'ils ont un COD, {a}être{/a} s'ils n'en ont pas :",
        "monter, descendre, sortir, rentrer, entrer, passer, retourner",
      ],
      transItems: {
        en: ["These verbs use {a}avoir{/a} if they have a COD, {a}être{/a} if they don't:", "monter, descendre, sortir, rentrer, entrer, passer, retourner"],
        ar: ["تستعمل هذه الأفعال {a}avoir{/a} إذا كان لها مفعول به مباشر، و{a}être{/a} إذا لم يكن:", "monter, descendre, sortir, rentrer, entrer, passer, retourner"],
        fa: ["این افعال اگر مفعول مستقیم داشته باشند از {a}avoir{/a} و اگر نداشته باشند از {a}être{/a} استفاده می‌کنند:", "monter, descendre, sortir, rentrer, entrer, passer, retourner"],
        ti: ["እዞም ግስታት COD እንተለዎም {a}avoir{/a}፣ እንተዘይብሎም {a}être{/a} ይጥቀሙ:", "monter, descendre, sortir, rentrer, entrer, passer, retourner"],
        uk: ["Ці дієслова вживають {a}avoir{/a}, якщо мають COD, і {a}être{/a}, якщо не мають:", "monter, descendre, sortir, rentrer, entrer, passer, retourner"],
      },
    },
    {
      type: "grid",
      headers: ["Avec COD → avoir", "Sans COD → être"],
      rows: [
        ["J'ai {a}sorti{/a} la poubelle.", "Je suis {a}sorti{/a}."],
        ["Elle a {a}monté{/a} les valises.", "Elle est {a}montée{/a}."],
        ["Il a {a}passé{/a} un examen.", "Il est {a}passé{/a} devant la fenêtre."],
      ],
      transHeaders: {
        en: ["With COD → avoir", "Without COD → être"],
        ar: ["مع COD → avoir", "بدون COD → être"],
        fa: ["با COD → avoir", "بدون COD → être"],
        ti: ["ምስ COD → avoir", "ብዘይ COD → être"],
        uk: ["Із COD → avoir", "Без COD → être"],
      },
      transRows: {
        en: [["J'ai {a}sorti{/a} la poubelle. (I took out the bin.)", "Je suis {a}sorti{/a}. (I went out.)"], ["Elle a {a}monté{/a} les valises. (She brought the suitcases up.)", "Elle est {a}montée{/a}. (She went up.)"], ["Il a {a}passé{/a} un examen. (He took an exam.)", "Il est {a}passé{/a} devant la fenêtre. (He went past the window.)"]],
        ar: [["J'ai {a}sorti{/a} la poubelle. (أخرجت سلة المهملات.)", "Je suis {a}sorti{/a}. (خرجت.)"], ["Elle a {a}monté{/a} les valises. (صعدت بالحقائب.)", "Elle est {a}montée{/a}. (صعدت.)"], ["Il a {a}passé{/a} un examen. (اجتاز امتحاناً.)", "Il est {a}passé{/a} devant la fenêtre. (مرّ أمام النافذة.)"]],
        fa: [["J'ai {a}sorti{/a} la poubelle. (سطل زباله را بیرون بردم.)", "Je suis {a}sorti{/a}. (بیرون رفتم.)"], ["Elle a {a}monté{/a} les valises. (چمدان‌ها را بالا برد.)", "Elle est {a}montée{/a}. (بالا رفت.)"], ["Il a {a}passé{/a} un examen. (امتحانی داد.)", "Il est {a}passé{/a} devant la fenêtre. (از جلوی پنجره گذشت.)"]],
        ti: [["J'ai {a}sorti{/a} la poubelle. (ነቲ ጓሓፍ ኣውጺአዮ።)", "Je suis {a}sorti{/a}. (ወጺአ።)"], ["Elle a {a}monté{/a} les valises. (ነተን ሳንጣታት ኣደየበተን።)", "Elle est {a}montée{/a}. (ደየበት።)"], ["Il a {a}passé{/a} un examen. (ፈተና ወሲዱ።)", "Il est {a}passé{/a} devant la fenêtre. (ኣብ ቅድሚ መስኮት ሓሊፉ።)"]],
        uk: [["J'ai {a}sorti{/a} la poubelle. (Я виніс смітник.)", "Je suis {a}sorti{/a}. (Я вийшов.)"], ["Elle a {a}monté{/a} les valises. (Вона занесла валізи нагору.)", "Elle est {a}montée{/a}. (Вона піднялася.)"], ["Il a {a}passé{/a} un examen. (Він склав іспит.)", "Il est {a}passé{/a} devant la fenêtre. (Він пройшов повз вікно.)"]],
      },
    },
    { type: "heading", text: "Pronominaux au passé composé", sub: true, accent: true, trans: { en: "Reflexive verbs in the passé composé", ar: "الأفعال الانعكاسية في الماضي المركّب", fa: "افعال انعکاسی در گذشتهٔ نقلی", ti: "ናይ ገዛእ ርእሲ ግስታት ኣብ ሕሉፍ ግዜ", uk: "Зворотні дієслова в passé composé" } },
    {
      type: "grid",
      headers: ["Affirmatif", "Négatif"],
      rows: [
        ["Elle {a}s'est levée{/a}.", "Elle {a}ne s'est pas levée{/a}."],
        ["Ils {a}se sont vus{/a}.", "Ils {a}ne se sont pas vus{/a}."],
        ["Nous {a}nous sommes parlé{/a}.", "(COI → pas d'accord)"],
      ],
      transHeaders: {
        en: ["Affirmative", "Negative"],
        ar: ["مثبت", "منفي"],
        fa: ["مثبت", "منفی"],
        ti: ["ኣረጋጋጺ", "ኣሉታዊ"],
        uk: ["Стверджувальний", "Заперечний"],
      },
      transRows: {
        en: [["Elle {a}s'est levée{/a}. (She got up.)", "Elle {a}ne s'est pas levée{/a}. (She did not get up.)"], ["Ils {a}se sont vus{/a}. (They saw each other.)", "Ils {a}ne se sont pas vus{/a}. (They did not see each other.)"], ["Nous {a}nous sommes parlé{/a}. (We spoke to each other.)", "(COI → no agreement)"]],
        ar: [["Elle {a}s'est levée{/a}. (نهضت.)", "Elle {a}ne s'est pas levée{/a}. (لم تنهض.)"], ["Ils {a}se sont vus{/a}. (رأى بعضهم بعضاً.)", "Ils {a}ne se sont pas vus{/a}. (لم يرَ بعضهم بعضاً.)"], ["Nous {a}nous sommes parlé{/a}. (تحدّثنا معاً.)", "(COI → لا مطابقة)"]],
        fa: [["Elle {a}s'est levée{/a}. (او بلند شد.)", "Elle {a}ne s'est pas levée{/a}. (او بلند نشد.)"], ["Ils {a}se sont vus{/a}. (آن‌ها یکدیگر را دیدند.)", "Ils {a}ne se sont pas vus{/a}. (آن‌ها یکدیگر را ندیدند.)"], ["Nous {a}nous sommes parlé{/a}. (با هم صحبت کردیم.)", "(COI → بدون مطابقت)"]],
        ti: [["Elle {a}s'est levée{/a}. (ንሳ ተንሲኣ።)", "Elle {a}ne s'est pas levée{/a}. (ንሳ ኣይተንስአትን።)"], ["Ils {a}se sont vus{/a}. (ንሓድሕዶም ተራእዮም።)", "Ils {a}ne se sont pas vus{/a}. (ንሓድሕዶም ኣይተራእዩን።)"], ["Nous {a}nous sommes parlé{/a}. (ንሓድሕድና ተዘራሪብና።)", "(COI → ምስምማዕ የብሉን)"]],
        uk: [["Elle {a}s'est levée{/a}. (Вона встала.)", "Elle {a}ne s'est pas levée{/a}. (Вона не встала.)"], ["Ils {a}se sont vus{/a}. (Вони побачилися.)", "Ils {a}ne se sont pas vus{/a}. (Вони не побачилися.)"], ["Nous {a}nous sommes parlé{/a}. (Ми поговорили одне з одним.)", "(COI → без узгодження)"]],
      },
    },
    {
      type: "highlight",
      label: "Marqueurs temporels du passé composé",
      transLabel: { en: "Time markers of the passé composé", ar: "مؤشرات زمنية للماضي المركّب", fa: "نشانگرهای زمانی گذشتهٔ نقلی", ti: "ናይ ሕሉፍ ግዜ ናይ ግዜ ምልክታት", uk: "Часові маркери passé composé" },
      items: [
        "hier, avant-hier, la semaine dernière, l'année dernière",
        "il y a + durée : Il y a deux ans, je suis allé en France.",
        "soudain, tout à coup, enfin, puis (actions ponctuelles)",
      ],
      transItems: {
        en: ["hier, avant-hier, la semaine dernière, l'année dernière (yesterday, the day before yesterday, last week, last year)", "il y a + duration: Il y a deux ans, je suis allé en France. (Two years ago, I went to France.)", "soudain, tout à coup, enfin, puis (suddenly, all of a sudden, finally, then) (one-off actions)"],
        ar: ["hier, avant-hier, la semaine dernière, l'année dernière (أمس، أول أمس، الأسبوع الماضي، العام الماضي)", "il y a + مدة: Il y a deux ans, je suis allé en France. (منذ سنتين، ذهبت إلى فرنسا.)", "soudain, tout à coup, enfin, puis (فجأة، فجأة، أخيراً، ثم) (أفعال لحظية)"],
        fa: ["hier, avant-hier, la semaine dernière, l'année dernière (دیروز، پریروز، هفتهٔ گذشته، سال گذشته)", "il y a + مدت: Il y a deux ans, je suis allé en France. (دو سال پیش به فرانسه رفتم.)", "soudain, tout à coup, enfin, puis (ناگهان، یکباره، سرانجام، سپس) (کنش‌های لحظه‌ای)"],
        ti: ["hier, avant-hier, la semaine dernière, l'année dernière (ትማሊ፣ ቅድሚ ትማሊ፣ ዝሓለፈ ሰሙን፣ ዝሓለፈ ዓመት)", "il y a + ግዜ: Il y a deux ans, je suis allé en France. (ቅድሚ ክልተ ዓመት ናብ ፈረንሳ ከይደ።)", "soudain, tout à coup, enfin, puis (ብድንገት፣ ሃንደበት፣ ኣብ መወዳእታ፣ ድሕሪኡ) (ናይ ሓደ እዋን ተግባራት)"],
        uk: ["hier, avant-hier, la semaine dernière, l'année dernière (учора, позавчора, минулого тижня, торік)", "il y a + тривалість: Il y a deux ans, je suis allé en France. (Два роки тому я поїхав до Франції.)", "soudain, tout à coup, enfin, puis (раптом, зненацька, нарешті, потім) (одноразові дії)"],
      },
    },
  ],
  exercises: [],
};
