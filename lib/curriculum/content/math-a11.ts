import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A11_LESSONS: MathSubmoduleLesson[] = [
  {
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
  },
  {
    submoduleId: "A11-2",
    submoduleCode: "A11.2",
    theory: {
      title: {
        fr: "Résolution d'inéquations simples",
        en: "Solving simple inequalities",
        ar: "حل المتباينات البسيطة",
        fa: "حل نامعادلات ساده",
        ti: "ምፍታሕ ቀሊል ዘይምዕርርያ",
        uk: "Розв'язання простих нерівностей",
      },
      paragraphs: {
        fr: [
          "On résout une inéquation comme une équation, en effectuant les mêmes opérations des deux côtés. EXCEPTION IMPORTANTE : quand on multiplie ou divise par un nombre négatif, le sens de l'inégalité s'inverse.",
          "Exemples : 2x + 3 < 11 → 2x < 8 → x < 4 ; 3x − 5 ≥ 7 → 3x ≥ 12 → x ≥ 4.",
          "Division par nombre négatif : −2x > 6 → x < −3 (le signe s'inverse !).",
          "Toujours noter la solution sous forme d'intervalle ou sur la droite numérique.",
        ],
        en: [
          "Solve an inequality like an equation, applying the same operations on both sides. KEY EXCEPTION: multiplying or dividing by a negative number reverses the inequality sign.",
          "Examples: 2x + 3 < 11 → x < 4; 3x − 5 ≥ 7 → x ≥ 4.",
          "Division by negative: −2x > 6 → x < −3 (sign reverses!).",
          "Always write the solution as an interval or on a number line.",
        ],
        ar: [
          "تحل المتباينة مثل المعادلة بنفس العمليات على الطرفين. استثناء مهم: عند الضرب أو القسمة على عدد سالب يُعكس اتجاه المتباينة.",
          "أمثلة: 2x + 3 < 11 → x < 4؛ −2x > 6 → x < −3.",
          "الحل دائماً فترة أو على المحور العددي.",
        ],
        fa: [
          "نامعادله را مثل معادله حل می‌کنیم. استثنای مهم: وقتی بر عدد منفی ضرب یا تقسیم می‌کنیم، جهت نامساوی عوض می‌شود.",
          "مثال‌ها: 2x + 3 < 11 → x < 4؛ −2x > 6 → x < −3.",
          "جواب را همیشه به صورت بازه یا روی محور اعداد بنویس.",
        ],
        ti: [
          "ዘይምዕርርያ ከም ምዕርርያ ብሓደ ስራሕ ኣብ ክልቲ ሸነኽ ምፍታሕ. ኣገዳሲ ዘካሳ: ምስ ኣሉታዊ ቁጽሪ ምርባሕ ወይ ምምቃሉ ምልክት ይቐያዩ.",
          "ምሳሌ: 2x + 3 < 11 → x < 4; −2x > 6 → x < −3.",
          "ፍትሒ ብኢንተርቫል ወይ ናብ ቁጽሪ ሕርሚ ምጽሓፍ.",
        ],
        uk: [
          "Нерівність розв'язується як рівняння. ВАЖЛИВИЙ ВИНЯТОК: при множенні або діленні на від'ємне число знак нерівності змінюється на протилежний.",
          "Приклади: 2x + 3 < 11 → x < 4; −2x > 6 → x < −3.",
          "Завжди записувати розв'язок у вигляді проміжку або на числовій прямій.",
        ],
      },
    },
    exercises: [
      { id: "a11-2-e1", promptFr: "Résous x + 4 < 10. (donne la borne)", type: "number", acceptable: ["6"] },
      { id: "a11-2-e2", promptFr: "Résous 3x ≥ 12. (donne la borne)", type: "number", acceptable: ["4"] },
      { id: "a11-2-e3", promptFr: "Résous −2x > 8. (donne la borne)", type: "number", acceptable: ["-4", "−4"] },
      { id: "a11-2-e4", promptFr: "Résous 2x − 3 ≤ 7. (donne la borne)", type: "number", acceptable: ["5"] },
      { id: "a11-2-e5", promptFr: "Résous −x < 5. Quel est le sens de la solution ? (x > ou x <)", type: "short_text", acceptable: ["x > -5", "x > −5", "x>-5"] },
    ],
  },
  {
    submoduleId: "A11-3",
    submoduleCode: "A11.3",
    theory: {
      title: {
        fr: "Représentation graphique des solutions",
        en: "Graphical representation of solutions",
        ar: "التمثيل البياني للحلول",
        fa: "نمایش گرافیکی جواب‌ها",
        ti: "ስዕላዊ ምርኣይ ናይ ፍትሒ",
        uk: "Графічне зображення розв'язків",
      },
      paragraphs: {
        fr: [
          "La solution d'une inéquation à une variable s'écrit sous forme d'intervalle et se représente sur la droite numérique.",
          "Notations d'intervalles : x < 3 s'écrit ]−∞ ; 3[ ; x ≥ 2 s'écrit [2 ; +∞[ ; 1 ≤ x < 5 s'écrit [1 ; 5[.",
          "Sur la droite : une demi-droite pour les inéquations simples, un segment pour les inéquations doubles (1 ≤ x < 5).",
          "Exemple complet : résoudre 2x − 4 ≤ 6 → 2x ≤ 10 → x ≤ 5. Solution : ]−∞ ; 5]. Représentation : ● en 5, flèche vers la gauche.",
        ],
        en: [
          "The solution of a one-variable inequality is written as an interval and shown on the number line.",
          "Interval notation: x < 3 is ]−∞ ; 3[; x ≥ 2 is [2 ; +∞[; 1 ≤ x < 5 is [1 ; 5[.",
          "On the line: a half-line for simple inequalities, a segment for double inequalities.",
          "Full example: 2x − 4 ≤ 6 → x ≤ 5. Solution: ]−∞ ; 5]. Number line: ● at 5, left arrow.",
        ],
        ar: [
          "حل المتباينة بمتغير واحد يُكتب كفترة ويُمثل على المحور العددي.",
          "رمز الفترة: x < 3 تُكتب ]−∞ ; 3[؛ x ≥ 2 تُكتب [2 ; +∞[.",
          "على المحور: نصف-خط للمتباينات البسيطة، قطعة مستقيمة للمزدوجة.",
          "مثال: 2x − 4 ≤ 6 → x ≤ 5. الحل: ]−∞ ; 5]. تمثيل: ● عند 5 سهم للأيسر.",
        ],
        fa: [
          "جواب نامعادله تک متغیره به صورت بازه نوشته و روی محور اعداد نمایش داده می‌شود.",
          "نمادگذاری بازه: x < 3 به صورت ]−∞ ; 3[؛ x ≥ 2 به صورت [2 ; +∞[.",
          "روی محور: نیم‌خط برای نامعادلات ساده، پاره‌خط برای نامعادلات مضاعف.",
          "مثال: 2x − 4 ≤ 6 → x ≤ 5. ● در 5، فلش به چپ.",
        ],
        ti: [
          "ናይ ሓደ ተለዋዋጢ ዘይምዕርርያ ፍትሒ ናይ ኢንተርቫል ዝጸሓፍ ኣብ ቁጽሪ ሕርሚ ዝርአ ዩ.",
          "ናይ ኢንተርቫል ምልክት: x < 3 ናይ ]−∞ ; 3[; x ≥ 2 ናይ [2 ; +∞[.",
          "ኣብ ሕርሚ: ቀሊል ዘይምዕርርያ ሓደ ፍርቂ ሕርሚ; ምዕርርያ ሓደ ፍርቂ ሕርሚ.",
          "ምሳሌ: 2x − 4 ≤ 6 → x ≤ 5. ● ኣብ 5, ናብ ጸጋም ዕዳጋ.",
        ],
        uk: [
          "Розв'язок нерівності з однією змінною записується як проміжок і зображується на числовій прямій.",
          "Позначення проміжків: x < 3 — ]−∞ ; 3[; x ≥ 2 — [2 ; +∞[; 1 ≤ x < 5 — [1 ; 5[.",
          "На прямій: піввісь для простих нерівностей, відрізок для подвійних.",
          "Приклад: 2x − 4 ≤ 6 → x ≤ 5. Розв'язок: ]−∞ ; 5]. Числова пряма: ● у 5, стрілка ліворуч.",
        ],
      },
    },
    exercises: [
      { id: "a11-3-e1", promptFr: "Résous et donne l'intervalle : 3x ≤ 9.", type: "short_text", acceptable: ["]-inf;3]", "]−∞;3]", "]-∞;3]"] },
      { id: "a11-3-e2", promptFr: "Résous 2x + 1 > 7 (donne la borne).", type: "number", acceptable: ["3"] },
      { id: "a11-3-e3", promptFr: "Résous −x ≥ −4 (donne la borne).", type: "number", acceptable: ["4"] },
      { id: "a11-3-e4", promptFr: "Résous 1 ≤ x + 2 < 6. Quelle est la borne gauche de l'intervalle solution ?", type: "number", acceptable: ["-1", "−1"] },
      { id: "a11-3-e5", promptFr: "x ≤ 0 : quel cercle sur la droite numérique en 0 ? (plein/vide)", type: "short_text", acceptable: ["plein"] },
    ],
  },
];
