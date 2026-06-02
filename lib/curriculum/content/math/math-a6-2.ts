import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A6_2_LESSON: MathSubmoduleLesson = {
    submoduleId: "A6-2",
    submoduleCode: "A6.2",
    theory: {
      title: { fr: "Pourcentage d'un nombre", en: "Percentage of a number", ar: "نسبة مئوية من عدد", fa: "درصدی از یک عدد", ti: "ቁጽሪ ናይ ሚእቲ ክፋል", uk: "Відсоток від числа" },
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
        { type: "heading", fr: "Calculer un pourcentage d'une quantité", black: true },
        { type: "plain", fr: "Pour trouver **p%** d'un nombre N, on multiplie ce nombre par le pourcentage converti en décimal. C'est l'une des opérations les plus utiles de la vie quotidienne : promotions, taxes, intérêts..." },
        { type: "rule", titleFr: "Formule", itemsFr: [
          "**p% de N**  =  N × p ÷ 100",
          "Équivalent : N × (p/100)   ou   N × 0,0p",
        ]},
        { type: "plain", fr: "" },
        { type: "heading", fr: "Méthode pas à pas" },
        { type: "section", labelFr: "Étapes", itemsFr: [
          "**Étape 1** — Convertir le pourcentage en décimal : diviser par 100",
          "**Étape 2** — Multiplier le nombre par ce décimal",
        ]},
        { type: "example", fr: "20% de 150 → 20 ÷ 100 = 0,20 → 150 × 0,20 = 30" },
        { type: "example", fr: "15% de 80  → 15 ÷ 100 = 0,15 → 80 × 0,15 = 12" },
        { type: "example", fr: "5% de 60   → 5 ÷ 100 = 0,05 → 60 × 0,05 = 3" },
        { type: "plain", fr: "" },
        { type: "heading", fr: "Astuces de calcul mental" },
        { type: "bullets", labelFr: "Raccourcis utiles", itemsFr: [
          "**10%** d'un nombre → diviser par 10",
          "**5%** d'un nombre → prendre 10%, puis diviser par 2",
          "**25%** d'un nombre → diviser par 4",
          "**50%** d'un nombre → diviser par 2",
          "**1%** d'un nombre → diviser par 100",
        ]},
        { type: "plain", fr: "" },
        { type: "table", headersFr: ["Calcul", "Astuce rapide", "Résultat"], accentHeader: true,
          rows: [
            ["10% de 340", "340 ÷ 10", "34"],
            ["5% de 340", "34 ÷ 2", "17"],
            ["25% de 200", "200 ÷ 4", "50"],
            ["50% de 80", "80 ÷ 2", "40"],
            ["20% de 150", "150 × 0,20", "30"],
          ]
        },
        { type: "note", fr: "Vérification : si le pourcentage est inférieur à 100%, le résultat doit toujours être plus petit que le nombre de départ." },
      ],
    },
    exercises: [
      { id: "a6-2-e1", promptFr: "Calculez 20% de 150.", type: "number", acceptable: ["30"] },
      { id: "a6-2-e2", promptFr: "Calculez 15% de 80.", type: "number", acceptable: ["12"] },
      { id: "a6-2-e3", promptFr: "Calculez 25% de 200.", type: "number", acceptable: ["50"] },
      { id: "a6-2-e4", promptFr: "Calculez 10% de 340.", type: "number", acceptable: ["34"] },
      { id: "a6-2-e5", promptFr: "Calculez 5% de 60.", type: "number", acceptable: ["3"] },
    ],
  };
