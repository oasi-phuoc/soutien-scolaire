import type { SubmoduleTrad } from "./trad-types";

export const TRAD_S2_2: SubmoduleTrad = {
  submoduleId: "S2-2",
  title: {
    fr: "Probabilité classique",
    en: "Classical Probability",
    ar: "الاحتمال الكلاسيكي",
    fa: "احتمال کلاسیک",
    ti: "ክላሲካዊ ዕድል",
    uk: "Класична імовірність",
  },
  paragraphs: {
    fr: [
          "La probabilité classique s'applique quand tous les résultats possibles sont équiprobables (même chance de se produire).",
          "Formule : P(A) = (nombre de résultats favorables à A) / (nombre total de résultats possibles) = Card(A) / Card(Ω).",
          "Exemples : P(obtenir 3 avec un dé) = 1/6. P(obtenir un nombre pair) = 3/6 = 1/2. P(obtenir ≥ 5) = 2/6 = 1/3.",
          "Propriétés : 0 ≤ P(A) ≤ 1 pour tout événement A. P(∅) = 0. P(Ω) = 1.",
          "Si P(A) = 0, l'événement est impossible. Si P(A) = 1, il est certain. Plus P(A) est proche de 1, plus l'événement est probable.",
        ],
    en: [
          "Classical probability applies when all outcomes are equally likely.",
          "Formula: P(A) = (number of outcomes favourable to A) / (total number of possible outcomes) = Card(A) / Card(Ω).",
          "Examples: P(rolling a 3) = 1/6. P(rolling an even number) = 3/6 = 1/2. P(rolling ≥ 5) = 2/6 = 1/3.",
          "Properties: 0 ≤ P(A) ≤ 1 for any event A. P(∅) = 0. P(Ω) = 1.",
          "If P(A) = 0, the event is impossible. If P(A) = 1, it is certain. The closer P(A) is to 1, the more likely the event.",
        ],
    ar: [
          "الاحتمال الكلاسيكي يُطبَّق حين تكون جميع النتائج متكافئة.",
          "الصيغة: P(A) = عدد النتائج الملائمة / مجموع النتائج الممكنة.",
          "أمثلة: P(الحصول على 3 بنرد) = 1/6. P(رقم زوجي) = 1/2. P(رقم ≥ 5) = 1/3.",
          "خصائص: 0 ≤ P(A) ≤ 1. P(∅) = 0. P(Ω) = 1.",
          "إذا كان P(A) = 0 فالحادثة مستحيلة. إذا كانت P(A) = 1 فهي مؤكدة.",
        ],
    fa: [
          "احتمال کلاسیک زمانی اعمال می‌شود که همه نتایج ممکن یکسان باشند.",
          "فرمول: P(A) = تعداد نتایج مطلوب / تعداد کل نتایج ممکن.",
          "مثال‌ها: P(دیدن ۳ با تاس) = ۱/۶. P(عدد زوج) = ۱/۲. P(عدد ≥ ۵) = ۱/۳.",
          "خواص: 0 ≤ P(A) ≤ 1. P(∅) = 0. P(Ω) = 1.",
          "اگر P(A) = 0 باشد، رویداد محال است. اگر P(A) = 1 باشد، قطعی است.",
        ],
    ti: [
          "ክላሲካዊ ዕድል ኩሎም ውጽኢታት ማዕረ ዕድል ምስ ዘለዎም ይጥቀሙሉ።",
          "ቅጥዒ: P(A) = ናይ A ዝሕጉስ ውጽኢታት / ጠቅላላ ክኾኑ ዝኽእሉ ውጽኢታት.",
          "ኣብነታት: P(3 ምርካብ ብቀለዓ) = 1/6. P(ሸፈተ ቁጽሪ) = 1/2. P(≥ 5) = 1/3.",
          "ባህርያት: 0 ≤ P(A) ≤ 1. P(∅) = 0. P(Ω) = 1.",
          "P(A) = 0 ምስ ዝኾን ፍጻሜ ዘይካኣል. P(A) = 1 ምስ ዝኾን ፍጻሜ ዘይተርፍ.",
        ],
    uk: [
          "Класична імовірність застосовується, коли всі результати рівноможливі.",
          "Формула: P(A) = (кількість сприятливих результатів) / (загальна кількість можливих результатів).",
          "Приклади: P(випадіння 3) = 1/6. P(парне число) = 3/6 = 1/2. P(≥ 5) = 2/6 = 1/3.",
          "Властивості: 0 ≤ P(A) ≤ 1. P(∅) = 0. P(Ω) = 1.",
          "Якщо P(A) = 0, подія неможлива. Якщо P(A) = 1, вона достовірна.",
        ],
  },
};
