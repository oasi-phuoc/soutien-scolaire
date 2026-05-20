import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A13_7_LESSON: MathSubmoduleLesson = {
    submoduleId: "A13-7",
    submoduleCode: "A13.7",
    theory: {
      title: {
        fr: "Lecture graphique",
        en: "Reading graphs",
        ar: "قراءة الرسوم البيانية",
        fa: "خواندن نمودار",
        ti: "ናይ ስዕሊ ምንባብ",
        uk: "Читання графіків",
      },
      paragraphs: {
        fr: [
          "La lecture graphique permet d'extraire des informations à partir d'une courbe sans calcul : trouver f(x) pour un x donné, trouver x tel que f(x) = k, identifier croissance/décroissance.",
          "Trouver f(a) : partir de a sur l'axe x, monter jusqu'à la courbe, lire la valeur sur l'axe y.",
          "Trouver x tel que f(x) = k : partir de k sur l'axe y, aller horizontalement jusqu'à la courbe, lire la valeur sur l'axe x.",
          "Identifier les intersections : la courbe coupe l'axe x (f(x) = 0 : racines) ; la courbe coupe l'axe y (ordonnée à l'origine).",
        ],
        en: [
          "Reading a graph lets you extract information without calculation: find f(x) for a given x, find x such that f(x) = k, identify increase/decrease.",
          "Find f(a): from a on x-axis, go up to the curve, read y.",
          "Find x when f(x) = k: from k on y-axis, go horizontally to curve, read x.",
          "Intersections: curve crosses x-axis → roots (f(x) = 0); crosses y-axis → y-intercept.",
        ],
        ar: [
          "قراءة الرسم البياني تستخرج معلومات دون حساب: إيجاد f(x)، x بحيث f(x) = k، تحديد التزايد/التناقص.",
          "إيجاد f(a): من a على محور x اصعد حتى المنحنى اقرأ y.",
          "إيجاد x عند f(x) = k: من k على محور y انتقل أفقياً حتى المنحنى اقرأ x.",
          "تقاطع مع المحور x → جذور؛ مع المحور y → نقطة القطع.",
        ],
        fa: [
          "خواندن نمودار بدون محاسبه اطلاعات استخراج می‌کند: یافتن f(x)، x چنان که f(x) = k، تشخیص صعود/نزول.",
          "یافتن f(a): از a روی محور x بالا برو تا منحنی، y را بخوان.",
          "یافتن x وقتی f(x) = k: از k روی محور y افقی برو تا منحنی، x را بخوان.",
          "تقاطع با محور x → ریشه‌ها؛ با محور y → عرض از مبدأ.",
        ],
        ti: [
          "ናይ ስዕሊ ምንባብ ብዘይ ስሌት ሓበሬታ ምምጻእ ዩ: f(x) ምርካብ, x ብ f(x) = k, ምዕባይ/ምቕናስ ምፍላጥ.",
          "f(a) ምርካብ: ካብ a ናብ x ሕርሚ ናብ ስዕሊ ምሓዝ y ምንባብ.",
          "f(x) = k ናይ x ምርካብ: ካብ k ናብ y ሕርሚ ናብ ስዕሊ ምሓዝ x ምንባብ.",
          "ስዕሊ ምስ x ሕርሚ ዝቆርጽ → ሓቂ; ምስ y ሕርሚ → ምቁራጽ.",
        ],
        uk: [
          "Читання графіка дозволяє отримувати інформацію без обчислень: знайти f(x), x таке, що f(x) = k, визначити зростання/спадання.",
          "Знайти f(a): з a на осі x піднятися до кривої, прочитати y.",
          "Знайти x при f(x) = k: з k на осі y провести горизонталь до кривої, прочитати x.",
          "Перетин з віссю x → нулі (корені); з віссю y → початкова ордината.",
        ],
      },
    },
    exercises: [
      { id: "a13-7-e1", promptFr: "Sur le graphique de f(x) = 2x + 1, quelle est la valeur de y quand x = 3 ?", type: "number", acceptable: ["7"] },
      { id: "a13-7-e2", promptFr: "Sur le graphique de f(x) = 2x + 1, pour quelle valeur de x obtient-on y = 5 ?", type: "number", acceptable: ["2"] },
      { id: "a13-7-e3", promptFr: "La droite f(x) = 3x − 6 coupe l'axe x en quel point ? (donne x)", type: "number", acceptable: ["2"] },
      { id: "a13-7-e4", promptFr: "La droite f(x) = x + 4 coupe l'axe y en quel point ? (donne y)", type: "number", acceptable: ["4"] },
      { id: "a13-7-e5", promptFr: "La fonction f(x) = −x + 5 est-elle croissante ou décroissante ? (croissante/décroissante)", type: "short_text", acceptable: ["décroissante", "decroissante"] },
    ],
  };
