import { buildExpressPool, type ExpressRawQ } from "./express-listening-helpers";
import type { ExpressListeningAudio } from "./express-e1-1-listening";
import { A1 } from "./express-lesson-factory";

function q(item: ExpressRawQ): ExpressRawQ { return item; }

const TR_061 = `- Bonjour monsieur !
- Bonjour madame, vous êtes nouvelle dans l'immeuble, non ?
- Oui… je suis votre nouvelle voisine.
- Est-ce que votre nom est déjà sur la boîte aux lettres ?
- Oui, regardez… Catherine Sol.
- Bienvenue ! C'est un immeuble calme…
- Oui, j'ai un chien, mais il ne fait pas de bruit.
- Très bien, mais vous le tenez en laisse ?
- Bien sûr… Et j'ai une question : on peut ranger les vélos où ?
- Il y a un local à vélos à côté du garage.
- Merci ! Et il y a un règlement pour l'immeuble ?
- Oui, regardez, dans le hall d'entrée, et il y a un mot dans l'ascenseur.
- Merci, à bientôt !`;

const POOL_061 = buildExpressPool("e2-3-061", [
  q({
    id: "061-q1",
    textQ: "Qui est la dame dans le dialogue ?",
    text: ["La nouvelle voisine", "La gardienne de l'immeuble", "La factrice"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je suis votre nouvelle _________.",
    fill: "voisine",
    vfQ: "La dame est une nouvelle voisine.",
    vfC: 0,
  }),
  q({
    id: "061-q2",
    textQ: "Où est écrit le nom de la nouvelle voisine ?",
    text: ["Sur la boîte aux lettres", "Sur la porte de l'immeuble", "Dans l'ascenseur"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Votre nom est déjà sur la boîte aux _________ ?",
    fill: "lettres",
    vfQ: "Le nom de la voisine n'est pas encore sur la boîte aux lettres.",
    vfC: 1,
  }),
  q({
    id: "061-q3",
    textQ: "Quel animal a la nouvelle voisine ?",
    text: ["Un chien", "Un chat", "Un lapin"],
    textC: 0,
    img: ["chien", "chat", "lapin"],
    imgC: 0,
    fillQ: "J'ai un _________, mais il ne fait pas de bruit.",
    fill: "chien",
    vfQ: "La voisine a un chat.",
    vfC: 1,
  }),
  q({
    id: "061-q4",
    textQ: "Où peut-on ranger les vélos ?",
    text: ["Dans un local à côté du garage", "Dans le hall d'entrée", "Sur le balcon"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il y a un local à vélos à côté du _________.",
    fill: "garage",
    vfQ: "Le local à vélos est à côté du garage.",
    vfC: 0,
  }),
  q({
    id: "061-q5",
    textQ: "Où peut-on lire le règlement de l'immeuble ?",
    text: ["Dans le hall d'entrée", "Dans le garage", "Dans le local à vélos"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Regardez, dans le hall d'entrée, et il y a un mot dans l'_________.",
    fill: "ascenseur",
    vfQ: "Il y a un mot sur le règlement dans l'ascenseur.",
    vfC: 0,
  }),
  q({
    id: "061-q6",
    textQ: "Comment est l'immeuble ?",
    text: ["Calme", "Bruyant", "Sale"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Bienvenue ! C'est un immeuble _________.",
    fill: "calme",
    vfQ: "L'étage de la nouvelle voisine est mentionné dans le dialogue.",
    vfC: 2,
  }),
  q({
    id: "061-q7",
    textQ: "Est-ce que la voisine tient son chien en laisse ?",
    text: ["Oui, bien sûr", "Non, jamais", "Elle n'a pas de chien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Très bien, mais vous le tenez en _________ ?",
    fill: "laisse",
    vfQ: "Le chien de la voisine fait beaucoup de bruit.",
    vfC: 1,
  }),
]);

const TR_067 = `1. Tenez les chiens en laisse.
2. Ne fumez pas dans les couloirs.
3. Rangez les vélos dans le local.
4. Mettez votre nom sur la boîte aux lettres.
5. Ne faites pas de bruit après 22 heures.`;

const POOL_067 = buildExpressPool("e2-3-067", [
  q({
    id: "067-q1",
    textQ: "Que faut-il faire avec les chiens ?",
    text: ["Les tenir en laisse", "Les laisser dans le couloir", "Les promener sans laisse"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Tenez les chiens en _________.",
    fill: "laisse",
    vfQ: "Il faut tenir les chiens en laisse.",
    vfC: 0,
  }),
  q({
    id: "067-q2",
    textQ: "Où est-il interdit de fumer ?",
    text: ["Dans les couloirs", "Sur les balcons", "Dans les appartements"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Ne fumez pas dans les _________.",
    fill: "couloirs",
    vfQ: "On peut fumer dans les couloirs.",
    vfC: 1,
  }),
  q({
    id: "067-q3",
    textQ: "Quel objet faut-il ranger dans le local ?",
    text: ["Le vélo", "La poubelle", "La voiture"],
    textC: 0,
    img: ["vélo", "poubelle", "voiture"],
    imgC: 0,
    fillQ: "Rangez les _________ dans le local.",
    fill: "vélos",
    fillA: ["velos"],
    vfQ: "Les vélos se rangent dans le local.",
    vfC: 0,
  }),
  q({
    id: "067-q4",
    textQ: "Où faut-il mettre son nom ?",
    text: ["Sur la boîte aux lettres", "Sur la porte du garage", "Dans l'ascenseur"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Mettez votre nom sur la boîte aux _________.",
    fill: "lettres",
    vfQ: "Il faut mettre son nom sur la porte du garage.",
    vfC: 1,
  }),
  q({
    id: "067-q5",
    textQ: "Après quelle heure ne faut-il pas faire de bruit ?",
    text: ["Après 22 heures", "Après 20 heures", "Après minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Ne faites pas de bruit après _________ heures.",
    fill: "22",
    fillA: ["vingt-deux", "vingt deux"],
    vfQ: "On peut faire du bruit toute la nuit.",
    vfC: 1,
  }),
  q({
    id: "067-q6",
    textQ: "Combien de règles ce règlement donne-t-il ?",
    text: ["Cinq", "Trois", "Dix"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Ce règlement donne _________ règles.",
    fill: "cinq",
    fillA: ["5"],
    vfQ: "Les horaires d'ouverture du local à vélos sont donnés.",
    vfC: 2,
  }),
]);

const TR_068 = `Bonjour madame Signoret, c'est monsieur Blanc. Votre poubelle est dans le couloir et c'est sale. Vous ne respectez pas le règlement. Les ordures, c'est dans le local à poubelles. Merci.`;

const POOL_068 = buildExpressPool("e2-3-068", [
  q({
    id: "068-q1",
    textQ: "Quel objet est dans le couloir ?",
    text: ["Une poubelle", "Un vélo", "Un chien"],
    textC: 0,
    img: ["poubelle", "vélo", "chien"],
    imgC: 0,
    fillQ: "Votre _________ est dans le couloir.",
    fill: "poubelle",
    vfQ: "La poubelle de madame Signoret est dans le couloir.",
    vfC: 0,
  }),
  q({
    id: "068-q2",
    textQ: "Comment est le couloir à cause de la poubelle ?",
    text: ["Sale", "Propre", "Sombre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Votre poubelle est dans le couloir et c'est _________.",
    fill: "sale",
    vfQ: "Le couloir est propre.",
    vfC: 1,
  }),
  q({
    id: "068-q3",
    textQ: "Que ne respecte pas madame Signoret ?",
    text: ["Le règlement", "Les voisins", "Les horaires"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Vous ne respectez pas le _________.",
    fill: "règlement",
    fillA: ["reglement"],
    vfQ: "Madame Signoret respecte le règlement.",
    vfC: 1,
  }),
  q({
    id: "068-q4",
    textQ: "Où faut-il mettre les ordures ?",
    text: ["Dans le local à poubelles", "Dans le couloir", "Dans le jardin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les ordures, c'est dans le local à _________.",
    fill: "poubelles",
    vfQ: "Les ordures vont dans le local à poubelles.",
    vfC: 0,
  }),
  q({
    id: "068-q5",
    textQ: "À qui monsieur Blanc parle-t-il ?",
    text: ["À une voisine", "À sa fille", "À la gardienne"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Bonjour _________ Signoret, c'est monsieur Blanc.",
    fill: "madame",
    vfQ: "L'étage de madame Signoret est mentionné dans le message.",
    vfC: 2,
  }),
]);

const TR_069 = `- Allo Manon, c'est Flo…
- Ça va ?
- Non… mon voisin n'est pas content… J'écoute la musique trop fort et je fais du bruit !
- Et alors ?
- Alors je ne respecte pas le règlement et le calme...`;

const POOL_069 = buildExpressPool("e2-3-069", [
  q({
    id: "069-q1",
    textQ: "Pourquoi le voisin de Flo n'est-il pas content ?",
    text: ["Elle écoute la musique trop fort", "Elle a un chien méchant", "Elle fume dans le couloir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'écoute la _________ trop fort.",
    fill: "musique",
    vfQ: "Flo écoute la musique trop fort.",
    vfC: 0,
  }),
  q({
    id: "069-q2",
    textQ: "Qu'est-ce que Flo ne respecte pas ?",
    text: ["Le règlement et le calme", "Les horaires du garage", "Le local à vélos"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je ne respecte pas le règlement et le _________.",
    fill: "calme",
    vfQ: "Flo respecte le règlement de l'immeuble.",
    vfC: 1,
  }),
  q({
    id: "069-q3",
    textQ: "Comment va Flo ?",
    text: ["Pas très bien", "Très bien", "Super bien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Ça va ? — _________…",
    fill: "non",
    vfQ: "Flo va très bien.",
    vfC: 1,
  }),
  q({
    id: "069-q4",
    textQ: "Comment Flo parle-t-elle à Manon ?",
    text: ["Au téléphone", "Devant la maison", "À l'école"],
    textC: 0,
    img: ["téléphone", "maison", "cartable"],
    imgC: 0,
    fillQ: "_________ Manon, c'est Flo…",
    fill: "allo",
    fillA: ["allô"],
    vfQ: "Flo et Manon parlent au téléphone.",
    vfC: 0,
  }),
  q({
    id: "069-q5",
    textQ: "Qui n'est pas content ?",
    text: ["Le voisin de Flo", "La mère de Flo", "Le professeur de Flo"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Mon _________ n'est pas content…",
    fill: "voisin",
    vfQ: "Le nom du voisin de Flo est mentionné dans le dialogue.",
    vfC: 2,
  }),
]);

const TR_070 = `Mon immeuble est très propre. J'ai des voisins calmes, ils ne fument pas et tiennent leurs chiens en laisse. Et puis, ils sont très gentils et nous parlons souvent devant les boîtes aux lettres.`;

const POOL_070 = buildExpressPool("e2-3-070", [
  q({
    id: "070-q1",
    textQ: "Comment est l'immeuble ?",
    text: ["Très propre", "Très sale", "Très vieux"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Mon immeuble est très _________.",
    fill: "propre",
    vfQ: "L'immeuble est sale.",
    vfC: 1,
  }),
  q({
    id: "070-q2",
    textQ: "Comment sont les voisins ?",
    text: ["Calmes et gentils", "Bruyants et méchants", "Absents et tristes"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'ai des voisins _________.",
    fill: "calmes",
    vfQ: "Les voisins sont très gentils.",
    vfC: 0,
  }),
  q({
    id: "070-q3",
    textQ: "Est-ce que les voisins fument ?",
    text: ["Non", "Oui, dans l'ascenseur", "Oui, dans le couloir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Ils ne _________ pas.",
    fill: "fument",
    vfQ: "Les voisins fument beaucoup.",
    vfC: 1,
  }),
  q({
    id: "070-q4",
    textQ: "Que font les voisins avec leurs chiens ?",
    text: ["Ils les tiennent en laisse", "Ils les laissent seuls", "Ils les promènent la nuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Ils tiennent leurs chiens en _________.",
    fill: "laisse",
    vfQ: "Les chiens des voisins sont tenus en laisse.",
    vfC: 0,
  }),
  q({
    id: "070-q5",
    textQ: "Où les voisins parlent-ils souvent ?",
    text: ["Devant les boîtes aux lettres", "Dans le garage", "Sur le parking"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Nous parlons souvent devant les boîtes aux _________.",
    fill: "lettres",
    vfQ: "Les voisins ne se parlent jamais.",
    vfC: 1,
  }),
  q({
    id: "070-q6",
    textQ: "Quel animal ont les voisins ?",
    text: ["Des chiens", "Des chats", "Des oiseaux"],
    textC: 0,
    img: ["chien", "chat", "oiseau"],
    imgC: 0,
    fillQ: "Les voisins ont des _________.",
    fill: "chiens",
    vfQ: "Le nombre d'étages de l'immeuble est mentionné.",
    vfC: 2,
  }),
]);

const TR_071 = `- Bonjour Monsieur Garant, vous allez bien ?
- Ça va, merci. Et vous ?
- Ça va, mais… il y a des vélos dans le hall et on ne peut plus passer !
- Ah bon ? Mais nous avons un local à vélos !
- Oui ! Et puis il y a aussi des bouteilles dans les escaliers.
- Mais nous avons un local à poubelles… et une poubelle pour le verre.
- Et il y a le chien de madame Martin… il n'est pas en laisse.
- Il est gros, mais il n'est pas méchant…
- Et puis, elle fume dans les couloirs !
- Ouh là là ! Et le règlement alors ? !`;

const POOL_071 = buildExpressPool("e2-3-071", [
  q({
    id: "071-q1",
    textQ: "Quel est le premier problème dans le hall ?",
    text: ["Des vélos empêchent de passer", "Des poubelles sentent mauvais", "Des enfants jouent au ballon"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il y a des _________ dans le hall et on ne peut plus passer !",
    fill: "vélos",
    fillA: ["velos"],
    vfQ: "Il y a des vélos dans le hall.",
    vfC: 0,
  }),
  q({
    id: "071-q2",
    textQ: "Où faut-il normalement ranger les vélos ?",
    text: ["Dans le local à vélos", "Dans le hall", "Dans les escaliers"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Mais nous avons un _________ à vélos !",
    fill: "local",
    vfQ: "Le local à vélos est à côté du garage.",
    vfC: 2,
  }),
  q({
    id: "071-q3",
    textQ: "Qu'est-ce qu'il y a dans les escaliers ?",
    text: ["Des bouteilles", "Des chaussures", "Des jouets"],
    textC: 0,
    img: ["bouteille", "chaussures", "jouet"],
    imgC: 0,
    fillQ: "Il y a aussi des _________ dans les escaliers.",
    fill: "bouteilles",
    vfQ: "Il y a des bouteilles dans l'ascenseur.",
    vfC: 1,
  }),
  q({
    id: "071-q4",
    textQ: "Où faut-il jeter les bouteilles en verre ?",
    text: ["Dans la poubelle pour le verre", "Dans les escaliers", "Dans le jardin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Nous avons une _________ pour le verre.",
    fill: "poubelle",
    vfQ: "Il n'y a pas de poubelle pour le verre dans l'immeuble.",
    vfC: 1,
  }),
  q({
    id: "071-q5",
    textQ: "Quel animal pose un problème dans l'immeuble ?",
    text: ["Un chien", "Un chat", "Un oiseau"],
    textC: 0,
    img: ["chien", "chat", "oiseau"],
    imgC: 0,
    fillQ: "Le chien de madame Martin n'est pas en _________.",
    fill: "laisse",
    vfQ: "Le chien de madame Martin est tenu en laisse.",
    vfC: 1,
  }),
  q({
    id: "071-q6",
    textQ: "Comment est le chien de madame Martin ?",
    text: ["Gros, mais pas méchant", "Petit et méchant", "Gros et très méchant"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il est _________, mais il n'est pas méchant…",
    fill: "gros",
    vfQ: "Le chien de madame Martin est gros.",
    vfC: 0,
  }),
  q({
    id: "071-q7",
    textQ: "Où madame Martin fume-t-elle ?",
    text: ["Dans les couloirs", "Sur son balcon", "Dans le garage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Et puis, elle _________ dans les couloirs !",
    fill: "fume",
    vfQ: "Madame Martin fume dans les couloirs.",
    vfC: 0,
  }),
]);

export const E2_3_TRAINING: ExpressListeningAudio[] = [
{
  id: "e2-3-061",
  audioSrc: A1(61),
  audioLabel: "Audio 061",
  transcript: TR_061,
  instruction: "Écoutez l'enregistrement et répondez aux questions.",
  pool: POOL_061,
  questionCount: 5,
},
{
  id: "e2-3-067",
  audioSrc: A1(67),
  audioLabel: "Audio 067",
  transcript: TR_067,
  instruction: "Écoutez l'enregistrement et répondez aux questions.",
  pool: POOL_067,
  questionCount: 5,
},
{
  id: "e2-3-068",
  audioSrc: A1(68),
  audioLabel: "Audio 068",
  transcript: TR_068,
  instruction: "Écoutez l'enregistrement et répondez aux questions.",
  pool: POOL_068,
  questionCount: 5,
},
{
  id: "e2-3-069",
  audioSrc: A1(69),
  audioLabel: "Audio 069",
  transcript: TR_069,
  instruction: "Écoutez l'enregistrement et répondez aux questions.",
  pool: POOL_069,
  questionCount: 5,
}
];

export const E2_3_EVAL: ExpressListeningAudio[] = [
{
  id: "e2-3-070",
  audioSrc: A1(70),
  audioLabel: "Audio 070",
  transcript: TR_070,
  instruction: "Écoutez l'enregistrement et répondez aux questions.",
  pool: POOL_070,
  questionCount: 5,
},
{
  id: "e2-3-071",
  audioSrc: A1(71),
  audioLabel: "Audio 071",
  transcript: TR_071,
  instruction: "Écoutez l'enregistrement et répondez aux questions.",
  pool: POOL_071,
  questionCount: 5,
}
];
