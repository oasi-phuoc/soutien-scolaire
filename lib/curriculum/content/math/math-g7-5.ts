import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_G7_5_LESSON: MathSubmoduleLesson = {
    submoduleId: "G7-5",
    submoduleCode: "G7.5",
    theory: {
      title: {
        fr: "Réciproque du théorème",
        en: "Converse of the theorem",
        ar: "عكس المبرهنة",
        fa: "عکس قضیه",
        ti: "ናይ ቲዎሪም ተቃራኒ",
        uk: "Обернена теорема",
      },
      paragraphs: {
        fr: [
          "Réciproque de Pythagore : si dans un triangle ABC on a a² + b² = c² (où c est le plus grand côté), alors le triangle est rectangle (angle droit en face de c).",
          "Utilisation : pour vérifier si un triangle est rectangle sans mesurer les angles.",
          "Exemple : triangle de côtés 6, 8, 10. 6² + 8² = 36 + 64 = 100 = 10². Donc rectangle !",
          "Contre-exemple : côtés 5, 6, 8. 5² + 6² = 61 ≠ 64 = 8². Pas rectangle.",
        ],
        en: [
          "Converse of Pythagoras: if a² + b² = c² (c being the longest side), then the triangle is right-angled.",
          "Use: to check if a triangle is right-angled without measuring angles.",
          "Example: sides 6, 8, 10: 36 + 64 = 100. Right triangle!",
          "Counter-example: 5, 6, 8: 25 + 36 = 61 ≠ 64. Not right-angled.",
        ],
        ar: [
          "عكس فيثاغورس: إذا كان a² + b² = c² (c أكبر ضلع) فالمثلث قائم.",
          "الاستخدام: التحقق مما إذا كان المثلث قائماً.",
          "مثال: أضلاع 6, 8, 10: 36 + 64 = 100. مثلث قائم!",
          "مثال مضاد: 5, 6, 8: 61 ≠ 64. ليس قائماً.",
        ],
        fa: [
          "عکس فیثاغورس: اگر a² + b² = c² (c بزرگ‌ترین ضلع)، مثلث قائم‌الزاویه است.",
          "استفاده: برای تشخیص مثلث قائم بدون اندازه‌گیری زاویه.",
          "مثال: اضلاع 6، 8، 10: 36 + 64 = 100. مثلث قائم!",
          "نقیض: 5، 6، 8: 61 ≠ 64. قائم نیست.",
        ],
        ti: [
          "ናይ ፒታጎራስ ተቃራኒ: a² + b² = c² (c ዝዓቢ ጎቦ) ምስ ዝኸውን ሰለስ-ጎቦ ቀጥታ ዩ.",
          "ኣጠቓቕማ: ሰለስ-ጎቦ ቀጥታ ምዃኑ ምፍለጥ.",
          "ምሳሌ: ጎቦ 6, 8, 10: 36 + 64 = 100. ቀጥታ ሰለስ-ጎቦ!",
          "ተቃራኒ ምሳሌ: 5, 6, 8: 61 ≠ 64. ቀጥታ ዘይኮነ.",
        ],
        uk: [
          "Обернена теорема Піфагора: якщо a² + b² = c² (c — найдовша сторона), то трикутник прямокутний.",
          "Застосування: перевірити прямокутність без вимірювання кутів.",
          "Приклад: сторони 6, 8, 10: 36 + 64 = 100. Прямокутний!",
          "Контрприклад: 5, 6, 8: 61 ≠ 64. Не прямокутний.",
        ],
      },
    },
    exercises: [
      { id: "g7-5-e1", promptFr: "Triangle de côtés 3, 4, 5. Est-il rectangle ? (oui/non)", type: "short_text", acceptable: ["oui"] },
      { id: "g7-5-e2", promptFr: "Triangle de côtés 5, 6, 7. Est-il rectangle ? (oui/non)", type: "short_text", acceptable: ["non"] },
      { id: "g7-5-e3", promptFr: "Triangle de côtés 9, 12, 15. Est-il rectangle ? (oui/non)", type: "short_text", acceptable: ["oui"] },
      { id: "g7-5-e4", promptFr: "Pour prouver qu'un triangle est rectangle, on vérifie a² + b² = ? (donne le côté)", type: "short_text", acceptable: ["c²", "hypoténuse au carré"] },
      { id: "g7-5-e5", promptFr: "Triangle côtés 7, 24, 25. 7² + 24² = 49 + 576 = ? Est-ce = 25² = 625 ?", type: "number", acceptable: ["625"] },
    ],
  };
