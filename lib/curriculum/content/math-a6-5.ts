import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A6_5_LESSON: MathSubmoduleLesson = {
    submoduleId: "A6-5",
    submoduleCode: "A6.5",
    theory: {
      title: { fr: "Tableau de proportionnalité", en: "Proportionality table", ar: "جدول التناسب", fa: "جدول تناسب", ti: "ሰንጠረዥ ናይ ምቅዳድ", uk: "Таблиця пропорційності" },
      paragraphs: {
        fr: [
          "Deux grandeurs sont proportionnelles si leur rapport est constant. Dans un tableau de proportionnalité, on peut passer d'une ligne à l'autre en multipliant ou divisant par le même nombre (coefficient de proportionnalité).",
          "Exemple : si 3 stylos coûtent 6 CHF, alors 1 stylo coûte 2 CHF (coefficient = 2), et 7 stylos coûtent 14 CHF.",
          "Pour vérifier la proportionnalité : les produits en croix doivent être égaux. Si a/b = c/d, alors a × d = b × c.",
        ],
        en: [
          "Two quantities are proportional if their ratio is constant. In a proportionality table, you can move from one row to another by multiplying or dividing by the same number.",
          "Example: if 3 pens cost 6 CHF, then 1 pen costs 2 CHF (coefficient = 2), and 7 pens cost 14 CHF.",
          "To verify proportionality: cross products must be equal. If a/b = c/d, then a × d = b × c.",
        ],
        ar: [
          "كميتان تتناسبان إذا كانت نسبتهما ثابتة. في جدول التناسب، يمكن الانتقال من سطر لآخر بضرب أو قسمة العدد نفسه.",
          "مثال: إذا كانت 3 أقلام تكلف 6 فرنك، فقلم واحد يكلف 2 فرنك (المعامل = 2)، و7 أقلام تكلف 14 فرنكًا.",
          "للتحقق من التناسب: الضرب الأفقي يجب أن يكون متساويًا. إذا كان a/b = c/d، فـ a × d = b × c.",
        ],
        fa: [
          "دو کمیت متناسبند اگر نسبتشان ثابت باشد. در جدول تناسب می‌توان از یک سطر به سطر دیگر با ضرب یا تقسیم یک عدد ثابت رفت.",
          "مثال: اگر ۳ قلم ۶ فرانک باشد، یک قلم ۲ فرانک است (ضریب = ۲)، و ۷ قلم ۱۴ فرانک.",
          "برای بررسی تناسب: حاصل‌ضرب‌های ضربدری باید برابر باشند. اگر a/b = c/d، پس a × d = b × c.",
        ],
        ti: [
          "ክልተ ዓቐናት ምቅዳድ ናይ ቈጸታኦም ዝተጸበየ ምስ ዝኾነ ምቅዳዳዊ ይብሃሉ። ናይ ምቅዳድ ሰንጠረዥ ሓደ ሰሪ ካብ ካሊኡ ብሓደ ዘርፊ ምስ ምካፋፍ ምቅዳዳዊ ኮይኑ ይቕጽል።",
          "ኣብነት: 3 ቃሊም 6 CHF ዋጋ ዘለዎ እንተኾነ 1 ቃሊም 2 CHF (ዘርፊ = 2) 7 ቃሊም ድማ 14 CHF።",
          "ምቅዳድ ምርጋጸ: ናይ ሳጻሊ ዘርፊ ማዕረ ኣብ ምምጻኡ። a/b = c/d ምስ ዝኾነ a × d = b × c.",
        ],
        uk: [
          "Дві величини пропорційні, якщо їх відношення постійне. У таблиці пропорційності від одного рядка до іншого переходять множенням або діленням на одне й те саме число.",
          "Приклад: якщо 3 ручки коштують 6 CHF, то 1 ручка — 2 CHF (коефіцієнт = 2), а 7 ручок — 14 CHF.",
          "Перевірка пропорційності: добутки навхрест рівні. Якщо a/b = c/d, то a × d = b × c.",
        ],
      },
    },
    exercises: [
      { id: "a6-5-e1", promptFr: "3 stylos coûtent 6 CHF. Combien coûtent 7 stylos ?", type: "number", acceptable: ["14"] },
      { id: "a6-5-e2", promptFr: "Quel est le coefficient de proportionnalité si 5 m de tissu coûtent 20 CHF ?", type: "number", acceptable: ["4"] },
      { id: "a6-5-e3", promptFr: "Si 4 kg coûtent 12 CHF, combien coûtent 9 kg ?", type: "number", acceptable: ["27"] },
      { id: "a6-5-e4", promptFr: "Est-ce proportionnel : 2/6 = 3/9 ? (oui/non)", type: "short_text", acceptable: ["oui", "yes"] },
      { id: "a6-5-e5", promptFr: "Un robinet remplit 3 litres en 5 minutes. Combien de litres en 20 minutes ?", type: "number", acceptable: ["12"] },
    ],
  };
