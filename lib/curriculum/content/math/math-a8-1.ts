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
      ],
    },
    exercises: [],
    exercisePool: [],
    poolSize: 0,
  };
