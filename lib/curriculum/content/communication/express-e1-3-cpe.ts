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

/* ── Compréhension écrite — E1.3 Inviter à une fête ── */

const CE_TEXT_1 = `Invitation — Fête d'anniversaire

Chers voisins,
Samedi 14 juin, nous organisons une fête. C'est pour les 30 ans de Karim. C'est un apéro dans le jardin, derrière l'immeuble.
La fête commence à 18 heures. Elle finit vers 23 heures. Nous préparons un grand buffet. Il y a des salades, des pizzas et des boissons fraîches.
Vous pouvez apporter quelque chose pour le dessert. Par exemple : un gâteau, une tarte ou une salade de fruits.
Attention ! S'il pleut, la fête est annulée. Merci de répondre avant mercredi.
À samedi !
Karim et Julie`;

const CE_POOL_1 = buildExpressPool("e1-3-1", [
q({
    id: "ce-q1",
    textQ: "Qu'est-ce que Karim et Julie organisent ?",
    text: ["Une fête d'anniversaire", "Un pique-nique", "Un repas au restaurant"],
    textC: 0,
    img: ["anniversaire", "pique-nique", "restaurant"],
    imgC: 0,
    fillQ: "Samedi 14 juin, nous organisons une _________.",
    fill: "fête",
    fillA: ["fete"],
    vfQ: "La fête est pour un anniversaire.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Où se passe la fête ?",
    text: ["Dans le jardin", "Dans un restaurant", "Dans la salle des fêtes"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "C'est un apéro dans le _________, derrière l'immeuble.",
    fill: "jardin",
    vfQ: "La fête se passe dans un restaurant.",
    vfC: 1,
  }),
  q({
    id: "ce-q3",
    textQ: "À quelle heure la fête commence-t-elle ?",
    text: ["À 18 heures", "À 20 heures", "À 23 heures"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "La fête commence à _________ heures.",
    fill: "18",
    fillA: ["dix-huit"],
    vfQ: "La fête finit vers 23 heures.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Qu'est-ce que les invités peuvent apporter ?",
    text: ["Quelque chose pour le dessert", "Des salades", "Des boissons"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Par exemple : un gâteau, une tarte ou une salade de _________.",
    fill: "fruits",
    vfQ: "Les invités doivent apporter les boissons.",
    vfC: 1,
  }),
  q({
    id: "ce-q5",
    textQ: "Que se passe-t-il s'il pleut ?",
    text: ["La fête est annulée", "La fête est dans le salon", "La fête commence plus tard"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "S'il pleut, la fête est _________.",
    fill: "annulée",
    fillA: ["annulee"],
    vfQ: "S'il pleut, la fête est annulée.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quand faut-il répondre à l'invitation ?",
    text: ["Avant mercredi", "Avant samedi", "Avant dimanche"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Merci de répondre avant _________.",
    fill: "mercredi",
    vfQ: "Il faut répondre avant vendredi.",
    vfC: 1,
  }),
  q({
    id: "ce-q7",
    textQ: "Quel anniversaire Karim fête-t-il ?",
    text: ["Ses 30 ans", "Ses 20 ans", "Ses 40 ans"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "C'est pour les _________ ans de Karim.",
    fill: "30",
    fillA: ["trente"],
    vfQ: "Le message dit combien d'invités viennent à la fête.",
    vfC: 2,
  }),
  q({
    id: "ce-q8",
    textQ: "Qu'est-ce qu'il y a au buffet ?",
    text: [
      "Des salades, des pizzas et des boissons",
      "Des sandwichs et des gâteaux",
      "Du fromage et du pain",
    ],
    textC: 0,
    img: ["pizza", "sandwich", "fromage"],
    imgC: 0,
    fillQ: "Nous préparons un grand _________.",
    fill: "buffet",
    vfQ: "Il y a des pizzas au buffet.",
    vfC: 0,
  }),
]);

const CE_TEXT_2 = `Invitation

Chers amis,
Samir organise une anniversaire. C'est samedi 5 juillet.
La fête commence à 19 h. Elle finit vers 22 h.
C'est dans le jardin. Vous pouvez apporter du gâteau.
Merci de répondre avant mercredi.
À bientôt !
Samir`;

const CE_POOL_2 = buildExpressPool("e1-3-2", [
  q({
    id: "ce-q1",
    textQ: "Qui organise la fête ?",
    text: ["Samir", "Marie", "Paul"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Samir organise une _________.",
    fill: "anniversaire",
    vfQ: "Samir organise la fête.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quel jour a lieu la fête ?",
    text: ["Samedi 5 juillet", "Lundi prochain", "Mercredi"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "samedi",
    vfQ: "La fête est samedi 5 juillet.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "À quelle heure commence la fête ?",
    text: ["19 h", "8 h", "midi"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "La fête commence à _________.",
    fill: "19",
    vfQ: "La fête commence à 19 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Où a lieu la fête ?",
    text: ["Dans le jardin", "À l'école", "Au cinéma"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "C'est dans le _________.",
    fill: "jardin",
    vfQ: "La fête est dans le jardin.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Que peut-on apporter ?",
    text: ["Gâteau", "Un livre", "Un vélo"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Vous pouvez apporter du _________.",
    fill: "gâteau",
    vfQ: "On peut apporter du gâteau.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Faut-il répondre à l'invitation ?",
    text: ["Oui, avant mercredi", "Non", "On ne sait pas"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Merci de répondre avant _________.",
    fill: "mercredi",
    vfQ: "Il faut répondre avant mercredi.",
    vfC: 0,
  }),
]);

const CE_TEXT_3 = `Invitation

Chers amis,
Nina organise une soirée jeux. C'est vendredi 20 mars.
La fête commence à 18 h 30. Elle finit vers 23 h.
C'est dans le salon. Vous pouvez apporter du chips.
Merci de répondre avant mercredi.
À bientôt !
Nina`;

const CE_POOL_3 = buildExpressPool("e1-3-3", [
  q({
    id: "ce-q1",
    textQ: "Qui organise la fête ?",
    text: ["Nina", "Marie", "Paul"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Nina organise une _________.",
    fill: "soirée jeux",
    vfQ: "Nina organise la fête.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quel jour a lieu la fête ?",
    text: ["Vendredi 20 mars", "Lundi prochain", "Mercredi"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "vendredi",
    vfQ: "La fête est vendredi 20 mars.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "À quelle heure commence la fête ?",
    text: ["18 h 30", "8 h", "midi"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "La fête commence à _________.",
    fill: "18",
    vfQ: "La fête commence à 18 h 30.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Où a lieu la fête ?",
    text: ["Dans le salon", "À l'école", "Au cinéma"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "C'est dans le _________.",
    fill: "salon",
    vfQ: "La fête est dans le salon.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Que peut-on apporter ?",
    text: ["Chips", "Un livre", "Un vélo"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Vous pouvez apporter du _________.",
    fill: "chips",
    vfQ: "On peut apporter du chips.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Faut-il répondre à l'invitation ?",
    text: ["Oui, avant mercredi", "Non", "On ne sait pas"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Merci de répondre avant _________.",
    fill: "mercredi",
    vfQ: "Il faut répondre avant mercredi.",
    vfC: 0,
  }),
]);

const CE_TEXT_4 = `Invitation

Chers amis,
Paul organise une barbecue. C'est dimanche 12 avril.
La fête commence à 12 h. Elle finit vers 16 h.
C'est dans le terrasse. Vous pouvez apporter du salade.
Merci de répondre avant mercredi.
À bientôt !
Paul`;

const CE_POOL_4 = buildExpressPool("e1-3-4", [
  q({
    id: "ce-q1",
    textQ: "Qui organise la fête ?",
    text: ["Paul", "Marie", "10 ans"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Paul organise une _________.",
    fill: "barbecue",
    vfQ: "Paul organise la fête.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quel jour a lieu la fête ?",
    text: ["Dimanche 12 avril", "Lundi prochain", "Mercredi"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "dimanche",
    vfQ: "La fête est dimanche 12 avril.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "À quelle heure commence la fête ?",
    text: ["12 h", "8 h", "midi"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "La fête commence à _________.",
    fill: "12",
    vfQ: "La fête commence à 12 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Où a lieu la fête ?",
    text: ["Dans le terrasse", "À l'école", "Au cinéma"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "C'est dans le _________.",
    fill: "terrasse",
    vfQ: "La fête est dans le terrasse.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Que peut-on apporter ?",
    text: ["Salade", "Un livre", "Un vélo"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Vous pouvez apporter du _________.",
    fill: "salade",
    vfQ: "On peut apporter du salade.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Faut-il répondre à l'invitation ?",
    text: ["Oui, avant mercredi", "Non", "On ne sait pas"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Merci de répondre avant _________.",
    fill: "mercredi",
    vfQ: "Il faut répondre avant mercredi.",
    vfC: 0,
  }),
]);

const CE_TEXT_5 = `Invitation

Chers amis,
Aïcha organise une fête de fin d'année. C'est samedi 8 mai.
La fête commence à 20 h. Elle finit vers minuit.
C'est dans le appartement. Vous pouvez apporter du boissons.
Merci de répondre avant mercredi.
À bientôt !
Aïcha`;

const CE_POOL_5 = buildExpressPool("e1-3-5", [
  q({
    id: "ce-q1",
    textQ: "Qui organise la fête ?",
    text: ["Aïcha", "Marie", "Paul"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Aïcha organise une _________.",
    fill: "fête de fin d'année",
    vfQ: "Aïcha organise la fête.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quel jour a lieu la fête ?",
    text: ["Samedi 8 mai", "Lundi prochain", "Mercredi"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "samedi",
    vfQ: "La fête est samedi 8 mai.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "À quelle heure commence la fête ?",
    text: ["20 h", "8 h", "midi"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "La fête commence à _________.",
    fill: "20",
    vfQ: "La fête commence à 20 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Où a lieu la fête ?",
    text: ["Dans le appartement", "À l'école", "Au cinéma"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "C'est dans le _________.",
    fill: "appartement",
    vfQ: "La fête est dans le appartement.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Que peut-on apporter ?",
    text: ["Boissons", "Un livre", "Un vélo"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Vous pouvez apporter du _________.",
    fill: "boissons",
    vfQ: "On peut apporter du boissons.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Faut-il répondre à l'invitation ?",
    text: ["Oui, avant mercredi", "Non", "On ne sait pas"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Merci de répondre avant _________.",
    fill: "mercredi",
    vfQ: "Il faut répondre avant mercredi.",
    vfC: 0,
  }),
]);

const CE_TEXT_6 = `Invitation

Chers amis,
Marc organise une apéro. C'est jeudi 1er juin.
La fête commence à 17 h. Elle finit vers 20 h.
C'est dans le balcon. Vous pouvez apporter du fromage.
Merci de répondre avant mercredi.
À bientôt !
Marc`;

const CE_POOL_6 = buildExpressPool("e1-3-6", [
  q({
    id: "ce-q1",
    textQ: "Qui organise la fête ?",
    text: ["Marc", "Marie", "Paul"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Marc organise une _________.",
    fill: "apéro",
    vfQ: "Marc organise la fête.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quel jour a lieu la fête ?",
    text: ["Jeudi 1er juin", "Lundi prochain", "Mercredi"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "jeudi",
    vfQ: "La fête est jeudi 1er juin.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "À quelle heure commence la fête ?",
    text: ["17 h", "8 h", "midi"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "La fête commence à _________.",
    fill: "17",
    vfQ: "La fête commence à 17 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Où a lieu la fête ?",
    text: ["Dans le balcon", "À l'école", "Au cinéma"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "C'est dans le _________.",
    fill: "balcon",
    vfQ: "La fête est dans le balcon.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Que peut-on apporter ?",
    text: ["Fromage", "Un livre", "Un vélo"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Vous pouvez apporter du _________.",
    fill: "fromage",
    vfQ: "On peut apporter du fromage.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Faut-il répondre à l'invitation ?",
    text: ["Oui, avant mercredi", "Non", "On ne sait pas"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Merci de répondre avant _________.",
    fill: "mercredi",
    vfQ: "Il faut répondre avant mercredi.",
    vfC: 0,
  }),
]);

const CE_TEXT_7 = `Invitation

Chers amis,
Léa organise une brunch. C'est samedi 15 août.
La fête commence à 11 h. Elle finit vers 15 h.
C'est dans le cuisine. Vous pouvez apporter du fruits.
Merci de répondre avant mercredi.
À bientôt !
Léa`;

const CE_POOL_7 = buildExpressPool("e1-3-7", [
  q({
    id: "ce-q1",
    textQ: "Qui organise la fête ?",
    text: ["Léa", "Marie", "Paul"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Léa organise une _________.",
    fill: "brunch",
    vfQ: "Léa organise la fête.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quel jour a lieu la fête ?",
    text: ["Samedi 15 août", "Lundi prochain", "Mercredi"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "samedi",
    vfQ: "La fête est samedi 15 août.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "À quelle heure commence la fête ?",
    text: ["11 h", "8 h", "midi"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "La fête commence à _________.",
    fill: "11",
    vfQ: "La fête commence à 11 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Où a lieu la fête ?",
    text: ["Dans le cuisine", "À l'école", "Au cinéma"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "C'est dans le _________.",
    fill: "cuisine",
    vfQ: "La fête est dans le cuisine.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Que peut-on apporter ?",
    text: ["Fruits", "Un livre", "Un vélo"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Vous pouvez apporter du _________.",
    fill: "fruits",
    vfQ: "On peut apporter du fruits.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Faut-il répondre à l'invitation ?",
    text: ["Oui, avant mercredi", "Non", "On ne sait pas"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Merci de répondre avant _________.",
    fill: "mercredi",
    vfQ: "Il faut répondre avant mercredi.",
    vfC: 0,
  }),
]);

const CE_TEXT_8 = `Invitation

Chers amis,
Hugo organise une Halloween. C'est vendredi 25 septembre.
La fête commence à 19 h. Elle finit vers 23 h 30.
C'est dans le maison. Vous pouvez apporter du bonbons.
Merci de répondre avant mercredi.
À bientôt !
Hugo`;

const CE_POOL_8 = buildExpressPool("e1-3-8", [
  q({
    id: "ce-q1",
    textQ: "Qui organise la fête ?",
    text: ["Hugo", "Marie", "Paul"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Hugo organise une _________.",
    fill: "Halloween",
    vfQ: "Hugo organise la fête.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quel jour a lieu la fête ?",
    text: ["Vendredi 25 septembre", "Lundi prochain", "Mercredi"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "vendredi",
    vfQ: "La fête est vendredi 25 septembre.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "À quelle heure commence la fête ?",
    text: ["19 h", "8 h", "midi"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "La fête commence à _________.",
    fill: "19",
    vfQ: "La fête commence à 19 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Où a lieu la fête ?",
    text: ["Dans le maison", "À l'école", "Au cinéma"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "C'est dans le _________.",
    fill: "maison",
    vfQ: "La fête est dans le maison.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Que peut-on apporter ?",
    text: ["Bonbons", "Un livre", "Un vélo"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Vous pouvez apporter du _________.",
    fill: "bonbons",
    vfQ: "On peut apporter du bonbons.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Faut-il répondre à l'invitation ?",
    text: ["Oui, avant mercredi", "Non", "On ne sait pas"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Merci de répondre avant _________.",
    fill: "mercredi",
    vfQ: "Il faut répondre avant mercredi.",
    vfC: 0,
  }),
]);

const CE_TEXT_9 = `Invitation

Chers amis,
Inès organise une fête des voisins. C'est samedi 10 octobre.
La fête commence à 18 h. Elle finit vers 22 h.
C'est dans le cour. Vous pouvez apporter du tarte.
Merci de répondre avant mercredi.
À bientôt !
Inès`;

const CE_POOL_9 = buildExpressPool("e1-3-9", [
  q({
    id: "ce-q1",
    textQ: "Qui organise la fête ?",
    text: ["Inès", "Marie", "Paul"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Inès organise une _________.",
    fill: "fête des voisins",
    vfQ: "Inès organise la fête.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quel jour a lieu la fête ?",
    text: ["Samedi 10 octobre", "Lundi prochain", "Mercredi"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "samedi",
    vfQ: "La fête est samedi 10 octobre.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "À quelle heure commence la fête ?",
    text: ["18 h", "8 h", "midi"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "La fête commence à _________.",
    fill: "18",
    vfQ: "La fête commence à 18 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Où a lieu la fête ?",
    text: ["Dans le cour", "À l'école", "Au cinéma"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "C'est dans le _________.",
    fill: "cour",
    vfQ: "La fête est dans le cour.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Que peut-on apporter ?",
    text: ["Tarte", "Un livre", "Un vélo"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Vous pouvez apporter du _________.",
    fill: "tarte",
    vfQ: "On peut apporter du tarte.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Faut-il répondre à l'invitation ?",
    text: ["Oui, avant mercredi", "Non", "On ne sait pas"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Merci de répondre avant _________.",
    fill: "mercredi",
    vfQ: "Il faut répondre avant mercredi.",
    vfC: 0,
  }),
]);

const CE_TEXT_10 = `Invitation

Chers amis,
David organise une soirée dansante. C'est samedi 21 novembre.
La fête commence à 20 h. Elle finit vers 1 h.
C'est dans le salle. Vous pouvez apporter du pizza.
Merci de répondre avant mercredi.
À bientôt !
David`;

const CE_POOL_10 = buildExpressPool("e1-3-10", [
  q({
    id: "ce-q1",
    textQ: "Qui organise la fête ?",
    text: ["David", "Marie", "Paul"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "David organise une _________.",
    fill: "soirée dansante",
    vfQ: "David organise la fête.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quel jour a lieu la fête ?",
    text: ["Samedi 21 novembre", "Lundi prochain", "Mercredi"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "samedi",
    vfQ: "La fête est samedi 21 novembre.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "À quelle heure commence la fête ?",
    text: ["20 h", "8 h", "midi"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "La fête commence à _________.",
    fill: "20",
    vfQ: "La fête commence à 20 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Où a lieu la fête ?",
    text: ["Dans le salle", "À l'école", "Au cinéma"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "C'est dans le _________.",
    fill: "salle",
    vfQ: "La fête est dans le salle.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Que peut-on apporter ?",
    text: ["Pizza", "Un livre", "Un vélo"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Vous pouvez apporter du _________.",
    fill: "pizza",
    vfQ: "On peut apporter du pizza.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Faut-il répondre à l'invitation ?",
    text: ["Oui, avant mercredi", "Non", "On ne sait pas"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Merci de répondre avant _________.",
    fill: "mercredi",
    vfQ: "Il faut répondre avant mercredi.",
    vfC: 0,
  }),
]);

const CE_TEXT_11 = `Invitation

Chers amis,
Camille organise une goûter de Noël. C'est dimanche 6 décembre.
La fête commence à 16 h. Elle finit vers 19 h.
C'est dans le salon. Vous pouvez apporter du chocolat.
Merci de répondre avant mercredi.
À bientôt !
Camille`;

const CE_POOL_11 = buildExpressPool("e1-3-11", [
  q({
    id: "ce-q1",
    textQ: "Qui organise la fête ?",
    text: ["Camille", "Marie", "Paul"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Camille organise une _________.",
    fill: "goûter de Noël",
    vfQ: "Camille organise la fête.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quel jour a lieu la fête ?",
    text: ["Dimanche 6 décembre", "Lundi prochain", "Mercredi"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "dimanche",
    vfQ: "La fête est dimanche 6 décembre.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "À quelle heure commence la fête ?",
    text: ["16 h", "8 h", "midi"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "La fête commence à _________.",
    fill: "16",
    vfQ: "La fête commence à 16 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Où a lieu la fête ?",
    text: ["Dans le salon", "À l'école", "Au cinéma"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "C'est dans le _________.",
    fill: "salon",
    vfQ: "La fête est dans le salon.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Que peut-on apporter ?",
    text: ["Chocolat", "Un livre", "Un vélo"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Vous pouvez apporter du _________.",
    fill: "chocolat",
    vfQ: "On peut apporter du chocolat.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Faut-il répondre à l'invitation ?",
    text: ["Oui, avant mercredi", "Non", "On ne sait pas"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Merci de répondre avant _________.",
    fill: "mercredi",
    vfQ: "Il faut répondre avant mercredi.",
    vfC: 0,
  }),
]);

const CE_TEXT_12 = `Invitation

Chers amis,
Romain organise une Saint-Valentin. C'est samedi 14 février.
La fête commence à 19 h 30. Elle finit vers 23 h.
C'est dans le restaurant maison. Vous pouvez apporter du dessert.
Merci de répondre avant mercredi.
À bientôt !
Romain`;

const CE_POOL_12 = buildExpressPool("e1-3-12", [
  q({
    id: "ce-q1",
    textQ: "Qui organise la fête ?",
    text: ["Romain", "Marie", "Paul"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Romain organise une _________.",
    fill: "Saint-Valentin",
    vfQ: "Romain organise la fête.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quel jour a lieu la fête ?",
    text: ["Samedi 14 février", "Lundi prochain", "Mercredi"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "samedi",
    vfQ: "La fête est samedi 14 février.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "À quelle heure commence la fête ?",
    text: ["19 h 30", "8 h", "midi"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "La fête commence à _________.",
    fill: "19",
    vfQ: "La fête commence à 19 h 30.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Où a lieu la fête ?",
    text: ["Dans le restaurant maison", "À l'école", "Au cinéma"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "C'est dans le _________.",
    fill: "restaurant maison",
    vfQ: "La fête est dans le restaurant maison.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Que peut-on apporter ?",
    text: ["Dessert", "Un livre", "Un vélo"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Vous pouvez apporter du _________.",
    fill: "dessert",
    vfQ: "On peut apporter du dessert.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Faut-il répondre à l'invitation ?",
    text: ["Oui, avant mercredi", "Non", "On ne sait pas"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Merci de répondre avant _________.",
    fill: "mercredi",
    vfQ: "Il faut répondre avant mercredi.",
    vfC: 0,
  }),
]);

const CE_TEXT_13 = `Invitation

Chers amis,
Salma organise une fête de printemps. C'est samedi 3 avril.
La fête commence à 18 h. Elle finit vers 21 h.
C'est dans le parc. Vous pouvez apporter du jus.
Merci de répondre avant mercredi.
À bientôt !
Salma`;

const CE_POOL_13 = buildExpressPool("e1-3-13", [
  q({
    id: "ce-q1",
    textQ: "Qui organise la fête ?",
    text: ["Salma", "Marie", "Paul"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Salma organise une _________.",
    fill: "fête de printemps",
    vfQ: "Salma organise la fête.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quel jour a lieu la fête ?",
    text: ["Samedi 3 avril", "Lundi prochain", "Mercredi"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "samedi",
    vfQ: "La fête est samedi 3 avril.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "À quelle heure commence la fête ?",
    text: ["18 h", "8 h", "midi"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "La fête commence à _________.",
    fill: "18",
    vfQ: "La fête commence à 18 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Où a lieu la fête ?",
    text: ["Dans le parc", "À l'école", "Au cinéma"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "C'est dans le _________.",
    fill: "parc",
    vfQ: "La fête est dans le parc.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Que peut-on apporter ?",
    text: ["Jus", "Un livre", "Un vélo"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Vous pouvez apporter du _________.",
    fill: "jus",
    vfQ: "On peut apporter du jus.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Faut-il répondre à l'invitation ?",
    text: ["Oui, avant mercredi", "Non", "On ne sait pas"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Merci de répondre avant _________.",
    fill: "mercredi",
    vfQ: "Il faut répondre avant mercredi.",
    vfC: 0,
  }),
]);

const CE_TEXT_14 = `Invitation

Chers amis,
Victor organise une pot de départ. C'est vendredi 17 mai.
La fête commence à 19 h. Elle finit vers 22 h.
C'est dans le bureau transformé. Vous pouvez apporter du vin.
Merci de répondre avant mercredi.
À bientôt !
Victor`;

const CE_POOL_14 = buildExpressPool("e1-3-14", [
  q({
    id: "ce-q1",
    textQ: "Qui organise la fête ?",
    text: ["Victor", "Marie", "Paul"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Victor organise une _________.",
    fill: "pot de départ",
    vfQ: "Victor organise la fête.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quel jour a lieu la fête ?",
    text: ["Vendredi 17 mai", "Lundi prochain", "Mercredi"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "vendredi",
    vfQ: "La fête est vendredi 17 mai.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "À quelle heure commence la fête ?",
    text: ["19 h", "8 h", "midi"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "La fête commence à _________.",
    fill: "19",
    vfQ: "La fête commence à 19 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Où a lieu la fête ?",
    text: ["Dans le bureau transformé", "À l'école", "Au cinéma"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "C'est dans le _________.",
    fill: "bureau transformé",
    vfQ: "La fête est dans le bureau transformé.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Que peut-on apporter ?",
    text: ["Vin", "Un livre", "Un vélo"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Vous pouvez apporter du _________.",
    fill: "vin",
    vfQ: "On peut apporter du vin.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Faut-il répondre à l'invitation ?",
    text: ["Oui, avant mercredi", "Non", "On ne sait pas"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Merci de répondre avant _________.",
    fill: "mercredi",
    vfQ: "Il faut répondre avant mercredi.",
    vfC: 0,
  }),
]);

const CE_TEXT_15 = `Invitation

Chers amis,
Élise organise une pique-nique. C'est samedi 28 juin.
La fête commence à 17 h. Elle finit vers 20 h.
C'est dans le lac. Vous pouvez apporter du sandwichs.
Merci de répondre avant mercredi.
À bientôt !
Élise`;

const CE_POOL_15 = buildExpressPool("e1-3-15", [
  q({
    id: "ce-q1",
    textQ: "Qui organise la fête ?",
    text: ["Élise", "Marie", "Paul"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Élise organise une _________.",
    fill: "pique-nique",
    vfQ: "Élise organise la fête.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quel jour a lieu la fête ?",
    text: ["Samedi 28 juin", "Lundi prochain", "Mercredi"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "samedi",
    vfQ: "La fête est samedi 28 juin.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "À quelle heure commence la fête ?",
    text: ["17 h", "8 h", "midi"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "La fête commence à _________.",
    fill: "17",
    vfQ: "La fête commence à 17 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Où a lieu la fête ?",
    text: ["Dans le lac", "À l'école", "Au cinéma"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "C'est dans le _________.",
    fill: "lac",
    vfQ: "La fête est dans le lac.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Que peut-on apporter ?",
    text: ["Sandwichs", "Un livre", "Un vélo"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Vous pouvez apporter du _________.",
    fill: "sandwichs",
    vfQ: "On peut apporter du sandwichs.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Faut-il répondre à l'invitation ?",
    text: ["Oui, avant mercredi", "Non", "On ne sait pas"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Merci de répondre avant _________.",
    fill: "mercredi",
    vfQ: "Il faut répondre avant mercredi.",
    vfC: 0,
  }),
]);

const CE_TEXT_16 = `Invitation

Chers amis,
Karim organise une fête surprise. C'est samedi 9 juillet.
La fête commence à 20 h. Elle finit vers 23 h.
C'est dans le jardin. Vous pouvez apporter du bougie.
Merci de répondre avant mercredi.
À bientôt !
Karim`;

const CE_POOL_16 = buildExpressPool("e1-3-16", [
  q({
    id: "ce-q1",
    textQ: "Qui organise la fête ?",
    text: ["Karim", "Marie", "Paul"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Karim organise une _________.",
    fill: "fête surprise",
    vfQ: "Karim organise la fête.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quel jour a lieu la fête ?",
    text: ["Samedi 9 juillet", "Lundi prochain", "Mercredi"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "samedi",
    vfQ: "La fête est samedi 9 juillet.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "À quelle heure commence la fête ?",
    text: ["20 h", "8 h", "midi"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "La fête commence à _________.",
    fill: "20",
    vfQ: "La fête commence à 20 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Où a lieu la fête ?",
    text: ["Dans le jardin", "À l'école", "Au cinéma"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "C'est dans le _________.",
    fill: "jardin",
    vfQ: "La fête est dans le jardin.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Que peut-on apporter ?",
    text: ["Bougie", "Un livre", "Un vélo"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Vous pouvez apporter du _________.",
    fill: "bougie",
    vfQ: "On peut apporter du bougie.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Faut-il répondre à l'invitation ?",
    text: ["Oui, avant mercredi", "Non", "On ne sait pas"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Merci de répondre avant _________.",
    fill: "mercredi",
    vfQ: "Il faut répondre avant mercredi.",
    vfC: 0,
  }),
]);

const CE_TEXT_17 = `Invitation

Chers amis,
Julie organise une déjeuner familial. C'est dimanche 20 septembre.
La fête commence à 12 h 30. Elle finit vers 17 h.
C'est dans le salle à manger. Vous pouvez apporter du tarte.
Merci de répondre avant mercredi.
À bientôt !
Julie`;

const CE_POOL_17 = buildExpressPool("e1-3-17", [
  q({
    id: "ce-q1",
    textQ: "Qui organise la fête ?",
    text: ["Julie", "Marie", "Paul"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Julie organise une _________.",
    fill: "déjeuner familial",
    vfQ: "Julie organise la fête.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quel jour a lieu la fête ?",
    text: ["Dimanche 20 septembre", "Lundi prochain", "Mercredi"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "dimanche",
    vfQ: "La fête est dimanche 20 septembre.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "À quelle heure commence la fête ?",
    text: ["12 h 30", "8 h", "midi"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "La fête commence à _________.",
    fill: "12",
    vfQ: "La fête commence à 12 h 30.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Où a lieu la fête ?",
    text: ["Dans le salle à manger", "À l'école", "Au cinéma"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "C'est dans le _________.",
    fill: "salle à manger",
    vfQ: "La fête est dans le salle à manger.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Que peut-on apporter ?",
    text: ["Tarte", "Un livre", "Un vélo"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Vous pouvez apporter du _________.",
    fill: "tarte",
    vfQ: "On peut apporter du tarte.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Faut-il répondre à l'invitation ?",
    text: ["Oui, avant mercredi", "Non", "On ne sait pas"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Merci de répondre avant _________.",
    fill: "mercredi",
    vfQ: "Il faut répondre avant mercredi.",
    vfC: 0,
  }),
]);

const CE_TEXT_18 = `Invitation

Chers amis,
Antoine organise une soirée costumée. C'est samedi 31 octobre.
La fête commence à 19 h. Elle finit vers 23 h.
C'est dans le maison. Vous pouvez apporter du citrouille.
Merci de répondre avant mercredi.
À bientôt !
Antoine`;

const CE_POOL_18 = buildExpressPool("e1-3-18", [
  q({
    id: "ce-q1",
    textQ: "Qui organise la fête ?",
    text: ["Antoine", "Marie", "Paul"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Antoine organise une _________.",
    fill: "soirée costumée",
    vfQ: "Antoine organise la fête.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quel jour a lieu la fête ?",
    text: ["Samedi 31 octobre", "Lundi prochain", "Mercredi"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "samedi",
    vfQ: "La fête est samedi 31 octobre.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "À quelle heure commence la fête ?",
    text: ["19 h", "8 h", "midi"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "La fête commence à _________.",
    fill: "19",
    vfQ: "La fête commence à 19 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Où a lieu la fête ?",
    text: ["Dans le maison", "À l'école", "Au cinéma"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "C'est dans le _________.",
    fill: "maison",
    vfQ: "La fête est dans le maison.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Que peut-on apporter ?",
    text: ["Citrouille", "Un livre", "Un vélo"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Vous pouvez apporter du _________.",
    fill: "citrouille",
    vfQ: "On peut apporter du citrouille.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Faut-il répondre à l'invitation ?",
    text: ["Oui, avant mercredi", "Non", "On ne sait pas"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Merci de répondre avant _________.",
    fill: "mercredi",
    vfQ: "Il faut répondre avant mercredi.",
    vfC: 0,
  }),
]);

const CE_TEXT_19 = `Invitation

Chers amis,
Maya organise une fête de fin d'année. C'est samedi 12 décembre.
La fête commence à 18 h. Elle finit vers 22 h.
C'est dans le loft. Vous pouvez apporter du champagne.
Merci de répondre avant mercredi.
À bientôt !
Maya`;

const CE_POOL_19 = buildExpressPool("e1-3-19", [
  q({
    id: "ce-q1",
    textQ: "Qui organise la fête ?",
    text: ["Maya", "Marie", "Paul"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Maya organise une _________.",
    fill: "fête de fin d'année",
    vfQ: "Maya organise la fête.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quel jour a lieu la fête ?",
    text: ["Samedi 12 décembre", "Lundi prochain", "Mercredi"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "samedi",
    vfQ: "La fête est samedi 12 décembre.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "À quelle heure commence la fête ?",
    text: ["18 h", "8 h", "midi"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "La fête commence à _________.",
    fill: "18",
    vfQ: "La fête commence à 18 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Où a lieu la fête ?",
    text: ["Dans le loft", "À l'école", "Au cinéma"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "C'est dans le _________.",
    fill: "loft",
    vfQ: "La fête est dans le loft.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Que peut-on apporter ?",
    text: ["Champagne", "Un livre", "Un vélo"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Vous pouvez apporter du _________.",
    fill: "champagne",
    vfQ: "On peut apporter du champagne.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Faut-il répondre à l'invitation ?",
    text: ["Oui, avant mercredi", "Non", "On ne sait pas"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Merci de répondre avant _________.",
    fill: "mercredi",
    vfQ: "Il faut répondre avant mercredi.",
    vfC: 0,
  }),
]);

const CE_TEXT_20 = `Invitation

Chers amis,
Thomas organise une réveillon. C'est samedi 16 janvier.
La fête commence à 19 h. Elle finit vers 22 h 30.
C'est dans le appartement. Vous pouvez apporter du galette.
Merci de répondre avant mercredi.
À bientôt !
Thomas`;

const CE_POOL_20 = buildExpressPool("e1-3-20", [
  q({
    id: "ce-q1",
    textQ: "Qui organise la fête ?",
    text: ["Thomas", "Marie", "Paul"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Thomas organise une _________.",
    fill: "réveillon",
    vfQ: "Thomas organise la fête.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quel jour a lieu la fête ?",
    text: ["Samedi 16 janvier", "Lundi prochain", "Mercredi"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "samedi",
    vfQ: "La fête est samedi 16 janvier.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "À quelle heure commence la fête ?",
    text: ["19 h", "8 h", "midi"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "La fête commence à _________.",
    fill: "19",
    vfQ: "La fête commence à 19 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Où a lieu la fête ?",
    text: ["Dans le appartement", "À l'école", "Au cinéma"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "C'est dans le _________.",
    fill: "appartement",
    vfQ: "La fête est dans le appartement.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Que peut-on apporter ?",
    text: ["Galette", "Un livre", "Un vélo"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Vous pouvez apporter du _________.",
    fill: "galette",
    vfQ: "On peut apporter du galette.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Faut-il répondre à l'invitation ?",
    text: ["Oui, avant mercredi", "Non", "On ne sait pas"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Merci de répondre avant _________.",
    fill: "mercredi",
    vfQ: "Il faut répondre avant mercredi.",
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
  title: "À la mairie",
  context: "Situation : à la mairie. Thème : inviter.",
  roleA: { title: "L'interlocuteur A", vous: "l'interlocuteur A" },
  roleB: { title: "L'interlocuteur B", vous: "l'interlocuteur B" },
  lines: [
    { role: "A", text: "Bonjour, je peux vous aider ?" },
    { role: "B", text: "Oui, bonjour. J'ai une question." },
    { role: "A", text: "Bien sûr. Dites-moi tout." },
    { role: "B", text: "C'est au sujet de inviter." },
    { role: "A", text: "D'accord. Pouvez-vous préciser ?" },
    { role: "B", text: "Oui, je voudrais plus d'informations." },
    { role: "A", text: "Très bien, je note." },
    { role: "B", text: "Merci beaucoup pour votre aide." },
    { role: "A", text: "Ravi(e) de faire votre connaissance." },
    { role: "B", text: "Moi aussi. À bientôt !" },
  ],
},
{
  id: "e1-3-po-12",
  title: "Au téléphone",
  context: "Situation : au téléphone. Thème : inviter.",
  roleA: { title: "L'interlocuteur A", vous: "l'interlocuteur A" },
  roleB: { title: "L'interlocuteur B", vous: "l'interlocuteur B" },
  lines: [
    { role: "A", text: "Bonjour, je peux vous aider ?" },
    { role: "B", text: "Oui, bonjour. J'ai une question." },
    { role: "A", text: "Bien sûr. Dites-moi tout." },
    { role: "B", text: "C'est au sujet de inviter." },
    { role: "A", text: "D'accord. Pouvez-vous préciser ?" },
    { role: "B", text: "Oui, je voudrais plus d'informations." },
    { role: "A", text: "Très bien, je note." },
    { role: "B", text: "Merci beaucoup pour votre aide." },
    { role: "A", text: "Ravi(e) de faire votre connaissance." },
    { role: "B", text: "Moi aussi. À bientôt !" },
  ],
},
{
  id: "e1-3-po-13",
  title: "Chez le voisin",
  context: "Situation : chez le voisin. Thème : inviter.",
  roleA: { title: "L'interlocuteur A", vous: "l'interlocuteur A" },
  roleB: { title: "L'interlocuteur B", vous: "l'interlocuteur B" },
  lines: [
    { role: "A", text: "Bonjour, je peux vous aider ?" },
    { role: "B", text: "Oui, bonjour. J'ai une question." },
    { role: "A", text: "Bien sûr. Dites-moi tout." },
    { role: "B", text: "C'est au sujet de inviter." },
    { role: "A", text: "D'accord. Pouvez-vous préciser ?" },
    { role: "B", text: "Oui, je voudrais plus d'informations." },
    { role: "A", text: "Très bien, je note." },
    { role: "B", text: "Merci beaucoup pour votre aide." },
    { role: "A", text: "Ravi(e) de faire votre connaissance." },
    { role: "B", text: "Moi aussi. À bientôt !" },
  ],
},
{
  id: "e1-3-po-14",
  title: "À l'accueil",
  context: "Situation : à l'accueil. Thème : inviter.",
  roleA: { title: "L'interlocuteur A", vous: "l'interlocuteur A" },
  roleB: { title: "L'interlocuteur B", vous: "l'interlocuteur B" },
  lines: [
    { role: "A", text: "Bonjour, je peux vous aider ?" },
    { role: "B", text: "Oui, bonjour. J'ai une question." },
    { role: "A", text: "Bien sûr. Dites-moi tout." },
    { role: "B", text: "C'est au sujet de inviter." },
    { role: "A", text: "D'accord. Pouvez-vous préciser ?" },
    { role: "B", text: "Oui, je voudrais plus d'informations." },
    { role: "A", text: "Très bien, je note." },
    { role: "B", text: "Merci beaucoup pour votre aide." },
    { role: "A", text: "Ravi(e) de faire votre connaissance." },
    { role: "B", text: "Moi aussi. À bientôt !" },
  ],
},
{
  id: "e1-3-po-15",
  title: "Dans la rue",
  context: "Situation : dans la rue. Thème : inviter.",
  roleA: { title: "L'interlocuteur A", vous: "l'interlocuteur A" },
  roleB: { title: "L'interlocuteur B", vous: "l'interlocuteur B" },
  lines: [
    { role: "A", text: "Bonjour, je peux vous aider ?" },
    { role: "B", text: "Oui, bonjour. J'ai une question." },
    { role: "A", text: "Bien sûr. Dites-moi tout." },
    { role: "B", text: "C'est au sujet de inviter." },
    { role: "A", text: "D'accord. Pouvez-vous préciser ?" },
    { role: "B", text: "Oui, je voudrais plus d'informations." },
    { role: "A", text: "Très bien, je note." },
    { role: "B", text: "Merci beaucoup pour votre aide." },
    { role: "A", text: "Ravi(e) de faire votre connaissance." },
    { role: "B", text: "Moi aussi. À bientôt !" },
  ],
},
{
  id: "e1-3-po-16",
  title: "Au bureau",
  context: "Situation : au bureau. Thème : inviter.",
  roleA: { title: "L'interlocuteur A", vous: "l'interlocuteur A" },
  roleB: { title: "L'interlocuteur B", vous: "l'interlocuteur B" },
  lines: [
    { role: "A", text: "Bonjour, je peux vous aider ?" },
    { role: "B", text: "Oui, bonjour. J'ai une question." },
    { role: "A", text: "Bien sûr. Dites-moi tout." },
    { role: "B", text: "C'est au sujet de inviter." },
    { role: "A", text: "D'accord. Pouvez-vous préciser ?" },
    { role: "B", text: "Oui, je voudrais plus d'informations." },
    { role: "A", text: "Très bien, je note." },
    { role: "B", text: "Merci beaucoup pour votre aide." },
    { role: "A", text: "Ravi(e) de faire votre connaissance." },
    { role: "B", text: "Moi aussi. À bientôt !" },
  ],
},
{
  id: "e1-3-po-17",
  title: "À la réception",
  context: "Situation : à la réception. Thème : inviter.",
  roleA: { title: "L'interlocuteur A", vous: "l'interlocuteur A" },
  roleB: { title: "L'interlocuteur B", vous: "l'interlocuteur B" },
  lines: [
    { role: "A", text: "Bonjour, je peux vous aider ?" },
    { role: "B", text: "Oui, bonjour. J'ai une question." },
    { role: "A", text: "Bien sûr. Dites-moi tout." },
    { role: "B", text: "C'est au sujet de inviter." },
    { role: "A", text: "D'accord. Pouvez-vous préciser ?" },
    { role: "B", text: "Oui, je voudrais plus d'informations." },
    { role: "A", text: "Très bien, je note." },
    { role: "B", text: "Merci beaucoup pour votre aide." },
    { role: "A", text: "Ravi(e) de faire votre connaissance." },
    { role: "B", text: "Moi aussi. À bientôt !" },
  ],
},
{
  id: "e1-3-po-18",
  title: "En visio",
  context: "Situation : en visio. Thème : inviter.",
  roleA: { title: "L'interlocuteur A", vous: "l'interlocuteur A" },
  roleB: { title: "L'interlocuteur B", vous: "l'interlocuteur B" },
  lines: [
    { role: "A", text: "Bonjour, je peux vous aider ?" },
    { role: "B", text: "Oui, bonjour. J'ai une question." },
    { role: "A", text: "Bien sûr. Dites-moi tout." },
    { role: "B", text: "C'est au sujet de inviter." },
    { role: "A", text: "D'accord. Pouvez-vous préciser ?" },
    { role: "B", text: "Oui, je voudrais plus d'informations." },
    { role: "A", text: "Très bien, je note." },
    { role: "B", text: "Merci beaucoup pour votre aide." },
    { role: "A", text: "Ravi(e) de faire votre connaissance." },
    { role: "B", text: "Moi aussi. À bientôt !" },
  ],
},
{
  id: "e1-3-po-19",
  title: "Au guichet",
  context: "Situation : au guichet. Thème : inviter.",
  roleA: { title: "L'interlocuteur A", vous: "l'interlocuteur A" },
  roleB: { title: "L'interlocuteur B", vous: "l'interlocuteur B" },
  lines: [
    { role: "A", text: "Bonjour, je peux vous aider ?" },
    { role: "B", text: "Oui, bonjour. J'ai une question." },
    { role: "A", text: "Bien sûr. Dites-moi tout." },
    { role: "B", text: "C'est au sujet de inviter." },
    { role: "A", text: "D'accord. Pouvez-vous préciser ?" },
    { role: "B", text: "Oui, je voudrais plus d'informations." },
    { role: "A", text: "Très bien, je note." },
    { role: "B", text: "Merci beaucoup pour votre aide." },
    { role: "A", text: "Ravi(e) de faire votre connaissance." },
    { role: "B", text: "Moi aussi. À bientôt !" },
  ],
},
{
  id: "e1-3-po-20",
  title: "Dans un magasin",
  context: "Situation : dans un magasin. Thème : inviter.",
  roleA: { title: "L'interlocuteur A", vous: "l'interlocuteur A" },
  roleB: { title: "L'interlocuteur B", vous: "l'interlocuteur B" },
  lines: [
    { role: "A", text: "Bonjour, je peux vous aider ?" },
    { role: "B", text: "Oui, bonjour. J'ai une question." },
    { role: "A", text: "Bien sûr. Dites-moi tout." },
    { role: "B", text: "C'est au sujet de inviter." },
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

export const E1_3_PE: ExpressPePrompt[] = [
  {
    id: "e1-3-pe-1",
    title: "La carte d'invitation",
    situation: "Vous organisez une fête d'anniversaire et vous écrivez l'invitation pour vos amis.",
    instruction: "Écrivez l'invitation : dites l'occasion, le jour, l'heure et le lieu de la fête.",
    points: ["L'occasion de la fête", "Le jour et l'heure", "Le lieu"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e1-3-pe-2",
    title: "Répondre : oui !",
    situation: "Un ami vous invite à sa fête samedi. Vous êtes libre et très content(e).",
    instruction: "Répondez au message : remerciez, confirmez votre venue et demandez ce que vous pouvez apporter.",
    points: ["Le remerciement", "La confirmation", "Une question sur ce qu'il faut apporter"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e1-3-pe-3",
    title: "Désolé, pas libre",
    situation: "Une amie vous invite à un apéro vendredi, mais vous n'êtes pas libre.",
    instruction: "Répondez : excusez-vous, expliquez pourquoi vous n'êtes pas libre et proposez une autre date.",
    points: ["L'excuse", "La raison", "Une autre date"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e1-3-pe-4",
    title: "Un mot pour les voisins",
    situation: "Vous organisez un apéro dans le jardin de l'immeuble et vous invitez tous les voisins.",
    instruction: "Écrivez le mot pour le hall : l'occasion, le jour et l'heure, et ce que les voisins peuvent apporter.",
    points: ["L'occasion", "Le jour et l'heure", "Ce qu'on peut apporter"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e1-3-pe-5",
    title: "Le pique-nique",
    situation: "Vous organisez un pique-nique dimanche avec vos amis du cours de français.",
    instruction: "Écrivez un message au groupe : le lieu et l'heure, qui apporte quoi, et le plan s'il pleut.",
    points: ["Le lieu et l'heure", "Qui apporte quoi", "Le plan s'il pleut"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e1-3-pe-6",
    title: "Demander des détails",
    situation: "Vous avez reçu une invitation, mais il manque l'heure et le lieu.",
    instruction: "Répondez au message : remerciez et posez trois questions sur la fête.",
    points: ["Le remerciement", "Une question sur l'heure et le lieu", "Une question sur ce qu'il faut apporter"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e1-3-pe-7",
    title: "Annuler la fête",
    situation: "Vous êtes malade et vous devez annuler la fête prévue chez vous samedi.",
    instruction: "Écrivez un message à vos invités : annoncez l'annulation, expliquez pourquoi et proposez une nouvelle date.",
    points: ["L'annulation", "La raison", "Une nouvelle date"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e1-3-pe-8",
    title: "Merci pour la fête",
    situation: "Hier, vous êtes allé(e) à une super fête chez une amie.",
    instruction: "Écrivez un message de remerciement : ce que vous avez aimé, un bon moment de la soirée et une invitation chez vous.",
    points: ["Le remerciement", "Un bon moment de la soirée", "Une invitation chez vous"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e1-3-pe-9",
    title: "Organiser le buffet",
    situation: "Pour la fête de la classe, chaque personne apporte quelque chose pour le buffet.",
    instruction: "Écrivez un message au groupe : proposez une organisation, dites ce que vous apportez et posez une question.",
    points: ["L'organisation du buffet", "Ce que vous apportez", "Une question au groupe"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e1-3-pe-10",
    title: "Raconter la fête",
    situation: "Un ami n'a pas pu venir à la fête de samedi. Il veut tout savoir.",
    instruction: "Racontez la fête : où c'était, qui était là et ce que vous avez mangé et fait.",
    points: ["Le lieu", "Les invités", "Ce que vous avez mangé et fait"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
{
  id: "e1-3-pe-11",
  title: "Texte sur inviter — variante 11",
  situation: "Situation liée au thème « inviter ».",
  instruction: "Écrivez un texte de 50 à 120 mots sur le thème : texte sur inviter — variante 11.",
  points: [
    "Votre introduction",
    "Les détails importants",
    "Une conclusion ou une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e1-3-pe-12",
  title: "Texte sur inviter — variante 12",
  situation: "Situation liée au thème « inviter ».",
  instruction: "Écrivez un texte de 50 à 120 mots sur le thème : texte sur inviter — variante 12.",
  points: [
    "Votre introduction",
    "Les détails importants",
    "Une conclusion ou une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e1-3-pe-13",
  title: "Texte sur inviter — variante 13",
  situation: "Situation liée au thème « inviter ».",
  instruction: "Écrivez un texte de 50 à 120 mots sur le thème : texte sur inviter — variante 13.",
  points: [
    "Votre introduction",
    "Les détails importants",
    "Une conclusion ou une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e1-3-pe-14",
  title: "Texte sur inviter — variante 14",
  situation: "Situation liée au thème « inviter ».",
  instruction: "Écrivez un texte de 50 à 120 mots sur le thème : texte sur inviter — variante 14.",
  points: [
    "Votre introduction",
    "Les détails importants",
    "Une conclusion ou une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e1-3-pe-15",
  title: "Texte sur inviter — variante 15",
  situation: "Situation liée au thème « inviter ».",
  instruction: "Écrivez un texte de 50 à 120 mots sur le thème : texte sur inviter — variante 15.",
  points: [
    "Votre introduction",
    "Les détails importants",
    "Une conclusion ou une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e1-3-pe-16",
  title: "Texte sur inviter — variante 16",
  situation: "Situation liée au thème « inviter ».",
  instruction: "Écrivez un texte de 50 à 120 mots sur le thème : texte sur inviter — variante 16.",
  points: [
    "Votre introduction",
    "Les détails importants",
    "Une conclusion ou une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e1-3-pe-17",
  title: "Texte sur inviter — variante 17",
  situation: "Situation liée au thème « inviter ».",
  instruction: "Écrivez un texte de 50 à 120 mots sur le thème : texte sur inviter — variante 17.",
  points: [
    "Votre introduction",
    "Les détails importants",
    "Une conclusion ou une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e1-3-pe-18",
  title: "Texte sur inviter — variante 18",
  situation: "Situation liée au thème « inviter ».",
  instruction: "Écrivez un texte de 50 à 120 mots sur le thème : texte sur inviter — variante 18.",
  points: [
    "Votre introduction",
    "Les détails importants",
    "Une conclusion ou une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e1-3-pe-19",
  title: "Texte sur inviter — variante 19",
  situation: "Situation liée au thème « inviter ».",
  instruction: "Écrivez un texte de 50 à 120 mots sur le thème : texte sur inviter — variante 19.",
  points: [
    "Votre introduction",
    "Les détails importants",
    "Une conclusion ou une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e1-3-pe-20",
  title: "Texte sur inviter — variante 20",
  situation: "Situation liée au thème « inviter ».",
  instruction: "Écrivez un texte de 50 à 120 mots sur le thème : texte sur inviter — variante 20.",
  points: [
    "Votre introduction",
    "Les détails importants",
    "Une conclusion ou une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
}
];
