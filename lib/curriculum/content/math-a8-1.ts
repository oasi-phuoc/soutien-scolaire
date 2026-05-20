import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A8_1_LESSON: MathSubmoduleLesson = {
    submoduleId: "A8-1",
    submoduleCode: "A8.1",
    theory: {
      title: {
        fr: "Notation puissance",
        en: "Power notation",
        ar: "رمز الأس",
        fa: "نمادگذاری توان",
        ti: "ምልክት ሓይሊ",
        uk: "Позначення степеня",
      },
      paragraphs: {
        fr: [
          "Une puissance est une façon rapide d'écrire une multiplication répétée. Elle est composée de deux éléments : la base (le nombre qu'on répète) et l'exposant (le nombre de fois qu'on multiplie la base par elle-même).",
          "Exemple : 2³ = 2 × 2 × 2 = 8. On lit « 2 exposant 3 » ou « 2 à la puissance 3 ».",
          "Cas particuliers : tout nombre à la puissance 1 est lui-même (5¹ = 5) ; tout nombre (≠ 0) à la puissance 0 vaut 1 (7⁰ = 1).",
          "Attention : 2³ ≠ 2 × 3. La puissance est une multiplication répétée, pas une multiplication simple.",
        ],
        en: [
          "A power is a quick way to write repeated multiplication. It has two parts: the base (the repeated number) and the exponent (how many times the base is multiplied by itself).",
          "Example: 2³ = 2 × 2 × 2 = 8. Read as 'two to the power of three'.",
          "Special cases: any number to the power of 1 equals itself (5¹ = 5); any non-zero number to the power of 0 equals 1 (7⁰ = 1).",
          "Warning: 2³ ≠ 2 × 3. A power means repeated multiplication, not simple multiplication.",
        ],
        ar: [
          "الأس طريقة سريعة لكتابة ضرب متكرر. يتكون من جزأين: القاعدة (العدد المتكرر) والأس (عدد مرات الضرب).",
          "مثال: 2³ = 2 × 2 × 2 = 8. تُقرأ «2 أس 3».",
          "حالات خاصة: أي عدد أس 1 يساوي نفسه؛ أي عدد غير صفر أس 0 يساوي 1.",
          "تحذير: 2³ ≠ 2 × 3. الأس يعني الضرب المتكرر وليس الضرب البسيط.",
        ],
        fa: [
          "توان روشی سریع برای نوشتن ضرب تکراری است. از دو بخش تشکیل می‌شود: پایه (عددی که تکرار می‌شود) و نما (تعداد دفعات ضرب).",
          "مثال: 2³ = 2 × 2 × 2 = 8. خوانده می‌شود «2 به توان 3».",
          "حالات خاص: هر عدد به توان 1 برابر خودش است؛ هر عدد غیرصفر به توان 0 برابر 1 است.",
          "هشدار: 2³ ≠ 2 × 3. توان یعنی ضرب تکراری، نه ضرب ساده.",
        ],
        ti: [
          "ሓይሊ ቁጽሪ ዝኾነ ድግምድግም ምርባሕ ናብ ሓጺር ምጽሓፍ ናይ ምርባሕ ዘፍቅድ ኣፈፃፅማ ዩ። ካብ ክልተ ክፋል ዝቖምሉ: ሰረት (ዝድገም ቁጽሪ) ካብ ኣስፋፊሐ (ቁጽሪ ናይ ምርባሕ).",
          "ናይ ምሳሌ: 2³ = 2 × 2 × 2 = 8. «2 ናይ ሓይሊ 3» ኢሉ ዝንበብ.",
          "ፍሉይ ኩነታት: ዝኾነ ቁጽሪ ናብ ሓይሊ 1 ንባዕሉ ዩ; ዝኾነ ዜሮ ዘይኮነ ቁጽሪ ናብ ሓይሊ 0 = 1.",
          "ጥንቃቐ: 2³ ≠ 2 × 3. ሓይሊ ዘምልክት ድግምድግም ምርባሕ ዩ ናይ ቀሊል ምርባሕ ዘይኮነ.",
        ],
        uk: [
          "Степінь — це скорочений спосіб запису повторного множення. Він складається з двох частин: основи (числа, яке повторюється) та показника (кількості множень).",
          "Приклад: 2³ = 2 × 2 × 2 = 8. Читається «два в кубі» або «два в степені трьох».",
          "Особливі випадки: будь-яке число в степені 1 дорівнює собі (5¹ = 5); будь-яке ненульове число в степені 0 дорівнює 1 (7⁰ = 1).",
          "Увага: 2³ ≠ 2 × 3. Степінь означає повторне множення, а не просте.",
        ],
      },
    },
    exercises: [
      { id: "a8-1-e1", promptFr: "Écris 5 × 5 × 5 sous forme de puissance.", type: "short_text", acceptable: ["5³", "5^3"] },
      { id: "a8-1-e2", promptFr: "Calcule 3².", type: "number", acceptable: ["9"] },
      { id: "a8-1-e3", promptFr: "Quelle est la base dans 4⁵ ?", type: "number", acceptable: ["4"] },
      { id: "a8-1-e4", promptFr: "Quel est l'exposant dans 7³ ?", type: "number", acceptable: ["3"] },
      { id: "a8-1-e5", promptFr: "Calcule 10⁰.", type: "number", acceptable: ["1"] },
    ],
  };
