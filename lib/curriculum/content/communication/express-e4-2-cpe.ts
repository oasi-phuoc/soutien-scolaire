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

/* ── Compréhension écrite — E4.2 Aller au restaurant ──────────────────────── */

const CE_TEXT = `Restaurant Chez Marie — Informations

Le restaurant est ouvert du mardi au dimanche. Le lundi, c'est fermé.
Le midi, nous proposons un menu du jour à 19 francs. Il y a une entrée, un plat et un dessert.
Aujourd'hui, le chef propose une soupe de légumes. Il propose aussi du poisson avec du riz. En dessert, il y a une tarte aux pommes.
Il y a aussi un plat sans viande et sans poisson. C'est pour les clients végétariens.
Le soir, pensez à réserver votre table. Téléphonez-nous avant 17 h.
Les boissons ne sont pas comprises dans le menu. Mais la carafe d'eau est gratuite.`;

const CE_POOL = buildExpressPool("e4-2-ce", [
  q({
    id: "ce-q1",
    textQ: "Quel jour le restaurant est-il fermé ?",
    text: ["Le lundi", "Le dimanche", "Le samedi"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le _________, c'est fermé.",
    fill: "lundi",
    vfQ: "Le restaurant est fermé le lundi.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Combien coûte le menu du jour ?",
    text: ["19 francs", "25 francs", "15 francs"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le midi, nous proposons un menu du jour à _________ francs.",
    fill: "19",
    fillA: ["dix-neuf"],
    vfQ: "Le menu du jour coûte 25 francs.",
    vfC: 1,
  }),
  q({
    id: "ce-q3",
    textQ: "Qu'est-ce qu'il y a dans le menu du jour ?",
    text: [
      "Une entrée, un plat et un dessert",
      "Un plat et une boisson",
      "Deux entrées et un café",
    ],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il y a une entrée, un plat et un _________.",
    fill: "dessert",
    vfQ: "Le menu du jour est servi le midi.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel dessert le chef propose-t-il aujourd'hui ?",
    text: ["Une tarte aux pommes", "Une glace à la fraise", "Un gâteau au chocolat"],
    textC: 0,
    img: ["tarte", "glace", "gâteau"],
    imgC: 0,
    fillQ: "En dessert, il y a une tarte aux _________.",
    fill: "pommes",
    vfQ: "Aujourd'hui, le chef propose une soupe de légumes.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Qu'est-ce qu'il y a pour les clients végétariens ?",
    text: [
      "Un plat sans viande et sans poisson",
      "Seulement une salade verte",
      "Rien de spécial",
    ],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il y a aussi un plat sans viande et sans _________.",
    fill: "poisson",
    vfQ: "Il n'y a pas de plat végétarien dans ce restaurant.",
    vfC: 1,
  }),
  q({
    id: "ce-q6",
    textQ: "Que faut-il faire pour manger le soir ?",
    text: [
      "Réserver une table avant 17 h",
      "Payer avant le repas",
      "Venir avant midi",
    ],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le soir, pensez à réserver votre _________.",
    fill: "table",
    vfQ: "Le nom du chef est indiqué dans le texte.",
    vfC: 2,
  }),
  q({
    id: "ce-q7",
    textQ: "Quelle boisson est gratuite ?",
    text: ["La carafe d'eau", "Le jus d'orange", "Le café"],
    textC: 0,
    img: ["eau", "Jus d'orange", "café"],
    imgC: 0,
    fillQ: "Les boissons ne sont pas _________ dans le menu.",
    fill: "comprises",
    vfQ: "Les boissons sont comprises dans le menu.",
    vfC: 1,
  }),
]);

export const E4_2_CE: CommunicationExercise = readingPoolExercise({
  id: "e4-2-ce",
  readingText: CE_TEXT,
  questionPool: CE_POOL,
});

/* ── Production orale — dialogues à jouer (thème restaurant) ──────────────── */

const SERVEUR = { title: "Le serveur", vous: "le serveur / la serveuse" };
const CLIENT = { title: "Le client", vous: "le client / la cliente" };

export const E4_2_PO: ExpressPoDialogue[] = [
  {
    id: "e4-2-po-1",
    title: "Réserver une table",
    context: "Vous téléphonez au restaurant pour réserver une table pour ce soir.",
    roleA: { title: "L'employé du restaurant", vous: "l'employé / l'employée" },
    roleB: CLIENT,
    lines: [
      { role: "A", text: "Restaurant Chez Marie, bonjour !" },
      { role: "B", text: "Bonjour, je voudrais réserver une table pour ce soir." },
      { role: "A", text: "Oui, pour combien de personnes ?" },
      { role: "B", text: "Pour quatre personnes, s'il vous plaît." },
      { role: "A", text: "À quelle heure venez-vous ?" },
      { role: "B", text: "À dix-neuf heures trente." },
      { role: "A", text: "C'est noté. À ce soir !" },
      { role: "B", text: "Merci beaucoup, à ce soir !" },
    ],
  },
  {
    id: "e4-2-po-2",
    title: "Commander le déjeuner",
    context: "Vous êtes au restaurant à midi et vous commandez le menu du jour.",
    roleA: SERVEUR,
    roleB: CLIENT,
    lines: [
      { role: "A", text: "Bonjour ! Vous avez choisi ?" },
      { role: "B", text: "Oui, je prends le menu du jour, s'il vous plaît." },
      { role: "A", text: "Très bien. Du poisson ou de la viande ?" },
      { role: "B", text: "Du poisson, avec du riz." },
      { role: "A", text: "Et comme boisson ?" },
      { role: "B", text: "Une carafe d'eau, s'il vous plaît." },
      { role: "A", text: "Parfait. Et en dessert, tarte ou glace ?" },
      { role: "B", text: "Une tarte aux pommes. Merci !" },
    ],
  },
  {
    id: "e4-2-po-3",
    title: "Le client végétarien",
    context: "Vous êtes végétarien et vous demandez un plat sans viande.",
    roleA: SERVEUR,
    roleB: CLIENT,
    lines: [
      { role: "A", text: "Bonsoir, je peux prendre votre commande ?" },
      { role: "B", text: "Oui, mais je suis végétarien. Je ne mange pas de viande." },
      { role: "A", text: "Pas de problème. Nous avons des pâtes aux légumes." },
      { role: "B", text: "Très bien ! Il y a du poisson dedans ?" },
      { role: "A", text: "Non, pas de poisson. Juste des légumes et du fromage." },
      { role: "B", text: "Parfait, je prends les pâtes alors." },
      { role: "A", text: "Et qu'est-ce que vous buvez ?" },
      { role: "B", text: "De l'eau, s'il vous plaît. Pas d'alcool pour moi." },
    ],
  },
  {
    id: "e4-2-po-4",
    title: "Demander l'addition",
    context: "Vous avez fini votre repas et vous demandez l'addition.",
    roleA: SERVEUR,
    roleB: CLIENT,
    lines: [
      { role: "A", text: "Tout va bien ? Le repas vous a plu ?" },
      { role: "B", text: "Oui, c'était excellent ! L'addition, s'il vous plaît." },
      { role: "A", text: "Bien sûr. Ça fait quarante-huit francs." },
      { role: "B", text: "Vous prenez la carte ?" },
      { role: "A", text: "Oui, sans contact aussi. Voilà." },
      { role: "B", text: "Est-ce que le service est compris ?" },
      { role: "A", text: "Oui, mais vous pouvez laisser un pourboire si vous voulez." },
      { role: "B", text: "D'accord, voilà pour vous. Merci et bonne soirée !" },
    ],
  },
  {
    id: "e4-2-po-5",
    title: "Un problème avec la commande",
    context: "Le serveur apporte de la viande, mais vous avez commandé du poisson.",
    roleA: SERVEUR,
    roleB: CLIENT,
    lines: [
      { role: "A", text: "Voici votre plat : le steak-frites." },
      { role: "B", text: "Excusez-moi, mais j'ai commandé du poisson." },
      { role: "A", text: "Oh, pardon ! C'est une erreur." },
      { role: "B", text: "Ce n'est pas grave, mais je ne mange pas de viande." },
      { role: "A", text: "Je change tout de suite. Le poisson arrive dans cinq minutes." },
      { role: "B", text: "Merci. Je peux avoir aussi du pain ?" },
      { role: "A", text: "Bien sûr, je vous apporte du pain et votre poisson." },
      { role: "B", text: "Merci beaucoup, c'est gentil." },
    ],
  },
  {
    id: "e4-2-po-6",
    title: "Choisir avec un ami",
    context: "Vous lisez le menu avec un ami et vous choisissez vos plats.",
    roleA: { title: "L'ami", vous: "l'ami / l'amie" },
    roleB: { title: "L'autre ami", vous: "l'ami / l'amie" },
    lines: [
      { role: "A", text: "Qu'est-ce que tu prends ? Moi, une salade en entrée." },
      { role: "B", text: "Bonne idée. Et après, du poulet avec des frites." },
      { role: "A", text: "Moi, je ne mange pas de viande. Je prends du poisson." },
      { role: "B", text: "Tu bois du vin ?" },
      { role: "A", text: "Non, pas d'alcool. De l'eau pour moi." },
      { role: "B", text: "Alors une carafe d'eau pour deux." },
      { role: "A", text: "Et en dessert ? La tarte aux fraises est très bonne ici." },
      { role: "B", text: "D'accord, deux tartes ! On appelle le serveur ?" },
    ],
  },
  {
    id: "e4-2-po-7",
    title: "Commander par téléphone",
    context: "Vous téléphonez à un restaurant pour commander un repas à la maison.",
    roleA: { title: "L'employé du restaurant", vous: "l'employé / l'employée" },
    roleB: CLIENT,
    lines: [
      { role: "A", text: "Pizzeria Bella, bonjour ! Je peux prendre votre commande ?" },
      { role: "B", text: "Bonjour, je voudrais une pizza aux légumes, s'il vous plaît." },
      { role: "A", text: "Une pizza aux légumes. Et comme boisson ?" },
      { role: "B", text: "Un jus d'orange. C'est tout." },
      { role: "A", text: "Ça fait dix-huit francs. Votre adresse, s'il vous plaît ?" },
      { role: "B", text: "Rue de la Gare 5, au deuxième étage." },
      { role: "A", text: "Merci. La livraison arrive dans trente minutes." },
      { role: "B", text: "Parfait, merci beaucoup. À tout à l'heure !" },
    ],
  },
  {
    id: "e4-2-po-8",
    title: "Le petit déjeuner au café",
    context: "Vous prenez le petit déjeuner dans un café.",
    roleA: SERVEUR,
    roleB: CLIENT,
    lines: [
      { role: "A", text: "Bonjour ! Qu'est-ce que je vous sers ?" },
      { role: "B", text: "Bonjour, un café au lait et un croissant, s'il vous plaît." },
      { role: "A", text: "Vous voulez aussi du jus d'orange ?" },
      { role: "B", text: "Oui, un petit jus d'orange." },
      { role: "A", text: "Je vous apporte tout ça. Vous mangez ici ?" },
      { role: "B", text: "Oui, à la table près de la fenêtre." },
      { role: "A", text: "Très bien. Ça fait neuf francs cinquante." },
      { role: "B", text: "Voilà. Merci beaucoup !" },
    ],
  },
  {
    id: "e4-2-po-9",
    title: "Une table sans réservation",
    context: "Vous arrivez au restaurant sans réservation un samedi soir.",
    roleA: SERVEUR,
    roleB: CLIENT,
    lines: [
      { role: "A", text: "Bonsoir ! Vous avez une réservation ?" },
      { role: "B", text: "Non, nous n'avons pas de réservation. Vous avez une table pour deux ?" },
      { role: "A", text: "Ce soir, c'est complet jusqu'à vingt et une heures." },
      { role: "B", text: "On peut revenir à vingt et une heures. C'est possible ?" },
      { role: "A", text: "Oui, bien sûr. C'est à quel nom ?" },
      { role: "B", text: "Muller. M-U-L-L-E-R." },
      { role: "A", text: "C'est noté. À tout à l'heure !" },
      { role: "B", text: "Merci beaucoup, à tout à l'heure !" },
    ],
  },
  {
    id: "e4-2-po-10",
    title: "Les allergies",
    context: "Vous êtes allergique aux noix et vous posez des questions sur le menu.",
    roleA: SERVEUR,
    roleB: CLIENT,
    lines: [
      { role: "A", text: "Bonsoir, vous avez choisi ?" },
      { role: "B", text: "Presque. Je suis allergique aux noix. Il y a des noix dans la salade ?" },
      { role: "A", text: "Oui, il y a des noix dans la salade. Mais la soupe est sans noix." },
      { role: "B", text: "Alors une soupe en entrée, s'il vous plaît." },
      { role: "A", text: "Et comme plat ? Le poulet est sans noix aussi." },
      { role: "B", text: "Parfait, le poulet avec des légumes." },
      { role: "A", text: "Très bien. Et comme boisson ?" },
      { role: "B", text: "De l'eau gazeuse, s'il vous plaît. Merci !" },
    ],
  },
];

/* ── Production écrite — consignes (A1 : 50 mots minimum) ─────────────────── */

const PE_MIN = 50;
const PE_MAX = 120;

export const E4_2_PE: ExpressPePrompt[] = [
  {
    id: "e4-2-pe-1",
    title: "Inviter un ami au restaurant",
    situation: "Vous voulez fêter votre nouveau travail au restaurant avec un ami.",
    instruction: "Écrivez un message à votre ami : invitez-le, proposez un jour et une heure et décrivez le restaurant.",
    points: ["L'invitation et la raison", "Le jour et l'heure", "Le restaurant choisi"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e4-2-pe-2",
    title: "Raconter un dîner",
    situation: "Hier soir, vous êtes allé(e) au restaurant avec votre famille.",
    instruction: "Racontez la soirée à un ami : le restaurant, ce que vous avez mangé et bu, et comment c'était.",
    points: ["Le restaurant", "Les plats et les boissons", "Votre avis sur la soirée"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e4-2-pe-3",
    title: "E-mail de réservation",
    situation: "Vous organisez un repas d'anniversaire pour huit personnes samedi soir.",
    instruction: "Écrivez un e-mail au restaurant : demandez une table, donnez la date, l'heure et le nombre de personnes.",
    points: ["La date et l'heure", "Le nombre de personnes", "Une demande spéciale (gâteau, table tranquille…)"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e4-2-pe-4",
    title: "Mon restaurant préféré",
    situation: "Un collègue cherche un bon restaurant dans votre ville.",
    instruction: "Décrivez votre restaurant préféré : où il se trouve, ce qu'on y mange et pourquoi vous l'aimez.",
    points: ["Le lieu", "Les plats typiques", "Pourquoi vous l'aimez"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e4-2-pe-5",
    title: "Conseil à un ami végétarien",
    situation: "Un ami végétarien visite votre ville et cherche où manger.",
    instruction: "Écrivez un message à votre ami : conseillez un restaurant et expliquez ce qu'il peut manger sans viande et sans poisson.",
    points: ["Le restaurant conseillé", "Deux plats sans viande", "Une boisson à essayer"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e4-2-pe-6",
    title: "Écrire un avis",
    situation: "Vous avez très bien mangé dans un petit restaurant et vous voulez laisser un avis sur Internet.",
    instruction: "Écrivez un avis : décrivez le repas, le service et donnez une note avec une explication.",
    points: ["Le repas", "Le service", "Votre note et pourquoi"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e4-2-pe-7",
    title: "E-mail de réclamation",
    situation: "Au restaurant, le serveur s'est trompé de plat et l'addition était fausse.",
    instruction: "Écrivez un e-mail poli au restaurant : expliquez les deux problèmes et demandez une réponse.",
    points: ["L'erreur de plat", "L'erreur d'addition", "Votre demande"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e4-2-pe-8",
    title: "Comment commander",
    situation: "Un ami apprend le français et va au restaurant pour la première fois en Suisse.",
    instruction: "Expliquez à votre ami comment ça se passe : l'arrivée, la commande et l'addition. Donnez des phrases utiles.",
    points: ["L'arrivée et la table", "La commande", "L'addition et le pourboire"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e4-2-pe-9",
    title: "Restaurant ou maison ?",
    situation: "Une amie vous demande si vous préférez manger au restaurant ou à la maison.",
    instruction: "Comparez les deux : un avantage du restaurant, un avantage de la maison et votre préférence avec une raison.",
    points: ["Un avantage du restaurant", "Un avantage de la maison", "Votre préférence"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e4-2-pe-10",
    title: "Le menu de ma fête",
    situation: "Vous organisez un repas à la maison pour six amis.",
    instruction: "Écrivez le message d'invitation avec le menu : l'entrée, le plat, le dessert et les boissons. Pensez aux invités végétariens.",
    points: ["Le menu complet", "Une option végétarienne", "Le jour et l'heure"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
];
