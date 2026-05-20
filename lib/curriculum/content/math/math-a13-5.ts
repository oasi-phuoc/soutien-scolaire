import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A13_5_LESSON: MathSubmoduleLesson = {
    submoduleId: "A13-5",
    submoduleCode: "A13.5",
    theory: {
      title: {
        fr: "Fonction affine f(x) = ax + b",
        en: "Affine function f(x) = ax + b",
        ar: "الدالة الانتسابية f(x) = ax + b",
        fa: "تابع آفین f(x) = ax + b",
        ti: "ናይ ኣፊን ስራሕ f(x) = ax + b",
        uk: "Лінійна функція f(x) = ax + b",
      },
      paragraphs: {
        fr: [
          "Une fonction affine a la forme f(x) = ax + b, où a est la pente et b est l'ordonnée à l'origine (valeur de y quand x = 0).",
          "Graphique : une droite (non nécessairement par l'origine). Pente a : mesure l'inclinaison. Ordonnée à l'origine b : point où la droite coupe l'axe y.",
          "Méthode de tracé : calculer deux points, puis tracer la droite. Le point (0, b) est facile à trouver (l'ordonnée à l'origine).",
          "Exemple : f(x) = 2x + 3. Pour x = 0 : y = 3 (point A(0,3)). Pour x = 2 : y = 7 (point B(2,7)). Tracer la droite AB.",
        ],
        en: [
          "An affine function has the form f(x) = ax + b, where a is the slope and b is the y-intercept.",
          "Graph: a straight line. Slope a: inclination. y-intercept b: where the line crosses the y-axis.",
          "Drawing method: compute two points, then draw the line. The point (0, b) is the y-intercept.",
          "Example: f(x) = 2x + 3. At x=0: y=3. At x=2: y=7. Draw the line through (0,3) and (2,7).",
        ],
        ar: [
          "الدالة الانتسابية: f(x) = ax + b، حيث a الميل وb نقطة قطع المحور y.",
          "الرسم: خط مستقيم. الميل a: الانحدار. b: تقاطع مع المحور y.",
          "طريقة الرسم: احسب نقطتين وارسم الخط. النقطة (0,b) سهلة الحساب.",
          "مثال: f(x) = 2x + 3. x=0: y=3؛ x=2: y=7. ارسم الخط.",
        ],
        fa: [
          "تابع آفین: f(x) = ax + b که a شیب و b عرض از مبدأ است.",
          "نمودار: یک خط مستقیم. شیب a: شیب خط. b: جایی که خط محور y را قطع می‌کند.",
          "روش رسم: دو نقطه محاسبه کن، سپس خط بکش. نقطه (0,b) عرض از مبدأ است.",
          "مثال: f(x) = 2x + 3. x=0: y=3؛ x=2: y=7. خط را رسم کن.",
        ],
        ti: [
          "ናይ ኣፊን ስራሕ: f(x) = ax + b ሃፍ a ን ናይ y ሕርሚ ምቁራጽ b.",
          "ስዕሊ: ቐጥታ ሕርሚ. ሃፍ a: ምቑጻር. b: ሕርሚ y ዝቆርጽ ቦታ.",
          "ናይ ምስሳሉ ኣፈጻጽማ: ክልተ ነጥቢ ምሕሳብ ሕርሚ ምምሃዝ.",
          "ምሳሌ: f(x) = 2x + 3. x=0: y=3; x=2: y=7.",
        ],
        uk: [
          "Лінійна функція: f(x) = ax + b, де a — кутовий коефіцієнт, b — початкова ордината.",
          "Графік: пряма лінія. a відповідає за нахил, b — точка перетину з віссю y.",
          "Побудова: обчислити дві точки, провести пряму. Точка (0, b) — початкова ордината.",
          "Приклад: f(x) = 2x + 3. При x=0: y=3; при x=2: y=7. Провести пряму.",
        ],
      },
    },
    exercises: [
      { id: "a13-5-e1", promptFr: "Pour f(x) = 3x + 2, calcule f(0).", type: "number", acceptable: ["2"] },
      { id: "a13-5-e2", promptFr: "Pour f(x) = 3x + 2, calcule f(3).", type: "number", acceptable: ["11"] },
      { id: "a13-5-e3", promptFr: "Quelle est l'ordonnée à l'origine de f(x) = 5x − 7 ?", type: "number", acceptable: ["-7", "−7"] },
      { id: "a13-5-e4", promptFr: "Quelle est la pente de f(x) = −2x + 4 ?", type: "number", acceptable: ["-2", "−2"] },
      { id: "a13-5-e5", promptFr: "Si f(x) = ax + 1 et f(2) = 7, quelle est la valeur de a ?", type: "number", acceptable: ["3"] },
    ],
  };
