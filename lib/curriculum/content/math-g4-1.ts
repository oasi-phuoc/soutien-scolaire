import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_G4_1_LESSON: MathSubmoduleLesson = {
    submoduleId: "G4-1",
    submoduleCode: "G4.1",
    theory: {
      title: {
        fr: "Outils de construction : règle, compas, équerre",
        en: "Construction tools: ruler, compass, set square",
        ar: "أدوات الإنشاء: مسطرة، بركار، مثلث",
        fa: "ابزارهای رسم: خط‌کش، پرگار، گونیا",
        ti: "ናይ ምህናጽ ኣሳልዓ: ሰሌዳ, ኮምፓስ, ጥርናፊ",
        uk: "Інструменти побудови: лінійка, циркуль, косинець",
      },
      paragraphs: {
        fr: [
          "En géométrie euclidienne, les constructions se font à la règle (droites) et au compas (cercles, distances). L'équerre permet de tracer des angles droits.",
          "Règle : tracer un segment ou une droite, mesurer une longueur. Le rapporteur mesure des angles.",
          "Compas : tracer un cercle ou un arc de cercle d'un rayon donné, reporter une longueur.",
          "Bonnes pratiques : travailler au crayon, tracer des traits fins, garder les constructions intermédiaires visibles.",
        ],
        en: [
          "In Euclidean geometry, constructions use a ruler (lines) and compass (circles, distances). A set square traces right angles.",
          "Ruler: draw a segment or line, measure a length. Protractor measures angles.",
          "Compass: draw a circle or arc of given radius, transfer lengths.",
          "Good practice: use pencil, thin lines, keep construction marks visible.",
        ],
        ar: [
          "في الهندسة الإقليدية، تُنجز الإنشاءات بالمسطرة والبركار. المثلث يرسم زوايا قائمة.",
          "المسطرة: رسم قطعة أو خط، قياس طول. المنقلة تقيس الزوايا.",
          "البركار: رسم دائرة بنصف قطر محدد، نقل مسافات.",
          "تعليمات: استخدم قلماً رصاصياً وخطوطاً رفيعة.",
        ],
        fa: [
          "در هندسه اقلیدسی، ساخت‌وسازها با خط‌کش و پرگار انجام می‌شود. گونیا زاویه قائمه رسم می‌کند.",
          "خط‌کش: رسم پاره‌خط یا خط، اندازه‌گیری طول. نقاله زاویه اندازه می‌گیرد.",
          "پرگار: رسم دایره با شعاع مشخص، انتقال فاصله.",
          "روش خوب: از مداد استفاده کن، خطوط نازک بکش.",
        ],
        ti: [
          "ናይ ኤዊክሊዲያን ጂኦሜትሪ ምህናጽ ሰሌዳን ኮምፓስን ዝጥቀም ዩ. ጥርናፊ ቀጥታ ኩርናዓት ዩ.",
          "ሰሌዳ: ሰቤርቲ ምስሳሉ ወይ ቀጥታ, ርዝሓ ምዕቃብ. ናይ ዲግሪ መሳርሒ ኩርናዓት ዝዕቅብ ዩ.",
          "ኮምፓስ: ዓውዲ ወይ ቀስቲ ምስሳሉ ናይ ዝሃቦ ናይ ፍርቂ-ቁምብዛ.",
          "ጥሩ ኣሰራርሓ: ዒፍ ምጥቃም, ቀጢን ሕርሚ ምሳሉ.",
        ],
        uk: [
          "В евклідовій геометрії побудови виконуються лінійкою і циркулем. Косинець дозволяє проводити прямі кути.",
          "Лінійка: провести відрізок, виміряти довжину. Транспортир вимірює кути.",
          "Циркуль: провести коло заданого радіуса, перенести відстань.",
          "Рекомендації: олівець, тонкі лінії, зберігати допоміжні побудови.",
        ],
      },
    },
    exercises: [
      { id: "g4-1-e1", promptFr: "Quel outil utilise-t-on pour tracer un angle droit précis ?", type: "short_text", acceptable: ["équerre", "equerre"] },
      { id: "g4-1-e2", promptFr: "Quel outil sert à tracer un cercle ?", type: "short_text", acceptable: ["compas"] },
      { id: "g4-1-e3", promptFr: "Quel outil mesure les angles ?", type: "short_text", acceptable: ["rapporteur"] },
      { id: "g4-1-e4", promptFr: "En combien de degrés est gradué un rapporteur standard ?", type: "number", acceptable: ["180"] },
      { id: "g4-1-e5", promptFr: "Pour tracer une droite on utilise une ___.", type: "short_text", acceptable: ["règle", "regle"] },
    ],
  };
