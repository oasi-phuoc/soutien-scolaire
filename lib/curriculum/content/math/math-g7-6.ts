import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_G7_6_LESSON: MathSubmoduleLesson = {
    submoduleId: "G7-6",
    submoduleCode: "G7.6",
    theory: {
      title: {
        fr: "Applications",
        en: "Applications",
        ar: "التطبيقات",
        fa: "کاربردها",
        ti: "ኣሰፋ",
        uk: "Застосування",
      },
      paragraphs: {
        fr: [
          "Le théorème de Pythagore a de nombreuses applications pratiques : calcul de distances, hauteurs, diagonales.",
          "Exemple 1 — diagonale d'un rectangle : rectangle 6 × 8 cm. Diagonale = √(6² + 8²) = √100 = 10 cm.",
          "Exemple 2 — hauteur d'un triangle isocèle : base 10 cm, côtés égaux 13 cm. La hauteur coupe la base en 5 cm. h = √(13² − 5²) = √(169 − 25) = √144 = 12 cm.",
          "Exemple 3 — distance GPS : point A(0,0), B(3,4). Distance = √(3² + 4²) = 5 unités.",
        ],
        en: [
          "Pythagoras has many applications: distances, heights, diagonals.",
          "Ex. 1 — rectangle diagonal: 6×8 cm → √(36+64) = 10 cm.",
          "Ex. 2 — isosceles triangle height: base 10, sides 13 → h = √(169−25) = 12 cm.",
          "Ex. 3 — GPS distance: A(0,0) to B(3,4) = √(9+16) = 5.",
        ],
        ar: [
          "للمبرهنة تطبيقات عديدة: مسافات، ارتفاعات، أقطار.",
          "مثال 1: قطر مستطيل 6×8 سم = 10 سم.",
          "مثال 2: ارتفاع مثلث متساوي الساقين: قاعدة 10، أضلاع 13 → h = 12 سم.",
          "مثال 3: مسافة GPS: A(0,0) إلى B(3,4) = 5 وحدات.",
        ],
        fa: [
          "قضیه فیثاغورس کاربردهای فراوانی دارد: فاصله‌ها، ارتفاع‌ها، قطرها.",
          "مثال 1: قطر مستطیل 6×8 = 10 سانتیمتر.",
          "مثال 2: ارتفاع مثلث متساوی‌الساقین: قاعده 10، ساق 13 → h = 12 سانتیمتر.",
          "مثال 3: فاصله GPS: A(0,0) تا B(3,4) = 5 واحد.",
        ],
        ti: [
          "ናይ ፒታጎራስ ቲዎሪም ብዙሕ ኣሰፋ ዘለዎ ዩ: ርሕቀት, ቁመት, ዲያጎናሎ.",
          "ምሳሌ 1: ናይ ካሬ-ሓለቃ 6×8 ዲያጎናሎ = 10 ሰም.",
          "ምሳሌ 2: ናይ ክልተ-ዕኩል ሰለስ-ጎቦ ቁመት: ሰረት 10, ጎቦ 13 → h = 12 ሰም.",
          "ምሳሌ 3: GPS ርሕቀት: A(0,0) ናብ B(3,4) = 5 ኣሃዱ.",
        ],
        uk: [
          "Теорема Піфагора має численні застосування: відстані, висоти, діагоналі.",
          "Приклад 1: діагональ прямокутника 6×8 = 10 см.",
          "Приклад 2: висота рівнобедреного трикутника з основою 10 і сторонами 13 → h = 12 см.",
          "Приклад 3: відстань GPS: A(0,0) до B(3,4) = 5 одиниць.",
        ],
      },
    },
    exercises: [
      { id: "g7-6-e1", promptFr: "Diagonale d'un carré de côté 1 cm. d = √? cm (donne le nombre sous la racine).", type: "number", acceptable: ["2"] },
      { id: "g7-6-e2", promptFr: "Diagonale d'un rectangle 5×12 cm.", type: "number", acceptable: ["13"] },
      { id: "g7-6-e3", promptFr: "Une échelle de 10 m appuyée contre un mur à 6 m du pied. Hauteur atteinte = ? m.", type: "number", acceptable: ["8"] },
      { id: "g7-6-e4", promptFr: "Distance entre A(0;0) et B(6;8).", type: "number", acceptable: ["10"] },
      { id: "g7-6-e5", promptFr: "Triangle isocèle : base 16 cm, côtés 17 cm. Hauteur = ?", type: "number", acceptable: ["15"] },
    ],
  };
