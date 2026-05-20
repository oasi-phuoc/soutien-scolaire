import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_G10_2_LESSON: MathSubmoduleLesson = {
    submoduleId: "G10-2",
    submoduleCode: "G10.2",
    theory: {
      title: {
        fr: "sin, cos, tan",
        en: "sin, cos, tan",
        ar: "جيب الزاوية، جيب التمام، الظل",
        fa: "سینوس، کسینوس، تانژانت",
        ti: "ሲን፣ ኮስ፣ ታን",
        uk: "sin, cos, tan",
      },
      paragraphs: {
        fr: [
          "Dans un triangle rectangle, pour un angle aigu α donné, on définit trois rapports à partir des côtés : sinus, cosinus et tangente.",
          "Nomme les côtés par rapport à l'angle α : le côté opposé (en face de α), le côté adjacent (à côté de α, mais pas l'hypoténuse) et l'hypoténuse (le plus long).",
          "sin(α) = côté opposé / hypoténuse · cos(α) = côté adjacent / hypoténuse · tan(α) = côté opposé / côté adjacent.",
          "Moyen mnémotechnique SOH-CAH-TOA : Sinus = Opposé / Hypoténuse, Cosinus = Adjacent / Hypoténuse, Tangente = Opposé / Adjacent.",
          "Ces rapports ne dépendent que de l'angle, pas de la taille du triangle : tous les triangles rectangles ayant le même angle α ont le même sin(α).",
        ],
        en: [
          "In a right triangle, for a given acute angle α, three ratios are defined using the sides: sine, cosine and tangent.",
          "Name the sides relative to angle α: the opposite side (across from α), the adjacent side (next to α, but not the hypotenuse) and the hypotenuse (the longest).",
          "sin(α) = opposite / hypotenuse · cos(α) = adjacent / hypotenuse · tan(α) = opposite / adjacent.",
          "Mnemonic SOH-CAH-TOA: Sine = Opposite / Hypotenuse, Cosine = Adjacent / Hypotenuse, Tangent = Opposite / Adjacent.",
          "These ratios depend only on the angle, not on the triangle's size: all right triangles with the same angle α share the same sin(α).",
        ],
        ar: [
          "في مثلث قائم الزاوية، لزاوية حادة α معطاة، تُعرَّف ثلاثة نسب من الأضلاع: الجيب وجيب التمام والظل.",
          "سمِّ الأضلاع نسبةً إلى الزاوية α: الضلع المقابل، الضلع المجاور، والوتر.",
          "sin(α) = المقابل ÷ الوتر · cos(α) = المجاور ÷ الوتر · tan(α) = المقابل ÷ المجاور.",
          "القاعدة التذكيرية SOH-CAH-TOA تساعد على الحفظ.",
          "هذه النسب تعتمد فقط على الزاوية، وليس على حجم المثلث.",
        ],
        fa: [
          "در مثلث قائم‌الزاویه، برای زاویه تند α، سه نسبت از اضلاع تعریف می‌شود: سینوس، کسینوس و تانژانت.",
          "اضلاع را نسبت به زاویه α نام‌گذاری کن: ضلع روبه‌رو (مقابل α)، ضلع مجاور (کنار α غیر از وتر) و وتر (بلندترین).",
          "sin(α) = مقابل ÷ وتر · cos(α) = مجاور ÷ وتر · tan(α) = مقابل ÷ مجاور.",
          "یادیار SOH-CAH-TOA: سینوس = مقابل/وتر، کسینوس = مجاور/وتر، تانژانت = مقابل/مجاور.",
          "این نسبت‌ها فقط به زاویه بستگی دارند، نه به اندازه مثلث.",
        ],
        ti: [
          "ኣብ ማእዘን ቅኑዕ ሶስተ ሸነኽ፣ ንዝወሃበ ሹቕቡዕ ማእዘን α፣ ሰለስተ ዝምድናታት ካብ ጎናታት ይትረፍ: ሲን፣ ኮስ፣ ታን።",
          "ጎናታት ብምትኽኻእ ናብ α ሰምዮም: ዝተቓወመ ጎኒ፣ ዝቀረበ ጎኒ፣ ሃይፖቴኑስ።",
          "sin(α) = ዝተቓወመ ÷ ሃይፖቴኑስ · cos(α) = ዝቀረበ ÷ ሃይፖቴኑስ · tan(α) = ዝተቓወመ ÷ ዝቀረበ.",
          "SOH-CAH-TOA ዘኪርካ ትጥቀም.",
          "እዞም ዝምድናታት ካብ ዓቐን ሶስተ ሸነኽ ዘይኮኑ ካብ ማእዘን ጥራይ ይምርኮሱ።",
        ],
        uk: [
          "У прямокутному трикутнику для заданого гострого кута α три відношення визначаються за сторонами: синус, косинус і тангенс.",
          "Назви сторони відносно кута α: протилежна (навпроти α), прилегла (поряд з α, але не гіпотенуза) та гіпотенуза (найдовша).",
          "sin(α) = протилежна / гіпотенуза · cos(α) = прилегла / гіпотенуза · tan(α) = протилежна / прилегла.",
          "Мнемоніка SOH-CAH-TOA: Синус = Протилежна/Гіпотенуза, Косинус = Прилегла/Гіпотенуза, Тангенс = Протилежна/Прилегла.",
          "Ці відношення залежать лише від кута, а не від розміру трикутника.",
        ],
      },
    },
    exercises: [
      {
        id: "g10-2-e1",
        promptFr: "Dans un triangle rectangle, le côté opposé à α mesure 3 et l'hypoténuse mesure 5. Quelle est la valeur de sin(α) ? (Écris une fraction irréductible.)",
        type: "short_text",
        acceptable: ["3/5", "0.6"],
      },
      {
        id: "g10-2-e2",
        promptFr: "Pour le même triangle (opposé = 3, hypoténuse = 5, adjacent = 4), quelle est la valeur de cos(α) ?",
        type: "short_text",
        acceptable: ["4/5", "0.8"],
      },
      {
        id: "g10-2-e3",
        promptFr: "Pour le même triangle, quelle est la valeur de tan(α) ?",
        type: "short_text",
        acceptable: ["3/4", "0.75"],
      },
      {
        id: "g10-2-e4",
        promptFr: "Quel rapport trigonométrique correspond à SOH (Sinus = Opposé / ___) ?",
        type: "short_text",
        acceptable: ["hypoténuse", "Hypoténuse", "hypotenuse"],
      },
      {
        id: "g10-2-e5",
        promptFr: "Si sin(30°) = 0,5, quelle est la valeur de cos(60°) ?",
        type: "short_text",
        acceptable: ["0,5", "0.5", "1/2"],
      },
    ],
  };
