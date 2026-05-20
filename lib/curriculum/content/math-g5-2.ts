import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_G5_2_LESSON: MathSubmoduleLesson = {
    submoduleId: "G5-2",
    submoduleCode: "G5.2",
    theory: {
      title: {
        fr: "Symétrie centrale",
        en: "Central symmetry",
        ar: "التناظر المركزي",
        fa: "تقارن مرکزی",
        ti: "ናይ ማዕኸን ምስምሳል",
        uk: "Центральна симетрія",
      },
      paragraphs: {
        fr: [
          "La symétrie centrale de centre O associe à chaque point M son image M' telle que O est le milieu de [MM']. On effectue une rotation de 180° autour de O.",
          "Propriétés : conservation des distances, des angles et des aires. Le centre O est le milieu de chaque segment [MM'].",
          "Construction : tracer la droite OM, reporter OM de l'autre côté de O pour obtenir M'.",
          "Figures ayant un centre de symétrie : parallélogramme, rectangle, losange, carré, cercle. Pas le triangle (en général).",
        ],
        en: [
          "Central symmetry about O maps M to M' such that O is the midpoint of [MM']. It is a 180° rotation.",
          "Properties: distances, angles, areas preserved. O is the midpoint of every [MM'].",
          "Construction: draw line through O and M; mark OM on the other side.",
          "Figures with a center of symmetry: parallelogram, rectangle, rhombus, square, circle.",
        ],
        ar: [
          "التناظر المركزي حول O يربط M بـ M' حيث O منتصف MM'. هو دوران بـ 180°.",
          "الخصائص: حفظ المسافات والزوايا والمساحات.",
          "الإنشاء: ارسم خطاً بـ OM وانقل OM من الجهة الأخرى.",
          "الأشكال ذات المركز: متوازي الأضلاع، المستطيل، المعين، المربع، الدائرة.",
        ],
        fa: [
          "تقارن مرکزی حول O هر نقطه M را به M' نگاشت می‌کند که O نقطه وسط [MM'] است. این یک چرخش 180° است.",
          "ویژگی‌ها: فاصله‌ها، زوایا و مساحت‌ها حفظ می‌شوند.",
          "ساخت: خط از O و M بکش، OM را از طرف دیگر علامت بزن.",
          "اشکال با مرکز تقارن: متوازی‌الاضلاع، مستطیل، لوزی، مربع، دایره.",
        ],
        ti: [
          "ናይ ማዕኸን ምስምሳል ናይ O ነፍሲ ወከፍ M ናብ M' ዘቕርብ ዩ O ማዕኸሉ ናይ [MM'] ዩ. 180° ምምቕቃሉ ዩ.",
          "ንብረታት: ርሕቀት, ኩርናዓት, ሰፊሓ ዕቃቤ.",
          "ምህናጽ: ሕርሚ ካብ O ን M ምምሃዝ OM ናብ ካሊእ ሸነኽ.",
          "ቅርጺ ምስ ናይ ማዕኸን ምስምሳል: ፓራሌሎግራም, ካሬ-ሓለቃ, ሮምቡስ, ዓውዲ.",
        ],
        uk: [
          "Центральна симетрія відносно O відображає M в M' так, що O — середина [MM']. Це рівнозначно повороту на 180°.",
          "Властивості: зберігаються відстані, кути та площі.",
          "Побудова: провести пряму OM; відкласти OM з іншого боку O.",
          "Фігури, що мають центр симетрії: паралелограм, прямокутник, ромб, квадрат, коло.",
        ],
      },
    },
    exercises: [
      { id: "g5-2-e1", promptFr: "La symétrie centrale conserve-t-elle les longueurs ? (oui/non)", type: "short_text", acceptable: ["oui"] },
      { id: "g5-2-e2", promptFr: "Le symétrique du point (2 ; 3) par rapport à O(0,0) est le point (? ; ?).", type: "short_text", acceptable: ["(-2;-3)", "(−2;−3)", "-2,-3"] },
      { id: "g5-2-e3", promptFr: "Un triangle a-t-il généralement un centre de symétrie ? (oui/non)", type: "short_text", acceptable: ["non"] },
      { id: "g5-2-e4", promptFr: "Un parallélogramme a-t-il un centre de symétrie ? (oui/non)", type: "short_text", acceptable: ["oui"] },
      { id: "g5-2-e5", promptFr: "La symétrie centrale est équivalente à une rotation de combien de degrés ?", type: "number", acceptable: ["180"] },
    ],
  };
