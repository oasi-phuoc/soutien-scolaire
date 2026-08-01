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
    format: "text",
    textQ: "Quel nom entendez-vous dans l'audio ?",
    text: ["Mais", "Marie", "Paul"],
    textC: 0,
    img: ["Maison", "Téléphone", "Carte"],
    imgC: 0,
    fillQ: "_________",
    fill: "Mais",
  }),
  q({
    id: "227-q2",
    format: "image",
    textQ: "Quel nom entendez-vous dans l'audio ?",
    text: ["Léa", "Marie", "Paul"],
    textC: 0,
    img: ["Léa", "Marie", "Paul"],
    imgC: 0,
    fillQ: "_________",
    fill: "Léa",
  }),
  q({
    id: "227-q3",
    format: "fill",
    textQ: "Quel nom entendez-vous dans l'audio ?",
    text: ["Yann", "Marie", "Paul"],
    textC: 0,
    img: ["Yann", "Marie", "Paul"],
    imgC: 0,
    fillQ: "Quel nom entendez-vous dans l'audio : _________.",
    fill: "Yann",
  }),
  q({
    id: "227-q4",
    format: "vf",
    textQ: "Marié(e) est mentionné dans l'audio.",
    text: ["Vrai", "Faux", "On ne sait pas"],
    textC: 0,
    img: ["Maison", "Téléphone", "Carte"],
    imgC: 0,
    fillQ: "Réponse : _________.",
    fill: "Vrai",
    vfQ: "Marié(e) est mentionné dans l'audio.",
    vfC: 0,
  }),
  q({
    id: "227-q5",
    format: "text",
    textQ: "Quelle fête ?",
    text: ["Un apéro", "Un mariage", "Un concert"],
    textC: 0,
    img: ["Maison", "Téléphone", "Carte"],
    imgC: 0,
    fillQ: "_________",
    fill: "Un apéro",
  }),
  q({
    id: "227-q6",
    format: "vf",
    textQ: "Mais… regarde Léa",
    text: ["Vrai", "Faux", "On ne sait pas"],
    textC: 0,
    img: ["Maison", "Téléphone", "Carte"],
    imgC: 0,
    fillQ: "Réponse : _________.",
    fill: "Vrai",
    vfQ: "Mais… regarde Léa",
    vfC: 0,
  }),
  q({
    id: "227-q7",
    format: "vf",
    textQ: "Il n'y a aucune information dans l'audio.",
    text: ["Vrai", "Faux", "On ne sait pas"],
    textC: 1,
    img: ["Maison", "Téléphone", "Carte"],
    imgC: 0,
    fillQ: "Réponse : _________.",
    fill: "Faux",
    vfQ: "Il n'y a aucune information dans l'audio.",
    vfC: 1,
  }),
  q({
    id: "227-q8",
    format: "vf",
    textQ: "L'homme, grand et blond, là-bas, c'est notre ami Yann",
    text: ["Vrai", "Faux", "On ne sait pas"],
    textC: 0,
    img: ["Maison", "Téléphone", "Carte"],
    imgC: 0,
    fillQ: "Réponse : _________.",
    fill: "Vrai",
    vfQ: "L'homme, grand et blond, là-bas, c'est notre ami Yann",
    vfC: 0,
  })
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
    format: "text",
    textQ: "Quel nom entendez-vous dans l'audio ?",
    text: ["Raconte", "Marie", "Paul"],
    textC: 0,
    img: ["Maison", "Téléphone", "Carte"],
    imgC: 0,
    fillQ: "_________",
    fill: "Raconte",
  }),
  q({
    id: "228-q2",
    format: "image",
    textQ: "Quel nom entendez-vous dans l'audio ?",
    text: ["Mon", "Marie", "Paul"],
    textC: 0,
    img: ["Mon", "Marie", "Paul"],
    imgC: 0,
    fillQ: "_________",
    fill: "Mon",
  }),
  q({
    id: "228-q3",
    format: "fill",
    textQ: "Quel nom entendez-vous dans l'audio ?",
    text: ["Tout", "Marie", "Paul"],
    textC: 0,
    img: ["Tout", "Marie", "Paul"],
    imgC: 0,
    fillQ: "Quel nom entendez-vous dans l'audio : _________.",
    fill: "Tout",
  }),
  q({
    id: "228-q4",
    format: "vf",
    textQ: "Un appartement est mentionné dans l'audio.",
    text: ["Vrai", "Faux", "On ne sait pas"],
    textC: 0,
    img: ["Maison", "Téléphone", "Carte"],
    imgC: 0,
    fillQ: "Réponse : _________.",
    fill: "Vrai",
    vfQ: "Un appartement est mentionné dans l'audio.",
    vfC: 0,
  }),
  q({
    id: "228-q5",
    format: "text",
    textQ: "Quel problème ?",
    text: ["L'électricité", "Le gaz", "Internet"],
    textC: 0,
    img: ["Maison", "Téléphone", "Carte"],
    imgC: 0,
    fillQ: "_________",
    fill: "L'électricité",
  }),
  q({
    id: "228-q6",
    format: "vf",
    textQ: "Comment ça se passe dans ton nouvel immeuble",
    text: ["Vrai", "Faux", "On ne sait pas"],
    textC: 0,
    img: ["Maison", "Téléphone", "Carte"],
    imgC: 0,
    fillQ: "Réponse : _________.",
    fill: "Vrai",
    vfQ: "Comment ça se passe dans ton nouvel immeuble",
    vfC: 0,
  }),
  q({
    id: "228-q7",
    format: "vf",
    textQ: "Il n'y a aucune information dans l'audio.",
    text: ["Vrai", "Faux", "On ne sait pas"],
    textC: 1,
    img: ["Maison", "Téléphone", "Carte"],
    imgC: 0,
    fillQ: "Réponse : _________.",
    fill: "Faux",
    vfQ: "Il n'y a aucune information dans l'audio.",
    vfC: 1,
  }),
  q({
    id: "228-q8",
    format: "vf",
    textQ: "Mon appartement est grand et lumineux, il y a une belle terrasse, le quartier est calme…",
    text: ["Vrai", "Faux", "On ne sait pas"],
    textC: 0,
    img: ["Maison", "Téléphone", "Carte"],
    imgC: 0,
    fillQ: "Réponse : _________.",
    fill: "Vrai",
    vfQ: "Mon appartement est grand et lumineux, il y a une belle terrasse, le quartier est calme…",
    vfC: 0,
  })
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
    format: "text",
    textQ: "Quel nom entendez-vous dans l'audio ?",
    text: ["Tim", "Marie", "Paul"],
    textC: 0,
    img: ["Maison", "Téléphone", "Carte"],
    imgC: 0,
    fillQ: "_________",
    fill: "Tim",
  }),
  q({
    id: "229-q2",
    format: "image",
    textQ: "Quel nom entendez-vous dans l'audio ?",
    text: ["Bienvenue", "Marie", "Paul"],
    textC: 0,
    img: ["Bienvenue", "Marie", "Paul"],
    imgC: 0,
    fillQ: "_________",
    fill: "Bienvenue",
  }),
  q({
    id: "229-q3",
    format: "fill",
    textQ: "Quel nom entendez-vous dans l'audio ?",
    text: ["Natasha", "Marie", "Paul"],
    textC: 0,
    img: ["Natasha", "Marie", "Paul"],
    imgC: 0,
    fillQ: "Quel nom entendez-vous dans l'audio : _________.",
    fill: "Natasha",
  }),
  q({
    id: "229-q4",
    format: "vf",
    textQ: "10 est mentionné dans l'audio.",
    text: ["Vrai", "Faux", "On ne sait pas"],
    textC: 0,
    img: ["Maison", "Téléphone", "Carte"],
    imgC: 0,
    fillQ: "Réponse : _________.",
    fill: "Vrai",
    vfQ: "10 est mentionné dans l'audio.",
    vfC: 0,
  }),
  q({
    id: "229-q5",
    format: "text",
    textQ: "Quel chiffre ou horaire est cité ?",
    text: ["23", "10 heures", "20 €"],
    textC: 0,
    img: ["Maison", "Téléphone", "Carte"],
    imgC: 0,
    fillQ: "_________",
    fill: "23",
  }),
  q({
    id: "229-q6",
    format: "image",
    textQ: "Où sont-ils ?",
    text: ["Au restaurant", "À la gare", "À la plage"],
    textC: 0,
    img: ["Au restaurant", "À la gare", "À la plage"],
    imgC: 0,
    fillQ: "_________",
    fill: "Au restaurant",
  }),
  q({
    id: "229-q7",
    format: "vf",
    textQ: "Bonjour, je m'appelle Tim et je suis le nouveau serveur",
    text: ["Vrai", "Faux", "On ne sait pas"],
    textC: 0,
    img: ["Maison", "Téléphone", "Carte"],
    imgC: 0,
    fillQ: "Réponse : _________.",
    fill: "Vrai",
    vfQ: "Bonjour, je m'appelle Tim et je suis le nouveau serveur",
    vfC: 0,
  }),
  q({
    id: "229-q8",
    format: "vf",
    textQ: "Il n'y a aucune information dans l'audio.",
    text: ["Vrai", "Faux", "On ne sait pas"],
    textC: 1,
    img: ["Maison", "Téléphone", "Carte"],
    imgC: 0,
    fillQ: "Réponse : _________.",
    fill: "Faux",
    vfQ: "Il n'y a aucune information dans l'audio.",
    vfC: 1,
  })
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
    format: "text",
    textQ: "Quel nom entendez-vous dans l'audio ?",
    text: ["Émilie", "Marie", "Paul"],
    textC: 0,
    img: ["Maison", "Téléphone", "Carte"],
    imgC: 0,
    fillQ: "_________",
    fill: "Émilie",
  }),
  q({
    id: "230-q2",
    format: "image",
    textQ: "Quel nom entendez-vous dans l'audio ?",
    text: ["Théo", "Marie", "Paul"],
    textC: 0,
    img: ["Théo", "Marie", "Paul"],
    imgC: 0,
    fillQ: "_________",
    fill: "Théo",
  }),
  q({
    id: "230-q3",
    format: "fill",
    textQ: "Quel nom entendez-vous dans l'audio ?",
    text: ["Moi", "Marie", "Paul"],
    textC: 0,
    img: ["Moi", "Marie", "Paul"],
    imgC: 0,
    fillQ: "Quel nom entendez-vous dans l'audio : _________.",
    fill: "Moi",
  }),
  q({
    id: "230-q4",
    format: "vf",
    textQ: "Au restaurant est mentionné dans l'audio.",
    text: ["Vrai", "Faux", "On ne sait pas"],
    textC: 0,
    img: ["Maison", "Téléphone", "Carte"],
    imgC: 0,
    fillQ: "Réponse : _________.",
    fill: "Vrai",
    vfQ: "Au restaurant est mentionné dans l'audio.",
    vfC: 0,
  }),
  q({
    id: "230-q5",
    format: "text",
    textQ: "Que dit la personne ?",
    text: ["Elle/il est végétarien(ne)", "Elle/il mange de la viande", "Elle/il boit du vin"],
    textC: 0,
    img: ["Maison", "Téléphone", "Carte"],
    imgC: 0,
    fillQ: "_________",
    fill: "Elle/il est végétarien(ne)",
  }),
  q({
    id: "230-q6",
    format: "vf",
    textQ: "Salut Théo, ça va et toi",
    text: ["Vrai", "Faux", "On ne sait pas"],
    textC: 0,
    img: ["Maison", "Téléphone", "Carte"],
    imgC: 0,
    fillQ: "Réponse : _________.",
    fill: "Vrai",
    vfQ: "Salut Théo, ça va et toi",
    vfC: 0,
  }),
  q({
    id: "230-q7",
    format: "vf",
    textQ: "Il n'y a aucune information dans l'audio.",
    text: ["Vrai", "Faux", "On ne sait pas"],
    textC: 1,
    img: ["Maison", "Téléphone", "Carte"],
    imgC: 0,
    fillQ: "Réponse : _________.",
    fill: "Faux",
    vfQ: "Il n'y a aucune information dans l'audio.",
    vfC: 1,
  }),
  q({
    id: "230-q8",
    format: "vf",
    textQ: "Qu'est-ce que tu fais en ville",
    text: ["Vrai", "Faux", "On ne sait pas"],
    textC: 0,
    img: ["Maison", "Téléphone", "Carte"],
    imgC: 0,
    fillQ: "Réponse : _________.",
    fill: "Vrai",
    vfQ: "Qu'est-ce que tu fais en ville",
    vfC: 0,
  })
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
    format: "text",
    textQ: "Quel nom entendez-vous dans l'audio ?",
    text: ["Mathilde", "Marie", "Paul"],
    textC: 0,
    img: ["Maison", "Téléphone", "Carte"],
    imgC: 0,
    fillQ: "_________",
    fill: "Mathilde",
  }),
  q({
    id: "231-q2",
    format: "image",
    textQ: "Quel nom entendez-vous dans l'audio ?",
    text: ["Matthieu", "Marie", "Paul"],
    textC: 0,
    img: ["Matthieu", "Marie", "Paul"],
    imgC: 0,
    fillQ: "_________",
    fill: "Matthieu",
  }),
  q({
    id: "231-q3",
    format: "fill",
    textQ: "Quel nom entendez-vous dans l'audio ?",
    text: ["Mais", "Marie", "Paul"],
    textC: 0,
    img: ["Mais", "Marie", "Paul"],
    imgC: 0,
    fillQ: "Quel nom entendez-vous dans l'audio : _________.",
    fill: "Mais",
  }),
  q({
    id: "231-q4",
    format: "vf",
    textQ: "39 est mentionné dans l'audio.",
    text: ["Vrai", "Faux", "On ne sait pas"],
    textC: 0,
    img: ["Maison", "Téléphone", "Carte"],
    imgC: 0,
    fillQ: "Réponse : _________.",
    fill: "Vrai",
    vfQ: "39 est mentionné dans l'audio.",
    vfC: 0,
  }),
  q({
    id: "231-q5",
    format: "text",
    textQ: "Où se passe la scène ?",
    text: ["À la pharmacie", "À l'école", "À l'hôtel"],
    textC: 0,
    img: ["Maison", "Téléphone", "Carte"],
    imgC: 0,
    fillQ: "_________",
    fill: "À la pharmacie",
  }),
  q({
    id: "231-q6",
    format: "image",
    textQ: "De qui parle-t-on ?",
    text: ["Un médecin", "Un chauffeur", "Un serveur"],
    textC: 0,
    img: ["Un médecin", "Un chauffeur", "Un serveur"],
    imgC: 0,
    fillQ: "_________",
    fill: "Un médecin",
  }),
  q({
    id: "231-q7",
    format: "fill",
    textQ: "Quelle maladie ?",
    text: ["La grippe", "Un rhume", "Une brûlure"],
    textC: 0,
    img: ["La grippe", "Un rhume", "Une brûlure"],
    imgC: 0,
    fillQ: "Quelle maladie : _________.",
    fill: "grippe",
  }),
  q({
    id: "231-q8",
    format: "vf",
    textQ: "Un rhume est mentionné dans l'audio.",
    text: ["Vrai", "Faux", "On ne sait pas"],
    textC: 0,
    img: ["Maison", "Téléphone", "Carte"],
    imgC: 0,
    fillQ: "Réponse : _________.",
    fill: "Vrai",
    vfQ: "Un rhume est mentionné dans l'audio.",
    vfC: 0,
  })
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
    format: "text",
    textQ: "Quel nom entendez-vous dans l'audio ?",
    text: ["Provence", "Marie", "Paul"],
    textC: 0,
    img: ["Maison", "Téléphone", "Carte"],
    imgC: 0,
    fillQ: "_________",
    fill: "Provence",
  }),
  q({
    id: "232-q2",
    format: "image",
    textQ: "Quel nom entendez-vous dans l'audio ?",
    text: ["Mais", "Marie", "Paul"],
    textC: 0,
    img: ["Mais", "Marie", "Paul"],
    imgC: 0,
    fillQ: "_________",
    fill: "Mais",
  }),
  q({
    id: "232-q3",
    format: "fill",
    textQ: "Quel nom entendez-vous dans l'audio ?",
    text: ["Portugal", "Marie", "Paul"],
    textC: 0,
    img: ["Portugal", "Marie", "Paul"],
    imgC: 0,
    fillQ: "Quel nom entendez-vous dans l'audio : _________.",
    fill: "Portugal",
  }),
  q({
    id: "232-q4",
    format: "vf",
    textQ: "L'avion est mentionné dans l'audio.",
    text: ["Vrai", "Faux", "On ne sait pas"],
    textC: 0,
    img: ["Maison", "Téléphone", "Carte"],
    imgC: 0,
    fillQ: "Réponse : _________.",
    fill: "Vrai",
    vfQ: "L'avion est mentionné dans l'audio.",
    vfC: 0,
  }),
  q({
    id: "232-q5",
    format: "text",
    textQ: "Quel transport est cité ?",
    text: ["Le train", "Le métro", "Le tram"],
    textC: 0,
    img: ["Maison", "Téléphone", "Carte"],
    imgC: 0,
    fillQ: "_________",
    fill: "Le train",
  }),
  q({
    id: "232-q6",
    format: "vf",
    textQ: "Alors, pour notre voyage, on prend le train ou l'avion",
    text: ["Vrai", "Faux", "On ne sait pas"],
    textC: 0,
    img: ["Maison", "Téléphone", "Carte"],
    imgC: 0,
    fillQ: "Réponse : _________.",
    fill: "Vrai",
    vfQ: "Alors, pour notre voyage, on prend le train ou l'avion",
    vfC: 0,
  }),
  q({
    id: "232-q7",
    format: "vf",
    textQ: "Il n'y a aucune information dans l'audio.",
    text: ["Vrai", "Faux", "On ne sait pas"],
    textC: 1,
    img: ["Maison", "Téléphone", "Carte"],
    imgC: 0,
    fillQ: "Réponse : _________.",
    fill: "Faux",
    vfQ: "Il n'y a aucune information dans l'audio.",
    vfC: 1,
  }),
  q({
    id: "232-q8",
    format: "vf",
    textQ: "Le voyage chez mes parents en Provence",
    text: ["Vrai", "Faux", "On ne sait pas"],
    textC: 0,
    img: ["Maison", "Téléphone", "Carte"],
    imgC: 0,
    fillQ: "Réponse : _________.",
    fill: "Vrai",
    vfQ: "Le voyage chez mes parents en Provence",
    vfC: 0,
  })
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
    format: "text",
    textQ: "Quel nom entendez-vous dans l'audio ?",
    text: ["Musilac", "Marie", "Paul"],
    textC: 0,
    img: ["Maison", "Téléphone", "Carte"],
    imgC: 0,
    fillQ: "_________",
    fill: "Musilac",
  }),
  q({
    id: "233-q2",
    format: "image",
    textQ: "Quel nom entendez-vous dans l'audio ?",
    text: ["Aix-les-", "Marie", "Paul"],
    textC: 0,
    img: ["Aix-les-", "Marie", "Paul"],
    imgC: 0,
    fillQ: "_________",
    fill: "Aix-les-",
  }),
  q({
    id: "233-q3",
    format: "fill",
    textQ: "Quel nom entendez-vous dans l'audio ?",
    text: ["Bains", "Marie", "Paul"],
    textC: 0,
    img: ["Bains", "Marie", "Paul"],
    imgC: 0,
    fillQ: "Quel nom entendez-vous dans l'audio : _________.",
    fill: "Bains",
  }),
  q({
    id: "233-q4",
    format: "vf",
    textQ: "À l'hôtel est mentionné dans l'audio.",
    text: ["Vrai", "Faux", "On ne sait pas"],
    textC: 0,
    img: ["Maison", "Téléphone", "Carte"],
    imgC: 0,
    fillQ: "Réponse : _________.",
    fill: "Vrai",
    vfQ: "À l'hôtel est mentionné dans l'audio.",
    vfC: 0,
  }),
  q({
    id: "233-q5",
    format: "text",
    textQ: "Où se passe la scène ?",
    text: ["Au camping", "Au musée", "À la pharmacie"],
    textC: 0,
    img: ["Maison", "Téléphone", "Carte"],
    imgC: 0,
    fillQ: "_________",
    fill: "Au camping",
  }),
  q({
    id: "233-q6",
    format: "vf",
    textQ: "Alors, vous faites quoi cet été",
    text: ["Vrai", "Faux", "On ne sait pas"],
    textC: 0,
    img: ["Maison", "Téléphone", "Carte"],
    imgC: 0,
    fillQ: "Réponse : _________.",
    fill: "Vrai",
    vfQ: "Alors, vous faites quoi cet été",
    vfC: 0,
  }),
  q({
    id: "233-q7",
    format: "vf",
    textQ: "Il n'y a aucune information dans l'audio.",
    text: ["Vrai", "Faux", "On ne sait pas"],
    textC: 1,
    img: ["Maison", "Téléphone", "Carte"],
    imgC: 0,
    fillQ: "Réponse : _________.",
    fill: "Faux",
    vfQ: "Il n'y a aucune information dans l'audio.",
    vfC: 1,
  }),
  q({
    id: "233-q8",
    format: "vf",
    textQ: "En juillet, on va au festival Musilac à Aix-les-Bains",
    text: ["Vrai", "Faux", "On ne sait pas"],
    textC: 0,
    img: ["Maison", "Téléphone", "Carte"],
    imgC: 0,
    fillQ: "Réponse : _________.",
    fill: "Vrai",
    vfQ: "En juillet, on va au festival Musilac à Aix-les-Bains",
    vfC: 0,
  })
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
  questionCount: 4,
},
{
  id: "e8-1-228",
  audioSrc: A1(228),
  audioLabel: "Audio 228",
  transcript: TR_228,
  instruction: "Écoutez l'enregistrement et répondez aux questions.",
  pool: POOL_228,
  questionCount: 4,
},
{
  id: "e8-1-229",
  audioSrc: A1(229),
  audioLabel: "Audio 229",
  transcript: TR_229,
  instruction: "Écoutez l'enregistrement et répondez aux questions.",
  pool: POOL_229,
  questionCount: 4,
},
{
  id: "e8-1-230",
  audioSrc: A1(230),
  audioLabel: "Audio 230",
  transcript: TR_230,
  instruction: "Écoutez l'enregistrement et répondez aux questions.",
  pool: POOL_230,
  questionCount: 4,
},
{
  id: "e8-1-231",
  audioSrc: A1(231),
  audioLabel: "Audio 231",
  transcript: TR_231,
  instruction: "Écoutez l'enregistrement et répondez aux questions.",
  pool: POOL_231,
  questionCount: 4,
},
{
  id: "e8-1-232",
  audioSrc: A1(232),
  audioLabel: "Audio 232",
  transcript: TR_232,
  instruction: "Écoutez l'enregistrement et répondez aux questions.",
  pool: POOL_232,
  questionCount: 4,
},
{
  id: "e8-1-233",
  audioSrc: A1(233),
  audioLabel: "Audio 233",
  transcript: TR_233,
  instruction: "Écoutez l'enregistrement et répondez aux questions.",
  pool: POOL_233,
  questionCount: 4,
}
];
