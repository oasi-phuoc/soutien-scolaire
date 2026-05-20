import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A10_3_LESSON: MathSubmoduleLesson = {
    submoduleId: "A10-3",
    submoduleCode: "A10.3",
    theory: {
      title: {
        fr: "Résolution : ax + b = c",
        en: "Solving: ax + b = c",
        ar: "الحل: ax + b = c",
        fa: "حل: ax + b = c",
        ti: "ምፍታሕ: ax + b = c",
        uk: "Розв'язання: ax + b = c",
      },
      paragraphs: {
        fr: [
          "Méthode en deux étapes : (1) isoler le terme en x en soustrayant b des deux membres ; (2) diviser par a.",
          "Exemple : 2x + 5 = 13 → 2x = 13 − 5 = 8 → x = 8/2 = 4.",
          "Si des termes en x apparaissent des deux côtés, on les regroupe d'un côté : 3x + 2 = x + 10 → 3x − x = 10 − 2 → 2x = 8 → x = 4.",
          "Toujours vérifier en substituant la valeur trouvée dans l'équation originale.",
        ],
        en: [
          "Two-step method: (1) isolate the x-term by subtracting b from both sides; (2) divide by a.",
          "Example: 2x + 5 = 13 → 2x = 8 → x = 4.",
          "If x appears on both sides, collect them: 3x + 2 = x + 10 → 2x = 8 → x = 4.",
          "Always check by substituting the found value into the original equation.",
        ],
        ar: [
          "الطريقة بخطوتين: (1) عزل حد x بطرح b من الطرفين؛ (2) القسمة على a.",
          "مثال: 2x + 5 = 13 → 2x = 8 → x = 4.",
          "إذا ظهر x على الطرفين، نجمعه: 3x + 2 = x + 10 → 2x = 8 → x = 4.",
          "تحقق دائماً بالتعويض.",
        ],
        fa: [
          "روش دو مرحله‌ای: (1) جمله x را با تفریق b از هر دو طرف جدا کن؛ (2) بر a تقسیم کن.",
          "مثال: 2x + 5 = 13 → 2x = 8 → x = 4.",
          "اگر x در هر دو طرف ظاهر شد، جمع کن: 3x + 2 = x + 10 → 2x = 8 → x = 4.",
          "همیشه با جایگذاری مقدار یافته‌شده تأیید کن.",
        ],
        ti: [
          "ብክልተ ስጉምቲ ኣፈጻጽማ: (1) ብ b ካብ ክልቲ ሸነኽ ምቕናስ ናይ x ወጽዓ ምፍላይ; (2) ብ a ምምቃሉ.",
          "ምሳሌ: 2x + 5 = 13 → 2x = 8 → x = 4.",
          "x ኣብ ክልቲ ሸነኽ ምስ ዝህልው ምጥርናፍ: 3x + 2 = x + 10 → 2x = 8 → x = 4.",
          "ብምትካእ ምፍሳሽ ክትፍትሽ ኣይትረስዕ.",
        ],
        uk: [
          "Метод двох кроків: (1) виділити доданок із x, відніманням b від обох частин; (2) поділити на a.",
          "Приклад: 2x + 5 = 13 → 2x = 8 → x = 4.",
          "Якщо x є в обох частинах, зберемо їх: 3x + 2 = x + 10 → 2x = 8 → x = 4.",
          "Завжди перевіряти підстановкою знайденого значення.",
        ],
      },
    },
    exercises: [
      { id: "a10-3-e1", promptFr: "Résous 3x + 4 = 19.", type: "number", acceptable: ["5"] },
      { id: "a10-3-e2", promptFr: "Résous 2x − 7 = 11.", type: "number", acceptable: ["9"] },
      { id: "a10-3-e3", promptFr: "Résous 5x + 3 = 2x + 12.", type: "number", acceptable: ["3"] },
      { id: "a10-3-e4", promptFr: "Résous 4x − 2 = 10.", type: "number", acceptable: ["3"] },
      { id: "a10-3-e5", promptFr: "Résous 6x + 1 = 4x + 9.", type: "number", acceptable: ["4"] },
    ],
  };
