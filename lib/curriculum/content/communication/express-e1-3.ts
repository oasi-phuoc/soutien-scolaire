import { listeningPoolExercise, type CommunicationLesson } from "./express-types";
import { E1_3_TRAINING, E1_3_EVAL } from "./express-e1-3-listening";
import { E1_3_CE, E1_3_PO, E1_3_PE } from "./express-e1-3-cpe";
import { E1_3_CE_EMAIL, E1_3_PE_EMAIL } from "./express-e1-email";
import { A1, t } from "./express-lesson-factory";

export const EXPRESS_E1_3: CommunicationLesson = {
  id: "E1-3",
  code: "E1.3",
  title: "Inviter à une fête",
  prerequisiteFrenchSlugs: ["v2-jours-mois-dates", "v2-heure", "a1-conj-l07", "a1-gr-l02"],
  prerequisiteCommIds: ["E1-2"],
  theory: [
    { type: "heading", text: "Inviter à une fête", black: true, trans: t("Inviting someone to a party") },
    {
      type: "prerequisites",
      items: [
        { code: "E1.2", title: "Parler de sa famille", href: "/communication/E1-2" },
        { code: "V2.1", title: "Jours, mois, dates", href: "/francais/vocabulaire/v2-jours-mois-dates" },
        { code: "V2.2", title: "L'heure", href: "/francais/vocabulaire/v2-heure" },
        { code: "C1.5", title: "Verbes en -er", href: "/francais/conjugaison/a1-conj-l07" },
        { code: "G1.7", title: "La négation", href: "/francais/grammaire/a1-gr-l02" }
      ],
    },
    {
      type: "plain",
      text: "Pour inviter, on utilise des verbes en **-er** (**inviter**, **organiser**, **apporter**, **partager**) et la **négation** (ne… pas).",
      trans: t("Inviting someone to a party"),
    },
    { type: "highlight", title: "Verbes en -er et négation", trans: t("Verbes en -er et négation") },
    {
      type: "section",
      items: [
        "**J'invite** mes amis.",
        "**Nous organisons** un apéro.",
        "Je **ne suis pas** libre.",
        "**J'apporte** un dessert à partager."
      ],
    },
    {
      type: "table",
      accentHeader: true,
      headers: ["Question", "Réponse possible"],
      rows: [
        ["Tu es libre samedi ?", "Oui, je suis libre. / Non, je ne suis pas libre."],
        ["Je t'invite, tu peux venir ?", "Oui, avec plaisir !"],
        ["C'est à quelle heure ?", "À 19 heures."],
        ["J'apporte quelque chose ?", "Oui, un dessert."]
      ],
    },
    { type: "heading", text: "Exemple de dialogue", black: true, trans: t("Sample dialogue") },
    {
      type: "dialogue",
      audioSrc: A1(31),
      audioLabel: "Audio 031",
      lines: [
        { role: "A", text: "J'organise un apéro, tu es libre ?" },
        { role: "B", text: "Oui, je suis libre." },
        { role: "A", text: "Non, désolé, nous ne sommes pas libres." },
        { role: "B", text: "Je t'invite samedi, tu peux venir ?" },
        { role: "A", text: "Oui, avec plaisir !" },
        { role: "B", text: "C'est à quelle heure ?" },
        { role: "A", text: "C'est à 19 heures." },
        { role: "B", text: "J'apporte quelque chose ?" },
        { role: "A", text: "Quelque chose pour le buffet peut-être." },
        { role: "B", text: "J'apporte un dessert." }
      ],
    },
    {
      type: "vocab",
      items: [
        { fr: "inviter", example: "Je vous invite samedi." },
        { fr: "être libre", example: "Tu es libre ?" },
        { fr: "apporter", example: "J'apporte une salade." },
        { fr: "dommage", example: "Dommage !" }
      ],
    },
  ],
  exerciseCount: 4,
  exercises: E1_3_TRAINING.map((a) =>
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
  evalExercises: E1_3_EVAL.map((a) =>
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
  ceExercise: E1_3_CE,
  ceEmailExercise: E1_3_CE_EMAIL,
  poDialogues: E1_3_PO,
  pePrompts: E1_3_PE,
  peEmailPrompts: E1_3_PE_EMAIL,
};
