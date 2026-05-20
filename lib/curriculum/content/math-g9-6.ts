import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_G9_6_LESSON: MathSubmoduleLesson = {
    submoduleId: "G9-6",
    submoduleCode: "G9.6",
    theory: {
      title: {
        fr: "Construire un diagramme en bâtons",
        en: "Building a bar chart",
        ar: "إنشاء مخطط عمودي",
        fa: "ساخت نمودار میله‌ای",
        ti: "ናይ ዱሉ ሰሌዳ ምህናጽ",
        uk: "Побудова стовпчастої діаграми",
      },
      paragraphs: {
        fr: [
          "Étapes : (1) tracer les deux axes et les graduer ; (2) choisir l'échelle (la hauteur max de l'axe y doit dépasser la plus grande valeur) ; (3) dessiner une barre pour chaque catégorie ; (4) nommer les axes et donner un titre.",
          "L'axe horizontal liste les catégories (noms, mois, classes…). L'axe vertical indique les valeurs (fréquences, nombres…).",
          "Les barres ne se touchent pas entre elles (contrairement à l'histogramme). Elles sont de largeur constante.",
          "Exemple : notes de 5 élèves : 12, 15, 9, 18, 11. Axe y de 0 à 20 avec échelle 2.",
        ],
        en: [
          "Steps: (1) draw and graduate both axes; (2) choose scale; (3) draw one bar per category; (4) label axes, add title.",
          "Horizontal axis: categories. Vertical axis: values.",
          "Bars don't touch (unlike histograms). Constant width.",
          "Example: grades 12, 15, 9, 18, 11. y-axis 0–20.",
        ],
        ar: [
          "الخطوات: (1) رسم المحورين وتدريجهما؛ (2) اختيار المقياس؛ (3) رسم شريط لكل فئة؛ (4) تسمية المحاور وإضافة عنوان.",
          "المحور الأفقي: فئات. المحور الرأسي: قيم.",
          "الأشرطة لا تلتقي. عرض ثابت.",
          "مثال: درجات 12, 15, 9, 18, 11.",
        ],
        fa: [
          "مراحل: (1) محورها را رسم و علامت‌گذاری کن؛ (2) مقیاس انتخاب کن؛ (3) برای هر دسته میله رسم کن؛ (4) محورها را برچسب بزن.",
          "محور افقی: دسته‌ها. محور عمودی: مقادیر.",
          "میله‌ها لمس نمی‌کنند. عرض ثابت.",
          "مثال: نمرات 12، 15، 9، 18، 11.",
        ],
        ti: [
          "ስጉምቲ: (1) ክልቲ ሕርሚ ምምሃዝ ምስ ምዕቃብ; (2) ስኬል ምምራጽ; (3) ናህሰ ዝርዝር ናህሰ ዱሉ ምምሃዝ; (4) ሕርሚ ምልዓይ.",
          "ኣፍ ደርቢ ሕርሚ: ዝርዝር. ቁሩ ሕርሚ: ዋጋ.",
          "ዱሉ ኣይተዋሃሃዱን. ዕኩል ወርሓዊ.",
          "ምሳሌ: ድርጃ 12, 15, 9, 18, 11.",
        ],
        uk: [
          "Кроки: (1) провести та поградуювати обидві осі; (2) вибрати масштаб; (3) намалювати стовпець для кожної категорії; (4) підписати осі.",
          "Горизонтальна вісь: категорії. Вертикальна: значення.",
          "Стовпці не торкаються між собою. Однакова ширина.",
          "Приклад: оцінки 12, 15, 9, 18, 11. Вісь y: 0–20.",
        ],
      },
    },
    exercises: [
      { id: "g9-6-e1", promptFr: "Pour un diagramme en bâtons, les barres doivent-elles se toucher ? (oui/non)", type: "short_text", acceptable: ["non"] },
      { id: "g9-6-e2", promptFr: "Données : lundi 5, mardi 8, mercredi 3. Quelle hauteur de barre pour mardi ?", type: "number", acceptable: ["8"] },
      { id: "g9-6-e3", promptFr: "L'axe vertical d'un diagramme en bâtons commence toujours à ?", type: "number", acceptable: ["0"] },
      { id: "g9-6-e4", promptFr: "Si la plus grande valeur est 35, l'axe y doit aller jusqu'à au moins ?", type: "number", acceptable: ["35", "36", "40"] },
      { id: "g9-6-e5", promptFr: "Faut-il donner un titre à un diagramme ? (oui/non)", type: "short_text", acceptable: ["oui"] },
    ],
  };
