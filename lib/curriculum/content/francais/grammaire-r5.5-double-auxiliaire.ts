import type { GrammarLesson } from "../../grammar-data";

export const A1_GR_DOUBLE_AUXILIAIRE: GrammarLesson = {
  slug: "a1-gr-verbes-double-auxiliaire",
  code: "R5.5",
  level: "A1",
  title: "Les verbes à double auxiliaire",
  theory: [
    { type: "heading", text: "Les verbes à double auxiliaire", trans: { en: "Verbs with two possible auxiliaries", ar: "الأفعال ذات الفعل المساعد المزدوج", fa: "افعال با دو فعل کمکی", ti: "ናይ ክልተ ሓጋዚ ግሲ ዘለዎም ግሳት", uk: "Дієслова з двома можливими допоміжними" } },
    {
      type: "plain_list",
      items: [
        "Certains verbes se conjuguent avec {a}être{/a} ou {a}avoir{/a} au passé composé selon leur construction.",
        "Principaux verbes : sortir, rentrer, entrer, passer, monter, descendre et retourner.",
      ],
      transItems: {
        en: ["Some verbs use {a}être{/a} or {a}avoir{/a} in the passé composé depending on their construction.", "Main verbs: sortir, rentrer, entrer, passer, monter, descendre and retourner."],
        ar: ["بعض الأفعال تُستخدم مع {a}être{/a} أو {a}avoir{/a} في الماضي المركب حسب تركيبها.", "الأفعال الرئيسية: sortir, rentrer, entrer, passer, monter, descendre et retourner."],
        fa: ["برخی افعال در گذشته مرکب با {a}être{/a} یا {a}avoir{/a} می‌آیند بسته به ساختارشان.", "افعال اصلی: sortir, rentrer, entrer, passer, monter, descendre et retourner."],
        ti: ["ገለ ግሳት ኣብ ናይ ሕሉፍ ጊዜ ምስ {a}être{/a} ወይ {a}avoir{/a} ይቁረናን ንሃናጽ ዝምርኮስ።", "ቀንዲ ግሳት: sortir, rentrer, entrer, passer, monter, descendre et retourner."],
        uk: ["Деякі дієслова утворюють passé composé з {a}être{/a} або {a}avoir{/a} залежно від конструкції.", "Основні дієслова: sortir, rentrer, entrer, passer, monter, descendre та retourner."],
      },
    },
    {
      type: "highlight",
      label: "Règle",
      transLabel: { en: "Rule", ar: "القاعدة", fa: "قاعده", ti: "ሕጊ", uk: "Правило" },
      items: [
        "Sans complément d'objet direct (COD) : auxiliaire {a}être{/a}.",
        "Avec un COD : auxiliaire {a}avoir{/a}.",
      ],
      transItems: {
        en: ["Without a direct object (COD): auxiliary {a}être{/a}.", "With a COD: auxiliary {a}avoir{/a}."],
        ar: ["بدون مفعول به مباشر (COD): فعل مساعد {a}être{/a}.", "مع مفعول به: فعل مساعد {a}avoir{/a}."],
        fa: ["بدون مفعول مستقیم (COD): فعل کمکی {a}être{/a}.", "با مفعول مستقیم: فعل کمکی {a}avoir{/a}."],
        ti: ["ብዘይ ቀጥታዊ ዕላማ (COD): ሓጋዚ {a}être{/a}.", "ምስ COD: ሓጋዚ {a}avoir{/a}."],
        uk: ["Без прямого додатка (COD): допоміжне {a}être{/a}.", "З прямим додатком: допоміжне {a}avoir{/a}."],
      },
    },
    {
      type: "grid",
      headers: ["Sans COD : être", "Avec COD : avoir"],
      transHeaders: {
        en: ["Without COD: être", "With COD: avoir"],
        ar: ["بدون مفعول به: être", "مع مفعول به: avoir"],
        fa: ["بدون مفعول: être", "با مفعول: avoir"],
        ti: ["ብዘይ COD: être", "ምስ COD: avoir"],
        uk: ["Без COD: être", "З COD: avoir"],
      },
      rows: [
        ["Elle est sortie.", "Elle a sorti la poubelle."],
        ["Ils sont montés.", "Ils ont monté les valises."],
        ["Nous sommes descendus.", "Nous avons descendu l'escalier."],
        ["Il est retourné chez lui.", "Il a retourné la feuille."],
      ],
      transRows: {
        en: [["Elle est sortie. (She went out.)", "Elle a sorti la poubelle. (She took out the bin.)"], ["Ils sont montés. (They went up.)", "Ils ont monté les valises. (They took the suitcases up.)"], ["Nous sommes descendus. (We went down.)", "Nous avons descendu l'escalier. (We went down the stairs.)"], ["Il est retourné chez lui. (He went back home.)", "Il a retourné la feuille. (He turned over the sheet.)"]],
        ar: [["Elle est sortie. (خرجت.)", "Elle a sorti la poubelle. (أخرجت القمامة.)"], ["Ils sont montés. (صعدوا.)", "Ils ont monté les valises. (حملوا الحقائب إلى الأعلى.)"], ["Nous sommes descendus. (نزلنا.)", "Nous avons descendu l'escalier. (نزلنا السلم.)"], ["Il est retourné chez lui. (عاد إلى منزله.)", "Il a retourné la feuille. (قلب الورقة.)"]],
        fa: [["Elle est sortie. (بیرون رفت.)", "Elle a sorti la poubelle. (سطل آشغال را بیرون برد.)"], ["Ils sont montés. (بالا رفتند.)", "Ils ont monté les valises. (چمدان‌ها را بالا بردند.)"], ["Nous sommes descendus. (پایین آمدیم.)", "Nous avons descendu l'escalier. (از پله‌ها پایین آمدیم.)"], ["Il est retourné chez lui. (به خانه برگشت.)", "Il a retourné la feuille. (برگه را برگرداند.)"]],
        ti: [["Elle est sortie. (ወጺኣ።)", "Elle a sorti la poubelle. (ናይ ጎሓፍ ጋዕ ኣውጺኣ.)"], ["Ils sont montés. (ደይቦም።)", "Ils ont monté les valises. (ሱፖርቶ ናብ ላዕሊ ኣልዒሎም.)"], ["Nous sommes descendus. (ወሪድና።)", "Nous avons descendu l'escalier. (ናብ ታሕቲ ወሪድና.)"], ["Il est retourné chez lui. (ናብ ገዝኡ ተመሊሱ።)", "Il a retourné la feuille. (ወረቐት ዘርዊሉ.)"]],
        uk: [["Elle est sortie. (Вона вийшла.)", "Elle a sorti la poubelle. (Вона винесла сміття.)"], ["Ils sont montés. (Вони піднялися.)", "Ils ont monté les valises. (Вони занесли валізи нагору.)"], ["Nous sommes descendus. (Ми спустилися.)", "Nous avons descendu l'escalier. (Ми спустилися по сходах.)"], ["Il est retourné chez lui. (Він повернувся додому.)", "Il a retourné la feuille. (Він перевернув аркуш.)"]],
      },
      equalCols: true,
    },
    {
      type: "highlight",
      label: "Accord",
      transLabel: { en: "Agreement", ar: "المطابقة", fa: "مطابقت", ti: "ምስምማዕ", uk: "Узгодження" },
      items: [
        "Avec {a}être{/a}, le participe passé s'accorde avec le sujet : elle est rentrée, ils sont sortis.",
        "Avec {a}avoir{/a}, il ne s'accorde généralement pas avec le sujet : elle a sorti les clés.",
      ],
      transItems: {
        en: ["With {a}être{/a}, the past participle agrees with the subject: elle est rentrée, ils sont sortis.", "With {a}avoir{/a}, it generally does not agree with the subject: elle a sorti les clés."],
        ar: ["مع {a}être{/a}، يتطابق اسم المفعول مع الفاعل: elle est rentrée, ils sont sortis.", "مع {a}avoir{/a}، لا يتطابق عادةً مع الفاعل: elle a sorti les clés."],
        fa: ["با {a}être{/a}، صفت مفعولی با فاعل مطابقت دارد: elle est rentrée, ils sont sortis.", "با {a}avoir{/a}، معمولاً با فاعل مطابقت ندارد: elle a sorti les clés."],
        ti: ["ምስ {a}être{/a}፣ ናይ ሕሉፍ ተሳታፋይ ምስ ርእሲ ይሰማማዕ: elle est rentrée, ils sont sortis.", "ምስ {a}avoir{/a}፣ ብሓፈሽኡ ምስ ርእሲ ኣይሰማማዕን: elle a sorti les clés."],
        uk: ["З {a}être{/a} дієприкметник узгоджується з підметом: elle est rentrée, ils sont sortis.", "З {a}avoir{/a} він зазвичай не узгоджується з підметом: elle a sorti les clés."],
      },
    },
  ],
  exercises: [],
};
