import { listeningPoolExercise, type CommunicationLesson } from "./express-types";
import { E4_3_TRAINING, E4_3_EVAL } from "./express-e4-3-listening";
import { E4_3_CE, E4_3_PO, E4_3_PE } from "./express-e4-3-cpe";
import { A1, t } from "./express-lesson-factory";

export const EXPRESS_E4_3: CommunicationLesson = {
  id: "E4-3",
  code: "E4.3",
  title: "Aller à la boulangerie",
  prerequisiteFrenchSlugs: ["v7-recettes", "v7-quantites", "v7-boulangerie"],
  prerequisiteCommIds: ["E4-2"],
  theory: [
    { type: "heading", text: "Aller à la boulangerie", black: true, trans: t("Going to the bakery") },
    {
      type: "prerequisites",
      items: [
        { code: "E4.2", title: "Restaurant", href: "/communication/E4-2" },
        { code: "V7.4", title: "Recettes", href: "/francais/vocabulaire/v7-recettes" },
        { code: "V7.5", title: "Quantités", href: "/francais/vocabulaire/v7-quantites" }
      ],
    },
    {
      type: "plain",
      text: "À la boulangerie, on exprime la **quantité** : **deux** croissants, une tarte **pour six**, **beaucoup de** beurre, **un peu de** sel.",
      trans: t("Going to the bakery"),
    },
    { type: "highlight", title: "Expression de la quantité", trans: t("Expression de la quantité") },
    {
      type: "section",
      items: [
        "**Deux** croissants s'il vous plaît.",
        "Une tarte **pour six**.",
        "**Beaucoup de** beurre.",
        "**Un peu de** sel."
      ],
    },
    {
      type: "table",
      accentHeader: true,
      headers: ["Question", "Réponse possible"],
      rows: [
        ["C'est à qui ?", "C'est à moi !"],
        ["Et avec ceci ?", "Une baguette."],
        ["Une tarte pour combien ?", "Pour six."],
        ["Ce sera tout ?", "Oui, merci."]
      ],
    },
    { type: "heading", text: "Exemple de dialogue", black: true, trans: t("Sample dialogue") },
    {
      type: "dialogue",
      audioSrc: A1(131),
      audioLabel: "Audio 131",
      lines: [
        { role: "A", text: "C'est à qui ?" },
        { role: "B", text: "C'est à moi !" },
        { role: "A", text: "Et avec ceci ?" },
        { role: "B", text: "Une baguette." },
        { role: "A", text: "Vous désirez ?" },
        { role: "B", text: "Une tarte pour 6 s'il vous plaît." },
        { role: "A", text: "Vous prenez une formule ?" },
        { role: "B", text: "Oui, qu'est-ce qu'il y a dans une formule ?" },
        { role: "A", text: "Dans une formule, il y a un sandwich, un dessert et une boisson." },
        { role: "B", text: "Ce sera tout ?" },
        { role: "A", text: "Oui, merci !" }
      ],
    },
    {
      type: "vocab",
      items: [
        { fr: "baguette / croissant", example: "Deux croissants." },
        { fr: "formule", example: "Qu'est-ce qu'il y a dans une formule ?" },
        { fr: "sans contact", example: "Par carte, sans contact." },
        { fr: "tarte", example: "Une tarte au citron." }
      ],
    },
  ],
  exerciseCount: 4,
  exercises: E4_3_TRAINING.map((a) =>
    listeningPoolExercise({
      id: a.id,
      audioSrc: a.audioSrc,
      audioLabel: a.audioLabel,
      instruction: a.instruction,
      transcript: a.transcript,
      questionPool: a.pool,
      questionCount: a.questionCount,
    }),
  ),
  evalExercises: E4_3_EVAL.map((a) =>
    listeningPoolExercise({
      id: a.id,
      audioSrc: a.audioSrc,
      audioLabel: a.audioLabel,
      instruction: a.instruction,
      transcript: a.transcript,
      questionPool: a.pool,
      questionCount: a.questionCount,
    }),
  ),
  ceExercise: E4_3_CE,
  poDialogues: E4_3_PO,
  pePrompts: E4_3_PE,
};
