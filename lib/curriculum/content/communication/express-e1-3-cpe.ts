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

/* ── Compréhension écrite — E1.3 Inviter quelqu'un ── */

const CE_TEXT_1 = `Invitation anniversaire

Chère Sophie,
Je t'invite gâteau et musique !
C'est samedi 15 mars à 19 h, chez moi.
Confirme ta présence !
Julie
Merci de parler doucement dans les couloirs.
Les sacs volumineux se déposent à l'accueil.
Un vestiaire gratuit est disponible.
Les consignes de sécurité sont affichées en rouge.
Je t'envoie aussi ce détail pour être clair.
Merci de garder ce document avec vous.
Les informations sont valables pour cette semaine.`;

const CE_POOL_1 = buildExpressPool("e1-3-1", [
  q({
    id: "ce-q1",
    textQ: "Quel type de texte est-ce ?",
    text: ["Invitation", "Une facture", "Un horaire de bus"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Invitation _________",
    fill: "anniversaire",
    vfQ: "C'est une facture.",
    vfC: 1,
  }),
  q({
    id: "ce-q2",
    textQ: "Quand a lieu l'événement ?",
    text: ["Samedi 15 mars", "Hier", "En hiver seulement"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________",
    fill: "samedi",
    vfQ: "L'événement est samedi 15 mars.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "À quelle heure ?",
    text: ["19 h", "Minuit", "6 h du matin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "à _________,",
    fill: "19",
    vfQ: "L'heure est 19 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Où a lieu l'événement ?",
    text: ["Chez moi", "À l'hôpital", "À l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "chez _________",
    fill: "moi",
    vfQ: "C'est chez moi.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel est l'événement ?",
    text: ["Gâteau et musique", "Un examen", "Un déménagement"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je t'invite gâteau _________ !",
    fill: "musique",
    vfQ: "C'est gâteau et musique.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Qui écrit le message ?",
    text: ["Julie", "Le maire", "Le facteur"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________",
    fill: "Julie",
    vfQ: "Julie écrit le message.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Est-ce une invitation ?",
    text: ["Oui", "Non", "On ne sait pas"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je t'invite _________ !",
    fill: "gâteau",
    vfQ: "C'est une invitation.",
    vfC: 0,
  }),
]);
const CE_TEXT_2 = `SMS — soirée cinéma

Salut Tom !
Je t'invite le nouveau film français !
C'est vendredi soir à 20 h, au cinéma du centre.
Tu viens ?
Léa
Je joins les détails importants juste après.
Si le plan change, je te préviens tout de suite.
C'est important pour moi, merci de lire jusqu'à la fin.
Tu peux partager ce message si besoin.
Nous traitons votre demande rapidement.
Bonne journée et à tout de suite !
Je reste près de mon téléphone aujourd'hui.`;

const CE_POOL_2 = buildExpressPool("e1-3-2", [
  q({
    id: "ce-q1",
    textQ: "Quel type de texte est-ce ?",
    text: ["SMS", "Une facture", "Un horaire de bus"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "SMS _________",
    fill: "cinéma",
    vfQ: "C'est une facture.",
    vfC: 1,
  }),
  q({
    id: "ce-q2",
    textQ: "Quand a lieu l'événement ?",
    text: ["Vendredi soir", "Hier", "En hiver seulement"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________",
    fill: "vendredi",
    vfQ: "L'événement est vendredi soir.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "À quelle heure ?",
    text: ["20 h", "Minuit", "6 h du matin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "à _________,",
    fill: "20",
    vfQ: "L'heure est 20 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Où a lieu l'événement ?",
    text: ["Au cinéma du centre", "À l'hôpital", "À l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "au _________",
    fill: "centre",
    vfQ: "C'est au cinéma du centre.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel est l'événement ?",
    text: ["Le nouveau film français", "Un examen", "Un déménagement"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je t'invite le _________ !",
    fill: "français",
    vfQ: "C'est le nouveau film français.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Qui écrit le message ?",
    text: ["Léa", "Le maire", "Le facteur"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________",
    fill: "Léa",
    vfQ: "Léa écrit le message.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Est-ce une invitation ?",
    text: ["Oui", "Non", "On ne sait pas"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je t'invite _________ !",
    fill: "le",
    vfQ: "C'est une invitation.",
    vfC: 0,
  }),
]);
const CE_TEXT_3 = `Carte d'invitation

Cher Paul,
Je t'invite un pique-nique !
C'est dimanche prochain à 14 h, au parc de la Tournette.
Apporte une boisson !
Emma
À bientôt, et merci de votre lecture.
Voici quelques détails utiles pour la suite.
Lisez bien jusqu'à la fin, s'il vous plaît.
Vous pouvez demander de l'aide si besoin.
Les informations importantes sont déjà notées plus haut.
Passe le bonjour à tout le monde.
Merci de votre attention et de votre patience.`;

const CE_POOL_3 = buildExpressPool("e1-3-3", [
  q({
    id: "ce-q1",
    textQ: "Quel type de texte est-ce ?",
    text: ["Carte", "Une facture", "Un horaire de bus"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Carte _________",
    fill: "d'invitation",
    vfQ: "C'est une facture.",
    vfC: 1,
  }),
  q({
    id: "ce-q2",
    textQ: "Quand a lieu l'événement ?",
    text: ["Dimanche prochain", "Hier", "En hiver seulement"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________",
    fill: "dimanche",
    vfQ: "L'événement est dimanche prochain.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "À quelle heure ?",
    text: ["14 h", "Minuit", "6 h du matin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "à _________,",
    fill: "14",
    vfQ: "L'heure est 14 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Où a lieu l'événement ?",
    text: ["Au parc de la tournette", "À l'hôpital", "À l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "au _________",
    fill: "Tournette",
    vfQ: "C'est au parc de la Tournette.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel est l'événement ?",
    text: ["Un pique-nique", "Un examen", "Un déménagement"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je t'invite un _________ !",
    fill: "pique-nique",
    vfQ: "C'est un pique-nique.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Qui écrit le message ?",
    text: ["Emma", "Le maire", "Le facteur"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________",
    fill: "Emma",
    vfQ: "Emma écrit le message.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Est-ce une invitation ?",
    text: ["Oui", "Non", "On ne sait pas"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je t'invite _________ !",
    fill: "un",
    vfQ: "C'est une invitation.",
    vfC: 0,
  }),
]);
const CE_TEXT_4 = `Message WhatsApp — apéro

Coucou !
Je t'invite des tapas !
C'est jeudi à 18 h 30, sur mon balcon.
Dis-moi si tu peux venir.
Nina
Si le plan change, je te préviens tout de suite.
C'est important pour moi, merci de lire jusqu'à la fin.
Tu peux partager ce message si besoin.
Vous pouvez répondre directement à ce message.
Bonne journée et à tout de suite !
Je reste près de mon téléphone aujourd'hui.`;

const CE_POOL_4 = buildExpressPool("e1-3-4", [
  q({
    id: "ce-q1",
    textQ: "Quel type de texte est-ce ?",
    text: ["Message WhatsApp", "Une facture", "Un horaire de bus"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Message _________",
    fill: "apéro",
    vfQ: "C'est une facture.",
    vfC: 1,
  }),
  q({
    id: "ce-q2",
    textQ: "Quand a lieu l'événement ?",
    text: ["Jeudi", "Hier", "En hiver seulement"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________",
    fill: "jeudi",
    vfQ: "L'événement est jeudi.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "À quelle heure ?",
    text: ["18 h 30", "Minuit", "6 h du matin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "à _________,",
    fill: "18 30",
    vfQ: "L'heure est 18 h 30.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Où a lieu l'événement ?",
    text: ["Sur mon balcon", "À l'hôpital", "À l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "sur _________",
    fill: "balcon",
    vfQ: "C'est sur mon balcon.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel est l'événement ?",
    text: ["Des tapas", "Un examen", "Un déménagement"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je t'invite des _________ !",
    fill: "tapas",
    vfQ: "C'est des tapas.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Qui écrit le message ?",
    text: ["Nina", "Le maire", "Le facteur"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________",
    fill: "Nina",
    vfQ: "Nina écrit le message.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Est-ce une invitation ?",
    text: ["Oui", "Non", "On ne sait pas"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je t'invite _________ !",
    fill: "des",
    vfQ: "C'est une invitation.",
    vfC: 0,
  }),
]);
const CE_TEXT_5 = `Affichage salle commune

Chers voisins,
Je t'invite un barbecue !
C'est samedi 22 à 17 h, dans la cour.
Inscrivez-vous à la loge.
Karim
Nous vous remercions de votre patience.
Les toilettes se trouvent au fond du couloir.
Une version en plusieurs langues est disponible à l'accueil.
N'oubliez pas de vérifier la date et l'heure.
Merci de ne pas bloquer les issues de secours.
Le personnel porte un badge visible.
Les animaux ne sont pas autorisés, sauf chiens guides.`;

const CE_POOL_5 = buildExpressPool("e1-3-5", [
  q({
    id: "ce-q1",
    textQ: "Quel type de texte est-ce ?",
    text: ["Affichage", "Une facture", "Un horaire de bus"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Affichage _________",
    fill: "commune",
    vfQ: "C'est une facture.",
    vfC: 1,
  }),
  q({
    id: "ce-q2",
    textQ: "Quand a lieu l'événement ?",
    text: ["Samedi 22", "Hier", "En hiver seulement"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________",
    fill: "samedi",
    vfQ: "L'événement est samedi 22.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "À quelle heure ?",
    text: ["17 h", "Minuit", "6 h du matin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "à _________,",
    fill: "17",
    vfQ: "L'heure est 17 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Où a lieu l'événement ?",
    text: ["Dans la cour", "À l'hôpital", "À l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "dans _________",
    fill: "cour",
    vfQ: "C'est dans la cour.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel est l'événement ?",
    text: ["Un barbecue", "Un examen", "Un déménagement"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je t'invite un _________ !",
    fill: "barbecue",
    vfQ: "C'est un barbecue.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Qui écrit le message ?",
    text: ["Karim", "Le maire", "Le facteur"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________",
    fill: "Karim",
    vfQ: "Karim écrit le message.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Est-ce une invitation ?",
    text: ["Oui", "Non", "On ne sait pas"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je t'invite _________ !",
    fill: "un",
    vfQ: "C'est une invitation.",
    vfC: 0,
  }),
]);
const CE_TEXT_6 = `E-mail informel

Bonjour Marc,
Je t'invite le déjeuner !
C'est mercredi prochain à 12 h 30, au restaurant Le Lac.
C'est pour mon anniversaire !
Hugo
Merci encore, et à bientôt.
Tout est organisé pour que ce soit simple.
Le contact est indiqué dans le message.
N'oubliez pas de vérifier la date.
Merci de votre attention et de votre patience.
Bonne journée à toutes et à tous.
Ce document complète les informations déjà données.`;

const CE_POOL_6 = buildExpressPool("e1-3-6", [
  q({
    id: "ce-q1",
    textQ: "Quel type de texte est-ce ?",
    text: ["E-mail", "Une facture", "Un horaire de bus"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "E-mail _________",
    fill: "informel",
    vfQ: "C'est une facture.",
    vfC: 1,
  }),
  q({
    id: "ce-q2",
    textQ: "Quand a lieu l'événement ?",
    text: ["Mercredi prochain", "Hier", "En hiver seulement"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________",
    fill: "mercredi",
    vfQ: "L'événement est mercredi prochain.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "À quelle heure ?",
    text: ["12 h 30", "Minuit", "6 h du matin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "à _________,",
    fill: "12 30",
    vfQ: "L'heure est 12 h 30.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Où a lieu l'événement ?",
    text: ["Au restaurant le lac", "À l'hôpital", "À l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "au _________",
    fill: "Lac",
    vfQ: "C'est au restaurant Le Lac.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel est l'événement ?",
    text: ["Le déjeuner", "Un examen", "Un déménagement"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je t'invite le _________ !",
    fill: "déjeuner",
    vfQ: "C'est le déjeuner.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Qui écrit le message ?",
    text: ["Hugo", "Le maire", "Le facteur"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________",
    fill: "Hugo",
    vfQ: "Hugo écrit le message.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Est-ce une invitation ?",
    text: ["Oui", "Non", "On ne sait pas"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je t'invite _________ !",
    fill: "le",
    vfQ: "C'est une invitation.",
    vfC: 0,
  }),
]);
const CE_TEXT_7 = `Invitation mariage civil

Chers amis,
Je t'invite notre mariage !
C'est le 5 juin à 11 h, à la mairie de Nyon.
Réponse avant le 1er mai.
Clara et Yann
Le temps est beau, alors tout devrait bien se passer.
Prenez un pull, au cas où il ferait plus frais.
Le parking le plus proche est gratuit le soir.
Vous pouvez venir en vélo s'il fait beau.
En cas de changement, un nouvel avis sera publié.
Bonne journée à toutes et à tous.
Merci de garder ce document avec vous.`;

const CE_POOL_7 = buildExpressPool("e1-3-7", [
  q({
    id: "ce-q1",
    textQ: "Quel type de texte est-ce ?",
    text: ["Invitation", "Une facture", "Un horaire de bus"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Invitation _________",
    fill: "civil",
    vfQ: "C'est une facture.",
    vfC: 1,
  }),
  q({
    id: "ce-q2",
    textQ: "Quand a lieu l'événement ?",
    text: ["Le 5 juin", "Hier", "En hiver seulement"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________",
    fill: "le",
    vfQ: "L'événement est le 5 juin.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "À quelle heure ?",
    text: ["11 h", "Minuit", "6 h du matin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "à _________,",
    fill: "11",
    vfQ: "L'heure est 11 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Où a lieu l'événement ?",
    text: ["À la mairie de nyon", "À l'hôpital", "À l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "à _________",
    fill: "Nyon",
    vfQ: "C'est à la mairie de Nyon.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel est l'événement ?",
    text: ["Notre mariage", "Un examen", "Un déménagement"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je t'invite notre _________ !",
    fill: "mariage",
    vfQ: "C'est notre mariage.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Qui écrit le message ?",
    text: ["Clara et Yann", "Le maire", "Le facteur"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________",
    fill: "Clara et Yann",
    vfQ: "Clara et Yann écrit le message.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Est-ce une invitation ?",
    text: ["Oui", "Non", "On ne sait pas"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je t'invite _________ !",
    fill: "notre",
    vfQ: "C'est une invitation.",
    vfC: 0,
  }),
]);
const CE_TEXT_8 = `Note sur la porte

Chers collègues,
Je t'invite un gâteau d'adieu !
C'est vendredi à 16 h, dans la salle de pause.
Je pars à la retraite !
Michel
Une réponse rapide nous aide beaucoup.
Vous pouvez venir avec un ami ou un membre de la famille.
Apportez une pièce d'identité si possible.
Le lieu est accessible en bus et à pied.
Un plan est disponible sur demande.
Nous vous attendons avec plaisir.
Joignez les documents demandés si nécessaire.`;

const CE_POOL_8 = buildExpressPool("e1-3-8", [
  q({
    id: "ce-q1",
    textQ: "Quel type de texte est-ce ?",
    text: ["Note", "Une facture", "Un horaire de bus"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Note _________",
    fill: "porte",
    vfQ: "C'est une facture.",
    vfC: 1,
  }),
  q({
    id: "ce-q2",
    textQ: "Quand a lieu l'événement ?",
    text: ["Vendredi", "Hier", "En hiver seulement"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________",
    fill: "vendredi",
    vfQ: "L'événement est vendredi.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "À quelle heure ?",
    text: ["16 h", "Minuit", "6 h du matin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "à _________,",
    fill: "16",
    vfQ: "L'heure est 16 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Où a lieu l'événement ?",
    text: ["Dans la salle de pause", "À l'hôpital", "À l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "dans _________",
    fill: "pause",
    vfQ: "C'est dans la salle de pause.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel est l'événement ?",
    text: ["Un gâteau d'adieu", "Un examen", "Un déménagement"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je t'invite un _________ !",
    fill: "d'adieu",
    vfQ: "C'est un gâteau d'adieu.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Qui écrit le message ?",
    text: ["Michel", "Le maire", "Le facteur"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________",
    fill: "Michel",
    vfQ: "Michel écrit le message.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Est-ce une invitation ?",
    text: ["Oui", "Non", "On ne sait pas"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je t'invite _________ !",
    fill: "un",
    vfQ: "C'est une invitation.",
    vfC: 0,
  }),
]);
const CE_TEXT_9 = `Forum école — sortie

Bonjour à tous,
Je t'invite une visite au musée !
C'est le 10 avril à 8 h, devant l'école.
Les parents sont les bienvenus.
Prof. Martin
Le lieu est facile à trouver.
Prenez votre temps pour comprendre le message.
En cas de changement, un nouvel avis sera publié.
Nous sommes là pour vous aider.
Gardez ce texte pour vous en souvenir.
Les horaires habituels restent les mêmes.
C'est important pour moi, merci beaucoup.`;

const CE_POOL_9 = buildExpressPool("e1-3-9", [
  q({
    id: "ce-q1",
    textQ: "Quel type de texte est-ce ?",
    text: ["Forum école", "Une facture", "Un horaire de bus"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Forum _________",
    fill: "sortie",
    vfQ: "C'est une facture.",
    vfC: 1,
  }),
  q({
    id: "ce-q2",
    textQ: "Quand a lieu l'événement ?",
    text: ["Le 10 avril", "Hier", "En hiver seulement"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________",
    fill: "le",
    vfQ: "L'événement est le 10 avril.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "À quelle heure ?",
    text: ["8 h", "Minuit", "6 h du matin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "à _________,",
    fill: "8",
    vfQ: "L'heure est 8 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Où a lieu l'événement ?",
    text: ["Devant l'école", "À l'hôpital", "À l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "devant _________",
    fill: "l'école",
    vfQ: "C'est devant l'école.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel est l'événement ?",
    text: ["Une visite au musée", "Un examen", "Un déménagement"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je t'invite une _________ !",
    fill: "musée",
    vfQ: "C'est une visite au musée.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Qui écrit le message ?",
    text: ["Prof. Martin", "Le maire", "Le facteur"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________",
    fill: "Prof. Martin",
    vfQ: "Prof. Martin écrit le message.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Est-ce une invitation ?",
    text: ["Oui", "Non", "On ne sait pas"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je t'invite _________ !",
    fill: "une",
    vfQ: "C'est une invitation.",
    vfC: 0,
  }),
]);
const CE_TEXT_10 = `Message vocal d'un ami

Salut !
Je t'invite une baignade !
C'est samedi à 15 h, à la piscine.
Amène ton maillot !
Omar
Le contact est indiqué dans le message.
N'oubliez pas de vérifier la date.
Je t'envoie aussi ce détail pour être clair.
Bonne journée à toutes et à tous.
Ce document complète les informations déjà données.
Nous comptons sur vous.`;

const CE_POOL_10 = buildExpressPool("e1-3-10", [
  q({
    id: "ce-q1",
    textQ: "Quel type de texte est-ce ?",
    text: ["Message", "Une facture", "Un horaire de bus"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Message _________",
    fill: "transcrit",
    vfQ: "C'est une facture.",
    vfC: 1,
  }),
  q({
    id: "ce-q2",
    textQ: "Quand a lieu l'événement ?",
    text: ["Samedi", "Hier", "En hiver seulement"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________",
    fill: "samedi",
    vfQ: "L'événement est samedi.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "À quelle heure ?",
    text: ["15 h", "Minuit", "6 h du matin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "à _________,",
    fill: "15",
    vfQ: "L'heure est 15 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Où a lieu l'événement ?",
    text: ["À la piscine", "À l'hôpital", "À l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "à _________",
    fill: "piscine",
    vfQ: "C'est à la piscine.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel est l'événement ?",
    text: ["Une baignade", "Un examen", "Un déménagement"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je t'invite une _________ !",
    fill: "baignade",
    vfQ: "C'est une baignade.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Qui écrit le message ?",
    text: ["Omar", "Le maire", "Le facteur"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________",
    fill: "Omar",
    vfQ: "Omar écrit le message.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Est-ce une invitation ?",
    text: ["Oui", "Non", "On ne sait pas"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je t'invite _________ !",
    fill: "une",
    vfQ: "C'est une invitation.",
    vfC: 0,
  }),
]);
const CE_TEXT_11 = `Petite annonce — fête

FÊTE DE QUARTIER
Je t'invite musique et jeux !
C'est le 1er juillet à 18 h, place du Marché.
Entrée gratuite.
Comité des fêtes
Respectez la file d'attente, s'il vous plaît.
Les personnes à mobilité réduite sont prioritaires.
Bonne journée à toutes et à tous.
Ce document complète les informations déjà données.
Nous comptons sur vous.
Je prépare déjà tout pour que ce soit prêt.
Si tu veux, on peut faire une liste ensemble.`;

const CE_POOL_11 = buildExpressPool("e1-3-11", [
  q({
    id: "ce-q1",
    textQ: "Quel type de texte est-ce ?",
    text: ["Petite annonce", "Une facture", "Un horaire de bus"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Petite _________",
    fill: "fête",
    vfQ: "C'est une facture.",
    vfC: 1,
  }),
  q({
    id: "ce-q2",
    textQ: "Quand a lieu l'événement ?",
    text: ["Le 1er juillet", "Hier", "En hiver seulement"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________",
    fill: "le",
    vfQ: "L'événement est le 1er juillet.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "À quelle heure ?",
    text: ["18 h", "Minuit", "6 h du matin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "à _________,",
    fill: "18",
    vfQ: "L'heure est 18 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Où a lieu l'événement ?",
    text: ["Place du marché", "À l'hôpital", "À l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "place _________",
    fill: "Marché",
    vfQ: "C'est place du Marché.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel est l'événement ?",
    text: ["Musique et jeux", "Un examen", "Un déménagement"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je t'invite musique _________ !",
    fill: "jeux",
    vfQ: "C'est musique et jeux.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Qui écrit le message ?",
    text: ["Comité des fêtes", "Le maire", "Le facteur"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________",
    fill: "Comité des fêtes",
    vfQ: "Comité des fêtes écrit le message.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Est-ce une invitation ?",
    text: ["Oui", "Non", "On ne sait pas"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je t'invite _________ !",
    fill: "musique",
    vfQ: "C'est une invitation.",
    vfC: 0,
  }),
]);
const CE_TEXT_12 = `Invitation baby shower

Chère amie,
Je t'invite une fête pour le bébé !
C'est le 20 mai à 14 h, chez Anna.
Cadeau surprise bienvenue.
Sara
Vous pouvez venir avec un ami ou un membre de la famille.
Apportez une pièce d'identité si possible.
Le lieu est accessible en bus et à pied.
Un plan est disponible sur demande.
Nous vous attendons avec plaisir.
Les places sont limitées, merci de confirmer.
Le service client répond aussi par téléphone.`;

const CE_POOL_12 = buildExpressPool("e1-3-12", [
  q({
    id: "ce-q1",
    textQ: "Quel type de texte est-ce ?",
    text: ["Invitation", "Une facture", "Un horaire de bus"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Invitation _________",
    fill: "shower",
    vfQ: "C'est une facture.",
    vfC: 1,
  }),
  q({
    id: "ce-q2",
    textQ: "Quand a lieu l'événement ?",
    text: ["Le 20 mai", "Hier", "En hiver seulement"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________",
    fill: "le",
    vfQ: "L'événement est le 20 mai.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "À quelle heure ?",
    text: ["14 h", "Minuit", "6 h du matin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "à _________,",
    fill: "14",
    vfQ: "L'heure est 14 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Où a lieu l'événement ?",
    text: ["Chez anna", "À l'hôpital", "À l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "chez _________",
    fill: "Anna",
    vfQ: "C'est chez Anna.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel est l'événement ?",
    text: ["Une fête pour le bébé", "Un examen", "Un déménagement"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je t'invite une _________ !",
    fill: "bébé",
    vfQ: "C'est une fête pour le bébé.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Qui écrit le message ?",
    text: ["Sara", "Le maire", "Le facteur"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________",
    fill: "Sara",
    vfQ: "Sara écrit le message.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Est-ce une invitation ?",
    text: ["Oui", "Non", "On ne sait pas"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je t'invite _________ !",
    fill: "une",
    vfQ: "C'est une invitation.",
    vfC: 0,
  }),
]);
const CE_TEXT_13 = `SMS — match de foot

Hey !
Je t'invite le match !
C'est dimanche à 10 h, au stade municipal.
On se retrouve à l'entrée.
Antoine
Apporte ce dont tu as besoin, juste au cas où.
Encore merci, vraiment.
Voici quelques détails utiles pour la suite.
Lisez bien jusqu'à la fin, s'il vous plaît.
Vous pouvez demander de l'aide si besoin.
Un plan simple est disponible à l'accueil.`;

const CE_POOL_13 = buildExpressPool("e1-3-13", [
  q({
    id: "ce-q1",
    textQ: "Quel type de texte est-ce ?",
    text: ["SMS", "Une facture", "Un horaire de bus"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "SMS _________",
    fill: "foot",
    vfQ: "C'est une facture.",
    vfC: 1,
  }),
  q({
    id: "ce-q2",
    textQ: "Quand a lieu l'événement ?",
    text: ["Dimanche", "Hier", "En hiver seulement"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________",
    fill: "dimanche",
    vfQ: "L'événement est dimanche.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "À quelle heure ?",
    text: ["10 h", "Minuit", "6 h du matin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "à _________,",
    fill: "10",
    vfQ: "L'heure est 10 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Où a lieu l'événement ?",
    text: ["Au stade municipal", "À l'hôpital", "À l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "au _________",
    fill: "municipal",
    vfQ: "C'est au stade municipal.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel est l'événement ?",
    text: ["Le match", "Un examen", "Un déménagement"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je t'invite le _________ !",
    fill: "match",
    vfQ: "C'est le match.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Qui écrit le message ?",
    text: ["Antoine", "Le maire", "Le facteur"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________",
    fill: "Antoine",
    vfQ: "Antoine écrit le message.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Est-ce une invitation ?",
    text: ["Oui", "Non", "On ne sait pas"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je t'invite _________ !",
    fill: "le",
    vfQ: "C'est une invitation.",
    vfC: 0,
  }),
]);
const CE_TEXT_14 = `Carte — goûter enfants

Chers parents,
Je t'invite un goûter de fin d'année !
C'est mercredi à 16 h, à l'école.
Pensez à vérifier la date et le lieu.
Une réponse rapide nous aide beaucoup.
Vous pouvez venir avec un ami ou un membre de la famille.
Apportez une pièce d'identité si possible.
Le lieu est accessible en bus et à pied.
Un plan est disponible sur demande.
Respectez la file d'attente, s'il vous plaît.
Merci d'apporter un plat.
École du Lac`;

const CE_POOL_14 = buildExpressPool("e1-3-14", [
  q({
    id: "ce-q1",
    textQ: "Quel type de texte est-ce ?",
    text: ["Carte", "Une facture", "Un horaire de bus"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Carte _________",
    fill: "enfants",
    vfQ: "C'est une facture.",
    vfC: 1,
  }),
  q({
    id: "ce-q2",
    textQ: "Quand a lieu l'événement ?",
    text: ["Mercredi", "Hier", "En hiver seulement"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________",
    fill: "mercredi",
    vfQ: "L'événement est mercredi.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "À quelle heure ?",
    text: ["16 h", "Minuit", "6 h du matin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "à _________,",
    fill: "16",
    vfQ: "L'heure est 16 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Où a lieu l'événement ?",
    text: ["À l'école", "À l'hôpital", "À l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "à _________",
    fill: "l'école",
    vfQ: "C'est à l'école.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel est l'événement ?",
    text: ["Un goûter de fin d'année", "Un examen", "Un déménagement"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je t'invite un _________ !",
    fill: "d'année",
    vfQ: "C'est un goûter de fin d'année.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Qui écrit le message ?",
    text: ["École du Lac", "Le maire", "Le facteur"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________",
    fill: "École du Lac",
    vfQ: "École du Lac écrit le message.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Est-ce une invitation ?",
    text: ["Oui", "Non", "On ne sait pas"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je t'invite _________ !",
    fill: "un",
    vfQ: "C'est une invitation.",
    vfC: 0,
  }),
]);
const CE_TEXT_15 = `Invitation exposition

Bonjour,
Je t'invite l'exposition de photos !
C'est jeudi soir à 19 h, à la galerie Art Plus.
Vernissage avec vin et fromage.
Sophie
Le lieu est facile à trouver.
Prenez votre temps pour comprendre le message.
En cas de changement, un nouvel avis sera publié.
Nous sommes là pour vous aider.
Gardez ce texte pour vous en souvenir.
Les horaires habituels restent les mêmes.
C'est important pour moi, merci beaucoup.`;

const CE_POOL_15 = buildExpressPool("e1-3-15", [
  q({
    id: "ce-q1",
    textQ: "Quel type de texte est-ce ?",
    text: ["Invitation", "Une facture", "Un horaire de bus"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Invitation _________",
    fill: "exposition",
    vfQ: "C'est une facture.",
    vfC: 1,
  }),
  q({
    id: "ce-q2",
    textQ: "Quand a lieu l'événement ?",
    text: ["Jeudi soir", "Hier", "En hiver seulement"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________",
    fill: "jeudi",
    vfQ: "L'événement est jeudi soir.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "À quelle heure ?",
    text: ["19 h", "Minuit", "6 h du matin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "à _________,",
    fill: "19",
    vfQ: "L'heure est 19 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Où a lieu l'événement ?",
    text: ["À la galerie art plus", "À l'hôpital", "À l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "à _________",
    fill: "Plus",
    vfQ: "C'est à la galerie Art Plus.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel est l'événement ?",
    text: ["L'exposition de photos", "Un examen", "Un déménagement"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je t'invite l'exposition _________ !",
    fill: "photos",
    vfQ: "C'est l'exposition de photos.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Qui écrit le message ?",
    text: ["Sophie", "Le maire", "Le facteur"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________",
    fill: "Sophie",
    vfQ: "Sophie écrit le message.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Est-ce une invitation ?",
    text: ["Oui", "Non", "On ne sait pas"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je t'invite _________ !",
    fill: "l'exposition",
    vfQ: "C'est une invitation.",
    vfC: 0,
  }),
]);
const CE_TEXT_16 = `Message groupe amis

Les amis !
Je t'invite une soirée feu de camp !
C'est le 8 août à 20 h, à la plage.
Chacun apporte à manger.
David
Les informations importantes sont déjà notées plus haut.
Respectez la file d'attente, s'il vous plaît.
Merci de votre attention et de votre patience.
Une confirmation arrivera ensuite.
Le lieu est facile à trouver.
Prenez votre temps pour comprendre le message.`;

const CE_POOL_16 = buildExpressPool("e1-3-16", [
  q({
    id: "ce-q1",
    textQ: "Quel type de texte est-ce ?",
    text: ["Message", "Une facture", "Un horaire de bus"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Message _________",
    fill: "amis",
    vfQ: "C'est une facture.",
    vfC: 1,
  }),
  q({
    id: "ce-q2",
    textQ: "Quand a lieu l'événement ?",
    text: ["Le 8 août", "Hier", "En hiver seulement"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________",
    fill: "le",
    vfQ: "L'événement est le 8 août.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "À quelle heure ?",
    text: ["20 h", "Minuit", "6 h du matin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "à _________,",
    fill: "20",
    vfQ: "L'heure est 20 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Où a lieu l'événement ?",
    text: ["À la plage", "À l'hôpital", "À l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "à _________",
    fill: "plage",
    vfQ: "C'est à la plage.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel est l'événement ?",
    text: ["Une soirée feu de camp", "Un examen", "Un déménagement"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je t'invite une _________ !",
    fill: "camp",
    vfQ: "C'est une soirée feu de camp.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Qui écrit le message ?",
    text: ["David", "Le maire", "Le facteur"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________",
    fill: "David",
    vfQ: "David écrit le message.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Est-ce une invitation ?",
    text: ["Oui", "Non", "On ne sait pas"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je t'invite _________ !",
    fill: "une",
    vfQ: "C'est une invitation.",
    vfC: 0,
  }),
]);
const CE_TEXT_17 = `Invitation réunion

Bonjour à tous,
Je t'invite la réunion de projet !
C'est lundi à 9 h, en salle 3.
Préparez vos idées.
Chef de projet
Pensez à arriver un peu en avance.
Gardez ce texte pour vous en souvenir.
Merci de votre attention et de votre patience.
Une confirmation arrivera ensuite.
Le lieu est facile à trouver.
Prenez votre temps pour comprendre le message.
En cas de changement, un nouvel avis sera publié.`;

const CE_POOL_17 = buildExpressPool("e1-3-17", [
  q({
    id: "ce-q1",
    textQ: "Quel type de texte est-ce ?",
    text: ["Invitation", "Une facture", "Un horaire de bus"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Invitation _________",
    fill: "réunion",
    vfQ: "C'est une facture.",
    vfC: 1,
  }),
  q({
    id: "ce-q2",
    textQ: "Quand a lieu l'événement ?",
    text: ["Lundi", "Hier", "En hiver seulement"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________",
    fill: "lundi",
    vfQ: "L'événement est lundi.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "À quelle heure ?",
    text: ["9 h", "Minuit", "6 h du matin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "à _________,",
    fill: "9",
    vfQ: "L'heure est 9 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Où a lieu l'événement ?",
    text: ["En salle 3", "À l'hôpital", "À l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "en _________",
    fill: "3",
    vfQ: "C'est en salle 3.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel est l'événement ?",
    text: ["La réunion de projet", "Un examen", "Un déménagement"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je t'invite la _________ !",
    fill: "projet",
    vfQ: "C'est la réunion de projet.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Qui écrit le message ?",
    text: ["Chef de projet", "Le maire", "Le facteur"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________",
    fill: "Chef de projet",
    vfQ: "Chef de projet écrit le message.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Est-ce une invitation ?",
    text: ["Oui", "Non", "On ne sait pas"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je t'invite _________ !",
    fill: "la",
    vfQ: "C'est une invitation.",
    vfC: 0,
  }),
]);
const CE_TEXT_18 = `Billet concert

Salut !
Je t'invite le concert de jazz !
C'est le 12 octobre à 20 h 30, à la salle Métropole.
J'ai deux places. Tu en veux une ?
Maya
Le trajet est simple, ne t'inquiète pas.
Bonne journée à toutes et à tous.
Ce document complète les informations déjà données.
Nous comptons sur vous.
Voici quelques détails utiles pour la suite.`;

const CE_POOL_18 = buildExpressPool("e1-3-18", [
  q({
    id: "ce-q1",
    textQ: "Quel type de texte est-ce ?",
    text: ["Billet", "Une facture", "Un horaire de bus"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Billet _________",
    fill: "concert",
    vfQ: "C'est une facture.",
    vfC: 1,
  }),
  q({
    id: "ce-q2",
    textQ: "Quand a lieu l'événement ?",
    text: ["Le 12 octobre", "Hier", "En hiver seulement"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________",
    fill: "le",
    vfQ: "L'événement est le 12 octobre.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "À quelle heure ?",
    text: ["20 h 30", "Minuit", "6 h du matin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "à _________,",
    fill: "20 30",
    vfQ: "L'heure est 20 h 30.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Où a lieu l'événement ?",
    text: ["À la salle métropole", "À l'hôpital", "À l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "à _________",
    fill: "Métropole",
    vfQ: "C'est à la salle Métropole.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel est l'événement ?",
    text: ["Le concert de jazz", "Un examen", "Un déménagement"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je t'invite le _________ !",
    fill: "jazz",
    vfQ: "C'est le concert de jazz.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Qui écrit le message ?",
    text: ["Maya", "Le maire", "Le facteur"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________",
    fill: "Maya",
    vfQ: "Maya écrit le message.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Est-ce une invitation ?",
    text: ["Oui", "Non", "On ne sait pas"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je t'invite _________ !",
    fill: "le",
    vfQ: "C'est une invitation.",
    vfC: 0,
  }),
]);
const CE_TEXT_19 = `Invitation brunch

Coucou !
Je t'invite un brunch !
C'est dimanche matin à 10 h, au café du Port.
Réserve ta place vite !
Inès
Les photos peuvent être prises pour le souvenir.
Le service client répond aussi par téléphone.
Merci de respecter le calme des autres personnes.
Le personnel peut vous aider en français simple.
Conservez le numéro de contact indiqué.
Tout le monde est le bienvenu.`;

const CE_POOL_19 = buildExpressPool("e1-3-19", [
  q({
    id: "ce-q1",
    textQ: "Quel type de texte est-ce ?",
    text: ["Invitation", "Une facture", "Un horaire de bus"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Invitation _________",
    fill: "brunch",
    vfQ: "C'est une facture.",
    vfC: 1,
  }),
  q({
    id: "ce-q2",
    textQ: "Quand a lieu l'événement ?",
    text: ["Dimanche matin", "Hier", "En hiver seulement"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________",
    fill: "dimanche",
    vfQ: "L'événement est dimanche matin.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "À quelle heure ?",
    text: ["10 h", "Minuit", "6 h du matin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "à _________,",
    fill: "10",
    vfQ: "L'heure est 10 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Où a lieu l'événement ?",
    text: ["Au café du port", "À l'hôpital", "À l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "au _________",
    fill: "Port",
    vfQ: "C'est au café du Port.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel est l'événement ?",
    text: ["Un brunch", "Un examen", "Un déménagement"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je t'invite un _________ !",
    fill: "brunch",
    vfQ: "C'est un brunch.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Qui écrit le message ?",
    text: ["Inès", "Le maire", "Le facteur"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________",
    fill: "Inès",
    vfQ: "Inès écrit le message.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Est-ce une invitation ?",
    text: ["Oui", "Non", "On ne sait pas"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je t'invite _________ !",
    fill: "un",
    vfQ: "C'est une invitation.",
    vfC: 0,
  }),
]);
const CE_TEXT_20 = `Message — cours de cuisine

Bonjour !
Je t'invite un atelier pasta !
C'est mardi prochain à 18 h, dans ma cuisine.
Places limitées à 6 personnes.
Marco
Prenez votre temps pour comprendre le message.
En cas de changement, un nouvel avis sera publié.
Nous sommes là pour vous aider.
Gardez ce texte pour vous en souvenir.
Les horaires habituels restent les mêmes.
Passe le bonjour à tout le monde.`;

const CE_POOL_20 = buildExpressPool("e1-3-20", [
  q({
    id: "ce-q1",
    textQ: "Quel type de texte est-ce ?",
    text: ["Message", "Une facture", "Un horaire de bus"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Message _________",
    fill: "cuisine",
    vfQ: "C'est une facture.",
    vfC: 1,
  }),
  q({
    id: "ce-q2",
    textQ: "Quand a lieu l'événement ?",
    text: ["Mardi prochain", "Hier", "En hiver seulement"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________",
    fill: "mardi",
    vfQ: "L'événement est mardi prochain.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "À quelle heure ?",
    text: ["18 h", "Minuit", "6 h du matin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "à _________,",
    fill: "18",
    vfQ: "L'heure est 18 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Où a lieu l'événement ?",
    text: ["Dans ma cuisine", "À l'hôpital", "À l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "dans _________",
    fill: "cuisine",
    vfQ: "C'est dans ma cuisine.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel est l'événement ?",
    text: ["Un atelier pasta", "Un examen", "Un déménagement"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je t'invite un _________ !",
    fill: "pasta",
    vfQ: "C'est un atelier pasta.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Qui écrit le message ?",
    text: ["Marco", "Le maire", "Le facteur"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________",
    fill: "Marco",
    vfQ: "Marco écrit le message.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Est-ce une invitation ?",
    text: ["Oui", "Non", "On ne sait pas"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je t'invite _________ !",
    fill: "un",
    vfQ: "C'est une invitation.",
    vfC: 0,
  }),
]);

export const E1_3_CE: CommunicationExercise[] = [
  readingPoolExercise({
  id: "e1-3-1",
  readingText: CE_TEXT_1,
  questionPool: CE_POOL_1
}),
  readingPoolExercise({
  id: "e1-3-2",
  readingText: CE_TEXT_2,
  questionPool: CE_POOL_2
}),
  readingPoolExercise({
  id: "e1-3-3",
  readingText: CE_TEXT_3,
  questionPool: CE_POOL_3
}),
  readingPoolExercise({
  id: "e1-3-4",
  readingText: CE_TEXT_4,
  questionPool: CE_POOL_4
}),
  readingPoolExercise({
  id: "e1-3-5",
  readingText: CE_TEXT_5,
  questionPool: CE_POOL_5
}),
  readingPoolExercise({
  id: "e1-3-6",
  readingText: CE_TEXT_6,
  questionPool: CE_POOL_6
}),
  readingPoolExercise({
  id: "e1-3-7",
  readingText: CE_TEXT_7,
  questionPool: CE_POOL_7
}),
  readingPoolExercise({
  id: "e1-3-8",
  readingText: CE_TEXT_8,
  questionPool: CE_POOL_8
}),
  readingPoolExercise({
  id: "e1-3-9",
  readingText: CE_TEXT_9,
  questionPool: CE_POOL_9
}),
  readingPoolExercise({
  id: "e1-3-10",
  readingText: CE_TEXT_10,
  questionPool: CE_POOL_10
}),
  readingPoolExercise({
  id: "e1-3-11",
  readingText: CE_TEXT_11,
  questionPool: CE_POOL_11
}),
  readingPoolExercise({
  id: "e1-3-12",
  readingText: CE_TEXT_12,
  questionPool: CE_POOL_12
}),
  readingPoolExercise({
  id: "e1-3-13",
  readingText: CE_TEXT_13,
  questionPool: CE_POOL_13
}),
  readingPoolExercise({
  id: "e1-3-14",
  readingText: CE_TEXT_14,
  questionPool: CE_POOL_14
}),
  readingPoolExercise({
  id: "e1-3-15",
  readingText: CE_TEXT_15,
  questionPool: CE_POOL_15
}),
  readingPoolExercise({
  id: "e1-3-16",
  readingText: CE_TEXT_16,
  questionPool: CE_POOL_16
}),
  readingPoolExercise({
  id: "e1-3-17",
  readingText: CE_TEXT_17,
  questionPool: CE_POOL_17
}),
  readingPoolExercise({
  id: "e1-3-18",
  readingText: CE_TEXT_18,
  questionPool: CE_POOL_18
}),
  readingPoolExercise({
  id: "e1-3-19",
  readingText: CE_TEXT_19,
  questionPool: CE_POOL_19
}),
  readingPoolExercise({
  id: "e1-3-20",
  readingText: CE_TEXT_20,
  questionPool: CE_POOL_20
}),
];

/* ── Production orale — dialogues à jouer (thème invitation) ───────────────── */

export const E1_3_PO: ExpressPoDialogue[] = [
  {
    id: "e1-3-po-1",
    title: "Inviter à son anniversaire",
    context: "C'est bientôt votre anniversaire. Vous invitez un ami à votre fête.",
    roleA: { title: "Celui qui invite", vous: "celui / celle qui invite" },
    roleB: { title: "L'ami invité", vous: "l'ami invité / l'amie invitée" },
    lines: [
      { role: "A", text: "Salut Léo ! Samedi, c'est mon anniversaire." },
      { role: "B", text: "Ah super ! Tu fais une fête ?" },
      { role: "A", text: "Oui, j'organise une fête chez moi. Je t'invite !" },
      { role: "B", text: "Avec plaisir ! C'est à quelle heure ?" },
      { role: "A", text: "À 19 heures. On mange, on danse, on écoute de la musique." },
      { role: "B", text: "Génial ! J'apporte quelque chose ?" },
      { role: "A", text: "Oui, une boisson si tu veux." },
      { role: "B", text: "D'accord ! À samedi alors !" },
      { role: "A", text: "Enchanté(e) de te connaître !" },
      { role: "B", text: "Moi aussi. À tout à l'heure !" },
],
  },
  {
    id: "e1-3-po-2",
    title: "Désolé, je ne suis pas libre",
    context: "Un ami vous invite à un apéro, mais vous n'êtes pas libre ce jour-là.",
    roleA: { title: "Celui qui invite", vous: "celui / celle qui invite" },
    roleB: { title: "L'ami occupé", vous: "l'ami occupé / l'amie occupée" },
    lines: [
      { role: "A", text: "Coucou ! Tu es libre vendredi soir ?" },
      { role: "B", text: "Vendredi ? Non, désolé, je ne suis pas libre." },
      { role: "A", text: "Dommage ! J'organise un apéro avec les amis du cours." },
      { role: "B", text: "Vendredi, je travaille jusqu'à 22 heures." },
      { role: "A", text: "Et samedi, tu peux ?" },
      { role: "B", text: "Oui, samedi je suis libre !" },
      { role: "A", text: "Alors on fait l'apéro samedi à 18 heures." },
      { role: "B", text: "Parfait, merci pour l'invitation !" },
      { role: "A", text: "Bon courage pour la suite !" },
      { role: "B", text: "Merci, toi aussi !" },
],
  },
  {
    id: "e1-3-po-3",
    title: "L'heure et le lieu",
    context: "Vous êtes invité(e) à une fête et vous demandez les détails à un ami.",
    roleA: { title: "L'ami informé", vous: "l'ami / l'amie qui connaît les détails" },
    roleB: { title: "L'invité", vous: "l'invité / l'invitée" },
    lines: [
      { role: "A", text: "Tu viens à la fête de Nadia samedi ?" },
      { role: "B", text: "Oui ! Mais c'est où exactement ?" },
      { role: "A", text: "C'est chez elle, au 8 rue des Tilleuls." },
      { role: "B", text: "Et ça commence à quelle heure ?" },
      { role: "A", text: "À 20 heures. Mais tu peux arriver plus tard." },
      { role: "B", text: "Ça finit tard ?" },
      { role: "A", text: "Vers minuit, je pense." },
      { role: "B", text: "Super, alors à samedi !" },
      { role: "A", text: "Très bien, à bientôt alors !" },
      { role: "B", text: "Oui, à bientôt !" },
],
  },
  {
    id: "e1-3-po-4",
    title: "J'apporte quelque chose ?",
    context: "Vous êtes invité(e) à un apéro et vous proposez d'apporter quelque chose.",
    roleA: { title: "L'hôtesse", vous: "l'hôte / l'hôtesse" },
    roleB: { title: "L'invité", vous: "l'invité / l'invitée" },
    lines: [
      { role: "A", text: "Je suis contente, tu viens à mon apéro dimanche !" },
      { role: "B", text: "Oui ! Qu'est-ce que j'apporte ?" },
      { role: "A", text: "Rien, c'est bon ! J'ai tout préparé." },
      { role: "B", text: "Mais si, je veux apporter quelque chose !" },
      { role: "A", text: "Bon, d'accord… Quelque chose pour le dessert alors." },
      { role: "B", text: "Un gâteau au chocolat, ça va ?" },
      { role: "A", text: "Oh oui, super idée ! Tout le monde adore ça." },
      { role: "B", text: "Parfait, je fais mon gâteau samedi soir." },
      { role: "A", text: "Merci, c'est gentil." },
      { role: "B", text: "De rien. Au revoir !" },
],
  },
  {
    id: "e1-3-po-5",
    title: "Inviter les voisins",
    context: "Vous organisez un apéro dans le jardin et vous invitez vos voisins.",
    roleA: { title: "Celui qui invite", vous: "le voisin / la voisine qui invite" },
    roleB: { title: "Le voisin invité", vous: "le voisin invité / la voisine invitée" },
    lines: [
      { role: "A", text: "Bonjour ! Samedi, nous organisons un apéro dans le jardin." },
      { role: "B", text: "Ah, c'est gentil ! C'est pour une occasion spéciale ?" },
      { role: "A", text: "Oui, les dix ans de notre fille. Vous êtes libres ?" },
      { role: "B", text: "Samedi… oui, nous sommes libres !" },
      { role: "A", text: "Super ! Venez avec vos enfants, bien sûr." },
      { role: "B", text: "Merci ! On apporte quelque chose à boire ?" },
      { role: "A", text: "Volontiers, un jus de fruits par exemple." },
      { role: "B", text: "D'accord ! À samedi, et merci pour l'invitation !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e1-3-po-6",
    title: "Confirmer par téléphone",
    context: "Vous téléphonez à un ami pour confirmer votre venue à sa fête.",
    roleA: { title: "Celle qui organise", vous: "celui / celle qui organise" },
    roleB: { title: "L'invité", vous: "l'invité / l'invitée" },
    lines: [
      { role: "A", text: "Allô Sami ? C'est Ines !" },
      { role: "B", text: "Salut Ines ! Ça va ?" },
      { role: "A", text: "Oui ! Je t'appelle pour la fête de vendredi. Tu viens ?" },
      { role: "B", text: "Oui, je viens ! Avec ma femme, c'est possible ?" },
      { role: "A", text: "Bien sûr ! Plus on est nombreux, mieux c'est." },
      { role: "B", text: "On arrive vers 19 heures 30, ça va ?" },
      { role: "A", text: "C'est parfait. N'oubliez pas : c'est au troisième étage !" },
      { role: "B", text: "Pas de problème. À vendredi !" },
      { role: "A", text: "Enchanté(e) de te connaître !" },
      { role: "B", text: "Moi aussi. À tout à l'heure !" },
],
  },
  {
    id: "e1-3-po-7",
    title: "Annuler : je suis malade",
    context: "Vous êtes malade et vous ne pouvez pas aller à la fête de ce soir.",
    roleA: { title: "L'invité malade", vous: "l'invité malade / l'invitée malade" },
    roleB: { title: "Celle qui organise", vous: "celui / celle qui organise" },
    lines: [
      { role: "A", text: "Allô Marie ? C'est Tom." },
      { role: "B", text: "Salut Tom ! Tu es prêt pour la fête de ce soir ?" },
      { role: "A", text: "Justement, non… Je suis désolé, je suis malade." },
      { role: "B", text: "Oh non ! Qu'est-ce que tu as ?" },
      { role: "A", text: "J'ai de la fièvre et mal à la gorge. Je reste à la maison." },
      { role: "B", text: "Repose-toi bien alors. C'est dommage !" },
      { role: "A", text: "Oui, vraiment désolé. Bonne fête à tous !" },
      { role: "B", text: "Merci. Soigne-toi bien et à bientôt !" },
      { role: "A", text: "D'accord. On se dit à bientôt ?" },
      { role: "B", text: "Oui, à bientôt !" },
],
  },
  {
    id: "e1-3-po-8",
    title: "La fête de départ",
    context: "Une collègue quitte l'entreprise. Vous organisez une petite fête avec un collègue.",
    roleA: { title: "Le premier collègue", vous: "le collègue / la collègue" },
    roleB: { title: "Le deuxième collègue", vous: "le collègue / la collègue" },
    lines: [
      { role: "A", text: "Tu sais, Paula quitte l'entreprise à la fin du mois." },
      { role: "B", text: "Oui, c'est triste ! On organise quelque chose ?" },
      { role: "A", text: "Oui, une petite fête jeudi à midi, à la cafétéria." },
      { role: "B", text: "Bonne idée ! Qu'est-ce qu'on prépare ?" },
      { role: "A", text: "Chacun apporte un plat. Moi, je fais une quiche." },
      { role: "B", text: "Alors moi, j'apporte une salade et du pain." },
      { role: "A", text: "Parfait. Et on achète un cadeau ensemble ?" },
      { role: "B", text: "Oui ! Je demande aux collègues demain." },
      { role: "A", text: "Bon courage pour la suite !" },
      { role: "B", text: "Merci, toi aussi !" },
],
  },
  {
    id: "e1-3-po-9",
    title: "Organiser un pique-nique",
    context: "Vous organisez un pique-nique au bord du lac avec un ami.",
    roleA: { title: "Le premier ami", vous: "l'ami / l'amie" },
    roleB: { title: "Le deuxième ami", vous: "l'ami / l'amie" },
    lines: [
      { role: "A", text: "Dimanche, on fait un pique-nique au bord du lac ?" },
      { role: "B", text: "Oh oui, bonne idée ! On invite qui ?" },
      { role: "A", text: "Leila, Marco et leurs enfants. Ça te va ?" },
      { role: "B", text: "Parfait ! Qu'est-ce qu'on apporte ?" },
      { role: "A", text: "Moi, j'apporte des sandwichs et des fruits." },
      { role: "B", text: "Alors moi, je prends les boissons et un gâteau." },
      { role: "A", text: "Super. Rendez-vous à midi au parking du lac ?" },
      { role: "B", text: "D'accord ! Et s'il pleut, on fait ça chez moi." },
      { role: "A", text: "Parfait. Je vous remercie." },
      { role: "B", text: "De rien. Bonne journée !" },
],
  },
  {
    id: "e1-3-po-10",
    title: "Répondre à une invitation",
    context: "Vous avez reçu une invitation pour samedi et vous en parlez avec un ami.",
    roleA: { title: "Le premier invité", vous: "l'invité / l'invitée" },
    roleB: { title: "Le deuxième invité", vous: "l'invité / l'invitée" },
    lines: [
      { role: "A", text: "Tu as reçu l'invitation de Hugo pour samedi ?" },
      { role: "B", text: "Oui ! C'est une fête pour son nouveau travail, non ?" },
      { role: "A", text: "Exactement. Tu vas répondre quoi ?" },
      { role: "B", text: "Je viens, bien sûr ! Et toi ?" },
      { role: "A", text: "Moi aussi. Il faut répondre avant jeudi." },
      { role: "B", text: "Ah oui ? Alors j'envoie un message ce soir." },
      { role: "A", text: "On peut y aller ensemble, si tu veux." },
      { role: "B", text: "Bonne idée ! Rendez-vous chez moi à 18 heures." },
      { role: "A", text: "On se voit après la pause ?" },
      { role: "B", text: "Oui, avec plaisir !" },
],
  },
{
  id: "e1-3-po-11",
  title: "Invitation à la fête de quartier",
  context: "À la mairie, vous invitez une agente à la fête de quartier de samedi.",
  roleA: { title: "L'agent d'accueil", vous: "l'agent / l'agente d'accueil" },
  roleB: { title: "Vous", vous: "la personne qui parle" },
  lines: [
    { role: "A", text: "Bonjour, vous venez pour quelle demande ?" },
    { role: "B", text: "Bonjour, je veux inviter la mairie à notre fête de quartier." },
    { role: "A", text: "C'est quand ?" },
    { role: "B", text: "Samedi à 16 heures, sur la place des Tilleuls." },
    { role: "A", text: "Il y aura combien de personnes ?" },
    { role: "B", text: "Environ trente voisins." },
    { role: "A", text: "Très bien, je transmets l'invitation." },
    { role: "B", text: "Merci. Vous pouvez venir aussi ?" },
    { role: "A", text: "Je vais essayer." },
    { role: "B", text: "Avec plaisir, à samedi peut-être." },
  ],
},
{
  id: "e1-3-po-12",
  title: "Appel pour un anniversaire",
  context: "Vous appelez un ami pour l'inviter à votre anniversaire.",
  roleA: { title: "L'ami", vous: "l'ami(e)" },
  roleB: { title: "Vous", vous: "l'ami(e)" },
  lines: [
    { role: "A", text: "Allô ?" },
    { role: "B", text: "Salut Samir, c'est Nadia." },
    { role: "A", text: "Salut Nadia ! Ça va ?" },
    { role: "B", text: "Oui. Je t'invite à mon anniversaire vendredi soir." },
    { role: "A", text: "Avec plaisir ! C'est à quelle heure ?" },
    { role: "B", text: "À 19 heures, chez moi." },
    { role: "A", text: "Je peux apporter quelque chose ?" },
    { role: "B", text: "Oui, une boisson si tu veux." },
    { role: "A", text: "D'accord, à vendredi !" },
    { role: "B", text: "Super, à vendredi." },
  ],
},
{
  id: "e1-3-po-13",
  title: "Inviter le voisin au barbecue",
  context: "Vous croisez votre voisin et vous l'invitez à un barbecue dans la cour.",
  roleA: { title: "Le voisin", vous: "le voisin / la voisine" },
  roleB: { title: "Vous", vous: "la personne qui parle" },
  lines: [
    { role: "A", text: "Bonjour, vous allez bien ?" },
    { role: "B", text: "Oui, merci. Dimanche, nous faisons un barbecue." },
    { role: "A", text: "Ah, c'est sympa !" },
    { role: "B", text: "Vous voulez venir avec votre famille ?" },
    { role: "A", text: "Oui, volontiers. À quelle heure ?" },
    { role: "B", text: "Vers midi, dans la cour." },
    { role: "A", text: "Je peux apporter une salade ?" },
    { role: "B", text: "Oui, ce serait parfait." },
    { role: "A", text: "Merci pour l'invitation." },
    { role: "B", text: "Avec plaisir, à dimanche." },
  ],
},
{
  id: "e1-3-po-14",
  title: "Sortie au cinéma",
  context: "À l'accueil d'un centre, vous invitez une personne de votre cours au cinéma.",
  roleA: { title: "L'ami", vous: "l'ami(e)" },
  roleB: { title: "Vous", vous: "l'ami(e)" },
  lines: [
    { role: "A", text: "Tu attends le cours de français ?" },
    { role: "B", text: "Oui. Après le cours, tu es libre ?" },
    { role: "A", text: "Oui, pourquoi ?" },
    { role: "B", text: "Je vais au cinéma à 18 heures. Tu veux venir ?" },
    { role: "A", text: "Pourquoi pas ! Quel film ?" },
    { role: "B", text: "Une comédie française, assez simple." },
    { role: "A", text: "D'accord. On achète les billets ici ?" },
    { role: "B", text: "Non, au cinéma, c'est plus facile." },
    { role: "A", text: "Très bien, je viens." },
    { role: "B", text: "Super !" },
  ],
},
{
  id: "e1-3-po-15",
  title: "Invitation à prendre un café",
  context: "Dans la rue, vous retrouvez une connaissance et vous l'invitez à boire un café.",
  roleA: { title: "L'ami", vous: "l'ami(e)" },
  roleB: { title: "Vous", vous: "l'ami(e)" },
  lines: [
    { role: "A", text: "Oh, bonjour ! Ça fait longtemps." },
    { role: "B", text: "Oui, bonjour ! Tu as cinq minutes ?" },
    { role: "A", text: "Oui, je ne suis pas pressé." },
    { role: "B", text: "Tu veux boire un café avec moi ?" },
    { role: "A", text: "Bonne idée. Où ?" },
    { role: "B", text: "Au café du coin, juste là." },
    { role: "A", text: "Parfait, j'aime bien cet endroit." },
    { role: "B", text: "Alors on y va ?" },
    { role: "A", text: "Oui, allons-y." },
    { role: "B", text: "Super." },
  ],
},
{
  id: "e1-3-po-16",
  title: "Déjeuner entre collègues",
  context: "Au bureau, vous invitez un collègue à déjeuner dehors.",
  roleA: { title: "Le collègue", vous: "le collègue / la collègue" },
  roleB: { title: "Vous", vous: "la personne qui parle" },
  lines: [
    { role: "A", text: "Tu manges à la cantine aujourd'hui ?" },
    { role: "B", text: "Non, je vais au restaurant indien. Tu veux venir ?" },
    { role: "A", text: "Oui, pourquoi pas. C'est loin ?" },
    { role: "B", text: "Non, cinq minutes à pied." },
    { role: "A", text: "On part à quelle heure ?" },
    { role: "B", text: "À midi quinze, après la réunion." },
    { role: "A", text: "D'accord. Je prends ma veste." },
    { role: "B", text: "Je t'attends à l'entrée." },
    { role: "A", text: "Merci pour l'idée." },
    { role: "B", text: "Avec plaisir." },
  ],
},
{
  id: "e1-3-po-17",
  title: "Apéritif à l'hôtel",
  context: "À la réception, vous invitez un autre client à l'apéritif de l'hôtel.",
  roleA: { title: "Le client", vous: "le client / la cliente" },
  roleB: { title: "Vous", vous: "le client / la cliente" },
  lines: [
    { role: "A", text: "Vous cherchez la salle du petit déjeuner ?" },
    { role: "B", text: "Oui, et j'ai vu qu'il y a un apéritif ce soir." },
    { role: "A", text: "Oui, à 18 heures dans le salon." },
    { role: "B", text: "Vous voulez y aller ensemble ?" },
    { role: "A", text: "Avec plaisir, je ne connais personne ici." },
    { role: "B", text: "Moi non plus. On se retrouve ici ?" },
    { role: "A", text: "Oui, devant la réception." },
    { role: "B", text: "Parfait, à 18 heures." },
    { role: "A", text: "À tout à l'heure." },
    { role: "B", text: "À tout à l'heure." },
  ],
},
{
  id: "e1-3-po-18",
  title: "Invitation en visio",
  context: "En visio, vous invitez un ami à visiter votre nouvelle ville.",
  roleA: { title: "L'ami", vous: "l'ami(e)" },
  roleB: { title: "Vous", vous: "l'ami(e)" },
  lines: [
    { role: "A", text: "Ton appartement est prêt maintenant ?" },
    { role: "B", text: "Oui, enfin ! Tu veux venir ce week-end ?" },
    { role: "A", text: "Oui, ça me ferait plaisir." },
    { role: "B", text: "Samedi, je peux te montrer le centre-ville." },
    { role: "A", text: "Je prends le train du matin ?" },
    { role: "B", text: "Oui, j'irai te chercher à la gare." },
    { role: "A", text: "Super. Je reste une nuit ?" },
    { role: "B", text: "Oui, il y a un canapé-lit." },
    { role: "A", text: "Merci pour l'invitation !" },
    { role: "B", text: "Avec plaisir." },
  ],
},
{
  id: "e1-3-po-19",
  title: "Invitation à un atelier",
  context: "Au guichet d'une bibliothèque, vous invitez une personne à un atelier lecture.",
  roleA: { title: "Le bibliothécaire", vous: "le / la bibliothécaire" },
  roleB: { title: "Vous", vous: "la personne qui parle" },
  lines: [
    { role: "A", text: "Bonjour, vous rendez des livres ?" },
    { role: "B", text: "Oui, et je voudrais parler de l'atelier lecture." },
    { role: "A", text: "Vous voulez vous inscrire ?" },
    { role: "B", text: "Oui, et inviter ma voisine aussi." },
    { role: "A", text: "Bien sûr. Il reste deux places." },
    { role: "B", text: "C'est samedi matin ?" },
    { role: "A", text: "Oui, de 10 heures à midi." },
    { role: "B", text: "Parfait, je vais lui proposer." },
    { role: "A", text: "Je note vos deux noms ?" },
    { role: "B", text: "Oui, merci." },
  ],
},
{
  id: "e1-3-po-20",
  title: "Invitation en magasin",
  context: "Dans un magasin de sport, vous invitez un ami à une randonnée organisée.",
  roleA: { title: "L'ami", vous: "l'ami(e)" },
  roleB: { title: "Vous", vous: "l'ami(e)" },
  lines: [
    { role: "A", text: "Tu regardes les chaussures de marche ?" },
    { role: "B", text: "Oui, il y a une randonnée samedi." },
    { role: "A", text: "Ah bon ? Où ça ?" },
    { role: "B", text: "Au bord du lac. Tu veux venir avec moi ?" },
    { role: "A", text: "Oui, si le niveau est facile." },
    { role: "B", text: "C'est facile, deux heures seulement." },
    { role: "A", text: "Alors je prends aussi ces chaussures." },
    { role: "B", text: "Bonne idée. On part ensemble ?" },
    { role: "A", text: "Oui, rendez-vous à 8 heures." },
    { role: "B", text: "Parfait." },
  ],
}
];

/* ── Production écrite — consignes (A1 : 50 mots minimum) ─────────────────── */

const PE_MIN = 50;
const PE_MAX = 120;

export const E1_3_PE: ExpressPePrompt[] = [
  {
    id: "e1-3-pe-1",
    title: "Apéro avec voisins",
    situation: "",
    instruction: "Vous invitez vos amis et vos voisins à un apéro. Écrivez un message et demandez d'apporter quelque chose.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e1-3-pe-2",
    title: "Réponse au pique-nique",
    situation: "",
    instruction: "Vous répondez à votre sœur qui organise un pique-nique. Votre mari ou votre femme peut venir avec les enfants, mais vous n'êtes pas libre.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e1-3-pe-3",
    title: "Cinéma samedi",
    situation: "",
    instruction: "Invitez un ami au cinéma samedi soir. Proposez une heure, un lieu de rendez-vous et une idée après le film.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e1-3-pe-4",
    title: "Café après le cours",
    situation: "",
    instruction: "Écrivez un message à deux camarades pour les inviter à prendre un café après le cours. Précisez l'heure et le café choisi.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e1-3-pe-5",
    title: "Dîner simple",
    situation: "",
    instruction: "Vous organisez un dîner simple chez vous. Invitez un ami, dites ce que vous préparez et demandez s'il est disponible.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e1-3-pe-6",
    title: "Fête d'anniversaire",
    situation: "",
    instruction: "Invitez vos voisins à votre anniversaire. Donnez la date, l'heure, l'adresse et une phrase pour dire qu'ils peuvent venir avec une autre personne.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e1-3-pe-7",
    title: "Balade du dimanche",
    situation: "",
    instruction: "Proposez à un ami une balade dimanche matin. Indiquez le lieu, l'heure et ce qu'il doit prendre.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e1-3-pe-8",
    title: "Réponse negative",
    situation: "",
    instruction: "Un ami vous invite à une fête, mais vous ne pouvez pas venir. Écrivez une réponse polie et proposez un autre moment.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e1-3-pe-9",
    title: "Invitation acceptee",
    situation: "",
    instruction: "Vous recevez une invitation pour un déjeuner. Écrivez un message pour accepter et demander si vous pouvez apporter un dessert.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e1-3-pe-10",
    title: "Cours de cuisine",
    situation: "",
    instruction: "Invitez un collègue à un cours de cuisine française. Donnez les informations pratiques et expliquez pourquoi cela vous intéresse.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e1-3-pe-11",
    title: "Visite de musée",
    situation: "",
    instruction: "Écrivez à un ami pour l'inviter au musée. Proposez un jour, une heure et un point de rendez-vous facile.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e1-3-pe-12",
    title: "Soirée jeux",
    situation: "",
    instruction: "Vous organisez une soirée jeux à la maison. Invitez trois amis et demandez à chacun d'apporter une boisson ou un jeu.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e1-3-pe-13",
    title: "Pause déjeuner",
    situation: "",
    instruction: "Invitez une collègue à déjeuner pres du bureau. Proposez un restaurant, une heure et une solution si elle est occupee.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e1-3-pe-14",
    title: "Invitation à la piscine",
    situation: "",
    instruction: "Écrivez un message pour inviter un ami à la piscine. Dites le jour, le prix approximatif et ce qu'il doit apporter.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e1-3-pe-15",
    title: "Sortie en famille",
    situation: "",
    instruction: "Invitez une famille voisine à une sortie au parc. Précisez le programme et demandez si les enfants veulent venir.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e1-3-pe-16",
    title: "Rendez-vous change",
    situation: "",
    instruction: "Vous avez invite un ami, mais l'heure change. Écrivez un message pour expliquer le changement et confirmer qu'il peut toujours venir.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e1-3-pe-17",
    title: "Invitation de dernière minute",
    situation: "",
    instruction: "Vous avez deux places pour un concert ce soir. Invitez un ami rapidement et donnez les informations essentielles.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e1-3-pe-18",
    title: "Repas partage",
    situation: "",
    instruction: "Vous organisez un repas partage avec votre classe. Invitez les participants et expliquez ce que chaque personne peut apporter.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e1-3-pe-19",
    title: "Promenade avec chien",
    situation: "",
    instruction: "Invitez un voisin à promener les chiens ensemble. Proposez un horaire, un trajet et une duree courte.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e1-3-pe-20",
    title: "Réponse avec question",
    situation: "",
    instruction: "Un ami vous invite à dîner vendredi. Écrivez un message pour dire que vous êtes intéressé et demander l'adresse exacte.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },

];
