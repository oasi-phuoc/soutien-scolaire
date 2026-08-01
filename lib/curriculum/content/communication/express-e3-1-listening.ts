import { buildExpressPool, type ExpressRawQ } from "./express-listening-helpers";
import type { ExpressListeningAudio } from "./express-e1-1-listening";
import { A1 } from "./express-lesson-factory";

function q(item: ExpressRawQ): ExpressRawQ { return item; }

const TR_072 = `- Bonjour monsieur, je suis une nouvelle étudiante.
- Bonjour. Vous vous appelez comment ?
- Je m'appelle Yoko Sumida.
- Vous avez votre carte d'étudiant ?
- Non, c'est quoi ?
- C'est la carte pour entrer à la faculté, vous inscrire à la bibliothèque…
- Ah oui, j'ai le formulaire de demande !
- Très bien.
- Et… excusez-moi, je cherche le cours d'économie. Où est la salle, s'il vous plaît ?
- Aujourd'hui, le cours a lieu dans l'amphi A12. Venez chercher votre carte demain à 10 heures.
- Merci ! Je peux venir plus tard ?
- Vous pouvez venir quand ?
- Demain, je commence à 9 heures et je finis à 11 heures.
- Venez à 11 heures alors !`;

const POOL_072 = buildExpressPool("e3-1-072", [
  q({
    id: "072-q1",
    textQ: "Qui parle avec l'employé de la faculté ?",
    text: ["Une nouvelle étudiante", "Un professeur", "Une secrétaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Bonjour monsieur, je suis une nouvelle _________.",
    fill: "étudiante",
    fillA: ["etudiante"],
    vfQ: "La jeune femme est une nouvelle étudiante.",
    vfC: 0,
  }),
  q({
    id: "072-q2",
    textQ: "Est-ce que l'étudiante a déjà sa carte d'étudiant ?",
    text: ["Non, pas encore", "Oui, elle l'a déjà", "Oui, mais elle l'a perdue"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'étudiante a le _________ de demande.",
    fill: "formulaire",
    vfQ: "L'étudiante a déjà sa carte d'étudiant.",
    vfC: 1,
  }),
  q({
    id: "072-q3",
    textQ: "Où peut-on s'inscrire avec la carte d'étudiant ?",
    text: ["À la bibliothèque", "À la piscine", "Au gymnase"],
    textC: 0,
    img: ["bibliothèque", "piscine", "gymnase"],
    imgC: 0,
    fillQ: "La carte sert à entrer à la faculté et à s'inscrire à la _________.",
    fill: "bibliothèque",
    fillA: ["bibliotheque"],
    vfQ: "La carte d'étudiant permet de s'inscrire à la bibliothèque.",
    vfC: 0,
  }),
  q({
    id: "072-q4",
    textQ: "Quel cours l'étudiante cherche-t-elle ?",
    text: ["Le cours d'économie", "Le cours d'histoire", "Le cours d'anglais"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Excusez-moi, je cherche le cours d'_________.",
    fill: "économie",
    fillA: ["economie"],
    vfQ: "L'étudiante cherche le cours d'histoire.",
    vfC: 1,
  }),
  q({
    id: "072-q5",
    textQ: "Où a lieu le cours aujourd'hui ?",
    text: ["Dans l'amphi A12", "Dans l'amphi B12", "À la bibliothèque"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Aujourd'hui, le cours a lieu dans l'_________ A12.",
    fill: "amphi",
    vfQ: "Le professeur d'économie est absent aujourd'hui.",
    vfC: 2,
  }),
  q({
    id: "072-q6",
    textQ: "À quelle heure l'étudiante viendra-t-elle chercher sa carte ?",
    text: ["À 11 heures", "À 10 heures", "À 9 heures"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Demain, je commence à 9 heures et je finis à _________ heures.",
    fill: "onze",
    fillA: ["11"],
    vfQ: "L'étudiante viendra chercher sa carte à 11 heures.",
    vfC: 0,
  }),
]);

const TR_078 = `En France, il y a beaucoup d'étudiants étrangers. Ils viennent de 196 pays différents. Deux facultés sont très populaires : les lettres et les sciences.`;

const POOL_078 = buildExpressPool("e3-1-078", [
  q({
    id: "078-q1",
    textQ: "Où y a-t-il beaucoup d'étudiants étrangers ?",
    text: ["En France", "En Belgique", "En Suisse"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "En France, il y a beaucoup d'étudiants _________.",
    fill: "étrangers",
    fillA: ["etrangers"],
    vfQ: "Il y a beaucoup d'étudiants étrangers en France.",
    vfC: 0,
  }),
  q({
    id: "078-q2",
    textQ: "De combien de pays différents viennent les étudiants ?",
    text: ["196", "96", "169"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Ils viennent de _________ pays différents.",
    fill: "196",
    fillA: ["cent quatre-vingt-seize"],
    vfQ: "Les étudiants viennent de 96 pays différents.",
    vfC: 1,
  }),
  q({
    id: "078-q3",
    textQ: "Combien de facultés sont très populaires ?",
    text: ["Deux", "Trois", "Cinq"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ facultés sont très populaires.",
    fill: "deux",
    fillA: ["2"],
    vfQ: "Quatre facultés sont très populaires.",
    vfC: 1,
  }),
  q({
    id: "078-q4",
    textQ: "Quelles facultés sont très populaires ?",
    text: ["Les lettres et les sciences", "Le droit et la médecine", "L'histoire et le sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Deux facultés sont très populaires : les lettres et les _________.",
    fill: "sciences",
    vfQ: "Les facultés de lettres et de sciences sont très populaires.",
    vfC: 0,
  }),
  q({
    id: "078-q5",
    textQ: "Est-ce qu'il y a beaucoup d'étudiants étrangers en France ?",
    text: ["Oui, beaucoup", "Non, très peu", "Il n'y en a pas"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "En France, il y a _________ d'étudiants étrangers.",
    fill: "beaucoup",
    vfQ: "Le prix des études en France est mentionné dans l'audio.",
    vfC: 2,
  }),
]);

const TR_079 = `Maman, je commence la fac lundi et j'ai déjà un TD et un TP. Mardi, le CM est à 8 heures ! Mercredi, j'ai une évaluation le matin et je finis les cours à 20 heures !`;

const POOL_079 = buildExpressPool("e3-1-079", [
  q({
    id: "079-q1",
    textQ: "À qui parle la personne ?",
    text: ["À sa mère", "À son professeur", "À sa sœur"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La personne qui parle s'adresse à sa _________.",
    fill: "mère",
    fillA: ["mere", "maman"],
    vfQ: "La personne parle à sa mère.",
    vfC: 0,
  }),
  q({
    id: "079-q2",
    textQ: "Quel jour commence la fac ?",
    text: ["Lundi", "Mardi", "Mercredi"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je commence la fac _________.",
    fill: "lundi",
    vfQ: "La fac commence mercredi.",
    vfC: 1,
  }),
  q({
    id: "079-q3",
    textQ: "Qu'est-ce que la personne a déjà lundi ?",
    text: ["Un TD et un TP", "Deux CM", "Une évaluation"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'ai déjà un TD et un _________.",
    fill: "TP",
    vfQ: "L'étudiant a aussi cours le jeudi.",
    vfC: 2,
  }),
  q({
    id: "079-q4",
    textQ: "À quelle heure est le CM de mardi ?",
    text: ["À 8 heures", "À 9 heures", "À 10 heures"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Mardi, le CM est à _________ heures.",
    fill: "huit",
    fillA: ["8"],
    vfQ: "Le CM de mardi est à 10 heures.",
    vfC: 1,
  }),
  q({
    id: "079-q5",
    textQ: "Quand a lieu l'évaluation de mercredi ?",
    text: ["Le matin", "L'après-midi", "Le soir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Mercredi, j'ai une évaluation le _________.",
    fill: "matin",
    vfQ: "L'évaluation de mercredi a lieu le matin.",
    vfC: 0,
  }),
  q({
    id: "079-q6",
    textQ: "À quelle heure finissent les cours mercredi ?",
    text: ["À 20 heures", "À 18 heures", "À 16 heures"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Mercredi, je finis les cours à _________ heures.",
    fill: "vingt",
    fillA: ["20"],
    vfQ: "Mercredi, les cours finissent à 20 heures.",
    vfC: 0,
  }),
]);

const TR_080 = `Inscrivez-vous à l'association des étudiants de la fac des lettres. Nous aidons les étudiants à réussir les examens, nous organisons des révisions à la bibliothèque. Et après, nous organisons des fêtes !`;

const POOL_080 = buildExpressPool("e3-1-080", [
  q({
    id: "080-q1",
    textQ: "Qu'est-ce que cette annonce propose ?",
    text: ["De s'inscrire à une association d'étudiants", "D'acheter des livres", "De visiter un musée"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Inscrivez-vous à l'_________ des étudiants.",
    fill: "association",
    vfQ: "L'annonce invite à s'inscrire à une association d'étudiants.",
    vfC: 0,
  }),
  q({
    id: "080-q2",
    textQ: "De quelle faculté vient l'association ?",
    text: ["De la fac des lettres", "De la fac de sciences", "De la fac de droit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est l'association des étudiants de la fac des _________.",
    fill: "lettres",
    vfQ: "C'est l'association de la fac de sciences.",
    vfC: 1,
  }),
  q({
    id: "080-q3",
    textQ: "À quoi l'association aide-t-elle les étudiants ?",
    text: ["À réussir les examens", "À trouver un logement", "À payer leurs études"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Nous aidons les étudiants à réussir les _________.",
    fill: "examens",
    vfQ: "L'association n'aide pas les étudiants pour les examens.",
    vfC: 1,
  }),
  q({
    id: "080-q4",
    textQ: "Où l'association organise-t-elle des révisions ?",
    text: ["À la bibliothèque", "Au gymnase", "Au restaurant"],
    textC: 0,
    img: ["bibliothèque", "gymnase", "restaurant"],
    imgC: 0,
    fillQ: "Nous organisons des révisions à la _________.",
    fill: "bibliothèque",
    fillA: ["bibliotheque"],
    vfQ: "Les révisions ont lieu à la bibliothèque.",
    vfC: 0,
  }),
  q({
    id: "080-q5",
    textQ: "Qu'est-ce que l'association organise après les révisions ?",
    text: ["Des fêtes", "Des voyages", "Des compétitions sportives"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Et après, nous organisons des _________ !",
    fill: "fêtes",
    fillA: ["fetes"],
    vfQ: "Le prix de l'inscription à l'association est indiqué.",
    vfC: 2,
  }),
]);

const TR_081 = `- Salut, je cherche le bureau du professeur Martin. Il est où ? Tu peux m'aider ?
- Euh… non désolé, je suis nouveau à la fac. Demande au secrétariat.`;

const POOL_081 = buildExpressPool("e3-1-081", [
  q({
    id: "081-q1",
    textQ: "Que cherche le premier étudiant ?",
    text: ["Le bureau d'un professeur", "La bibliothèque", "La cafétéria"],
    textC: 0,
    img: ["bureau", "bibliothèque", "cafétéria"],
    imgC: 0,
    fillQ: "Je cherche le _________ du professeur Martin.",
    fill: "bureau",
    vfQ: "L'étudiant cherche le bureau d'un professeur.",
    vfC: 0,
  }),
  q({
    id: "081-q2",
    textQ: "Est-ce que le deuxième étudiant peut aider ?",
    text: ["Non, il ne sait pas", "Oui, tout de suite", "Oui, mais plus tard"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Euh… non _________, je suis nouveau à la fac.",
    fill: "désolé",
    fillA: ["desole"],
    vfQ: "Le deuxième étudiant connaît le bureau du professeur.",
    vfC: 1,
  }),
  q({
    id: "081-q3",
    textQ: "Pourquoi le deuxième étudiant ne peut-il pas aider ?",
    text: ["Il est nouveau à la fac", "Il est en retard", "Il n'a pas le temps"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je suis _________ à la fac.",
    fill: "nouveau",
    vfQ: "Le deuxième étudiant est nouveau à la fac.",
    vfC: 0,
  }),
  q({
    id: "081-q4",
    textQ: "Où faut-il demander pour trouver le bureau ?",
    text: ["Au secrétariat", "À l'accueil", "À la bibliothèque"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Demande au _________.",
    fill: "secrétariat",
    fillA: ["secretariat"],
    vfQ: "Il faut demander à la bibliothèque.",
    vfC: 1,
  }),
  q({
    id: "081-q5",
    textQ: "Comment les deux étudiants se saluent-ils ?",
    text: ["Ils disent « salut »", "Ils disent « bonjour monsieur »", "Ils disent « bonsoir »"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________, je cherche le bureau du professeur Martin.",
    fill: "salut",
    vfQ: "Le bureau du professeur Martin est au premier étage.",
    vfC: 2,
  }),
]);

const TR_082 = `- Bonjour madame Racine. Je peux entrer ?
- Oui, bonjour.
- Madame, ma note d'écrit est mauvaise. Nous avons encore un examen ?
- Vous avez encore deux écrits et un oral.
- L'oral, c'est quoi ?
- C'est une présentation devant la classe.
- Comment je peux réussir l'examen ?
- Et bien, pour commencer, venez au cours d'expression orale vendredi.
- Le cours commence à quelle heure ?
- À 13 heures, dans la salle 613.
- D'accord, merci beaucoup madame. À vendredi.
- À vendredi.`;

const POOL_082 = buildExpressPool("e3-1-082", [
  q({
    id: "082-q1",
    textQ: "Pourquoi l'étudiant vient-il voir madame Racine ?",
    text: ["Sa note d'écrit est mauvaise", "Il veut changer de classe", "Il est malade"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Madame, ma note d'écrit est _________.",
    fill: "mauvaise",
    vfQ: "L'étudiant a une bonne note à l'écrit.",
    vfC: 1,
  }),
  q({
    id: "082-q2",
    textQ: "Combien d'examens reste-t-il ?",
    text: ["Deux écrits et un oral", "Un écrit et deux oraux", "Trois écrits"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Vous avez encore deux écrits et un _________.",
    fill: "oral",
    vfQ: "Il reste deux écrits et un oral.",
    vfC: 0,
  }),
  q({
    id: "082-q3",
    textQ: "Qu'est-ce que l'oral ?",
    text: ["Une présentation devant la classe", "Un examen écrit", "Une discussion avec le directeur"],
    textC: 0,
    img: ["classe", "examen", "réunion"],
    imgC: 0,
    fillQ: "C'est une _________ devant la classe.",
    fill: "présentation",
    fillA: ["presentation"],
    vfQ: "L'oral est une présentation devant la classe.",
    vfC: 0,
  }),
  q({
    id: "082-q4",
    textQ: "Quel jour a lieu le cours d'expression orale ?",
    text: ["Vendredi", "Mercredi", "Lundi"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Venez au cours d'expression orale _________.",
    fill: "vendredi",
    vfQ: "Le cours d'expression orale a lieu lundi.",
    vfC: 1,
  }),
  q({
    id: "082-q5",
    textQ: "À quelle heure commence le cours ?",
    text: ["À 13 heures", "À 15 heures", "À 9 heures"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le cours commence à _________ heures, dans la salle 613.",
    fill: "treize",
    fillA: ["13"],
    vfQ: "Le cours commence à 13 heures.",
    vfC: 0,
  }),
  q({
    id: "082-q6",
    textQ: "Dans quelle salle a lieu le cours ?",
    text: ["Dans la salle 613", "Dans la salle 316", "Dans la salle 136"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À 13 heures, dans la salle _________.",
    fill: "613",
    vfQ: "La salle 613 est au deuxième étage.",
    vfC: 2,
  }),
]);

export const E3_1_TRAINING: ExpressListeningAudio[] = [
{
  id: "e3-1-072",
  audioSrc: A1(72),
  audioLabel: "Audio 072",
  transcript: TR_072,
  instruction: "Écoutez l'enregistrement et répondez aux questions.",
  pool: POOL_072,
  questionCount: 5,
},
{
  id: "e3-1-078",
  audioSrc: A1(78),
  audioLabel: "Audio 078",
  transcript: TR_078,
  instruction: "Écoutez l'enregistrement et répondez aux questions.",
  pool: POOL_078,
  questionCount: 5,
},
{
  id: "e3-1-079",
  audioSrc: A1(79),
  audioLabel: "Audio 079",
  transcript: TR_079,
  instruction: "Écoutez l'enregistrement et répondez aux questions.",
  pool: POOL_079,
  questionCount: 5,
},
{
  id: "e3-1-080",
  audioSrc: A1(80),
  audioLabel: "Audio 080",
  transcript: TR_080,
  instruction: "Écoutez l'enregistrement et répondez aux questions.",
  pool: POOL_080,
  questionCount: 5,
}
];

export const E3_1_EVAL: ExpressListeningAudio[] = [
{
  id: "e3-1-081",
  audioSrc: A1(81),
  audioLabel: "Audio 081",
  transcript: TR_081,
  instruction: "Écoutez l'enregistrement et répondez aux questions.",
  pool: POOL_081,
  questionCount: 5,
},
{
  id: "e3-1-082",
  audioSrc: A1(82),
  audioLabel: "Audio 082",
  transcript: TR_082,
  instruction: "Écoutez l'enregistrement et répondez aux questions.",
  pool: POOL_082,
  questionCount: 5,
}
];
