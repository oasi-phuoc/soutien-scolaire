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

/* ── Compréhension écrite — E2.1 Décrire son logement ── */

const CE_TEXT_1 = `SMS à une amie

Salut Emma !
Mon logement a trois pièces. Il est au deuxième étage à Genève.
Le loyer est de 1200 francs par mois.
Il y a un balcon avec vue sur le lac.
Mon voisin du dessus s'appelle Marc. Il est très sympa.
En cas de perte d'objet, passez à l'accueil.
Le service client répond aussi par téléphone.
Merci de lire mon message.`;

const CE_POOL_1 = buildExpressPool("e2-1-1", [
  q({
    id: "ce-q1",
    textQ: "Combien de pièces a le logement ?",
    text: ["trois", "Une seule", "Dix"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Mon logement a _________ pièces.",
    fill: "trois",
    vfQ: "Le logement a trois pièces.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "À quel étage est le logement ?",
    text: ["Au deuxième étage", "Au sous-sol", "Au 20e étage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il est au _________ étage.",
    fill: "deuxième",
    vfQ: "C'est au deuxième étage.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Dans quelle ville ?",
    text: ["À Genève", "À Paris", "À Berlin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "à _________.",
    fill: "Genève",
    vfQ: "C'est à Genève.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien coûte le loyer ?",
    text: ["1200 francs", "100 francs", "5000 francs"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le loyer est de _________ francs.",
    fill: "1200",
    vfQ: "Le loyer est 1200 francs.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle particularité du logement ?",
    text: ["Un balcon avec vue sur le lac", "Une piscine olympique", "Un ascenseur secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il y a _________.",
    fill: "lac",
    vfQ: "Il y a un balcon avec vue sur le lac.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Comment s'appelle le voisin ?",
    text: ["Marc", "Pierre", "Jean"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Mon voisin s'appelle _________.",
    fill: "Marc",
    vfQ: "Le voisin s'appelle Marc.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Quelle information supplémentaire est donnée ?",
    text: ["Il est très sympa", "Rien", "Un prix"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ .",
    fill: "Il",
    vfQ: "Info : Il est très sympa..",
    vfC: 0,
  }),
]);
const CE_TEXT_2 = `E-mail au propriétaire

Bonjour Monsieur,
Mon logement a deux pièces. Il est au premier étage à Lausanne.
Le loyer est de 950 francs par mois.
Il y a une cuisine équipée.
Mon voisin du dessus s'appelle Sophie. Elle habite depuis deux ans.
Dis-moi si tu as besoin d'autre chose.
On peut aussi en parler demain matin.
J'espère que tout se passe bien de ton côté.
Merci de lire mon message.`;

const CE_POOL_2 = buildExpressPool("e2-1-2", [
  q({
    id: "ce-q1",
    textQ: "Combien de pièces a le logement ?",
    text: ["deux", "Une seule", "Dix"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Mon logement a _________ pièces.",
    fill: "deux",
    vfQ: "Le logement a deux pièces.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "À quel étage est le logement ?",
    text: ["Au premier étage", "Au sous-sol", "Au 20e étage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il est au _________ étage.",
    fill: "premier",
    vfQ: "C'est au premier étage.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Dans quelle ville ?",
    text: ["À Lausanne", "À Paris", "À Berlin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "à _________.",
    fill: "Lausanne",
    vfQ: "C'est à Lausanne.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien coûte le loyer ?",
    text: ["950 francs", "100 francs", "5000 francs"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le loyer est de _________ francs.",
    fill: "950",
    vfQ: "Le loyer est 950 francs.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle particularité du logement ?",
    text: ["Une cuisine équipée", "Une piscine olympique", "Un ascenseur secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il y a _________.",
    fill: "équipée",
    vfQ: "Il y a une cuisine équipée.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Comment s'appelle le voisin ?",
    text: ["Sophie", "Pierre", "Jean"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Mon voisin s'appelle _________.",
    fill: "Sophie",
    vfQ: "Le voisin s'appelle Sophie.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Quelle information supplémentaire est donnée ?",
    text: ["Elle habite depuis deux ans", "Rien", "Un prix"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ .",
    fill: "Elle",
    vfQ: "Info : Elle habite depuis deux ans..",
    vfC: 0,
  }),
]);
const CE_TEXT_3 = `Petite annonce — sous-location

À LOUER
Mon logement a quatre pièces. Il est au troisième étage à Fribourg.
Le loyer est de 1400 francs par mois.
Il y a deux chambres et un bureau.
Mon voisin du dessus s'appelle Paul. L'appartement est lumineux.
Le trajet est simple, ne t'inquiète pas.
Passe le bonjour à tout le monde.
À très bientôt, prends soin de toi.
Merci de lire mon message.`;

const CE_POOL_3 = buildExpressPool("e2-1-3", [
  q({
    id: "ce-q1",
    textQ: "Combien de pièces a le logement ?",
    text: ["quatre", "Une seule", "Dix"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Mon logement a _________ pièces.",
    fill: "quatre",
    vfQ: "Le logement a quatre pièces.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "À quel étage est le logement ?",
    text: ["Au troisième étage", "Au sous-sol", "Au 20e étage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il est au _________ étage.",
    fill: "troisième",
    vfQ: "C'est au troisième étage.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Dans quelle ville ?",
    text: ["À Fribourg", "À Paris", "À Berlin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "à _________.",
    fill: "Fribourg",
    vfQ: "C'est à Fribourg.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien coûte le loyer ?",
    text: ["1400 francs", "100 francs", "5000 francs"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le loyer est de _________ francs.",
    fill: "1400",
    vfQ: "Le loyer est 1400 francs.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle particularité du logement ?",
    text: ["Deux chambres et un bureau", "Une piscine olympique", "Un ascenseur secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il y a _________.",
    fill: "bureau",
    vfQ: "Il y a deux chambres et un bureau.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Comment s'appelle le voisin ?",
    text: ["Paul", "Pierre", "Jean"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Mon voisin s'appelle _________.",
    fill: "Paul",
    vfQ: "Le voisin s'appelle Paul.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Quelle information supplémentaire est donnée ?",
    text: ["L'appartement est lumineux", "Rien", "Un prix"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ .",
    fill: "L'appartement",
    vfQ: "Info : L'appartement est lumineux..",
    vfC: 0,
  }),
]);
const CE_TEXT_4 = `Message groupe immeuble

Chers voisins,
Mon logement a trois pièces. Il est au cinquième étage à Neuchâtel.
Le loyer est de 1100 francs par mois.
Il y a un ascenseur et une cave.
Mon voisin du dessus s'appelle Anna. La cave est au sous-sol.
Tout est organisé pour que ce soit simple.
À bientôt, et merci de votre lecture.
Je reste près de mon téléphone aujourd'hui.
Merci de lire mon message.`;

const CE_POOL_4 = buildExpressPool("e2-1-4", [
  q({
    id: "ce-q1",
    textQ: "Combien de pièces a le logement ?",
    text: ["trois", "Une seule", "Dix"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Mon logement a _________ pièces.",
    fill: "trois",
    vfQ: "Le logement a trois pièces.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "À quel étage est le logement ?",
    text: ["Au cinquième étage", "Au sous-sol", "Au 20e étage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il est au _________ étage.",
    fill: "cinquième",
    vfQ: "C'est au cinquième étage.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Dans quelle ville ?",
    text: ["À Neuchâtel", "À Paris", "À Berlin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "à _________.",
    fill: "Neuchâtel",
    vfQ: "C'est à Neuchâtel.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien coûte le loyer ?",
    text: ["1100 francs", "100 francs", "5000 francs"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le loyer est de _________ francs.",
    fill: "1100",
    vfQ: "Le loyer est 1100 francs.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle particularité du logement ?",
    text: ["Un ascenseur et une cave", "Une piscine olympique", "Un ascenseur secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il y a _________.",
    fill: "cave",
    vfQ: "Il y a un ascenseur et une cave.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Comment s'appelle le voisin ?",
    text: ["Anna", "Pierre", "Jean"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Mon voisin s'appelle _________.",
    fill: "Anna",
    vfQ: "Le voisin s'appelle Anna.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Quelle information supplémentaire est donnée ?",
    text: ["La cave est au sous-sol", "Rien", "Un prix"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ .",
    fill: "La",
    vfQ: "Info : La cave est au sous-sol..",
    vfC: 0,
  }),
]);
const CE_TEXT_5 = `Carte postale

Coucou !
Mon logement a deux pièces. Il est au quatrième étage à Montreux.
Le loyer est de 1300 francs par mois.
Il y a une grande terrasse.
Mon voisin du dessus s'appelle Lucas. La vue est magnifique.
Vous pouvez répondre directement à ce message.
Merci de confirmer la bonne réception.
Merci de lire mon message.`;

const CE_POOL_5 = buildExpressPool("e2-1-5", [
  q({
    id: "ce-q1",
    textQ: "Combien de pièces a le logement ?",
    text: ["deux", "Une seule", "Dix"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Mon logement a _________ pièces.",
    fill: "deux",
    vfQ: "Le logement a deux pièces.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "À quel étage est le logement ?",
    text: ["Au quatrième étage", "Au sous-sol", "Au 20e étage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il est au _________ étage.",
    fill: "quatrième",
    vfQ: "C'est au quatrième étage.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Dans quelle ville ?",
    text: ["À Montreux", "À Paris", "À Berlin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "à _________.",
    fill: "Montreux",
    vfQ: "C'est à Montreux.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien coûte le loyer ?",
    text: ["1300 francs", "100 francs", "5000 francs"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le loyer est de _________ francs.",
    fill: "1300",
    vfQ: "Le loyer est 1300 francs.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle particularité du logement ?",
    text: ["Une grande terrasse", "Une piscine olympique", "Un ascenseur secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il y a _________.",
    fill: "terrasse",
    vfQ: "Il y a une grande terrasse.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Comment s'appelle le voisin ?",
    text: ["Lucas", "Pierre", "Jean"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Mon voisin s'appelle _________.",
    fill: "Lucas",
    vfQ: "Le voisin s'appelle Lucas.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Quelle information supplémentaire est donnée ?",
    text: ["La vue est magnifique", "Rien", "Un prix"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ .",
    fill: "La",
    vfQ: "Info : La vue est magnifique..",
    vfC: 0,
  }),
]);
const CE_TEXT_6 = `Note sur la porte

Chers colocataires,
Mon logement a cinq pièces. Il est au rez-de-chaussée étage à Yverdon.
Le loyer est de 1600 francs par mois.
Il y a un jardin partagé.
Mon voisin du dessus s'appelle Karim. Le jardin est calme.
Respectez la file d'attente, s'il vous plaît.
Les personnes à mobilité réduite sont prioritaires.
En cas de perte d'objet, passez à l'accueil.
Merci de lire mon message.`;

const CE_POOL_6 = buildExpressPool("e2-1-6", [
  q({
    id: "ce-q1",
    textQ: "Combien de pièces a le logement ?",
    text: ["cinq", "Une seule", "Dix"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Mon logement a _________ pièces.",
    fill: "cinq",
    vfQ: "Le logement a cinq pièces.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "À quel étage est le logement ?",
    text: ["Au rez-de-chaussée étage", "Au sous-sol", "Au 20e étage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il est au _________ étage.",
    fill: "rez-de-chaussée",
    vfQ: "C'est au rez-de-chaussée étage.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Dans quelle ville ?",
    text: ["À Yverdon", "À Paris", "À Berlin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "à _________.",
    fill: "Yverdon",
    vfQ: "C'est à Yverdon.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien coûte le loyer ?",
    text: ["1600 francs", "100 francs", "5000 francs"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le loyer est de _________ francs.",
    fill: "1600",
    vfQ: "Le loyer est 1600 francs.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle particularité du logement ?",
    text: ["Un jardin partagé", "Une piscine olympique", "Un ascenseur secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il y a _________.",
    fill: "partagé",
    vfQ: "Il y a un jardin partagé.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Comment s'appelle le voisin ?",
    text: ["Karim", "Pierre", "Jean"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Mon voisin s'appelle _________.",
    fill: "Karim",
    vfQ: "Le voisin s'appelle Karim.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Quelle information supplémentaire est donnée ?",
    text: ["Le jardin est calme", "Rien", "Un prix"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ .",
    fill: "Le",
    vfQ: "Info : Le jardin est calme..",
    vfC: 0,
  }),
]);
const CE_TEXT_7 = `Forum locataires

Bonjour,
Mon logement a trois pièces. Il est au sixième étage à Bienne.
Le loyer est de 980 francs par mois.
Il y a un parking souterrain.
Mon voisin du dessus s'appelle Julie. La place est numéro 12.
Les personnes à mobilité réduite sont prioritaires.
En cas de perte d'objet, passez à l'accueil.
Le service client répond aussi par téléphone.
Merci de lire mon message.`;

const CE_POOL_7 = buildExpressPool("e2-1-7", [
  q({
    id: "ce-q1",
    textQ: "Combien de pièces a le logement ?",
    text: ["trois", "Une seule", "Dix"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Mon logement a _________ pièces.",
    fill: "trois",
    vfQ: "Le logement a trois pièces.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "À quel étage est le logement ?",
    text: ["Au sixième étage", "Au sous-sol", "Au 20e étage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il est au _________ étage.",
    fill: "sixième",
    vfQ: "C'est au sixième étage.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Dans quelle ville ?",
    text: ["À Bienne", "À Paris", "À Berlin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "à _________.",
    fill: "Bienne",
    vfQ: "C'est à Bienne.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien coûte le loyer ?",
    text: ["980 francs", "100 francs", "5000 francs"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le loyer est de _________ francs.",
    fill: "980",
    vfQ: "Le loyer est 980 francs.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle particularité du logement ?",
    text: ["Un parking souterrain", "Une piscine olympique", "Un ascenseur secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il y a _________.",
    fill: "souterrain",
    vfQ: "Il y a un parking souterrain.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Comment s'appelle le voisin ?",
    text: ["Julie", "Pierre", "Jean"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Mon voisin s'appelle _________.",
    fill: "Julie",
    vfQ: "Le voisin s'appelle Julie.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Quelle information supplémentaire est donnée ?",
    text: ["La place est numéro 12", "Rien", "Un prix"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ .",
    fill: "La",
    vfQ: "Info : La place est numéro 12..",
    vfC: 0,
  }),
]);
const CE_TEXT_8 = `WhatsApp — visite

Salut !
Mon logement a deux pièces. Il est au septième étage à Sion.
Le loyer est de 1050 francs par mois.
Il y a un petit bureau.
Mon voisin du dessus s'appelle Hugo. L'appartement est meublé.
Nous restons disponibles pour vous aider.
Les horaires habituels restent les mêmes.
Merci de lire mon message.`;

const CE_POOL_8 = buildExpressPool("e2-1-8", [
  q({
    id: "ce-q1",
    textQ: "Combien de pièces a le logement ?",
    text: ["deux", "Une seule", "Dix"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Mon logement a _________ pièces.",
    fill: "deux",
    vfQ: "Le logement a deux pièces.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "À quel étage est le logement ?",
    text: ["Au septième étage", "Au sous-sol", "Au 20e étage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il est au _________ étage.",
    fill: "septième",
    vfQ: "C'est au septième étage.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Dans quelle ville ?",
    text: ["À Sion", "À Paris", "À Berlin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "à _________.",
    fill: "Sion",
    vfQ: "C'est à Sion.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien coûte le loyer ?",
    text: ["1050 francs", "100 francs", "5000 francs"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le loyer est de _________ francs.",
    fill: "1050",
    vfQ: "Le loyer est 1050 francs.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle particularité du logement ?",
    text: ["Un petit bureau", "Une piscine olympique", "Un ascenseur secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il y a _________.",
    fill: "bureau",
    vfQ: "Il y a un petit bureau.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Comment s'appelle le voisin ?",
    text: ["Hugo", "Pierre", "Jean"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Mon voisin s'appelle _________.",
    fill: "Hugo",
    vfQ: "Le voisin s'appelle Hugo.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Quelle information supplémentaire est donnée ?",
    text: ["L'appartement est meublé", "Rien", "Un prix"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ .",
    fill: "L'appartement",
    vfQ: "Info : L'appartement est meublé..",
    vfC: 0,
  }),
]);
const CE_TEXT_9 = `Réponse annonce

Bonjour,
Mon logement a quatre pièces. Il est au huitième étage à Nyon.
Le loyer est de 1500 francs par mois.
Il y a deux salles de bain.
Mon voisin du dessus s'appelle Emma. Le chauffage est inclus.
Les horaires habituels restent les mêmes.
Merci de votre attention et de votre patience.
Vous pouvez venir accompagné(e) si vous le souhaitez.
Merci de lire mon message.`;

const CE_POOL_9 = buildExpressPool("e2-1-9", [
  q({
    id: "ce-q1",
    textQ: "Combien de pièces a le logement ?",
    text: ["quatre", "Une seule", "Dix"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Mon logement a _________ pièces.",
    fill: "quatre",
    vfQ: "Le logement a quatre pièces.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "À quel étage est le logement ?",
    text: ["Au huitième étage", "Au sous-sol", "Au 20e étage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il est au _________ étage.",
    fill: "huitième",
    vfQ: "C'est au huitième étage.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Dans quelle ville ?",
    text: ["À Nyon", "À Paris", "À Berlin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "à _________.",
    fill: "Nyon",
    vfQ: "C'est à Nyon.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien coûte le loyer ?",
    text: ["1500 francs", "100 francs", "5000 francs"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le loyer est de _________ francs.",
    fill: "1500",
    vfQ: "Le loyer est 1500 francs.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle particularité du logement ?",
    text: ["Deux salles de bain", "Une piscine olympique", "Un ascenseur secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il y a _________.",
    fill: "bain",
    vfQ: "Il y a deux salles de bain.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Comment s'appelle le voisin ?",
    text: ["Emma", "Pierre", "Jean"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Mon voisin s'appelle _________.",
    fill: "Emma",
    vfQ: "Le voisin s'appelle Emma.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Quelle information supplémentaire est donnée ?",
    text: ["Le chauffage est inclus", "Rien", "Un prix"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ .",
    fill: "Le",
    vfQ: "Info : Le chauffage est inclus..",
    vfC: 0,
  }),
]);
const CE_TEXT_10 = `Description pour assurance

Madame, Monsieur,
Mon logement a trois pièces. Il est au neuvième étage à Vevey.
Le loyer est de 1250 francs par mois.
Il y a un parquet neuf.
Mon voisin du dessus s'appelle Tom. Les fenêtres sont doubles.
Les horaires habituels restent les mêmes.
Merci de votre attention et de votre patience.
Vous pouvez venir accompagné(e) si vous le souhaitez.
Merci de lire mon message.`;

const CE_POOL_10 = buildExpressPool("e2-1-10", [
  q({
    id: "ce-q1",
    textQ: "Combien de pièces a le logement ?",
    text: ["trois", "Une seule", "Dix"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Mon logement a _________ pièces.",
    fill: "trois",
    vfQ: "Le logement a trois pièces.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "À quel étage est le logement ?",
    text: ["Au neuvième étage", "Au sous-sol", "Au 20e étage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il est au _________ étage.",
    fill: "neuvième",
    vfQ: "C'est au neuvième étage.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Dans quelle ville ?",
    text: ["À Vevey", "À Paris", "À Berlin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "à _________.",
    fill: "Vevey",
    vfQ: "C'est à Vevey.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien coûte le loyer ?",
    text: ["1250 francs", "100 francs", "5000 francs"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le loyer est de _________ francs.",
    fill: "1250",
    vfQ: "Le loyer est 1250 francs.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle particularité du logement ?",
    text: ["Un parquet neuf", "Une piscine olympique", "Un ascenseur secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il y a _________.",
    fill: "neuf",
    vfQ: "Il y a un parquet neuf.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Comment s'appelle le voisin ?",
    text: ["Tom", "Pierre", "Jean"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Mon voisin s'appelle _________.",
    fill: "Tom",
    vfQ: "Le voisin s'appelle Tom.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Quelle information supplémentaire est donnée ?",
    text: ["Les fenêtres sont doubles", "Rien", "Un prix"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ .",
    fill: "Les",
    vfQ: "Info : Les fenêtres sont doubles..",
    vfC: 0,
  }),
]);
const CE_TEXT_11 = `Message au colocataire

Salut !
Mon logement a quatre pièces. Il est au dixième étage à Delémont.
Le loyer est de 900 francs par mois.
Il y a un grand salon.
Mon voisin du dessus s'appelle Nina. Le loyer est partagé.
Les informations importantes sont déjà indiquées plus haut.
En cas de question, vous pouvez écrire ou téléphoner.
Merci de lire mon message.`;

const CE_POOL_11 = buildExpressPool("e2-1-11", [
  q({
    id: "ce-q1",
    textQ: "Combien de pièces a le logement ?",
    text: ["quatre", "Une seule", "Dix"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Mon logement a _________ pièces.",
    fill: "quatre",
    vfQ: "Le logement a quatre pièces.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "À quel étage est le logement ?",
    text: ["Au dixième étage", "Au sous-sol", "Au 20e étage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il est au _________ étage.",
    fill: "dixième",
    vfQ: "C'est au dixième étage.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Dans quelle ville ?",
    text: ["À Delémont", "À Paris", "À Berlin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "à _________.",
    fill: "Delémont",
    vfQ: "C'est à Delémont.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien coûte le loyer ?",
    text: ["900 francs", "100 francs", "5000 francs"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le loyer est de _________ francs.",
    fill: "900",
    vfQ: "Le loyer est 900 francs.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle particularité du logement ?",
    text: ["Un grand salon", "Une piscine olympique", "Un ascenseur secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il y a _________.",
    fill: "salon",
    vfQ: "Il y a un grand salon.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Comment s'appelle le voisin ?",
    text: ["Nina", "Pierre", "Jean"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Mon voisin s'appelle _________.",
    fill: "Nina",
    vfQ: "Le voisin s'appelle Nina.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Quelle information supplémentaire est donnée ?",
    text: ["Le loyer est partagé", "Rien", "Un prix"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ .",
    fill: "Le",
    vfQ: "Info : Le loyer est partagé..",
    vfC: 0,
  }),
]);
const CE_TEXT_12 = `Annonce intranet

Bonjour,
Mon logement a deux pièces. Il est au onzième étage à Payerne.
Le loyer est de 850 francs par mois.
Il y a une cuisine ouverte.
Mon voisin du dessus s'appelle David. Proche des transports.
Je reste près de mon téléphone aujourd'hui.
Dis-moi si tu as besoin d'autre chose.
On peut aussi en parler demain matin.
Merci de lire mon message.`;

const CE_POOL_12 = buildExpressPool("e2-1-12", [
  q({
    id: "ce-q1",
    textQ: "Combien de pièces a le logement ?",
    text: ["deux", "Une seule", "Dix"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Mon logement a _________ pièces.",
    fill: "deux",
    vfQ: "Le logement a deux pièces.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "À quel étage est le logement ?",
    text: ["Au onzième étage", "Au sous-sol", "Au 20e étage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il est au _________ étage.",
    fill: "onzième",
    vfQ: "C'est au onzième étage.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Dans quelle ville ?",
    text: ["À Payerne", "À Paris", "À Berlin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "à _________.",
    fill: "Payerne",
    vfQ: "C'est à Payerne.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien coûte le loyer ?",
    text: ["850 francs", "100 francs", "5000 francs"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le loyer est de _________ francs.",
    fill: "850",
    vfQ: "Le loyer est 850 francs.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle particularité du logement ?",
    text: ["Une cuisine ouverte", "Une piscine olympique", "Un ascenseur secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il y a _________.",
    fill: "ouverte",
    vfQ: "Il y a une cuisine ouverte.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Comment s'appelle le voisin ?",
    text: ["David", "Pierre", "Jean"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Mon voisin s'appelle _________.",
    fill: "David",
    vfQ: "Le voisin s'appelle David.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Quelle information supplémentaire est donnée ?",
    text: ["Proche des transports", "Rien", "Un prix"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ .",
    fill: "Proche",
    vfQ: "Info : Proche des transports..",
    vfC: 0,
  }),
]);
const CE_TEXT_13 = `SMS propriétaire

Bonjour,
Mon logement a trois pièces. Il est au douzième étage à Aigle.
Le loyer est de 1000 francs par mois.
Il y a un cellier.
Mon voisin du dessus s'appelle Sara. Le cellier est grand.
Je t'envoie aussi ce détail pour être clair.
Le trajet est simple, ne t'inquiète pas.
Passe le bonjour à tout le monde.
Merci de lire mon message.`;

const CE_POOL_13 = buildExpressPool("e2-1-13", [
  q({
    id: "ce-q1",
    textQ: "Combien de pièces a le logement ?",
    text: ["trois", "Une seule", "Dix"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Mon logement a _________ pièces.",
    fill: "trois",
    vfQ: "Le logement a trois pièces.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "À quel étage est le logement ?",
    text: ["Au douzième étage", "Au sous-sol", "Au 20e étage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il est au _________ étage.",
    fill: "douzième",
    vfQ: "C'est au douzième étage.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Dans quelle ville ?",
    text: ["À Aigle", "À Paris", "À Berlin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "à _________.",
    fill: "Aigle",
    vfQ: "C'est à Aigle.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien coûte le loyer ?",
    text: ["1000 francs", "100 francs", "5000 francs"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le loyer est de _________ francs.",
    fill: "1000",
    vfQ: "Le loyer est 1000 francs.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle particularité du logement ?",
    text: ["Un cellier", "Une piscine olympique", "Un ascenseur secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il y a _________.",
    fill: "cellier",
    vfQ: "Il y a un cellier.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Comment s'appelle le voisin ?",
    text: ["Sara", "Pierre", "Jean"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Mon voisin s'appelle _________.",
    fill: "Sara",
    vfQ: "Le voisin s'appelle Sara.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Quelle information supplémentaire est donnée ?",
    text: ["Le cellier est grand", "Rien", "Un prix"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ .",
    fill: "Le",
    vfQ: "Info : Le cellier est grand..",
    vfC: 0,
  }),
]);
const CE_TEXT_14 = `Lettre recommandation

Madame, Monsieur,
Mon logement a cinq pièces. Il est au treizième étage à Morges.
Le loyer est de 1700 francs par mois.
Il y a un jardin privatif.
Mon voisin du dessus s'appelle Antoine. Quartier calme.
Le service client répond aussi par téléphone.
Merci de lire ce message jusqu'à la fin.
Les informations importantes sont déjà indiquées plus haut.
Merci de lire mon message.`;

const CE_POOL_14 = buildExpressPool("e2-1-14", [
  q({
    id: "ce-q1",
    textQ: "Combien de pièces a le logement ?",
    text: ["cinq", "Une seule", "Dix"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Mon logement a _________ pièces.",
    fill: "cinq",
    vfQ: "Le logement a cinq pièces.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "À quel étage est le logement ?",
    text: ["Au treizième étage", "Au sous-sol", "Au 20e étage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il est au _________ étage.",
    fill: "treizième",
    vfQ: "C'est au treizième étage.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Dans quelle ville ?",
    text: ["À Morges", "À Paris", "À Berlin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "à _________.",
    fill: "Morges",
    vfQ: "C'est à Morges.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien coûte le loyer ?",
    text: ["1700 francs", "100 francs", "5000 francs"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le loyer est de _________ francs.",
    fill: "1700",
    vfQ: "Le loyer est 1700 francs.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle particularité du logement ?",
    text: ["Un jardin privatif", "Une piscine olympique", "Un ascenseur secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il y a _________.",
    fill: "privatif",
    vfQ: "Il y a un jardin privatif.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Comment s'appelle le voisin ?",
    text: ["Antoine", "Pierre", "Jean"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Mon voisin s'appelle _________.",
    fill: "Antoine",
    vfQ: "Le voisin s'appelle Antoine.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Quelle information supplémentaire est donnée ?",
    text: ["Quartier calme", "Rien", "Un prix"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ .",
    fill: "Quartier",
    vfQ: "Info : Quartier calme..",
    vfC: 0,
  }),
]);
const CE_TEXT_15 = `Message covoiturage coloc

Hey !
Mon logement a trois pièces. Il est au quatorzième étage à Gland.
Le loyer est de 1150 francs par mois.
Il y a un balcon fermé.
Mon voisin du dessus s'appelle Léa. Proche de la gare.
Gardez ce texte pour vous en souvenir.
Nous restons disponibles pour vous aider.
Merci de lire mon message.`;

const CE_POOL_15 = buildExpressPool("e2-1-15", [
  q({
    id: "ce-q1",
    textQ: "Combien de pièces a le logement ?",
    text: ["trois", "Une seule", "Dix"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Mon logement a _________ pièces.",
    fill: "trois",
    vfQ: "Le logement a trois pièces.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "À quel étage est le logement ?",
    text: ["Au quatorzième étage", "Au sous-sol", "Au 20e étage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il est au _________ étage.",
    fill: "quatorzième",
    vfQ: "C'est au quatorzième étage.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Dans quelle ville ?",
    text: ["À Gland", "À Paris", "À Berlin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "à _________.",
    fill: "Gland",
    vfQ: "C'est à Gland.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien coûte le loyer ?",
    text: ["1150 francs", "100 francs", "5000 francs"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le loyer est de _________ francs.",
    fill: "1150",
    vfQ: "Le loyer est 1150 francs.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle particularité du logement ?",
    text: ["Un balcon fermé", "Une piscine olympique", "Un ascenseur secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il y a _________.",
    fill: "fermé",
    vfQ: "Il y a un balcon fermé.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Comment s'appelle le voisin ?",
    text: ["Léa", "Pierre", "Jean"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Mon voisin s'appelle _________.",
    fill: "Léa",
    vfQ: "Le voisin s'appelle Léa.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Quelle information supplémentaire est donnée ?",
    text: ["Proche de la gare", "Rien", "Un prix"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ .",
    fill: "Proche",
    vfQ: "Info : Proche de la gare..",
    vfC: 0,
  }),
]);
const CE_TEXT_16 = `Fiche état des lieux

Appartement n° 8
Mon logement a deux pièces. Il est au quinzième étage à Rolle.
Le loyer est de 1080 francs par mois.
Il y a peinture neuve.
Mon voisin du dessus s'appelle Marc. État impeccable.
Pensez à arriver un peu en avance.
Gardez ce texte pour vous en souvenir.
Nous restons disponibles pour vous aider.
Merci de lire mon message.`;

const CE_POOL_16 = buildExpressPool("e2-1-16", [
  q({
    id: "ce-q1",
    textQ: "Combien de pièces a le logement ?",
    text: ["deux", "Une seule", "Dix"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Mon logement a _________ pièces.",
    fill: "deux",
    vfQ: "Le logement a deux pièces.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "À quel étage est le logement ?",
    text: ["Au quinzième étage", "Au sous-sol", "Au 20e étage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il est au _________ étage.",
    fill: "quinzième",
    vfQ: "C'est au quinzième étage.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Dans quelle ville ?",
    text: ["À Rolle", "À Paris", "À Berlin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "à _________.",
    fill: "Rolle",
    vfQ: "C'est à Rolle.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien coûte le loyer ?",
    text: ["1080 francs", "100 francs", "5000 francs"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le loyer est de _________ francs.",
    fill: "1080",
    vfQ: "Le loyer est 1080 francs.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle particularité du logement ?",
    text: ["Peinture neuve", "Une piscine olympique", "Un ascenseur secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il y a _________.",
    fill: "neuve",
    vfQ: "Il y a peinture neuve.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Comment s'appelle le voisin ?",
    text: ["Marc", "Pierre", "Jean"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Mon voisin s'appelle _________.",
    fill: "Marc",
    vfQ: "Le voisin s'appelle Marc.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Quelle information supplémentaire est donnée ?",
    text: ["État impeccable", "Rien", "Un prix"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ .",
    fill: "État",
    vfQ: "Info : État impeccable..",
    vfC: 0,
  }),
]);
const CE_TEXT_17 = `Blog expatrié

Bonjour !
Mon logement a quatre pièces. Il est au seizième étage à Genève.
Le loyer est de 2000 francs par mois.
Il y a vue sur les Alpes.
Mon voisin du dessus s'appelle Omar. Cher mais magnifique.
Je t'envoie aussi ce détail pour être clair.
Le trajet est simple, ne t'inquiète pas.
Merci de lire mon message.`;

const CE_POOL_17 = buildExpressPool("e2-1-17", [
  q({
    id: "ce-q1",
    textQ: "Combien de pièces a le logement ?",
    text: ["quatre", "Une seule", "Dix"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Mon logement a _________ pièces.",
    fill: "quatre",
    vfQ: "Le logement a quatre pièces.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "À quel étage est le logement ?",
    text: ["Au seizième étage", "Au sous-sol", "Au 20e étage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il est au _________ étage.",
    fill: "seizième",
    vfQ: "C'est au seizième étage.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Dans quelle ville ?",
    text: ["À Genève", "À Paris", "À Berlin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "à _________.",
    fill: "Genève",
    vfQ: "C'est à Genève.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien coûte le loyer ?",
    text: ["2000 francs", "100 francs", "5000 francs"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le loyer est de _________ francs.",
    fill: "2000",
    vfQ: "Le loyer est 2000 francs.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle particularité du logement ?",
    text: ["Vue sur les alpes", "Une piscine olympique", "Un ascenseur secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il y a _________.",
    fill: "Alpes",
    vfQ: "Il y a vue sur les Alpes.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Comment s'appelle le voisin ?",
    text: ["Omar", "Pierre", "Jean"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Mon voisin s'appelle _________.",
    fill: "Omar",
    vfQ: "Le voisin s'appelle Omar.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Quelle information supplémentaire est donnée ?",
    text: ["Cher mais magnifique", "Rien", "Un prix"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ .",
    fill: "Cher",
    vfQ: "Info : Cher mais magnifique..",
    vfC: 0,
  }),
]);
const CE_TEXT_18 = `Réponse questionnaire

Bonjour,
Mon logement a trois pièces. Il est au dix-septième étage à Carouge.
Le loyer est de 1180 francs par mois.
Il y a un parquet ancien.
Mon voisin du dessus s'appelle Clara. Charme ancien.
C'est important pour moi, merci beaucoup.
Nous traitons votre demande rapidement.
Vous pouvez répondre directement à ce message.
Merci de lire mon message.`;

const CE_POOL_18 = buildExpressPool("e2-1-18", [
  q({
    id: "ce-q1",
    textQ: "Combien de pièces a le logement ?",
    text: ["trois", "Une seule", "Dix"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Mon logement a _________ pièces.",
    fill: "trois",
    vfQ: "Le logement a trois pièces.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "À quel étage est le logement ?",
    text: ["Au dix-septième étage", "Au sous-sol", "Au 20e étage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il est au _________ étage.",
    fill: "dix-septième",
    vfQ: "C'est au dix-septième étage.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Dans quelle ville ?",
    text: ["À Carouge", "À Paris", "À Berlin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "à _________.",
    fill: "Carouge",
    vfQ: "C'est à Carouge.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien coûte le loyer ?",
    text: ["1180 francs", "100 francs", "5000 francs"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le loyer est de _________ francs.",
    fill: "1180",
    vfQ: "Le loyer est 1180 francs.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle particularité du logement ?",
    text: ["Un parquet ancien", "Une piscine olympique", "Un ascenseur secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il y a _________.",
    fill: "ancien",
    vfQ: "Il y a un parquet ancien.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Comment s'appelle le voisin ?",
    text: ["Clara", "Pierre", "Jean"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Mon voisin s'appelle _________.",
    fill: "Clara",
    vfQ: "Le voisin s'appelle Clara.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Quelle information supplémentaire est donnée ?",
    text: ["Charme ancien", "Rien", "Un prix"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ .",
    fill: "Charme",
    vfQ: "Info : Charme ancien..",
    vfC: 0,
  }),
]);
const CE_TEXT_19 = `Message gardien

Bonjour,
Mon logement a deux pièces. Il est au dix-huitième étage à Plan-les-Ouates.
Le loyer est de 1020 francs par mois.
Il y a un interphone vidéo.
Mon voisin du dessus s'appelle Victor. Sécurité renforcée.
Le lieu est facile à trouver avec les indications.
Pensez à arriver un peu en avance.
Gardez ce texte pour vous en souvenir.
Merci de lire mon message.`;

const CE_POOL_19 = buildExpressPool("e2-1-19", [
  q({
    id: "ce-q1",
    textQ: "Combien de pièces a le logement ?",
    text: ["deux", "Une seule", "Dix"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Mon logement a _________ pièces.",
    fill: "deux",
    vfQ: "Le logement a deux pièces.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "À quel étage est le logement ?",
    text: ["Au dix-huitième étage", "Au sous-sol", "Au 20e étage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il est au _________ étage.",
    fill: "dix-huitième",
    vfQ: "C'est au dix-huitième étage.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Dans quelle ville ?",
    text: ["À Plan-les-Ouates", "À Paris", "À Berlin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "à _________.",
    fill: "Plan-les-Ouates",
    vfQ: "C'est à Plan-les-Ouates.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien coûte le loyer ?",
    text: ["1020 francs", "100 francs", "5000 francs"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le loyer est de _________ francs.",
    fill: "1020",
    vfQ: "Le loyer est 1020 francs.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle particularité du logement ?",
    text: ["Un interphone vidéo", "Une piscine olympique", "Un ascenseur secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il y a _________.",
    fill: "vidéo",
    vfQ: "Il y a un interphone vidéo.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Comment s'appelle le voisin ?",
    text: ["Victor", "Pierre", "Jean"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Mon voisin s'appelle _________.",
    fill: "Victor",
    vfQ: "Le voisin s'appelle Victor.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Quelle information supplémentaire est donnée ?",
    text: ["Sécurité renforcée", "Rien", "Un prix"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ .",
    fill: "Sécurité",
    vfQ: "Info : Sécurité renforcée..",
    vfC: 0,
  }),
]);
const CE_TEXT_20 = `Annonce Facebook

À vendre visite !
Mon logement a quatre pièces. Il est au dix-neuvième étage à Thônex.
Le loyer est de 1350 francs par mois.
Il y a proche école et parc.
Mon voisin du dessus s'appelle Inès. Idéal pour famille.
Le lieu est facile à trouver avec les indications.
Pensez à arriver un peu en avance.
Merci de lire mon message.`;

const CE_POOL_20 = buildExpressPool("e2-1-20", [
  q({
    id: "ce-q1",
    textQ: "Combien de pièces a le logement ?",
    text: ["quatre", "Une seule", "Dix"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Mon logement a _________ pièces.",
    fill: "quatre",
    vfQ: "Le logement a quatre pièces.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "À quel étage est le logement ?",
    text: ["Au dix-neuvième étage", "Au sous-sol", "Au 20e étage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il est au _________ étage.",
    fill: "dix-neuvième",
    vfQ: "C'est au dix-neuvième étage.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Dans quelle ville ?",
    text: ["À Thônex", "À Paris", "À Berlin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "à _________.",
    fill: "Thônex",
    vfQ: "C'est à Thônex.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien coûte le loyer ?",
    text: ["1350 francs", "100 francs", "5000 francs"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le loyer est de _________ francs.",
    fill: "1350",
    vfQ: "Le loyer est 1350 francs.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle particularité du logement ?",
    text: ["Proche école et parc", "Une piscine olympique", "Un ascenseur secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il y a _________.",
    fill: "parc",
    vfQ: "Il y a proche école et parc.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Comment s'appelle le voisin ?",
    text: ["Inès", "Pierre", "Jean"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Mon voisin s'appelle _________.",
    fill: "Inès",
    vfQ: "Le voisin s'appelle Inès.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Quelle information supplémentaire est donnée ?",
    text: ["Idéal pour famille", "Rien", "Un prix"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ .",
    fill: "Idéal",
    vfQ: "Info : Idéal pour famille..",
    vfC: 0,
  }),
]);

export const E2_1_CE: CommunicationExercise[] = [
  readingPoolExercise({
  id: "e2-1-1",
  readingText: CE_TEXT_1,
  questionPool: CE_POOL_1
}),
  readingPoolExercise({
  id: "e2-1-2",
  readingText: CE_TEXT_2,
  questionPool: CE_POOL_2
}),
  readingPoolExercise({
  id: "e2-1-3",
  readingText: CE_TEXT_3,
  questionPool: CE_POOL_3
}),
  readingPoolExercise({
  id: "e2-1-4",
  readingText: CE_TEXT_4,
  questionPool: CE_POOL_4
}),
  readingPoolExercise({
  id: "e2-1-5",
  readingText: CE_TEXT_5,
  questionPool: CE_POOL_5
}),
  readingPoolExercise({
  id: "e2-1-6",
  readingText: CE_TEXT_6,
  questionPool: CE_POOL_6
}),
  readingPoolExercise({
  id: "e2-1-7",
  readingText: CE_TEXT_7,
  questionPool: CE_POOL_7
}),
  readingPoolExercise({
  id: "e2-1-8",
  readingText: CE_TEXT_8,
  questionPool: CE_POOL_8
}),
  readingPoolExercise({
  id: "e2-1-9",
  readingText: CE_TEXT_9,
  questionPool: CE_POOL_9
}),
  readingPoolExercise({
  id: "e2-1-10",
  readingText: CE_TEXT_10,
  questionPool: CE_POOL_10
}),
  readingPoolExercise({
  id: "e2-1-11",
  readingText: CE_TEXT_11,
  questionPool: CE_POOL_11
}),
  readingPoolExercise({
  id: "e2-1-12",
  readingText: CE_TEXT_12,
  questionPool: CE_POOL_12
}),
  readingPoolExercise({
  id: "e2-1-13",
  readingText: CE_TEXT_13,
  questionPool: CE_POOL_13
}),
  readingPoolExercise({
  id: "e2-1-14",
  readingText: CE_TEXT_14,
  questionPool: CE_POOL_14
}),
  readingPoolExercise({
  id: "e2-1-15",
  readingText: CE_TEXT_15,
  questionPool: CE_POOL_15
}),
  readingPoolExercise({
  id: "e2-1-16",
  readingText: CE_TEXT_16,
  questionPool: CE_POOL_16
}),
  readingPoolExercise({
  id: "e2-1-17",
  readingText: CE_TEXT_17,
  questionPool: CE_POOL_17
}),
  readingPoolExercise({
  id: "e2-1-18",
  readingText: CE_TEXT_18,
  questionPool: CE_POOL_18
}),
  readingPoolExercise({
  id: "e2-1-19",
  readingText: CE_TEXT_19,
  questionPool: CE_POOL_19
}),
  readingPoolExercise({
  id: "e2-1-20",
  readingText: CE_TEXT_20,
  questionPool: CE_POOL_20
}),
];

/* ── Production orale — dialogues à jouer (thème logement) ─────────────────── */

const AGENT = { title: "L'agent immobilier", vous: "l'agent immobilier" };
const CLIENT = { title: "Le client", vous: "le client / la cliente" };
const AMI = { title: "L'ami", vous: "l'ami / l'amie" };
const VOUS = { title: "Vous", vous: "vous-même" };

export const E2_1_PO: ExpressPoDialogue[] = [
  {
    id: "e2-1-po-1",
    title: "Visiter un appartement",
    context: "Vous visitez un appartement avec un agent immobilier.",
    roleA: AGENT,
    roleB: CLIENT,
    lines: [
      { role: "A", text: "Bonjour ! Voici l'appartement. Entrez, je vous en prie." },
      { role: "B", text: "Merci. Oh, le salon est grand et lumineux !" },
      { role: "A", text: "Oui, et il y a une cuisine équipée à côté." },
      { role: "B", text: "C'est à quel étage ?" },
      { role: "A", text: "Au 4e étage, avec un ascenseur." },
      { role: "B", text: "Il y a un balcon ?" },
      { role: "A", text: "Oui, un petit balcon avec vue sur le parc." },
      { role: "B", text: "C'est parfait, j'adore cet appartement !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e2-1-po-2",
    title: "Décrire son nouveau logement",
    context: "Un ami vous demande de décrire votre nouveau logement.",
    roleA: AMI,
    roleB: VOUS,
    lines: [
      { role: "A", text: "Alors, tu habites où maintenant ?" },
      { role: "B", text: "J'habite dans un appartement au centre-ville." },
      { role: "A", text: "C'est grand ?" },
      { role: "B", text: "Oui, il y a un salon, deux chambres et une cuisine équipée." },
      { role: "A", text: "Et c'est lumineux ?" },
      { role: "B", text: "Très lumineux ! Les fenêtres sont grandes." },
      { role: "A", text: "Tu as de la chance ! C'est calme ?" },
      { role: "B", text: "Oui, le quartier est très calme." },
      { role: "A", text: "Enchanté(e) de te connaître !" },
      { role: "B", text: "Moi aussi. À tout à l'heure !" },
],
  },
  {
    id: "e2-1-po-3",
    title: "Chercher un studio",
    context: "Vous êtes étudiant(e) et vous cherchez un studio à l'agence.",
    roleA: AGENT,
    roleB: { title: "L'étudiant", vous: "l'étudiant / l'étudiante" },
    lines: [
      { role: "A", text: "Bonjour, je peux vous aider ?" },
      { role: "B", text: "Oui, je cherche un studio pour étudiant." },
      { role: "A", text: "Vous voulez habiter dans quel quartier ?" },
      { role: "B", text: "Près de l'université, dans un quartier calme." },
      { role: "A", text: "J'ai un studio au 2e étage, avec une petite cuisine." },
      { role: "B", text: "Il est lumineux ?" },
      { role: "A", text: "Oui, et il y a même un petit balcon." },
      { role: "B", text: "Super ! Je peux le visiter quand ?" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e2-1-po-4",
    title: "Au téléphone avec mamie",
    context: "Votre grand-mère vous téléphone pour parler de votre nouvel appartement.",
    roleA: { title: "La grand-mère", vous: "la grand-mère" },
    roleB: { title: "Le petit-fils", vous: "le petit-fils / la petite-fille" },
    lines: [
      { role: "A", text: "Alors, comment est ton nouvel appartement ?" },
      { role: "B", text: "Il est super, mamie ! Grand et très lumineux." },
      { role: "A", text: "Il y a combien de pièces ?" },
      { role: "B", text: "Trois pièces : un salon, une chambre et un bureau." },
      { role: "A", text: "Et la cuisine, elle est équipée ?" },
      { role: "B", text: "Oui, avec un frigo neuf et un four." },
      { role: "A", text: "C'est à quel étage ?" },
      { role: "B", text: "Au 3e, mais il y a un ascenseur, tu peux venir !" },
      { role: "A", text: "Merci, c'est noté." },
      { role: "B", text: "Parfait. À bientôt alors !" },
],
  },
  {
    id: "e2-1-po-5",
    title: "Comparer deux logements",
    context: "Vous hésitez entre un studio et un appartement. Un ami vous aide à choisir.",
    roleA: AMI,
    roleB: VOUS,
    lines: [
      { role: "A", text: "Tu préfères le studio ou l'appartement ?" },
      { role: "B", text: "L'appartement. Il est plus grand." },
      { role: "A", text: "Mais le studio est au centre-ville !" },
      { role: "B", text: "Oui, mais il est sombre et le quartier est bruyant." },
      { role: "A", text: "C'est vrai. Et l'appartement a un balcon ?" },
      { role: "B", text: "Oui, un grand balcon et une cuisine équipée." },
      { role: "A", text: "Alors, tu choisis l'appartement ?" },
      { role: "B", text: "Oui ! Je signe demain." },
      { role: "A", text: "Bonne installation alors !" },
      { role: "B", text: "Merci beaucoup !" },
],
  },
  {
    id: "e2-1-po-6",
    title: "Inviter un ami chez soi",
    context: "Vous invitez un ami chez vous et vous décrivez où vous habitez.",
    roleA: VOUS,
    roleB: AMI,
    lines: [
      { role: "A", text: "Tu viens chez moi samedi ? Je fais une petite fête." },
      { role: "B", text: "Avec plaisir ! Tu habites où ?" },
      { role: "A", text: "Rue des Lilas, dans un immeuble neuf." },
      { role: "B", text: "C'est à quel étage ?" },
      { role: "A", text: "Au 5e. Il y a un ascenseur, ne t'inquiète pas." },
      { role: "B", text: "D'accord. Comment est ton appartement ?" },
      { role: "A", text: "Petit mais très lumineux, avec un balcon." },
      { role: "B", text: "Génial ! À samedi alors !" },
      { role: "A", text: "Enchanté(e) de te connaître !" },
      { role: "B", text: "Moi aussi. À tout à l'heure !" },
],
  },
  {
    id: "e2-1-po-7",
    title: "Visiter un studio sombre",
    context: "Vous visitez un studio, mais il ne vous plaît pas beaucoup.",
    roleA: AGENT,
    roleB: CLIENT,
    lines: [
      { role: "A", text: "Voici le studio. Qu'est-ce que vous en pensez ?" },
      { role: "B", text: "Hum… la pièce est petite et un peu sombre." },
      { role: "A", text: "Oui, mais le quartier est très calme." },
      { role: "B", text: "La cuisine est équipée ?" },
      { role: "A", text: "Non, il n'y a pas de cuisine équipée." },
      { role: "B", text: "Et c'est à quel étage ?" },
      { role: "A", text: "Au rez-de-chaussée, à côté du garage." },
      { role: "B", text: "Merci, mais je préfère un logement plus lumineux." },
      { role: "A", text: "D'accord. On se dit à bientôt ?" },
      { role: "B", text: "Oui, à bientôt !" },
],
  },
  {
    id: "e2-1-po-8",
    title: "Décrire sa maison",
    context: "Un collègue vous pose des questions sur votre maison à la campagne.",
    roleA: { title: "Le collègue", vous: "le collègue / la collègue" },
    roleB: VOUS,
    lines: [
      { role: "A", text: "Vous habitez dans un appartement ?" },
      { role: "B", text: "Non, dans une maison, à la campagne." },
      { role: "A", text: "Elle est grande ?" },
      { role: "B", text: "Oui, il y a cinq pièces et un grand jardin." },
      { role: "A", text: "Un jardin ? Quelle chance !" },
      { role: "B", text: "Oui, on mange dehors en été." },
      { role: "A", text: "Et c'est loin de la ville ?" },
      { role: "B", text: "Non, à vingt minutes en voiture." },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e2-1-po-9",
    title: "Téléphoner pour une annonce",
    context: "Vous téléphonez au propriétaire pour une annonce de location.",
    roleA: { title: "Le propriétaire", vous: "le propriétaire / la propriétaire" },
    roleB: CLIENT,
    lines: [
      { role: "A", text: "Allô, bonjour !" },
      { role: "B", text: "Bonjour, j'appelle pour l'annonce de l'appartement." },
      { role: "A", text: "Ah oui ! C'est un trois pièces au 1er étage." },
      { role: "B", text: "Il est lumineux ?" },
      { role: "A", text: "Oui, très lumineux, avec de grandes fenêtres." },
      { role: "B", text: "Et le quartier, il est calme ?" },
      { role: "A", text: "Oui, c'est un quartier calme, près du parc." },
      { role: "B", text: "Parfait ! Je peux venir le visiter demain ?" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e2-1-po-10",
    title: "Décrire sa chambre",
    context: "Un ami vous demande de décrire votre nouvelle chambre.",
    roleA: AMI,
    roleB: VOUS,
    lines: [
      { role: "A", text: "Ta nouvelle chambre est comment ?" },
      { role: "B", text: "Elle est grande, avec un grand lit et une armoire." },
      { role: "A", text: "Elle est lumineuse ?" },
      { role: "B", text: "Oui, il y a une grande fenêtre avec vue sur le jardin." },
      { role: "A", text: "Tu as un bureau pour travailler ?" },
      { role: "B", text: "Oui, un petit bureau à côté de la fenêtre." },
      { role: "A", text: "Et les murs, ils sont de quelle couleur ?" },
      { role: "B", text: "Ils sont blancs, j'aime bien, c'est simple." },
      { role: "A", text: "Bon courage pour la suite !" },
      { role: "B", text: "Merci, toi aussi !" },
],
  },
{
  id: "e2-1-po-11",
  title: "Demander une information sur un logement",
  context: "Vous parlez en français simple. Vous devez demander une information sur un logement : visiter un studio près de la gare.",
  roleA: { title: "La régie", vous: "l'employé(e) de la régie" },
  roleB: { title: "Vous", vous: "la personne qui parle" },
  lines: [
    { role: "A", text: "Bonjour, je peux vous renseigner ?" },
    { role: "B", text: "Bonjour, je voudrais savoir comment faire pour visiter un studio près de la gare." },
    { role: "A", text: "Bien sûr. La visite est jeudi à 17 heures." },
    { role: "B", text: "D'accord. Est-ce qu'il faut réserver avant ?" },
    { role: "A", text: "Oui. Le loyer est de 850 francs charges comprises." },
    { role: "B", text: "Très bien. Je peux le faire aujourd'hui ?" },
    { role: "A", text: "Oui, si vous avez quelques minutes." },
    { role: "B", text: "Parfait, je commence tout de suite." },
    { role: "A", text: "Je reste disponible si vous avez une question." },
    { role: "B", text: "Merci beaucoup pour votre aide." },
  ],
},
{
  id: "e2-1-po-12",
  title: "Expliquer un problème avec un logement",
  context: "Vous parlez en français simple. Vous devez expliquer un problème avec un logement : le chauffage ne marche plus dans le salon.",
  roleA: { title: "La régie", vous: "l'employé(e) de la régie" },
  roleB: { title: "Vous", vous: "la personne qui parle" },
  lines: [
    { role: "A", text: "Bonjour, qu'est-ce qui se passe ?" },
    { role: "B", text: "Bonjour, j'ai un problème : le chauffage ne marche plus dans le salon." },
    { role: "A", text: "Je comprends. Un technicien peut passer demain matin." },
    { role: "B", text: "Merci. Est-ce possible de régler ça maintenant ?" },
    { role: "A", text: "Je serai à la maison avant 10 heures." },
    { role: "B", text: "Très bien, merci." },
    { role: "A", text: "Je m'en occupe tout de suite." },
    { role: "B", text: "C'est gentil, je vous remercie." },
    { role: "A", text: "Je vous en prie." },
    { role: "B", text: "Merci, bonne journée." },
  ],
},
{
  id: "e2-1-po-13",
  title: "Prendre rendez-vous pour un logement",
  context: "Vous parlez en français simple. Vous devez prendre rendez-vous pour un logement : une visite pour un appartement de deux pièces.",
  roleA: { title: "La régie", vous: "l'employé(e) de la régie" },
  roleB: { title: "Vous", vous: "la personne qui parle" },
  lines: [
    { role: "A", text: "Bonjour, vous souhaitez un rendez-vous ?" },
    { role: "B", text: "Oui, je voudrais une visite pour un appartement de deux pièces." },
    { role: "A", text: "Je peux vous proposer mardi à 18 heures." },
    { role: "B", text: "Oui, ce créneau me convient." },
    { role: "A", text: "Je viens avec mon dossier." },
    { role: "B", text: "D'accord, je le note." },
    { role: "A", text: "Je vous envoie une confirmation par message." },
    { role: "B", text: "Merci. Vous avez mon numéro ?" },
    { role: "A", text: "Oui, il est noté ici." },
    { role: "B", text: "Parfait, à bientôt." },
  ],
},
{
  id: "e2-1-po-14",
  title: "Confirmer un rendez-vous",
  context: "Vous parlez en français simple. Vous devez confirmer un rendez-vous : la visite de l'appartement.",
  roleA: { title: "La régie", vous: "l'employé(e) de la régie" },
  roleB: { title: "Vous", vous: "la personne qui parle" },
  lines: [
    { role: "A", text: "Bonjour, vous appelez pour confirmer ?" },
    { role: "B", text: "Oui, je confirme la visite de l'appartement." },
    { role: "A", text: "Très bien. C'est bien jeudi à 16 h 30 ?" },
    { role: "B", text: "Oui, c'est exact." },
    { role: "A", text: "Parfait, c'est noté." },
    { role: "B", text: "L'adresse est rue du Nord 14." },
    { role: "A", text: "Oui, aucun problème." },
    { role: "B", text: "Merci, c'est très clair." },
    { role: "A", text: "Parfait, à ce moment-là." },
    { role: "B", text: "Merci, à bientôt." },
  ],
},
{
  id: "e2-1-po-15",
  title: "Demander conseil sur un logement",
  context: "Vous parlez en français simple. Vous devez demander conseil sur un logement : choisir entre un studio proche du travail et un appartement plus grand.",
  roleA: { title: "La régie", vous: "l'employé(e) de la régie" },
  roleB: { title: "Vous", vous: "la personne qui parle" },
  lines: [
    { role: "A", text: "Vous voulez un conseil ?" },
    { role: "B", text: "Oui, j'hésite pour choisir entre un studio proche du travail et un appartement plus grand." },
    { role: "A", text: "Le studio est plus cher." },
    { role: "B", text: "C'est vrai, mais je veux aussi quelque chose de pratique." },
    { role: "A", text: "L'appartement est à vingt minutes en bus." },
    { role: "B", text: "Je comprends mieux la différence." },
    { role: "A", text: "Choisissez ce qui vous simplifie la vie." },
    { role: "B", text: "Vous avez raison. Je vais y réfléchir ce soir." },
    { role: "A", text: "Revenez me voir si vous voulez en reparler." },
    { role: "B", text: "Merci pour votre conseil." },
  ],
},
{
  id: "e2-1-po-16",
  title: "Signaler un retard",
  context: "Vous parlez en français simple. Vous devez signaler un retard : la visite du logement.",
  roleA: { title: "La régie", vous: "l'employé(e) de la régie" },
  roleB: { title: "Vous", vous: "la personne qui parle" },
  lines: [
    { role: "A", text: "Bonjour, je vous écoute." },
    { role: "B", text: "Bonjour, je vous préviens : la visite du logement." },
    { role: "A", text: "Merci de nous prévenir. Que se passe-t-il ?" },
    { role: "B", text: "Le bus est bloqué." },
    { role: "A", text: "D'accord, ce n'est pas grave." },
    { role: "B", text: "J'arrive avec quinze minutes de retard." },
    { role: "A", text: "Très bien, nous vous attendons." },
    { role: "B", text: "Merci pour votre compréhension." },
    { role: "A", text: "À tout à l'heure." },
    { role: "B", text: "À tout à l'heure." },
  ],
},
{
  id: "e2-1-po-17",
  title: "Faire une réclamation polie",
  context: "Vous parlez en français simple. Vous devez faire une réclamation polie : une fenêtre cassée depuis une semaine.",
  roleA: { title: "La régie", vous: "l'employé(e) de la régie" },
  roleB: { title: "Vous", vous: "la personne qui parle" },
  lines: [
    { role: "A", text: "Bonjour, comment puis-je vous aider ?" },
    { role: "B", text: "Bonjour, je voudrais signaler un problème : une fenêtre cassée depuis une semaine." },
    { role: "A", text: "Je suis désolé pour cela." },
    { role: "B", text: "L'air froid entre dans la chambre." },
    { role: "A", text: "Je comprends. Quelle solution souhaitez-vous ?" },
    { role: "B", text: "Je demande une réparation rapide." },
    { role: "A", text: "D'accord, je vais transmettre votre demande." },
    { role: "B", text: "Merci. J'aimerais être informé rapidement." },
    { role: "A", text: "Je vous réponds dès que possible." },
    { role: "B", text: "Très bien, merci." },
  ],
},
{
  id: "e2-1-po-18",
  title: "Demander une aide urgente",
  context: "Vous parlez en français simple. Vous devez demander une aide urgente : une fuite d'eau dans la cuisine.",
  roleA: { title: "La régie", vous: "l'employé(e) de la régie" },
  roleB: { title: "Vous", vous: "la personne qui parle" },
  lines: [
    { role: "A", text: "Bonjour, c'est urgent ?" },
    { role: "B", text: "Oui, j'ai besoin d'aide pour une fuite d'eau dans la cuisine." },
    { role: "A", text: "Coupez l'eau sous l'évier." },
    { role: "B", text: "D'accord, je fais ça tout de suite." },
    { role: "A", text: "Un plombier arrive cet après-midi." },
    { role: "B", text: "Merci. Est-ce que je dois rappeler ?" },
    { role: "A", text: "Non, venez directement si besoin." },
    { role: "B", text: "Très bien, je pars maintenant." },
    { role: "A", text: "Bon courage." },
    { role: "B", text: "Merci beaucoup." },
  ],
},
{
  id: "e2-1-po-19",
  title: "Comparer deux possibilités",
  context: "Vous parlez en français simple. Vous devez comparer deux possibilités : un studio meublé et un deux-pièces vide.",
  roleA: { title: "La régie", vous: "l'employé(e) de la régie" },
  roleB: { title: "Vous", vous: "la personne qui parle" },
  lines: [
    { role: "A", text: "Vous hésitez entre deux possibilités ?" },
    { role: "B", text: "Oui, je compare un studio meublé et un deux-pièces vide." },
    { role: "A", text: "Le studio est libre tout de suite." },
    { role: "B", text: "Et l'autre possibilité ?" },
    { role: "A", text: "Le deux-pièces a plus de place." },
    { role: "B", text: "Je vois. Je cherche surtout quelque chose de pratique." },
    { role: "A", text: "Dans ce cas, la première option est peut-être meilleure." },
    { role: "B", text: "D'accord, je vais choisir celle-là." },
    { role: "A", text: "Très bien, je vous prépare ça." },
    { role: "B", text: "Merci pour vos conseils." },
  ],
},
{
  id: "e2-1-po-20",
  title: "Remercier pour une aide",
  context: "Vous parlez en français simple. Vous devez remercier pour une aide : la visite du logement.",
  roleA: { title: "La régie", vous: "l'employé(e) de la régie" },
  roleB: { title: "Vous", vous: "la personne qui parle" },
  lines: [
    { role: "A", text: "Bonjour, vous vouliez me parler ?" },
    { role: "B", text: "Oui, je voulais vous remercier pour la visite du logement." },
    { role: "A", text: "C'est gentil, merci." },
    { role: "B", text: "Vos explications sur le dossier." },
    { role: "A", text: "Je suis content que cela vous ait aidé." },
    { role: "B", text: "Je vais envoyer les papiers ce soir." },
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

export const E2_1_PE: ExpressPePrompt[] = [
  {
    id: "e2-1-pe-1",
    title: "Appartement et adresse",
    situation: "",
    instruction: "Décrivez votre appartement ou votre maison à un ami et donnez votre adresse.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-1-pe-2",
    title: "Interet Le Florence",
    situation: "",
    instruction: "Vous êtes intéressé par un appartement dans l'immeuble Le Florence. Écrivez un court message pour poser des questions sur le logement.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-1-pe-3",
    title: "Nouvelle chambre",
    situation: "",
    instruction: "Vous venez d'installer votre chambre. Décrivez-la à un ami avec les meubles, les couleurs et une chose que vous aimez.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-1-pe-4",
    title: "Maison de vacances",
    situation: "",
    instruction: "Décrivez une maison de vacances à votre famille. Parlez des pièces, du jardin, de l'adresse et d'un detail pratique.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-1-pe-5",
    title: "Colocation",
    situation: "",
    instruction: "Vous cherchez un colocataire. Écrivez une annonce courte pour décrire le logement, la chambre disponible et le quartier.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-1-pe-6",
    title: "Demande d'adresse",
    situation: "",
    instruction: "Un livreur doit venir chez vous. Écrivez un message avec votre adresse precise, l'etage et une indication pour trouver l'immeuble.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-1-pe-7",
    title: "Studio en ville",
    situation: "",
    instruction: "Présentez votre studio à un camarade qui cherche un logement. Dites ou il se trouve, ce qu'il y a dedans et son avantage principal.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-1-pe-8",
    title: "Visite samedi",
    situation: "",
    instruction: "Vous voulez visiter un appartement samedi. Écrivez un message au proprietaire pour demander l'heure et l'adresse du rendez-vous.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-1-pe-9",
    title: "Avant demenagement",
    situation: "",
    instruction: "Vous allez demenager. Décrivez votre futur logement à un ami et expliquez pourquoi vous êtes content.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-1-pe-10",
    title: "Problème de place",
    situation: "",
    instruction: "Votre appartement est petit. Écrivez un message pour expliquer les pièces, les meubles importants et ce que vous voulez changer.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-1-pe-11",
    title: "Quartier agreable",
    situation: "",
    instruction: "Décrivez votre maison et votre quartier à un nouvel ami. Donnez l'adresse générale, les commerces proches et le transport utile.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-1-pe-12",
    title: "Chambre chez l'habitant",
    situation: "",
    instruction: "Vous proposez une chambre chez vous pour une semaine. Décrivez la chambre, la salle de bain et les regles simples de la maison.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-1-pe-13",
    title: "Adresse pour invitation",
    situation: "",
    instruction: "Vous invitez un ami chez vous. Écrivez un message avec votre adresse, le code de la porte et une phrase pour décrire votre immeuble.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-1-pe-14",
    title: "Annonce logement",
    situation: "",
    instruction: "Rédigez une petite annonce pour louer votre appartement pendant les vacances. Décrivez les pièces, l'equipement et le prix approximatif.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-1-pe-15",
    title: "Logement ideal",
    situation: "",
    instruction: "Décrivez votre logement idéal en phrases simples. Parlez de la taille, des pièces, du lieu et d'un élément important pour vous.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-1-pe-16",
    title: "Comparaison de logements",
    situation: "",
    instruction: "Comparez votre ancien logement et votre nouveau logement. Dites ou ils sont, quelles pièces ils ont et lequel vous préférez.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-1-pe-17",
    title: "Plan de maison",
    situation: "",
    instruction: "Expliquez le plan de votre maison à un ami qui vient pour la première fois. Décrivez l'entree, le salon, la cuisine et votre chambre.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-1-pe-18",
    title: "Location courte",
    situation: "",
    instruction: "Vous cherchez un logement pour trois nuits. Écrivez un message pour dire vos dates, le nombre de personnes et le type de logement souhaite.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-1-pe-19",
    title: "Residence étudiante",
    situation: "",
    instruction: "Décrivez votre residence étudiante à vos parents. Parlez de votre chambre, des espaces communs et de l'adresse.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-1-pe-20",
    title: "Logement calme",
    situation: "",
    instruction: "Vous voulez un logement calme. Écrivez un message à une agence pour expliquer ce que vous cherchez et poser une question sur le bruit.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },

];
