import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A8_5_LESSON: MathSubmoduleLesson = {
    submoduleId: "A8-5",
    submoduleCode: "A8.5",
    theory: {
      title: {
        fr: "Valeur approchée d'une racine",
        en: "Approximate value of a root",
        ar: "القيمة التقريبية لجذر",
        fa: "مقدار تقریبی جذر",
        ti: "ናይ ስርወ ቀረባ ዋጋ",
        uk: "Наближене значення кореня",
      },
      paragraphs: {
        fr: [
          "Quand un nombre n'est pas un carré parfait, sa racine carrée est irrationnelle (elle n'a pas de valeur exacte décimale finie).",
          "On peut l'encadrer : √7 est entre 2 (car 2² = 4) et 3 (car 3² = 9), donc 2 < √7 < 3. Valeur approchée : √7 ≈ 2,646.",
          "Méthode : trouver les deux carrés parfaits qui encadrent le nombre, puis utiliser la calculatrice pour la valeur décimale.",
          "Exemples : √2 ≈ 1,414 ; √3 ≈ 1,732 ; √5 ≈ 2,236.",
        ],
        en: [
          "When a number is not a perfect square, its square root is irrational (no exact finite decimal).",
          "We can bound it: √7 is between 2 (since 2²=4) and 3 (since 3²=9), so 2 < √7 < 3. Approximate value: √7 ≈ 2.646.",
          "Method: find the two perfect squares bounding the number, then use a calculator for the decimal value.",
          "Examples: √2 ≈ 1.414; √3 ≈ 1.732; √5 ≈ 2.236.",
        ],
        ar: [
          "عندما لا يكون العدد مربعاً تاماً، جذره التربيعي غير نسبي.",
          "يمكن تأطيره: √7 بين 2 (إذ 2²=4) و3 (إذ 3²=9)، أي 2 < √7 < 3. قيمة تقريبية: √7 ≈ 2,646.",
          "الطريقة: ابحث عن المربعين التامين المحيطين بالعدد ثم استخدم الآلة الحاسبة.",
          "أمثلة: √2 ≈ 1,414؛ √3 ≈ 1,732.",
        ],
        fa: [
          "وقتی عددی مربع کامل نیست، جذر مربعش گویا نیست.",
          "می‌توانیم محدوده‌اش را پیدا کنیم: √7 بین 2 (چون 2²=4) و 3 (چون 3²=9)، پس 2 < √7 < 3. مقدار تقریبی: √7 ≈ 2.646.",
          "روش: دو مربع کامل محیط عدد را پیدا کن، سپس با ماشین حساب مقدار دقیق بگیر.",
          "مثال‌ها: √2 ≈ 1.414؛ √3 ≈ 1.732.",
        ],
        ti: [
          "ቁጽሪ ፍጹም ካሬ ዘይኮነ ምስ ዝኸውን ስርወ-ካሬ ናቱ ኢሬሽናል ዩ.",
          "ንኸነቕርቦ ንኽእል: √7 ካብ 2 (ምክንያቱ 2²=4) ክሳዕ 3 (ምክንያቱ 3²=9). √7 ≈ 2.646.",
          "ኣፈጻጽማ: ክልተ ፍጹም ካሬ ዘቕርቦ ቁጽሪ ብምርካብ ካብ ካልኩሌተር ናይ ዓሰርተ ዋጋ ምርካብ.",
          "ምሳሌ: √2 ≈ 1.414; √3 ≈ 1.732.",
        ],
        uk: [
          "Якщо число не є точним квадратом, його квадратний корінь ірраціональний (немає точного скінченного десяткового запису).",
          "Можна оцінити: √7 між 2 (бо 2²=4) і 3 (бо 3²=9), тобто 2 < √7 < 3. Наближено: √7 ≈ 2,646.",
          "Метод: знайти два точних квадрати, між якими знаходиться число, потім скористатися калькулятором.",
          "Приклади: √2 ≈ 1,414; √3 ≈ 1,732; √5 ≈ 2,236.",
        ],
      },
    },
    exercises: [
      { id: "a8-5-e1", promptFr: "√2 est entre quels entiers consécutifs ? (donne le plus petit)", type: "number", acceptable: ["1"] },
      { id: "a8-5-e2", promptFr: "√50 est entre quels entiers consécutifs ? (donne le plus petit)", type: "number", acceptable: ["7"] },
      { id: "a8-5-e3", promptFr: "Arrondi à l'unité : √30 ≈ ?", type: "number", acceptable: ["5"] },
      { id: "a8-5-e4", promptFr: "Est-ce que √2 a une valeur décimale exacte finie ? (oui/non)", type: "short_text", acceptable: ["non"] },
      { id: "a8-5-e5", promptFr: "√10 est plus proche de 3 ou de 4 ? (réponds par le bon entier)", type: "number", acceptable: ["3"] },
    ],
  };
