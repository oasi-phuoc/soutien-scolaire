import { listeningPoolExercise, type CommunicationLesson } from "./express-types";
import { E1_2_EVAL, E1_2_TRAINING } from "./express-e1-2-listening";
import { E1_2_CE, E1_2_PO, E1_2_PE } from "./express-e1-2-cpe";
import { E1_2_CE_EMAIL, E1_2_PE_EMAIL } from "./express-e1-email";
import { A1, dialogueBlock, phraseBankToDialogue, t } from "./express-lesson-factory";

const DIALOGUE_20 = [
  "Voici mes parents.",
  "J'ai une grande famille.",
  "Tu as une sœur ou un frère ?",
  "Oui, j'ai une sœur et deux frères.",
  "Non, je suis fils unique. / fille unique.",
  "Lui, c'est qui ? / Elle, c'est qui ?",
  "C'est mon frère. / C'est ma sœur.",
  "Qui c'est, la petite femme blonde ?",
  "C'est la femme de mon frère.",
  "Le jeune homme brun, c'est… ?",
  "C'est le mari de ma sœur.",
  "Ton frère est célibataire / marié ?",
  "Il est marié.",
  "Il a des enfants ?",
  "Oui, deux enfants.",
  "Tes parents ont des petits-enfants ?",
  "Oui, ils sont grands-parents.",
];

export const EXPRESS_E1_2: CommunicationLesson = {
  id: "E1-2",
  code: "E1.2",
  title: "Parler de sa famille",
  prerequisiteFrenchSlugs: ["v1-famille", "v1-etat-civil", "a1-gr-l19"],
  prerequisiteCommIds: ["E1-1"],
  theory: [
    { type: "heading", text: "Parler de sa famille", black: true, trans: t("Talking about your family") },
    {
      type: "prerequisites",
      items: [
        { code: "E1.1", title: "Se présenter", href: "/communication/E1-1" },
        { code: "V1.3", title: "La famille", href: "/francais/vocabulaire/v1-famille" },
        { code: "V1.4", title: "L'état civil", href: "/francais/vocabulaire/v1-etat-civil" },
        { code: "G2.3", title: "Les adjectifs possessifs", href: "/francais/grammaire/a1-gr-l19" },
      ],
    },
    {
      type: "plain",
      text: "Pour parler de sa famille, on utilise les **adjectifs possessifs** : mon, ma, mes, ton, ta, tes, son, sa, ses, notre, nos, votre, vos, leur, leurs.",
      trans: t("To talk about your family, use possessive adjectives: mon, ma, mes, ton, ta, tes…"),
    },
    { type: "highlight", title: "Possessifs au singulier", trans: t("Possessives in the singular") },
    {
      type: "section",
      items: [
        "**Mon** père, **ma** mère, **mes** parents",
        "**Ton** frère, **ta** sœur, **tes** enfants",
        "**Son** mari, **sa** femme, **ses** enfants",
      ],
    },
    { type: "highlight", title: "Possessifs au pluriel", trans: t("Possessives in the plural") },
    {
      type: "section",
      items: [
        "**Notre** famille, **nos** cousins",
        "**Votre** fils, **vos** filles",
        "**Leur** enfant, **leurs** enfants",
      ],
    },
    {
      type: "table",
      accentHeader: true,
      headers: ["Question", "Réponse possible"],
      rows: [
        ["Tu as une sœur ou un frère ?", "Oui, j'ai une sœur. / Non, je suis fils unique."],
        ["Lui, c'est qui ?", "C'est mon frère Simon."],
        ["Ton frère est marié ?", "Oui, il est marié. / Non, il est célibataire."],
        ["Il a des enfants ?", "Oui, deux enfants."],
        ["Tes parents sont grands-parents ?", "Oui, ils ont des petits-enfants."],
      ],
    },
    { type: "heading", text: "Exemple de dialogue", black: true, trans: t("Sample dialogue") },
    dialogueBlock(A1(20), "Audio 020", phraseBankToDialogue(DIALOGUE_20)),
    {
      type: "vocab",
      items: [
        { fr: "mon / ma / mes", example: "Voici mes parents." },
        { fr: "fils unique / fille unique", example: "Je suis fils unique." },
        { fr: "célibataire / marié(e) / pacsé(e)", example: "Marie est célibataire." },
        { fr: "grands-parents / petits-enfants", example: "Ils sont grands-parents." },
        { fr: "la femme de… / le mari de…", example: "C'est la femme de mon frère." },
      ],
    },
  ],
  exerciseCount: 4,
  exercises: E1_2_TRAINING.map((a) =>
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
  evalExercises: E1_2_EVAL.map((a) =>
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
  ceExercises: E1_2_CE,
  ceEmailExercises: E1_2_CE_EMAIL,
  poDialogues: E1_2_PO,
  pePrompts: E1_2_PE,
  peEmailPrompts: E1_2_PE_EMAIL,
};
