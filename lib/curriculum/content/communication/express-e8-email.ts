import {
  readingPoolExercise,
  type CommunicationExercise,
  type ExpressPePrompt,
} from "./express-types";
import { buildExpressPool, type ExpressRawQ } from "./express-listening-helpers";

/**
 * E-mails E8 — Bilan A1 (se présenter, famille, logement, quotidien, achats,
 * santé, transports).
 * CE e-mail : un e-mail à lire + pool de questions (≥ 10).
 * PE e-mail : pool d'e-mails reçus auxquels répondre (≥ 10).
 */

function q(item: ExpressRawQ): ExpressRawQ {
  return item;
}

const PE_MIN = 50;
const PE_MAX = 120;

/* ════════════════════════════════════════════════════════════════════════════
   E8.1 — Bilan A1
   ════════════════════════════════════════════════════════════════════════════ */

const E8_1_CE_EMAIL_TEXT = `De : Marco
Objet : Ma nouvelle vie à Lausanne

Bonjour,

Comment vas-tu ? Moi, ça va très bien. J'habite maintenant à Lausanne.
Mon appartement a trois pièces et un balcon. Il est au quatrième étage.
Le loyer est de 1 400 francs par mois. C'est un peu cher, mais le quartier est calme.
Je travaille dans un restaurant comme cuisinier. Je commence à 9 h et je finis à 18 h.
Le matin, je prends le bus numéro 7 pour aller au travail. Le trajet dure vingt minutes.
Le samedi, je fais les courses au marché avec ma femme. Les légumes ne sont pas chers.
Ma fille va à l'école du quartier. Elle a six ans et elle est très contente.
Tu veux venir manger chez nous dimanche à midi ? Réponds-moi vite !

À bientôt,
Marco`;

const E8_1_CE_EMAIL_POOL = buildExpressPool("e8-1-ce-email", [
  q({
    id: "cem-q1",
    textQ: "Où habite Marco maintenant ?",
    text: ["À Lausanne", "À Genève", "À Zurich"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'_________ maintenant à Lausanne.",
    fill: "habite",
    vfQ: "Marco habite maintenant à Lausanne.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Combien de pièces a l'appartement de Marco ?",
    text: ["Trois pièces", "Deux pièces", "Cinq pièces"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Mon appartement a trois _________ et un balcon.",
    fill: "pièces",
    fillA: ["pieces"],
    vfQ: "L'appartement de Marco a un balcon.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "À quel étage est l'appartement ?",
    text: ["Au quatrième étage", "Au premier étage", "Au sixième étage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il est au _________ étage.",
    fill: "quatrième",
    fillA: ["quatrieme", "4e", "4ème", "4"],
    vfQ: "L'appartement est au deuxième étage.",
    vfC: 1,
  }),
  q({
    id: "cem-q4",
    textQ: "Combien coûte le loyer ?",
    text: ["1 400 francs par mois", "1 200 francs par mois", "1 600 francs par mois"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le loyer est de 1 400 _________ par mois.",
    fill: "francs",
    vfQ: "Le loyer est de 1 400 francs par mois.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quel est le travail de Marco ?",
    text: [
      "Cuisinier dans un restaurant",
      "Vendeur dans un magasin",
      "Chauffeur de bus",
    ],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je travaille dans un restaurant comme _________.",
    fill: "cuisinier",
    vfQ: "Marco travaille dans un magasin.",
    vfC: 1,
  }),
  q({
    id: "cem-q6",
    textQ: "Quels sont les horaires de travail de Marco ?",
    text: ["De 9 h à 18 h", "De 8 h à 17 h", "De 10 h à 19 h"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je commence à 9 h et je finis à _________ h.",
    fill: "18",
    fillA: ["dix-huit", "18 h"],
    vfQ: "Marco finit le travail à 18 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Comment Marco va-t-il au travail ?",
    text: ["En bus", "En voiture", "À vélo"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je prends le bus numéro _________ pour aller au travail.",
    fill: "7",
    fillA: ["sept"],
    vfQ: "Marco va au travail en voiture.",
    vfC: 1,
  }),
  q({
    id: "cem-q8",
    textQ: "Combien de temps dure le trajet en bus ?",
    text: ["Vingt minutes", "Dix minutes", "Une heure"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le trajet dure vingt _________.",
    fill: "minutes",
    vfQ: "Le trajet dure vingt minutes.",
    vfC: 0,
  }),
  q({
    id: "cem-q9",
    textQ: "Que fait Marco le samedi ?",
    text: [
      "Il fait les courses au marché",
      "Il travaille au restaurant",
      "Il va à la piscine",
    ],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le samedi, je fais les courses au _________ avec ma femme.",
    fill: "marché",
    fillA: ["marche"],
    vfQ: "Marco fait les courses tout seul.",
    vfC: 1,
  }),
  q({
    id: "cem-q10",
    textQ: "Quel âge a la fille de Marco ?",
    text: ["Six ans", "Quatre ans", "Dix ans"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Elle a _________ ans et elle est très contente.",
    fill: "six",
    fillA: ["6"],
    vfQ: "La fille de Marco va à l'école du quartier.",
    vfC: 0,
  }),
]);

export const E8_1_CE_EMAIL: CommunicationExercise = readingPoolExercise({
  id: "e8-1-ce-email",
  readingText: E8_1_CE_EMAIL_TEXT,
  questionPool: E8_1_CE_EMAIL_POOL,
  instruction: "Lisez l'e-mail et répondez aux questions.",
});

export const E8_1_PE_EMAIL: ExpressPePrompt[] = [
  {
    id: "e8-1-pee-1",
    title: "Se présenter à un voisin",
    situation: "Un nouveau voisin vous écrit pour faire connaissance.",
    sourceMessage: {
      from: "M. Rochat",
      subject: "Bienvenue dans l'immeuble",
      body: "Bonjour,\nJe suis votre voisin du troisième étage. Bienvenue dans l'immeuble !\nVous venez d'où ? Vous travaillez dans le quartier ?\nÀ bientôt,\nM. Rochat",
    },
    instruction: "Répondez à M. Rochat : présentez-vous, parlez de votre famille et dites quel est votre travail.",
    points: ["Votre présentation (nom, pays)", "Votre famille", "Votre travail"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e8-1-pee-2",
    title: "Décrire son logement",
    situation: "Une amie veut tout savoir sur votre nouvel appartement.",
    sourceMessage: {
      from: "Amina",
      subject: "Ton nouvel appartement",
      body: "Coucou,\nAlors, tu es bien installé(e) ? Il est comment, ton nouvel appartement ?\nIl y a combien de pièces ? Le quartier est sympa ?\nAmina",
    },
    instruction: "Répondez à Amina : décrivez votre appartement, parlez du quartier et invitez-la à venir.",
    points: ["La description de l'appartement", "Le quartier", "Une invitation"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e8-1-pee-3",
    title: "Raconter sa journée",
    situation: "Votre frère veut savoir comment se passe votre nouvelle vie.",
    sourceMessage: {
      from: "Nicolas",
      subject: "Ta nouvelle vie",
      body: "Salut,\nComment ça va depuis ton déménagement ?\nRaconte-moi une journée normale : le travail, les repas, le soir…\nNicolas",
    },
    instruction: "Répondez à Nicolas : racontez votre journée du matin au soir et dites ce que vous préférez.",
    points: ["Le matin et le travail", "Le soir", "Ce que vous préférez"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e8-1-pee-4",
    title: "Accepter une invitation",
    situation: "Une amie vous invite à manger chez elle.",
    sourceMessage: {
      from: "Fatima",
      subject: "Repas samedi soir",
      body: "Salut !\nTu veux venir manger à la maison samedi soir, vers 19 h ?\nJe fais un couscous. Dis-moi si tu peux venir !\nFatima",
    },
    instruction: "Répondez à Fatima : acceptez l'invitation, proposez d'apporter quelque chose et posez une question sur l'adresse.",
    points: ["Votre réponse (oui)", "Ce que vous apportez", "Une question sur l'adresse"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e8-1-pee-5",
    title: "Refuser une invitation",
    situation: "Un collègue organise une fête, mais vous ne pouvez pas venir.",
    sourceMessage: {
      from: "David",
      subject: "Fête vendredi",
      body: "Bonjour,\nJ'organise une petite fête vendredi soir chez moi pour mon anniversaire.\nTu viens ? Ça commence à 18 h.\nDavid",
    },
    instruction: "Répondez à David : remerciez-le, refusez poliment en expliquant pourquoi et proposez autre chose.",
    points: ["Un remerciement et le refus", "La raison", "Une autre proposition"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e8-1-pee-6",
    title: "Aider une voisine",
    situation: "Votre voisine âgée a besoin d'aide pour les courses.",
    sourceMessage: {
      from: "Mme Girard",
      subject: "Petit service",
      body: "Bonjour,\nJ'ai mal à la jambe et je ne peux pas sortir cette semaine.\nPouvez-vous faire mes courses au supermarché ?\nMerci beaucoup,\nMme Girard",
    },
    instruction: "Répondez à Mme Girard : acceptez de l'aider, dites quand vous allez au supermarché et demandez la liste des courses.",
    points: ["Votre accord", "Le jour et l'heure", "Une question sur la liste"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e8-1-pee-7",
    title: "Excuser une absence",
    situation: "Vous êtes malade et vous n'êtes pas allé(e) au cours de français.",
    sourceMessage: {
      from: "Mme Perret",
      subject: "Cours de mardi",
      body: "Bonjour,\nVous n'êtes pas venu(e) au cours de français mardi.\nEst-ce que tout va bien ?\nMme Perret",
    },
    instruction: "Répondez à Mme Perret : excusez-vous, expliquez que vous êtes malade et demandez les devoirs.",
    points: ["L'excuse", "Votre maladie", "Une question sur les devoirs"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e8-1-pee-8",
    title: "Expliquer un itinéraire",
    situation: "Un ami vient chez vous samedi pour la première fois.",
    sourceMessage: {
      from: "Tomas",
      subject: "Samedi",
      body: "Salut !\nJ'arrive samedi à la gare à 15 h.\nComment je viens chez toi ? Bus ? Tram ?\nTomas",
    },
    instruction: "Répondez à Tomas : dites quel bus prendre, donnez l'arrêt et dites où vous l'attendez.",
    points: ["Le bus ou le tram à prendre", "L'arrêt", "Où vous l'attendez"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e8-1-pee-9",
    title: "Donner des nouvelles de la famille",
    situation: "Votre tante habite loin et demande des nouvelles.",
    sourceMessage: {
      from: "Tante Rosa",
      subject: "Des nouvelles !",
      body: "Bonjour,\nComment allez-vous tous ? Et les enfants, ça va à l'école ?\nÉcris-moi vite, je pense à vous.\nTante Rosa",
    },
    instruction: "Répondez à votre tante : donnez des nouvelles de la famille, parlez des enfants et de votre travail.",
    points: ["Les nouvelles de la famille", "Les enfants", "Votre travail"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e8-1-pee-10",
    title: "Écrire à la régie",
    situation: "Le chauffage de votre appartement ne marche plus. La régie vous répond.",
    sourceMessage: {
      from: "Régie Dubois",
      subject: "Votre appartement",
      body: "Bonjour,\nNous avons bien reçu votre appel au sujet du chauffage.\nQuand est-ce que le technicien peut passer chez vous ?\nRégie Dubois",
    },
    instruction: "Répondez à la régie : expliquez le problème de chauffage, dites quand vous êtes à la maison et donnez votre numéro de téléphone.",
    points: ["Le problème", "Quand vous êtes à la maison", "Votre numéro de téléphone"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
];
