import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_G9_5_LESSON: MathSubmoduleLesson = {
    submoduleId: "G9-5",
    submoduleCode: "G9.5",
    theory: {
      title: {
        fr: "Courbes",
        en: "Line graphs (curves)",
        ar: "المنحنيات",
        fa: "منحنی‌ها",
        ti: "ናይ ቀስቲ ስዕሊ",
        uk: "Графіки (криві)",
      },
      paragraphs: {
        fr: [
          "Une courbe (graphique en ligne) relie des points pour montrer l'évolution d'une valeur dans le temps ou selon une variable.",
          "Lecture : identifier la valeur y pour chaque x ; trouver les maxima, minima, moments de croissance/décroissance.",
          "Construction : (1) placer les points ; (2) les relier dans l'ordre par des segments droits ou une courbe lisse.",
          "Utilisation : températures, cours boursiers, croissance d'une plante, vitesse d'un véhicule.',",
        ],
        en: [
          "A line graph connects points to show how a value changes over time or with another variable.",
          "Reading: find y for each x; identify maxima, minima, growth/decline.",
          "Construction: (1) plot points; (2) connect in order with straight segments or smooth curve.",
          "Use: temperatures, stock prices, plant growth, vehicle speed.",
        ],
        ar: [
          "المنحنى يربط نقاطاً لإظهار تطور قيمة في الزمن أو مع متغير.",
          "القراءة: إيجاد y لكل x؛ تحديد القمم والقيعان.",
          "الإنشاء: (1) ضع النقاط؛ (2) صلها بالترتيب.",
          "الاستخدام: درجات الحرارة، الأسعار، النمو.",
        ],
        fa: [
          "منحنی نقاط را به هم وصل می‌کند تا تغییر یک مقدار را در زمان یا با یک متغیر نشان دهد.",
          "خواندن: y را برای هر x بیاب؛ حداکثر، حداقل، صعود/نزول را شناسایی کن.",
          "ساخت: (1) نقطه‌ها را رسم کن؛ (2) به ترتیب وصل کن.",
          "استفاده: دما، قیمت‌ها، رشد.",
        ],
        ti: [
          "ናይ ቀስቲ ስዕሊ ነጥቢ ምትእስሳር ናህሰ ዋጋ ምቅያያር ዘርኢ ዩ.",
          "ምንባብ: ምስ ነፍሲ ወከፍ x ናህሰ y ምርካብ; ናህሰ ዝለዓለ, ዝናኣሰ, ምዕባይ/ምቕናስ ምፍላጥ.",
          "ምህናጽ: (1) ነጥቢ ምምቃሉ; (2) ብናይ ስርዓት ምትእስሳር.",
          "ኣጠቓቕማ: ሙቐት, ዋጋ, ምዕባይ.",
        ],
        uk: [
          "Лінійний графік з'єднує точки, щоб показати зміну значення в часі або від змінної.",
          "Читання: знайти y для кожного x; визначити максимуми, мінімуми, зростання/спадання.",
          "Побудова: (1) нанести точки; (2) з'єднати по порядку.",
          "Застосування: температури, ціни акцій, ріст рослин.",
        ],
      },
    },
    exercises: [
      { id: "g9-5-e1", promptFr: "Un graphique montre T(°C) en fonction du temps. Comment appelle-t-on cette représentation ?", type: "short_text", acceptable: ["courbe", "graphique en ligne"] },
      { id: "g9-5-e2", promptFr: "Si la courbe monte de gauche à droite, la valeur est-elle croissante ou décroissante ?", type: "short_text", acceptable: ["croissante"] },
      { id: "g9-5-e3", promptFr: "Un maximum sur une courbe est un point où la valeur est ? (la plus haute/la plus basse)", type: "short_text", acceptable: ["la plus haute"] },
      { id: "g9-5-e4", promptFr: "Pour tracer une courbe, on commence par faire quoi ?", type: "short_text", acceptable: ["un tableau de valeurs", "placer les points"] },
      { id: "g9-5-e5", promptFr: "Une courbe horizontale indique que la valeur est constante ? (oui/non)", type: "short_text", acceptable: ["oui"] },
    ],
  };
