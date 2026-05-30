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

  exercises: [],
  exercisePool: [
    // ── Ex 1 — Reconnaître les multiples ─────────────────────────────────
    { id: "a3-6-ep01", promptFr: "Exercice 1 — Reconnaître les multiples\n6 est-il un multiple de 3 ? (oui/non)", type: "short_text", acceptable: ["oui", "Oui", "OUI"] },
    { id: "a3-6-ep02", promptFr: "Exercice 1 — Reconnaître les multiples\n10 est-il un multiple de 3 ? (oui/non)", type: "short_text", acceptable: ["non", "Non", "NON"] },
    { id: "a3-6-ep03", promptFr: "Exercice 1 — Reconnaître les multiples\n18 = 3 × ___ : complète le facteur manquant.", type: "number", acceptable: ["6"] },
    { id: "a3-6-ep04", promptFr: "Exercice 1 — Reconnaître les multiples\n42 = 7 × ___ : complète le facteur manquant.", type: "number", acceptable: ["6"] },

    // ── Ex 2 — Reconnaître les diviseurs ─────────────────────────────────
    { id: "a3-6-ep05", promptFr: "Exercice 2 — Reconnaître les diviseurs\n4 est-il un diviseur de 20 ? (oui/non)", type: "short_text", acceptable: ["oui", "Oui", "OUI"] },
    { id: "a3-6-ep06", promptFr: "Exercice 2 — Reconnaître les diviseurs\n7 est-il un diviseur de 35 ? (oui/non)", type: "short_text", acceptable: ["oui", "Oui", "OUI"] },
    { id: "a3-6-ep07", promptFr: "Exercice 2 — Reconnaître les diviseurs\n5 divise-t-il 42 ? (oui/non)", type: "short_text", acceptable: ["non", "Non", "NON"] },
    { id: "a3-6-ep08", promptFr: "Exercice 2 — Reconnaître les diviseurs\nCombien de diviseurs a le nombre 12 ? (1, 2, 3, 4, 6, 12)", type: "number", acceptable: ["6"] },

    // ── Ex 3 — Compléter une suite de multiples ───────────────────────────
    { id: "a3-6-ep09", promptFr: "Exercice 3 — Suite de multiples\n3 – 6 – 9 – ___ : terme suivant ?", type: "number", acceptable: ["12"] },
    { id: "a3-6-ep10", promptFr: "Exercice 3 — Suite de multiples\n7 – 14 – 21 – ___ : terme suivant ?", type: "number", acceptable: ["28"] },
    { id: "a3-6-ep11", promptFr: "Exercice 3 — Suite de multiples\n5 – 10 – ___ – 20 : terme manquant ?", type: "number", acceptable: ["15"] },

    // ── Ex 4 — Trouver le multiple suivant ───────────────────────────────
    { id: "a3-6-ep12", promptFr: "Exercice 4 — Multiple suivant\nQuel est le prochain multiple de 4 après 28 ?", type: "number", acceptable: ["32"] },
    { id: "a3-6-ep13", promptFr: "Exercice 4 — Multiple suivant\nQuel est le prochain multiple de 9 après 54 ?", type: "number", acceptable: ["63"] },
    { id: "a3-6-ep14", promptFr: "Exercice 4 — Multiple suivant\nQuel est le plus petit multiple de 6 strictement supérieur à 40 ?", type: "number", acceptable: ["42"] },

    // ── Ex 5 — Tous les multiples d'un nombre ────────────────────────────
    { id: "a3-6-ep15", promptFr: "Exercice 5 — Multiples d'un nombre\nQuel est le 10ème multiple de 2 ?", type: "number", acceptable: ["20"] },
    { id: "a3-6-ep16", promptFr: "Exercice 5 — Multiples d'un nombre\nQuel est le 10ème multiple de 7 ?", type: "number", acceptable: ["70"] },
    { id: "a3-6-ep17", promptFr: "Exercice 5 — Multiples d'un nombre\nQuel est le plus petit multiple commun de 3 et 5 (autre que 0) ?", type: "number", acceptable: ["15"] },

    // ── Ex 6 — Tableau de multiples ──────────────────────────────────────
    { id: "a3-6-ep18", promptFr: "Exercice 6 — Tableau de multiples\nDans le tableau ×, que vaut 3 × 4 ?", type: "number", acceptable: ["12"] },
    { id: "a3-6-ep19", promptFr: "Exercice 6 — Tableau de multiples\nDans le tableau ×, que vaut 4 × 4 ?", type: "number", acceptable: ["16"] },
    { id: "a3-6-ep20", promptFr: "Exercice 6 — Tableau de multiples\nDans le tableau ×, que vaut 2 × 3 ?", type: "number", acceptable: ["6"] },

    // ── Ex 7 — Associer ───────────────────────────────────────────────────
    { id: "a3-6-ep21", promptFr: "Exercice 7 — Associer\n16 est-il un multiple de 4 ? (oui/non)", type: "short_text", acceptable: ["oui", "Oui", "OUI"] },
    { id: "a3-6-ep22", promptFr: "Exercice 7 — Associer\n3 est-il un diviseur de 18 ? (oui/non)", type: "short_text", acceptable: ["oui", "Oui", "OUI"] },
    { id: "a3-6-ep23", promptFr: "Exercice 7 — Associer\n45 est-il un multiple de 5 ? (oui/non)", type: "short_text", acceptable: ["oui", "Oui", "OUI"] },

    // ── Ex 8 — Tri de nombres ─────────────────────────────────────────────
    { id: "a3-6-ep24", promptFr: "Exercice 8 — Tri de nombres\n21 est-il un multiple de 3 ? (oui/non)", type: "short_text", acceptable: ["oui", "Oui", "OUI"] },
    { id: "a3-6-ep25", promptFr: "Exercice 8 — Tri de nombres\n21 est-il un multiple de 5 ? (oui/non)", type: "short_text", acceptable: ["non", "Non", "NON"] },
    { id: "a3-6-ep26", promptFr: "Exercice 8 — Tri de nombres\n25 est-il un multiple de 3 ? (oui/non)", type: "short_text", acceptable: ["non", "Non", "NON"] },

    // ── Ex 9 — Multiple ou diviseur ───────────────────────────────────────
    { id: "a3-6-ep27", promptFr: "Exercice 9 — Multiple ou diviseur ?\n5 est un ___ de 20. (multiple ou diviseur ?)", type: "short_text", acceptable: ["diviseur", "Diviseur"] },
    { id: "a3-6-ep28", promptFr: "Exercice 9 — Multiple ou diviseur ?\n20 est un ___ de 5. (multiple ou diviseur ?)", type: "short_text", acceptable: ["multiple", "Multiple"] },
    { id: "a3-6-ep29", promptFr: "Exercice 9 — Multiple ou diviseur ?\n8 est un ___ de 40. (multiple ou diviseur ?)", type: "short_text", acceptable: ["diviseur", "Diviseur"] },

    // ── Ex 10 — Pair ou impair ────────────────────────────────────────────
    { id: "a3-6-ep30", promptFr: "Exercice 10 — Pair ou impair\nLes multiples de 2 sont-ils pairs ou impairs ? (pairs/impairs)", type: "short_text", acceptable: ["pairs", "Pairs"] },
    { id: "a3-6-ep31", promptFr: "Exercice 10 — Pair ou impair\nQuel est le 5ème multiple impair de 3 ? (3, 9, 15, 21, ___)", type: "number", acceptable: ["27"] },

    // ── Ex 11 — Divisible ou non ──────────────────────────────────────────
    { id: "a3-6-ep32", promptFr: "Exercice 11 — Divisible ou non\n45 est-il divisible par 3 ? (somme : 4+5=9) (oui/non)", type: "short_text", acceptable: ["oui", "Oui", "OUI"] },
    { id: "a3-6-ep33", promptFr: "Exercice 11 — Divisible ou non\n120 est-il divisible par 10 ? (oui/non)", type: "short_text", acceptable: ["oui", "Oui", "OUI"] },
    { id: "a3-6-ep34", promptFr: "Exercice 11 — Divisible ou non\n87 est-il divisible par 2 ? (oui/non)", type: "short_text", acceptable: ["non", "Non", "NON"] },
    { id: "a3-6-ep35", promptFr: "Exercice 11 — Divisible ou non\n92 est-il divisible par 3 ? (9+2=11) (oui/non)", type: "short_text", acceptable: ["non", "Non", "NON"] },

    // ── Ex 12 — Règles de divisibilité ────────────────────────────────────
    { id: "a3-6-ep36", promptFr: "Exercice 12 — Règles de divisibilité\n246 est divisible par 2. Son dernier chiffre est ___.", type: "number", acceptable: ["6"] },
    { id: "a3-6-ep37", promptFr: "Exercice 12 — Règles de divisibilité\n315 est divisible par 5. Son dernier chiffre est ___.", type: "number", acceptable: ["5"] },
    { id: "a3-6-ep38", promptFr: "Exercice 12 — Règles de divisibilité\n123 est divisible par 3. La somme de ses chiffres (1+2+3) est ___.", type: "number", acceptable: ["6"] },

    // ── Ex 13 — Chiffre manquant ──────────────────────────────────────────
    { id: "a3-6-ep39", promptFr: "Exercice 13 — Chiffre manquant\nPour que 4_ soit divisible par 2, quel chiffre peut remplacer _ ? (donne un exemple)", type: "short_text", acceptable: ["0", "2", "4", "6", "8"] },
    { id: "a3-6-ep40", promptFr: "Exercice 13 — Chiffre manquant\nPour que 7_ soit divisible par 5, quel chiffre peut remplacer _ ? (0 ou 5)", type: "short_text", acceptable: ["0", "5"] },
    { id: "a3-6-ep41", promptFr: "Exercice 13 — Chiffre manquant\nPour que 15_ soit divisible par 3, quel chiffre peut remplacer _ ? (la somme 1+5+_ doit être divisible par 3)", type: "short_text", acceptable: ["0", "3", "6", "9"] },

    // ── Ex 14 — Trouver un nombre ─────────────────────────────────────────
    { id: "a3-6-ep42", promptFr: "Exercice 14 — Trouver un nombre\nJe suis multiple de 4 et de 5. Je suis plus petit que 50 (hors 0). Qui suis-je ? (le plus petit)", type: "number", acceptable: ["20"] },
    { id: "a3-6-ep43", promptFr: "Exercice 14 — Trouver un nombre\nJe suis divisible par 3 et par 2. Je suis plus petit que 15 (hors 0). Qui suis-je ? (le plus petit)", type: "number", acceptable: ["6"] },
    { id: "a3-6-ep44", promptFr: "Exercice 14 — Trouver un nombre\nJe suis un diviseur de 36. Je suis entre 12 et 36. Qui suis-je ? (le plus petit)", type: "number", acceptable: ["18"] },

    // ── Ex 15 — Intrus ────────────────────────────────────────────────────
    { id: "a3-6-ep45", promptFr: "Exercice 15 — Intrus\n6, 12, 18, 25, 30 : quel est l'intrus ? (nombre non multiple de 6)", type: "number", acceptable: ["25"] },
    { id: "a3-6-ep46", promptFr: "Exercice 15 — Intrus\n5, 10, 15, 21, 25 : quel est l'intrus ? (nombre non multiple de 5)", type: "number", acceptable: ["21"] },

    // ── Ex 16 — Devinette ─────────────────────────────────────────────────
    { id: "a3-6-ep47", promptFr: "Exercice 16 — Devinette\nJe suis un multiple de 6. Je suis pair. Je suis entre 20 et 30. Qui suis-je ?", type: "number", acceptable: ["24"] },

    // ── Ex 17 — Multiples communs ─────────────────────────────────────────
    { id: "a3-6-ep48", promptFr: "Exercice 17 — Multiples communs\nQuel est le plus petit multiple commun de 2 et 3 (hors 0) ?", type: "number", acceptable: ["6"] },
    { id: "a3-6-ep49", promptFr: "Exercice 17 — Multiples communs\nQuel est le plus petit multiple commun de 4 et 6 (hors 0) ?", type: "number", acceptable: ["12"] },

    // ── Ex 18 — Diviseurs communs ─────────────────────────────────────────
    { id: "a3-6-ep50", promptFr: "Exercice 18 — Diviseurs communs\nQuel est le plus grand diviseur commun de 12 et 18 ?", type: "number", acceptable: ["6"] },
    { id: "a3-6-ep51", promptFr: "Exercice 18 — Diviseurs communs\nQuel est le plus grand diviseur commun de 20 et 30 ?", type: "number", acceptable: ["10"] },

    // ── Ex 19 — PGCD et PPCM ─────────────────────────────────────────────
    { id: "a3-6-ep52", promptFr: "Exercice 19 — PGCD et PPCM\nPGCD(12, 18) = ?", type: "number", acceptable: ["6"] },
    { id: "a3-6-ep53", promptFr: "Exercice 19 — PGCD et PPCM\nPPCM(4, 6) = ?", type: "number", acceptable: ["12"] },

    // ── Ex 20 — Nombres premiers ──────────────────────────────────────────
    { id: "a3-6-ep54", promptFr: "Exercice 20 — Nombres premiers\n2 est-il un nombre premier ? (oui/non)", type: "short_text", acceptable: ["oui", "Oui", "OUI"] },
    { id: "a3-6-ep55", promptFr: "Exercice 20 — Nombres premiers\n12 est-il un nombre premier ? (oui/non)", type: "short_text", acceptable: ["non", "Non", "NON"] },
    { id: "a3-6-ep56", promptFr: "Exercice 20 — Nombres premiers\nCombien de diviseurs a 18 ? (1, 2, 3, 6, 9, 18)", type: "number", acceptable: ["6"] },

    // ── Ex 21 — Complète ──────────────────────────────────────────────────
    { id: "a3-6-ep57", promptFr: "Exercice 21 — Complète\n24 = 6 × ___", type: "number", acceptable: ["4"] },
    { id: "a3-6-ep58", promptFr: "Exercice 21 — Complète\n7 est un diviseur de ___ (donne le plus petit multiple de 7 supérieur à 0)", type: "number", acceptable: ["7"] },

    // ── Ex 22 — Problèmes simples ─────────────────────────────────────────
    { id: "a3-6-ep59", promptFr: "Exercice 22 — Problème\n24 bonbons répartis également entre 6 enfants. Combien chaque enfant reçoit-il de bonbons ?", type: "number", acceptable: ["4"] },
    { id: "a3-6-ep60", promptFr: "Exercice 22 — Problème\nDes élèves se rangent par groupes de 4 sans reste. 28 élèves peuvent-ils se ranger ainsi ? (oui/non)", type: "short_text", acceptable: ["oui", "Oui", "OUI"] },

    // ── Ex 23 — Problèmes de multiples ───────────────────────────────────
    { id: "a3-6-ep61", promptFr: "Exercice 23 — Problème de multiples\nUn bus passe toutes les 10 min et un train toutes les 15 min. Dans combien de minutes passent-ils ensemble pour la première fois ? (PPCM)", type: "number", acceptable: ["30"] },
    { id: "a3-6-ep62", promptFr: "Exercice 23 — Problème de multiples\nDeux lumières clignotent toutes les 6 s et toutes les 8 s. Dans combien de secondes clignotent-elles ensemble ? (PPCM)", type: "number", acceptable: ["24"] },

    // ── Ex 24 — Problèmes de divisibilité ────────────────────────────────
    { id: "a3-6-ep63", promptFr: "Exercice 24 — Problème de divisibilité\nPeut-on partager 35 objets en groupes de 5 sans reste ? (oui/non)", type: "short_text", acceptable: ["oui", "Oui", "OUI"] },
    { id: "a3-6-ep64", promptFr: "Exercice 24 — Problème de divisibilité\n42 élèves peuvent-ils être répartis en équipes de 6 sans reste ? (oui/non)", type: "short_text", acceptable: ["oui", "Oui", "OUI"] },

    // ── Ex 28 — Calcul mental ─────────────────────────────────────────────
    { id: "a3-6-ep65", promptFr: "Exercice 28 — Calcul mental\nQuel est le 5ème multiple de 7 ? (7, 14, 21, 28, ___)", type: "number", acceptable: ["35"] },
    { id: "a3-6-ep66", promptFr: "Exercice 28 — Calcul mental\nQuel est le plus petit multiple commun de 2 et 5 (hors 0) ?", type: "number", acceptable: ["10"] },

    // ── Ex 29 — Vrai ou faux ──────────────────────────────────────────────
    { id: "a3-6-ep67", promptFr: "Exercice 29 — Vrai ou faux\nTous les multiples de 10 sont-ils divisibles par 5 ? (oui/non)", type: "short_text", acceptable: ["oui", "Oui", "OUI"] },
    { id: "a3-6-ep68", promptFr: "Exercice 29 — Vrai ou faux\nTous les nombres pairs sont-ils divisibles par 4 ? (oui/non)", type: "short_text", acceptable: ["non", "Non", "NON"] },
    { id: "a3-6-ep69", promptFr: "Exercice 29 — Vrai ou faux\n1 est-il un nombre premier ? (oui/non)", type: "short_text", acceptable: ["non", "Non", "NON"] },

    // ── PGCD/PPCM Ex 1 — Reconnaître ─────────────────────────────────────
    { id: "a3-6-ep70", promptFr: "PGCD/PPCM — Reconnaître\nPour partager des objets en parts égales, utilise-t-on le PGCD ou le PPCM ?", type: "short_text", acceptable: ["PGCD", "pgcd"] },
    { id: "a3-6-ep71", promptFr: "PGCD/PPCM — Reconnaître\nPour trouver quand deux événements arrivent ensemble, utilise-t-on le PGCD ou le PPCM ?", type: "short_text", acceptable: ["PPCM", "ppcm"] },

    // ── PGCD Ex 3 — Trouver le PGCD ──────────────────────────────────────
    { id: "a3-6-ep72", promptFr: "PGCD — Trouver\nPGCD(20, 30) = ?", type: "number", acceptable: ["10"] },
    { id: "a3-6-ep73", promptFr: "PGCD — Trouver\nPGCD(24, 36) = ?", type: "number", acceptable: ["12"] },
    { id: "a3-6-ep74", promptFr: "PGCD — Trouver\nPGCD(45, 60) = ?", type: "number", acceptable: ["15"] },

    // ── PGCD Ex 4 — Compléter ─────────────────────────────────────────────
    { id: "a3-6-ep75", promptFr: "PGCD — Compléter\nLe PGCD de 8 et 12 est ___", type: "number", acceptable: ["4"] },
    { id: "a3-6-ep76", promptFr: "PGCD — Compléter\nLe PGCD de 15 et 20 est ___", type: "number", acceptable: ["5"] },
    { id: "a3-6-ep77", promptFr: "PGCD — Compléter\nLe PGCD de 9 et 27 est ___", type: "number", acceptable: ["9"] },

    // ── PGCD Ex 5 — Vrai ou faux ──────────────────────────────────────────
    { id: "a3-6-ep78", promptFr: "PGCD — Vrai ou faux\nLe PGCD de deux nombres premiers différents est-il toujours 1 ? (oui/non)", type: "short_text", acceptable: ["oui", "Oui", "OUI"] },
    { id: "a3-6-ep79", promptFr: "PGCD — Vrai ou faux\nDeux nombres pairs ont-ils toujours un PGCD pair ? (oui/non)", type: "short_text", acceptable: ["oui", "Oui", "OUI"] },

    // ── PGCD Ex 6 — Diviseurs communs ────────────────────────────────────
    { id: "a3-6-ep80", promptFr: "PGCD — Diviseurs communs\nQuel est le plus grand diviseur commun de 18 et 24 ?", type: "number", acceptable: ["6"] },
    { id: "a3-6-ep81", promptFr: "PGCD — Diviseurs communs\nQuel est le plus grand diviseur commun de 14 et 21 ?", type: "number", acceptable: ["7"] },

    // ── PGCD Ex 8 — Algorithme d'Euclide ─────────────────────────────────
    { id: "a3-6-ep82", promptFr: "PGCD — Algorithme d'Euclide\nPGCD(48, 18) = ? (48 = 2 × 18 + 12 ; 18 = 1 × 12 + 6 ; 12 = 2 × 6 + 0)", type: "number", acceptable: ["6"] },
    { id: "a3-6-ep83", promptFr: "PGCD — Algorithme d'Euclide\nPGCD(96, 72) = ? (96 = 1 × 72 + 24 ; 72 = 3 × 24 + 0)", type: "number", acceptable: ["24"] },
    { id: "a3-6-ep84", promptFr: "PGCD — Algorithme d'Euclide\nPGCD(84, 30) = ? (84 = 2 × 30 + 24 ; 30 = 1 × 24 + 6 ; 24 = 4 × 6 + 0)", type: "number", acceptable: ["6"] },

    // ── PGCD Ex 9 — Problèmes de PGCD ────────────────────────────────────
    { id: "a3-6-ep85", promptFr: "PGCD — Problème\n24 pommes et 36 oranges à répartir en paquets identiques sans reste. Combien de fruits au maximum par paquet ?", type: "number", acceptable: ["12"] },
    { id: "a3-6-ep86", promptFr: "PGCD — Problème\n18 garçons et 24 filles doivent former des équipes identiques sans reste. Combien de membres par équipe au maximum ?", type: "number", acceptable: ["6"] },

    // ── PGCD Ex 10 — Simplification de fractions ─────────────────────────
    { id: "a3-6-ep87", promptFr: "PGCD — Simplification\nSimplifie 12/18 par le PGCD(12,18)=6. Donne le numérateur simplifié.", type: "number", acceptable: ["2"] },
    { id: "a3-6-ep88", promptFr: "PGCD — Simplification\nSimplifie 20/30 par le PGCD(20,30)=10. Donne le numérateur simplifié.", type: "number", acceptable: ["2"] },
    { id: "a3-6-ep89", promptFr: "PGCD — Simplification\nSimplifie 42/56 par le PGCD(42,56)=14. Donne le numérateur simplifié.", type: "number", acceptable: ["3"] },

    // ── PPCM Ex 12 — Trouver le PPCM ─────────────────────────────────────
    { id: "a3-6-ep90", promptFr: "PPCM — Trouver\nPPCM(3, 4) = ?", type: "number", acceptable: ["12"] },
    { id: "a3-6-ep91", promptFr: "PPCM — Trouver\nPPCM(5, 6) = ?", type: "number", acceptable: ["30"] },
    { id: "a3-6-ep92", promptFr: "PPCM — Trouver\nPPCM(8, 12) = ?", type: "number", acceptable: ["24"] },
    { id: "a3-6-ep93", promptFr: "PPCM — Trouver\nPPCM(9, 15) = ?", type: "number", acceptable: ["45"] },

    // ── PPCM Ex 13 — Compléter ────────────────────────────────────────────
    { id: "a3-6-ep94", promptFr: "PPCM — Compléter\nLe PPCM de 2 et 3 est ___", type: "number", acceptable: ["6"] },
    { id: "a3-6-ep95", promptFr: "PPCM — Compléter\nLe PPCM de 4 et 6 est ___", type: "number", acceptable: ["12"] },
    { id: "a3-6-ep96", promptFr: "PPCM — Compléter\nLe PPCM de 10 et 15 est ___", type: "number", acceptable: ["30"] },

    // ── PPCM Ex 15 — PPCM par décomposition ──────────────────────────────
    { id: "a3-6-ep97", promptFr: "PPCM — Par décomposition\nPPCM(12, 18) = ?", type: "number", acceptable: ["36"] },
    { id: "a3-6-ep98", promptFr: "PPCM — Par décomposition\nPPCM(15, 20) = ?", type: "number", acceptable: ["60"] },
    { id: "a3-6-ep99", promptFr: "PPCM — Par décomposition\nPPCM(24, 30) = ?", type: "number", acceptable: ["120"] },

    // ── PPCM Ex 16 — Vrai ou faux ─────────────────────────────────────────
    { id: "a3-6-ep100", promptFr: "PPCM — Vrai ou faux\nLe PPCM est-il toujours un multiple des deux nombres ? (oui/non)", type: "short_text", acceptable: ["oui", "Oui", "OUI"] },
    { id: "a3-6-ep101", promptFr: "PPCM — Vrai ou faux\nLe PPCM peut-il être plus petit qu'un des deux nombres ? (oui/non)", type: "short_text", acceptable: ["non", "Non", "NON"] },
    { id: "a3-6-ep102", promptFr: "PPCM — Vrai ou faux\nDeux nombres premiers différents ont pour PPCM leur produit. (oui/non)", type: "short_text", acceptable: ["oui", "Oui", "OUI"] },

    // ── PPCM Ex 17 — Problèmes de PPCM ──────────────────────────────────
    { id: "a3-6-ep103", promptFr: "PPCM — Problème\nUn feu clignote toutes les 6 s, un autre toutes les 8 s. Dans combien de secondes clignotent-ils ensemble ? (PPCM)", type: "number", acceptable: ["24"] },
    { id: "a3-6-ep104", promptFr: "PPCM — Problème\nUn bus passe toutes les 12 min et un train toutes les 18 min. Dans combien de minutes passent-ils ensemble ? (PPCM)", type: "number", acceptable: ["36"] },

    // ── PPCM Ex 18 — Calendrier ───────────────────────────────────────────
    { id: "a3-6-ep105", promptFr: "PPCM — Calendrier\nLéa fait du sport tous les 4 jours, Marc tous les 6 jours. Dans combien de jours feront-ils du sport ensemble ? (PPCM)", type: "number", acceptable: ["12"] },
    { id: "a3-6-ep106", promptFr: "PPCM — Calendrier\nDeux machines démarrent toutes les 15 min et toutes les 20 min. Dans combien de minutes démarrent-elles ensemble ? (PPCM)", type: "number", acceptable: ["60"] },

    // ── Mélange Ex 20 — Comparer PGCD et PPCM ────────────────────────────
    { id: "a3-6-ep107", promptFr: "Mélange — Comparer\nPGCD(6, 8) = ?", type: "number", acceptable: ["2"] },
    { id: "a3-6-ep108", promptFr: "Mélange — Comparer\nPPCM(6, 8) = ?", type: "number", acceptable: ["24"] },
    { id: "a3-6-ep109", promptFr: "Mélange — Comparer\nPGCD(9, 15) = ?", type: "number", acceptable: ["3"] },
    { id: "a3-6-ep110", promptFr: "Mélange — Comparer\nPPCM(9, 15) = ?", type: "number", acceptable: ["45"] },

    // ── Mélange Ex 21 — Tableau ───────────────────────────────────────────
    { id: "a3-6-ep111", promptFr: "Mélange — Tableau\nPGCD(6, 9) = ?", type: "number", acceptable: ["3"] },
    { id: "a3-6-ep112", promptFr: "Mélange — Tableau\nPPCM(6, 9) = ?", type: "number", acceptable: ["18"] },
    { id: "a3-6-ep113", promptFr: "Mélange — Tableau\nPGCD(10, 15) = ?", type: "number", acceptable: ["5"] },
    { id: "a3-6-ep114", promptFr: "Mélange — Tableau\nPPCM(10, 15) = ?", type: "number", acceptable: ["30"] },

    // ── Mélange Ex 22 — Devinettes ────────────────────────────────────────
    { id: "a3-6-ep115", promptFr: "Mélange — Devinette\nJe suis le PGCD de 24 et 36. Qui suis-je ?", type: "number", acceptable: ["12"] },
    { id: "a3-6-ep116", promptFr: "Mélange — Devinette\nJe suis le PPCM de 4 et 6. Qui suis-je ?", type: "number", acceptable: ["12"] },
    { id: "a3-6-ep117", promptFr: "Mélange — Devinette\nJe suis le plus grand diviseur commun de 18 et 30. Qui suis-je ?", type: "number", acceptable: ["6"] },

    // ── Mélange Ex 23 — Intrus ────────────────────────────────────────────
    { id: "a3-6-ep118", promptFr: "Mélange — Intrus\n12, 24, 36, 50 : quel est l'intrus ? (non multiple de 12)", type: "number", acceptable: ["50"] },
    { id: "a3-6-ep119", promptFr: "Mélange — Intrus\n6, 12, 18, 25 : quel est l'intrus ? (non multiple de 6)", type: "number", acceptable: ["25"] },

    // ── Mélange Ex 24 — Trous ─────────────────────────────────────────────
    { id: "a3-6-ep120", promptFr: "Mélange — Trous\nLe PPCM de 3 et 5 est ___", type: "number", acceptable: ["15"] },
    { id: "a3-6-ep121", promptFr: "Mélange — Trous\nLe PGCD de 18 et 27 est ___", type: "number", acceptable: ["9"] },

    // ── Mélange Ex 25 — Calcul mental ────────────────────────────────────
    { id: "a3-6-ep122", promptFr: "Mélange — Calcul mental\nPGCD(10, 20) = ?", type: "number", acceptable: ["10"] },
    { id: "a3-6-ep123", promptFr: "Mélange — Calcul mental\nPPCM(3, 7) = ?", type: "number", acceptable: ["21"] },
    { id: "a3-6-ep124", promptFr: "Mélange — Calcul mental\nPGCD(15, 25) = ?", type: "number", acceptable: ["5"] },

    // ── Formule PGCD × PPCM = a × b ──────────────────────────────────────
    { id: "a3-6-ep125", promptFr: "Formule\nPGCD(8, 20) = 4. Calcule PPCM(8, 20) avec la formule PGCD × PPCM = a × b.", type: "number", acceptable: ["40"] },
    { id: "a3-6-ep126", promptFr: "Formule\nPGCD(6, 9) = 3. Calcule PPCM(6, 9) avec la formule.", type: "number", acceptable: ["18"] },
  ],
  poolSize: 10,
};
