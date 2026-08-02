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

/* ── Compréhension écrite — E3.1 Aller à l'école ──────────────────────────── */

const CE_TEXT = `Bienvenue à la faculté des lettres !

Informations pour les nouveaux étudiants :
Le secrétariat est ouvert du lundi au vendredi. Il est ouvert de 9 h à 12 h. Venez chercher votre carte d'étudiant. Apportez une photo et le formulaire de demande.
Avec la carte, vous entrez à la faculté. Vous pouvez emprunter des livres à la bibliothèque. Vous pouvez manger à la cafétéria.
Les cours commencent lundi 15 septembre. Le cours d'économie a lieu dans l'amphi A12. Il commence à 9 heures.
Vous avez une question ? L'association des étudiants vous aide dans la salle 20. C'est à côté de la bibliothèque.`;

const CE_POOL = buildExpressPool("e3-1-ce", [
  q({
    id: "ce-q1",
    textQ: "Quels jours le secrétariat est-il ouvert ?",
    text: ["Du lundi au vendredi", "Tous les jours", "Le week-end seulement"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le secrétariat est ouvert du lundi au _________.",
    fill: "vendredi",
    vfQ: "Le secrétariat est ouvert le samedi.",
    vfC: 1,
  }),
  q({
    id: "ce-q2",
    textQ: "Que faut-il apporter pour la carte d'étudiant ?",
    text: [
      "Une photo et le formulaire de demande",
      "Un passeport et un billet de train",
      "Un livre et un stylo",
    ],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Apportez une photo et le _________ de demande.",
    fill: "formulaire",
    vfQ: "Il faut une photo pour la carte d'étudiant.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où peut-on emprunter des livres avec la carte ?",
    text: ["À la bibliothèque", "À la cafétéria", "Au gymnase"],
    textC: 0,
    img: ["bibliothèque", "cafétéria", "gymnase"],
    imgC: 0,
    fillQ: "Vous pouvez emprunter des livres à la _________.",
    fill: "bibliothèque",
    fillA: ["bibliotheque"],
    vfQ: "La carte d'étudiant permet d'emprunter des livres.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quand commencent les cours ?",
    text: ["Lundi 15 septembre", "Mardi 15 octobre", "Lundi 5 septembre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les cours commencent lundi 15 _________.",
    fill: "septembre",
    vfQ: "Les cours commencent en octobre.",
    vfC: 1,
  }),
  q({
    id: "ce-q5",
    textQ: "Où a lieu le cours d'économie ?",
    text: ["Dans l'amphi A12", "Dans la salle 20", "À la cafétéria"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le cours d'économie a lieu dans l'_________ A12.",
    fill: "amphi",
    vfQ: "Le cours d'économie a lieu à 9 heures.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Qui aide les étudiants dans la salle 20 ?",
    text: [
      "L'association des étudiants",
      "Le directeur de la faculté",
      "Les professeurs d'économie",
    ],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'association des étudiants vous aide dans la salle _________.",
    fill: "20",
    fillA: ["vingt"],
    vfQ: "Le prix de la carte d'étudiant est indiqué dans le texte.",
    vfC: 2,
  }),
]);

export const E3_1_CE: CommunicationExercise = readingPoolExercise({
  id: "e3-1-ce",
  readingText: CE_TEXT,
  questionPool: CE_POOL,
});

/* ── Production orale — dialogues à jouer (thème école / université) ──────── */

const SECRETARIAT = { title: "L'employé du secrétariat", vous: "l'employé / l'employée du secrétariat" };
const ETUDIANT = { title: "L'étudiant", vous: "l'étudiant / l'étudiante" };
const CAMARADE = { title: "Le camarade", vous: "le camarade / la camarade" };
const PROF = { title: "La professeure", vous: "le professeur / la professeure" };

export const E3_1_PO: ExpressPoDialogue[] = [
  {
    id: "e3-1-po-1",
    title: "Retirer sa carte d'étudiant",
    context: "Vous êtes un nouvel étudiant et vous venez chercher votre carte d'étudiant au secrétariat.",
    roleA: SECRETARIAT,
    roleB: ETUDIANT,
    lines: [
      { role: "A", text: "Bonjour, je peux vous aider ?" },
      { role: "B", text: "Bonjour, je viens chercher ma carte d'étudiant." },
      { role: "A", text: "Vous avez le formulaire de demande et une photo ?" },
      { role: "B", text: "Oui, voilà le formulaire et la photo." },
      { role: "A", text: "Merci. Voici votre carte d'étudiant." },
      { role: "B", text: "Super ! Elle sert à quoi exactement ?" },
      { role: "A", text: "Vous pouvez entrer à la faculté et vous inscrire à la bibliothèque." },
      { role: "B", text: "Parfait, merci beaucoup. Au revoir !" },
    ],
  },
  {
    id: "e3-1-po-2",
    title: "Trouver la salle de cours",
    context: "Vous cherchez la salle du cours d'économie et vous demandez à un autre étudiant.",
    roleA: CAMARADE,
    roleB: ETUDIANT,
    lines: [
      { role: "A", text: "Salut ! Tu cherches quelque chose ?" },
      { role: "B", text: "Oui, je cherche le cours d'économie. Où est la salle ?" },
      { role: "A", text: "Le cours a lieu dans l'amphi A12, au premier étage." },
      { role: "B", text: "Merci ! Et le cours commence à quelle heure ?" },
      { role: "A", text: "À 9 heures. Tu as encore dix minutes." },
      { role: "B", text: "Ouf ! Tu vas aussi au cours d'économie ?" },
      { role: "A", text: "Oui, on y va ensemble ?" },
      { role: "B", text: "Avec plaisir, merci pour ton aide !" },
    ],
  },
  {
    id: "e3-1-po-3",
    title: "S'inscrire à la bibliothèque",
    context: "Vous voulez emprunter des livres et vous vous inscrivez à la bibliothèque de la faculté.",
    roleA: { title: "La bibliothécaire", vous: "le bibliothécaire / la bibliothécaire" },
    roleB: ETUDIANT,
    lines: [
      { role: "A", text: "Bonjour, je peux vous aider ?" },
      { role: "B", text: "Bonjour, je voudrais m'inscrire à la bibliothèque." },
      { role: "A", text: "Bien sûr. Vous avez votre carte d'étudiant ?" },
      { role: "B", text: "Oui, la voilà." },
      { role: "A", text: "Merci. Vous pouvez emprunter cinq livres pour deux semaines." },
      { role: "B", text: "D'accord. La bibliothèque ferme à quelle heure ?" },
      { role: "A", text: "À 20 heures, du lundi au samedi." },
      { role: "B", text: "Très bien, merci beaucoup !" },
    ],
  },
  {
    id: "e3-1-po-4",
    title: "Parler avec un professeur",
    context: "Votre note d'écrit est mauvaise. Vous allez voir votre professeure pour demander conseil.",
    roleA: PROF,
    roleB: ETUDIANT,
    lines: [
      { role: "A", text: "Bonjour, entrez ! Vous avez une question ?" },
      { role: "B", text: "Oui madame. Ma note d'écrit est mauvaise. Comment je peux réussir ?" },
      { role: "A", text: "Venez au cours de révision, le vendredi à 13 heures." },
      { role: "B", text: "D'accord. Il y a encore des examens ?" },
      { role: "A", text: "Oui, vous avez encore deux écrits et un oral." },
      { role: "B", text: "L'oral, c'est quoi exactement ?" },
      { role: "A", text: "C'est une présentation devant la classe." },
      { role: "B", text: "Merci beaucoup madame, à vendredi !" },
    ],
  },
  {
    id: "e3-1-po-5",
    title: "L'emploi du temps",
    context: "Vous parlez de votre emploi du temps avec un camarade de la fac.",
    roleA: CAMARADE,
    roleB: ETUDIANT,
    lines: [
      { role: "A", text: "Tu commences les cours à quelle heure demain ?" },
      { role: "B", text: "Je commence à 8 heures avec un CM d'histoire." },
      { role: "A", text: "Si tôt ! Et tu finis quand ?" },
      { role: "B", text: "Je finis à 18 heures. J'ai aussi un TD et un TP." },
      { role: "A", text: "Quelle journée ! Tu manges où à midi ?" },
      { role: "B", text: "Au resto U, ce n'est pas cher. Tu viens avec moi ?" },
      { role: "A", text: "D'accord ! On se retrouve à midi devant l'entrée." },
      { role: "B", text: "Parfait, à demain !" },
    ],
  },
  {
    id: "e3-1-po-6",
    title: "L'association des étudiants",
    context: "Un membre de l'association des étudiants vous propose de vous inscrire.",
    roleA: { title: "Le membre de l'association", vous: "le membre de l'association" },
    roleB: ETUDIANT,
    lines: [
      { role: "A", text: "Bonjour ! Tu veux t'inscrire à l'association des étudiants ?" },
      { role: "B", text: "Peut-être… Qu'est-ce que vous faites ?" },
      { role: "A", text: "Nous organisons des révisions à la bibliothèque pour les examens." },
      { role: "B", text: "C'est super ! Et c'est gratuit ?" },
      { role: "A", text: "Oui, c'est gratuit. Et après les examens, on organise des fêtes !" },
      { role: "B", text: "J'adore ! Comment je m'inscris ?" },
      { role: "A", text: "Écris ton nom sur cette liste, c'est tout." },
      { role: "B", text: "Voilà, c'est fait. Merci !" },
    ],
  },
  {
    id: "e3-1-po-7",
    title: "Demander de l'aide à l'accueil",
    context: "Vous cherchez le secrétariat et vous demandez votre chemin à l'accueil de la faculté.",
    roleA: { title: "L'employé de l'accueil", vous: "l'employé / l'employée de l'accueil" },
    roleB: ETUDIANT,
    lines: [
      { role: "A", text: "Bonjour, je peux vous renseigner ?" },
      { role: "B", text: "Oui, je cherche le secrétariat de la fac des lettres." },
      { role: "A", text: "C'est au premier étage, la porte à droite de l'escalier." },
      { role: "B", text: "Merci. Le secrétariat est ouvert maintenant ?" },
      { role: "A", text: "Oui, il ferme à midi. Vous avez le temps." },
      { role: "B", text: "Super. Et où est la cafétéria, s'il vous plaît ?" },
      { role: "A", text: "Au fond du couloir, à gauche." },
      { role: "B", text: "Merci beaucoup pour votre aide !" },
    ],
  },
  {
    id: "e3-1-po-8",
    title: "Premier jour à la fac",
    context: "C'est votre premier jour à la faculté. Un étudiant vient vous parler.",
    roleA: CAMARADE,
    roleB: ETUDIANT,
    lines: [
      { role: "A", text: "Salut, tu es nouveau ici ?" },
      { role: "B", text: "Oui, c'est mon premier jour. Je suis un peu perdu !" },
      { role: "A", text: "Ne t'inquiète pas. Tu étudies quoi ?" },
      { role: "B", text: "J'étudie les lettres. Et toi ?" },
      { role: "A", text: "Moi, les sciences, en deuxième année. Tu connais la cafétéria ?" },
      { role: "B", text: "Non, pas encore. Elle est où ?" },
      { role: "A", text: "À côté de la bibliothèque. On y va, je t'invite pour un café !" },
      { role: "B", text: "Avec plaisir, merci !" },
    ],
  },
  {
    id: "e3-1-po-9",
    title: "Un oral à préparer",
    context: "Vous avez un examen oral vendredi. Vous organisez une révision avec un camarade.",
    roleA: CAMARADE,
    roleB: ETUDIANT,
    lines: [
      { role: "A", text: "Tu es prêt pour l'oral de vendredi ?" },
      { role: "B", text: "Non, pas du tout ! Je suis stressé." },
      { role: "A", text: "Moi aussi. On révise ensemble à la bibliothèque ?" },
      { role: "B", text: "Bonne idée ! Tu es libre quand ?" },
      { role: "A", text: "Demain après-midi, après le TD de 14 heures." },
      { role: "B", text: "Parfait. On se retrouve à quelle heure ?" },
      { role: "A", text: "À 16 heures, devant la bibliothèque." },
      { role: "B", text: "Super, à demain alors !" },
    ],
  },
  {
    id: "e3-1-po-10",
    title: "Venir plus tard au secrétariat",
    context: "Le secrétariat vous donne un rendez-vous, mais vous avez cours à cette heure-là.",
    roleA: SECRETARIAT,
    roleB: ETUDIANT,
    lines: [
      { role: "A", text: "Venez chercher votre carte d'étudiant demain à 10 heures." },
      { role: "B", text: "Demain à 10 heures ? Je peux venir plus tard ?" },
      { role: "A", text: "Vous pouvez venir quand ?" },
      { role: "B", text: "Je commence les cours à 9 heures et je finis à 11 heures." },
      { role: "A", text: "Alors venez à 11 heures, le secrétariat ferme à midi." },
      { role: "B", text: "D'accord, à 11 heures. Il faut apporter quelque chose ?" },
      { role: "A", text: "Oui, apportez une photo et votre formulaire." },
      { role: "B", text: "Très bien, merci. À demain !" },
    ],
  },
];

/* ── Production écrite — consignes (A1 : 50 mots minimum) ─────────────────── */

const PE_MIN = 50;
const PE_MAX = 120;

export const E3_1_PE: ExpressPePrompt[] = [
  {
    id: "e3-1-pe-1",
    title: "Ma première journée à la fac",
    situation: "Vous venez de passer votre première journée à la faculté.",
    instruction: "Écrivez un message à un ami : racontez votre première journée, vos cours et les personnes rencontrées.",
    points: ["Les cours de la journée", "Une personne rencontrée", "Votre impression"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-1-pe-2",
    title: "E-mail au secrétariat",
    situation: "Vous n'avez pas encore votre carte d'étudiant et vous avez besoin d'informations.",
    instruction: "Écrivez un e-mail au secrétariat : présentez-vous, expliquez votre problème et demandez quand vous pouvez venir.",
    points: ["La formule de politesse", "Votre problème", "Une question sur les horaires"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-1-pe-3",
    title: "Mon emploi du temps",
    situation: "Un ami veut connaître votre semaine de cours.",
    instruction: "Décrivez votre emploi du temps : les jours de cours, les heures de début et de fin, et votre journée préférée.",
    points: ["Les jours de cours", "Les horaires", "Votre journée préférée"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-1-pe-4",
    title: "Réviser ensemble",
    situation: "Vous avez un examen la semaine prochaine et vous voulez réviser avec un camarade.",
    instruction: "Écrivez un message à votre camarade : proposez une révision à la bibliothèque, donnez le jour, l'heure et le lieu de rendez-vous.",
    points: ["La proposition de réviser", "Le jour et l'heure", "Le lieu de rendez-vous"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-1-pe-5",
    title: "Décrire son école",
    situation: "Un correspondant étranger veut connaître votre école ou votre université.",
    instruction: "Décrivez votre école : les salles, la bibliothèque, la cafétéria et ce que vous aimez.",
    points: ["Les lieux importants", "Ce qu'on peut y faire", "Ce que vous aimez"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-1-pe-6",
    title: "Message d'excuse au professeur",
    situation: "Vous êtes malade et vous ne pouvez pas venir au cours demain.",
    instruction: "Écrivez un message à votre professeur : excusez-vous, expliquez pourquoi vous êtes absent et demandez le travail à faire.",
    points: ["L'excuse", "La raison de l'absence", "La question sur le travail"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-1-pe-7",
    title: "Affiche pour l'association",
    situation: "Vous êtes membre de l'association des étudiants et vous préparez une affiche.",
    instruction: "Écrivez le texte de l'affiche : présentez l'association, dites ce qu'elle organise et expliquez comment s'inscrire.",
    points: ["Ce que fait l'association", "Un événement organisé", "Comment s'inscrire"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-1-pe-8",
    title: "Raconter un examen",
    situation: "Vous venez de passer un examen important à la fac.",
    instruction: "Racontez cet examen à un ami : la matière, comment vous vous êtes préparé(e) et comment ça s'est passé.",
    points: ["La matière de l'examen", "La préparation", "Votre impression après"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-1-pe-9",
    title: "Conseils à un nouvel étudiant",
    situation: "Un nouvel étudiant arrive dans votre faculté et ne connaît rien.",
    instruction: "Écrivez-lui un message : donnez-lui des conseils pour la carte d'étudiant, la bibliothèque et les cours.",
    points: ["Un conseil pour la carte d'étudiant", "Un conseil pour la bibliothèque", "Un conseil pour les cours"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-1-pe-10",
    title: "L'école ici et dans mon pays",
    situation: "Votre correspondant veut savoir si l'école est différente dans votre pays.",
    instruction: "Comparez l'école de votre pays et l'école ici : les horaires, les cours et une différence importante.",
    points: ["Les horaires", "Les cours", "Une différence importante"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
];
