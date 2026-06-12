import type { SubmoduleTrad } from "./trad-types";

export const TRAD_G4_4: SubmoduleTrad = {
  submoduleId: "G4-4",
  title: {
    fr: "Carré, rectangle, losange",
    en: "Square, rectangle, rhombus",
    ar: "المربع، المستطيل، المعين",
    fa: "مربع، مستطیل، لوزی",
    ti: "ካሬ, ካሬ-ሓለቃ, ሮምቡስ",
    uk: "Квадрат, прямокутник, ромб",
  },
  paragraphs: {
    fr: [
          "Construction d'un rectangle ABCD de longueur L et largeur l : (1) tracer AB = L ; (2) tracer des perpendiculaires en A et B ; (3) reporter l sur chaque perpendiculaire pour obtenir D et C ; (4) tracer DC.",
          "Construction d'un carré : même méthode avec L = l, ou utiliser le compas pour reporter la longueur.",
          "Construction d'un losange de côté a et diagonale d₁ : tracer d₁, puis tracer deux arcs de rayon a depuis chaque extrémité.",
          "Vérification : un rectangle a 4 angles droits ; un losange a 4 côtés égaux.",
        ],
    en: [
          "Constructing rectangle ABCD: (1) draw AB = L; (2) perpendiculars at A and B; (3) mark width l on each perpendicular; (4) connect.",
          "Square: same with L = l.",
          "Rhombus with side a and diagonal d₁: draw d₁, then arcs of radius a from each end.",
          "Check: rectangle has 4 right angles; rhombus has 4 equal sides.",
        ],
    ar: [
          "إنشاء مستطيل ABCD: (1) ارسم AB؛ (2) عامودَين في A وB؛ (3) ضع العرض على كل عمود؛ (4) صل.",
          "المربع: نفس الطريقة مع L = l.",
          "المعين: ارسم قطراً ثم قوسين.",
          "تحقق: المستطيل له 4 زوايا قائمة؛ المعين له 4 أضلاع متساوية.",
        ],
    fa: [
          "ساخت مستطیل ABCD: (1) AB را رسم کن؛ (2) عمودها در A و B؛ (3) عرض را روی هر عمود علامت بزن؛ (4) وصل کن.",
          "مربع: روش یکسان با L = l.",
          "لوزی: قطر را رسم کن سپس دو قوس.",
          "تأیید: مستطیل 4 زاویه قائمه دارد؛ لوزی 4 ضلع مساوی.",
        ],
    ti: [
          "ካሬ-ሓለቃ ABCD ምህናጽ: (1) AB ምስሳሉ; (2) ናይ A ን B ቀጥታ ኩርናዓት; (3) ወርሓዊ ዕቃቤ; (4) ምዝካር.",
          "ካሬ: ሓደ ኣፈጻጽማ L = l.",
          "ሮምቡስ: ዲያጎናሎ ምስሳሉ ካብ ናይ ቅርጺ ቀስቲ.",
          "ፍተሻ: ካሬ-ሓለቃ 4 ቀጥታ ኩርናዓት; ሮምቡስ 4 ዕኩል ጎቦ.",
        ],
    uk: [
          "Побудова прямокутника ABCD: (1) провести AB; (2) перпендикуляри в A і B; (3) відкласти ширину; (4) з'єднати.",
          "Квадрат: те ж саме, L = l.",
          "Ромб: провести діагональ, потім дуги радіуса a.",
          "Перевірка: прямокутник — 4 прямих кути; ромб — 4 рівні сторони.",
        ],
  },
  consignes: {
    "g4-4-e1": { fr: "Pour construire un rectangle, combien d'angles droits doit-on tracer ?", en: "To construct a rectangle, how many right angles must be drawn?" },
    "g4-4-e2": { fr: "Un losange a tous ses côtés égaux ? (oui/non)", en: "Does a rhombus have all its sides equal? (yes/no)" },
    "g4-4-e3": { fr: "Quel outil utilise-t-on pour tracer les perpendiculaires dans la construction d'un rectangle ?", en: "Which tool is used to draw perpendicular lines when constructing a rectangle?" },
    "g4-4-e4": { fr: "Un carré est-il un losange ? (oui/non)", en: "Is a square a rhombus? (yes/no)" },
    "g4-4-e5": { fr: "Pour un losange de côté 5 cm, tous les côtés mesurent ?", en: "For a rhombus with side 5 cm, all sides measure?" },
  },
};