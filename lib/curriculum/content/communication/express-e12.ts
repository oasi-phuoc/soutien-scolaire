import {
  A2,
  dialogueBlock,
  lessonFromListening,
  phraseBankToDialogue,
  prereqItems,
  t,
} from "./express-lesson-factory";
import { E12_1_TRAINING, E12_1_EVAL, E12_2_TRAINING, E12_2_EVAL, E12_3_TRAINING, E12_3_EVAL, E12_4_TRAINING, E12_4_EVAL, E12_5_TRAINING, E12_5_EVAL } from "./express-e12-listening";
import {
  E12_1_CE, E12_1_PO, E12_1_PE,
  E12_2_CE, E12_2_PO, E12_2_PE,
  E12_3_CE, E12_3_PO, E12_3_PE,
  E12_4_CE, E12_4_PO, E12_4_PE,
  E12_5_CE, E12_5_PO, E12_5_PE,
} from "./express-e12-cpe";
import {
  E12_1_CE_EMAIL, E12_1_PE_EMAIL,
  E12_2_CE_EMAIL, E12_2_PE_EMAIL,
  E12_3_CE_EMAIL, E12_3_PE_EMAIL,
  E12_4_CE_EMAIL, E12_4_PE_EMAIL,
  E12_5_CE_EMAIL, E12_5_PE_EMAIL,
} from "./express-e12-email";
import type { CommunicationLesson } from "./express-types";

export const EXPRESS_E12_1: CommunicationLesson = lessonFromListening({
  id: "E12-1",
  code: "E12.1",
  title: "S'occuper de sa santé",
  prerequisiteFrenchSlugs: ["a2-gr-subjonctif"],
  prerequisiteCommIds: ["E11-4"],
  theory: [
    { type: "heading", text: "S'occuper de sa santé", black: true, trans: t("S'occuper de sa santé") },
    prereqItems([
      { code: "G4.35", title: "Le subjonctif", href: "/francais/grammaire/a2-gr-subjonctif" },
    ]),
    {
      type: "plain",
      text: "Dans cette leçon, vous apprenez à communiquer sur : **santé, conseils**.",
      trans: t("In this lesson, you learn to communicate about: santé, conseils."),
    },
    { type: "highlight", title: "Le subjonctif", trans: t("Le subjonctif") },
    {
      type: "plain",
      text: "Réutilisez la grammaire « **Le subjonctif** » pour construire des phrases claires.",
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
      A2(117),
      "Audio 117",
      phraseBankToDialogue([
      "J'ai mal à la gorge. Il faut que je voie un médecin.",
      "Je voudrais que tu prennes rendez-vous.",
      "Pour que tu ailles mieux, bois de l'eau."
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
  training: E12_1_TRAINING,
  evalAudios: E12_1_EVAL,
  ceExercises: E12_1_CE,
  ceEmailExercises: E12_1_CE_EMAIL,
  poDialogues: E12_1_PO,
  pePrompts: E12_1_PE,
  peEmailPrompts: E12_1_PE_EMAIL,
});

export const EXPRESS_E12_2: CommunicationLesson = lessonFromListening({
  id: "E12-2",
  code: "E12.2",
  title: "Faire du sport",
  prerequisiteFrenchSlugs: ["a2-conj-l07"],
  prerequisiteCommIds: ["E12-1"],
  theory: [
    { type: "heading", text: "Faire du sport", black: true, trans: t("Faire du sport") },
    prereqItems([
      { code: "C2.7", title: "Les verbes réguliers à l'imparfait", href: "/francais/conjugaison/a2-conj-l07" },
    ]),
    {
      type: "plain",
      text: "Dans cette leçon, vous apprenez à communiquer sur : **sport, entraînement**.",
      trans: t("In this lesson, you learn to communicate about: sport, entraînement."),
    },
    { type: "highlight", title: "L'imparfait", trans: t("L'imparfait") },
    {
      type: "plain",
      text: "Réutilisez la grammaire « **L'imparfait** » pour construire des phrases claires.",
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
      A2(125),
      "Audio 125",
      phraseBankToDialogue([
      "Le parcours de santé, c'était formidable !",
      "Je me sens en pleine forme.",
      "Vous avez des cours de yoga ?",
      "Oui, collectifs ou particuliers. L'abonnement annuel est plus intéressant."
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
  training: E12_2_TRAINING,
  evalAudios: E12_2_EVAL,
  ceExercises: E12_2_CE,
  ceEmailExercises: E12_2_CE_EMAIL,
  poDialogues: E12_2_PO,
  pePrompts: E12_2_PE,
  peEmailPrompts: E12_2_PE_EMAIL,
});

export const EXPRESS_E12_3: CommunicationLesson = lessonFromListening({
  id: "E12-3",
  code: "E12.3",
  title: "Manger équilibré",
  prerequisiteFrenchSlugs: ["a2-gr-l52"],
  prerequisiteCommIds: ["E12-2"],
  theory: [
    { type: "heading", text: "Manger équilibré", black: true, trans: t("Manger équilibré") },
    prereqItems([
      { code: "G4.24", title: "Les relations logiques — Cause et conséquence", href: "/francais/grammaire/a2-gr-l52" },
    ]),
    {
      type: "plain",
      text: "Dans cette leçon, vous apprenez à communiquer sur : **alimentation**.",
      trans: t("In this lesson, you learn to communicate about: alimentation."),
    },
    { type: "highlight", title: "Conséquence et but", trans: t("Conséquence et but") },
    {
      type: "plain",
      text: "Réutilisez la grammaire « **Conséquence et but** » pour construire des phrases claires.",
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
      A2(134),
      "Audio 134",
      phraseBankToDialogue([
      "C'est une question d'équilibre, pas de quantité.",
      "Si tu manges trop vite, c'est mauvais pour la santé.",
      "Change ton mode de vie, alors tu maigriras.",
      "Pour la collation, prenez un fruit !"
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
  training: E12_3_TRAINING,
  evalAudios: E12_3_EVAL,
  ceExercises: E12_3_CE,
  ceEmailExercises: E12_3_CE_EMAIL,
  poDialogues: E12_3_PO,
  pePrompts: E12_3_PE,
  peEmailPrompts: E12_3_PE_EMAIL,
});

export const EXPRESS_E12_4: CommunicationLesson = lessonFromListening({
  id: "E12-4",
  code: "E12.4",
  title: "Vivre en ville",
  prerequisiteFrenchSlugs: ["a2-gr-l39"],
  prerequisiteCommIds: ["E12-3"],
  theory: [
    { type: "heading", text: "Vivre en ville", black: true, trans: t("Vivre en ville") },
    prereqItems([
      { code: "G4.16", title: "Le comparatif", href: "/francais/grammaire/a2-gr-l39" },
    ]),
    {
      type: "plain",
      text: "Dans cette leçon, vous apprenez à communiquer sur : **ville, campagnes**.",
      trans: t("In this lesson, you learn to communicate about: ville, campagnes."),
    },
    { type: "highlight", title: "La comparaison", trans: t("La comparaison") },
    {
      type: "plain",
      text: "Réutilisez la grammaire « **La comparaison** » pour construire des phrases claires.",
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
      A2(142),
      "Audio 142",
      phraseBankToDialogue([
      "La vie en ville est plus animée que la campagne.",
      "Oui, mais la campagne est plus calme.",
      "En ville, il y a plus de transports."
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
  training: E12_4_TRAINING,
  evalAudios: E12_4_EVAL,
  ceExercises: E12_4_CE,
  ceEmailExercises: E12_4_CE_EMAIL,
  poDialogues: E12_4_PO,
  pePrompts: E12_4_PE,
  peEmailPrompts: E12_4_PE_EMAIL,
});

export const EXPRESS_E12_5: CommunicationLesson = lessonFromListening({
  id: "E12-5",
  code: "E12.5",
  title: "Prendre soin de soi",
  prerequisiteFrenchSlugs: ["a2-gr-l52"],
  prerequisiteCommIds: ["E12-4"],
  theory: [
    { type: "heading", text: "Prendre soin de soi", black: true, trans: t("Taking care of yourself") },
    prereqItems([
      { code: "G4.24", title: "Les relations logiques — Cause et conséquence", href: "/francais/grammaire/a2-gr-l52" },
    ]),
    {
      type: "plain",
      text: "Pour prendre soin de soi : **résolutions**, **sommeil**, **hygiène** et **relaxation**.",
      trans: t("Self-care: resolutions, sleep, hygiene and relaxation."),
    },
    { type: "highlight", title: "Verbes et adjectifs + à/de + infinitif", trans: t("Verbes et adjectifs + à/de + infinitif") },
    {
      type: "plain",
      text: "Certains verbes/adjectifs se construisent avec **à** ou **de** + infinitif : décider **de**, continuer **à**, prêt **à**, arrêter **de**, c'est important **de**.",
      trans: t("Some verbs/adjectives take à or de before an infinitive."),
    },
    {
      type: "section",
      items: [
        "J'ai décidé **de** prendre soin de moi.",
        "Il continue **à** stresser.",
        "Nous sommes prêts **à** vous aider.",
        "C'est important **d'**écouter son corps."
],
    },
    {
      type: "table",
      accentHeader: true,
      headers: ["Question", "Réponse possible"],
      rows: [
        [
                "Tes résolutions ?",
                "J'arrête de stresser."
        ],
        [
                "Tu dors bien ?",
                "Non, je n'arrive pas à m'endormir."
        ],
        [
                "On offre quoi à Léa ?",
                "Un soin pour le visage."
        ],
        [
                "Où est le savon ?",
                "À côté de la mousse à raser."
        ]
],
      transHeaders: { en: ["Question", "Possible answer"] },
    },
    { type: "heading", text: "Exemple de dialogue", black: true, trans: t("Sample dialogue") },
    dialogueBlock(
      A2(150),
      "Audio 150",
      phraseBankToDialogue([
      "Tu as fait ta liste de bonnes résolutions ?",
      "Oui. J'ai décidé d'abandonner mes mauvaises habitudes.",
      "J'apprends à me relaxer.",
      "Tu peux faire un séjour de remise en forme.",
      "Je n'arrive pas à m'endormir rapidement."
]),
    ),
    {
      type: "vocab",
      items: [
        { fr: "bonne résolution", example: "Ma liste de bonnes résolutions." },
        { fr: "se relaxer", example: "J'apprends à me relaxer." },
        { fr: "remise en forme", example: "Un séjour de remise en forme." },
        { fr: "insomnie", example: "Je parle d'insomnies." },
        { fr: "soin pour le visage", example: "Un soin comme cadeau." },
        { fr: "mousse à raser", example: "À côté de la mousse à raser." },
      ],
    },
  ],
  training: E12_5_TRAINING,
  evalAudios: E12_5_EVAL,
  ceExercises: E12_5_CE,
  ceEmailExercises: E12_5_CE_EMAIL,
  poDialogues: E12_5_PO,
  pePrompts: E12_5_PE,
  peEmailPrompts: E12_5_PE_EMAIL,
});

export const EXPRESS_E12_LESSONS: CommunicationLesson[] = [
  EXPRESS_E12_1, EXPRESS_E12_2, EXPRESS_E12_3, EXPRESS_E12_4, EXPRESS_E12_5,
];
