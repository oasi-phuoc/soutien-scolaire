import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_G9_3_LESSON: MathSubmoduleLesson = {
    submoduleId: "G9-3",
    submoduleCode: "G9.3",
    theory: {
      title: {
        fr: "Diagramme en bâtons",
        en: "Bar chart",
        ar: "المخطط العمودي",
        fa: "نمودار میله‌ای",
        ti: "ናይ ዱሉ ሰሌዳ",
        uk: "Стовпчаста діаграма",
      },
      paragraphs: {
        fr: [
          "Un diagramme en bâtons (ou en barres) représente des données par des rectangles (barres) dont la hauteur (ou longueur) est proportionnelle à la valeur.",
          "Lecture : la hauteur de chaque barre correspond à la valeur de la catégorie. On lit la valeur sur l'axe vertical.",
          "Construction : (1) choisir l'échelle de l'axe y ; (2) dessiner des barres de largeur égale pour chaque catégorie ; (3) annoter les axes.",
          "Utilisation : comparer des catégories distinctes (notes, effectifs, ventes par mois…).",
        ],
        en: [
          "A bar chart represents data with rectangles whose height is proportional to the value.",
          "Reading: bar height = category value, read on vertical axis.",
          "Construction: (1) choose y-axis scale; (2) draw equal-width bars; (3) label axes.",
          "Use: compare distinct categories (grades, counts, monthly sales…).",
        ],
        ar: [
          "المخطط العمودي يمثل البيانات بمستطيلات ارتفاعها يتناسب مع القيمة.",
          "القراءة: ارتفاع كل شريط = قيمة الفئة.",
          "الإنشاء: (1) اختر مقياس y؛ (2) ارسم أشرطة بعرض متساوٍ؛ (3) رسّم المحاور.",
          "الاستخدام: مقارنة فئات مختلفة.",
        ],
        fa: [
          "نمودار میله‌ای داده‌ها را با مستطیل‌هایی که ارتفاعشان متناسب با مقدار است نمایش می‌دهد.",
          "خواندن: ارتفاع هر میله = مقدار دسته.",
          "ساخت: (1) مقیاس محور y انتخاب کن؛ (2) میله‌های عرض مساوی رسم کن؛ (3) محورها را علامت‌گذاری کن.",
          "استفاده: مقایسه دسته‌های مجزا.",
        ],
        ti: [
          "ናይ ዱሉ ሰሌዳ ዳታ ብናይ ካሬ-ሓለቃ ቁምናኦቱ ናህሰ ዋጋ ዘርኢ ዩ.",
          "ምንባብ: ናይ ነፍሲ ወከፍ ዱሉ ቁምና = ናህሰ ዋጋ.",
          "ምህናጽ: (1) ናይ y ስኬል ምምራጽ; (2) ዕኩል ወርሓዊ ዱሉ ምምሃዝ; (3) ሕርሚ ምልዓይ.",
          "ኣጠቓቕማ: ፍለያ ዝርዝር ምምስሳሉ.",
        ],
        uk: [
          "Стовпчаста діаграма відображає дані прямокутниками, висота яких пропорційна значенню.",
          "Читання: висота стовпця = значення категорії.",
          "Побудова: (1) вибрати масштаб осі y; (2) рівнобічні стовпці; (3) підписи осей.",
          "Застосування: порівняння різних категорій.",
        ],
      },
    },
    exercises: [
      { id: "g9-3-e1", promptFr: "Dans un diagramme en bâtons, la hauteur d'une barre représente quoi ?", type: "short_text", acceptable: ["la valeur", "la fréquence", "le nombre"] },
      { id: "g9-3-e2", promptFr: "Les barres d'un diagramme en bâtons doivent-elles avoir la même largeur ? (oui/non)", type: "short_text", acceptable: ["oui"] },
      { id: "g9-3-e3", promptFr: "Un diagramme en bâtons est utile pour comparer des catégories ? (oui/non)", type: "short_text", acceptable: ["oui"] },
      { id: "g9-3-e4", promptFr: "Sur l'axe vertical on lit quelle information ?", type: "short_text", acceptable: ["la valeur", "la fréquence", "les données"] },
      { id: "g9-3-e5", promptFr: "5 élèves ont eu A, 8 ont eu B, 3 ont eu C. Quelle note a la barre la plus haute ?", type: "short_text", acceptable: ["B"] },
    ],
  };
