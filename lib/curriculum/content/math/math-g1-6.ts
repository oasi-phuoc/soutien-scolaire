import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_G1_6_LESSON: MathSubmoduleLesson = {
    submoduleId: "G1-6",
    submoduleCode: "G1.6",
    theory: {
      title: {
        fr: "Angles particuliers",
        en: "Special angles",
        ar: "الزوايا الخاصة",
        fa: "زاویه‌های ویژه",
        ti: "ፍሉይ ኩርናዓት",
        uk: "Особливі кути",
      },
      paragraphs: {
        fr: [
          "Angles formés par deux droites parallèles coupées par une sécante (transversale) : on définit plusieurs paires d'angles remarquables.",
          "Angles alternes-internes : de part et d'autre de la transversale, entre les parallèles. Ils sont égaux.",
          "Angles correspondants : même position par rapport à la transversale, de même côté des parallèles. Ils sont égaux.",
          "Angles co-internes (ou conjugués) : entre les parallèles, du même côté de la transversale. Leur somme est 180°.",
        ],
        en: [
          "When two parallel lines are cut by a transversal, special angle pairs are formed.",
          "Alternate interior angles: on opposite sides of the transversal, between the parallels. They are equal.",
          "Corresponding angles: same position relative to the transversal. They are equal.",
          "Co-interior angles: same side of transversal, between parallels. Their sum is 180°.",
        ],
        ar: [
          "عندما تقطع مستقيمة قاطعة متوازيَين تتشكل أزواج زوايا مميزة.",
          "الزوايا المتبادلة الداخلية: على جانبَي القاطعة، بين المتوازيَين. متساوية.",
          "الزوايا المتناظرة: نفس الموضع. متساوية.",
          "الزوايا الداخلية المتحالفة: نفس الجانب. مجموعهما 180°.",
        ],
        fa: [
          "وقتی یک خط قاطع دو خط موازی را قطع می‌کند، جفت زاویه‌های ویژه تشکیل می‌شود.",
          "زاویه‌های متناوب داخلی: دو طرف خط قاطع، بین موازی‌ها. برابرند.",
          "زاویه‌های متناظر: موضع یکسان. برابرند.",
          "زاویه‌های داخلی هم‌سو: همان طرف. مجموعشان 180° است.",
        ],
        ti: [
          "ክልተ ፓራሌሎ ሕርሚ ናይ ሰቤ ሕርሚ ምስ ዝቖርጸን ፍሉይ ናይ ኩርናዓት ጽምዲ ይፍጠር.",
          "ናይ ምምቕቃል ውሽጠ ኩርናዓት: ኣብ ካልኦቲ ሸነኽ, ናይ ፓራሌሎ ሕርሚ ዑቀብ. ማዕረ ዩ.",
          "ናይ ምቁጽጻር ኩርናዓት: ሓደ ቦታ. ማዕረ ዩ.",
          "ናይ ውሽጠ ናይ ሓደ ሸነኽ ኩርናዓት: ድምር 180°.",
        ],
        uk: [
          "Якщо дві паралельні прямі перетинаються секущою, утворюються особливі пари кутів.",
          "Внутрішні кути при паралельних прямих, по різні боки від секущої (чергові) — рівні.",
          "Відповідні кути — рівні.",
          "Односторонні внутрішні кути: сума = 180°.",
        ],
      },
    },
    exercises: [
      { id: "g1-6-e1", promptFr: "Deux droites parallèles coupées par une transversale. Un angle correspond est 65°. L'angle correspondant vaut ?", type: "number", acceptable: ["65"] },
      { id: "g1-6-e2", promptFr: "Deux droites parallèles. Les angles alternes-internes sont-ils égaux ? (oui/non)", type: "short_text", acceptable: ["oui"] },
      { id: "g1-6-e3", promptFr: "Deux co-internes : l'un est 70°. L'autre vaut ?", type: "number", acceptable: ["110"] },
      { id: "g1-6-e4", promptFr: "Les angles correspondants sont-ils égaux ? (oui/non)", type: "short_text", acceptable: ["oui"] },
      { id: "g1-6-e5", promptFr: "Dans un triangle, deux angles sont 60° et 80°. Le troisième vaut ?", type: "number", acceptable: ["40"] },
    ],
  };
