import type { GrammarLesson } from "../../grammar-data";
import { A2_GR_PASSE_OU_IMPARFAIT } from "./grammaire-r6.3-passe-imparfait";

/** G8.7 — L'imparfait / Le passé composé, enrichi avec G19.25 */
export const A1_GR_IMPARFAIT_PASSE_COMPOSE: GrammarLesson = {
  slug: "a1-gr-imparfait-passe-compose",
  code: "G8.7",
  level: "A1",
  title: "L'imparfait / Le passé composé",
  theory: [
    {
      type: "heading",
      text: "Utilisation",
    },
    {
      type: "plain_list",
      items: [
        "Pour raconter un événement passé, on combine souvent l'imparfait et le passé composé.",
        "Exemple : Nous étions dans le bus, il y avait beaucoup de monde, je lisais. Soudain, le chauffeur a freiné et elle est tombée sur moi !",
      ],
      allBullets: true,
    },
    {
      type: "highlight",
      label: "L'imparfait",
      items: [
        "Circonstances, décor, description. → Nous étions dans le bus ; j'étais assis ; Chloé était debout.",
        "Habitude passée. → Avant, j'allais au bureau en voiture.",
        "Action en cours : {a}être en train de{/a} à l'imparfait. → J'étais en train de lire (= je lisais) quand elle est tombée.",
      ],
    },
    {
      type: "highlight",
      label: "Le passé composé",
      items: [
        "Action avec un début et une fin. → Soudain, le chauffeur a freiné et Chloé est tombée sur moi.",
        "Action qui met fin à une habitude. → Un jour, j'ai eu un accident.",
      ],
    },
    {
      type: "heading",
      text: "Expressions de temps",
    },
    {
      type: "plain_list",
      items: [
        "Souvent avec l'imparfait : {a}pendant que{/a}. → Elle est tombée sur moi pendant que je lisais.",
        "Souvent avec le passé composé : {a}quand, tout à coup, soudain, brusquement, à ce moment-là, un jour…{/a} → Soudain, le chauffeur a freiné.",
      ],
      allBullets: true,
    },
    {
      type: "heading",
      text: "Prononciation",
    },
    {
      type: "plain_list",
      items: [
        "Ne pas confondre passé composé et imparfait des verbes en {a}-er{/a} avec {a}je{/a}. → J'ai marché. ≠ Je marchais.",
      ],
      noBulletItems: [0],
    },
    ...A2_GR_PASSE_OU_IMPARFAIT.theory,
  ],
  exercises: [],
};
