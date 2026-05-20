import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_G10_4_LESSON: MathSubmoduleLesson = {
    submoduleId: "G10-4",
    submoduleCode: "G10.4",
    theory: {
      title: {
        fr: "Angle à partir du rapport",
        en: "Finding an Angle from a Ratio",
        ar: "إيجاد الزاوية من النسبة",
        fa: "یافتن زاویه از نسبت",
        ti: "ካብ ዝምድና ማእዘን ምርካብ",
        uk: "Знаходження кута за відношенням",
      },
      paragraphs: {
        fr: [
          "Si tu connais un rapport trigonométrique (sin, cos ou tan), tu peux retrouver l'angle correspondant grâce aux fonctions inverses.",
          "Fonctions inverses : arcsin (sin⁻¹), arccos (cos⁻¹), arctan (tan⁻¹). Sur la calculatrice, appuie sur [2nd] ou [SHIFT] puis sur sin, cos ou tan.",
          "Exemple : sin(α) = 0,6 → α = arcsin(0,6) ≈ 36,9°. Vérifie que ta calculatrice est en mode degrés (DEG).",
          "Remarque importante : dans un triangle, la somme des angles est 180°. Donc si tu trouves un angle aigu α, l'autre angle aigu vaut 90° − α.",
          "Angles courants à mémoriser : sin(30°) = 0,5 · cos(30°) = √3/2 ≈ 0,866 · tan(45°) = 1 · sin(60°) = √3/2.",
        ],
        en: [
          "If you know a trigonometric ratio (sin, cos or tan), you can find the corresponding angle using inverse functions.",
          "Inverse functions: arcsin (sin⁻¹), arccos (cos⁻¹), arctan (tan⁻¹). On a calculator, press [2nd] or [SHIFT] then sin, cos or tan.",
          "Example: sin(α) = 0.6 → α = arcsin(0.6) ≈ 36.9°. Make sure your calculator is in degree mode (DEG).",
          "Important note: in a triangle, the angle sum is 180°. So if you find an acute angle α, the other acute angle is 90° − α.",
          "Common values to memorise: sin(30°) = 0.5 · cos(30°) = √3/2 ≈ 0.866 · tan(45°) = 1 · sin(60°) = √3/2.",
        ],
        ar: [
          "إذا عرفت نسبة مثلثية (جيب أو جيب تمام أو ظل)، تستطيع إيجاد الزاوية باستخدام الدوال العكسية.",
          "الدوال العكسية: arcsin، arccos، arctan. في الآلة الحاسبة اضغط [2nd] أو [SHIFT] ثم sin أو cos أو tan.",
          "مثال: sin(α) = 0,6 → α = arcsin(0,6) ≈ 36,9°. تأكد أن الآلة في وضع الدرجات.",
          "ملاحظة: مجموع زوايا المثلث 180°، فإذا وجدت α فالزاوية الأخرى = 90° − α.",
          "قيم شائعة: sin(30°) = 0,5 · tan(45°) = 1 · sin(60°) = √3/2.",
        ],
        fa: [
          "اگر یک نسبت مثلثاتی بدانی، می‌توانی زاویه را با توابع معکوس بیابی.",
          "توابع معکوس: arcsin، arccos، arctan. در ماشین حساب کلید [2nd] یا [SHIFT] سپس sin یا cos یا tan را فشار دهید.",
          "مثال: sin(α) = 0.6 → α = arcsin(0.6) ≈ 36.9°. مطمئن شو ماشین حساب در حالت درجه (DEG) است.",
          "نکته: مجموع زوایای مثلث ۱۸۰° است. پس زاویه دیگر = 90° − α.",
          "مقادیر مهم: sin(30°) = 0.5 · tan(45°) = 1 · sin(60°) = √3/2.",
        ],
        ti: [
          "ናይ ትሪጎኖሜትሪ ዝምድና (ሲን፣ ኮስ፣ ታን) ምስ ዝፈልጥ፣ ብኣንጻር ተርእዮ ማእዘን ትረክብ።",
          "ኣንጻር ተርእዮታት: arcsin፣ arccos፣ arctan። ኣብ ካልኩሌተር [2nd] ወይ [SHIFT] ጸቒጥካ sin ወይ cos ወይ tan ጸቒጥ።",
          "ኣብነት: sin(α) = 0,6 → α = arcsin(0,6) ≈ 36,9°። ካልኩሌተር ኣብ DEG ምዃኑ ኣረጋግጽ።",
          "ምልከታ: ድምር ማእዘናት ሶስተ ሸነኽ = 180°። ካልኣይ ሹቕቡዕ ማእዘን = 90° − α.",
          "ዝዝከሩ ክብርታት: sin(30°) = 0,5 · tan(45°) = 1 · sin(60°) = √3/2.",
        ],
        uk: [
          "Якщо відоме тригонометричне відношення (sin, cos або tan), кут знаходиться за допомогою обернених функцій.",
          "Обернені функції: arcsin, arccos, arctan. На калькуляторі натисни [2nd] або [SHIFT], потім sin, cos або tan.",
          "Приклад: sin(α) = 0,6 → α = arcsin(0,6) ≈ 36,9°. Переконайся, що калькулятор у режимі градусів (DEG).",
          "Важливо: сума кутів трикутника 180°. Тому інший гострий кут = 90° − α.",
          "Значення для запам'ятовування: sin(30°) = 0,5 · tan(45°) = 1 · sin(60°) = √3/2.",
        ],
      },
    },
    exercises: [
      {
        id: "g10-4-e1",
        promptFr: "sin(α) = 0,5. Sans calculatrice, donne la valeur de α en degrés.",
        type: "number",
        acceptable: ["30"],
      },
      {
        id: "g10-4-e2",
        promptFr: "tan(β) = 1. Quelle est la valeur de β en degrés ?",
        type: "number",
        acceptable: ["45"],
      },
      {
        id: "g10-4-e3",
        promptFr: "cos(γ) = 0,5. Quelle est la valeur de γ en degrés ?",
        type: "number",
        acceptable: ["60"],
      },
      {
        id: "g10-4-e4",
        promptFr: "Dans un triangle rectangle, les deux angles aigus sont α et β. Si α = 37°, quelle est la valeur de β ?",
        type: "number",
        acceptable: ["53"],
      },
      {
        id: "g10-4-e5",
        promptFr: "sin(α) = 0,866. Donne la valeur approximative de α (à 1° près).",
        type: "number",
        acceptable: ["60"],
      },
    ],
  };
