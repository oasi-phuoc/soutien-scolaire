import { listeningPoolExercise, type CommunicationLesson } from "./express-types";
import { E3_1_TRAINING, E3_1_EVAL } from "./express-e3-1-listening";
import { E3_1_CE, E3_1_PO, E3_1_PE } from "./express-e3-1-cpe";
import { E3_1_CE_EMAIL, E3_1_PE_EMAIL } from "./express-e3-email";
import { A1, t } from "./express-lesson-factory";

export const EXPRESS_E3_1: CommunicationLesson = {
  id: "E3-1",
  code: "E3.1",
  title: "Aller à l'école",
  prerequisiteFrenchSlugs: ["v5-matieres", "v5-materiel-scolaire", "a1-gr-l10"],
  prerequisiteCommIds: ["E2-3"],
  theory: [
    { type: "heading", text: "Aller à l'école", black: true, trans: t("Going to school") },
    {
      type: "prerequisites",
      items: [
        { code: "E2.3", title: "Règlement", href: "/communication/E2-3" },
        { code: "V5.1", title: "Matières", href: "/francais/vocabulaire/v5-matieres" },
        { code: "V5.2", title: "Matériel", href: "/francais/vocabulaire/v5-materiel-scolaire" },
        { code: "G4.11", title: "Questions ouvertes", href: "/francais/grammaire/a1-gr-l10" }
      ],
    },
    {
      type: "plain",
      text: "Pour s'orienter à l'école, on pose des questions avec **qui**, **quoi**, **où**, **quelle**, **quand**, **combien**, **comment**.",
      trans: t("Going to school"),
    },
    { type: "highlight", title: "Mots interrogatifs", trans: t("Mots interrogatifs") },
    {
      type: "section",
      items: [
        "**Où** est la salle ?",
        "**Quand** commence le cours ?",
        "**Comment** vous appelez-vous ?",
        "**Quelle** est votre carte d'étudiant ?"
      ],
    },
    {
      type: "table",
      accentHeader: true,
      headers: ["Question", "Réponse possible"],
      rows: [
        ["Vous avez votre carte d'étudiant ?", "Oui. / Non, j'ai le formulaire."],
        ["Où est la salle ?", "Dans l'amphi A12."],
        ["Je peux venir plus tard ?", "Venez à 11 heures."],
        ["Tu commences à quelle heure ?", "À 9 heures."]
      ],
    },
    { type: "heading", text: "Exemple de dialogue", black: true, trans: t("Sample dialogue") },
    {
      type: "dialogue",
      audioSrc: A1(76),
      audioLabel: "Audio 076",
      lines: [
        { role: "A", text: "Vous avez votre carte d'étudiant ?" },
        { role: "B", text: "Oui." },
        { role: "A", text: "Je cherche le cours d'économie, où est la salle ?" },
        { role: "B", text: "Le cours a lieu dans l'amphi A12." },
        { role: "A", text: "Tu peux m'aider ?" },
        { role: "B", text: "Demande au secrétariat." },
        { role: "A", text: "Venez chercher votre carte d'étudiant à 10 heures." },
        { role: "B", text: "Je peux venir plus tard ?" },
        { role: "A", text: "Tu commences les cours à quelle heure ?" },
        { role: "B", text: "Aujourd'hui, je commence à 9 heures." },
        { role: "A", text: "Demain, je finis à 11 heures." },
        { role: "B", text: "On mange au resto U ou à la cafèt' ?" }
      ],
    },
    {
      type: "vocab",
      items: [
        { fr: "carte d'étudiant", example: "Voici ma carte d'étudiant." },
        { fr: "amphi", example: "Le cours est dans l'amphi A12." },
        { fr: "secrétariat", example: "Demandez au secrétariat." },
        { fr: "examen / oral", example: "Vous avez un oral." }
      ],
    },
  ],
  exerciseCount: 4,
  exercises: E3_1_TRAINING.map((a) =>
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
  evalExercises: E3_1_EVAL.map((a) =>
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
  ceExercises: E3_1_CE,
  ceEmailExercises: E3_1_CE_EMAIL,
  poDialogues: E3_1_PO,
  pePrompts: E3_1_PE,
  peEmailPrompts: E3_1_PE_EMAIL,
};
