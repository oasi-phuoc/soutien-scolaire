import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_G9_1_LESSON: MathSubmoduleLesson = {
    submoduleId: "G9-1",
    submoduleCode: "G9.1",
    theory: {
      title: {
        fr: "Repère cartésien",
        en: "Cartesian coordinate system",
        ar: "الإحداثيات الديكارتية",
        fa: "دستگاه مختصات دکارتی",
        ti: "ናይ ካርቴዥያን ስርዓት",
        uk: "Декартова система координат",
      },
      paragraphs: {
        fr: [
          "Le repère cartésien est formé de deux axes perpendiculaires : l'axe des abscisses (Ox, horizontal) et l'axe des ordonnées (Oy, vertical). Ils se croisent en O(0,0).",
          "Les quadrants : quadrant I (x>0, y>0) ; quadrant II (x<0, y>0) ; quadrant III (x<0, y<0) ; quadrant IV (x>0, y<0).",
          "Chaque point est représenté par ses coordonnées (x ; y). L'abscisse x est lue en premier (horizontal), l'ordonnée y en second (vertical).",
          "L'unité de mesure doit être la même sur les deux axes pour ne pas déformer les figures.",
        ],
        en: [
          "The Cartesian coordinate system has two perpendicular axes: Ox (horizontal) and Oy (vertical), crossing at O(0,0).",
          "Quadrants: I (x>0,y>0); II (x<0,y>0); III (x<0,y<0); IV (x>0,y<0).",
          "Each point has coordinates (x; y). x is horizontal (abscissa), y is vertical (ordinate).",
          "Same scale on both axes avoids distortion.",
        ],
        ar: [
          "المنظومة الديكارتية تتكون من محورين متعامدين Ox وOy يتقاطعان في O(0,0).",
          "الأرباع: I (x>0,y>0)؛ II (x<0,y>0)؛ III (x<0,y<0)؛ IV (x>0,y<0).",
          "كل نقطة لها إحداثيات (x; y). x أفقي، y رأسي.",
          "نفس المقياس على المحورين لتجنب التشويه.",
        ],
        fa: [
          "دستگاه مختصات دکارتی از دو محور عمود بر هم Ox و Oy تشکیل شده که در O(0,0) تقاطع دارند.",
          "ربع‌ها: I (x>0,y>0)؛ II (x<0,y>0)؛ III (x<0,y<0)؛ IV (x>0,y<0).",
          "هر نقطه با (x; y) مشخص می‌شود. x افقی، y عمودی.",
          "مقیاس یکسان روی هر دو محور تحریف را جلوگیری می‌کند.",
        ],
        ti: [
          "ናይ ካርቴዥያን ስርዓት ክልተ ቀጥታ ኩርናዕ ሕርሚ Ox ን Oy ካብ O(0,0) ዝቖምሉ ዩ.",
          "ናይ ሩብ ቦታ: I (x>0,y>0); II (x<0,y>0); III (x<0,y<0); IV (x>0,y<0).",
          "ነፍሲ ወከፍ ነጥቢ (x; y) ዘለዎ ዩ. x ኣፍ ደርቢ, y ቁሩ.",
          "ናህሰ ስኬል ናብ ክልቲ ሕርሚ ምዕሻዊ ምህናጽ.",
        ],
        uk: [
          "Декартова система координат має дві перпендикулярні осі: Ox (горизонтальна) і Oy (вертикальна), що перетинаються в O(0,0).",
          "Чверті: I (x>0,y>0); II (x<0,y>0); III (x<0,y<0); IV (x>0,y<0).",
          "Кожна точка — (x; y). x — абсциса, y — ордината.",
          "Однаковий масштаб на обох осях запобігає спотворенням.",
        ],
      },
    },
    exercises: [
      { id: "g9-1-e1", promptFr: "Quelle est l'abscisse du point (4 ; −3) ?", type: "number", acceptable: ["4"] },
      { id: "g9-1-e2", promptFr: "Quelle est l'ordonnée du point (−2 ; 7) ?", type: "number", acceptable: ["7"] },
      { id: "g9-1-e3", promptFr: "Le point (−3 ; 5) est dans quel quadrant ? (I/II/III/IV)", type: "short_text", acceptable: ["II"] },
      { id: "g9-1-e4", promptFr: "Le point (2 ; −4) est dans quel quadrant ?", type: "short_text", acceptable: ["IV"] },
      { id: "g9-1-e5", promptFr: "L'origine O a quelles coordonnées ?", type: "short_text", acceptable: ["(0;0)", "(0 ; 0)"] },
    ],
  };
