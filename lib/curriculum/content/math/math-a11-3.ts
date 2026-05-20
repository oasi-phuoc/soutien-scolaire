import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A11_3_LESSON: MathSubmoduleLesson = {
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
  };
