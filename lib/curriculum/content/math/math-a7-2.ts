import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A7_2_LESSON: MathSubmoduleLesson = {
    submoduleId: "A7-2",
    submoduleCode: "A7.2",
    theory: {
      title: { fr: "Comparer les relatifs", en: "Comparing relative numbers", ar: "مقارنة الأعداد النسبية", fa: "مقایسه اعداد نسبی", ti: "ናይ ኣካባቢ ቁጽርታት ምውድዳር", uk: "Порівняння відносних чисел" },
      paragraphs: {
        fr: [
          "Un nombre négatif est toujours plus petit qu'un nombre positif. Exemples : −2 < 3 ; −452 < 1.",
          "Pour deux nombres négatifs, le plus grand est celui qui est le plus près de 0 (le moins négatif). Exemples : −5 < −2 (car −2 est plus près de 0) ; −517 < −14.",
          "Sur la droite numérique, un nombre est plus grand que tous les nombres situés à sa gauche et plus petit que tous les nombres situés à sa droite.",
        ],
        en: [
          "A negative number is always less than a positive number. Examples: −2 < 3; −452 < 1.",
          "For two negative numbers, the greater one is the one closest to 0 (least negative). Examples: −5 < −2 (−2 is closer to 0); −517 < −14.",
          "On the number line, a number is greater than all numbers to its left and less than all numbers to its right.",
        ],
        ar: [
          "العدد السالب دائمًا أقل من العدد الموجب. أمثلة: −2 < 3؛ −452 < 1.",
          "بالنسبة لعددين سالبين، الأكبر هو الأقرب إلى 0 (الأقل سلبية). أمثلة: −5 < −2 (لأن −2 أقرب إلى 0)؛ −517 < −14.",
          "على محور الأعداد، أي عدد أكبر من كل الأعداد على يساره وأصغر من كل الأعداد على يمينه.",
        ],
        fa: [
          "عدد منفی همیشه از عدد مثبت کمتر است. مثال‌ها: −۲ < ۳؛ −۴۵۲ < ۱.",
          "برای دو عدد منفی، بزرگتر آن است که به ۰ نزدیک‌تر است (کمتر منفی). مثال‌ها: −۵ < −۲ (چون −۲ به ۰ نزدیک‌تر است)؛ −۵۱۷ < −۱۴.",
          "در محور عددی، یک عدد از همه اعداد سمت چپ خود بزرگتر و از همه اعداد سمت راست خود کوچکتر است.",
        ],
        ti: [
          "ዉሒዱ ቁጽሪ ካብ ንጉስ ቁጽሪ ዝሕደር ኩሉ ጊዜ ኣሎ። ኣብነት: −2 < 3; −452 < 1.",
          "ናይ ክልተ ዉሒዱ ቁጽርታት ዝዓቢ ናብ 0 ዝቀረበ (ዝሕደር ዉሒዱ) እዩ። ኣብነት: −5 < −2 (−2 ናብ 0 ቀሪቡ); −517 < −14.",
          "ናይ ቁጽሪ ሰሌዳ ናብ ጸጋም ካብ ዘለዉ ቁጽርታት ዝዓቢ ናብ ቀኝ ካብ ዘለዉ ዝሕደር ቁጽሪ ኣሎ።",
        ],
        uk: [
          "Від'ємне число завжди менше позитивного. Приклади: −2 < 3; −452 < 1.",
          "Для двох від'ємних чисел більше те, що ближче до 0. Приклади: −5 < −2 (бо −2 ближче до 0); −517 < −14.",
          "На числовій прямій число більше за всі числа зліва від нього і менше за всі числа справа.",
        ],
      },
    },
    exercises: [
      { id: "a7-2-e1", promptFr: "Comparez −2 et 3 avec < ou >.", type: "short_text", acceptable: ["-2 < 3", "<"] },
      { id: "a7-2-e2", promptFr: "Comparez −5 et −2 avec < ou >.", type: "short_text", acceptable: ["-5 < -2", "<"] },
      { id: "a7-2-e3", promptFr: "Quel est le plus grand : −100 ou −10 ?", type: "number", acceptable: ["-10"] },
      { id: "a7-2-e4", promptFr: "Ordonnez : +3 ; −1 ; −7 ; 0 du plus petit au plus grand.", type: "short_text", acceptable: ["-7 ; -1 ; 0 ; 3", "-7,-1,0,3"] },
      { id: "a7-2-e5", promptFr: "Est-ce que −0,5 > −1 ? (oui/non)", type: "short_text", acceptable: ["oui", "yes"] },
    ],
  };
