import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A8_1_LESSON: MathSubmoduleLesson = {
    submoduleId: "A8-1",
    submoduleCode: "A8.1",
    theory: {
      title: {
        fr: "Notation puissance",
        en: "Power notation",
        ar: "رمز الأس",
        fa: "نمادگذاری توان",
        ti: "ምልክት ሓይሊ",
        uk: "Позначення степеня",
      },
      paragraphs: { fr: [] },
      blocks: [
        {
          type: "heading",
          fr: "Qu'est-ce qu'une puissance ?",
          black: true,
        },
        {
          type: "plain",
          fr: "Une puissance est une façon rapide d'écrire une multiplication répétée. Elle est composée de deux éléments : la **base** et l'**exposant**.",
        },
        {
          type: "rule",
          titleFr: "Notation puissance",
          itemsFr: [
            "aⁿ = a × a × a × … × a  (n fois)",
            "**Base** = le nombre qu'on répète",
            "**Exposant** = le nombre de fois qu'on multiplie la base par elle-même",
          ],
        },
        {
          type: "example",
          fr: "2³ = 2 × 2 × 2 = 8\nOn lit : « 2 exposant 3 » ou « 2 à la puissance 3 »",
        },
        {
          type: "heading",
          fr: "Cas particuliers importants",
          black: true,
        },
        {
          type: "section",
          labelFr: "À retenir",
          itemsFr: [
            "Tout nombre à la puissance 1 est lui-même : 5¹ = 5",
            "Tout nombre (≠ 0) à la puissance 0 vaut 1 : 7⁰ = 1",
          ],
        },
        {
          type: "note",
          fr: "Attention : 2³ ≠ 2 × 3. La puissance est une multiplication répétée, pas une multiplication simple. 2³ = 8, mais 2 × 3 = 6.",
        },
        {
          type: "table",
          headersFr: ["Expression", "Développement", "Résultat"],
          accentHeader: true,
          rows: [
            ["2³", "2 × 2 × 2", "8"],
            ["3²", "3 × 3", "9"],
            ["4³", "4 × 4 × 4", "64"],
            ["5⁰", "1 (cas particulier)", "1"],
            ["6¹", "6 (cas particulier)", "6"],
          ],
        },
        {
          type: "heading",
          fr: "Table des puissances (exposants 1 à 5)",
          black: true,
        },
        { type: "power_table" },
      ],
    },
    exercises: [],
    exercisePool: [
      { id: "a8-1-ep01", promptFr: "2² = ?", type: "number", acceptable: ["4"] },
      { id: "a8-1-ep02", promptFr: "2³ = ?", type: "number", acceptable: ["8"] },
      { id: "a8-1-ep03", promptFr: "3² = ?", type: "number", acceptable: ["9"] },
      { id: "a8-1-ep04", promptFr: "3³ = ?", type: "number", acceptable: ["27"] },
      { id: "a8-1-ep05", promptFr: "4² = ?", type: "number", acceptable: ["16"] },
      { id: "a8-1-ep06", promptFr: "5² = ?", type: "number", acceptable: ["25"] },
      { id: "a8-1-ep07", promptFr: "6² = ?", type: "number", acceptable: ["36"] },
      { id: "a8-1-ep08", promptFr: "7² = ?", type: "number", acceptable: ["49"] },
      { id: "a8-1-ep09", promptFr: "10² = ?", type: "number", acceptable: ["100"] },
      { id: "a8-1-ep10", promptFr: "2⁵ = ?", type: "number", acceptable: ["32"] },
    ],
    poolSize: 5,
  };
