import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A5_2_LESSON: MathSubmoduleLesson = {
    submoduleId: "A5-2",
    submoduleCode: "A5.2",
    theory: {
      title: { fr: "Suite de nombres à virgule", en: "Sequences of decimal numbers", ar: "متتالية أعداد عشرية", fa: "دنباله اعداد اعشاری", ti: "ተኸታተልቲ ቁጽሪ ቪርጉላ", uk: "Послідовності десяткових чисел" },
      blocks: [
        { type: "heading", fr: "Trouver le pas d'une suite", black: true },
        { type: "highlight", fr: "Principe" },
        {
          type: "section", labelFr: "", itemsFr: [
            "1. Repérer si la suite est **croissante** (augmente) ou **décroissante** (diminue).",
            "2. Calculer le **pas** (écart entre deux termes consécutifs).",
            "3. Appliquer le pas pour trouver les termes manquants.",
          ],
        },
        { type: "plain", fr: "" },
        { type: "heading", fr: "Cas 1 — Deux termes consécutifs connus", black: false },
        { type: "highlight", fr: "Suite croissante" },
        {
          type: "section", labelFr: "", itemsFr: [
            "Pas = terme suivant − terme précédent",
            "Terme manquant = terme connu + pas",
          ],
        },
        { type: "example", fr: "2,5 ; ___ ; 3,5 ; 4  →  pas = 4 − 3,5 = 0,5  →  terme manquant = 2,5 + 0,5 = 3,0" },
        { type: "highlight", fr: "Suite décroissante" },
        {
          type: "section", labelFr: "", itemsFr: [
            "Pas = terme précédent − terme suivant",
            "Terme manquant = terme connu − pas",
          ],
        },
        { type: "example", fr: "7,25 ; 7 ; ___ ; 6,5  →  pas = 7,25 − 7 = 0,25  →  terme manquant = 7 − 0,25 = 6,75" },
        { type: "plain", fr: "" },
        { type: "heading", fr: "Cas 2 — Pas de termes consécutifs", black: false },
        {
          type: "section", labelFr: "", itemsFr: [
            "Soustraire les deux termes connus : grand − petit = écart total",
            "Diviser par le nombre d'espaces entre eux = pas",
          ],
        },
        { type: "example", fr: "___ ; 7,2 ; ___ ; 9,6  →  (9,6 − 7,2) ÷ 2 = 1,2  →  termes : 6,0 et 8,4" },
        { type: "note", fr: "Le nombre d'espaces = nombre de termes manquants + 1" },
      ],
      paragraphs: { fr: [] },
    },
    exercises: [
      { id: "a5-2-e1", promptFr: "Suite : __ ; __ ; 3,50 ; __ ; 6,00 ; 7,25 ; __. Quel est le 7ème terme ?", type: "short_text", acceptable: ["8,50", "8.50", "8,5", "8.5"] },
      { id: "a5-2-e2", promptFr: "Suite : __ ; 1,45 ; 1,50 ; __ ; __ ; __ ; 1,70. Quel est le terme après 1,50 ?", type: "short_text", acceptable: ["1,55", "1.55"] },
      { id: "a5-2-e3", promptFr: "Suite décroissante : __ ; 5,10 ; __ ; 5,00 ; 4,95 ; __ ; __. Quel est le 1er terme ?", type: "short_text", acceptable: ["5,15", "5.15"] },
      { id: "a5-2-e4", promptFr: "Suite : 2,80 ; __ ; __ ; __ ; 7,20 ; __ ; 9,40. Quel est le 2ème terme ?", type: "short_text", acceptable: ["3,90", "3.90", "3,9", "3.9"] },
      { id: "a5-2-e5", promptFr: "Suite décroissante : 9,35 ; __ ; __ ; __ ; 4,35 ; __ ; 1,85. Quel est le 6ème terme ?", type: "short_text", acceptable: ["3,10", "3.10", "3,1", "3.1"] },
    ],
    exercisePool: [
      { id: "a5-2-p1", promptFr: "Suite : __ ; __ ; 3,50 ; __ ; 6,00 ; 7,25 ; __. Quel est le 1er terme ?", type: "short_text", acceptable: ["1,00", "1.00", "1", "1,0", "1.0"] },
      { id: "a5-2-p2", promptFr: "Suite : __ ; __ ; 3,50 ; __ ; 6,00 ; 7,25 ; __. Quel est le 4ème terme ?", type: "short_text", acceptable: ["4,75", "4.75"] },
      { id: "a5-2-p3", promptFr: "Suite : __ ; 1,45 ; 1,50 ; __ ; __ ; __ ; 1,70. Quel est le terme avant 1,45 ?", type: "short_text", acceptable: ["1,40", "1.40", "1,4", "1.4"] },
      { id: "a5-2-p4", promptFr: "Suite : __ ; 1,45 ; 1,50 ; __ ; __ ; __ ; 1,70. Quel est le terme après 1,50 ?", type: "short_text", acceptable: ["1,55", "1.55"] },
      { id: "a5-2-p5", promptFr: "Suite décroissante : __ ; 5,10 ; __ ; 5,00 ; 4,95 ; __ ; __. Quel est le 7ème terme ?", type: "short_text", acceptable: ["4,85", "4.85"] },
      { id: "a5-2-p6", promptFr: "Suite décroissante : __ ; 5,10 ; __ ; 5,00 ; 4,95 ; __ ; __. Quel est le 3ème terme ?", type: "short_text", acceptable: ["5,05", "5.05"] },
      { id: "a5-2-p7", promptFr: "Suite : 2,80 ; __ ; __ ; __ ; 7,20 ; __ ; 9,40. Quel est le 6ème terme ?", type: "short_text", acceptable: ["8,30", "8.30", "8,3", "8.3"] },
      { id: "a5-2-p8", promptFr: "Suite décroissante : 9,35 ; __ ; __ ; __ ; 4,35 ; __ ; 1,85. Quel est le 2ème terme ?", type: "short_text", acceptable: ["8,10", "8.10", "8,1", "8.1"] },
      { id: "a5-2-p9", promptFr: "Suite : __ ; __ ; __ ; 5,50 ; 6,85 ; __ ; 9,55. Quel est le 1er terme ?", type: "short_text", acceptable: ["1,45", "1.45"] },
      { id: "a5-2-p10", promptFr: "Suite : __ ; __ ; __ ; 5,50 ; 6,85 ; __ ; 9,55. Quel est le 6ème terme ?", type: "short_text", acceptable: ["8,20", "8.20", "8,2", "8.2"] },
      { id: "a5-2-p11", promptFr: "Suite décroissante : __ ; 4,35 ; __ ; 3,25 ; 2,70 ; __ ; __. Quel est le 1er terme ?", type: "short_text", acceptable: ["4,90", "4.90", "4,9", "4.9"] },
      { id: "a5-2-p12", promptFr: "Suite décroissante : __ ; 4,35 ; __ ; 3,25 ; 2,70 ; __ ; __. Quel est le dernier terme ?", type: "short_text", acceptable: ["1,60", "1.60", "1,6", "1.6"] },
      { id: "a5-2-p13", promptFr: "Suite décroissante : 7,85 ; __ ; __ ; __ ; __ ; 5,85 ; 5,45. Quel est le 2ème terme ?", type: "short_text", acceptable: ["7,45", "7.45"] },
      { id: "a5-2-p14", promptFr: "Suite décroissante : 7,85 ; __ ; __ ; __ ; __ ; 5,85 ; 5,45. Quel est le 5ème terme ?", type: "short_text", acceptable: ["6,25", "6.25"] },
      { id: "a5-2-p15", promptFr: "Suite : __ ; __ ; __ ; 4,15 ; 5,20 ; 6,25 ; __. Quel est le dernier terme ?", type: "short_text", acceptable: ["7,30", "7.30", "7,3", "7.3"] },
      { id: "a5-2-p16", promptFr: "Suite : __ ; __ ; __ ; 4,15 ; 5,20 ; 6,25 ; __. Quel est le 1er terme ?", type: "short_text", acceptable: ["1,00", "1.00", "1", "1,0", "1.0"] },
      { id: "a5-2-p17", promptFr: "Suite : __ ; __ ; 4,90 ; 4,95 ; 5,00 ; __ ; __. Quel est le 1er terme ?", type: "short_text", acceptable: ["4,80", "4.80", "4,8", "4.8"] },
      { id: "a5-2-p18", promptFr: "Suite décroissante : 3,55 ; __ ; __ ; 3,40 ; __ ; 3,30. Quel est le 5ème terme ?", type: "short_text", acceptable: ["3,35", "3.35"] },
      { id: "a5-2-p19", promptFr: "Suite décroissante : 3,55 ; __ ; __ ; 3,40 ; __ ; 3,30. Quel est le 2ème terme ?", type: "short_text", acceptable: ["3,50", "3.50", "3,5", "3.5"] },
      { id: "a5-2-p20", promptFr: "Suite décroissante : 9,25 ; __ ; __ ; __ ; 5,05 ; __ ; 2,95. Quel est le 6ème terme ?", type: "short_text", acceptable: ["4,00", "4.00", "4", "4,0", "4.0"] },
      { id: "a5-2-p21", promptFr: "Suite décroissante : 9,25 ; __ ; __ ; __ ; 5,05 ; __ ; 2,95. Quel est le 2ème terme ?", type: "short_text", acceptable: ["8,20", "8.20", "8,2", "8.2"] },
    ],
    poolSize: 5,
  };
