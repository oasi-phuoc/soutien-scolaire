import type { GrammarLesson } from "../../grammar-data";

/** Unité 23 — L'article partitif (G3.3) */
export const A1_GR_ARTICLE_PARTITIF: GrammarLesson = {
  slug: "a1-gr-article-partitif",
  code: "G3.3",
  level: "A1",
  title: "L'article partitif",
  theory: [
    {
      type: "heading",
      text: "Utilisation",
    },
    {
      type: "plain_list",
      items: [
        "L'article partitif indique une quantité indéterminée (non comptable), pour des choses concrètes ou abstraites.",
        "Concret : {a}du{/a} poulet ; {a}de la{/a} pizza ; {a}de l'{/a}eau.",
        "Abstrait : {a}du{/a} courage ; {a}de la{/a} chance ; {a}de l'{/a}amour.",
        "Avec {a}faire{/a} pour parler d'un sport ou d'une activité artistique. → faire du sport ; faire de la danse.",
      ],
      allBullets: true,
    },
    {
      type: "plain_list",
      items: [
        "Comparaison : {a}un{/a} poulet (= le poulet entier) ≠ {a}du{/a} poulet (= une part) ; {a}une{/a} pizza ≠ {a}de la{/a} pizza.",
      ],
      noBulletItems: [0],
    },
    {
      type: "heading",
      text: "Formes",
    },
    {
      type: "grid",
      headers: ["", "Devant une consonne", "Devant une voyelle / h muet"],
      boldFirstCol: true,
      rows: [
        ["Masculin singulier", "Je bois du café.", "Il fait de l'aviron."],
        ["Féminin singulier", "Il mange de la soupe.", "Il faut de l'huile."],
      ],
    },
    {
      type: "highlight",
      label: "Négation",
      items: [
        "À la forme négative, le partitif est remplacé par {a}de{/a} / {a}d'{/a}. La distinction masculin/féminin disparaît.",
        "Il y a du vent. → Il n'y a pas de vent.",
        "Elle a de la chance. → Elle n'a pas de chance.",
        "Ils ont de l'expérience. → Ils n'ont pas d'expérience.",
      ],
      noBulletItems: [1, 2, 3],
    },
    {
      type: "note",
      text: "Avec le verbe {a}être{/a} à la négative, le partitif ne change pas. → C'est du sucre. / Ce n'est pas du sucre.",
    },
  ],
  exercises: [
    {
      type: "qcm",
      title: "Article partitif",
      instruction: "Choisissez la forme correcte.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "Je mange ___ poulet. (une part)", choices: ["du", "un", "le"], correctIdx: 0 },
        { sentence: "Je mange ___ pizza. (une part)", choices: ["de la", "une", "la"], correctIdx: 0 },
        { sentence: "Je bois ___ eau.", choices: ["de l'", "du", "de la"], correctIdx: 0 },
        { sentence: "Il faut ___ courage.", choices: ["du", "de la", "de l'"], correctIdx: 0 },
        { sentence: "Elle a ___ chance.", choices: ["de la", "du", "de l'"], correctIdx: 0 },
        { sentence: "Je fais ___ sport.", choices: ["du", "de la", "le"], correctIdx: 0 },
        { sentence: "Elle fait ___ danse.", choices: ["de la", "du", "la"], correctIdx: 0 },
        { sentence: "Il n'y a pas ___ vent.", choices: ["de", "du", "de la"], correctIdx: 0 },
        { sentence: "Elle n'a pas ___ chance.", choices: ["de", "de la", "du"], correctIdx: 0 },
        { sentence: "Ce n'est pas ___ sucre.", choices: ["du", "de", "de la"], correctIdx: 0 },
      ],
    },
    {
      type: "fill",
      title: "Complétez avec le partitif",
      instruction: "Écrivez du, de la, de l', de ou d'.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "Je bois ___ café.", hint: "ms + consonne", answer: "du" },
        { sentence: "Il mange ___ soupe.", hint: "fs + consonne", answer: "de la" },
        { sentence: "Il faut ___ huile.", hint: "fs + voyelle", answer: "de l'" },
        { sentence: "Il fait ___ aviron.", hint: "ms + voyelle", answer: "de l'" },
        { sentence: "Ils ont ___ amour.", hint: "ms + voyelle", answer: "de l'" },
        { sentence: "Il n'y a pas ___ vent.", hint: "négation", answer: "de" },
        { sentence: "Ils n'ont pas ___ expérience.", hint: "négation + voyelle", answer: "d'" },
        { sentence: "Ce n'est pas ___ sucre.", hint: "être → inchangé", answer: "du" },
        { sentence: "Je mange ___ pizza. (une part)", hint: "fs", answer: "de la" },
        { sentence: "faire ___ sport", hint: "faire + activité", answer: "du" },
      ],
    },
  ],
};
