import type { GrammarLesson } from "../../grammar-data";
import { A1_GR_L14 } from "./grammaire-r3.1";

/** Unité 23 — L'article partitif (G4.3) */
export const A1_GR_ARTICLE_PARTITIF: GrammarLesson = {
  slug: "a1-gr-article-partitif",
  code: "G4.3",
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
    ...A1_GR_L14.theory,
  ],
  exercises: [],
};
