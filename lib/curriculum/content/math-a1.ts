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
          "Sur une droite numérique, les nombres sont placés dans l’ordre croissant de gauche à droite. L’espacement entre deux nombres consécutifs peut être 5, 10, 100… selon l’échelle.",
          "Pour trouver un nombre « entre » deux autres, on lit l’échelle : par exemple entre 450 et 460 avec un pas de 5 unités, on peut placer 455.",
          "Un nombre est **pair** s’il se termine par 0, 2, 4, 6 ou 8. Il peut être partagé en deux groupes égaux. Exemples : 4, 12, 38.",
          "Un nombre est **impair** s’il se termine par 1, 3, 5, 7 ou 9. Il ne peut pas être partagé en deux groupes égaux. Exemples : 3, 17, 45.",
        ],
        ar: [
          "على المستقيم العددي توضع الأعداد تصاعديًا من اليسار إلى اليمين. المسافة بين عددين متتاليين قد تكون 5 أو 10 أو 100 حسب المقياس.",
          "لإيجاد عدد بين عددين آخرين نقرأ المقياس: مثلًا بين 450 و 460 بخطوة 5 وحدات نضع 455.",
          "العدد **زوجي** إذا انتهى بـ 0 أو 2 أو 4 أو 6 أو 8، ويمكن تقسيمه إلى مجموعتين متساويتين. أمثلة: 4، 12، 38.",
          "العدد **فردي** إذا انتهى بـ 1 أو 3 أو 5 أو 7 أو 9، ولا يمكن تقسيمه إلى مجموعتين متساويتين. أمثلة: 3، 17، 45.",
        ],
        fa: [
          "روی خط اعداد، اعداد به ترتیب صعودی از چپ به راست قرار می‌گیرند. فاصلهٔ گام می‌تواند ۵، ۱۰ یا ۱۰۰ باشد.",
          "برای یافتن عدد بین دو عدد، مقیاس را می‌خوانیم؛ مثلاً بین ۴۵۰ و ۴۶۰ با گام ۵ واحد، عدد ۴۵۵ جای می‌گیرد.",
          "عدد **زوج** است اگر به ۰، ۲، ۴، ۶ یا ۸ ختم شود. می‌توان آن را به دو گروه مساوی تقسیم کرد. مثال: ۴، ۱۲، ۳۸.",
          "عدد **فرد** است اگر به ۱، ۳، ۵، ۷ یا ۹ ختم شود. نمی‌توان آن را به دو گروه مساوی تقسیم کرد. مثال: ۳، ۱۷، ۴۵.",
        ],
        ti: [
          "ኣኃዝቲ ኣብ ቀጽሪ ቁፅሪ ካብ ንደቓይቕ ክሳዕ የማን ብትሑትስነት ይውሰኩ። ርሕቀት መእተዊ 1፡ 10፡ 100 ክኸውን ይኽእል ።",
          "ኣብ መንካይ ክልተ ኣኃዝቲ ናይ መስፈሪ ንንበብ፡ ንኣብነት 450ን 460 ዝኣክል 1 455 እዩ ።",
          "ቁጽሪ **ዝተፈጥዎ (pair)** እዩ ምስ 0፡ 2፡ 4፡ 6 ወይ 8 ዝዛዘም። ምሳሌ: 4፡ 12፡ 38.",
          "ቁጽሪ **ዘይተፈጥዎ (impair)** እዩ ምስ 1፡ 3፡ 5፡ 7 ወይ 9 ዝዛዘም። ምሳሌ: 3፡ 17፡ 45.",
        ],
        uk: [
          "На числовій прямій числа розташовують у порядку зростання зліва направо. Крок може бути 5, 10, 100 тощо.",
          "Щоб знайти число «між» двома, читаємо масштаб: між 450 і 460 з кроком 5 одиниць буде, наприклад, 455.",
          "Число **парне**, якщо закінчується на 0, 2, 4, 6 або 8. Його можна поділити на дві рівні групи. Приклади: 4, 12, 38.",
          "Число **непарне**, якщо закінчується на 1, 3, 5, 7 або 9. Його не можна поділити на дві рівні групи. Приклади: 3, 17, 45.",
        ],
        en: [
          "On a number line, numbers are placed in increasing order from left to right. The gap between two neighbours can be 5, 10, 100… depending on the scale.",
          "To find a number between two others, read the scale: for example between 450 and 460 with a step of 5 units, you can place 455.",
          "A number is **even** if it ends in 0, 2, 4, 6 or 8. It can be split into two equal groups. Examples: 4, 12, 38.",
          "A number is **odd** if it ends in 1, 3, 5, 7 or 9. It cannot be split into two equal groups. Examples: 3, 17, 45.",
        ],
      },
    },
    exercises: [
      {
        id: "a13-1",
        promptFr: "Quel nombre entier est juste après 899 ?",
        promptPivot: { en: "Which whole number comes right after 899?" },
        type: "number",
        acceptable: ["900"],
      },
      {
        id: "a13-2",
        promptFr: "Quel nombre est entre 12 et 14 ?",
        promptPivot: { en: "Which number is between 12 and 14?" },
        type: "number",
        acceptable: ["13"],
      },
      {
        id: "a13-3",
        promptFr: "On saute de 100 en 100 : 300, 400, ?",
        promptPivot: { en: "Count by hundreds: 300, 400, ?" },
        type: "number",
        acceptable: ["500"],
      },
      {
        id: "a13-4",
        promptFr: "Le nombre 46 est-il pair ou impair ? (écris pair ou impair)",
        promptPivot: { en: "Is 46 even or odd? (write even or odd)" },
        type: "short_text",
        acceptable: ["pair", "even"],
      },
      {
        id: "a13-5",
        promptFr: "Le nombre 35 est-il pair ou impair ? (écris pair ou impair)",
        promptPivot: { en: "Is 35 even or odd? (write even or odd)" },
        type: "short_text",
        acceptable: ["impair", "odd"],
      },
    ],
  },
  {
    submoduleId: "A1-4",
    submoduleCode: "A1.4",
    theory: {
      title: {
        fr: "Comparer les nombres",
        en: "Comparing numbers",
        ar: "مقارنة الأعداد",
        fa: "مقایسه اعداد",
        ti: "ምውድዳር ቁጽርታት",
        uk: "Порівняння чисел",
      },
      paragraphs: {
        fr: [
          "Pour comparer deux nombres, on compare chiffre par chiffre en commençant par les milliers.",
          "Si les chiffres des milliers sont égaux, on compare les centaines, puis les dizaines, puis les unités.",
          "On utilise < (plus petit que), > (plus grand que) ou = (égal à).",
        ],
        ar: [
          "لمقارنة عددين، نقارن رقماً برقم بدءاً من الآلاف.",
          "إذا تساوت أرقام الآلاف، نقارن المئات ثم العشرات ثم الوحدات.",
          "نستخدم < (أصغر من) أو > (أكبر من) أو = (يساوي).",
        ],
        fa: [
          "برای مقایسه دو عدد، رقم به رقم از هزارگان شروع می‌کنیم.",
          "اگر رقم هزارگان برابر باشد، صدگان، سپس ده‌تاها، سپس یکان را مقایسه می‌کنیم.",
          "از < (کوچک‌تر از)، > (بزرگ‌تر از) یا = (مساوی) استفاده می‌کنیم.",
        ],
        ti: [
          "ክልተ ቁጽርታት ንምውድዳር፡ ካብ ሽሕ ጀሚርና ኣሃዝ ብኣሃዝ ንወዳደር።",
          "ናይ ሽሕ ኣሃዝ እንተ ማዕሪዮም፡ ሚእቲ፡ ድሕሪኡ ዓሰርተ፡ ድሕሪኡ ውልቂ ንወዳደር።",
          "< (ንእሽቶ ካብ)፡ > (ዓቢ ካብ) ወይ = (ማዕሪ) ንጥቀም።",
        ],
        uk: [
          "Щоб порівняти два числа, порівнюємо цифру за цифрою, починаючи з тисяч.",
          "Якщо цифри тисяч рівні, порівнюємо сотні, потім десятки, потім одиниці.",
          "Використовуємо < (менше), > (більше) або = (дорівнює).",
        ],
        en: [
          "To compare two numbers, compare digit by digit starting with thousands.",
          "If the thousands digits are equal, compare hundreds, then tens, then units.",
          "Use < (less than), > (greater than) or = (equal to).",
        ],
      },
    },
    exercises: [
      {
        id: "a14-1",
        promptFr: "Quel signe mettre ? 456 □ 462",
        promptPivot: { en: "Which sign? 456 □ 462" },
        type: "short_text",
        acceptable: ["<"],
      },
      {
        id: "a14-2",
        promptFr: "Quel signe mettre ? 789 □ 789",
        promptPivot: { en: "Which sign? 789 □ 789" },
        type: "short_text",
        acceptable: ["="],
      },
      {
        id: "a14-3",
        promptFr: "Quel signe mettre ? 902 □ 890",
        promptPivot: { en: "Which sign? 902 □ 890" },
        type: "short_text",
        acceptable: [">"],
      },
    ],
  },
  {
    submoduleId: "A1-5",
    submoduleCode: "A1.5",
    theory: {
      title: {
        fr: "Suites numériques",
        en: "Number sequences",
        ar: "المتتاليات العددية",
        fa: "دنباله‌های عددی",
        ti: "ናይ ቁጽሪ ተኸታታሊ",
        uk: "Числові послідовності",
      },
      paragraphs: {
        fr: [
          "Une **suite de nombres** est une liste ordonnée où chaque terme est obtenu en appliquant la même règle.",
          "Pour trouver la règle, calcule la différence entre deux termes consécutifs : c'est le **pas** (ou saut).",
          "Le pas peut être positif (suite croissante) ou négatif (suite décroissante).",
          "Exemple croissant : **2, 5, 8, 11, ?** → pas = +3 → terme suivant = **14**",
          "Exemple décroissant : **100, 90, 80, ?** → pas = −10 → terme suivant = **70**",
        ],
        en: [
          "A **number sequence** is an ordered list where each term is found by applying the same rule.",
          "To find the rule, calculate the difference between two consecutive terms — that is the **step**.",
          "The step can be positive (increasing sequence) or negative (decreasing sequence).",
          "Increasing example: **2, 5, 8, 11, ?** → step = +3 → next term = **14**",
          "Decreasing example: **100, 90, 80, ?** → step = −10 → next term = **70**",
        ],
        ar: [
          "**المتتالية العددية** قائمة مرتبة تُحسب فيها كل حلقة بتطبيق نفس القاعدة.",
          "لإيجاد القاعدة، احسب الفرق بين حلقتين متتاليتين — هذا هو **الخطوة**.",
          "يمكن أن تكون الخطوة موجبة (متتالية تصاعدية) أو سالبة (تنازلية).",
          "مثال تصاعدي: **2, 5, 8, 11, ?** → خطوة = +3 → الحد التالي = **14**",
          "مثال تنازلي: **100, 90, 80, ?** → خطوة = −10 → الحد التالي = **70**",
        ],
        fa: [
          "**دنباله عددی** فهرستی مرتب است که در آن هر جمله با اعمال همان قانون به دست می‌آید.",
          "برای یافتن قانون، تفاوت بین دو جملهٔ پشت‌سرهم را حساب کن — این **گام** است.",
          "گام می‌تواند مثبت (دنبالهٔ صعودی) یا منفی (دنبالهٔ نزولی) باشد.",
          "مثال صعودی: **2, 5, 8, 11, ?** → گام = +3 → جملهٔ بعدی = **14**",
          "مثال نزولی: **100, 90, 80, ?** → گام = −10 → جملهٔ بعدی = **70**",
        ],
        ti: [
          "**ተኸታታሊ ቁጽሪ** ስርዓታዊ ዝርዝር ኣኃዝቲ እዩ፤ ነፍሲ ወከፍ ቁጽሪ ብሓደ ሕጊ ይርከብ።",
          "ሕጊ ንምርካብ፡ ኣብ ክልተ ተኸታተምቲ ናይ ደገ ኣኃዝቲ ፍልልይ ሓስብ — ንሱ **ስጉምቲ** ይበሃል።",
          "ስጉምቲ ኣወንታዊ (ዝዓቢ ተኸታታሊ) ወይ ኣሉታዊ (ዝነኪ ተኸታታሊ) ክኸውን ይኽእል።",
          "ኣወንታዊ ኣብነት: **2, 5, 8, 11, ?** → ስጉምቲ = +3 → ዝቕጽል ቁጽሪ = **14**",
          "ኣሉታዊ ኣብነት: **100, 90, 80, ?** → ስጉምቲ = −10 → ዝቕጽል ቁጽሪ = **70**",
        ],
        uk: [
          "**Числова послідовність** — це впорядкований список, де кожен член отримується за однаковим правилом.",
          "Щоб знайти правило, обчисли різницю між двома сусідніми членами — це **крок**.",
          "Крок може бути позитивним (зростаюча послідовність) або від'ємним (спадаюча).",
          "Приклад зростаючої: **2, 5, 8, 11, ?** → крок = +3 → наступний член = **14**",
          "Приклад спадаючої: **100, 90, 80, ?** → крок = −10 → наступний член = **70**",
        ],
      },
    },
    exercises: [
      {
        id: "a15-1",
        promptFr: "Suite : 3, 6, 9, 12, ? (écris le terme suivant)",
        promptPivot: { en: "Sequence: 3, 6, 9, 12, ? (write the next term)" },
        type: "number",
        acceptable: ["15"],
      },
      {
        id: "a15-2",
        promptFr: "Suite : 50, 45, 40, 35, ?",
        promptPivot: { en: "Sequence: 50, 45, 40, 35, ?" },
        type: "number",
        acceptable: ["30"],
      },
      {
        id: "a15-3",
        promptFr: "Suite : 100, 200, 300, 400, ?",
        promptPivot: { en: "Sequence: 100, 200, 300, 400, ?" },
        type: "number",
        acceptable: ["500"],
      },
    ],
  },
];

export function getA1Lesson(submoduleId: string): MathSubmoduleLesson | undefined {
  return MATH_A1_LESSONS.find((l) => l.submoduleId === submoduleId);
}
