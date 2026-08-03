import {
  readingPoolExercise,
  type CommunicationExercise,
  type ExpressPePrompt,
} from "./express-types";
import { buildExpressPool, type ExpressRawQ } from "./express-listening-helpers";

/**
 * E-mails E2 — Logement (description, problème domestique, règlement).
 * CE e-mail : un e-mail à lire + pool de questions (≥ 10).
 * PE e-mail : pool d'e-mails reçus auxquels répondre (≥ 10).
 */

function q(item: ExpressRawQ): ExpressRawQ {
  return item;
}

const PE_MIN = 50;
const PE_MAX = 120;

/* ════════════════════════════════════════════════════════════════════════════
   E2.1 — Décrire son logement
   ════════════════════════════════════════════════════════════════════════════ */

const E2_1_CE_EMAIL_TEXT_1 = `De : Thomas Keller

Objet : Mon nouvel appartement

Bonjour,

Je vous écris au sujet de mon logement.
C'est un appartement de trois pièce(s) au deuxième étage à Genève.
Le loyer est de 1250 francs par mois.
Il y a un(e) balcon. C'est proche de parc.
Disponible à partir du 15 mars.

Merci de confirmer la bonne réception.
Joignez les documents demandés si nécessaire.
Nous vous souhaitons une excellente journée.
Cordialement,
Thomas Keller`;

const E2_1_CE_EMAIL_POOL_1 = buildExpressPool("e2-1-ce-email-1", [
  q({
    id: "cem-q1",
    textQ: "Combien de pièces ?",
    text: ["Trois", "Dix", "Aucune"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "appartement de _________ pièce(s)",
    fill: "trois",
    vfQ: "C'est trois pièce(s).",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "À quel étage ?",
    text: ["Au deuxième étage", "Au sous-sol", "Au 30e"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "au _________ étage",
    fill: "deuxième",
    vfQ: "Au deuxième étage.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Dans quelle ville ?",
    text: ["À Genève", "À Paris", "À Rome"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "à _________.",
    fill: "Genève",
    vfQ: "À Genève.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Combien coûte le loyer ?",
    text: ["1250 francs", "50 francs", "10000 francs"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le loyer est de _________ francs.",
    fill: "1250",
    vfQ: "1250 francs.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle particularité ?",
    text: ["Balcon", "Une piscine", "Un cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "un(e) _________.",
    fill: "balcon",
    vfQ: "Il y a balcon.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Proche de quoi ?",
    text: ["Parc", "L'océan", "Un volcan"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "proche de _________.",
    fill: "parc",
    vfQ: "Proche de parc.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quand est-ce disponible ?",
    text: ["15 mars", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "à partir du _________.",
    fill: "15",
    vfQ: "Disponible 15 mars.",
    vfC: 0,
  }),
]);
const E2_1_CE_EMAIL_TEXT_2 = `De : Sophie Martin

Objet : Notre maison

Bonjour,

Je vous écris au sujet de mon logement.
C'est un appartement de cinq pièce(s) au rez-de-chaussée étage à Lausanne.
Le loyer est de 2200 francs par mois.
Il y a un(e) jardin. C'est proche de école.
Disponible à partir du 1er avril.

À bientôt, et merci de votre lecture.
Je reste près de mon téléphone aujourd'hui.
Dis-moi si tu as besoin d'autre chose.
Cordialement,
Sophie Martin`;

const E2_1_CE_EMAIL_POOL_2 = buildExpressPool("e2-1-ce-email-2", [
  q({
    id: "cem-q1",
    textQ: "Combien de pièces ?",
    text: ["Cinq", "Dix", "Aucune"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "appartement de _________ pièce(s)",
    fill: "cinq",
    vfQ: "C'est cinq pièce(s).",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "À quel étage ?",
    text: ["Au rez-de-chaussée étage", "Au sous-sol", "Au 30e"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "au _________ étage",
    fill: "rez-de-chaussée",
    vfQ: "Au rez-de-chaussée étage.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Dans quelle ville ?",
    text: ["À Lausanne", "À Paris", "À Rome"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "à _________.",
    fill: "Lausanne",
    vfQ: "À Lausanne.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Combien coûte le loyer ?",
    text: ["2200 francs", "50 francs", "10000 francs"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le loyer est de _________ francs.",
    fill: "2200",
    vfQ: "2200 francs.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle particularité ?",
    text: ["Jardin", "Une piscine", "Un cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "un(e) _________.",
    fill: "jardin",
    vfQ: "Il y a jardin.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Proche de quoi ?",
    text: ["École", "L'océan", "Un volcan"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "proche de _________.",
    fill: "école",
    vfQ: "Proche de école.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quand est-ce disponible ?",
    text: ["1er avril", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "à partir du _________.",
    fill: "1er",
    vfQ: "Disponible 1er avril.",
    vfC: 0,
  }),
]);
const E2_1_CE_EMAIL_TEXT_3 = `De : Marc Dubois

Objet : Mon studio

Bonjour,

Je vous écris au sujet de mon logement.
C'est un appartement de une pièce(s) au quatrième étage à Fribourg.
Le loyer est de 780 francs par mois.
Il y a un(e) cuisine équipée. C'est proche de gare.
Disponible à partir du immédiat.

Respectez la file d'attente, s'il vous plaît.
Les personnes à mobilité réduite sont prioritaires.
En cas de perte d'objet, passez à l'accueil.
Cordialement,
Marc Dubois`;

const E2_1_CE_EMAIL_POOL_3 = buildExpressPool("e2-1-ce-email-3", [
  q({
    id: "cem-q1",
    textQ: "Combien de pièces ?",
    text: ["Une", "Dix", "Aucune"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "appartement de _________ pièce(s)",
    fill: "une",
    vfQ: "C'est une pièce(s).",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "À quel étage ?",
    text: ["Au quatrième étage", "Au sous-sol", "Au 30e"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "au _________ étage",
    fill: "quatrième",
    vfQ: "Au quatrième étage.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Dans quelle ville ?",
    text: ["À Fribourg", "À Paris", "À Rome"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "à _________.",
    fill: "Fribourg",
    vfQ: "À Fribourg.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Combien coûte le loyer ?",
    text: ["780 francs", "50 francs", "10000 francs"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le loyer est de _________ francs.",
    fill: "780",
    vfQ: "780 francs.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle particularité ?",
    text: ["Cuisine équipée", "Une piscine", "Un cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "un(e) _________.",
    fill: "cuisine équipée",
    vfQ: "Il y a cuisine équipée.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Proche de quoi ?",
    text: ["Gare", "L'océan", "Un volcan"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "proche de _________.",
    fill: "gare",
    vfQ: "Proche de gare.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quand est-ce disponible ?",
    text: ["Immédiat", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "à partir du _________.",
    fill: "immédiat",
    vfQ: "Disponible immédiat.",
    vfC: 0,
  }),
]);
const E2_1_CE_EMAIL_TEXT_4 = `De : Anna Weber

Objet : Appartement à louer

Bonjour,

Je vous écris au sujet de mon logement.
C'est un appartement de quatre pièce(s) au troisième étage à Neuchâtel.
Le loyer est de 1350 francs par mois.
Il y a un(e) terrasse. C'est proche de lac.
Disponible à partir du 1er mai.

Le lieu est facile à trouver avec les indications.
Pensez à arriver un peu en avance.
Gardez ce texte pour vous en souvenir.
Cordialement,
Anna Weber`;

const E2_1_CE_EMAIL_POOL_4 = buildExpressPool("e2-1-ce-email-4", [
  q({
    id: "cem-q1",
    textQ: "Combien de pièces ?",
    text: ["Quatre", "Dix", "Aucune"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "appartement de _________ pièce(s)",
    fill: "quatre",
    vfQ: "C'est quatre pièce(s).",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "À quel étage ?",
    text: ["Au troisième étage", "Au sous-sol", "Au 30e"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "au _________ étage",
    fill: "troisième",
    vfQ: "Au troisième étage.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Dans quelle ville ?",
    text: ["À Neuchâtel", "À Paris", "À Rome"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "à _________.",
    fill: "Neuchâtel",
    vfQ: "À Neuchâtel.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Combien coûte le loyer ?",
    text: ["1350 francs", "50 francs", "10000 francs"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le loyer est de _________ francs.",
    fill: "1350",
    vfQ: "1350 francs.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle particularité ?",
    text: ["Terrasse", "Une piscine", "Un cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "un(e) _________.",
    fill: "terrasse",
    vfQ: "Il y a terrasse.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Proche de quoi ?",
    text: ["Lac", "L'océan", "Un volcan"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "proche de _________.",
    fill: "lac",
    vfQ: "Proche de lac.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quand est-ce disponible ?",
    text: ["1er mai", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "à partir du _________.",
    fill: "1er",
    vfQ: "Disponible 1er mai.",
    vfC: 0,
  }),
]);
const E2_1_CE_EMAIL_TEXT_5 = `De : Lucas Ferreira

Objet : Visite appartement

Bonjour,

Je vous écris au sujet de mon logement.
C'est un appartement de trois pièce(s) au cinquième étage à Montreux.
Le loyer est de 1400 francs par mois.
Il y a un(e) vue lac. C'est proche de centre.
Disponible à partir du samedi 10 h.

En cas de perte d'objet, passez à l'accueil.
Le service client répond aussi par téléphone.
Merci de lire ce message jusqu'à la fin.
Cordialement,
Lucas Ferreira`;

const E2_1_CE_EMAIL_POOL_5 = buildExpressPool("e2-1-ce-email-5", [
  q({
    id: "cem-q1",
    textQ: "Combien de pièces ?",
    text: ["Trois", "Dix", "Aucune"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "appartement de _________ pièce(s)",
    fill: "trois",
    vfQ: "C'est trois pièce(s).",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "À quel étage ?",
    text: ["Au cinquième étage", "Au sous-sol", "Au 30e"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "au _________ étage",
    fill: "cinquième",
    vfQ: "Au cinquième étage.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Dans quelle ville ?",
    text: ["À Montreux", "À Paris", "À Rome"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "à _________.",
    fill: "Montreux",
    vfQ: "À Montreux.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Combien coûte le loyer ?",
    text: ["1400 francs", "50 francs", "10000 francs"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le loyer est de _________ francs.",
    fill: "1400",
    vfQ: "1400 francs.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle particularité ?",
    text: ["Vue lac", "Une piscine", "Un cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "un(e) _________.",
    fill: "vue lac",
    vfQ: "Il y a vue lac.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Proche de quoi ?",
    text: ["Centre", "L'océan", "Un volcan"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "proche de _________.",
    fill: "centre",
    vfQ: "Proche de centre.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quand est-ce disponible ?",
    text: ["Samedi 10 h", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "à partir du _________.",
    fill: "samedi",
    vfQ: "Disponible samedi 10 h.",
    vfC: 0,
  }),
]);
const E2_1_CE_EMAIL_TEXT_6 = `De : Emma Laurent

Objet : Description logement

Bonjour,

Je vous écris au sujet de mon logement.
C'est un appartement de deux pièce(s) au premier étage à Yverdon.
Le loyer est de 950 francs par mois.
Il y a un(e) cave. C'est proche de commerces.
Disponible à partir du juin.

Nous vous souhaitons une excellente journée.
Le service est également disponible en ligne.
Respectez la file d'attente, s'il vous plaît.
Cordialement,
Emma Laurent`;

const E2_1_CE_EMAIL_POOL_6 = buildExpressPool("e2-1-ce-email-6", [
  q({
    id: "cem-q1",
    textQ: "Combien de pièces ?",
    text: ["Deux", "Dix", "Aucune"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "appartement de _________ pièce(s)",
    fill: "deux",
    vfQ: "C'est deux pièce(s).",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "À quel étage ?",
    text: ["Au premier étage", "Au sous-sol", "Au 30e"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "au _________ étage",
    fill: "premier",
    vfQ: "Au premier étage.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Dans quelle ville ?",
    text: ["À Yverdon", "À Paris", "À Rome"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "à _________.",
    fill: "Yverdon",
    vfQ: "À Yverdon.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Combien coûte le loyer ?",
    text: ["950 francs", "50 francs", "10000 francs"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le loyer est de _________ francs.",
    fill: "950",
    vfQ: "950 francs.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle particularité ?",
    text: ["Cave", "Une piscine", "Un cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "un(e) _________.",
    fill: "cave",
    vfQ: "Il y a cave.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Proche de quoi ?",
    text: ["Commerces", "L'océan", "Un volcan"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "proche de _________.",
    fill: "commerces",
    vfQ: "Proche de commerces.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quand est-ce disponible ?",
    text: ["Juin", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "à partir du _________.",
    fill: "juin",
    vfQ: "Disponible juin.",
    vfC: 0,
  }),
]);
const E2_1_CE_EMAIL_TEXT_7 = `De : Hugo Blanc

Objet : Colocation

Bonjour,

Je vous écris au sujet de mon logement.
C'est un appartement de quatre pièce(s) au sixième étage à Bienne.
Le loyer est de 1100 francs par mois.
Il y a un(e) salon grand. C'est proche de université.
Disponible à partir du septembre.

Passe le bonjour à tout le monde.
À très bientôt, prends soin de toi.
C'est important pour moi, merci beaucoup.
Cordialement,
Hugo Blanc`;

const E2_1_CE_EMAIL_POOL_7 = buildExpressPool("e2-1-ce-email-7", [
  q({
    id: "cem-q1",
    textQ: "Combien de pièces ?",
    text: ["Quatre", "Dix", "Aucune"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "appartement de _________ pièce(s)",
    fill: "quatre",
    vfQ: "C'est quatre pièce(s).",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "À quel étage ?",
    text: ["Au sixième étage", "Au sous-sol", "Au 30e"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "au _________ étage",
    fill: "sixième",
    vfQ: "Au sixième étage.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Dans quelle ville ?",
    text: ["À Bienne", "À Paris", "À Rome"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "à _________.",
    fill: "Bienne",
    vfQ: "À Bienne.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Combien coûte le loyer ?",
    text: ["1100 francs", "50 francs", "10000 francs"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le loyer est de _________ francs.",
    fill: "1100",
    vfQ: "1100 francs.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle particularité ?",
    text: ["Salon grand", "Une piscine", "Un cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "un(e) _________.",
    fill: "salon grand",
    vfQ: "Il y a salon grand.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Proche de quoi ?",
    text: ["Université", "L'océan", "Un volcan"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "proche de _________.",
    fill: "université",
    vfQ: "Proche de université.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quand est-ce disponible ?",
    text: ["Septembre", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "à partir du _________.",
    fill: "septembre",
    vfQ: "Disponible septembre.",
    vfC: 0,
  }),
]);
const E2_1_CE_EMAIL_TEXT_8 = `De : Nina Costa

Objet : Sous-location été

Bonjour,

Je vous écris au sujet de mon logement.
C'est un appartement de trois pièce(s) au septième étage à Sion.
Le loyer est de 1000 francs par mois.
Il y a un(e) meublé. C'est proche de montagne.
Disponible à partir du juillet-août.

Dis-moi si tu as besoin d'autre chose.
On peut aussi en parler demain matin.
J'espère que tout se passe bien de ton côté.
Cordialement,
Nina Costa`;

const E2_1_CE_EMAIL_POOL_8 = buildExpressPool("e2-1-ce-email-8", [
  q({
    id: "cem-q1",
    textQ: "Combien de pièces ?",
    text: ["Trois", "Dix", "Aucune"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "appartement de _________ pièce(s)",
    fill: "trois",
    vfQ: "C'est trois pièce(s).",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "À quel étage ?",
    text: ["Au septième étage", "Au sous-sol", "Au 30e"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "au _________ étage",
    fill: "septième",
    vfQ: "Au septième étage.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Dans quelle ville ?",
    text: ["À Sion", "À Paris", "À Rome"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "à _________.",
    fill: "Sion",
    vfQ: "À Sion.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Combien coûte le loyer ?",
    text: ["1000 francs", "50 francs", "10000 francs"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le loyer est de _________ francs.",
    fill: "1000",
    vfQ: "1000 francs.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle particularité ?",
    text: ["Meublé", "Une piscine", "Un cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "un(e) _________.",
    fill: "meublé",
    vfQ: "Il y a meublé.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Proche de quoi ?",
    text: ["Montagne", "L'océan", "Un volcan"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "proche de _________.",
    fill: "montagne",
    vfQ: "Proche de montagne.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quand est-ce disponible ?",
    text: ["Juillet-août", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "à partir du _________.",
    fill: "juillet-août",
    vfQ: "Disponible juillet-août.",
    vfC: 0,
  }),
]);
const E2_1_CE_EMAIL_TEXT_9 = `De : David Kim

Objet : État des lieux

Bonjour,

Je vous écris au sujet de mon logement.
C'est un appartement de deux pièce(s) au huitième étage à Nyon.
Le loyer est de 1200 francs par mois.
Il y a un(e) parquet neuf. C'est proche de lac.
Disponible à partir du 20 avril.

Nous vous souhaitons une excellente journée.
Le service est également disponible en ligne.
Respectez la file d'attente, s'il vous plaît.
Cordialement,
David Kim`;

const E2_1_CE_EMAIL_POOL_9 = buildExpressPool("e2-1-ce-email-9", [
  q({
    id: "cem-q1",
    textQ: "Combien de pièces ?",
    text: ["Deux", "Dix", "Aucune"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "appartement de _________ pièce(s)",
    fill: "deux",
    vfQ: "C'est deux pièce(s).",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "À quel étage ?",
    text: ["Au huitième étage", "Au sous-sol", "Au 30e"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "au _________ étage",
    fill: "huitième",
    vfQ: "Au huitième étage.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Dans quelle ville ?",
    text: ["À Nyon", "À Paris", "À Rome"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "à _________.",
    fill: "Nyon",
    vfQ: "À Nyon.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Combien coûte le loyer ?",
    text: ["1200 francs", "50 francs", "10000 francs"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le loyer est de _________ francs.",
    fill: "1200",
    vfQ: "1200 francs.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle particularité ?",
    text: ["Parquet neuf", "Une piscine", "Un cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "un(e) _________.",
    fill: "parquet neuf",
    vfQ: "Il y a parquet neuf.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Proche de quoi ?",
    text: ["Lac", "L'océan", "Un volcan"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "proche de _________.",
    fill: "lac",
    vfQ: "Proche de lac.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quand est-ce disponible ?",
    text: ["20 avril", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "à partir du _________.",
    fill: "20",
    vfQ: "Disponible 20 avril.",
    vfC: 0,
  }),
]);
const E2_1_CE_EMAIL_TEXT_10 = `De : Sara Alami

Objet : Mon logement

Bonjour,

Je vous écris au sujet de mon logement.
C'est un appartement de trois pièce(s) au neuvième étage à Vevey.
Le loyer est de 1150 francs par mois.
Il y a un(e) ascenseur. C'est proche de gare.
Disponible à partir du octobre.

Conservez le numéro de contact indiqué.
Tout est organisé pour que ce soit simple.
À bientôt, et merci de votre lecture.
Cordialement,
Sara Alami`;

const E2_1_CE_EMAIL_POOL_10 = buildExpressPool("e2-1-ce-email-10", [
  q({
    id: "cem-q1",
    textQ: "Combien de pièces ?",
    text: ["Trois", "Dix", "Aucune"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "appartement de _________ pièce(s)",
    fill: "trois",
    vfQ: "C'est trois pièce(s).",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "À quel étage ?",
    text: ["Au neuvième étage", "Au sous-sol", "Au 30e"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "au _________ étage",
    fill: "neuvième",
    vfQ: "Au neuvième étage.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Dans quelle ville ?",
    text: ["À Vevey", "À Paris", "À Rome"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "à _________.",
    fill: "Vevey",
    vfQ: "À Vevey.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Combien coûte le loyer ?",
    text: ["1150 francs", "50 francs", "10000 francs"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le loyer est de _________ francs.",
    fill: "1150",
    vfQ: "1150 francs.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle particularité ?",
    text: ["Ascenseur", "Une piscine", "Un cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "un(e) _________.",
    fill: "ascenseur",
    vfQ: "Il y a ascenseur.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Proche de quoi ?",
    text: ["Gare", "L'océan", "Un volcan"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "proche de _________.",
    fill: "gare",
    vfQ: "Proche de gare.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quand est-ce disponible ?",
    text: ["Octobre", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "à partir du _________.",
    fill: "octobre",
    vfQ: "Disponible octobre.",
    vfC: 0,
  }),
]);
const E2_1_CE_EMAIL_TEXT_11 = `De : Paul Garcia

Objet : Appartement familial

Bonjour,

Je vous écris au sujet de mon logement.
C'est un appartement de cinq pièce(s) au dixième étage à Delémont.
Le loyer est de 1500 francs par mois.
Il y a un(e) deux salles de bain. C'est proche de parc.
Disponible à partir du décembre.

Vous pouvez répondre directement à ce message.
Merci de confirmer la bonne réception.
Joignez les documents demandés si nécessaire.
Cordialement,
Paul Garcia`;

const E2_1_CE_EMAIL_POOL_11 = buildExpressPool("e2-1-ce-email-11", [
  q({
    id: "cem-q1",
    textQ: "Combien de pièces ?",
    text: ["Cinq", "Dix", "Aucune"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "appartement de _________ pièce(s)",
    fill: "cinq",
    vfQ: "C'est cinq pièce(s).",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "À quel étage ?",
    text: ["Au dixième étage", "Au sous-sol", "Au 30e"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "au _________ étage",
    fill: "dixième",
    vfQ: "Au dixième étage.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Dans quelle ville ?",
    text: ["À Delémont", "À Paris", "À Rome"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "à _________.",
    fill: "Delémont",
    vfQ: "À Delémont.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Combien coûte le loyer ?",
    text: ["1500 francs", "50 francs", "10000 francs"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le loyer est de _________ francs.",
    fill: "1500",
    vfQ: "1500 francs.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle particularité ?",
    text: ["Deux salles de bain", "Une piscine", "Un cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "un(e) _________.",
    fill: "deux salles de bain",
    vfQ: "Il y a deux salles de bain.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Proche de quoi ?",
    text: ["Parc", "L'océan", "Un volcan"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "proche de _________.",
    fill: "parc",
    vfQ: "Proche de parc.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quand est-ce disponible ?",
    text: ["Décembre", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "à partir du _________.",
    fill: "décembre",
    vfQ: "Disponible décembre.",
    vfC: 0,
  }),
]);
const E2_1_CE_EMAIL_TEXT_12 = `De : Léa Bernard

Objet : Studio étudiant

Bonjour,

Je vous écris au sujet de mon logement.
C'est un appartement de une pièce(s) au onzième étage à Genève.
Le loyer est de 900 francs par mois.
Il y a un(e) proche tram. C'est proche de université.
Disponible à partir du août.

À bientôt, et merci de votre lecture.
Je reste près de mon téléphone aujourd'hui.
Dis-moi si tu as besoin d'autre chose.
Cordialement,
Léa Bernard`;

const E2_1_CE_EMAIL_POOL_12 = buildExpressPool("e2-1-ce-email-12", [
  q({
    id: "cem-q1",
    textQ: "Combien de pièces ?",
    text: ["Une", "Dix", "Aucune"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "appartement de _________ pièce(s)",
    fill: "une",
    vfQ: "C'est une pièce(s).",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "À quel étage ?",
    text: ["Au onzième étage", "Au sous-sol", "Au 30e"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "au _________ étage",
    fill: "onzième",
    vfQ: "Au onzième étage.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Dans quelle ville ?",
    text: ["À Genève", "À Paris", "À Rome"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "à _________.",
    fill: "Genève",
    vfQ: "À Genève.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Combien coûte le loyer ?",
    text: ["900 francs", "50 francs", "10000 francs"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le loyer est de _________ francs.",
    fill: "900",
    vfQ: "900 francs.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle particularité ?",
    text: ["Proche tram", "Une piscine", "Un cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "un(e) _________.",
    fill: "proche tram",
    vfQ: "Il y a proche tram.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Proche de quoi ?",
    text: ["Université", "L'océan", "Un volcan"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "proche de _________.",
    fill: "université",
    vfQ: "Proche de université.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quand est-ce disponible ?",
    text: ["Août", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "à partir du _________.",
    fill: "août",
    vfQ: "Disponible août.",
    vfC: 0,
  }),
]);
const E2_1_CE_EMAIL_TEXT_13 = `De : Tom Müller

Objet : Maison avec jardin

Bonjour,

Je vous écris au sujet de mon logement.
C'est un appartement de six pièce(s) au rez-de-chaussée étage à Payerne.
Le loyer est de 1800 francs par mois.
Il y a un(e) garage. C'est proche de campagne.
Disponible à partir du mai.

Les personnes à mobilité réduite sont prioritaires.
En cas de perte d'objet, passez à l'accueil.
Le service client répond aussi par téléphone.
Cordialement,
Tom Müller`;

const E2_1_CE_EMAIL_POOL_13 = buildExpressPool("e2-1-ce-email-13", [
  q({
    id: "cem-q1",
    textQ: "Combien de pièces ?",
    text: ["Six", "Dix", "Aucune"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "appartement de _________ pièce(s)",
    fill: "six",
    vfQ: "C'est six pièce(s).",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "À quel étage ?",
    text: ["Au rez-de-chaussée étage", "Au sous-sol", "Au 30e"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "au _________ étage",
    fill: "rez-de-chaussée",
    vfQ: "Au rez-de-chaussée étage.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Dans quelle ville ?",
    text: ["À Payerne", "À Paris", "À Rome"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "à _________.",
    fill: "Payerne",
    vfQ: "À Payerne.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Combien coûte le loyer ?",
    text: ["1800 francs", "50 francs", "10000 francs"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le loyer est de _________ francs.",
    fill: "1800",
    vfQ: "1800 francs.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle particularité ?",
    text: ["Garage", "Une piscine", "Un cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "un(e) _________.",
    fill: "garage",
    vfQ: "Il y a garage.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Proche de quoi ?",
    text: ["Campagne", "L'océan", "Un volcan"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "proche de _________.",
    fill: "campagne",
    vfQ: "Proche de campagne.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quand est-ce disponible ?",
    text: ["Mai", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "à partir du _________.",
    fill: "mai",
    vfQ: "Disponible mai.",
    vfC: 0,
  }),
]);
const E2_1_CE_EMAIL_TEXT_14 = `De : Julie Petit

Objet : Appartement lumineux

Bonjour,

Je vous écris au sujet de mon logement.
C'est un appartement de trois pièce(s) au douzième étage à Aigle.
Le loyer est de 1050 francs par mois.
Il y a un(e) double vitrage. C'est proche de vignobles.
Disponible à partir du mars.

Respectez la file d'attente, s'il vous plaît.
Les personnes à mobilité réduite sont prioritaires.
En cas de perte d'objet, passez à l'accueil.
Cordialement,
Julie Petit`;

const E2_1_CE_EMAIL_POOL_14 = buildExpressPool("e2-1-ce-email-14", [
  q({
    id: "cem-q1",
    textQ: "Combien de pièces ?",
    text: ["Trois", "Dix", "Aucune"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "appartement de _________ pièce(s)",
    fill: "trois",
    vfQ: "C'est trois pièce(s).",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "À quel étage ?",
    text: ["Au douzième étage", "Au sous-sol", "Au 30e"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "au _________ étage",
    fill: "douzième",
    vfQ: "Au douzième étage.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Dans quelle ville ?",
    text: ["À Aigle", "À Paris", "À Rome"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "à _________.",
    fill: "Aigle",
    vfQ: "À Aigle.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Combien coûte le loyer ?",
    text: ["1050 francs", "50 francs", "10000 francs"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le loyer est de _________ francs.",
    fill: "1050",
    vfQ: "1050 francs.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle particularité ?",
    text: ["Double vitrage", "Une piscine", "Un cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "un(e) _________.",
    fill: "double vitrage",
    vfQ: "Il y a double vitrage.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Proche de quoi ?",
    text: ["Vignobles", "L'océan", "Un volcan"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "proche de _________.",
    fill: "vignobles",
    vfQ: "Proche de vignobles.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quand est-ce disponible ?",
    text: ["Mars", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "à partir du _________.",
    fill: "mars",
    vfQ: "Disponible mars.",
    vfC: 0,
  }),
]);
const E2_1_CE_EMAIL_TEXT_15 = `De : Omar Hassan

Objet : Colocation cherchée

Bonjour,

Je vous écris au sujet de mon logement.
C'est un appartement de quatre pièce(s) au treizième étage à Morges.
Le loyer est de 1300 francs par mois.
Il y a un(e) bureau. C'est proche de lac.
Disponible à partir du avril.

Le service client répond aussi par téléphone.
Merci de lire ce message jusqu'à la fin.
Les informations importantes sont déjà indiquées plus haut.
Cordialement,
Omar Hassan`;

const E2_1_CE_EMAIL_POOL_15 = buildExpressPool("e2-1-ce-email-15", [
  q({
    id: "cem-q1",
    textQ: "Combien de pièces ?",
    text: ["Quatre", "Dix", "Aucune"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "appartement de _________ pièce(s)",
    fill: "quatre",
    vfQ: "C'est quatre pièce(s).",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "À quel étage ?",
    text: ["Au treizième étage", "Au sous-sol", "Au 30e"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "au _________ étage",
    fill: "treizième",
    vfQ: "Au treizième étage.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Dans quelle ville ?",
    text: ["À Morges", "À Paris", "À Rome"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "à _________.",
    fill: "Morges",
    vfQ: "À Morges.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Combien coûte le loyer ?",
    text: ["1300 francs", "50 francs", "10000 francs"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le loyer est de _________ francs.",
    fill: "1300",
    vfQ: "1300 francs.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle particularité ?",
    text: ["Bureau", "Une piscine", "Un cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "un(e) _________.",
    fill: "bureau",
    vfQ: "Il y a bureau.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Proche de quoi ?",
    text: ["Lac", "L'océan", "Un volcan"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "proche de _________.",
    fill: "lac",
    vfQ: "Proche de lac.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quand est-ce disponible ?",
    text: ["Avril", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "à partir du _________.",
    fill: "avril",
    vfQ: "Disponible avril.",
    vfC: 0,
  }),
]);
const E2_1_CE_EMAIL_TEXT_16 = `De : Clara Rossi

Objet : Visite possible

Bonjour,

Je vous écris au sujet de mon logement.
C'est un appartement de deux pièce(s) au quatorzième étage à Gland.
Le loyer est de 1100 francs par mois.
Il y a un(e) balcon. C'est proche de CERN.
Disponible à partir du mercredi.

Je reste près de mon téléphone aujourd'hui.
Dis-moi si tu as besoin d'autre chose.
On peut aussi en parler demain matin.
Cordialement,
Clara Rossi`;

const E2_1_CE_EMAIL_POOL_16 = buildExpressPool("e2-1-ce-email-16", [
  q({
    id: "cem-q1",
    textQ: "Combien de pièces ?",
    text: ["Deux", "Dix", "Aucune"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "appartement de _________ pièce(s)",
    fill: "deux",
    vfQ: "C'est deux pièce(s).",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "À quel étage ?",
    text: ["Au quatorzième étage", "Au sous-sol", "Au 30e"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "au _________ étage",
    fill: "quatorzième",
    vfQ: "Au quatorzième étage.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Dans quelle ville ?",
    text: ["À Gland", "À Paris", "À Rome"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "à _________.",
    fill: "Gland",
    vfQ: "À Gland.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Combien coûte le loyer ?",
    text: ["1100 francs", "50 francs", "10000 francs"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le loyer est de _________ francs.",
    fill: "1100",
    vfQ: "1100 francs.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle particularité ?",
    text: ["Balcon", "Une piscine", "Un cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "un(e) _________.",
    fill: "balcon",
    vfQ: "Il y a balcon.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Proche de quoi ?",
    text: ["Cern", "L'océan", "Un volcan"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "proche de _________.",
    fill: "CERN",
    vfQ: "Proche de CERN.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quand est-ce disponible ?",
    text: ["Mercredi", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "à partir du _________.",
    fill: "mercredi",
    vfQ: "Disponible mercredi.",
    vfC: 0,
  }),
]);
const E2_1_CE_EMAIL_TEXT_17 = `De : Yann Leroy

Objet : Location longue durée

Bonjour,

Je vous écris au sujet de mon logement.
C'est un appartement de quatre pièce(s) au quinzième étage à Rolle.
Le loyer est de 1250 francs par mois.
Il y a un(e) terrasse. C'est proche de plage.
Disponible à partir du année.

Le lieu est facile à trouver avec les indications.
Pensez à arriver un peu en avance.
Gardez ce texte pour vous en souvenir.
Cordialement,
Yann Leroy`;

const E2_1_CE_EMAIL_POOL_17 = buildExpressPool("e2-1-ce-email-17", [
  q({
    id: "cem-q1",
    textQ: "Combien de pièces ?",
    text: ["Quatre", "Dix", "Aucune"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "appartement de _________ pièce(s)",
    fill: "quatre",
    vfQ: "C'est quatre pièce(s).",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "À quel étage ?",
    text: ["Au quinzième étage", "Au sous-sol", "Au 30e"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "au _________ étage",
    fill: "quinzième",
    vfQ: "Au quinzième étage.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Dans quelle ville ?",
    text: ["À Rolle", "À Paris", "À Rome"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "à _________.",
    fill: "Rolle",
    vfQ: "À Rolle.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Combien coûte le loyer ?",
    text: ["1250 francs", "50 francs", "10000 francs"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le loyer est de _________ francs.",
    fill: "1250",
    vfQ: "1250 francs.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle particularité ?",
    text: ["Terrasse", "Une piscine", "Un cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "un(e) _________.",
    fill: "terrasse",
    vfQ: "Il y a terrasse.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Proche de quoi ?",
    text: ["Plage", "L'océan", "Un volcan"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "proche de _________.",
    fill: "plage",
    vfQ: "Proche de plage.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quand est-ce disponible ?",
    text: ["Année", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "à partir du _________.",
    fill: "année",
    vfQ: "Disponible année.",
    vfC: 0,
  }),
]);
const E2_1_CE_EMAIL_TEXT_18 = `De : Inès Moreau

Objet : Petit appartement

Bonjour,

Je vous écris au sujet de mon logement.
C'est un appartement de deux pièce(s) au seizième étage à Carouge.
Le loyer est de 1080 francs par mois.
Il y a un(e) charme ancien. C'est proche de Genève.
Disponible à partir du juin.

Merci encore pour votre compréhension.
Conservez le numéro de contact indiqué.
Tout est organisé pour que ce soit simple.
Cordialement,
Inès Moreau`;

const E2_1_CE_EMAIL_POOL_18 = buildExpressPool("e2-1-ce-email-18", [
  q({
    id: "cem-q1",
    textQ: "Combien de pièces ?",
    text: ["Deux", "Dix", "Aucune"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "appartement de _________ pièce(s)",
    fill: "deux",
    vfQ: "C'est deux pièce(s).",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "À quel étage ?",
    text: ["Au seizième étage", "Au sous-sol", "Au 30e"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "au _________ étage",
    fill: "seizième",
    vfQ: "Au seizième étage.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Dans quelle ville ?",
    text: ["À Carouge", "À Paris", "À Rome"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "à _________.",
    fill: "Carouge",
    vfQ: "À Carouge.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Combien coûte le loyer ?",
    text: ["1080 francs", "50 francs", "10000 francs"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le loyer est de _________ francs.",
    fill: "1080",
    vfQ: "1080 francs.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle particularité ?",
    text: ["Charme ancien", "Une piscine", "Un cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "un(e) _________.",
    fill: "charme ancien",
    vfQ: "Il y a charme ancien.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Proche de quoi ?",
    text: ["Genève", "L'océan", "Un volcan"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "proche de _________.",
    fill: "Genève",
    vfQ: "Proche de Genève.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quand est-ce disponible ?",
    text: ["Juin", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "à partir du _________.",
    fill: "juin",
    vfQ: "Disponible juin.",
    vfC: 0,
  }),
]);
const E2_1_CE_EMAIL_TEXT_19 = `De : Victor Pop

Objet : Appartement proche gare

Bonjour,

Je vous écris au sujet de mon logement.
C'est un appartement de trois pièce(s) au dix-septième étage à Thônex.
Le loyer est de 1180 francs par mois.
Il y a un(e) parking. C'est proche de tram.
Disponible à partir du juillet.

Conservez le numéro de contact indiqué.
Tout est organisé pour que ce soit simple.
À bientôt, et merci de votre lecture.
Cordialement,
Victor Pop`;

const E2_1_CE_EMAIL_POOL_19 = buildExpressPool("e2-1-ce-email-19", [
  q({
    id: "cem-q1",
    textQ: "Combien de pièces ?",
    text: ["Trois", "Dix", "Aucune"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "appartement de _________ pièce(s)",
    fill: "trois",
    vfQ: "C'est trois pièce(s).",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "À quel étage ?",
    text: ["Au dix-septième étage", "Au sous-sol", "Au 30e"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "au _________ étage",
    fill: "dix-septième",
    vfQ: "Au dix-septième étage.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Dans quelle ville ?",
    text: ["À Thônex", "À Paris", "À Rome"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "à _________.",
    fill: "Thônex",
    vfQ: "À Thônex.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Combien coûte le loyer ?",
    text: ["1180 francs", "50 francs", "10000 francs"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le loyer est de _________ francs.",
    fill: "1180",
    vfQ: "1180 francs.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle particularité ?",
    text: ["Parking", "Une piscine", "Un cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "un(e) _________.",
    fill: "parking",
    vfQ: "Il y a parking.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Proche de quoi ?",
    text: ["Tram", "L'océan", "Un volcan"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "proche de _________.",
    fill: "tram",
    vfQ: "Proche de tram.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quand est-ce disponible ?",
    text: ["Juillet", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "à partir du _________.",
    fill: "juillet",
    vfQ: "Disponible juillet.",
    vfC: 0,
  }),
]);
const E2_1_CE_EMAIL_TEXT_20 = `De : Maya Singh

Objet : Logement neuf

Bonjour,

Je vous écris au sujet de mon logement.
C'est un appartement de quatre pièce(s) au dix-huitième étage à Plan-les-Ouates.
Le loyer est de 1450 francs par mois.
Il y a un(e) isolation. C'est proche de entreprises.
Disponible à partir du septembre.

Vous pouvez venir accompagné(e) si vous le souhaitez.
Un plan simple est disponible à l'accueil.
N'oubliez pas de vérifier la date et l'heure.
Cordialement,
Maya Singh`;

const E2_1_CE_EMAIL_POOL_20 = buildExpressPool("e2-1-ce-email-20", [
  q({
    id: "cem-q1",
    textQ: "Combien de pièces ?",
    text: ["Quatre", "Dix", "Aucune"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "appartement de _________ pièce(s)",
    fill: "quatre",
    vfQ: "C'est quatre pièce(s).",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "À quel étage ?",
    text: ["Au dix-huitième étage", "Au sous-sol", "Au 30e"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "au _________ étage",
    fill: "dix-huitième",
    vfQ: "Au dix-huitième étage.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Dans quelle ville ?",
    text: ["À Plan-les-Ouates", "À Paris", "À Rome"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "à _________.",
    fill: "Plan-les-Ouates",
    vfQ: "À Plan-les-Ouates.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Combien coûte le loyer ?",
    text: ["1450 francs", "50 francs", "10000 francs"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le loyer est de _________ francs.",
    fill: "1450",
    vfQ: "1450 francs.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle particularité ?",
    text: ["Isolation", "Une piscine", "Un cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "un(e) _________.",
    fill: "isolation",
    vfQ: "Il y a isolation.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Proche de quoi ?",
    text: ["Entreprises", "L'océan", "Un volcan"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "proche de _________.",
    fill: "entreprises",
    vfQ: "Proche de entreprises.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quand est-ce disponible ?",
    text: ["Septembre", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "à partir du _________.",
    fill: "septembre",
    vfQ: "Disponible septembre.",
    vfC: 0,
  }),
]);

export const E2_1_CE_EMAIL: CommunicationExercise[] = [
  readingPoolExercise({
  id: "e2-1-ce-email-1",
  readingText: E2_1_CE_EMAIL_TEXT_1,
  questionPool: E2_1_CE_EMAIL_POOL_1,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e2-1-ce-email-2",
  readingText: E2_1_CE_EMAIL_TEXT_2,
  questionPool: E2_1_CE_EMAIL_POOL_2,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e2-1-ce-email-3",
  readingText: E2_1_CE_EMAIL_TEXT_3,
  questionPool: E2_1_CE_EMAIL_POOL_3,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e2-1-ce-email-4",
  readingText: E2_1_CE_EMAIL_TEXT_4,
  questionPool: E2_1_CE_EMAIL_POOL_4,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e2-1-ce-email-5",
  readingText: E2_1_CE_EMAIL_TEXT_5,
  questionPool: E2_1_CE_EMAIL_POOL_5,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e2-1-ce-email-6",
  readingText: E2_1_CE_EMAIL_TEXT_6,
  questionPool: E2_1_CE_EMAIL_POOL_6,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e2-1-ce-email-7",
  readingText: E2_1_CE_EMAIL_TEXT_7,
  questionPool: E2_1_CE_EMAIL_POOL_7,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e2-1-ce-email-8",
  readingText: E2_1_CE_EMAIL_TEXT_8,
  questionPool: E2_1_CE_EMAIL_POOL_8,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e2-1-ce-email-9",
  readingText: E2_1_CE_EMAIL_TEXT_9,
  questionPool: E2_1_CE_EMAIL_POOL_9,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e2-1-ce-email-10",
  readingText: E2_1_CE_EMAIL_TEXT_10,
  questionPool: E2_1_CE_EMAIL_POOL_10,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e2-1-ce-email-11",
  readingText: E2_1_CE_EMAIL_TEXT_11,
  questionPool: E2_1_CE_EMAIL_POOL_11,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e2-1-ce-email-12",
  readingText: E2_1_CE_EMAIL_TEXT_12,
  questionPool: E2_1_CE_EMAIL_POOL_12,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e2-1-ce-email-13",
  readingText: E2_1_CE_EMAIL_TEXT_13,
  questionPool: E2_1_CE_EMAIL_POOL_13,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e2-1-ce-email-14",
  readingText: E2_1_CE_EMAIL_TEXT_14,
  questionPool: E2_1_CE_EMAIL_POOL_14,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e2-1-ce-email-15",
  readingText: E2_1_CE_EMAIL_TEXT_15,
  questionPool: E2_1_CE_EMAIL_POOL_15,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e2-1-ce-email-16",
  readingText: E2_1_CE_EMAIL_TEXT_16,
  questionPool: E2_1_CE_EMAIL_POOL_16,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e2-1-ce-email-17",
  readingText: E2_1_CE_EMAIL_TEXT_17,
  questionPool: E2_1_CE_EMAIL_POOL_17,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e2-1-ce-email-18",
  readingText: E2_1_CE_EMAIL_TEXT_18,
  questionPool: E2_1_CE_EMAIL_POOL_18,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e2-1-ce-email-19",
  readingText: E2_1_CE_EMAIL_TEXT_19,
  questionPool: E2_1_CE_EMAIL_POOL_19,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e2-1-ce-email-20",
  readingText: E2_1_CE_EMAIL_TEXT_20,
  questionPool: E2_1_CE_EMAIL_POOL_20,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
];

export const E2_1_PE_EMAIL: ExpressPePrompt[] = [
  {
    id: "e2-1-pee-1",
    title: "Appartement à un ami",
    situation: "",
    sourceMessage: {
      from: "Antoine",
      subject: "Je viens chez toi",
      body: `Salut,
Je viens te voir samedi. Tu peux me décrire ton logement et m'envoyer ton adresse ?
Antoine`,
    },
    instruction: "Répondez à cet e-mail en décrivant votre appartement ou votre maison. Donnez aussi votre adresse et une indication pour venir.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-1-pee-2",
    title: "Appartement Le Florence",
    situation: "",
    sourceMessage: {
      from: "Agence Centre",
      subject: "Annonce Le Florence",
      body: `Bonjour,
Appartement deux pièces disponible dans l'immeuble Le Florence, proche du tram et des commerces. Visites possibles cette semaine.
Merci de répondre en indiquant vos questions sur la surface, le prix, l'étage et la date de visite.
Cordialement`,
    },
    instruction: "Répondez à l'agence pour poser des questions sur le logement dans l'immeuble Le Florence. Demandez la surface, le prix, l'étage et la date de visite.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-1-pee-3",
    title: "Demande de visite",
    situation: "",
    sourceMessage: {
      from: "Agence Soleil",
      subject: "Studio disponible",
      body: `Bonjour,
Nous proposons un studio meublé rue des Fleurs. Il est disponible à partir du 1er septembre.
Merci de répondre avec vos disponibilités et une question sur le quartier.
Agence Soleil`,
    },
    instruction: "Répondez à l'agence pour demander une visite du studio annonce. Indiquez vos disponibilités et posez une question sur le quartier.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-1-pee-4",
    title: "Adresse precise",
    situation: "",
    sourceMessage: {
      from: "Livraison Express",
      subject: "Adresse à confirmer",
      body: `Bonjour,
Nous devons livrer votre colis demain. Merci de confirmer votre adresse et les informations d'acces.
Livraison Express`,
    },
    instruction: "Répondez au livreur avec votre adresse complète. Ajoutez l'étage, le code et une indication simple pour trouver la porte.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-1-pee-5",
    title: "Chambre en colocation",
    situation: "",
    sourceMessage: {
      from: "Colocation Lyon",
      subject: "Chambre libre",
      body: `Bonjour,
Une chambre se libere dans notre colocation de trois personnes. La chambre est meublée et proche du metro.
Merci de répondre en vous présentant rapidement et en posant vos questions sur la chambre, le loyer et les règles.
Les colocataires`,
    },
    instruction: "Répondez à Colocation Lyon pour vous présenter et demander des informations sur la chambre. Présentez-vous rapidement et posez des questions sur le loyer et les règles.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-1-pee-6",
    title: "Maison de vacances",
    situation: "",
    sourceMessage: {
      from: "Papa",
      subject: "Maison pour les vacances",
      body: `Bonjour,
Tu as reserve la maison ? Peux-tu nous dire comment elle est et ou elle se trouve ?
Papa`,
    },
    instruction: "Répondez à votre famille en décrivant la maison de vacances. Parlez des pièces, du jardin, des lits et de l'adresse.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-1-pee-7",
    title: "Residence étudiante",
    situation: "",
    sourceMessage: {
      from: "Service logement",
      subject: "Residences étudiantes",
      body: `Bonjour,
Nos residences proposent des chambres simples et des studios pour les étudiants.
Merci de répondre en indiquant vos questions sur le type de chambre, le prix et les transports proches.
Cordialement`,
    },
    instruction: "Répondez au service pour demander des informations sur une résidence étudiante. Demandez le type de chambre, le prix et les transports proches.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-1-pee-8",
    title: "Nouveau logement",
    situation: "",
    sourceMessage: {
      from: "Ines",
      subject: "Alors, ton demenagement ?",
      body: `Salut,
Tu as demenage ? Raconte-moi ton nouveau logement.
Ines`,
    },
    instruction: "Répondez à un ami en lui parlant de votre nouveau logement. Donnez l'adresse, décrivez deux pièces et expliquez ce que vous aimez.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-1-pee-9",
    title: "Location courte duree",
    situation: "",
    sourceMessage: {
      from: "Gite des Pins",
      subject: "Disponibilites",
      body: `Bonjour,
Nous avons encore quelques disponibilités pour des courts sejours en octobre.
Merci de répondre en indiquant les dates, le nombre de personnes et le type de logement souhaité.
Cordialement`,
    },
    instruction: "Répondez au Gîte des Pins pour demander une location courte durée. Précisez les dates, le nombre de personnes et le type de logement souhaité.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-1-pee-10",
    title: "Logement calme",
    situation: "",
    sourceMessage: {
      from: "Agence du Parc",
      subject: "Appartements disponibles",
      body: `Bonjour,
Nous avons plusieurs appartements disponibles pres du centre-ville.
Merci de répondre avec vos questions sur le bruit, l'étage et les voisins.
Agence du Parc`,
    },
    instruction: "Répondez à l'agence pour expliquer que vous cherchez un logement calme. Posez des questions sur le bruit, l'étage et les voisins.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-1-pee-11",
    title: "Plan pour un ami",
    situation: "",
    sourceMessage: {
      from: "Victor",
      subject: "Je dors chez toi",
      body: `Salut,
J'arrive tard vendredi. Tu peux m'expliquer rapidement comment est ta maison ?
Victor`,
    },
    instruction: "Répondez à cet e-mail en expliquant le plan de votre maison. Dites ou sont l'entrée, la cuisine, le salon et la chambre d'amis.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-1-pee-12",
    title: "Annonce à corriger",
    situation: "",
    sourceMessage: {
      from: "M. Caron",
      subject: "Appartement T2",
      body: `Bonjour,
Je loue un T2 lumineux au deuxieme étage, disponible rapidement.
Merci de répondre avec vos questions sur les charges et la cuisine équipée.
Cordialement,
M. Caron`,
    },
    instruction: "Répondez au propriétaire en demandant des précisions sur l'annonce. Demandez si les charges sont comprises et si la cuisine est équipée.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-1-pee-13",
    title: "Appartement meublé",
    situation: "",
    sourceMessage: {
      from: "Location Directe",
      subject: "Appartement meublé",
      body: `Bonjour,
Appartement meublé à louer pres de la gare. Photos disponibles sur demande.
Merci de répondre avec vos questions sur les meubles, l'adresse exacte et la date possible d'entrée.
Location Directe`,
    },
    instruction: "Répondez à Location Directe pour savoir quels meubles sont dans l'appartement. Demandez aussi l'adresse exacte et la date possible d'entrée.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-1-pee-14",
    title: "Problème de taille",
    situation: "",
    sourceMessage: {
      from: "Lucie",
      subject: "Ton appartement",
      body: `Salut,
Tu dis que ton appartement est petit. Comment est-il exactement ?
Lucie`,
    },
    instruction: "Répondez à votre ami en expliquant que votre appartement est petit. Décrivez les pièces et dites comment vous organisez l'espace.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-1-pee-15",
    title: "Demande de dossier",
    situation: "",
    sourceMessage: {
      from: "Agence Nord",
      subject: "Visite et dossier",
      body: `Bonjour,
Après la visite, les candidats intéressés peuvent envoyer un dossier complet.
Merci de répondre avec votre question sur les documents nécessaires pour le dossier.
Cordialement`,
    },
    instruction: "Répondez à l'agence et dites que le logement vous intéresse. Posez une question sur les documents nécessaires pour le dossier.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-1-pee-16",
    title: "Colocation à proposer",
    situation: "",
    sourceMessage: {
      from: "Marta",
      subject: "Recherche chambre",
      body: `Bonjour,
Je cherche une chambre en colocation pres du centre. Avez-vous une place disponible ?
Marta`,
    },
    instruction: "Répondez à Marta pour proposer votre colocation. Décrivez votre appartement, la chambre libre et le quartier.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-1-pee-17",
    title: "Maison avec jardin",
    situation: "",
    sourceMessage: {
      from: "Groupe amis",
      subject: "Barbecue chez toi",
      body: `Salut,
On vient samedi pour le barbecue. Peux-tu nous rappeler ton adresse et nous décrire un peu la maison ?`,
    },
    instruction: "Répondez à un message d'amis en décrivant votre maison avec jardin. Donnez l'adresse générale et expliquez comment venir en bus.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-1-pee-18",
    title: "Logement ideal",
    situation: "",
    sourceMessage: {
      from: "Forum A1",
      subject: "Logement ideal",
      body: `Bonjour,
Pour l'activite écrite, envoyez un texte sur votre logement ideal.
Le professeur`,
    },
    instruction: "Répondez au forum du cours avec un e-mail sur votre logement ideal. Décrivez la taille, le lieu, les pièces et un détail important.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-1-pee-19",
    title: "Quartier pratique",
    situation: "",
    sourceMessage: {
      from: "Cousin Marc",
      subject: "Chercher un logement",
      body: `Salut,
Je cherche un logement dans ton quartier. Est-ce que c'est pratique ?
Marc`,
    },
    instruction: "Répondez à votre cousin qui cherche un logement pres de chez vous. Décrivez votre quartier, les transports et les commerces.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-1-pee-20",
    title: "Confirmation d'adresse",
    situation: "",
    sourceMessage: {
      from: "Administration",
      subject: "Adresse actuelle",
      body: `Bonjour,
Merci de confirmer votre adresse actuelle et le type de logement où vous habitez.
Cordialement`,
    },
    instruction: "Répondez au service administratif en confirmant votre adresse actuelle. Décrivez rapidement le type de logement pour compléter le dossier.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },

];

/* ════════════════════════════════════════════════════════════════════════════
   E2.2 — Avoir un problème domestique
   ════════════════════════════════════════════════════════════════════════════ */

const E2_2_CE_EMAIL_TEXT_1 = `De : Lucas Martin

Objet : Problème de chauffage

Bonjour,

Je vous signale un problème dans mon logement.
Problème : la chaudière.
Cela dure depuis trois jours. C'est urgent.
Pouvez-vous envoyer un technicien ?
Merci d'intervenir lundi.

Les horaires habituels restent les mêmes.
Merci de votre attention et de votre patience.
Vous pouvez venir accompagné(e) si vous le souhaitez.
Cordialement,
Lucas Martin`;

const E2_2_CE_EMAIL_POOL_1 = buildExpressPool("e2-2-ce-email-1", [
  q({
    id: "cem-q1",
    textQ: "Quel est le problème ?",
    text: ["La chaudière", "Une fête", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Problème : _________.",
    fill: "la",
    vfQ: "C'est la chaudière.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Depuis combien de temps ?",
    text: ["Trois jours", "Dix ans", "Jamais"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "depuis _________.",
    fill: "trois",
    vfQ: "Depuis trois jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quel est le niveau d'urgence ?",
    text: ["Urgent", "Aucun", "Pas grave"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "urgent",
    vfQ: "C'est urgent.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quelle action est demandée ?",
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
    id: "cem-q5",
    textQ: "Quand interviendra-t-on ?",
    text: ["Lundi", "Jamais", "L'an prochain"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "intervenir _________.",
    fill: "lundi",
    vfQ: "Intervention lundi.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Problème de chauffage", "Une invitation", "Un menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Problème",
    vfQ: "L'objet est Problème de chauffage.",
    vfC: 0,
  }),
]);
const E2_2_CE_EMAIL_TEXT_2 = `De : Emma Dubois

Objet : Fuite d'eau

Bonjour,

Je vous signale un problème dans mon logement.
Problème : une fuite sous l'évier.
Cela dure depuis ce matin. C'est très urgent.
Pouvez-vous intervenir rapidement ?
Merci d'intervenir aujourd'hui.

Les informations importantes sont déjà indiquées plus haut.
En cas de question, vous pouvez écrire ou téléphoner.
Une confirmation sera envoyée ensuite.
Cordialement,
Emma Dubois`;

const E2_2_CE_EMAIL_POOL_2 = buildExpressPool("e2-2-ce-email-2", [
  q({
    id: "cem-q1",
    textQ: "Quel est le problème ?",
    text: ["Une fuite sous l'évier", "Une fête", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Problème : _________.",
    fill: "une",
    vfQ: "C'est une fuite sous l'évier.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Depuis combien de temps ?",
    text: ["Ce matin", "Dix ans", "Jamais"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "depuis _________.",
    fill: "ce",
    vfQ: "Depuis ce matin.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quel est le niveau d'urgence ?",
    text: ["Très urgent", "Aucun", "Pas grave"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "très urgent",
    vfQ: "C'est très urgent.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quelle action est demandée ?",
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
    id: "cem-q5",
    textQ: "Quand interviendra-t-on ?",
    text: ["Aujourd'hui", "Jamais", "L'an prochain"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "intervenir _________.",
    fill: "aujourd'hui",
    vfQ: "Intervention aujourd'hui.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Fuite d'eau", "Une invitation", "Un menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Fuite",
    vfQ: "L'objet est Fuite d'eau.",
    vfC: 0,
  }),
]);
const E2_2_CE_EMAIL_TEXT_3 = `De : Paul Garcia

Objet : Serrure cassée

Bonjour,

Je vous signale un problème dans mon logement.
Problème : la porte ne ferme plus.
Cela dure depuis une semaine. C'est important.
Pouvez-vous changer la serrure ?
Merci d'intervenir cette semaine.

Nous restons disponibles pour vous aider.
Les horaires habituels restent les mêmes.
Merci de votre attention et de votre patience.
Cordialement,
Paul Garcia`;

const E2_2_CE_EMAIL_POOL_3 = buildExpressPool("e2-2-ce-email-3", [
  q({
    id: "cem-q1",
    textQ: "Quel est le problème ?",
    text: ["La porte ne ferme plus", "Une fête", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Problème : _________.",
    fill: "la",
    vfQ: "C'est la porte ne ferme plus.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Depuis combien de temps ?",
    text: ["Une semaine", "Dix ans", "Jamais"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "depuis _________.",
    fill: "une",
    vfQ: "Depuis une semaine.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quel est le niveau d'urgence ?",
    text: ["Important", "Aucun", "Pas grave"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "important",
    vfQ: "C'est important.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quelle action est demandée ?",
    text: ["Changer la serrure", "Rien", "Un voyage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pouvez-vous _________ ?",
    fill: "changer",
    vfQ: "Demande : changer la serrure.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quand interviendra-t-on ?",
    text: ["Cette semaine", "Jamais", "L'an prochain"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "intervenir _________.",
    fill: "cette",
    vfQ: "Intervention cette semaine.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Serrure cassée", "Une invitation", "Un menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Serrure",
    vfQ: "L'objet est Serrure cassée.",
    vfC: 0,
  }),
]);
const E2_2_CE_EMAIL_TEXT_4 = `De : Sara Kim

Objet : Plus d'électricité

Bonjour,

Je vous signale un problème dans mon logement.
Problème : pas de courant dans la cuisine.
Cela dure depuis hier. C'est urgent.
Pouvez-vous vérifier l'installation ?
Merci d'intervenir demain.

Le trajet est simple, ne t'inquiète pas.
Passe le bonjour à tout le monde.
À très bientôt, prends soin de toi.
Cordialement,
Sara Kim`;

const E2_2_CE_EMAIL_POOL_4 = buildExpressPool("e2-2-ce-email-4", [
  q({
    id: "cem-q1",
    textQ: "Quel est le problème ?",
    text: ["Pas de courant dans la cuisine", "Une fête", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Problème : _________.",
    fill: "pas",
    vfQ: "C'est pas de courant dans la cuisine.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Depuis combien de temps ?",
    text: ["Hier", "Dix ans", "Jamais"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "depuis _________.",
    fill: "hier",
    vfQ: "Depuis hier.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quel est le niveau d'urgence ?",
    text: ["Urgent", "Aucun", "Pas grave"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "urgent",
    vfQ: "C'est urgent.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quelle action est demandée ?",
    text: ["Vérifier l'installation", "Rien", "Un voyage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pouvez-vous _________ ?",
    fill: "vérifier",
    vfQ: "Demande : vérifier l'installation.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quand interviendra-t-on ?",
    text: ["Demain", "Jamais", "L'an prochain"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "intervenir _________.",
    fill: "demain",
    vfQ: "Intervention demain.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Plus d'électricité", "Une invitation", "Un menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Plus",
    vfQ: "L'objet est Plus d'électricité.",
    vfC: 0,
  }),
]);
const E2_2_CE_EMAIL_TEXT_5 = `De : Tom Weber

Objet : Ascenseur en panne

Bonjour,

Je vous signale un problème dans mon logement.
Problème : l'ascenseur ne marche pas.
Cela dure depuis deux jours. C'est gênant.
Pouvez-vous appeler le réparateur ?
Merci d'intervenir vite.

Joignez les documents demandés si nécessaire.
Nous vous souhaitons une excellente journée.
Le service est également disponible en ligne.
Cordialement,
Tom Weber`;

const E2_2_CE_EMAIL_POOL_5 = buildExpressPool("e2-2-ce-email-5", [
  q({
    id: "cem-q1",
    textQ: "Quel est le problème ?",
    text: ["L'ascenseur ne marche pas", "Une fête", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Problème : _________.",
    fill: "l'ascenseur",
    vfQ: "C'est l'ascenseur ne marche pas.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Depuis combien de temps ?",
    text: ["Deux jours", "Dix ans", "Jamais"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "depuis _________.",
    fill: "deux",
    vfQ: "Depuis deux jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quel est le niveau d'urgence ?",
    text: ["Gênant", "Aucun", "Pas grave"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "gênant",
    vfQ: "C'est gênant.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quelle action est demandée ?",
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
    id: "cem-q5",
    textQ: "Quand interviendra-t-on ?",
    text: ["Vite", "Jamais", "L'an prochain"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "intervenir _________.",
    fill: "vite",
    vfQ: "Intervention vite.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Ascenseur en panne", "Une invitation", "Un menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Ascenseur",
    vfQ: "L'objet est Ascenseur en panne.",
    vfC: 0,
  }),
]);
const E2_2_CE_EMAIL_TEXT_6 = `De : Nina Costa

Objet : Toilettes bouchées

Bonjour,

Je vous signale un problème dans mon logement.
Problème : les WC sont bouchés.
Cela dure depuis aujourd'hui. C'est urgent.
Pouvez-vous envoyer un plombier ?
Merci d'intervenir cet après-midi.

À très bientôt, prends soin de toi.
C'est important pour moi, merci beaucoup.
Nous traitons votre demande rapidement.
Cordialement,
Nina Costa`;

const E2_2_CE_EMAIL_POOL_6 = buildExpressPool("e2-2-ce-email-6", [
  q({
    id: "cem-q1",
    textQ: "Quel est le problème ?",
    text: ["Les wc sont bouchés", "Une fête", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Problème : _________.",
    fill: "les",
    vfQ: "C'est les WC sont bouchés.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Depuis combien de temps ?",
    text: ["Aujourd'hui", "Dix ans", "Jamais"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "depuis _________.",
    fill: "aujourd'hui",
    vfQ: "Depuis aujourd'hui.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quel est le niveau d'urgence ?",
    text: ["Urgent", "Aucun", "Pas grave"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "urgent",
    vfQ: "C'est urgent.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quelle action est demandée ?",
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
    id: "cem-q5",
    textQ: "Quand interviendra-t-on ?",
    text: ["Cet après-midi", "Jamais", "L'an prochain"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "intervenir _________.",
    fill: "cet",
    vfQ: "Intervention cet après-midi.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Toilettes bouchées", "Une invitation", "Un menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Toilettes",
    vfQ: "L'objet est Toilettes bouchées.",
    vfC: 0,
  }),
]);
const E2_2_CE_EMAIL_TEXT_7 = `De : David Kim

Objet : Fenêtre cassée

Bonjour,

Je vous signale un problème dans mon logement.
Problème : la fenêtre du salon est fissurée.
Cela dure depuis la tempête d'hier. C'est important.
Pouvez-vous remplacer la vitre ?
Merci d'intervenir semaine prochaine.

Nous restons disponibles pour vous aider.
Les horaires habituels restent les mêmes.
Merci de votre attention et de votre patience.
Cordialement,
David Kim`;

const E2_2_CE_EMAIL_POOL_7 = buildExpressPool("e2-2-ce-email-7", [
  q({
    id: "cem-q1",
    textQ: "Quel est le problème ?",
    text: ["La fenêtre du salon est fissurée", "Une fête", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Problème : _________.",
    fill: "la",
    vfQ: "C'est la fenêtre du salon est fissurée.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Depuis combien de temps ?",
    text: ["La tempête d'hier", "Dix ans", "Jamais"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "depuis _________.",
    fill: "la",
    vfQ: "Depuis la tempête d'hier.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quel est le niveau d'urgence ?",
    text: ["Important", "Aucun", "Pas grave"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "important",
    vfQ: "C'est important.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quelle action est demandée ?",
    text: ["Remplacer la vitre", "Rien", "Un voyage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pouvez-vous _________ ?",
    fill: "remplacer",
    vfQ: "Demande : remplacer la vitre.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quand interviendra-t-on ?",
    text: ["Semaine prochaine", "Jamais", "L'an prochain"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "intervenir _________.",
    fill: "semaine",
    vfQ: "Intervention semaine prochaine.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Fenêtre cassée", "Une invitation", "Un menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Fenêtre",
    vfQ: "L'objet est Fenêtre cassée.",
    vfC: 0,
  }),
]);
const E2_2_CE_EMAIL_TEXT_8 = `De : Hugo Blanc

Objet : Nuisances sonores

Bonjour,

Je vous signale un problème dans mon logement.
Problème : bruit la nuit du voisin.
Cela dure depuis un mois. C'est insupportable.
Pouvez-vous intervenir ?
Merci d'intervenir rapidement.

Vous pouvez répondre directement à ce message.
Merci de confirmer la bonne réception.
Joignez les documents demandés si nécessaire.
Cordialement,
Hugo Blanc`;

const E2_2_CE_EMAIL_POOL_8 = buildExpressPool("e2-2-ce-email-8", [
  q({
    id: "cem-q1",
    textQ: "Quel est le problème ?",
    text: ["Bruit la nuit du voisin", "Une fête", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Problème : _________.",
    fill: "bruit",
    vfQ: "C'est bruit la nuit du voisin.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Depuis combien de temps ?",
    text: ["Un mois", "Dix ans", "Jamais"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "depuis _________.",
    fill: "un",
    vfQ: "Depuis un mois.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quel est le niveau d'urgence ?",
    text: ["Insupportable", "Aucun", "Pas grave"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "insupportable",
    vfQ: "C'est insupportable.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quelle action est demandée ?",
    text: ["Intervenir", "Rien", "Un voyage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pouvez-vous _________ ?",
    fill: "intervenir",
    vfQ: "Demande : intervenir.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quand interviendra-t-on ?",
    text: ["Rapidement", "Jamais", "L'an prochain"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "intervenir _________.",
    fill: "rapidement",
    vfQ: "Intervention rapidement.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Nuisances sonores", "Une invitation", "Un menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Nuisances",
    vfQ: "L'objet est Nuisances sonores.",
    vfC: 0,
  }),
]);
const E2_2_CE_EMAIL_TEXT_9 = `De : Léa Bernard

Objet : Pas d'eau chaude

Bonjour,

Je vous signale un problème dans mon logement.
Problème : l'eau reste froide.
Cela dure depuis quatre jours. C'est urgent.
Pouvez-vous réparer la chaudière ?
Merci d'intervenir urgence.

Tout est organisé pour que ce soit simple.
À bientôt, et merci de votre lecture.
Je reste près de mon téléphone aujourd'hui.
Cordialement,
Léa Bernard`;

const E2_2_CE_EMAIL_POOL_9 = buildExpressPool("e2-2-ce-email-9", [
  q({
    id: "cem-q1",
    textQ: "Quel est le problème ?",
    text: ["L'eau reste froide", "Une fête", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Problème : _________.",
    fill: "l'eau",
    vfQ: "C'est l'eau reste froide.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Depuis combien de temps ?",
    text: ["Quatre jours", "Dix ans", "Jamais"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "depuis _________.",
    fill: "quatre",
    vfQ: "Depuis quatre jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quel est le niveau d'urgence ?",
    text: ["Urgent", "Aucun", "Pas grave"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "urgent",
    vfQ: "C'est urgent.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quelle action est demandée ?",
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
    id: "cem-q5",
    textQ: "Quand interviendra-t-on ?",
    text: ["Urgence", "Jamais", "L'an prochain"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "intervenir _________.",
    fill: "urgence",
    vfQ: "Intervention urgence.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Pas d'eau chaude", "Une invitation", "Un menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Pas",
    vfQ: "L'objet est Pas d'eau chaude.",
    vfC: 0,
  }),
]);
const E2_2_CE_EMAIL_TEXT_10 = `De : Marc Singh

Objet : Lave-linge en panne

Bonjour,

Je vous signale un problème dans mon logement.
Problème : le lave-linge ne démarre plus.
Cela dure depuis hier. C'est gênant.
Pouvez-vous envoyer un réparateur ?
Merci d'intervenir cette semaine.

C'est important pour moi, merci beaucoup.
Nous traitons votre demande rapidement.
Vous pouvez répondre directement à ce message.
Cordialement,
Marc Singh`;

const E2_2_CE_EMAIL_POOL_10 = buildExpressPool("e2-2-ce-email-10", [
  q({
    id: "cem-q1",
    textQ: "Quel est le problème ?",
    text: ["Le lave-linge ne démarre plus", "Une fête", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Problème : _________.",
    fill: "le",
    vfQ: "C'est le lave-linge ne démarre plus.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Depuis combien de temps ?",
    text: ["Hier", "Dix ans", "Jamais"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "depuis _________.",
    fill: "hier",
    vfQ: "Depuis hier.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quel est le niveau d'urgence ?",
    text: ["Gênant", "Aucun", "Pas grave"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "gênant",
    vfQ: "C'est gênant.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quelle action est demandée ?",
    text: ["Envoyer un réparateur", "Rien", "Un voyage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pouvez-vous _________ ?",
    fill: "envoyer",
    vfQ: "Demande : envoyer un réparateur.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quand interviendra-t-on ?",
    text: ["Cette semaine", "Jamais", "L'an prochain"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "intervenir _________.",
    fill: "cette",
    vfQ: "Intervention cette semaine.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Lave-linge en panne", "Une invitation", "Un menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Lave-linge",
    vfQ: "L'objet est Lave-linge en panne.",
    vfC: 0,
  }),
]);
const E2_2_CE_EMAIL_TEXT_11 = `De : Julie Petit

Objet : Odeur de gaz

Bonjour,

Je vous signale un problème dans mon logement.
Problème : odeur suspecte dans la cuisine.
Cela dure depuis maintenant. C'est très dangereux.
Pouvez-vous intervenir immédiatement ?
Merci d'intervenir tout de suite.

Les horaires habituels restent les mêmes.
Merci de votre attention et de votre patience.
Vous pouvez venir accompagné(e) si vous le souhaitez.
Cordialement,
Julie Petit`;

const E2_2_CE_EMAIL_POOL_11 = buildExpressPool("e2-2-ce-email-11", [
  q({
    id: "cem-q1",
    textQ: "Quel est le problème ?",
    text: ["Odeur suspecte dans la cuisine", "Une fête", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Problème : _________.",
    fill: "odeur",
    vfQ: "C'est odeur suspecte dans la cuisine.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Depuis combien de temps ?",
    text: ["Maintenant", "Dix ans", "Jamais"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "depuis _________.",
    fill: "maintenant",
    vfQ: "Depuis maintenant.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quel est le niveau d'urgence ?",
    text: ["Très dangereux", "Aucun", "Pas grave"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "très dangereux",
    vfQ: "C'est très dangereux.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quelle action est demandée ?",
    text: ["Intervenir immédiatement", "Rien", "Un voyage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pouvez-vous _________ ?",
    fill: "intervenir",
    vfQ: "Demande : intervenir immédiatement.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quand interviendra-t-on ?",
    text: ["Tout de suite", "Jamais", "L'an prochain"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "intervenir _________.",
    fill: "tout",
    vfQ: "Intervention tout de suite.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Odeur de gaz", "Une invitation", "Un menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Odeur",
    vfQ: "L'objet est Odeur de gaz.",
    vfC: 0,
  }),
]);
const E2_2_CE_EMAIL_TEXT_12 = `De : Omar Hassan

Objet : Cafards

Bonjour,

Je vous signale un problème dans mon logement.
Problème : des insectes dans la cuisine.
Cela dure depuis plusieurs jours. C'est urgent.
Pouvez-vous faire désinsectiser ?
Merci d'intervenir rapidement.

Les personnes à mobilité réduite sont prioritaires.
En cas de perte d'objet, passez à l'accueil.
Le service client répond aussi par téléphone.
Cordialement,
Omar Hassan`;

const E2_2_CE_EMAIL_POOL_12 = buildExpressPool("e2-2-ce-email-12", [
  q({
    id: "cem-q1",
    textQ: "Quel est le problème ?",
    text: ["Des insectes dans la cuisine", "Une fête", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Problème : _________.",
    fill: "des",
    vfQ: "C'est des insectes dans la cuisine.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Depuis combien de temps ?",
    text: ["Plusieurs jours", "Dix ans", "Jamais"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "depuis _________.",
    fill: "plusieurs",
    vfQ: "Depuis plusieurs jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quel est le niveau d'urgence ?",
    text: ["Urgent", "Aucun", "Pas grave"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "urgent",
    vfQ: "C'est urgent.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quelle action est demandée ?",
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
    id: "cem-q5",
    textQ: "Quand interviendra-t-on ?",
    text: ["Rapidement", "Jamais", "L'an prochain"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "intervenir _________.",
    fill: "rapidement",
    vfQ: "Intervention rapidement.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Cafards", "Une invitation", "Un menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Cafards",
    vfQ: "L'objet est Cafards.",
    vfC: 0,
  }),
]);
const E2_2_CE_EMAIL_TEXT_13 = `De : Clara Rossi

Objet : Moisissure

Bonjour,

Je vous signale un problème dans mon logement.
Problème : taches noires sur le mur.
Cela dure depuis deux mois. C'est mauvais pour la santé.
Pouvez-vous envoyer un expert ?
Merci d'intervenir bientôt.

Merci de lire ce message jusqu'à la fin.
Les informations importantes sont déjà indiquées plus haut.
En cas de question, vous pouvez écrire ou téléphoner.
Cordialement,
Clara Rossi`;

const E2_2_CE_EMAIL_POOL_13 = buildExpressPool("e2-2-ce-email-13", [
  q({
    id: "cem-q1",
    textQ: "Quel est le problème ?",
    text: ["Taches noires sur le mur", "Une fête", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Problème : _________.",
    fill: "taches",
    vfQ: "C'est taches noires sur le mur.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Depuis combien de temps ?",
    text: ["Deux mois", "Dix ans", "Jamais"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "depuis _________.",
    fill: "deux",
    vfQ: "Depuis deux mois.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quel est le niveau d'urgence ?",
    text: ["Mauvais pour la santé", "Aucun", "Pas grave"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "mauvais pour la santé",
    vfQ: "C'est mauvais pour la santé.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quelle action est demandée ?",
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
    id: "cem-q5",
    textQ: "Quand interviendra-t-on ?",
    text: ["Bientôt", "Jamais", "L'an prochain"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "intervenir _________.",
    fill: "bientôt",
    vfQ: "Intervention bientôt.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Moisissure", "Une invitation", "Un menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Moisissure",
    vfQ: "L'objet est Moisissure.",
    vfC: 0,
  }),
]);
const E2_2_CE_EMAIL_TEXT_14 = `De : Yann Leroy

Objet : Hotte en panne

Bonjour,

Je vous signale un problème dans mon logement.
Problème : la hotte ne marche plus.
Cela dure depuis une semaine. C'est gênant.
Pouvez-vous envoyer un électricien ?
Merci d'intervenir semaine prochaine.

Nous vous souhaitons une excellente journée.
Le service est également disponible en ligne.
Respectez la file d'attente, s'il vous plaît.
Cordialement,
Yann Leroy`;

const E2_2_CE_EMAIL_POOL_14 = buildExpressPool("e2-2-ce-email-14", [
  q({
    id: "cem-q1",
    textQ: "Quel est le problème ?",
    text: ["La hotte ne marche plus", "Une fête", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Problème : _________.",
    fill: "la",
    vfQ: "C'est la hotte ne marche plus.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Depuis combien de temps ?",
    text: ["Une semaine", "Dix ans", "Jamais"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "depuis _________.",
    fill: "une",
    vfQ: "Depuis une semaine.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quel est le niveau d'urgence ?",
    text: ["Gênant", "Aucun", "Pas grave"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "gênant",
    vfQ: "C'est gênant.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quelle action est demandée ?",
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
    id: "cem-q5",
    textQ: "Quand interviendra-t-on ?",
    text: ["Semaine prochaine", "Jamais", "L'an prochain"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "intervenir _________.",
    fill: "semaine",
    vfQ: "Intervention semaine prochaine.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Hotte en panne", "Une invitation", "Un menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Hotte",
    vfQ: "L'objet est Hotte en panne.",
    vfC: 0,
  }),
]);
const E2_2_CE_EMAIL_TEXT_15 = `De : Inès Moreau

Objet : Dégât des eaux

Bonjour,

Je vous signale un problème dans mon logement.
Problème : eau qui coule du plafond.
Cela dure depuis deux heures. C'est très urgent.
Pouvez-vous fermer la vanne ?
Merci d'intervenir immédiatement.

Je reste près de mon téléphone aujourd'hui.
Dis-moi si tu as besoin d'autre chose.
On peut aussi en parler demain matin.
Cordialement,
Inès Moreau`;

const E2_2_CE_EMAIL_POOL_15 = buildExpressPool("e2-2-ce-email-15", [
  q({
    id: "cem-q1",
    textQ: "Quel est le problème ?",
    text: ["Eau qui coule du plafond", "Une fête", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Problème : _________.",
    fill: "eau",
    vfQ: "C'est eau qui coule du plafond.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Depuis combien de temps ?",
    text: ["Deux heures", "Dix ans", "Jamais"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "depuis _________.",
    fill: "deux",
    vfQ: "Depuis deux heures.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quel est le niveau d'urgence ?",
    text: ["Très urgent", "Aucun", "Pas grave"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "très urgent",
    vfQ: "C'est très urgent.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quelle action est demandée ?",
    text: ["Fermer la vanne", "Rien", "Un voyage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pouvez-vous _________ ?",
    fill: "fermer",
    vfQ: "Demande : fermer la vanne.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quand interviendra-t-on ?",
    text: ["Immédiatement", "Jamais", "L'an prochain"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "intervenir _________.",
    fill: "immédiatement",
    vfQ: "Intervention immédiatement.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Dégât des eaux", "Une invitation", "Un menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Dégât",
    vfQ: "L'objet est Dégât des eaux.",
    vfC: 0,
  }),
]);
const E2_2_CE_EMAIL_TEXT_16 = `De : Antoine Blanc

Objet : Prises défectueuses

Bonjour,

Je vous signale un problème dans mon logement.
Problème : les prises ne fonctionnent plus.
Cela dure depuis ce matin. C'est urgent.
Pouvez-vous envoyer un électricien ?
Merci d'intervenir aujourd'hui.

On peut aussi en parler demain matin.
J'espère que tout se passe bien de ton côté.
N'hésite pas à me répondre quand tu peux.
Cordialement,
Antoine Blanc`;

const E2_2_CE_EMAIL_POOL_16 = buildExpressPool("e2-2-ce-email-16", [
  q({
    id: "cem-q1",
    textQ: "Quel est le problème ?",
    text: ["Les prises ne fonctionnent plus", "Une fête", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Problème : _________.",
    fill: "les",
    vfQ: "C'est les prises ne fonctionnent plus.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Depuis combien de temps ?",
    text: ["Ce matin", "Dix ans", "Jamais"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "depuis _________.",
    fill: "ce",
    vfQ: "Depuis ce matin.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quel est le niveau d'urgence ?",
    text: ["Urgent", "Aucun", "Pas grave"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "urgent",
    vfQ: "C'est urgent.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quelle action est demandée ?",
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
    id: "cem-q5",
    textQ: "Quand interviendra-t-on ?",
    text: ["Aujourd'hui", "Jamais", "L'an prochain"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "intervenir _________.",
    fill: "aujourd'hui",
    vfQ: "Intervention aujourd'hui.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Prises défectueuses", "Une invitation", "Un menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Prises",
    vfQ: "L'objet est Prises défectueuses.",
    vfC: 0,
  }),
]);
const E2_2_CE_EMAIL_TEXT_17 = `De : Salma Ben

Objet : Fumée dans les parties communes

Bonjour,

Je vous signale un problème dans mon logement.
Problème : le voisin fume dans le couloir.
Cela dure depuis longtemps. C'est gênant.
Pouvez-vous rappeler le règlement ?
Merci d'intervenir bientôt.

En cas de changement, un nouvel avis sera publié.
Bonne journée à toutes et à tous.
Merci encore pour votre compréhension.
Cordialement,
Salma Ben`;

const E2_2_CE_EMAIL_POOL_17 = buildExpressPool("e2-2-ce-email-17", [
  q({
    id: "cem-q1",
    textQ: "Quel est le problème ?",
    text: ["Le voisin fume dans le couloir", "Une fête", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Problème : _________.",
    fill: "le",
    vfQ: "C'est le voisin fume dans le couloir.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Depuis combien de temps ?",
    text: ["Longtemps", "Dix ans", "Jamais"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "depuis _________.",
    fill: "longtemps",
    vfQ: "Depuis longtemps.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quel est le niveau d'urgence ?",
    text: ["Gênant", "Aucun", "Pas grave"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "gênant",
    vfQ: "C'est gênant.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quelle action est demandée ?",
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
    id: "cem-q5",
    textQ: "Quand interviendra-t-on ?",
    text: ["Bientôt", "Jamais", "L'an prochain"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "intervenir _________.",
    fill: "bientôt",
    vfQ: "Intervention bientôt.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Fumée dans les parties communes", "Une invitation", "Un menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Fumée",
    vfQ: "L'objet est Fumée dans les parties communes.",
    vfC: 0,
  }),
]);
const E2_2_CE_EMAIL_TEXT_18 = `De : Victor Pop

Objet : Vitre cassée

Bonjour,

Je vous signale un problème dans mon logement.
Problème : vitre brisée par la grêle.
Cela dure depuis hier. C'est important.
Pouvez-vous envoyer un vitrier ?
Merci d'intervenir cette semaine.

Conservez le numéro de contact indiqué.
Tout est organisé pour que ce soit simple.
À bientôt, et merci de votre lecture.
Cordialement,
Victor Pop`;

const E2_2_CE_EMAIL_POOL_18 = buildExpressPool("e2-2-ce-email-18", [
  q({
    id: "cem-q1",
    textQ: "Quel est le problème ?",
    text: ["Vitre brisée par la grêle", "Une fête", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Problème : _________.",
    fill: "vitre",
    vfQ: "C'est vitre brisée par la grêle.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Depuis combien de temps ?",
    text: ["Hier", "Dix ans", "Jamais"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "depuis _________.",
    fill: "hier",
    vfQ: "Depuis hier.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quel est le niveau d'urgence ?",
    text: ["Important", "Aucun", "Pas grave"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "important",
    vfQ: "C'est important.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quelle action est demandée ?",
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
    id: "cem-q5",
    textQ: "Quand interviendra-t-on ?",
    text: ["Cette semaine", "Jamais", "L'an prochain"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "intervenir _________.",
    fill: "cette",
    vfQ: "Intervention cette semaine.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Vitre cassée", "Une invitation", "Un menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Vitre",
    vfQ: "L'objet est Vitre cassée.",
    vfC: 0,
  }),
]);
const E2_2_CE_EMAIL_TEXT_19 = `De : Maya Singh

Objet : Interphone en panne

Bonjour,

Je vous signale un problème dans mon logement.
Problème : l'interphone ne fonctionne plus.
Cela dure depuis cinq jours. C'est gênant.
Pouvez-vous faire réparer ?
Merci d'intervenir rapidement.

Passe le bonjour à tout le monde.
À très bientôt, prends soin de toi.
C'est important pour moi, merci beaucoup.
Cordialement,
Maya Singh`;

const E2_2_CE_EMAIL_POOL_19 = buildExpressPool("e2-2-ce-email-19", [
  q({
    id: "cem-q1",
    textQ: "Quel est le problème ?",
    text: ["L'interphone ne fonctionne plus", "Une fête", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Problème : _________.",
    fill: "l'interphone",
    vfQ: "C'est l'interphone ne fonctionne plus.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Depuis combien de temps ?",
    text: ["Cinq jours", "Dix ans", "Jamais"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "depuis _________.",
    fill: "cinq",
    vfQ: "Depuis cinq jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quel est le niveau d'urgence ?",
    text: ["Gênant", "Aucun", "Pas grave"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "gênant",
    vfQ: "C'est gênant.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quelle action est demandée ?",
    text: ["Faire réparer", "Rien", "Un voyage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pouvez-vous _________ ?",
    fill: "faire",
    vfQ: "Demande : faire réparer.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quand interviendra-t-on ?",
    text: ["Rapidement", "Jamais", "L'an prochain"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "intervenir _________.",
    fill: "rapidement",
    vfQ: "Intervention rapidement.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Interphone en panne", "Une invitation", "Un menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Interphone",
    vfQ: "L'objet est Interphone en panne.",
    vfC: 0,
  }),
]);
const E2_2_CE_EMAIL_TEXT_20 = `De : Emma Laurent

Objet : Radiateur froid

Bonjour,

Je vous signale un problème dans mon logement.
Problème : le radiateur du salon est froid.
Cela dure depuis une semaine. C'est urgent.
Pouvez-vous purger le radiateur ?
Merci d'intervenir demain.

C'est important pour moi, merci beaucoup.
Nous traitons votre demande rapidement.
Vous pouvez répondre directement à ce message.
Cordialement,
Emma Laurent`;

const E2_2_CE_EMAIL_POOL_20 = buildExpressPool("e2-2-ce-email-20", [
  q({
    id: "cem-q1",
    textQ: "Quel est le problème ?",
    text: ["Le radiateur du salon est froid", "Une fête", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Problème : _________.",
    fill: "le",
    vfQ: "C'est le radiateur du salon est froid.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Depuis combien de temps ?",
    text: ["Une semaine", "Dix ans", "Jamais"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "depuis _________.",
    fill: "une",
    vfQ: "Depuis une semaine.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quel est le niveau d'urgence ?",
    text: ["Urgent", "Aucun", "Pas grave"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "urgent",
    vfQ: "C'est urgent.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quelle action est demandée ?",
    text: ["Purger le radiateur", "Rien", "Un voyage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pouvez-vous _________ ?",
    fill: "purger",
    vfQ: "Demande : purger le radiateur.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quand interviendra-t-on ?",
    text: ["Demain", "Jamais", "L'an prochain"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "intervenir _________.",
    fill: "demain",
    vfQ: "Intervention demain.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Radiateur froid", "Une invitation", "Un menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Radiateur",
    vfQ: "L'objet est Radiateur froid.",
    vfC: 0,
  }),
]);

export const E2_2_CE_EMAIL: CommunicationExercise[] = [
  readingPoolExercise({
  id: "e2-2-ce-email-1",
  readingText: E2_2_CE_EMAIL_TEXT_1,
  questionPool: E2_2_CE_EMAIL_POOL_1,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e2-2-ce-email-2",
  readingText: E2_2_CE_EMAIL_TEXT_2,
  questionPool: E2_2_CE_EMAIL_POOL_2,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e2-2-ce-email-3",
  readingText: E2_2_CE_EMAIL_TEXT_3,
  questionPool: E2_2_CE_EMAIL_POOL_3,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e2-2-ce-email-4",
  readingText: E2_2_CE_EMAIL_TEXT_4,
  questionPool: E2_2_CE_EMAIL_POOL_4,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e2-2-ce-email-5",
  readingText: E2_2_CE_EMAIL_TEXT_5,
  questionPool: E2_2_CE_EMAIL_POOL_5,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e2-2-ce-email-6",
  readingText: E2_2_CE_EMAIL_TEXT_6,
  questionPool: E2_2_CE_EMAIL_POOL_6,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e2-2-ce-email-7",
  readingText: E2_2_CE_EMAIL_TEXT_7,
  questionPool: E2_2_CE_EMAIL_POOL_7,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e2-2-ce-email-8",
  readingText: E2_2_CE_EMAIL_TEXT_8,
  questionPool: E2_2_CE_EMAIL_POOL_8,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e2-2-ce-email-9",
  readingText: E2_2_CE_EMAIL_TEXT_9,
  questionPool: E2_2_CE_EMAIL_POOL_9,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e2-2-ce-email-10",
  readingText: E2_2_CE_EMAIL_TEXT_10,
  questionPool: E2_2_CE_EMAIL_POOL_10,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e2-2-ce-email-11",
  readingText: E2_2_CE_EMAIL_TEXT_11,
  questionPool: E2_2_CE_EMAIL_POOL_11,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e2-2-ce-email-12",
  readingText: E2_2_CE_EMAIL_TEXT_12,
  questionPool: E2_2_CE_EMAIL_POOL_12,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e2-2-ce-email-13",
  readingText: E2_2_CE_EMAIL_TEXT_13,
  questionPool: E2_2_CE_EMAIL_POOL_13,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e2-2-ce-email-14",
  readingText: E2_2_CE_EMAIL_TEXT_14,
  questionPool: E2_2_CE_EMAIL_POOL_14,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e2-2-ce-email-15",
  readingText: E2_2_CE_EMAIL_TEXT_15,
  questionPool: E2_2_CE_EMAIL_POOL_15,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e2-2-ce-email-16",
  readingText: E2_2_CE_EMAIL_TEXT_16,
  questionPool: E2_2_CE_EMAIL_POOL_16,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e2-2-ce-email-17",
  readingText: E2_2_CE_EMAIL_TEXT_17,
  questionPool: E2_2_CE_EMAIL_POOL_17,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e2-2-ce-email-18",
  readingText: E2_2_CE_EMAIL_TEXT_18,
  questionPool: E2_2_CE_EMAIL_POOL_18,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e2-2-ce-email-19",
  readingText: E2_2_CE_EMAIL_TEXT_19,
  questionPool: E2_2_CE_EMAIL_POOL_19,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e2-2-ce-email-20",
  readingText: E2_2_CE_EMAIL_TEXT_20,
  questionPool: E2_2_CE_EMAIL_POOL_20,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
];

export const E2_2_PE_EMAIL: ExpressPePrompt[] = [
  {
    id: "e2-2-pee-1",
    title: "Demande de devis",
    situation: "",
    sourceMessage: {
      from: "Reparations Service",
      subject: "Demande de précisions",
      body: `Bonjour,
Pour préparer un devis, merci de nous envoyer une description du problème, votre adresse et vos disponibilités.
Cordialement`,
    },
    instruction: "Répondez à Reparations Service pour expliquer votre problème domestique. Demandez un devis, un rendez-vous et indiquez votre adresse.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-2-pee-2",
    title: "Ami avec problème",
    situation: "",
    sourceMessage: {
      from: "Miguel",
      subject: "Problème dans l'appartement",
      body: `Salut,
Je viens d'arriver en France et l'eau chaude ne marche pas. Je ne sais pas quoi faire.
Merci de répondre en indiquant ce qu'il peut faire et donnez deux conseils pratiques.
Miguel`,
    },
    instruction: "Répondez à votre ami qui arrive en France et à un problème dans son appartement. Expliquez ce qu'il peut faire et donnez deux conseils pratiques.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-2-pee-3",
    title: "Fuite d'eau",
    situation: "",
    sourceMessage: {
      from: "Proprietaire",
      subject: "Suivi logement",
      body: `Bonjour,
Si vous avez un problème dans l'appartement, merci de me l'ecrire rapidement.
Cordialement`,
    },
    instruction: "Répondez à Proprietaire pour signaler une fuite d'eau. Décrivez le lieu, l'urgence et vos disponibilités pour une visite.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-2-pee-4",
    title: "Serrure bloquee",
    situation: "",
    sourceMessage: {
      from: "Serrurerie Martin",
      subject: "Intervention",
      body: `Bonjour,
Nous pouvons intervenir pour les serrures bloquees. Merci de décrire la situation.
Serrurerie Martin`,
    },
    instruction: "Répondez à Serrurerie Martin pour expliquer que votre serrure est bloquee. Demandez le prix approximatif et un rendez-vous aujourd'hui.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-2-pee-5",
    title: "Chauffage en panne",
    situation: "",
    sourceMessage: {
      from: "Service technique",
      subject: "Problemes de chauffage",
      body: `Bonjour,
En cas de panne de chauffage, envoyez-nous un message avec les informations du logement.
Merci`,
    },
    instruction: "Répondez au service technique pour expliquer que le chauffage ne fonctionne plus. Donnez la pièce concernée, la temperature et vos horaires.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-2-pee-6",
    title: "Electricite dangereuse",
    situation: "",
    sourceMessage: {
      from: "Électricien Lefevre",
      subject: "Contact",
      body: `Bonjour,
Pour toute intervention electrique, précisez le problème et l'adresse.
Cordialement`,
    },
    instruction: "Répondez à Électricien Lefevre pour décrire une prise dangereuse. Demandez une intervention et indiquez que vous ne touchez plus la prise.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-2-pee-7",
    title: "Evier bouche",
    situation: "",
    sourceMessage: {
      from: "Plomberie Rapide",
      subject: "Votre demande",
      body: `Bonjour,
Nous avons besoin d'informations pour organiser le rendez-vous de plomberie.
Merci`,
    },
    instruction: "Répondez au plombier en expliquant que l'evier est bouche. Donnez les détails, vos disponibilités et demandez si le devis est gratuit.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-2-pee-8",
    title: "Fenetre cassee",
    situation: "",
    sourceMessage: {
      from: "Mme Petit",
      subject: "Appartement",
      body: `Bonjour,
Merci de me prevenir rapidement si un élément du logement est casse.
Mme Petit`,
    },
    instruction: "Répondez à Mme Petit pour signaler une fenêtre cassée après le vent. Décrivez les dégâts et demandez quoi faire.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-2-pee-9",
    title: "Odeur de gaz",
    situation: "",
    sourceMessage: {
      from: "Gardien",
      subject: "Urgences immeuble",
      body: `Bonjour,
Pour les urgences dans l'immeuble, contactez-moi tout de suite avec une description précise.
Merci de répondre en expliquant ce que vous avez fait et en demandant une aide urgente.
Le gardien`,
    },
    instruction: "Répondez au gardien pour signaler une odeur de gaz. Expliquez ce que vous avez fait et demandez une aide urgente.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-2-pee-10",
    title: "Machine à laver",
    situation: "",
    sourceMessage: {
      from: "Electro Service",
      subject: "Reparation machine",
      body: `Bonjour,
Nous reparons les machines à laver à domicile. Merci de nous envoyer les informations utiles.
Cordialement`,
    },
    instruction: "Répondez au réparateur en décrivant le problème de votre machine à laver. Indiquez la marque si vous la connaissez et demandez un rendez-vous.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-2-pee-11",
    title: "Humidite",
    situation: "",
    sourceMessage: {
      from: "Proprietaire",
      subject: "Etat du logement",
      body: `Bonjour,
Je fais un point sur l'état des logements ce mois-ci. Signalez-moi les problèmes importants.
Merci`,
    },
    instruction: "Répondez à Proprietaire pour expliquer un problème d'humidité dans la salle de bain. Décrivez ce que vous voyez et demandez une visite.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-2-pee-12",
    title: "Internet coupe",
    situation: "",
    sourceMessage: {
      from: "Assistance Internet",
      subject: "Incident à domicile",
      body: `Bonjour,
Pour ouvrir un dossier, décrivez votre incident et indiquez depuis quand il existe.
Assistance`,
    },
    instruction: "Répondez au fournisseur d'acces pour expliquer que votre internet est coupe. Donnez votre adresse, la date du problème et vos disponibilités.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-2-pee-13",
    title: "Volet bloque",
    situation: "",
    sourceMessage: {
      from: "Residence Les Pins",
      subject: "Service technique",
      body: `Bonjour,
Le service technique peut intervenir dans les appartements sur rendez-vous.
Merci de répondre en indiquant la pièce, le blocage et le moment où vous pouvez recevoir quelqu'un.
La residence`,
    },
    instruction: "Répondez à la résidence pour signaler un volet bloqué. Décrivez la pièce, le blocage et le moment où vous pouvez recevoir quelqu'un.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-2-pee-14",
    title: "Cle perdue",
    situation: "",
    sourceMessage: {
      from: "Gardien",
      subject: "Cles de secours",
      body: `Bonjour,
Je peux aider les residents en cas de problème de cle pendant mes horaires.
Le gardien`,
    },
    instruction: "Répondez au gardien après avoir perdu vos cles. Expliquez la situation, demandez s'il à un double et proposez une heure de rencontre.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-2-pee-15",
    title: "Panne après travaux",
    situation: "",
    sourceMessage: {
      from: "Entreprise Batirenov",
      subject: "Fin de travaux",
      body: `Bonjour,
Les travaux sont termines. Merci de nous signaler tout problème dans les trois jours.
Cordialement`,
    },
    instruction: "Répondez à Entreprise Batirenov pour expliquer qu'une prise ne fonctionne plus après les travaux. Demandez une vérification rapide.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-2-pee-16",
    title: "Reparation annulee",
    situation: "",
    sourceMessage: {
      from: "Réparateur",
      subject: "Rendez-vous à reporter",
      body: `Bonjour,
Je suis désolé, je ne peux pas venir aujourd'hui. Quels autres horaires vous conviennent ?
Cordialement`,
    },
    instruction: "Répondez au réparateur pour proposer deux nouveaux horaires. Restez poli et demandez une confirmation.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-2-pee-17",
    title: "Conseil à une amie",
    situation: "",
    sourceMessage: {
      from: "Olga",
      subject: "Problème de chauffage",
      body: `Salut,
Mon chauffage ne marche pas et je ne connais personne ici. Tu peux me conseiller ?
Olga`,
    },
    instruction: "Répondez à votre amie en lui conseillant d'appeler son propriétaire et un professionnel. Expliquez les informations qu'elle doit donner.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-2-pee-18",
    title: "Bruit de frigo",
    situation: "",
    sourceMessage: {
      from: "Service après-vente",
      subject: "Appareil sous garantie",
      body: `Bonjour,
Votre appareil est encore sous garantie. Décrivez le problème pour ouvrir un dossier.
Cordialement`,
    },
    instruction: "Répondez au service pour décrire le bruit de votre réfrigérateur. Demandez si une réparation est possible cette semaine.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-2-pee-19",
    title: "Plafond abime",
    situation: "",
    sourceMessage: {
      from: "Gestion logement",
      subject: "Signalement",
      body: `Bonjour,
Pour tout signalement dans votre logement, envoyez un e-mail avec une description précise.
Merci`,
    },
    instruction: "Répondez à Gestion logement pour signaler une tâche au plafond. Décrivez la taille, la couleur et demandez une vérification.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-2-pee-20",
    title: "Urgence soir",
    situation: "",
    sourceMessage: {
      from: "Urgence habitat",
      subject: "Evaluation de l'urgence",
      body: `Bonjour,
Merci d'expliquer votre problème et de dire si une intervention immédiate est nécessaire.
Urgence habitat`,
    },
    instruction: "Répondez au service d'urgence pour expliquer un problème domestique arrive le soir. Dites si vous pouvez attendre demain ou non.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },

];

/* ════════════════════════════════════════════════════════════════════════════
   E2.3 — Respecter le règlement
   ════════════════════════════════════════════════════════════════════════════ */

const E2_3_CE_EMAIL_TEXT_1 = `De : Régie Immobilière

Objet : Rappel règlement — bruit

Bonjour,

Nous vous rappelons une règle du règlement de l'immeuble.
Article 2 : pas de musique forte après 20 h.
Sanction en cas de non-respect : amende de 200 francs.
Horaires concernés : 20 h – 8 h.
Merci de respecter ces règles pour le bien de tous.

Une confirmation arrivera ensuite.
Le lieu est facile à trouver.
Prenez votre temps pour comprendre le message.
Merci de lire ce message jusqu'à la fin.
Cordialement,
Régie Immobilière`;

const E2_3_CE_EMAIL_POOL_1 = buildExpressPool("e2-3-ce-email-1", [
  q({
    id: "cem-q1",
    textQ: "Quel article ?",
    text: ["Article 2", "Article 99", "Article 0"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ :",
    fill: "2",
    vfQ: "C'est Article 2.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quelle règle ?",
    text: ["Pas de musique forte après 20 h", "Faire la fête", "Casser les murs"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ .",
    fill: "pas",
    vfQ: "Règle : pas de musique forte après 20 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quelle sanction ?",
    text: ["Amende de 200 francs", "Rien", "Un cadeau"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Sanction : _________.",
    fill: "amende",
    vfQ: "Sanction : amende de 200 francs.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quels horaires ?",
    text: ["20 h – 8 h", "Toute la nuit", "Jamais"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Horaires : _________.",
    fill: "20",
    vfQ: "Horaires : 20 h – 8 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quel est l'objet ?",
    text: ["Rappel règlement — bruit", "Une invitation", "Un menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Rappel",
    vfQ: "Objet : Rappel règlement — bruit.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Régie Immobilière", "Un ami", "Un élève"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Régie",
    vfQ: "C'est Régie Immobilière.",
    vfC: 0,
  }),
]);
const E2_3_CE_EMAIL_TEXT_2 = `De : Syndic Copro

Objet : Animaux dans l'immeuble

Bonjour,

Nous vous rappelons une règle du règlement de l'immeuble.
Article 7 : chiens en laisse obligatoire.
Sanction en cas de non-respect : amende de 50 francs.
Horaires concernés : tous les jours.
Merci de respecter ces règles pour le bien de tous.

Tout est organisé pour que ce soit simple.
Le contact est indiqué dans le message.
N'oubliez pas de vérifier la date.
Nous traitons votre demande rapidement.
Cordialement,
Syndic Copro`;

const E2_3_CE_EMAIL_POOL_2 = buildExpressPool("e2-3-ce-email-2", [
  q({
    id: "cem-q1",
    textQ: "Quel article ?",
    text: ["Article 7", "Article 99", "Article 0"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ :",
    fill: "7",
    vfQ: "C'est Article 7.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quelle règle ?",
    text: ["Chiens en laisse obligatoire", "Faire la fête", "Casser les murs"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ .",
    fill: "chiens",
    vfQ: "Règle : chiens en laisse obligatoire.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quelle sanction ?",
    text: ["Amende de 50 francs", "Rien", "Un cadeau"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Sanction : _________.",
    fill: "amende",
    vfQ: "Sanction : amende de 50 francs.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quels horaires ?",
    text: ["Tous les jours", "Toute la nuit", "Jamais"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Horaires : _________.",
    fill: "tous",
    vfQ: "Horaires : tous les jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quel est l'objet ?",
    text: ["Animaux dans l'immeuble", "Une invitation", "Un menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Animaux",
    vfQ: "Objet : Animaux dans l'immeuble.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Syndic Copro", "Un ami", "Un élève"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Syndic",
    vfQ: "C'est Syndic Copro.",
    vfC: 0,
  }),
]);
const E2_3_CE_EMAIL_TEXT_3 = `De : Gardien

Objet : Poubelles

Bonjour,

Nous vous rappelons une règle du règlement de l'immeuble.
Article 6 : sortir les poubelles le lundi.
Sanction en cas de non-respect : frais de nettoyage.
Horaires concernés : 6 h – 8 h.
Merci de respecter ces règles pour le bien de tous.

Le trajet est simple, ne t'inquiète pas.
Apporte ce dont tu as besoin, juste au cas où.
Encore merci, vraiment.
Passe le bonjour à tout le monde.
À bientôt,
Gardien`;

const E2_3_CE_EMAIL_POOL_3 = buildExpressPool("e2-3-ce-email-3", [
  q({
    id: "cem-q1",
    textQ: "Quel article ?",
    text: ["Article 6", "Article 99", "Article 0"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ :",
    fill: "6",
    vfQ: "C'est Article 6.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quelle règle ?",
    text: ["Sortir les poubelles le lundi", "Faire la fête", "Casser les murs"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ .",
    fill: "sortir",
    vfQ: "Règle : sortir les poubelles le lundi.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quelle sanction ?",
    text: ["Frais de nettoyage", "Rien", "Un cadeau"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Sanction : _________.",
    fill: "frais",
    vfQ: "Sanction : frais de nettoyage.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quels horaires ?",
    text: ["6 h – 8 h", "Toute la nuit", "Jamais"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Horaires : _________.",
    fill: "6",
    vfQ: "Horaires : 6 h – 8 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quel est l'objet ?",
    text: ["Poubelles", "Une invitation", "Un menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Poubelles",
    vfQ: "Objet : Poubelles.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Gardien", "Un ami", "Un élève"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Gardien",
    vfQ: "C'est Gardien.",
    vfC: 0,
  }),
]);
const E2_3_CE_EMAIL_TEXT_4 = `De : Régie du Lac

Objet : Parking

Bonjour,

Nous vous rappelons une règle du règlement de l'immeuble.
Article 8 : une place par logement.
Sanction en cas de non-respect : amende de 80 francs.
Horaires concernés : 24 h/24.
Merci de respecter ces règles pour le bien de tous.

Tout est organisé pour que ce soit simple.
Le contact est indiqué dans le message.
N'oubliez pas de vérifier la date.
Le personnel peut répondre en français simple.
Cordialement,
Régie du Lac`;

const E2_3_CE_EMAIL_POOL_4 = buildExpressPool("e2-3-ce-email-4", [
  q({
    id: "cem-q1",
    textQ: "Quel article ?",
    text: ["Article 8", "Article 99", "Article 0"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ :",
    fill: "8",
    vfQ: "C'est Article 8.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quelle règle ?",
    text: ["Une place par logement", "Faire la fête", "Casser les murs"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ .",
    fill: "une",
    vfQ: "Règle : une place par logement.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quelle sanction ?",
    text: ["Amende de 80 francs", "Rien", "Un cadeau"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Sanction : _________.",
    fill: "amende",
    vfQ: "Sanction : amende de 80 francs.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quels horaires ?",
    text: ["24 h/24", "Toute la nuit", "Jamais"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Horaires : _________.",
    fill: "24",
    vfQ: "Horaires : 24 h/24.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quel est l'objet ?",
    text: ["Parking", "Une invitation", "Un menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Parking",
    vfQ: "Objet : Parking.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Régie du Lac", "Un ami", "Un élève"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Régie",
    vfQ: "C'est Régie du Lac.",
    vfC: 0,
  }),
]);
const E2_3_CE_EMAIL_TEXT_5 = `De : Syndic

Objet : Parties communes

Bonjour,

Nous vous rappelons une règle du règlement de l'immeuble.
Article 1 : respecter la propreté.
Sanction en cas de non-respect : frais de nettoyage.
Horaires concernés : tous les jours.
Merci de respecter ces règles pour le bien de tous.

N'oublie pas de me confirmer dès que tu peux.
Sinon on peut aussi en parler demain matin.
Merci d'avance pour ta réponse.
N'hésite pas à me répondre quand tu peux.
À bientôt,
Syndic`;

const E2_3_CE_EMAIL_POOL_5 = buildExpressPool("e2-3-ce-email-5", [
  q({
    id: "cem-q1",
    textQ: "Quel article ?",
    text: ["Article 1", "Article 99", "Article 0"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ :",
    fill: "1",
    vfQ: "C'est Article 1.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quelle règle ?",
    text: ["Respecter la propreté", "Faire la fête", "Casser les murs"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ .",
    fill: "respecter",
    vfQ: "Règle : respecter la propreté.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quelle sanction ?",
    text: ["Frais de nettoyage", "Rien", "Un cadeau"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Sanction : _________.",
    fill: "frais",
    vfQ: "Sanction : frais de nettoyage.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quels horaires ?",
    text: ["Tous les jours", "Toute la nuit", "Jamais"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Horaires : _________.",
    fill: "tous",
    vfQ: "Horaires : tous les jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quel est l'objet ?",
    text: ["Parties communes", "Une invitation", "Un menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Parties",
    vfQ: "Objet : Parties communes.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Syndic", "Un ami", "Un élève"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Syndic",
    vfQ: "C'est Syndic.",
    vfC: 0,
  }),
]);
const E2_3_CE_EMAIL_TEXT_6 = `De : Concierge

Objet : Ascenseur

Bonjour,

Nous vous rappelons une règle du règlement de l'immeuble.
Article 9 : maximum 4 personnes.
Sanction en cas de non-respect : interdiction.
Horaires concernés : tous les jours.
Merci de respecter ces règles pour le bien de tous.

Le trajet est simple, ne t'inquiète pas.
Apporte ce dont tu as besoin, juste au cas où.
Encore merci, vraiment.
C'est important pour moi, merci beaucoup.
À bientôt,
Concierge`;

const E2_3_CE_EMAIL_POOL_6 = buildExpressPool("e2-3-ce-email-6", [
  q({
    id: "cem-q1",
    textQ: "Quel article ?",
    text: ["Article 9", "Article 99", "Article 0"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ :",
    fill: "9",
    vfQ: "C'est Article 9.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quelle règle ?",
    text: ["Maximum 4 personnes", "Faire la fête", "Casser les murs"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ .",
    fill: "maximum",
    vfQ: "Règle : maximum 4 personnes.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quelle sanction ?",
    text: ["Interdiction", "Rien", "Un cadeau"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Sanction : _________.",
    fill: "interdiction",
    vfQ: "Sanction : interdiction.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quels horaires ?",
    text: ["Tous les jours", "Toute la nuit", "Jamais"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Horaires : _________.",
    fill: "tous",
    vfQ: "Horaires : tous les jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quel est l'objet ?",
    text: ["Ascenseur", "Une invitation", "Un menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Ascenseur",
    vfQ: "Objet : Ascenseur.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Concierge", "Un ami", "Un élève"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Concierge",
    vfQ: "C'est Concierge.",
    vfC: 0,
  }),
]);
const E2_3_CE_EMAIL_TEXT_7 = `De : Régie Centrale

Objet : Fumer

Bonjour,

Nous vous rappelons une règle du règlement de l'immeuble.
Article 12 : interdiction de fumer dans les couloirs.
Sanction en cas de non-respect : amende de 100 francs.
Horaires concernés : 24 h/24.
Merci de respecter ces règles pour le bien de tous.

Encore merci, vraiment.
Voici quelques détails utiles pour la suite.
Lisez bien jusqu'à la fin, s'il vous plaît.
Les horaires habituels restent les mêmes.
Cordialement,
Régie Centrale`;

const E2_3_CE_EMAIL_POOL_7 = buildExpressPool("e2-3-ce-email-7", [
  q({
    id: "cem-q1",
    textQ: "Quel article ?",
    text: ["Article 12", "Article 99", "Article 0"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ :",
    fill: "12",
    vfQ: "C'est Article 12.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quelle règle ?",
    text: ["Interdiction de fumer dans les couloirs", "Faire la fête", "Casser les murs"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ .",
    fill: "interdiction",
    vfQ: "Règle : interdiction de fumer dans les couloirs.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quelle sanction ?",
    text: ["Amende de 100 francs", "Rien", "Un cadeau"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Sanction : _________.",
    fill: "amende",
    vfQ: "Sanction : amende de 100 francs.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quels horaires ?",
    text: ["24 h/24", "Toute la nuit", "Jamais"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Horaires : _________.",
    fill: "24",
    vfQ: "Horaires : 24 h/24.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quel est l'objet ?",
    text: ["Fumer", "Une invitation", "Un menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Fumer",
    vfQ: "Objet : Fumer.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Régie Centrale", "Un ami", "Un élève"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Régie",
    vfQ: "C'est Régie Centrale.",
    vfC: 0,
  }),
]);
const E2_3_CE_EMAIL_TEXT_8 = `De : Syndic Alpes

Objet : Linge sur balcon

Bonjour,

Nous vous rappelons une règle du règlement de l'immeuble.
Article 5 : interdiction de sécher le linge.
Sanction en cas de non-respect : avertissement.
Horaires concernés : 8 h – 20 h.
Merci de respecter ces règles pour le bien de tous.

À très bientôt, prends soin de toi.
Je joins les détails importants juste après.
Si le plan change, je te préviens tout de suite.
Nous vous souhaitons une excellente journée.
Cordialement,
Syndic Alpes`;

const E2_3_CE_EMAIL_POOL_8 = buildExpressPool("e2-3-ce-email-8", [
  q({
    id: "cem-q1",
    textQ: "Quel article ?",
    text: ["Article 5", "Article 99", "Article 0"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ :",
    fill: "5",
    vfQ: "C'est Article 5.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quelle règle ?",
    text: ["Interdiction de sécher le linge", "Faire la fête", "Casser les murs"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ .",
    fill: "interdiction",
    vfQ: "Règle : interdiction de sécher le linge.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quelle sanction ?",
    text: ["Avertissement", "Rien", "Un cadeau"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Sanction : _________.",
    fill: "avertissement",
    vfQ: "Sanction : avertissement.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quels horaires ?",
    text: ["8 h – 20 h", "Toute la nuit", "Jamais"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Horaires : _________.",
    fill: "8",
    vfQ: "Horaires : 8 h – 20 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quel est l'objet ?",
    text: ["Linge sur balcon", "Une invitation", "Un menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Linge",
    vfQ: "Objet : Linge sur balcon.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Syndic Alpes", "Un ami", "Un élève"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Syndic",
    vfQ: "C'est Syndic Alpes.",
    vfC: 0,
  }),
]);
const E2_3_CE_EMAIL_TEXT_9 = `De : Gardien

Objet : Vélos

Bonjour,

Nous vous rappelons une règle du règlement de l'immeuble.
Article 14 : ne pas bloquer l'entrée.
Sanction en cas de non-respect : mise en fourrière.
Horaires concernés : 24 h/24.
Merci de respecter ces règles pour le bien de tous.

Le contact est indiqué dans le message.
N'oubliez pas de vérifier la date.
Bonne journée à toutes et à tous.
Le personnel peut répondre en français simple.
À bientôt,
Gardien`;

const E2_3_CE_EMAIL_POOL_9 = buildExpressPool("e2-3-ce-email-9", [
  q({
    id: "cem-q1",
    textQ: "Quel article ?",
    text: ["Article 14", "Article 99", "Article 0"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ :",
    fill: "14",
    vfQ: "C'est Article 14.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quelle règle ?",
    text: ["Ne pas bloquer l'entrée", "Faire la fête", "Casser les murs"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ .",
    fill: "ne",
    vfQ: "Règle : ne pas bloquer l'entrée.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quelle sanction ?",
    text: ["Mise en fourrière", "Rien", "Un cadeau"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Sanction : _________.",
    fill: "mise",
    vfQ: "Sanction : mise en fourrière.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quels horaires ?",
    text: ["24 h/24", "Toute la nuit", "Jamais"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Horaires : _________.",
    fill: "24",
    vfQ: "Horaires : 24 h/24.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quel est l'objet ?",
    text: ["Vélos", "Une invitation", "Un menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Vélos",
    vfQ: "Objet : Vélos.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Gardien", "Un ami", "Un élève"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Gardien",
    vfQ: "C'est Gardien.",
    vfC: 0,
  }),
]);
const E2_3_CE_EMAIL_TEXT_10 = `De : Régie Soleil

Objet : Visiteurs

Bonjour,

Nous vous rappelons une règle du règlement de l'immeuble.
Article 10 : annoncer les visiteurs.
Sanction en cas de non-respect : refus d'accès.
Horaires concernés : 8 h – 22 h.
Merci de respecter ces règles pour le bien de tous.

Apporte ce dont tu as besoin, juste au cas où.
Encore merci, vraiment.
Voici quelques détails utiles pour la suite.
À très bientôt, prends soin de toi.
Cordialement,
Régie Soleil`;

const E2_3_CE_EMAIL_POOL_10 = buildExpressPool("e2-3-ce-email-10", [
  q({
    id: "cem-q1",
    textQ: "Quel article ?",
    text: ["Article 10", "Article 99", "Article 0"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ :",
    fill: "10",
    vfQ: "C'est Article 10.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quelle règle ?",
    text: ["Annoncer les visiteurs", "Faire la fête", "Casser les murs"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ .",
    fill: "annoncer",
    vfQ: "Règle : annoncer les visiteurs.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quelle sanction ?",
    text: ["Refus d'accès", "Rien", "Un cadeau"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Sanction : _________.",
    fill: "refus",
    vfQ: "Sanction : refus d'accès.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quels horaires ?",
    text: ["8 h – 22 h", "Toute la nuit", "Jamais"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Horaires : _________.",
    fill: "8",
    vfQ: "Horaires : 8 h – 22 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quel est l'objet ?",
    text: ["Visiteurs", "Une invitation", "Un menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Visiteurs",
    vfQ: "Objet : Visiteurs.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Régie Soleil", "Un ami", "Un élève"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Régie",
    vfQ: "C'est Régie Soleil.",
    vfC: 0,
  }),
]);
const E2_3_CE_EMAIL_TEXT_11 = `De : Syndic

Objet : Déménagement

Bonjour,

Nous vous rappelons une règle du règlement de l'immeuble.
Article 4 : déménagement en semaine seulement.
Sanction en cas de non-respect : amende de 150 francs.
Horaires concernés : lundi – vendredi.
Merci de respecter ces règles pour le bien de tous.

Gardez ce texte pour vous en souvenir.
Les horaires habituels restent les mêmes.
Une question ? Écrivez ou téléphonez.
À bientôt,
Syndic`;

const E2_3_CE_EMAIL_POOL_11 = buildExpressPool("e2-3-ce-email-11", [
  q({
    id: "cem-q1",
    textQ: "Quel article ?",
    text: ["Article 4", "Article 99", "Article 0"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ :",
    fill: "4",
    vfQ: "C'est Article 4.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quelle règle ?",
    text: ["Déménagement en semaine seulement", "Faire la fête", "Casser les murs"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ .",
    fill: "déménagement",
    vfQ: "Règle : déménagement en semaine seulement.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quelle sanction ?",
    text: ["Amende de 150 francs", "Rien", "Un cadeau"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Sanction : _________.",
    fill: "amende",
    vfQ: "Sanction : amende de 150 francs.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quels horaires ?",
    text: ["Lundi – vendredi", "Toute la nuit", "Jamais"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Horaires : _________.",
    fill: "lundi",
    vfQ: "Horaires : lundi – vendredi.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quel est l'objet ?",
    text: ["Déménagement", "Une invitation", "Un menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Déménagement",
    vfQ: "Objet : Déménagement.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Syndic", "Un ami", "Un élève"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Syndic",
    vfQ: "C'est Syndic.",
    vfC: 0,
  }),
]);
const E2_3_CE_EMAIL_TEXT_12 = `De : Concierge

Objet : Laverie

Bonjour,

Nous vous rappelons une règle du règlement de l'immeuble.
Article 16 : une machine par foyer.
Sanction en cas de non-respect : interdiction 1 semaine.
Horaires concernés : 7 h – 22 h.
Merci de respecter ces règles pour le bien de tous.

Merci encore, et à bientôt.
Tout est organisé pour que ce soit simple.
Le contact est indiqué dans le message.
N'oubliez pas de vérifier la date et l'heure.
À bientôt,
Concierge`;

const E2_3_CE_EMAIL_POOL_12 = buildExpressPool("e2-3-ce-email-12", [
  q({
    id: "cem-q1",
    textQ: "Quel article ?",
    text: ["Article 16", "Article 99", "Article 0"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ :",
    fill: "16",
    vfQ: "C'est Article 16.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quelle règle ?",
    text: ["Une machine par foyer", "Faire la fête", "Casser les murs"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ .",
    fill: "une",
    vfQ: "Règle : une machine par foyer.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quelle sanction ?",
    text: ["Interdiction 1 semaine", "Rien", "Un cadeau"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Sanction : _________.",
    fill: "interdiction",
    vfQ: "Sanction : interdiction 1 semaine.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quels horaires ?",
    text: ["7 h – 22 h", "Toute la nuit", "Jamais"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Horaires : _________.",
    fill: "7",
    vfQ: "Horaires : 7 h – 22 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quel est l'objet ?",
    text: ["Laverie", "Une invitation", "Un menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Laverie",
    vfQ: "Objet : Laverie.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Concierge", "Un ami", "Un élève"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Concierge",
    vfQ: "C'est Concierge.",
    vfC: 0,
  }),
]);
const E2_3_CE_EMAIL_TEXT_13 = `De : Régie

Objet : Cave

Bonjour,

Nous vous rappelons une règle du règlement de l'immeuble.
Article 11 : pas de produits inflammables.
Sanction en cas de non-respect : retrait immédiat.
Horaires concernés : tous les jours.
Merci de respecter ces règles pour le bien de tous.

Les informations importantes sont déjà notées plus haut.
Merci de votre attention et de votre patience.
Une confirmation arrivera ensuite.
En cas de changement, un nouvel avis sera publié.
À bientôt,
Régie`;

const E2_3_CE_EMAIL_POOL_13 = buildExpressPool("e2-3-ce-email-13", [
  q({
    id: "cem-q1",
    textQ: "Quel article ?",
    text: ["Article 11", "Article 99", "Article 0"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ :",
    fill: "11",
    vfQ: "C'est Article 11.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quelle règle ?",
    text: ["Pas de produits inflammables", "Faire la fête", "Casser les murs"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ .",
    fill: "pas",
    vfQ: "Règle : pas de produits inflammables.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quelle sanction ?",
    text: ["Retrait immédiat", "Rien", "Un cadeau"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Sanction : _________.",
    fill: "retrait",
    vfQ: "Sanction : retrait immédiat.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quels horaires ?",
    text: ["Tous les jours", "Toute la nuit", "Jamais"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Horaires : _________.",
    fill: "tous",
    vfQ: "Horaires : tous les jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quel est l'objet ?",
    text: ["Cave", "Une invitation", "Un menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Cave",
    vfQ: "Objet : Cave.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Régie", "Un ami", "Un élève"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Régie",
    vfQ: "C'est Régie.",
    vfC: 0,
  }),
]);
const E2_3_CE_EMAIL_TEXT_14 = `De : Syndic

Objet : Jardin

Bonjour,

Nous vous rappelons une règle du règlement de l'immeuble.
Article 18 : fermeture du jardin à 21 h.
Sanction en cas de non-respect : exclusion.
Horaires concernés : 7 h – 21 h.
Merci de respecter ces règles pour le bien de tous.

Le temps est beau, alors tout devrait bien se passer.
Prenez un pull, au cas où il ferait plus frais.
Le parking le plus proche est gratuit le soir.
Respectez la file d'attente, s'il vous plaît.
À bientôt,
Syndic`;

const E2_3_CE_EMAIL_POOL_14 = buildExpressPool("e2-3-ce-email-14", [
  q({
    id: "cem-q1",
    textQ: "Quel article ?",
    text: ["Article 18", "Article 99", "Article 0"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ :",
    fill: "18",
    vfQ: "C'est Article 18.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quelle règle ?",
    text: ["Fermeture du jardin à 21 h", "Faire la fête", "Casser les murs"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ .",
    fill: "fermeture",
    vfQ: "Règle : fermeture du jardin à 21 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quelle sanction ?",
    text: ["Exclusion", "Rien", "Un cadeau"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Sanction : _________.",
    fill: "exclusion",
    vfQ: "Sanction : exclusion.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quels horaires ?",
    text: ["7 h – 21 h", "Toute la nuit", "Jamais"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Horaires : _________.",
    fill: "7",
    vfQ: "Horaires : 7 h – 21 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quel est l'objet ?",
    text: ["Jardin", "Une invitation", "Un menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Jardin",
    vfQ: "Objet : Jardin.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Syndic", "Un ami", "Un élève"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Syndic",
    vfQ: "C'est Syndic.",
    vfC: 0,
  }),
]);
const E2_3_CE_EMAIL_TEXT_15 = `De : Gardien

Objet : Piscine

Bonjour,

Nous vous rappelons une règle du règlement de l'immeuble.
Article 15 : douche obligatoire.
Sanction en cas de non-respect : exclusion temporaire.
Horaires concernés : 7 h – 21 h.
Merci de respecter ces règles pour le bien de tous.

Apporte ce dont tu as besoin, juste au cas où.
Encore merci, vraiment.
Voici quelques détails utiles pour la suite.
N'hésite pas à me répondre quand tu peux.
À bientôt,
Gardien`;

const E2_3_CE_EMAIL_POOL_15 = buildExpressPool("e2-3-ce-email-15", [
  q({
    id: "cem-q1",
    textQ: "Quel article ?",
    text: ["Article 15", "Article 99", "Article 0"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ :",
    fill: "15",
    vfQ: "C'est Article 15.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quelle règle ?",
    text: ["Douche obligatoire", "Faire la fête", "Casser les murs"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ .",
    fill: "douche",
    vfQ: "Règle : douche obligatoire.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quelle sanction ?",
    text: ["Exclusion temporaire", "Rien", "Un cadeau"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Sanction : _________.",
    fill: "exclusion",
    vfQ: "Sanction : exclusion temporaire.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quels horaires ?",
    text: ["7 h – 21 h", "Toute la nuit", "Jamais"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Horaires : _________.",
    fill: "7",
    vfQ: "Horaires : 7 h – 21 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quel est l'objet ?",
    text: ["Piscine", "Une invitation", "Un menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Piscine",
    vfQ: "Objet : Piscine.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Gardien", "Un ami", "Un élève"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Gardien",
    vfQ: "C'est Gardien.",
    vfC: 0,
  }),
]);
const E2_3_CE_EMAIL_TEXT_16 = `De : Régie

Objet : Barbecue

Bonjour,

Nous vous rappelons une règle du règlement de l'immeuble.
Article 19 : interdit sur les balcons.
Sanction en cas de non-respect : amende de 100 francs.
Horaires concernés : été.
Merci de respecter ces règles pour le bien de tous.

Tu peux m'appeler si c'est plus simple pour toi.
J'espère que tu vas bien et que tout se passe comme prévu.
N'oublie pas de me confirmer dès que tu peux.
Une confirmation sera envoyée ensuite.
À bientôt,
Régie`;

const E2_3_CE_EMAIL_POOL_16 = buildExpressPool("e2-3-ce-email-16", [
  q({
    id: "cem-q1",
    textQ: "Quel article ?",
    text: ["Article 19", "Article 99", "Article 0"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ :",
    fill: "19",
    vfQ: "C'est Article 19.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quelle règle ?",
    text: ["Interdit sur les balcons", "Faire la fête", "Casser les murs"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ .",
    fill: "interdit",
    vfQ: "Règle : interdit sur les balcons.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quelle sanction ?",
    text: ["Amende de 100 francs", "Rien", "Un cadeau"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Sanction : _________.",
    fill: "amende",
    vfQ: "Sanction : amende de 100 francs.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quels horaires ?",
    text: ["Été", "Toute la nuit", "Jamais"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Horaires : _________.",
    fill: "été",
    vfQ: "Horaires : été.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quel est l'objet ?",
    text: ["Barbecue", "Une invitation", "Un menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Barbecue",
    vfQ: "Objet : Barbecue.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Régie", "Un ami", "Un élève"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Régie",
    vfQ: "C'est Régie.",
    vfC: 0,
  }),
]);
const E2_3_CE_EMAIL_TEXT_17 = `De : Syndic

Objet : Interphone

Bonjour,

Nous vous rappelons une règle du règlement de l'immeuble.
Article 17 : ne pas laisser entrer des inconnus.
Sanction en cas de non-respect : responsabilité locataire.
Horaires concernés : 24 h/24.
Merci de respecter ces règles pour le bien de tous.

Merci de votre attention et de votre patience.
Une confirmation arrivera ensuite.
Le lieu est facile à trouver.
Une confirmation sera envoyée ensuite.
À bientôt,
Syndic`;

const E2_3_CE_EMAIL_POOL_17 = buildExpressPool("e2-3-ce-email-17", [
  q({
    id: "cem-q1",
    textQ: "Quel article ?",
    text: ["Article 17", "Article 99", "Article 0"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ :",
    fill: "17",
    vfQ: "C'est Article 17.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quelle règle ?",
    text: ["Ne pas laisser entrer des inconnus", "Faire la fête", "Casser les murs"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ .",
    fill: "ne",
    vfQ: "Règle : ne pas laisser entrer des inconnus.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quelle sanction ?",
    text: ["Responsabilité locataire", "Rien", "Un cadeau"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Sanction : _________.",
    fill: "responsabilité",
    vfQ: "Sanction : responsabilité locataire.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quels horaires ?",
    text: ["24 h/24", "Toute la nuit", "Jamais"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Horaires : _________.",
    fill: "24",
    vfQ: "Horaires : 24 h/24.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quel est l'objet ?",
    text: ["Interphone", "Une invitation", "Un menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Interphone",
    vfQ: "Objet : Interphone.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Syndic", "Un ami", "Un élève"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Syndic",
    vfQ: "C'est Syndic.",
    vfC: 0,
  }),
]);
const E2_3_CE_EMAIL_TEXT_18 = `De : Concierge

Objet : Chauffage

Bonjour,

Nous vous rappelons une règle du règlement de l'immeuble.
Article 20 : ne pas couvrir les radiateurs.
Sanction en cas de non-respect : avertissement.
Horaires concernés : hiver.
Merci de respecter ces règles pour le bien de tous.

Sans confirmation, la place n'est pas garantie.
Je t'écris aussi pour te donner un peu plus de nouvelles.
Dis-moi si tu as des questions, je réponds vite.
Le trajet est simple, ne t'inquiète pas.
À bientôt,
Concierge`;

const E2_3_CE_EMAIL_POOL_18 = buildExpressPool("e2-3-ce-email-18", [
  q({
    id: "cem-q1",
    textQ: "Quel article ?",
    text: ["Article 20", "Article 99", "Article 0"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ :",
    fill: "20",
    vfQ: "C'est Article 20.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quelle règle ?",
    text: ["Ne pas couvrir les radiateurs", "Faire la fête", "Casser les murs"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ .",
    fill: "ne",
    vfQ: "Règle : ne pas couvrir les radiateurs.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quelle sanction ?",
    text: ["Avertissement", "Rien", "Un cadeau"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Sanction : _________.",
    fill: "avertissement",
    vfQ: "Sanction : avertissement.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quels horaires ?",
    text: ["Hiver", "Toute la nuit", "Jamais"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Horaires : _________.",
    fill: "hiver",
    vfQ: "Horaires : hiver.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quel est l'objet ?",
    text: ["Chauffage", "Une invitation", "Un menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Chauffage",
    vfQ: "Objet : Chauffage.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Concierge", "Un ami", "Un élève"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Concierge",
    vfQ: "C'est Concierge.",
    vfC: 0,
  }),
]);
const E2_3_CE_EMAIL_TEXT_19 = `De : Régie

Objet : Silence

Bonjour,

Nous vous rappelons une règle du règlement de l'immeuble.
Article 3 : silence après 22 h.
Sanction en cas de non-respect : avertissement écrit.
Horaires concernés : 22 h – 7 h.
Merci de respecter ces règles pour le bien de tous.

Gardez ce texte pour vous en souvenir.
Les horaires habituels restent les mêmes.
Une question ? Écrivez ou téléphonez.
À bientôt,
Régie`;

const E2_3_CE_EMAIL_POOL_19 = buildExpressPool("e2-3-ce-email-19", [
  q({
    id: "cem-q1",
    textQ: "Quel article ?",
    text: ["Article 3", "Article 99", "Article 0"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ :",
    fill: "3",
    vfQ: "C'est Article 3.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quelle règle ?",
    text: ["Silence après 22 h", "Faire la fête", "Casser les murs"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ .",
    fill: "silence",
    vfQ: "Règle : silence après 22 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quelle sanction ?",
    text: ["Avertissement écrit", "Rien", "Un cadeau"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Sanction : _________.",
    fill: "avertissement",
    vfQ: "Sanction : avertissement écrit.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quels horaires ?",
    text: ["22 h – 7 h", "Toute la nuit", "Jamais"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Horaires : _________.",
    fill: "22",
    vfQ: "Horaires : 22 h – 7 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quel est l'objet ?",
    text: ["Silence", "Une invitation", "Un menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Silence",
    vfQ: "Objet : Silence.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Régie", "Un ami", "Un élève"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Régie",
    vfQ: "C'est Régie.",
    vfC: 0,
  }),
]);
const E2_3_CE_EMAIL_TEXT_20 = `De : Syndic

Objet : Animaux nombre

Bonjour,

Nous vous rappelons une règle du règlement de l'immeuble.
Article 13 : un animal maximum par logement.
Sanction en cas de non-respect : avertissement.
Horaires concernés : tous les jours.
Merci de respecter ces règles pour le bien de tous.

Sinon on peut aussi en parler demain matin.
Merci d'avance pour ta réponse.
Je suis disponible après 18 heures.
Conservez le numéro de contact indiqué.
À bientôt,
Syndic`;

const E2_3_CE_EMAIL_POOL_20 = buildExpressPool("e2-3-ce-email-20", [
  q({
    id: "cem-q1",
    textQ: "Quel article ?",
    text: ["Article 13", "Article 99", "Article 0"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ :",
    fill: "13",
    vfQ: "C'est Article 13.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quelle règle ?",
    text: ["Un animal maximum par logement", "Faire la fête", "Casser les murs"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ .",
    fill: "un",
    vfQ: "Règle : un animal maximum par logement.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quelle sanction ?",
    text: ["Avertissement", "Rien", "Un cadeau"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Sanction : _________.",
    fill: "avertissement",
    vfQ: "Sanction : avertissement.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quels horaires ?",
    text: ["Tous les jours", "Toute la nuit", "Jamais"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Horaires : _________.",
    fill: "tous",
    vfQ: "Horaires : tous les jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quel est l'objet ?",
    text: ["Animaux nombre", "Une invitation", "Un menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Animaux",
    vfQ: "Objet : Animaux nombre.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Syndic", "Un ami", "Un élève"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Syndic",
    vfQ: "C'est Syndic.",
    vfC: 0,
  }),
]);

export const E2_3_CE_EMAIL: CommunicationExercise[] = [
  readingPoolExercise({
  id: "e2-3-ce-email-1",
  readingText: E2_3_CE_EMAIL_TEXT_1,
  questionPool: E2_3_CE_EMAIL_POOL_1,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e2-3-ce-email-2",
  readingText: E2_3_CE_EMAIL_TEXT_2,
  questionPool: E2_3_CE_EMAIL_POOL_2,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e2-3-ce-email-3",
  readingText: E2_3_CE_EMAIL_TEXT_3,
  questionPool: E2_3_CE_EMAIL_POOL_3,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e2-3-ce-email-4",
  readingText: E2_3_CE_EMAIL_TEXT_4,
  questionPool: E2_3_CE_EMAIL_POOL_4,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e2-3-ce-email-5",
  readingText: E2_3_CE_EMAIL_TEXT_5,
  questionPool: E2_3_CE_EMAIL_POOL_5,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e2-3-ce-email-6",
  readingText: E2_3_CE_EMAIL_TEXT_6,
  questionPool: E2_3_CE_EMAIL_POOL_6,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e2-3-ce-email-7",
  readingText: E2_3_CE_EMAIL_TEXT_7,
  questionPool: E2_3_CE_EMAIL_POOL_7,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e2-3-ce-email-8",
  readingText: E2_3_CE_EMAIL_TEXT_8,
  questionPool: E2_3_CE_EMAIL_POOL_8,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e2-3-ce-email-9",
  readingText: E2_3_CE_EMAIL_TEXT_9,
  questionPool: E2_3_CE_EMAIL_POOL_9,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e2-3-ce-email-10",
  readingText: E2_3_CE_EMAIL_TEXT_10,
  questionPool: E2_3_CE_EMAIL_POOL_10,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e2-3-ce-email-11",
  readingText: E2_3_CE_EMAIL_TEXT_11,
  questionPool: E2_3_CE_EMAIL_POOL_11,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e2-3-ce-email-12",
  readingText: E2_3_CE_EMAIL_TEXT_12,
  questionPool: E2_3_CE_EMAIL_POOL_12,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e2-3-ce-email-13",
  readingText: E2_3_CE_EMAIL_TEXT_13,
  questionPool: E2_3_CE_EMAIL_POOL_13,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e2-3-ce-email-14",
  readingText: E2_3_CE_EMAIL_TEXT_14,
  questionPool: E2_3_CE_EMAIL_POOL_14,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e2-3-ce-email-15",
  readingText: E2_3_CE_EMAIL_TEXT_15,
  questionPool: E2_3_CE_EMAIL_POOL_15,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e2-3-ce-email-16",
  readingText: E2_3_CE_EMAIL_TEXT_16,
  questionPool: E2_3_CE_EMAIL_POOL_16,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e2-3-ce-email-17",
  readingText: E2_3_CE_EMAIL_TEXT_17,
  questionPool: E2_3_CE_EMAIL_POOL_17,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e2-3-ce-email-18",
  readingText: E2_3_CE_EMAIL_TEXT_18,
  questionPool: E2_3_CE_EMAIL_POOL_18,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e2-3-ce-email-19",
  readingText: E2_3_CE_EMAIL_TEXT_19,
  questionPool: E2_3_CE_EMAIL_POOL_19,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e2-3-ce-email-20",
  readingText: E2_3_CE_EMAIL_TEXT_20,
  questionPool: E2_3_CE_EMAIL_POOL_20,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
];

export const E2_3_PE_EMAIL: ExpressPePrompt[] = [
  {
    id: "e2-3-pee-1",
    title: "Règlement au voisin",
    situation: "",
    sourceMessage: {
      from: "Syndic",
      subject: "Rappel du règlement",
      body: `Bonjour,
Plusieurs habitants demandent que le règlement de l'immeuble soit mieux respecté.
Merci de répondre en expliquant le problème et en demandant un changement simple.
Cordialement`,
    },
    instruction: "Répondez au syndic pour expliquer le problème de règlement. Expliquez le problème et demandez un changement simple.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-3-pee-2",
    title: "Idées de propreté",
    situation: "",
    sourceMessage: {
      from: "Conseil de l'immeuble",
      subject: "Propreté des parties communes",
      body: `Bonjour,
Nous cherchons des idées simples pour garder l'immeuble propre. Merci d'envoyer vos propositions.
Le conseil`,
    },
    instruction: "Répondez au conseil de l'immeuble avec quatre idées pour respecter la propreté. Rédigez vos idées en phrases complètes et expliquez pourquoi elles sont utiles.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-3-pee-3",
    title: "Bruit nocturne",
    situation: "",
    sourceMessage: {
      from: "Voisin du 2e",
      subject: "Soirée samedi",
      body: `Bonjour,
Nous avons eu des amis samedi soir. J'espère que cela n'a pas trop dérangé.
Merci de répondre en rappelant les horaires de calme et en proposant d'en parler si besoin.
Cordialement`,
    },
    instruction: "Répondez à votre voisin au sujet du bruit nocturne. Rappelez les horaires de calme et proposez d'en parler si besoin.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-3-pee-4",
    title: "Poubelles",
    situation: "",
    sourceMessage: {
      from: "Syndic",
      subject: "Local poubelles",
      body: `Bonjour,
Nous recevons des remarques sur le local poubelles. Merci de nous dire ce que vous observez.
Le syndic`,
    },
    instruction: "Répondez au syndic en signalant un problème dans le local poubelles. Décrivez la situation et proposez une solution simple.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-3-pee-5",
    title: "Velo dans l'entree",
    situation: "",
    sourceMessage: {
      from: "Gardien",
      subject: "Velo dans le hall",
      body: `Bonjour,
Un velo bloqué parfois le hall d'entrée. Merci de regler ce problème calmêment entre voisins.
Le gardien`,
    },
    instruction: "Répondez au gardien pour demander de deplacer son velo. Expliquez que l'entrée doit rester libre et proposez le local à velos.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-3-pee-6",
    title: "Porte ouverte",
    situation: "",
    sourceMessage: {
      from: "Syndic",
      subject: "Securite de l'immeuble",
      body: `Bonjour,
La porte d'entrée reste souvent ouverte. Nous devons tous faire attention.
Merci de répondre en expliquant le risque et en remerciant les voisins.
Le syndic`,
    },
    instruction: "Répondez au syndic pour rappeler de fermer la porte d'entrée. Expliquez le risque et remerciez les voisins.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-3-pee-7",
    title: "Fumee couloir",
    situation: "",
    sourceMessage: {
      from: "Syndic",
      subject: "Odeurs dans les parties communes",
      body: `Bonjour,
Merci de nous indiquer si vous constatez des odeurs regulieres dans les couloirs.
Cordialement`,
    },
    instruction: "Répondez au syndic pour signaler la fumée dans le couloir. Décrivez quand cela arrive et demandez un rappel du règlement.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-3-pee-8",
    title: "Cour interieure",
    situation: "",
    sourceMessage: {
      from: "Parents du rez-de-chaussee",
      subject: "Enfants dans la cour",
      body: `Bonjour,
Nos enfants jouent parfois dans la cour après l'école. Dites-nous si cela pose un problème.
Merci`,
    },
    instruction: "Répondez aux parents avec un message poli sur le bruit dans la cour. Proposez des horaires plus adaptes pour les jeux.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-3-pee-9",
    title: "Objets dans le couloir",
    situation: "",
    sourceMessage: {
      from: "Residence Bellevue",
      subject: "Couloirs communs",
      body: `Bonjour,
Les couloirs doivent rester libres pour la securite et le nettoyage.
Merci de répondre en indiquant que le passage doit rester libre.
La residence`,
    },
    instruction: "Répondez à la résidence pour demander de retirer les objets dans le couloir. Expliquez que le passage doit rester libre.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-3-pee-10",
    title: "Affiche de bienvenue",
    situation: "",
    sourceMessage: {
      from: "Syndic",
      subject: "Nouveaux habitants",
      body: `Bonjour,
Nous voulons préparer un message simple pour les nouveaux habitants avec les règles importantes.
Merci`,
    },
    instruction: "Répondez au syndic en proposant un court texte de bienvenue avec les règles principales pour les nouveaux habitants.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-3-pee-11",
    title: "Travaux dimanche",
    situation: "",
    sourceMessage: {
      from: "Voisin",
      subject: "Travaux",
      body: `Bonjour,
Je fais quelques travaux chez moi en ce moment et je vais essayer de terminer vite.
Merci de répondre en rappelant le règlement et en proposant des horaires autorisés.
Cordialement`,
    },
    instruction: "Répondez à votre voisin au sujet des travaux du dimanche. Rappelez le règlement et proposez des horaires autorisés.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-3-pee-12",
    title: "Jardin partage",
    situation: "",
    sourceMessage: {
      from: "Groupe jardin",
      subject: "Organisation du jardin",
      body: `Bonjour,
Nous allons ouvrir le jardin partage au printemps. Quelles règles proposons-nous ?
Le groupe`,
    },
    instruction: "Répondez au groupe de voisins avec des règles simples pour le jardin partage. Parlez du bruit, de la propreté et du respect des plantes.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-3-pee-13",
    title: "Ascenseur sale",
    situation: "",
    sourceMessage: {
      from: "Gardien",
      subject: "Entretien",
      body: `Bonjour,
Je fais le point sur l'entretien des parties communes. Merci de m'ecrire si vous voyez un problème.
Le gardien`,
    },
    instruction: "Répondez au gardien pour signaler que l'ascenseur est souvent sale. Décrivez le problème et demandez un rappel aux habitants.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-3-pee-14",
    title: "Chien qui aboie",
    situation: "",
    sourceMessage: {
      from: "Voisin du 4e",
      subject: "Mon chien",
      body: `Bonjour,
Mon chien reste parfois seul la journée. J'espère qu'il ne dérange pas trop.
Merci de répondre en indiquant quand le chien aboie et en demandant s'il peut trouver une solution.
Cordialement`,
    },
    instruction: "Répondez à votre voisin avec politesse. Expliquez quand le chien aboie et demandez s'il peut trouver une solution.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-3-pee-15",
    title: "Cave commune",
    situation: "",
    sourceMessage: {
      from: "Syndic",
      subject: "Cave commune",
      body: `Bonjour,
La cave commune est difficile à utiliser. Nous cherchons une solution avec les habitants.
Merci`,
    },
    instruction: "Répondez au syndic pour expliquer le problème de rangement dans la cave commune. Proposez une date pour ranger ensemble.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-3-pee-16",
    title: "Linge au balcon",
    situation: "",
    sourceMessage: {
      from: "Residence du Lac",
      subject: "Regles des balcons",
      body: `Bonjour,
Le règlement rappelle que les balcons doivent rester propres et ordonnés.
Merci de répondre en demandant un effort sur le linge au balcon, sans être agressif.
La résidence`,
    },
    instruction: "Répondez à la résidence pour rappeler la règle sur le linge au balcon. Demandez un effort sans être agressif.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-3-pee-17",
    title: "Reunion immeuble",
    situation: "",
    sourceMessage: {
      from: "Conseil syndical",
      subject: "Discussion entre voisins",
      body: `Bonjour,
Plusieurs sujets de vie commune méritent une discussion. Une réunion serait possible.
Merci de répondre en indiquant un jour, une heure et deux sujets à discuter.
Le conseil`,
    },
    instruction: "Répondez au conseil syndical pour proposer une réunion d'immeuble. Donnez un jour, une heure et deux sujets à discuter.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-3-pee-18",
    title: "Tri des dechets",
    situation: "",
    sourceMessage: {
      from: "Mairie",
      subject: "Nouveaux bacs de tri",
      body: `Bonjour,
De nouveaux bacs de tri sont installes dans votre immeuble cette semaine.
Merci de répondre en indiquant simplement où mettre le verre, le papier et les ordures.
La mairie`,
    },
    instruction: "Répondez à la mairie pour encourager le tri des déchets. Expliquez simplement où mettre le verre, le papier et les ordures.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-3-pee-19",
    title: "Merci aux habitants",
    situation: "",
    sourceMessage: {
      from: "Syndic",
      subject: "Propreté amelioree",
      body: `Bonjour,
Les parties communes sont plus propres depuis deux semaines. Nous voulons remercier les habitants.
Le syndic`,
    },
    instruction: "Répondez au syndic avec un message de remerciement pour les habitants. Encouragez tout le monde à continuer les efforts de propreté.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-3-pee-20",
    title: "Nouvel habitant",
    situation: "",
    sourceMessage: {
      from: "Nouveau locataire",
      subject: "Bonjour",
      body: `Bonjour,
Je viens d'arriver dans l'immeuble. Y a-t-il des règles importantes à connaitre ?
Merci`,
    },
    instruction: "Répondez à Nouveau locataire pour lui présenter les règles principales de l'immeuble de manière amicale.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },

];
