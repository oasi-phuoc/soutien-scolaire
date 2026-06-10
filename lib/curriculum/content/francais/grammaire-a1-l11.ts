import type { GrammarLesson } from "../../grammar-data";

export const A1_GR_L11: GrammarLesson = {
  slug: "a1-gr-l11",
  code: "G2.5",
  level: "A1",
  title: "Les prépositions de lieu",
  theory: [
    { type: "heading", text: "Les prépositions de lieu" },
    {
      type: "plain_list",
      items: [
        "Les prépositions de lieu indiquent où se trouve quelque chose ou quelqu'un.",
      ],
    },
    {
      type: "grid",
      headers: ["Préposition", "Sens", "Exemple"],
      boldFirstCol: true,
      rows: [
        ["{a}dans{/a}", "à l'intérieur", "Le stylo est dans le sac."],
        ["{a}sur{/a}", "à la surface", "Le livre est sur la table."],
        ["{a}sous{/a}", "en dessous", "Le chat est sous la chaise."],
        ["{a}devant{/a}", "face avant", "Je suis devant l'école."],
        ["{a}derrière{/a}", "face arrière", "La voiture est derrière la maison."],
        ["{a}entre{/a}", "au milieu de deux", "La banque est entre la poste et la pharmacie."],
        ["{a}à côté de{/a}", "à proximité", "La boulangerie est à côté du cinéma."],
        ["{a}en face de{/a}", "vis-à-vis", "L'arrêt est en face de la gare."],
        ["{a}près de{/a}", "pas loin", "L'hôpital est près d'ici."],
        ["{a}loin de{/a}", "à grande distance", "La gare est loin du centre."],
      ],
    },
    { type: "heading", text: "Articles contractés", sub: true, accent: true },
    {
      type: "grid",
      headers: ["Contraction", "Exemple"],
      boldFirstCol: true,
      rows: [
        ["{a}à + le → au{/a}", "Je vais {a}au{/a} cinéma."],
        ["{a}à + les → aux{/a}", "Je parle {a}aux{/a} enfants."],
        ["{a}de + le → du{/a}", "Je viens {a}du{/a} marché."],
        ["{a}de + les → des{/a}", "Je parle {a}des{/a} enfants."],
      ],
    },
    {
      type: "highlight",
      label: "Attention",
      items: [
        "{a}à + la{/a} et {a}de + la{/a} ne se contractent pas.",
        "Je vais {a}à la{/a} pharmacie. (pas : {s}au{/s} pharmacie)",
        "Je viens {a}de la{/a} boulangerie. (pas : {s}du{/s} boulangerie)",
      ],
      noBulletItems: [0],
    },
  ],
  exercises: [],
};
