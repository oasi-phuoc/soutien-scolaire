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

/* ── Compréhension écrite — E6.1 Demander son chemin ──────────────────────── */

const CE_TEXT = `Office du tourisme — Se déplacer en ville

Bienvenue ! Pour visiter la ville, prenez les transports publics.
Le bus 14 passe par la mairie et le musée.
Le trajet en bus dure 30 minutes.
Le métro est plus rapide.
La station de métro est en face de la gare.
Elle est à côté de l'office du tourisme.
Achetez vos tickets au distributeur automatique ou par SMS.
Envoyez le SMS avec votre téléphone portable.
Un carnet de dix tickets coûte 15 euros.
Vous préférez le vélo ? Il y a des vélos en libre-service au centre-ville.
N'oubliez pas de valider votre ticket dans le bus !`;

const CE_POOL = buildExpressPool("e6-1-ce", [
  q({
    id: "ce-q1",
    textQ: "Quel bus passe par la mairie et le musée ?",
    text: ["Le 14", "Le 4", "Le 30"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le bus _________ passe par la mairie et le musée.",
    fill: "14",
    fillA: ["quatorze"],
    vfQ: "Le bus 14 passe par la mairie.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Combien de temps dure le trajet en bus ?",
    text: ["30 minutes", "15 minutes", "40 minutes"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le trajet en bus dure _________ minutes.",
    fill: "30",
    fillA: ["trente"],
    vfQ: "Le trajet en bus dure 40 minutes.",
    vfC: 1,
  }),
  q({
    id: "ce-q3",
    textQ: "Où se trouve la station de métro ?",
    text: ["En face de la gare", "Derrière la mairie", "À côté du musée"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La station de métro est en _________ de la gare.",
    fill: "face",
    vfQ: "La station de métro est à côté de l'office du tourisme.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Comment peut-on acheter les tickets ?",
    text: [
      "Au distributeur ou par SMS",
      "Seulement au guichet de la gare",
      "Seulement chez le chauffeur",
    ],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Achetez vos tickets au _________ automatique ou par SMS.",
    fill: "distributeur",
    vfQ: "On peut acheter les tickets par SMS.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Combien coûte le carnet de dix tickets ?",
    text: ["15 euros", "10 euros", "25 euros"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Un carnet de dix tickets coûte _________ euros.",
    fill: "15",
    fillA: ["quinze"],
    vfQ: "Le carnet de dix tickets coûte 25 euros.",
    vfC: 1,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel transport est en libre-service au centre-ville ?",
    text: ["Le vélo", "Le taxi", "Le tram"],
    textC: 0,
    img: ["vélo", "taxi", "tram"],
    imgC: 0,
    fillQ: "Il y a des vélos en libre-_________ au centre-ville.",
    fill: "service",
    vfQ: "L'horaire des bus est indiqué dans le texte.",
    vfC: 2,
  }),
  q({
    id: "ce-q7",
    textQ: "Que faut-il faire avec son ticket dans le bus ?",
    text: ["Le valider", "Le donner au chauffeur", "Le jeter à la poubelle"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "N'oubliez pas de _________ votre ticket dans le bus !",
    fill: "valider",
    vfQ: "Il faut valider son ticket dans le bus.",
    vfC: 0,
  }),
]);

export const E6_1_CE: CommunicationExercise = readingPoolExercise({
  id: "e6-1-ce",
  readingText: CE_TEXT,
  questionPool: CE_POOL,
});

/* ── Production orale — dialogues à jouer (thème demander son chemin) ─────── */

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
];

/* ── Production écrite — consignes (A1 : 50 mots minimum) ─────────────────── */

const PE_MIN = 50;
const PE_MAX = 120;

export const E6_1_PE: ExpressPePrompt[] = [
  {
    id: "e6-1-pe-1",
    title: "Le chemin jusqu'à chez vous",
    situation: "Un ami vient chez vous pour la première fois samedi.",
    instruction: "Écrivez un message à votre ami : expliquez le chemin depuis la gare, le transport à prendre et où se trouve votre immeuble.",
    points: ["Le transport à prendre", "Les directions (tout droit, à gauche…)", "Où se trouve votre immeuble"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e6-1-pe-2",
    title: "Perdu(e) en ville",
    situation: "Hier, vous étiez perdu(e) dans une ville que vous ne connaissez pas.",
    instruction: "Racontez à un ami ce qui s'est passé : où vous vouliez aller, comment vous avez demandé votre chemin et comment vous êtes arrivé(e).",
    points: ["Où vous vouliez aller", "À qui vous avez demandé", "Comment vous êtes arrivé(e)"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e6-1-pe-3",
    title: "E-mail à l'office du tourisme",
    situation: "Vous préparez une visite d'une journée dans une ville française.",
    instruction: "Écrivez un e-mail à l'office du tourisme : demandez des informations sur les transports, les tickets et les lieux à visiter.",
    points: ["Une question sur les transports", "Une question sur les tickets", "Une question sur les lieux à visiter"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e6-1-pe-4",
    title: "Mon trajet de tous les jours",
    situation: "Un correspondant vous demande comment vous allez au travail ou à l'école.",
    instruction: "Décrivez votre trajet : le transport que vous prenez, la durée du trajet et ce que vous faites pendant le voyage.",
    points: ["Le transport", "La durée", "Ce que vous faites pendant le trajet"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e6-1-pe-5",
    title: "Conseils à un nouveau voisin",
    situation: "Un nouveau voisin ne connaît pas les transports du quartier.",
    instruction: "Écrivez un message : expliquez quels bus et métros passent près de chez vous et où on achète les tickets.",
    points: ["Les lignes de bus ou de métro", "Où acheter les tickets", "Un conseil pratique"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e6-1-pe-6",
    title: "Venir au bureau",
    situation: "Un collègue d'une autre ville vient à votre bureau lundi matin.",
    instruction: "Écrivez un message à votre collègue : expliquez comment venir depuis la gare, le nom de l'arrêt et l'heure du rendez-vous.",
    points: ["Le transport depuis la gare", "L'arrêt où descendre", "L'heure du rendez-vous"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e6-1-pe-7",
    title: "Bus ou métro ?",
    situation: "Un ami vous demande quel transport choisir dans votre ville.",
    instruction: "Comparez le bus et le métro : la vitesse, le prix et le confort. Dites lequel vous préférez et pourquoi.",
    points: ["Un avantage du bus", "Un avantage du métro", "Votre préférence et pourquoi"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e6-1-pe-8",
    title: "Instructions pour un visiteur",
    situation: "Votre cousine arrive à la gare samedi et vous ne pouvez pas venir la chercher.",
    instruction: "Écrivez les instructions : le transport à prendre, où descendre et comment trouver votre maison à pied.",
    points: ["Le transport à prendre", "L'arrêt où descendre", "Le chemin à pied"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e6-1-pe-9",
    title: "Ma première fois dans le métro",
    situation: "Vous avez pris le métro pour la première fois dans une grande ville.",
    instruction: "Racontez cette expérience : comment vous avez acheté le ticket, comment vous avez trouvé la ligne et comment le voyage s'est passé.",
    points: ["L'achat du ticket", "Trouver la bonne ligne", "Vos impressions"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e6-1-pe-10",
    title: "Décrire mon quartier",
    situation: "Un correspondant veut connaître votre quartier avant de vous rendre visite.",
    instruction: "Décrivez votre quartier : les lieux importants (poste, parc, magasins…) et comment aller de l'un à l'autre.",
    points: ["Deux ou trois lieux du quartier", "Où ils se trouvent", "Comment y aller"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
];
