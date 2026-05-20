import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A10_5_LESSON: MathSubmoduleLesson = {
    submoduleId: "A10-5",
    submoduleCode: "A10.5",
    theory: {
      title: {
        fr: "Équations avec fractions",
        en: "Equations with fractions",
        ar: "معادلات بالكسور",
        fa: "معادلات با کسر",
        ti: "ምዕርርያ ምስ ምምቅቅዮ",
        uk: "Рівняння з дробами",
      },
      paragraphs: {
        fr: [
          "Pour éliminer les fractions, on multiplie tous les termes par le dénominateur commun (ou le PPCM des dénominateurs).",
          "Exemple : x/2 + 3 = 7 → multiplie par 2 → x + 6 = 14 → x = 8.",
          "Exemple avec deux fractions : x/3 + x/6 = 5 → PPCM(3,6) = 6 → multiplie par 6 → 2x + x = 30 → 3x = 30 → x = 10.",
          "Vérification indispensable : remplace x dans l'équation originale pour valider.",
        ],
        en: [
          "To eliminate fractions, multiply all terms by the common denominator (or LCM of denominators).",
          "Example: x/2 + 3 = 7 → multiply by 2 → x + 6 = 14 → x = 8.",
          "Two fractions: x/3 + x/6 = 5 → LCM = 6 → multiply by 6 → 3x = 30 → x = 10.",
          "Always check by substituting back.",
        ],
        ar: [
          "لإزالة الكسور نضرب جميع الحدود بالمقام المشترك (أو مضاعف مشترك أصغر).",
          "مثال: x/2 + 3 = 7 → اضرب في 2 → x = 8.",
          "كسران: x/3 + x/6 = 5 → م.م.أ = 6 → 3x = 30 → x = 10.",
          "تحقق دائماً بالتعويض.",
        ],
        fa: [
          "برای حذف کسرها همه جملات را در مخرج مشترک (یا م.م.م مخرج‌ها) ضرب می‌کنیم.",
          "مثال: x/2 + 3 = 7 → ضرب در 2 → x = 8.",
          "دو کسر: x/3 + x/6 = 5 → م.م.م = 6 → 3x = 30 → x = 10.",
          "همیشه با جایگذاری تأیید کن.",
        ],
        ti: [
          "ምምቅቅዮ ንምኻናን ኩሉ ወጽዓ ብናይ ሓባር ዴኖሚነተር ምርባሕ.",
          "ምሳሌ: x/2 + 3 = 7 → ብ 2 ምርባሕ → x = 8.",
          "ክልተ ምምቅቅዮ: x/3 + x/6 = 5 → 3x = 30 → x = 10.",
          "ብምትካእ ምፍሳሽ ምፍተሻ ኣይትረስዕ.",
        ],
        uk: [
          "Щоб позбутися дробів, перемножити всі члени на спільний знаменник.",
          "Приклад: x/2 + 3 = 7 → множимо на 2 → x + 6 = 14 → x = 8.",
          "Два дроби: x/3 + x/6 = 5 → НСК = 6 → 3x = 30 → x = 10.",
          "Обов'язково перевіряти підстановкою.",
        ],
      },
    },
    exercises: [
      { id: "a10-5-e1", promptFr: "Résous x/3 = 4.", type: "number", acceptable: ["12"] },
      { id: "a10-5-e2", promptFr: "Résous x/2 + 1 = 5.", type: "number", acceptable: ["8"] },
      { id: "a10-5-e3", promptFr: "Résous x/4 + x/2 = 6.", type: "number", acceptable: ["8"] },
      { id: "a10-5-e4", promptFr: "Résous 2x/3 = 8.", type: "number", acceptable: ["12"] },
      { id: "a10-5-e5", promptFr: "Résous x/5 + 2 = x/2 − 1 (multiplie par 10).", type: "number", acceptable: ["30"] },
    ],
  };
