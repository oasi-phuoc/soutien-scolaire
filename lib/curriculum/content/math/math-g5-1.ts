import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_G5_1_LESSON: MathSubmoduleLesson = {
    submoduleId: "G5-1",
    submoduleCode: "G5.1",
    theory: {
      title: {
        fr: "Symétrie axiale",
        en: "Axial symmetry",
        ar: "التناظر المحوري",
        fa: "تقارن محوری",
        ti: "ናይ ሕርሚ ምስምሳል",
        uk: "Осьова симетрія",
      },
      paragraphs: {
        fr: [
          "La symétrie axiale (ou réflexion) est une transformation qui associe à chaque point M son symétrique M' par rapport à un axe d, tel que d est la médiatrice de [MM'].",
          "Propriétés : conservation des distances, des angles et des aires. La figure image est le miroir de la figure originale.",
          "Construction : pour trouver le symétrique d'un point M par rapport à une droite d, tracer la perpendiculaire de M à d et reporter la même distance de l'autre côté.",
          "Applications : papier plié, figures décoratives, architecture.",
        ],
        en: [
          "Axial symmetry (reflection) maps each point M to M' across line d, where d is the perpendicular bisector of [MM'].",
          "Properties: distances, angles, and areas are preserved. The image is a mirror of the original.",
          "Construction: draw perpendicular from M to d; mark same distance on the other side.",
          "Applications: folded paper, decorative patterns, architecture.",
        ],
        ar: [
          "التناظر المحوري يربط كل نقطة M بصورتها M' على محور d حيث d منصف MM'.",
          "الخصائص: حفظ المسافات والزوايا والمساحات. الصورة مرآة الأصل.",
          "الإنشاء: ارسم عموداً من M على d وانقل نفس المسافة للجانب الآخر.",
          "التطبيقات: ورق مطوي، نقوش، هندسة معمارية.",
        ],
        fa: [
          "تقارن محوری (بازتاب) هر نقطه M را به M' نسبت به خط d نگاشت می‌کند، جایی که d نیمساز عمود [MM'] است.",
          "ویژگی‌ها: فاصله‌ها، زوایا و مساحت‌ها حفظ می‌شوند.",
          "ساخت: از M عمود بر d بکش و همان فاصله را طرف دیگر علامت بزن.",
          "کاربردها: کاغذ تا شده، نقوش تزئینی، معماری.",
        ],
        ti: [
          "ናይ ሕርሚ ምስምሳል ነፍሲ ወከፍ ነጥቢ M ናብ M' ኣብ ሕርሚ d ዘቕርብ ዩ.",
          "ንብረታት: ርሕቀት, ኩርናዓት ን ሰፊሓ ዕቃቤ. ምስሊ ናይ ናህሰ መስታዊ ዩ.",
          "ምህናጽ: ካብ M ናብ d ቀጥታ ምምሃዝ ሓደ ርሕቀት ናብ ካሊእ ሸነኽ.",
          "ኣሰፋ: ዝቅጸነ ወረቀት, ናይ ዕምቋ ቕርጺ.",
        ],
        uk: [
          "Осьова симетрія (відображення) відображає кожну точку M в M' відносно прямої d, де d — серединний перпендикуляр [MM'].",
          "Властивості: зберігаються відстані, кути та площі. Образ — дзеркальне відображення.",
          "Побудова: провести перпендикуляр з M на d і відкласти ту саму відстань з іншого боку.",
          "Застосування: складений папір, декоративні орнаменти, архітектура.",
        ],
      },
    },
    exercises: [
      { id: "g5-1-e1", promptFr: "La symétrie axiale conserve-t-elle les distances ? (oui/non)", type: "short_text", acceptable: ["oui"] },
      { id: "g5-1-e2", promptFr: "Le symétrique du point (3 ; 2) par rapport à l'axe y est le point (? ; 2).", type: "number", acceptable: ["-3", "−3"] },
      { id: "g5-1-e3", promptFr: "Le symétrique du point (4 ; 5) par rapport à l'axe x est le point (4 ; ?).", type: "number", acceptable: ["-5", "−5"] },
      { id: "g5-1-e4", promptFr: "Une figure et son image par symétrie axiale ont-elles la même aire ? (oui/non)", type: "short_text", acceptable: ["oui"] },
      { id: "g5-1-e5", promptFr: "Quelle est la figure qui est son propre symétrique par rapport à un axe ?", type: "short_text", acceptable: ["figure symétrique", "figure avec axe de symétrie"] },
    ],
  };
