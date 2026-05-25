import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A3_4_LESSON: MathSubmoduleLesson = {
    submoduleId: "A3-4",
    submoduleCode: "A3.4",
    theory: {
      title: {
        fr: "Division",
        en: "",
        ar: "",
        fa: "",
        ti: "",
        uk: "",
        pt: "",
      },

        blocks: [
      { type: "plain", fr: "La division sert à partager ou répartir une quantité. C'est chercher combien de fois un nombre est contenu dans un autre." },
      {
        type: "section",
        labelFr: "",
        itemsFr: [
          "Le signe de la division est « ÷ » **diviser**. ",
          "Le nombre que l'on divise est le **dividende**.",
          "Le nombre par lequel on divise est le **diviseur**.",
          "Le résultat est le **quotient**.",
          "Parfois la division n'est pas exacte et il reste un nombre appelé **reste**.",
        ],
      },
      {
        type: "table",
        headersFr: ["121", "÷", "11", "=", "12"],
        accentHeader: true,
        rows: [["dividende", "diviser", "diviseur", "égale", "quotient"]],
      },
      { type: "heading", fr: "Propriétés de la division", black: true },
      { type: "highlight", fr: "Non-commutativité" },
      {
        type: "section",
        labelFr: "",
        itemsFr: ["L'ordre est important : 8 ÷ 2 = 4, mais 2 ÷ 8 ≠ 4."],
      },
      { type: "highlight", fr: "Division par 0" },
      {
        type: "section",
        labelFr: "",
        itemsFr: ["On ne peut pas diviser par 0. La division par zéro est impossible."],
      },
      { type: "heading", fr: "Division euclidienne", black: true },
      {
        type: "section",
        labelFr: "",
        itemsFr: [
          "Quand la division n'est pas exacte :",
          "**dividende** = **diviseur** × **quotient** + **reste**",
          "Le reste est toujours inférieur au diviseur.",
          "Exemple : 17 ÷ 5 = 3, reste 2 → 17 = 5 × 3 + 2",
        ],
      },
      { type: "heading", fr: "Division posée (156 ÷ 12)", black: true },
      {
        type: "svg",
        noFrame: true,
        markup: `<svg viewBox="0 0 280 185" width="100%" xmlns="http://www.w3.org/2000/svg"><rect x="26" y="24" width="46" height="28" rx="3" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1"/><text x="38" y="42" text-anchor="middle" font-size="24" font-weight="bold" fill="#1e293b">1</text><text x="60" y="42" text-anchor="middle" font-size="24" font-weight="bold" fill="#1e293b">5</text><text x="82" y="42" text-anchor="middle" font-size="24" font-weight="bold" fill="#1e293b">6</text><line x1="96" y1="26" x2="96" y2="74" stroke="#374151" stroke-width="2"/><line x1="96" y1="50" x2="148" y2="50" stroke="#374151" stroke-width="2"/><text x="108" y="42" text-anchor="middle" font-size="24" font-weight="bold" fill="#1e293b">1</text><text x="130" y="42" text-anchor="middle" font-size="24" font-weight="bold" fill="#1e293b">2</text><text x="108" y="70" text-anchor="middle" font-size="24" font-weight="bold" fill="#60a5fa">1</text><text x="130" y="70" text-anchor="middle" font-size="24" font-weight="bold" fill="#60a5fa">3</text><text x="119" y="82" text-anchor="middle" font-size="9" fill="#60a5fa">quotient</text><text x="18" y="66" font-size="18" fill="#64748b" font-family="monospace">-</text><text x="48" y="66" text-anchor="middle" font-size="18" fill="#374151" font-family="monospace">1</text><text x="70" y="66" text-anchor="middle" font-size="18" fill="#374151" font-family="monospace">2</text><line x1="20" y1="73" x2="86" y2="73" stroke="#374151" stroke-width="1.5"/><text x="60" y="94" text-anchor="middle" font-size="20" fill="#374151" font-family="monospace">3</text><text x="82" y="94" text-anchor="middle" font-size="20" fill="#374151" font-family="monospace">6</text><text x="18" y="118" font-size="18" fill="#64748b" font-family="monospace">-</text><text x="60" y="118" text-anchor="middle" font-size="18" fill="#374151" font-family="monospace">3</text><text x="82" y="118" text-anchor="middle" font-size="18" fill="#374151" font-family="monospace">6</text><line x1="20" y1="124" x2="86" y2="124" stroke="#374151" stroke-width="1.5"/><text x="82" y="144" text-anchor="middle" font-size="20" font-weight="bold" fill="#374151" font-family="monospace">0</text><text x="72" y="156" font-size="9" fill="#6b7280">reste = 0</text><text x="165" y="42" font-size="11" font-weight="bold" fill="#374151">Étape 1 :</text><text x="165" y="57" font-size="10" font-family="monospace" fill="#374151">15 ÷ 12 = 1</text><text x="165" y="70" font-size="10" fill="#6b7280">1 × 12 = 12</text><text x="165" y="83" font-size="10" fill="#6b7280">15 − 12 = 3</text><text x="165" y="103" font-size="11" font-weight="bold" fill="#374151">Étape 2 :</text><text x="165" y="118" font-size="10" font-family="monospace" fill="#374151">36 ÷ 12 = 3</text><text x="165" y="131" font-size="10" fill="#6b7280">3 × 12 = 36</text><text x="165" y="144" font-size="10" fill="#6b7280">36 − 36 = 0</text><text x="165" y="168" font-size="12" font-weight="bold" fill="#60a5fa">156 ÷ 12 = 13</text></svg>`
      },
    ],
    paragraphs: { fr: [] },
  },

  exercises: [],
  exercisePool: [
    { id: "a3-4-ep01", promptFr: "84 ÷ 7 = ?", type: "number", acceptable: ["12"] },
    { id: "a3-4-ep02", promptFr: "96 ÷ 8 = ?", type: "number", acceptable: ["12"] },
    { id: "a3-4-ep03", promptFr: "156 ÷ 12 = ?", type: "number", acceptable: ["13"] },
    { id: "a3-4-ep04", promptFr: "256 ÷ 16 = ?", type: "number", acceptable: ["16"] },
    { id: "a3-4-ep05", promptFr: "144 ÷ 9 = ?", type: "number", acceptable: ["16"] },
    { id: "a3-4-ep06", promptFr: "17 ÷ 5 = … reste … Quel est le quotient ?", type: "number", acceptable: ["3"] },
    { id: "a3-4-ep07", promptFr: "17 ÷ 5 = 3 reste 2. Vérifiez : 5 × 3 + 2 = ?", type: "number", acceptable: ["17"] },
    { id: "a3-4-ep08", promptFr: "225 ÷ 15 = ?", type: "number", acceptable: ["15"] },
    { id: "a3-4-ep09", promptFr: "180 ÷ 12 = ?", type: "number", acceptable: ["15"] },
    { id: "a3-4-ep10", promptFr: "78 ÷ 6 = ?", type: "number", acceptable: ["13"] },
  ],
  poolSize: 5,
};
