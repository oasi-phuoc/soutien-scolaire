import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A13_4_LESSON: MathSubmoduleLesson = {
    submoduleId: "A13-4",
    submoduleCode: "A13.4",
    theory: {
      title: {
        fr: "Fonction linéaire f(x) = ax",
        en: "Linear function f(x) = ax",
        ar: "الدالة الخطية f(x) = ax",
        fa: "تابع خطی f(x) = ax",
        ti: "ናይ ቐጥታ ስራሕ f(x) = ax",
        uk: "Лінійна функція f(x) = ax",
      },
      paragraphs: {
        fr: [
          "Une fonction linéaire a la forme f(x) = ax, où a est une constante appelée pente (ou coefficient directeur). Son graphique est une droite passant par l'origine (0, 0).",
          "Si a > 0, la droite monte de gauche à droite. Si a < 0, elle descend. Si a = 0, c'est la droite y = 0 (axe x).",
          "Exemples : f(x) = 2x (pente 2, monte) ; f(x) = −x (pente −1, descend) ; f(x) = 0,5x (pente douce).",
          "Propriété : f(0) = 0 toujours. La droite passe obligatoirement par l'origine.",
        ],
        en: [
          "A linear function has the form f(x) = ax, where a is the slope. Its graph is a line through the origin (0, 0).",
          "If a > 0, the line goes up left to right. If a < 0, it goes down. If a = 0, it's y = 0.",
          "Examples: f(x) = 2x (slope 2); f(x) = −x (slope −1); f(x) = 0.5x.",
          "Property: f(0) = 0 always. The line always passes through the origin.",
        ],
        ar: [
          "الدالة الخطية لها الشكل f(x) = ax، حيث a هو الميل. رسمها خط مستقيم يمر بالأصل (0,0).",
          "إذا a > 0 الخط يصعد؛ إذا a < 0 ينزل.",
          "أمثلة: f(x) = 2x؛ f(x) = −x.",
          "الخاصية: f(0) = 0 دائماً.",
        ],
        fa: [
          "تابع خطی فرم f(x) = ax دارد که a شیب است. نموdarش خطی است که از مبدأ (0,0) می‌گذرد.",
          "اگر a > 0 خط صعودی است؛ اگر a < 0 نزولی.",
          "مثال‌ها: f(x) = 2x؛ f(x) = −x.",
          "ویژگی: f(0) = 0 همیشه.",
        ],
        ti: [
          "ናይ ቐጥታ ስራሕ f(x) = ax ዩ ሰሌዳ a ዝኾነ ሃፍ ዩ. ስዕሉ ካብ ምንጭ (0,0) ዝሓልፍ ቐጥታ ሕርሚ ዩ.",
          "a > 0 ምስ ዝኸውን ናብ ላዕሊ ዩ; a < 0 ምስ ዝኸውን ናብ ታሕቲ.",
          "ምሳሌ: f(x) = 2x; f(x) = −x.",
          "ንብረት: f(0) = 0 ኩሉ ጊዜ.",
        ],
        uk: [
          "Лінійна функція має вигляд f(x) = ax, де a — кутовий коефіцієнт. Її графік — пряма, що проходить через початок координат (0,0).",
          "Якщо a > 0, пряма іде вгору; якщо a < 0 — вниз.",
          "Приклади: f(x) = 2x; f(x) = −x; f(x) = 0,5x.",
          "Властивість: f(0) = 0 завжди.",
        ],
      },
    },
    exercises: [
      { id: "a13-4-e1", promptFr: "Pour f(x) = 3x, calcule f(4).", type: "number", acceptable: ["12"] },
      { id: "a13-4-e2", promptFr: "La droite f(x) = 5x passe-t-elle par l'origine ? (oui/non)", type: "short_text", acceptable: ["oui"] },
      { id: "a13-4-e3", promptFr: "Quelle est la pente de f(x) = −2x ?", type: "number", acceptable: ["-2", "−2"] },
      { id: "a13-4-e4", promptFr: "Si f(x) = ax et f(3) = 12, quelle est la valeur de a ?", type: "number", acceptable: ["4"] },
      { id: "a13-4-e5", promptFr: "La droite f(x) = 0,5x : pour x = 6, y = ?", type: "number", acceptable: ["3"] },
    ],
  };
