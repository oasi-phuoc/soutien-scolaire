import type { SubmoduleTrad } from "./trad-types";

export const TRAD_G5_3: SubmoduleTrad = {
  submoduleId: "G5-3",
  title: {
    fr: "Pavé droit",
    en: "Cuboid",
    ar: "متوازي المستطيلات",
    fa: "مکعب مستطیل",
    ti: "ፓቬ ደርቢ",
    uk: "Прямокутний паралелепіпед",
    pt: "Paralelepípedo",
    so: "Sanadka toosan",
    tr: "Dikdörtgenler prizması",
    ps: "مستطیل غوندې",
  },
  paragraphs: {
    fr: [
      "Volume du pavé droit : V = L × l × h.",
      "Exemple : pavé 6 cm × 4 cm × 3 cm → V = 6 × 4 × 3 = 72 cm³.",
      "Applications : volume d'une boîte, d'un container, d'une pièce.",
      "Trouver une dimension : h = V / (L × l).",
    ],
    en: [
      "Volume of a cuboid: V = L × w × h.",
      "Example: 6×4×3 cm → V = 72 cm³.",
      "Applications: boxes, rooms, containers.",
      "Finding a dimension: h = V / (L × w).",
    ],
    ar: [
      "حجم متوازي المستطيلات: V = L × l × h.",
      "مثال: 6 × 4 × 3 سم → V = 72 سم³.",
      "تطبيقات: صندوق، حجرة، حاوية.",
      "إيجاد بُعد: h = V / (L × l).",
    ],
    fa: [
      "حجم مکعب مستطیل: V = L × l × h.",
      "مثال: 6 × 4 × 3 سانتیمتر → V = 72 سانتیمتر³.",
      "کاربردها: جعبه، اتاق، مخزن.",
      "یافتن ارتفاع: h = V / (L × l).",
    ],
    ti: [
      "ናይ ፓቬ ዓቐን: V = L × l × h.",
      "ምሳሌ: 6 × 4 × 3 ሰም → V = 72 ሰም³.",
      "ኣሰፋ: ካሬ, ክፍሊ, ካርጎ.",
      "ቁምና ምርካብ: h = V / (L × l).",
    ],
    uk: [
      "Об'єм прямокутного паралелепіпеда: V = L × l × h.",
      "Приклад: 6 × 4 × 3 см → V = 72 см³.",
      "Застосування: коробки, кімнати, контейнери.",
      "Знайти розмір: h = V / (L × l).",
    ],
    pt: [
      "Volume do paralelepípedo: V = L × l × h.",
      "Exemplo: 6 × 4 × 3 cm → V = 72 cm³.",
      "Aplicações: caixas, quartos, contentores.",
      "Encontrar uma dimensão: h = V / (L × l).",
    ],
    so: [
      "Cufnaanta sanadka toosan: V = L × l × h.",
      "Tusaale: 6 × 4 × 3 sm → V = 72 sm³.",
      "Isticmaalka: sanduuq, qol, weeel.",
      "Helida dherer: h = V / (L × l).",
    ],
    tr: [
      "Dikdörtgenler prizmasının hacmi: V = U × g × y.",
      "Örnek: 6 × 4 × 3 cm → V = 72 cm³.",
      "Uygulamalar: kutular, odalar, konteynerler.",
      "Boyut bulmak: h = V / (L × g).",
    ],
    ps: [
      "د مستطیل غوندې حجم: V = L × l × h.",
      "مثال: 6 × 4 × 3 سانتیمتر → V = 72 سانتیمتر³.",
      "کارونه: بکس، کوټه، ظرف.",
      "اندازه موندل: h = V / (L × l).",
    ],
  },
  consignes: {
    "g5-5-e1": { fr: "Volume d'un pavé 5 × 3 × 4 cm.", en: "Volume of a cuboid 5 × 3 × 4 cm.", ar: "حجم متوازي مستطيلات 5 × 3 × 4 سم.", pt: "Volume de um paralelepípedo 5 × 3 × 4 cm.", tr: "5 × 3 × 4 cm dikdörtgenler prizmasının hacmi." },
    "g5-5-e2": { fr: "Volume d'un pavé 10 × 6 × 2 cm.", en: "Volume of a cuboid 10 × 6 × 2 cm.", ar: "حجم متوازي مستطيلات 10 × 6 × 2 سم.", pt: "Volume de um paralelepípedo 10 × 6 × 2 cm.", tr: "10 × 6 × 2 cm dikdörtgenler prizmasının hacmi." },
    "g5-5-e3": { fr: "Pavé V = 120 cm³, L = 5 cm, l = 4 cm. h = ?", en: "Cuboid V = 120 cm³, L = 5 cm, w = 4 cm. h = ?", ar: "متوازي مستطيلات V = 120 سم³, L = 5, l = 4. h = ?", pt: "Paralelepípedo V = 120 cm³, L = 5, l = 4. h = ?", tr: "V = 120 cm³, L = 5 cm, g = 4 cm. h = ?" },
    "g5-5-e4": { fr: "Volume d'une pièce 4 m × 3 m × 2,5 m (en m³).", en: "Volume of a room 4 m × 3 m × 2.5 m (in m³).", ar: "حجم غرفة 4 م × 3 م × 2.5 م.", pt: "Volume de um quarto 4 m × 3 m × 2,5 m (em m³).", tr: "4 m × 3 m × 2,5 m boyutlarındaki odanın hacmi (m³ cinsinden)." },
    "g5-5-e5": { fr: "Pavé 8 × 8 × 8 cm. Est-ce un cube ? (oui/non)", en: "Cuboid 8 × 8 × 8 cm. Is it a cube? (yes/no)", ar: "متوازي مستطيلات 8 × 8 × 8 سم. هل هو مكعب؟", pt: "Paralelepípedo 8 × 8 × 8 cm. É um cubo? (sim/não)", tr: "8 × 8 × 8 cm. Bu bir küp mü? (evet/hayır)" },
  },
};
