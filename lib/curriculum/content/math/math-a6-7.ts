import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A6_7_LESSON: MathSubmoduleLesson = {
  submoduleId: "A6-7",
  submoduleCode: "A6.7",
  theory: {
    title: { fr: "Échelles", en: "Scales", ar: "المقاييس", fa: "مقیاس‌ها", ti: "ሜዛን", uk: "Масштаби" },
    paragraphs: {
      fr: [
        "Une échelle est un rapport entre la dimension sur le plan (ou la carte) et la dimension réelle. Échelle 1:1000 signifie que 1 cm sur le plan représente 1000 cm = 10 m en réalité.",
        "Distance réelle = distance sur le plan × dénominateur de l'échelle.",
        "Distance sur le plan = distance réelle / dénominateur de l'échelle.",
        "Exemple : sur un plan à l'échelle 1:500, un couloir mesure 3,4 cm. Distance réelle : 3,4 × 500 = 1 700 cm = 17 m.",
      ],
      en: [
        "A scale is a ratio between the dimension on the plan and the real dimension. Scale 1:1000 means 1 cm on the plan represents 1000 cm = 10 m in reality.",
        "Real distance = map distance × scale denominator.",
        "Map distance = real distance ÷ scale denominator.",
        "Example: on a 1:500 scale plan, a corridor is 3.4 cm. Real distance: 3.4 × 500 = 1 700 cm = 17 m.",
      ],
      ar: [
        "المقياس هو نسبة بين البُعد على الخريطة والبُعد الحقيقي. مقياس 1:1000 يعني أن 1 سم على الخريطة يمثل 1000 سم = 10 م في الواقع.",
        "المسافة الحقيقية = المسافة على الخريطة × مقام المقياس.",
        "المسافة على الخريطة = المسافة الحقيقية ÷ مقام المقياس.",
        "مثال: على مخطط بمقياس 1:500، يبلغ ممر 3,4 سم. المسافة الحقيقية: 3,4 × 500 = 1 700 سم = 17 م.",
      ],
      fa: [
        "مقیاس نسبتی است بین اندازه روی نقشه و اندازه واقعی. مقیاس ۱:۱۰۰۰ یعنی ۱ سانتیمتر روی نقشه نشان‌دهنده ۱۰۰۰ سانتیمتر = ۱۰ متر در واقعیت است.",
        "فاصله واقعی = فاصله روی نقشه × مخرج مقیاس.",
        "فاصله روی نقشه = فاصله واقعی ÷ مخرج مقیاس.",
        "مثال: در نقشه‌ای با مقیاس ۱:۵۰۰، یک راهرو ۳,۴ سانتیمتر است. فاصله واقعی: ۳,۴ × ۵۰۰ = ۱۷۰۰ سانتیمتر = ۱۷ متر.",
      ],
      ti: [
        "ሜዛን ናይ ፕላን ቁጽሪ ምስ ናይ ሓቂ ቁጽሪ ጥምርናቶም እዩ። ሜዛን 1:1000 1 ሳ.ሜ. ናይ ፕላን 1000 ሳ.ሜ. = 10 ሜ. ሓቂ ዘርዕ ማለት እዩ።",
        "ሓቂ ምርቀት = ፕላን ምርቀት × ናይ ሜዛን ሚዛን ቁጽሪ.",
        "ፕላን ምርቀት = ሓቂ ምርቀት ÷ ናይ ሜዛን ሚዛን ቁጽሪ.",
        "ኣብነት: ፕላን ናይ 1:500 ሜዛን ቆፎ 3,4 ሳ.ሜ. ዘለዎ ሓቂ ምርቀት: 3,4 × 500 = 1 700 ሳ.ሜ. = 17 ሜ.",
      ],
      uk: [
        "Масштаб — це відношення розміру на плані до реального розміру. Масштаб 1:1000 означає, що 1 см на плані відповідає 1000 см = 10 м у реальності.",
        "Реальна відстань = відстань на плані × знаменник масштабу.",
        "Відстань на плані = реальна відстань ÷ знаменник масштабу.",
        "Приклад: на плані 1:500 коридор 3,4 см. Реальна відстань: 3,4 × 500 = 1 700 см = 17 м.",
      ],
    },
    blocks: [
      { type: "heading", fr: "Problèmes mixtes de pourcentage", black: true },
      { type: "plain", fr: "Dans la vie quotidienne, les problèmes de pourcentage combinent souvent plusieurs opérations : calculer un pourcentage, exprimer une partie en %, appliquer une augmentation ou une réduction. Il faut identifier quelle opération utiliser." },
      { type: "plain", fr: "" },
      { type: "heading", fr: "Les 4 types de problèmes" },
      { type: "table", headersFr: ["Type de problème", "Formule", "Exemple"], accentHeader: true,
        rows: [
          ["Calculer p% d'une quantité", "N × p ÷ 100", "20% de 150 = 30"],
          ["Exprimer une partie en %", "(partie ÷ total) × 100", "30 sur 120 = 25%"],
          ["Augmenter de p%", "N × (1 + p/100)", "+15% sur 200 = 230"],
          ["Réduire de p%", "N × (1 − p/100)", "−20% sur 200 = 160"],
        ]
      },
      { type: "plain", fr: "" },
      { type: "heading", fr: "Problème combiné : étapes à suivre" },
      { type: "section", labelFr: "Méthode générale", itemsFr: [
        "**Étape 1** — Lire attentivement l'énoncé et identifier ce qu'on cherche",
        "**Étape 2** — Choisir la bonne formule (calcul, expression, augmentation ou réduction)",
        "**Étape 3** — Effectuer le calcul",
        "**Étape 4** — Vérifier que la réponse est cohérente (unité, ordre de grandeur)",
      ]},
      { type: "plain", fr: "" },
      { type: "heading", fr: "Exemples pratiques" },
      { type: "example", fr: "Article à 80 CHF soldé −25%, puis −10% supplémentaires :\n1er solde : 80 × 0,75 = 60 CHF\nSolde final : 60 × 0,90 = 54 CHF" },
      { type: "example", fr: "Salaire de 2 400 CHF augmenté de 5% :\nAugmentation : 2 400 × 0,05 = 120 CHF\nNouveau salaire : 2 400 × 1,05 = 2 520 CHF" },
      { type: "plain", fr: "" },
      { type: "bullets", labelFr: "Erreurs fréquentes à éviter", itemsFr: [
        "Confondre « p% de N » et « exprimer N en % de M »",
        "Additionner deux réductions successives (−20% puis −10% ≠ −30%)",
        "Oublier que le coefficient d'augmentation est > 1 et celui de réduction est < 1",
        "Ne pas vérifier l'unité du résultat (CHF, %, nombre d'élèves...)",
      ]},
      { type: "note", fr: "Deux réductions successives de 20% et 10% donnent : 1 × 0,80 × 0,90 = 0,72, soit une réduction totale de 28%, et non 30%." },
    ],
  },
  exercises: [
    { id: "a6-7-e1", promptFr: "Échelle 1:500. Sur le plan : 3,4 cm. Distance réelle en m ?", type: "number", acceptable: ["17"] },
    { id: "a6-7-e2", promptFr: "Échelle 1:1000. Sur le plan : 5 cm. Distance réelle en m ?", type: "number", acceptable: ["50"] },
    { id: "a6-7-e3", promptFr: "Échelle 1:100. Distance réelle : 8 m = 800 cm. Distance sur le plan en cm ?", type: "number", acceptable: ["8"] },
    { id: "a6-7-e4", promptFr: "Échelle 1:25 000. Sur la carte : 4 cm. Distance réelle en km ?", type: "number", acceptable: ["1"] },
    { id: "a6-7-e5", promptFr: "Quelle est l'unité d'échelle la plus agrandie : 1:10 ou 1:1000 ?", type: "short_text", acceptable: ["1:10"] },
  ],
};
