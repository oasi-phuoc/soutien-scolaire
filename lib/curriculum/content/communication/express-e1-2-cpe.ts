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

/* ── Compréhension écrite — E1.2 Parler de sa famille ── */

const CE_TEXT_1 = `SMS de maman

Lina, pense au pain pour ce soir.
Papa rentre tard du garage, il est mécanicien.
Ta sœur Zoé met la table avec moi.
Mamie dort ici ce week-end, dans la petite chambre.
Nous sommes cinq pour le dîner.
Après le repas, on appelle ton oncle à Lyon.
Bisous, maman`;

const CE_POOL_1 = buildExpressPool("e1-2-1", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit le SMS ?",
    text: ["Maman", "La sœur", "Le voisin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Bisous, _________",
    fill: "maman",
    vfQ: "La maman écrit le SMS.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quel métier fait papa ?",
    text: ["Mécanicien", "Vendeur", "Pilote"],
    textC: 0,
    img: ["mécanicien", "vendeur", "pilote"],
    imgC: 0,
    fillQ: "Papa est _________.",
    fill: "mécanicien",
    vfQ: "Papa est mécanicien.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Qui met la table ?",
    text: ["Zoé", "Mamie", "L'oncle"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Ta sœur _________ met la table.",
    fill: "Zoé",
    vfQ: "Zoé met la table.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Qui dort à la maison ce week-end ?",
    text: ["Mamie", "Le facteur", "La maîtresse"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ dort ici ce week-end.",
    fill: "Mamie",
    vfQ: "Mamie dort à la maison.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Combien de personnes dînent ?",
    text: ["Cinq", "Trois", "Huit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Nous sommes _________ pour le dîner.",
    fill: "cinq",
    vfQ: "Ils sont cinq pour le dîner.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Qui la famille appelle après le repas ?",
    text: ["L'oncle à Lyon", "Le médecin", "Une amie à Paris"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "On appelle ton _________ à Lyon.",
    fill: "oncle",
    vfQ: "La famille appelle l'oncle.",
    vfC: 0,
  }),
]);
const CE_TEXT_2 = `Carte postale de vacances

Chers cousins,
Ici, à Nice, la mer est bleue et le soleil est chaud.
Je suis avec mon père, ma mère et mon petit frère Noé.
Maman lit sous le parasol ; elle est infirmière et elle se repose.
Papa apprend à Noé à nager près du bord.
Nous envoyons une photo à grand-père ce soir.
Je vous embrasse, Clara`;

const CE_POOL_2 = buildExpressPool("e1-2-2", [
  q({
    id: "ce-q1",
    textQ: "Où est Clara ?",
    text: ["À Nice", "À Genève", "À Bruxelles"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Ici, à _________.",
    fill: "Nice",
    vfQ: "Clara est à Nice.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Avec qui Clara est-elle ?",
    text: ["Ses parents et Noé", "Ses voisins", "Sa professeure"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je suis avec mon père, ma mère et mon petit frère _________.",
    fill: "Noé",
    vfQ: "Clara est avec ses parents et son frère.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quelle est la profession de maman ?",
    text: ["Infirmière", "Coiffeuse", "Avocate"],
    textC: 0,
    img: ["infirmier", "coiffeuse", "avocat"],
    imgC: 0,
    fillQ: "Maman est _________.",
    fill: "infirmière",
    vfQ: "La maman est infirmière.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Que fait maman ?",
    text: ["Elle lit", "Elle cuisine", "Elle conduit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Maman _________ sous le parasol.",
    fill: "lit",
    vfQ: "Maman lit sous le parasol.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Que fait papa avec Noé ?",
    text: ["Il apprend à nager", "Il fait les courses", "Il dort"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Papa apprend à Noé à _________.",
    fill: "nager",
    vfQ: "Papa apprend à Noé à nager.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "À qui envoient-ils une photo ?",
    text: ["À grand-père", "Au dentiste", "Au directeur"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Nous envoyons une photo à _________.",
    fill: "grand-père",
    vfQ: "Ils envoient une photo à grand-père.",
    vfC: 0,
  }),
]);
const CE_TEXT_3 = `Journal intime — mardi

Aujourd'hui, j'ai dessiné mon arbre de famille.
En haut, j'ai écrit les noms de mes grands-parents.
Mon père s'appelle Karim ; il est boulanger et il se lève très tôt.
Ma mère, Sara, travaille à la bibliothèque.
Mon frère Sami a neuf ans et il pose beaucoup de questions.
Moi, je suis la grande sœur.
Je colle le dessin dans mon cahier de français.`;

const CE_POOL_3 = buildExpressPool("e1-2-3", [
  q({
    id: "ce-q1",
    textQ: "Que dessine la personne ?",
    text: ["Un arbre de famille", "Une carte de ville", "Un animal"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'ai dessiné mon arbre de _________.",
    fill: "famille",
    vfQ: "La personne dessine un arbre de famille.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Où sont les noms des grands-parents ?",
    text: ["En haut", "En bas", "Au dos"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________, j'ai écrit les noms.",
    fill: "En haut",
    vfQ: "Les noms sont en haut.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quelle est la profession du père ?",
    text: ["Boulanger", "Plombier", "Dentiste"],
    textC: 0,
    img: ["boulanger", "plombier", "dentiste"],
    imgC: 0,
    fillQ: "Il est _________.",
    fill: "boulanger",
    vfQ: "Le père est boulanger.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Comment s'appelle la mère ?",
    text: ["Sara", "Sofia", "Lina"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Ma mère, _________, travaille à la bibliothèque.",
    fill: "Sara",
    vfQ: "La mère s'appelle Sara.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quel âge a Sami ?",
    text: ["Neuf ans", "Six ans", "Douze ans"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Sami a _________ ans.",
    fill: "neuf",
    vfQ: "Sami a neuf ans.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Où va le dessin ?",
    text: ["Dans le cahier de français", "Sur la porte", "Dans la cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je colle le dessin dans mon _________.",
    fill: "cahier",
    vfQ: "Le dessin va dans le cahier.",
    vfC: 0,
  }),
]);
const CE_TEXT_4 = `Fiche scolaire — ma famille

Prénom : Amadou.
Je vis avec ma tante Awa depuis septembre.
Mes parents habitent à Dakar et téléphonent le dimanche.
Ma tante est secrétaire dans une école.
À la maison, il y a aussi mon cousin Malik, treize ans.
Nous parlons français pour les devoirs.
Personne à prévenir : tante Awa.`;

const CE_POOL_4 = buildExpressPool("e1-2-4", [
  q({
    id: "ce-q1",
    textQ: "Comment s'appelle l'élève ?",
    text: ["Amadou", "Malik", "Omar"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Prénom : _________.",
    fill: "Amadou",
    vfQ: "L'élève s'appelle Amadou.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Avec qui vit Amadou ?",
    text: ["Sa tante Awa", "Son grand-père", "Une voisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je vis avec ma tante _________.",
    fill: "Awa",
    vfQ: "Amadou vit avec sa tante.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habitent ses parents ?",
    text: ["À Dakar", "À Paris", "À Sion"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Mes parents habitent à _________.",
    fill: "Dakar",
    vfQ: "Ses parents habitent à Dakar.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quand les parents téléphonent-ils ?",
    text: ["Le dimanche", "Le mardi", "Jamais"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Ils téléphonent le _________.",
    fill: "dimanche",
    vfQ: "Ils téléphonent le dimanche.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle est la profession de la tante ?",
    text: ["Secrétaire", "Dentiste", "Pilote"],
    textC: 0,
    img: ["secrétaire", "dentiste", "pilote"],
    imgC: 0,
    fillQ: "Ma tante est _________.",
    fill: "secrétaire",
    vfQ: "La tante est secrétaire.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel âge a Malik ?",
    text: ["Treize ans", "Sept ans", "Vingt ans"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Malik a _________ ans.",
    fill: "treize",
    vfQ: "Malik a treize ans.",
    vfC: 0,
  }),
]);
const CE_TEXT_5 = `Annonce baby-sitter

Famille Martin cherche baby-sitter le mercredi après-midi.
Nous avons deux enfants : Émile, six ans, et Rose, trois ans.
Le père est chauffeur et part à 13 h.
La mère est vendeuse dans une boutique du centre.
La baby-sitter donne le goûter et lit une petite histoire.
Adresse : rue du Lac 8, Lausanne.
Contact : madame Martin.`;

const CE_POOL_5 = buildExpressPool("e1-2-5", [
  q({
    id: "ce-q1",
    textQ: "Que cherche la famille Martin ?",
    text: ["Une baby-sitter", "Un professeur", "Un médecin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Famille Martin cherche _________.",
    fill: "baby-sitter",
    vfQ: "La famille cherche une baby-sitter.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quand faut-il venir ?",
    text: ["Le mercredi après-midi", "Le lundi matin", "La nuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "le mercredi _________.",
    fill: "après-midi",
    vfQ: "Il faut venir le mercredi après-midi.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Combien d'enfants y a-t-il ?",
    text: ["Deux", "Quatre", "Un"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Nous avons _________ enfants.",
    fill: "deux",
    vfQ: "Il y a deux enfants.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel métier fait le père ?",
    text: ["Chauffeur", "Boulanger", "Avocat"],
    textC: 0,
    img: ["chauffeur", "boulanger", "avocat"],
    imgC: 0,
    fillQ: "Le père est _________.",
    fill: "chauffeur",
    vfQ: "Le père est chauffeur.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle est la profession de la mère ?",
    text: ["Vendeuse", "Médecin", "Jardinière"],
    textC: 0,
    img: ["vendeur", "médecin", "jardinier"],
    imgC: 0,
    fillQ: "La mère est _________.",
    fill: "vendeuse",
    vfQ: "La mère est vendeuse.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Où habite la famille ?",
    text: ["Rue du Lac 8", "Rue des Fleurs 2", "Avenue du Midi 10"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Adresse : rue du Lac _________.",
    fill: "8",
    vfQ: "La famille habite rue du Lac 8.",
    vfC: 0,
  }),
]);
const CE_TEXT_6 = `Photo WhatsApp — dimanche

Regardez la photo !
À gauche, c'est ma grand-mère avec son chapeau rouge.
Au centre, mon père porte le bébé, ma petite sœur Inès.
Ma mère prend la photo ; elle est coiffeuse.
Mon frère Léo fait une grimace derrière moi.
Nous sommes au parc pour l'anniversaire d'Inès.
Elle a un an aujourd'hui.`;

const CE_POOL_6 = buildExpressPool("e1-2-6", [
  q({
    id: "ce-q1",
    textQ: "Qui est à gauche sur la photo ?",
    text: ["La grand-mère", "Le frère", "La mère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À gauche, c'est ma _________.",
    fill: "grand-mère",
    vfQ: "La grand-mère est à gauche.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Qui est le bébé ?",
    text: ["Inès", "Léo", "Rose"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "ma petite sœur _________.",
    fill: "Inès",
    vfQ: "Le bébé est Inès.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quelle est la profession de la mère ?",
    text: ["Coiffeuse", "Infirmière", "Pharmacienne"],
    textC: 0,
    img: ["coiffeuse", "infirmier", "pharmacien"],
    imgC: 0,
    fillQ: "Ma mère est _________.",
    fill: "coiffeuse",
    vfQ: "La mère est coiffeuse.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Qui fait une grimace ?",
    text: ["Léo", "Le père", "La grand-mère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Mon frère _________ fait une grimace.",
    fill: "Léo",
    vfQ: "Léo fait une grimace.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Où est la famille ?",
    text: ["Au parc", "À la gare", "À l'hôpital"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Nous sommes au _________.",
    fill: "parc",
    vfQ: "La famille est au parc.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel âge a Inès aujourd'hui ?",
    text: ["Un an", "Cinq ans", "Dix ans"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Elle a _________ an aujourd'hui.",
    fill: "un",
    vfQ: "Inès a un an.",
    vfC: 0,
  }),
]);
const CE_TEXT_7 = `Blog — Ma maison bruyante

Chez nous, le matin commence avec beaucoup de bruit.
Papa, qui est facteur, sort son vélo jaune à sept heures.
Maman prépare du thé et aide ma sœur Nora à lire.
Mon frère Adam cherche toujours ses chaussures.
Notre chat Moka dort sur le sac d'école.
Nous sommes quatre enfants, alors la cuisine est petite.
Mais j'aime cette maison pleine de voix.`;

const CE_POOL_7 = buildExpressPool("e1-2-7", [
  q({
    id: "ce-q1",
    textQ: "Quand commence le bruit ?",
    text: ["Le matin", "Le soir", "La nuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Chez nous, le _________ commence avec du bruit.",
    fill: "matin",
    vfQ: "Le bruit commence le matin.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quelle est la profession de papa ?",
    text: ["Facteur", "Mécanicien", "Serveur"],
    textC: 0,
    img: ["facteur", "mécanicien", "serveur"],
    imgC: 0,
    fillQ: "Papa est _________.",
    fill: "facteur",
    vfQ: "Papa est facteur.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quel objet papa sort-il ?",
    text: ["Son vélo jaune", "Une valise", "Un piano"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il sort son _________ jaune.",
    fill: "vélo",
    vfQ: "Papa sort son vélo jaune.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Qui apprend à lire ?",
    text: ["Nora", "Adam", "Moka"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Maman aide ma sœur _________ à lire.",
    fill: "Nora",
    vfQ: "Nora apprend à lire.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Où dort le chat ?",
    text: ["Sur le sac d'école", "Dans le jardin", "Sous la table"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Moka dort sur le sac d'_________.",
    fill: "école",
    vfQ: "Le chat dort sur le sac d'école.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Combien d'enfants y a-t-il ?",
    text: ["Quatre", "Deux", "Sept"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Nous sommes _________ enfants.",
    fill: "quatre",
    vfQ: "Il y a quatre enfants.",
    vfC: 0,
  }),
]);
const CE_TEXT_8 = `Message vocal transcrit

« Salut, c'est Hugo.
Je viens samedi avec ma famille.
Ma femme Claire est dentiste, mais elle ne travaille pas ce jour-là.
Notre fille Emma a onze ans et adore les jeux.
Mon père vient aussi ; il marche lentement.
Est-ce qu'il y a une chaise près de la table ?
Merci et à samedi ! »`;

const CE_POOL_8 = buildExpressPool("e1-2-8", [
  q({
    id: "ce-q1",
    textQ: "Qui laisse le message vocal ?",
    text: ["Hugo", "Claire", "Emma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Salut, c'est _________.",
    fill: "Hugo",
    vfQ: "Hugo laisse le message.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quand vient la famille ?",
    text: ["Samedi", "Lundi", "Jeudi"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je viens _________ avec ma famille.",
    fill: "samedi",
    vfQ: "La famille vient samedi.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quelle est la profession de Claire ?",
    text: ["Dentiste", "Libraire", "Pilote"],
    textC: 0,
    img: ["dentiste", "libraire", "pilote"],
    imgC: 0,
    fillQ: "Claire est _________.",
    fill: "dentiste",
    vfQ: "Claire est dentiste.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel âge a Emma ?",
    text: ["Onze ans", "Trois ans", "Dix-huit ans"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Emma a _________ ans.",
    fill: "onze",
    vfQ: "Emma a onze ans.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Qui marche lentement ?",
    text: ["Le père de Hugo", "La fille", "La voisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Mon père marche _________.",
    fill: "lentement",
    vfQ: "Le père de Hugo marche lentement.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que demande Hugo ?",
    text: ["Une chaise près de la table", "Un billet de train", "Un chien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "une chaise près de la _________",
    fill: "table",
    vfQ: "Hugo demande une chaise.",
    vfC: 0,
  }),
]);
const CE_TEXT_9 = `Invitation mariage

Avec joie, nous invitons toute la famille au mariage de Nadia et Marc.
La cérémonie est samedi à 11 h à la mairie.
Les parents de Nadia arrivent du Maroc vendredi soir.
La sœur de Marc chante une chanson simple.
Le grand-père porte les alliances.
Après la mairie, repas chez tante Leïla.
Réponse avant le 10 mai.`;

const CE_POOL_9 = buildExpressPool("e1-2-9", [
  q({
    id: "ce-q1",
    textQ: "Quel événement est annoncé ?",
    text: ["Un mariage", "Un examen", "Une réunion"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "au _________ de Nadia et Marc.",
    fill: "mariage",
    vfQ: "C'est un mariage.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quand est la cérémonie ?",
    text: ["Samedi à 11 h", "Lundi à 8 h", "Dimanche soir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La cérémonie est samedi à _________ h.",
    fill: "11",
    vfQ: "La cérémonie est samedi à 11 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "D'où arrivent les parents de Nadia ?",
    text: ["Du Maroc", "Du Canada", "De Suisse"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "arrivent du _________.",
    fill: "Maroc",
    vfQ: "Les parents arrivent du Maroc.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Qui chante une chanson ?",
    text: ["La sœur de Marc", "Le grand-père", "Tante Leïla"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La sœur de _________ chante.",
    fill: "Marc",
    vfQ: "La sœur de Marc chante.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Qui porte les alliances ?",
    text: ["Le grand-père", "Le bébé", "La voisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le _________ porte les alliances.",
    fill: "grand-père",
    vfQ: "Le grand-père porte les alliances.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Où est le repas ?",
    text: ["Chez tante Leïla", "Au cinéma", "À l'école"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "repas chez tante _________.",
    fill: "Leïla",
    vfQ: "Le repas est chez tante Leïla.",
    vfC: 0,
  }),
]);
const CE_TEXT_10 = `Profil réseau — Famille de Mateo

Bonjour, je suis Mateo.
Je partage ici des petites nouvelles de notre famille.
Mon mari Paul est architecte et dessine des maisons.
Notre fils Tom a cinq ans ; il aime les trains.
Ma belle-mère habite au troisième étage du même immeuble.
Le vendredi, nous mangeons tous ensemble une soupe.
Bienvenue sur mon profil familial.`;

const CE_POOL_10 = buildExpressPool("e1-2-10", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit le profil ?",
    text: ["Mateo", "Paul", "Tom"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "je suis _________.",
    fill: "Mateo",
    vfQ: "Mateo écrit le profil.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quelle est la profession de Paul ?",
    text: ["Architecte", "Serveur", "Boucher"],
    textC: 0,
    img: ["architecte", "serveur", "boucher"],
    imgC: 0,
    fillQ: "Paul est _________.",
    fill: "architecte",
    vfQ: "Paul est architecte.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Que dessine Paul ?",
    text: ["Des maisons", "Des robes", "Des affiches"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il dessine des _________.",
    fill: "maisons",
    vfQ: "Paul dessine des maisons.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel âge a Tom ?",
    text: ["Cinq ans", "Dix ans", "Un an"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Tom a _________ ans.",
    fill: "cinq",
    vfQ: "Tom a cinq ans.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Où habite la belle-mère ?",
    text: ["Au troisième étage", "À la campagne", "À l'hôtel"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "au _________ étage.",
    fill: "troisième",
    vfQ: "Elle habite au troisième étage.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel jour la famille mange ensemble ?",
    text: ["Le vendredi", "Le mardi", "Le dimanche matin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le _________, nous mangeons ensemble.",
    fill: "vendredi",
    vfQ: "La famille mange ensemble le vendredi.",
    vfC: 0,
  }),
]);
const CE_TEXT_11 = `Note sur le frigo

Papi vient chercher Mila à 16 h.
Le goûter est dans le sac bleu.
Papa travaille au restaurant ; il est cuisinier ce soir.
Maman rentre après son cours de français.
N'oubliez pas d'appeler tante Sofia pour son anniversaire.
Le dessin de Mila est pour elle.
Merci, Lucas`;

const CE_POOL_11 = buildExpressPool("e1-2-11", [
  q({
    id: "ce-q1",
    textQ: "Qui vient chercher Mila ?",
    text: ["Papi", "Papa", "Tante Sofia"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ vient chercher Mila.",
    fill: "Papi",
    vfQ: "Papi vient chercher Mila.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "À quelle heure vient-il ?",
    text: ["À 16 h", "À 8 h", "À midi"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "à _________ h.",
    fill: "16",
    vfQ: "Il vient à 16 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où est le goûter ?",
    text: ["Dans le sac bleu", "Sur la table", "Dans la voiture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le goûter est dans le sac _________.",
    fill: "bleu",
    vfQ: "Le goûter est dans le sac bleu.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quelle est la profession de papa ?",
    text: ["Cuisinier", "Pharmacien", "Journaliste"],
    textC: 0,
    img: ["cuisinier", "pharmacien", "journaliste"],
    imgC: 0,
    fillQ: "Papa est _________.",
    fill: "cuisinier",
    vfQ: "Papa est cuisinier.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Qui a un anniversaire ?",
    text: ["Tante Sofia", "Mila", "Lucas"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "appelez tante _________ pour son anniversaire.",
    fill: "Sofia",
    vfQ: "Tante Sofia a un anniversaire.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Pour qui est le dessin ?",
    text: ["Pour tante Sofia", "Pour le voisin", "Pour papa"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le dessin de Mila est pour _________.",
    fill: "elle",
    vfQ: "Le dessin est pour tante Sofia.",
    vfC: 0,
  }),
]);
const CE_TEXT_12 = `Lettre à grand-mère

Chère Mamie,
Dans notre nouvel appartement, j'ai une chambre verte.
Mon frère Noam dort dans la chambre près de la porte.
Maman est pharmacienne et connaît déjà la pharmacie du quartier.
Papa garde les plantes sur le balcon.
Dimanche, nous venons te voir avec un gâteau.
Je veux te montrer ma photo de classe.
Je t'embrasse, Elsa`;

const CE_POOL_12 = buildExpressPool("e1-2-12", [
  q({
    id: "ce-q1",
    textQ: "À qui est la lettre ?",
    text: ["À Mamie", "À Noam", "Au directeur"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Chère _________.",
    fill: "Mamie",
    vfQ: "La lettre est pour Mamie.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quelle couleur a la chambre d'Elsa ?",
    text: ["Verte", "Bleue", "Rouge"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "j'ai une chambre _________.",
    fill: "verte",
    vfQ: "La chambre est verte.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où dort Noam ?",
    text: ["Près de la porte", "Sur le balcon", "Dans la cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "près de la _________.",
    fill: "porte",
    vfQ: "Noam dort près de la porte.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quelle est la profession de maman ?",
    text: ["Pharmacienne", "Peintre", "Factrice"],
    textC: 0,
    img: ["pharmacien", "peintre", "facteur"],
    imgC: 0,
    fillQ: "Maman est _________.",
    fill: "pharmacienne",
    vfQ: "Maman est pharmacienne.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Que garde papa sur le balcon ?",
    text: ["Les plantes", "Les valises", "Les livres"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Papa garde les _________.",
    fill: "plantes",
    vfQ: "Papa garde les plantes.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quand la famille vient-elle voir Mamie ?",
    text: ["Dimanche", "Jeudi", "Aujourd'hui"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________, nous venons te voir.",
    fill: "Dimanche",
    vfQ: "La famille vient dimanche.",
    vfC: 0,
  }),
]);
const CE_TEXT_13 = `Forum — Familles en Suisse

Bonjour, je suis Rania.
Je vis à Bienne avec mes deux fils et ma mère.
Mon fils aîné, Sami, est étudiant en informatique.
Le plus jeune, Yanis, a dix ans et joue au basket.
Ma mère ne parle pas allemand, alors je traduis souvent.
Le soir, chacun raconte sa journée en français.
Avez-vous aussi une famille bilingue ?`;

const CE_POOL_13 = buildExpressPool("e1-2-13", [
  q({
    id: "ce-q1",
    textQ: "Où vit Rania ?",
    text: ["À Bienne", "À Marseille", "À Lugano"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je vis à _________.",
    fill: "Bienne",
    vfQ: "Rania vit à Bienne.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Avec qui vit-elle ?",
    text: ["Ses deux fils et sa mère", "Ses collègues", "Son voisin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "avec mes deux fils et ma _________.",
    fill: "mère",
    vfQ: "Elle vit avec ses fils et sa mère.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Que fait Sami ?",
    text: ["Il est étudiant", "Il est pilote", "Il est bébé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Sami est _________.",
    fill: "étudiant",
    vfQ: "Sami est étudiant.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel âge a Yanis ?",
    text: ["Dix ans", "Quinze ans", "Deux ans"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Yanis a _________ ans.",
    fill: "dix",
    vfQ: "Yanis a dix ans.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle langue la mère ne parle-t-elle pas ?",
    text: ["Allemand", "Français", "Arabe"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Ma mère ne parle pas _________.",
    fill: "allemand",
    vfQ: "Elle ne parle pas allemand.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quelle langue la famille utilise-t-elle le soir ?",
    text: ["Le français", "Le japonais", "Le portugais"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "en _________.",
    fill: "français",
    vfQ: "La famille parle français le soir.",
    vfC: 0,
  }),
]);
const CE_TEXT_14 = `Message de la prof

Chers parents de Léo,
Demain, les élèves présentent une personne de leur famille.
Léo veut parler de son oncle Victor.
Victor est pompier à Genève et porte un casque rouge.
Merci d'apporter une petite photo de lui.
La présentation dure deux minutes.
Bien cordialement, Madame Perret`;

const CE_POOL_14 = buildExpressPool("e1-2-14", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit le message ?",
    text: ["Madame Perret", "Léo", "Victor"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Bien cordialement, Madame _________.",
    fill: "Perret",
    vfQ: "La prof écrit le message.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Que font les élèves demain ?",
    text: ["Ils présentent une personne", "Ils partent en vacances", "Ils dorment"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "les élèves présentent une _________.",
    fill: "personne",
    vfQ: "Les élèves présentent une personne.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "De qui Léo veut-il parler ?",
    text: ["De son oncle Victor", "De sa sœur", "De sa voisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "parler de son oncle _________.",
    fill: "Victor",
    vfQ: "Léo veut parler de Victor.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quelle est la profession de Victor ?",
    text: ["Pompier", "Coiffeur", "Vendeur"],
    textC: 0,
    img: ["pompier", "coiffeur", "vendeur"],
    imgC: 0,
    fillQ: "Victor est _________.",
    fill: "pompier",
    vfQ: "Victor est pompier.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle photo faut-il apporter ?",
    text: ["Une photo de Victor", "Une photo de l'école", "Une photo du chien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "une petite photo de _________.",
    fill: "lui",
    vfQ: "Il faut apporter une photo de Victor.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Combien de temps dure la présentation ?",
    text: ["Deux minutes", "Une heure", "Dix secondes"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La présentation dure _________ minutes.",
    fill: "deux",
    vfQ: "La présentation dure deux minutes.",
    vfC: 0,
  }),
]);
const CE_TEXT_15 = `Carte de vœux

Bonne année, chère tante Maria !
Chez nous, tout le monde va bien.
Papa apprend le français avec une application.
Maman ouvre bientôt son petit salon de coiffure.
Les jumeaux, Ali et Nora, entrent à l'école lundi.
Nous pensons souvent à toi en Italie.
Gros bisous de toute la famille.`;

const CE_POOL_15 = buildExpressPool("e1-2-15", [
  q({
    id: "ce-q1",
    textQ: "À qui est la carte ?",
    text: ["À tante Maria", "À Ali", "Au professeur"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "chère tante _________",
    fill: "Maria",
    vfQ: "La carte est pour tante Maria.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Que fait papa ?",
    text: ["Il apprend le français", "Il répare une voiture", "Il vend la maison"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Papa apprend le _________.",
    fill: "français",
    vfQ: "Papa apprend le français.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quelle est la profession de maman ?",
    text: ["Coiffeuse", "Mécanicienne", "Serveuse"],
    textC: 0,
    img: ["coiffeuse", "mécanicien", "serveur"],
    imgC: 0,
    fillQ: "salon de _________.",
    fill: "coiffure",
    vfQ: "Maman est coiffeuse.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Comment s'appellent les jumeaux ?",
    text: ["Ali et Nora", "Léo et Rose", "Sam et Tom"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les jumeaux, _________ et Nora.",
    fill: "Ali",
    vfQ: "Les jumeaux s'appellent Ali et Nora.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quand les jumeaux entrent-ils à l'école ?",
    text: ["Lundi", "Vendredi", "En été"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "à l'école _________.",
    fill: "lundi",
    vfQ: "Ils entrent à l'école lundi.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Où habite tante Maria ?",
    text: ["En Italie", "En Espagne", "En Suisse"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "à toi en _________.",
    fill: "Italie",
    vfQ: "Tante Maria habite en Italie.",
    vfC: 0,
  }),
]);
const CE_TEXT_16 = `Règlement colonie — chambre 4

Dans la chambre 4, il y a trois cousins : Yan, Malo et Sami.
Yan téléphone à ses parents après le dîner.
Malo écrit une carte à sa petite sœur.
Sami garde la photo de sa mère sous son oreiller.
Les familles peuvent appeler entre 18 h et 19 h.
Après 21 h, les enfants lisent en silence.
Merci de respecter le calme.`;

const CE_POOL_16 = buildExpressPool("e1-2-16", [
  q({
    id: "ce-q1",
    textQ: "Combien de cousins sont dans la chambre 4 ?",
    text: ["Trois", "Deux", "Six"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "il y a _________ cousins.",
    fill: "trois",
    vfQ: "Il y a trois cousins.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Qui téléphone à ses parents ?",
    text: ["Yan", "Malo", "Sami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ téléphone à ses parents.",
    fill: "Yan",
    vfQ: "Yan téléphone à ses parents.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "À qui Malo écrit-il ?",
    text: ["À sa petite sœur", "À son père", "Au cuisinier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "à sa petite _________.",
    fill: "sœur",
    vfQ: "Malo écrit à sa petite sœur.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Que garde Sami sous son oreiller ?",
    text: ["La photo de sa mère", "Un téléphone", "Des clés"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "la photo de sa _________.",
    fill: "mère",
    vfQ: "Sami garde la photo de sa mère.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quand les familles peuvent-elles appeler ?",
    text: ["Entre 18 h et 19 h", "Le matin seulement", "Après minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "entre _________ h et 19 h.",
    fill: "18",
    vfQ: "Les familles peuvent appeler entre 18 h et 19 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que font les enfants après 21 h ?",
    text: ["Ils lisent en silence", "Ils jouent au ballon", "Ils téléphonent"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "les enfants lisent en _________.",
    fill: "silence",
    vfQ: "Les enfants lisent en silence.",
    vfC: 0,
  }),
]);
const CE_TEXT_17 = `Affiche — Fête des mères

Dimanche, salle du quartier : grande fête des mères.
Les enfants chantent à 15 h.
Les pères préparent le café et les jus.
Madame Rossi, boulangère, apporte deux tartes.
Une table est réservée pour les grands-mères.
Apportez une photo de famille pour le mur des souvenirs.
Entrée gratuite pour tous.`;

const CE_POOL_17 = buildExpressPool("e1-2-17", [
  q({
    id: "ce-q1",
    textQ: "Quel événement annonce l'affiche ?",
    text: ["La fête des mères", "Un match", "Une visite médicale"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "grande fête des _________.",
    fill: "mères",
    vfQ: "L'affiche annonce la fête des mères.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Où a lieu la fête ?",
    text: ["Dans la salle du quartier", "À la gare", "Au zoo"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "salle du _________.",
    fill: "quartier",
    vfQ: "La fête est dans la salle du quartier.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "À quelle heure chantent les enfants ?",
    text: ["À 15 h", "À 9 h", "À 22 h"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les enfants chantent à _________ h.",
    fill: "15",
    vfQ: "Les enfants chantent à 15 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Que préparent les pères ?",
    text: ["Le café et les jus", "Les devoirs", "Les billets"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "préparent le _________ et les jus.",
    fill: "café",
    vfQ: "Les pères préparent le café et les jus.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle est la profession de Madame Rossi ?",
    text: ["Boulangère", "Dentiste", "Secrétaire"],
    textC: 0,
    img: ["boulanger", "dentiste", "secrétaire"],
    imgC: 0,
    fillQ: "Madame Rossi est _________.",
    fill: "boulangère",
    vfQ: "Madame Rossi est boulangère.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que faut-il apporter ?",
    text: ["Une photo de famille", "Un passeport", "Un manteau rouge"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Apportez une photo de _________.",
    fill: "famille",
    vfQ: "Il faut apporter une photo de famille.",
    vfC: 0,
  }),
]);
const CE_TEXT_18 = `Transcription d'appel

— Allô, papa ? C'est Ana.
— Oui, ma fille, tout va bien ?
— Oui. Le train arrive à 18 h 20.
— Ton frère Diego vient aussi à la gare.
— Super. Maman travaille encore à l'hôpital ; elle est médecin.
— Elle prépare le dîner après son service.
— Alors à tout à l'heure !`;

const CE_POOL_18 = buildExpressPool("e1-2-18", [
  q({
    id: "ce-q1",
    textQ: "Qui appelle papa ?",
    text: ["Ana", "Diego", "Maman"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "Ana",
    vfQ: "Ana appelle papa.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "À quelle heure arrive le train ?",
    text: ["À 18 h 20", "À 12 h", "À 20 h 18"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le train arrive à 18 h _________.",
    fill: "20",
    vfQ: "Le train arrive à 18 h 20.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Qui vient à la gare ?",
    text: ["Diego", "La tante", "Le médecin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Ton frère _________ vient aussi.",
    fill: "Diego",
    vfQ: "Diego vient à la gare.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Où travaille maman ?",
    text: ["À l'hôpital", "À la poste", "À la bibliothèque"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Maman travaille à l'_________.",
    fill: "hôpital",
    vfQ: "Maman travaille à l'hôpital.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Quelle est la profession de maman ?",
    text: ["Médecin", "Libraire", "Vendeuse"],
    textC: 0,
    img: ["médecin", "libraire", "vendeur"],
    imgC: 0,
    fillQ: "Elle est _________.",
    fill: "médecin",
    vfQ: "Maman est médecin.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que prépare maman après son service ?",
    text: ["Le dîner", "Une valise", "Une leçon"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Elle prépare le _________.",
    fill: "dîner",
    vfQ: "Maman prépare le dîner.",
    vfC: 0,
  }),
]);
const CE_TEXT_19 = `Témoignage podcast — Une famille, deux langues

Je m'appelle Julie et je parle français avec mon père.
Avec ma mère, je parle espagnol.
Mon père est journaliste ; il pose beaucoup de questions.
Ma mère est jardinière et connaît les noms des fleurs.
Ma petite sœur Lola mélange les deux langues.
Le dimanche, nous appelons les cousins à Madrid.
Chez nous, les mots voyagent.`;

const CE_POOL_19 = buildExpressPool("e1-2-19", [
  q({
    id: "ce-q1",
    textQ: "Avec qui Julie parle-t-elle français ?",
    text: ["Avec son père", "Avec sa voisine", "Avec Lola"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "avec mon _________.",
    fill: "père",
    vfQ: "Julie parle français avec son père.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quelle langue parle-t-elle avec sa mère ?",
    text: ["Espagnol", "Allemand", "Italien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "je parle _________.",
    fill: "espagnol",
    vfQ: "Elle parle espagnol avec sa mère.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quelle est la profession du père ?",
    text: ["Journaliste", "Pompier", "Serveur"],
    textC: 0,
    img: ["journaliste", "pompier", "serveur"],
    imgC: 0,
    fillQ: "Mon père est _________.",
    fill: "journaliste",
    vfQ: "Le père est journaliste.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quelle est la profession de la mère ?",
    text: ["Jardinière", "Avocate", "Pharmacienne"],
    textC: 0,
    img: ["jardinier", "avocat", "pharmacien"],
    imgC: 0,
    fillQ: "Ma mère est _________.",
    fill: "jardinière",
    vfQ: "La mère est jardinière.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Qui mélange les deux langues ?",
    text: ["Lola", "Le père", "Les cousins"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Ma petite sœur _________ mélange.",
    fill: "Lola",
    vfQ: "Lola mélange les deux langues.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Où habitent les cousins ?",
    text: ["À Madrid", "À Rome", "À Lausanne"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "les cousins à _________.",
    fill: "Madrid",
    vfQ: "Les cousins habitent à Madrid.",
    vfC: 0,
  }),
]);
const CE_TEXT_20 = `Petite annonce — colocation avec famille

Chambre libre chez la famille Besson à Fribourg.
Nous sommes un couple avec une fille de huit ans.
Le père est menuisier et répare souvent des meubles.
La mère est professeure de français.
Nous cherchons une étudiante calme pour six mois.
Repas possible avec la famille le soir.
Écrire à famille.besson@mail.ch.`;

const CE_POOL_20 = buildExpressPool("e1-2-20", [
  q({
    id: "ce-q1",
    textQ: "Où est la chambre libre ?",
    text: ["À Fribourg", "À Nyon", "À Berne"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "à _________.",
    fill: "Fribourg",
    vfQ: "La chambre est à Fribourg.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quel âge a la fille ?",
    text: ["Huit ans", "Trois ans", "Seize ans"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "une fille de _________ ans.",
    fill: "huit",
    vfQ: "La fille a huit ans.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quelle est la profession du père ?",
    text: ["Menuisier", "Pilote", "Vétérinaire"],
    textC: 0,
    img: ["menuisier", "pilote", "vétérinaire"],
    imgC: 0,
    fillQ: "Le père est _________.",
    fill: "menuisier",
    vfQ: "Le père est menuisier.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quelle est la profession de la mère ?",
    text: ["Professeure", "Dentiste", "Coiffeuse"],
    textC: 0,
    img: ["professeur", "dentiste", "coiffeuse"],
    imgC: 0,
    fillQ: "La mère est _________.",
    fill: "professeure",
    vfQ: "La mère est professeure.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Qui cherche la famille ?",
    text: ["Une étudiante calme", "Un bébé", "Un médecin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Nous cherchons une étudiante _________.",
    fill: "calme",
    vfQ: "La famille cherche une étudiante calme.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quand le repas est-il possible avec la famille ?",
    text: ["Le soir", "Le matin seulement", "Jamais"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Repas possible avec la famille le _________.",
    fill: "soir",
    vfQ: "Le repas est possible le soir.",
    vfC: 0,
  }),
]);

export const E1_2_CE: CommunicationExercise[] = [
  readingPoolExercise({
  id: "e1-2-1",
  readingText: CE_TEXT_1,
  questionPool: CE_POOL_1
}),
  readingPoolExercise({
  id: "e1-2-2",
  readingText: CE_TEXT_2,
  questionPool: CE_POOL_2
}),
  readingPoolExercise({
  id: "e1-2-3",
  readingText: CE_TEXT_3,
  questionPool: CE_POOL_3
}),
  readingPoolExercise({
  id: "e1-2-4",
  readingText: CE_TEXT_4,
  questionPool: CE_POOL_4
}),
  readingPoolExercise({
  id: "e1-2-5",
  readingText: CE_TEXT_5,
  questionPool: CE_POOL_5
}),
  readingPoolExercise({
  id: "e1-2-6",
  readingText: CE_TEXT_6,
  questionPool: CE_POOL_6
}),
  readingPoolExercise({
  id: "e1-2-7",
  readingText: CE_TEXT_7,
  questionPool: CE_POOL_7
}),
  readingPoolExercise({
  id: "e1-2-8",
  readingText: CE_TEXT_8,
  questionPool: CE_POOL_8
}),
  readingPoolExercise({
  id: "e1-2-9",
  readingText: CE_TEXT_9,
  questionPool: CE_POOL_9
}),
  readingPoolExercise({
  id: "e1-2-10",
  readingText: CE_TEXT_10,
  questionPool: CE_POOL_10
}),
  readingPoolExercise({
  id: "e1-2-11",
  readingText: CE_TEXT_11,
  questionPool: CE_POOL_11
}),
  readingPoolExercise({
  id: "e1-2-12",
  readingText: CE_TEXT_12,
  questionPool: CE_POOL_12
}),
  readingPoolExercise({
  id: "e1-2-13",
  readingText: CE_TEXT_13,
  questionPool: CE_POOL_13
}),
  readingPoolExercise({
  id: "e1-2-14",
  readingText: CE_TEXT_14,
  questionPool: CE_POOL_14
}),
  readingPoolExercise({
  id: "e1-2-15",
  readingText: CE_TEXT_15,
  questionPool: CE_POOL_15
}),
  readingPoolExercise({
  id: "e1-2-16",
  readingText: CE_TEXT_16,
  questionPool: CE_POOL_16
}),
  readingPoolExercise({
  id: "e1-2-17",
  readingText: CE_TEXT_17,
  questionPool: CE_POOL_17
}),
  readingPoolExercise({
  id: "e1-2-18",
  readingText: CE_TEXT_18,
  questionPool: CE_POOL_18
}),
  readingPoolExercise({
  id: "e1-2-19",
  readingText: CE_TEXT_19,
  questionPool: CE_POOL_19
}),
  readingPoolExercise({
  id: "e1-2-20",
  readingText: CE_TEXT_20,
  questionPool: CE_POOL_20
}),
];

/* ── Production orale — dialogues à jouer (thème famille) ──────────────────── */

export const E1_2_PO: ExpressPoDialogue[] = [
  {
    id: "e1-2-po-1",
    title: "La photo de famille",
    context: "Vous montrez une photo de votre famille à un ami.",
    roleA: { title: "L'ami", vous: "l'ami / l'amie" },
    roleB: { title: "Vous", vous: "celui / celle qui montre la photo" },
    lines: [
      { role: "A", text: "Qu'est-ce que tu regardes ?" },
      { role: "B", text: "Une photo de ma famille. Regarde !" },
      { role: "A", text: "Elle est belle ! Lui, c'est qui ?" },
      { role: "B", text: "C'est mon père. Et là, c'est ma mère." },
      { role: "A", text: "Et la jeune fille blonde, c'est ta sœur ?" },
      { role: "B", text: "Oui, c'est ma sœur Ana. Elle a 15 ans." },
      { role: "A", text: "Tu as aussi un frère ?" },
      { role: "B", text: "Non, nous sommes deux : ma sœur et moi." },
      { role: "A", text: "Enchanté(e) de te connaître !" },
      { role: "B", text: "Moi aussi. À tout à l'heure !" },
],
  },
  {
    id: "e1-2-po-2",
    title: "Frères et sœurs",
    context: "À la pause, vous parlez de vos familles avec une collègue.",
    roleA: { title: "La collègue", vous: "le collègue / la collègue" },
    roleB: { title: "Vous", vous: "le collègue / la collègue" },
    lines: [
      { role: "A", text: "Tu as des frères et sœurs ?" },
      { role: "B", text: "Oui, j'ai deux frères et une sœur. Et toi ?" },
      { role: "A", text: "Moi, je suis fille unique." },
      { role: "B", text: "Tes parents habitent ici ?" },
      { role: "A", text: "Non, ils habitent au Portugal. Et ta famille ?" },
      { role: "B", text: "Mes frères habitent ici, ma sœur est en Italie." },
      { role: "A", text: "Elle est mariée, ta sœur ?" },
      { role: "B", text: "Oui, et elle a trois enfants." },
      { role: "A", text: "Bon courage pour la suite !" },
      { role: "B", text: "Merci, toi aussi !" },
],
  },
  {
    id: "e1-2-po-3",
    title: "Tu as des enfants ?",
    context: "Un collègue vous pose des questions sur votre famille.",
    roleA: { title: "Le collègue", vous: "le collègue / la collègue" },
    roleB: { title: "Vous", vous: "le collègue / la collègue" },
    lines: [
      { role: "A", text: "Tu es marié, Samir ?" },
      { role: "B", text: "Oui, je suis marié depuis dix ans." },
      { role: "A", text: "Tu as des enfants ?" },
      { role: "B", text: "Oui, j'ai un fils et une fille." },
      { role: "A", text: "Ils ont quel âge ?" },
      { role: "B", text: "Mon fils a huit ans et ma fille a cinq ans." },
      { role: "A", text: "Ils vont à l'école ici ?" },
      { role: "B", text: "Oui, à l'école du quartier. Et toi, tu as des enfants ?" },
      { role: "A", text: "Enchanté(e) de te connaître !" },
      { role: "B", text: "Moi aussi. À tout à l'heure !" },
],
  },
  {
    id: "e1-2-po-4",
    title: "Présenter sa famille en visio",
    context: "Vous parlez en visio avec votre correspondant et vous présentez votre famille.",
    roleA: { title: "Le correspondant", vous: "le correspondant / la correspondante" },
    roleB: { title: "Vous", vous: "celui / celle qui présente sa famille" },
    lines: [
      { role: "A", text: "Bonjour ! Aujourd'hui, tu me présentes ta famille ?" },
      { role: "B", text: "Oui ! Alors, nous sommes cinq à la maison." },
      { role: "A", text: "Qui habite avec toi ?" },
      { role: "B", text: "Mes parents, mes deux sœurs et moi." },
      { role: "A", text: "Que font tes parents ?" },
      { role: "B", text: "Mon père est chauffeur et ma mère est vendeuse." },
      { role: "A", text: "Et tes sœurs, elles ont quel âge ?" },
      { role: "B", text: "Elles ont douze et seize ans." },
      { role: "A", text: "Enchanté(e) de te connaître !" },
      { role: "B", text: "Moi aussi. À tout à l'heure !" },
],
  },
  {
    id: "e1-2-po-5",
    title: "Au parc",
    context: "Au parc, vous parlez avec un autre parent de vos enfants.",
    roleA: { title: "Le premier parent", vous: "le papa / la maman" },
    roleB: { title: "Le deuxième parent", vous: "le papa / la maman" },
    lines: [
      { role: "A", text: "Il est mignon, votre fils ! Il a quel âge ?" },
      { role: "B", text: "Merci ! Il a trois ans. Et votre fille ?" },
      { role: "A", text: "Elle a quatre ans. Vous avez d'autres enfants ?" },
      { role: "B", text: "Oui, une grande fille de dix ans." },
      { role: "A", text: "Nous, nous avons aussi un bébé de six mois." },
      { role: "B", text: "Félicitations ! C'est un garçon ou une fille ?" },
      { role: "A", text: "C'est un garçon, il s'appelle Noah." },
      { role: "B", text: "Comme mon neveu ! C'est un joli prénom." },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e1-2-po-6",
    title: "Au mariage",
    context: "Vous êtes invité(e) à un mariage et vous demandez qui est qui.",
    roleA: { title: "L'invité", vous: "l'invité / l'invitée" },
    roleB: { title: "Le cousin de la mariée", vous: "le cousin / la cousine de la mariée" },
    lines: [
      { role: "A", text: "C'est un beau mariage ! Vous êtes de la famille ?" },
      { role: "B", text: "Oui, la mariée est ma cousine." },
      { role: "A", text: "Ah ! Et le monsieur là-bas, c'est qui ?" },
      { role: "B", text: "C'est mon oncle, le père de la mariée." },
      { role: "A", text: "Et la dame à côté de lui ?" },
      { role: "B", text: "C'est sa femme, ma tante Rosa." },
      { role: "A", text: "Vous avez une grande famille !" },
      { role: "B", text: "Oui, nous sommes plus de cinquante aujourd'hui !" },
      { role: "A", text: "Super, merci beaucoup." },
      { role: "B", text: "Avec plaisir. Bonne continuation !" },
],
  },
  {
    id: "e1-2-po-7",
    title: "Les grands-parents",
    context: "Vous parlez de vos grands-parents avec un ami.",
    roleA: { title: "L'ami", vous: "l'ami / l'amie" },
    roleB: { title: "Vous", vous: "le petit-fils / la petite-fille" },
    lines: [
      { role: "A", text: "Tu vas où ce week-end ?" },
      { role: "B", text: "Chez mes grands-parents, à la campagne." },
      { role: "A", text: "Ils ont quel âge, tes grands-parents ?" },
      { role: "B", text: "Mon grand-père a 75 ans et ma grand-mère a 72 ans." },
      { role: "A", text: "Tu les vois souvent ?" },
      { role: "B", text: "Oui, une fois par mois. J'adore ma grand-mère." },
      { role: "A", text: "Elle fait des bons gâteaux, c'est ça ?" },
      { role: "B", text: "Oui ! Et mon grand-père raconte des histoires drôles." },
      { role: "A", text: "Enchanté(e) de te connaître !" },
      { role: "B", text: "Moi aussi. À tout à l'heure !" },
],
  },
  {
    id: "e1-2-po-8",
    title: "Inscription à l'école",
    context: "Vous inscrivez votre fille à l'école. La secrétaire vous pose des questions sur la famille.",
    roleA: { title: "La secrétaire", vous: "le secrétaire / la secrétaire" },
    roleB: { title: "Le parent", vous: "le papa / la maman" },
    lines: [
      { role: "A", text: "Bonjour, c'est pour inscrire votre enfant ?" },
      { role: "B", text: "Oui, ma fille Lina. Elle a six ans." },
      { role: "A", text: "Très bien. Vous avez d'autres enfants ?" },
      { role: "B", text: "Oui, un fils de neuf ans. Il est déjà dans cette école." },
      { role: "A", text: "Parfait. Vous êtes mariée ?" },
      { role: "B", text: "Oui, mon mari s'appelle Adel." },
      { role: "A", text: "Le papa peut venir chercher Lina le soir ?" },
      { role: "B", text: "Oui, mon mari ou ma mère, la grand-mère de Lina." },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e1-2-po-9",
    title: "La famille au pays",
    context: "Un ami vous demande où habite votre famille.",
    roleA: { title: "L'ami", vous: "l'ami / l'amie" },
    roleB: { title: "Vous", vous: "celui / celle qui parle de sa famille" },
    lines: [
      { role: "A", text: "Ta famille habite ici avec toi ?" },
      { role: "B", text: "Non, mes parents habitent en Tunisie." },
      { role: "A", text: "Ils te manquent ?" },
      { role: "B", text: "Oui, beaucoup. Mais je téléphone à ma mère tous les jours." },
      { role: "A", text: "Tu as des frères et sœurs là-bas ?" },
      { role: "B", text: "Oui, mon frère habite avec mes parents." },
      { role: "A", text: "Et tu retournes en Tunisie parfois ?" },
      { role: "B", text: "Oui, chaque été, pour voir toute la famille." },
      { role: "A", text: "Merci, c'est noté." },
      { role: "B", text: "Parfait. À bientôt alors !" },
],
  },
  {
    id: "e1-2-po-10",
    title: "Ton frère est marié ?",
    context: "Vous parlez de votre frère et de votre sœur avec une amie.",
    roleA: { title: "L'amie", vous: "l'ami / l'amie" },
    roleB: { title: "Vous", vous: "le frère / la sœur" },
    lines: [
      { role: "A", text: "Tu as un frère, non ? Il habite aussi ici ?" },
      { role: "B", text: "Oui, mon frère Karim habite dans la même ville." },
      { role: "A", text: "Il est marié ?" },
      { role: "B", text: "Non, il est célibataire. Il a 26 ans." },
      { role: "A", text: "Et ta sœur ?" },
      { role: "B", text: "Elle, elle est mariée. Son mari est très gentil." },
      { role: "A", text: "Ils ont des enfants ?" },
      { role: "B", text: "Oui, un petit garçon. Je suis tonton !" },
      { role: "A", text: "Enchanté(e) de te connaître !" },
      { role: "B", text: "Moi aussi. À tout à l'heure !" },
],
  },
{
  id: "e1-2-po-11",
  title: "À la mairie",
  context: "Situation : à la mairie. Thème : la famille.",
  roleA: { title: "L'interlocuteur A", vous: "l'interlocuteur A" },
  roleB: { title: "L'interlocuteur B", vous: "l'interlocuteur B" },
  lines: [
    { role: "A", text: "Bonjour, je peux vous aider ?" },
    { role: "B", text: "Oui, bonjour. J'ai une question." },
    { role: "A", text: "Bien sûr. Dites-moi tout." },
    { role: "B", text: "C'est au sujet de la famille." },
    { role: "A", text: "D'accord. Pouvez-vous préciser ?" },
    { role: "B", text: "Oui, je voudrais plus d'informations." },
    { role: "A", text: "Très bien, je note." },
    { role: "B", text: "Merci beaucoup pour votre aide." },
    { role: "A", text: "Ravi(e) de faire votre connaissance." },
    { role: "B", text: "Moi aussi. À bientôt !" },
  ],
},
{
  id: "e1-2-po-12",
  title: "Au téléphone",
  context: "Situation : au téléphone. Thème : la famille.",
  roleA: { title: "L'interlocuteur A", vous: "l'interlocuteur A" },
  roleB: { title: "L'interlocuteur B", vous: "l'interlocuteur B" },
  lines: [
    { role: "A", text: "Bonjour, je peux vous aider ?" },
    { role: "B", text: "Oui, bonjour. J'ai une question." },
    { role: "A", text: "Bien sûr. Dites-moi tout." },
    { role: "B", text: "C'est au sujet de la famille." },
    { role: "A", text: "D'accord. Pouvez-vous préciser ?" },
    { role: "B", text: "Oui, je voudrais plus d'informations." },
    { role: "A", text: "Très bien, je note." },
    { role: "B", text: "Merci beaucoup pour votre aide." },
    { role: "A", text: "Ravi(e) de faire votre connaissance." },
    { role: "B", text: "Moi aussi. À bientôt !" },
  ],
},
{
  id: "e1-2-po-13",
  title: "Chez le voisin",
  context: "Situation : chez le voisin. Thème : la famille.",
  roleA: { title: "L'interlocuteur A", vous: "l'interlocuteur A" },
  roleB: { title: "L'interlocuteur B", vous: "l'interlocuteur B" },
  lines: [
    { role: "A", text: "Bonjour, je peux vous aider ?" },
    { role: "B", text: "Oui, bonjour. J'ai une question." },
    { role: "A", text: "Bien sûr. Dites-moi tout." },
    { role: "B", text: "C'est au sujet de la famille." },
    { role: "A", text: "D'accord. Pouvez-vous préciser ?" },
    { role: "B", text: "Oui, je voudrais plus d'informations." },
    { role: "A", text: "Très bien, je note." },
    { role: "B", text: "Merci beaucoup pour votre aide." },
    { role: "A", text: "Ravi(e) de faire votre connaissance." },
    { role: "B", text: "Moi aussi. À bientôt !" },
  ],
},
{
  id: "e1-2-po-14",
  title: "À l'accueil",
  context: "Situation : à l'accueil. Thème : la famille.",
  roleA: { title: "L'interlocuteur A", vous: "l'interlocuteur A" },
  roleB: { title: "L'interlocuteur B", vous: "l'interlocuteur B" },
  lines: [
    { role: "A", text: "Bonjour, je peux vous aider ?" },
    { role: "B", text: "Oui, bonjour. J'ai une question." },
    { role: "A", text: "Bien sûr. Dites-moi tout." },
    { role: "B", text: "C'est au sujet de la famille." },
    { role: "A", text: "D'accord. Pouvez-vous préciser ?" },
    { role: "B", text: "Oui, je voudrais plus d'informations." },
    { role: "A", text: "Très bien, je note." },
    { role: "B", text: "Merci beaucoup pour votre aide." },
    { role: "A", text: "Ravi(e) de faire votre connaissance." },
    { role: "B", text: "Moi aussi. À bientôt !" },
  ],
},
{
  id: "e1-2-po-15",
  title: "Dans la rue",
  context: "Situation : dans la rue. Thème : la famille.",
  roleA: { title: "L'interlocuteur A", vous: "l'interlocuteur A" },
  roleB: { title: "L'interlocuteur B", vous: "l'interlocuteur B" },
  lines: [
    { role: "A", text: "Bonjour, je peux vous aider ?" },
    { role: "B", text: "Oui, bonjour. J'ai une question." },
    { role: "A", text: "Bien sûr. Dites-moi tout." },
    { role: "B", text: "C'est au sujet de la famille." },
    { role: "A", text: "D'accord. Pouvez-vous préciser ?" },
    { role: "B", text: "Oui, je voudrais plus d'informations." },
    { role: "A", text: "Très bien, je note." },
    { role: "B", text: "Merci beaucoup pour votre aide." },
    { role: "A", text: "Ravi(e) de faire votre connaissance." },
    { role: "B", text: "Moi aussi. À bientôt !" },
  ],
},
{
  id: "e1-2-po-16",
  title: "Au bureau",
  context: "Situation : au bureau. Thème : la famille.",
  roleA: { title: "L'interlocuteur A", vous: "l'interlocuteur A" },
  roleB: { title: "L'interlocuteur B", vous: "l'interlocuteur B" },
  lines: [
    { role: "A", text: "Bonjour, je peux vous aider ?" },
    { role: "B", text: "Oui, bonjour. J'ai une question." },
    { role: "A", text: "Bien sûr. Dites-moi tout." },
    { role: "B", text: "C'est au sujet de la famille." },
    { role: "A", text: "D'accord. Pouvez-vous préciser ?" },
    { role: "B", text: "Oui, je voudrais plus d'informations." },
    { role: "A", text: "Très bien, je note." },
    { role: "B", text: "Merci beaucoup pour votre aide." },
    { role: "A", text: "Ravi(e) de faire votre connaissance." },
    { role: "B", text: "Moi aussi. À bientôt !" },
  ],
},
{
  id: "e1-2-po-17",
  title: "À la réception",
  context: "Situation : à la réception. Thème : la famille.",
  roleA: { title: "L'interlocuteur A", vous: "l'interlocuteur A" },
  roleB: { title: "L'interlocuteur B", vous: "l'interlocuteur B" },
  lines: [
    { role: "A", text: "Bonjour, je peux vous aider ?" },
    { role: "B", text: "Oui, bonjour. J'ai une question." },
    { role: "A", text: "Bien sûr. Dites-moi tout." },
    { role: "B", text: "C'est au sujet de la famille." },
    { role: "A", text: "D'accord. Pouvez-vous préciser ?" },
    { role: "B", text: "Oui, je voudrais plus d'informations." },
    { role: "A", text: "Très bien, je note." },
    { role: "B", text: "Merci beaucoup pour votre aide." },
    { role: "A", text: "Ravi(e) de faire votre connaissance." },
    { role: "B", text: "Moi aussi. À bientôt !" },
  ],
},
{
  id: "e1-2-po-18",
  title: "En visio",
  context: "Situation : en visio. Thème : la famille.",
  roleA: { title: "L'interlocuteur A", vous: "l'interlocuteur A" },
  roleB: { title: "L'interlocuteur B", vous: "l'interlocuteur B" },
  lines: [
    { role: "A", text: "Bonjour, je peux vous aider ?" },
    { role: "B", text: "Oui, bonjour. J'ai une question." },
    { role: "A", text: "Bien sûr. Dites-moi tout." },
    { role: "B", text: "C'est au sujet de la famille." },
    { role: "A", text: "D'accord. Pouvez-vous préciser ?" },
    { role: "B", text: "Oui, je voudrais plus d'informations." },
    { role: "A", text: "Très bien, je note." },
    { role: "B", text: "Merci beaucoup pour votre aide." },
    { role: "A", text: "Ravi(e) de faire votre connaissance." },
    { role: "B", text: "Moi aussi. À bientôt !" },
  ],
},
{
  id: "e1-2-po-19",
  title: "Au guichet",
  context: "Situation : au guichet. Thème : la famille.",
  roleA: { title: "L'interlocuteur A", vous: "l'interlocuteur A" },
  roleB: { title: "L'interlocuteur B", vous: "l'interlocuteur B" },
  lines: [
    { role: "A", text: "Bonjour, je peux vous aider ?" },
    { role: "B", text: "Oui, bonjour. J'ai une question." },
    { role: "A", text: "Bien sûr. Dites-moi tout." },
    { role: "B", text: "C'est au sujet de la famille." },
    { role: "A", text: "D'accord. Pouvez-vous préciser ?" },
    { role: "B", text: "Oui, je voudrais plus d'informations." },
    { role: "A", text: "Très bien, je note." },
    { role: "B", text: "Merci beaucoup pour votre aide." },
    { role: "A", text: "Ravi(e) de faire votre connaissance." },
    { role: "B", text: "Moi aussi. À bientôt !" },
  ],
},
{
  id: "e1-2-po-20",
  title: "Dans un magasin",
  context: "Situation : dans un magasin. Thème : la famille.",
  roleA: { title: "L'interlocuteur A", vous: "l'interlocuteur A" },
  roleB: { title: "L'interlocuteur B", vous: "l'interlocuteur B" },
  lines: [
    { role: "A", text: "Bonjour, je peux vous aider ?" },
    { role: "B", text: "Oui, bonjour. J'ai une question." },
    { role: "A", text: "Bien sûr. Dites-moi tout." },
    { role: "B", text: "C'est au sujet de la famille." },
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

export const E1_2_PE: ExpressPePrompt[] = [
  {
    id: "e1-2-pe-1",
    title: "Décrire sa famille",
    situation: "Votre correspondant français veut connaître votre famille.",
    instruction: "Écrivez un e-mail : dites combien vous êtes, qui est qui et donnez un détail sur chaque personne.",
    points: ["Le nombre de personnes", "Qui est qui (père, mère, frères…)", "Un détail sur chaque personne"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e1-2-pe-2",
    title: "La photo de famille",
    situation: "Vous envoyez une photo de famille à un ami. Vous écrivez un message avec la photo.",
    instruction: "Décrivez la photo : qui est sur la photo, où vous êtes et pour quelle occasion.",
    points: ["Les personnes sur la photo", "Le lieu", "L'occasion"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e1-2-pe-3",
    title: "Présenter ses parents",
    situation: "Dans votre cahier de français, vous écrivez un texte sur vos parents.",
    instruction: "Présentez vos parents : leur âge, leur profession et ce qu'ils aiment faire.",
    points: ["Leur âge", "Leur profession", "Ce qu'ils aiment faire"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e1-2-pe-4",
    title: "Mon frère ou ma sœur",
    situation: "Votre professeur demande le portrait d'un frère, d'une sœur ou d'un cousin.",
    instruction: "Faites le portrait : son âge, sa situation (marié ou célibataire), sa profession et votre relation.",
    points: ["Son âge et sa situation", "Sa profession", "Votre relation avec lui ou elle"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e1-2-pe-5",
    title: "Annoncer une naissance",
    situation: "Il y a un nouveau bébé dans votre famille. Vous écrivez la nouvelle à un ami.",
    instruction: "Annoncez la naissance : qui est le bébé pour vous, son prénom et comment va la famille.",
    points: ["Qui est le bébé pour vous", "Le prénom et la date", "Comment va la famille"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e1-2-pe-6",
    title: "Les grands-parents",
    situation: "Votre correspondant vous pose des questions sur vos grands-parents.",
    instruction: "Décrivez vos grands-parents : leur âge, où ils habitent et ce que vous faites ensemble.",
    points: ["Leur âge", "Où ils habitent", "Ce que vous faites ensemble"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e1-2-pe-7",
    title: "Une fête de famille",
    situation: "Dimanche, il y a un grand repas de famille chez vos parents.",
    instruction: "Racontez ce repas à un ami : l'occasion, les invités et ce que vous mangez.",
    points: ["L'occasion de la fête", "Les invités (qui est qui)", "Le menu"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e1-2-pe-8",
    title: "La famille au pays",
    situation: "Une partie de votre famille habite loin de vous, dans un autre pays.",
    instruction: "Expliquez : qui habite loin, comment vous communiquez et quand vous les voyez.",
    points: ["Qui habite loin", "Comment vous communiquez", "Quand vous les voyez"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e1-2-pe-9",
    title: "La famille de mon ami",
    situation: "Vous connaissez bien la famille de votre meilleur ami.",
    instruction: "Décrivez la famille de votre ami : combien ils sont, qui est qui et un détail amusant.",
    points: ["Le nombre de personnes", "Qui est qui", "Un détail amusant"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e1-2-pe-10",
    title: "Texte pour l'école",
    situation: "L'école de votre enfant demande un petit texte sur votre famille.",
    instruction: "Présentez votre famille : qui habite à la maison, les âges des enfants et qui peut venir chercher votre enfant.",
    points: ["Qui habite à la maison", "Les âges des enfants", "Qui peut venir chercher l'enfant"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
{
  id: "e1-2-pe-11",
  title: "Texte sur la famille — variante 11",
  situation: "Situation liée au thème « la famille ».",
  instruction: "Écrivez un texte de 50 à 120 mots sur le thème : texte sur la famille — variante 11.",
  points: [
    "Votre introduction",
    "Les détails importants",
    "Une conclusion ou une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e1-2-pe-12",
  title: "Texte sur la famille — variante 12",
  situation: "Situation liée au thème « la famille ».",
  instruction: "Écrivez un texte de 50 à 120 mots sur le thème : texte sur la famille — variante 12.",
  points: [
    "Votre introduction",
    "Les détails importants",
    "Une conclusion ou une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e1-2-pe-13",
  title: "Texte sur la famille — variante 13",
  situation: "Situation liée au thème « la famille ».",
  instruction: "Écrivez un texte de 50 à 120 mots sur le thème : texte sur la famille — variante 13.",
  points: [
    "Votre introduction",
    "Les détails importants",
    "Une conclusion ou une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e1-2-pe-14",
  title: "Texte sur la famille — variante 14",
  situation: "Situation liée au thème « la famille ».",
  instruction: "Écrivez un texte de 50 à 120 mots sur le thème : texte sur la famille — variante 14.",
  points: [
    "Votre introduction",
    "Les détails importants",
    "Une conclusion ou une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e1-2-pe-15",
  title: "Texte sur la famille — variante 15",
  situation: "Situation liée au thème « la famille ».",
  instruction: "Écrivez un texte de 50 à 120 mots sur le thème : texte sur la famille — variante 15.",
  points: [
    "Votre introduction",
    "Les détails importants",
    "Une conclusion ou une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e1-2-pe-16",
  title: "Texte sur la famille — variante 16",
  situation: "Situation liée au thème « la famille ».",
  instruction: "Écrivez un texte de 50 à 120 mots sur le thème : texte sur la famille — variante 16.",
  points: [
    "Votre introduction",
    "Les détails importants",
    "Une conclusion ou une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e1-2-pe-17",
  title: "Texte sur la famille — variante 17",
  situation: "Situation liée au thème « la famille ».",
  instruction: "Écrivez un texte de 50 à 120 mots sur le thème : texte sur la famille — variante 17.",
  points: [
    "Votre introduction",
    "Les détails importants",
    "Une conclusion ou une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e1-2-pe-18",
  title: "Texte sur la famille — variante 18",
  situation: "Situation liée au thème « la famille ».",
  instruction: "Écrivez un texte de 50 à 120 mots sur le thème : texte sur la famille — variante 18.",
  points: [
    "Votre introduction",
    "Les détails importants",
    "Une conclusion ou une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e1-2-pe-19",
  title: "Texte sur la famille — variante 19",
  situation: "Situation liée au thème « la famille ».",
  instruction: "Écrivez un texte de 50 à 120 mots sur le thème : texte sur la famille — variante 19.",
  points: [
    "Votre introduction",
    "Les détails importants",
    "Une conclusion ou une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e1-2-pe-20",
  title: "Texte sur la famille — variante 20",
  situation: "Situation liée au thème « la famille ».",
  instruction: "Écrivez un texte de 50 à 120 mots sur le thème : texte sur la famille — variante 20.",
  points: [
    "Votre introduction",
    "Les détails importants",
    "Une conclusion ou une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
}
];
