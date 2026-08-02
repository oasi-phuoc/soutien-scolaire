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

/* ── Compréhension écrite — E7.2 Pratiquer une activité sportive ──────────── */

const CE_TEXT = `Base de loisirs du Lac — Programme d'été

La base de loisirs du Lac est ouverte tous les jours.
La base est ouverte de 9 h à 18 h.
Le matin, vous pouvez faire du canoé-kayak sur le lac.
Vous pouvez aussi prendre un cours de voile.
L'après-midi, il y a de l'escalade et du VTT dans la forêt.
Les cours pour les débutants ont lieu le mardi et le jeudi.
Ils commencent à 10 h.
La location d'un VTT coûte 15 € la journée.
Attention ! Avec la pluie, les activités sur le lac sont annulées.
Avec beaucoup de vent, elles sont annulées aussi.
Inscription à l'accueil de la base.`;

const CE_POOL = buildExpressPool("e7-2-ce", [
  q({
    id: "ce-q1",
    textQ: "Quelles activités peut-on faire le matin ?",
    text: [
      "Du canoé-kayak et de la voile",
      "De l'escalade et du VTT",
      "Du tennis et de la natation",
    ],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Vous pouvez aussi prendre un cours de _________.",
    fill: "voile",
    vfQ: "Le matin, on peut faire du canoé-kayak sur le lac.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Où fait-on l'escalade et le VTT ?",
    text: ["Dans la forêt", "Sur la plage", "À la montagne"],
    textC: 0,
    img: ["forêt", "plage", "montagne"],
    imgC: 0,
    fillQ: "L'après-midi, il y a de l'escalade et du VTT dans la _________.",
    fill: "forêt",
    fillA: ["foret"],
    vfQ: "L'escalade a lieu le matin.",
    vfC: 1,
  }),
  q({
    id: "ce-q3",
    textQ: "Quand ont lieu les cours pour les débutants ?",
    text: ["Le mardi et le jeudi à 10 h", "Le lundi à 9 h", "Le week-end à 14 h"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les cours pour les débutants ont lieu le mardi et le _________.",
    fill: "jeudi",
    vfQ: "Les cours pour les débutants commencent à 10 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien coûte la location d'un VTT pour la journée ?",
    text: ["15 €", "5 €", "50 €"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La location d'un VTT coûte _________ € la journée.",
    fill: "15",
    fillA: ["quinze"],
    vfQ: "La location d'un VTT coûte 50 € la journée.",
    vfC: 1,
  }),
  q({
    id: "ce-q5",
    textQ: "Que se passe-t-il quand il pleut ?",
    text: [
      "Les activités sur le lac sont annulées",
      "Toutes les activités continuent",
      "La base ferme toute la journée",
    ],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Avec la pluie, les activités sur le lac sont _________.",
    fill: "annulées",
    fillA: ["annulees", "annulée", "annulee"],
    vfQ: "Avec beaucoup de vent, les activités sur le lac sont annulées.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Où faut-il s'inscrire pour une activité ?",
    text: ["À l'accueil de la base", "Sur internet", "Par téléphone"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Inscription à l'_________ de la base.",
    fill: "accueil",
    vfQ: "Le prix des cours de voile est indiqué dans le texte.",
    vfC: 2,
  }),
  q({
    id: "ce-q7",
    textQ: "À quelle heure la base de loisirs ouvre-t-elle ?",
    text: ["À 9 h", "À 8 h", "À 10 h"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La base est ouverte de 9 h à _________ h.",
    fill: "18",
    fillA: ["dix-huit"],
    vfQ: "La base de loisirs est fermée le dimanche.",
    vfC: 1,
  }),
]);

export const E7_2_CE: CommunicationExercise = readingPoolExercise({
  id: "e7-2-ce",
  readingText: CE_TEXT,
  questionPool: CE_POOL,
});

/* ── Production orale — dialogues à jouer (thème sport) ───────────────────── */

const MONITEUR = { title: "Le moniteur", vous: "le moniteur / la monitrice" };
const CLIENT = { title: "Le client", vous: "le client / la cliente" };
const AMI_1 = { title: "Le premier ami", vous: "le premier ami / la première amie" };
const AMI_2 = { title: "Le deuxième ami", vous: "le deuxième ami / la deuxième amie" };

export const E7_2_PO: ExpressPoDialogue[] = [
  {
    id: "e7-2-po-1",
    title: "S'inscrire à un cours de voile",
    context: "Vous êtes à la base de loisirs. Vous voulez apprendre la voile.",
    roleA: MONITEUR,
    roleB: CLIENT,
    lines: [
      { role: "A", text: "Bonjour ! Je peux vous aider ?" },
      { role: "B", text: "Bonjour, je voudrais prendre des cours de voile." },
      { role: "A", text: "Vous savez déjà faire de la voile ?" },
      { role: "B", text: "Non, je suis débutant." },
      { role: "A", text: "Les cours pour les débutants sont le mardi et le jeudi à 10 h." },
      { role: "B", text: "Très bien. Un cours dure combien de temps ?" },
      { role: "A", text: "Deux heures. C'est 25 € le cours." },
      { role: "B", text: "Parfait, je m'inscris pour mardi !" },
    ],
  },
  {
    id: "e7-2-po-2",
    title: "Louer un VTT",
    context: "Vous voulez louer un vélo pour la journée.",
    roleA: MONITEUR,
    roleB: CLIENT,
    lines: [
      { role: "A", text: "Bonjour, vous désirez ?" },
      { role: "B", text: "Bonjour, je voudrais louer un VTT, s'il vous plaît." },
      { role: "A", text: "Pour la journée ou la demi-journée ?" },
      { role: "B", text: "Pour la journée. C'est combien ?" },
      { role: "A", text: "15 € la journée, avec le casque." },
      { role: "B", text: "Très bien. Il y a de beaux chemins pour le vélo ici ?" },
      { role: "A", text: "Oui, il y a un joli chemin dans la forêt, derrière le lac." },
      { role: "B", text: "Super, merci beaucoup !" },
    ],
  },
  {
    id: "e7-2-po-3",
    title: "Choisir un sport ensemble",
    context: "Il fait beau. Vous choisissez une activité avec un ami.",
    roleA: AMI_1,
    roleB: AMI_2,
    lines: [
      { role: "A", text: "Il fait beau aujourd'hui ! On joue au tennis ?" },
      { role: "B", text: "Ah non, je déteste le tennis. On peut faire du VTT ?" },
      { role: "A", text: "Il fait trop chaud pour le vélo…" },
      { role: "B", text: "Alors on fait du canoé-kayak sur le lac ?" },
      { role: "A", text: "Bonne idée ! J'adore le canoé-kayak." },
      { role: "B", text: "On peut louer un canoé à la base de loisirs." },
      { role: "A", text: "D'accord. On y va à quelle heure ?" },
      { role: "B", text: "À 14 h, après le déjeuner !" },
    ],
  },
  {
    id: "e7-2-po-4",
    title: "La météo et l'activité",
    context: "Vous téléphonez à la base de loisirs : vous voulez savoir si votre cours a lieu.",
    roleA: MONITEUR,
    roleB: CLIENT,
    lines: [
      { role: "A", text: "Base de loisirs du Lac, bonjour !" },
      { role: "B", text: "Bonjour, j'ai un cours de voile à 11 h. Il a lieu aujourd'hui ?" },
      { role: "A", text: "Il y a beaucoup de vent ce matin, le cours est annulé." },
      { role: "B", text: "Ah dommage… Et demain ?" },
      { role: "A", text: "Demain, il fait beau. Le cours est à 11 h, comme d'habitude." },
      { role: "B", text: "Parfait. Je dois apporter quelque chose ?" },
      { role: "A", text: "Non, nous prêtons tout le matériel." },
      { role: "B", text: "Merci, à demain !" },
    ],
  },
  {
    id: "e7-2-po-5",
    title: "Apprendre à nager",
    context: "Vous ne savez pas nager et vous voulez prendre des cours.",
    roleA: MONITEUR,
    roleB: CLIENT,
    lines: [
      { role: "A", text: "Bonjour ! Qu'est-ce que je peux faire pour vous ?" },
      { role: "B", text: "Bonjour, je ne sais pas nager et je voudrais apprendre." },
      { role: "A", text: "Pas de problème ! Il y a des cours pour les adultes débutants." },
      { role: "B", text: "C'est quand ?" },
      { role: "A", text: "Le mardi soir à 18 h, à la piscine." },
      { role: "B", text: "Et le cours coûte combien ?" },
      { role: "A", text: "12 € le cours, ou 100 € pour dix cours." },
      { role: "B", text: "Je prends dix cours. Merci !" },
    ],
  },
  {
    id: "e7-2-po-6",
    title: "Une sortie en canoé-kayak",
    context: "Vous réservez une sortie en canoé-kayak pour deux personnes.",
    roleA: MONITEUR,
    roleB: CLIENT,
    lines: [
      { role: "A", text: "Bonjour, vous désirez ?" },
      { role: "B", text: "Bonjour, on peut faire du canoé-kayak aujourd'hui ?" },
      { role: "A", text: "Oui, il y a une sortie à 10 h. Vous êtes combien ?" },
      { role: "B", text: "Deux personnes. La sortie dure combien de temps ?" },
      { role: "A", text: "Deux heures, sur le lac et sur la rivière." },
      { role: "B", text: "Il faut savoir nager ?" },
      { role: "A", text: "Oui, et vous portez un gilet de sauvetage." },
      { role: "B", text: "D'accord, on réserve pour 10 h !" },
    ],
  },
  {
    id: "e7-2-po-7",
    title: "Le sport de chacun",
    context: "Vous parlez des sports que vous pratiquez avec un collègue.",
    roleA: AMI_1,
    roleB: AMI_2,
    lines: [
      { role: "A", text: "Tu fais du sport, toi ?" },
      { role: "B", text: "Oui, je fais de la natation le lundi et du vélo le week-end. Et toi ?" },
      { role: "A", text: "Moi, je fais de l'escalade avec mon frère." },
      { role: "B", text: "L'escalade ? Ce n'est pas dangereux ?" },
      { role: "A", text: "Non, on grimpe avec un casque et une corde." },
      { role: "B", text: "Et tu en fais où ?" },
      { role: "A", text: "En salle en hiver, et en montagne en été." },
      { role: "B", text: "Super ! Je veux bien essayer un jour." },
    ],
  },
  {
    id: "e7-2-po-8",
    title: "Le cours d'escalade",
    context: "Vous demandez des informations sur le cours d'escalade.",
    roleA: MONITEUR,
    roleB: CLIENT,
    lines: [
      { role: "A", text: "Bonjour ! Vous avez une question ?" },
      { role: "B", text: "Oui, je voudrais essayer l'escalade. Il y a un cours aujourd'hui ?" },
      { role: "A", text: "Oui, à 11 h. Il dure deux heures." },
      { role: "B", text: "Je n'ai jamais fait d'escalade. C'est un problème ?" },
      { role: "A", text: "Non, c'est un cours pour les débutants." },
      { role: "B", text: "Qu'est-ce qu'il faut apporter ?" },
      { role: "A", text: "Des baskets et une bouteille d'eau. Nous prêtons le casque." },
      { role: "B", text: "Parfait, je m'inscris !" },
    ],
  },
  {
    id: "e7-2-po-9",
    title: "Un week-end au ski",
    context: "Vous préparez un week-end à la montagne avec un ami.",
    roleA: AMI_1,
    roleB: AMI_2,
    lines: [
      { role: "A", text: "Tu viens à la montagne ce week-end ? Les pistes ouvrent samedi !" },
      { role: "B", text: "Oui ! Mais je ne sais pas faire du ski…" },
      { role: "A", text: "Tu peux prendre un cours de ski débutant le samedi matin." },
      { role: "B", text: "Bonne idée. Et toi, tu skies ?" },
      { role: "A", text: "Oui, mais je voudrais essayer le surf cette année." },
      { role: "B", text: "Il fait quel temps ce week-end ?" },
      { role: "A", text: "Il neige vendredi et il fait beau samedi. C'est parfait !" },
      { role: "B", text: "Super, on part vendredi soir !" },
    ],
  },
  {
    id: "e7-2-po-10",
    title: "Un match de tennis",
    context: "Vous proposez un match de tennis à un collègue.",
    roleA: AMI_1,
    roleB: AMI_2,
    lines: [
      { role: "A", text: "Tu joues au tennis, non ?" },
      { role: "B", text: "Oui, je joue le samedi matin. Pourquoi ?" },
      { role: "A", text: "On fait un match ensemble ce week-end ?" },
      { role: "B", text: "D'accord ! On joue où ?" },
      { role: "A", text: "Au stade, il y a des courts de tennis. C'est 10 € l'heure." },
      { role: "B", text: "Très bien. Samedi à 9 h, ça te va ?" },
      { role: "A", text: "Parfait. J'apporte les balles." },
      { role: "B", text: "Et moi, je te prête une raquette si tu veux !" },
    ],
  },
];

/* ── Production écrite — consignes (A1 : 50 mots minimum) ─────────────────── */

const PE_MIN = 50;
const PE_MAX = 120;

export const E7_2_PE: ExpressPePrompt[] = [
  {
    id: "e7-2-pe-1",
    title: "Proposer une activité",
    situation: "Il fait très beau ce week-end.",
    instruction: "Écrivez un message à un ami : proposez une activité sportive, donnez le lieu et l'heure du rendez-vous.",
    points: ["L'activité proposée", "Le lieu", "Le jour et l'heure"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e7-2-pe-2",
    title: "Mon sport préféré",
    situation: "Votre professeur de français vous demande de présenter votre sport préféré.",
    instruction: "Décrivez votre sport préféré : pourquoi vous l'aimez, où et quand vous le pratiquez.",
    points: ["Le sport et pourquoi vous l'aimez", "Où vous le pratiquez", "Quand vous le pratiquez"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e7-2-pe-3",
    title: "Inscription à un cours",
    situation: "Vous voulez apprendre la voile à la base de loisirs.",
    instruction: "Écrivez un e-mail : dites que vous êtes débutant(e), demandez les horaires des cours et le prix.",
    points: ["Votre niveau (débutant)", "Une question sur les horaires", "Une question sur le prix"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e7-2-pe-4",
    title: "Raconter une journée sportive",
    situation: "Hier, vous avez passé la journée à la base de loisirs avec des amis.",
    instruction: "Racontez votre journée : les activités du matin, celles de l'après-midi et votre moment préféré.",
    points: ["L'activité du matin", "L'activité de l'après-midi", "Votre moment préféré"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e7-2-pe-5",
    title: "Le programme selon la météo",
    situation: "Samedi, il fait beau. Dimanche, il pleut.",
    instruction: "Écrivez le programme du week-end pour votre famille : une activité pour samedi, une activité pour dimanche et une explication avec la météo.",
    points: ["L'activité de samedi", "L'activité de dimanche", "La météo des deux jours"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e7-2-pe-6",
    title: "Reporter une sortie",
    situation: "Vous devez faire du vélo avec un ami demain, mais la météo annonce de la pluie.",
    instruction: "Écrivez un message à votre ami : expliquez le problème, proposez une autre date ou une autre activité.",
    points: ["La météo de demain", "Une nouvelle date", "Une autre idée d'activité"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e7-2-pe-7",
    title: "Les sports de ma famille",
    situation: "Vous préparez un week-end sportif : chaque personne de la famille choisit une activité.",
    instruction: "Décrivez les activités du week-end : qui fait quoi, où et quand.",
    points: ["Trois personnes et leurs sports", "Le lieu des activités", "Le moment (jour, heure)"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e7-2-pe-8",
    title: "Louer des vélos",
    situation: "Vous voulez louer des vélos pour toute la famille pendant les vacances.",
    instruction: "Écrivez un e-mail au magasin de location : le nombre de vélos, la durée de la location et une question sur le prix.",
    points: ["Le nombre de vélos", "La durée de la location", "Une question sur le prix ou les casques"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e7-2-pe-9",
    title: "Comparer deux sports",
    situation: "Un ami hésite entre la natation et l'escalade.",
    instruction: "Comparez les deux sports : les avantages de chaque sport et votre conseil pour votre ami.",
    points: ["Les avantages de la natation", "Les avantages de l'escalade", "Votre conseil"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e7-2-pe-10",
    title: "Conseils à un débutant",
    situation: "Un ami veut commencer le sport, mais il ne sait pas quoi choisir.",
    instruction: "Donnez-lui des conseils : un sport facile pour commencer, le matériel nécessaire et une idée de cours pour débutants.",
    points: ["Un sport pour commencer", "Le matériel nécessaire", "Une idée de cours débutant"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
];
