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

/* ── Compréhension écrite — E4.2 Au restaurant ── */

const CE_TEXT_1 = `Menu du jour

Je regarde salade et poisson. Détail important : eau minérale.
L'information affichée est à 12 h 30 chez Restaurant Le Lac.
Avant de partir, il faut réserver une table. Détail : 28 francs.
Apportez une pièce d'identité si possible.
Le lieu est accessible en bus et à pied.
Un plan est disponible sur demande.
Nous vous attendons avec plaisir.
Les horaires habituels restent les mêmes.`;

const CE_POOL_1 = buildExpressPool("e4-2-1", [
  q({
    id: "ce-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["un menu", "une facture d'électricité", "une carte scolaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "un menu",
    vfQ: "Le texte mentionne un menu.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quel plat est mentionné ?",
    text: ["salade et poisson", "une voiture", "un cahier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le plat est _________.",
    fill: "salade et poisson",
    vfQ: "Le texte mentionne salade et poisson.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
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
    id: "ce-q4",
    textQ: "Où cela se passe-t-il ?",
    text: ["Restaurant Le Lac", "à la plage", "à l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le lieu est _________.",
    fill: "Restaurant Le Lac",
    vfQ: "Le texte mentionne Restaurant Le Lac.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle boisson est mentionnée ?",
    text: ["eau minérale", "de l'essence", "du savon"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La boisson est _________.",
    fill: "eau minérale",
    vfQ: "Le texte mentionne eau minérale.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel prix est indiqué ?",
    text: ["28 francs", "1000 francs", "gratuit toujours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix est _________.",
    fill: "28 francs",
    vfQ: "Le texte mentionne 28 francs.",
    vfC: 0,
  }),
]);
const CE_TEXT_2 = `SMS réservation

Salut ! Pour une fondue moitié-moitié, information : à 19 h.
On se retrouve chez Fondue House. vin blanc est le détail à vérifier.
Pense à confirmer deux personnes; Détail : 35 francs.
Prenez votre temps pour comprendre le message.
En cas de changement, un nouvel avis sera publié.
Nous sommes là pour vous aider.
Gardez ce texte pour vous en souvenir.
Pensez à arriver un peu en avance.`;

const CE_POOL_2 = buildExpressPool("e4-2-2", [
  q({
    id: "ce-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["un SMS", "une facture d'électricité", "une carte scolaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "un SMS",
    vfQ: "Le texte mentionne un SMS.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quel plat est mentionné ?",
    text: ["une fondue moitié-moitié", "une voiture", "un cahier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le plat est _________.",
    fill: "une fondue moitié-moitié",
    vfQ: "Le texte mentionne une fondue moitié-moitié.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
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
    id: "ce-q4",
    textQ: "Où cela se passe-t-il ?",
    text: ["Fondue House", "à la plage", "à l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le lieu est _________.",
    fill: "Fondue House",
    vfQ: "Le texte mentionne Fondue House.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle boisson est mentionnée ?",
    text: ["vin blanc", "de l'essence", "du savon"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La boisson est _________.",
    fill: "vin blanc",
    vfQ: "Le texte mentionne vin blanc.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel prix est indiqué ?",
    text: ["35 francs", "1000 francs", "gratuit toujours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix est _________.",
    fill: "35 francs",
    vfQ: "Le texte mentionne 35 francs.",
    vfC: 0,
  }),
]);
const CE_TEXT_3 = `WhatsApp livraison

À noter aujourd'hui : une pizza margherita.
Lieu : Pizzeria Roma. Moment : à 20 h.
Petit détail : coca-cola. Action prévue : payer à la livraison.
18 francs.
N'oubliez pas de vérifier la date.
Passe le bonjour à tout le monde.
Bonne journée à toutes et à tous.
Ce document complète les informations déjà données.
Nous comptons sur vous.`;

const CE_POOL_3 = buildExpressPool("e4-2-3", [
  q({
    id: "ce-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["un WhatsApp", "une facture d'électricité", "une carte scolaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "un WhatsApp",
    vfQ: "Le texte mentionne un WhatsApp.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quel plat est mentionné ?",
    text: ["une pizza margherita", "une voiture", "un cahier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le plat est _________.",
    fill: "une pizza margherita",
    vfQ: "Le texte mentionne une pizza margherita.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quand cela se passe-t-il ?",
    text: ["à 20 h", "à minuit", "en 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "à 20 h",
    vfQ: "Le texte mentionne à 20 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Où cela se passe-t-il ?",
    text: ["Pizzeria Roma", "à la plage", "à l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le lieu est _________.",
    fill: "Pizzeria Roma",
    vfQ: "Le texte mentionne Pizzeria Roma.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle boisson est mentionnée ?",
    text: ["coca-cola", "de l'essence", "du savon"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La boisson est _________.",
    fill: "coca-cola",
    vfQ: "Le texte mentionne coca-cola.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel prix est indiqué ?",
    text: ["18 francs", "1000 francs", "gratuit toujours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix est _________.",
    fill: "18 francs",
    vfQ: "Le texte mentionne 18 francs.",
    vfC: 0,
  }),
]);
const CE_TEXT_4 = `Note serveur

La cliente hésite encore pour un steak frites.
Chez table 8, elle vérifie bière pression et demande conseil.
Information : à 13 h. Elle doit demander une cuisson à point.
32 francs.
Voici quelques détails utiles pour la suite.
Lisez bien jusqu'à la fin, s'il vous plaît.
Vous pouvez demander de l'aide si besoin.
Les informations importantes sont déjà notées plus haut.
Nous restons disponibles pour vous aider.
Merci de votre attention et de votre patience.`;

const CE_POOL_4 = buildExpressPool("e4-2-4", [
  q({
    id: "ce-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["une note", "une facture d'électricité", "une carte scolaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "une note",
    vfQ: "Le texte mentionne une note.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quel plat est mentionné ?",
    text: ["un steak frites", "une voiture", "un cahier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le plat est _________.",
    fill: "un steak frites",
    vfQ: "Le texte mentionne un steak frites.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quand cela se passe-t-il ?",
    text: ["à 13 h", "à minuit", "en 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "à 13 h",
    vfQ: "Le texte mentionne à 13 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Où cela se passe-t-il ?",
    text: ["table 8", "à la plage", "à l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le lieu est _________.",
    fill: "table 8",
    vfQ: "Le texte mentionne table 8.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle boisson est mentionnée ?",
    text: ["bière pression", "de l'essence", "du savon"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La boisson est _________.",
    fill: "bière pression",
    vfQ: "Le texte mentionne bière pression.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel prix est indiqué ?",
    text: ["32 francs", "1000 francs", "gratuit toujours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix est _________.",
    fill: "32 francs",
    vfQ: "Le texte mentionne 32 francs.",
    vfC: 0,
  }),
]);
const CE_TEXT_5 = `Affiche spécialité

Offre courte sur un risotto aux champignons.
Elle est disponible chez Brasserie du Centre. Information : à midi.
Le vendeur rappelle jus d'orange. Pour profiter de l'offre, il faut choisir le plat végétarien.
24 francs.
Je t'écris aussi pour te donner un peu plus de nouvelles.
Dis-moi si tu as des questions, je réponds vite.
Tu peux m'appeler si c'est plus simple pour toi.
J'espère que tu vas bien et que tout se passe comme prévu.
Joignez les documents demandés si nécessaire.`;

const CE_POOL_5 = buildExpressPool("e4-2-5", [
  q({
    id: "ce-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["une affiche", "une facture d'électricité", "une carte scolaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "une affiche",
    vfQ: "Le texte mentionne une affiche.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quel plat est mentionné ?",
    text: ["un risotto aux champignons", "une voiture", "un cahier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le plat est _________.",
    fill: "un risotto aux champignons",
    vfQ: "Le texte mentionne un risotto aux champignons.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quand cela se passe-t-il ?",
    text: ["à midi", "à minuit", "en 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "à midi",
    vfQ: "Le texte mentionne à midi.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Où cela se passe-t-il ?",
    text: ["Brasserie du Centre", "à la plage", "à l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le lieu est _________.",
    fill: "Brasserie du Centre",
    vfQ: "Le texte mentionne Brasserie du Centre.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle boisson est mentionnée ?",
    text: ["jus d'orange", "de l'essence", "du savon"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La boisson est _________.",
    fill: "jus d'orange",
    vfQ: "Le texte mentionne jus d'orange.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel prix est indiqué ?",
    text: ["24 francs", "1000 francs", "gratuit toujours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix est _________.",
    fill: "24 francs",
    vfQ: "Le texte mentionne 24 francs.",
    vfC: 0,
  }),
]);
const CE_TEXT_6 = `E-mail restaurant

Bonjour, votre demande pour un menu dégustation est prête.
Passez chez Restaurant Le Sapin. Information : à 20 h 30.
Au comptoir, annoncez champagne et pensez à préparer l'anniversaire.
65 francs.
Pour toute urgence, appelez-nous pendant les heures d'ouverture.
Conservez ce message pour vos dossiers.
Une confirmation vous sera envoyée ensuite.
Nous vous souhaitons une excellente journée.
Merci de vérifier les informations avant de répondre.
Nous sommes ouverts du lundi au vendredi.`;

const CE_POOL_6 = buildExpressPool("e4-2-6", [
  q({
    id: "ce-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["un e-mail", "une facture d'électricité", "une carte scolaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "un e-mail",
    vfQ: "Le texte mentionne un e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quel plat est mentionné ?",
    text: ["un menu dégustation", "une voiture", "un cahier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le plat est _________.",
    fill: "un menu dégustation",
    vfQ: "Le texte mentionne un menu dégustation.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quand cela se passe-t-il ?",
    text: ["à 20 h 30", "à minuit", "en 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "à 20 h 30",
    vfQ: "Le texte mentionne à 20 h 30.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Où cela se passe-t-il ?",
    text: ["Restaurant Le Sapin", "à la plage", "à l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le lieu est _________.",
    fill: "Restaurant Le Sapin",
    vfQ: "Le texte mentionne Restaurant Le Sapin.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle boisson est mentionnée ?",
    text: ["champagne", "de l'essence", "du savon"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La boisson est _________.",
    fill: "champagne",
    vfQ: "Le texte mentionne champagne.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel prix est indiqué ?",
    text: ["65 francs", "1000 francs", "gratuit toujours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix est _________.",
    fill: "65 francs",
    vfQ: "Le texte mentionne 65 francs.",
    vfC: 0,
  }),
]);
const CE_TEXT_7 = `Liste famille

Liste rapide avant de sortir : un burger classique.
Adresse : Burger King. Moment prévu : à 18 h 30.
Détail à ne pas oublier : limonade.
Sur place, il faut prendre une table en terrasse. Détail : 22 francs.
N'oubliez pas de vérifier la date.
N'hésite pas à me répondre quand tu peux.
Bonne journée à toutes et à tous.
Ce document complète les informations déjà données.`;

const CE_POOL_7 = buildExpressPool("e4-2-7", [
  q({
    id: "ce-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["une liste", "une facture d'électricité", "une carte scolaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "une liste",
    vfQ: "Le texte mentionne une liste.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quel plat est mentionné ?",
    text: ["un burger classique", "une voiture", "un cahier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le plat est _________.",
    fill: "un burger classique",
    vfQ: "Le texte mentionne un burger classique.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
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
    id: "ce-q4",
    textQ: "Où cela se passe-t-il ?",
    text: ["Burger King", "à la plage", "à l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le lieu est _________.",
    fill: "Burger King",
    vfQ: "Le texte mentionne Burger King.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle boisson est mentionnée ?",
    text: ["limonade", "de l'essence", "du savon"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La boisson est _________.",
    fill: "limonade",
    vfQ: "Le texte mentionne limonade.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel prix est indiqué ?",
    text: ["22 francs", "1000 francs", "gratuit toujours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix est _________.",
    fill: "22 francs",
    vfQ: "Le texte mentionne 22 francs.",
    vfC: 0,
  }),
]);
const CE_TEXT_8 = `Notification ardoise

Notification du magasin : un filet de perche est disponible.
Le retrait se fait chez Café du Port. Information : ce soir.
La note indique vin du lac.
Le client doit demander la vue sur le lac. Détail : 38 francs.
C'est important pour moi, merci beaucoup.
Merci de respecter le calme des autres personnes.
Le personnel peut vous aider en français simple.
Conservez le numéro de contact indiqué.`;

const CE_POOL_8 = buildExpressPool("e4-2-8", [
  q({
    id: "ce-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["une notification", "une facture d'électricité", "une carte scolaire"],
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
    textQ: "Quel plat est mentionné ?",
    text: ["un filet de perche", "une voiture", "un cahier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le plat est _________.",
    fill: "un filet de perche",
    vfQ: "Le texte mentionne un filet de perche.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quand cela se passe-t-il ?",
    text: ["ce soir", "à minuit", "en 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "ce soir",
    vfQ: "Le texte mentionne ce soir.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Où cela se passe-t-il ?",
    text: ["Café du Port", "à la plage", "à l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le lieu est _________.",
    fill: "Café du Port",
    vfQ: "Le texte mentionne Café du Port.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle boisson est mentionnée ?",
    text: ["vin du lac", "de l'essence", "du savon"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La boisson est _________.",
    fill: "vin du lac",
    vfQ: "Le texte mentionne vin du lac.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel prix est indiqué ?",
    text: ["38 francs", "1000 francs", "gratuit toujours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix est _________.",
    fill: "38 francs",
    vfQ: "Le texte mentionne 38 francs.",
    vfC: 0,
  }),
]);
const CE_TEXT_9 = `Avis client

Petit avis sur des pâtes carbonara.
J'ai testé chez Restaurant Italien; eau gazeuse m'a plu.
J'y retourne avec cette information : à 19 h 30. Action prévue : partager l'addition.
21 francs.
Le lieu est facile à trouver.
Prenez votre temps pour comprendre le message.
En cas de changement, un nouvel avis sera publié.
Nous sommes là pour vous aider.
Gardez ce texte pour vous en souvenir.
Conservez le numéro de contact indiqué.`;

const CE_POOL_9 = buildExpressPool("e4-2-9", [
  q({
    id: "ce-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["un avis", "une facture d'électricité", "une carte scolaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "un avis",
    vfQ: "Le texte mentionne un avis.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quel plat est mentionné ?",
    text: ["des pâtes carbonara", "une voiture", "un cahier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le plat est _________.",
    fill: "des pâtes carbonara",
    vfQ: "Le texte mentionne des pâtes carbonara.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quand cela se passe-t-il ?",
    text: ["à 19 h 30", "à minuit", "en 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "à 19 h 30",
    vfQ: "Le texte mentionne à 19 h 30.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Où cela se passe-t-il ?",
    text: ["Restaurant Italien", "à la plage", "à l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le lieu est _________.",
    fill: "Restaurant Italien",
    vfQ: "Le texte mentionne Restaurant Italien.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle boisson est mentionnée ?",
    text: ["eau gazeuse", "de l'essence", "du savon"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La boisson est _________.",
    fill: "eau gazeuse",
    vfQ: "Le texte mentionne eau gazeuse.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel prix est indiqué ?",
    text: ["21 francs", "1000 francs", "gratuit toujours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix est _________.",
    fill: "21 francs",
    vfQ: "Le texte mentionne 21 francs.",
    vfC: 0,
  }),
]);
const CE_TEXT_10 = `Commande de groupe

Commande de groupe : une salade César.
La personne responsable passe chez Snack Bar. Information notée : à 13 h.
Elle confirme thé glacé par téléphone.
Il reste à retirer sans croûtons. Détail : 16 francs.
Lisez bien jusqu'à la fin, s'il vous plaît.
Vous pouvez demander de l'aide si besoin.
Les informations importantes sont déjà notées plus haut.
J'espère que tout se passe bien de ton côté.`;

const CE_POOL_10 = buildExpressPool("e4-2-10", [
  q({
    id: "ce-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["une commande", "une facture d'électricité", "une carte scolaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "une commande",
    vfQ: "Le texte mentionne une commande.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quel plat est mentionné ?",
    text: ["une salade César", "une voiture", "un cahier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le plat est _________.",
    fill: "une salade César",
    vfQ: "Le texte mentionne une salade César.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quand cela se passe-t-il ?",
    text: ["à 13 h", "à minuit", "en 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "à 13 h",
    vfQ: "Le texte mentionne à 13 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Où cela se passe-t-il ?",
    text: ["Snack Bar", "à la plage", "à l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le lieu est _________.",
    fill: "Snack Bar",
    vfQ: "Le texte mentionne Snack Bar.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle boisson est mentionnée ?",
    text: ["thé glacé", "de l'essence", "du savon"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La boisson est _________.",
    fill: "thé glacé",
    vfQ: "Le texte mentionne thé glacé.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel prix est indiqué ?",
    text: ["16 francs", "1000 francs", "gratuit toujours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix est _________.",
    fill: "16 francs",
    vfQ: "Le texte mentionne 16 francs.",
    vfC: 0,
  }),
]);
const CE_TEXT_11 = `Alerte cantine

Alerte du jour : un menu enfant.
Chez table 6, il reste peu de stock.
Information : à midi. Cherchez jus de pomme.
Pour finaliser, il faut demander le jouet. Détail : 12 francs.
Les informations importantes sont déjà notées plus haut.
Merci de lire ce message jusqu'à la fin.
Merci de votre attention et de votre patience.
Une confirmation arrivera ensuite.`;

const CE_POOL_11 = buildExpressPool("e4-2-11", [
  q({
    id: "ce-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["une alerte", "une facture d'électricité", "une carte scolaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "une alerte",
    vfQ: "Le texte mentionne une alerte.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quel plat est mentionné ?",
    text: ["un menu enfant", "une voiture", "un cahier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le plat est _________.",
    fill: "un menu enfant",
    vfQ: "Le texte mentionne un menu enfant.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quand cela se passe-t-il ?",
    text: ["à midi", "à minuit", "en 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "à midi",
    vfQ: "Le texte mentionne à midi.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Où cela se passe-t-il ?",
    text: ["table 6", "à la plage", "à l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le lieu est _________.",
    fill: "table 6",
    vfQ: "Le texte mentionne table 6.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle boisson est mentionnée ?",
    text: ["jus de pomme", "de l'essence", "du savon"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La boisson est _________.",
    fill: "jus de pomme",
    vfQ: "Le texte mentionne jus de pomme.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel prix est indiqué ?",
    text: ["12 francs", "1000 francs", "gratuit toujours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix est _________.",
    fill: "12 francs",
    vfQ: "Le texte mentionne 12 francs.",
    vfC: 0,
  }),
]);
const CE_TEXT_12 = `Dialogue café

Conversation courte :
— Tu veux une tarte aux pommes ?
— Oui, chez Café Bellevue.
— Information : à 15 h; détail : café.
Nous comptons sur vous.
Voici quelques détails utiles pour la suite.
Lisez bien jusqu'à la fin, s'il vous plaît.
Vous pouvez demander de l'aide si besoin.
— D'accord, action : prendre une part maison. Détail : 8 francs.
En cas de perte d'objet, passez à l'accueil.`;

const CE_POOL_12 = buildExpressPool("e4-2-12", [
  q({
    id: "ce-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["un dialogue", "une facture d'électricité", "une carte scolaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "un dialogue",
    vfQ: "Le texte mentionne un dialogue.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quel plat est mentionné ?",
    text: ["une tarte aux pommes", "une voiture", "un cahier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le plat est _________.",
    fill: "une tarte aux pommes",
    vfQ: "Le texte mentionne une tarte aux pommes.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
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
    id: "ce-q4",
    textQ: "Où cela se passe-t-il ?",
    text: ["Café Bellevue", "à la plage", "à l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le lieu est _________.",
    fill: "Café Bellevue",
    vfQ: "Le texte mentionne Café Bellevue.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle boisson est mentionnée ?",
    text: ["café", "de l'essence", "du savon"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La boisson est _________.",
    fill: "café",
    vfQ: "Le texte mentionne café.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel prix est indiqué ?",
    text: ["8 francs", "1000 francs", "gratuit toujours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix est _________.",
    fill: "8 francs",
    vfQ: "Le texte mentionne 8 francs.",
    vfC: 0,
  }),
]);
const CE_TEXT_13 = `Ardoise happy hour

Sur l'ardoise, on lit un plateau apéro.
Le lieu est bar du Centre; l'information indiquée est de 17 h à 19 h.
La ligne suivante parle de spritz.
Le client doit venir avec trois amis. Détail : 15 francs.
Le message est aussi envoyé au groupe WhatsApp.
Si vous changez d'avis, dites-le sans attendre.
On peut décaler d'une demi-heure si besoin.
Voici quelques détails utiles pour la suite.
Je reste près de mon téléphone aujourd'hui.`;

const CE_POOL_13 = buildExpressPool("e4-2-13", [
  q({
    id: "ce-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["une ardoise", "une facture d'électricité", "une carte scolaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "une ardoise",
    vfQ: "Le texte mentionne une ardoise.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quel plat est mentionné ?",
    text: ["un plateau apéro", "une voiture", "un cahier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le plat est _________.",
    fill: "un plateau apéro",
    vfQ: "Le texte mentionne un plateau apéro.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quand cela se passe-t-il ?",
    text: ["de 17 h à 19 h", "à minuit", "en 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "de 17 h à 19 h",
    vfQ: "Le texte mentionne de 17 h à 19 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Où cela se passe-t-il ?",
    text: ["bar du Centre", "à la plage", "à l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le lieu est _________.",
    fill: "bar du Centre",
    vfQ: "Le texte mentionne bar du Centre.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle boisson est mentionnée ?",
    text: ["spritz", "de l'essence", "du savon"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La boisson est _________.",
    fill: "spritz",
    vfQ: "Le texte mentionne spritz.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel prix est indiqué ?",
    text: ["15 francs", "1000 francs", "gratuit toujours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix est _________.",
    fill: "15 francs",
    vfQ: "Le texte mentionne 15 francs.",
    vfC: 0,
  }),
]);
const CE_TEXT_14 = `Rappel déjeuner

Rappel dans le téléphone : une soupe du jour.
Départ ou passage avec cette information : à 12 h.
Lieu : table 10.
Vérifier pain avant de payer.
Ensuite, commander une entrée chaude. Détail : 9 francs.
En cas de changement, un nouvel avis sera publié.
Nous sommes là pour vous aider.
Gardez ce texte pour vous en souvenir.
Dis-moi si tu as besoin d'autre chose.`;

const CE_POOL_14 = buildExpressPool("e4-2-14", [
  q({
    id: "ce-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["un rappel", "une facture d'électricité", "une carte scolaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "un rappel",
    vfQ: "Le texte mentionne un rappel.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quel plat est mentionné ?",
    text: ["une soupe du jour", "une voiture", "un cahier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le plat est _________.",
    fill: "une soupe du jour",
    vfQ: "Le texte mentionne une soupe du jour.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quand cela se passe-t-il ?",
    text: ["à 12 h", "à minuit", "en 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "à 12 h",
    vfQ: "Le texte mentionne à 12 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Où cela se passe-t-il ?",
    text: ["table 10", "à la plage", "à l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le lieu est _________.",
    fill: "table 10",
    vfQ: "Le texte mentionne table 10.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle boisson est mentionnée ?",
    text: ["pain", "de l'essence", "du savon"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La boisson est _________.",
    fill: "pain",
    vfQ: "Le texte mentionne pain.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel prix est indiqué ?",
    text: ["9 francs", "1000 francs", "gratuit toujours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix est _________.",
    fill: "9 francs",
    vfQ: "Le texte mentionne 9 francs.",
    vfC: 0,
  }),
]);
const CE_TEXT_15 = `Annonce terrasse

Annonce locale : un plateau de fruits de mer arrive ce matin.
Chez terrasse du lac, l'information affichée est à 21 h.
vin blanc est mis de côté.
Action simple : confirmer la table. Détail : 55 francs.
Voici quelques détails utiles pour la suite.
Lisez bien jusqu'à la fin, s'il vous plaît.
Vous pouvez demander de l'aide si besoin.
Les informations importantes sont déjà notées plus haut.
Nous vous souhaitons une excellente journée.`;

const CE_POOL_15 = buildExpressPool("e4-2-15", [
  q({
    id: "ce-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["une annonce", "une facture d'électricité", "une carte scolaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "une annonce",
    vfQ: "Le texte mentionne une annonce.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quel plat est mentionné ?",
    text: ["un plateau de fruits de mer", "une voiture", "un cahier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le plat est _________.",
    fill: "un plateau de fruits de mer",
    vfQ: "Le texte mentionne un plateau de fruits de mer.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quand cela se passe-t-il ?",
    text: ["à 21 h", "à minuit", "en 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "à 21 h",
    vfQ: "Le texte mentionne à 21 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Où cela se passe-t-il ?",
    text: ["terrasse du lac", "à la plage", "à l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le lieu est _________.",
    fill: "terrasse du lac",
    vfQ: "Le texte mentionne terrasse du lac.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle boisson est mentionnée ?",
    text: ["vin blanc", "de l'essence", "du savon"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La boisson est _________.",
    fill: "vin blanc",
    vfQ: "Le texte mentionne vin blanc.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel prix est indiqué ?",
    text: ["55 francs", "1000 francs", "gratuit toujours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix est _________.",
    fill: "55 francs",
    vfQ: "Le texte mentionne 55 francs.",
    vfC: 0,
  }),
]);
const CE_TEXT_16 = `Message cuisine

Petit message au vendeur : je viens pour un poulet rôti.
Je serai chez table 14. Information : à 19 h.
Un agent peut vous accompagner jusqu'au bon guichet.
Le bâtiment est ouvert dès 8 heures.
Voici quelques détails utiles pour la suite.
Nous traitons votre demande rapidement.
Merci de préparer eau.
Sur place, je vais servir sans gluten. Détail : 26 francs.`;

const CE_POOL_16 = buildExpressPool("e4-2-16", [
  q({
    id: "ce-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["un message", "une facture d'électricité", "une carte scolaire"],
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
    textQ: "Quel plat est mentionné ?",
    text: ["un poulet rôti", "une voiture", "un cahier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le plat est _________.",
    fill: "un poulet rôti",
    vfQ: "Le texte mentionne un poulet rôti.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
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
    id: "ce-q4",
    textQ: "Où cela se passe-t-il ?",
    text: ["table 14", "à la plage", "à l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le lieu est _________.",
    fill: "table 14",
    vfQ: "Le texte mentionne table 14.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle boisson est mentionnée ?",
    text: ["eau", "de l'essence", "du savon"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La boisson est _________.",
    fill: "eau",
    vfQ: "Le texte mentionne eau.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel prix est indiqué ?",
    text: ["26 francs", "1000 francs", "gratuit toujours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix est _________.",
    fill: "26 francs",
    vfQ: "Le texte mentionne 26 francs.",
    vfC: 0,
  }),
]);
const CE_TEXT_17 = `Offre goûter

Carte de fidélité : offre sur une crêpe sucrée.
Elle fonctionne chez Crêperie Bretonne; information : à 16 h.
Le détail lu en magasin est chocolat chaud.
Pour l'utiliser, il faut choisir sucre ou chocolat. Détail : 10 francs.
Vous pouvez venir avec un ami ou un membre de la famille.
Apportez une pièce d'identité si possible.
Le lieu est accessible en bus et à pied.
Un plan est disponible sur demande.
À bientôt, et merci de votre lecture.`;

const CE_POOL_17 = buildExpressPool("e4-2-17", [
  q({
    id: "ce-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["une offre", "une facture d'électricité", "une carte scolaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "une offre",
    vfQ: "Le texte mentionne une offre.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quel plat est mentionné ?",
    text: ["une crêpe sucrée", "une voiture", "un cahier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le plat est _________.",
    fill: "une crêpe sucrée",
    vfQ: "Le texte mentionne une crêpe sucrée.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
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
    id: "ce-q4",
    textQ: "Où cela se passe-t-il ?",
    text: ["Crêperie Bretonne", "à la plage", "à l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le lieu est _________.",
    fill: "Crêperie Bretonne",
    vfQ: "Le texte mentionne Crêperie Bretonne.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle boisson est mentionnée ?",
    text: ["chocolat chaud", "de l'essence", "du savon"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La boisson est _________.",
    fill: "chocolat chaud",
    vfQ: "Le texte mentionne chocolat chaud.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel prix est indiqué ?",
    text: ["10 francs", "1000 francs", "gratuit toujours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix est _________.",
    fill: "10 francs",
    vfQ: "Le texte mentionne 10 francs.",
    vfC: 0,
  }),
]);
const CE_TEXT_18 = `Réservation midi

Pour la fête, il faut un plat du jour et dessert.
La réservation est chez Formule Midi. Information : entre 12 h et 14 h.
La vendeuse confirme café.
Dernière étape : manger rapidement. Détail : 22 francs.
N'oubliez pas de vérifier la date.
Pensez à arriver un peu en avance.
Bonne journée à toutes et à tous.
Ce document complète les informations déjà données.`;

const CE_POOL_18 = buildExpressPool("e4-2-18", [
  q({
    id: "ce-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["une réservation", "une facture d'électricité", "une carte scolaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "une réservation",
    vfQ: "Le texte mentionne une réservation.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quel plat est mentionné ?",
    text: ["un plat du jour et dessert", "une voiture", "un cahier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le plat est _________.",
    fill: "un plat du jour et dessert",
    vfQ: "Le texte mentionne un plat du jour et dessert.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quand cela se passe-t-il ?",
    text: ["entre 12 h et 14 h", "à minuit", "en 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "entre 12 h et 14 h",
    vfQ: "Le texte mentionne entre 12 h et 14 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Où cela se passe-t-il ?",
    text: ["Formule Midi", "à la plage", "à l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le lieu est _________.",
    fill: "Formule Midi",
    vfQ: "Le texte mentionne Formule Midi.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle boisson est mentionnée ?",
    text: ["café", "de l'essence", "du savon"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La boisson est _________.",
    fill: "café",
    vfQ: "Le texte mentionne café.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel prix est indiqué ?",
    text: ["22 francs", "1000 francs", "gratuit toujours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix est _________.",
    fill: "22 francs",
    vfQ: "Le texte mentionne 22 francs.",
    vfC: 0,
  }),
]);
const CE_TEXT_19 = `Confirmation dîner

Message de confirmation : une salade niçoise.
Le retrait se fait chez terrasse 5. Information : à 20 h.
La commande porte la note rosé.
Consigne : garder la table dehors. Détail : 19 francs.
En cas de changement, un nouvel avis sera publié.
Nous sommes là pour vous aider.
Gardez ce texte pour vous en souvenir.
Une confirmation sera envoyée ensuite.`;

const CE_POOL_19 = buildExpressPool("e4-2-19", [
  q({
    id: "ce-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["une confirmation", "une facture d'électricité", "une carte scolaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "une confirmation",
    vfQ: "Le texte mentionne une confirmation.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quel plat est mentionné ?",
    text: ["une salade niçoise", "une voiture", "un cahier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le plat est _________.",
    fill: "une salade niçoise",
    vfQ: "Le texte mentionne une salade niçoise.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quand cela se passe-t-il ?",
    text: ["à 20 h", "à minuit", "en 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "à 20 h",
    vfQ: "Le texte mentionne à 20 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Où cela se passe-t-il ?",
    text: ["terrasse 5", "à la plage", "à l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le lieu est _________.",
    fill: "terrasse 5",
    vfQ: "Le texte mentionne terrasse 5.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle boisson est mentionnée ?",
    text: ["rosé", "de l'essence", "du savon"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La boisson est _________.",
    fill: "rosé",
    vfQ: "Le texte mentionne rosé.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel prix est indiqué ?",
    text: ["19 francs", "1000 francs", "gratuit toujours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix est _________.",
    fill: "19 francs",
    vfQ: "Le texte mentionne 19 francs.",
    vfC: 0,
  }),
]);
const CE_TEXT_20 = `Idée végan

Dernière idée du week-end : un menu végétalien.
On passe chez Restaurant Vert. Information : à 19 h.
On regarde d'abord smoothie.
Si tout va bien, on peut demander les options bio. Détail : 25 francs.
Les places sont limitées, merci de confirmer.
En cas d'annulation, prévenez-nous rapidement.
Le règlement est simple et affiché à l'entrée.
À bientôt, et merci de votre lecture.`;

const CE_POOL_20 = buildExpressPool("e4-2-20", [
  q({
    id: "ce-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["une idée", "une facture d'électricité", "une carte scolaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "une idée",
    vfQ: "Le texte mentionne une idée.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quel plat est mentionné ?",
    text: ["un menu végétalien", "une voiture", "un cahier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le plat est _________.",
    fill: "un menu végétalien",
    vfQ: "Le texte mentionne un menu végétalien.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
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
    id: "ce-q4",
    textQ: "Où cela se passe-t-il ?",
    text: ["Restaurant Vert", "à la plage", "à l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le lieu est _________.",
    fill: "Restaurant Vert",
    vfQ: "Le texte mentionne Restaurant Vert.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle boisson est mentionnée ?",
    text: ["smoothie", "de l'essence", "du savon"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La boisson est _________.",
    fill: "smoothie",
    vfQ: "Le texte mentionne smoothie.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel prix est indiqué ?",
    text: ["25 francs", "1000 francs", "gratuit toujours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix est _________.",
    fill: "25 francs",
    vfQ: "Le texte mentionne 25 francs.",
    vfC: 0,
  }),
]);

export const E4_2_CE: CommunicationExercise[] = [
  readingPoolExercise({
  id: "e4-2-1",
  readingText: CE_TEXT_1,
  questionPool: CE_POOL_1
}),
  readingPoolExercise({
  id: "e4-2-2",
  readingText: CE_TEXT_2,
  questionPool: CE_POOL_2
}),
  readingPoolExercise({
  id: "e4-2-3",
  readingText: CE_TEXT_3,
  questionPool: CE_POOL_3
}),
  readingPoolExercise({
  id: "e4-2-4",
  readingText: CE_TEXT_4,
  questionPool: CE_POOL_4
}),
  readingPoolExercise({
  id: "e4-2-5",
  readingText: CE_TEXT_5,
  questionPool: CE_POOL_5
}),
  readingPoolExercise({
  id: "e4-2-6",
  readingText: CE_TEXT_6,
  questionPool: CE_POOL_6
}),
  readingPoolExercise({
  id: "e4-2-7",
  readingText: CE_TEXT_7,
  questionPool: CE_POOL_7
}),
  readingPoolExercise({
  id: "e4-2-8",
  readingText: CE_TEXT_8,
  questionPool: CE_POOL_8
}),
  readingPoolExercise({
  id: "e4-2-9",
  readingText: CE_TEXT_9,
  questionPool: CE_POOL_9
}),
  readingPoolExercise({
  id: "e4-2-10",
  readingText: CE_TEXT_10,
  questionPool: CE_POOL_10
}),
  readingPoolExercise({
  id: "e4-2-11",
  readingText: CE_TEXT_11,
  questionPool: CE_POOL_11
}),
  readingPoolExercise({
  id: "e4-2-12",
  readingText: CE_TEXT_12,
  questionPool: CE_POOL_12
}),
  readingPoolExercise({
  id: "e4-2-13",
  readingText: CE_TEXT_13,
  questionPool: CE_POOL_13
}),
  readingPoolExercise({
  id: "e4-2-14",
  readingText: CE_TEXT_14,
  questionPool: CE_POOL_14
}),
  readingPoolExercise({
  id: "e4-2-15",
  readingText: CE_TEXT_15,
  questionPool: CE_POOL_15
}),
  readingPoolExercise({
  id: "e4-2-16",
  readingText: CE_TEXT_16,
  questionPool: CE_POOL_16
}),
  readingPoolExercise({
  id: "e4-2-17",
  readingText: CE_TEXT_17,
  questionPool: CE_POOL_17
}),
  readingPoolExercise({
  id: "e4-2-18",
  readingText: CE_TEXT_18,
  questionPool: CE_POOL_18
}),
  readingPoolExercise({
  id: "e4-2-19",
  readingText: CE_TEXT_19,
  questionPool: CE_POOL_19
}),
  readingPoolExercise({
  id: "e4-2-20",
  readingText: CE_TEXT_20,
  questionPool: CE_POOL_20
}),
];

/* ── Production orale — dialogues à jouer (thème restaurant) ──────────────── */

const SERVEUR = { title: "Le serveur", vous: "le serveur / la serveuse" };
const CLIENT = { title: "Le client", vous: "le client / la cliente" };

export const E4_2_PO: ExpressPoDialogue[] = [
  {
    id: "e4-2-po-1",
    title: "Réserver une table",
    context: "Vous téléphonez au restaurant pour réserver une table pour ce soir.",
    roleA: { title: "L'employé du restaurant", vous: "l'employé / l'employée" },
    roleB: CLIENT,
    lines: [
      { role: "A", text: "Restaurant Chez Marie, bonjour !" },
      { role: "B", text: "Bonjour, je voudrais réserver une table pour ce soir." },
      { role: "A", text: "Oui, pour combien de personnes ?" },
      { role: "B", text: "Pour quatre personnes, s'il vous plaît." },
      { role: "A", text: "À quelle heure venez-vous ?" },
      { role: "B", text: "À dix-neuf heures trente." },
      { role: "A", text: "C'est noté. À ce soir !" },
      { role: "B", text: "Merci beaucoup, à ce soir !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e4-2-po-2",
    title: "Commander le déjeuner",
    context: "Vous êtes au restaurant à midi et vous commandez le menu du jour.",
    roleA: SERVEUR,
    roleB: CLIENT,
    lines: [
      { role: "A", text: "Bonjour ! Vous avez choisi ?" },
      { role: "B", text: "Oui, je prends le menu du jour, s'il vous plaît." },
      { role: "A", text: "Très bien. Du poisson ou de la viande ?" },
      { role: "B", text: "Du poisson, avec du riz." },
      { role: "A", text: "Et comme boisson ?" },
      { role: "B", text: "Une carafe d'eau, s'il vous plaît." },
      { role: "A", text: "Parfait. Et en dessert, tarte ou glace ?" },
      { role: "B", text: "Une tarte aux pommes. Merci !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e4-2-po-3",
    title: "Le client végétarien",
    context: "Vous êtes végétarien et vous demandez un plat sans viande.",
    roleA: SERVEUR,
    roleB: CLIENT,
    lines: [
      { role: "A", text: "Bonsoir, je peux prendre votre commande ?" },
      { role: "B", text: "Oui, mais je suis végétarien. Je ne mange pas de viande." },
      { role: "A", text: "Pas de problème. Nous avons des pâtes aux légumes." },
      { role: "B", text: "Très bien ! Il y a du poisson dedans ?" },
      { role: "A", text: "Non, pas de poisson. Juste des légumes et du fromage." },
      { role: "B", text: "Parfait, je prends les pâtes alors." },
      { role: "A", text: "Et qu'est-ce que vous buvez ?" },
      { role: "B", text: "De l'eau, s'il vous plaît. Pas d'alcool pour moi." },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e4-2-po-4",
    title: "Demander l'addition",
    context: "Vous avez fini votre repas et vous demandez l'addition.",
    roleA: SERVEUR,
    roleB: CLIENT,
    lines: [
      { role: "A", text: "Tout va bien ? Le repas vous a plu ?" },
      { role: "B", text: "Oui, c'était excellent ! L'addition, s'il vous plaît." },
      { role: "A", text: "Bien sûr. Ça fait quarante-huit francs." },
      { role: "B", text: "Vous prenez la carte ?" },
      { role: "A", text: "Oui, sans contact aussi. Voilà." },
      { role: "B", text: "Est-ce que le service est compris ?" },
      { role: "A", text: "Oui, mais vous pouvez laisser un pourboire si vous voulez." },
      { role: "B", text: "D'accord, voilà pour vous. Merci et bonne soirée !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e4-2-po-5",
    title: "Un problème avec la commande",
    context: "Le serveur apporte de la viande, mais vous avez commandé du poisson.",
    roleA: SERVEUR,
    roleB: CLIENT,
    lines: [
      { role: "A", text: "Voici votre plat : le steak-frites." },
      { role: "B", text: "Excusez-moi, mais j'ai commandé du poisson." },
      { role: "A", text: "Oh, pardon ! C'est une erreur." },
      { role: "B", text: "Ce n'est pas grave, mais je ne mange pas de viande." },
      { role: "A", text: "Je change tout de suite. Le poisson arrive dans cinq minutes." },
      { role: "B", text: "Merci. Je peux avoir aussi du pain ?" },
      { role: "A", text: "Bien sûr, je vous apporte du pain et votre poisson." },
      { role: "B", text: "Merci beaucoup, c'est gentil." },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e4-2-po-6",
    title: "Choisir avec un ami",
    context: "Vous lisez le menu avec un ami et vous choisissez vos plats.",
    roleA: { title: "L'ami", vous: "l'ami / l'amie" },
    roleB: { title: "L'autre ami", vous: "l'ami / l'amie" },
    lines: [
      { role: "A", text: "Qu'est-ce que tu prends ? Moi, une salade en entrée." },
      { role: "B", text: "Bonne idée. Et après, du poulet avec des frites." },
      { role: "A", text: "Moi, je ne mange pas de viande. Je prends du poisson." },
      { role: "B", text: "Tu bois du vin ?" },
      { role: "A", text: "Non, pas d'alcool. De l'eau pour moi." },
      { role: "B", text: "Alors une carafe d'eau pour deux." },
      { role: "A", text: "Et en dessert ? La tarte aux fraises est très bonne ici." },
      { role: "B", text: "D'accord, deux tartes ! On appelle le serveur ?" },
      { role: "A", text: "Merci, c'était très bon !" },
      { role: "B", text: "Avec plaisir. À bientôt !" },
],
  },
  {
    id: "e4-2-po-7",
    title: "Commander par téléphone",
    context: "Vous téléphonez à un restaurant pour commander un repas à la maison.",
    roleA: { title: "L'employé du restaurant", vous: "l'employé / l'employée" },
    roleB: CLIENT,
    lines: [
      { role: "A", text: "Pizzeria Bella, bonjour ! Je peux prendre votre commande ?" },
      { role: "B", text: "Bonjour, je voudrais une pizza aux légumes, s'il vous plaît." },
      { role: "A", text: "Une pizza aux légumes. Et comme boisson ?" },
      { role: "B", text: "Un jus d'orange. C'est tout." },
      { role: "A", text: "Ça fait dix-huit francs. Votre adresse, s'il vous plaît ?" },
      { role: "B", text: "Rue de la Gare 5, au deuxième étage." },
      { role: "A", text: "Merci. La livraison arrive dans trente minutes." },
      { role: "B", text: "Parfait, merci beaucoup. À tout à l'heure !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e4-2-po-8",
    title: "Le petit déjeuner au café",
    context: "Vous prenez le petit déjeuner dans un café.",
    roleA: SERVEUR,
    roleB: CLIENT,
    lines: [
      { role: "A", text: "Bonjour ! Qu'est-ce que je vous sers ?" },
      { role: "B", text: "Bonjour, un café au lait et un croissant, s'il vous plaît." },
      { role: "A", text: "Vous voulez aussi du jus d'orange ?" },
      { role: "B", text: "Oui, un petit jus d'orange." },
      { role: "A", text: "Je vous apporte tout ça. Vous mangez ici ?" },
      { role: "B", text: "Oui, à la table près de la fenêtre." },
      { role: "A", text: "Très bien. Ça fait neuf francs cinquante." },
      { role: "B", text: "Voilà. Merci beaucoup !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e4-2-po-9",
    title: "Une table sans réservation",
    context: "Vous arrivez au restaurant sans réservation un samedi soir.",
    roleA: SERVEUR,
    roleB: CLIENT,
    lines: [
      { role: "A", text: "Bonsoir ! Vous avez une réservation ?" },
      { role: "B", text: "Non, nous n'avons pas de réservation. Vous avez une table pour deux ?" },
      { role: "A", text: "Ce soir, c'est complet jusqu'à vingt et une heures." },
      { role: "B", text: "On peut revenir à vingt et une heures. C'est possible ?" },
      { role: "A", text: "Oui, bien sûr. C'est à quel nom ?" },
      { role: "B", text: "Muller. M-U-L-L-E-R." },
      { role: "A", text: "C'est noté. À tout à l'heure !" },
      { role: "B", text: "Merci beaucoup, à tout à l'heure !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e4-2-po-10",
    title: "Les allergies",
    context: "Vous êtes allergique aux noix et vous posez des questions sur le menu.",
    roleA: SERVEUR,
    roleB: CLIENT,
    lines: [
      { role: "A", text: "Bonsoir, vous avez choisi ?" },
      { role: "B", text: "Presque. Je suis allergique aux noix. Il y a des noix dans la salade ?" },
      { role: "A", text: "Oui, il y a des noix dans la salade. Mais la soupe est sans noix." },
      { role: "B", text: "Alors une soupe en entrée, s'il vous plaît." },
      { role: "A", text: "Et comme plat ? Le poulet est sans noix aussi." },
      { role: "B", text: "Parfait, le poulet avec des légumes." },
      { role: "A", text: "Très bien. Et comme boisson ?" },
      { role: "B", text: "De l'eau gazeuse, s'il vous plaît. Merci !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
{
  id: "e4-2-po-11",
  title: "Demander une information sur un restaurant",
  context: "Vous voulez réserver une table pour deux.",
  roleA: { title: "Le serveur", vous: "le serveur / la serveuse" },
  roleB: { title: "Vous", vous: "le client / la cliente" },
  lines: [
    { role: "A", text: "Bonjour, je peux vous renseigner ?" },
    { role: "B", text: "Bonjour, je voudrais savoir comment faire pour réserver une table pour deux." },
    { role: "A", text: "Bien sûr. Il reste une place à 19 h 30." },
    { role: "B", text: "D'accord. Est-ce qu'il faut réserver avant ?" },
    { role: "A", text: "Oui. La terrasse est ouverte." },
    { role: "B", text: "Très bien. Je peux le faire aujourd'hui ?" },
    { role: "A", text: "Oui, si vous avez quelques minutes." },
    { role: "B", text: "Parfait, je commence tout de suite." },
    { role: "A", text: "Je reste disponible si vous avez une question." },
    { role: "B", text: "Merci beaucoup pour votre aide." },
  ],
},
{
  id: "e4-2-po-12",
  title: "Expliquer un problème avec un restaurant",
  context: "Vous expliquez un problème : ma réservation n'apparaît pas.",
  roleA: { title: "Le serveur", vous: "le serveur / la serveuse" },
  roleB: { title: "Vous", vous: "le client / la cliente" },
  lines: [
    { role: "A", text: "Bonjour, qu'est-ce qui se passe ?" },
    { role: "B", text: "Bonjour, j'ai un problème : ma réservation n'apparaît pas." },
    { role: "A", text: "Je comprends. Je vais vérifier avec votre numéro." },
    { role: "B", text: "Merci. Est-ce possible de régler ça maintenant ?" },
    { role: "A", text: "Nous avons encore une table libre." },
    { role: "B", text: "Très bien, merci." },
    { role: "A", text: "Je m'en occupe tout de suite." },
    { role: "B", text: "C'est gentil, je vous remercie." },
    { role: "A", text: "Je vous en prie." },
    { role: "B", text: "Merci, bonne journée." },
  ],
},
{
  id: "e4-2-po-13",
  title: "Prendre rendez-vous pour un restaurant",
  context: "Vous voulez prendre rendez-vous pour organiser un repas de groupe.",
  roleA: { title: "Le serveur", vous: "le serveur / la serveuse" },
  roleB: { title: "Vous", vous: "le client / la cliente" },
  lines: [
    { role: "A", text: "Bonjour, vous souhaitez un rendez-vous ?" },
    { role: "B", text: "Oui, je voudrais organiser un repas de groupe." },
    { role: "A", text: "Je peux vous proposer vendredi prochain." },
    { role: "B", text: "Oui, ce créneau me convient." },
    { role: "A", text: "Nous serons huit personnes." },
    { role: "B", text: "D'accord, je le note." },
    { role: "A", text: "Je vous envoie une confirmation par message." },
    { role: "B", text: "Merci. Vous avez mon numéro ?" },
    { role: "A", text: "Oui, il est noté ici." },
    { role: "B", text: "Parfait, à bientôt." },
  ],
},
{
  id: "e4-2-po-14",
  title: "Confirmer un rendez-vous",
  context: "Vous confirmez ceci : la table de ce soir.",
  roleA: { title: "Le serveur", vous: "le serveur / la serveuse" },
  roleB: { title: "Vous", vous: "le client / la cliente" },
  lines: [
    { role: "A", text: "Bonjour, vous appelez pour confirmer ?" },
    { role: "B", text: "Oui, je confirme la table de ce soir." },
    { role: "A", text: "Très bien. C'est bien au nom de Martin ?" },
    { role: "B", text: "Oui, c'est exact." },
    { role: "A", text: "Parfait, c'est noté." },
    { role: "B", text: "Nous arrivons à 20 heures." },
    { role: "A", text: "Oui, aucun problème." },
    { role: "B", text: "Merci, c'est très clair." },
    { role: "A", text: "Parfait, à ce moment-là." },
    { role: "B", text: "Merci, à bientôt." },
  ],
},
{
  id: "e4-2-po-15",
  title: "Demander conseil sur un restaurant",
  context: "Vous demandez conseil pour choisir un plat sans viande.",
  roleA: { title: "Le serveur", vous: "le serveur / la serveuse" },
  roleB: { title: "Vous", vous: "le client / la cliente" },
  lines: [
    { role: "A", text: "Vous voulez un conseil ?" },
    { role: "B", text: "Oui, j'hésite pour choisir un plat sans viande." },
    { role: "A", text: "Le risotto aux légumes est très bon." },
    { role: "B", text: "C'est vrai, mais je veux aussi quelque chose de pratique." },
    { role: "A", text: "La soupe est aussi végétarienne." },
    { role: "B", text: "Je comprends mieux la différence." },
    { role: "A", text: "Choisissez ce qui vous simplifie la vie." },
    { role: "B", text: "Vous avez raison. Je vais y réfléchir ce soir." },
    { role: "A", text: "Revenez me voir si vous voulez en reparler." },
    { role: "B", text: "Merci pour votre conseil." },
  ],
},
{
  id: "e4-2-po-16",
  title: "Signaler un retard",
  context: "Vous signalez un retard : nous arrivons en retard au restaurant.",
  roleA: { title: "Le serveur", vous: "le serveur / la serveuse" },
  roleB: { title: "Vous", vous: "le client / la cliente" },
  lines: [
    { role: "A", text: "Bonjour, je vous écoute." },
    { role: "B", text: "Bonjour, je vous préviens : nous arrivons en retard au restaurant." },
    { role: "A", text: "Merci de nous prévenir. Que se passe-t-il ?" },
    { role: "B", text: "Le bus est plein." },
    { role: "A", text: "D'accord, ce n'est pas grave." },
    { role: "B", text: "Gardez la table encore quinze minutes." },
    { role: "A", text: "Très bien, nous vous attendons." },
    { role: "B", text: "Merci pour votre compréhension." },
    { role: "A", text: "À tout à l'heure." },
    { role: "B", text: "À tout à l'heure." },
  ],
},
{
  id: "e4-2-po-17",
  title: "Faire une réclamation polie",
  context: "Vous faites une réclamation : mon plat est froid.",
  roleA: { title: "Le serveur", vous: "le serveur / la serveuse" },
  roleB: { title: "Vous", vous: "le client / la cliente" },
  lines: [
    { role: "A", text: "Bonjour, comment puis-je vous aider ?" },
    { role: "B", text: "Bonjour, je voudrais signaler un problème : mon plat est froid." },
    { role: "A", text: "Je suis désolé pour cela." },
    { role: "B", text: "Je ne peux pas le manger comme ça." },
    { role: "A", text: "Je comprends. Quelle solution souhaitez-vous ?" },
    { role: "B", text: "Pouvez-vous le réchauffer ou le remplacer ?" },
    { role: "A", text: "D'accord, je vais transmettre votre demande." },
    { role: "B", text: "Merci. J'aimerais être informé rapidement." },
    { role: "A", text: "Je vous réponds dès que possible." },
    { role: "B", text: "Très bien, merci." },
  ],
},
{
  id: "e4-2-po-18",
  title: "Demander une aide urgente",
  context: "Vous devez demander une aide urgente : trouver une table maintenant.",
  roleA: { title: "Le serveur", vous: "le serveur / la serveuse" },
  roleB: { title: "Vous", vous: "le client / la cliente" },
  lines: [
    { role: "A", text: "Bonjour, c'est urgent ?" },
    { role: "B", text: "Oui, j'ai besoin d'aide pour trouver une table maintenant." },
    { role: "A", text: "Il reste deux places au comptoir." },
    { role: "B", text: "D'accord, je fais ça tout de suite." },
    { role: "A", text: "Le service finit à 21 heures." },
    { role: "B", text: "Merci. Est-ce que je dois rappeler ?" },
    { role: "A", text: "Non, venez directement si besoin." },
    { role: "B", text: "Très bien, je pars maintenant." },
    { role: "A", text: "Bon courage." },
    { role: "B", text: "Merci beaucoup." },
  ],
},
{
  id: "e4-2-po-19",
  title: "Comparer deux possibilités",
  context: "Vous devez comparer deux possibilités : le menu du jour et la carte.",
  roleA: { title: "Le serveur", vous: "le serveur / la serveuse" },
  roleB: { title: "Vous", vous: "le client / la cliente" },
  lines: [
    { role: "A", text: "Vous hésitez entre deux possibilités ?" },
    { role: "B", text: "Oui, je compare le menu du jour et la carte." },
    { role: "A", text: "Le menu est moins cher." },
    { role: "B", text: "Et l'autre possibilité ?" },
    { role: "A", text: "La carte offre plus de choix." },
    { role: "B", text: "Je vois. Je cherche surtout quelque chose de pratique." },
    { role: "A", text: "Dans ce cas, la première option est peut-être meilleure." },
    { role: "B", text: "D'accord, je vais choisir celle-là." },
    { role: "A", text: "Très bien, je vous prépare ça." },
    { role: "B", text: "Merci pour vos conseils." },
  ],
},
{
  id: "e4-2-po-20",
  title: "Remercier pour une aide",
  context: "Vous remerciez pour une aide : votre accueil au restaurant.",
  roleA: { title: "Le serveur", vous: "le serveur / la serveuse" },
  roleB: { title: "Vous", vous: "le client / la cliente" },
  lines: [
    { role: "A", text: "Bonjour, vous vouliez me parler ?" },
    { role: "B", text: "Oui, je voulais vous remercier pour votre accueil au restaurant." },
    { role: "A", text: "C'est gentil, merci." },
    { role: "B", text: "Le service était très agréable." },
    { role: "A", text: "Je suis content que cela vous ait aidé." },
    { role: "B", text: "Nous reviendrons bientôt." },
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

export const E4_2_PE: ExpressPePrompt[] = [
  {
    id: "e4-2-pe-1",
    title: "Menu pour collègues",
    situation: "",
    instruction: "Vous organisez un repas avec vos collègues. Il y a des végétariens et vous proposez un menu.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e4-2-pe-2",
    title: "SMS restaurant",
    situation: "",
    instruction: "Vous invitez un ami végétarien à dîner au restaurant Aux bons Amis. Écrivez-lui un SMS avec l'heure et une proposition de plat.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e4-2-pe-3",
    title: "Réservation simple",
    situation: "",
    instruction: "Vous voulez réserver une table pour quatre personnes. Écrivez un message au restaurant avec la date, l'heure et une demande spéciale.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e4-2-pe-4",
    title: "Avis sur un restaurant",
    situation: "",
    instruction: "Vous avez dine dans un nouveau restaurant. Écrivez un court avis pour parler du lieu, du service, du prix et du plat préfère.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e4-2-pe-5",
    title: "Déjeuner rapide",
    situation: "",
    instruction: "Invitez un collègue à un déjeuner rapide. Proposez un restaurant, un horaire et un plat simple.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e4-2-pe-6",
    title: "Menu d'anniversaire",
    situation: "",
    instruction: "Vous préparez un repas d'anniversaire au restaurant. Écrivez un message pour proposer une entrée, un plat et un dessert.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e4-2-pe-7",
    title: "Commande à emporter",
    situation: "",
    instruction: "Vous commandez un repas à emporter. Écrivez un message avec les plats, les boissons, l'heure et le nom pour la commande.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e4-2-pe-8",
    title: "Allergie alimentaire",
    situation: "",
    instruction: "Vous allez au restaurant avec une allergie. Écrivez un message pour expliquer ce que vous ne pouvez pas manger et demander conseil.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e4-2-pe-9",
    title: "Restaurant en famille",
    situation: "",
    instruction: "Proposez un restaurant pour un repas en famille. Expliquez pourquoi il est pratique pour les enfants et pour les adultes.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e4-2-pe-10",
    title: "Invitation au dîner",
    situation: "",
    instruction: "Invitez un ami à dîner au restaurant. Donnez le nom du restaurant, l'adresse, l'heure et une phrase pour expliquer le choix.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e4-2-pe-11",
    title: "Choix du dessert",
    situation: "",
    instruction: "Vous hesitez entre deux desserts au restaurant. Écrivez un message à un ami pour décrire les desserts et demander son avis.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e4-2-pe-12",
    title: "Menu végétarien",
    situation: "",
    instruction: "Écrivez un petit texte pour présenter un menu végétarien simple. Décrivez les plats et expliquez pourquoi ils sont bons pour tous.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e4-2-pe-13",
    title: "Restaurant trop cher",
    situation: "",
    instruction: "Un ami propose un restaurant trop cher. Écrivez une réponse polie pour proposer un autre restaurant plus simple.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e4-2-pe-14",
    title: "Table en terrasse",
    situation: "",
    instruction: "Vous souhaitez manger en terrasse. Écrivez un message au restaurant pour demander une table dehors et donner le nombre de personnes.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e4-2-pe-15",
    title: "Repas de classe",
    situation: "",
    instruction: "Votre classe veut manger ensemble après le cours. Écrivez un message pour proposer un restaurant, une heure et une organisation simple.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e4-2-pe-16",
    title: "Plat du jour",
    situation: "",
    instruction: "Vous recommandez le plat du jour à un ami. Décrivez le plat, le prix et la raison pour laquelle vous le conseillez.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e4-2-pe-17",
    title: "Service lent",
    situation: "",
    instruction: "Vous avez attendu longtemps au restaurant. Écrivez un message poli pour expliquer le problème et demander une solution.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e4-2-pe-18",
    title: "Menu enfant",
    situation: "",
    instruction: "Vous allez au restaurant avec des enfants. Écrivez un message pour demander s'il y a un menu enfant et des chaises adaptees.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e4-2-pe-19",
    title: "Dîner avant cinéma",
    situation: "",
    instruction: "Proposez à un ami de dîner avant le cinéma. Donnez le restaurant, l'heure et un plat que vous voulez essayer.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e4-2-pe-20",
    title: "Repas international",
    situation: "",
    instruction: "Vous organisez un repas dans un restaurant international. Écrivez un message pour présenter le theme et demander les préférences alimentaires.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },

];
