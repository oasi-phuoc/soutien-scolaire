import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A7_3_LESSON: MathSubmoduleLesson = {
    submoduleId: "A7-3",
    submoduleCode: "A7.3",
    theory: {
      title: { fr: "Addition et soustraction des relatifs", en: "Addition and subtraction of relative numbers", ar: "جمع وطرح الأعداد النسبية", fa: "جمع و تفریق اعداد نسبی", ti: "ምደማር ምቅናስ ናይ ኣካባቢ ቁጽርታት", uk: "Додавання та віднімання відносних чисел" },
      paragraphs: {
        fr: [
          "ADDITIONNER — Addition avec les mêmes signes : on additionne les valeurs absolues et on garde le signe. Deux positifs : (+6) + (+3) = (+9). Deux négatifs : (−6) + (−3) = (−9).",
          "Addition avec des signes contraires : le résultat prend le signe du plus grand nombre (en valeur absolue). Positif puis négatif : (+6) + (−3) = (+3) (6 est plus grand que 3 → signe +). Négatif puis positif : (−6) + (+3) = (−3) (6 est plus grand que 3 → signe −).",
          "SOUSTRAIRE — Soustraire, c'est égal à additionner l'opposé : a − b = a + (−b).",
          "Soustraction avec les mêmes signes : (+6) − (+3) = (+3) (même que 6 − 3 = +3) ; (−6) − (−3) = (−3) (même que −6 + 3 = −3) ; (+3) − (+6) = (−3) ; (−3) − (−6) = (+3). Le résultat prend le signe du plus grand nombre. 6 est plus grand que 3.",
          "Soustraction avec des signes contraires : (+6) − (−3) = (+9) (même que 6 + 3 = +9) ; (−6) − (+3) = (−9) (même que −6 − 3 = −9). Le résultat prend le signe du premier nombre.",
        ],
        en: [
          "ADDITION — Same signs: add absolute values, keep the sign. Two positives: (+6)+(+3)=(+9). Two negatives: (−6)+(−3)=(−9).",
          "Different signs: result takes the sign of the larger absolute value. (+6)+(−3)=(+3) (6>3 → +). (−6)+(+3)=(−3) (6>3 → −).",
          "SUBTRACTION — Subtracting equals adding the opposite: a − b = a + (−b).",
          "Same signs: (+6)−(+3)=(+3) ; (−6)−(−3)=(−3) ; (+3)−(+6)=(−3) ; (−3)−(−6)=(+3). Result takes the sign of the larger number.",
          "Different signs: (+6)−(−3)=(+9) ; (−6)−(+3)=(−9). Result takes the sign of the first number.",
        ],
        ar: [
          "الجمع — نفس الإشارة: اجمع القيم المطلقة واحتفظ بالإشارة. موجبان: (+6)+(+3)=(+9). سالبان: (−6)+(−3)=(−9).",
          "إشارات مختلفة: الناتج يأخذ إشارة الأكبر قيمةً مطلقة. (+6)+(−3)=(+3) (6>3 → +). (−6)+(+3)=(−3) (6>3 → −).",
          "الطرح — الطرح = إضافة المعكوس: a − b = a + (−b).",
          "نفس الإشارات: (+6)−(+3)=(+3) ; (−6)−(−3)=(−3) ; (+3)−(+6)=(−3) ; (−3)−(−6)=(+3). الناتج يأخذ إشارة الأكبر.",
          "إشارات مختلفة: (+6)−(−3)=(+9) ; (−6)−(+3)=(−9). الناتج يأخذ إشارة الأول.",
        ],
        fa: [
          "جمع — علامت یکسان: قدرهای مطلق را جمع کنید و علامت را نگه دارید. دو مثبت: (+۶)+(+۳)=(+۹). دو منفی: (−۶)+(−۳)=(−۹).",
          "علامت‌های مختلف: نتیجه علامت عدد با قدر مطلق بزرگتر را می‌گیرد. (+۶)+(−۳)=(+۳) ; (−۶)+(+۳)=(−۳).",
          "تفریق — تفریق = جمع مخالف: a − b = a + (−b).",
          "علامت یکسان: (+۶)−(+۳)=(+۳) ; (−۶)−(−۳)=(−۳) ; (+۳)−(+۶)=(−۳) ; (−۳)−(−۶)=(+۳). نتیجه علامت بزرگتر را می‌گیرد.",
          "علامت‌های مختلف: (+۶)−(−۳)=(+۹) ; (−۶)−(+۳)=(−۹). نتیجه علامت عدد اول را می‌گیرد.",
        ],
        ti: [
          "ምደማር — ሓደ ምልክት: ናይ ዋጋ ዋጋ ደምር ምልክቱ ሓዝ. ናይ ክልተ ንጉስ: (+6)+(+3)=(+9). ናይ ክልተ ዉሒዱ: (−6)+(−3)=(−9).",
          "ተቃርኒ ምልክታት: ናይ ዝዓቢ ዋጋ ዋጋ ምልክቱ ዝርከቡ. (+6)+(−3)=(+3) ; (−6)+(+3)=(−3).",
          "ምቅናስ — ምቅናስ = ናይ ተቃርኒ ምደማር: a − b = a + (−b).",
          "ሓደ ምልክት: (+6)−(+3)=(+3) ; (−6)−(−3)=(−3) ; (+3)−(+6)=(−3) ; (−3)−(−6)=(+3). ናይ ዝዓቢ ምልክቱ ዝርከቡ.",
          "ተቃርኒ ምልክታት: (+6)−(−3)=(+9) ; (−6)−(+3)=(−9). ናይ ቀዳማይ ምልክቱ ዝርከቡ.",
        ],
        uk: [
          "ДОДАВАННЯ — Однакові знаки: складаємо абсолютні величини, знак зберігаємо. Два позитивних: (+6)+(+3)=(+9). Два від'ємних: (−6)+(−3)=(−9).",
          "Різні знаки: результат отримує знак числа з більшою абсолютною величиною. (+6)+(−3)=(+3) ; (−6)+(+3)=(−3).",
          "ВІДНІМАННЯ — Відняти = додати протилежне: a − b = a + (−b).",
          "Однакові знаки: (+6)−(+3)=(+3) ; (−6)−(−3)=(−3) ; (+3)−(+6)=(−3) ; (−3)−(−6)=(+3). Результат отримує знак більшого числа.",
          "Різні знаки: (+6)−(−3)=(+9) ; (−6)−(+3)=(−9). Результат отримує знак першого числа.",
        ],
      },
    },
  exercises: [],
  exercisePool: [],
  poolSize: 0,
};
