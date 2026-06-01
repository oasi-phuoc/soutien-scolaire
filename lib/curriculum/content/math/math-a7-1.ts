import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A7_1_LESSON: MathSubmoduleLesson = {
  submoduleId: "A7-1",
  submoduleCode: "A7.1",
  theory: {
    title: { fr: "Notion de négatif", en: "Concept of negative numbers", ar: "مفهوم الأعداد السالبة", fa: "مفهوم اعداد منفی", ti: "ናይ ጎዳ ቁጽሪ ፍላጠ", uk: "Поняття від'ємних чисел" },
    paragraphs: { fr: [] },
    blocks: [
      { type: "heading", fr: "Les nombres relatifs", black: true },
      { type: "highlight", fr: "Définition" },
      { type: "section", labelFr: "", itemsFr: [
        "Un nombre relatif a un signe **+** ou **−**.",
        "Positif : plus grand que 0 → **+**3, **+**15 (le + est souvent omis).",
        "Négatif : plus petit que 0 → **−**3, **−**15.",
        "Le zéro (0) n'est ni positif ni négatif.",
      ] },
      { type: "plain", fr: "" },
      { type: "heading", fr: "La droite numérique", black: true },
      {
        type: "svg",
        captionFr: "Droite numérique de −6 à +6",
        noFrame: true,
        markup: `<svg viewBox="0 0 340 60" xmlns="http://www.w3.org/2000/svg" width="340" height="60">
  <!-- Main axis line -->
  <line x1="10" y1="30" x2="330" y2="30" stroke="#0f172a" stroke-width="2"/>
  <!-- Left arrow -->
  <polygon points="10,30 20,25 20,35" fill="#0f172a"/>
  <!-- Right arrow -->
  <polygon points="330,30 320,25 320,35" fill="#0f172a"/>
  <!-- -6 -->
  <line x1="30" y1="25" x2="30" y2="35" stroke="#ef4444" stroke-width="1.5"/>
  <text x="30" y="50" text-anchor="middle" font-size="10" fill="#ef4444">−6</text>
  <!-- -5 -->
  <line x1="54" y1="25" x2="54" y2="35" stroke="#ef4444" stroke-width="1.5"/>
  <text x="54" y="50" text-anchor="middle" font-size="10" fill="#ef4444">−5</text>
  <!-- -4 -->
  <line x1="78" y1="25" x2="78" y2="35" stroke="#ef4444" stroke-width="1.5"/>
  <text x="78" y="50" text-anchor="middle" font-size="10" fill="#ef4444">−4</text>
  <!-- -3 -->
  <line x1="102" y1="25" x2="102" y2="35" stroke="#ef4444" stroke-width="1.5"/>
  <text x="102" y="50" text-anchor="middle" font-size="10" fill="#ef4444">−3</text>
  <!-- -2 -->
  <line x1="126" y1="25" x2="126" y2="35" stroke="#ef4444" stroke-width="1.5"/>
  <text x="126" y="50" text-anchor="middle" font-size="10" fill="#ef4444">−2</text>
  <!-- -1 -->
  <line x1="150" y1="25" x2="150" y2="35" stroke="#ef4444" stroke-width="1.5"/>
  <text x="150" y="50" text-anchor="middle" font-size="10" fill="#ef4444">−1</text>
  <!-- 0 -->
  <line x1="174" y1="22" x2="174" y2="38" stroke="#0f172a" stroke-width="2"/>
  <text x="174" y="50" text-anchor="middle" font-size="10" fill="#0f172a" font-weight="bold">0</text>
  <!-- +1 -->
  <line x1="198" y1="25" x2="198" y2="35" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="198" y="50" text-anchor="middle" font-size="10" fill="#3b82f6">+1</text>
  <!-- +2 -->
  <line x1="222" y1="25" x2="222" y2="35" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="222" y="50" text-anchor="middle" font-size="10" fill="#3b82f6">+2</text>
  <!-- +3 -->
  <line x1="246" y1="25" x2="246" y2="35" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="246" y="50" text-anchor="middle" font-size="10" fill="#3b82f6">+3</text>
  <!-- +4 -->
  <line x1="270" y1="25" x2="270" y2="35" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="270" y="50" text-anchor="middle" font-size="10" fill="#3b82f6">+4</text>
  <!-- +5 -->
  <line x1="294" y1="25" x2="294" y2="35" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="294" y="50" text-anchor="middle" font-size="10" fill="#3b82f6">+5</text>
  <!-- +6 -->
  <line x1="318" y1="25" x2="318" y2="35" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="318" y="50" text-anchor="middle" font-size="10" fill="#3b82f6">+6</text>
</svg>`,
      },
      { type: "section", labelFr: "", itemsFr: [
        "Les négatifs sont à **gauche** de 0.",
        "Les positifs sont à **droite** de 0.",
        "Plus on va à gauche, plus le nombre est **petit**.",
      ] },
      { type: "plain", fr: "" },
      { type: "heading", fr: "L'opposé d'un nombre", black: true },
      { type: "highlight", fr: "Définition" },
      { type: "section", labelFr: "", itemsFr: [
        "L'opposé est le nombre qui a le **signe contraire**.",
        "L'opposé de **+**3 est **−**3.",
        "L'opposé de **−**7 est **+**7.",
        "Un nombre et son opposé sont à **égale distance** de 0.",
      ] },
      { type: "table",
        headersFr: ["Nombre", "Opposé"],
        accentHeader: true,
        rows: [
          ["+5", "−5"],
          ["−5", "+5"],
          ["−12", "+12"],
          ["0", "0"],
        ],
      },
      { type: "plain", fr: "" },
      { type: "note", fr: "Applications : température sous zéro (−5°C), altitude sous le niveau de la mer (−200 m), dette (−50 CHF)." },
    ],
  },
  exercises: [],
  exercisePool: [],
  poolSize: 4,
};
