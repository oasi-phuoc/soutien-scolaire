/** @type {import('./helpers.mjs').ItemSpec[]} */
export const E5_1_CE = [
  {
    slug: "e5-1-ce-1",
    text: `Affiche — Cabinet médical Les Tilleuls

Le cabinet est ouvert du lundi au vendredi, de 8 h à 18 h.
Pour un rendez-vous, appelez le 021 345 67 89 ou allez sur notre site Internet.
Le Dr Martin reçoit sans rendez-vous le mercredi matin, de 9 h à 12 h.
Si vous toussez ou si vous avez de la fièvre, mettez un masque dans la salle d'attente.
Apportez votre carte d'assurance à chaque visite.
Le week-end, le cabinet est fermé. Pour une urgence, composez le 144.`,
    questions: [
      { textQ: "Quels jours le cabinet est-il ouvert ?", choices: ["Du lundi au vendredi", "Tous les jours", "Seulement le mercredi"], correct: 0, fillQ: "Le cabinet est ouvert du lundi au _________.", fill: "vendredi", vfQ: "Le cabinet est ouvert le samedi.", vfCorrect: 1 },
      { textQ: "Comment prendre rendez-vous ?", choices: ["Par téléphone ou sur Internet", "Par lettre", "Au guichet de la gare"], correct: 0, fillQ: "Appelez le 021 345 67 89 ou allez sur notre site _________.", fill: "Internet", fillA: ["internet"], vfQ: "On peut prendre rendez-vous sur Internet.", vfCorrect: 0 },
      { textQ: "Quand le Dr Martin reçoit-il sans rendez-vous ?", choices: ["Le mercredi matin", "Le vendredi soir", "Le dimanche"], correct: 0, fillQ: "Le Dr Martin reçoit sans rendez-vous le _________ matin.", fill: "mercredi", vfQ: "Le Dr Martin reçoit sans rendez-vous le mercredi.", vfCorrect: 0 },
      { textQ: "Que faut-il faire si on tousse ?", choices: ["Mettre un masque", "Partir tout de suite", "Appeler la police"], correct: 0, fillQ: "Mettez un _________ dans la salle d'attente.", fill: "masque", vfQ: "Il faut mettre un masque si on tousse.", vfCorrect: 0 },
      { textQ: "Que faut-il apporter à chaque visite ?", choices: ["La carte d'assurance", "Un passeport", "Un livre"], correct: 0, fillQ: "Apportez votre carte d'_________ à chaque visite.", fill: "assurance", vfQ: "Il faut apporter sa carte d'assurance.", vfCorrect: 0 },
      { textQ: "Que faire en cas d'urgence le week-end ?", choices: ["Composer le 144", "Venir au cabinet", "Attendre lundi"], correct: 0, fillQ: "Pour une urgence, composez le _________.", fill: "144", vfQ: "Le 144 est un numéro d'urgence.", vfCorrect: 0 },
      { textQ: "À quelle heure ferme le cabinet ?", choices: ["À 18 h", "À 8 h", "À midi"], correct: 0, fillQ: "Le cabinet ferme à _________ h.", fill: "18", fillA: ["dix-huit"], vfQ: "Le cabinet ferme à 20 h.", vfCorrect: 1 },
    ],
  },
  {
    slug: "e5-1-ce-2",
    text: `SMS — Cabinet du Dr Leroy

Bonjour M. Dupont,
Nous vous rappelons votre rendez-vous demain, mardi 8 avril, à 14 h 30.
Adresse : rue des Lilas 12, 2e étage.
Apportez votre carte d'assurance et vos ordonnances.
Pour annuler, appelez avant 17 h aujourd'hui.
Merci, le secrétariat.`,
    questions: [
      { textQ: "Quel jour est le rendez-vous ?", choices: ["Mardi 8 avril", "Mercredi 9 avril", "Lundi 7 avril"], correct: 0, fillQ: "Votre rendez-vous est demain, mardi 8 _________.", fill: "avril", vfQ: "Le rendez-vous est mardi 8 avril.", vfCorrect: 0 },
      { textQ: "À quelle heure est le rendez-vous ?", choices: ["À 14 h 30", "À 9 h", "À 17 h"], correct: 0, fillQ: "Rendez-vous à 14 h _________.", fill: "30", fillA: ["trente"], vfQ: "Le rendez-vous est à 14 h 30.", vfCorrect: 0 },
      { textQ: "Où se trouve le cabinet ?", choices: ["Rue des Lilas 12", "Avenue du Lac 5", "Place Centrale 1"], correct: 0, fillQ: "Adresse : rue des Lilas _________.", fill: "12", vfQ: "Le cabinet est rue des Lilas 12.", vfCorrect: 0 },
      { textQ: "À quel étage est le cabinet ?", choices: ["Au 2e étage", "Au rez-de-chaussée", "Au 5e étage"], correct: 0, fillQ: "Le cabinet est au _________ étage.", fill: "2e", fillA: ["2", "deuxième", "2ème"], vfQ: "Le cabinet est au premier étage.", vfCorrect: 1 },
      { textQ: "Qu'est-ce qu'il faut apporter ?", choices: ["Carte d'assurance et ordonnances", "Un gâteau", "Des baskets"], correct: 0, fillQ: "Apportez votre carte d'_________.", fill: "assurance", vfQ: "Il faut apporter des ordonnances.", vfCorrect: 0 },
      { textQ: "Jusqu'à quelle heure peut-on annuler aujourd'hui ?", choices: ["Avant 17 h", "Avant 8 h", "Après minuit"], correct: 0, fillQ: "Pour annuler, appelez avant _________ h aujourd'hui.", fill: "17", fillA: ["dix-sept"], vfQ: "On peut annuler après 17 h.", vfCorrect: 1 },
      { textQ: "À qui est adressé ce message ?", choices: ["M. Dupont", "Mme Martin", "Dr Leroy"], correct: 0, fillQ: "Bonjour M. _________.", fill: "Dupont", vfQ: "Le message est pour M. Dupont.", vfCorrect: 0 },
    ],
  },
  {
    slug: "e5-1-ce-3",
    text: `Panneau — Salle d'attente, Hôpital de la Cité

Merci de respecter le silence.
Éteignez ou mettez votre téléphone en mode silencieux.
Portez un masque si vous toussez ou si vous avez de la fièvre.
Une personne accompagne maximum un patient.
Les enfants doivent rester avec un adulte.
Merci de votre compréhension.`,
    questions: [
      { textQ: "Que faut-il faire avec le téléphone ?", choices: ["Le mettre en silencieux", "Le laisser sonner", "Le donner à l'infirmier"], correct: 0, fillQ: "Mettez votre téléphone en mode _________.", fill: "silencieux", vfQ: "Il faut éteindre ou mettre le téléphone en silencieux.", vfCorrect: 0 },
      { textQ: "Quand faut-il porter un masque ?", choices: ["Si on tousse ou a de la fièvre", "Toujours", "Jamais"], correct: 0, fillQ: "Portez un masque si vous _________.", fill: "toussez", fillA: ["tousse"], vfQ: "Il faut un masque si on a de la fièvre.", vfCorrect: 0 },
      { textQ: "Combien de personnes peuvent accompagner un patient ?", choices: ["Une personne maximum", "Trois personnes", "Dix personnes"], correct: 0, fillQ: "Une personne accompagne _________ un patient.", fill: "maximum", vfQ: "Deux personnes peuvent accompagner un patient.", vfCorrect: 1 },
      { textQ: "Où doivent rester les enfants ?", choices: ["Avec un adulte", "Seuls dans la rue", "À la cafétéria"], correct: 0, fillQ: "Les enfants doivent rester avec un _________.", fill: "adulte", vfQ: "Les enfants doivent rester avec un adulte.", vfCorrect: 0 },
      { textQ: "Que demande le panneau dans la salle d'attente ?", choices: ["Le silence", "De la musique", "De chanter"], correct: 0, fillQ: "Merci de respecter le _________.", fill: "silence", vfQ: "On peut parler fort dans la salle d'attente.", vfCorrect: 1 },
      { textQ: "Où se trouve cette salle d'attente ?", choices: ["À l'hôpital de la Cité", "À la pharmacie", "À l'école"], correct: 0, img: ["hôpital", "pharmacie", "école"], imgCorrect: 0, fillQ: "Salle d'attente, Hôpital de la _________.", fill: "Cité", vfQ: "Le panneau est à l'hôpital de la Cité.", vfCorrect: 0 },
      { textQ: "Le panneau parle de quoi ?", choices: ["Des règles dans la salle d'attente", "Des horaires de bus", "Du menu du restaurant"], correct: 0, fillQ: "Merci de respecter le silence dans la salle d'_________.", fill: "attente", vfQ: "Le panneau donne les horaires du bus.", vfCorrect: 1 },
    ],
  },
  {
    slug: "e5-1-ce-4",
    text: `Flyer — Vaccination contre la grippe

La commune organise une vaccination gratuite samedi 12 octobre, de 9 h à 16 h.
Lieu : salle polyvalente, rue du Marché 4.
Pas besoin de rendez-vous. Apportez votre carte d'assurance.
La vaccination est pour les personnes de plus de 65 ans et les personnes à risque.
Les enfants ne sont pas concernés par cette séance.
Renseignements : 021 111 22 33.`,
    questions: [
      { textQ: "Quand a lieu la vaccination ?", choices: ["Samedi 12 octobre", "Lundi 1er janvier", "Mercredi 5 juin"], correct: 0, fillQ: "Vaccination samedi 12 _________.", fill: "octobre", vfQ: "La vaccination est samedi 12 octobre.", vfCorrect: 0 },
      { textQ: "Où a lieu la vaccination ?", choices: ["Salle polyvalente, rue du Marché 4", "À l'aéroport", "À la plage"], correct: 0, fillQ: "Lieu : salle polyvalente, rue du Marché _________.", fill: "4", vfQ: "La vaccination est rue du Marché 4.", vfCorrect: 0 },
      { textQ: "Faut-il un rendez-vous ?", choices: ["Non, pas besoin", "Oui, obligatoire", "Oui, par Internet seulement"], correct: 0, fillQ: "Pas besoin de _________.", fill: "rendez-vous", fillA: ["rendez vous"], vfQ: "Il faut prendre rendez-vous.", vfCorrect: 1 },
      { textQ: "La vaccination est-elle payante ?", choices: ["Non, elle est gratuite", "Oui, 50 francs", "Oui, 200 francs"], correct: 0, fillQ: "Vaccination _________ samedi 12 octobre.", fill: "gratuite", vfQ: "La vaccination est gratuite.", vfCorrect: 0 },
      { textQ: "Pour qui est cette séance ?", choices: ["Personnes de plus de 65 ans et à risque", "Tous les enfants", "Seulement les étudiants"], correct: 0, fillQ: "Pour les personnes de plus de _________ ans.", fill: "65", fillA: ["soixante-cinq"], vfQ: "Les enfants sont concernés par cette séance.", vfCorrect: 1 },
      { textQ: "Quelles heures d'ouverture ?", choices: ["De 9 h à 16 h", "De 20 h à 23 h", "De 6 h à 7 h"], correct: 0, fillQ: "De 9 h à _________ h.", fill: "16", fillA: ["seize"], vfQ: "La séance finit à 16 h.", vfCorrect: 0 },
      { textQ: "Que faut-il apporter ?", choices: ["La carte d'assurance", "Un passeport", "Des skis"], correct: 0, fillQ: "Apportez votre carte d'_________.", fill: "assurance", vfQ: "Il faut apporter sa carte d'assurance.", vfCorrect: 0 },
    ],
  },
  {
    slug: "e5-1-ce-5",
    text: `Note — Infirmerie, Collège des Alpes

Chers parents,
Si votre enfant est malade à l'école, l'infirmière appelle les parents.
L'infirmière peut donner un médicament seulement avec une autorisation écrite des parents.
Chaque élève doit avoir une petite trousse : un pansement et une fiche avec le numéro des parents.
L'infirmière est présente le lundi, le mercredi et le vendredi de 8 h à 12 h.
Pour une urgence grave, composez le 144.
Cordialement, Mme Keller, infirmière.`,
    questions: [
      { textQ: "Qui appelle les parents si l'enfant est malade ?", choices: ["L'infirmière", "Le directeur", "Le cuisinier"], correct: 0, img: ["infirmier", "professeur", "cuisinier"], imgCorrect: 0, fillQ: "L'_________ appelle les parents.", fill: "infirmière", fillA: ["infirmiere"], vfQ: "L'infirmière appelle les parents.", vfCorrect: 0 },
      { textQ: "Quand peut-on donner un médicament à l'école ?", choices: ["Avec une autorisation écrite des parents", "Toujours", "Jamais"], correct: 0, fillQ: "Avec une autorisation _________ des parents.", fill: "écrite", fillA: ["ecrite"], vfQ: "Il faut une autorisation écrite des parents.", vfCorrect: 0 },
      { textQ: "Que doit contenir la trousse de l'élève ?", choices: ["Un pansement et une fiche avec le numéro des parents", "Un livre et un stylo", "Un sandwich"], correct: 0, fillQ: "Un pansement et une _________ avec le numéro des parents.", fill: "fiche", vfQ: "La trousse contient un pansement.", vfCorrect: 0 },
      { textQ: "Quels jours l'infirmière est-elle présente ?", choices: ["Lundi, mercredi et vendredi", "Tous les jours", "Seulement le samedi"], correct: 0, fillQ: "L'infirmière est présente le lundi, le mercredi et le _________.", fill: "vendredi", vfQ: "L'infirmière est là le mardi.", vfCorrect: 1 },
      { textQ: "À quelle heure finit l'infirmière le matin ?", choices: ["À 12 h", "À 18 h", "À 20 h"], correct: 0, fillQ: "De 8 h à _________ h.", fill: "12", fillA: ["midi", "douze"], vfQ: "L'infirmière travaille jusqu'à 12 h.", vfCorrect: 0 },
      { textQ: "Quel numéro pour une urgence grave ?", choices: ["Le 144", "Le 117", "Le 118"], correct: 0, fillQ: "Pour une urgence grave, composez le _________.", fill: "144", vfQ: "Le 144 est pour les urgences.", vfCorrect: 0 },
      { textQ: "À qui est adressée cette note ?", choices: ["Aux parents", "Aux médecins", "Aux chauffeurs de bus"], correct: 0, fillQ: "Chers _________.", fill: "parents", vfQ: "La note est pour les parents.", vfCorrect: 0 },
    ],
  },
];
