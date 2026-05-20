import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_G1_3_LESSON: MathSubmoduleLesson = {
    submoduleId: "G1-3",
    submoduleCode: "G1.3",
    theory: {
      title: {
        fr: "Cercle : rayon, diamètre, corde",
        en: "Circle: radius, diameter, chord",
        ar: "الدائرة: نصف القطر، القطر، الوتر",
        fa: "دایره: شعاع، قطر، وتر",
        ti: "ዓውዲ: ናይ ፍርቂ-ቁምብዛ, ቁምብዛ, ኣውቴር",
        uk: "Коло: радіус, діаметр, хорда",
      },
      paragraphs: {
        fr: [
          "Un cercle est l'ensemble des points équidistants d'un point fixe appelé centre. La distance commune est le rayon (r).",
          "Vocabulaire : rayon = distance du centre à tout point du cercle ; diamètre = 2r (plus grande corde passant par le centre) ; corde = segment reliant deux points du cercle.",
          "Périmètre du cercle (circonférence) : C = 2πr = πd. Aire du disque : A = πr².",
          "π ≈ 3,14159… C'est un nombre irrationnel. On utilise souvent π ≈ 3,14 pour les calculs.",
        ],
        en: [
          "A circle is the set of all points equidistant from a fixed center. The common distance is the radius (r).",
          "Vocabulary: radius = distance from center to any point; diameter = 2r; chord = segment joining two circle points.",
          "Circumference: C = 2πr = πd. Disk area: A = πr².",
          "π ≈ 3.14159… is irrational. Often π ≈ 3.14 is used in calculations.",
        ],
        ar: [
          "الدائرة هي مجموعة النقاط المتساوية البعد عن نقطة ثابتة تُسمى المركز. البعد المشترك هو نصف القطر r.",
          "المفردات: نصف القطر = المسافة من المركز؛ القطر = 2r؛ الوتر = قطعة مستقيمة بين نقطتين.",
          "المحيط: C = 2πr. مساحة القرص: A = πr².",
          "π ≈ 3,14.",
        ],
        fa: [
          "دایره مجموعه نقاطی است که فاصله یکسانی از یک مرکز ثابت دارند. فاصله مشترک شعاع (r) نامیده می‌شود.",
          "واژگان: شعاع = فاصله مرکز تا نقطه؛ قطر = 2r؛ وتر = پاره‌خط بین دو نقطه.",
          "محیط: C = 2πr. مساحت دیسک: A = πr².",
          "π ≈ 3.14.",
        ],
        ti: [
          "ዓውዲ ካብ ቋሚ ማዕከን ዕኩል ርሕቀት ዘለዎ ነጥቢ ሓሙሽቲ ዩ. ዕኩል ርሕቀት ናይ ፍርቂ-ቁምብዛ (r) ዩ.",
          "ቃለ-ቃለ: ናይ ፍርቂ-ቁምብዛ = ርሕቀት ካብ ማዕከን; ቁምብዛ = 2r; ኣውቴር = ክልተ ነጥቢ ዝቃፍ ሰቤርቲ.",
          "ዙሪያ: C = 2πr. ናይ ዲስክ ስፍሓ: A = πr².",
          "π ≈ 3.14.",
        ],
        uk: [
          "Коло — множина точок, рівновіддалених від фіксованого центра. Ця відстань — радіус (r).",
          "Словник: радіус = відстань від центра; діаметр = 2r; хорда = відрізок між двома точками кола.",
          "Довжина кола: C = 2πr. Площа круга: A = πr².",
          "π ≈ 3,14159…",
        ],
      },
    },
    exercises: [
      { id: "g1-3-e1", promptFr: "Un cercle a un rayon de 5 cm. Quel est son diamètre ?", type: "number", acceptable: ["10"] },
      { id: "g1-3-e2", promptFr: "Un cercle a un diamètre de 12 cm. Quel est son rayon ?", type: "number", acceptable: ["6"] },
      { id: "g1-3-e3", promptFr: "Calcule la circonférence d'un cercle de rayon 7 cm (π ≈ 3,14, arrondi à l'unité).", type: "number", acceptable: ["44"] },
      { id: "g1-3-e4", promptFr: "Qu'est-ce qu'une corde ? (segment reliant deux points/segment partant du centre)", type: "short_text", acceptable: ["segment reliant deux points", "segment entre deux points"] },
      { id: "g1-3-e5", promptFr: "Le diamètre est-il la plus grande corde d'un cercle ? (oui/non)", type: "short_text", acceptable: ["oui"] },
    ],
  };
