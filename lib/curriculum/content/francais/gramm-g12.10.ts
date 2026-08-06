import type { GrammarLesson } from "../../grammar-data";
import { A2_GR_L19 } from "./gramm-rp.1-les-pronoms-relatifs-qui-et-que";

/** G12.10 — Les pronoms relatifs qui, que, où, enrichis avec G19.17 */
export const A1_GR_PRONOMS_RELATIFS_QUI_QUE_OU: GrammarLesson = {
  slug: "a1-gr-pronoms-relatifs-qui-que-ou",
  code: "G12.10",
  level: "A1",
  title: "Les pronoms relatifs qui, que, où",
  theory: [
    {
      type: "heading",
      text: "Utilisation",
    },
    {
      type: "plain_list",
      items: [
        "Les pronoms relatifs remplacent un nom et permettent de réunir deux phrases.",
        "Tu connais cette fille ? Elle sort avec Lucas. → Tu connais cette fille qui sort avec Lucas ?",
        "Le choix dépend de la fonction du pronom par rapport au verbe qui suit.",
      ],
      allBullets: true,
    },
    {
      type: "heading",
      text: "Formes",
    },
    {
      type: "highlight",
      label: "Qui",
      items: [
        "Personne ou chose ; sujet du second verbe. → les jeunes mariés qui habitent à côté ; un appartement qui donne sur un parc.",
      ],
    },
    {
      type: "highlight",
      label: "Que",
      items: [
        "Personne ou chose ; COD du second verbe. → le couple que nous avons rencontré ; un studio que ses parents ont acheté.",
      ],
    },
    {
      type: "highlight",
      label: "Où",
      items: [
        "Complément de lieu ou de temps. → l'université où j'ai terminé mes études ; le jour où j'ai soutenu ma thèse.",
      ],
    },
    {
      type: "plain_list",
      items: [
        "{a}Qui{/a} et {a}que{/a} peuvent remplacer un pronom tonique. → C'est toi qui m'as présenté cette fille ? ; C'est elle que je connais le mieux.",
        "Avec {a}qui{/a}, le verbe s'accorde avec la personne du pronom.",
        "{a}Que → qu'{/a} devant voyelle ou {a}h{/a} muet. → une ville qu'il adore.",
        "{a}Qui{/a} ne s'élide pas. → la fille qui est là.",
      ],
      allBullets: true,
    },
    ...A2_GR_L19.theory,
  ],
  exercises: [],
};
