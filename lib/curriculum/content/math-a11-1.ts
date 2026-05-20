import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A11_1_LESSON: MathSubmoduleLesson = {
    submoduleId: "A11-1",
    submoduleCode: "A11.1",
    theory: {
      title: {
        fr: "Symboles et droite numérique",
        en: "Symbols and number line",
        ar: "الرموز والمحور العددي",
        fa: "نمادها و محور اعداد",
        ti: "ምልክታትን ቁጽሪ ሕርምን",
        uk: "Символи та числова пряма",
      },
      paragraphs: {
        fr: [
          "Une inéquation est une inégalité contenant une inconnue. Les symboles sont : < (strictement inférieur), > (strictement supérieur), ≤ (inférieur ou égal), ≥ (supérieur ou égal).",
          "La solution d'une inéquation est souvent un intervalle de nombres. On la représente sur une droite numérique.",
          "Conventions de représentation : cercle plein ● pour ≤ ou ≥ (valeur incluse) ; cercle vide ○ pour < ou > (valeur exclue). On remplie la droite du côté des solutions.",
          "Exemples : x > 3 → ○ en 3, flèche vers la droite. x ≤ 5 → ● en 5, flèche vers la gauche.",
        ],
        en: [
          "An inequality is a comparison containing an unknown. Symbols: < (strictly less), > (strictly greater), ≤ (less than or equal), ≥ (greater than or equal).",
          "The solution is usually an interval, represented on a number line.",
          "Conventions: filled circle ● for ≤ or ≥ (value included); open circle ○ for < or > (value excluded). Shade the side of solutions.",
          "Examples: x > 3 → ○ at 3, arrow right. x ≤ 5 → ● at 5, arrow left.",
        ],
        ar: [
          "المتباينة مقارنة تحتوي على مجهول. الرموز: < (أصغر تماماً)، > (أكبر تماماً)، ≤ (أصغر أو يساوي)، ≥ (أكبر أو يساوي).",
          "الحل عادةً فترة من الأعداد تُمثل على المحور العددي.",
          "اصطلاحات: دائرة مملوءة ● لـ ≤ أو ≥؛ دائرة فارغة ○ لـ < أو >.",
          "أمثلة: x > 3 → ○ عند 3 سهم للأيمن. x ≤ 5 → ● عند 5 سهم للأيسر.",
        ],
        fa: [
          "نامعادله مقایسه‌ای است که حاوی مجهول است. نمادها: < (کوچک‌تر از)، > (بزرگ‌تر از)، ≤ (کوچکتر یا مساوی)، ≥ (بزرگ‌تر یا مساوی).",
          "جواب معمولاً بازه‌ای از اعداد است که روی محور اعداد نشان داده می‌شود.",
          "قراردادها: دایره پر ● برای ≤ یا ≥؛ دایره خالی ○ برای < یا >.",
          "مثال: x > 3 → ○ در 3، فلش به راست. x ≤ 5 → ● در 5، فلش به چپ.",
        ],
        ti: [
          "ዘይማዕርነት ዘይፍለጥ ዘሎ ምዕርያ ዩ. ምልክታት: < (ዝናኣሰ)، > (ዝዓበ)، ≤ (ዝናኣሰ ወይ ማዕረ)، ≥ (ዝዓበ ወይ ማዕረ).",
          "ፍትሒ ብዙሕ ጊዜ ናይ ቁጽርታት ኢንተርቫል ዩ ኣብ ቁጽሪ ሕርሚ ዝርአ.",
          "ስምምዕ: ዝተሓቓጠ ዓውዲ ● ንـ ≤ ወይ ≥; ናሕቲ ዓውዲ ○ ንـ < ወይ >.",
          "ምሳሌ: x > 3 → ○ ኣብ 3 ናብ የምን ዕዳጋ. x ≤ 5 → ● ኣብ 5 ናብ ጸጋም ዕዳጋ.",
        ],
        uk: [
          "Нерівність — це порівняння, що містить невідому. Символи: < (строго менше), > (строго більше), ≤ (менше або рівне), ≥ (більше або рівне).",
          "Розв'язком є зазвичай проміжок чисел, зображуваний на числовій прямій.",
          "Умовні позначення: закрита точка ● для ≤ або ≥; відкрита ○ для < або >.",
          "Приклади: x > 3 → ○ у 3, стрілка праворуч. x ≤ 5 → ● у 5, стрілка ліворуч.",
        ],
      },
    },
    exercises: [
      { id: "a11-1-e1", promptFr: "Le symbole 'supérieur ou égal à' s'écrit comment ?", type: "short_text", acceptable: ["≥", ">="] },
      { id: "a11-1-e2", promptFr: "Est-ce que x = 5 est solution de x < 5 ? (oui/non)", type: "short_text", acceptable: ["non"] },
      { id: "a11-1-e3", promptFr: "Est-ce que x = 5 est solution de x ≤ 5 ? (oui/non)", type: "short_text", acceptable: ["oui"] },
      { id: "a11-1-e4", promptFr: "Sur la droite numérique, x > 7 : quel cercle utilise-t-on en 7 ? (plein/vide)", type: "short_text", acceptable: ["vide"] },
      { id: "a11-1-e5", promptFr: "Cite un nombre qui est solution de x ≥ 4.", type: "number", acceptable: ["4", "5", "6", "7", "8", "9", "10", "100"] },
    ],
  };
