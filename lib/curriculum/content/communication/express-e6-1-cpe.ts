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


/* ── Compréhension écrite — E6.1 Demander son chemin ── */

const E6_1_CE_TEXT_1 = `Panneau — Rue de la Gare

Gare : tout droit 300 m, puis à gauche.
Musée : à droite après le pont.
Hôtel Central : deuxième rue à droite.
Un point d'eau potable est gratuit près de l'entrée.
En cas de perte d'objet, passez à l'accueil.
Le service client répond aussi par téléphone.
Bonne visite et merci de votre attention.
Voici quelques détails utiles pour la suite.
Lisez bien jusqu'à la fin, s'il vous plaît.
Respectez la file d'attente, s'il vous plaît.`;

const E6_1_CE_POOL_1 = buildExpressPool("e6-1-ce-1", [
  q({
    id: "ce-q1",
    textQ: "Où est Gare ?",
    text: ["tout droit 300 m, puis à gauche", "Au hasard", "Inconnu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Gare : _________.",
    fill: "tout",
    vfQ: "Gare : tout droit 300 m, puis à gauche.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Où est Musée ?",
    text: ["à droite après le pont", "Tout droit", "En haut"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Musée : _________.",
    fill: "à",
    vfQ: "Musée : à droite après le pont.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où est Hôtel Central ?",
    text: ["deuxième rue à droite", "Derrière", "Loin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Hôtel Central : _________.",
    fill: "deuxième",
    vfQ: "Hôtel Central : deuxième rue à droite.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel type de document ?",
    text: ["Un panneau de directions", "Un menu", "Une facture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Panneau — _________.",
    fill: "Gare",
    vfQ: "C'est un panneau.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "La rue s'appelle comment ?",
    text: ["Rue de la Gare", "Rue du Soleil", "Avenue Paris"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Panneau — _________.",
    fill: "Rue de la Gare",
    vfQ: "Rue : Rue de la Gare.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Peut-on lire des directions ?",
    text: ["Oui", "Non", "On ne sait pas"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Panneau de _________.",
    fill: "directions",
    vfQ: "Oui, des directions.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Combien de destinations ?",
    text: ["Trois", "Une", "Dix"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Trois _________.",
    fill: "destinations",
    vfQ: "Trois destinations.",
    vfC: 0,
  }),
]);
const E6_1_CE_TEXT_2 = `Panneau — Place du Marché

Mairie : tout droit 200 m.
Église : à gauche place Saint-Pierre.
Port : au fond, après le parking.
Ce document complète les informations déjà données.
Nous comptons sur vous.
Il y a une fontaine d'eau près de l'entrée principale.
Les places assises sont limitées le week-end.
Un agent peut vous accompagner jusqu'au bon guichet.
Le bâtiment est ouvert dès 8 heures.
Le service client répond aussi par téléphone.`;

const E6_1_CE_POOL_2 = buildExpressPool("e6-1-ce-2", [
  q({
    id: "ce-q1",
    textQ: "Où est Mairie ?",
    text: ["tout droit 200 m", "Au hasard", "Inconnu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Mairie : _________.",
    fill: "tout",
    vfQ: "Mairie : tout droit 200 m.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Où est Église ?",
    text: ["à gauche place Saint-Pierre", "Tout droit", "En haut"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Église : _________.",
    fill: "à",
    vfQ: "Église : à gauche place Saint-Pierre.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où est Port ?",
    text: ["au fond, après le parking", "Derrière", "Loin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Port : _________.",
    fill: "au",
    vfQ: "Port : au fond, après le parking.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel type de document ?",
    text: ["Un panneau de directions", "Un menu", "Une facture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Panneau — _________.",
    fill: "Marché",
    vfQ: "C'est un panneau.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "La rue s'appelle comment ?",
    text: ["Place du Marché", "Rue du Soleil", "Avenue Paris"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Panneau — _________.",
    fill: "Place du Marché",
    vfQ: "Rue : Place du Marché.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Peut-on lire des directions ?",
    text: ["Oui", "Non", "On ne sait pas"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Panneau de _________.",
    fill: "directions",
    vfQ: "Oui, des directions.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Combien de destinations ?",
    text: ["Trois", "Une", "Dix"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Trois _________.",
    fill: "destinations",
    vfQ: "Trois destinations.",
    vfC: 0,
  }),
]);
const E6_1_CE_TEXT_3 = `Panneau — Avenue du Lac

Plage : descendre vers le lac.
Office du tourisme : face à la gare.
Musée : rue du Temple, à droite.
Un plan simple est affiché juste à côté.
Les personnes à mobilité réduite sont prioritaires.
Pour plus d'infos, scannez le QR code ou demandez au guichet.
Nous vous remercions de votre patience.
Les toilettes se trouvent au fond du couloir.
Une version en plusieurs langues est disponible à l'accueil.
À bientôt, et merci de votre lecture.`;

const E6_1_CE_POOL_3 = buildExpressPool("e6-1-ce-3", [
  q({
    id: "ce-q1",
    textQ: "Où est Plage ?",
    text: ["descendre vers le lac", "Au hasard", "Inconnu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Plage : _________.",
    fill: "descendre",
    vfQ: "Plage : descendre vers le lac.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Où est Office du tourisme ?",
    text: ["face à la gare", "Tout droit", "En haut"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Office du tourisme : _________.",
    fill: "face",
    vfQ: "Office du tourisme : face à la gare.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où est Musée ?",
    text: ["rue du Temple, à droite", "Derrière", "Loin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Musée : _________.",
    fill: "rue",
    vfQ: "Musée : rue du Temple, à droite.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel type de document ?",
    text: ["Un panneau de directions", "Un menu", "Une facture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Panneau — _________.",
    fill: "Lac",
    vfQ: "C'est un panneau.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "La rue s'appelle comment ?",
    text: ["Avenue du Lac", "Rue du Soleil", "Avenue Paris"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Panneau — _________.",
    fill: "Avenue du Lac",
    vfQ: "Rue : Avenue du Lac.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Peut-on lire des directions ?",
    text: ["Oui", "Non", "On ne sait pas"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Panneau de _________.",
    fill: "directions",
    vfQ: "Oui, des directions.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Combien de destinations ?",
    text: ["Trois", "Une", "Dix"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Trois _________.",
    fill: "destinations",
    vfQ: "Trois destinations.",
    vfC: 0,
  }),
]);
const E6_1_CE_TEXT_4 = `Panneau — Quartier Gare

Guichet CFF : hall principal.
Métro M2 : niveau -1, flèches bleues.
Taxis : sortie nord.
Les horaires habituels restent les mêmes.
Une question ? Écrivez ou téléphonez.
Merci encore, et à bientôt.
Tout est organisé pour que ce soit simple.
Le contact est indiqué dans le message.
N'oubliez pas de vérifier la date.`;

const E6_1_CE_POOL_4 = buildExpressPool("e6-1-ce-4", [
  q({
    id: "ce-q1",
    textQ: "Où est Guichet CFF ?",
    text: ["hall principal", "Au hasard", "Inconnu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Guichet CFF : _________.",
    fill: "hall",
    vfQ: "Guichet CFF : hall principal.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Où est Métro M2 ?",
    text: ["niveau -1, flèches bleues", "Tout droit", "En haut"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Métro M2 : _________.",
    fill: "niveau",
    vfQ: "Métro M2 : niveau -1, flèches bleues.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où est Taxis ?",
    text: ["sortie nord", "Derrière", "Loin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Taxis : _________.",
    fill: "sortie",
    vfQ: "Taxis : sortie nord.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel type de document ?",
    text: ["Un panneau de directions", "Un menu", "Une facture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Panneau — _________.",
    fill: "Gare",
    vfQ: "C'est un panneau.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "La rue s'appelle comment ?",
    text: ["Quartier Gare", "Rue du Soleil", "Avenue Paris"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Panneau — _________.",
    fill: "Quartier Gare",
    vfQ: "Rue : Quartier Gare.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Peut-on lire des directions ?",
    text: ["Oui", "Non", "On ne sait pas"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Panneau de _________.",
    fill: "directions",
    vfQ: "Oui, des directions.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Combien de destinations ?",
    text: ["Trois", "Une", "Dix"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Trois _________.",
    fill: "destinations",
    vfQ: "Trois destinations.",
    vfC: 0,
  }),
]);
const E6_1_CE_TEXT_5 = `Panneau — Vieille Ville

Cathédrale : monter la rue Pierre.
Château : au sommet de la colline.
Place de la Palud : redescendre rue du Grand-Pont.
Voici quelques détails utiles pour la suite.
Lisez bien jusqu'à la fin, s'il vous plaît.
Vous pouvez demander de l'aide si besoin.
Les informations importantes sont déjà notées plus haut.
Le lieu est facile à trouver avec les indications.
Merci de votre attention et de votre patience.
Une confirmation arrivera ensuite.`;

const E6_1_CE_POOL_5 = buildExpressPool("e6-1-ce-5", [
  q({
    id: "ce-q1",
    textQ: "Où est Cathédrale ?",
    text: ["monter la rue Pierre", "Au hasard", "Inconnu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Cathédrale : _________.",
    fill: "monter",
    vfQ: "Cathédrale : monter la rue Pierre.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Où est Château ?",
    text: ["au sommet de la colline", "Tout droit", "En haut"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Château : _________.",
    fill: "au",
    vfQ: "Château : au sommet de la colline.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où est Place de la Palud ?",
    text: ["redescendre rue du Grand-Pont", "Derrière", "Loin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Place de la Palud : _________.",
    fill: "redescendre",
    vfQ: "Place de la Palud : redescendre rue du Grand-Pont.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel type de document ?",
    text: ["Un panneau de directions", "Un menu", "Une facture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Panneau — _________.",
    fill: "Ville",
    vfQ: "C'est un panneau.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "La rue s'appelle comment ?",
    text: ["Vieille Ville", "Rue du Soleil", "Avenue Paris"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Panneau — _________.",
    fill: "Vieille Ville",
    vfQ: "Rue : Vieille Ville.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Peut-on lire des directions ?",
    text: ["Oui", "Non", "On ne sait pas"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Panneau de _________.",
    fill: "directions",
    vfQ: "Oui, des directions.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Combien de destinations ?",
    text: ["Trois", "Une", "Dix"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Trois _________.",
    fill: "destinations",
    vfQ: "Trois destinations.",
    vfC: 0,
  }),
]);
const E6_1_CE_TEXT_6 = `Panneau — Bord du lac

Jetée : promenade vers l'ouest.
Restaurant du Port : après les bateaux.
Parc : derrière l'hôtel Beau-Rivage.
Une question ? Écrivez ou téléphonez.
Merci encore, et à bientôt.
Tout est organisé pour que ce soit simple.
Le contact est indiqué dans le message.
N'oubliez pas de vérifier la date.
Bonne journée à toutes et à tous.`;

const E6_1_CE_POOL_6 = buildExpressPool("e6-1-ce-6", [
  q({
    id: "ce-q1",
    textQ: "Où est Jetée ?",
    text: ["promenade vers l'ouest", "Au hasard", "Inconnu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Jetée : _________.",
    fill: "promenade",
    vfQ: "Jetée : promenade vers l'ouest.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Où est Restaurant du Port ?",
    text: ["après les bateaux", "Tout droit", "En haut"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Restaurant du Port : _________.",
    fill: "après",
    vfQ: "Restaurant du Port : après les bateaux.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où est Parc ?",
    text: ["derrière l'hôtel Beau-Rivage", "Derrière", "Loin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Parc : _________.",
    fill: "derrière",
    vfQ: "Parc : derrière l'hôtel Beau-Rivage.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel type de document ?",
    text: ["Un panneau de directions", "Un menu", "Une facture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Panneau — _________.",
    fill: "lac",
    vfQ: "C'est un panneau.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "La rue s'appelle comment ?",
    text: ["Bord du lac", "Rue du Soleil", "Avenue Paris"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Panneau — _________.",
    fill: "Bord du lac",
    vfQ: "Rue : Bord du lac.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Peut-on lire des directions ?",
    text: ["Oui", "Non", "On ne sait pas"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Panneau de _________.",
    fill: "directions",
    vfQ: "Oui, des directions.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Combien de destinations ?",
    text: ["Trois", "Une", "Dix"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Trois _________.",
    fill: "destinations",
    vfQ: "Trois destinations.",
    vfC: 0,
  }),
]);
const E6_1_CE_TEXT_7 = `Panneau — Campus UNIL

Bibliothèque : bâtiment Anthropole.
Mensa : face au parking.
Arrêt bus : devant le bâtiment Géopolis.
Si tu veux, on peut faire une liste ensemble.
Le budget reste simple et raisonnable.
On pourra aussi inviter une autre personne.
C'est important pour moi, merci beaucoup.
Merci de lire attentivement toutes les informations.
En cas de doute, demandez de l'aide à l'accueil.
Les horaires peuvent changer en cas d'urgence.`;

const E6_1_CE_POOL_7 = buildExpressPool("e6-1-ce-7", [
  q({
    id: "ce-q1",
    textQ: "Où est Bibliothèque ?",
    text: ["bâtiment Anthropole", "Au hasard", "Inconnu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Bibliothèque : _________.",
    fill: "bâtiment",
    vfQ: "Bibliothèque : bâtiment Anthropole.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Où est Mensa ?",
    text: ["face au parking", "Tout droit", "En haut"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Mensa : _________.",
    fill: "face",
    vfQ: "Mensa : face au parking.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où est Arrêt bus ?",
    text: ["devant le bâtiment Géopolis", "Derrière", "Loin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Arrêt bus : _________.",
    fill: "devant",
    vfQ: "Arrêt bus : devant le bâtiment Géopolis.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel type de document ?",
    text: ["Un panneau de directions", "Un menu", "Une facture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Panneau — _________.",
    fill: "UNIL",
    vfQ: "C'est un panneau.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "La rue s'appelle comment ?",
    text: ["Campus UNIL", "Rue du Soleil", "Avenue Paris"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Panneau — _________.",
    fill: "Campus UNIL",
    vfQ: "Rue : Campus UNIL.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Peut-on lire des directions ?",
    text: ["Oui", "Non", "On ne sait pas"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Panneau de _________.",
    fill: "directions",
    vfQ: "Oui, des directions.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Combien de destinations ?",
    text: ["Trois", "Une", "Dix"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Trois _________.",
    fill: "destinations",
    vfQ: "Trois destinations.",
    vfC: 0,
  }),
]);
const E6_1_CE_TEXT_8 = `Panneau — Zone industrielle

Usine : rue de l'Industrie 12.
Cafétéria : entrée principale.
Parking visiteurs : à droite du portail.
Le lieu est facile à trouver.
Prenez votre temps pour comprendre le message.
En cas de changement, un nouvel avis sera publié.
Nous sommes là pour vous aider.
Gardez ce texte pour vous en souvenir.
Les horaires habituels restent les mêmes.
Les personnes à mobilité réduite sont prioritaires.`;

const E6_1_CE_POOL_8 = buildExpressPool("e6-1-ce-8", [
  q({
    id: "ce-q1",
    textQ: "Où est Usine ?",
    text: ["rue de l'Industrie 12", "Au hasard", "Inconnu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Usine : _________.",
    fill: "rue",
    vfQ: "Usine : rue de l'Industrie 12.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Où est Cafétéria ?",
    text: ["entrée principale", "Tout droit", "En haut"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Cafétéria : _________.",
    fill: "entrée",
    vfQ: "Cafétéria : entrée principale.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où est Parking visiteurs ?",
    text: ["à droite du portail", "Derrière", "Loin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Parking visiteurs : _________.",
    fill: "à",
    vfQ: "Parking visiteurs : à droite du portail.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel type de document ?",
    text: ["Un panneau de directions", "Un menu", "Une facture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Panneau — _________.",
    fill: "industrielle",
    vfQ: "C'est un panneau.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "La rue s'appelle comment ?",
    text: ["Zone industrielle", "Rue du Soleil", "Avenue Paris"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Panneau — _________.",
    fill: "Zone industrielle",
    vfQ: "Rue : Zone industrielle.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Peut-on lire des directions ?",
    text: ["Oui", "Non", "On ne sait pas"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Panneau de _________.",
    fill: "directions",
    vfQ: "Oui, des directions.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Combien de destinations ?",
    text: ["Trois", "Une", "Dix"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Trois _________.",
    fill: "destinations",
    vfQ: "Trois destinations.",
    vfC: 0,
  }),
]);
const E6_1_CE_TEXT_9 = `Panneau — Marché couvert

Entrée marché : place de la Riponne.
Fromager : allée centrale.
Sortie est : vers la cathédrale.
Le personnel porte un badge visible.
Les animaux ne sont pas autorisés, sauf chiens guides.
Photographies autorisées sans flash.
Un point d'eau potable est gratuit près de l'entrée.
En cas de perte d'objet, passez à l'accueil.
Le service client répond aussi par téléphone.
Une confirmation sera envoyée ensuite.`;

const E6_1_CE_POOL_9 = buildExpressPool("e6-1-ce-9", [
  q({
    id: "ce-q1",
    textQ: "Où est Entrée marché ?",
    text: ["place de la Riponne", "Au hasard", "Inconnu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Entrée marché : _________.",
    fill: "place",
    vfQ: "Entrée marché : place de la Riponne.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Où est Fromager ?",
    text: ["allée centrale", "Tout droit", "En haut"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Fromager : _________.",
    fill: "allée",
    vfQ: "Fromager : allée centrale.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où est Sortie est ?",
    text: ["vers la cathédrale", "Derrière", "Loin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Sortie est : _________.",
    fill: "vers",
    vfQ: "Sortie est : vers la cathédrale.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel type de document ?",
    text: ["Un panneau de directions", "Un menu", "Une facture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Panneau — _________.",
    fill: "couvert",
    vfQ: "C'est un panneau.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "La rue s'appelle comment ?",
    text: ["Marché couvert", "Rue du Soleil", "Avenue Paris"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Panneau — _________.",
    fill: "Marché couvert",
    vfQ: "Rue : Marché couvert.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Peut-on lire des directions ?",
    text: ["Oui", "Non", "On ne sait pas"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Panneau de _________.",
    fill: "directions",
    vfQ: "Oui, des directions.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Combien de destinations ?",
    text: ["Trois", "Une", "Dix"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Trois _________.",
    fill: "destinations",
    vfQ: "Trois destinations.",
    vfC: 0,
  }),
]);
const E6_1_CE_TEXT_10 = `Panneau — Parc de l'Indépendance

Fontaine : centre du parc.
Aire de jeux : côté nord.
Sortie sud : vers le lac.
Lisez bien jusqu'à la fin, s'il vous plaît.
Vous pouvez demander de l'aide si besoin.
Les informations importantes sont déjà notées plus haut.
Bonne journée à toutes et à tous.
Merci de votre attention et de votre patience.
Une confirmation arrivera ensuite.
Le lieu est facile à trouver.`;

const E6_1_CE_POOL_10 = buildExpressPool("e6-1-ce-10", [
  q({
    id: "ce-q1",
    textQ: "Où est Fontaine ?",
    text: ["centre du parc", "Au hasard", "Inconnu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Fontaine : _________.",
    fill: "centre",
    vfQ: "Fontaine : centre du parc.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Où est Aire de jeux ?",
    text: ["côté nord", "Tout droit", "En haut"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Aire de jeux : _________.",
    fill: "côté",
    vfQ: "Aire de jeux : côté nord.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où est Sortie sud ?",
    text: ["vers le lac", "Derrière", "Loin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Sortie sud : _________.",
    fill: "vers",
    vfQ: "Sortie sud : vers le lac.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel type de document ?",
    text: ["Un panneau de directions", "Un menu", "Une facture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Panneau — _________.",
    fill: "l'Indépendance",
    vfQ: "C'est un panneau.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "La rue s'appelle comment ?",
    text: ["Parc de l'Indépendance", "Rue du Soleil", "Avenue Paris"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Panneau — _________.",
    fill: "Parc de l'Indépendance",
    vfQ: "Rue : Parc de l'Indépendance.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Peut-on lire des directions ?",
    text: ["Oui", "Non", "On ne sait pas"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Panneau de _________.",
    fill: "directions",
    vfQ: "Oui, des directions.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Combien de destinations ?",
    text: ["Trois", "Une", "Dix"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Trois _________.",
    fill: "destinations",
    vfQ: "Trois destinations.",
    vfC: 0,
  }),
]);
const E6_1_CE_TEXT_11 = `Plan — Centre de Morges

Place du Marché : centre A3.
Église Saint-Jean : B2 nord.
Port : D4 sud.
Gare : A1 ouest.
Une confirmation arrivera ensuite.
Le lieu est facile à trouver.
Prenez votre temps pour comprendre le message.
En cas de changement, un nouvel avis sera publié.
Nous sommes là pour vous aider.
Les informations importantes sont déjà indiquées plus haut.`;

const E6_1_CE_POOL_11 = buildExpressPool("e6-1-ce-11", [
  q({
    id: "ce-q1",
    textQ: "Où est Place du Marché ?",
    text: ["centre A3", "B1", "D4"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Place du Marché : _________.",
    fill: "centre",
    vfQ: "Place du Marché : centre A3.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Où est Église Saint-Jean ?",
    text: ["B2 nord", "A3", "C5"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Église Saint-Jean : _________.",
    fill: "B2",
    vfQ: "Église Saint-Jean : B2 nord.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où est Port ?",
    text: ["D4 sud", "A1", "B2"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Port : _________.",
    fill: "D4",
    vfQ: "Port : D4 sud.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Où est Gare ?",
    text: ["A1 ouest", "Centre", "Nord"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Gare : _________.",
    fill: "A1",
    vfQ: "Gare : A1 ouest.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle ville ?",
    text: ["Morges", "Paris", "Berlin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Centre de _________.",
    fill: "Morges",
    vfQ: "Ville : Morges.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Type de document ?",
    text: ["Un plan de ville", "Un roman", "Un billet"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Plan — Centre de _________.",
    fill: "Morges",
    vfQ: "Plan de ville.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Le plan aide à se repérer ?",
    text: ["Oui", "Non", "Peut-être"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Plan de _________.",
    fill: "ville",
    vfQ: "Oui, pour se repérer.",
    vfC: 0,
  }),
]);
const E6_1_CE_TEXT_12 = `Plan — Centre de Lausanne

Cathédrale : C4 centre.
Gare : A2 ouest.
Flon : B3 est.
Ouchy : D1 sud.
Les informations importantes sont déjà notées plus haut.
Nous traitons votre demande rapidement.
Merci de votre attention et de votre patience.
Une confirmation arrivera ensuite.
Le lieu est facile à trouver.
Prenez votre temps pour comprendre le message.`;

const E6_1_CE_POOL_12 = buildExpressPool("e6-1-ce-12", [
  q({
    id: "ce-q1",
    textQ: "Où est Cathédrale ?",
    text: ["C4 centre", "B1", "D4"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Cathédrale : _________.",
    fill: "C4",
    vfQ: "Cathédrale : C4 centre.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Où est Gare ?",
    text: ["A2 ouest", "A3", "C5"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Gare : _________.",
    fill: "A2",
    vfQ: "Gare : A2 ouest.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où est Flon ?",
    text: ["B3 est", "A1", "B2"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Flon : _________.",
    fill: "B3",
    vfQ: "Flon : B3 est.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Où est Ouchy ?",
    text: ["D1 sud", "Centre", "Nord"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Ouchy : _________.",
    fill: "D1",
    vfQ: "Ouchy : D1 sud.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle ville ?",
    text: ["Lausanne", "Paris", "Berlin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Centre de _________.",
    fill: "Lausanne",
    vfQ: "Ville : Lausanne.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Type de document ?",
    text: ["Un plan de ville", "Un roman", "Un billet"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Plan — Centre de _________.",
    fill: "Lausanne",
    vfQ: "Plan de ville.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Le plan aide à se repérer ?",
    text: ["Oui", "Non", "Peut-être"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Plan de _________.",
    fill: "ville",
    vfQ: "Oui, pour se repérer.",
    vfC: 0,
  }),
]);
const E6_1_CE_TEXT_13 = `Plan — Centre de Nyon

Château : B1 nord.
Musée : C2 centre.
Lac : D3 sud.
Gare : A1 ouest.
Tout est organisé pour que ce soit simple.
Le contact est indiqué dans le message.
N'oubliez pas de vérifier la date.
Je reste près de mon téléphone aujourd'hui.
Bonne journée à toutes et à tous.
Ce document complète les informations déjà données.`;

const E6_1_CE_POOL_13 = buildExpressPool("e6-1-ce-13", [
  q({
    id: "ce-q1",
    textQ: "Où est Château ?",
    text: ["B1 nord", "B1", "D4"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Château : _________.",
    fill: "B1",
    vfQ: "Château : B1 nord.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Où est Musée ?",
    text: ["C2 centre", "A3", "C5"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Musée : _________.",
    fill: "C2",
    vfQ: "Musée : C2 centre.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où est Lac ?",
    text: ["D3 sud", "A1", "B2"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lac : _________.",
    fill: "D3",
    vfQ: "Lac : D3 sud.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Où est Gare ?",
    text: ["A1 ouest", "Centre", "Nord"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Gare : _________.",
    fill: "A1",
    vfQ: "Gare : A1 ouest.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle ville ?",
    text: ["Nyon", "Paris", "Berlin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Centre de _________.",
    fill: "Nyon",
    vfQ: "Ville : Nyon.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Type de document ?",
    text: ["Un plan de ville", "Un roman", "Un billet"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Plan — Centre de _________.",
    fill: "Nyon",
    vfQ: "Plan de ville.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Le plan aide à se repérer ?",
    text: ["Oui", "Non", "Peut-être"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Plan de _________.",
    fill: "ville",
    vfQ: "Oui, pour se repérer.",
    vfC: 0,
  }),
]);
const E6_1_CE_TEXT_14 = `Plan — Centre de Vevey

Grande Place : centre.
Gare : nord.
Port : sud.
Musée : est.
Vous pouvez demander de l'aide si besoin.
Les informations importantes sont déjà notées plus haut.
Les personnes à mobilité réduite sont prioritaires.
En cas de perte d'objet, passez à l'accueil.
Le service client répond aussi par téléphone.
Merci de lire ce message jusqu'à la fin.
En cas de question, vous pouvez écrire ou téléphoner.
Merci de votre attention et de votre patience.
Une confirmation arrivera ensuite.`;

const E6_1_CE_POOL_14 = buildExpressPool("e6-1-ce-14", [
  q({
    id: "ce-q1",
    textQ: "Où est Grande Place ?",
    text: ["centre", "B1", "D4"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Grande Place : _________.",
    fill: "centre",
    vfQ: "Grande Place : centre.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Où est Gare ?",
    text: ["nord", "A3", "C5"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Gare : _________.",
    fill: "nord",
    vfQ: "Gare : nord.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où est Port ?",
    text: ["sud", "A1", "B2"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Port : _________.",
    fill: "sud",
    vfQ: "Port : sud.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Où est Musée ?",
    text: ["est", "Centre", "Nord"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Musée : _________.",
    fill: "est",
    vfQ: "Musée : est.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle ville ?",
    text: ["Vevey", "Paris", "Berlin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Centre de _________.",
    fill: "Vevey",
    vfQ: "Ville : Vevey.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Type de document ?",
    text: ["Un plan de ville", "Un roman", "Un billet"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Plan — Centre de _________.",
    fill: "Vevey",
    vfQ: "Plan de ville.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Le plan aide à se repérer ?",
    text: ["Oui", "Non", "Peut-être"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Plan de _________.",
    fill: "ville",
    vfQ: "Oui, pour se repérer.",
    vfC: 0,
  }),
]);
const E6_1_CE_TEXT_15 = `Plan — Centre de Yverdon

Centre thermal : A2.
Lac : sud.
Gare : ouest.
Château : nord.
Les horaires habituels restent les mêmes.
Une question ? Écrivez ou téléphonez.
Merci encore, et à bientôt.
Tout est organisé pour que ce soit simple.
Le contact est indiqué dans le message.
N'oubliez pas de vérifier la date.`;

const E6_1_CE_POOL_15 = buildExpressPool("e6-1-ce-15", [
  q({
    id: "ce-q1",
    textQ: "Où est Centre thermal ?",
    text: ["A2", "B1", "D4"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Centre thermal : _________.",
    fill: "A2",
    vfQ: "Centre thermal : A2.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Où est Lac ?",
    text: ["sud", "A3", "C5"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lac : _________.",
    fill: "sud",
    vfQ: "Lac : sud.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où est Gare ?",
    text: ["ouest", "A1", "B2"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Gare : _________.",
    fill: "ouest",
    vfQ: "Gare : ouest.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Où est Château ?",
    text: ["nord", "Centre", "Nord"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Château : _________.",
    fill: "nord",
    vfQ: "Château : nord.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle ville ?",
    text: ["Yverdon", "Paris", "Berlin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Centre de _________.",
    fill: "Yverdon",
    vfQ: "Ville : Yverdon.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Type de document ?",
    text: ["Un plan de ville", "Un roman", "Un billet"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Plan — Centre de _________.",
    fill: "Yverdon",
    vfQ: "Plan de ville.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Le plan aide à se repérer ?",
    text: ["Oui", "Non", "Peut-être"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Plan de _________.",
    fill: "ville",
    vfQ: "Oui, pour se repérer.",
    vfC: 0,
  }),
]);
const E6_1_CE_TEXT_16 = `Affiche — Office du tourisme de Lausanne

Ouvert lun–ven 9 h–18 h, sam 10 h–17 h.
Adresse : place de la Palud 2.
Plans gratuits, conseils en français et anglais.
Visites guidées : départ 14 h, place de la Palud.
Un agent peut vous accompagner jusqu'au bon guichet.
Le bâtiment est ouvert dès 8 heures.
Nous traitons votre demande rapidement.
Merci de lire attentivement toutes les informations.
En cas de doute, demandez de l'aide à l'accueil.
Les horaires peuvent changer en cas d'urgence.`;

const E6_1_CE_POOL_16 = buildExpressPool("e6-1-ce-16", [
  q({
    id: "ce-q1",
    textQ: "Horaires en semaine ?",
    text: ["9 h–18 h", "Fermé", "Nuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lun–ven _________.",
    fill: "18 h",
    vfQ: "Semaine : 9 h–18 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Horaires samedi ?",
    text: ["10 h–17 h", "9 h–18 h", "Fermé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Sam _________.",
    fill: "17",
    vfQ: "Samedi : 10 h–17 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Adresse ?",
    text: ["place de la Palud 2", "Gare", "Port"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Adresse : _________.",
    fill: "2",
    vfQ: "Adresse : place de la Palud 2.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Les plans sont-ils payants ?",
    text: ["Non, gratuits", "Oui, 50 fr", "Interdits"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Plans _________.",
    fill: "gratuits",
    vfQ: "Plans gratuits.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Langues des conseils ?",
    text: ["français et anglais", "Latin", "Aucune"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Conseils en _________.",
    fill: "français",
    vfQ: "Langues : français et anglais.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Heure visite guidée ?",
    text: ["14 h", "6 h", "23 h"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Départ _________.",
    fill: "14",
    vfQ: "Départ 14 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Lieu de départ visite ?",
    text: ["place de la Palud", "Gare", "Aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Départ 14 h, _________.",
    fill: "Palud",
    vfQ: "Lieu : place de la Palud.",
    vfC: 0,
  }),
]);
const E6_1_CE_TEXT_17 = `Affiche — Office du tourisme de Genève

Ouvert lun–ven 8 h–19 h, sam 9 h–18 h.
Adresse : rue du Mont-Blanc 14.
Plans gratuits, conseils en français et allemand.
Visites guidées : départ 11 h, gare Cornavin.
Bonne journée à toutes et à tous.
Merci de votre attention et de votre patience.
Une confirmation arrivera ensuite.
Le lieu est facile à trouver.
Prenez votre temps pour comprendre le message.
En cas de changement, un nouvel avis sera publié.`;

const E6_1_CE_POOL_17 = buildExpressPool("e6-1-ce-17", [
  q({
    id: "ce-q1",
    textQ: "Horaires en semaine ?",
    text: ["8 h–19 h", "Fermé", "Nuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lun–ven _________.",
    fill: "19 h",
    vfQ: "Semaine : 8 h–19 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Horaires samedi ?",
    text: ["9 h–18 h", "8 h–19 h", "Fermé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Sam _________.",
    fill: "18",
    vfQ: "Samedi : 9 h–18 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Adresse ?",
    text: ["rue du Mont-Blanc 14", "Gare", "Port"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Adresse : _________.",
    fill: "14",
    vfQ: "Adresse : rue du Mont-Blanc 14.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Les plans sont-ils payants ?",
    text: ["Non, gratuits", "Oui, 50 fr", "Interdits"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Plans _________.",
    fill: "gratuits",
    vfQ: "Plans gratuits.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Langues des conseils ?",
    text: ["français et allemand", "Latin", "Aucune"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Conseils en _________.",
    fill: "français",
    vfQ: "Langues : français et allemand.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Heure visite guidée ?",
    text: ["11 h", "6 h", "23 h"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Départ _________.",
    fill: "11",
    vfQ: "Départ 11 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Lieu de départ visite ?",
    text: ["gare Cornavin", "Gare", "Aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Départ 11 h, _________.",
    fill: "Cornavin",
    vfQ: "Lieu : gare Cornavin.",
    vfC: 0,
  }),
]);
const E6_1_CE_TEXT_18 = `Affiche — Office du tourisme de Montreux

Ouvert lun–ven 9 h–17 h, sam 10 h–16 h.
Adresse : avenue des Alpes 1.
Plans gratuits, conseils en français et anglais.
Visites guidées : départ 15 h, gare.
Les toilettes se trouvent au fond du couloir.
Une version en plusieurs langues est disponible à l'accueil.
Vous pouvez répondre directement à ce message.
Merci de ne pas bloquer les issues de secours.
Le personnel porte un badge visible.
Les animaux ne sont pas autorisés, sauf chiens guides.`;

const E6_1_CE_POOL_18 = buildExpressPool("e6-1-ce-18", [
  q({
    id: "ce-q1",
    textQ: "Horaires en semaine ?",
    text: ["9 h–17 h", "Fermé", "Nuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lun–ven _________.",
    fill: "17 h",
    vfQ: "Semaine : 9 h–17 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Horaires samedi ?",
    text: ["10 h–16 h", "9 h–17 h", "Fermé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Sam _________.",
    fill: "16",
    vfQ: "Samedi : 10 h–16 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Adresse ?",
    text: ["avenue des Alpes 1", "Gare", "Port"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Adresse : _________.",
    fill: "1",
    vfQ: "Adresse : avenue des Alpes 1.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Les plans sont-ils payants ?",
    text: ["Non, gratuits", "Oui, 50 fr", "Interdits"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Plans _________.",
    fill: "gratuits",
    vfQ: "Plans gratuits.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Langues des conseils ?",
    text: ["français et anglais", "Latin", "Aucune"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Conseils en _________.",
    fill: "français",
    vfQ: "Langues : français et anglais.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Heure visite guidée ?",
    text: ["15 h", "6 h", "23 h"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Départ _________.",
    fill: "15",
    vfQ: "Départ 15 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Lieu de départ visite ?",
    text: ["gare", "Gare", "Aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Départ 15 h, _________.",
    fill: "gare",
    vfQ: "Lieu : gare.",
    vfC: 0,
  }),
]);
const E6_1_CE_TEXT_19 = `Affiche — Office du tourisme de Neuchâtel

Ouvert lun–ven 9 h–12 h et 14 h–18 h, sam 10 h–14 h.
Adresse : rue du Seyon 1.
Plans gratuits, conseils en français.
Visites guidées : départ 10 h 30, place Pury.
Merci de parler doucement dans les couloirs.
Les sacs volumineux se déposent à l'accueil.
Un vestiaire gratuit est disponible.
Les consignes de sécurité sont affichées en rouge.
À bientôt, et merci de votre lecture.
Merci de lire attentivement toutes les informations.`;

const E6_1_CE_POOL_19 = buildExpressPool("e6-1-ce-19", [
  q({
    id: "ce-q1",
    textQ: "Horaires en semaine ?",
    text: ["9 h–12 h et 14 h–18 h", "Fermé", "Nuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lun–ven _________.",
    fill: "18 h",
    vfQ: "Semaine : 9 h–12 h et 14 h–18 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Horaires samedi ?",
    text: ["10 h–14 h", "9 h–12 h et 14 h–18 h", "Fermé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Sam _________.",
    fill: "14",
    vfQ: "Samedi : 10 h–14 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Adresse ?",
    text: ["rue du Seyon 1", "Gare", "Port"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Adresse : _________.",
    fill: "1",
    vfQ: "Adresse : rue du Seyon 1.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Les plans sont-ils payants ?",
    text: ["Non, gratuits", "Oui, 50 fr", "Interdits"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Plans _________.",
    fill: "gratuits",
    vfQ: "Plans gratuits.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Langues des conseils ?",
    text: ["français", "Latin", "Aucune"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Conseils en _________.",
    fill: "français",
    vfQ: "Langues : français.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Heure visite guidée ?",
    text: ["10 h 30", "6 h", "23 h"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Départ _________.",
    fill: "10 30",
    vfQ: "Départ 10 h 30.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Lieu de départ visite ?",
    text: ["place Pury", "Gare", "Aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Départ 10 h 30, _________.",
    fill: "Pury",
    vfQ: "Lieu : place Pury.",
    vfC: 0,
  }),
]);
const E6_1_CE_TEXT_20 = `Affiche — Office du tourisme de Sion

Ouvert lun–ven 8 h 30–17 h, sam 9 h–12 h.
Adresse : place de la Planta 2.
Plans gratuits, conseils en français et italien.
Visites guidées : départ 16 h, château.
Gardez votre ticket ou votre confirmation avec vous.
Les enfants doivent rester accompagnés d'un adulte.
Respectez la file d'attente, s'il vous plaît.
Un plan simple est affiché juste à côté.
Les personnes à mobilité réduite sont prioritaires.
Joignez les documents demandés si nécessaire.`;

const E6_1_CE_POOL_20 = buildExpressPool("e6-1-ce-20", [
  q({
    id: "ce-q1",
    textQ: "Horaires en semaine ?",
    text: ["8 h 30–17 h", "Fermé", "Nuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lun–ven _________.",
    fill: "17 h",
    vfQ: "Semaine : 8 h 30–17 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Horaires samedi ?",
    text: ["9 h–12 h", "8 h 30–17 h", "Fermé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Sam _________.",
    fill: "12",
    vfQ: "Samedi : 9 h–12 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Adresse ?",
    text: ["place de la Planta 2", "Gare", "Port"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Adresse : _________.",
    fill: "2",
    vfQ: "Adresse : place de la Planta 2.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Les plans sont-ils payants ?",
    text: ["Non, gratuits", "Oui, 50 fr", "Interdits"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Plans _________.",
    fill: "gratuits",
    vfQ: "Plans gratuits.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Langues des conseils ?",
    text: ["français et italien", "Latin", "Aucune"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Conseils en _________.",
    fill: "français",
    vfQ: "Langues : français et italien.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Heure visite guidée ?",
    text: ["16 h", "6 h", "23 h"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Départ _________.",
    fill: "16",
    vfQ: "Départ 16 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Lieu de départ visite ?",
    text: ["château", "Gare", "Aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Départ 16 h, _________.",
    fill: "château",
    vfQ: "Lieu : château.",
    vfC: 0,
  }),
]);

export const E6_1_CE: CommunicationExercise[] = [
  readingPoolExercise({
    id: "e6-1-ce-1",
    readingText: E6_1_CE_TEXT_1,
    questionPool: E6_1_CE_POOL_1,
  }),
  readingPoolExercise({
    id: "e6-1-ce-2",
    readingText: E6_1_CE_TEXT_2,
    questionPool: E6_1_CE_POOL_2,
  }),
  readingPoolExercise({
    id: "e6-1-ce-3",
    readingText: E6_1_CE_TEXT_3,
    questionPool: E6_1_CE_POOL_3,
  }),
  readingPoolExercise({
    id: "e6-1-ce-4",
    readingText: E6_1_CE_TEXT_4,
    questionPool: E6_1_CE_POOL_4,
  }),
  readingPoolExercise({
    id: "e6-1-ce-5",
    readingText: E6_1_CE_TEXT_5,
    questionPool: E6_1_CE_POOL_5,
  }),
  readingPoolExercise({
    id: "e6-1-ce-6",
    readingText: E6_1_CE_TEXT_6,
    questionPool: E6_1_CE_POOL_6,
  }),
  readingPoolExercise({
    id: "e6-1-ce-7",
    readingText: E6_1_CE_TEXT_7,
    questionPool: E6_1_CE_POOL_7,
  }),
  readingPoolExercise({
    id: "e6-1-ce-8",
    readingText: E6_1_CE_TEXT_8,
    questionPool: E6_1_CE_POOL_8,
  }),
  readingPoolExercise({
    id: "e6-1-ce-9",
    readingText: E6_1_CE_TEXT_9,
    questionPool: E6_1_CE_POOL_9,
  }),
  readingPoolExercise({
    id: "e6-1-ce-10",
    readingText: E6_1_CE_TEXT_10,
    questionPool: E6_1_CE_POOL_10,
  }),
  readingPoolExercise({
    id: "e6-1-ce-11",
    readingText: E6_1_CE_TEXT_11,
    questionPool: E6_1_CE_POOL_11,
  }),
  readingPoolExercise({
    id: "e6-1-ce-12",
    readingText: E6_1_CE_TEXT_12,
    questionPool: E6_1_CE_POOL_12,
  }),
  readingPoolExercise({
    id: "e6-1-ce-13",
    readingText: E6_1_CE_TEXT_13,
    questionPool: E6_1_CE_POOL_13,
  }),
  readingPoolExercise({
    id: "e6-1-ce-14",
    readingText: E6_1_CE_TEXT_14,
    questionPool: E6_1_CE_POOL_14,
  }),
  readingPoolExercise({
    id: "e6-1-ce-15",
    readingText: E6_1_CE_TEXT_15,
    questionPool: E6_1_CE_POOL_15,
  }),
  readingPoolExercise({
    id: "e6-1-ce-16",
    readingText: E6_1_CE_TEXT_16,
    questionPool: E6_1_CE_POOL_16,
  }),
  readingPoolExercise({
    id: "e6-1-ce-17",
    readingText: E6_1_CE_TEXT_17,
    questionPool: E6_1_CE_POOL_17,
  }),
  readingPoolExercise({
    id: "e6-1-ce-18",
    readingText: E6_1_CE_TEXT_18,
    questionPool: E6_1_CE_POOL_18,
  }),
  readingPoolExercise({
    id: "e6-1-ce-19",
    readingText: E6_1_CE_TEXT_19,
    questionPool: E6_1_CE_POOL_19,
  }),
  readingPoolExercise({
    id: "e6-1-ce-20",
    readingText: E6_1_CE_TEXT_20,
    questionPool: E6_1_CE_POOL_20,
  }),
];

/* ── Production orale — dialogues à jouer ──────────────────────────────────── */


const TOURISTE = { title: "Le touriste", vous: "le touriste / la touriste" };
const PASSANT = { title: "Le passant", vous: "le passant / la passante" };
const EMPLOYE = { title: "L'employé", vous: "l'employé / l'employée" };


export const E6_1_PO: ExpressPoDialogue[] = [
{
    id: "e6-1-po-1",
    title: "Trouver la poste",
    context: "Vous êtes dans une nouvelle ville et vous cherchez la poste.",
    roleA: TOURISTE,
    roleB: PASSANT,
    lines: [
      { role: "A", text: "Excusez-moi, je cherche la poste. Vous pouvez m'aider ?" },
      { role: "B", text: "Oui, bien sûr. La poste est près d'ici." },
      { role: "A", text: "Je peux y aller à pied ?" },
      { role: "B", text: "Oui, c'est à cinq minutes. Allez tout droit." },
      { role: "A", text: "Tout droit, et après ?" },
      { role: "B", text: "Après, tournez à gauche. La poste est en face de la banque." },
      { role: "A", text: "Merci beaucoup pour votre aide !" },
      { role: "B", text: "De rien, bonne journée !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e6-1-po-2",
    title: "Quel bus pour la mairie ?",
    context: "Vous êtes à un arrêt de bus et vous demandez quel bus va à la mairie.",
    roleA: { title: "Le voyageur", vous: "le voyageur / la voyageuse" },
    roleB: { title: "Le chauffeur", vous: "le chauffeur / la chauffeuse" },
    lines: [
      { role: "A", text: "Bonjour, ce bus va à la mairie ?" },
      { role: "B", text: "Non, il faut prendre le 14." },
      { role: "A", text: "Le 14 passe souvent ?" },
      { role: "B", text: "Oui, toutes les dix minutes." },
      { role: "A", text: "Et le trajet dure combien de temps ?" },
      { role: "B", text: "Environ vingt minutes. Il y a beaucoup d'arrêts." },
      { role: "A", text: "D'accord. Je peux acheter un ticket dans le bus ?" },
      { role: "B", text: "Oui, vous pouvez demander au chauffeur. Bonne route !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e6-1-po-3",
    title: "Acheter des tickets au guichet",
    context: "Vous achetez des tickets de métro au guichet de la station.",
    roleA: EMPLOYE,
    roleB: { title: "Le client", vous: "le client / la cliente" },
    lines: [
      { role: "A", text: "Bonjour, je peux vous aider ?" },
      { role: "B", text: "Bonjour, je voudrais des tickets de métro, s'il vous plaît." },
      { role: "A", text: "Vous voulez un ticket ou un carnet de dix ?" },
      { role: "B", text: "Un carnet, j'ai beaucoup de trajets aujourd'hui." },
      { role: "A", text: "Voilà. Ça fait quinze euros." },
      { role: "B", text: "Tenez. Je dois valider le ticket à chaque trajet ?" },
      { role: "A", text: "Oui, avant de monter dans le métro." },
      { role: "B", text: "Merci beaucoup, au revoir !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e6-1-po-4",
    title: "C'est direct ?",
    context: "Vous voulez aller à la préfecture en métro et vous demandez si c'est direct.",
    roleA: TOURISTE,
    roleB: EMPLOYE,
    lines: [
      { role: "A", text: "Bonjour, je vais à la préfecture. C'est direct en métro ?" },
      { role: "B", text: "Non, il faut changer à Opéra." },
      { role: "A", text: "Et après Opéra, je prends quelle ligne ?" },
      { role: "B", text: "La ligne 4, direction Sud." },
      { role: "A", text: "Le trajet dure combien de temps ?" },
      { role: "B", text: "Vingt-cinq minutes environ." },
      { role: "A", text: "Parfait. Où est le quai de la ligne 4 ?" },
      { role: "B", text: "Au fond du couloir, à droite. Bon voyage !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e6-1-po-5",
    title: "Expliquer le chemin au téléphone",
    context: "Un ami vient chez vous pour la première fois. Vous expliquez le chemin au téléphone.",
    roleA: { title: "L'hôte", vous: "l'hôte / l'hôtesse" },
    roleB: { title: "L'invité", vous: "l'invité / l'invitée" },
    lines: [
      { role: "A", text: "Salut ! Tu arrives à quelle heure ce soir ?" },
      { role: "B", text: "Vers sept heures. Comment je viens chez toi ?" },
      { role: "A", text: "Prends le bus 21 et descends à l'arrêt du parc." },
      { role: "B", text: "D'accord. Et après l'arrêt ?" },
      { role: "A", text: "Tu traverses la rue et tu vas tout droit." },
      { role: "B", text: "C'est loin à pied ?" },
      { role: "A", text: "Non, deux minutes. Mon immeuble est en face de la boulangerie." },
      { role: "B", text: "Super, à ce soir !" },
      { role: "A", text: "Merci, c'est noté." },
      { role: "B", text: "Parfait. À bientôt alors !" },
],
  },
  {
    id: "e6-1-po-6",
    title: "Perdu en ville",
    context: "Vous êtes perdu(e) et vous demandez votre chemin à une passante.",
    roleA: TOURISTE,
    roleB: PASSANT,
    lines: [
      { role: "A", text: "Pardon madame, je suis perdu. Je cherche la gare." },
      { role: "B", text: "La gare ? Vous n'êtes pas loin." },
      { role: "A", text: "Je peux y aller à pied ?" },
      { role: "B", text: "Oui. Prenez la deuxième rue à droite." },
      { role: "A", text: "La deuxième à droite, d'accord. Et ensuite ?" },
      { role: "B", text: "Continuez tout droit jusqu'à la place, la gare est là." },
      { role: "A", text: "Merci beaucoup ! C'est à combien de minutes ?" },
      { role: "B", text: "Dix minutes environ. Bonne journée !" },
      { role: "A", text: "On descend à la prochaine ?" },
      { role: "B", text: "Oui, à tout de suite !" },
],
  },
  {
    id: "e6-1-po-7",
    title: "Louer un vélo en libre-service",
    context: "Vous voulez essayer les vélos en libre-service et vous demandez comment ça marche.",
    roleA: { title: "Le client", vous: "le client / la cliente" },
    roleB: EMPLOYE,
    lines: [
      { role: "A", text: "Bonjour, comment fonctionnent les vélos en libre-service ?" },
      { role: "B", text: "C'est simple : vous payez à la borne avec votre carte." },
      { role: "A", text: "Ça coûte combien pour une journée ?" },
      { role: "B", text: "Trois euros la journée." },
      { role: "A", text: "Et où est-ce que je rends le vélo ?" },
      { role: "B", text: "Dans n'importe quelle station de la ville." },
      { role: "A", text: "Il y a des stations près de la gare ?" },
      { role: "B", text: "Oui, il y en a une juste en face. Bonne balade !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e6-1-po-8",
    title: "Chercher l'office du tourisme",
    context: "Vous venez d'arriver et vous cherchez l'office du tourisme pour avoir un plan.",
    roleA: { title: "Le visiteur", vous: "le visiteur / la visiteuse" },
    roleB: PASSANT,
    lines: [
      { role: "A", text: "Excusez-moi, où est l'office du tourisme ?" },
      { role: "B", text: "C'est à côté de la station de métro, en face de la gare." },
      { role: "A", text: "Je peux avoir un plan de la ville là-bas ?" },
      { role: "B", text: "Oui, les plans sont gratuits." },
      { role: "A", text: "Super. C'est ouvert maintenant ?" },
      { role: "B", text: "Oui, jusqu'à dix-huit heures." },
      { role: "A", text: "Merci ! Je vais tout droit, c'est ça ?" },
      { role: "B", text: "Oui, tout droit puis à gauche après le pont." },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e6-1-po-9",
    title: "Demander l'arrêt dans le bus",
    context: "Vous êtes dans le bus et vous ne connaissez pas votre arrêt.",
    roleA: { title: "Le passager", vous: "le passager / la passagère" },
    roleB: { title: "Le chauffeur", vous: "le chauffeur / la chauffeuse" },
    lines: [
      { role: "A", text: "Bonjour, ce bus passe par l'hôpital ?" },
      { role: "B", text: "Oui, c'est dans quatre arrêts." },
      { role: "A", text: "Vous pouvez me dire quand descendre, s'il vous plaît ?" },
      { role: "B", text: "Pas de problème, je vous appelle." },
      { role: "A", text: "Merci. Je dois valider mon ticket ici ?" },
      { role: "B", text: "Oui, la machine est derrière moi." },
      { role: "A", text: "Voilà, c'est fait. Le trajet dure longtemps ?" },
      { role: "B", text: "Dix minutes seulement. Asseyez-vous !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e6-1-po-10",
    title: "Aller au musée : à pied ou en tram ?",
    context: "Vous demandez à l'office du tourisme comment aller au musée.",
    roleA: TOURISTE,
    roleB: EMPLOYE,
    lines: [
      { role: "A", text: "Bonjour, je voudrais aller au musée. C'est loin ?" },
      { role: "B", text: "À pied, c'est trente minutes. En tram, dix minutes." },
      { role: "A", text: "Je préfère le tram. Quelle ligne ?" },
      { role: "B", text: "La ligne 2, direction du château." },
      { role: "A", text: "Où est-ce que j'achète le ticket ?" },
      { role: "B", text: "Au distributeur, à l'arrêt du tram." },
      { role: "A", text: "Et je descends à quel arrêt ?" },
      { role: "B", text: "À l'arrêt « Musée », c'est le quatrième. Bonne visite !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e6-1-po-11",
    title: "Trouver la bibliothèque",
    context: "Vous cherchez la bibliothèque.",
    roleA: { title: "Le touriste", vous: "le touriste / la touriste" },
    roleB: { title: "Le passant", vous: "le passant / la passante" },
    lines: [
      { role: "A", text: "Excusez-moi, la bibliothèque, c'est où ?" },
      { role: "B", text: "Tout droit, puis à gauche après l'église." },
      { role: "A", text: "C'est loin ?" },
      { role: "B", text: "Non, cinq minutes à pied." },
      { role: "A", text: "Merci ! Et le bus ?" },
      { role: "B", text: "Le bus 5, arrêt Bibliothèque." },
      { role: "A", text: "Parfait, merci beaucoup !" },
      { role: "B", text: "De rien, bonne journée !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
    ],
  },
  {
    id: "e6-1-po-12",
    title: "Aller à la piscine",
    context: "Vous demandez le chemin de la piscine.",
    roleA: { title: "Le touriste", vous: "le touriste / la touriste" },
    roleB: { title: "Le passant", vous: "le passant / la passante" },
    lines: [
      { role: "A", text: "Bonjour, la piscine, s'il vous plaît ?" },
      { role: "B", text: "Prenez la rue des Fleurs jusqu'au bout." },
      { role: "A", text: "Puis ?" },
      { role: "B", text: "Tournez à droite. C'est la grande piscine bleue." },
      { role: "A", text: "C'est ouvert aujourd'hui ?" },
      { role: "B", text: "Oui, de 10 h à 20 h." },
      { role: "A", text: "Merci infiniment !" },
      { role: "B", text: "Je vous en prie." },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
    ],
  },
  {
    id: "e6-1-po-13",
    title: "Quel métro ?",
    context: "Vous voulez aller au centre.",
    roleA: { title: "Le touriste", vous: "le touriste / la touriste" },
    roleB: { title: "L'employé", vous: "l'employé / l'employée" },
    lines: [
      { role: "A", text: "Bonjour, pour aller au centre ?" },
      { role: "B", text: "Prenez le métro ligne 1." },
      { role: "A", text: "Où ?" },
      { role: "B", text: "Direction Nord, trois stations." },
      { role: "A", text: "Je change ?" },
      { role: "B", text: "Non, c'est direct." },
      { role: "A", text: "Merci beaucoup !" },
      { role: "B", text: "Bonne journée !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
    ],
  },
  {
    id: "e6-1-po-14",
    title: "Perdu près de la gare",
    context: "Vous ne trouvez pas votre hôtel.",
    roleA: { title: "Le touriste", vous: "le touriste / la touriste" },
    roleB: { title: "L'employé", vous: "l'employé / l'employée" },
    lines: [
      { role: "A", text: "Excusez-moi, l'Hôtel du Lac ?" },
      { role: "B", text: "Sortez de la gare, tournez à droite." },
      { role: "A", text: "C'est loin ?" },
      { role: "B", text: "Non, deux minutes." },
      { role: "A", text: "Merci !" },
      { role: "B", text: "L'hôtel est en face du parc." },
      { role: "A", text: "Très bien." },
      { role: "B", text: "Merci beaucoup." },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
    ],
  },
  {
    id: "e6-1-po-15",
    title: "À vélo",
    context: "Vous louez un vélo.",
    roleA: { title: "L'employé", vous: "l'employé / l'employée" },
    roleB: { title: "Le touriste", vous: "le touriste / la touriste" },
    lines: [
      { role: "A", text: "Bonjour, un vélo pour deux heures ?" },
      { role: "B", text: "Oui, voici. Suivez la piste bleue." },
      { role: "A", text: "Où va la piste ?" },
      { role: "B", text: "Le long de la rivière, jusqu'au parc." },
      { role: "A", text: "Merci !" },
      { role: "B", text: "Bonne balade !" },
      { role: "A", text: "Très bien." },
      { role: "B", text: "Merci beaucoup." },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
    ],
  },
  {
    id: "e6-1-po-16",
    title: "Le marché",
    context: "Vous cherchez le marché.",
    roleA: { title: "Le touriste", vous: "le touriste / la touriste" },
    roleB: { title: "Le passant", vous: "le passant / la passante" },
    lines: [
      { role: "A", text: "Le marché, c'est par où ?" },
      { role: "B", text: "Place du Marché, derrière l'église." },
      { role: "A", text: "C'est quel jour ?" },
      { role: "B", text: "Mardi et samedi matin." },
      { role: "A", text: "Merci !" },
      { role: "B", text: "De rien !" },
      { role: "A", text: "Très bien." },
      { role: "B", text: "Merci beaucoup." },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
    ],
  },
  {
    id: "e6-1-po-17",
    title: "Dernier bus",
    context: "Vous voulez savoir l'heure du dernier bus.",
    roleA: { title: "Le touriste", vous: "le touriste / la touriste" },
    roleB: { title: "L'employé", vous: "l'employé / l'employée" },
    lines: [
      { role: "A", text: "Le dernier bus pour le centre ?" },
      { role: "B", text: "À 23 h 15." },
      { role: "A", text: "Et le premier ?" },
      { role: "B", text: "À 5 h 30." },
      { role: "A", text: "Merci !" },
      { role: "B", text: "Bonne soirée !" },
      { role: "A", text: "Très bien." },
      { role: "B", text: "Merci beaucoup." },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
    ],
  },
  {
    id: "e6-1-po-18",
    title: "Plan de ville",
    context: "Vous êtes à l'office du tourisme.",
    roleA: { title: "L'employé", vous: "l'employé / l'employée" },
    roleB: { title: "Le touriste", vous: "le touriste / la touriste" },
    lines: [
      { role: "A", text: "Bonjour, un plan de la ville ?" },
      { role: "B", text: "Oui, voici. C'est gratuit." },
      { role: "A", text: "Où est le musée ?" },
      { role: "B", text: "Regardez ici, rue des Arts." },
      { role: "A", text: "Merci !" },
      { role: "B", text: "Bonne visite !" },
      { role: "A", text: "Très bien." },
      { role: "B", text: "Merci beaucoup." },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
    ],
  },
  {
    id: "e6-1-po-19",
    title: "Taxi ou bus",
    context: "Vous hésitez entre taxi et bus.",
    roleA: { title: "L'ami", vous: "l'ami / l'amie" },
    roleB: { title: "L'amie", vous: "l'ami / l'amie" },
    lines: [
      { role: "A", text: "On prend le bus ?" },
      { role: "B", text: "Oui, c'est moins cher." },
      { role: "A", text: "C'est combien ?" },
      { role: "B", text: "Trois francs par personne." },
      { role: "A", text: "D'accord !" },
      { role: "B", text: "L'arrêt est là-bas." },
      { role: "A", text: "Très bien." },
      { role: "B", text: "Merci beaucoup." },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
    ],
  },
  {
    id: "e6-1-po-20",
    title: "Chemin pour un ami",
    context: "Votre ami ne trouve pas votre maison.",
    roleA: { title: "Le touriste", vous: "le touriste / la touriste" },
    roleB: { title: "L'ami", vous: "l'ami / l'amie" },
    lines: [
      { role: "A", text: "Je suis perdu !" },
      { role: "B", text: "Tu es où ?" },
      { role: "A", text: "Devant la boulangerie." },
      { role: "B", text: "Tourne à droite, maison numéro 12." },
      { role: "A", text: "Merci !" },
      { role: "B", text: "Je t'attends !" },
      { role: "A", text: "Très bien." },
      { role: "B", text: "Merci beaucoup." },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
    ],
  },
];


/* ── Production écrite — consignes (A1 : 50 mots minimum) ─────────────────── */

const PE_MIN = 50;
const PE_MAX = 120;

export const E6_1_PE: ExpressPePrompt[] = [
  {
    id: "e6-1-pe-1",
    title: "Chemin jusqu'à chez vous",
    situation: "",
    instruction: "Écrivez un SMS pour expliquer comment arriver chez vous en transports publics.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e6-1-pe-2",
    title: "Rendez-vous devant la gare",
    situation: "",
    instruction: "Vous donnez rendez-vous à un(e) ami(e) devant la gare et vous expliquez le chemin à pied jusqu'au café où vous allez l'attendre.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e6-1-pe-3",
    title: "Itinéraire pour l'école",
    situation: "",
    instruction: "Vous expliquez à un nouveau camarade comment aller de l'arrêt de bus à votre école en indiquant les rues, les virages et le bâtiment d'entrée.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e6-1-pe-4",
    title: "Plan du quartier",
    situation: "",
    instruction: "Vous écrivez à votre cousin pour décrire votre quartier et lui dire comment trouver la boulangerie, la pharmacie et le parc.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e6-1-pe-5",
    title: "Chemin vers la bibliothèque",
    situation: "",
    instruction: "Vous envoyez un message à un(e) ami(e) pour expliquer comment aller de la mairie à la bibliothèque avec des repères simples.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e6-1-pe-6",
    title: "Adresse compliquée",
    situation: "",
    instruction: "Votre adresse est difficile à trouver et vous écrivez des indications précises avec le nom de la rue, l'étage et le code de l'immeuble.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e6-1-pe-7",
    title: "Changement de bus",
    situation: "",
    instruction: "Vous expliquez à un(e) ami(e) quel bus prendre, où changer de ligne et à quel arrêt descendre pour arriver à votre appartement.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e6-1-pe-8",
    title: "Sortie du métro",
    situation: "",
    instruction: "Vous écrivez un message pour indiquer la bonne sortie du métro, la direction à prendre et le monument visible près du lieu de rendez-vous.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e6-1-pe-9",
    title: "Invitation au parc",
    situation: "",
    instruction: "Vous invitez un(e) ami(e) au parc et vous lui expliquez le chemin depuis son arrêt de tram jusqu'à l'entrée principale.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e6-1-pe-10",
    title: "Touriste perdu",
    situation: "",
    instruction: "Un touriste vous demande son chemin et vous écrivez les indications pour aller à l'office du tourisme depuis la place centrale.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e6-1-pe-11",
    title: "Course rapide",
    situation: "",
    instruction: "Vous demandez à un(e) ami(e) d'aller acheter du pain et vous lui expliquez comment trouver la boulangerie la plus proche.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e6-1-pe-12",
    title: "Arrivée en voiture",
    situation: "",
    instruction: "Votre frère arrive en voiture et vous lui décrivez le chemin depuis l'autoroute, le parking disponible et l'entrée de votre immeuble.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e6-1-pe-13",
    title: "Maison d'un ami",
    situation: "",
    instruction: "Vous expliquez par écrit comment aller chez un(e) ami(e) depuis votre maison en utilisant les mots à gauche, à droite, tout droit et en face.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e6-1-pe-14",
    title: "Marché du samedi",
    situation: "",
    instruction: "Vous écrivez à votre voisin pour lui dire où se trouve le marché du samedi et comment y aller à pied depuis l'arrêt de bus.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e6-1-pe-15",
    title: "Cabinet médical",
    situation: "",
    instruction: "Vous expliquez à un patient comment aller au cabinet médical depuis la gare et vous précisez l'étage et la porte.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e6-1-pe-16",
    title: "Cinéma du centre",
    situation: "",
    instruction: "Vous envoyez à un(e) ami(e) les indications pour vous rejoindre au cinéma du centre avec l'heure du rendez-vous et le meilleur transport.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e6-1-pe-17",
    title: "Chemin sous la pluie",
    situation: "",
    instruction: "Il pleut et vous écrivez un message pour proposer un itinéraire plus court jusqu'à chez vous en évitant les travaux.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e6-1-pe-18",
    title: "Nouvelle salle de sport",
    situation: "",
    instruction: "Vous expliquez à un(e) ami(e) comment trouver la nouvelle salle de sport, où entrer et où vous attendre après l'accueil.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e6-1-pe-19",
    title: "Point de rencontre",
    situation: "",
    instruction: "Vous choisissez un point de rencontre facile et vous écrivez à votre groupe pour expliquer où il se trouve et comment y arriver.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e6-1-pe-20",
    title: "Ami perdu en ville",
    situation: "",
    instruction: "Votre ami(e) est perdu(e) en ville et vous lui envoyez un message calme avec des indications simples pour rejoindre la station de tram.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },

];
