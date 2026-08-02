import { listeningPoolExercise, type CommunicationLesson } from "./express-types";
import { E3_3_TRAINING, E3_3_EVAL } from "./express-e3-3-listening";
import { E3_3_CE, E3_3_PO, E3_3_PE } from "./express-e3-3-cpe";
import { E3_3_CE_EMAIL, E3_3_PE_EMAIL } from "./express-e3-email";
import { A1, t } from "./express-lesson-factory";

export const EXPRESS_E3_3: CommunicationLesson = {
  id: "E3-3",
  code: "E3.3",
  title: "Aller au travail",
  prerequisiteFrenchSlugs: ["v1-description-morale", "a1-gr-l03"],
  prerequisiteCommIds: ["E3-2"],
  theory: [
    { type: "heading", text: "Aller au travail", black: true, trans: t("Going to work") },
    {
      type: "prerequisites",
      items: [
        { code: "E3.2", title: "Quotidien", href: "/communication/E3-2" },
        { code: "V1.6", title: "Description morale", href: "/francais/vocabulaire/v1-description-morale" },
        { code: "G4.36", title: "Genre des adjectifs", href: "/francais/grammaire/a1-gr-l03" }
      ],
    },
    {
      type: "plain",
      text: "Pour décrire les collègues et soi-même, on accorde les **adjectifs au féminin** : **sérieux / sérieuse**, **dynamique**, **bavard / bavarde**.",
      trans: t("Going to work"),
    },
    { type: "highlight", title: "Accord des adjectifs", trans: t("Accord des adjectifs") },
    {
      type: "section",
      items: [
        "Il est **sérieux**. Elle est **sérieuse**.",
        "Je suis **dynamique**.",
        "Elle est **bavarde**.",
        "Il est **patient** et **calme**."
      ],
    },
    {
      type: "table",
      accentHeader: true,
      headers: ["Question", "Réponse possible"],
      rows: [
        ["Tu travailles où ?", "Dans une entreprise."],
        ["L'informaticien est disponible ?", "Non, il est en réunion."],
        ["Pourquoi vendeur ?", "Parce que je suis dynamique."],
        ["Parlez-moi de vous.", "J'aime travailler en équipe."]
      ],
    },
    { type: "heading", text: "Exemple de dialogue", black: true, trans: t("Sample dialogue") },
    {
      type: "dialogue",
      audioSrc: A1(98),
      audioLabel: "Audio 098",
      lines: [
        { role: "A", text: "Tu travailles où ?" },
        { role: "B", text: "Dans une entreprise." },
        { role: "A", text: "Aujourd'hui, je ne suis pas au bureau, je télétravaille." },
        { role: "B", text: "L'informaticien est disponible ?" },
        { role: "A", text: "Non, il est en réunion." },
        { role: "B", text: "Où est le directeur ?" },
        { role: "A", text: "Il a un rendez-vous important." },
        { role: "B", text: "Où est le bureau de l'assistante ?" },
        { role: "A", text: "À côté de l'accueil." },
        { role: "B", text: "Bonjour, je viens pour l'emploi de vendeur." },
        { role: "A", text: "Merci de me recevoir !" },
        { role: "B", text: "Pourquoi vous voulez être vendeur ?" },
        { role: "A", text: "Parlez-moi de vous." },
        { role: "B", text: "J'aime travailler en équipe." }
      ],
    },
    {
      type: "vocab",
      items: [
        { fr: "télétravail", example: "Aujourd'hui, elle télétravaille." },
        { fr: "réunion", example: "Il est en réunion." },
        { fr: "collègue", example: "C'est une collègue sérieuse." },
        { fr: "disponible", example: "Je suis disponible." }
      ],
    },
  ],
  exerciseCount: 4,
  exercises: E3_3_TRAINING.map((a) =>
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
  evalExercises: E3_3_EVAL.map((a) =>
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
  ceExercises: E3_3_CE,
  ceEmailExercises: E3_3_CE_EMAIL,
  poDialogues: E3_3_PO,
  pePrompts: E3_3_PE,
  peEmailPrompts: E3_3_PE_EMAIL,
};
