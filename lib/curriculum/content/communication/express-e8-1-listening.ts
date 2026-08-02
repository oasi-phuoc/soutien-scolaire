import { buildExpressPool, type ExpressRawQ } from "./express-listening-helpers";
import type { ExpressListeningAudio } from "./express-e1-1-listening";
import { A1 } from "./express-lesson-factory";

function q(item: ExpressRawQ): ExpressRawQ { return item; }

const TR_227 = `- Mais… regarde Léa ! L'homme, grand et blond, là-bas, c'est notre ami Yann !
- Mais oui, c'est Yann ! Il est avec une jeune femme rousse. C'est sa sœur ?
- Mais non, c'est sa femme ! Yann est marié et ils ont un fils, Sacha.
- Sa femme s'appelle comment ?
- Rosa.
- Rosa… Elle est espagnole ?
- Non, elle est brésilienne.
- Et leur fils, il a quel âge ?
- Il est petit, il a un an.
- Pour notre apéro samedi, on invite Yann et sa femme, d'accord ?
- Ah oui, volontiers.
- Yann !`;

const POOL_227 = buildExpressPool("e8-1-227", [
  q({
    id: "227-q1",
    textQ: "Comment est Yann ?",
    text: ["Grand et blond", "Petit et brun", "Grand et roux"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'homme, _________ et blond, là-bas, c'est notre ami Yann !",
    fill: "grand",
    vfQ: "Yann est petit et brun.",
    vfC: 1,
  }),
  q({
    id: "227-q2",
    textQ: "Qui est la jeune femme rousse avec Yann ?",
    text: ["Sa femme", "Sa sœur", "Sa mère"],
    textC: 0,
    img: ["femme", "fille", "maman"],
    imgC: 0,
    fillQ: "Ce n'est pas sa sœur, c'est sa _________ !",
    fill: "femme",
    vfQ: "La jeune femme rousse est la sœur de Yann.",
    vfC: 1,
  }),
  q({
    id: "227-q3",
    textQ: "Est-ce que Yann est marié ?",
    text: ["Oui, il est marié", "Non, il est célibataire", "On ne sait pas"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Yann est _________ et ils ont un fils.",
    fill: "marié",
    vfQ: "Yann est marié.",
    vfC: 0,
  }),
  q({
    id: "227-q4",
    textQ: "Quelle est la nationalité de Rosa ?",
    text: ["Brésilienne", "Espagnole", "Française"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Non, elle est _________.",
    fill: "brésilienne",
    vfQ: "Rosa est espagnole.",
    vfC: 1,
  }),
  q({
    id: "227-q5",
    textQ: "Quel âge a le fils de Yann ?",
    text: ["Un an", "Cinq ans", "Dix ans"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il est petit, il a _________ an.",
    fill: "un",
    fillA: ["1"],
    vfQ: "Le fils de Yann est petit.",
    vfC: 0,
  }),
  q({
    id: "227-q6",
    textQ: "Pour quand veulent-ils inviter Yann et sa femme ?",
    text: ["Pour un apéro samedi", "Pour un dîner dimanche", "Pour un déjeuner lundi"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pour notre _________ samedi, on invite Yann et sa femme.",
    fill: "apéro",
    fillA: ["apero"],
    vfQ: "Yann accepte l'invitation à l'apéro.",
    vfC: 2,
  }),
]);

const TR_228 = `- Alors ? Comment ça se passe dans ton nouvel immeuble ? Raconte…
- Mon appartement est grand et lumineux, il y a une belle terrasse, le quartier est calme…
- Super ! Tout va bien alors !
- Non, j'ai des problèmes d'électricité dans la cuisine et l'électricien ne trouve pas la panne. Aujourd'hui les toilettes sont bouchées et il y a une fuite d'eau dans la salle de bains !
- Ah bon ? Mais l'immeuble est neuf, non ?
- Non, il est ancien…
- Et les voisins, ils sont sympas ?
- Oui, ça va ! Ils me disent bonjour et on parle souvent dans le hall.
- Et il y a un règlement ?
- Oui, il faut tenir les chiens en laisse, ranger son vélo dans le local et il est interdit de fumer dans les couloirs.`;

const POOL_228 = buildExpressPool("e8-1-228", [
  q({
    id: "228-q1",
    textQ: "Comment est l'appartement ?",
    text: ["Grand et lumineux", "Petit et sombre", "Vieux et bruyant"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Mon appartement est grand et _________.",
    fill: "lumineux",
    vfQ: "Le prix du loyer est mentionné dans la conversation.",
    vfC: 2,
  }),
  q({
    id: "228-q2",
    textQ: "Où y a-t-il des problèmes d'électricité ?",
    text: ["Dans la cuisine", "Dans les toilettes", "Dans le couloir"],
    textC: 0,
    img: ["cuisiner-ensemble", "demander-toilettes", "couloir"],
    imgC: 0,
    fillQ: "J'ai des problèmes d'électricité dans la _________.",
    fill: "cuisine",
    vfQ: "L'électricien a trouvé la panne.",
    vfC: 1,
  }),
  q({
    id: "228-q3",
    textQ: "Qu'est-ce qu'il y a dans la salle de bains ?",
    text: ["Une fuite d'eau", "Une panne d'électricité", "Une fenêtre cassée"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il y a une fuite d'_________ dans la salle de bains.",
    fill: "eau",
    vfQ: "Il y a une fuite d'eau dans la salle de bains.",
    vfC: 0,
  }),
  q({
    id: "228-q4",
    textQ: "Est-ce que l'immeuble est neuf ?",
    text: ["Non, il est ancien", "Oui, il est neuf", "On ne sait pas"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Non, il est _________…",
    fill: "ancien",
    vfQ: "L'immeuble est neuf.",
    vfC: 1,
  }),
  q({
    id: "228-q5",
    textQ: "Comment sont les voisins ?",
    text: ["Sympas", "Désagréables", "Bruyants"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Ils me disent bonjour et on parle souvent dans le _________.",
    fill: "hall",
    vfQ: "Les voisins sont sympas.",
    vfC: 0,
  }),
  q({
    id: "228-q6",
    textQ: "Que dit le règlement pour les chiens ?",
    text: ["Il faut les tenir en laisse", "Ils sont interdits", "Ils peuvent jouer dans le hall"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il faut tenir les chiens en _________.",
    fill: "laisse",
    vfQ: "Il faut ranger son vélo dans le local.",
    vfC: 0,
  }),
  q({
    id: "228-q7",
    textQ: "Où est-il interdit de fumer ?",
    text: ["Dans les couloirs", "Sur la terrasse", "Dans la cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il est interdit de _________ dans les couloirs.",
    fill: "fumer",
    vfQ: "On peut fumer dans les couloirs.",
    vfC: 1,
  }),
]);

const TR_229 = `- Bonjour, je m'appelle Tim et je suis le nouveau serveur.
- Ah oui ! Bienvenue, je m'appelle Natasha. Super, tu es en avance !
- Oui… je peux venir plus tard demain ?
- Non, les serveurs commencent toujours à 10 heures.
- Et la journée de travail est organisée comment ?
- Le matin, quand on arrive, on prend un café avec les collègues et après, on se prépare pour ouvrir le restaurant pour le déjeuner.
- Et l'après-midi ?
- On prépare les tables pour le dîner.
- Ah bon, on ne fait pas de pause ?... Et le soir, on finit à quelle heure ?
- À 23 heures, 23 heures 30. On travaille tard. D'habitude, je me couche à 1 heure du matin.
- Ouh là là, mais tu te reposes quand ?
- Le lundi, quand le restaurant est fermé.`;

const POOL_229 = buildExpressPool("e8-1-229", [
  q({
    id: "229-q1",
    textQ: "Quel est le métier de Tim ?",
    text: ["Serveur", "Cuisinier", "Chauffeur"],
    textC: 0,
    img: ["serveur", "cuisinier", "chauffeur"],
    imgC: 0,
    fillQ: "Je m'appelle Tim et je suis le nouveau _________.",
    fill: "serveur",
    vfQ: "Tim est le nouveau cuisinier.",
    vfC: 1,
  }),
  q({
    id: "229-q2",
    textQ: "À quelle heure les serveurs commencent-ils ?",
    text: ["À 10 heures", "À 9 heures", "À midi"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les serveurs commencent toujours à _________ heures.",
    fill: "dix",
    fillA: ["10"],
    vfQ: "Les serveurs commencent toujours à 10 heures.",
    vfC: 0,
  }),
  q({
    id: "229-q3",
    textQ: "Que font les serveurs le matin en arrivant ?",
    text: ["Ils prennent un café", "Ils préparent le dîner", "Ils nettoient la salle"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le matin, on prend un _________ avec les collègues.",
    fill: "café",
    fillA: ["cafe"],
    vfQ: "Tim est en avance aujourd'hui.",
    vfC: 0,
  }),
  q({
    id: "229-q4",
    textQ: "Que font les serveurs l'après-midi ?",
    text: ["Ils préparent les tables pour le dîner", "Ils font une longue pause", "Ils rentrent à la maison"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'après-midi, on prépare les tables pour le _________.",
    fill: "dîner",
    fillA: ["diner"],
    vfQ: "L'après-midi, les serveurs font une longue pause.",
    vfC: 1,
  }),
  q({
    id: "229-q5",
    textQ: "À quelle heure finit le travail le soir ?",
    text: ["Vers 23 heures", "Vers 20 heures", "Vers 18 heures"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le soir, on finit à _________ heures ou 23 heures 30.",
    fill: "23",
    fillA: ["vingt-trois"],
    vfQ: "Le soir, le travail finit vers 23 heures.",
    vfC: 0,
  }),
  q({
    id: "229-q6",
    textQ: "Quand Natasha se repose-t-elle ?",
    text: ["Le lundi", "Le samedi", "Le dimanche"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le lundi, quand le restaurant est _________.",
    fill: "fermé",
    fillA: ["ferme"],
    vfQ: "Le restaurant est fermé le dimanche.",
    vfC: 1,
  }),
  q({
    id: "229-q7",
    textQ: "Où travaillent Tim et Natasha ?",
    text: ["Dans un restaurant", "Dans un hôtel", "Dans un café"],
    textC: 0,
    img: ["restaurant", "hôtel", "café"],
    imgC: 0,
    fillQ: "On se prépare pour ouvrir le _________ pour le déjeuner.",
    fill: "restaurant",
    vfQ: "Le salaire de Tim est mentionné.",
    vfC: 2,
  }),
]);

const TR_230 = `- Salut Émilie ! Tu vas bien ?
- Salut Théo, ça va et toi ? Qu'est-ce que tu fais en ville ?
- Eh bien, ce matin je dois acheter des vêtements pour l'hiver et à midi, je déjeune au restaurant avec mon frère. Et toi ?
- Moi, j'achète une baguette et je rentre à la maison. Et vous allez dans quel restaurant ?
- À La Table du chef, la salle est belle et la viande est excellente.
- Moi je suis végétarienne, alors je préfère aller Chez Léa… et les quiches aux légumes sont délicieuses !
- C'est bien aussi ! Et pour les vêtements… tu sais où je peux acheter un beau pantalon et un pull en laine ?
- Oui, va chez Zaro. Il y a aussi de jolis accessoires, des bonnets et des écharpes en laine, des ceintures en cuir…
- C'est une super idée, merci !
- Je t'en prie, au revoir !`;

const POOL_230 = buildExpressPool("e8-1-230", [
  q({
    id: "230-q1",
    textQ: "Que doit acheter Théo ce matin ?",
    text: ["Des vêtements pour l'hiver", "Une baguette", "Des légumes"],
    textC: 0,
    img: ["vêtements", "pain", "légume"],
    imgC: 0,
    fillQ: "Ce matin, je dois acheter des _________ pour l'hiver.",
    fill: "vêtements",
    fillA: ["vetements"],
    vfQ: "Théo achète des vêtements pour l'été.",
    vfC: 1,
  }),
  q({
    id: "230-q2",
    textQ: "Avec qui Théo déjeune-t-il à midi ?",
    text: ["Avec son frère", "Avec sa sœur", "Avec sa mère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À midi, je déjeune au restaurant avec mon _________.",
    fill: "frère",
    fillA: ["frere"],
    vfQ: "Théo déjeune avec son frère à midi.",
    vfC: 0,
  }),
  q({
    id: "230-q3",
    textQ: "Qu'est-ce qu'Émilie achète ?",
    text: ["Une baguette", "Des vêtements", "De la viande"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Moi, j'achète une _________ et je rentre à la maison.",
    fill: "baguette",
    vfQ: "Émilie rentre à la maison après ses courses.",
    vfC: 0,
  }),
  q({
    id: "230-q4",
    textQ: "Pourquoi Émilie préfère-t-elle aller Chez Léa ?",
    text: ["Elle est végétarienne", "C'est moins cher", "C'est à côté de chez elle"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Moi je suis _________, alors je préfère aller Chez Léa.",
    fill: "végétarienne",
    fillA: ["vegetarienne"],
    vfQ: "Émilie mange de la viande.",
    vfC: 1,
  }),
  q({
    id: "230-q5",
    textQ: "Comment est la viande à La Table du chef ?",
    text: ["Excellente", "Mauvaise", "Trop cuite"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La salle est belle et la viande est _________.",
    fill: "excellente",
    vfQ: "À La Table du chef, la salle est belle.",
    vfC: 0,
  }),
  q({
    id: "230-q6",
    textQ: "Qu'est-ce qu'il y a aussi chez Zaro ?",
    text: ["Des bonnets et des écharpes", "Des chaussures et des sacs", "Des livres et des stylos"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Des bonnets et des écharpes en _________.",
    fill: "laine",
    vfQ: "Le prix du pantalon est mentionné.",
    vfC: 2,
  }),
  q({
    id: "230-q7",
    textQ: "Quel accessoire est en cuir chez Zaro ?",
    text: ["La ceinture", "Le bonnet", "L'écharpe"],
    textC: 0,
    img: ["ceinture", "bonnet", "écharpe"],
    imgC: 0,
    fillQ: "Il y a des ceintures en _________.",
    fill: "cuir",
    vfQ: "Chez Zaro, les ceintures sont en laine.",
    vfC: 1,
  }),
]);

const TR_231 = `- Allô Mathilde ? C'est Matthieu.
- Bonjour Matthieu ! Tu es où ?
- Je suis à la maison. Je suis malade et je ne peux pas venir travailler aujourd'hui.
- Ah bon ! Mais qu'est-ce que tu as ?
- J'ai mal à la gorge et je tousse. C'est un gros rhume, je pense…
- Tu as de la fièvre ?
- Oui, j'ai 39 °C… et j'ai mal à la tête.
- Alors c'est la grippe !
- Ouh là là ! Je dois voir un médecin alors ?
- Oui ! Prends un rendez-vous pour une téléconsultation. Ce soir, je dois passer à la pharmacie, je peux prendre ton ordonnance et acheter tes médicaments.
- Merci beaucoup Mathilde, tu es vraiment très sympa !`;

const POOL_231 = buildExpressPool("e8-1-231", [
  q({
    id: "231-q1",
    textQ: "Où est Matthieu ?",
    text: ["À la maison", "À l'hôpital", "Au bureau"],
    textC: 0,
    img: ["maison", "hôpital", "bureau"],
    imgC: 0,
    fillQ: "Je suis à la _________.",
    fill: "maison",
    vfQ: "Matthieu est au travail.",
    vfC: 1,
  }),
  q({
    id: "231-q2",
    textQ: "Pourquoi Matthieu ne peut-il pas venir travailler ?",
    text: ["Il est malade", "Il est en vacances", "Il a un rendez-vous"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je suis _________ et je ne peux pas venir travailler.",
    fill: "malade",
    vfQ: "Matthieu est en vacances.",
    vfC: 1,
  }),
  q({
    id: "231-q3",
    textQ: "Où Matthieu a-t-il mal ?",
    text: ["À la gorge et à la tête", "Au ventre", "Au dos"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'ai mal à la _________ et je tousse.",
    fill: "gorge",
    vfQ: "Matthieu tousse.",
    vfC: 0,
  }),
  q({
    id: "231-q4",
    textQ: "Quelle température Matthieu a-t-il ?",
    text: ["39 °C", "37 °C", "40 °C"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Oui, j'ai _________ °C… et j'ai mal à la tête.",
    fill: "39",
    fillA: ["trente-neuf"],
    vfQ: "Matthieu n'a pas de fièvre.",
    vfC: 1,
  }),
  q({
    id: "231-q5",
    textQ: "Selon Mathilde, qu'est-ce que Matthieu a ?",
    text: ["La grippe", "Un gros rhume", "Une angine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Alors c'est la _________ !",
    fill: "grippe",
    vfQ: "Mathilde pense que c'est la grippe.",
    vfC: 0,
  }),
  q({
    id: "231-q6",
    textQ: "Quel rendez-vous Matthieu doit-il prendre ?",
    text: ["Une téléconsultation", "Une visite à domicile", "Un rendez-vous à l'hôpital"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Prends un rendez-vous pour une _________.",
    fill: "téléconsultation",
    fillA: ["teleconsultation"],
    vfQ: "Le prix de la téléconsultation est mentionné.",
    vfC: 2,
  }),
  q({
    id: "231-q7",
    textQ: "Que propose Mathilde ce soir ?",
    text: ["Acheter les médicaments de Matthieu", "Apporter un repas", "Appeler le médecin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Ce soir, je dois passer à la _________.",
    fill: "pharmacie",
    vfQ: "Mathilde propose d'acheter les médicaments de Matthieu.",
    vfC: 0,
  }),
]);

const TR_232 = `- Alors, pour notre voyage, on prend le train ou l'avion ?
- Le voyage chez mes parents en Provence ?
- Mais non, pas pour le week-end en Provence ! Pour nos vacances au Portugal en juillet.
- Ah oui, bien sûr ! On peut prendre le bus peut-être ?
- Ah non !
- Pourquoi non ? Tu n'aimes pas le bus ?
- Le trajet est trop long. C'est loin. Je préfère le train, il y a une voiture-bar.
- En avion, le trajet Paris-Porto dure 2 heures, c'est rapide.
- En avion, c'est compliqué. Il faut réserver son billet, faire une carte d'embarquement, enregistrer ses bagages, passer le contrôle de sûreté à l'aéroport…
- En train aussi, il faut réserver sa place. Et ce n'est pas direct.
- Bon, il faut choisir, on ne peut pas aller au Portugal à pied !`;

const POOL_232 = buildExpressPool("e8-1-232", [
  q({
    id: "232-q1",
    textQ: "Où vont-ils en vacances en juillet ?",
    text: ["Au Portugal", "En Provence", "En Italie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pour nos vacances au Portugal en _________.",
    fill: "juillet",
    vfQ: "Ils vont au Portugal pour le week-end.",
    vfC: 1,
  }),
  q({
    id: "232-q2",
    textQ: "Pourquoi le bus n'est-il pas une bonne idée ?",
    text: ["Le trajet est trop long", "C'est trop cher", "Il n'y a pas de bus"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le trajet est trop _________. C'est loin.",
    fill: "long",
    vfQ: "Le trajet en bus est trop long.",
    vfC: 0,
  }),
  q({
    id: "232-q3",
    textQ: "Pourquoi l'un des deux préfère-t-il le train ?",
    text: ["Il y a une voiture-bar", "C'est moins cher", "C'est plus rapide"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je préfère le train, il y a une voiture-_________.",
    fill: "bar",
    vfQ: "Le train pour le Portugal est direct.",
    vfC: 1,
  }),
  q({
    id: "232-q4",
    textQ: "Combien de temps dure le trajet Paris-Porto en avion ?",
    text: ["2 heures", "5 heures", "10 heures"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "En avion, le trajet Paris-Porto dure _________ heures.",
    fill: "deux",
    fillA: ["2"],
    vfQ: "En avion, le trajet est rapide.",
    vfC: 0,
  }),
  q({
    id: "232-q5",
    textQ: "Que faut-il enregistrer à l'aéroport ?",
    text: ["Les bagages", "Les billets", "Les passeports"],
    textC: 0,
    img: ["valise", "billet", "passeport"],
    imgC: 0,
    fillQ: "Il faut enregistrer ses _________.",
    fill: "bagages",
    vfQ: "En avion, il faut passer le contrôle de sûreté.",
    vfC: 0,
  }),
  q({
    id: "232-q6",
    textQ: "Comment ne peuvent-ils pas aller au Portugal ?",
    text: ["À pied", "En train", "En avion"],
    textC: 0,
    img: ["pied", "train", "avion"],
    imgC: 0,
    fillQ: "On ne peut pas aller au Portugal à _________ !",
    fill: "pied",
    vfQ: "Ils ont déjà acheté leurs billets.",
    vfC: 2,
  }),
]);

const TR_233 = `- Alors, vous faites quoi cet été ?
- En juillet, on va au festival Musilac à Aix-les-Bains. Ça dure 4 jours. On adore !
- C'est un festival de théâtre ?
- Non, c'est un festival de musique au bord du lac. Le soir, on écoute des concerts et dans la journée, on fait des visites guidées dans la région.
- Et les musiciens, ils sont français ?
- Oui, il y a des Français, mais aussi des Italiens, des Anglais… toutes les nationalités !
- Vous allez à l'hôtel ou au camping ?
- On va dans un petit hôtel en demi-pension. Et vous, vous faites quoi cet été ?
- On part deux semaines faire du camping en Corse. Les enfants veulent faire du canyoning et de l'escalade, et nous, nous voulons nous reposer !
- C'est super !`;

const POOL_233 = buildExpressPool("e8-1-233", [
  q({
    id: "233-q1",
    textQ: "Quel type de festival est Musilac ?",
    text: ["Un festival de musique", "Un festival de théâtre", "Un festival de cinéma"],
    textC: 0,
    img: ["musique", "théâtre", "cinéma"],
    imgC: 0,
    fillQ: "C'est un festival de _________ au bord du lac.",
    fill: "musique",
    vfQ: "Musilac est un festival de théâtre.",
    vfC: 1,
  }),
  q({
    id: "233-q2",
    textQ: "Combien de jours dure le festival ?",
    text: ["4 jours", "2 jours", "10 jours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Ça dure _________ jours.",
    fill: "quatre",
    fillA: ["4"],
    vfQ: "Le festival dure quatre jours.",
    vfC: 0,
  }),
  q({
    id: "233-q3",
    textQ: "Où se passe le festival Musilac ?",
    text: ["Au bord du lac", "À la montagne", "À la plage"],
    textC: 0,
    img: ["lac", "montagne", "plage"],
    imgC: 0,
    fillQ: "C'est un festival de musique au bord du _________.",
    fill: "lac",
    vfQ: "Le festival a lieu au bord d'un lac.",
    vfC: 0,
  }),
  q({
    id: "233-q4",
    textQ: "Que font-ils le soir au festival ?",
    text: ["Ils écoutent des concerts", "Ils font des visites guidées", "Ils font de l'escalade"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le soir, on écoute des _________.",
    fill: "concerts",
    vfQ: "Le prix des billets du festival est mentionné.",
    vfC: 2,
  }),
  q({
    id: "233-q5",
    textQ: "Où logent-ils pendant le festival ?",
    text: ["Dans un petit hôtel", "Au camping", "Chez des amis"],
    textC: 0,
    img: ["hôtel", "tente", "maison"],
    imgC: 0,
    fillQ: "On va dans un petit hôtel en demi-_________.",
    fill: "pension",
    vfQ: "Ils logent au camping pendant le festival.",
    vfC: 1,
  }),
  q({
    id: "233-q6",
    textQ: "Est-ce que les musiciens sont tous français ?",
    text: ["Non, il y a toutes les nationalités", "Oui, ils sont tous français", "Non, ils sont tous italiens"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il y a toutes les _________ !",
    fill: "nationalités",
    fillA: ["nationalites"],
    vfQ: "Tous les musiciens du festival sont français.",
    vfC: 1,
  }),
  q({
    id: "233-q7",
    textQ: "Que veulent faire les enfants en Corse ?",
    text: ["Du canyoning et de l'escalade", "Du ski et du snowboard", "De la natation"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les enfants veulent faire du canyoning et de l'_________.",
    fill: "escalade",
    vfQ: "Les parents veulent se reposer.",
    vfC: 0,
  }),
  q({
    id: "233-q8",
    textQ: "Combien de temps dure le voyage en Corse ?",
    text: ["Deux semaines", "Quatre jours", "Un mois"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "On part _________ semaines faire du camping en Corse.",
    fill: "deux",
    fillA: ["2"],
    vfQ: "La deuxième famille va camper en Corse.",
    vfC: 0,
  }),
]);

export const E8_1_TRAINING: ExpressListeningAudio[] = [

];

export const E8_1_EVAL: ExpressListeningAudio[] = [
{
  id: "e8-1-227",
  audioSrc: A1(227),
  audioLabel: "Audio 227",
  transcript: TR_227,
  instruction: "Écoutez l'enregistrement et répondez aux questions.",
  pool: POOL_227,
  questionCount: 5,
},
{
  id: "e8-1-228",
  audioSrc: A1(228),
  audioLabel: "Audio 228",
  transcript: TR_228,
  instruction: "Écoutez l'enregistrement et répondez aux questions.",
  pool: POOL_228,
  questionCount: 5,
},
{
  id: "e8-1-229",
  audioSrc: A1(229),
  audioLabel: "Audio 229",
  transcript: TR_229,
  instruction: "Écoutez l'enregistrement et répondez aux questions.",
  pool: POOL_229,
  questionCount: 5,
},
{
  id: "e8-1-230",
  audioSrc: A1(230),
  audioLabel: "Audio 230",
  transcript: TR_230,
  instruction: "Écoutez l'enregistrement et répondez aux questions.",
  pool: POOL_230,
  questionCount: 5,
},
{
  id: "e8-1-231",
  audioSrc: A1(231),
  audioLabel: "Audio 231",
  transcript: TR_231,
  instruction: "Écoutez l'enregistrement et répondez aux questions.",
  pool: POOL_231,
  questionCount: 5,
},
{
  id: "e8-1-232",
  audioSrc: A1(232),
  audioLabel: "Audio 232",
  transcript: TR_232,
  instruction: "Écoutez l'enregistrement et répondez aux questions.",
  pool: POOL_232,
  questionCount: 5,
},
{
  id: "e8-1-233",
  audioSrc: A1(233),
  audioLabel: "Audio 233",
  transcript: TR_233,
  instruction: "Écoutez l'enregistrement et répondez aux questions.",
  pool: POOL_233,
  questionCount: 5,
}
];
