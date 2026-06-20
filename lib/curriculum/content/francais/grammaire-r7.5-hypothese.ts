import type { GrammarLesson } from "../../grammar-data";

export const A2_GR_HYPOTHESE_FUTUR: GrammarLesson = {
  slug: "a2-gr-hypothese-futur",
  code: "R7.5",
  level: "A2",
  title: "L'hypothèse sur le futur",
  theory: [
    { type: "heading", text: "Si + présent → futur simple" },
    {
      type: "highlight",
      label: "Structure",
      items: ["Condition : {a}si + présent{/a}.", "Conséquence : {a}futur simple{/a}.", "Si tu viens demain, nous mangerons ensemble."],
    },
    {
      type: "plain_list",
      items: ["L'ordre des deux propositions peut changer : nous mangerons ensemble si tu viens demain.", "On n'utilise jamais le futur juste après si dans cette structure."],
    },
    { type: "highlight", label: "Élision avec il", items: ["si + il devient {a}s'il{/a} : s'il pleut, nous resterons à la maison.", "On écrit si elle, si on, si ils n'existe pas."] },
  ],
  exercises: [],
};
