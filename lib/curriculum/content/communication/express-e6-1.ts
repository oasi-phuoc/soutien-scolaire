import { listeningPoolExercise, type CommunicationLesson } from "./express-types";
import { E6_1_TRAINING, E6_1_EVAL } from "./express-e6-1-listening";
import { E6_1_CE, E6_1_PO, E6_1_PE } from "./express-e6-1-cpe";
import { E6_1_CE_EMAIL, E6_1_PE_EMAIL } from "./express-e6-email";
import { A1, t } from "./express-lesson-factory";

export const EXPRESS_E6_1: CommunicationLesson = {
  id: "E6-1",
  code: "E6.1",
  title: "Demander son chemin",
  prerequisiteFrenchSlugs: ["v9-ville", "v9-direction", "a1-conj-l08"],
  prerequisiteCommIds: ["E5-2"],
  theory: [
    { type: "heading", text: "Demander son chemin", black: true, trans: t("Asking for directions") },
    {
      type: "prerequisites",
      items: [
        { code: "E5.2", title: "Pharmacie", href: "/communication/E5-2" },
        { code: "V9.1", title: "Ville", href: "/francais/vocabulaire/v9-ville" },
        { code: "V9.3", title: "Direction", href: "/francais/vocabulaire/v9-direction" },
        { code: "C2.1", title: "Aller", href: "/francais/conjugaison/a1-conj-l08" }
      ],
    },
    {
      type: "plain",
      text: "Pour demander son chemin, on conjugue **aller** : je **vais**, tu **vas**, il **va**, nous **allons**… et on donne des indications.",
      trans: t("Asking for directions"),
    },
    { type: "highlight", title: "Le verbe aller", trans: t("Le verbe aller") },
    {
      type: "section",
      items: [
        "Je **vais** à la mairie.",
        "Vous **allez** tout droit.",
        "On **va** à pied.",
        "Tu **vas** prendre le métro."
      ],
    },
    {
      type: "table",
      accentHeader: true,
      headers: ["Question", "Réponse possible"],
      rows: [
        ["Vous pourriez m'aider ?", "Oui ?"],
        ["C'est loin ?", "Non, c'est à côté."],
        ["Quel bus ?", "Le 14."],
        ["C'est direct ?", "Non, il faut changer."]
      ],
    },
    { type: "heading", text: "Exemple de dialogue", black: true, trans: t("Sample dialogue") },
    {
      type: "dialogue",
      audioSrc: A1(164),
      audioLabel: "Audio 164",
      lines: [
        { role: "A", text: "Excusez-moi, vous pourriez m'aider ? Je suis perdu. Je cherche la préfecture." },
        { role: "B", text: "La poste, c'est loin ?" },
        { role: "A", text: "Non, c'est à côté !" },
        { role: "B", text: "Pour aller à la poste, s'il vous plaît ?" },
        { role: "A", text: "Vous pouvez prendre le bus ou le tram." },
        { role: "B", text: "Vous allez tout droit. Tournez à gauche." },
        { role: "A", text: "Le trajet dure 40 minutes." },
        { role: "B", text: "C'est trop long !" },
        { role: "A", text: "C'est plus rapide en métro." },
        { role: "B", text: "C'est direct ?" },
        { role: "A", text: "Non, il faut changer à Opéra et prendre la ligne 4." },
        { role: "B", text: "N'oubliez pas de valider votre titre de transport !" }
      ],
    },
    {
      type: "vocab",
      items: [
        { fr: "tout droit", example: "Allez tout droit." },
        { fr: "tourner", example: "Tournez à gauche." },
        { fr: "trajet", example: "Le trajet dure 20 minutes." },
        { fr: "distributeur", example: "Achetez au distributeur." }
      ],
    },
  ],
  exerciseCount: 4,
  exercises: E6_1_TRAINING.map((a) =>
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
  evalExercises: E6_1_EVAL.map((a) =>
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
  ceExercise: E6_1_CE,
  ceEmailExercise: E6_1_CE_EMAIL,
  poDialogues: E6_1_PO,
  pePrompts: E6_1_PE,
  peEmailPrompts: E6_1_PE_EMAIL,
};
