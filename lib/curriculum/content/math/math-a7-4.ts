import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A7_4_LESSON: MathSubmoduleLesson = {
  submoduleId: "A7-4",
  submoduleCode: "A7.4",
  theory: {
    title: {
      fr: "Multiplication et division",
    },
    paragraphs: { fr: [] },
    blocks: [
      { type: "heading", fr: "Règle des signes", black: true },

      { type: "plain", fr: "La même règle des signes s'applique pour la multiplication (**×**) et la division (**÷**)." },

      {
        type: "table",
        headersFr: [],
        colAligns: ["left", "left"],
        rows: [
          ["Mêmes signes", "**→** résultat **positif** (+)"],
          ["Signes contraires", "**→** résultat **négatif** (−)"],
        ],
      },

      {
        type: "table",
        headersFr: ["Signes", "Résultat"],
        accentHeader: true,
        rows: [
          ["(**+**) **×** (**+**)\n(**+**) **÷** (**+**)", "**+** (positif)"],
          ["(**−**) **×** (**−**)\n(**−**) **÷** (**−**)", "**+** (positif)"],
          ["(**+**) **×** (**−**)\n(**+**) **÷** (**−**)", "**−** (négatif)"],
          ["(**−**) **×** (**+**)\n(**−**) **÷** (**+**)", "**−** (négatif)"],
        ],
      },

      {
        type: "note",
        fr: "Astuce : deux signes identiques donnent + ; deux signes différents donnent −. « Moins fois moins égale plus. »",
      },
    ],
  },
  exercises: [],
  exercisePool: [],
  poolSize: 0,
};
