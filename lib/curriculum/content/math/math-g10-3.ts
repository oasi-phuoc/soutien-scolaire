import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_G10_3_LESSON: MathSubmoduleLesson = {
    submoduleId: "G10-3",
    submoduleCode: "G10.3",
    theory: {
      title: {
        fr: "Calculer un rapport trigonométrique",
        en: "Calculating a Trigonometric Ratio",
        ar: "حساب نسبة مثلثية",
        fa: "محاسبه یک نسبت مثلثاتی",
        ti: "ናይ ትሪጎኖሜትሪ ዝምድና ምሕሳብ",
        uk: "Обчислення тригонометричного відношення",
      },
      paragraphs: {
        fr: [
          "Pour calculer sin(α), cos(α) ou tan(α), identifie d'abord l'angle α dans le triangle rectangle, puis nomme les trois côtés (opposé, adjacent, hypoténuse).",
          "Étape 1 : repère l'hypoténuse (côté le plus long, face à l'angle droit). Étape 2 : identifie le côté opposé à α et le côté adjacent à α.",
          "Étape 3 : applique la formule choisie. Exemple : si opposé = 5 et hypoténuse = 13, alors sin(α) = 5/13.",
          "Pour obtenir la mesure de l'angle à partir d'un rapport, utilise la fonction inverse : α = arcsin(5/13) sur la calculatrice (touche sin⁻¹ ou asin).",
        ],
        en: [
          "To calculate sin(α), cos(α) or tan(α), first identify angle α in the right triangle, then name the three sides (opposite, adjacent, hypotenuse).",
          "Step 1: locate the hypotenuse (longest side, opposite the right angle). Step 2: identify the side opposite α and the side adjacent to α.",
          "Step 3: apply the chosen formula. Example: if opposite = 5 and hypotenuse = 13, then sin(α) = 5/13.",
          "To find the angle from a ratio, use the inverse function: α = arcsin(5/13) on the calculator (sin⁻¹ or asin key).",
        ],
        ar: [
          "لحساب sin(α) أو cos(α) أو tan(α)، حدِّد أولًا الزاوية α في المثلث القائم، ثم سمِّ الأضلاع الثلاثة.",
          "خطوة 1: حدِّد الوتر. خطوة 2: حدِّد الضلع المقابل والمجاور.",
          "خطوة 3: طبِّق الصيغة. مثال: إذا كان المقابل = 5 والوتر = 13، فإن sin(α) = 5/13.",
          "للحصول على الزاوية من النسبة، استخدم الدالة العكسية sin⁻¹ في الآلة الحاسبة.",
        ],
        fa: [
          "برای محاسبه sin(α) یا cos(α) یا tan(α)، ابتدا زاویه α را در مثلث قائم‌الزاویه تشخیص داده، سپس سه ضلع را نام‌گذاری کن.",
          "گام ۱: وتر (بلندترین ضلع) را بیاب. گام ۲: ضلع مقابل و مجاور α را مشخص کن.",
          "گام ۳: فرمول را به کار ببند. مثال: اگر مقابل = ۵ و وتر = ۱۳ باشد، sin(α) = 5/13.",
          "برای یافتن زاویه از نسبت، از تابع معکوس sin⁻¹ در ماشین حساب استفاده کن.",
        ],
        ti: [
          "ንsin(α)፣ cos(α) ወይ tan(α) ንምሕሳብ፣ ቅድም ማእዘን α ኣብ ማእዘን ቅኑዕ ሶስተ ሸነኽ ኣለሊ፣ ድሕሪኡ ሰለስቲኦም ጎናታት ሰምዮም።",
          "ስጉምቲ 1: ሃይፖቴኑስ ኣለሊ። ስጉምቲ 2: ዝተቓወመን ዝቀረበን ጎኒ ን α ኣለሊ።",
          "ስጉምቲ 3: ዝተመርጸ ቅጥዒ ተጠቐም። ኣብነት: ዝተቓወመ = 5 ሃይፖቴኑስ = 13 ምስ ዝኸውን sin(α) = 5/13.",
          "ካብ ዝምድና ማእዘን ንምርካብ sin⁻¹ ኣብ ካልኩሌተር ተጠቐም።",
        ],
        uk: [
          "Щоб обчислити sin(α), cos(α) або tan(α), спершу визнач кут α у прямокутному трикутнику, потім назви три сторони.",
          "Крок 1: знайди гіпотенузу (найдовша сторона). Крок 2: визнач протилежну та прилеглу до α сторони.",
          "Крок 3: застосуй обрану формулу. Приклад: якщо протилежна = 5, гіпотенуза = 13, то sin(α) = 5/13.",
          "Щоб знайти кут за відношенням, скористайся оберненою функцією sin⁻¹ на калькуляторі.",
        ],
      },
    },
    exercises: [
      {
        id: "g10-3-e1",
        promptFr: "Dans un triangle rectangle, le côté adjacent à α mesure 12 et l'hypoténuse mesure 13. Calcule cos(α) sous forme de fraction.",
        type: "short_text",
        acceptable: ["12/13"],
      },
      {
        id: "g10-3-e2",
        promptFr: "Le côté opposé à β mesure 8 et l'hypoténuse mesure 17. Calcule sin(β) sous forme de fraction.",
        type: "short_text",
        acceptable: ["8/17"],
      },
      {
        id: "g10-3-e3",
        promptFr: "Le côté opposé à γ mesure 7 et le côté adjacent mesure 24. Calcule tan(γ) sous forme de fraction.",
        type: "short_text",
        acceptable: ["7/24"],
      },
      {
        id: "g10-3-e4",
        promptFr: "Dans un triangle rectangle, opposé = 4 et adjacent = 3. Calcule tan(α).",
        type: "short_text",
        acceptable: ["4/3"],
      },
      {
        id: "g10-3-e5",
        promptFr: "Un triangle rectangle a des côtés 9, 40 et 41. Calcule sin(α) pour l'angle α opposé au côté de longueur 9.",
        type: "short_text",
        acceptable: ["9/41"],
      },
    ],
  };
