import type { GrammarLesson } from "../../grammar-data";

export const A1_GR_L10: GrammarLesson = {
  slug: "a1-gr-l10",
  code: "R2.4",
  level: "A1",
  title: "Les mots interrogatifs",
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

  evalExercises: [
    {
      type: "fill",
      title: "Évaluation — Question 1",
      instruction: "Complétez avec le bon mot interrogatif.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "___ tu habites ?",                hint: "lieu",          answer: "Où"             },
        { sentence: "___ tu t'appelles ?",             hint: "identité",      answer: "Comment"        },
        { sentence: "___ est-ce que tu travailles ?",  hint: "moment",        answer: "Quand"          },
        { sentence: "___ vient avec nous ?",           hint: "personne",      answer: "Qui"            },
        { sentence: "___ ça coûte ?",                  hint: "quantité/prix", answer: "Combien"        },
        { sentence: "___ tu ne manges pas ?",          hint: "raison",        answer: "Pourquoi"       },
        { sentence: "___ tu fais ce soir ?",           hint: "action/chose",  answer: "Qu'est-ce que" },
        { sentence: "___ parle français ici ?",        hint: "personne",      answer: "Qui"            },
        { sentence: "___ vous arrivez ?",              hint: "moment",        answer: "Quand"          },
        { sentence: "___ vous allez ? À Paris.",       hint: "lieu",          answer: "Où"             },
      ],
    },
    {
      type: "qcm",
      title: "Évaluation — Question 2",
      instruction: "Choisissez le bon mot interrogatif.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "___ tu habites ? — À Lyon.",           choices: ["Où",      "Quand", "Qui",   "Comment"],  correctIdx: 0 },
        { sentence: "___ ça coûte ? — 20 euros.",           choices: ["Combien", "Où",    "Quand", "Comment"],  correctIdx: 0 },
        { sentence: "___ tu ne viens pas ? — Je suis malade.", choices: ["Pourquoi","Où","Quand","Qui"],        correctIdx: 0 },
        { sentence: "___ est-ce que tu fais ? — Je lis.",  choices: ["Qu'est-ce que","Où","Qui","Quand"],       correctIdx: 0 },
        { sentence: "___ arrive demain ? — Mon frère.",     choices: ["Qui",     "Où",    "Quand", "Comment"],  correctIdx: 0 },
        { sentence: "___ tu t'appelles ? — Marie.",         choices: ["Comment", "Où",    "Quand", "Qui"],      correctIdx: 0 },
        { sentence: "___ commence le cours ? — À 9h.",      choices: ["Quand",   "Où",    "Qui",   "Comment"],  correctIdx: 0 },
        { sentence: "___ tu vas ? — Je vais bien.",         choices: ["Comment", "Où",    "Qui",   "Quand"],    correctIdx: 0 },
      ],
    },
  ],
};
