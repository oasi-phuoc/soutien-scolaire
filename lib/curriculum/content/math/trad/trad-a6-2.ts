import type { SubmoduleTrad } from "./trad-types";

export const TRAD_A6_2: SubmoduleTrad = {
  submoduleId: "A6-2",
  title: {
    fr: "Pourcentage d'un nombre",
    en: "Percentage of a number",
    ar: "نسبة مئوية من عدد",
    fa: "درصدی از یک عدد",
    ti: "ቁጽሪ ናይ ሚእቲ ክፋል",
    uk: "Відсоток від числа",
  },
  paragraphs: {
    fr: [
          "Pour calculer p% d'un nombre N, on multiplie N par p/100 (ou par le décimal équivalent).",
          "Formule : p% de N = N × p/100 = N × (p ÷ 100).",
          "Exemples : 20% de 150 = 150 × 20/100 = 150 × 0,2 = 30. 15% de 80 = 80 × 0,15 = 12.",
        ],
    en: [
          "To calculate p% of a number N, multiply N by p/100 (or by the decimal equivalent).",
          "Formula: p% of N = N × p/100 = N × (p ÷ 100).",
          "Examples: 20% of 150 = 150 × 0.2 = 30. 15% of 80 = 80 × 0.15 = 12.",
        ],
    ar: [
          "لحساب ص% من عدد ن، نضرب ن في ص/100 (أو في المكافئ العشري).",
          "الصيغة: ص% من ن = ن × ص/100.",
          "أمثلة: 20% من 150 = 150 × 0,2 = 30. 15% من 80 = 80 × 0,15 = 12.",
        ],
    fa: [
          "برای محاسبه p٪ از عدد N، عدد N را در p/100 ضرب کنید.",
          "فرمول: p٪ از N = N × p/100.",
          "مثال‌ها: ۲۰٪ از ۱۵۰ = ۱۵۰ × ۰,۲ = ۳۰. ۱۵٪ از ۸۰ = ۸۰ × ۰,۱۵ = ۱۲.",
        ],
    ti: [
          "ናይ ሓደ ቁጽሪ N p% ምሕሳብ N ብ p/100 ምዝርፋፍ ማለት እዩ።",
          "ቅጥዒ: p% ናይ N = N × p/100.",
          "ኣብነት: 20% ናይ 150 = 150 × 0,2 = 30. 15% ናይ 80 = 80 × 0,15 = 12.",
        ],
    uk: [
          "Щоб обчислити p% від числа N, множимо N на p/100.",
          "Формула: p% від N = N × p/100.",
          "Приклади: 20% від 150 = 150 × 0,2 = 30. 15% від 80 = 80 × 0,15 = 12.",
        ],
  },
  blocks: [
    {
      text: {
        fr: "Calculer un pourcentage d'une quantité",
      }
    },
    {
      text: {
        fr: "Pour trouver **p%** d'un nombre N, on multiplie ce nombre par le pourcentage converti en décimal. C'est l'une des opérations les plus utiles de la vie quotidienne : promotions, taxes, intérêts...",
      }
    },
    {
      text: {
        fr: "Formule",
      },
      items: {
        fr: [
          "**p% de N**  =  N × p ÷ 100",
          "Équivalent : N × (p/100)   ou   N × 0,0p",
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
        fr: "Méthode pas à pas",
      }
    },
    {
      label: {
        fr: "Étapes",
      },
      items: {
        fr: [
          "**Étape 1** — Convertir le pourcentage en décimal : diviser par 100",
          "**Étape 2** — Multiplier le nombre par ce décimal",
        ],
      }
    },
    {
      text: {
        fr: "20% de 150 → 20 ÷ 100 = 0,20 → 150 × 0,20 = 30",
      }
    },
    {
      text: {
        fr: "15% de 80  → 15 ÷ 100 = 0,15 → 80 × 0,15 = 12",
      }
    },
    {
      text: {
        fr: "5% de 60   → 5 ÷ 100 = 0,05 → 60 × 0,05 = 3",
      }
    },
    {
      text: {
        fr: "",
      }
    },
    {
      text: {
        fr: "Astuces de calcul mental",
      }
    },
    {
      label: {
        fr: "Raccourcis utiles",
      },
      items: {
        fr: [
          "**10%** d'un nombre → diviser par 10",
          "**5%** d'un nombre → prendre 10%, puis diviser par 2",
          "**25%** d'un nombre → diviser par 4",
          "**50%** d'un nombre → diviser par 2",
          "**1%** d'un nombre → diviser par 100",
        ],
      }
    },
    {
      text: {
        fr: "",
      }
    },
    {
      headers: {
        fr: ["Calcul", "Astuce rapide", "Résultat"],
      }
    },
    {
      text: {
        fr: "Vérification : si le pourcentage est inférieur à 100%, le résultat doit toujours être plus petit que le nombre de départ.",
      }
    },
  ],
};
