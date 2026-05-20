import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A11_2_LESSON: MathSubmoduleLesson = {
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
  };
