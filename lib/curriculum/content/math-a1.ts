import type { MathSubmoduleLesson } from "./math-a1-types";

/**
 * Contenu A1 aligné sur les fiches CSC « Écrire et compter » et « C-D-U ».
 * Les .docx / .mp4 restent sur ton disque : copie éventuelle vers /public/csc/…
 * et renseigne mediaHint.publicPath.
 */
export const MATH_A1_LESSONS: MathSubmoduleLesson[] = [
  {
    submoduleId: "A1-1",
    submoduleCode: "A1.1",
    theory: {
      title: {
        fr: "Lire, écrire et comparer les nombres",
        ar: "قراءة الأعداد وكتابتها ومقارنتها",
        fa: "خواندن، نوشتن و مقایسهٔ اعداد",
        ti: "ምንባቕ፡ መጽሓፍን መፈልጸምን ኣኃዝቲ",
        uk: "Читання, запис і порівняння чисел",
      },
      paragraphs: {
        fr: [
          "Un nombre entier s’écrit avec des chiffres (0 à 9). En français, on sépare souvent les milliers par une espace fine : 125 000.",
          "Pour comparer deux nombres, on regarde d’abord le nombre de chiffres, puis les chiffres de gauche à droite (centaines, dizaines, unités…).",
          "La partie « Compter en français » ci-dessous reprend la prononciation des nombres (fiche CSC MATH_EX_01.02). En Suisse romande, on utilise souvent septante, huitante et nonante pour 70, 80 et 90. Écoute l’enregistrement puis répète à voix haute.",
          "Les exercices reprennent aussi l’écriture, le dénombrement et les fiches 01.01 à 01.04.",
        ],
        ar: [
          "نكتب العدد الصحيح بأرقام من 0 إلى 9، ونفصل الآلاف أحيانًا بمسافة في الفرنسية.",
          "لمقارنة عددين ننظر إلى عدد الأرقام ثم من اليسار إلى اليمين.",
          "قسم « العدّ بالفرنسية » يعرض كيفية نطق الأرقام (مطابقة لبرنامج CSC). في الروماندي السويسري يقال غالبًا سبعون وثمانون وتسعون لـ 70 و80 و90. استمع ثم كرّر بصوت عالٍ.",
          "التطبيقات تشمل الكتابة والعدّ وفقرات 01.01 إلى 01.04.",
        ],
        fa: [
          "عدد صحیح را با ارقام ۰ تا ۹ می‌نویسیم؛ در فرانسوی هزارگان را گاه با فاصله می‌نویسند.",
          "برای مقایسه نخست تعداد رقم‌ها، سپس از چپ به راست می‌خوانیم.",
          "بخش « شمردن به فرانسوی » تلفظ اعداد را نشان می‌دهد (CSC). در سوئیس رماند معمولاً ۷۰ و ۸۰ و ۹۰ را septante، huitante، nonante می‌گویند. گوش کن و بلند تکرار کن.",
          "تمرین‌ها نوشتن و شمردن و برگه‌های ۰۱.۰۱ تا ۰۱.۰۴ را پوشش می‌دهد.",
        ],
        ti: [
          "ኣኃዝቲ ብኣሃዝቲ 0-9 ይጽዓን፣ ኣብ ፈረንሳይ ሽሕታት ብልዝብ ክፈልጹ ይኽእሉ።",
          "ክልተ ኣኃዝቲ ንምምካኽ ብዝተሓሓዘ ኣሃዝቲ ካብ ንደቓይቕ ክሳዕ የማን እንተርእዩ።",
          "እዚ « ብፈረንሳይ ምቕታል » እዚ ንምውጻእ ቁጽርታት (CSC) ይምርኩ። ኣብ ስዊዘርላንድ 70-80-90 ብ septante ፡ huitante ፡ nonante ይበሃሉ ። ስምዑ እሞ ብድምጺ ድግሞ ።",
          "መስርሕታት ምጽሓፍን ምስፍራሕን ንመርሓ 01.01-01.04 የምሕርዩ።",
        ],
        uk: [
          "Ціле число пишуть цифрами від 0 до 9; тисячі у французькій часто відокремлюють пробілом.",
          "Щоб порівняти два числа, спершу кількість цифр, далі зліва направо.",
          "Розділ « Рахувати французькою » показує вимову чисел (CSC). У романській Швейцарії для 70, 80, 90 часто кажуть septante, huitante, nonante. Прослухай запис і повтори вголос.",
          "Вправи також охоплюють запис, лічбу та аркуші 01.01–01.04.",
        ],
      },
      readAloud: {
        headingFr: "Compter en français (lire et écouter)",
        introFr: [
          "Les couleurs des colonnes rappellent le code du support papier : rouge (un seul son pour la syllabe accentuée), gris (pas de son / préparation), noir (son régulier).",
        ],
        introPivot: {
          ar: [
            "ألوان الأعمدة توافق رمز الدفتر: أحمر (مقطع نطق واحد بارز)، رمادي (لا صوت / تحضير)، أسود (نطق عادي).",
          ],
          fa: [
            "رنگ ستون‌ها همان کد برگه است: قرمز (یک هجای تأکیدی)، خاکستری (بدون صوت / آماده‌سازی)، سیاه (صدای عادی).",
          ],
          ti: [
            "ነገራዊ ሕብራት ንዓምዲ ንስነ-ኣእምሮ መጽሓፍ ምስ ኣሰር፡ ቀይሕ (ናይ ሓደ ድምጺ) ፡ ግራጫ (ዘይኮነ ድምጺ) ፡ ጸሊም (ስነ-ጽሑፍ ከም ዝተመርኰሰ) ።",
          ],
          uk: [
            "Кольори стовпчиків відповідають коду навчального аркуша: червоний (один наголошений звук), сірий (без звуку / підготовка), чорний (звичайний вимовний звук).",
          ],
        },
        columnTones: ["red", "gray", "black"],
        legendFr: [
          { tone: "red", labelFr: "Rouge : un seul son" },
          { tone: "gray", labelFr: "Gris : pas de son" },
          { tone: "black", labelFr: "Noir : son" },
        ],
        rows: [
          {
            col1: { num: "1", word: "un" },
            col2: { num: "11", word: "onze" },
            col3: { num: "21", word: "vingt et un" },
          },
          {
            col1: { num: "2", word: "deux" },
            col2: { num: "12", word: "douze" },
            col3: { num: "22", word: "vingt-deux" },
          },
          {
            col1: { num: "3", word: "trois" },
            col2: { num: "13", word: "treize" },
            col3: { num: "30", word: "trente" },
          },
          {
            col1: { num: "4", word: "quatre" },
            col2: { num: "14", word: "quatorze" },
            col3: { num: "40", word: "quarante" },
          },
          {
            col1: { num: "5", word: "cinq" },
            col2: { num: "15", word: "quinze" },
            col3: { num: "50", word: "cinquante" },
          },
          {
            col1: { num: "6", word: "six" },
            col2: { num: "16", word: "seize" },
            col3: { num: "60", word: "soixante" },
          },
          {
            col1: { num: "7", word: "sept" },
            col2: { num: "17", word: "dix-sept" },
            col3: { num: "70", word: "septante" },
          },
          {
            col1: { num: "8", word: "huit" },
            col2: { num: "18", word: "dix-huit" },
            col3: { num: "80", word: "huitante" },
          },
          {
            col1: { num: "9", word: "neuf" },
            col2: { num: "19", word: "dix-neuf" },
            col3: { num: "90", word: "nonante" },
          },
          {
            col1: { num: "10", word: "dix" },
            col2: { num: "20", word: "vingt" },
            col3: { num: "100", word: "cent" },
          },
        ],
      },
      cscRefs: [
        "MATH_EX_01.01_EcrireLesNombres.docx",
        "MATH_EX_01.02_CompterEnFrancais.docx",
        "MATH_EX_01.02_AUDIO.mp4",
        "MATH_EX_01.03_Denombrement_01.docx",
        "MATH_EX_01.04_Denombrement_02.docx",
      ],
      mediaHint: {
        fr: "Enregistrement CSC : place « MATH_EX_01.02_AUDIO.mp4 » dans le dossier public/csc/ du projet (chemin attendu ci-dessous).",
        publicPath: "/csc/MATH_EX_01.02_AUDIO.mp4",
      },
    },
    exercises: [
      {
        id: "a11-1",
        promptFr: "Écris en chiffres : trois cent quarante-sept.",
        promptPivot: {
          ar: "اكتب بالأرقام: ثلاثمئة وسبعة وأربعون.",
          fa: "به رقم بنویس: سیصد و چهل و هفت.",
          uk: "Запиши цифрами: триста сорок сім.",
        },
        type: "number",
        acceptable: ["347"],
      },
      {
        id: "a11-2",
        promptFr: "Écris en lettres (en un seul mot en français) : 508",
        promptPivot: {
          ar: "اكتب بالحروف (بالفرنسية): 508",
          fa: "به حروف (فرانسوی، یک کلمه): ۵۰۸",
          uk: "Одним словом французькою: 508",
        },
        type: "short_text",
        acceptable: ["cinqcenthuit", "cinqcentuit"],
      },
      {
        id: "a11-3",
        promptFr: "Combien y a-t-il d’unités dans 60 ?",
        promptPivot: {
          ar: "كم وحدة في العدد 60؟",
          fa: "در ۶۰ چند یکی وجود دارد؟",
          uk: "Скільки одиниць у числі 60?",
        },
        type: "number",
        acceptable: ["0"],
      },
      {
        id: "a11-4",
        promptFr: "Quel est le plus grand : 892 ou 928 ? (écris le nombre gagnant)",
        promptPivot: {
          ar: "أيهما أكبر: 892 أم 928؟ (اكتب العدد الأكبر)",
          fa: "کدام بزرگ‌تر است: ۸۹۲ یا ۹۲۸؟ (عدد بزرگ‌تر را بنویس)",
          uk: "Що більше: 892 чи 928? (запиши більше)",
        },
        type: "number",
        acceptable: ["928"],
      },
    ],
  },
  {
    submoduleId: "A1-2",
    submoduleCode: "A1.2",
    theory: {
      title: {
        fr: "Valeur positionnelle — lire et comprendre les nombres",
        ar: "القيمة حسب المنزلة — قراءة الأعداد وفهمها",
        fa: "ارزش مکانی — خواندن و فهمیدن اعداد",
        ti: "ናይ ቦታ ዋጋ — ኣኃዝቲ ምንባብን ምርዳእን",
        uk: "Розрядне значення — читати й розуміти числа",
      },
      paragraphs: {
        fr: [
          "La numération est la manière d’écrire, lire et comprendre les nombres. Dans notre système décimal, chaque chiffre a une valeur selon sa position.",
          "1. Dans le nombre 452, le chiffre 2 vaut deux unités (2).",
          "2. Dans le nombre 524, le chiffre 2 vaut deux dizaines (20).",
          "3. Dans le nombre 245, le chiffre 2 vaut deux centaines (200).",
          "4. Dans le nombre 2453, le chiffre 2 vaut deux milliers (2000).",
          "On parle aussi de centaines (C), dizaines (D), unités (U) pour décomposer un nombre (fiches CSC 02.01 à 02.03).",
        ],
        ar: [
          "الترقيم هو طريقة كتابة الأعداد وقراءتها وفهمها. في النظام العشري، لكل رقم قيمة حسب مكانه.",
          "1. في العدد 452، الرقم 2 يساوي وحدتين (2).",
          "2. في العدد 524، الرقم 2 يساوي عشرات (20).",
          "3. في العدد 245، الرقم 2 يساوي مئتين (200).",
          "4. في العدد 2453، الرقم 2 يساوي ألفين (2000).",
          "نحلّل العدد أيضًا إلى مئات (م)، عشرات (ع)، ووحدات (و) — راجع أوراق 02.01 إلى 02.03.",
        ],
        fa: [
          "عددگذاری یعنی نوشتن، خواندن و فهمیدن اعداد. در دهدهی، هر رقم بسته به جایگاهش ارزش دارد.",
          "۱. در ۴۵۲، رقم ۲ برابر دو یکی (۲) است.",
          "۲. در ۵۲۴، رقم ۲ برابر دو ده (۲۰) است.",
          "۳. در ۲۴۵، رقم ۲ برابر دویست (۲۰۰) است.",
          "۴. در ۲۴۵۳، رقم ۲ برابر دو هزار (۲۰۰۰) است.",
          "عدد را به صدها، ده‌ها و یک‌ها هم تجزیه می‌کنیم (برگه‌های ۰۲.۰۱ تا ۰۲.۰۳).",
        ],
        ti: [
          "ኣኃዝቲ ምጽሓፍ ፡ ምንባብን ምርዳእን ማለት እዩ። ኣብ ዴሲማል ፡ ነፍሪ ዝርከብ ኣሃዝቲ ብኣባጺኡ ዋጋ ኣለዎ።",
          "1. ኣብ 452 እቲ 2 ክልተ ውልቃት (2) ማለት እዩ።",
          "2. ኣብ 524 እቲ 2 ክልተ ዓሰርተታት (20) ማለት እዩ።",
          "3. ኣብ 245 እቲ 2 ክልተ ሚእታት (200) ማለት እዩ።",
          "4. ኣብ 2453 እቲ 2 ክልተ ሽሕታት (2000) ማለት እዩ።",
          "ኣኃዝቲ ናብ ሚእታት ፡ ዓሰርተታት ፡ ውልቃት ይፈልጹ — መርሓ 02.01 ክሳብ 02.03።",
        ],
        uk: [
          "Нумерація — це спосіб записувати, читати й розуміти числа. У десятковій системі кожна цифра має значення залежно від розряду.",
          "1. У числі 452 цифра 2 означає два одиниці (2).",
          "2. У числі 524 цифра 2 означає два десятки (20).",
          "3. У числі 245 цифра 2 означає дві сотні (200).",
          "4. У числі 2453 цифра 2 означає дві тисячі (2000).",
          "Число також розкладають на сотні (C), десятки (D) та одиниці (U) — аркуші 02.01–02.03.",
        ],
      },
      cscRefs: [
        "MATH_EX_02.01_Centaine-Dizaine-Unite_01.docx",
        "MATH_EX_02.02_Centaine-Dizaine-Unite_02.docx",
        "MATH_EX_02.03_Denombrement_03.docx",
      ],
    },
    exercises: [
      {
        id: "a12-1",
        promptFr: "Dans 3 864, combien vaut le chiffre 8 ?",
        promptPivot: {
          ar: "في 3 864، ما قيمة الرقم 8؟",
          fa: "در ۳ ۸۶۴، ارزش رقم ۸ چند است؟",
          uk: "У 3 864 яке значення цифри 8?",
        },
        type: "number",
        acceptable: ["800"],
      },
      {
        id: "a12-2",
        promptFr: "Dans 5 240, la valeur du chiffre 4 est :",
        promptPivot: {
          ar: "في 5 240، قيمة الرقم 4 هي:",
          fa: "در ۵ ۲۴۰، ارزش رقم ۴:",
          uk: "У 5 240 значення цифри 4:",
        },
        type: "number",
        acceptable: ["40"],
      },
      {
        id: "a12-3",
        promptFr:
          "Décompose 637 : combien de centaines ? (écris seulement le nombre de centaines)",
        promptPivot: {
          ar: "حلّل 637: كم مئة؟ (اكتب عدد المئات فقط)",
          fa: "۶۳۷ را تجزیه کن: چند صد؟ (فقط عدد صدها)",
          uk: "Розклади 637: скільки сотень? (лише число сотень)",
        },
        type: "number",
        acceptable: ["6"],
      },
      {
        id: "a12-4",
        promptFr: "Dans 9 102, que vaut le chiffre en position des milliers ?",
        promptPivot: {
          ar: "في 9 102، ما قيمة الرقم في خانة الآلاف؟",
          fa: "در ۹ ۱۰۲، رقم جایگاه هزارگان چند است؟",
          uk: "У 9 102 яке значення цифри тисяч?",
        },
        type: "number",
        acceptable: ["9000"],
      },
    ],
  },
  {
    submoduleId: "A1-3",
    submoduleCode: "A1.3",
    theory: {
      title: {
        fr: "Droite numérique",
        ar: "المستقيم العددي",
        fa: "خط اعداد",
        ti: "ቁፅሪ ቁጽሪ ቀጽሪ",
        uk: "Числова пряма",
      },
      paragraphs: {
        fr: [
          "Sur une droite numérique, les nombres sont placés dans l’ordre croissant de gauche à droite. L’espacement entre deux nombres consécutifs peut être 1, 10, 100… selon l’échelle.",
          "Pour trouver un nombre « entre » deux autres, on lit l’échelle : par exemple entre 450 et 460 avec pas 1, on peut placer 455.",
        ],
        ar: [
          "على المستقيم العددي توضع الأعداد تصاعديًا من اليسار إلى اليمين. المسافة بين عددين متتاليين قد تكون 1 أو 10 أو 100 حسب المقياس.",
          "لإيجاد عدد بين عددين آخرين نقرأ المقياس: مثلًا بين 450 و 460 بخطوة 1 نضع 455.",
        ],
        fa: [
          "روی خط اعداد، اعداد به ترتیب صعودی از چپ به راست قرار می‌گیرند. فاصلهٔ گام می‌تواند ۱، ۱۰ یا ۱۰۰ باشد.",
          "برای یافتن عدد بین دو عدد، مقیاس را می‌خوانیم؛ مثلاً بین ۴۵۰ و ۴۶۰ با گام ۱، عدد ۴۵۵ جای می‌گیرد.",
        ],
        ti: [
          "ኣኃዝቲ ኣብ ቀጽሪ ቁፅሪ ካብ ንደቓይቕ ክሳዕ የማን ብትሑትስነት ይውሰኩ። ርሕቀት መእተዊ 1፡ 10፡ 100 ክኸውን ይኽእል ።",
          "ኣብ መንካይ ክልተ ኣኃዝቲ ናይ መስፈሪ ንንበብ፡ ንኣብነት 450ን 460 ዝኣክል 1 455 እዩ ።",
        ],
        uk: [
          "На числовій прямій числа розташовують у порядку зростання зліва направо. Крок може бути 1, 10, 100 тощо.",
          "Щоб знайти число «між» двома, читаємо масштаб: між 450 і 460 з кроком 1 буде, наприклад, 455.",
        ],
      },
      cscRefs: ["Activité type PER — droite numérique"],
    },
    exercises: [
      {
        id: "a13-1",
        promptFr: "Quel nombre entier est juste après 899 ?",
        type: "number",
        acceptable: ["900"],
      },
      {
        id: "a13-2",
        promptFr: "Quel nombre est entre 12 et 14 ?",
        type: "number",
        acceptable: ["13"],
      },
      {
        id: "a13-3",
        promptFr: "On saute de 100 en 100 : 300, 400, ?",
        type: "number",
        acceptable: ["500"],
      },
    ],
  },
  {
    submoduleId: "A1-4",
    submoduleCode: "A1.4",
    theory: {
      title: {
        fr: "Suites numériques et régularités",
        ar: "تسلسلات عددية وانتظام",
        fa: "دنباله‌های عددی و قاعده",
        ti: "ናይ ቁፅሪ ተኸታታላዊ መርሕታት",
        uk: "Числові послідовності та закономірності",
      },
      paragraphs: {
        fr: [
          "Une suite est une liste de nombres qui suit une règle : +1, +10, doublement, etc.",
          "Repère le pas entre deux termes consécutifs pour prévoir le suivant.",
        ],
        ar: [
          "التسلسل قائمة أعداد تتبع قاعدة: +1، +10، مضاعفة…",
          "حدد خطوة الانتقال بين حدّين متتاليين لتوقع الحد التالي.",
        ],
        fa: [
          "دنباله فهرستی از اعداد با یک قانون است: ‎+۱، ‎+۱۰، دوبرابر…",
          "گام بین دو جملهٔ پشت‌سرهم را پیدا کن تا جملهٔ بعدی را حدس بزنی.",
        ],
        ti: [
          "ተኸታላይ እዋናዊ ዝርዝር ኣኃዝቲ እዩና ሕግኦም +1፡ +10…",
          "ኣብ ክልተ ተኸታተምቲ ናይ ደገ ኣኃዝቲ መዓላ ዳሉ ክሳብ ቀጻሊ ይድለ።",
        ],
        uk: [
          "Послідовність — це список чисел за правилом: +1, +10, подвоєння тощо.",
          "Знайди крок між сусідніми членами, щоб передбачити наступний.",
        ],
      },
    },
    exercises: [
      {
        id: "a14-1",
        promptFr: "Suite : 4, 7, 10, 13, ? (écris le terme suivant)",
        type: "number",
        acceptable: ["16"],
      },
      {
        id: "a14-2",
        promptFr: "Suite : 1000, 900, 800, ?",
        type: "number",
        acceptable: ["700"],
      },
      {
        id: "a14-3",
        promptFr: "Double à chaque fois : 3, 6, 12, ?",
        type: "number",
        acceptable: ["24"],
      },
    ],
  },
];

export function getA1Lesson(submoduleId: string): MathSubmoduleLesson | undefined {
  return MATH_A1_LESSONS.find((l) => l.submoduleId === submoduleId);
}
