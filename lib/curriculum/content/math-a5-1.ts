import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A5_1_LESSON: MathSubmoduleLesson = {
    submoduleId: "A5-1",
    submoduleCode: "A5.1",
    theory: {
      title: { fr: "Lire et écrire les décimaux", en: "Reading and writing decimals", ar: "قراءة وكتابة الأعداد العشرية", fa: "خواندن و نوشتن اعشار", ti: "ቁጽሪ ቪርጉላ ምንባብ ምጽሓፍ", uk: "Читання і запис десяткових чисел" },
      paragraphs: {
        fr: [
          "Les nombres décimaux contiennent une virgule. Ils servent à représenter des valeurs non entières. Un nombre décimal est composé d'une partie entière (avant la virgule) et d'une partie décimale (après la virgule).",
          "Exemple : 4 321,98 — partie entière : 4 321 (milliers, centaines, dizaines, unités) — partie décimale : 98 (dixièmes, centièmes).",
          "Valeur de position : dans 4 321,98 → le 9 vaut 9 dixièmes (0,9) et le 8 vaut 8 centièmes (0,08).",
          "On peut ajouter des zéros à droite de la virgule sans changer la valeur : 4,2 = 4,20 = 4,200.",
        ],
        en: [
          "Decimal numbers contain a decimal point. They represent non-integer values. A decimal number has an integer part (before the decimal point) and a decimal part (after).",
          "Example: 4 321.98 — integer part: 4 321 (thousands, hundreds, tens, units) — decimal part: 98 (tenths, hundredths).",
          "Place value: in 4 321.98 → the 9 is worth 9 tenths (0.9) and the 8 is worth 8 hundredths (0.08).",
          "Adding zeros to the right of the decimal point does not change the value: 4.2 = 4.20 = 4.200.",
        ],
        ar: [
          "الأعداد العشرية تحتوي على فاصلة. تمثّل قيمًا غير صحيحة. يتكون العدد العشري من جزء صحيح (قبل الفاصلة) وجزء عشري (بعدها).",
          "مثال: 4 321,98 — الجزء الصحيح: 4 321 (آلاف، مئات، عشرات، آحاد) — الجزء العشري: 98 (أعشار، أجزاء من المئة).",
          "قيمة المنزلة: في 4 321,98 → 9 تساوي 9 أعشار (0,9) و 8 تساوي 8 أجزاء من مئة (0,08).",
          "إضافة أصفار يمين الفاصلة لا تغير القيمة: 4,2 = 4,20 = 4,200.",
        ],
        fa: [
          "اعداد اعشاری حاوی ممیز هستند. مقادیر غیرصحیح را نمایش می‌دهند. عدد اعشاری از بخش صحیح (قبل از ممیز) و بخش اعشاری (بعد از آن) تشکیل شده است.",
          "مثال: ۴ ۳۲۱,۹۸ — بخش صحیح: ۴ ۳۲۱ (هزارها، صدها، دهگان‌ها، یکان‌ها) — بخش اعشاری: ۹۸ (دهم، صدم).",
          "ارزش مکانی: در ۴ ۳۲۱,۹۸ → عدد ۹ برابر ۹ دهم (۰,۹) و عدد ۸ برابر ۸ صدم (۰,۰۸) است.",
          "اضافه کردن صفر به راست ممیز مقدار را تغییر نمی‌دهد: ۴,۲ = ۴,۲۰ = ۴,۲۰۰.",
        ],
        ti: [
          "ቁጽሪ ቪርጉላ ቪርጉላ ዘለዎ ቁጽሪ እዩ። ዘይምሉእ ዋጋ ዝገልጽ እዩ። ቁጽሪ ቪርጉላ ምሉእ ክፋል (ቀዲሙ ቪርጉላ) ምስ ቁጽሪ ቪርጉላ ክፋል (ድሕሪ ቪርጉላ) ኣሎ።",
          "ኣብነት: 4 321,98 — ምሉእ ክፋል: 4 321 (ሽሕ, ሚእቲ, ዓሰርተ, ኣሃዱ) — ቁጽሪ ቪርጉላ ክፋል: 98 (ዓሰርተኛ, ሚእቲኛ).",
          "ቦታ ዋጋ: 4 321,98 → 9 9 ዓሰርተኛ (0,9) 8 8 ሚእቲኛ (0,08) ዋጋ ኣለዎ.",
          "ናብ ቀኝ ናይ ቪርጉላ ዜሮ ምወሳኽ ዋጋ ኣይቅይርን: 4,2 = 4,20 = 4,200.",
        ],
        uk: [
          "Десяткові числа містять кому. Вони представляють нецілі значення. Десяткове число складається з цілої частини (перед комою) і десяткової частини (після коми).",
          "Приклад: 4 321,98 — ціла частина: 4 321 (тисячі, сотні, десятки, одиниці) — десяткова: 98 (десяті, соті).",
          "Позиційне значення: у 4 321,98 → 9 коштує 9 десятих (0,9), а 8 — 8 сотих (0,08).",
          "Додавання нулів праворуч від коми не змінює значення: 4,2 = 4,20 = 4,200.",
        ],
      },
    },
    exercises: [
      { id: "a5-1-e1", promptFr: "Dans 3,47, quel est le chiffre des dixièmes ?", type: "number", acceptable: ["4"] },
      { id: "a5-1-e2", promptFr: "Dans 5,82, quel est le chiffre des centièmes ?", type: "number", acceptable: ["2"] },
      { id: "a5-1-e3", promptFr: "4,20 est-il égal à 4,2 ? (oui/non)", type: "short_text", acceptable: ["oui", "yes"] },
      { id: "a5-1-e4", promptFr: "Écrivez 3 unités, 5 dixièmes et 7 centièmes sous forme décimale.", type: "short_text", acceptable: ["3,57", "3.57"] },
      { id: "a5-1-e5", promptFr: "Dans 12,345, quel est le chiffre des millièmes ?", type: "number", acceptable: ["5"] },
    ],
  };
