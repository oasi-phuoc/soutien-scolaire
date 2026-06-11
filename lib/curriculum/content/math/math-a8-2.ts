import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A8_2_LESSON: MathSubmoduleLesson = {
    submoduleId: "A8-2",
    submoduleCode: "A8.2",
    theory: {
      title: {
        fr: "",
      },
      paragraphs: { fr: [] },
      blocks: [
        {
          type: "heading",
          fr: "Comment calculer une puissance",
          black: true,
        },
        {
          type: "plain",
          fr: "Pour calculer une puissance, on multiplie la base par elle-même autant de fois que l'indique l'exposant.",
        },
        { type: "highlight", fr: "Addition et soustraction" },
        {
          type: "plain",
          fr: "Quand il y a une addition ou une soustraction de puissances, il faut toujours commencer par calculer chaque puissance séparément. Puis additionner ou soustraire les résultats.",
        },
        { type: "plain", fr: "2³ + 3²" },
        {
          type: "section",
          labelFr: "",
          itemsFr: [
            "2³ = 2 × 2 × 2 = 8",
            "3² = 3 × 3 = 9",
            "→ 8 + 9 = 17",
          ],
        },
        { type: "plain", fr: "5² − 3²" },
        {
          type: "section",
          labelFr: "",
          itemsFr: [
            "5² = 5 × 5 = 25",
            "3² = 3 × 3 = 9",
            "→ 25 − 9 = 16",
          ],
        },
        { type: "highlight", fr: "Multiplication" },
        { type: "plain", fr: "Lorsque l'on multiplie deux puissances qui ont la même base, on conserve la base et on additionne les exposants." },
        { type: "plain", fr: "aᵐ × aⁿ = aᵐ⁺ⁿ" },
        { type: "plain", fr: "2³ × 2² = 2³⁺² = 2⁵ = 32" },
        {
          type: "section",
          labelFr: "",
          itemsFr: [
            "2³ = 2 × 2 × 2",
            "2² = 2 × 2",
            "(2 × 2 × 2) × (2 × 2)",
            "**→** 2 × 2 × 2 × 2 × 2 = 2⁵ = 32",
          ],
        },
        { type: "highlight", fr: "Division" },
        { type: "plain", fr: "Lorsque l'on divise deux puissances qui ont la même base, on conserve la base et on soustrait les exposants." },
        { type: "plain", fr: "aⁿ ÷ aᵐ = aⁿ⁻ᵐ" },
        { type: "plain", fr: "2⁵ ÷ 2² = 2⁵⁻² = 2³ = 8" },
        {
          type: "section",
          labelFr: "",
          itemsFr: [
            "2⁵ = 2 × 2 × 2 × 2 × 2",
            "2² = 2 × 2",
            "(2 × 2 × 2 × 2 × 2) ÷ (2 × 2)",
            "**→** 2 × 2 × 2 = 2³ = 8",
          ],
        },
        { type: "highlight", fr: "Puissance d'une puissance" },
        { type: "plain", fr: "Lorsqu'une puissance est elle-même élevée à une autre puissance, on conserve la base et on multiplie les exposants." },
        { type: "plain", fr: "(aᵐ)ⁿ = aᵐˣⁿ" },
        { type: "plain", fr: "(2³)²" },
        {
          type: "section",
          labelFr: "",
          itemsFr: [
            "= (2 × 2 × 2)²",
            "",
            "= (2 × 2 × 2) × (2 × 2 × 2)",
            "",
            "**→** 2 × 2 × 2 × 2 × 2 × 2 = 2⁶ = 64",
          ],
        },
      ],
    },
    exercises: [],
    exercisePool: [
      { id: "a8-2-ep01", promptFr: "2² × 2³ = ?", type: "number", acceptable: ["32"], hintFr: "aⁿ × aᵐ = aⁿ⁺ᵐ. aⁿ ÷ aᵐ = aⁿ⁻ᵐ. (aⁿ)ᵐ = aⁿˣᵐ."},
      { id: "a8-2-ep02", promptFr: "3² × 3² = ?", type: "number", acceptable: ["81"], hintFr: "aⁿ × aᵐ = aⁿ⁺ᵐ. aⁿ ÷ aᵐ = aⁿ⁻ᵐ. (aⁿ)ᵐ = aⁿˣᵐ."},
      { id: "a8-2-ep03", promptFr: "2⁵ ÷ 2³ = ?", type: "number", acceptable: ["4"], hintFr: "aⁿ × aᵐ = aⁿ⁺ᵐ. aⁿ ÷ aᵐ = aⁿ⁻ᵐ. (aⁿ)ᵐ = aⁿˣᵐ."},
      { id: "a8-2-ep04", promptFr: "4⁴ ÷ 4² = ?", type: "number", acceptable: ["16"], hintFr: "aⁿ × aᵐ = aⁿ⁺ᵐ. aⁿ ÷ aᵐ = aⁿ⁻ᵐ. (aⁿ)ᵐ = aⁿˣᵐ."},
      { id: "a8-2-ep05", promptFr: "(2³)² = ?", type: "number", acceptable: ["64"], hintFr: "aⁿ × aᵐ = aⁿ⁺ᵐ. aⁿ ÷ aᵐ = aⁿ⁻ᵐ. (aⁿ)ᵐ = aⁿˣᵐ."},
      { id: "a8-2-ep06", promptFr: "(3²)² = ?", type: "number", acceptable: ["81"], hintFr: "aⁿ × aᵐ = aⁿ⁺ᵐ. aⁿ ÷ aᵐ = aⁿ⁻ᵐ. (aⁿ)ᵐ = aⁿˣᵐ."},
      { id: "a8-2-ep07", promptFr: "2³ × 2⁴ = ?", type: "number", acceptable: ["128"], hintFr: "aⁿ × aᵐ = aⁿ⁺ᵐ. aⁿ ÷ aᵐ = aⁿ⁻ᵐ. (aⁿ)ᵐ = aⁿˣᵐ."},
      { id: "a8-2-ep08", promptFr: "5³ ÷ 5² = ?", type: "number", acceptable: ["5"], hintFr: "aⁿ × aᵐ = aⁿ⁺ᵐ. aⁿ ÷ aᵐ = aⁿ⁻ᵐ. (aⁿ)ᵐ = aⁿˣᵐ."},
      { id: "a8-2-ep09", promptFr: "4² × 4 = ?", type: "number", acceptable: ["64"], hintFr: "aⁿ × aᵐ = aⁿ⁺ᵐ. aⁿ ÷ aᵐ = aⁿ⁻ᵐ. (aⁿ)ᵐ = aⁿˣᵐ."},
      { id: "a8-2-ep10", promptFr: "3³ × 3² = ?", type: "number", acceptable: ["243"], hintFr: "aⁿ × aᵐ = aⁿ⁺ᵐ. aⁿ ÷ aᵐ = aⁿ⁻ᵐ. (aⁿ)ᵐ = aⁿˣᵐ."},
    ],
    poolSize: 5,
  };
