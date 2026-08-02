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


/* ── Compréhension écrite — E8.1 Bilan A1 ── */

const E8_1_CE_TEXT_1 = `Bonjour Léa,

Comment vas-tu ? Moi, tout va bien ! J'habite dans un appartement grand et lumineux. Il a une belle terrasse. Le quartier est calme et les voisins sont sympas.
Je travaille comme serveuse dans un restaurant italien. Je commence à 10 heures et je finis tard. Le lundi, le restaurant est fermé : je me repose !
En juillet, je pars en vacances. Je pars deux semaines au Portugal avec mon frère. On prend le train, c'est plus simple que l'avion.
Viens me voir bientôt ! Samedi, il y a un festival de musique au bord du lac.

À bientôt,
Emma`;

const E8_1_CE_POOL_1 = buildExpressPool("e8-1-ce-1", [
q({
    id: "ce-q1",
    textQ: "Comment est l'appartement d'Emma ?",
    text: ["Grand et lumineux", "Petit et sombre", "Vieux et bruyant"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "J'habite dans un appartement grand et _________.",
    fill: "lumineux",
    vfQ: "L'appartement d'Emma a une belle terrasse.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Comment sont les voisins d'Emma ?",
    text: ["Sympas", "Désagréables", "Bruyants"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Le quartier est calme et les voisins sont _________.",
    fill: "sympas",
    vfQ: "Le quartier d'Emma est très bruyant.",
    vfC: 1,
  }),
  q({
    id: "ce-q3",
    textQ: "Quel est le travail d'Emma ?",
    text: ["Serveuse", "Cuisinière", "Fleuriste"],
    textC: 0,
    img: ["serveuse", "cuisinier", "fleuriste"],
    imgC: 0,
    fillQ: "Je travaille comme _________ dans un restaurant italien.",
    fill: "serveuse",
    vfQ: "Emma travaille dans un restaurant italien.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel jour Emma se repose-t-elle ?",
    text: ["Le lundi", "Le samedi", "Le dimanche"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Le lundi, le restaurant est _________ : je me repose !",
    fill: "fermé",
    fillA: ["ferme"],
    vfQ: "Emma finit son travail tôt le soir.",
    vfC: 1,
  }),
  q({
    id: "ce-q5",
    textQ: "Combien de temps durent les vacances d'Emma ?",
    text: ["Deux semaines", "Une semaine", "Un mois"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Je pars _________ semaines au Portugal avec mon frère.",
    fill: "deux",
    fillA: ["2"],
    vfQ: "Emma part un mois en vacances.",
    vfC: 1,
  }),
  q({
    id: "ce-q6",
    textQ: "Comment Emma voyage-t-elle jusqu'au Portugal ?",
    text: ["En train", "En avion", "En bus"],
    textC: 0,
    img: ["train", "avion", "bus"],
    imgC: 0,
    fillQ: "On prend le _________, c'est plus simple que l'avion.",
    fill: "train",
    vfQ: "Pour Emma, le train est plus simple que l'avion.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Qu'est-ce qu'il y a samedi au bord du lac ?",
    text: ["Un festival de musique", "Un match de football", "Un marché"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Samedi, il y a un festival de _________ au bord du lac.",
    fill: "musique",
    vfQ: "Le prix du billet du festival est indiqué dans l'e-mail.",
    vfC: 2,
  }),
  q({
    id: "ce-q8",
    textQ: "Avec qui Emma part-elle en vacances ?",
    text: ["Avec son frère", "Avec sa sœur", "Avec ses parents"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Je pars deux semaines au Portugal avec mon _________.",
    fill: "frère",
    fillA: ["frere"],
    vfQ: "Emma invite Léa à venir la voir.",
    vfC: 0,
  }),
]);

const E8_1_CE_TEXT_2 = `Bonjour !

Je m'appelle Emma. J'ai 21 ans et j'habite à Lausanne.
Je travaille comme vendeur dans un magasin.
Je commence à 9 h et je finis à 18 h.
Le mardi, je ne travaille pas.
J'ai un sœur qui s'appelle Luna.
En été, je pars en vacances au Italie.
J'aime le cinéma et la musique.

À bientôt,
Emma`;

const E8_1_CE_POOL_2 = buildExpressPool("e8-1-ce-2", [
  q({
    id: "ce-q1",
    textQ: "Comment s'appelle la personne ?",
    text: ["Emma", "Marie", "Jean"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Emma",
    vfQ: "La personne s'appelle Emma.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Où habite-t-elle ?",
    text: ["À Lausanne", "À Paris", "À Genève"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "J'habite à _________.",
    fill: "Lausanne",
    vfQ: "Emma habite à Lausanne.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quel est son métier ?",
    text: ["Vendeur", "Pilote", "Agriculteur"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Je travaille comme _________.",
    fill: "vendeur",
    vfQ: "Emma est vendeur.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel jour ne travaille-t-elle pas ?",
    text: ["Mardi", "Samedi", "Dimanche"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Le _________, je ne travaille pas.",
    fill: "mardi",
    vfQ: "Elle ne travaille pas le mardi.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Où part-elle en vacances ?",
    text: ["Italie", "Japon", "Canada"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Je pars en vacances au _________.",
    fill: "Italie",
    vfQ: "Elle part en vacances en été.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Qu'est-ce qu'elle aime ?",
    text: ["cinéma", "Dormir", "Rien"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "J'aime le _________.",
    fill: "cinéma",
    vfQ: "Elle aime le cinéma.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Le salaire est-il indiqué ?",
    text: ["Non", "Oui", "En annexe"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Le _________ n'est pas indiqué.",
    fill: "salaire",
    vfQ: "Le salaire est indiqué.",
    vfC: 1,
  }),
]);

const E8_1_CE_TEXT_3 = `Bonjour !

Je m'appelle Lucas. J'ai 22 ans et j'habite à Lausanne.
Je travaille comme infirmier dans un hôpital.
Je commence à 10 h et je finis à 19 h.
Le mercredi, je ne travaille pas.
J'ai un chat qui s'appelle Oscar.
En été, je pars en vacances au Espagne.
J'aime le lecture et la musique.

À bientôt,
Lucas`;

const E8_1_CE_POOL_3 = buildExpressPool("e8-1-ce-3", [
  q({
    id: "ce-q1",
    textQ: "Comment s'appelle la personne ?",
    text: ["Lucas", "Marie", "Jean"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Lucas",
    vfQ: "La personne s'appelle Lucas.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Où habite-t-elle ?",
    text: ["À Lausanne", "À Paris", "À Genève"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "J'habite à _________.",
    fill: "Lausanne",
    vfQ: "Lucas habite à Lausanne.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quel est son métier ?",
    text: ["Infirmier", "Pilote", "Agriculteur"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Je travaille comme _________.",
    fill: "infirmier",
    vfQ: "Lucas est infirmier.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel jour ne travaille-t-elle pas ?",
    text: ["Mercredi", "Samedi", "Dimanche"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Le _________, je ne travaille pas.",
    fill: "mercredi",
    vfQ: "Elle ne travaille pas le mercredi.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Où part-elle en vacances ?",
    text: ["Espagne", "Japon", "Canada"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Je pars en vacances au _________.",
    fill: "Espagne",
    vfQ: "Elle part en vacances en été.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Qu'est-ce qu'elle aime ?",
    text: ["lecture", "Dormir", "Rien"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "J'aime le _________.",
    fill: "lecture",
    vfQ: "Elle aime le lecture.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Le salaire est-il indiqué ?",
    text: ["Non", "Oui", "En annexe"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Le _________ n'est pas indiqué.",
    fill: "salaire",
    vfQ: "Le salaire est indiqué.",
    vfC: 1,
  }),
]);

const E8_1_CE_TEXT_4 = `Bonjour !

Je m'appelle Sofia. J'ai 23 ans et j'habite à Lausanne.
Je travaille comme professeur dans un école.
Je commence à 8 h et je finis à 17 h.
Le jeudi, je ne travaille pas.
J'ai un chien qui s'appelle Mia.
En été, je pars en vacances au France.
J'aime le cuisine et la musique.

À bientôt,
Sofia`;

const E8_1_CE_POOL_4 = buildExpressPool("e8-1-ce-4", [
  q({
    id: "ce-q1",
    textQ: "Comment s'appelle la personne ?",
    text: ["Sofia", "Marie", "Jean"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Sofia",
    vfQ: "La personne s'appelle Sofia.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Où habite-t-elle ?",
    text: ["À Lausanne", "À Paris", "À Genève"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "J'habite à _________.",
    fill: "Lausanne",
    vfQ: "Sofia habite à Lausanne.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quel est son métier ?",
    text: ["Professeur", "Pilote", "Agriculteur"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Je travaille comme _________.",
    fill: "professeur",
    vfQ: "Sofia est professeur.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel jour ne travaille-t-elle pas ?",
    text: ["Jeudi", "Samedi", "Dimanche"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Le _________, je ne travaille pas.",
    fill: "jeudi",
    vfQ: "Elle ne travaille pas le jeudi.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Où part-elle en vacances ?",
    text: ["France", "Japon", "Canada"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Je pars en vacances au _________.",
    fill: "France",
    vfQ: "Elle part en vacances en été.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Qu'est-ce qu'elle aime ?",
    text: ["cuisine", "Dormir", "Rien"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "J'aime le _________.",
    fill: "cuisine",
    vfQ: "Elle aime le cuisine.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Le salaire est-il indiqué ?",
    text: ["Non", "Oui", "En annexe"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Le _________ n'est pas indiqué.",
    fill: "salaire",
    vfQ: "Le salaire est indiqué.",
    vfC: 1,
  }),
]);

const E8_1_CE_TEXT_5 = `Bonjour !

Je m'appelle Marco. J'ai 24 ans et j'habite à Lausanne.
Je travaille comme cuisinier dans un café.
Je commence à 9 h et je finis à 18 h.
Le vendredi, je ne travaille pas.
J'ai un frère qui s'appelle Max.
En été, je pars en vacances au Portugal.
J'aime le football et la musique.

À bientôt,
Marco`;

const E8_1_CE_POOL_5 = buildExpressPool("e8-1-ce-5", [
  q({
    id: "ce-q1",
    textQ: "Comment s'appelle la personne ?",
    text: ["Marco", "Marie", "Jean"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Marco",
    vfQ: "La personne s'appelle Marco.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Où habite-t-elle ?",
    text: ["À Lausanne", "À Paris", "À Genève"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "J'habite à _________.",
    fill: "Lausanne",
    vfQ: "Marco habite à Lausanne.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quel est son métier ?",
    text: ["Cuisinier", "Pilote", "Agriculteur"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Je travaille comme _________.",
    fill: "cuisinier",
    vfQ: "Marco est cuisinier.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel jour ne travaille-t-elle pas ?",
    text: ["Vendredi", "Samedi", "Dimanche"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Le _________, je ne travaille pas.",
    fill: "vendredi",
    vfQ: "Elle ne travaille pas le vendredi.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Où part-elle en vacances ?",
    text: ["Portugal", "Japon", "Canada"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Je pars en vacances au _________.",
    fill: "Portugal",
    vfQ: "Elle part en vacances en été.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Qu'est-ce qu'elle aime ?",
    text: ["football", "Dormir", "Rien"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "J'aime le _________.",
    fill: "football",
    vfQ: "Elle aime le football.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Le salaire est-il indiqué ?",
    text: ["Non", "Oui", "En annexe"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Le _________ n'est pas indiqué.",
    fill: "salaire",
    vfQ: "Le salaire est indiqué.",
    vfC: 1,
  }),
]);

const E8_1_CE_TEXT_6 = `Bonjour !

Je m'appelle Leila. J'ai 25 ans et j'habite à Lausanne.
Je travaille comme coiffeur dans un salon.
Je commence à 10 h et je finis à 19 h.
Le lundi, je ne travaille pas.
J'ai un sœur qui s'appelle Luna.
En été, je pars en vacances au Italie.
J'aime le cinéma et la musique.

À bientôt,
Leila`;

const E8_1_CE_POOL_6 = buildExpressPool("e8-1-ce-6", [
  q({
    id: "ce-q1",
    textQ: "Comment s'appelle la personne ?",
    text: ["Leila", "Marie", "Jean"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Leila",
    vfQ: "La personne s'appelle Leila.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Où habite-t-elle ?",
    text: ["À Lausanne", "À Paris", "À Genève"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "J'habite à _________.",
    fill: "Lausanne",
    vfQ: "Leila habite à Lausanne.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quel est son métier ?",
    text: ["Coiffeur", "Pilote", "Agriculteur"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Je travaille comme _________.",
    fill: "coiffeur",
    vfQ: "Leila est coiffeur.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel jour ne travaille-t-elle pas ?",
    text: ["Lundi", "Samedi", "Dimanche"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Le _________, je ne travaille pas.",
    fill: "lundi",
    vfQ: "Elle ne travaille pas le lundi.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Où part-elle en vacances ?",
    text: ["Italie", "Japon", "Canada"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Je pars en vacances au _________.",
    fill: "Italie",
    vfQ: "Elle part en vacances en été.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Qu'est-ce qu'elle aime ?",
    text: ["cinéma", "Dormir", "Rien"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "J'aime le _________.",
    fill: "cinéma",
    vfQ: "Elle aime le cinéma.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Le salaire est-il indiqué ?",
    text: ["Non", "Oui", "En annexe"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Le _________ n'est pas indiqué.",
    fill: "salaire",
    vfQ: "Le salaire est indiqué.",
    vfC: 1,
  }),
]);

const E8_1_CE_TEXT_7 = `Bonjour !

Je m'appelle Thomas. J'ai 26 ans et j'habite à Lausanne.
Je travaille comme mécanicien dans un garage.
Je commence à 8 h et je finis à 17 h.
Le mardi, je ne travaille pas.
J'ai un chat qui s'appelle Oscar.
En été, je pars en vacances au Espagne.
J'aime le lecture et la musique.

À bientôt,
Thomas`;

const E8_1_CE_POOL_7 = buildExpressPool("e8-1-ce-7", [
  q({
    id: "ce-q1",
    textQ: "Comment s'appelle la personne ?",
    text: ["Thomas", "Marie", "Jean"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Thomas",
    vfQ: "La personne s'appelle Thomas.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Où habite-t-elle ?",
    text: ["À Lausanne", "À Paris", "À Genève"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "J'habite à _________.",
    fill: "Lausanne",
    vfQ: "Thomas habite à Lausanne.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quel est son métier ?",
    text: ["Mécanicien", "Pilote", "Agriculteur"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Je travaille comme _________.",
    fill: "mécanicien",
    vfQ: "Thomas est mécanicien.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel jour ne travaille-t-elle pas ?",
    text: ["Mardi", "Samedi", "Dimanche"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Le _________, je ne travaille pas.",
    fill: "mardi",
    vfQ: "Elle ne travaille pas le mardi.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Où part-elle en vacances ?",
    text: ["Espagne", "Japon", "Canada"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Je pars en vacances au _________.",
    fill: "Espagne",
    vfQ: "Elle part en vacances en été.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Qu'est-ce qu'elle aime ?",
    text: ["lecture", "Dormir", "Rien"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "J'aime le _________.",
    fill: "lecture",
    vfQ: "Elle aime le lecture.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Le salaire est-il indiqué ?",
    text: ["Non", "Oui", "En annexe"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Le _________ n'est pas indiqué.",
    fill: "salaire",
    vfQ: "Le salaire est indiqué.",
    vfC: 1,
  }),
]);

const E8_1_CE_TEXT_8 = `Bonjour !

Je m'appelle Ana. J'ai 27 ans et j'habite à Lausanne.
Je travaille comme secrétaire dans un bureau.
Je commence à 9 h et je finis à 18 h.
Le mercredi, je ne travaille pas.
J'ai un chien qui s'appelle Mia.
En été, je pars en vacances au France.
J'aime le cuisine et la musique.

À bientôt,
Ana`;

const E8_1_CE_POOL_8 = buildExpressPool("e8-1-ce-8", [
  q({
    id: "ce-q1",
    textQ: "Comment s'appelle la personne ?",
    text: ["Ana", "Marie", "Jean"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Ana",
    vfQ: "La personne s'appelle Ana.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Où habite-t-elle ?",
    text: ["À Lausanne", "À Paris", "À Genève"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "J'habite à _________.",
    fill: "Lausanne",
    vfQ: "Ana habite à Lausanne.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quel est son métier ?",
    text: ["Secrétaire", "Pilote", "Agriculteur"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Je travaille comme _________.",
    fill: "secrétaire",
    vfQ: "Ana est secrétaire.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel jour ne travaille-t-elle pas ?",
    text: ["Mercredi", "Samedi", "Dimanche"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Le _________, je ne travaille pas.",
    fill: "mercredi",
    vfQ: "Elle ne travaille pas le mercredi.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Où part-elle en vacances ?",
    text: ["France", "Japon", "Canada"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Je pars en vacances au _________.",
    fill: "France",
    vfQ: "Elle part en vacances en été.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Qu'est-ce qu'elle aime ?",
    text: ["cuisine", "Dormir", "Rien"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "J'aime le _________.",
    fill: "cuisine",
    vfQ: "Elle aime le cuisine.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Le salaire est-il indiqué ?",
    text: ["Non", "Oui", "En annexe"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Le _________ n'est pas indiqué.",
    fill: "salaire",
    vfQ: "Le salaire est indiqué.",
    vfC: 1,
  }),
]);

const E8_1_CE_TEXT_9 = `Bonjour !

Je m'appelle Karim. J'ai 28 ans et j'habite à Lausanne.
Je travaille comme serveur dans un restaurant.
Je commence à 10 h et je finis à 19 h.
Le jeudi, je ne travaille pas.
J'ai un frère qui s'appelle Max.
En été, je pars en vacances au Portugal.
J'aime le football et la musique.

À bientôt,
Karim`;

const E8_1_CE_POOL_9 = buildExpressPool("e8-1-ce-9", [
  q({
    id: "ce-q1",
    textQ: "Comment s'appelle la personne ?",
    text: ["Karim", "Marie", "Jean"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Karim",
    vfQ: "La personne s'appelle Karim.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Où habite-t-elle ?",
    text: ["À Lausanne", "À Paris", "À Genève"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "J'habite à _________.",
    fill: "Lausanne",
    vfQ: "Karim habite à Lausanne.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quel est son métier ?",
    text: ["Serveur", "Pilote", "Agriculteur"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Je travaille comme _________.",
    fill: "serveur",
    vfQ: "Karim est serveur.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel jour ne travaille-t-elle pas ?",
    text: ["Jeudi", "Samedi", "Dimanche"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Le _________, je ne travaille pas.",
    fill: "jeudi",
    vfQ: "Elle ne travaille pas le jeudi.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Où part-elle en vacances ?",
    text: ["Portugal", "Japon", "Canada"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Je pars en vacances au _________.",
    fill: "Portugal",
    vfQ: "Elle part en vacances en été.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Qu'est-ce qu'elle aime ?",
    text: ["football", "Dormir", "Rien"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "J'aime le _________.",
    fill: "football",
    vfQ: "Elle aime le football.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Le salaire est-il indiqué ?",
    text: ["Non", "Oui", "En annexe"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Le _________ n'est pas indiqué.",
    fill: "salaire",
    vfQ: "Le salaire est indiqué.",
    vfC: 1,
  }),
]);

const E8_1_CE_TEXT_10 = `Bonjour !

Je m'appelle Julie. J'ai 29 ans et j'habite à Lausanne.
Je travaille comme vendeur dans un magasin.
Je commence à 8 h et je finis à 17 h.
Le vendredi, je ne travaille pas.
J'ai un sœur qui s'appelle Luna.
En été, je pars en vacances au Italie.
J'aime le cinéma et la musique.

À bientôt,
Julie`;

const E8_1_CE_POOL_10 = buildExpressPool("e8-1-ce-10", [
  q({
    id: "ce-q1",
    textQ: "Comment s'appelle la personne ?",
    text: ["Julie", "Marie", "Jean"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Julie",
    vfQ: "La personne s'appelle Julie.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Où habite-t-elle ?",
    text: ["À Lausanne", "À Paris", "À Genève"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "J'habite à _________.",
    fill: "Lausanne",
    vfQ: "Julie habite à Lausanne.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quel est son métier ?",
    text: ["Vendeur", "Pilote", "Agriculteur"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Je travaille comme _________.",
    fill: "vendeur",
    vfQ: "Julie est vendeur.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel jour ne travaille-t-elle pas ?",
    text: ["Vendredi", "Samedi", "Dimanche"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Le _________, je ne travaille pas.",
    fill: "vendredi",
    vfQ: "Elle ne travaille pas le vendredi.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Où part-elle en vacances ?",
    text: ["Italie", "Japon", "Canada"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Je pars en vacances au _________.",
    fill: "Italie",
    vfQ: "Elle part en vacances en été.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Qu'est-ce qu'elle aime ?",
    text: ["cinéma", "Dormir", "Rien"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "J'aime le _________.",
    fill: "cinéma",
    vfQ: "Elle aime le cinéma.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Le salaire est-il indiqué ?",
    text: ["Non", "Oui", "En annexe"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Le _________ n'est pas indiqué.",
    fill: "salaire",
    vfQ: "Le salaire est indiqué.",
    vfC: 1,
  }),
]);

const E8_1_CE_TEXT_11 = `Bonjour !

Je m'appelle Pedro. J'ai 30 ans et j'habite à Lausanne.
Je travaille comme infirmier dans un hôpital.
Je commence à 9 h et je finis à 18 h.
Le lundi, je ne travaille pas.
J'ai un chat qui s'appelle Oscar.
En été, je pars en vacances au Espagne.
J'aime le lecture et la musique.

À bientôt,
Pedro`;

const E8_1_CE_POOL_11 = buildExpressPool("e8-1-ce-11", [
  q({
    id: "ce-q1",
    textQ: "Comment s'appelle la personne ?",
    text: ["Pedro", "Marie", "Jean"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Pedro",
    vfQ: "La personne s'appelle Pedro.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Où habite-t-elle ?",
    text: ["À Lausanne", "À Paris", "À Genève"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "J'habite à _________.",
    fill: "Lausanne",
    vfQ: "Pedro habite à Lausanne.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quel est son métier ?",
    text: ["Infirmier", "Pilote", "Agriculteur"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Je travaille comme _________.",
    fill: "infirmier",
    vfQ: "Pedro est infirmier.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel jour ne travaille-t-elle pas ?",
    text: ["Lundi", "Samedi", "Dimanche"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Le _________, je ne travaille pas.",
    fill: "lundi",
    vfQ: "Elle ne travaille pas le lundi.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Où part-elle en vacances ?",
    text: ["Espagne", "Japon", "Canada"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Je pars en vacances au _________.",
    fill: "Espagne",
    vfQ: "Elle part en vacances en été.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Qu'est-ce qu'elle aime ?",
    text: ["lecture", "Dormir", "Rien"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "J'aime le _________.",
    fill: "lecture",
    vfQ: "Elle aime le lecture.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Le salaire est-il indiqué ?",
    text: ["Non", "Oui", "En annexe"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Le _________ n'est pas indiqué.",
    fill: "salaire",
    vfQ: "Le salaire est indiqué.",
    vfC: 1,
  }),
]);

const E8_1_CE_TEXT_12 = `Bonjour !

Je m'appelle Nina. J'ai 31 ans et j'habite à Lausanne.
Je travaille comme professeur dans un école.
Je commence à 10 h et je finis à 19 h.
Le mardi, je ne travaille pas.
J'ai un chien qui s'appelle Mia.
En été, je pars en vacances au France.
J'aime le cuisine et la musique.

À bientôt,
Nina`;

const E8_1_CE_POOL_12 = buildExpressPool("e8-1-ce-12", [
  q({
    id: "ce-q1",
    textQ: "Comment s'appelle la personne ?",
    text: ["Nina", "Marie", "Jean"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Nina",
    vfQ: "La personne s'appelle Nina.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Où habite-t-elle ?",
    text: ["À Lausanne", "À Paris", "À Genève"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "J'habite à _________.",
    fill: "Lausanne",
    vfQ: "Nina habite à Lausanne.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quel est son métier ?",
    text: ["Professeur", "Pilote", "Agriculteur"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Je travaille comme _________.",
    fill: "professeur",
    vfQ: "Nina est professeur.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel jour ne travaille-t-elle pas ?",
    text: ["Mardi", "Samedi", "Dimanche"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Le _________, je ne travaille pas.",
    fill: "mardi",
    vfQ: "Elle ne travaille pas le mardi.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Où part-elle en vacances ?",
    text: ["France", "Japon", "Canada"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Je pars en vacances au _________.",
    fill: "France",
    vfQ: "Elle part en vacances en été.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Qu'est-ce qu'elle aime ?",
    text: ["cuisine", "Dormir", "Rien"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "J'aime le _________.",
    fill: "cuisine",
    vfQ: "Elle aime le cuisine.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Le salaire est-il indiqué ?",
    text: ["Non", "Oui", "En annexe"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Le _________ n'est pas indiqué.",
    fill: "salaire",
    vfQ: "Le salaire est indiqué.",
    vfC: 1,
  }),
]);

const E8_1_CE_TEXT_13 = `Bonjour !

Je m'appelle Ahmed. J'ai 32 ans et j'habite à Lausanne.
Je travaille comme cuisinier dans un café.
Je commence à 8 h et je finis à 17 h.
Le mercredi, je ne travaille pas.
J'ai un frère qui s'appelle Max.
En été, je pars en vacances au Portugal.
J'aime le football et la musique.

À bientôt,
Ahmed`;

const E8_1_CE_POOL_13 = buildExpressPool("e8-1-ce-13", [
  q({
    id: "ce-q1",
    textQ: "Comment s'appelle la personne ?",
    text: ["Ahmed", "Marie", "Jean"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Ahmed",
    vfQ: "La personne s'appelle Ahmed.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Où habite-t-elle ?",
    text: ["À Lausanne", "À Paris", "À Genève"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "J'habite à _________.",
    fill: "Lausanne",
    vfQ: "Ahmed habite à Lausanne.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quel est son métier ?",
    text: ["Cuisinier", "Pilote", "Agriculteur"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Je travaille comme _________.",
    fill: "cuisinier",
    vfQ: "Ahmed est cuisinier.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel jour ne travaille-t-elle pas ?",
    text: ["Mercredi", "Samedi", "Dimanche"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Le _________, je ne travaille pas.",
    fill: "mercredi",
    vfQ: "Elle ne travaille pas le mercredi.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Où part-elle en vacances ?",
    text: ["Portugal", "Japon", "Canada"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Je pars en vacances au _________.",
    fill: "Portugal",
    vfQ: "Elle part en vacances en été.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Qu'est-ce qu'elle aime ?",
    text: ["football", "Dormir", "Rien"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "J'aime le _________.",
    fill: "football",
    vfQ: "Elle aime le football.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Le salaire est-il indiqué ?",
    text: ["Non", "Oui", "En annexe"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Le _________ n'est pas indiqué.",
    fill: "salaire",
    vfQ: "Le salaire est indiqué.",
    vfC: 1,
  }),
]);

const E8_1_CE_TEXT_14 = `Bonjour !

Je m'appelle Clara. J'ai 33 ans et j'habite à Lausanne.
Je travaille comme coiffeur dans un salon.
Je commence à 9 h et je finis à 18 h.
Le jeudi, je ne travaille pas.
J'ai un sœur qui s'appelle Luna.
En été, je pars en vacances au Italie.
J'aime le cinéma et la musique.

À bientôt,
Clara`;

const E8_1_CE_POOL_14 = buildExpressPool("e8-1-ce-14", [
  q({
    id: "ce-q1",
    textQ: "Comment s'appelle la personne ?",
    text: ["Clara", "Marie", "Jean"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Clara",
    vfQ: "La personne s'appelle Clara.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Où habite-t-elle ?",
    text: ["À Lausanne", "À Paris", "À Genève"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "J'habite à _________.",
    fill: "Lausanne",
    vfQ: "Clara habite à Lausanne.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quel est son métier ?",
    text: ["Coiffeur", "Pilote", "Agriculteur"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Je travaille comme _________.",
    fill: "coiffeur",
    vfQ: "Clara est coiffeur.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel jour ne travaille-t-elle pas ?",
    text: ["Jeudi", "Samedi", "Dimanche"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Le _________, je ne travaille pas.",
    fill: "jeudi",
    vfQ: "Elle ne travaille pas le jeudi.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Où part-elle en vacances ?",
    text: ["Italie", "Japon", "Canada"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Je pars en vacances au _________.",
    fill: "Italie",
    vfQ: "Elle part en vacances en été.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Qu'est-ce qu'elle aime ?",
    text: ["cinéma", "Dormir", "Rien"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "J'aime le _________.",
    fill: "cinéma",
    vfQ: "Elle aime le cinéma.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Le salaire est-il indiqué ?",
    text: ["Non", "Oui", "En annexe"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Le _________ n'est pas indiqué.",
    fill: "salaire",
    vfQ: "Le salaire est indiqué.",
    vfC: 1,
  }),
]);

const E8_1_CE_TEXT_15 = `Bonjour !

Je m'appelle Youssef. J'ai 34 ans et j'habite à Lausanne.
Je travaille comme mécanicien dans un garage.
Je commence à 10 h et je finis à 19 h.
Le vendredi, je ne travaille pas.
J'ai un chat qui s'appelle Oscar.
En été, je pars en vacances au Espagne.
J'aime le lecture et la musique.

À bientôt,
Youssef`;

const E8_1_CE_POOL_15 = buildExpressPool("e8-1-ce-15", [
  q({
    id: "ce-q1",
    textQ: "Comment s'appelle la personne ?",
    text: ["Youssef", "Marie", "Jean"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Youssef",
    vfQ: "La personne s'appelle Youssef.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Où habite-t-elle ?",
    text: ["À Lausanne", "À Paris", "À Genève"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "J'habite à _________.",
    fill: "Lausanne",
    vfQ: "Youssef habite à Lausanne.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quel est son métier ?",
    text: ["Mécanicien", "Pilote", "Agriculteur"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Je travaille comme _________.",
    fill: "mécanicien",
    vfQ: "Youssef est mécanicien.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel jour ne travaille-t-elle pas ?",
    text: ["Vendredi", "Samedi", "Dimanche"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Le _________, je ne travaille pas.",
    fill: "vendredi",
    vfQ: "Elle ne travaille pas le vendredi.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Où part-elle en vacances ?",
    text: ["Espagne", "Japon", "Canada"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Je pars en vacances au _________.",
    fill: "Espagne",
    vfQ: "Elle part en vacances en été.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Qu'est-ce qu'elle aime ?",
    text: ["lecture", "Dormir", "Rien"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "J'aime le _________.",
    fill: "lecture",
    vfQ: "Elle aime le lecture.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Le salaire est-il indiqué ?",
    text: ["Non", "Oui", "En annexe"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Le _________ n'est pas indiqué.",
    fill: "salaire",
    vfQ: "Le salaire est indiqué.",
    vfC: 1,
  }),
]);

const E8_1_CE_TEXT_16 = `Bonjour !

Je m'appelle Elena. J'ai 35 ans et j'habite à Lausanne.
Je travaille comme secrétaire dans un bureau.
Je commence à 8 h et je finis à 17 h.
Le lundi, je ne travaille pas.
J'ai un chien qui s'appelle Mia.
En été, je pars en vacances au France.
J'aime le cuisine et la musique.

À bientôt,
Elena`;

const E8_1_CE_POOL_16 = buildExpressPool("e8-1-ce-16", [
  q({
    id: "ce-q1",
    textQ: "Comment s'appelle la personne ?",
    text: ["Elena", "Marie", "Jean"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Elena",
    vfQ: "La personne s'appelle Elena.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Où habite-t-elle ?",
    text: ["À Lausanne", "À Paris", "À Genève"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "J'habite à _________.",
    fill: "Lausanne",
    vfQ: "Elena habite à Lausanne.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quel est son métier ?",
    text: ["Secrétaire", "Pilote", "Agriculteur"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Je travaille comme _________.",
    fill: "secrétaire",
    vfQ: "Elena est secrétaire.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel jour ne travaille-t-elle pas ?",
    text: ["Lundi", "Samedi", "Dimanche"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Le _________, je ne travaille pas.",
    fill: "lundi",
    vfQ: "Elle ne travaille pas le lundi.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Où part-elle en vacances ?",
    text: ["France", "Japon", "Canada"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Je pars en vacances au _________.",
    fill: "France",
    vfQ: "Elle part en vacances en été.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Qu'est-ce qu'elle aime ?",
    text: ["cuisine", "Dormir", "Rien"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "J'aime le _________.",
    fill: "cuisine",
    vfQ: "Elle aime le cuisine.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Le salaire est-il indiqué ?",
    text: ["Non", "Oui", "En annexe"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Le _________ n'est pas indiqué.",
    fill: "salaire",
    vfQ: "Le salaire est indiqué.",
    vfC: 1,
  }),
]);

const E8_1_CE_TEXT_17 = `Bonjour !

Je m'appelle David. J'ai 36 ans et j'habite à Lausanne.
Je travaille comme serveur dans un restaurant.
Je commence à 9 h et je finis à 18 h.
Le mardi, je ne travaille pas.
J'ai un frère qui s'appelle Max.
En été, je pars en vacances au Portugal.
J'aime le football et la musique.

À bientôt,
David`;

const E8_1_CE_POOL_17 = buildExpressPool("e8-1-ce-17", [
  q({
    id: "ce-q1",
    textQ: "Comment s'appelle la personne ?",
    text: ["David", "Marie", "Jean"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "David",
    vfQ: "La personne s'appelle David.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Où habite-t-elle ?",
    text: ["À Lausanne", "À Paris", "À Genève"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "J'habite à _________.",
    fill: "Lausanne",
    vfQ: "David habite à Lausanne.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quel est son métier ?",
    text: ["Serveur", "Pilote", "Agriculteur"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Je travaille comme _________.",
    fill: "serveur",
    vfQ: "David est serveur.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel jour ne travaille-t-elle pas ?",
    text: ["Mardi", "Samedi", "Dimanche"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Le _________, je ne travaille pas.",
    fill: "mardi",
    vfQ: "Elle ne travaille pas le mardi.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Où part-elle en vacances ?",
    text: ["Portugal", "Japon", "Canada"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Je pars en vacances au _________.",
    fill: "Portugal",
    vfQ: "Elle part en vacances en été.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Qu'est-ce qu'elle aime ?",
    text: ["football", "Dormir", "Rien"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "J'aime le _________.",
    fill: "football",
    vfQ: "Elle aime le football.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Le salaire est-il indiqué ?",
    text: ["Non", "Oui", "En annexe"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Le _________ n'est pas indiqué.",
    fill: "salaire",
    vfQ: "Le salaire est indiqué.",
    vfC: 1,
  }),
]);

const E8_1_CE_TEXT_18 = `Bonjour !

Je m'appelle Fatima. J'ai 37 ans et j'habite à Lausanne.
Je travaille comme vendeur dans un magasin.
Je commence à 10 h et je finis à 19 h.
Le mercredi, je ne travaille pas.
J'ai un sœur qui s'appelle Luna.
En été, je pars en vacances au Italie.
J'aime le cinéma et la musique.

À bientôt,
Fatima`;

const E8_1_CE_POOL_18 = buildExpressPool("e8-1-ce-18", [
  q({
    id: "ce-q1",
    textQ: "Comment s'appelle la personne ?",
    text: ["Fatima", "Marie", "Jean"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Fatima",
    vfQ: "La personne s'appelle Fatima.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Où habite-t-elle ?",
    text: ["À Lausanne", "À Paris", "À Genève"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "J'habite à _________.",
    fill: "Lausanne",
    vfQ: "Fatima habite à Lausanne.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quel est son métier ?",
    text: ["Vendeur", "Pilote", "Agriculteur"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Je travaille comme _________.",
    fill: "vendeur",
    vfQ: "Fatima est vendeur.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel jour ne travaille-t-elle pas ?",
    text: ["Mercredi", "Samedi", "Dimanche"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Le _________, je ne travaille pas.",
    fill: "mercredi",
    vfQ: "Elle ne travaille pas le mercredi.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Où part-elle en vacances ?",
    text: ["Italie", "Japon", "Canada"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Je pars en vacances au _________.",
    fill: "Italie",
    vfQ: "Elle part en vacances en été.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Qu'est-ce qu'elle aime ?",
    text: ["cinéma", "Dormir", "Rien"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "J'aime le _________.",
    fill: "cinéma",
    vfQ: "Elle aime le cinéma.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Le salaire est-il indiqué ?",
    text: ["Non", "Oui", "En annexe"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Le _________ n'est pas indiqué.",
    fill: "salaire",
    vfQ: "Le salaire est indiqué.",
    vfC: 1,
  }),
]);

const E8_1_CE_TEXT_19 = `Bonjour !

Je m'appelle Paul. J'ai 38 ans et j'habite à Lausanne.
Je travaille comme infirmier dans un hôpital.
Je commence à 8 h et je finis à 17 h.
Le jeudi, je ne travaille pas.
J'ai un chat qui s'appelle Oscar.
En été, je pars en vacances au Espagne.
J'aime le lecture et la musique.

À bientôt,
Paul`;

const E8_1_CE_POOL_19 = buildExpressPool("e8-1-ce-19", [
  q({
    id: "ce-q1",
    textQ: "Comment s'appelle la personne ?",
    text: ["Paul", "Marie", "Jean"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Paul",
    vfQ: "La personne s'appelle Paul.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Où habite-t-elle ?",
    text: ["À Lausanne", "À Paris", "À Genève"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "J'habite à _________.",
    fill: "Lausanne",
    vfQ: "Paul habite à Lausanne.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quel est son métier ?",
    text: ["Infirmier", "Pilote", "Agriculteur"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Je travaille comme _________.",
    fill: "infirmier",
    vfQ: "Paul est infirmier.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel jour ne travaille-t-elle pas ?",
    text: ["Jeudi", "Samedi", "Dimanche"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Le _________, je ne travaille pas.",
    fill: "jeudi",
    vfQ: "Elle ne travaille pas le jeudi.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Où part-elle en vacances ?",
    text: ["Espagne", "Japon", "Canada"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Je pars en vacances au _________.",
    fill: "Espagne",
    vfQ: "Elle part en vacances en été.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Qu'est-ce qu'elle aime ?",
    text: ["lecture", "Dormir", "Rien"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "J'aime le _________.",
    fill: "lecture",
    vfQ: "Elle aime le lecture.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Le salaire est-il indiqué ?",
    text: ["Non", "Oui", "En annexe"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Le _________ n'est pas indiqué.",
    fill: "salaire",
    vfQ: "Le salaire est indiqué.",
    vfC: 1,
  }),
]);

const E8_1_CE_TEXT_20 = `Bonjour !

Je m'appelle Laura. J'ai 39 ans et j'habite à Lausanne.
Je travaille comme professeur dans un école.
Je commence à 9 h et je finis à 18 h.
Le vendredi, je ne travaille pas.
J'ai un chien qui s'appelle Mia.
En été, je pars en vacances au France.
J'aime le cuisine et la musique.

À bientôt,
Laura`;

const E8_1_CE_POOL_20 = buildExpressPool("e8-1-ce-20", [
  q({
    id: "ce-q1",
    textQ: "Comment s'appelle la personne ?",
    text: ["Laura", "Marie", "Jean"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Laura",
    vfQ: "La personne s'appelle Laura.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Où habite-t-elle ?",
    text: ["À Lausanne", "À Paris", "À Genève"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "J'habite à _________.",
    fill: "Lausanne",
    vfQ: "Laura habite à Lausanne.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quel est son métier ?",
    text: ["Professeur", "Pilote", "Agriculteur"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Je travaille comme _________.",
    fill: "professeur",
    vfQ: "Laura est professeur.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel jour ne travaille-t-elle pas ?",
    text: ["Vendredi", "Samedi", "Dimanche"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Le _________, je ne travaille pas.",
    fill: "vendredi",
    vfQ: "Elle ne travaille pas le vendredi.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Où part-elle en vacances ?",
    text: ["France", "Japon", "Canada"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Je pars en vacances au _________.",
    fill: "France",
    vfQ: "Elle part en vacances en été.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Qu'est-ce qu'elle aime ?",
    text: ["cuisine", "Dormir", "Rien"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "J'aime le _________.",
    fill: "cuisine",
    vfQ: "Elle aime le cuisine.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Le salaire est-il indiqué ?",
    text: ["Non", "Oui", "En annexe"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Le _________ n'est pas indiqué.",
    fill: "salaire",
    vfQ: "Le salaire est indiqué.",
    vfC: 1,
  }),
]);

export const E8_1_CE: CommunicationExercise[] = [
  readingPoolExercise({
    id: "e8-1-ce-1",
    readingText: E8_1_CE_TEXT_1,
    questionPool: E8_1_CE_POOL_1,
  }),
  readingPoolExercise({
    id: "e8-1-ce-2",
    readingText: E8_1_CE_TEXT_2,
    questionPool: E8_1_CE_POOL_2,
  }),
  readingPoolExercise({
    id: "e8-1-ce-3",
    readingText: E8_1_CE_TEXT_3,
    questionPool: E8_1_CE_POOL_3,
  }),
  readingPoolExercise({
    id: "e8-1-ce-4",
    readingText: E8_1_CE_TEXT_4,
    questionPool: E8_1_CE_POOL_4,
  }),
  readingPoolExercise({
    id: "e8-1-ce-5",
    readingText: E8_1_CE_TEXT_5,
    questionPool: E8_1_CE_POOL_5,
  }),
  readingPoolExercise({
    id: "e8-1-ce-6",
    readingText: E8_1_CE_TEXT_6,
    questionPool: E8_1_CE_POOL_6,
  }),
  readingPoolExercise({
    id: "e8-1-ce-7",
    readingText: E8_1_CE_TEXT_7,
    questionPool: E8_1_CE_POOL_7,
  }),
  readingPoolExercise({
    id: "e8-1-ce-8",
    readingText: E8_1_CE_TEXT_8,
    questionPool: E8_1_CE_POOL_8,
  }),
  readingPoolExercise({
    id: "e8-1-ce-9",
    readingText: E8_1_CE_TEXT_9,
    questionPool: E8_1_CE_POOL_9,
  }),
  readingPoolExercise({
    id: "e8-1-ce-10",
    readingText: E8_1_CE_TEXT_10,
    questionPool: E8_1_CE_POOL_10,
  }),
  readingPoolExercise({
    id: "e8-1-ce-11",
    readingText: E8_1_CE_TEXT_11,
    questionPool: E8_1_CE_POOL_11,
  }),
  readingPoolExercise({
    id: "e8-1-ce-12",
    readingText: E8_1_CE_TEXT_12,
    questionPool: E8_1_CE_POOL_12,
  }),
  readingPoolExercise({
    id: "e8-1-ce-13",
    readingText: E8_1_CE_TEXT_13,
    questionPool: E8_1_CE_POOL_13,
  }),
  readingPoolExercise({
    id: "e8-1-ce-14",
    readingText: E8_1_CE_TEXT_14,
    questionPool: E8_1_CE_POOL_14,
  }),
  readingPoolExercise({
    id: "e8-1-ce-15",
    readingText: E8_1_CE_TEXT_15,
    questionPool: E8_1_CE_POOL_15,
  }),
  readingPoolExercise({
    id: "e8-1-ce-16",
    readingText: E8_1_CE_TEXT_16,
    questionPool: E8_1_CE_POOL_16,
  }),
  readingPoolExercise({
    id: "e8-1-ce-17",
    readingText: E8_1_CE_TEXT_17,
    questionPool: E8_1_CE_POOL_17,
  }),
  readingPoolExercise({
    id: "e8-1-ce-18",
    readingText: E8_1_CE_TEXT_18,
    questionPool: E8_1_CE_POOL_18,
  }),
  readingPoolExercise({
    id: "e8-1-ce-19",
    readingText: E8_1_CE_TEXT_19,
    questionPool: E8_1_CE_POOL_19,
  }),
  readingPoolExercise({
    id: "e8-1-ce-20",
    readingText: E8_1_CE_TEXT_20,
    questionPool: E8_1_CE_POOL_20,
  }),
];

/* ── Production orale — dialogues à jouer ──────────────────────────────────── */


const AMI = { title: "L'ami", vous: "l'ami / l'amie" };


export const E8_1_PO: ExpressPoDialogue[] = [
{
    id: "e8-1-po-1",
    title: "Se présenter à un nouveau collègue",
    context: "C'est votre premier jour de travail. Vous rencontrez un collègue.",
    roleA: { title: "Le collègue", vous: "le collègue / la collègue" },
    roleB: { title: "Le nouveau", vous: "le nouveau / la nouvelle" },
    lines: [
      { role: "A", text: "Bonjour ! Tu es nouveau ici ?" },
      { role: "B", text: "Oui, c'est mon premier jour. Je m'appelle Sami." },
      { role: "A", text: "Enchanté, Sami ! Tu viens d'où ?" },
      { role: "B", text: "Je viens de Tunisie, mais j'habite ici depuis un an." },
      { role: "A", text: "Super ! Et tu habites près d'ici ?" },
      { role: "B", text: "Oui, à dix minutes à pied. Et toi, tu travailles ici depuis longtemps ?" },
      { role: "A", text: "Depuis trois ans. Viens, je te montre le bureau." },
      { role: "B", text: "Merci, c'est très gentil !" },
      { role: "A", text: "Enchanté(e) de te connaître !" },
      { role: "B", text: "Moi aussi. À tout à l'heure !" },
],
  },
  {
    id: "e8-1-po-2",
    title: "Présenter un ami",
    context: "Vous êtes dans la rue avec un ami. Vous voyez une amie et vous la présentez.",
    roleA: AMI,
    roleB: { title: "L'autre ami", vous: "l'autre ami / l'autre amie" },
    lines: [
      { role: "A", text: "Regarde, c'est mon amie Rosa, là-bas !" },
      { role: "B", text: "La jeune femme rousse ? Elle est française ?" },
      { role: "A", text: "Non, elle est brésilienne. Elle est mariée et elle a un fils." },
      { role: "B", text: "Ah oui ? Il a quel âge, son fils ?" },
      { role: "A", text: "Il a un an. Il est adorable !" },
      { role: "B", text: "On invite Rosa à notre apéro samedi ?" },
      { role: "A", text: "Bonne idée ! Je lui demande tout de suite." },
      { role: "B", text: "Parfait, à samedi alors !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e8-1-po-3",
    title: "Au restaurant",
    context: "Vous déjeunez dans un restaurant. Vous commandez votre repas.",
    roleA: { title: "Le serveur", vous: "le serveur / la serveuse" },
    roleB: { title: "Le client", vous: "le client / la cliente" },
    lines: [
      { role: "A", text: "Bonjour ! Vous avez choisi ?" },
      { role: "B", text: "Oui, je voudrais la quiche aux légumes, s'il vous plaît." },
      { role: "A", text: "Très bien. Et comme boisson ?" },
      { role: "B", text: "Une eau minérale, s'il vous plaît. Je suis végétarien, il n'y a pas de viande dans la quiche ?" },
      { role: "A", text: "Non, c'est une quiche aux légumes seulement." },
      { role: "B", text: "Parfait. Et comme dessert, qu'est-ce que vous avez ?" },
      { role: "A", text: "Une tarte aux pommes ou une glace." },
      { role: "B", text: "La tarte aux pommes, merci !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e8-1-po-4",
    title: "Dans un magasin de vêtements",
    context: "C'est bientôt l'hiver. Vous cherchez un pull et une écharpe.",
    roleA: { title: "Le vendeur", vous: "le vendeur / la vendeuse" },
    roleB: { title: "Le client", vous: "le client / la cliente" },
    lines: [
      { role: "A", text: "Bonjour, je peux vous aider ?" },
      { role: "B", text: "Oui, je cherche un pull en laine pour l'hiver." },
      { role: "A", text: "Quelle taille faites-vous ?" },
      { role: "B", text: "Du M. Vous avez aussi des écharpes ?" },
      { role: "A", text: "Oui, les écharpes sont là-bas, à côté des bonnets." },
      { role: "B", text: "Super. Ce pull bleu, il coûte combien ?" },
      { role: "A", text: "Quarante francs. La cabine est au fond pour l'essayer." },
      { role: "B", text: "Merci, je vais l'essayer !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e8-1-po-5",
    title: "Malade au téléphone",
    context: "Vous êtes malade et vous téléphonez à une collègue pour dire que vous ne venez pas travailler.",
    roleA: { title: "La collègue", vous: "le collègue / la collègue" },
    roleB: { title: "Le malade", vous: "le malade / la malade" },
    lines: [
      { role: "A", text: "Allô ? Tu es où ? On commence bientôt !" },
      { role: "B", text: "Je suis à la maison, je suis malade. Je ne peux pas venir aujourd'hui." },
      { role: "A", text: "Ah bon ! Qu'est-ce que tu as ?" },
      { role: "B", text: "J'ai mal à la gorge, je tousse et j'ai de la fièvre." },
      { role: "A", text: "Alors c'est peut-être la grippe. Tu dois voir un médecin !" },
      { role: "B", text: "Oui, j'ai un rendez-vous cet après-midi." },
      { role: "A", text: "Bien. Repose-toi et donne-moi des nouvelles !" },
      { role: "B", text: "Merci, tu es très sympa. À bientôt !" },
      { role: "A", text: "D'accord, je vous appelle si besoin." },
      { role: "B", text: "Très bien. Au revoir !" },
],
  },
  {
    id: "e8-1-po-6",
    title: "Acheter un billet de train",
    context: "Vous partez en voyage et vous achetez un billet à la gare.",
    roleA: { title: "L'employé", vous: "l'employé / l'employée" },
    roleB: { title: "Le voyageur", vous: "le voyageur / la voyageuse" },
    lines: [
      { role: "A", text: "Bonjour, je vous écoute." },
      { role: "B", text: "Bonjour, je voudrais un billet pour Lyon, s'il vous plaît." },
      { role: "A", text: "Pour quand ?" },
      { role: "B", text: "Pour samedi matin. Le trajet est direct ?" },
      { role: "A", text: "Non, il faut changer une fois. Le voyage dure trois heures." },
      { role: "B", text: "D'accord. Et le billet coûte combien ?" },
      { role: "A", text: "Cinquante francs en deuxième classe." },
      { role: "B", text: "Très bien, je le prends. Merci !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e8-1-po-7",
    title: "Un problème dans l'appartement",
    context: "Il y a une fuite d'eau dans votre salle de bains. Vous appelez le propriétaire.",
    roleA: { title: "Le propriétaire", vous: "le propriétaire / la propriétaire" },
    roleB: { title: "Le locataire", vous: "le locataire / la locataire" },
    lines: [
      { role: "A", text: "Allô, bonjour ! Je vous écoute." },
      { role: "B", text: "Bonjour, c'est votre locataire. Il y a une fuite d'eau dans la salle de bains." },
      { role: "A", text: "Ah bon ? Depuis quand ?" },
      { role: "B", text: "Depuis ce matin. Et les toilettes sont bouchées aussi." },
      { role: "A", text: "D'accord, j'appelle le plombier tout de suite." },
      { role: "B", text: "Merci. Il peut venir aujourd'hui ?" },
      { role: "A", text: "Oui, cet après-midi vers 15 heures. Vous êtes à la maison ?" },
      { role: "B", text: "Oui, je suis là. Merci beaucoup !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e8-1-po-8",
    title: "Le premier jour au restaurant",
    context: "Vous êtes le nouveau serveur. Une collègue vous explique la journée de travail.",
    roleA: { title: "La collègue", vous: "le collègue / la collègue" },
    roleB: { title: "Le nouveau serveur", vous: "le serveur / la serveuse" },
    lines: [
      { role: "A", text: "Bienvenue ! Tu es le nouveau serveur ?" },
      { role: "B", text: "Oui, bonjour ! On commence à quelle heure le matin ?" },
      { role: "A", text: "À 10 heures. D'abord, on prend un café avec les collègues." },
      { role: "B", text: "Et après, qu'est-ce qu'on fait ?" },
      { role: "A", text: "On prépare les tables pour le déjeuner." },
      { role: "B", text: "D'accord. Et le soir, on finit à quelle heure ?" },
      { role: "A", text: "Vers 23 heures. Mais le lundi, le restaurant est fermé." },
      { role: "B", text: "Parfait, merci pour les explications !" },
      { role: "A", text: "Enchanté(e) de te connaître !" },
      { role: "B", text: "Moi aussi. À tout à l'heure !" },
],
  },
  {
    id: "e8-1-po-9",
    title: "Inviter un ami à un festival",
    context: "Il y a un festival de musique ce week-end. Vous invitez un ami.",
    roleA: AMI,
    roleB: { title: "L'ami invité", vous: "l'ami / l'amie" },
    lines: [
      { role: "A", text: "Salut ! Tu fais quoi ce week-end ?" },
      { role: "B", text: "Rien de spécial. Pourquoi ?" },
      { role: "A", text: "Il y a un festival de musique au bord du lac. Tu viens avec moi ?" },
      { role: "B", text: "Bonne idée ! C'est quel jour ?" },
      { role: "A", text: "Samedi soir. Il y a des concerts à partir de 18 heures." },
      { role: "B", text: "Super ! On y va comment ?" },
      { role: "A", text: "En bus, il y a un arrêt juste devant l'entrée." },
      { role: "B", text: "Parfait, à samedi alors !" },
      { role: "A", text: "Parfait. Je vous remercie." },
      { role: "B", text: "De rien. Bonne journée !" },
],
  },
  {
    id: "e8-1-po-10",
    title: "Parler de ses vacances",
    context: "Vous discutez avec une amie de vos projets pour l'été.",
    roleA: AMI,
    roleB: { title: "L'autre ami", vous: "l'ami / l'amie" },
    lines: [
      { role: "A", text: "Alors, tu fais quoi cet été ?" },
      { role: "B", text: "En juillet, je pars deux semaines en Corse avec ma famille." },
      { role: "A", text: "Génial ! Vous allez à l'hôtel ?" },
      { role: "B", text: "Non, on fait du camping. Les enfants adorent ça." },
      { role: "A", text: "Et qu'est-ce que vous allez faire là-bas ?" },
      { role: "B", text: "De l'escalade et de la natation. Et toi, tu pars où ?" },
      { role: "A", text: "Je vais à un festival de musique à la montagne, quatre jours." },
      { role: "B", text: "Super ! Bonnes vacances alors !" },
      { role: "A", text: "Parfait, merci pour l'accueil." },
      { role: "B", text: "Avec plaisir. Bon séjour !" },
],
  },
  {
    id: "e8-1-po-11",
    title: "Se présenter",
    context: "Vous rencontrez quelqu'un.",
    roleA: { title: "L'ami", vous: "l'ami / l'amie" },
    roleB: { title: "L'amie", vous: "l'ami / l'amie" },
    lines: [
      { role: "A", text: "Bonjour, je suis nouveau ici." },
      { role: "B", text: "Bienvenue ! Tu viens d'où ?" },
      { role: "A", text: "De Portugal." },
      { role: "B", text: "Moi, je suis de Lausanne." },
      { role: "A", text: "Enchanté !" },
      { role: "B", text: "Moi aussi !" },
      { role: "A", text: "Très bien." },
      { role: "B", text: "Merci beaucoup." },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
    ],
  },
  {
    id: "e8-1-po-12",
    title: "Au café",
    context: "Vous commandez.",
    roleA: { title: "Le serveur", vous: "le serveur" },
    roleB: { title: "Le client", vous: "le client / la cliente" },
    lines: [
      { role: "A", text: "Bonjour, vous désirez ?" },
      { role: "B", text: "Un café et un croissant." },
      { role: "A", text: "Voici." },
      { role: "B", text: "Merci, combien ?" },
      { role: "A", text: "Cinq francs." },
      { role: "B", text: "Voici." },
      { role: "A", text: "Très bien." },
      { role: "B", text: "Merci beaucoup." },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
    ],
  },
  {
    id: "e8-1-po-13",
    title: "Chez le médecin",
    context: "Vous êtes malade.",
    roleA: { title: "Le médecin", vous: "le médecin / la médecin" },
    roleB: { title: "Le patient", vous: "le patient / la patiente" },
    lines: [
      { role: "A", text: "Vous avez mal où ?" },
      { role: "B", text: "À la tête." },
      { role: "A", text: "Depuis quand ?" },
      { role: "B", text: "Depuis hier." },
      { role: "A", text: "Du repos." },
      { role: "B", text: "Merci docteur." },
      { role: "A", text: "Très bien." },
      { role: "B", text: "Merci beaucoup." },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
    ],
  },
  {
    id: "e8-1-po-14",
    title: "À la pharmacie",
    context: "Vous achetez un médicament.",
    roleA: { title: "Le pharmacien", vous: "le pharmacien / la pharmacienne" },
    roleB: { title: "Le client", vous: "le client / la cliente" },
    lines: [
      { role: "A", text: "Bonjour !" },
      { role: "B", text: "Bonjour, de l'aspirine." },
      { role: "A", text: "Voici." },
      { role: "B", text: "Merci." },
      { role: "A", text: "Très bien." },
      { role: "B", text: "Merci beaucoup." },
      { role: "A", text: "Je vous en prie." },
      { role: "B", text: "Au revoir !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
    ],
  },
  {
    id: "e8-1-po-15",
    title: "Demander son chemin",
    context: "Vous êtes perdu.",
    roleA: { title: "Le touriste", vous: "le touriste / la touriste" },
    roleB: { title: "Le passant", vous: "le passant / la passante" },
    lines: [
      { role: "A", text: "La gare, s'il vous plaît ?" },
      { role: "B", text: "Tout droit, puis à gauche." },
      { role: "A", text: "Merci !" },
      { role: "B", text: "De rien." },
      { role: "A", text: "Très bien." },
      { role: "B", text: "Merci beaucoup." },
      { role: "A", text: "Je vous en prie." },
      { role: "B", text: "Au revoir !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
    ],
  },
  {
    id: "e8-1-po-16",
    title: "À l'hôtel",
    context: "Vous arrivez.",
    roleA: { title: "Le réceptionniste", vous: "le réceptionniste / la réceptionniste" },
    roleB: { title: "Le client", vous: "le client / la cliente" },
    lines: [
      { role: "A", text: "Bonjour, une chambre ?" },
      { role: "B", text: "Pour combien de nuits ?" },
      { role: "A", text: "Deux." },
      { role: "B", text: "Voici la clé." },
      { role: "A", text: "Très bien." },
      { role: "B", text: "Merci beaucoup." },
      { role: "A", text: "Je vous en prie." },
      { role: "B", text: "Au revoir !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
    ],
  },
  {
    id: "e8-1-po-17",
    title: "Au marché",
    context: "Vous achetez des légumes.",
    roleA: { title: "Le vendeur", vous: "le vendeur" },
    roleB: { title: "Le client", vous: "le client / la cliente" },
    lines: [
      { role: "A", text: "Des tomates ?" },
      { role: "B", text: "Un kilo, s'il vous plaît." },
      { role: "A", text: "Trois francs." },
      { role: "B", text: "Merci." },
      { role: "A", text: "Très bien." },
      { role: "B", text: "Merci beaucoup." },
      { role: "A", text: "Je vous en prie." },
      { role: "B", text: "Au revoir !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
    ],
  },
  {
    id: "e8-1-po-18",
    title: "Au restaurant",
    context: "Vous dînez.",
    roleA: { title: "Le serveur", vous: "le serveur" },
    roleB: { title: "Le client", vous: "le client / la cliente" },
    lines: [
      { role: "A", text: "Vous avez choisi ?" },
      { role: "B", text: "La salade et le poisson." },
      { role: "A", text: "Très bien." },
      { role: "B", text: "L'eau, s'il vous plaît." },
      { role: "A", text: "Très bien." },
      { role: "B", text: "Merci beaucoup." },
      { role: "A", text: "Je vous en prie." },
      { role: "B", text: "Au revoir !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
    ],
  },
  {
    id: "e8-1-po-19",
    title: "Téléphone",
    context: "Vous appelez un ami.",
    roleA: { title: "L'ami", vous: "l'ami / l'amie" },
    roleB: { title: "L'amie", vous: "l'ami / l'amie" },
    lines: [
      { role: "A", text: "Allô ?" },
      { role: "B", text: "Salut, tu es libre samedi ?" },
      { role: "A", text: "Oui !" },
      { role: "B", text: "On va au cinéma ?" },
      { role: "A", text: "Très bien." },
      { role: "B", text: "Merci beaucoup." },
      { role: "A", text: "Je vous en prie." },
      { role: "B", text: "Au revoir !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
    ],
  },
  {
    id: "e8-1-po-20",
    title: "Au travail",
    context: "Vous parlez avec un collègue.",
    roleA: { title: "Le collègue", vous: "le collègue" },
    roleB: { title: "Le client", vous: "le client / la cliente" },
    lines: [
      { role: "A", text: "Tu commences à quelle heure ?" },
      { role: "B", text: "À 8 h." },
      { role: "A", text: "Moi à 9 h." },
      { role: "B", text: "On déjeune ensemble ?" },
      { role: "A", text: "Très bien." },
      { role: "B", text: "Merci beaucoup." },
      { role: "A", text: "Je vous en prie." },
      { role: "B", text: "Au revoir !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
    ],
  },
];


/* ── Production écrite — consignes (A1 : 50 mots minimum) ─────────────────── */

const PE_MIN = 50;
const PE_MAX = 120;

export const E8_1_PE: ExpressPePrompt[] = [
{
    id: "e8-1-pe-1",
    title: "Se présenter à un correspondant",
    situation: "Vous avez un nouveau correspondant français. Vous lui écrivez pour la première fois.",
    instruction: "Présentez-vous : votre nom, votre nationalité, votre famille et ce que vous aimez faire.",
    points: ["Qui vous êtes", "Votre famille", "Ce que vous aimez faire"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e8-1-pe-2",
    title: "Décrire son logement",
    situation: "Vous venez d'emménager dans un nouvel appartement. Vous écrivez à un ami.",
    instruction: "Décrivez votre appartement : les pièces, le quartier et les voisins.",
    points: ["Les pièces de l'appartement", "Le quartier", "Les voisins"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e8-1-pe-3",
    title: "Raconter sa journée de travail",
    situation: "Un ami vous demande comment se passe votre nouveau travail.",
    instruction: "Racontez votre journée de travail : les horaires, ce que vous faites et le jour de repos.",
    points: ["Les horaires", "Vos activités au travail", "Le jour de repos"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e8-1-pe-4",
    title: "Message d'excuse — malade",
    situation: "Vous êtes malade et vous ne pouvez pas aller travailler aujourd'hui.",
    instruction: "Écrivez un message à votre chef : excusez-vous, décrivez vos symptômes et dites quand vous revenez.",
    points: ["L'excuse", "Vos symptômes", "La date de retour"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e8-1-pe-5",
    title: "Raconter une journée en ville",
    situation: "Samedi, vous avez passé la journée en ville : magasins, restaurant, promenade.",
    instruction: "Racontez votre journée à un ami : où vous êtes allé(e), ce que vous avez acheté et ce que vous avez mangé.",
    points: ["Les magasins visités", "Vos achats", "Le repas"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e8-1-pe-6",
    title: "Décrire sa famille",
    situation: "Votre correspondant veut connaître votre famille.",
    instruction: "Décrivez votre famille : qui sont les personnes, leur âge et leur travail ou leurs études.",
    points: ["Les personnes de la famille", "Leur âge", "Leur travail ou leurs études"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e8-1-pe-7",
    title: "Invitation à une fête",
    situation: "Vous organisez un apéro chez vous samedi soir.",
    instruction: "Écrivez un message d'invitation à vos amis : le jour, l'heure, l'adresse et ce qu'il faut apporter.",
    points: ["Le jour et l'heure", "L'adresse", "Ce qu'il faut apporter"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e8-1-pe-8",
    title: "Projets de vacances",
    situation: "Cet été, vous partez en vacances avec votre famille ou vos amis.",
    instruction: "Décrivez vos projets : la destination, le transport et les activités prévues.",
    points: ["La destination et la durée", "Le transport", "Les activités"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e8-1-pe-9",
    title: "Raconter un voyage en train",
    situation: "Le week-end dernier, vous avez pris le train pour visiter une autre ville.",
    instruction: "Racontez votre voyage : l'achat du billet, le trajet et ce que vous avez fait là-bas.",
    points: ["L'achat du billet", "Le trajet", "Vos activités sur place"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e8-1-pe-10",
    title: "Décrire son quartier",
    situation: "Un ami veut venir habiter dans votre quartier et vous pose des questions.",
    instruction: "Décrivez votre quartier : les magasins, les transports et ce que vous aimez ici.",
    points: ["Les magasins", "Les transports", "Ce que vous aimez"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e8-1-pe-11",
    title: "Se présenter",
    situation: "Écrivez votre présentation.",
    instruction: "Présentez-vous : nom, âge, ville, travail.",
    points: ["Identité", "Ville", "Travail"],
    minWords: 50,
    maxWords: 120,
  },
  {
    id: "e8-1-pe-12",
    title: "Ma journée",
    situation: "Décrivez votre journée type.",
    instruction: "Du matin au soir.",
    points: ["Matin", "Après-midi", "Soir"],
    minWords: 50,
    maxWords: 120,
  },
  {
    id: "e8-1-pe-13",
    title: "Ma famille",
    situation: "Parlez de votre famille.",
    instruction: "Décrivez les membres de votre famille.",
    points: ["Membre 1", "Membre 2", "Activités"],
    minWords: 50,
    maxWords: 120,
  },
  {
    id: "e8-1-pe-14",
    title: "Mon logement",
    situation: "Décrivez votre logement.",
    instruction: "Type, pièces, quartier.",
    points: ["Type", "Pièces", "Quartier"],
    minWords: 50,
    maxWords: 120,
  },
  {
    id: "e8-1-pe-15",
    title: "Mes vacances",
    situation: "Racontez vos dernières vacances.",
    instruction: "Où, quand, avec qui.",
    points: ["Destination", "Activités", "Impressions"],
    minWords: 50,
    maxWords: 120,
  },
  {
    id: "e8-1-pe-16",
    title: "Mon repas préféré",
    situation: "Parlez de nourriture.",
    instruction: "Décrivez votre plat préféré.",
    points: ["Le plat", "Ingrédients", "Pourquoi"],
    minWords: 50,
    maxWords: 120,
  },
  {
    id: "e8-1-pe-17",
    title: "Invitation",
    situation: "Invitez un ami.",
    instruction: "Proposez une activité.",
    points: ["L'activité", "Date", "Lieu"],
    minWords: 50,
    maxWords: 120,
  },
  {
    id: "e8-1-pe-18",
    title: "Message maladie",
    situation: "Vous êtes malade.",
    instruction: "Écrivez à votre professeur.",
    points: ["Maladie", "Absence", "Retour"],
    minWords: 50,
    maxWords: 120,
  },
  {
    id: "e8-1-pe-19",
    title: "Mon quartier",
    situation: "Décrivez votre quartier.",
    instruction: "Commerces, transports, parcs.",
    points: ["Commerces", "Transports", "Ce que vous aimez"],
    minWords: 50,
    maxWords: 120,
  },
  {
    id: "e8-1-pe-20",
    title: "Bilan A1",
    situation: "Faites le bilan.",
    instruction: "Décrivez ce que vous savez faire en français.",
    points: ["Comprendre", "Parler", "Écrire"],
    minWords: 50,
    maxWords: 120,
  },
];
