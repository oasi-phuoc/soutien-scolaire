import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A13_3_LESSON: MathSubmoduleLesson = {
    submoduleId: "A13-3",
    submoduleCode: "A13.3",
    theory: {
      title: {
        fr: "Graphique dans un repère",
        en: "Graph in a coordinate system",
        ar: "الرسم البياني في منظومة إحداثيات",
        fa: "نمودار در دستگاه مختصات",
        ti: "ስዕሊ ኣብ ናይ ቦታ ስርዓት",
        uk: "Графік у системі координат",
      },
      paragraphs: {
        fr: [
          "Le repère cartésien est formé de deux axes perpendiculaires : l'axe des abscisses (x, horizontal) et l'axe des ordonnées (y, vertical). Ils se croisent en l'origine O(0, 0).",
          "Chaque point est repéré par ses coordonnées (x ; y). On trace d'abord le point sur l'axe x, puis on monte (ou descend) jusqu'à la valeur y.",
          "Pour tracer le graphique d'une fonction : (1) faire le tableau de valeurs ; (2) placer les points ; (3) relier les points par une courbe lisse (ou une droite si la fonction est linéaire/affine).",
          "Lecture graphique : pour un x donné, lire y sur la courbe ; pour un y donné, lire x.",
        ],
        en: [
          "The Cartesian plane has two perpendicular axes: x-axis (horizontal) and y-axis (vertical), crossing at the origin O(0,0).",
          "Each point is located by coordinates (x; y). Move along x-axis then up/down to y.",
          "To draw a function's graph: (1) make a table of values; (2) plot points; (3) connect smoothly.",
          "Reading the graph: given x, read y from the curve; given y, read x.",
        ],
        ar: [
          "المستوى الديكارتي يتكون من محورين متعامدين: x (أفقي) وy (رأسي)، يتقاطعان في الأصل O(0,0).",
          "كل نقطة تُحدد بإحداثياتها (x; y).",
          "لرسم دالة: (1) جدول قيم؛ (2) وضع النقاط؛ (3) ربطها بمنحنى سلس.",
          "قراءة الرسم: من x محدد اقرأ y من المنحنى والعكس.",
        ],
        fa: [
          "صفحه دکارتی از دو محور عمود بر هم تشکیل شده: x (افقی) و y (عمودی)، در مبدأ O(0,0) تقاطع دارند.",
          "هر نقطه با مختصات (x; y) مشخص می‌شود.",
          "برای رسم نمودار تابع: (1) جدول مقادیر؛ (2) نقطه‌گذاری؛ (3) اتصال با منحنی.",
          "خواندن نمودار: برای x معین، y را از منحنی بخوان.",
        ],
        ti: [
          "ናይ ካርቴዥያን ሰሌዳ ክልተ ቋሚ ሕርሚ ዘለዎ ዩ: x (ኣፍ ደርቢ) ን y (ቁሩ), ኣብ ምንጭ O(0,0) ዝረጋገጽ.",
          "ነፍሲ ወከፍ ነጥቢ ብ (x; y) ዝውሰን ዩ.",
          "ናይ ስራሕ ስዕሊ ምስሳሉ: (1) ናይ ዋጋ ሰሌዳ; (2) ነጥቢ ምስፋሕ; (3) ስለስ ምትእስሳር.",
          "ምስ ስዕሊ ምንባብ: ምስ x ዝሃበ y ካብ ስዕሊ ምንባብ.",
        ],
        uk: [
          "Декартова площина складається з двох перпендикулярних осей: вісь x (горизонтальна) і вісь y (вертикальна), що перетинаються в початку O(0,0).",
          "Кожна точка задається координатами (x; y).",
          "Побудова графіка: (1) таблиця значень; (2) нанести точки; (3) з'єднати плавно.",
          "Читання графіка: за значенням x читати y з кривої і навпаки.",
        ],
      },
    },
    exercises: [
      { id: "a13-3-e1", promptFr: "Quelle est l'ordonnée du point (3 ; 7) ?", type: "number", acceptable: ["7"] },
      { id: "a13-3-e2", promptFr: "Quelle est l'abscisse du point (−2 ; 5) ?", type: "number", acceptable: ["-2", "−2"] },
      { id: "a13-3-e3", promptFr: "Un point est à l'origine. Quelles sont ses coordonnées ? (donne x)", type: "number", acceptable: ["0"] },
      { id: "a13-3-e4", promptFr: "Sur le graphique de f(x) = x + 3, quelle est la valeur de y quand x = 4 ?", type: "number", acceptable: ["7"] },
      { id: "a13-3-e5", promptFr: "Sur le graphique de f(x) = 2x, quel est x quand y = 10 ?", type: "number", acceptable: ["5"] },
    ],
  };
