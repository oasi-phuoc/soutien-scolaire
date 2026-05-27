import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A3_6_LESSON: MathSubmoduleLesson = {
  submoduleId: "A3-6",
  submoduleCode: "A3.6",
  theory: {
    title: {
      fr: "PGCD et PPCM",
      en: "GCD and LCM",
      ar: "القاسم المشترك الأكبر والمضاعف المشترك الأصغر",
      fa: "بزرگترین مقسوم‌علیه مشترک و کوچکترین مضرب مشترک",
      ti: "ዝዓቢ ሓባራዊ ካፋሊ ምስ ዝነኣሰ ሓባራዊ ብዙሕ",
      uk: "НСД та НСК",
      pt: "",
    },
    blocks: [
      // ── PGCD ────────────────────────────────────────────────────────────
      { type: "heading", fr: "PGCD — Plus Grand Commun Diviseur", black: true },

      { type: "highlight", fr: "Définition" },
      {
        type: "section", labelFr: "", itemsFr: [
          "Le **PGCD** (Plus Grand Commun Diviseur) de deux nombres est le **plus grand entier** qui divise exactement les deux nombres.",
          "Notation : PGCD(a, b)",
        ],
      },

      { type: "highlight", fr: "Méthode — liste des diviseurs" },
      {
        type: "section", labelFr: "", itemsFr: [
          "1. Lister tous les **diviseurs** de chaque nombre.",
          "2. Repérer les diviseurs **communs** aux deux listes.",
          "3. Prendre le **plus grand** des diviseurs communs.",
        ],
      },

      { type: "heading", fr: "Exemple : PGCD(12, 18)", black: false },
      {
        type: "table",
        headersFr: ["Nombre", "Diviseurs"],
        accentHeader: true,
        rows: [
          ["12", "1 · 2 · 3 · 4 · 6 · 12"],
          ["18", "1 · 2 · 3 · 6 · 9 · 18"],
          ["Communs", "1 · 2 · 3 · **6**"],
        ],
        captionFr: "Le plus grand diviseur commun est 6.",
      },
      { type: "note", fr: "PGCD(12, 18) = 6" },

      // ── PPCM ────────────────────────────────────────────────────────────
      { type: "plain", fr: "" },
      { type: "heading", fr: "PPCM — Plus Petit Commun Multiple", black: true },

      { type: "highlight", fr: "Définition" },
      {
        type: "section", labelFr: "", itemsFr: [
          "Le **PPCM** (Plus Petit Commun Multiple) de deux nombres est le **plus petit entier positif** qui est multiple des deux nombres.",
          "Notation : PPCM(a, b)",
        ],
      },

      { type: "highlight", fr: "Méthode — liste des multiples" },
      {
        type: "section", labelFr: "", itemsFr: [
          "1. Lister les **multiples** de chaque nombre dans l'ordre croissant.",
          "2. Trouver le **premier multiple commun** aux deux listes.",
        ],
      },

      { type: "heading", fr: "Exemple : PPCM(4, 6)", black: false },
      {
        type: "table",
        headersFr: ["Nombre", "Multiples (dans l'ordre)"],
        accentHeader: true,
        rows: [
          ["4", "4 · 8 · **12** · 16 · 20 · 24 · …"],
          ["6", "6 · **12** · 18 · 24 · …"],
        ],
        captionFr: "Le premier multiple commun est 12.",
      },
      { type: "note", fr: "PPCM(4, 6) = 12" },

      // ── Lien PGCD ↔ PPCM ────────────────────────────────────────────────
      { type: "plain", fr: "" },
      { type: "heading", fr: "Lien entre PGCD et PPCM", black: true },

      { type: "highlight", fr: "Formule" },
      {
        type: "rule", titleFr: "", itemsFr: [
          "PGCD(a, b) × PPCM(a, b) = a × b",
        ],
      },

      {
        type: "section", labelFr: "Vérification avec 12 et 18 :", itemsFr: [
          "PGCD(12, 18) = 6  et  PPCM(12, 18) = 36",
          "6 × 36 = 216  =  12 × 18  ✓",
        ],
      },

      { type: "highlight", fr: "Application — calculer le PPCM avec la formule" },
      {
        type: "section", labelFr: "", itemsFr: [
          "Si PGCD(8, 20) = 4, alors :",
          "PPCM(8, 20) = (8 × 20) ÷ 4 = 160 ÷ 4 = **40**",
        ],
      },
    ],
    paragraphs: { fr: [] },
  },

  exercises: [
    { id: "a3-6-e1", promptFr: "Calculez le PGCD de 12 et 18.", type: "number", acceptable: ["6"] },
    { id: "a3-6-e2", promptFr: "Calculez le PPCM de 4 et 6.", type: "number", acceptable: ["12"] },
    { id: "a3-6-e3", promptFr: "Calculez le PGCD de 24 et 36.", type: "number", acceptable: ["12"] },
    { id: "a3-6-e4", promptFr: "Calculez le PPCM de 3 et 5.", type: "number", acceptable: ["15"] },
    { id: "a3-6-e5", promptFr: "PGCD(8, 20) = 4. En utilisant la relation PGCD × PPCM = a × b, calculez PPCM(8, 20).", type: "number", acceptable: ["40"] },
  ],
  exercisePool: [
    { id: "a3-6-ep01", promptFr: "PGCD(12, 18) = ?", type: "number", acceptable: ["6"] },
    { id: "a3-6-ep02", promptFr: "PPCM(4, 6) = ?", type: "number", acceptable: ["12"] },
    { id: "a3-6-ep03", promptFr: "PGCD(24, 36) = ?", type: "number", acceptable: ["12"] },
    { id: "a3-6-ep04", promptFr: "PPCM(3, 5) = ?", type: "number", acceptable: ["15"] },
    { id: "a3-6-ep05", promptFr: "PGCD(8, 20) = 4. Calculez PPCM(8, 20).", type: "number", acceptable: ["40"] },
    { id: "a3-6-ep06", promptFr: "PGCD(15, 25) = ?", type: "number", acceptable: ["5"] },
    { id: "a3-6-ep07", promptFr: "PPCM(6, 9) = ?", type: "number", acceptable: ["18"] },
    { id: "a3-6-ep08", promptFr: "PGCD(16, 24) = ?", type: "number", acceptable: ["8"] },
    { id: "a3-6-ep09", promptFr: "PPCM(8, 12) = ?", type: "number", acceptable: ["24"] },
    { id: "a3-6-ep10", promptFr: "PGCD(30, 45) = ?", type: "number", acceptable: ["15"] },
  ],
  poolSize: 5,
};
