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

const CE_TEXT_1 = `Salut Emma !

Ça y est, j'habite dans mon nouvel appartement ! Il est au 2e étage d'un immeuble neuf. Le quartier est calme.
Il y a un grand salon très lumineux. Il y a deux chambres et une cuisine équipée. Il y a une petite salle de bains. J'ai aussi un balcon avec une jolie vue sur le parc.
Mon ancien studio était sombre. Mon ancien quartier était bruyant. Alors, je suis très contente ! Tu veux venir visiter samedi ? On peut manger sur le balcon.

À bientôt,
Léa`;

const CE_POOL_1 = buildExpressPool("e2-1-1", [
q({
    id: "ce-q1",
    textQ: "À quel étage est le nouvel appartement ?",
    text: ["Au 2e", "Au 5e", "Au rez-de-chaussée"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il est au _________ étage d'un immeuble neuf.",
    fill: "2e",
    fillA: ["2", "deuxième", "deuxieme"],
    vfQ: "Le nouvel appartement est au 2e étage.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Comment est le salon ?",
    text: ["Grand et très lumineux", "Petit et sombre", "Vieux et bruyant"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il y a un grand salon très _________.",
    fill: "lumineux",
    vfQ: "Le salon du nouvel appartement est sombre.",
    vfC: 1,
  }),
  q({
    id: "ce-q3",
    textQ: "Combien de chambres y a-t-il ?",
    text: ["Deux", "Une", "Trois"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il y a deux _________ et une cuisine équipée.",
    fill: "chambres",
    vfQ: "L'appartement a trois chambres.",
    vfC: 1,
  }),
  q({
    id: "ce-q4",
    textQ: "Qu'est-ce qu'on voit depuis le balcon ?",
    text: ["Le parc", "La plage", "La montagne"],
    textC: 0,
    img: ["parc", "plage", "montagne"],
    imgC: 0,
    fillQ: "J'ai aussi un balcon avec une jolie vue sur le _________.",
    fill: "parc",
    vfQ: "Depuis le balcon, on voit le parc.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Comment était l'ancien studio ?",
    text: ["Sombre", "Très lumineux", "Grand et neuf"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Mon ancien studio était _________.",
    fill: "sombre",
    vfQ: "L'ancien quartier était calme.",
    vfC: 1,
  }),
  q({
    id: "ce-q6",
    textQ: "Que propose Léa pour samedi ?",
    text: ["De venir visiter l'appartement", "D'aller au cinéma", "De faire les courses"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Tu veux venir _________ samedi ?",
    fill: "visiter",
    vfQ: "Le prix du loyer est indiqué dans le message.",
    vfC: 2,
  }),
  q({
    id: "ce-q7",
    textQ: "Où peut-on manger samedi ?",
    text: ["Sur le balcon", "Dans la cuisine", "Dans le salon"],
    textC: 0,
    img: ["balcon", "cuisine", "salon"],
    imgC: 0,
    fillQ: "On peut manger sur le _________.",
    fill: "balcon",
    vfQ: "On peut manger sur le balcon.",
    vfC: 0,
  }),
]);

const CE_TEXT_2 = `Message à une amie

Salut Emma !
J'habite dans un nouvel appartement. Il est au 3e étage.
Le salon est lumineux. Il y a 2 chambres et une cuisine équipée.
J'ai un balcon avec vue sur le parc. Le quartier est calme.
Tu veux venir visiter samedi ?
Emma`;

const CE_POOL_2 = buildExpressPool("e2-1-2", [
  q({
    id: "ce-q1",
    textQ: "À quel étage est l'appartement ?",
    text: ["Au 3e", "Au 10e", "Au sous-sol"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il est au _________ étage.",
    fill: "3e",
    vfQ: "L'appartement est au 3e étage.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Comment est le salon ?",
    text: ["Lumineux", "sombre", "vieux"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le salon est _________.",
    fill: "lumineux",
    vfQ: "Le salon est lumineux.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Combien de chambres y a-t-il ?",
    text: ["2", "cinq", "zéro"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il y a 2 _________.",
    fill: "chambres",
    vfQ: "Il y a 2 chambres.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Comment est le quartier ?",
    text: ["Calme", "dangereux", "vide"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le quartier est _________.",
    fill: "calme",
    vfQ: "Le quartier est calme.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Que propose l'auteur pour samedi ?",
    text: ["Une visite", "Un dîner au restaurant", "Un voyage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Tu veux venir _________ samedi ?",
    fill: "visiter",
    vfQ: "L'auteur propose une visite samedi.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Qu'est-ce qu'on voit depuis le logement ?",
    text: ["Parc", "la mer", "le désert"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Vue sur le _________.",
    fill: "parc",
    vfQ: "On voit le parc.",
    vfC: 0,
  }),
]);

const CE_TEXT_3 = `Message à une amie

Salut Lucas !
J'habite dans un nouvel appartement. Il est au 1er étage.
Le salon est petit. Il y a 1 chambres et une cuisine équipée.
J'ai un cuisine avec vue sur le rue. Le quartier est bruyant.
Tu veux venir visiter samedi ?
Lucas`;

const CE_POOL_3 = buildExpressPool("e2-1-3", [
  q({
    id: "ce-q1",
    textQ: "À quel étage est l'appartement ?",
    text: ["Au 1er", "Au 10e", "Au sous-sol"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il est au _________ étage.",
    fill: "1er",
    vfQ: "L'appartement est au 1er étage.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Comment est le salon ?",
    text: ["Petit", "sombre", "vieux"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le salon est _________.",
    fill: "petit",
    vfQ: "Le salon est petit.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Combien de chambres y a-t-il ?",
    text: ["1", "cinq", "zéro"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il y a 1 _________.",
    fill: "chambre",
    vfQ: "Il y a 1 chambres.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Comment est le quartier ?",
    text: ["Bruyant", "dangereux", "vide"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le quartier est _________.",
    fill: "bruyant",
    vfQ: "Le quartier est bruyant.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Que propose l'auteur pour samedi ?",
    text: ["Une visite", "Un dîner au restaurant", "Un voyage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Tu veux venir _________ samedi ?",
    fill: "visiter",
    vfQ: "L'auteur propose une visite samedi.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Qu'est-ce qu'on voit depuis le logement ?",
    text: ["Rue", "la mer", "le désert"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Vue sur le _________.",
    fill: "rue",
    vfQ: "On voit le rue.",
    vfC: 0,
  }),
]);

const CE_TEXT_4 = `Message à une amie

Salut Sofia !
J'habite dans un nouvel appartement. Il est au 5e étage.
Le salon est grand. Il y a 3 chambres et une cuisine équipée.
J'ai un terrasse avec vue sur le lac. Le quartier est calme.
Tu veux venir visiter samedi ?
Sofia`;

const CE_POOL_4 = buildExpressPool("e2-1-4", [
  q({
    id: "ce-q1",
    textQ: "À quel étage est l'appartement ?",
    text: ["Au 5e", "Au 10e", "Au sous-sol"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il est au _________ étage.",
    fill: "5e",
    vfQ: "L'appartement est au 5e étage.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Comment est le salon ?",
    text: ["Grand", "sombre", "vieux"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le salon est _________.",
    fill: "grand",
    vfQ: "Le salon est grand.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Combien de chambres y a-t-il ?",
    text: ["3", "cinq", "zéro"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il y a 3 _________.",
    fill: "chambres",
    vfQ: "Il y a 3 chambres.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Comment est le quartier ?",
    text: ["Calme", "dangereux", "vide"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le quartier est _________.",
    fill: "calme",
    vfQ: "Le quartier est calme.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Que propose l'auteur pour samedi ?",
    text: ["Une visite", "Un dîner au restaurant", "Un voyage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Tu veux venir _________ samedi ?",
    fill: "visiter",
    vfQ: "L'auteur propose une visite samedi.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Qu'est-ce qu'on voit depuis le logement ?",
    text: ["Lac", "la mer", "le désert"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Vue sur le _________.",
    fill: "lac",
    vfQ: "On voit le lac.",
    vfC: 0,
  }),
]);

const CE_TEXT_5 = `Message à une amie

Salut Noah !
J'habite dans un nouvel appartement. Il est au rez-de-chaussée étage.
Le salon est sombre. Il y a 1 chambres et une cuisine équipée.
J'ai un jardin avec vue sur le cour. Le quartier est calme.
Tu veux venir visiter samedi ?
Noah`;

const CE_POOL_5 = buildExpressPool("e2-1-5", [
  q({
    id: "ce-q1",
    textQ: "À quel étage est l'appartement ?",
    text: ["Au rez-de-chaussée", "Au 10e", "Au sous-sol"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il est au _________ étage.",
    fill: "rez-de-chaussée",
    vfQ: "L'appartement est au rez-de-chaussée étage.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Comment est le salon ?",
    text: ["Sombre", "sombre", "vieux"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le salon est _________.",
    fill: "sombre",
    vfQ: "Le salon est sombre.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Combien de chambres y a-t-il ?",
    text: ["1", "cinq", "zéro"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il y a 1 _________.",
    fill: "chambre",
    vfQ: "Il y a 1 chambres.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Comment est le quartier ?",
    text: ["Calme", "dangereux", "vide"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le quartier est _________.",
    fill: "calme",
    vfQ: "Le quartier est calme.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Que propose l'auteur pour samedi ?",
    text: ["Une visite", "Un dîner au restaurant", "Un voyage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Tu veux venir _________ samedi ?",
    fill: "visiter",
    vfQ: "L'auteur propose une visite samedi.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Qu'est-ce qu'on voit depuis le logement ?",
    text: ["Cour", "la mer", "le désert"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Vue sur le _________.",
    fill: "cour",
    vfQ: "On voit le cour.",
    vfC: 0,
  }),
]);

const CE_TEXT_6 = `Message à une amie

Salut Lina !
J'habite dans un nouvel appartement. Il est au 4e étage.
Le salon est lumineux. Il y a 2 chambres et une cuisine équipée.
J'ai un balcon avec vue sur le ville. Le quartier est animé.
Tu veux venir visiter samedi ?
Lina`;

const CE_POOL_6 = buildExpressPool("e2-1-6", [
  q({
    id: "ce-q1",
    textQ: "À quel étage est l'appartement ?",
    text: ["Au 4e", "Au 10e", "Au sous-sol"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il est au _________ étage.",
    fill: "4e",
    vfQ: "L'appartement est au 4e étage.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Comment est le salon ?",
    text: ["Lumineux", "sombre", "vieux"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le salon est _________.",
    fill: "lumineux",
    vfQ: "Le salon est lumineux.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Combien de chambres y a-t-il ?",
    text: ["2", "cinq", "zéro"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il y a 2 _________.",
    fill: "chambres",
    vfQ: "Il y a 2 chambres.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Comment est le quartier ?",
    text: ["Animé", "dangereux", "vide"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le quartier est _________.",
    fill: "animé",
    vfQ: "Le quartier est animé.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Que propose l'auteur pour samedi ?",
    text: ["Une visite", "Un dîner au restaurant", "Un voyage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Tu veux venir _________ samedi ?",
    fill: "visiter",
    vfQ: "L'auteur propose une visite samedi.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Qu'est-ce qu'on voit depuis le logement ?",
    text: ["Ville", "la mer", "le désert"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Vue sur le _________.",
    fill: "ville",
    vfQ: "On voit le ville.",
    vfC: 0,
  }),
]);

const CE_TEXT_7 = `Message à une amie

Salut Marco !
J'habite dans un nouvel appartement. Il est au 2e étage.
Le salon est moderne. Il y a 2 chambres et une cuisine équipée.
J'ai un cave avec vue sur le montagne. Le quartier est calme.
Tu veux venir visiter samedi ?
Marco`;

const CE_POOL_7 = buildExpressPool("e2-1-7", [
  q({
    id: "ce-q1",
    textQ: "À quel étage est l'appartement ?",
    text: ["Au 2e", "Au 10e", "Au sous-sol"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il est au _________ étage.",
    fill: "2e",
    vfQ: "L'appartement est au 2e étage.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Comment est le salon ?",
    text: ["Moderne", "sombre", "vieux"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le salon est _________.",
    fill: "moderne",
    vfQ: "Le salon est moderne.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Combien de chambres y a-t-il ?",
    text: ["2", "cinq", "zéro"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il y a 2 _________.",
    fill: "chambres",
    vfQ: "Il y a 2 chambres.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Comment est le quartier ?",
    text: ["Calme", "dangereux", "vide"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le quartier est _________.",
    fill: "calme",
    vfQ: "Le quartier est calme.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Que propose l'auteur pour samedi ?",
    text: ["Une visite", "Un dîner au restaurant", "Un voyage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Tu veux venir _________ samedi ?",
    fill: "visiter",
    vfQ: "L'auteur propose une visite samedi.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Qu'est-ce qu'on voit depuis le logement ?",
    text: ["Montagne", "la mer", "le désert"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Vue sur le _________.",
    fill: "montagne",
    vfQ: "On voit le montagne.",
    vfC: 0,
  }),
]);

const CE_TEXT_8 = `Message à une amie

Salut Amina !
J'habite dans un nouvel appartement. Il est au 6e étage.
Le salon est spacieux. Il y a 3 chambres et une cuisine équipée.
J'ai un vue avec vue sur le forêt. Le quartier est très calme.
Tu veux venir visiter samedi ?
Amina`;

const CE_POOL_8 = buildExpressPool("e2-1-8", [
  q({
    id: "ce-q1",
    textQ: "À quel étage est l'appartement ?",
    text: ["Au 6e", "Au 10e", "Au sous-sol"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il est au _________ étage.",
    fill: "6e",
    vfQ: "L'appartement est au 6e étage.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Comment est le salon ?",
    text: ["Spacieux", "sombre", "vieux"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le salon est _________.",
    fill: "spacieux",
    vfQ: "Le salon est spacieux.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Combien de chambres y a-t-il ?",
    text: ["3", "cinq", "zéro"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il y a 3 _________.",
    fill: "chambres",
    vfQ: "Il y a 3 chambres.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Comment est le quartier ?",
    text: ["Très calme", "dangereux", "vide"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le quartier est _________.",
    fill: "calme",
    vfQ: "Le quartier est très calme.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Que propose l'auteur pour samedi ?",
    text: ["Une visite", "Un dîner au restaurant", "Un voyage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Tu veux venir _________ samedi ?",
    fill: "visiter",
    vfQ: "L'auteur propose une visite samedi.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Qu'est-ce qu'on voit depuis le logement ?",
    text: ["Forêt", "la mer", "le désert"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Vue sur le _________.",
    fill: "forêt",
    vfQ: "On voit le forêt.",
    vfC: 0,
  }),
]);

const CE_TEXT_9 = `Message à une amie

Salut Julien !
J'habite dans un nouvel appartement. Il est au 7e étage.
Le salon est petit. Il y a 1 chambres et une cuisine équipée.
J'ai un fenêtre avec vue sur le gare. Le quartier est bruyant.
Tu veux venir visiter samedi ?
Julien`;

const CE_POOL_9 = buildExpressPool("e2-1-9", [
  q({
    id: "ce-q1",
    textQ: "À quel étage est l'appartement ?",
    text: ["Au 7e", "Au 10e", "Au sous-sol"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il est au _________ étage.",
    fill: "7e",
    vfQ: "L'appartement est au 7e étage.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Comment est le salon ?",
    text: ["Petit", "sombre", "vieux"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le salon est _________.",
    fill: "petit",
    vfQ: "Le salon est petit.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Combien de chambres y a-t-il ?",
    text: ["1", "cinq", "zéro"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il y a 1 _________.",
    fill: "chambre",
    vfQ: "Il y a 1 chambres.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Comment est le quartier ?",
    text: ["Bruyant", "dangereux", "vide"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le quartier est _________.",
    fill: "bruyant",
    vfQ: "Le quartier est bruyant.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Que propose l'auteur pour samedi ?",
    text: ["Une visite", "Un dîner au restaurant", "Un voyage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Tu veux venir _________ samedi ?",
    fill: "visiter",
    vfQ: "L'auteur propose une visite samedi.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Qu'est-ce qu'on voit depuis le logement ?",
    text: ["Gare", "la mer", "le désert"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Vue sur le _________.",
    fill: "gare",
    vfQ: "On voit le gare.",
    vfC: 0,
  }),
]);

const CE_TEXT_10 = `Message à une amie

Salut Fatima !
J'habite dans un nouvel appartement. Il est au 3e étage.
Le salon est chaleureux. Il y a 2 chambres et une cuisine équipée.
J'ai un loggia avec vue sur le jardin. Le quartier est calme.
Tu veux venir visiter samedi ?
Fatima`;

const CE_POOL_10 = buildExpressPool("e2-1-10", [
  q({
    id: "ce-q1",
    textQ: "À quel étage est l'appartement ?",
    text: ["Au 3e", "Au 10e", "Au sous-sol"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il est au _________ étage.",
    fill: "3e",
    vfQ: "L'appartement est au 3e étage.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Comment est le salon ?",
    text: ["Chaleureux", "sombre", "vieux"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le salon est _________.",
    fill: "chaleureux",
    vfQ: "Le salon est chaleureux.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Combien de chambres y a-t-il ?",
    text: ["2", "cinq", "zéro"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il y a 2 _________.",
    fill: "chambres",
    vfQ: "Il y a 2 chambres.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Comment est le quartier ?",
    text: ["Calme", "dangereux", "vide"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le quartier est _________.",
    fill: "calme",
    vfQ: "Le quartier est calme.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Que propose l'auteur pour samedi ?",
    text: ["Une visite", "Un dîner au restaurant", "Un voyage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Tu veux venir _________ samedi ?",
    fill: "visiter",
    vfQ: "L'auteur propose une visite samedi.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Qu'est-ce qu'on voit depuis le logement ?",
    text: ["Jardin", "la mer", "le désert"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Vue sur le _________.",
    fill: "jardin",
    vfQ: "On voit le jardin.",
    vfC: 0,
  }),
]);

const CE_TEXT_11 = `Message à une amie

Salut Pierre !
J'habite dans un nouvel appartement. Il est au 8e étage.
Le salon est lumineux. Il y a 4 chambres et une cuisine équipée.
J'ai un balcon avec vue sur le ciel. Le quartier est calme.
Tu veux venir visiter samedi ?
Pierre`;

const CE_POOL_11 = buildExpressPool("e2-1-11", [
  q({
    id: "ce-q1",
    textQ: "À quel étage est l'appartement ?",
    text: ["Au 8e", "Au 10e", "Au sous-sol"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il est au _________ étage.",
    fill: "8e",
    vfQ: "L'appartement est au 8e étage.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Comment est le salon ?",
    text: ["Lumineux", "sombre", "vieux"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le salon est _________.",
    fill: "lumineux",
    vfQ: "Le salon est lumineux.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Combien de chambres y a-t-il ?",
    text: ["4", "cinq", "zéro"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il y a 4 _________.",
    fill: "chambres",
    vfQ: "Il y a 4 chambres.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Comment est le quartier ?",
    text: ["Calme", "dangereux", "vide"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le quartier est _________.",
    fill: "calme",
    vfQ: "Le quartier est calme.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Que propose l'auteur pour samedi ?",
    text: ["Une visite", "Un dîner au restaurant", "Un voyage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Tu veux venir _________ samedi ?",
    fill: "visiter",
    vfQ: "L'auteur propose une visite samedi.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Qu'est-ce qu'on voit depuis le logement ?",
    text: ["Ciel", "la mer", "le désert"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Vue sur le _________.",
    fill: "ciel",
    vfQ: "On voit le ciel.",
    vfC: 0,
  }),
]);

const CE_TEXT_12 = `Message à une amie

Salut Nadia !
J'habite dans un nouvel appartement. Il est au 2e étage.
Le salon est neuf. Il y a 2 chambres et une cuisine équipée.
J'ai un ascenseur avec vue sur le parc. Le quartier est calme.
Tu veux venir visiter samedi ?
Nadia`;

const CE_POOL_12 = buildExpressPool("e2-1-12", [
  q({
    id: "ce-q1",
    textQ: "À quel étage est l'appartement ?",
    text: ["Au 2e", "Au 10e", "Au sous-sol"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il est au _________ étage.",
    fill: "2e",
    vfQ: "L'appartement est au 2e étage.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Comment est le salon ?",
    text: ["Neuf", "sombre", "vieux"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le salon est _________.",
    fill: "neuf",
    vfQ: "Le salon est neuf.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Combien de chambres y a-t-il ?",
    text: ["2", "cinq", "zéro"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il y a 2 _________.",
    fill: "chambres",
    vfQ: "Il y a 2 chambres.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Comment est le quartier ?",
    text: ["Calme", "dangereux", "vide"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le quartier est _________.",
    fill: "calme",
    vfQ: "Le quartier est calme.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Que propose l'auteur pour samedi ?",
    text: ["Une visite", "Un dîner au restaurant", "Un voyage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Tu veux venir _________ samedi ?",
    fill: "visiter",
    vfQ: "L'auteur propose une visite samedi.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Qu'est-ce qu'on voit depuis le logement ?",
    text: ["Parc", "la mer", "le désert"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Vue sur le _________.",
    fill: "parc",
    vfQ: "On voit le parc.",
    vfC: 0,
  }),
]);

const CE_TEXT_13 = `Message à une amie

Salut Yann !
J'habite dans un nouvel appartement. Il est au 1er étage.
Le salon est ancien. Il y a 1 chambres et une cuisine équipée.
J'ai un grenier avec vue sur le rue. Le quartier est bruyant.
Tu veux venir visiter samedi ?
Yann`;

const CE_POOL_13 = buildExpressPool("e2-1-13", [
  q({
    id: "ce-q1",
    textQ: "À quel étage est l'appartement ?",
    text: ["Au 1er", "Au 10e", "Au sous-sol"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il est au _________ étage.",
    fill: "1er",
    vfQ: "L'appartement est au 1er étage.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Comment est le salon ?",
    text: ["Ancien", "sombre", "vieux"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le salon est _________.",
    fill: "ancien",
    vfQ: "Le salon est ancien.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Combien de chambres y a-t-il ?",
    text: ["1", "cinq", "zéro"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il y a 1 _________.",
    fill: "chambre",
    vfQ: "Il y a 1 chambres.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Comment est le quartier ?",
    text: ["Bruyant", "dangereux", "vide"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le quartier est _________.",
    fill: "bruyant",
    vfQ: "Le quartier est bruyant.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Que propose l'auteur pour samedi ?",
    text: ["Une visite", "Un dîner au restaurant", "Un voyage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Tu veux venir _________ samedi ?",
    fill: "visiter",
    vfQ: "L'auteur propose une visite samedi.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Qu'est-ce qu'on voit depuis le logement ?",
    text: ["Rue", "la mer", "le désert"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Vue sur le _________.",
    fill: "rue",
    vfQ: "On voit le rue.",
    vfC: 0,
  }),
]);

const CE_TEXT_14 = `Message à une amie

Salut Clara !
J'habite dans un nouvel appartement. Il est au 4e étage.
Le salon est grand. Il y a 2 chambres et une cuisine équipée.
J'ai un balcon avec vue sur le rivière. Le quartier est calme.
Tu veux venir visiter samedi ?
Clara`;

const CE_POOL_14 = buildExpressPool("e2-1-14", [
  q({
    id: "ce-q1",
    textQ: "À quel étage est l'appartement ?",
    text: ["Au 4e", "Au 10e", "Au sous-sol"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il est au _________ étage.",
    fill: "4e",
    vfQ: "L'appartement est au 4e étage.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Comment est le salon ?",
    text: ["Grand", "sombre", "vieux"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le salon est _________.",
    fill: "grand",
    vfQ: "Le salon est grand.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Combien de chambres y a-t-il ?",
    text: ["2", "cinq", "zéro"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il y a 2 _________.",
    fill: "chambres",
    vfQ: "Il y a 2 chambres.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Comment est le quartier ?",
    text: ["Calme", "dangereux", "vide"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le quartier est _________.",
    fill: "calme",
    vfQ: "Le quartier est calme.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Que propose l'auteur pour samedi ?",
    text: ["Une visite", "Un dîner au restaurant", "Un voyage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Tu veux venir _________ samedi ?",
    fill: "visiter",
    vfQ: "L'auteur propose une visite samedi.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Qu'est-ce qu'on voit depuis le logement ?",
    text: ["Rivière", "la mer", "le désert"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Vue sur le _________.",
    fill: "rivière",
    vfQ: "On voit le rivière.",
    vfC: 0,
  }),
]);

const CE_TEXT_15 = `Message à une amie

Salut Omar !
J'habite dans un nouvel appartement. Il est au 5e étage.
Le salon est lumineux. Il y a 3 chambres et une cuisine équipée.
J'ai un terrasse avec vue sur le centre. Le quartier est animé.
Tu veux venir visiter samedi ?
Omar`;

const CE_POOL_15 = buildExpressPool("e2-1-15", [
  q({
    id: "ce-q1",
    textQ: "À quel étage est l'appartement ?",
    text: ["Au 5e", "Au 10e", "Au sous-sol"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il est au _________ étage.",
    fill: "5e",
    vfQ: "L'appartement est au 5e étage.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Comment est le salon ?",
    text: ["Lumineux", "sombre", "vieux"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le salon est _________.",
    fill: "lumineux",
    vfQ: "Le salon est lumineux.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Combien de chambres y a-t-il ?",
    text: ["3", "cinq", "zéro"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il y a 3 _________.",
    fill: "chambres",
    vfQ: "Il y a 3 chambres.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Comment est le quartier ?",
    text: ["Animé", "dangereux", "vide"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le quartier est _________.",
    fill: "animé",
    vfQ: "Le quartier est animé.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Que propose l'auteur pour samedi ?",
    text: ["Une visite", "Un dîner au restaurant", "Un voyage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Tu veux venir _________ samedi ?",
    fill: "visiter",
    vfQ: "L'auteur propose une visite samedi.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Qu'est-ce qu'on voit depuis le logement ?",
    text: ["Centre", "la mer", "le désert"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Vue sur le _________.",
    fill: "centre",
    vfQ: "On voit le centre.",
    vfC: 0,
  }),
]);

const CE_TEXT_16 = `Message à une amie

Salut Zoé !
J'habite dans un nouvel appartement. Il est au rez-de-chaussée étage.
Le salon est spacieux. Il y a 2 chambres et une cuisine équipée.
J'ai un jardin avec vue sur le fleurs. Le quartier est calme.
Tu veux venir visiter samedi ?
Zoé`;

const CE_POOL_16 = buildExpressPool("e2-1-16", [
  q({
    id: "ce-q1",
    textQ: "À quel étage est l'appartement ?",
    text: ["Au rez-de-chaussée", "Au 10e", "Au sous-sol"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il est au _________ étage.",
    fill: "rez-de-chaussée",
    vfQ: "L'appartement est au rez-de-chaussée étage.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Comment est le salon ?",
    text: ["Spacieux", "sombre", "vieux"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le salon est _________.",
    fill: "spacieux",
    vfQ: "Le salon est spacieux.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Combien de chambres y a-t-il ?",
    text: ["2", "cinq", "zéro"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il y a 2 _________.",
    fill: "chambres",
    vfQ: "Il y a 2 chambres.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Comment est le quartier ?",
    text: ["Calme", "dangereux", "vide"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le quartier est _________.",
    fill: "calme",
    vfQ: "Le quartier est calme.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Que propose l'auteur pour samedi ?",
    text: ["Une visite", "Un dîner au restaurant", "Un voyage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Tu veux venir _________ samedi ?",
    fill: "visiter",
    vfQ: "L'auteur propose une visite samedi.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Qu'est-ce qu'on voit depuis le logement ?",
    text: ["Fleurs", "la mer", "le désert"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Vue sur le _________.",
    fill: "fleurs",
    vfQ: "On voit le fleurs.",
    vfC: 0,
  }),
]);

const CE_TEXT_17 = `Message à une amie

Salut Hugo !
J'habite dans un nouvel appartement. Il est au 3e étage.
Le salon est petit. Il y a 1 chambres et une cuisine équipée.
J'ai un fenêtre avec vue sur le église. Le quartier est calme.
Tu veux venir visiter samedi ?
Hugo`;

const CE_POOL_17 = buildExpressPool("e2-1-17", [
  q({
    id: "ce-q1",
    textQ: "À quel étage est l'appartement ?",
    text: ["Au 3e", "Au 10e", "Au sous-sol"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il est au _________ étage.",
    fill: "3e",
    vfQ: "L'appartement est au 3e étage.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Comment est le salon ?",
    text: ["Petit", "sombre", "vieux"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le salon est _________.",
    fill: "petit",
    vfQ: "Le salon est petit.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Combien de chambres y a-t-il ?",
    text: ["1", "cinq", "zéro"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il y a 1 _________.",
    fill: "chambre",
    vfQ: "Il y a 1 chambres.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Comment est le quartier ?",
    text: ["Calme", "dangereux", "vide"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le quartier est _________.",
    fill: "calme",
    vfQ: "Le quartier est calme.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Que propose l'auteur pour samedi ?",
    text: ["Une visite", "Un dîner au restaurant", "Un voyage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Tu veux venir _________ samedi ?",
    fill: "visiter",
    vfQ: "L'auteur propose une visite samedi.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Qu'est-ce qu'on voit depuis le logement ?",
    text: ["Église", "la mer", "le désert"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Vue sur le _________.",
    fill: "église",
    vfQ: "On voit le église.",
    vfC: 0,
  }),
]);

const CE_TEXT_18 = `Message à une amie

Salut Inès !
J'habite dans un nouvel appartement. Il est au 6e étage.
Le salon est lumineux. Il y a 2 chambres et une cuisine équipée.
J'ai un balcon avec vue sur le lac. Le quartier est très calme.
Tu veux venir visiter samedi ?
Inès`;

const CE_POOL_18 = buildExpressPool("e2-1-18", [
  q({
    id: "ce-q1",
    textQ: "À quel étage est l'appartement ?",
    text: ["Au 6e", "Au 10e", "Au sous-sol"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il est au _________ étage.",
    fill: "6e",
    vfQ: "L'appartement est au 6e étage.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Comment est le salon ?",
    text: ["Lumineux", "sombre", "vieux"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le salon est _________.",
    fill: "lumineux",
    vfQ: "Le salon est lumineux.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Combien de chambres y a-t-il ?",
    text: ["2", "cinq", "zéro"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il y a 2 _________.",
    fill: "chambres",
    vfQ: "Il y a 2 chambres.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Comment est le quartier ?",
    text: ["Très calme", "dangereux", "vide"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le quartier est _________.",
    fill: "calme",
    vfQ: "Le quartier est très calme.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Que propose l'auteur pour samedi ?",
    text: ["Une visite", "Un dîner au restaurant", "Un voyage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Tu veux venir _________ samedi ?",
    fill: "visiter",
    vfQ: "L'auteur propose une visite samedi.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Qu'est-ce qu'on voit depuis le logement ?",
    text: ["Lac", "la mer", "le désert"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Vue sur le _________.",
    fill: "lac",
    vfQ: "On voit le lac.",
    vfC: 0,
  }),
]);

const CE_TEXT_19 = `Message à une amie

Salut David !
J'habite dans un nouvel appartement. Il est au 2e étage.
Le salon est moderne. Il y a 3 chambres et une cuisine équipée.
J'ai un cuisine avec vue sur le quartier. Le quartier est calme.
Tu veux venir visiter samedi ?
David`;

const CE_POOL_19 = buildExpressPool("e2-1-19", [
  q({
    id: "ce-q1",
    textQ: "À quel étage est l'appartement ?",
    text: ["Au 2e", "Au 10e", "Au sous-sol"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il est au _________ étage.",
    fill: "2e",
    vfQ: "L'appartement est au 2e étage.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Comment est le salon ?",
    text: ["Moderne", "sombre", "vieux"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le salon est _________.",
    fill: "moderne",
    vfQ: "Le salon est moderne.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Combien de chambres y a-t-il ?",
    text: ["3", "cinq", "zéro"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il y a 3 _________.",
    fill: "chambres",
    vfQ: "Il y a 3 chambres.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Comment est le quartier ?",
    text: ["Calme", "dangereux", "vide"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le quartier est _________.",
    fill: "calme",
    vfQ: "Le quartier est calme.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Que propose l'auteur pour samedi ?",
    text: ["Une visite", "Un dîner au restaurant", "Un voyage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Tu veux venir _________ samedi ?",
    fill: "visiter",
    vfQ: "L'auteur propose une visite samedi.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Qu'est-ce qu'on voit depuis le logement ?",
    text: ["Quartier", "la mer", "le désert"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Vue sur le _________.",
    fill: "quartier",
    vfQ: "On voit le quartier.",
    vfC: 0,
  }),
]);

const CE_TEXT_20 = `Message à une amie

Salut Maya !
J'habite dans un nouvel appartement. Il est au 7e étage.
Le salon est grand. Il y a 2 chambres et une cuisine équipée.
J'ai un vue avec vue sur le ville. Le quartier est calme.
Tu veux venir visiter samedi ?
Maya`;

const CE_POOL_20 = buildExpressPool("e2-1-20", [
  q({
    id: "ce-q1",
    textQ: "À quel étage est l'appartement ?",
    text: ["Au 7e", "Au 10e", "Au sous-sol"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il est au _________ étage.",
    fill: "7e",
    vfQ: "L'appartement est au 7e étage.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Comment est le salon ?",
    text: ["Grand", "sombre", "vieux"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le salon est _________.",
    fill: "grand",
    vfQ: "Le salon est grand.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Combien de chambres y a-t-il ?",
    text: ["2", "cinq", "zéro"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il y a 2 _________.",
    fill: "chambres",
    vfQ: "Il y a 2 chambres.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Comment est le quartier ?",
    text: ["Calme", "dangereux", "vide"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le quartier est _________.",
    fill: "calme",
    vfQ: "Le quartier est calme.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Que propose l'auteur pour samedi ?",
    text: ["Une visite", "Un dîner au restaurant", "Un voyage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Tu veux venir _________ samedi ?",
    fill: "visiter",
    vfQ: "L'auteur propose une visite samedi.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Qu'est-ce qu'on voit depuis le logement ?",
    text: ["Ville", "la mer", "le désert"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Vue sur le _________.",
    fill: "ville",
    vfQ: "On voit le ville.",
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
  title: "À la mairie",
  context: "Situation : à la mairie. Thème : le logement.",
  roleA: { title: "L'interlocuteur A", vous: "l'interlocuteur A" },
  roleB: { title: "L'interlocuteur B", vous: "l'interlocuteur B" },
  lines: [
    { role: "A", text: "Bonjour, je peux vous aider ?" },
    { role: "B", text: "Oui, bonjour. J'ai une question." },
    { role: "A", text: "Bien sûr. Dites-moi tout." },
    { role: "B", text: "C'est au sujet de le logement." },
    { role: "A", text: "D'accord. Pouvez-vous préciser ?" },
    { role: "B", text: "Oui, je voudrais plus d'informations." },
    { role: "A", text: "Très bien, je note." },
    { role: "B", text: "Merci beaucoup pour votre aide." },
    { role: "A", text: "Ravi(e) de faire votre connaissance." },
    { role: "B", text: "Moi aussi. À bientôt !" },
  ],
},
{
  id: "e2-1-po-12",
  title: "Au téléphone",
  context: "Situation : au téléphone. Thème : le logement.",
  roleA: { title: "L'interlocuteur A", vous: "l'interlocuteur A" },
  roleB: { title: "L'interlocuteur B", vous: "l'interlocuteur B" },
  lines: [
    { role: "A", text: "Bonjour, je peux vous aider ?" },
    { role: "B", text: "Oui, bonjour. J'ai une question." },
    { role: "A", text: "Bien sûr. Dites-moi tout." },
    { role: "B", text: "C'est au sujet de le logement." },
    { role: "A", text: "D'accord. Pouvez-vous préciser ?" },
    { role: "B", text: "Oui, je voudrais plus d'informations." },
    { role: "A", text: "Très bien, je note." },
    { role: "B", text: "Merci beaucoup pour votre aide." },
    { role: "A", text: "Ravi(e) de faire votre connaissance." },
    { role: "B", text: "Moi aussi. À bientôt !" },
  ],
},
{
  id: "e2-1-po-13",
  title: "Chez le voisin",
  context: "Situation : chez le voisin. Thème : le logement.",
  roleA: { title: "L'interlocuteur A", vous: "l'interlocuteur A" },
  roleB: { title: "L'interlocuteur B", vous: "l'interlocuteur B" },
  lines: [
    { role: "A", text: "Bonjour, je peux vous aider ?" },
    { role: "B", text: "Oui, bonjour. J'ai une question." },
    { role: "A", text: "Bien sûr. Dites-moi tout." },
    { role: "B", text: "C'est au sujet de le logement." },
    { role: "A", text: "D'accord. Pouvez-vous préciser ?" },
    { role: "B", text: "Oui, je voudrais plus d'informations." },
    { role: "A", text: "Très bien, je note." },
    { role: "B", text: "Merci beaucoup pour votre aide." },
    { role: "A", text: "Ravi(e) de faire votre connaissance." },
    { role: "B", text: "Moi aussi. À bientôt !" },
  ],
},
{
  id: "e2-1-po-14",
  title: "À l'accueil",
  context: "Situation : à l'accueil. Thème : le logement.",
  roleA: { title: "L'interlocuteur A", vous: "l'interlocuteur A" },
  roleB: { title: "L'interlocuteur B", vous: "l'interlocuteur B" },
  lines: [
    { role: "A", text: "Bonjour, je peux vous aider ?" },
    { role: "B", text: "Oui, bonjour. J'ai une question." },
    { role: "A", text: "Bien sûr. Dites-moi tout." },
    { role: "B", text: "C'est au sujet de le logement." },
    { role: "A", text: "D'accord. Pouvez-vous préciser ?" },
    { role: "B", text: "Oui, je voudrais plus d'informations." },
    { role: "A", text: "Très bien, je note." },
    { role: "B", text: "Merci beaucoup pour votre aide." },
    { role: "A", text: "Ravi(e) de faire votre connaissance." },
    { role: "B", text: "Moi aussi. À bientôt !" },
  ],
},
{
  id: "e2-1-po-15",
  title: "Dans la rue",
  context: "Situation : dans la rue. Thème : le logement.",
  roleA: { title: "L'interlocuteur A", vous: "l'interlocuteur A" },
  roleB: { title: "L'interlocuteur B", vous: "l'interlocuteur B" },
  lines: [
    { role: "A", text: "Bonjour, je peux vous aider ?" },
    { role: "B", text: "Oui, bonjour. J'ai une question." },
    { role: "A", text: "Bien sûr. Dites-moi tout." },
    { role: "B", text: "C'est au sujet de le logement." },
    { role: "A", text: "D'accord. Pouvez-vous préciser ?" },
    { role: "B", text: "Oui, je voudrais plus d'informations." },
    { role: "A", text: "Très bien, je note." },
    { role: "B", text: "Merci beaucoup pour votre aide." },
    { role: "A", text: "Ravi(e) de faire votre connaissance." },
    { role: "B", text: "Moi aussi. À bientôt !" },
  ],
},
{
  id: "e2-1-po-16",
  title: "Au bureau",
  context: "Situation : au bureau. Thème : le logement.",
  roleA: { title: "L'interlocuteur A", vous: "l'interlocuteur A" },
  roleB: { title: "L'interlocuteur B", vous: "l'interlocuteur B" },
  lines: [
    { role: "A", text: "Bonjour, je peux vous aider ?" },
    { role: "B", text: "Oui, bonjour. J'ai une question." },
    { role: "A", text: "Bien sûr. Dites-moi tout." },
    { role: "B", text: "C'est au sujet de le logement." },
    { role: "A", text: "D'accord. Pouvez-vous préciser ?" },
    { role: "B", text: "Oui, je voudrais plus d'informations." },
    { role: "A", text: "Très bien, je note." },
    { role: "B", text: "Merci beaucoup pour votre aide." },
    { role: "A", text: "Ravi(e) de faire votre connaissance." },
    { role: "B", text: "Moi aussi. À bientôt !" },
  ],
},
{
  id: "e2-1-po-17",
  title: "À la réception",
  context: "Situation : à la réception. Thème : le logement.",
  roleA: { title: "L'interlocuteur A", vous: "l'interlocuteur A" },
  roleB: { title: "L'interlocuteur B", vous: "l'interlocuteur B" },
  lines: [
    { role: "A", text: "Bonjour, je peux vous aider ?" },
    { role: "B", text: "Oui, bonjour. J'ai une question." },
    { role: "A", text: "Bien sûr. Dites-moi tout." },
    { role: "B", text: "C'est au sujet de le logement." },
    { role: "A", text: "D'accord. Pouvez-vous préciser ?" },
    { role: "B", text: "Oui, je voudrais plus d'informations." },
    { role: "A", text: "Très bien, je note." },
    { role: "B", text: "Merci beaucoup pour votre aide." },
    { role: "A", text: "Ravi(e) de faire votre connaissance." },
    { role: "B", text: "Moi aussi. À bientôt !" },
  ],
},
{
  id: "e2-1-po-18",
  title: "En visio",
  context: "Situation : en visio. Thème : le logement.",
  roleA: { title: "L'interlocuteur A", vous: "l'interlocuteur A" },
  roleB: { title: "L'interlocuteur B", vous: "l'interlocuteur B" },
  lines: [
    { role: "A", text: "Bonjour, je peux vous aider ?" },
    { role: "B", text: "Oui, bonjour. J'ai une question." },
    { role: "A", text: "Bien sûr. Dites-moi tout." },
    { role: "B", text: "C'est au sujet de le logement." },
    { role: "A", text: "D'accord. Pouvez-vous préciser ?" },
    { role: "B", text: "Oui, je voudrais plus d'informations." },
    { role: "A", text: "Très bien, je note." },
    { role: "B", text: "Merci beaucoup pour votre aide." },
    { role: "A", text: "Ravi(e) de faire votre connaissance." },
    { role: "B", text: "Moi aussi. À bientôt !" },
  ],
},
{
  id: "e2-1-po-19",
  title: "Au guichet",
  context: "Situation : au guichet. Thème : le logement.",
  roleA: { title: "L'interlocuteur A", vous: "l'interlocuteur A" },
  roleB: { title: "L'interlocuteur B", vous: "l'interlocuteur B" },
  lines: [
    { role: "A", text: "Bonjour, je peux vous aider ?" },
    { role: "B", text: "Oui, bonjour. J'ai une question." },
    { role: "A", text: "Bien sûr. Dites-moi tout." },
    { role: "B", text: "C'est au sujet de le logement." },
    { role: "A", text: "D'accord. Pouvez-vous préciser ?" },
    { role: "B", text: "Oui, je voudrais plus d'informations." },
    { role: "A", text: "Très bien, je note." },
    { role: "B", text: "Merci beaucoup pour votre aide." },
    { role: "A", text: "Ravi(e) de faire votre connaissance." },
    { role: "B", text: "Moi aussi. À bientôt !" },
  ],
},
{
  id: "e2-1-po-20",
  title: "Dans un magasin",
  context: "Situation : dans un magasin. Thème : le logement.",
  roleA: { title: "L'interlocuteur A", vous: "l'interlocuteur A" },
  roleB: { title: "L'interlocuteur B", vous: "l'interlocuteur B" },
  lines: [
    { role: "A", text: "Bonjour, je peux vous aider ?" },
    { role: "B", text: "Oui, bonjour. J'ai une question." },
    { role: "A", text: "Bien sûr. Dites-moi tout." },
    { role: "B", text: "C'est au sujet de le logement." },
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

export const E2_1_PE: ExpressPePrompt[] = [
  {
    id: "e2-1-pe-1",
    title: "Décrire son logement à un ami",
    situation: "Vous venez d'emménager dans un nouveau logement et vous écrivez à un ami.",
    instruction: "Écrivez un message à votre ami : décrivez votre logement, les pièces et le quartier.",
    points: ["Le type de logement et l'étage", "Les pièces", "Le quartier"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-1-pe-2",
    title: "Petite annonce de location",
    situation: "Vous partez six mois à l'étranger et vous voulez louer votre appartement.",
    instruction: "Écrivez une petite annonce : décrivez l'appartement, ses avantages et le quartier.",
    points: ["Les pièces", "Deux avantages (lumineux, balcon…)", "Le quartier"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-1-pe-3",
    title: "Invitation à visiter",
    situation: "Vous invitez un ami à découvrir votre nouvel appartement samedi.",
    instruction: "Écrivez un message d'invitation : proposez un jour et une heure, expliquez où vous habitez et décrivez un peu l'appartement.",
    points: ["Le jour et l'heure", "L'étage et l'immeuble", "Une description courte"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-1-pe-4",
    title: "Le logement de vos rêves",
    situation: "Un site internet demande aux lecteurs de décrire le logement de leurs rêves.",
    instruction: "Décrivez le logement de vos rêves : le type de logement, les pièces et l'endroit où il se trouve.",
    points: ["Maison ou appartement", "Les pièces importantes", "L'endroit (ville, campagne…)"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-1-pe-5",
    title: "Ancien et nouveau logement",
    situation: "Vous avez déménagé le mois dernier.",
    instruction: "Comparez votre ancien logement et votre nouveau logement, puis dites lequel vous préférez et pourquoi.",
    points: ["L'ancien logement", "Le nouveau logement", "Votre préférence et pourquoi"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-1-pe-6",
    title: "E-mail à l'agence immobilière",
    situation: "Vous cherchez un appartement et vous écrivez à une agence immobilière.",
    instruction: "Écrivez un e-mail : expliquez quel logement vous cherchez, dans quel quartier, et demandez une visite.",
    points: ["Le nombre de pièces", "Le quartier souhaité", "La demande de visite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-1-pe-7",
    title: "Ma pièce préférée",
    situation: "Un ami vous demande quelle est votre pièce préférée à la maison.",
    instruction: "Décrivez votre pièce préférée : les meubles, la lumière et pourquoi vous aimez cette pièce.",
    points: ["Les meubles", "La lumière (lumineux, sombre…)", "Pourquoi vous l'aimez"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-1-pe-8",
    title: "E-mail à la famille",
    situation: "Vous habitez maintenant dans un nouveau pays et votre famille veut voir votre logement.",
    instruction: "Écrivez un e-mail à votre famille : décrivez l'immeuble, les pièces et ce que vous aimez dans ce logement.",
    points: ["L'immeuble et l'étage", "Les pièces", "Ce que vous aimez"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-1-pe-9",
    title: "Décrire son quartier",
    situation: "Un ami veut habiter dans votre quartier et vous pose des questions.",
    instruction: "Décrivez votre quartier : les magasins, les transports et l'ambiance (calme ou bruyant).",
    points: ["Les magasins", "Les transports", "L'ambiance du quartier"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-1-pe-10",
    title: "Conseils pour chercher un logement",
    situation: "Un ami arrive dans votre ville et cherche son premier logement.",
    instruction: "Écrivez un message avec vos conseils : quel type de logement chercher, dans quel quartier et quoi vérifier pendant la visite.",
    points: ["Le type de logement", "Le quartier", "Deux choses à vérifier (lumière, cuisine…)"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
{
  id: "e2-1-pe-11",
  title: "Texte sur le logement — variante 11",
  situation: "Situation liée au thème « le logement ».",
  instruction: "Écrivez un texte de 50 à 120 mots sur le thème : texte sur le logement — variante 11.",
  points: [
    "Votre introduction",
    "Les détails importants",
    "Une conclusion ou une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e2-1-pe-12",
  title: "Texte sur le logement — variante 12",
  situation: "Situation liée au thème « le logement ».",
  instruction: "Écrivez un texte de 50 à 120 mots sur le thème : texte sur le logement — variante 12.",
  points: [
    "Votre introduction",
    "Les détails importants",
    "Une conclusion ou une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e2-1-pe-13",
  title: "Texte sur le logement — variante 13",
  situation: "Situation liée au thème « le logement ».",
  instruction: "Écrivez un texte de 50 à 120 mots sur le thème : texte sur le logement — variante 13.",
  points: [
    "Votre introduction",
    "Les détails importants",
    "Une conclusion ou une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e2-1-pe-14",
  title: "Texte sur le logement — variante 14",
  situation: "Situation liée au thème « le logement ».",
  instruction: "Écrivez un texte de 50 à 120 mots sur le thème : texte sur le logement — variante 14.",
  points: [
    "Votre introduction",
    "Les détails importants",
    "Une conclusion ou une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e2-1-pe-15",
  title: "Texte sur le logement — variante 15",
  situation: "Situation liée au thème « le logement ».",
  instruction: "Écrivez un texte de 50 à 120 mots sur le thème : texte sur le logement — variante 15.",
  points: [
    "Votre introduction",
    "Les détails importants",
    "Une conclusion ou une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e2-1-pe-16",
  title: "Texte sur le logement — variante 16",
  situation: "Situation liée au thème « le logement ».",
  instruction: "Écrivez un texte de 50 à 120 mots sur le thème : texte sur le logement — variante 16.",
  points: [
    "Votre introduction",
    "Les détails importants",
    "Une conclusion ou une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e2-1-pe-17",
  title: "Texte sur le logement — variante 17",
  situation: "Situation liée au thème « le logement ».",
  instruction: "Écrivez un texte de 50 à 120 mots sur le thème : texte sur le logement — variante 17.",
  points: [
    "Votre introduction",
    "Les détails importants",
    "Une conclusion ou une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e2-1-pe-18",
  title: "Texte sur le logement — variante 18",
  situation: "Situation liée au thème « le logement ».",
  instruction: "Écrivez un texte de 50 à 120 mots sur le thème : texte sur le logement — variante 18.",
  points: [
    "Votre introduction",
    "Les détails importants",
    "Une conclusion ou une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e2-1-pe-19",
  title: "Texte sur le logement — variante 19",
  situation: "Situation liée au thème « le logement ».",
  instruction: "Écrivez un texte de 50 à 120 mots sur le thème : texte sur le logement — variante 19.",
  points: [
    "Votre introduction",
    "Les détails importants",
    "Une conclusion ou une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e2-1-pe-20",
  title: "Texte sur le logement — variante 20",
  situation: "Situation liée au thème « le logement ».",
  instruction: "Écrivez un texte de 50 à 120 mots sur le thème : texte sur le logement — variante 20.",
  points: [
    "Votre introduction",
    "Les détails importants",
    "Une conclusion ou une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
}
];
