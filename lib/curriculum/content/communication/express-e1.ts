import { listeningPoolExercise, type CommunicationLesson } from "./express-types";
import { E1_1_EVAL_AUDIOS, E1_1_LISTENING_AUDIOS } from "./express-e1-1-listening";
import { E1_1_CE, E1_1_PO, E1_1_PE } from "./express-e1-1-cpe";
import { E1_1_CE_EMAIL, E1_1_PE_EMAIL } from "./express-e1-email";
import { A1 } from "./express-lesson-factory";

/* ═══════════════════════════════════════════════════════════════════════════
 * E1-1 — Se présenter
 * ═══════════════════════════════════════════════════════════════════════════ */

export const EXPRESS_E1_1: CommunicationLesson = {
  id: "E1-1",
  code: "E1.1",
  title: "Se présenter",
  prerequisiteFrenchSlugs: [
    "a1-gr-l01", // G1.1 — Les pronoms personnels sujets / être et avoir
    "v1-nationalites", // V1.1
    "v1-professions", // V1.2
  ],
  theory: [
    { type: "heading", text: "Se présenter", black: true, trans: { en: "Introducing yourself" } },
    {
      type: "prerequisites",
      items: [
        { code: "G1.1", title: "Les pronoms personnels sujets", href: "/francais/grammaire/a1-gr-l01" },
        { code: "G1.1", title: "Les verbes être et avoir", href: "/francais/grammaire/a1-gr-l01" },
        { code: "V1.1", title: "Les nationalités", href: "/francais/vocabulaire/v1-nationalites" },
        { code: "V1.2", title: "Les professions", href: "/francais/vocabulaire/v1-professions" },
      ],
    },
    {
      type: "plain",
      text: "Pour se présenter, on donne son **identité**, son **âge**, sa **nationalité**, son **adresse** et parfois sa **profession**. Les phrases sont courtes et claires.",
    },
    { type: "highlight", title: "Identité" },
    {
      type: "plain",
      text: "Pour dire son nom et son prénom, on utilise le verbe **s'appeler**.",
    },
    {
      type: "section",
      items: [
        "**Je m'appelle** Marie.",
        "**Je suis** Pierre Dupont.",
        "Mon prénom est Léa. Mon nom de famille est Martin.",
      ],
    },
    { type: "highlight", title: "Âge" },
    {
      type: "plain",
      text: "Pour dire son âge, on utilise le verbe **avoir** avec **ans**.",
    },
    {
      type: "section",
      items: [
        "**J'ai** 12 ans.",
        "**Il a** 30 ans.",
        "**Elle a** 8 ans.",
      ],
    },
    { type: "highlight", title: "Nationalité" },
    {
      type: "plain",
      text: "La nationalité s'accorde : un homme **français**, une femme **française**. On utilise le verbe **être**.",
    },
    {
      type: "section",
      items: [
        "**Je suis** français / française.",
        "**Il est** suisse.",
        "**Elle est** italienne.",
        "**Nous sommes** espagnols.",
        "**Je viens de** Paris. / **Je viens d'**Italie.",
      ],
    },
    { type: "highlight", title: "Adresse et lieu" },
    {
      type: "plain",
      text: "Pour dire où l'on habite, on utilise le verbe **habiter**.",
    },
    {
      type: "section",
      items: [
        "**J'habite** à Genève.",
        "**J'habite** en Suisse.",
        "Mon adresse est 12 rue du Lac.",
      ],
    },
    { type: "highlight", title: "Profession" },
    {
      type: "plain",
      text: "Pour parler de son métier, on utilise le verbe **être** ou **travailler**.",
    },
    {
      type: "section",
      items: [
        "**Je suis** élève / étudiant(e).",
        "**Je suis** professeur.",
        "**Je travaille** dans un magasin.",
        "**Je suis** au chômage. / **Je suis** à la retraite.",
      ],
    },
    {
      type: "table",
      accentHeader: true,
      headers: ["Question", "Réponse possible"],
      rows: [
        ["Comment tu t'appelles ?", "Je m'appelle Samira."],
        ["Tu as quel âge ?", "J'ai 14 ans."],
        ["Tu es de quelle nationalité ?", "Je suis marocaine."],
        ["Tu habites où ?", "J'habite à Lausanne."],
        ["Tu fais quoi dans la vie ?", "Je suis élève. / Je suis infirmier."],
      ],
    },
    { type: "heading", text: "Exemple de dialogue", black: true },
    {
      type: "dialogue",
      audioSrc: A1("009"),
      audioLabel: "Audio 009",
      lines: [
        { role: "A", text: "Bonjour ! Moi, c'est Paolo. Et vous ? Vous vous appelez comment ?" },
        { role: "B", text: "Je m'appelle Nicole. Tu peux dire « tu »." },
        { role: "A", text: "Enchanté Nicole ! Tu as un prénom français. Tu es française, non ?" },
        { role: "B", text: "Non, je suis allemande. Et toi ?" },
        { role: "A", text: "Je suis italien." },
        { role: "B", text: "Et tu as quel âge ?" },
        { role: "A", text: "J'ai 25 ans." },
        { role: "B", text: "Moi, j'ai 35 ans." },
        { role: "A", text: "Quelle est ta profession ?" },
        { role: "B", text: "Je suis journaliste. Voici ma carte de visite." },
        { role: "A", text: "Voici ma carte aussi." },
        { role: "B", text: "Merci ! C'est ton numéro de portable sur la carte ?" },
        { role: "A", text: "Non, mon portable, c'est le 06 18 14 33 11." },
        { role: "B", text: "Euh… tu peux répéter, s'il te plaît ?" },
      ],
    },
    {
      type: "vocab",
      items: [
        { fr: "je m'appelle…", example: "Je m'appelle Nora." },
        { fr: "j'ai … ans", example: "J'ai 25 ans." },
        { fr: "je suis + nationalité", example: "Je suis portugais." },
        { fr: "je viens de…", example: "Je viens de Tunisie." },
        { fr: "j'habite à / en…", example: "J'habite à Berne. / J'habite en France." },
        { fr: "je suis + métier", example: "Je suis médecin." },
        { fr: "enchanté(e)", example: "Enchanté de faire votre connaissance." },
      ],
    },
  ],
  exerciseCount: 4,
  exercises: E1_1_LISTENING_AUDIOS.map((a) =>
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
  evalExercises: E1_1_EVAL_AUDIOS.map((a) =>
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
  ceExercises: E1_1_CE,
  ceEmailExercises: E1_1_CE_EMAIL,
  poDialogues: E1_1_PO,
  pePrompts: E1_1_PE,
  peEmailPrompts: E1_1_PE_EMAIL,
};
