import { listeningPoolExercise, type CommunicationLesson } from "./express-types";
import { E5_2_TRAINING, E5_2_EVAL } from "./express-e5-2-listening";
import { E5_2_CE, E5_2_PO, E5_2_PE } from "./express-e5-2-cpe";
import { E5_2_CE_EMAIL, E5_2_PE_EMAIL } from "./express-e5-email";
import { A1, t } from "./express-lesson-factory";

export const EXPRESS_E5_2: CommunicationLesson = {
  id: "E5-2",
  code: "E5.2",
  title: "Aller à la pharmacie",
  prerequisiteFrenchSlugs: ["v8-pharmacie", "a1-gr-modaux"],
  prerequisiteCommIds: ["E5-1"],
  theory: [
    { type: "heading", text: "Aller à la pharmacie", black: true, trans: t("Going to the pharmacy") },
    {
      type: "prerequisites",
      items: [
        { code: "E5.1", title: "Médecin", href: "/communication/E5-1" },
        { code: "V8.4", title: "Pharmacie", href: "/francais/vocabulaire/v8-pharmacie" },
        { code: "G1.6", title: "Modaux", href: "/francais/grammaire/a1-gr-modaux" }
      ],
    },
    {
      type: "plain",
      text: "À la pharmacie, on exprime l'**obligation** avec **il faut** et **devoir** : **Il faut** prendre un comprimé. Vous **devez** voir un médecin.",
      trans: t("Going to the pharmacy"),
    },
    { type: "highlight", title: "Falloir et devoir", trans: t("Falloir et devoir") },
    {
      type: "section",
      items: [
        "**Il faut** mettre cette crème.",
        "Vous **devez** prendre un comprimé.",
        "**Il faut** aller voir un médecin.",
        "Vous **devez** rester à la maison."
      ],
    },
    {
      type: "table",
      accentHeader: true,
      headers: ["Question", "Réponse possible"],
      rows: [
        ["Vous avez une ordonnance ?", "Oui, voilà."],
        ["Comment je prends les antibiotiques ?", "Un comprimé matin, midi et soir."],
        ["Vous avez de l'aspirine ?", "Oui, en sachet."],
        ["Contre la toux ?", "Des pastilles / du sirop."]
      ],
    },
    { type: "heading", text: "Exemple de dialogue", black: true, trans: t("Sample dialogue") },
    {
      type: "dialogue",
      audioSrc: A1(153),
      audioLabel: "Audio 153",
      lines: [
        { role: "A", text: "Vous avez une ordonnance ?" },
        { role: "B", text: "Oui, voilà." },
        { role: "A", text: "Vous avez votre carte Vitale ?" },
        { role: "B", text: "Non, je n'habite pas en France." },
        { role: "A", text: "Bonjour, j'ai une brûlure à la main, est-ce que vous pouvez m'aider ?" },
        { role: "B", text: "Mettez cette crème deux fois par jour sur la brûlure." },
        { role: "A", text: "Je voudrais quelque chose contre le rhume." },
        { role: "B", text: "Vous avez de l'aspirine en sachet ?" },
        { role: "A", text: "Comment je prends les antibiotiques ?" },
        { role: "B", text: "Vous devez prendre un comprimé matin, midi et soir." }
      ],
    },
    {
      type: "vocab",
      items: [
        { fr: "ordonnance", example: "Voici mon ordonnance." },
        { fr: "carte Vitale", example: "Voici ma carte Vitale." },
        { fr: "comprimé / sirop", example: "Prenez un comprimé." },
        { fr: "brûlure", example: "J'ai une brûlure." }
      ],
    },
  ],
  exerciseCount: 4,
  exercises: E5_2_TRAINING.map((a) =>
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
  evalExercises: E5_2_EVAL.map((a) =>
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
  ceExercises: E5_2_CE,
  ceEmailExercises: E5_2_CE_EMAIL,
  poDialogues: E5_2_PO,
  pePrompts: E5_2_PE,
  peEmailPrompts: E5_2_PE_EMAIL,
};
