import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A8_1_LESSON: MathSubmoduleLesson = {
    submoduleId: "A8-1",
    submoduleCode: "A8.1",
    theory: {
      title: {
        fr: "",
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
          type: "svg",
          noFrame: true,
          markup: `<svg viewBox='0 0 480 165' xmlns='http://www.w3.org/2000/svg' style='width:100%;max-width:480px;display:block;margin:0 auto'>
  <defs>
    <marker id='a81b' markerWidth='7' markerHeight='6' refX='6' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='#38e1ff'/></marker>
    <marker id='a81e' markerWidth='7' markerHeight='6' refX='6' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='#fe9a00'/></marker>
  </defs>
  <text x='200' y='125' text-anchor='middle' font-size='80' font-weight='700' fill='#38e1ff' font-family='Poppins, sans-serif'>2</text>
  <text x='263' y='70' text-anchor='middle' font-size='50' font-weight='700' fill='#fe9a00' font-family='Poppins, sans-serif'>3</text>
  <text x='8' y='85' font-size='13' font-weight='700' fill='#38e1ff' font-family='Poppins, sans-serif'>Base</text>
  <text x='8' y='112' font-size='11' fill='#475569' font-family='Poppins, sans-serif'>Le nombre qu'on répète</text>
  <line x1='136' y1='96' x2='168' y2='96' stroke='#38e1ff' stroke-width='1.5' marker-end='url(#a81b)'/>
  <line x1='282' y1='50' x2='310' y2='50' stroke='#fe9a00' stroke-width='1.5' marker-end='url(#a81e)'/>
  <text x='318' y='43' font-size='13' font-weight='700' fill='#fe9a00' font-family='Poppins, sans-serif'>Exposant</text>
  <text x='318' y='61' font-size='11' fill='#475569' font-family='Poppins, sans-serif'>Le nombre de fois</text>
  <text x='318' y='76' font-size='11' fill='#475569' font-family='Poppins, sans-serif'>qu'on multiplie</text>
</svg>`,
        },
        {
          type: "section",
          labelFr: "",
          itemsFr: [
            "aⁿ = a × a × a × … × a (n fois)",
            "**Base** = le nombre qu'on répète",
            "**Exposant** = le nombre de fois qu'on multiplie la base par elle-même",
          ],
        },
        { type: "plain", fr: "Pour 2³ , On dit : 2 à la puissance 3." },
        {
          type: "heading",
          fr: "Cas particuliers importants",
          black: true,
        },
        { type: "plain", fr: "**1.** Tout nombre à la **puissance 1** est lui-même : 5**¹** = 5" },
        { type: "plain", fr: "**2.** Tout nombre (≠ 0) à la **puissance 0** vaut 1 : 7**⁰** = 1" },
        { type: "highlight", fr: "Attention" },
        { type: "plain", fr: "La puissance est une multiplication répétée, pas une multiplication simple." },
        {
          type: "section",
          labelFr: "",
          itemsFr: ["2³ ≠ 2 × 3"],
        },
        { type: "highlight", fr: "Attention aux signes" },
        { type: "plain", fr: "Les parenthèses changent le résultat." },
        {
          type: "section",
          labelFr: "",
          itemsFr: ["(−2)² = (−2) × (−2) = 4"],
        },
        { type: "plain", fr: "mais ..." },
        {
          type: "section",
          labelFr: "",
          itemsFr: ["−2² = −(2 × 2) = −4"],
        },
        { type: "plain", fr: "" },
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
    exercisePool: [
      { id: "a8-1-ep01", promptFr: "2² = ?", type: "number", acceptable: ["4"], hintFr: "aⁿ = a multiplié par lui-même n fois. Par ex. 2³ = 2 × 2 × 2 = 8."},
      { id: "a8-1-ep02", promptFr: "2³ = ?", type: "number", acceptable: ["8"], hintFr: "aⁿ = a multiplié par lui-même n fois. Par ex. 2³ = 2 × 2 × 2 = 8."},
      { id: "a8-1-ep03", promptFr: "3² = ?", type: "number", acceptable: ["9"], hintFr: "aⁿ = a multiplié par lui-même n fois. Par ex. 2³ = 2 × 2 × 2 = 8."},
      { id: "a8-1-ep04", promptFr: "3³ = ?", type: "number", acceptable: ["27"], hintFr: "aⁿ = a multiplié par lui-même n fois. Par ex. 2³ = 2 × 2 × 2 = 8."},
      { id: "a8-1-ep05", promptFr: "4² = ?", type: "number", acceptable: ["16"], hintFr: "aⁿ = a multiplié par lui-même n fois. Par ex. 2³ = 2 × 2 × 2 = 8."},
      { id: "a8-1-ep06", promptFr: "5² = ?", type: "number", acceptable: ["25"], hintFr: "aⁿ = a multiplié par lui-même n fois. Par ex. 2³ = 2 × 2 × 2 = 8."},
      { id: "a8-1-ep07", promptFr: "6² = ?", type: "number", acceptable: ["36"], hintFr: "aⁿ = a multiplié par lui-même n fois. Par ex. 2³ = 2 × 2 × 2 = 8."},
      { id: "a8-1-ep08", promptFr: "7² = ?", type: "number", acceptable: ["49"], hintFr: "aⁿ = a multiplié par lui-même n fois. Par ex. 2³ = 2 × 2 × 2 = 8."},
      { id: "a8-1-ep09", promptFr: "10² = ?", type: "number", acceptable: ["100"], hintFr: "aⁿ = a multiplié par lui-même n fois. Par ex. 2³ = 2 × 2 × 2 = 8."},
      { id: "a8-1-ep10", promptFr: "2⁵ = ?", type: "number", acceptable: ["32"], hintFr: "aⁿ = a multiplié par lui-même n fois. Par ex. 2³ = 2 × 2 × 2 = 8."},
    ],
    poolSize: 5,
  };
