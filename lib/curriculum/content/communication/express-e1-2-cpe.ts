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

/* ── Compréhension écrite — E1.2 Parler de sa famille ── */

const CE_TEXT_1 = `E-mail à une correspondante

Chère Julia,
Merci pour ta lettre ! Aujourd'hui, je te présente ma famille. Nous sommes cinq à la maison. C'est mon père, ma mère, mes deux frères et moi.
Mon père est mécanicien. Il a 45 ans. Ma mère a 42 ans. Elle est vendeuse. Mon grand frère est étudiant. Il a 20 ans. Mon petit frère a 8 ans.
J'ai aussi une grande sœur, Léa. Elle est mariée et elle a un bébé. Elle n'habite pas avec nous.
Sur la photo, tu vois toute la famille. Nous sommes chez mes grands-parents.
Et toi, tu as des frères et sœurs ?`;

const CE_POOL_1 = buildExpressPool("e1-2-1", [
q({
    id: "ce-q1",
    textQ: "Combien de personnes habitent à la maison ?",
    text: ["Cinq", "Quatre", "Six"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Nous sommes _________ à la maison.",
    fill: "cinq",
    fillA: ["5"],
    vfQ: "Ils sont cinq à la maison.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quelle est la profession du père ?",
    text: ["Mécanicien", "Facteur", "Cuisinier"],
    textC: 0,
    img: ["mécanicien", "facteur", "cuisinier"],
    imgC: 0,
    fillQ: "Mon père est _________.",
    fill: "mécanicien",
    fillA: ["mecanicien"],
    vfQ: "Le père est cuisinier.",
    vfC: 1,
  }),
  q({
    id: "ce-q3",
    textQ: "Quel âge a la mère ?",
    text: ["42 ans", "45 ans", "52 ans"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Ma mère a _________ ans.",
    fill: "42",
    fillA: ["quarante-deux"],
    vfQ: "La mère a 42 ans.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Que fait le grand frère ?",
    text: ["Il est étudiant", "Il est mécanicien", "Il travaille dans un magasin"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Mon grand frère est _________.",
    fill: "étudiant",
    fillA: ["etudiant"],
    vfQ: "Le grand frère a 18 ans.",
    vfC: 1,
  }),
  q({
    id: "ce-q5",
    textQ: "Est-ce que la grande sœur habite avec la famille ?",
    text: [
      "Non, elle n'habite pas avec eux",
      "Oui, elle habite à la maison",
      "Oui, elle habite avec les grands-parents",
    ],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Elle est mariée et elle a un _________.",
    fill: "bébé",
    fillA: ["bebe"],
    vfQ: "La grande sœur est mariée.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Où est prise la photo de famille ?",
    text: ["Chez les grands-parents", "À la maison", "En vacances"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Nous sommes chez mes _________.",
    fill: "grands-parents",
    fillA: ["grands parents"],
    vfQ: "La photo est prise en vacances.",
    vfC: 1,
  }),
  q({
    id: "ce-q7",
    textQ: "Quel âge a le petit frère ?",
    text: ["8 ans", "10 ans", "12 ans"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Mon petit frère a _________ ans.",
    fill: "8",
    fillA: ["huit"],
    vfQ: "Le message dit la profession de la grande sœur.",
    vfC: 2,
  }),
]);

const CE_TEXT_2 = `Message à un ami

Salut !
Je m'appelle Karim. Je te parle de ma famille. Nous sommes 4 à la maison.
Père chauffeur 48 ans, mère vendeuse 44 ans, sœur 15 ans.
Ma famille est très sympa. On mange ensemble le soir.
Et toi, tu as une grande famille ?
Karim`;

const CE_POOL_2 = buildExpressPool("e1-2-2", [
  q({
    id: "ce-q1",
    textQ: "Comment s'appelle la personne ?",
    text: ["Karim", "Paul", "Marie"],
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
    textQ: "Combien de personnes habitent à la maison ?",
    text: ["4", "deux", "dix"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Nous sommes _________ à la maison.",
    fill: "4",
    vfQ: "Ils sont 4 à la maison.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Le père est chauffeur ?",
    text: ["Chauffeur", "facteur", "pilote"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Ma famille : _________.",
    fill: "chauffeur",
    vfQ: "Le père est chauffeur.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quand la famille mange-t-elle ensemble ?",
    text: ["Le soir", "Le matin", "À midi"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "On mange ensemble le _________.",
    fill: "soir",
    vfQ: "La famille mange ensemble le soir.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "De quoi parle le message ?",
    text: ["De la famille", "Du travail", "Des vacances"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Je te parle de ma _________.",
    fill: "famille",
    vfQ: "Le message parle de vacances.",
    vfC: 1,
  }),
  q({
    id: "ce-q6",
    textQ: "La famille est-elle sympa ?",
    text: ["Oui, très sympa", "Non, pas sympa", "On ne sait pas"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Ma famille est très _________.",
    fill: "sympa",
    vfQ: "La famille est sympa.",
    vfC: 0,
  }),
]);

const CE_TEXT_3 = `Message à un ami

Salut !
Je m'appelle Léa. Je te parle de ma famille. Nous sommes 3 à la maison.
Parents agriculteurs, frère jumeau 12 ans.
Ma famille est très sympa. On mange ensemble le soir.
Et toi, tu as une grande famille ?
Léa`;

const CE_POOL_3 = buildExpressPool("e1-2-3", [
  q({
    id: "ce-q1",
    textQ: "Comment s'appelle la personne ?",
    text: ["Léa", "Paul", "Marie"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Léa",
    vfQ: "La personne s'appelle Léa.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Combien de personnes habitent à la maison ?",
    text: ["3", "deux", "dix"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Nous sommes _________ à la maison.",
    fill: "3",
    vfQ: "Ils sont 3 à la maison.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Ils sont trois à la maison ?",
    text: ["Ils sont trois à la maison", "facteur", "pilote"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Ma famille : _________.",
    fill: "trois",
    vfQ: "Ils sont trois à la maison.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quand la famille mange-t-elle ensemble ?",
    text: ["Le soir", "Le matin", "À midi"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "On mange ensemble le _________.",
    fill: "soir",
    vfQ: "La famille mange ensemble le soir.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "De quoi parle le message ?",
    text: ["De la famille", "Du travail", "Des vacances"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Je te parle de ma _________.",
    fill: "famille",
    vfQ: "Le message parle de vacances.",
    vfC: 1,
  }),
  q({
    id: "ce-q6",
    textQ: "La famille est-elle sympa ?",
    text: ["Oui, très sympa", "Non, pas sympa", "On ne sait pas"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Ma famille est très _________.",
    fill: "sympa",
    vfQ: "La famille est sympa.",
    vfC: 0,
  }),
]);

const CE_TEXT_4 = `Message à un ami

Salut !
Je m'appelle Diego. Je te parle de ma famille. Nous sommes 5 à la maison.
Père médecin, mère professeur, deux sœurs.
Ma famille est très sympa. On mange ensemble le soir.
Et toi, tu as une grande famille ?
Diego`;

const CE_POOL_4 = buildExpressPool("e1-2-4", [
  q({
    id: "ce-q1",
    textQ: "Comment s'appelle la personne ?",
    text: ["Diego", "Paul", "Marie"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Diego",
    vfQ: "La personne s'appelle Diego.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Combien de personnes habitent à la maison ?",
    text: ["5", "deux", "dix"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Nous sommes _________ à la maison.",
    fill: "5",
    vfQ: "Ils sont 5 à la maison.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Le père est médecin ?",
    text: ["Médecin", "facteur", "pilote"],
    textC: 0,
    img: ["médecin", "boulanger", "facteur"],
    imgC: 0,
    fillQ: "Ma famille : _________.",
    fill: "médecin",
    vfQ: "Le père est médecin.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quand la famille mange-t-elle ensemble ?",
    text: ["Le soir", "Le matin", "À midi"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "On mange ensemble le _________.",
    fill: "soir",
    vfQ: "La famille mange ensemble le soir.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "De quoi parle le message ?",
    text: ["De la famille", "Du travail", "Des vacances"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Je te parle de ma _________.",
    fill: "famille",
    vfQ: "Le message parle de vacances.",
    vfC: 1,
  }),
  q({
    id: "ce-q6",
    textQ: "La famille est-elle sympa ?",
    text: ["Oui, très sympa", "Non, pas sympa", "On ne sait pas"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Ma famille est très _________.",
    fill: "sympa",
    vfQ: "La famille est sympa.",
    vfC: 0,
  }),
]);

const CE_TEXT_5 = `Message à un ami

Salut !
Je m'appelle Hana. Je te parle de ma famille. Nous sommes 6 à la maison.
Grands-parents, parents, elle et son frère.
Ma famille est très sympa. On mange ensemble le soir.
Et toi, tu as une grande famille ?
Hana`;

const CE_POOL_5 = buildExpressPool("e1-2-5", [
  q({
    id: "ce-q1",
    textQ: "Comment s'appelle la personne ?",
    text: ["Hana", "Paul", "Marie"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Hana",
    vfQ: "La personne s'appelle Hana.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Combien de personnes habitent à la maison ?",
    text: ["6", "deux", "dix"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Nous sommes _________ à la maison.",
    fill: "6",
    vfQ: "Ils sont 6 à la maison.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Ils sont six à la maison ?",
    text: ["Ils sont six à la maison", "facteur", "pilote"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Ma famille : _________.",
    fill: "six",
    vfQ: "Ils sont six à la maison.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quand la famille mange-t-elle ensemble ?",
    text: ["Le soir", "Le matin", "À midi"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "On mange ensemble le _________.",
    fill: "soir",
    vfQ: "La famille mange ensemble le soir.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "De quoi parle le message ?",
    text: ["De la famille", "Du travail", "Des vacances"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Je te parle de ma _________.",
    fill: "famille",
    vfQ: "Le message parle de vacances.",
    vfC: 1,
  }),
  q({
    id: "ce-q6",
    textQ: "La famille est-elle sympa ?",
    text: ["Oui, très sympa", "Non, pas sympa", "On ne sait pas"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Ma famille est très _________.",
    fill: "sympa",
    vfQ: "La famille est sympa.",
    vfC: 0,
  }),
]);

const CE_TEXT_6 = `Message à un ami

Salut !
Je m'appelle Noah. Je te parle de ma famille. Nous sommes 4 à la maison.
Mère infirmière célibataire, lui et sa sœur.
Ma famille est très sympa. On mange ensemble le soir.
Et toi, tu as une grande famille ?
Noah`;

const CE_POOL_6 = buildExpressPool("e1-2-6", [
  q({
    id: "ce-q1",
    textQ: "Comment s'appelle la personne ?",
    text: ["Noah", "Paul", "Marie"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Noah",
    vfQ: "La personne s'appelle Noah.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Combien de personnes habitent à la maison ?",
    text: ["4", "deux", "dix"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Nous sommes _________ à la maison.",
    fill: "4",
    vfQ: "Ils sont 4 à la maison.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "La mère est infirmière ?",
    text: ["Infirmière", "facteur", "pilote"],
    textC: 0,
    img: ["infirmière", "vendeuse", "coiffeuse"],
    imgC: 0,
    fillQ: "Ma famille : _________.",
    fill: "infirmière",
    vfQ: "La mère est infirmière.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quand la famille mange-t-elle ensemble ?",
    text: ["Le soir", "Le matin", "À midi"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "On mange ensemble le _________.",
    fill: "soir",
    vfQ: "La famille mange ensemble le soir.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "De quoi parle le message ?",
    text: ["De la famille", "Du travail", "Des vacances"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Je te parle de ma _________.",
    fill: "famille",
    vfQ: "Le message parle de vacances.",
    vfC: 1,
  }),
  q({
    id: "ce-q6",
    textQ: "La famille est-elle sympa ?",
    text: ["Oui, très sympa", "Non, pas sympa", "On ne sait pas"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Ma famille est très _________.",
    fill: "sympa",
    vfQ: "La famille est sympa.",
    vfC: 0,
  }),
]);

const CE_TEXT_7 = `Message à un ami

Salut !
Je m'appelle Sofia. Je te parle de ma famille. Nous sommes 5 à la maison.
Père cuisinier, mère secrétaire, frère et sœur.
Ma famille est très sympa. On mange ensemble le soir.
Et toi, tu as une grande famille ?
Sofia`;

const CE_POOL_7 = buildExpressPool("e1-2-7", [
  q({
    id: "ce-q1",
    textQ: "Comment s'appelle la personne ?",
    text: ["Sofia", "Paul", "Marie"],
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
    textQ: "Combien de personnes habitent à la maison ?",
    text: ["5", "deux", "dix"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Nous sommes _________ à la maison.",
    fill: "5",
    vfQ: "Ils sont 5 à la maison.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Le père est cuisinier ?",
    text: ["Cuisinier", "facteur", "pilote"],
    textC: 0,
    img: ["cuisinier", "plombier", "peintre"],
    imgC: 0,
    fillQ: "Ma famille : _________.",
    fill: "cuisinier",
    vfQ: "Le père est cuisinier.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quand la famille mange-t-elle ensemble ?",
    text: ["Le soir", "Le matin", "À midi"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "On mange ensemble le _________.",
    fill: "soir",
    vfQ: "La famille mange ensemble le soir.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "De quoi parle le message ?",
    text: ["De la famille", "Du travail", "Des vacances"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Je te parle de ma _________.",
    fill: "famille",
    vfQ: "Le message parle de vacances.",
    vfC: 1,
  }),
  q({
    id: "ce-q6",
    textQ: "La famille est-elle sympa ?",
    text: ["Oui, très sympa", "Non, pas sympa", "On ne sait pas"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Ma famille est très _________.",
    fill: "sympa",
    vfQ: "La famille est sympa.",
    vfC: 0,
  }),
]);

const CE_TEXT_8 = `Message à un ami

Salut !
Je m'appelle Adam. Je te parle de ma famille. Nous sommes 3 à la maison.
Ses parents et lui seulement.
Ma famille est très sympa. On mange ensemble le soir.
Et toi, tu as une grande famille ?
Adam`;

const CE_POOL_8 = buildExpressPool("e1-2-8", [
  q({
    id: "ce-q1",
    textQ: "Comment s'appelle la personne ?",
    text: ["Adam", "Paul", "Marie"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Adam",
    vfQ: "La personne s'appelle Adam.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Combien de personnes habitent à la maison ?",
    text: ["3", "deux", "dix"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Nous sommes _________ à la maison.",
    fill: "3",
    vfQ: "Ils sont 3 à la maison.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Ils sont trois ?",
    text: ["Ils sont trois", "facteur", "pilote"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Ma famille : _________.",
    fill: "trois",
    vfQ: "Ils sont trois.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quand la famille mange-t-elle ensemble ?",
    text: ["Le soir", "Le matin", "À midi"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "On mange ensemble le _________.",
    fill: "soir",
    vfQ: "La famille mange ensemble le soir.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "De quoi parle le message ?",
    text: ["De la famille", "Du travail", "Des vacances"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Je te parle de ma _________.",
    fill: "famille",
    vfQ: "Le message parle de vacances.",
    vfC: 1,
  }),
  q({
    id: "ce-q6",
    textQ: "La famille est-elle sympa ?",
    text: ["Oui, très sympa", "Non, pas sympa", "On ne sait pas"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Ma famille est très _________.",
    fill: "sympa",
    vfQ: "La famille est sympa.",
    vfC: 0,
  }),
]);

const CE_TEXT_9 = `Message à un ami

Salut !
Je m'appelle Mila. Je te parle de ma famille. Nous sommes 4 à la maison.
Père retraité, mère fleuriste, grand-mère.
Ma famille est très sympa. On mange ensemble le soir.
Et toi, tu as une grande famille ?
Mila`;

const CE_POOL_9 = buildExpressPool("e1-2-9", [
  q({
    id: "ce-q1",
    textQ: "Comment s'appelle la personne ?",
    text: ["Mila", "Paul", "Marie"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Mila",
    vfQ: "La personne s'appelle Mila.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Combien de personnes habitent à la maison ?",
    text: ["4", "deux", "dix"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Nous sommes _________ à la maison.",
    fill: "4",
    vfQ: "Ils sont 4 à la maison.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "La mère est fleuriste ?",
    text: ["Fleuriste", "facteur", "pilote"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Ma famille : _________.",
    fill: "fleuriste",
    vfQ: "La mère est fleuriste.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quand la famille mange-t-elle ensemble ?",
    text: ["Le soir", "Le matin", "À midi"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "On mange ensemble le _________.",
    fill: "soir",
    vfQ: "La famille mange ensemble le soir.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "De quoi parle le message ?",
    text: ["De la famille", "Du travail", "Des vacances"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Je te parle de ma _________.",
    fill: "famille",
    vfQ: "Le message parle de vacances.",
    vfC: 1,
  }),
  q({
    id: "ce-q6",
    textQ: "La famille est-elle sympa ?",
    text: ["Oui, très sympa", "Non, pas sympa", "On ne sait pas"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Ma famille est très _________.",
    fill: "sympa",
    vfQ: "La famille est sympa.",
    vfC: 0,
  }),
]);

const CE_TEXT_10 = `Message à un ami

Salut !
Je m'appelle Youssef. Je te parle de ma famille. Nous sommes 5 à la maison.
Deux frères, deux sœurs, parents.
Ma famille est très sympa. On mange ensemble le soir.
Et toi, tu as une grande famille ?
Youssef`;

const CE_POOL_10 = buildExpressPool("e1-2-10", [
  q({
    id: "ce-q1",
    textQ: "Comment s'appelle la personne ?",
    text: ["Youssef", "Paul", "Marie"],
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
    textQ: "Combien de personnes habitent à la maison ?",
    text: ["5", "deux", "dix"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Nous sommes _________ à la maison.",
    fill: "5",
    vfQ: "Ils sont 5 à la maison.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Il a deux frères ?",
    text: ["Il a deux frères", "facteur", "pilote"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Ma famille : _________.",
    fill: "deux",
    vfQ: "Il a deux frères.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quand la famille mange-t-elle ensemble ?",
    text: ["Le soir", "Le matin", "À midi"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "On mange ensemble le _________.",
    fill: "soir",
    vfQ: "La famille mange ensemble le soir.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "De quoi parle le message ?",
    text: ["De la famille", "Du travail", "Des vacances"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Je te parle de ma _________.",
    fill: "famille",
    vfQ: "Le message parle de vacances.",
    vfC: 1,
  }),
  q({
    id: "ce-q6",
    textQ: "La famille est-elle sympa ?",
    text: ["Oui, très sympa", "Non, pas sympa", "On ne sait pas"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Ma famille est très _________.",
    fill: "sympa",
    vfQ: "La famille est sympa.",
    vfC: 0,
  }),
]);

const CE_TEXT_11 = `Message à un ami

Salut !
Je m'appelle Chloé. Je te parle de ma famille. Nous sommes 4 à la maison.
Père policier, mère coiffeuse, petit frère 6 ans.
Ma famille est très sympa. On mange ensemble le soir.
Et toi, tu as une grande famille ?
Chloé`;

const CE_POOL_11 = buildExpressPool("e1-2-11", [
  q({
    id: "ce-q1",
    textQ: "Comment s'appelle la personne ?",
    text: ["Chloé", "Paul", "Marie"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Chloé",
    vfQ: "La personne s'appelle Chloé.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Combien de personnes habitent à la maison ?",
    text: ["4", "deux", "dix"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Nous sommes _________ à la maison.",
    fill: "4",
    vfQ: "Ils sont 4 à la maison.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Le père est policier ?",
    text: ["Policier", "facteur", "pilote"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Ma famille : _________.",
    fill: "policier",
    vfQ: "Le père est policier.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quand la famille mange-t-elle ensemble ?",
    text: ["Le soir", "Le matin", "À midi"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "On mange ensemble le _________.",
    fill: "soir",
    vfQ: "La famille mange ensemble le soir.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "De quoi parle le message ?",
    text: ["De la famille", "Du travail", "Des vacances"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Je te parle de ma _________.",
    fill: "famille",
    vfQ: "Le message parle de vacances.",
    vfC: 1,
  }),
  q({
    id: "ce-q6",
    textQ: "La famille est-elle sympa ?",
    text: ["Oui, très sympa", "Non, pas sympa", "On ne sait pas"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Ma famille est très _________.",
    fill: "sympa",
    vfQ: "La famille est sympa.",
    vfC: 0,
  }),
]);

const CE_TEXT_12 = `Message à un ami

Salut !
Je m'appelle Emre. Je te parle de ma famille. Nous sommes 3 à la maison.
Parents et sœur aînée mariée.
Ma famille est très sympa. On mange ensemble le soir.
Et toi, tu as une grande famille ?
Emre`;

const CE_POOL_12 = buildExpressPool("e1-2-12", [
  q({
    id: "ce-q1",
    textQ: "Comment s'appelle la personne ?",
    text: ["Emre", "Paul", "Marie"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Emre",
    vfQ: "La personne s'appelle Emre.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Combien de personnes habitent à la maison ?",
    text: ["3", "deux", "dix"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Nous sommes _________ à la maison.",
    fill: "3",
    vfQ: "Ils sont 3 à la maison.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Sa sœur est mariée ?",
    text: ["Mariée", "facteur", "pilote"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Ma famille : _________.",
    fill: "mariée",
    vfQ: "Sa sœur est mariée.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quand la famille mange-t-elle ensemble ?",
    text: ["Le soir", "Le matin", "À midi"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "On mange ensemble le _________.",
    fill: "soir",
    vfQ: "La famille mange ensemble le soir.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "De quoi parle le message ?",
    text: ["De la famille", "Du travail", "Des vacances"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Je te parle de ma _________.",
    fill: "famille",
    vfQ: "Le message parle de vacances.",
    vfC: 1,
  }),
  q({
    id: "ce-q6",
    textQ: "La famille est-elle sympa ?",
    text: ["Oui, très sympa", "Non, pas sympa", "On ne sait pas"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Ma famille est très _________.",
    fill: "sympa",
    vfQ: "La famille est sympa.",
    vfC: 0,
  }),
]);

const CE_TEXT_13 = `Message à un ami

Salut !
Je m'appelle Anna. Je te parle de ma famille. Nous sommes 5 à la maison.
Père ingénieur, mère dentiste, jumeaux.
Ma famille est très sympa. On mange ensemble le soir.
Et toi, tu as une grande famille ?
Anna`;

const CE_POOL_13 = buildExpressPool("e1-2-13", [
  q({
    id: "ce-q1",
    textQ: "Comment s'appelle la personne ?",
    text: ["Anna", "Paul", "Marie"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Anna",
    vfQ: "La personne s'appelle Anna.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Combien de personnes habitent à la maison ?",
    text: ["5", "deux", "dix"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Nous sommes _________ à la maison.",
    fill: "5",
    vfQ: "Ils sont 5 à la maison.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "La mère est dentiste ?",
    text: ["Dentiste", "facteur", "pilote"],
    textC: 0,
    img: ["dentiste", "serveuse", "vendeuse"],
    imgC: 0,
    fillQ: "Ma famille : _________.",
    fill: "dentiste",
    vfQ: "La mère est dentiste.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quand la famille mange-t-elle ensemble ?",
    text: ["Le soir", "Le matin", "À midi"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "On mange ensemble le _________.",
    fill: "soir",
    vfQ: "La famille mange ensemble le soir.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "De quoi parle le message ?",
    text: ["De la famille", "Du travail", "Des vacances"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Je te parle de ma _________.",
    fill: "famille",
    vfQ: "Le message parle de vacances.",
    vfC: 1,
  }),
  q({
    id: "ce-q6",
    textQ: "La famille est-elle sympa ?",
    text: ["Oui, très sympa", "Non, pas sympa", "On ne sait pas"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Ma famille est très _________.",
    fill: "sympa",
    vfQ: "La famille est sympa.",
    vfC: 0,
  }),
]);

const CE_TEXT_14 = `Message à un ami

Salut !
Je m'appelle Bilal. Je te parle de ma famille. Nous sommes 4 à la maison.
Famille nombreuse : 4 enfants.
Ma famille est très sympa. On mange ensemble le soir.
Et toi, tu as une grande famille ?
Bilal`;

const CE_POOL_14 = buildExpressPool("e1-2-14", [
  q({
    id: "ce-q1",
    textQ: "Comment s'appelle la personne ?",
    text: ["Bilal", "Paul", "Marie"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Bilal",
    vfQ: "La personne s'appelle Bilal.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Combien de personnes habitent à la maison ?",
    text: ["4", "deux", "dix"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Nous sommes _________ à la maison.",
    fill: "4",
    vfQ: "Ils sont 4 à la maison.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Il y a quatre enfants ?",
    text: ["Il y a quatre enfants", "facteur", "pilote"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Ma famille : _________.",
    fill: "quatre",
    vfQ: "Il y a quatre enfants.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quand la famille mange-t-elle ensemble ?",
    text: ["Le soir", "Le matin", "À midi"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "On mange ensemble le _________.",
    fill: "soir",
    vfQ: "La famille mange ensemble le soir.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "De quoi parle le message ?",
    text: ["De la famille", "Du travail", "Des vacances"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Je te parle de ma _________.",
    fill: "famille",
    vfQ: "Le message parle de vacances.",
    vfC: 1,
  }),
  q({
    id: "ce-q6",
    textQ: "La famille est-elle sympa ?",
    text: ["Oui, très sympa", "Non, pas sympa", "On ne sait pas"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Ma famille est très _________.",
    fill: "sympa",
    vfQ: "La famille est sympa.",
    vfC: 0,
  }),
]);

const CE_TEXT_15 = `Message à un ami

Salut !
Je m'appelle Emma. Je te parle de ma famille. Nous sommes 3 à la maison.
Mère et père professeurs, elle seule enfant.
Ma famille est très sympa. On mange ensemble le soir.
Et toi, tu as une grande famille ?
Emma`;

const CE_POOL_15 = buildExpressPool("e1-2-15", [
  q({
    id: "ce-q1",
    textQ: "Comment s'appelle la personne ?",
    text: ["Emma", "Paul", "Marie"],
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
    textQ: "Combien de personnes habitent à la maison ?",
    text: ["3", "deux", "dix"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Nous sommes _________ à la maison.",
    fill: "3",
    vfQ: "Ils sont 3 à la maison.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Elle est fille unique ?",
    text: ["Unique", "facteur", "pilote"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Ma famille : _________.",
    fill: "unique",
    vfQ: "Elle est fille unique.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quand la famille mange-t-elle ensemble ?",
    text: ["Le soir", "Le matin", "À midi"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "On mange ensemble le _________.",
    fill: "soir",
    vfQ: "La famille mange ensemble le soir.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "De quoi parle le message ?",
    text: ["De la famille", "Du travail", "Des vacances"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Je te parle de ma _________.",
    fill: "famille",
    vfQ: "Le message parle de vacances.",
    vfC: 1,
  }),
  q({
    id: "ce-q6",
    textQ: "La famille est-elle sympa ?",
    text: ["Oui, très sympa", "Non, pas sympa", "On ne sait pas"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Ma famille est très _________.",
    fill: "sympa",
    vfQ: "La famille est sympa.",
    vfC: 0,
  }),
]);

const CE_TEXT_16 = `Message à un ami

Salut !
Je m'appelle Ravi. Je te parle de ma famille. Nous sommes 5 à la maison.
Oncle, tante, cousins à la maison le week-end.
Ma famille est très sympa. On mange ensemble le soir.
Et toi, tu as une grande famille ?
Ravi`;

const CE_POOL_16 = buildExpressPool("e1-2-16", [
  q({
    id: "ce-q1",
    textQ: "Comment s'appelle la personne ?",
    text: ["Ravi", "Paul", "Marie"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Ravi",
    vfQ: "La personne s'appelle Ravi.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Combien de personnes habitent à la maison ?",
    text: ["5", "deux", "dix"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Nous sommes _________ à la maison.",
    fill: "5",
    vfQ: "Ils sont 5 à la maison.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Des cousins viennent le week-end ?",
    text: ["Des cousins viennent le week-end", "facteur", "pilote"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Ma famille : _________.",
    fill: "week-end",
    vfQ: "Des cousins viennent le week-end.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quand la famille mange-t-elle ensemble ?",
    text: ["Le soir", "Le matin", "À midi"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "On mange ensemble le _________.",
    fill: "soir",
    vfQ: "La famille mange ensemble le soir.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "De quoi parle le message ?",
    text: ["De la famille", "Du travail", "Des vacances"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Je te parle de ma _________.",
    fill: "famille",
    vfQ: "Le message parle de vacances.",
    vfC: 1,
  }),
  q({
    id: "ce-q6",
    textQ: "La famille est-elle sympa ?",
    text: ["Oui, très sympa", "Non, pas sympa", "On ne sait pas"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Ma famille est très _________.",
    fill: "sympa",
    vfQ: "La famille est sympa.",
    vfC: 0,
  }),
]);

const CE_TEXT_17 = `Message à un ami

Salut !
Je m'appelle Lucie. Je te parle de ma famille. Nous sommes 4 à la maison.
Père boulanger, mère à la maison, deux frères.
Ma famille est très sympa. On mange ensemble le soir.
Et toi, tu as une grande famille ?
Lucie`;

const CE_POOL_17 = buildExpressPool("e1-2-17", [
  q({
    id: "ce-q1",
    textQ: "Comment s'appelle la personne ?",
    text: ["Lucie", "Paul", "Marie"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Lucie",
    vfQ: "La personne s'appelle Lucie.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Combien de personnes habitent à la maison ?",
    text: ["4", "deux", "dix"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Nous sommes _________ à la maison.",
    fill: "4",
    vfQ: "Ils sont 4 à la maison.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Le père est boulanger ?",
    text: ["Boulanger", "facteur", "pilote"],
    textC: 0,
    img: ["boulanger", "journaliste", "pilote"],
    imgC: 0,
    fillQ: "Ma famille : _________.",
    fill: "boulanger",
    vfQ: "Le père est boulanger.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quand la famille mange-t-elle ensemble ?",
    text: ["Le soir", "Le matin", "À midi"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "On mange ensemble le _________.",
    fill: "soir",
    vfQ: "La famille mange ensemble le soir.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "De quoi parle le message ?",
    text: ["De la famille", "Du travail", "Des vacances"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Je te parle de ma _________.",
    fill: "famille",
    vfQ: "Le message parle de vacances.",
    vfC: 1,
  }),
  q({
    id: "ce-q6",
    textQ: "La famille est-elle sympa ?",
    text: ["Oui, très sympa", "Non, pas sympa", "On ne sait pas"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Ma famille est très _________.",
    fill: "sympa",
    vfQ: "La famille est sympa.",
    vfC: 0,
  }),
]);

const CE_TEXT_18 = `Message à un ami

Salut !
Je m'appelle Samir. Je te parle de ma famille. Nous sommes 6 à la maison.
Parents, trois frères, grand-père.
Ma famille est très sympa. On mange ensemble le soir.
Et toi, tu as une grande famille ?
Samir`;

const CE_POOL_18 = buildExpressPool("e1-2-18", [
  q({
    id: "ce-q1",
    textQ: "Comment s'appelle la personne ?",
    text: ["Samir", "Paul", "Marie"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Samir",
    vfQ: "La personne s'appelle Samir.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Combien de personnes habitent à la maison ?",
    text: ["6", "deux", "dix"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Nous sommes _________ à la maison.",
    fill: "6",
    vfQ: "Ils sont 6 à la maison.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Le grand-père habite avec eux ?",
    text: ["Le grand-père habite avec eux", "facteur", "pilote"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Ma famille : _________.",
    fill: "grand-père",
    vfQ: "Le grand-père habite avec eux.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quand la famille mange-t-elle ensemble ?",
    text: ["Le soir", "Le matin", "À midi"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "On mange ensemble le _________.",
    fill: "soir",
    vfQ: "La famille mange ensemble le soir.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "De quoi parle le message ?",
    text: ["De la famille", "Du travail", "Des vacances"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Je te parle de ma _________.",
    fill: "famille",
    vfQ: "Le message parle de vacances.",
    vfC: 1,
  }),
  q({
    id: "ce-q6",
    textQ: "La famille est-elle sympa ?",
    text: ["Oui, très sympa", "Non, pas sympa", "On ne sait pas"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Ma famille est très _________.",
    fill: "sympa",
    vfQ: "La famille est sympa.",
    vfC: 0,
  }),
]);

const CE_TEXT_19 = `Message à un ami

Salut !
Je m'appelle Julie. Je te parle de ma famille. Nous sommes 4 à la maison.
Mère divorcée, julie et son frère.
Ma famille est très sympa. On mange ensemble le soir.
Et toi, tu as une grande famille ?
Julie`;

const CE_POOL_19 = buildExpressPool("e1-2-19", [
  q({
    id: "ce-q1",
    textQ: "Comment s'appelle la personne ?",
    text: ["Julie", "Paul", "Marie"],
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
    textQ: "Combien de personnes habitent à la maison ?",
    text: ["4", "deux", "dix"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Nous sommes _________ à la maison.",
    fill: "4",
    vfQ: "Ils sont 4 à la maison.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "La mère est divorcée ?",
    text: ["Divorcée", "facteur", "pilote"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Ma famille : _________.",
    fill: "divorcée",
    vfQ: "La mère est divorcée.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quand la famille mange-t-elle ensemble ?",
    text: ["Le soir", "Le matin", "À midi"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "On mange ensemble le _________.",
    fill: "soir",
    vfQ: "La famille mange ensemble le soir.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "De quoi parle le message ?",
    text: ["De la famille", "Du travail", "Des vacances"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Je te parle de ma _________.",
    fill: "famille",
    vfQ: "Le message parle de vacances.",
    vfC: 1,
  }),
  q({
    id: "ce-q6",
    textQ: "La famille est-elle sympa ?",
    text: ["Oui, très sympa", "Non, pas sympa", "On ne sait pas"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Ma famille est très _________.",
    fill: "sympa",
    vfQ: "La famille est sympa.",
    vfC: 0,
  }),
]);

const CE_TEXT_20 = `Message à un ami

Salut !
Je m'appelle Mateo. Je te parle de ma famille. Nous sommes 5 à la maison.
Père musicien, mère traductrice, sœur bébé.
Ma famille est très sympa. On mange ensemble le soir.
Et toi, tu as une grande famille ?
Mateo`;

const CE_POOL_20 = buildExpressPool("e1-2-20", [
  q({
    id: "ce-q1",
    textQ: "Comment s'appelle la personne ?",
    text: ["Mateo", "Paul", "Marie"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Mateo",
    vfQ: "La personne s'appelle Mateo.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Combien de personnes habitent à la maison ?",
    text: ["5", "deux", "dix"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Nous sommes _________ à la maison.",
    fill: "5",
    vfQ: "Ils sont 5 à la maison.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Le père est musicien ?",
    text: ["Musicien", "facteur", "pilote"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Ma famille : _________.",
    fill: "musicien",
    vfQ: "Le père est musicien.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quand la famille mange-t-elle ensemble ?",
    text: ["Le soir", "Le matin", "À midi"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "On mange ensemble le _________.",
    fill: "soir",
    vfQ: "La famille mange ensemble le soir.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "De quoi parle le message ?",
    text: ["De la famille", "Du travail", "Des vacances"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Je te parle de ma _________.",
    fill: "famille",
    vfQ: "Le message parle de vacances.",
    vfC: 1,
  }),
  q({
    id: "ce-q6",
    textQ: "La famille est-elle sympa ?",
    text: ["Oui, très sympa", "Non, pas sympa", "On ne sait pas"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Ma famille est très _________.",
    fill: "sympa",
    vfQ: "La famille est sympa.",
    vfC: 0,
  }),
]);

export const E1_2_CE: CommunicationExercise[] = [
  readingPoolExercise({
  id: "e1-2-1",
  readingText: CE_TEXT_1,
  questionPool: CE_POOL_1
}),
  readingPoolExercise({
  id: "e1-2-2",
  readingText: CE_TEXT_2,
  questionPool: CE_POOL_2
}),
  readingPoolExercise({
  id: "e1-2-3",
  readingText: CE_TEXT_3,
  questionPool: CE_POOL_3
}),
  readingPoolExercise({
  id: "e1-2-4",
  readingText: CE_TEXT_4,
  questionPool: CE_POOL_4
}),
  readingPoolExercise({
  id: "e1-2-5",
  readingText: CE_TEXT_5,
  questionPool: CE_POOL_5
}),
  readingPoolExercise({
  id: "e1-2-6",
  readingText: CE_TEXT_6,
  questionPool: CE_POOL_6
}),
  readingPoolExercise({
  id: "e1-2-7",
  readingText: CE_TEXT_7,
  questionPool: CE_POOL_7
}),
  readingPoolExercise({
  id: "e1-2-8",
  readingText: CE_TEXT_8,
  questionPool: CE_POOL_8
}),
  readingPoolExercise({
  id: "e1-2-9",
  readingText: CE_TEXT_9,
  questionPool: CE_POOL_9
}),
  readingPoolExercise({
  id: "e1-2-10",
  readingText: CE_TEXT_10,
  questionPool: CE_POOL_10
}),
  readingPoolExercise({
  id: "e1-2-11",
  readingText: CE_TEXT_11,
  questionPool: CE_POOL_11
}),
  readingPoolExercise({
  id: "e1-2-12",
  readingText: CE_TEXT_12,
  questionPool: CE_POOL_12
}),
  readingPoolExercise({
  id: "e1-2-13",
  readingText: CE_TEXT_13,
  questionPool: CE_POOL_13
}),
  readingPoolExercise({
  id: "e1-2-14",
  readingText: CE_TEXT_14,
  questionPool: CE_POOL_14
}),
  readingPoolExercise({
  id: "e1-2-15",
  readingText: CE_TEXT_15,
  questionPool: CE_POOL_15
}),
  readingPoolExercise({
  id: "e1-2-16",
  readingText: CE_TEXT_16,
  questionPool: CE_POOL_16
}),
  readingPoolExercise({
  id: "e1-2-17",
  readingText: CE_TEXT_17,
  questionPool: CE_POOL_17
}),
  readingPoolExercise({
  id: "e1-2-18",
  readingText: CE_TEXT_18,
  questionPool: CE_POOL_18
}),
  readingPoolExercise({
  id: "e1-2-19",
  readingText: CE_TEXT_19,
  questionPool: CE_POOL_19
}),
  readingPoolExercise({
  id: "e1-2-20",
  readingText: CE_TEXT_20,
  questionPool: CE_POOL_20
}),
];

/* ── Production orale — dialogues à jouer (thème famille) ──────────────────── */

export const E1_2_PO: ExpressPoDialogue[] = [
  {
    id: "e1-2-po-1",
    title: "La photo de famille",
    context: "Vous montrez une photo de votre famille à un ami.",
    roleA: { title: "L'ami", vous: "l'ami / l'amie" },
    roleB: { title: "Vous", vous: "celui / celle qui montre la photo" },
    lines: [
      { role: "A", text: "Qu'est-ce que tu regardes ?" },
      { role: "B", text: "Une photo de ma famille. Regarde !" },
      { role: "A", text: "Elle est belle ! Lui, c'est qui ?" },
      { role: "B", text: "C'est mon père. Et là, c'est ma mère." },
      { role: "A", text: "Et la jeune fille blonde, c'est ta sœur ?" },
      { role: "B", text: "Oui, c'est ma sœur Ana. Elle a 15 ans." },
      { role: "A", text: "Tu as aussi un frère ?" },
      { role: "B", text: "Non, nous sommes deux : ma sœur et moi." },
      { role: "A", text: "Enchanté(e) de te connaître !" },
      { role: "B", text: "Moi aussi. À tout à l'heure !" },
],
  },
  {
    id: "e1-2-po-2",
    title: "Frères et sœurs",
    context: "À la pause, vous parlez de vos familles avec une collègue.",
    roleA: { title: "La collègue", vous: "le collègue / la collègue" },
    roleB: { title: "Vous", vous: "le collègue / la collègue" },
    lines: [
      { role: "A", text: "Tu as des frères et sœurs ?" },
      { role: "B", text: "Oui, j'ai deux frères et une sœur. Et toi ?" },
      { role: "A", text: "Moi, je suis fille unique." },
      { role: "B", text: "Tes parents habitent ici ?" },
      { role: "A", text: "Non, ils habitent au Portugal. Et ta famille ?" },
      { role: "B", text: "Mes frères habitent ici, ma sœur est en Italie." },
      { role: "A", text: "Elle est mariée, ta sœur ?" },
      { role: "B", text: "Oui, et elle a trois enfants." },
      { role: "A", text: "Bon courage pour la suite !" },
      { role: "B", text: "Merci, toi aussi !" },
],
  },
  {
    id: "e1-2-po-3",
    title: "Tu as des enfants ?",
    context: "Un collègue vous pose des questions sur votre famille.",
    roleA: { title: "Le collègue", vous: "le collègue / la collègue" },
    roleB: { title: "Vous", vous: "le collègue / la collègue" },
    lines: [
      { role: "A", text: "Tu es marié, Samir ?" },
      { role: "B", text: "Oui, je suis marié depuis dix ans." },
      { role: "A", text: "Tu as des enfants ?" },
      { role: "B", text: "Oui, j'ai un fils et une fille." },
      { role: "A", text: "Ils ont quel âge ?" },
      { role: "B", text: "Mon fils a huit ans et ma fille a cinq ans." },
      { role: "A", text: "Ils vont à l'école ici ?" },
      { role: "B", text: "Oui, à l'école du quartier. Et toi, tu as des enfants ?" },
      { role: "A", text: "Enchanté(e) de te connaître !" },
      { role: "B", text: "Moi aussi. À tout à l'heure !" },
],
  },
  {
    id: "e1-2-po-4",
    title: "Présenter sa famille en visio",
    context: "Vous parlez en visio avec votre correspondant et vous présentez votre famille.",
    roleA: { title: "Le correspondant", vous: "le correspondant / la correspondante" },
    roleB: { title: "Vous", vous: "celui / celle qui présente sa famille" },
    lines: [
      { role: "A", text: "Bonjour ! Aujourd'hui, tu me présentes ta famille ?" },
      { role: "B", text: "Oui ! Alors, nous sommes cinq à la maison." },
      { role: "A", text: "Qui habite avec toi ?" },
      { role: "B", text: "Mes parents, mes deux sœurs et moi." },
      { role: "A", text: "Que font tes parents ?" },
      { role: "B", text: "Mon père est chauffeur et ma mère est vendeuse." },
      { role: "A", text: "Et tes sœurs, elles ont quel âge ?" },
      { role: "B", text: "Elles ont douze et seize ans." },
      { role: "A", text: "Enchanté(e) de te connaître !" },
      { role: "B", text: "Moi aussi. À tout à l'heure !" },
],
  },
  {
    id: "e1-2-po-5",
    title: "Au parc",
    context: "Au parc, vous parlez avec un autre parent de vos enfants.",
    roleA: { title: "Le premier parent", vous: "le papa / la maman" },
    roleB: { title: "Le deuxième parent", vous: "le papa / la maman" },
    lines: [
      { role: "A", text: "Il est mignon, votre fils ! Il a quel âge ?" },
      { role: "B", text: "Merci ! Il a trois ans. Et votre fille ?" },
      { role: "A", text: "Elle a quatre ans. Vous avez d'autres enfants ?" },
      { role: "B", text: "Oui, une grande fille de dix ans." },
      { role: "A", text: "Nous, nous avons aussi un bébé de six mois." },
      { role: "B", text: "Félicitations ! C'est un garçon ou une fille ?" },
      { role: "A", text: "C'est un garçon, il s'appelle Noah." },
      { role: "B", text: "Comme mon neveu ! C'est un joli prénom." },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e1-2-po-6",
    title: "Au mariage",
    context: "Vous êtes invité(e) à un mariage et vous demandez qui est qui.",
    roleA: { title: "L'invité", vous: "l'invité / l'invitée" },
    roleB: { title: "Le cousin de la mariée", vous: "le cousin / la cousine de la mariée" },
    lines: [
      { role: "A", text: "C'est un beau mariage ! Vous êtes de la famille ?" },
      { role: "B", text: "Oui, la mariée est ma cousine." },
      { role: "A", text: "Ah ! Et le monsieur là-bas, c'est qui ?" },
      { role: "B", text: "C'est mon oncle, le père de la mariée." },
      { role: "A", text: "Et la dame à côté de lui ?" },
      { role: "B", text: "C'est sa femme, ma tante Rosa." },
      { role: "A", text: "Vous avez une grande famille !" },
      { role: "B", text: "Oui, nous sommes plus de cinquante aujourd'hui !" },
      { role: "A", text: "Super, merci beaucoup." },
      { role: "B", text: "Avec plaisir. Bonne continuation !" },
],
  },
  {
    id: "e1-2-po-7",
    title: "Les grands-parents",
    context: "Vous parlez de vos grands-parents avec un ami.",
    roleA: { title: "L'ami", vous: "l'ami / l'amie" },
    roleB: { title: "Vous", vous: "le petit-fils / la petite-fille" },
    lines: [
      { role: "A", text: "Tu vas où ce week-end ?" },
      { role: "B", text: "Chez mes grands-parents, à la campagne." },
      { role: "A", text: "Ils ont quel âge, tes grands-parents ?" },
      { role: "B", text: "Mon grand-père a 75 ans et ma grand-mère a 72 ans." },
      { role: "A", text: "Tu les vois souvent ?" },
      { role: "B", text: "Oui, une fois par mois. J'adore ma grand-mère." },
      { role: "A", text: "Elle fait des bons gâteaux, c'est ça ?" },
      { role: "B", text: "Oui ! Et mon grand-père raconte des histoires drôles." },
      { role: "A", text: "Enchanté(e) de te connaître !" },
      { role: "B", text: "Moi aussi. À tout à l'heure !" },
],
  },
  {
    id: "e1-2-po-8",
    title: "Inscription à l'école",
    context: "Vous inscrivez votre fille à l'école. La secrétaire vous pose des questions sur la famille.",
    roleA: { title: "La secrétaire", vous: "le secrétaire / la secrétaire" },
    roleB: { title: "Le parent", vous: "le papa / la maman" },
    lines: [
      { role: "A", text: "Bonjour, c'est pour inscrire votre enfant ?" },
      { role: "B", text: "Oui, ma fille Lina. Elle a six ans." },
      { role: "A", text: "Très bien. Vous avez d'autres enfants ?" },
      { role: "B", text: "Oui, un fils de neuf ans. Il est déjà dans cette école." },
      { role: "A", text: "Parfait. Vous êtes mariée ?" },
      { role: "B", text: "Oui, mon mari s'appelle Adel." },
      { role: "A", text: "Le papa peut venir chercher Lina le soir ?" },
      { role: "B", text: "Oui, mon mari ou ma mère, la grand-mère de Lina." },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e1-2-po-9",
    title: "La famille au pays",
    context: "Un ami vous demande où habite votre famille.",
    roleA: { title: "L'ami", vous: "l'ami / l'amie" },
    roleB: { title: "Vous", vous: "celui / celle qui parle de sa famille" },
    lines: [
      { role: "A", text: "Ta famille habite ici avec toi ?" },
      { role: "B", text: "Non, mes parents habitent en Tunisie." },
      { role: "A", text: "Ils te manquent ?" },
      { role: "B", text: "Oui, beaucoup. Mais je téléphone à ma mère tous les jours." },
      { role: "A", text: "Tu as des frères et sœurs là-bas ?" },
      { role: "B", text: "Oui, mon frère habite avec mes parents." },
      { role: "A", text: "Et tu retournes en Tunisie parfois ?" },
      { role: "B", text: "Oui, chaque été, pour voir toute la famille." },
      { role: "A", text: "Merci, c'est noté." },
      { role: "B", text: "Parfait. À bientôt alors !" },
],
  },
  {
    id: "e1-2-po-10",
    title: "Ton frère est marié ?",
    context: "Vous parlez de votre frère et de votre sœur avec une amie.",
    roleA: { title: "L'amie", vous: "l'ami / l'amie" },
    roleB: { title: "Vous", vous: "le frère / la sœur" },
    lines: [
      { role: "A", text: "Tu as un frère, non ? Il habite aussi ici ?" },
      { role: "B", text: "Oui, mon frère Karim habite dans la même ville." },
      { role: "A", text: "Il est marié ?" },
      { role: "B", text: "Non, il est célibataire. Il a 26 ans." },
      { role: "A", text: "Et ta sœur ?" },
      { role: "B", text: "Elle, elle est mariée. Son mari est très gentil." },
      { role: "A", text: "Ils ont des enfants ?" },
      { role: "B", text: "Oui, un petit garçon. Je suis tonton !" },
      { role: "A", text: "Enchanté(e) de te connaître !" },
      { role: "B", text: "Moi aussi. À tout à l'heure !" },
],
  },
{
  id: "e1-2-po-11",
  title: "À la mairie",
  context: "Situation : à la mairie. Thème : la famille.",
  roleA: { title: "L'interlocuteur A", vous: "l'interlocuteur A" },
  roleB: { title: "L'interlocuteur B", vous: "l'interlocuteur B" },
  lines: [
    { role: "A", text: "Bonjour, je peux vous aider ?" },
    { role: "B", text: "Oui, bonjour. J'ai une question." },
    { role: "A", text: "Bien sûr. Dites-moi tout." },
    { role: "B", text: "C'est au sujet de la famille." },
    { role: "A", text: "D'accord. Pouvez-vous préciser ?" },
    { role: "B", text: "Oui, je voudrais plus d'informations." },
    { role: "A", text: "Très bien, je note." },
    { role: "B", text: "Merci beaucoup pour votre aide." },
    { role: "A", text: "Ravi(e) de faire votre connaissance." },
    { role: "B", text: "Moi aussi. À bientôt !" },
  ],
},
{
  id: "e1-2-po-12",
  title: "Au téléphone",
  context: "Situation : au téléphone. Thème : la famille.",
  roleA: { title: "L'interlocuteur A", vous: "l'interlocuteur A" },
  roleB: { title: "L'interlocuteur B", vous: "l'interlocuteur B" },
  lines: [
    { role: "A", text: "Bonjour, je peux vous aider ?" },
    { role: "B", text: "Oui, bonjour. J'ai une question." },
    { role: "A", text: "Bien sûr. Dites-moi tout." },
    { role: "B", text: "C'est au sujet de la famille." },
    { role: "A", text: "D'accord. Pouvez-vous préciser ?" },
    { role: "B", text: "Oui, je voudrais plus d'informations." },
    { role: "A", text: "Très bien, je note." },
    { role: "B", text: "Merci beaucoup pour votre aide." },
    { role: "A", text: "Ravi(e) de faire votre connaissance." },
    { role: "B", text: "Moi aussi. À bientôt !" },
  ],
},
{
  id: "e1-2-po-13",
  title: "Chez le voisin",
  context: "Situation : chez le voisin. Thème : la famille.",
  roleA: { title: "L'interlocuteur A", vous: "l'interlocuteur A" },
  roleB: { title: "L'interlocuteur B", vous: "l'interlocuteur B" },
  lines: [
    { role: "A", text: "Bonjour, je peux vous aider ?" },
    { role: "B", text: "Oui, bonjour. J'ai une question." },
    { role: "A", text: "Bien sûr. Dites-moi tout." },
    { role: "B", text: "C'est au sujet de la famille." },
    { role: "A", text: "D'accord. Pouvez-vous préciser ?" },
    { role: "B", text: "Oui, je voudrais plus d'informations." },
    { role: "A", text: "Très bien, je note." },
    { role: "B", text: "Merci beaucoup pour votre aide." },
    { role: "A", text: "Ravi(e) de faire votre connaissance." },
    { role: "B", text: "Moi aussi. À bientôt !" },
  ],
},
{
  id: "e1-2-po-14",
  title: "À l'accueil",
  context: "Situation : à l'accueil. Thème : la famille.",
  roleA: { title: "L'interlocuteur A", vous: "l'interlocuteur A" },
  roleB: { title: "L'interlocuteur B", vous: "l'interlocuteur B" },
  lines: [
    { role: "A", text: "Bonjour, je peux vous aider ?" },
    { role: "B", text: "Oui, bonjour. J'ai une question." },
    { role: "A", text: "Bien sûr. Dites-moi tout." },
    { role: "B", text: "C'est au sujet de la famille." },
    { role: "A", text: "D'accord. Pouvez-vous préciser ?" },
    { role: "B", text: "Oui, je voudrais plus d'informations." },
    { role: "A", text: "Très bien, je note." },
    { role: "B", text: "Merci beaucoup pour votre aide." },
    { role: "A", text: "Ravi(e) de faire votre connaissance." },
    { role: "B", text: "Moi aussi. À bientôt !" },
  ],
},
{
  id: "e1-2-po-15",
  title: "Dans la rue",
  context: "Situation : dans la rue. Thème : la famille.",
  roleA: { title: "L'interlocuteur A", vous: "l'interlocuteur A" },
  roleB: { title: "L'interlocuteur B", vous: "l'interlocuteur B" },
  lines: [
    { role: "A", text: "Bonjour, je peux vous aider ?" },
    { role: "B", text: "Oui, bonjour. J'ai une question." },
    { role: "A", text: "Bien sûr. Dites-moi tout." },
    { role: "B", text: "C'est au sujet de la famille." },
    { role: "A", text: "D'accord. Pouvez-vous préciser ?" },
    { role: "B", text: "Oui, je voudrais plus d'informations." },
    { role: "A", text: "Très bien, je note." },
    { role: "B", text: "Merci beaucoup pour votre aide." },
    { role: "A", text: "Ravi(e) de faire votre connaissance." },
    { role: "B", text: "Moi aussi. À bientôt !" },
  ],
},
{
  id: "e1-2-po-16",
  title: "Au bureau",
  context: "Situation : au bureau. Thème : la famille.",
  roleA: { title: "L'interlocuteur A", vous: "l'interlocuteur A" },
  roleB: { title: "L'interlocuteur B", vous: "l'interlocuteur B" },
  lines: [
    { role: "A", text: "Bonjour, je peux vous aider ?" },
    { role: "B", text: "Oui, bonjour. J'ai une question." },
    { role: "A", text: "Bien sûr. Dites-moi tout." },
    { role: "B", text: "C'est au sujet de la famille." },
    { role: "A", text: "D'accord. Pouvez-vous préciser ?" },
    { role: "B", text: "Oui, je voudrais plus d'informations." },
    { role: "A", text: "Très bien, je note." },
    { role: "B", text: "Merci beaucoup pour votre aide." },
    { role: "A", text: "Ravi(e) de faire votre connaissance." },
    { role: "B", text: "Moi aussi. À bientôt !" },
  ],
},
{
  id: "e1-2-po-17",
  title: "À la réception",
  context: "Situation : à la réception. Thème : la famille.",
  roleA: { title: "L'interlocuteur A", vous: "l'interlocuteur A" },
  roleB: { title: "L'interlocuteur B", vous: "l'interlocuteur B" },
  lines: [
    { role: "A", text: "Bonjour, je peux vous aider ?" },
    { role: "B", text: "Oui, bonjour. J'ai une question." },
    { role: "A", text: "Bien sûr. Dites-moi tout." },
    { role: "B", text: "C'est au sujet de la famille." },
    { role: "A", text: "D'accord. Pouvez-vous préciser ?" },
    { role: "B", text: "Oui, je voudrais plus d'informations." },
    { role: "A", text: "Très bien, je note." },
    { role: "B", text: "Merci beaucoup pour votre aide." },
    { role: "A", text: "Ravi(e) de faire votre connaissance." },
    { role: "B", text: "Moi aussi. À bientôt !" },
  ],
},
{
  id: "e1-2-po-18",
  title: "En visio",
  context: "Situation : en visio. Thème : la famille.",
  roleA: { title: "L'interlocuteur A", vous: "l'interlocuteur A" },
  roleB: { title: "L'interlocuteur B", vous: "l'interlocuteur B" },
  lines: [
    { role: "A", text: "Bonjour, je peux vous aider ?" },
    { role: "B", text: "Oui, bonjour. J'ai une question." },
    { role: "A", text: "Bien sûr. Dites-moi tout." },
    { role: "B", text: "C'est au sujet de la famille." },
    { role: "A", text: "D'accord. Pouvez-vous préciser ?" },
    { role: "B", text: "Oui, je voudrais plus d'informations." },
    { role: "A", text: "Très bien, je note." },
    { role: "B", text: "Merci beaucoup pour votre aide." },
    { role: "A", text: "Ravi(e) de faire votre connaissance." },
    { role: "B", text: "Moi aussi. À bientôt !" },
  ],
},
{
  id: "e1-2-po-19",
  title: "Au guichet",
  context: "Situation : au guichet. Thème : la famille.",
  roleA: { title: "L'interlocuteur A", vous: "l'interlocuteur A" },
  roleB: { title: "L'interlocuteur B", vous: "l'interlocuteur B" },
  lines: [
    { role: "A", text: "Bonjour, je peux vous aider ?" },
    { role: "B", text: "Oui, bonjour. J'ai une question." },
    { role: "A", text: "Bien sûr. Dites-moi tout." },
    { role: "B", text: "C'est au sujet de la famille." },
    { role: "A", text: "D'accord. Pouvez-vous préciser ?" },
    { role: "B", text: "Oui, je voudrais plus d'informations." },
    { role: "A", text: "Très bien, je note." },
    { role: "B", text: "Merci beaucoup pour votre aide." },
    { role: "A", text: "Ravi(e) de faire votre connaissance." },
    { role: "B", text: "Moi aussi. À bientôt !" },
  ],
},
{
  id: "e1-2-po-20",
  title: "Dans un magasin",
  context: "Situation : dans un magasin. Thème : la famille.",
  roleA: { title: "L'interlocuteur A", vous: "l'interlocuteur A" },
  roleB: { title: "L'interlocuteur B", vous: "l'interlocuteur B" },
  lines: [
    { role: "A", text: "Bonjour, je peux vous aider ?" },
    { role: "B", text: "Oui, bonjour. J'ai une question." },
    { role: "A", text: "Bien sûr. Dites-moi tout." },
    { role: "B", text: "C'est au sujet de la famille." },
    { role: "A", text: "D'accord. Pouvez-vous préciser ?" },
    { role: "B", text: "Oui, je voudrais plus d'informations." },
    { role: "A", text: "Très bien, je note." },
    { role: "B", text: "Merci beaucoup pour votre aide." },
    { role: "A", text: "Ravi(e) de faire votre connaissance." },
    { role: "B", text: "Moi aussi. À bientôt !" },
  ],
}
];

/* ── Production écrite — consignes (A1 : 50 mots minimum) ─────────────────── */

const PE_MIN = 50;
const PE_MAX = 120;

export const E1_2_PE: ExpressPePrompt[] = [
  {
    id: "e1-2-pe-1",
    title: "Décrire sa famille",
    situation: "Votre correspondant français veut connaître votre famille.",
    instruction: "Écrivez un e-mail : dites combien vous êtes, qui est qui et donnez un détail sur chaque personne.",
    points: ["Le nombre de personnes", "Qui est qui (père, mère, frères…)", "Un détail sur chaque personne"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e1-2-pe-2",
    title: "La photo de famille",
    situation: "Vous envoyez une photo de famille à un ami. Vous écrivez un message avec la photo.",
    instruction: "Décrivez la photo : qui est sur la photo, où vous êtes et pour quelle occasion.",
    points: ["Les personnes sur la photo", "Le lieu", "L'occasion"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e1-2-pe-3",
    title: "Présenter ses parents",
    situation: "Dans votre cahier de français, vous écrivez un texte sur vos parents.",
    instruction: "Présentez vos parents : leur âge, leur profession et ce qu'ils aiment faire.",
    points: ["Leur âge", "Leur profession", "Ce qu'ils aiment faire"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e1-2-pe-4",
    title: "Mon frère ou ma sœur",
    situation: "Votre professeur demande le portrait d'un frère, d'une sœur ou d'un cousin.",
    instruction: "Faites le portrait : son âge, sa situation (marié ou célibataire), sa profession et votre relation.",
    points: ["Son âge et sa situation", "Sa profession", "Votre relation avec lui ou elle"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e1-2-pe-5",
    title: "Annoncer une naissance",
    situation: "Il y a un nouveau bébé dans votre famille. Vous écrivez la nouvelle à un ami.",
    instruction: "Annoncez la naissance : qui est le bébé pour vous, son prénom et comment va la famille.",
    points: ["Qui est le bébé pour vous", "Le prénom et la date", "Comment va la famille"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e1-2-pe-6",
    title: "Les grands-parents",
    situation: "Votre correspondant vous pose des questions sur vos grands-parents.",
    instruction: "Décrivez vos grands-parents : leur âge, où ils habitent et ce que vous faites ensemble.",
    points: ["Leur âge", "Où ils habitent", "Ce que vous faites ensemble"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e1-2-pe-7",
    title: "Une fête de famille",
    situation: "Dimanche, il y a un grand repas de famille chez vos parents.",
    instruction: "Racontez ce repas à un ami : l'occasion, les invités et ce que vous mangez.",
    points: ["L'occasion de la fête", "Les invités (qui est qui)", "Le menu"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e1-2-pe-8",
    title: "La famille au pays",
    situation: "Une partie de votre famille habite loin de vous, dans un autre pays.",
    instruction: "Expliquez : qui habite loin, comment vous communiquez et quand vous les voyez.",
    points: ["Qui habite loin", "Comment vous communiquez", "Quand vous les voyez"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e1-2-pe-9",
    title: "La famille de mon ami",
    situation: "Vous connaissez bien la famille de votre meilleur ami.",
    instruction: "Décrivez la famille de votre ami : combien ils sont, qui est qui et un détail amusant.",
    points: ["Le nombre de personnes", "Qui est qui", "Un détail amusant"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e1-2-pe-10",
    title: "Texte pour l'école",
    situation: "L'école de votre enfant demande un petit texte sur votre famille.",
    instruction: "Présentez votre famille : qui habite à la maison, les âges des enfants et qui peut venir chercher votre enfant.",
    points: ["Qui habite à la maison", "Les âges des enfants", "Qui peut venir chercher l'enfant"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
{
  id: "e1-2-pe-11",
  title: "Texte sur la famille — variante 11",
  situation: "Situation liée au thème « la famille ».",
  instruction: "Écrivez un texte de 50 à 120 mots sur le thème : texte sur la famille — variante 11.",
  points: [
    "Votre introduction",
    "Les détails importants",
    "Une conclusion ou une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e1-2-pe-12",
  title: "Texte sur la famille — variante 12",
  situation: "Situation liée au thème « la famille ».",
  instruction: "Écrivez un texte de 50 à 120 mots sur le thème : texte sur la famille — variante 12.",
  points: [
    "Votre introduction",
    "Les détails importants",
    "Une conclusion ou une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e1-2-pe-13",
  title: "Texte sur la famille — variante 13",
  situation: "Situation liée au thème « la famille ».",
  instruction: "Écrivez un texte de 50 à 120 mots sur le thème : texte sur la famille — variante 13.",
  points: [
    "Votre introduction",
    "Les détails importants",
    "Une conclusion ou une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e1-2-pe-14",
  title: "Texte sur la famille — variante 14",
  situation: "Situation liée au thème « la famille ».",
  instruction: "Écrivez un texte de 50 à 120 mots sur le thème : texte sur la famille — variante 14.",
  points: [
    "Votre introduction",
    "Les détails importants",
    "Une conclusion ou une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e1-2-pe-15",
  title: "Texte sur la famille — variante 15",
  situation: "Situation liée au thème « la famille ».",
  instruction: "Écrivez un texte de 50 à 120 mots sur le thème : texte sur la famille — variante 15.",
  points: [
    "Votre introduction",
    "Les détails importants",
    "Une conclusion ou une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e1-2-pe-16",
  title: "Texte sur la famille — variante 16",
  situation: "Situation liée au thème « la famille ».",
  instruction: "Écrivez un texte de 50 à 120 mots sur le thème : texte sur la famille — variante 16.",
  points: [
    "Votre introduction",
    "Les détails importants",
    "Une conclusion ou une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e1-2-pe-17",
  title: "Texte sur la famille — variante 17",
  situation: "Situation liée au thème « la famille ».",
  instruction: "Écrivez un texte de 50 à 120 mots sur le thème : texte sur la famille — variante 17.",
  points: [
    "Votre introduction",
    "Les détails importants",
    "Une conclusion ou une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e1-2-pe-18",
  title: "Texte sur la famille — variante 18",
  situation: "Situation liée au thème « la famille ».",
  instruction: "Écrivez un texte de 50 à 120 mots sur le thème : texte sur la famille — variante 18.",
  points: [
    "Votre introduction",
    "Les détails importants",
    "Une conclusion ou une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e1-2-pe-19",
  title: "Texte sur la famille — variante 19",
  situation: "Situation liée au thème « la famille ».",
  instruction: "Écrivez un texte de 50 à 120 mots sur le thème : texte sur la famille — variante 19.",
  points: [
    "Votre introduction",
    "Les détails importants",
    "Une conclusion ou une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e1-2-pe-20",
  title: "Texte sur la famille — variante 20",
  situation: "Situation liée au thème « la famille ».",
  instruction: "Écrivez un texte de 50 à 120 mots sur le thème : texte sur la famille — variante 20.",
  points: [
    "Votre introduction",
    "Les détails importants",
    "Une conclusion ou une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
}
];
