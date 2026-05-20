import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A10_2_LESSON: MathSubmoduleLesson = {
    submoduleId: "A10-2",
    submoduleCode: "A10.2",
    theory: {
      title: {
        fr: "Résolution : ax = b",
        en: "Solving: ax = b",
        ar: "الحل: ax = b",
        fa: "حل: ax = b",
        ti: "ምፍታሕ: ax = b",
        uk: "Розв'язання: ax = b",
      },
      paragraphs: {
        fr: [
          "La forme ax = b se résout en divisant les deux membres par a (a ≠ 0) : x = b/a.",
          "Exemple : 3x = 15 → x = 15/3 = 5. Vérification : 3 × 5 = 15 ✓.",
          "Si a est négatif, on divise par a négatif : −4x = 20 → x = 20/(−4) = −5.",
          "Cas particulier : si a = 0 et b = 0, tout nombre est solution. Si a = 0 et b ≠ 0, il n'y a pas de solution.",
        ],
        en: [
          "The form ax = b is solved by dividing both sides by a (a ≠ 0): x = b/a.",
          "Example: 3x = 15 → x = 15/3 = 5. Check: 3 × 5 = 15 ✓.",
          "If a is negative: −4x = 20 → x = 20/(−4) = −5.",
          "Special case: if a = 0 and b = 0, every number is a solution; if a = 0 and b ≠ 0, no solution exists.",
        ],
        ar: [
          "الشكل ax = b يُحل بقسمة الطرفين على a (a ≠ 0): x = b/a.",
          "مثال: 3x = 15 → x = 5. التحقق: 3 × 5 = 15 ✓.",
          "إذا كان a سالباً: −4x = 20 → x = −5.",
          "حالة خاصة: إذا a = 0 وb = 0، كل عدد حل؛ إذا a = 0 وb ≠ 0، لا يوجد حل.",
        ],
        fa: [
          "فرم ax = b با تقسیم هر دو طرف بر a (a ≠ 0) حل می‌شود: x = b/a.",
          "مثال: 3x = 15 → x = 5. تأیید: 3 × 5 = 15 ✓.",
          "اگر a منفی باشد: −4x = 20 → x = −5.",
          "حالت خاص: اگر a = 0 و b = 0، هر عددی جواب است؛ اگر a = 0 و b ≠ 0، جوابی ندارد.",
        ],
        ti: [
          "ax = b ክልቲ ሸነኽ ብ a (a ≠ 0) ምምቃሉ: x = b/a.",
          "ምሳሌ: 3x = 15 → x = 5. ፍተሻ: 3 × 5 = 15 ✓.",
          "a ኣሉታዊ ምስ ዝኸውን: −4x = 20 → x = −5.",
          "ፍሉይ ኩነት: a = 0 ን b = 0 ምስ ዝኸውን ዝኾነ ቁጽሪ ፍትሒ ዩ.",
        ],
        uk: [
          "Форма ax = b розв'язується діленням обох частин на a (a ≠ 0): x = b/a.",
          "Приклад: 3x = 15 → x = 5. Перевірка: 3 × 5 = 15 ✓.",
          "Якщо a від'ємне: −4x = 20 → x = −5.",
          "Особливий випадок: якщо a = 0 і b = 0 — будь-яке число є розв'язком; якщо a = 0 і b ≠ 0 — розв'язків немає.",
        ],
      },
    },
    exercises: [
      { id: "a10-2-e1", promptFr: "Résous 5x = 35.", type: "number", acceptable: ["7"] },
      { id: "a10-2-e2", promptFr: "Résous −3x = 12.", type: "number", acceptable: ["-4", "−4"] },
      { id: "a10-2-e3", promptFr: "Résous 7x = 0.", type: "number", acceptable: ["0"] },
      { id: "a10-2-e4", promptFr: "Résous x/3 = 6.", type: "number", acceptable: ["18"] },
      { id: "a10-2-e5", promptFr: "Résous 4x = 10 (donne x sous forme décimale).", type: "short_text", acceptable: ["2,5", "2.5"] },
    ],
  };
