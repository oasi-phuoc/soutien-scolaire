import { listeningPoolExercise, type CommunicationLesson } from "./express-types";
import { E6_3_TRAINING, E6_3_EVAL } from "./express-e6-3-listening";
import { E6_3_CE, E6_3_PO, E6_3_PE } from "./express-e6-3-cpe";
import { E6_3_CE_EMAIL, E6_3_PE_EMAIL } from "./express-e6-email";
import { A1, t } from "./express-lesson-factory";

export const EXPRESS_E6_3: CommunicationLesson = {
  id: "E6-3",
  code: "E6.3",
  title: "Aller à l'aéroport",
  prerequisiteFrenchSlugs: ["v9-aeroport", "a1-gr-l11"],
  prerequisiteCommIds: ["E6-2"],
  theory: [
    { type: "heading", text: "Aller à l'aéroport", black: true, trans: t("Going to the airport") },
    {
      type: "prerequisites",
      items: [
        { code: "E6.2", title: "Transport", href: "/communication/E6-2" },
        { code: "V10.4", title: "Aéroport", href: "/francais/vocabulaire/v9-aeroport" }
      ],
    },
    {
      type: "plain",
      text: "Avec les pays, on dit **au** Portugal, **en** Belgique, **aux** États-Unis, **à** Porto.",
      trans: t("Going to the airport"),
    },
    { type: "highlight", title: "Prépositions avec les pays", trans: t("Prépositions avec les pays") },
    {
      type: "section",
      items: [
        "Je vais **en** Belgique.",
        "Je vais **aux** États-Unis.",
        "Je vais **au** Portugal.",
        "Vol **à destination de** Boston."
      ],
    },
    {
      type: "table",
      accentHeader: true,
      headers: ["Question", "Réponse possible"],
      rows: [
        ["Quelle est votre destination ?", "Je vais à Bruxelles."],
        ["Bagages à enregistrer ?", "Non, une valise cabine."],
        ["Côté hublot ?", "Oui."],
        ["Bon vol !", "Merci !"]
      ],
    },
    { type: "heading", text: "Exemple de dialogue", black: true, trans: t("Sample dialogue") },
    {
      type: "dialogue",
      audioSrc: A1(186),
      audioLabel: "Audio 186",
      lines: [
        { role: "A", text: "Les passagers du vol Air France pour Paris sont invités à se présenter porte B12." },
        { role: "B", text: "Le vol à destination de Paris est retardé." },
        { role: "A", text: "Quelle est votre destination ?" },
        { role: "B", text: "Je vais aux États-Unis." },
        { role: "A", text: "J'ai déjà ma carte d'embarquement." },
        { role: "B", text: "Vous avez des bagages à enregistrer ?" },
        { role: "A", text: "Oui, j'ai une grande valise." },
        { role: "B", text: "Mon siège est côté hublot ?" },
        { role: "A", text: "Non, côté couloir." },
        { role: "B", text: "C'est un vol direct ?" },
        { role: "A", text: "Non, il y a une escale à Zurich." },
        { role: "B", text: "Je vous souhaite un bon vol !" }
      ],
    },
    {
      type: "vocab",
      items: [
        { fr: "carte d'embarquement", example: "Voici ma carte d'embarquement." },
        { fr: "valise cabine", example: "J'ai une valise cabine." },
        { fr: "passeport", example: "Votre passeport s'il vous plaît." },
        { fr: "porte d'embarquement", example: "Porte B6." }
      ],
    },
  ],
  exerciseCount: 4,
  exercises: E6_3_TRAINING.map((a) =>
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
  evalExercises: E6_3_EVAL.map((a) =>
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
  ceExercise: E6_3_CE,
  ceEmailExercise: E6_3_CE_EMAIL,
  poDialogues: E6_3_PO,
  pePrompts: E6_3_PE,
  peEmailPrompts: E6_3_PE_EMAIL,
};
