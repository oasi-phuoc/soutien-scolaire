import type { GrammarLesson } from "../../grammar-data";

export const A1_GR_PRONOMINAUX_PASSE: GrammarLesson = {
  slug: "a1-gr-pronominaux-passe-compose",
  code: "R5.6",
  level: "A1",
  title: "Les verbes pronominaux au passé composé",
  theory: [
    { type: "heading", text: "Les verbes pronominaux au passé composé" },
    {
      type: "highlight",
      label: "Formation",
      items: [
        "Tous les verbes pronominaux utilisent l'auxiliaire {a}être{/a}.",
        "Sujet + pronom réfléchi + être + participe passé.",
        "Je me suis levé(e). / Nous nous sommes préparé(e)s.",
      ],
    },
    {
      type: "plain_list",
      items: [
        "Le participe passé s'accorde avec le sujet réel lorsque le pronom réfléchi est complément direct.",
        "Elle s'est lavée. / Ils se sont rencontrés.",
        "Il reste invariable lorsqu'un COD est placé après le verbe : elle s'est lavé les mains.",
      ],
    },
    {
      type: "highlight",
      label: "Négation",
      items: [
        "La négation encadre le pronom réfléchi et l'auxiliaire.",
        "Je {a}ne me suis pas{/a} levé tôt.",
        "Elles {a}ne se sont jamais{/a} rencontrées.",
      ],
    },
  ],
  exercises: [],
};
