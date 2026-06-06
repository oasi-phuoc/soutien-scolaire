import type { SubmoduleTrad } from "./trad-types";

export const TRAD_G7_5: SubmoduleTrad = {
  submoduleId: "G7-5",
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
};
