import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_G2_3_LESSON: MathSubmoduleLesson = {
    submoduleId: "G2-3",
    submoduleCode: "G2.3",
    theory: {
      title: {
        fr: "Périmètre du triangle",
        en: "Perimeter of a triangle",
        ar: "محيط المثلث",
        fa: "محیط مثلث",
        ti: "ናይ ሰለስ-ጎቦ ዙሪያ",
        uk: "Периметр трикутника",
      },
      paragraphs: {
        fr: [
          "Le périmètre d'un triangle est la somme de ses trois côtés : P = a + b + c.",
          "Triangle équilatéral (3 côtés égaux) : P = 3a. Triangle isocèle (2 côtés égaux) : P = 2a + b.",
          "Exemple : triangle de côtés 5, 7, 9 cm → P = 5 + 7 + 9 = 21 cm.",
          "Inégalité triangulaire : la somme de deux côtés quelconques doit être supérieure au troisième côté.",
        ],
        en: [
          "The perimeter of a triangle is the sum of its three sides: P = a + b + c.",
          "Equilateral (3 equal sides): P = 3a. Isosceles (2 equal sides): P = 2a + b.",
          "Example: sides 5, 7, 9 cm → P = 21 cm.",
          "Triangle inequality: any two sides must sum to more than the third.",
        ],
        ar: [
          "محيط المثلث هو مجموع أضلاعه الثلاثة: P = a + b + c.",
          "متساوي الأضلاع: P = 3a. متساوي الساقين: P = 2a + b.",
          "مثال: أضلاع 5, 7, 9 سم → P = 21 سم.",
          "متراجحة المثلث: مجموع أي ضلعين أكبر من الثالث.",
        ],
        fa: [
          "محیط مثلث برابر مجموع سه ضلع آن است: P = a + b + c.",
          "متساوی‌الاضلاع: P = 3a. متساوی‌الساقین: P = 2a + b.",
          "مثال: اضلاع 5، 7، 9 سانتیمتر → P = 21 سانتیمتر.",
          "نامساوی مثلث: مجموع هر دو ضلع باید از ضلع سوم بزرگ‌تر باشد.",
        ],
        ti: [
          "ናይ ሰለስ-ጎቦ ዙሪያ ናይ ሰለስቲ ጎቦ ድምር ዩ: P = a + b + c.",
          "ዕኩል ሰለስ-ጎቦ: P = 3a. ክልተ-ዕኩል ሰለስ-ጎቦ: P = 2a + b.",
          "ምሳሌ: ጎቦ 5, 7, 9 ሰም → P = 21 ሰም.",
          "ናይ ሰለስ-ጎቦ ዘይምዕርርያ: ዝኾኑ ክልተ ጎቦ ድምር ካብ ሳልሳይ ዝዓቢ ክኸውን.",
        ],
        uk: [
          "Периметр трикутника — сума трьох його сторін: P = a + b + c.",
          "Рівносторонній: P = 3a. Рівнобедрений: P = 2a + b.",
          "Приклад: сторони 5, 7, 9 см → P = 21 см.",
          "Нерівність трикутника: сума будь-яких двох сторін більша за третю.",
        ],
      },
    },
    exercises: [
      { id: "g2-3-e1", promptFr: "Calcule P : triangle de côtés 3, 4, 5 cm.", type: "number", acceptable: ["12"] },
      { id: "g2-3-e2", promptFr: "Triangle équilatéral de côté 8 cm. P = ?", type: "number", acceptable: ["24"] },
      { id: "g2-3-e3", promptFr: "Triangle isocèle : deux côtés = 6 cm, base = 4 cm. P = ?", type: "number", acceptable: ["16"] },
      { id: "g2-3-e4", promptFr: "P d'un triangle = 30 cm. Deux côtés sont 8 et 11 cm. Troisième côté = ?", type: "number", acceptable: ["11"] },
      { id: "g2-3-e5", promptFr: "Peut-on former un triangle avec les côtés 2, 3, 7 ? (oui/non)", type: "short_text", acceptable: ["non"] },
    ],
  };
