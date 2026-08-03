import {
  readingPoolExercise,
  type CommunicationExercise,
  type ExpressPePrompt,
} from "./express-types";
import { buildExpressPool, type ExpressRawQ } from "./express-listening-helpers";

/**
 * E-mails E3 — École, quotidien, travail.
 * CE e-mail : un e-mail à lire + pool de questions (≥ 10).
 * PE e-mail : pool d'e-mails reçus auxquels répondre (≥ 10).
 */

function q(item: ExpressRawQ): ExpressRawQ {
  return item;
}

const PE_MIN = 50;
const PE_MAX = 120;

/* ════════════════════════════════════════════════════════════════════════════
   E3.1 — Aller à l'école
   ════════════════════════════════════════════════════════════════════════════ */

const E3_1_CE_EMAIL_TEXT_1 = `De : École du Lac

Objet : la rentrée

Bonjour,

Un café est prévu pour les parents. Le rendez-vous est lundi 26 août à 8 h, dans la cour.
Consigne : apporter une trousse.

Merci encore, et à bientôt.
Tout est organisé pour que ce soit simple.
Le contact est indiqué dans le message.
N'oubliez pas de vérifier la date.
Bonne journée à toutes et à tous.
Les personnes à mobilité réduite sont prioritaires.
Cordialement,
École du Lac`;

const E3_1_CE_EMAIL_POOL_1 = buildExpressPool("e3-1-ce-email-1", [
  q({
    id: "cem-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["un e-mail", "une facture", "une recette"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "un e-mail",
    vfQ: "Le texte mentionne un e-mail.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quelle matière est mentionnée ?",
    text: ["la rentrée", "la cuisine", "le dessin libre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La matière est _________.",
    fill: "la rentrée",
    vfQ: "Le texte mentionne la rentrée.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela se passe-t-il ?",
    text: ["lundi 26 août à 8 h", "à minuit", "en 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "lundi 26 août à 8 h",
    vfQ: "Le texte mentionne lundi 26 août à 8 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Où cela se passe-t-il ?",
    text: ["dans la cour", "à la plage", "à l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le lieu est _________.",
    fill: "dans la cour",
    vfQ: "Le texte mentionne dans la cour.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Qui est mentionné ?",
    text: ["École du Lac", "un voisin", "le facteur"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La personne est _________.",
    fill: "École du Lac",
    vfQ: "Le texte mentionne École du Lac.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il faire ?",
    text: ["apporter une trousse", "acheter une voiture", "partir loin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "apporter une trousse",
    vfQ: "Le texte mentionne apporter une trousse.",
    vfC: 0,
  }),
]);
const E3_1_CE_EMAIL_TEXT_2 = `De : Secrétariat

Objet : Information

Bonjour,

Nous confirmons l'anglais oral jeudi à 9 h.
Mme Rossi accueillera le groupe en salle 3. Action demandée : prendre la liste de mots.

Je reste à votre disposition pour toute précision.
Merci de confirmer la bonne réception de ce message.
Vous pouvez répondre directement à cet e-mail.
Nous traitons votre demande dans les meilleurs délais.
N'hésitez pas à nous indiquer vos disponibilités.
Les personnes à mobilité réduite sont prioritaires.
Le secrétariat`;

const E3_1_CE_EMAIL_POOL_2 = buildExpressPool("e3-1-ce-email-2", [
  q({
    id: "cem-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["un e-mail", "une facture", "une recette"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "un e-mail",
    vfQ: "Le texte mentionne un e-mail.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quelle matière est mentionnée ?",
    text: ["l'anglais oral", "la cuisine", "le dessin libre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La matière est _________.",
    fill: "l'anglais oral",
    vfQ: "Le texte mentionne l'anglais oral.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela se passe-t-il ?",
    text: ["jeudi à 9 h", "à minuit", "en 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "jeudi à 9 h",
    vfQ: "Le texte mentionne jeudi à 9 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Où cela se passe-t-il ?",
    text: ["en salle 3", "à la plage", "à l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le lieu est _________.",
    fill: "en salle 3",
    vfQ: "Le texte mentionne en salle 3.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Qui est mentionné ?",
    text: ["Mme Rossi", "un voisin", "le facteur"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La personne est _________.",
    fill: "Mme Rossi",
    vfQ: "Le texte mentionne Mme Rossi.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il faire ?",
    text: ["prendre la liste de mots", "acheter une voiture", "partir loin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "prendre la liste de mots",
    vfQ: "Le texte mentionne prendre la liste de mots.",
    vfC: 0,
  }),
]);
const E3_1_CE_EMAIL_TEXT_3 = `De : Portail

Objet : À faire

Bonjour,

Une nouvelle consigne est disponible pour la lecture.
Ouvrez-la avant mercredi soir; elle concerne au rez-de-chaussée.
Bibliothèque scolaire demande cette action : présenter la carte d'étudiant. Détail : Le roman réservé attend au bureau.

Message automatique
Tout est organisé pour que ce soit simple.
Le contact est indiqué dans le message.
N'oubliez pas de vérifier la date.
Les horaires habituels restent les mêmes.
Merci de votre attention et de votre patience.
Bonne journée à toutes et à tous.`;

const E3_1_CE_EMAIL_POOL_3 = buildExpressPool("e3-1-ce-email-3", [
  q({
    id: "cem-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["un e-mail", "une facture", "une recette"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "un e-mail",
    vfQ: "Le texte mentionne un e-mail.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quelle matière est mentionnée ?",
    text: ["la lecture", "la cuisine", "le dessin libre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La matière est _________.",
    fill: "la lecture",
    vfQ: "Le texte mentionne la lecture.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela se passe-t-il ?",
    text: ["mercredi soir", "à minuit", "en 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "mercredi soir",
    vfQ: "Le texte mentionne mercredi soir.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Où cela se passe-t-il ?",
    text: ["au rez-de-chaussée", "à la plage", "à l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le lieu est _________.",
    fill: "au rez-de-chaussée",
    vfQ: "Le texte mentionne au rez-de-chaussée.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Qui est mentionné ?",
    text: ["Bibliothèque scolaire", "un voisin", "le facteur"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La personne est _________.",
    fill: "Bibliothèque scolaire",
    vfQ: "Le texte mentionne Bibliothèque scolaire.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il faire ?",
    text: ["présenter la carte d'étudiant", "acheter une voiture", "partir loin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "présenter la carte d'étudiant",
    vfQ: "Le texte mentionne présenter la carte d'étudiant.",
    vfC: 0,
  }),
]);
const E3_1_CE_EMAIL_TEXT_4 = `De : M. Weber

Objet : Rappel

Bonjour à tous,

Je confirme l'exposé sur Rome. Le moment est lundi prochain, en salle 8.
Venez calmement. Action à prévoir : envoyer trois images.
Chaque élève parle deux minutes.

Un agent peut vous accompagner jusqu'au bon guichet.
Le bâtiment est ouvert dès 8 heures.
Je t'écris aussi pour te donner un peu plus de nouvelles.
Dis-moi si tu as des questions, je réponds vite.
Les personnes à mobilité réduite sont prioritaires.
À bientôt`;

const E3_1_CE_EMAIL_POOL_4 = buildExpressPool("e3-1-ce-email-4", [
  q({
    id: "cem-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["un e-mail", "une facture", "une recette"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "un e-mail",
    vfQ: "Le texte mentionne un e-mail.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quelle matière est mentionnée ?",
    text: ["l'exposé sur Rome", "la cuisine", "le dessin libre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La matière est _________.",
    fill: "l'exposé sur Rome",
    vfQ: "Le texte mentionne l'exposé sur Rome.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela se passe-t-il ?",
    text: ["lundi prochain", "à minuit", "en 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "lundi prochain",
    vfQ: "Le texte mentionne lundi prochain.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Où cela se passe-t-il ?",
    text: ["en salle 8", "à la plage", "à l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le lieu est _________.",
    fill: "en salle 8",
    vfQ: "Le texte mentionne en salle 8.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Qui est mentionné ?",
    text: ["M. Weber", "un voisin", "le facteur"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La personne est _________.",
    fill: "M. Weber",
    vfQ: "Le texte mentionne M. Weber.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il faire ?",
    text: ["envoyer trois images", "acheter une voiture", "partir loin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "envoyer trois images",
    vfQ: "Le texte mentionne envoyer trois images.",
    vfC: 0,
  }),
]);
const E3_1_CE_EMAIL_TEXT_5 = `De : Vie scolaire

Objet : Organisation

Bonjour,

Pour la chimie, l'entrée se fait autrement.
Service des examens attend dans l'amphi B 20 avril à 13 h 30.
Une seule consigne : prendre une calculatrice simple. Détail : La place de Sara est au rang 4.

Vie scolaire
Prenez votre temps pour comprendre le message.
En cas de changement, un nouvel avis sera publié.
Nous sommes là pour vous aider.
Gardez ce texte pour vous en souvenir.
Les horaires habituels restent les mêmes.
N'hésite pas à me répondre quand tu peux.`;

const E3_1_CE_EMAIL_POOL_5 = buildExpressPool("e3-1-ce-email-5", [
  q({
    id: "cem-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["un e-mail", "une facture", "une recette"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "un e-mail",
    vfQ: "Le texte mentionne un e-mail.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quelle matière est mentionnée ?",
    text: ["la chimie", "la cuisine", "le dessin libre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La matière est _________.",
    fill: "la chimie",
    vfQ: "Le texte mentionne la chimie.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela se passe-t-il ?",
    text: ["20 avril à 13 h 30", "à minuit", "en 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "20 avril à 13 h 30",
    vfQ: "Le texte mentionne 20 avril à 13 h 30.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Où cela se passe-t-il ?",
    text: ["dans l'amphi B", "à la plage", "à l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le lieu est _________.",
    fill: "dans l'amphi B",
    vfQ: "Le texte mentionne dans l'amphi B.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Qui est mentionné ?",
    text: ["Service des examens", "un voisin", "le facteur"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La personne est _________.",
    fill: "Service des examens",
    vfQ: "Le texte mentionne Service des examens.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il faire ?",
    text: ["prendre une calculatrice simple", "acheter une voiture", "partir loin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "prendre une calculatrice simple",
    vfQ: "Le texte mentionne prendre une calculatrice simple.",
    vfC: 0,
  }),
]);
const E3_1_CE_EMAIL_TEXT_6 = `De : Bibliothèque

Objet : Document prêt

Bonjour,

Le document ou dossier pour les fusées à eau est prêt.
Vous pouvez le demander mercredi à 14 h, derrière le gymnase. Club sciences connaît votre nom.
Action à prévoir : apporter une bouteille vide.

Lisez bien jusqu'à la fin, s'il vous plaît.
Vous pouvez demander de l'aide si besoin.
Les informations importantes sont déjà notées plus haut.
Merci de votre attention et de votre patience.
Une confirmation arrivera ensuite.
Le service est également disponible en ligne.
Merci`;

const E3_1_CE_EMAIL_POOL_6 = buildExpressPool("e3-1-ce-email-6", [
  q({
    id: "cem-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["un e-mail", "une facture", "une recette"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "un e-mail",
    vfQ: "Le texte mentionne un e-mail.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quelle matière est mentionnée ?",
    text: ["les fusées à eau", "la cuisine", "le dessin libre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La matière est _________.",
    fill: "les fusées à eau",
    vfQ: "Le texte mentionne les fusées à eau.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela se passe-t-il ?",
    text: ["mercredi à 14 h", "à minuit", "en 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "mercredi à 14 h",
    vfQ: "Le texte mentionne mercredi à 14 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Où cela se passe-t-il ?",
    text: ["derrière le gymnase", "à la plage", "à l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le lieu est _________.",
    fill: "derrière le gymnase",
    vfQ: "Le texte mentionne derrière le gymnase.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Qui est mentionné ?",
    text: ["Club sciences", "un voisin", "le facteur"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La personne est _________.",
    fill: "Club sciences",
    vfQ: "Le texte mentionne Club sciences.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il faire ?",
    text: ["apporter une bouteille vide", "acheter une voiture", "partir loin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "apporter une bouteille vide",
    vfQ: "Le texte mentionne apporter une bouteille vide.",
    vfC: 0,
  }),
]);
const E3_1_CE_EMAIL_TEXT_7 = `De : Association

Objet : Invitation

Bonjour,

Les familles ou amis sont invités pour la rencontre école-famille mardi à 19 h.
Les informations seront visibles dans la salle polyvalente. Association des parents commencera l'accueil.
Consigne : préparer une question.

Association
N'oubliez pas de vérifier la date et l'heure.
Merci de confirmer la bonne réception de ce message.
Vous pouvez répondre directement à cet e-mail.
Nous traitons votre demande dans les meilleurs délais.
N'hésitez pas à nous indiquer vos disponibilités.
Ce message contient les informations essentielles.`;

const E3_1_CE_EMAIL_POOL_7 = buildExpressPool("e3-1-ce-email-7", [
  q({
    id: "cem-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["un e-mail", "une facture", "une recette"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "un e-mail",
    vfQ: "Le texte mentionne un e-mail.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quelle matière est mentionnée ?",
    text: ["la rencontre école-famille", "la cuisine", "le dessin libre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La matière est _________.",
    fill: "la rencontre école-famille",
    vfQ: "Le texte mentionne la rencontre école-famille.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela se passe-t-il ?",
    text: ["mardi à 19 h", "à minuit", "en 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "mardi à 19 h",
    vfQ: "Le texte mentionne mardi à 19 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Où cela se passe-t-il ?",
    text: ["dans la salle polyvalente", "à la plage", "à l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le lieu est _________.",
    fill: "dans la salle polyvalente",
    vfQ: "Le texte mentionne dans la salle polyvalente.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Qui est mentionné ?",
    text: ["Association des parents", "un voisin", "le facteur"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La personne est _________.",
    fill: "Association des parents",
    vfQ: "Le texte mentionne Association des parents.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il faire ?",
    text: ["préparer une question", "acheter une voiture", "partir loin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "préparer une question",
    vfQ: "Le texte mentionne préparer une question.",
    vfC: 0,
  }),
]);
const E3_1_CE_EMAIL_TEXT_8 = `De : Application

Objet : Notification

Bonjour,

Une modification concerne le devoir en ligne.
Le rendez-vous est sur Moodle avant vendredi minuit. Application Classe+ ajoute : Détail : Le brouillon peut rester privé.
Action demandée : déposer le fichier.

Application
Tout est organisé pour que ce soit simple.
Le contact est indiqué dans le message.
N'oubliez pas de vérifier la date.
Vous pouvez venir accompagné(e) si vous le souhaitez.
Bonne journée à toutes et à tous.
Ce document complète les informations déjà données.`;

const E3_1_CE_EMAIL_POOL_8 = buildExpressPool("e3-1-ce-email-8", [
  q({
    id: "cem-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["un e-mail", "une facture", "une recette"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "un e-mail",
    vfQ: "Le texte mentionne un e-mail.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quelle matière est mentionnée ?",
    text: ["le devoir en ligne", "la cuisine", "le dessin libre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La matière est _________.",
    fill: "le devoir en ligne",
    vfQ: "Le texte mentionne le devoir en ligne.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela se passe-t-il ?",
    text: ["avant vendredi minuit", "à minuit", "en 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "avant vendredi minuit",
    vfQ: "Le texte mentionne avant vendredi minuit.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Où cela se passe-t-il ?",
    text: ["sur Moodle", "à la plage", "à l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le lieu est _________.",
    fill: "sur Moodle",
    vfQ: "Le texte mentionne sur Moodle.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Qui est mentionné ?",
    text: ["Application Classe+", "un voisin", "le facteur"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La personne est _________.",
    fill: "Application Classe+",
    vfQ: "Le texte mentionne Application Classe+.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il faire ?",
    text: ["déposer le fichier", "acheter une voiture", "partir loin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "déposer le fichier",
    vfQ: "Le texte mentionne déposer le fichier.",
    vfC: 0,
  }),
]);
const E3_1_CE_EMAIL_TEXT_9 = `De : Service des examens

Objet : Convocation

Bonjour,

Votre rendez-vous pour la physique est confirmé mercredi à 13 h.
L'entrée se fait au labo 1; Laboratoire vérifie la salle.
Avant le début, consigne : mettre la blouse.

Service des examens
Nous vous souhaitons une excellente journée.
À bientôt, et merci de votre lecture.
Je reste près de mon téléphone aujourd'hui.
Merci encore pour votre confiance.
Voici quelques détails utiles pour la suite.
Lisez bien jusqu'à la fin, s'il vous plaît.
Vous pouvez demander de l'aide si besoin.`;

const E3_1_CE_EMAIL_POOL_9 = buildExpressPool("e3-1-ce-email-9", [
  q({
    id: "cem-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["un e-mail", "une facture", "une recette"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "un e-mail",
    vfQ: "Le texte mentionne un e-mail.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quelle matière est mentionnée ?",
    text: ["la physique", "la cuisine", "le dessin libre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La matière est _________.",
    fill: "la physique",
    vfQ: "Le texte mentionne la physique.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela se passe-t-il ?",
    text: ["mercredi à 13 h", "à minuit", "en 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "mercredi à 13 h",
    vfQ: "Le texte mentionne mercredi à 13 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Où cela se passe-t-il ?",
    text: ["au labo 1", "à la plage", "à l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le lieu est _________.",
    fill: "au labo 1",
    vfQ: "Le texte mentionne au labo 1.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Qui est mentionné ?",
    text: ["Laboratoire", "un voisin", "le facteur"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La personne est _________.",
    fill: "Laboratoire",
    vfQ: "Le texte mentionne Laboratoire.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il faire ?",
    text: ["mettre la blouse", "acheter une voiture", "partir loin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "mettre la blouse",
    vfQ: "Le texte mentionne mettre la blouse.",
    vfC: 0,
  }),
]);
const E3_1_CE_EMAIL_TEXT_10 = `De : Laboratoire

Objet : Sécurité

Bonjour,

Pour l'orientation, attendez Mme Pop.
Le groupe arrive au bureau 2 jeudi à 15 h. Détail : Le rendez-vous dure vingt minutes.
Consigne : apporter les bulletins.

Responsable
Si une information manque, écrivez-nous rapidement.
Nous avons bien noté votre situation.
Le service est disponible également en ligne.
Pensez à joindre les documents demandés.
Votre dossier sera mis à jour après votre réponse.
À bientôt, et merci de votre lecture.`;

const E3_1_CE_EMAIL_POOL_10 = buildExpressPool("e3-1-ce-email-10", [
  q({
    id: "cem-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["un e-mail", "une facture", "une recette"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "un e-mail",
    vfQ: "Le texte mentionne un e-mail.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quelle matière est mentionnée ?",
    text: ["l'orientation", "la cuisine", "le dessin libre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La matière est _________.",
    fill: "l'orientation",
    vfQ: "Le texte mentionne l'orientation.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela se passe-t-il ?",
    text: ["jeudi à 15 h", "à minuit", "en 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "jeudi à 15 h",
    vfQ: "Le texte mentionne jeudi à 15 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Où cela se passe-t-il ?",
    text: ["au bureau 2", "à la plage", "à l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le lieu est _________.",
    fill: "au bureau 2",
    vfQ: "Le texte mentionne au bureau 2.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Qui est mentionné ?",
    text: ["Mme Pop", "un voisin", "le facteur"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La personne est _________.",
    fill: "Mme Pop",
    vfQ: "Le texte mentionne Mme Pop.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il faire ?",
    text: ["apporter les bulletins", "acheter une voiture", "partir loin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "apporter les bulletins",
    vfQ: "Le texte mentionne apporter les bulletins.",
    vfC: 0,
  }),
]);
const E3_1_CE_EMAIL_TEXT_11 = `De : Surveillance

Objet : Pause

Bonjour,

M. Antoine accompagne les personnes au gymnase.
Après la pause, l'entraînement reprend mardi à 17 h.
Pendant l'attente, action calme : porter une tenue de sport.

Tout est organisé pour que ce soit simple.
Le contact est indiqué dans le message.
N'oubliez pas de vérifier la date.
Bonne journée à toutes et à tous.
Merci de confirmer la bonne réception.
Bonne journée`;

const E3_1_CE_EMAIL_POOL_11 = buildExpressPool("e3-1-ce-email-11", [
  q({
    id: "cem-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["un e-mail", "une facture", "une recette"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "un e-mail",
    vfQ: "Le texte mentionne un e-mail.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quelle matière est mentionnée ?",
    text: ["l'entraînement", "la cuisine", "le dessin libre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La matière est _________.",
    fill: "l'entraînement",
    vfQ: "Le texte mentionne l'entraînement.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela se passe-t-il ?",
    text: ["mardi à 17 h", "à minuit", "en 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "mardi à 17 h",
    vfQ: "Le texte mentionne mardi à 17 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Où cela se passe-t-il ?",
    text: ["au gymnase", "à la plage", "à l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le lieu est _________.",
    fill: "au gymnase",
    vfQ: "Le texte mentionne au gymnase.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Qui est mentionné ?",
    text: ["M. Antoine", "un voisin", "le facteur"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La personne est _________.",
    fill: "M. Antoine",
    vfQ: "Le texte mentionne M. Antoine.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il faire ?",
    text: ["porter une tenue de sport", "acheter une voiture", "partir loin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "porter une tenue de sport",
    vfQ: "Le texte mentionne porter une tenue de sport.",
    vfC: 0,
  }),
]);
const E3_1_CE_EMAIL_TEXT_12 = `De : Club

Objet : Inscription

Bonjour,

Le club aide pour la conférence de droit. Prochaine séance : mardi 14 mai à 18 h.
Elle a lieu dans l'amphi C avec Faculté de droit.
Pour participer, action simple : s'inscrire en ligne. Détail : L'entrée est gratuite.

Club
Une question ? Écrivez ou téléphonez.
Merci encore, et à bientôt.
Tout est organisé pour que ce soit simple.
Le contact est indiqué dans le message.`;

const E3_1_CE_EMAIL_POOL_12 = buildExpressPool("e3-1-ce-email-12", [
  q({
    id: "cem-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["un e-mail", "une facture", "une recette"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "un e-mail",
    vfQ: "Le texte mentionne un e-mail.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quelle matière est mentionnée ?",
    text: ["la conférence de droit", "la cuisine", "le dessin libre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La matière est _________.",
    fill: "la conférence de droit",
    vfQ: "Le texte mentionne la conférence de droit.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela se passe-t-il ?",
    text: ["mardi 14 mai à 18 h", "à minuit", "en 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "mardi 14 mai à 18 h",
    vfQ: "Le texte mentionne mardi 14 mai à 18 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Où cela se passe-t-il ?",
    text: ["dans l'amphi C", "à la plage", "à l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le lieu est _________.",
    fill: "dans l'amphi C",
    vfQ: "Le texte mentionne dans l'amphi C.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Qui est mentionné ?",
    text: ["Faculté de droit", "un voisin", "le facteur"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La personne est _________.",
    fill: "Faculté de droit",
    vfQ: "Le texte mentionne Faculté de droit.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il faire ?",
    text: ["s'inscrire en ligne", "acheter une voiture", "partir loin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "s'inscrire en ligne",
    vfQ: "Le texte mentionne s'inscrire en ligne.",
    vfC: 0,
  }),
]);
const E3_1_CE_EMAIL_TEXT_13 = `De : École primaire

Objet : Travail

Bonjour,

Je rappelle le travail ou rendez-vous de le goûter de fin d'année.
Il est prévu mercredi 26 juin à 16 h, dans la cour.
Avant la séance, consigne : apporter un plat à partager. Détail : Les classes chantent deux chansons.

École primaire
Ce document complète les informations déjà données.
Nous comptons sur vous.
Il y a une fontaine d'eau près de l'entrée principale.
Les places assises sont limitées le week-end.
Merci de lire ce message jusqu'à la fin.
Les informations importantes sont déjà indiquées plus haut.`;

const E3_1_CE_EMAIL_POOL_13 = buildExpressPool("e3-1-ce-email-13", [
  q({
    id: "cem-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["un e-mail", "une facture", "une recette"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "un e-mail",
    vfQ: "Le texte mentionne un e-mail.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quelle matière est mentionnée ?",
    text: ["le goûter de fin d'année", "la cuisine", "le dessin libre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La matière est _________.",
    fill: "le goûter de fin d'année",
    vfQ: "Le texte mentionne le goûter de fin d'année.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela se passe-t-il ?",
    text: ["mercredi 26 juin à 16 h", "à minuit", "en 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "mercredi 26 juin à 16 h",
    vfQ: "Le texte mentionne mercredi 26 juin à 16 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Où cela se passe-t-il ?",
    text: ["dans la cour", "à la plage", "à l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le lieu est _________.",
    fill: "dans la cour",
    vfQ: "Le texte mentionne dans la cour.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Qui est mentionné ?",
    text: ["École primaire", "un voisin", "le facteur"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La personne est _________.",
    fill: "École primaire",
    vfQ: "Le texte mentionne École primaire.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il faire ?",
    text: ["apporter un plat à partager", "acheter une voiture", "partir loin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "apporter un plat à partager",
    vfQ: "Le texte mentionne apporter un plat à partager.",
    vfC: 0,
  }),
]);
const E3_1_CE_EMAIL_TEXT_14 = `De : Direction

Objet : Changement

Bonjour,

la musique change d'organisation. Gymnase accompagne le groupe en salle de musique lundi 1 avril.
La consigne pour tous : noter le report à mardi.
Aucun élève ne doit venir à 15 h.

Direction
Nous comptons sur vous.
Pensez à arriver un peu en avance.
Le trajet dure environ quinze minutes à pied.
Une carte de la zone est affichée dehors.
Les ascenseurs se trouvent à gauche de l'entrée.
Gardez ce texte pour vous en souvenir.`;

const E3_1_CE_EMAIL_POOL_14 = buildExpressPool("e3-1-ce-email-14", [
  q({
    id: "cem-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["un e-mail", "une facture", "une recette"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "un e-mail",
    vfQ: "Le texte mentionne un e-mail.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quelle matière est mentionnée ?",
    text: ["la musique", "la cuisine", "le dessin libre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La matière est _________.",
    fill: "la musique",
    vfQ: "Le texte mentionne la musique.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela se passe-t-il ?",
    text: ["lundi 1 avril", "à minuit", "en 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "lundi 1 avril",
    vfQ: "Le texte mentionne lundi 1 avril.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Où cela se passe-t-il ?",
    text: ["en salle de musique", "à la plage", "à l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le lieu est _________.",
    fill: "en salle de musique",
    vfQ: "Le texte mentionne en salle de musique.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Qui est mentionné ?",
    text: ["Gymnase", "un voisin", "le facteur"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La personne est _________.",
    fill: "Gymnase",
    vfQ: "Le texte mentionne Gymnase.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il faire ?",
    text: ["noter le report à mardi", "acheter une voiture", "partir loin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "noter le report à mardi",
    vfQ: "Le texte mentionne noter le report à mardi.",
    vfC: 0,
  }),
]);
const E3_1_CE_EMAIL_TEXT_15 = `De : Forum

Objet : Groupe

Bonjour,

Un groupe se forme pour la soirée d'intégration.
La rencontre est samedi 21 septembre à 20 h, sur le campus. Association étudiante organise les rôles.
Si vous venez, pensez à apporter une boisson.

Forum
Si une information manque, écrivez-nous rapidement.
Nous avons bien noté votre situation.
Le service est disponible également en ligne.
Pensez à joindre les documents demandés.
Votre dossier sera mis à jour après votre réponse.
J'espère que tout se passe bien de ton côté.`;

const E3_1_CE_EMAIL_POOL_15 = buildExpressPool("e3-1-ce-email-15", [
  q({
    id: "cem-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["un e-mail", "une facture", "une recette"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "un e-mail",
    vfQ: "Le texte mentionne un e-mail.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quelle matière est mentionnée ?",
    text: ["la soirée d'intégration", "la cuisine", "le dessin libre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La matière est _________.",
    fill: "la soirée d'intégration",
    vfQ: "Le texte mentionne la soirée d'intégration.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela se passe-t-il ?",
    text: ["samedi 21 septembre à 20 h", "à minuit", "en 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "samedi 21 septembre à 20 h",
    vfQ: "Le texte mentionne samedi 21 septembre à 20 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Où cela se passe-t-il ?",
    text: ["sur le campus", "à la plage", "à l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le lieu est _________.",
    fill: "sur le campus",
    vfQ: "Le texte mentionne sur le campus.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Qui est mentionné ?",
    text: ["Association étudiante", "un voisin", "le facteur"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La personne est _________.",
    fill: "Association étudiante",
    vfQ: "Le texte mentionne Association étudiante.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il faire ?",
    text: ["apporter une boisson", "acheter une voiture", "partir loin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "apporter une boisson",
    vfQ: "Le texte mentionne apporter une boisson.",
    vfC: 0,
  }),
]);
const E3_1_CE_EMAIL_TEXT_16 = `De : Tutorats

Objet : Révision

Bonjour,

La préparation de le projet météo commence lundi 29 avril.
Elle se passe en salle info 4. M. Garcia répond aux questions.
Ensuite, action finale : préparer une présentation. Détail : Les groupes comptent trois personnes.

Tutorats
Le trajet est simple, ne t'inquiète pas.
Merci encore pour votre confiance.
Voici quelques détails utiles pour la suite.
Lisez bien jusqu'à la fin, s'il vous plaît.
Vous pouvez demander de l'aide si besoin.`;

const E3_1_CE_EMAIL_POOL_16 = buildExpressPool("e3-1-ce-email-16", [
  q({
    id: "cem-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["un e-mail", "une facture", "une recette"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "un e-mail",
    vfQ: "Le texte mentionne un e-mail.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quelle matière est mentionnée ?",
    text: ["le projet météo", "la cuisine", "le dessin libre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La matière est _________.",
    fill: "le projet météo",
    vfQ: "Le texte mentionne le projet météo.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela se passe-t-il ?",
    text: ["lundi 29 avril", "à minuit", "en 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "lundi 29 avril",
    vfQ: "Le texte mentionne lundi 29 avril.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Où cela se passe-t-il ?",
    text: ["en salle info 4", "à la plage", "à l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le lieu est _________.",
    fill: "en salle info 4",
    vfQ: "Le texte mentionne en salle info 4.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Qui est mentionné ?",
    text: ["M. Garcia", "un voisin", "le facteur"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La personne est _________.",
    fill: "M. Garcia",
    vfQ: "Le texte mentionne M. Garcia.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il faire ?",
    text: ["préparer une présentation", "acheter une voiture", "partir loin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "préparer une présentation",
    vfQ: "Le texte mentionne préparer une présentation.",
    vfC: 0,
  }),
]);
const E3_1_CE_EMAIL_TEXT_17 = `De : Journal

Objet : Article

Bonjour,

Nous préparons une brève nouvelle sur le QCM de biologie.
Le groupe travaille mercredi 15 mai à 10 h, dans l'amphi B. Dr. Martin vérifie les noms.
Consigne : réviser les chapitres 1 à 5.

Journal
Nous avons bien noté votre situation.
Le service est disponible également en ligne.
Pensez à joindre les documents demandés.
Votre dossier sera mis à jour après votre réponse.
Nous vous souhaitons une excellente journée.
Je t'envoie aussi ce détail pour être clair.`;

const E3_1_CE_EMAIL_POOL_17 = buildExpressPool("e3-1-ce-email-17", [
  q({
    id: "cem-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["un e-mail", "une facture", "une recette"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "un e-mail",
    vfQ: "Le texte mentionne un e-mail.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quelle matière est mentionnée ?",
    text: ["le QCM de biologie", "la cuisine", "le dessin libre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La matière est _________.",
    fill: "le QCM de biologie",
    vfQ: "Le texte mentionne le QCM de biologie.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela se passe-t-il ?",
    text: ["mercredi 15 mai à 10 h", "à minuit", "en 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "mercredi 15 mai à 10 h",
    vfQ: "Le texte mentionne mercredi 15 mai à 10 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Où cela se passe-t-il ?",
    text: ["dans l'amphi B", "à la plage", "à l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le lieu est _________.",
    fill: "dans l'amphi B",
    vfQ: "Le texte mentionne dans l'amphi B.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Qui est mentionné ?",
    text: ["Dr. Martin", "un voisin", "le facteur"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La personne est _________.",
    fill: "Dr. Martin",
    vfQ: "Le texte mentionne Dr. Martin.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il faire ?",
    text: ["réviser les chapitres 1 à 5", "acheter une voiture", "partir loin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "réviser les chapitres 1 à 5",
    vfQ: "Le texte mentionne réviser les chapitres 1 à 5.",
    vfC: 0,
  }),
]);
const E3_1_CE_EMAIL_TEXT_18 = `De : Photographe scolaire

Objet : Sortie

Bonjour,

Pour la photo de classe, le rendez-vous est dans le jardin vendredi à 11 h.
La tenue ou préparation doit être simple. Détail : La commande des photos viendra plus tard.
N'oubliez pas cette action : porter un haut clair.

Photographe scolaire
Si une information manque, écrivez-nous rapidement.
Nous avons bien noté votre situation.
Le service est disponible également en ligne.
Pensez à joindre les documents demandés.
Nous restons disponibles pour vous aider.
Les horaires habituels restent les mêmes.`;

const E3_1_CE_EMAIL_POOL_18 = buildExpressPool("e3-1-ce-email-18", [
  q({
    id: "cem-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["un e-mail", "une facture", "une recette"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "un e-mail",
    vfQ: "Le texte mentionne un e-mail.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quelle matière est mentionnée ?",
    text: ["la photo de classe", "la cuisine", "le dessin libre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La matière est _________.",
    fill: "la photo de classe",
    vfQ: "Le texte mentionne la photo de classe.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela se passe-t-il ?",
    text: ["vendredi à 11 h", "à minuit", "en 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "vendredi à 11 h",
    vfQ: "Le texte mentionne vendredi à 11 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Où cela se passe-t-il ?",
    text: ["dans le jardin", "à la plage", "à l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le lieu est _________.",
    fill: "dans le jardin",
    vfQ: "Le texte mentionne dans le jardin.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Qui est mentionné ?",
    text: ["Photographe scolaire", "un voisin", "le facteur"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La personne est _________.",
    fill: "Photographe scolaire",
    vfQ: "Le texte mentionne Photographe scolaire.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il faire ?",
    text: ["porter un haut clair", "acheter une voiture", "partir loin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "porter un haut clair",
    vfQ: "Le texte mentionne porter un haut clair.",
    vfC: 0,
  }),
]);
const E3_1_CE_EMAIL_TEXT_19 = `De : Portail étudiant

Objet : Nouveau devoir

Bonjour,

Une tâche de le certificat de scolarité est disponible.
Il faut la faire avant dès lundi. La ressource se trouve au secrétariat.
Service scolarité corrigera après. Consigne : montrer une pièce d'identité.

Portail
Merci de lire ce message jusqu'à la fin.
Merci de votre attention et de votre patience.
Une confirmation arrivera ensuite.
Le lieu est facile à trouver.
Prenez votre temps pour comprendre le message.`;

const E3_1_CE_EMAIL_POOL_19 = buildExpressPool("e3-1-ce-email-19", [
  q({
    id: "cem-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["un e-mail", "une facture", "une recette"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "un e-mail",
    vfQ: "Le texte mentionne un e-mail.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quelle matière est mentionnée ?",
    text: ["le certificat de scolarité", "la cuisine", "le dessin libre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La matière est _________.",
    fill: "le certificat de scolarité",
    vfQ: "Le texte mentionne le certificat de scolarité.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela se passe-t-il ?",
    text: ["dès lundi", "à minuit", "en 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "dès lundi",
    vfQ: "Le texte mentionne dès lundi.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Où cela se passe-t-il ?",
    text: ["au secrétariat", "à la plage", "à l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le lieu est _________.",
    fill: "au secrétariat",
    vfQ: "Le texte mentionne au secrétariat.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Qui est mentionné ?",
    text: ["Service scolarité", "un voisin", "le facteur"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La personne est _________.",
    fill: "Service scolarité",
    vfQ: "Le texte mentionne Service scolarité.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il faire ?",
    text: ["montrer une pièce d'identité", "acheter une voiture", "partir loin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "montrer une pièce d'identité",
    vfQ: "Le texte mentionne montrer une pièce d'identité.",
    vfC: 0,
  }),
]);
const E3_1_CE_EMAIL_TEXT_20 = `De : Équipe pédagogique

Objet : Journée spéciale

Bonjour,

La journée autour de le thème de l'eau aura lieu vendredi.
Le matin, les groupes passent dans le hall avec Équipe pédagogique.
En fin de journée, consigne : inviter les familles. Détail : Un jus de fruit sera offert.

Équipe pédagogique
Vous pouvez répondre directement à cet e-mail.
Nous traitons votre demande dans les meilleurs délais.
N'hésitez pas à nous indiquer vos disponibilités.
Ce message contient les informations essentielles.
Le personnel peut répondre en français simple.
En cas de changement, un nouvel avis sera publié.`;

const E3_1_CE_EMAIL_POOL_20 = buildExpressPool("e3-1-ce-email-20", [
  q({
    id: "cem-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["un e-mail", "une facture", "une recette"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "un e-mail",
    vfQ: "Le texte mentionne un e-mail.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quelle matière est mentionnée ?",
    text: ["le thème de l'eau", "la cuisine", "le dessin libre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La matière est _________.",
    fill: "le thème de l'eau",
    vfQ: "Le texte mentionne le thème de l'eau.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela se passe-t-il ?",
    text: ["vendredi", "à minuit", "en 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "vendredi",
    vfQ: "Le texte mentionne vendredi.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Où cela se passe-t-il ?",
    text: ["dans le hall", "à la plage", "à l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le lieu est _________.",
    fill: "dans le hall",
    vfQ: "Le texte mentionne dans le hall.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Qui est mentionné ?",
    text: ["Équipe pédagogique", "un voisin", "le facteur"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La personne est _________.",
    fill: "Équipe pédagogique",
    vfQ: "Le texte mentionne Équipe pédagogique.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il faire ?",
    text: ["inviter les familles", "acheter une voiture", "partir loin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "inviter les familles",
    vfQ: "Le texte mentionne inviter les familles.",
    vfC: 0,
  }),
]);

export const E3_1_CE_EMAIL: CommunicationExercise[] = [
  readingPoolExercise({
  id: "e3-1-ce-email-1",
  readingText: E3_1_CE_EMAIL_TEXT_1,
  questionPool: E3_1_CE_EMAIL_POOL_1,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-1-ce-email-2",
  readingText: E3_1_CE_EMAIL_TEXT_2,
  questionPool: E3_1_CE_EMAIL_POOL_2,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-1-ce-email-3",
  readingText: E3_1_CE_EMAIL_TEXT_3,
  questionPool: E3_1_CE_EMAIL_POOL_3,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-1-ce-email-4",
  readingText: E3_1_CE_EMAIL_TEXT_4,
  questionPool: E3_1_CE_EMAIL_POOL_4,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-1-ce-email-5",
  readingText: E3_1_CE_EMAIL_TEXT_5,
  questionPool: E3_1_CE_EMAIL_POOL_5,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-1-ce-email-6",
  readingText: E3_1_CE_EMAIL_TEXT_6,
  questionPool: E3_1_CE_EMAIL_POOL_6,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-1-ce-email-7",
  readingText: E3_1_CE_EMAIL_TEXT_7,
  questionPool: E3_1_CE_EMAIL_POOL_7,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-1-ce-email-8",
  readingText: E3_1_CE_EMAIL_TEXT_8,
  questionPool: E3_1_CE_EMAIL_POOL_8,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-1-ce-email-9",
  readingText: E3_1_CE_EMAIL_TEXT_9,
  questionPool: E3_1_CE_EMAIL_POOL_9,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-1-ce-email-10",
  readingText: E3_1_CE_EMAIL_TEXT_10,
  questionPool: E3_1_CE_EMAIL_POOL_10,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-1-ce-email-11",
  readingText: E3_1_CE_EMAIL_TEXT_11,
  questionPool: E3_1_CE_EMAIL_POOL_11,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-1-ce-email-12",
  readingText: E3_1_CE_EMAIL_TEXT_12,
  questionPool: E3_1_CE_EMAIL_POOL_12,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-1-ce-email-13",
  readingText: E3_1_CE_EMAIL_TEXT_13,
  questionPool: E3_1_CE_EMAIL_POOL_13,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-1-ce-email-14",
  readingText: E3_1_CE_EMAIL_TEXT_14,
  questionPool: E3_1_CE_EMAIL_POOL_14,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-1-ce-email-15",
  readingText: E3_1_CE_EMAIL_TEXT_15,
  questionPool: E3_1_CE_EMAIL_POOL_15,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-1-ce-email-16",
  readingText: E3_1_CE_EMAIL_TEXT_16,
  questionPool: E3_1_CE_EMAIL_POOL_16,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-1-ce-email-17",
  readingText: E3_1_CE_EMAIL_TEXT_17,
  questionPool: E3_1_CE_EMAIL_POOL_17,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-1-ce-email-18",
  readingText: E3_1_CE_EMAIL_TEXT_18,
  questionPool: E3_1_CE_EMAIL_POOL_18,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-1-ce-email-19",
  readingText: E3_1_CE_EMAIL_TEXT_19,
  questionPool: E3_1_CE_EMAIL_POOL_19,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-1-ce-email-20",
  readingText: E3_1_CE_EMAIL_TEXT_20,
  questionPool: E3_1_CE_EMAIL_POOL_20,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
];

export const E3_1_PE_EMAIL: ExpressPePrompt[] = [
  {
    id: "e3-1-pee-1",
    title: "Cours à la famille",
    situation: "",
    sourceMessage: {
      from: "Famille",
      subject: "Des nouvelles",
      body: `Bonjour,
Nous pensons à toi. Comment se passent tes cours dans ta nouvelle université ?
Bises`,
    },
    instruction: "Répondez à votre famille pour parler de vos cours, de vos horaires et de votre professeur.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-1-pee-2",
    title: "Cours de français",
    situation: "",
    sourceMessage: {
      from: "Université",
      subject: "Cours de français pour étudiants",
      body: `Bonjour,
Notre université proposé des cours de français pour les étudiants internationaux. Les inscriptions ouvrent cette semaine.
Merci de répondre en indiquant demander les horaires, le niveau et l'inscription.
Cordialement`,
    },
    instruction: "Répondez à Université pour demander les horaires, le niveau et l'inscription.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-1-pee-3",
    title: "Premier jour",
    situation: "",
    sourceMessage: {
      from: "Lina",
      subject: "Premier jour ?",
      body: `Salut,
Alors, comment etait ton premier jour de cours de français ?
Lina`,
    },
    instruction: "Répondez à votre ami en racontant votre premier jour à l'école de langues. Parlez de la salle, du professeur et des autres étudiants.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-1-pee-4",
    title: "Emploi du temps",
    situation: "",
    sourceMessage: {
      from: "Secrétariat langues",
      subject: "Choix des horaires",
      body: `Bonjour,
Merci de nous envoyer vos disponibilités pour choisir un cours adapte.
Cordialement`,
    },
    instruction: "Répondez au secrétariat en demandant votre emploi du temps. Précisez votre niveau, vos disponibilités et le type de cours souhaité.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-1-pee-5",
    title: "Absence",
    situation: "",
    sourceMessage: {
      from: "Professeur",
      subject: "Cours de demain",
      body: `Bonjour,
Demain, nous travaillons le vocabulaire de l'école et les horaires.
Merci de répondre avec votre question sur les devoirs et votre date de retour.
Cordialement`,
    },
    instruction: "Répondez au professeur pour expliquer votre absence au cours. Demandez les devoirs et dites quand vous revenez.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-1-pee-6",
    title: "Bibliothèque",
    situation: "",
    sourceMessage: {
      from: "Camarade",
      subject: "Bibliothèque",
      body: `Salut,
Je ne connais pas encore le campus. Ou est la bibliothèque ?
Merci`,
    },
    instruction: "Répondez à un camarade qui cherche la bibliothèque. Expliquez ou elle est, quand elle ouvre et ce qu'on peut y faire.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-1-pee-7",
    title: "Groupe de travail",
    situation: "",
    sourceMessage: {
      from: "Camarades A1",
      subject: "Revision",
      body: `Bonjour,
L'examen approche et plusieurs personnes veulent reviser ensemble.
Merci de répondre en indiquant un lieu, un jour et un objectif simple.
A bientot`,
    },
    instruction: "Répondez à Camarades A1 pour proposer un groupe de travail. Donnez un lieu, un jour et un objectif simple.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-1-pee-8",
    title: "Changement de niveau",
    situation: "",
    sourceMessage: {
      from: "Responsable pedagogique",
      subject: "Suivi des niveaux",
      body: `Bonjour,
Si votre niveau ne correspond pas au cours, vous pouvez nous écrire cette semaine.
Cordialement`,
    },
    instruction: "Répondez à Responsable pédagogique pour expliquer que le cours est trop difficile ou trop facile. Demandez conseil avec politesse.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-1-pee-9",
    title: "Materiel",
    situation: "",
    sourceMessage: {
      from: "Professeur",
      subject: "Materiel de cours",
      body: `Bonjour,
Pour lundi, merci d'apporter un cahier, un stylo et le livre A1 si vous l'avez.
Cordialement`,
    },
    instruction: "Répondez au professeur en indiquant le matériel que vous avez et ce qu'il vous manque pour le cours.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-1-pee-10",
    title: "Cours en ligne",
    situation: "",
    sourceMessage: {
      from: "Formation en ligne",
      subject: "Cours A1 à distance",
      body: `Bonjour,
Nos cours A1 à distance commencent le mois prochain. Les places sont limitées.
Merci de répondre avec vos questions sur les horaires et la plateforme.
Cordialement`,
    },
    instruction: "Répondez au service de formation en demandant des informations sur un cours de français en ligne. Posez des questions sur les horaires et la plateforme.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-1-pee-11",
    title: "Examen",
    situation: "",
    sourceMessage: {
      from: "Maman",
      subject: "Bon courage",
      body: `Bonjour,
Tu m'as dit que tu as un examen bientot. Qu'est-ce que tu dois reviser ?
Maman`,
    },
    instruction: "Répondez à Maman pour parler d'un petit examen de français. Dites ce que vous revisez et comment vous vous sentez.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-1-pee-12",
    title: "Campus",
    situation: "",
    sourceMessage: {
      from: "Cousin",
      subject: "Ton université",
      body: `Salut,
Ton université est grande ? Decris-moi un peu le campus.
A plus`,
    },
    instruction: "Répondez à votre cousin en décrivant votre campus. Parlez des batiments importants, de la caféteria et du lieu de vos cours.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-1-pee-13",
    title: "Inscription tardive",
    situation: "",
    sourceMessage: {
      from: "Secrétariat",
      subject: "Inscriptions presque closes",
      body: `Bonjour,
Les inscriptions au cours débutant ferment vendredi. Quelques places restent disponibles.
Merci de répondre en indiquant votre situation en phrases simples.
Cordialement`,
    },
    instruction: "Répondez au secrétariat pour demander si vous pouvez encore vous inscrire au cours de français débutant. Présentez votre situation en phrases simples.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-1-pee-14",
    title: "Activité en classe",
    situation: "",
    sourceMessage: {
      from: "Amie",
      subject: "Cours aujourd'hui",
      body: `Salut,
Vous avez fait quoi aujourd'hui en classe de français ?
Bisous`,
    },
    instruction: "Répondez à votre amie en racontant une activité faite en classe. Expliquez ce que vous avez fait et ce que vous avez appris.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-1-pee-15",
    title: "Devoirs",
    situation: "",
    sourceMessage: {
      from: "Camarade",
      subject: "Après le cours",
      body: `Salut,
Je suis parti vite après le cours. Tu as besoin d'une information ?
A plus`,
    },
    instruction: "Répondez à Camarade pour demander les devoirs du soir. Expliquez que vous avez oublie de les noter et remerciez-le.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-1-pee-16",
    title: "Professeur",
    situation: "",
    sourceMessage: {
      from: "Famille",
      subject: "Ton professeur",
      body: `Bonjour,
Comment est ton professeur de français ? Il est sympathique ?
Bises`,
    },
    instruction: "Répondez à votre famille en présentant votre professeur de français. Donnez son nom, sa façon d'enseigner et une chose que vous aimez.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-1-pee-17",
    title: "Demande de certificat",
    situation: "",
    sourceMessage: {
      from: "Secrétariat",
      subject: "Documents administratifs",
      body: `Bonjour,
Pour toute demande de document, merci d'envoyer un e-mail avec les informations du cours.
Cordialement`,
    },
    instruction: "Répondez au secrétariat pour demander une attestation de participation au cours. Donnez votre nom, votre cours et la date souhaitée.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-1-pee-18",
    title: "Projet de classe",
    situation: "",
    sourceMessage: {
      from: "Groupe projet",
      subject: "Présentation vendredi",
      body: `Bonjour,
Nous devons choisir un sujet pour notre présentation de vendredi.
Merci de répondre en indiquant le sujet et ce que chaque personne peut faire.
A bientot`,
    },
    instruction: "Répondez à votre groupe pour proposer une idée de présentation en français. Expliquez le sujet et ce que chaque personne peut faire.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-1-pee-19",
    title: "Nouvelle université",
    situation: "",
    sourceMessage: {
      from: "Ami",
      subject: "Nouvelles de l'université",
      body: `Salut,
Tu as commence dans ta nouvelle université ? Raconte-moi.
Ami`,
    },
    instruction: "Répondez à votre ami pour raconter votre installation dans une nouvelle université. Parlez des cours, des étudiants et de votre routine.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-1-pee-20",
    title: "Question au professeur",
    situation: "",
    sourceMessage: {
      from: "Professeur",
      subject: "Prochain cours",
      body: `Bonjour,
Le prochain cours aura lieu cette semaine. Vérifiez bien les informations pratiques.
Merci de répondre avec vos questions sur l'heure, la salle et le travail à préparer.
Cordialement`,
    },
    instruction: "Répondez au professeur pour poser une question sur le prochain cours. Demandez l'heure, la salle et le travail à préparer.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },

];

/* ════════════════════════════════════════════════════════════════════════════
   E3.2 — Décrire son quotidien
   ════════════════════════════════════════════════════════════════════════════ */

const E3_2_CE_EMAIL_TEXT_1 = `De : ma mère

Objet : les courses

Bonjour,

le budget est de 45 francs. Le rendez-vous est à 17 h, à la Migros du centre.
Consigne : venir à pied.

Merci de confirmer la bonne réception de ce message.
Vous pouvez répondre directement à cet e-mail.
Nous traitons votre demande dans les meilleurs délais.
N'hésitez pas à nous indiquer vos disponibilités.
Ce message contient les informations essentielles.
À très bientôt, prends soin de toi.
Cordialement,
ma mère`;

const E3_2_CE_EMAIL_POOL_1 = buildExpressPool("e3-2-ce-email-1", [
  q({
    id: "cem-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["un SMS", "une facture", "une recette"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "un SMS",
    vfQ: "Le texte mentionne un SMS.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quelle activité est mentionnée ?",
    text: ["les courses", "un examen", "dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité est _________.",
    fill: "les courses",
    vfQ: "Le texte mentionne les courses.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela se passe-t-il ?",
    text: ["à 17 h", "à minuit", "en 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "à 17 h",
    vfQ: "Le texte mentionne à 17 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Où cela se passe-t-il ?",
    text: ["à la Migros du centre", "à la plage", "à l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le lieu est _________.",
    fill: "à la Migros du centre",
    vfQ: "Le texte mentionne à la Migros du centre.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Qui est mentionné ?",
    text: ["ma mère", "un voisin", "le facteur"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La personne est _________.",
    fill: "ma mère",
    vfQ: "Le texte mentionne ma mère.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel transport est mentionné ?",
    text: ["venir à pied", "l'avion", "le bateau"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le transport est _________.",
    fill: "venir à pied",
    vfQ: "Le texte mentionne venir à pied.",
    vfC: 0,
  }),
]);
const E3_2_CE_EMAIL_TEXT_2 = `De : Secrétariat

Objet : Information

Bonjour,

Nous confirmons un rendez-vous médical à 10 h 30.
le médecin accueillera le groupe au cabinet du Dr Martin. Action demandée : prendre le bus 5.

Pensez à joindre les documents demandés.
Votre dossier sera mis à jour après votre réponse.
Nous vous souhaitons une excellente journée.
Merci encore pour votre confiance.
Voici quelques détails utiles pour la suite.
Le service est également disponible en ligne.
Le secrétariat`;

const E3_2_CE_EMAIL_POOL_2 = buildExpressPool("e3-2-ce-email-2", [
  q({
    id: "cem-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["un agenda", "une facture", "une recette"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "un agenda",
    vfQ: "Le texte mentionne un agenda.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quelle activité est mentionnée ?",
    text: ["un rendez-vous médical", "un examen", "dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité est _________.",
    fill: "un rendez-vous médical",
    vfQ: "Le texte mentionne un rendez-vous médical.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela se passe-t-il ?",
    text: ["à 10 h 30", "à minuit", "en 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "à 10 h 30",
    vfQ: "Le texte mentionne à 10 h 30.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Où cela se passe-t-il ?",
    text: ["au cabinet du Dr Martin", "à la plage", "à l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le lieu est _________.",
    fill: "au cabinet du Dr Martin",
    vfQ: "Le texte mentionne au cabinet du Dr Martin.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Qui est mentionné ?",
    text: ["le médecin", "un voisin", "le facteur"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La personne est _________.",
    fill: "le médecin",
    vfQ: "Le texte mentionne le médecin.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel transport est mentionné ?",
    text: ["prendre le bus 5", "l'avion", "le bateau"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le transport est _________.",
    fill: "prendre le bus 5",
    vfQ: "Le texte mentionne prendre le bus 5.",
    vfC: 0,
  }),
]);
const E3_2_CE_EMAIL_TEXT_3 = `De : Portail

Objet : À faire

Bonjour,

Une nouvelle consigne est disponible pour un déjeuner.
Ouvrez-la avant à 12 h 30; elle concerne au restaurant Le Lac.
mes parents demande cette action : venir en voiture. Détail : la table est près de la fenêtre.

Message automatique
Une confirmation sera envoyée ensuite.
Le lieu est facile à trouver avec les indications.
Merci encore, et à bientôt.
Tout est organisé pour que ce soit simple.
Le contact est indiqué dans le message.
N'oubliez pas de vérifier la date.`;

const E3_2_CE_EMAIL_POOL_3 = buildExpressPool("e3-2-ce-email-3", [
  q({
    id: "cem-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["un WhatsApp", "une facture", "une recette"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "un WhatsApp",
    vfQ: "Le texte mentionne un WhatsApp.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quelle activité est mentionnée ?",
    text: ["un déjeuner", "un examen", "dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité est _________.",
    fill: "un déjeuner",
    vfQ: "Le texte mentionne un déjeuner.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela se passe-t-il ?",
    text: ["à 12 h 30", "à minuit", "en 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "à 12 h 30",
    vfQ: "Le texte mentionne à 12 h 30.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Où cela se passe-t-il ?",
    text: ["au restaurant Le Lac", "à la plage", "à l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le lieu est _________.",
    fill: "au restaurant Le Lac",
    vfQ: "Le texte mentionne au restaurant Le Lac.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Qui est mentionné ?",
    text: ["mes parents", "un voisin", "le facteur"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La personne est _________.",
    fill: "mes parents",
    vfQ: "Le texte mentionne mes parents.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel transport est mentionné ?",
    text: ["venir en voiture", "l'avion", "le bateau"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le transport est _________.",
    fill: "venir en voiture",
    vfQ: "Le texte mentionne venir en voiture.",
    vfC: 0,
  }),
]);
const E3_2_CE_EMAIL_TEXT_4 = `De : Tom

Objet : Rappel

Bonjour à tous,

Je confirme le sport. Le moment est à 19 h, chez FitPlus.
Venez calmement. Action à prévoir : venir à vélo.
le badge est dans la poche.

Les informations importantes sont déjà notées plus haut.
Merci de votre attention et de votre patience.
Une confirmation arrivera ensuite.
Le lieu est facile à trouver.
Le service est également disponible en ligne.
À bientôt`;

const E3_2_CE_EMAIL_POOL_4 = buildExpressPool("e3-2-ce-email-4", [
  q({
    id: "cem-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["une note", "une facture", "une recette"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "une note",
    vfQ: "Le texte mentionne une note.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quelle activité est mentionnée ?",
    text: ["le sport", "un examen", "dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité est _________.",
    fill: "le sport",
    vfQ: "Le texte mentionne le sport.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela se passe-t-il ?",
    text: ["à 19 h", "à minuit", "en 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "à 19 h",
    vfQ: "Le texte mentionne à 19 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Où cela se passe-t-il ?",
    text: ["chez FitPlus", "à la plage", "à l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le lieu est _________.",
    fill: "chez FitPlus",
    vfQ: "Le texte mentionne chez FitPlus.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Qui est mentionné ?",
    text: ["Tom", "un voisin", "le facteur"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La personne est _________.",
    fill: "Tom",
    vfQ: "Le texte mentionne Tom.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel transport est mentionné ?",
    text: ["venir à vélo", "l'avion", "le bateau"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le transport est _________.",
    fill: "venir à vélo",
    vfQ: "Le texte mentionne venir à vélo.",
    vfC: 0,
  }),
]);
const E3_2_CE_EMAIL_TEXT_5 = `De : Vie scolaire

Objet : Organisation

Bonjour,

Pour un retrait, l'entrée se fait autrement.
le conseiller attend à la banque UBS à 14 h.
Une seule consigne : venir à pied. Détail : le retrait prévu est de 200 francs.

Vie scolaire
Ce message contient les informations essentielles.
Nous vous remercions de votre compréhension.
Pour toute urgence, appelez-nous pendant les heures d'ouverture.
Conservez ce message pour vos dossiers.
Une confirmation vous sera envoyée ensuite.
Le service est également disponible en ligne.`;

const E3_2_CE_EMAIL_POOL_5 = buildExpressPool("e3-2-ce-email-5", [
  q({
    id: "cem-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["une notification", "une facture", "une recette"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "une notification",
    vfQ: "Le texte mentionne une notification.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quelle activité est mentionnée ?",
    text: ["un retrait", "un examen", "dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité est _________.",
    fill: "un retrait",
    vfQ: "Le texte mentionne un retrait.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela se passe-t-il ?",
    text: ["à 14 h", "à minuit", "en 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "à 14 h",
    vfQ: "Le texte mentionne à 14 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Où cela se passe-t-il ?",
    text: ["à la banque UBS", "à la plage", "à l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le lieu est _________.",
    fill: "à la banque UBS",
    vfQ: "Le texte mentionne à la banque UBS.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Qui est mentionné ?",
    text: ["le conseiller", "un voisin", "le facteur"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La personne est _________.",
    fill: "le conseiller",
    vfQ: "Le texte mentionne le conseiller.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel transport est mentionné ?",
    text: ["venir à pied", "l'avion", "le bateau"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le transport est _________.",
    fill: "venir à pied",
    vfQ: "Le texte mentionne venir à pied.",
    vfC: 0,
  }),
]);
const E3_2_CE_EMAIL_TEXT_6 = `De : Bibliothèque

Objet : Document prêt

Bonjour,

Le document ou dossier pour une coupe de cheveux est prêt.
Vous pouvez le demander à 16 h, au salon Élégance. Clara connaît votre nom.
Action à prévoir : prendre le tram 12.

Si tu veux, on peut faire une liste ensemble.
Le budget reste simple et raisonnable.
On pourra aussi inviter une autre personne.
Je reste à votre disposition pour toute précision.
Merci de confirmer la bonne réception de ce message.
N'hésite pas à me répondre quand tu peux.
Merci`;

const E3_2_CE_EMAIL_POOL_6 = buildExpressPool("e3-2-ce-email-6", [
  q({
    id: "cem-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["un message", "une facture", "une recette"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "un message",
    vfQ: "Le texte mentionne un message.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quelle activité est mentionnée ?",
    text: ["une coupe de cheveux", "un examen", "dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité est _________.",
    fill: "une coupe de cheveux",
    vfQ: "Le texte mentionne une coupe de cheveux.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela se passe-t-il ?",
    text: ["à 16 h", "à minuit", "en 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "à 16 h",
    vfQ: "Le texte mentionne à 16 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Où cela se passe-t-il ?",
    text: ["au salon Élégance", "à la plage", "à l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le lieu est _________.",
    fill: "au salon Élégance",
    vfQ: "Le texte mentionne au salon Élégance.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Qui est mentionné ?",
    text: ["Clara", "un voisin", "le facteur"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La personne est _________.",
    fill: "Clara",
    vfQ: "Le texte mentionne Clara.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel transport est mentionné ?",
    text: ["prendre le tram 12", "l'avion", "le bateau"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le transport est _________.",
    fill: "prendre le tram 12",
    vfQ: "Le texte mentionne prendre le tram 12.",
    vfC: 0,
  }),
]);
const E3_2_CE_EMAIL_TEXT_7 = `De : Association

Objet : Invitation

Bonjour,

Les familles ou amis sont invités pour acheter du pain et des fruits à 18 h.
Les informations seront visibles à la Coop du quartier. ma sœur commencera l'accueil.
Consigne : venir à pied.

Association
Les informations importantes sont déjà notées plus haut.
Bonne journée à toutes et à tous.
Merci de votre attention et de votre patience.
Une confirmation arrivera ensuite.
Le lieu est facile à trouver.
Prenez votre temps pour comprendre le message.`;

const E3_2_CE_EMAIL_POOL_7 = buildExpressPool("e3-2-ce-email-7", [
  q({
    id: "cem-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["une liste", "une facture", "une recette"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "une liste",
    vfQ: "Le texte mentionne une liste.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quelle activité est mentionnée ?",
    text: ["acheter du pain et des fruits", "un examen", "dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité est _________.",
    fill: "acheter du pain et des fruits",
    vfQ: "Le texte mentionne acheter du pain et des fruits.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela se passe-t-il ?",
    text: ["à 18 h", "à minuit", "en 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "à 18 h",
    vfQ: "Le texte mentionne à 18 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Où cela se passe-t-il ?",
    text: ["à la Coop du quartier", "à la plage", "à l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le lieu est _________.",
    fill: "à la Coop du quartier",
    vfQ: "Le texte mentionne à la Coop du quartier.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Qui est mentionné ?",
    text: ["ma sœur", "un voisin", "le facteur"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La personne est _________.",
    fill: "ma sœur",
    vfQ: "Le texte mentionne ma sœur.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel transport est mentionné ?",
    text: ["venir à pied", "l'avion", "le bateau"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le transport est _________.",
    fill: "venir à pied",
    vfQ: "Le texte mentionne venir à pied.",
    vfC: 0,
  }),
]);
const E3_2_CE_EMAIL_TEXT_8 = `De : Application

Objet : Notification

Bonjour,

Une modification concerne un contrôle dentaire.
Le rendez-vous est au cabinet dentaire à 9 h. la dentiste ajoute : Détail : le contrôle est couvert.
Action demandée : prendre le bus.

Application
Nous avons bien noté votre situation.
Le service est disponible également en ligne.
Pensez à joindre les documents demandés.
Votre dossier sera mis à jour après votre réponse.
Nous vous souhaitons une excellente journée.
Conservez le numéro de contact indiqué.`;

const E3_2_CE_EMAIL_POOL_8 = buildExpressPool("e3-2-ce-email-8", [
  q({
    id: "cem-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["un SMS", "une facture", "une recette"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "un SMS",
    vfQ: "Le texte mentionne un SMS.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quelle activité est mentionnée ?",
    text: ["un contrôle dentaire", "un examen", "dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité est _________.",
    fill: "un contrôle dentaire",
    vfQ: "Le texte mentionne un contrôle dentaire.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela se passe-t-il ?",
    text: ["à 9 h", "à minuit", "en 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "à 9 h",
    vfQ: "Le texte mentionne à 9 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Où cela se passe-t-il ?",
    text: ["au cabinet dentaire", "à la plage", "à l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le lieu est _________.",
    fill: "au cabinet dentaire",
    vfQ: "Le texte mentionne au cabinet dentaire.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Qui est mentionné ?",
    text: ["la dentiste", "un voisin", "le facteur"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La personne est _________.",
    fill: "la dentiste",
    vfQ: "Le texte mentionne la dentiste.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel transport est mentionné ?",
    text: ["prendre le bus", "l'avion", "le bateau"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le transport est _________.",
    fill: "prendre le bus",
    vfQ: "Le texte mentionne prendre le bus.",
    vfC: 0,
  }),
]);
const E3_2_CE_EMAIL_TEXT_9 = `De : Service des examens

Objet : Convocation

Bonjour,

Votre rendez-vous pour le cinéma est confirmé mercredi à 20 h.
L'entrée se fait au cinéma ABC; Léa et Marc vérifie la salle.
Avant le début, consigne : prendre le métro.

Service des examens
Lisez bien jusqu'à la fin, s'il vous plaît.
Vous pouvez demander de l'aide si besoin.
Les informations importantes sont déjà notées plus haut.
Respectez la file d'attente, s'il vous plaît.
Les personnes à mobilité réduite sont prioritaires.
Merci de votre attention et de votre patience.
Une confirmation arrivera ensuite.`;

const E3_2_CE_EMAIL_POOL_9 = buildExpressPool("e3-2-ce-email-9", [
  q({
    id: "cem-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["un planning", "une facture", "une recette"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "un planning",
    vfQ: "Le texte mentionne un planning.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quelle activité est mentionnée ?",
    text: ["le cinéma", "un examen", "dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité est _________.",
    fill: "le cinéma",
    vfQ: "Le texte mentionne le cinéma.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela se passe-t-il ?",
    text: ["mercredi à 20 h", "à minuit", "en 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "mercredi à 20 h",
    vfQ: "Le texte mentionne mercredi à 20 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Où cela se passe-t-il ?",
    text: ["au cinéma ABC", "à la plage", "à l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le lieu est _________.",
    fill: "au cinéma ABC",
    vfQ: "Le texte mentionne au cinéma ABC.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Qui est mentionné ?",
    text: ["Léa et Marc", "un voisin", "le facteur"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La personne est _________.",
    fill: "Léa et Marc",
    vfQ: "Le texte mentionne Léa et Marc.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel transport est mentionné ?",
    text: ["prendre le métro", "l'avion", "le bateau"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le transport est _________.",
    fill: "prendre le métro",
    vfQ: "Le texte mentionne prendre le métro.",
    vfC: 0,
  }),
]);
const E3_2_CE_EMAIL_TEXT_10 = `De : Laboratoire

Objet : Sécurité

Bonjour,

Pour chercher des médicaments, attendez mon fils.
Le groupe arrive à la pharmacie du centre à 11 h. Détail : l'ordonnance est prête.
Consigne : venir à pied.

Responsable
Les ascenseurs se trouvent à gauche de l'entrée.
Je reste à votre disposition pour toute précision.
Nous vous souhaitons une excellente journée.
Merci de confirmer la bonne réception de ce message.
Vous pouvez répondre directement à cet e-mail.
Nous traitons votre demande dans les meilleurs délais.`;

const E3_2_CE_EMAIL_POOL_10 = buildExpressPool("e3-2-ce-email-10", [
  q({
    id: "cem-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["un message", "une facture", "une recette"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "un message",
    vfQ: "Le texte mentionne un message.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quelle activité est mentionnée ?",
    text: ["chercher des médicaments", "un examen", "dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité est _________.",
    fill: "chercher des médicaments",
    vfQ: "Le texte mentionne chercher des médicaments.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela se passe-t-il ?",
    text: ["à 11 h", "à minuit", "en 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "à 11 h",
    vfQ: "Le texte mentionne à 11 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Où cela se passe-t-il ?",
    text: ["à la pharmacie du centre", "à la plage", "à l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le lieu est _________.",
    fill: "à la pharmacie du centre",
    vfQ: "Le texte mentionne à la pharmacie du centre.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Qui est mentionné ?",
    text: ["mon fils", "un voisin", "le facteur"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La personne est _________.",
    fill: "mon fils",
    vfQ: "Le texte mentionne mon fils.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel transport est mentionné ?",
    text: ["venir à pied", "l'avion", "le bateau"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le transport est _________.",
    fill: "venir à pied",
    vfQ: "Le texte mentionne venir à pied.",
    vfC: 0,
  }),
]);
const E3_2_CE_EMAIL_TEXT_11 = `De : Surveillance

Objet : Pause

Bonjour,

Hugo accompagne les personnes au club de tennis.
Après la pause, un match de tennis reprend à 15 h.
Pendant l'attente, action calme : venir en voiture.

Lisez bien jusqu'à la fin, s'il vous plaît.
Vous pouvez demander de l'aide si besoin.
Les informations importantes sont déjà notées plus haut.
Merci de votre attention et de votre patience.
Une confirmation arrivera ensuite.
Vous pouvez venir accompagné(e) si vous le souhaitez.
Bonne journée`;

const E3_2_CE_EMAIL_POOL_11 = buildExpressPool("e3-2-ce-email-11", [
  q({
    id: "cem-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["un WhatsApp", "une facture", "une recette"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "un WhatsApp",
    vfQ: "Le texte mentionne un WhatsApp.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quelle activité est mentionnée ?",
    text: ["un match de tennis", "un examen", "dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité est _________.",
    fill: "un match de tennis",
    vfQ: "Le texte mentionne un match de tennis.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela se passe-t-il ?",
    text: ["à 15 h", "à minuit", "en 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "à 15 h",
    vfQ: "Le texte mentionne à 15 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Où cela se passe-t-il ?",
    text: ["au club de tennis", "à la plage", "à l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le lieu est _________.",
    fill: "au club de tennis",
    vfQ: "Le texte mentionne au club de tennis.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Qui est mentionné ?",
    text: ["Hugo", "un voisin", "le facteur"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La personne est _________.",
    fill: "Hugo",
    vfQ: "Le texte mentionne Hugo.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel transport est mentionné ?",
    text: ["venir en voiture", "l'avion", "le bateau"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le transport est _________.",
    fill: "venir en voiture",
    vfQ: "Le texte mentionne venir en voiture.",
    vfC: 0,
  }),
]);
const E3_2_CE_EMAIL_TEXT_12 = `De : Club

Objet : Inscription

Bonjour,

Le club aide pour un cours de cuisine. Prochaine séance : à 18 h 30.
Elle a lieu à l'école culinaire avec un groupe de huit.
Pour participer, action simple : prendre le bus 3. Détail : il faut un tablier.

Club
Une question ? Écrivez ou téléphonez.
Merci encore, et à bientôt.
Tout est organisé pour que ce soit simple.
Le contact est indiqué dans le message.`;

const E3_2_CE_EMAIL_POOL_12 = buildExpressPool("e3-2-ce-email-12", [
  q({
    id: "cem-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["une note", "une facture", "une recette"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "une note",
    vfQ: "Le texte mentionne une note.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quelle activité est mentionnée ?",
    text: ["un cours de cuisine", "un examen", "dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité est _________.",
    fill: "un cours de cuisine",
    vfQ: "Le texte mentionne un cours de cuisine.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela se passe-t-il ?",
    text: ["à 18 h 30", "à minuit", "en 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "à 18 h 30",
    vfQ: "Le texte mentionne à 18 h 30.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Où cela se passe-t-il ?",
    text: ["à l'école culinaire", "à la plage", "à l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le lieu est _________.",
    fill: "à l'école culinaire",
    vfQ: "Le texte mentionne à l'école culinaire.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Qui est mentionné ?",
    text: ["un groupe de huit", "un voisin", "le facteur"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La personne est _________.",
    fill: "un groupe de huit",
    vfQ: "Le texte mentionne un groupe de huit.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel transport est mentionné ?",
    text: ["prendre le bus 3", "l'avion", "le bateau"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le transport est _________.",
    fill: "prendre le bus 3",
    vfQ: "Le texte mentionne prendre le bus 3.",
    vfC: 0,
  }),
]);
const E3_2_CE_EMAIL_TEXT_13 = `De : Nora

Objet : Travail

Bonjour,

Je rappelle le travail ou rendez-vous de rendre des livres.
Il est prévu à 17 h 30, à la bibliothèque municipale.
Avant la séance, consigne : venir à vélo. Détail : aucune amende aujourd'hui.

Nora
Gardez ce texte pour vous en souvenir.
Les horaires habituels restent les mêmes.
Une question ? Écrivez ou téléphonez.
Merci encore, et à bientôt.
Tout est organisé pour que ce soit simple.`;

const E3_2_CE_EMAIL_POOL_13 = buildExpressPool("e3-2-ce-email-13", [
  q({
    id: "cem-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["un SMS", "une facture", "une recette"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "un SMS",
    vfQ: "Le texte mentionne un SMS.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quelle activité est mentionnée ?",
    text: ["rendre des livres", "un examen", "dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité est _________.",
    fill: "rendre des livres",
    vfQ: "Le texte mentionne rendre des livres.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela se passe-t-il ?",
    text: ["à 17 h 30", "à minuit", "en 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "à 17 h 30",
    vfQ: "Le texte mentionne à 17 h 30.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Où cela se passe-t-il ?",
    text: ["à la bibliothèque municipale", "à la plage", "à l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le lieu est _________.",
    fill: "à la bibliothèque municipale",
    vfQ: "Le texte mentionne à la bibliothèque municipale.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Qui est mentionné ?",
    text: ["Nora", "un voisin", "le facteur"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La personne est _________.",
    fill: "Nora",
    vfQ: "Le texte mentionne Nora.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel transport est mentionné ?",
    text: ["venir à vélo", "l'avion", "le bateau"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le transport est _________.",
    fill: "venir à vélo",
    vfQ: "Le texte mentionne venir à vélo.",
    vfC: 0,
  }),
]);
const E3_2_CE_EMAIL_TEXT_14 = `De : Direction

Objet : Changement

Bonjour,

le marché change d'organisation. ma grand-mère accompagne le groupe place du Marché samedi à 8 h.
La consigne pour tous : prendre le tram.
prendre un sac réutilisable.

Direction
Je reste à votre disposition pour toute précision.
Le service est également disponible en ligne.
Merci de confirmer la bonne réception de ce message.
Vous pouvez répondre directement à cet e-mail.
Nous traitons votre demande dans les meilleurs délais.
N'hésitez pas à nous indiquer vos disponibilités.`;

const E3_2_CE_EMAIL_POOL_14 = buildExpressPool("e3-2-ce-email-14", [
  q({
    id: "cem-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["un mémo", "une facture", "une recette"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "un mémo",
    vfQ: "Le texte mentionne un mémo.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quelle activité est mentionnée ?",
    text: ["le marché", "un examen", "dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité est _________.",
    fill: "le marché",
    vfQ: "Le texte mentionne le marché.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela se passe-t-il ?",
    text: ["samedi à 8 h", "à minuit", "en 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "samedi à 8 h",
    vfQ: "Le texte mentionne samedi à 8 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Où cela se passe-t-il ?",
    text: ["place du Marché", "à la plage", "à l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le lieu est _________.",
    fill: "place du Marché",
    vfQ: "Le texte mentionne place du Marché.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Qui est mentionné ?",
    text: ["ma grand-mère", "un voisin", "le facteur"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La personne est _________.",
    fill: "ma grand-mère",
    vfQ: "Le texte mentionne ma grand-mère.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel transport est mentionné ?",
    text: ["prendre le tram", "l'avion", "le bateau"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le transport est _________.",
    fill: "prendre le tram",
    vfQ: "Le texte mentionne prendre le tram.",
    vfC: 0,
  }),
]);
const E3_2_CE_EMAIL_TEXT_15 = `De : Forum

Objet : Groupe

Bonjour,

Un groupe se forme pour une balade à vélo.
La rencontre est à 10 h, au bord du lac. Emma organise les rôles.
Si vous venez, pensez à venir à vélo.

Forum
Voici quelques détails utiles pour la suite.
Lisez bien jusqu'à la fin, s'il vous plaît.
Vous pouvez demander de l'aide si besoin.
Les informations importantes sont déjà notées plus haut.
Vous pouvez venir accompagné(e) si vous le souhaitez.
Merci de votre attention et de votre patience.`;

const E3_2_CE_EMAIL_POOL_15 = buildExpressPool("e3-2-ce-email-15", [
  q({
    id: "cem-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["un message", "une facture", "une recette"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "un message",
    vfQ: "Le texte mentionne un message.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quelle activité est mentionnée ?",
    text: ["une balade à vélo", "un examen", "dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité est _________.",
    fill: "une balade à vélo",
    vfQ: "Le texte mentionne une balade à vélo.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela se passe-t-il ?",
    text: ["à 10 h", "à minuit", "en 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "à 10 h",
    vfQ: "Le texte mentionne à 10 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Où cela se passe-t-il ?",
    text: ["au bord du lac", "à la plage", "à l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le lieu est _________.",
    fill: "au bord du lac",
    vfQ: "Le texte mentionne au bord du lac.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Qui est mentionné ?",
    text: ["Emma", "un voisin", "le facteur"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La personne est _________.",
    fill: "Emma",
    vfQ: "Le texte mentionne Emma.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel transport est mentionné ?",
    text: ["venir à vélo", "l'avion", "le bateau"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le transport est _________.",
    fill: "venir à vélo",
    vfQ: "Le texte mentionne venir à vélo.",
    vfC: 0,
  }),
]);
const E3_2_CE_EMAIL_TEXT_16 = `De : Tutorats

Objet : Révision

Bonjour,

La préparation de appeler la banque commence à 14 h.
Elle se passe depuis la maison. Mme Keller répond aux questions.
Ensuite, action finale : aucun transport. Détail : préparer le numéro de compte.

Tutorats
Une confirmation arrivera ensuite.
Le lieu est facile à trouver.
Prenez votre temps pour comprendre le message.
En cas de changement, un nouvel avis sera publié.
Le service est également disponible en ligne.`;

const E3_2_CE_EMAIL_POOL_16 = buildExpressPool("e3-2-ce-email-16", [
  q({
    id: "cem-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["un rappel", "une facture", "une recette"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "un rappel",
    vfQ: "Le texte mentionne un rappel.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quelle activité est mentionnée ?",
    text: ["appeler la banque", "un examen", "dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité est _________.",
    fill: "appeler la banque",
    vfQ: "Le texte mentionne appeler la banque.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela se passe-t-il ?",
    text: ["à 14 h", "à minuit", "en 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "à 14 h",
    vfQ: "Le texte mentionne à 14 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Où cela se passe-t-il ?",
    text: ["depuis la maison", "à la plage", "à l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le lieu est _________.",
    fill: "depuis la maison",
    vfQ: "Le texte mentionne depuis la maison.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Qui est mentionné ?",
    text: ["Mme Keller", "un voisin", "le facteur"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La personne est _________.",
    fill: "Mme Keller",
    vfQ: "Le texte mentionne Mme Keller.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel transport est mentionné ?",
    text: ["aucun transport", "l'avion", "le bateau"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le transport est _________.",
    fill: "aucun transport",
    vfQ: "Le texte mentionne aucun transport.",
    vfC: 0,
  }),
]);
const E3_2_CE_EMAIL_TEXT_17 = `De : Journal

Objet : Article

Bonjour,

Nous préparons une brève nouvelle sur un apéro de quartier.
Le groupe travaille à 18 h, dans la cour de l'immeuble. les voisins vérifie les noms.
Consigne : venir à pied.

Journal
Nous traitons votre demande dans les meilleurs délais.
N'hésitez pas à nous indiquer vos disponibilités.
Ce message contient les informations essentielles.
Nous vous remercions de votre compréhension.
Pour toute urgence, appelez-nous pendant les heures d'ouverture.
Je reste près de mon téléphone aujourd'hui.`;

const E3_2_CE_EMAIL_POOL_17 = buildExpressPool("e3-2-ce-email-17", [
  q({
    id: "cem-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["un WhatsApp", "une facture", "une recette"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "un WhatsApp",
    vfQ: "Le texte mentionne un WhatsApp.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quelle activité est mentionnée ?",
    text: ["un apéro de quartier", "un examen", "dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité est _________.",
    fill: "un apéro de quartier",
    vfQ: "Le texte mentionne un apéro de quartier.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela se passe-t-il ?",
    text: ["à 18 h", "à minuit", "en 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "à 18 h",
    vfQ: "Le texte mentionne à 18 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Où cela se passe-t-il ?",
    text: ["dans la cour de l'immeuble", "à la plage", "à l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le lieu est _________.",
    fill: "dans la cour de l'immeuble",
    vfQ: "Le texte mentionne dans la cour de l'immeuble.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Qui est mentionné ?",
    text: ["les voisins", "un voisin", "le facteur"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La personne est _________.",
    fill: "les voisins",
    vfQ: "Le texte mentionne les voisins.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel transport est mentionné ?",
    text: ["venir à pied", "l'avion", "le bateau"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le transport est _________.",
    fill: "venir à pied",
    vfQ: "Le texte mentionne venir à pied.",
    vfC: 0,
  }),
]);
const E3_2_CE_EMAIL_TEXT_18 = `De : Sami

Objet : Sortie

Bonjour,

Pour faire la lessive, le rendez-vous est à la laverie automatique demain à 9 h.
La tenue ou préparation doit être simple. Détail : prévoir des pièces de 2 francs.
N'oubliez pas cette action : venir à pied.

Sami
Vous pouvez demander de l'aide si besoin.
Les informations importantes sont déjà notées plus haut.
Joignez les documents demandés si nécessaire.
Merci de votre attention et de votre patience.
Une confirmation arrivera ensuite.
Le lieu est facile à trouver.`;

const E3_2_CE_EMAIL_POOL_18 = buildExpressPool("e3-2-ce-email-18", [
  q({
    id: "cem-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["une note", "une facture", "une recette"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "une note",
    vfQ: "Le texte mentionne une note.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quelle activité est mentionnée ?",
    text: ["faire la lessive", "un examen", "dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité est _________.",
    fill: "faire la lessive",
    vfQ: "Le texte mentionne faire la lessive.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela se passe-t-il ?",
    text: ["demain à 9 h", "à minuit", "en 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "demain à 9 h",
    vfQ: "Le texte mentionne demain à 9 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Où cela se passe-t-il ?",
    text: ["à la laverie automatique", "à la plage", "à l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le lieu est _________.",
    fill: "à la laverie automatique",
    vfQ: "Le texte mentionne à la laverie automatique.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Qui est mentionné ?",
    text: ["Sami", "un voisin", "le facteur"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La personne est _________.",
    fill: "Sami",
    vfQ: "Le texte mentionne Sami.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel transport est mentionné ?",
    text: ["venir à pied", "l'avion", "le bateau"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le transport est _________.",
    fill: "venir à pied",
    vfQ: "Le texte mentionne venir à pied.",
    vfC: 0,
  }),
]);
const E3_2_CE_EMAIL_TEXT_19 = `De : Portail étudiant

Objet : Nouveau devoir

Bonjour,

Une tâche de la natation est disponible.
Il faut la faire avant à 7 h. La ressource se trouve à la piscine municipale.
David corrigera après. Consigne : prendre le bus 8.

Portail
Une question ? Écrivez ou téléphonez.
Merci encore, et à bientôt.
Tout est organisé pour que ce soit simple.
Le contact est indiqué dans le message.`;

const E3_2_CE_EMAIL_POOL_19 = buildExpressPool("e3-2-ce-email-19", [
  q({
    id: "cem-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["un SMS", "une facture", "une recette"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "un SMS",
    vfQ: "Le texte mentionne un SMS.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quelle activité est mentionnée ?",
    text: ["la natation", "un examen", "dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité est _________.",
    fill: "la natation",
    vfQ: "Le texte mentionne la natation.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela se passe-t-il ?",
    text: ["à 7 h", "à minuit", "en 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "à 7 h",
    vfQ: "Le texte mentionne à 7 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Où cela se passe-t-il ?",
    text: ["à la piscine municipale", "à la plage", "à l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le lieu est _________.",
    fill: "à la piscine municipale",
    vfQ: "Le texte mentionne à la piscine municipale.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Qui est mentionné ?",
    text: ["David", "un voisin", "le facteur"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La personne est _________.",
    fill: "David",
    vfQ: "Le texte mentionne David.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel transport est mentionné ?",
    text: ["prendre le bus 8", "l'avion", "le bateau"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le transport est _________.",
    fill: "prendre le bus 8",
    vfQ: "Le texte mentionne prendre le bus 8.",
    vfC: 0,
  }),
]);
const E3_2_CE_EMAIL_TEXT_20 = `De : Équipe pédagogique

Objet : Journée spéciale

Bonjour,

La journée autour de un brunch aura lieu dimanche à 10 h.
Le matin, les groupes passent au café du Port avec mes amis.
En fin de journée, consigne : venir en voiture. Détail : la réservation est pour quatre.

Équipe pédagogique
Nous sommes ouverts du lundi au vendredi.
N'hésite pas à me répondre quand tu peux.
Je t'envoie aussi ce détail pour être clair.
Cordialement, et bonne journée.
Si une information manque, écrivez-nous rapidement.
Nous avons bien noté votre situation.`;

const E3_2_CE_EMAIL_POOL_20 = buildExpressPool("e3-2-ce-email-20", [
  q({
    id: "cem-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["un planning", "une facture", "une recette"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "un planning",
    vfQ: "Le texte mentionne un planning.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quelle activité est mentionnée ?",
    text: ["un brunch", "un examen", "dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité est _________.",
    fill: "un brunch",
    vfQ: "Le texte mentionne un brunch.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela se passe-t-il ?",
    text: ["dimanche à 10 h", "à minuit", "en 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "dimanche à 10 h",
    vfQ: "Le texte mentionne dimanche à 10 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Où cela se passe-t-il ?",
    text: ["au café du Port", "à la plage", "à l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le lieu est _________.",
    fill: "au café du Port",
    vfQ: "Le texte mentionne au café du Port.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Qui est mentionné ?",
    text: ["mes amis", "un voisin", "le facteur"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La personne est _________.",
    fill: "mes amis",
    vfQ: "Le texte mentionne mes amis.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel transport est mentionné ?",
    text: ["venir en voiture", "l'avion", "le bateau"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le transport est _________.",
    fill: "venir en voiture",
    vfQ: "Le texte mentionne venir en voiture.",
    vfC: 0,
  }),
]);

export const E3_2_CE_EMAIL: CommunicationExercise[] = [
  readingPoolExercise({
  id: "e3-2-ce-email-1",
  readingText: E3_2_CE_EMAIL_TEXT_1,
  questionPool: E3_2_CE_EMAIL_POOL_1,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-2-ce-email-2",
  readingText: E3_2_CE_EMAIL_TEXT_2,
  questionPool: E3_2_CE_EMAIL_POOL_2,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-2-ce-email-3",
  readingText: E3_2_CE_EMAIL_TEXT_3,
  questionPool: E3_2_CE_EMAIL_POOL_3,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-2-ce-email-4",
  readingText: E3_2_CE_EMAIL_TEXT_4,
  questionPool: E3_2_CE_EMAIL_POOL_4,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-2-ce-email-5",
  readingText: E3_2_CE_EMAIL_TEXT_5,
  questionPool: E3_2_CE_EMAIL_POOL_5,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-2-ce-email-6",
  readingText: E3_2_CE_EMAIL_TEXT_6,
  questionPool: E3_2_CE_EMAIL_POOL_6,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-2-ce-email-7",
  readingText: E3_2_CE_EMAIL_TEXT_7,
  questionPool: E3_2_CE_EMAIL_POOL_7,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-2-ce-email-8",
  readingText: E3_2_CE_EMAIL_TEXT_8,
  questionPool: E3_2_CE_EMAIL_POOL_8,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-2-ce-email-9",
  readingText: E3_2_CE_EMAIL_TEXT_9,
  questionPool: E3_2_CE_EMAIL_POOL_9,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-2-ce-email-10",
  readingText: E3_2_CE_EMAIL_TEXT_10,
  questionPool: E3_2_CE_EMAIL_POOL_10,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-2-ce-email-11",
  readingText: E3_2_CE_EMAIL_TEXT_11,
  questionPool: E3_2_CE_EMAIL_POOL_11,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-2-ce-email-12",
  readingText: E3_2_CE_EMAIL_TEXT_12,
  questionPool: E3_2_CE_EMAIL_POOL_12,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-2-ce-email-13",
  readingText: E3_2_CE_EMAIL_TEXT_13,
  questionPool: E3_2_CE_EMAIL_POOL_13,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-2-ce-email-14",
  readingText: E3_2_CE_EMAIL_TEXT_14,
  questionPool: E3_2_CE_EMAIL_POOL_14,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-2-ce-email-15",
  readingText: E3_2_CE_EMAIL_TEXT_15,
  questionPool: E3_2_CE_EMAIL_POOL_15,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-2-ce-email-16",
  readingText: E3_2_CE_EMAIL_TEXT_16,
  questionPool: E3_2_CE_EMAIL_POOL_16,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-2-ce-email-17",
  readingText: E3_2_CE_EMAIL_TEXT_17,
  questionPool: E3_2_CE_EMAIL_POOL_17,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-2-ce-email-18",
  readingText: E3_2_CE_EMAIL_TEXT_18,
  questionPool: E3_2_CE_EMAIL_POOL_18,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-2-ce-email-19",
  readingText: E3_2_CE_EMAIL_TEXT_19,
  questionPool: E3_2_CE_EMAIL_POOL_19,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-2-ce-email-20",
  readingText: E3_2_CE_EMAIL_TEXT_20,
  questionPool: E3_2_CE_EMAIL_POOL_20,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
];

export const E3_2_PE_EMAIL: ExpressPePrompt[] = [
  {
    id: "e3-2-pee-1",
    title: "Journée de semaine",
    situation: "",
    sourceMessage: {
      from: "Correspondant",
      subject: "Ta journée",
      body: `Bonjour,
J'aimerais connaitre ta routine pendant la semaine. Comment se passe une journée normale ?
A bientot`,
    },
    instruction: "Répondez à cet e-mail en décrivant une journée de votre semaine. Commencez par le matin, donnez des heures et racontez vos activités jusqu'au soir.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-2-pee-2",
    title: "Activités des Français",
    situation: "",
    sourceMessage: {
      from: "Diego",
      subject: "La vie quotidienne en France",
      body: `Salut,
Pour mon cours, je dois parler des activités quotidiennes des Français. Tu peux m'aider ?
Diego`,
    },
    instruction: "Répondez à votre ami qui demande des informations sur les activités quotidiennes des Français. Décrivez une routine simple avec les repas, le travail, les transports et les loisirs.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-2-pee-3",
    title: "Matin presse",
    situation: "",
    sourceMessage: {
      from: "Collègue",
      subject: "Tu arrives quand ?",
      body: `Salut,
La reunion commence bientot. Tu es ou ?
A tout de suite`,
    },
    instruction: "Répondez à votre collègue en expliquant pourquoi vous êtes en retard. Racontez votre matin et donnez votre heure d'arrivée.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-2-pee-4",
    title: "Week-end",
    situation: "",
    sourceMessage: {
      from: "Amie",
      subject: "Samedi tranquille",
      body: `Salut,
Je cherche des idées pour un samedi tranquille. Toi, tu fais quoi d'habitude ?
Amie`,
    },
    instruction: "Répondez à votre amie pour décrire votre routine du samedi. Dites ce que vous faites le matin, l'après-midi et le soir.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-2-pee-5",
    title: "Routine de vacances",
    situation: "",
    sourceMessage: {
      from: "Famille",
      subject: "Vacances",
      body: `Bonjour,
Vos vacances ont l'air agreables. Comment se passent vos journées ?
Bises`,
    },
    instruction: "Répondez à votre famille en décrivant votre routine pendant les vacances. Parlez du réveil, des visites, des repas et du repos.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-2-pee-6",
    title: "Planning charge",
    situation: "",
    sourceMessage: {
      from: "Ami",
      subject: "Café aujourd'hui",
      body: `Salut,
Tu es libre pour un café aujourd'hui ?
Ami`,
    },
    instruction: "Répondez à votre ami en expliquant que votre journée est très chargee. Donnez vos horaires et proposez un moment libre.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-2-pee-7",
    title: "Routine sportive",
    situation: "",
    sourceMessage: {
      from: "Coach",
      subject: "Habitudes sportives",
      body: `Bonjour,
Pour préparer votre programme, pouvez-vous décrire une journée avec activité sportive ?
Indiquez l'heure, le lieu et ce que vous faites après.
Cordialement`,
    },
    instruction: "Répondez au coach pour décrire une journée où vous faites du sport. Donnez l'heure, le lieu et ce que vous faites après.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-2-pee-8",
    title: "Après les cours",
    situation: "",
    sourceMessage: {
      from: "Camarade",
      subject: "Après le cours",
      body: `Salut,
Tu fais quoi après les cours en général ?
A plus`,
    },
    instruction: "Répondez à un camarade en racontant ce que vous faites après les cours. Dites où vous allez, avec qui et à quelle heure vous rentrez.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-2-pee-9",
    title: "Routine avec enfants",
    situation: "",
    sourceMessage: {
      from: "Nadia",
      subject: "Organisation avec enfants",
      body: `Bonjour,
Je commence un nouveau travail et je cherche une routine avec les enfants. Comment fais-tu ?
Nadia`,
    },
    instruction: "Répondez à une amie qui demande comment s'organiser avec des enfants. Décrivez une journée simple avec le réveil, l'école, les repas et le soir.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-2-pee-10",
    title: "Journée idéale",
    situation: "",
    sourceMessage: {
      from: "Forum A1",
      subject: "Journée idéale",
      body: `Bonjour,
Cette semaine, décrivez votre journée idéale en français.
Le professeur`,
    },
    instruction: "Répondez à Forum A1 pour décrire votre journée idéale. Donnez des heures et parlez des personnes avec vous.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-2-pee-11",
    title: "Repas quotidiens",
    situation: "",
    sourceMessage: {
      from: "Correspondant",
      subject: "Les repas",
      body: `Bonjour,
Dans mon pays, les horaires des repas sont différents. Et chez toi ?
A bientot`,
    },
    instruction: "Répondez à votre correspondant en expliquant vos habitudes de repas. Parlez du petit déjeuner, du déjeuner et du dîner.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-2-pee-12",
    title: "Transport",
    situation: "",
    sourceMessage: {
      from: "Ami",
      subject: "Trajet",
      body: `Salut,
Ton travail est loin de chez toi ? Comment tu y vas chaque jour ?
Ami`,
    },
    instruction: "Répondez à un ami en décrivant votre trajet quotidien. Dites quel transport vous prenez, combien de temps cela dure et ce que vous faites pendant le trajet.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-2-pee-13",
    title: "Nouvelle routine",
    situation: "",
    sourceMessage: {
      from: "Professeur",
      subject: "Objectifs de la semaine",
      body: `Bonjour,
Pour lundi, écrivez quelques phrases sur une habitude que vous voulez changer.
Merci de répondre en indiquant ce que vous changez et pourquoi.
Cordialement`,
    },
    instruction: "Répondez au professeur pour décrire une nouvelle routine que vous voulez essayer. Expliquez ce que vous changez et pourquoi.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-2-pee-14",
    title: "Journée sans travail",
    situation: "",
    sourceMessage: {
      from: "Sœur",
      subject: "Jour de repos",
      body: `Coucou,
Tu as un jour de repos cette semaine ? Qu'est-ce que tu vas faire ?
Bises`,
    },
    instruction: "Répondez à votre sœur en racontant une journée sans travail. Parlez des courses, du repos, des loisirs et du soir.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-2-pee-15",
    title: "Routine de colocataire",
    situation: "",
    sourceMessage: {
      from: "Proprietaire",
      subject: "Vie en colocation",
      body: `Bonjour,
Je souhaite savoir si tout se passe bien dans la colocation et avec les horaires de chacun.
Merci de répondre simplement et d'expliquer si la routine pose un problème.
Cordialement`,
    },
    instruction: "Répondez à votre propriétaire en décrivant les horaires de votre colocataire. Restez simple et expliquez si la routine pose un problème.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-2-pee-16",
    title: "Fin de journée",
    situation: "",
    sourceMessage: {
      from: "Ami",
      subject: "Soir tranquille",
      body: `Salut,
Après le travail, tu fais quoi pour te reposer ?
Ami`,
    },
    instruction: "Répondez à votre ami en décrivant votre fin de journée. Parlez du dîner, des activités à la maison et de l'heure du coucher.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-2-pee-17",
    title: "Comparaison routines",
    situation: "",
    sourceMessage: {
      from: "Forum français",
      subject: "Semaine et dimanche",
      body: `Bonjour,
Comparez votre routine habituelle et votre routine du dimanche.
Merci`,
    },
    instruction: "Répondez à Forum français pour comparer votre routine de semaine et votre routine du dimanche. Dites ce qui est pareil et ce qui change.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-2-pee-18",
    title: "Matin en France",
    situation: "",
    sourceMessage: {
      from: "Marco",
      subject: "Routine française",
      body: `Salut,
Je viens en France bientot. Comment commence une journée normale ?
Marco`,
    },
    instruction: "Répondez à un ami et expliquez comment se passe souvent un matin en France. Parlez du petit déjeuner, des transports et du début du travail.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-2-pee-19",
    title: "Rendez-vous",
    situation: "",
    sourceMessage: {
      from: "Claire",
      subject: "Rendez-vous à 8 h",
      body: `Bonjour,
Est-ce que 8 h te convient pour notre rendez-vous demain ?
Claire`,
    },
    instruction: "Répondez à ce message en expliquant votre routine du matin et pourquoi vous proposez une autre heure de rendez-vous.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-2-pee-20",
    title: "Bilan quotidien",
    situation: "",
    sourceMessage: {
      from: "Coach de langue",
      subject: "Routine en français",
      body: `Bonjour,
Pour progresser, décrivez votre routine et les moments où vous utilisez le français.
Votre coach`,
    },
    instruction: "Répondez au coach avec le bilan de votre journée. Dites ce que vous faites en français le matin, l'après-midi et le soir.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },

];

/* ════════════════════════════════════════════════════════════════════════════
   E3.3 — Aller au travail
   ════════════════════════════════════════════════════════════════════════════ */

const E3_3_CE_EMAIL_TEXT_1 = `De : Marie

Objet : SwissTech SA

Bonjour,

secrétaire. Le rendez-vous est à 8 h, au bureau d'accueil.
Consigne : répondre aux e-mails.

Prenez votre temps pour comprendre le message.
En cas de changement, un nouvel avis sera publié.
Nous sommes là pour vous aider.
Gardez ce texte pour vous en souvenir.
Les horaires habituels restent les mêmes.
Le service client répond aussi par téléphone.
Cordialement,
Marie`;

const E3_3_CE_EMAIL_POOL_1 = buildExpressPool("e3-3-ce-email-1", [
  q({
    id: "cem-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["un e-mail interne", "une facture", "une recette"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "un e-mail interne",
    vfQ: "Le texte mentionne un e-mail interne.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel lieu de travail est mentionné ?",
    text: ["SwissTech SA", "un musée", "une école vide"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le lieu de travail est _________.",
    fill: "SwissTech SA",
    vfQ: "Le texte mentionne SwissTech SA.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quelle est la profession ?",
    text: ["secrétaire", "infirmier", "serveur"],
    textC: 0,
    img: ["secrétaire", "infirmier", "serveur"],
    imgC: 0,
    fillQ: "La profession est _________.",
    fill: "secrétaire",
    vfQ: "Le texte mentionne secrétaire.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quand cela se passe-t-il ?",
    text: ["à 8 h", "à minuit", "en 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "à 8 h",
    vfQ: "Le texte mentionne à 8 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Où cela se passe-t-il ?",
    text: ["au bureau d'accueil", "à la plage", "à l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le lieu est _________.",
    fill: "au bureau d'accueil",
    vfQ: "Le texte mentionne au bureau d'accueil.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il faire ?",
    text: ["répondre aux e-mails", "acheter une voiture", "partir loin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "répondre aux e-mails",
    vfQ: "Le texte mentionne répondre aux e-mails.",
    vfC: 0,
  }),
]);
const E3_3_CE_EMAIL_TEXT_2 = `De : Secrétariat

Objet : Information

Bonjour,

Nous confirmons Hôpital cantonal à 5 h 45.
Dr. Keller accueillera le groupe en salle de réunion. Action demandée : préparer les soins.

Merci encore, et à bientôt.
Tout est organisé pour que ce soit simple.
Le contact est indiqué dans le message.
N'oubliez pas de vérifier la date.
Bonne journée à toutes et à tous.
Le service est également disponible en ligne.
Le secrétariat`;

const E3_3_CE_EMAIL_POOL_2 = buildExpressPool("e3-3-ce-email-2", [
  q({
    id: "cem-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["une note", "une facture", "une recette"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "une note",
    vfQ: "Le texte mentionne une note.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel lieu de travail est mentionné ?",
    text: ["Hôpital cantonal", "un musée", "une école vide"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le lieu de travail est _________.",
    fill: "Hôpital cantonal",
    vfQ: "Le texte mentionne Hôpital cantonal.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quelle est la profession ?",
    text: ["infirmier", "secrétaire", "serveur"],
    textC: 0,
    img: ["infirmier", "secrétaire", "serveur"],
    imgC: 0,
    fillQ: "La profession est _________.",
    fill: "infirmier",
    vfQ: "Le texte mentionne infirmier.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quand cela se passe-t-il ?",
    text: ["à 5 h 45", "à minuit", "en 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "à 5 h 45",
    vfQ: "Le texte mentionne à 5 h 45.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Où cela se passe-t-il ?",
    text: ["en salle de réunion", "à la plage", "à l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le lieu est _________.",
    fill: "en salle de réunion",
    vfQ: "Le texte mentionne en salle de réunion.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il faire ?",
    text: ["préparer les soins", "acheter une voiture", "partir loin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "préparer les soins",
    vfQ: "Le texte mentionne préparer les soins.",
    vfC: 0,
  }),
]);
const E3_3_CE_EMAIL_TEXT_3 = `De : Portail

Objet : À faire

Bonjour,

Une nouvelle consigne est disponible pour Restaurant Le Sapin.
Ouvrez-la avant à 10 h 30; elle concerne en cuisine.
Chef Marco demande cette action : servir les clients. Détail : serveur.

Message automatique
Une question ? Écrivez ou téléphonez.
Nous traitons votre demande rapidement.
Merci encore, et à bientôt.
Tout est organisé pour que ce soit simple.
Le contact est indiqué dans le message.`;

const E3_3_CE_EMAIL_POOL_3 = buildExpressPool("e3-3-ce-email-3", [
  q({
    id: "cem-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["un SMS", "une facture", "une recette"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "un SMS",
    vfQ: "Le texte mentionne un SMS.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel lieu de travail est mentionné ?",
    text: ["Restaurant Le Sapin", "un musée", "une école vide"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le lieu de travail est _________.",
    fill: "Restaurant Le Sapin",
    vfQ: "Le texte mentionne Restaurant Le Sapin.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quelle est la profession ?",
    text: ["serveur", "secrétaire", "infirmier"],
    textC: 0,
    img: ["serveur", "secrétaire", "infirmier"],
    imgC: 0,
    fillQ: "La profession est _________.",
    fill: "serveur",
    vfQ: "Le texte mentionne serveur.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quand cela se passe-t-il ?",
    text: ["à 10 h 30", "à minuit", "en 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "à 10 h 30",
    vfQ: "Le texte mentionne à 10 h 30.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Où cela se passe-t-il ?",
    text: ["en cuisine", "à la plage", "à l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le lieu est _________.",
    fill: "en cuisine",
    vfQ: "Le texte mentionne en cuisine.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il faire ?",
    text: ["servir les clients", "acheter une voiture", "partir loin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "servir les clients",
    vfQ: "Le texte mentionne servir les clients.",
    vfC: 0,
  }),
]);
const E3_3_CE_EMAIL_TEXT_4 = `De : Paul

Objet : Rappel

Bonjour à tous,

Je confirme Garage Central. Le moment est à 7 h, à l'atelier.
Venez calmement. Action à prévoir : réparer une voiture.
mécanicien.

Le temps est beau, alors tout devrait bien se passer.
Prenez un pull, au cas où il ferait plus frais.
Le parking le plus proche est gratuit le soir.
Vous pouvez venir en vélo s'il fait beau.
Je t'écris aussi pour te donner un peu plus de nouvelles.
Le service est également disponible en ligne.
À bientôt`;

const E3_3_CE_EMAIL_POOL_4 = buildExpressPool("e3-3-ce-email-4", [
  q({
    id: "cem-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["un WhatsApp", "une facture", "une recette"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "un WhatsApp",
    vfQ: "Le texte mentionne un WhatsApp.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel lieu de travail est mentionné ?",
    text: ["Garage Central", "un musée", "une école vide"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le lieu de travail est _________.",
    fill: "Garage Central",
    vfQ: "Le texte mentionne Garage Central.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quelle est la profession ?",
    text: ["mécanicien", "secrétaire", "infirmier"],
    textC: 0,
    img: ["mécanicien", "secrétaire", "infirmier"],
    imgC: 0,
    fillQ: "La profession est _________.",
    fill: "mécanicien",
    vfQ: "Le texte mentionne mécanicien.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quand cela se passe-t-il ?",
    text: ["à 7 h", "à minuit", "en 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "à 7 h",
    vfQ: "Le texte mentionne à 7 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Où cela se passe-t-il ?",
    text: ["à l'atelier", "à la plage", "à l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le lieu est _________.",
    fill: "à l'atelier",
    vfQ: "Le texte mentionne à l'atelier.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il faire ?",
    text: ["réparer une voiture", "acheter une voiture", "partir loin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "réparer une voiture",
    vfQ: "Le texte mentionne réparer une voiture.",
    vfC: 0,
  }),
]);
const E3_3_CE_EMAIL_TEXT_5 = `De : Vie scolaire

Objet : Organisation

Bonjour,

Pour Banque Populaire, l'entrée se fait autrement.
Sophie attend en salle formation mardi à 14 h.
Une seule consigne : accueillir les clients. Détail : secrétaire.

Vie scolaire
Nous vous souhaitons une excellente journée.
Cordialement, et bonne journée.
Si une information manque, écrivez-nous rapidement.
Nous avons bien noté votre situation.
Le service est disponible également en ligne.
Pensez à joindre les documents demandés.`;

const E3_3_CE_EMAIL_POOL_5 = buildExpressPool("e3-3-ce-email-5", [
  q({
    id: "cem-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["une annonce RH", "une facture", "une recette"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "une annonce RH",
    vfQ: "Le texte mentionne une annonce RH.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel lieu de travail est mentionné ?",
    text: ["Banque Populaire", "un musée", "une école vide"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le lieu de travail est _________.",
    fill: "Banque Populaire",
    vfQ: "Le texte mentionne Banque Populaire.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quelle est la profession ?",
    text: ["secrétaire", "infirmier", "serveur"],
    textC: 0,
    img: ["secrétaire", "infirmier", "serveur"],
    imgC: 0,
    fillQ: "La profession est _________.",
    fill: "secrétaire",
    vfQ: "Le texte mentionne secrétaire.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quand cela se passe-t-il ?",
    text: ["mardi à 14 h", "à minuit", "en 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "mardi à 14 h",
    vfQ: "Le texte mentionne mardi à 14 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Où cela se passe-t-il ?",
    text: ["en salle formation", "à la plage", "à l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le lieu est _________.",
    fill: "en salle formation",
    vfQ: "Le texte mentionne en salle formation.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il faire ?",
    text: ["accueillir les clients", "acheter une voiture", "partir loin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "accueillir les clients",
    vfQ: "Le texte mentionne accueillir les clients.",
    vfC: 0,
  }),
]);
const E3_3_CE_EMAIL_TEXT_6 = `De : Bibliothèque

Objet : Document prêt

Bonjour,

Le document ou dossier pour Pharmacie du Lac est prêt.
Vous pouvez le demander vendredi à 18 h, dans la pharmacie. Julie connaît votre nom.
Action à prévoir : compter les stocks.

Ce document complète les informations déjà données.
Nous comptons sur vous.
Le service répond en français et en anglais.
Une version audio est disponible sur demande.
Les documents se téléchargent aussi en ligne.
Merci de votre attention et de votre patience.
Merci`;

const E3_3_CE_EMAIL_POOL_6 = buildExpressPool("e3-3-ce-email-6", [
  q({
    id: "cem-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["un message", "une facture", "une recette"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "un message",
    vfQ: "Le texte mentionne un message.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel lieu de travail est mentionné ?",
    text: ["Pharmacie du Lac", "un musée", "une école vide"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le lieu de travail est _________.",
    fill: "Pharmacie du Lac",
    vfQ: "Le texte mentionne Pharmacie du Lac.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quelle est la profession ?",
    text: ["pharmacien", "secrétaire", "infirmier"],
    textC: 0,
    img: ["pharmacien", "secrétaire", "infirmier"],
    imgC: 0,
    fillQ: "La profession est _________.",
    fill: "pharmacien",
    vfQ: "Le texte mentionne pharmacien.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quand cela se passe-t-il ?",
    text: ["vendredi à 18 h", "à minuit", "en 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "vendredi à 18 h",
    vfQ: "Le texte mentionne vendredi à 18 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Où cela se passe-t-il ?",
    text: ["dans la pharmacie", "à la plage", "à l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le lieu est _________.",
    fill: "dans la pharmacie",
    vfQ: "Le texte mentionne dans la pharmacie.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il faire ?",
    text: ["compter les stocks", "acheter une voiture", "partir loin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "compter les stocks",
    vfQ: "Le texte mentionne compter les stocks.",
    vfC: 0,
  }),
]);
const E3_3_CE_EMAIL_TEXT_7 = `De : Association

Objet : Invitation

Bonjour,

Les familles ou amis sont invités pour École primaire jeudi à 17 h.
Les informations seront visibles en salle des profs. Mme Martin commencera l'accueil.
Consigne : préparer les bulletins.

Association
Nous avons bien noté votre situation.
Le service est disponible également en ligne.
Pensez à joindre les documents demandés.
Votre dossier sera mis à jour après votre réponse.
Nous vous souhaitons une excellente journée.
Le trajet est simple, ne t'inquiète pas.`;

const E3_3_CE_EMAIL_POOL_7 = buildExpressPool("e3-3-ce-email-7", [
  q({
    id: "cem-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["un planning", "une facture", "une recette"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "un planning",
    vfQ: "Le texte mentionne un planning.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel lieu de travail est mentionné ?",
    text: ["École primaire", "un musée", "une école vide"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le lieu de travail est _________.",
    fill: "École primaire",
    vfQ: "Le texte mentionne École primaire.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quelle est la profession ?",
    text: ["professeur", "secrétaire", "infirmier"],
    textC: 0,
    img: ["professeur", "secrétaire", "infirmier"],
    imgC: 0,
    fillQ: "La profession est _________.",
    fill: "professeur",
    vfQ: "Le texte mentionne professeur.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quand cela se passe-t-il ?",
    text: ["jeudi à 17 h", "à minuit", "en 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "jeudi à 17 h",
    vfQ: "Le texte mentionne jeudi à 17 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Où cela se passe-t-il ?",
    text: ["en salle des profs", "à la plage", "à l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le lieu est _________.",
    fill: "en salle des profs",
    vfQ: "Le texte mentionne en salle des profs.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il faire ?",
    text: ["préparer les bulletins", "acheter une voiture", "partir loin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "préparer les bulletins",
    vfQ: "Le texte mentionne préparer les bulletins.",
    vfC: 0,
  }),
]);
const E3_3_CE_EMAIL_TEXT_8 = `De : Application

Objet : Notification

Bonjour,

Une modification concerne Agence Voyage.
Le rendez-vous est au bureau mercredi à 11 h. Emma ajoute : Détail : vendeur.
Action demandée : préparer un devis.

Application
Une confirmation vous sera envoyée ensuite.
Merci de vérifier les informations avant de répondre.
Nous sommes ouverts du lundi au vendredi.
Merci de confirmer la bonne réception.
Cordialement, et bonne journée.
Si une information manque, écrivez-nous rapidement.`;

const E3_3_CE_EMAIL_POOL_8 = buildExpressPool("e3-3-ce-email-8", [
  q({
    id: "cem-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["un e-mail client", "une facture", "une recette"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "un e-mail client",
    vfQ: "Le texte mentionne un e-mail client.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel lieu de travail est mentionné ?",
    text: ["Agence Voyage", "un musée", "une école vide"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le lieu de travail est _________.",
    fill: "Agence Voyage",
    vfQ: "Le texte mentionne Agence Voyage.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quelle est la profession ?",
    text: ["vendeur", "secrétaire", "infirmier"],
    textC: 0,
    img: ["vendeur", "secrétaire", "infirmier"],
    imgC: 0,
    fillQ: "La profession est _________.",
    fill: "vendeur",
    vfQ: "Le texte mentionne vendeur.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quand cela se passe-t-il ?",
    text: ["mercredi à 11 h", "à minuit", "en 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "mercredi à 11 h",
    vfQ: "Le texte mentionne mercredi à 11 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Où cela se passe-t-il ?",
    text: ["au bureau", "à la plage", "à l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le lieu est _________.",
    fill: "au bureau",
    vfQ: "Le texte mentionne au bureau.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il faire ?",
    text: ["préparer un devis", "acheter une voiture", "partir loin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "préparer un devis",
    vfQ: "Le texte mentionne préparer un devis.",
    vfC: 0,
  }),
]);
const E3_3_CE_EMAIL_TEXT_9 = `De : Service des examens

Objet : Convocation

Bonjour,

Votre rendez-vous pour Boulangerie Martin est confirmé lundi à 6 h.
L'entrée se fait au laboratoire; Thomas vérifie la salle.
Avant le début, consigne : faire le pain.

Service des examens
Nous sommes là pour vous aider.
Gardez ce texte pour vous en souvenir.
Les horaires habituels restent les mêmes.
Une question ? Écrivez ou téléphonez.
Merci de votre attention et de votre patience.
Merci encore, et à bientôt.`;

const E3_3_CE_EMAIL_POOL_9 = buildExpressPool("e3-3-ce-email-9", [
  q({
    id: "cem-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["une note de réunion", "une facture", "une recette"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "une note de réunion",
    vfQ: "Le texte mentionne une note de réunion.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel lieu de travail est mentionné ?",
    text: ["Boulangerie Martin", "un musée", "une école vide"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le lieu de travail est _________.",
    fill: "Boulangerie Martin",
    vfQ: "Le texte mentionne Boulangerie Martin.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quelle est la profession ?",
    text: ["boulanger", "secrétaire", "infirmier"],
    textC: 0,
    img: ["boulanger", "secrétaire", "infirmier"],
    imgC: 0,
    fillQ: "La profession est _________.",
    fill: "boulanger",
    vfQ: "Le texte mentionne boulanger.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quand cela se passe-t-il ?",
    text: ["lundi à 6 h", "à minuit", "en 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "lundi à 6 h",
    vfQ: "Le texte mentionne lundi à 6 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Où cela se passe-t-il ?",
    text: ["au laboratoire", "à la plage", "à l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le lieu est _________.",
    fill: "au laboratoire",
    vfQ: "Le texte mentionne au laboratoire.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il faire ?",
    text: ["faire le pain", "acheter une voiture", "partir loin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "faire le pain",
    vfQ: "Le texte mentionne faire le pain.",
    vfC: 0,
  }),
]);
const E3_3_CE_EMAIL_TEXT_10 = `De : Laboratoire

Objet : Sécurité

Bonjour,

Pour Cabinet d'avocats, attendez Maître Blanc.
Le groupe arrive au tribunal mardi à 10 h. Détail : secrétaire.
Consigne : classer les dossiers.

Responsable
N'hésitez pas à nous indiquer vos disponibilités.
Ce message contient les informations essentielles.
Nous vous remercions de votre compréhension.
Pour toute urgence, appelez-nous pendant les heures d'ouverture.
Conservez ce message pour vos dossiers.
Le personnel peut répondre en français simple.`;

const E3_3_CE_EMAIL_POOL_10 = buildExpressPool("e3-3-ce-email-10", [
  q({
    id: "cem-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["un SMS", "une facture", "une recette"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "un SMS",
    vfQ: "Le texte mentionne un SMS.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel lieu de travail est mentionné ?",
    text: ["Cabinet d'avocats", "un musée", "une école vide"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le lieu de travail est _________.",
    fill: "Cabinet d'avocats",
    vfQ: "Le texte mentionne Cabinet d'avocats.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quelle est la profession ?",
    text: ["secrétaire", "infirmier", "serveur"],
    textC: 0,
    img: ["secrétaire", "infirmier", "serveur"],
    imgC: 0,
    fillQ: "La profession est _________.",
    fill: "secrétaire",
    vfQ: "Le texte mentionne secrétaire.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quand cela se passe-t-il ?",
    text: ["mardi à 10 h", "à minuit", "en 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "mardi à 10 h",
    vfQ: "Le texte mentionne mardi à 10 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Où cela se passe-t-il ?",
    text: ["au tribunal", "à la plage", "à l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le lieu est _________.",
    fill: "au tribunal",
    vfQ: "Le texte mentionne au tribunal.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il faire ?",
    text: ["classer les dossiers", "acheter une voiture", "partir loin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "classer les dossiers",
    vfQ: "Le texte mentionne classer les dossiers.",
    vfC: 0,
  }),
]);
const E3_3_CE_EMAIL_TEXT_11 = `De : Surveillance

Objet : Pause

Bonjour,

Hugo accompagne les personnes à la réception.
Après la pause, Hôtel Bellevue reprend à 15 h.
Pendant l'attente, action calme : accueillir les clients.

Merci encore, et à bientôt.
Tout est organisé pour que ce soit simple.
Le contact est indiqué dans le message.
N'oubliez pas de vérifier la date.
Bonne journée à toutes et à tous.
On peut aussi en parler demain matin.
Bonne journée`;

const E3_3_CE_EMAIL_POOL_11 = buildExpressPool("e3-3-ce-email-11", [
  q({
    id: "cem-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["une info intranet", "une facture", "une recette"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "une info intranet",
    vfQ: "Le texte mentionne une info intranet.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel lieu de travail est mentionné ?",
    text: ["Hôtel Bellevue", "un musée", "une école vide"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le lieu de travail est _________.",
    fill: "Hôtel Bellevue",
    vfQ: "Le texte mentionne Hôtel Bellevue.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quelle est la profession ?",
    text: ["réceptionniste", "secrétaire", "infirmier"],
    textC: 0,
    img: ["vendeur", "secrétaire", "infirmier"],
    imgC: 0,
    fillQ: "La profession est _________.",
    fill: "réceptionniste",
    vfQ: "Le texte mentionne réceptionniste.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quand cela se passe-t-il ?",
    text: ["à 15 h", "à minuit", "en 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "à 15 h",
    vfQ: "Le texte mentionne à 15 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Où cela se passe-t-il ?",
    text: ["à la réception", "à la plage", "à l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le lieu est _________.",
    fill: "à la réception",
    vfQ: "Le texte mentionne à la réception.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il faire ?",
    text: ["accueillir les clients", "acheter une voiture", "partir loin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "accueillir les clients",
    vfQ: "Le texte mentionne accueillir les clients.",
    vfC: 0,
  }),
]);
const E3_3_CE_EMAIL_TEXT_12 = `De : Club

Objet : Inscription

Bonjour,

Le club aide pour BTP Construction. Prochaine séance : à 6 h 15.
Elle a lieu sur le chantier avec Karim.
Pour participer, action simple : monter un mur. Détail : maçon.

Club
Vous pouvez venir accompagné(e) si vous le souhaitez.
Merci encore, et à bientôt.
Tout est organisé pour que ce soit simple.
Le contact est indiqué dans le message.
N'oubliez pas de vérifier la date.`;

const E3_3_CE_EMAIL_POOL_12 = buildExpressPool("e3-3-ce-email-12", [
  q({
    id: "cem-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["un WhatsApp", "une facture", "une recette"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "un WhatsApp",
    vfQ: "Le texte mentionne un WhatsApp.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel lieu de travail est mentionné ?",
    text: ["BTP Construction", "un musée", "une école vide"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le lieu de travail est _________.",
    fill: "BTP Construction",
    vfQ: "Le texte mentionne BTP Construction.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quelle est la profession ?",
    text: ["maçon", "secrétaire", "infirmier"],
    textC: 0,
    img: ["maçon", "secrétaire", "infirmier"],
    imgC: 0,
    fillQ: "La profession est _________.",
    fill: "maçon",
    vfQ: "Le texte mentionne maçon.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quand cela se passe-t-il ?",
    text: ["à 6 h 15", "à minuit", "en 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "à 6 h 15",
    vfQ: "Le texte mentionne à 6 h 15.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Où cela se passe-t-il ?",
    text: ["sur le chantier", "à la plage", "à l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le lieu est _________.",
    fill: "sur le chantier",
    vfQ: "Le texte mentionne sur le chantier.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il faire ?",
    text: ["monter un mur", "acheter une voiture", "partir loin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "monter un mur",
    vfQ: "Le texte mentionne monter un mur.",
    vfC: 0,
  }),
]);
const E3_3_CE_EMAIL_TEXT_13 = `De : Nina

Objet : Travail

Bonjour,

Je rappelle le travail ou rendez-vous de Librairie du Centre.
Il est prévu vendredi à 18 h, au rayon jeunesse.
Avant la séance, consigne : ranger les livres. Détail : libraire.

Nina
Nous comptons sur vous.
Après cela, vous recevrez un petit rappel.
Gardez une copie papier si possible.
Le cachet de la date est important.
Sans confirmation, la place n'est pas garantie.
Une confirmation sera envoyée ensuite.`;

const E3_3_CE_EMAIL_POOL_13 = buildExpressPool("e3-3-ce-email-13", [
  q({
    id: "cem-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["un e-mail", "une facture", "une recette"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "un e-mail",
    vfQ: "Le texte mentionne un e-mail.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel lieu de travail est mentionné ?",
    text: ["Librairie du Centre", "un musée", "une école vide"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le lieu de travail est _________.",
    fill: "Librairie du Centre",
    vfQ: "Le texte mentionne Librairie du Centre.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quelle est la profession ?",
    text: ["libraire", "secrétaire", "infirmier"],
    textC: 0,
    img: ["libraire", "secrétaire", "infirmier"],
    imgC: 0,
    fillQ: "La profession est _________.",
    fill: "libraire",
    vfQ: "Le texte mentionne libraire.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quand cela se passe-t-il ?",
    text: ["vendredi à 18 h", "à minuit", "en 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "vendredi à 18 h",
    vfQ: "Le texte mentionne vendredi à 18 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Où cela se passe-t-il ?",
    text: ["au rayon jeunesse", "à la plage", "à l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le lieu est _________.",
    fill: "au rayon jeunesse",
    vfQ: "Le texte mentionne au rayon jeunesse.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il faire ?",
    text: ["ranger les livres", "acheter une voiture", "partir loin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "ranger les livres",
    vfQ: "Le texte mentionne ranger les livres.",
    vfC: 0,
  }),
]);
const E3_3_CE_EMAIL_TEXT_14 = `De : Direction

Objet : Changement

Bonjour,

Salon de coiffure change d'organisation. Clara accompagne le groupe près du fauteuil 2 mardi à 9 h.
La consigne pour tous : couper les cheveux.
coiffeur.

Direction
Le contact est indiqué dans le message.
N'oubliez pas de vérifier la date.
Respectez la file d'attente, s'il vous plaît.
Bonne journée à toutes et à tous.
Ce document complète les informations déjà données.
Nous comptons sur vous.
Après cela, vous recevrez un petit rappel.`;

const E3_3_CE_EMAIL_POOL_14 = buildExpressPool("e3-3-ce-email-14", [
  q({
    id: "cem-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["une note", "une facture", "une recette"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "une note",
    vfQ: "Le texte mentionne une note.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel lieu de travail est mentionné ?",
    text: ["Salon de coiffure", "un musée", "une école vide"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le lieu de travail est _________.",
    fill: "Salon de coiffure",
    vfQ: "Le texte mentionne Salon de coiffure.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quelle est la profession ?",
    text: ["coiffeur", "secrétaire", "infirmier"],
    textC: 0,
    img: ["coiffeur", "secrétaire", "infirmier"],
    imgC: 0,
    fillQ: "La profession est _________.",
    fill: "coiffeur",
    vfQ: "Le texte mentionne coiffeur.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quand cela se passe-t-il ?",
    text: ["mardi à 9 h", "à minuit", "en 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "mardi à 9 h",
    vfQ: "Le texte mentionne mardi à 9 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Où cela se passe-t-il ?",
    text: ["près du fauteuil 2", "à la plage", "à l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le lieu est _________.",
    fill: "près du fauteuil 2",
    vfQ: "Le texte mentionne près du fauteuil 2.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il faire ?",
    text: ["couper les cheveux", "acheter une voiture", "partir loin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "couper les cheveux",
    vfQ: "Le texte mentionne couper les cheveux.",
    vfC: 0,
  }),
]);
const E3_3_CE_EMAIL_TEXT_15 = `De : Forum

Objet : Groupe

Bonjour,

Un groupe se forme pour Usine Omega.
La rencontre est jeudi à 8 h, dans l'usine. David organise les rôles.
Si vous venez, pensez à contrôler la production.

Forum
Joignez les documents demandés si nécessaire.
Cordialement, et bonne journée.
Si une information manque, écrivez-nous rapidement.
Nous avons bien noté votre situation.
Le service est disponible également en ligne.
Pensez à joindre les documents demandés.`;

const E3_3_CE_EMAIL_POOL_15 = buildExpressPool("e3-3-ce-email-15", [
  q({
    id: "cem-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["un message RH", "une facture", "une recette"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "un message RH",
    vfQ: "Le texte mentionne un message RH.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel lieu de travail est mentionné ?",
    text: ["Usine Omega", "un musée", "une école vide"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le lieu de travail est _________.",
    fill: "Usine Omega",
    vfQ: "Le texte mentionne Usine Omega.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quelle est la profession ?",
    text: ["ingénieur", "secrétaire", "infirmier"],
    textC: 0,
    img: ["ingénieur", "secrétaire", "infirmier"],
    imgC: 0,
    fillQ: "La profession est _________.",
    fill: "ingénieur",
    vfQ: "Le texte mentionne ingénieur.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quand cela se passe-t-il ?",
    text: ["jeudi à 8 h", "à minuit", "en 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "jeudi à 8 h",
    vfQ: "Le texte mentionne jeudi à 8 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Où cela se passe-t-il ?",
    text: ["dans l'usine", "à la plage", "à l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le lieu est _________.",
    fill: "dans l'usine",
    vfQ: "Le texte mentionne dans l'usine.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il faire ?",
    text: ["contrôler la production", "acheter une voiture", "partir loin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "contrôler la production",
    vfQ: "Le texte mentionne contrôler la production.",
    vfC: 0,
  }),
]);
const E3_3_CE_EMAIL_TEXT_16 = `De : Tutorats

Objet : Révision

Bonjour,

La préparation de Cabinet médical commence à 8 h.
Elle se passe dans le cabinet. Infirmière Léa répond aux questions.
Ensuite, action finale : consulter les patients. Détail : médecin.

Tutorats
Ce message contient les informations essentielles.
Nous vous remercions de votre compréhension.
Pour toute urgence, appelez-nous pendant les heures d'ouverture.
Conservez ce message pour vos dossiers.
Respectez la file d'attente, s'il vous plaît.`;

const E3_3_CE_EMAIL_POOL_16 = buildExpressPool("e3-3-ce-email-16", [
  q({
    id: "cem-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["un planning", "une facture", "une recette"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "un planning",
    vfQ: "Le texte mentionne un planning.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel lieu de travail est mentionné ?",
    text: ["Cabinet médical", "un musée", "une école vide"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le lieu de travail est _________.",
    fill: "Cabinet médical",
    vfQ: "Le texte mentionne Cabinet médical.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quelle est la profession ?",
    text: ["médecin", "secrétaire", "infirmier"],
    textC: 0,
    img: ["médecin", "secrétaire", "infirmier"],
    imgC: 0,
    fillQ: "La profession est _________.",
    fill: "médecin",
    vfQ: "Le texte mentionne médecin.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quand cela se passe-t-il ?",
    text: ["à 8 h", "à minuit", "en 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "à 8 h",
    vfQ: "Le texte mentionne à 8 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Où cela se passe-t-il ?",
    text: ["dans le cabinet", "à la plage", "à l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le lieu est _________.",
    fill: "dans le cabinet",
    vfQ: "Le texte mentionne dans le cabinet.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il faire ?",
    text: ["consulter les patients", "acheter une voiture", "partir loin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "consulter les patients",
    vfQ: "Le texte mentionne consulter les patients.",
    vfC: 0,
  }),
]);
const E3_3_CE_EMAIL_TEXT_17 = `De : Journal

Objet : Article

Bonjour,

Nous préparons une brève nouvelle sur Ferme des Alpes.
Le groupe travaille samedi à 6 h, au marché de Sion. Victor vérifie les noms.
Consigne : charger le camion.

Journal
N'hésitez pas à nous indiquer vos disponibilités.
Ce message contient les informations essentielles.
Nous vous remercions de votre compréhension.
Pour toute urgence, appelez-nous pendant les heures d'ouverture.
Conservez ce message pour vos dossiers.
Une confirmation sera envoyée ensuite.`;

const E3_3_CE_EMAIL_POOL_17 = buildExpressPool("e3-3-ce-email-17", [
  q({
    id: "cem-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["un SMS", "une facture", "une recette"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "un SMS",
    vfQ: "Le texte mentionne un SMS.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel lieu de travail est mentionné ?",
    text: ["Ferme des Alpes", "un musée", "une école vide"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le lieu de travail est _________.",
    fill: "Ferme des Alpes",
    vfQ: "Le texte mentionne Ferme des Alpes.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quelle est la profession ?",
    text: ["agriculteur", "secrétaire", "infirmier"],
    textC: 0,
    img: ["agriculteur", "secrétaire", "infirmier"],
    imgC: 0,
    fillQ: "La profession est _________.",
    fill: "agriculteur",
    vfQ: "Le texte mentionne agriculteur.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quand cela se passe-t-il ?",
    text: ["samedi à 6 h", "à minuit", "en 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "samedi à 6 h",
    vfQ: "Le texte mentionne samedi à 6 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Où cela se passe-t-il ?",
    text: ["au marché de Sion", "à la plage", "à l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le lieu est _________.",
    fill: "au marché de Sion",
    vfQ: "Le texte mentionne au marché de Sion.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il faire ?",
    text: ["charger le camion", "acheter une voiture", "partir loin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "charger le camion",
    vfQ: "Le texte mentionne charger le camion.",
    vfC: 0,
  }),
]);
const E3_3_CE_EMAIL_TEXT_18 = `De : Antoine

Objet : Sortie

Bonjour,

Pour Journal Le Quotidien, le rendez-vous est en salle de rédaction à 11 h.
La tenue ou préparation doit être simple. Détail : journaliste.
N'oubliez pas cette action : écrire un article.

Antoine
Nous sommes là pour vous aider.
Gardez ce texte pour vous en souvenir.
Les horaires habituels restent les mêmes.
Une question ? Écrivez ou téléphonez.
Merci encore, et à bientôt.`;

const E3_3_CE_EMAIL_POOL_18 = buildExpressPool("e3-3-ce-email-18", [
  q({
    id: "cem-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["un e-mail", "une facture", "une recette"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "un e-mail",
    vfQ: "Le texte mentionne un e-mail.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel lieu de travail est mentionné ?",
    text: ["Journal Le Quotidien", "un musée", "une école vide"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le lieu de travail est _________.",
    fill: "Journal Le Quotidien",
    vfQ: "Le texte mentionne Journal Le Quotidien.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quelle est la profession ?",
    text: ["journaliste", "secrétaire", "infirmier"],
    textC: 0,
    img: ["journaliste", "secrétaire", "infirmier"],
    imgC: 0,
    fillQ: "La profession est _________.",
    fill: "journaliste",
    vfQ: "Le texte mentionne journaliste.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quand cela se passe-t-il ?",
    text: ["à 11 h", "à minuit", "en 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "à 11 h",
    vfQ: "Le texte mentionne à 11 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Où cela se passe-t-il ?",
    text: ["en salle de rédaction", "à la plage", "à l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le lieu est _________.",
    fill: "en salle de rédaction",
    vfQ: "Le texte mentionne en salle de rédaction.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il faire ?",
    text: ["écrire un article", "acheter une voiture", "partir loin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "écrire un article",
    vfQ: "Le texte mentionne écrire un article.",
    vfC: 0,
  }),
]);
const E3_3_CE_EMAIL_TEXT_19 = `De : Portail étudiant

Objet : Nouveau devoir

Bonjour,

Une tâche de Service pompiers est disponible.
Il faut la faire avant chaque matin. La ressource se trouve à la caserne.
Marc corrigera après. Consigne : préparer les interventions.

Portail
Gardez ce texte pour vous en souvenir.
Les horaires habituels restent les mêmes.
Une question ? Écrivez ou téléphonez.
Merci encore, et à bientôt.`;

const E3_3_CE_EMAIL_POOL_19 = buildExpressPool("e3-3-ce-email-19", [
  q({
    id: "cem-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["une annonce", "une facture", "une recette"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "une annonce",
    vfQ: "Le texte mentionne une annonce.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel lieu de travail est mentionné ?",
    text: ["Service pompiers", "un musée", "une école vide"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le lieu de travail est _________.",
    fill: "Service pompiers",
    vfQ: "Le texte mentionne Service pompiers.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quelle est la profession ?",
    text: ["pompier", "secrétaire", "infirmier"],
    textC: 0,
    img: ["pompier", "secrétaire", "infirmier"],
    imgC: 0,
    fillQ: "La profession est _________.",
    fill: "pompier",
    vfQ: "Le texte mentionne pompier.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quand cela se passe-t-il ?",
    text: ["chaque matin", "à minuit", "en 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "chaque matin",
    vfQ: "Le texte mentionne chaque matin.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Où cela se passe-t-il ?",
    text: ["à la caserne", "à la plage", "à l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le lieu est _________.",
    fill: "à la caserne",
    vfQ: "Le texte mentionne à la caserne.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il faire ?",
    text: ["préparer les interventions", "acheter une voiture", "partir loin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "préparer les interventions",
    vfQ: "Le texte mentionne préparer les interventions.",
    vfC: 0,
  }),
]);
const E3_3_CE_EMAIL_TEXT_20 = `De : Équipe pédagogique

Objet : Journée spéciale

Bonjour,

La journée autour de Crèche Les Petits aura lieu jeudi à 18 h.
Le matin, les groupes passent dans le jardin avec Sara.
En fin de journée, consigne : préparer les plantes. Détail : jardinier.

Équipe pédagogique
Gardez ce texte pour vous en souvenir.
Les horaires habituels restent les mêmes.
Une question ? Écrivez ou téléphonez.
Le service client répond aussi par téléphone.
Merci encore, et à bientôt.`;

const E3_3_CE_EMAIL_POOL_20 = buildExpressPool("e3-3-ce-email-20", [
  q({
    id: "cem-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["un WhatsApp", "une facture", "une recette"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "un WhatsApp",
    vfQ: "Le texte mentionne un WhatsApp.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel lieu de travail est mentionné ?",
    text: ["Crèche Les Petits", "un musée", "une école vide"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le lieu de travail est _________.",
    fill: "Crèche Les Petits",
    vfQ: "Le texte mentionne Crèche Les Petits.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quelle est la profession ?",
    text: ["jardinier", "secrétaire", "infirmier"],
    textC: 0,
    img: ["jardinier", "secrétaire", "infirmier"],
    imgC: 0,
    fillQ: "La profession est _________.",
    fill: "jardinier",
    vfQ: "Le texte mentionne jardinier.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quand cela se passe-t-il ?",
    text: ["jeudi à 18 h", "à minuit", "en 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "jeudi à 18 h",
    vfQ: "Le texte mentionne jeudi à 18 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Où cela se passe-t-il ?",
    text: ["dans le jardin", "à la plage", "à l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le lieu est _________.",
    fill: "dans le jardin",
    vfQ: "Le texte mentionne dans le jardin.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il faire ?",
    text: ["préparer les plantes", "acheter une voiture", "partir loin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "préparer les plantes",
    vfQ: "Le texte mentionne préparer les plantes.",
    vfC: 0,
  }),
]);

export const E3_3_CE_EMAIL: CommunicationExercise[] = [
  readingPoolExercise({
  id: "e3-3-ce-email-1",
  readingText: E3_3_CE_EMAIL_TEXT_1,
  questionPool: E3_3_CE_EMAIL_POOL_1,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-3-ce-email-2",
  readingText: E3_3_CE_EMAIL_TEXT_2,
  questionPool: E3_3_CE_EMAIL_POOL_2,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-3-ce-email-3",
  readingText: E3_3_CE_EMAIL_TEXT_3,
  questionPool: E3_3_CE_EMAIL_POOL_3,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-3-ce-email-4",
  readingText: E3_3_CE_EMAIL_TEXT_4,
  questionPool: E3_3_CE_EMAIL_POOL_4,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-3-ce-email-5",
  readingText: E3_3_CE_EMAIL_TEXT_5,
  questionPool: E3_3_CE_EMAIL_POOL_5,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-3-ce-email-6",
  readingText: E3_3_CE_EMAIL_TEXT_6,
  questionPool: E3_3_CE_EMAIL_POOL_6,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-3-ce-email-7",
  readingText: E3_3_CE_EMAIL_TEXT_7,
  questionPool: E3_3_CE_EMAIL_POOL_7,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-3-ce-email-8",
  readingText: E3_3_CE_EMAIL_TEXT_8,
  questionPool: E3_3_CE_EMAIL_POOL_8,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-3-ce-email-9",
  readingText: E3_3_CE_EMAIL_TEXT_9,
  questionPool: E3_3_CE_EMAIL_POOL_9,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-3-ce-email-10",
  readingText: E3_3_CE_EMAIL_TEXT_10,
  questionPool: E3_3_CE_EMAIL_POOL_10,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-3-ce-email-11",
  readingText: E3_3_CE_EMAIL_TEXT_11,
  questionPool: E3_3_CE_EMAIL_POOL_11,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-3-ce-email-12",
  readingText: E3_3_CE_EMAIL_TEXT_12,
  questionPool: E3_3_CE_EMAIL_POOL_12,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-3-ce-email-13",
  readingText: E3_3_CE_EMAIL_TEXT_13,
  questionPool: E3_3_CE_EMAIL_POOL_13,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-3-ce-email-14",
  readingText: E3_3_CE_EMAIL_TEXT_14,
  questionPool: E3_3_CE_EMAIL_POOL_14,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-3-ce-email-15",
  readingText: E3_3_CE_EMAIL_TEXT_15,
  questionPool: E3_3_CE_EMAIL_POOL_15,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-3-ce-email-16",
  readingText: E3_3_CE_EMAIL_TEXT_16,
  questionPool: E3_3_CE_EMAIL_POOL_16,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-3-ce-email-17",
  readingText: E3_3_CE_EMAIL_TEXT_17,
  questionPool: E3_3_CE_EMAIL_POOL_17,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-3-ce-email-18",
  readingText: E3_3_CE_EMAIL_TEXT_18,
  questionPool: E3_3_CE_EMAIL_POOL_18,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-3-ce-email-19",
  readingText: E3_3_CE_EMAIL_TEXT_19,
  questionPool: E3_3_CE_EMAIL_POOL_19,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-3-ce-email-20",
  readingText: E3_3_CE_EMAIL_TEXT_20,
  questionPool: E3_3_CE_EMAIL_POOL_20,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
];

export const E3_3_PE_EMAIL: ExpressPePrompt[] = [
  {
    id: "e3-3-pee-1",
    title: "Présenter les employés",
    situation: "",
    sourceMessage: {
      from: "Nouveau collègue",
      subject: "Mon arrivée lundi",
      body: `Bonjour,
Je commence lundi dans votre entreprise. Pouvez-vous me présenter un peu l'équipe ?
Merci`,
    },
    instruction: "Répondez à ce nouvel employé et présentez les autres employés de l'entreprise. Donnez les noms, les fonctions et une information utile.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-3-pee-2",
    title: "Travail à Périgueux",
    situation: "",
    sourceMessage: {
      from: "Ville de Périgueux",
      subject: "Annonce de travail",
      body: `Bonjour,
La ville de Périgueux recherche une personne disponible pour un poste d'accueil. Envoyez votre présentation par e-mail.
Cordialement`,
    },
    instruction: "Répondez à la ville de Périgueux pour l'annonce de travail. Présentez-vous, donnez vos disponibilités et demandez un rendez-vous.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-3-pee-3",
    title: "Premier jour",
    situation: "",
    sourceMessage: {
      from: "Responsable RH",
      subject: "Bienvenue dans l'équipe",
      body: `Bonjour,
Nous sommes heureux de vous accueillir lundi pour votre premier jour.
Merci de répondre avec vos questions sur l'heure d'arrivée, l'adresse exacte et le nom de la personne à contacter.
Cordialement`,
    },
    instruction: "Répondez au responsable pour confirmer votre premier jour. Demandez l'heure d'arrivée, l'adresse exacte et le nom de la personne à contacter.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-3-pee-4",
    title: "Equipe à un stagiaire",
    situation: "",
    sourceMessage: {
      from: "Stagiaire",
      subject: "Avant mon stage",
      body: `Bonjour,
Je commence mon stage la semaine prochaine. Qui vais-je rencontrer dans l'équipe ?
Merci`,
    },
    instruction: "Répondez au stagiaire pour présenter votre équipe. Dites qui fait quoi et qui peut l'aider au début.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-3-pee-5",
    title: "Recherche emploi",
    situation: "",
    sourceMessage: {
      from: "Magasin Central",
      subject: "Poste vendeur",
      body: `Bonjour,
Nous cherchons une personne pour un poste de vendeur à temps partiel.
Merci de répondre en indiquant votre expérience, vos compétences et vos disponibilités.
Cordialement`,
    },
    instruction: "Répondez à cette offre avec une courte présentation professionnelle. Parlez de votre expérience, de vos compétences et de vos disponibilités.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-3-pee-6",
    title: "Réunion d'équipe",
    situation: "",
    sourceMessage: {
      from: "Chef d'équipe",
      subject: "Point rapide",
      body: `Bonjour,
Il faut organiser un point rapide avec l'équipe cette semaine.
Merci`,
    },
    instruction: "Répondez au chef d'équipe pour organiser une courte réunion. Donnez le sujet, le jour, l'heure et le lieu.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-3-pee-7",
    title: "Changement horaire",
    situation: "",
    sourceMessage: {
      from: "Responsable",
      subject: "Planning",
      body: `Bonjour,
Pouvez-vous confirmer vos horaires pour la semaine prochaine ?
Cordialement`,
    },
    instruction: "Répondez à votre responsable pour expliquer un changement d'horaire. Donnez vos nouveaux horaires et la raison simple.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-3-pee-8",
    title: "Compétences",
    situation: "",
    sourceMessage: {
      from: "Agence emploi",
      subject: "Votre profil",
      body: `Bonjour,
Pour compléter votre dossier, merci de nous envoyer une présentation professionnelle courte.
Cordialement`,
    },
    instruction: "Répondez à l'agence pour compléter votre profil. Indiquez ce que vous savez faire, les langues parlées et le type de poste recherché.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-3-pee-9",
    title: "Collègue absent",
    situation: "",
    sourceMessage: {
      from: "Equipe",
      subject: "Absence de Paul",
      body: `Bonjour,
Paul est absent aujourd'hui. Qui peut organiser les tâches urgentes ?
Merci`,
    },
    instruction: "Répondez à l'équipe pour expliquer comment remplacer un collègue absent. Dites quelles tâches sont importantes aujourd'hui.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-3-pee-10",
    title: "Pause café",
    situation: "",
    sourceMessage: {
      from: "Collègue",
      subject: "Petite pause ?",
      body: `Salut,
La matinée est longue. On prend une pause aujourd'hui ?
A plus`,
    },
    instruction: "Répondez à votre collègue pour proposer une pause café. Proposez l'heure et le lieu de façon amicale.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-3-pee-11",
    title: "Accueil client",
    situation: "",
    sourceMessage: {
      from: "Nouveau collègue",
      subject: "Accueil client",
      body: `Bonjour,
Je commence à l'accueil demain. Peux-tu m'expliquer comment recevoir les clients ?
Merci`,
    },
    instruction: "Répondez au nouveau collègue en expliquant comment accueillir un client. Utilisez des phrases simples et donnez deux conseils de politesse.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-3-pee-12",
    title: "Poste préfère",
    situation: "",
    sourceMessage: {
      from: "Conseiller emploi",
      subject: "Projet professionnel",
      body: `Bonjour,
Pour notre rendez-vous, envoyez-moi quelques phrases sur le travail que vous cherchez.
Cordialement`,
    },
    instruction: "Répondez à Conseiller emploi pour décrire le travail que vous aimeriez faire. Parlez du lieu, des horaires et des qualites nécessaires.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-3-pee-13",
    title: "Départ collègue",
    situation: "",
    sourceMessage: {
      from: "Equipe",
      subject: "Départ de Lina",
      body: `Bonjour,
Lina quitte l'entreprise vendredi. Nous voulons lui envoyer un message commun.
Merci de répondre avec un court message pour lui souhaiter une bonne continuation.
L'équipe`,
    },
    instruction: "Répondez à l'équipe pour préparer le message de départ de Lina. Souhaitez-lui une bonne continuation.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-3-pee-14",
    title: "Question sur tâche",
    situation: "",
    sourceMessage: {
      from: "Collègue",
      subject: "Travail de cet après-midi",
      body: `Salut,
Je suis disponible cet après-midi si tu as une question sur le dossier.
Merci de répondre en indiquant le problème avec politesse.
A plus`,
    },
    instruction: "Répondez à votre collègue pour demander de l'aide sur une tâche que vous ne comprenez pas. Expliquez le problème avec politesse.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-3-pee-15",
    title: "Equipe internationale",
    situation: "",
    sourceMessage: {
      from: "Responsable",
      subject: "Présentation de l'équipe",
      body: `Bonjour,
Pour le nouveau partenaire, préparez une présentation simple de notre équipe.
Merci`,
    },
    instruction: "Répondez au responsable en présentant une équipe internationale. Donnez les prénoms, les langues parlées et les rôles principaux.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-3-pee-16",
    title: "Temps partiel",
    situation: "",
    sourceMessage: {
      from: "Café du Centre",
      subject: "Aide à temps partiel",
      body: `Bonjour,
Nous cherchons une personne disponible quelques jours par semaine.
Merci de répondre en indiquant vos jours disponibles et le type de tâches que vous pouvez faire.
Cordialement`,
    },
    instruction: "Répondez au café pour demander un travail à temps partiel. Présentez vos jours disponibles et le type de tâches que vous pouvez faire.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-3-pee-17",
    title: "Bureau",
    situation: "",
    sourceMessage: {
      from: "Ami",
      subject: "Ton nouveau bureau",
      body: `Salut,
Comment est ton nouveau bureau ? Et tes collègues ?
Ami`,
    },
    instruction: "Répondez à un ami en décrivant votre bureau et vos collègues. Parlez de l'ambiance, des horaires et d'une personne importante.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-3-pee-18",
    title: "Annonce locale",
    situation: "",
    sourceMessage: {
      from: "Boutique Rose",
      subject: "Offre d'emploi",
      body: `Bonjour,
Notre boutique cherche une personne pour aider le samedi.
Merci de répondre en vous présentant et en demandant si un entretien est possible.
Cordialement`,
    },
    instruction: "Répondez à une annonce locale pour un poste dans un magasin. Présentez-vous et demandez si un entretien est possible.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-3-pee-19",
    title: "Formation au travail",
    situation: "",
    sourceMessage: {
      from: "Responsable formation",
      subject: "Formations internes",
      body: `Bonjour,
Des formations courtes sont possibles ce mois-ci pour les employés intéressés.
Merci de répondre en indiquant ce que vous voulez apprendre et pourquoi c'est utile pour votre travail.
Cordialement`,
    },
    instruction: "Répondez au responsable formation pour demander une petite formation. Expliquez ce que vous voulez apprendre et pourquoi c'est utile pour votre travail.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-3-pee-20",
    title: "Chef d'équipe",
    situation: "",
    sourceMessage: {
      from: "Nouveau collaborateur",
      subject: "Chef d'équipe",
      body: `Bonjour,
Je voudrais savoir qui est le chef d'équipe et comment le contacter.
Merci`,
    },
    instruction: "Répondez au nouveau collaborateur en présentant le chef d'équipe. Donnez son rôle, ses horaires et la meilleure façon de le contacter.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },

];
