import type { SubmoduleTrad } from "./trad-types";

export const TRAD_G8_3: SubmoduleTrad = {
  submoduleId: "G8-3",
  title: {
    fr: "Calculer l'hypoténuse",
    en: "Computing the hypotenuse",
    ar: "حساب الوتر",
    fa: "محاسبه وتر",
    ti: "ቅምባ ምሕሳብ",
    uk: "Обчислення гіпотенузи",
  },
  paragraphs: {
    fr: [
          "Quand on connaît les deux cathètes a et b, on trouve l'hypoténuse c : c = √(a² + b²).",
          "Méthode : (1) calculer a² et b² ; (2) les additionner ; (3) prendre la racine carrée.",
          "Exemple : a = 5, b = 12 → c² = 25 + 144 = 169 → c = √169 = 13.",
          "Si le résultat n'est pas un carré parfait, utiliser la calculatrice ou donner une valeur approchée.",
        ],
    en: [
          "Given legs a and b, find hypotenuse c: c = √(a² + b²).",
          "Method: (1) compute a² and b²; (2) add them; (3) take square root.",
          "Example: a=5, b=12 → c² = 169 → c = 13.",
          "If not a perfect square, use a calculator or give approximate value.",
        ],
    ar: [
          "بمعرفة الضلعين القائمين a وb: c = √(a² + b²).",
          "الطريقة: (1) احسب a² وb²؛ (2) اجمعهما؛ (3) خذ الجذر.",
          "مثال: a=5، b=12 → c = 13.",
          "إذا لم يكن مربعاً تاماً استخدم الآلة الحاسبة.",
        ],
    fa: [
          "با دانستن ساق‌های a و b: c = √(a² + b²).",
          "روش: (1) a² و b² را محاسبه کن؛ (2) جمع کن؛ (3) جذر بگیر.",
          "مثال: a=5، b=12 → c = 13.",
          "اگر مربع کامل نبود، ماشین حساب استفاده کن.",
        ],
    ti: [
          "ምስ ኬቴቲ a ን b ምፍላጥ: c = √(a² + b²).",
          "ኣፈጻጽማ: (1) a² ን b² ምሕሳብ; (2) ምኽፋሎ; (3) ስርወ-ካሬ.",
          "ምሳሌ: a=5, b=12 → c = 13.",
          "ፍጹም ካሬ ዘይኮነ ምስ ዝኸውን ካልኩሌተር ምጥቃም.",
        ],
    uk: [
          "Знаючи катети a і b: c = √(a² + b²).",
          "Метод: (1) обчислити a² і b²; (2) скласти; (3) взяти квадратний корінь.",
          "Приклад: a=5, b=12 → c = 13.",
          "Якщо не точний квадрат — скористатись калькулятором.",
        ],
  },
  consignes: {
    "g7-3-e1": { fr: "a = 3, b = 4. c = ?", en: "a = 3, b = 4. c = ?" },
    "g7-3-e2": { fr: "a = 6, b = 8. c = ?", en: "a = 6, b = 8. c = ?" },
    "g7-3-e3": { fr: "a = 9, b = 12. c = ?", en: "a = 9, b = 12. c = ?" },
    "g7-3-e4": { fr: "a = 1, b = 1. c = √? (donne le nombre sous la racine)", en: "a = 1, b = 1. c = ?? (give the number under the square root)" },
    "g7-3-e5": { fr: "a = 8, b = 15. c = ?", en: "a = 8, b = 15. c = ?" },
  },
};