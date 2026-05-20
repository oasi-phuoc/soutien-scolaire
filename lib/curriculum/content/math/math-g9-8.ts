import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_G9_8_LESSON: MathSubmoduleLesson = {
    submoduleId: "G9-8",
    submoduleCode: "G9.8",
    theory: {
      title: {
        fr: "Interpréter un graphique",
        en: "Interpreting a graph",
        ar: "تفسير الرسم البياني",
        fa: "تفسیر نمودار",
        ti: "ናይ ስዕሊ ምትርጓም",
        uk: "Інтерпретація графіка",
      },
      paragraphs: {
        fr: [
          "Interpréter un graphique consiste à extraire des informations pertinentes : valeurs précises, tendances, comparaisons, anomalies.",
          "Questions type : Quelle est la valeur maximale ? Quand la valeur est-elle minimale ? La tendance est-elle à la hausse ou à la baisse ? Quel écart entre deux valeurs ?",
          "Attention aux échelles trompeuses : un axe y ne commençant pas à 0 peut exagérer les différences. Un axe compressé peut masquer des variations importantes.",
          "Conclusion : toujours contextualiser les chiffres (date, unités, source des données).",
        ],
        en: [
          "Interpreting a graph means extracting relevant information: values, trends, comparisons, anomalies.",
          "Typical questions: maximum value? minimum? upward or downward trend? gap between two values?",
          "Watch for misleading scales: y-axis not starting at 0 exaggerates differences.",
          "Contextualize numbers (date, units, source).",
        ],
        ar: [
          "تفسير الرسم البياني يعني استخراج معلومات: قيم، اتجاهات، مقارنات، شذوذات.",
          "أسئلة نموذجية: ما القيمة القصوى؟ متى القيمة الدنيا؟ الاتجاه صاعد أم نازل؟",
          "انتبه للمقاييس المضللة: محور y لا يبدأ من 0 يبالغ في الفروق.",
          "السياق: التاريخ، الوحدات، المصدر.",
        ],
        fa: [
          "تفسیر نمودار یعنی استخراج اطلاعات مرتبط: مقادیر، روندها، مقایسه‌ها، ناهنجاری‌ها.",
          "سوالات معمول: حداکثر مقدار؟ حداقل؟ روند صعودی یا نزولی؟",
          "مراقب مقیاس‌های گمراه‌کننده باش: محور y که از 0 شروع نمی‌کند تفاوت‌ها را بزرگ‌نمایی می‌کند.",
          "زمینه: تاریخ، واحدها، منبع.",
        ],
        ti: [
          "ናይ ስዕሊ ምትርጓም ዘምልክት ናህሰ ሓበሬታ ምምጻእ ዩ: ዋጋ, ናህሰ ምርምር, ምምስሳሉ, ናህሰ ዘይቀልጠፈ.",
          "ናህሰ ሕቶ: ዝለዓለ ዋጋ? ዝናኣሰ? ናብ ላዕሊ ወይ ታሕቲ?",
          "ናህሰ ዘጋምኡ ስኬል ምጥንቃቐ: y ካብ 0 ዘይጀምር ምስ ዝኸውን ፍልልይ ዝዓቢ.",
          "ኮንቴክስት: ዕለት, ኣሃዙ, ምንጪ.",
        ],
        uk: [
          "Інтерпретувати графік — витягти корисну інформацію: значення, тенденції, порівняння, аномалії.",
          "Типові питання: максимальне значення? мінімальне? тенденція вгору чи вниз?",
          "Обережно з оманливими шкалами: вісь y не від 0 перебільшує різниці.",
          "Контекст: дата, одиниці, джерело.",
        ],
      },
    },
    exercises: [
      { id: "g9-8-e1", promptFr: "Un graphique montre des ventes en hausse chaque mois. La tendance est ?", type: "short_text", acceptable: ["croissante", "à la hausse"] },
      { id: "g9-8-e2", promptFr: "Sur un camembert, le plus grand secteur représente la catégorie ?", type: "short_text", acceptable: ["la plus fréquente", "la plus grande"] },
      { id: "g9-8-e3", promptFr: "Un axe y commençant à 50 au lieu de 0 risque de quel problème ?", type: "short_text", acceptable: ["exagérer les différences", "tromper le lecteur"] },
      { id: "g9-8-e4", promptFr: "Sur un graphique de températures, le minimum en été est moins intéressant qu'en ?", type: "short_text", acceptable: ["hiver"] },
      { id: "g9-8-e5", promptFr: "Un graphique sans titre ni unité est-il complet ? (oui/non)", type: "short_text", acceptable: ["non"] },
    ],
  };
