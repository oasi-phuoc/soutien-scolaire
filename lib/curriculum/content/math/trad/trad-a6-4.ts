import type { SubmoduleTrad } from "./trad-types";

export const TRAD_A6_4: SubmoduleTrad = {
  submoduleId: "A6-4",
  title: {
    fr: "Augmentation",
    en: "Increase",
    ar: "الزيادة بنسبة %",
    fa: "افزایش درصدی",
    ti: "ምብዛሕ ናይ %",
    uk: "Збільшення на %",
  },
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
    {
      text: {
        fr: "Augmentation en pourcentage",
      }
    },
    {
      text: {
        fr: "Augmenter une valeur de **p%** signifie qu'on lui ajoute p% de sa propre valeur. On utilise un **coefficient multiplicateur** supérieur à 1 pour effectuer ce calcul en une seule étape.",
      }
    },
    {
      text: {
        fr: "Formule — Augmentation",
      },
      items: {
        fr: [
          "Nouvelle valeur = valeur initiale × (1 + p/100)",
          "Exemple : +20% sur 80 → 80 × 1,20 = 96",
        ],
      }
    },
    {
      text: {
        fr: "",
      }
    },
    {
      text: {
        fr: "Le coefficient multiplicateur",
      }
    },
    {
      label: {
        fr: "Comment trouver le coefficient",
      },
      items: {
        fr: [
          "Pour une augmentation de **p%** : coefficient = 1 + p/100",
          "Augmentation de 15% → 1 + 0,15 = **1,15**",
          "Augmentation de 5%  → 1 + 0,05 = **1,05**",
          "Augmentation de 100% → 1 + 1,00 = **2,00** (le double)",
        ],
      }
    },
    {
      text: {
        fr: "",
      }
    },
    {
      text: {
        fr: "Exemples de calcul",
      }
    },
    {
      text: {
        fr: "+20% sur 80   → 80 × 1,20 = 96",
      }
    },
    {
      text: {
        fr: "+15% sur 200  → 200 × 1,15 = 230",
      }
    },
    {
      text: {
        fr: "+5% sur 3 200 → 3 200 × 1,05 = 3 360",
      }
    },
    {
      text: {
        fr: "",
      }
    },
    {
      headers: {
        fr: ["Augmentation", "Coefficient", "Exemple (base 100)"],
      }
    },
    {
      text: {
        fr: "Astuce : calculer d'abord le montant de l'augmentation (p% de la valeur), puis l'ajouter à la valeur initiale. Les deux méthodes donnent le même résultat.",
      }
    },
  ],
};
