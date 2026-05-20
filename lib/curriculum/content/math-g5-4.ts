import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_G5_4_LESSON: MathSubmoduleLesson = {
    submoduleId: "G5-4",
    submoduleCode: "G5.4",
    theory: {
      title: {
        fr: "Rotation",
        en: "Rotation",
        ar: "الدوران",
        fa: "دوران",
        ti: "ምምቕቃሉ",
        uk: "Поворот",
      },
      paragraphs: {
        fr: [
          "Une rotation de centre O et d'angle α fait tourner chaque point M autour de O d'un angle α (dans le sens positif = antihoraire).",
          "Propriétés : conservation des distances, des angles et des aires. O est le seul point fixe.",
          "Cas particuliers : rotation de 90° (quart de tour) ; 180° (demi-tour = symétrie centrale) ; 360° (tour complet = identité).",
          "Construction : pour une rotation de 90° antihoraire autour de O, le point (x, y) devient (−y, x).",
        ],
        en: [
          "A rotation of center O and angle α rotates each point M around O by α (positive = anticlockwise).",
          "Properties: distances, angles, areas preserved. O is the only fixed point.",
          "Special cases: 90° (quarter turn); 180° (half turn = central symmetry); 360° (full turn).",
          "Construction: 90° anticlockwise about O: (x, y) → (−y, x).",
        ],
        ar: [
          "الدوران ذو المركز O والزاوية α يدور كل نقطة M حول O بزاوية α (موجب = عكس عقارب الساعة).",
          "الخصائص: حفظ المسافات والزوايا والمساحات. O النقطة الثابتة الوحيدة.",
          "حالات خاصة: 90° (ربع دورة)؛ 180° (نصف دورة)؛ 360° (دورة كاملة).",
          "90° عكس عقارب الساعة: (x, y) → (−y, x).",
        ],
        fa: [
          "دوران با مرکز O و زاویه α هر نقطه M را α درجه حول O می‌چرخاند (مثبت = پادساعتگرد).",
          "ویژگی‌ها: فاصله‌ها، زوایا و مساحت‌ها حفظ می‌شوند. O تنها نقطه ثابت است.",
          "حالات خاص: 90° (ربع دور)؛ 180° (نیم دور)؛ 360° (دور کامل).",
          "90° پادساعتگرد: (x, y) → (−y, x).",
        ],
        ti: [
          "ምምቕቃሉ ናይ O ማዕኸን ን α ኩርናዕ ነፍሲ ወከፍ ነጥቢ M ናብ α ኩርናዕ ዙርያ O ዘምቕቅሎ ዩ.",
          "ንብረታት: ርሕቀት, ኩርናዓት, ሰፊሓ ዕቃቤ. O ናህሰ ቋሚ ነጥቢ ዩ.",
          "ፍሉይ ኩነታት: 90° (ናህሰ ዕዮ); 180° (ፍርቂ ዕዮ); 360° (ምሉእ ዕዮ).",
          "90° ንስኽ ካብ ሰዓት: (x, y) → (−y, x).",
        ],
        uk: [
          "Поворот з центром O і кутом α повертає кожну точку M навколо O на кут α (позитивний = проти годинникової стрілки).",
          "Властивості: зберігаються відстані, кути, площі. O — єдина нерухома точка.",
          "Особливі випадки: 90° (чверть оберту); 180° (половина = центральна симетрія); 360° (повний оберт).",
          "90° проти годинникової: (x, y) → (−y, x).",
        ],
      },
    },
    exercises: [
      { id: "g5-4-e1", promptFr: "La rotation conserve-t-elle les distances ? (oui/non)", type: "short_text", acceptable: ["oui"] },
      { id: "g5-4-e2", promptFr: "Une rotation de 360° ramène la figure à sa position initiale ? (oui/non)", type: "short_text", acceptable: ["oui"] },
      { id: "g5-4-e3", promptFr: "Rotation de 90° antihoraire : le point (3 ; 0) devient ?", type: "short_text", acceptable: ["(0;3)", "(0 ; 3)"] },
      { id: "g5-4-e4", promptFr: "Une rotation de 180° est équivalente à quelle transformation ?", type: "short_text", acceptable: ["symétrie centrale"] },
      { id: "g5-4-e5", promptFr: "Après une rotation, la figure est-elle de même taille ? (oui/non)", type: "short_text", acceptable: ["oui"] },
    ],
  };
