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
      {
        type: "svg_row",
        items: [
          {
            markup: `<svg viewBox="0 0 190 128" width="100%" xmlns="http://www.w3.org/2000/svg"><defs><marker id="arr-assoc1" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><polygon points="0 0,6 3,0 6" fill="#60a5fa"/></marker></defs><text x="18" y="22" text-anchor="middle" font-size="20" font-weight="bold" fill="#60a5fa">2</text><text x="50" y="22" text-anchor="middle" font-size="20" font-weight="bold" fill="#374151">×</text><text x="80" y="22" text-anchor="middle" font-size="20" font-weight="bold" fill="#60a5fa">10</text><text x="112" y="22" text-anchor="middle" font-size="20" font-weight="bold" fill="#374151">×</text><text x="158" y="22" text-anchor="middle" font-size="20" font-weight="bold" fill="#60a5fa">8</text><line x1="25" y1="28" x2="51" y2="55" stroke="#60a5fa" stroke-width="1" marker-end="url(#arr-assoc1)"/><line x1="77" y1="28" x2="63" y2="55" stroke="#60a5fa" stroke-width="1" marker-end="url(#arr-assoc1)"/><text x="56" y="72" text-anchor="middle" font-size="20" font-weight="bold" fill="#111827">20</text><text x="92" y="72" text-anchor="middle" font-size="20" font-weight="bold" fill="#374151">×</text><text x="128" y="72" text-anchor="middle" font-size="20" font-weight="bold" fill="#60a5fa">22</text><line x1="64" y1="78" x2="87" y2="105" stroke="#60a5fa" stroke-width="1" marker-end="url(#arr-assoc1)"/><line x1="120" y1="78" x2="97" y2="105" stroke="#60a5fa" stroke-width="1" marker-end="url(#arr-assoc1)"/><text x="92" y="122" text-anchor="middle" font-size="20" font-weight="bold" fill="#111827">160</text></svg>`
          },
          {
            markup: `<svg viewBox="0 0 190 128" width="100%" xmlns="http://www.w3.org/2000/svg"><defs><marker id="arr-assoc2" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><polygon points="0 0,6 3,0 6" fill="#60a5fa"/></marker></defs><text x="18" y="22" text-anchor="middle" font-size="20" font-weight="bold" fill="#60a5fa">2</text><text x="50" y="22" text-anchor="middle" font-size="20" font-weight="bold" fill="#374151">×</text><text x="80" y="22" text-anchor="middle" font-size="20" font-weight="bold" fill="#60a5fa">10</text><text x="112" y="22" text-anchor="middle" font-size="20" font-weight="bold" fill="#374151">×</text><text x="158" y="22" text-anchor="middle" font-size="20" font-weight="bold" fill="#60a5fa">8</text><line x1="88" y1="28" x2="114" y2="55" stroke="#60a5fa" stroke-width="1" marker-end="url(#arr-assoc2)"/><line x1="151" y1="28" x2="128" y2="55" stroke="#60a5fa" stroke-width="1" marker-end="url(#arr-assoc2)"/><text x="22" y="72" text-anchor="middle" font-size="20" font-weight="bold" fill="#60a5fa">2</text><text x="62" y="72" text-anchor="middle" font-size="20" font-weight="bold" fill="#374151">×</text><text x="120" y="72" text-anchor="middle" font-size="20" font-weight="bold" fill="#111827">80</text><line x1="30" y1="78" x2="83" y2="105" stroke="#60a5fa" stroke-width="1" marker-end="url(#arr-assoc2)"/><line x1="112" y1="78" x2="99" y2="105" stroke="#60a5fa" stroke-width="1" marker-end="url(#arr-assoc2)"/><text x="92" y="122" text-anchor="middle" font-size="20" font-weight="bold" fill="#111827">160</text></svg>`
          },
        ],
      },
      { type: "heading", fr: "Multiplication en colonnes", black: true },
      { type: "plain", fr: "Voici les étapes pour multiplier des nombres en colonnes." },
      { type: "plain", fr: "Écrivez les nombres en alignant les unités, les dizaines, les centaines." },
      {
        type: "svg",
        noFrame: false,
        markup: `<svg viewBox="0 0 248 148" width="100%" xmlns="http://www.w3.org/2000/svg">...</svg>`
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
