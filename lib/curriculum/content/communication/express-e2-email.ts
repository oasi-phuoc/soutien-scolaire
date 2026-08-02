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
    title: "Confirmer une visite",
    situation: "La régie vous propose une visite d'appartement.",
    sourceMessage: {
      from: "Régie Immoplus",
      subject: "Visite de l'appartement",
      body: "Bonjour,\nNous pouvons vous proposer une visite de l'appartement mardi à 17 h ou jeudi à 12 h.\nQuelle date vous convient ?\nMeilleures salutations,\nLa régie",
    },
    instruction: "Répondez à la régie : choisissez une date, remerciez et posez une question sur le loyer.",
    points: ["La date choisie", "Un remerciement", "Une question sur le loyer"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-1-pee-2",
    title: "Décrire son nouveau logement",
    situation: "Une amie veut des nouvelles de votre déménagement.",
    sourceMessage: {
      from: "Elena",
      subject: "Ton nouvel appartement",
      body: "Coucou,\nAlors, ce déménagement ? Il est comment, ton nouvel appartement ?\nIl y a combien de pièces ? Raconte !\nElena",
    },
    instruction: "Répondez à Elena : décrivez votre appartement, dites combien il y a de pièces et à quel étage vous habitez.",
    points: ["La description de l'appartement", "Le nombre de pièces", "L'étage"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-1-pee-3",
    title: "Un appartement pour un ami",
    situation: "Un ami cherche un logement. Un appartement est libre dans votre immeuble.",
    sourceMessage: {
      from: "Pedro",
      subject: "Je cherche un appartement",
      body: "Salut,\nJe cherche un appartement dans ton quartier.\nTu connais quelque chose de libre ? Je cherche deux pièces, pas trop cher.\nPedro",
    },
    instruction: "Répondez à Pedro : décrivez l'appartement libre dans votre immeuble, donnez le prix du loyer et l'étage.",
    points: ["La description de l'appartement", "Le loyer", "L'étage"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-1-pee-4",
    title: "Compléter son dossier",
    situation: "La régie a besoin d'informations pour votre dossier.",
    sourceMessage: {
      from: "Régie du Parc",
      subject: "Votre dossier",
      body: "Bonjour,\nNous avons bien reçu votre dossier pour l'appartement de trois pièces.\nCombien de personnes habitent avec vous ? Avez-vous des animaux ?\nLa régie",
    },
    instruction: "Répondez à la régie : dites combien de personnes habitent avec vous, répondez pour les animaux et posez une question sur l'appartement.",
    points: ["Le nombre de personnes", "La réponse pour les animaux", "Une question sur l'appartement"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-1-pee-5",
    title: "Préparer la visite d'un cousin",
    situation: "Votre cousin vient dormir chez vous le mois prochain.",
    sourceMessage: {
      from: "Andrés",
      subject: "Ma visite",
      body: "Salut !\nJe viens chez toi le mois prochain, super !\nIl est comment, ton appartement ? Il y a une chambre pour moi ?\nAndrés",
    },
    instruction: "Répondez à Andrés : décrivez votre appartement, dites où il peut dormir et donnez votre adresse.",
    points: ["La description de l'appartement", "Où il peut dormir", "Votre adresse"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-1-pee-6",
    title: "Répondre à une annonce",
    situation: "Vous avez vu une annonce pour un appartement de trois pièces.",
    sourceMessage: {
      from: "M. Blanc",
      subject: "Annonce : appartement 3 pièces",
      body: "Bonjour,\nMerci de votre intérêt pour mon appartement de trois pièces au centre-ville.\nQue voulez-vous savoir ?\nM. Blanc",
    },
    instruction: "Répondez à M. Blanc : posez une question sur le loyer, une question sur l'étage et demandez une visite.",
    points: ["Une question sur le loyer", "Une question sur l'étage", "Une demande de visite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-1-pee-7",
    title: "Parler de son quartier",
    situation: "Une amie va habiter dans votre ville et pose des questions.",
    sourceMessage: {
      from: "Nadia",
      subject: "Ton quartier",
      body: "Bonjour,\nJe vais habiter dans ta ville en septembre !\nTon quartier est bien ? C'est calme ? Il y a des magasins ?\nNadia",
    },
    instruction: "Répondez à Nadia : décrivez votre quartier, dites ce qu'il y a près de chez vous et si c'est calme.",
    points: ["La description du quartier", "Ce qu'il y a près de chez vous", "Si c'est calme ou bruyant"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-1-pee-8",
    title: "Rassurer ses parents",
    situation: "Vos parents s'inquiètent pour votre nouveau studio.",
    sourceMessage: {
      from: "Maman",
      subject: "Ton studio",
      body: "Coucou,\nAlors, ce studio ? Il est assez grand ? Il y a tout ce qu'il faut ?\nEnvoie-nous des photos !\nMaman",
    },
    instruction: "Répondez à votre mère : décrivez le studio, dites ce qu'il y a dedans et rassurez-la.",
    points: ["La description du studio", "Les meubles et équipements", "Une phrase pour rassurer"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-1-pee-9",
    title: "Échange d'appartements",
    situation: "Pour les vacances, vous échangez votre logement avec une famille.",
    sourceMessage: {
      from: "Famille Dubois",
      subject: "Échange pour les vacances",
      body: "Bonjour,\nNous sommes intéressés par un échange d'appartements en août.\nPouvez-vous décrire votre logement ? Combien de personnes peuvent dormir chez vous ?\nFamille Dubois",
    },
    instruction: "Répondez à la famille Dubois : décrivez votre logement, dites combien de personnes peuvent dormir et parlez du quartier.",
    points: ["La description du logement", "Le nombre de lits", "Le quartier"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-1-pee-10",
    title: "Accepter un canapé",
    situation: "Un ami déménage et vous propose son canapé.",
    sourceMessage: {
      from: "Hugo",
      subject: "Mon canapé",
      body: "Salut,\nJe déménage et je donne mon canapé. Il est bleu, en bon état.\nTu le veux ? Il est grand : deux mètres.\nHugo",
    },
    instruction: "Répondez à Hugo : acceptez le canapé, décrivez votre salon et dites quand il peut l'apporter.",
    points: ["Votre accord", "La description de votre salon", "Quand il peut l'apporter"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
{
  id: "e2-1-pee-11",
  title: "Répondre à un e-mail — variante 11",
  situation: "Vous recevez un e-mail de Contact 11.",
  sourceMessage: {
    from: "Contact 11",
    subject: "Question sur e2-1",
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
  id: "e2-1-pee-12",
  title: "Répondre à un e-mail — variante 12",
  situation: "Vous recevez un e-mail de Contact 12.",
  sourceMessage: {
    from: "Contact 12",
    subject: "Question sur e2-1",
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
  id: "e2-1-pee-13",
  title: "Répondre à un e-mail — variante 13",
  situation: "Vous recevez un e-mail de Contact 13.",
  sourceMessage: {
    from: "Contact 13",
    subject: "Question sur e2-1",
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
  id: "e2-1-pee-14",
  title: "Répondre à un e-mail — variante 14",
  situation: "Vous recevez un e-mail de Contact 14.",
  sourceMessage: {
    from: "Contact 14",
    subject: "Question sur e2-1",
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
  id: "e2-1-pee-15",
  title: "Répondre à un e-mail — variante 15",
  situation: "Vous recevez un e-mail de Contact 15.",
  sourceMessage: {
    from: "Contact 15",
    subject: "Question sur e2-1",
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
  id: "e2-1-pee-16",
  title: "Répondre à un e-mail — variante 16",
  situation: "Vous recevez un e-mail de Contact 16.",
  sourceMessage: {
    from: "Contact 16",
    subject: "Question sur e2-1",
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
  id: "e2-1-pee-17",
  title: "Répondre à un e-mail — variante 17",
  situation: "Vous recevez un e-mail de Contact 17.",
  sourceMessage: {
    from: "Contact 17",
    subject: "Question sur e2-1",
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
  id: "e2-1-pee-18",
  title: "Répondre à un e-mail — variante 18",
  situation: "Vous recevez un e-mail de Contact 18.",
  sourceMessage: {
    from: "Contact 18",
    subject: "Question sur e2-1",
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
  id: "e2-1-pee-19",
  title: "Répondre à un e-mail — variante 19",
  situation: "Vous recevez un e-mail de Contact 19.",
  sourceMessage: {
    from: "Contact 19",
    subject: "Question sur e2-1",
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
  id: "e2-1-pee-20",
  title: "Répondre à un e-mail — variante 20",
  situation: "Vous recevez un e-mail de Contact 20.",
  sourceMessage: {
    from: "Contact 20",
    subject: "Question sur e2-1",
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
    title: "Signaler une panne de chauffage",
    situation: "La régie demande si tout va bien dans votre appartement.",
    sourceMessage: {
      from: "Régie Immoplus",
      subject: "Contrôle annuel",
      body: "Bonjour,\nNous préparons le contrôle annuel de l'immeuble.\nAvez-vous des problèmes dans votre appartement ?\nMeilleures salutations,\nLa régie",
    },
    instruction: "Répondez à la régie : expliquez que le chauffage ne marche pas, dites depuis quand et demandez un réparateur.",
    points: ["Le problème de chauffage", "Depuis quand", "La demande d'un réparateur"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-2-pee-2",
    title: "Changer la date du plombier",
    situation: "La régie propose une date, mais vous travaillez ce jour-là.",
    sourceMessage: {
      from: "Régie Immoplus",
      subject: "Visite du plombier",
      body: "Bonjour,\nLe plombier peut venir chez vous mardi matin, entre 8 h et 10 h.\nÊtes-vous à la maison ?\nLa régie",
    },
    instruction: "Répondez à la régie : expliquez que vous travaillez mardi matin, proposez un autre jour et remerciez.",
    points: ["Pourquoi mardi ne va pas", "Un autre jour possible", "Un remerciement"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-2-pee-3",
    title: "S'excuser auprès d'un voisin",
    situation: "Votre voisin du dessous a un problème à cause de votre fuite d'eau.",
    sourceMessage: {
      from: "M. Rossi",
      subject: "Eau au plafond",
      body: "Bonjour,\nIl y a de l'eau sur mon plafond, dans la salle de bains.\nJe pense que ça vient de chez vous. Pouvez-vous vérifier ?\nM. Rossi",
    },
    instruction: "Répondez à M. Rossi : excusez-vous, expliquez la fuite d'eau et dites quand le plombier vient.",
    points: ["Les excuses", "L'explication de la fuite", "Quand le plombier vient"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-2-pee-4",
    title: "Décrire une panne",
    situation: "Le service de dépannage demande des détails avant de venir.",
    sourceMessage: {
      from: "SOS Dépannage",
      subject: "Votre demande de réparation",
      body: "Bonjour,\nNous avons reçu votre demande de réparation.\nQuel est l'appareil en panne ? Quel est le problème exactement ?\nSOS Dépannage",
    },
    instruction: "Répondez à SOS Dépannage : dites que la machine à laver est en panne, décrivez le problème et donnez votre adresse.",
    points: ["L'appareil en panne", "La description du problème", "Votre adresse"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-2-pee-5",
    title: "Après la réparation",
    situation: "Le propriétaire demande si la réparation est bien faite.",
    sourceMessage: {
      from: "M. Blanc",
      subject: "La réparation",
      body: "Bonjour,\nLe technicien est venu chez vous hier pour le chauffage.\nEst-ce que tout marche bien maintenant ?\nM. Blanc",
    },
    instruction: "Répondez à M. Blanc : remerciez-le, dites que le chauffage marche bien et racontez la visite du technicien.",
    points: ["Un remerciement", "Le chauffage marche", "La visite du technicien"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-2-pee-6",
    title: "Conseiller un ami",
    situation: "Une amie a un problème avec son frigo.",
    sourceMessage: {
      from: "Carla",
      subject: "Mon frigo est en panne",
      body: "Salut,\nMon frigo ne marche plus depuis ce matin !\nQu'est-ce que je peux faire ? Tu connais un bon réparateur ?\nCarla",
    },
    instruction: "Répondez à Carla : donnez-lui un conseil, recommandez un réparateur et donnez son numéro de téléphone.",
    points: ["Un conseil", "Le réparateur recommandé", "Le numéro de téléphone"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-2-pee-7",
    title: "Coupure d'électricité",
    situation: "La régie annonce des travaux dans l'immeuble.",
    sourceMessage: {
      from: "Régie du Parc",
      subject: "Coupure d'électricité",
      body: "Bonjour,\nPour des travaux, l'électricité est coupée jeudi dans l'immeuble.\nMerci de votre compréhension.\nLa régie",
    },
    instruction: "Répondez à la régie : demandez à quelle heure commence la coupure, combien de temps elle dure et expliquez pourquoi c'est important pour vous.",
    points: ["Une question sur l'heure", "Une question sur la durée", "Pourquoi c'est important pour vous"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-2-pee-8",
    title: "Une facture trop chère",
    situation: "Le réparateur vous envoie sa facture.",
    sourceMessage: {
      from: "SOS Dépannage",
      subject: "Facture n° 234",
      body: "Bonjour,\nVoici la facture pour la réparation de votre machine à laver : 300 francs.\nMerci de payer avant la fin du mois.\nSOS Dépannage",
    },
    instruction: "Répondez à SOS Dépannage : dites que la facture est trop chère, rappelez le prix annoncé au téléphone et demandez une explication.",
    points: ["La facture est trop chère", "Le prix annoncé au téléphone", "Une demande d'explication"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-2-pee-9",
    title: "Prévenir son chef",
    situation: "Le plombier vient demain matin et vous devez rester à la maison.",
    sourceMessage: {
      from: "Mme Favre",
      subject: "Réunion de demain",
      body: "Bonjour,\nLa réunion d'équipe a lieu demain à 9 h. Merci de confirmer votre présence.\nBonne journée,\nMme Favre",
    },
    instruction: "Répondez à votre cheffe : excusez-vous, expliquez la fuite d'eau et la visite du plombier, et dites quand vous arrivez au travail.",
    points: ["L'excuse", "La fuite d'eau et le plombier", "Quand vous arrivez au travail"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-2-pee-10",
    title: "Choisir une date d'entretien",
    situation: "La régie organise l'entretien du chauffage dans tous les appartements.",
    sourceMessage: {
      from: "Régie Immoplus",
      subject: "Entretien du chauffage",
      body: "Bonjour,\nNous organisons l'entretien du chauffage dans votre appartement.\nLe technicien peut venir lundi, mercredi ou vendredi, le matin.\nQuel jour choisissez-vous ?\nLa régie",
    },
    instruction: "Répondez à la régie : choisissez un jour, dites qui est à la maison ce jour-là et posez une question sur la durée de l'entretien.",
    points: ["Le jour choisi", "Qui est à la maison", "Une question sur la durée"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
{
  id: "e2-2-pee-11",
  title: "Répondre à un e-mail — variante 11",
  situation: "Vous recevez un e-mail de Contact 11.",
  sourceMessage: {
    from: "Contact 11",
    subject: "Question sur e2-2",
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
  id: "e2-2-pee-12",
  title: "Répondre à un e-mail — variante 12",
  situation: "Vous recevez un e-mail de Contact 12.",
  sourceMessage: {
    from: "Contact 12",
    subject: "Question sur e2-2",
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
  id: "e2-2-pee-13",
  title: "Répondre à un e-mail — variante 13",
  situation: "Vous recevez un e-mail de Contact 13.",
  sourceMessage: {
    from: "Contact 13",
    subject: "Question sur e2-2",
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
  id: "e2-2-pee-14",
  title: "Répondre à un e-mail — variante 14",
  situation: "Vous recevez un e-mail de Contact 14.",
  sourceMessage: {
    from: "Contact 14",
    subject: "Question sur e2-2",
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
  id: "e2-2-pee-15",
  title: "Répondre à un e-mail — variante 15",
  situation: "Vous recevez un e-mail de Contact 15.",
  sourceMessage: {
    from: "Contact 15",
    subject: "Question sur e2-2",
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
  id: "e2-2-pee-16",
  title: "Répondre à un e-mail — variante 16",
  situation: "Vous recevez un e-mail de Contact 16.",
  sourceMessage: {
    from: "Contact 16",
    subject: "Question sur e2-2",
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
  id: "e2-2-pee-17",
  title: "Répondre à un e-mail — variante 17",
  situation: "Vous recevez un e-mail de Contact 17.",
  sourceMessage: {
    from: "Contact 17",
    subject: "Question sur e2-2",
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
  id: "e2-2-pee-18",
  title: "Répondre à un e-mail — variante 18",
  situation: "Vous recevez un e-mail de Contact 18.",
  sourceMessage: {
    from: "Contact 18",
    subject: "Question sur e2-2",
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
  id: "e2-2-pee-19",
  title: "Répondre à un e-mail — variante 19",
  situation: "Vous recevez un e-mail de Contact 19.",
  sourceMessage: {
    from: "Contact 19",
    subject: "Question sur e2-2",
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
  id: "e2-2-pee-20",
  title: "Répondre à un e-mail — variante 20",
  situation: "Vous recevez un e-mail de Contact 20.",
  sourceMessage: {
    from: "Contact 20",
    subject: "Question sur e2-2",
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
    title: "S'excuser pour le bruit",
    situation: "La régie vous écrit après une soirée chez vous.",
    sourceMessage: {
      from: "Régie du Parc",
      subject: "Bruit samedi soir",
      body: "Bonjour,\nDes voisins se plaignent du bruit dans votre appartement samedi soir, après 23 h.\nMerci de respecter le règlement de l'immeuble.\nLa régie",
    },
    instruction: "Répondez à la régie : excusez-vous, expliquez que c'était un anniversaire et promettez de respecter le règlement.",
    points: ["Les excuses", "L'explication de la soirée", "La promesse de respecter le règlement"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-3-pee-2",
    title: "Le chien qui aboie",
    situation: "Un voisin se plaint de votre chien.",
    sourceMessage: {
      from: "M. Rossi",
      subject: "Votre chien",
      body: "Bonjour,\nVotre chien aboie toute la journée quand vous n'êtes pas là.\nC'est difficile pour les voisins. Pouvez-vous faire quelque chose ?\nM. Rossi",
    },
    instruction: "Répondez à M. Rossi : excusez-vous, expliquez la situation et proposez une solution.",
    points: ["Les excuses", "L'explication", "Une solution"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-3-pee-3",
    title: "Les poubelles",
    situation: "La régie vous rappelle les jours des poubelles.",
    sourceMessage: {
      from: "Régie du Parc",
      subject: "Rappel : les poubelles",
      body: "Bonjour,\nRappel : les poubelles sortent le lundi et le jeudi seulement.\nMerci de respecter ces jours.\nLa régie",
    },
    instruction: "Répondez à la régie : excusez-vous pour l'erreur, dites que vous êtes nouveau dans l'immeuble et posez une question sur le recyclage.",
    points: ["Les excuses", "Vous êtes nouveau", "Une question sur le recyclage"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-3-pee-4",
    title: "Le linge oublié",
    situation: "Une voisine vous écrit au sujet de la buanderie.",
    sourceMessage: {
      from: "Mme Keller",
      subject: "Votre linge dans la buanderie",
      body: "Bonjour,\nVotre linge est encore dans la machine et c'est mon jour de buanderie.\nPouvez-vous venir le chercher ?\nMerci,\nMme Keller",
    },
    instruction: "Répondez à Mme Keller : excusez-vous, remerciez-la pour son message et dites quand vous venez chercher votre linge.",
    points: ["Les excuses", "Un remerciement", "Quand vous venez chercher le linge"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-3-pee-5",
    title: "Réserver la buanderie",
    situation: "La régie change le système de réservation de la buanderie.",
    sourceMessage: {
      from: "Régie du Parc",
      subject: "Nouvelle liste de buanderie",
      body: "Bonjour,\nÀ partir du mois prochain, réservez votre jour de buanderie par e-mail.\nQuel jour voulez-vous ?\nLa régie",
    },
    instruction: "Répondez à la régie : choisissez un jour, expliquez pourquoi ce jour vous convient et posez une question sur les horaires.",
    points: ["Le jour choisi", "Pourquoi ce jour", "Une question sur les horaires"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-3-pee-6",
    title: "Le vélo dans le hall",
    situation: "Un voisin vous demande de déplacer votre vélo.",
    sourceMessage: {
      from: "M. Diallo",
      subject: "Votre vélo",
      body: "Bonjour,\nVotre vélo est dans le hall d'entrée et il bloque le passage.\nPouvez-vous le ranger dans le local à vélos ?\nMerci,\nM. Diallo",
    },
    instruction: "Répondez à M. Diallo : excusez-vous, expliquez pourquoi le vélo est dans le hall et dites quand vous le rangez.",
    points: ["Les excuses", "Pourquoi le vélo est là", "Quand vous le rangez"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-3-pee-7",
    title: "La réunion des locataires",
    situation: "La régie invite tous les locataires à une réunion.",
    sourceMessage: {
      from: "Régie du Parc",
      subject: "Réunion des locataires",
      body: "Bonjour,\nLa réunion des locataires a lieu le mardi 5 mai à 19 h, dans le hall.\nNous parlons du nouveau règlement. Merci de confirmer votre présence.\nLa régie",
    },
    instruction: "Répondez à la régie : confirmez votre présence, remerciez pour l'invitation et posez une question sur le nouveau règlement.",
    points: ["La confirmation", "Un remerciement", "Une question sur le règlement"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-3-pee-8",
    title: "Expliquer les règles",
    situation: "Une nouvelle voisine pose des questions sur l'immeuble.",
    sourceMessage: {
      from: "Mme Lopez",
      subject: "Les règles de l'immeuble",
      body: "Bonjour,\nJe suis votre nouvelle voisine du deuxième étage.\nPouvez-vous m'expliquer les règles de l'immeuble ? Pour le bruit, les poubelles, la buanderie ?\nMerci,\nMme Lopez",
    },
    instruction: "Répondez à Mme Lopez : souhaitez-lui la bienvenue, expliquez la règle du bruit et les jours des poubelles.",
    points: ["La bienvenue", "La règle du bruit", "Les jours des poubelles"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-3-pee-9",
    title: "Nettoyage du local à vélos",
    situation: "La régie annonce le nettoyage du local à vélos.",
    sourceMessage: {
      from: "Régie du Parc",
      subject: "Nettoyage du local à vélos",
      body: "Bonjour,\nNous nettoyons le local à vélos vendredi.\nMerci de sortir votre vélo avant jeudi soir.\nLa régie",
    },
    instruction: "Répondez à la régie : dites que vous avez compris, demandez où mettre le vélo pendant le nettoyage et quand le local rouvre.",
    points: ["Vous avez compris", "Où mettre le vélo", "Quand le local rouvre"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-3-pee-10",
    title: "La fête des voisins",
    situation: "Un voisin organise la fête des voisins dans le jardin.",
    sourceMessage: {
      from: "M. Perret",
      subject: "Fête des voisins",
      body: "Bonjour à tous,\nJ'organise la fête des voisins samedi à 17 h, dans le jardin de l'immeuble.\nChacun apporte quelque chose. Vous venez ?\nM. Perret",
    },
    instruction: "Répondez à M. Perret : acceptez l'invitation, dites ce que vous apportez et demandez à quelle heure la fête finit.",
    points: ["Votre accord", "Ce que vous apportez", "Une question sur l'heure de fin"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
{
  id: "e2-3-pee-11",
  title: "Répondre à un e-mail — variante 11",
  situation: "Vous recevez un e-mail de Contact 11.",
  sourceMessage: {
    from: "Contact 11",
    subject: "Question sur e2-3",
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
  id: "e2-3-pee-12",
  title: "Répondre à un e-mail — variante 12",
  situation: "Vous recevez un e-mail de Contact 12.",
  sourceMessage: {
    from: "Contact 12",
    subject: "Question sur e2-3",
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
  id: "e2-3-pee-13",
  title: "Répondre à un e-mail — variante 13",
  situation: "Vous recevez un e-mail de Contact 13.",
  sourceMessage: {
    from: "Contact 13",
    subject: "Question sur e2-3",
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
  id: "e2-3-pee-14",
  title: "Répondre à un e-mail — variante 14",
  situation: "Vous recevez un e-mail de Contact 14.",
  sourceMessage: {
    from: "Contact 14",
    subject: "Question sur e2-3",
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
  id: "e2-3-pee-15",
  title: "Répondre à un e-mail — variante 15",
  situation: "Vous recevez un e-mail de Contact 15.",
  sourceMessage: {
    from: "Contact 15",
    subject: "Question sur e2-3",
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
  id: "e2-3-pee-16",
  title: "Répondre à un e-mail — variante 16",
  situation: "Vous recevez un e-mail de Contact 16.",
  sourceMessage: {
    from: "Contact 16",
    subject: "Question sur e2-3",
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
  id: "e2-3-pee-17",
  title: "Répondre à un e-mail — variante 17",
  situation: "Vous recevez un e-mail de Contact 17.",
  sourceMessage: {
    from: "Contact 17",
    subject: "Question sur e2-3",
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
  id: "e2-3-pee-18",
  title: "Répondre à un e-mail — variante 18",
  situation: "Vous recevez un e-mail de Contact 18.",
  sourceMessage: {
    from: "Contact 18",
    subject: "Question sur e2-3",
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
  id: "e2-3-pee-19",
  title: "Répondre à un e-mail — variante 19",
  situation: "Vous recevez un e-mail de Contact 19.",
  sourceMessage: {
    from: "Contact 19",
    subject: "Question sur e2-3",
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
  id: "e2-3-pee-20",
  title: "Répondre à un e-mail — variante 20",
  situation: "Vous recevez un e-mail de Contact 20.",
  sourceMessage: {
    from: "Contact 20",
    subject: "Question sur e2-3",
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
