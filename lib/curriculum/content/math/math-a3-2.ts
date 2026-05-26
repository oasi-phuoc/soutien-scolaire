import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A3_2_LESSON: MathSubmoduleLesson = {
    submoduleId: "A3-2",
    submoduleCode: "A3.2",
    theory: {
    title: {
      fr: "Multiplication en colonnes",
      en: "",
      ar: "",
      fa: "",
      ti: "",
      uk: "",
      pt: "",
    },
    blocks: [
      { type: "heading", fr: "Multiplication en colonnes", black: true },
      { type: "plain", fr: "Voici les étapes pour multiplier 24 × 3 en colonnes." },
      {
        type: "svg",
        noFrame: true,
        markup: `<svg viewBox="0 0 280 168" width="100%" xmlns="http://www.w3.org/2000/svg"><defs><marker id="a32arr" markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto"><polygon points="0 0,5 2.5,0 5" fill="#60a5fa"/></marker></defs><!-- Step annotations left --><text x="8" y="64" font-size="11" font-weight="bold" fill="#374151">Étape 1</text><text x="8" y="79" font-size="12" font-family="monospace" fill="#374151">4 × 3 = 12</text><text x="8" y="93" font-size="10" fill="#6b7280">écrire 2, retenir 1</text><text x="8" y="116" font-size="11" font-weight="bold" fill="#374151">Étape 2</text><text x="8" y="131" font-size="12" font-family="monospace" fill="#374151">2 × 3 + 1 = 7</text><text x="8" y="145" font-size="10" fill="#6b7280">écrire 7</text><!-- Connector lines --><line x1="94" y1="75" x2="168" y2="75" stroke="#60a5fa" stroke-width="1" stroke-dasharray="3,2" marker-end="url(#a32arr)"/><line x1="94" y1="126" x2="168" y2="126" stroke="#60a5fa" stroke-width="1" stroke-dasharray="3,2" marker-end="url(#a32arr)"/><!-- Column grid box --><rect x="172" y="28" width="100" height="132" rx="6" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5"/><!-- Column headers D U --><text x="212" y="46" text-anchor="middle" font-size="10" font-weight="bold" fill="#60a5fa">D</text><text x="244" y="46" text-anchor="middle" font-size="10" font-weight="bold" fill="#60a5fa">U</text><!-- Carry 1 above D --><text x="212" y="64" text-anchor="middle" font-size="12" font-weight="bold" fill="#f97316">1</text><!-- Multiplicand 24 --><text x="212" y="86" text-anchor="middle" font-size="26" font-weight="bold" fill="#1e293b">2</text><text x="244" y="86" text-anchor="middle" font-size="26" font-weight="bold" fill="#1e293b">4</text><!-- Multiplier ×3 --><text x="184" y="114" text-anchor="middle" font-size="22" fill="#64748b">×</text><text x="244" y="114" text-anchor="middle" font-size="26" font-weight="bold" fill="#1e293b">3</text><!-- Separator --><line x1="178" y1="124" x2="268" y2="124" stroke="#374151" stroke-width="2"/><!-- Result 72 --><text x="212" y="152" text-anchor="middle" font-size="26" font-weight="bold" fill="#60a5fa">7</text><text x="244" y="152" text-anchor="middle" font-size="26" font-weight="bold" fill="#60a5fa">2</text></svg>`
      },
    ],
    paragraphs: { fr: [] },
  },

  exercises: [],
  exercisePool: [
    { id: "a3-2-ep01", promptFr: "Calculez 24 × 3.", type: "number", acceptable: ["72"] },
    { id: "a3-2-ep02", promptFr: "Calculez 45 × 6.", type: "number", acceptable: ["270"] },
    { id: "a3-2-ep03", promptFr: "Calculez 123 × 4.", type: "number", acceptable: ["492"] },
    { id: "a3-2-ep04", promptFr: "Calculez 36 × 7.", type: "number", acceptable: ["252"] },
    { id: "a3-2-ep05", promptFr: "Calculez 52 × 8.", type: "number", acceptable: ["416"] },
    { id: "a3-2-ep06", promptFr: "Calculez 67 × 9.", type: "number", acceptable: ["603"] },
    { id: "a3-2-ep07", promptFr: "Calculez 21 × 15.", type: "number", acceptable: ["315"] },
    { id: "a3-2-ep08", promptFr: "Calculez 34 × 12.", type: "number", acceptable: ["408"] },
    { id: "a3-2-ep09", promptFr: "Calculez 48 × 11.", type: "number", acceptable: ["528"] },
    { id: "a3-2-ep10", promptFr: "Calculez 75 × 4.", type: "number", acceptable: ["300"] },
    { id: "a3-2-ep11", promptFr: "123 × 0 = ?", type: "number", acceptable: ["0"] },
    { id: "a3-2-ep12", promptFr: "5 × 6 × 2 = ? (calculer dans n'importe quel ordre)", type: "number", acceptable: ["60"] },
  ],
  poolSize: 5,
};
