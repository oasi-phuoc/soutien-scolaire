import {
  A2,
  dialogueBlock,
  lessonFromListening,
  phraseBankToDialogue,
  prereqItems,
  t,
} from "./express-lesson-factory";
import { E11_1_TRAINING, E11_1_EVAL, E11_2_TRAINING, E11_2_EVAL, E11_3_TRAINING, E11_3_EVAL, E11_4_TRAINING, E11_4_EVAL } from "./express-e11-listening";
import {
  E11_1_CE, E11_1_PO, E11_1_PE,
  E11_2_CE, E11_2_PO, E11_2_PE,
  E11_3_CE, E11_3_PO, E11_3_PE,
  E11_4_CE, E11_4_PO, E11_4_PE,
} from "./express-e11-cpe";
import {
  E11_1_CE_EMAIL, E11_1_PE_EMAIL,
  E11_2_CE_EMAIL, E11_2_PE_EMAIL,
  E11_3_CE_EMAIL, E11_3_PE_EMAIL,
  E11_4_CE_EMAIL, E11_4_PE_EMAIL,
} from "./express-e11-email";
import type { CommunicationLesson } from "./express-types";

export const EXPRESS_E11_1: CommunicationLesson = lessonFromListening({
  id: "E11-1",
  code: "E11.1",
  title: "Apprécier la cuisine",
  prerequisiteFrenchSlugs: ["gr-marqueurs-temps-complet"],
  prerequisiteCommIds: ["E10-5"],
  theory: [
    { type: "heading", text: "Apprécier la cuisine", black: true, trans: t("Apprécier la cuisine") },
    prereqItems([
      { code: "G4.37", title: "Les marqueurs de temps", href: "/francais/grammaire/gr-marqueurs-temps-complet" },
    ]),
    {
      type: "plain",
      text: "Dans cette leçon, vous apprenez à communiquer sur : **cuisine, repas**.",
      trans: t("In this lesson, you learn to communicate about: cuisine, repas."),
    },
    { type: "highlight", title: "Les indicateurs de temps", trans: t("Les indicateurs de temps") },
    {
      type: "plain",
      text: "Réutilisez la grammaire « **Les indicateurs de temps** » pour construire des phrases claires.",
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
      A2(85),
      "Audio 085",
      phraseBankToDialogue([
      "J'adore cette série ! Je te la recommande.",
      "Merci de préparer le repas !",
      "J'adore cuisiner !",
      "Tu fais du dessin depuis longtemps ?",
      "Oui, depuis 13 ans.",
      "Promenade à vélo demain ?"
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
  training: E11_1_TRAINING,
  evalAudios: E11_1_EVAL,
  ceExercises: E11_1_CE,
  ceEmailExercises: E11_1_CE_EMAIL,
  poDialogues: E11_1_PO,
  pePrompts: E11_1_PE,
  peEmailPrompts: E11_1_PE_EMAIL,
});

export const EXPRESS_E11_2: CommunicationLesson = lessonFromListening({
  id: "E11-2",
  code: "E11.2",
  title: "Pratiquer une activité",
  prerequisiteFrenchSlugs: ["a2-gr-l35"],
  prerequisiteCommIds: ["E11-1"],
  theory: [
    { type: "heading", text: "Pratiquer une activité", black: true, trans: t("Pratiquer une activité") },
    prereqItems([
      { code: "G4.35", title: "Les pronoms COD et COI", href: "/francais/grammaire/a2-gr-l35" },
    ]),
    {
      type: "plain",
      text: "Dans cette leçon, vous apprenez à communiquer sur : **loisirs, activités**.",
      trans: t("In this lesson, you learn to communicate about: loisirs, activités."),
    },
    { type: "highlight", title: "Les pronoms COD", trans: t("Les pronoms COD") },
    {
      type: "plain",
      text: "Réutilisez la grammaire « **Les pronoms COD** » pour construire des phrases claires.",
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
      A2(93),
      "Audio 093",
      phraseBankToDialogue([
      "Tu peux m'apporter un dessert ?",
      "Oui, je te l'apporterai.",
      "Je t'aiderai aussi à dresser la table."
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
  training: E11_2_TRAINING,
  evalAudios: E11_2_EVAL,
  ceExercises: E11_2_CE,
  ceEmailExercises: E11_2_CE_EMAIL,
  poDialogues: E11_2_PO,
  pePrompts: E11_2_PE,
  peEmailPrompts: E11_2_PE_EMAIL,
});

export const EXPRESS_E11_3: CommunicationLesson = lessonFromListening({
  id: "E11-3",
  code: "E11.3",
  title: "Partager ses goûts",
  prerequisiteFrenchSlugs: ["a2-gr-l35"],
  prerequisiteCommIds: ["E11-2"],
  theory: [
    { type: "heading", text: "Partager ses goûts", black: true, trans: t("Partager ses goûts") },
    prereqItems([
      { code: "G4.35", title: "Les pronoms COD et COI", href: "/francais/grammaire/a2-gr-l35" },
    ]),
    {
      type: "plain",
      text: "Dans cette leçon, vous apprenez à communiquer sur : **goûts, séries, musique**.",
      trans: t("In this lesson, you learn to communicate about: goûts, séries, musique."),
    },
    { type: "highlight", title: "Les pronoms COI", trans: t("Les pronoms COI") },
    {
      type: "plain",
      text: "Réutilisez la grammaire « **Les pronoms COI** » pour construire des phrases claires.",
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
      A2(101),
      "Audio 101",
      phraseBankToDialogue([
      "J'adore cette série ! Je te la recommande.",
      "J'ai hâte de rejouer de la guitare.",
      "Merci de préparer le repas !",
      "J'adore cuisiner."
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
  training: E11_3_TRAINING,
  evalAudios: E11_3_EVAL,
  ceExercises: E11_3_CE,
  ceEmailExercises: E11_3_CE_EMAIL,
  poDialogues: E11_3_PO,
  pePrompts: E11_3_PE,
  peEmailPrompts: E11_3_PE_EMAIL,
});

export const EXPRESS_E11_4: CommunicationLesson = lessonFromListening({
  id: "E11-4",
  code: "E11.4",
  title: "Passer des vacances",
  prerequisiteFrenchSlugs: ["a2-gr-hypothese-futur"],
  prerequisiteCommIds: ["E11-3"],
  theory: [
    { type: "heading", text: "Passer des vacances", black: true, trans: t("Passer des vacances") },
    prereqItems([
      { code: "G4.46", title: "L'hypothèse sur le futur", href: "/francais/grammaire/a2-gr-hypothese-futur" },
    ]),
    {
      type: "plain",
      text: "Dans cette leçon, vous apprenez à communiquer sur : **vacances, mer**.",
      trans: t("In this lesson, you learn to communicate about: vacances, mer."),
    },
    { type: "highlight", title: "La condition si + futur", trans: t("La condition si + futur") },
    {
      type: "plain",
      text: "Réutilisez la grammaire « **La condition si + futur** » pour construire des phrases claires.",
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
      A2(109),
      "Audio 109",
      phraseBankToDialogue([
      "Si tu viens avec nous, tu passeras de bonnes vacances !",
      "Si je réserve maintenant, ce sera moins cher.",
      "S'il fait chaud, on se baignera."
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
  training: E11_4_TRAINING,
  evalAudios: E11_4_EVAL,
  ceExercises: E11_4_CE,
  ceEmailExercises: E11_4_CE_EMAIL,
  poDialogues: E11_4_PO,
  pePrompts: E11_4_PE,
  peEmailPrompts: E11_4_PE_EMAIL,
});

export const EXPRESS_E11_LESSONS: CommunicationLesson[] = [
  EXPRESS_E11_1, EXPRESS_E11_2, EXPRESS_E11_3, EXPRESS_E11_4,
];
