import { listeningPoolExercise, type CommunicationLesson } from "./express-types";
import { E2_2_TRAINING, E2_2_EVAL } from "./express-e2-2-listening";
import { E2_2_CE, E2_2_PO, E2_2_PE } from "./express-e2-2-cpe";
import { E2_2_CE_EMAIL, E2_2_PE_EMAIL } from "./express-e2-email";
import { A1, t } from "./express-lesson-factory";

export const EXPRESS_E2_2: CommunicationLesson = {
  id: "E2-2",
  code: "E2.2",
  title: "Avoir un problème domestique",
  prerequisiteFrenchSlugs: ["v4-appareils-electromenagers", "v4-pannes", "a1-conj-l08", "a1-gr-modaux"],
  prerequisiteCommIds: ["E2-1"],
  theory: [
    { type: "heading", text: "Avoir un problème domestique", black: true, trans: t("Having a home problem") },
    {
      type: "prerequisites",
      items: [
        { code: "E2.1", title: "Décrire son logement", href: "/communication/E2-1" },
        { code: "V4.4", title: "Électroménager", href: "/francais/vocabulaire/v4-appareils-electromenagers" },
        { code: "V4.5", title: "Pannes", href: "/francais/vocabulaire/v4-pannes" },
        { code: "G4.2", title: "Les articles contractés", href: "/francais/grammaire/a1-gr-articles-contractes" },
        { code: "G1.6", title: "Modaux", href: "/francais/grammaire/a1-gr-modaux" }
      ],
    },
    {
      type: "plain",
      text: "Pour parler d'une panne, on utilise **venir**, **pouvoir** et **prendre** : le technicien **vient**, je **peux** venir aujourd'hui, on **prend** rendez-vous.",
      trans: t("Having a home problem"),
    },
    { type: "highlight", title: "Venir, pouvoir, prendre", trans: t("Venir, pouvoir, prendre") },
    {
      type: "section",
      items: [
        "Je **peux** venir aujourd'hui.",
        "On **prend** rendez-vous.",
        "Le technicien **vient** chez vous.",
        "Je **ne peux pas** ouvrir la porte."
      ],
    },
    {
      type: "table",
      accentHeader: true,
      headers: ["Question", "Réponse possible"],
      rows: [
        ["Qu'est-ce qui ne va pas ?", "Je n'ai plus d'électricité."],
        ["C'est urgent ?", "Oui, c'est vraiment urgent !"],
        ["Vous pouvez venir quand ?", "Aujourd'hui à 16 heures."],
        ["Vous voulez un devis ?", "Oui, s'il vous plaît."]
      ],
    },
    { type: "heading", text: "Exemple de dialogue", black: true, trans: t("Sample dialogue") },
    {
      type: "dialogue",
      audioSrc: A1(53),
      audioLabel: "Audio 053",
      lines: [
        { role: "A", text: "SOS Dépannage, j'écoute !" },
        { role: "B", text: "Bonjour monsieur, je vous appelle pour une panne d'électricité." },
        { role: "A", text: "Qu'est-ce qui ne va pas ?" },
        { role: "B", text: "Je n'ai plus de gaz." },
        { role: "A", text: "Il y a une panne de chauffage." },
        { role: "B", text: "Quel est le problème ?" },
        { role: "A", text: "Ma télé ne marche pas." },
        { role: "B", text: "C'est urgent ?" },
        { role: "A", text: "Oui, c'est vraiment urgent !" },
        { role: "B", text: "Vous pouvez venir quand ?" },
        { role: "A", text: "On peut prendre rendez-vous pour demain." },
        { role: "B", text: "Le dépannage coûte 150 euros." },
        { role: "A", text: "Vous voulez un devis ?" },
        { role: "B", text: "Oui, s'il vous plaît." }
      ],
    },
    {
      type: "vocab",
      items: [
        { fr: "panne", example: "J'ai une panne d'électricité." },
        { fr: "devis", example: "Je fais un devis." },
        { fr: "urgent", example: "C'est urgent !" },
        { fr: "réparer", example: "Il répare la télé." }
      ],
    },
  ],
  exerciseCount: 4,
  exercises: E2_2_TRAINING.map((a) =>
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
  evalExercises: E2_2_EVAL.map((a) =>
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
  ceExercises: E2_2_CE,
  ceEmailExercises: E2_2_CE_EMAIL,
  poDialogues: E2_2_PO,
  pePrompts: E2_2_PE,
  peEmailPrompts: E2_2_PE_EMAIL,
};
