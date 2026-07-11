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
      fr: ["Sur le modèle, le trait bleu est à gauche.", "Sur la grille vide : en haut (90°), à droite (180°) ou en bas (270°) horaire."],
      en: ["On the model, the blue mark is on the left.", "On the empty grid: top (90°), right (180°) or bottom (270°) clockwise."],
      ar: ["على النموذج، العلامة الزرقاء على اليسار.", "على الشبكة الفارغة: أعلى (90°) أو يمين (180°) أو أسفل (270°) باتجاه عقارب الساعة."],
      fa: ["روی مدل، علامت آبی سمت چپ است.", "روی شبکه خالی: بالا (۹۰°)، راست (۱۸۰°) یا پایین (۲۷۰°) ساعت‌گرد."],
      ti: ["ኣብ ሞዴል፣ ሰማያዊ መስመር ኣብ ጸጋም እዩ።", "ኣብ ባዶ ካርታ፡ ላዕሊ (90°)፣ የማን (180°) ወይ ታሕቲ (270°) ብሰዓት ኣንፈት።"],
      uk: ["На моделі синя мітка зліва.", "На порожній сітці: зверху (90°), справа (180°) або знизу (270°) за годинником."],
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
  consignes: {
    g7Rotation: S(
      "Le trait bleu est à gauche du modèle. Sur la grille vide, reproduisez la figure après la rotation indiquée par le trait bleu.",
      "The blue mark is on the left of the model. On the empty grid, redraw the figure after the rotation shown by the blue mark.",
      "العلامة الزرقاء على يسار النموذج. على الشبكة الفارغة، أعد رسم الشكل بعد الدوران الذي تشير إليه العلامة الزرقاء.",
      "علامت آبی سمت چپ مدل است. روی شبکه خالی، شکل را پس از چرخش نشان‌داده‌شده با علامت آبی بکشید.",
      "ሰማያዊ መስመር ኣብ ጸጋም ሞዴል እዩ። ኣብ ባዶ ካርታ፣ ነቲ ስእሊ ድሕሪ እቲ ብሰማያዊ መስመር ዝተመልከተ ምምቕቃሉ ድገም።",
      "Синя мітка зліва на моделі. На порожній сітці відтворіть фігуру після повороту, показаного синьою міткою.",
    ),
  },
};
