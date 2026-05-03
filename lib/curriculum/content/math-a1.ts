import type { MathSubmoduleLesson } from "./math-a1-types";
import { A1_COMPTER_EN_FRANCAIS_ROWS } from "./math-a1-readaloud-rows";

/** Contenu A1 (module « Nombres entiers naturels »), théorie multilingue et exercices. */
export const MATH_A1_LESSONS: MathSubmoduleLesson[] = [
  {
    submoduleId: "A1-1",
    submoduleCode: "A1.1",
    theory: {
      title: {
        fr: "Compter en français",
        en: "Counting in French",
        ar: "العد بالفرنسية",
        fa: "شمارش به فرانسوی",
        ti: "ምቑጻር ብፈረንሳይ",
        uk: "Лічба французькою",
      },
      paragraphs: {
        fr: [
          "Un nombre entier s’écrit avec des chiffres (0 à 9).",
          "En français, on sépare souvent les milliers par une espace fine : 125 000.",
          "En Suisse romande, on utilise souvent septante, huitante et nonante pour 70, 80 et 90.",
        ],
        ar: [
          "نكتب العدد الصحيح بأرقام من 0 إلى 9.",
          "في الفرنسية، نفصل الآلاف أحيانًا بمسافة رفيعة : 125 000.",
          "في الروماندي السويسري يقال غالبًا septante وhuitante وnonante لـ 70 و80 و90.",
        ],
        fa: [
          "عدد صحیح را با ارقام ۰ تا ۹ می‌نویسیم.",
          "در فرانسوی، هزارگان را گاه با فاصلهٔ ظریف جدا می‌کنند: ۱۲۵ ۰۰۰.",
          "در سوئیس رماند معمولاً برای ۷۰ و ۸۰ و ۹۰ می‌گویند septante، huitante، nonante.",
        ],
        ti: [
          "ኣኃዝቲ ብኣሃዝቲ 0-9 ይጽዓን።",
          "ኣብ ፈረንሳይ ሽሕታት ብልዝብ ክፈልጹ ይኽእሉ።",
          "ኣብ ስዊዘርላንድ ብ 70-80-90 septante ፡ huitante ፡ nonante ይበሃሉ ።",
        ],
        uk: [
          "Ціле число записують цифрами від 0 до 9.",
          "У французькій тисячі часто відокремлюють тонким пробілом: 125 000.",
          "У романській Швейцарії для 70, 80 і 90 часто кажуть septante, huitante, nonante.",
        ],
        en: [
          "A whole number is written with digits (0 to 9).",
          "In French, thousands are often separated by a thin space: 125 000.",
          "In French-speaking Switzerland, people often say septante, huitante and nonante for 70, 80 and 90.",
        ],
      },
      readAloud: {
        headingFr: "Enregistrement",
        legendFr: [
          {
            swatch: "red", labelFr: "Rouge : un seul son",
            labelPivot: {
              en: "Red: one sound", ar: "أحمر: صوت واحد",
              fa: "قرمز: یک صدا", uk: "Червоний: один звук", ti: "ቀይሕ: ሓደ ድምጺ",
            },
          },
          {
            swatch: "text", labelFr: "Noir : son",
            labelPivot: {
              en: "Black: sound", ar: "أسود: صوت",
              fa: "سیاه: صدا", uk: "Чорний: звук", ti: "ጸሊም: ድምጺ",
            },
          },
          {
            swatch: "gray", labelFr: "Gris : pas de son",
            labelPivot: {
              en: "Gray: silent", ar: "رمادي: بدون صوت",
              fa: "خاکستری: بی‌صدا", uk: "Сірий: без звуку", ti: "ሕምብርቲ: ድምጺ የብሉን",
            },
          },
        ],
        rows: A1_COMPTER_EN_FRANCAIS_ROWS,
        audioSrc: "/audio/a1-1-compter-fr.m4a",
      },
    },
    exercises: [
      {
        id: "a11-1",
        promptFr: "Écris en chiffres : trois cent quarante-sept.",
        promptPivot: {
          en: "Write in digits: three hundred forty-seven.",
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
          en: "Write in words as a single French word: 508",
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
          en: "How many units are in 60?",
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
          en: "Which is greater: 892 or 928? (write the larger number)",
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
        fr: "Lire et comprendre les nombres",
        en: "Reading and understanding numbers",
        ar: "قراءة الأعداد وفهمها",
        fa: "خواندن و فهمیدن اعداد",
        ti: "ኣኃዝቲ ምንባብን ምርዳእን",
        uk: "Читати й розуміти числа",
      },
      paragraphs: {
        fr: [
          "La numération est la manière d’écrire, lire et comprendre les nombres. Dans notre système décimal, chaque chiffre a une valeur selon sa position.",
          "• Dans le nombre 452, le chiffre **2** vaut deux unités (**2**).",
          "• Dans le nombre 524, le chiffre **2** vaut deux dizaines (**20**).",
          "• Dans le nombre 245, le chiffre **2** vaut deux centaines (**200**).",
          "• Dans le nombre 2453, le chiffre **2** vaut deux milliers (**2000**).",
          "On parle aussi de milliers (**M**), centaines (**C**), dizaines (**D**), unités (**U**) pour décomposer un nombre.",
        ],
        ar: [
          "الترقيم هو طريقة كتابة الأعداد وقراءتها وفهمها. في النظام العشري، لكل رقم قيمة حسب مكانه.",
          "• في العدد 452، الرقم 2 يساوي وحدتين (2).",
          "• في العدد 524، الرقم 2 يساوي عشرات (20).",
          "• في العدد 245، الرقم 2 يساوي مئتين (200).",
          "• في العدد 2453، الرقم 2 يساوي ألفين (2000).",
          "نحلّل العدد أيضًا إلى آلاف (أ)، مئات (م)، عشرات (ع)، ووحدات (و).",
        ],
        fa: [
          "عددگذاری یعنی نوشتن، خواندن و فهمیدن اعداد. در دهدهی، هر رقم بسته به جایگاهش ارزش دارد.",
          "• در ۴۵۲، رقم ۲ برابر دو یکی (۲) است.",
          "• در ۵۲۴، رقم ۲ برابر دو ده (۲۰) است.",
          "• در ۲۴۵، رقم ۲ برابر دویست (۲۰۰) است.",
          "• در ۲۴۵۳، رقم ۲ برابر دو هزار (۲۰۰۰) است.",
          "عدد را به هزارها، صدها، ده‌ها و یک‌ها هم تجزیه می‌کنیم.",
        ],
        ti: [
          "ኣኃዝቲ ምጽሓፍ ፡ ምንባብን ምርዳእን ማለት እዩ። ኣብ ዴሲማል ፡ ነፍሪ ዝርከብ ኣሃዝቲ ብኣባጺኡ ዋጋ ኣለዎ።",
          "• ኣብ 452 እቲ 2 ክልተ ውልቃት (2) ማለት እዩ።",
          "• ኣብ 524 እቲ 2 ክልተ ዓሰርተታት (20) ማለት እዩ።",
          "• ኣብ 245 እቲ 2 ክልተ ሚእታት (200) ማለት እዩ።",
          "• ኣብ 2453 እቲ 2 ክልተ ሽሕታት (2000) ማለት እዩ።",
          "ኣኃዝቲ ናብ ሽሕታት ፡ ሚእታት ፡ ዓሰርተታት ፡ ውልቃት ይፈልጹ ።",
        ],
        uk: [
          "Нумерація — це спосіб записувати, читати й розуміти числа. У десятковій системі кожна цифра має значення залежно від розряду.",
          "• У числі 452 цифра 2 означає два одиниці (2).",
          "• У числі 524 цифра 2 означає два десятки (20).",
          "• У числі 245 цифра 2 означає дві сотні (200).",
          "• У числі 2453 цифра 2 означає дві тисячі (2000).",
          "Число також розкладають на тисячі (M), сотні (C), десятки (D) та одиниці (U).",
        ],
        en: [
          "Numeration is how we write, read and understand numbers. In our decimal system, each digit has a value according to its place.",
          "• In 452, the digit 2 is worth two units (2).",
          "• In 524, the digit 2 is worth two tens (20).",
          "• In 245, the digit 2 is worth two hundreds (200).",
          "• In 2453, the digit 2 is worth two thousands (2000).",
          "We also break numbers down into thousands (M), hundreds (C), tens (D) and units (U).",
        ],
      },
    },
    exercises: [
      {
        id: "a12-1",
        promptFr: "Dans 3 864, combien vaut le chiffre 8 ?",
        promptPivot: {
          en: "In 3 864, what is the digit 8 worth?",
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
          en: "In 5 240, the value of the digit 4 is:",
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
          en: "Split 637: how many hundreds? (write only the number of hundreds)",
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
          en: "In 9 102, what is the digit in the thousands place worth?",
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
        en: "Number line",
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
        en: [
          "On a number line, numbers are placed in increasing order from left to right. The gap between two neighbours can be 1, 10, 100… depending on the scale.",
          "To find a number between two others, read the scale: for example between 450 and 460 with step 1, you can place 455.",
        ],
      },
    },
    exercises: [
      {
        id: "a13-1",
        promptFr: "Quel nombre entier est juste après 899 ?",
        promptPivot: {
          en: "Which whole number comes right after 899?",
        },
        type: "number",
        acceptable: ["900"],
      },
      {
        id: "a13-2",
        promptFr: "Quel nombre est entre 12 et 14 ?",
        promptPivot: {
          en: "Which number is between 12 and 14?",
        },
        type: "number",
        acceptable: ["13"],
      },
      {
        id: "a13-3",
        promptFr: "On saute de 100 en 100 : 300, 400, ?",
        promptPivot: {
          en: "Count by hundreds: 300, 400, ?",
        },
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
        en: "Number patterns and rules",
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
        en: [
          "A sequence is a list of numbers that follows a rule: +1, +10, doubling, and so on.",
          "Find the step between two consecutive terms to predict the next one.",
        ],
      },
    },
    exercises: [
      {
        id: "a14-1",
        promptFr: "Suite : 4, 7, 10, 13, ? (écris le terme suivant)",
        promptPivot: {
          en: "Sequence: 4, 7, 10, 13, ? (write the next term)",
        },
        type: "number",
        acceptable: ["16"],
      },
      {
        id: "a14-2",
        promptFr: "Suite : 1000, 900, 800, ?",
        promptPivot: {
          en: "Sequence: 1000, 900, 800, ?",
        },
        type: "number",
        acceptable: ["700"],
      },
      {
        id: "a14-3",
        promptFr: "Double à chaque fois : 3, 6, 12, ?",
        promptPivot: {
          en: "Double each time: 3, 6, 12, ?",
        },
        type: "number",
        acceptable: ["24"],
      },
    ],
  },
];

export function getA1Lesson(submoduleId: string): MathSubmoduleLesson | undefined {
  return MATH_A1_LESSONS.find((l) => l.submoduleId === submoduleId);
}
