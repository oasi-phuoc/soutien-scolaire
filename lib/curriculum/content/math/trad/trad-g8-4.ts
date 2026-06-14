import type { SubmoduleTrad } from "./trad-types";

export const TRAD_G8_4: SubmoduleTrad = {
  submoduleId: "G8-4",
  title: {
    fr: "Calculer une cathète",
    en: "Computing a leg",
    ar: "حساب ضلع قائم",
    fa: "محاسبه ساق",
    ti: "ኬቴቲ ምሕሳብ",
    uk: "Обчислення катета",
  },
  paragraphs: {
    fr: [
          "Quand on connaît l'hypoténuse c et une cathète a, on trouve l'autre cathète b : b = √(c² − a²).",
          "Méthode : on réarrange a² + b² = c² → b² = c² − a² → b = √(c² − a²).",
          "Exemple : c = 13, a = 5 → b² = 169 − 25 = 144 → b = 12.",
          "Vérification : 5² + 12² = 25 + 144 = 169 = 13² ✓.",
        ],
    en: [
          "Given hypotenuse c and leg a, find the other leg b: b = √(c² − a²).",
          "Rearrange: b² = c² − a².",
          "Example: c=13, a=5 → b² = 144 → b = 12.",
          "Check: 5² + 12² = 169 = 13² ✓.",
        ],
    ar: [
          "بمعرفة الوتر c والضلع a: b = √(c² − a²).",
          "إعادة الترتيب: b² = c² − a².",
          "مثال: c=13، a=5 → b = 12.",
          "تحقق: 5² + 12² = 13² ✓.",
        ],
    fa: [
          "با دانستن وتر c و ساق a: b = √(c² − a²).",
          "بازآرایی: b² = c² − a².",
          "مثال: c=13، a=5 → b = 12.",
          "تأیید: 5² + 12² = 13² ✓.",
        ],
    ti: [
          "ምስ ቅምባ c ን ኬቴቲ a ምፍላጥ: b = √(c² − a²).",
          "ምስፍሓ: b² = c² − a².",
          "ምሳሌ: c=13, a=5 → b = 12.",
          "ፍተሻ: 5² + 12² = 13² ✓.",
        ],
    uk: [
          "Знаючи гіпотенузу c і катет a: b = √(c² − a²).",
          "Перетворення: b² = c² − a².",
          "Приклад: c=13, a=5 → b = 12.",
          "Перевірка: 5² + 12² = 13² ✓.",
        ],
  },
  consignes: {
    "g7-4-e1": { fr: "c = 10, a = 6. b = ?", en: "c = 10, a = 6. b = ?" },
    "g7-4-e2": { fr: "c = 13, a = 12. b = ?", en: "c = 13, a = 12. b = ?" },
    "g7-4-e3": { fr: "c = 5, a = 3. b = ?", en: "c = 5, a = 3. b = ?" },
    "g7-4-e4": { fr: "c = 17, a = 8. b = ?", en: "c = 17, a = 8. b = ?" },
    "g7-4-e5": { fr: "c = 25, a = 7. b² = 25² − 7² = ?", en: "c = 25, a = 7. b? = 25? ? 7? = ?" },
  },
};