import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A13_1_LESSON: MathSubmoduleLesson = {
    submoduleId: "A13-1",
    submoduleCode: "A13.1",
    theory: {
      title: {
        fr: "Notion de fonction",
        en: "Notion of function",
        ar: "مفهوم الدالة",
        fa: "مفهوم تابع",
        ti: "ናይ ስራሕ ሓሳብ",
        uk: "Поняття функції",
      },
      paragraphs: {
        fr: [
          "Une fonction est une règle qui associe à chaque valeur d'entrée x une et une seule valeur de sortie y. On note f(x) = expression en x.",
          "Exemple : f(x) = 2x + 3. Pour x = 4 : f(4) = 2 × 4 + 3 = 11. L'image de 4 par f est 11.",
          "Vocabulaire : l'ensemble des valeurs d'entrée est le domaine (ou ensemble de départ). La valeur f(x) s'appelle l'image de x.",
          "Représentation : une fonction peut être représentée par un tableau de valeurs, une formule, ou un graphique.",
        ],
        en: [
          "A function is a rule that assigns exactly one output y to each input x. Written f(x) = expression in x.",
          "Example: f(x) = 2x + 3. For x = 4: f(4) = 11. The image of 4 under f is 11.",
          "Vocabulary: the set of inputs is the domain. f(x) is called the image of x.",
          "A function can be represented by a table of values, a formula, or a graph.",
        ],
        ar: [
          "الدالة قاعدة تربط كل قيمة إدخال x بقيمة إخراج واحدة. تُكتب f(x).",
          "مثال: f(x) = 2x + 3. لـ x = 4: f(4) = 11. صورة 4 بالدالة f هي 11.",
          "المفردات: مجموعة الإدخالات تُسمى المجال. f(x) تُسمى صورة x.",
          "يمكن تمثيل الدالة بجدول قيم أو صيغة أو رسم بياني.",
        ],
        fa: [
          "تابع قانونی است که به هر مقدار ورودی x دقیقاً یک خروجی y نسبت می‌دهد. نوشته می‌شود f(x).",
          "مثال: f(x) = 2x + 3. برای x = 4: f(4) = 11. تصویر 4 تحت f برابر 11 است.",
          "واژگان: مجموعه ورودی‌ها دامنه نامیده می‌شود. f(x) تصویر x نامیده می‌شود.",
          "تابع را می‌توان با جدول مقادیر، فرمول، یا نمودار نشان داد.",
        ],
        ti: [
          "ናይ ስራሕ ሕጊ ሓደ x ናብ ሓደ y ናይ ምምዳብ ሕጊ ዩ. ይጸሓፍ f(x).",
          "ምሳሌ: f(x) = 2x + 3. ምስ x = 4: f(4) = 11. ናይ 4 ናይ f ምስሊ 11 ዩ.",
          "ቃለ-ቃለ: ናይ ኣጸያፊ ቁጽርታት ዝርዝር ዶሜን ዩ ይብሃሉ. f(x) ናይ x ምስሊ ዩ.",
          "ናይ ስራሕ ምስ ናይ ዋጋ ሰሌዳ ወይ ቅጥዒ ወይ ስዕሊ ምርኣይ ዝከኣሉ ዩ.",
        ],
        uk: [
          "Функція — це правило, що кожному значенню входу x відповідає рівно одне значення виходу y. Записується f(x).",
          "Приклад: f(x) = 2x + 3. При x = 4: f(4) = 11. Образ числа 4 при f дорівнює 11.",
          "Словник: множина входів — область визначення. f(x) — образ x.",
          "Функцію можна задати таблицею значень, формулою або графіком.",
        ],
      },
    },
    exercises: [
      { id: "a13-1-e1", promptFr: "Pour f(x) = 3x − 1, calcule f(2).", type: "number", acceptable: ["5"] },
      { id: "a13-1-e2", promptFr: "Pour f(x) = x² + 1, calcule f(3).", type: "number", acceptable: ["10"] },
      { id: "a13-1-e3", promptFr: "Pour g(x) = 4x, calcule g(5).", type: "number", acceptable: ["20"] },
      { id: "a13-1-e4", promptFr: "Si f(x) = 2x + 1 et f(a) = 9, quelle est la valeur de a ?", type: "number", acceptable: ["4"] },
      { id: "a13-1-e5", promptFr: "Pour h(x) = −x + 7, calcule h(3).", type: "number", acceptable: ["4"] },
    ],
  };
