import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A2_3_LESSON: MathSubmoduleLesson = {
    submoduleId: "A2-3",
    submoduleCode: "A2.3",
    theory: {
      title: {
        fr: "Estimation et arrondi",
        en: "Estimation and rounding",
        ar: "التقدير والتقريب",
        fa: "تخمین و گرد کردن",
        ti: "ቅምሻ ምግምጋም",
        uk: "Оцінювання та округлення",
      },
      blocks: [
        { type: "plain", fr: "L'**arrondi** consiste à remplacer un nombre par un nombre « proche » mais plus simple. On arrondit à la dizaine, centaine ou millier le plus proche.", pivot: { en: "Rounding replaces a number with a nearby simpler number. We round to the nearest ten, hundred or thousand.", ar: "التقريب يستبدل عددًا بعدد قريب وأبسط منه. نقرّب إلى أقرب عشرة أو مئة أو ألف.", fa: "گرد کردن یعنی جایگزینی عدد با یک عدد نزدیک ساده‌تر.", uk: "Округлення замінює число близьким простим числом." } },
        { type: "rule", titleFr: "Règle d'arrondi", itemsFr: [
          "Regarde le chiffre qui suit la position d'arrondi.",
          "Si ce chiffre est **≥ 5** → arrondi vers le **haut** (augmente d'1).",
          "Si ce chiffre est **< 5** → arrondi vers le **bas** (reste tel quel).",
        ], pivot: { en: { title: "Rounding rule", items: ["Look at the digit after the rounding position.", "If ≥ 5 → round UP (increase by 1).", "If < 5 → round DOWN (stays the same)."] } } },
        { type: "table", headersFr: ["Nombre", "Arrondi à la centaine", "Pourquoi ?"], rows: [
          ["347", "300", "chiffre des dizaines = 4 < 5 → vers le bas"],
          ["850", "900", "chiffre des dizaines = 5 ≥ 5 → vers le haut"],
          ["4 682", "4 700", "chiffre des dizaines = 8 ≥ 5 → vers le haut"],
          ["1 230", "1 200", "chiffre des dizaines = 3 < 5 → vers le bas"],
        ] },
        { type: "example", fr: "Estimation de 348 + 276 : arrondir à la centaine → 300 + 300 = 600 (résultat exact : 624)", pivot: { en: "Estimate 348 + 276: round to hundred → 300 + 300 = 600 (exact: 624)" } },
      ],
      paragraphs: {
        fr: [
          "L'arrondi permet de simplifier un calcul en remplaçant un nombre par un nombre « proche » mais plus simple. On arrondit souvent à la dizaine, à la centaine ou au millier le plus proche.",
          "Règle : si le chiffre suivant (celui qu'on supprime) est ≥ 5, on arrondit vers le haut. S'il est < 5, on arrondit vers le bas. Exemples : 347 arrondi à la centaine → 300 (car 4 < 5). 850 arrondi à la centaine → 900 (car 5 ≥ 5).",
          "L'estimation consiste à trouver un résultat approximatif avant de calculer exactement. On commence par arrondir chaque nombre, puis on calcule. Exemple : 348 + 276 ≈ 350 + 280 = 630 (résultat exact : 624).",
          "L'estimation est utile pour vérifier rapidement si une réponse est plausible.",
        ],
        en: [
          "Rounding simplifies a calculation by replacing a number with a nearby round number. We often round to the nearest ten, hundred, or thousand.",
          "Rule: if the next digit is ≥ 5, round up; if < 5, round down. Examples: 347 to hundred → 300. 850 to hundred → 900.",
          "Estimation means finding an approximate result before calculating exactly. Round each number first, then calculate.",
          "Estimation is useful for quickly checking if an answer is reasonable.",
        ],
        ar: [
          "التقريب يبسّط الحساب باستبدال عدد بعدد قريب منه وأسهل. نقرّب عادةً إلى أقرب عشرة أو مئة أو ألف.",
          "القاعدة: إذا كان الرقم التالي ≥ 5 نقرّب للأعلى، وإذا كان < 5 نقرّب للأسفل.",
          "التقدير يعني إيجاد نتيجة تقريبية قبل الحساب الدقيق.",
          "التقدير مفيد للتحقق السريع من معقولية الإجابة.",
        ],
        fa: [
          "گرد کردن محاسبه را با جایگزین کردن یک عدد با یک عدد نزدیک ساده‌تر می‌کند.",
          "قانون: اگر رقم بعدی ≥ ۵ باشد، به بالا گرد کنید. اگر < ۵ باشد، به پایین.",
          "تخمین یعنی یافتن نتیجه‌ای تقریبی پیش از محاسبه دقیق.",
          "تخمین برای بررسی سریع معقول بودن پاسخ مفید است.",
        ],
        ti: [
          "ምልካዕ ናይ ቁጽሪ ምቅርራብ ናብ ቀረቡ ቀሊል ቁጽሪ ናይ ሕሳብ ቅምሻ ይሰርሕ።",
          "ሕጊ: ዝቕጽል ቁጽሪ ≥ 5 → ዓቢ ምልካዕ። < 5 → ንታሕቲ ምልካዕ።",
          "ቅምሻ ቅድሚ ትኽክለኛ ሕሳብ ምሕሳብ ናይ ቅምሻ ናይ ሕሳብ ምኩናን ምርካብ ማለት እዩ።",
          "ቅምሻ ናይ ምምርምር ቅዱስ ምዃን ናይ ምላሽ ቅልጡፍ ምርጋጸ ጠቃሚ እዩ።",
        ],
        uk: [
          "Округлення спрощує обчислення, замінюючи число близьким круглим числом.",
          "Правило: якщо наступна цифра ≥ 5 — округляємо вгору; якщо < 5 — вниз.",
          "Оцінювання — це знаходження наближеного результату перед точним обчисленням.",
          "Оцінювання корисне для швидкої перевірки правдоподібності відповіді.",
        ],
      },
    },
    exercises: [
      { id: "a2-3-e1", promptFr: "Arrondissez 347 à la centaine la plus proche.",  type: "number", acceptable: ["300"] },
      { id: "a2-3-e2", promptFr: "Arrondissez 850 à la centaine la plus proche.",  type: "number", acceptable: ["900"] },
      { id: "a2-3-e3", promptFr: "Arrondissez 4 682 au millier le plus proche.",   type: "number", acceptable: ["5000"] },
      { id: "a2-3-e4", promptFr: "Estimez 348 + 276 en arrondissant à la centaine.", type: "number", acceptable: ["600", "630"] },
      { id: "a2-3-e5", promptFr: "Arrondissez 73 à la dizaine la plus proche.",    type: "number", acceptable: ["70"] },
    ],
    exercisePool: [
      { id: "a23-p1",  promptFr: "Arrondissez 347 à la centaine.",   type: "number", acceptable: ["300"] },
      { id: "a23-p2",  promptFr: "Arrondissez 850 à la centaine.",   type: "number", acceptable: ["900"] },
      { id: "a23-p3",  promptFr: "Arrondissez 4 682 au millier.",    type: "number", acceptable: ["5000"] },
      { id: "a23-p4",  promptFr: "Arrondissez 73 à la dizaine.",     type: "number", acceptable: ["70"] },
      { id: "a23-p5",  promptFr: "Arrondissez 456 à la centaine.",   type: "number", acceptable: ["500"] },
      { id: "a23-p6",  promptFr: "Arrondissez 1 230 à la centaine.", type: "number", acceptable: ["1200"] },
      { id: "a23-p7",  promptFr: "Arrondissez 2 750 au millier.",    type: "number", acceptable: ["3000"] },
      { id: "a23-p8",  promptFr: "Arrondissez 99 à la dizaine.",     type: "number", acceptable: ["100"] },
      { id: "a23-p9",  promptFr: "Arrondissez 7 499 au millier.",    type: "number", acceptable: ["7000"] },
      { id: "a23-p10", promptFr: "Arrondissez 8 500 au millier.",    type: "number", acceptable: ["9000"] },
      { id: "a23-p11", promptFr: "Arrondissez 635 à la dizaine.",    type: "number", acceptable: ["640"] },
      { id: "a23-p12", promptFr: "Arrondissez 3 452 au millier.",    type: "number", acceptable: ["3000"] },
    ],
    poolSize: 5,
  };
