import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A3_2_LESSON: MathSubmoduleLesson = {
    submoduleId: "A3-2",
    submoduleCode: "A3.2",
    theory: {
    title: {
      fr: "Multiplication",
      en: "",
      ar: "",
      fa: "",
      ti: "",
      uk: "",
      pt: "",
    },
    blocks: [
      { type: "plain", fr: "Multiplier, c'est additionner plusieurs fois le même nombre." },
      {
        type: "section",
        labelFr: "",
        itemsFr: [
          "Le signe de la multiplication est le signe « × » **fois**",
          "Les nombres à multiplier sont les **facteurs**.",
          "Le résultat de la multiplication est le **produit**.",
        ],
      },
      {
        type: "table",
        headersFr: ["7", "×", "9", "=", "63"],
        accentHeader: true,
        rows: [["facteur", "fois", "facteur", "égale", "produit"]],
      },
      { type: "heading", fr: "Propriétés de la multiplication", black: true },
      { type: "highlight", fr: "Commutativité" },
      {
        type: "section",
        labelFr: "",
        itemsFr: ["L'ordre des facteurs ne change pas le produit."],
      },
      {
        type: "svg_row",
        items: [
          {
            markup: `<svg viewBox="0 0 170 88" width="100%" xmlns="http://www.w3.org/2000/svg"><defs><marker id="arr-comm1" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><polygon points="0 0,6 3,0 6" fill="#60a5fa"/></marker></defs><text x="30" y="27" text-anchor="middle" font-size="20" font-weight="bold" fill="#60a5fa">5</text><text x="85" y="27" text-anchor="middle" font-size="20" font-weight="bold" fill="#374151">×</text><text x="140" y="27" text-anchor="middle" font-size="20" font-weight="bold" fill="#60a5fa">6</text><line x1="42" y1="35" x2="79" y2="63" stroke="#60a5fa" stroke-width="1" marker-end="url(#arr-comm1)"/><line x1="128" y1="35" x2="91" y2="63" stroke="#60a5fa" stroke-width="1" marker-end="url(#arr-comm1)"/><text x="85" y="83" text-anchor="middle" font-size="20" font-weight="bold" fill="#111827">30</text></svg>`
          },
          {
            markup: `<svg viewBox="0 0 170 88" width="100%" xmlns="http://www.w3.org/2000/svg"><defs><marker id="arr-comm2" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><polygon points="0 0,6 3,0 6" fill="#60a5fa"/></marker></defs><text x="30" y="27" text-anchor="middle" font-size="20" font-weight="bold" fill="#60a5fa">6</text><text x="85" y="27" text-anchor="middle" font-size="20" font-weight="bold" fill="#374151">×</text><text x="140" y="27" text-anchor="middle" font-size="20" font-weight="bold" fill="#60a5fa">5</text><line x1="42" y1="35" x2="79" y2="63" stroke="#60a5fa" stroke-width="1" marker-end="url(#arr-comm2)"/><line x1="128" y1="35" x2="91" y2="63" stroke="#60a5fa" stroke-width="1" marker-end="url(#arr-comm2)"/><text x="85" y="83" text-anchor="middle" font-size="20" font-weight="bold" fill="#111827">30</text></svg>`
          },
        ],
      },
      { type: "highlight", fr: "Associativité" },
      {
        type: "section",
        labelFr: "",
        itemsFr: ["On peut multiplier plus de deux facteurs dans l'ordre voulu."],
      },

      { type: "highlight", fr: "Fois 0" },
      {
        type: "section",
        labelFr: "",
        itemsFr: ["Un nombre multiplié par 0 donne 0. \n**Exemple :** 123 × 0 = 0."],
      },

      {
        type: "svg_row",
        items: [
          {
            markup: `<svg viewBox="0 0 190 128" width="100%" xmlns="http://www.w3.org/2000/svg"><defs><marker id="arr-assoc1" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><polygon points="0 0,6 3,0 6" fill="#60a5fa"/></marker></defs><text x="18" y="22" text-anchor="middle" font-size="20" font-weight="bold" fill="#60a5fa">2</text><text x="50" y="22" text-anchor="middle" font-size="20" font-weight="bold" fill="#374151">×</text><text x="80" y="22" text-anchor="middle" font-size="20" font-weight="bold" fill="#60a5fa">10</text><text x="112" y="22" text-anchor="middle" font-size="20" font-weight="bold" fill="#374151">×</text><text x="158" y="22" text-anchor="middle" font-size="20" font-weight="bold" fill="#60a5fa">8</text><line x1="25" y1="28" x2="51" y2="55" stroke="#60a5fa" stroke-width="1" marker-end="url(#arr-assoc1)"/><line x1="77" y1="28" x2="63" y2="55" stroke="#60a5fa" stroke-width="1" marker-end="url(#arr-assoc1)"/><text x="56" y="72" text-anchor="middle" font-size="20" font-weight="bold" fill="#111827">20</text><text x="92" y="72" text-anchor="middle" font-size="20" font-weight="bold" fill="#374151">×</text><text x="128" y="72" text-anchor="middle" font-size="20" font-weight="bold" fill="#60a5fa">8</text><line x1="64" y1="78" x2="87" y2="105" stroke="#60a5fa" stroke-width="1" marker-end="url(#arr-assoc1)"/><line x1="120" y1="78" x2="97" y2="105" stroke="#60a5fa" stroke-width="1" marker-end="url(#arr-assoc1)"/><text x="92" y="122" text-anchor="middle" font-size="20" font-weight="bold" fill="#111827">160</text></svg>`
          },
          {
            markup: `<svg viewBox="0 0 190 128" width="100%" xmlns="http://www.w3.org/2000/svg"><defs><marker id="arr-assoc2" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><polygon points="0 0,6 3,0 6" fill="#60a5fa"/></marker></defs><text x="18" y="22" text-anchor="middle" font-size="20" font-weight="bold" fill="#60a5fa">2</text><text x="50" y="22" text-anchor="middle" font-size="20" font-weight="bold" fill="#374151">×</text><text x="80" y="22" text-anchor="middle" font-size="20" font-weight="bold" fill="#60a5fa">10</text><text x="112" y="22" text-anchor="middle" font-size="20" font-weight="bold" fill="#374151">×</text><text x="158" y="22" text-anchor="middle" font-size="20" font-weight="bold" fill="#60a5fa">8</text><line x1="88" y1="28" x2="114" y2="55" stroke="#60a5fa" stroke-width="1" marker-end="url(#arr-assoc2)"/><line x1="151" y1="28" x2="128" y2="55" stroke="#60a5fa" stroke-width="1" marker-end="url(#arr-assoc2)"/><text x="22" y="72" text-anchor="middle" font-size="20" font-weight="bold" fill="#60a5fa">2</text><text x="62" y="72" text-anchor="middle" font-size="20" font-weight="bold" fill="#374151">×</text><text x="120" y="72" text-anchor="middle" font-size="20" font-weight="bold" fill="#111827">80</text><line x1="30" y1="78" x2="83" y2="105" stroke="#60a5fa" stroke-width="1" marker-end="url(#arr-assoc2)"/><line x1="112" y1="78" x2="99" y2="105" stroke="#60a5fa" stroke-width="1" marker-end="url(#arr-assoc2)"/><text x="92" y="122" text-anchor="middle" font-size="20" font-weight="bold" fill="#111827">160</text></svg>`
          },
        ],
      },
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

  exercises: [

  ],
  exercisePool: [

  ],
  poolSize: 5,
};
