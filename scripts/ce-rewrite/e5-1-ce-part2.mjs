/** @type {import('./helpers.mjs').ItemSpec[]} */
export const E5_1_CE_PART2 = [
  {
    slug: "e5-1-ce-6",
    text: `Affiche — Urgences médicales : quand appeler le 144 ?

Appelez le 144 si :
— une personne ne respire plus ;
— une personne est inconsciente ;
— il y a une hémorragie importante ;
— une personne a une forte douleur à la poitrine.
N'appelez pas le 144 pour un simple rhume ou une petite coupure.
En cas de doute, le 144 vous conseille.
Le service est gratuit et disponible 24 h sur 24.`,
    questions: [
      { textQ: "Quand faut-il appeler le 144 ?", choices: ["Si une personne ne respire plus", "Pour un simple rhume", "Pour demander l'heure"], correct: 0, fillQ: "Appelez le 144 si une personne ne _________ plus.", fill: "respire", vfQ: "On appelle le 144 si une personne ne respire plus.", vfCorrect: 0 },
      { textQ: "Faut-il appeler le 144 pour un rhume ?", choices: ["Non", "Oui, toujours", "Oui, le dimanche seulement"], correct: 0, fillQ: "N'appelez pas le 144 pour un simple _________.", fill: "rhume", vfQ: "Le 144 est pour un simple rhume.", vfCorrect: 1 },
      { textQ: "Le service du 144 est-il payant ?", choices: ["Non, il est gratuit", "Oui, 10 francs", "Oui, 100 francs"], correct: 0, fillQ: "Le service est _________ et disponible 24 h sur 24.", fill: "gratuit", vfQ: "Le 144 est gratuit.", vfCorrect: 0 },
      { textQ: "Le 144 est disponible quand ?", choices: ["24 h sur 24", "Seulement le matin", "Seulement le week-end"], correct: 0, fillQ: "Disponible _________ h sur 24.", fill: "24", vfQ: "Le 144 fonctionne 24 h sur 24.", vfCorrect: 0 },
      { textQ: "Que faire en cas de doute ?", choices: ["Appeler le 144 pour un conseil", "Attendre une semaine", "Aller au cinéma"], correct: 0, fillQ: "En cas de doute, le 144 vous _________.", fill: "conseille", vfQ: "En cas de doute, on peut appeler le 144.", vfCorrect: 0 },
      { textQ: "Quel cas est une urgence selon le texte ?", choices: ["Une forte douleur à la poitrine", "Un petit mal de tête", "Une envie de dormir"], correct: 0, fillQ: "Une forte douleur à la _________.", fill: "poitrine", vfQ: "Une douleur à la poitrine est une urgence.", vfCorrect: 0 },
      { textQ: "Quel numéro d'urgence est indiqué ?", choices: ["Le 144", "Le 999", "Le 000"], correct: 0, fillQ: "Appelez le _________.", fill: "144", vfQ: "Le numéro indiqué est le 144.", vfCorrect: 0 },
    ],
  },
  {
    slug: "e5-1-ce-7",
    text: `Message sur un forum — Cherche médecin à Lausanne

Bonjour,
Je m'appelle Sofia. J'habite à Lausanne depuis deux mois.
Je cherche un médecin qui parle espagnol et français.
J'ai besoin d'un rendez-vous pour un contrôle général.
Mon assurance est CSS. Je peux me déplacer près de la gare.
Merci de vos conseils !
Sofia`,
    questions: [
      { textQ: "Comment s'appelle la personne ?", choices: ["Sofia", "Marie", "Lucas"], correct: 0, fillQ: "Je m'appelle _________.", fill: "Sofia", vfQ: "La personne s'appelle Sofia.", vfCorrect: 0 },
      { textQ: "Depuis combien de temps habite-t-elle à Lausanne ?", choices: ["Depuis deux mois", "Depuis deux ans", "Depuis deux jours"], correct: 0, fillQ: "J'habite à Lausanne depuis deux _________.", fill: "mois", vfQ: "Sofia habite à Lausanne depuis deux mois.", vfCorrect: 0 },
      { textQ: "Quelles langues doit parler le médecin ?", choices: ["Espagnol et français", "Allemand seulement", "Italien seulement"], correct: 0, fillQ: "Un médecin qui parle espagnol et _________.", fill: "français", fillA: ["francais"], vfQ: "Le médecin doit parler espagnol et français.", vfCorrect: 0 },
      { textQ: "Pourquoi Sofia cherche un médecin ?", choices: ["Pour un contrôle général", "Pour acheter des chaussures", "Pour un voyage"], correct: 0, fillQ: "J'ai besoin d'un rendez-vous pour un contrôle _________.", fill: "général", fillA: ["general"], vfQ: "Sofia veut un contrôle général.", vfCorrect: 0 },
      { textQ: "Quelle est son assurance ?", choices: ["CSS", "Swica", "Visana"], correct: 0, fillQ: "Mon assurance est _________.", fill: "CSS", vfQ: "L'assurance de Sofia est CSS.", vfCorrect: 0 },
      { textQ: "Où peut-elle se déplacer ?", choices: ["Près de la gare", "À la montagne", "À la plage"], correct: 0, img: ["gare", "pharmacie", "hôpital"], imgCorrect: 0, fillQ: "Je peux me déplacer près de la _________.", fill: "gare", vfQ: "Sofia peut aller près de la gare.", vfCorrect: 0 },
      { textQ: "Que demande Sofia sur le forum ?", choices: ["Des conseils pour trouver un médecin", "Une recette de gâteau", "Un billet de train"], correct: 0, fillQ: "Merci de vos _________ !", fill: "conseils", vfQ: "Sofia demande des conseils.", vfCorrect: 0 },
    ],
  },
  {
    slug: "e5-1-ce-8",
    text: `Carte — Centre de santé Les Acacias

Services disponibles :
— médecin généraliste (sur rendez-vous) ;
— infirmier pour les pansements ;
— sage-femme le mardi ;
— permanence sans rendez-vous le mercredi de 8 h à 10 h.
Horaires : lundi–vendredi 7 h 30–19 h, samedi 8 h–12 h.
Adresse : avenue des Acacias 20.
Parking gratuit pour les patients.`,
    questions: [
      { textQ: "Quel jour y a-t-il une permanence sans rendez-vous ?", choices: ["Le mercredi matin", "Le dimanche soir", "Le vendredi nuit"], correct: 0, fillQ: "Permanence sans rendez-vous le _________ de 8 h à 10 h.", fill: "mercredi", vfQ: "La permanence sans RDV est mercredi matin.", vfCorrect: 0 },
      { textQ: "Qui est disponible le mardi ?", choices: ["La sage-femme", "Le dentiste", "Le pilote"], correct: 0, img: ["infirmier", "médecin", "dentiste"], imgCorrect: 0, fillQ: "Sage-_________ le mardi.", fill: "femme", vfQ: "La sage-femme est là le mardi.", vfCorrect: 0 },
      { textQ: "Quels jours le centre est-il ouvert le samedi ?", choices: ["De 8 h à 12 h", "De 20 h à 23 h", "Fermé"], correct: 0, fillQ: "Samedi 8 h–_________ h.", fill: "12", fillA: ["midi", "douze"], vfQ: "Le centre est ouvert samedi matin.", vfCorrect: 0 },
      { textQ: "Quelle est l'adresse ?", choices: ["Avenue des Acacias 20", "Rue du Lac 1", "Place de la Gare 9"], correct: 0, fillQ: "Adresse : avenue des Acacias _________.", fill: "20", vfQ: "Le centre est avenue des Acacias 20.", vfCorrect: 0 },
      { textQ: "Le parking est-il payant ?", choices: ["Non, il est gratuit", "Oui, 5 francs", "Oui, 50 francs"], correct: 0, fillQ: "Parking _________ pour les patients.", fill: "gratuit", vfQ: "Le parking est gratuit.", vfCorrect: 0 },
      { textQ: "Qui fait les pansements ?", choices: ["L'infirmier", "Le professeur", "Le boulanger"], correct: 0, img: ["infirmier", "professeur", "boulanger"], imgCorrect: 0, fillQ: "_________ pour les pansements.", fill: "Infirmier", fillA: ["infirmiere", "L'infirmier", "L'infirmière"], vfQ: "L'infirmier fait les pansements.", vfCorrect: 0 },
      { textQ: "Faut-il un rendez-vous pour le médecin généraliste ?", choices: ["Oui, sur rendez-vous", "Non, jamais", "Seulement le dimanche"], correct: 0, fillQ: "Médecin généraliste sur _________.", fill: "rendez-vous", fillA: ["rendez vous"], vfQ: "Le médecin généraliste reçoit sur rendez-vous.", vfCorrect: 0 },
    ],
  },
  {
    slug: "e5-1-ce-9",
    text: `Consignes — Téléconsultation avec le Dr Faure

Votre rendez-vous en ligne est jeudi 20 juin à 11 h.
Vous recevrez un lien par e-mail dix minutes avant.
Utilisez un ordinateur ou une tablette avec caméra et micro.
Installez-vous dans une pièce calme, avec une bonne connexion Internet.
La consultation dure environ 20 minutes.
Si la connexion ne marche pas, appelez le secrétariat au 021 222 33 44.`,
    questions: [
      { textQ: "Quel jour est la téléconsultation ?", choices: ["Jeudi 20 juin", "Lundi 3 mars", "Samedi 1er mai"], correct: 0, fillQ: "Rendez-vous jeudi 20 _________.", fill: "juin", vfQ: "La téléconsultation est jeudi 20 juin.", vfCorrect: 0 },
      { textQ: "À quelle heure commence la consultation ?", choices: ["À 11 h", "À 7 h", "À 23 h"], correct: 0, fillQ: "Rendez-vous à _________ h.", fill: "11", fillA: ["onze"], vfQ: "La consultation est à 11 h.", vfCorrect: 0 },
      { textQ: "Comment reçoit-on le lien ?", choices: ["Par e-mail", "Par la poste", "Au restaurant"], correct: 0, fillQ: "Vous recevrez un lien par _________.", fill: "e-mail", fillA: ["email", "mail"], vfQ: "Le lien arrive par e-mail.", vfCorrect: 0 },
      { textQ: "Quel appareil faut-il utiliser ?", choices: ["Ordinateur ou tablette avec caméra", "Une radio", "Un vélo"], correct: 0, fillQ: "Utilisez un _________ ou une tablette avec caméra.", fill: "ordinateur", vfQ: "Il faut un ordinateur ou une tablette.", vfCorrect: 0 },
      { textQ: "Combien de temps dure la consultation ?", choices: ["Environ 20 minutes", "Environ 3 heures", "Environ 2 jours"], correct: 0, fillQ: "La consultation dure environ _________ minutes.", fill: "20", fillA: ["vingt"], vfQ: "La consultation dure 20 minutes.", vfCorrect: 0 },
      { textQ: "Où faut-il s'installer ?", choices: ["Dans une pièce calme", "Dans la rue", "Dans le bus"], correct: 0, fillQ: "Installez-vous dans une pièce _________.", fill: "calme", vfQ: "Il faut une pièce calme.", vfCorrect: 0 },
      { textQ: "Que faire si la connexion ne marche pas ?", choices: ["Appeler le secrétariat", "Annuler tout", "Dormir"], correct: 0, fillQ: "Appelez le _________ au 021 222 33 44.", fill: "secrétariat", fillA: ["secretariat"], vfQ: "On peut appeler le secrétariat.", vfCorrect: 0 },
    ],
  },
  {
    slug: "e5-1-ce-10",
    text: `Affiche — Service de pédiatrie, Clinique du Lac

Le service de pédiatrie reçoit les enfants de 0 à 12 ans.
Consultations sur rendez-vous : lundi à vendredi, 8 h–17 h.
Le Dr Petit reçoit sans rendez-vous le mercredi de 14 h à 16 h (grippe et fièvre seulement).
Apportez le carnet de vaccination de l'enfant.
Les parents peuvent accompagner l'enfant dans la salle de consultation.
Urgences pédiatriques : composez le 144.`,
    questions: [
      { textQ: "Pour quels âges est le service ?", choices: ["De 0 à 12 ans", "De 18 à 65 ans", "Seulement les adultes"], correct: 0, fillQ: "Enfants de 0 à _________ ans.", fill: "12", fillA: ["douze"], vfQ: "Le service est pour les enfants jusqu'à 12 ans.", vfCorrect: 0 },
      { textQ: "Quand le Dr Petit reçoit-il sans rendez-vous ?", choices: ["Mercredi 14 h–16 h", "Dimanche matin", "Vendredi nuit"], correct: 0, fillQ: "Sans rendez-vous le _________ de 14 h à 16 h.", fill: "mercredi", vfQ: "Le Dr Petit reçoit sans RDV mercredi après-midi.", vfCorrect: 0 },
      { textQ: "Pour quels problèmes sans rendez-vous ?", choices: ["Grippe et fièvre seulement", "Tous les problèmes", "Problèmes de dents"], correct: 0, fillQ: "Grippe et _________ seulement.", fill: "fièvre", fillA: ["fievre"], vfQ: "Sans RDV : grippe et fièvre seulement.", vfCorrect: 0 },
      { textQ: "Que faut-il apporter pour l'enfant ?", choices: ["Le carnet de vaccination", "Un ballon de foot", "Un ordinateur"], correct: 0, fillQ: "Apportez le carnet de _________.", fill: "vaccination", vfQ: "Il faut le carnet de vaccination.", vfCorrect: 0 },
      { textQ: "Les parents peuvent-ils entrer avec l'enfant ?", choices: ["Oui", "Non, jamais", "Seulement le dimanche"], correct: 0, fillQ: "Les parents peuvent _________ l'enfant.", fill: "accompagner", vfQ: "Les parents peuvent accompagner l'enfant.", vfCorrect: 0 },
      { textQ: "Quel numéro pour les urgences pédiatriques ?", choices: ["Le 144", "Le 111", "Le 222"], correct: 0, fillQ: "Urgences pédiatriques : composez le _________.", fill: "144", vfQ: "Le 144 est pour les urgences pédiatriques.", vfCorrect: 0 },
      { textQ: "Quels jours les consultations sur rendez-vous ?", choices: ["Lundi à vendredi", "Samedi et dimanche", "Seulement le mardi"], correct: 0, fillQ: "Consultations lundi à _________.", fill: "vendredi", vfQ: "Les RDV sont du lundi au vendredi.", vfCorrect: 0 },
    ],
  },
  {
    slug: "e5-1-ce-11",
    text: `Notice — Avant votre consultation

Merci d'arriver dix minutes avant l'heure du rendez-vous.
Apportez : votre carte d'assurance, une pièce d'identité, la liste de vos médicaments actuels.
Si vous avez des examens récents (radio, analyse de sang), apportez les résultats.
Ne fumez pas dans le cabinet.
Les animaux ne sont pas acceptés, sauf chiens d'assistance.
Merci.`,
    questions: [
      { textQ: "Combien de temps avant faut-il arriver ?", choices: ["Dix minutes", "Deux heures", "Une semaine"], correct: 0, fillQ: "Arrivez dix _________ avant l'heure.", fill: "minutes", vfQ: "Il faut arriver dix minutes avant.", vfCorrect: 0 },
      { textQ: "Que faut-il apporter obligatoirement ?", choices: ["Carte d'assurance et pièce d'identité", "Un chat", "Des fleurs"], correct: 0, fillQ: "Apportez votre carte d'_________.", fill: "assurance", vfQ: "Il faut une pièce d'identité.", vfCorrect: 0 },
      { textQ: "Faut-il apporter la liste des médicaments ?", choices: ["Oui", "Non", "Seulement le week-end"], correct: 0, fillQ: "La liste de vos _________ actuels.", fill: "médicaments", fillA: ["medicaments"], vfQ: "Il faut la liste des médicaments.", vfCorrect: 0 },
      { textQ: "Que faire avec les résultats d'examens récents ?", choices: ["Les apporter", "Les jeter", "Les oublier"], correct: 0, fillQ: "Apportez les _________.", fill: "résultats", fillA: ["resultats"], vfQ: "Il faut apporter les résultats d'examens.", vfCorrect: 0 },
      { textQ: "Peut-on fumer dans le cabinet ?", choices: ["Non", "Oui", "Oui, dans la salle d'attente"], correct: 0, fillQ: "Ne _________ pas dans le cabinet.", fill: "fumez", vfQ: "Il est interdit de fumer.", vfCorrect: 0 },
      { textQ: "Les animaux sont-ils acceptés ?", choices: ["Non, sauf chiens d'assistance", "Oui, tous les animaux", "Oui, seulement les chats"], correct: 0, fillQ: "Sauf chiens d'_________.", fill: "assistance", vfQ: "Les chiens d'assistance sont acceptés.", vfCorrect: 0 },
      { textQ: "Quel type de document est cette notice ?", choices: ["Des consignes avant consultation", "Un menu de restaurant", "Un horaire de bus"], correct: 0, fillQ: "Avant votre _________.", fill: "consultation", vfQ: "C'est une notice avant consultation.", vfCorrect: 0 },
    ],
  },
  {
    slug: "e5-1-ce-12",
    text: `Panneau d'orientation — Hôpital Universitaire

Rez-de-chaussée : accueil, urgences, radiologie.
1er étage : consultations externes, laboratoire.
2e étage : maternité et pédiatrie.
3e étage : chirurgie et hospitalisation.
Ascenseurs A et B : tous les étages.
Visiteurs : de 14 h à 20 h. Merci de vous présenter à l'accueil.`,
    questions: [
      { textQ: "Où sont les urgences ?", choices: ["Au rez-de-chaussée", "Au 3e étage", "Au parking"], correct: 0, fillQ: "Rez-de-chaussée : accueil, _________.", fill: "urgences", vfQ: "Les urgences sont au rez-de-chaussée.", vfCorrect: 0 },
      { textQ: "Qu'est-ce qu'il y a au 1er étage ?", choices: ["Consultations externes et laboratoire", "La maternité", "Le restaurant"], correct: 0, fillQ: "1er étage : consultations externes, _________.", fill: "laboratoire", vfQ: "Le laboratoire est au 1er étage.", vfCorrect: 0 },
      { textQ: "Où se trouve la pédiatrie ?", choices: ["Au 2e étage", "Au rez-de-chaussée", "Dehors"], correct: 0, fillQ: "2e étage : maternité et _________.", fill: "pédiatrie", fillA: ["pediatrie"], vfQ: "La pédiatrie est au 2e étage.", vfCorrect: 0 },
      { textQ: "Quels ascenseurs servent tous les étages ?", choices: ["A et B", "C seulement", "Aucun"], correct: 0, fillQ: "Ascenseurs _________ et B.", fill: "A", vfQ: "Les ascenseurs A et B vont à tous les étages.", vfCorrect: 0 },
      { textQ: "À quelles heures peuvent venir les visiteurs ?", choices: ["De 14 h à 20 h", "De 6 h à 7 h", "Toute la nuit"], correct: 0, fillQ: "Visiteurs : de 14 h à _________ h.", fill: "20", fillA: ["vingt"], vfQ: "Les visites sont de 14 h à 20 h.", vfCorrect: 0 },
      { textQ: "Où doivent aller les visiteurs d'abord ?", choices: ["À l'accueil", "Directement en chirurgie", "Au parking"], correct: 0, fillQ: "Présentez-vous à l'_________.", fill: "accueil", vfQ: "Les visiteurs vont d'abord à l'accueil.", vfCorrect: 0 },
      { textQ: "Quel étage pour la chirurgie ?", choices: ["Le 3e étage", "Le rez-de-chaussée", "Le sous-sol"], correct: 0, fillQ: "3e étage : _________ et hospitalisation.", fill: "chirurgie", vfQ: "La chirurgie est au 3e étage.", vfCorrect: 0 },
    ],
  },
  {
    slug: "e5-1-ce-13",
    text: `Flyer — Dépistage du diabète, gratuit

La fondation Santé Pour Tous propose un dépistage gratuit.
Date : jeudi 5 décembre, 8 h–12 h.
Lieu : maison des associations, place du Marché.
Pas de rendez-vous. Test rapide : une goutte de sang au doigt.
Résultat en 5 minutes. Conseils avec une infirmière.
Pour les adultes de 40 ans et plus.`,
    questions: [
      { textQ: "Le dépistage est-il payant ?", choices: ["Non, il est gratuit", "Oui, 30 francs", "Oui, 80 francs"], correct: 0, fillQ: "Dépistage _________.", fill: "gratuit", vfQ: "Le dépistage est gratuit.", vfCorrect: 0 },
      { textQ: "Quel jour a lieu le dépistage ?", choices: ["Jeudi 5 décembre", "Samedi 1er août", "Mardi 2 février"], correct: 0, fillQ: "Jeudi 5 _________.", fill: "décembre", fillA: ["decembre"], vfQ: "C'est jeudi 5 décembre.", vfCorrect: 0 },
      { textQ: "Où a lieu le dépistage ?", choices: ["Maison des associations, place du Marché", "À l'aéroport", "À la piscine"], correct: 0, fillQ: "Lieu : maison des associations, place du _________.", fill: "Marché", vfQ: "C'est place du Marché.", vfCorrect: 0 },
      { textQ: "Faut-il un rendez-vous ?", choices: ["Non", "Oui", "Oui, par téléphone seulement"], correct: 0, fillQ: "Pas de _________.", fill: "rendez-vous", fillA: ["rendez vous"], vfQ: "Il faut un rendez-vous.", vfCorrect: 1 },
      { textQ: "Combien de temps pour le résultat ?", choices: ["5 minutes", "5 jours", "5 mois"], correct: 0, fillQ: "Résultat en _________ minutes.", fill: "5", fillA: ["cinq"], vfQ: "Le résultat est en 5 minutes.", vfCorrect: 0 },
      { textQ: "Pour qui est ce dépistage ?", choices: ["Adultes de 40 ans et plus", "Bébés seulement", "Adolescents seulement"], correct: 0, fillQ: "Pour les adultes de _________ ans et plus.", fill: "40", fillA: ["quarante"], vfQ: "C'est pour les adultes de 40 ans et plus.", vfCorrect: 0 },
      { textQ: "Qui donne des conseils ?", choices: ["Une infirmière", "Un chauffeur", "Un vendeur"], correct: 0, img: ["infirmier", "chauffeur", "vendeur"], imgCorrect: 0, fillQ: "Conseils avec une _________.", fill: "infirmière", fillA: ["infirmiere"], vfQ: "Une infirmière donne des conseils.", vfCorrect: 0 },
    ],
  },
];
