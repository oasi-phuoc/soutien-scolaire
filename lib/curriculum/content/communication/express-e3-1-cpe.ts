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

/* ── Compréhension écrite — E3.1 À l'école / à l'université ── */

const CE_TEXT_1 = `Panneau à l'entrée du collège

Le sujet principal est les mathématiques. Mme Martin donne l'information.
Le moment indiqué est lundi à 8 h 15. Le rendez-vous est en salle 12.
Consigne : prendre un cahier bleu. Détail : Les parents restent devant le portail.
Merci de confirmer la bonne réception.
Merci de votre attention et de votre patience.
Une confirmation arrivera ensuite.
Le lieu est facile à trouver.`;

const CE_POOL_1 = buildExpressPool("e3-1-1", [
  q({
    id: "ce-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["un panneau", "une facture", "une recette"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "un panneau",
    vfQ: "Le texte mentionne un panneau.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quelle matière est mentionnée ?",
    text: ["les mathématiques", "la cuisine", "le dessin libre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La matière est _________.",
    fill: "les mathématiques",
    vfQ: "Le texte mentionne les mathématiques.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quand cela se passe-t-il ?",
    text: ["lundi à 8 h 15", "à minuit", "en 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "lundi à 8 h 15",
    vfQ: "Le texte mentionne lundi à 8 h 15.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Où cela se passe-t-il ?",
    text: ["en salle 12", "à la plage", "à l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le lieu est _________.",
    fill: "en salle 12",
    vfQ: "Le texte mentionne en salle 12.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Qui est mentionné ?",
    text: ["Mme Martin", "un voisin", "le facteur"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La personne est _________.",
    fill: "Mme Martin",
    vfQ: "Le texte mentionne Mme Martin.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que faut-il faire ?",
    text: ["prendre un cahier bleu", "acheter une voiture", "partir loin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "prendre un cahier bleu",
    vfQ: "Le texte mentionne prendre un cahier bleu.",
    vfC: 0,
  }),
]);
const CE_TEXT_2 = `Message vocal d'un ami

Petit message pour le français.
M. Girard propose un rendez-vous devant la salle 5 dans dix minutes.
Action demandée : entrer doucement.
Le chapitre 3 est sur le bureau.
Tu peux m'appeler si c'est plus simple pour toi.
J'espère que tu vas bien et que tout se passe comme prévu.
N'oublie pas de me confirmer dès que tu peux.
Sinon on peut aussi en parler demain matin.
Vous pouvez venir accompagné(e) si vous le souhaitez.
Merci d'avance pour ta réponse.`;

const CE_POOL_2 = buildExpressPool("e3-1-2", [
  q({
    id: "ce-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["un message vocal", "une facture", "une recette"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "un message vocal",
    vfQ: "Le texte mentionne un message vocal.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quelle matière est mentionnée ?",
    text: ["le français", "la cuisine", "le dessin libre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La matière est _________.",
    fill: "le français",
    vfQ: "Le texte mentionne le français.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quand cela se passe-t-il ?",
    text: ["dans dix minutes", "à minuit", "en 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "dans dix minutes",
    vfQ: "Le texte mentionne dans dix minutes.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Où cela se passe-t-il ?",
    text: ["devant la salle 5", "à la plage", "à l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le lieu est _________.",
    fill: "devant la salle 5",
    vfQ: "Le texte mentionne devant la salle 5.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Qui est mentionné ?",
    text: ["M. Girard", "un voisin", "le facteur"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La personne est _________.",
    fill: "M. Girard",
    vfQ: "Le texte mentionne M. Girard.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que faut-il faire ?",
    text: ["entrer doucement", "acheter une voiture", "partir loin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "entrer doucement",
    vfQ: "Le texte mentionne entrer doucement.",
    vfC: 0,
  }),
]);
const CE_TEXT_3 = `Page d'agenda de Léo

À noter : l'anglais.
On voit Mme Rossi à la bibliothèque. Le moment choisi est mercredi à 9 h.
Après cela, action simple : rendre le roman.
Rappel : Détail : Un contrôle de vocabulaire suit la pause.
Les horaires habituels restent les mêmes.
Une question ? Écrivez ou téléphonez.
Merci encore, et à bientôt.
Tout est organisé pour que ce soit simple.`;

const CE_POOL_3 = buildExpressPool("e3-1-3", [
  q({
    id: "ce-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["une page d'agenda", "une facture", "une recette"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "une page d'agenda",
    vfQ: "Le texte mentionne une page d'agenda.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quelle matière est mentionnée ?",
    text: ["l'anglais", "la cuisine", "le dessin libre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La matière est _________.",
    fill: "l'anglais",
    vfQ: "Le texte mentionne l'anglais.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quand cela se passe-t-il ?",
    text: ["mercredi à 9 h", "à minuit", "en 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "mercredi à 9 h",
    vfQ: "Le texte mentionne mercredi à 9 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Où cela se passe-t-il ?",
    text: ["à la bibliothèque", "à la plage", "à l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le lieu est _________.",
    fill: "à la bibliothèque",
    vfQ: "Le texte mentionne à la bibliothèque.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
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
    id: "ce-q6",
    textQ: "Que faut-il faire ?",
    text: ["rendre le roman", "acheter une voiture", "partir loin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "rendre le roman",
    vfQ: "Le texte mentionne rendre le roman.",
    vfC: 0,
  }),
]);
const CE_TEXT_4 = `Billet collé sur la porte

Information courte. Mme Petit parle de les sciences.
Le lieu change ou se confirme : en salle 8.
Le moment est ce matin à 13 h. La consigne reste claire : travailler par groupes de trois.
Le laboratoire 2 est fermé.
Lisez bien jusqu'à la fin, s'il vous plaît.
Vous pouvez demander de l'aide si besoin.
Les informations importantes sont déjà notées plus haut.
Merci de confirmer la bonne réception.`;

const CE_POOL_4 = buildExpressPool("e3-1-4", [
  q({
    id: "ce-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["un billet", "une facture", "une recette"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "un billet",
    vfQ: "Le texte mentionne un billet.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quelle matière est mentionnée ?",
    text: ["les sciences", "la cuisine", "le dessin libre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La matière est _________.",
    fill: "les sciences",
    vfQ: "Le texte mentionne les sciences.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quand cela se passe-t-il ?",
    text: ["ce matin à 13 h", "à minuit", "en 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "ce matin à 13 h",
    vfQ: "Le texte mentionne ce matin à 13 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
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
    id: "ce-q5",
    textQ: "Qui est mentionné ?",
    text: ["Mme Petit", "un voisin", "le facteur"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La personne est _________.",
    fill: "Mme Petit",
    vfQ: "Le texte mentionne Mme Petit.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que faut-il faire ?",
    text: ["travailler par groupes de trois", "acheter une voiture", "partir loin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "travailler par groupes de trois",
    vfQ: "Le texte mentionne travailler par groupes de trois.",
    vfC: 0,
  }),
]);
const CE_TEXT_5 = `Programme de la sortie scolaire

Aujourd'hui, on organise l'histoire.
Départ ou début jeudi à 8 h 30. Le groupe arrive au musée d'histoire.
M. Weber explique la suite. Pendant l'activité : garder son plan.
Le pique-nique se prend dans le jardin.
N'oubliez pas de vérifier la date.
Passe le bonjour à tout le monde.
Bonne journée à toutes et à tous.
Ce document complète les informations déjà données.`;

const CE_POOL_5 = buildExpressPool("e3-1-5", [
  q({
    id: "ce-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["un programme", "une facture", "une recette"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "un programme",
    vfQ: "Le texte mentionne un programme.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quelle matière est mentionnée ?",
    text: ["l'histoire", "la cuisine", "le dessin libre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La matière est _________.",
    fill: "l'histoire",
    vfQ: "Le texte mentionne l'histoire.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quand cela se passe-t-il ?",
    text: ["jeudi à 8 h 30", "à minuit", "en 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "jeudi à 8 h 30",
    vfQ: "Le texte mentionne jeudi à 8 h 30.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Où cela se passe-t-il ?",
    text: ["au musée d'histoire", "à la plage", "à l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le lieu est _________.",
    fill: "au musée d'histoire",
    vfQ: "Le texte mentionne au musée d'histoire.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
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
    id: "ce-q6",
    textQ: "Que faut-il faire ?",
    text: ["garder son plan", "acheter une voiture", "partir loin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "garder son plan",
    vfQ: "Le texte mentionne garder son plan.",
    vfC: 0,
  }),
]);
const CE_TEXT_6 = `Ticket de la bibliothèque

Bonjour. Le dossier concerne la lecture.
Il est possible de voir Mme Costa avant mardi prochain.
Le point de rendez-vous est au bureau d'accueil.
Pour continuer, action nécessaire : présenter la carte d'étudiant. Détail : Le livre réservé est Le Petit Prince.
N'oubliez pas de vérifier la date.
Nous traitons votre demande rapidement.
Bonne journée à toutes et à tous.
Ce document complète les informations déjà données.`;

const CE_POOL_6 = buildExpressPool("e3-1-6", [
  q({
    id: "ce-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["un ticket", "une facture", "une recette"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "un ticket",
    vfQ: "Le texte mentionne un ticket.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
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
    id: "ce-q3",
    textQ: "Quand cela se passe-t-il ?",
    text: ["avant mardi prochain", "à minuit", "en 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "avant mardi prochain",
    vfQ: "Le texte mentionne avant mardi prochain.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
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
    id: "ce-q5",
    textQ: "Qui est mentionné ?",
    text: ["Mme Costa", "un voisin", "le facteur"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La personne est _________.",
    fill: "Mme Costa",
    vfQ: "Le texte mentionne Mme Costa.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
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
const CE_TEXT_7 = `Invitation aux parents

Message pour la famille ou le groupe.
la géographie est prévu vendredi entre 16 h et 17 h, dans le couloir.
M. Blanc accueille les personnes.
Sans confirmation, la place n'est pas garantie.
Merci de garder ce document avec vous.
Les informations sont valables pour cette semaine.
Si quelque chose n'est pas clair, posez la question.
Nous vous souhaitons une excellente journée.
Merci : entrer par la porte principale. Détail : Les élèves présentent leur pays préféré.`;

const CE_POOL_7 = buildExpressPool("e3-1-7", [
  q({
    id: "ce-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["une invitation", "une facture", "une recette"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "une invitation",
    vfQ: "Le texte mentionne une invitation.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quelle matière est mentionnée ?",
    text: ["la géographie", "la cuisine", "le dessin libre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La matière est _________.",
    fill: "la géographie",
    vfQ: "Le texte mentionne la géographie.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quand cela se passe-t-il ?",
    text: ["vendredi entre 16 h et 17 h", "à minuit", "en 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "vendredi entre 16 h et 17 h",
    vfQ: "Le texte mentionne vendredi entre 16 h et 17 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Où cela se passe-t-il ?",
    text: ["dans le couloir", "à la plage", "à l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le lieu est _________.",
    fill: "dans le couloir",
    vfQ: "Le texte mentionne dans le couloir.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Qui est mentionné ?",
    text: ["M. Blanc", "un voisin", "le facteur"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La personne est _________.",
    fill: "M. Blanc",
    vfQ: "Le texte mentionne M. Blanc.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que faut-il faire ?",
    text: ["entrer par la porte principale", "acheter une voiture", "partir loin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "entrer par la porte principale",
    vfQ: "Le texte mentionne entrer par la porte principale.",
    vfC: 0,
  }),
]);
const CE_TEXT_8 = `Notification de l'application école

Notification : changement autour de l'allemand.
La personne à suivre est M. Müller. Le lieu est en salle 7.
Le moment indiqué est aujourd'hui après la récréation. Action demandée : ouvrir les cahiers.
La séance commence par une dictée.
Ce document complète les informations déjà données.
Nous comptons sur vous.
Voici quelques détails utiles pour la suite.
Merci de votre attention et de votre patience.`;

const CE_POOL_8 = buildExpressPool("e3-1-8", [
  q({
    id: "ce-q1",
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
    id: "ce-q2",
    textQ: "Quelle matière est mentionnée ?",
    text: ["l'allemand", "la cuisine", "le dessin libre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La matière est _________.",
    fill: "l'allemand",
    vfQ: "Le texte mentionne l'allemand.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quand cela se passe-t-il ?",
    text: ["aujourd'hui après la récréation", "à minuit", "en 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "aujourd'hui après la récréation",
    vfQ: "Le texte mentionne aujourd'hui après la récréation.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Où cela se passe-t-il ?",
    text: ["en salle 7", "à la plage", "à l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le lieu est _________.",
    fill: "en salle 7",
    vfQ: "Le texte mentionne en salle 7.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Qui est mentionné ?",
    text: ["M. Müller", "un voisin", "le facteur"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La personne est _________.",
    fill: "M. Müller",
    vfQ: "Le texte mentionne M. Müller.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que faut-il faire ?",
    text: ["ouvrir les cahiers", "acheter une voiture", "partir loin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "ouvrir les cahiers",
    vfQ: "Le texte mentionne ouvrir les cahiers.",
    vfC: 0,
  }),
]);
const CE_TEXT_9 = `Carte d'examen

Carte de rendez-vous.
Sujet : la chimie. Présence de le surveillant.
Entrée ou arrivée dans l'amphi B mercredi 20 avril à 13 h 45.
Avant le début, consigne : éteindre le téléphone. Détail : La calculatrice simple est autorisée.
En cas de perte d'objet, passez à l'accueil.
Merci encore, et à bientôt.
Tout est organisé pour que ce soit simple.
Le contact est indiqué dans le message.`;

const CE_POOL_9 = buildExpressPool("e3-1-9", [
  q({
    id: "ce-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["une carte d'examen", "une facture", "une recette"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "une carte d'examen",
    vfQ: "Le texte mentionne une carte d'examen.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
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
    id: "ce-q3",
    textQ: "Quand cela se passe-t-il ?",
    text: ["mercredi 20 avril à 13 h 45", "à minuit", "en 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "mercredi 20 avril à 13 h 45",
    vfQ: "Le texte mentionne mercredi 20 avril à 13 h 45.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
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
    id: "ce-q5",
    textQ: "Qui est mentionné ?",
    text: ["le surveillant", "un voisin", "le facteur"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La personne est _________.",
    fill: "le surveillant",
    vfQ: "Le texte mentionne le surveillant.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que faut-il faire ?",
    text: ["éteindre le téléphone", "acheter une voiture", "partir loin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "éteindre le téléphone",
    vfQ: "Le texte mentionne éteindre le téléphone.",
    vfC: 0,
  }),
]);
const CE_TEXT_10 = `Règles affichées au laboratoire

Règle simple : attendre M. Leroy.
Le sujet est la physique. Le groupe arrive près de la porte avant le cours.
Personne ne commence avant l'action suivante : mettre la blouse blanche.
Le travail se fait à deux.
Les horaires habituels restent les mêmes.
Une question ? Écrivez ou téléphonez.
Merci encore, et à bientôt.
Tout est organisé pour que ce soit simple.`;

const CE_POOL_10 = buildExpressPool("e3-1-10", [
  q({
    id: "ce-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["des règles", "une facture", "une recette"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "des règles",
    vfQ: "Le texte mentionne des règles.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
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
    id: "ce-q3",
    textQ: "Quand cela se passe-t-il ?",
    text: ["avant le cours", "à minuit", "en 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "avant le cours",
    vfQ: "Le texte mentionne avant le cours.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Où cela se passe-t-il ?",
    text: ["près de la porte", "à la plage", "à l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le lieu est _________.",
    fill: "près de la porte",
    vfQ: "Le texte mentionne près de la porte.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Qui est mentionné ?",
    text: ["M. Leroy", "un voisin", "le facteur"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La personne est _________.",
    fill: "M. Leroy",
    vfQ: "Le texte mentionne M. Leroy.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que faut-il faire ?",
    text: ["mettre la blouse blanche", "acheter une voiture", "partir loin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "mettre la blouse blanche",
    vfQ: "Le texte mentionne mettre la blouse blanche.",
    vfC: 0,
  }),
]);
const CE_TEXT_11 = `Mot du surveillant

Organisation modifiée.
le surveillant accompagne le groupe au foyer.
Ensuite, l'histoire reprend après la pause de 10 h 20.
Pendant l'attente, action calme : jouer à des jeux calmes. Détail : La cour est trop mouillée.
Le contact est indiqué dans le message.
N'oubliez pas de vérifier la date.
Le personnel peut répondre en français simple.
Bonne journée à toutes et à tous.
Ce document complète les informations déjà données.`;

const CE_POOL_11 = buildExpressPool("e3-1-11", [
  q({
    id: "ce-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["un mot", "une facture", "une recette"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "un mot",
    vfQ: "Le texte mentionne un mot.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quelle matière est mentionnée ?",
    text: ["l'histoire", "la cuisine", "le dessin libre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La matière est _________.",
    fill: "l'histoire",
    vfQ: "Le texte mentionne l'histoire.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quand cela se passe-t-il ?",
    text: ["après la pause de 10 h 20", "à minuit", "en 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "après la pause de 10 h 20",
    vfQ: "Le texte mentionne après la pause de 10 h 20.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Où cela se passe-t-il ?",
    text: ["au foyer", "à la plage", "à l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le lieu est _________.",
    fill: "au foyer",
    vfQ: "Le texte mentionne au foyer.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Qui est mentionné ?",
    text: ["le surveillant", "un voisin", "le facteur"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La personne est _________.",
    fill: "le surveillant",
    vfQ: "Le texte mentionne le surveillant.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que faut-il faire ?",
    text: ["jouer à des jeux calmes", "acheter une voiture", "partir loin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "jouer à des jeux calmes",
    vfQ: "Le texte mentionne jouer à des jeux calmes.",
    vfC: 0,
  }),
]);
const CE_TEXT_12 = `Tract du club devoirs

Besoin d'aide pour le français et les maths ?
La prochaine rencontre est mardi à 16 h, dans la salle polyvalente.
deux étudiants note les prénoms. Pour participer, action simple : s'inscrire au secrétariat.
L'aide est gratuite.
En cas de perte d'objet, passez à l'accueil.
Merci encore, et à bientôt.
Tout est organisé pour que ce soit simple.
Le contact est indiqué dans le message.
N'oubliez pas de vérifier la date.`;

const CE_POOL_12 = buildExpressPool("e3-1-12", [
  q({
    id: "ce-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["un tract", "une facture", "une recette"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "un tract",
    vfQ: "Le texte mentionne un tract.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quelle matière est mentionnée ?",
    text: ["le français et les maths", "la cuisine", "le dessin libre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La matière est _________.",
    fill: "le français et les maths",
    vfQ: "Le texte mentionne le français et les maths.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quand cela se passe-t-il ?",
    text: ["mardi à 16 h", "à minuit", "en 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "mardi à 16 h",
    vfQ: "Le texte mentionne mardi à 16 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
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
    id: "ce-q5",
    textQ: "Qui est mentionné ?",
    text: ["deux étudiants", "un voisin", "le facteur"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La personne est _________.",
    fill: "deux étudiants",
    vfQ: "Le texte mentionne deux étudiants.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que faut-il faire ?",
    text: ["s'inscrire au secrétariat", "acheter une voiture", "partir loin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "s'inscrire au secrétariat",
    vfQ: "Le texte mentionne s'inscrire au secrétariat.",
    vfC: 0,
  }),
]);
const CE_TEXT_13 = `Carnet de liaison

Madame, Monsieur, voici une information sur les sciences.
La présentation ou le rendez-vous est prévu lundi, devant la classe.
votre enfant confirmera demain. Consigne : signer le mot ce soir.
L'exposé porte sur une planète.
Voici quelques détails utiles pour la suite.
Lisez bien jusqu'à la fin, s'il vous plaît.
Vous pouvez demander de l'aide si besoin.
Les informations importantes sont déjà notées plus haut.
J'espère que tout se passe bien de ton côté.`;

const CE_POOL_13 = buildExpressPool("e3-1-13", [
  q({
    id: "ce-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["un carnet de liaison", "une facture", "une recette"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "un carnet de liaison",
    vfQ: "Le texte mentionne un carnet de liaison.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quelle matière est mentionnée ?",
    text: ["les sciences", "la cuisine", "le dessin libre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La matière est _________.",
    fill: "les sciences",
    vfQ: "Le texte mentionne les sciences.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quand cela se passe-t-il ?",
    text: ["lundi", "à minuit", "en 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "lundi",
    vfQ: "Le texte mentionne lundi.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Où cela se passe-t-il ?",
    text: ["devant la classe", "à la plage", "à l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le lieu est _________.",
    fill: "devant la classe",
    vfQ: "Le texte mentionne devant la classe.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Qui est mentionné ?",
    text: ["votre enfant", "un voisin", "le facteur"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La personne est _________.",
    fill: "votre enfant",
    vfQ: "Le texte mentionne votre enfant.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que faut-il faire ?",
    text: ["signer le mot ce soir", "acheter une voiture", "partir loin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "signer le mot ce soir",
    vfQ: "Le texte mentionne signer le mot ce soir.",
    vfC: 0,
  }),
]);
const CE_TEXT_14 = `Annonce au micro

Attention, changement pour la musique.
M. Rossi ne peut pas garder l'organisation habituelle.
Rendez-vous en étude mardi prochain. Le groupe doit rester calme.
Le cours de 15 h est annulé.
Si quelque chose n'est pas clair, posez la question.
Pensez à vérifier la date et le lieu.
Une réponse rapide nous aide beaucoup.
Vous pouvez venir avec un ami ou un membre de la famille.
En cas de changement, un nouvel avis sera publié.`;

const CE_POOL_14 = buildExpressPool("e3-1-14", [
  q({
    id: "ce-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["une annonce au micro", "une facture", "une recette"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "une annonce au micro",
    vfQ: "Le texte mentionne une annonce au micro.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
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
    id: "ce-q3",
    textQ: "Quand cela se passe-t-il ?",
    text: ["mardi prochain", "à minuit", "en 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "mardi prochain",
    vfQ: "Le texte mentionne mardi prochain.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Où cela se passe-t-il ?",
    text: ["en étude", "à la plage", "à l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le lieu est _________.",
    fill: "en étude",
    vfQ: "Le texte mentionne en étude.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Qui est mentionné ?",
    text: ["M. Rossi", "un voisin", "le facteur"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La personne est _________.",
    fill: "M. Rossi",
    vfQ: "Le texte mentionne M. Rossi.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que faut-il faire ?",
    text: ["rester calme", "acheter une voiture", "partir loin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "rester calme",
    vfQ: "Le texte mentionne rester calme.",
    vfC: 0,
  }),
]);
const CE_TEXT_15 = `Forum des étudiants

Bonjour, on cherche deux personnes pour l'informatique.
La rencontre est en salle info 4 jeudi de 14 h à 16 h.
Karim apporte le matériel. Si tu viens, action demandée : écrire son nom.
Le projet est une application météo.
Tout est organisé pour que ce soit simple.
Bonne journée à toutes et à tous.
Ce document complète les informations déjà données.
Nous comptons sur vous.
Je prépare déjà tout pour que ce soit prêt.`;

const CE_POOL_15 = buildExpressPool("e3-1-15", [
  q({
    id: "ce-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["un message de forum", "une facture", "une recette"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "un message de forum",
    vfQ: "Le texte mentionne un message de forum.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quelle matière est mentionnée ?",
    text: ["l'informatique", "la cuisine", "le dessin libre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La matière est _________.",
    fill: "l'informatique",
    vfQ: "Le texte mentionne l'informatique.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quand cela se passe-t-il ?",
    text: ["jeudi de 14 h à 16 h", "à minuit", "en 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "jeudi de 14 h à 16 h",
    vfQ: "Le texte mentionne jeudi de 14 h à 16 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
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
    id: "ce-q5",
    textQ: "Qui est mentionné ?",
    text: ["Karim", "un voisin", "le facteur"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La personne est _________.",
    fill: "Karim",
    vfQ: "Le texte mentionne Karim.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que faut-il faire ?",
    text: ["écrire son nom", "acheter une voiture", "partir loin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "écrire son nom",
    vfQ: "Le texte mentionne écrire son nom.",
    vfC: 0,
  }),
]);
const CE_TEXT_16 = `Fiche de tutorat

Séance de révision ou de préparation : le droit.
Prof. Dubois répond aux questions mardi.
Le groupe travaille dans l'amphi C, puis action finale : lire un petit cas.
Les documents sont autorisés.
Apportez une pièce d'identité si possible.
Le lieu est accessible en bus et à pied.
Un plan est disponible sur demande.
Nous vous attendons avec plaisir.
Les places sont limitées, merci de confirmer.
Conservez le numéro de contact indiqué.`;

const CE_POOL_16 = buildExpressPool("e3-1-16", [
  q({
    id: "ce-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["une fiche de tutorat", "une facture", "une recette"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "une fiche de tutorat",
    vfQ: "Le texte mentionne une fiche de tutorat.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quelle matière est mentionnée ?",
    text: ["le droit", "la cuisine", "le dessin libre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La matière est _________.",
    fill: "le droit",
    vfQ: "Le texte mentionne le droit.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quand cela se passe-t-il ?",
    text: ["mardi", "à minuit", "en 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "mardi",
    vfQ: "Le texte mentionne mardi.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
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
    id: "ce-q5",
    textQ: "Qui est mentionné ?",
    text: ["Prof. Dubois", "un voisin", "le facteur"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La personne est _________.",
    fill: "Prof. Dubois",
    vfQ: "Le texte mentionne Prof. Dubois.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que faut-il faire ?",
    text: ["lire un petit cas", "acheter une voiture", "partir loin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "lire un petit cas",
    vfQ: "Le texte mentionne lire un petit cas.",
    vfC: 0,
  }),
]);
const CE_TEXT_17 = `Mini article du journal de l'école

Petit article. Le sujet la biologie avance bien.
Dr. Martin montre un exemple près de la serre.
vendredi, le groupe compare ses notes. Action finale : dessiner les plantes.
Les élèves observent des graines.
Tout est organisé pour que ce soit simple.
Le contact est indiqué dans le message.
N'oubliez pas de vérifier la date.
Merci de confirmer la bonne réception.`;

const CE_POOL_17 = buildExpressPool("e3-1-17", [
  q({
    id: "ce-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["un mini article", "une facture", "une recette"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "un mini article",
    vfQ: "Le texte mentionne un mini article.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quelle matière est mentionnée ?",
    text: ["la biologie", "la cuisine", "le dessin libre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La matière est _________.",
    fill: "la biologie",
    vfQ: "Le texte mentionne la biologie.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
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
    id: "ce-q4",
    textQ: "Où cela se passe-t-il ?",
    text: ["près de la serre", "à la plage", "à l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le lieu est _________.",
    fill: "près de la serre",
    vfQ: "Le texte mentionne près de la serre.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
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
    id: "ce-q6",
    textQ: "Que faut-il faire ?",
    text: ["dessiner les plantes", "acheter une voiture", "partir loin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "dessiner les plantes",
    vfQ: "Le texte mentionne dessiner les plantes.",
    vfC: 0,
  }),
]);
const CE_TEXT_18 = `Message du professeur d'EPS

Bonjour à tous. Pour l'EPS, on sort ou on se déplace.
Le rendez-vous est au stade municipal demain à 10 h.
M. Antoine prend la liste. Consigne obligatoire : porter des baskets propres.
Le rendez-vous est devant l'arrêt de tram.
Le message est aussi envoyé au groupe WhatsApp.
Si vous changez d'avis, dites-le sans attendre.
On peut décaler d'une demi-heure si besoin.
En cas de changement, un nouvel avis sera publié.`;

const CE_POOL_18 = buildExpressPool("e3-1-18", [
  q({
    id: "ce-q1",
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
    id: "ce-q2",
    textQ: "Quelle matière est mentionnée ?",
    text: ["l'EPS", "la cuisine", "le dessin libre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La matière est _________.",
    fill: "l'EPS",
    vfQ: "Le texte mentionne l'EPS.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quand cela se passe-t-il ?",
    text: ["demain à 10 h", "à minuit", "en 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "demain à 10 h",
    vfQ: "Le texte mentionne demain à 10 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Où cela se passe-t-il ?",
    text: ["au stade municipal", "à la plage", "à l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le lieu est _________.",
    fill: "au stade municipal",
    vfQ: "Le texte mentionne au stade municipal.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
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
    id: "ce-q6",
    textQ: "Que faut-il faire ?",
    text: ["porter des baskets propres", "acheter une voiture", "partir loin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "porter des baskets propres",
    vfQ: "Le texte mentionne porter des baskets propres.",
    vfC: 0,
  }),
]);
const CE_TEXT_19 = `Page du portail étudiant

Nouvelle tâche : l'économie.
La ressource ou l'adresse est dans l'onglet cours. Fin prévue avant jeudi soir.
Mme Kim vérifiera ensuite. Pour répondre, action demandée : répondre aux cinq questions.
Une vidéo courte est disponible.
Tout est organisé pour que ce soit simple.
Le contact est indiqué dans le message.
N'oubliez pas de vérifier la date.
Respectez la file d'attente, s'il vous plaît.`;

const CE_POOL_19 = buildExpressPool("e3-1-19", [
  q({
    id: "ce-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["une page du portail", "une facture", "une recette"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "une page du portail",
    vfQ: "Le texte mentionne une page du portail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quelle matière est mentionnée ?",
    text: ["l'économie", "la cuisine", "le dessin libre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La matière est _________.",
    fill: "l'économie",
    vfQ: "Le texte mentionne l'économie.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quand cela se passe-t-il ?",
    text: ["avant jeudi soir", "à minuit", "en 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "avant jeudi soir",
    vfQ: "Le texte mentionne avant jeudi soir.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Où cela se passe-t-il ?",
    text: ["dans l'onglet cours", "à la plage", "à l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le lieu est _________.",
    fill: "dans l'onglet cours",
    vfQ: "Le texte mentionne dans l'onglet cours.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Qui est mentionné ?",
    text: ["Mme Kim", "un voisin", "le facteur"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La personne est _________.",
    fill: "Mme Kim",
    vfQ: "Le texte mentionne Mme Kim.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que faut-il faire ?",
    text: ["répondre aux cinq questions", "acheter une voiture", "partir loin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "répondre aux cinq questions",
    vfQ: "Le texte mentionne répondre aux cinq questions.",
    vfC: 0,
  }),
]);
const CE_TEXT_20 = `Carte de la journée interdisciplinaire

Journée spéciale autour de l'eau.
Le matin, passage dans le hall avec l'équipe pédagogique.
La présentation commence vendredi à 16 h. Chaque groupe doit préparer une affiche.
Les familles sont invitées.
Le temps est beau, alors tout devrait bien se passer.
Prenez un pull, au cas où il ferait plus frais.
Le parking le plus proche est gratuit le soir.
Vous pouvez venir en vélo s'il fait beau.
Nous vous souhaitons une excellente journée.`;

const CE_POOL_20 = buildExpressPool("e3-1-20", [
  q({
    id: "ce-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["une carte de journée", "une facture", "une recette"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "une carte de journée",
    vfQ: "Le texte mentionne une carte de journée.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quelle matière est mentionnée ?",
    text: ["l'eau", "la cuisine", "le dessin libre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La matière est _________.",
    fill: "l'eau",
    vfQ: "Le texte mentionne l'eau.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quand cela se passe-t-il ?",
    text: ["vendredi à 16 h", "à minuit", "en 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "vendredi à 16 h",
    vfQ: "Le texte mentionne vendredi à 16 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
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
    id: "ce-q5",
    textQ: "Qui est mentionné ?",
    text: ["l'équipe pédagogique", "un voisin", "le facteur"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La personne est _________.",
    fill: "l'équipe pédagogique",
    vfQ: "Le texte mentionne l'équipe pédagogique.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que faut-il faire ?",
    text: ["préparer une affiche", "acheter une voiture", "partir loin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut _________.",
    fill: "préparer une affiche",
    vfQ: "Le texte mentionne préparer une affiche.",
    vfC: 0,
  }),
]);

export const E3_1_CE: CommunicationExercise[] = [
  readingPoolExercise({
  id: "e3-1-1",
  readingText: CE_TEXT_1,
  questionPool: CE_POOL_1
}),
  readingPoolExercise({
  id: "e3-1-2",
  readingText: CE_TEXT_2,
  questionPool: CE_POOL_2
}),
  readingPoolExercise({
  id: "e3-1-3",
  readingText: CE_TEXT_3,
  questionPool: CE_POOL_3
}),
  readingPoolExercise({
  id: "e3-1-4",
  readingText: CE_TEXT_4,
  questionPool: CE_POOL_4
}),
  readingPoolExercise({
  id: "e3-1-5",
  readingText: CE_TEXT_5,
  questionPool: CE_POOL_5
}),
  readingPoolExercise({
  id: "e3-1-6",
  readingText: CE_TEXT_6,
  questionPool: CE_POOL_6
}),
  readingPoolExercise({
  id: "e3-1-7",
  readingText: CE_TEXT_7,
  questionPool: CE_POOL_7
}),
  readingPoolExercise({
  id: "e3-1-8",
  readingText: CE_TEXT_8,
  questionPool: CE_POOL_8
}),
  readingPoolExercise({
  id: "e3-1-9",
  readingText: CE_TEXT_9,
  questionPool: CE_POOL_9
}),
  readingPoolExercise({
  id: "e3-1-10",
  readingText: CE_TEXT_10,
  questionPool: CE_POOL_10
}),
  readingPoolExercise({
  id: "e3-1-11",
  readingText: CE_TEXT_11,
  questionPool: CE_POOL_11
}),
  readingPoolExercise({
  id: "e3-1-12",
  readingText: CE_TEXT_12,
  questionPool: CE_POOL_12
}),
  readingPoolExercise({
  id: "e3-1-13",
  readingText: CE_TEXT_13,
  questionPool: CE_POOL_13
}),
  readingPoolExercise({
  id: "e3-1-14",
  readingText: CE_TEXT_14,
  questionPool: CE_POOL_14
}),
  readingPoolExercise({
  id: "e3-1-15",
  readingText: CE_TEXT_15,
  questionPool: CE_POOL_15
}),
  readingPoolExercise({
  id: "e3-1-16",
  readingText: CE_TEXT_16,
  questionPool: CE_POOL_16
}),
  readingPoolExercise({
  id: "e3-1-17",
  readingText: CE_TEXT_17,
  questionPool: CE_POOL_17
}),
  readingPoolExercise({
  id: "e3-1-18",
  readingText: CE_TEXT_18,
  questionPool: CE_POOL_18
}),
  readingPoolExercise({
  id: "e3-1-19",
  readingText: CE_TEXT_19,
  questionPool: CE_POOL_19
}),
  readingPoolExercise({
  id: "e3-1-20",
  readingText: CE_TEXT_20,
  questionPool: CE_POOL_20
}),
];

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
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
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
      { role: "A", text: "Enchanté(e) de te connaître !" },
      { role: "B", text: "Moi aussi. À tout à l'heure !" },
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
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
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
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
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
      { role: "A", text: "Bon courage pour la suite !" },
      { role: "B", text: "Merci, toi aussi !" },
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
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
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
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
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
      { role: "A", text: "Merci pour votre aide." },
      { role: "B", text: "Je vous en prie. Bonne journée !" },
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
      { role: "A", text: "Merci pour votre aide." },
      { role: "B", text: "Je vous en prie. Bonne journée !" },
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
      { role: "A", text: "Parfait, j'ai toutes les infos." },
      { role: "B", text: "Super. À bientôt !" },
],
  },
{
  id: "e3-1-po-11",
  title: "Demander une information sur la vie scolaire",
  context: "Vous voulez inscrire mon fils à la cantine.",
  roleA: { title: "La secrétaire", vous: "la secrétaire de l'école" },
  roleB: { title: "Vous", vous: "la personne qui parle" },
  lines: [
    { role: "A", text: "Bonjour, je peux vous renseigner ?" },
    { role: "B", text: "Bonjour, je voudrais savoir comment faire pour inscrire mon fils à la cantine." },
    { role: "A", text: "Bien sûr. Les repas commencent lundi." },
    { role: "B", text: "D'accord. Est-ce qu'il faut réserver avant ?" },
    { role: "A", text: "Oui. Il faut choisir les jours." },
    { role: "B", text: "Très bien. Je peux le faire aujourd'hui ?" },
    { role: "A", text: "Oui, si vous avez quelques minutes." },
    { role: "B", text: "Parfait, je commence tout de suite." },
    { role: "A", text: "Je reste disponible si vous avez une question." },
    { role: "B", text: "Merci beaucoup pour votre aide." },
  ],
},
{
  id: "e3-1-po-12",
  title: "Expliquer un problème avec la vie scolaire",
  context: "Vous expliquez un problème : ma fille a perdu son carnet.",
  roleA: { title: "La secrétaire", vous: "la secrétaire de l'école" },
  roleB: { title: "Vous", vous: "la personne qui parle" },
  lines: [
    { role: "A", text: "Bonjour, qu'est-ce qui se passe ?" },
    { role: "B", text: "Bonjour, j'ai un problème : ma fille a perdu son carnet." },
    { role: "A", text: "Je comprends. On peut lui en donner un nouveau." },
    { role: "B", text: "Merci. Est-ce possible de régler ça maintenant ?" },
    { role: "A", text: "Il faudra le signer ce soir." },
    { role: "B", text: "Très bien, merci." },
    { role: "A", text: "Je m'en occupe tout de suite." },
    { role: "B", text: "C'est gentil, je vous remercie." },
    { role: "A", text: "Je vous en prie." },
    { role: "B", text: "Merci, bonne journée." },
  ],
},
{
  id: "e3-1-po-13",
  title: "Prendre rendez-vous pour la vie scolaire",
  context: "Vous voulez prendre rendez-vous pour voir la maîtresse de mon fils.",
  roleA: { title: "La secrétaire", vous: "la secrétaire de l'école" },
  roleB: { title: "Vous", vous: "la personne qui parle" },
  lines: [
    { role: "A", text: "Bonjour, vous souhaitez un rendez-vous ?" },
    { role: "B", text: "Oui, je voudrais voir la maîtresse de mon fils." },
    { role: "A", text: "Je peux vous proposer mardi après la classe." },
    { role: "B", text: "Oui, ce créneau me convient." },
    { role: "A", text: "Je veux parler de ses devoirs." },
    { role: "B", text: "D'accord, je le note." },
    { role: "A", text: "Je vous envoie une confirmation par message." },
    { role: "B", text: "Merci. Vous avez mon numéro ?" },
    { role: "A", text: "Oui, il est noté ici." },
    { role: "B", text: "Parfait, à bientôt." },
  ],
},
{
  id: "e3-1-po-14",
  title: "Confirmer un rendez-vous",
  context: "Vous confirmez ceci : la réunion parents-professeurs.",
  roleA: { title: "La secrétaire", vous: "la secrétaire de l'école" },
  roleB: { title: "Vous", vous: "la personne qui parle" },
  lines: [
    { role: "A", text: "Bonjour, vous appelez pour confirmer ?" },
    { role: "B", text: "Oui, je confirme la réunion parents-professeurs." },
    { role: "A", text: "Très bien. C'est bien jeudi à 18 heures ?" },
    { role: "B", text: "Oui, c'est exact." },
    { role: "A", text: "Parfait, c'est noté." },
    { role: "B", text: "Je viendrai avec mon mari." },
    { role: "A", text: "Oui, aucun problème." },
    { role: "B", text: "Merci, c'est très clair." },
    { role: "A", text: "Parfait, à ce moment-là." },
    { role: "B", text: "Merci, à bientôt." },
  ],
},
{
  id: "e3-1-po-15",
  title: "Demander conseil sur la vie scolaire",
  context: "Vous demandez conseil pour aider mon enfant à faire ses devoirs.",
  roleA: { title: "La secrétaire", vous: "la secrétaire de l'école" },
  roleB: { title: "Vous", vous: "la personne qui parle" },
  lines: [
    { role: "A", text: "Vous voulez un conseil ?" },
    { role: "B", text: "Oui, j'hésite pour aider mon enfant à faire ses devoirs." },
    { role: "A", text: "Gardez un moment calme chaque soir." },
    { role: "B", text: "C'est vrai, mais je veux aussi quelque chose de pratique." },
    { role: "A", text: "Préparez le cartable la veille." },
    { role: "B", text: "Je comprends mieux la différence." },
    { role: "A", text: "Choisissez ce qui vous simplifie la vie." },
    { role: "B", text: "Vous avez raison. Je vais y réfléchir ce soir." },
    { role: "A", text: "Revenez me voir si vous voulez en reparler." },
    { role: "B", text: "Merci pour votre conseil." },
  ],
},
{
  id: "e3-1-po-16",
  title: "Signaler un retard",
  context: "Vous signalez un retard : mon enfant arrive en retard.",
  roleA: { title: "La secrétaire", vous: "la secrétaire de l'école" },
  roleB: { title: "Vous", vous: "la personne qui parle" },
  lines: [
    { role: "A", text: "Bonjour, je vous écoute." },
    { role: "B", text: "Bonjour, je vous préviens : mon enfant arrive en retard." },
    { role: "A", text: "Merci de nous prévenir. Que se passe-t-il ?" },
    { role: "B", text: "Le bus scolaire a eu un problème." },
    { role: "A", text: "D'accord, ce n'est pas grave." },
    { role: "B", text: "Il sera là dans dix minutes." },
    { role: "A", text: "Très bien, nous vous attendons." },
    { role: "B", text: "Merci pour votre compréhension." },
    { role: "A", text: "À tout à l'heure." },
    { role: "B", text: "À tout à l'heure." },
  ],
},
{
  id: "e3-1-po-17",
  title: "Faire une réclamation polie",
  context: "Vous faites une réclamation : un autre enfant prend souvent son goûter.",
  roleA: { title: "La secrétaire", vous: "la secrétaire de l'école" },
  roleB: { title: "Vous", vous: "la personne qui parle" },
  lines: [
    { role: "A", text: "Bonjour, comment puis-je vous aider ?" },
    { role: "B", text: "Bonjour, je voudrais signaler un problème : un autre enfant prend souvent son goûter." },
    { role: "A", text: "Je suis désolé pour cela." },
    { role: "B", text: "Ma fille n'ose pas le dire." },
    { role: "A", text: "Je comprends. Quelle solution souhaitez-vous ?" },
    { role: "B", text: "Je voudrais que l'école regarde." },
    { role: "A", text: "D'accord, je vais transmettre votre demande." },
    { role: "B", text: "Merci. J'aimerais être informé rapidement." },
    { role: "A", text: "Je vous réponds dès que possible." },
    { role: "B", text: "Très bien, merci." },
  ],
},
{
  id: "e3-1-po-18",
  title: "Demander une aide urgente",
  context: "Vous devez demander une aide urgente : récupérer mon fils malade.",
  roleA: { title: "La secrétaire", vous: "la secrétaire de l'école" },
  roleB: { title: "Vous", vous: "la personne qui parle" },
  lines: [
    { role: "A", text: "Bonjour, c'est urgent ?" },
    { role: "B", text: "Oui, j'ai besoin d'aide pour récupérer mon fils malade." },
    { role: "A", text: "Il est à l'infirmerie." },
    { role: "B", text: "D'accord, je fais ça tout de suite." },
    { role: "A", text: "Venez par l'entrée principale." },
    { role: "B", text: "Merci. Est-ce que je dois rappeler ?" },
    { role: "A", text: "Non, venez directement si besoin." },
    { role: "B", text: "Très bien, je pars maintenant." },
    { role: "A", text: "Bon courage." },
    { role: "B", text: "Merci beaucoup." },
  ],
},
{
  id: "e3-1-po-19",
  title: "Comparer deux possibilités",
  context: "Vous devez comparer deux possibilités : l'étude surveillée et l'aide aux devoirs.",
  roleA: { title: "La secrétaire", vous: "la secrétaire de l'école" },
  roleB: { title: "Vous", vous: "la personne qui parle" },
  lines: [
    { role: "A", text: "Vous hésitez entre deux possibilités ?" },
    { role: "B", text: "Oui, je compare l'étude surveillée et l'aide aux devoirs." },
    { role: "A", text: "L'étude est plus calme." },
    { role: "B", text: "Et l'autre possibilité ?" },
    { role: "A", text: "L'aide aux devoirs accompagne davantage." },
    { role: "B", text: "Je vois. Je cherche surtout quelque chose de pratique." },
    { role: "A", text: "Dans ce cas, la première option est peut-être meilleure." },
    { role: "B", text: "D'accord, je vais choisir celle-là." },
    { role: "A", text: "Très bien, je vous prépare ça." },
    { role: "B", text: "Merci pour vos conseils." },
  ],
},
{
  id: "e3-1-po-20",
  title: "Remercier pour une aide",
  context: "Vous remerciez pour une aide : votre aide pour l'inscription.",
  roleA: { title: "La secrétaire", vous: "la secrétaire de l'école" },
  roleB: { title: "Vous", vous: "la personne qui parle" },
  lines: [
    { role: "A", text: "Bonjour, vous vouliez me parler ?" },
    { role: "B", text: "Oui, je voulais vous remercier pour votre aide pour l'inscription." },
    { role: "A", text: "C'est gentil, merci." },
    { role: "B", text: "Tout est clair maintenant." },
    { role: "A", text: "Je suis content que cela vous ait aidé." },
    { role: "B", text: "Mon fils est content de commencer." },
    { role: "A", text: "N'hésitez pas à revenir si besoin." },
    { role: "B", text: "Oui, je le ferai." },
    { role: "A", text: "Bonne continuation !" },
    { role: "B", text: "Merci, à vous aussi." },
  ],
}
];

/* ── Production écrite — consignes (A1 : 50 mots minimum) ─────────────────── */

const PE_MIN = 50;
const PE_MAX = 120;

export const E3_1_PE: ExpressPePrompt[] = [
  {
    id: "e3-1-pe-1",
    title: "Cours à l'université",
    situation: "",
    instruction: "Vous êtes étudiant de français dans une nouvelle université. Vous écrivez un message à votre famille pour parler de vos cours.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-1-pe-2",
    title: "Demande de cours",
    situation: "",
    instruction: "Vous êtes étudiant étranger en France et vous voulez prendre des cours de français. Vous écrivez un message à votre université.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-1-pe-3",
    title: "Premier jour de classe",
    situation: "",
    instruction: "Racontez votre premier jour dans une école de langues. Parlez du professeur, de la salle, des horaires et de vos impressions.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-1-pe-4",
    title: "Emploi du temps",
    situation: "",
    instruction: "Écrivez à un ami pour décrire votre emploi du temps de français. Dites les jours de cours, les heures et les activités en classe.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-1-pe-5",
    title: "Materiel scolaire",
    situation: "",
    instruction: "Vous préparez votre sac pour un cours. Écrivez un message pour dire quels objets vous prenez et pourquoi ils sont utiles.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-1-pe-6",
    title: "Nouveau professeur",
    situation: "",
    instruction: "Présentez votre nouveau professeur de français à votre famille. Donnez son nom, sa nationalité, sa facon de parler et une qualité.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-1-pe-7",
    title: "Bibliothèque",
    situation: "",
    instruction: "Vous decouvrez la bibliothèque de l'université. Écrivez un message à un camarade pour expliquer ou elle est et ce qu'on peut y faire.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-1-pe-8",
    title: "Inscription tardive",
    situation: "",
    instruction: "Vous voulez vous inscrire à un cours qui commence demain. Écrivez un court message pour demander si c'est encore possible.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-1-pe-9",
    title: "Groupe de travail",
    situation: "",
    instruction: "Proposez à deux camarades de faire un groupe de travail. Donnez un jour, un lieu et l'objectif de la rencontre.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-1-pe-10",
    title: "Examen proche",
    situation: "",
    instruction: "Vous avez un petit examen de français la semaine prochaine. Écrivez un message à votre famille pour expliquer ce que vous revisez.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-1-pe-11",
    title: "Cours préfère",
    situation: "",
    instruction: "Décrivez votre cours préfère à l'école. Dites la matière, le professeur, l'heure et pourquoi vous aimez ce cours.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-1-pe-12",
    title: "Absence au cours",
    situation: "",
    instruction: "Vous ne pouvez pas aller au cours aujourd'hui. Écrivez un message à un camarade pour demander les devoirs et les pages à lire.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-1-pe-13",
    title: "Activité de classe",
    situation: "",
    instruction: "Racontez une activité faite en classe de français. Expliquez ce que vous avez fait et ce que vous avez appris.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-1-pe-14",
    title: "Rencontre étudiante",
    situation: "",
    instruction: "Vous rencontrez des étudiants internationaux. Écrivez un message pour présenter deux personnes et dire dans quel cours elles sont.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-1-pe-15",
    title: "Changement de niveau",
    situation: "",
    instruction: "Vous pensez que le cours est trop facile ou trop difficile. Écrivez un message pour expliquer votre situation et demander conseil.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-1-pe-16",
    title: "Campus",
    situation: "",
    instruction: "Décrivez votre campus à un ami. Parlez des batiments importants, de la caféteria et du lieu de votre cours.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-1-pe-17",
    title: "Devoirs du soir",
    situation: "",
    instruction: "Écrivez un message à votre famille pour expliquer vos devoirs du soir. Dites ce que vous devez lire, écrire et apprendre.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-1-pe-18",
    title: "Cours en ligne",
    situation: "",
    instruction: "Vous suivez un cours de français en ligne. Décrivez l'organisation, l'heure, le professeur et ce qui est facile ou difficile.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-1-pe-19",
    title: "Demande d'information",
    situation: "",
    instruction: "Écrivez un message au secrétariat pour demander les horaires d'un cours de français debutant et les documents nécessaires.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-1-pe-20",
    title: "Projet de fin de semaine",
    situation: "",
    instruction: "Votre classe prepare une petite présentation pour vendredi. Écrivez à un camarade pour expliquer votre idée et proposer une repartition simple.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },

];
