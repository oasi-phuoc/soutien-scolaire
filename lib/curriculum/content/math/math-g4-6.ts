import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_G4_6_LESSON: MathSubmoduleLesson = {
    submoduleId: "G4-6",
    submoduleCode: "G4.6",
    theory: {
      title: {
        fr: "Médiatrice et bissectrice",
        en: "Perpendicular bisector and angle bisector",
        ar: "المنصف والنصف",
        fa: "نیمساز عمود و نیمساز زاویه",
        ti: "ናይ ማዕኸላዊ ቀጥታ ኩርናዕ ን ናይ ኩርናዕ ናይ ፍርቂ ሕርሚ",
        uk: "Серединний перпендикуляр і бісектриса",
      },
      paragraphs: {
        fr: [
          "La médiatrice d'un segment [AB] est la droite perpendiculaire à [AB] passant par son milieu. Tout point de la médiatrice est équidistant de A et de B.",
          "Construction de la médiatrice : tracer deux arcs de même rayon (> AB/2) depuis A et B. La droite passant par leurs intersections est la médiatrice.",
          "La bissectrice d'un angle est la demi-droite qui partage l'angle en deux angles égaux. Tout point de la bissectrice est équidistant des deux côtés de l'angle.",
          "Construction de la bissectrice : tracer un arc depuis le sommet, puis deux arcs de même rayon depuis les intersections sur les côtés.",
        ],
        en: [
          "The perpendicular bisector of [AB] is perpendicular to AB through its midpoint. Every point on it is equidistant from A and B.",
          "Construction: two arcs of equal radius from A and B, then join the intersections.",
          "The angle bisector splits an angle into two equal halves. Points on it are equidistant from both sides.",
          "Construction: arc from vertex, then equal arcs from the two side intersections.",
        ],
        ar: [
          "منصف القطعة [AB] خط عمودي على AB يمر بنقطة منتصفه. كل نقطة عليه متساوية البعد من A وB.",
          "إنشاؤه: قوسان بنفس النصف القطر من A وB ثم صل تقاطعاتهما.",
          "منصف الزاوية يقسمها إلى زاويتين متساويتين.",
          "إنشاؤه: قوس من الرأس ثم قوسان من نقطتي التقاطع.",
        ],
        fa: [
          "نیمساز عمود [AB] خطی است عمود بر AB و از نقطه وسط آن می‌گذرد. هر نقطه روی آن از A و B مساوی فاصله دارد.",
          "ساخت: دو قوس با شعاع مساوی از A و B، سپس تقاطع‌ها را وصل کن.",
          "نیمساز زاویه آن را به دو نصف مساوی تقسیم می‌کند.",
          "ساخت: قوس از رأس سپس قوس‌های مساوی از تقاطع‌ها.",
        ],
        ti: [
          "ናይ ሰቤርቲ [AB] ናይ ማዕኸላዊ ቀጥታ ኩርናዕ ካብ ማዕኸሉ ዝሓልፍ ቀጥታ ዩ. ኩሉ ነጥቢ ካብ A ን B ዕኩል ርሕቀት ዘለዎ ዩ.",
          "ምህናጽ: ካብ A ን B ዕኩል ናይ ፍርቂ-ቁምብዛ ቀስቲ ምምሃዝ ናይ ምትፍዋዕ ሕርሚ ምሳሉ.",
          "ናይ ኩርናዕ ናይ ፍርቂ ሕርሚ ናብ ክልተ ዕኩል ቅርጺ ዝምቅሎ ዩ.",
          "ምህናጽ: ካብ ርእሲ ቀስቲ ካብ ናህሰ ቀስቲ.",
        ],
        uk: [
          "Серединний перпендикуляр [AB] — це пряма, перпендикулярна до AB і що проходить через її середину. Усі точки на ній рівновіддалені від A і B.",
          "Побудова: провести рівні дуги з A і B, з'єднати точки перетину.",
          "Бісектриса кута ділить його навпіл. Кожна точка на ній рівновіддалена від обох сторін кута.",
          "Побудова: дуга з вершини, потім рівні дуги з перетинів.",
        ],
      },
    },
    exercises: [
      { id: "g4-6-e1", promptFr: "La médiatrice de [AB] passe par le milieu de AB ? (oui/non)", type: "short_text", acceptable: ["oui"] },
      { id: "g4-6-e2", promptFr: "Un point sur la médiatrice de [AB] est-il équidistant de A et B ? (oui/non)", type: "short_text", acceptable: ["oui"] },
      { id: "g4-6-e3", promptFr: "La bissectrice d'un angle de 80° crée deux angles de combien de degrés ?", type: "number", acceptable: ["40"] },
      { id: "g4-6-e4", promptFr: "La médiatrice est-elle perpendiculaire au segment ? (oui/non)", type: "short_text", acceptable: ["oui"] },
      { id: "g4-6-e5", promptFr: "Pour construire la médiatrice, quel outil est indispensable ?", type: "short_text", acceptable: ["compas"] },
    ],
  };
