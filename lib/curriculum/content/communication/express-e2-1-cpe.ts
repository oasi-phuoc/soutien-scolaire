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

/* ── Compréhension écrite — E2.1 Décrire son logement ─────────────────────── */

const CE_TEXT = `Salut Emma !

Ça y est, j'habite dans mon nouvel appartement ! Il est au 2e étage d'un immeuble neuf. Le quartier est calme.
Il y a un grand salon très lumineux. Il y a deux chambres et une cuisine équipée. Il y a une petite salle de bains. J'ai aussi un balcon avec une jolie vue sur le parc.
Mon ancien studio était sombre. Mon ancien quartier était bruyant. Alors, je suis très contente ! Tu veux venir visiter samedi ? On peut manger sur le balcon.

À bientôt,
Léa`;

const CE_POOL = buildExpressPool("e2-1-ce", [
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

export const E2_1_CE: CommunicationExercise = readingPoolExercise({
  id: "e2-1-ce",
  readingText: CE_TEXT,
  questionPool: CE_POOL,
});

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
    ],
  },
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
];
