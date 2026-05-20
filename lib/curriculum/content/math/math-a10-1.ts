import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A10_1_LESSON: MathSubmoduleLesson = {
    submoduleId: "A10-1",
    submoduleCode: "A10.1",
    theory: {
      title: {
        fr: "Principe d'une équation",
        en: "Principle of an equation",
        ar: "مبدأ المعادلة",
        fa: "اصل معادله",
        ti: "ናይ ምዕርርያ መምርሒ",
        uk: "Принцип рівняння",
      },
      paragraphs: {
        fr: [
          "Une équation est une égalité contenant une inconnue (ex. : 2x + 3 = 11). Résoudre une équation, c'est trouver la valeur de l'inconnue qui rend l'égalité vraie.",
          "Principe fondamental : on peut effectuer la même opération des deux côtés de l'égalité sans la modifier. C'est comme une balance : ce qu'on ajoute à gauche, on l'ajoute aussi à droite.",
          "Solution et vérification : quand on trouve x = 4, on vérifie en substituant : 2(4) + 3 = 11 ✓.",
          "Une équation du 1er degré a une seule inconnue à la puissance 1, et elle admet exactement une solution.",
        ],
        en: [
          "An equation is an equality containing an unknown (e.g., 2x + 3 = 11). Solving means finding the value that makes the equality true.",
          "Fundamental principle: you can perform the same operation on both sides without changing the equation — like a balance scale.",
          "Solution and check: when we find x = 4, we verify: 2(4) + 3 = 11 ✓.",
          "A first-degree equation has one unknown to the power 1 and exactly one solution.",
        ],
        ar: [
          "المعادلة مساواة تحتوي على مجهول (مثال: 2x + 3 = 11). الحل يعني إيجاد القيمة التي تجعل المساواة صحيحة.",
          "المبدأ الأساسي: يمكن إجراء نفس العملية على طرفي المعادلة دون تغييرها — مثل الميزان.",
          "التحقق: عند إيجاد x = 4 نتحقق: 2(4) + 3 = 11 ✓.",
          "معادلة الدرجة الأولى لها مجهول واحد بالأس 1 ولها حل واحد بالضبط.",
        ],
        fa: [
          "معادله برابری‌ای است که حاوی مجهول است (مثل 2x + 3 = 11). حل به معنی یافتن مقداری است که برابری را درست می‌کند.",
          "اصل اساسی: می‌توان همان عملیات را روی هر دو طرف معادله انجام داد — مثل ترازو.",
          "تأیید: وقتی x = 4 می‌یابیم: 2(4) + 3 = 11 ✓.",
          "معادله درجه اول یک مجهول با توان 1 دارد و دقیقاً یک جواب دارد.",
        ],
        ti: [
          "ምዕርርያ ዘይፍለጥ ቁጽሪ ዘሎ ማዕርነት ዩ (ምሳሌ: 2x + 3 = 11). ምፍታሕ ዘምልክት ማዕርነት ሓቂ ዝገብር ቁጽሪ ምርካብ ዩ.",
          "ዋና መምርሒ: ኣብ ክልቲ ሸነኽ ሓደ ስራሕ ምትእትታው — ከም ሚዛን.",
          "ፍተሻ: x = 4 ምስ ረኸብና: 2(4) + 3 = 11 ✓.",
          "ናይ 1ይ ደርቢ ምዕርርያ ሓደ ዘይፍለጥ ቁጽሪ ብ1 ሓይሊ ዘለዎ ሓደ ፍትሒ ዩ.",
        ],
        uk: [
          "Рівняння — це рівність, що містить невідому (напр., 2x + 3 = 11). Розв'язати — знайти значення, що робить рівність правильною.",
          "Основний принцип: до обох частин рівняння можна застосовувати одну й ту саму операцію — як терези.",
          "Перевірка: знайшовши x = 4, підставляємо: 2(4) + 3 = 11 ✓.",
          "Рівняння першого степеня має одну невідому у степені 1 і рівно один розв'язок.",
        ],
      },
    },
    exercises: [
      { id: "a10-1-e1", promptFr: "Résous x + 5 = 12.", type: "number", acceptable: ["7"] },
      { id: "a10-1-e2", promptFr: "Résous x − 3 = 8.", type: "number", acceptable: ["11"] },
      { id: "a10-1-e3", promptFr: "Résous 2x = 14.", type: "number", acceptable: ["7"] },
      { id: "a10-1-e4", promptFr: "Résous x/4 = 5.", type: "number", acceptable: ["20"] },
      { id: "a10-1-e5", promptFr: "Vérifie si x = 3 est solution de 2x + 1 = 7. (oui/non)", type: "short_text", acceptable: ["oui"] },
    ],
  };
