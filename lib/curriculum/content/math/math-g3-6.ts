import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_G3_6_LESSON: MathSubmoduleLesson = {
    submoduleId: "G3-6",
    submoduleCode: "G3.6",
    theory: {
      title: {
        fr: "Aire du disque",
        en: "Area of a disk",
        ar: "مساحة القرص",
        fa: "مساحت دیسک",
        ti: "ናይ ዲስክ ሰፊሓ",
        uk: "Площа круга",
      },
      paragraphs: {
        fr: [
          "Le disque est la région intérieure délimitée par le cercle. Formule : A = πr².",
          "Exemple : disque de rayon 5 cm → A = π × 5² = 25π ≈ 78,5 cm².",
          "Si on connaît le diamètre : r = d/2, donc A = π(d/2)² = πd²/4.",
          "Attention aux unités : si r est en cm, A est en cm².",
        ],
        en: [
          "A disk is the interior region of a circle. Formula: A = πr².",
          "Example: radius 5 cm → A = 25π ≈ 78.5 cm².",
          "If diameter is known: r = d/2, so A = πd²/4.",
          "Units: if r is in cm, A is in cm².",
        ],
        ar: [
          "القرص هو المنطقة الداخلية للدائرة. الصيغة: A = πr².",
          "مثال: نصف قطر 5 سم → A ≈ 78,5 سم².",
          "إذا عُرف القطر: r = d/2.",
          "الوحدات: إذا كان r بالسم فالمساحة بالسم².",
        ],
        fa: [
          "دیسک ناحیه داخلی دایره است. فرمول: A = πr².",
          "مثال: شعاع 5 سانتیمتر → A ≈ 78.5 سانتیمتر².",
          "اگر قطر معلوم باشد: r = d/2.",
          "واحدها: اگر r به سانتیمتر باشد A به سانتیمتر² است.",
        ],
        ti: [
          "ዲስክ ናይ ዓውዲ ውሽጠ ቦታ ዩ. ቅጥዒ: A = πr².",
          "ምሳሌ: ናይ ፍርቂ-ቁምብዛ 5 ሰም → A ≈ 78.5 ሰም².",
          "ቁምብዛ ምስ ፈለጥካ: r = d/2.",
          "ኣሃዙ: r ሰም ምስ ዝኸውን A ሰም² ዩ.",
        ],
        uk: [
          "Круг — внутрішня область кола. Формула: A = πr².",
          "Приклад: радіус 5 см → A = 25π ≈ 78,5 см².",
          "Якщо відомий діаметр: r = d/2.",
          "Одиниці: якщо r у см, то A у см².",
        ],
      },
    },
    exercises: [
      { id: "g3-6-e1", promptFr: "Aire d'un disque de rayon 4 cm (π ≈ 3,14).", type: "number", acceptable: ["50,24", "50.24"] },
      { id: "g3-6-e2", promptFr: "Aire d'un disque de rayon 10 cm (π ≈ 3,14).", type: "number", acceptable: ["314"] },
      { id: "g3-6-e3", promptFr: "Aire d'un disque de diamètre 8 cm (π ≈ 3,14).", type: "number", acceptable: ["50,24", "50.24"] },
      { id: "g3-6-e4", promptFr: "Un disque a une aire de 78,5 cm² (π ≈ 3,14). Quel est son rayon ?", type: "number", acceptable: ["5"] },
      { id: "g3-6-e5", promptFr: "Aire d'un disque de rayon 3 cm (π ≈ 3,14).", type: "number", acceptable: ["28,26", "28.26"] },
    ],
  };
