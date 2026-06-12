import type { SubmoduleTrad } from "./trad-types";

export const TRAD_G6_4: SubmoduleTrad = {
  submoduleId: "G6-4",
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
  consignes: {
    "g6-4-e1": { fr: "Échelle 1:100. Pièce réelle 8 m de long. Dessin : ? cm.", en: "Scale 1:100. Piece reelle 8 m de long. Dessin : ? cm." },
    "g6-4-e2": { fr: "Échelle 1:50. Mur réel 3 m. Dessin : ? cm.", en: "Scale 1:50. Mur reel 3 m. Dessin : ? cm." },
    "g6-4-e3": { fr: "Échelle 1:200. Jardin réel 20 m. Dessin : ? cm.", en: "Scale 1:200. Jardin reel 20 m. Dessin : ? cm." },
    "g6-4-e4": { fr: "Échelle 1:25. Objet réel 1 m = 100 cm. Dessin : ? cm.", en: "Scale 1:25. Objet reel 1 m = 100 cm. Dessin : ? cm." },
    "g6-4-e5": { fr: "Échelle 1:500. Route réelle 5 km = 500000 cm. Dessin : ? cm.", en: "Scale 1:500. Route reelle 5 km = 500000 cm. Dessin : ? cm." },
  },
};