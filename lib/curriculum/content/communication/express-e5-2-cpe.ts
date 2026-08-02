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

/* ── Compréhension écrite — E5.2 Aller à la pharmacie ─────────────────────── */

const CE_TEXT = `Pharmacie du Centre — Informations aux clients

La pharmacie est ouverte du lundi au samedi.
La pharmacie ouvre à 8 h et ferme à 19 h.
Vous avez une ordonnance ? Présentez votre ordonnance et votre carte d'assurance au comptoir.
Sans ordonnance, le pharmacien vous conseille pour les petits problèmes de santé.
Exemples : la toux, la fièvre, le mal de tête.
Le dimanche, la pharmacie de garde est la pharmacie de la Gare.
Elle est ouverte de 9 h à 18 h.
Attention au sirop contre la toux. Il ne convient pas aux enfants de moins de six ans.
Demandez conseil à votre pharmacien.`;

const CE_POOL = buildExpressPool("e5-2-ce", [
  q({
    id: "ce-q1",
    textQ: "Quels jours la pharmacie du Centre est-elle ouverte ?",
    text: ["Du lundi au samedi", "Tous les jours", "Seulement le week-end"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La pharmacie est ouverte du lundi au _________.",
    fill: "samedi",
    vfQ: "La pharmacie du Centre est ouverte le dimanche.",
    vfC: 1,
  }),
  q({
    id: "ce-q2",
    textQ: "Que faut-il présenter pour un médicament avec ordonnance ?",
    text: [
      "L'ordonnance et la carte d'assurance",
      "Le passeport et une photo",
      "La carte bancaire seulement",
    ],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Présentez votre ordonnance et votre carte d'_________ au comptoir.",
    fill: "assurance",
    vfQ: "Il faut montrer son ordonnance au comptoir.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où se trouve la pharmacie de garde le dimanche ?",
    text: ["À la gare", "Au centre commercial", "À l'hôpital"],
    textC: 0,
    // Pas de QCM image : « gare » est un label bloqué (isStreetLabel).
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le dimanche, la pharmacie de _________ est la pharmacie de la Gare.",
    fill: "garde",
    vfQ: "La pharmacie de garde du dimanche ouvre de 9 h à 18 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "À quelle heure la pharmacie du Centre ouvre-t-elle ?",
    text: ["À 8 h", "À 9 h", "À 10 h"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La pharmacie ouvre à 8 h et ferme à _________ h.",
    fill: "19",
    fillA: ["19 h", "dix-neuf"],
    vfQ: "La pharmacie du Centre ferme à 19 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Pour qui le sirop contre la toux ne convient-il pas ?",
    text: [
      "Les enfants de moins de 6 ans",
      "Les personnes âgées",
      "Les femmes enceintes",
    ],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il ne convient pas aux enfants de moins de _________ ans.",
    fill: "six",
    fillA: ["6"],
    vfQ: "Le sirop contre la toux convient à tous les enfants.",
    vfC: 1,
  }),
  q({
    id: "ce-q6",
    textQ: "Qui vous conseille pour les petits problèmes de santé ?",
    text: ["Le pharmacien", "Le médecin", "Le professeur"],
    textC: 0,
    img: ["pharmacien", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Sans ordonnance, le pharmacien vous _________ pour les petits problèmes de santé.",
    fill: "conseille",
    vfQ: "Le prix des médicaments est indiqué dans le texte.",
    vfC: 2,
  }),
]);

export const E5_2_CE: CommunicationExercise = readingPoolExercise({
  id: "e5-2-ce",
  readingText: CE_TEXT,
  questionPool: CE_POOL,
});

/* ── Production orale — dialogues à jouer (thème pharmacie) ───────────────── */

const PHARMACIEN = { title: "Le pharmacien", vous: "le pharmacien / la pharmacienne" };
const CLIENT = { title: "Le client", vous: "le client / la cliente" };

export const E5_2_PO: ExpressPoDialogue[] = [
  {
    id: "e5-2-po-1",
    title: "Acheter un médicament avec ordonnance",
    context: "Vous êtes à la pharmacie avec une ordonnance du médecin.",
    roleA: PHARMACIEN,
    roleB: CLIENT,
    lines: [
      { role: "A", text: "Bonjour, que puis-je faire pour vous ?" },
      { role: "B", text: "Bonjour, j'ai une ordonnance du médecin." },
      { role: "A", text: "Merci. Vous avez votre carte d'assurance ?" },
      { role: "B", text: "Oui, la voilà." },
      { role: "A", text: "Voici les comprimés. Il faut en prendre un matin et soir." },
      { role: "B", text: "D'accord. Pendant combien de jours ?" },
      { role: "A", text: "Pendant cinq jours. Avec un verre d'eau, pendant le repas." },
      { role: "B", text: "Merci beaucoup. Au revoir !" },
    ],
  },
  {
    id: "e5-2-po-2",
    title: "Un sirop contre la toux",
    context: "Vous toussez depuis trois jours et vous demandez conseil.",
    roleA: PHARMACIEN,
    roleB: CLIENT,
    lines: [
      { role: "A", text: "Bonjour ! Vous avez besoin d'aide ?" },
      { role: "B", text: "Oui, je tousse beaucoup depuis trois jours." },
      { role: "A", text: "Vous avez aussi de la fièvre ?" },
      { role: "B", text: "Non, pas de fièvre. Juste la toux." },
      { role: "A", text: "Je vous conseille ce sirop, deux cuillères par jour." },
      { role: "B", text: "C'est pour combien de temps ?" },
      { role: "A", text: "Une semaine. Si ça continue, il faut voir un médecin." },
      { role: "B", text: "Très bien, je le prends. Merci !" },
    ],
  },
  {
    id: "e5-2-po-3",
    title: "Mal de tête",
    context: "Vous avez mal à la tête et vous n'avez pas d'ordonnance.",
    roleA: PHARMACIEN,
    roleB: CLIENT,
    lines: [
      { role: "A", text: "Bonjour, je peux vous aider ?" },
      { role: "B", text: "Bonjour, j'ai très mal à la tête. Vous avez quelque chose ?" },
      { role: "A", text: "Oui. Vous êtes allergique à un médicament ?" },
      { role: "B", text: "Non, je ne suis pas allergique." },
      { role: "A", text: "Alors prenez ces comprimés, un toutes les six heures." },
      { role: "B", text: "Je peux en prendre combien par jour au maximum ?" },
      { role: "A", text: "Trois par jour au maximum, avec de l'eau." },
      { role: "B", text: "Parfait, merci pour votre aide." },
    ],
  },
  {
    id: "e5-2-po-4",
    title: "Une crème pour une brûlure",
    context: "Votre enfant s'est brûlé la main en cuisinant.",
    roleA: PHARMACIEN,
    roleB: CLIENT,
    lines: [
      { role: "A", text: "Bonjour, que vous faut-il ?" },
      { role: "B", text: "Mon fils s'est brûlé la main. Vous avez une crème ?" },
      { role: "A", text: "C'est une petite brûlure ou c'est grave ?" },
      { role: "B", text: "C'est petit, la peau est juste rouge." },
      { role: "A", text: "Voici une crème. Il faut en mettre deux fois par jour." },
      { role: "B", text: "D'accord. Et si ça ne va pas mieux ?" },
      { role: "A", text: "Si ça ne va pas mieux dans trois jours, allez chez le médecin." },
      { role: "B", text: "Merci beaucoup, bonne journée !" },
    ],
  },
  {
    id: "e5-2-po-5",
    title: "La pharmacie de garde",
    context: "C'est dimanche et vous téléphonez pour trouver une pharmacie ouverte.",
    roleA: PHARMACIEN,
    roleB: CLIENT,
    lines: [
      { role: "A", text: "Pharmacie de la Gare, bonjour !" },
      { role: "B", text: "Bonjour, vous êtes ouverts aujourd'hui ?" },
      { role: "A", text: "Oui, nous sommes de garde ce dimanche, de 9 h à 18 h." },
      { role: "B", text: "Super. J'ai besoin d'un médicament pour la fièvre." },
      { role: "A", text: "Pas de problème, nous en avons. C'est pour un adulte ?" },
      { role: "B", text: "Oui, c'est pour moi. J'arrive dans vingt minutes." },
      { role: "A", text: "Très bien, à tout à l'heure !" },
      { role: "B", text: "Merci, à tout à l'heure !" },
    ],
  },
  {
    id: "e5-2-po-6",
    title: "Des pastilles pour la gorge",
    context: "Vous avez mal à la gorge depuis ce matin.",
    roleA: PHARMACIEN,
    roleB: CLIENT,
    lines: [
      { role: "A", text: "Bonjour ! Qu'est-ce qu'il vous faut ?" },
      { role: "B", text: "J'ai mal à la gorge. Vous avez des pastilles ?" },
      { role: "A", text: "Oui, bien sûr. Vous avez du mal à avaler ?" },
      { role: "B", text: "Un peu, surtout le matin." },
      { role: "A", text: "Prenez ces pastilles, une toutes les trois heures." },
      { role: "B", text: "D'accord. Ça coûte combien ?" },
      { role: "A", text: "Huit francs cinquante, s'il vous plaît." },
      { role: "B", text: "Voilà. Merci et bonne journée !" },
    ],
  },
  {
    id: "e5-2-po-7",
    title: "Oublié son ordonnance",
    context: "Vous voulez un médicament, mais vous avez oublié votre ordonnance à la maison.",
    roleA: PHARMACIEN,
    roleB: CLIENT,
    lines: [
      { role: "A", text: "Bonjour, je vous écoute." },
      { role: "B", text: "Bonjour, je voudrais mes médicaments, mais j'ai oublié mon ordonnance." },
      { role: "A", text: "Sans ordonnance, je ne peux pas vous donner ce médicament." },
      { role: "B", text: "Qu'est-ce que je peux faire alors ?" },
      { role: "A", text: "Vous pouvez revenir avec l'ordonnance, ou le médecin peut nous l'envoyer." },
      { role: "B", text: "D'accord, je vais appeler mon médecin." },
      { role: "A", text: "Très bien. À tout à l'heure peut-être !" },
      { role: "B", text: "Merci, au revoir !" },
    ],
  },
  {
    id: "e5-2-po-8",
    title: "Un médicament pour un enfant",
    context: "Votre fille de 4 ans tousse. Vous demandez si le sirop convient.",
    roleA: PHARMACIEN,
    roleB: CLIENT,
    lines: [
      { role: "A", text: "Bonjour ! Comment puis-je vous aider ?" },
      { role: "B", text: "Ma fille tousse. Ce sirop convient pour un enfant de 4 ans ?" },
      { role: "A", text: "Non, ce sirop est pour les enfants de plus de 6 ans." },
      { role: "B", text: "Ah… vous avez autre chose pour elle ?" },
      { role: "A", text: "Oui, ce sirop pour enfants : une cuillère matin et soir." },
      { role: "B", text: "Parfait. Il y a des effets secondaires ?" },
      { role: "A", text: "Non, mais si la toux continue, allez chez le pédiatre." },
      { role: "B", text: "D'accord, merci beaucoup !" },
    ],
  },
  {
    id: "e5-2-po-9",
    title: "Demander le prix et payer",
    context: "Vous achetez de l'aspirine et vous demandez le prix.",
    roleA: PHARMACIEN,
    roleB: CLIENT,
    lines: [
      { role: "A", text: "Bonjour, vous désirez ?" },
      { role: "B", text: "Bonjour, une boîte d'aspirine, s'il vous plaît." },
      { role: "A", text: "En comprimés ou en sachets ?" },
      { role: "B", text: "En sachets, s'il vous plaît. C'est combien ?" },
      { role: "A", text: "Six francs nonante. Vous payez par carte ?" },
      { role: "B", text: "Oui, par carte. Tenez." },
      { role: "A", text: "Merci. Voici votre ticket. Bonne journée !" },
      { role: "B", text: "Merci, au revoir !" },
    ],
  },
  {
    id: "e5-2-po-10",
    title: "Expliquer une allergie",
    context: "Vous avez des rougeurs sur les bras et vous demandez conseil.",
    roleA: PHARMACIEN,
    roleB: CLIENT,
    lines: [
      { role: "A", text: "Bonjour, qu'est-ce qui vous amène ?" },
      { role: "B", text: "J'ai des rougeurs sur les bras depuis hier. Ça gratte." },
      { role: "A", text: "Vous avez mangé quelque chose de nouveau ?" },
      { role: "B", text: "Oui, des fruits de mer, hier soir." },
      { role: "A", text: "C'est peut-être une allergie. Prenez ce médicament, un par jour." },
      { role: "B", text: "D'accord. Et si ça ne part pas ?" },
      { role: "A", text: "Si ça ne part pas dans deux jours, il faut voir un médecin." },
      { role: "B", text: "Merci pour vos conseils !" },
    ],
  },
];

/* ── Production écrite — consignes (A1 : 50 mots minimum) ─────────────────── */

const PE_MIN = 50;
const PE_MAX = 120;

export const E5_2_PE: ExpressPePrompt[] = [
  {
    id: "e5-2-pe-1",
    title: "Message au pharmacien",
    situation: "Vous êtes malade et vous ne pouvez pas venir à la pharmacie. Vous écrivez un message au pharmacien.",
    instruction: "Écrivez un message : expliquez vos symptômes, ce dont vous avez besoin et demandez si une livraison est possible.",
    points: ["Vos symptômes", "Le médicament dont vous avez besoin", "Une question sur la livraison"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e5-2-pe-2",
    title: "Raconter une visite à la pharmacie",
    situation: "Vous êtes allé(e) à la pharmacie hier pour la première fois en Suisse.",
    instruction: "Racontez votre visite à un ami : pourquoi vous y êtes allé(e), ce que vous avez acheté et les conseils du pharmacien.",
    points: ["La raison de la visite", "Le médicament acheté", "Les conseils reçus"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e5-2-pe-3",
    title: "E-mail au médecin",
    situation: "La pharmacie a besoin d'une nouvelle ordonnance pour vos médicaments.",
    instruction: "Écrivez un e-mail à votre médecin : expliquez la situation et demandez une nouvelle ordonnance.",
    points: ["La formule de politesse", "L'explication de la situation", "La demande d'ordonnance"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e5-2-pe-4",
    title: "Conseils à un ami malade",
    situation: "Votre ami a de la fièvre et ne connaît pas les pharmacies de la ville.",
    instruction: "Écrivez un message à votre ami : donnez-lui des conseils et expliquez où se trouve la pharmacie et comment y acheter un médicament.",
    points: ["Deux conseils santé", "L'adresse de la pharmacie", "Ce qu'il faut apporter"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e5-2-pe-5",
    title: "Décrire ses symptômes",
    situation: "Vous préparez votre visite à la pharmacie et vous notez vos symptômes.",
    instruction: "Décrivez vos symptômes : depuis quand vous êtes malade, où vous avez mal et ce que vous avez déjà pris.",
    points: ["Depuis quand", "Où vous avez mal", "Ce que vous avez déjà pris"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e5-2-pe-6",
    title: "Message d'excuse au travail",
    situation: "Vous êtes malade. Vous devez aller à la pharmacie et chez le médecin au lieu d'aller travailler.",
    instruction: "Écrivez un message à votre chef : excusez-vous, expliquez votre problème de santé et dites quand vous revenez.",
    points: ["L'excuse", "Le problème de santé", "La date de retour"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e5-2-pe-7",
    title: "La pharmacie de mon quartier",
    situation: "Un nouveau voisin vous demande des informations sur la pharmacie du quartier.",
    instruction: "Décrivez la pharmacie de votre quartier : les horaires, l'équipe et ce qu'on peut y acheter.",
    points: ["Les horaires", "L'équipe", "Ce qu'on peut acheter"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e5-2-pe-8",
    title: "Demande de remboursement",
    situation: "Vous avez acheté un médicament et vous voulez le remboursement de votre assurance.",
    instruction: "Écrivez un court message à votre assurance : expliquez votre achat, joignez le ticket et demandez le remboursement.",
    points: ["Le médicament acheté", "Le prix", "La demande de remboursement"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e5-2-pe-9",
    title: "Instructions pour la baby-sitter",
    situation: "Votre enfant prend un sirop. Ce soir, une baby-sitter garde votre enfant.",
    instruction: "Écrivez les instructions : le nom du médicament, la dose, l'heure de la prise et le numéro à appeler en cas de problème.",
    points: ["La dose et l'heure", "Comment donner le sirop", "Le numéro d'urgence"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e5-2-pe-10",
    title: "Comparer pharmacie et médecin",
    situation: "Un ami vous demande quand aller à la pharmacie et quand aller chez le médecin.",
    instruction: "Expliquez la différence : ce que le pharmacien peut faire et quand il faut absolument voir un médecin. Donnez un exemple.",
    points: ["Le rôle du pharmacien", "Quand voir un médecin", "Un exemple"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
];
