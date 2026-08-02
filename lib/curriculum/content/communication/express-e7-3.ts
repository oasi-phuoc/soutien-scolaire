import { listeningPoolExercise, type CommunicationLesson } from "./express-types";
import { E7_3_TRAINING, E7_3_EVAL } from "./express-e7-3-listening";
import { E7_3_CE, E7_3_PO, E7_3_PE } from "./express-e7-3-cpe";
import { E7_3_CE_EMAIL, E7_3_PE_EMAIL } from "./express-e7-email";
import { A1, t } from "./express-lesson-factory";

export const EXPRESS_E7_3: CommunicationLesson = {
  id: "E7-3",
  code: "E7.3",
  title: "Visiter des lieux culturels",
  prerequisiteFrenchSlugs: ["v9-espace-culturel", "a1-gr-l18"],
  prerequisiteCommIds: ["E7-2"],
  theory: [
    { type: "heading", text: "Visiter des lieux culturels", black: true, trans: t("Visiting cultural places") },
    {
      type: "prerequisites",
      items: [
        { code: "E7.2", title: "Sport", href: "/communication/E7-2" },
        { code: "V9.4", title: "Culture", href: "/francais/vocabulaire/v9-espace-culturel" },
        { code: "G2.6", title: "Démonstratifs", href: "/francais/grammaire/a1-gr-l18" }
      ],
    },
    {
      type: "plain",
      text: "Pour désigner, on utilise **ce / cet / cette / ces** : **cette** exposition, **cet** acteur, **ces** musées.",
      trans: t("Visiting cultural places"),
    },
    { type: "highlight", title: "Adjectifs démonstratifs", trans: t("Adjectifs démonstratifs") },
    {
      type: "section",
      items: [
        "**Cette** exposition",
        "**Cet** acteur",
        "**Ce** film",
        "**Ces** musées"
      ],
    },
    {
      type: "table",
      accentHeader: true,
      headers: ["Question", "Réponse possible"],
      rows: [
        ["On va au musée ?", "Oui, voir l'exposition."],
        ["Cinéma ou théâtre ?", "Au cinéma."],
        ["Des places ?", "Désolé, c'est complet."],
        ["Réductions étudiants ?", "Oui, avec la carte."]
      ],
    },
    { type: "heading", text: "Exemple de dialogue", black: true, trans: t("Sample dialogue") },
    {
      type: "dialogue",
      audioSrc: A1(220),
      audioLabel: "Audio 220",
      lines: [
        { role: "A", text: "On a une journée libre, qu'est-ce qu'on fait ?" },
        { role: "B", text: "On va au musée ?" },
        { role: "A", text: "On peut aller visiter un château." },
        { role: "B", text: "On va au cinéma ou au concert ce soir ?" },
        { role: "A", text: "Au cinéma, il y a un bon film à la séance de 20 heures." },
        { role: "B", text: "On achète des e-billets ?" },
        { role: "A", text: "Oui, on peut prendre les places en ligne." },
        { role: "B", text: "Vous avez encore des places pour ce concert ?" },
        { role: "A", text: "Désolé, c'est complet." },
        { role: "B", text: "Vous faites des réductions pour les séniors ?" },
        { role: "A", text: "Oui, vous avez quel âge ?" },
        { role: "B", text: "C'est un très beau film." },
        { role: "A", text: "J'adore cet acteur !!" }
      ],
    },
    {
      type: "vocab",
      items: [
        { fr: "exposition", example: "Une exposition Picasso." },
        { fr: "e-billet", example: "Je prends des e-billets." },
        { fr: "visite guidée", example: "Il y a des visites guidées." },
        { fr: "séance", example: "La séance de 20 h." }
      ],
    },
  ],
  exerciseCount: 4,
  exercises: E7_3_TRAINING.map((a) =>
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
  evalExercises: E7_3_EVAL.map((a) =>
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
  ceExercises: E7_3_CE,
  ceEmailExercises: E7_3_CE_EMAIL,
  poDialogues: E7_3_PO,
  pePrompts: E7_3_PE,
  peEmailPrompts: E7_3_PE_EMAIL,
};
