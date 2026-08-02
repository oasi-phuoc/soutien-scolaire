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

Message automatique`;

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

Vie scolaire`;

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

Association`;

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

Application`;

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

Service des examens`;

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

Responsable`;

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

Club`;

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

École primaire`;

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

Direction`;

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

Forum`;

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

Tutorats`;

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

Journal`;

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

Photographe scolaire`;

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

Portail`;

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

Équipe pédagogique`;

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
    title: "Confirmer sa présence à la réunion",
    situation: "L'école de votre fille vous invite à la réunion des parents.",
    sourceMessage: {
      from: "École du Lac",
      subject: "Réunion des parents",
      body: "Bonjour,\nLa réunion des parents a lieu le jeudi 12 septembre à 18 h, dans la salle 24.\nMerci de confirmer votre présence.\nLe secrétariat de l'école",
    },
    instruction: "Répondez à l'école : confirmez votre présence, dites qui vient avec vous et posez une question sur la réunion.",
    points: ["La confirmation", "Qui vient avec vous", "Une question sur la réunion"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-1-pee-2",
    title: "Excuser une absence",
    situation: "Votre fils est malade et ne peut pas aller à l'école.",
    sourceMessage: {
      from: "Mme Perrin",
      subject: "Absence de votre fils",
      body: "Bonjour,\nVotre fils n'est pas en classe ce matin.\nPouvez-vous nous expliquer son absence ?\nMerci,\nMme Perrin, maîtresse de la classe",
    },
    instruction: "Répondez à la maîtresse : excusez-vous, expliquez que votre fils est malade et dites quand il revient à l'école.",
    points: ["L'excuse", "La maladie de votre fils", "Quand il revient à l'école"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-1-pee-3",
    title: "Demander la liste du matériel",
    situation: "L'école vous écrit avant la rentrée.",
    sourceMessage: {
      from: "École du Lac",
      subject: "La rentrée scolaire",
      body: "Bonjour,\nLa rentrée est le lundi 26 août à 8 h 15.\nVotre enfant doit apporter son matériel scolaire.\nLe secrétariat de l'école",
    },
    instruction: "Répondez à l'école : remerciez, demandez la liste du matériel scolaire et posez une question sur les horaires.",
    points: ["Un remerciement", "La demande de la liste du matériel", "Une question sur les horaires"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-1-pee-4",
    title: "Parler de sa nouvelle école",
    situation: "Un ami vous pose des questions sur votre école.",
    sourceMessage: {
      from: "Amir",
      subject: "Ta nouvelle école",
      body: "Salut !\nAlors, ta nouvelle école, c'est comment ?\nQu'est-ce que tu étudies ? Tu commences à quelle heure ?\nRaconte-moi !\nAmir",
    },
    instruction: "Répondez à Amir : décrivez votre école, dites quelles matières vous étudiez et donnez vos horaires.",
    points: ["Votre école", "Les matières", "Vos horaires"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-1-pee-5",
    title: "Prendre rendez-vous avec le maître",
    situation: "Le maître de votre fille veut vous voir.",
    sourceMessage: {
      from: "M. Robert",
      subject: "Rendez-vous",
      body: "Bonjour,\nJe voudrais vous parler du travail de votre fille.\nPouvez-vous venir à l'école cette semaine ?\nM. Robert, maître de la classe",
    },
    instruction: "Répondez au maître : acceptez le rendez-vous, proposez un jour et une heure et posez une question sur le travail de votre fille.",
    points: ["Votre accord", "Un jour et une heure", "Une question sur votre fille"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-1-pee-6",
    title: "Inscrire son enfant à la cantine",
    situation: "L'école propose la cantine à midi.",
    sourceMessage: {
      from: "École du Lac",
      subject: "Inscription à la cantine",
      body: "Bonjour,\nVous pouvez inscrire votre enfant à la cantine.\nQuels jours votre enfant mange-t-il à l'école ?\nLe secrétariat de l'école",
    },
    instruction: "Répondez à l'école : dites quels jours votre enfant mange à la cantine, demandez le prix et remerciez.",
    points: ["Les jours à la cantine", "Une question sur le prix", "Un remerciement"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-1-pee-7",
    title: "Confirmer son inscription au cours",
    situation: "Vous prenez des cours de français. L'école de langue vous écrit.",
    sourceMessage: {
      from: "École de français",
      subject: "Votre inscription",
      body: "Bonjour,\nVotre cours de français commence le mardi 3 septembre à 18 h, salle 5.\nMerci de confirmer votre inscription.\nL'école de français",
    },
    instruction: "Répondez à l'école : confirmez votre inscription, posez une question sur le matériel et demandez où est la salle 5.",
    points: ["La confirmation", "Une question sur le matériel", "Une question sur la salle"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-1-pee-8",
    title: "Aider une voisine",
    situation: "Votre voisine est nouvelle. Son fils va dans l'école de votre fille.",
    sourceMessage: {
      from: "Mme Silva",
      subject: "Question sur l'école",
      body: "Bonjour,\nMon fils commence l'école lundi.\nLes cours commencent à quelle heure ? Où est l'entrée ?\nMerci beaucoup,\nMme Silva",
    },
    instruction: "Répondez à Mme Silva : donnez les horaires de l'école, expliquez où est l'entrée et proposez d'y aller ensemble lundi.",
    points: ["Les horaires", "L'entrée de l'école", "La proposition d'y aller ensemble"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-1-pee-9",
    title: "Autoriser une sortie scolaire",
    situation: "La classe de votre fils va au musée.",
    sourceMessage: {
      from: "École du Lac",
      subject: "Sortie au musée",
      body: "Bonjour,\nLa classe va au musée le vendredi 17 mai.\nLa sortie coûte dix francs. Merci de donner votre réponse.\nLe secrétariat de l'école",
    },
    instruction: "Répondez à l'école : donnez votre accord pour la sortie, dites ce que votre fils apporte et posez une question sur le repas de midi.",
    points: ["Votre accord", "Ce que votre fils apporte", "Une question sur le repas"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-1-pee-10",
    title: "Prêter un livre",
    situation: "Un camarade de classe a oublié son livre.",
    sourceMessage: {
      from: "Lucas",
      subject: "Le livre de maths",
      body: "Salut !\nJ'ai oublié mon livre de maths à l'école.\nTu peux me prêter ton livre ce soir ? On a un exercice pour demain.\nLucas",
    },
    instruction: "Répondez à Lucas : acceptez de prêter votre livre, dites où et quand vous vous retrouvez et expliquez l'exercice pour demain.",
    points: ["Votre accord", "Où et quand", "L'exercice pour demain"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
{
  id: "e3-1-pee-11",
  title: "Répondre à un e-mail — variante 11",
  situation: "Vous recevez un e-mail de Contact 11.",
  sourceMessage: {
    from: "Contact 11",
    subject: "Question sur e3-1",
    body: "Bonjour,\nJ'ai une question pour vous. Pouvez-vous me répondre ?\nMerci,\nContact 11",
  },
  instruction: "Répondez à l'e-mail : remerciez, donnez les informations demandées et posez une question.",
  points: [
    "Un remerciement",
    "Votre réponse",
    "Une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e3-1-pee-12",
  title: "Répondre à un e-mail — variante 12",
  situation: "Vous recevez un e-mail de Contact 12.",
  sourceMessage: {
    from: "Contact 12",
    subject: "Question sur e3-1",
    body: "Bonjour,\nJ'ai une question pour vous. Pouvez-vous me répondre ?\nMerci,\nContact 12",
  },
  instruction: "Répondez à l'e-mail : remerciez, donnez les informations demandées et posez une question.",
  points: [
    "Un remerciement",
    "Votre réponse",
    "Une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e3-1-pee-13",
  title: "Répondre à un e-mail — variante 13",
  situation: "Vous recevez un e-mail de Contact 13.",
  sourceMessage: {
    from: "Contact 13",
    subject: "Question sur e3-1",
    body: "Bonjour,\nJ'ai une question pour vous. Pouvez-vous me répondre ?\nMerci,\nContact 13",
  },
  instruction: "Répondez à l'e-mail : remerciez, donnez les informations demandées et posez une question.",
  points: [
    "Un remerciement",
    "Votre réponse",
    "Une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e3-1-pee-14",
  title: "Répondre à un e-mail — variante 14",
  situation: "Vous recevez un e-mail de Contact 14.",
  sourceMessage: {
    from: "Contact 14",
    subject: "Question sur e3-1",
    body: "Bonjour,\nJ'ai une question pour vous. Pouvez-vous me répondre ?\nMerci,\nContact 14",
  },
  instruction: "Répondez à l'e-mail : remerciez, donnez les informations demandées et posez une question.",
  points: [
    "Un remerciement",
    "Votre réponse",
    "Une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e3-1-pee-15",
  title: "Répondre à un e-mail — variante 15",
  situation: "Vous recevez un e-mail de Contact 15.",
  sourceMessage: {
    from: "Contact 15",
    subject: "Question sur e3-1",
    body: "Bonjour,\nJ'ai une question pour vous. Pouvez-vous me répondre ?\nMerci,\nContact 15",
  },
  instruction: "Répondez à l'e-mail : remerciez, donnez les informations demandées et posez une question.",
  points: [
    "Un remerciement",
    "Votre réponse",
    "Une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e3-1-pee-16",
  title: "Répondre à un e-mail — variante 16",
  situation: "Vous recevez un e-mail de Contact 16.",
  sourceMessage: {
    from: "Contact 16",
    subject: "Question sur e3-1",
    body: "Bonjour,\nJ'ai une question pour vous. Pouvez-vous me répondre ?\nMerci,\nContact 16",
  },
  instruction: "Répondez à l'e-mail : remerciez, donnez les informations demandées et posez une question.",
  points: [
    "Un remerciement",
    "Votre réponse",
    "Une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e3-1-pee-17",
  title: "Répondre à un e-mail — variante 17",
  situation: "Vous recevez un e-mail de Contact 17.",
  sourceMessage: {
    from: "Contact 17",
    subject: "Question sur e3-1",
    body: "Bonjour,\nJ'ai une question pour vous. Pouvez-vous me répondre ?\nMerci,\nContact 17",
  },
  instruction: "Répondez à l'e-mail : remerciez, donnez les informations demandées et posez une question.",
  points: [
    "Un remerciement",
    "Votre réponse",
    "Une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e3-1-pee-18",
  title: "Répondre à un e-mail — variante 18",
  situation: "Vous recevez un e-mail de Contact 18.",
  sourceMessage: {
    from: "Contact 18",
    subject: "Question sur e3-1",
    body: "Bonjour,\nJ'ai une question pour vous. Pouvez-vous me répondre ?\nMerci,\nContact 18",
  },
  instruction: "Répondez à l'e-mail : remerciez, donnez les informations demandées et posez une question.",
  points: [
    "Un remerciement",
    "Votre réponse",
    "Une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e3-1-pee-19",
  title: "Répondre à un e-mail — variante 19",
  situation: "Vous recevez un e-mail de Contact 19.",
  sourceMessage: {
    from: "Contact 19",
    subject: "Question sur e3-1",
    body: "Bonjour,\nJ'ai une question pour vous. Pouvez-vous me répondre ?\nMerci,\nContact 19",
  },
  instruction: "Répondez à l'e-mail : remerciez, donnez les informations demandées et posez une question.",
  points: [
    "Un remerciement",
    "Votre réponse",
    "Une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e3-1-pee-20",
  title: "Répondre à un e-mail — variante 20",
  situation: "Vous recevez un e-mail de Contact 20.",
  sourceMessage: {
    from: "Contact 20",
    subject: "Question sur e3-1",
    body: "Bonjour,\nJ'ai une question pour vous. Pouvez-vous me répondre ?\nMerci,\nContact 20",
  },
  instruction: "Répondez à l'e-mail : remerciez, donnez les informations demandées et posez une question.",
  points: [
    "Un remerciement",
    "Votre réponse",
    "Une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
}
];

/* ════════════════════════════════════════════════════════════════════════════
   E3.2 — Décrire son quotidien
   ════════════════════════════════════════════════════════════════════════════ */

const E3_2_CE_EMAIL_TEXT_1 = `De : ma mère
Objet : les courses

Bonjour,

le budget est de 45 francs. Le rendez-vous est à 17 h, à la Migros du centre.
Consigne : venir à pied.

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

Message automatique`;

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

Vie scolaire`;

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

Association`;

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

Application`;

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

Service des examens`;

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

Responsable`;

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

Club`;

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

Nora`;

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

Direction`;

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

Forum`;

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

Tutorats`;

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

Journal`;

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

Sami`;

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

Portail`;

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

Équipe pédagogique`;

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
    title: "Raconter son week-end",
    situation: "Votre amie Marta raconte sa semaine et pose une question.",
    sourceMessage: {
      from: "Marta",
      subject: "Ma semaine",
      body: "Bonjour,\nJe me lève à 6 h 30 et je travaille toute la journée.\nLe week-end, je me repose au bord du lac.\nEt toi, qu'est-ce que tu fais le week-end ?\nMarta",
    },
    instruction: "Répondez à Marta : racontez votre week-end, dites à quelle heure vous vous levez et proposez une activité ensemble.",
    points: ["Votre week-end", "L'heure du lever", "Une activité ensemble"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-2-pee-2",
    title: "Donner des nouvelles à sa famille",
    situation: "Votre grand-mère veut connaître votre vie.",
    sourceMessage: {
      from: "Mamie",
      subject: "Des nouvelles",
      body: "Bonjour,\nComment vas-tu ? Raconte-moi tes journées.\nTu manges bien ? Tu dors assez ?\nGrosses bises,\nMamie",
    },
    instruction: "Répondez à votre grand-mère : décrivez votre journée, parlez de vos repas et dites à quelle heure vous vous couchez.",
    points: ["Votre journée", "Vos repas", "L'heure du coucher"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-2-pee-3",
    title: "Choisir un horaire de sport",
    situation: "Votre club de gym change ses horaires.",
    sourceMessage: {
      from: "Club de gym Tonic",
      subject: "Nouveaux horaires",
      body: "Bonjour,\nNos cours changent d'horaire.\nVous pouvez venir le mardi à 18 h ou le samedi à 10 h.\nQuel horaire préférez-vous ?\nLe club de gym",
    },
    instruction: "Répondez au club : choisissez un horaire, expliquez pourquoi avec votre emploi du temps et remerciez.",
    points: ["L'horaire choisi", "Pourquoi cet horaire", "Un remerciement"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-2-pee-4",
    title: "Trouver un moment pour se voir",
    situation: "Une amie veut vous voir cette semaine.",
    sourceMessage: {
      from: "Nadia",
      subject: "On se voit quand ?",
      body: "Coucou,\nJe veux te voir cette semaine !\nTu es libre quel jour ? Le soir ou le week-end ?\nBises,\nNadia",
    },
    instruction: "Répondez à Nadia : expliquez votre semaine, proposez un jour et une heure et proposez une activité.",
    points: ["Votre semaine", "Un jour et une heure", "Une activité"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-2-pee-5",
    title: "Organiser les repas de la semaine",
    situation: "Votre colocataire veut organiser les repas de la semaine.",
    sourceMessage: {
      from: "Tom",
      subject: "Les repas de la semaine",
      body: "Salut,\nOn organise les repas ? Moi, je peux cuisiner le lundi et le mercredi.\nEt toi, quels soirs es-tu à la maison ?\nTom",
    },
    instruction: "Répondez à Tom : dites quels soirs vous êtes à la maison, proposez vos jours de cuisine et posez une question sur les courses.",
    points: ["Vos soirs à la maison", "Vos jours de cuisine", "Une question sur les courses"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-2-pee-6",
    title: "Expliquer sa routine du matin",
    situation: "Votre cousin est toujours en retard le matin.",
    sourceMessage: {
      from: "Sami",
      subject: "Le matin, c'est dur !",
      body: "Salut,\nJe suis toujours en retard le matin !\nToi, tu arrives toujours à l'heure. Comment tu fais ?\nSami",
    },
    instruction: "Répondez à Sami : décrivez votre routine du matin, dites à quelle heure vous vous levez et donnez-lui un conseil.",
    points: ["Votre routine du matin", "L'heure du lever", "Un conseil"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-2-pee-7",
    title: "Répondre à l'école de langue",
    situation: "Votre cours de français change de jour.",
    sourceMessage: {
      from: "École de français",
      subject: "Changement d'horaire",
      body: "Bonjour,\nVotre cours de français change de jour : il a lieu maintenant le jeudi à 18 h 30.\nCet horaire vous convient-il ?\nL'école de français",
    },
    instruction: "Répondez à l'école : dites si l'horaire vous convient, expliquez votre emploi du temps du jeudi et posez une question.",
    points: ["Votre réponse", "Votre emploi du temps du jeudi", "Une question"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-2-pee-8",
    title: "Décrire sa journée type",
    situation: "Votre correspondante veut connaître votre quotidien.",
    sourceMessage: {
      from: "Lena",
      subject: "Ta journée type",
      body: "Bonjour,\nDans ma ville, je me lève à 7 h et je vais à l'école à vélo.\nEt toi ? Raconte-moi ta journée type, du matin au soir.\nLena",
    },
    instruction: "Répondez à Lena : racontez votre matin, votre après-midi et votre soirée.",
    points: ["Le matin", "L'après-midi", "La soirée"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-2-pee-9",
    title: "Accepter une invitation à la piscine",
    situation: "Un ami vous invite dimanche matin.",
    sourceMessage: {
      from: "Karim",
      subject: "Piscine dimanche ?",
      body: "Salut,\nJe vais à la piscine dimanche matin. Tu viens avec moi ?\nElle ouvre à 9 h.\nKarim",
    },
    instruction: "Répondez à Karim : acceptez l'invitation, dites à quelle heure vous vous levez le dimanche et proposez une heure de rendez-vous.",
    points: ["Votre accord", "Votre heure de lever le dimanche", "Une heure de rendez-vous"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-2-pee-10",
    title: "Répondre à la bibliothèque",
    situation: "La bibliothèque de votre quartier change ses horaires.",
    sourceMessage: {
      from: "Bibliothèque municipale",
      subject: "Nos nouveaux horaires",
      body: "Bonjour,\nLa bibliothèque est maintenant ouverte le soir, jusqu'à 20 h.\nQuels jours venez-vous chez nous ?\nLa bibliothèque municipale",
    },
    instruction: "Répondez à la bibliothèque : dites quels jours vous venez, expliquez ce que vous faites à la bibliothèque et remerciez pour les nouveaux horaires.",
    points: ["Les jours de visite", "Vos activités à la bibliothèque", "Un remerciement"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
{
  id: "e3-2-pee-11",
  title: "Répondre à un e-mail — variante 11",
  situation: "Vous recevez un e-mail de Contact 11.",
  sourceMessage: {
    from: "Contact 11",
    subject: "Question sur e3-2",
    body: "Bonjour,\nJ'ai une question pour vous. Pouvez-vous me répondre ?\nMerci,\nContact 11",
  },
  instruction: "Répondez à l'e-mail : remerciez, donnez les informations demandées et posez une question.",
  points: [
    "Un remerciement",
    "Votre réponse",
    "Une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e3-2-pee-12",
  title: "Répondre à un e-mail — variante 12",
  situation: "Vous recevez un e-mail de Contact 12.",
  sourceMessage: {
    from: "Contact 12",
    subject: "Question sur e3-2",
    body: "Bonjour,\nJ'ai une question pour vous. Pouvez-vous me répondre ?\nMerci,\nContact 12",
  },
  instruction: "Répondez à l'e-mail : remerciez, donnez les informations demandées et posez une question.",
  points: [
    "Un remerciement",
    "Votre réponse",
    "Une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e3-2-pee-13",
  title: "Répondre à un e-mail — variante 13",
  situation: "Vous recevez un e-mail de Contact 13.",
  sourceMessage: {
    from: "Contact 13",
    subject: "Question sur e3-2",
    body: "Bonjour,\nJ'ai une question pour vous. Pouvez-vous me répondre ?\nMerci,\nContact 13",
  },
  instruction: "Répondez à l'e-mail : remerciez, donnez les informations demandées et posez une question.",
  points: [
    "Un remerciement",
    "Votre réponse",
    "Une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e3-2-pee-14",
  title: "Répondre à un e-mail — variante 14",
  situation: "Vous recevez un e-mail de Contact 14.",
  sourceMessage: {
    from: "Contact 14",
    subject: "Question sur e3-2",
    body: "Bonjour,\nJ'ai une question pour vous. Pouvez-vous me répondre ?\nMerci,\nContact 14",
  },
  instruction: "Répondez à l'e-mail : remerciez, donnez les informations demandées et posez une question.",
  points: [
    "Un remerciement",
    "Votre réponse",
    "Une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e3-2-pee-15",
  title: "Répondre à un e-mail — variante 15",
  situation: "Vous recevez un e-mail de Contact 15.",
  sourceMessage: {
    from: "Contact 15",
    subject: "Question sur e3-2",
    body: "Bonjour,\nJ'ai une question pour vous. Pouvez-vous me répondre ?\nMerci,\nContact 15",
  },
  instruction: "Répondez à l'e-mail : remerciez, donnez les informations demandées et posez une question.",
  points: [
    "Un remerciement",
    "Votre réponse",
    "Une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e3-2-pee-16",
  title: "Répondre à un e-mail — variante 16",
  situation: "Vous recevez un e-mail de Contact 16.",
  sourceMessage: {
    from: "Contact 16",
    subject: "Question sur e3-2",
    body: "Bonjour,\nJ'ai une question pour vous. Pouvez-vous me répondre ?\nMerci,\nContact 16",
  },
  instruction: "Répondez à l'e-mail : remerciez, donnez les informations demandées et posez une question.",
  points: [
    "Un remerciement",
    "Votre réponse",
    "Une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e3-2-pee-17",
  title: "Répondre à un e-mail — variante 17",
  situation: "Vous recevez un e-mail de Contact 17.",
  sourceMessage: {
    from: "Contact 17",
    subject: "Question sur e3-2",
    body: "Bonjour,\nJ'ai une question pour vous. Pouvez-vous me répondre ?\nMerci,\nContact 17",
  },
  instruction: "Répondez à l'e-mail : remerciez, donnez les informations demandées et posez une question.",
  points: [
    "Un remerciement",
    "Votre réponse",
    "Une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e3-2-pee-18",
  title: "Répondre à un e-mail — variante 18",
  situation: "Vous recevez un e-mail de Contact 18.",
  sourceMessage: {
    from: "Contact 18",
    subject: "Question sur e3-2",
    body: "Bonjour,\nJ'ai une question pour vous. Pouvez-vous me répondre ?\nMerci,\nContact 18",
  },
  instruction: "Répondez à l'e-mail : remerciez, donnez les informations demandées et posez une question.",
  points: [
    "Un remerciement",
    "Votre réponse",
    "Une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e3-2-pee-19",
  title: "Répondre à un e-mail — variante 19",
  situation: "Vous recevez un e-mail de Contact 19.",
  sourceMessage: {
    from: "Contact 19",
    subject: "Question sur e3-2",
    body: "Bonjour,\nJ'ai une question pour vous. Pouvez-vous me répondre ?\nMerci,\nContact 19",
  },
  instruction: "Répondez à l'e-mail : remerciez, donnez les informations demandées et posez une question.",
  points: [
    "Un remerciement",
    "Votre réponse",
    "Une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e3-2-pee-20",
  title: "Répondre à un e-mail — variante 20",
  situation: "Vous recevez un e-mail de Contact 20.",
  sourceMessage: {
    from: "Contact 20",
    subject: "Question sur e3-2",
    body: "Bonjour,\nJ'ai une question pour vous. Pouvez-vous me répondre ?\nMerci,\nContact 20",
  },
  instruction: "Répondez à l'e-mail : remerciez, donnez les informations demandées et posez une question.",
  points: [
    "Un remerciement",
    "Votre réponse",
    "Une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
}
];

/* ════════════════════════════════════════════════════════════════════════════
   E3.3 — Aller au travail
   ════════════════════════════════════════════════════════════════════════════ */

const E3_3_CE_EMAIL_TEXT_1 = `De : Marie
Objet : SwissTech SA

Bonjour,

secrétaire. Le rendez-vous est à 8 h, au bureau d'accueil.
Consigne : répondre aux e-mails.

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

Message automatique`;

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

Vie scolaire`;

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

Association`;

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

Application`;

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

Service des examens`;

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

Responsable`;

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

Club`;

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

Nina`;

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

Direction`;

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

Forum`;

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

Tutorats`;

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

Journal`;

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

Antoine`;

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

Portail`;

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

Équipe pédagogique`;

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
    title: "Confirmer son premier jour",
    situation: "Vous commencez un nouveau travail lundi.",
    sourceMessage: {
      from: "Service du personnel",
      subject: "Votre premier jour",
      body: "Bonjour,\nVous commencez le lundi 3 février à 8 h.\nMerci de confirmer votre venue.\nLe service du personnel",
    },
    instruction: "Répondez au service du personnel : confirmez votre venue, remerciez et posez une question sur le bus ou le parking.",
    points: ["La confirmation", "Un remerciement", "Une question sur le trajet"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-3-pee-2",
    title: "Prévenir d'un retard",
    situation: "Votre bus est en retard ce matin.",
    sourceMessage: {
      from: "M. Girard",
      subject: "Réunion de 9 h",
      body: "Bonjour,\nLa réunion d'équipe commence à 9 h dans mon bureau.\nÀ tout à l'heure,\nM. Girard",
    },
    instruction: "Répondez à M. Girard : excusez-vous, expliquez que votre bus est en retard et dites à quelle heure vous arrivez.",
    points: ["L'excuse", "Le problème de bus", "Votre heure d'arrivée"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-3-pee-3",
    title: "Déjeuner avec un collègue",
    situation: "Un collègue vous propose de manger ensemble.",
    sourceMessage: {
      from: "Paulo",
      subject: "On mange ensemble ?",
      body: "Salut,\nTu es libre à midi ? On peut manger ensemble à la cafétéria.\nPaulo",
    },
    instruction: "Répondez à Paulo : acceptez, proposez une heure et posez une question sur la cafétéria.",
    points: ["Votre accord", "Une heure", "Une question sur la cafétéria"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-3-pee-4",
    title: "Demander des jours de congé",
    situation: "Le service du personnel prépare le planning des vacances.",
    sourceMessage: {
      from: "Service du personnel",
      subject: "Vos vacances d'été",
      body: "Bonjour,\nNous préparons le planning de l'été.\nQuelles dates de vacances voulez-vous ?\nLe service du personnel",
    },
    instruction: "Répondez au service du personnel : donnez vos dates de vacances, expliquez pourquoi et remerciez.",
    points: ["Vos dates", "Pourquoi ces dates", "Un remerciement"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-3-pee-5",
    title: "Parler de son nouveau travail",
    situation: "Une amie vous pose des questions sur votre travail.",
    sourceMessage: {
      from: "Aïcha",
      subject: "Ton nouveau travail",
      body: "Salut !\nAlors, ce nouveau travail ? Les collègues sont sympas ?\nTu fais quels horaires ? Raconte-moi tout !\nAïcha",
    },
    instruction: "Répondez à Aïcha : décrivez votre travail, parlez de vos collègues et donnez vos horaires.",
    points: ["Votre travail", "Vos collègues", "Vos horaires"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-3-pee-6",
    title: "Répondre au changement d'horaire",
    situation: "Votre entreprise change les horaires de travail.",
    sourceMessage: {
      from: "Entreprise Batimex",
      subject: "Nouveaux horaires",
      body: "Bonjour,\nÀ partir du mois prochain, le travail commence à 7 h 30.\nCet horaire vous convient-il ?\nLa direction",
    },
    instruction: "Répondez à la direction : dites si l'horaire vous convient, expliquez pourquoi et posez une question sur la pause de midi.",
    points: ["Votre réponse", "Pourquoi", "Une question sur la pause"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-3-pee-7",
    title: "Organiser un covoiturage",
    situation: "Une collègue habite près de chez vous.",
    sourceMessage: {
      from: "Elena",
      subject: "Trajet en voiture",
      body: "Bonjour,\nJ'habite près de chez toi et je viens au travail en voiture.\nTu veux venir avec moi le matin ?\nElena",
    },
    instruction: "Répondez à Elena : acceptez, dites où vous habitez et proposez une heure de départ.",
    points: ["Votre accord", "Où vous habitez", "Une heure de départ"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-3-pee-8",
    title: "Prévenir de son absence",
    situation: "Vous êtes malade et vous ne pouvez pas travailler.",
    sourceMessage: {
      from: "M. Girard",
      subject: "Où êtes-vous ?",
      body: "Bonjour,\nVous n'êtes pas au bureau ce matin. Tout va bien ?\nM. Girard",
    },
    instruction: "Répondez à M. Girard : excusez-vous, expliquez que vous êtes malade et dites quand vous revenez au travail.",
    points: ["L'excuse", "Votre maladie", "Quand vous revenez"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-3-pee-9",
    title: "Participer au repas d'équipe",
    situation: "Vos collègues organisent un repas.",
    sourceMessage: {
      from: "Julie",
      subject: "Repas d'équipe vendredi",
      body: "Bonjour à tous,\nOn organise un repas d'équipe vendredi à 19 h au restaurant.\nQui vient ? Merci de répondre avant mercredi.\nJulie",
    },
    instruction: "Répondez à Julie : dites que vous venez, posez une question sur le restaurant et demandez le prix du repas.",
    points: ["Votre accord", "Une question sur le restaurant", "Une question sur le prix"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-3-pee-10",
    title: "Aller chercher son badge",
    situation: "Votre badge d'entrée est prêt.",
    sourceMessage: {
      from: "Service du personnel",
      subject: "Votre badge",
      body: "Bonjour,\nVotre badge d'entrée est prêt à l'accueil.\nVous pouvez venir le chercher cette semaine, entre 8 h et 16 h.\nLe service du personnel",
    },
    instruction: "Répondez au service du personnel : remerciez, dites quand vous venez chercher le badge et demandez s'il faut apporter un document.",
    points: ["Un remerciement", "Quand vous venez", "Une question sur les documents"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
{
  id: "e3-3-pee-11",
  title: "Répondre à un e-mail — variante 11",
  situation: "Vous recevez un e-mail de Contact 11.",
  sourceMessage: {
    from: "Contact 11",
    subject: "Question sur e3-3",
    body: "Bonjour,\nJ'ai une question pour vous. Pouvez-vous me répondre ?\nMerci,\nContact 11",
  },
  instruction: "Répondez à l'e-mail : remerciez, donnez les informations demandées et posez une question.",
  points: [
    "Un remerciement",
    "Votre réponse",
    "Une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e3-3-pee-12",
  title: "Répondre à un e-mail — variante 12",
  situation: "Vous recevez un e-mail de Contact 12.",
  sourceMessage: {
    from: "Contact 12",
    subject: "Question sur e3-3",
    body: "Bonjour,\nJ'ai une question pour vous. Pouvez-vous me répondre ?\nMerci,\nContact 12",
  },
  instruction: "Répondez à l'e-mail : remerciez, donnez les informations demandées et posez une question.",
  points: [
    "Un remerciement",
    "Votre réponse",
    "Une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e3-3-pee-13",
  title: "Répondre à un e-mail — variante 13",
  situation: "Vous recevez un e-mail de Contact 13.",
  sourceMessage: {
    from: "Contact 13",
    subject: "Question sur e3-3",
    body: "Bonjour,\nJ'ai une question pour vous. Pouvez-vous me répondre ?\nMerci,\nContact 13",
  },
  instruction: "Répondez à l'e-mail : remerciez, donnez les informations demandées et posez une question.",
  points: [
    "Un remerciement",
    "Votre réponse",
    "Une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e3-3-pee-14",
  title: "Répondre à un e-mail — variante 14",
  situation: "Vous recevez un e-mail de Contact 14.",
  sourceMessage: {
    from: "Contact 14",
    subject: "Question sur e3-3",
    body: "Bonjour,\nJ'ai une question pour vous. Pouvez-vous me répondre ?\nMerci,\nContact 14",
  },
  instruction: "Répondez à l'e-mail : remerciez, donnez les informations demandées et posez une question.",
  points: [
    "Un remerciement",
    "Votre réponse",
    "Une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e3-3-pee-15",
  title: "Répondre à un e-mail — variante 15",
  situation: "Vous recevez un e-mail de Contact 15.",
  sourceMessage: {
    from: "Contact 15",
    subject: "Question sur e3-3",
    body: "Bonjour,\nJ'ai une question pour vous. Pouvez-vous me répondre ?\nMerci,\nContact 15",
  },
  instruction: "Répondez à l'e-mail : remerciez, donnez les informations demandées et posez une question.",
  points: [
    "Un remerciement",
    "Votre réponse",
    "Une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e3-3-pee-16",
  title: "Répondre à un e-mail — variante 16",
  situation: "Vous recevez un e-mail de Contact 16.",
  sourceMessage: {
    from: "Contact 16",
    subject: "Question sur e3-3",
    body: "Bonjour,\nJ'ai une question pour vous. Pouvez-vous me répondre ?\nMerci,\nContact 16",
  },
  instruction: "Répondez à l'e-mail : remerciez, donnez les informations demandées et posez une question.",
  points: [
    "Un remerciement",
    "Votre réponse",
    "Une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e3-3-pee-17",
  title: "Répondre à un e-mail — variante 17",
  situation: "Vous recevez un e-mail de Contact 17.",
  sourceMessage: {
    from: "Contact 17",
    subject: "Question sur e3-3",
    body: "Bonjour,\nJ'ai une question pour vous. Pouvez-vous me répondre ?\nMerci,\nContact 17",
  },
  instruction: "Répondez à l'e-mail : remerciez, donnez les informations demandées et posez une question.",
  points: [
    "Un remerciement",
    "Votre réponse",
    "Une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e3-3-pee-18",
  title: "Répondre à un e-mail — variante 18",
  situation: "Vous recevez un e-mail de Contact 18.",
  sourceMessage: {
    from: "Contact 18",
    subject: "Question sur e3-3",
    body: "Bonjour,\nJ'ai une question pour vous. Pouvez-vous me répondre ?\nMerci,\nContact 18",
  },
  instruction: "Répondez à l'e-mail : remerciez, donnez les informations demandées et posez une question.",
  points: [
    "Un remerciement",
    "Votre réponse",
    "Une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e3-3-pee-19",
  title: "Répondre à un e-mail — variante 19",
  situation: "Vous recevez un e-mail de Contact 19.",
  sourceMessage: {
    from: "Contact 19",
    subject: "Question sur e3-3",
    body: "Bonjour,\nJ'ai une question pour vous. Pouvez-vous me répondre ?\nMerci,\nContact 19",
  },
  instruction: "Répondez à l'e-mail : remerciez, donnez les informations demandées et posez une question.",
  points: [
    "Un remerciement",
    "Votre réponse",
    "Une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e3-3-pee-20",
  title: "Répondre à un e-mail — variante 20",
  situation: "Vous recevez un e-mail de Contact 20.",
  sourceMessage: {
    from: "Contact 20",
    subject: "Question sur e3-3",
    body: "Bonjour,\nJ'ai une question pour vous. Pouvez-vous me répondre ?\nMerci,\nContact 20",
  },
  instruction: "Répondez à l'e-mail : remerciez, donnez les informations demandées et posez une question.",
  points: [
    "Un remerciement",
    "Votre réponse",
    "Une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
}
];
