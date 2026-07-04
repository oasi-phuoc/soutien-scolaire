import type { SubmoduleTrad } from "./trad-types";

export const TRAD_G8_5: SubmoduleTrad = {
  submoduleId: "G8-5",
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
  consignes: {
    "g7-5-e1": { fr: "Triangle de côtés 3, 4, 5. Est-il rectangle ? (oui/non)", en: "Triangle with sides 3, 4, 5. Is it right-angled? (yes/no)" },
    "g7-5-e2": { fr: "Triangle de côtés 5, 6, 7. Est-il rectangle ? (oui/non)", en: "Triangle with sides 5, 6, 7. Is it right-angled? (yes/no)" },
    "g7-5-e3": { fr: "Triangle de côtés 9, 12, 15. Est-il rectangle ? (oui/non)", en: "Triangle with sides 9, 12, 15. Is it right-angled? (yes/no)" },
    "g7-5-e4": { fr: "Pour prouver qu'un triangle est rectangle, on vérifie a² + b² = ? (donne le côté)", en: "To prove that a triangle is right-angled, we check a² + b² = ? (give the side)" },
    "g7-5-e5": { fr: "Triangle côtés 7, 24, 25. 7² + 24² = 49 + 576 = ? Est-ce = 25² = 625 ?", en: "Triangle with sides 7, 24, 25. 7² + 24² = 49 + 576 = ? Is this equal to 25² = 625?" },
  },
};