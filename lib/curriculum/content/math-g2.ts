import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_G2_LESSONS: MathSubmoduleLesson[] = [
  {
    submoduleId: "G2-1",
    submoduleCode: "G2.1",
    theory: {
      title: {
        fr: "Périmètre du carré",
        en: "Perimeter of a square",
        ar: "محيط المربع",
        fa: "محیط مربع",
        ti: "ናይ ካሬ ዙሪያ",
        uk: "Периметр квадрата",
      },
      paragraphs: {
        fr: [
          "Le périmètre est la longueur totale du contour d'une figure. Pour le carré, les 4 côtés sont égaux.",
          "Formule : P = 4 × c, où c est la longueur du côté.",
          "Exemple : carré de côté 7 cm → P = 4 × 7 = 28 cm.",
          "Pour trouver le côté connaissant le périmètre : c = P ÷ 4.",
        ],
        en: [
          "The perimeter is the total length of a figure's outline. A square has 4 equal sides.",
          "Formula: P = 4 × s, where s is the side length.",
          "Example: square with side 7 cm → P = 28 cm.",
          "Finding the side from perimeter: s = P ÷ 4.",
        ],
        ar: [
          "المحيط هو الطول الإجمالي لمحيط شكل. للمربع 4 أضلاع متساوية.",
          "الصيغة: P = 4 × c، حيث c طول الضلع.",
          "مثال: مربع بضلع 7 سم → P = 28 سم.",
          "الضلع من المحيط: c = P ÷ 4.",
        ],
        fa: [
          "محیط طول کلی حاشیه یک شکل است. مربع 4 ضلع مساوی دارد.",
          "فرمول: P = 4 × c که c طول ضلع است.",
          "مثال: مربع با ضلع 7 سانتیمتر → P = 28 سانتیمتر.",
          "ضلع از محیط: c = P ÷ 4.",
        ],
        ti: [
          "ዙሪያ ናይ ቅርጺ ሓቆፋ ርዝሓ ዩ. ካሬ 4 ዕኩል ጎቦ ዘለዎ ዩ.",
          "ቅጥዒ: P = 4 × c ሸነኽ c ናይ ጎቦ ርዝሓ ዩ.",
          "ምሳሌ: ካሬ ናይ 7 ሰም ጎቦ → P = 28 ሰም.",
          "ናይ ዙሪያ ካብ ጎቦ: c = P ÷ 4.",
        ],
        uk: [
          "Периметр — загальна довжина контуру фігури. Квадрат має 4 рівні сторони.",
          "Формула: P = 4 × a, де a — довжина сторони.",
          "Приклад: квадрат зі стороною 7 см → P = 28 см.",
          "Сторона з периметра: a = P ÷ 4.",
        ],
      },
    },
    exercises: [
      { id: "g2-1-e1", promptFr: "Calcule le périmètre d'un carré de côté 9 cm.", type: "number", acceptable: ["36"] },
      { id: "g2-1-e2", promptFr: "Un carré a un périmètre de 48 cm. Quel est son côté ?", type: "number", acceptable: ["12"] },
      { id: "g2-1-e3", promptFr: "Calcule le périmètre d'un carré de côté 4,5 cm.", type: "number", acceptable: ["18"] },
      { id: "g2-1-e4", promptFr: "Combien de côtés a un carré ?", type: "number", acceptable: ["4"] },
      { id: "g2-1-e5", promptFr: "Un carré de côté 6 m : P = ?", type: "number", acceptable: ["24"] },
    ],
  },
  {
    submoduleId: "G2-2",
    submoduleCode: "G2.2",
    theory: {
      title: {
        fr: "Périmètre du rectangle",
        en: "Perimeter of a rectangle",
        ar: "محيط المستطيل",
        fa: "محیط مستطیل",
        ti: "ናይ ካሬ-ሓለቃ ዙሪያ",
        uk: "Периметр прямокутника",
      },
      paragraphs: {
        fr: [
          "Un rectangle a deux longueurs (L) et deux largeurs (l).",
          "Formule : P = 2L + 2l = 2(L + l).",
          "Exemple : rectangle 8 cm × 5 cm → P = 2(8 + 5) = 2 × 13 = 26 cm.",
          "Si on connaît le périmètre et la longueur : l = (P ÷ 2) − L.",
        ],
        en: [
          "A rectangle has two lengths (L) and two widths (w).",
          "Formula: P = 2L + 2w = 2(L + w).",
          "Example: 8 cm × 5 cm → P = 2(13) = 26 cm.",
          "Finding width: w = (P ÷ 2) − L.",
        ],
        ar: [
          "المستطيل له طولان (L) وعرضان (l).",
          "الصيغة: P = 2(L + l).",
          "مثال: 8 سم × 5 سم → P = 26 سم.",
          "إيجاد العرض: l = (P ÷ 2) − L.",
        ],
        fa: [
          "مستطیل دو طول (L) و دو عرض (l) دارد.",
          "فرمول: P = 2(L + l).",
          "مثال: 8 سانتیمتر × 5 سانتیمتر → P = 26 سانتیمتر.",
          "یافتن عرض: l = (P ÷ 2) − L.",
        ],
        ti: [
          "ካሬ-ሓለቃ ክልተ ቁምናኦቲ (L) ን ክልተ ወርሓዊ (l) ዘለዎ ዩ.",
          "ቅጥዒ: P = 2(L + l).",
          "ምሳሌ: 8 ሰም × 5 ሰም → P = 26 ሰም.",
          "ወርሓዊ ምርካብ: l = (P ÷ 2) − L.",
        ],
        uk: [
          "Прямокутник має дві довжини (L) і дві ширини (l).",
          "Формула: P = 2(L + l).",
          "Приклад: 8 см × 5 см → P = 26 см.",
          "Знайти ширину: l = (P ÷ 2) − L.",
        ],
      },
    },
    exercises: [
      { id: "g2-2-e1", promptFr: "Calcule le périmètre d'un rectangle 10 cm × 4 cm.", type: "number", acceptable: ["28"] },
      { id: "g2-2-e2", promptFr: "Rectangle de périmètre 30 cm et longueur 10 cm. Largeur = ?", type: "number", acceptable: ["5"] },
      { id: "g2-2-e3", promptFr: "Calcule le périmètre d'un rectangle 7 m × 3 m.", type: "number", acceptable: ["20"] },
      { id: "g2-2-e4", promptFr: "Un rectangle 6 cm × 6 cm est-il un carré ? (oui/non)", type: "short_text", acceptable: ["oui"] },
      { id: "g2-2-e5", promptFr: "Rectangle 12 cm × 5 cm. Calcule P.", type: "number", acceptable: ["34"] },
    ],
  },
  {
    submoduleId: "G2-3",
    submoduleCode: "G2.3",
    theory: {
      title: {
        fr: "Périmètre du triangle",
        en: "Perimeter of a triangle",
        ar: "محيط المثلث",
        fa: "محیط مثلث",
        ti: "ናይ ሰለስ-ጎቦ ዙሪያ",
        uk: "Периметр трикутника",
      },
      paragraphs: {
        fr: [
          "Le périmètre d'un triangle est la somme de ses trois côtés : P = a + b + c.",
          "Triangle équilatéral (3 côtés égaux) : P = 3a. Triangle isocèle (2 côtés égaux) : P = 2a + b.",
          "Exemple : triangle de côtés 5, 7, 9 cm → P = 5 + 7 + 9 = 21 cm.",
          "Inégalité triangulaire : la somme de deux côtés quelconques doit être supérieure au troisième côté.",
        ],
        en: [
          "The perimeter of a triangle is the sum of its three sides: P = a + b + c.",
          "Equilateral (3 equal sides): P = 3a. Isosceles (2 equal sides): P = 2a + b.",
          "Example: sides 5, 7, 9 cm → P = 21 cm.",
          "Triangle inequality: any two sides must sum to more than the third.",
        ],
        ar: [
          "محيط المثلث هو مجموع أضلاعه الثلاثة: P = a + b + c.",
          "متساوي الأضلاع: P = 3a. متساوي الساقين: P = 2a + b.",
          "مثال: أضلاع 5, 7, 9 سم → P = 21 سم.",
          "متراجحة المثلث: مجموع أي ضلعين أكبر من الثالث.",
        ],
        fa: [
          "محیط مثلث برابر مجموع سه ضلع آن است: P = a + b + c.",
          "متساوی‌الاضلاع: P = 3a. متساوی‌الساقین: P = 2a + b.",
          "مثال: اضلاع 5، 7، 9 سانتیمتر → P = 21 سانتیمتر.",
          "نامساوی مثلث: مجموع هر دو ضلع باید از ضلع سوم بزرگ‌تر باشد.",
        ],
        ti: [
          "ናይ ሰለስ-ጎቦ ዙሪያ ናይ ሰለስቲ ጎቦ ድምር ዩ: P = a + b + c.",
          "ዕኩል ሰለስ-ጎቦ: P = 3a. ክልተ-ዕኩል ሰለስ-ጎቦ: P = 2a + b.",
          "ምሳሌ: ጎቦ 5, 7, 9 ሰም → P = 21 ሰም.",
          "ናይ ሰለስ-ጎቦ ዘይምዕርርያ: ዝኾኑ ክልተ ጎቦ ድምር ካብ ሳልሳይ ዝዓቢ ክኸውን.",
        ],
        uk: [
          "Периметр трикутника — сума трьох його сторін: P = a + b + c.",
          "Рівносторонній: P = 3a. Рівнобедрений: P = 2a + b.",
          "Приклад: сторони 5, 7, 9 см → P = 21 см.",
          "Нерівність трикутника: сума будь-яких двох сторін більша за третю.",
        ],
      },
    },
    exercises: [
      { id: "g2-3-e1", promptFr: "Calcule P : triangle de côtés 3, 4, 5 cm.", type: "number", acceptable: ["12"] },
      { id: "g2-3-e2", promptFr: "Triangle équilatéral de côté 8 cm. P = ?", type: "number", acceptable: ["24"] },
      { id: "g2-3-e3", promptFr: "Triangle isocèle : deux côtés = 6 cm, base = 4 cm. P = ?", type: "number", acceptable: ["16"] },
      { id: "g2-3-e4", promptFr: "P d'un triangle = 30 cm. Deux côtés sont 8 et 11 cm. Troisième côté = ?", type: "number", acceptable: ["11"] },
      { id: "g2-3-e5", promptFr: "Peut-on former un triangle avec les côtés 2, 3, 7 ? (oui/non)", type: "short_text", acceptable: ["non"] },
    ],
  },
  {
    submoduleId: "G2-4",
    submoduleCode: "G2.4",
    theory: {
      title: {
        fr: "Périmètre des polygones réguliers",
        en: "Perimeter of regular polygons",
        ar: "محيط المضلعات المنتظمة",
        fa: "محیط چندضلعی‌های منتظم",
        ti: "ናይ ዕኩል ብዙ-ጎቦ ዙሪያ",
        uk: "Периметр правильних многокутників",
      },
      paragraphs: {
        fr: [
          "Un polygone régulier a tous ses côtés de même longueur. Son périmètre est : P = n × c, où n est le nombre de côtés et c la longueur d'un côté.",
          "Exemples : pentagone régulier de côté 6 cm → P = 5 × 6 = 30 cm ; hexagone régulier de côté 4 cm → P = 6 × 4 = 24 cm.",
          "Pour tout polygone non régulier : P = somme de tous les côtés.",
          "Application : un terrain hexagonal régulier de côté 10 m a un périmètre de 60 m.",
        ],
        en: [
          "A regular polygon has all equal sides. Perimeter: P = n × s, where n = number of sides and s = side length.",
          "Examples: regular pentagon side 6 cm → P = 30 cm; regular hexagon side 4 cm → P = 24 cm.",
          "For irregular polygons: P = sum of all sides.",
        ],
        ar: [
          "المضلع المنتظم كل أضلاعه متساوية. محيطه: P = n × c.",
          "أمثلة: خماسي منتظم بضلع 6 سم → P = 30 سم.",
          "لأي مضلع: P = مجموع الأضلاع.",
        ],
        fa: [
          "چندضلعی منتظم همه اضلاعش مساوی هستند. محیط: P = n × c.",
          "مثال: پنتاگون منتظم با ضلع 6 سانتیمتر → P = 30 سانتیمتر.",
          "برای هر چندضلعی: P = مجموع همه اضلاع.",
        ],
        ti: [
          "ዕኩል ብዙ-ጎቦ ኩሉ ዕኩል ጎቦ ዘለዎ ዩ. ዙሪያ: P = n × c.",
          "ምሳሌ: ናይ 5 ጎቦ ዕኩል ቅርጺ ናይ 6 ሰም ጎቦ → P = 30 ሰም.",
          "ንዝኾነ ብዙ-ጎቦ: P = ናይ ኩሎም ጎቦ ድምር.",
        ],
        uk: [
          "Правильний многокутник має всі рівні сторони. Периметр: P = n × a.",
          "Приклади: правильний п'ятикутник зі стороною 6 см → P = 30 см.",
          "Для будь-якого многокутника: P = сума всіх сторін.",
        ],
      },
    },
    exercises: [
      { id: "g2-4-e1", promptFr: "Périmètre d'un hexagone régulier de côté 5 cm.", type: "number", acceptable: ["30"] },
      { id: "g2-4-e2", promptFr: "Périmètre d'un octogone régulier de côté 3 cm.", type: "number", acceptable: ["24"] },
      { id: "g2-4-e3", promptFr: "Un polygone régulier a un périmètre de 40 cm et des côtés de 8 cm. Combien de côtés ?", type: "number", acceptable: ["5"] },
      { id: "g2-4-e4", promptFr: "Périmètre d'un pentagone régulier de côté 7 cm.", type: "number", acceptable: ["35"] },
      { id: "g2-4-e5", promptFr: "Périmètre d'un triangle équilatéral de côté 9 cm.", type: "number", acceptable: ["27"] },
    ],
  },
  {
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
  },
];
