import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A3_4_LESSON: MathSubmoduleLesson = {
    submoduleId: "A3-4",
    submoduleCode: "A3.4",
    theory: {
      title: {
        fr: "Diviseurs et multiples",
        en: "Divisors and multiples",
        ar: "القواسم والمضاعفات",
        fa: "مقسوم‌علیه‌ها و مضرب‌ها",
        ti: "ካፋሊ ምስ ብዙሕ",
        uk: "Дільники та кратні",
      },
      paragraphs: {
        fr: [
          "Un diviseur d'un nombre est un entier qui divise ce nombre exactement (sans reste). Exemple : les diviseurs de 12 sont 1, 2, 3, 4, 6, 12.",
          "Un multiple d'un nombre est le résultat de la multiplication de ce nombre par un entier. Exemple : les multiples de 3 sont 3, 6, 9, 12, 15, 18… (3 × 1, 3 × 2, 3 × 3…).",
          "Un nombre est divisible par un autre si la division est exacte (reste = 0). Exemple : 24 est divisible par 6 car 24 ÷ 6 = 4 reste 0.",
          "Lien diviseur/multiple : si 3 est un diviseur de 12, alors 12 est un multiple de 3.",
        ],
        en: [
          "A divisor of a number is an integer that divides it exactly (no remainder). Example: divisors of 12 are 1, 2, 3, 4, 6, 12.",
          "A multiple of a number is the result of multiplying it by an integer. Example: multiples of 3 are 3, 6, 9, 12, 15, 18…",
          "A number is divisible by another if the division is exact (remainder = 0). Example: 24 is divisible by 6 because 24 ÷ 6 = 4 with remainder 0.",
          "Divisor/multiple link: if 3 is a divisor of 12, then 12 is a multiple of 3.",
        ],
        ar: [
          "قاسم عدد ما هو عدد صحيح يقسمه بدون باقٍ. مثال: قواسم 12 هي 1، 2، 3، 4، 6، 12.",
          "مضاعف عدد هو حاصل ضرب ذلك العدد في عدد صحيح. مثال: مضاعفات 3 هي 3، 6، 9، 12، 15، 18…",
          "عدد ما قابل للقسمة على آخر إذا كانت القسمة دقيقة (الباقي = 0). مثال: 24 قابل للقسمة على 6 لأن 24 ÷ 6 = 4 باقٍ 0.",
          "العلاقة: إذا كان 3 قاسمًا لـ 12، فإن 12 مضاعف لـ 3.",
        ],
        fa: [
          "مقسوم‌علیه یک عدد، عدد صحیحی است که آن عدد را بدون باقیمانده تقسیم می‌کند. مثال: مقسوم‌علیه‌های ۱۲ عبارتند از ۱، ۲، ۳، ۴، ۶، ۱۲.",
          "مضرب یک عدد، حاصل ضرب آن عدد در یک عدد صحیح است. مثال: مضرب‌های ۳ عبارتند از ۳، ۶، ۹، ۱۲، ۱۵، ۱۸…",
          "یک عدد بر دیگری بخش‌پذیر است اگر تقسیم دقیق باشد (باقیمانده = ۰). مثال: ۲۴ بر ۶ بخش‌پذیر است چون ۲۴ ÷ ۶ = ۴ باقیمانده ۰.",
          "رابطه: اگر ۳ مقسوم‌علیه ۱۲ باشد، پس ۱۲ مضرب ۳ است.",
        ],
        ti: [
          "ካፋሊ ናይ ሓደ ቁጽሪ ካብ ዘይጉዳይ ተረፈ ዝካፈሉ ምሉእ ቁጽሪ እዩ። ኣብነት: ካፋሊ ናይ 12 1, 2, 3, 4, 6, 12 እዮም።",
          "ብዙሕ ናይ ሓደ ቁጽሪ ንዝኾነ ምሉእ ቁጽሪ ብምዝርፉ ዝርከብ ዉጽኢት እዩ። ኣብነት: ብዙሕ ናይ 3 3, 6, 9, 12, 15, 18…",
          "ሓደ ቁጽሪ ብካሊእ ዝካፈል ክፍፍሉ ቅኑዕ እንተኾነ (ተረፈ = 0)። ኣብነት: 24 ብ 6 ዝካፈሉ 24 ÷ 6 = 4 ተረፈ 0 ስለዝኾነ።",
          "ምትእስሳር: 3 ካፋሊ ናይ 12 እንተኾነ 12 ብዙሕ ናይ 3 እዩ።",
        ],
        uk: [
          "Дільник числа — це ціле число, яке ділить його без остачі. Приклад: дільники 12 — це 1, 2, 3, 4, 6, 12.",
          "Кратне числа — результат множення числа на ціле число. Приклад: кратні 3 — це 3, 6, 9, 12, 15, 18…",
          "Число ділиться на інше, якщо ділення точне (остача = 0). Приклад: 24 ділиться на 6, бо 24 ÷ 6 = 4 з остачею 0.",
          "Зв'язок: якщо 3 — дільник 12, то 12 — кратне 3.",
        ],
      },
    },
    exercises: [
      { id: "a3-4-e1", promptFr: "Listez tous les diviseurs de 12.", type: "short_text", acceptable: ["1,2,3,4,6,12", "1 2 3 4 6 12"] },
      { id: "a3-4-e2", promptFr: "Est-ce que 24 est divisible par 6 ? (oui/non)", type: "short_text", acceptable: ["oui", "yes"] },
      { id: "a3-4-e3", promptFr: "Quel est le 4ᵉ multiple de 7 ?", type: "number", acceptable: ["28"] },
      { id: "a3-4-e4", promptFr: "Est-ce que 35 est un multiple de 6 ? (oui/non)", type: "short_text", acceptable: ["non", "no"] },
      { id: "a3-4-e5", promptFr: "Listez les 5 premiers multiples de 4.", type: "short_text", acceptable: ["4,8,12,16,20", "4 8 12 16 20"] },
    ],
  };
