import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_G4_5_LESSON: MathSubmoduleLesson = {
    submoduleId: "G4-5",
    submoduleCode: "G4.5",
    theory: {
      title: {
        fr: "Cercle de rayon donné",
        en: "Circle of given radius",
        ar: "دائرة بنصف قطر محدد",
        fa: "دایره با شعاع معین",
        ti: "ዓውዲ ናይ ዝሃቦ ናይ ፍርቂ-ቁምብዛ",
        uk: "Коло заданого радіуса",
      },
      paragraphs: {
        fr: [
          "Pour tracer un cercle de centre O et de rayon r : (1) placer la pointe du compas en O ; (2) écarter les branches du compas jusqu'à r ; (3) faire tourner le compas à 360°.",
          "Pour tracer un cercle passant par trois points : trouver le centre en construisant les médiatrices de deux côtés du triangle formé par les trois points.",
          "Arc de cercle : partie d'un cercle délimitée par deux points. Pour tracer un arc de r et angle α, utiliser le rapporteur pour les angles.",
          "Application : tracer un cercle inscrit dans un carré (le rayon est la moitié du côté).",
        ],
        en: [
          "To draw a circle of center O and radius r: (1) place compass point at O; (2) open to r; (3) rotate 360°.",
          "Circle through 3 points: find center at intersection of perpendicular bisectors.",
          "Arc: a part of a circle. Use protractor for angle.",
          "Application: inscribed circle in a square (r = half the side).",
        ],
        ar: [
          "لرسم دائرة مركزها O ونصف قطرها r: (1) ضع رأس البركار في O؛ (2) افتح حتى r؛ (3) أدر 360°.",
          "دائرة تمر بثلاث نقاط: جد المركز من منصفات الأضلاع.",
          "القوس: جزء من دائرة.",
          "تطبيق: دائرة مُدرجة في مربع (r = نصف الضلع).",
        ],
        fa: [
          "برای رسم دایره با مرکز O و شعاع r: (1) نوک پرگار را در O بگذار؛ (2) تا r باز کن؛ (3) دور کامل بزن.",
          "دایره از 3 نقطه: مرکز را از تقاطع نیمساز اضلاع بیاب.",
          "کمان: بخشی از دایره.",
          "کاربرد: دایره داخل مربع (r = نصف ضلع).",
        ],
        ti: [
          "ዓውዲ ናይ O ማዕከን ን r ናይ ፍርቂ-ቁምብዛ ምስሳሉ: (1) ናይ ኮምፓስ ርእሲ ኣብ O ምምቃሉ; (2) ክሳዕ r ምኽፋቱ; (3) 360° ምምቕቃሉ.",
          "3 ነጥቢ ዝሓልፍ ዓውዲ: ናይ ሰቤርቲ ናብ ማዕከን ምርካብ.",
          "ቀስቲ: ናይ ዓውዲ ክፋሉ.",
          "ኣሰፋ: ካሬ ውሽጢ ዓውዲ (r = ናይ ጎቦ ፍርቂ).",
        ],
        uk: [
          "Побудова кола центром O і радіусом r: (1) поставити голку циркуля в O; (2) розкрити до r; (3) провести повний оберт.",
          "Коло через 3 точки: знайти центр — перетин серединних перпендикулярів.",
          "Дуга: частина кола.",
          "Застосування: вписане коло в квадрат (r = половина сторони).",
        ],
      },
    },
    exercises: [
      { id: "g4-5-e1", promptFr: "Pour tracer un cercle de rayon 4 cm, quelle écartement du compas faut-il ?", type: "number", acceptable: ["4"] },
      { id: "g4-5-e2", promptFr: "Un cercle inscrit dans un carré de côté 8 cm a un rayon de ?", type: "number", acceptable: ["4"] },
      { id: "g4-5-e3", promptFr: "Quel outil trace un cercle ?", type: "short_text", acceptable: ["compas"] },
      { id: "g4-5-e4", promptFr: "Un demi-cercle correspond à combien de degrés d'arc ?", type: "number", acceptable: ["180"] },
      { id: "g4-5-e5", promptFr: "La médiatrice d'un segment passe-t-elle par le milieu du segment ? (oui/non)", type: "short_text", acceptable: ["oui"] },
    ],
  };
