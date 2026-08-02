import {
  A2,
  dialogueBlock,
  lessonFromListening,
  phraseBankToDialogue,
  prereqItems,
  t,
} from "./express-lesson-factory";
import { E13_1_TRAINING, E13_1_EVAL, E13_2_TRAINING, E13_2_EVAL, E13_3_TRAINING, E13_3_EVAL, E13_4_TRAINING, E13_4_EVAL, E13_5_TRAINING, E13_5_EVAL } from "./express-e13-listening";
import {
  E13_1_CE, E13_1_PO, E13_1_PE,
  E13_2_CE, E13_2_PO, E13_2_PE,
  E13_3_CE, E13_3_PO, E13_3_PE,
  E13_4_CE, E13_4_PO, E13_4_PE,
  E13_5_CE, E13_5_PO, E13_5_PE,
} from "./express-e13-cpe";
import {
  E13_1_CE_EMAIL, E13_1_PE_EMAIL,
  E13_2_CE_EMAIL, E13_2_PE_EMAIL,
  E13_3_CE_EMAIL, E13_3_PE_EMAIL,
  E13_4_CE_EMAIL, E13_4_PE_EMAIL,
  E13_5_CE_EMAIL, E13_5_PE_EMAIL,
} from "./express-e13-email";
import type { CommunicationLesson } from "./express-types";

export const EXPRESS_E13_1: CommunicationLesson = lessonFromListening({
  id: "E13-1",
  code: "E13.1",
  title: "Suivre une formation",
  prerequisiteFrenchSlugs: ["a2-gr-l36"],
  prerequisiteCommIds: ["E12-5"],
  theory: [
    { type: "heading", text: "Suivre une formation", black: true, trans: t("Suivre une formation") },
    prereqItems([
      { code: "G4.3", title: "Les pronoms Y et EN", href: "/francais/grammaire/a2-gr-l36" },
    ]),
    {
      type: "plain",
      text: "Dans cette leçon, vous apprenez à communiquer sur : **formation, CPF**.",
      trans: t("In this lesson, you learn to communicate about: formation, CPF."),
    },
    { type: "highlight", title: "Le pronom EN", trans: t("Le pronom EN") },
    {
      type: "plain",
      text: "Réutilisez la grammaire « **Le pronom EN** » pour construire des phrases claires.",
      trans: t("Reuse this grammar point to build clear sentences."),
    },
    {
      type: "section",
      items: [
        "Écoutez le modèle, puis réutilisez les formules.",
        "Variez questions et réponses selon la situation.",
        "Attention à la politesse (**tu** / **vous**)."
],
    },
    {
      type: "table",
      accentHeader: true,
      headers: ["Question", "Réponse possible"],
      rows: [
        [
                "Tu peux m'aider ?",
                "Oui, bien sûr !"
        ],
        [
                "Qu'est-ce que tu en penses ?",
                "Je trouve que c'est une bonne idée."
        ],
        [
                "On se retrouve où ?",
                "Devant l'entrée."
        ],
        [
                "C'est possible ?",
                "Oui. / Non, ce n'est pas possible."
        ]
],
      transHeaders: { en: ["Question", "Possible answer"] },
    },
    { type: "heading", text: "Exemple de dialogue", black: true, trans: t("Sample dialogue") },
    dialogueBlock(
      A2(158),
      "Audio 158",
      phraseBankToDialogue([
      "Quelles sont les formations possibles ?",
      "Il y en a beaucoup : diplômantes et qualifiantes.",
      "Je te conseille de faire un stage !"
]),
    ),
    {
      type: "vocab",
      items: [
        { fr: "je voudrais…", example: "Je voudrais des informations." },
        { fr: "est-ce que… ?", example: "Est-ce que vous pouvez m'aider ?" },
        { fr: "avec plaisir", example: "Oui, avec plaisir !" },
        { fr: "je suis désolé(e)", example: "Je suis désolé, ce n'est pas possible." },
        { fr: "ça te dit de… ?", example: "Ça te dit de venir ?" },
        { fr: "à bientôt", example: "D'accord, à bientôt !" },
      ],
    },
  ],
  training: E13_1_TRAINING,
  evalAudios: E13_1_EVAL,
  ceExercise: E13_1_CE,
  ceEmailExercise: E13_1_CE_EMAIL,
  poDialogues: E13_1_PO,
  pePrompts: E13_1_PE,
  peEmailPrompts: E13_1_PE_EMAIL,
});

export const EXPRESS_E13_2: CommunicationLesson = lessonFromListening({
  id: "E13-2",
  code: "E13.2",
  title: "Trouver un stage",
  prerequisiteFrenchSlugs: ["a2-gr-l42"],
  prerequisiteCommIds: ["E13-1"],
  theory: [
    { type: "heading", text: "Trouver un stage", black: true, trans: t("Trouver un stage") },
    prereqItems([
      { code: "G6.4", title: "La négation (2/2)", href: "/francais/grammaire/a2-gr-l42" },
    ]),
    {
      type: "plain",
      text: "Dans cette leçon, vous apprenez à communiquer sur : **stage, Pôle Emploi**.",
      trans: t("In this lesson, you learn to communicate about: stage, Pôle Emploi."),
    },
    { type: "highlight", title: "La négation", trans: t("La négation") },
    {
      type: "plain",
      text: "Réutilisez la grammaire « **La négation** » pour construire des phrases claires.",
      trans: t("Reuse this grammar point to build clear sentences."),
    },
    {
      type: "section",
      items: [
        "Écoutez le modèle, puis réutilisez les formules.",
        "Variez questions et réponses selon la situation.",
        "Attention à la politesse (**tu** / **vous**)."
],
    },
    {
      type: "table",
      accentHeader: true,
      headers: ["Question", "Réponse possible"],
      rows: [
        [
                "Tu peux m'aider ?",
                "Oui, bien sûr !"
        ],
        [
                "Qu'est-ce que tu en penses ?",
                "Je trouve que c'est une bonne idée."
        ],
        [
                "On se retrouve où ?",
                "Devant l'entrée."
        ],
        [
                "C'est possible ?",
                "Oui. / Non, ce n'est pas possible."
        ]
],
      transHeaders: { en: ["Question", "Possible answer"] },
    },
    { type: "heading", text: "Exemple de dialogue", black: true, trans: t("Sample dialogue") },
    dialogueBlock(
      A2(166),
      "Audio 166",
      phraseBankToDialogue([
      "Vous n'avez jamais consulté les sites de recherche d'emploi ?",
      "Non, je n'ai personne pour m'aider.",
      "L'inscription n'est pas obligatoire."
]),
    ),
    {
      type: "vocab",
      items: [
        { fr: "je voudrais…", example: "Je voudrais des informations." },
        { fr: "est-ce que… ?", example: "Est-ce que vous pouvez m'aider ?" },
        { fr: "avec plaisir", example: "Oui, avec plaisir !" },
        { fr: "je suis désolé(e)", example: "Je suis désolé, ce n'est pas possible." },
        { fr: "ça te dit de… ?", example: "Ça te dit de venir ?" },
        { fr: "à bientôt", example: "D'accord, à bientôt !" },
      ],
    },
  ],
  training: E13_2_TRAINING,
  evalAudios: E13_2_EVAL,
  ceExercise: E13_2_CE,
  ceEmailExercise: E13_2_CE_EMAIL,
  poDialogues: E13_2_PO,
  pePrompts: E13_2_PE,
  peEmailPrompts: E13_2_PE_EMAIL,
});

export const EXPRESS_E13_3: CommunicationLesson = lessonFromListening({
  id: "E13-3",
  code: "E13.3",
  title: "Répondre à une offre d'emploi",
  prerequisiteFrenchSlugs: ["a2-gr-l52"],
  prerequisiteCommIds: ["E13-2"],
  theory: [
    { type: "heading", text: "Répondre à une offre d'emploi", black: true, trans: t("Répondre à une offre d'emploi") },
    prereqItems([
      { code: "G5.2", title: "Les relations logiques — Cause et conséquence", href: "/francais/grammaire/a2-gr-l52" },
    ]),
    {
      type: "plain",
      text: "Dans cette leçon, vous apprenez à communiquer sur : **CV, candidature**.",
      trans: t("In this lesson, you learn to communicate about: CV, candidature."),
    },
    { type: "highlight", title: "La cause", trans: t("La cause") },
    {
      type: "plain",
      text: "Réutilisez la grammaire « **La cause** » pour construire des phrases claires.",
      trans: t("Reuse this grammar point to build clear sentences."),
    },
    {
      type: "section",
      items: [
        "Écoutez le modèle, puis réutilisez les formules.",
        "Variez questions et réponses selon la situation.",
        "Attention à la politesse (**tu** / **vous**)."
],
    },
    {
      type: "table",
      accentHeader: true,
      headers: ["Question", "Réponse possible"],
      rows: [
        [
                "Tu peux m'aider ?",
                "Oui, bien sûr !"
        ],
        [
                "Qu'est-ce que tu en penses ?",
                "Je trouve que c'est une bonne idée."
        ],
        [
                "On se retrouve où ?",
                "Devant l'entrée."
        ],
        [
                "C'est possible ?",
                "Oui. / Non, ce n'est pas possible."
        ]
],
      transHeaders: { en: ["Question", "Possible answer"] },
    },
    { type: "heading", text: "Exemple de dialogue", black: true, trans: t("Sample dialogue") },
    dialogueBlock(
      A2(174),
      "Audio 174",
      phraseBankToDialogue([
      "J'ai trouvé une offre parce que je cherche un CDI.",
      "Grâce à mon stage, j'ai de l'expérience.",
      "À cause du manque de temps, je n'ai pas fini mon CV."
]),
    ),
    {
      type: "vocab",
      items: [
        { fr: "je voudrais…", example: "Je voudrais des informations." },
        { fr: "est-ce que… ?", example: "Est-ce que vous pouvez m'aider ?" },
        { fr: "avec plaisir", example: "Oui, avec plaisir !" },
        { fr: "je suis désolé(e)", example: "Je suis désolé, ce n'est pas possible." },
        { fr: "ça te dit de… ?", example: "Ça te dit de venir ?" },
        { fr: "à bientôt", example: "D'accord, à bientôt !" },
      ],
    },
  ],
  training: E13_3_TRAINING,
  evalAudios: E13_3_EVAL,
  ceExercise: E13_3_CE,
  ceEmailExercise: E13_3_CE_EMAIL,
  poDialogues: E13_3_PO,
  pePrompts: E13_3_PE,
  peEmailPrompts: E13_3_PE_EMAIL,
});

export const EXPRESS_E13_4: CommunicationLesson = lessonFromListening({
  id: "E13-4",
  code: "E13.4",
  title: "Passer un entretien",
  prerequisiteFrenchSlugs: ["a2-gr-l07"],
  prerequisiteCommIds: ["E13-3"],
  theory: [
    { type: "heading", text: "Passer un entretien", black: true, trans: t("Job interview") },
    prereqItems([
      { code: "G2.2", title: "Les questions fermées", href: "/francais/grammaire/a2-gr-l07" },
    ]),
    {
      type: "plain",
      text: "À l'entretien, on se **présente**, on parle de ses **qualités** et on structure son discours.",
      trans: t("In a job interview, introduce yourself and structure what you say."),
    },
    { type: "highlight", title: "L'ordre du discours", trans: t("L'ordre du discours") },
    {
      type: "plain",
      text: "**Ordre du discours** : (tout) **d'abord** / pour commencer → **ensuite** / puis / après → **enfin** / finalement / pour finir.",
      trans: t("Discourse markers: first, then, finally."),
    },
    {
      type: "section",
      items: [
        "**Tout d'abord** vous allez vous présenter.",
        "**Puis** je vous poserai des questions.",
        "**Enfin** je vous parlerai de l'entreprise.",
        "**Finalement** j'ai signé mon contrat."
],
    },
    {
      type: "table",
      accentHeader: true,
      headers: ["Question", "Réponse possible"],
      rows: [
        [
                "Parlez-moi de vous.",
                "Licence + 3 ans d'expérience."
        ],
        [
                "Vos qualités ?",
                "Organisé, parfois perfectionniste."
        ],
        [
                "Conditions de travail ?",
                "CDI à plein temps."
        ],
        [
                "Comment s'est passé l'entretien ?",
                "Difficile, questions pièges."
        ]
],
      transHeaders: { en: ["Question", "Possible answer"] },
    },
    { type: "heading", text: "Exemple de dialogue", black: true, trans: t("Sample dialogue") },
    dialogueBlock(
      A2(182),
      "Audio 182",
      phraseBankToDialogue([
      "Parlez-moi de vous !",
      "Je suis diplômé et j'ai 3 ans d'expérience.",
      "Je suis organisé mais parfois perfectionniste.",
      "Nous proposons un CDI à plein temps."
]),
    ),
    {
      type: "vocab",
      items: [
        { fr: "entretien d'embauche", example: "Passer un entretien." },
        { fr: "qualités / défauts", example: "Organisé mais perfectionniste." },
        { fr: "CDI", example: "Un contrat en CDI." },
        { fr: "question piège", example: "Des questions pièges." },
        { fr: "congés payés", example: "5 semaines de congés payés." },
        { fr: "se présenter", example: "Tout d'abord, présentez-vous." },
      ],
    },
  ],
  training: E13_4_TRAINING,
  evalAudios: E13_4_EVAL,
  ceExercise: E13_4_CE,
  ceEmailExercise: E13_4_CE_EMAIL,
  poDialogues: E13_4_PO,
  pePrompts: E13_4_PE,
  peEmailPrompts: E13_4_PE_EMAIL,
});

export const EXPRESS_E13_5: CommunicationLesson = lessonFromListening({
  id: "E13-5",
  code: "E13.5",
  title: "S'intégrer à l'entreprise",
  prerequisiteFrenchSlugs: ["a2-gr-l52"],
  prerequisiteCommIds: ["E13-4"],
  theory: [
    { type: "heading", text: "S'intégrer à l'entreprise", black: true, trans: t("Settling into a company") },
    prereqItems([
      { code: "G5.2", title: "Les relations logiques — Cause et conséquence", href: "/francais/grammaire/a2-gr-l52" },
    ]),
    {
      type: "plain",
      text: "Pour s'intégrer : **tâches**, **réunions**, **procédures** et relations avec les **collègues**.",
      trans: t("Settling in: tasks, meetings, procedures and colleagues."),
    },
    { type: "highlight", title: "L'opposition", trans: t("L'opposition") },
    {
      type: "plain",
      text: "L'**opposition** : **mais**, **par contre** — Le travail est intéressant, **par contre** les horaires sont chargés.",
      trans: t("Contrast with mais and par contre."),
    },
    {
      type: "section",
      items: [
        "C'est intéressant, **mais** c'est stressant.",
        "**Par contre**, l'ambiance est bonne.",
        "J'aime le poste, **par contre** il faut s'organiser."
],
    },
    {
      type: "table",
      accentHeader: true,
      headers: ["Question", "Réponse possible"],
      rows: [
        [
                "Qui est ta tutrice ?",
                "Sophie."
        ],
        [
                "Tu as répondu au mail ?",
                "Pas encore, cet après-midi."
        ],
        [
                "Comment demander un congé ?",
                "Écrire au chef de service."
        ],
        [
                "La première semaine ?",
                "Deux réunions, beaucoup à apprendre."
        ]
],
      transHeaders: { en: ["Question", "Possible answer"] },
    },
    { type: "heading", text: "Exemple de dialogue", black: true, trans: t("Sample dialogue") },
    dialogueBlock(
      A2(190),
      "Audio 190",
      phraseBankToDialogue([
      "Bienvenue !",
      "Le travail est intéressant. Par contre, les horaires sont chargés.",
      "Mais l'ambiance est bonne."
]),
    ),
    {
      type: "vocab",
      items: [
        { fr: "tutrice / tuteur", example: "Sophie sera ta tutrice." },
        { fr: "badge", example: "N'oublie pas ton badge." },
        { fr: "réunion de service", example: "Participer à une réunion." },
        { fr: "compte rendu", example: "Rédiger le compte rendu." },
        { fr: "par contre", example: "Par contre, les horaires sont chargés." },
        { fr: "procédure", example: "Respecter la procédure." },
      ],
    },
  ],
  training: E13_5_TRAINING,
  evalAudios: E13_5_EVAL,
  ceExercise: E13_5_CE,
  ceEmailExercise: E13_5_CE_EMAIL,
  poDialogues: E13_5_PO,
  pePrompts: E13_5_PE,
  peEmailPrompts: E13_5_PE_EMAIL,
});

export const EXPRESS_E13_LESSONS: CommunicationLesson[] = [
  EXPRESS_E13_1, EXPRESS_E13_2, EXPRESS_E13_3, EXPRESS_E13_4, EXPRESS_E13_5,
];
