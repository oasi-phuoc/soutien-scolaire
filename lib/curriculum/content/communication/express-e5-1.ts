import { listeningPoolExercise, type CommunicationLesson } from "./express-types";
import { E5_1_TRAINING, E5_1_EVAL } from "./express-e5-1-listening";
import { E5_1_CE, E5_1_PO, E5_1_PE } from "./express-e5-1-cpe";
import { E5_1_CE_EMAIL, E5_1_PE_EMAIL } from "./express-e5-email";
import { A1, t } from "./express-lesson-factory";

export const EXPRESS_E5_1: CommunicationLesson = {
  id: "E5-1",
  code: "E5.1",
  title: "Aller chez le médecin",
  prerequisiteFrenchSlugs: ["v8-corps", "v8-maladies", "v8-medecins", "a1-gr-l11"],
  prerequisiteCommIds: ["E4-3"],
  theory: [
    { type: "heading", text: "Aller chez le médecin", black: true, trans: t("Going to the doctor") },
    {
      type: "prerequisites",
      items: [
        { code: "E4.3", title: "Boulangerie", href: "/communication/E4-3" },
        { code: "V8.1", title: "Corps", href: "/francais/vocabulaire/v8-corps" },
        { code: "V8.2", title: "Maladies", href: "/francais/vocabulaire/v8-maladies" },
        { code: "V8.3", title: "Médecins", href: "/francais/vocabulaire/v8-medecins" }
      ],
    },
    {
      type: "plain",
      text: "Chez le médecin, on dit **j'ai mal à la / au / aux**… : **à la** gorge, **au** ventre, **à la** tête (articles contractés).",
      trans: t("Going to the doctor"),
    },
    { type: "highlight", title: "Articles contractés (à + le/les)", trans: t("Articles contractés (à + le/les)") },
    {
      type: "section",
      items: [
        "J'ai mal **à la** gorge.",
        "J'ai mal **au** ventre.",
        "J'ai mal **à la** tête.",
        "Allez **chez** le médecin."
      ],
    },
    {
      type: "table",
      accentHeader: true,
      headers: ["Question", "Réponse possible"],
      rows: [
        ["Vous avez mal où ?", "J'ai mal à la gorge."],
        ["Vous avez de la fièvre ?", "Oui, j'ai de la fièvre."],
        ["Qu'est-ce que j'ai ?", "C'est la grippe."],
        ["Qu'est-ce que je dois faire ?", "Restez à la maison."]
      ],
    },
    { type: "heading", text: "Exemple de dialogue", black: true, trans: t("Sample dialogue") },
    {
      type: "dialogue",
      audioSrc: A1(143),
      audioLabel: "Audio 143",
      lines: [
        { role: "A", text: "Vous avez mal où ?" },
        { role: "B", text: "J'ai mal à la gorge." },
        { role: "A", text: "Vous toussez ?" },
        { role: "B", text: "Oui, je tousse beaucoup." },
        { role: "A", text: "Vous avez de la fièvre ?" },
        { role: "B", text: "Oui." },
        { role: "A", text: "Qu'est-ce que j'ai, docteur ?" },
        { role: "B", text: "C'est la grippe !" },
        { role: "A", text: "Qu'est-ce que je dois faire ?" },
        { role: "B", text: "Restez à la maison." }
      ],
    },
    {
      type: "vocab",
      items: [
        { fr: "avoir mal", example: "J'ai mal à la tête." },
        { fr: "fièvre / toux", example: "J'ai de la fièvre." },
        { fr: "grippe / rhume", example: "C'est la grippe." },
        { fr: "urgences", example: "Je suis aux urgences." }
      ],
    },
  ],
  exerciseCount: 4,
  exercises: E5_1_TRAINING.map((a) =>
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
  evalExercises: E5_1_EVAL.map((a) =>
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
  ceExercise: E5_1_CE,
  ceEmailExercise: E5_1_CE_EMAIL,
  poDialogues: E5_1_PO,
  pePrompts: E5_1_PE,
  peEmailPrompts: E5_1_PE_EMAIL,
};
