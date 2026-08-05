import type { GrammarLesson } from "../../grammar-data";
import { A1_CONJ_L08 } from "./grammaire-r2.1";

/** Unité 22 — Les articles contractés (G4.2) */
export const A1_GR_ARTICLES_CONTRACTES: GrammarLesson = {
  slug: "a1-gr-articles-contractes",
  code: "G4.2",
  level: "A1",
  title: "Les articles contractés",
  theory: [
    {
      type: "heading",
      text: "Utilisation",
    },
    {
      type: "plain_list",
      items: [
        "Les articles définis ({a}le{/a}, {a}la{/a}, {a}l'{/a}, {a}les{/a}) sont souvent utilisés après les prépositions {a}à{/a} et {a}de{/a}.",
        "Pour indiquer un lieu. → Je suis à la gare. ; Il habite à côté de la Poste.",
        "Pour relier deux noms. → Le bureau de l'assistante est à droite.",
        "Avec certains verbes : {a}jouer à{/a} (+ sport/jeu), {a}jouer de{/a} (+ instrument), {a}avoir mal à{/a}… → Il joue à la balle. ; Elle joue de la flûte. ; J'ai mal à la tête.",
      ],
      allBullets: true,
    },
    {
      type: "heading",
      text: "Formes",
    },
    {
      type: "plain_list",
      items: [
        "{a}Le{/a} et {a}les{/a} se contractent avec {a}à{/a} et {a}de{/a}. {a}La{/a} et {a}l'{/a} ne se contractent jamais.",
      ],
      noBulletItems: [0],
    },
    {
      type: "grid",
      headers: ["Contraction", "Exemple"],
      boldFirstCol: true,
      rows: [
        ["à + le → au", "Elle est au supermarché. (pas à la gare / à l'église)"],
        ["à + les → aux", "Elle est aux toilettes."],
        ["de + le → du", "Le couloir du métro. (pas de la gare / de l'assistante)"],
        ["de + les → des", "La salle des professeurs."],
      ],
    },
    {
      type: "heading",
      text: "Prononciation",
    },
    {
      type: "plain_list",
      items: [
        "{a}Au{/a} et {a}aux{/a} se prononcent de la même façon. → Elle a mal au dos. ; Il a mal aux dents.",
        "Liaison avec {a}aux{/a} et {a}des{/a} devant une voyelle ou un h muet. → Il a mal aux oreilles. ; La résidence des étudiants.",
      ],
      allBullets: true,
    },
    ...A1_CONJ_L08.theory,
  ],
  exercises: A1_CONJ_L08.exercises,
};
