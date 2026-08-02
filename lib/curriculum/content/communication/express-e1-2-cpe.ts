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

Chère amie, chers amis,
Je te présente ma famille. Nous sommes cinq à la maison.
Mon père a 45 ans. Il est mécanicien.
Ma mère a 42 ans. Elle est vendeuse.
Mon frère/mon enfant a 20 ans.
J'ai aussi Léa. Mariée.
Grands-parents — c'est un moment important pour nous.
Et toi, tu as une grande famille ?
Julia`;

const CE_POOL_1 = buildExpressPool("e1-2-1", [
  q({
    id: "ce-q1",
    textQ: "Combien de personnes à la maison ?",
    text: ["Cinq", "Trois", "Quatre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Nous sommes _________ à la maison.",
    fill: "cinq",
    vfQ: "Ils sont cinq à la maison.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quelle est la profession du père ?",
    text: ["Mécanicien", "Pilote", "Avocat"],
    textC: 0,
    img: ["mécanicien", "pilote", "avocat"],
    imgC: 0,
    fillQ: "Mon père est _________.",
    fill: "mécanicien",
    vfQ: "Le père est mécanicien.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quel âge a la mère ?",
    text: ["42 ans", "52 ans", "32 ans"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Ma mère a _________ ans.",
    fill: "42",
    vfQ: "La mère a 42 ans.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quelle est la profession de la mère ?",
    text: ["Vendeuse", "Pilote", "Mécanicien"],
    textC: 0,
    img: ["vendeur", "pilote", "mécanicien"],
    imgC: 0,
    fillQ: "Ma mère est _________.",
    fill: "vendeuse",
    vfQ: "La mère est vendeuse.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Qui est Léa ?",
    text: ["Léa", "Un voisin", "Un prof"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'ai aussi un(e) _________.",
    fill: "Léa",
    vfQ: "Léa fait partie de la famille.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel événement est mentionné ?",
    text: ["Grands-parents", "Un examen", "Un voyage seul"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ — c'est un moment important.",
    fill: "grands-parents",
    vfQ: "L'événement est grands-parents.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Quel âge a le père ?",
    text: ["45 ans", "55 ans", "35 ans"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Mon père a _________ ans.",
    fill: "45",
    vfQ: "Le père a 45 ans.",
    vfC: 0,
  }),
]);
const CE_TEXT_2 = `SMS familial

Chère amie, chers amis,
Je te présente ma famille. Nous sommes quatre à la maison.
Mon père a 50 ans. Il est chauffeur.
Ma mère a 47 ans. Elle est infirmière.

J'ai aussi grand-mère. Avec nous.
Dimanche — c'est un moment important pour nous.
Et toi, tu as une grande famille ?
Maman`;

const CE_POOL_2 = buildExpressPool("e1-2-2", [
  q({
    id: "ce-q1",
    textQ: "Combien de personnes à la maison ?",
    text: ["Quatre", "Trois", "Cinq"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Nous sommes _________ à la maison.",
    fill: "quatre",
    vfQ: "Ils sont quatre à la maison.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quelle est la profession du père ?",
    text: ["Chauffeur", "Pilote", "Avocat"],
    textC: 0,
    img: ["chauffeur", "pilote", "avocat"],
    imgC: 0,
    fillQ: "Mon père est _________.",
    fill: "chauffeur",
    vfQ: "Le père est chauffeur.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quel âge a la mère ?",
    text: ["47 ans", "57 ans", "37 ans"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Ma mère a _________ ans.",
    fill: "47",
    vfQ: "La mère a 47 ans.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quelle est la profession de la mère ?",
    text: ["Infirmière", "Pilote", "Mécanicien"],
    textC: 0,
    img: ["infirmier", "pilote", "mécanicien"],
    imgC: 0,
    fillQ: "Ma mère est _________.",
    fill: "infirmière",
    vfQ: "La mère est infirmière.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Qui est grand-mère ?",
    text: ["Grand-mère", "Un voisin", "Un prof"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'ai aussi un(e) _________.",
    fill: "grand-mère",
    vfQ: "Grand-mère fait partie de la famille.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel événement est mentionné ?",
    text: ["Dimanche", "Un examen", "Un voyage seul"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ — c'est un moment important.",
    fill: "dimanche",
    vfQ: "L'événement est dimanche.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Quel âge a le père ?",
    text: ["50 ans", "60 ans", "40 ans"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Mon père a _________ ans.",
    fill: "50",
    vfQ: "Le père a 50 ans.",
    vfC: 0,
  }),
]);
const CE_TEXT_3 = `Carte postale familiale

Chère amie, chers amis,
Je te présente ma famille. Nous sommes six à la maison.
Mon père a 48 ans. Il est boulanger.
Ma mère a 44 ans. Elle est coiffeuse.
Mon frère/mon enfant a 16 ans.
J'ai aussi oncle. En espagne.
Été — c'est un moment important pour nous.
Et toi, tu as une grande famille ?
Carlos`;

const CE_POOL_3 = buildExpressPool("e1-2-3", [
  q({
    id: "ce-q1",
    textQ: "Combien de personnes à la maison ?",
    text: ["Six", "Trois", "Quatre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Nous sommes _________ à la maison.",
    fill: "six",
    vfQ: "Ils sont six à la maison.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quelle est la profession du père ?",
    text: ["Boulanger", "Pilote", "Avocat"],
    textC: 0,
    img: ["boulanger", "pilote", "avocat"],
    imgC: 0,
    fillQ: "Mon père est _________.",
    fill: "boulanger",
    vfQ: "Le père est boulanger.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quel âge a la mère ?",
    text: ["44 ans", "54 ans", "34 ans"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Ma mère a _________ ans.",
    fill: "44",
    vfQ: "La mère a 44 ans.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quelle est la profession de la mère ?",
    text: ["Coiffeuse", "Pilote", "Mécanicien"],
    textC: 0,
    img: ["coiffeuse", "pilote", "mécanicien"],
    imgC: 0,
    fillQ: "Ma mère est _________.",
    fill: "coiffeuse",
    vfQ: "La mère est coiffeuse.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Qui est oncle ?",
    text: ["Oncle", "Un voisin", "Un prof"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'ai aussi un(e) _________.",
    fill: "oncle",
    vfQ: "Oncle fait partie de la famille.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel événement est mentionné ?",
    text: ["Été", "Un examen", "Un voyage seul"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ — c'est un moment important.",
    fill: "été",
    vfQ: "L'événement est été.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Quel âge a le père ?",
    text: ["48 ans", "58 ans", "38 ans"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Mon père a _________ ans.",
    fill: "48",
    vfQ: "Le père a 48 ans.",
    vfC: 0,
  }),
]);
const CE_TEXT_4 = `Message WhatsApp

Chère amie, chers amis,
Je te présente ma famille. Nous sommes sept à la maison.
Mon père a 55 ans. Il est électricien.
Ma mère a 50 ans. Elle est secrétaire.
Mon frère/mon enfant a 19 ans.
J'ai aussi cousins. En vacances.
Samedi — c'est un moment important pour nous.
Et toi, tu as une grande famille ?
Fatima`;

const CE_POOL_4 = buildExpressPool("e1-2-4", [
  q({
    id: "ce-q1",
    textQ: "Combien de personnes à la maison ?",
    text: ["Sept", "Trois", "Quatre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Nous sommes _________ à la maison.",
    fill: "sept",
    vfQ: "Ils sont sept à la maison.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quelle est la profession du père ?",
    text: ["Électricien", "Pilote", "Avocat"],
    textC: 0,
    img: ["électricien", "pilote", "avocat"],
    imgC: 0,
    fillQ: "Mon père est _________.",
    fill: "électricien",
    vfQ: "Le père est électricien.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quel âge a la mère ?",
    text: ["50 ans", "60 ans", "40 ans"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Ma mère a _________ ans.",
    fill: "50",
    vfQ: "La mère a 50 ans.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quelle est la profession de la mère ?",
    text: ["Secrétaire", "Pilote", "Mécanicien"],
    textC: 0,
    img: ["secrétaire", "pilote", "mécanicien"],
    imgC: 0,
    fillQ: "Ma mère est _________.",
    fill: "secrétaire",
    vfQ: "La mère est secrétaire.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Qui est cousins ?",
    text: ["Cousins", "Un voisin", "Un prof"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'ai aussi un(e) _________.",
    fill: "cousins",
    vfQ: "Cousins fait partie de la famille.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel événement est mentionné ?",
    text: ["Samedi", "Un examen", "Un voyage seul"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ — c'est un moment important.",
    fill: "samedi",
    vfQ: "L'événement est samedi.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Quel âge a le père ?",
    text: ["55 ans", "65 ans", "45 ans"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Mon père a _________ ans.",
    fill: "55",
    vfQ: "Le père a 55 ans.",
    vfC: 0,
  }),
]);
const CE_TEXT_5 = `Note sur le frigo

Chère amie, chers amis,
Je te présente ma famille. Nous sommes trois à la maison.
Mon père a 40 ans. Il est plombier.
Ma mère a 38 ans. Elle est pharmacienne.

J'ai aussi tante. À genève.
Ce soir — c'est un moment important pour nous.
Et toi, tu as une grande famille ?
Papa`;

const CE_POOL_5 = buildExpressPool("e1-2-5", [
  q({
    id: "ce-q1",
    textQ: "Combien de personnes à la maison ?",
    text: ["Trois", "Quatre", "Cinq"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Nous sommes _________ à la maison.",
    fill: "trois",
    vfQ: "Ils sont trois à la maison.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quelle est la profession du père ?",
    text: ["Plombier", "Pilote", "Avocat"],
    textC: 0,
    img: ["plombier", "pilote", "avocat"],
    imgC: 0,
    fillQ: "Mon père est _________.",
    fill: "plombier",
    vfQ: "Le père est plombier.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quel âge a la mère ?",
    text: ["38 ans", "48 ans", "28 ans"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Ma mère a _________ ans.",
    fill: "38",
    vfQ: "La mère a 38 ans.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quelle est la profession de la mère ?",
    text: ["Pharmacienne", "Pilote", "Mécanicien"],
    textC: 0,
    img: ["pharmacien", "pilote", "mécanicien"],
    imgC: 0,
    fillQ: "Ma mère est _________.",
    fill: "pharmacienne",
    vfQ: "La mère est pharmacienne.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Qui est tante ?",
    text: ["Tante", "Un voisin", "Un prof"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'ai aussi un(e) _________.",
    fill: "tante",
    vfQ: "Tante fait partie de la famille.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel événement est mentionné ?",
    text: ["Ce soir", "Un examen", "Un voyage seul"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ — c'est un moment important.",
    fill: "ce",
    vfQ: "L'événement est ce soir.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Quel âge a le père ?",
    text: ["40 ans", "50 ans", "30 ans"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Mon père a _________ ans.",
    fill: "40",
    vfQ: "Le père a 40 ans.",
    vfC: 0,
  }),
]);
const CE_TEXT_6 = `Journal intime (extrait)

Chère amie, chers amis,
Je te présente ma famille. Nous sommes cinq à la maison.
Mon père a 43 ans. Il est professeur.
Ma mère a 41 ans. Elle est vendeuse.
Mon frère/mon enfant a 22 ans.
J'ai aussi bébé. Né en mars.
Heureux — c'est un moment important pour nous.
Et toi, tu as une grande famille ?
Lina`;

const CE_POOL_6 = buildExpressPool("e1-2-6", [
  q({
    id: "ce-q1",
    textQ: "Combien de personnes à la maison ?",
    text: ["Cinq", "Trois", "Quatre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Nous sommes _________ à la maison.",
    fill: "cinq",
    vfQ: "Ils sont cinq à la maison.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quelle est la profession du père ?",
    text: ["Professeur", "Pilote", "Avocat"],
    textC: 0,
    img: ["professeur", "pilote", "avocat"],
    imgC: 0,
    fillQ: "Mon père est _________.",
    fill: "professeur",
    vfQ: "Le père est professeur.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quel âge a la mère ?",
    text: ["41 ans", "51 ans", "31 ans"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Ma mère a _________ ans.",
    fill: "41",
    vfQ: "La mère a 41 ans.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quelle est la profession de la mère ?",
    text: ["Vendeuse", "Pilote", "Mécanicien"],
    textC: 0,
    img: ["vendeur", "pilote", "mécanicien"],
    imgC: 0,
    fillQ: "Ma mère est _________.",
    fill: "vendeuse",
    vfQ: "La mère est vendeuse.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Qui est bébé ?",
    text: ["Bébé", "Un voisin", "Un prof"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'ai aussi un(e) _________.",
    fill: "bébé",
    vfQ: "Bébé fait partie de la famille.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel événement est mentionné ?",
    text: ["Heureux", "Un examen", "Un voyage seul"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ — c'est un moment important.",
    fill: "heureux",
    vfQ: "L'événement est heureux.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Quel âge a le père ?",
    text: ["43 ans", "53 ans", "33 ans"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Mon père a _________ ans.",
    fill: "43",
    vfQ: "Le père a 43 ans.",
    vfC: 0,
  }),
]);
const CE_TEXT_7 = `Forum « Ma famille »

Chère amie, chers amis,
Je te présente ma famille. Nous sommes quatre à la maison.
Mon père a 46 ans. Il est cuisinier.
Ma mère a 43 ans. Elle est serveuse.
Mon frère/mon enfant a 13 ans.
J'ai aussi nièce. En italie.
Noël — c'est un moment important pour nous.
Et toi, tu as une grande famille ?
Roberto`;

const CE_POOL_7 = buildExpressPool("e1-2-7", [
  q({
    id: "ce-q1",
    textQ: "Combien de personnes à la maison ?",
    text: ["Quatre", "Trois", "Cinq"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Nous sommes _________ à la maison.",
    fill: "quatre",
    vfQ: "Ils sont quatre à la maison.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quelle est la profession du père ?",
    text: ["Cuisinier", "Pilote", "Avocat"],
    textC: 0,
    img: ["cuisinier", "pilote", "avocat"],
    imgC: 0,
    fillQ: "Mon père est _________.",
    fill: "cuisinier",
    vfQ: "Le père est cuisinier.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quel âge a la mère ?",
    text: ["43 ans", "53 ans", "33 ans"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Ma mère a _________ ans.",
    fill: "43",
    vfQ: "La mère a 43 ans.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quelle est la profession de la mère ?",
    text: ["Serveuse", "Pilote", "Mécanicien"],
    textC: 0,
    img: ["serveur", "pilote", "mécanicien"],
    imgC: 0,
    fillQ: "Ma mère est _________.",
    fill: "serveuse",
    vfQ: "La mère est serveuse.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Qui est nièce ?",
    text: ["Nièce", "Un voisin", "Un prof"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'ai aussi un(e) _________.",
    fill: "nièce",
    vfQ: "Nièce fait partie de la famille.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel événement est mentionné ?",
    text: ["Noël", "Un examen", "Un voyage seul"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ — c'est un moment important.",
    fill: "Noël",
    vfQ: "L'événement est Noël.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Quel âge a le père ?",
    text: ["46 ans", "56 ans", "36 ans"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Mon père a _________ ans.",
    fill: "46",
    vfQ: "Le père a 46 ans.",
    vfC: 0,
  }),
]);
const CE_TEXT_8 = `Fiche scolaire — famille

Chère amie, chers amis,
Je te présente ma famille. Nous sommes six à la maison.
Mon père a 52 ans. Il est médecin.
Ma mère a 49 ans. Elle est infirmière.
Mon frère/mon enfant a 8 ans.
J'ai aussi jumeaux. De 3 ans.
École — c'est un moment important pour nous.
Et toi, tu as une grande famille ?
Amadou`;

const CE_POOL_8 = buildExpressPool("e1-2-8", [
  q({
    id: "ce-q1",
    textQ: "Combien de personnes à la maison ?",
    text: ["Six", "Trois", "Quatre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Nous sommes _________ à la maison.",
    fill: "six",
    vfQ: "Ils sont six à la maison.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quelle est la profession du père ?",
    text: ["Médecin", "Pilote", "Avocat"],
    textC: 0,
    img: ["médecin", "pilote", "avocat"],
    imgC: 0,
    fillQ: "Mon père est _________.",
    fill: "médecin",
    vfQ: "Le père est médecin.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quel âge a la mère ?",
    text: ["49 ans", "59 ans", "39 ans"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Ma mère a _________ ans.",
    fill: "49",
    vfQ: "La mère a 49 ans.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quelle est la profession de la mère ?",
    text: ["Infirmière", "Pilote", "Mécanicien"],
    textC: 0,
    img: ["infirmier", "pilote", "mécanicien"],
    imgC: 0,
    fillQ: "Ma mère est _________.",
    fill: "infirmière",
    vfQ: "La mère est infirmière.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Qui est jumeaux ?",
    text: ["Jumeaux", "Un voisin", "Un prof"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'ai aussi un(e) _________.",
    fill: "jumeaux",
    vfQ: "Jumeaux fait partie de la famille.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel événement est mentionné ?",
    text: ["École", "Un examen", "Un voyage seul"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ — c'est un moment important.",
    fill: "école",
    vfQ: "L'événement est école.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Quel âge a le père ?",
    text: ["52 ans", "62 ans", "42 ans"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Mon père a _________ ans.",
    fill: "52",
    vfQ: "Le père a 52 ans.",
    vfC: 0,
  }),
]);
const CE_TEXT_9 = `Lettre à un ami

Chère amie, chers amis,
Je te présente ma famille. Nous sommes cinq à la maison.
Mon père a 44 ans. Il est journaliste.
Ma mère a 42 ans. Elle est architecte.
Mon frère/mon enfant a 17 ans.
J'ai aussi grand-père. 80 ans.
Photo — c'est un moment important pour nous.
Et toi, tu as une grande famille ?
Elena`;

const CE_POOL_9 = buildExpressPool("e1-2-9", [
  q({
    id: "ce-q1",
    textQ: "Combien de personnes à la maison ?",
    text: ["Cinq", "Trois", "Quatre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Nous sommes _________ à la maison.",
    fill: "cinq",
    vfQ: "Ils sont cinq à la maison.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quelle est la profession du père ?",
    text: ["Journaliste", "Pilote", "Avocat"],
    textC: 0,
    img: ["journaliste", "pilote", "avocat"],
    imgC: 0,
    fillQ: "Mon père est _________.",
    fill: "journaliste",
    vfQ: "Le père est journaliste.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quel âge a la mère ?",
    text: ["42 ans", "52 ans", "32 ans"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Ma mère a _________ ans.",
    fill: "42",
    vfQ: "La mère a 42 ans.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quelle est la profession de la mère ?",
    text: ["Architecte", "Pilote", "Mécanicien"],
    textC: 0,
    img: ["architecte", "pilote", "mécanicien"],
    imgC: 0,
    fillQ: "Ma mère est _________.",
    fill: "architecte",
    vfQ: "La mère est architecte.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Qui est grand-père ?",
    text: ["Grand-père", "Un voisin", "Un prof"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'ai aussi un(e) _________.",
    fill: "grand-père",
    vfQ: "Grand-père fait partie de la famille.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel événement est mentionné ?",
    text: ["Photo", "Un examen", "Un voyage seul"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ — c'est un moment important.",
    fill: "photo",
    vfQ: "L'événement est photo.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Quel âge a le père ?",
    text: ["44 ans", "54 ans", "34 ans"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Mon père a _________ ans.",
    fill: "44",
    vfQ: "Le père a 44 ans.",
    vfC: 0,
  }),
]);
const CE_TEXT_10 = `Annonce famille recomposée

Chère amie, chers amis,
Je te présente ma famille. Nous sommes quatre à la maison.
Mon père a 39 ans. Il est chauffeur.
Ma mère a 37 ans. Elle est coiffeuse.
Mon frère/mon enfant a 9 ans.
J'ai aussi beau-fils. 12 ans.
Week-end — c'est un moment important pour nous.
Et toi, tu as une grande famille ?
Stéphane`;

const CE_POOL_10 = buildExpressPool("e1-2-10", [
  q({
    id: "ce-q1",
    textQ: "Combien de personnes à la maison ?",
    text: ["Quatre", "Trois", "Cinq"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Nous sommes _________ à la maison.",
    fill: "quatre",
    vfQ: "Ils sont quatre à la maison.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quelle est la profession du père ?",
    text: ["Chauffeur", "Pilote", "Avocat"],
    textC: 0,
    img: ["chauffeur", "pilote", "avocat"],
    imgC: 0,
    fillQ: "Mon père est _________.",
    fill: "chauffeur",
    vfQ: "Le père est chauffeur.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quel âge a la mère ?",
    text: ["37 ans", "47 ans", "27 ans"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Ma mère a _________ ans.",
    fill: "37",
    vfQ: "La mère a 37 ans.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quelle est la profession de la mère ?",
    text: ["Coiffeuse", "Pilote", "Mécanicien"],
    textC: 0,
    img: ["coiffeuse", "pilote", "mécanicien"],
    imgC: 0,
    fillQ: "Ma mère est _________.",
    fill: "coiffeuse",
    vfQ: "La mère est coiffeuse.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Qui est beau-fils ?",
    text: ["Beau-fils", "Un voisin", "Un prof"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'ai aussi un(e) _________.",
    fill: "beau-fils",
    vfQ: "Beau-fils fait partie de la famille.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel événement est mentionné ?",
    text: ["Week-end", "Un examen", "Un voyage seul"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ — c'est un moment important.",
    fill: "week-end",
    vfQ: "L'événement est week-end.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Quel âge a le père ?",
    text: ["39 ans", "49 ans", "29 ans"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Mon père a _________ ans.",
    fill: "39",
    vfQ: "Le père a 39 ans.",
    vfC: 0,
  }),
]);
const CE_TEXT_11 = `Message groupe famille

Chère amie, chers amis,
Je te présente ma famille. Nous sommes huit à la maison.
Mon père a 56 ans. Il est boucher.
Ma mère a 53 ans. Elle est vendeuse.
Mon frère/mon enfant a 21 ans.
J'ai aussi arrière-grand-mère. 90 ans.
Fête — c'est un moment important pour nous.
Et toi, tu as une grande famille ?
Aïcha`;

const CE_POOL_11 = buildExpressPool("e1-2-11", [
  q({
    id: "ce-q1",
    textQ: "Combien de personnes à la maison ?",
    text: ["Huit", "Trois", "Quatre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Nous sommes _________ à la maison.",
    fill: "huit",
    vfQ: "Ils sont huit à la maison.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quelle est la profession du père ?",
    text: ["Boucher", "Pilote", "Avocat"],
    textC: 0,
    img: ["boucher", "pilote", "avocat"],
    imgC: 0,
    fillQ: "Mon père est _________.",
    fill: "boucher",
    vfQ: "Le père est boucher.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quel âge a la mère ?",
    text: ["53 ans", "63 ans", "43 ans"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Ma mère a _________ ans.",
    fill: "53",
    vfQ: "La mère a 53 ans.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quelle est la profession de la mère ?",
    text: ["Vendeuse", "Pilote", "Mécanicien"],
    textC: 0,
    img: ["vendeur", "pilote", "mécanicien"],
    imgC: 0,
    fillQ: "Ma mère est _________.",
    fill: "vendeuse",
    vfQ: "La mère est vendeuse.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Qui est arrière-grand-mère ?",
    text: ["Arrière-grand-mère", "Un voisin", "Un prof"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'ai aussi un(e) _________.",
    fill: "arrière-grand-mère",
    vfQ: "Arrière-grand-mère fait partie de la famille.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel événement est mentionné ?",
    text: ["Fête", "Un examen", "Un voyage seul"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ — c'est un moment important.",
    fill: "fête",
    vfQ: "L'événement est fête.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Quel âge a le père ?",
    text: ["56 ans", "66 ans", "46 ans"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Mon père a _________ ans.",
    fill: "56",
    vfQ: "Le père a 56 ans.",
    vfC: 0,
  }),
]);
const CE_TEXT_12 = `Carte de vœux

Chère amie, chers amis,
Je te présente ma famille. Nous sommes trois à la maison.
Mon père a 70 ans. Il est retraité.
Ma mère a 68 ans. Elle est retraitée.

J'ai aussi petite-fille. 5 ans.
Anniversaire — c'est un moment important pour nous.
Et toi, tu as une grande famille ?
Henri`;

const CE_POOL_12 = buildExpressPool("e1-2-12", [
  q({
    id: "ce-q1",
    textQ: "Combien de personnes à la maison ?",
    text: ["Trois", "Quatre", "Cinq"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Nous sommes _________ à la maison.",
    fill: "trois",
    vfQ: "Ils sont trois à la maison.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quelle est la profession du père ?",
    text: ["Retraité", "Pilote", "Avocat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Mon père est _________.",
    fill: "retraité",
    vfQ: "Le père est retraité.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quel âge a la mère ?",
    text: ["68 ans", "78 ans", "58 ans"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Ma mère a _________ ans.",
    fill: "68",
    vfQ: "La mère a 68 ans.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quelle est la profession de la mère ?",
    text: ["Retraitée", "Pilote", "Mécanicien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Ma mère est _________.",
    fill: "retraitée",
    vfQ: "La mère est retraitée.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Qui est petite-fille ?",
    text: ["Petite-fille", "Un voisin", "Un prof"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'ai aussi un(e) _________.",
    fill: "petite-fille",
    vfQ: "Petite-fille fait partie de la famille.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel événement est mentionné ?",
    text: ["Anniversaire", "Un examen", "Un voyage seul"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ — c'est un moment important.",
    fill: "anniversaire",
    vfQ: "L'événement est anniversaire.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Quel âge a le père ?",
    text: ["70 ans", "80 ans", "60 ans"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Mon père a _________ ans.",
    fill: "70",
    vfQ: "Le père a 70 ans.",
    vfC: 0,
  }),
]);
const CE_TEXT_13 = `Profil réseau social

Chère amie, chers amis,
Je te présente ma famille. Nous sommes cinq à la maison.
Mon père a 41 ans. Il est vétérinaire.
Ma mère a 39 ans. Elle est professeure.
Mon frère/mon enfant a 1 ans.
J'ai aussi chien. Max.
Animaux — c'est un moment important pour nous.
Et toi, tu as une grande famille ?
Mia`;

const CE_POOL_13 = buildExpressPool("e1-2-13", [
  q({
    id: "ce-q1",
    textQ: "Combien de personnes à la maison ?",
    text: ["Cinq", "Trois", "Quatre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Nous sommes _________ à la maison.",
    fill: "cinq",
    vfQ: "Ils sont cinq à la maison.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quelle est la profession du père ?",
    text: ["Vétérinaire", "Pilote", "Avocat"],
    textC: 0,
    img: ["vétérinaire", "pilote", "avocat"],
    imgC: 0,
    fillQ: "Mon père est _________.",
    fill: "vétérinaire",
    vfQ: "Le père est vétérinaire.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quel âge a la mère ?",
    text: ["39 ans", "49 ans", "29 ans"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Ma mère a _________ ans.",
    fill: "39",
    vfQ: "La mère a 39 ans.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quelle est la profession de la mère ?",
    text: ["Professeure", "Pilote", "Mécanicien"],
    textC: 0,
    img: ["professeur", "pilote", "mécanicien"],
    imgC: 0,
    fillQ: "Ma mère est _________.",
    fill: "professeure",
    vfQ: "La mère est professeure.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Qui est chien ?",
    text: ["Chien", "Un voisin", "Un prof"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'ai aussi un(e) _________.",
    fill: "chien",
    vfQ: "Chien fait partie de la famille.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel événement est mentionné ?",
    text: ["Animaux", "Un examen", "Un voyage seul"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ — c'est un moment important.",
    fill: "animaux",
    vfQ: "L'événement est animaux.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Quel âge a le père ?",
    text: ["41 ans", "51 ans", "31 ans"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Mon père a _________ ans.",
    fill: "41",
    vfQ: "Le père a 41 ans.",
    vfC: 0,
  }),
]);
const CE_TEXT_14 = `Description photo

Chère amie, chers amis,
Je te présente ma famille. Nous sommes quatre à la maison.
Mon père a 47 ans. Il est peintre.
Ma mère a 45 ans. Elle est libraire.
Mon frère/mon enfant a 15 ans.
J'ai aussi cousin. En allemagne.
Mariage — c'est un moment important pour nous.
Et toi, tu as une grande famille ?
Jonas`;

const CE_POOL_14 = buildExpressPool("e1-2-14", [
  q({
    id: "ce-q1",
    textQ: "Combien de personnes à la maison ?",
    text: ["Quatre", "Trois", "Cinq"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Nous sommes _________ à la maison.",
    fill: "quatre",
    vfQ: "Ils sont quatre à la maison.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quelle est la profession du père ?",
    text: ["Peintre", "Pilote", "Avocat"],
    textC: 0,
    img: ["peintre", "pilote", "avocat"],
    imgC: 0,
    fillQ: "Mon père est _________.",
    fill: "peintre",
    vfQ: "Le père est peintre.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quel âge a la mère ?",
    text: ["45 ans", "55 ans", "35 ans"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Ma mère a _________ ans.",
    fill: "45",
    vfQ: "La mère a 45 ans.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quelle est la profession de la mère ?",
    text: ["Libraire", "Pilote", "Mécanicien"],
    textC: 0,
    img: ["libraire", "pilote", "mécanicien"],
    imgC: 0,
    fillQ: "Ma mère est _________.",
    fill: "libraire",
    vfQ: "La mère est libraire.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Qui est cousin ?",
    text: ["Cousin", "Un voisin", "Un prof"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'ai aussi un(e) _________.",
    fill: "cousin",
    vfQ: "Cousin fait partie de la famille.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel événement est mentionné ?",
    text: ["Mariage", "Un examen", "Un voyage seul"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ — c'est un moment important.",
    fill: "mariage",
    vfQ: "L'événement est mariage.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Quel âge a le père ?",
    text: ["47 ans", "57 ans", "37 ans"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Mon père a _________ ans.",
    fill: "47",
    vfQ: "Le père a 47 ans.",
    vfC: 0,
  }),
]);
const CE_TEXT_15 = `Message au prof

Chère amie, chers amis,
Je te présente ma famille. Nous sommes six à la maison.
Mon père a 51 ans. Il est facteur.
Ma mère a 48 ans. Elle est coiffeuse.
Mon frère/mon enfant a 7 ans.
J'ai aussi frère. Jumeau.
Projet — c'est un moment important pour nous.
Et toi, tu as une grande famille ?
Sofia`;

const CE_POOL_15 = buildExpressPool("e1-2-15", [
  q({
    id: "ce-q1",
    textQ: "Combien de personnes à la maison ?",
    text: ["Six", "Trois", "Quatre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Nous sommes _________ à la maison.",
    fill: "six",
    vfQ: "Ils sont six à la maison.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quelle est la profession du père ?",
    text: ["Facteur", "Pilote", "Avocat"],
    textC: 0,
    img: ["facteur", "pilote", "avocat"],
    imgC: 0,
    fillQ: "Mon père est _________.",
    fill: "facteur",
    vfQ: "Le père est facteur.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quel âge a la mère ?",
    text: ["48 ans", "58 ans", "38 ans"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Ma mère a _________ ans.",
    fill: "48",
    vfQ: "La mère a 48 ans.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quelle est la profession de la mère ?",
    text: ["Coiffeuse", "Pilote", "Mécanicien"],
    textC: 0,
    img: ["coiffeuse", "pilote", "mécanicien"],
    imgC: 0,
    fillQ: "Ma mère est _________.",
    fill: "coiffeuse",
    vfQ: "La mère est coiffeuse.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Qui est frère ?",
    text: ["Frère", "Un voisin", "Un prof"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'ai aussi un(e) _________.",
    fill: "frère",
    vfQ: "Frère fait partie de la famille.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel événement est mentionné ?",
    text: ["Projet", "Un examen", "Un voyage seul"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ — c'est un moment important.",
    fill: "projet",
    vfQ: "L'événement est projet.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Quel âge a le père ?",
    text: ["51 ans", "61 ans", "41 ans"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Mon père a _________ ans.",
    fill: "51",
    vfQ: "Le père a 51 ans.",
    vfC: 0,
  }),
]);
const CE_TEXT_16 = `Petite annonce — baby-sitter

Chère amie, chers amis,
Je te présente ma famille. Nous sommes cinq à la maison.
Mon père a 42 ans. Il est infirmier.
Ma mère a 40 ans. Elle est secrétaire.
Mon frère/mon enfant a 6 ans.
J'ai aussi jumeaux. 2 ans.
Mercredi — c'est un moment important pour nous.
Et toi, tu as une grande famille ?
Nadia`;

const CE_POOL_16 = buildExpressPool("e1-2-16", [
  q({
    id: "ce-q1",
    textQ: "Combien de personnes à la maison ?",
    text: ["Cinq", "Trois", "Quatre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Nous sommes _________ à la maison.",
    fill: "cinq",
    vfQ: "Ils sont cinq à la maison.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quelle est la profession du père ?",
    text: ["Infirmier", "Pilote", "Avocat"],
    textC: 0,
    img: ["infirmier", "pilote", "avocat"],
    imgC: 0,
    fillQ: "Mon père est _________.",
    fill: "infirmier",
    vfQ: "Le père est infirmier.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quel âge a la mère ?",
    text: ["40 ans", "50 ans", "30 ans"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Ma mère a _________ ans.",
    fill: "40",
    vfQ: "La mère a 40 ans.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quelle est la profession de la mère ?",
    text: ["Secrétaire", "Pilote", "Mécanicien"],
    textC: 0,
    img: ["secrétaire", "pilote", "mécanicien"],
    imgC: 0,
    fillQ: "Ma mère est _________.",
    fill: "secrétaire",
    vfQ: "La mère est secrétaire.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Qui est jumeaux ?",
    text: ["Jumeaux", "Un voisin", "Un prof"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'ai aussi un(e) _________.",
    fill: "jumeaux",
    vfQ: "Jumeaux fait partie de la famille.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel événement est mentionné ?",
    text: ["Mercredi", "Un examen", "Un voyage seul"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ — c'est un moment important.",
    fill: "mercredi",
    vfQ: "L'événement est mercredi.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Quel âge a le père ?",
    text: ["42 ans", "52 ans", "32 ans"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Mon père a _________ ans.",
    fill: "42",
    vfQ: "Le père a 42 ans.",
    vfC: 0,
  }),
]);
const CE_TEXT_17 = `Invitation famille élargie

Chère amie, chers amis,
Je te présente ma famille. Nous sommes dix à la maison.
Mon père a 60 ans. Il est agriculteur.
Ma mère a 58 ans. Elle est fermière.
Mon frère/mon enfant a 25 ans.
J'ai aussi oncle. En grèce.
Pâques — c'est un moment important pour nous.
Et toi, tu as une grande famille ?
Georges`;

const CE_POOL_17 = buildExpressPool("e1-2-17", [
  q({
    id: "ce-q1",
    textQ: "Combien de personnes à la maison ?",
    text: ["Dix", "Trois", "Quatre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Nous sommes _________ à la maison.",
    fill: "dix",
    vfQ: "Ils sont dix à la maison.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quelle est la profession du père ?",
    text: ["Agriculteur", "Pilote", "Avocat"],
    textC: 0,
    img: ["agriculteur", "pilote", "avocat"],
    imgC: 0,
    fillQ: "Mon père est _________.",
    fill: "agriculteur",
    vfQ: "Le père est agriculteur.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quel âge a la mère ?",
    text: ["58 ans", "68 ans", "48 ans"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Ma mère a _________ ans.",
    fill: "58",
    vfQ: "La mère a 58 ans.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quelle est la profession de la mère ?",
    text: ["Fermière", "Pilote", "Mécanicien"],
    textC: 0,
    img: ["fermier", "pilote", "mécanicien"],
    imgC: 0,
    fillQ: "Ma mère est _________.",
    fill: "fermière",
    vfQ: "La mère est fermière.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Qui est oncle ?",
    text: ["Oncle", "Un voisin", "Un prof"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'ai aussi un(e) _________.",
    fill: "oncle",
    vfQ: "Oncle fait partie de la famille.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel événement est mentionné ?",
    text: ["Pâques", "Un examen", "Un voyage seul"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ — c'est un moment important.",
    fill: "Pâques",
    vfQ: "L'événement est Pâques.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Quel âge a le père ?",
    text: ["60 ans", "70 ans", "50 ans"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Mon père a _________ ans.",
    fill: "60",
    vfQ: "Le père a 60 ans.",
    vfC: 0,
  }),
]);
const CE_TEXT_18 = `Réponse sondage

Chère amie, chers amis,
Je te présente ma famille. Nous sommes quatre à la maison.
Mon père a 49 ans. Il est pharmacien.
Ma mère a 46 ans. Elle est dentiste.
Mon frère/mon enfant a 14 ans.
J'ai aussi sœur. À lausanne.
Enquête — c'est un moment important pour nous.
Et toi, tu as une grande famille ?
Yasmin`;

const CE_POOL_18 = buildExpressPool("e1-2-18", [
  q({
    id: "ce-q1",
    textQ: "Combien de personnes à la maison ?",
    text: ["Quatre", "Trois", "Cinq"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Nous sommes _________ à la maison.",
    fill: "quatre",
    vfQ: "Ils sont quatre à la maison.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quelle est la profession du père ?",
    text: ["Pharmacien", "Pilote", "Avocat"],
    textC: 0,
    img: ["pharmacien", "pilote", "avocat"],
    imgC: 0,
    fillQ: "Mon père est _________.",
    fill: "pharmacien",
    vfQ: "Le père est pharmacien.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quel âge a la mère ?",
    text: ["46 ans", "56 ans", "36 ans"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Ma mère a _________ ans.",
    fill: "46",
    vfQ: "La mère a 46 ans.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quelle est la profession de la mère ?",
    text: ["Dentiste", "Pilote", "Mécanicien"],
    textC: 0,
    img: ["dentiste", "pilote", "mécanicien"],
    imgC: 0,
    fillQ: "Ma mère est _________.",
    fill: "dentiste",
    vfQ: "La mère est dentiste.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Qui est sœur ?",
    text: ["Sœur", "Un voisin", "Un prof"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'ai aussi un(e) _________.",
    fill: "sœur",
    vfQ: "Sœur fait partie de la famille.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel événement est mentionné ?",
    text: ["Enquête", "Un examen", "Un voyage seul"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ — c'est un moment important.",
    fill: "enquête",
    vfQ: "L'événement est enquête.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Quel âge a le père ?",
    text: ["49 ans", "59 ans", "39 ans"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Mon père a _________ ans.",
    fill: "49",
    vfQ: "Le père a 49 ans.",
    vfC: 0,
  }),
]);
const CE_TEXT_19 = `Blog personnel

Chère amie, chers amis,
Je te présente ma famille. Nous sommes cinq à la maison.
Mon père a 45 ans. Il est menuisier.
Ma mère a 43 ans. Elle est vendeuse.
Mon frère/mon enfant a 18 ans.
J'ai aussi grand-mère. En maison de retraite.
Visite — c'est un moment important pour nous.
Et toi, tu as une grande famille ?
Théo`;

const CE_POOL_19 = buildExpressPool("e1-2-19", [
  q({
    id: "ce-q1",
    textQ: "Combien de personnes à la maison ?",
    text: ["Cinq", "Trois", "Quatre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Nous sommes _________ à la maison.",
    fill: "cinq",
    vfQ: "Ils sont cinq à la maison.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quelle est la profession du père ?",
    text: ["Menuisier", "Pilote", "Avocat"],
    textC: 0,
    img: ["menuisier", "pilote", "avocat"],
    imgC: 0,
    fillQ: "Mon père est _________.",
    fill: "menuisier",
    vfQ: "Le père est menuisier.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quel âge a la mère ?",
    text: ["43 ans", "53 ans", "33 ans"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Ma mère a _________ ans.",
    fill: "43",
    vfQ: "La mère a 43 ans.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quelle est la profession de la mère ?",
    text: ["Vendeuse", "Pilote", "Mécanicien"],
    textC: 0,
    img: ["vendeur", "pilote", "mécanicien"],
    imgC: 0,
    fillQ: "Ma mère est _________.",
    fill: "vendeuse",
    vfQ: "La mère est vendeuse.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Qui est grand-mère ?",
    text: ["Grand-mère", "Un voisin", "Un prof"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'ai aussi un(e) _________.",
    fill: "grand-mère",
    vfQ: "Grand-mère fait partie de la famille.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel événement est mentionné ?",
    text: ["Visite", "Un examen", "Un voyage seul"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ — c'est un moment important.",
    fill: "visite",
    vfQ: "L'événement est visite.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Quel âge a le père ?",
    text: ["45 ans", "55 ans", "35 ans"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Mon père a _________ ans.",
    fill: "45",
    vfQ: "Le père a 45 ans.",
    vfC: 0,
  }),
]);
const CE_TEXT_20 = `Message vocal transcrit

Chère amie, chers amis,
Je te présente ma famille. Nous sommes sept à la maison.
Mon père a 53 ans. Il est serveur.
Ma mère a 50 ans. Elle est cuisinière.
Mon frère/mon enfant a 16 ans.
J'ai aussi neveu. 6 mois.
Baptême — c'est un moment important pour nous.
Et toi, tu as une grande famille ?
Rosa`;

const CE_POOL_20 = buildExpressPool("e1-2-20", [
  q({
    id: "ce-q1",
    textQ: "Combien de personnes à la maison ?",
    text: ["Sept", "Trois", "Quatre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Nous sommes _________ à la maison.",
    fill: "sept",
    vfQ: "Ils sont sept à la maison.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quelle est la profession du père ?",
    text: ["Serveur", "Pilote", "Avocat"],
    textC: 0,
    img: ["serveur", "pilote", "avocat"],
    imgC: 0,
    fillQ: "Mon père est _________.",
    fill: "serveur",
    vfQ: "Le père est serveur.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quel âge a la mère ?",
    text: ["50 ans", "60 ans", "40 ans"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Ma mère a _________ ans.",
    fill: "50",
    vfQ: "La mère a 50 ans.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quelle est la profession de la mère ?",
    text: ["Cuisinière", "Pilote", "Mécanicien"],
    textC: 0,
    img: ["cuisinier", "pilote", "mécanicien"],
    imgC: 0,
    fillQ: "Ma mère est _________.",
    fill: "cuisinière",
    vfQ: "La mère est cuisinière.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Qui est neveu ?",
    text: ["Neveu", "Un voisin", "Un prof"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'ai aussi un(e) _________.",
    fill: "neveu",
    vfQ: "Neveu fait partie de la famille.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel événement est mentionné ?",
    text: ["Baptême", "Un examen", "Un voyage seul"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ — c'est un moment important.",
    fill: "baptême",
    vfQ: "L'événement est baptême.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Quel âge a le père ?",
    text: ["53 ans", "63 ans", "43 ans"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Mon père a _________ ans.",
    fill: "53",
    vfQ: "Le père a 53 ans.",
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
