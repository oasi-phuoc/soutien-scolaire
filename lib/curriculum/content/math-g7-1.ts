import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_G7_1_LESSON: MathSubmoduleLesson = {
    submoduleId: "G7-1",
    submoduleCode: "G7.1",
    theory: {
      title: {
        fr: "Triangle rectangle",
        en: "Right triangle",
        ar: "المثلث القائم",
        fa: "مثلث قائم‌الزاویه",
        ti: "ናይ ቀጥታ ኩርናዕ ሰለስ-ጎቦ",
        uk: "Прямокутний трикутник",
      },
      paragraphs: {
        fr: [
          "Un triangle rectangle est un triangle qui possède un angle droit (90°). Le côté opposé à l'angle droit s'appelle l'hypoténuse. Les deux autres côtés sont les cathètes (ou jambes).",
          "L'hypoténuse est toujours le côté le plus long du triangle rectangle.",
          "Exemple : triangle avec angles 90°, 30°, 60°. Le côté opposé au 90° est l'hypoténuse.",
          "Pour identifier un triangle rectangle : vérifier si un angle vaut exactement 90° ou si la relation a² + b² = c² est satisfaite.",
        ],
        en: [
          "A right triangle has one right angle (90°). The side opposite the right angle is the hypotenuse. The other two sides are legs (catheti).",
          "The hypotenuse is always the longest side.",
          "Example: triangle with angles 90°, 30°, 60°. The side opposite 90° is the hypotenuse.",
          "To identify a right triangle: check for a 90° angle or verify a² + b² = c².",
        ],
        ar: [
          "المثلث القائم لديه زاوية قائمة (90°). الضلع المقابل للزاوية القائمة هو الوتر. الضلعان الآخران هما الضلعان القائمان.",
          "الوتر هو دائماً الضلع الأطول.",
          "لتحديد مثلث قائم: تحقق من وجود زاوية 90° أو إذا كان a² + b² = c².",
        ],
        fa: [
          "مثلث قائم‌الزاویه یک زاویه قائمه (90°) دارد. ضلع مقابل زاویه قائمه وتر است. دو ضلع دیگر ساق‌های مثلث هستند.",
          "وتر همیشه بلندترین ضلع است.",
          "برای شناسایی مثلث قائم: یک زاویه 90° بیاب یا a² + b² = c² را بررسی کن.",
        ],
        ti: [
          "ናይ ቀጥታ ኩርናዕ ሰለስ-ጎቦ ሓደ ቀጥታ ኩርናዕ (90°) ዘለዎ ዩ. ናብ ቀጥታ ኩርናዕ ዝቃወሞ ጎቦ ቅምባ ዩ. ካልኦት ክልተ ጎቦ ኬቴቲ ዩ.",
          "ቅምባ ዘወጊ ዝዓቢ ጎቦ ዩ.",
          "ናይ ቀጥታ ኩርናዕ ሰለስ-ጎቦ ምፍላጥ: ናይ 90° ኩርናዕ ምርካብ ወይ a² + b² = c² ምፍተሻ.",
        ],
        uk: [
          "Прямокутний трикутник має один прямий кут (90°). Сторона, протилежна прямому куту — гіпотенуза. Інші дві сторони — катети.",
          "Гіпотенуза — завжди найдовша сторона.",
          "Для визначення прямокутного трикутника: знайти кут 90° або перевірити a² + b² = c².",
        ],
      },
    },
    exercises: [
      { id: "g7-1-e1", promptFr: "Dans un triangle rectangle, comment s'appelle le côté opposé à l'angle droit ?", type: "short_text", acceptable: ["hypoténuse", "hypotenuse"] },
      { id: "g7-1-e2", promptFr: "L'hypoténuse est-elle le côté le plus long ? (oui/non)", type: "short_text", acceptable: ["oui"] },
      { id: "g7-1-e3", promptFr: "Un triangle avec angles 90°, 45°, 45° est-il rectangle ? (oui/non)", type: "short_text", acceptable: ["oui"] },
      { id: "g7-1-e4", promptFr: "Combien d'angles droits a un triangle rectangle ?", type: "number", acceptable: ["1"] },
      { id: "g7-1-e5", promptFr: "Les deux côtés non-hypoténuse s'appellent ?", type: "short_text", acceptable: ["cathètes", "cathetes", "jambes"] },
    ],
  };
