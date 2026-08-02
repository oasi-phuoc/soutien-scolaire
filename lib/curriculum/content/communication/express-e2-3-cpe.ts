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

/* ── Compréhension écrite — E2.3 Respecter le règlement ── */

const CE_TEXT_1 = `Règlement de l'immeuble — Résidence des Tilleuls

Chers habitants,
Pour bien vivre ensemble, merci de respecter ces règles :
— Ne faites pas de bruit après 22 heures.
— Rangez les vélos dans le local, à côté du garage. Le hall d'entrée doit rester libre.
— Mettez les ordures dans le local à poubelles. Les bouteilles en verre vont dans la poubelle verte.
— Tenez votre chien en laisse dans les escaliers et dans le jardin.
— Il est interdit de fumer dans les couloirs et dans l'ascenseur.
Pour toute question, écrivez à la gérance. Merci et bonne journée à tous !`;

const CE_POOL_1 = buildExpressPool("e2-3-1", [
q({
    id: "ce-q1",
    textQ: "Après quelle heure ne faut-il pas faire de bruit ?",
    text: ["Après 22 heures", "Après 20 heures", "Après minuit"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Ne faites pas de bruit après _________ heures.",
    fill: "22",
    fillA: ["vingt-deux", "vingt deux"],
    vfQ: "On peut faire du bruit toute la nuit.",
    vfC: 1,
  }),
  q({
    id: "ce-q2",
    textQ: "Où faut-il ranger les vélos ?",
    text: ["Dans le local, à côté du garage", "Dans le hall d'entrée", "Sur le balcon"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Rangez les vélos dans le _________, à côté du garage.",
    fill: "local",
    vfQ: "Les vélos peuvent rester dans le hall d'entrée.",
    vfC: 1,
  }),
  q({
    id: "ce-q3",
    textQ: "Où vont les bouteilles en verre ?",
    text: ["Dans la poubelle verte", "Dans le hall", "Dans le jardin"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Les bouteilles en verre vont dans la poubelle _________.",
    fill: "verte",
    vfQ: "Il y a une poubelle spéciale pour le verre.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel animal doit être tenu en laisse ?",
    text: ["Le chien", "Le chat", "Le lapin"],
    textC: 0,
    img: ["chien", "chat", "lapin"],
    imgC: 0,
    fillQ: "Tenez votre chien en _________ dans les escaliers et dans le jardin.",
    fill: "laisse",
    vfQ: "Le chien doit être en laisse dans le jardin.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Où est-il interdit de fumer ?",
    text: ["Dans les couloirs et l'ascenseur", "Dans les appartements", "Dans le jardin"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Il est interdit de _________ dans les couloirs et dans l'ascenseur.",
    fill: "fumer",
    vfQ: "On peut fumer dans l'ascenseur.",
    vfC: 1,
  }),
  q({
    id: "ce-q6",
    textQ: "À qui faut-il écrire pour une question ?",
    text: ["À la gérance", "Au facteur", "À la police"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Pour toute question, écrivez à la _________.",
    fill: "gérance",
    fillA: ["gerance"],
    vfQ: "Le nom du gardien est donné dans le règlement.",
    vfC: 2,
  }),
  q({
    id: "ce-q7",
    textQ: "Pourquoi ce règlement existe-t-il ?",
    text: ["Pour bien vivre ensemble", "Pour payer moins cher", "Pour décorer le hall"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Pour bien vivre _________, merci de respecter ces règles.",
    fill: "ensemble",
    vfQ: "Le règlement est écrit pour tous les habitants.",
    vfC: 0,
  }),
  q({
    id: "ce-q8",
    textQ: "Où faut-il mettre les ordures ?",
    text: ["Dans le local à poubelles", "Dans le couloir", "Devant la porte"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Mettez les ordures dans le local à _________.",
    fill: "poubelles",
    vfQ: "Les ordures vont dans le local à poubelles.",
    vfC: 0,
  }),
]);

const CE_TEXT_2 = `Règlement — Résidence 2

Chers habitants,
Merci de respecter ces règles :
— Pas de bruit après 22 heures.
— Rangez les vélos dans le local vélo.
— Le ascenseur doit rester libre.
— Les animaux sont interdits après 22 heures.
Merci de votre compréhension.`;

const CE_POOL_2 = buildExpressPool("e2-3-2", [
  q({
    id: "ce-q1",
    textQ: "Jusqu'à quelle heure faut-il être calme ?",
    text: ["22 heures", "midi", "6 h"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Pas de bruit après _________.",
    fill: "22eures",
    vfQ: "Il faut être calme après 22 heures.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Que faut-il faire avec les vélos ?",
    text: ["Les ranger dans le local vélo", "Les laisser dans le hall", "Les vendre"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Rangez les vélos dans le _________.",
    fill: "vélo",
    vfQ: "Il faut ranger les vélos.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quelle zone doit rester libre ?",
    text: ["Ascenseur", "la cave", "le toit"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Le ascenseur doit rester _________.",
    fill: "libre",
    vfQ: "Le ascenseur doit rester libre.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Que dit le règlement sur le bruit ?",
    text: ["Pas de bruit après 22 heures", "Du bruit toute la nuit", "Rien"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Pas de _________ après 22 heures.",
    fill: "bruit",
    vfQ: "Pas de bruit après 22 heures.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Que dit le règlement sur les animaux ?",
    text: ["Interdits après 22 heures", "Toujours autorisés", "On ne sait pas"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Les animaux sont _________ après 22 heures.",
    fill: "interdits",
    vfQ: "Les animaux sont interdits après 22 heures.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "À qui s'adresse ce texte ?",
    text: ["Aux habitants", "Aux touristes", "Aux enfants"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Chers _________,",
    fill: "habitants",
    vfQ: "Le texte s'adresse aux habitants.",
    vfC: 0,
  }),
]);

const CE_TEXT_3 = `Règlement — Résidence 3

Chers habitants,
Merci de respecter ces règles :
— Pas de musique après 21 heures.
— Rangez les poussettes dans le hall.
— Le escalier doit rester libre.
— Les fêtes sont interdits après 21 heures.
Merci de votre compréhension.`;

const CE_POOL_3 = buildExpressPool("e2-3-3", [
  q({
    id: "ce-q1",
    textQ: "Jusqu'à quelle heure faut-il être calme ?",
    text: ["21 heures", "midi", "6 h"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Pas de musique après _________.",
    fill: "21eures",
    vfQ: "Il faut être calme après 21 heures.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Que faut-il faire avec les poussettes ?",
    text: ["Les ranger dans le hall", "Les laisser dans le hall", "Les vendre"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Rangez les poussettes dans le _________.",
    fill: "hall",
    vfQ: "Il faut ranger les poussettes.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quelle zone doit rester libre ?",
    text: ["Escalier", "la cave", "le toit"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Le escalier doit rester _________.",
    fill: "libre",
    vfQ: "Le escalier doit rester libre.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Que dit le règlement sur le bruit ?",
    text: ["Pas de musique après 21 heures", "Du bruit toute la nuit", "Rien"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Pas de _________ après 21 heures.",
    fill: "musique",
    vfQ: "Pas de musique après 21 heures.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Que dit le règlement sur les fêtes ?",
    text: ["Interdits après 21 heures", "Toujours autorisés", "On ne sait pas"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Les fêtes sont _________ après 21 heures.",
    fill: "interdits",
    vfQ: "Les fêtes sont interdits après 21 heures.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "À qui s'adresse ce texte ?",
    text: ["Aux habitants", "Aux touristes", "Aux enfants"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Chers _________,",
    fill: "habitants",
    vfQ: "Le texte s'adresse aux habitants.",
    vfC: 0,
  }),
]);

const CE_TEXT_4 = `Règlement — Résidence 4

Chers habitants,
Merci de respecter ces règles :
— Pas de télévision après 23 heures.
— Rangez les objets dans le cave.
— Le parking doit rester libre.
— Les barbecue sont interdits après 23 heures.
Merci de votre compréhension.`;

const CE_POOL_4 = buildExpressPool("e2-3-4", [
  q({
    id: "ce-q1",
    textQ: "Jusqu'à quelle heure faut-il être calme ?",
    text: ["23 heures", "midi", "6 h"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Pas de télévision après _________.",
    fill: "23eures",
    vfQ: "Il faut être calme après 23 heures.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Que faut-il faire avec les objets ?",
    text: ["Les ranger dans le cave", "Les laisser dans le hall", "Les vendre"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Rangez les objets dans le _________.",
    fill: "cave",
    vfQ: "Il faut ranger les objets.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quelle zone doit rester libre ?",
    text: ["Parking", "la cave", "le toit"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Le parking doit rester _________.",
    fill: "libre",
    vfQ: "Le parking doit rester libre.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Que dit le règlement sur le bruit ?",
    text: ["Pas de télévision après 23 heures", "Du bruit toute la nuit", "Rien"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Pas de _________ après 23 heures.",
    fill: "télévision",
    vfQ: "Pas de télévision après 23 heures.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Que dit le règlement sur les barbecue ?",
    text: ["Interdits après 23 heures", "Toujours autorisés", "On ne sait pas"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Les barbecue sont _________ après 23 heures.",
    fill: "interdits",
    vfQ: "Les barbecue sont interdits après 23 heures.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "À qui s'adresse ce texte ?",
    text: ["Aux habitants", "Aux touristes", "Aux enfants"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Chers _________,",
    fill: "habitants",
    vfQ: "Le texte s'adresse aux habitants.",
    vfC: 0,
  }),
]);

const CE_TEXT_5 = `Règlement — Résidence 5

Chers habitants,
Merci de respecter ces règles :
— Pas de voix après 20 heures.
— Rangez les colis dans le boîtes aux lettres.
— Le jardin doit rester libre.
— Les ballons sont interdits après 20 heures.
Merci de votre compréhension.`;

const CE_POOL_5 = buildExpressPool("e2-3-5", [
  q({
    id: "ce-q1",
    textQ: "Jusqu'à quelle heure faut-il être calme ?",
    text: ["20 heures", "midi", "6 h"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Pas de voix après _________.",
    fill: "20eures",
    vfQ: "Il faut être calme après 20 heures.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Que faut-il faire avec les colis ?",
    text: ["Les ranger dans le boîtes aux lettres", "Les laisser dans le hall", "Les vendre"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Rangez les colis dans le _________.",
    fill: "lettres",
    vfQ: "Il faut ranger les colis.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quelle zone doit rester libre ?",
    text: ["Jardin", "la cave", "le toit"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Le jardin doit rester _________.",
    fill: "libre",
    vfQ: "Le jardin doit rester libre.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Que dit le règlement sur le bruit ?",
    text: ["Pas de voix après 20 heures", "Du bruit toute la nuit", "Rien"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Pas de _________ après 20 heures.",
    fill: "voix",
    vfQ: "Pas de voix après 20 heures.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Que dit le règlement sur les ballons ?",
    text: ["Interdits après 20 heures", "Toujours autorisés", "On ne sait pas"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Les ballons sont _________ après 20 heures.",
    fill: "interdits",
    vfQ: "Les ballons sont interdits après 20 heures.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "À qui s'adresse ce texte ?",
    text: ["Aux habitants", "Aux touristes", "Aux enfants"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Chers _________,",
    fill: "habitants",
    vfQ: "Le texte s'adresse aux habitants.",
    vfC: 0,
  }),
]);

const CE_TEXT_6 = `Règlement — Résidence 6

Chers habitants,
Merci de respecter ces règles :
— Pas de bruit après 22 h 30.
— Rangez les vélos dans le garage.
— Le local poubelles doit rester libre.
— Les fenêtres sont interdits après 22 h 30.
Merci de votre compréhension.`;

const CE_POOL_6 = buildExpressPool("e2-3-6", [
  q({
    id: "ce-q1",
    textQ: "Jusqu'à quelle heure faut-il être calme ?",
    text: ["22 h 30", "midi", "6 h"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Pas de bruit après _________.",
    fill: "22",
    vfQ: "Il faut être calme après 22 h 30.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Que faut-il faire avec les vélos ?",
    text: ["Les ranger dans le garage", "Les laisser dans le hall", "Les vendre"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Rangez les vélos dans le _________.",
    fill: "garage",
    vfQ: "Il faut ranger les vélos.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quelle zone doit rester libre ?",
    text: ["Local poubelles", "la cave", "le toit"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Le local poubelles doit rester _________.",
    fill: "libre",
    vfQ: "Le local poubelles doit rester libre.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Que dit le règlement sur le bruit ?",
    text: ["Pas de bruit après 22 h 30", "Du bruit toute la nuit", "Rien"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Pas de _________ après 22 h 30.",
    fill: "bruit",
    vfQ: "Pas de bruit après 22 h 30.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Que dit le règlement sur les fenêtres ?",
    text: ["Interdits après 22 h 30", "Toujours autorisés", "On ne sait pas"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Les fenêtres sont _________ après 22 h 30.",
    fill: "interdits",
    vfQ: "Les fenêtres sont interdits après 22 h 30.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "À qui s'adresse ce texte ?",
    text: ["Aux habitants", "Aux touristes", "Aux enfants"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Chers _________,",
    fill: "habitants",
    vfQ: "Le texte s'adresse aux habitants.",
    vfC: 0,
  }),
]);

const CE_TEXT_7 = `Règlement — Résidence 7

Chers habitants,
Merci de respecter ces règles :
— Pas de fêtes après 21 h 30.
— Rangez les trottinettes dans le local.
— Le hall doit rester libre.
— Les musique sont interdits après 21 h 30.
Merci de votre compréhension.`;

const CE_POOL_7 = buildExpressPool("e2-3-7", [
  q({
    id: "ce-q1",
    textQ: "Jusqu'à quelle heure faut-il être calme ?",
    text: ["21 h 30", "midi", "6 h"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Pas de fêtes après _________.",
    fill: "21",
    vfQ: "Il faut être calme après 21 h 30.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Que faut-il faire avec les trottinettes ?",
    text: ["Les ranger dans le local", "Les laisser dans le hall", "Les vendre"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Rangez les trottinettes dans le _________.",
    fill: "local",
    vfQ: "Il faut ranger les trottinettes.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quelle zone doit rester libre ?",
    text: ["Hall", "la cave", "le toit"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Le hall doit rester _________.",
    fill: "libre",
    vfQ: "Le hall doit rester libre.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Que dit le règlement sur le bruit ?",
    text: ["Pas de fêtes après 21 h 30", "Du bruit toute la nuit", "Rien"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Pas de _________ après 21 h 30.",
    fill: "fêtes",
    vfQ: "Pas de fêtes après 21 h 30.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Que dit le règlement sur les musique ?",
    text: ["Interdits après 21 h 30", "Toujours autorisés", "On ne sait pas"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Les musique sont _________ après 21 h 30.",
    fill: "interdits",
    vfQ: "Les musique sont interdits après 21 h 30.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "À qui s'adresse ce texte ?",
    text: ["Aux habitants", "Aux touristes", "Aux enfants"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Chers _________,",
    fill: "habitants",
    vfQ: "Le texte s'adresse aux habitants.",
    vfC: 0,
  }),
]);

const CE_TEXT_8 = `Règlement — Résidence 8

Chers habitants,
Merci de respecter ces règles :
— Pas de enfants après 22 heures.
— Rangez les jouets dans le hall.
— Le ascenseur doit rester libre.
— Les portes sont interdits après 22 heures.
Merci de votre compréhension.`;

const CE_POOL_8 = buildExpressPool("e2-3-8", [
  q({
    id: "ce-q1",
    textQ: "Jusqu'à quelle heure faut-il être calme ?",
    text: ["22 heures", "midi", "6 h"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Pas de enfants après _________.",
    fill: "22eures",
    vfQ: "Il faut être calme après 22 heures.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Que faut-il faire avec les jouets ?",
    text: ["Les ranger dans le hall", "Les laisser dans le hall", "Les vendre"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Rangez les jouets dans le _________.",
    fill: "hall",
    vfQ: "Il faut ranger les jouets.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quelle zone doit rester libre ?",
    text: ["Ascenseur", "la cave", "le toit"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Le ascenseur doit rester _________.",
    fill: "libre",
    vfQ: "Le ascenseur doit rester libre.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Que dit le règlement sur le bruit ?",
    text: ["Pas de enfants après 22 heures", "Du bruit toute la nuit", "Rien"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Pas de _________ après 22 heures.",
    fill: "enfants",
    vfQ: "Pas de enfants après 22 heures.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Que dit le règlement sur les portes ?",
    text: ["Interdits après 22 heures", "Toujours autorisés", "On ne sait pas"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Les portes sont _________ après 22 heures.",
    fill: "interdits",
    vfQ: "Les portes sont interdits après 22 heures.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "À qui s'adresse ce texte ?",
    text: ["Aux habitants", "Aux touristes", "Aux enfants"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Chers _________,",
    fill: "habitants",
    vfQ: "Le texte s'adresse aux habitants.",
    vfC: 0,
  }),
]);

const CE_TEXT_9 = `Règlement — Résidence 9

Chers habitants,
Merci de respecter ces règles :
— Pas de bruit après 20 h 30.
— Rangez les vélos dans le cave.
— Le escalier doit rester libre.
— Les voitures sont interdits après 20 h 30.
Merci de votre compréhension.`;

const CE_POOL_9 = buildExpressPool("e2-3-9", [
  q({
    id: "ce-q1",
    textQ: "Jusqu'à quelle heure faut-il être calme ?",
    text: ["20 h 30", "midi", "6 h"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Pas de bruit après _________.",
    fill: "20",
    vfQ: "Il faut être calme après 20 h 30.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Que faut-il faire avec les vélos ?",
    text: ["Les ranger dans le cave", "Les laisser dans le hall", "Les vendre"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Rangez les vélos dans le _________.",
    fill: "cave",
    vfQ: "Il faut ranger les vélos.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quelle zone doit rester libre ?",
    text: ["Escalier", "la cave", "le toit"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Le escalier doit rester _________.",
    fill: "libre",
    vfQ: "Le escalier doit rester libre.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Que dit le règlement sur le bruit ?",
    text: ["Pas de bruit après 20 h 30", "Du bruit toute la nuit", "Rien"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Pas de _________ après 20 h 30.",
    fill: "bruit",
    vfQ: "Pas de bruit après 20 h 30.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Que dit le règlement sur les voitures ?",
    text: ["Interdits après 20 h 30", "Toujours autorisés", "On ne sait pas"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Les voitures sont _________ après 20 h 30.",
    fill: "interdits",
    vfQ: "Les voitures sont interdits après 20 h 30.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "À qui s'adresse ce texte ?",
    text: ["Aux habitants", "Aux touristes", "Aux enfants"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Chers _________,",
    fill: "habitants",
    vfQ: "Le texte s'adresse aux habitants.",
    vfC: 0,
  }),
]);

const CE_TEXT_10 = `Règlement — Résidence 10

Chers habitants,
Merci de respecter ces règles :
— Pas de musique après 23 heures.
— Rangez les objets dans le local vélo.
— Le parking doit rester libre.
— Les fêtes sont interdits après 23 heures.
Merci de votre compréhension.`;

const CE_POOL_10 = buildExpressPool("e2-3-10", [
  q({
    id: "ce-q1",
    textQ: "Jusqu'à quelle heure faut-il être calme ?",
    text: ["23 heures", "midi", "6 h"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Pas de musique après _________.",
    fill: "23eures",
    vfQ: "Il faut être calme après 23 heures.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Que faut-il faire avec les objets ?",
    text: ["Les ranger dans le local vélo", "Les laisser dans le hall", "Les vendre"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Rangez les objets dans le _________.",
    fill: "vélo",
    vfQ: "Il faut ranger les objets.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quelle zone doit rester libre ?",
    text: ["Parking", "la cave", "le toit"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Le parking doit rester _________.",
    fill: "libre",
    vfQ: "Le parking doit rester libre.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Que dit le règlement sur le bruit ?",
    text: ["Pas de musique après 23 heures", "Du bruit toute la nuit", "Rien"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Pas de _________ après 23 heures.",
    fill: "musique",
    vfQ: "Pas de musique après 23 heures.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Que dit le règlement sur les fêtes ?",
    text: ["Interdits après 23 heures", "Toujours autorisés", "On ne sait pas"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Les fêtes sont _________ après 23 heures.",
    fill: "interdits",
    vfQ: "Les fêtes sont interdits après 23 heures.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "À qui s'adresse ce texte ?",
    text: ["Aux habitants", "Aux touristes", "Aux enfants"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Chers _________,",
    fill: "habitants",
    vfQ: "Le texte s'adresse aux habitants.",
    vfC: 0,
  }),
]);

const CE_TEXT_11 = `Règlement — Résidence 11

Chers habitants,
Merci de respecter ces règles :
— Pas de télé après 22 heures.
— Rangez les poussettes dans le hall.
— Le jardin doit rester libre.
— Les animaux sont interdits après 22 heures.
Merci de votre compréhension.`;

const CE_POOL_11 = buildExpressPool("e2-3-11", [
  q({
    id: "ce-q1",
    textQ: "Jusqu'à quelle heure faut-il être calme ?",
    text: ["22 heures", "midi", "6 h"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Pas de télé après _________.",
    fill: "22eures",
    vfQ: "Il faut être calme après 22 heures.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Que faut-il faire avec les poussettes ?",
    text: ["Les ranger dans le hall", "Les laisser dans le hall", "Les vendre"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Rangez les poussettes dans le _________.",
    fill: "hall",
    vfQ: "Il faut ranger les poussettes.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quelle zone doit rester libre ?",
    text: ["Jardin", "la cave", "le toit"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Le jardin doit rester _________.",
    fill: "libre",
    vfQ: "Le jardin doit rester libre.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Que dit le règlement sur le bruit ?",
    text: ["Pas de télé après 22 heures", "Du bruit toute la nuit", "Rien"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Pas de _________ après 22 heures.",
    fill: "télé",
    vfQ: "Pas de télé après 22 heures.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Que dit le règlement sur les animaux ?",
    text: ["Interdits après 22 heures", "Toujours autorisés", "On ne sait pas"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Les animaux sont _________ après 22 heures.",
    fill: "interdits",
    vfQ: "Les animaux sont interdits après 22 heures.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "À qui s'adresse ce texte ?",
    text: ["Aux habitants", "Aux touristes", "Aux enfants"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Chers _________,",
    fill: "habitants",
    vfQ: "Le texte s'adresse aux habitants.",
    vfC: 0,
  }),
]);

const CE_TEXT_12 = `Règlement — Résidence 12

Chers habitants,
Merci de respecter ces règles :
— Pas de bruit après 21 heures.
— Rangez les colis dans le boîtes aux lettres.
— Le ascenseur doit rester libre.
— Les fenêtres sont interdits après 21 heures.
Merci de votre compréhension.`;

const CE_POOL_12 = buildExpressPool("e2-3-12", [
  q({
    id: "ce-q1",
    textQ: "Jusqu'à quelle heure faut-il être calme ?",
    text: ["21 heures", "midi", "6 h"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Pas de bruit après _________.",
    fill: "21eures",
    vfQ: "Il faut être calme après 21 heures.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Que faut-il faire avec les colis ?",
    text: ["Les ranger dans le boîtes aux lettres", "Les laisser dans le hall", "Les vendre"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Rangez les colis dans le _________.",
    fill: "lettres",
    vfQ: "Il faut ranger les colis.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quelle zone doit rester libre ?",
    text: ["Ascenseur", "la cave", "le toit"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Le ascenseur doit rester _________.",
    fill: "libre",
    vfQ: "Le ascenseur doit rester libre.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Que dit le règlement sur le bruit ?",
    text: ["Pas de bruit après 21 heures", "Du bruit toute la nuit", "Rien"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Pas de _________ après 21 heures.",
    fill: "bruit",
    vfQ: "Pas de bruit après 21 heures.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Que dit le règlement sur les fenêtres ?",
    text: ["Interdits après 21 heures", "Toujours autorisés", "On ne sait pas"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Les fenêtres sont _________ après 21 heures.",
    fill: "interdits",
    vfQ: "Les fenêtres sont interdits après 21 heures.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "À qui s'adresse ce texte ?",
    text: ["Aux habitants", "Aux touristes", "Aux enfants"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Chers _________,",
    fill: "habitants",
    vfQ: "Le texte s'adresse aux habitants.",
    vfC: 0,
  }),
]);

const CE_TEXT_13 = `Règlement — Résidence 13

Chers habitants,
Merci de respecter ces règles :
— Pas de voix après 22 h 30.
— Rangez les vélos dans le garage.
— Le local poubelles doit rester libre.
— Les barbecue sont interdits après 22 h 30.
Merci de votre compréhension.`;

const CE_POOL_13 = buildExpressPool("e2-3-13", [
  q({
    id: "ce-q1",
    textQ: "Jusqu'à quelle heure faut-il être calme ?",
    text: ["22 h 30", "midi", "6 h"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Pas de voix après _________.",
    fill: "22",
    vfQ: "Il faut être calme après 22 h 30.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Que faut-il faire avec les vélos ?",
    text: ["Les ranger dans le garage", "Les laisser dans le hall", "Les vendre"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Rangez les vélos dans le _________.",
    fill: "garage",
    vfQ: "Il faut ranger les vélos.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quelle zone doit rester libre ?",
    text: ["Local poubelles", "la cave", "le toit"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Le local poubelles doit rester _________.",
    fill: "libre",
    vfQ: "Le local poubelles doit rester libre.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Que dit le règlement sur le bruit ?",
    text: ["Pas de voix après 22 h 30", "Du bruit toute la nuit", "Rien"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Pas de _________ après 22 h 30.",
    fill: "voix",
    vfQ: "Pas de voix après 22 h 30.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Que dit le règlement sur les barbecue ?",
    text: ["Interdits après 22 h 30", "Toujours autorisés", "On ne sait pas"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Les barbecue sont _________ après 22 h 30.",
    fill: "interdits",
    vfQ: "Les barbecue sont interdits après 22 h 30.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "À qui s'adresse ce texte ?",
    text: ["Aux habitants", "Aux touristes", "Aux enfants"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Chers _________,",
    fill: "habitants",
    vfQ: "Le texte s'adresse aux habitants.",
    vfC: 0,
  }),
]);

const CE_TEXT_14 = `Règlement — Résidence 14

Chers habitants,
Merci de respecter ces règles :
— Pas de musique après 20 heures.
— Rangez les trottinettes dans le local.
— Le hall doit rester libre.
— Les ballons sont interdits après 20 heures.
Merci de votre compréhension.`;

const CE_POOL_14 = buildExpressPool("e2-3-14", [
  q({
    id: "ce-q1",
    textQ: "Jusqu'à quelle heure faut-il être calme ?",
    text: ["20 heures", "midi", "6 h"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Pas de musique après _________.",
    fill: "20eures",
    vfQ: "Il faut être calme après 20 heures.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Que faut-il faire avec les trottinettes ?",
    text: ["Les ranger dans le local", "Les laisser dans le hall", "Les vendre"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Rangez les trottinettes dans le _________.",
    fill: "local",
    vfQ: "Il faut ranger les trottinettes.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quelle zone doit rester libre ?",
    text: ["Hall", "la cave", "le toit"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Le hall doit rester _________.",
    fill: "libre",
    vfQ: "Le hall doit rester libre.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Que dit le règlement sur le bruit ?",
    text: ["Pas de musique après 20 heures", "Du bruit toute la nuit", "Rien"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Pas de _________ après 20 heures.",
    fill: "musique",
    vfQ: "Pas de musique après 20 heures.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Que dit le règlement sur les ballons ?",
    text: ["Interdits après 20 heures", "Toujours autorisés", "On ne sait pas"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Les ballons sont _________ après 20 heures.",
    fill: "interdits",
    vfQ: "Les ballons sont interdits après 20 heures.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "À qui s'adresse ce texte ?",
    text: ["Aux habitants", "Aux touristes", "Aux enfants"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Chers _________,",
    fill: "habitants",
    vfQ: "Le texte s'adresse aux habitants.",
    vfC: 0,
  }),
]);

const CE_TEXT_15 = `Règlement — Résidence 15

Chers habitants,
Merci de respecter ces règles :
— Pas de bruit après 23 heures.
— Rangez les objets dans le cave.
— Le parking doit rester libre.
— Les portes sont interdits après 23 heures.
Merci de votre compréhension.`;

const CE_POOL_15 = buildExpressPool("e2-3-15", [
  q({
    id: "ce-q1",
    textQ: "Jusqu'à quelle heure faut-il être calme ?",
    text: ["23 heures", "midi", "6 h"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Pas de bruit après _________.",
    fill: "23eures",
    vfQ: "Il faut être calme après 23 heures.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Que faut-il faire avec les objets ?",
    text: ["Les ranger dans le cave", "Les laisser dans le hall", "Les vendre"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Rangez les objets dans le _________.",
    fill: "cave",
    vfQ: "Il faut ranger les objets.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quelle zone doit rester libre ?",
    text: ["Parking", "la cave", "le toit"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Le parking doit rester _________.",
    fill: "libre",
    vfQ: "Le parking doit rester libre.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Que dit le règlement sur le bruit ?",
    text: ["Pas de bruit après 23 heures", "Du bruit toute la nuit", "Rien"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Pas de _________ après 23 heures.",
    fill: "bruit",
    vfQ: "Pas de bruit après 23 heures.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Que dit le règlement sur les portes ?",
    text: ["Interdits après 23 heures", "Toujours autorisés", "On ne sait pas"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Les portes sont _________ après 23 heures.",
    fill: "interdits",
    vfQ: "Les portes sont interdits après 23 heures.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "À qui s'adresse ce texte ?",
    text: ["Aux habitants", "Aux touristes", "Aux enfants"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Chers _________,",
    fill: "habitants",
    vfQ: "Le texte s'adresse aux habitants.",
    vfC: 0,
  }),
]);

const CE_TEXT_16 = `Règlement — Résidence 16

Chers habitants,
Merci de respecter ces règles :
— Pas de fêtes après 22 heures.
— Rangez les poussettes dans le hall.
— Le escalier doit rester libre.
— Les animaux sont interdits après 22 heures.
Merci de votre compréhension.`;

const CE_POOL_16 = buildExpressPool("e2-3-16", [
  q({
    id: "ce-q1",
    textQ: "Jusqu'à quelle heure faut-il être calme ?",
    text: ["22 heures", "midi", "6 h"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Pas de fêtes après _________.",
    fill: "22eures",
    vfQ: "Il faut être calme après 22 heures.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Que faut-il faire avec les poussettes ?",
    text: ["Les ranger dans le hall", "Les laisser dans le hall", "Les vendre"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Rangez les poussettes dans le _________.",
    fill: "hall",
    vfQ: "Il faut ranger les poussettes.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quelle zone doit rester libre ?",
    text: ["Escalier", "la cave", "le toit"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Le escalier doit rester _________.",
    fill: "libre",
    vfQ: "Le escalier doit rester libre.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Que dit le règlement sur le bruit ?",
    text: ["Pas de fêtes après 22 heures", "Du bruit toute la nuit", "Rien"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Pas de _________ après 22 heures.",
    fill: "fêtes",
    vfQ: "Pas de fêtes après 22 heures.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Que dit le règlement sur les animaux ?",
    text: ["Interdits après 22 heures", "Toujours autorisés", "On ne sait pas"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Les animaux sont _________ après 22 heures.",
    fill: "interdits",
    vfQ: "Les animaux sont interdits après 22 heures.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "À qui s'adresse ce texte ?",
    text: ["Aux habitants", "Aux touristes", "Aux enfants"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Chers _________,",
    fill: "habitants",
    vfQ: "Le texte s'adresse aux habitants.",
    vfC: 0,
  }),
]);

const CE_TEXT_17 = `Règlement — Résidence 17

Chers habitants,
Merci de respecter ces règles :
— Pas de télé après 21 h 30.
— Rangez les vélos dans le local vélo.
— Le jardin doit rester libre.
— Les voitures sont interdits après 21 h 30.
Merci de votre compréhension.`;

const CE_POOL_17 = buildExpressPool("e2-3-17", [
  q({
    id: "ce-q1",
    textQ: "Jusqu'à quelle heure faut-il être calme ?",
    text: ["21 h 30", "midi", "6 h"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Pas de télé après _________.",
    fill: "21",
    vfQ: "Il faut être calme après 21 h 30.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Que faut-il faire avec les vélos ?",
    text: ["Les ranger dans le local vélo", "Les laisser dans le hall", "Les vendre"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Rangez les vélos dans le _________.",
    fill: "vélo",
    vfQ: "Il faut ranger les vélos.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quelle zone doit rester libre ?",
    text: ["Jardin", "la cave", "le toit"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Le jardin doit rester _________.",
    fill: "libre",
    vfQ: "Le jardin doit rester libre.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Que dit le règlement sur le bruit ?",
    text: ["Pas de télé après 21 h 30", "Du bruit toute la nuit", "Rien"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Pas de _________ après 21 h 30.",
    fill: "télé",
    vfQ: "Pas de télé après 21 h 30.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Que dit le règlement sur les voitures ?",
    text: ["Interdits après 21 h 30", "Toujours autorisés", "On ne sait pas"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Les voitures sont _________ après 21 h 30.",
    fill: "interdits",
    vfQ: "Les voitures sont interdits après 21 h 30.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "À qui s'adresse ce texte ?",
    text: ["Aux habitants", "Aux touristes", "Aux enfants"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Chers _________,",
    fill: "habitants",
    vfQ: "Le texte s'adresse aux habitants.",
    vfC: 0,
  }),
]);

const CE_TEXT_18 = `Règlement — Résidence 18

Chers habitants,
Merci de respecter ces règles :
— Pas de enfants après 22 heures.
— Rangez les colis dans le boîtes aux lettres.
— Le ascenseur doit rester libre.
— Les musique sont interdits après 22 heures.
Merci de votre compréhension.`;

const CE_POOL_18 = buildExpressPool("e2-3-18", [
  q({
    id: "ce-q1",
    textQ: "Jusqu'à quelle heure faut-il être calme ?",
    text: ["22 heures", "midi", "6 h"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Pas de enfants après _________.",
    fill: "22eures",
    vfQ: "Il faut être calme après 22 heures.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Que faut-il faire avec les colis ?",
    text: ["Les ranger dans le boîtes aux lettres", "Les laisser dans le hall", "Les vendre"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Rangez les colis dans le _________.",
    fill: "lettres",
    vfQ: "Il faut ranger les colis.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quelle zone doit rester libre ?",
    text: ["Ascenseur", "la cave", "le toit"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Le ascenseur doit rester _________.",
    fill: "libre",
    vfQ: "Le ascenseur doit rester libre.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Que dit le règlement sur le bruit ?",
    text: ["Pas de enfants après 22 heures", "Du bruit toute la nuit", "Rien"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Pas de _________ après 22 heures.",
    fill: "enfants",
    vfQ: "Pas de enfants après 22 heures.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Que dit le règlement sur les musique ?",
    text: ["Interdits après 22 heures", "Toujours autorisés", "On ne sait pas"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Les musique sont _________ après 22 heures.",
    fill: "interdits",
    vfQ: "Les musique sont interdits après 22 heures.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "À qui s'adresse ce texte ?",
    text: ["Aux habitants", "Aux touristes", "Aux enfants"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Chers _________,",
    fill: "habitants",
    vfQ: "Le texte s'adresse aux habitants.",
    vfC: 0,
  }),
]);

const CE_TEXT_19 = `Règlement — Résidence 19

Chers habitants,
Merci de respecter ces règles :
— Pas de bruit après 20 h 30.
— Rangez les objets dans le garage.
— Le local poubelles doit rester libre.
— Les fenêtres sont interdits après 20 h 30.
Merci de votre compréhension.`;

const CE_POOL_19 = buildExpressPool("e2-3-19", [
  q({
    id: "ce-q1",
    textQ: "Jusqu'à quelle heure faut-il être calme ?",
    text: ["20 h 30", "midi", "6 h"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Pas de bruit après _________.",
    fill: "20",
    vfQ: "Il faut être calme après 20 h 30.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Que faut-il faire avec les objets ?",
    text: ["Les ranger dans le garage", "Les laisser dans le hall", "Les vendre"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Rangez les objets dans le _________.",
    fill: "garage",
    vfQ: "Il faut ranger les objets.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quelle zone doit rester libre ?",
    text: ["Local poubelles", "la cave", "le toit"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Le local poubelles doit rester _________.",
    fill: "libre",
    vfQ: "Le local poubelles doit rester libre.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Que dit le règlement sur le bruit ?",
    text: ["Pas de bruit après 20 h 30", "Du bruit toute la nuit", "Rien"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Pas de _________ après 20 h 30.",
    fill: "bruit",
    vfQ: "Pas de bruit après 20 h 30.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Que dit le règlement sur les fenêtres ?",
    text: ["Interdits après 20 h 30", "Toujours autorisés", "On ne sait pas"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Les fenêtres sont _________ après 20 h 30.",
    fill: "interdits",
    vfQ: "Les fenêtres sont interdits après 20 h 30.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "À qui s'adresse ce texte ?",
    text: ["Aux habitants", "Aux touristes", "Aux enfants"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Chers _________,",
    fill: "habitants",
    vfQ: "Le texte s'adresse aux habitants.",
    vfC: 0,
  }),
]);

const CE_TEXT_20 = `Règlement — Résidence 20

Chers habitants,
Merci de respecter ces règles :
— Pas de musique après 23 heures.
— Rangez les trottinettes dans le local.
— Le parking doit rester libre.
— Les barbecue sont interdits après 23 heures.
Merci de votre compréhension.`;

const CE_POOL_20 = buildExpressPool("e2-3-20", [
  q({
    id: "ce-q1",
    textQ: "Jusqu'à quelle heure faut-il être calme ?",
    text: ["23 heures", "midi", "6 h"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Pas de musique après _________.",
    fill: "23eures",
    vfQ: "Il faut être calme après 23 heures.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Que faut-il faire avec les trottinettes ?",
    text: ["Les ranger dans le local", "Les laisser dans le hall", "Les vendre"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Rangez les trottinettes dans le _________.",
    fill: "local",
    vfQ: "Il faut ranger les trottinettes.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quelle zone doit rester libre ?",
    text: ["Parking", "la cave", "le toit"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Le parking doit rester _________.",
    fill: "libre",
    vfQ: "Le parking doit rester libre.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Que dit le règlement sur le bruit ?",
    text: ["Pas de musique après 23 heures", "Du bruit toute la nuit", "Rien"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Pas de _________ après 23 heures.",
    fill: "musique",
    vfQ: "Pas de musique après 23 heures.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Que dit le règlement sur les barbecue ?",
    text: ["Interdits après 23 heures", "Toujours autorisés", "On ne sait pas"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Les barbecue sont _________ après 23 heures.",
    fill: "interdits",
    vfQ: "Les barbecue sont interdits après 23 heures.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "À qui s'adresse ce texte ?",
    text: ["Aux habitants", "Aux touristes", "Aux enfants"],
    textC: 0,
    img: ["livre", "cuisinier", "médecin"],
    imgC: 0,
    fillQ: "Chers _________,",
    fill: "habitants",
    vfQ: "Le texte s'adresse aux habitants.",
    vfC: 0,
  }),
]);

export const E2_3_CE: CommunicationExercise[] = [
  readingPoolExercise({
  id: "e2-3-1",
  readingText: CE_TEXT_1,
  questionPool: CE_POOL_1
}),
  readingPoolExercise({
  id: "e2-3-2",
  readingText: CE_TEXT_2,
  questionPool: CE_POOL_2
}),
  readingPoolExercise({
  id: "e2-3-3",
  readingText: CE_TEXT_3,
  questionPool: CE_POOL_3
}),
  readingPoolExercise({
  id: "e2-3-4",
  readingText: CE_TEXT_4,
  questionPool: CE_POOL_4
}),
  readingPoolExercise({
  id: "e2-3-5",
  readingText: CE_TEXT_5,
  questionPool: CE_POOL_5
}),
  readingPoolExercise({
  id: "e2-3-6",
  readingText: CE_TEXT_6,
  questionPool: CE_POOL_6
}),
  readingPoolExercise({
  id: "e2-3-7",
  readingText: CE_TEXT_7,
  questionPool: CE_POOL_7
}),
  readingPoolExercise({
  id: "e2-3-8",
  readingText: CE_TEXT_8,
  questionPool: CE_POOL_8
}),
  readingPoolExercise({
  id: "e2-3-9",
  readingText: CE_TEXT_9,
  questionPool: CE_POOL_9
}),
  readingPoolExercise({
  id: "e2-3-10",
  readingText: CE_TEXT_10,
  questionPool: CE_POOL_10
}),
  readingPoolExercise({
  id: "e2-3-11",
  readingText: CE_TEXT_11,
  questionPool: CE_POOL_11
}),
  readingPoolExercise({
  id: "e2-3-12",
  readingText: CE_TEXT_12,
  questionPool: CE_POOL_12
}),
  readingPoolExercise({
  id: "e2-3-13",
  readingText: CE_TEXT_13,
  questionPool: CE_POOL_13
}),
  readingPoolExercise({
  id: "e2-3-14",
  readingText: CE_TEXT_14,
  questionPool: CE_POOL_14
}),
  readingPoolExercise({
  id: "e2-3-15",
  readingText: CE_TEXT_15,
  questionPool: CE_POOL_15
}),
  readingPoolExercise({
  id: "e2-3-16",
  readingText: CE_TEXT_16,
  questionPool: CE_POOL_16
}),
  readingPoolExercise({
  id: "e2-3-17",
  readingText: CE_TEXT_17,
  questionPool: CE_POOL_17
}),
  readingPoolExercise({
  id: "e2-3-18",
  readingText: CE_TEXT_18,
  questionPool: CE_POOL_18
}),
  readingPoolExercise({
  id: "e2-3-19",
  readingText: CE_TEXT_19,
  questionPool: CE_POOL_19
}),
  readingPoolExercise({
  id: "e2-3-20",
  readingText: CE_TEXT_20,
  questionPool: CE_POOL_20
}),
];

/* ── Production orale — dialogues à jouer (thème règlement) ────────────────── */

const VOISIN = { title: "Le voisin", vous: "le voisin / la voisine" };
const HABITANT = { title: "L'habitant", vous: "l'habitant / l'habitante" };
const VOUS = { title: "Vous", vous: "vous-même" };

export const E2_3_PO: ExpressPoDialogue[] = [
  {
    id: "e2-3-po-1",
    title: "Accueillir un nouveau voisin",
    context: "Vous êtes nouveau dans l'immeuble et un voisin vous explique les règles.",
    roleA: VOISIN,
    roleB: { title: "Le nouveau voisin", vous: "le nouveau voisin / la nouvelle voisine" },
    lines: [
      { role: "A", text: "Bonjour ! Vous êtes nouveau dans l'immeuble ?" },
      { role: "B", text: "Oui, bonjour ! J'habite au 2e étage depuis lundi." },
      { role: "A", text: "Bienvenue ! Vous avez lu le règlement ?" },
      { role: "B", text: "Non, pas encore. Où est-il ?" },
      { role: "A", text: "Dans le hall d'entrée, à côté des boîtes aux lettres." },
      { role: "B", text: "Merci ! Et où je peux ranger mon vélo ?" },
      { role: "A", text: "Dans le local à vélos, à côté du garage." },
      { role: "B", text: "Parfait, merci pour votre aide !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e2-3-po-2",
    title: "Le chien sans laisse",
    context: "La gardienne vous rappelle que les chiens doivent être en laisse.",
    roleA: { title: "La gardienne", vous: "le gardien / la gardienne" },
    roleB: HABITANT,
    lines: [
      { role: "A", text: "Bonjour ! Excusez-moi, votre chien n'est pas en laisse." },
      { role: "B", text: "Ah, pardon ! Il est gentil, vous savez." },
      { role: "A", text: "Oui, mais le règlement demande la laisse dans l'immeuble." },
      { role: "B", text: "Vous avez raison, je la mets tout de suite." },
      { role: "A", text: "Merci. C'est important pour les autres habitants." },
      { role: "B", text: "Bien sûr, je comprends. Promis, je fais attention." },
      { role: "A", text: "Merci beaucoup ! Bonne journée !" },
      { role: "B", text: "Bonne journée à vous aussi !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e2-3-po-3",
    title: "Trop de bruit le soir",
    context: "Il est tard et votre voisin vient vous parler de votre musique.",
    roleA: VOISIN,
    roleB: VOUS,
    lines: [
      { role: "A", text: "Bonsoir, excusez-moi, votre musique est très forte." },
      { role: "B", text: "Oh, bonsoir ! Vraiment ? Je suis désolé." },
      { role: "A", text: "Oui, il est 23 heures et je travaille demain matin." },
      { role: "B", text: "Pardon, je baisse la musique tout de suite." },
      { role: "A", text: "Merci. Le règlement dit : pas de bruit après 22 heures." },
      { role: "B", text: "Vous avez raison. Ça n'arrivera plus." },
      { role: "A", text: "Merci beaucoup, bonne soirée !" },
      { role: "B", text: "Bonne soirée, et encore pardon !" },
      { role: "A", text: "On se voit après la pause ?" },
      { role: "B", text: "Oui, avec plaisir !" },
],
  },
  {
    id: "e2-3-po-4",
    title: "La poubelle dans le couloir",
    context: "Une voisine vous parle de votre poubelle laissée dans le couloir.",
    roleA: { title: "La voisine", vous: "le voisin / la voisine" },
    roleB: HABITANT,
    lines: [
      { role: "A", text: "Bonjour ! Il y a une poubelle dans le couloir, elle est à vous ?" },
      { role: "B", text: "Euh… oui, je descends au local à poubelles ce soir." },
      { role: "A", text: "D'accord, mais ça sent mauvais dans le couloir." },
      { role: "B", text: "Vous avez raison, je suis désolé." },
      { role: "A", text: "Le local à poubelles est ouvert toute la journée, vous savez." },
      { role: "B", text: "Oui, oui. Je descends la poubelle maintenant." },
      { role: "A", text: "Merci beaucoup ! Le couloir doit rester propre." },
      { role: "B", text: "Bien sûr. Ça ne va pas se répéter !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e2-3-po-5",
    title: "Où ranger son vélo ?",
    context: "Vous demandez au gardien où ranger votre vélo et votre voiture.",
    roleA: { title: "Le gardien", vous: "le gardien / la gardienne" },
    roleB: { title: "L'habitante", vous: "l'habitant / l'habitante" },
    lines: [
      { role: "A", text: "Bonjour madame ! Je peux vous aider ?" },
      { role: "B", text: "Oui, bonjour. Où je peux ranger mon vélo ?" },
      { role: "A", text: "Dans le local à vélos, derrière l'immeuble." },
      { role: "B", text: "Il faut une clé pour entrer ?" },
      { role: "A", text: "Oui, la clé du hall ouvre aussi le local." },
      { role: "B", text: "Super ! Et pour ma voiture ?" },
      { role: "A", text: "Vous avez une place au garage, la place numéro 8." },
      { role: "B", text: "Merci beaucoup, c'est très clair !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e2-3-po-6",
    title: "La réunion des habitants",
    context: "Une voisine vous invite à la réunion des habitants de l'immeuble.",
    roleA: { title: "La voisine", vous: "le voisin / la voisine" },
    roleB: VOUS,
    lines: [
      { role: "A", text: "Vous venez à la réunion des habitants jeudi soir ?" },
      { role: "B", text: "Oui ! On parle de quoi ?" },
      { role: "A", text: "Du règlement : il y a trop de bruit le soir." },
      { role: "B", text: "C'est vrai. Et les vélos dans le hall, c'est un problème aussi." },
      { role: "A", text: "Oui ! Il faut ranger les vélos dans le local." },
      { role: "B", text: "Et on peut parler des poubelles ?" },
      { role: "A", text: "Bien sûr, chacun peut poser ses questions." },
      { role: "B", text: "Très bien, alors à jeudi !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e2-3-po-7",
    title: "Fumer dans les couloirs",
    context: "Un voisin fume dans le couloir et vous lui rappelez le règlement.",
    roleA: VOUS,
    roleB: VOISIN,
    lines: [
      { role: "A", text: "Excusez-moi, on ne peut pas fumer dans le couloir." },
      { role: "B", text: "Ah bon ? Je ne savais pas, pardon." },
      { role: "A", text: "Oui, c'est écrit dans le règlement, dans le hall." },
      { role: "B", text: "D'accord. Où est-ce que je peux fumer alors ?" },
      { role: "A", text: "Dehors, dans la cour, ou sur votre balcon." },
      { role: "B", text: "Très bien, je vais sur mon balcon." },
      { role: "A", text: "Merci ! C'est mieux pour tout le monde." },
      { role: "B", text: "Oui, vous avez raison. Bonne journée !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e2-3-po-8",
    title: "Le nom sur la boîte aux lettres",
    context: "Le facteur ne trouve pas votre nom sur les boîtes aux lettres.",
    roleA: { title: "Le facteur", vous: "le facteur / la factrice" },
    roleB: { title: "Le nouvel habitant", vous: "le nouvel habitant / la nouvelle habitante" },
    lines: [
      { role: "A", text: "Bonjour ! Vous habitez ici ? Je ne trouve pas votre nom." },
      { role: "B", text: "Oui, j'habite au 4e étage depuis une semaine." },
      { role: "A", text: "Votre nom n'est pas sur la boîte aux lettres." },
      { role: "B", text: "Ah, c'est vrai ! Qu'est-ce que je dois faire ?" },
      { role: "A", text: "Mettez une étiquette avec votre nom sur la boîte." },
      { role: "B", text: "D'accord, je fais ça aujourd'hui." },
      { role: "A", text: "Merci ! Comme ça, vous recevez bien votre courrier." },
      { role: "B", text: "Merci pour l'information, au revoir !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e2-3-po-9",
    title: "Expliquer le règlement à un ami",
    context: "Un ami vous pose des questions sur le règlement de votre immeuble.",
    roleA: { title: "L'ami", vous: "l'ami / l'amie" },
    roleB: VOUS,
    lines: [
      { role: "A", text: "Il y a beaucoup de règles dans ton immeuble ?" },
      { role: "B", text: "Oui, il y a un règlement dans le hall d'entrée." },
      { role: "A", text: "Qu'est-ce qu'il dit ?" },
      { role: "B", text: "Pas de bruit après 22 heures et pas de fumée dans les couloirs." },
      { role: "A", text: "Et pour les animaux ?" },
      { role: "B", text: "Les chiens doivent être en laisse dans l'immeuble." },
      { role: "A", text: "C'est strict ! Et tu respectes tout ?" },
      { role: "B", text: "Oui, et mes voisins sont très gentils avec moi." },
      { role: "A", text: "Enchanté(e) de te connaître !" },
      { role: "B", text: "Moi aussi. À tout à l'heure !" },
],
  },
  {
    id: "e2-3-po-10",
    title: "Appeler la gérance",
    context: "Les escaliers de votre immeuble ne sont pas propres. Vous appelez la gérance.",
    roleA: { title: "L'employé de la gérance", vous: "l'employé / l'employée de la gérance" },
    roleB: { title: "L'habitante", vous: "l'habitant / l'habitante" },
    lines: [
      { role: "A", text: "Gérance Immo Plus, bonjour !" },
      { role: "B", text: "Bonjour, j'appelle pour un problème dans mon immeuble." },
      { role: "A", text: "Oui, je vous écoute." },
      { role: "B", text: "Il y a des bouteilles et des sacs dans les escaliers." },
      { role: "A", text: "Depuis quand ?" },
      { role: "B", text: "Depuis samedi. Ce n'est pas propre et ça sent mauvais." },
      { role: "A", text: "D'accord, nous envoyons quelqu'un demain matin." },
      { role: "B", text: "Merci beaucoup ! Au revoir !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
{
  id: "e2-3-po-11",
  title: "À la mairie",
  context: "Situation : à la mairie. Thème : le règlement.",
  roleA: { title: "L'interlocuteur A", vous: "l'interlocuteur A" },
  roleB: { title: "L'interlocuteur B", vous: "l'interlocuteur B" },
  lines: [
    { role: "A", text: "Bonjour, je peux vous aider ?" },
    { role: "B", text: "Oui, bonjour. J'ai une question." },
    { role: "A", text: "Bien sûr. Dites-moi tout." },
    { role: "B", text: "C'est au sujet de le règlement." },
    { role: "A", text: "D'accord. Pouvez-vous préciser ?" },
    { role: "B", text: "Oui, je voudrais plus d'informations." },
    { role: "A", text: "Très bien, je note." },
    { role: "B", text: "Merci beaucoup pour votre aide." },
    { role: "A", text: "Ravi(e) de faire votre connaissance." },
    { role: "B", text: "Moi aussi. À bientôt !" },
  ],
},
{
  id: "e2-3-po-12",
  title: "Au téléphone",
  context: "Situation : au téléphone. Thème : le règlement.",
  roleA: { title: "L'interlocuteur A", vous: "l'interlocuteur A" },
  roleB: { title: "L'interlocuteur B", vous: "l'interlocuteur B" },
  lines: [
    { role: "A", text: "Bonjour, je peux vous aider ?" },
    { role: "B", text: "Oui, bonjour. J'ai une question." },
    { role: "A", text: "Bien sûr. Dites-moi tout." },
    { role: "B", text: "C'est au sujet de le règlement." },
    { role: "A", text: "D'accord. Pouvez-vous préciser ?" },
    { role: "B", text: "Oui, je voudrais plus d'informations." },
    { role: "A", text: "Très bien, je note." },
    { role: "B", text: "Merci beaucoup pour votre aide." },
    { role: "A", text: "Ravi(e) de faire votre connaissance." },
    { role: "B", text: "Moi aussi. À bientôt !" },
  ],
},
{
  id: "e2-3-po-13",
  title: "Chez le voisin",
  context: "Situation : chez le voisin. Thème : le règlement.",
  roleA: { title: "L'interlocuteur A", vous: "l'interlocuteur A" },
  roleB: { title: "L'interlocuteur B", vous: "l'interlocuteur B" },
  lines: [
    { role: "A", text: "Bonjour, je peux vous aider ?" },
    { role: "B", text: "Oui, bonjour. J'ai une question." },
    { role: "A", text: "Bien sûr. Dites-moi tout." },
    { role: "B", text: "C'est au sujet de le règlement." },
    { role: "A", text: "D'accord. Pouvez-vous préciser ?" },
    { role: "B", text: "Oui, je voudrais plus d'informations." },
    { role: "A", text: "Très bien, je note." },
    { role: "B", text: "Merci beaucoup pour votre aide." },
    { role: "A", text: "Ravi(e) de faire votre connaissance." },
    { role: "B", text: "Moi aussi. À bientôt !" },
  ],
},
{
  id: "e2-3-po-14",
  title: "À l'accueil",
  context: "Situation : à l'accueil. Thème : le règlement.",
  roleA: { title: "L'interlocuteur A", vous: "l'interlocuteur A" },
  roleB: { title: "L'interlocuteur B", vous: "l'interlocuteur B" },
  lines: [
    { role: "A", text: "Bonjour, je peux vous aider ?" },
    { role: "B", text: "Oui, bonjour. J'ai une question." },
    { role: "A", text: "Bien sûr. Dites-moi tout." },
    { role: "B", text: "C'est au sujet de le règlement." },
    { role: "A", text: "D'accord. Pouvez-vous préciser ?" },
    { role: "B", text: "Oui, je voudrais plus d'informations." },
    { role: "A", text: "Très bien, je note." },
    { role: "B", text: "Merci beaucoup pour votre aide." },
    { role: "A", text: "Ravi(e) de faire votre connaissance." },
    { role: "B", text: "Moi aussi. À bientôt !" },
  ],
},
{
  id: "e2-3-po-15",
  title: "Dans la rue",
  context: "Situation : dans la rue. Thème : le règlement.",
  roleA: { title: "L'interlocuteur A", vous: "l'interlocuteur A" },
  roleB: { title: "L'interlocuteur B", vous: "l'interlocuteur B" },
  lines: [
    { role: "A", text: "Bonjour, je peux vous aider ?" },
    { role: "B", text: "Oui, bonjour. J'ai une question." },
    { role: "A", text: "Bien sûr. Dites-moi tout." },
    { role: "B", text: "C'est au sujet de le règlement." },
    { role: "A", text: "D'accord. Pouvez-vous préciser ?" },
    { role: "B", text: "Oui, je voudrais plus d'informations." },
    { role: "A", text: "Très bien, je note." },
    { role: "B", text: "Merci beaucoup pour votre aide." },
    { role: "A", text: "Ravi(e) de faire votre connaissance." },
    { role: "B", text: "Moi aussi. À bientôt !" },
  ],
},
{
  id: "e2-3-po-16",
  title: "Au bureau",
  context: "Situation : au bureau. Thème : le règlement.",
  roleA: { title: "L'interlocuteur A", vous: "l'interlocuteur A" },
  roleB: { title: "L'interlocuteur B", vous: "l'interlocuteur B" },
  lines: [
    { role: "A", text: "Bonjour, je peux vous aider ?" },
    { role: "B", text: "Oui, bonjour. J'ai une question." },
    { role: "A", text: "Bien sûr. Dites-moi tout." },
    { role: "B", text: "C'est au sujet de le règlement." },
    { role: "A", text: "D'accord. Pouvez-vous préciser ?" },
    { role: "B", text: "Oui, je voudrais plus d'informations." },
    { role: "A", text: "Très bien, je note." },
    { role: "B", text: "Merci beaucoup pour votre aide." },
    { role: "A", text: "Ravi(e) de faire votre connaissance." },
    { role: "B", text: "Moi aussi. À bientôt !" },
  ],
},
{
  id: "e2-3-po-17",
  title: "À la réception",
  context: "Situation : à la réception. Thème : le règlement.",
  roleA: { title: "L'interlocuteur A", vous: "l'interlocuteur A" },
  roleB: { title: "L'interlocuteur B", vous: "l'interlocuteur B" },
  lines: [
    { role: "A", text: "Bonjour, je peux vous aider ?" },
    { role: "B", text: "Oui, bonjour. J'ai une question." },
    { role: "A", text: "Bien sûr. Dites-moi tout." },
    { role: "B", text: "C'est au sujet de le règlement." },
    { role: "A", text: "D'accord. Pouvez-vous préciser ?" },
    { role: "B", text: "Oui, je voudrais plus d'informations." },
    { role: "A", text: "Très bien, je note." },
    { role: "B", text: "Merci beaucoup pour votre aide." },
    { role: "A", text: "Ravi(e) de faire votre connaissance." },
    { role: "B", text: "Moi aussi. À bientôt !" },
  ],
},
{
  id: "e2-3-po-18",
  title: "En visio",
  context: "Situation : en visio. Thème : le règlement.",
  roleA: { title: "L'interlocuteur A", vous: "l'interlocuteur A" },
  roleB: { title: "L'interlocuteur B", vous: "l'interlocuteur B" },
  lines: [
    { role: "A", text: "Bonjour, je peux vous aider ?" },
    { role: "B", text: "Oui, bonjour. J'ai une question." },
    { role: "A", text: "Bien sûr. Dites-moi tout." },
    { role: "B", text: "C'est au sujet de le règlement." },
    { role: "A", text: "D'accord. Pouvez-vous préciser ?" },
    { role: "B", text: "Oui, je voudrais plus d'informations." },
    { role: "A", text: "Très bien, je note." },
    { role: "B", text: "Merci beaucoup pour votre aide." },
    { role: "A", text: "Ravi(e) de faire votre connaissance." },
    { role: "B", text: "Moi aussi. À bientôt !" },
  ],
},
{
  id: "e2-3-po-19",
  title: "Au guichet",
  context: "Situation : au guichet. Thème : le règlement.",
  roleA: { title: "L'interlocuteur A", vous: "l'interlocuteur A" },
  roleB: { title: "L'interlocuteur B", vous: "l'interlocuteur B" },
  lines: [
    { role: "A", text: "Bonjour, je peux vous aider ?" },
    { role: "B", text: "Oui, bonjour. J'ai une question." },
    { role: "A", text: "Bien sûr. Dites-moi tout." },
    { role: "B", text: "C'est au sujet de le règlement." },
    { role: "A", text: "D'accord. Pouvez-vous préciser ?" },
    { role: "B", text: "Oui, je voudrais plus d'informations." },
    { role: "A", text: "Très bien, je note." },
    { role: "B", text: "Merci beaucoup pour votre aide." },
    { role: "A", text: "Ravi(e) de faire votre connaissance." },
    { role: "B", text: "Moi aussi. À bientôt !" },
  ],
},
{
  id: "e2-3-po-20",
  title: "Dans un magasin",
  context: "Situation : dans un magasin. Thème : le règlement.",
  roleA: { title: "L'interlocuteur A", vous: "l'interlocuteur A" },
  roleB: { title: "L'interlocuteur B", vous: "l'interlocuteur B" },
  lines: [
    { role: "A", text: "Bonjour, je peux vous aider ?" },
    { role: "B", text: "Oui, bonjour. J'ai une question." },
    { role: "A", text: "Bien sûr. Dites-moi tout." },
    { role: "B", text: "C'est au sujet de le règlement." },
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

export const E2_3_PE: ExpressPePrompt[] = [
  {
    id: "e2-3-pe-1",
    title: "Petit mot pour un voisin bruyant",
    situation: "Votre voisin fait du bruit tous les soirs après 22 heures.",
    instruction: "Écrivez un petit mot poli : expliquez le problème, dites quand il y a du bruit et rappelez le règlement.",
    points: ["Le problème", "Quand il y a du bruit", "La règle de l'immeuble"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-3-pe-2",
    title: "Écrire un règlement",
    situation: "Vous habitez dans un petit immeuble sans règlement. Les habitants vous demandent d'en écrire un.",
    instruction: "Écrivez un petit règlement avec quatre ou cinq règles : le bruit, les animaux et la propreté.",
    points: ["Une règle sur le bruit", "Une règle sur les animaux", "Une règle sur la propreté"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-3-pe-3",
    title: "Message à la gérance",
    situation: "Il y a toujours des vélos dans le hall d'entrée de votre immeuble.",
    instruction: "Écrivez un message à la gérance : décrivez le problème, dites où il se trouve et demandez une solution.",
    points: ["Le problème", "L'endroit", "La demande de solution"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-3-pe-4",
    title: "Mot de bienvenue",
    situation: "Un nouveau voisin arrive dans votre immeuble.",
    instruction: "Écrivez un mot de bienvenue : souhaitez la bienvenue, expliquez deux règles importantes et proposez votre aide.",
    points: ["La bienvenue", "Deux règles importantes", "Une proposition d'aide"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-3-pe-5",
    title: "Excuses au voisin",
    situation: "Samedi soir, vous avez fait une fête et beaucoup de bruit.",
    instruction: "Écrivez un mot d'excuse à votre voisin : excusez-vous, expliquez pourquoi et promettez de respecter le calme.",
    points: ["L'excuse", "La raison du bruit", "La promesse"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-3-pe-6",
    title: "Raconter un problème de voisinage",
    situation: "Vous avez eu un problème avec un voisin le mois dernier.",
    instruction: "Racontez ce problème à un ami : ce qui s'est passé, ce que vous avez fait et comment ça a fini.",
    points: ["Ce qui s'est passé", "Ce que vous avez fait", "La fin de l'histoire"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-3-pe-7",
    title: "Affiche pour le hall d'entrée",
    situation: "Des habitants laissent leurs poubelles dans le couloir.",
    instruction: "Écrivez une affiche pour le hall : rappelez la règle sur les ordures, expliquez pourquoi c'est important et remerciez les habitants.",
    points: ["La règle sur les ordures", "Pourquoi c'est important", "Le remerciement"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-3-pe-8",
    title: "E-mail sur le local à vélos",
    situation: "Vous venez d'acheter un vélo et vous voulez utiliser le local de l'immeuble.",
    instruction: "Écrivez un e-mail à la gérance : demandez où est le local, comment l'ouvrir et s'il y a des règles à respecter.",
    points: ["Où est le local", "Comment l'ouvrir (clé…)", "Les règles du local"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-3-pe-9",
    title: "Comparer deux immeubles",
    situation: "Vous avez habité dans deux immeubles très différents.",
    instruction: "Comparez les deux immeubles : les règles, les voisins et dites où vous préfériez habiter.",
    points: ["Les règles", "Les voisins", "Votre préférence"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-3-pe-10",
    title: "Inviter les voisins",
    situation: "Vous organisez un apéritif pour les voisins de votre immeuble.",
    instruction: "Écrivez une invitation : donnez le jour, l'heure et le lieu, et dites que la fête finit à 22 heures pour respecter le règlement.",
    points: ["Le jour et l'heure", "Le lieu", "La fin à 22 heures"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
{
  id: "e2-3-pe-11",
  title: "Texte sur le règlement — variante 11",
  situation: "Situation liée au thème « le règlement ».",
  instruction: "Écrivez un texte de 50 à 120 mots sur le thème : texte sur le règlement — variante 11.",
  points: [
    "Votre introduction",
    "Les détails importants",
    "Une conclusion ou une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e2-3-pe-12",
  title: "Texte sur le règlement — variante 12",
  situation: "Situation liée au thème « le règlement ».",
  instruction: "Écrivez un texte de 50 à 120 mots sur le thème : texte sur le règlement — variante 12.",
  points: [
    "Votre introduction",
    "Les détails importants",
    "Une conclusion ou une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e2-3-pe-13",
  title: "Texte sur le règlement — variante 13",
  situation: "Situation liée au thème « le règlement ».",
  instruction: "Écrivez un texte de 50 à 120 mots sur le thème : texte sur le règlement — variante 13.",
  points: [
    "Votre introduction",
    "Les détails importants",
    "Une conclusion ou une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e2-3-pe-14",
  title: "Texte sur le règlement — variante 14",
  situation: "Situation liée au thème « le règlement ».",
  instruction: "Écrivez un texte de 50 à 120 mots sur le thème : texte sur le règlement — variante 14.",
  points: [
    "Votre introduction",
    "Les détails importants",
    "Une conclusion ou une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e2-3-pe-15",
  title: "Texte sur le règlement — variante 15",
  situation: "Situation liée au thème « le règlement ».",
  instruction: "Écrivez un texte de 50 à 120 mots sur le thème : texte sur le règlement — variante 15.",
  points: [
    "Votre introduction",
    "Les détails importants",
    "Une conclusion ou une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e2-3-pe-16",
  title: "Texte sur le règlement — variante 16",
  situation: "Situation liée au thème « le règlement ».",
  instruction: "Écrivez un texte de 50 à 120 mots sur le thème : texte sur le règlement — variante 16.",
  points: [
    "Votre introduction",
    "Les détails importants",
    "Une conclusion ou une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e2-3-pe-17",
  title: "Texte sur le règlement — variante 17",
  situation: "Situation liée au thème « le règlement ».",
  instruction: "Écrivez un texte de 50 à 120 mots sur le thème : texte sur le règlement — variante 17.",
  points: [
    "Votre introduction",
    "Les détails importants",
    "Une conclusion ou une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e2-3-pe-18",
  title: "Texte sur le règlement — variante 18",
  situation: "Situation liée au thème « le règlement ».",
  instruction: "Écrivez un texte de 50 à 120 mots sur le thème : texte sur le règlement — variante 18.",
  points: [
    "Votre introduction",
    "Les détails importants",
    "Une conclusion ou une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e2-3-pe-19",
  title: "Texte sur le règlement — variante 19",
  situation: "Situation liée au thème « le règlement ».",
  instruction: "Écrivez un texte de 50 à 120 mots sur le thème : texte sur le règlement — variante 19.",
  points: [
    "Votre introduction",
    "Les détails importants",
    "Une conclusion ou une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e2-3-pe-20",
  title: "Texte sur le règlement — variante 20",
  situation: "Situation liée au thème « le règlement ».",
  instruction: "Écrivez un texte de 50 à 120 mots sur le thème : texte sur le règlement — variante 20.",
  points: [
    "Votre introduction",
    "Les détails importants",
    "Une conclusion ou une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
}
];
