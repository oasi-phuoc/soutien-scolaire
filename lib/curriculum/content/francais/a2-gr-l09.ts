import type { GrammarLesson } from "../../grammar-data";

export const A2_GR_L09: GrammarLesson = {
  slug: "a2-gr-l09",
  code: "G.33",
  level: "A2",
  title: "Répondre aux questions fermées",
  theory: [
    { type: "heading", text: "Oui, Non, Si" },
    {
      type: "grid",
      headers: ["Réponse", "Quand l'utiliser", "Exemple"],
      boldFirstCol: true,
      rows: [
        ["{a}Oui{/a}", "Question affirmative → réponse affirmative", "Tu aimes le café ? — {a}Oui{/a}, j'aime le café."],
        ["{a}Non{/a}", "Question (affirmative ou négative) → réponse négative", "Tu aimes le café ? — {a}Non{/a}, je n'aime pas le café."],
        ["{a}Si{/a}", "Question {a}négative{/a} → réponse affirmative", "Tu ne parles pas français ? — {a}Si{/a}, je parle français !"],
      ],
    },
    {
      type: "highlight",
      label: "SI : le mot clé",
      items: [
        "{a}Si{/a} s'utilise uniquement pour contredire une question négative.",
        "Tu ne viens pas ? — {a}Si{/a}, je viens ! (pas Oui !)",
        "Il ne travaille pas ? — {a}Si{/a}, il travaille !",
      ],
      noBulletItems: [0],
    },
    { type: "heading", text: "Moi aussi / Moi non plus / Moi si / Moi pas", sub: true, accent: true },
    {
      type: "grid",
      headers: ["Situation", "Réaction accord", "Réaction désaccord"],
      boldFirstCol: true,
      rows: [
        ["Affirmation {a}positive{/a}", "{a}Moi aussi !{/a}", "Moi pas. / Pas moi."],
        ["Affirmation {a}négative{/a}", "{a}Moi non plus !{/a}", "Moi si !"],
      ],
    },
    {
      type: "grid",
      headers: ["Ce qu'il dit", "Tu es d'accord", "Tu n'es pas d'accord"],
      rows: [
        ["J'aime le café.", "{a}Moi aussi !{/a}", "Moi pas."],
        ["Je ne fume pas.", "{a}Moi non plus !{/a}", "Moi si !"],
        ["Je n'aime pas ça.", "{a}Moi non plus !{/a}", "Moi si."],
        ["J'ai faim.", "{a}Moi aussi !{/a}", "Pas moi."],
      ],
    },
    { type: "heading", text: "Répondre avec des pronoms", sub: true, accent: true },
    {
      type: "grid",
      headers: ["Question", "Réponse courte"],
      rows: [
        ["Tu viens ce soir ?", "Oui, j'y viens. / Non, je n'y viens pas."],
        ["Elle a mangé ?", "Oui, elle a mangé. / Non, elle n'a pas mangé."],
        ["Vous avez des questions ?", "Oui, j'en ai une. / Non, je n'en ai pas."],
      ],
    },
  ],
  exercises: [],
};
