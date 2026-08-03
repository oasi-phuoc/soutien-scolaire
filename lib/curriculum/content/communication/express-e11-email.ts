import {
  readingPoolExercise,
  type CommunicationExercise,
  type ExpressPePrompt,
} from "./express-types";
import { buildExpressPool, type ExpressRawQ } from "./express-listening-helpers";

/**
 * E-mails E11 — Cuisine, activités, goûts, vacances (niveau A2).
 * CE e-mail : un e-mail à lire + pool de questions (≥ 10).
 * PE e-mail : pool d'e-mails reçus auxquels répondre (≥ 10).
 */

function q(item: ExpressRawQ): ExpressRawQ {
  return item;
}

const PE_MIN = 80;
const PE_MAX = 180;

/* ════════════════════════════════════════════════════════════════════════════
   E11.1 — Apprécier la cuisine
   ════════════════════════════════════════════════════════════════════════════ */

const E11_1_CE_EMAIL_TEXT = `De : La responsable Nadia

Objet : Inscription à un atelier soupe de saison

Bonjour,

C'est confirmé : vous avez une place pour un atelier soupe de saison.
Notez bien le rendez-vous : lundi 6 mai, 9 h, à la Maison des Acacias.
Merci d'apporter un tablier propre. La participation est gratuite.
Cette rencontre aide à exprimer ce qu'on aime dans un plat.

Voici quelques détails utiles pour la suite.
Lisez bien jusqu'à la fin, s'il vous plaît.
Vous pouvez demander de l'aide si besoin.
Tout est organisé pour que ce soit simple.
À bientôt, et merci de votre lecture.
Je reste près de mon téléphone aujourd'hui.
Dis-moi si tu as besoin d'autre chose.
On peut aussi en parler demain matin.
J'espère que tout se passe bien de ton côté.
N'hésite pas à me répondre quand tu peux.
Je t'envoie aussi ce détail pour être clair.
À bientôt,

La responsable Nadia`;

const E11_1_CE_EMAIL_POOL = buildExpressPool("e11-1-ce-email", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Inscription à un atelier soupe de saison", "Facture oubliée", "Invitation sans date"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Inscription",
    vfQ: "L'objet de l'e-mail est « Inscription à un atelier soupe de saison ».",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Qui envoie l'e-mail ?",
    text: ["La responsable Nadia", "un voisin inconnu", "le service des impôts"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________.",
    fill: "responsable",
    vfQ: "L'e-mail est envoyé par La responsable Nadia.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela a-t-il lieu ?",
    text: ["lundi 6 mai", "la semaine prochaine sans date", "un dimanche de novembre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La date est _________ 6 mai.",
    fill: "lundi",
    vfQ: "L'activité a lieu lundi 6 mai.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "À quelle heure faut-il arriver ?",
    text: ["9 h", "7 h", "21 h 30"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut arriver à _________.",
    fill: "9",
    vfQ: "L'heure indiquée est 9 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle activité est proposée ?",
    text: ["un atelier soupe de saison", "un match de football", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "atelier",
    vfQ: "Le texte parle de l'activité suivante : un atelier soupe de saison.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["un tablier propre", "un casque de vélo", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "tablier",
    vfQ: "Il faut prévoir un tablier propre.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quelle information pratique est donnée ?",
    text: ["gratuit", "8 places", "aucun horaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix indiqué est _________.",
    fill: "gratuit",
    vfQ: "Le prix indiqué est gratuit.",
    vfC: 0,
  }),
]);

const E11_1_CE_EMAIL_2_TEXT = `De : Accueil du quartier

Objet : Rappel pour mardi 14 mai

Bonjour à toutes et à tous,

Je vous rappelle que une dégustation de fromages doux est prévu mardi 14 mai.
Le groupe se retrouve à 10 h 15 devant la salle Jean-Monnet.
Comme il y a 10 places, merci de prévenir en cas d'absence.
N'oubliez pas une petite assiette et lisez bien cette consigne : les fromages restent au frais jusqu'au service.

Sans confirmation, la place n'est pas garantie.
Je t'écris aussi pour te donner un peu plus de nouvelles.
Dis-moi si tu as des questions, je réponds vite.
Tu peux m'appeler si c'est plus simple pour toi.
Merci de confirmer la bonne réception.
Joignez les documents demandés si nécessaire.
Nous vous souhaitons une excellente journée.
Le service est également disponible en ligne.
Respectez la file d'attente, s'il vous plaît.
Les personnes à mobilité réduite sont prioritaires.
En cas de perte d'objet, passez à l'accueil.
Le service client répond aussi par téléphone.
Bonne journée,

Accueil du quartier`;

const E11_1_CE_EMAIL_2_POOL = buildExpressPool("e11-1-ce-email-2", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Rappel pour mardi 14 mai", "Facture oubliée", "Invitation sans date"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Rappel",
    vfQ: "L'objet de l'e-mail est « Rappel pour mardi 14 mai ».",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Accueil du quartier", "un voisin inconnu", "le service des impôts"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________.",
    fill: "Accueil",
    vfQ: "L'e-mail est envoyé par Accueil du quartier.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela a-t-il lieu ?",
    text: ["mardi 14 mai", "la semaine prochaine sans date", "un dimanche de novembre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La date est _________ 14 mai.",
    fill: "mardi",
    vfQ: "L'activité a lieu mardi 14 mai.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "À quelle heure faut-il arriver ?",
    text: ["10 h 15", "7 h", "21 h 30"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut arriver à _________.",
    fill: "10",
    vfQ: "L'heure indiquée est 10 h 15.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle activité est proposée ?",
    text: ["une dégustation de fromages doux", "une réunion bancaire", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "dégustation",
    vfQ: "Le texte parle de l'activité suivante : une dégustation de fromages doux.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["une petite assiette", "un passeport", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "petite",
    vfQ: "Il faut prévoir une petite assiette.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quelle information pratique est donnée ?",
    text: ["5 CHF", "10 places", "aucun horaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix indiqué est _________.",
    fill: "5",
    vfQ: "Le prix indiqué est 5 CHF.",
    vfC: 0,
  }),
]);

const E11_1_CE_EMAIL_3_TEXT = `De : Service activités

Objet : Question avant un cours de crêpes fines

Bonjour,

J'ai vu l'annonce pour un cours de crêpes fines et je voudrais m'inscrire.
Pouvez-vous confirmer qu'il faut apporter une poêle légère ?
Je peux venir mercredi 22 mai à 11 h à le centre du Lac.
Mon objectif est de réussir une pâte simple. Merci pour votre réponse.

En cas de changement, un nouvel avis sera publié.
Nous sommes là pour vous aider.
Gardez ce texte pour vous en souvenir.
Vous pouvez venir accompagné(e) si vous le souhaitez.
Un plan simple est disponible à l'accueil.
N'oubliez pas de vérifier la date et l'heure.
Le personnel peut répondre en français simple.
Bonne journée à toutes et à tous.
Merci encore pour votre compréhension.
Conservez le numéro de contact indiqué.
Tout est organisé pour que ce soit simple.
Cordialement,

Rami`;

const E11_1_CE_EMAIL_3_POOL = buildExpressPool("e11-1-ce-email-3", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Question avant un cours de crêpes fines", "Facture oubliée", "Invitation sans date"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Question",
    vfQ: "L'objet de l'e-mail est « Question avant un cours de crêpes fines ».",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Service activités", "un voisin inconnu", "le service des impôts"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________.",
    fill: "Service",
    vfQ: "L'e-mail est envoyé par Service activités.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela a-t-il lieu ?",
    text: ["mercredi 22 mai", "la semaine prochaine sans date", "un dimanche de novembre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La date est _________ 22 mai.",
    fill: "mercredi",
    vfQ: "L'activité a lieu mercredi 22 mai.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "À quelle heure faut-il arriver ?",
    text: ["11 h", "7 h", "21 h 30"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut arriver à _________.",
    fill: "11",
    vfQ: "L'heure indiquée est 11 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle activité est proposée ?",
    text: ["un cours de crêpes fines", "un cours de mécanique", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "cours",
    vfQ: "Le texte parle de l'activité suivante : un cours de crêpes fines.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["une poêle légère", "une lampe de poche", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "poêle",
    vfQ: "Il faut prévoir une poêle légère.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quelle information pratique est donnée ?",
    text: ["8 CHF", "12 places", "aucun horaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix indiqué est _________.",
    fill: "8",
    vfQ: "Le prix indiqué est 8 CHF.",
    vfC: 0,
  }),
]);

const E11_1_CE_EMAIL_4_TEXT = `De : Association Bellevue

Objet : Confirmation de votre place

Madame, Monsieur,

Votre place pour une visite du marché est réservée.
La séance aura lieu jeudi 30 mai à la ferme des Lilas.
Une question ? Écrivez ou téléphonez.
Merci encore, et à bientôt.
Tout est organisé pour que ce soit simple.
Je reste près de mon téléphone aujourd'hui.
Dis-moi si tu as besoin d'autre chose.
On peut aussi en parler demain matin.
J'espère que tout se passe bien de ton côté.
N'hésite pas à me répondre quand tu peux.
Je t'envoie aussi ce détail pour être clair.
Le trajet est simple, ne t'inquiète pas.
Merci d'arriver à 12 h 30. La participation est de 10 CHF.
Le bénévole Marco sera sur place pour vous accueillir.

Avec nos salutations,

Association Bellevue`;

const E11_1_CE_EMAIL_4_POOL = buildExpressPool("e11-1-ce-email-4", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Confirmation de votre place", "Facture oubliée", "Invitation sans date"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Confirmation",
    vfQ: "L'objet de l'e-mail est « Confirmation de votre place ».",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Association Bellevue", "un voisin inconnu", "le service des impôts"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________.",
    fill: "Association",
    vfQ: "L'e-mail est envoyé par Association Bellevue.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela a-t-il lieu ?",
    text: ["jeudi 30 mai", "la semaine prochaine sans date", "un dimanche de novembre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La date est _________ 30 mai.",
    fill: "jeudi",
    vfQ: "L'activité a lieu jeudi 30 mai.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "À quelle heure faut-il arriver ?",
    text: ["12 h 30", "7 h", "21 h 30"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut arriver à _________.",
    fill: "12",
    vfQ: "L'heure indiquée est 12 h 30.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle activité est proposée ?",
    text: ["une visite du marché", "un match de football", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "visite",
    vfQ: "Le texte parle de l'activité suivante : une visite du marché.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["un panier vide", "un casque de vélo", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "panier",
    vfQ: "Il faut prévoir un panier vide.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quelle information pratique est donnée ?",
    text: ["10 CHF", "14 places", "aucun horaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix indiqué est _________.",
    fill: "10",
    vfQ: "Le prix indiqué est 10 CHF.",
    vfC: 0,
  }),
]);

const E11_1_CE_EMAIL_5_TEXT = `De : Secrétariat du centre

Objet : Conseil pratique : un carnet de recettes

Salut,

Petit conseil pour un atelier sauces rapides : mets un carnet de recettes dans ton sac.
Je t'attends vendredi 7 juin à 14 h à le foyer Bellevue.
Si tu veux donner plus de goût à un repas, cette séance est très utile.
Attention : les sauces très piquantes sont séparées.

À demain,

Noé
Une confirmation vous sera envoyée ensuite.
Merci de vérifier les informations avant de répondre.
Nous sommes ouverts du lundi au vendredi.
Merci de lire ce message jusqu'à la fin.
Les informations importantes sont déjà indiquées plus haut.
En cas de question, vous pouvez écrire ou téléphoner.
Une confirmation sera envoyée ensuite.
Le lieu est facile à trouver avec les indications.
Pensez à arriver un peu en avance.
Gardez ce texte pour vous en souvenir.
Nous restons disponibles pour vous aider.
Les horaires habituels restent les mêmes.
Cordialement, et bonne journée.`;

const E11_1_CE_EMAIL_5_POOL = buildExpressPool("e11-1-ce-email-5", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Conseil pratique : un carnet de recettes", "Facture oubliée", "Invitation sans date"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Conseil",
    vfQ: "L'objet de l'e-mail est « Conseil pratique : un carnet de recettes ».",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Secrétariat du centre", "un voisin inconnu", "le service des impôts"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________.",
    fill: "Secrétariat",
    vfQ: "L'e-mail est envoyé par Secrétariat du centre.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela a-t-il lieu ?",
    text: ["vendredi 7 juin", "la semaine prochaine sans date", "un dimanche de novembre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La date est _________ 7 juin.",
    fill: "vendredi",
    vfQ: "L'activité a lieu vendredi 7 juin.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "À quelle heure faut-il arriver ?",
    text: ["14 h", "7 h", "21 h 30"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut arriver à _________.",
    fill: "14",
    vfQ: "L'heure indiquée est 14 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle activité est proposée ?",
    text: ["un atelier sauces rapides", "une réunion bancaire", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "atelier",
    vfQ: "Le texte parle de l'activité suivante : un atelier sauces rapides.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["un carnet de recettes", "un passeport", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "carnet",
    vfQ: "Il faut prévoir un carnet de recettes.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quelle information pratique est donnée ?",
    text: ["12 CHF", "15 places", "aucun horaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix indiqué est _________.",
    fill: "12",
    vfQ: "Le prix indiqué est 12 CHF.",
    vfC: 0,
  }),
]);

const E11_1_CE_EMAIL_6_TEXT = `De : Équipe organisation

Objet : Changement de salle

Bonjour,

Petit changement pour une table autour des épices : la salle prévue n'est plus libre.
Le nouveau lieu est la bibliothèque Nord. La date et l'heure ne changent pas : samedi 15 juin à 15 h 15.
Le prix reste 15 CHF et les 16 places sont gardées.
Merci de préparer une cuillère en bois.

Ce message contient les informations essentielles.
Nous vous remercions de votre compréhension.
Pour toute urgence, appelez-nous pendant les heures d'ouverture.
Dis-moi si tu as besoin d'autre chose.
On peut aussi en parler demain matin.
J'espère que tout se passe bien de ton côté.
N'hésite pas à me répondre quand tu peux.
Je t'envoie aussi ce détail pour être clair.
Le trajet est simple, ne t'inquiète pas.
Passe le bonjour à tout le monde.
À très bientôt, prends soin de toi.
Merci de votre compréhension,

Équipe organisation`;

const E11_1_CE_EMAIL_6_POOL = buildExpressPool("e11-1-ce-email-6", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Changement de salle", "Facture oubliée", "Invitation sans date"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Changement",
    vfQ: "L'objet de l'e-mail est « Changement de salle ».",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Équipe organisation", "un voisin inconnu", "le service des impôts"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________.",
    fill: "Équipe",
    vfQ: "L'e-mail est envoyé par Équipe organisation.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela a-t-il lieu ?",
    text: ["samedi 15 juin", "la semaine prochaine sans date", "un dimanche de novembre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La date est _________ 15 juin.",
    fill: "samedi",
    vfQ: "L'activité a lieu samedi 15 juin.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "À quelle heure faut-il arriver ?",
    text: ["15 h 15", "7 h", "21 h 30"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut arriver à _________.",
    fill: "15",
    vfQ: "L'heure indiquée est 15 h 15.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle activité est proposée ?",
    text: ["une table autour des épices", "un cours de mécanique", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "table",
    vfQ: "Le texte parle de l'activité suivante : une table autour des épices.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["une cuillère en bois", "une lampe de poche", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "cuillère",
    vfQ: "Il faut prévoir une cuillère en bois.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quelle information pratique est donnée ?",
    text: ["15 CHF", "16 places", "aucun horaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix indiqué est _________.",
    fill: "15",
    vfQ: "Le prix indiqué est 15 CHF.",
    vfC: 0,
  }),
]);

const E11_1_CE_EMAIL_7_TEXT = `De : Club des habitants

Objet : Merci pour votre participation

Bonjour,

Merci pour votre présence lors de un repas partagé sans gaspillage à la terrasse du Marché.
Plusieurs personnes ont expliqué que la séance aide à partager sans jeter de nourriture.
Pour la prochaine fois, nous garderons dimanche 23 juin à 16 h.
Votre remarque sur une boîte réutilisable a été notée.

Nous vous remercions de votre compréhension.
Pour toute urgence, appelez-nous pendant les heures d'ouverture.
Conservez ce message pour vos dossiers.
Une confirmation vous sera envoyée ensuite.
Respectez la file d'attente, s'il vous plaît.
Les personnes à mobilité réduite sont prioritaires.
En cas de perte d'objet, passez à l'accueil.
Le service client répond aussi par téléphone.
Merci de lire ce message jusqu'à la fin.
Les informations importantes sont déjà indiquées plus haut.
En cas de question, vous pouvez écrire ou téléphoner.
Une confirmation sera envoyée ensuite.
Bien à vous,

Club des habitants`;

const E11_1_CE_EMAIL_7_POOL = buildExpressPool("e11-1-ce-email-7", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Merci pour votre participation", "Facture oubliée", "Invitation sans date"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Merci",
    vfQ: "L'objet de l'e-mail est « Merci pour votre participation ».",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Club des habitants", "un voisin inconnu", "le service des impôts"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________.",
    fill: "Club",
    vfQ: "L'e-mail est envoyé par Club des habitants.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela a-t-il lieu ?",
    text: ["dimanche 23 juin", "la semaine prochaine sans date", "un dimanche de novembre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La date est _________ 23 juin.",
    fill: "dimanche",
    vfQ: "L'activité a lieu dimanche 23 juin.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "À quelle heure faut-il arriver ?",
    text: ["16 h", "7 h", "21 h 30"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut arriver à _________.",
    fill: "16",
    vfQ: "L'heure indiquée est 16 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle activité est proposée ?",
    text: ["un repas partagé sans gaspillage", "un match de football", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "repas",
    vfQ: "Le texte parle de l'activité suivante : un repas partagé sans gaspillage.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["une boîte réutilisable", "un casque de vélo", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "boîte",
    vfQ: "Il faut prévoir une boîte réutilisable.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quelle information pratique est donnée ?",
    text: ["18 CHF", "18 places", "aucun horaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix indiqué est _________.",
    fill: "18",
    vfQ: "Le prix indiqué est 18 CHF.",
    vfC: 0,
  }),
]);

const E11_1_CE_EMAIL_8_TEXT = `De : Maison commune

Objet : Invitation cuisine

Bonjour les amis,

Ça vous dit de venir avec moi à une préparation de desserts aux fruits ?
Le rendez-vous est lundi 1er juillet à 17 h 30 à le local des Jeunes.
Il faut réserver directement sur place car il y a seulement 20 places.
Apportez deux fruits lavés et un peu de bonne humeur.

À très vite,

Mina
Vous pouvez venir accompagné(e) si vous le souhaitez.
Un plan simple est disponible à l'accueil.
Le personnel peut répondre en français simple.
En cas de changement, un nouvel avis sera publié.
Bonne journée à toutes et à tous.
Merci encore pour votre compréhension.
Conservez le numéro de contact indiqué.
À bientôt, et merci de votre lecture.
Je reste près de mon téléphone aujourd'hui.
Merci encore, et à bientôt.
Tout est organisé pour que ce soit simple.
Le contact est indiqué dans le message.
N'oubliez pas de vérifier la date.`;

const E11_1_CE_EMAIL_8_POOL = buildExpressPool("e11-1-ce-email-8", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Invitation cuisine", "Facture oubliée", "Invitation sans date"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Invitation",
    vfQ: "L'objet de l'e-mail est « Invitation cuisine ».",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Maison commune", "un voisin inconnu", "le service des impôts"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________.",
    fill: "Maison",
    vfQ: "L'e-mail est envoyé par Maison commune.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela a-t-il lieu ?",
    text: ["lundi 1er juillet", "la semaine prochaine sans date", "un dimanche de novembre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La date est _________ 1er juillet.",
    fill: "lundi",
    vfQ: "L'activité a lieu lundi 1er juillet.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "À quelle heure faut-il arriver ?",
    text: ["17 h 30", "7 h", "21 h 30"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut arriver à _________.",
    fill: "17",
    vfQ: "L'heure indiquée est 17 h 30.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle activité est proposée ?",
    text: ["une préparation de desserts aux fruits", "une réunion bancaire", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "préparation",
    vfQ: "Le texte parle de l'activité suivante : une préparation de desserts aux fruits.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["deux fruits lavés", "un passeport", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "deux",
    vfQ: "Il faut prévoir deux fruits lavés.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quelle information pratique est donnée ?",
    text: ["20 CHF", "20 places", "aucun horaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix indiqué est _________.",
    fill: "20",
    vfQ: "Le prix indiqué est 20 CHF.",
    vfC: 0,
  }),
]);

const E11_1_CE_EMAIL_9_TEXT = `De : Bureau des inscriptions

Objet : Liste du matériel

Bonjour,

Pour un cours de pain maison, la petite liste est simple : un torchon, une bouteille d'eau et un stylo.
Le rendez-vous reste mardi 9 juillet à 18 h à la salle des Fêtes.
Le tarif est 25 CHF.
Le thème principal sera : faire lever la pâte tranquillement.

Nous comptons sur vous.
Après cela, vous recevrez un petit rappel.
Gardez une copie papier si possible.
Le cachet de la date est important.
Vous pouvez venir accompagné(e) si vous le souhaitez.
Un plan simple est disponible à l'accueil.
N'oubliez pas de vérifier la date et l'heure.
Le personnel peut répondre en français simple.
En cas de changement, un nouvel avis sera publié.
Bonne journée à toutes et à tous.
Merci encore pour votre compréhension.
Conservez le numéro de contact indiqué.
Merci,

Bureau des inscriptions`;

const E11_1_CE_EMAIL_9_POOL = buildExpressPool("e11-1-ce-email-9", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Liste du matériel", "Facture oubliée", "Invitation sans date"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Liste",
    vfQ: "L'objet de l'e-mail est « Liste du matériel ».",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Bureau des inscriptions", "un voisin inconnu", "le service des impôts"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________.",
    fill: "Bureau",
    vfQ: "L'e-mail est envoyé par Bureau des inscriptions.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela a-t-il lieu ?",
    text: ["mardi 9 juillet", "la semaine prochaine sans date", "un dimanche de novembre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La date est _________ 9 juillet.",
    fill: "mardi",
    vfQ: "L'activité a lieu mardi 9 juillet.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "À quelle heure faut-il arriver ?",
    text: ["18 h", "7 h", "21 h 30"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut arriver à _________.",
    fill: "18",
    vfQ: "L'heure indiquée est 18 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle activité est proposée ?",
    text: ["un cours de pain maison", "un cours de mécanique", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "cours",
    vfQ: "Le texte parle de l'activité suivante : un cours de pain maison.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["un torchon", "une lampe de poche", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "torchon",
    vfQ: "Il faut prévoir un torchon.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quelle information pratique est donnée ?",
    text: ["25 CHF", "22 places", "aucun horaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix indiqué est _________.",
    fill: "25",
    vfQ: "Le prix indiqué est 25 CHF.",
    vfC: 0,
  }),
]);

const E11_1_CE_EMAIL_10_TEXT = `De : Info loisirs

Objet : Places disponibles

Bonjour,

Bonne nouvelle : une découverte des plats du monde n'est pas complet, il reste 24 places.
La séance aura lieu mercredi 17 juillet à 18 h 45 à le jardin partagé.
Merci de vous inscrire avec le QR code de l'affiche avant demain soir.
Prévoyez une recette de son pays. Le prix est 30 CHF.

Nous traitons votre demande dans les meilleurs délais.
N'hésitez pas à nous indiquer vos disponibilités.
Ce message contient les informations essentielles.
Le personnel peut répondre en français simple.
En cas de changement, un nouvel avis sera publié.
Bonne journée à toutes et à tous.
Merci encore pour votre compréhension.
Conservez le numéro de contact indiqué.
Tout est organisé pour que ce soit simple.
À bientôt, et merci de votre lecture.
Je reste près de mon téléphone aujourd'hui.
Cordialement,

Info loisirs`;

const E11_1_CE_EMAIL_10_POOL = buildExpressPool("e11-1-ce-email-10", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Places disponibles", "Facture oubliée", "Invitation sans date"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Places",
    vfQ: "L'objet de l'e-mail est « Places disponibles ».",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Info loisirs", "un voisin inconnu", "le service des impôts"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________.",
    fill: "Info",
    vfQ: "L'e-mail est envoyé par Info loisirs.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela a-t-il lieu ?",
    text: ["mercredi 17 juillet", "la semaine prochaine sans date", "un dimanche de novembre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La date est _________ 17 juillet.",
    fill: "mercredi",
    vfQ: "L'activité a lieu mercredi 17 juillet.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "À quelle heure faut-il arriver ?",
    text: ["18 h 45", "7 h", "21 h 30"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut arriver à _________.",
    fill: "18",
    vfQ: "L'heure indiquée est 18 h 45.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle activité est proposée ?",
    text: ["une découverte des plats du monde", "un match de football", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "découverte",
    vfQ: "Le texte parle de l'activité suivante : une découverte des plats du monde.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["une recette de son pays", "un casque de vélo", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "recette",
    vfQ: "Il faut prévoir une recette de son pays.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quelle information pratique est donnée ?",
    text: ["30 CHF", "24 places", "aucun horaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix indiqué est _________.",
    fill: "30",
    vfQ: "Le prix indiqué est 30 CHF.",
    vfC: 0,
  }),
]);

const E11_1_CE_EMAIL_11_TEXT = `De : Groupe des bénévoles

Objet : Retour sur l'activité

Bonjour,

Depuis une pause café avec pâtisseries, nous recevons des messages très positifs.
Les participants ont surtout apprécié de décrire une pâtisserie avec précision.
La prochaine date est jeudi 25 juillet à 19 h à le café du Pont.
Cette fois, merci d'apporter une tasse personnelle.

Au plaisir de vous revoir,

Groupe des bénévoles
Conservez ce message pour vos dossiers.
Une confirmation vous sera envoyée ensuite.
En cas de question, vous pouvez écrire ou téléphoner.
Une confirmation sera envoyée ensuite.
Le lieu est facile à trouver avec les indications.
Pensez à arriver un peu en avance.
Gardez ce texte pour vous en souvenir.
Nous restons disponibles pour vous aider.
Les horaires habituels restent les mêmes.
Merci de votre attention et de votre patience.
Vous pouvez venir accompagné(e) si vous le souhaitez.
Merci de vérifier les informations avant de répondre.
Nous sommes ouverts du lundi au vendredi.`;

const E11_1_CE_EMAIL_11_POOL = buildExpressPool("e11-1-ce-email-11", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Retour sur l'activité", "Facture oubliée", "Invitation sans date"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Retour",
    vfQ: "L'objet de l'e-mail est « Retour sur l'activité ».",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Groupe des bénévoles", "un voisin inconnu", "le service des impôts"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________.",
    fill: "Groupe",
    vfQ: "L'e-mail est envoyé par Groupe des bénévoles.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela a-t-il lieu ?",
    text: ["jeudi 25 juillet", "la semaine prochaine sans date", "un dimanche de novembre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La date est _________ 25 juillet.",
    fill: "jeudi",
    vfQ: "L'activité a lieu jeudi 25 juillet.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "À quelle heure faut-il arriver ?",
    text: ["19 h", "7 h", "21 h 30"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut arriver à _________.",
    fill: "19",
    vfQ: "L'heure indiquée est 19 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle activité est proposée ?",
    text: ["une pause café avec pâtisseries", "une réunion bancaire", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "pause",
    vfQ: "Le texte parle de l'activité suivante : une pause café avec pâtisseries.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["une tasse personnelle", "un passeport", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "tasse",
    vfQ: "Il faut prévoir une tasse personnelle.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quelle information pratique est donnée ?",
    text: ["4 CHF", "6 personnes", "aucun horaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix indiqué est _________.",
    fill: "4",
    vfQ: "Le prix indiqué est 4 CHF.",
    vfC: 0,
  }),
]);

const E11_1_CE_EMAIL_12_TEXT = `De : Réception

Objet : Rendez-vous à 8 h 30

Bonjour,

Votre rendez-vous lié à une lecture d'étiquettes alimentaires commence à 8 h 30.
Ce document complète les informations déjà données.
Nous comptons sur vous.
Le service répond en français et en anglais.
Une version audio est disponible sur demande.
Nous vous souhaitons une excellente journée.
Le service est également disponible en ligne.
Respectez la file d'attente, s'il vous plaît.
Les personnes à mobilité réduite sont prioritaires.
En cas de perte d'objet, passez à l'accueil.
Le service client répond aussi par téléphone.
Merci de lire ce message jusqu'à la fin.
Les informations importantes sont déjà indiquées plus haut.
Merci d'arriver à la maison médicale dix minutes avant.
La date est vendredi 2 août et le prix est 6 CHF.
La docteure Morel conseille de préparer une loupe ou ses lunettes.

Meilleures salutations,

Réception`;

const E11_1_CE_EMAIL_12_POOL = buildExpressPool("e11-1-ce-email-12", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Rendez-vous à 8 h 30", "Facture oubliée", "Invitation sans date"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Rendez",
    vfQ: "L'objet de l'e-mail est « Rendez-vous à 8 h 30 ».",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Réception", "un voisin inconnu", "le service des impôts"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________.",
    fill: "Réception",
    vfQ: "L'e-mail est envoyé par Réception.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela a-t-il lieu ?",
    text: ["vendredi 2 août", "la semaine prochaine sans date", "un dimanche de novembre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La date est _________ 2 août.",
    fill: "vendredi",
    vfQ: "L'activité a lieu vendredi 2 août.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "À quelle heure faut-il arriver ?",
    text: ["8 h 30", "7 h", "21 h 30"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut arriver à _________.",
    fill: "8",
    vfQ: "L'heure indiquée est 8 h 30.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle activité est proposée ?",
    text: ["une lecture d'étiquettes alimentaires", "un cours de mécanique", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "lecture",
    vfQ: "Le texte parle de l'activité suivante : une lecture d'étiquettes alimentaires.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["une loupe ou ses lunettes", "une lampe de poche", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "loupe",
    vfQ: "Il faut prévoir une loupe ou ses lunettes.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quelle information pratique est donnée ?",
    text: ["6 CHF", "9 personnes", "aucun horaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix indiqué est _________.",
    fill: "6",
    vfQ: "Le prix indiqué est 6 CHF.",
    vfC: 0,
  }),
]);

const E11_1_CE_EMAIL_13_TEXT = `De : Atelier A2

Objet : Préparation de groupe

Chers participants,

Pour que un atelier pique-nique équilibré se passe bien, nous formons deux petits groupes.
Le premier groupe est attendu à 13 h à le parc des Amandiers.
La séance a lieu samedi 10 août avec l'entraîneuse Emma.
Merci de vérifier une gourde avant de partir.

Je reste à votre disposition pour toute précision.
Merci de confirmer la bonne réception de ce message.
Vous pouvez répondre directement à cet e-mail.
Nous traitons votre demande dans les meilleurs délais.
On peut aussi en parler demain matin.
J'espère que tout se passe bien de ton côté.
N'hésite pas à me répondre quand tu peux.
Je t'envoie aussi ce détail pour être clair.
Le trajet est simple, ne t'inquiète pas.
Passe le bonjour à tout le monde.
À très bientôt, prends soin de toi.
C'est important pour moi, merci beaucoup.
À bientôt,

Atelier A2`;

const E11_1_CE_EMAIL_13_POOL = buildExpressPool("e11-1-ce-email-13", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Préparation de groupe", "Facture oubliée", "Invitation sans date"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Préparation",
    vfQ: "L'objet de l'e-mail est « Préparation de groupe ».",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Atelier A2", "un voisin inconnu", "le service des impôts"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________.",
    fill: "Atelier",
    vfQ: "L'e-mail est envoyé par Atelier A2.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela a-t-il lieu ?",
    text: ["samedi 10 août", "la semaine prochaine sans date", "un dimanche de novembre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La date est _________ 10 août.",
    fill: "samedi",
    vfQ: "L'activité a lieu samedi 10 août.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "À quelle heure faut-il arriver ?",
    text: ["13 h", "7 h", "21 h 30"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut arriver à _________.",
    fill: "13",
    vfQ: "L'heure indiquée est 13 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle activité est proposée ?",
    text: ["un atelier pique-nique équilibré", "un match de football", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "atelier",
    vfQ: "Le texte parle de l'activité suivante : un atelier pique-nique équilibré.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["une gourde", "un casque de vélo", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "gourde",
    vfQ: "Il faut prévoir une gourde.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quelle information pratique est donnée ?",
    text: ["9 CHF", "11 personnes", "aucun horaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix indiqué est _________.",
    fill: "9",
    vfQ: "Le prix indiqué est 9 CHF.",
    vfC: 0,
  }),
]);

const E11_1_CE_EMAIL_14_TEXT = `De : Coordination locale

Objet : Demande d'information

Bonjour,

Je vous écris car je cherche des informations sur une rencontre avec un maraîcher.
J'ai noté la date, dimanche 18 août, et l'heure, 14 h 45, à la boutique Horizon.
Pouvez-vous confirmer le prix de 11 CHF ?
Je viens surtout pour poser des questions sur les légumes.

Merci de votre attention et de votre patience.
Une confirmation arrivera ensuite.
Le lieu est facile à trouver.
Prenez votre temps pour comprendre le message.
Respectez la file d'attente, s'il vous plaît.
Les personnes à mobilité réduite sont prioritaires.
En cas de perte d'objet, passez à l'accueil.
Le service client répond aussi par téléphone.
Merci de lire ce message jusqu'à la fin.
Les informations importantes sont déjà indiquées plus haut.
En cas de question, vous pouvez écrire ou téléphoner.
Une confirmation sera envoyée ensuite.
Merci d'avance,

Salma`;

const E11_1_CE_EMAIL_14_POOL = buildExpressPool("e11-1-ce-email-14", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Demande d'information", "Facture oubliée", "Invitation sans date"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Demande",
    vfQ: "L'objet de l'e-mail est « Demande d'information ».",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Coordination locale", "un voisin inconnu", "le service des impôts"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________.",
    fill: "Coordination",
    vfQ: "L'e-mail est envoyé par Coordination locale.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela a-t-il lieu ?",
    text: ["dimanche 18 août", "la semaine prochaine sans date", "un dimanche de novembre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La date est _________ 18 août.",
    fill: "dimanche",
    vfQ: "L'activité a lieu dimanche 18 août.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "À quelle heure faut-il arriver ?",
    text: ["14 h 45", "7 h", "21 h 30"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut arriver à _________.",
    fill: "14",
    vfQ: "L'heure indiquée est 14 h 45.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle activité est proposée ?",
    text: ["une rencontre avec un maraîcher", "une réunion bancaire", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "rencontre",
    vfQ: "Le texte parle de l'activité suivante : une rencontre avec un maraîcher.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["un sac en tissu", "un passeport", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "sac",
    vfQ: "Il faut prévoir un sac en tissu.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quelle information pratique est donnée ?",
    text: ["11 CHF", "13 personnes", "aucun horaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix indiqué est _________.",
    fill: "11",
    vfQ: "Le prix indiqué est 11 CHF.",
    vfC: 0,
  }),
]);

const E11_1_CE_EMAIL_15_TEXT = `De : Marché des Saveurs

Objet : Atelier confitures annulé

Bonjour,
L'atelier confitures de dimanche est annulé : la cuisinière est malade.
Nous proposons une nouvelle date : samedi 28 septembre à 10 h.
Si cette date ne vous convient pas, répondez pour un remboursement complet (25 CHF).
Vous pouvez demander de l'aide si besoin.
Les informations importantes sont déjà notées plus haut.
Merci de votre attention et de votre patience.
Une confirmation arrivera ensuite.
En cas de question, vous pouvez écrire ou téléphoner.
Une confirmation sera envoyée ensuite.
Le lieu est facile à trouver avec les indications.
Pensez à arriver un peu en avance.
Gardez ce texte pour vous en souvenir.
Nous restons disponibles pour vous aider.
Les horaires habituels restent les mêmes.
Vous pouvez venir accompagné(e) si vous le souhaitez.
Merci de votre compréhension.
L'équipe du Marché des Saveurs`;

const E11_1_CE_EMAIL_15_POOL = buildExpressPool("e11-1-ce-email-15", [
  q({
    id: "cem-q1",
    textQ: "Pourquoi l'atelier est-il annulé ?",
    text: ["La cuisinière est malade", "Il pleut", "Trop cher"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "la cuisinière est _________.",
    fill: "malade",
    vfQ: "Cuisinière malade.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Nouvelle date ?",
    text: ["Samedi 28 septembre", "Dimanche", "Lundi 1er"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "samedi _________ septembre",
    fill: "28",
    vfQ: "28 septembre.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "À quelle heure ?",
    text: ["À 10 h", "À 20 h", "À minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "à _________ h.",
    fill: "10",
    vfQ: "À 10 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Montant remboursable ?",
    text: ["25 CHF", "250 CHF", "Gratuit dès le départ"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "remboursement complet (_________ CHF)",
    fill: "25",
    vfQ: "25 CHF.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Qui envoie ?",
    text: ["Marché des Saveurs", "La mairie seule", "Un hôpital"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "équipe du Marché des _________.",
    fill: "Saveurs",
    vfQ: "Marché des Saveurs.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faire si la date ne convient pas ?",
    text: ["Demander un remboursement", "Venir quand même dimanche", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "répondez pour un _________.",
    fill: "remboursement",
    vfQ: "Demander remboursement.",
    vfC: 0,
  }),
]);

const E11_1_CE_EMAIL_16_TEXT = `De : Service rappel

Objet : Dernier rappel

Bonjour,

Dernier message avant une séance pour dresser une jolie table !
Rendez-vous mardi 3 septembre à 17 h à la place du Village.
L'entrée n'est garantie que si l'inscription est faite au stand d'information.
Apportez quatre verres et gardez 16 CHF si besoin.

À tout à l'heure,

Service rappel
Les informations importantes sont déjà notées plus haut.
Passe le bonjour à tout le monde.
À très bientôt, prends soin de toi.
C'est important pour moi, merci beaucoup.
Nous traitons votre demande rapidement.
Vous pouvez répondre directement à ce message.
Merci de confirmer la bonne réception.
Joignez les documents demandés si nécessaire.
Nous vous souhaitons une excellente journée.
Le service est également disponible en ligne.
Merci de votre attention et de votre patience.
Une confirmation arrivera ensuite.
Le lieu est facile à trouver.`;

const E11_1_CE_EMAIL_16_POOL = buildExpressPool("e11-1-ce-email-16", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Dernier rappel", "Facture oubliée", "Invitation sans date"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Dernier",
    vfQ: "L'objet de l'e-mail est « Dernier rappel ».",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Service rappel", "un voisin inconnu", "le service des impôts"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________.",
    fill: "Service",
    vfQ: "L'e-mail est envoyé par Service rappel.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela a-t-il lieu ?",
    text: ["mardi 3 septembre", "la semaine prochaine sans date", "un dimanche de novembre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La date est _________ 3 septembre.",
    fill: "mardi",
    vfQ: "L'activité a lieu mardi 3 septembre.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "À quelle heure faut-il arriver ?",
    text: ["17 h", "7 h", "21 h 30"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut arriver à _________.",
    fill: "17",
    vfQ: "L'heure indiquée est 17 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle activité est proposée ?",
    text: ["une séance pour dresser une jolie table", "un match de football", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "séance",
    vfQ: "Le texte parle de l'activité suivante : une séance pour dresser une jolie table.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["quatre verres", "un casque de vélo", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "quatre",
    vfQ: "Il faut prévoir quatre verres.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quelle information pratique est donnée ?",
    text: ["16 CHF", "19 personnes", "aucun horaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix indiqué est _________.",
    fill: "16",
    vfQ: "Le prix indiqué est 16 CHF.",
    vfC: 0,
  }),
]);

const E11_1_CE_EMAIL_17_TEXT = `De : Responsable du projet

Objet : Message de la responsable

Bonjour,

Message de La coach Ana au sujet de un atelier lunch box du midi.
La rencontre est prévue mercredi 11 septembre à 9 h 45 à la halle des Sports.
Le but reste simple : apprendre à manger dehors sans acheter trop cher.
Une question ? Écrivez ou téléphonez.
Merci encore, et à bientôt.
Tout est organisé pour que ce soit simple.
Le contact est indiqué dans le message.
Vous pouvez répondre directement à ce message.
Merci de confirmer la bonne réception.
Joignez les documents demandés si nécessaire.
Nous vous souhaitons une excellente journée.
Le service est également disponible en ligne.
Respectez la file d'attente, s'il vous plaît.
Les personnes à mobilité réduite sont prioritaires.
Merci de respecter cette règle : les sauces ferment bien dans le sac.

Bien cordialement,

Responsable du projet`;

const E11_1_CE_EMAIL_17_POOL = buildExpressPool("e11-1-ce-email-17", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Message de la responsable", "Facture oubliée", "Invitation sans date"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Message",
    vfQ: "L'objet de l'e-mail est « Message de la responsable ».",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Responsable du projet", "un voisin inconnu", "le service des impôts"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________.",
    fill: "Responsable",
    vfQ: "L'e-mail est envoyé par Responsable du projet.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela a-t-il lieu ?",
    text: ["mercredi 11 septembre", "la semaine prochaine sans date", "un dimanche de novembre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La date est _________ 11 septembre.",
    fill: "mercredi",
    vfQ: "L'activité a lieu mercredi 11 septembre.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "À quelle heure faut-il arriver ?",
    text: ["9 h 45", "7 h", "21 h 30"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut arriver à _________.",
    fill: "9",
    vfQ: "L'heure indiquée est 9 h 45.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle activité est proposée ?",
    text: ["un atelier lunch box du midi", "une réunion bancaire", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "atelier",
    vfQ: "Le texte parle de l'activité suivante : un atelier lunch box du midi.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["une boîte à repas", "un passeport", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "boîte",
    vfQ: "Il faut prévoir une boîte à repas.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quelle information pratique est donnée ?",
    text: ["22 CHF", "deux groupes", "aucun horaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix indiqué est _________.",
    fill: "22",
    vfQ: "Le prix indiqué est 22 CHF.",
    vfC: 0,
  }),
]);

const E11_1_CE_EMAIL_18_TEXT = `De : Équipe du samedi

Objet : Organisation du samedi

Bonjour,

L'équipe prépare le salon Harmonie pour une initiation aux herbes fraîches.
Les participants arrivent à 11 h 30 avec un petit pot vide.
La date exacte est jeudi 19 septembre.
Après la séance, un court échange expliquera comment réussir à utiliser le basilic, la menthe et le persil.

Une confirmation vous sera envoyée ensuite.
Merci de vérifier les informations avant de répondre.
Nous sommes ouverts du lundi au vendredi.
Cordialement, et bonne journée.
Les informations importantes sont déjà indiquées plus haut.
En cas de question, vous pouvez écrire ou téléphoner.
Une confirmation sera envoyée ensuite.
Le lieu est facile à trouver avec les indications.
Pensez à arriver un peu en avance.
Gardez ce texte pour vous en souvenir.
Nous restons disponibles pour vous aider.
Les horaires habituels restent les mêmes.
Merci de votre aide,

Équipe du samedi`;

const E11_1_CE_EMAIL_18_POOL = buildExpressPool("e11-1-ce-email-18", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Organisation du samedi", "Facture oubliée", "Invitation sans date"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Organisation",
    vfQ: "L'objet de l'e-mail est « Organisation du samedi ».",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Équipe du samedi", "un voisin inconnu", "le service des impôts"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________.",
    fill: "Équipe",
    vfQ: "L'e-mail est envoyé par Équipe du samedi.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela a-t-il lieu ?",
    text: ["jeudi 19 septembre", "la semaine prochaine sans date", "un dimanche de novembre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La date est _________ 19 septembre.",
    fill: "jeudi",
    vfQ: "L'activité a lieu jeudi 19 septembre.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "À quelle heure faut-il arriver ?",
    text: ["11 h 30", "7 h", "21 h 30"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut arriver à _________.",
    fill: "11",
    vfQ: "L'heure indiquée est 11 h 30.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle activité est proposée ?",
    text: ["une initiation aux herbes fraîches", "un cours de mécanique", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "initiation",
    vfQ: "Le texte parle de l'activité suivante : une initiation aux herbes fraîches.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["un petit pot vide", "une lampe de poche", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "petit",
    vfQ: "Il faut prévoir un petit pot vide.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quelle information pratique est donnée ?",
    text: ["28 CHF", "un petit groupe", "aucun horaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix indiqué est _________.",
    fill: "28",
    vfQ: "Le prix indiqué est 28 CHF.",
    vfC: 0,
  }),
]);

const E11_1_CE_EMAIL_19_TEXT = `De : Questionnaire qualité

Objet : Votre avis nous intéresse

Bonjour,

Vous avez récemment participé à un repas solidaire du quartier à la résidence du Parc.
Pouvez-vous dire si l'horaire de 15 h 45 vous convient ?
La prochaine séance est prévue vendredi 27 septembre.
Votre avis nous aidera à mieux organiser les moments pour servir un repas à plusieurs voisins.

Ce document complète les informations déjà données.
Nous comptons sur vous.
Le service répond en français et en anglais.
Une version audio est disponible sur demande.
Tout est organisé pour que ce soit simple.
À bientôt, et merci de votre lecture.
Je reste près de mon téléphone aujourd'hui.
Dis-moi si tu as besoin d'autre chose.
On peut aussi en parler demain matin.
J'espère que tout se passe bien de ton côté.
N'hésite pas à me répondre quand tu peux.
Je t'envoie aussi ce détail pour être clair.
Merci pour votre retour,

Questionnaire qualité`;

const E11_1_CE_EMAIL_19_POOL = buildExpressPool("e11-1-ce-email-19", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Votre avis nous intéresse", "Facture oubliée", "Invitation sans date"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Votre",
    vfQ: "L'objet de l'e-mail est « Votre avis nous intéresse ».",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Questionnaire qualité", "un voisin inconnu", "le service des impôts"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________.",
    fill: "Questionnaire",
    vfQ: "L'e-mail est envoyé par Questionnaire qualité.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela a-t-il lieu ?",
    text: ["vendredi 27 septembre", "la semaine prochaine sans date", "un dimanche de novembre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La date est _________ 27 septembre.",
    fill: "vendredi",
    vfQ: "L'activité a lieu vendredi 27 septembre.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "À quelle heure faut-il arriver ?",
    text: ["15 h 45", "7 h", "21 h 30"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut arriver à _________.",
    fill: "15",
    vfQ: "L'heure indiquée est 15 h 45.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle activité est proposée ?",
    text: ["un repas solidaire du quartier", "un match de football", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "repas",
    vfQ: "Le texte parle de l'activité suivante : un repas solidaire du quartier.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["un plat à partager", "un casque de vélo", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "plat",
    vfQ: "Il faut prévoir un plat à partager.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quelle information pratique est donnée ?",
    text: ["35 CHF", "toute la classe", "aucun horaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix indiqué est _________.",
    fill: "35",
    vfQ: "Le prix indiqué est 35 CHF.",
    vfC: 0,
  }),
]);

const E11_1_CE_EMAIL_20_TEXT = `De : Centre culturel

Objet : Prochaine rencontre

Bonjour,

Nous préparons une prochaine rencontre autour de une soirée recettes de famille.
Elle aura lieu samedi 5 octobre à 18 h 15 à le centre culturel.
Le tarif annoncé est 40 CHF et il reste les vingt premiers inscrits.
Cette fois, chacun devra apporter une photo de famille.

Sans confirmation, la place n'est pas garantie.
Je reste à votre disposition pour toute précision.
Merci de confirmer la bonne réception de ce message.
Vous pouvez répondre directement à cet e-mail.
Nous restons disponibles pour vous aider.
Les horaires habituels restent les mêmes.
Merci de votre attention et de votre patience.
Vous pouvez venir accompagné(e) si vous le souhaitez.
Un plan simple est disponible à l'accueil.
N'oubliez pas de vérifier la date et l'heure.
Le personnel peut répondre en français simple.
En cas de changement, un nouvel avis sera publié.
À bientôt,

Centre culturel`;

const E11_1_CE_EMAIL_20_POOL = buildExpressPool("e11-1-ce-email-20", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Prochaine rencontre", "Facture oubliée", "Invitation sans date"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Prochaine",
    vfQ: "L'objet de l'e-mail est « Prochaine rencontre ».",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Centre culturel", "un voisin inconnu", "le service des impôts"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________.",
    fill: "Centre",
    vfQ: "L'e-mail est envoyé par Centre culturel.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela a-t-il lieu ?",
    text: ["samedi 5 octobre", "la semaine prochaine sans date", "un dimanche de novembre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La date est _________ 5 octobre.",
    fill: "samedi",
    vfQ: "L'activité a lieu samedi 5 octobre.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "À quelle heure faut-il arriver ?",
    text: ["18 h 15", "7 h", "21 h 30"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut arriver à _________.",
    fill: "18",
    vfQ: "L'heure indiquée est 18 h 15.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle activité est proposée ?",
    text: ["une soirée recettes de famille", "une réunion bancaire", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "soirée",
    vfQ: "Le texte parle de l'activité suivante : une soirée recettes de famille.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["une photo de famille", "un passeport", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "photo",
    vfQ: "Il faut prévoir une photo de famille.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quelle information pratique est donnée ?",
    text: ["40 CHF", "les vingt premiers inscrits", "aucun horaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix indiqué est _________.",
    fill: "40",
    vfQ: "Le prix indiqué est 40 CHF.",
    vfC: 0,
  }),
]);

export const E11_1_CE_EMAIL: CommunicationExercise[] = [
readingPoolExercise({
  id: "e11-1-ce-email",
  readingText: E11_1_CE_EMAIL_TEXT,
  questionPool: E11_1_CE_EMAIL_POOL,
  questionCount: 6,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
readingPoolExercise({
  id: "e11-1-ce-email-2",
  readingText: E11_1_CE_EMAIL_2_TEXT,
  questionPool: E11_1_CE_EMAIL_2_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e11-1-ce-email-3",
  readingText: E11_1_CE_EMAIL_3_TEXT,
  questionPool: E11_1_CE_EMAIL_3_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e11-1-ce-email-4",
  readingText: E11_1_CE_EMAIL_4_TEXT,
  questionPool: E11_1_CE_EMAIL_4_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e11-1-ce-email-5",
  readingText: E11_1_CE_EMAIL_5_TEXT,
  questionPool: E11_1_CE_EMAIL_5_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e11-1-ce-email-6",
  readingText: E11_1_CE_EMAIL_6_TEXT,
  questionPool: E11_1_CE_EMAIL_6_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e11-1-ce-email-7",
  readingText: E11_1_CE_EMAIL_7_TEXT,
  questionPool: E11_1_CE_EMAIL_7_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e11-1-ce-email-8",
  readingText: E11_1_CE_EMAIL_8_TEXT,
  questionPool: E11_1_CE_EMAIL_8_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e11-1-ce-email-9",
  readingText: E11_1_CE_EMAIL_9_TEXT,
  questionPool: E11_1_CE_EMAIL_9_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e11-1-ce-email-10",
  readingText: E11_1_CE_EMAIL_10_TEXT,
  questionPool: E11_1_CE_EMAIL_10_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e11-1-ce-email-11",
  readingText: E11_1_CE_EMAIL_11_TEXT,
  questionPool: E11_1_CE_EMAIL_11_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e11-1-ce-email-12",
  readingText: E11_1_CE_EMAIL_12_TEXT,
  questionPool: E11_1_CE_EMAIL_12_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e11-1-ce-email-13",
  readingText: E11_1_CE_EMAIL_13_TEXT,
  questionPool: E11_1_CE_EMAIL_13_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e11-1-ce-email-14",
  readingText: E11_1_CE_EMAIL_14_TEXT,
  questionPool: E11_1_CE_EMAIL_14_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e11-1-ce-email-15",
  readingText: E11_1_CE_EMAIL_15_TEXT,
  questionPool: E11_1_CE_EMAIL_15_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e11-1-ce-email-16",
  readingText: E11_1_CE_EMAIL_16_TEXT,
  questionPool: E11_1_CE_EMAIL_16_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e11-1-ce-email-17",
  readingText: E11_1_CE_EMAIL_17_TEXT,
  questionPool: E11_1_CE_EMAIL_17_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e11-1-ce-email-18",
  readingText: E11_1_CE_EMAIL_18_TEXT,
  questionPool: E11_1_CE_EMAIL_18_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e11-1-ce-email-19",
  readingText: E11_1_CE_EMAIL_19_TEXT,
  questionPool: E11_1_CE_EMAIL_19_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e11-1-ce-email-20",
  readingText: E11_1_CE_EMAIL_20_TEXT,
  questionPool: E11_1_CE_EMAIL_20_POOL,
  questionCount: 6
}),
];

export const E11_1_PE_EMAIL: ExpressPePrompt[] = [

  {
    id: "e11-1-pee-1",
    title: "Accepter une invitation à dîner",
    situation: "Une amie vous invite à un repas chez elle.",
    sourceMessage: {
      from: "Julie",
      subject: "Repas samedi soir",
      body: "Bonjour,\nJ'organise un repas chez moi samedi soir à 19 h 30 pour fêter mon nouvel appartement.\nJe vais préparer des lasagnes. Tu peux venir ?\nJulie",
    },
    instruction: "Répondez à Julie : acceptez l'invitation, dites ce que vous apportez et posez une question sur l'adresse.",
    points: ["Votre accord", "Ce que vous apportez", "Une question sur l'adresse"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-1-pee-2",
    title: "Refuser une sortie au restaurant",
    situation: "Un ami vous propose d'aller au restaurant vendredi.",
    sourceMessage: {
      from: "Marco",
      subject: "Restaurant vendredi ?",
      body: "Salut !\nJ'ai découvert un nouveau restaurant italien près de la gare.\nÇa te dit d'y aller vendredi soir à 20 h ?\nMarco",
    },
    instruction: "Répondez à Marco : refusez poliment, expliquez pourquoi vous ne pouvez pas venir et proposez une autre date.",
    points: ["Un refus poli", "La raison", "Une autre date"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-1-pee-3",
    title: "Recommander un restaurant",
    situation: "Une amie cherche un restaurant pour l'anniversaire de sa mère.",
    sourceMessage: {
      from: "Aïcha",
      subject: "Un bon restaurant ?",
      body: "Coucou,\nJe cherche un bon restaurant pour l'anniversaire de ma mère, samedi prochain.\nTu connais une bonne adresse pas trop chère ?\nAïcha",
    },
    instruction: "Répondez à Aïcha : recommandez un restaurant, décrivez la cuisine et donnez une information sur les prix ou les horaires.",
    points: ["Le nom du restaurant", "La cuisine servie", "Les prix ou les horaires"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-1-pee-4",
    title: "Remercier après un repas",
    situation: "Vous avez mangé hier soir chez une amie, elle vous écrit.",
    sourceMessage: {
      from: "Sonia",
      subject: "Merci d'être venu(e) !",
      body: "Bonjour,\nMerci d'être venu(e) hier soir, c'était une très bonne soirée !\nJ'espère que le repas t'a plu.\nSonia",
    },
    instruction: "Répondez à Sonia : remerciez-la pour la soirée, dites quel plat vous avez préféré et demandez-lui la recette.",
    points: ["Un remerciement", "Le plat préféré", "Une demande de recette"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-1-pee-5",
    title: "Réserver une table",
    situation: "Vous avez demandé une réservation, le restaurant vous répond.",
    sourceMessage: {
      from: "Restaurant du Lac",
      subject: "Votre demande de réservation",
      body: "Bonjour,\nNous avons bien reçu votre demande de réservation.\nPouvez-vous nous préciser la date, l'heure et le nombre de personnes ?\nLe Restaurant du Lac",
    },
    instruction: "Répondez au restaurant : donnez la date et l'heure, précisez le nombre de personnes et signalez une allergie ou un régime spécial.",
    points: ["La date et l'heure", "Le nombre de personnes", "Une allergie ou un régime spécial"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-1-pee-6",
    title: "S'inscrire à un cours de cuisine",
    situation: "Une école de cuisine vous envoie une offre.",
    sourceMessage: {
      from: "École de cuisine La Toque",
      subject: "Cours de cuisine italienne",
      body: "Bonjour,\nNous proposons un cours de cuisine italienne le samedi matin, de 10 h à 12 h.\nLe prix est de quarante-cinq francs par cours.\nÊtes-vous intéressé(e) ?\nL'École La Toque",
    },
    instruction: "Répondez à l'école : inscrivez-vous au cours, dites quel est votre niveau en cuisine et posez une question sur le matériel à apporter.",
    points: ["Votre inscription", "Votre niveau en cuisine", "Une question sur le matériel"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-1-pee-7",
    title: "Raconter un repas de fête",
    situation: "Votre cousine veut savoir comment était le repas de mariage.",
    sourceMessage: {
      from: "Elena",
      subject: "Alors, ce mariage ?",
      body: "Coucou,\nTu es allé(e) au mariage de Léo samedi, non ?\nComment était le repas ? Raconte-moi tout !\nElena",
    },
    instruction: "Répondez à Elena : racontez le repas de mariage, décrivez deux plats et dites ce que vous avez préféré.",
    points: ["Le récit du repas", "Deux plats", "Ce que vous avez préféré"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-1-pee-8",
    title: "Parler de ses goûts culinaires",
    situation: "Un ami organise un dîner et vous pose des questions.",
    sourceMessage: {
      from: "Tom",
      subject: "Qu'est-ce que tu aimes manger ?",
      body: "Salut,\nJ'organise un dîner chez moi vendredi et je prépare le menu.\nQu'est-ce que tu aimes manger ? Tu as des allergies ?\nTom",
    },
    instruction: "Répondez à Tom : dites ce que vous aimez manger, ce que vous n'aimez pas ou ne pouvez pas manger, et remerciez-le pour l'invitation.",
    points: ["Ce que vous aimez", "Ce que vous n'aimez pas ou ne pouvez pas manger", "Un remerciement"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-1-pee-9",
    title: "Présenter une spécialité de son pays",
    situation: "Une collègue organise une soirée internationale.",
    sourceMessage: {
      from: "Claire",
      subject: "Soirée internationale",
      body: "Bonjour,\nSamedi, nous organisons une soirée internationale : chaque personne apporte une spécialité de son pays.\nQu'est-ce que tu vas apporter ?\nClaire",
    },
    instruction: "Répondez à Claire : dites quel plat de votre pays vous apportez, décrivez ce plat et demandez combien de personnes viennent à la soirée.",
    points: ["Le plat choisi", "Une description du plat", "Une question sur le nombre de personnes"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-1-pee-10",
    title: "Donner son avis à un restaurant",
    situation: "Après votre visite, le restaurant vous demande votre avis.",
    sourceMessage: {
      from: "Restaurant Chez Paul",
      subject: "Votre avis nous intéresse",
      body: "Bonjour,\nMerci de votre visite de samedi dernier.\nComment avez-vous trouvé le repas et le service ?\nVotre avis nous aide à progresser.\nRestaurant Chez Paul",
    },
    instruction: "Répondez au restaurant : remerciez, dites ce que vous avez aimé et faites une petite suggestion pour améliorer le restaurant.",
    points: ["Un remerciement", "Ce que vous avez aimé", "Une suggestion"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-1-pee-11",
    title: "Répondre — cuisine (11)",
    situation: "Vous avez reçu un e-mail concernant cuisine.",
sourceMessage: {
  from: "Service Cuisine",
  subject: "Votre demande — référence 1100",
  body: "Bonjour,\nNous avons bien reçu votre message concernant cuisine.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-1-pee-12",
    title: "Répondre — cuisine (12)",
    situation: "Vous avez reçu un e-mail concernant cuisine.",
sourceMessage: {
  from: "Service Cuisine",
  subject: "Votre demande — référence 1200",
  body: "Bonjour,\nNous avons bien reçu votre message concernant cuisine.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-1-pee-13",
    title: "Répondre — cuisine (13)",
    situation: "Vous avez reçu un e-mail concernant cuisine.",
sourceMessage: {
  from: "Service Cuisine",
  subject: "Votre demande — référence 1300",
  body: "Bonjour,\nNous avons bien reçu votre message concernant cuisine.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-1-pee-14",
    title: "Répondre — cuisine (14)",
    situation: "Vous avez reçu un e-mail concernant cuisine.",
sourceMessage: {
  from: "Service Cuisine",
  subject: "Votre demande — référence 1400",
  body: "Bonjour,\nNous avons bien reçu votre message concernant cuisine.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-1-pee-15",
    title: "Répondre — cuisine (15)",
    situation: "Vous avez reçu un e-mail concernant cuisine.",
sourceMessage: {
  from: "Service Cuisine",
  subject: "Votre demande — référence 1500",
  body: "Bonjour,\nNous avons bien reçu votre message concernant cuisine.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-1-pee-16",
    title: "Répondre — cuisine (16)",
    situation: "Vous avez reçu un e-mail concernant cuisine.",
sourceMessage: {
  from: "Service Cuisine",
  subject: "Votre demande — référence 1600",
  body: "Bonjour,\nNous avons bien reçu votre message concernant cuisine.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-1-pee-17",
    title: "Répondre — cuisine (17)",
    situation: "Vous avez reçu un e-mail concernant cuisine.",
sourceMessage: {
  from: "Service Cuisine",
  subject: "Votre demande — référence 1700",
  body: "Bonjour,\nNous avons bien reçu votre message concernant cuisine.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-1-pee-18",
    title: "Répondre — cuisine (18)",
    situation: "Vous avez reçu un e-mail concernant cuisine.",
sourceMessage: {
  from: "Service Cuisine",
  subject: "Votre demande — référence 1800",
  body: "Bonjour,\nNous avons bien reçu votre message concernant cuisine.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-1-pee-19",
    title: "Répondre — cuisine (19)",
    situation: "Vous avez reçu un e-mail concernant cuisine.",
sourceMessage: {
  from: "Service Cuisine",
  subject: "Votre demande — référence 1900",
  body: "Bonjour,\nNous avons bien reçu votre message concernant cuisine.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-1-pee-20",
    title: "Répondre — cuisine (20)",
    situation: "Vous avez reçu un e-mail concernant cuisine.",
sourceMessage: {
  from: "Service Cuisine",
  subject: "Votre demande — référence 2000",
  body: "Bonjour,\nNous avons bien reçu votre message concernant cuisine.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  }
];

/* ════════════════════════════════════════════════════════════════════════════
   E11.2 — Pratiquer une activité
   ════════════════════════════════════════════════════════════════════════════ */

const E11_2_CE_EMAIL_TEXT = `De : La responsable Nadia

Objet : Inscription à une marche facile au bord du lac

Bonjour,

C'est confirmé : vous avez une place pour une marche facile au bord du lac.
Notez bien le rendez-vous : lundi 6 mai, 9 h, à la Maison des Acacias.
Merci d'apporter des chaussures confortables. La participation est gratuite.
Cette rencontre aide à bouger sans fatigue.

Gardez ce texte pour vous en souvenir.
Les horaires habituels restent les mêmes.
Une question ? Écrivez ou téléphonez.
Conservez le numéro de contact indiqué.
Tout est organisé pour que ce soit simple.
À bientôt, et merci de votre lecture.
Je reste près de mon téléphone aujourd'hui.
Dis-moi si tu as besoin d'autre chose.
On peut aussi en parler demain matin.
J'espère que tout se passe bien de ton côté.
À bientôt,

La responsable Nadia`;

const E11_2_CE_EMAIL_POOL = buildExpressPool("e11-2-ce-email", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Inscription à une marche facile au bord du lac", "Facture oubliée", "Invitation sans date"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Inscription",
    vfQ: "L'objet de l'e-mail est « Inscription à une marche facile au bord du lac ».",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Qui envoie l'e-mail ?",
    text: ["La responsable Nadia", "un voisin inconnu", "le service des impôts"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________.",
    fill: "responsable",
    vfQ: "L'e-mail est envoyé par La responsable Nadia.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela a-t-il lieu ?",
    text: ["lundi 6 mai", "la semaine prochaine sans date", "un dimanche de novembre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La date est _________ 6 mai.",
    fill: "lundi",
    vfQ: "L'activité a lieu lundi 6 mai.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "À quelle heure faut-il arriver ?",
    text: ["9 h", "7 h", "21 h 30"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut arriver à _________.",
    fill: "9",
    vfQ: "L'heure indiquée est 9 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle activité est proposée ?",
    text: ["une marche facile au bord du lac", "une dégustation de soupe", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "marche",
    vfQ: "Le texte parle de l'activité suivante : une marche facile au bord du lac.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["des chaussures confortables", "un tablier de cuisine", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "chaussures",
    vfQ: "Il faut prévoir des chaussures confortables.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quelle information pratique est donnée ?",
    text: ["gratuit", "8 places", "aucun horaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix indiqué est _________.",
    fill: "gratuit",
    vfQ: "Le prix indiqué est gratuit.",
    vfC: 0,
  }),
]);

const E11_2_CE_EMAIL_2_TEXT = `De : Accueil du quartier

Objet : Rappel pour mardi 14 mai

Bonjour à toutes et à tous,

Je vous rappelle que un atelier poterie débutant est prévu mardi 14 mai.
Le groupe se retrouve à 10 h 15 devant la salle Jean-Monnet.
Comme il y a 10 places, merci de prévenir en cas d'absence.
N'oubliez pas un vieux t-shirt et lisez bien cette consigne : l'argile tache les vêtements.

Bonne journée et à tout de suite !
Je reste près de mon téléphone aujourd'hui.
On se voit bientôt, j'ai hâte.
Le trajet est simple, ne t'inquiète pas.
Le service est également disponible en ligne.
Respectez la file d'attente, s'il vous plaît.
Les personnes à mobilité réduite sont prioritaires.
En cas de perte d'objet, passez à l'accueil.
Le service client répond aussi par téléphone.
Merci de lire ce message jusqu'à la fin.
Les informations importantes sont déjà indiquées plus haut.
En cas de question, vous pouvez écrire ou téléphoner.
Bonne journée,

Accueil du quartier`;

const E11_2_CE_EMAIL_2_POOL = buildExpressPool("e11-2-ce-email-2", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Rappel pour mardi 14 mai", "Facture oubliée", "Invitation sans date"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Rappel",
    vfQ: "L'objet de l'e-mail est « Rappel pour mardi 14 mai ».",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Accueil du quartier", "un voisin inconnu", "le service des impôts"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________.",
    fill: "Accueil",
    vfQ: "L'e-mail est envoyé par Accueil du quartier.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela a-t-il lieu ?",
    text: ["mardi 14 mai", "la semaine prochaine sans date", "un dimanche de novembre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La date est _________ 14 mai.",
    fill: "mardi",
    vfQ: "L'activité a lieu mardi 14 mai.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "À quelle heure faut-il arriver ?",
    text: ["10 h 15", "7 h", "21 h 30"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut arriver à _________.",
    fill: "10",
    vfQ: "L'heure indiquée est 10 h 15.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle activité est proposée ?",
    text: ["un atelier poterie débutant", "un rendez-vous médical", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "atelier",
    vfQ: "Le texte parle de l'activité suivante : un atelier poterie débutant.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["un vieux t-shirt", "une carte bancaire", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "vieux",
    vfQ: "Il faut prévoir un vieux t-shirt.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quelle information pratique est donnée ?",
    text: ["5 CHF", "10 places", "aucun horaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix indiqué est _________.",
    fill: "5",
    vfQ: "Le prix indiqué est 5 CHF.",
    vfC: 0,
  }),
]);

const E11_2_CE_EMAIL_3_TEXT = `De : Service activités

Objet : Question avant une séance de danse latino

Bonjour,

J'ai vu l'annonce pour une séance de danse latino et je voudrais m'inscrire.
Pouvez-vous confirmer qu'il faut apporter une bouteille d'eau ?
Je peux venir mercredi 22 mai à 11 h à le centre du Lac.
Mon objectif est de oser danser devant les autres. Merci pour votre réponse.

Ce message contient les informations essentielles.
Nous vous remercions de votre compréhension.
Pour toute urgence, appelez-nous pendant les heures d'ouverture.
Je t'envoie aussi ce détail pour être clair.
Le trajet est simple, ne t'inquiète pas.
Passe le bonjour à tout le monde.
À très bientôt, prends soin de toi.
C'est important pour moi, merci beaucoup.
Nous traitons votre demande rapidement.
Vous pouvez répondre directement à ce message.
Merci de confirmer la bonne réception.
Cordialement,

Rami`;

const E11_2_CE_EMAIL_3_POOL = buildExpressPool("e11-2-ce-email-3", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Question avant une séance de danse latino", "Facture oubliée", "Invitation sans date"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Question",
    vfQ: "L'objet de l'e-mail est « Question avant une séance de danse latino ».",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Service activités", "un voisin inconnu", "le service des impôts"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________.",
    fill: "Service",
    vfQ: "L'e-mail est envoyé par Service activités.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela a-t-il lieu ?",
    text: ["mercredi 22 mai", "la semaine prochaine sans date", "un dimanche de novembre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La date est _________ 22 mai.",
    fill: "mercredi",
    vfQ: "L'activité a lieu mercredi 22 mai.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "À quelle heure faut-il arriver ?",
    text: ["11 h", "7 h", "21 h 30"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut arriver à _________.",
    fill: "11",
    vfQ: "L'heure indiquée est 11 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle activité est proposée ?",
    text: ["une séance de danse latino", "une vente de meubles", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "séance",
    vfQ: "Le texte parle de l'activité suivante : une séance de danse latino.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["une bouteille d'eau", "un livre de grammaire", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "bouteille",
    vfQ: "Il faut prévoir une bouteille d'eau.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quelle information pratique est donnée ?",
    text: ["8 CHF", "12 places", "aucun horaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix indiqué est _________.",
    fill: "8",
    vfQ: "Le prix indiqué est 8 CHF.",
    vfC: 0,
  }),
]);

const E11_2_CE_EMAIL_4_TEXT = `De : Association Bellevue

Objet : Confirmation de votre place

Madame, Monsieur,

Votre place pour une initiation au dessin urbain est réservée.
La séance aura lieu jeudi 30 mai à la ferme des Lilas.
Le contact est indiqué dans le message.
N'oubliez pas de vérifier la date.
Bonne journée à toutes et à tous.
Un plan simple est disponible à l'accueil.
Le personnel peut répondre en français simple.
En cas de changement, un nouvel avis sera publié.
Merci encore pour votre compréhension.
Conservez le numéro de contact indiqué.
Tout est organisé pour que ce soit simple.
À bientôt, et merci de votre lecture.
Je reste près de mon téléphone aujourd'hui.
Merci d'arriver à 12 h 30. La participation est de 10 CHF.
Le bénévole Marco sera sur place pour vous accueillir.

Avec nos salutations,

Association Bellevue`;

const E11_2_CE_EMAIL_4_POOL = buildExpressPool("e11-2-ce-email-4", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Confirmation de votre place", "Facture oubliée", "Invitation sans date"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Confirmation",
    vfQ: "L'objet de l'e-mail est « Confirmation de votre place ».",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Association Bellevue", "un voisin inconnu", "le service des impôts"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________.",
    fill: "Association",
    vfQ: "L'e-mail est envoyé par Association Bellevue.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela a-t-il lieu ?",
    text: ["jeudi 30 mai", "la semaine prochaine sans date", "un dimanche de novembre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La date est _________ 30 mai.",
    fill: "jeudi",
    vfQ: "L'activité a lieu jeudi 30 mai.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "À quelle heure faut-il arriver ?",
    text: ["12 h 30", "7 h", "21 h 30"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut arriver à _________.",
    fill: "12",
    vfQ: "L'heure indiquée est 12 h 30.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle activité est proposée ?",
    text: ["une initiation au dessin urbain", "une dégustation de soupe", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "initiation",
    vfQ: "Le texte parle de l'activité suivante : une initiation au dessin urbain.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["un crayon noir", "un tablier de cuisine", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "crayon",
    vfQ: "Il faut prévoir un crayon noir.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quelle information pratique est donnée ?",
    text: ["10 CHF", "14 places", "aucun horaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix indiqué est _________.",
    fill: "10",
    vfQ: "Le prix indiqué est 10 CHF.",
    vfC: 0,
  }),
]);

const E11_2_CE_EMAIL_5_TEXT = `De : Secrétariat du centre

Objet : Conseil pratique : un casque

Salut,

Petit conseil pour une sortie vélo tranquille : mets un casque dans ton sac.
Je t'attends vendredi 7 juin à 14 h à le foyer Bellevue.
Si tu veux rouler en sécurité, cette séance est très utile.
Attention : les vélos sont vérifiés avant le départ.

À demain,

Noé
Un agent peut vous accompagner jusqu'au bon guichet.
Le bâtiment est ouvert dès 8 heures.
Je reste à votre disposition pour toute précision.
Nous restons disponibles pour vous aider.
Les horaires habituels restent les mêmes.
Merci de votre attention et de votre patience.
Vous pouvez venir accompagné(e) si vous le souhaitez.
Un plan simple est disponible à l'accueil.
N'oubliez pas de vérifier la date et l'heure.
Le personnel peut répondre en français simple.
En cas de changement, un nouvel avis sera publié.
Bonne journée à toutes et à tous.
Merci de confirmer la bonne réception de ce message.`;

const E11_2_CE_EMAIL_5_POOL = buildExpressPool("e11-2-ce-email-5", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Conseil pratique : un casque", "Facture oubliée", "Invitation sans date"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Conseil",
    vfQ: "L'objet de l'e-mail est « Conseil pratique : un casque ».",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Secrétariat du centre", "un voisin inconnu", "le service des impôts"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________.",
    fill: "Secrétariat",
    vfQ: "L'e-mail est envoyé par Secrétariat du centre.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela a-t-il lieu ?",
    text: ["vendredi 7 juin", "la semaine prochaine sans date", "un dimanche de novembre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La date est _________ 7 juin.",
    fill: "vendredi",
    vfQ: "L'activité a lieu vendredi 7 juin.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "À quelle heure faut-il arriver ?",
    text: ["14 h", "7 h", "21 h 30"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut arriver à _________.",
    fill: "14",
    vfQ: "L'heure indiquée est 14 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle activité est proposée ?",
    text: ["une sortie vélo tranquille", "un rendez-vous médical", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "sortie",
    vfQ: "Le texte parle de l'activité suivante : une sortie vélo tranquille.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["un casque", "une carte bancaire", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "casque",
    vfQ: "Il faut prévoir un casque.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quelle information pratique est donnée ?",
    text: ["12 CHF", "15 places", "aucun horaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix indiqué est _________.",
    fill: "12",
    vfQ: "Le prix indiqué est 12 CHF.",
    vfC: 0,
  }),
]);

const E11_2_CE_EMAIL_6_TEXT = `De : Équipe organisation

Objet : Changement de salle

Bonjour,

Petit changement pour un cours de photographie avec téléphone : la salle prévue n'est plus libre.
Le nouveau lieu est la bibliothèque Nord. La date et l'heure ne changent pas : samedi 15 juin à 15 h 15.
Le prix reste 15 CHF et les 16 places sont gardées.
Merci de préparer un téléphone chargé.

Le temps est beau, alors tout devrait bien se passer.
Prenez un pull, au cas où il ferait plus frais.
Le parking le plus proche est gratuit le soir.
Le trajet est simple, ne t'inquiète pas.
Passe le bonjour à tout le monde.
À très bientôt, prends soin de toi.
C'est important pour moi, merci beaucoup.
Nous traitons votre demande rapidement.
Vous pouvez répondre directement à ce message.
Merci de confirmer la bonne réception.
Joignez les documents demandés si nécessaire.
Merci de votre compréhension,

Équipe organisation`;

const E11_2_CE_EMAIL_6_POOL = buildExpressPool("e11-2-ce-email-6", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Changement de salle", "Facture oubliée", "Invitation sans date"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Changement",
    vfQ: "L'objet de l'e-mail est « Changement de salle ».",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Équipe organisation", "un voisin inconnu", "le service des impôts"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________.",
    fill: "Équipe",
    vfQ: "L'e-mail est envoyé par Équipe organisation.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela a-t-il lieu ?",
    text: ["samedi 15 juin", "la semaine prochaine sans date", "un dimanche de novembre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La date est _________ 15 juin.",
    fill: "samedi",
    vfQ: "L'activité a lieu samedi 15 juin.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "À quelle heure faut-il arriver ?",
    text: ["15 h 15", "7 h", "21 h 30"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut arriver à _________.",
    fill: "15",
    vfQ: "L'heure indiquée est 15 h 15.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle activité est proposée ?",
    text: ["un cours de photographie avec téléphone", "une vente de meubles", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "cours",
    vfQ: "Le texte parle de l'activité suivante : un cours de photographie avec téléphone.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["un téléphone chargé", "un livre de grammaire", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "téléphone",
    vfQ: "Il faut prévoir un téléphone chargé.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quelle information pratique est donnée ?",
    text: ["15 CHF", "16 places", "aucun horaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix indiqué est _________.",
    fill: "15",
    vfQ: "Le prix indiqué est 15 CHF.",
    vfC: 0,
  }),
]);

const E11_2_CE_EMAIL_7_TEXT = `De : Club des habitants

Objet : Merci pour votre participation

Bonjour,

Merci pour votre présence lors de une partie de pétanque amicale à la terrasse du Marché.
Plusieurs personnes ont expliqué que la séance aide à jouer sans esprit de compétition.
Pour la prochaine fois, nous garderons dimanche 23 juin à 16 h.
Votre remarque sur une casquette a été notée.

Une confirmation vous sera envoyée ensuite.
Merci de vérifier les informations avant de répondre.
Nous sommes ouverts du lundi au vendredi.
Cordialement, et bonne journée.
Nous restons disponibles pour vous aider.
Les horaires habituels restent les mêmes.
Merci de votre attention et de votre patience.
Vous pouvez venir accompagné(e) si vous le souhaitez.
Un plan simple est disponible à l'accueil.
N'oubliez pas de vérifier la date et l'heure.
Le personnel peut répondre en français simple.
En cas de changement, un nouvel avis sera publié.
Bien à vous,

Club des habitants`;

const E11_2_CE_EMAIL_7_POOL = buildExpressPool("e11-2-ce-email-7", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Merci pour votre participation", "Facture oubliée", "Invitation sans date"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Merci",
    vfQ: "L'objet de l'e-mail est « Merci pour votre participation ».",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Club des habitants", "un voisin inconnu", "le service des impôts"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________.",
    fill: "Club",
    vfQ: "L'e-mail est envoyé par Club des habitants.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela a-t-il lieu ?",
    text: ["dimanche 23 juin", "la semaine prochaine sans date", "un dimanche de novembre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La date est _________ 23 juin.",
    fill: "dimanche",
    vfQ: "L'activité a lieu dimanche 23 juin.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "À quelle heure faut-il arriver ?",
    text: ["16 h", "7 h", "21 h 30"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut arriver à _________.",
    fill: "16",
    vfQ: "L'heure indiquée est 16 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle activité est proposée ?",
    text: ["une partie de pétanque amicale", "une dégustation de soupe", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "partie",
    vfQ: "Le texte parle de l'activité suivante : une partie de pétanque amicale.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["une casquette", "un tablier de cuisine", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "casquette",
    vfQ: "Il faut prévoir une casquette.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quelle information pratique est donnée ?",
    text: ["18 CHF", "18 places", "aucun horaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix indiqué est _________.",
    fill: "18",
    vfQ: "Le prix indiqué est 18 CHF.",
    vfC: 0,
  }),
]);

const E11_2_CE_EMAIL_8_TEXT = `De : Maison commune

Objet : Invitation loisirs

Bonjour les amis,

Ça vous dit de venir avec moi à un atelier théâtre court ?
Le rendez-vous est lundi 1er juillet à 17 h 30 à le local des Jeunes.
Il faut réserver directement sur place car il y a seulement 20 places.
Apportez un texte court et un peu de bonne humeur.

À très vite,

Mina
Les informations importantes sont déjà notées plus haut.
C'est important pour moi, merci beaucoup.
Nous traitons votre demande rapidement.
Vous pouvez répondre directement à ce message.
Merci de confirmer la bonne réception.
Joignez les documents demandés si nécessaire.
Nous vous souhaitons une excellente journée.
Le service est également disponible en ligne.
Respectez la file d'attente, s'il vous plaît.
Les personnes à mobilité réduite sont prioritaires.
Merci de votre attention et de votre patience.
Une confirmation arrivera ensuite.
Le lieu est facile à trouver.`;

const E11_2_CE_EMAIL_8_POOL = buildExpressPool("e11-2-ce-email-8", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Invitation loisirs", "Facture oubliée", "Invitation sans date"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Invitation",
    vfQ: "L'objet de l'e-mail est « Invitation loisirs ».",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Maison commune", "un voisin inconnu", "le service des impôts"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________.",
    fill: "Maison",
    vfQ: "L'e-mail est envoyé par Maison commune.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela a-t-il lieu ?",
    text: ["lundi 1er juillet", "la semaine prochaine sans date", "un dimanche de novembre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La date est _________ 1er juillet.",
    fill: "lundi",
    vfQ: "L'activité a lieu lundi 1er juillet.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "À quelle heure faut-il arriver ?",
    text: ["17 h 30", "7 h", "21 h 30"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut arriver à _________.",
    fill: "17",
    vfQ: "L'heure indiquée est 17 h 30.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle activité est proposée ?",
    text: ["un atelier théâtre court", "un rendez-vous médical", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "atelier",
    vfQ: "Le texte parle de l'activité suivante : un atelier théâtre court.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["un texte court", "une carte bancaire", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "texte",
    vfQ: "Il faut prévoir un texte court.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quelle information pratique est donnée ?",
    text: ["20 CHF", "20 places", "aucun horaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix indiqué est _________.",
    fill: "20",
    vfQ: "Le prix indiqué est 20 CHF.",
    vfC: 0,
  }),
]);

const E11_2_CE_EMAIL_9_TEXT = `De : Bureau des inscriptions

Objet : Liste du matériel

Bonjour,

Pour une séance de jardinage collectif, la petite liste est simple : des gants de jardin, une bouteille d'eau et un stylo.
Le rendez-vous reste mardi 9 juillet à 18 h à la salle des Fêtes.
Le tarif est 25 CHF.
Le thème principal sera : embellir un espace commun.

Gardez ce texte pour vous en souvenir.
Les horaires habituels restent les mêmes.
Une question ? Écrivez ou téléphonez.
Merci encore, et à bientôt.
Merci de votre attention et de votre patience.
Vous pouvez venir accompagné(e) si vous le souhaitez.
Un plan simple est disponible à l'accueil.
N'oubliez pas de vérifier la date et l'heure.
Le personnel peut répondre en français simple.
En cas de changement, un nouvel avis sera publié.
Bonne journée à toutes et à tous.
Merci,

Bureau des inscriptions`;

const E11_2_CE_EMAIL_9_POOL = buildExpressPool("e11-2-ce-email-9", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Liste du matériel", "Facture oubliée", "Invitation sans date"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Liste",
    vfQ: "L'objet de l'e-mail est « Liste du matériel ».",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Bureau des inscriptions", "un voisin inconnu", "le service des impôts"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________.",
    fill: "Bureau",
    vfQ: "L'e-mail est envoyé par Bureau des inscriptions.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela a-t-il lieu ?",
    text: ["mardi 9 juillet", "la semaine prochaine sans date", "un dimanche de novembre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La date est _________ 9 juillet.",
    fill: "mardi",
    vfQ: "L'activité a lieu mardi 9 juillet.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "À quelle heure faut-il arriver ?",
    text: ["18 h", "7 h", "21 h 30"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut arriver à _________.",
    fill: "18",
    vfQ: "L'heure indiquée est 18 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle activité est proposée ?",
    text: ["une séance de jardinage collectif", "une vente de meubles", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "séance",
    vfQ: "Le texte parle de l'activité suivante : une séance de jardinage collectif.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["des gants de jardin", "un livre de grammaire", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "gants",
    vfQ: "Il faut prévoir des gants de jardin.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quelle information pratique est donnée ?",
    text: ["25 CHF", "22 places", "aucun horaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix indiqué est _________.",
    fill: "25",
    vfQ: "Le prix indiqué est 25 CHF.",
    vfC: 0,
  }),
]);

const E11_2_CE_EMAIL_10_TEXT = `De : Info loisirs

Objet : Places disponibles

Bonjour,

Bonne nouvelle : une découverte du badminton n'est pas complet, il reste 24 places.
La séance aura lieu mercredi 17 juillet à 18 h 45 à le jardin partagé.
Merci de vous inscrire avec le QR code de l'affiche avant demain soir.
Prévoyez des baskets propres. Le prix est 30 CHF.

Le temps est beau, alors tout devrait bien se passer.
Prenez un pull, au cas où il ferait plus frais.
Le parking le plus proche est gratuit le soir.
Les horaires habituels restent les mêmes.
Merci de votre attention et de votre patience.
Vous pouvez venir accompagné(e) si vous le souhaitez.
Un plan simple est disponible à l'accueil.
N'oubliez pas de vérifier la date et l'heure.
Le personnel peut répondre en français simple.
En cas de changement, un nouvel avis sera publié.
Bonne journée à toutes et à tous.
Cordialement,

Info loisirs`;

const E11_2_CE_EMAIL_10_POOL = buildExpressPool("e11-2-ce-email-10", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Places disponibles", "Facture oubliée", "Invitation sans date"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Places",
    vfQ: "L'objet de l'e-mail est « Places disponibles ».",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Info loisirs", "un voisin inconnu", "le service des impôts"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________.",
    fill: "Info",
    vfQ: "L'e-mail est envoyé par Info loisirs.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela a-t-il lieu ?",
    text: ["mercredi 17 juillet", "la semaine prochaine sans date", "un dimanche de novembre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La date est _________ 17 juillet.",
    fill: "mercredi",
    vfQ: "L'activité a lieu mercredi 17 juillet.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "À quelle heure faut-il arriver ?",
    text: ["18 h 45", "7 h", "21 h 30"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut arriver à _________.",
    fill: "18",
    vfQ: "L'heure indiquée est 18 h 45.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle activité est proposée ?",
    text: ["une découverte du badminton", "une dégustation de soupe", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "découverte",
    vfQ: "Le texte parle de l'activité suivante : une découverte du badminton.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["des baskets propres", "un tablier de cuisine", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "baskets",
    vfQ: "Il faut prévoir des baskets propres.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quelle information pratique est donnée ?",
    text: ["30 CHF", "24 places", "aucun horaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix indiqué est _________.",
    fill: "30",
    vfQ: "Le prix indiqué est 30 CHF.",
    vfC: 0,
  }),
]);

const E11_2_CE_EMAIL_11_TEXT = `De : Groupe des bénévoles

Objet : Retour sur l'activité

Bonjour,

Depuis un club de jeux de société, nous recevons des messages très positifs.
Les participants ont surtout apprécié de passer une soirée calme.
La prochaine date est jeudi 25 juillet à 19 h à le café du Pont.
Cette fois, merci d'apporter un jeu préféré.

Au plaisir de vous revoir,

Groupe des bénévoles
Le lieu est facile à trouver.
Prenez votre temps pour comprendre le message.
En cas de changement, un nouvel avis sera publié.
Nous sommes là pour vous aider.
Nous restons disponibles pour vous aider.
Les horaires habituels restent les mêmes.
Merci de votre attention et de votre patience.
Vous pouvez venir accompagné(e) si vous le souhaitez.
Un plan simple est disponible à l'accueil.
N'oubliez pas de vérifier la date et l'heure.
Le personnel peut répondre en français simple.
Bonne journée à toutes et à tous.
Merci encore pour votre compréhension.`;

const E11_2_CE_EMAIL_11_POOL = buildExpressPool("e11-2-ce-email-11", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Retour sur l'activité", "Facture oubliée", "Invitation sans date"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Retour",
    vfQ: "L'objet de l'e-mail est « Retour sur l'activité ».",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Groupe des bénévoles", "un voisin inconnu", "le service des impôts"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________.",
    fill: "Groupe",
    vfQ: "L'e-mail est envoyé par Groupe des bénévoles.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela a-t-il lieu ?",
    text: ["jeudi 25 juillet", "la semaine prochaine sans date", "un dimanche de novembre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La date est _________ 25 juillet.",
    fill: "jeudi",
    vfQ: "L'activité a lieu jeudi 25 juillet.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "À quelle heure faut-il arriver ?",
    text: ["19 h", "7 h", "21 h 30"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut arriver à _________.",
    fill: "19",
    vfQ: "L'heure indiquée est 19 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle activité est proposée ?",
    text: ["un club de jeux de société", "un rendez-vous médical", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "club",
    vfQ: "Le texte parle de l'activité suivante : un club de jeux de société.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["un jeu préféré", "une carte bancaire", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "jeu",
    vfQ: "Il faut prévoir un jeu préféré.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quelle information pratique est donnée ?",
    text: ["4 CHF", "6 personnes", "aucun horaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix indiqué est _________.",
    fill: "4",
    vfQ: "Le prix indiqué est 4 CHF.",
    vfC: 0,
  }),
]);

const E11_2_CE_EMAIL_12_TEXT = `De : Réception

Objet : Rendez-vous à 8 h 30

Bonjour,

Votre rendez-vous lié à une promenade avec observation des oiseaux commence à 8 h 30.
Une confirmation vous sera envoyée ensuite.
Merci de vérifier les informations avant de répondre.
Nous sommes ouverts du lundi au vendredi.
Cordialement, et bonne journée.
Bonne journée à toutes et à tous.
Merci encore pour votre compréhension.
Conservez le numéro de contact indiqué.
Tout est organisé pour que ce soit simple.
À bientôt, et merci de votre lecture.
Je reste près de mon téléphone aujourd'hui.
Dis-moi si tu as besoin d'autre chose.
On peut aussi en parler demain matin.
Merci d'arriver à la maison médicale dix minutes avant.
La date est vendredi 2 août et le prix est 6 CHF.
La docteure Morel conseille de préparer des jumelles si possible.

Meilleures salutations,

Réception`;

const E11_2_CE_EMAIL_12_POOL = buildExpressPool("e11-2-ce-email-12", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Rendez-vous à 8 h 30", "Facture oubliée", "Invitation sans date"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Rendez",
    vfQ: "L'objet de l'e-mail est « Rendez-vous à 8 h 30 ».",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Réception", "un voisin inconnu", "le service des impôts"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________.",
    fill: "Réception",
    vfQ: "L'e-mail est envoyé par Réception.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela a-t-il lieu ?",
    text: ["vendredi 2 août", "la semaine prochaine sans date", "un dimanche de novembre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La date est _________ 2 août.",
    fill: "vendredi",
    vfQ: "L'activité a lieu vendredi 2 août.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "À quelle heure faut-il arriver ?",
    text: ["8 h 30", "7 h", "21 h 30"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut arriver à _________.",
    fill: "8",
    vfQ: "L'heure indiquée est 8 h 30.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle activité est proposée ?",
    text: ["une promenade avec observation des oiseaux", "une vente de meubles", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "promenade",
    vfQ: "Le texte parle de l'activité suivante : une promenade avec observation des oiseaux.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["des jumelles si possible", "un livre de grammaire", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "jumelles",
    vfQ: "Il faut prévoir des jumelles si possible.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quelle information pratique est donnée ?",
    text: ["6 CHF", "9 personnes", "aucun horaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix indiqué est _________.",
    fill: "6",
    vfQ: "Le prix indiqué est 6 CHF.",
    vfC: 0,
  }),
]);

const E11_2_CE_EMAIL_13_TEXT = `De : Atelier A2

Objet : Préparation de groupe

Chers participants,

Pour que un atelier réparation de vélo se passe bien, nous formons deux petits groupes.
Le premier groupe est attendu à 13 h à le parc des Amandiers.
La séance a lieu samedi 10 août avec l'entraîneuse Emma.
Merci de vérifier une chambre à air usée avant de partir.

Le contact est indiqué dans le message.
N'oubliez pas de vérifier la date.
Bonne journée à toutes et à tous.
Ce document complète les informations déjà données.
Un plan simple est disponible à l'accueil.
Le personnel peut répondre en français simple.
En cas de changement, un nouvel avis sera publié.
Merci encore pour votre compréhension.
Conservez le numéro de contact indiqué.
Tout est organisé pour que ce soit simple.
À bientôt, et merci de votre lecture.
Je reste près de mon téléphone aujourd'hui.
À bientôt,

Atelier A2`;

const E11_2_CE_EMAIL_13_POOL = buildExpressPool("e11-2-ce-email-13", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Préparation de groupe", "Facture oubliée", "Invitation sans date"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Préparation",
    vfQ: "L'objet de l'e-mail est « Préparation de groupe ».",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Atelier A2", "un voisin inconnu", "le service des impôts"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________.",
    fill: "Atelier",
    vfQ: "L'e-mail est envoyé par Atelier A2.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela a-t-il lieu ?",
    text: ["samedi 10 août", "la semaine prochaine sans date", "un dimanche de novembre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La date est _________ 10 août.",
    fill: "samedi",
    vfQ: "L'activité a lieu samedi 10 août.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "À quelle heure faut-il arriver ?",
    text: ["13 h", "7 h", "21 h 30"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut arriver à _________.",
    fill: "13",
    vfQ: "L'heure indiquée est 13 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle activité est proposée ?",
    text: ["un atelier réparation de vélo", "une dégustation de soupe", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "atelier",
    vfQ: "Le texte parle de l'activité suivante : un atelier réparation de vélo.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["une chambre à air usée", "un tablier de cuisine", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "chambre",
    vfQ: "Il faut prévoir une chambre à air usée.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quelle information pratique est donnée ?",
    text: ["9 CHF", "11 personnes", "aucun horaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix indiqué est _________.",
    fill: "9",
    vfQ: "Le prix indiqué est 9 CHF.",
    vfC: 0,
  }),
]);

const E11_2_CE_EMAIL_14_TEXT = `De : Coordination locale

Objet : Demande d'information

Bonjour,

Je vous écris car je cherche des informations sur une initiation au chant en groupe.
J'ai noté la date, dimanche 18 août, et l'heure, 14 h 45, à la boutique Horizon.
Pouvez-vous confirmer le prix de 11 CHF ?
Je viens surtout pour chanter juste avec le groupe.

Le service est disponible également en ligne.
Pensez à joindre les documents demandés.
Votre dossier sera mis à jour après votre réponse.
Nous vous souhaitons une excellente journée.
Le personnel peut répondre en français simple.
En cas de changement, un nouvel avis sera publié.
Bonne journée à toutes et à tous.
Merci encore pour votre compréhension.
Conservez le numéro de contact indiqué.
Tout est organisé pour que ce soit simple.
À bientôt, et merci de votre lecture.
Je reste près de mon téléphone aujourd'hui.
Merci d'avance,

Salma`;

const E11_2_CE_EMAIL_14_POOL = buildExpressPool("e11-2-ce-email-14", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Demande d'information", "Facture oubliée", "Invitation sans date"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Demande",
    vfQ: "L'objet de l'e-mail est « Demande d'information ».",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Coordination locale", "un voisin inconnu", "le service des impôts"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________.",
    fill: "Coordination",
    vfQ: "L'e-mail est envoyé par Coordination locale.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela a-t-il lieu ?",
    text: ["dimanche 18 août", "la semaine prochaine sans date", "un dimanche de novembre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La date est _________ 18 août.",
    fill: "dimanche",
    vfQ: "L'activité a lieu dimanche 18 août.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "À quelle heure faut-il arriver ?",
    text: ["14 h 45", "7 h", "21 h 30"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut arriver à _________.",
    fill: "14",
    vfQ: "L'heure indiquée est 14 h 45.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle activité est proposée ?",
    text: ["une initiation au chant en groupe", "un rendez-vous médical", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "initiation",
    vfQ: "Le texte parle de l'activité suivante : une initiation au chant en groupe.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["une chanson connue", "une carte bancaire", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "chanson",
    vfQ: "Il faut prévoir une chanson connue.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quelle information pratique est donnée ?",
    text: ["11 CHF", "13 personnes", "aucun horaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix indiqué est _________.",
    fill: "11",
    vfQ: "Le prix indiqué est 11 CHF.",
    vfC: 0,
  }),
]);

const E11_2_CE_EMAIL_15_TEXT = `De : Club Escalade Jura

Objet : Sortie falaise — liste complète

Bonjour à toutes et à tous,
La liste pour la sortie falaise du 3 octobre est complète (16 places).
Prochaine session initiation : dimanche 12 octobre, parking de St-Ursanne à 8 h 45.
Matériel fourni sauf chaussures d'approche.
Adhésion club obligatoire (40 CHF/an).
Sportivement, Karim
Les horaires habituels restent les mêmes.
Merci de votre attention et de votre patience.
Vous pouvez venir accompagné(e) si vous le souhaitez.
Un plan simple est disponible à l'accueil.
Le personnel peut répondre en français simple.
En cas de changement, un nouvel avis sera publié.
Bonne journée à toutes et à tous.
Merci encore pour votre compréhension.
Conservez le numéro de contact indiqué.
Merci encore, et à bientôt.
Tout est organisé pour que ce soit simple.
Le contact est indiqué dans le message.
N'oubliez pas de vérifier la date.`;

const E11_2_CE_EMAIL_15_POOL = buildExpressPool("e11-2-ce-email-15", [
  q({
    id: "cem-q1",
    textQ: "Pourquoi pas de place le 3 octobre ?",
    text: ["Liste complète (16 places)", "Mauvais temps annoncé", "Club fermé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ places",
    fill: "16",
    vfQ: "16 places.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Prochaine date ?",
    text: ["Dimanche 12 octobre", "3 octobre", "Janvier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "dimanche _________ octobre",
    fill: "12",
    vfQ: "12 octobre.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Lieu de rendez-vous ?",
    text: ["Parking de St-Ursanne", "Gare de Genève", "Piscine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "parking de _________.",
    fill: "St-Ursanne",
    vfQ: "St-Ursanne.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Heure de RDV ?",
    text: ["8 h 45", "16 h", "Midi"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "à _________ h 45",
    fill: "8",
    vfQ: "À 8 h 45.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Prix adhésion ?",
    text: ["40 CHF par an", "Gratuit", "400 CHF"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ CHF/an",
    fill: "40",
    vfQ: "40 CHF.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Qui signe ?",
    text: ["Karim", "Léa", "Nadia"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Sportivement, _________.",
    fill: "Karim",
    vfQ: "Karim.",
    vfC: 0,
  }),
]);

const E11_2_CE_EMAIL_16_TEXT = `De : Service rappel

Objet : Dernier rappel

Bonjour,

Dernier message avant une séance de yoga doux !
Rendez-vous mardi 3 septembre à 17 h à la place du Village.
L'entrée n'est garantie que si l'inscription est faite au stand d'information.
Apportez un tapis et gardez 16 CHF si besoin.

À tout à l'heure,

Service rappel
Vous pouvez venir accompagné(e) si vous le souhaitez.
Un plan simple est disponible à l'accueil.
Le personnel peut répondre en français simple.
En cas de changement, un nouvel avis sera publié.
Bonne journée à toutes et à tous.
Merci encore pour votre compréhension.
Conservez le numéro de contact indiqué.
À bientôt, et merci de votre lecture.
Je reste près de mon téléphone aujourd'hui.
Merci encore, et à bientôt.
Tout est organisé pour que ce soit simple.
Le contact est indiqué dans le message.
N'oubliez pas de vérifier la date.`;

const E11_2_CE_EMAIL_16_POOL = buildExpressPool("e11-2-ce-email-16", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Dernier rappel", "Facture oubliée", "Invitation sans date"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Dernier",
    vfQ: "L'objet de l'e-mail est « Dernier rappel ».",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Service rappel", "un voisin inconnu", "le service des impôts"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________.",
    fill: "Service",
    vfQ: "L'e-mail est envoyé par Service rappel.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela a-t-il lieu ?",
    text: ["mardi 3 septembre", "la semaine prochaine sans date", "un dimanche de novembre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La date est _________ 3 septembre.",
    fill: "mardi",
    vfQ: "L'activité a lieu mardi 3 septembre.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "À quelle heure faut-il arriver ?",
    text: ["17 h", "7 h", "21 h 30"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut arriver à _________.",
    fill: "17",
    vfQ: "L'heure indiquée est 17 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle activité est proposée ?",
    text: ["une séance de yoga doux", "une dégustation de soupe", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "séance",
    vfQ: "Le texte parle de l'activité suivante : une séance de yoga doux.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["un tapis", "un tablier de cuisine", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "tapis",
    vfQ: "Il faut prévoir un tapis.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quelle information pratique est donnée ?",
    text: ["16 CHF", "19 personnes", "aucun horaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix indiqué est _________.",
    fill: "16",
    vfQ: "Le prix indiqué est 16 CHF.",
    vfC: 0,
  }),
]);

const E11_2_CE_EMAIL_17_TEXT = `De : Responsable du projet

Objet : Message de la responsable

Bonjour,

Message de La coach Ana au sujet de un atelier bricolage en bois.
La rencontre est prévue mercredi 11 septembre à 9 h 45 à la halle des Sports.
Le but reste simple : apprendre à fabriquer une petite étagère.
Les informations importantes sont déjà notées plus haut.
Merci de votre attention et de votre patience.
Une confirmation arrivera ensuite.
Le lieu est facile à trouver.
On peut aussi en parler demain matin.
J'espère que tout se passe bien de ton côté.
N'hésite pas à me répondre quand tu peux.
Je t'envoie aussi ce détail pour être clair.
Le trajet est simple, ne t'inquiète pas.
Passe le bonjour à tout le monde.
À très bientôt, prends soin de toi.
C'est important pour moi, merci beaucoup.
Merci de respecter cette règle : les lunettes de protection sont obligatoires.

Bien cordialement,

Responsable du projet`;

const E11_2_CE_EMAIL_17_POOL = buildExpressPool("e11-2-ce-email-17", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Message de la responsable", "Facture oubliée", "Invitation sans date"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Message",
    vfQ: "L'objet de l'e-mail est « Message de la responsable ».",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Responsable du projet", "un voisin inconnu", "le service des impôts"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________.",
    fill: "Responsable",
    vfQ: "L'e-mail est envoyé par Responsable du projet.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela a-t-il lieu ?",
    text: ["mercredi 11 septembre", "la semaine prochaine sans date", "un dimanche de novembre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La date est _________ 11 septembre.",
    fill: "mercredi",
    vfQ: "L'activité a lieu mercredi 11 septembre.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "À quelle heure faut-il arriver ?",
    text: ["9 h 45", "7 h", "21 h 30"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut arriver à _________.",
    fill: "9",
    vfQ: "L'heure indiquée est 9 h 45.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle activité est proposée ?",
    text: ["un atelier bricolage en bois", "un rendez-vous médical", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "atelier",
    vfQ: "Le texte parle de l'activité suivante : un atelier bricolage en bois.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["un mètre pliant", "une carte bancaire", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "mètre",
    vfQ: "Il faut prévoir un mètre pliant.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quelle information pratique est donnée ?",
    text: ["22 CHF", "deux groupes", "aucun horaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix indiqué est _________.",
    fill: "22",
    vfQ: "Le prix indiqué est 22 CHF.",
    vfC: 0,
  }),
]);

const E11_2_CE_EMAIL_18_TEXT = `De : Équipe du samedi

Objet : Organisation du samedi

Bonjour,

L'équipe prépare le salon Harmonie pour une visite guidée du quartier.
Les participants arrivent à 11 h 30 avec une veste légère.
La date exacte est jeudi 19 septembre.
Après la séance, un court échange expliquera comment réussir à connaître l'histoire des rues.

En cas de changement, un nouvel avis sera publié.
Nous sommes là pour vous aider.
Gardez ce texte pour vous en souvenir.
Les horaires habituels restent les mêmes.
Merci encore pour votre compréhension.
Conservez le numéro de contact indiqué.
Tout est organisé pour que ce soit simple.
À bientôt, et merci de votre lecture.
Je reste près de mon téléphone aujourd'hui.
Dis-moi si tu as besoin d'autre chose.
On peut aussi en parler demain matin.
J'espère que tout se passe bien de ton côté.
Merci de votre aide,

Équipe du samedi`;

const E11_2_CE_EMAIL_18_POOL = buildExpressPool("e11-2-ce-email-18", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Organisation du samedi", "Facture oubliée", "Invitation sans date"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Organisation",
    vfQ: "L'objet de l'e-mail est « Organisation du samedi ».",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Équipe du samedi", "un voisin inconnu", "le service des impôts"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________.",
    fill: "Équipe",
    vfQ: "L'e-mail est envoyé par Équipe du samedi.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela a-t-il lieu ?",
    text: ["jeudi 19 septembre", "la semaine prochaine sans date", "un dimanche de novembre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La date est _________ 19 septembre.",
    fill: "jeudi",
    vfQ: "L'activité a lieu jeudi 19 septembre.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "À quelle heure faut-il arriver ?",
    text: ["11 h 30", "7 h", "21 h 30"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut arriver à _________.",
    fill: "11",
    vfQ: "L'heure indiquée est 11 h 30.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle activité est proposée ?",
    text: ["une visite guidée du quartier", "une vente de meubles", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "visite",
    vfQ: "Le texte parle de l'activité suivante : une visite guidée du quartier.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["une veste légère", "un livre de grammaire", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "veste",
    vfQ: "Il faut prévoir une veste légère.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quelle information pratique est donnée ?",
    text: ["28 CHF", "un petit groupe", "aucun horaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix indiqué est _________.",
    fill: "28",
    vfQ: "Le prix indiqué est 28 CHF.",
    vfC: 0,
  }),
]);

const E11_2_CE_EMAIL_19_TEXT = `De : Questionnaire qualité

Objet : Votre avis nous intéresse

Bonjour,

Vous avez récemment participé à un entraînement de marche nordique à la résidence du Parc.
Pouvez-vous dire si l'horaire de 15 h 45 vous convient ?
La prochaine séance est prévue vendredi 27 septembre.
Votre avis nous aidera à mieux organiser les moments pour marcher avec un bon rythme.

Ce message contient les informations essentielles.
Nous vous remercions de votre compréhension.
Pour toute urgence, appelez-nous pendant les heures d'ouverture.
Conservez ce message pour vos dossiers.
Bonne journée à toutes et à tous.
Merci encore pour votre compréhension.
Conservez le numéro de contact indiqué.
Tout est organisé pour que ce soit simple.
À bientôt, et merci de votre lecture.
Je reste près de mon téléphone aujourd'hui.
Dis-moi si tu as besoin d'autre chose.
On peut aussi en parler demain matin.
Merci pour votre retour,

Questionnaire qualité`;

const E11_2_CE_EMAIL_19_POOL = buildExpressPool("e11-2-ce-email-19", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Votre avis nous intéresse", "Facture oubliée", "Invitation sans date"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Votre",
    vfQ: "L'objet de l'e-mail est « Votre avis nous intéresse ».",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Questionnaire qualité", "un voisin inconnu", "le service des impôts"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________.",
    fill: "Questionnaire",
    vfQ: "L'e-mail est envoyé par Questionnaire qualité.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela a-t-il lieu ?",
    text: ["vendredi 27 septembre", "la semaine prochaine sans date", "un dimanche de novembre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La date est _________ 27 septembre.",
    fill: "vendredi",
    vfQ: "L'activité a lieu vendredi 27 septembre.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "À quelle heure faut-il arriver ?",
    text: ["15 h 45", "7 h", "21 h 30"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut arriver à _________.",
    fill: "15",
    vfQ: "L'heure indiquée est 15 h 45.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle activité est proposée ?",
    text: ["un entraînement de marche nordique", "une dégustation de soupe", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "entraînement",
    vfQ: "Le texte parle de l'activité suivante : un entraînement de marche nordique.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["deux bâtons", "un tablier de cuisine", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "deux",
    vfQ: "Il faut prévoir deux bâtons.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quelle information pratique est donnée ?",
    text: ["35 CHF", "toute la classe", "aucun horaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix indiqué est _________.",
    fill: "35",
    vfQ: "Le prix indiqué est 35 CHF.",
    vfC: 0,
  }),
]);

const E11_2_CE_EMAIL_20_TEXT = `De : Centre culturel

Objet : Prochaine rencontre

Bonjour,

Nous préparons une prochaine rencontre autour de une soirée cinéma-débat.
Elle aura lieu samedi 5 octobre à 18 h 15 à le centre culturel.
Le tarif annoncé est 40 CHF et il reste les vingt premiers inscrits.
Cette fois, chacun devra apporter une idée de film.

Voici quelques détails utiles pour la suite.
Lisez bien jusqu'à la fin, s'il vous plaît.
Vous pouvez demander de l'aide si besoin.
Les informations importantes sont déjà notées plus haut.
Tout est organisé pour que ce soit simple.
À bientôt, et merci de votre lecture.
Je reste près de mon téléphone aujourd'hui.
Dis-moi si tu as besoin d'autre chose.
On peut aussi en parler demain matin.
J'espère que tout se passe bien de ton côté.
N'hésite pas à me répondre quand tu peux.
Je t'envoie aussi ce détail pour être clair.
À bientôt,

Centre culturel`;

const E11_2_CE_EMAIL_20_POOL = buildExpressPool("e11-2-ce-email-20", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Prochaine rencontre", "Facture oubliée", "Invitation sans date"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Prochaine",
    vfQ: "L'objet de l'e-mail est « Prochaine rencontre ».",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Centre culturel", "un voisin inconnu", "le service des impôts"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________.",
    fill: "Centre",
    vfQ: "L'e-mail est envoyé par Centre culturel.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela a-t-il lieu ?",
    text: ["samedi 5 octobre", "la semaine prochaine sans date", "un dimanche de novembre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La date est _________ 5 octobre.",
    fill: "samedi",
    vfQ: "L'activité a lieu samedi 5 octobre.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "À quelle heure faut-il arriver ?",
    text: ["18 h 15", "7 h", "21 h 30"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut arriver à _________.",
    fill: "18",
    vfQ: "L'heure indiquée est 18 h 15.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle activité est proposée ?",
    text: ["une soirée cinéma-débat", "un rendez-vous médical", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "soirée",
    vfQ: "Le texte parle de l'activité suivante : une soirée cinéma-débat.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["une idée de film", "une carte bancaire", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "idée",
    vfQ: "Il faut prévoir une idée de film.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quelle information pratique est donnée ?",
    text: ["40 CHF", "les vingt premiers inscrits", "aucun horaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix indiqué est _________.",
    fill: "40",
    vfQ: "Le prix indiqué est 40 CHF.",
    vfC: 0,
  }),
]);

export const E11_2_CE_EMAIL: CommunicationExercise[] = [
readingPoolExercise({
  id: "e11-2-ce-email",
  readingText: E11_2_CE_EMAIL_TEXT,
  questionPool: E11_2_CE_EMAIL_POOL,
  questionCount: 6,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
readingPoolExercise({
  id: "e11-2-ce-email-2",
  readingText: E11_2_CE_EMAIL_2_TEXT,
  questionPool: E11_2_CE_EMAIL_2_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e11-2-ce-email-3",
  readingText: E11_2_CE_EMAIL_3_TEXT,
  questionPool: E11_2_CE_EMAIL_3_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e11-2-ce-email-4",
  readingText: E11_2_CE_EMAIL_4_TEXT,
  questionPool: E11_2_CE_EMAIL_4_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e11-2-ce-email-5",
  readingText: E11_2_CE_EMAIL_5_TEXT,
  questionPool: E11_2_CE_EMAIL_5_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e11-2-ce-email-6",
  readingText: E11_2_CE_EMAIL_6_TEXT,
  questionPool: E11_2_CE_EMAIL_6_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e11-2-ce-email-7",
  readingText: E11_2_CE_EMAIL_7_TEXT,
  questionPool: E11_2_CE_EMAIL_7_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e11-2-ce-email-8",
  readingText: E11_2_CE_EMAIL_8_TEXT,
  questionPool: E11_2_CE_EMAIL_8_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e11-2-ce-email-9",
  readingText: E11_2_CE_EMAIL_9_TEXT,
  questionPool: E11_2_CE_EMAIL_9_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e11-2-ce-email-10",
  readingText: E11_2_CE_EMAIL_10_TEXT,
  questionPool: E11_2_CE_EMAIL_10_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e11-2-ce-email-11",
  readingText: E11_2_CE_EMAIL_11_TEXT,
  questionPool: E11_2_CE_EMAIL_11_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e11-2-ce-email-12",
  readingText: E11_2_CE_EMAIL_12_TEXT,
  questionPool: E11_2_CE_EMAIL_12_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e11-2-ce-email-13",
  readingText: E11_2_CE_EMAIL_13_TEXT,
  questionPool: E11_2_CE_EMAIL_13_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e11-2-ce-email-14",
  readingText: E11_2_CE_EMAIL_14_TEXT,
  questionPool: E11_2_CE_EMAIL_14_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e11-2-ce-email-15",
  readingText: E11_2_CE_EMAIL_15_TEXT,
  questionPool: E11_2_CE_EMAIL_15_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e11-2-ce-email-16",
  readingText: E11_2_CE_EMAIL_16_TEXT,
  questionPool: E11_2_CE_EMAIL_16_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e11-2-ce-email-17",
  readingText: E11_2_CE_EMAIL_17_TEXT,
  questionPool: E11_2_CE_EMAIL_17_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e11-2-ce-email-18",
  readingText: E11_2_CE_EMAIL_18_TEXT,
  questionPool: E11_2_CE_EMAIL_18_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e11-2-ce-email-19",
  readingText: E11_2_CE_EMAIL_19_TEXT,
  questionPool: E11_2_CE_EMAIL_19_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e11-2-ce-email-20",
  readingText: E11_2_CE_EMAIL_20_TEXT,
  questionPool: E11_2_CE_EMAIL_20_POOL,
  questionCount: 6
}),
];

export const E11_2_PE_EMAIL: ExpressPePrompt[] = [

  {
    id: "e11-2-pee-1",
    title: "Accepter un cours d'essai",
    situation: "Une école de danse vous propose un cours d'essai gratuit.",
    sourceMessage: {
      from: "École de danse Tempo",
      subject: "Cours d'essai gratuit",
      body: "Bonjour,\nNous vous proposons un cours d'essai gratuit de salsa, jeudi à 19 h.\nÊtes-vous intéressé(e) ?\nL'École Tempo",
    },
    instruction: "Répondez à l'école : acceptez le cours d'essai, demandez quelle tenue il faut porter et posez une question sur le prix des cours.",
    points: ["Votre accord", "Une question sur la tenue", "Une question sur le prix"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-2-pee-2",
    title: "Proposer un sport à un ami",
    situation: "Un ami veut faire du sport avec vous.",
    sourceMessage: {
      from: "Lucas",
      subject: "Un sport ensemble ?",
      body: "Salut !\nJe veux faire du sport, mais tout seul, c'est ennuyeux.\nTu veux faire une activité avec moi ? Laquelle ?\nLucas",
    },
    instruction: "Répondez à Lucas : proposez une activité sportive, expliquez pourquoi vous l'aimez et proposez un jour pour commencer.",
    points: ["L'activité proposée", "Pourquoi vous l'aimez", "Un jour pour commencer"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-2-pee-3",
    title: "Compléter une inscription",
    situation: "Un atelier de dessin vous demande des informations.",
    sourceMessage: {
      from: "Atelier de dessin Couleurs",
      subject: "Votre inscription",
      body: "Bonjour,\nMerci pour votre demande d'inscription.\nPouvez-vous nous indiquer votre niveau en dessin et vos disponibilités ?\nL'Atelier Couleurs",
    },
    instruction: "Répondez à l'atelier : donnez votre niveau en dessin, indiquez vos disponibilités et posez une question sur le matériel à acheter.",
    points: ["Votre niveau", "Vos disponibilités", "Une question sur le matériel"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-2-pee-4",
    title: "Décrire ses loisirs",
    situation: "Une amie vous demande ce que vous faites le week-end.",
    sourceMessage: {
      from: "Emma",
      subject: "Tu fais quoi le week-end ?",
      body: "Coucou,\nJe cherche une nouvelle activité pour le week-end.\nToi, qu'est-ce que tu fais comme loisirs ? C'est bien ?\nEmma",
    },
    instruction: "Répondez à Emma : décrivez vos loisirs, dites depuis quand vous les pratiquez et invitez-la à essayer avec vous.",
    points: ["Vos loisirs", "Depuis quand", "Une invitation à essayer"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-2-pee-5",
    title: "Répondre à un changement d'horaire",
    situation: "Votre club de natation change l'horaire du cours.",
    sourceMessage: {
      from: "Club de natation Les Dauphins",
      subject: "Changement d'horaire",
      body: "Bonjour,\nÀ partir du mois prochain, votre cours de natation du mardi à 18 h est déplacé au jeudi à 19 h.\nCet horaire vous convient-il ?\nLe Club Les Dauphins",
    },
    instruction: "Répondez au club : dites si le nouvel horaire vous convient ou non, expliquez pourquoi et posez une question sur les autres horaires possibles.",
    points: ["Votre réponse sur l'horaire", "La raison", "Une question sur les autres horaires"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-2-pee-6",
    title: "Renseigner un ami sur un cours",
    situation: "Un ami veut des informations sur votre cours de guitare.",
    sourceMessage: {
      from: "Hugo",
      subject: "Cours de guitare",
      body: "Salut,\nTu prends des cours de guitare, non ? Moi aussi, je veux commencer.\nC'est bien ? Ça coûte combien ? C'est quand ?\nHugo",
    },
    instruction: "Répondez à Hugo : racontez comment se passe votre cours, donnez le prix et les horaires, et recommandez (ou non) votre école.",
    points: ["Comment se passe le cours", "Le prix et les horaires", "Votre recommandation"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-2-pee-7",
    title: "Refuser une partie de badminton",
    situation: "Une amie vous propose un match samedi matin.",
    sourceMessage: {
      from: "Chloé",
      subject: "Match de badminton samedi",
      body: "Salut !\nÇa te dit un match de badminton samedi matin à 10 h ?\nJ'ai réservé un terrain à la salle de sport.\nChloé",
    },
    instruction: "Répondez à Chloé : refusez poliment, expliquez ce que vous devez faire samedi matin et proposez un autre moment pour jouer.",
    points: ["Un refus poli", "La raison", "Un autre moment"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-2-pee-8",
    title: "Choisir une activité",
    situation: "Le centre de loisirs présente son nouveau programme.",
    sourceMessage: {
      from: "Centre de loisirs de la Ville",
      subject: "Activités d'automne",
      body: "Bonjour,\nCet automne, nous proposons trois nouvelles activités : yoga, théâtre et photographie.\nQuelle activité vous intéresse ?\nLe Centre de loisirs",
    },
    instruction: "Répondez au centre de loisirs : choisissez une activité, expliquez pourquoi elle vous intéresse et demandez les horaires et le prix.",
    points: ["L'activité choisie", "Pourquoi", "Une question sur les horaires et le prix"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-2-pee-9",
    title: "Raconter son premier cours",
    situation: "Votre sœur veut savoir comment était votre premier cours de danse.",
    sourceMessage: {
      from: "Mila",
      subject: "Ton premier cours de danse ?",
      body: "Coucou,\nAlors, tu as commencé la danse mardi ?\nComment était le premier cours ? Raconte !\nMila",
    },
    instruction: "Répondez à Mila : racontez votre premier cours de danse, dites ce que vous avez aimé et si vous allez continuer.",
    points: ["Le récit du premier cours", "Ce que vous avez aimé", "Si vous continuez"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-2-pee-10",
    title: "Louer un instrument",
    situation: "L'école de musique vous pose une question sur le matériel.",
    sourceMessage: {
      from: "École de musique La Clé de Sol",
      subject: "Matériel pour le cours",
      body: "Bonjour,\nAvez-vous déjà une guitare pour le cours ?\nSi non, nous pouvons vous en louer une pour vingt francs par mois.\nL'école de musique",
    },
    instruction: "Répondez à l'école : dites si vous avez déjà une guitare, acceptez ou refusez la location et posez une question sur le premier cours.",
    points: ["Si vous avez une guitare", "Votre décision sur la location", "Une question sur le premier cours"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-2-pee-11",
    title: "Répondre — activités (11)",
    situation: "Vous avez reçu un e-mail concernant activités.",
sourceMessage: {
  from: "Service Activités",
  subject: "Votre demande — référence 1100",
  body: "Bonjour,\nNous avons bien reçu votre message concernant activités.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-2-pee-12",
    title: "Répondre — activités (12)",
    situation: "Vous avez reçu un e-mail concernant activités.",
sourceMessage: {
  from: "Service Activités",
  subject: "Votre demande — référence 1200",
  body: "Bonjour,\nNous avons bien reçu votre message concernant activités.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-2-pee-13",
    title: "Répondre — activités (13)",
    situation: "Vous avez reçu un e-mail concernant activités.",
sourceMessage: {
  from: "Service Activités",
  subject: "Votre demande — référence 1300",
  body: "Bonjour,\nNous avons bien reçu votre message concernant activités.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-2-pee-14",
    title: "Répondre — activités (14)",
    situation: "Vous avez reçu un e-mail concernant activités.",
sourceMessage: {
  from: "Service Activités",
  subject: "Votre demande — référence 1400",
  body: "Bonjour,\nNous avons bien reçu votre message concernant activités.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-2-pee-15",
    title: "Répondre — activités (15)",
    situation: "Vous avez reçu un e-mail concernant activités.",
sourceMessage: {
  from: "Service Activités",
  subject: "Votre demande — référence 1500",
  body: "Bonjour,\nNous avons bien reçu votre message concernant activités.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-2-pee-16",
    title: "Répondre — activités (16)",
    situation: "Vous avez reçu un e-mail concernant activités.",
sourceMessage: {
  from: "Service Activités",
  subject: "Votre demande — référence 1600",
  body: "Bonjour,\nNous avons bien reçu votre message concernant activités.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-2-pee-17",
    title: "Répondre — activités (17)",
    situation: "Vous avez reçu un e-mail concernant activités.",
sourceMessage: {
  from: "Service Activités",
  subject: "Votre demande — référence 1700",
  body: "Bonjour,\nNous avons bien reçu votre message concernant activités.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-2-pee-18",
    title: "Répondre — activités (18)",
    situation: "Vous avez reçu un e-mail concernant activités.",
sourceMessage: {
  from: "Service Activités",
  subject: "Votre demande — référence 1800",
  body: "Bonjour,\nNous avons bien reçu votre message concernant activités.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-2-pee-19",
    title: "Répondre — activités (19)",
    situation: "Vous avez reçu un e-mail concernant activités.",
sourceMessage: {
  from: "Service Activités",
  subject: "Votre demande — référence 1900",
  body: "Bonjour,\nNous avons bien reçu votre message concernant activités.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-2-pee-20",
    title: "Répondre — activités (20)",
    situation: "Vous avez reçu un e-mail concernant activités.",
sourceMessage: {
  from: "Service Activités",
  subject: "Votre demande — référence 2000",
  body: "Bonjour,\nNous avons bien reçu votre message concernant activités.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  }
];

/* ════════════════════════════════════════════════════════════════════════════
   E11.3 — Partager ses goûts
   ════════════════════════════════════════════════════════════════════════════ */

const E11_3_CE_EMAIL_TEXT = `De : La responsable Nadia

Objet : Inscription à un cercle de discussion sur les séries

Bonjour,

C'est confirmé : vous avez une place pour un cercle de discussion sur les séries.
Notez bien le rendez-vous : lundi 6 mai, 9 h, à la Maison des Acacias.
Merci d'apporter le nom d'une série. La participation est gratuite.
Cette rencontre aide à dire pourquoi on aime une histoire.

Merci encore, et à bientôt.
Tout est organisé pour que ce soit simple.
Le contact est indiqué dans le message.
Le lieu est facile à trouver avec les indications.
Pensez à arriver un peu en avance.
Gardez ce texte pour vous en souvenir.
Nous restons disponibles pour vous aider.
Les horaires habituels restent les mêmes.
Merci de votre attention et de votre patience.
Vous pouvez venir accompagné(e) si vous le souhaitez.
Un plan simple est disponible à l'accueil.
À bientôt,

La responsable Nadia`;

const E11_3_CE_EMAIL_POOL = buildExpressPool("e11-3-ce-email", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Inscription à un cercle de discussion sur les séries", "Facture oubliée", "Invitation sans date"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Inscription",
    vfQ: "L'objet de l'e-mail est « Inscription à un cercle de discussion sur les séries ».",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Qui envoie l'e-mail ?",
    text: ["La responsable Nadia", "un voisin inconnu", "le service des impôts"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________.",
    fill: "responsable",
    vfQ: "L'e-mail est envoyé par La responsable Nadia.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela a-t-il lieu ?",
    text: ["lundi 6 mai", "la semaine prochaine sans date", "un dimanche de novembre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La date est _________ 6 mai.",
    fill: "lundi",
    vfQ: "L'activité a lieu lundi 6 mai.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "À quelle heure faut-il arriver ?",
    text: ["9 h", "7 h", "21 h 30"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut arriver à _________.",
    fill: "9",
    vfQ: "L'heure indiquée est 9 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle activité est proposée ?",
    text: ["un cercle de discussion sur les séries", "un contrôle de maths", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "cercle",
    vfQ: "Le texte parle de l'activité suivante : un cercle de discussion sur les séries.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["le nom d'une série", "une fourchette", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "nom",
    vfQ: "Il faut prévoir le nom d'une série.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quelle information pratique est donnée ?",
    text: ["gratuit", "8 places", "aucun horaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix indiqué est _________.",
    fill: "gratuit",
    vfQ: "Le prix indiqué est gratuit.",
    vfC: 0,
  }),
]);

const E11_3_CE_EMAIL_2_TEXT = `De : Accueil du quartier

Objet : Rappel pour mardi 14 mai

Bonjour à toutes et à tous,

Je vous rappelle que une écoute de chansons francophones est prévu mardi 14 mai.
Le groupe se retrouve à 10 h 15 devant la salle Jean-Monnet.
Comme il y a 10 places, merci de prévenir en cas d'absence.
N'oubliez pas un écouteur et lisez bien cette consigne : le volume reste bas.

Le message est aussi envoyé au groupe WhatsApp.
Si vous changez d'avis, dites-le sans attendre.
On peut décaler d'une demi-heure si besoin.
Je t'écris aussi pour te donner un peu plus de nouvelles.
En cas de question, vous pouvez écrire ou téléphoner.
Une confirmation sera envoyée ensuite.
Le lieu est facile à trouver avec les indications.
Pensez à arriver un peu en avance.
Gardez ce texte pour vous en souvenir.
Nous restons disponibles pour vous aider.
Les horaires habituels restent les mêmes.
Merci de votre attention et de votre patience.
Bonne journée,

Accueil du quartier`;

const E11_3_CE_EMAIL_2_POOL = buildExpressPool("e11-3-ce-email-2", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Rappel pour mardi 14 mai", "Facture oubliée", "Invitation sans date"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Rappel",
    vfQ: "L'objet de l'e-mail est « Rappel pour mardi 14 mai ».",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Accueil du quartier", "un voisin inconnu", "le service des impôts"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________.",
    fill: "Accueil",
    vfQ: "L'e-mail est envoyé par Accueil du quartier.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela a-t-il lieu ?",
    text: ["mardi 14 mai", "la semaine prochaine sans date", "un dimanche de novembre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La date est _________ 14 mai.",
    fill: "mardi",
    vfQ: "L'activité a lieu mardi 14 mai.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "À quelle heure faut-il arriver ?",
    text: ["10 h 15", "7 h", "21 h 30"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut arriver à _________.",
    fill: "10",
    vfQ: "L'heure indiquée est 10 h 15.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle activité est proposée ?",
    text: ["une écoute de chansons francophones", "une visite médicale", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "écoute",
    vfQ: "Le texte parle de l'activité suivante : une écoute de chansons francophones.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["un écouteur", "un sac de ciment", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "écouteur",
    vfQ: "Il faut prévoir un écouteur.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quelle information pratique est donnée ?",
    text: ["5 CHF", "10 places", "aucun horaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix indiqué est _________.",
    fill: "5",
    vfQ: "Le prix indiqué est 5 CHF.",
    vfC: 0,
  }),
]);

const E11_3_CE_EMAIL_3_TEXT = `De : Service activités

Objet : Question avant un échange de livres préférés

Bonjour,

J'ai vu l'annonce pour un échange de livres préférés et je voudrais m'inscrire.
Pouvez-vous confirmer qu'il faut apporter un livre à conseiller ?
Je peux venir mercredi 22 mai à 11 h à le centre du Lac.
Mon objectif est de conseiller une lecture à un ami. Merci pour votre réponse.

Merci encore, et à bientôt.
Tout est organisé pour que ce soit simple.
Le contact est indiqué dans le message.
Merci encore pour votre compréhension.
Conservez le numéro de contact indiqué.
À bientôt, et merci de votre lecture.
Je reste près de mon téléphone aujourd'hui.
Dis-moi si tu as besoin d'autre chose.
On peut aussi en parler demain matin.
J'espère que tout se passe bien de ton côté.
N'hésite pas à me répondre quand tu peux.
Cordialement,

Rami`;

const E11_3_CE_EMAIL_3_POOL = buildExpressPool("e11-3-ce-email-3", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Question avant un échange de livres préférés", "Facture oubliée", "Invitation sans date"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Question",
    vfQ: "L'objet de l'e-mail est « Question avant un échange de livres préférés ».",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Service activités", "un voisin inconnu", "le service des impôts"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________.",
    fill: "Service",
    vfQ: "L'e-mail est envoyé par Service activités.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela a-t-il lieu ?",
    text: ["mercredi 22 mai", "la semaine prochaine sans date", "un dimanche de novembre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La date est _________ 22 mai.",
    fill: "mercredi",
    vfQ: "L'activité a lieu mercredi 22 mai.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "À quelle heure faut-il arriver ?",
    text: ["11 h", "7 h", "21 h 30"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut arriver à _________.",
    fill: "11",
    vfQ: "L'heure indiquée est 11 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle activité est proposée ?",
    text: ["un échange de livres préférés", "un entraînement silencieux", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "échange",
    vfQ: "Le texte parle de l'activité suivante : un échange de livres préférés.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["un livre à conseiller", "un billet d'avion", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "livre",
    vfQ: "Il faut prévoir un livre à conseiller.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quelle information pratique est donnée ?",
    text: ["8 CHF", "12 places", "aucun horaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix indiqué est _________.",
    fill: "8",
    vfQ: "Le prix indiqué est 8 CHF.",
    vfC: 0,
  }),
]);

const E11_3_CE_EMAIL_4_TEXT = `De : Association Bellevue

Objet : Confirmation de votre place

Madame, Monsieur,

Votre place pour une visite d'exposition colorée est réservée.
La séance aura lieu jeudi 30 mai à la ferme des Lilas.
Un agent peut vous accompagner jusqu'au bon guichet.
Le bâtiment est ouvert dès 8 heures.
Je reste à votre disposition pour toute précision.
On peut aussi en parler demain matin.
J'espère que tout se passe bien de ton côté.
N'hésite pas à me répondre quand tu peux.
Je t'envoie aussi ce détail pour être clair.
Le trajet est simple, ne t'inquiète pas.
Passe le bonjour à tout le monde.
À très bientôt, prends soin de toi.
C'est important pour moi, merci beaucoup.
Merci d'arriver à 12 h 30. La participation est de 10 CHF.
Le bénévole Marco sera sur place pour vous accueillir.

Avec nos salutations,

Association Bellevue`;

const E11_3_CE_EMAIL_4_POOL = buildExpressPool("e11-3-ce-email-4", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Confirmation de votre place", "Facture oubliée", "Invitation sans date"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Confirmation",
    vfQ: "L'objet de l'e-mail est « Confirmation de votre place ».",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Association Bellevue", "un voisin inconnu", "le service des impôts"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________.",
    fill: "Association",
    vfQ: "L'e-mail est envoyé par Association Bellevue.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela a-t-il lieu ?",
    text: ["jeudi 30 mai", "la semaine prochaine sans date", "un dimanche de novembre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La date est _________ 30 mai.",
    fill: "jeudi",
    vfQ: "L'activité a lieu jeudi 30 mai.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "À quelle heure faut-il arriver ?",
    text: ["12 h 30", "7 h", "21 h 30"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut arriver à _________.",
    fill: "12",
    vfQ: "L'heure indiquée est 12 h 30.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle activité est proposée ?",
    text: ["une visite d'exposition colorée", "un contrôle de maths", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "visite",
    vfQ: "Le texte parle de l'activité suivante : une visite d'exposition colorée.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["un carnet de notes", "une fourchette", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "carnet",
    vfQ: "Il faut prévoir un carnet de notes.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quelle information pratique est donnée ?",
    text: ["10 CHF", "14 places", "aucun horaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix indiqué est _________.",
    fill: "10",
    vfQ: "Le prix indiqué est 10 CHF.",
    vfC: 0,
  }),
]);

const E11_3_CE_EMAIL_5_TEXT = `De : Secrétariat du centre

Objet : Conseil pratique : le titre d'un film

Salut,

Petit conseil pour un atelier critiques de films : mets le titre d'un film dans ton sac.
Je t'attends vendredi 7 juin à 14 h à le foyer Bellevue.
Si tu veux donner un avis clair sur un film, cette séance est très utile.
Attention : les avis négatifs restent respectueux.

À demain,

Noé
En cas de changement, un nouvel avis sera publié.
Nous sommes là pour vous aider.
Gardez ce texte pour vous en souvenir.
Les horaires habituels restent les mêmes.
Vous pouvez venir accompagné(e) si vous le souhaitez.
Un plan simple est disponible à l'accueil.
N'oubliez pas de vérifier la date et l'heure.
Le personnel peut répondre en français simple.
Bonne journée à toutes et à tous.
Merci encore pour votre compréhension.
Conservez le numéro de contact indiqué.
Tout est organisé pour que ce soit simple.
À bientôt, et merci de votre lecture.`;

const E11_3_CE_EMAIL_5_POOL = buildExpressPool("e11-3-ce-email-5", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Conseil pratique : le titre d'un film", "Facture oubliée", "Invitation sans date"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Conseil",
    vfQ: "L'objet de l'e-mail est « Conseil pratique : le titre d'un film ».",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Secrétariat du centre", "un voisin inconnu", "le service des impôts"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________.",
    fill: "Secrétariat",
    vfQ: "L'e-mail est envoyé par Secrétariat du centre.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela a-t-il lieu ?",
    text: ["vendredi 7 juin", "la semaine prochaine sans date", "un dimanche de novembre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La date est _________ 7 juin.",
    fill: "vendredi",
    vfQ: "L'activité a lieu vendredi 7 juin.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "À quelle heure faut-il arriver ?",
    text: ["14 h", "7 h", "21 h 30"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut arriver à _________.",
    fill: "14",
    vfQ: "L'heure indiquée est 14 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle activité est proposée ?",
    text: ["un atelier critiques de films", "une visite médicale", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "atelier",
    vfQ: "Le texte parle de l'activité suivante : un atelier critiques de films.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["le titre d'un film", "un sac de ciment", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "titre",
    vfQ: "Il faut prévoir le titre d'un film.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quelle information pratique est donnée ?",
    text: ["12 CHF", "15 places", "aucun horaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix indiqué est _________.",
    fill: "12",
    vfQ: "Le prix indiqué est 12 CHF.",
    vfC: 0,
  }),
]);

const E11_3_CE_EMAIL_6_TEXT = `De : Équipe organisation

Objet : Changement de salle

Bonjour,

Petit changement pour une playlist collective : la salle prévue n'est plus libre.
Le nouveau lieu est la bibliothèque Nord. La date et l'heure ne changent pas : samedi 15 juin à 15 h 15.
Le prix reste 15 CHF et les 16 places sont gardées.
Merci de préparer trois chansons.

N'hésitez pas à nous indiquer vos disponibilités.
Ce message contient les informations essentielles.
Nous vous remercions de votre compréhension.
Le service est également disponible en ligne.
Respectez la file d'attente, s'il vous plaît.
Les personnes à mobilité réduite sont prioritaires.
En cas de perte d'objet, passez à l'accueil.
Le service client répond aussi par téléphone.
Merci de lire ce message jusqu'à la fin.
Les informations importantes sont déjà indiquées plus haut.
En cas de question, vous pouvez écrire ou téléphoner.
Merci de votre compréhension,

Équipe organisation`;

const E11_3_CE_EMAIL_6_POOL = buildExpressPool("e11-3-ce-email-6", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Changement de salle", "Facture oubliée", "Invitation sans date"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Changement",
    vfQ: "L'objet de l'e-mail est « Changement de salle ».",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Équipe organisation", "un voisin inconnu", "le service des impôts"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________.",
    fill: "Équipe",
    vfQ: "L'e-mail est envoyé par Équipe organisation.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela a-t-il lieu ?",
    text: ["samedi 15 juin", "la semaine prochaine sans date", "un dimanche de novembre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La date est _________ 15 juin.",
    fill: "samedi",
    vfQ: "L'activité a lieu samedi 15 juin.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "À quelle heure faut-il arriver ?",
    text: ["15 h 15", "7 h", "21 h 30"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut arriver à _________.",
    fill: "15",
    vfQ: "L'heure indiquée est 15 h 15.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle activité est proposée ?",
    text: ["une playlist collective", "un entraînement silencieux", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "playlist",
    vfQ: "Le texte parle de l'activité suivante : une playlist collective.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["trois chansons", "un billet d'avion", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "trois",
    vfQ: "Il faut prévoir trois chansons.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quelle information pratique est donnée ?",
    text: ["15 CHF", "16 places", "aucun horaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix indiqué est _________.",
    fill: "15",
    vfQ: "Le prix indiqué est 15 CHF.",
    vfC: 0,
  }),
]);

const E11_3_CE_EMAIL_7_TEXT = `De : Club des habitants

Objet : Merci pour votre participation

Bonjour,

Merci pour votre présence lors de un café-débat sur les jeux vidéo à la terrasse du Marché.
Plusieurs personnes ont expliqué que la séance aide à dire ce qu'on aime dans un jeu.
Pour la prochaine fois, nous garderons dimanche 23 juin à 16 h.
Votre remarque sur une manette si possible a été notée.

En cas de changement, un nouvel avis sera publié.
Nous sommes là pour vous aider.
Gardez ce texte pour vous en souvenir.
Les horaires habituels restent les mêmes.
Vous pouvez venir accompagné(e) si vous le souhaitez.
Un plan simple est disponible à l'accueil.
N'oubliez pas de vérifier la date et l'heure.
Le personnel peut répondre en français simple.
Bonne journée à toutes et à tous.
Merci encore pour votre compréhension.
Conservez le numéro de contact indiqué.
Tout est organisé pour que ce soit simple.
Bien à vous,

Club des habitants`;

const E11_3_CE_EMAIL_7_POOL = buildExpressPool("e11-3-ce-email-7", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Merci pour votre participation", "Facture oubliée", "Invitation sans date"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Merci",
    vfQ: "L'objet de l'e-mail est « Merci pour votre participation ».",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Club des habitants", "un voisin inconnu", "le service des impôts"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________.",
    fill: "Club",
    vfQ: "L'e-mail est envoyé par Club des habitants.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela a-t-il lieu ?",
    text: ["dimanche 23 juin", "la semaine prochaine sans date", "un dimanche de novembre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La date est _________ 23 juin.",
    fill: "dimanche",
    vfQ: "L'activité a lieu dimanche 23 juin.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "À quelle heure faut-il arriver ?",
    text: ["16 h", "7 h", "21 h 30"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut arriver à _________.",
    fill: "16",
    vfQ: "L'heure indiquée est 16 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle activité est proposée ?",
    text: ["un café-débat sur les jeux vidéo", "un contrôle de maths", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "café",
    vfQ: "Le texte parle de l'activité suivante : un café-débat sur les jeux vidéo.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["une manette si possible", "une fourchette", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "manette",
    vfQ: "Il faut prévoir une manette si possible.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quelle information pratique est donnée ?",
    text: ["18 CHF", "18 places", "aucun horaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix indiqué est _________.",
    fill: "18",
    vfQ: "Le prix indiqué est 18 CHF.",
    vfC: 0,
  }),
]);

const E11_3_CE_EMAIL_8_TEXT = `De : Maison commune

Objet : Invitation goûts

Bonjour les amis,

Ça vous dit de venir avec moi à un club manga débutant ?
Le rendez-vous est lundi 1er juillet à 17 h 30 à le local des Jeunes.
Il faut réserver directement sur place car il y a seulement 20 places.
Apportez un manga déjà lu et un peu de bonne humeur.

À très vite,

Mina
Une confirmation vous sera envoyée ensuite.
Merci de vérifier les informations avant de répondre.
Nous sommes ouverts du lundi au vendredi.
À très bientôt, prends soin de toi.
C'est important pour moi, merci beaucoup.
Nous traitons votre demande rapidement.
Vous pouvez répondre directement à ce message.
Merci de confirmer la bonne réception.
Joignez les documents demandés si nécessaire.
Nous vous souhaitons une excellente journée.
Le service est également disponible en ligne.
Respectez la file d'attente, s'il vous plaît.
Cordialement, et bonne journée.`;

const E11_3_CE_EMAIL_8_POOL = buildExpressPool("e11-3-ce-email-8", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Invitation goûts", "Facture oubliée", "Invitation sans date"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Invitation",
    vfQ: "L'objet de l'e-mail est « Invitation goûts ».",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Maison commune", "un voisin inconnu", "le service des impôts"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________.",
    fill: "Maison",
    vfQ: "L'e-mail est envoyé par Maison commune.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela a-t-il lieu ?",
    text: ["lundi 1er juillet", "la semaine prochaine sans date", "un dimanche de novembre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La date est _________ 1er juillet.",
    fill: "lundi",
    vfQ: "L'activité a lieu lundi 1er juillet.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "À quelle heure faut-il arriver ?",
    text: ["17 h 30", "7 h", "21 h 30"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut arriver à _________.",
    fill: "17",
    vfQ: "L'heure indiquée est 17 h 30.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle activité est proposée ?",
    text: ["un club manga débutant", "une visite médicale", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "club",
    vfQ: "Le texte parle de l'activité suivante : un club manga débutant.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["un manga déjà lu", "un sac de ciment", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "manga",
    vfQ: "Il faut prévoir un manga déjà lu.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quelle information pratique est donnée ?",
    text: ["20 CHF", "20 places", "aucun horaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix indiqué est _________.",
    fill: "20",
    vfQ: "Le prix indiqué est 20 CHF.",
    vfC: 0,
  }),
]);

const E11_3_CE_EMAIL_9_TEXT = `De : Bureau des inscriptions

Objet : Liste du matériel

Bonjour,

Pour une soirée poésie courte, la petite liste est simple : un petit poème, une bouteille d'eau et un stylo.
Le rendez-vous reste mardi 9 juillet à 18 h à la salle des Fêtes.
Le tarif est 25 CHF.
Le thème principal sera : écouter les goûts des autres.

Votre dossier sera mis à jour après votre réponse.
Nous vous souhaitons une excellente journée.
Merci encore pour votre confiance.
Voici quelques détails utiles pour la suite.
Les horaires habituels restent les mêmes.
Merci de votre attention et de votre patience.
Vous pouvez venir accompagné(e) si vous le souhaitez.
Un plan simple est disponible à l'accueil.
N'oubliez pas de vérifier la date et l'heure.
Le personnel peut répondre en français simple.
En cas de changement, un nouvel avis sera publié.
Bonne journée à toutes et à tous.
Merci,

Bureau des inscriptions`;

const E11_3_CE_EMAIL_9_POOL = buildExpressPool("e11-3-ce-email-9", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Liste du matériel", "Facture oubliée", "Invitation sans date"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Liste",
    vfQ: "L'objet de l'e-mail est « Liste du matériel ».",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Bureau des inscriptions", "un voisin inconnu", "le service des impôts"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________.",
    fill: "Bureau",
    vfQ: "L'e-mail est envoyé par Bureau des inscriptions.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela a-t-il lieu ?",
    text: ["mardi 9 juillet", "la semaine prochaine sans date", "un dimanche de novembre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La date est _________ 9 juillet.",
    fill: "mardi",
    vfQ: "L'activité a lieu mardi 9 juillet.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "À quelle heure faut-il arriver ?",
    text: ["18 h", "7 h", "21 h 30"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut arriver à _________.",
    fill: "18",
    vfQ: "L'heure indiquée est 18 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle activité est proposée ?",
    text: ["une soirée poésie courte", "un entraînement silencieux", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "soirée",
    vfQ: "Le texte parle de l'activité suivante : une soirée poésie courte.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["un petit poème", "un billet d'avion", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "petit",
    vfQ: "Il faut prévoir un petit poème.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quelle information pratique est donnée ?",
    text: ["25 CHF", "22 places", "aucun horaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix indiqué est _________.",
    fill: "25",
    vfQ: "Le prix indiqué est 25 CHF.",
    vfC: 0,
  }),
]);

const E11_3_CE_EMAIL_10_TEXT = `De : Info loisirs

Objet : Places disponibles

Bonjour,

Bonne nouvelle : un atelier affiches de concerts n'est pas complet, il reste 24 places.
La séance aura lieu mercredi 17 juillet à 18 h 45 à le jardin partagé.
Merci de vous inscrire avec le QR code de l'affiche avant demain soir.
Prévoyez une image de concert. Le prix est 30 CHF.

Voici quelques détails utiles pour la suite.
Lisez bien jusqu'à la fin, s'il vous plaît.
Vous pouvez demander de l'aide si besoin.
Vous pouvez répondre directement à ce message.
Merci de confirmer la bonne réception.
Joignez les documents demandés si nécessaire.
Nous vous souhaitons une excellente journée.
Le service est également disponible en ligne.
Respectez la file d'attente, s'il vous plaît.
Les personnes à mobilité réduite sont prioritaires.
En cas de perte d'objet, passez à l'accueil.
Cordialement,

Info loisirs`;

const E11_3_CE_EMAIL_10_POOL = buildExpressPool("e11-3-ce-email-10", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Places disponibles", "Facture oubliée", "Invitation sans date"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Places",
    vfQ: "L'objet de l'e-mail est « Places disponibles ».",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Info loisirs", "un voisin inconnu", "le service des impôts"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________.",
    fill: "Info",
    vfQ: "L'e-mail est envoyé par Info loisirs.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela a-t-il lieu ?",
    text: ["mercredi 17 juillet", "la semaine prochaine sans date", "un dimanche de novembre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La date est _________ 17 juillet.",
    fill: "mercredi",
    vfQ: "L'activité a lieu mercredi 17 juillet.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "À quelle heure faut-il arriver ?",
    text: ["18 h 45", "7 h", "21 h 30"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut arriver à _________.",
    fill: "18",
    vfQ: "L'heure indiquée est 18 h 45.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle activité est proposée ?",
    text: ["un atelier affiches de concerts", "un contrôle de maths", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "atelier",
    vfQ: "Le texte parle de l'activité suivante : un atelier affiches de concerts.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["une image de concert", "une fourchette", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "image",
    vfQ: "Il faut prévoir une image de concert.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quelle information pratique est donnée ?",
    text: ["30 CHF", "24 places", "aucun horaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix indiqué est _________.",
    fill: "30",
    vfQ: "Le prix indiqué est 30 CHF.",
    vfC: 0,
  }),
]);

const E11_3_CE_EMAIL_11_TEXT = `De : Groupe des bénévoles

Objet : Retour sur l'activité

Bonjour,

Depuis une rencontre autour du street art, nous recevons des messages très positifs.
Les participants ont surtout apprécié de observer les couleurs de la ville.
La prochaine date est jeudi 25 juillet à 19 h à le café du Pont.
Cette fois, merci d'apporter une photo de mur peint.

Au plaisir de vous revoir,

Groupe des bénévoles
Je reste près de mon téléphone aujourd'hui.
Dis-moi si tu as besoin d'autre chose.
On peut aussi en parler demain matin.
J'espère que tout se passe bien de ton côté.
N'hésite pas à me répondre quand tu peux.
Je t'envoie aussi ce détail pour être clair.
Le trajet est simple, ne t'inquiète pas.
Passe le bonjour à tout le monde.
À très bientôt, prends soin de toi.
Cordialement, et bonne journée.
Si une information manque, écrivez-nous rapidement.
Nous avons bien noté votre situation.
Le service est disponible également en ligne.`;

const E11_3_CE_EMAIL_11_POOL = buildExpressPool("e11-3-ce-email-11", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Retour sur l'activité", "Facture oubliée", "Invitation sans date"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Retour",
    vfQ: "L'objet de l'e-mail est « Retour sur l'activité ».",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Groupe des bénévoles", "un voisin inconnu", "le service des impôts"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________.",
    fill: "Groupe",
    vfQ: "L'e-mail est envoyé par Groupe des bénévoles.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela a-t-il lieu ?",
    text: ["jeudi 25 juillet", "la semaine prochaine sans date", "un dimanche de novembre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La date est _________ 25 juillet.",
    fill: "jeudi",
    vfQ: "L'activité a lieu jeudi 25 juillet.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "À quelle heure faut-il arriver ?",
    text: ["19 h", "7 h", "21 h 30"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut arriver à _________.",
    fill: "19",
    vfQ: "L'heure indiquée est 19 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle activité est proposée ?",
    text: ["une rencontre autour du street art", "une visite médicale", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "rencontre",
    vfQ: "Le texte parle de l'activité suivante : une rencontre autour du street art.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["une photo de mur peint", "un sac de ciment", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "photo",
    vfQ: "Il faut prévoir une photo de mur peint.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quelle information pratique est donnée ?",
    text: ["4 CHF", "6 personnes", "aucun horaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix indiqué est _________.",
    fill: "4",
    vfQ: "Le prix indiqué est 4 CHF.",
    vfC: 0,
  }),
]);

const E11_3_CE_EMAIL_12_TEXT = `De : Réception

Objet : Rendez-vous à 8 h 30

Bonjour,

Votre rendez-vous lié à une discussion sur les podcasts commence à 8 h 30.
Les horaires habituels restent les mêmes.
Une question ? Écrivez ou téléphonez.
Merci encore, et à bientôt.
Tout est organisé pour que ce soit simple.
Merci de confirmer la bonne réception.
Joignez les documents demandés si nécessaire.
Nous vous souhaitons une excellente journée.
Le service est également disponible en ligne.
Respectez la file d'attente, s'il vous plaît.
Les personnes à mobilité réduite sont prioritaires.
En cas de perte d'objet, passez à l'accueil.
Merci d'arriver à la maison médicale dix minutes avant.
La date est vendredi 2 août et le prix est 6 CHF.
La docteure Morel conseille de préparer un podcast court.

Meilleures salutations,

Réception`;

const E11_3_CE_EMAIL_12_POOL = buildExpressPool("e11-3-ce-email-12", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Rendez-vous à 8 h 30", "Facture oubliée", "Invitation sans date"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Rendez",
    vfQ: "L'objet de l'e-mail est « Rendez-vous à 8 h 30 ».",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Réception", "un voisin inconnu", "le service des impôts"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________.",
    fill: "Réception",
    vfQ: "L'e-mail est envoyé par Réception.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela a-t-il lieu ?",
    text: ["vendredi 2 août", "la semaine prochaine sans date", "un dimanche de novembre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La date est _________ 2 août.",
    fill: "vendredi",
    vfQ: "L'activité a lieu vendredi 2 août.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "À quelle heure faut-il arriver ?",
    text: ["8 h 30", "7 h", "21 h 30"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut arriver à _________.",
    fill: "8",
    vfQ: "L'heure indiquée est 8 h 30.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle activité est proposée ?",
    text: ["une discussion sur les podcasts", "un entraînement silencieux", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "discussion",
    vfQ: "Le texte parle de l'activité suivante : une discussion sur les podcasts.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["un podcast court", "un billet d'avion", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "podcast",
    vfQ: "Il faut prévoir un podcast court.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quelle information pratique est donnée ?",
    text: ["6 CHF", "9 personnes", "aucun horaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix indiqué est _________.",
    fill: "6",
    vfQ: "Le prix indiqué est 6 CHF.",
    vfC: 0,
  }),
]);

const E11_3_CE_EMAIL_13_TEXT = `De : Atelier A2

Objet : Préparation de groupe

Chers participants,

Pour que un vote pour le menu de fête se passe bien, nous formons deux petits groupes.
Le premier groupe est attendu à 13 h à le parc des Amandiers.
La séance a lieu samedi 10 août avec l'entraîneuse Emma.
Merci de vérifier une idée de plat avant de partir.

Merci encore, et à bientôt.
Tout est organisé pour que ce soit simple.
Le contact est indiqué dans le message.
N'oubliez pas de vérifier la date.
Merci de confirmer la bonne réception.
Joignez les documents demandés si nécessaire.
Nous vous souhaitons une excellente journée.
Le service est également disponible en ligne.
Respectez la file d'attente, s'il vous plaît.
Les personnes à mobilité réduite sont prioritaires.
En cas de perte d'objet, passez à l'accueil.
Le service client répond aussi par téléphone.
À bientôt,

Atelier A2`;

const E11_3_CE_EMAIL_13_POOL = buildExpressPool("e11-3-ce-email-13", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Préparation de groupe", "Facture oubliée", "Invitation sans date"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Préparation",
    vfQ: "L'objet de l'e-mail est « Préparation de groupe ».",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Atelier A2", "un voisin inconnu", "le service des impôts"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________.",
    fill: "Atelier",
    vfQ: "L'e-mail est envoyé par Atelier A2.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela a-t-il lieu ?",
    text: ["samedi 10 août", "la semaine prochaine sans date", "un dimanche de novembre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La date est _________ 10 août.",
    fill: "samedi",
    vfQ: "L'activité a lieu samedi 10 août.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "À quelle heure faut-il arriver ?",
    text: ["13 h", "7 h", "21 h 30"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut arriver à _________.",
    fill: "13",
    vfQ: "L'heure indiquée est 13 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle activité est proposée ?",
    text: ["un vote pour le menu de fête", "un contrôle de maths", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "vote",
    vfQ: "Le texte parle de l'activité suivante : un vote pour le menu de fête.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["une idée de plat", "une fourchette", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "idée",
    vfQ: "Il faut prévoir une idée de plat.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quelle information pratique est donnée ?",
    text: ["9 CHF", "11 personnes", "aucun horaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix indiqué est _________.",
    fill: "9",
    vfQ: "Le prix indiqué est 9 CHF.",
    vfC: 0,
  }),
]);

const E11_3_CE_EMAIL_14_TEXT = `De : Coordination locale

Objet : Demande d'information

Bonjour,

Je vous écris car je cherche des informations sur un mur des coups de cœur.
J'ai noté la date, dimanche 18 août, et l'heure, 14 h 45, à la boutique Horizon.
Pouvez-vous confirmer le prix de 11 CHF ?
Je viens surtout pour afficher ses préférences.

Gardez ce texte pour vous en souvenir.
Les horaires habituels restent les mêmes.
Une question ? Écrivez ou téléphonez.
Merci encore, et à bientôt.
Le trajet est simple, ne t'inquiète pas.
Passe le bonjour à tout le monde.
À très bientôt, prends soin de toi.
C'est important pour moi, merci beaucoup.
Nous traitons votre demande rapidement.
Vous pouvez répondre directement à ce message.
Merci de confirmer la bonne réception.
Merci d'avance,

Salma`;

const E11_3_CE_EMAIL_14_POOL = buildExpressPool("e11-3-ce-email-14", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Demande d'information", "Facture oubliée", "Invitation sans date"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Demande",
    vfQ: "L'objet de l'e-mail est « Demande d'information ».",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Coordination locale", "un voisin inconnu", "le service des impôts"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________.",
    fill: "Coordination",
    vfQ: "L'e-mail est envoyé par Coordination locale.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela a-t-il lieu ?",
    text: ["dimanche 18 août", "la semaine prochaine sans date", "un dimanche de novembre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La date est _________ 18 août.",
    fill: "dimanche",
    vfQ: "L'activité a lieu dimanche 18 août.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "À quelle heure faut-il arriver ?",
    text: ["14 h 45", "7 h", "21 h 30"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut arriver à _________.",
    fill: "14",
    vfQ: "L'heure indiquée est 14 h 45.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle activité est proposée ?",
    text: ["un mur des coups de cœur", "une visite médicale", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "mur",
    vfQ: "Le texte parle de l'activité suivante : un mur des coups de cœur.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["trois papiers colorés", "un sac de ciment", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "trois",
    vfQ: "Il faut prévoir trois papiers colorés.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quelle information pratique est donnée ?",
    text: ["11 CHF", "13 personnes", "aucun horaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix indiqué est _________.",
    fill: "11",
    vfQ: "Le prix indiqué est 11 CHF.",
    vfC: 0,
  }),
]);

const E11_3_CE_EMAIL_15_TEXT = `De : Médiathèque Rivage

Objet : Votre liste de coups de cœur

Bonjour Alex,
Voici trois suggestions selon vos goûts :
1) Roman : « Vent du sud » (facile A2)
Gardez ce texte pour vous en souvenir.
Nous restons disponibles pour vous aider.
Les horaires habituels restent les mêmes.
Merci de votre attention et de votre patience.
Vous pouvez venir accompagné(e) si vous le souhaitez.
Un plan simple est disponible à l'accueil.
N'oubliez pas de vérifier la date et l'heure.
Le personnel peut répondre en français simple.
En cas de changement, un nouvel avis sera publié.
Bonne journée à toutes et à tous.
2) BD : « Les Voyages de Mina »
3) Podcast : « Goûts et couleurs » (20 min)
Tous disponibles jusqu'au 30 juin. Prolongation possible une fois en ligne.
Bonne lecture !
Sophie, bibliothécaire`;

const E11_3_CE_EMAIL_15_POOL = buildExpressPool("e11-3-ce-email-15", [
  q({
    id: "cem-q1",
    textQ: "Combien de suggestions ?",
    text: ["Trois", "Dix", "Une"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ suggestions",
    fill: "trois",
    fillA: ["3"],
    vfQ: "3 suggestions.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel roman ?",
    text: ["Vent du sud", "Les Voyages de Mina", "Aucun"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Roman : « Vent du _________ »",
    fill: "sud",
    vfQ: "Vent du sud.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Jusqu'à quand disponibles ?",
    text: ["30 juin", "Demain", "Janvier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "jusqu'au _________ juin",
    fill: "30",
    vfQ: "30 juin.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Qui écrit ?",
    text: ["Sophie", "Alex", "Karim"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________, bibliothécaire",
    fill: "Sophie",
    vfQ: "Sophie.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Durée du podcast ?",
    text: ["20 min", "2 h", "5 min"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ min",
    fill: "20",
    vfQ: "20 min.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Peut-on prolonger ?",
    text: ["Oui, une fois en ligne", "Non jamais", "Seulement par téléphone"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Prolongation possible _________ fois",
    fill: "une",
    vfQ: "Une fois.",
    vfC: 0,
  }),
]);

const E11_3_CE_EMAIL_16_TEXT = `De : Service rappel

Objet : Dernier rappel

Bonjour,

Dernier message avant un atelier goûts et couleurs !
Rendez-vous mardi 3 septembre à 17 h à la place du Village.
L'entrée n'est garantie que si l'inscription est faite au stand d'information.
Apportez un objet de sa couleur préférée et gardez 16 CHF si besoin.

À tout à l'heure,

Service rappel
Les horaires habituels restent les mêmes.
Une question ? Écrivez ou téléphonez.
Merci de votre attention et de votre patience.
Vous pouvez venir accompagné(e) si vous le souhaitez.
Un plan simple est disponible à l'accueil.
N'oubliez pas de vérifier la date et l'heure.
Le personnel peut répondre en français simple.
En cas de changement, un nouvel avis sera publié.
Bonne journée à toutes et à tous.
Merci encore pour votre compréhension.
Merci encore, et à bientôt.
Tout est organisé pour que ce soit simple.`;

const E11_3_CE_EMAIL_16_POOL = buildExpressPool("e11-3-ce-email-16", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Dernier rappel", "Facture oubliée", "Invitation sans date"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Dernier",
    vfQ: "L'objet de l'e-mail est « Dernier rappel ».",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Service rappel", "un voisin inconnu", "le service des impôts"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________.",
    fill: "Service",
    vfQ: "L'e-mail est envoyé par Service rappel.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela a-t-il lieu ?",
    text: ["mardi 3 septembre", "la semaine prochaine sans date", "un dimanche de novembre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La date est _________ 3 septembre.",
    fill: "mardi",
    vfQ: "L'activité a lieu mardi 3 septembre.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "À quelle heure faut-il arriver ?",
    text: ["17 h", "7 h", "21 h 30"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut arriver à _________.",
    fill: "17",
    vfQ: "L'heure indiquée est 17 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle activité est proposée ?",
    text: ["un atelier goûts et couleurs", "un contrôle de maths", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "atelier",
    vfQ: "Le texte parle de l'activité suivante : un atelier goûts et couleurs.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["un objet de sa couleur préférée", "une fourchette", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "objet",
    vfQ: "Il faut prévoir un objet de sa couleur préférée.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quelle information pratique est donnée ?",
    text: ["16 CHF", "19 personnes", "aucun horaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix indiqué est _________.",
    fill: "16",
    vfQ: "Le prix indiqué est 16 CHF.",
    vfC: 0,
  }),
]);

const E11_3_CE_EMAIL_17_TEXT = `De : Responsable du projet

Objet : Message de la responsable

Bonjour,

Message de La coach Ana au sujet de une lecture de critiques simples.
La rencontre est prévue mercredi 11 septembre à 9 h 45 à la halle des Sports.
Le but reste simple : apprendre à comprendre une critique.
Gardez ce texte pour vous en souvenir.
Les horaires habituels restent les mêmes.
Une question ? Écrivez ou téléphonez.
Merci encore, et à bientôt.
Joignez les documents demandés si nécessaire.
Nous vous souhaitons une excellente journée.
Le service est également disponible en ligne.
Respectez la file d'attente, s'il vous plaît.
Les personnes à mobilité réduite sont prioritaires.
En cas de perte d'objet, passez à l'accueil.
Le service client répond aussi par téléphone.
Merci de respecter cette règle : les textes difficiles sont expliqués.

Bien cordialement,

Responsable du projet`;

const E11_3_CE_EMAIL_17_POOL = buildExpressPool("e11-3-ce-email-17", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Message de la responsable", "Facture oubliée", "Invitation sans date"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Message",
    vfQ: "L'objet de l'e-mail est « Message de la responsable ».",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Responsable du projet", "un voisin inconnu", "le service des impôts"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________.",
    fill: "Responsable",
    vfQ: "L'e-mail est envoyé par Responsable du projet.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela a-t-il lieu ?",
    text: ["mercredi 11 septembre", "la semaine prochaine sans date", "un dimanche de novembre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La date est _________ 11 septembre.",
    fill: "mercredi",
    vfQ: "L'activité a lieu mercredi 11 septembre.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "À quelle heure faut-il arriver ?",
    text: ["9 h 45", "7 h", "21 h 30"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut arriver à _________.",
    fill: "9",
    vfQ: "L'heure indiquée est 9 h 45.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle activité est proposée ?",
    text: ["une lecture de critiques simples", "une visite médicale", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "lecture",
    vfQ: "Le texte parle de l'activité suivante : une lecture de critiques simples.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["un avis écrit", "un sac de ciment", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "avis",
    vfQ: "Il faut prévoir un avis écrit.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quelle information pratique est donnée ?",
    text: ["22 CHF", "deux groupes", "aucun horaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix indiqué est _________.",
    fill: "22",
    vfQ: "Le prix indiqué est 22 CHF.",
    vfC: 0,
  }),
]);

const E11_3_CE_EMAIL_18_TEXT = `De : Équipe du samedi

Objet : Organisation du samedi

Bonjour,

L'équipe prépare le salon Harmonie pour un échange de recommandations.
Les participants arrivent à 11 h 30 avec une recommandation.
La date exacte est jeudi 19 septembre.
Après la séance, un court échange expliquera comment réussir à proposer quelque chose à un ami.

Merci encore pour votre confiance.
Voici quelques détails utiles pour la suite.
Lisez bien jusqu'à la fin, s'il vous plaît.
Vous pouvez demander de l'aide si besoin.
Une confirmation sera envoyée ensuite.
Le lieu est facile à trouver avec les indications.
Pensez à arriver un peu en avance.
Gardez ce texte pour vous en souvenir.
Nous restons disponibles pour vous aider.
Les horaires habituels restent les mêmes.
Merci de votre attention et de votre patience.
Vous pouvez venir accompagné(e) si vous le souhaitez.
Merci de votre aide,

Équipe du samedi`;

const E11_3_CE_EMAIL_18_POOL = buildExpressPool("e11-3-ce-email-18", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Organisation du samedi", "Facture oubliée", "Invitation sans date"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Organisation",
    vfQ: "L'objet de l'e-mail est « Organisation du samedi ».",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Équipe du samedi", "un voisin inconnu", "le service des impôts"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________.",
    fill: "Équipe",
    vfQ: "L'e-mail est envoyé par Équipe du samedi.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela a-t-il lieu ?",
    text: ["jeudi 19 septembre", "la semaine prochaine sans date", "un dimanche de novembre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La date est _________ 19 septembre.",
    fill: "jeudi",
    vfQ: "L'activité a lieu jeudi 19 septembre.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "À quelle heure faut-il arriver ?",
    text: ["11 h 30", "7 h", "21 h 30"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut arriver à _________.",
    fill: "11",
    vfQ: "L'heure indiquée est 11 h 30.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle activité est proposée ?",
    text: ["un échange de recommandations", "un entraînement silencieux", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "échange",
    vfQ: "Le texte parle de l'activité suivante : un échange de recommandations.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["une recommandation", "un billet d'avion", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "recommandation",
    vfQ: "Il faut prévoir une recommandation.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quelle information pratique est donnée ?",
    text: ["28 CHF", "un petit groupe", "aucun horaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix indiqué est _________.",
    fill: "28",
    vfQ: "Le prix indiqué est 28 CHF.",
    vfC: 0,
  }),
]);

const E11_3_CE_EMAIL_19_TEXT = `De : Questionnaire qualité

Objet : Votre avis nous intéresse

Bonjour,

Vous avez récemment participé à un quiz sur les styles musicaux à la résidence du Parc.
Pouvez-vous dire si l'horaire de 15 h 45 vous convient ?
La prochaine séance est prévue vendredi 27 septembre.
Votre avis nous aidera à mieux organiser les moments pour reconnaître un style de musique.

N'hésitez pas à nous indiquer vos disponibilités.
Ce message contient les informations essentielles.
Nous vous remercions de votre compréhension.
Pour toute urgence, appelez-nous pendant les heures d'ouverture.
Merci de lire ce message jusqu'à la fin.
Les informations importantes sont déjà indiquées plus haut.
En cas de question, vous pouvez écrire ou téléphoner.
Une confirmation sera envoyée ensuite.
Le lieu est facile à trouver avec les indications.
Pensez à arriver un peu en avance.
Gardez ce texte pour vous en souvenir.
Nous restons disponibles pour vous aider.
Merci pour votre retour,

Questionnaire qualité`;

const E11_3_CE_EMAIL_19_POOL = buildExpressPool("e11-3-ce-email-19", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Votre avis nous intéresse", "Facture oubliée", "Invitation sans date"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Votre",
    vfQ: "L'objet de l'e-mail est « Votre avis nous intéresse ».",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Questionnaire qualité", "un voisin inconnu", "le service des impôts"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________.",
    fill: "Questionnaire",
    vfQ: "L'e-mail est envoyé par Questionnaire qualité.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela a-t-il lieu ?",
    text: ["vendredi 27 septembre", "la semaine prochaine sans date", "un dimanche de novembre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La date est _________ 27 septembre.",
    fill: "vendredi",
    vfQ: "L'activité a lieu vendredi 27 septembre.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "À quelle heure faut-il arriver ?",
    text: ["15 h 45", "7 h", "21 h 30"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut arriver à _________.",
    fill: "15",
    vfQ: "L'heure indiquée est 15 h 45.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle activité est proposée ?",
    text: ["un quiz sur les styles musicaux", "un contrôle de maths", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "quiz",
    vfQ: "Le texte parle de l'activité suivante : un quiz sur les styles musicaux.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["un casque audio", "une fourchette", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "casque",
    vfQ: "Il faut prévoir un casque audio.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quelle information pratique est donnée ?",
    text: ["35 CHF", "toute la classe", "aucun horaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix indiqué est _________.",
    fill: "35",
    vfQ: "Le prix indiqué est 35 CHF.",
    vfC: 0,
  }),
]);

const E11_3_CE_EMAIL_20_TEXT = `De : Centre culturel

Objet : Prochaine rencontre

Bonjour,

Nous préparons une prochaine rencontre autour de une table ronde sur les loisirs préférés.
Elle aura lieu samedi 5 octobre à 18 h 15 à le centre culturel.
Le tarif annoncé est 40 CHF et il reste les vingt premiers inscrits.
Cette fois, chacun devra apporter une liste de loisirs.

Nous sommes là pour vous aider.
Gardez ce texte pour vous en souvenir.
Les horaires habituels restent les mêmes.
Une question ? Écrivez ou téléphonez.
Les informations importantes sont déjà indiquées plus haut.
En cas de question, vous pouvez écrire ou téléphoner.
Une confirmation sera envoyée ensuite.
Le lieu est facile à trouver avec les indications.
Pensez à arriver un peu en avance.
Nous restons disponibles pour vous aider.
Merci de votre attention et de votre patience.
À bientôt,

Centre culturel`;

const E11_3_CE_EMAIL_20_POOL = buildExpressPool("e11-3-ce-email-20", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Prochaine rencontre", "Facture oubliée", "Invitation sans date"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Prochaine",
    vfQ: "L'objet de l'e-mail est « Prochaine rencontre ».",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Centre culturel", "un voisin inconnu", "le service des impôts"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________.",
    fill: "Centre",
    vfQ: "L'e-mail est envoyé par Centre culturel.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela a-t-il lieu ?",
    text: ["samedi 5 octobre", "la semaine prochaine sans date", "un dimanche de novembre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La date est _________ 5 octobre.",
    fill: "samedi",
    vfQ: "L'activité a lieu samedi 5 octobre.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "À quelle heure faut-il arriver ?",
    text: ["18 h 15", "7 h", "21 h 30"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut arriver à _________.",
    fill: "18",
    vfQ: "L'heure indiquée est 18 h 15.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle activité est proposée ?",
    text: ["une table ronde sur les loisirs préférés", "une visite médicale", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "table",
    vfQ: "Le texte parle de l'activité suivante : une table ronde sur les loisirs préférés.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["une liste de loisirs", "un sac de ciment", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "liste",
    vfQ: "Il faut prévoir une liste de loisirs.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quelle information pratique est donnée ?",
    text: ["40 CHF", "les vingt premiers inscrits", "aucun horaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix indiqué est _________.",
    fill: "40",
    vfQ: "Le prix indiqué est 40 CHF.",
    vfC: 0,
  }),
]);

export const E11_3_CE_EMAIL: CommunicationExercise[] = [
readingPoolExercise({
  id: "e11-3-ce-email",
  readingText: E11_3_CE_EMAIL_TEXT,
  questionPool: E11_3_CE_EMAIL_POOL,
  questionCount: 6,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
readingPoolExercise({
  id: "e11-3-ce-email-2",
  readingText: E11_3_CE_EMAIL_2_TEXT,
  questionPool: E11_3_CE_EMAIL_2_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e11-3-ce-email-3",
  readingText: E11_3_CE_EMAIL_3_TEXT,
  questionPool: E11_3_CE_EMAIL_3_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e11-3-ce-email-4",
  readingText: E11_3_CE_EMAIL_4_TEXT,
  questionPool: E11_3_CE_EMAIL_4_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e11-3-ce-email-5",
  readingText: E11_3_CE_EMAIL_5_TEXT,
  questionPool: E11_3_CE_EMAIL_5_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e11-3-ce-email-6",
  readingText: E11_3_CE_EMAIL_6_TEXT,
  questionPool: E11_3_CE_EMAIL_6_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e11-3-ce-email-7",
  readingText: E11_3_CE_EMAIL_7_TEXT,
  questionPool: E11_3_CE_EMAIL_7_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e11-3-ce-email-8",
  readingText: E11_3_CE_EMAIL_8_TEXT,
  questionPool: E11_3_CE_EMAIL_8_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e11-3-ce-email-9",
  readingText: E11_3_CE_EMAIL_9_TEXT,
  questionPool: E11_3_CE_EMAIL_9_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e11-3-ce-email-10",
  readingText: E11_3_CE_EMAIL_10_TEXT,
  questionPool: E11_3_CE_EMAIL_10_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e11-3-ce-email-11",
  readingText: E11_3_CE_EMAIL_11_TEXT,
  questionPool: E11_3_CE_EMAIL_11_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e11-3-ce-email-12",
  readingText: E11_3_CE_EMAIL_12_TEXT,
  questionPool: E11_3_CE_EMAIL_12_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e11-3-ce-email-13",
  readingText: E11_3_CE_EMAIL_13_TEXT,
  questionPool: E11_3_CE_EMAIL_13_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e11-3-ce-email-14",
  readingText: E11_3_CE_EMAIL_14_TEXT,
  questionPool: E11_3_CE_EMAIL_14_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e11-3-ce-email-15",
  readingText: E11_3_CE_EMAIL_15_TEXT,
  questionPool: E11_3_CE_EMAIL_15_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e11-3-ce-email-16",
  readingText: E11_3_CE_EMAIL_16_TEXT,
  questionPool: E11_3_CE_EMAIL_16_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e11-3-ce-email-17",
  readingText: E11_3_CE_EMAIL_17_TEXT,
  questionPool: E11_3_CE_EMAIL_17_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e11-3-ce-email-18",
  readingText: E11_3_CE_EMAIL_18_TEXT,
  questionPool: E11_3_CE_EMAIL_18_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e11-3-ce-email-19",
  readingText: E11_3_CE_EMAIL_19_TEXT,
  questionPool: E11_3_CE_EMAIL_19_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e11-3-ce-email-20",
  readingText: E11_3_CE_EMAIL_20_TEXT,
  questionPool: E11_3_CE_EMAIL_20_POOL,
  questionCount: 6
}),
];

export const E11_3_PE_EMAIL: ExpressPePrompt[] = [

  {
    id: "e11-3-pee-1",
    title: "Accepter une soirée cinéma",
    situation: "Un ami vous invite au cinéma vendredi.",
    sourceMessage: {
      from: "Noé",
      subject: "Cinéma vendredi ?",
      body: "Salut !\nLe nouveau film de science-fiction sort vendredi au cinéma Rex.\nLa séance est à 20 h 15. Tu viens avec moi ?\nNoé",
    },
    instruction: "Répondez à Noé : acceptez l'invitation, proposez un lieu de rendez-vous avant la séance et posez une question sur le film.",
    points: ["Votre accord", "Un lieu de rendez-vous", "Une question sur le film"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-3-pee-2",
    title: "Recommander un livre",
    situation: "Une amie cherche un livre pour les vacances.",
    sourceMessage: {
      from: "Lina",
      subject: "Un livre pour les vacances",
      body: "Coucou,\nJe pars en vacances la semaine prochaine et je cherche un bon livre.\nTu as lu quelque chose de bien récemment ?\nLina",
    },
    instruction: "Répondez à Lina : recommandez un livre, racontez un peu l'histoire et expliquez pourquoi vous l'avez aimé.",
    points: ["Le livre recommandé", "Un résumé de l'histoire", "Pourquoi vous l'avez aimé"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-3-pee-3",
    title: "S'inscrire au club de lecture",
    situation: "La bibliothèque vous invite à rejoindre son club de lecture.",
    sourceMessage: {
      from: "Bibliothèque municipale",
      subject: "Club de lecture",
      body: "Bonjour,\nNotre club de lecture se réunit le premier jeudi du mois, à 18 h 30.\nPour vous inscrire, répondez à cet e-mail et présentez votre livre préféré.\nLa Bibliothèque municipale",
    },
    instruction: "Répondez à la bibliothèque : inscrivez-vous au club, présentez votre livre préféré et posez une question sur la durée des réunions.",
    points: ["Votre inscription", "Votre livre préféré", "Une question sur la durée"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-3-pee-4",
    title: "Répondre à une invitation au concert",
    situation: "Un ami a deux billets pour un concert samedi.",
    sourceMessage: {
      from: "Sami",
      subject: "Concert samedi",
      body: "Salut !\nJ'ai deux billets pour le concert de rock de samedi soir.\nTu aimes ce style de musique ? Tu veux venir ?\nSami",
    },
    instruction: "Répondez à Sami : acceptez ou refusez l'invitation, parlez de vos goûts musicaux et proposez une heure de rendez-vous ou une autre sortie.",
    points: ["Votre décision", "Vos goûts musicaux", "Un rendez-vous ou une autre sortie"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-3-pee-5",
    title: "Recommander une série",
    situation: "Une amie cherche une nouvelle série à regarder.",
    sourceMessage: {
      from: "Jade",
      subject: "Quelle série tu regardes ?",
      body: "Coucou,\nJ'ai fini ma série hier soir et je ne sais pas quoi regarder maintenant.\nTu as une idée pour moi ?\nJade",
    },
    instruction: "Répondez à Jade : recommandez une série, décrivez le genre et l'histoire, et dites combien il y a de saisons ou d'épisodes.",
    points: ["La série recommandée", "Le genre et l'histoire", "Le nombre de saisons ou d'épisodes"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-3-pee-6",
    title: "Raconter un film",
    situation: "Un ami veut savoir comment était le film que vous avez vu.",
    sourceMessage: {
      from: "Théo",
      subject: "Alors, ce film ?",
      body: "Salut,\nTu es allé(e) au cinéma hier soir, non ?\nC'était bien ? Raconte-moi !\nThéo",
    },
    instruction: "Répondez à Théo : racontez le film que vous avez vu, donnez votre avis et dites si vous le recommandez ou non.",
    points: ["Le récit du film", "Votre avis", "Votre recommandation"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-3-pee-7",
    title: "Donner un avis différent",
    situation: "Une amie a adoré un film, mais vous n'êtes pas d'accord.",
    sourceMessage: {
      from: "Anna",
      subject: "Tu as aimé ce film ?",
      body: "Coucou,\nJ'ai adoré le film de dimanche, c'était magnifique !\nEt toi, tu as aimé ? Dis-moi tout !\nAnna",
    },
    instruction: "Répondez à Anna : donnez poliment votre avis différent, expliquez ce que vous n'avez pas aimé et proposez-lui un autre film à voir ensemble.",
    points: ["Votre avis différent", "Ce que vous n'avez pas aimé", "Un autre film à voir ensemble"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-3-pee-8",
    title: "Voter pour un film",
    situation: "Le ciné-club du quartier vous demande de choisir un film.",
    sourceMessage: {
      from: "Ciné-club du quartier",
      subject: "Programme du mois",
      body: "Bonjour,\nPour la prochaine soirée, trois films sont proposés : une comédie française, un film d'aventure et un documentaire sur la nature.\nQuel film choisissez-vous ?\nLe Ciné-club",
    },
    instruction: "Répondez au ciné-club : choisissez un film, expliquez pourquoi il vous intéresse et demandez l'heure de la séance.",
    points: ["Le film choisi", "Pourquoi", "Une question sur l'heure"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-3-pee-9",
    title: "Préparer la musique d'une fête",
    situation: "Un ami prépare la musique pour une fête et vous demande vos idées.",
    sourceMessage: {
      from: "Diego",
      subject: "Playlist pour la fête",
      body: "Salut !\nJe prépare la musique pour la fête de samedi.\nQuelles chansons ou quels styles tu me conseilles ?\nDiego",
    },
    instruction: "Répondez à Diego : proposez deux styles de musique ou chansons, dites ce qu'il ne faut surtout pas mettre et souhaitez-lui une bonne préparation.",
    points: ["Deux styles ou chansons", "Ce qu'il ne faut pas mettre", "Un encouragement"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-3-pee-10",
    title: "Conseiller un cadeau",
    situation: "Votre tante cherche un cadeau pour votre cousin de 14 ans.",
    sourceMessage: {
      from: "Tante Rosa",
      subject: "Un cadeau pour ton cousin",
      body: "Bonjour,\nJe cherche un cadeau pour l'anniversaire de ton cousin : un livre, une BD ou de la musique.\nQu'est-ce qu'il aime en ce moment ? Tu as une idée ?\nTante Rosa",
    },
    instruction: "Répondez à votre tante : proposez une idée de cadeau, expliquez pourquoi votre cousin va l'aimer et dites où l'acheter et à quel prix.",
    points: ["L'idée de cadeau", "Pourquoi il va l'aimer", "Où l'acheter et le prix"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-3-pee-11",
    title: "Répondre — goûts (11)",
    situation: "Vous avez reçu un e-mail concernant goûts.",
sourceMessage: {
  from: "Service Goûts",
  subject: "Votre demande — référence 1100",
  body: "Bonjour,\nNous avons bien reçu votre message concernant goûts.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-3-pee-12",
    title: "Répondre — goûts (12)",
    situation: "Vous avez reçu un e-mail concernant goûts.",
sourceMessage: {
  from: "Service Goûts",
  subject: "Votre demande — référence 1200",
  body: "Bonjour,\nNous avons bien reçu votre message concernant goûts.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-3-pee-13",
    title: "Répondre — goûts (13)",
    situation: "Vous avez reçu un e-mail concernant goûts.",
sourceMessage: {
  from: "Service Goûts",
  subject: "Votre demande — référence 1300",
  body: "Bonjour,\nNous avons bien reçu votre message concernant goûts.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-3-pee-14",
    title: "Répondre — goûts (14)",
    situation: "Vous avez reçu un e-mail concernant goûts.",
sourceMessage: {
  from: "Service Goûts",
  subject: "Votre demande — référence 1400",
  body: "Bonjour,\nNous avons bien reçu votre message concernant goûts.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-3-pee-15",
    title: "Répondre — goûts (15)",
    situation: "Vous avez reçu un e-mail concernant goûts.",
sourceMessage: {
  from: "Service Goûts",
  subject: "Votre demande — référence 1500",
  body: "Bonjour,\nNous avons bien reçu votre message concernant goûts.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-3-pee-16",
    title: "Répondre — goûts (16)",
    situation: "Vous avez reçu un e-mail concernant goûts.",
sourceMessage: {
  from: "Service Goûts",
  subject: "Votre demande — référence 1600",
  body: "Bonjour,\nNous avons bien reçu votre message concernant goûts.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-3-pee-17",
    title: "Répondre — goûts (17)",
    situation: "Vous avez reçu un e-mail concernant goûts.",
sourceMessage: {
  from: "Service Goûts",
  subject: "Votre demande — référence 1700",
  body: "Bonjour,\nNous avons bien reçu votre message concernant goûts.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-3-pee-18",
    title: "Répondre — goûts (18)",
    situation: "Vous avez reçu un e-mail concernant goûts.",
sourceMessage: {
  from: "Service Goûts",
  subject: "Votre demande — référence 1800",
  body: "Bonjour,\nNous avons bien reçu votre message concernant goûts.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-3-pee-19",
    title: "Répondre — goûts (19)",
    situation: "Vous avez reçu un e-mail concernant goûts.",
sourceMessage: {
  from: "Service Goûts",
  subject: "Votre demande — référence 1900",
  body: "Bonjour,\nNous avons bien reçu votre message concernant goûts.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-3-pee-20",
    title: "Répondre — goûts (20)",
    situation: "Vous avez reçu un e-mail concernant goûts.",
sourceMessage: {
  from: "Service Goûts",
  subject: "Votre demande — référence 2000",
  body: "Bonjour,\nNous avons bien reçu votre message concernant goûts.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  }
];

/* ════════════════════════════════════════════════════════════════════════════
   E11.4 — Passer des vacances
   ════════════════════════════════════════════════════════════════════════════ */

const E11_4_CE_EMAIL_TEXT = `De : La responsable Nadia

Objet : Inscription à une réunion pour préparer le séjour à la mer

Bonjour,

C'est confirmé : vous avez une place pour une réunion pour préparer le séjour à la mer.
Notez bien le rendez-vous : lundi 6 mai, 9 h, à la Maison des Acacias.
Merci d'apporter une carte de la côte. La participation est gratuite.
Cette rencontre aide à choisir les activités du séjour.

Le lieu est facile à trouver.
Prenez votre temps pour comprendre le message.
En cas de changement, un nouvel avis sera publié.
Passe le bonjour à tout le monde.
À très bientôt, prends soin de toi.
C'est important pour moi, merci beaucoup.
Nous traitons votre demande rapidement.
Vous pouvez répondre directement à ce message.
Merci de confirmer la bonne réception.
Joignez les documents demandés si nécessaire.
Nous vous souhaitons une excellente journée.
À bientôt,

La responsable Nadia`;

const E11_4_CE_EMAIL_POOL = buildExpressPool("e11-4-ce-email", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Inscription à une réunion pour préparer le séjour à la mer", "Facture oubliée", "Invitation sans date"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Inscription",
    vfQ: "L'objet de l'e-mail est « Inscription à une réunion pour préparer le séjour à la mer ».",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Qui envoie l'e-mail ?",
    text: ["La responsable Nadia", "un voisin inconnu", "le service des impôts"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________.",
    fill: "responsable",
    vfQ: "L'e-mail est envoyé par La responsable Nadia.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela a-t-il lieu ?",
    text: ["lundi 6 mai", "la semaine prochaine sans date", "un dimanche de novembre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La date est _________ 6 mai.",
    fill: "lundi",
    vfQ: "L'activité a lieu lundi 6 mai.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "À quelle heure faut-il arriver ?",
    text: ["9 h", "7 h", "21 h 30"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut arriver à _________.",
    fill: "9",
    vfQ: "L'heure indiquée est 9 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle activité est proposée ?",
    text: ["une réunion pour préparer le séjour à la mer", "un atelier couture", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "réunion",
    vfQ: "Le texte parle de l'activité suivante : une réunion pour préparer le séjour à la mer.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["une carte de la côte", "un marteau", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "carte",
    vfQ: "Il faut prévoir une carte de la côte.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quelle information pratique est donnée ?",
    text: ["gratuit", "8 places", "aucun horaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix indiqué est _________.",
    fill: "gratuit",
    vfQ: "Le prix indiqué est gratuit.",
    vfC: 0,
  }),
]);

const E11_4_CE_EMAIL_2_TEXT = `De : Accueil du quartier

Objet : Rappel pour mardi 14 mai

Bonjour à toutes et à tous,

Je vous rappelle que un atelier valise légère est prévu mardi 14 mai.
Le groupe se retrouve à 10 h 15 devant la salle Jean-Monnet.
Comme il y a 10 places, merci de prévenir en cas d'absence.
N'oubliez pas une petite valise et lisez bien cette consigne : les liquides restent dans une poche séparée.

Merci de parler doucement dans les couloirs.
Les sacs volumineux se déposent à l'accueil.
Un vestiaire gratuit est disponible.
Les consignes de sécurité sont affichées en rouge.
Dis-moi si tu as besoin d'autre chose.
On peut aussi en parler demain matin.
J'espère que tout se passe bien de ton côté.
N'hésite pas à me répondre quand tu peux.
Je t'envoie aussi ce détail pour être clair.
Le trajet est simple, ne t'inquiète pas.
Passe le bonjour à tout le monde.
À très bientôt, prends soin de toi.
Bonne journée,

Accueil du quartier`;

const E11_4_CE_EMAIL_2_POOL = buildExpressPool("e11-4-ce-email-2", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Rappel pour mardi 14 mai", "Facture oubliée", "Invitation sans date"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Rappel",
    vfQ: "L'objet de l'e-mail est « Rappel pour mardi 14 mai ».",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Accueil du quartier", "un voisin inconnu", "le service des impôts"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________.",
    fill: "Accueil",
    vfQ: "L'e-mail est envoyé par Accueil du quartier.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela a-t-il lieu ?",
    text: ["mardi 14 mai", "la semaine prochaine sans date", "un dimanche de novembre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La date est _________ 14 mai.",
    fill: "mardi",
    vfQ: "L'activité a lieu mardi 14 mai.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "À quelle heure faut-il arriver ?",
    text: ["10 h 15", "7 h", "21 h 30"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut arriver à _________.",
    fill: "10",
    vfQ: "L'heure indiquée est 10 h 15.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle activité est proposée ?",
    text: ["un atelier valise légère", "un cours de piano", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "atelier",
    vfQ: "Le texte parle de l'activité suivante : un atelier valise légère.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["une petite valise", "un dictionnaire lourd", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "petite",
    vfQ: "Il faut prévoir une petite valise.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quelle information pratique est donnée ?",
    text: ["5 CHF", "10 places", "aucun horaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix indiqué est _________.",
    fill: "5",
    vfQ: "Le prix indiqué est 5 CHF.",
    vfC: 0,
  }),
]);

const E11_4_CE_EMAIL_3_TEXT = `De : Service activités

Objet : Question avant une présentation du camping familial

Bonjour,

J'ai vu l'annonce pour une présentation du camping familial et je voudrais m'inscrire.
Pouvez-vous confirmer qu'il faut apporter un sac de couchage ?
Je peux venir mercredi 22 mai à 11 h à le centre du Lac.
Mon objectif est de vivre quelques jours en groupe. Merci pour votre réponse.

Votre dossier sera mis à jour après votre réponse.
Nous vous souhaitons une excellente journée.
Merci encore pour votre confiance.
Bonne journée à toutes et à tous.
Merci encore pour votre compréhension.
Conservez le numéro de contact indiqué.
Tout est organisé pour que ce soit simple.
À bientôt, et merci de votre lecture.
Je reste près de mon téléphone aujourd'hui.
Dis-moi si tu as besoin d'autre chose.
On peut aussi en parler demain matin.
Cordialement,

Rami`;

const E11_4_CE_EMAIL_3_POOL = buildExpressPool("e11-4-ce-email-3", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Question avant une présentation du camping familial", "Facture oubliée", "Invitation sans date"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Question",
    vfQ: "L'objet de l'e-mail est « Question avant une présentation du camping familial ».",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Service activités", "un voisin inconnu", "le service des impôts"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________.",
    fill: "Service",
    vfQ: "L'e-mail est envoyé par Service activités.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela a-t-il lieu ?",
    text: ["mercredi 22 mai", "la semaine prochaine sans date", "un dimanche de novembre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La date est _________ 22 mai.",
    fill: "mercredi",
    vfQ: "L'activité a lieu mercredi 22 mai.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "À quelle heure faut-il arriver ?",
    text: ["11 h", "7 h", "21 h 30"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut arriver à _________.",
    fill: "11",
    vfQ: "L'heure indiquée est 11 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle activité est proposée ?",
    text: ["une présentation du camping familial", "une permanence administrative", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "présentation",
    vfQ: "Le texte parle de l'activité suivante : une présentation du camping familial.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["un sac de couchage", "un uniforme de travail", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "sac",
    vfQ: "Il faut prévoir un sac de couchage.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quelle information pratique est donnée ?",
    text: ["8 CHF", "12 places", "aucun horaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix indiqué est _________.",
    fill: "8",
    vfQ: "Le prix indiqué est 8 CHF.",
    vfC: 0,
  }),
]);

const E11_4_CE_EMAIL_4_TEXT = `De : Association Bellevue

Objet : Confirmation de votre place

Madame, Monsieur,

Votre place pour une sortie test en train régional est réservée.
La séance aura lieu jeudi 30 mai à la ferme des Lilas.
Nous sommes ouverts du lundi au vendredi.
Cordialement, et bonne journée.
Si une information manque, écrivez-nous rapidement.
C'est important pour moi, merci beaucoup.
Nous traitons votre demande rapidement.
Vous pouvez répondre directement à ce message.
Merci de confirmer la bonne réception.
Joignez les documents demandés si nécessaire.
Nous vous souhaitons une excellente journée.
Le service est également disponible en ligne.
Respectez la file d'attente, s'il vous plaît.
Merci d'arriver à 12 h 30. La participation est de 10 CHF.
Le bénévole Marco sera sur place pour vous accueillir.

Avec nos salutations,

Association Bellevue`;

const E11_4_CE_EMAIL_4_POOL = buildExpressPool("e11-4-ce-email-4", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Confirmation de votre place", "Facture oubliée", "Invitation sans date"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Confirmation",
    vfQ: "L'objet de l'e-mail est « Confirmation de votre place ».",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Association Bellevue", "un voisin inconnu", "le service des impôts"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________.",
    fill: "Association",
    vfQ: "L'e-mail est envoyé par Association Bellevue.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela a-t-il lieu ?",
    text: ["jeudi 30 mai", "la semaine prochaine sans date", "un dimanche de novembre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La date est _________ 30 mai.",
    fill: "jeudi",
    vfQ: "L'activité a lieu jeudi 30 mai.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "À quelle heure faut-il arriver ?",
    text: ["12 h 30", "7 h", "21 h 30"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut arriver à _________.",
    fill: "12",
    vfQ: "L'heure indiquée est 12 h 30.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle activité est proposée ?",
    text: ["une sortie test en train régional", "un atelier couture", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "sortie",
    vfQ: "Le texte parle de l'activité suivante : une sortie test en train régional.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["une carte de transport", "un marteau", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "carte",
    vfQ: "Il faut prévoir une carte de transport.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quelle information pratique est donnée ?",
    text: ["10 CHF", "14 places", "aucun horaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix indiqué est _________.",
    fill: "10",
    vfQ: "Le prix indiqué est 10 CHF.",
    vfC: 0,
  }),
]);

const E11_4_CE_EMAIL_5_TEXT = `De : Secrétariat du centre

Objet : Conseil pratique : une brochure touristique

Salut,

Petit conseil pour un cours pour lire une brochure : mets une brochure touristique dans ton sac.
Je t'attends vendredi 7 juin à 14 h à le foyer Bellevue.
Si tu veux trouver les informations importantes, cette séance est très utile.
Attention : les prix peuvent changer selon la saison.

À demain,

Noé
En cas de question, vous pouvez écrire ou téléphoner.
Une confirmation sera envoyée ensuite.
Pensez à arriver un peu en avance.
Gardez ce texte pour vous en souvenir.
Nous restons disponibles pour vous aider.
Les horaires habituels restent les mêmes.
Vous pouvez venir accompagné(e) si vous le souhaitez.
Un plan simple est disponible à l'accueil.
N'oubliez pas de vérifier la date et l'heure.
Merci de votre attention et de votre patience.
Une confirmation arrivera ensuite.
Le lieu est facile à trouver.
Prenez votre temps pour comprendre le message.`;

const E11_4_CE_EMAIL_5_POOL = buildExpressPool("e11-4-ce-email-5", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Conseil pratique : une brochure touristique", "Facture oubliée", "Invitation sans date"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Conseil",
    vfQ: "L'objet de l'e-mail est « Conseil pratique : une brochure touristique ».",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Secrétariat du centre", "un voisin inconnu", "le service des impôts"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________.",
    fill: "Secrétariat",
    vfQ: "L'e-mail est envoyé par Secrétariat du centre.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela a-t-il lieu ?",
    text: ["vendredi 7 juin", "la semaine prochaine sans date", "un dimanche de novembre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La date est _________ 7 juin.",
    fill: "vendredi",
    vfQ: "L'activité a lieu vendredi 7 juin.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "À quelle heure faut-il arriver ?",
    text: ["14 h", "7 h", "21 h 30"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut arriver à _________.",
    fill: "14",
    vfQ: "L'heure indiquée est 14 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle activité est proposée ?",
    text: ["un cours pour lire une brochure", "un cours de piano", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "cours",
    vfQ: "Le texte parle de l'activité suivante : un cours pour lire une brochure.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["une brochure touristique", "un dictionnaire lourd", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "brochure",
    vfQ: "Il faut prévoir une brochure touristique.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quelle information pratique est donnée ?",
    text: ["12 CHF", "15 places", "aucun horaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix indiqué est _________.",
    fill: "12",
    vfQ: "Le prix indiqué est 12 CHF.",
    vfC: 0,
  }),
]);

const E11_4_CE_EMAIL_6_TEXT = `De : Équipe organisation

Objet : Changement de salle

Bonjour,

Petit changement pour une discussion sur les vacances pas chères : la salle prévue n'est plus libre.
Le nouveau lieu est la bibliothèque Nord. La date et l'heure ne changent pas : samedi 15 juin à 15 h 15.
Le prix reste 15 CHF et les 16 places sont gardées.
Merci de préparer un tableau de dépenses.

Nous traitons votre demande dans les meilleurs délais.
N'hésitez pas à nous indiquer vos disponibilités.
Ce message contient les informations essentielles.
N'hésite pas à me répondre quand tu peux.
Je t'envoie aussi ce détail pour être clair.
Le trajet est simple, ne t'inquiète pas.
Passe le bonjour à tout le monde.
À très bientôt, prends soin de toi.
C'est important pour moi, merci beaucoup.
Vous pouvez répondre directement à ce message.
Merci de confirmer la bonne réception.
Merci de votre compréhension,

Équipe organisation`;

const E11_4_CE_EMAIL_6_POOL = buildExpressPool("e11-4-ce-email-6", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Changement de salle", "Facture oubliée", "Invitation sans date"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Changement",
    vfQ: "L'objet de l'e-mail est « Changement de salle ».",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Équipe organisation", "un voisin inconnu", "le service des impôts"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________.",
    fill: "Équipe",
    vfQ: "L'e-mail est envoyé par Équipe organisation.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela a-t-il lieu ?",
    text: ["samedi 15 juin", "la semaine prochaine sans date", "un dimanche de novembre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La date est _________ 15 juin.",
    fill: "samedi",
    vfQ: "L'activité a lieu samedi 15 juin.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "À quelle heure faut-il arriver ?",
    text: ["15 h 15", "7 h", "21 h 30"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut arriver à _________.",
    fill: "15",
    vfQ: "L'heure indiquée est 15 h 15.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle activité est proposée ?",
    text: ["une discussion sur les vacances pas chères", "une permanence administrative", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "discussion",
    vfQ: "Le texte parle de l'activité suivante : une discussion sur les vacances pas chères.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["un tableau de dépenses", "un uniforme de travail", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "tableau",
    vfQ: "Il faut prévoir un tableau de dépenses.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quelle information pratique est donnée ?",
    text: ["15 CHF", "16 places", "aucun horaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix indiqué est _________.",
    fill: "15",
    vfQ: "Le prix indiqué est 15 CHF.",
    vfC: 0,
  }),
]);

const E11_4_CE_EMAIL_7_TEXT = `De : Club des habitants

Objet : Merci pour votre participation

Bonjour,

Merci pour votre présence lors de une préparation de pique-nique de plage à la terrasse du Marché.
Plusieurs personnes ont expliqué que la séance aide à manger dehors simplement.
Pour la prochaine fois, nous garderons dimanche 23 juin à 16 h.
Votre remarque sur une glacière a été notée.

Nous comptons sur vous.
Après cela, vous recevrez un petit rappel.
Gardez une copie papier si possible.
Le cachet de la date est important.
Le personnel peut répondre en français simple.
En cas de changement, un nouvel avis sera publié.
Bonne journée à toutes et à tous.
Merci encore pour votre compréhension.
Conservez le numéro de contact indiqué.
Tout est organisé pour que ce soit simple.
À bientôt, et merci de votre lecture.
Je reste près de mon téléphone aujourd'hui.
Bien à vous,

Club des habitants`;

const E11_4_CE_EMAIL_7_POOL = buildExpressPool("e11-4-ce-email-7", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Merci pour votre participation", "Facture oubliée", "Invitation sans date"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Merci",
    vfQ: "L'objet de l'e-mail est « Merci pour votre participation ».",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Club des habitants", "un voisin inconnu", "le service des impôts"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________.",
    fill: "Club",
    vfQ: "L'e-mail est envoyé par Club des habitants.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela a-t-il lieu ?",
    text: ["dimanche 23 juin", "la semaine prochaine sans date", "un dimanche de novembre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La date est _________ 23 juin.",
    fill: "dimanche",
    vfQ: "L'activité a lieu dimanche 23 juin.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "À quelle heure faut-il arriver ?",
    text: ["16 h", "7 h", "21 h 30"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut arriver à _________.",
    fill: "16",
    vfQ: "L'heure indiquée est 16 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle activité est proposée ?",
    text: ["une préparation de pique-nique de plage", "un atelier couture", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "préparation",
    vfQ: "Le texte parle de l'activité suivante : une préparation de pique-nique de plage.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["une glacière", "un marteau", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "glacière",
    vfQ: "Il faut prévoir une glacière.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quelle information pratique est donnée ?",
    text: ["18 CHF", "18 places", "aucun horaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix indiqué est _________.",
    fill: "18",
    vfQ: "Le prix indiqué est 18 CHF.",
    vfC: 0,
  }),
]);

const E11_4_CE_EMAIL_8_TEXT = `De : Maison commune

Objet : Invitation vacances

Bonjour les amis,

Ça vous dit de venir avec moi à une séance sécurité au soleil ?
Le rendez-vous est lundi 1er juillet à 17 h 30 à le local des Jeunes.
Il faut réserver directement sur place car il y a seulement 20 places.
Apportez de la crème solaire et un peu de bonne humeur.

À très vite,

Mina
Pour toute urgence, appelez-nous pendant les heures d'ouverture.
Conservez ce message pour vos dossiers.
Une confirmation vous sera envoyée ensuite.
J'espère que tout se passe bien de ton côté.
N'hésite pas à me répondre quand tu peux.
Je t'envoie aussi ce détail pour être clair.
Le trajet est simple, ne t'inquiète pas.
Passe le bonjour à tout le monde.
À très bientôt, prends soin de toi.
C'est important pour moi, merci beaucoup.
Nous traitons votre demande rapidement.
Vous pouvez répondre directement à ce message.
Merci de vérifier les informations avant de répondre.`;

const E11_4_CE_EMAIL_8_POOL = buildExpressPool("e11-4-ce-email-8", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Invitation vacances", "Facture oubliée", "Invitation sans date"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Invitation",
    vfQ: "L'objet de l'e-mail est « Invitation vacances ».",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Maison commune", "un voisin inconnu", "le service des impôts"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________.",
    fill: "Maison",
    vfQ: "L'e-mail est envoyé par Maison commune.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela a-t-il lieu ?",
    text: ["lundi 1er juillet", "la semaine prochaine sans date", "un dimanche de novembre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La date est _________ 1er juillet.",
    fill: "lundi",
    vfQ: "L'activité a lieu lundi 1er juillet.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "À quelle heure faut-il arriver ?",
    text: ["17 h 30", "7 h", "21 h 30"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut arriver à _________.",
    fill: "17",
    vfQ: "L'heure indiquée est 17 h 30.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle activité est proposée ?",
    text: ["une séance sécurité au soleil", "un cours de piano", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "séance",
    vfQ: "Le texte parle de l'activité suivante : une séance sécurité au soleil.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["de la crème solaire", "un dictionnaire lourd", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "crème",
    vfQ: "Il faut prévoir de la crème solaire.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quelle information pratique est donnée ?",
    text: ["20 CHF", "20 places", "aucun horaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix indiqué est _________.",
    fill: "20",
    vfQ: "Le prix indiqué est 20 CHF.",
    vfC: 0,
  }),
]);

const E11_4_CE_EMAIL_9_TEXT = `De : Bureau des inscriptions

Objet : Liste du matériel

Bonjour,

Pour un échange de cartes postales, la petite liste est simple : une adresse postale, une bouteille d'eau et un stylo.
Le rendez-vous reste mardi 9 juillet à 18 h à la salle des Fêtes.
Le tarif est 25 CHF.
Le thème principal sera : écrire un message court.

N'hésitez pas à nous indiquer vos disponibilités.
Ce message contient les informations essentielles.
Nous vous remercions de votre compréhension.
Pour toute urgence, appelez-nous pendant les heures d'ouverture.
Nous restons disponibles pour vous aider.
Les horaires habituels restent les mêmes.
Merci de votre attention et de votre patience.
Vous pouvez venir accompagné(e) si vous le souhaitez.
Un plan simple est disponible à l'accueil.
N'oubliez pas de vérifier la date et l'heure.
Le personnel peut répondre en français simple.
En cas de changement, un nouvel avis sera publié.
Merci,

Bureau des inscriptions`;

const E11_4_CE_EMAIL_9_POOL = buildExpressPool("e11-4-ce-email-9", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Liste du matériel", "Facture oubliée", "Invitation sans date"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Liste",
    vfQ: "L'objet de l'e-mail est « Liste du matériel ».",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Bureau des inscriptions", "un voisin inconnu", "le service des impôts"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________.",
    fill: "Bureau",
    vfQ: "L'e-mail est envoyé par Bureau des inscriptions.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela a-t-il lieu ?",
    text: ["mardi 9 juillet", "la semaine prochaine sans date", "un dimanche de novembre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La date est _________ 9 juillet.",
    fill: "mardi",
    vfQ: "L'activité a lieu mardi 9 juillet.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "À quelle heure faut-il arriver ?",
    text: ["18 h", "7 h", "21 h 30"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut arriver à _________.",
    fill: "18",
    vfQ: "L'heure indiquée est 18 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle activité est proposée ?",
    text: ["un échange de cartes postales", "une permanence administrative", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "échange",
    vfQ: "Le texte parle de l'activité suivante : un échange de cartes postales.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["une adresse postale", "un uniforme de travail", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "adresse",
    vfQ: "Il faut prévoir une adresse postale.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quelle information pratique est donnée ?",
    text: ["25 CHF", "22 places", "aucun horaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix indiqué est _________.",
    fill: "25",
    vfQ: "Le prix indiqué est 25 CHF.",
    vfC: 0,
  }),
]);

const E11_4_CE_EMAIL_10_TEXT = `De : Info loisirs

Objet : Places disponibles

Bonjour,

Bonne nouvelle : une recherche d'activités de pluie n'est pas complet, il reste 24 places.
La séance aura lieu mercredi 17 juillet à 18 h 45 à le jardin partagé.
Merci de vous inscrire avec le QR code de l'affiche avant demain soir.
Prévoyez un jeu de cartes. Le prix est 30 CHF.

N'oubliez pas de vérifier la date.
Bonne journée à toutes et à tous.
Ce document complète les informations déjà données.
Tout est organisé pour que ce soit simple.
À bientôt, et merci de votre lecture.
Je reste près de mon téléphone aujourd'hui.
Dis-moi si tu as besoin d'autre chose.
On peut aussi en parler demain matin.
J'espère que tout se passe bien de ton côté.
N'hésite pas à me répondre quand tu peux.
Je t'envoie aussi ce détail pour être clair.
Cordialement,

Info loisirs`;

const E11_4_CE_EMAIL_10_POOL = buildExpressPool("e11-4-ce-email-10", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Places disponibles", "Facture oubliée", "Invitation sans date"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Places",
    vfQ: "L'objet de l'e-mail est « Places disponibles ».",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Info loisirs", "un voisin inconnu", "le service des impôts"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________.",
    fill: "Info",
    vfQ: "L'e-mail est envoyé par Info loisirs.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela a-t-il lieu ?",
    text: ["mercredi 17 juillet", "la semaine prochaine sans date", "un dimanche de novembre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La date est _________ 17 juillet.",
    fill: "mercredi",
    vfQ: "L'activité a lieu mercredi 17 juillet.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "À quelle heure faut-il arriver ?",
    text: ["18 h 45", "7 h", "21 h 30"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut arriver à _________.",
    fill: "18",
    vfQ: "L'heure indiquée est 18 h 45.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle activité est proposée ?",
    text: ["une recherche d'activités de pluie", "un atelier couture", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "recherche",
    vfQ: "Le texte parle de l'activité suivante : une recherche d'activités de pluie.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["un jeu de cartes", "un marteau", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "jeu",
    vfQ: "Il faut prévoir un jeu de cartes.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quelle information pratique est donnée ?",
    text: ["30 CHF", "24 places", "aucun horaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix indiqué est _________.",
    fill: "30",
    vfQ: "Le prix indiqué est 30 CHF.",
    vfC: 0,
  }),
]);

const E11_4_CE_EMAIL_11_TEXT = `De : Groupe des bénévoles

Objet : Retour sur l'activité

Bonjour,

Depuis un atelier budget vacances, nous recevons des messages très positifs.
Les participants ont surtout apprécié de prévoir les dépenses principales.
La prochaine date est jeudi 25 juillet à 19 h à le café du Pont.
Cette fois, merci d'apporter une calculatrice.

Au plaisir de vous revoir,

Groupe des bénévoles
Prenez votre temps pour comprendre le message.
En cas de changement, un nouvel avis sera publié.
Nous sommes là pour vous aider.
Gardez ce texte pour vous en souvenir.
Conservez le numéro de contact indiqué.
Tout est organisé pour que ce soit simple.
À bientôt, et merci de votre lecture.
Je reste près de mon téléphone aujourd'hui.
Dis-moi si tu as besoin d'autre chose.
On peut aussi en parler demain matin.
J'espère que tout se passe bien de ton côté.
N'hésite pas à me répondre quand tu peux.
Je t'envoie aussi ce détail pour être clair.`;

const E11_4_CE_EMAIL_11_POOL = buildExpressPool("e11-4-ce-email-11", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Retour sur l'activité", "Facture oubliée", "Invitation sans date"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Retour",
    vfQ: "L'objet de l'e-mail est « Retour sur l'activité ».",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Groupe des bénévoles", "un voisin inconnu", "le service des impôts"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________.",
    fill: "Groupe",
    vfQ: "L'e-mail est envoyé par Groupe des bénévoles.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela a-t-il lieu ?",
    text: ["jeudi 25 juillet", "la semaine prochaine sans date", "un dimanche de novembre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La date est _________ 25 juillet.",
    fill: "jeudi",
    vfQ: "L'activité a lieu jeudi 25 juillet.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "À quelle heure faut-il arriver ?",
    text: ["19 h", "7 h", "21 h 30"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut arriver à _________.",
    fill: "19",
    vfQ: "L'heure indiquée est 19 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle activité est proposée ?",
    text: ["un atelier budget vacances", "un cours de piano", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "atelier",
    vfQ: "Le texte parle de l'activité suivante : un atelier budget vacances.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["une calculatrice", "un dictionnaire lourd", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "calculatrice",
    vfQ: "Il faut prévoir une calculatrice.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quelle information pratique est donnée ?",
    text: ["4 CHF", "6 personnes", "aucun horaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix indiqué est _________.",
    fill: "4",
    vfQ: "Le prix indiqué est 4 CHF.",
    vfC: 0,
  }),
]);

const E11_4_CE_EMAIL_12_TEXT = `De : Réception

Objet : Rendez-vous à 8 h 30

Bonjour,

Votre rendez-vous lié à une initiation aux réservations en ligne commence à 8 h 30.
Merci de votre attention et de votre patience.
Une confirmation arrivera ensuite.
Le lieu est facile à trouver.
Prenez votre temps pour comprendre le message.
Dis-moi si tu as besoin d'autre chose.
On peut aussi en parler demain matin.
J'espère que tout se passe bien de ton côté.
N'hésite pas à me répondre quand tu peux.
Je t'envoie aussi ce détail pour être clair.
Le trajet est simple, ne t'inquiète pas.
Passe le bonjour à tout le monde.
À très bientôt, prends soin de toi.
Merci d'arriver à la maison médicale dix minutes avant.
La date est vendredi 2 août et le prix est 6 CHF.
La docteure Morel conseille de préparer un mot de passe.

Meilleures salutations,

Réception`;

const E11_4_CE_EMAIL_12_POOL = buildExpressPool("e11-4-ce-email-12", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Rendez-vous à 8 h 30", "Facture oubliée", "Invitation sans date"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Rendez",
    vfQ: "L'objet de l'e-mail est « Rendez-vous à 8 h 30 ».",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Réception", "un voisin inconnu", "le service des impôts"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________.",
    fill: "Réception",
    vfQ: "L'e-mail est envoyé par Réception.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela a-t-il lieu ?",
    text: ["vendredi 2 août", "la semaine prochaine sans date", "un dimanche de novembre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La date est _________ 2 août.",
    fill: "vendredi",
    vfQ: "L'activité a lieu vendredi 2 août.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "À quelle heure faut-il arriver ?",
    text: ["8 h 30", "7 h", "21 h 30"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut arriver à _________.",
    fill: "8",
    vfQ: "L'heure indiquée est 8 h 30.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle activité est proposée ?",
    text: ["une initiation aux réservations en ligne", "une permanence administrative", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "initiation",
    vfQ: "Le texte parle de l'activité suivante : une initiation aux réservations en ligne.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["un mot de passe", "un uniforme de travail", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "mot",
    vfQ: "Il faut prévoir un mot de passe.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quelle information pratique est donnée ?",
    text: ["6 CHF", "9 personnes", "aucun horaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix indiqué est _________.",
    fill: "6",
    vfQ: "Le prix indiqué est 6 CHF.",
    vfC: 0,
  }),
]);

const E11_4_CE_EMAIL_13_TEXT = `De : Atelier A2

Objet : Préparation de groupe

Chers participants,

Pour que une marche découverte avant le départ se passe bien, nous formons deux petits groupes.
Le premier groupe est attendu à 13 h à le parc des Amandiers.
La séance a lieu samedi 10 août avec l'entraîneuse Emma.
Merci de vérifier une gourde avant de partir.

Si tu veux, on peut faire une liste ensemble.
Le budget reste simple et raisonnable.
On pourra aussi inviter une autre personne.
Je reste à votre disposition pour toute précision.
Pensez à arriver un peu en avance.
Gardez ce texte pour vous en souvenir.
Nous restons disponibles pour vous aider.
Les horaires habituels restent les mêmes.
Merci de votre attention et de votre patience.
Vous pouvez venir accompagné(e) si vous le souhaitez.
Un plan simple est disponible à l'accueil.
N'oubliez pas de vérifier la date et l'heure.
À bientôt,

Atelier A2`;

const E11_4_CE_EMAIL_13_POOL = buildExpressPool("e11-4-ce-email-13", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Préparation de groupe", "Facture oubliée", "Invitation sans date"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Préparation",
    vfQ: "L'objet de l'e-mail est « Préparation de groupe ».",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Atelier A2", "un voisin inconnu", "le service des impôts"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________.",
    fill: "Atelier",
    vfQ: "L'e-mail est envoyé par Atelier A2.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela a-t-il lieu ?",
    text: ["samedi 10 août", "la semaine prochaine sans date", "un dimanche de novembre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La date est _________ 10 août.",
    fill: "samedi",
    vfQ: "L'activité a lieu samedi 10 août.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "À quelle heure faut-il arriver ?",
    text: ["13 h", "7 h", "21 h 30"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut arriver à _________.",
    fill: "13",
    vfQ: "L'heure indiquée est 13 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle activité est proposée ?",
    text: ["une marche découverte avant le départ", "un atelier couture", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "marche",
    vfQ: "Le texte parle de l'activité suivante : une marche découverte avant le départ.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["une gourde", "un marteau", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "gourde",
    vfQ: "Il faut prévoir une gourde.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quelle information pratique est donnée ?",
    text: ["9 CHF", "11 personnes", "aucun horaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix indiqué est _________.",
    fill: "9",
    vfQ: "Le prix indiqué est 9 CHF.",
    vfC: 0,
  }),
]);

const E11_4_CE_EMAIL_14_TEXT = `De : Coordination locale

Objet : Demande d'information

Bonjour,

Je vous écris car je cherche des informations sur une rencontre avec une agence locale.
J'ai noté la date, dimanche 18 août, et l'heure, 14 h 45, à la boutique Horizon.
Pouvez-vous confirmer le prix de 11 CHF ?
Je viens surtout pour poser des questions précises.

Votre dossier sera mis à jour après votre réponse.
Nous vous souhaitons une excellente journée.
Merci encore pour votre confiance.
Voici quelques détails utiles pour la suite.
Une confirmation sera envoyée ensuite.
Le lieu est facile à trouver avec les indications.
Pensez à arriver un peu en avance.
Gardez ce texte pour vous en souvenir.
Nous restons disponibles pour vous aider.
Les horaires habituels restent les mêmes.
Merci de votre attention et de votre patience.
Vous pouvez venir accompagné(e) si vous le souhaitez.
Merci d'avance,

Salma`;

const E11_4_CE_EMAIL_14_POOL = buildExpressPool("e11-4-ce-email-14", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Demande d'information", "Facture oubliée", "Invitation sans date"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Demande",
    vfQ: "L'objet de l'e-mail est « Demande d'information ».",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Coordination locale", "un voisin inconnu", "le service des impôts"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________.",
    fill: "Coordination",
    vfQ: "L'e-mail est envoyé par Coordination locale.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela a-t-il lieu ?",
    text: ["dimanche 18 août", "la semaine prochaine sans date", "un dimanche de novembre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La date est _________ 18 août.",
    fill: "dimanche",
    vfQ: "L'activité a lieu dimanche 18 août.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "À quelle heure faut-il arriver ?",
    text: ["14 h 45", "7 h", "21 h 30"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut arriver à _________.",
    fill: "14",
    vfQ: "L'heure indiquée est 14 h 45.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle activité est proposée ?",
    text: ["une rencontre avec une agence locale", "un cours de piano", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "rencontre",
    vfQ: "Le texte parle de l'activité suivante : une rencontre avec une agence locale.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["une liste de questions", "un dictionnaire lourd", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "liste",
    vfQ: "Il faut prévoir une liste de questions.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quelle information pratique est donnée ?",
    text: ["11 CHF", "13 personnes", "aucun horaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix indiqué est _________.",
    fill: "11",
    vfQ: "Le prix indiqué est 11 CHF.",
    vfC: 0,
  }),
]);

const E11_4_CE_EMAIL_15_TEXT = `De : Agence Voyages Clair

Objet : Modification de vol — vacances Nice

Bonjour Mme Rossi,
Votre vol Genève–Nice du 8 août part finalement à 15 h 05 (au lieu de 11 h 20).
Arrivez à l'aéroport 2 heures avant. Porte prévue : B12.
Hôtel « Les Palmiers » inchangé (check-in 16 h).
Désolé pour ce changement. Un voucher boisson vous attend au comptoir.
Je reste près de mon téléphone aujourd'hui.
Dis-moi si tu as besoin d'autre chose.
On peut aussi en parler demain matin.
J'espère que tout se passe bien de ton côté.
N'hésite pas à me répondre quand tu peux.
Je t'envoie aussi ce détail pour être clair.
Le trajet est simple, ne t'inquiète pas.
Passe le bonjour à tout le monde.
À très bientôt, prends soin de toi.
Cordialement, Agence Clair`;

const E11_4_CE_EMAIL_15_POOL = buildExpressPool("e11-4-ce-email-15", [
  q({
    id: "cem-q1",
    textQ: "Nouvelle heure de vol ?",
    text: ["15 h 05", "11 h 20", "16 h"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "part finalement à _________ h 05",
    fill: "15",
    vfQ: "À 15 h 05.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Destination ?",
    text: ["Nice", "Rome", "Paris"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Genève–_________",
    fill: "Nice",
    vfQ: "Nice.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Porte prévue ?",
    text: ["B12", "A1", "C99"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Porte prévue : _________.",
    fill: "B12",
    vfQ: "B12.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Nom de l'hôtel ?",
    text: ["Les Palmiers", "Termini", "FitLake"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Hôtel « Les _________ »",
    fill: "Palmiers",
    vfQ: "Les Palmiers.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Check-in hôtel ?",
    text: ["16 h", "11 h 20", "6 h"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "check-in _________ h",
    fill: "16",
    vfQ: "À 16 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Date du vol ?",
    text: ["8 août", "30 juin", "3 octobre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "du _________ août",
    fill: "8",
    vfQ: "8 août.",
    vfC: 0,
  }),
]);

const E11_4_CE_EMAIL_16_TEXT = `De : Service rappel

Objet : Dernier rappel

Bonjour,

Dernier message avant une séance souvenirs de voyage !
Rendez-vous mardi 3 septembre à 17 h à la place du Village.
L'entrée n'est garantie que si l'inscription est faite au stand d'information.
Apportez trois photos et gardez 16 CHF si besoin.

À tout à l'heure,

Service rappel
Dis-moi si tu as des questions, je réponds vite.
Tu peux m'appeler si c'est plus simple pour toi.
J'espère que tu vas bien et que tout se passe comme prévu.
N'oublie pas de me confirmer dès que tu peux.
Merci de confirmer la bonne réception.
Joignez les documents demandés si nécessaire.
Nous vous souhaitons une excellente journée.
Le service est également disponible en ligne.
Respectez la file d'attente, s'il vous plaît.
Les personnes à mobilité réduite sont prioritaires.
En cas de perte d'objet, passez à l'accueil.
Le service client répond aussi par téléphone.
Merci de lire ce message jusqu'à la fin.`;

const E11_4_CE_EMAIL_16_POOL = buildExpressPool("e11-4-ce-email-16", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Dernier rappel", "Facture oubliée", "Invitation sans date"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Dernier",
    vfQ: "L'objet de l'e-mail est « Dernier rappel ».",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Service rappel", "un voisin inconnu", "le service des impôts"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________.",
    fill: "Service",
    vfQ: "L'e-mail est envoyé par Service rappel.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela a-t-il lieu ?",
    text: ["mardi 3 septembre", "la semaine prochaine sans date", "un dimanche de novembre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La date est _________ 3 septembre.",
    fill: "mardi",
    vfQ: "L'activité a lieu mardi 3 septembre.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "À quelle heure faut-il arriver ?",
    text: ["17 h", "7 h", "21 h 30"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut arriver à _________.",
    fill: "17",
    vfQ: "L'heure indiquée est 17 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle activité est proposée ?",
    text: ["une séance souvenirs de voyage", "un atelier couture", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "séance",
    vfQ: "Le texte parle de l'activité suivante : une séance souvenirs de voyage.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["trois photos", "un marteau", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "trois",
    vfQ: "Il faut prévoir trois photos.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quelle information pratique est donnée ?",
    text: ["16 CHF", "19 personnes", "aucun horaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix indiqué est _________.",
    fill: "16",
    vfQ: "Le prix indiqué est 16 CHF.",
    vfC: 0,
  }),
]);

const E11_4_CE_EMAIL_17_TEXT = `De : Responsable du projet

Objet : Message de la responsable

Bonjour,

Message de La coach Ana au sujet de un contrôle des papiers de voyage.
La rencontre est prévue mercredi 11 septembre à 9 h 45 à la halle des Sports.
Le but reste simple : apprendre à partir avec les bons documents.
Une confirmation vous sera envoyée ensuite.
Merci de vérifier les informations avant de répondre.
Nous sommes ouverts du lundi au vendredi.
Cordialement, et bonne journée.
Les horaires habituels restent les mêmes.
Merci de votre attention et de votre patience.
Vous pouvez venir accompagné(e) si vous le souhaitez.
Un plan simple est disponible à l'accueil.
N'oubliez pas de vérifier la date et l'heure.
Le personnel peut répondre en français simple.
En cas de changement, un nouvel avis sera publié.
Bonne journée à toutes et à tous.
Merci de respecter cette règle : les photocopies ne remplacent pas toujours l'original.

Bien cordialement,

Responsable du projet`;

const E11_4_CE_EMAIL_17_POOL = buildExpressPool("e11-4-ce-email-17", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Message de la responsable", "Facture oubliée", "Invitation sans date"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Message",
    vfQ: "L'objet de l'e-mail est « Message de la responsable ».",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Responsable du projet", "un voisin inconnu", "le service des impôts"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________.",
    fill: "Responsable",
    vfQ: "L'e-mail est envoyé par Responsable du projet.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela a-t-il lieu ?",
    text: ["mercredi 11 septembre", "la semaine prochaine sans date", "un dimanche de novembre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La date est _________ 11 septembre.",
    fill: "mercredi",
    vfQ: "L'activité a lieu mercredi 11 septembre.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "À quelle heure faut-il arriver ?",
    text: ["9 h 45", "7 h", "21 h 30"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut arriver à _________.",
    fill: "9",
    vfQ: "L'heure indiquée est 9 h 45.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle activité est proposée ?",
    text: ["un contrôle des papiers de voyage", "un cours de piano", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "contrôle",
    vfQ: "Le texte parle de l'activité suivante : un contrôle des papiers de voyage.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["une pièce d'identité", "un dictionnaire lourd", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "pièce",
    vfQ: "Il faut prévoir une pièce d'identité.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quelle information pratique est donnée ?",
    text: ["22 CHF", "deux groupes", "aucun horaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix indiqué est _________.",
    fill: "22",
    vfQ: "Le prix indiqué est 22 CHF.",
    vfC: 0,
  }),
]);

const E11_4_CE_EMAIL_18_TEXT = `De : Équipe du samedi

Objet : Organisation du samedi

Bonjour,

L'équipe prépare le salon Harmonie pour une présentation des règles du chalet.
Les participants arrivent à 11 h 30 avec des chaussons propres.
La date exacte est jeudi 19 septembre.
Après la séance, un court échange expliquera comment réussir à respecter un logement partagé.

Vous pouvez demander de l'aide si besoin.
Les informations importantes sont déjà notées plus haut.
Merci de votre attention et de votre patience.
Une confirmation arrivera ensuite.
Tout est organisé pour que ce soit simple.
À bientôt, et merci de votre lecture.
Je reste près de mon téléphone aujourd'hui.
Dis-moi si tu as besoin d'autre chose.
On peut aussi en parler demain matin.
J'espère que tout se passe bien de ton côté.
N'hésite pas à me répondre quand tu peux.
Je t'envoie aussi ce détail pour être clair.
Merci de votre aide,

Équipe du samedi`;

const E11_4_CE_EMAIL_18_POOL = buildExpressPool("e11-4-ce-email-18", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Organisation du samedi", "Facture oubliée", "Invitation sans date"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Organisation",
    vfQ: "L'objet de l'e-mail est « Organisation du samedi ».",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Équipe du samedi", "un voisin inconnu", "le service des impôts"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________.",
    fill: "Équipe",
    vfQ: "L'e-mail est envoyé par Équipe du samedi.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela a-t-il lieu ?",
    text: ["jeudi 19 septembre", "la semaine prochaine sans date", "un dimanche de novembre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La date est _________ 19 septembre.",
    fill: "jeudi",
    vfQ: "L'activité a lieu jeudi 19 septembre.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "À quelle heure faut-il arriver ?",
    text: ["11 h 30", "7 h", "21 h 30"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut arriver à _________.",
    fill: "11",
    vfQ: "L'heure indiquée est 11 h 30.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle activité est proposée ?",
    text: ["une présentation des règles du chalet", "une permanence administrative", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "présentation",
    vfQ: "Le texte parle de l'activité suivante : une présentation des règles du chalet.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["des chaussons propres", "un uniforme de travail", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "chaussons",
    vfQ: "Il faut prévoir des chaussons propres.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quelle information pratique est donnée ?",
    text: ["28 CHF", "un petit groupe", "aucun horaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix indiqué est _________.",
    fill: "28",
    vfQ: "Le prix indiqué est 28 CHF.",
    vfC: 0,
  }),
]);

const E11_4_CE_EMAIL_19_TEXT = `De : Questionnaire qualité

Objet : Votre avis nous intéresse

Bonjour,

Vous avez récemment participé à une préparation du sac de randonnée à la résidence du Parc.
Pouvez-vous dire si l'horaire de 15 h 45 vous convient ?
La prochaine séance est prévue vendredi 27 septembre.
Votre avis nous aidera à mieux organiser les moments pour marcher sans oublier l'essentiel.

Une question ? Écrivez ou téléphonez.
Merci encore, et à bientôt.
Tout est organisé pour que ce soit simple.
Le contact est indiqué dans le message.
Dis-moi si tu as besoin d'autre chose.
On peut aussi en parler demain matin.
J'espère que tout se passe bien de ton côté.
N'hésite pas à me répondre quand tu peux.
Je t'envoie aussi ce détail pour être clair.
Le trajet est simple, ne t'inquiète pas.
Passe le bonjour à tout le monde.
Merci pour votre retour,

Questionnaire qualité`;

const E11_4_CE_EMAIL_19_POOL = buildExpressPool("e11-4-ce-email-19", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Votre avis nous intéresse", "Facture oubliée", "Invitation sans date"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Votre",
    vfQ: "L'objet de l'e-mail est « Votre avis nous intéresse ».",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Questionnaire qualité", "un voisin inconnu", "le service des impôts"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________.",
    fill: "Questionnaire",
    vfQ: "L'e-mail est envoyé par Questionnaire qualité.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela a-t-il lieu ?",
    text: ["vendredi 27 septembre", "la semaine prochaine sans date", "un dimanche de novembre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La date est _________ 27 septembre.",
    fill: "vendredi",
    vfQ: "L'activité a lieu vendredi 27 septembre.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "À quelle heure faut-il arriver ?",
    text: ["15 h 45", "7 h", "21 h 30"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut arriver à _________.",
    fill: "15",
    vfQ: "L'heure indiquée est 15 h 45.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle activité est proposée ?",
    text: ["une préparation du sac de randonnée", "un atelier couture", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "préparation",
    vfQ: "Le texte parle de l'activité suivante : une préparation du sac de randonnée.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["une veste de pluie", "un marteau", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "veste",
    vfQ: "Il faut prévoir une veste de pluie.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quelle information pratique est donnée ?",
    text: ["35 CHF", "toute la classe", "aucun horaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix indiqué est _________.",
    fill: "35",
    vfQ: "Le prix indiqué est 35 CHF.",
    vfC: 0,
  }),
]);

const E11_4_CE_EMAIL_20_TEXT = `De : Centre culturel

Objet : Prochaine rencontre

Bonjour,

Nous préparons une prochaine rencontre autour de une soirée photos de vacances.
Elle aura lieu samedi 5 octobre à 18 h 15 à le centre culturel.
Le tarif annoncé est 40 CHF et il reste les vingt premiers inscrits.
Cette fois, chacun devra apporter une clé USB.

Les documents se téléchargent aussi en ligne.
Le numéro d'urgence est affiché partout.
Je reste à votre disposition pour toute précision.
Merci de confirmer la bonne réception de ce message.
À très bientôt, prends soin de toi.
C'est important pour moi, merci beaucoup.
Nous traitons votre demande rapidement.
Vous pouvez répondre directement à ce message.
Joignez les documents demandés si nécessaire.
Nous vous souhaitons une excellente journée.
Le service est également disponible en ligne.
Respectez la file d'attente, s'il vous plaît.
À bientôt,

Centre culturel`;

const E11_4_CE_EMAIL_20_POOL = buildExpressPool("e11-4-ce-email-20", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Prochaine rencontre", "Facture oubliée", "Invitation sans date"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Prochaine",
    vfQ: "L'objet de l'e-mail est « Prochaine rencontre ».",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Centre culturel", "un voisin inconnu", "le service des impôts"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________.",
    fill: "Centre",
    vfQ: "L'e-mail est envoyé par Centre culturel.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela a-t-il lieu ?",
    text: ["samedi 5 octobre", "la semaine prochaine sans date", "un dimanche de novembre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La date est _________ 5 octobre.",
    fill: "samedi",
    vfQ: "L'activité a lieu samedi 5 octobre.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "À quelle heure faut-il arriver ?",
    text: ["18 h 15", "7 h", "21 h 30"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut arriver à _________.",
    fill: "18",
    vfQ: "L'heure indiquée est 18 h 15.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle activité est proposée ?",
    text: ["une soirée photos de vacances", "un cours de piano", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "soirée",
    vfQ: "Le texte parle de l'activité suivante : une soirée photos de vacances.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["une clé USB", "un dictionnaire lourd", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "clé",
    vfQ: "Il faut prévoir une clé USB.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quelle information pratique est donnée ?",
    text: ["40 CHF", "les vingt premiers inscrits", "aucun horaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix indiqué est _________.",
    fill: "40",
    vfQ: "Le prix indiqué est 40 CHF.",
    vfC: 0,
  }),
]);

export const E11_4_CE_EMAIL: CommunicationExercise[] = [
readingPoolExercise({
  id: "e11-4-ce-email",
  readingText: E11_4_CE_EMAIL_TEXT,
  questionPool: E11_4_CE_EMAIL_POOL,
  questionCount: 6,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
readingPoolExercise({
  id: "e11-4-ce-email-2",
  readingText: E11_4_CE_EMAIL_2_TEXT,
  questionPool: E11_4_CE_EMAIL_2_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e11-4-ce-email-3",
  readingText: E11_4_CE_EMAIL_3_TEXT,
  questionPool: E11_4_CE_EMAIL_3_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e11-4-ce-email-4",
  readingText: E11_4_CE_EMAIL_4_TEXT,
  questionPool: E11_4_CE_EMAIL_4_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e11-4-ce-email-5",
  readingText: E11_4_CE_EMAIL_5_TEXT,
  questionPool: E11_4_CE_EMAIL_5_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e11-4-ce-email-6",
  readingText: E11_4_CE_EMAIL_6_TEXT,
  questionPool: E11_4_CE_EMAIL_6_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e11-4-ce-email-7",
  readingText: E11_4_CE_EMAIL_7_TEXT,
  questionPool: E11_4_CE_EMAIL_7_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e11-4-ce-email-8",
  readingText: E11_4_CE_EMAIL_8_TEXT,
  questionPool: E11_4_CE_EMAIL_8_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e11-4-ce-email-9",
  readingText: E11_4_CE_EMAIL_9_TEXT,
  questionPool: E11_4_CE_EMAIL_9_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e11-4-ce-email-10",
  readingText: E11_4_CE_EMAIL_10_TEXT,
  questionPool: E11_4_CE_EMAIL_10_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e11-4-ce-email-11",
  readingText: E11_4_CE_EMAIL_11_TEXT,
  questionPool: E11_4_CE_EMAIL_11_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e11-4-ce-email-12",
  readingText: E11_4_CE_EMAIL_12_TEXT,
  questionPool: E11_4_CE_EMAIL_12_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e11-4-ce-email-13",
  readingText: E11_4_CE_EMAIL_13_TEXT,
  questionPool: E11_4_CE_EMAIL_13_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e11-4-ce-email-14",
  readingText: E11_4_CE_EMAIL_14_TEXT,
  questionPool: E11_4_CE_EMAIL_14_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e11-4-ce-email-15",
  readingText: E11_4_CE_EMAIL_15_TEXT,
  questionPool: E11_4_CE_EMAIL_15_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e11-4-ce-email-16",
  readingText: E11_4_CE_EMAIL_16_TEXT,
  questionPool: E11_4_CE_EMAIL_16_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e11-4-ce-email-17",
  readingText: E11_4_CE_EMAIL_17_TEXT,
  questionPool: E11_4_CE_EMAIL_17_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e11-4-ce-email-18",
  readingText: E11_4_CE_EMAIL_18_TEXT,
  questionPool: E11_4_CE_EMAIL_18_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e11-4-ce-email-19",
  readingText: E11_4_CE_EMAIL_19_TEXT,
  questionPool: E11_4_CE_EMAIL_19_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e11-4-ce-email-20",
  readingText: E11_4_CE_EMAIL_20_TEXT,
  questionPool: E11_4_CE_EMAIL_20_POOL,
  questionCount: 6
}),
];

export const E11_4_PE_EMAIL: ExpressPePrompt[] = [

  {
    id: "e11-4-pee-1",
    title: "Préparer son arrivée à l'hôtel",
    situation: "L'hôtel vous demande des informations avant votre arrivée.",
    sourceMessage: {
      from: "Hôtel Bellevue",
      subject: "Votre arrivée",
      body: "Bonjour,\nNous préparons votre séjour.\nÀ quelle heure arrivez-vous samedi ? Avez-vous des demandes particulières ?\nLa réception",
    },
    instruction: "Répondez à l'hôtel : donnez votre heure d'arrivée, demandez une chambre calme et posez une question sur le parking.",
    points: ["Votre heure d'arrivée", "La demande d'une chambre calme", "Une question sur le parking"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-4-pee-2",
    title: "Décrire ses vacances idéales",
    situation: "Une agence de voyages vous demande vos préférences.",
    sourceMessage: {
      from: "Agence Vacances Soleil",
      subject: "Votre demande de séjour",
      body: "Bonjour,\nMerci pour votre message. Pour vous proposer un séjour, nous avons besoin de quelques informations.\nPréférez-vous la mer ou la montagne ? Quelles sont vos dates ? Quel est votre budget ?\nL'Agence Vacances Soleil",
    },
    instruction: "Répondez à l'agence : dites où vous voulez partir, donnez vos dates de vacances et indiquez votre budget.",
    points: ["La destination souhaitée", "Vos dates", "Votre budget"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-4-pee-3",
    title: "Partir en vacances ensemble",
    situation: "Une amie vous propose de partir ensemble cet été.",
    sourceMessage: {
      from: "Camille",
      subject: "On part ensemble cet été ?",
      body: "Coucou,\nCet été, je ne veux pas partir seule.\nÇa te dit de partir en vacances avec moi ? Où est-ce qu'on pourrait aller ?\nCamille",
    },
    instruction: "Répondez à Camille : acceptez sa proposition, proposez une destination et expliquez pourquoi ce lieu vous plaît.",
    points: ["Votre accord", "Une destination", "Pourquoi ce lieu"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-4-pee-4",
    title: "Raconter ses vacances",
    situation: "Votre tante veut des nouvelles de vos vacances.",
    sourceMessage: {
      from: "Tante Marta",
      subject: "Alors, ces vacances ?",
      body: "Bonjour,\nTu es rentré(e) de vacances la semaine dernière, non ?\nC'était comment ? Il a fait beau ? Raconte-moi !\nTante Marta",
    },
    instruction: "Répondez à votre tante : racontez vos vacances, parlez de la météo et décrivez votre meilleur souvenir.",
    points: ["Le récit des vacances", "La météo", "Votre meilleur souvenir"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-4-pee-5",
    title: "Annuler une réservation",
    situation: "Un hôtel vous demande de confirmer votre réservation.",
    sourceMessage: {
      from: "Hôtel des Alpes",
      subject: "Confirmation demandée",
      body: "Bonjour,\nPouvez-vous confirmer votre réservation du 3 au 8 août ?\nSans réponse de votre part avant vendredi, la chambre sera libérée.\nL'Hôtel des Alpes",
    },
    instruction: "Répondez à l'hôtel : annulez poliment votre réservation, expliquez pourquoi vous ne pouvez pas venir et demandez si l'annulation est sans frais.",
    points: ["L'annulation", "La raison", "Une question sur les frais"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-4-pee-6",
    title: "Donner des conseils de voyage",
    situation: "Un ami part dans une ville que vous connaissez bien.",
    sourceMessage: {
      from: "Yanis",
      subject: "Conseils pour Lisbonne",
      body: "Salut !\nJe pars à Lisbonne au mois de mai. Tu y es allé(e) l'année dernière, non ?\nQu'est-ce que je dois absolument visiter ? Il fait quel temps en mai ?\nYanis",
    },
    instruction: "Répondez à Yanis : conseillez deux visites à faire, parlez de la météo au mois de mai et recommandez un plat ou un restaurant.",
    points: ["Deux visites", "La météo en mai", "Un plat ou un restaurant"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-4-pee-7",
    title: "Demander des informations touristiques",
    situation: "L'office du tourisme répond à votre premier message.",
    sourceMessage: {
      from: "Office du tourisme de Montreux",
      subject: "Votre demande d'informations",
      body: "Bonjour,\nMerci pour votre message. Quelles informations souhaitez-vous recevoir ?\nNous pouvons vous envoyer le programme des activités et une liste d'hôtels.\nL'Office du tourisme",
    },
    instruction: "Répondez à l'office du tourisme : donnez les dates de votre séjour, demandez le programme des activités et posez une question sur les hôtels.",
    points: ["Les dates du séjour", "La demande du programme", "Une question sur les hôtels"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-4-pee-8",
    title: "Changer de programme à cause de la météo",
    situation: "Une amie s'inquiète pour votre week-end de camping.",
    sourceMessage: {
      from: "Léa",
      subject: "Mauvaise météo ce week-end",
      body: "Coucou,\nJ'ai regardé la météo : il va pleuvoir tout le week-end !\nQu'est-ce qu'on fait pour le camping ? On annule ?\nLéa",
    },
    instruction: "Répondez à Léa : proposez un autre programme pour le week-end, expliquez votre idée et rassurez-la.",
    points: ["Un autre programme", "Une explication", "Une phrase pour rassurer"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-4-pee-9",
    title: "Confirmer une réservation de camping",
    situation: "Le camping vous demande des détails sur votre séjour.",
    sourceMessage: {
      from: "Camping Les Pins",
      subject: "Votre réservation d'emplacement",
      body: "Bonjour,\nNous avons bien reçu votre demande pour un emplacement en août.\nPouvez-vous confirmer vos dates, le nombre de personnes et si vous venez avec une tente ou un camping-car ?\nLe Camping Les Pins",
    },
    instruction: "Répondez au camping : confirmez vos dates, donnez le nombre de personnes et le type de matériel, puis posez une question sur la piscine ou les animaux.",
    points: ["Les dates", "Le nombre de personnes et le matériel", "Une question sur la piscine ou les animaux"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-4-pee-10",
    title: "Remercier pour les photos de vacances",
    situation: "Un ami vous envoie les photos de vos vacances communes.",
    sourceMessage: {
      from: "Paulo",
      subject: "Photos des vacances",
      body: "Salut !\nJe t'envoie enfin les photos de nos vacances à la mer.\nQuelle belle semaine ! J'espère qu'elles te plaisent.\nPaulo",
    },
    instruction: "Répondez à Paulo : remerciez-le pour les photos, rappelez un bon souvenir de ces vacances et proposez de repartir ensemble l'année prochaine.",
    points: ["Un remerciement", "Un bon souvenir", "Une proposition pour l'année prochaine"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-4-pee-11",
    title: "Répondre — vacances (11)",
    situation: "Vous avez reçu un e-mail concernant vacances.",
sourceMessage: {
  from: "Service Vacances",
  subject: "Votre demande — référence 1100",
  body: "Bonjour,\nNous avons bien reçu votre message concernant vacances.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-4-pee-12",
    title: "Répondre — vacances (12)",
    situation: "Vous avez reçu un e-mail concernant vacances.",
sourceMessage: {
  from: "Service Vacances",
  subject: "Votre demande — référence 1200",
  body: "Bonjour,\nNous avons bien reçu votre message concernant vacances.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-4-pee-13",
    title: "Répondre — vacances (13)",
    situation: "Vous avez reçu un e-mail concernant vacances.",
sourceMessage: {
  from: "Service Vacances",
  subject: "Votre demande — référence 1300",
  body: "Bonjour,\nNous avons bien reçu votre message concernant vacances.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-4-pee-14",
    title: "Répondre — vacances (14)",
    situation: "Vous avez reçu un e-mail concernant vacances.",
sourceMessage: {
  from: "Service Vacances",
  subject: "Votre demande — référence 1400",
  body: "Bonjour,\nNous avons bien reçu votre message concernant vacances.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-4-pee-15",
    title: "Répondre — vacances (15)",
    situation: "Vous avez reçu un e-mail concernant vacances.",
sourceMessage: {
  from: "Service Vacances",
  subject: "Votre demande — référence 1500",
  body: "Bonjour,\nNous avons bien reçu votre message concernant vacances.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-4-pee-16",
    title: "Répondre — vacances (16)",
    situation: "Vous avez reçu un e-mail concernant vacances.",
sourceMessage: {
  from: "Service Vacances",
  subject: "Votre demande — référence 1600",
  body: "Bonjour,\nNous avons bien reçu votre message concernant vacances.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-4-pee-17",
    title: "Répondre — vacances (17)",
    situation: "Vous avez reçu un e-mail concernant vacances.",
sourceMessage: {
  from: "Service Vacances",
  subject: "Votre demande — référence 1700",
  body: "Bonjour,\nNous avons bien reçu votre message concernant vacances.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-4-pee-18",
    title: "Répondre — vacances (18)",
    situation: "Vous avez reçu un e-mail concernant vacances.",
sourceMessage: {
  from: "Service Vacances",
  subject: "Votre demande — référence 1800",
  body: "Bonjour,\nNous avons bien reçu votre message concernant vacances.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-4-pee-19",
    title: "Répondre — vacances (19)",
    situation: "Vous avez reçu un e-mail concernant vacances.",
sourceMessage: {
  from: "Service Vacances",
  subject: "Votre demande — référence 1900",
  body: "Bonjour,\nNous avons bien reçu votre message concernant vacances.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-4-pee-20",
    title: "Répondre — vacances (20)",
    situation: "Vous avez reçu un e-mail concernant vacances.",
sourceMessage: {
  from: "Service Vacances",
  subject: "Votre demande — référence 2000",
  body: "Bonjour,\nNous avons bien reçu votre message concernant vacances.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  }
];
