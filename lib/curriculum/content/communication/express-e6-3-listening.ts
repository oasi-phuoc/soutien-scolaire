import { buildExpressPool, type ExpressRawQ } from "./express-listening-helpers";
import type { ExpressListeningAudio } from "./express-e1-1-listening";
import { A1 } from "./express-lesson-factory";

function q(item: ExpressRawQ): ExpressRawQ { return item; }

const TR_182 = `- Bonjour madame, quelle est votre destination ?
- Bonjour, je vais à Bruxelles.
- Bien… le vol à destination de Bruxelles, départ 7 h 15… Votre passeport s'il vous plaît.
- J'ai ma carte d'identité. Et voici une copie de mon billet électronique.
- Très bien. Vous avez des bagages à enregistrer ?
- Non, j'ai seulement une valise cabine et mon sac à main.
- Voici votre carte d'embarquement. Vous avez le siège 28F.
- C'est bien côté hublot ?
- Oui. L'embarquement commence à 6 h 45.
- Je ne vois pas la porte d'embarquement sur la carte !
- C'est normal. La porte n'est pas encore indiquée. Vous devez regarder sur le tableau des départs.
- Merci monsieur !
- Bon séjour en Belgique !`;

const POOL_182 = buildExpressPool("e6-3-182", [
  q({
    id: "182-q1",
    textQ: "Quel transport la dame va-t-elle prendre ?",
    text: ["L'avion", "Le train", "Le bateau"],
    textC: 0,
    img: ["avion", "train", "bateau"],
    imgC: 0,
    fillQ: "La dame va prendre l'_________ pour Bruxelles.",
    fill: "avion",
    vfQ: "La scène se passe dans un aéroport.",
    vfC: 0,
  }),
  q({
    id: "182-q2",
    textQ: "À quelle heure part le vol ?",
    text: ["À 7 h 15", "À 6 h 45", "À 7 h 45"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le vol à destination de Bruxelles part à _________ h 15.",
    fill: "7",
    fillA: ["sept"],
    vfQ: "Le vol part à 6 h 45.",
    vfC: 1,
  }),
  q({
    id: "182-q3",
    textQ: "Quel document la dame montre-t-elle ?",
    text: ["Sa carte d'identité", "Son passeport", "Son permis de conduire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'ai ma carte d'_________.",
    fill: "identité",
    fillA: ["identite"],
    vfQ: "La dame montre son passeport.",
    vfC: 1,
  }),
  q({
    id: "182-q4",
    textQ: "Quels bagages la dame a-t-elle ?",
    text: ["Une valise cabine et un sac à main", "Deux grandes valises", "Un sac à dos seulement"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'ai seulement une _________ cabine et mon sac à main.",
    fill: "valise",
    vfQ: "La dame a des bagages à enregistrer.",
    vfC: 1,
  }),
  q({
    id: "182-q5",
    textQ: "Quel siège la dame a-t-elle ?",
    text: ["Le 28F", "Le 82F", "Le 28E"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Vous avez le siège 28F, côté _________.",
    fill: "hublot",
    vfQ: "Le siège 28F est côté hublot.",
    vfC: 0,
  }),
  q({
    id: "182-q6",
    textQ: "Quand commence l'embarquement ?",
    text: ["À 6 h 45", "À 7 h 15", "À 6 h 15"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'embarquement commence à 6 h _________.",
    fill: "45",
    fillA: ["quarante-cinq", "quarante cinq"],
    vfQ: "La durée du vol est mentionnée dans le dialogue.",
    vfC: 2,
  }),
  q({
    id: "182-q7",
    textQ: "Où faut-il regarder pour trouver la porte d'embarquement ?",
    text: ["Sur le tableau des départs", "Sur la carte d'embarquement", "Sur le passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Vous devez regarder sur le _________ des départs.",
    fill: "tableau",
    vfQ: "La porte d'embarquement est déjà indiquée sur la carte.",
    vfC: 1,
  }),
]);

const TR_188 = `Mesdames et messieurs, votre attention s'il vous plaît. Les passagers du vol AF416 à destination de Porto sont invités à se présenter porte d'embarquement B6 avec leur passeport.`;

const POOL_188 = buildExpressPool("e6-3-188", [
  q({
    id: "188-q1",
    textQ: "Pour qui est cette annonce ?",
    text: ["Pour les passagers d'un vol", "Pour les conducteurs de bus", "Pour les clients d'un magasin"],
    textC: 0,
    img: ["avion", "bus", "boutique"],
    imgC: 0,
    fillQ: "Les _________ du vol AF416 sont invités à se présenter.",
    fill: "passagers",
    vfQ: "Cette annonce concerne les passagers d'un vol.",
    vfC: 0,
  }),
  q({
    id: "188-q2",
    textQ: "Quel vol part pour Porto ?",
    text: ["Le vol AF416", "Le vol AF614", "Le vol AF146"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le numéro du vol pour Porto est le _________.",
    fill: "AF416",
    fillA: ["af416", "af 416"],
    vfQ: "Le vol pour Porto est le vol AF614.",
    vfC: 1,
  }),
  q({
    id: "188-q3",
    textQ: "Où les passagers doivent-ils se présenter ?",
    text: ["À la porte B6", "À la porte B16", "À la porte D6"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Présentez-vous à la porte d'_________ B6.",
    fill: "embarquement",
    vfQ: "Les passagers doivent aller à la porte B6.",
    vfC: 0,
  }),
  q({
    id: "188-q4",
    textQ: "Quel document les passagers doivent-ils présenter ?",
    text: ["Leur passeport", "Leur carte d'identité", "Leur billet de train"],
    textC: 0,
    img: ["passeport", "carte", "billet"],
    imgC: 0,
    fillQ: "Présentez-vous porte B6 avec votre _________.",
    fill: "passeport",
    vfQ: "Les passagers doivent avoir leur carte d'identité.",
    vfC: 1,
  }),
  q({
    id: "188-q5",
    textQ: "Où entend-on cette annonce ?",
    text: ["Dans un aéroport", "Dans une gare", "Dans un supermarché"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Mesdames et messieurs, votre _________ s'il vous plaît.",
    fill: "attention",
    vfQ: "L'heure d'embarquement est mentionnée dans l'annonce.",
    vfC: 2,
  }),
]);

const TR_189 = `- Bonjour, votre passeport s'il vous plaît. Quelle est votre destination ?
- Bonjour. Je vais aux États-Unis, un vol direct à destination de Boston.
- Vous avez un visa ?
- Oui bien sûr, voilà.
- Très bien. Bon vol.`;

const POOL_189 = buildExpressPool("e6-3-189", [
  q({
    id: "189-q1",
    textQ: "Quel document l'agent demande-t-il d'abord ?",
    text: ["Le passeport", "Le visa", "La carte d'embarquement"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Bonjour, votre _________ s'il vous plaît.",
    fill: "passeport",
    vfQ: "L'agent demande d'abord le passeport.",
    vfC: 0,
  }),
  q({
    id: "189-q2",
    textQ: "Où va le voyageur ?",
    text: ["Aux États-Unis", "Au Canada", "En Espagne"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Bonjour. Je _________ aux États-Unis.",
    fill: "vais",
    vfQ: "Le voyageur va aux États-Unis.",
    vfC: 0,
  }),
  q({
    id: "189-q3",
    textQ: "Comment est le vol pour Boston ?",
    text: ["Direct", "Avec une escale", "Annulé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est un vol _________ à destination de Boston.",
    fill: "direct",
    vfQ: "Le vol pour Boston fait une escale.",
    vfC: 1,
  }),
  q({
    id: "189-q4",
    textQ: "Est-ce que le voyageur a un visa ?",
    text: ["Oui, c'est vrai", "Non, c'est faux", "Ce n'est pas dit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Vous avez un _________ ? — Oui bien sûr, voilà.",
    fill: "visa",
    vfQ: "Le voyageur n'a pas de visa.",
    vfC: 1,
  }),
  q({
    id: "189-q5",
    textQ: "Que dit l'agent à la fin du contrôle ?",
    text: ["Bon vol", "Bon séjour", "Bonne journée"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Très bien. Bon _________.",
    fill: "vol",
    vfQ: "L'heure du vol est mentionnée dans le dialogue.",
    vfC: 2,
  }),
  q({
    id: "189-q6",
    textQ: "Comment le monsieur voyage-t-il ?",
    text: ["En avion", "En bateau", "En train"],
    textC: 0,
    img: ["avion", "bateau", "train"],
    imgC: 0,
    fillQ: "Le monsieur prend l'_________ pour aller à Boston.",
    fill: "avion",
    vfQ: "Le monsieur voyage en avion.",
    vfC: 0,
  }),
]);

const TR_190 = `- Pardon monsieur, je ne trouve pas ma valise sur le tapis 4.
- Votre numéro de vol est le KL173 ?
- Oui. Je viens d'Amsterdam.
- Tous les bagages sont ici. Vous devez aller au service bagages.`;

const POOL_190 = buildExpressPool("e6-3-190", [
  q({
    id: "190-q1",
    textQ: "Que cherche le voyageur ?",
    text: ["Sa valise", "Son passeport", "Son téléphone"],
    textC: 0,
    img: ["preparer-valise-vacances", "renouveler-passeport", "téléphone"],
    imgC: 0,
    fillQ: "Je ne trouve pas ma _________ sur le tapis 4.",
    fill: "valise",
    vfQ: "Le voyageur ne trouve pas sa valise.",
    vfC: 0,
  }),
  q({
    id: "190-q2",
    textQ: "Sur quel tapis le voyageur cherche-t-il sa valise ?",
    text: ["Le tapis 4", "Le tapis 14", "Le tapis 3"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Ma valise n'est pas sur le tapis numéro _________.",
    fill: "4",
    fillA: ["quatre"],
    vfQ: "Le voyageur attend sa valise sur le tapis 3.",
    vfC: 1,
  }),
  q({
    id: "190-q3",
    textQ: "Où le voyageur doit-il aller ?",
    text: ["Au service bagages", "À la porte d'embarquement", "Au comptoir d'enregistrement"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Vous devez aller au service _________.",
    fill: "bagages",
    vfQ: "Le voyageur doit aller au service bagages.",
    vfC: 0,
  }),
  q({
    id: "190-q4",
    textQ: "Quel vol le voyageur a-t-il pris ?",
    text: ["Le KL173", "Le KL137", "Le AF173"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Votre numéro de vol est le _________ ?",
    fill: "KL173",
    fillA: ["kl173", "kl 173"],
    vfQ: "Le vol KL173 vient d'Amsterdam.",
    vfC: 0,
  }),
  q({
    id: "190-q5",
    textQ: "Est-ce que tous les bagages du vol sont arrivés ?",
    text: ["Oui, tous les bagages sont là", "Non, il en manque encore", "L'employé ne sait pas"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ les bagages sont ici.",
    fill: "Tous",
    fillA: ["tous"],
    vfQ: "La couleur de la valise est mentionnée dans le dialogue.",
    vfC: 2,
  }),
]);

const TR_191 = `- Chloé, tu as déjà ta carte d'embarquement ?
- Non, je dois aller au comptoir d'enregistrement. J'ai deux valises à enregistrer.
- Tu dois arriver à l'aéroport 2 heures avant le départ alors !`;

const POOL_191 = buildExpressPool("e6-3-191", [
  q({
    id: "191-q1",
    textQ: "Est-ce que Chloé a déjà sa carte d'embarquement ?",
    text: ["Non, pas encore", "Oui, sur son téléphone", "Oui, en papier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Tu as déjà ta carte d'_________ ?",
    fill: "embarquement",
    vfQ: "Chloé a déjà sa carte d'embarquement.",
    vfC: 1,
  }),
  q({
    id: "191-q2",
    textQ: "Où Chloé doit-elle aller ?",
    text: ["Au comptoir d'enregistrement", "À la porte d'embarquement", "Au contrôle des passeports"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je dois aller au _________ d'enregistrement.",
    fill: "comptoir",
    vfQ: "L'heure du vol de Chloé est mentionnée dans le dialogue.",
    vfC: 2,
  }),
  q({
    id: "191-q3",
    textQ: "Combien de valises Chloé doit-elle enregistrer ?",
    text: ["Deux", "Une", "Trois"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'ai _________ valises à enregistrer.",
    fill: "deux",
    fillA: ["2"],
    vfQ: "Chloé a une seule valise à enregistrer.",
    vfC: 1,
  }),
  q({
    id: "191-q4",
    textQ: "Combien de temps avant le départ Chloé doit-elle arriver ?",
    text: ["2 heures", "1 heure", "30 minutes"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Tu dois arriver à l'_________ 2 heures avant le départ.",
    fill: "aéroport",
    fillA: ["aeroport"],
    vfQ: "Chloé doit arriver 2 heures avant le départ.",
    vfC: 0,
  }),
  q({
    id: "191-q5",
    textQ: "Comment Chloé part-elle en voyage ?",
    text: ["En avion", "En train", "En bus"],
    textC: 0,
    img: ["avion", "train", "bus"],
    imgC: 0,
    fillQ: "Chloé part en voyage en _________.",
    fill: "avion",
    vfQ: "Chloé voyage en avion.",
    vfC: 0,
  }),
]);

const TR_192 = `- Bonjour, votre passeport et votre carte d'embarquement s'il vous plaît.
- Voilà.
- C'est votre bagage monsieur ? Vous avez un ordinateur dans le sac ?
- Non, mon ordinateur est ici, avec ma trousse de toilette.
- C'est votre valise monsieur ? Vous pouvez l'ouvrir s'il vous plaît !
- Oui, bien sûr.
- C'est une bouteille d'eau ? C'est interdit, vous savez ?
- Ah oui, désolé !
- Très bien. Je vous souhaite un bon vol monsieur`;

const POOL_192 = buildExpressPool("e6-3-192", [
  q({
    id: "192-q1",
    textQ: "Quels documents l'agent demande-t-il ?",
    text: ["Le passeport et la carte d'embarquement", "Le billet et le visa", "La carte d'identité seulement"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Votre passeport et votre carte d'_________ s'il vous plaît.",
    fill: "embarquement",
    vfQ: "L'agent demande le passeport et la carte d'embarquement.",
    vfC: 0,
  }),
  q({
    id: "192-q2",
    textQ: "Où est l'ordinateur du monsieur ?",
    text: ["Avec sa trousse de toilette", "Dans le sac", "Dans la poche de sa veste"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Mon _________ est ici, avec ma trousse de toilette.",
    fill: "ordinateur",
    vfQ: "L'ordinateur du monsieur est dans le sac.",
    vfC: 1,
  }),
  q({
    id: "192-q3",
    textQ: "Que doit faire le monsieur avec sa valise ?",
    text: ["L'ouvrir", "La fermer", "La peser"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est votre valise ? Vous pouvez l'_________ s'il vous plaît !",
    fill: "ouvrir",
    vfQ: "Le monsieur doit ouvrir sa valise.",
    vfC: 0,
  }),
  q({
    id: "192-q4",
    textQ: "Qu'est-ce qui est interdit dans la valise ?",
    text: ["Une bouteille d'eau", "Un ordinateur", "Un téléphone"],
    textC: 0,
    img: ["bouteille", "ordinateur", "téléphone"],
    imgC: 0,
    fillQ: "C'est une _________ d'eau ? C'est interdit !",
    fill: "bouteille",
    vfQ: "La bouteille d'eau est interdite.",
    vfC: 0,
  }),
  q({
    id: "192-q5",
    textQ: "Comment réagit le monsieur pour la bouteille d'eau ?",
    text: ["Il s'excuse", "Il se fâche", "Il ne répond pas"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Ah oui, _________ !",
    fill: "désolé",
    fillA: ["desole", "désolée", "desolee"],
    vfQ: "Le monsieur se fâche contre l'agent.",
    vfC: 1,
  }),
  q({
    id: "192-q6",
    textQ: "Que dit l'agent à la fin du contrôle ?",
    text: ["Je vous souhaite un bon vol", "Au revoir et à bientôt", "Bonne journée monsieur"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je vous souhaite un bon _________ monsieur.",
    fill: "vol",
    vfQ: "La destination du monsieur est mentionnée dans le dialogue.",
    vfC: 2,
  }),
]);

export const E6_3_TRAINING: ExpressListeningAudio[] = [
{
  id: "e6-3-182",
  audioSrc: A1(182),
  audioLabel: "Audio 182",
  transcript: TR_182,
  instruction: "Écoutez l'enregistrement et répondez aux questions.",
  pool: POOL_182,
  questionCount: 3,
},
{
  id: "e6-3-188",
  audioSrc: A1(188),
  audioLabel: "Audio 188",
  transcript: TR_188,
  instruction: "Écoutez l'enregistrement et répondez aux questions.",
  pool: POOL_188,
  questionCount: 3,
},
{
  id: "e6-3-189",
  audioSrc: A1(189),
  audioLabel: "Audio 189",
  transcript: TR_189,
  instruction: "Écoutez l'enregistrement et répondez aux questions.",
  pool: POOL_189,
  questionCount: 3,
},
{
  id: "e6-3-190",
  audioSrc: A1(190),
  audioLabel: "Audio 190",
  transcript: TR_190,
  instruction: "Écoutez l'enregistrement et répondez aux questions.",
  pool: POOL_190,
  questionCount: 3,
}
];

export const E6_3_EVAL: ExpressListeningAudio[] = [
{
  id: "e6-3-191",
  audioSrc: A1(191),
  audioLabel: "Audio 191",
  transcript: TR_191,
  instruction: "Écoutez l'enregistrement et répondez aux questions.",
  pool: POOL_191,
  questionCount: 3,
},
{
  id: "e6-3-192",
  audioSrc: A1(192),
  audioLabel: "Audio 192",
  transcript: TR_192,
  instruction: "Écoutez l'enregistrement et répondez aux questions.",
  pool: POOL_192,
  questionCount: 3,
}
];
