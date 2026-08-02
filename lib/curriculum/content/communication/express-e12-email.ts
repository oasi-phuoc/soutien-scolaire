import {
  readingPoolExercise,
  type CommunicationExercise,
  type ExpressPePrompt,
} from "./express-types";
import { buildExpressPool, type ExpressRawQ } from "./express-listening-helpers";

/**
 * E-mails E12 — Santé, sport, alimentation, ville, bien-être (A2).
 * CE e-mail : un e-mail à lire + pool de questions (≥ 10).
 * PE e-mail : pool d'e-mails reçus auxquels répondre (≥ 10).
 */

function q(item: ExpressRawQ): ExpressRawQ {
  return item;
}

const PE_MIN = 80;
const PE_MAX = 180;

/* ════════════════════════════════════════════════════════════════════════════
   E12.1 — S'occuper de sa santé
   ════════════════════════════════════════════════════════════════════════════ */

const E12_1_CE_EMAIL_TEXT = `De : La responsable Nadia

Objet : Inscription à une séance pour préparer une consultation

Bonjour,

C'est confirmé : vous avez une place pour une séance pour préparer une consultation.
Notez bien le rendez-vous : lundi 6 mai, 9 h, à la Maison des Acacias.
Merci d'apporter une carte d'assurance. La participation est gratuite.
Cette rencontre aide à poser des questions au médecin.

À bientôt,

La responsable Nadia`;

const E12_1_CE_EMAIL_POOL = buildExpressPool("e12-1-ce-email", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Inscription à une séance pour préparer une consultation", "Facture oubliée", "Invitation sans date"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Inscription",
    vfQ: "L'objet de l'e-mail est « Inscription à une séance pour préparer une consultation ».",
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
    text: ["une séance pour préparer une consultation", "une dégustation de desserts", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "séance",
    vfQ: "Le texte parle de l'activité suivante : une séance pour préparer une consultation.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["une carte d'assurance", "un ballon", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "carte",
    vfQ: "Il faut prévoir une carte d'assurance.",
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

const E12_1_CE_EMAIL_2_TEXT = `De : Accueil du quartier

Objet : Rappel pour mardi 14 mai

Bonjour à toutes et à tous,

Je vous rappelle que un atelier pharmacie sans ordonnance est prévu mardi 14 mai.
Le groupe se retrouve à 10 h 15 devant la salle Jean-Monnet.
Comme il y a 10 places, merci de prévenir en cas d'absence.
N'oubliez pas une liste de médicaments et lisez bien cette consigne : les médicaments ne se partagent pas.

Bonne journée,

Accueil du quartier`;

const E12_1_CE_EMAIL_2_POOL = buildExpressPool("e12-1-ce-email-2", [
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
    text: ["un atelier pharmacie sans ordonnance", "un atelier peinture", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "atelier",
    vfQ: "Le texte parle de l'activité suivante : un atelier pharmacie sans ordonnance.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["une liste de médicaments", "un passeport", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "liste",
    vfQ: "Il faut prévoir une liste de médicaments.",
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

const E12_1_CE_EMAIL_3_TEXT = `De : Service activités

Objet : Question avant une rencontre sur les petits maux d'hiver

Bonjour,

J'ai vu l'annonce pour une rencontre sur les petits maux d'hiver et je voudrais m'inscrire.
Pouvez-vous confirmer qu'il faut apporter un paquet de mouchoirs ?
Je peux venir mercredi 22 mai à 11 h à le centre du Lac.
Mon objectif est de réagir quand on tousse. Merci pour votre réponse.

Cordialement,

Rami`;

const E12_1_CE_EMAIL_3_POOL = buildExpressPool("e12-1-ce-email-3", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Question avant une rencontre sur les petits maux d'hiver", "Facture oubliée", "Invitation sans date"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Question",
    vfQ: "L'objet de l'e-mail est « Question avant une rencontre sur les petits maux d'hiver ».",
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
    text: ["une rencontre sur les petits maux d'hiver", "une sortie shopping", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "rencontre",
    vfQ: "Le texte parle de l'activité suivante : une rencontre sur les petits maux d'hiver.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["un paquet de mouchoirs", "une guitare", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "paquet",
    vfQ: "Il faut prévoir un paquet de mouchoirs.",
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

const E12_1_CE_EMAIL_4_TEXT = `De : Association Bellevue

Objet : Confirmation de votre place

Madame, Monsieur,

Votre place pour une information sur le sommeil est réservée.
La séance aura lieu jeudi 30 mai à la ferme des Lilas.
Merci d'arriver à 12 h 30. La participation est de 10 CHF.
Le bénévole Marco sera sur place pour vous accueillir.

Avec nos salutations,

Association Bellevue`;

const E12_1_CE_EMAIL_4_POOL = buildExpressPool("e12-1-ce-email-4", [
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
    text: ["une information sur le sommeil", "une dégustation de desserts", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "information",
    vfQ: "Le texte parle de l'activité suivante : une information sur le sommeil.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["un carnet de sommeil", "un ballon", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "carnet",
    vfQ: "Il faut prévoir un carnet de sommeil.",
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

const E12_1_CE_EMAIL_5_TEXT = `De : Secrétariat du centre

Objet : Conseil pratique : une notice de médicament

Salut,

Petit conseil pour un cours pour lire une notice : mets une notice de médicament dans ton sac.
Je t'attends vendredi 7 juin à 14 h à le foyer Bellevue.
Si tu veux prendre un médicament correctement, cette séance est très utile.
Attention : la notice ne remplace pas le médecin.

À demain,

Noé`;

const E12_1_CE_EMAIL_5_POOL = buildExpressPool("e12-1-ce-email-5", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Conseil pratique : une notice de médicament", "Facture oubliée", "Invitation sans date"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Conseil",
    vfQ: "L'objet de l'e-mail est « Conseil pratique : une notice de médicament ».",
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
    text: ["un cours pour lire une notice", "un atelier peinture", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "cours",
    vfQ: "Le texte parle de l'activité suivante : un cours pour lire une notice.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["une notice de médicament", "un passeport", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "notice",
    vfQ: "Il faut prévoir une notice de médicament.",
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

const E12_1_CE_EMAIL_6_TEXT = `De : Équipe organisation

Objet : Changement de salle

Bonjour,

Petit changement pour une discussion sur les rendez-vous médicaux : la salle prévue n'est plus libre.
Le nouveau lieu est la bibliothèque Nord. La date et l'heure ne changent pas : samedi 15 juin à 15 h 15.
Le prix reste 15 CHF et les 16 places sont gardées.
Merci de préparer un agenda.

Merci de votre compréhension,

Équipe organisation`;

const E12_1_CE_EMAIL_6_POOL = buildExpressPool("e12-1-ce-email-6", [
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
    text: ["une discussion sur les rendez-vous médicaux", "une sortie shopping", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "discussion",
    vfQ: "Le texte parle de l'activité suivante : une discussion sur les rendez-vous médicaux.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["un agenda", "une guitare", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "agenda",
    vfQ: "Il faut prévoir un agenda.",
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

const E12_1_CE_EMAIL_7_TEXT = `De : Club des habitants

Objet : Merci pour votre participation

Bonjour,

Merci pour votre présence lors de un atelier trousse de premiers secours à la terrasse du Marché.
Plusieurs personnes ont expliqué que la séance aide à aider sans paniquer.
Pour la prochaine fois, nous garderons dimanche 23 juin à 16 h.
Votre remarque sur des pansements a été notée.

Bien à vous,

Club des habitants`;

const E12_1_CE_EMAIL_7_POOL = buildExpressPool("e12-1-ce-email-7", [
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
    text: ["un atelier trousse de premiers secours", "une dégustation de desserts", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "atelier",
    vfQ: "Le texte parle de l'activité suivante : un atelier trousse de premiers secours.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["des pansements", "un ballon", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "pansements",
    vfQ: "Il faut prévoir des pansements.",
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

const E12_1_CE_EMAIL_8_TEXT = `De : Maison commune

Objet : Invitation santé

Bonjour les amis,

Ça vous dit de venir avec moi à une séance gestes en cas de fièvre ?
Le rendez-vous est lundi 1er juillet à 17 h 30 à le local des Jeunes.
Il faut réserver directement sur place car il y a seulement 20 places.
Apportez un thermomètre et un peu de bonne humeur.

À très vite,

Mina`;

const E12_1_CE_EMAIL_8_POOL = buildExpressPool("e12-1-ce-email-8", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Invitation santé", "Facture oubliée", "Invitation sans date"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Invitation",
    vfQ: "L'objet de l'e-mail est « Invitation santé ».",
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
    text: ["une séance gestes en cas de fièvre", "un atelier peinture", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "séance",
    vfQ: "Le texte parle de l'activité suivante : une séance gestes en cas de fièvre.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["un thermomètre", "un passeport", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "thermomètre",
    vfQ: "Il faut prévoir un thermomètre.",
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

const E12_1_CE_EMAIL_9_TEXT = `De : Bureau des inscriptions

Objet : Liste du matériel

Bonjour,

Pour une présentation du cabinet infirmier, la petite liste est simple : un carnet de questions, une bouteille d'eau et un stylo.
Le rendez-vous reste mardi 9 juillet à 18 h à la salle des Fêtes.
Le tarif est 25 CHF.
Le thème principal sera : savoir où demander un soin.

Merci,

Bureau des inscriptions`;

const E12_1_CE_EMAIL_9_POOL = buildExpressPool("e12-1-ce-email-9", [
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
    text: ["une présentation du cabinet infirmier", "une sortie shopping", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "présentation",
    vfQ: "Le texte parle de l'activité suivante : une présentation du cabinet infirmier.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["un carnet de questions", "une guitare", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "carnet",
    vfQ: "Il faut prévoir un carnet de questions.",
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

const E12_1_CE_EMAIL_10_TEXT = `De : Info loisirs

Objet : Places disponibles

Bonjour,

Bonne nouvelle : un échange sur les allergies n'est pas complet, il reste 24 places.
La séance aura lieu mercredi 17 juillet à 18 h 45 à le jardin partagé.
Merci de vous inscrire avec le QR code de l'affiche avant demain soir.
Prévoyez une liste des allergies. Le prix est 30 CHF.

Cordialement,

Info loisirs`;

const E12_1_CE_EMAIL_10_POOL = buildExpressPool("e12-1-ce-email-10", [
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
    text: ["un échange sur les allergies", "une dégustation de desserts", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "échange",
    vfQ: "Le texte parle de l'activité suivante : un échange sur les allergies.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["une liste des allergies", "un ballon", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "liste",
    vfQ: "Il faut prévoir une liste des allergies.",
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

const E12_1_CE_EMAIL_11_TEXT = `De : Groupe des bénévoles

Objet : Retour sur l'activité

Bonjour,

Depuis une matinée tension et respiration, nous recevons des messages très positifs.
Les participants ont surtout apprécié de se calmer quand on est essoufflé.
La prochaine date est jeudi 25 juillet à 19 h à le café du Pont.
Cette fois, merci d'apporter une bouteille d'eau.

Au plaisir de vous revoir,

Groupe des bénévoles`;

const E12_1_CE_EMAIL_11_POOL = buildExpressPool("e12-1-ce-email-11", [
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
    text: ["une matinée tension et respiration", "un atelier peinture", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "matinée",
    vfQ: "Le texte parle de l'activité suivante : une matinée tension et respiration.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["une bouteille d'eau", "un passeport", "un ordinateur cassé"],
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

const E12_1_CE_EMAIL_12_TEXT = `De : Réception

Objet : Rendez-vous à 8 h 30

Bonjour,

Votre rendez-vous lié à un atelier pour expliquer sa douleur commence à 8 h 30.
Merci d'arriver à la maison médicale dix minutes avant.
La date est vendredi 2 août et le prix est 6 CHF.
La docteure Morel conseille de préparer un dessin du corps.

Meilleures salutations,

Réception`;

const E12_1_CE_EMAIL_12_POOL = buildExpressPool("e12-1-ce-email-12", [
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
    text: ["un atelier pour expliquer sa douleur", "une sortie shopping", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "atelier",
    vfQ: "Le texte parle de l'activité suivante : un atelier pour expliquer sa douleur.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["un dessin du corps", "une guitare", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "dessin",
    vfQ: "Il faut prévoir un dessin du corps.",
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

const E12_1_CE_EMAIL_13_TEXT = `De : Atelier A2

Objet : Préparation de groupe

Chers participants,

Pour que une rencontre prévention des écrans se passe bien, nous formons deux petits groupes.
Le premier groupe est attendu à 13 h à le parc des Amandiers.
La séance a lieu samedi 10 août avec l'entraîneuse Emma.
Merci de vérifier un chronomètre avant de partir.

À bientôt,

Atelier A2`;

const E12_1_CE_EMAIL_13_POOL = buildExpressPool("e12-1-ce-email-13", [
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
    text: ["une rencontre prévention des écrans", "une dégustation de desserts", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "rencontre",
    vfQ: "Le texte parle de l'activité suivante : une rencontre prévention des écrans.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["un chronomètre", "un ballon", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "chronomètre",
    vfQ: "Il faut prévoir un chronomètre.",
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

const E12_1_CE_EMAIL_14_TEXT = `De : Coordination locale

Objet : Demande d'information

Bonjour,

Je vous écris car je cherche des informations sur un point info assurance maladie.
J'ai noté la date, dimanche 18 août, et l'heure, 14 h 45, à la boutique Horizon.
Pouvez-vous confirmer le prix de 11 CHF ?
Je viens surtout pour comprendre un remboursement.

Merci d'avance,

Salma`;

const E12_1_CE_EMAIL_14_POOL = buildExpressPool("e12-1-ce-email-14", [
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
    text: ["un point info assurance maladie", "un atelier peinture", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "point",
    vfQ: "Le texte parle de l'activité suivante : un point info assurance maladie.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["un document administratif", "un passeport", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "document",
    vfQ: "Il faut prévoir un document administratif.",
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

const E12_1_CE_EMAIL_15_TEXT = `De : Clinique du Parc
Objet : Préparation avant radio

Bonjour,
Pour votre radio des poumons mardi à 9 h 40 :
- venez à jeun (rien manger depuis 6 h)
- retirez colliers et boucles d'oreilles
- durée approximative : 20 minutes
En cas de grossesse possible, prévenez immédiatement.
Accueil imagerie, bâtiment C.
Clinique du Parc`;

const E12_1_CE_EMAIL_15_POOL = buildExpressPool("e12-1-ce-email-15", [
  q({
    id: "cem-q1",
    textQ: "Quel examen ?",
    text: ["Radio des poumons", "Dentiste", "Analyse de sang"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "radio des _________.",
    fill: "poumons",
    vfQ: "Radio des poumons.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "À quelle heure ?",
    text: ["9 h 40", "16 h", "Midi"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "mardi à _________ h 40",
    fill: "9",
    vfQ: "À 9 h 40.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Faut-il être à jeun ?",
    text: ["Oui", "Non", "Seulement le soir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "venez à _________.",
    fill: "jeun",
    vfQ: "À jeun.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Durée ?",
    text: ["Environ 20 minutes", "2 heures", "Toute la journée"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ minutes",
    fill: "20",
    vfQ: "20 minutes.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quel bâtiment ?",
    text: ["Bâtiment C", "Bâtiment A", "Parking"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "bâtiment _________.",
    fill: "C",
    vfQ: "Bâtiment C.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que retirer ?",
    text: ["Colliers et boucles d'oreilles", "Ses chaussures seulement", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "retirez _________ et boucles",
    fill: "colliers",
    vfQ: "Colliers.",
    vfC: 0,
  }),
]);

const E12_1_CE_EMAIL_16_TEXT = `De : Service rappel

Objet : Dernier rappel

Bonjour,

Dernier message avant un atelier ordonnance claire !
Rendez-vous mardi 3 septembre à 17 h à la place du Village.
L'entrée n'est garantie que si l'inscription est faite au stand d'information.
Apportez une ordonnance récente et gardez 16 CHF si besoin.

À tout à l'heure,

Service rappel`;

const E12_1_CE_EMAIL_16_POOL = buildExpressPool("e12-1-ce-email-16", [
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
    text: ["un atelier ordonnance claire", "une dégustation de desserts", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "atelier",
    vfQ: "Le texte parle de l'activité suivante : un atelier ordonnance claire.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["une ordonnance récente", "un ballon", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "ordonnance",
    vfQ: "Il faut prévoir une ordonnance récente.",
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

const E12_1_CE_EMAIL_17_TEXT = `De : Responsable du projet

Objet : Message de la responsable

Bonjour,

Message de La coach Ana au sujet de une discussion santé mentale simple.
La rencontre est prévue mercredi 11 septembre à 9 h 45 à la halle des Sports.
Le but reste simple : apprendre à dire quand on ne va pas bien.
Merci de respecter cette règle : personne n'est obligé de parler de sa vie privée.

Bien cordialement,

Responsable du projet`;

const E12_1_CE_EMAIL_17_POOL = buildExpressPool("e12-1-ce-email-17", [
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
    text: ["une discussion santé mentale simple", "un atelier peinture", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "discussion",
    vfQ: "Le texte parle de l'activité suivante : une discussion santé mentale simple.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["un cahier personnel", "un passeport", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "cahier",
    vfQ: "Il faut prévoir un cahier personnel.",
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

const E12_1_CE_EMAIL_18_TEXT = `De : Équipe du samedi

Objet : Organisation du samedi

Bonjour,

L'équipe prépare le salon Harmonie pour une information sur les vaccins.
Les participants arrivent à 11 h 30 avec un carnet de vaccination.
La date exacte est jeudi 19 septembre.
Après la séance, un court échange expliquera comment réussir à comprendre le rappel d'un vaccin.

Merci de votre aide,

Équipe du samedi`;

const E12_1_CE_EMAIL_18_POOL = buildExpressPool("e12-1-ce-email-18", [
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
    text: ["une information sur les vaccins", "une sortie shopping", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "information",
    vfQ: "Le texte parle de l'activité suivante : une information sur les vaccins.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["un carnet de vaccination", "une guitare", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "carnet",
    vfQ: "Il faut prévoir un carnet de vaccination.",
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

const E12_1_CE_EMAIL_19_TEXT = `De : Questionnaire qualité

Objet : Votre avis nous intéresse

Bonjour,

Vous avez récemment participé à un parcours santé du quartier à la résidence du Parc.
Pouvez-vous dire si l'horaire de 15 h 45 vous convient ?
La prochaine séance est prévue vendredi 27 septembre.
Votre avis nous aidera à mieux organiser les moments pour bouger un peu chaque semaine.

Merci pour votre retour,

Questionnaire qualité`;

const E12_1_CE_EMAIL_19_POOL = buildExpressPool("e12-1-ce-email-19", [
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
    text: ["un parcours santé du quartier", "une dégustation de desserts", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "parcours",
    vfQ: "Le texte parle de l'activité suivante : un parcours santé du quartier.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["des chaussures souples", "un ballon", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "chaussures",
    vfQ: "Il faut prévoir des chaussures souples.",
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

const E12_1_CE_EMAIL_20_TEXT = `De : Centre culturel

Objet : Prochaine rencontre

Bonjour,

Nous préparons une prochaine rencontre autour de une permanence questions médicales.
Elle aura lieu samedi 5 octobre à 18 h 15 à le centre culturel.
Le tarif annoncé est 40 CHF et il reste les vingt premiers inscrits.
Cette fois, chacun devra apporter un stylo.

À bientôt,

Centre culturel`;

const E12_1_CE_EMAIL_20_POOL = buildExpressPool("e12-1-ce-email-20", [
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
    text: ["une permanence questions médicales", "un atelier peinture", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "permanence",
    vfQ: "Le texte parle de l'activité suivante : une permanence questions médicales.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["un stylo", "un passeport", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "stylo",
    vfQ: "Il faut prévoir un stylo.",
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

export const E12_1_CE_EMAIL: CommunicationExercise[] = [
readingPoolExercise({
  id: "e12-1-ce-email",
  readingText: E12_1_CE_EMAIL_TEXT,
  questionPool: E12_1_CE_EMAIL_POOL,
  questionCount: 6,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
readingPoolExercise({
  id: "e12-1-ce-email-2",
  readingText: E12_1_CE_EMAIL_2_TEXT,
  questionPool: E12_1_CE_EMAIL_2_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e12-1-ce-email-3",
  readingText: E12_1_CE_EMAIL_3_TEXT,
  questionPool: E12_1_CE_EMAIL_3_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e12-1-ce-email-4",
  readingText: E12_1_CE_EMAIL_4_TEXT,
  questionPool: E12_1_CE_EMAIL_4_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e12-1-ce-email-5",
  readingText: E12_1_CE_EMAIL_5_TEXT,
  questionPool: E12_1_CE_EMAIL_5_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e12-1-ce-email-6",
  readingText: E12_1_CE_EMAIL_6_TEXT,
  questionPool: E12_1_CE_EMAIL_6_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e12-1-ce-email-7",
  readingText: E12_1_CE_EMAIL_7_TEXT,
  questionPool: E12_1_CE_EMAIL_7_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e12-1-ce-email-8",
  readingText: E12_1_CE_EMAIL_8_TEXT,
  questionPool: E12_1_CE_EMAIL_8_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e12-1-ce-email-9",
  readingText: E12_1_CE_EMAIL_9_TEXT,
  questionPool: E12_1_CE_EMAIL_9_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e12-1-ce-email-10",
  readingText: E12_1_CE_EMAIL_10_TEXT,
  questionPool: E12_1_CE_EMAIL_10_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e12-1-ce-email-11",
  readingText: E12_1_CE_EMAIL_11_TEXT,
  questionPool: E12_1_CE_EMAIL_11_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e12-1-ce-email-12",
  readingText: E12_1_CE_EMAIL_12_TEXT,
  questionPool: E12_1_CE_EMAIL_12_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e12-1-ce-email-13",
  readingText: E12_1_CE_EMAIL_13_TEXT,
  questionPool: E12_1_CE_EMAIL_13_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e12-1-ce-email-14",
  readingText: E12_1_CE_EMAIL_14_TEXT,
  questionPool: E12_1_CE_EMAIL_14_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e12-1-ce-email-15",
  readingText: E12_1_CE_EMAIL_15_TEXT,
  questionPool: E12_1_CE_EMAIL_15_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e12-1-ce-email-16",
  readingText: E12_1_CE_EMAIL_16_TEXT,
  questionPool: E12_1_CE_EMAIL_16_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e12-1-ce-email-17",
  readingText: E12_1_CE_EMAIL_17_TEXT,
  questionPool: E12_1_CE_EMAIL_17_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e12-1-ce-email-18",
  readingText: E12_1_CE_EMAIL_18_TEXT,
  questionPool: E12_1_CE_EMAIL_18_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e12-1-ce-email-19",
  readingText: E12_1_CE_EMAIL_19_TEXT,
  questionPool: E12_1_CE_EMAIL_19_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e12-1-ce-email-20",
  readingText: E12_1_CE_EMAIL_20_TEXT,
  questionPool: E12_1_CE_EMAIL_20_POOL,
  questionCount: 6
}),
];

export const E12_1_PE_EMAIL: ExpressPePrompt[] = [

  {
    id: "e12-1-pee-1",
    title: "Confirmer un bilan de santé",
    situation: "Le centre médical vous propose deux dates pour votre bilan de santé.",
    sourceMessage: {
      from: "Centre médical des Acacias",
      subject: "Votre bilan de santé",
      body: "Bonjour,\nNous pouvons vous proposer un bilan de santé le jeudi 20 juin à 14 h 15 ou le lundi 24 juin à 9 h.\nQuelle date vous convient le mieux ?\nLe secrétariat",
    },
    instruction: "Répondez au centre médical : choisissez une date, remerciez et posez une question sur les documents à apporter.",
    points: ["La date choisie", "Un remerciement", "Une question sur les documents"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-1-pee-2",
    title: "Annuler un rendez-vous médical",
    situation: "Vous avez un empêchement le jour de votre rendez-vous chez le médecin.",
    sourceMessage: {
      from: "Cabinet du Dr Keller",
      subject: "Rappel de votre rendez-vous",
      body: "Bonjour,\nNous vous rappelons votre rendez-vous de demain, mardi, à 10 h 30.\nMerci d'arriver dix minutes en avance.\nLe secrétariat",
    },
    instruction: "Répondez au secrétariat : excusez-vous, expliquez pourquoi vous ne pouvez pas venir et proposez deux nouvelles dates.",
    points: ["L'excuse", "La raison de l'absence", "Deux nouvelles dates"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-1-pee-3",
    title: "Rassurer sa sœur",
    situation: "Votre sœur sait que vous avez fait une prise de sang et elle s'inquiète.",
    sourceMessage: {
      from: "Amina",
      subject: "Tes résultats",
      body: "Salut,\nTu as reçu les résultats de ta prise de sang ?\nQu'est-ce que le médecin a dit ? J'espère que tout va bien.\nRéponds-moi vite !\nAmina",
    },
    instruction: "Répondez à votre sœur : donnez les résultats, expliquez les conseils du médecin et rassurez-la.",
    points: ["Les résultats", "Les conseils du médecin", "Une phrase pour rassurer"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-1-pee-4",
    title: "Répondre à l'assurance maladie",
    situation: "Votre assurance maladie met à jour votre dossier.",
    sourceMessage: {
      from: "Assurance Helvia Santé",
      subject: "Mise à jour de votre dossier",
      body: "Bonjour,\nNous mettons à jour votre dossier.\nMerci de confirmer votre numéro de téléphone et votre adresse.\nVotre assurance maladie",
    },
    instruction: "Répondez à l'assurance : confirmez votre numéro de téléphone, donnez votre nouvelle adresse et posez une question sur le remboursement de votre dernière consultation.",
    points: ["Le numéro de téléphone", "La nouvelle adresse", "Une question sur le remboursement"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-1-pee-5",
    title: "Aider un ami à arrêter de fumer",
    situation: "Un ami veut arrêter de fumer et vous demande conseil, car vous avez déjà arrêté.",
    sourceMessage: {
      from: "Diego",
      subject: "J'ai besoin de tes conseils",
      body: "Salut,\nJ'ai décidé d'arrêter de fumer, mais c'est très difficile.\nToi, tu as arrêté l'année dernière, non ? Comment tu as fait ?\nMerci d'avance,\nDiego",
    },
    instruction: "Répondez à Diego : racontez comment vous avez arrêté, donnez-lui deux conseils et encouragez-le.",
    points: ["Votre expérience", "Deux conseils", "Une phrase d'encouragement"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-1-pee-6",
    title: "Rappel de vaccin pour votre fille",
    situation: "Le cabinet de pédiatrie vous envoie un rappel.",
    sourceMessage: {
      from: "Cabinet de pédiatrie Arc-en-Ciel",
      subject: "Rappel de vaccin",
      body: "Bonjour,\nLe rappel de vaccin de votre fille est à faire avant la fin du mois.\nVoulez-vous prendre un rendez-vous ?\nLe secrétariat",
    },
    instruction: "Répondez au cabinet : acceptez, proposez deux dates possibles et posez une question sur le vaccin.",
    points: ["Votre accord", "Deux dates possibles", "Une question sur le vaccin"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-1-pee-7",
    title: "Prévenir son chef",
    situation: "Vous avez un rendez-vous médical pendant les heures de travail.",
    sourceMessage: {
      from: "M. Rochat",
      subject: "Réunion de jeudi matin",
      body: "Bonjour,\nLa réunion d'équipe a lieu jeudi à 9 h 30.\nMerci de confirmer votre présence.\nBonne journée,\nM. Rochat",
    },
    instruction: "Répondez à votre chef : excusez-vous, expliquez que vous avez un rendez-vous médical et dites à quelle heure vous arrivez au travail.",
    points: ["L'excuse", "Le rendez-vous médical", "Votre heure d'arrivée"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-1-pee-8",
    title: "Prendre rendez-vous chez le dentiste",
    situation: "Vous avez écrit au cabinet dentaire ; le secrétariat vous répond.",
    sourceMessage: {
      from: "Cabinet dentaire Sourire",
      subject: "Votre demande de rendez-vous",
      body: "Bonjour,\nNous avons bien reçu votre demande de rendez-vous.\nQuelles sont vos disponibilités cette semaine ?\nAvez-vous mal aux dents en ce moment ?\nLe secrétariat",
    },
    instruction: "Répondez au cabinet : donnez vos disponibilités, décrivez votre problème et demandez le prix d'un contrôle.",
    points: ["Vos disponibilités", "Votre problème", "Une question sur le prix"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-1-pee-9",
    title: "Journée de prévention",
    situation: "La commune organise une journée de prévention santé gratuite.",
    sourceMessage: {
      from: "Commune de Valmont",
      subject: "Journée santé pour tous",
      body: "Bonjour,\nLa commune organise une journée de prévention le samedi 5 octobre, de 9 h à 16 h.\nAu programme : tests gratuits, conseils et ateliers.\nInscription par e-mail.\nLe service de la santé",
    },
    instruction: "Répondez à la commune : inscrivez-vous, dites pourquoi cette journée vous intéresse et demandez ce qu'il faut apporter.",
    points: ["Votre inscription", "Pourquoi cette journée vous intéresse", "Une question sur les documents à apporter"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-1-pee-10",
    title: "Donner des nouvelles à une collègue",
    situation: "Vous avez été malade cette semaine ; une collègue prend de vos nouvelles.",
    sourceMessage: {
      from: "Nadia",
      subject: "Comment vas-tu ?",
      body: "Bonjour,\nTu n'es pas venu au travail cette semaine. Comment vas-tu ?\nTu es allé chez le médecin ?\nDonne-moi de tes nouvelles.\nNadia",
    },
    instruction: "Répondez à Nadia : expliquez votre maladie, racontez la visite chez le médecin et dites quand vous revenez au travail.",
    points: ["Votre maladie", "La visite chez le médecin", "Votre retour au travail"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-1-pee-11",
    title: "Répondre — santé (11)",
    situation: "Vous avez reçu un e-mail concernant santé.",
sourceMessage: {
  from: "Service Santé",
  subject: "Votre demande — référence 1100",
  body: "Bonjour,\nNous avons bien reçu votre message concernant santé.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-1-pee-12",
    title: "Répondre — santé (12)",
    situation: "Vous avez reçu un e-mail concernant santé.",
sourceMessage: {
  from: "Service Santé",
  subject: "Votre demande — référence 1200",
  body: "Bonjour,\nNous avons bien reçu votre message concernant santé.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-1-pee-13",
    title: "Répondre — santé (13)",
    situation: "Vous avez reçu un e-mail concernant santé.",
sourceMessage: {
  from: "Service Santé",
  subject: "Votre demande — référence 1300",
  body: "Bonjour,\nNous avons bien reçu votre message concernant santé.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-1-pee-14",
    title: "Répondre — santé (14)",
    situation: "Vous avez reçu un e-mail concernant santé.",
sourceMessage: {
  from: "Service Santé",
  subject: "Votre demande — référence 1400",
  body: "Bonjour,\nNous avons bien reçu votre message concernant santé.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-1-pee-15",
    title: "Répondre — santé (15)",
    situation: "Vous avez reçu un e-mail concernant santé.",
sourceMessage: {
  from: "Service Santé",
  subject: "Votre demande — référence 1500",
  body: "Bonjour,\nNous avons bien reçu votre message concernant santé.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-1-pee-16",
    title: "Répondre — santé (16)",
    situation: "Vous avez reçu un e-mail concernant santé.",
sourceMessage: {
  from: "Service Santé",
  subject: "Votre demande — référence 1600",
  body: "Bonjour,\nNous avons bien reçu votre message concernant santé.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-1-pee-17",
    title: "Répondre — santé (17)",
    situation: "Vous avez reçu un e-mail concernant santé.",
sourceMessage: {
  from: "Service Santé",
  subject: "Votre demande — référence 1700",
  body: "Bonjour,\nNous avons bien reçu votre message concernant santé.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-1-pee-18",
    title: "Répondre — santé (18)",
    situation: "Vous avez reçu un e-mail concernant santé.",
sourceMessage: {
  from: "Service Santé",
  subject: "Votre demande — référence 1800",
  body: "Bonjour,\nNous avons bien reçu votre message concernant santé.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-1-pee-19",
    title: "Répondre — santé (19)",
    situation: "Vous avez reçu un e-mail concernant santé.",
sourceMessage: {
  from: "Service Santé",
  subject: "Votre demande — référence 1900",
  body: "Bonjour,\nNous avons bien reçu votre message concernant santé.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-1-pee-20",
    title: "Répondre — santé (20)",
    situation: "Vous avez reçu un e-mail concernant santé.",
sourceMessage: {
  from: "Service Santé",
  subject: "Votre demande — référence 2000",
  body: "Bonjour,\nNous avons bien reçu votre message concernant santé.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  }
];

/* ════════════════════════════════════════════════════════════════════════════
   E12.2 — Faire du sport
   ════════════════════════════════════════════════════════════════════════════ */

const E12_2_CE_EMAIL_TEXT = `De : La responsable Nadia

Objet : Inscription à un entraînement course débutant

Bonjour,

C'est confirmé : vous avez une place pour un entraînement course débutant.
Notez bien le rendez-vous : lundi 6 mai, 9 h, à la Maison des Acacias.
Merci d'apporter des baskets adaptées. La participation est gratuite.
Cette rencontre aide à courir sans se blesser.

À bientôt,

La responsable Nadia`;

const E12_2_CE_EMAIL_POOL = buildExpressPool("e12-2-ce-email", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Inscription à un entraînement course débutant", "Facture oubliée", "Invitation sans date"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Inscription",
    vfQ: "L'objet de l'e-mail est « Inscription à un entraînement course débutant ».",
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
    text: ["un entraînement course débutant", "une réunion de cuisine", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "entraînement",
    vfQ: "Le texte parle de l'activité suivante : un entraînement course débutant.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["des baskets adaptées", "une carte bancaire", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "baskets",
    vfQ: "Il faut prévoir des baskets adaptées.",
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

const E12_2_CE_EMAIL_2_TEXT = `De : Accueil du quartier

Objet : Rappel pour mardi 14 mai

Bonjour à toutes et à tous,

Je vous rappelle que une séance d'étirements est prévu mardi 14 mai.
Le groupe se retrouve à 10 h 15 devant la salle Jean-Monnet.
Comme il y a 10 places, merci de prévenir en cas d'absence.
N'oubliez pas une serviette et lisez bien cette consigne : les mouvements brusques sont évités.

Bonne journée,

Accueil du quartier`;

const E12_2_CE_EMAIL_2_POOL = buildExpressPool("e12-2-ce-email-2", [
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
    text: ["une séance d'étirements", "un cours de chant", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "séance",
    vfQ: "Le texte parle de l'activité suivante : une séance d'étirements.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["une serviette", "un livre de recettes", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "serviette",
    vfQ: "Il faut prévoir une serviette.",
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

const E12_2_CE_EMAIL_3_TEXT = `De : Service activités

Objet : Question avant un cours de natation douce

Bonjour,

J'ai vu l'annonce pour un cours de natation douce et je voudrais m'inscrire.
Pouvez-vous confirmer qu'il faut apporter un bonnet de bain ?
Je peux venir mercredi 22 mai à 11 h à le centre du Lac.
Mon objectif est de nager avec confiance. Merci pour votre réponse.

Cordialement,

Rami`;

const E12_2_CE_EMAIL_3_POOL = buildExpressPool("e12-2-ce-email-3", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Question avant un cours de natation douce", "Facture oubliée", "Invitation sans date"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Question",
    vfQ: "L'objet de l'e-mail est « Question avant un cours de natation douce ».",
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
    text: ["un cours de natation douce", "une visite d'appartement", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "cours",
    vfQ: "Le texte parle de l'activité suivante : un cours de natation douce.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["un bonnet de bain", "un tournevis", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "bonnet",
    vfQ: "Il faut prévoir un bonnet de bain.",
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

const E12_2_CE_EMAIL_4_TEXT = `De : Association Bellevue

Objet : Confirmation de votre place

Madame, Monsieur,

Votre place pour un atelier équilibre sur tapis est réservée.
La séance aura lieu jeudi 30 mai à la ferme des Lilas.
Merci d'arriver à 12 h 30. La participation est de 10 CHF.
Le bénévole Marco sera sur place pour vous accueillir.

Avec nos salutations,

Association Bellevue`;

const E12_2_CE_EMAIL_4_POOL = buildExpressPool("e12-2-ce-email-4", [
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
    text: ["un atelier équilibre sur tapis", "une réunion de cuisine", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "atelier",
    vfQ: "Le texte parle de l'activité suivante : un atelier équilibre sur tapis.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["un tapis", "une carte bancaire", "un ordinateur cassé"],
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

const E12_2_CE_EMAIL_5_TEXT = `De : Secrétariat du centre

Objet : Conseil pratique : un ballon

Salut,

Petit conseil pour une initiation au basket loisirs : mets un ballon dans ton sac.
Je t'attends vendredi 7 juin à 14 h à le foyer Bellevue.
Si tu veux jouer en équipe, cette séance est très utile.
Attention : les bijoux restent au vestiaire.

À demain,

Noé`;

const E12_2_CE_EMAIL_5_POOL = buildExpressPool("e12-2-ce-email-5", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Conseil pratique : un ballon", "Facture oubliée", "Invitation sans date"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Conseil",
    vfQ: "L'objet de l'e-mail est « Conseil pratique : un ballon ».",
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
    text: ["une initiation au basket loisirs", "un cours de chant", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "initiation",
    vfQ: "Le texte parle de l'activité suivante : une initiation au basket loisirs.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["un ballon", "un livre de recettes", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "ballon",
    vfQ: "Il faut prévoir un ballon.",
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

const E12_2_CE_EMAIL_6_TEXT = `De : Équipe organisation

Objet : Changement de salle

Bonjour,

Petit changement pour une marche rapide en groupe : la salle prévue n'est plus libre.
Le nouveau lieu est la bibliothèque Nord. La date et l'heure ne changent pas : samedi 15 juin à 15 h 15.
Le prix reste 15 CHF et les 16 places sont gardées.
Merci de préparer une gourde pleine.

Merci de votre compréhension,

Équipe organisation`;

const E12_2_CE_EMAIL_6_POOL = buildExpressPool("e12-2-ce-email-6", [
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
    text: ["une marche rapide en groupe", "une visite d'appartement", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "marche",
    vfQ: "Le texte parle de l'activité suivante : une marche rapide en groupe.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["une gourde pleine", "un tournevis", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "gourde",
    vfQ: "Il faut prévoir une gourde pleine.",
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

const E12_2_CE_EMAIL_7_TEXT = `De : Club des habitants

Objet : Merci pour votre participation

Bonjour,

Merci pour votre présence lors de un circuit renforcement léger à la terrasse du Marché.
Plusieurs personnes ont expliqué que la séance aide à renforcer le dos.
Pour la prochaine fois, nous garderons dimanche 23 juin à 16 h.
Votre remarque sur un élastique souple a été notée.

Bien à vous,

Club des habitants`;

const E12_2_CE_EMAIL_7_POOL = buildExpressPool("e12-2-ce-email-7", [
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
    text: ["un circuit renforcement léger", "une réunion de cuisine", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "circuit",
    vfQ: "Le texte parle de l'activité suivante : un circuit renforcement léger.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["un élastique souple", "une carte bancaire", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "élastique",
    vfQ: "Il faut prévoir un élastique souple.",
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

const E12_2_CE_EMAIL_8_TEXT = `De : Maison commune

Objet : Invitation sport

Bonjour les amis,

Ça vous dit de venir avec moi à une découverte du volley ?
Le rendez-vous est lundi 1er juillet à 17 h 30 à le local des Jeunes.
Il faut réserver directement sur place car il y a seulement 20 places.
Apportez des genouillères et un peu de bonne humeur.

À très vite,

Mina`;

const E12_2_CE_EMAIL_8_POOL = buildExpressPool("e12-2-ce-email-8", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Invitation sport", "Facture oubliée", "Invitation sans date"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Invitation",
    vfQ: "L'objet de l'e-mail est « Invitation sport ».",
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
    text: ["une découverte du volley", "un cours de chant", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "découverte",
    vfQ: "Le texte parle de l'activité suivante : une découverte du volley.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["des genouillères", "un livre de recettes", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "genouillères",
    vfQ: "Il faut prévoir des genouillères.",
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

const E12_2_CE_EMAIL_9_TEXT = `De : Bureau des inscriptions

Objet : Liste du matériel

Bonjour,

Pour une séance de respiration après effort, la petite liste est simple : un vêtement sec, une bouteille d'eau et un stylo.
Le rendez-vous reste mardi 9 juillet à 18 h à la salle des Fêtes.
Le tarif est 25 CHF.
Le thème principal sera : récupérer calmement.

Merci,

Bureau des inscriptions`;

const E12_2_CE_EMAIL_9_POOL = buildExpressPool("e12-2-ce-email-9", [
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
    text: ["une séance de respiration après effort", "une visite d'appartement", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "séance",
    vfQ: "Le texte parle de l'activité suivante : une séance de respiration après effort.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["un vêtement sec", "un tournevis", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "vêtement",
    vfQ: "Il faut prévoir un vêtement sec.",
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

const E12_2_CE_EMAIL_10_TEXT = `De : Info loisirs

Objet : Places disponibles

Bonjour,

Bonne nouvelle : un test de vélo en sécurité n'est pas complet, il reste 24 places.
La séance aura lieu mercredi 17 juillet à 18 h 45 à le jardin partagé.
Merci de vous inscrire avec le QR code de l'affiche avant demain soir.
Prévoyez un casque. Le prix est 30 CHF.

Cordialement,

Info loisirs`;

const E12_2_CE_EMAIL_10_POOL = buildExpressPool("e12-2-ce-email-10", [
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
    text: ["un test de vélo en sécurité", "une réunion de cuisine", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "test",
    vfQ: "Le texte parle de l'activité suivante : un test de vélo en sécurité.",
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

const E12_2_CE_EMAIL_11_TEXT = `De : Groupe des bénévoles

Objet : Retour sur l'activité

Bonjour,

Depuis une matinée sports en famille, nous recevons des messages très positifs.
Les participants ont surtout apprécié de bouger avec les enfants.
La prochaine date est jeudi 25 juillet à 19 h à le café du Pont.
Cette fois, merci d'apporter une tenue de sport.

Au plaisir de vous revoir,

Groupe des bénévoles`;

const E12_2_CE_EMAIL_11_POOL = buildExpressPool("e12-2-ce-email-11", [
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
    text: ["une matinée sports en famille", "un cours de chant", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "matinée",
    vfQ: "Le texte parle de l'activité suivante : une matinée sports en famille.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["une tenue de sport", "un livre de recettes", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "tenue",
    vfQ: "Il faut prévoir une tenue de sport.",
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

const E12_2_CE_EMAIL_12_TEXT = `De : Réception

Objet : Rendez-vous à 8 h 30

Bonjour,

Votre rendez-vous lié à un entraînement fractionné facile commence à 8 h 30.
Merci d'arriver à la maison médicale dix minutes avant.
La date est vendredi 2 août et le prix est 6 CHF.
La docteure Morel conseille de préparer une montre simple.

Meilleures salutations,

Réception`;

const E12_2_CE_EMAIL_12_POOL = buildExpressPool("e12-2-ce-email-12", [
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
    text: ["un entraînement fractionné facile", "une visite d'appartement", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "entraînement",
    vfQ: "Le texte parle de l'activité suivante : un entraînement fractionné facile.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["une montre simple", "un tournevis", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "montre",
    vfQ: "Il faut prévoir une montre simple.",
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

const E12_2_CE_EMAIL_13_TEXT = `De : Atelier A2

Objet : Préparation de groupe

Chers participants,

Pour que une séance d'échauffement guidé se passe bien, nous formons deux petits groupes.
Le premier groupe est attendu à 13 h à le parc des Amandiers.
La séance a lieu samedi 10 août avec l'entraîneuse Emma.
Merci de vérifier une corde à sauter avant de partir.

À bientôt,

Atelier A2`;

const E12_2_CE_EMAIL_13_POOL = buildExpressPool("e12-2-ce-email-13", [
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
    text: ["une séance d'échauffement guidé", "une réunion de cuisine", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "séance",
    vfQ: "Le texte parle de l'activité suivante : une séance d'échauffement guidé.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["une corde à sauter", "une carte bancaire", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "corde",
    vfQ: "Il faut prévoir une corde à sauter.",
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

const E12_2_CE_EMAIL_14_TEXT = `De : Coordination locale

Objet : Demande d'information

Bonjour,

Je vous écris car je cherche des informations sur un cours de tennis découverte.
J'ai noté la date, dimanche 18 août, et l'heure, 14 h 45, à la boutique Horizon.
Pouvez-vous confirmer le prix de 11 CHF ?
Je viens surtout pour tenir la raquette sans douleur.

Merci d'avance,

Salma`;

const E12_2_CE_EMAIL_14_POOL = buildExpressPool("e12-2-ce-email-14", [
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
    text: ["un cours de tennis découverte", "un cours de chant", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "cours",
    vfQ: "Le texte parle de l'activité suivante : un cours de tennis découverte.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["une raquette", "un livre de recettes", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "raquette",
    vfQ: "Il faut prévoir une raquette.",
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

const E12_2_CE_EMAIL_15_TEXT = `De : Coach Léa
Objet : Plan de la semaine — reprise

Salut !
Semaine légère après ta blessure :
Lun : marche 30 min. Mer : vélo doux 20 min. Ven : piscine 15 min (jambes).
Pas de course avant le contrôle du 18.
Bois bien et dors 8 heures si possible.
Tu gères — Léa`;

const E12_2_CE_EMAIL_15_POOL = buildExpressPool("e12-2-ce-email-15", [
  q({
    id: "cem-q1",
    textQ: "Qui écrit ?",
    text: ["Coach Léa", "Un médecin inconnu", "La mairie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "— _________.",
    fill: "Léa",
    vfQ: "Léa.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Activité lundi ?",
    text: ["Marche 30 min", "Course 10 km", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "marche _________ min",
    fill: "30",
    vfQ: "Marche 30 min.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Activité mercredi ?",
    text: ["Vélo doux 20 min", "Football", "Yoga seulement"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "vélo doux _________ min",
    fill: "20",
    vfQ: "Vélo 20 min.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Course autorisée ?",
    text: ["Non, pas avant le 18", "Oui tout de suite", "Seulement le lundi"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pas de course avant le contrôle du _________.",
    fill: "18",
    vfQ: "Pas avant le 18.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Sommeil conseillé ?",
    text: ["8 heures", "2 heures", "14 heures"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "dors _________ heures",
    fill: "8",
    vfQ: "8 heures.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Piscine quel jour ?",
    text: ["Vendredi", "Mardi", "Dimanche"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ : piscine",
    fill: "Ven",
    vfQ: "Vendredi.",
    vfC: 0,
  }),
]);

const E12_2_CE_EMAIL_16_TEXT = `De : Service rappel

Objet : Dernier rappel

Bonjour,

Dernier message avant une initiation à l'escalade basse !
Rendez-vous mardi 3 septembre à 17 h à la place du Village.
L'entrée n'est garantie que si l'inscription est faite au stand d'information.
Apportez un baudrier fourni et gardez 16 CHF si besoin.

À tout à l'heure,

Service rappel`;

const E12_2_CE_EMAIL_16_POOL = buildExpressPool("e12-2-ce-email-16", [
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
    text: ["une initiation à l'escalade basse", "une réunion de cuisine", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "initiation",
    vfQ: "Le texte parle de l'activité suivante : une initiation à l'escalade basse.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["un baudrier fourni", "une carte bancaire", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "baudrier",
    vfQ: "Il faut prévoir un baudrier fourni.",
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

const E12_2_CE_EMAIL_17_TEXT = `De : Responsable du projet

Objet : Message de la responsable

Bonjour,

Message de La coach Ana au sujet de un atelier récupération musculaire.
La rencontre est prévue mercredi 11 septembre à 9 h 45 à la halle des Sports.
Le but reste simple : apprendre à éviter les courbatures.
Merci de respecter cette règle : les massages forts sont déconseillés.

Bien cordialement,

Responsable du projet`;

const E12_2_CE_EMAIL_17_POOL = buildExpressPool("e12-2-ce-email-17", [
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
    text: ["un atelier récupération musculaire", "un cours de chant", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "atelier",
    vfQ: "Le texte parle de l'activité suivante : un atelier récupération musculaire.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["une petite collation", "un livre de recettes", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "petite",
    vfQ: "Il faut prévoir une petite collation.",
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

const E12_2_CE_EMAIL_18_TEXT = `De : Équipe du samedi

Objet : Organisation du samedi

Bonjour,

L'équipe prépare le salon Harmonie pour une rencontre avec un coach.
Les participants arrivent à 11 h 30 avec un carnet d'objectifs.
La date exacte est jeudi 19 septembre.
Après la séance, un court échange expliquera comment réussir à choisir un objectif réaliste.

Merci de votre aide,

Équipe du samedi`;

const E12_2_CE_EMAIL_18_POOL = buildExpressPool("e12-2-ce-email-18", [
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
    text: ["une rencontre avec un coach", "une visite d'appartement", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "rencontre",
    vfQ: "Le texte parle de l'activité suivante : une rencontre avec un coach.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["un carnet d'objectifs", "un tournevis", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "carnet",
    vfQ: "Il faut prévoir un carnet d'objectifs.",
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

const E12_2_CE_EMAIL_19_TEXT = `De : Questionnaire qualité

Objet : Votre avis nous intéresse

Bonjour,

Vous avez récemment participé à un défi pas quotidiens à la résidence du Parc.
Pouvez-vous dire si l'horaire de 15 h 45 vous convient ?
La prochaine séance est prévue vendredi 27 septembre.
Votre avis nous aidera à mieux organiser les moments pour marcher davantage chaque jour.

Merci pour votre retour,

Questionnaire qualité`;

const E12_2_CE_EMAIL_19_POOL = buildExpressPool("e12-2-ce-email-19", [
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
    text: ["un défi pas quotidiens", "une réunion de cuisine", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "défi",
    vfQ: "Le texte parle de l'activité suivante : un défi pas quotidiens.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["un podomètre", "une carte bancaire", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "podomètre",
    vfQ: "Il faut prévoir un podomètre.",
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

const E12_2_CE_EMAIL_20_TEXT = `De : Centre culturel

Objet : Prochaine rencontre

Bonjour,

Nous préparons une prochaine rencontre autour de une séance sport sans compétition.
Elle aura lieu samedi 5 octobre à 18 h 15 à le centre culturel.
Le tarif annoncé est 40 CHF et il reste les vingt premiers inscrits.
Cette fois, chacun devra apporter un sourire.

À bientôt,

Centre culturel`;

const E12_2_CE_EMAIL_20_POOL = buildExpressPool("e12-2-ce-email-20", [
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
    text: ["une séance sport sans compétition", "un cours de chant", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "séance",
    vfQ: "Le texte parle de l'activité suivante : une séance sport sans compétition.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["un sourire", "un livre de recettes", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "sourire",
    vfQ: "Il faut prévoir un sourire.",
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

export const E12_2_CE_EMAIL: CommunicationExercise[] = [
readingPoolExercise({
  id: "e12-2-ce-email",
  readingText: E12_2_CE_EMAIL_TEXT,
  questionPool: E12_2_CE_EMAIL_POOL,
  questionCount: 6,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
readingPoolExercise({
  id: "e12-2-ce-email-2",
  readingText: E12_2_CE_EMAIL_2_TEXT,
  questionPool: E12_2_CE_EMAIL_2_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e12-2-ce-email-3",
  readingText: E12_2_CE_EMAIL_3_TEXT,
  questionPool: E12_2_CE_EMAIL_3_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e12-2-ce-email-4",
  readingText: E12_2_CE_EMAIL_4_TEXT,
  questionPool: E12_2_CE_EMAIL_4_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e12-2-ce-email-5",
  readingText: E12_2_CE_EMAIL_5_TEXT,
  questionPool: E12_2_CE_EMAIL_5_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e12-2-ce-email-6",
  readingText: E12_2_CE_EMAIL_6_TEXT,
  questionPool: E12_2_CE_EMAIL_6_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e12-2-ce-email-7",
  readingText: E12_2_CE_EMAIL_7_TEXT,
  questionPool: E12_2_CE_EMAIL_7_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e12-2-ce-email-8",
  readingText: E12_2_CE_EMAIL_8_TEXT,
  questionPool: E12_2_CE_EMAIL_8_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e12-2-ce-email-9",
  readingText: E12_2_CE_EMAIL_9_TEXT,
  questionPool: E12_2_CE_EMAIL_9_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e12-2-ce-email-10",
  readingText: E12_2_CE_EMAIL_10_TEXT,
  questionPool: E12_2_CE_EMAIL_10_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e12-2-ce-email-11",
  readingText: E12_2_CE_EMAIL_11_TEXT,
  questionPool: E12_2_CE_EMAIL_11_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e12-2-ce-email-12",
  readingText: E12_2_CE_EMAIL_12_TEXT,
  questionPool: E12_2_CE_EMAIL_12_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e12-2-ce-email-13",
  readingText: E12_2_CE_EMAIL_13_TEXT,
  questionPool: E12_2_CE_EMAIL_13_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e12-2-ce-email-14",
  readingText: E12_2_CE_EMAIL_14_TEXT,
  questionPool: E12_2_CE_EMAIL_14_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e12-2-ce-email-15",
  readingText: E12_2_CE_EMAIL_15_TEXT,
  questionPool: E12_2_CE_EMAIL_15_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e12-2-ce-email-16",
  readingText: E12_2_CE_EMAIL_16_TEXT,
  questionPool: E12_2_CE_EMAIL_16_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e12-2-ce-email-17",
  readingText: E12_2_CE_EMAIL_17_TEXT,
  questionPool: E12_2_CE_EMAIL_17_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e12-2-ce-email-18",
  readingText: E12_2_CE_EMAIL_18_TEXT,
  questionPool: E12_2_CE_EMAIL_18_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e12-2-ce-email-19",
  readingText: E12_2_CE_EMAIL_19_TEXT,
  questionPool: E12_2_CE_EMAIL_19_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e12-2-ce-email-20",
  readingText: E12_2_CE_EMAIL_20_TEXT,
  questionPool: E12_2_CE_EMAIL_20_POOL,
  questionCount: 6
}),
];

export const E12_2_PE_EMAIL: ExpressPePrompt[] = [

  {
    id: "e12-2-pee-1",
    title: "Choisir un abonnement",
    situation: "La salle de sport répond à votre demande d'informations.",
    sourceMessage: {
      from: "Salle de sport Vitafit",
      subject: "Nos abonnements",
      body: "Bonjour,\nMerci pour votre message. Nous proposons deux formules :\nl'abonnement mensuel à 60 francs ou l'abonnement annuel à 600 francs.\nQuelle formule vous intéresse ?\nL'équipe Vitafit",
    },
    instruction: "Répondez à la salle de sport : choisissez une formule, expliquez votre choix et demandez quand vous pouvez commencer.",
    points: ["La formule choisie", "La raison de votre choix", "Une question sur la date de début"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-2-pee-2",
    title: "Réserver un cours d'essai",
    situation: "La salle de sport vous propose un cours collectif d'essai gratuit.",
    sourceMessage: {
      from: "Salle de sport Vitafit",
      subject: "Cours d'essai gratuit",
      body: "Bonjour,\nVous pouvez essayer gratuitement un cours collectif : yoga le mardi à 18 h 30 ou zumba le samedi à 10 h.\nQuel cours voulez-vous essayer ?\nL'équipe Vitafit",
    },
    instruction: "Répondez à la salle : choisissez un cours, dites quel jour vous venez et demandez ce qu'il faut apporter.",
    points: ["Le cours choisi", "Le jour de votre venue", "Une question sur le matériel"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-2-pee-3",
    title: "Excuser une absence à l'entraînement",
    situation: "Votre club vous demande de confirmer votre présence à l'entraînement.",
    sourceMessage: {
      from: "FC Les Aiglons",
      subject: "Entraînement de samedi",
      body: "Bonjour à tous,\nL'entraînement de samedi à 9 h est très important avant le match.\nMerci de confirmer votre présence avant vendredi.\nL'entraîneur",
    },
    instruction: "Répondez à l'entraîneur : excusez-vous, expliquez pourquoi vous ne pouvez pas venir et proposez de vous entraîner un autre jour.",
    points: ["L'excuse", "La raison de l'absence", "Une proposition pour un autre jour"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-2-pee-4",
    title: "S'inscrire à la course de la ville",
    situation: "L'association sportive annonce l'ouverture des inscriptions.",
    sourceMessage: {
      from: "Association Courir Ensemble",
      subject: "Course de la ville : inscriptions ouvertes",
      body: "Bonjour,\nLes inscriptions pour la course de la ville du dimanche 15 juin sont ouvertes.\nDeux parcours : 5 km ou 10 km. Prix : 20 francs.\nPour vous inscrire, répondez à cet e-mail.\nL'association",
    },
    instruction: "Répondez à l'association : inscrivez-vous, choisissez un parcours et posez une question sur l'organisation (heure de départ, dossard…).",
    points: ["Votre inscription", "Le parcours choisi", "Une question sur l'organisation"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-2-pee-5",
    title: "Motiver un ami",
    situation: "Un ami veut se remettre au sport et vous demande une idée.",
    sourceMessage: {
      from: "Jonas",
      subject: "Je veux refaire du sport",
      body: "Salut !\nJ'ai décidé de me remettre au sport, mais je ne sais pas quoi choisir.\nToi, tu fais du sport régulièrement, non ? Tu as une idée pour moi ?\nJonas",
    },
    instruction: "Répondez à Jonas : racontez votre sport, proposez-lui une activité ensemble et donnez-lui un conseil pour commencer.",
    points: ["Votre sport", "Une activité ensemble", "Un conseil pour commencer"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-2-pee-6",
    title: "Répondre à la coach",
    situation: "Avant votre premier entraînement, la coach vous pose des questions.",
    sourceMessage: {
      from: "Coach Sandra",
      subject: "Avant votre premier entraînement",
      body: "Bonjour,\nNotre premier rendez-vous approche.\nQuels sont vos objectifs ? Faites-vous déjà du sport ?\nAvez-vous des problèmes de santé ?\nSportivement,\nSandra",
    },
    instruction: "Répondez à la coach : donnez vos objectifs, décrivez votre activité sportive actuelle et parlez de votre santé.",
    points: ["Vos objectifs", "Votre activité sportive actuelle", "Une information sur votre santé"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-2-pee-7",
    title: "Suspendre son abonnement",
    situation: "Vous êtes blessé(e) et la salle vous écrit au sujet de votre abonnement.",
    sourceMessage: {
      from: "Salle de sport Vitafit",
      subject: "Votre abonnement se termine bientôt",
      body: "Bonjour,\nVotre abonnement se termine à la fin du mois.\nVoulez-vous le renouveler pour une année ?\nL'équipe Vitafit",
    },
    instruction: "Répondez à la salle : expliquez votre blessure, demandez si vous pouvez suspendre l'abonnement et posez une question sur les conditions.",
    points: ["Votre blessure", "La demande de suspension", "Une question sur les conditions"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-2-pee-8",
    title: "Entraînement d'essai pour votre fils",
    situation: "Le club de football invite votre fils à un entraînement d'essai.",
    sourceMessage: {
      from: "FC Les Aiglons",
      subject: "Entraînement d'essai",
      body: "Bonjour,\nVotre fils peut venir à un entraînement d'essai le mercredi à 17 h, au stade municipal.\nMerci de confirmer sa présence.\nLe club",
    },
    instruction: "Répondez au club : confirmez la présence de votre fils, demandez quel équipement il faut et posez une question sur le prix de la cotisation.",
    points: ["La confirmation", "Une question sur l'équipement", "Une question sur le prix"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-2-pee-9",
    title: "Raconter sa compétition",
    situation: "Une amie vous demande des nouvelles de votre compétition.",
    sourceMessage: {
      from: "Carla",
      subject: "Ta compétition",
      body: "Coucou,\nAlors, cette compétition de samedi ? Tu as gagné ?\nRaconte-moi tout !\nCarla",
    },
    instruction: "Répondez à Carla : racontez la compétition, donnez votre résultat et dites ce que vous allez faire pour progresser.",
    points: ["Le récit de la compétition", "Votre résultat", "Vos projets pour progresser"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-2-pee-10",
    title: "S'inscrire à l'aquagym",
    situation: "La piscine municipale annonce ses nouveaux cours.",
    sourceMessage: {
      from: "Piscine municipale",
      subject: "Nouveaux cours d'aquagym",
      body: "Bonjour,\nNos nouveaux cours d'aquagym commencent le lundi 3 février.\nDeux horaires : le lundi à 19 h ou le jeudi à 12 h 15.\nLes places sont limitées.\nLa piscine municipale",
    },
    instruction: "Répondez à la piscine : inscrivez-vous, choisissez un horaire et demandez le prix du cours.",
    points: ["Votre inscription", "L'horaire choisi", "Une question sur le prix"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-2-pee-11",
    title: "Répondre — sport (11)",
    situation: "Vous avez reçu un e-mail concernant sport.",
sourceMessage: {
  from: "Service Sport",
  subject: "Votre demande — référence 1100",
  body: "Bonjour,\nNous avons bien reçu votre message concernant sport.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-2-pee-12",
    title: "Répondre — sport (12)",
    situation: "Vous avez reçu un e-mail concernant sport.",
sourceMessage: {
  from: "Service Sport",
  subject: "Votre demande — référence 1200",
  body: "Bonjour,\nNous avons bien reçu votre message concernant sport.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-2-pee-13",
    title: "Répondre — sport (13)",
    situation: "Vous avez reçu un e-mail concernant sport.",
sourceMessage: {
  from: "Service Sport",
  subject: "Votre demande — référence 1300",
  body: "Bonjour,\nNous avons bien reçu votre message concernant sport.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-2-pee-14",
    title: "Répondre — sport (14)",
    situation: "Vous avez reçu un e-mail concernant sport.",
sourceMessage: {
  from: "Service Sport",
  subject: "Votre demande — référence 1400",
  body: "Bonjour,\nNous avons bien reçu votre message concernant sport.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-2-pee-15",
    title: "Répondre — sport (15)",
    situation: "Vous avez reçu un e-mail concernant sport.",
sourceMessage: {
  from: "Service Sport",
  subject: "Votre demande — référence 1500",
  body: "Bonjour,\nNous avons bien reçu votre message concernant sport.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-2-pee-16",
    title: "Répondre — sport (16)",
    situation: "Vous avez reçu un e-mail concernant sport.",
sourceMessage: {
  from: "Service Sport",
  subject: "Votre demande — référence 1600",
  body: "Bonjour,\nNous avons bien reçu votre message concernant sport.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-2-pee-17",
    title: "Répondre — sport (17)",
    situation: "Vous avez reçu un e-mail concernant sport.",
sourceMessage: {
  from: "Service Sport",
  subject: "Votre demande — référence 1700",
  body: "Bonjour,\nNous avons bien reçu votre message concernant sport.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-2-pee-18",
    title: "Répondre — sport (18)",
    situation: "Vous avez reçu un e-mail concernant sport.",
sourceMessage: {
  from: "Service Sport",
  subject: "Votre demande — référence 1800",
  body: "Bonjour,\nNous avons bien reçu votre message concernant sport.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-2-pee-19",
    title: "Répondre — sport (19)",
    situation: "Vous avez reçu un e-mail concernant sport.",
sourceMessage: {
  from: "Service Sport",
  subject: "Votre demande — référence 1900",
  body: "Bonjour,\nNous avons bien reçu votre message concernant sport.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-2-pee-20",
    title: "Répondre — sport (20)",
    situation: "Vous avez reçu un e-mail concernant sport.",
sourceMessage: {
  from: "Service Sport",
  subject: "Votre demande — référence 2000",
  body: "Bonjour,\nNous avons bien reçu votre message concernant sport.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  }
];

/* ════════════════════════════════════════════════════════════════════════════
   E12.3 — Manger équilibré
   ════════════════════════════════════════════════════════════════════════════ */

const E12_3_CE_EMAIL_TEXT = `De : La responsable Nadia

Objet : Inscription à un atelier assiette équilibrée

Bonjour,

C'est confirmé : vous avez une place pour un atelier assiette équilibrée.
Notez bien le rendez-vous : lundi 6 mai, 9 h, à la Maison des Acacias.
Merci d'apporter une assiette vide. La participation est gratuite.
Cette rencontre aide à composer un repas complet.

À bientôt,

La responsable Nadia`;

const E12_3_CE_EMAIL_POOL = buildExpressPool("e12-3-ce-email", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Inscription à un atelier assiette équilibrée", "Facture oubliée", "Invitation sans date"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Inscription",
    vfQ: "L'objet de l'e-mail est « Inscription à un atelier assiette équilibrée ».",
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
    text: ["un atelier assiette équilibrée", "un entraînement de basket", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "atelier",
    vfQ: "Le texte parle de l'activité suivante : un atelier assiette équilibrée.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["une assiette vide", "un casque", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "assiette",
    vfQ: "Il faut prévoir une assiette vide.",
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

const E12_3_CE_EMAIL_2_TEXT = `De : Accueil du quartier

Objet : Rappel pour mardi 14 mai

Bonjour à toutes et à tous,

Je vous rappelle que une visite au rayon fruits est prévu mardi 14 mai.
Le groupe se retrouve à 10 h 15 devant la salle Jean-Monnet.
Comme il y a 10 places, merci de prévenir en cas d'absence.
N'oubliez pas un sac réutilisable et lisez bien cette consigne : les fruits abîmés ne sont pas utilisés.

Bonne journée,

Accueil du quartier`;

const E12_3_CE_EMAIL_2_POOL = buildExpressPool("e12-3-ce-email-2", [
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
    text: ["une visite au rayon fruits", "un atelier mécanique", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "visite",
    vfQ: "Le texte parle de l'activité suivante : une visite au rayon fruits.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["un sac réutilisable", "une clé anglaise", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "sac",
    vfQ: "Il faut prévoir un sac réutilisable.",
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

const E12_3_CE_EMAIL_3_TEXT = `De : Service activités

Objet : Question avant un cours petit déjeuner simple

Bonjour,

J'ai vu l'annonce pour un cours petit déjeuner simple et je voudrais m'inscrire.
Pouvez-vous confirmer qu'il faut apporter un bol ?
Je peux venir mercredi 22 mai à 11 h à le centre du Lac.
Mon objectif est de éviter d'avoir faim trop vite. Merci pour votre réponse.

Cordialement,

Rami`;

const E12_3_CE_EMAIL_3_POOL = buildExpressPool("e12-3-ce-email-3", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Question avant un cours petit déjeuner simple", "Facture oubliée", "Invitation sans date"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Question",
    vfQ: "L'objet de l'e-mail est « Question avant un cours petit déjeuner simple ».",
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
    text: ["un cours petit déjeuner simple", "une séance de coiffure", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "cours",
    vfQ: "Le texte parle de l'activité suivante : un cours petit déjeuner simple.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["un bol", "un passeport", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "bol",
    vfQ: "Il faut prévoir un bol.",
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

const E12_3_CE_EMAIL_4_TEXT = `De : Association Bellevue

Objet : Confirmation de votre place

Madame, Monsieur,

Votre place pour une discussion sur les boissons sucrées est réservée.
La séance aura lieu jeudi 30 mai à la ferme des Lilas.
Merci d'arriver à 12 h 30. La participation est de 10 CHF.
Le bénévole Marco sera sur place pour vous accueillir.

Avec nos salutations,

Association Bellevue`;

const E12_3_CE_EMAIL_4_POOL = buildExpressPool("e12-3-ce-email-4", [
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
    text: ["une discussion sur les boissons sucrées", "un entraînement de basket", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "discussion",
    vfQ: "Le texte parle de l'activité suivante : une discussion sur les boissons sucrées.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["une gourde", "un casque", "un ordinateur cassé"],
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

const E12_3_CE_EMAIL_5_TEXT = `De : Secrétariat du centre

Objet : Conseil pratique : une boîte à goûter

Salut,

Petit conseil pour un atelier goûter sain : mets une boîte à goûter dans ton sac.
Je t'attends vendredi 7 juin à 14 h à le foyer Bellevue.
Si tu veux préparer une collation pratique, cette séance est très utile.
Attention : les noix sont séparées à cause des allergies.

À demain,

Noé`;

const E12_3_CE_EMAIL_5_POOL = buildExpressPool("e12-3-ce-email-5", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Conseil pratique : une boîte à goûter", "Facture oubliée", "Invitation sans date"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Conseil",
    vfQ: "L'objet de l'e-mail est « Conseil pratique : une boîte à goûter ».",
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
    text: ["un atelier goûter sain", "un atelier mécanique", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "atelier",
    vfQ: "Le texte parle de l'activité suivante : un atelier goûter sain.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["une boîte à goûter", "une clé anglaise", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "boîte",
    vfQ: "Il faut prévoir une boîte à goûter.",
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

const E12_3_CE_EMAIL_6_TEXT = `De : Équipe organisation

Objet : Changement de salle

Bonjour,

Petit changement pour une séance menu de la semaine : la salle prévue n'est plus libre.
Le nouveau lieu est la bibliothèque Nord. La date et l'heure ne changent pas : samedi 15 juin à 15 h 15.
Le prix reste 15 CHF et les 16 places sont gardées.
Merci de préparer un calendrier.

Merci de votre compréhension,

Équipe organisation`;

const E12_3_CE_EMAIL_6_POOL = buildExpressPool("e12-3-ce-email-6", [
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
    text: ["une séance menu de la semaine", "une séance de coiffure", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "séance",
    vfQ: "Le texte parle de l'activité suivante : une séance menu de la semaine.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["un calendrier", "un passeport", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "calendrier",
    vfQ: "Il faut prévoir un calendrier.",
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

const E12_3_CE_EMAIL_7_TEXT = `De : Club des habitants

Objet : Merci pour votre participation

Bonjour,

Merci pour votre présence lors de une lecture d'étiquettes nutritionnelles à la terrasse du Marché.
Plusieurs personnes ont expliqué que la séance aide à repérer le sel et le gras.
Pour la prochaine fois, nous garderons dimanche 23 juin à 16 h.
Votre remarque sur un emballage alimentaire a été notée.

Bien à vous,

Club des habitants`;

const E12_3_CE_EMAIL_7_POOL = buildExpressPool("e12-3-ce-email-7", [
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
    text: ["une lecture d'étiquettes nutritionnelles", "un entraînement de basket", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "lecture",
    vfQ: "Le texte parle de l'activité suivante : une lecture d'étiquettes nutritionnelles.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["un emballage alimentaire", "un casque", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "emballage",
    vfQ: "Il faut prévoir un emballage alimentaire.",
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

const E12_3_CE_EMAIL_8_TEXT = `De : Maison commune

Objet : Invitation alimentation

Bonjour les amis,

Ça vous dit de venir avec moi à un échange recettes avec légumes ?
Le rendez-vous est lundi 1er juillet à 17 h 30 à le local des Jeunes.
Il faut réserver directement sur place car il y a seulement 20 places.
Apportez un légume préféré et un peu de bonne humeur.

À très vite,

Mina`;

const E12_3_CE_EMAIL_8_POOL = buildExpressPool("e12-3-ce-email-8", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Invitation alimentation", "Facture oubliée", "Invitation sans date"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Invitation",
    vfQ: "L'objet de l'e-mail est « Invitation alimentation ».",
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
    text: ["un échange recettes avec légumes", "un atelier mécanique", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "échange",
    vfQ: "Le texte parle de l'activité suivante : un échange recettes avec légumes.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["un légume préféré", "une clé anglaise", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "légume",
    vfQ: "Il faut prévoir un légume préféré.",
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

const E12_3_CE_EMAIL_9_TEXT = `De : Bureau des inscriptions

Objet : Liste du matériel

Bonjour,

Pour une préparation de salade complète, la petite liste est simple : un grand saladier, une bouteille d'eau et un stylo.
Le rendez-vous reste mardi 9 juillet à 18 h à la salle des Fêtes.
Le tarif est 25 CHF.
Le thème principal sera : manger frais sans compliquer.

Merci,

Bureau des inscriptions`;

const E12_3_CE_EMAIL_9_POOL = buildExpressPool("e12-3-ce-email-9", [
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
    text: ["une préparation de salade complète", "une séance de coiffure", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "préparation",
    vfQ: "Le texte parle de l'activité suivante : une préparation de salade complète.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["un grand saladier", "un passeport", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "grand",
    vfQ: "Il faut prévoir un grand saladier.",
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

const E12_3_CE_EMAIL_10_TEXT = `De : Info loisirs

Objet : Places disponibles

Bonjour,

Bonne nouvelle : un atelier portions raisonnables n'est pas complet, il reste 24 places.
La séance aura lieu mercredi 17 juillet à 18 h 45 à le jardin partagé.
Merci de vous inscrire avec le QR code de l'affiche avant demain soir.
Prévoyez une cuillère doseuse. Le prix est 30 CHF.

Cordialement,

Info loisirs`;

const E12_3_CE_EMAIL_10_POOL = buildExpressPool("e12-3-ce-email-10", [
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
    text: ["un atelier portions raisonnables", "un entraînement de basket", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "atelier",
    vfQ: "Le texte parle de l'activité suivante : un atelier portions raisonnables.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["une cuillère doseuse", "un casque", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "cuillère",
    vfQ: "Il faut prévoir une cuillère doseuse.",
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

const E12_3_CE_EMAIL_11_TEXT = `De : Groupe des bénévoles

Objet : Retour sur l'activité

Bonjour,

Depuis une rencontre avec une diététicienne, nous recevons des messages très positifs.
Les participants ont surtout apprécié de poser des questions sur son alimentation.
La prochaine date est jeudi 25 juillet à 19 h à le café du Pont.
Cette fois, merci d'apporter un carnet alimentaire.

Au plaisir de vous revoir,

Groupe des bénévoles`;

const E12_3_CE_EMAIL_11_POOL = buildExpressPool("e12-3-ce-email-11", [
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
    text: ["une rencontre avec une diététicienne", "un atelier mécanique", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "rencontre",
    vfQ: "Le texte parle de l'activité suivante : une rencontre avec une diététicienne.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["un carnet alimentaire", "une clé anglaise", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "carnet",
    vfQ: "Il faut prévoir un carnet alimentaire.",
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

const E12_3_CE_EMAIL_12_TEXT = `De : Réception

Objet : Rendez-vous à 8 h 30

Bonjour,

Votre rendez-vous lié à un défi eau pendant la journée commence à 8 h 30.
Merci d'arriver à la maison médicale dix minutes avant.
La date est vendredi 2 août et le prix est 6 CHF.
La docteure Morel conseille de préparer une bouteille d'eau.

Meilleures salutations,

Réception`;

const E12_3_CE_EMAIL_12_POOL = buildExpressPool("e12-3-ce-email-12", [
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
    text: ["un défi eau pendant la journée", "une séance de coiffure", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "défi",
    vfQ: "Le texte parle de l'activité suivante : un défi eau pendant la journée.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["une bouteille d'eau", "un passeport", "un ordinateur cassé"],
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

const E12_3_CE_EMAIL_13_TEXT = `De : Atelier A2

Objet : Préparation de groupe

Chers participants,

Pour que une séance courses avec petit budget se passe bien, nous formons deux petits groupes.
Le premier groupe est attendu à 13 h à le parc des Amandiers.
La séance a lieu samedi 10 août avec l'entraîneuse Emma.
Merci de vérifier une liste de courses avant de partir.

À bientôt,

Atelier A2`;

const E12_3_CE_EMAIL_13_POOL = buildExpressPool("e12-3-ce-email-13", [
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
    text: ["une séance courses avec petit budget", "un entraînement de basket", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "séance",
    vfQ: "Le texte parle de l'activité suivante : une séance courses avec petit budget.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["une liste de courses", "un casque", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "liste",
    vfQ: "Il faut prévoir une liste de courses.",
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

const E12_3_CE_EMAIL_14_TEXT = `De : Coordination locale

Objet : Demande d'information

Bonjour,

Je vous écris car je cherche des informations sur un cours soupe repas.
J'ai noté la date, dimanche 18 août, et l'heure, 14 h 45, à la boutique Horizon.
Pouvez-vous confirmer le prix de 11 CHF ?
Je viens surtout pour faire un dîner léger.

Merci d'avance,

Salma`;

const E12_3_CE_EMAIL_14_POOL = buildExpressPool("e12-3-ce-email-14", [
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
    text: ["un cours soupe repas", "un atelier mécanique", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "cours",
    vfQ: "Le texte parle de l'activité suivante : un cours soupe repas.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["une casserole", "une clé anglaise", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "casserole",
    vfQ: "Il faut prévoir une casserole.",
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

const E12_3_CE_EMAIL_15_TEXT = `De : Cantine scolaire Les Sources
Objet : Menu sans gluten — semaine 22

Bonjour chers parents,
Menu sans gluten disponible tous les jours cette semaine.
Lundi : riz et poulet. Mercredi : gratin de légumes. Vendredi : poisson et quinoa.
Signaler les allergies nouvelles avant mardi 10 h au secrétariat.
Tarif inchangé : 7,50 CHF le repas.
Merci — Cantine Les Sources`;

const E12_3_CE_EMAIL_15_POOL = buildExpressPool("e12-3-ce-email-15", [
  q({
    id: "cem-q1",
    textQ: "Quel régime est prévu ?",
    text: ["Sans gluten", "Sans légumes", "Uniquement dessert"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Menu sans _________.",
    fill: "gluten",
    vfQ: "Sans gluten.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Menu du lundi ?",
    text: ["Riz et poulet", "Pizza", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "riz et _________.",
    fill: "poulet",
    vfQ: "Riz et poulet.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Menu du vendredi ?",
    text: ["Poisson et quinoa", "Poulet seulement", "Sandwich"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "poisson et _________.",
    fill: "quinoa",
    vfQ: "Poisson et quinoa.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Prix du repas ?",
    text: ["7,50 CHF", "75 CHF", "Gratuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ CHF le repas",
    fill: "7,50",
    fillA: ["7.50"],
    vfQ: "7,50 CHF.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Avant quand signaler allergies ?",
    text: ["Mardi 10 h", "Vendredi soir", "Dans un mois"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "avant mardi _________ h",
    fill: "10",
    vfQ: "Mardi 10 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Qui envoie ?",
    text: ["Cantine Les Sources", "Un cinéma", "FitLake"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Cantine Les _________.",
    fill: "Sources",
    vfQ: "Cantine Les Sources.",
    vfC: 0,
  }),
]);

const E12_3_CE_EMAIL_16_TEXT = `De : Service rappel

Objet : Dernier rappel

Bonjour,

Dernier message avant un atelier lunch au travail !
Rendez-vous mardi 3 septembre à 17 h à la place du Village.
L'entrée n'est garantie que si l'inscription est faite au stand d'information.
Apportez une boîte repas et gardez 16 CHF si besoin.

À tout à l'heure,

Service rappel`;

const E12_3_CE_EMAIL_16_POOL = buildExpressPool("e12-3-ce-email-16", [
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
    text: ["un atelier lunch au travail", "un entraînement de basket", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "atelier",
    vfQ: "Le texte parle de l'activité suivante : un atelier lunch au travail.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["une boîte repas", "un casque", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "boîte",
    vfQ: "Il faut prévoir une boîte repas.",
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

const E12_3_CE_EMAIL_17_TEXT = `De : Responsable du projet

Objet : Message de la responsable

Bonjour,

Message de La coach Ana au sujet de une comparaison pain blanc et pain complet.
La rencontre est prévue mercredi 11 septembre à 9 h 45 à la halle des Sports.
Le but reste simple : apprendre à choisir un pain plus nourrissant.
Merci de respecter cette règle : on goûte avant de juger.

Bien cordialement,

Responsable du projet`;

const E12_3_CE_EMAIL_17_POOL = buildExpressPool("e12-3-ce-email-17", [
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
    text: ["une comparaison pain blanc et pain complet", "un atelier mécanique", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "comparaison",
    vfQ: "Le texte parle de l'activité suivante : une comparaison pain blanc et pain complet.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["deux tranches de pain", "une clé anglaise", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "deux",
    vfQ: "Il faut prévoir deux tranches de pain.",
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

const E12_3_CE_EMAIL_18_TEXT = `De : Équipe du samedi

Objet : Organisation du samedi

Bonjour,

L'équipe prépare le salon Harmonie pour une animation fruits de saison.
Les participants arrivent à 11 h 30 avec un fruit de saison.
La date exacte est jeudi 19 septembre.
Après la séance, un court échange expliquera comment réussir à manger selon la saison.

Merci de votre aide,

Équipe du samedi`;

const E12_3_CE_EMAIL_18_POOL = buildExpressPool("e12-3-ce-email-18", [
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
    text: ["une animation fruits de saison", "une séance de coiffure", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "animation",
    vfQ: "Le texte parle de l'activité suivante : une animation fruits de saison.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["un fruit de saison", "un passeport", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "fruit",
    vfQ: "Il faut prévoir un fruit de saison.",
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

const E12_3_CE_EMAIL_19_TEXT = `De : Questionnaire qualité

Objet : Votre avis nous intéresse

Bonjour,

Vous avez récemment participé à une discussion sur les repas rapides à la résidence du Parc.
Pouvez-vous dire si l'horaire de 15 h 45 vous convient ?
La prochaine séance est prévue vendredi 27 septembre.
Votre avis nous aidera à mieux organiser les moments pour améliorer un repas rapide.

Merci pour votre retour,

Questionnaire qualité`;

const E12_3_CE_EMAIL_19_POOL = buildExpressPool("e12-3-ce-email-19", [
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
    text: ["une discussion sur les repas rapides", "un entraînement de basket", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "discussion",
    vfQ: "Le texte parle de l'activité suivante : une discussion sur les repas rapides.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["un ticket de caisse", "un casque", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "ticket",
    vfQ: "Il faut prévoir un ticket de caisse.",
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

const E12_3_CE_EMAIL_20_TEXT = `De : Centre culturel

Objet : Prochaine rencontre

Bonjour,

Nous préparons une prochaine rencontre autour de un pique-nique équilibré.
Elle aura lieu samedi 5 octobre à 18 h 15 à le centre culturel.
Le tarif annoncé est 40 CHF et il reste les vingt premiers inscrits.
Cette fois, chacun devra apporter une nappe.

À bientôt,

Centre culturel`;

const E12_3_CE_EMAIL_20_POOL = buildExpressPool("e12-3-ce-email-20", [
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
    text: ["un pique-nique équilibré", "un atelier mécanique", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "pique",
    vfQ: "Le texte parle de l'activité suivante : un pique-nique équilibré.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["une nappe", "une clé anglaise", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "nappe",
    vfQ: "Il faut prévoir une nappe.",
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

export const E12_3_CE_EMAIL: CommunicationExercise[] = [
readingPoolExercise({
  id: "e12-3-ce-email",
  readingText: E12_3_CE_EMAIL_TEXT,
  questionPool: E12_3_CE_EMAIL_POOL,
  questionCount: 6,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
readingPoolExercise({
  id: "e12-3-ce-email-2",
  readingText: E12_3_CE_EMAIL_2_TEXT,
  questionPool: E12_3_CE_EMAIL_2_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e12-3-ce-email-3",
  readingText: E12_3_CE_EMAIL_3_TEXT,
  questionPool: E12_3_CE_EMAIL_3_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e12-3-ce-email-4",
  readingText: E12_3_CE_EMAIL_4_TEXT,
  questionPool: E12_3_CE_EMAIL_4_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e12-3-ce-email-5",
  readingText: E12_3_CE_EMAIL_5_TEXT,
  questionPool: E12_3_CE_EMAIL_5_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e12-3-ce-email-6",
  readingText: E12_3_CE_EMAIL_6_TEXT,
  questionPool: E12_3_CE_EMAIL_6_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e12-3-ce-email-7",
  readingText: E12_3_CE_EMAIL_7_TEXT,
  questionPool: E12_3_CE_EMAIL_7_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e12-3-ce-email-8",
  readingText: E12_3_CE_EMAIL_8_TEXT,
  questionPool: E12_3_CE_EMAIL_8_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e12-3-ce-email-9",
  readingText: E12_3_CE_EMAIL_9_TEXT,
  questionPool: E12_3_CE_EMAIL_9_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e12-3-ce-email-10",
  readingText: E12_3_CE_EMAIL_10_TEXT,
  questionPool: E12_3_CE_EMAIL_10_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e12-3-ce-email-11",
  readingText: E12_3_CE_EMAIL_11_TEXT,
  questionPool: E12_3_CE_EMAIL_11_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e12-3-ce-email-12",
  readingText: E12_3_CE_EMAIL_12_TEXT,
  questionPool: E12_3_CE_EMAIL_12_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e12-3-ce-email-13",
  readingText: E12_3_CE_EMAIL_13_TEXT,
  questionPool: E12_3_CE_EMAIL_13_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e12-3-ce-email-14",
  readingText: E12_3_CE_EMAIL_14_TEXT,
  questionPool: E12_3_CE_EMAIL_14_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e12-3-ce-email-15",
  readingText: E12_3_CE_EMAIL_15_TEXT,
  questionPool: E12_3_CE_EMAIL_15_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e12-3-ce-email-16",
  readingText: E12_3_CE_EMAIL_16_TEXT,
  questionPool: E12_3_CE_EMAIL_16_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e12-3-ce-email-17",
  readingText: E12_3_CE_EMAIL_17_TEXT,
  questionPool: E12_3_CE_EMAIL_17_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e12-3-ce-email-18",
  readingText: E12_3_CE_EMAIL_18_TEXT,
  questionPool: E12_3_CE_EMAIL_18_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e12-3-ce-email-19",
  readingText: E12_3_CE_EMAIL_19_TEXT,
  questionPool: E12_3_CE_EMAIL_19_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e12-3-ce-email-20",
  readingText: E12_3_CE_EMAIL_20_TEXT,
  questionPool: E12_3_CE_EMAIL_20_POOL,
  questionCount: 6
}),
];

export const E12_3_PE_EMAIL: ExpressPePrompt[] = [

  {
    id: "e12-3-pee-1",
    title: "Commander un panier de légumes",
    situation: "La ferme répond à votre demande d'informations sur les paniers.",
    sourceMessage: {
      from: "La Ferme du Soleil",
      subject: "Nos paniers de légumes",
      body: "Bonjour,\nMerci pour votre message. Nous proposons deux paniers :\nle petit panier à 15 francs et le grand panier à 25 francs.\nLequel voulez-vous ?\nL'équipe de la ferme",
    },
    instruction: "Répondez à la ferme : choisissez un panier, expliquez pour combien de personnes vous cuisinez et demandez où le chercher.",
    points: ["Le panier choisi", "Le nombre de personnes", "Une question sur le lieu"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-3-pee-2",
    title: "Annuler son panier",
    situation: "Vous partez en voyage ; la ferme vous annonce que votre panier sera prêt.",
    sourceMessage: {
      from: "La Ferme du Soleil",
      subject: "Votre panier de samedi",
      body: "Bonjour,\nVotre panier de légumes sera prêt samedi, comme d'habitude, à notre stand du marché.\nÀ samedi !\nL'équipe de la ferme",
    },
    instruction: "Répondez à la ferme : excusez-vous, annulez le panier de cette semaine et expliquez quand vous revenez.",
    points: ["L'excuse", "L'annulation", "La date de votre retour"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-3-pee-3",
    title: "S'inscrire au cours de cuisine",
    situation: "La ferme organise un cours de cuisine diététique.",
    sourceMessage: {
      from: "La Ferme du Soleil",
      subject: "Cours de cuisine diététique",
      body: "Bonjour,\nIl reste des places pour notre cours de cuisine diététique du mercredi 9 avril à 18 h.\nPrix : 40 francs, ingrédients compris.\nPour vous inscrire, répondez à cet e-mail.\nL'équipe de la ferme",
    },
    instruction: "Répondez à la ferme : inscrivez-vous, dites pourquoi ce cours vous intéresse et demandez s'il faut apporter quelque chose.",
    points: ["Votre inscription", "Pourquoi ce cours vous intéresse", "Une question sur le matériel"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-3-pee-4",
    title: "Répondre à la diététicienne",
    situation: "Avant votre premier rendez-vous, la diététicienne vous pose des questions.",
    sourceMessage: {
      from: "Mme Perret, diététicienne",
      subject: "Avant notre rendez-vous",
      body: "Bonjour,\nAvant notre premier rendez-vous, pouvez-vous décrire vos repas d'une journée ?\nQu'est-ce que vous mangez au petit-déjeuner, à midi et le soir ?\nBuvez-vous assez d'eau ?\nMme Perret",
    },
    instruction: "Répondez à la diététicienne : décrivez vos repas d'une journée, parlez de ce que vous buvez et posez une question sur l'alimentation.",
    points: ["Vos repas d'une journée", "Ce que vous buvez", "Une question sur l'alimentation"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-3-pee-5",
    title: "Partager une recette",
    situation: "Une amie a adoré votre plat et vous demande la recette.",
    sourceMessage: {
      from: "Elena",
      subject: "Ta soupe de légumes",
      body: "Coucou,\nTa soupe de légumes de samedi était délicieuse !\nTu peux me donner la recette ? C'est difficile à faire ?\nMerci !\nElena",
    },
    instruction: "Répondez à Elena : donnez les ingrédients, expliquez les étapes de la recette et donnez un petit conseil.",
    points: ["Les ingrédients", "Les étapes de la recette", "Un conseil"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-3-pee-6",
    title: "Conseiller un ami fatigué",
    situation: "Un ami mange mal et se sent fatigué.",
    sourceMessage: {
      from: "Mehdi",
      subject: "Toujours fatigué",
      body: "Salut,\nJe suis fatigué en ce moment. Je mange souvent des pizzas et des sandwichs, et je bois beaucoup de sodas.\nToi, tu manges équilibré, non ? Tu as des conseils ?\nMehdi",
    },
    instruction: "Répondez à Mehdi : expliquez ce que vous mangez, donnez-lui deux conseils simples et proposez-lui de cuisiner ensemble.",
    points: ["Ce que vous mangez", "Deux conseils", "Une proposition de cuisiner ensemble"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-3-pee-7",
    title: "Le goûter de la sortie scolaire",
    situation: "L'école de votre fille organise une sortie et vous écrit.",
    sourceMessage: {
      from: "École du Lac",
      subject: "Sortie de jeudi : le goûter",
      body: "Bonjour,\nPour la sortie de jeudi, chaque enfant apporte un goûter sain : fruits, pain, eau.\nPas de chips ni de sodas, merci.\nMerci de confirmer que votre enfant participe.\nLa maîtresse",
    },
    instruction: "Répondez à la maîtresse : confirmez la participation de votre fille, dites quel goûter vous préparez et posez une question sur la sortie.",
    points: ["La confirmation", "Le goûter préparé", "Une question sur la sortie"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-3-pee-8",
    title: "Inviter une amie au marché",
    situation: "Une amie veut manger plus de légumes, mais elle trouve le supermarché cher.",
    sourceMessage: {
      from: "Sara",
      subject: "Manger mieux",
      body: "Salut,\nJe veux manger plus de légumes, mais au supermarché, c'est cher.\nTu achètes où, toi, tes fruits et tes légumes ?\nSara",
    },
    instruction: "Répondez à Sara : parlez du marché, proposez-lui d'y aller ensemble et donnez un exemple de prix.",
    points: ["Le marché", "Une proposition d'y aller ensemble", "Un exemple de prix"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-3-pee-9",
    title: "Raconter le cours de cuisine",
    situation: "Un ami vous demande des nouvelles de votre cours de cuisine.",
    sourceMessage: {
      from: "Tom",
      subject: "Ton cours de cuisine",
      body: "Salut !\nAlors, ce cours de cuisine diététique hier soir ? C'était comment ?\nTu as appris quoi ?\nTom",
    },
    instruction: "Répondez à Tom : racontez le cours, décrivez une recette apprise et dites si vous recommandez le cours.",
    points: ["Le récit du cours", "Une recette apprise", "Votre recommandation"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-3-pee-10",
    title: "Question au magasin bio",
    situation: "Un nouveau magasin bio a ouvert et vous envoie ses informations.",
    sourceMessage: {
      from: "Magasin Bio Nature",
      subject: "Bienvenue chez Bio Nature",
      body: "Bonjour,\nNotre nouveau magasin a ouvert au centre-ville.\nCette semaine, les fruits et les légumes sont à moitié prix.\nOuvert du lundi au samedi, de 8 h 30 à 19 h.\nL'équipe Bio Nature",
    },
    instruction: "Répondez au magasin : demandez si vous pouvez trouver certains produits, posez une question sur les prix et dites quand vous allez venir.",
    points: ["Les produits recherchés", "Une question sur les prix", "Le jour de votre visite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-3-pee-11",
    title: "Répondre — alimentation (11)",
    situation: "Vous avez reçu un e-mail concernant alimentation.",
sourceMessage: {
  from: "Service Alimentation",
  subject: "Votre demande — référence 1100",
  body: "Bonjour,\nNous avons bien reçu votre message concernant alimentation.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-3-pee-12",
    title: "Répondre — alimentation (12)",
    situation: "Vous avez reçu un e-mail concernant alimentation.",
sourceMessage: {
  from: "Service Alimentation",
  subject: "Votre demande — référence 1200",
  body: "Bonjour,\nNous avons bien reçu votre message concernant alimentation.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-3-pee-13",
    title: "Répondre — alimentation (13)",
    situation: "Vous avez reçu un e-mail concernant alimentation.",
sourceMessage: {
  from: "Service Alimentation",
  subject: "Votre demande — référence 1300",
  body: "Bonjour,\nNous avons bien reçu votre message concernant alimentation.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-3-pee-14",
    title: "Répondre — alimentation (14)",
    situation: "Vous avez reçu un e-mail concernant alimentation.",
sourceMessage: {
  from: "Service Alimentation",
  subject: "Votre demande — référence 1400",
  body: "Bonjour,\nNous avons bien reçu votre message concernant alimentation.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-3-pee-15",
    title: "Répondre — alimentation (15)",
    situation: "Vous avez reçu un e-mail concernant alimentation.",
sourceMessage: {
  from: "Service Alimentation",
  subject: "Votre demande — référence 1500",
  body: "Bonjour,\nNous avons bien reçu votre message concernant alimentation.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-3-pee-16",
    title: "Répondre — alimentation (16)",
    situation: "Vous avez reçu un e-mail concernant alimentation.",
sourceMessage: {
  from: "Service Alimentation",
  subject: "Votre demande — référence 1600",
  body: "Bonjour,\nNous avons bien reçu votre message concernant alimentation.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-3-pee-17",
    title: "Répondre — alimentation (17)",
    situation: "Vous avez reçu un e-mail concernant alimentation.",
sourceMessage: {
  from: "Service Alimentation",
  subject: "Votre demande — référence 1700",
  body: "Bonjour,\nNous avons bien reçu votre message concernant alimentation.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-3-pee-18",
    title: "Répondre — alimentation (18)",
    situation: "Vous avez reçu un e-mail concernant alimentation.",
sourceMessage: {
  from: "Service Alimentation",
  subject: "Votre demande — référence 1800",
  body: "Bonjour,\nNous avons bien reçu votre message concernant alimentation.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-3-pee-19",
    title: "Répondre — alimentation (19)",
    situation: "Vous avez reçu un e-mail concernant alimentation.",
sourceMessage: {
  from: "Service Alimentation",
  subject: "Votre demande — référence 1900",
  body: "Bonjour,\nNous avons bien reçu votre message concernant alimentation.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-3-pee-20",
    title: "Répondre — alimentation (20)",
    situation: "Vous avez reçu un e-mail concernant alimentation.",
sourceMessage: {
  from: "Service Alimentation",
  subject: "Votre demande — référence 2000",
  body: "Bonjour,\nNous avons bien reçu votre message concernant alimentation.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  }
];

/* ════════════════════════════════════════════════════════════════════════════
   E12.4 — Vivre en ville
   ════════════════════════════════════════════════════════════════════════════ */

const E12_4_CE_EMAIL_TEXT = `De : La responsable Nadia

Objet : Inscription à une balade pour lire le plan du quartier

Bonjour,

C'est confirmé : vous avez une place pour une balade pour lire le plan du quartier.
Notez bien le rendez-vous : lundi 6 mai, 9 h, à la Maison des Acacias.
Merci d'apporter un plan papier. La participation est gratuite.
Cette rencontre aide à se repérer plus facilement.

À bientôt,

La responsable Nadia`;

const E12_4_CE_EMAIL_POOL = buildExpressPool("e12-4-ce-email", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Inscription à une balade pour lire le plan du quartier", "Facture oubliée", "Invitation sans date"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Inscription",
    vfQ: "L'objet de l'e-mail est « Inscription à une balade pour lire le plan du quartier ».",
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
    text: ["une balade pour lire le plan du quartier", "une recette de gâteau", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "balade",
    vfQ: "Le texte parle de l'activité suivante : une balade pour lire le plan du quartier.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["un plan papier", "une poêle", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "plan",
    vfQ: "Il faut prévoir un plan papier.",
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

const E12_4_CE_EMAIL_2_TEXT = `De : Accueil du quartier

Objet : Rappel pour mardi 14 mai

Bonjour à toutes et à tous,

Je vous rappelle que un atelier transports publics est prévu mardi 14 mai.
Le groupe se retrouve à 10 h 15 devant la salle Jean-Monnet.
Comme il y a 10 places, merci de prévenir en cas d'absence.
N'oubliez pas une carte de bus et lisez bien cette consigne : les tickets doivent être validés.

Bonne journée,

Accueil du quartier`;

const E12_4_CE_EMAIL_2_POOL = buildExpressPool("e12-4-ce-email-2", [
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
    text: ["un atelier transports publics", "une randonnée en forêt", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "atelier",
    vfQ: "Le texte parle de l'activité suivante : un atelier transports publics.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["une carte de bus", "un sac de couchage", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "carte",
    vfQ: "Il faut prévoir une carte de bus.",
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

const E12_4_CE_EMAIL_3_TEXT = `De : Service activités

Objet : Question avant une visite des services municipaux

Bonjour,

J'ai vu l'annonce pour une visite des services municipaux et je voudrais m'inscrire.
Pouvez-vous confirmer qu'il faut apporter une pièce d'identité ?
Je peux venir mercredi 22 mai à 11 h à le centre du Lac.
Mon objectif est de savoir où faire une demande. Merci pour votre réponse.

Cordialement,

Rami`;

const E12_4_CE_EMAIL_3_POOL = buildExpressPool("e12-4-ce-email-3", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Question avant une visite des services municipaux", "Facture oubliée", "Invitation sans date"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Question",
    vfQ: "L'objet de l'e-mail est « Question avant une visite des services municipaux ».",
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
    text: ["une visite des services municipaux", "un cours de natation", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "visite",
    vfQ: "Le texte parle de l'activité suivante : une visite des services municipaux.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["une pièce d'identité", "un maillot", "un ordinateur cassé"],
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

const E12_4_CE_EMAIL_4_TEXT = `De : Association Bellevue

Objet : Confirmation de votre place

Madame, Monsieur,

Votre place pour une discussion voisins et bruit est réservée.
La séance aura lieu jeudi 30 mai à la ferme des Lilas.
Merci d'arriver à 12 h 30. La participation est de 10 CHF.
Le bénévole Marco sera sur place pour vous accueillir.

Avec nos salutations,

Association Bellevue`;

const E12_4_CE_EMAIL_4_POOL = buildExpressPool("e12-4-ce-email-4", [
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
    text: ["une discussion voisins et bruit", "une recette de gâteau", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "discussion",
    vfQ: "Le texte parle de l'activité suivante : une discussion voisins et bruit.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["un exemple de règle", "une poêle", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "exemple",
    vfQ: "Il faut prévoir un exemple de règle.",
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

const E12_4_CE_EMAIL_5_TEXT = `De : Secrétariat du centre

Objet : Conseil pratique : un sac de tri

Salut,

Petit conseil pour un point info tri des déchets : mets un sac de tri dans ton sac.
Je t'attends vendredi 7 juin à 14 h à le foyer Bellevue.
Si tu veux trier sans se tromper, cette séance est très utile.
Attention : les bouteilles vont dans le bon bac.

À demain,

Noé`;

const E12_4_CE_EMAIL_5_POOL = buildExpressPool("e12-4-ce-email-5", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Conseil pratique : un sac de tri", "Facture oubliée", "Invitation sans date"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Conseil",
    vfQ: "L'objet de l'e-mail est « Conseil pratique : un sac de tri ».",
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
    text: ["un point info tri des déchets", "une randonnée en forêt", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "point",
    vfQ: "Le texte parle de l'activité suivante : un point info tri des déchets.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["un sac de tri", "un sac de couchage", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "sac",
    vfQ: "Il faut prévoir un sac de tri.",
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

const E12_4_CE_EMAIL_6_TEXT = `De : Équipe organisation

Objet : Changement de salle

Bonjour,

Petit changement pour une marche sécurité piétons : la salle prévue n'est plus libre.
Le nouveau lieu est la bibliothèque Nord. La date et l'heure ne changent pas : samedi 15 juin à 15 h 15.
Le prix reste 15 CHF et les 16 places sont gardées.
Merci de préparer un gilet clair.

Merci de votre compréhension,

Équipe organisation`;

const E12_4_CE_EMAIL_6_POOL = buildExpressPool("e12-4-ce-email-6", [
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
    text: ["une marche sécurité piétons", "un cours de natation", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "marche",
    vfQ: "Le texte parle de l'activité suivante : une marche sécurité piétons.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["un gilet clair", "un maillot", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "gilet",
    vfQ: "Il faut prévoir un gilet clair.",
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

const E12_4_CE_EMAIL_7_TEXT = `De : Club des habitants

Objet : Merci pour votre participation

Bonjour,

Merci pour votre présence lors de une réunion jardin en ville à la terrasse du Marché.
Plusieurs personnes ont expliqué que la séance aide à mettre plus de vert dans la rue.
Pour la prochaine fois, nous garderons dimanche 23 juin à 16 h.
Votre remarque sur des graines a été notée.

Bien à vous,

Club des habitants`;

const E12_4_CE_EMAIL_7_POOL = buildExpressPool("e12-4-ce-email-7", [
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
    text: ["une réunion jardin en ville", "une recette de gâteau", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "réunion",
    vfQ: "Le texte parle de l'activité suivante : une réunion jardin en ville.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["des graines", "une poêle", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "graines",
    vfQ: "Il faut prévoir des graines.",
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

const E12_4_CE_EMAIL_8_TEXT = `De : Maison commune

Objet : Invitation ville

Bonjour les amis,

Ça vous dit de venir avec moi à un atelier trouver une adresse ?
Le rendez-vous est lundi 1er juillet à 17 h 30 à le local des Jeunes.
Il faut réserver directement sur place car il y a seulement 20 places.
Apportez un carnet d'adresses et un peu de bonne humeur.

À très vite,

Mina`;

const E12_4_CE_EMAIL_8_POOL = buildExpressPool("e12-4-ce-email-8", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Invitation ville", "Facture oubliée", "Invitation sans date"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Invitation",
    vfQ: "L'objet de l'e-mail est « Invitation ville ».",
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
    text: ["un atelier trouver une adresse", "une randonnée en forêt", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "atelier",
    vfQ: "Le texte parle de l'activité suivante : un atelier trouver une adresse.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["un carnet d'adresses", "un sac de couchage", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "carnet",
    vfQ: "Il faut prévoir un carnet d'adresses.",
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

const E12_4_CE_EMAIL_9_TEXT = `De : Bureau des inscriptions

Objet : Liste du matériel

Bonjour,

Pour une présentation des marchés locaux, la petite liste est simple : un panier, une bouteille d'eau et un stylo.
Le rendez-vous reste mardi 9 juillet à 18 h à la salle des Fêtes.
Le tarif est 25 CHF.
Le thème principal sera : acheter près de chez soi.

Merci,

Bureau des inscriptions`;

const E12_4_CE_EMAIL_9_POOL = buildExpressPool("e12-4-ce-email-9", [
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
    text: ["une présentation des marchés locaux", "un cours de natation", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "présentation",
    vfQ: "Le texte parle de l'activité suivante : une présentation des marchés locaux.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["un panier", "un maillot", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "panier",
    vfQ: "Il faut prévoir un panier.",
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

const E12_4_CE_EMAIL_10_TEXT = `De : Info loisirs

Objet : Places disponibles

Bonjour,

Bonne nouvelle : une séance comparer ville et campagne n'est pas complet, il reste 24 places.
La séance aura lieu mercredi 17 juillet à 18 h 45 à le jardin partagé.
Merci de vous inscrire avec le QR code de l'affiche avant demain soir.
Prévoyez deux photos. Le prix est 30 CHF.

Cordialement,

Info loisirs`;

const E12_4_CE_EMAIL_10_POOL = buildExpressPool("e12-4-ce-email-10", [
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
    text: ["une séance comparer ville et campagne", "une recette de gâteau", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "séance",
    vfQ: "Le texte parle de l'activité suivante : une séance comparer ville et campagne.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["deux photos", "une poêle", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "deux",
    vfQ: "Il faut prévoir deux photos.",
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

const E12_4_CE_EMAIL_11_TEXT = `De : Groupe des bénévoles

Objet : Retour sur l'activité

Bonjour,

Depuis un café citoyen sur les espaces verts, nous recevons des messages très positifs.
Les participants ont surtout apprécié de imaginer un parc plus agréable.
La prochaine date est jeudi 25 juillet à 19 h à le café du Pont.
Cette fois, merci d'apporter une idée d'arbre.

Au plaisir de vous revoir,

Groupe des bénévoles`;

const E12_4_CE_EMAIL_11_POOL = buildExpressPool("e12-4-ce-email-11", [
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
    text: ["un café citoyen sur les espaces verts", "une randonnée en forêt", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "café",
    vfQ: "Le texte parle de l'activité suivante : un café citoyen sur les espaces verts.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["une idée d'arbre", "un sac de couchage", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "idée",
    vfQ: "Il faut prévoir une idée d'arbre.",
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

const E12_4_CE_EMAIL_12_TEXT = `De : Réception

Objet : Rendez-vous à 8 h 30

Bonjour,

Votre rendez-vous lié à une information travaux de rue commence à 8 h 30.
Merci d'arriver à la maison médicale dix minutes avant.
La date est vendredi 2 août et le prix est 6 CHF.
La docteure Morel conseille de préparer une photo de la rue.

Meilleures salutations,

Réception`;

const E12_4_CE_EMAIL_12_POOL = buildExpressPool("e12-4-ce-email-12", [
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
    text: ["une information travaux de rue", "un cours de natation", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "information",
    vfQ: "Le texte parle de l'activité suivante : une information travaux de rue.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["une photo de la rue", "un maillot", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "photo",
    vfQ: "Il faut prévoir une photo de la rue.",
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

const E12_4_CE_EMAIL_13_TEXT = `De : Atelier A2

Objet : Préparation de groupe

Chers participants,

Pour que un atelier vivre en immeuble se passe bien, nous formons deux petits groupes.
Le premier groupe est attendu à 13 h à le parc des Amandiers.
La séance a lieu samedi 10 août avec l'entraîneuse Emma.
Merci de vérifier le règlement de l'immeuble avant de partir.

À bientôt,

Atelier A2`;

const E12_4_CE_EMAIL_13_POOL = buildExpressPool("e12-4-ce-email-13", [
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
    text: ["un atelier vivre en immeuble", "une recette de gâteau", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "atelier",
    vfQ: "Le texte parle de l'activité suivante : un atelier vivre en immeuble.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["le règlement de l'immeuble", "une poêle", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "règlement",
    vfQ: "Il faut prévoir le règlement de l'immeuble.",
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

const E12_4_CE_EMAIL_14_TEXT = `De : Coordination locale

Objet : Demande d'information

Bonjour,

Je vous écris car je cherche des informations sur une découverte des pistes cyclables.
J'ai noté la date, dimanche 18 août, et l'heure, 14 h 45, à la boutique Horizon.
Pouvez-vous confirmer le prix de 11 CHF ?
Je viens surtout pour rouler sans gêner les piétons.

Merci d'avance,

Salma`;

const E12_4_CE_EMAIL_14_POOL = buildExpressPool("e12-4-ce-email-14", [
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
    text: ["une découverte des pistes cyclables", "une randonnée en forêt", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "découverte",
    vfQ: "Le texte parle de l'activité suivante : une découverte des pistes cyclables.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["un casque de vélo", "un sac de couchage", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "casque",
    vfQ: "Il faut prévoir un casque de vélo.",
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

const E12_4_CE_EMAIL_15_TEXT = `De : Association Quartier Vert
Objet : Atelier compost — places restantes

Bonjour,
Il reste 5 places pour l'atelier compost du samedi 9 h 30 au jardin partagé (impasse des Lilas).
Durée 90 minutes. Apportez des gants.
Enfants dès 8 ans bienvenus avec un adulte.
Inscription : répondre à cet e-mail avant vendredi midi.
À bientôt, Association Quartier Vert`;

const E12_4_CE_EMAIL_15_POOL = buildExpressPool("e12-4-ce-email-15", [
  q({
    id: "cem-q1",
    textQ: "Combien de places restantes ?",
    text: ["5", "50", "Aucune"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il reste _________ places",
    fill: "5",
    vfQ: "5 places.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quand ?",
    text: ["Samedi 9 h 30", "Lundi 20 h", "Dimanche"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "samedi _________ h 30",
    fill: "9",
    vfQ: "À 9 h 30.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Où ?",
    text: ["Jardin partagé, impasse des Lilas", "Hôpital", "Gare"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "impasse des _________.",
    fill: "Lilas",
    vfQ: "Impasse des Lilas.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Durée ?",
    text: ["90 minutes", "10 minutes", "5 heures"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Durée _________ minutes",
    fill: "90",
    vfQ: "90 min.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Que apporter ?",
    text: ["Des gants", "Un piano", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Apportez des _________.",
    fill: "gants",
    vfQ: "Des gants.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Date limite inscription ?",
    text: ["Vendredi midi", "Après l'atelier", "Dans un an"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "avant _________ midi",
    fill: "vendredi",
    vfQ: "Vendredi midi.",
    vfC: 0,
  }),
]);

const E12_4_CE_EMAIL_16_TEXT = `De : Service rappel

Objet : Dernier rappel

Bonjour,

Dernier message avant une visite de la médiathèque !
Rendez-vous mardi 3 septembre à 17 h à la place du Village.
L'entrée n'est garantie que si l'inscription est faite au stand d'information.
Apportez une carte de lecteur et gardez 16 CHF si besoin.

À tout à l'heure,

Service rappel`;

const E12_4_CE_EMAIL_16_POOL = buildExpressPool("e12-4-ce-email-16", [
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
    text: ["une visite de la médiathèque", "une recette de gâteau", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "visite",
    vfQ: "Le texte parle de l'activité suivante : une visite de la médiathèque.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["une carte de lecteur", "une poêle", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "carte",
    vfQ: "Il faut prévoir une carte de lecteur.",
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

const E12_4_CE_EMAIL_17_TEXT = `De : Responsable du projet

Objet : Message de la responsable

Bonjour,

Message de La coach Ana au sujet de un parcours commerces utiles.
La rencontre est prévue mercredi 11 septembre à 9 h 45 à la halle des Sports.
Le but reste simple : apprendre à trouver les magasins essentiels.
Merci de respecter cette règle : les achats ne sont pas obligatoires.

Bien cordialement,

Responsable du projet`;

const E12_4_CE_EMAIL_17_POOL = buildExpressPool("e12-4-ce-email-17", [
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
    text: ["un parcours commerces utiles", "une randonnée en forêt", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "parcours",
    vfQ: "Le texte parle de l'activité suivante : un parcours commerces utiles.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["une liste de courses", "un sac de couchage", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "liste",
    vfQ: "Il faut prévoir une liste de courses.",
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

const E12_4_CE_EMAIL_18_TEXT = `De : Équipe du samedi

Objet : Organisation du samedi

Bonjour,

L'équipe prépare le salon Harmonie pour un échange sur les animaux en ville.
Les participants arrivent à 11 h 30 avec une laisse.
La date exacte est jeudi 19 septembre.
Après la séance, un court échange expliquera comment réussir à respecter les voisins et les animaux.

Merci de votre aide,

Équipe du samedi`;

const E12_4_CE_EMAIL_18_POOL = buildExpressPool("e12-4-ce-email-18", [
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
    text: ["un échange sur les animaux en ville", "un cours de natation", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "échange",
    vfQ: "Le texte parle de l'activité suivante : un échange sur les animaux en ville.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["une laisse", "un maillot", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "laisse",
    vfQ: "Il faut prévoir une laisse.",
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

const E12_4_CE_EMAIL_19_TEXT = `De : Questionnaire qualité

Objet : Votre avis nous intéresse

Bonjour,

Vous avez récemment participé à une lecture des panneaux publics à la résidence du Parc.
Pouvez-vous dire si l'horaire de 15 h 45 vous convient ?
La prochaine séance est prévue vendredi 27 septembre.
Votre avis nous aidera à mieux organiser les moments pour comprendre une consigne publique.

Merci pour votre retour,

Questionnaire qualité`;

const E12_4_CE_EMAIL_19_POOL = buildExpressPool("e12-4-ce-email-19", [
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
    text: ["une lecture des panneaux publics", "une recette de gâteau", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "lecture",
    vfQ: "Le texte parle de l'activité suivante : une lecture des panneaux publics.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["un panneau photographié", "une poêle", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "panneau",
    vfQ: "Il faut prévoir un panneau photographié.",
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

const E12_4_CE_EMAIL_20_TEXT = `De : Centre culturel

Objet : Prochaine rencontre

Bonjour,

Nous préparons une prochaine rencontre autour de un projet fresque de quartier.
Elle aura lieu samedi 5 octobre à 18 h 15 à le centre culturel.
Le tarif annoncé est 40 CHF et il reste les vingt premiers inscrits.
Cette fois, chacun devra apporter un croquis.

À bientôt,

Centre culturel`;

const E12_4_CE_EMAIL_20_POOL = buildExpressPool("e12-4-ce-email-20", [
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
    text: ["un projet fresque de quartier", "une randonnée en forêt", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "projet",
    vfQ: "Le texte parle de l'activité suivante : un projet fresque de quartier.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["un croquis", "un sac de couchage", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "croquis",
    vfQ: "Il faut prévoir un croquis.",
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

export const E12_4_CE_EMAIL: CommunicationExercise[] = [
readingPoolExercise({
  id: "e12-4-ce-email",
  readingText: E12_4_CE_EMAIL_TEXT,
  questionPool: E12_4_CE_EMAIL_POOL,
  questionCount: 6,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
readingPoolExercise({
  id: "e12-4-ce-email-2",
  readingText: E12_4_CE_EMAIL_2_TEXT,
  questionPool: E12_4_CE_EMAIL_2_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e12-4-ce-email-3",
  readingText: E12_4_CE_EMAIL_3_TEXT,
  questionPool: E12_4_CE_EMAIL_3_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e12-4-ce-email-4",
  readingText: E12_4_CE_EMAIL_4_TEXT,
  questionPool: E12_4_CE_EMAIL_4_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e12-4-ce-email-5",
  readingText: E12_4_CE_EMAIL_5_TEXT,
  questionPool: E12_4_CE_EMAIL_5_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e12-4-ce-email-6",
  readingText: E12_4_CE_EMAIL_6_TEXT,
  questionPool: E12_4_CE_EMAIL_6_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e12-4-ce-email-7",
  readingText: E12_4_CE_EMAIL_7_TEXT,
  questionPool: E12_4_CE_EMAIL_7_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e12-4-ce-email-8",
  readingText: E12_4_CE_EMAIL_8_TEXT,
  questionPool: E12_4_CE_EMAIL_8_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e12-4-ce-email-9",
  readingText: E12_4_CE_EMAIL_9_TEXT,
  questionPool: E12_4_CE_EMAIL_9_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e12-4-ce-email-10",
  readingText: E12_4_CE_EMAIL_10_TEXT,
  questionPool: E12_4_CE_EMAIL_10_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e12-4-ce-email-11",
  readingText: E12_4_CE_EMAIL_11_TEXT,
  questionPool: E12_4_CE_EMAIL_11_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e12-4-ce-email-12",
  readingText: E12_4_CE_EMAIL_12_TEXT,
  questionPool: E12_4_CE_EMAIL_12_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e12-4-ce-email-13",
  readingText: E12_4_CE_EMAIL_13_TEXT,
  questionPool: E12_4_CE_EMAIL_13_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e12-4-ce-email-14",
  readingText: E12_4_CE_EMAIL_14_TEXT,
  questionPool: E12_4_CE_EMAIL_14_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e12-4-ce-email-15",
  readingText: E12_4_CE_EMAIL_15_TEXT,
  questionPool: E12_4_CE_EMAIL_15_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e12-4-ce-email-16",
  readingText: E12_4_CE_EMAIL_16_TEXT,
  questionPool: E12_4_CE_EMAIL_16_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e12-4-ce-email-17",
  readingText: E12_4_CE_EMAIL_17_TEXT,
  questionPool: E12_4_CE_EMAIL_17_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e12-4-ce-email-18",
  readingText: E12_4_CE_EMAIL_18_TEXT,
  questionPool: E12_4_CE_EMAIL_18_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e12-4-ce-email-19",
  readingText: E12_4_CE_EMAIL_19_TEXT,
  questionPool: E12_4_CE_EMAIL_19_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e12-4-ce-email-20",
  readingText: E12_4_CE_EMAIL_20_TEXT,
  questionPool: E12_4_CE_EMAIL_20_POOL,
  questionCount: 6
}),
];

export const E12_4_PE_EMAIL: ExpressPePrompt[] = [

  {
    id: "e12-4-pee-1",
    title: "Questions sur les travaux",
    situation: "La commune annonce des travaux dans votre rue.",
    sourceMessage: {
      from: "Administration communale",
      subject: "Travaux dans votre rue",
      body: "Bonjour,\nDes travaux commencent dans votre rue le lundi 5 mai et vont durer trois semaines.\nPendant les travaux, la rue est fermée aux voitures.\nPour toute question, répondez à cet e-mail.\nL'administration communale",
    },
    instruction: "Répondez à la commune : posez une question sur les horaires des travaux, expliquez votre problème de parking et demandez une solution.",
    points: ["Une question sur les horaires", "Votre problème de parking", "Une demande de solution"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-4-pee-2",
    title: "Signaler un problème",
    situation: "La commune invite les habitants à signaler les problèmes du quartier.",
    sourceMessage: {
      from: "Administration communale",
      subject: "Votre quartier vous écoute",
      body: "Bonjour,\nVous pouvez maintenant signaler les problèmes de votre quartier par e-mail : éclairage, propreté, routes…\nNous répondons sous trois jours.\nL'administration communale",
    },
    instruction: "Répondez à la commune : signalez un lampadaire cassé, dites où il se trouve et depuis quand il ne fonctionne plus.",
    points: ["Le problème signalé", "Le lieu exact", "Depuis quand"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-4-pee-3",
    title: "Inviter un ami à la fête du quartier",
    situation: "Un ami vous demande vos projets pour le week-end du 14 juin.",
    sourceMessage: {
      from: "Ivan",
      subject: "Le week-end du 14 juin",
      body: "Salut !\nTu fais quoi le week-end du 14 juin ?\nOn peut peut-être faire quelque chose ensemble ?\nIvan",
    },
    instruction: "Répondez à Ivan : parlez de la fête du quartier, invitez-le et donnez les informations pratiques (lieu, heure, programme).",
    points: ["La fête du quartier", "L'invitation", "Les informations pratiques"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-4-pee-4",
    title: "Accueillir un nouveau voisin",
    situation: "Un nouveau voisin vient d'arriver dans votre immeuble et vous pose des questions.",
    sourceMessage: {
      from: "Emre",
      subject: "Nouveaux voisins",
      body: "Bonjour,\nNous venons d'arriver dans l'immeuble, au deuxième étage.\nOù est-ce qu'on peut faire les courses dans le quartier ?\nEt quel bus va au centre-ville ?\nMerci d'avance,\nEmre",
    },
    instruction: "Répondez à Emre : souhaitez-lui la bienvenue, expliquez où faire les courses et donnez les informations sur le bus.",
    points: ["Un mot de bienvenue", "Où faire les courses", "Les informations sur le bus"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-4-pee-5",
    title: "Renouveler son abonnement de bus",
    situation: "Les transports municipaux vous écrivent au sujet de votre abonnement.",
    sourceMessage: {
      from: "Transports municipaux",
      subject: "Votre abonnement se termine",
      body: "Bonjour,\nVotre abonnement de bus se termine à la fin du mois.\nVoulez-vous le renouveler ? Abonnement mensuel : 70 francs ; annuel : 700 francs.\nLes transports municipaux",
    },
    instruction: "Répondez aux transports : renouvelez votre abonnement, choisissez une formule et posez une question sur le nouvel itinéraire du bus 7.",
    points: ["Le renouvellement", "La formule choisie", "Une question sur l'itinéraire"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-4-pee-6",
    title: "Devenir bénévole",
    situation: "L'association de quartier cherche des bénévoles pour la fête.",
    sourceMessage: {
      from: "Association du quartier",
      subject: "Recherche de bénévoles",
      body: "Bonjour,\nNous cherchons des bénévoles pour la fête du quartier du samedi 14 juin.\nAu programme : installation, buvette, jeux pour les enfants.\nQui veut nous aider ?\nL'association du quartier",
    },
    instruction: "Répondez à l'association : proposez votre aide, dites ce que vous préférez faire et donnez vos disponibilités.",
    points: ["Votre proposition d'aide", "L'activité préférée", "Vos disponibilités"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-4-pee-7",
    title: "Se plaindre du bruit",
    situation: "La régie de votre immeuble demande l'avis des habitants.",
    sourceMessage: {
      from: "Régie Lambert",
      subject: "Votre avis sur l'immeuble",
      body: "Bonjour,\nNous faisons le point sur la vie de l'immeuble.\nAvez-vous des remarques ou des problèmes à signaler ?\nLa régie Lambert",
    },
    instruction: "Répondez à la régie : expliquez le problème de bruit des travaux, dites à quelles heures c'est difficile et demandez une solution.",
    points: ["Le problème de bruit", "Les heures difficiles", "Une demande de solution"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-4-pee-8",
    title: "Décrire son quartier",
    situation: "Une amie cherche un appartement dans votre ville.",
    sourceMessage: {
      from: "Lucia",
      subject: "Ton quartier",
      body: "Coucou,\nJe cherche un appartement dans ta ville.\nTon quartier est bien ? Il y a des magasins, des transports ?\nRaconte-moi !\nLucia",
    },
    instruction: "Répondez à Lucia : décrivez votre quartier, parlez des transports et des magasins, et dites ce que vous préférez dans ce quartier.",
    points: ["La description du quartier", "Les transports et les magasins", "Ce que vous préférez"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-4-pee-9",
    title: "S'inscrire à la bibliothèque",
    situation: "La bibliothèque municipale annonce ses nouveaux horaires.",
    sourceMessage: {
      from: "Bibliothèque municipale",
      subject: "Nouveaux horaires",
      body: "Bonjour,\nBonne nouvelle : la bibliothèque ouvre maintenant aussi le dimanche matin, de 9 h à 12 h.\nL'inscription est gratuite pour les habitants de la commune.\nLa bibliothèque municipale",
    },
    instruction: "Répondez à la bibliothèque : demandez comment s'inscrire, posez une question sur les livres pour enfants et dites quand vous voulez venir.",
    points: ["Une question sur l'inscription", "Une question sur les livres pour enfants", "Le jour de votre visite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-4-pee-10",
    title: "Donner son avis sur le marché",
    situation: "La commune demande l'avis des habitants sur le marché du mercredi.",
    sourceMessage: {
      from: "Administration communale",
      subject: "Votre avis sur le marché",
      body: "Bonjour,\nNous préparons le programme de l'année prochaine.\nQue pensez-vous du marché du mercredi ? Qu'est-ce qu'on peut améliorer ?\nMerci pour vos réponses.\nL'administration communale",
    },
    instruction: "Répondez à la commune : donnez votre avis sur le marché, dites ce que vous y achetez et proposez une amélioration.",
    points: ["Votre avis", "Ce que vous achetez", "Une proposition d'amélioration"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-4-pee-11",
    title: "Répondre — la ville (11)",
    situation: "Vous avez reçu un e-mail concernant la ville.",
sourceMessage: {
  from: "Service La ville",
  subject: "Votre demande — référence 1100",
  body: "Bonjour,\nNous avons bien reçu votre message concernant la ville.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-4-pee-12",
    title: "Répondre — la ville (12)",
    situation: "Vous avez reçu un e-mail concernant la ville.",
sourceMessage: {
  from: "Service La ville",
  subject: "Votre demande — référence 1200",
  body: "Bonjour,\nNous avons bien reçu votre message concernant la ville.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-4-pee-13",
    title: "Répondre — la ville (13)",
    situation: "Vous avez reçu un e-mail concernant la ville.",
sourceMessage: {
  from: "Service La ville",
  subject: "Votre demande — référence 1300",
  body: "Bonjour,\nNous avons bien reçu votre message concernant la ville.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-4-pee-14",
    title: "Répondre — la ville (14)",
    situation: "Vous avez reçu un e-mail concernant la ville.",
sourceMessage: {
  from: "Service La ville",
  subject: "Votre demande — référence 1400",
  body: "Bonjour,\nNous avons bien reçu votre message concernant la ville.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-4-pee-15",
    title: "Répondre — la ville (15)",
    situation: "Vous avez reçu un e-mail concernant la ville.",
sourceMessage: {
  from: "Service La ville",
  subject: "Votre demande — référence 1500",
  body: "Bonjour,\nNous avons bien reçu votre message concernant la ville.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-4-pee-16",
    title: "Répondre — la ville (16)",
    situation: "Vous avez reçu un e-mail concernant la ville.",
sourceMessage: {
  from: "Service La ville",
  subject: "Votre demande — référence 1600",
  body: "Bonjour,\nNous avons bien reçu votre message concernant la ville.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-4-pee-17",
    title: "Répondre — la ville (17)",
    situation: "Vous avez reçu un e-mail concernant la ville.",
sourceMessage: {
  from: "Service La ville",
  subject: "Votre demande — référence 1700",
  body: "Bonjour,\nNous avons bien reçu votre message concernant la ville.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-4-pee-18",
    title: "Répondre — la ville (18)",
    situation: "Vous avez reçu un e-mail concernant la ville.",
sourceMessage: {
  from: "Service La ville",
  subject: "Votre demande — référence 1800",
  body: "Bonjour,\nNous avons bien reçu votre message concernant la ville.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-4-pee-19",
    title: "Répondre — la ville (19)",
    situation: "Vous avez reçu un e-mail concernant la ville.",
sourceMessage: {
  from: "Service La ville",
  subject: "Votre demande — référence 1900",
  body: "Bonjour,\nNous avons bien reçu votre message concernant la ville.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-4-pee-20",
    title: "Répondre — la ville (20)",
    situation: "Vous avez reçu un e-mail concernant la ville.",
sourceMessage: {
  from: "Service La ville",
  subject: "Votre demande — référence 2000",
  body: "Bonjour,\nNous avons bien reçu votre message concernant la ville.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  }
];

/* ════════════════════════════════════════════════════════════════════════════
   E12.5 — Prendre soin de soi
   ════════════════════════════════════════════════════════════════════════════ */

const E12_5_CE_EMAIL_TEXT = `De : La responsable Nadia

Objet : Inscription à un atelier bonnes résolutions réalistes

Bonjour,

C'est confirmé : vous avez une place pour un atelier bonnes résolutions réalistes.
Notez bien le rendez-vous : lundi 6 mai, 9 h, à la Maison des Acacias.
Merci d'apporter une liste de trois objectifs. La participation est gratuite.
Cette rencontre aide à choisir une résolution possible.

À bientôt,

La responsable Nadia`;

const E12_5_CE_EMAIL_POOL = buildExpressPool("e12-5-ce-email", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Inscription à un atelier bonnes résolutions réalistes", "Facture oubliée", "Invitation sans date"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Inscription",
    vfQ: "L'objet de l'e-mail est « Inscription à un atelier bonnes résolutions réalistes ».",
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
    text: ["un atelier bonnes résolutions réalistes", "un contrôle de vocabulaire", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "atelier",
    vfQ: "Le texte parle de l'activité suivante : un atelier bonnes résolutions réalistes.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["une liste de trois objectifs", "un marteau", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "liste",
    vfQ: "Il faut prévoir une liste de trois objectifs.",
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

const E12_5_CE_EMAIL_2_TEXT = `De : Accueil du quartier

Objet : Rappel pour mardi 14 mai

Bonjour à toutes et à tous,

Je vous rappelle que une séance relaxation courte est prévu mardi 14 mai.
Le groupe se retrouve à 10 h 15 devant la salle Jean-Monnet.
Comme il y a 10 places, merci de prévenir en cas d'absence.
N'oubliez pas un coussin et lisez bien cette consigne : les téléphones restent hors du cercle.

Bonne journée,

Accueil du quartier`;

const E12_5_CE_EMAIL_2_POOL = buildExpressPool("e12-5-ce-email-2", [
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
    text: ["une séance relaxation courte", "une réparation de scooter", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "séance",
    vfQ: "Le texte parle de l'activité suivante : une séance relaxation courte.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["un coussin", "un casque de moto", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "coussin",
    vfQ: "Il faut prévoir un coussin.",
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

const E12_5_CE_EMAIL_3_TEXT = `De : Service activités

Objet : Question avant une information sur les insomnies

Bonjour,

J'ai vu l'annonce pour une information sur les insomnies et je voudrais m'inscrire.
Pouvez-vous confirmer qu'il faut apporter un carnet de nuit ?
Je peux venir mercredi 22 mai à 11 h à le centre du Lac.
Mon objectif est de repérer ce qui empêche de dormir. Merci pour votre réponse.

Cordialement,

Rami`;

const E12_5_CE_EMAIL_3_POOL = buildExpressPool("e12-5-ce-email-3", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Question avant une information sur les insomnies", "Facture oubliée", "Invitation sans date"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Question",
    vfQ: "L'objet de l'e-mail est « Question avant une information sur les insomnies ».",
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
    text: ["une information sur les insomnies", "une réunion de chantier", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "information",
    vfQ: "Le texte parle de l'activité suivante : une information sur les insomnies.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["un carnet de nuit", "une facture", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "carnet",
    vfQ: "Il faut prévoir un carnet de nuit.",
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

const E12_5_CE_EMAIL_4_TEXT = `De : Association Bellevue

Objet : Confirmation de votre place

Madame, Monsieur,

Votre place pour un atelier soin du visage est réservée.
La séance aura lieu jeudi 30 mai à la ferme des Lilas.
Merci d'arriver à 12 h 30. La participation est de 10 CHF.
Le bénévole Marco sera sur place pour vous accueillir.

Avec nos salutations,

Association Bellevue`;

const E12_5_CE_EMAIL_4_POOL = buildExpressPool("e12-5-ce-email-4", [
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
    text: ["un atelier soin du visage", "un contrôle de vocabulaire", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "atelier",
    vfQ: "Le texte parle de l'activité suivante : un atelier soin du visage.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["une serviette douce", "un marteau", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "serviette",
    vfQ: "Il faut prévoir une serviette douce.",
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

const E12_5_CE_EMAIL_5_TEXT = `De : Secrétariat du centre

Objet : Conseil pratique : une brosse à dents

Salut,

Petit conseil pour une discussion hygiène quotidienne : mets une brosse à dents dans ton sac.
Je t'attends vendredi 7 juin à 14 h à le foyer Bellevue.
Si tu veux garder de bonnes habitudes, cette séance est très utile.
Attention : les affaires personnelles restent dans le sac.

À demain,

Noé`;

const E12_5_CE_EMAIL_5_POOL = buildExpressPool("e12-5-ce-email-5", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Conseil pratique : une brosse à dents", "Facture oubliée", "Invitation sans date"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Conseil",
    vfQ: "L'objet de l'e-mail est « Conseil pratique : une brosse à dents ».",
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
    text: ["une discussion hygiène quotidienne", "une réparation de scooter", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "discussion",
    vfQ: "Le texte parle de l'activité suivante : une discussion hygiène quotidienne.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["une brosse à dents", "un casque de moto", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "brosse",
    vfQ: "Il faut prévoir une brosse à dents.",
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

const E12_5_CE_EMAIL_6_TEXT = `De : Équipe organisation

Objet : Changement de salle

Bonjour,

Petit changement pour un cours respiration anti-stress : la salle prévue n'est plus libre.
Le nouveau lieu est la bibliothèque Nord. La date et l'heure ne changent pas : samedi 15 juin à 15 h 15.
Le prix reste 15 CHF et les 16 places sont gardées.
Merci de préparer un minuteur.

Merci de votre compréhension,

Équipe organisation`;

const E12_5_CE_EMAIL_6_POOL = buildExpressPool("e12-5-ce-email-6", [
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
    text: ["un cours respiration anti-stress", "une réunion de chantier", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "cours",
    vfQ: "Le texte parle de l'activité suivante : un cours respiration anti-stress.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["un minuteur", "une facture", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "minuteur",
    vfQ: "Il faut prévoir un minuteur.",
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

const E12_5_CE_EMAIL_7_TEXT = `De : Club des habitants

Objet : Merci pour votre participation

Bonjour,

Merci pour votre présence lors de une séance organiser sa semaine à la terrasse du Marché.
Plusieurs personnes ont expliqué que la séance aide à prévoir du repos.
Pour la prochaine fois, nous garderons dimanche 23 juin à 16 h.
Votre remarque sur un agenda a été notée.

Bien à vous,

Club des habitants`;

const E12_5_CE_EMAIL_7_POOL = buildExpressPool("e12-5-ce-email-7", [
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
    text: ["une séance organiser sa semaine", "un contrôle de vocabulaire", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "séance",
    vfQ: "Le texte parle de l'activité suivante : une séance organiser sa semaine.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["un agenda", "un marteau", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "agenda",
    vfQ: "Il faut prévoir un agenda.",
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

const E12_5_CE_EMAIL_8_TEXT = `De : Maison commune

Objet : Invitation bien-être

Bonjour les amis,

Ça vous dit de venir avec moi à un atelier pause sans écran ?
Le rendez-vous est lundi 1er juillet à 17 h 30 à le local des Jeunes.
Il faut réserver directement sur place car il y a seulement 20 places.
Apportez une boîte pour le téléphone et un peu de bonne humeur.

À très vite,

Mina`;

const E12_5_CE_EMAIL_8_POOL = buildExpressPool("e12-5-ce-email-8", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Invitation bien-être", "Facture oubliée", "Invitation sans date"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Invitation",
    vfQ: "L'objet de l'e-mail est « Invitation bien-être ».",
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
    text: ["un atelier pause sans écran", "une réparation de scooter", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "atelier",
    vfQ: "Le texte parle de l'activité suivante : un atelier pause sans écran.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["une boîte pour le téléphone", "un casque de moto", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "boîte",
    vfQ: "Il faut prévoir une boîte pour le téléphone.",
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

const E12_5_CE_EMAIL_9_TEXT = `De : Bureau des inscriptions

Objet : Liste du matériel

Bonjour,

Pour une rencontre image de soi, la petite liste est simple : un miroir de poche, une bouteille d'eau et un stylo.
Le rendez-vous reste mardi 9 juillet à 18 h à la salle des Fêtes.
Le tarif est 25 CHF.
Le thème principal sera : se parler avec respect.

Merci,

Bureau des inscriptions`;

const E12_5_CE_EMAIL_9_POOL = buildExpressPool("e12-5-ce-email-9", [
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
    text: ["une rencontre image de soi", "une réunion de chantier", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "rencontre",
    vfQ: "Le texte parle de l'activité suivante : une rencontre image de soi.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["un miroir de poche", "une facture", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "miroir",
    vfQ: "Il faut prévoir un miroir de poche.",
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

const E12_5_CE_EMAIL_10_TEXT = `De : Info loisirs

Objet : Places disponibles

Bonjour,

Bonne nouvelle : un moment bain de pieds n'est pas complet, il reste 24 places.
La séance aura lieu mercredi 17 juillet à 18 h 45 à le jardin partagé.
Merci de vous inscrire avec le QR code de l'affiche avant demain soir.
Prévoyez une petite bassine. Le prix est 30 CHF.

Cordialement,

Info loisirs`;

const E12_5_CE_EMAIL_10_POOL = buildExpressPool("e12-5-ce-email-10", [
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
    text: ["un moment bain de pieds", "un contrôle de vocabulaire", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "moment",
    vfQ: "Le texte parle de l'activité suivante : un moment bain de pieds.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["une petite bassine", "un marteau", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "petite",
    vfQ: "Il faut prévoir une petite bassine.",
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

const E12_5_CE_EMAIL_11_TEXT = `De : Groupe des bénévoles

Objet : Retour sur l'activité

Bonjour,

Depuis une initiation automassage, nous recevons des messages très positifs.
Les participants ont surtout apprécié de soulager une tension légère.
La prochaine date est jeudi 25 juillet à 19 h à le café du Pont.
Cette fois, merci d'apporter une balle souple.

Au plaisir de vous revoir,

Groupe des bénévoles`;

const E12_5_CE_EMAIL_11_POOL = buildExpressPool("e12-5-ce-email-11", [
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
    text: ["une initiation automassage", "une réparation de scooter", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "initiation",
    vfQ: "Le texte parle de l'activité suivante : une initiation automassage.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["une balle souple", "un casque de moto", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "balle",
    vfQ: "Il faut prévoir une balle souple.",
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

const E12_5_CE_EMAIL_12_TEXT = `De : Réception

Objet : Rendez-vous à 8 h 30

Bonjour,

Votre rendez-vous lié à un échange sur les habitudes du soir commence à 8 h 30.
Merci d'arriver à la maison médicale dix minutes avant.
La date est vendredi 2 août et le prix est 6 CHF.
La docteure Morel conseille de préparer un pyjama confortable.

Meilleures salutations,

Réception`;

const E12_5_CE_EMAIL_12_POOL = buildExpressPool("e12-5-ce-email-12", [
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
    text: ["un échange sur les habitudes du soir", "une réunion de chantier", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "échange",
    vfQ: "Le texte parle de l'activité suivante : un échange sur les habitudes du soir.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["un pyjama confortable", "une facture", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "pyjama",
    vfQ: "Il faut prévoir un pyjama confortable.",
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

const E12_5_CE_EMAIL_13_TEXT = `De : Atelier A2

Objet : Préparation de groupe

Chers participants,

Pour que une séance choisir un cadeau bien-être se passe bien, nous formons deux petits groupes.
Le premier groupe est attendu à 13 h à le parc des Amandiers.
La séance a lieu samedi 10 août avec l'entraîneuse Emma.
Merci de vérifier une idée de cadeau avant de partir.

À bientôt,

Atelier A2`;

const E12_5_CE_EMAIL_13_POOL = buildExpressPool("e12-5-ce-email-13", [
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
    text: ["une séance choisir un cadeau bien-être", "un contrôle de vocabulaire", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "séance",
    vfQ: "Le texte parle de l'activité suivante : une séance choisir un cadeau bien-être.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["une idée de cadeau", "un marteau", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "idée",
    vfQ: "Il faut prévoir une idée de cadeau.",
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

const E12_5_CE_EMAIL_14_TEXT = `De : Coordination locale

Objet : Demande d'information

Bonjour,

Je vous écris car je cherche des informations sur un atelier rangement apaisant.
J'ai noté la date, dimanche 18 août, et l'heure, 14 h 45, à la boutique Horizon.
Pouvez-vous confirmer le prix de 11 CHF ?
Je viens surtout pour rendre la chambre plus calme.

Merci d'avance,

Salma`;

const E12_5_CE_EMAIL_14_POOL = buildExpressPool("e12-5-ce-email-14", [
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
    text: ["un atelier rangement apaisant", "une réparation de scooter", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "atelier",
    vfQ: "Le texte parle de l'activité suivante : un atelier rangement apaisant.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["un sac à donner", "un casque de moto", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "sac",
    vfQ: "Il faut prévoir un sac à donner.",
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

const E12_5_CE_EMAIL_15_TEXT = `De : Appli ZenMinute
Objet : Votre série « 7 soirs calmes »

Bonjour,
Vous avez terminé 4 soirs sur 7 du programme « soirs calmes ».
Ce soir : respiration 4-7-8 (8 minutes) + étirements du cou.
Rappel : mode avion recommandé après 21 h.
Statistiques : votre temps d'écran a baissé de 18 % cette semaine. Bravo !
L'équipe ZenMinute`;

const E12_5_CE_EMAIL_15_POOL = buildExpressPool("e12-5-ce-email-15", [
  q({
    id: "cem-q1",
    textQ: "Combien de soirs terminés ?",
    text: ["4 sur 7", "7 sur 7", "0"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "terminé _________ soirs sur 7",
    fill: "4",
    vfQ: "4 sur 7.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Durée respiration ce soir ?",
    text: ["8 minutes", "1 minute", "1 heure"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "(_________ minutes)",
    fill: "8",
    vfQ: "8 minutes.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Après quelle heure mode avion ?",
    text: ["21 h", "12 h", "6 h"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "après _________ h",
    fill: "21",
    vfQ: "Après 21 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Baisse du temps d'écran ?",
    text: ["18 %", "80 %", "1 %"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "baissé de _________ %",
    fill: "18",
    vfQ: "18 %.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Nom du programme ?",
    text: ["7 soirs calmes", "Course 10 km", "Menu sans gluten"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "programme « soirs _________ »",
    fill: "calmes",
    vfQ: "Soirs calmes.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Qui envoie ?",
    text: ["ZenMinute", "La clinique", "Karim"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "équipe _________.",
    fill: "ZenMinute",
    vfQ: "ZenMinute.",
    vfC: 0,
  }),
]);

const E12_5_CE_EMAIL_16_TEXT = `De : Service rappel

Objet : Dernier rappel

Bonjour,

Dernier message avant une discussion dire non poliment !
Rendez-vous mardi 3 septembre à 17 h à la place du Village.
L'entrée n'est garantie que si l'inscription est faite au stand d'information.
Apportez une phrase préparée et gardez 16 CHF si besoin.

À tout à l'heure,

Service rappel`;

const E12_5_CE_EMAIL_16_POOL = buildExpressPool("e12-5-ce-email-16", [
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
    text: ["une discussion dire non poliment", "un contrôle de vocabulaire", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "discussion",
    vfQ: "Le texte parle de l'activité suivante : une discussion dire non poliment.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["une phrase préparée", "un marteau", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "phrase",
    vfQ: "Il faut prévoir une phrase préparée.",
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

const E12_5_CE_EMAIL_17_TEXT = `De : Responsable du projet

Objet : Message de la responsable

Bonjour,

Message de La coach Ana au sujet de un point info produits de toilette.
La rencontre est prévue mercredi 11 septembre à 9 h 45 à la halle des Sports.
Le but reste simple : apprendre à lire une étiquette simple.
Merci de respecter cette règle : les produits irritants sont évités.

Bien cordialement,

Responsable du projet`;

const E12_5_CE_EMAIL_17_POOL = buildExpressPool("e12-5-ce-email-17", [
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
    text: ["un point info produits de toilette", "une réparation de scooter", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "point",
    vfQ: "Le texte parle de l'activité suivante : un point info produits de toilette.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["un flacon vide", "un casque de moto", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "flacon",
    vfQ: "Il faut prévoir un flacon vide.",
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

const E12_5_CE_EMAIL_18_TEXT = `De : Équipe du samedi

Objet : Organisation du samedi

Bonjour,

L'équipe prépare le salon Harmonie pour un atelier rituel du matin.
Les participants arrivent à 11 h 30 avec un réveil.
La date exacte est jeudi 19 septembre.
Après la séance, un court échange expliquera comment réussir à commencer la journée doucement.

Merci de votre aide,

Équipe du samedi`;

const E12_5_CE_EMAIL_18_POOL = buildExpressPool("e12-5-ce-email-18", [
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
    text: ["un atelier rituel du matin", "une réunion de chantier", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "atelier",
    vfQ: "Le texte parle de l'activité suivante : un atelier rituel du matin.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["un réveil", "une facture", "un ordinateur cassé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut apporter ou préparer _________.",
    fill: "réveil",
    vfQ: "Il faut prévoir un réveil.",
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

const E12_5_CE_EMAIL_19_TEXT = `De : Questionnaire qualité

Objet : Votre avis nous intéresse

Bonjour,

Vous avez récemment participé à une séance gratitude simple à la résidence du Parc.
Pouvez-vous dire si l'horaire de 15 h 45 vous convient ?
La prochaine séance est prévue vendredi 27 septembre.
Votre avis nous aidera à mieux organiser les moments pour voir les petites choses positives.

Merci pour votre retour,

Questionnaire qualité`;

const E12_5_CE_EMAIL_19_POOL = buildExpressPool("e12-5-ce-email-19", [
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
    text: ["une séance gratitude simple", "un contrôle de vocabulaire", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "séance",
    vfQ: "Le texte parle de l'activité suivante : une séance gratitude simple.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["trois papiers colorés", "un marteau", "un ordinateur cassé"],
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

const E12_5_CE_EMAIL_20_TEXT = `De : Centre culturel

Objet : Prochaine rencontre

Bonjour,

Nous préparons une prochaine rencontre autour de une journée prendre soin de soi.
Elle aura lieu samedi 5 octobre à 18 h 15 à le centre culturel.
Le tarif annoncé est 40 CHF et il reste les vingt premiers inscrits.
Cette fois, chacun devra apporter une gourde.

À bientôt,

Centre culturel`;

const E12_5_CE_EMAIL_20_POOL = buildExpressPool("e12-5-ce-email-20", [
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
    text: ["une journée prendre soin de soi", "une réparation de scooter", "une réunion sans thème"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'activité proposée est : _________.",
    fill: "journée",
    vfQ: "Le texte parle de l'activité suivante : une journée prendre soin de soi.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["une gourde", "un casque de moto", "un ordinateur cassé"],
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

export const E12_5_CE_EMAIL: CommunicationExercise[] = [
readingPoolExercise({
  id: "e12-5-ce-email",
  readingText: E12_5_CE_EMAIL_TEXT,
  questionPool: E12_5_CE_EMAIL_POOL,
  questionCount: 6,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
readingPoolExercise({
  id: "e12-5-ce-email-2",
  readingText: E12_5_CE_EMAIL_2_TEXT,
  questionPool: E12_5_CE_EMAIL_2_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e12-5-ce-email-3",
  readingText: E12_5_CE_EMAIL_3_TEXT,
  questionPool: E12_5_CE_EMAIL_3_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e12-5-ce-email-4",
  readingText: E12_5_CE_EMAIL_4_TEXT,
  questionPool: E12_5_CE_EMAIL_4_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e12-5-ce-email-5",
  readingText: E12_5_CE_EMAIL_5_TEXT,
  questionPool: E12_5_CE_EMAIL_5_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e12-5-ce-email-6",
  readingText: E12_5_CE_EMAIL_6_TEXT,
  questionPool: E12_5_CE_EMAIL_6_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e12-5-ce-email-7",
  readingText: E12_5_CE_EMAIL_7_TEXT,
  questionPool: E12_5_CE_EMAIL_7_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e12-5-ce-email-8",
  readingText: E12_5_CE_EMAIL_8_TEXT,
  questionPool: E12_5_CE_EMAIL_8_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e12-5-ce-email-9",
  readingText: E12_5_CE_EMAIL_9_TEXT,
  questionPool: E12_5_CE_EMAIL_9_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e12-5-ce-email-10",
  readingText: E12_5_CE_EMAIL_10_TEXT,
  questionPool: E12_5_CE_EMAIL_10_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e12-5-ce-email-11",
  readingText: E12_5_CE_EMAIL_11_TEXT,
  questionPool: E12_5_CE_EMAIL_11_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e12-5-ce-email-12",
  readingText: E12_5_CE_EMAIL_12_TEXT,
  questionPool: E12_5_CE_EMAIL_12_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e12-5-ce-email-13",
  readingText: E12_5_CE_EMAIL_13_TEXT,
  questionPool: E12_5_CE_EMAIL_13_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e12-5-ce-email-14",
  readingText: E12_5_CE_EMAIL_14_TEXT,
  questionPool: E12_5_CE_EMAIL_14_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e12-5-ce-email-15",
  readingText: E12_5_CE_EMAIL_15_TEXT,
  questionPool: E12_5_CE_EMAIL_15_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e12-5-ce-email-16",
  readingText: E12_5_CE_EMAIL_16_TEXT,
  questionPool: E12_5_CE_EMAIL_16_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e12-5-ce-email-17",
  readingText: E12_5_CE_EMAIL_17_TEXT,
  questionPool: E12_5_CE_EMAIL_17_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e12-5-ce-email-18",
  readingText: E12_5_CE_EMAIL_18_TEXT,
  questionPool: E12_5_CE_EMAIL_18_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e12-5-ce-email-19",
  readingText: E12_5_CE_EMAIL_19_TEXT,
  questionPool: E12_5_CE_EMAIL_19_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e12-5-ce-email-20",
  readingText: E12_5_CE_EMAIL_20_TEXT,
  questionPool: E12_5_CE_EMAIL_20_POOL,
  questionCount: 6
}),
];

export const E12_5_PE_EMAIL: ExpressPePrompt[] = [

  {
    id: "e12-5-pee-1",
    title: "Confirmer sa journée détente",
    situation: "L'espace bien-être vous demande de confirmer votre réservation.",
    sourceMessage: {
      from: "Espace bien-être du Lac",
      subject: "Votre réservation du 23 novembre",
      body: "Bonjour,\nMerci de confirmer votre réservation pour la journée détente du dimanche 23 novembre.\nVoulez-vous aussi réserver un massage ?\nL'équipe de l'Espace bien-être",
    },
    instruction: "Répondez à l'espace bien-être : confirmez votre venue, réservez un massage et posez une question sur ce qu'il faut apporter.",
    points: ["La confirmation", "La réservation du massage", "Une question sur le matériel"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-5-pee-2",
    title: "Prendre rendez-vous chez le coiffeur",
    situation: "Le salon de coiffure répond à votre message.",
    sourceMessage: {
      from: "Salon Coup d'Éclat",
      subject: "Votre demande de rendez-vous",
      body: "Bonjour,\nMerci pour votre message. Quand voulez-vous venir ?\nVoulez-vous une coupe simple ou aussi une couleur ?\nLe salon Coup d'Éclat",
    },
    instruction: "Répondez au salon : donnez deux disponibilités, expliquez ce que vous voulez et demandez le prix.",
    points: ["Deux disponibilités", "Ce que vous voulez", "Une question sur le prix"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-5-pee-3",
    title: "Déplacer un rendez-vous",
    situation: "Le salon confirme votre rendez-vous, mais vous avez un empêchement.",
    sourceMessage: {
      from: "Salon Coup d'Éclat",
      subject: "Confirmation de votre rendez-vous",
      body: "Bonjour,\nNous confirmons votre rendez-vous de vendredi à 14 h pour une coupe.\nÀ vendredi !\nLe salon Coup d'Éclat",
    },
    instruction: "Répondez au salon : excusez-vous, expliquez votre empêchement et proposez un autre jour.",
    points: ["L'excuse", "L'empêchement", "Une autre proposition de date"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-5-pee-4",
    title: "Conseiller une amie stressée",
    situation: "Une amie dort mal et se sent stressée par son travail.",
    sourceMessage: {
      from: "Priya",
      subject: "Je suis fatiguée",
      body: "Salut,\nEn ce moment, je dors très mal et je suis stressée par mon travail.\nToi, tu as l'air en forme ! Qu'est-ce que tu fais pour te détendre ?\nPriya",
    },
    instruction: "Répondez à Priya : expliquez ce que vous faites pour vous détendre, donnez-lui deux conseils pour mieux dormir et proposez une activité ensemble.",
    points: ["Vos activités de détente", "Deux conseils pour dormir", "Une activité ensemble"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-5-pee-5",
    title: "Raconter sa journée au spa",
    situation: "Un ami vous demande des nouvelles de votre journée détente.",
    sourceMessage: {
      from: "Samuel",
      subject: "Ta journée au spa",
      body: "Salut !\nAlors, cette journée détente dimanche ? C'était bien ?\nRaconte-moi !\nSamuel",
    },
    instruction: "Répondez à Samuel : racontez la journée, dites ce que vous avez préféré et recommandez (ou non) l'endroit.",
    points: ["Le récit de la journée", "Votre moment préféré", "Votre recommandation"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-5-pee-6",
    title: "Offrir un bon cadeau",
    situation: "Vous voulez offrir un cadeau bien-être à votre mère ; le centre vous répond.",
    sourceMessage: {
      from: "Espace bien-être du Lac",
      subject: "Nos bons cadeaux",
      body: "Bonjour,\nNous proposons des bons cadeaux : massage (80 francs) ou journée détente (120 francs).\nQue voulez-vous offrir ?\nL'équipe de l'Espace bien-être",
    },
    instruction: "Répondez au centre : choisissez un bon cadeau, expliquez pour qui c'est et demandez comment le recevoir.",
    points: ["Le bon choisi", "Pour qui c'est", "Une question sur la livraison"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-5-pee-7",
    title: "Le programme bien-être au travail",
    situation: "Le service des ressources humaines prépare un programme bien-être.",
    sourceMessage: {
      from: "Service RH",
      subject: "Programme bien-être des employés",
      body: "Bonjour,\nNous préparons un programme bien-être pour les employés : sport, relaxation, ateliers.\nQuelles activités vous intéressent ? À quel moment de la journée ?\nLe service RH",
    },
    instruction: "Répondez au service RH : proposez deux activités, expliquez pourquoi elles sont importantes pour vous et donnez le moment qui vous convient.",
    points: ["Deux activités", "Pourquoi c'est important", "Le moment qui vous convient"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-5-pee-8",
    title: "Mieux dormir",
    situation: "La pharmacie répond à votre demande de conseils pour le sommeil.",
    sourceMessage: {
      from: "Pharmacie du Lac",
      subject: "Vos problèmes de sommeil",
      body: "Bonjour,\nVous nous avez demandé des conseils pour mieux dormir.\nPouvez-vous décrire votre sommeil ? À quelle heure vous couchez-vous ?\nBuvez-vous du café le soir ?\nVotre pharmacie",
    },
    instruction: "Répondez à la pharmacie : décrivez votre sommeil, parlez de vos habitudes du soir et posez une question sur les produits naturels.",
    points: ["Votre sommeil", "Vos habitudes du soir", "Une question sur les produits naturels"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-5-pee-9",
    title: "Ralentir le rythme",
    situation: "Un ami trouve que vous travaillez trop.",
    sourceMessage: {
      from: "David",
      subject: "On ne te voit plus !",
      body: "Salut,\nTu travailles trop en ce moment ! On ne te voit plus.\nTu dois aussi penser à toi.\nOn se voit bientôt ?\nDavid",
    },
    instruction: "Répondez à David : reconnaissez que vous travaillez trop, présentez deux bonnes résolutions et proposez un rendez-vous.",
    points: ["Votre situation", "Deux bonnes résolutions", "Une proposition de rendez-vous"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-5-pee-10",
    title: "S'inscrire au cours de méditation",
    situation: "Le centre de yoga annonce ses nouveaux cours de méditation.",
    sourceMessage: {
      from: "Centre Zen et Forme",
      subject: "Nouveaux cours de méditation",
      body: "Bonjour,\nNos nouveaux cours de méditation commencent en janvier, le lundi à 19 h.\nLes débutants sont les bienvenus. Premier cours gratuit.\nLe Centre Zen et Forme",
    },
    instruction: "Répondez au centre : inscrivez-vous au cours d'essai, expliquez pourquoi vous voulez méditer et posez une question sur le prix de l'abonnement.",
    points: ["Votre inscription", "Pourquoi vous voulez méditer", "Une question sur le prix"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-5-pee-11",
    title: "Répondre — bien-être (11)",
    situation: "Vous avez reçu un e-mail concernant bien-être.",
sourceMessage: {
  from: "Service Bien-être",
  subject: "Votre demande — référence 1100",
  body: "Bonjour,\nNous avons bien reçu votre message concernant bien-être.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-5-pee-12",
    title: "Répondre — bien-être (12)",
    situation: "Vous avez reçu un e-mail concernant bien-être.",
sourceMessage: {
  from: "Service Bien-être",
  subject: "Votre demande — référence 1200",
  body: "Bonjour,\nNous avons bien reçu votre message concernant bien-être.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-5-pee-13",
    title: "Répondre — bien-être (13)",
    situation: "Vous avez reçu un e-mail concernant bien-être.",
sourceMessage: {
  from: "Service Bien-être",
  subject: "Votre demande — référence 1300",
  body: "Bonjour,\nNous avons bien reçu votre message concernant bien-être.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-5-pee-14",
    title: "Répondre — bien-être (14)",
    situation: "Vous avez reçu un e-mail concernant bien-être.",
sourceMessage: {
  from: "Service Bien-être",
  subject: "Votre demande — référence 1400",
  body: "Bonjour,\nNous avons bien reçu votre message concernant bien-être.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-5-pee-15",
    title: "Répondre — bien-être (15)",
    situation: "Vous avez reçu un e-mail concernant bien-être.",
sourceMessage: {
  from: "Service Bien-être",
  subject: "Votre demande — référence 1500",
  body: "Bonjour,\nNous avons bien reçu votre message concernant bien-être.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-5-pee-16",
    title: "Répondre — bien-être (16)",
    situation: "Vous avez reçu un e-mail concernant bien-être.",
sourceMessage: {
  from: "Service Bien-être",
  subject: "Votre demande — référence 1600",
  body: "Bonjour,\nNous avons bien reçu votre message concernant bien-être.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-5-pee-17",
    title: "Répondre — bien-être (17)",
    situation: "Vous avez reçu un e-mail concernant bien-être.",
sourceMessage: {
  from: "Service Bien-être",
  subject: "Votre demande — référence 1700",
  body: "Bonjour,\nNous avons bien reçu votre message concernant bien-être.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-5-pee-18",
    title: "Répondre — bien-être (18)",
    situation: "Vous avez reçu un e-mail concernant bien-être.",
sourceMessage: {
  from: "Service Bien-être",
  subject: "Votre demande — référence 1800",
  body: "Bonjour,\nNous avons bien reçu votre message concernant bien-être.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-5-pee-19",
    title: "Répondre — bien-être (19)",
    situation: "Vous avez reçu un e-mail concernant bien-être.",
sourceMessage: {
  from: "Service Bien-être",
  subject: "Votre demande — référence 1900",
  body: "Bonjour,\nNous avons bien reçu votre message concernant bien-être.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-5-pee-20",
    title: "Répondre — bien-être (20)",
    situation: "Vous avez reçu un e-mail concernant bien-être.",
sourceMessage: {
  from: "Service Bien-être",
  subject: "Votre demande — référence 2000",
  body: "Bonjour,\nNous avons bien reçu votre message concernant bien-être.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  }
];
