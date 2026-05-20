import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A9_3_LESSON: MathSubmoduleLesson = {
    submoduleId: "A9-3",
    submoduleCode: "A9.3",
    theory: {
      title: {
        fr: "Substitution (évaluation)",
        en: "Substitution (evaluation)",
        ar: "الإحلال (التقييم)",
        fa: "جایگذاری (ارزیابی)",
        ti: "ምትካእ (ምምዛን)",
        uk: "Підстановка (обчислення значення)",
      },
      paragraphs: {
        fr: [
          "Évaluer une expression signifie remplacer les variables par des valeurs numériques et calculer le résultat.",
          "Méthode : remplace chaque variable par sa valeur, puis effectue les calculs en respectant les priorités opératoires.",
          "Exemple : évalue 3x² − 2x + 1 pour x = 3. → 3(3)² − 2(3) + 1 = 3 × 9 − 6 + 1 = 27 − 6 + 1 = 22.",
          "Exemple avec deux variables : évalue a² + b pour a = 4, b = −3. → 16 + (−3) = 13.",
        ],
        en: [
          "Evaluating an expression means replacing variables with numerical values and computing the result.",
          "Method: replace each variable with its value, then compute following order of operations.",
          "Example: evaluate 3x² − 2x + 1 for x = 3. → 3(9) − 6 + 1 = 27 − 6 + 1 = 22.",
          "Two-variable example: evaluate a² + b for a = 4, b = −3. → 16 + (−3) = 13.",
        ],
        ar: [
          "تقييم تعبير يعني استبدال المتغيرات بقيم عددية وحساب النتيجة.",
          "الطريقة: استبدل كل متغير بقيمته ثم احسب مراعياً أولويات العمليات.",
          "مثال: قيّم 3x² − 2x + 1 عند x = 3. → 27 − 6 + 1 = 22.",
          "مثال بمتغيرين: a² + b عند a=4, b=−3. → 16 − 3 = 13.",
        ],
        fa: [
          "ارزیابی عبارت یعنی جایگذاری متغیرها با مقادیر عددی و محاسبه نتیجه.",
          "روش: هر متغیر را با مقدارش جایگزین کن، سپس با رعایت اولویت عملیات حساب کن.",
          "مثال: 3x² − 2x + 1 را برای x = 3 ارزیابی کن. → 27 − 6 + 1 = 22.",
          "مثال دو متغیره: a² + b برای a=4, b=−3 → 16 − 3 = 13.",
        ],
        ti: [
          "ምምዛን ኣዝማሪ ዘምልክት ተለዋዋጢ ብቁጽሪ ምትካእን ፍጻሜ ምሕሳብን ዩ.",
          "ኣፈጻጽማ: ነፍሲ ወከፍ ተለዋዋጢ ብዋጋኡ ተካኡ ብዘሎ ናብ ስሌት ምስ ቀዳምነት ስራሕ.",
          "ምሳሌ: 3x² − 2x + 1 ምስ x=3 → 27 − 6 + 1 = 22.",
          "ክልተ ተለዋዋጢ ምሳሌ: a² + b ምስ a=4, b=−3 → 16 − 3 = 13.",
        ],
        uk: [
          "Обчислити значення виразу означає підставити числа замість змінних і знайти результат.",
          "Метод: замінити кожну змінну її значенням, потім обчислити з урахуванням пріоритету операцій.",
          "Приклад: обчисли 3x² − 2x + 1 для x = 3. → 27 − 6 + 1 = 22.",
          "Приклад з двома змінними: a² + b при a = 4, b = −3 → 16 − 3 = 13.",
        ],
      },
    },
    exercises: [
      { id: "a9-3-e1", promptFr: "Évalue 4x − 3 pour x = 5.", type: "number", acceptable: ["17"] },
      { id: "a9-3-e2", promptFr: "Évalue x² + 2x pour x = 4.", type: "number", acceptable: ["24"] },
      { id: "a9-3-e3", promptFr: "Évalue 3a + 2b pour a = 2, b = 5.", type: "number", acceptable: ["16"] },
      { id: "a9-3-e4", promptFr: "Évalue 2x² − x + 1 pour x = 3.", type: "number", acceptable: ["16"] },
      { id: "a9-3-e5", promptFr: "Évalue (a + b)² pour a = 1, b = 2.", type: "number", acceptable: ["9"] },
    ],
  };
