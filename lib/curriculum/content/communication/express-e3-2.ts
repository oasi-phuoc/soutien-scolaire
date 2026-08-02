import { listeningPoolExercise, type CommunicationLesson } from "./express-types";
import { E3_2_TRAINING, E3_2_EVAL } from "./express-e3-2-listening";
import { E3_2_CE, E3_2_PO, E3_2_PE } from "./express-e3-2-cpe";
import { E3_2_CE_EMAIL, E3_2_PE_EMAIL } from "./express-e3-email";
import { A1, t } from "./express-lesson-factory";

export const EXPRESS_E3_2: CommunicationLesson = {
  id: "E3-2",
  code: "E3.2",
  title: "Décrire son quotidien",
  prerequisiteFrenchSlugs: ["v2-saisons", "v2-meteo", "a1-conj-l09"],
  prerequisiteCommIds: ["E3-1"],
  theory: [
    { type: "heading", text: "Décrire son quotidien", black: true, trans: t("Describing your daily routine") },
    {
      type: "prerequisites",
      items: [
        { code: "E3.1", title: "Aller à l'école", href: "/communication/E3-1" },
        { code: "V2.3", title: "Saisons", href: "/francais/vocabulaire/v2-saisons" },
        { code: "V2.4", title: "Météo", href: "/francais/vocabulaire/v2-meteo" },
        { code: "C2.2", title: "Pronominaux", href: "/francais/conjugaison/a1-conj-l09" }
      ],
    },
    {
      type: "plain",
      text: "Pour décrire la journée, on utilise les **verbes pronominaux** : **se lever**, **se laver**, **s'habiller**, **se coucher**, **se préparer**.",
      trans: t("Describing your daily routine"),
    },
    { type: "highlight", title: "Verbes pronominaux", trans: t("Verbes pronominaux") },
    {
      type: "section",
      items: [
        "Je **me lève** à 6 h 30.",
        "Elle **se douche** et **s'habille**.",
        "Je **me couche** tôt.",
        "Nous **nous promenons** le week-end."
      ],
    },
    {
      type: "table",
      accentHeader: true,
      headers: ["Question", "Réponse possible"],
      rows: [
        ["Tu te couches tard ?", "Non, je me couche tôt."],
        ["Tu mets le réveil à quelle heure ?", "À 6 heures."],
        ["Qu'est-ce que tu fais le week-end ?", "On se promène."],
        ["Tu as du temps libre ?", "Non, je travaille beaucoup."]
      ],
    },
    { type: "heading", text: "Exemple de dialogue", black: true, trans: t("Sample dialogue") },
    {
      type: "dialogue",
      audioSrc: A1(87),
      audioLabel: "Audio 087",
      lines: [
        { role: "A", text: "Tu te couches tard ?" },
        { role: "B", text: "Non, je me couche tôt." },
        { role: "A", text: "Tu mets le réveil à quelle heure ?" },
        { role: "B", text: "D'habitude, je mets mon réveil à 6 heures." },
        { role: "A", text: "J'ai besoin d'une heure pour me préparer." },
        { role: "B", text: "Pour les rendez-vous, j'arrive toujours à l'heure." },
        { role: "A", text: "Moi, j'arrive souvent en retard !" },
        { role: "B", text: "Vous avez du temps libre ?" },
        { role: "A", text: "Non, je travaille beaucoup." },
        { role: "B", text: "Qu'est-ce que tu fais ce soir ?" },
        { role: "A", text: "Je me repose, je suis fatigué." },
        { role: "B", text: "Qu'est-ce que vous faites le week-end ?" },
        { role: "A", text: "On regarde des séries en famille." }
      ],
    },
    {
      type: "vocab",
      items: [
        { fr: "se lever / se coucher", example: "Je me lève tôt." },
        { fr: "réveil", example: "Je mets mon réveil." },
        { fr: "se préparer", example: "J'ai besoin d'une heure." },
        { fr: "en retard / à l'heure", example: "J'arrive à l'heure." }
      ],
    },
  ],
  exerciseCount: 4,
  exercises: E3_2_TRAINING.map((a) =>
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
  evalExercises: E3_2_EVAL.map((a) =>
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
  ceExercise: E3_2_CE,
  ceEmailExercise: E3_2_CE_EMAIL,
  poDialogues: E3_2_PO,
  pePrompts: E3_2_PE,
  peEmailPrompts: E3_2_PE_EMAIL,
};
