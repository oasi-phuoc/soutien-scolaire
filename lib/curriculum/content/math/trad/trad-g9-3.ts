import type { SubmoduleTrad } from "./trad-types";

export const TRAD_G9_3: SubmoduleTrad = {
  submoduleId: "G9-3",
  title: {
    fr: "Aires latérale et totale",
    en: "Lateral and total surface area",
    ar: "المساحة الجانبية والكلية",
    fa: "مساحت جانبی و کل",
    ti: "ናይ ጥሰርዊ ን ምሉእ ሰፊሓ",
    uk: "Бічна та повна площа поверхні",
  },
  paragraphs: {
    fr: [
          "L'aire latérale est la somme des faces latérales (sans les bases). L'aire totale inclut également les bases.",
          "Pavé droit (L × l × h) : Aire totale = 2(Ll + Lh + lh).",
          "Cylindre (r, h) : Aire latérale = 2πrh. Aire totale = 2πr² + 2πrh = 2πr(r + h).",
          "Prisme (base B, périmètre p, hauteur h) : Aire latérale = p × h. Aire totale = p × h + 2B.",
        ],
    en: [
          "Lateral area = sum of lateral faces (no bases). Total area includes bases.",
          "Cuboid (L × w × h): Total area = 2(Lw + Lh + wh).",
          "Cylinder (r, h): Lateral = 2πrh. Total = 2πr(r+h).",
          "Prism (base area B, perimeter p, height h): Lateral = ph. Total = ph + 2B.",
        ],
    ar: [
          "المساحة الجانبية = مجموع الأوجه الجانبية. الكلية تشمل القاعدتين.",
          "متوازي مستطيلات: المساحة الكلية = 2(Ll + Lh + lh).",
          "أسطوانة: جانبية = 2πrh. كلية = 2πr(r + h).",
          "منشور: جانبية = p × h. كلية = p×h + 2B.",
        ],
    fa: [
          "مساحت جانبی = مجموع وجوه جانبی. مساحت کل شامل قاعده‌ها هم می‌شود.",
          "مکعب مستطیل: مساحت کل = 2(Ll + Lh + lh).",
          "استوانه: جانبی = 2πrh. کل = 2πr(r+h).",
          "منشور: جانبی = p×h. کل = p×h + 2B.",
        ],
    ti: [
          "ናይ ጥሰርዊ ሰፊሓ = ናይ ጥሰርዊ ፊት ድምር. ምሉእ ሰፊሓ ሰረት ዘካተተ ዩ.",
          "ፓቬ: ምሉእ ሰፊሓ = 2(Ll + Lh + lh).",
          "ሲሊንደር: ጥሰርዊ = 2πrh. ምሉእ = 2πr(r+h).",
          "ፕሪዝም: ጥሰርዊ = p×h. ምሉእ = p×h + 2B.",
        ],
    uk: [
          "Бічна площа = сума бічних граней. Повна площа включає основи.",
          "Прямокутний паралелепіпед: S = 2(Ll + Lh + lh).",
          "Циліндр: бічна = 2πrh. Повна = 2πr(r+h).",
          "Призма: бічна = p×h. Повна = p×h + 2B.",
        ],
  },
  consignes: {
    "g8-3-e1": { fr: "Pavé droit 3×4×5 cm. Aire totale = 2(3×4 + 3×5 + 4×5) = ?", en: "Rectangular prism 3×4×5 cm. Total surface area = 2(3×4 + 3×5 + 4×5) = ?" },
    "g8-3-e2": { fr: "Cube de côté 4 cm. Aire totale = ?", en: "Cube de cote 4 cm. Total area = ?" },
    "g8-3-e3": { fr: "Cylindre r=3 cm, h=5 cm. Aire latérale = 2π×3×5 ≈ ? (π≈3,14)", en: "Cylindre r=3 cm, h=5 cm. Aire laterale = 2π×3×5 ≈ ? (π≈3.14)" },
    "g8-3-e4": { fr: "Cylindre r=2 cm, h=6 cm. Aire totale = 2π×2×(2+6) ≈ ? (π≈3,14)", en: "Cylindre r=2 cm, h=6 cm. Aire totale = 2π×2×(2+6) ≈ ? (π≈3.14)" },
    "g8-3-e5": { fr: "Prisme triangulaire : aire de la base 6 cm², périmètre base 12 cm, hauteur 5 cm. Aire totale = ?", en: "Prisme triangulaire : aire de la base 6 cm², perimetre base 12 cm, hauteur 5 cm. Total area = ?" },
  },
};