import type { CEMultiQuestion } from "./ce-questions-helpers";
import { ceQ } from "./ce-questions-helpers";

export type CEInstructionCard = {
  title: string;
  body: string;
  imageLabel: string;
  pool: CEMultiQuestion[];
};

export type CEInstructionItem = {
  id: string;
  cards: [CEInstructionCard, CEInstructionCard, CEInstructionCard];
};

/** Instructions « Lire des instructions » — CE moyen (3 textes × pool 4 Q, 2 tirées à l'éval). */
export const CE_INSTRUCTIONS_MOYEN: CEInstructionItem[] = [
  {
    id: "gateau-chocolat",
    cards: [
      {
        title: "Les ingrédients",
        imageLabel: "Ingrédients",
        body:
          "Olena prépare un gâteau au chocolat pour ses camarades à Fribourg.\n\n" +
          "Pour 6 à 8 personnes, il vous faut :\n" +
          "– 200 g de chocolat noir ;\n– 100 g de beurre ;\n– 3 œufs ;\n– 50 g de farine ;\n– 100 g de sucre en poudre.",
        pool: [
          ceQ("gateau-q1", "Quel chocolat faut-il utiliser ?", ["Chocolat noir", "Chocolat au lait", "Chocolat blanc"], 0, "Il faut du chocolat _________.", "noir"),
          ceQ("gateau-q4", "Combien de grammes de farine faut-il ?", ["50 g", "100 g", "200 g"], 0, "Il faut ___ grammes de farine.", "50", ["cinquante"]),
          ceQ("gateau-q6", "Combien d'œufs faut-il ?", ["Deux", "Trois", "Quatre"], 1, "La recette utilise ___ œufs.", "trois", ["3"]),
          ceQ("gateau-q10", "Pour combien de personnes est prévu ce gâteau ?", ["6 à 8", "4 à 6", "10 à 12"], 0, "Le gâteau est pour ___ à 8 personnes.", "6", ["six"]),
        ],
      },
      {
        title: "La préparation",
        imageLabel: "Préparation",
        body:
          "Préparation : 10 minutes.\n\n" +
          "1. Préchauffez le four à 180 °C. Dans une casserole, faites fondre le chocolat et le beurre à feu très doux.\n" +
          "2. Dans un saladier, mettez le sucre, les œufs et la farine. Mélangez avec une fourchette.\n" +
          "3. Ajoutez le mélange chocolat-beurre et mélangez bien.\n" +
          "4. Beurrez le moule, puis versez la préparation dedans.",
        pool: [
          ceQ("gateau-q2", "Avec quoi mélange-t-on le sucre, les œufs et la farine ?", ["Une fourchette", "Une cuillère", "Une louche"], 0, "On mélange avec une _________.", "fourchette"),
          ceQ("gateau-q5", "À quelle température préchauffer le four ?", ["160 °C", "180 °C", "200 °C"], 1, "Le four est à ___ °C.", "180", ["cent quatre-vingts"]),
          ceQ("gateau-q11", "Combien de temps dure la préparation ?", ["5 minutes", "10 minutes", "30 minutes"], 1, "La préparation dure ___ minutes.", "10", ["dix"]),
          ceQ("gateau-q12", "Où fond-on le chocolat et le beurre ?", ["Dans une casserole", "Dans le four", "Dans le saladier"], 0, "On fond le chocolat dans une _________.", "casserole"),
        ],
      },
      {
        title: "La cuisson",
        imageLabel: "Cuisson",
        body:
          "Cuisson : 20 minutes.\n\n" +
          "5. Enfournez pendant environ 20 minutes.\n" +
          "6. À la sortie du four, le gâteau peut sembler pas assez cuit : c'est normal. Laissez-le refroidir avant de le démouler.\n\n" +
          "Note : pour aller plus vite, vous pouvez faire fondre le chocolat et le beurre au micro-ondes.",
        pool: [
          ceQ("gateau-q3", "Combien de temps dure la cuisson ?", ["10 minutes", "20 minutes", "40 minutes"], 1, "La cuisson dure environ ___ minutes.", "20", ["vingt"]),
          ceQ("gateau-q7", "Que faire si le gâteau semble pas assez cuit à la sortie du four ?", ["Le laisser refroidir", "Le remettre tout de suite au four", "Le jeter"], 0, "Il faut le laisser _________.", "refroidir"),
          ceQ("gateau-q8", "Quand faut-il démouler le gâteau ?", ["Après refroidissement", "Dès la sortie du four", "Avant la cuisson"], 0, "On démoule après le _________.", "refroidissement", ["refroidir"]),
          ceQ("gateau-q9", "Que peut-on utiliser pour aller plus vite ?", ["Le micro-ondes", "Le four", "La casserole"], 0, "On peut utiliser le micro-_________.", "ondes"),
        ],
      },
    ],
  },
  {
    id: "sortie-ski",
    cards: [
      {
        title: "Sortie ski à Crans-Montana",
        imageLabel: "Ski",
        body:
          "Vendredi 12 février, de 9 h à 20 h 30.\n\n" +
          "Cette sortie est proposée à tous les élèves du collège des Berges, à Fribourg.\n\n" +
          "Pour s'inscrire, présentez-vous avant le 9 février au secrétariat avec :\n" +
          "une autorisation des parents, le carnet de santé, le formulaire d'inscription et un chèque de 55 francs.\n\n" +
          "Attention ! Le nombre de participants est limité à 30 personnes.",
        pool: [
          ceQ("ski-q1", "Cette sortie a lieu…", ["En hiver", "Au printemps", "En été"], 0, "C'est une sortie en _________.", "hiver"),
          ceQ("ski-q2", "Jusqu'à quelle date peut-on s'inscrire ?", ["Le 9 février", "Le 12 février", "Le 20 février"], 0, "Inscription avant le ___ février.", "9", ["neuf"]),
          ceQ("ski-q6", "Combien coûte la sortie ?", ["35 francs", "55 francs", "75 francs"], 1, "La sortie coûte ___ francs.", "55", ["cinquante-cinq"]),
          ceQ("ski-q8", "Où faut-il aller pour s'inscrire ?", ["Au secrétariat", "À la piste de ski", "Au restaurant"], 0, "L'inscription se fait au _________.", "secrétariat", ["secretariat"]),
        ],
      },
      {
        title: "Le jour de la sortie",
        imageLabel: "Rendez-vous",
        body:
          "Le jour de la sortie, les élèves inscrits se présentent à 8 h 30 devant le collège.\n\n" +
          "La sortie dure de 9 h à 20 h 30.\n\n" +
          "Le déjeuner et la location des skis sont compris dans le prix.",
        pool: [
          ceQ("ski-q4", "À quelle heure est le rendez-vous le jour de la sortie ?", ["8 h", "8 h 30", "9 h"], 1, "Le rendez-vous est à 8 h ___.", "30", ["trente"]),
          ceQ("ski-q10", "À quelle heure se termine la sortie ?", ["18 h", "20 h 30", "22 h"], 1, "La sortie finit à 20 h ___.", "30", ["trente"]),
          ceQ("ski-q7", "Combien de participants au maximum ?", ["20", "30", "40"], 1, "Le nombre de places est limité à ___.", "30", ["trente"]),
          ceQ("ski-q11", "La location des skis est-elle comprise ?", ["Oui, dans le prix", "Non, à payer en plus", "Non, interdite"], 0, "La location est _________ dans le prix.", "comprise"),
        ],
      },
      {
        title: "Objets à apporter",
        imageLabel: "Équipement",
        body:
          "Les élèves doivent apporter :\n" +
          "– des lunettes de soleil ;\n– de la crème solaire ;\n– des vêtements chauds ;\n– un goûter.\n\n" +
          "Le déjeuner est fourni sur place.",
        pool: [
          ceQ("ski-q3", "Que devez-vous apporter pour le soleil ?", ["De la crème solaire", "Vos skis personnels", "Un dictionnaire"], 0, "Il faut de la crème _________.", "solaire"),
          ceQ("ski-q5", "Qu'est-ce qui est inclus dans le prix ?", ["Le déjeuner", "Le petit-déjeuner", "Le goûter"], 0, "Le _________ est compris dans le prix.", "déjeuner", ["dejeuner"]),
          ceQ("ski-q9", "Quel objet protège les yeux du soleil ?", ["Des lunettes de soleil", "Un parapluie", "Un bonnet"], 0, "Il faut des lunettes de _________.", "soleil"),
          ceQ("ski-q12", "Quel document parental faut-il pour l'inscription ?", ["Une autorisation", "Un bulletin scolaire", "Un livre de cours"], 0, "Il faut une _________ des parents.", "autorisation"),
        ],
      },
    ],
  },
  {
    id: "journal-ecole",
    cards: [
      {
        title: "Message d'Oksana",
        imageLabel: "Espace",
        body:
          "Salut à tous les élèves de 3e !\n\n" +
          "Dans le journal de l'école, je vous donne des idées pour l'exposé sur l'espace que a demandé M. Hassan, le prof de sciences. Vous pourriez parler :\n" +
          "– du Système solaire ;\n– de l'Agence spatiale européenne ;\n– d'un astronaute, par exemple Thomas Pesquet ;\n– du premier homme sur la Lune.\n\n" +
          "Bon courage pour vos recherches !\nOksana",
        pool: [
          ceQ("journal-q1", "Qui a demandé aux élèves de faire un travail sur l'espace ?", ["Le professeur de sciences", "Oksana", "Le journal de l'école"], 0, "C'est le professeur de _________ qui a demandé le travail.", "sciences"),
          ceQ("journal-q2", "Oksana propose de parler…", ["D'une personne allée dans l'espace", "De navettes dans l'espace", "De recherches en laboratoire"], 0, "On peut parler d'un _________ dans l'espace.", "astronaute", ["d'une personne"]),
          ceQ("journal-q9", "Quel est le thème de l'exposé ?", ["L'espace", "La cuisine", "Le sport"], 0, "L'exposé porte sur l'_________.", "espace"),
          ceQ("journal-q10", "Où Oksana publie-t-elle ses idées ?", ["Dans le journal de l'école", "Sur Internet", "À la radio"], 0, "Les idées sont dans le journal de l'_________.", "école", ["ecole"]),
        ],
      },
      {
        title: "Comment s'organiser pour les devoirs ?",
        imageLabel: "Devoirs",
        body:
          "Voici quelques conseils de Fatima :\n\n" +
          "– Décide à quelle heure exactement tu vas commencer à travailler.\n" +
          "– Mange quelque chose : tu as besoin d'énergie pour étudier.\n" +
          "– Détends-toi pendant 20 minutes après l'école.\n" +
          "– Ne regarde pas la télé : tu n'arriveras plus à l'éteindre.\n" +
          "– N'utilise pas ton téléphone portable : tu vas perdre du temps.",
        pool: [
          ceQ("journal-q3", "Combien de minutes de détente après l'école ?", ["10 minutes", "20 minutes", "40 minutes"], 1, "Fatima conseille ___ minutes de détente.", "20", ["vingt"]),
          ceQ("journal-q4", "Que faut-il faire pour avoir de l'énergie ?", ["Manger quelque chose", "Regarder la télé", "Dormir en classe"], 0, "Il faut _________ quelque chose avant d'étudier.", "manger"),
          ceQ("journal-q6", "Pourquoi ne pas regarder la télé avant les devoirs ?", ["On n'arrive plus à l'éteindre", "Elle est en panne", "Elle coûte trop cher"], 0, "On n'arrive plus à l'_________.", "éteindre", ["eteindre"]),
          ceQ("journal-q11", "Quel objet faut-il éviter pour ne pas perdre de temps ?", ["Le téléphone", "Le cahier", "Le stylo"], 0, "Il ne faut pas utiliser le _________.", "téléphone", ["telephone"]),
        ],
      },
      {
        title: "Les bons gestes écolo à l'école",
        imageLabel: "Écologie",
        body:
          "Conseils d'Amadou :\n\n" +
          "– Si je dois imprimer, j'imprime en noir et blanc et en recto verso.\n" +
          "– J'utilise des cahiers en papier recyclé.\n" +
          "– En classe, je trie les déchets.\n" +
          "– Je participe aux projets pour la protection de la planète.\n" +
          "– Au restaurant scolaire, je ne gaspille pas : je me sers juste ce qu'il faut !",
        pool: [
          ceQ("journal-q7", "Pour utiliser moins de papier, il faut…", ["Imprimer en recto verso", "Recycler ses papiers", "Utiliser de vieux cahiers"], 0, "Il faut imprimer en recto _________.", "verso"),
          ceQ("journal-q8", "Pourquoi se servir « juste ce qu'il faut » à la cantine ?", ["Pour ne pas gaspiller la nourriture", "Pour mieux trier les déchets", "Pour partager avec les autres"], 0, "C'est pour ne pas _________ la nourriture.", "gaspiller"),
          ceQ("journal-q12", "Que fait-on des déchets en classe ?", ["On les trie", "On les mange", "On les cache"], 0, "En classe, on _________ les déchets.", "trie", ["les trie"]),
          ceQ("journal-q13", "Pourquoi participer aux projets écolo ?", ["Pour protéger la planète", "Pour gagner de l'argent", "Pour manger plus"], 0, "Les projets protègent la _________.", "planète", ["planete"]),
        ],
      },
    ],
  },
  {
    id: "lettre-examen",
    cards: [
      {
        title: "Convocation",
        imageLabel: "Convocation",
        body:
          "Centre des examens de Lausanne\n\n" +
          "Bonjour,\n\n" +
          "Vous êtes inscrit à l'examen DELF A2 Junior.\n\n" +
          "Date et heure : vendredi 22 février à 10 h 15.\n" +
          "Lieu : centre des examens, salle 004, au 1er étage.\n" +
          "Durée : 1 heure 40.\n\n" +
          "Meilleures salutations,\nM. Matteo Rossi, directeur du centre",
        pool: [
          ceQ("examen-q1", "Dans quelle salle se passe l'examen ?", ["Salle 004", "Salle 012", "Salle 020"], 0, "L'examen a lieu en salle ___.", "004", ["4"]),
          ceQ("examen-q6", "Combien de temps dure l'examen ?", ["1 heure", "1 heure 40", "2 heures"], 1, "L'examen dure 1 heure ___.", "40", ["quarante"]),
          ceQ("examen-q8", "Quel examen est mentionné ?", ["DELF A2 Junior", "DELF B2", "DALF C1"], 0, "C'est l'examen DELF A2 _________.", "Junior"),
          ceQ("examen-q12", "À quel étage se trouve la salle ?", ["Au 1er étage", "Au rez-de-chaussée", "Au 3e étage"], 0, "La salle est au ___ étage.", "1er", ["premier", "1"]),
        ],
      },
      {
        title: "Documents à apporter",
        imageLabel: "Documents",
        body:
          "Documents à apporter le jour de l'examen :\n" +
          "– une pièce d'identité (carte d'identité ou passeport) ;\n" +
          "– votre fiche d'inscription avec votre numéro de candidat.",
        pool: [
          ceQ("examen-q2", "Quel document faut-il apporter ?", ["Une pièce d'identité", "Un dictionnaire", "Un livre de cours"], 0, "Il faut une pièce d'_________.", "identité", ["identite"]),
          ceQ("examen-q2b", "Que faut-il apporter en plus de la pièce d'identité ?", ["La fiche d'inscription", "Un téléphone", "Un dictionnaire"], 0, "Il faut la fiche d'_________.", "inscription"),
          ceQ("examen-q2c", "Peut-on apporter un livre de cours ?", ["Non", "Oui, obligatoire", "Oui, au choix"], 0, "Un livre de cours : ___", "non"),
          ceQ("examen-q2d", "Quel document avec photo est accepté ?", ["Le passeport", "Le permis de conduire seul", "Une carte de bibliothèque"], 0, "On peut apporter un _________.", "passeport"),
        ],
      },
      {
        title: "Consignes le jour J",
        imageLabel: "Consignes",
        body:
          "Consignes :\n" +
          "– Les téléphones portables doivent être éteints.\n" +
          "– Aucun document personnel n'est autorisé sur la table pendant l'examen.\n" +
          "– Arrivez 15 minutes avant le début, donc à 10 h.\n" +
          "– Aucun retardataire ne sera accepté.\n\n" +
          "Les résultats seront envoyés trois semaines après l'examen.",
        pool: [
          ceQ("examen-q3", "Que faut-il faire avec le téléphone portable ?", ["L'éteindre", "Le laisser allumé", "Le donner au surveillant"], 0, "Le téléphone doit être _________.", "éteint", ["eteint"]),
          ceQ("examen-q4", "À quelle heure est-il conseillé d'arriver ?", ["10 h", "10 h 15", "10 h 30"], 0, "Il faut arriver à ___ h.", "10", ["dix"]),
          ceQ("examen-q5", "Quand recevrez-vous les résultats ?", ["Trois semaines après", "Le lendemain", "Le jour même"], 0, "Les résultats arrivent ___ semaines après.", "trois", ["3"]),
          ceQ("examen-q7", "Peut-on garder des documents personnels sur la table ?", ["Non, c'est interdit", "Oui, tous les documents", "Oui, seulement le téléphone"], 0, "Les documents personnels sont _________.", "interdits", ["interdit"]),
        ],
      },
    ],
  },
  {
    id: "documents-ecole",
    cards: [
      {
        title: "La cantine",
        imageLabel: "Cantine",
        body:
          "La carte de cantine est à demander au secrétariat en début d'année. Votre professeur principal vous la donne ensuite en classe.\n" +
          "Vous devez présenter votre carte à chaque repas à la cantine.\n" +
          "Vous pouvez prendre une entrée, un plat et un dessert.\n" +
          "Il y a une carafe d'eau sur chaque table : remplissez-la au robinet.\n" +
          "Des fruits sont disponibles dans des paniers à la sortie de la cantine.\n" +
          "— M. Marco, responsable de la cantine",
        pool: [
          ceQ("ecole-q1", "À qui demander la carte de cantine en début d'année ?", ["Au secrétariat", "Au responsable de la cantine", "À la récréation"], 0, "La carte se demande au _________.", "secrétariat", ["secretariat"]),
          ceQ("ecole-q2", "Que trouve-t-on à la sortie de la cantine ?", ["Des fruits", "De l'eau", "Des desserts"], 0, "À la sortie, il y a des _________.", "fruits", ["fruit"]),
          ceQ("ecole-q10", "Que faut-il présenter à chaque repas ?", ["Sa carte de cantine", "Son carnet de santé", "Son téléphone"], 0, "Il faut présenter sa _________ de cantine.", "carte"),
          ceQ("ecole-q1b", "Que comprend un repas à la cantine ?", ["Entrée, plat et dessert", "Seulement un plat", "Seulement une boisson"], 0, "On peut prendre entrée, plat et _________.", "dessert"),
        ],
      },
      {
        title: "Salle informatique",
        imageLabel: "Ordinateur",
        body:
          "La salle informatique est ouverte pendant la récréation de 10 h, à l'heure du déjeuner et le mercredi après-midi de 13 h 30 à 15 h 30.\n" +
          "Comme il n'y a pas beaucoup d'ordinateurs, attendez à l'entrée qu'un poste soit libre.\n" +
          "Vous pouvez être deux maximum par ordinateur.\n" +
          "Utilisez les ordinateurs pour votre travail et vos recherches, mais pas pour regarder des vidéos.\n" +
          "Vous pouvez imprimer au maximum 10 pages par jour.",
        pool: [
          ceQ("ecole-q3", "Quand peut-on utiliser la salle informatique ?", ["Pendant la pause de midi", "Le matin avant les cours", "Le soir après les cours"], 0, "La salle est ouverte à l'heure du _________.", "déjeuner", ["dejeuner", "midi"]),
          ceQ("ecole-q4", "Qu'est-ce qui est interdit en salle informatique ?", ["Regarder des vidéos", "Imprimer des documents", "Partager un ordinateur"], 0, "Il est interdit de regarder des _________.", "vidéos", ["videos"]),
          ceQ("ecole-q5", "Combien de pages peut-on imprimer par jour au maximum ?", ["5 pages", "10 pages", "20 pages"], 1, "On peut imprimer ___ pages maximum.", "10", ["dix"]),
          ceQ("ecole-q6", "Combien d'élèves maximum par ordinateur ?", ["Un", "Deux", "Trois"], 1, "On peut être ___ maximum par ordinateur.", "deux", ["2"]),
        ],
      },
      {
        title: "Fête de fin d'année",
        imageLabel: "Fête",
        body:
          "De : prof.layla@ecole.ch\nObjet : Fête de fin d'année\n\n" +
          "Chers élèves,\n\n" +
          "Samedi, c'est la fête de fin d'année de notre classe.\n" +
          "Pouvez-vous apporter chacun un gâteau traditionnel de votre pays ? Je m'occupe des boissons.\n" +
          "La fête aura lieu dans la cantine, de 14 h à 18 h. Si vous êtes libres, venez m'aider à 13 h pour mettre les tables au fond de la salle.\n" +
          "À 16 h, un groupe de musique donnera un petit concert !\n\n" +
          "Merci !\nMadame Layla",
        pool: [
          ceQ("ecole-q7", "Que doivent apporter les élèves à la fête ?", ["Un gâteau", "Une boisson", "De la musique"], 0, "Chaque élève apporte un _________.", "gâteau", ["gateau"]),
          ceQ("ecole-q8", "En quoi faut-il aider Madame Layla ?", ["À mettre les tables", "À nettoyer les tables", "À cuisiner"], 0, "Il faut aider à _________ les tables.", "mettre"),
          ceQ("ecole-q9", "Qui s'occupe des boissons ?", ["La professeure", "Les élèves", "Le groupe de musique"], 0, "Madame Layla s'occupe des _________.", "boissons"),
          ceQ("ecole-q12", "Où a lieu la fête de fin d'année ?", ["Dans la cantine", "Dans la cour", "Dans la salle de sport"], 0, "La fête est dans la _________.", "cantine"),
        ],
      },
    ],
  },
];
