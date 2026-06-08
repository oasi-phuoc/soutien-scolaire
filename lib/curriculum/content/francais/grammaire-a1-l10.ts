import type { GrammarLesson } from "../../grammar-data";

export const A1_GR_L10: GrammarLesson = {
  slug: "a1-gr-l10",
  code: "G.12",
  level: "A1",
  title: "L'interrogation avec les mots interrogatifs",
  theory: [
    { type: "heading", text: "Les mots interrogatifs" },
    {
      type: "plain_list",
      items: [
        "Les mots interrogatifs permettent de poser des questions précises.",
        "Ils se placent en début de question (ou à la fin à l'oral informel).",
      ],
    },
    {
      type: "grid",
      headers: ["Mot", "Sens", "Exemple"],
      boldFirstCol: true,
      rows: [
        ["{a}Où ?{/a}", "lieu", "Où est-ce que tu habites ?"],
        ["{a}Quand ?{/a}", "temps", "Quand est-ce qu'il arrive ?"],
        ["{a}Qui ?{/a}", "personne", "Qui est-ce que tu appelles ?"],
        ["{a}Qu'est-ce que ?{/a}", "chose", "Qu'est-ce que tu manges ?"],
        ["{a}Comment ?{/a}", "manière / état", "Comment tu t'appelles ?"],
        ["{a}Pourquoi ?{/a}", "raison", "Pourquoi tu étudies le français ?"],
        ["{a}Combien ?{/a}", "quantité", "Combien d'enfants vous avez ?"],
        ["{a}Quel / Quelle ?{/a}", "choix parmi plusieurs", "Quel bus prends-tu ?"],
      ],
    },
    { type: "heading", text: "Deux façons de construire la question", sub: true },
    {
      type: "highlight",
      label: "Registre neutre",
      items: [
        "Mot interrogatif + {a}est-ce que{/a} + sujet + verbe ?",
        "Où est-ce que tu habites ?",
        "Quand est-ce qu'il arrive ?",
        "Comment est-ce que vous vous appelez ?",
      ],
      noBulletItems: [0],
    },
    {
      type: "highlight",
      label: "Registre informel (oral)",
      items: [
        "Sujet + verbe + mot interrogatif ?",
        "Tu habites où ?",
        "Il arrive quand ?",
        "Tu t'appelles comment ?",
      ],
      noBulletItems: [0],
    },
    {
      type: "highlight",
      label: "Quel / Quelle — accord",
      items: [
        "{a}Quel{/a} + nom masculin singulier : Quel jour ?",
        "{a}Quelle{/a} + nom féminin singulier : Quelle heure ?",
        "{a}Quels{/a} + nom masculin pluriel : Quels films ?",
        "{a}Quelles{/a} + nom féminin pluriel : Quelles langues ?",
      ],
    },
  ],
  exercises: [],
};
