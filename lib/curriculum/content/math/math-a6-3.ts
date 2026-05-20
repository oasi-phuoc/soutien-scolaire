import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A6_3_LESSON: MathSubmoduleLesson = {
    submoduleId: "A6-3",
    submoduleCode: "A6.3",
    theory: {
      title: { fr: "Trouver le pourcentage", en: "Finding the percentage", ar: "إيجاد النسبة المئوية", fa: "یافتن درصد", ti: "ናይ ሚእቲ ክፋል ምርካብ", uk: "Знаходження відсотка" },
      paragraphs: {
        fr: [
          "Pour trouver quel pourcentage représente une partie par rapport à un total, on divise la partie par le total et on multiplie par 100.",
          "Formule : % = (partie / total) × 100.",
          "Exemple : 18 élèves sur 24 ont réussi → % de réussite = (18/24) × 100 = 0,75 × 100 = 75%.",
        ],
        en: [
          "To find what percentage a part represents of a total, divide the part by the total and multiply by 100.",
          "Formula: % = (part / total) × 100.",
          "Example: 18 out of 24 students passed → % passing = (18/24) × 100 = 75%.",
        ],
        ar: [
          "لإيجاد النسبة المئوية لجزء من إجمالي، نقسم الجزء على الإجمالي ونضرب في 100.",
          "الصيغة: % = (الجزء / الإجمالي) × 100.",
          "مثال: 18 طالبًا من 24 نجحوا → % النجاح = (18/24) × 100 = 75%.",
        ],
        fa: [
          "برای یافتن درصد یک بخش نسبت به کل، بخش را بر کل تقسیم و در ۱۰۰ ضرب کنید.",
          "فرمول: ٪ = (بخش / کل) × ۱۰۰.",
          "مثال: ۱۸ از ۲۴ دانش‌آموز قبول شدند → ٪ قبولی = (۱۸/۲۴) × ۱۰۰ = ۷۵٪.",
        ],
        ti: [
          "ናይ ሓደ ምሉእ ክፋል ናይ ሚእቲ ክፋል ምርካብ ክፋሉ ብምሉኡ ኣካፊልካ ብ 100 ምዝርፋፍ ማለት እዩ።",
          "ቅጥዒ: % = (ክፋሉ / ምሉኡ) × 100.",
          "ኣብነት: 24 ካብ 18 ተምሃሮ ሓሊፎም → % ናይ ምሕላፍ = (18/24) × 100 = 75%.",
        ],
        uk: [
          "Щоб знайти, яким відсотком є частина від цілого, ділимо частину на ціле і множимо на 100.",
          "Формула: % = (частина / ціле) × 100.",
          "Приклад: 18 з 24 учнів склали → % = (18/24) × 100 = 75%.",
        ],
      },
    },
    exercises: [
      { id: "a6-3-e1", promptFr: "18 élèves sur 24 ont réussi. Quel est le pourcentage de réussite ?", type: "short_text", acceptable: ["75%", "75"] },
      { id: "a6-3-e2", promptFr: "45 sur 60. Quel pourcentage ?", type: "short_text", acceptable: ["75%", "75"] },
      { id: "a6-3-e3", promptFr: "30 sur 120. Quel pourcentage ?", type: "short_text", acceptable: ["25%", "25"] },
      { id: "a6-3-e4", promptFr: "7 sur 20. Quel pourcentage ?", type: "short_text", acceptable: ["35%", "35"] },
      { id: "a6-3-e5", promptFr: "3 sur 4. Quel pourcentage ?", type: "short_text", acceptable: ["75%", "75"] },
    ],
  };
