import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_G6_LESSONS: MathSubmoduleLesson[] = [
  {
    submoduleId: "G6-1",
    submoduleCode: "G6.1",
    theory: {
      title: {
        fr: "Notion d'échelle",
        en: "Notion of scale",
        ar: "مفهوم المقياس",
        fa: "مفهوم مقیاس",
        ti: "ናይ ስኬል ሓሳብ",
        uk: "Поняття масштабу",
      },
      paragraphs: {
        fr: [
          "Une échelle est le rapport entre la mesure sur un plan (ou une carte) et la mesure réelle. Échelle = distance dessinée / distance réelle.",
          "Exemple : échelle 1:100 signifie que 1 cm sur le plan correspond à 100 cm = 1 m en réalité.",
          "Une carte à l'échelle 1:50 000 signifie que 1 cm représente 50 000 cm = 500 m = 0,5 km.",
          "Échelle de réduction : échelle < 1 (ex. plan de maison). Échelle d'agrandissement : échelle > 1 (ex. plan de cellule biologique).",
        ],
        en: [
          "A scale is the ratio of a drawn measurement to the real measurement. Scale = drawn distance / real distance.",
          "Example: 1:100 means 1 cm on the plan = 100 cm = 1 m in reality.",
          "A 1:50,000 map: 1 cm represents 500 m.",
          "Reduction scale < 1 (house plan). Enlargement scale > 1 (cell diagram).",
        ],
        ar: [
          "المقياس هو نسبة المسافة المرسومة إلى المسافة الحقيقية.",
          "مثال: 1:100 يعني 1 سم على الخطة = 100 سم = 1 م.",
          "خريطة 1:50000: 1 سم يمثل 500 م.",
          "مقياس التصغير < 1. مقياس التكبير > 1.",
        ],
        fa: [
          "مقیاس نسبت فاصله رسم‌شده به فاصله واقعی است.",
          "مثال: 1:100 یعنی 1 سانتیمتر روی نقشه = 1 متر در واقعیت.",
          "نقشه 1:50000: 1 سانتیمتر نشان‌دهنده 500 متر است.",
          "مقیاس کوچک‌سازی < 1. مقیاس بزرگ‌سازی > 1.",
        ],
        ti: [
          "ስኬል ናይ ስዕሊ ርሕቀት ናብ ናህሰ ርሕቀት ሕጊ ዩ.",
          "ምሳሌ: 1:100 ዘምልክት 1 ሰም ናብ ሰሌዳ = 100 ሰም = 1 ም ኣብ ሓቂ ዓለም.",
          "ናይ 1:50000 ካርታ: 1 ሰም 500 ም ዘርኢ ዩ.",
          "ምቕናስ ስኬል < 1. ምዕባይ ስኬል > 1.",
        ],
        uk: [
          "Масштаб — відношення відстані на плані до реальної відстані.",
          "Приклад: 1:100 означає, що 1 см на плані = 1 м у реальності.",
          "Карта 1:50 000: 1 см = 500 м.",
          "Масштаб зменшення < 1; збільшення > 1.",
        ],
      },
    },
    exercises: [
      { id: "g6-1-e1", promptFr: "Échelle 1:100. 3 cm sur le plan = combien de cm en réalité ?", type: "number", acceptable: ["300"] },
      { id: "g6-1-e2", promptFr: "Échelle 1:1000. 5 cm sur la carte = combien de m en réalité ?", type: "number", acceptable: ["50"] },
      { id: "g6-1-e3", promptFr: "Quelle est la signification de l'échelle 1:200 ?", type: "short_text", acceptable: ["1 cm = 200 cm", "1 cm = 2 m"] },
      { id: "g6-1-e4", promptFr: "Une échelle de 1:50 est-elle un agrandissement ou une réduction ?", type: "short_text", acceptable: ["réduction", "reduction"] },
      { id: "g6-1-e5", promptFr: "Échelle 1:500. 4 cm sur le plan = ? m en réalité.", type: "number", acceptable: ["20"] },
    ],
  },
  {
    submoduleId: "G6-2",
    submoduleCode: "G6.2",
    theory: {
      title: {
        fr: "Lire une échelle",
        en: "Reading a scale",
        ar: "قراءة المقياس",
        fa: "خواندن مقیاس",
        ti: "ስኬል ምንባብ",
        uk: "Читання масштабу",
      },
      paragraphs: {
        fr: [
          "Lire une échelle consiste à retrouver la distance réelle à partir d'une mesure sur le dessin, ou inversement.",
          "Formule : distance réelle = distance dessinée × dénominateur de l'échelle.",
          "Exemple : plan échelle 1:50. Longueur sur le plan = 6 cm → longueur réelle = 6 × 50 = 300 cm = 3 m.",
          "Inversement : trouver la distance dessinée → distance dessinée = distance réelle ÷ dénominateur.",
        ],
        en: [
          "Reading a scale means finding the real distance from a drawing measurement, or vice versa.",
          "Formula: real distance = drawn distance × denominator.",
          "Example: scale 1:50, 6 cm → 6 × 50 = 300 cm = 3 m.",
          "Reverse: drawn = real ÷ denominator.",
        ],
        ar: [
          "قراءة المقياس: إيجاد المسافة الحقيقية من المسافة المرسومة أو العكس.",
          "الصيغة: المسافة الحقيقية = المسافة المرسومة × مقام المقياس.",
          "مثال: مقياس 1:50، 6 سم → 300 سم = 3 م.",
          "العكس: المرسومة = الحقيقية ÷ المقام.",
        ],
        fa: [
          "خواندن مقیاس یعنی یافتن فاصله واقعی از فاصله رسم‌شده یا برعکس.",
          "فرمول: فاصله واقعی = فاصله رسم‌شده × مخرج مقیاس.",
          "مثال: مقیاس 1:50، 6 سانتیمتر → 300 سانتیمتر = 3 متر.",
          "برعکس: رسم‌شده = واقعی ÷ مخرج.",
        ],
        ti: [
          "ናይ ስኬል ምንባብ ዘምልክት ካብ ናይ ምስሳሉ ርሕቀት ናህሰ ርሕቀት ምርካብ ዩ.",
          "ቅጥዒ: ናህሰ ርሕቀት = ናይ ምስሳሉ ርሕቀት × ናይ ስኬል ቀሪባ.",
          "ምሳሌ: ስኬል 1:50, 6 ሰም → 300 ሰም = 3 ም.",
          "ኣንጻር: ናይ ምስሳሉ = ናህሰ ÷ ናይ ስኬል ቀሪባ.",
        ],
        uk: [
          "Читати масштаб — знаходити реальну відстань з відстані на кресленні або навпаки.",
          "Формула: реальна відстань = відстань на кресленні × знаменник масштабу.",
          "Приклад: масштаб 1:50, 6 см → 300 см = 3 м.",
          "Зворотне: відстань на кресленні = реальна ÷ знаменник.",
        ],
      },
    },
    exercises: [
      { id: "g6-2-e1", promptFr: "Échelle 1:100. Dessin : 4,5 cm. Réalité : ? cm.", type: "number", acceptable: ["450"] },
      { id: "g6-2-e2", promptFr: "Échelle 1:200. Réalité : 600 cm. Dessin : ? cm.", type: "number", acceptable: ["3"] },
      { id: "g6-2-e3", promptFr: "Échelle 1:50. Dessin : 8 cm. Réalité : ? m.", type: "number", acceptable: ["4"] },
      { id: "g6-2-e4", promptFr: "Échelle 1:1000. Dessin : 3 cm. Réalité : ? m.", type: "number", acceptable: ["30"] },
      { id: "g6-2-e5", promptFr: "Échelle 1:25. Réalité : 75 cm. Dessin : ? cm.", type: "number", acceptable: ["3"] },
    ],
  },
  {
    submoduleId: "G6-3",
    submoduleCode: "G6.3",
    theory: {
      title: {
        fr: "Distance réelle",
        en: "Real distance",
        ar: "المسافة الحقيقية",
        fa: "فاصله واقعی",
        ti: "ናህሰ ርሕቀት",
        uk: "Реальна відстань",
      },
      paragraphs: {
        fr: [
          "Pour trouver une distance réelle à partir d'une carte ou d'un plan : mesurer la distance sur le dessin (en cm) puis multiplier par le dénominateur de l'échelle.",
          "Attention aux conversions : si l'échelle est 1:50 000, 1 cm sur la carte = 50 000 cm = 500 m = 0,5 km.",
          "Tableau de conversions : 1 km = 1 000 m = 100 000 cm. 1 m = 100 cm. 1 cm = 10 mm.",
          "Exemple : sur une carte 1:25 000, deux villes séparées de 8 cm → distance réelle = 8 × 25 000 = 200 000 cm = 2 km.",
        ],
        en: [
          "To find a real distance: measure on the drawing (cm) then multiply by the scale denominator.",
          "Unit care: 1:50,000 means 1 cm = 500 m = 0.5 km.",
          "Conversions: 1 km = 1,000 m = 100,000 cm.",
          "Example: 8 cm on a 1:25,000 map → 200,000 cm = 2 km.",
        ],
        ar: [
          "لإيجاد المسافة الحقيقية: قس على الرسم (سم) ثم اضرب في مقام المقياس.",
          "تحويل: 1:50000 → 1 سم = 500 م = 0.5 كم.",
          "1 كم = 1000 م = 100000 سم.",
          "مثال: 8 سم على خريطة 1:25000 → 2 كم.",
        ],
        fa: [
          "برای یافتن فاصله واقعی: فاصله روی نقشه (سانتیمتر) را اندازه بگیر، سپس در مخرج مقیاس ضرب کن.",
          "توجه: 1:50000 یعنی 1 سانتیمتر = 500 متر = 0.5 کیلومتر.",
          "تبدیل: 1 کیلومتر = 1000 متر = 100000 سانتیمتر.",
          "مثال: 8 سانتیمتر روی نقشه 1:25000 → 2 کیلومتر.",
        ],
        ti: [
          "ናህሰ ርሕቀት ምርካብ: ናይ ምስሳሉ ርሕቀት (ሰም) ዕቃቤ ብናይ ስኬል ቀሪባ ምርባሕ.",
          "ምቕያር: 1:50000 → 1 ሰም = 500 ም = 0.5 ኪ.ሜ.",
          "1 ኪ.ሜ = 1000 ም = 100000 ሰም.",
          "ምሳሌ: 8 ሰም ናብ 1:25000 ካርታ → 2 ኪ.ሜ.",
        ],
        uk: [
          "Для знаходження реальної відстані: виміряти на кресленні (в см), помножити на знаменник масштабу.",
          "Перетворення: 1:50 000 → 1 см = 500 м = 0,5 км.",
          "1 км = 1 000 м = 100 000 см.",
          "Приклад: 8 см на карті 1:25 000 → 2 км.",
        ],
      },
    },
    exercises: [
      { id: "g6-3-e1", promptFr: "Carte 1:50000. Distance sur carte : 3 cm. Distance réelle en km ?", type: "number", acceptable: ["1,5", "1.5"] },
      { id: "g6-3-e2", promptFr: "Carte 1:25000. Distance sur carte : 4 cm. Distance réelle en m ?", type: "number", acceptable: ["1000"] },
      { id: "g6-3-e3", promptFr: "Plan 1:200. Longueur dessinée : 7 cm. Longueur réelle en m ?", type: "number", acceptable: ["14"] },
      { id: "g6-3-e4", promptFr: "Carte 1:100000. 2 cm sur la carte. Réalité en km ?", type: "number", acceptable: ["2"] },
      { id: "g6-3-e5", promptFr: "1 km = combien de cm ?", type: "number", acceptable: ["100000"] },
    ],
  },
  {
    submoduleId: "G6-4",
    submoduleCode: "G6.4",
    theory: {
      title: {
        fr: "Représentation à l'échelle",
        en: "Scale drawing",
        ar: "الرسم على المقياس",
        fa: "نقشه با مقیاس",
        ti: "ናይ ስኬል ምስሳሉ",
        uk: "Масштабне креслення",
      },
      paragraphs: {
        fr: [
          "Pour créer un dessin à l'échelle : (1) choisir une échelle adaptée ; (2) diviser chaque mesure réelle par le dénominateur de l'échelle pour obtenir la mesure à dessiner.",
          "Formule : distance dessinée = distance réelle ÷ dénominateur.",
          "Exemple : dessiner une pièce de 6 m × 4 m à l'échelle 1:50. → 6 m = 600 cm → 600 ÷ 50 = 12 cm ; 4 m = 400 cm → 400 ÷ 50 = 8 cm. Dessiner un rectangle 12 cm × 8 cm.",
          "Vérification : remultiplier les mesures du dessin par le dénominateur doit redonner les mesures réelles.",
        ],
        en: [
          "Creating a scale drawing: (1) choose an appropriate scale; (2) divide each real measurement by the denominator.",
          "Formula: drawn distance = real distance ÷ denominator.",
          "Example: room 6 m × 4 m at 1:50 → 12 cm × 8 cm drawing.",
          "Check: multiply drawn measurements by denominator to recover real measurements.",
        ],
        ar: [
          "إنشاء رسم على المقياس: (1) اختر مقياساً مناسباً؛ (2) قسّم كل قياس حقيقي على المقام.",
          "الصيغة: المرسومة = الحقيقية ÷ المقام.",
          "مثال: غرفة 6م × 4م بمقياس 1:50 → 12 سم × 8 سم.",
          "تحقق: اضرب القياسات المرسومة بالمقام.",
        ],
        fa: [
          "ساخت نقشه با مقیاس: (1) مقیاس مناسب انتخاب کن؛ (2) هر اندازه واقعی را بر مخرج تقسیم کن.",
          "فرمول: فاصله رسم‌شده = فاصله واقعی ÷ مخرج.",
          "مثال: اتاق 6م × 4م با مقیاس 1:50 → 12سانتیمتر × 8سانتیمتر.",
          "تأیید: اندازه‌های رسم را در مخرج ضرب کن.",
        ],
        ti: [
          "ናይ ስኬል ምስሳሉ ምፍጣር: (1) ቅቡሉ ስኬል ምምራጽ; (2) ናህሰ ርሕቀት ብቀሪባ ምምቃሉ.",
          "ቅጥዒ: ናይ ምስሳሉ = ናህሰ ÷ ቀሪባ.",
          "ምሳሌ: ክፍሊ 6ም × 4ም ናብ 1:50 → 12ሰም × 8ሰም.",
          "ፍተሻ: ናይ ምስሳሉ ብቀሪባ ምርባሕ ናህሰ ክምልስ.",
        ],
        uk: [
          "Створення масштабного креслення: (1) вибрати відповідний масштаб; (2) поділити кожен реальний розмір на знаменник.",
          "Формула: відстань на кресленні = реальна відстань ÷ знаменник.",
          "Приклад: кімната 6 м × 4 м, масштаб 1:50 → 12 см × 8 см.",
          "Перевірка: помножити розміри креслення на знаменник.",
        ],
      },
    },
    exercises: [
      { id: "g6-4-e1", promptFr: "Échelle 1:100. Pièce réelle 8 m de long. Dessin : ? cm.", type: "number", acceptable: ["8"] },
      { id: "g6-4-e2", promptFr: "Échelle 1:50. Mur réel 3 m. Dessin : ? cm.", type: "number", acceptable: ["6"] },
      { id: "g6-4-e3", promptFr: "Échelle 1:200. Jardin réel 20 m. Dessin : ? cm.", type: "number", acceptable: ["10"] },
      { id: "g6-4-e4", promptFr: "Échelle 1:25. Objet réel 1 m = 100 cm. Dessin : ? cm.", type: "number", acceptable: ["4"] },
      { id: "g6-4-e5", promptFr: "Échelle 1:500. Route réelle 5 km = 500000 cm. Dessin : ? cm.", type: "number", acceptable: ["1000"] },
    ],
  },
  {
    submoduleId: "G6-5",
    submoduleCode: "G6.5",
    theory: {
      title: {
        fr: "Agrandir et réduire",
        en: "Enlarging and reducing",
        ar: "التكبير والتصغير",
        fa: "بزرگ و کوچک کردن",
        ti: "ምዕባይ ን ምቕናስ",
        uk: "Збільшення та зменшення",
      },
      paragraphs: {
        fr: [
          "Agrandir une figure : multiplier toutes ses dimensions par un facteur k > 1. Réduire : multiplier par 0 < k < 1.",
          "Les angles sont conservés. Les longueurs sont multipliées par k. Les aires sont multipliées par k².",
          "Exemple : agrandir une photo 10 cm × 15 cm avec k = 2 → photo 20 cm × 30 cm. Aire : 150 cm² → 600 cm² (× 4 = k²).",
          "En pratique : photocopieuse (%, ex. 150% = agrandir × 1,5 ; 75% = réduire × 0,75).",
        ],
        en: [
          "Enlarging: multiply all dimensions by k > 1. Reducing: multiply by 0 < k < 1.",
          "Angles preserved. Lengths ×k. Areas ×k².",
          "Example: 10×15 cm photo with k=2 → 20×30 cm. Area: 150 → 600 cm² (×4).",
          "Photocopier: 150% = ×1.5 (enlarge); 75% = ×0.75 (reduce).",
        ],
        ar: [
          "التكبير: ضرب جميع الأبعاد بـ k > 1. التصغير: ضرب بـ 0 < k < 1.",
          "الزوايا محفوظة. الأطوال × k. المساحات × k².",
          "مثال: صورة 10×15 سم مع k=2 → 20×30 سم.",
          "آلة النسخ: 150% تكبير؛ 75% تصغير.",
        ],
        fa: [
          "بزرگ‌سازی: همه ابعاد را در k > 1 ضرب کن. کوچک‌سازی: در 0 < k < 1.",
          "زوایا حفظ می‌شوند. طول‌ها ×k. مساحت‌ها ×k².",
          "مثال: عکس 10×15 سانتیمتر با k=2 → 20×30 سانتیمتر.",
          "کپی‌ساز: 150% بزرگ‌سازی؛ 75% کوچک‌سازی.",
        ],
        ti: [
          "ምዕባይ: ኩሉ ዓቐን ብ k > 1 ምርባሕ. ምቕናስ: ብ 0 < k < 1 ምርባሕ.",
          "ኩርናዓት ዕቃቤ. ርዝሓ × k. ሰፊሓ × k².",
          "ምሳሌ: ስዕሊ 10×15 ሰም ምስ k=2 → 20×30 ሰም.",
          "ናይ ፎቶ-ኮፒ ሜሽን: 150% ምዕባይ; 75% ምቕናስ.",
        ],
        uk: [
          "Збільшення: усі розміри × k (k > 1). Зменшення: × k (0 < k < 1).",
          "Кути зберігаються. Довжини ×k. Площі ×k².",
          "Приклад: фото 10×15 см, k=2 → 20×30 см. Площа: 150 → 600 см² (×4).",
          "Ксерокс: 150% = збільшення ×1,5; 75% = зменшення ×0,75.",
        ],
      },
    },
    exercises: [
      { id: "g6-5-e1", promptFr: "k = 3. Côté 4 cm → côté image = ?", type: "number", acceptable: ["12"] },
      { id: "g6-5-e2", promptFr: "k = 0,5. Côté 10 cm → côté image = ?", type: "number", acceptable: ["5"] },
      { id: "g6-5-e3", promptFr: "k = 2. Aire = 9 cm² → aire image = ?", type: "number", acceptable: ["36"] },
      { id: "g6-5-e4", promptFr: "Photocopie à 200%. k = ?", type: "number", acceptable: ["2"] },
      { id: "g6-5-e5", promptFr: "k = 4. Les angles sont-ils conservés ? (oui/non)", type: "short_text", acceptable: ["oui"] },
    ],
  },
];
