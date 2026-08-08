import type { GrammarLesson } from "../../grammar-data";
import { A2_GR_GERONDIF } from "./grammaire-g16.3-le-gerondif";

/** G16.3 — Le gérondif, enrichi avec G19.31 */
export const A1_GR_GERONDIF: GrammarLesson = {
  slug: "a1-gr-gerondif",
  code: "G16.3",
  level: "A1",
  title: "Le gérondif",
  theory: [
    {
      type: "heading",
      text: "Utilisation",
    },
    {
      type: "text",
      items: [
        "Le gérondif indique que deux actions sont faites en même temps par le même sujet.",
        "Temps : Il mange en lisant.",
        "Manière : J'ai maigri en faisant un régime et du sport.",
        "Condition : En conduisant moins vite, on a moins d'accidents.",
      ],
      allBullets: true,
    },
    {
      type: "heading",
      text: "Forme",
    },
    {
      type: "text",
      items: [
        "Formation : {a}en{/a} + participe présent.",
        "Participe présent : même radical que le {a}nous{/a} du présent + {a}-ant{/a}.",
      ],
      allBullets: true,
    },
    {
      type: "grid",
      headers: ["Verbe", "nous (présent)", "Participe", "Gérondif"],
      boldFirstCol: true,
      rows: [
        ["lire", "nous lisons", "lisant", "en lisant"],
        ["faire", "nous faisons", "faisant", "en faisant"],
        ["avancer", "nous avançons", "avançant", "en avançant"],
        ["manger", "nous mangeons", "mangeant", "en mangeant"],
      ],
    },
    {
      type: "grid",
      headers: ["Exception", "Participe", "Gérondif"],
      boldFirstCol: true,
      rows: [
        ["avoir", "ayant", "en ayant"],
        ["être", "étant", "en étant"],
        ["savoir", "sachant", "en sachant"],
      ],
    },
    {
      type: "note",
      text: "Forme invariable. Le sujet du gérondif = sujet du verbe principal. → Il écoute de la musique en courant.",
    },
    {
      type: "note",
      text: "Négation : {a}en ne{/a} + participe + {a}pas{/a}. → En ne conduisant pas vite…",
    },
    ...A2_GR_GERONDIF.theory,
  ],
  exercises: [],
};
