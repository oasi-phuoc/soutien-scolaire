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

/* ── Compréhension écrite — E2.2 Signaler un problème domestique ── */

const CE_TEXT_1 = `SMS au propriétaire

Bonjour,
J'ai un problème : la chaudière ne marche plus.
Cela dure depuis deux jours. C'est urgent.
Pouvez-vous envoyer un plombier ?
Contact : 079 123 45 67
Nous comptons sur vous.
Après cela, vous recevrez un petit rappel.
Gardez une copie papier si possible.
Le cachet de la date est important.
Nous vous souhaitons une excellente journée.
Le service est également disponible en ligne.`;

const CE_POOL_1 = buildExpressPool("e2-2-1", [
  q({
    id: "ce-q1",
    textQ: "Quel est le problème ?",
    text: ["La chaudière ne marche plus", "Un chat perdu", "Une fête"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "un problème : _________.",
    fill: "la",
    vfQ: "Le problème est la chaudière ne marche plus.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Depuis combien de temps ?",
    text: ["deux jours", "Un jour", "Dix ans"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Cela dure depuis _________.",
    fill: "deux",
    vfQ: "Depuis deux jours.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quel est le niveau d'urgence ?",
    text: ["urgent", "Pas grave", "Aucun"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "urgent",
    vfQ: "C'est urgent.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quelle action demande-t-on ?",
    text: ["Envoyer un plombier", "Rien", "Un voyage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pouvez-vous _________ ?",
    fill: "envoyer",
    vfQ: "Demande : envoyer un plombier.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Comment contacter ?",
    text: ["079 123 45 67", "Par courrier", "En personne"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "079",
    vfQ: "Contact : 079 123 45 67.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Le problème est-il urgent ?",
    text: ["Oui", "Non", "On ne sait pas"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "urgent",
    vfQ: "Urgence : urgent.",
    vfC: 0,
  }),
]);
const CE_TEXT_2 = `E-mail régie

Madame, Monsieur,
J'ai un problème : une fuite d'eau sous l'évier.
Cela dure depuis ce matin. C'est très urgent.
Pouvez-vous intervenir rapidement ?
Contact : regie@immo.ch
Sans confirmation, la place n'est pas garantie.
Je reste à votre disposition pour toute précision.
Nous traitons votre demande rapidement.
Joignez les documents demandés si nécessaire.
Merci de confirmer la bonne réception de ce message.
Vous pouvez répondre directement à cet e-mail.`;

const CE_POOL_2 = buildExpressPool("e2-2-2", [
  q({
    id: "ce-q1",
    textQ: "Quel est le problème ?",
    text: ["Une fuite d'eau sous l'évier", "Un chat perdu", "Une fête"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "un problème : _________.",
    fill: "une",
    vfQ: "Le problème est une fuite d'eau sous l'évier.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Depuis combien de temps ?",
    text: ["ce matin", "Un jour", "Dix ans"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Cela dure depuis _________.",
    fill: "ce",
    vfQ: "Depuis ce matin.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quel est le niveau d'urgence ?",
    text: ["très urgent", "Pas grave", "Aucun"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "très urgent",
    vfQ: "C'est très urgent.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quelle action demande-t-on ?",
    text: ["Intervenir rapidement", "Rien", "Un voyage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pouvez-vous _________ ?",
    fill: "intervenir",
    vfQ: "Demande : intervenir rapidement.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Comment contacter ?",
    text: ["regie@immo.ch", "Par courrier", "En personne"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "regie@immo.ch",
    vfQ: "Contact : regie@immo.ch.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Le problème est-il urgent ?",
    text: ["Oui", "Non", "On ne sait pas"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "très",
    vfQ: "Urgence : très urgent.",
    vfC: 0,
  }),
]);
const CE_TEXT_3 = `Message gardien

Bonjour,
J'ai un problème : la porte d'entrée ne ferme plus.
Cela dure depuis une semaine. C'est important.
Pouvez-vous faire réparer la serrure ?
Contact : gardien@immeuble.ch
Gardez ce texte pour vous en souvenir.
Les horaires habituels restent les mêmes.
Une question ? Écrivez ou téléphonez.
Je reste près de mon téléphone aujourd'hui.
Merci encore, et à bientôt.`;

const CE_POOL_3 = buildExpressPool("e2-2-3", [
  q({
    id: "ce-q1",
    textQ: "Quel est le problème ?",
    text: ["La porte d'entrée ne ferme plus", "Un chat perdu", "Une fête"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "un problème : _________.",
    fill: "la",
    vfQ: "Le problème est la porte d'entrée ne ferme plus.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Depuis combien de temps ?",
    text: ["une semaine", "Un jour", "Dix ans"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Cela dure depuis _________.",
    fill: "une",
    vfQ: "Depuis une semaine.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quel est le niveau d'urgence ?",
    text: ["important", "Pas grave", "Aucun"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "important",
    vfQ: "C'est important.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quelle action demande-t-on ?",
    text: ["Faire réparer la serrure", "Rien", "Un voyage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pouvez-vous _________ ?",
    fill: "faire",
    vfQ: "Demande : faire réparer la serrure.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Comment contacter ?",
    text: ["gardien@immeuble.ch", "Par courrier", "En personne"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "gardien@immeuble.ch",
    vfQ: "Contact : gardien@immeuble.ch.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Le problème est-il urgent ?",
    text: ["Non", "Oui", "On ne sait pas"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "important",
    vfQ: "Urgence : important.",
    vfC: 0,
  }),
]);
const CE_TEXT_4 = `WhatsApp voisin

Salut,
J'ai un problème : plus d'électricité dans la cuisine.
Cela dure depuis hier soir. C'est urgent.
Pouvez-vous vérifier le disjoncteur ?
Contact : 076 234 56 78
Dis-moi si tu as des questions, je réponds vite.
Tu peux m'appeler si c'est plus simple pour toi.
J'espère que tu vas bien et que tout se passe comme prévu.
N'oublie pas de me confirmer dès que tu peux.
Nous vous souhaitons une excellente journée.
Le service est également disponible en ligne.`;

const CE_POOL_4 = buildExpressPool("e2-2-4", [
  q({
    id: "ce-q1",
    textQ: "Quel est le problème ?",
    text: ["Plus d'électricité dans la cuisine", "Un chat perdu", "Une fête"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "un problème : _________.",
    fill: "plus",
    vfQ: "Le problème est plus d'électricité dans la cuisine.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Depuis combien de temps ?",
    text: ["hier soir", "Un jour", "Dix ans"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Cela dure depuis _________.",
    fill: "hier",
    vfQ: "Depuis hier soir.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quel est le niveau d'urgence ?",
    text: ["urgent", "Pas grave", "Aucun"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "urgent",
    vfQ: "C'est urgent.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quelle action demande-t-on ?",
    text: ["Vérifier le disjoncteur", "Rien", "Un voyage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pouvez-vous _________ ?",
    fill: "vérifier",
    vfQ: "Demande : vérifier le disjoncteur.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Comment contacter ?",
    text: ["076 234 56 78", "Par courrier", "En personne"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "076",
    vfQ: "Contact : 076 234 56 78.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Le problème est-il urgent ?",
    text: ["Oui", "Non", "On ne sait pas"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "urgent",
    vfQ: "Urgence : urgent.",
    vfC: 0,
  }),
]);
const CE_TEXT_5 = `Note sur la porte

Chers voisins,
J'ai un problème : l'ascenseur est en panne.
Cela dure depuis trois jours. C'est gênant.
Pouvez-vous appeler la régie ?
Contact : 032 345 67 89
Les ascenseurs se trouvent à gauche de l'entrée.
Je t'écris aussi pour te donner un peu plus de nouvelles.
Dis-moi si tu as des questions, je réponds vite.
Tu peux m'appeler si c'est plus simple pour toi.
On peut aussi en parler demain matin.
J'espère que tout se passe bien de ton côté.`;

const CE_POOL_5 = buildExpressPool("e2-2-5", [
  q({
    id: "ce-q1",
    textQ: "Quel est le problème ?",
    text: ["L'ascenseur est en panne", "Un chat perdu", "Une fête"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "un problème : _________.",
    fill: "l'ascenseur",
    vfQ: "Le problème est l'ascenseur est en panne.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Depuis combien de temps ?",
    text: ["trois jours", "Un jour", "Dix ans"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Cela dure depuis _________.",
    fill: "trois",
    vfQ: "Depuis trois jours.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quel est le niveau d'urgence ?",
    text: ["gênant", "Pas grave", "Aucun"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "gênant",
    vfQ: "C'est gênant.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quelle action demande-t-on ?",
    text: ["Appeler la régie", "Rien", "Un voyage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pouvez-vous _________ ?",
    fill: "appeler",
    vfQ: "Demande : appeler la régie.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Comment contacter ?",
    text: ["032 345 67 89", "Par courrier", "En personne"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "032",
    vfQ: "Contact : 032 345 67 89.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Le problème est-il urgent ?",
    text: ["Non", "Oui", "On ne sait pas"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "gênant",
    vfQ: "Urgence : gênant.",
    vfC: 0,
  }),
]);
const CE_TEXT_6 = `Appel transcrit

Allô,
J'ai un problème : le chauffage ne fonctionne pas.
Cela dure depuis cinq jours. C'est très froid.
Pouvez-vous envoyer un technicien ?
Contact : 079 456 78 90
Les documents se téléchargent aussi en ligne.
Le numéro d'urgence est affiché partout.
Je t'écris aussi pour te donner un peu plus de nouvelles.
Dis-moi si tu as des questions, je réponds vite.
En cas de perte d'objet, passez à l'accueil.
Le service client répond aussi par téléphone.`;

const CE_POOL_6 = buildExpressPool("e2-2-6", [
  q({
    id: "ce-q1",
    textQ: "Quel est le problème ?",
    text: ["Le chauffage ne fonctionne pas", "Un chat perdu", "Une fête"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "un problème : _________.",
    fill: "le",
    vfQ: "Le problème est le chauffage ne fonctionne pas.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Depuis combien de temps ?",
    text: ["cinq jours", "Un jour", "Dix ans"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Cela dure depuis _________.",
    fill: "cinq",
    vfQ: "Depuis cinq jours.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quel est le niveau d'urgence ?",
    text: ["très froid", "Pas grave", "Aucun"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "très froid",
    vfQ: "C'est très froid.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quelle action demande-t-on ?",
    text: ["Envoyer un technicien", "Rien", "Un voyage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pouvez-vous _________ ?",
    fill: "envoyer",
    vfQ: "Demande : envoyer un technicien.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Comment contacter ?",
    text: ["079 456 78 90", "Par courrier", "En personne"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "079",
    vfQ: "Contact : 079 456 78 90.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Le problème est-il urgent ?",
    text: ["Non", "Oui", "On ne sait pas"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "très",
    vfQ: "Urgence : très froid.",
    vfC: 0,
  }),
]);
const CE_TEXT_7 = `E-mail assurance

Bonjour,
J'ai un problème : un dégât des eaux au plafond.
Cela dure depuis la semaine dernière. C'est grave.
Pouvez-vous envoyer un expert ?
Contact : assurance@home.ch
Pensez à joindre les documents demandés.
Votre dossier sera mis à jour après votre réponse.
Nous vous souhaitons une excellente journée.
On peut aussi en parler demain matin.
J'espère que tout se passe bien de ton côté.
Merci encore pour votre confiance.
Voici quelques détails utiles pour la suite.`;

const CE_POOL_7 = buildExpressPool("e2-2-7", [
  q({
    id: "ce-q1",
    textQ: "Quel est le problème ?",
    text: ["Un dégât des eaux au plafond", "Un chat perdu", "Une fête"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "un problème : _________.",
    fill: "un",
    vfQ: "Le problème est un dégât des eaux au plafond.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Depuis combien de temps ?",
    text: ["la semaine dernière", "Un jour", "Dix ans"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Cela dure depuis _________.",
    fill: "la",
    vfQ: "Depuis la semaine dernière.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quel est le niveau d'urgence ?",
    text: ["grave", "Pas grave", "Aucun"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "grave",
    vfQ: "C'est grave.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quelle action demande-t-on ?",
    text: ["Envoyer un expert", "Rien", "Un voyage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pouvez-vous _________ ?",
    fill: "envoyer",
    vfQ: "Demande : envoyer un expert.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Comment contacter ?",
    text: ["assurance@home.ch", "Par courrier", "En personne"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "assurance@home.ch",
    vfQ: "Contact : assurance@home.ch.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Le problème est-il urgent ?",
    text: ["Non", "Oui", "On ne sait pas"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "grave",
    vfQ: "Urgence : grave.",
    vfC: 0,
  }),
]);
const CE_TEXT_8 = `Forum locataires

Bonjour,
J'ai un problème : des nuisances sonores la nuit.
Cela dure depuis un mois. C'est insupportable.
Pouvez-vous parler au voisin ?
Contact : forum@locataires.ch
Le message est aussi envoyé au groupe WhatsApp.
Si vous changez d'avis, dites-le sans attendre.
On peut décaler d'une demi-heure si besoin.
Un plan simple est disponible à l'accueil.
N'oubliez pas de vérifier la date et l'heure.
Merci de garder ce document avec vous.`;

const CE_POOL_8 = buildExpressPool("e2-2-8", [
  q({
    id: "ce-q1",
    textQ: "Quel est le problème ?",
    text: ["Des nuisances sonores la nuit", "Un chat perdu", "Une fête"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "un problème : _________.",
    fill: "des",
    vfQ: "Le problème est des nuisances sonores la nuit.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Depuis combien de temps ?",
    text: ["un mois", "Un jour", "Dix ans"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Cela dure depuis _________.",
    fill: "un",
    vfQ: "Depuis un mois.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quel est le niveau d'urgence ?",
    text: ["insupportable", "Pas grave", "Aucun"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "insupportable",
    vfQ: "C'est insupportable.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quelle action demande-t-on ?",
    text: ["Parler au voisin", "Rien", "Un voyage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pouvez-vous _________ ?",
    fill: "parler",
    vfQ: "Demande : parler au voisin.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Comment contacter ?",
    text: ["forum@locataires.ch", "Par courrier", "En personne"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "forum@locataires.ch",
    vfQ: "Contact : forum@locataires.ch.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Le problème est-il urgent ?",
    text: ["Non", "Oui", "On ne sait pas"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "insupportable",
    vfQ: "Urgence : insupportable.",
    vfC: 0,
  }),
]);
const CE_TEXT_9 = `SMS plombier

Bonjour,
J'ai un problème : les toilettes sont bouchées.
Cela dure depuis aujourd'hui. C'est urgent.
Pouvez-vous passer cet après-midi ?
Contact : 079 567 89 01
Tu peux partager ce message si besoin.
Je t'envoie aussi ce détail pour être clair.
Le trajet est simple, ne t'inquiète pas.
Bonne journée et à tout de suite !
Je reste près de mon téléphone aujourd'hui.
On se voit bientôt, j'ai hâte.`;

const CE_POOL_9 = buildExpressPool("e2-2-9", [
  q({
    id: "ce-q1",
    textQ: "Quel est le problème ?",
    text: ["Les toilettes sont bouchées", "Un chat perdu", "Une fête"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "un problème : _________.",
    fill: "les",
    vfQ: "Le problème est les toilettes sont bouchées.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Depuis combien de temps ?",
    text: ["aujourd'hui", "Un jour", "Dix ans"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Cela dure depuis _________.",
    fill: "aujourd'hui",
    vfQ: "Depuis aujourd'hui.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quel est le niveau d'urgence ?",
    text: ["urgent", "Pas grave", "Aucun"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "urgent",
    vfQ: "C'est urgent.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quelle action demande-t-on ?",
    text: ["Passer cet après-midi", "Rien", "Un voyage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pouvez-vous _________ ?",
    fill: "passer",
    vfQ: "Demande : passer cet après-midi.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Comment contacter ?",
    text: ["079 567 89 01", "Par courrier", "En personne"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "079",
    vfQ: "Contact : 079 567 89 01.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Le problème est-il urgent ?",
    text: ["Oui", "Non", "On ne sait pas"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "urgent",
    vfQ: "Urgence : urgent.",
    vfC: 0,
  }),
]);
const CE_TEXT_10 = `Message syndic

Madame, Monsieur,
J'ai un problème : la fenêtre ne ferme plus.
Cela dure depuis deux semaines. C'est important.
Pouvez-vous remplacer la fenêtre ?
Contact : syndic@copro.ch
Les horaires habituels restent les mêmes.
Une question ? Écrivez ou téléphonez.
C'est important pour moi, merci beaucoup.
Merci encore, et à bientôt.
Tout est organisé pour que ce soit simple.`;

const CE_POOL_10 = buildExpressPool("e2-2-10", [
  q({
    id: "ce-q1",
    textQ: "Quel est le problème ?",
    text: ["La fenêtre ne ferme plus", "Un chat perdu", "Une fête"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "un problème : _________.",
    fill: "la",
    vfQ: "Le problème est la fenêtre ne ferme plus.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Depuis combien de temps ?",
    text: ["deux semaines", "Un jour", "Dix ans"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Cela dure depuis _________.",
    fill: "deux",
    vfQ: "Depuis deux semaines.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quel est le niveau d'urgence ?",
    text: ["important", "Pas grave", "Aucun"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "important",
    vfQ: "C'est important.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quelle action demande-t-on ?",
    text: ["Remplacer la fenêtre", "Rien", "Un voyage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pouvez-vous _________ ?",
    fill: "remplacer",
    vfQ: "Demande : remplacer la fenêtre.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Comment contacter ?",
    text: ["syndic@copro.ch", "Par courrier", "En personne"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "syndic@copro.ch",
    vfQ: "Contact : syndic@copro.ch.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Le problème est-il urgent ?",
    text: ["Non", "Oui", "On ne sait pas"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "important",
    vfQ: "Urgence : important.",
    vfC: 0,
  }),
]);
const CE_TEXT_11 = `Réclamation écrite

Madame, Monsieur,
J'ai un problème : pas d'eau chaude.
Cela dure depuis quatre jours. C'est urgent.
Pouvez-vous réparer la chaudière ?
Contact : reclamation@mail.ch
Les informations importantes sont déjà notées plus haut.
Nous traitons votre demande rapidement.
Vous pouvez répondre directement à ce message.
Merci de votre attention et de votre patience.
Une confirmation arrivera ensuite.
Le lieu est facile à trouver.`;

const CE_POOL_11 = buildExpressPool("e2-2-11", [
  q({
    id: "ce-q1",
    textQ: "Quel est le problème ?",
    text: ["Pas d'eau chaude", "Un chat perdu", "Une fête"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "un problème : _________.",
    fill: "pas",
    vfQ: "Le problème est pas d'eau chaude.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Depuis combien de temps ?",
    text: ["quatre jours", "Un jour", "Dix ans"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Cela dure depuis _________.",
    fill: "quatre",
    vfQ: "Depuis quatre jours.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quel est le niveau d'urgence ?",
    text: ["urgent", "Pas grave", "Aucun"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "urgent",
    vfQ: "C'est urgent.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quelle action demande-t-on ?",
    text: ["Réparer la chaudière", "Rien", "Un voyage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pouvez-vous _________ ?",
    fill: "réparer",
    vfQ: "Demande : réparer la chaudière.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Comment contacter ?",
    text: ["reclamation@mail.ch", "Par courrier", "En personne"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "reclamation@mail.ch",
    vfQ: "Contact : reclamation@mail.ch.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Le problème est-il urgent ?",
    text: ["Oui", "Non", "On ne sait pas"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "urgent",
    vfQ: "Urgence : urgent.",
    vfC: 0,
  }),
]);
const CE_TEXT_12 = `WhatsApp coloc

Salut,
J'ai un problème : le lave-linge est en panne.
Cela dure depuis hier. C'est gênant.
Pouvez-vous appeler le réparateur ?
Contact : 078 678 90 12
N'oublie pas de me confirmer dès que tu peux.
Sinon on peut aussi en parler demain matin.
En cas de question, vous pouvez écrire ou téléphoner.
Une confirmation sera envoyée ensuite.
Merci d'avance pour ta réponse.
Je suis disponible après 18 heures.`;

const CE_POOL_12 = buildExpressPool("e2-2-12", [
  q({
    id: "ce-q1",
    textQ: "Quel est le problème ?",
    text: ["Le lave-linge est en panne", "Un chat perdu", "Une fête"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "un problème : _________.",
    fill: "le",
    vfQ: "Le problème est le lave-linge est en panne.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Depuis combien de temps ?",
    text: ["hier", "Un jour", "Dix ans"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Cela dure depuis _________.",
    fill: "hier",
    vfQ: "Depuis hier.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quel est le niveau d'urgence ?",
    text: ["gênant", "Pas grave", "Aucun"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "gênant",
    vfQ: "C'est gênant.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quelle action demande-t-on ?",
    text: ["Appeler le réparateur", "Rien", "Un voyage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pouvez-vous _________ ?",
    fill: "appeler",
    vfQ: "Demande : appeler le réparateur.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Comment contacter ?",
    text: ["078 678 90 12", "Par courrier", "En personne"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "078",
    vfQ: "Contact : 078 678 90 12.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Le problème est-il urgent ?",
    text: ["Non", "Oui", "On ne sait pas"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "gênant",
    vfQ: "Urgence : gênant.",
    vfC: 0,
  }),
]);
const CE_TEXT_13 = `E-mail propriétaire

Bonjour,
J'ai un problème : des cafards dans la cuisine.
Cela dure depuis plusieurs jours. C'est urgent.
Pouvez-vous faire désinsectiser ?
Contact : proprio@mail.ch
C'est important pour moi, merci beaucoup.
Nous traitons votre demande rapidement.
Cordialement, et bonne journée.
Si une information manque, écrivez-nous rapidement.
Nous avons bien noté votre situation.
Le service est disponible également en ligne.`;

const CE_POOL_13 = buildExpressPool("e2-2-13", [
  q({
    id: "ce-q1",
    textQ: "Quel est le problème ?",
    text: ["Des cafards dans la cuisine", "Un chat perdu", "Une fête"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "un problème : _________.",
    fill: "des",
    vfQ: "Le problème est des cafards dans la cuisine.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Depuis combien de temps ?",
    text: ["plusieurs jours", "Un jour", "Dix ans"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Cela dure depuis _________.",
    fill: "plusieurs",
    vfQ: "Depuis plusieurs jours.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quel est le niveau d'urgence ?",
    text: ["urgent", "Pas grave", "Aucun"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "urgent",
    vfQ: "C'est urgent.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quelle action demande-t-on ?",
    text: ["Faire désinsectiser", "Rien", "Un voyage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pouvez-vous _________ ?",
    fill: "faire",
    vfQ: "Demande : faire désinsectiser.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Comment contacter ?",
    text: ["proprio@mail.ch", "Par courrier", "En personne"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "proprio@mail.ch",
    vfQ: "Contact : proprio@mail.ch.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Le problème est-il urgent ?",
    text: ["Oui", "Non", "On ne sait pas"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "urgent",
    vfQ: "Urgence : urgent.",
    vfC: 0,
  }),
]);
const CE_TEXT_14 = `Note urgente

URGENT —
J'ai un problème : odeur de gaz dans l'appartement.
Cela dure depuis maintenant. C'est très dangereux.
Pouvez-vous appeler le gaz d'urgence ?
Contact : 144
Merci de lire ce message jusqu'à la fin.
Les informations importantes sont déjà indiquées plus haut.
Merci encore, et à bientôt.
Tout est organisé pour que ce soit simple.
Le contact est indiqué dans le message.
N'oubliez pas de vérifier la date.`;

const CE_POOL_14 = buildExpressPool("e2-2-14", [
  q({
    id: "ce-q1",
    textQ: "Quel est le problème ?",
    text: ["Odeur de gaz dans l'appartement", "Un chat perdu", "Une fête"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "un problème : _________.",
    fill: "odeur",
    vfQ: "Le problème est odeur de gaz dans l'appartement.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Depuis combien de temps ?",
    text: ["maintenant", "Un jour", "Dix ans"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Cela dure depuis _________.",
    fill: "maintenant",
    vfQ: "Depuis maintenant.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quel est le niveau d'urgence ?",
    text: ["très dangereux", "Pas grave", "Aucun"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "très dangereux",
    vfQ: "C'est très dangereux.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quelle action demande-t-on ?",
    text: ["Appeler le gaz d'urgence", "Rien", "Un voyage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pouvez-vous _________ ?",
    fill: "appeler",
    vfQ: "Demande : appeler le gaz d'urgence.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Comment contacter ?",
    text: ["144", "Par courrier", "En personne"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "144",
    vfQ: "Contact : 144.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Le problème est-il urgent ?",
    text: ["Non", "Oui", "On ne sait pas"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "très",
    vfQ: "Urgence : très dangereux.",
    vfC: 0,
  }),
]);
const CE_TEXT_15 = `Message régie

Bonjour,
J'ai un problème : le voisin fume dans les parties communes.
Cela dure depuis longtemps. C'est gênant.
Pouvez-vous rappeler le règlement ?
Contact : regie2@immo.ch
Vous pouvez répondre directement à ce message.
Merci de confirmer la bonne réception.
Merci de parler doucement dans les couloirs.
Les sacs volumineux se déposent à l'accueil.
Un vestiaire gratuit est disponible.
Les consignes de sécurité sont affichées en rouge.`;

const CE_POOL_15 = buildExpressPool("e2-2-15", [
  q({
    id: "ce-q1",
    textQ: "Quel est le problème ?",
    text: ["Le voisin fume dans les parties communes", "Un chat perdu", "Une fête"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "un problème : _________.",
    fill: "le",
    vfQ: "Le problème est le voisin fume dans les parties communes.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Depuis combien de temps ?",
    text: ["longtemps", "Un jour", "Dix ans"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Cela dure depuis _________.",
    fill: "longtemps",
    vfQ: "Depuis longtemps.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quel est le niveau d'urgence ?",
    text: ["gênant", "Pas grave", "Aucun"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "gênant",
    vfQ: "C'est gênant.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quelle action demande-t-on ?",
    text: ["Rappeler le règlement", "Rien", "Un voyage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pouvez-vous _________ ?",
    fill: "rappeler",
    vfQ: "Demande : rappeler le règlement.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Comment contacter ?",
    text: ["regie2@immo.ch", "Par courrier", "En personne"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "regie2@immo.ch",
    vfQ: "Contact : regie2@immo.ch.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Le problème est-il urgent ?",
    text: ["Non", "Oui", "On ne sait pas"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "gênant",
    vfQ: "Urgence : gênant.",
    vfC: 0,
  }),
]);
const CE_TEXT_16 = `SMS électricien

Bonjour,
J'ai un problème : les prises ne marchent plus.
Cela dure depuis ce matin. C'est urgent.
Pouvez-vous passer aujourd'hui ?
Contact : 079 789 01 23
N'oubliez pas de vérifier la date.
Nous restons disponibles pour vous aider.
Les horaires habituels restent les mêmes.
Bonne journée à toutes et à tous.
Ce document complète les informations déjà données.
Nous comptons sur vous.`;

const CE_POOL_16 = buildExpressPool("e2-2-16", [
  q({
    id: "ce-q1",
    textQ: "Quel est le problème ?",
    text: ["Les prises ne marchent plus", "Un chat perdu", "Une fête"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "un problème : _________.",
    fill: "les",
    vfQ: "Le problème est les prises ne marchent plus.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Depuis combien de temps ?",
    text: ["ce matin", "Un jour", "Dix ans"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Cela dure depuis _________.",
    fill: "ce",
    vfQ: "Depuis ce matin.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quel est le niveau d'urgence ?",
    text: ["urgent", "Pas grave", "Aucun"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "urgent",
    vfQ: "C'est urgent.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quelle action demande-t-on ?",
    text: ["Passer aujourd'hui", "Rien", "Un voyage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pouvez-vous _________ ?",
    fill: "passer",
    vfQ: "Demande : passer aujourd'hui.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Comment contacter ?",
    text: ["079 789 01 23", "Par courrier", "En personne"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "079",
    vfQ: "Contact : 079 789 01 23.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Le problème est-il urgent ?",
    text: ["Oui", "Non", "On ne sait pas"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "urgent",
    vfQ: "Urgence : urgent.",
    vfC: 0,
  }),
]);
const CE_TEXT_17 = `E-mail voisin

Bonjour,
J'ai un problème : de l'eau qui coule du plafond.
Cela dure depuis deux heures. C'est très urgent.
Pouvez-vous fermer la vanne d'eau ?
Contact : voisin@mail.ch
Je t'envoie aussi ce détail pour être clair.
Le trajet est simple, ne t'inquiète pas.
Merci de votre attention et de votre patience.
Une confirmation arrivera ensuite.
Le lieu est facile à trouver.
Prenez votre temps pour comprendre le message.`;

const CE_POOL_17 = buildExpressPool("e2-2-17", [
  q({
    id: "ce-q1",
    textQ: "Quel est le problème ?",
    text: ["De l'eau qui coule du plafond", "Un chat perdu", "Une fête"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "un problème : _________.",
    fill: "de",
    vfQ: "Le problème est de l'eau qui coule du plafond.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Depuis combien de temps ?",
    text: ["deux heures", "Un jour", "Dix ans"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Cela dure depuis _________.",
    fill: "deux",
    vfQ: "Depuis deux heures.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quel est le niveau d'urgence ?",
    text: ["très urgent", "Pas grave", "Aucun"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "très urgent",
    vfQ: "C'est très urgent.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quelle action demande-t-on ?",
    text: ["Fermer la vanne d'eau", "Rien", "Un voyage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pouvez-vous _________ ?",
    fill: "fermer",
    vfQ: "Demande : fermer la vanne d'eau.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Comment contacter ?",
    text: ["voisin@mail.ch", "Par courrier", "En personne"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "voisin@mail.ch",
    vfQ: "Contact : voisin@mail.ch.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Le problème est-il urgent ?",
    text: ["Oui", "Non", "On ne sait pas"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "très",
    vfQ: "Urgence : très urgent.",
    vfC: 0,
  }),
]);
const CE_TEXT_18 = `Appel SAMU transcrit

Allô,
J'ai un problème : un problème de moisissure.
Cela dure depuis plusieurs mois. C'est mauvais pour la santé.
Pouvez-vous envoyer un expert ?
Contact : sante@mail.ch
Nous traitons votre demande rapidement.
Vous pouvez répondre directement à ce message.
Merci d'avance pour ta réponse.
Je suis disponible après 18 heures.
Passe le bonjour à tout le monde de ma part.
À très bientôt, prends soin de toi.`;

const CE_POOL_18 = buildExpressPool("e2-2-18", [
  q({
    id: "ce-q1",
    textQ: "Quel est le problème ?",
    text: ["Un problème de moisissure", "Un chat perdu", "Une fête"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "un problème : _________.",
    fill: "un",
    vfQ: "Le problème est un problème de moisissure.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Depuis combien de temps ?",
    text: ["plusieurs mois", "Un jour", "Dix ans"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Cela dure depuis _________.",
    fill: "plusieurs",
    vfQ: "Depuis plusieurs mois.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quel est le niveau d'urgence ?",
    text: ["mauvais pour la santé", "Pas grave", "Aucun"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "mauvais pour la santé",
    vfQ: "C'est mauvais pour la santé.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quelle action demande-t-on ?",
    text: ["Envoyer un expert", "Rien", "Un voyage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pouvez-vous _________ ?",
    fill: "envoyer",
    vfQ: "Demande : envoyer un expert.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Comment contacter ?",
    text: ["sante@mail.ch", "Par courrier", "En personne"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "sante@mail.ch",
    vfQ: "Contact : sante@mail.ch.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Le problème est-il urgent ?",
    text: ["Non", "Oui", "On ne sait pas"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "mauvais",
    vfQ: "Urgence : mauvais pour la santé.",
    vfC: 0,
  }),
]);
const CE_TEXT_19 = `Forum dépannage

Bonjour,
J'ai un problème : la hotte de cuisine ne marche plus.
Cela dure depuis une semaine. C'est gênant.
Pouvez-vous envoyer un électricien ?
Contact : forum@depannage.ch
Pensez à vérifier la date et le lieu.
Une réponse rapide nous aide beaucoup.
Vous pouvez venir avec un ami ou un membre de la famille.
Apportez une pièce d'identité si possible.
Vous pouvez venir accompagné(e) si vous le souhaitez.
Un plan simple est disponible à l'accueil.`;

const CE_POOL_19 = buildExpressPool("e2-2-19", [
  q({
    id: "ce-q1",
    textQ: "Quel est le problème ?",
    text: ["La hotte de cuisine ne marche plus", "Un chat perdu", "Une fête"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "un problème : _________.",
    fill: "la",
    vfQ: "Le problème est la hotte de cuisine ne marche plus.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Depuis combien de temps ?",
    text: ["une semaine", "Un jour", "Dix ans"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Cela dure depuis _________.",
    fill: "une",
    vfQ: "Depuis une semaine.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quel est le niveau d'urgence ?",
    text: ["gênant", "Pas grave", "Aucun"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "gênant",
    vfQ: "C'est gênant.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quelle action demande-t-on ?",
    text: ["Envoyer un électricien", "Rien", "Un voyage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pouvez-vous _________ ?",
    fill: "envoyer",
    vfQ: "Demande : envoyer un électricien.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Comment contacter ?",
    text: ["forum@depannage.ch", "Par courrier", "En personne"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "forum@depannage.ch",
    vfQ: "Contact : forum@depannage.ch.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Le problème est-il urgent ?",
    text: ["Non", "Oui", "On ne sait pas"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "gênant",
    vfQ: "Urgence : gênant.",
    vfC: 0,
  }),
]);
const CE_TEXT_20 = `Message assurance habitation

Bonjour,
J'ai un problème : une vitre cassée par la tempête.
Cela dure depuis hier. C'est important.
Pouvez-vous envoyer un vitrier ?
Contact : assur@home.ch
Nous sommes là pour vous aider.
Gardez ce texte pour vous en souvenir.
Les horaires habituels restent les mêmes.
Une question ? Écrivez ou téléphonez.
Respectez la file d'attente, s'il vous plaît.`;

const CE_POOL_20 = buildExpressPool("e2-2-20", [
  q({
    id: "ce-q1",
    textQ: "Quel est le problème ?",
    text: ["Une vitre cassée par la tempête", "Un chat perdu", "Une fête"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "un problème : _________.",
    fill: "une",
    vfQ: "Le problème est une vitre cassée par la tempête.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Depuis combien de temps ?",
    text: ["hier", "Un jour", "Dix ans"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Cela dure depuis _________.",
    fill: "hier",
    vfQ: "Depuis hier.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quel est le niveau d'urgence ?",
    text: ["important", "Pas grave", "Aucun"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "important",
    vfQ: "C'est important.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quelle action demande-t-on ?",
    text: ["Envoyer un vitrier", "Rien", "Un voyage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pouvez-vous _________ ?",
    fill: "envoyer",
    vfQ: "Demande : envoyer un vitrier.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Comment contacter ?",
    text: ["assur@home.ch", "Par courrier", "En personne"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "assur@home.ch",
    vfQ: "Contact : assur@home.ch.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Le problème est-il urgent ?",
    text: ["Non", "Oui", "On ne sait pas"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "important",
    vfQ: "Urgence : important.",
    vfC: 0,
  }),
]);

export const E2_2_CE: CommunicationExercise[] = [
  readingPoolExercise({
  id: "e2-2-1",
  readingText: CE_TEXT_1,
  questionPool: CE_POOL_1
}),
  readingPoolExercise({
  id: "e2-2-2",
  readingText: CE_TEXT_2,
  questionPool: CE_POOL_2
}),
  readingPoolExercise({
  id: "e2-2-3",
  readingText: CE_TEXT_3,
  questionPool: CE_POOL_3
}),
  readingPoolExercise({
  id: "e2-2-4",
  readingText: CE_TEXT_4,
  questionPool: CE_POOL_4
}),
  readingPoolExercise({
  id: "e2-2-5",
  readingText: CE_TEXT_5,
  questionPool: CE_POOL_5
}),
  readingPoolExercise({
  id: "e2-2-6",
  readingText: CE_TEXT_6,
  questionPool: CE_POOL_6
}),
  readingPoolExercise({
  id: "e2-2-7",
  readingText: CE_TEXT_7,
  questionPool: CE_POOL_7
}),
  readingPoolExercise({
  id: "e2-2-8",
  readingText: CE_TEXT_8,
  questionPool: CE_POOL_8
}),
  readingPoolExercise({
  id: "e2-2-9",
  readingText: CE_TEXT_9,
  questionPool: CE_POOL_9
}),
  readingPoolExercise({
  id: "e2-2-10",
  readingText: CE_TEXT_10,
  questionPool: CE_POOL_10
}),
  readingPoolExercise({
  id: "e2-2-11",
  readingText: CE_TEXT_11,
  questionPool: CE_POOL_11
}),
  readingPoolExercise({
  id: "e2-2-12",
  readingText: CE_TEXT_12,
  questionPool: CE_POOL_12
}),
  readingPoolExercise({
  id: "e2-2-13",
  readingText: CE_TEXT_13,
  questionPool: CE_POOL_13
}),
  readingPoolExercise({
  id: "e2-2-14",
  readingText: CE_TEXT_14,
  questionPool: CE_POOL_14
}),
  readingPoolExercise({
  id: "e2-2-15",
  readingText: CE_TEXT_15,
  questionPool: CE_POOL_15
}),
  readingPoolExercise({
  id: "e2-2-16",
  readingText: CE_TEXT_16,
  questionPool: CE_POOL_16
}),
  readingPoolExercise({
  id: "e2-2-17",
  readingText: CE_TEXT_17,
  questionPool: CE_POOL_17
}),
  readingPoolExercise({
  id: "e2-2-18",
  readingText: CE_TEXT_18,
  questionPool: CE_POOL_18
}),
  readingPoolExercise({
  id: "e2-2-19",
  readingText: CE_TEXT_19,
  questionPool: CE_POOL_19
}),
  readingPoolExercise({
  id: "e2-2-20",
  readingText: CE_TEXT_20,
  questionPool: CE_POOL_20
}),
];

/* ── Production orale — dialogues à jouer (thème pannes / dépannage) ───────── */

const CLIENT = { title: "Le client", vous: "le client / la cliente" };
const TECHNICIEN = { title: "Le technicien", vous: "le technicien / la technicienne" };

export const E2_2_PO: ExpressPoDialogue[] = [
  {
    id: "e2-2-po-1",
    title: "Panne d'électricité",
    context: "Vous n'avez plus d'électricité et vous appelez un service de dépannage.",
    roleA: { title: "Le dépanneur", vous: "le dépanneur / la dépanneuse" },
    roleB: CLIENT,
    lines: [
      { role: "A", text: "SOS Dépannage, bonjour !" },
      { role: "B", text: "Bonjour, je n'ai plus d'électricité chez moi." },
      { role: "A", text: "Qu'est-ce qui ne marche pas exactement ?" },
      { role: "B", text: "Les lampes, le frigo et la télé ne marchent plus." },
      { role: "A", text: "D'accord. Vous pouvez me donner votre adresse ?" },
      { role: "B", text: "Oui, 12, rue des Roses. C'est urgent !" },
      { role: "A", text: "Un électricien peut venir aujourd'hui à 15 heures." },
      { role: "B", text: "Parfait, merci beaucoup !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e2-2-po-2",
    title: "Une fuite d'eau",
    context: "Il y a une fuite d'eau dans votre cuisine. Vous appelez un plombier.",
    roleA: { title: "Le plombier", vous: "le plombier / la plombière" },
    roleB: CLIENT,
    lines: [
      { role: "A", text: "Allô, plomberie Martin, j'écoute !" },
      { role: "B", text: "Bonjour, il y a une fuite d'eau dans ma cuisine." },
      { role: "A", text: "C'est une grosse fuite ?" },
      { role: "B", text: "Oui, il y a de l'eau partout !" },
      { role: "A", text: "Fermez l'eau et ne touchez à rien." },
      { role: "B", text: "D'accord. Vous pouvez venir quand ?" },
      { role: "A", text: "J'arrive dans trente minutes." },
      { role: "B", text: "Merci, à tout de suite !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e2-2-po-3",
    title: "La machine à laver en panne",
    context: "Votre machine à laver ne marche plus. Un technicien vous appelle.",
    roleA: TECHNICIEN,
    roleB: CLIENT,
    lines: [
      { role: "A", text: "Bonjour, c'est le technicien. Quel est le problème ?" },
      { role: "B", text: "Ma machine à laver ne marche plus." },
      { role: "A", text: "Elle fait du bruit ou elle ne démarre pas ?" },
      { role: "B", text: "Elle ne démarre pas du tout." },
      { role: "A", text: "Je peux venir demain matin, à 9 heures." },
      { role: "B", text: "D'accord. Et pour le prix ?" },
      { role: "A", text: "Je regarde la panne et je fais un devis." },
      { role: "B", text: "Très bien, à demain !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e2-2-po-4",
    title: "Le chauffage ne marche plus",
    context: "Vous êtes locataire et le chauffage est en panne. Vous appelez le propriétaire.",
    roleA: { title: "Le propriétaire", vous: "le propriétaire / la propriétaire" },
    roleB: { title: "Le locataire", vous: "le locataire / la locataire" },
    lines: [
      { role: "A", text: "Allô, oui, bonjour ?" },
      { role: "B", text: "Bonjour, c'est votre locataire du 3e étage." },
      { role: "A", text: "Ah, bonjour ! Il y a un problème ?" },
      { role: "B", text: "Oui, le chauffage ne marche plus et il fait froid." },
      { role: "A", text: "Depuis quand ?" },
      { role: "B", text: "Depuis hier soir. Les radiateurs sont froids." },
      { role: "A", text: "D'accord, j'appelle un technicien tout de suite." },
      { role: "B", text: "Merci beaucoup, c'est urgent !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e2-2-po-5",
    title: "Prendre rendez-vous",
    context: "Votre four ne marche plus et vous prenez rendez-vous pour un dépannage.",
    roleA: { title: "L'employée", vous: "l'employé / l'employée" },
    roleB: CLIENT,
    lines: [
      { role: "A", text: "Dépann'Service, bonjour !" },
      { role: "B", text: "Bonjour, mon four ne marche plus." },
      { role: "A", text: "Vous êtes libre quand pour un rendez-vous ?" },
      { role: "B", text: "Demain après-midi, c'est possible ?" },
      { role: "A", text: "Oui, le technicien peut venir à 14 heures." },
      { role: "B", text: "Très bien. Il faut préparer quelque chose ?" },
      { role: "A", text: "Non, mais restez à la maison entre 14 et 16 heures." },
      { role: "B", text: "D'accord, merci. À demain !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e2-2-po-6",
    title: "Demander un devis",
    context: "L'électricien est chez vous et vous demandez le prix de la réparation.",
    roleA: { title: "L'électricien", vous: "l'électricien / l'électricienne" },
    roleB: CLIENT,
    lines: [
      { role: "A", text: "Bonjour, je viens pour la panne d'électricité." },
      { role: "B", text: "Bonjour, entrez ! Le problème est dans la cuisine." },
      { role: "A", text: "Je vois… il faut changer une prise." },
      { role: "B", text: "Ça coûte combien ?" },
      { role: "A", text: "Attendez, je fais un devis… 80 euros." },
      { role: "B", text: "D'accord, c'est bon pour moi." },
      { role: "A", text: "Alors je répare tout de suite." },
      { role: "B", text: "Merci, c'est très rapide !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e2-2-po-7",
    title: "La porte est bloquée",
    context: "Vous ne pouvez plus ouvrir votre porte et vous appelez un serrurier.",
    roleA: { title: "Le serrurier", vous: "le serrurier / la serrurière" },
    roleB: CLIENT,
    lines: [
      { role: "A", text: "Allô, serrurerie Rapide, bonjour !" },
      { role: "B", text: "Bonjour, je ne peux plus ouvrir ma porte !" },
      { role: "A", text: "Vous avez la clé ?" },
      { role: "B", text: "Oui, mais la serrure ne marche plus." },
      { role: "A", text: "D'accord. Vous habitez où ?" },
      { role: "B", text: "5, avenue du Parc, au 2e étage." },
      { role: "A", text: "Un serrurier arrive dans une heure." },
      { role: "B", text: "Merci ! Il peut m'appeler avant de venir ?" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e2-2-po-8",
    title: "Internet ne marche plus",
    context: "Votre box internet est en panne. Vous appelez le service technique.",
    roleA: TECHNICIEN,
    roleB: CLIENT,
    lines: [
      { role: "A", text: "Service technique, bonjour ! Je peux vous aider ?" },
      { role: "B", text: "Oui, ma box internet ne marche plus depuis ce matin." },
      { role: "A", text: "Est-ce que la petite lampe de la box est allumée ?" },
      { role: "B", text: "Non, elle est rouge." },
      { role: "A", text: "D'accord. Éteignez la box et rallumez-la." },
      { role: "B", text: "Voilà… Ah, la lampe est verte maintenant !" },
      { role: "A", text: "Parfait ! Internet marche de nouveau ?" },
      { role: "B", text: "Oui, ça marche ! Merci beaucoup !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e2-2-po-9",
    title: "Demander de l'aide au voisin",
    context: "Vous n'avez plus de lumière et vous demandez de l'aide à votre voisin.",
    roleA: { title: "Vous", vous: "vous-même" },
    roleB: { title: "Le voisin", vous: "le voisin / la voisine" },
    lines: [
      { role: "A", text: "Bonjour ! Excusez-moi, vous pouvez m'aider ?" },
      { role: "B", text: "Bonjour ! Oui, qu'est-ce qui se passe ?" },
      { role: "A", text: "Je n'ai plus de lumière dans mon appartement." },
      { role: "B", text: "Vous avez regardé le compteur électrique ?" },
      { role: "A", text: "Non, je ne sais pas où il est." },
      { role: "B", text: "Il est dans le couloir, à côté de la porte. Venez !" },
      { role: "A", text: "Ah oui, le bouton est en bas… Et voilà, ça marche !" },
      { role: "B", text: "Super ! Ce n'est pas une vraie panne alors." },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e2-2-po-10",
    title: "Le frigo fait un bruit bizarre",
    context: "Votre frigo fait un bruit étrange. Le réparateur est chez vous.",
    roleA: { title: "Le réparateur", vous: "le réparateur / la réparatrice" },
    roleB: CLIENT,
    lines: [
      { role: "A", text: "Bonjour, c'est pour le frigo en panne ?" },
      { role: "B", text: "Oui, entrez. Il fait un bruit bizarre depuis trois jours." },
      { role: "A", text: "Il fait encore du froid ?" },
      { role: "B", text: "Oui, mais le bruit est très fort la nuit." },
      { role: "A", text: "Je regarde… Le moteur est vieux, il faut le changer." },
      { role: "B", text: "Ça coûte combien ?" },
      { role: "A", text: "90 euros avec la réparation. C'est d'accord ?" },
      { role: "B", text: "Oui, d'accord. Vous pouvez le faire aujourd'hui ?" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
{
  id: "e2-2-po-11",
  title: "À la mairie",
  context: "Vous êtes à la mairie et vous expliquez un problème domestique.",
  roleA: { title: "L'agent d'accueil", vous: "l'agent / l'agente d'accueil" },
  roleB: { title: "Vous", vous: "la personne qui demande des renseignements" },
  lines: [
    { role: "A", text: "Bonjour, je peux vous aider ?" },
    { role: "B", text: "Bonjour, je peux vous parler de un problème domestique ?" },
    { role: "A", text: "Bien sûr. Que souhaitez-vous savoir exactement ?" },
    { role: "B", text: "Je voudrais comprendre comment ça marche pour problème domestique." },
    { role: "A", text: "Je vais vous expliquer. Vous avez déjà un dossier ?" },
    { role: "B", text: "Pas encore. C'est la première fois." },
    { role: "A", text: "Pas de problème. Prenez ce formulaire et remplissez-le." },
    { role: "B", text: "D'accord. Je peux le rendre aujourd'hui ?" },
    { role: "A", text: "Oui, avant 17 heures, c'est parfait." },
    { role: "B", text: "Merci beaucoup pour votre aide !" },
  ],
},
{
  id: "e2-2-po-12",
  title: "Au téléphone",
  context: "Vous êtes au téléphone et vous expliquez un problème domestique.",
  roleA: { title: "L'interlocuteur", vous: "la personne au téléphone" },
  roleB: { title: "Vous", vous: "la personne qui appelle" },
  lines: [
    { role: "A", text: "Bonjour ! Vous cherchez quelque chose ?" },
    { role: "B", text: "Bonjour, j'ai une question à propos de un problème domestique." },
    { role: "A", text: "D'accord. Vous êtes déjà passé(e) ici pour ça ?" },
    { role: "B", text: "Non, c'est la première fois. Je suis un peu perdu(e)." },
    { role: "A", text: "Je comprends. Pour le problème domestique, il faut d'abord prendre un numéro." },
    { role: "B", text: "Et ensuite, j'attends où ?" },
    { role: "A", text: "Dans la salle d'attente, à droite. On vous appellera." },
    { role: "B", text: "Combien de temps ça prend, environ ?" },
    { role: "A", text: "En général, dix à quinze minutes." },
    { role: "B", text: "Parfait, merci beaucoup !" },
  ],
},
{
  id: "e2-2-po-13",
  title: "Chez le voisin",
  context: "Vous êtes chez le voisin et vous expliquez un problème domestique.",
  roleA: { title: "Le voisin", vous: "le voisin / la voisine" },
  roleB: { title: "Vous", vous: "la personne qui vient parler" },
  lines: [
    { role: "A", text: "Oui, bonjour, je vous écoute." },
    { role: "B", text: "Bonjour, c'est au sujet de un problème domestique." },
    { role: "A", text: "Bien sûr. Vous pouvez me donner plus de détails ?" },
    { role: "B", text: "Oui. Je cherche une solution simple pour problème domestique." },
    { role: "A", text: "Il y a deux possibilités. Vous préférez le matin ou l'après-midi ?" },
    { role: "B", text: "L'après-midi, après 15 heures." },
    { role: "A", text: "Alors je vous propose jeudi à 15 h 30." },
    { role: "B", text: "C'est parfait. Vous m'envoyez une confirmation ?" },
    { role: "A", text: "Oui, par SMS. Vous avez noté mon nom ?" },
    { role: "B", text: "Oui. Merci et à jeudi !" },
  ],
},
{
  id: "e2-2-po-14",
  title: "À l'accueil",
  context: "Vous êtes à l'accueil et vous expliquez un problème domestique.",
  roleA: { title: "L'accueil", vous: "la personne à l'accueil" },
  roleB: { title: "Vous", vous: "la personne qui demande de l'aide" },
  lines: [
    { role: "A", text: "Bonjour, je peux vous aider ?" },
    { role: "B", text: "Bonjour, je peux vous parler de un problème domestique ?" },
    { role: "A", text: "Bien sûr. Que souhaitez-vous savoir exactement ?" },
    { role: "B", text: "Je voudrais comprendre comment ça marche pour problème domestique." },
    { role: "A", text: "Je vais vous expliquer. Vous avez déjà un dossier ?" },
    { role: "B", text: "Pas encore. C'est la première fois." },
    { role: "A", text: "Pas de problème. Prenez ce formulaire et remplissez-le." },
    { role: "B", text: "D'accord. Je peux le rendre aujourd'hui ?" },
    { role: "A", text: "Oui, avant 17 heures, c'est parfait." },
    { role: "B", text: "Merci beaucoup pour votre aide !" },
  ],
},
{
  id: "e2-2-po-15",
  title: "Dans la rue",
  context: "Vous êtes dans la rue et vous expliquez un problème domestique.",
  roleA: { title: "Le passant", vous: "le passant / la passante" },
  roleB: { title: "Vous", vous: "la personne qui demande son chemin" },
  lines: [
    { role: "A", text: "Oui, bonjour, je vous écoute." },
    { role: "B", text: "Bonjour, c'est au sujet de un problème domestique." },
    { role: "A", text: "Bien sûr. Vous pouvez me donner plus de détails ?" },
    { role: "B", text: "Oui. Je cherche une solution simple pour problème domestique." },
    { role: "A", text: "Il y a deux possibilités. Vous préférez le matin ou l'après-midi ?" },
    { role: "B", text: "L'après-midi, après 15 heures." },
    { role: "A", text: "Alors je vous propose jeudi à 15 h 30." },
    { role: "B", text: "C'est parfait. Vous m'envoyez une confirmation ?" },
    { role: "A", text: "Oui, par SMS. Vous avez noté mon nom ?" },
    { role: "B", text: "Oui. Merci et à jeudi !" },
  ],
},
{
  id: "e2-2-po-16",
  title: "Au bureau",
  context: "Vous êtes au bureau et vous expliquez un problème domestique.",
  roleA: { title: "Le collègue", vous: "le collègue / la collègue" },
  roleB: { title: "Vous", vous: "le collègue / la collègue" },
  lines: [
    { role: "A", text: "Bonjour ! Vous cherchez quelque chose ?" },
    { role: "B", text: "Bonjour, j'ai une question à propos de un problème domestique." },
    { role: "A", text: "D'accord. Vous êtes déjà passé(e) ici pour ça ?" },
    { role: "B", text: "Non, c'est la première fois. Je suis un peu perdu(e)." },
    { role: "A", text: "Je comprends. Pour le problème domestique, il faut d'abord prendre un numéro." },
    { role: "B", text: "Et ensuite, j'attends où ?" },
    { role: "A", text: "Dans la salle d'attente, à droite. On vous appellera." },
    { role: "B", text: "Combien de temps ça prend, environ ?" },
    { role: "A", text: "En général, dix à quinze minutes." },
    { role: "B", text: "Parfait, merci beaucoup !" },
  ],
},
{
  id: "e2-2-po-17",
  title: "À la réception",
  context: "Vous êtes à la réception et vous expliquez un problème domestique.",
  roleA: { title: "Le réceptionniste", vous: "le / la réceptionniste" },
  roleB: { title: "Vous", vous: "le client / la cliente" },
  lines: [
    { role: "A", text: "Bonjour, vous désirez ?" },
    { role: "B", text: "Bonjour, je voudrais des informations sur un problème domestique." },
    { role: "A", text: "Avec plaisir. C'est urgent ?" },
    { role: "B", text: "Oui, un peu. J'ai besoin d'une réponse rapidement." },
    { role: "A", text: "Pour le problème domestique, je peux vous donner les infos principales." },
    { role: "B", text: "Super. Est-ce que je dois apporter des documents ?" },
    { role: "A", text: "Oui : une pièce d'identité et un justificatif de domicile." },
    { role: "B", text: "Je les ai dans mon sac. Je peux les montrer maintenant ?" },
    { role: "A", text: "Oui, venez au bureau 2. Je vous suis." },
    { role: "B", text: "Merci, c'est très gentil !" },
  ],
},
{
  id: "e2-2-po-18",
  title: "En visioconférence",
  context: "Vous êtes en visio et vous expliquez un problème domestique.",
  roleA: { title: "Le correspondant", vous: "le correspondant / la correspondante" },
  roleB: { title: "Vous", vous: "la personne en visio" },
  lines: [
    { role: "A", text: "Bonjour, vous désirez ?" },
    { role: "B", text: "Bonjour, je voudrais des informations sur un problème domestique." },
    { role: "A", text: "Avec plaisir. C'est urgent ?" },
    { role: "B", text: "Oui, un peu. J'ai besoin d'une réponse rapidement." },
    { role: "A", text: "Pour le problème domestique, je peux vous donner les infos principales." },
    { role: "B", text: "Super. Est-ce que je dois apporter des documents ?" },
    { role: "A", text: "Oui : une pièce d'identité et un justificatif de domicile." },
    { role: "B", text: "Je les ai dans mon sac. Je peux les montrer maintenant ?" },
    { role: "A", text: "Oui, venez au bureau 2. Je vous suis." },
    { role: "B", text: "Merci, c'est très gentil !" },
  ],
},
{
  id: "e2-2-po-19",
  title: "Au guichet",
  context: "Vous êtes au guichet et vous expliquez un problème domestique.",
  roleA: { title: "L'employé", vous: "l'employé / l'employée du guichet" },
  roleB: { title: "Vous", vous: "le client / la cliente" },
  lines: [
    { role: "A", text: "Oui, bonjour, je vous écoute." },
    { role: "B", text: "Bonjour, c'est au sujet de un problème domestique." },
    { role: "A", text: "Bien sûr. Vous pouvez me donner plus de détails ?" },
    { role: "B", text: "Oui. Je cherche une solution simple pour problème domestique." },
    { role: "A", text: "Il y a deux possibilités. Vous préférez le matin ou l'après-midi ?" },
    { role: "B", text: "L'après-midi, après 15 heures." },
    { role: "A", text: "Alors je vous propose jeudi à 15 h 30." },
    { role: "B", text: "C'est parfait. Vous m'envoyez une confirmation ?" },
    { role: "A", text: "Oui, par SMS. Vous avez noté mon nom ?" },
    { role: "B", text: "Oui. Merci et à jeudi !" },
  ],
},
{
  id: "e2-2-po-20",
  title: "Dans un magasin",
  context: "Vous êtes dans un magasin et vous expliquez un problème domestique.",
  roleA: { title: "Le vendeur", vous: "le vendeur / la vendeuse" },
  roleB: { title: "Vous", vous: "le client / la cliente" },
  lines: [
    { role: "A", text: "Oui, bonjour, je vous écoute." },
    { role: "B", text: "Bonjour, c'est au sujet de un problème domestique." },
    { role: "A", text: "Bien sûr. Vous pouvez me donner plus de détails ?" },
    { role: "B", text: "Oui. Je cherche une solution simple pour problème domestique." },
    { role: "A", text: "Il y a deux possibilités. Vous préférez le matin ou l'après-midi ?" },
    { role: "B", text: "L'après-midi, après 15 heures." },
    { role: "A", text: "Alors je vous propose jeudi à 15 h 30." },
    { role: "B", text: "C'est parfait. Vous m'envoyez une confirmation ?" },
    { role: "A", text: "Oui, par SMS. Vous avez noté mon nom ?" },
    { role: "B", text: "Oui. Merci et à jeudi !" },
  ],
}
];

/* ── Production écrite — consignes (A1 : 50 mots minimum) ─────────────────── */

const PE_MIN = 50;
const PE_MAX = 120;

export const E2_2_PE: ExpressPePrompt[] = [
  {
    id: "e2-2-pe-1",
    title: "Demande à un réparateur",
    situation: "",
    instruction: "Vous envoyez un courriel à un réparateur, plombier, électricien ou serrurier. Vous expliquez le problème et demandez un devis.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-2-pe-2",
    title: "Conseil à un ami",
    situation: "",
    instruction: "Un ami arrive en France et à un problème dans sa maison ou son appartement. Vous expliquez ce qu'il peut faire.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-2-pe-3",
    title: "Fuite dans la cuisine",
    situation: "",
    instruction: "Vous avez une fuite dans la cuisine. Écrivez un message au proprietaire pour expliquer la situation et demander une intervention rapide.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-2-pe-4",
    title: "Porte bloquee",
    situation: "",
    instruction: "Votre porte d'entree ne ferme pas bien. Écrivez un message simple à un serrurier avec votre adresse et vos disponibilites.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-2-pe-5",
    title: "Chauffage en panne",
    situation: "",
    instruction: "Il fait froid dans votre appartement car le chauffage ne marche pas. Écrivez un message pour signaler le problème et demander de l'aide.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-2-pe-6",
    title: "Machine bruyante",
    situation: "",
    instruction: "Votre machine à laver fait beaucoup de bruit. Écrivez un message à un réparateur pour décrire le bruit et demander un rendez-vous.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-2-pe-7",
    title: "Lumiere couloir",
    situation: "",
    instruction: "La lumiere du couloir ne fonctionne plus. Écrivez un mot pour le gardien avec le lieu precis et l'heure où vous avez vu le problème.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-2-pe-8",
    title: "Internet coupe",
    situation: "",
    instruction: "Vous n'avez plus internet à la maison. Écrivez un message à votre colocataire pour expliquer le problème et proposer une solution.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-2-pe-9",
    title: "Fenetre cassee",
    situation: "",
    instruction: "Une fenetre est cassee après un coup de vent. Écrivez un message au proprietaire pour décrire les degats et demander quoi faire.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-2-pe-10",
    title: "Evier bouche",
    situation: "",
    instruction: "L'evier de la salle de bain est bouche. Écrivez un court message à un plombier avec le problème, votre adresse et vos horaires libres.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-2-pe-11",
    title: "Four en panne",
    situation: "",
    instruction: "Votre four ne chauffe plus avant un dîner. Écrivez un message à un ami pour demander s'il peut vous preter sa cuisine.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-2-pe-12",
    title: "Cle perdue",
    situation: "",
    instruction: "Vous avez perdu vos cles. Écrivez un message à votre colocataire pour expliquer la situation et demander une solution pratique.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-2-pe-13",
    title: "Conseils de securite",
    situation: "",
    instruction: "Un ami à une prise electrique dangereuse. Écrivez un message pour lui conseiller d'appeler un professionnel et de ne pas toucher la prise.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-2-pe-14",
    title: "Rendez-vous annule",
    situation: "",
    instruction: "Le réparateur ne peut pas venir aujourd'hui. Écrivez un message pour proposer deux nouveaux horaires et demander une confirmation.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-2-pe-15",
    title: "Odeur de gaz",
    situation: "",
    instruction: "Vous sentez une odeur de gaz dans la cuisine. Écrivez un message très clair au gardien pour expliquer ce que vous faites tout de suite.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-2-pe-16",
    title: "Volet bloque",
    situation: "",
    instruction: "Le volet du salon est bloque. Écrivez un message au service technique pour décrire le problème et dire quand vous êtes chez vous.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-2-pe-17",
    title: "Salle de bain humide",
    situation: "",
    instruction: "Il y a de l'humidite dans la salle de bain. Écrivez un message au proprietaire pour expliquer ce que vous voyez et demander une visite.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-2-pe-18",
    title: "Problème après travaux",
    situation: "",
    instruction: "Après des travaux, une prise ne fonctionne plus. Écrivez un message à l'entreprise pour demander une verification.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-2-pe-19",
    title: "Petite réparation",
    situation: "",
    instruction: "Vous avez besoin d'une petite réparation dans votre chambre. Écrivez un message à un ami bricoleur pour demander son aide poliment.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-2-pe-20",
    title: "Urgence du soir",
    situation: "",
    instruction: "Un problème domestique arrive le soir. Écrivez un message court pour expliquer le problème, dire si c'est urgent et donner votre téléphone.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },

];
