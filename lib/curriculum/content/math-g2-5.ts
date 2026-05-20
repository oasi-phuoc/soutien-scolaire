import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_G2_5_LESSON: MathSubmoduleLesson = {
    submoduleId: "G2-5",
    submoduleCode: "G2.5",
    theory: {
      title: {
        fr: "Cercle et π",
        en: "Circle and π",
        ar: "الدائرة وπ",
        fa: "دایره و π",
        ti: "ዓውዲ ን π",
        uk: "Коло та π",
      },
      paragraphs: {
        fr: [
          "La circonférence (périmètre) d'un cercle est C = 2πr = πd, où r est le rayon et d le diamètre.",
          "π (pi) est un nombre irrationnel ≈ 3,14159… On utilise souvent π ≈ 3,14 ou la touche π de la calculatrice.",
          "Exemple : cercle de rayon 5 cm → C = 2 × π × 5 = 10π ≈ 31,4 cm.",
          "Attention : ne pas confondre circonférence (périmètre du cercle) et aire du disque (A = πr²).",
        ],
        en: [
          "Circumference of a circle: C = 2πr = πd.",
          "π ≈ 3.14159…, often approximated as 3.14.",
          "Example: radius 5 cm → C = 10π ≈ 31.4 cm.",
          "Do not confuse circumference (perimeter) with disk area (A = πr²).",
        ],
        ar: [
          "محيط الدائرة: C = 2πr = πd.",
          "π ≈ 3,14159…",
          "مثال: نصف قطر 5 سم → C ≈ 31,4 سم.",
          "لا تخلط بين المحيط والمساحة (A = πr²).",
        ],
        fa: [
          "محیط دایره: C = 2πr = πd.",
          "π ≈ 3.14159…",
          "مثال: شعاع 5 سانتیمتر → C ≈ 31.4 سانتیمتر.",
          "محیط را با مساحت (A = πr²) اشتباه نگیر.",
        ],
        ti: [
          "ናይ ዓውዲ ዙሪያ: C = 2πr = πd.",
          "π ≈ 3.14.",
          "ምሳሌ: ናይ ፍርቂ-ቁምብዛ 5 ሰም → C ≈ 31.4 ሰም.",
          "ዙሪያ ምስ ሰፊሓ (A = πr²) ኣይቀላቐሉ.",
        ],
        uk: [
          "Довжина кола: C = 2πr = πd.",
          "π ≈ 3,14159…",
          "Приклад: радіус 5 см → C ≈ 31,4 см.",
          "Не плутати довжину кола (периметр) з площею круга (A = πr²).",
        ],
      },
    },
    exercises: [
      { id: "g2-5-e1", promptFr: "Calcule la circonférence d'un cercle de rayon 10 cm (π ≈ 3,14).", type: "number", acceptable: ["62,8", "62.8"] },
      { id: "g2-5-e2", promptFr: "Calcule la circonférence d'un cercle de diamètre 6 cm (π ≈ 3,14).", type: "number", acceptable: ["18,84", "18.84"] },
      { id: "g2-5-e3", promptFr: "Un cercle a une circonférence de 31,4 cm. Quel est son rayon (π ≈ 3,14) ?", type: "number", acceptable: ["5"] },
      { id: "g2-5-e4", promptFr: "π est approximativement égal à ?", type: "short_text", acceptable: ["3,14", "3.14", "3.14159"] },
      { id: "g2-5-e5", promptFr: "Un cercle de rayon 3 cm : C = 2π × 3 ≈ ? (arrondi à l'unité, π ≈ 3,14)", type: "number", acceptable: ["19"] },
    ],
  };
