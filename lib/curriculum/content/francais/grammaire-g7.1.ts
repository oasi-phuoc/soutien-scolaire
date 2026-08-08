import type { GrammarLesson } from "../../grammar-data";
import { A1_GR_L11 } from "./grammaire-g7.1-les-prepositions-de-lieu";

/** Unité 35 — À, en, de avec les noms de villes, pays et continents (G7.1) */
export const A1_GR_A_EN_DE_LIEUX: GrammarLesson = {
  slug: "a1-gr-a-en-de-lieux",
  code: "G7.1",
  level: "A1",
  title: "À, en, de avec les noms de villes, pays et continents",
  theory: [
    {
      type: "heading",
      text: "Utilisation",
    },
    {
      type: "plain_list",
      items: [
        "{a}À{/a}, {a}en{/a}, {a}de{/a} sont des prépositions de lieu.",
        "{a}À{/a} et {a}en{/a} : où l'on est ou où l'on va. → Il habite en France. ; Il va à Tokyo.",
        "{a}De{/a} : d'où l'on vient. → Il arrive de Rome.",
      ],
      allBullets: true,
    },
    {
      type: "heading",
      text: "Formes",
    },
    {
      type: "grid",
      headers: ["Lieu", "Être / aller", "Venir / arriver"],
      boldFirstCol: true,
      rows: [
        ["Ville", "à Paris", "de Madrid"],
        ["Pays masculin", "au Sénégal (à + le)", "du Sénégal (de + le)"],
        ["Pays pluriel", "aux États-Unis (à + les)", "des États-Unis (de + les)"],
        ["Pays féminin", "en France", "de France"],
        ["Pays / voyelle", "en Iran", "d'Iran"],
      ],
    },
    {
      type: "plain_list",
      items: [
        "Exemple : Je suis née au Kenya mais j'habite en Angleterre, à Londres.",
      ],
      noBulletItems: [0],
    },
    {
      type: "heading",
      text: "Prononciation et orthographe",
    },
    {
      type: "plain_list",
      items: [
        "Liaison avec {a}en{/a}, {a}aux{/a}, {a}des{/a}. → en Angleterre ; aux États-Unis ; des Antilles.",
        "Pas de liaison avec {a}en{/a} devant un pays en {a}h{/a}. → Je vais en Hongrie.",
        "{a}De{/a} → {a}d'{/a} devant une voyelle. → Je rentre d'Allemagne.",
      ],
      allBullets: true,
    },
    ...A1_GR_L11.theory,
  ],
  exercises: A1_GR_L11.exercises,
};
