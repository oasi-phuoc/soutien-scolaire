import {
  readingPoolExercise,
  type CommunicationExercise,
  type ExpressPoDialogue,
  type ExpressPePrompt,
} from "./express-types";
import { buildExpressPool, type ExpressRawQ } from "./express-listening-helpers";

function q(item: ExpressRawQ): ExpressRawQ {
  return item;
}

/* ── Compréhension écrite — E5.1 Aller chez le médecin ─────────────────────── */

const CE_TEXT = `Cabinet médical du Parc — Informations aux patients

Le cabinet est ouvert du lundi au vendredi.
Le cabinet ouvre à 8 h et ferme à 18 h.
Vous voulez voir un médecin ? Prenez rendez-vous par téléphone ou sur Internet.
Le pédiatre reçoit les enfants le mercredi matin.
Vous toussez ou vous avez de la fièvre ? Mettez un masque dans la salle d'attente.
Apportez votre carte d'assurance à chaque visite.
Le week-end, le cabinet est fermé.
Pour une urgence, allez aux urgences de l'hôpital.`;

const CE_POOL = buildExpressPool("e5-1-ce", [
  q({
    id: "ce-q1",
    textQ: "Quels jours le cabinet est-il ouvert ?",
    text: ["Du lundi au vendredi", "Tous les jours", "Seulement le week-end"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le cabinet est ouvert du lundi au _________.",
    fill: "vendredi",
    vfQ: "Le cabinet médical est ouvert le week-end.",
    vfC: 1,
  }),
  q({
    id: "ce-q2",
    textQ: "Comment peut-on prendre rendez-vous ?",
    text: [
      "Par téléphone ou sur Internet",
      "Par lettre seulement",
      "En personne seulement",
    ],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Prenez rendez-vous par téléphone ou sur _________.",
    fill: "Internet",
    fillA: ["internet"],
    vfQ: "On peut prendre rendez-vous sur Internet.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quand le pédiatre reçoit-il les enfants ?",
    text: ["Le mercredi matin", "Le vendredi soir", "Le samedi"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le pédiatre reçoit les enfants le _________ matin.",
    fill: "mercredi",
    vfQ: "Le pédiatre reçoit les enfants le vendredi.",
    vfC: 1,
  }),
  q({
    id: "ce-q4",
    textQ: "Que faut-il faire si on a de la fièvre ou si on tousse ?",
    text: ["Mettre un masque", "Rentrer à la maison", "Attendre dehors"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Mettez un _________ dans la salle d'attente.",
    fill: "masque",
    vfQ: "Une personne qui tousse doit mettre un masque.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Que faut-il apporter à chaque visite ?",
    text: ["La carte d'assurance", "Le passeport", "Un cadeau"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Apportez votre carte d'_________ à chaque visite.",
    fill: "assurance",
    vfQ: "Il faut apporter sa carte d'assurance à chaque visite.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Où faut-il aller pour une urgence le week-end ?",
    text: ["À l'hôpital", "À la pharmacie", "À l'école"],
    textC: 0,
    img: ["hôpital", "pharmacie", "école"],
    imgC: 0,
    fillQ: "Pour une urgence, allez aux urgences de l'_________.",
    fill: "hôpital",
    fillA: ["hopital"],
    vfQ: "Le week-end, il faut venir au cabinet pour une urgence.",
    vfC: 1,
  }),
  q({
    id: "ce-q7",
    textQ: "À quelle heure le cabinet ferme-t-il ?",
    text: ["À 18 h", "À 8 h", "À 20 h"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le cabinet ouvre à 8 h et ferme à _________ h.",
    fill: "18",
    fillA: ["dix-huit"],
    vfQ: "Le prix de la consultation est indiqué dans le texte.",
    vfC: 2,
  }),
]);

export const E5_1_CE: CommunicationExercise = readingPoolExercise({
  id: "e5-1-ce",
  readingText: CE_TEXT,
  questionPool: CE_POOL,
});

/* ── Production orale — dialogues à jouer (thème médecin) ──────────────────── */

const MEDECIN = { title: "Le médecin", vous: "le médecin / la médecin" };
const PATIENT = { title: "Le patient", vous: "le patient / la patiente" };
const SECRETAIRE = { title: "Le secrétaire", vous: "le secrétaire / la secrétaire" };

export const E5_1_PO: ExpressPoDialogue[] = [
  {
    id: "e5-1-po-1",
    title: "Chez le médecin — la grippe",
    context: "Vous êtes malade depuis deux jours et vous consultez le médecin.",
    roleA: MEDECIN,
    roleB: PATIENT,
    lines: [
      { role: "A", text: "Bonjour, asseyez-vous. Vous avez mal où ?" },
      { role: "B", text: "J'ai mal à la gorge et j'ai mal à la tête." },
      { role: "A", text: "Vous avez de la fièvre ?" },
      { role: "B", text: "Oui, j'ai 39 degrés depuis hier." },
      { role: "A", text: "Alors c'est la grippe. Vous devez rester à la maison." },
      { role: "B", text: "D'accord. Pendant combien de jours ?" },
      { role: "A", text: "Cinq jours de repos, et buvez beaucoup d'eau." },
      { role: "B", text: "Merci docteur, au revoir !" },
    ],
  },
  {
    id: "e5-1-po-2",
    title: "Prendre rendez-vous par téléphone",
    context: "Vous téléphonez au cabinet médical pour prendre un rendez-vous.",
    roleA: SECRETAIRE,
    roleB: PATIENT,
    lines: [
      { role: "A", text: "Cabinet médical du Parc, bonjour !" },
      { role: "B", text: "Bonjour, je voudrais un rendez-vous avec le médecin." },
      { role: "A", text: "Oui. Vous pouvez venir demain à 10 h ?" },
      { role: "B", text: "Non, demain matin je travaille. Plutôt l'après-midi ?" },
      { role: "A", text: "Alors demain à 16 h 30, ça va ?" },
      { role: "B", text: "Oui, c'est parfait pour moi." },
      { role: "A", text: "Très bien. Apportez votre carte d'assurance, s'il vous plaît." },
      { role: "B", text: "D'accord, merci. À demain !" },
    ],
  },
  {
    id: "e5-1-po-3",
    title: "Mal au ventre",
    context: "Vous avez mal au ventre depuis ce matin et vous voyez le médecin.",
    roleA: MEDECIN,
    roleB: PATIENT,
    lines: [
      { role: "A", text: "Bonjour, qu'est-ce qui ne va pas ?" },
      { role: "B", text: "J'ai très mal au ventre depuis ce matin." },
      { role: "A", text: "Vous avez mangé quelque chose de spécial hier ?" },
      { role: "B", text: "Oui, j'ai mangé du poisson au restaurant." },
      { role: "A", text: "Je vois. Vous avez aussi de la fièvre ?" },
      { role: "B", text: "Non, je n'ai pas de fièvre." },
      { role: "A", text: "Buvez de l'eau et mangez du riz aujourd'hui. Ça va passer." },
      { role: "B", text: "Merci beaucoup, docteur." },
    ],
  },
  {
    id: "e5-1-po-4",
    title: "Chez le pédiatre",
    context: "Votre fille de trois ans a de la fièvre. Vous êtes chez le pédiatre.",
    roleA: { title: "Le pédiatre", vous: "le pédiatre / la pédiatre" },
    roleB: { title: "Le parent", vous: "le papa / la maman" },
    lines: [
      { role: "A", text: "Bonjour ! Alors, qu'est-ce qu'elle a, la petite ?" },
      { role: "B", text: "Elle a de la fièvre depuis hier soir." },
      { role: "A", text: "Est-ce qu'elle mange bien ?" },
      { role: "B", text: "Non, elle ne mange pas et elle dort beaucoup." },
      { role: "A", text: "C'est un rhume. Voici un sirop pour enfants." },
      { role: "B", text: "Je lui donne le sirop combien de fois par jour ?" },
      { role: "A", text: "Matin et soir, pendant quatre jours." },
      { role: "B", text: "Très bien, merci docteur !" },
    ],
  },
  {
    id: "e5-1-po-5",
    title: "Une dent cassée",
    context: "Votre fils a une dent cassée. Vous appelez le cabinet médical.",
    roleA: SECRETAIRE,
    roleB: { title: "Le parent", vous: "le papa / la maman" },
    lines: [
      { role: "A", text: "Cabinet médical, bonjour, je vous écoute." },
      { role: "B", text: "Bonjour, mon fils a une dent cassée. Je peux venir ?" },
      { role: "A", text: "Non, pour les dents, il faut appeler le cabinet dentaire." },
      { role: "B", text: "Ah bon ? Vous avez le numéro du dentiste ?" },
      { role: "A", text: "Oui, c'est le cabinet dentaire de la Gare. Je vous donne le numéro." },
      { role: "B", text: "Merci. C'est loin d'ici ?" },
      { role: "A", text: "Non, c'est à cinq minutes à pied, en face de la gare." },
      { role: "B", text: "Parfait, merci beaucoup. Au revoir !" },
    ],
  },
  {
    id: "e5-1-po-6",
    title: "Aux urgences",
    context: "Vous êtes tombé(e) à vélo et vous avez très mal à la jambe. Vous êtes aux urgences.",
    roleA: { title: "L'infirmier", vous: "l'infirmier / l'infirmière" },
    roleB: PATIENT,
    lines: [
      { role: "A", text: "Bonjour, qu'est-ce qui vous arrive ?" },
      { role: "B", text: "Je suis tombé à vélo et j'ai très mal à la jambe." },
      { role: "A", text: "Vous pouvez marcher ?" },
      { role: "B", text: "Non, je ne peux pas marcher. J'ai trop mal." },
      { role: "A", text: "D'accord. On va faire une radio de la jambe." },
      { role: "B", text: "Je dois attendre longtemps ?" },
      { role: "A", text: "Environ trente minutes. Asseyez-vous dans la salle d'attente." },
      { role: "B", text: "Merci, madame." },
    ],
  },
  {
    id: "e5-1-po-7",
    title: "Annuler un rendez-vous",
    context: "Vous avez un rendez-vous demain, mais vous ne pouvez pas venir. Vous téléphonez.",
    roleA: SECRETAIRE,
    roleB: PATIENT,
    lines: [
      { role: "A", text: "Cabinet médical, bonjour !" },
      { role: "B", text: "Bonjour, j'ai un rendez-vous demain à 9 h, mais je ne peux pas venir." },
      { role: "A", text: "Pas de problème. Vous voulez un autre rendez-vous ?" },
      { role: "B", text: "Oui, s'il vous plaît. Vendredi, c'est possible ?" },
      { role: "A", text: "Oui, vendredi à 11 h, ça vous va ?" },
      { role: "B", text: "C'est parfait. Merci beaucoup." },
      { role: "A", text: "Je vous en prie. À vendredi !" },
      { role: "B", text: "À vendredi, au revoir !" },
    ],
  },
  {
    id: "e5-1-po-8",
    title: "Un gros rhume",
    context: "Vous toussez et vous avez le nez qui coule. Vous consultez le médecin.",
    roleA: MEDECIN,
    roleB: PATIENT,
    lines: [
      { role: "A", text: "Bonjour, je vous écoute. Comment vous sentez-vous ?" },
      { role: "B", text: "Je tousse beaucoup et j'ai le nez qui coule." },
      { role: "A", text: "Depuis combien de temps ?" },
      { role: "B", text: "Depuis trois jours. Et la nuit, je dors mal." },
      { role: "A", text: "Ce n'est pas grave, c'est un gros rhume." },
      { role: "B", text: "Qu'est-ce que je dois faire ?" },
      { role: "A", text: "Reposez-vous et prenez ce sirop contre la toux." },
      { role: "B", text: "D'accord, merci docteur !" },
    ],
  },
  {
    id: "e5-1-po-9",
    title: "Enfant malade le week-end",
    context: "C'est samedi et votre enfant est malade. Vous appelez le cabinet médical.",
    roleA: SECRETAIRE,
    roleB: { title: "Le parent", vous: "le papa / la maman" },
    lines: [
      { role: "A", text: "Cabinet médical, bonjour. Le cabinet est fermé le week-end." },
      { role: "B", text: "Bonjour, mais mon fils est malade. Il a beaucoup de fièvre." },
      { role: "A", text: "Il a quel âge, votre fils ?" },
      { role: "B", text: "Il a six ans. Qu'est-ce que je dois faire ?" },
      { role: "A", text: "Allez aux urgences de l'hôpital, elles sont ouvertes le week-end." },
      { role: "B", text: "D'accord. C'est où exactement ?" },
      { role: "A", text: "À l'hôpital du centre-ville, entrée B." },
      { role: "B", text: "Merci beaucoup, j'y vais tout de suite." },
    ],
  },
  {
    id: "e5-1-po-10",
    title: "La fin de la consultation",
    context: "La consultation est finie. Le médecin vous donne une ordonnance et des conseils.",
    roleA: MEDECIN,
    roleB: PATIENT,
    lines: [
      { role: "A", text: "Voici votre ordonnance pour la pharmacie." },
      { role: "B", text: "Merci. Je prends les médicaments comment ?" },
      { role: "A", text: "Un comprimé matin, midi et soir, pendant le repas." },
      { role: "B", text: "D'accord. Et je peux aller travailler ?" },
      { role: "A", text: "Non, restez à la maison jusqu'à lundi. Vous avez besoin de repos." },
      { role: "B", text: "Très bien. Je dois revenir vous voir ?" },
      { role: "A", text: "Seulement si ça ne va pas mieux dans une semaine." },
      { role: "B", text: "Merci docteur, bonne journée !" },
    ],
  },
];

/* ── Production écrite — consignes (A1 : 50 mots minimum) ─────────────────── */

const PE_MIN = 50;
const PE_MAX = 120;

export const E5_1_PE: ExpressPePrompt[] = [
  {
    id: "e5-1-pe-1",
    title: "Message au cabinet médical",
    situation: "Vous êtes malade et vous voulez voir un médecin. Vous écrivez un message au cabinet médical.",
    instruction: "Écrivez un message : décrivez vos symptômes et demandez un rendez-vous avec le médecin.",
    points: ["Vos symptômes", "Depuis quand vous êtes malade", "La demande de rendez-vous"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e5-1-pe-2",
    title: "Raconter une visite chez le médecin",
    situation: "Vous êtes allé(e) chez le médecin hier.",
    instruction: "Racontez votre visite à un ami : pourquoi vous y êtes allé(e), ce que le médecin a dit et ses conseils.",
    points: ["La raison de la visite", "Ce que le médecin a dit", "Les conseils reçus"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e5-1-pe-3",
    title: "Annuler un rendez-vous",
    situation: "Vous avez un rendez-vous chez le médecin demain, mais vous ne pouvez pas venir.",
    instruction: "Écrivez un e-mail au cabinet : excusez-vous, expliquez pourquoi vous ne pouvez pas venir et demandez un autre rendez-vous.",
    points: ["L'excuse", "La raison", "La demande d'un autre rendez-vous"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e5-1-pe-4",
    title: "Message d'excuse au travail",
    situation: "Vous êtes malade et vous devez aller chez le médecin au lieu d'aller travailler.",
    instruction: "Écrivez un message à votre chef : excusez-vous, expliquez votre problème de santé et dites quand vous revenez.",
    points: ["L'excuse", "Le problème de santé", "La date de retour"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e5-1-pe-5",
    title: "Décrire ses symptômes",
    situation: "Vous préparez votre consultation chez le médecin et vous notez vos symptômes.",
    instruction: "Décrivez vos symptômes : depuis quand vous êtes malade, où vous avez mal et comment vous vous sentez.",
    points: ["Depuis quand", "Où vous avez mal", "Comment vous vous sentez"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e5-1-pe-6",
    title: "Conseils à un ami qui a la grippe",
    situation: "Votre ami a la grippe : il a de la fièvre, il tousse et il a mal à la tête.",
    instruction: "Écrivez un message à votre ami : donnez-lui des conseils pour aller mieux et proposez votre aide.",
    points: ["Deux conseils santé", "Ce qu'il ne doit pas faire", "Votre proposition d'aide"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e5-1-pe-7",
    title: "Le cabinet médical de mon quartier",
    situation: "Un nouveau voisin vous demande des informations sur le cabinet médical du quartier.",
    instruction: "Décrivez le cabinet médical : les horaires, les médecins et comment prendre rendez-vous.",
    points: ["Les horaires", "Les médecins", "Comment prendre rendez-vous"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e5-1-pe-8",
    title: "Message à l'école",
    situation: "Votre enfant est malade et ne peut pas aller à l'école aujourd'hui.",
    instruction: "Écrivez un message au professeur : expliquez que votre enfant est malade, décrivez le problème et dites quand il revient.",
    points: ["Le problème de santé", "La visite chez le médecin", "La date de retour"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e5-1-pe-9",
    title: "Raconter une visite aux urgences",
    situation: "Le week-end dernier, vous êtes allé(e) aux urgences de l'hôpital.",
    instruction: "Racontez à un ami ce qui s'est passé : pourquoi vous y êtes allé(e), l'attente et ce que le médecin a fait.",
    points: ["La raison", "L'attente à l'hôpital", "Ce que le médecin a fait"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e5-1-pe-10",
    title: "Expliquer comment prendre rendez-vous",
    situation: "Un ami vient d'arriver dans votre ville et ne sait pas comment voir un médecin.",
    instruction: "Expliquez-lui comment faire : comment prendre rendez-vous, ce qu'il faut apporter et où aller en cas d'urgence.",
    points: ["Comment prendre rendez-vous", "Ce qu'il faut apporter", "Où aller en cas d'urgence"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
];
