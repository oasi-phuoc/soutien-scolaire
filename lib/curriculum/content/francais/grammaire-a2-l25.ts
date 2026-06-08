import type { GrammarLesson } from "../../grammar-data";

export const A2_GR_L25: GrammarLesson = {
  slug: "a2-gr-l25",
  code: "G.39",
  level: "A2",
  title: "La négation — ne…pas, ne…plus, ne…que",
  theory: [
    { type: "heading", text: "Les formes de négation courantes" },
    {
      type: "grid",
      headers: ["Négation", "Sens", "Exemple"],
      boldFirstCol: true,
      rows: [
        ["{a}ne … pas{/a}", "action inexistante / absente", "Je {a}ne{/a} parle {a}pas{/a} espagnol."],
        ["{a}ne … plus{/a}", "action qui a cessé", "Il {a}ne{/a} travaille {a}plus{/a} ici."],
        ["{a}ne … que{/a}", "restriction (= seulement)", "Je {a}ne{/a} mange {a}que{/a} des légumes."],
      ],
    },
    { type: "heading", text: "Ne … pas", sub: true, accent: true },
    {
      type: "grid",
      headers: ["Temps", "Structure", "Exemple"],
      boldFirstCol: true,
      rows: [
        ["Présent", "ne + verbe + pas", "Je {a}ne{/a} mange {a}pas{/a}."],
        ["Passé composé", "ne + auxiliaire + pas + participe", "Je {a}n'{/a}ai {a}pas{/a} mangé."],
        ["Futur proche", "ne + aller + pas + infinitif", "Je {a}ne{/a} vais {a}pas{/a} manger."],
        ["Infinitif", "ne pas + infinitif (ensemble)", "{a}Ne pas{/a} manger avant 12h."],
      ],
    },
    { type: "heading", text: "Ne … plus", sub: true, accent: true },
    {
      type: "plain_list",
      items: [
        "{a}ne … plus{/a} signifie que l'action s'est arrêtée.",
        "Implique qu'avant c'était le cas, maintenant non.",
      ],
    },
    {
      type: "grid",
      headers: ["Affirmatif (avant)", "Négatif (maintenant)"],
      rows: [
        ["Je fume.", "Je {a}ne{/a} fume {a}plus{/a}."],
        ["Il habite ici.", "Il {a}n'{/a}habite {a}plus{/a} ici."],
        ["Elle boit du café.", "Elle {a}ne{/a} boit {a}plus{/a} de café."],
      ],
    },
    { type: "heading", text: "Ne … que (restriction)", sub: true, accent: true },
    {
      type: "plain_list",
      items: [
        "{a}ne … que{/a} = seulement. Ce n'est {a}pas une vraie négation{/a} — le sens est positif mais limité.",
        "que se place juste avant l'élément restreint.",
      ],
    },
    {
      type: "grid",
      headers: ["Avec seulement", "Avec ne … que"],
      rows: [
        ["Je mange seulement des légumes.", "Je {a}ne{/a} mange {a}que{/a} des légumes."],
        ["Il reste seulement 5 minutes.", "Il {a}ne{/a} reste {a}que{/a} 5 minutes."],
        ["Elle a seulement 20 ans.", "Elle {a}n'{/a}a {a}que{/a} 20 ans."],
      ],
    },
    {
      type: "highlight",
      label: "Articles après la négation",
      items: [
        "Avec {a}ne…pas / ne…plus{/a} : un/une/des/du/de la → {a}de{/a} (ou d' devant voyelle).",
        "Je mange du pain → Je {a}ne{/a} mange {a}pas de{/a} pain.",
        "Avec {a}ne…que{/a} : l'article ne change pas.",
        "Je mange {a}que du{/a} pain. (que garde l'article)",
      ],
      noBulletItems: [0],
    },
  ],
  exercises: [],
};
