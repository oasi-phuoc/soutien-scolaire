import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_G1_5_LESSON: MathSubmoduleLesson = {
    submoduleId: "G1-5",
    submoduleCode: "G1.5",
    theory: {
      title: {
        fr: "Angles",
        en: "Angles",
        ar: "الزوايا",
        fa: "زاویه‌ها",
        ti: "ኩርናዓት",
        uk: "Кути",
      },
      paragraphs: {
        fr: [
          "Un angle est formé par deux demi-droites de même origine (le sommet). On le mesure en degrés (°). Plein tour = 360°.",
          "Types d'angles : nul (0°) ; aigu (0° < α < 90°) ; droit (90°) ; obtus (90° < α < 180°) ; plat (180°) ; rentrant (180° < α < 360°).",
          "Angles complémentaires : deux angles dont la somme est 90°. Angles supplémentaires : deux angles dont la somme est 180°.",
          "Angles opposés par le sommet : quand deux droites se croisent, les angles opposés par le sommet sont égaux.",
        ],
        en: [
          "An angle is formed by two rays from the same point (the vertex). Measured in degrees. Full turn = 360°.",
          "Types: zero (0°); acute (0° < α < 90°); right (90°); obtuse (90° < α < 180°); straight (180°).",
          "Complementary: sum = 90°. Supplementary: sum = 180°.",
          "Vertical angles: when two lines cross, opposite angles are equal.",
        ],
        ar: [
          "الزاوية تتشكل من شعاعين من نفس النقطة (الرأس). تُقاس بالدرجات. الدورة الكاملة = 360°.",
          "أنواع: حاد (0° < α < 90°)، قائم (90°)، منفرج (90° < α < 180°)، مستقيم (180°).",
          "متكاملتان: مجموعهما 90°. متتامتان: مجموعهما 180°.",
          "الزوايا المتقابلة بالرأس متساوية.",
        ],
        fa: [
          "زاویه از دو نیم‌خط با مبدأ مشترک (رأس) تشکیل می‌شود. به درجه سنجیده می‌شود. دور کامل = 360°.",
          "انواع: تند (0° < α < 90°)، قائمه (90°)، کند (90° < α < 180°)، مستقیم (180°).",
          "مکمل: مجموع = 90°. مکمل زاویه‌ای: مجموع = 180°.",
          "زاویه‌های مقابل‌الرأس برابرند.",
        ],
        ti: [
          "ኩርናዕ ካብ ሓደ ቦታ (ርእሲ) ዝወጹ ክልተ ፍርቂ-ሕርሚ ዩ. ብዲግሪ ዝሕሰብ. ምሉእ ዙር = 360°.",
          "ዓይነታት: ሙጹዕ (0° < α < 90°), ቀጥታ (90°), ሰፊሕ (90° < α < 180°), ቀጥታ ሕርሚ (180°).",
          "ናይ ምምላእ: ድምር = 90°. ናይ ምምላእ: ድምር = 180°.",
          "ናይ ርእሲ ዝቃወሙ ኩርናዓት ማዕረ ዩ.",
        ],
        uk: [
          "Кут утворюється двома півпрямими з однієї точки (вершини). Вимірюється в градусах. Повний оборот = 360°.",
          "Типи: нульовий (0°); гострий (0°–90°); прямий (90°); тупий (90°–180°); розгорнутий (180°).",
          "Доповняльні кути: сума = 90°. Суміжні: сума = 180°.",
          "Вертикальні кути при перетині двох прямих рівні.",
        ],
      },
    },
    exercises: [
      { id: "g1-5-e1", promptFr: "Un angle de 75° est-il aigu ou obtus ?", type: "short_text", acceptable: ["aigu"] },
      { id: "g1-5-e2", promptFr: "Deux angles complémentaires : l'un est 35°. Quel est l'autre ?", type: "number", acceptable: ["55"] },
      { id: "g1-5-e3", promptFr: "Deux angles supplémentaires : l'un est 110°. Quel est l'autre ?", type: "number", acceptable: ["70"] },
      { id: "g1-5-e4", promptFr: "Un angle droit mesure combien de degrés ?", type: "number", acceptable: ["90"] },
      { id: "g1-5-e5", promptFr: "Deux droites se coupent. Un angle est 40°. L'angle opposé par le sommet mesure ?", type: "number", acceptable: ["40"] },
    ],
  };
