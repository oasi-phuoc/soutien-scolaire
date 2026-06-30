export type CEQuestion = {
  question: string;
  choices: string[];
  correct: number;
};

export type CEText = {
  id: string;
  level: "base" | "moyen" | "avance";
  title: string;
  body: string;
  questions: CEQuestion[];
};

const CE_TEXTS: CEText[] = [
  // ——— BASE (A1/A2) ———
  {
    id: "base-routine",
    level: "base",
    title: "La routine du matin",
    body: "Marie se lève à sept heures du matin. Elle prend une douche et s'habille. Ensuite, elle mange des céréales et boit un café. Elle quitte la maison à huit heures pour aller au travail. Marie prend le bus pour aller au bureau. Elle aime son travail parce qu'elle a des collègues sympas.",
    questions: [
      { question: "À quelle heure Marie se lève-t-elle ?", choices: ["À six heures", "À sept heures", "À huit heures", "À neuf heures"], correct: 1 },
      { question: "Que mange Marie le matin ?", choices: ["Du pain et du beurre", "Des céréales", "Des œufs", "Rien"], correct: 1 },
      { question: "Comment Marie va-t-elle au travail ?", choices: ["En voiture", "À pied", "En bus", "En vélo"], correct: 2 },
      { question: "Pourquoi Marie aime-t-elle son travail ?", choices: ["C'est près de chez elle", "Elle est bien payée", "Elle a des collègues sympas", "Les horaires sont bons"], correct: 2 },
      { question: "À quelle heure Marie quitte-t-elle la maison ?", choices: ["À sept heures", "À sept heures et demie", "À huit heures", "À huit heures et demie"], correct: 2 },
    ],
  },
  {
    id: "base-marche",
    level: "base",
    title: "Au marché",
    body: "Ahmed va au marché le samedi matin. Il achète des fruits et des légumes. Aujourd'hui, il prend deux kilos de pommes, un kilo de tomates et une laitue. Il parle avec le vendeur qui s'appelle Bernard. Ahmed paye sept euros cinquante. Il rentre chez lui à pied.",
    questions: [
      { question: "Quand Ahmed va-t-il au marché ?", choices: ["Le vendredi soir", "Le dimanche matin", "Le samedi matin", "Tous les jours"], correct: 2 },
      { question: "Combien de kilos de pommes achète-t-il ?", choices: ["Un kilo", "Deux kilos", "Trois kilos", "Cinq kilos"], correct: 1 },
      { question: "Comment s'appelle le vendeur ?", choices: ["Ahmed", "Martin", "Bernard", "Marc"], correct: 2 },
      { question: "Combien Ahmed paye-t-il ?", choices: ["Cinq euros", "Six euros", "Sept euros", "Sept euros cinquante"], correct: 3 },
      { question: "Comment Ahmed rentre-t-il chez lui ?", choices: ["En bus", "En voiture", "À pied", "En vélo"], correct: 2 },
    ],
  },
  {
    id: "base-famille",
    level: "base",
    title: "La famille Petit",
    body: "La famille Petit habite à Lyon. Le père s'appelle Thomas et il est médecin. La mère s'appelle Sophie et elle est institutrice. Ils ont deux enfants : Lucas qui a dix ans et Emma qui a sept ans. Le week-end, toute la famille aime aller à la piscine ou faire des promenades dans le parc.",
    questions: [
      { question: "Où habite la famille Petit ?", choices: ["À Paris", "À Lyon", "À Marseille", "À Nice"], correct: 1 },
      { question: "Quel est le métier du père ?", choices: ["Professeur", "Ingénieur", "Médecin", "Vendeur"], correct: 2 },
      { question: "Quel est le prénom de la mère ?", choices: ["Marie", "Claire", "Emma", "Sophie"], correct: 3 },
      { question: "Quel âge a Lucas ?", choices: ["Sept ans", "Huit ans", "Dix ans", "Douze ans"], correct: 2 },
      { question: "Que fait la famille le week-end ?", choices: ["Regarder la télé", "Aller à la piscine ou se promener", "Travailler", "Voyager"], correct: 1 },
    ],
  },
  {
    id: "base-appartement",
    level: "base",
    title: "Mon appartement",
    body: "Mon appartement est au troisième étage. Il y a trois pièces : un salon, une chambre et une cuisine. Dans le salon, j'ai un canapé et une télévision. Ma chambre est petite mais confortable. La cuisine est moderne avec un réfrigérateur, une cuisinière et un lave-vaisselle. J'habite ici depuis deux ans.",
    questions: [
      { question: "À quel étage est l'appartement ?", choices: ["Premier", "Deuxième", "Troisième", "Quatrième"], correct: 2 },
      { question: "Combien de pièces y a-t-il ?", choices: ["Deux", "Trois", "Quatre", "Cinq"], correct: 1 },
      { question: "Qu'est-ce qu'il y a dans le salon ?", choices: ["Un lit et une armoire", "Un canapé et une télévision", "Une table et des chaises", "Un bureau et des livres"], correct: 1 },
      { question: "Comment est la cuisine ?", choices: ["Petite et vieille", "Grande et ancienne", "Moderne", "Sombre"], correct: 2 },
      { question: "Depuis combien de temps la personne habite-t-elle là ?", choices: ["Six mois", "Un an", "Deux ans", "Cinq ans"], correct: 2 },
    ],
  },
  {
    id: "base-restaurant",
    level: "base",
    title: "Au restaurant",
    body: "Lucie et Paul vont au restaurant pour fêter leur anniversaire de mariage. Le serveur leur apporte la carte. Lucie choisit une salade et un steak. Paul prend de la soupe et du poulet rôti. Comme dessert, ils partagent une tarte aux pommes. L'addition est de soixante euros. Ils laissent un pourboire de cinq euros.",
    questions: [
      { question: "Pour quelle occasion vont-ils au restaurant ?", choices: ["L'anniversaire de Lucie", "Leur anniversaire de mariage", "Une promotion", "Un repas d'affaires"], correct: 1 },
      { question: "Que choisit Lucie comme plat principal ?", choices: ["De la soupe", "Du poulet", "Un steak", "De la tarte"], correct: 2 },
      { question: "Quel dessert prennent-ils ?", choices: ["Une glace", "Un gâteau au chocolat", "Une crème brûlée", "Une tarte aux pommes"], correct: 3 },
      { question: "Combien coûte l'addition ?", choices: ["Cinquante euros", "Soixante euros", "Soixante-cinq euros", "Soixante-dix euros"], correct: 1 },
      { question: "Combien laissent-ils comme pourboire ?", choices: ["Deux euros", "Trois euros", "Cinq euros", "Dix euros"], correct: 2 },
    ],
  },
  {
    id: "base-ecole",
    level: "base",
    title: "À l'école",
    body: "Karim est élève dans une école primaire. Il a neuf ans et il est en CE2. Sa maîtresse s'appelle Madame Dupont. Karim aime les mathématiques et le sport. Il n'aime pas beaucoup le dessin. Chaque matin, il arrive à l'école à huit heures et demie. Il rentre chez lui à seize heures trente.",
    questions: [
      { question: "Quel âge a Karim ?", choices: ["Huit ans", "Neuf ans", "Dix ans", "Onze ans"], correct: 1 },
      { question: "Comment s'appelle sa maîtresse ?", choices: ["Madame Martin", "Madame Dupont", "Madame Bernard", "Madame Petit"], correct: 1 },
      { question: "Quelle matière Karim aime-t-il ?", choices: ["Le dessin", "La lecture", "Les mathématiques", "La musique"], correct: 2 },
      { question: "Quelle matière Karim n'aime-t-il pas ?", choices: ["Les mathématiques", "Le sport", "Le dessin", "La géographie"], correct: 2 },
      { question: "À quelle heure Karim arrive-t-il à l'école ?", choices: ["À huit heures", "À huit heures et demie", "À neuf heures", "À neuf heures et demie"], correct: 1 },
    ],
  },
  {
    id: "base-meteo",
    level: "base",
    title: "La météo",
    body: "En Suisse, le temps change souvent. En été, il fait chaud et il y a beaucoup de soleil. En hiver, il fait froid et il neige dans les montagnes. Au printemps, il pleut souvent mais les fleurs sont belles. En automne, les feuilles des arbres deviennent rouges et jaunes. La météo suisse est très variée selon les saisons.",
    questions: [
      { question: "Comment est le temps en été en Suisse ?", choices: ["Froid et nuageux", "Chaud et ensoleillé", "Pluvieux", "Neigeux"], correct: 1 },
      { question: "Qu'est-ce qui se passe en hiver dans les montagnes ?", choices: ["Il fait chaud", "Il pleut beaucoup", "Il neige", "Il y a du vent"], correct: 2 },
      { question: "Comment est le printemps ?", choices: ["Chaud et sec", "Froid et neigeux", "Souvent pluvieux", "Très ensoleillé"], correct: 2 },
      { question: "De quelle couleur deviennent les feuilles en automne ?", choices: ["Vertes et bleues", "Blanches et grises", "Rouges et jaunes", "Orange et violettes"], correct: 2 },
      { question: "Comment est la météo suisse selon le texte ?", choices: ["Toujours ensoleillée", "Très variée selon les saisons", "Toujours froide", "Toujours pluvieuse"], correct: 1 },
    ],
  },

  // ——— MOYEN (A2/B1) ———
  {
    id: "moyen-langues",
    level: "moyen",
    title: "La Suisse et ses langues",
    body: "La Suisse est un petit pays au cœur de l'Europe. Elle a quatre langues officielles : l'allemand, le français, l'italien et le romanche. L'allemand est parlé par environ 63 % de la population, principalement dans le centre et le nord du pays. Le français est la langue de l'ouest, qu'on appelle la Romandie. L'italien est parlé dans le canton du Tessin, au sud. Le romanche est une langue très ancienne parlée par seulement 1 % de la population, dans les Grisons.\n\nCette diversité linguistique est une richesse pour la Suisse, mais aussi un défi. Les Suisses apprennent souvent plusieurs langues à l'école. Beaucoup de personnes parlent au moins deux des langues nationales en plus de l'anglais.",
    questions: [
      { question: "Combien de langues officielles la Suisse a-t-elle ?", choices: ["Deux", "Trois", "Quatre", "Cinq"], correct: 2 },
      { question: "Quel pourcentage de la population parle allemand ?", choices: ["Environ 40 %", "Environ 55 %", "Environ 63 %", "Environ 70 %"], correct: 2 },
      { question: "Comment appelle-t-on la partie francophone de la Suisse ?", choices: ["Le Valais", "La Romandie", "Le Tessin", "Les Grisons"], correct: 1 },
      { question: "Dans quel canton parle-t-on principalement l'italien ?", choices: ["Le Valais", "Les Grisons", "Genève", "Le Tessin"], correct: 3 },
      { question: "Quel est le défi de la diversité linguistique selon le texte ?", choices: ["Les gens ne se comprennent pas", "Les Suisses doivent apprendre plusieurs langues", "Il n'y a pas de langue commune", "L'anglais remplace les langues nationales"], correct: 1 },
      { question: "Quelle proportion de Suisses parle le romanche ?", choices: ["1 %", "5 %", "10 %", "20 %"], correct: 0 },
    ],
  },
  {
    id: "moyen-logement",
    level: "moyen",
    title: "Trouver un logement en Suisse",
    body: "Trouver un appartement en Suisse peut être difficile, surtout dans les grandes villes comme Genève ou Zurich. Les loyers sont parmi les plus élevés d'Europe. Pour louer un appartement, il faut généralement fournir plusieurs documents : une pièce d'identité, les trois derniers bulletins de salaire, une attestation de l'office des poursuites et des lettres de référence.\n\nLe processus peut prendre plusieurs semaines, car il y a souvent beaucoup de candidats pour un seul appartement. Il est conseillé de visiter plusieurs logements avant de faire votre choix. La durée du préavis pour quitter un logement est généralement de trois mois. En Suisse, les contrats de location sont le plus souvent à durée indéterminée.",
    questions: [
      { question: "Dans quelles villes les loyers sont-ils particulièrement élevés ?", choices: ["Berne et Lausanne", "Genève et Zurich", "Bâle et Lugano", "Sion et Fribourg"], correct: 1 },
      { question: "Quel document permet de vérifier qu'on n'a pas de dettes ?", choices: ["La pièce d'identité", "Les bulletins de salaire", "L'attestation de l'office des poursuites", "Les lettres de référence"], correct: 2 },
      { question: "Combien de bulletins de salaire faut-il fournir ?", choices: ["Un", "Deux", "Trois", "Six"], correct: 2 },
      { question: "Pourquoi le processus peut-il prendre plusieurs semaines ?", choices: ["Les propriétaires sont très occupés", "Il y a beaucoup de candidats", "Les documents sont compliqués", "La loi oblige d'attendre"], correct: 1 },
      { question: "Quelle est la durée habituelle du préavis pour quitter un logement ?", choices: ["Un mois", "Deux mois", "Trois mois", "Six mois"], correct: 2 },
      { question: "Comment sont généralement les contrats de location en Suisse ?", choices: ["Pour un an seulement", "À durée déterminée", "À durée indéterminée", "Pour six mois"], correct: 2 },
    ],
  },
  {
    id: "moyen-sante",
    level: "moyen",
    title: "La santé en Suisse",
    body: "En Suisse, tout le monde est obligé d'avoir une assurance maladie. Cette assurance, appelée l'assurance de base, couvre les soins médicaux essentiels. Chaque personne choisit sa caisse maladie et peut changer d'assureur chaque année au mois de novembre. La prime mensuelle dépend de l'âge, du canton et du modèle d'assurance choisi.\n\nAvec l'assurance de base, les personnes doivent payer une franchise annuelle. La franchise standard est de 300 francs pour les adultes, mais elle peut aller jusqu'à 2 500 francs. Plus la franchise est élevée, plus la prime mensuelle est basse. En cas de maladie, vous pouvez consulter un médecin généraliste qui peut vous référer à un spécialiste si nécessaire.",
    questions: [
      { question: "L'assurance maladie est-elle obligatoire en Suisse ?", choices: ["Non, c'est facultatif", "Oui, pour tout le monde", "Seulement pour les étrangers", "Seulement pour les employés"], correct: 1 },
      { question: "Quand peut-on changer de caisse maladie ?", choices: ["À tout moment", "En janvier", "En novembre", "En juillet"], correct: 2 },
      { question: "De quoi dépend la prime mensuelle ?", choices: ["Du salaire uniquement", "De l'âge et du travail", "De l'âge, du canton et du modèle choisi", "Seulement du canton"], correct: 2 },
      { question: "Quel est le montant de la franchise standard pour les adultes ?", choices: ["100 francs", "200 francs", "300 francs", "500 francs"], correct: 2 },
      { question: "Quel est l'effet d'une franchise élevée sur la prime ?", choices: ["La prime augmente", "La prime reste la même", "La prime diminue", "Cela dépend de la caisse"], correct: 2 },
      { question: "Qui peut vous envoyer chez un spécialiste ?", choices: ["L'assurance", "Le pharmacien", "Un médecin généraliste", "L'hôpital"], correct: 2 },
    ],
  },
  {
    id: "moyen-travail",
    level: "moyen",
    title: "Chercher un emploi en Suisse",
    body: "Trouver un emploi en Suisse demande de la préparation. Il est important d'avoir un curriculum vitae (CV) bien structuré, qui présente vos expériences professionnelles, vos formations et vos compétences linguistiques. En Suisse, les employeurs accordent beaucoup d'importance aux langues parlées, surtout si le poste nécessite de communiquer avec des clients ou des collègues de différentes régions.\n\nLes offres d'emploi se trouvent sur des sites internet comme jobs.ch ou Indeed, mais aussi dans les journaux locaux et les offices régionaux de placement (ORP). Ces derniers peuvent aider les personnes sans emploi à trouver un travail en proposant des formations, des conseils et un suivi personnalisé. En Suisse, le taux de chômage est généralement l'un des plus bas d'Europe.",
    questions: [
      { question: "Qu'est-ce qu'un CV doit présenter selon le texte ?", choices: ["Uniquement les diplômes", "Les expériences, formations et compétences linguistiques", "Seulement les références", "Le salaire souhaité"], correct: 1 },
      { question: "Pourquoi les langues sont-elles importantes pour les employeurs suisses ?", choices: ["C'est une obligation légale", "Pour communiquer avec des clients ou collègues de différentes régions", "Pour travailler à l'étranger", "C'est une tradition suisse"], correct: 1 },
      { question: "Qu'est-ce que l'ORP ?", choices: ["Un site internet d'offres d'emploi", "L'office régional de placement", "Un syndicat de travailleurs", "Une école professionnelle"], correct: 1 },
      { question: "Quels services propose l'ORP ?", choices: ["Uniquement des formations", "Des formations, conseils et suivi personnalisé", "Seulement un suivi financier", "Des offres d'emploi exclusivement"], correct: 1 },
      { question: "Comment est le taux de chômage en Suisse selon le texte ?", choices: ["Parmi les plus élevés d'Europe", "Dans la moyenne européenne", "Parmi les plus bas d'Europe", "Le plus bas du monde"], correct: 2 },
    ],
  },
  {
    id: "moyen-transport",
    level: "moyen",
    title: "Les transports en commun en Suisse",
    body: "La Suisse possède l'un des réseaux de transports en commun les plus denses et les plus ponctuels au monde. Les trains, les bus, les trams et les bateaux sont coordonnés pour permettre des correspondances faciles et rapides. Les horaires sont respectés avec une précision remarquable.\n\nPour utiliser les transports suisses, il existe plusieurs types de billets. Le billet classique est acheté pour un trajet précis. L'abonnement demi-tarif permet de voyager à moitié prix sur tout le réseau et est très populaire. L'abonnement général (AG) donne accès à l'ensemble des transports publics sans limitation. Pour les jeunes de moins de 25 ans, l'abonnement junior-junior offre des réductions importantes. La ponctualité et la propreté des transports suisses sont souvent citées comme des exemples à suivre.",
    questions: [
      { question: "Qu'est-ce qui est dit des transports suisses dans le texte ?", choices: ["Ils sont peu développés", "Ils sont parmi les plus denses et ponctuels au monde", "Ils sont coûteux et peu fiables", "Ils sont uniquement pour les grandes villes"], correct: 1 },
      { question: "Que permet l'abonnement demi-tarif ?", choices: ["Voyager gratuitement", "Voyager à moitié prix sur tout le réseau", "Utiliser uniquement les trains", "Voyager gratuitement le week-end"], correct: 1 },
      { question: "Que donne l'abonnement général (AG) ?", choices: ["La moitié du prix sur les trains", "L'accès à tous les transports sans limitation", "L'accès aux trains uniquement", "Des réductions pour les familles"], correct: 1 },
      { question: "À qui s'adresse l'abonnement junior ?", choices: ["Aux moins de 16 ans", "Aux moins de 20 ans", "Aux moins de 25 ans", "Aux moins de 30 ans"], correct: 2 },
      { question: "Qu'est-ce qui est cité comme exemple à suivre pour les transports suisses ?", choices: ["Le prix et la technologie", "La ponctualité et la propreté", "La vitesse et le confort", "La fréquence et la diversité"], correct: 1 },
    ],
  },

  // ——— AVANCÉ (B1/B2) ———
  {
    id: "avance-integration",
    level: "avance",
    title: "L'intégration en Suisse",
    body: "L'intégration des personnes étrangères en Suisse est un processus complexe qui touche de nombreux aspects de la vie : la langue, le travail, l'école, les relations sociales et la compréhension des institutions. La Suisse accueille une proportion importante d'étrangers — environ 25 % de la population résidente — ce qui en fait l'un des pays les plus cosmopolites d'Europe.\n\nPour faciliter l'intégration, la Confédération et les cantons proposent diverses mesures. Les cours de langue sont souvent la première étape, car maîtriser l'une des langues nationales est essentiel pour s'insérer dans la vie professionnelle et sociale. Des programmes de conseil et d'accompagnement sont également disponibles pour aider les nouveaux arrivants à comprendre le fonctionnement de la société suisse : le système scolaire, les obligations administratives, la culture du travail et les valeurs civiques.\n\nL'intégration est cependant un processus à double sens : elle implique des efforts de la part des personnes qui arrivent, mais aussi de la société d'accueil. Les employeurs, les écoles, les communes et les associations jouent tous un rôle dans la création d'un environnement inclusif.",
    questions: [
      { question: "Quel pourcentage de la population suisse est composé d'étrangers ?", choices: ["Environ 10 %", "Environ 15 %", "Environ 25 %", "Environ 35 %"], correct: 2 },
      { question: "Quelle est décrite comme la première étape de l'intégration ?", choices: ["Trouver un emploi", "Apprendre une langue nationale", "Inscrire ses enfants à l'école", "Comprendre les institutions"], correct: 1 },
      { question: "Quels acteurs sont mentionnés comme jouant un rôle dans l'intégration ?", choices: ["Uniquement les écoles et communes", "Les employeurs, écoles, communes et associations", "Seulement la Confédération", "Uniquement les étrangers eux-mêmes"], correct: 1 },
      { question: "Comment le texte définit-il l'intégration ?", choices: ["Comme un processus unilatéral", "Comme une obligation légale", "Comme un processus à double sens", "Comme un processus uniquement culturel"], correct: 2 },
      { question: "Qu'est-ce qui est dit sur la Suisse en termes de cosmopolitisme ?", choices: ["Elle est parmi les moins cosmopolites", "Elle est l'un des pays les plus cosmopolites d'Europe", "Elle a fermé ses frontières", "Elle accueille peu d'étrangers"], correct: 1 },
      { question: "Quel aspect n'est pas mentionné comme touché par l'intégration ?", choices: ["Le travail", "La religion", "L'école", "Les relations sociales"], correct: 1 },
      { question: "Quel est le rôle des programmes de conseil mentionnés dans le texte ?", choices: ["Apprendre le français uniquement", "Aider à comprendre le fonctionnement de la société suisse", "Fournir un emploi aux nouveaux arrivants", "Gérer les demandes d'asile"], correct: 1 },
    ],
  },
  {
    id: "avance-politique",
    level: "avance",
    title: "Le système politique suisse",
    body: "La Suisse est une démocratie directe fédérale. Elle est composée de 26 cantons qui ont chacun leurs propres lois et leur propre gouvernement. Au niveau fédéral, le pouvoir législatif est exercé par le Parlement, qui comprend deux chambres : le Conseil national (200 membres) et le Conseil des États (46 membres). Le pouvoir exécutif est exercé par le Conseil fédéral, composé de sept membres élus par le Parlement pour une durée de quatre ans.\n\nCe qui rend la Suisse unique, c'est son système de démocratie directe. Les citoyens peuvent intervenir directement dans les décisions politiques grâce à deux instruments principaux. L'initiative populaire permet à 100 000 citoyens de proposer une modification de la Constitution. Le référendum, obligatoire ou facultatif, permet au peuple de voter sur des lois décidées par le Parlement.\n\nCe système signifie que les citoyens votent plusieurs fois par an sur des questions variées. Certains voient dans ce système un modèle de participation citoyenne ; d'autres estiment qu'il peut ralentir le processus législatif.",
    questions: [
      { question: "De combien de cantons la Suisse est-elle composée ?", choices: ["23", "24", "26", "28"], correct: 2 },
      { question: "Combien de membres compte le Conseil national ?", choices: ["46", "100", "200", "246"], correct: 2 },
      { question: "Pour quelle durée les membres du Conseil fédéral sont-ils élus ?", choices: ["Deux ans", "Quatre ans", "Six ans", "À vie"], correct: 1 },
      { question: "Combien de signatures faut-il pour une initiative populaire ?", choices: ["10 000", "50 000", "100 000", "200 000"], correct: 2 },
      { question: "Quelle est la différence entre initiative et référendum ?", choices: ["Il n'y en a pas", "L'initiative propose une modification constitutionnelle ; le référendum porte sur une loi du Parlement", "Le référendum propose une modification de la Constitution", "Seul le référendum est obligatoire"], correct: 1 },
      { question: "Quelle critique certains font-ils du système suisse ?", choices: ["Il donne trop de pouvoir aux cantons", "Il exclut les étrangers", "Il peut ralentir le processus législatif", "Il est trop coûteux"], correct: 2 },
      { question: "Qu'est-ce qui rend le système suisse unique selon le texte ?", choices: ["Son fédéralisme", "Sa neutralité", "Sa démocratie directe", "Sa richesse économique"], correct: 2 },
    ],
  },
  {
    id: "avance-environnement",
    level: "avance",
    title: "L'environnement et la durabilité en Suisse",
    body: "La Suisse se distingue par une politique environnementale ambitieuse et une sensibilité marquée des citoyens aux questions écologiques. Le pays a développé un système de tri des déchets particulièrement efficace : le verre, le papier, le métal, le plastique et les déchets organiques sont collectés séparément. Jeter des déchets dans les mauvaises poubelles ou dans la nature est considéré comme une infraction grave.\n\nLa Suisse s'est également fixé des objectifs climatiques stricts. Elle vise à atteindre la neutralité carbone d'ici 2050, en réduisant ses émissions de gaz à effet de serre dans les secteurs de l'énergie, des transports et du bâtiment. L'énergie hydraulique joue un rôle central dans la production d'électricité, représentant plus de 55 % de la production nationale.\n\nMalgré ces efforts, la Suisse fait face à des défis importants. La fonte des glaciers alpins, accélérée par le réchauffement climatique, menace les réserves d'eau douce et les écosystèmes de montagne. Les experts estiment que si la tendance actuelle continue, deux tiers des glaciers suisses pourraient avoir disparu d'ici la fin du siècle.",
    questions: [
      { question: "Comment est décrit le système de tri des déchets suisse ?", choices: ["Peu développé", "Particulièrement efficace", "Identique à tous les pays européens", "Encore en cours de développement"], correct: 1 },
      { question: "Quelle est l'attitude face aux mauvais tris ou aux déchets dans la nature en Suisse ?", choices: ["C'est toléré", "C'est une petite infraction", "C'est considéré comme une infraction grave", "C'est puni par une peine de prison"], correct: 2 },
      { question: "Quel objectif climatique la Suisse s'est-elle fixé ?", choices: ["Réduire les émissions de 50 % d'ici 2030", "Atteindre la neutralité carbone d'ici 2050", "Supprimer toutes les voitures d'ici 2040", "Passer à 100 % d'énergies renouvelables d'ici 2035"], correct: 1 },
      { question: "Quelle part de l'électricité suisse provient de l'énergie hydraulique ?", choices: ["Plus de 20 %", "Environ 40 %", "Plus de 55 %", "Environ 70 %"], correct: 2 },
      { question: "Quel est le principal défi environnemental mentionné pour la Suisse ?", choices: ["La pollution de l'air dans les villes", "La déforestation", "La fonte des glaciers alpins", "La pollution des rivières"], correct: 2 },
      { question: "Que pourrait-il arriver aux glaciers suisses d'ici la fin du siècle ?", choices: ["Ils pourraient doubler de taille", "Ils ne changeraient pas", "Un tiers pourrait disparaître", "Deux tiers pourraient avoir disparu"], correct: 3 },
      { question: "Quelle ressource est menacée par la fonte des glaciers selon le texte ?", choices: ["L'énergie hydraulique uniquement", "Les réserves d'eau douce et les écosystèmes de montagne", "Les zones agricoles de plaine", "Le tourisme uniquement"], correct: 1 },
    ],
  },
  {
    id: "avance-travail",
    level: "avance",
    title: "Le marché du travail suisse",
    body: "Le marché du travail suisse est réputé pour sa flexibilité et son dynamisme. La Suisse affiche l'un des taux de chômage les plus bas d'Europe, souvent inférieur à 3 %. Cette situation favorable s'explique par plusieurs facteurs : une économie diversifiée et innovante, une formation professionnelle duale très valorisée et un cadre légal du travail relativement souple.\n\nLa formation professionnelle duale, qui combine une formation pratique en entreprise et un enseignement théorique à l'école, est particulièrement prisée en Suisse. Environ deux tiers des jeunes Suisses choisissent cette voie après l'école obligatoire, ce qui garantit une insertion rapide dans le marché du travail. Les apprentis sont formés dans plus de 200 métiers différents.\n\nCependant, le marché du travail suisse n'est pas sans défis. La numérisation et l'automatisation transforment de nombreux secteurs, créant de nouveaux métiers tout en en rendant d'autres obsolètes. De plus, la concurrence internationale et les accords bilatéraux avec l'Union européenne influencent fortement les conditions d'emploi, notamment dans les secteurs exposés à la libre circulation des travailleurs.",
    questions: [
      { question: "Quel est approximativement le taux de chômage en Suisse selon le texte ?", choices: ["Inférieur à 1 %", "Souvent inférieur à 3 %", "Environ 5 %", "Entre 5 et 10 %"], correct: 1 },
      { question: "Qu'est-ce que la formation professionnelle duale ?", choices: ["Une formation uniquement scolaire", "Une formation qui combine pratique en entreprise et enseignement théorique", "Une formation universitaire sur deux ans", "Une formation à distance"], correct: 1 },
      { question: "Quelle proportion de jeunes Suisses choisit la formation professionnelle ?", choices: ["Un tiers", "La moitié", "Deux tiers", "Presque tous"], correct: 2 },
      { question: "Dans combien de métiers les apprentis peuvent-ils se former ?", choices: ["Plus de 50", "Plus de 100", "Plus de 200", "Plus de 500"], correct: 2 },
      { question: "Quels sont les défis du marché du travail mentionnés dans le texte ?", choices: ["Le vieillissement de la population uniquement", "La numérisation et la concurrence internationale", "Uniquement les accords avec l'UE", "Le manque de main-d'œuvre qualifiée"], correct: 1 },
      { question: "Quel effet a la numérisation sur le marché du travail selon le texte ?", choices: ["Elle supprime tous les emplois", "Elle crée de nouveaux métiers tout en en rendant d'autres obsolètes", "Elle n'a aucun impact", "Elle augmente uniquement le chômage"], correct: 1 },
      { question: "Qu'est-ce qui explique le faible taux de chômage en Suisse selon le texte ?", choices: ["Uniquement la formation professionnelle", "La taille réduite du pays", "Une économie diversifiée, la formation duale et un cadre légal souple", "Les accords avec l'Union européenne"], correct: 2 },
    ],
  },
];

export function getCETextsForLevel(level: "base" | "moyen" | "avance"): CEText[] {
  return CE_TEXTS.filter((t) => t.level === level);
}

export function randomCEText(level: "base" | "moyen" | "avance"): CEText {
  const pool = getCETextsForLevel(level);
  return pool[Math.floor(Math.random() * pool.length)]!;
}
