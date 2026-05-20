import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A4_7_LESSON: MathSubmoduleLesson = {
  submoduleId: "A4-7",
  submoduleCode: "A4.7",
  theory: {
    title: { fr: "Multiplication de fractions", en: "Multiplication of fractions", ar: "ضرب الكسور", fa: "ضرب کسرها", ti: "ዘርፊ ፍርቂ", uk: "Множення дробів" },
    paragraphs: {
      fr: [
        "Pour multiplier deux fractions, on multiplie les numérateurs entre eux et les dénominateurs entre eux. (a/b) × (c/d) = (a×c) / (b×d).",
        "Exemple : (2/3) × (3/4) = (2×3)/(3×4) = 6/12 = 1/2 (simplifié).",
        "Avant de multiplier, on peut simplifier en croix : si un numérateur et un dénominateur ont un facteur commun, on les simplifie. Exemple : (2/3) × (3/4) → on peut simplifier 3 en haut et 3 en bas → (2/1) × (1/4) = 2/4 = 1/2.",
      ],
      en: [
        "To multiply two fractions, multiply the numerators and multiply the denominators. (a/b) × (c/d) = (a×c)/(b×d).",
        "Example: (2/3) × (3/4) = 6/12 = 1/2 (simplified).",
        "Before multiplying, you can cross-simplify: if a numerator and denominator share a common factor, simplify them. Example: simplify the 3s → (2/1) × (1/4) = 2/4 = 1/2.",
      ],
      ar: [
        "لضرب كسرين، نضرب البسطين معًا والمقامين معًا. (أ/ب) × (ج/د) = (أ×ج)/(ب×د).",
        "مثال: (2/3) × (3/4) = 6/12 = 1/2 (مبسّط).",
        "قبل الضرب، يمكن التبسيط القطري: إذا تشارك بسط ومقام عاملًا مشتركًا نبسّطهما. مثال: تبسيط 3 في الأعلى و3 في الأسفل → (2/1) × (1/4) = 2/4 = 1/2.",
      ],
      fa: [
        "برای ضرب دو کسر، صورت‌ها را در هم و مخرج‌ها را در هم ضرب کنید. (a/b) × (c/d) = (a×c)/(b×d).",
        "مثال: (۲/۳) × (۳/۴) = ۶/۱۲ = ۱/۲ (ساده شده).",
        "قبل از ضرب، می‌توان ساده‌سازی ضربدری کرد: اگر صورت و مخرج عامل مشترک دارند، ساده کنید. مثال: ساده‌سازی ۳ بالا و ۳ پایین → (۲/۱) × (۱/۴) = ۲/۴ = ۱/۲.",
      ],
      ti: [
        "ክልተ ፍርቂ ምዝርፋፍ ናይ ዝለዓለ ቁጽርታት ምዝርፋፍ ምስ ናይ ሚዛን ቁጽርታት ምዝርፋፍ ማለት እዩ። (a/b) × (c/d) = (a×c)/(b×d).",
        "ኣብነት: (2/3) × (3/4) = 6/12 = 1/2 (ቅጸ ዝሓሸ).",
        "ቅድሚ ምዝርፋፍ ዘርፊ ቀለጣ ምቅጻር ይከኣል። ኣብነት: 3 ዝለዓለ ምስ 3 ሚዛን ምቅጻር → (2/1) × (1/4) = 2/4 = 1/2.",
      ],
      uk: [
        "Щоб помножити два дроби, перемножте чисельники і перемножте знаменники. (a/b) × (c/d) = (a×c)/(b×d).",
        "Приклад: (2/3) × (3/4) = 6/12 = 1/2 (спрощено).",
        "Перед множенням можна скорочувати хрест-навхрест: якщо чисельник і знаменник мають спільний множник, скоротіть. Приклад: скорочуємо 3 — (2/1) × (1/4) = 2/4 = 1/2.",
      ],
    },
  },
  exercises: [
    { id: "a4-7-e1", promptFr: "Calculez (2/3) × (3/4) (simplifiez).", type: "short_text", acceptable: ["1/2", "6/12"] },
    { id: "a4-7-e2", promptFr: "Calculez (3/5) × (5/9) (simplifiez).", type: "short_text", acceptable: ["1/3", "15/45"] },
    { id: "a4-7-e3", promptFr: "Calculez (4/7) × (7/8) (simplifiez).", type: "short_text", acceptable: ["1/2", "4/8"] },
    { id: "a4-7-e4", promptFr: "Calculez (2/5) × (10/3).", type: "short_text", acceptable: ["4/3", "20/15"] },
    { id: "a4-7-e5", promptFr: "Calculez (3/4) × (8/9) (simplifiez).", type: "short_text", acceptable: ["2/3", "24/36"] },
  ],
};
