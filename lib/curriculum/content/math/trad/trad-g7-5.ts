import type { SubmoduleTrad } from "./trad-types";

const S = (fr: string, en: string, ar: string, fa: string, ti: string, uk: string) =>
  ({ fr, en, ar, fa, ti, uk });

export const TRAD_G7_5: SubmoduleTrad = {
  submoduleId: "G7-5",
  title: S(
    "Rotation",
    "Rotation",
    "الدوران",
    "دوران",
    "ምምቕቃሉ",
    "Поворот",
  ),
  blocks: [
    { text: S("Tourner une figure", "Rotating a figure", "تدوير شكل", "چرخاندن شکل", "ስእሊ ምምቕቃሉ", "Поворот фігури") },
    { text: S(
      "Une rotation fait tourner chaque point autour d'un centre. Sur le quadrillage, le trait bleu indique le sens de la rotation.",
      "A rotation turns each point around a center. On the grid, the blue mark shows the rotation direction.",
      "الدوران يدور كل نقطة حول مركز. على الشبكة، العلامة الزرقاء تبين اتجاه الدوران.",
      "دوران هر نقطه را حول یک مرکز می‌چرخاند. روی شبکه، علامت آبی جهت چرخش را نشان می‌دهد.",
      "ምምቕቃሉ ነፍሲ ወከፍ ነጥቢ ኣብ ዙርያ ማእከል የምቕቅል። ሰማያዊ መስመር ኣንፈት የርኢ።",
      "Поворот обертає кожну точку навколо центра. Синя мітка на сітці показує напрям.",
    ) },
    { text: S("Le trait bleu", "The blue mark", "العلامة الزرقاء", "علامت آبی", "ሰማያዊ መስመር", "Синя мітка") },
    { label: S("", "", "", "", "", ""), items: {
      fr: ["Ex.1 : modèle à gauche → haut / droite / bas.", "Ex.2 : modèle à droite → haut / gauche / bas."],
      en: ["Ex.1: model on the left → top / right / bottom.", "Ex.2: model on the right → top / left / bottom."],
      ar: ["تمرين 1: النموذج يسار → أعلى / يمين / أسفل.", "تمرين 2: النموذج يمين → أعلى / يسار / أسفل."],
      fa: ["تمرین ۱: مدل چپ → بالا / راست / پایین.", "تمرین ۲: مدل راست → بالا / چپ / پایین."],
      ti: ["ስፈ.1፡ ሞዴል ጸጋም → ላዕሊ / የማን / ታሕቲ።", "ስፈ.2፡ ሞዴል የማን → ላዕሊ / ጸጋም / ታሕቲ።"],
      uk: ["Впр.1: модель зліва → верх / право / низ.", "Впр.2: модель справа → верх / ліво / низ."],
    } },
    { text: S("Propriétés", "Properties", "الخصائص", "ویژگی‌ها", "ንብረታት", "Властивості") },
    { label: S("", "", "", "", "", ""), items: {
      fr: ["Conservation des distances, angles et aires.", "Même taille ; seule l'orientation change."],
      en: ["Distances, angles and areas preserved.", "Same size; only orientation changes."],
      ar: ["حفظ المسافات والزوايا والمساحات.", "نفس الحجم؛ يتغير الاتجاه فقط."],
      fa: ["فاصله‌ها، زوایا و مساحت‌ها حفظ می‌شوند.", "همان اندازه؛ فقط جهت عوض می‌شود."],
      ti: ["ርሕቀት፣ ኩርናዓትን ሰፊሓን ይሕለዉ።", "ተመሳሳሊ ዓቐን፤ ኣንፈት ጥራይ ይቕየር።"],
      uk: ["Зберігаються відстані, кути й площі.", "Той самий розмір; змінюється лише орієнтація."],
    } },
  ],
  paragraphs: {
    fr: ["Rotation sur quadrillage : le trait bleu indique le sens (90°, 180° ou 270° horaire)."],
    en: ["Grid rotation: the blue mark shows the direction (90°, 180° or 270° clockwise)."],
  },
};
