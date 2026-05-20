import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_G10_5_LESSON: MathSubmoduleLesson = {
    submoduleId: "G10-5",
    submoduleCode: "G10.5",
    theory: {
      title: {
        fr: "Calculer un côté inconnu",
        en: "Calculating an Unknown Side",
        ar: "حساب ضلع مجهول",
        fa: "محاسبه ضلع مجهول",
        ti: "ዘይፍሉጥ ጎኒ ምሕሳብ",
        uk: "Обчислення невідомої сторони",
      },
      paragraphs: {
        fr: [
          "Si tu connais un angle aigu α et au moins un côté d'un triangle rectangle, tu peux calculer n'importe quel autre côté à l'aide de sin, cos ou tan.",
          "Méthode : écris la formule trigonométrique reliant l'angle connu aux deux côtés (dont l'un est inconnu), puis isole le côté inconnu.",
          "Exemple 1 — chercher l'opposé : sin(30°) = opposé / 10 → opposé = 10 × sin(30°) = 10 × 0,5 = 5.",
          "Exemple 2 — chercher l'adjacent : cos(40°) = adjacent / 8 → adjacent = 8 × cos(40°) ≈ 8 × 0,766 ≈ 6,13.",
          "Exemple 3 — chercher l'hypoténuse : sin(35°) = 6 / hypoténuse → hypoténuse = 6 / sin(35°) ≈ 6 / 0,574 ≈ 10,45.",
        ],
        en: [
          "If you know an acute angle α and at least one side of a right triangle, you can calculate any other side using sin, cos or tan.",
          "Method: write the trigonometric formula connecting the known angle to the two sides (one of which is unknown), then solve for the unknown side.",
          "Example 1 — find the opposite: sin(30°) = opposite / 10 → opposite = 10 × sin(30°) = 10 × 0.5 = 5.",
          "Example 2 — find the adjacent: cos(40°) = adjacent / 8 → adjacent = 8 × cos(40°) ≈ 8 × 0.766 ≈ 6.13.",
          "Example 3 — find the hypotenuse: sin(35°) = 6 / hypotenuse → hypotenuse = 6 / sin(35°) ≈ 6 / 0.574 ≈ 10.45.",
        ],
        ar: [
          "إذا عرفت زاوية حادة α وضلعًا واحدًا على الأقل في مثلث قائم، يمكنك حساب أي ضلع آخر.",
          "الطريقة: اكتب الصيغة المثلثية التي تربط الزاوية المعلومة بالضلعين (أحدهما مجهول)، ثم عزل الضلع المجهول.",
          "مثال 1: sin(30°) = المقابل / 10 → المقابل = 10 × 0,5 = 5.",
          "مثال 2: cos(40°) = المجاور / 8 → المجاور ≈ 6,13.",
          "مثال 3: sin(35°) = 6 / الوتر → الوتر ≈ 10,45.",
        ],
        fa: [
          "اگر یک زاویه تند α و حداقل یک ضلع مثلث قائم‌الزاویه را بدانی، می‌توانی هر ضلع دیگری را محاسبه کنی.",
          "روش: فرمول مثلثاتی که زاویه شناخته‌شده را به دو ضلع (یکی مجهول) ربط می‌دهد بنویس، سپس مجهول را حل کن.",
          "مثال ۱: sin(30°) = مقابل / 10 → مقابل = 5.",
          "مثال ۲: cos(40°) = مجاور / 8 → مجاور ≈ 6.13.",
          "مثال ۳: sin(35°) = 6 / وتر → وتر ≈ 10.45.",
        ],
        ti: [
          "ሹቕቡዕ ማእዘን α ን ሓደ ጎኒ ምስ ዝፈልጥ፣ ካልእ ጎናታት ብsin፣ cos ወይ tan ትሕስቦ።",
          "መገዲ: ዝፍለጥ ማእዘን ምስ ክልተ ጎናታት ዝሳናኸሉ ቅጥዒ ጽሓፍ፣ ድሕሪኡ ዘይፍሉጥ ጎኒ ኣውጽኦ።",
          "ኣብነት 1: sin(30°) = ዝተቓወመ / 10 → ዝተቓወመ = 5.",
          "ኣብነት 2: cos(40°) = ዝቀረበ / 8 → ዝቀረበ ≈ 6,13.",
          "ኣብነት 3: sin(35°) = 6 / ሃይፖቴኑስ → ሃይፖቴኑስ ≈ 10,45.",
        ],
        uk: [
          "Якщо відомий гострий кут α і хоча б одна сторона прямокутного трикутника, будь-яку іншу сторону можна знайти через sin, cos або tan.",
          "Метод: запиши тригонометричну формулу, що пов'язує відомий кут із двома сторонами (одна невідома), потім розв'яжи її щодо невідомої.",
          "Приклад 1: sin(30°) = протилежна / 10 → протилежна = 5.",
          "Приклад 2: cos(40°) = прилегла / 8 → прилегла ≈ 6,13.",
          "Приклад 3: sin(35°) = 6 / гіпотенуза → гіпотенуза ≈ 10,45.",
        ],
      },
    },
    exercises: [
      {
        id: "g10-5-e1",
        promptFr: "Dans un triangle rectangle, α = 30° et l'hypoténuse = 10. Calcule le côté opposé à α.",
        type: "number",
        acceptable: ["5"],
      },
      {
        id: "g10-5-e2",
        promptFr: "α = 45° et l'hypoténuse = 14. Calcule le côté adjacent (arrondi à 2 décimales). (cos 45° ≈ 0,707)",
        type: "short_text",
        acceptable: ["9,90", "9.90", "9,9", "9.9"],
      },
      {
        id: "g10-5-e3",
        promptFr: "α = 60° et le côté adjacent = 6. Calcule l'hypoténuse. (cos 60° = 0,5)",
        type: "number",
        acceptable: ["12"],
      },
      {
        id: "g10-5-e4",
        promptFr: "α = 30° et le côté opposé = 4. Calcule l'hypoténuse. (sin 30° = 0,5)",
        type: "number",
        acceptable: ["8"],
      },
      {
        id: "g10-5-e5",
        promptFr: "α = 45° et le côté opposé = 5. Calcule le côté adjacent.",
        type: "number",
        acceptable: ["5"],
      },
    ],
  };
