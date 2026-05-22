import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A2_2_LESSON: MathSubmoduleLesson = {
  submoduleId: "A2-2",
  submoduleCode: "A2.2",
  theory: {
    title: {
      fr: "Soustraction",
      en: "Subtraction",
      ar: "الطرح",
      fa: "تفریق",
      ti: "ምቅናስ",
      uk: "Віднімання",
      pt: "Subtração",
    },

    blocks: [
      {
        type: "plain",
        fr: "La soustraction permet de retirer une quantité d'une autre.",
        pivot: {
          en: "Subtraction removes a quantity from another.",
          ar: "الطرح يزيل كمية من أخرى.",
          fa: "تفریق مقداری را از مقدار دیگری کم می‌کند.",
          ti: "ምቅናስ ሓደ መጠን ካብ ካሊእ ይቀንስ።",
          uk: "Віднімання вилучає одну величину з іншої.",
          pt: "A subtração permite retirar uma quantidade de outra.",
        },
      },

      {
        type: "section",
        labelFr: "",
        itemsFr: [
          "Le signe de la soustraction est le signe « − » **moins**",
          "Les nombres de la soustraction sont les **termes**.",
          "Le résultat de la soustraction est la **différence**.",
        ],
      },

      {
        type: "table",
        headersFr: ["8", "−", "3", "=", "5"],
        accentHeader: true,
        rows: [["terme", "moins", "terme", "égale", "différence"]],
      },

      { type: "heading", fr: "Propriétés de la soustraction", black: true },

      {
        type: "highlight",
        fr: "Non-commutativité",
        pivot: {
          en: "Non-commutativity",
          ar: "عدم التبادلية",
          fa: "جابجایی‌ناپذیری",
          ti: "ዘይ ቅደምሰዓባዊ",
          uk: "Некомутативність",
          pt: "Não comutatividade",
        },
      },

      {
        type: "section",
        labelFr: "",
        itemsFr: [
          "La soustraction n'est PAS commutative.",
          "• 57 − 49 ≠ 49 − 57",
        ],
      },

      {
        type: "svg_row",
        items: [
          {
            markup: `<svg viewBox="0 0 170 88" width="100%" xmlns="http://www.w3.org/2000/svg"><defs><marker id="arr-comm1" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><polygon points="0 0,6 3,0 6" fill="#60a5fa"/></marker></defs><text x="30" y="27" text-anchor="middle" font-size="20" font-weight="bold" fill="#60a5fa">67</text><text x="85" y="27" text-anchor="middle" font-size="20" font-weight="bold" fill="#374151">-</text><text x="140" y="27" text-anchor="middle" font-size="20" font-weight="bold" fill="#60a5fa">19</text><line x1="42" y1="35" x2="79" y2="63" stroke="#60a5fa" stroke-width="1" marker-end="url(#arr-comm1)"/><line x1="128" y1="35" x2="91" y2="63" stroke="#60a5fa" stroke-width="1" marker-end="url(#arr-comm1)"/><text x="85" y="83" text-anchor="middle" font-size="20" font-weight="bold" fill="#111827">48</text></svg>`
          },
          {
            markup: `<svg viewBox="0 0 170 88" width="100%" xmlns="http://www.w3.org/2000/svg"><defs><marker id="arr-comm2" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><polygon points="0 0,6 3,0 6" fill="#60a5fa"/></marker></defs><text x="30" y="27" text-anchor="middle" font-size="20" font-weight="bold" fill="#60a5fa">19</text><text x="85" y="27" text-anchor="middle" font-size="20" font-weight="bold" fill="#374151">-</text><text x="140" y="27" text-anchor="middle" font-size="20" font-weight="bold" fill="#60a5fa">29</text><line x1="42" y1="35" x2="79" y2="63" stroke="#60a5fa" stroke-width="1" marker-end="url(#arr-comm2)"/><line x1="128" y1="35" x2="91" y2="63" stroke="#60a5fa" stroke-width="1" marker-end="url(#arr-comm2)"/><text x="85" y="83" text-anchor="middle" font-size="20" font-weight="bold" fill="#111827">??</text></svg>`
          },
        ],
      },
      
      { type: "heading", fr: "Soustraction en colonnes", black: true },

      {
        type: "section",
        labelFr: "",
        itemsFr: [
          "Écrivez les nombres en alignant **U** (unités), **D** (dizaines), **C** (centaines).",
          "Commencez par soustraire les **unités**.",
          "Si c'est impossible, faites un **emprunt**.",
          "Continuez avec les dizaines puis les centaines.",
        ],
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
