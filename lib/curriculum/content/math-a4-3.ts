import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A4_3_LESSON: MathSubmoduleLesson = {
    submoduleId: "A4-3",
    submoduleCode: "A4.3",
    theory: {
      title: { fr: "Fractions équivalentes", en: "Equivalent fractions", ar: "الكسور المتكافئة", fa: "کسرهای معادل", ti: "ማዕረ ፍርቂ", uk: "Рівні дроби" },
      paragraphs: {
        fr: [
          "Deux fractions sont équivalentes si elles ont la même valeur. On peut multiplier ou diviser le numérateur et le dénominateur par le même nombre (non nul) sans changer la valeur.",
          "Exemple d'agrandissement : 1/2 = 2/4 = 3/6 = 4/8 (on multiplie par 2, 3, 4…).",
          "Exemple de réduction : 6/8 = 3/4 (on divise numérateur et dénominateur par 2).",
          "Simplifier une fraction, c'est la réduire au plus petit numérateur et dénominateur possibles en divisant par le PGCD.",
        ],
        en: [
          "Two fractions are equivalent if they have the same value. We can multiply or divide both numerator and denominator by the same nonzero number without changing the value.",
          "Enlarging: 1/2 = 2/4 = 3/6 = 4/8 (multiply by 2, 3, 4…).",
          "Reducing: 6/8 = 3/4 (divide numerator and denominator by 2).",
          "Simplifying means reducing to the smallest possible numerator and denominator by dividing by the GCD.",
        ],
        ar: [
          "كسران متكافئان إذا كانا متساويي القيمة. يمكن ضرب البسط والمقام بنفس العدد أو قسمتهما عليه دون تغيير القيمة.",
          "توسيع: 1/2 = 2/4 = 3/6 = 4/8 (نضرب في 2، 3، 4…).",
          "اختزال: 6/8 = 3/4 (نقسم البسط والمقام على 2).",
          "تبسيط الكسر يعني تحويله إلى أصغر بسط ومقام ممكنين بالقسمة على ق.م.أ.",
        ],
        fa: [
          "دو کسر معادلند اگر مقدار یکسانی داشته باشند. می‌توان صورت و مخرج را با یک عدد غیر صفر ضرب یا تقسیم کرد بدون اینکه مقدار تغییر کند.",
          "بزرگ‌سازی: ۱/۲ = ۲/۴ = ۳/۶ = ۴/۸ (ضرب در ۲، ۳، ۴…).",
          "کوچک‌سازی: ۶/۸ = ۳/۴ (صورت و مخرج را بر ۲ تقسیم کنید).",
          "ساده کردن یعنی رساندن کسر به کوچکترین صورت و مخرج ممکن با تقسیم بر ب.م.م.",
        ],
        ti: [
          "ክልተ ፍርቂ ማዕረ ዋጋ ዘለዎም እንተኾነ ማዕረ ፍርቂ ይብሃሉ። ናይ ዝለዓለ ምስ ዝሕደር ቁጽሪ ብሓደ ቁጽሪ ዘርፍ ወይ ካፍሎ ዋጋ ኣይቀይርን።",
          "ዕቤት: 1/2 = 2/4 = 3/6 = 4/8 (ብ 2, 3, 4… ዘርፍ).",
          "ምጉዳልካ: 6/8 = 3/4 (ናይ ዝለዓለ ምስ ዝሕደር ቁጽሪ ብ 2 ካፍሎ).",
          "ምቅጻር ናይ ፍርቂ ብ PGCD ኣካፊልካ ናብ ዝነኣሰ ቁጽርታት ምምጻእ ማለት እዩ።",
        ],
        uk: [
          "Два дроби рівні, якщо вони мають однакове значення. Можна множити або ділити і чисельник, і знаменник на одне й те саме ненульове число, не змінюючи значення.",
          "Розширення: 1/2 = 2/4 = 3/6 = 4/8 (множимо на 2, 3, 4…).",
          "Скорочення: 6/8 = 3/4 (ділимо чисельник і знаменник на 2).",
          "Спрощення означає приведення до найменших можливих чисельника і знаменника діленням на НСД.",
        ],
      },
    },
    exercises: [
      { id: "a4-3-e1", promptFr: "Simplifiez 6/8.", type: "short_text", acceptable: ["3/4"] },
      { id: "a4-3-e2", promptFr: "Simplifiez 12/16.", type: "short_text", acceptable: ["3/4"] },
      { id: "a4-3-e3", promptFr: "Trouvez une fraction équivalente à 1/3 avec dénominateur 9.", type: "short_text", acceptable: ["3/9"] },
      { id: "a4-3-e4", promptFr: "Simplifiez 10/15.", type: "short_text", acceptable: ["2/3"] },
      { id: "a4-3-e5", promptFr: "Simplifiez 18/24.", type: "short_text", acceptable: ["3/4"] },
    ],
  };
