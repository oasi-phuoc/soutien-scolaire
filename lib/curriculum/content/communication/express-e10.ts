import {
  A2,
  dialogueBlock,
  lessonFromListening,
  phraseBankToDialogue,
  prereqItems,
  t,
} from "./express-lesson-factory";
import { E10_1_TRAINING, E10_1_EVAL, E10_2_TRAINING, E10_2_EVAL, E10_3_TRAINING, E10_3_EVAL, E10_4_TRAINING, E10_4_EVAL, E10_5_TRAINING, E10_5_EVAL } from "./express-e10-listening";
import {
  E10_1_CE, E10_1_PO, E10_1_PE,
  E10_2_CE, E10_2_PO, E10_2_PE,
  E10_3_CE, E10_3_PO, E10_3_PE,
  E10_4_CE, E10_4_PO, E10_4_PE,
  E10_5_CE, E10_5_PO, E10_5_PE,
} from "./express-e10-cpe";
import { E10_1_CE_EMAIL, E10_1_PE_EMAIL, E10_2_CE_EMAIL, E10_2_PE_EMAIL, E10_3_CE_EMAIL, E10_3_PE_EMAIL, E10_4_CE_EMAIL, E10_4_PE_EMAIL, E10_5_CE_EMAIL, E10_5_PE_EMAIL } from "./express-e10-email";
import type { CommunicationLesson } from "./express-types";

export const EXPRESS_E10_1: CommunicationLesson = lessonFromListening({
  id: "E10-1",
  code: "E10.1",
  title: "Inviter et être invité",
  prerequisiteFrenchSlugs: ["a2-gr-l07"],
  prerequisiteCommIds: ["E9-5"],
  theory: [
    { type: "heading", text: "Inviter et être invité", black: true, trans: t("Inviting and being invited") },
    prereqItems([
      { code: "G3.4", title: "Les questions fermées", href: "/francais/grammaire/a2-gr-l07" },
    ]),
    {
      type: "plain",
      text: "On **invite**, on **accepte** ou on **refuse**, et on sait quoi **apporter**.",
      trans: t("We invite, accept or decline, and know what to bring."),
    },
    { type: "highlight", title: "Questions formelles et informelles", trans: t("Questions formelles et informelles") },
    {
      type: "plain",
      text: "Questions **informelles** (intonation / est-ce que) et **formelles** (inversion) : Tu es libre ? / Êtes-vous disponible ?",
      trans: t("Informal vs formal questions: intonation, est-ce que, inversion."),
    },
    {
      type: "section",
      items: [
        "Tu es libre jeudi ?",
        "Ça te dit de venir ?",
        "**Seriez-vous disponible** samedi ?",
        "Est-ce que je peux venir avec un ami ?"
],
    },
    {
      type: "table",
      accentHeader: true,
      headers: ["Question", "Réponse possible"],
      rows: [
        [
                "Tu es libre dimanche ?",
                "Le 17, ça marche !"
        ],
        [
                "Qu'est-ce que j'apporte ?",
                "Des fleurs ou des chocolats."
        ],
        [
                "Je peux venir avec un ami ?",
                "Bien sûr, avec plaisir !"
        ],
        [
                "Vous êtes disponible ?",
                "Je suis désolé, ce n'est pas possible."
        ]
],
      transHeaders: { en: ["Question", "Possible answer"] },
    },
    { type: "heading", text: "Exemple de dialogue", black: true, trans: t("Sample dialogue") },
    dialogueBlock(
      A2(44),
      "Audio 044",
      phraseBankToDialogue([
      "Ça te dit de venir manger à la maison dimanche prochain, le 10 ?",
      "C'est gentil, mais je ne suis pas libre.",
      "Et le dimanche d'après, le 17 ?",
      "Le 17, ça marche !",
      "Dis-moi, je suis invitée chez les Durand samedi. Qu'est-ce que je peux apporter ?",
      "Ils ont un jardin, tu pourrais apporter une plante…",
      "Tu veux venir voir une expo avec moi, samedi ?",
      "Bonne idée ! Je peux venir avec un ami ?",
      "Bien sûr, avec plaisir !",
      "Tu viens prendre un pot avec nous, ce soir ?",
      "Super ! On se retrouve où ?",
      "Tu es dispo pour un ciné mercredi ?"
]),
    ),
    {
      type: "vocab",
      items: [
        { fr: "invitation", example: "J'ai accepté l'invitation." },
        { fr: "apéritif", example: "Nous prenons l'apéritif." },
        { fr: "pique-niquer", example: "Venir pique-niquer à la plage." },
        { fr: "feu d'artifice", example: "Aller au feu d'artifice." },
        { fr: "s'excuser", example: "Je suis désolé pour mon retard." },
        { fr: "apporter", example: "Apporter un petit cadeau." },
      ],
    },
  ],
  training: E10_1_TRAINING,
  evalAudios: E10_1_EVAL,
  ceExercises: E10_1_CE,
  ceEmailExercises: E10_1_CE_EMAIL,
  poDialogues: E10_1_PO,
  pePrompts: E10_1_PE,
  peEmailPrompts: E10_1_PE_EMAIL,
});

export const EXPRESS_E10_2: CommunicationLesson = lessonFromListening({
  id: "E10-2",
  code: "E10.2",
  title: "Faire des rencontres",
  prerequisiteFrenchSlugs: ["a2-gr-l36"],
  prerequisiteCommIds: ["E10-1"],
  theory: [
    { type: "heading", text: "Faire des rencontres", black: true, trans: t("Faire des rencontres") },
    prereqItems([
      { code: "G4.4", title: "Les pronoms Y et EN", href: "/francais/grammaire/a2-gr-l36" },
    ]),
    {
      type: "plain",
      text: "Dans cette leçon, vous apprenez à communiquer sur : **rencontres, activités**.",
      trans: t("In this lesson, you learn to communicate about: rencontres, activités."),
    },
    { type: "highlight", title: "Le pronom Y", trans: t("Le pronom Y") },
    {
      type: "plain",
      text: "Réutilisez la grammaire « **Le pronom Y** » pour construire des phrases claires.",
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
      A2(53),
      "Audio 053",
      phraseBankToDialogue([
      "Tu veux rencontrer de nouvelles personnes ?",
      "Inscris-toi sur un site de rencontres d'activités.",
      "Tu peux y faire du sport, aller à des soirées…",
      "J'adore la salsa ! Je peux y aller avec Valérie !",
      "Au Café des langues, on y parle français et d'autres langues."
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
  training: E10_2_TRAINING,
  evalAudios: E10_2_EVAL,
  ceExercises: E10_2_CE,
  ceEmailExercises: E10_2_CE_EMAIL,
  poDialogues: E10_2_PO,
  pePrompts: E10_2_PE,
  peEmailPrompts: E10_2_PE_EMAIL,
});

export const EXPRESS_E10_3: CommunicationLesson = lessonFromListening({
  id: "E10-3",
  code: "E10.3",
  title: "Organiser un événement",
  prerequisiteFrenchSlugs: ["a2-conj-l08"],
  prerequisiteCommIds: ["E10-2"],
  theory: [
    { type: "heading", text: "Organiser un événement", black: true, trans: t("Organiser un événement") },
    prereqItems([
      { code: "C3.3", title: "Les verbes réguliers au futur simple", href: "/francais/conjugaison/a2-conj-l08" },
    ]),
    {
      type: "plain",
      text: "Dans cette leçon, vous apprenez à communiquer sur : **mariage, organisation**.",
      trans: t("In this lesson, you learn to communicate about: mariage, organisation."),
    },
    { type: "highlight", title: "Le futur simple", trans: t("Le futur simple") },
    {
      type: "plain",
      text: "Réutilisez la grammaire « **Le futur simple** » pour construire des phrases claires.",
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
      A2(61),
      "Audio 061",
      phraseBankToDialogue([
      "Tu viendras au mariage samedi ?",
      "Oui, j'arriverai tôt pour aider.",
      "Mes cousins viendront pour la décoration.",
      "Nous préparerons le buffet ensemble."
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
  training: E10_3_TRAINING,
  evalAudios: E10_3_EVAL,
  ceExercises: E10_3_CE,
  ceEmailExercises: E10_3_CE_EMAIL,
  poDialogues: E10_3_PO,
  pePrompts: E10_3_PE,
  peEmailPrompts: E10_3_PE_EMAIL,
});

export const EXPRESS_E10_4: CommunicationLesson = lessonFromListening({
  id: "E10-4",
  code: "E10.4",
  title: "Participer à la vie scolaire",
  prerequisiteFrenchSlugs: ["a2-gr-l19"],
  prerequisiteCommIds: ["E10-3"],
  theory: [
    { type: "heading", text: "Participer à la vie scolaire", black: true, trans: t("Participer à la vie scolaire") },
    prereqItems([
      { code: "G4.2", title: "Les pronoms relatifs qui et que", href: "/francais/grammaire/a2-gr-l19" },
    ]),
    {
      type: "plain",
      text: "Dans cette leçon, vous apprenez à communiquer sur : **école, parents**.",
      trans: t("In this lesson, you learn to communicate about: école, parents."),
    },
    { type: "highlight", title: "Les pronoms relatifs", trans: t("Les pronoms relatifs") },
    {
      type: "plain",
      text: "Réutilisez la grammaire « **Les pronoms relatifs** » pour construire des phrases claires.",
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
      A2(69),
      "Audio 069",
      phraseBankToDialogue([
      "Il y a un mot dans le cahier de liaison.",
      "Oui, j'ai vu. Il faut aller à la réunion parents-profs.",
      "Des documents à remplir, dater et signer."
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
  training: E10_4_TRAINING,
  evalAudios: E10_4_EVAL,
  ceExercises: E10_4_CE,
  ceEmailExercises: E10_4_CE_EMAIL,
  poDialogues: E10_4_PO,
  pePrompts: E10_4_PE,
  peEmailPrompts: E10_4_PE_EMAIL,
});

export const EXPRESS_E10_5: CommunicationLesson = lessonFromListening({
  id: "E10-5",
  code: "E10.5",
  title: "Participer à la vie associative",
  prerequisiteFrenchSlugs: ["a1-gr-pronominaux-passe-compose"],
  prerequisiteCommIds: ["E10-4"],
  theory: [
    { type: "heading", text: "Participer à la vie associative", black: true, trans: t("Participer à la vie associative") },
    prereqItems([
      { code: "C2.6", title: "Les verbes pronominaux au passé composé", href: "/francais/grammaire/a1-gr-pronominaux-passe-compose" },
    ]),
    {
      type: "plain",
      text: "Dans cette leçon, vous apprenez à communiquer sur : **bénévolat, associations**.",
      trans: t("In this lesson, you learn to communicate about: bénévolat, associations."),
    },
    { type: "highlight", title: "Pronominaux au passé composé", trans: t("Pronominaux au passé composé") },
    {
      type: "plain",
      text: "Réutilisez la grammaire « **Pronominaux au passé composé** » pour construire des phrases claires.",
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
      A2(77),
      "Audio 077",
      phraseBankToDialogue([
      "Je me suis engagé dans une association.",
      "Tu t'es inscrit à la Maison du bénévolat.",
      "On s'est rencontrés dimanche."
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
  training: E10_5_TRAINING,
  evalAudios: E10_5_EVAL,
  ceExercises: E10_5_CE,
  ceEmailExercises: E10_5_CE_EMAIL,
  poDialogues: E10_5_PO,
  pePrompts: E10_5_PE,
  peEmailPrompts: E10_5_PE_EMAIL,
});

export const EXPRESS_E10_LESSONS: CommunicationLesson[] = [
  EXPRESS_E10_1, EXPRESS_E10_2, EXPRESS_E10_3, EXPRESS_E10_4, EXPRESS_E10_5,
];
