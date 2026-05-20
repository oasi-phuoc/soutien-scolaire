import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_G4_2_LESSON: MathSubmoduleLesson = {
    submoduleId: "G4-2",
    submoduleCode: "G4.2",
    theory: {
      title: {
        fr: "Droites perpendiculaires et parallèles",
        en: "Perpendicular and parallel lines",
        ar: "المستقيمات العمودية والمتوازية",
        fa: "خطوط عمود و موازی",
        ti: "ቀጥታ ኩርናዕ ን ፓራሌሎ ሕርሚ",
        uk: "Перпендикулярні та паралельні прямі",
      },
      paragraphs: {
        fr: [
          "Deux droites sont perpendiculaires si elles se coupent à angle droit (90°). Notation : d₁ ⊥ d₂.",
          "Deux droites sont parallèles si elles ne se coupent jamais (même direction). Notation : d₁ ∥ d₂.",
          "Construction d'une perpendiculaire à une droite par un point : utiliser l'équerre en la faisant glisser le long d'une règle.",
          "Construction d'une parallèle : même technique — deux équerres ou règle + équerre.",
        ],
        en: [
          "Two lines are perpendicular if they meet at 90°. Notation: d₁ ⊥ d₂.",
          "Two lines are parallel if they never meet. Notation: d₁ ∥ d₂.",
          "Constructing a perpendicular through a point: slide a set square along a ruler.",
          "Constructing a parallel: same technique with two set squares or ruler + set square.",
        ],
        ar: [
          "مستقيمان متعامدان إذا تقاطعا بزاوية 90°. رمز: d₁ ⊥ d₂.",
          "مستقيمان متوازيان إذا لم يتقاطعا أبداً. رمز: d₁ ∥ d₂.",
          "إنشاء عمود من نقطة: باستخدام المثلث.",
          "إنشاء متوازٍ: نفس الطريقة.",
        ],
        fa: [
          "دو خط عمود بر هم هستند اگر در 90° همدیگر را قطع کنند. نماد: d₁ ⊥ d₂.",
          "دو خط موازی هستند اگر هیچ‌وقت همدیگر را قطع نکنند. نماد: d₁ ∥ d₂.",
          "ساخت عمود از یک نقطه: با استفاده از گونیا.",
          "ساخت موازی: روش یکسان.",
        ],
        ti: [
          "ክልተ ሕርሚ ቀጥታ ኩርናዕ (90°) ምስ ዝሕቁፉ ቀጥታ ዩ. ምልክት: d₁ ⊥ d₂.",
          "ክልተ ሕርሚ ሓደ ጊዜ ዘይተዋዶ ፓራሌሎ ዩ. ምልክት: d₁ ∥ d₂.",
          "ካብ ሓደ ነጥቢ ቀጥታ ምህናጽ: ጥርናፊ ምጥቃም.",
          "ፓራሌሎ ምህናጽ: ሓደ ኣፈጻጽማ.",
        ],
        uk: [
          "Дві прямі перпендикулярні, якщо вони перетинаються під прямим кутом (90°). d₁ ⊥ d₂.",
          "Дві прямі паралельні, якщо вони ніколи не перетинаються. d₁ ∥ d₂.",
          "Провести перпендикуляр через точку: ковзати косинцем вздовж лінійки.",
          "Паралель: та сама техніка.",
        ],
      },
    },
    exercises: [
      { id: "g4-2-e1", promptFr: "Deux droites se coupent à 90°. Sont-elles perpendiculaires ou parallèles ?", type: "short_text", acceptable: ["perpendiculaires"] },
      { id: "g4-2-e2", promptFr: "Deux droites ne se croisent jamais. Sont-elles perpendiculaires ou parallèles ?", type: "short_text", acceptable: ["parallèles", "paralleles"] },
      { id: "g4-2-e3", promptFr: "Dans un carré, les côtés opposés sont-ils parallèles ? (oui/non)", type: "short_text", acceptable: ["oui"] },
      { id: "g4-2-e4", promptFr: "Dans un carré, les côtés adjacents sont-ils perpendiculaires ? (oui/non)", type: "short_text", acceptable: ["oui"] },
      { id: "g4-2-e5", promptFr: "Quel symbole désigne des droites perpendiculaires ?", type: "short_text", acceptable: ["⊥"] },
    ],
  };
