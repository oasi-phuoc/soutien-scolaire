import type { GrammarLesson } from "../../grammar-data";

/** Unité 26 — Les adjectifs possessifs (G3.6) */
export const A1_GR_L19: GrammarLesson = {
  slug: "a1-gr-l19",
  code: "G3.6",
  level: "A1",
  title: "Les adjectifs possessifs",
  theory: [
    {
      type: "heading",
      text: "Utilisation",
    },
    {
      type: "text",
      items: [
        "Pour indiquer une possession. → C'est ma veste.",
        "Pour indiquer une relation entre personnes. → Je te présente mon frère.",
        "Pour indiquer une relation entre des choses/lieux et des personnes. → Mon appartement est à Lyon.",
      ],
      allBullets: true,
    },
    {
      type: "heading",
      text: "Formes",
    },
    {
      type: "text",
      items: [
        "L'adjectif possessif se place devant le nom et s'accorde avec lui.",
        "La forme dépend du possesseur et du genre/nombre de l'objet possédé.",
        "veste (fs) → ma veste (possesseur : je) ; pantalon (ms) → son pantalon (possesseur : il/elle).",
      ],
      allBullets: true,
    },
    {
      type: "grid",
      headers: ["Possesseur", "Masculin singulier", "Féminin singulier", "Pluriel (m. et f.)"],
      boldFirstCol: true,
      rows: [
        ["Je", "mon (manteau)", "ma (veste)", "mes (vêtements)"],
        ["Tu", "ton (manteau)", "ta (veste)", "tes (vêtements)"],
        ["Il / Elle", "son (manteau)", "sa (veste)", "ses (vêtements)"],
        ["Nous", "notre (manteau)", "notre (veste)", "nos (vêtements)"],
        ["Vous", "votre (manteau)", "votre (veste)", "vos (vêtements)"],
        ["Ils / Elles", "leur (manteau)", "leur (veste)", "leurs (vêtements)"],
      ],
    },
    {
      type: "note",
      text: "Devant un nom féminin singulier qui commence par une voyelle ou un h muet, on utilise {a}mon{/a}, {a}ton{/a}, {a}son{/a} (pas ma/ta/sa). → mon écharpe ; ton école ; son histoire. On ne peut alors pas savoir le genre d'après l'adjectif seul.",
    },
    {
      type: "note",
      text: "Quand {a}on{/a} remplace {a}nous{/a}, on utilise {a}notre{/a} et {a}nos{/a}. → On invite souvent notre voisin et nos amis à dîner.",
    },
    {
      type: "heading",
      text: "Prononciation",
    },
    {
      type: "text",
      items: [
        "Liaison devant une voyelle ou un h muet. → mes enfants ; ton école ; vos histoires ; leurs affaires.",
      ],
      noBulletItems: [0],
    },
  ],
  exercises: [
    {
      type: "qcm",
      title: "Possessifs",
      instruction: "Choisissez la forme correcte.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "C'est ___ veste. (je)", choices: ["ma", "mon", "mes"], correctIdx: 0 },
        { sentence: "C'est ___ chapeau. (je)", choices: ["mon", "ma", "mes"], correctIdx: 0 },
        { sentence: "Je te présente ___ frère. (je)", choices: ["mon", "ma", "mes"], correctIdx: 0 },
        { sentence: "___ appartement est à Lyon. (je)", choices: ["Mon", "Ma", "Mes"], correctIdx: 0 },
        { sentence: "Elle a ___ pantalon.", choices: ["son", "sa", "ses"], correctIdx: 0 },
        { sentence: "C'est ___ écharpe. (je, fs + voyelle)", choices: ["mon", "ma", "mes"], correctIdx: 0 },
        { sentence: "On invite ___ voisin. (on = nous)", choices: ["notre", "nos", "leur"], correctIdx: 0 },
        { sentence: "On invite ___ amis. (on = nous)", choices: ["nos", "notre", "leurs"], correctIdx: 0 },
        { sentence: "Voici ___ vêtements. (ils)", choices: ["leurs", "leur", "ses"], correctIdx: 0 },
        { sentence: "Voici ___ manteau. (vous)", choices: ["votre", "vos", "notre"], correctIdx: 0 },
      ],
    },
    {
      type: "fill",
      title: "Complétez",
      instruction: "Écrivez l'adjectif possessif correct.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "C'est ___ veste. (je)", hint: "fs", answer: "ma" },
        { sentence: "C'est ___ chapeau. (je)", hint: "ms", answer: "mon" },
        { sentence: "Voici ___ vêtements. (je)", hint: "pluriel", answer: "mes" },
        { sentence: "C'est ___ école. (tu, fs + voyelle)", hint: "mon/ton/son", answer: "ton" },
        { sentence: "C'est ___ histoire. (elle)", hint: "fs + voyelle", answer: "son" },
        { sentence: "Voici ___ manteau. (nous)", hint: "notre/nos", answer: "notre" },
        { sentence: "Voici ___ amis. (nous)", hint: "notre/nos", answer: "nos" },
        { sentence: "Voici ___ veste. (ils)", hint: "leur/leurs", answer: "leur" },
        { sentence: "Voici ___ affaires. (elles)", hint: "leur/leurs", answer: "leurs" },
        { sentence: "On invite ___ voisin. (on = nous)", hint: "notre", answer: "notre" },
      ],
    },
  ],
};
