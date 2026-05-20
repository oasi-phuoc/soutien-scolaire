import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A3_6_LESSON: MathSubmoduleLesson = {
    submoduleId: "A3-6",
    submoduleCode: "A3.6",
    theory: {
      title: {
        fr: "PGCD et PPCM",
        en: "GCD and LCM",
        ar: "القاسم المشترك الأكبر والمضاعف المشترك الأصغر",
        fa: "بزرگترین مقسوم‌علیه مشترک و کوچکترین مضرب مشترک",
        ti: "ዝዓቢ ሓባራዊ ካፋሊ ምስ ዝነኣሰ ሓባራዊ ብዙሕ",
        uk: "НСД та НСК",
      },
      paragraphs: {
        fr: [
          "Le PGCD (Plus Grand Commun Diviseur) de deux nombres est le plus grand entier qui divise exactement les deux nombres. Exemple : PGCD(12, 18) = 6, car 6 divise 12 et 18, et c'est le plus grand tel diviseur.",
          "Pour trouver le PGCD : listez les diviseurs de chaque nombre et trouvez le plus grand commun. Exemple : diviseurs de 12 = {1,2,3,4,6,12} ; diviseurs de 18 = {1,2,3,6,9,18} → communs : {1,2,3,6} → PGCD = 6.",
          "Le PPCM (Plus Petit Commun Multiple) de deux nombres est le plus petit entier positif qui est multiple des deux nombres. Exemple : PPCM(4, 6) = 12, car 12 est le plus petit multiple à la fois de 4 et de 6.",
          "Le PGCD et le PPCM sont reliés : PGCD(a,b) × PPCM(a,b) = a × b. Exemple : 6 × 12 = 72 = 12 × 6.",
        ],
        en: [
          "The GCD (Greatest Common Divisor) of two numbers is the largest integer that divides both exactly. Example: GCD(12, 18) = 6.",
          "To find the GCD: list the divisors of each number and find the largest common one. Example: divisors of 12={1,2,3,4,6,12}; of 18={1,2,3,6,9,18} → common: {1,2,3,6} → GCD=6.",
          "The LCM (Least Common Multiple) is the smallest positive integer that is a multiple of both numbers. Example: LCM(4,6)=12.",
          "GCD and LCM are related: GCD(a,b) × LCM(a,b) = a × b. Example: 6 × 12 = 72 = 12 × 6.",
        ],
        ar: [
          "القاسم المشترك الأكبر (ق.م.أ) لعددين هو أكبر عدد صحيح يقسم العددين معًا. مثال: ق.م.أ(12، 18) = 6.",
          "لإيجاد ق.م.أ: سرد قواسم كل عدد وإيجاد أكبر مشترك. مثال: قواسم 12={1,2,3,4,6,12}، قواسم 18={1,2,3,6,9,18} → المشتركة: {1,2,3,6} → ق.م.أ=6.",
          "المضاعف المشترك الأصغر (م.م.أ) هو أصغر عدد صحيح موجب يكون مضاعفًا للعددين معًا. مثال: م.م.أ(4، 6) = 12.",
          "ق.م.أ و م.م.أ مترابطان: ق.م.أ(أ،ب) × م.م.أ(أ،ب) = أ × ب. مثال: 6 × 12 = 72 = 12 × 6.",
        ],
        fa: [
          "بزرگترین مقسوم‌علیه مشترک (ب.م.م) دو عدد، بزرگترین عدد صحیحی است که هر دو عدد را بدون باقیمانده تقسیم می‌کند. مثال: ب.م.م(۱۲، ۱۸) = ۶.",
          "برای یافتن ب.م.م: مقسوم‌علیه‌های هر عدد را فهرست کنید و بزرگترین مشترک را بیابید. مثال: مقسوم‌علیه‌های ۱۲={۱،۲،۳،۴،۶،۱۲}؛ ۱۸={۱،۲،۳،۶،۹،۱۸} → مشترک: {۱،۲،۳،۶} → ب.م.م=۶.",
          "کوچکترین مضرب مشترک (ک.م.م) کوچکترین عدد صحیح مثبتی است که مضرب هر دو عدد است. مثال: ک.م.م(۴، ۶) = ۱۲.",
          "ب.م.م و ک.م.م به هم مرتبطند: ب.م.م(أ،ب) × ک.م.م(أ،ب) = أ × ب. مثال: ۶ × ۱۲ = ۷۲ = ۱۲ × ۶.",
        ],
        ti: [
          "ዝዓቢ ሓባራዊ ካፋሊ (PGCD) ናይ ክልተ ቁጽርታት ዝዓቢ ምሉእ ቁጽሪ ስለ ዘይጉዳይ ክልቲኦም ዝካፈሉ እዩ። ኣብነት: PGCD(12, 18) = 6.",
          "PGCD ንምርካብ: ናይ ነፍሲ ዱካፋሊ ቁጽርታት ዝርዝር ዝዓቢ ሓባር ቁጽሪ ረኽቦ። ኣብነት: ካፋሊ 12={1,2,3,4,6,12}; 18={1,2,3,6,9,18} → ሓቦ: {1,2,3,6} → PGCD=6.",
          "ዝነኣሰ ሓባራዊ ብዙሕ (PPCM) ኣዚዩ ዝነኣሰ ምሉእ ቁጽሪ ናይ ክልቲኦም ብዙሕ። ኣብነት: PPCM(4, 6) = 12.",
          "PGCD ምስ PPCM ዝተኣሳሰሩ: PGCD(a,b) × PPCM(a,b) = a × b. ኣብነት: 6 × 12 = 72 = 12 × 6.",
        ],
        uk: [
          "НСД (Найбільший Спільний Дільник) двох чисел — це найбільше ціле число, яке ділить обидва числа. Приклад: НСД(12, 18) = 6.",
          "Для знаходження НСД: перелічіть дільники кожного числа та знайдіть найбільший спільний. Приклад: дільники 12={1,2,3,4,6,12}; 18={1,2,3,6,9,18} → спільні: {1,2,3,6} → НСД=6.",
          "НСК (Найменше Спільне Кратне) — найменше позитивне ціле число, яке є кратним обох чисел. Приклад: НСК(4, 6) = 12.",
          "НСД і НСК пов'язані: НСД(a,b) × НСК(a,b) = a × b. Приклад: 6 × 12 = 72 = 12 × 6.",
        ],
      },
    },
    exercises: [
      { id: "a3-6-e1", promptFr: "Quel est le PGCD de 12 et 18 ?", type: "number", acceptable: ["6"] },
      { id: "a3-6-e2", promptFr: "Quel est le PPCM de 4 et 6 ?", type: "number", acceptable: ["12"] },
      { id: "a3-6-e3", promptFr: "Quel est le PGCD de 24 et 36 ?", type: "number", acceptable: ["12"] },
      { id: "a3-6-e4", promptFr: "Quel est le PPCM de 5 et 8 ?", type: "number", acceptable: ["40"] },
      { id: "a3-6-e5", promptFr: "Vérifiez : PGCD(4,6) × PPCM(4,6) = 4 × 6. Quel est le résultat des deux côtés ?", type: "number", acceptable: ["24"] },
    ],
  };
