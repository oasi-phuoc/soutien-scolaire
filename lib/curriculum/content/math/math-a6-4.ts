import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A6_4_LESSON: MathSubmoduleLesson = {
    submoduleId: "A6-4",
    submoduleCode: "A6.4",
    theory: {
      title: { fr: "Augmentation / réduction en %", en: "Increase / decrease in %", ar: "الزيادة / التخفيض بنسبة %", fa: "افزایش / کاهش درصدی", ti: "ምብዛሕ / ምጉዳል ናይ %", uk: "Збільшення / зменшення на %" },
      paragraphs: {
        fr: [
          "Augmenter de p% : multiplier par (1 + p/100). Exemple : augmenter 200 de 15% → 200 × 1,15 = 230.",
          "Diminuer de p% : multiplier par (1 − p/100). Exemple : diminuer 200 de 20% → 200 × 0,80 = 160.",
          "Coefficient multiplicateur : 1,15 correspond à une augmentation de 15% ; 0,80 à une réduction de 20%.",
        ],
        en: [
          "Increase by p%: multiply by (1 + p/100). Example: increase 200 by 15% → 200 × 1.15 = 230.",
          "Decrease by p%: multiply by (1 − p/100). Example: decrease 200 by 20% → 200 × 0.80 = 160.",
          "Multiplier: 1.15 corresponds to a 15% increase; 0.80 to a 20% decrease.",
        ],
        ar: [
          "الزيادة بنسبة ص%: اضرب في (1 + ص/100). مثال: زيادة 200 بنسبة 15% → 200 × 1,15 = 230.",
          "التخفيض بنسبة ص%: اضرب في (1 − ص/100). مثال: تخفيض 200 بنسبة 20% → 200 × 0,80 = 160.",
          "معامل الضرب: 1,15 يوافق زيادة 15%؛ 0,80 يوافق تخفيضًا 20%.",
        ],
        fa: [
          "افزایش p٪: ضرب در (۱ + p/100). مثال: افزایش ۲۰۰ به مقدار ۱۵٪ → ۲۰۰ × ۱,۱۵ = ۲۳۰.",
          "کاهش p٪: ضرب در (۱ − p/100). مثال: کاهش ۲۰۰ به مقدار ۲۰٪ → ۲۰۰ × ۰,۸۰ = ۱۶۰.",
          "ضریب: ۱,۱۵ مربوط به افزایش ۱۵٪ است؛ ۰,۸۰ مربوط به کاهش ۲۰٪.",
        ],
        ti: [
          "ብ p% ምብዛሕ: ብ (1 + p/100) ዘርፍ. ኣብነት: 200 ብ 15% ምብዛሕ → 200 × 1,15 = 230.",
          "ብ p% ምጉዳል: ብ (1 − p/100) ዘርፍ. ኣብነት: 200 ብ 20% ምጉዳል → 200 × 0,80 = 160.",
          "ምዝርፋፍ ዘርፊ: 1,15 15% ምብዛሕ ዘርዕ; 0,80 20% ምጉዳል ዘርዕ.",
        ],
        uk: [
          "Збільшення на p%: множимо на (1 + p/100). Приклад: збільшити 200 на 15% → 200 × 1,15 = 230.",
          "Зменшення на p%: множимо на (1 − p/100). Приклад: зменшити 200 на 20% → 200 × 0,80 = 160.",
          "Коефіцієнт: 1,15 відповідає збільшенню на 15%; 0,80 — зменшенню на 20%.",
        ],
      },
      blocks: [
        { type: "heading", fr: "Augmentation en pourcentage", black: true },
        { type: "plain", fr: "Augmenter une valeur de **p%** signifie qu'on lui ajoute p% de sa propre valeur. On utilise un **coefficient multiplicateur** supérieur à 1 pour effectuer ce calcul en une seule étape." },
        { type: "rule", titleFr: "Formule — Augmentation", itemsFr: [
          "Nouvelle valeur = valeur initiale × (1 + p/100)",
          "Exemple : +20% sur 80 → 80 × 1,20 = 96",
        ]},
        { type: "plain", fr: "" },
        { type: "heading", fr: "Le coefficient multiplicateur" },
        { type: "section", labelFr: "Comment trouver le coefficient", itemsFr: [
          "Pour une augmentation de **p%** : coefficient = 1 + p/100",
          "Augmentation de 15% → 1 + 0,15 = **1,15**",
          "Augmentation de 5%  → 1 + 0,05 = **1,05**",
          "Augmentation de 100% → 1 + 1,00 = **2,00** (le double)",
        ]},
        { type: "plain", fr: "" },
        { type: "heading", fr: "Exemples de calcul" },
        { type: "example", fr: "+20% sur 80   → 80 × 1,20 = 96" },
        { type: "example", fr: "+15% sur 200  → 200 × 1,15 = 230" },
        { type: "example", fr: "+5% sur 3 200 → 3 200 × 1,05 = 3 360" },
        { type: "plain", fr: "" },
        { type: "table", headersFr: ["Augmentation", "Coefficient", "Exemple (base 100)"], accentHeader: true,
          rows: [
            ["+5%", "× 1,05", "100 → 105"],
            ["+10%", "× 1,10", "100 → 110"],
            ["+15%", "× 1,15", "100 → 115"],
            ["+20%", "× 1,20", "100 → 120"],
            ["+50%", "× 1,50", "100 → 150"],
          ]
        },
        { type: "note", fr: "Astuce : calculer d'abord le montant de l'augmentation (p% de la valeur), puis l'ajouter à la valeur initiale. Les deux méthodes donnent le même résultat." },
      ],
    },
    exercises: [
      { id: "a6-4-e1", promptFr: "Augmentez 200 de 15%.", type: "number", acceptable: ["230"] },
      { id: "a6-4-e2", promptFr: "Diminuez 200 de 20%.", type: "number", acceptable: ["160"] },
      { id: "a6-4-e3", promptFr: "Un article coûte 80 CHF. Réduction de 25%. Nouveau prix ?", type: "number", acceptable: ["60"] },
      { id: "a6-4-e4", promptFr: "Salaire de 3 200 CHF augmenté de 5%. Nouveau salaire ?", type: "number", acceptable: ["3360"] },
      { id: "a6-4-e5", promptFr: "Prix de 150 CHF avec une réduction de 10%. Prix final ?", type: "number", acceptable: ["135"] },
    ],
  };
