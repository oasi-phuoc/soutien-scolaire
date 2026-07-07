import { buildPool, type COMultiQuestion } from "./co-questions-helpers";

const MESSAGE_26 = buildPool("moyen", "message-26", [
  {
    id: "m26-q1", textQ: "Combien de temps durent les vacances ?", text: ["Une semaine", "Deux semaines", "Un mois"], textC: 1,
    img: ["1 semaine", "2 semaines", "1 mois"], imgC: 1,
    fillQ: "Les vacances durent _________ semaines.", fill: "deux", fillA: ["2"],
  },
  {
    id: "m26-q2", textQ: "À quelle heure faut-il nourrir le chat ?", text: ["À 8 h", "À 9 h", "À 10 h"], textC: 1,
    img: ["8 h", "9 h", "10 h"], imgC: 1,
    fillQ: "Il faut venir chaque jour à _________ h.", fill: "9", fillA: ["9h"],
  },
  {
    id: "m26-q3", textQ: "Qu'est-ce qu'il ne faut surtout pas donner au chat ?", text: ["De la pâtée", "Du lait", "Des croquettes"], textC: 1,
    img: ["de la pâtée", "du lait", "des croquettes"], imgC: 1,
    fillQ: "Il ne faut surtout pas lui donner de _________.", fill: "lait",
  },
  {
    id: "m26-q4", textQ: "Où se trouve la nourriture du chat ?", text: ["Dans le placard de l'entrée", "Dans le salon", "Dans la salle de bain"], textC: 0,
    img: ["placard", "salon", "salle de bain"], imgC: 0,
    fillQ: "La nourriture est dans le placard de l'_________.", fill: "entrée", fillA: ["entree"],
  },
  {
    id: "m26-q5", textQ: "Quelle porte faut-il bien fermer ?", text: ["La porte de la cuisine", "La porte du salon", "La porte d'entrée"], textC: 0,
    img: ["cuisine", "salon", "entrée"], imgC: 0,
    fillQ: "Il faut bien fermer la porte de la _________.", fill: "cuisine",
  },
  {
    id: "m26-q6", textQ: "Où sont les jeux du chat ?", text: ["Dans le salon", "Dans la cuisine", "Dans la chambre"], textC: 0,
    img: ["salon", "cuisine", "chambre"], imgC: 0,
    fillQ: "Ses jeux sont dans le _________.", fill: "salon",
  },
  {
    id: "m26-q7", textQ: "Quel est le code de l'immeuble ?", text: ["6991", "6990", "6919"], textC: 0,
    img: ["6991", "6990", "6919"], imgC: 0,
    fillQ: "Le code de l'immeuble est _________.", fill: "6991",
  },
  {
    id: "m26-q8", textQ: "À quel étage habite-t-elle ?", text: ["Au 1er étage", "Au 2e étage", "Au 3e étage"], textC: 1,
    img: ["1er étage", "2e étage", "3e étage"], imgC: 1,
    fillQ: "L'appartement est au _________ étage.", fill: "deuxième", fillA: ["2e", "2ème"],
  },
  {
    id: "m26-q9", textQ: "Quel animal faut-il garder ?", text: ["Un chat", "Un chien", "Un poisson"], textC: 0,
    img: ["chat", "chien", "poisson"], imgC: 0,
    fillQ: "Il faut garder un _________.", fill: "chat",
  },
  {
    id: "m26-q10", textQ: "Que mange le chat ?", text: ["De la pâtée et des croquettes", "Du lait et du pain", "De la viande seulement"], textC: 0,
    img: ["pâtée", "lait", "viande"], imgC: 0,
    fillQ: "Le chat mange de la pâtée et des _________.", fill: "croquettes",
  },
]);

const MESSAGE_27 = buildPool("moyen", "message-27", [
  {
    id: "m27-q1", textQ: "À quelle heure commence le concert ?", text: ["À 19 h 30", "À 21 h", "À 22 h 30"], textC: 1,
    img: ["19h30", "21h", "22h30"], imgC: 1,
    fillQ: "Le concert commence à _________ h.", fill: "21", fillA: ["21h"],
  },
  {
    id: "m27-q2", textQ: "Vers quelle heure finit le concert ?", text: ["Vers 21 h", "Vers 22 h 30", "Vers minuit"], textC: 1,
    img: ["21h", "22h30", "minuit"], imgC: 1,
    fillQ: "Le concert finira vers _________ h 30.", fill: "22",
  },
  {
    id: "m27-q3", textQ: "À quelle heure propose-t-il de manger ?", text: ["Vers 18 h", "Vers 19 h 30", "Vers 20 h 30"], textC: 1,
    img: ["18h", "19h30", "20h30"], imgC: 1,
    fillQ: "On peut manger vers _________ h 30.", fill: "19",
  },
  {
    id: "m27-q4", textQ: "Quel moyen de transport faut-il prendre ?", text: ["Le bus", "Le métro", "Le tramway"], textC: 1,
    img: ["bus", "métro", "tramway"], imgC: 1,
    fillQ: "Il faudra prendre le _________.", fill: "métro", fillA: ["metro"],
  },
  {
    id: "m27-q5", textQ: "Quel jour du mois est le concert ?", text: ["Le 16", "Le 18", "Le 20"], textC: 1,
    img: ["16", "18", "20"], imgC: 1,
    fillQ: "Le concert a lieu le _________.", fill: "18",
  },
  {
    id: "m27-q6", textQ: "Qui paie le repas ?", text: ["C'est lui qui invite", "C'est toi qui paies", "Chacun paie sa part"], textC: 0,
    img: ["invitation", "payer", "partager"], imgC: 0,
    fillQ: "C'est lui qui _________.", fill: "invite",
  },
  {
    id: "m27-q7", textQ: "Où peuvent-ils se retrouver avant le concert ?", text: ["Chez lui", "Au cinéma", "À la gare"], textC: 0,
    img: ["maison", "cinéma", "gare"], imgC: 0,
    fillQ: "On peut se retrouver et y aller _________.", fill: "ensemble",
  },
  {
    id: "m27-q8", textQ: "Quelle activité avant le concert ?", text: ["Manger", "Danser", "Nager"], textC: 0,
    img: ["repas", "danse", "natation"], imgC: 0,
    fillQ: "Avant le concert, on va _________.", fill: "manger",
  },
  {
    id: "m27-q9", textQ: "Comment y aller ensemble ?", text: ["En métro", "En voiture", "À pied seulement"], textC: 0,
    img: ["métro", "voiture", "à pied"], imgC: 0,
    fillQ: "Il faudra prendre le _________.", fill: "métro", fillA: ["metro"],
  },
  {
    id: "m27-q10", textQ: "Que doit-on faire rapidement ?", text: ["Rappeler", "Écrire un courrier", "Acheter les billets"], textC: 0,
    img: ["téléphone", "courrier", "billets"], imgC: 0,
    fillQ: "Il faut _________ vite.", fill: "rappeler",
  },
]);

const MESSAGE_28 = buildPool("moyen", "message-28", [
  {
    id: "m28-q1", textQ: "Qu'arrive-t-il au rendez-vous de 15 h 30 ?", text: ["Il est confirmé", "Il est annulé", "Il est décalé à 16 h 30"], textC: 1,
    img: ["confirmé", "annulé", "décalé"], imgC: 1,
    fillQ: "Le rendez-vous de 15 h 30 est _________.", fill: "annulé", fillA: ["annule"],
  },
  {
    id: "m28-q2", textQ: "Pourquoi le rendez-vous est-il annulé ?", text: ["Le docteur est souffrant", "Le patient est malade", "Le cabinet est fermé"], textC: 0,
    img: ["docteur malade", "patient malade", "cabinet fermé"], imgC: 0,
    fillQ: "Le docteur est _________.", fill: "souffrant",
  },
  {
    id: "m28-q3", textQ: "Quel créneau est proposé le jeudi 14 ?", text: ["À 11 h 15", "À 15 h 30", "À 16 h"], textC: 0,
    img: ["11h15", "15h30", "16h"], imgC: 0,
    fillQ: "Jeudi 14, une place est disponible à _________ h 15.", fill: "11",
  },
  {
    id: "m28-q4", textQ: "Quel créneau est proposé le vendredi 15 ?", text: ["À 11 h 15", "À 15 h 30", "À 16 h"], textC: 1,
    img: ["11h15", "15h30", "16h"], imgC: 1,
    fillQ: "Vendredi 15, une place est disponible à _________ h 30.", fill: "15",
  },
  {
    id: "m28-q5", textQ: "Qu'est-ce qu'il ne faut pas oublier ?", text: ["Sa carte d'assurance maladie", "Sa pièce d'identité", "Son ordonnance"], textC: 0,
    img: ["carte assurance", "pièce d'identité", "ordonnance"], imgC: 0,
    fillQ: "N'oubliez pas votre carte d'_________ maladie.", fill: "assurance",
  },
  {
    id: "m28-q6", textQ: "Quand reporter le rendez-vous ?", text: ["La semaine prochaine", "Demain", "Dans un mois"], textC: 0,
    img: ["semaine prochaine", "demain", "un mois"], imgC: 0,
    fillQ: "Reporter la visite à la _________ prochaine.", fill: "semaine",
  },
  {
    id: "m28-q7", textQ: "Quel type de professionnel appelle ?", text: ["Un cabinet dentaire", "Un hôpital", "Une pharmacie"], textC: 0,
    img: ["dentaire", "hôpital", "pharmacie"], imgC: 0,
    fillQ: "L'appel vient d'un cabinet _________.", fill: "dentaire",
  },
  {
    id: "m28-q8", textQ: "Que doit-on faire pour confirmer ?", text: ["Rappeler", "Envoyer un SMS", "Venir sans prévenir"], textC: 0,
    img: ["téléphone", "SMS", "sans RDV"], imgC: 0,
    fillQ: "Veuillez nous _________ pour confirmer.", fill: "rappeler",
  },
  {
    id: "m28-q9", textQ: "À quelle heure était le rendez-vous annulé ?", text: ["À 11 h 15", "À 15 h 30", "À 16 h 15"], textC: 1,
    img: ["11h15", "15h30", "16h15"], imgC: 1,
    fillQ: "Le rendez-vous annulé était à _________ h 30.", fill: "15",
  },
  {
    id: "m28-q10", textQ: "Combien de nouveaux créneaux sont proposés ?", text: ["Un", "Deux", "Trois"], textC: 1,
    img: ["1", "2", "3"], imgC: 1,
    fillQ: "Deux créneaux sont _________.", fill: "proposés", fillA: ["proposes"],
  },
]);

const MESSAGE_29 = buildPool("moyen", "message-29", [
  {
    id: "m29-q1", textQ: "Combien de jours dure la formation ?", text: ["2 jours", "4 jours", "5 jours"], textC: 1,
    img: ["2 jours", "4 jours", "5 jours"], imgC: 1,
    fillQ: "La formation dure _________ jours.", fill: "4",
  },
  {
    id: "m29-q2", textQ: "Quelle est la matière de la formation ?", text: ["L'informatique", "Le français", "Les maths"], textC: 0,
    img: ["informatique", "français", "maths"], imgC: 0,
    fillQ: "C'est une formation d'_________.", fill: "informatique",
  },
  {
    id: "m29-q3", textQ: "À quelle heure commence la formation le matin ?", text: ["À 8 h", "À 9 h", "À 10 h"], textC: 1,
    img: ["8h", "9h", "10h"], imgC: 1,
    fillQ: "Le matin, la formation commence à _________ h.", fill: "9",
  },
  {
    id: "m29-q4", textQ: "À quelle heure finit la formation le matin ?", text: ["À midi", "À 13 h", "À 14 h"], textC: 0,
    img: ["midi", "13h", "14h"], imgC: 0,
    fillQ: "Le matin, la formation va jusqu'à _________.", fill: "midi",
  },
  {
    id: "m29-q5", textQ: "À quelle heure reprend la formation l'après-midi ?", text: ["À 12 h 15", "À 13 h 15", "À 14 h 15"], textC: 1,
    img: ["12h15", "13h15", "14h15"], imgC: 1,
    fillQ: "L'après-midi commence à _________ h 15.", fill: "13",
  },
  {
    id: "m29-q6", textQ: "Comment peut-on payer ?", text: ["Par carte bancaire sur Internet ou à l'accueil", "Uniquement en espèces", "Par chèque uniquement"], textC: 0,
    img: ["carte bancaire", "espèces", "chèque"], imgC: 0,
    fillQ: "On peut payer par _________ bancaire.", fill: "carte",
  },
  {
    id: "m29-q7", textQ: "Qu'est-ce qui sera donné le premier jour ?", text: ["Un stylo et du papier", "Un ordinateur", "Un livre"], textC: 0,
    img: ["stylo et papier", "ordinateur", "livre"], imgC: 0,
    fillQ: "Le premier jour, on donnera un stylo et du _________.", fill: "papier",
  },
  {
    id: "m29-q8", textQ: "Quel document faut-il apporter ?", text: ["Une pièce d'identité", "Un passeport", "Un permis de conduire"], textC: 0,
    img: ["pièce d'identité", "passeport", "permis"], imgC: 0,
    fillQ: "N'oubliez pas votre pièce d'_________.", fill: "identité", fillA: ["identite"],
  },
  {
    id: "m29-q9", textQ: "À quelle heure finit la formation l'après-midi ?", text: ["À 15 h 15", "À 16 h 15", "À 17 h 15"], textC: 1,
    img: ["15h15", "16h15", "17h15"], imgC: 1,
    fillQ: "L'après-midi se termine à _________ h 15.", fill: "16",
  },
  {
    id: "m29-q10", textQ: "Quand commence la formation ?", text: ["Lundi", "Mardi", "Mercredi"], textC: 0,
    img: ["début semaine", "milieu semaine", "fin semaine"], imgC: 0,
    fillQ: "La formation commence _________.", fill: "lundi",
  },
]);

const MESSAGE_30 = buildPool("moyen", "message-30", [
  {
    id: "m30-q1", textQ: "Quel produit n'est plus disponible ?", text: ["Le poisson", "Les fraises", "Les produits laitiers"], textC: 0,
    img: ["poisson", "fraises", "laitiers"], imgC: 0,
    fillQ: "Ils n'ont plus de _________.", fill: "poisson",
  },
  {
    id: "m30-q2", textQ: "Qu'offrent-ils en compensation ?", text: ["2 paquets de fraises et myrtilles", "Un bon de réduction", "La livraison gratuite"], textC: 0,
    img: ["fraises et myrtilles", "bon réduction", "livraison"], imgC: 0,
    fillQ: "Ils offrent 2 paquets de fraises et de _________.", fill: "myrtilles",
  },
  {
    id: "m30-q3", textQ: "Quel poids font les paquets offerts ?", text: ["250 g", "500 g", "1 kg"], textC: 1,
    img: ["250 g", "500 g", "1 kg"], imgC: 1,
    fillQ: "Les paquets font _________ g chacun.", fill: "500",
  },
  {
    id: "m30-q4", textQ: "Quand peut-on retirer le colis en semaine ?", text: ["De 8 h à midi", "De 13 h à 18 h", "De 8 h à 19 h"], textC: 0,
    img: ["8h-midi", "13h-18h", "8h-19h"], imgC: 0,
    fillQ: "En semaine, le colis est à l'accueil de 8 h à _________.", fill: "midi",
  },
  {
    id: "m30-q5", textQ: "Quel est le minimum d'achat pour la livraison gratuite le week-end ?", text: ["10 €", "15 €", "20 €"], textC: 1,
    img: ["10 €", "15 €", "20 €"], imgC: 1,
    fillQ: "Le week-end, la livraison est gratuite pour un minimum de _________ €.", fill: "15",
  },
  {
    id: "m30-q6", textQ: "Où retirer le colis en semaine ?", text: ["À l'accueil", "Aux caisses", "À la poste"], textC: 0,
    img: ["accueil", "caisses", "poste"], imgC: 0,
    fillQ: "Le colis est à l'_________.", fill: "accueil",
  },
  {
    id: "m30-q7", textQ: "Quels produits sont en réduction actuellement ?", text: ["Les produits laitiers", "La viande", "Le pain"], textC: 0,
    img: ["laitiers", "viande", "pain"], imgC: 0,
    fillQ: "Il y a des réductions sur les produits _________.", fill: "laitiers",
  },
  {
    id: "m30-q8", textQ: "Combien de paquets sont offerts ?", text: ["1 paquet", "2 paquets", "3 paquets"], textC: 1,
    img: ["1 paquet", "2 paquets", "3 paquets"], imgC: 1,
    fillQ: "Ils offrent _________ paquets.", fill: "deux", fillA: ["2"],
  },
  {
    id: "m30-q9", textQ: "Quel est le problème avec la commande ?", text: ["Elle a pris du retard", "Elle est annulée", "Elle est livrée en avance"], textC: 0,
    img: ["retard", "annulée", "en avance"], imgC: 0,
    fillQ: "La commande a pris du _________.", fill: "retard",
  },
  {
    id: "m30-q10", textQ: "Quels fruits sont dans l'offre ?", text: ["Fraises et myrtilles", "Pommes et poires", "Oranges et citrons"], textC: 0,
    img: ["fraises", "pommes", "oranges"], imgC: 0,
    fillQ: "L'offre comprend des fraises et des _________.", fill: "myrtilles",
  },
]);

const MESSAGE_31 = buildPool("moyen", "message-31", [
  {
    id: "m31-q1", textQ: "Quelle matière concerne l'examen ?", text: ["Le portugais", "L'espagnol", "Le français"], textC: 0,
    img: ["portugais", "espagnol", "français"], imgC: 0,
    fillQ: "L'examen est de _________.", fill: "portugais",
  },
  {
    id: "m31-q2", textQ: "Dans combien de jours aura-t-il lieu ?", text: ["Dans 1 jour", "Dans 2 jours", "Dans 5 jours"], textC: 1,
    img: ["1 jour", "2 jours", "5 jours"], imgC: 1,
    fillQ: "L'examen est dans _________ jours.", fill: "2",
  },
  {
    id: "m31-q3", textQ: "À quelle heure aura lieu l'examen ?", text: ["À 9 h", "À 10 h", "À 11 h"], textC: 1,
    img: ["9h", "10h", "11h"], imgC: 1,
    fillQ: "L'examen est à _________ h.", fill: "10",
  },
  {
    id: "m31-q4", textQ: "Dans quelle salle aura-t-il lieu ?", text: ["Salle 10", "Salle 12", "Salle 14"], textC: 1,
    img: ["salle 10", "salle 12", "salle 14"], imgC: 1,
    fillQ: "L'examen sera dans la salle numéro _________.", fill: "12",
  },
  {
    id: "m31-q5", textQ: "À quel étage est la salle d'examen ?", text: ["Au premier étage", "Au deuxième étage", "Au troisième étage"], textC: 1,
    img: ["1er étage", "2e étage", "3e étage"], imgC: 1,
    fillQ: "La salle est au _________ étage.", fill: "deuxième", fillA: ["2e", "2ème"],
  },
  {
    id: "m31-q6", textQ: "Que faut-il réviser ?", text: ["Les temps du passé et la conjugaison", "La géographie", "L'histoire"], textC: 0,
    img: ["conjugaison", "géographie", "histoire"], imgC: 0,
    fillQ: "Il faut réviser la _________.", fill: "conjugaison",
  },
  {
    id: "m31-q7", textQ: "À quelle heure propose-t-il de se retrouver au café ?", text: ["À 7 h", "À 8 h", "À 9 h"], textC: 1,
    img: ["7h", "8h", "9h"], imgC: 1,
    fillQ: "Rendez-vous au café demain à _________ h.", fill: "8",
  },
  {
    id: "m31-q8", textQ: "Quel type d'exercices y aura-t-il ?", text: ["Des exercices de conjugaison", "Des exercices de lecture", "Des exercices de dessin"], textC: 0,
    img: ["conjugaison", "lecture", "dessin"], imgC: 0,
    fillQ: "Il y aura beaucoup d'exercices de _________.", fill: "conjugaison",
  },
  {
    id: "m31-q9", textQ: "Où se retrouver pour réviser ?", text: ["Au café", "À la bibliothèque", "En classe"], textC: 0,
    img: ["café", "bibliothèque", "classe"], imgC: 0,
    fillQ: "On se retrouve au _________.", fill: "café", fillA: ["cafe"],
  },
  {
    id: "m31-q10", textQ: "Comment confirmer le rendez-vous ?", text: ["Par SMS", "Par courrier", "Par téléphone fixe"], textC: 0,
    img: ["SMS", "courrier", "téléphone"], imgC: 0,
    fillQ: "Envoie-moi un _________ pour confirmer.", fill: "SMS", fillA: ["sms"],
  },
]);

const MESSAGE_32 = buildPool("moyen", "message-32", [
  {
    id: "m32-q1", textQ: "À quelle heure sort-elle de l'école ?", text: ["À 16 h", "À 16 h 30", "À 17 h"], textC: 1,
    img: ["16h", "16h30", "17h"], imgC: 1,
    fillQ: "Elle sort de l'école à _________ h 30.", fill: "16",
  },
  {
    id: "m32-q2", textQ: "À quelle heure a-t-elle son cours de danse ?", text: ["À 17 h", "À 17 h 30", "À 19 h"], textC: 1,
    img: ["17h", "17h30", "19h"], imgC: 1,
    fillQ: "Le cours de danse est à _________ h 30.", fill: "17",
  },
  {
    id: "m32-q3", textQ: "À quelle heure viendra-t-on la chercher après le cours ?", text: ["Vers 17 h", "Vers 18 h", "Vers 19 h"], textC: 2,
    img: ["17h", "18h", "19h"], imgC: 2,
    fillQ: "On viendra la chercher vers _________ h.", fill: "19",
  },
  {
    id: "m32-q4", textQ: "Quelle activité après l'école ?", text: ["Un cours de danse", "Du football", "De la natation"], textC: 0,
    img: ["danse", "football", "natation"], imgC: 0,
    fillQ: "Elle a un cours de _________.", fill: "danse",
  },
  {
    id: "m32-q5", textQ: "Où faut-il aller la chercher ?", text: ["À l'école", "Au parc", "À la piscine"], textC: 0,
    img: ["école", "parc", "piscine"], imgC: 0,
    fillQ: "Il faut aller la chercher à l'_________.", fill: "école", fillA: ["ecole"],
  },
  {
    id: "m32-q6", textQ: "Pourquoi demande-t-on de l'aide ?", text: ["Une réunion finit tard au travail", "Elle est malade", "Elle part en vacances"], textC: 0,
    img: ["réunion", "malade", "vacances"], imgC: 0,
    fillQ: "Une réunion finit tard au _________.", fill: "travail",
  },
  {
    id: "m32-q7", textQ: "Faut-il aussi l'amener quelque part ?", text: ["Oui, à son cours de danse", "Non, seulement la chercher", "Oui, chez le médecin"], textC: 0,
    img: ["danse", "maison", "médecin"], imgC: 0,
    fillQ: "Il faut aussi l'amener à son cours de _________.", fill: "danse",
  },
  {
    id: "m32-q8", textQ: "Quel jour faut-il aider ?", text: ["Mardi", "Mercredi", "Jeudi"], textC: 0,
    img: ["début semaine", "milieu semaine", "fin semaine"], imgC: 0,
    fillQ: "C'est _________ prochain.", fill: "mardi",
  },
  {
    id: "m32-q9", textQ: "Que doit-on faire en réponse ?", text: ["Rappeler", "Envoyer un colis", "Payer en ligne"], textC: 0,
    img: ["téléphone", "colis", "paiement"], imgC: 0,
    fillQ: "Il faut _________ pour répondre.", fill: "rappeler",
  },
  {
    id: "m32-q10", textQ: "Combien de déplacements sont demandés ?", text: ["Un seul", "Deux", "Trois"], textC: 1,
    img: ["1", "2", "3"], imgC: 1,
    fillQ: "Il faut la chercher et l'_________.", fill: "amener",
  },
]);

const MESSAGE_33 = buildPool("moyen", "message-33", [
  {
    id: "m33-q1", textQ: "Quel sport propose-t-on ?", text: ["Le tennis", "Le football", "La natation"], textC: 0,
    img: ["tennis", "football", "natation"], imgC: 0,
    fillQ: "On propose de jouer au _________.", fill: "tennis",
  },
  {
    id: "m33-q2", textQ: "Quelle activité après le sport ?", text: ["Un pique-nique", "Un cinéma", "Des courses"], textC: 0,
    img: ["pique-nique", "cinéma", "courses"], imgC: 0,
    fillQ: "Après le sport, on fait un _________.", fill: "pique-nique", fillA: ["pique nique"],
  },
  {
    id: "m33-q3", textQ: "Où manger après le sport ?", text: ["Dans le parc", "Au restaurant", "À la maison"], textC: 0,
    img: ["parc", "restaurant", "maison"], imgC: 0,
    fillQ: "On mange dans le _________.", fill: "parc",
  },
  {
    id: "m33-q4", textQ: "Qu'est-ce qu'elle pense préparer ?", text: ["Une tarte", "Une soupe", "Des pâtes"], textC: 0,
    img: ["tarte", "soupe", "pâtes"], imgC: 0,
    fillQ: "Elle pense faire une _________.", fill: "tarte",
  },
  {
    id: "m33-q5", textQ: "Que peut-on apporter ?", text: ["Des boissons", "Des chaises", "Des livres"], textC: 0,
    img: ["boissons", "chaises", "livres"], imgC: 0,
    fillQ: "Tu peux apporter des _________.", fill: "boissons",
  },
  {
    id: "m33-q6", textQ: "Avant quelle heure faut-il rappeler ?", text: ["Avant 16 h", "Avant 17 h", "Avant 18 h"], textC: 1,
    img: ["16h", "17h", "18h"], imgC: 1,
    fillQ: "Il faut rappeler avant _________ h.", fill: "17",
  },
  {
    id: "m33-q7", textQ: "Qu'est-ce qu'on prévoit de manger ensemble ?", text: ["Un repas partagé au parc", "Un repas au restaurant", "Rien"], textC: 0,
    img: ["pique-nique", "restaurant", "rien"], imgC: 0,
    fillQ: "On mangera ensemble au _________.", fill: "parc",
  },
  {
    id: "m33-q8", textQ: "Quand a lieu le tennis ?", text: ["Demain matin", "Demain soir", "Ce soir"], textC: 0,
    img: ["matin", "soir", "nuit"], imgC: 0,
    fillQ: "Le tennis est demain _________.", fill: "matin",
  },
  {
    id: "m33-q9", textQ: "Qu'est-ce qu'on ramène aussi pour le repas ?", text: ["Des fruits", "Du pain", "De la viande"], textC: 0,
    img: ["fruits", "pain", "viande"], imgC: 0,
    fillQ: "On ramènera aussi des _________.", fill: "fruits",
  },
  {
    id: "m33-q10", textQ: "Que prépare-t-on pour le repas ?", text: ["Une salade et une tarte", "Une pizza", "Un gâteau seulement"], textC: 0,
    img: ["salade et tarte", "pizza", "gâteau"], imgC: 0,
    fillQ: "On prépare une salade et une _________.", fill: "tarte",
  },
]);

const MESSAGE_34 = buildPool("moyen", "message-34", [
  {
    id: "m34-q1", textQ: "Combien d'exemplaires faut-il ?", text: ["10", "15", "20"], textC: 1,
    img: ["10", "15", "20"], imgC: 1,
    fillQ: "Il faut _________ exemplaires.", fill: "15",
  },
  {
    id: "m34-q2", textQ: "Quel type de livre faut-il livrer ?", text: ["Un roman", "Une BD", "Un dictionnaire"], textC: 0,
    img: ["roman", "BD", "dictionnaire"], imgC: 0,
    fillQ: "Il faut des exemplaires d'un _________.", fill: "roman",
  },
  {
    id: "m34-q3", textQ: "Où apporter les livres ?", text: ["À la bibliothèque", "À l'école", "Au musée"], textC: 0,
    img: ["bibliothèque", "école", "musée"], imgC: 0,
    fillQ: "Il faut les apporter à la _________.", fill: "bibliothèque", fillA: ["bibliotheque"],
  },
  {
    id: "m34-q4", textQ: "À quelle heure peut-elle recevoir jeudi matin ?", text: ["À 10 h", "À 10 h 30", "À 11 h"], textC: 1,
    img: ["10h", "10h30", "11h"], imgC: 1,
    fillQ: "Jeudi matin, rendez-vous à _________ h et demie.", fill: "10",
  },
  {
    id: "m34-q5", textQ: "Quand est l'autre créneau proposé ?", text: ["Jeudi matin", "Vendredi entre 14 h et 18 h", "Samedi matin"], textC: 1,
    img: ["jeudi matin", "vendredi 14-18h", "samedi"], imgC: 1,
    fillQ: "L'autre créneau est le _________.", fill: "vendredi", fillA: ["vendredi entre 14h et 18h"],
  },
  {
    id: "m34-q6", textQ: "Que demande-t-elle aussi de présenter ?", text: ["De nouveaux livres", "Des DVD", "Des magazines"], textC: 0,
    img: ["livres", "DVD", "magazines"], imgC: 0,
    fillQ: "Elle veut voir les nouveaux _________.", fill: "livres",
  },
  {
    id: "m34-q7", textQ: "Pour quand prendre rendez-vous ?", text: ["Cette semaine", "Le mois prochain", "L'année prochaine"], textC: 0,
    img: ["cette semaine", "mois prochain", "année prochaine"], imgC: 0,
    fillQ: "Rendez-vous cette _________.", fill: "semaine",
  },
  {
    id: "m34-q8", textQ: "Quel lieu est concerné ?", text: ["Une bibliothèque", "Un restaurant", "Une gare"], textC: 0,
    img: ["bibliothèque", "restaurant", "gare"], imgC: 0,
    fillQ: "L'appel concerne une _________.", fill: "bibliothèque", fillA: ["bibliotheque"],
  },
  {
    id: "m34-q9", textQ: "Que faut-il livrer exactement ?", text: ["15 exemplaires d'un roman", "10 BD", "20 dictionnaires"], textC: 0,
    img: ["15 romans", "10 BD", "20 dicos"], imgC: 0,
    fillQ: "Livraison de _________ exemplaires.", fill: "15",
  },
  {
    id: "m34-q10", textQ: "Si jeudi ne convient pas, quelle option reste ?", text: ["Vendredi après-midi", "Samedi matin", "Dimanche"], textC: 0,
    img: ["après-midi", "matin", "dimanche"], imgC: 0,
    fillQ: "Sinon, c'est _________ après-midi.", fill: "vendredi",
  },
]);

const MESSAGE_35 = buildPool("moyen", "message-35", [
  {
    id: "m35-q1", textQ: "Quel type de chambre est réservé ?", text: ["Chambre simple", "Chambre double", "Suite"], textC: 1,
    img: ["simple", "double", "suite"], imgC: 1,
    fillQ: "La réservation est pour une chambre _________.", fill: "double",
  },
  {
    id: "m35-q2", textQ: "Le petit-déjeuner coûte combien ?", text: ["5 € 50", "7 € 50", "10 €"], textC: 1,
    img: ["5,50 €", "7,50 €", "10 €"], imgC: 1,
    fillQ: "Le petit-déjeuner coûte _________ euros 50.", fill: "7",
  },
  {
    id: "m35-q3", textQ: "Entre quelles heures est servi le petit-déjeuner ?", text: ["Entre 6 h et 9 h", "Entre 7 h et 10 h", "Entre 8 h et 11 h"], textC: 1,
    img: ["6h-9h", "7h-10h", "8h-11h"], imgC: 1,
    fillQ: "Le petit-déjeuner est servi entre 7 h et _________ h.", fill: "10",
  },
  {
    id: "m35-q4", textQ: "Entre quelles heures faut-il s'enregistrer ?", text: ["Entre 11 h et 14 h", "Entre 13 h et 16 h", "Entre 15 h et 18 h"], textC: 1,
    img: ["11h-14h", "13h-16h", "15h-18h"], imgC: 1,
    fillQ: "Enregistrement entre _________ h et 16 h.", fill: "13",
  },
  {
    id: "m35-q5", textQ: "Quel bus peut-on prendre ?", text: ["Le bus 4", "Le bus 13", "Le bus 16"], textC: 0,
    img: ["bus 4", "bus 13", "bus 16"], imgC: 0,
    fillQ: "On peut prendre le bus numéro _________.", fill: "4",
  },
  {
    id: "m35-q6", textQ: "Quel jour est confirmé ?", text: ["Le 25", "Le 27", "Le 29"], textC: 1,
    img: ["25", "27", "29"], imgC: 1,
    fillQ: "La réservation est pour le _________.", fill: "27",
  },
  {
    id: "m35-q7", textQ: "L'accès à Internet est-il inclus ?", text: ["Oui, c'est gratuit", "Non, c'est payant", "Non disponible"], textC: 0,
    img: ["gratuit", "payant", "indisponible"], imgC: 0,
    fillQ: "L'accès à Internet est _________.", fill: "gratuit",
  },
  {
    id: "m35-q8", textQ: "Que comprend la chambre ?", text: ["Douche et WC", "Cuisine équipée", "Balcon seulement"], textC: 0,
    img: ["douche et WC", "cuisine", "balcon"], imgC: 0,
    fillQ: "La chambre a une douche et des _________.", fill: "WC",
  },
  {
    id: "m35-q9", textQ: "Que faire si on arrive plus tard ?", text: ["Appeler l'hôtel", "Attendre dehors", "Annuler"], textC: 0,
    img: ["appeler", "attendre", "annuler"], imgC: 0,
    fillQ: "Si vous arrivez plus tard, _________-nous.", fill: "appelez", fillA: ["appeler"],
  },
  {
    id: "m35-q10", textQ: "Quel équipement est inclus gratuitement ?", text: ["Internet", "Le spa", "Le parking"], textC: 0,
    img: ["internet", "spa", "parking"], imgC: 0,
    fillQ: "_________ est inclus gratuitement.", fill: "Internet",
  },
]);

const MESSAGE_36 = buildPool("moyen", "message-36", [
  {
    id: "m36-q1", textQ: "De combien d'heures le départ est-il avancé ?", text: ["1 heure", "2 heures", "3 heures"], textC: 1,
    img: ["1 h", "2 h", "3 h"], imgC: 1,
    fillQ: "Le départ sera _________ heures plus tôt.", fill: "2",
  },
  {
    id: "m36-q2", textQ: "À quelle heure part le vol modifié ?", text: ["À 7 h 25", "À 9 h 25", "À 11 h 25"], textC: 1,
    img: ["7h25", "9h25", "11h25"], imgC: 1,
    fillQ: "Le départ sera à _________ h 25.", fill: "9",
  },
  {
    id: "m36-q3", textQ: "Quel est le numéro de vol ?", text: ["AF 0305", "AF 3050", "DY 7040"], textC: 0,
    img: ["AF 0305", "AF 3050", "DY 7040"], imgC: 0,
    fillQ: "Le vol est le AF _________.", fill: "0305", fillA: ["305"],
  },
  {
    id: "m36-q4", textQ: "Quelle chambre d'hôtel est attribuée ?", text: ["La 23B", "La 24B", "La 23A"], textC: 0,
    img: ["23B", "24B", "23A"], imgC: 0,
    fillQ: "La chambre sera la _________ B.", fill: "23",
  },
  {
    id: "m36-q5", textQ: "Quelle était l'ancienne chambre ?", text: ["La 23B", "La 24B", "La 25B"], textC: 1,
    img: ["23B", "24B", "25B"], imgC: 1,
    fillQ: "Au lieu de la _________ B.", fill: "24",
  },
  {
    id: "m36-q6", textQ: "Quel bus peut-on prendre de l'aéroport ?", text: ["Le bus 4", "Le bus 13", "Le bus 16"], textC: 1,
    img: ["bus 4", "bus 13", "bus 16"], imgC: 1,
    fillQ: "On peut prendre le bus numéro _________.", fill: "13",
  },
  {
    id: "m36-q7", textQ: "Combien de changements sont annoncés ?", text: ["Un", "Deux", "Trois"], textC: 1,
    img: ["1", "2", "3"], imgC: 1,
    fillQ: "Il y a _________ changements.", fill: "deux", fillA: ["2"],
  },
  {
    id: "m36-q8", textQ: "Quel autre transport depuis l'aéroport ?", text: ["Un taxi", "Un bateau", "Un vélo"], textC: 0,
    img: ["taxi", "bateau", "vélo"], imgC: 0,
    fillQ: "On peut aussi prendre un _________.", fill: "taxi",
  },
  {
    id: "m36-q9", textQ: "Quel jour part le vol ?", text: ["Le mardi 16", "Le mercredi 17", "Le jeudi 18"], textC: 0,
    img: ["16", "17", "18"], imgC: 0,
    fillQ: "Le vol part le _________.", fill: "mardi", fillA: ["mardi 16"],
  },
  {
    id: "m36-q10", textQ: "Le numéro de vol change-t-il ?", text: ["Non", "Oui", "On ne sait pas"], textC: 0,
    img: ["non", "oui", "?"], imgC: 0,
    fillQ: "Le numéro de vol ne _________.", fill: "change", fillA: ["change pas"],
  },
]);

const MESSAGE_37 = buildPool("moyen", "message-37", [
  {
    id: "m37-q1", textQ: "Qu'a gagné la personne ?", text: ["Une télévision", "Un ordinateur", "Un lecteur DVD"], textC: 0,
    img: ["télévision", "ordinateur", "lecteur DVD"], imgC: 0,
    fillQ: "La personne a gagné une _________.", fill: "télévision", fillA: ["television", "tv"],
  },
  {
    id: "m37-q2", textQ: "Quelle réduction sur les lecteurs DVD ?", text: ["25 %", "30 %", "40 %"], textC: 1,
    img: ["25 %", "30 %", "40 %"], imgC: 1,
    fillQ: "Réduction de _________ % sur les lecteurs DVD.", fill: "30",
  },
  {
    id: "m37-q3", textQ: "Quelle réduction sur les ordinateurs ?", text: ["20 %", "25 %", "30 %"], textC: 1,
    img: ["20 %", "25 %", "30 %"], imgC: 1,
    fillQ: "Réduction de _________ % sur les ordinateurs.", fill: "25",
  },
  {
    id: "m37-q4", textQ: "Jusqu'à quelle date vont les promotions ?", text: ["Jusqu'au 29 mars", "Jusqu'au 15 avril", "Toute l'année"], textC: 0,
    img: ["fin mars", "mi-avril", "toute l'année"], imgC: 0,
    fillQ: "Promotions jusqu'au 29 _________.", fill: "mars",
  },
  {
    id: "m37-q5", textQ: "Que doit-on faire pour récupérer le cadeau ?", text: ["Rappeler et donner ses coordonnées", "Venir sans prévenir", "Payer des frais"], textC: 0,
    img: ["rappeler", "sans RDV", "payer"], imgC: 0,
    fillQ: "Il faut rappeler pour récupérer le _________.", fill: "cadeau",
  },
  {
    id: "m37-q6", textQ: "Où voir les offres promotionnelles ?", text: ["Sur le site internet", "À la télévision", "Au journal"], textC: 0,
    img: ["site internet", "télévision", "journal"], imgC: 0,
    fillQ: "Consultez les offres sur le site _________.", fill: "internet",
  },
  {
    id: "m37-q7", textQ: "Quel type de concours était-ce ?", text: ["Un jeu-concours", "Un examen", "Une vente"], textC: 0,
    img: ["jeu-concours", "examen", "vente"], imgC: 0,
    fillQ: "C'était un jeu-_________.", fill: "concours",
  },
  {
    id: "m37-q8", textQ: "Quand a eu lieu la participation ?", text: ["Le mois dernier", "Cette semaine", "L'année dernière"], textC: 0,
    img: ["mois dernier", "cette semaine", "année dernière"], imgC: 0,
    fillQ: "Participation le mois _________.", fill: "dernier",
  },
  {
    id: "m37-q9", textQ: "Quel produit coûte moins cher avec 25 % de réduction ?", text: ["Les ordinateurs", "Les télévisions", "Les livres"], textC: 0,
    img: ["ordinateurs", "télévisions", "livres"], imgC: 0,
    fillQ: "Les _________ sont à 25 % de réduction.", fill: "ordinateurs",
  },
  {
    id: "m37-q10", textQ: "Quel produit coûte moins cher avec 30 % de réduction ?", text: ["Les lecteurs DVD", "Les téléphones", "Les vêtements"], textC: 0,
    img: ["lecteurs DVD", "téléphones", "vêtements"], imgC: 0,
    fillQ: "Les lecteurs DVD ont _________ % de réduction.", fill: "30",
  },
]);

const ANNONCE_1 = buildPool("moyen", "annonce-1", [
  {
    id: "a1-q1", textQ: "Audio 1 — Quelle ligne de métro est concernée ?", text: ["La ligne 1","La ligne 9","La ligne 14"], textC: 0,
    img: ["ligne 1","ligne 9","ligne 14"], imgC: 0,
    fillQ: "Audio 1 — La ligne _________ du métro sera fermée.", fill: "1"
  },
  {
    id: "a1-q2", textQ: "Audio 1 — À partir de quelle heure la ligne ferme-t-elle ?", text: ["À 22 h","À 22 h 30","À 23 h"], textC: 1,
    img: ["22 h","22 h 30","23 h"], imgC: 1,
    fillQ: "Audio 1 — Fermeture à partir de _________ h 30.", fill: "22"
  },
  {
    id: "a1-q3", textQ: "Audio 1 — Pourquoi ferme-t-on la ligne ?", text: ["Pour réparer les voies","Pour une grève","Pour un festival"], textC: 0,
    img: ["réparer voies","grève","festival"], imgC: 0,
    fillQ: "Audio 1 — Fermeture pour réparer les _________.", fill: "voies"
  },
  {
    id: "a1-q4", textQ: "Audio 2 — Sur quels produits y a-t-il une remise ?", text: ["Les bijoux","Les livres","Les téléviseurs"], textC: 0,
    img: ["bijoux","livres","téléviseurs"], imgC: 0,
    fillQ: "Audio 2 — Remise de 30 % sur les _________.", fill: "bijoux"
  },
  {
    id: "a1-q5", textQ: "Audio 2 — Quelle est la remise proposée ?", text: ["20 %","30 %","50 %"], textC: 1,
    img: ["20 %","30 %","50 %"], imgC: 1,
    fillQ: "Audio 2 — Remise exceptionnelle de _________ %.", fill: "30"
  },
  {
    id: "a1-q6", textQ: "Audio 3 — À quelle heure commence le film ?", text: ["À 18 h","À 18 h 30","À 19 h"], textC: 1,
    img: ["18 h","18 h 30","19 h"], imgC: 1,
    fillQ: "Audio 3 — Le film commence à _________ h 30.", fill: "18"
  },
  {
    id: "a1-q7", textQ: "Audio 4 — Quel numéro de vol est concerné ?", text: ["DY7040","AF4568","AF0305"], textC: 0,
    img: ["DY7040","AF4568","AF0305"], imgC: 0,
    fillQ: "Audio 4 — Dernier appel pour le vol _________.", fill: "DY7040"
  },
  {
    id: "a1-q8", textQ: "Audio 5 — Où s'est perdu l'enfant ?", text: ["Au rayon fruits et légumes","À l'entrée du magasin","Dans les toilettes"], textC: 0,
    img: ["fruits et légumes","entrée","toilettes"], imgC: 0,
    fillQ: "Audio 5 — Perdu au rayon _________ et légumes.", fill: "fruits"
  },
  {
    id: "a1-q9", textQ: "Audio 6 — Quel objet a été retrouvé ?", text: ["Un portefeuille","Un téléphone","Des clés"], textC: 0,
    img: ["portefeuille","téléphone","clés"], imgC: 0,
    fillQ: "Audio 6 — Un _________ a été retrouvé.", fill: "portefeuille"
  },
  {
    id: "a1-q10", textQ: "Audio 6 — Où faut-il aller pour le récupérer ?", text: ["Auprès d'un agent","À la caisse","Au guichet"], textC: 0,
    img: ["agent","caisse","guichet"], imgC: 0,
    fillQ: "Audio 6 — Venez le récupérer auprès d'un _________.", fill: "agent"
  }
]);

const ANNONCE_2 = buildPool("moyen", "annonce-2", [
  {
    id: "a2-q1", textQ: "Audio 1 — Quelle attraction est annoncée ?", text: ["Le train rapide","La grande roue","Le carrousel"], textC: 0,
    img: ["train rapide","grande roue","carrousel"], imgC: 0,
    fillQ: "Audio 1 — Attraction du train _________.", fill: "rapide"
  },
  {
    id: "a2-q2", textQ: "Audio 1 — Quelle taille minimum faut-il pour monter ?", text: ["1 m","1 m 20","1 m 40"], textC: 1,
    img: ["1 m","1 m 20","1 m 40"], imgC: 1,
    fillQ: "Audio 1 — Il faut mesurer au moins _________ m 20.", fill: "1"
  },
  {
    id: "a2-q3", textQ: "Audio 2 — Qu'est-ce qui est interdit au concert ?", text: ["Prendre des photos","Manger","Parler"], textC: 0,
    img: ["photos","manger","parler"], imgC: 0,
    fillQ: "Audio 2 — Il est interdit de prendre des _________.", fill: "photos"
  },
  {
    id: "a2-q4", textQ: "Audio 3 — À quelle heure ferme la bibliothèque ?", text: ["À 15 h","À 15 h 30","À 19 h"], textC: 1,
    img: ["15 h","15 h 30","19 h"], imgC: 1,
    fillQ: "Audio 3 — Fermeture exceptionnelle à _________ h 30.", fill: "15"
  },
  {
    id: "a2-q5", textQ: "Audio 3 — Combien de temps reste-t-il avant la fermeture ?", text: ["5 minutes","15 minutes","30 minutes"], textC: 1,
    img: ["5 min","15 min","30 min"], imgC: 1,
    fillQ: "Audio 3 — Il reste _________ minutes.", fill: "15"
  },
  {
    id: "a2-q6", textQ: "Audio 4 — Quelle réduction sur l'électroménager ?", text: ["30 %","40 %","50 %"], textC: 2,
    img: ["30 %","40 %","50 %"], imgC: 2,
    fillQ: "Audio 4 — Réduction de _________ % sur l'électroménager.", fill: "50"
  },
  {
    id: "a2-q7", textQ: "Audio 5 — Dans combien de temps ferme la bibliothèque ?", text: ["Dans 5 minutes","Dans 15 minutes","Dans 30 minutes"], textC: 0,
    img: ["5 min","15 min","30 min"], imgC: 0,
    fillQ: "Audio 5 — Fermeture dans _________ minutes.", fill: "5"
  },
  {
    id: "a2-q8", textQ: "Audio 5 — À quelle heure fermera-t-elle exceptionnellement demain ?", text: ["À 19 h","À 21 h","À 23 h"], textC: 1,
    img: ["19 h","21 h","23 h"], imgC: 1,
    fillQ: "Audio 5 — Fermeture exceptionnelle à _________ h.", fill: "21"
  },
  {
    id: "a2-q9", textQ: "Audio 6 — Quelle réduction au cinéma sur les bonbons ?", text: ["30 %","50 %","70 %"], textC: 1,
    img: ["30 %","50 %","70 %"], imgC: 1,
    fillQ: "Audio 6 — _________ % de réduction sur les bonbons.", fill: "50"
  },
  {
    id: "a2-q10", textQ: "Audio 6 — Que faut-il acheter pour avoir la réduction ?", text: ["Une place de cinéma","Un bonbon","Un sandwich"], textC: 0,
    img: ["billet cinéma","bonbon","sandwich"], imgC: 0,
    fillQ: "Audio 6 — Pour une place achetée, réduction sur les _________.", fill: "bonbons"
  }
]);

const ANNONCE_3 = buildPool("moyen", "annonce-3", [
  {
    id: "a3-q1", textQ: "Audio 1 — Quel numéro de vol est annoncé ?", text: ["4568","7040","0305"], textC: 0,
    img: ["4568","7040","0305"], imgC: 0,
    fillQ: "Audio 1 — Vol numéro _________.", fill: "4568"
  },
  {
    id: "a3-q2", textQ: "Audio 1 — Quel numéro de porte d'embarquement ?", text: ["Porte 45","Porte 12","Porte 7"], textC: 0,
    img: ["porte 45","porte 12","porte 7"], imgC: 0,
    fillQ: "Audio 1 — Porte d'embarquement numéro _________.", fill: "45"
  },
  {
    id: "a3-q3", textQ: "Audio 2 — Quelle ligne de métro est fermée ?", text: ["La ligne 1","La ligne 9","La ligne 14"], textC: 1,
    img: ["ligne 1","ligne 9","ligne 14"], imgC: 1,
    fillQ: "Audio 2 — La ligne _________ sera fermée.", fill: "9"
  },
  {
    id: "a3-q4", textQ: "Audio 2 — Pourquoi la ligne est-elle fermée ?", text: ["Pour des travaux","Pour une grève","Pour un concert"], textC: 0,
    img: ["travaux","grève","concert"], imgC: 0,
    fillQ: "Audio 2 — Fermeture pour cause de _________.", fill: "travaux"
  },
  {
    id: "a3-q5", textQ: "Audio 3 — Quelle caisse est fermée ?", text: ["La caisse prioritaire handicapés","Toutes les caisses","Les caisses automatiques"], textC: 0,
    img: ["caisse prioritaire","toutes caisses","caisses auto"], imgC: 0,
    fillQ: "Audio 3 — La caisse _________ est fermée.", fill: "prioritaire"
  },
  {
    id: "a3-q6", textQ: "Audio 4 — Quelle carte faut-il présenter ?", text: ["Carte d'étudiant","Carte d'identité","Carte de bibliothèque"], textC: 0,
    img: ["carte étudiant","carte identité","carte bibliothèque"], imgC: 0,
    fillQ: "Audio 4 — Il faut la carte d'_________.", fill: "étudiant", fillA: ["etudiant"]
  },
  {
    id: "a3-q7", textQ: "Audio 5 — Où faut-il passer ses appels ?", text: ["Dans les couloirs","Dans le wagon","À la gare"], textC: 0,
    img: ["couloirs","wagon","hall"], imgC: 0,
    fillQ: "Audio 5 — Appels uniquement dans les _________.", fill: "couloirs"
  },
  {
    id: "a3-q8", textQ: "Audio 5 — Qu'est-ce qui est interdit ?", text: ["Ouvrir les portes du train","Manger","Lire"], textC: 0,
    img: ["ouvrir portes","manger","lire"], imgC: 0,
    fillQ: "Audio 5 — Il est interdit d'ouvrir les _________ du train.", fill: "portes"
  },
  {
    id: "a3-q9", textQ: "Audio 6 — Quel cadeau pour un livre ou deux CDs ?", text: ["Une place de cinéma","Un bon de réduction","Un café offert"], textC: 0,
    img: ["billet cinéma","bon réduction","café offert"], imgC: 0,
    fillQ: "Audio 6 — Cadeau : une place de _________.", fill: "cinéma", fillA: ["cinema"]
  },
  {
    id: "a3-q10", textQ: "Audio 6 — Jusqu'à quelle heure l'offre est-elle valable ?", text: ["Jusqu'à 19 h 30","Jusqu'à 21 h","Jusqu'à midi"], textC: 0,
    img: ["19 h 30","21 h","midi"], imgC: 0,
    fillQ: "Audio 6 — Offre valable jusqu'à _________ h 30.", fill: "19"
  }
]);

const ANNONCE_4 = buildPool("moyen", "annonce-4", [
  {
    id: "a4-q1", textQ: "Audio 1 — Combien de temps dure le spectacle du cirque ?", text: ["1 heure","1 h 30","2 heures"], textC: 1,
    img: ["1 h","1 h 30","2 h"], imgC: 1,
    fillQ: "Audio 1 — Spectacle de _________ h 30.", fill: "1"
  },
  {
    id: "a4-q2", textQ: "Audio 1 — À quelle heure a lieu le spectacle ?", text: ["À 16 h","À 18 h","À 20 h"], textC: 1,
    img: ["16 h","18 h","20 h"], imgC: 1,
    fillQ: "Audio 1 — Rendez-vous à _________ h.", fill: "18"
  },
  {
    id: "a4-q3", textQ: "Audio 2 — À quelle heure ferme le magasin le week-end ?", text: ["À 12 h 15","À 19 h","À 20 h 30"], textC: 0,
    img: ["12 h 15","19 h","20 h 30"], imgC: 0,
    fillQ: "Audio 2 — Fermeture week-end à _________ h 15.", fill: "12"
  },
  {
    id: "a4-q4", textQ: "Audio 2 — À quelle heure ferme-t-on en semaine ?", text: ["À 12 h 15","À 19 h","À 20 h 30"], textC: 2,
    img: ["12 h 15","19 h","20 h 30"], imgC: 2,
    fillQ: "Audio 2 — En semaine, fermeture à _________ h 30.", fill: "20"
  },
  {
    id: "a4-q5", textQ: "Audio 3 — Sur quelle voie part le train n°55 ?", text: ["Voie 12","Voie 15","Voie 7"], textC: 0,
    img: ["voie 12","voie 15","voie 7"], imgC: 0,
    fillQ: "Audio 3 — Départ sur la voie _________.", fill: "12"
  },
  {
    id: "a4-q6", textQ: "Audio 4 — Quelle réduction sur les télévisions ?", text: ["30 %","40 %","50 %"], textC: 1,
    img: ["30 %","40 %","50 %"], imgC: 1,
    fillQ: "Audio 4 — Jusqu'à _________ % sur les télévisions.", fill: "40"
  },
  {
    id: "a4-q7", textQ: "Audio 5 — Où trouve-t-on les produits alimentaires ?", text: ["Au 1er étage","Au 2e étage","Au 3e étage"], textC: 0,
    img: ["1er étage","2e étage","3e étage"], imgC: 0,
    fillQ: "Audio 5 — Alimentaire au _________ étage.", fill: "premier", fillA: ["1er","1"]
  },
  {
    id: "a4-q8", textQ: "Audio 5 — Où se trouve le multimédia ?", text: ["Au 1er étage","Au 2e étage","Au 3e étage"], textC: 2,
    img: ["1er étage","2e étage","3e étage"], imgC: 2,
    fillQ: "Audio 5 — Multimédia au _________ étage.", fill: "troisième", fillA: ["3e","3"]
  },
  {
    id: "a4-q9", textQ: "Audio 6 — Quand l'établissement rouvre-t-il ?", text: ["Le 8 janvier","Le 9 janvier","Le 23 décembre"], textC: 1,
    img: ["jour 8","jour 9","jour 23"], imgC: 1,
    fillQ: "Audio 6 — Réouverture le _________ janvier.", fill: "9"
  },
  {
    id: "a4-q10", textQ: "Audio 6 — À quelle heure rouvre-t-il ?", text: ["À 8 h 30","À 9 h","À 10 h"], textC: 0,
    img: ["8 h 30","9 h","10 h"], imgC: 0,
    fillQ: "Audio 6 — Réouverture à partir de _________ h 30.", fill: "8"
  }
]);

const ANNONCE_5 = buildPool("moyen", "annonce-5", [
  {
    id: "a5-q1", textQ: "Audio 1 — Quelle promotion est annoncée ?", text: ["Livres de recettes","Bijoux","Sandwichs"], textC: 0,
    img: ["livres recettes","bijoux","sandwichs"], imgC: 0,
    fillQ: "Audio 1 — Promotion sur les livres de _________.", fill: "recettes"
  },
  {
    id: "a5-q2", textQ: "Audio 2 — Quel véhicule doit être déplacé ?", text: ["Une moto","Une voiture","Un vélo"], textC: 0,
    img: ["moto","voiture","vélo"], imgC: 0,
    fillQ: "Audio 2 — Le propriétaire d'une _________ doit la déplacer.", fill: "moto"
  },
  {
    id: "a5-q3", textQ: "Audio 2 — Où doit-on garer le véhicule ?", text: ["Près des vélos","À l'entrée","Au parking"], textC: 0,
    img: ["près vélos","entrée","parking"], imgC: 0,
    fillQ: "Audio 2 — Garer près des _________.", fill: "vélos", fillA: ["velos"]
  },
  {
    id: "a5-q4", textQ: "Audio 3 — Pour qui l'entrée est-elle gratuite ?", text: ["Les enfants","Les adultes","Les adolescents"], textC: 0,
    img: ["enfants","adultes","adolescents"], imgC: 0,
    fillQ: "Audio 3 — Entrées gratuites pour les _________.", fill: "enfants"
  },
  {
    id: "a5-q5", textQ: "Audio 3 — Quelle remise pour les adolescents ?", text: ["15 %","25 %","30 %"], textC: 1,
    img: ["15 %","25 %","30 %"], imgC: 1,
    fillQ: "Audio 3 — Remise de _________ % pour les adolescents.", fill: "25"
  },
  {
    id: "a5-q6", textQ: "Audio 3 — De combien ont augmenté les tarifs adultes ?", text: ["1 €","2 €","5 €"], textC: 1,
    img: ["1 €","2 €","5 €"], imgC: 1,
    fillQ: "Audio 3 — Tarifs adultes augmentés de _________ €.", fill: "2"
  },
  {
    id: "a5-q7", textQ: "Audio 4 — Qu'est-ce qui est interdit autour du bassin ?", text: ["Courir et manger","Nager","Parler"], textC: 0,
    img: ["courir/manger","nager","parler"], imgC: 0,
    fillQ: "Audio 4 — Interdit de _________ ou de manger.", fill: "courir"
  },
  {
    id: "a5-q8", textQ: "Audio 5 — Quel service est fermé ?", text: ["La poste","La banque","Le supermarché"], textC: 0,
    img: ["poste","banque","supermarché"], imgC: 0,
    fillQ: "Audio 5 — La _________ sera fermée une semaine.", fill: "poste"
  },
  {
    id: "a5-q9", textQ: "Audio 6 — Qu'est-ce qui a été trouvé ?", text: ["Des clés","Un portefeuille","Un téléphone"], textC: 0,
    img: ["clés","portefeuille","téléphone"], imgC: 0,
    fillQ: "Audio 6 — Le personnel a trouvé des _________.", fill: "clés", fillA: ["cles"]
  },
  {
    id: "a5-q10", textQ: "Audio 6 — Où récupérer les clés ?", text: ["À l'accueil","Aux caisses","Au parking"], textC: 0,
    img: ["accueil","caisses","parking"], imgC: 0,
    fillQ: "Audio 6 — Récupération des clés à l'_________.", fill: "accueil"
  }
]);

const ANNONCE_6 = buildPool("moyen", "annonce-6", [
  {
    id: "a6-q1", textQ: "Audio 1 — Quel bus ne marquera pas certains arrêts ?", text: ["Le bus 160","Le bus 171","Le bus 112"], textC: 0,
    img: ["160","171","112"], imgC: 0,
    fillQ: "Audio 1 — Le bus _________ ne marquera pas certains arrêts.", fill: "160"
  },
  {
    id: "a6-q2", textQ: "Audio 2 — Quelle remise sur les bijoux ?", text: ["50 %","70 %","30 %"], textC: 1,
    img: ["50 %","70 %","30 %"], imgC: 1,
    fillQ: "Audio 2 — Remise de _________ % sur les bijoux.", fill: "70"
  },
  {
    id: "a6-q3", textQ: "Audio 2 — Combien de vêtements faut-il acheter ?", text: ["Un","Deux","Trois"], textC: 1,
    img: ["1 vêtement","2 vêtements","3 vêtements"], imgC: 1,
    fillQ: "Audio 2 — Pour deux vêtements achetés, remise sur les _________.", fill: "bijoux"
  },
  {
    id: "a6-q4", textQ: "Audio 3 — Quel type de séjours est proposé ?", text: ["Séjours au soleil","Séjours à la montagne","Séjours en ville"], textC: 0,
    img: ["au soleil","montagne","ville"], imgC: 0,
    fillQ: "Audio 3 — Séjours au _________.", fill: "soleil"
  },
  {
    id: "a6-q5", textQ: "Audio 4 — Que faut-il acheter pour avoir un café offert ?", text: ["Trois viennoiseries","Deux sandwichs","Un croissant"], textC: 0,
    img: ["3 viennoiseries","2 sandwichs","1 croissant"], imgC: 0,
    fillQ: "Audio 4 — Achat de trois _________.", fill: "viennoiseries"
  },
  {
    id: "a6-q6", textQ: "Audio 5 — Quel nouveau service est proposé ?", text: ["La laverie","La livraison","Le pressing"], textC: 0,
    img: ["laverie","livraison","pressing"], imgC: 0,
    fillQ: "Audio 5 — Nouveau service de _________.", fill: "laverie"
  },
  {
    id: "a6-q7", textQ: "Audio 5 — Que fait le service de laverie ?", text: ["Nettoie, repasse et plie","Livre à domicile","Répare le linge"], textC: 0,
    img: ["nettoyer/repasser","livrer","réparer"], imgC: 0,
    fillQ: "Audio 5 — On nettoie, on repasse et on _________.", fill: "plie"
  },
  {
    id: "a6-q8", textQ: "Audio 6 — À quelle heure a lieu le spectacle des félins ?", text: ["À 12 h","À 14 h","À 16 h"], textC: 1,
    img: ["12 h","14 h","16 h"], imgC: 1,
    fillQ: "Audio 6 — Spectacle des félins à _________ h.", fill: "14"
  },
  {
    id: "a6-q9", textQ: "Audio 6 — Quels animaux peut-on nourrir ?", text: ["Girafes et éléphants","Chats et chiens","Poissons"], textC: 0,
    img: ["girafes/éléphants","chats/chiens","poissons"], imgC: 0,
    fillQ: "Audio 6 — Donner à manger aux girafes et aux _________.", fill: "éléphants", fillA: ["elephants"]
  },
  {
    id: "a6-q10", textQ: "Audio 1 — Quel est le prochain arrêt annoncé ?", text: ["Poste central","Gare","Mairie"], textC: 0,
    img: ["poste central","station","mairie"], imgC: 0,
    fillQ: "Audio 1 — Prochain arrêt : _________ central.", fill: "Poste", fillA: ["poste"]
  }
]);

const ANNONCE_7 = buildPool("moyen", "annonce-7", [
  {
    id: "a7-q1", textQ: "Audio 1 — Quel train est annoncé ?", text: ["Le train 6749","Le train 1608","Le train 468"], textC: 0,
    img: ["6749","1608","468"], imgC: 0,
    fillQ: "Audio 1 — Train numéro _________.", fill: "6749"
  },
  {
    id: "a7-q2", textQ: "Audio 1 — Combien de gares le train desservira-t-il ?", text: ["Deux","Trois","Quatre"], textC: 1,
    img: ["2 arrêts","3 arrêts","4 arrêts"], imgC: 1,
    fillQ: "Audio 1 — Le train desservira _________ gares.", fill: "trois", fillA: ["3"]
  },
  {
    id: "a7-q3", textQ: "Audio 2 — Qu'est-ce qui est autorisé au musée ?", text: ["Les photos","La nourriture","Courir"], textC: 0,
    img: ["photos","nourriture","courir"], imgC: 0,
    fillQ: "Audio 2 — Les _________ sont autorisées.", fill: "photos"
  },
  {
    id: "a7-q4", textQ: "Audio 2 — Qu'est-ce qui est interdit ?", text: ["Manger et courir","Prendre des photos","Parler"], textC: 0,
    img: ["manger/courir","photos","parler"], imgC: 0,
    fillQ: "Audio 2 — Interdit de consommer de la _________.", fill: "nourriture"
  },
  {
    id: "a7-q5", textQ: "Audio 3 — À partir de quel montant la livraison est gratuite ?", text: ["100 €","150 €","200 €"], textC: 1,
    img: ["100 €","150 €","200 €"], imgC: 1,
    fillQ: "Audio 3 — Livraison gratuite au-dessus de _________ €.", fill: "150"
  },
  {
    id: "a7-q6", textQ: "Audio 3 — Combien coûte la livraison en dessous de ce montant ?", text: ["Moins de 10 €","10 €","15 €"], textC: 0,
    img: ["moins 10 €","10 €","15 €"], imgC: 0,
    fillQ: "Audio 3 — Livraison pour moins de _________ €.", fill: "10"
  },
  {
    id: "a7-q7", textQ: "Audio 4 — Quelle réduction sur les livres ?", text: ["10 %","15 %","20 %"], textC: 0,
    img: ["10 %","15 %","20 %"], imgC: 0,
    fillQ: "Audio 4 — _________ % de réduction sur les livres.", fill: "10"
  },
  {
    id: "a7-q8", textQ: "Audio 5 — Quel prix pour les adultes au cinéma ?", text: ["5,50 €","7,50 €","10,50 €"], textC: 1,
    img: ["5,50 €","7,50 €","10,50 €"], imgC: 1,
    fillQ: "Audio 5 — Places adultes à _________ €.", fill: "7,50", fillA: ["7.50"]
  },
  {
    id: "a7-q9", textQ: "Audio 5 — Quel prix pour les moins de 18 ans ?", text: ["5,50 €","7,50 €","10,50 €"], textC: 0,
    img: ["5,50 €","7,50 €","10,50 €"], imgC: 0,
    fillQ: "Audio 5 — Moins de 18 ans : _________ €.", fill: "5,50", fillA: ["5.50"]
  },
  {
    id: "a7-q10", textQ: "Audio 6 — Quel nouveau moyen de paiement est accepté ?", text: ["Le téléphone portable","Le chèque","Les espèces uniquement"], textC: 0,
    img: ["téléphone","chèque","espèces"], imgC: 0,
    fillQ: "Audio 6 — Paiement avec le _________ portable.", fill: "téléphone", fillA: ["telephone"]
  }
]);

const ANNONCE_8 = buildPool("moyen", "annonce-8", [
  {
    id: "a8-q1", textQ: "Quel train est annoncé ?", text: ["Le train 1608","Le train 6749","Le train 468"], textC: 0,
    img: ["1608","6749","468"], imgC: 0,
    fillQ: "Le train numéro _________.", fill: "1608"
  },
  {
    id: "a8-q2", textQ: "De combien de minutes le train a-t-il de retard ?", text: ["5 minutes","7 minutes","10 minutes"], textC: 1,
    img: ["5 min","7 min","10 min"], imgC: 1,
    fillQ: "Le train part avec _________ minutes de retard.", fill: "7", fillA: ["sept"]
  },
  {
    id: "a8-q3", textQ: "À quelle heure le train s'arrête-t-il en cours de route ?", text: ["À 11 h 55","À 12 h 02","À 13 h 12"], textC: 1,
    img: ["11 h 55","12 h 02","13 h 12"], imgC: 1,
    fillQ: "Un arrêt à _________ h 02.", fill: "12"
  },
  {
    id: "a8-q4", textQ: "À quelle heure arrive-t-il à destination ?", text: ["À 12 h 02","À 13 h 12","À 14 h"], textC: 1,
    img: ["12 h 02","13 h 12","14 h"], imgC: 1,
    fillQ: "Arrivée à _________ h 12.", fill: "13"
  },
  {
    id: "a8-q5", textQ: "Où faut-il passer ses appels téléphoniques ?", text: ["Dans le couloir","Dans le wagon","À la gare"], textC: 0,
    img: ["couloir","wagon","hall"], imgC: 0,
    fillQ: "Passez vos appels dans le _________.", fill: "couloir"
  },
  {
    id: "a8-q6", textQ: "Dans quel wagon se trouve la cafétéria ?", text: ["Wagon 7","Wagon 9","Wagon 12"], textC: 1,
    img: ["wagon 7","wagon 9","wagon 12"], imgC: 1,
    fillQ: "La cafétéria est dans le wagon numéro _________.", fill: "9"
  },
  {
    id: "a8-q7", textQ: "Que doit-on faire si on utilise son téléphone ?", text: ["Aller dans le couloir","Rester assis","Éteindre le téléphone"], textC: 0,
    img: ["couloir","assis","éteindre"], imgC: 0,
    fillQ: "Pour téléphoner, allez dans le _________.", fill: "couloir"
  },
  {
    id: "a8-q8", textQ: "Le train part-il à l'heure ?", text: ["Non, il a du retard","Oui, à l'heure","Non, il est annulé"], textC: 0,
    img: ["retard","à l'heure","annulé"], imgC: 0,
    fillQ: "Le train partira avec du _________.", fill: "retard"
  },
  {
    id: "a8-q9", textQ: "Où peut-on manger dans le train ?", text: ["À la cafétéria","Dans le couloir","Au guichet"], textC: 0,
    img: ["cafétéria","couloir","guichet"], imgC: 0,
    fillQ: "On peut manger à la _________.", fill: "cafétéria", fillA: ["cafeteria"]
  },
  {
    id: "a8-q10", textQ: "Combien d'arrêts avant la destination finale ?", text: ["Un seul","Deux","Trois"], textC: 0,
    img: ["1 arrêt","2 arrêts","3 arrêts"], imgC: 0,
    fillQ: "Le train s'arrêtera une fois avant la _________.", fill: "destination"
  }
]);

const ANNONCE_9 = buildPool("moyen", "annonce-9", [
  {
    id: "a9-q1", textQ: "Que faut-il vérifier avant de descendre ?", text: ["Ses affaires","Son billet","Son passeport"], textC: 0,
    img: ["affaires","billet","passeport"], imgC: 0,
    fillQ: "Vérifiez que vous n'avez rien _________.", fill: "oublié"
  },
  {
    id: "a9-q2", textQ: "Où conseille-t-on de regarder ?", text: ["Sous le siège","Dans le couloir","Au-dessus du siège"], textC: 0,
    img: ["sous siège","couloir","au-dessus"], imgC: 0,
    fillQ: "Regardez sous votre _________.", fill: "siège", fillA: ["siege"]
  },
  {
    id: "a9-q3", textQ: "Quel train faut-il prendre pour continuer ?", text: ["Le train 468","Le train 1608","Le train 6749"], textC: 0,
    img: ["468","1608","6749"], imgC: 0,
    fillQ: "Prenez le train numéro _________.", fill: "468"
  },
  {
    id: "a9-q4", textQ: "À quelle heure part ce train ?", text: ["À 11 h 55","À 12 h 02","À 13 h 12"], textC: 1,
    img: ["11 h 55","12 h 02","13 h 12"], imgC: 1,
    fillQ: "Départ à _________ h 02.", fill: "12"
  },
  {
    id: "a9-q5", textQ: "Sur quel quai se trouve ce train ?", text: ["Quai 5","Quai 7","Quai 12"], textC: 1,
    img: ["quai 5","quai 7","quai 12"], imgC: 1,
    fillQ: "Le train est au quai numéro _________.", fill: "7"
  },
  {
    id: "a9-q6", textQ: "Où consulter les horaires d'autres trains ?", text: ["Sur le panneau d'affichage","À la cafétéria","Au guichet uniquement"], textC: 0,
    img: ["panneau","cafétéria","guichet"], imgC: 0,
    fillQ: "Consultez le panneau d'_________.", fill: "affichage"
  },
  {
    id: "a9-q7", textQ: "Quand faut-il vérifier ses affaires ?", text: ["Avant de descendre","Après la gare","Pendant le trajet"], textC: 0,
    img: ["avant descendre","après arrêt","pendant trajet"], imgC: 0,
    fillQ: "Avant de _________ du train, vérifiez vos affaires.", fill: "descendre"
  },
  {
    id: "a9-q8", textQ: "Faut-il changer de train pour continuer ?", text: ["Oui","Non","Seulement le week-end"], textC: 0,
    img: ["oui","non","week-end"], imgC: 0,
    fillQ: "Il faut prendre un autre _________.", fill: "train"
  },
  {
    id: "a9-q9", textQ: "Le train de correspondance part-il avant 12 h 30 ?", text: ["Oui","Non","On ne sait pas"], textC: 0,
    img: ["oui","non","inconnu"], imgC: 0,
    fillQ: "Le train part à 12 h _________.", fill: "02"
  },
  {
    id: "a9-q10", textQ: "Où se trouve le train de correspondance ?", text: ["Au quai 7","Au quai 5","Au quai 12"], textC: 0,
    img: ["quai 7","quai 5","quai 12"], imgC: 0,
    fillQ: "Le train est au quai _________.", fill: "7"
  }
]);

const ANNONCE_10 = buildPool("moyen", "annonce-10", [
  {
    id: "a10-q1", textQ: "Quel numéro de vol est annoncé ?", text: ["4568","7040","717"], textC: 0,
    img: ["4568","7040","717"], imgC: 0,
    fillQ: "Vol numéro _________.", fill: "4568"
  },
  {
    id: "a10-q2", textQ: "Quel numéro de porte d'embarquement ?", text: ["Porte 12","Porte 45","Porte 7"], textC: 1,
    img: ["porte 12","porte 45","porte 7"], imgC: 1,
    fillQ: "Porte d'embarquement numéro _________.", fill: "45"
  },
  {
    id: "a10-q3", textQ: "Qui peut utiliser la file prioritaire ?", text: ["Classe affaires ou enfant de moins de 3 ans","Tous les passagers","Uniquement les enfants"], textC: 0,
    img: ["affaires/enfant","tous","enfants"], imgC: 0,
    fillQ: "File prioritaire pour la classe _________ ou enfant -3 ans.", fill: "affaires"
  },
  {
    id: "a10-q4", textQ: "Combien de bagages à main par passager ?", text: ["Un seul","Deux","Trois"], textC: 0,
    img: ["1 bagage","2 bagages","3 bagages"], imgC: 0,
    fillQ: "Un seul bagage à _________ par passager.", fill: "main"
  },
  {
    id: "a10-q5", textQ: "Quels documents faut-il présenter ?", text: ["Billet et pièce d'identité","Passeport uniquement","Carte d'embarquement seule"], textC: 0,
    img: ["billet + identité","passeport","carte embarquement"], imgC: 0,
    fillQ: "Présentez votre billet et votre pièce d'_________.", fill: "identité", fillA: ["identite"]
  },
  {
    id: "a10-q6", textQ: "Quelle compagnie aérienne est concernée ?", text: ["Air France","Ryanair","EasyJet"], textC: 0,
    img: ["compagnie française","low cost 1","low cost 2"], imgC: 0,
    fillQ: "Vol d'une compagnie aérienne _________.", fill: "française", fillA: ["francaise"]
  },
  {
    id: "a10-q7", textQ: "Les enfants de quel âge peuvent emprunter la file prioritaire ?", text: ["Moins de 3 ans","Moins de 12 ans","Moins de 18 ans"], textC: 0,
    img: ["moins 3 ans","moins 12 ans","moins 18 ans"], imgC: 0,
    fillQ: "Enfant de moins de _________ ans.", fill: "3", fillA: ["trois"]
  },
  {
    id: "a10-q8", textQ: "Peut-on emporter deux bagages à main ?", text: ["Non, un seul","Oui, deux","Oui, trois"], textC: 0,
    img: ["1 seul","2","3"], imgC: 0,
    fillQ: "Un seul bagage à main est _________.", fill: "autorisé"
  },
  {
    id: "a10-q9", textQ: "Où doivent aller les passagers ?", text: ["À la porte d'embarquement","À la sortie","Au parking"], textC: 0,
    img: ["porte embarquement","sortie","parking"], imgC: 0,
    fillQ: "Allez à la porte d'_________.", fill: "embarquement"
  },
  {
    id: "a10-q10", textQ: "Faut-il sortir ses papiers avant l'embarquement ?", text: ["Oui","Non","Seulement le passeport"], textC: 0,
    img: ["oui","non","passeport"], imgC: 0,
    fillQ: "Sortez votre billet et votre pièce d'_________.", fill: "identité", fillA: ["identite"]
  }
]);

const ANNONCE_11 = buildPool("moyen", "annonce-11", [
  {
    id: "a11-q1", textQ: "Dans combien de temps la bibliothèque ferme-t-elle ?", text: ["Dans 5 minutes","Dans 15 minutes","Dans 30 minutes"], textC: 0,
    img: ["5 min","15 min","30 min"], imgC: 0,
    fillQ: "Fermeture dans _________ minutes.", fill: "5", fillA: ["cinq"]
  },
  {
    id: "a11-q2", textQ: "À quelle heure fermera-t-elle exceptionnellement demain ?", text: ["À 19 h","À 21 h","À 23 h"], textC: 1,
    img: ["19 h","21 h","23 h"], imgC: 1,
    fillQ: "Fermeture exceptionnelle à _________ h.", fill: "21"
  },
  {
    id: "a11-q3", textQ: "Quel est le titre du roman présenté ?", text: ["Les vagues de l'océan","La roue tourne","Toute ma vie"], textC: 0,
    img: ["vagues océan","roue tourne","toute ma vie"], imgC: 0,
    fillQ: "Roman : Les vagues de l'_________.", fill: "océan", fillA: ["ocean"]
  },
  {
    id: "a11-q4", textQ: "Pourquoi la bibliothèque fermera-t-elle plus tard demain ?", text: ["À cause d'une conférence","Pour des travaux","Pour un jour férié"], textC: 0,
    img: ["conférence","travaux","férié"], imgC: 0,
    fillQ: "Fermeture tardive à cause d'une _________.", fill: "conférence", fillA: ["conference"]
  },
  {
    id: "a11-q5", textQ: "Combien coûte un exemplaire du livre ?", text: ["10 €","14 €","17 €"], textC: 1,
    img: ["10 €","14 €","17 €"], imgC: 1,
    fillQ: "Le livre coûte _________ euros.", fill: "14", fillA: ["quatorze"]
  },
  {
    id: "a11-q6", textQ: "La réservation d'une place est-elle payante ?", text: ["Non, c'est gratuit","Oui, 5 €","Oui, 14 €"], textC: 0,
    img: ["gratuit","5 €","14 €"], imgC: 0,
    fillQ: "La réservation est _________.", fill: "gratuite", fillA: ["gratuit"]
  },
  {
    id: "a11-q7", textQ: "Où aura lieu la dédicace ?", text: ["Dans la salle de conférences","À l'accueil","Dans la rue"], textC: 0,
    img: ["salle conférences","accueil","extérieur"], imgC: 0,
    fillQ: "Dédicace dans la salle de _________.", fill: "conférences", fillA: ["conferences"]
  },
  {
    id: "a11-q8", textQ: "À quelle heure ferme-t-on normalement ?", text: ["À 19 h","À 21 h","À 15 h 30"], textC: 0,
    img: ["19 h","21 h","15 h 30"], imgC: 0,
    fillQ: "Fermeture habituelle à _________ h.", fill: "19", fillA: ["dix-neuf"]
  },
  {
    id: "a11-q9", textQ: "Comment réserver une place ?", text: ["En se présentant à l'accueil","Par Internet uniquement","Par téléphone uniquement"], textC: 0,
    img: ["à l'accueil","internet","téléphone"], imgC: 0,
    fillQ: "Réserver en se présentant à l'_________.", fill: "accueil"
  },
  {
    id: "a11-q10", textQ: "Peut-on acheter le livre sur place ?", text: ["Oui","Non","Seulement en ligne"], textC: 0,
    img: ["oui","non","en ligne"], imgC: 0,
    fillQ: "Il sera possible d'acheter un _________ du livre.", fill: "exemplaire"
  }
]);

const ANNONCE_12 = buildPool("moyen", "annonce-12", [
  {
    id: "a12-q1", textQ: "Sur quels produits y a-t-il une offre « deuxième offert » ?", text: ["Gel douche ou savon","Télévisions","Parfums"], textC: 0,
    img: ["gel douche","télévisions","parfums"], imgC: 0,
    fillQ: "Pour un gel douche acheté, le deuxième est _________.", fill: "offert"
  },
  {
    id: "a12-q2", textQ: "Jusqu'à quand dure la promo sur les produits de beauté ?", text: ["Jusqu'en avril","Jusqu'en mai","Jusqu'en juin"], textC: 0,
    img: ["mois 4","mois 5","mois 6"], imgC: 0,
    fillQ: "Offre beauté jusqu'en _________.", fill: "avril"
  },
  {
    id: "a12-q3", textQ: "Où peut-on jouer à la loterie ?", text: ["Dans l'allée centrale","À l'accueil","Au 1er étage"], textC: 0,
    img: ["allée centrale","accueil","1er étage"], imgC: 0,
    fillQ: "Loterie dans l'allée _________.", fill: "centrale"
  },
  {
    id: "a12-q4", textQ: "Audio 4 — À partir de quand les promotions sur les télévisions ?", text: ["Le 1er avril","Le 1er mai","Le 1er juin"], textC: 1,
    img: ["mois 4","mois 5","mois 6"], imgC: 1,
    fillQ: "Promos TV à partir du 1er _________.", fill: "mai"
  },
  {
    id: "a12-q5", textQ: "Quelle réduction sur les télévisions ?", text: ["30 %","40 %","50 %"], textC: 1,
    img: ["30 %","40 %","50 %"], imgC: 1,
    fillQ: "Jusqu'à _________ % sur les télévisions.", fill: "40"
  },
  {
    id: "a12-q6", textQ: "Quel est le slogan du magasin ?", text: ["Les prix sont mini","Ne laissez pas passer","Bonne visite"], textC: 0,
    img: ["prix mini","ne ratez pas","bonne visite"], imgC: 0,
    fillQ: "Slogan : les prix sont _________.", fill: "mini"
  },
  {
    id: "a12-q7", textQ: "Que peut-on gagner à la loterie ?", text: ["Des parfums","Des télévisions","Des sandwichs"], textC: 0,
    img: ["parfums","télévisions","sandwichs"], imgC: 0,
    fillQ: "Vous pouvez gagner des _________.", fill: "parfums"
  },
  {
    id: "a12-q8", textQ: "Dans quel rayon sont les promotions de beauté ?", text: ["Produits de beauté","Fruits et légumes","Électroménager"], textC: 0,
    img: ["beauté","fruits","électro"], imgC: 0,
    fillQ: "Promotions sur les produits de _________.", fill: "beauté", fillA: ["beaute"]
  },
  {
    id: "a12-q9", textQ: "Faut-il acheter deux produits identiques pour la promo beauté ?", text: ["Oui, le 2e est offert","Non, c'est 50 %","Non, c'est gratuit"], textC: 0,
    img: ["2e offert","50 %","gratuit"], imgC: 0,
    fillQ: "Le deuxième produit est _________.", fill: "offert"
  },
  {
    id: "a12-q10", textQ: "Les promos TV commencent-elles en avril ?", text: ["Non, en mai","Oui, en avril","Oui, en juin"], textC: 0,
    img: ["mois 5","mois 4","mois 6"], imgC: 0,
    fillQ: "Promos TV à partir du 1er _________.", fill: "mai"
  }
]);

const ANNONCE_13 = buildPool("moyen", "annonce-13", [
  {
    id: "a13-q1", textQ: "Quelle attraction est annoncée ?", text: ["Le train rapide","La grande roue","Le carrousel"], textC: 0,
    img: ["train rapide","grande roue","carrousel"], imgC: 0,
    fillQ: "Attraction du train _________.", fill: "rapide"
  },
  {
    id: "a13-q2", textQ: "Quelle taille minimum pour monter dans le manège ?", text: ["1 m","1 m 20","1 m 40"], textC: 1,
    img: ["1 m","1 m 20","1 m 40"], imgC: 1,
    fillQ: "Il faut mesurer au moins _________ m 20.", fill: "1"
  },
  {
    id: "a13-q3", textQ: "Où ranger ses affaires ?", text: ["Dans le sac","Sur le siège","À la sortie"], textC: 0,
    img: ["dans sac","sur siège","sortie"], imgC: 0,
    fillQ: "Rangez vos affaires dans votre _________.", fill: "sac"
  },
  {
    id: "a13-q4", textQ: "Comment garder sa tête dans le train ?", text: ["Contre le siège","Debout","Penchée en avant"], textC: 0,
    img: ["contre siège","debout","penchée"], imgC: 0,
    fillQ: "Gardez votre tête contre le _________.", fill: "siège", fillA: ["siege"]
  },
  {
    id: "a13-q5", textQ: "Pourquoi faut-il sourire ?", text: ["Pour la photo","Pour la sécurité","Pour le personnel"], textC: 0,
    img: ["photo","sécurité","personnel"], imgC: 0,
    fillQ: "Souriez pour la _________.", fill: "photo"
  },
  {
    id: "a13-q6", textQ: "Où acheter la photo ?", text: ["Au stand à la sortie","À l'entrée","En ligne"], textC: 0,
    img: ["stand sortie","entrée","en ligne"], imgC: 0,
    fillQ: "Photo à acheter au stand à la _________.", fill: "sortie"
  },
  {
    id: "a13-q7", textQ: "Quels objets faut-il ranger ?", text: ["Lunettes et bijoux","Chaussures et chapeau","Téléphone et clés"], textC: 0,
    img: ["lunettes/bijoux","chaussures","téléphone"], imgC: 0,
    fillQ: "Rangez lunettes, bijoux et appareils _________.", fill: "photo"
  },
  {
    id: "a13-q8", textQ: "Le manège est-il dangereux sans respecter les règles ?", text: ["Oui, il y a des règles de sécurité","Non, aucune règle","On ne sait pas"], textC: 0,
    img: ["règles sécurité","aucune règle","inconnu"], imgC: 0,
    fillQ: "Il y a des règles pour votre _________.", fill: "sécurité", fillA: ["securite"]
  },
  {
    id: "a13-q9", textQ: "Peut-on garder ses lunettes pendant l'attraction ?", text: ["Non, il faut les ranger","Oui","Seulement les lunettes de soleil"], textC: 0,
    img: ["ranger","garder","soleil"], imgC: 0,
    fillQ: "Rangez vos _________ dans votre sac.", fill: "lunettes"
  },
  {
    id: "a13-q10", textQ: "Où se trouve le stand photo ?", text: ["À la sortie du train","À l'entrée du parc","Dans le manège"], textC: 0,
    img: ["sortie train","entrée parc","manège"], imgC: 0,
    fillQ: "Stand photo à la sortie du train _________.", fill: "rapide"
  }
]);

const RADIO_14 = buildPool("moyen", "radio-14", [
  {
    id: "r14-q1", textQ: "Audio 1 — Quel temps fait-il aujourd'hui dans la majeure partie du pays ?", text: ["Pluvieux","Ensoleillé","Neigeux"], textC: 0,
    img: ["pluie","soleil","neige"], imgC: 0,
    fillQ: "Audio 1 — Temps _________ sur la France.", fill: "pluvieux", fillA: ["pluvieuse"]
  },
  {
    id: "r14-q2", textQ: "Audio 1 — Où y aura-t-il quelques rayons de soleil ?", text: ["Au sud","Au nord","À l'est"], textC: 0,
    img: ["sud","nord","est"], imgC: 0,
    fillQ: "Audio 1 — Quelques rayons de soleil au _________.", fill: "sud"
  },
  {
    id: "r14-q3", textQ: "Audio 1 — Quel temps est annoncé la semaine prochaine ?", text: ["Très beau, températures d'été","Pluvieux","Neigeux"], textC: 0,
    img: ["été","pluie","neige"], imgC: 0,
    fillQ: "Audio 1 — Il fera très beau avec des températures d'_________.", fill: "été", fillA: ["ete"]
  },
  {
    id: "r14-q4", textQ: "Audio 2 — Quelle série est mentionnée ?", text: ["La Casa de Papel","La roue tourne","Astérix et Obélix"], textC: 0,
    img: ["série espagnole","comédie","BD"], imgC: 0,
    fillQ: "Audio 2 — Série à succès très _________.", fill: "populaire"
  },
  {
    id: "r14-q5", textQ: "Audio 2 — À quelle heure les acteurs feront-ils des photos ?", text: ["De 14 h à 16 h","De 10 h à 12 h","De 18 h à 20 h"], textC: 0,
    img: ["14-16 h","10-12 h","18-20 h"], imgC: 0,
    fillQ: "Audio 2 — Photos de 14 h à _________ h.", fill: "16", fillA: ["seize"]
  },
  {
    id: "r14-q6", textQ: "Audio 3 — Quel problème dans le métro parisien ?", text: ["Une grève","Un accident","Des travaux"], textC: 0,
    img: ["grève","accident","travaux"], imgC: 0,
    fillQ: "Audio 3 — Le personnel organise une _________.", fill: "grève", fillA: ["greve"]
  },
  {
    id: "r14-q7", textQ: "Audio 3 — Combien de trains circulent ?", text: ["2 sur 4","1 sur 5","3 sur 4"], textC: 0,
    img: ["2/4","1/5","3/4"], imgC: 0,
    fillQ: "Audio 3 — Seuls _________ trains sur 4 circulent.", fill: "2", fillA: ["deux"]
  },
  {
    id: "r14-q8", textQ: "Audio 3 — Combien de jours dure la grève ?", text: ["Aujourd'hui et demain","Une semaine","Un mois"], textC: 0,
    img: ["2 jours","1 semaine","1 mois"], imgC: 0,
    fillQ: "Audio 3 — Grève aujourd'hui et _________.", fill: "demain"
  },
  {
    id: "r14-q9", textQ: "Audio 2 — Que feront les acteurs avec le public ?", text: ["Des photos","Un concert","Une pièce de théâtre"], textC: 0,
    img: ["photos","concert","théâtre"], imgC: 0,
    fillQ: "Audio 2 — Les acteurs feront des _________.", fill: "photos"
  },
  {
    id: "r14-q10", textQ: "Audio 1 — Le sud sera-t-il aussi pluvieux que le reste du pays ?", text: ["Non, quelques rayons de soleil","Oui, partout","On ne sait pas"], textC: 0,
    img: ["soleil au sud","pluie partout","inconnu"], imgC: 0,
    fillQ: "Audio 1 — Au sud, quelques rayons de _________.", fill: "soleil"
  }
]);

const RADIO_15 = buildPool("moyen", "radio-15", [
  {
    id: "r15-q1", textQ: "Audio 1 — Quelle est la température annoncée ?", text: ["-7°","-5°","0°"], textC: 0,
    img: ["-7°","-5°","0°"], imgC: 0,
    fillQ: "Audio 1 — Il fait _________°.", fill: "-7", fillA: ["-7°","moins 7"]
  },
  {
    id: "r15-q2", textQ: "Audio 1 — Quel conseil est donné aux automobilistes ?", text: ["Ne pas prendre la voiture","Rouler lentement","Prendre le bus"], textC: 0,
    img: ["pas de voiture","rouler lent","bus"], imgC: 0,
    fillQ: "Audio 1 — Ne prenez pas votre _________.", fill: "voiture"
  },
  {
    id: "r15-q3", textQ: "Audio 1 — Quel temps sur les routes ?", text: ["Beaucoup de neige","Pluie","Soleil"], textC: 0,
    img: ["neige","pluie","soleil"], imgC: 0,
    fillQ: "Audio 1 — Beaucoup de _________ sur les routes.", fill: "neige"
  },
  {
    id: "r15-q4", textQ: "Audio 2 — Combien de jours dure le printemps du cinéma ?", text: ["2 jours","3 jours","5 jours"], textC: 1,
    img: ["2 jours","3 jours","5 jours"], imgC: 1,
    fillQ: "Audio 2 — Du 17 au 19 avril, soit _________ jours.", fill: "3", fillA: ["trois"]
  },
  {
    id: "r15-q5", textQ: "Audio 2 — Quel est le tarif exceptionnel ?", text: ["3,50 €","5,50 €","7,50 €"], textC: 0,
    img: ["3,50 €","5,50 €","7,50 €"], imgC: 0,
    fillQ: "Audio 2 — Films à _________ €.", fill: "3,50", fillA: ["3.50"]
  },
  {
    id: "r15-q6", textQ: "Audio 3 — Où a lieu le concert annoncé ?", text: ["À l'Olympia","À la salle des fêtes","Au cinéma"], textC: 0,
    img: ["salle de concert","salle fêtes","cinéma"], imgC: 0,
    fillQ: "Audio 3 — Concert dans une grande _________.", fill: "salle", fillA: ["olympia"]
  },
  {
    id: "r15-q7", textQ: "Audio 3 — Comment gagner des places ?", text: ["En envoyant un SMS","En appelant","En allant sur place"], textC: 0,
    img: ["SMS","téléphone","en personne"], imgC: 0,
    fillQ: "Audio 3 — Envoyez un _________ pour gagner.", fill: "SMS", fillA: ["sms"]
  },
  {
    id: "r15-q8", textQ: "Audio 3 — Combien de places peut-on gagner ?", text: ["Deux","Une","Quatre"], textC: 0,
    img: ["2 billets","1 billet","4 billets"], imgC: 0,
    fillQ: "Audio 3 — Gagner _________ places pour le concert.", fill: "deux", fillA: ["2"]
  },
  {
    id: "r15-q9", textQ: "Audio 1 — Les bus circulent-ils ?", text: ["Non, aucun bus","Oui, normalement","Oui, avec retard"], textC: 0,
    img: ["aucun bus","normal","retard"], imgC: 0,
    fillQ: "Audio 1 — Aucun bus ne _________.", fill: "circulera", fillA: ["circule"]
  },
  {
    id: "r15-q10", textQ: "Audio 2 — Où tous les films sont-ils au même tarif ?", text: ["Dans tous les cinémas","Dans un seul cinéma","En ligne"], textC: 0,
    img: ["tous cinémas","un cinéma","en ligne"], imgC: 0,
    fillQ: "Audio 2 — Tarif exceptionnel dans tous les _________.", fill: "cinémas", fillA: ["cinemas"]
  }
]);

const RADIO_16 = buildPool("moyen", "radio-16", [
  {
    id: "r16-q1", textQ: "Audio 1 — Quel secteur utilise beaucoup l'apprentissage ?", text: ["L'hôtellerie-restauration","L'informatique","Le commerce"], textC: 0,
    img: ["hôtellerie","informatique","commerce"], imgC: 0,
    fillQ: "Audio 1 — Secteur : hôtellerie-_________.", fill: "restauration"
  },
  {
    id: "r16-q2", textQ: "Audio 1 — Que permet l'apprentissage ?", text: ["Étudier et travailler","Voyager","Gagner beaucoup d'argent"], textC: 0,
    img: ["étudier/travailler","voyager","gagner"], imgC: 0,
    fillQ: "Audio 1 — On peut étudier et _________.", fill: "travailler"
  },
  {
    id: "r16-q3", textQ: "Audio 2 — Quelle remise sur les bouquets de fleurs ?", text: ["15 %","25 %","30 %"], textC: 1,
    img: ["15 %","25 %","30 %"], imgC: 1,
    fillQ: "Audio 2 — Remise de _________ % sur les fleurs.", fill: "25"
  },
  {
    id: "r16-q4", textQ: "Audio 2 — Pour quelle occasion la publicité est-elle faite ?", text: ["La journée des grands-parents","La fête des mères","Noël"], textC: 0,
    img: ["grands-parents","fête mères","noël"], imgC: 0,
    fillQ: "Audio 2 — Journée des grands-_________.", fill: "parents"
  },
  {
    id: "r16-q5", textQ: "Audio 3 — De qui parle l'exposition ?", text: ["D'une peintre","D'un écrivain","D'un musicien"], textC: 0,
    img: ["peintre","écrivain","musicien"], imgC: 0,
    fillQ: "Audio 3 — Exposition sur une _________.", fill: "peintre"
  },
  {
    id: "r16-q6", textQ: "Audio 3 — Combien de tableaux sont exposés ?", text: ["20","30","40"], textC: 1,
    img: ["20","30","40"], imgC: 1,
    fillQ: "Audio 3 — _________ tableaux à admirer.", fill: "30", fillA: ["trente"]
  },
  {
    id: "r16-q7", textQ: "Audio 3 — À partir de quelle date l'exposition commence-t-elle ?", text: ["Le 12 février","Le 17 avril","Le 20 juillet"], textC: 0,
    img: ["12/02","17/04","20/07"], imgC: 0,
    fillQ: "Audio 3 — À partir du 12 _________.", fill: "février", fillA: ["fevrier"]
  },
  {
    id: "r16-q8", textQ: "Audio 1 — Que gagnent les apprentis en plus des cours ?", text: ["De l'expérience pratique","Des vacances","Un diplôme international"], textC: 0,
    img: ["expérience","vacances","diplôme"], imgC: 0,
    fillQ: "Audio 1 — Cela apporte de l'expérience _________.", fill: "pratique"
  },
  {
    id: "r16-q9", textQ: "Audio 2 — Où utiliser le code promo ?", text: ["Sur un site internet","En magasin","Au téléphone"], textC: 0,
    img: ["site internet","magasin","téléphone"], imgC: 0,
    fillQ: "Audio 2 — Code promo sur un site _________.", fill: "internet"
  },
  {
    id: "r16-q10", textQ: "Audio 3 — Quel type d'œuvres est exposé ?", text: ["Des portraits de femmes","Des paysages","Des natures mortes"], textC: 0,
    img: ["portraits","paysages","natures mortes"], imgC: 0,
    fillQ: "Audio 3 — Portraits de _________.", fill: "femmes"
  }
]);

const RADIO_17 = buildPool("moyen", "radio-17", [
  {
    id: "r17-q1", textQ: "Audio 1 — Combien de minutes de promenade sont conseillées ?", text: ["10 minutes","20 minutes","30 minutes"], textC: 1,
    img: ["10 min","20 min","30 min"], imgC: 1,
    fillQ: "Audio 1 — Promenade de _________ minutes.", fill: "20", fillA: ["vingt"]
  },
  {
    id: "r17-q2", textQ: "Audio 1 — Quels sports sont conseillés aux sportifs ?", text: ["Vélo et natation","Football et rugby","Ski et tennis"], textC: 0,
    img: ["vélo/natation","foot/rugby","ski/tennis"], imgC: 0,
    fillQ: "Audio 1 — Le vélo et la _________ sont conseillés.", fill: "natation"
  },
  {
    id: "r17-q3", textQ: "Audio 2 — Combien de trains circulent au niveau national ?", text: ["1 sur 3","1 sur 5","2 sur 4"], textC: 1,
    img: ["1/3","1/5","2/4"], imgC: 1,
    fillQ: "Audio 2 — _________ train sur 5 circule.", fill: "1", fillA: ["un"]
  },
  {
    id: "r17-q4", textQ: "Audio 2 — Où consulter le programme des trains ?", text: ["Site SNCF","Site RATP","Site Air France"], textC: 0,
    img: ["SNCF","RATP","avion"], imgC: 0,
    fillQ: "Audio 2 — Consultez le site de la _________.", fill: "SNCF", fillA: ["sncf"]
  },
  {
    id: "r17-q5", textQ: "Audio 3 — Quel est le score du match de foot ?", text: ["2 à 1","3 à 1","1 à 0"], textC: 1,
    img: ["2-1","3-1","1-0"], imgC: 1,
    fillQ: "Audio 3 — Victoire 3 à _________.", fill: "1", fillA: ["un"]
  },
  {
    id: "r17-q6", textQ: "Audio 3 — Quand commence la saison de courses de chevaux ?", text: ["Demain à 13 h","Aujourd'hui à 14 h","Samedi à 10 h"], textC: 0,
    img: ["13 h","14 h","10 h"], imgC: 0,
    fillQ: "Audio 3 — Courses de chevaux demain à _________ h.", fill: "13", fillA: ["treize"]
  },
  {
    id: "r17-q7", textQ: "Audio 1 — Quelle saison approche ?", text: ["L'automne","L'été","Le printemps"], textC: 0,
    img: ["automne","été","printemps"], imgC: 0,
    fillQ: "Audio 1 — À l'approche de l'_________.", fill: "automne"
  },
  {
    id: "r17-q8", textQ: "Audio 2 — Quel problème de transport est annoncé ?", text: ["Une grève","Un accident","Des travaux"], textC: 0,
    img: ["grève","accident","travaux"], imgC: 0,
    fillQ: "Audio 2 — La grève des transports _________.", fill: "continue"
  },
  {
    id: "r17-q9", textQ: "Audio 3 — Quel sport est mentionné en basket ?", text: ["Nanterre contre Limoges","Paris contre Monaco","Courses de chevaux"], textC: 0,
    img: ["basket","foot","chevaux"], imgC: 0,
    fillQ: "Audio 3 — Résultat de _________.", fill: "basket", fillA: ["basket-ball"]
  },
  {
    id: "r17-q10", textQ: "Audio 1 — Que faut-il ne pas oublier ?", text: ["Boire","Manger","Dormir"], textC: 0,
    img: ["boire","manger","dormir"], imgC: 0,
    fillQ: "Audio 1 — N'oubliez pas de _________ !", fill: "boire"
  }
]);

const RADIO_18 = buildPool("moyen", "radio-18", [
  {
    id: "r18-q1", textQ: "Audio 1 — Dans combien de semaines ouvre la fromagerie ?", text: ["3 semaines","5 semaines","7 semaines"], textC: 1,
    img: ["3 sem.","5 sem.","7 sem."], imgC: 1,
    fillQ: "Audio 1 — Ouverture dans _________ semaines.", fill: "5", fillA: ["cinq"]
  },
  {
    id: "r18-q2", textQ: "Audio 1 — Quand la boutique est-elle ouverte ?", text: ["Tous les jours sauf le week-end","Uniquement le week-end","Du lundi au vendredi"], textC: 0,
    img: ["7j/7 sauf WE","WE uniquement","5 jours"], imgC: 0,
    fillQ: "Audio 1 — Ouverte tous les jours sauf le _________.", fill: "week-end", fillA: ["weekend"]
  },
  {
    id: "r18-q3", textQ: "Audio 1 — Quels produits vendra-t-on ?", text: ["Produits frais de la région","Produits importés","Produits surgelés"], textC: 0,
    img: ["frais région","importés","surgelés"], imgC: 0,
    fillQ: "Audio 1 — Produits frais de la _________.", fill: "région", fillA: ["region"]
  },
  {
    id: "r18-q4", textQ: "Audio 2 — Qui est en grève ?", text: ["Les hôtesses de l'air","Les conducteurs de train","Les enseignants"], textC: 0,
    img: ["hôtesses","conducteurs","enseignants"], imgC: 0,
    fillQ: "Audio 2 — Grève des hôtesses de l'_________.", fill: "air"
  },
  {
    id: "r18-q5", textQ: "Audio 2 — Que réclament-elles ?", text: ["Meilleur salaire et congés","Moins d'heures","Plus de vacances seules"], textC: 0,
    img: ["salaire/congés","moins heures","vacances"], imgC: 0,
    fillQ: "Audio 2 — Elles réclament un meilleur _________.", fill: "salaire"
  },
  {
    id: "r18-q6", textQ: "Audio 3 — Quel événement est annoncé ?", text: ["Un festival de gastronomie","Un festival de musique","Un festival de cinéma"], textC: 0,
    img: ["gastronomie","musique","cinéma"], imgC: 0,
    fillQ: "Audio 3 — Festival de _________.", fill: "gastronomie"
  },
  {
    id: "r18-q7", textQ: "Audio 3 — Quand a lieu le festival ?", text: ["Du 20 au 25 juillet","Du 17 au 19 avril","Du 28 au 30 juin"], textC: 0,
    img: ["20-25/07","17-19/04","28-30/06"], imgC: 0,
    fillQ: "Audio 3 — Du 20 au 25 _________.", fill: "juillet"
  },
  {
    id: "r18-q8", textQ: "Audio 3 — Comment réserver des billets ?", text: ["En ligne","Par téléphone","À la gare"], textC: 0,
    img: ["en ligne","téléphone","guichet"], imgC: 0,
    fillQ: "Audio 3 — Réserver vos billets en _________.", fill: "ligne"
  },
  {
    id: "r18-q9", textQ: "Audio 1 — À quelle heure ouvre la fromagerie ?", text: ["À 9 h","À 10 h","À 12 h"], textC: 0,
    img: ["9 h","10 h","12 h"], imgC: 0,
    fillQ: "Audio 1 — Ouverture de 9 h à 18 h _________.", fill: "30"
  },
  {
    id: "r18-q10", textQ: "Audio 2 — Qui n'a pas encore répondu aux hôtesses ?", text: ["Le ministère des transports","Les syndicats","Les passagers"], textC: 0,
    img: ["ministère","syndicats","passagers"], imgC: 0,
    fillQ: "Audio 2 — Le ministère n'a pas encore _________.", fill: "répondu", fillA: ["repondu"]
  }
]);

const RADIO_19 = buildPool("moyen", "radio-19", [
  {
    id: "r19-q1", textQ: "Audio 1 — Quel est le titre du livre présenté ?", text: ["Toute ma vie","Les vagues de l'océan","La roue tourne"], textC: 0,
    img: ["toute ma vie","vagues océan","roue tourne"], imgC: 0,
    fillQ: "Audio 1 — Livre : _________ ma vie.", fill: "Toute", fillA: ["toute"]
  },
  {
    id: "r19-q2", textQ: "Audio 1 — De quoi parle le livre ?", text: ["Des voyages","De la musique","De la cuisine"], textC: 0,
    img: ["voyages","musique","cuisine"], imgC: 0,
    fillQ: "Audio 1 — Il raconte des _________.", fill: "voyages"
  },
  {
    id: "r19-q3", textQ: "Audio 1 — Pour quel public est la radio ?", text: ["Les 12-18 ans","Les enfants","Les seniors"], textC: 0,
    img: ["12-18 ans","enfants","seniors"], imgC: 0,
    fillQ: "Audio 1 — Radio des 12-_________ ans.", fill: "18", fillA: ["dix-huit"]
  },
  {
    id: "r19-q4", textQ: "Audio 2 — De combien augmentent les consultations ?", text: ["10 %","12 %","25 %"], textC: 1,
    img: ["10 %","12 %","25 %"], imgC: 1,
    fillQ: "Audio 2 — Hausse de _________ % des consultations.", fill: "12", fillA: ["douze"]
  },
  {
    id: "r19-q5", textQ: "Audio 2 — Quel est le nouveau tarif des consultations ?", text: ["25 €","28 €","30 €"], textC: 1,
    img: ["25 €","28 €","30 €"], imgC: 1,
    fillQ: "Audio 2 — Consultations à _________ €.", fill: "28", fillA: ["vingt-huit"]
  },
  {
    id: "r19-q6", textQ: "Audio 2 — Quel était l'ancien tarif ?", text: ["25 €","28 €","30 €"], textC: 0,
    img: ["25 €","28 €","30 €"], imgC: 0,
    fillQ: "Audio 2 — Tarif passant de 25 € à _________ €.", fill: "28"
  },
  {
    id: "r19-q7", textQ: "Audio 3 — Quel temps fait-il aujourd'hui ?", text: ["Magnifique, grand soleil","Pluvieux","Neigeux"], textC: 0,
    img: ["soleil","pluie","neige"], imgC: 0,
    fillQ: "Audio 3 — Temps magnifique, grand _________.", fill: "soleil"
  },
  {
    id: "r19-q8", textQ: "Audio 3 — Quel temps est prévu demain ?", text: ["Pluie et vent fort","Grand soleil","Neige"], textC: 0,
    img: ["pluie/vent","soleil","neige"], imgC: 0,
    fillQ: "Audio 3 — Demain, pluie et _________ fort.", fill: "vent"
  },
  {
    id: "r19-q9", textQ: "Audio 3 — Que faut-il sortir demain ?", text: ["Son parapluie","Ses lunettes de soleil","Son manteau"], textC: 0,
    img: ["parapluie","lunettes soleil","manteau"], imgC: 0,
    fillQ: "Audio 3 — Il faudra sortir son _________.", fill: "parapluie"
  },
  {
    id: "r19-q10", textQ: "Audio 2 — Quelle nouveauté pour les frais médicaux ?", text: ["Une nouvelle carte","Un nouveau médecin","Un nouveau médicament"], textC: 0,
    img: ["carte","médecin","médicament"], imgC: 0,
    fillQ: "Audio 2 — Nouvelle _________ pour les frais médicaux.", fill: "carte"
  }
]);

const RADIO_20 = buildPool("moyen", "radio-20", [
  {
    id: "r20-q1", textQ: "Audio 1 — Quelle température dans la moitié nord ?", text: ["Jusqu'à 42°","Jusqu'à 38°","Jusqu'à 30°"], textC: 0,
    img: ["42°","38°","30°"], imgC: 0,
    fillQ: "Audio 1 — Jusqu'à _________° dans le nord.", fill: "42", fillA: ["quarante-deux"]
  },
  {
    id: "r20-q2", textQ: "Audio 1 — Quel conseil est donné ?", text: ["Boire beaucoup d'eau","Rester chez soi","Porter un manteau"], textC: 0,
    img: ["boire eau","rester","manteau"], imgC: 0,
    fillQ: "Audio 1 — N'oubliez pas de boire de l'_________.", fill: "eau"
  },
  {
    id: "r20-q3", textQ: "Audio 1 — Quelle température dans le sud ?", text: ["38°","42°","30°"], textC: 0,
    img: ["38°","42°","30°"], imgC: 0,
    fillQ: "Audio 1 — _________° dans le sud.", fill: "38", fillA: ["trente-huit"]
  },
  {
    id: "r20-q4", textQ: "Audio 2 — Combien de photographes seront présents ?", text: ["20","27","30"], textC: 1,
    img: ["20","27","30"], imgC: 1,
    fillQ: "Audio 2 — _________ photographes seront présents.", fill: "27", fillA: ["vingt-sept"]
  },
  {
    id: "r20-q5", textQ: "Audio 2 — Où a lieu la rencontre ?", text: ["Grande salle des fêtes","Musée","Bibliothèque"], textC: 0,
    img: ["salle fêtes","musée","bibliothèque"], imgC: 0,
    fillQ: "Audio 2 — Rencontre dans la grande salle des _________.", fill: "fêtes", fillA: ["fetes"]
  },
  {
    id: "r20-q6", textQ: "Audio 2 — Quel type d'exposition ?", text: ["Photographies","Peintures","Sculptures"], textC: 0,
    img: ["photos","peintures","sculptures"], imgC: 0,
    fillQ: "Audio 2 — Exposition de _________.", fill: "photographies", fillA: ["photos"]
  },
  {
    id: "r20-q7", textQ: "Audio 3 — Quel problème sur l'autoroute A10 ?", text: ["Mouvement social des routiers","Accident","Travaux"], textC: 0,
    img: ["grève routiers","accident","travaux"], imgC: 0,
    fillQ: "Audio 3 — Problème : mouvement social des _________.", fill: "transporteurs", fillA: ["routiers"]
  },
  {
    id: "r20-q8", textQ: "Audio 3 — Quelle route alternative est conseillée ?", text: ["La route nationale 19","La route nationale 10","L'autoroute A6"], textC: 0,
    img: ["RN 19","RN 10","A6"], imgC: 0,
    fillQ: "Audio 3 — Prenez la route nationale _________.", fill: "19", fillA: ["dix-neuf"]
  },
  {
    id: "r20-q9", textQ: "Audio 1 — Quel phénomène arrive la semaine prochaine ?", text: ["Une vague de chaleur","Une tempête","De la neige"], textC: 0,
    img: ["chaleur","tempête","neige"], imgC: 0,
    fillQ: "Audio 1 — Une vague de _________ arrive.", fill: "chaleur"
  },
  {
    id: "r20-q10", textQ: "Audio 2 — Qui organise l'exposition ?", text: ["La mairie","La SNCF","Un musée"], textC: 0,
    img: ["mairie","SNCF","musée"], imgC: 0,
    fillQ: "Audio 2 — La _________ organise l'exposition.", fill: "mairie"
  }
]);

const RADIO_21 = buildPool("moyen", "radio-21", [
  {
    id: "r21-q1", textQ: "Quel type de destination est conseillé ?", text: ["Un petit royaume en Europe","Une île tropicale","Une grande métropole"], textC: 0,
    img: ["royaume","île","métropole"], imgC: 0,
    fillQ: "On conseille un petit _________ en Europe.", fill: "royaume"
  },
  {
    id: "r21-q2", textQ: "D'où viennent surtout les visiteurs ?", text: ["D'Europe","D'Asie","D'Amérique"], textC: 0,
    img: ["europe","asie","amérique"], imgC: 0,
    fillQ: "Ils viennent surtout d'_________.", fill: "Europe", fillA: ["europe"]
  },
  {
    id: "r21-q3", textQ: "Quel musée est mentionné pour les amateurs de BD ?", text: ["Un musée de bande dessinée","Un musée d'art moderne","Un musée de sciences"], textC: 0,
    img: ["BD","art moderne","sciences"], imgC: 0,
    fillQ: "Un musée de bande _________.", fill: "dessinée", fillA: ["dessinee","BD"]
  },
  {
    id: "r21-q4", textQ: "Quelle spécialité gastronomique est citée ?", text: ["Les frites","Le chocolat","Les crêpes"], textC: 0,
    img: ["frites","chocolat","crêpes"], imgC: 0,
    fillQ: "Les touristes veulent manger des _________.", fill: "frites"
  },
  {
    id: "r21-q5", textQ: "Combien de touristes viennent chaque année ?", text: ["5 millions","7 millions","10 millions"], textC: 1,
    img: ["5 M","7 M","10 M"], imgC: 1,
    fillQ: "_________ millions de touristes par an.", fill: "7", fillA: ["sept"]
  },
  {
    id: "r21-q6", textQ: "Que pensent les touristes de la population ?", text: ["Elle est sympathique","Elle est bruyante","Elle est réservée"], textC: 0,
    img: ["sympathique","bruyante","réservée"], imgC: 0,
    fillQ: "La population est _________.", fill: "sympathique"
  },
  {
    id: "r21-q7", textQ: "Que peut-on visiter en grand nombre ?", text: ["Des musées","Des plages","Des montagnes"], textC: 0,
    img: ["musées","plages","montagnes"], imgC: 0,
    fillQ: "On peut visiter beaucoup de _________.", fill: "musées", fillA: ["musees"]
  },
  {
    id: "r21-q8", textQ: "Où trouver de bonnes informations ?", text: ["Sur Internet","À la gare","Au musée"], textC: 0,
    img: ["internet","guichet","musée"], imgC: 0,
    fillQ: "Utilisez _________ pour trouver des informations.", fill: "Internet", fillA: ["internet"]
  },
  {
    id: "r21-q9", textQ: "Les visiteurs viennent-ils toute l'année ?", text: ["Oui","Non, seulement en été","Non, seulement en hiver"], textC: 0,
    img: ["toute l'année","été","hiver"], imgC: 0,
    fillQ: "Beaucoup de monde toute l'_________.", fill: "année", fillA: ["annee"]
  },
  {
    id: "r21-q10", textQ: "Quel type de musée est « un peu particulier » ?", text: ["Un musée de BD","Un musée de guerre","Un musée de mode"], textC: 0,
    img: ["BD","guerre","mode"], imgC: 0,
    fillQ: "Un musée un peu _________ : la bande dessinée.", fill: "particulier"
  }
]);

const RADIO_22 = buildPool("moyen", "radio-22", [
  {
    id: "r22-q1", textQ: "Combien de trains circulent au niveau national ?", text: ["1 sur 3","1 sur 5","2 sur 5"], textC: 1,
    img: ["1/3","1/5","2/5"], imgC: 1,
    fillQ: "Au niveau national, _________ train sur 5 circule.", fill: "1", fillA: ["un"]
  },
  {
    id: "r22-q2", textQ: "À quelle fréquence circule le métro parisien ?", text: ["Toutes les 15 minutes","Toutes les 30 minutes","Toutes les heures"], textC: 1,
    img: ["15 min","30 min","1 h"], imgC: 1,
    fillQ: "Métro toutes les _________ minutes.", fill: "30", fillA: ["trente"]
  },
  {
    id: "r22-q3", textQ: "Dans certaines villes, quel transport reste ouvert ?", text: ["Le tramway","Le bus","Le métro"], textC: 0,
    img: ["tramway","bus","métro"], imgC: 0,
    fillQ: "Le _________ sera l'unique transport ouvert.", fill: "tramway"
  },
  {
    id: "r22-q4", textQ: "Combien de jours la grève pourrait-elle encore durer ?", text: ["3 jours","5 jours","7 jours"], textC: 1,
    img: ["3 jours","5 jours","7 jours"], imgC: 1,
    fillQ: "La grève pourrait durer encore _________ jours.", fill: "5", fillA: ["cinq"]
  },
  {
    id: "r22-q5", textQ: "Quel site consulter pour les horaires ?", text: ["Site SNCF","Site RATP","Site Air France"], textC: 0,
    img: ["SNCF","RATP","avion"], imgC: 0,
    fillQ: "Consultez le site de la _________.", fill: "SNCF", fillA: ["sncf"]
  },
  {
    id: "r22-q6", textQ: "Quel problème affecte les transports ?", text: ["Une grève","Un accident","Des travaux"], textC: 0,
    img: ["grève","accident","travaux"], imgC: 0,
    fillQ: "La grève des transports _________.", fill: "continue"
  },
  {
    id: "r22-q7", textQ: "Certaines lignes de métro seront-elles fermées ?", text: ["Oui, toute la journée","Non","Seulement le matin"], textC: 0,
    img: ["oui","non","matin"], imgC: 0,
    fillQ: "Certaines lignes seront _________ toute la journée.", fill: "fermées", fillA: ["fermees"]
  },
  {
    id: "r22-q8", textQ: "À quelle fréquence circule le tramway dans certaines villes ?", text: ["Toutes les heures","Toutes les 30 minutes","Toutes les 15 minutes"], textC: 0,
    img: ["1 h","30 min","15 min"], imgC: 0,
    fillQ: "Tramway toutes les _________.", fill: "heures"
  },
  {
    id: "r22-q9", textQ: "Les transports en commun sont-ils annulés partout ?", text: ["Non, seulement dans certaines villes","Oui, partout","Non, nulle part"], textC: 0,
    img: ["certaines villes","partout","nulle part"], imgC: 0,
    fillQ: "Annulés dans certaines _________.", fill: "villes"
  },
  {
    id: "r22-q10", textQ: "Les négociations entre le gouvernement et les syndicats sont-elles faciles ?", text: ["Non, elles sont difficiles","Oui, faciles","Elles sont terminées"], textC: 0,
    img: ["difficiles","faciles","terminées"], imgC: 0,
    fillQ: "Les négociations sont _________.", fill: "difficiles"
  }
]);

const RADIO_23 = buildPool("moyen", "radio-23", [
  {
    id: "r23-q1", textQ: "Quel type de site internet est présenté ?", text: ["Un site de voyages","Un site de musique","Un site de sport"], textC: 0,
    img: ["voyages","musique","sport"], imgC: 0,
    fillQ: "Site internet de _________.", fill: "voyages"
  },
  {
    id: "r23-q2", textQ: "Jusqu'à quand les promotions sont-elles valables ?", text: ["Le 20 mai","Le 15 mars","Le 17 avril"], textC: 0,
    img: ["20/05","15/03","17/04"], imgC: 0,
    fillQ: "Promotions jusqu'au _________ mai.", fill: "20", fillA: ["vingt"]
  },
  {
    id: "r23-q3", textQ: "Quelle réduction pour 3 jours dans un hôtel ?", text: ["30 %","40 %","50 %"], textC: 1,
    img: ["30 %","40 %","50 %"], imgC: 1,
    fillQ: "_________ % de réduction pour 3 jours.", fill: "40", fillA: ["quarante"]
  },
  {
    id: "r23-q4", textQ: "Combien de jours faut-il passer pour cette offre hôtel ?", text: ["2 jours","3 jours","7 jours"], textC: 1,
    img: ["2 jours","3 jours","7 jours"], imgC: 1,
    fillQ: "Offre pour _________ jours.", fill: "3", fillA: ["trois"]
  },
  {
    id: "r23-q5", textQ: "Quel type de voyage peut-on gagner ?", text: ["Une semaine sur une île","Un week-end en ville","Un jour à la mer"], textC: 0,
    img: ["semaine île","week-end ville","jour mer"], imgC: 0,
    fillQ: "Gagner un voyage d'une _________.", fill: "semaine"
  },
  {
    id: "r23-q6", textQ: "Avant quelle date faut-il appeler pour participer ?", text: ["Avant le 15 mars","Avant le 20 mai","Avant le 17 avril"], textC: 0,
    img: ["15/03","20/05","17/04"], imgC: 0,
    fillQ: "Appeler avant le _________ mars.", fill: "15", fillA: ["quinze"]
  },
  {
    id: "r23-q7", textQ: "Quel type de destinations propose le site ?", text: ["Autour de la mer","À la montagne","En ville"], textC: 0,
    img: ["plage","montagne","ville"], imgC: 0,
    fillQ: "Voyager autour de la _________.", fill: "mer"
  },
  {
    id: "r23-q8", textQ: "Les promotions concernent-elles les hôtels ?", text: ["Oui","Non, seulement les vols","Non, seulement les trains"], textC: 0,
    img: ["hôtels","vols","trains"], imgC: 0,
    fillQ: "Promotions sur les _________.", fill: "hôtels", fillA: ["hotels"]
  },
  {
    id: "r23-q9", textQ: "Comment participer au concours ?", text: ["En appelant","En écrivant un courrier","En allant en agence"], textC: 0,
    img: ["appeler","courrier","agence"], imgC: 0,
    fillQ: "Il faut _________ pour participer.", fill: "appeler"
  },
  {
    id: "r23-q10", textQ: "L'émission parle de quoi aujourd'hui ?", text: ["Des vacances","Du sport","De la politique"], textC: 0,
    img: ["vacances","sport","politique"], imgC: 0,
    fillQ: "Émission consacrée aux _________.", fill: "vacances"
  }
]);

const RADIO_24 = buildPool("moyen", "radio-24", [
  {
    id: "r24-q1", textQ: "Quelle est la profession de l'invité ?", text: ["Chanteur","Écrivain","Peintre"], textC: 0,
    img: ["chanteur","écrivain","peintre"], imgC: 0,
    fillQ: "L'invité est un _________.", fill: "chanteur"
  },
  {
    id: "r24-q2", textQ: "Combien de concerts a-t-il faits ?", text: ["8","12","20"], textC: 1,
    img: ["8","12","20"], imgC: 1,
    fillQ: "Il a fait _________ concerts.", fill: "12", fillA: ["douze"]
  },
  {
    id: "r24-q3", textQ: "Combien de temps a duré la tournée ?", text: ["1 mois","2 mois","3 mois"], textC: 1,
    img: ["1 mois","2 mois","3 mois"], imgC: 1,
    fillQ: "Tournée pendant _________ mois.", fill: "2", fillA: ["deux"]
  },
  {
    id: "r24-q4", textQ: "Combien de personnes étaient au concert mémorable ?", text: ["Environ 100","Environ 300","Environ 500"], textC: 1,
    img: ["100","300","500"], imgC: 1,
    fillQ: "Environ _________ personnes.", fill: "300", fillA: ["trois cents"]
  },
  {
    id: "r24-q5", textQ: "Qu'ont fait les spectateurs pendant le concert ?", text: ["Ils ont chanté avec lui","Ils sont restés silencieux","Ils sont partis"], textC: 0,
    img: ["chanté","silencieux","partis"], imgC: 0,
    fillQ: "Ils ont tous _________ avec lui.", fill: "chanté", fillA: ["chante"]
  },
  {
    id: "r24-q6", textQ: "Dans combien de mois le CD sera-t-il prêt ?", text: ["Dans 1-2 mois","Dans 3-4 mois","Dans 6 mois"], textC: 1,
    img: ["1-2 mois","3-4 mois","6 mois"], imgC: 1,
    fillQ: "CD prêt dans 3-_________ mois.", fill: "4", fillA: ["quatre"]
  },
  {
    id: "r24-q7", textQ: "Que prépare-t-il maintenant ?", text: ["Un nouvel album","Une tournée","Un livre"], textC: 0,
    img: ["album","tournée","livre"], imgC: 0,
    fillQ: "Il prépare un nouvel _________.", fill: "album"
  },
  {
    id: "r24-q8", textQ: "Les spectateurs connaissaient-ils les chansons ?", text: ["Oui, par cœur","Non","Seulement quelques-unes"], textC: 0,
    img: ["par cœur","non","quelques"], imgC: 0,
    fillQ: "Ils connaissaient les chansons par _________.", fill: "cœur", fillA: ["coeur"]
  },
  {
    id: "r24-q9", textQ: "Où a-t-il fait des concerts ?", text: ["Dans plusieurs départements","Dans un seul pays","En ligne"], textC: 0,
    img: ["plusieurs lieux","un pays","en ligne"], imgC: 0,
    fillQ: "Concerts dans différents _________.", fill: "départements", fillA: ["departements"]
  },
  {
    id: "r24-q10", textQ: "Comment était l'ambiance du concert mémorable ?", text: ["Magique","Triste","Ennuyeuse"], textC: 0,
    img: ["magique","triste","ennuyeuse"], imgC: 0,
    fillQ: "C'était _________.", fill: "magique"
  }
]);

const RADIO_25 = buildPool("moyen", "radio-25", [
  {
    id: "r25-q1", textQ: "Quel film est annoncé ?", text: ["Astérix et Obélix au service de sa Majesté","La maison de papier","La roue tourne"], textC: 0,
    img: ["film BD","série TV","comédie"], imgC: 0,
    fillQ: "Film : Astérix et Obélix au service de sa _________.", fill: "Majesté", fillA: ["majeste"]
  },
  {
    id: "r25-q2", textQ: "Quelle est la date de sortie ?", text: ["Le 17 octobre","Le 17 avril","Le 20 juillet"], textC: 0,
    img: ["17/10","17/04","20/07"], imgC: 0,
    fillQ: "Sortie le _________ octobre.", fill: "17", fillA: ["dix-sept"]
  },
  {
    id: "r25-q3", textQ: "Quel village les héros vont-ils aider ?", text: ["Un village en Britannia","Un village gaulois","Un village romain"], textC: 0,
    img: ["village étranger","village gaulois","village romain"], imgC: 0,
    fillQ: "Ils aident un village de _________.", fill: "Britannia", fillA: ["britannia"]
  },
  {
    id: "r25-q4", textQ: "Contre qui vont-ils combattre ?", text: ["Les Romains","Les Vikings","Les Gaulois"], textC: 0,
    img: ["soldats romains","vikings","gaulois"], imgC: 0,
    fillQ: "Ils vont combattre les _________.", fill: "Romains", fillA: ["romains"]
  },
  {
    id: "r25-q5", textQ: "Combien de places peut-on gagner ?", text: ["Une place","Deux places","Quatre places"], textC: 1,
    img: ["1 billet","2 billets","4 billets"], imgC: 1,
    fillQ: "Concours pour gagner _________ places.", fill: "deux", fillA: ["2"]
  },
  {
    id: "r25-q6", textQ: "Quelle question faut-il répondre pour gagner ?", text: ["La date de sortie de la première BD Astérix","Le nom du réalisateur","Le prix du billet"], textC: 0,
    img: ["date 1re BD","réalisateur","prix billet"], imgC: 0,
    fillQ: "Dire la date de sortie de la première _________ d'Astérix.", fill: "bande dessinée", fillA: ["BD"]
  },
  {
    id: "r25-q7", textQ: "Quelle est la quelle adaptation cinéma des aventures ?", text: ["La quatrième","La première","La dixième"], textC: 0,
    img: ["4e","1re","10e"], imgC: 0,
    fillQ: "C'est la _________ adaptation au cinéma.", fill: "quatrième", fillA: ["quatrieme","4e"]
  },
  {
    id: "r25-q8", textQ: "Avec quoi combattent-ils les Romains ?", text: ["La potion magique","Des épées seulement","La ruse seulement"], textC: 0,
    img: ["potion magique","épées","ruse"], imgC: 0,
    fillQ: "Ils combattent à l'aide de la potion _________.", fill: "magique"
  },
  {
    id: "r25-q9", textQ: "Comment est décrit le film ?", text: ["Divertissant et drôle","Triste et lent","Effrayant"], textC: 0,
    img: ["divertissant","triste","effrayant"], imgC: 0,
    fillQ: "Le film est divertissant et plein d'_________.", fill: "humour"
  },
  {
    id: "r25-q10", textQ: "Le film contient-il de l'action ?", text: ["Oui","Non","On ne sait pas"], textC: 0,
    img: ["oui","non","inconnu"], imgC: 0,
    fillQ: "Le film est plein d'_________ et d'action.", fill: "humour"
  }
]);

const CONVERSATION_38 = buildPool("moyen", "conversation-38", [
  {
    id: "c38-q1", textQ: "Dialogue 1 — À quelle heure part le train pour Bordeaux ?", text: ["À 15h30","À 15h50","À 16h"], textC: 1,
    img: ["15h30","15h50","16h"], imgC: 1,
    fillQ: "Le train part à ___ h 50.", fill: "15"
  },
  {
    id: "c38-q2", textQ: "Dialogue 1 — Sur quelle voie part le train ?", text: ["Voie 1","Voie 3","Voie 5"], textC: 1,
    img: ["1","3","5"], imgC: 1,
    fillQ: "Départ en voie numéro ___.", fill: "3"
  },
  {
    id: "c38-q3", textQ: "Dialogue 2 — Où Marc doit-il aller ?", text: ["À la poste","Au cinéma","Chez le médecin"], textC: 0,
    img: ["Poste","Cinéma","Médecin"], imgC: 0,
    fillQ: "Marc doit aller à la _________.", fill: "poste"
  },
  {
    id: "c38-q4", textQ: "Dialogue 3 — Qui appelle ?", text: ["Le cabinet du docteur Robichet","Le Dr Molaire","Formation ABC"], textC: 0,
    img: ["Dr Robichet","Dr Molaire","Formation ABC"], imgC: 0,
    fillQ: "Appel du docteur _________.", fill: "Robichet",
    fillA: ["robichet"],
  },
  {
    id: "c38-q5", textQ: "Dialogue 3 — Combien de minutes avant faut-il arriver ?", text: ["5 minutes","10 minutes","15 minutes"], textC: 2,
    img: ["5 min","10 min","15 min"], imgC: 2,
    fillQ: "Arriver ___ minutes avant.", fill: "15"
  },
  {
    id: "c38-q6", textQ: "Dialogue 4 — Pierre peut-il venir au cinéma ?", text: ["Oui","Non","Peut-être"], textC: 1,
    img: ["Oui","Non","Peut-être"], imgC: 1,
    fillQ: "Pierre ne pourra pas _________.", fill: "venir"
  },
  {
    id: "c38-q7", textQ: "Dialogue 4 — Qui propose le cinéma ?", text: ["Marie","Pierre","Marc"], textC: 0,
    img: ["Marie","Pierre","Marc"], imgC: 0,
    fillQ: "_________ propose le cinéma.", fill: "Marie",
    fillA: ["marie"],
  }
]);

const CONVERSATION_39 = buildPool("moyen", "conversation-39", [
  {
    id: "c39-q1", textQ: "Dialogue 1 — Quelle exposition est proposée ?", text: ["Exposition musicale","Exposition de peintures","Exposition photo"], textC: 0,
    img: ["Musicale","Peintures","Photo"], imgC: 0,
    fillQ: "Exposition _________ ce week-end.", fill: "musicale"
  },
  {
    id: "c39-q2", textQ: "Dialogue 1 — Où a lieu l'exposition ?", text: ["À la porte de la Villette","Au musée Monet","À l'Olympia"], textC: 0,
    img: ["Porte Villette","Monet","Olympia"], imgC: 0,
    fillQ: "C'est à la porte de la _________.", fill: "Villette",
    fillA: ["villette"],
  },
  {
    id: "c39-q3", textQ: "Dialogue 2 — Thibault est-il allé travailler ?", text: ["Oui","Non","On ne sait pas"], textC: 1,
    img: ["Oui","Non","?"], imgC: 1,
    fillQ: "Thibault n'est pas allé au _________.", fill: "travail"
  },
  {
    id: "c39-q4", textQ: "Dialogue 2 — Pourquoi Thibault est-il absent ?", text: ["Il est malade","Il est en vacances","Il a un rendez-vous"], textC: 0,
    img: ["Malade","Vacances","RDV"], imgC: 0,
    fillQ: "Il est probablement _________.", fill: "malade"
  },
  {
    id: "c39-q5", textQ: "Dialogue 3 — Que conseille Stéphanie ?", text: ["Appeler le médecin","Aller à l'hôpital","Prendre des médicaments"], textC: 0,
    img: ["Appeler médecin","Hôpital","Médicaments"], imgC: 0,
    fillQ: "Stéphanie conseille d'appeler le _________.", fill: "médecin",
    fillA: ["medecin"],
  },
  {
    id: "c39-q6", textQ: "Dialogue 4 — Quel âge a la nouvelle voisine ?", text: ["Environ 30 ans","Environ 40 ans","Environ 50 ans"], textC: 1,
    img: ["30 ans","40 ans","50 ans"], imgC: 1,
    fillQ: "Elle doit avoir ___ ans.", fill: "40"
  },
  {
    id: "c39-q7", textQ: "Dialogue 4 — Comment est décrite la voisine ?", text: ["Grande, mince et gentille","Petite et timide","Jeune et sportive"], textC: 0,
    img: ["Grande/mince","Petite/timide","Jeune/sportive"], imgC: 0,
    fillQ: "Elle est grande, mince et _________.", fill: "gentille"
  }
]);

const CONVERSATION_40 = buildPool("moyen", "conversation-40", [
  {
    id: "c40-q1", textQ: "Dialogue 1 — Que commande la cliente ?", text: ["Plat du jour, jus d'orange et tiramisu","Sandwich et eau","Café gourmand"], textC: 0,
    img: ["Plat+jus+tiramisu","Sandwich+eau","Café gourmand"], imgC: 0,
    fillQ: "Elle prend le plat du jour et un _________.", fill: "tiramisu"
  },
  {
    id: "c40-q2", textQ: "Dialogue 2 — Quel sport le père aime-t-il ?", text: ["Le rugby","Le football","Le tennis"], textC: 0,
    img: ["Rugby","Football","Tennis"], imgC: 0,
    fillQ: "Le père adore le _________.", fill: "rugby"
  },
  {
    id: "c40-q3", textQ: "Dialogue 2 — Quel cadeau Martin suggère-t-il ?", text: ["Des tickets pour un match","Un livre","Un maillot"], textC: 0,
    img: ["Tickets match","Livre","Maillot"], imgC: 0,
    fillQ: "Acheter des tickets pour un _________.", fill: "match"
  },
  {
    id: "c40-q4", textQ: "Dialogue 3 — Qui doit s'occuper du chat ?", text: ["Justine","Son ami","Le voisin"], textC: 1,
    img: ["Justine","L'ami","Voisin"], imgC: 1,
    fillQ: "L'ami doit s'occuper du _________.", fill: "chat"
  },
  {
    id: "c40-q5", textQ: "Dialogue 3 — Que faut-il faire pour le chat ?", text: ["Le nourrir et jouer avec lui","Le promener","Le laver"], textC: 0,
    img: ["Nourrir/jouer","Promener","Laver"], imgC: 0,
    fillQ: "Lui donner à manger et _________ avec lui.", fill: "jouer"
  },
  {
    id: "c40-q6", textQ: "Dialogue 4 — Quel concours Clara a-t-elle réussi ?", text: ["Concours de professeur","Concours de médecin","Concours de musique"], textC: 0,
    img: ["Professeur","Médecin","Musique"], imgC: 0,
    fillQ: "Elle a réussi son concours de _________.", fill: "professeur"
  },
  {
    id: "c40-q7", textQ: "Dialogue 4 — Comment se sent Clara ?", text: ["Heureuse","Triste","Inquiète"], textC: 0,
    img: ["Heureuse","Triste","Inquiète"], imgC: 0,
    fillQ: "Clara a l'air tout _________.", fill: "heureux",
    fillA: ["heureuse"],
  }
]);

const CONVERSATION_41 = buildPool("moyen", "conversation-41", [
  {
    id: "c41-q1", textQ: "Dialogue 1 — Quel bus faut-il prendre ?", text: ["Le bus 171","Le bus 160","Le bus 4"], textC: 0,
    img: ["171","160","4"], imgC: 0,
    fillQ: "Prendre le bus ___.", fill: "171"
  },
  {
    id: "c41-q2", textQ: "Dialogue 1 — À quel arrêt descendre ?", text: ["Gabriel Péri","Nouveau Cinéma","Porte de la Villette"], textC: 0,
    img: ["Gabriel Péri","Nouveau Cinéma","Porte Villette"], imgC: 0,
    fillQ: "Descendre à l'arrêt Gabriel _________.", fill: "Péri",
    fillA: ["Peri"],
  },
  {
    id: "c41-q3", textQ: "Dialogue 2 — Où Max va-t-il bientôt ?", text: ["En vacances","Au travail","Au cinéma"], textC: 0,
    img: ["Vacances","Travail","Cinéma"], imgC: 0,
    fillQ: "Max part bientôt en _________.", fill: "vacances"
  },
  {
    id: "c41-q4", textQ: "Dialogue 3 — Pourquoi l'ami ne peut-il pas aller au marché ?", text: ["Il a un entretien","Il est malade","Il travaille"], textC: 0,
    img: ["Entretien","Malade","Travail"], imgC: 0,
    fillQ: "Il a un _________ d'embauche.", fill: "entretien"
  },
  {
    id: "c41-q5", textQ: "Dialogue 4 — Comment étaient les vacances ?", text: ["Pas très bien","Formidables","Correctes"], textC: 0,
    img: ["Pas bien","Formidables","Correctes"], imgC: 0,
    fillQ: "Les vacances n'étaient pas très _________.", fill: "bien"
  },
  {
    id: "c41-q6", textQ: "Dialogue 4 — Quel temps a-t-il fait ?", text: ["Il a plu 2 semaines","Il a fait beau","Il a neigé"], textC: 0,
    img: ["Pluie 2 sem.","Beau","Neige"], imgC: 0,
    fillQ: "Il a plu pendant ___ semaines.", fill: "2"
  },
  {
    id: "c41-q7", textQ: "Dialogue 4 — Qu'est-ce qui n'était pas agréable ?", text: ["L'hôtel","La plage","Le restaurant"], textC: 0,
    img: ["Hôtel","Plage","Restaurant"], imgC: 0,
    fillQ: "L'_________ n'était pas agréable.", fill: "hôtel",
    fillA: ["hotel"],
  }
]);

const CONVERSATION_42 = buildPool("moyen", "conversation-42", [
  {
    id: "c42-q1", textQ: "Dialogue 1 — Que commande la personne ?", text: ["Sandwich fromage, eau et tarte aux fraises","Plat du jour et café","Salade et jus"], textC: 0,
    img: ["Sandwich+eau+tarte","Plat+café","Salade+jus"], imgC: 0,
    fillQ: "Elle prend aussi une tarte aux _________.", fill: "fraises"
  },
  {
    id: "c42-q2", textQ: "Dialogue 2 — Où propose-t-on d'aller ?", text: ["Jardin du Luxembourg et cinéma","Parc et restaurant","Musée et théâtre"], textC: 0,
    img: ["Luxembourg+cinéma","Parc+resto","Musée+théâtre"], imgC: 0,
    fillQ: "Aller au jardin du _________ et au cinéma.", fill: "Luxembourg",
    fillA: ["luxembourg"],
  },
  {
    id: "c42-q3", textQ: "Dialogue 3 — Qu'a-t-il pensé du livre ?", text: ["Il ne l'a pas aimé","Il l'a adoré","Il ne l'a pas fini"], textC: 0,
    img: ["Pas aimé","Adoré","Pas fini"], imgC: 0,
    fillQ: "Il n'a pas du tout _________ le livre.", fill: "aimé",
    fillA: ["aime"],
  },
  {
    id: "c42-q4", textQ: "Dialogue 3 — Quel genre préfère-t-il ?", text: ["Les histoires policières","Les histoires d'amour","Les romans historiques"], textC: 0,
    img: ["Policier","Amour","Historique"], imgC: 0,
    fillQ: "Il préfère les histoires _________.", fill: "policières",
    fillA: ["policieres"],
  },
  {
    id: "c42-q5", textQ: "Dialogue 4 — À quelle heure ouvrent les portes ?", text: ["À 19h30","À 20h","À 21h"], textC: 0,
    img: ["19h30","20h","21h"], imgC: 0,
    fillQ: "Les portes ouvrent à ___ h 30.", fill: "19"
  },
  {
    id: "c42-q6", textQ: "Dialogue 4 — À quelle heure commence le concert ?", text: ["À 20h","À 21h","À 22h"], textC: 1,
    img: ["20h","21h","22h"], imgC: 1,
    fillQ: "Le concert commence à ___ h.", fill: "21"
  },
  {
    id: "c42-q7", textQ: "Dialogue 4 — Qui oublie toujours tout ?", text: ["L'ami qui pose la question","Sylvie","Personne"], textC: 0,
    img: ["L'ami","Sylvie","Personne"], imgC: 0,
    fillQ: "Tu oublies toujours _________, toi.", fill: "tout"
  }
]);

const CONVERSATION_43 = buildPool("moyen", "conversation-43", [
  {
    id: "c43-q1", textQ: "Dialogue 1 — Quel est le problème au distributeur ?", text: ["Problème technique","Pas d'argent","Carte bloquée"], textC: 0,
    img: ["Technique","Pas argent","Carte bloquée"], imgC: 0,
    fillQ: "Le distributeur a un problème _________.", fill: "technique"
  },
  {
    id: "c43-q2", textQ: "Dialogue 1 — Quelle solution est proposée ?", text: ["Utiliser celui à l'intérieur de la banque","Attendre demain","Aller à la poste"], textC: 0,
    img: ["Intérieur banque","Demain","Poste"], imgC: 0,
    fillQ: "Utiliser le distributeur à l'intérieur de la _________.", fill: "banque"
  },
  {
    id: "c43-q3", textQ: "Dialogue 2 — À quelle heure ouvre la banque ?", text: ["À 13h","À 13h30","À 14h"], textC: 1,
    img: ["13h","13h30","14h"], imgC: 1,
    fillQ: "La banque ouvre à ___ h 30.", fill: "13"
  },
  {
    id: "c43-q4", textQ: "Dialogue 3 — Que cherche la personne ?", text: ["La mairie de Sèvres","La bibliothèque","La gare"], textC: 0,
    img: ["Mairie Sèvres","Bibliothèque","Gare"], imgC: 0,
    fillQ: "Elle cherche la mairie de _________.", fill: "Sèvres",
    fillA: ["Sevres"],
  },
  {
    id: "c43-q5", textQ: "Dialogue 3 — L'homme interrogé connaît-il le chemin ?", text: ["Non, il n'est pas d'ici","Oui, il indique le chemin","Oui, il l'accompagne"], textC: 0,
    img: ["Non","Oui chemin","Oui accompagne"], imgC: 0,
    fillQ: "Il n'est pas _________ ici.", fill: "d'"
  },
  {
    id: "c43-q6", textQ: "Dialogue 4 — Qu'est-ce que l'homme propose ?", text: ["Porter les sacs","Appeler un taxi","Ouvrir la porte"], textC: 0,
    img: ["Porter sacs","Taxi","Ouvrir porte"], imgC: 0,
    fillQ: "Il propose d'aider à _________ les sacs.", fill: "porter"
  },
  {
    id: "c43-q7", textQ: "Dialogue 4 — Comment sont les sacs ?", text: ["Très lourds","Légers","Petits"], textC: 0,
    img: ["Lourds","Légers","Petits"], imgC: 0,
    fillQ: "Les sacs sont vraiment très _________.", fill: "lourds"
  }
]);

const CONVERSATION_44 = buildPool("moyen", "conversation-44", [
  {
    id: "c44-q1", textQ: "Dialogue 1 — Que commande la cliente ?", text: ["Un café gourmand","Un café et un croissant","Un thé"], textC: 0,
    img: ["Café gourmand","Café+croissant","Thé"], imgC: 0,
    fillQ: "Elle voudrait un café _________.", fill: "gourmand"
  },
  {
    id: "c44-q2", textQ: "Dialogue 1 — Que demande-t-elle en plus ?", text: ["Un verre d'eau","Un jus d'orange","Un dessert"], textC: 0,
    img: ["Eau","Jus orange","Dessert"], imgC: 0,
    fillQ: "Elle veut aussi un verre d'_________.", fill: "eau"
  },
  {
    id: "c44-q3", textQ: "Dialogue 2 — Quelle heure est-il ?", text: ["13h45","14h","14h15"], textC: 0,
    img: ["13h45","14h","14h15"], imgC: 0,
    fillQ: "Il est deux heures _________ le quart.", fill: "moins"
  },
  {
    id: "c44-q4", textQ: "Dialogue 2 — Où doit-il retourner ?", text: ["Au bureau","À la maison","Au restaurant"], textC: 0,
    img: ["Bureau","Maison","Restaurant"], imgC: 0,
    fillQ: "Il doit retourner au _________.", fill: "bureau"
  },
  {
    id: "c44-q5", textQ: "Dialogue 3 — Quel film est proposé ?", text: ["Les infidèles","Amour","Astérix"], textC: 0,
    img: ["Les infidèles","Amour","Astérix"], imgC: 0,
    fillQ: "Film proposé : Les _________.", fill: "infidèles",
    fillA: ["infideles"],
  },
  {
    id: "c44-q6", textQ: "Dialogue 3 — Quelle alternative est choisie ?", text: ["Aller au théâtre","Rester chez soi","Aller au restaurant"], textC: 0,
    img: ["Théâtre","Maison","Restaurant"], imgC: 0,
    fillQ: "Ils décident d'aller au _________.", fill: "théâtre",
    fillA: ["theatre"],
  },
  {
    id: "c44-q7", textQ: "Dialogue 4 — Quelle ligne de métro au départ ?", text: ["Ligne 10","Ligne 5","Ligne 9"], textC: 1,
    img: ["Ligne 10","Ligne 5","Ligne 9"], imgC: 1,
    fillQ: "Finalement, prendre la ligne ___.", fill: "5"
  }
]);

const CONVERSATION_45 = buildPool("moyen", "conversation-45", [
  {
    id: "c45-q1", textQ: "Dialogue 1 — Qui Max présente-t-il ?", text: ["Son frère Yannick","Sa sœur Julie","Son cousin"], textC: 0,
    img: ["Yannick","Julie","Cousin"], imgC: 0,
    fillQ: "Max présente son frère _________.", fill: "Yannick",
    fillA: ["yannick"],
  },
  {
    id: "c45-q2", textQ: "Dialogue 2 — À quelle heure est le rendez-vous ?", text: ["À 20 h","À 21 h","À 22 h"], textC: 0,
    img: ["20h","21h","22h"], imgC: 0,
    fillQ: "Rendez-vous à ___ heures.", fill: "20"
  },
  {
    id: "c45-q3", textQ: "Dialogue 2 — À quelle heure commence le concert ?", text: ["À 20 h","À 21 h","À 22 h"], textC: 1,
    img: ["20h","21h","22h"], imgC: 1,
    fillQ: "Le concert commence à ___ heures.", fill: "21"
  },
  {
    id: "c45-q4", textQ: "Dialogue 3 — Quand Valérie doit-elle garder l'enfant ?", text: ["Samedi soir","Vendredi soir","Dimanche matin"], textC: 0,
    img: ["Samedi soir","Vendredi soir","Dimanche"], imgC: 0,
    fillQ: "Garder le fils _________ soir.", fill: "samedi"
  },
  {
    id: "c45-q5", textQ: "Dialogue 4 — Quand est la séance de cinéma ?", text: ["Vendredi soir à 21 h","Samedi à 20 h","Jeudi à 19 h"], textC: 0,
    img: ["Ven. 21h","Sam. 20h","Jeu. 19h"], imgC: 0,
    fillQ: "Séance vendredi soir à ___ h.", fill: "21"
  },
  {
    id: "c45-q6", textQ: "Dialogue 4 — L'ami peut-il venir vendredi ?", text: ["Non, il est déjà pris","Oui","Oui mais en retard"], textC: 0,
    img: ["Non","Oui","Oui tard"], imgC: 0,
    fillQ: "Il est déjà _________ vendredi.", fill: "pris"
  },
  {
    id: "c45-q7", textQ: "Dialogue 1 — Qui parle beaucoup de Yannick à Max ?", text: ["Julie","Lucie","Valérie"], textC: 0,
    img: ["Julie","Lucie","Valérie"], imgC: 0,
    fillQ: "Julie a beaucoup parlé de _________ à Max.", fill: "Yannick",
    fillA: ["yannick"],
  }
]);

const CONVERSATION_46 = buildPool("moyen", "conversation-46", [
  {
    id: "c46-q1", textQ: "Dialogue 1 — Combien de personnes à la fête ?", text: ["10","20","30"], textC: 1,
    img: ["10","20","30"], imgC: 1,
    fillQ: "Ils étaient ___ personnes.", fill: "20"
  },
  {
    id: "c46-q2", textQ: "Dialogue 1 — Qu'ont-ils fait toute la nuit ?", text: ["Ils ont dansé","Ils ont mangé","Ils ont chanté"], textC: 0,
    img: ["Dansé","Mangé","Chanté"], imgC: 0,
    fillQ: "Ils ont _________ toute la nuit.", fill: "dansé",
    fillA: ["danse"],
  },
  {
    id: "c46-q3", textQ: "Dialogue 2 — Pourquoi Hugo ne peut-il pas venir ?", text: ["C'est l'anniversaire de sa mère","Il est malade","Il travaille"], textC: 0,
    img: ["Anniv. mère","Malade","Travail"], imgC: 0,
    fillQ: "C'est l'anniversaire de sa _________.", fill: "mère",
    fillA: ["mere"],
  },
  {
    id: "c46-q4", textQ: "Dialogue 2 — Quel sport est mentionné ?", text: ["Le basket","Le rugby","Le tennis"], textC: 0,
    img: ["Basket","Rugby","Tennis"], imgC: 0,
    fillQ: "Match de _________ samedi.", fill: "basket"
  },
  {
    id: "c46-q5", textQ: "Dialogue 3 — Où vont-ils se marier ?", text: ["À Paris","À Lyon","À Marseille"], textC: 0,
    img: ["Paris","Lyon","Marseille"], imgC: 0,
    fillQ: "Mariage à _________.", fill: "Paris",
    fillA: ["paris"],
  },
  {
    id: "c46-q6", textQ: "Dialogue 4 — Pourquoi Sophie va chez le médecin ?", text: ["Pour un vaccin","Parce qu'elle est gravement malade","Pour une ordonnance"], textC: 0,
    img: ["Vaccin","Malade","Ordonnance"], imgC: 0,
    fillQ: "C'est pour un _________ seulement.", fill: "vaccin"
  },
  {
    id: "c46-q7", textQ: "Dialogue 3 — Qui a demandé en mariage ?", text: ["Paul","Marc","Hugo"], textC: 0,
    img: ["Paul","Marc","Hugo"], imgC: 0,
    fillQ: "_________ a demandé en mariage.", fill: "Paul",
    fillA: ["paul"],
  }
]);

const CONVERSATION_47 = buildPool("moyen", "conversation-47", [
  {
    id: "c47-q1", textQ: "Dialogue 1 — Pour quoi félicite-t-on Leïla ?", text: ["Pour son mariage","Pour son travail","Pour ses vacances"], textC: 0,
    img: ["Mariage","Travail","Vacances"], imgC: 0,
    fillQ: "Félicitations pour ton _________.", fill: "mariage"
  },
  {
    id: "c47-q2", textQ: "Dialogue 2 — Pourquoi la veste est-elle sale ?", text: ["Quelqu'un l'a mise pour aller au jardin","Elle est tombée dans la boue","Elle est vieille"], textC: 0,
    img: ["Jardin","Boue","Vieille"], imgC: 0,
    fillQ: "La veste a été mise pour le _________.", fill: "jardin"
  },
  {
    id: "c47-q3", textQ: "Dialogue 3 — Quel type de film Julien veut-il voir ?", text: ["Action ou comédie","Romance","Documentaire"], textC: 0,
    img: ["Action/comédie","Romance","Documentaire"], imgC: 0,
    fillQ: "Un film d'action ou une _________.", fill: "comédie",
    fillA: ["comedie"],
  },
  {
    id: "c47-q4", textQ: "Dialogue 4 — Quel restaurant est conseillé ?", text: ["La crêperie La Chandeleur","Le restaurant végétarien","La pizzeria Giovanni"], textC: 0,
    img: ["La Chandeleur","Végétarien","Giovanni"], imgC: 0,
    fillQ: "Crêperie « La _________ » à Lisieux.", fill: "Chandeleur",
    fillA: ["chandeleur"],
  },
  {
    id: "c47-q5", textQ: "Dialogue 4 — Dans quelle région est le restaurant ?", text: ["En Normandie","En Bretagne","En Provence"], textC: 0,
    img: ["Normandie","Bretagne","Provence"], imgC: 0,
    fillQ: "Meilleures crêpes de _________.", fill: "Normandie",
    fillA: ["normandie"],
  },
  {
    id: "c47-q6", textQ: "Dialogue 1 — Comment était la réception ?", text: ["Très belle","Moyenne","Décevante"], textC: 0,
    img: ["Très belle","Moyenne","Décevante"], imgC: 0,
    fillQ: "C'était une très belle _________.", fill: "réception",
    fillA: ["reception"],
  },
  {
    id: "c47-q7", textQ: "Dialogue 2 — Qui s'excuse ?", text: ["Celle qui a mis la veste","Leïla","Julien"], textC: 0,
    img: ["Celle veste","Leïla","Julien"], imgC: 0,
    fillQ: "Elle est vraiment _________.", fill: "désolée",
    fillA: ["desolee"],
  }
]);

const CONVERSATION_48 = buildPool("moyen", "conversation-48", [
  {
    id: "c48-q1", textQ: "Dialogue 1 — Combien coûte le pantalon ?", text: ["19 €","29 €","39 €"], textC: 0,
    img: ["19 €","29 €","39 €"], imgC: 0,
    fillQ: "Pantalon en soldes pour ___ €.", fill: "19"
  },
  {
    id: "c48-q2", textQ: "Dialogue 1 — Où a-t-il été acheté ?", text: ["Au centre commercial","En ligne","Au marché"], textC: 0,
    img: ["Centre commercial","En ligne","Marché"], imgC: 0,
    fillQ: "Acheté au centre _________.", fill: "commercial"
  },
  {
    id: "c48-q3", textQ: "Dialogue 2 — Quel type de restaurant est proposé ?", text: ["Végétarien","Italien","Japonais"], textC: 0,
    img: ["Végétarien","Italien","Japonais"], imgC: 0,
    fillQ: "Restaurant de plats _________.", fill: "végétariens",
    fillA: ["vegetariens"],
  },
  {
    id: "c48-q4", textQ: "Dialogue 3 — Pour qui est le cadeau ?", text: ["Le petit cousin","La mère","Le père"], textC: 0,
    img: ["Petit cousin","Mère","Père"], imgC: 0,
    fillQ: "Cadeau pour le petit _________.", fill: "cousin"
  },
  {
    id: "c48-q5", textQ: "Dialogue 4 — La cliente a-t-elle une carte de fidélité ?", text: ["Non","Oui","Elle l'a oubliée"], textC: 0,
    img: ["Non","Oui","Oubliée"], imgC: 0,
    fillQ: "Elle n'a pas de carte de _________.", fill: "fidélité",
    fillA: ["fidelite"],
  },
  {
    id: "c48-q6", textQ: "Dialogue 4 — La cliente veut-elle faire la carte ?", text: ["Non, ça ne l'intéresse pas","Oui","Elle hésite"], textC: 0,
    img: ["Non","Oui","Hésite"], imgC: 0,
    fillQ: "Ça ne l'_________ pas.", fill: "intéresse",
    fillA: ["interesse"],
  },
  {
    id: "c48-q7", textQ: "Dialogue 3 — Qui a aidé à trouver le cadeau ?", text: ["Henria","Samia","Caroline"], textC: 0,
    img: ["Henria","Samia","Caroline"], imgC: 0,
    fillQ: "_________ a aidé à trouver le cadeau.", fill: "Henria",
    fillA: ["henria"],
  }
]);

const CONVERSATION_49 = buildPool("moyen", "conversation-49", [
  {
    id: "c49-q1", textQ: "Dialogue 1 — Quelle est la date de l'examen ?", text: ["Mercredi 17","Mardi 16","Jeudi 18"], textC: 0,
    img: ["Mer. 17","Mar. 16","Jeu. 18"], imgC: 0,
    fillQ: "Examen le mercredi ___.", fill: "17"
  },
  {
    id: "c49-q2", textQ: "Dialogue 1 — À quelle heure est l'examen ?", text: ["À 8 h","À 9 h","À 10 h"], textC: 1,
    img: ["8h","9h","10h"], imgC: 1,
    fillQ: "L'examen est à ___ h.", fill: "9"
  },
  {
    id: "c49-q3", textQ: "Dialogue 2 — Où se trouve la bibliothèque ?", text: ["Bâtiment C, 1er étage","Bâtiment A, 2e étage","Bâtiment B, rez-de-chaussée"], textC: 0,
    img: ["Bât. C 1er","Bât. A 2e","Bât. B RDC"], imgC: 0,
    fillQ: "Bibliothèque au bâtiment ___, 1er étage.", fill: "C"
  },
  {
    id: "c49-q4", textQ: "Dialogue 2 — À quelle heure ouvre la bibliothèque ?", text: ["À 9 h","À 9 h 30","À 10 h"], textC: 1,
    img: ["9h","9h30","10h"], imgC: 1,
    fillQ: "Ouverture à ___ h et demie.", fill: "9"
  },
  {
    id: "c49-q5", textQ: "Dialogue 3 — Quand se retrouvent-ils pour réviser ?", text: ["Demain à 15 h","Ce soir à 17 h","Mercredi matin"], textC: 0,
    img: ["Demain 15h","Ce soir 17h","Mer. matin"], imgC: 0,
    fillQ: "Rendez-vous demain à ___ h.", fill: "15"
  },
  {
    id: "c49-q6", textQ: "Dialogue 3 — Où est le rendez-vous pour réviser ?", text: ["À la bibliothèque","Au café","En classe"], textC: 0,
    img: ["Bibliothèque","Café","Classe"], imgC: 0,
    fillQ: "Rendez-vous à la _________.", fill: "bibliothèque",
    fillA: ["bibliotheque"],
  },
  {
    id: "c49-q7", textQ: "Dialogue 4 — Dans combien de jours est l'examen ?", text: ["Dans 2 jours","Dans 3 jours","Dans 5 jours"], textC: 0,
    img: ["2 jours","3 jours","5 jours"], imgC: 0,
    fillQ: "Examen dans ___ jours.", fill: "2"
  }
]);

const CONVERSATION_50 = buildPool("moyen", "conversation-50", [
  {
    id: "c50-q1", textQ: "Dialogue 1 — Quel DVD Élisa refuse-t-elle de prêter ?", text: ["Amour","Astérix","La maison de papier"], textC: 0,
    img: ["Amour","Astérix","Maison papier"], imgC: 0,
    fillQ: "DVD du film _________.", fill: "Amour",
    fillA: ["amour"],
  },
  {
    id: "c50-q2", textQ: "Dialogue 1 — Combien de temps le DVD avait-il été gardé la dernière fois ?", text: ["3 mois","6 mois","1 an"], textC: 1,
    img: ["3 mois","6 mois","1 an"], imgC: 1,
    fillQ: "Gardé pendant ___ mois.", fill: "6"
  },
  {
    id: "c50-q3", textQ: "Dialogue 2 — Où habite Coralie ?", text: ["À Nantes","À Marseille","À Lyon"], textC: 0,
    img: ["Nantes","Marseille","Lyon"], imgC: 0,
    fillQ: "Coralie habite à _________.", fill: "Nantes",
    fillA: ["nantes"],
  },
  {
    id: "c50-q4", textQ: "Dialogue 2 — Qui habite à Marseille ?", text: ["Magali","Coralie","Carine"], textC: 0,
    img: ["Magali","Coralie","Carine"], imgC: 0,
    fillQ: "_________ habite à Marseille.", fill: "Magali",
    fillA: ["magali"],
  },
  {
    id: "c50-q5", textQ: "Dialogue 3 — Quel chanteur a-t-elle vue ?", text: ["Le chanteur de Phoenix","Chris Lombrete","Paul Durand"], textC: 0,
    img: ["Phoenix","Lombrete","Durand"], imgC: 0,
    fillQ: "Chanteur du groupe _________.", fill: "Phoenix",
    fillA: ["phoenix"],
  },
  {
    id: "c50-q6", textQ: "Dialogue 3 — Où l'a-t-elle vue ?", text: ["Dans un magasin de disques","Au concert","À la radio"], textC: 0,
    img: ["Magasin disques","Concert","Radio"], imgC: 0,
    fillQ: "Dans un magasin de _________.", fill: "disques"
  },
  {
    id: "c50-q7", textQ: "Dialogue 4 — Où se trouve la bibliothèque ?", text: ["1er étage, à droite, au fond du couloir","Rez-de-chaussée","2e étage à gauche"], textC: 0,
    img: ["1er étage droite","RDC","2e gauche"], imgC: 0,
    fillQ: "Monter au premier étage et aller à _________.", fill: "droite"
  }
]);

export const CO_QUESTION_POOLS_MOYEN: Record<string, COMultiQuestion[]> = {
  "moyen-message-26": MESSAGE_26,
  "moyen-message-27": MESSAGE_27,
  "moyen-message-28": MESSAGE_28,
  "moyen-message-29": MESSAGE_29,
  "moyen-message-30": MESSAGE_30,
  "moyen-message-31": MESSAGE_31,
  "moyen-message-32": MESSAGE_32,
  "moyen-message-33": MESSAGE_33,
  "moyen-message-34": MESSAGE_34,
  "moyen-message-35": MESSAGE_35,
  "moyen-message-36": MESSAGE_36,
  "moyen-message-37": MESSAGE_37,
  "moyen-annonce-1": ANNONCE_1,
  "moyen-annonce-2": ANNONCE_2,
  "moyen-annonce-3": ANNONCE_3,
  "moyen-annonce-4": ANNONCE_4,
  "moyen-annonce-5": ANNONCE_5,
  "moyen-annonce-6": ANNONCE_6,
  "moyen-annonce-7": ANNONCE_7,
  "moyen-annonce-8": ANNONCE_8,
  "moyen-annonce-9": ANNONCE_9,
  "moyen-annonce-10": ANNONCE_10,
  "moyen-annonce-11": ANNONCE_11,
  "moyen-annonce-12": ANNONCE_12,
  "moyen-annonce-13": ANNONCE_13,
  "moyen-radio-14": RADIO_14,
  "moyen-radio-15": RADIO_15,
  "moyen-radio-16": RADIO_16,
  "moyen-radio-17": RADIO_17,
  "moyen-radio-18": RADIO_18,
  "moyen-radio-19": RADIO_19,
  "moyen-radio-20": RADIO_20,
  "moyen-radio-21": RADIO_21,
  "moyen-radio-22": RADIO_22,
  "moyen-radio-23": RADIO_23,
  "moyen-radio-24": RADIO_24,
  "moyen-radio-25": RADIO_25,
  "moyen-conversation-38": CONVERSATION_38,
  "moyen-conversation-39": CONVERSATION_39,
  "moyen-conversation-40": CONVERSATION_40,
  "moyen-conversation-41": CONVERSATION_41,
  "moyen-conversation-42": CONVERSATION_42,
  "moyen-conversation-43": CONVERSATION_43,
  "moyen-conversation-44": CONVERSATION_44,
  "moyen-conversation-45": CONVERSATION_45,
  "moyen-conversation-46": CONVERSATION_46,
  "moyen-conversation-47": CONVERSATION_47,
  "moyen-conversation-48": CONVERSATION_48,
  "moyen-conversation-49": CONVERSATION_49,
  "moyen-conversation-50": CONVERSATION_50,
};
