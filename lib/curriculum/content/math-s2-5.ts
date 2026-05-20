import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_S2_5_LESSON: MathSubmoduleLesson = {
    submoduleId: "S2-5",
    submoduleCode: "S2.5",
    theory: {
      title: {
        fr: "Arbre de probabilité à deux étapes",
        en: "Two-Stage Probability Tree",
        ar: "مخطط الشجرة بمرحلتين",
        fa: "درخت احتمال دو مرحله‌ای",
        ti: "ክልተ-ምዕራፍ ናይ ዕድል ዕጨይቲ",
        uk: "Двоетапне дерево імовірностей",
      },
      paragraphs: {
        fr: [
          "Un arbre de probabilité modélise une expérience en plusieurs étapes. Chaque branche représente un résultat possible à cette étape avec sa probabilité.",
          "Règle du produit : la probabilité d'un chemin (suite de branches) est le produit des probabilités de chaque branche du chemin.",
          "Règle de la somme : si un événement peut se réaliser par plusieurs chemins (incompatibles), sa probabilité est la somme des probabilités de chacun de ces chemins.",
          "Exemple : on lance un dé puis une pièce. P(obtenir 6 ET face) = P(6) × P(face) = 1/6 × 1/2 = 1/12.",
          "Vérification : la somme des probabilités de tous les chemins finaux doit être égale à 1.",
        ],
        en: [
          "A probability tree models a multi-stage experiment. Each branch represents a possible outcome at that stage with its probability.",
          "Product rule: the probability of a path (sequence of branches) is the product of the probabilities on each branch.",
          "Sum rule: if an event can occur via several (mutually exclusive) paths, its probability is the sum of the probabilities of those paths.",
          "Example: roll a die then flip a coin. P(6 AND heads) = 1/6 × 1/2 = 1/12.",
          "Check: the probabilities of all final paths must sum to 1.",
        ],
        ar: [
          "مخطط الشجرة يُنمذج تجربة متعددة المراحل. كل فرع يمثل نتيجة ممكنة في تلك المرحلة مع احتمالها.",
          "قاعدة الضرب: احتمال مسار (تسلسل فروع) = حاصل ضرب احتمالات كل فرع.",
          "قاعدة الجمع: إذا تحققت حادثة بعدة مسارات (متنافية) فاحتمالها = مجموع احتمالات تلك المسارات.",
          "مثال: رمي نرد ثم قلب عملة. P(6 و صورة) = 1/6 × 1/2 = 1/12.",
          "التحقق: مجموع احتمالات جميع المسارات النهائية = 1.",
        ],
        fa: [
          "درخت احتمال یک آزمایش چندمرحله‌ای را مدل می‌کند. هر شاخه یک نتیجه ممکن در آن مرحله با احتمالش را نشان می‌دهد.",
          "قانون ضرب: احتمال یک مسیر (دنباله‌ای از شاخه‌ها) برابر حاصل‌ضرب احتمال‌های هر شاخه است.",
          "قانون جمع: اگر یک رویداد از چند مسیر (ناسازگار) قابل تحقق باشد، احتمالش برابر مجموع احتمال‌های آن مسیرها است.",
          "مثال: انداختن تاس سپس سکه. P(۶ و شیر) = ۱/۶ × ۱/۲ = ۱/۱۲.",
          "بررسی: مجموع احتمال‌های همه مسیرهای نهایی باید برابر ۱ باشد.",
        ],
        ti: [
          "ናይ ዕድል ዕጨይቲ ናይ ብዙሕ-ምዕራፍ ፈተነ ሞዴል ይገብር። ነፍሲ ወከፍ ቅርንጫፍ ኣብቲ ምዕራፍ ዝካኣል ውጽኢት ምስ ዕድሉ ይሕብር።",
          "ሕጊ ናይ ማባዛሕ: ናይ ሓደ ምዕዳዊ (ዘዋሃሃዱ ቅርናጫፋት) ዕድሉ = ናይ ነፍሲ ወከፍ ቅርንጫፍ ዕድሎም ማባዛሕ እዩ።",
          "ሕጊ ናይ ድምር: ፍጻሜ ብብዙሕ (ዘይጸጋዓፍ) ምዕዳዊ ዝካኣል ምስ ዝኾን ዕድሉ ናይ ምዕዳዊ ዕድሎም ድምር እዩ።",
          "ኣብነት: ቀለዓ ድሕሪ ሳንቲም ምድርባይ. P(6 ን ርእሲ) = 1/6 × 1/2 = 1/12.",
          "ምምርምር: ናይ ዘለው ናይ መጨረሻ ምዕዳዊ ዕድሎም ድምር = 1 ክኸውን ኣለዎ።",
        ],
        uk: [
          "Дерево імовірностей моделює багатоетапний дослід. Кожна гілка представляє можливий результат на цьому етапі з його імовірністю.",
          "Правило добутку: імовірність шляху (послідовності гілок) — це добуток імовірностей кожної гілки.",
          "Правило суми: якщо подія може відбутися кількома (несумісними) шляхами, її імовірність — сума імовірностей цих шляхів.",
          "Приклад: кидаємо кубик, потім монету. P(6 І орел) = 1/6 × 1/2 = 1/12.",
          "Перевірка: сума імовірностей усіх кінцевих шляхів має дорівнювати 1.",
        ],
      },
    },
    exercises: [
      {
        id: "s2-5-e1",
        promptFr: "On lance deux pièces équilibrées. Quelle est la probabilité d'obtenir deux fois face ?",
        type: "short_text",
        acceptable: ["1/4", "0,25", "0.25"],
      },
      {
        id: "s2-5-e2",
        promptFr: "On lance un dé puis une pièce. Quelle est la probabilité d'obtenir un 6 ET pile ?",
        type: "short_text",
        acceptable: ["1/12"],
      },
      {
        id: "s2-5-e3",
        promptFr: "Avec deux pièces équilibrées, quelle est la probabilité d'obtenir exactement une face (une face et un pile) ?",
        type: "short_text",
        acceptable: ["1/2", "2/4", "0,5", "0.5"],
      },
      {
        id: "s2-5-e4",
        promptFr: "Dans un arbre à deux étapes, toutes les probabilités des chemins finaux sont : 1/6, 2/6, 1/6, 2/6. Quelle est leur somme ?",
        type: "number",
        acceptable: ["1"],
      },
      {
        id: "s2-5-e5",
        promptFr: "On tire deux fois une bille d'un sac (avec remise) qui contient 3 rouges et 7 bleues. Quelle est la probabilité d'obtenir deux billes rouges ?",
        type: "short_text",
        acceptable: ["9/100", "0,09", "0.09"],
      },
    ],
  };
