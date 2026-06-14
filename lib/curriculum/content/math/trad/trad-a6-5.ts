import type { SubmoduleTrad } from "./trad-types";

export const TRAD_A6_5: SubmoduleTrad = {
  submoduleId: "A6-5",
  title: {
    fr: "Réduction",
    en: "Decrease",
    ar: "التخفيض بنسبة %",
    fa: "کاهش درصدی",
    ti: "ምጉዳል ናይ %",
    uk: "Зменшення на %",
  },
  paragraphs: {
    fr: [
          "Deux grandeurs sont proportionnelles si leur rapport est constant. Dans un tableau de proportionnalité, on peut passer d'une ligne à l'autre en multipliant ou divisant par le même nombre (coefficient de proportionnalité).",
          "Exemple : si 3 stylos coûtent 6 CHF, alors 1 stylo coûte 2 CHF (coefficient = 2), et 7 stylos coûtent 14 CHF.",
          "Pour vérifier la proportionnalité : les produits en croix doivent être égaux. Si a/b = c/d, alors a × d = b × c.",
        ],
    en: [
          "Two quantities are proportional if their ratio is constant. In a proportionality table, you can move from one row to another by multiplying or dividing by the same number.",
          "Example: if 3 pens cost 6 CHF, then 1 pen costs 2 CHF (coefficient = 2), and 7 pens cost 14 CHF.",
          "To verify proportionality: cross products must be equal. If a/b = c/d, then a × d = b × c.",
        ],
    ar: [
          "كميتان تتناسبان إذا كانت نسبتهما ثابتة. في جدول التناسب، يمكن الانتقال من سطر لآخر بضرب أو قسمة العدد نفسه.",
          "مثال: إذا كانت 3 أقلام تكلف 6 فرنك، فقلم واحد يكلف 2 فرنك (المعامل = 2)، و7 أقلام تكلف 14 فرنكًا.",
          "للتحقق من التناسب: الضرب الأفقي يجب أن يكون متساويًا. إذا كان a/b = c/d، فـ a × d = b × c.",
        ],
    fa: [
          "دو کمیت متناسبند اگر نسبتشان ثابت باشد. در جدول تناسب می‌توان از یک سطر به سطر دیگر با ضرب یا تقسیم یک عدد ثابت رفت.",
          "مثال: اگر ۳ قلم ۶ فرانک باشد، یک قلم ۲ فرانک است (ضریب = ۲)، و ۷ قلم ۱۴ فرانک.",
          "برای بررسی تناسب: حاصل‌ضرب‌های ضربدری باید برابر باشند. اگر a/b = c/d، پس a × d = b × c.",
        ],
    ti: [
          "ክልተ ዓቐናት ምቅዳድ ናይ ቈጸታኦም ዝተጸበየ ምስ ዝኾነ ምቅዳዳዊ ይብሃሉ። ናይ ምቅዳድ ሰንጠረዥ ሓደ ሰሪ ካብ ካሊኡ ብሓደ ዘርፊ ምስ ምካፋፍ ምቅዳዳዊ ኮይኑ ይቕጽል።",
          "ኣብነት: 3 ቃሊም 6 CHF ዋጋ ዘለዎ እንተኾነ 1 ቃሊም 2 CHF (ዘርፊ = 2) 7 ቃሊም ድማ 14 CHF።",
          "ምቅዳድ ምርጋጸ: ናይ ሳጻሊ ዘርፊ ማዕረ ኣብ ምምጻኡ። a/b = c/d ምስ ዝኾነ a × d = b × c.",
        ],
    uk: [
          "Дві величини пропорційні, якщо їх відношення постійне. У таблиці пропорційності від одного рядка до іншого переходять множенням або діленням на одне й те саме число.",
          "Приклад: якщо 3 ручки коштують 6 CHF, то 1 ручка — 2 CHF (коефіцієнт = 2), а 7 ручок — 14 CHF.",
          "Перевірка пропорційності: добутки навхрест рівні. Якщо a/b = c/d, то a × d = b × c.",
        ],
  },
  blocks: [
    {
      text: {
        fr: "Réduction en pourcentage",
      }
    },
    {
      text: {
        fr: "Réduire une valeur de **p%** signifie qu'on lui soustrait p% de sa propre valeur. On utilise un **coefficient multiplicateur** inférieur à 1 pour effectuer ce calcul en une seule étape.",
      }
    },
    {
      text: {
        fr: "Formule — Réduction",
      },
      items: {
        fr: [
          "Nouvelle valeur = valeur initiale × (1 − p/100)",
          "Exemple : −30% sur 200 → 200 × 0,70 = 140",
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
          "Pour une réduction de **p%** : coefficient = 1 − p/100",
          "Réduction de 20% → 1 − 0,20 = **0,80**",
          "Réduction de 30% → 1 − 0,30 = **0,70**",
          "Réduction de 10% → 1 − 0,10 = **0,90**",
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
        fr: "−30% sur 200 → 200 × 0,70 = 140",
      }
    },
    {
      text: {
        fr: "−20% sur 200 → 200 × 0,80 = 160",
      }
    },
    {
      text: {
        fr: "−25% sur 80  → 80 × 0,75 = 60",
      }
    },
    {
      text: {
        fr: "",
      }
    },
    {
      headers: {
        fr: ["Réduction", "Coefficient", "Exemple (base 200)"],
      }
    },
    {
      text: {
        fr: "",
      }
    },
    {
      text: {
        fr: "Augmentation vs Réduction",
      }
    },
    {
      items: {
        fr: [
          "Augmentation de p% → coefficient **supérieur à 1** (ex: 1,20 pour +20%)",
          "Réduction de p% → coefficient **inférieur à 1** (ex: 0,80 pour −20%)",
        ],
      }
    },
    {
      text: {
        fr: "Une réduction de 20% puis une augmentation de 20% ne redonne PAS la valeur initiale. Exemple : 100 − 20% = 80 ; 80 + 20% = 96 ≠ 100.",
      }
    },
  ],
  consignes: {
    "a6-5-e1": { fr: "Calculez 20% de 250.", en: "Calculate 20% of 250." },
    "a6-5-e2": { fr: "12 élèves sur 40 sont absents. Quel pourcentage ?", en: "12 students out of 40 are absent. What percentage is that?" },
    "a6-5-e3": { fr: "Prix 80 CHF soldé −25%, puis −10%. Prix final ?", en: "Price 80 CHF discounted by −25%, then −10%. Final price?" },
    "a6-5-e4": { fr: "Salaire de 2 400 CHF augmenté de 5%. Nouveau salaire ?", en: "Salary of 2,400 CHF increased by 5%. New salary?" },
    "a6-5-e5": { fr: "Article 120 CHF avec 15% de réduction. Prix payé ?", en: "Item at 120 CHF with a 15% discount. Price paid?" },
  },
};
