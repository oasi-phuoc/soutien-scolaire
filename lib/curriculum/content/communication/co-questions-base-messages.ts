import { buildPool, type COMultiQuestion } from "./co-questions-helpers";

const MESSAGE_1 = buildPool("base", "message-1", [
  {
    id: "m1-q1", textQ: "Quel jour propose-t-elle de sortir ?", text: ["Jeudi soir", "Vendredi soir", "Samedi soir"], textC: 1,
    img: ["Bar", "Restaurant", "Cinéma"], imgC: 0,
    fillQ: "Elle propose de sortir _________ soir.", fill: "vendredi",
  },
  {
    id: "m1-q2", textQ: "Quel type de lieu est-ce ?", text: ["Un bar", "Un restaurant", "Un cinéma"], textC: 0,
    img: ["Bar", "Restaurant", "Cinéma"], imgC: 0,
    fillQ: "Il y a un nouveau _________ au centre-ville.", fill: "bar",
  },
  {
    id: "m1-q3", textQ: "Quel moyen de transport faut-il prendre ?", text: ["Le tramway", "Le bus", "Le train"], textC: 1,
    img: ["Tramway", "Bus", "Train"], imgC: 1,
    fillQ: "Il faut prendre le _________.", fill: "bus",
  },
  {
    id: "m1-q4", textQ: "Quel transport ne faut-il pas prendre ?", text: ["Le tramway", "Le bus", "Le métro"], textC: 0,
    img: ["Tramway", "Bus", "Métro"], imgC: 0,
    fillQ: "Il ne faut pas prendre le _________.", fill: "tramway",
  },
  {
    id: "m1-q5", textQ: "Qu'est-ce qui est sympa au bar ?", text: ["La musique", "Le silence", "La télévision"], textC: 0,
    img: ["Musique", "Silence", "Télévision"], imgC: 0,
    fillQ: "La musique est _________.", fill: "sympa",
  },
  {
    id: "m1-q6", textQ: "Comment est la décoration ?", text: ["Très jolie", "Très laide", "Très chère"], textC: 0,
    img: ["Décoration", "Musique", "Lumière"], imgC: 0,
    fillQ: "La décoration est très _________.", fill: "jolie",
  },
  {
    id: "m1-q7", textQ: "Où se trouve le bar ?", text: ["Au centre-ville", "À la gare", "Au parc"], textC: 0,
    img: ["Centre-ville", "Gare", "Parc"], imgC: 0,
    fillQ: "Le bar est au _________-ville.", fill: "centre", fillA: ["centre-ville"],
  },
  {
    id: "m1-q8", textQ: "Que doit-on faire pour confirmer ?", text: ["Rappeler", "Écrire un courrier", "Envoyer un colis"], textC: 0,
    img: ["Téléphone", "Courrier", "Colis"], imgC: 0,
    fillQ: "Il faut _________ pour confirmer.", fill: "rappeler",
  },
  {
    id: "m1-q9", textQ: "Le bar est-il nouveau ?", text: ["Oui, c'est un nouveau bar", "Non, c'est un vieux bar", "On ne sait pas"], textC: 0,
    img: ["Nouveau bar", "Vieux bar", "Restaurant"], imgC: 0,
    fillQ: "C'est un nouveau _________.", fill: "bar",
  },
  {
    id: "m1-q10", textQ: "Pour aller au bar, on prend le bus et pas le tramway : vrai ou faux ?", text: ["Vrai", "Faux", "On ne sait pas"], textC: 0,
    img: ["Bus", "Tramway", "Train"], imgC: 0,
    fillQ: "Pour aller au bar, prends le bus, pas le _________.", fill: "tramway",
  },
]);

const MESSAGE_2 = buildPool("base", "message-2", [
  {
    id: "m2-q1", textQ: "À quelle heure est le rendez-vous ?", text: ["Midi", "Midi et quart", "Midi et demi"], textC: 1,
    img: ["12 h", "12 h 15", "12 h 30"], imgC: 1,
    fillQ: "Le rendez-vous est à midi et _________.", fill: "quart",
  },
  {
    id: "m2-q2", textQ: "Où mangent-ils ?", text: ["Au restaurant", "À la maison", "À la piscine"], textC: 1,
    img: ["Restaurant", "Maison", "Piscine"], imgC: 1,
    fillQ: "Ils mangent à la _________.", fill: "maison",
  },
  {
    id: "m2-q3", textQ: "Quelle activité font-ils après le repas ?", text: ["Aller au cinéma", "Aller à la piscine", "Faire les courses"], textC: 1,
    img: ["Cinéma", "Piscine", "Courses"], imgC: 1,
    fillQ: "Après, ils vont à la _________.", fill: "piscine",
  },
  {
    id: "m2-q4", textQ: "Que font-ils à la piscine ?", text: ["Nager et bronzer", "Manger", "Dormir"], textC: 0,
    img: ["Nager", "Manger", "Dormir"], imgC: 0,
    fillQ: "Ils vont nager et _________ sur la pelouse.", fill: "bronzer",
  },
  {
    id: "m2-q5", textQ: "Qu'est-ce qu'il ne faut pas oublier ?", text: ["Un maillot de bain", "Des lunettes de soleil", "Un appareil photo"], textC: 1,
    img: ["Maillot", "Lunettes de soleil", "Appareil photo"], imgC: 1,
    fillQ: "Il ne faut pas oublier les lunettes de _________.", fill: "soleil",
  },
  {
    id: "m2-q6", textQ: "Combien de personnes sont déjà au rendez-vous ?", text: ["Deux", "Trois", "Quatre"], textC: 1,
    img: ["2 personnes", "3 personnes", "4 personnes"], imgC: 1,
    fillQ: "Le rendez-vous est à midi et quart avec _________ personnes.", fill: "trois", fillA: ["3"],
  },
  {
    id: "m2-q7", textQ: "Que faut-il faire pour venir ?", text: ["Appeler", "Écrire un SMS", "Acheter un billet"], textC: 0,
    img: ["Téléphone", "SMS", "Billet"], imgC: 0,
    fillQ: "Si tu veux venir, _________-moi.", fill: "appelle",
  },
  {
    id: "m2-q8", textQ: "Où bronzent-ils ?", text: ["Sur la pelouse", "Dans l'eau", "Au restaurant"], textC: 0,
    img: ["Pelouse", "Eau", "Restaurant"], imgC: 0,
    fillQ: "Ils bronzent sur la _________.", fill: "pelouse",
  },
  {
    id: "m2-q9", textQ: "Quelle activité sportive font-ils ?", text: ["Le ski", "La natation", "Le vélo"], textC: 1,
    img: ["Ski", "Natation", "Vélo"], imgC: 1,
    fillQ: "Ils vont à la piscine pour _________.", fill: "nager",
  },
  {
    id: "m2-q10", textQ: "Le repas est avant ou après la piscine ?", text: ["Avant la piscine", "Après la piscine", "Pendant la piscine"], textC: 0,
    img: ["Repas", "Piscine", "Bronzer"], imgC: 0,
    fillQ: "D'abord on mange, _________ on va à la piscine.", fill: "puis", fillA: ["après", "ensuite"],
  },
]);

const MESSAGE_3 = buildPool("base", "message-3", [
  {
    id: "m3-q1", textQ: "Combien de jours reste le visiteur ?", text: ["Deux jours", "Quatre jours", "Sept jours"], textC: 1,
    img: ["2 jours", "4 jours", "7 jours"], imgC: 1,
    fillQ: "Il reste _________ jours.", fill: "quatre", fillA: ["4"],
  },
  {
    id: "m3-q2", textQ: "Quand propose-t-il le dîner ?", text: ["Mercredi soir", "Jeudi soir", "Vendredi soir"], textC: 1,
    img: ["Restaurant", "Dîner", "Salade"], imgC: 1,
    fillQ: "Le dîner est proposé _________ soir.", fill: "jeudi",
  },
  {
    id: "m3-q3", textQ: "Qu'est-ce qu'il faut apporter ?", text: ["Du pain", "Des tomates", "Du fromage"], textC: 1,
    img: ["Pain", "Tomates", "Fromage"], imgC: 1,
    fillQ: "Il faut apporter des _________.", fill: "tomates",
  },
  {
    id: "m3-q4", textQ: "Pour préparer quoi ?", text: ["Une salade", "Une soupe", "Un gâteau"], textC: 0,
    img: ["Salade", "Soupe", "Gâteau"], imgC: 0,
    fillQ: "Les tomates servent à faire une _________.", fill: "salade",
  },
  {
    id: "m3-q5", textQ: "Quand faut-il appeler ?", text: ["Ce matin", "Ce soir", "Demain matin"], textC: 1,
    img: ["Matin", "Soir", "Demain"], imgC: 1,
    fillQ: "Il faut appeler ce _________.", fill: "soir",
  },
  {
    id: "m3-q6", textQ: "Quel jour est-il revenu ?", text: ["Lundi", "Mardi", "Mercredi"], textC: 1,
    img: ["Lundi", "Mardi", "Mercredi"], imgC: 1,
    fillQ: "Il est revenu _________.", fill: "mardi",
  },
  {
    id: "m3-q7", textQ: "Quelle est la bonne nouvelle ?", text: ["Un ami est revenu", "Il part en voyage", "Il est malade"], textC: 0,
    img: ["Ami", "Voyage", "Malade"], imgC: 0,
    fillQ: "Un ami est _________ d'un voyage.", fill: "revenu",
  },
  {
    id: "m3-q8", textQ: "Où propose-t-il le dîner ?", text: ["Au restaurant", "À la maison", "Au parc"], textC: 1,
    img: ["Restaurant", "Maison", "Parc"], imgC: 1,
    fillQ: "Il propose de venir dîner à la _________.", fill: "maison",
  },
  {
    id: "m3-q9", textQ: "Que veut faire le visiteur ?", text: ["Nous voir", "Partir tout de suite", "Rester seul"], textC: 0,
    img: ["Amis", "Voyage", "Seul"], imgC: 0,
    fillQ: "Il veut nous _________.", fill: "voir",
  },
  {
    id: "m3-q10", textQ: "Quel légume faut-il apporter ?", text: ["Des carottes", "Des tomates", "Des pommes de terre"], textC: 1,
    img: ["Carottes", "Tomates", "Pommes de terre"], imgC: 1,
    fillQ: "Peux-tu apporter des _________ ?", fill: "tomates",
  },
]);

const MESSAGE_4 = buildPool("base", "message-4", [
  {
    id: "m4-q1", textQ: "Où est la réservation ?", text: ["À la pizzeria", "Au cinéma", "À la piscine"], textC: 0,
    img: ["Pizzeria", "Cinéma", "Piscine"], imgC: 0,
    fillQ: "La réservation est à la _________.", fill: "pizzeria",
  },
  {
    id: "m4-q2", textQ: "À quelle heure est le rendez-vous ?", text: ["Midi", "Midi et quart", "Midi et demi"], textC: 2,
    img: ["12 h", "12 h 15", "12 h 30"], imgC: 2,
    fillQ: "Le rendez-vous est à midi et _________.", fill: "demi", fillA: ["demie"],
  },
  {
    id: "m4-q3", textQ: "Combien de personnes seront présentes ?", text: ["Deux", "Trois", "Quatre"], textC: 1,
    img: ["2 personnes", "3 personnes", "4 personnes"], imgC: 1,
    fillQ: "Ils seront _________ personnes.", fill: "trois", fillA: ["3"],
  },
  {
    id: "m4-q4", textQ: "Combien coûte un menu à 14 euros ou à combien d'euros ?", text: ["15 euros", "17 euros", "20 euros"], textC: 1,
    img: ["14 €", "17 €", "20 €"], imgC: 1,
    fillQ: "Il y a des menus à 14 euros ou à _________ euros.", fill: "17", fillA: ["dix-sept"],
  },
  {
    id: "m4-q5", textQ: "Quel est le prix du menu le moins cher ?", text: ["12 euros", "14 euros", "17 euros"], textC: 1,
    img: ["12 €", "14 €", "17 €"], imgC: 1,
    fillQ: "Un menu coûte _________ euros.", fill: "14", fillA: ["quatorze"],
  },
  {
    id: "m4-q6", textQ: "Qui a été invité ?", text: ["Sa sœur", "Son frère", "Sa mère"], textC: 0,
    img: ["Sœur", "Frère", "Mère"], imgC: 0,
    fillQ: "Elle a invité sa _________.", fill: "sœur", fillA: ["soeur"],
  },
  {
    id: "m4-q7", textQ: "Que faut-il faire pour confirmer ?", text: ["Appeler", "Payer", "Annuler"], textC: 0,
    img: ["Téléphone", "Payer", "Annuler"], imgC: 0,
    fillQ: "Il faut _________ pour confirmer.", fill: "appeler",
  },
  {
    id: "m4-q8", textQ: "Quel type de restaurant ?", text: ["Une pizzeria", "Un bar", "Un cinéma"], textC: 0,
    img: ["Pizza", "Bar", "Cinéma"], imgC: 0,
    fillQ: "C'est une réservation à la _________.", fill: "pizzeria",
  },
  {
    id: "m4-q9", textQ: "Quand dit-elle à demain ?", text: ["Le rendez-vous est demain", "Le rendez-vous est dans une semaine", "Le rendez-vous est ce soir"], textC: 0,
    img: ["Demain", "Semaine", "Soir"], imgC: 0,
    fillQ: "Elle dit : « À _________ ! »", fill: "demain",
  },
  {
    id: "m4-q10", textQ: "Combien de menus différents sont proposés ?", text: ["Un", "Deux", "Trois"], textC: 1,
    img: ["1 menu", "2 menus", "3 menus"], imgC: 1,
    fillQ: "Il y a _________ menus au choix.", fill: "deux", fillA: ["2"],
  },
]);

const MESSAGE_5 = buildPool("base", "message-5", [
  {
    id: "m5-q1", textQ: "Où donne-t-il rendez-vous ?", text: ["Au nouveau cinéma", "À la pizzeria", "Au bar"], textC: 0,
    img: ["Cinéma", "Pizzeria", "Bar"], imgC: 0,
    fillQ: "Le rendez-vous est au nouveau _________.", fill: "cinéma", fillA: ["cinema"],
  },
  {
    id: "m5-q2", textQ: "Quel bus faut-il prendre ?", text: ["Le bus 4", "Le bus 16", "Le bus 112"], textC: 1,
    img: ["Bus 4", "Bus 16", "Bus 112"], imgC: 1,
    fillQ: "Il faut prendre le bus numéro _________.", fill: "16", fillA: ["seize"],
  },
  {
    id: "m5-q3", textQ: "Combien coûte une place de cinéma ?", text: ["5 euros", "7 euros", "10 euros"], textC: 1,
    img: ["5 €", "7 €", "10 €"], imgC: 1,
    fillQ: "La place coûte _________ euros.", fill: "7", fillA: ["sept"],
  },
  {
    id: "m5-q4", textQ: "Qu'est-ce qu'il demande d'acheter ?", text: ["Les tickets", "Les boissons", "Les pop-corn"], textC: 0,
    img: ["Tickets", "Boissons", "Pop-corn"], imgC: 0,
    fillQ: "Il demande d'acheter les _________.", fill: "tickets", fillA: ["billets"],
  },
  {
    id: "m5-q5", textQ: "Pourquoi ne peut-il pas passer chez toi ?", text: ["Il est en retard", "Il est malade", "Il travaille"], textC: 0,
    img: ["Retard", "Malade", "Travail"], imgC: 0,
    fillQ: "Il est en _________.", fill: "retard",
  },
  {
    id: "m5-q6", textQ: "Dans quelle direction va le bus ?", text: ["Le centre commercial", "La piscine", "La gare"], textC: 0,
    img: ["Centre commercial", "Piscine", "Gare"], imgC: 0,
    fillQ: "Le bus va en direction du centre _________.", fill: "commercial",
  },
  {
    id: "m5-q7", textQ: "À quel arrêt faut-il descendre ?", text: ["L'arrêt du cinéma", "L'arrêt de la gare", "L'arrêt du centre"], textC: 0,
    img: ["Cinéma", "Gare", "Centre commercial"], imgC: 0,
    fillQ: "Il faut descendre à l'arrêt du _________.", fill: "cinéma", fillA: ["cinema"],
  },
  {
    id: "m5-q8", textQ: "Peut-il passer chez toi ?", text: ["Non", "Oui", "Peut-être"], textC: 0,
    img: ["Non", "Oui", "Peut-être"], imgC: 0,
    fillQ: "Il ne peut pas passer chez _________.", fill: "toi", fillA: ["toit"],
  },
  {
    id: "m5-q9", textQ: "Quel numéro de bus est mentionné ?", text: ["4", "16", "112"], textC: 1,
    img: ["Bus 4", "Bus 16", "Bus 112"], imgC: 1,
    fillQ: "Prends le bus _________.", fill: "16",
  },
  {
    id: "m5-q10", textQ: "Au quel numéro est le cinéma ?", text: ["1", "3", "5"], textC: 1,
    img: ["1", "3", "5"], imgC: 1,
    fillQ: "Le cinéma est au numéro _________.", fill: "3", fillA: ["trois"],
  },
]);

const MESSAGE_6 = buildPool("base", "message-6", [
  {
    id: "m6-q1", textQ: "Quel moyen de transport prennent-ils ?", text: ["Le bus", "Le train", "La voiture"], textC: 1,
    img: ["Bus", "Train", "Voiture"], imgC: 1,
    fillQ: "Ils vont prendre le _________.", fill: "train",
  },
  {
    id: "m6-q2", textQ: "À quelle heure part le train ?", text: ["8 h 56", "9 h", "10 h"], textC: 0,
    img: ["8 h 56", "9 h", "10 h"], imgC: 0,
    fillQ: "Le train part à 8 h _________.", fill: "56",
  },
  {
    id: "m6-q3", textQ: "Quand part le train ?", text: ["Samedi matin", "Dimanche soir", "Lundi matin"], textC: 0,
    img: ["Train", "Matin", "Appareil photo"], imgC: 0,
    fillQ: "Le train part _________ matin.", fill: "samedi",
  },
  {
    id: "m6-q4", textQ: "Qu'est-ce qu'il ne faut pas oublier ?", text: ["Les lunettes de soleil", "L'appareil photo", "Le passeport"], textC: 1,
    img: ["Lunettes", "Appareil photo", "Passeport"], imgC: 1,
    fillQ: "Il ne faut pas oublier l'appareil _________.", fill: "photo",
  },
  {
    id: "m6-q5", textQ: "Quand partent-ils en voyage ?", text: ["Cette semaine", "La semaine prochaine", "Le mois prochain"], textC: 1,
    img: ["Cette semaine", "Semaine prochaine", "Mois prochain"], imgC: 1,
    fillQ: "Le voyage est la semaine _________.", fill: "prochaine",
  },
  {
    id: "m6-q6", textQ: "Quel type de visite ?", text: ["Une visite de ville", "Un match de foot", "Un concert"], textC: 0,
    img: ["Ville", "Football", "Concert"], imgC: 0,
    fillQ: "Ils vont visiter une _________.", fill: "ville", fillA: ["ville la semaine prochaine"],
  },
  {
    id: "m6-q7", textQ: "Le voyage sera-t-il sympa ?", text: ["Oui", "Non", "On ne sait pas"], textC: 0,
    img: ["Sympa", "Ennuyeux", "Dangereux"], imgC: 0,
    fillQ: "Ça va être _________.", fill: "sympa",
  },
  {
    id: "m6-q8", textQ: "Que propose-t-il ?", text: ["De venir avec eux", "De rester seul", "De prendre l'avion"], textC: 0,
    img: ["Amis", "Seul", "Avion"], imgC: 0,
    fillQ: "Tu veux _________ ?", fill: "venir", fillA: ["venir avec nous"],
  },
  {
    id: "m6-q9", textQ: "Quel objet pour prendre des photos ?", text: ["Un téléphone", "Un appareil photo", "Une montre"], textC: 1,
    img: ["Téléphone", "Appareil photo", "Montre"], imgC: 1,
    fillQ: "N'oublie pas ton appareil _________.", fill: "photo",
  },
  {
    id: "m6-q10", textQ: "Le train part-il le matin ou le soir ?", text: ["Le matin", "Le soir", "La nuit"], textC: 0,
    img: ["Matin", "Soir", "Nuit"], imgC: 0,
    fillQ: "Le train part samedi _________.", fill: "matin",
  },
]);

const MESSAGE_7 = buildPool("base", "message-7", [
  {
    id: "m7-q1", textQ: "Combien d'invitations a-t-il ?", text: ["Une", "Deux", "Trois"], textC: 1,
    img: ["1 invitation", "2 invitations", "3 invitations"], imgC: 1,
    fillQ: "Il a _________ invitations.", fill: "deux", fillA: ["2"],
  },
  {
    id: "m7-q2", textQ: "Combien ça coûte ?", text: ["C'est gratuit", "5 euros", "10 euros"], textC: 0,
    img: ["Gratuit", "5 €", "10 €"], imgC: 0,
    fillQ: "C'est _________.", fill: "gratuit",
  },
  {
    id: "m7-q3", textQ: "À quelle heure finit-il le travail ?", text: ["14 heures", "15 heures", "16 heures"], textC: 1,
    img: ["14 h", "15 h", "16 h"], imgC: 1,
    fillQ: "Il finit le travail à _________ heures.", fill: "15", fillA: ["quinze"],
  },
  {
    id: "m7-q4", textQ: "À quelle heure va-t-il chez le dentiste ?", text: ["15 heures", "16 heures", "17 heures"], textC: 1,
    img: ["15 h", "16 h", "17 h"], imgC: 1,
    fillQ: "Il va chez le dentiste à _________ heures.", fill: "16", fillA: ["seize"],
  },
  {
    id: "m7-q5", textQ: "À quelle séance propose-t-il d'aller ?", text: ["16 heures", "17 heures", "18 heures"], textC: 2,
    img: ["16 h", "17 h", "18 h"], imgC: 2,
    fillQ: "Il propose la séance de _________ heures.", fill: "18", fillA: ["dix-huit"],
  },
  {
    id: "m7-q6", textQ: "Où fait-il la réservation ?", text: ["Sur Internet", "Au guichet", "Par courrier"], textC: 0,
    img: ["Internet", "Guichet", "Courrier"], imgC: 0,
    fillQ: "Il fait la réservation sur _________.", fill: "Internet", fillA: ["internet"],
  },
  {
    id: "m7-q7", textQ: "Quelle activité ?", text: ["Le cinéma", "Le théâtre", "Le concert"], textC: 0,
    img: ["Cinéma", "Théâtre", "Concert"], imgC: 0,
    fillQ: "Il a des invitations pour le _________.", fill: "cinéma", fillA: ["cinema"],
  },
  {
    id: "m7-q8", textQ: "Que doit choisir l'interlocuteur ?", text: ["Le film", "Le restaurant", "Le bus"], textC: 0,
    img: ["Film", "Restaurant", "Bus"], imgC: 0,
    fillQ: "Il faut choisir le _________.", fill: "film",
  },
  {
    id: "m7-q9", textQ: "Quand fait-il la réservation ?", text: ["Avant le cinéma", "Après avoir choisi le film", "Le lendemain"], textC: 1,
    img: ["Avant", "Après", "Lendemain"], imgC: 1,
    fillQ: "Après, il fait la réservation sur _________.", fill: "Internet", fillA: ["internet"],
  },
  {
    id: "m7-q10", textQ: "Que faut-il faire quand on a choisi le film ?", text: ["Rappeler", "Payer", "Partir"], textC: 0,
    img: ["Téléphone", "Payer", "Partir"], imgC: 0,
    fillQ: "Rappelle-moi quand tu as choisi le _________.", fill: "film",
  },
]);

const MESSAGE_8 = buildPool("base", "message-8", [
  {
    id: "m8-q1", textQ: "Pour quelle date appelle-t-elle ?", text: ["Le 16 mars", "Le 26 mars", "Le 6 avril"], textC: 1,
    img: ["Musée", "Cinéma", "Restaurant"], imgC: 0,
    fillQ: "Elle appelle pour le 26 _________.", fill: "mars",
  },
  {
    id: "m8-q2", textQ: "À partir de quelle heure est-elle libre ?", text: ["13 heures", "14 heures", "15 heures"], textC: 1,
    img: ["13 h", "14 h", "15 h"], imgC: 1,
    fillQ: "Elle est libre à partir de 2 heures de l'_________.", fill: "après-midi", fillA: ["apres-midi"],
  },
  {
    id: "m8-q3", textQ: "Quelle activité propose-t-elle l'après-midi ?", text: ["Aller au musée ou au cinéma", "Faire du sport", "Faire les courses"], textC: 0,
    img: ["Musée", "Cinéma", "Courses"], imgC: 0,
    fillQ: "L'après-midi, on peut aller au musée ou au _________.", fill: "cinéma", fillA: ["cinema"],
  },
  {
    id: "m8-q4", textQ: "Que propose-t-elle si l'autre personne ne peut pas ?", text: ["Dîner au restaurant", "Rester chez soi", "Aller au parc"], textC: 0,
    img: ["Restaurant", "Maison", "Parc"], imgC: 0,
    fillQ: "On peut dîner au _________.", fill: "restaurant",
  },
  {
    id: "m8-q5", textQ: "À quelle heure propose-t-elle de dîner ?", text: ["6 heures", "7 heures", "8 heures"], textC: 1,
    img: ["18 h", "19 h", "20 h"], imgC: 1,
    fillQ: "Le dîner est proposé vers _________ heures.", fill: "7", fillA: ["sept", "19"],
  },
  {
    id: "m8-q6", textQ: "Quand faut-il rappeler ?", text: ["Aujourd'hui", "Demain", "La semaine prochaine"], textC: 0,
    img: ["Aujourd'hui", "Demain", "Semaine prochaine"], imgC: 0,
    fillQ: "Il faut rappeler _________.", fill: "aujourd'hui",
  },
  {
    id: "m8-q7", textQ: "Quel type d'activité veut-elle faire ?", text: ["Une activité culturelle", "Une activité sportive", "Une activité commerciale"], textC: 0,
    img: ["Culture", "Sport", "Shopping"], imgC: 0,
    fillQ: "Elle veut faire une activité _________.", fill: "culturelle",
  },
  {
    id: "m8-q8", textQ: "L'activité est prévue l'après-midi ou le soir ?", text: ["L'après-midi", "Le soir", "Le matin"], textC: 0,
    img: ["Après-midi", "Soir", "Matin"], imgC: 0,
    fillQ: "On peut aller au musée l'_________.", fill: "après-midi", fillA: ["apres-midi"],
  },
  {
    id: "m8-q9", textQ: "Combien de lieux propose-t-elle l'après-midi ?", text: ["Un", "Deux", "Trois"], textC: 1,
    img: ["Musée", "Cinéma", "Restaurant"], imgC: 0,
    fillQ: "On peut aller au musée _________ au cinéma.", fill: "ou",
  },
  {
    id: "m8-q10", textQ: "Le dîner est une alternative si l'on ne peut pas quand ?", text: ["L'après-midi", "Le matin", "La nuit"], textC: 0,
    img: ["Après-midi", "Matin", "Nuit"], imgC: 0,
    fillQ: "Si tu ne peux pas l'après-midi, on peut _________.", fill: "dîner", fillA: ["diner"],
  },
]);

const MESSAGE_9 = buildPool("base", "message-9", [
  {
    id: "m9-q1", textQ: "Quel sport a-t-il pratiqué ?", text: ["La natation", "Le ski", "Le tennis"], textC: 1,
    img: ["Natation", "Ski", "Tennis"], imgC: 1,
    fillQ: "Il a fait du _________ tous les jours.", fill: "ski",
  },
  {
    id: "m9-q2", textQ: "Qu'a-t-il beaucoup mangé ?", text: ["Du pain", "Du chocolat", "Du poisson"], textC: 1,
    img: ["Pain", "Chocolat", "Poisson"], imgC: 1,
    fillQ: "Il a mangé beaucoup de _________.", fill: "chocolat",
  },
  {
    id: "m9-q3", textQ: "Quel plat n'a-t-il pas aimé ?", text: ["La fondue", "Le chocolat", "Les röstis"], textC: 2,
    img: ["Fondue", "Chocolat", "Röstis"], imgC: 2,
    fillQ: "Il a détesté les _________.", fill: "röstis", fillA: ["rostis"],
  },
  {
    id: "m9-q4", textQ: "Quel cadeau a-t-il ?", text: ["Un livre", "Une montre", "Un jeu vidéo"], textC: 1,
    img: ["Livre", "Montre", "Jeu vidéo"], imgC: 1,
    fillQ: "Le cadeau est une _________.", fill: "montre",
  },
  {
    id: "m9-q5", textQ: "Quand est-il rentré de voyage ?", text: ["Le lundi 5", "Le mardi 5", "Le vendredi 5"], textC: 0,
    img: ["Lundi", "Mardi", "Vendredi"], imgC: 0,
    fillQ: "Il est rentré le _________ 5.", fill: "lundi",
  },
  {
    id: "m9-q6", textQ: "Quand propose-t-il de se revoir ?", text: ["Ce week-end", "Ce soir", "Lundi prochain"], textC: 0,
    img: ["Week-end", "Soir", "Lundi"], imgC: 0,
    fillQ: "On se voit ce _________ ?", fill: "week-end", fillA: ["weekend"],
  },
  {
    id: "m9-q7", textQ: "Quel autre plat suisse a-t-il mangé ?", text: ["La fondue au fromage", "La pizza", "La salade"], textC: 0,
    img: ["Fondue", "Pizza", "Salade"], imgC: 0,
    fillQ: "Il a mangé de la fondue au _________.", fill: "fromage",
  },
  {
    id: "m9-q8", textQ: "Comment trouve-t-il la nourriture ?", text: ["Délicieuse", "Mauvaise", "Chère"], textC: 0,
    img: ["Délicieux", "Mauvais", "Cher"], imgC: 0,
    fillQ: "La nourriture est _________.", fill: "délicieuse", fillA: ["delicieuse"],
  },
  {
    id: "m9-q9", textQ: "Le voyage était-il agréable ?", text: ["Oui, il a adoré", "Non, il a détesté", "Il ne dit pas"], textC: 0,
    img: ["Adoré", "Détesté", "Neutre"], imgC: 0,
    fillQ: "Il a _________ son voyage.", fill: "adoré", fillA: ["adore"],
  },
  {
    id: "m9-q10", textQ: "Combien de types de nourriture suisse sont mentionnés ?", text: ["Deux", "Trois", "Quatre"], textC: 1,
    img: ["Chocolat", "Fromage", "Ski"], imgC: 0,
    fillQ: "Il a mangé du chocolat, de la fondue et des _________.", fill: "röstis", fillA: ["rostis"],
  },
]);

const MESSAGE_10 = buildPool("base", "message-10", [
  {
    id: "m10-q1", textQ: "Quel type d'événement ?", text: ["Une exposition de peintures", "Un concert", "Un match"], textC: 0,
    img: ["Peintures", "Concert", "Match"], imgC: 0,
    fillQ: "C'est une exposition de _________.", fill: "peintures",
  },
  {
    id: "m10-q2", textQ: "Quand a lieu l'événement ?", text: ["Mercredi soir", "Jeudi soir", "Vendredi soir"], textC: 1,
    img: ["Exposition", "Peintures", "Bus"], imgC: 0,
    fillQ: "L'exposition est _________ soir.", fill: "jeudi",
  },
  {
    id: "m10-q3", textQ: "À quelle heure est le rendez-vous ?", text: ["17 heures", "18 heures", "19 heures"], textC: 1,
    img: ["17 h", "18 h", "19 h"], imgC: 1,
    fillQ: "Le rendez-vous est à _________ heures.", fill: "6", fillA: ["six", "18"],
  },
  {
    id: "m10-q4", textQ: "Quel bus peut-on prendre ?", text: ["Le bus 16", "Le bus 112", "Le bus 4"], textC: 1,
    img: ["Bus 16", "Bus 112", "Bus 4"], imgC: 1,
    fillQ: "On peut prendre le bus _________.", fill: "112",
  },
  {
    id: "m10-q5", textQ: "Combien coûte l'entrée ?", text: ["5 euros", "7 euros", "7,50 euros"], textC: 2,
    img: ["5 €", "7 €", "7,50 €"], imgC: 2,
    fillQ: "L'entrée coûte 7,50 _________.", fill: "euros",
  },
  {
    id: "m10-q6", textQ: "Où se retrouvent-ils ?", text: ["Devant l'exposition", "Au cinéma", "À la piscine"], textC: 0,
    img: ["Exposition", "Cinéma", "Piscine"], imgC: 0,
    fillQ: "On se retrouve devant l'_________.", fill: "exposition",
  },
  {
    id: "m10-q7", textQ: "Avec combien de personnes y va-t-elle déjà ?", text: ["Une", "Deux", "Trois"], textC: 0,
    img: ["1 personne", "2 personnes", "3 personnes"], imgC: 0,
    fillQ: "Elle y va avec une _________.", fill: "amie", fillA: ["personne", "autre personne"],
  },
  {
    id: "m10-q8", textQ: "Quel moyen de transport est conseillé ?", text: ["Le bus", "Le train", "Le vélo"], textC: 0,
    img: ["Bus", "Train", "Vélo"], imgC: 0,
    fillQ: "Pour y aller, tu peux prendre le _________.", fill: "bus",
  },
  {
    id: "m10-q9", textQ: "L'entrée coûte-t-elle plus de 7 euros ?", text: ["Oui, 7,50 euros", "Non, 5 euros", "Non, c'est gratuit"], textC: 0,
    img: ["7,50 €", "5 €", "Gratuit"], imgC: 0,
    fillQ: "L'entrée coûte 7,50 _________.", fill: "euros",
  },
  {
    id: "m10-q10", textQ: "Que faut-il faire pour confirmer ?", text: ["Rappeler", "Payer en ligne", "Envoyer un SMS"], textC: 0,
    img: ["Téléphone", "Internet", "SMS"], imgC: 0,
    fillQ: "Il faut _________ pour confirmer.", fill: "rappeler",
  },
]);

const MESSAGE_11 = buildPool("base", "message-11", [
  {
    id: "m11-q1", textQ: "Qu'est-ce qui est prêt ?", text: ["La voiture", "Le vélo", "La moto"], textC: 0,
    img: ["Voiture", "Vélo", "Moto"], imgC: 0,
    fillQ: "La _________ est prête.", fill: "voiture",
  },
  {
    id: "m11-q2", textQ: "Quand peut-on venir la chercher ?", text: ["Aujourd'hui", "Demain", "Lundi"], textC: 0,
    img: ["Aujourd'hui", "Demain", "Lundi"], imgC: 0,
    fillQ: "On peut venir la chercher _________.", fill: "aujourd'hui",
  },
  {
    id: "m11-q3", textQ: "Jusqu'à quelle heure est ouvert le garage le matin ?", text: ["11 heures", "Midi", "13 heures"], textC: 1,
    img: ["11 h", "12 h", "13 h"], imgC: 1,
    fillQ: "Le garage ouvre de huit heures à _________.", fill: "midi",
  },
  {
    id: "m11-q4", textQ: "À quelle heure rouvre-t-on l'après-midi ?", text: ["13 heures", "13 heures 30", "14 heures"], textC: 1,
    img: ["13 h", "13 h 30", "14 h"], imgC: 1,
    fillQ: "Le garage rouvre à une heure et _________.", fill: "demie", fillA: ["demi", "13 h 30"],
  },
  {
    id: "m11-q5", textQ: "Jusqu'à quelle heure est ouvert le soir ?", text: ["19 heures 30", "20 heures", "21 heures"], textC: 0,
    img: ["19 h 30", "20 h", "21 h"], imgC: 0,
    fillQ: "Le garage ferme à sept heures et _________.", fill: "demie", fillA: ["demi", "19 h 30"],
  },
  {
    id: "m11-q6", textQ: "Combien coûtent les réparations ?", text: ["123 euros", "223 euros", "323 euros"], textC: 1,
    img: ["123 €", "223 €", "323 €"], imgC: 1,
    fillQ: "Les réparations sont de _________ euros.", fill: "223",
  },
  {
    id: "m11-q7", textQ: "Comment faut-il payer ?", text: ["En espèces", "Par carte bancaire", "Par chèque"], textC: 1,
    img: ["Espèces", "Carte bancaire", "Chèque"], imgC: 1,
    fillQ: "Il faut payer par carte _________.", fill: "bancaire",
  },
  {
    id: "m11-q8", textQ: "Quel type d'établissement appelle ?", text: ["Un garage", "Un magasin", "Un restaurant"], textC: 0,
    img: ["Garage", "Magasin", "Restaurant"], imgC: 0,
    fillQ: "C'est un _________ qui appelle.", fill: "garage",
  },
  {
    id: "m11-q9", textQ: "À quelle heure ouvre le garage le matin ?", text: ["7 heures", "8 heures", "9 heures"], textC: 1,
    img: ["7 h", "8 h", "9 h"], imgC: 1,
    fillQ: "Le garage ouvre à _________ heures.", fill: "8", fillA: ["huit"],
  },
  {
    id: "m11-q10", textQ: "Les réparations coûtent-elles plus de 200 euros ?", text: ["Oui, 223 euros", "Non, 123 euros", "Non, c'est gratuit"], textC: 0,
    img: ["223 €", "123 €", "Gratuit"], imgC: 0,
    fillQ: "Les réparations coûtent _________ euros.", fill: "223",
  },
]);

const MESSAGE_12 = buildPool("base", "message-12", [
  {
    id: "m12-q1", textQ: "Quand a lieu la réunion ?", text: ["Ce matin", "Demain matin", "Demain soir"], textC: 1,
    img: ["Ce matin", "Demain matin", "Demain soir"], imgC: 1,
    fillQ: "La réunion est _________ matin.", fill: "demain",
  },
  {
    id: "m12-q2", textQ: "À quelle heure est la réunion ?", text: ["10 heures", "10 heures 30", "11 heures"], textC: 1,
    img: ["10 h", "10 h 30", "11 h"], imgC: 1,
    fillQ: "La réunion est à dix heures et _________.", fill: "demie", fillA: ["demi"],
  },
  {
    id: "m12-q3", textQ: "Qui sera présent à la réunion ?", text: ["Le directeur commercial et la comptable", "Le directeur seul", "Personne"], textC: 0,
    img: ["Réunion", "Bureau", "Comptable"], imgC: 0,
    fillQ: "Le directeur commercial et la _________ seront présents.", fill: "comptable",
  },
  {
    id: "m12-q4", textQ: "De quoi s'agit-il ?", text: ["D'une réunion", "D'un déjeuner", "D'une visite"], textC: 0,
    img: ["Réunion", "Déjeuner", "Visite"], imgC: 0,
    fillQ: "C'est l'heure de la _________ de demain matin.", fill: "réunion", fillA: ["reunion"],
  },
  {
    id: "m12-q5", textQ: "Combien de personnes importantes seront présentes ?", text: ["Une", "Deux", "Trois"], textC: 1,
    img: ["1 personne", "2 personnes", "3 personnes"], imgC: 1,
    fillQ: "_________ personnes seront présentes.", fill: "Deux", fillA: ["deux", "2"],
  },
  {
    id: "m12-q6", textQ: "Que faire en cas de problème ?", text: ["Appeler", "Écrire un courrier", "Venir au bureau"], textC: 0,
    img: ["Téléphone", "Courrier", "Bureau"], imgC: 0,
    fillQ: "En cas de problème, vous pouvez _________.", fill: "appeler",
  },
  {
    id: "m12-q7", textQ: "La réunion est-elle ce matin ou demain ?", text: ["Demain matin", "Ce matin", "Ce soir"], textC: 0,
    img: ["Demain", "Aujourd'hui", "Soir"], imgC: 0,
    fillQ: "La réunion est demain _________.", fill: "matin",
  },
  {
    id: "m12-q8", textQ: "Quel métier est mentionné en plus du directeur ?", text: ["La comptable", "Le médecin", "Le professeur"], textC: 0,
    img: ["Comptable", "Médecin", "Professeur"], imgC: 0,
    fillQ: "La _________ sera présente.", fill: "comptable",
  },
  {
    id: "m12-q9", textQ: "L'heure de la réunion est-elle 10 h 30 ?", text: ["Oui", "Non, 10 h", "Non, 11 h"], textC: 0,
    img: ["10 h 30", "10 h", "11 h"], imgC: 0,
    fillQ: "La réunion est à dix heures et _________.", fill: "demie", fillA: ["demi"],
  },
  {
    id: "m12-q10", textQ: "Le message confirme-t-il l'heure ?", text: ["Oui", "Non", "Il l'annule"], textC: 0,
    img: ["Confirmer", "Annuler", "Reporter"], imgC: 0,
    fillQ: "Il confirme l'heure de la _________.", fill: "réunion", fillA: ["reunion"],
  },
]);

const MESSAGE_13 = buildPool("base", "message-13", [
  {
    id: "m13-q1", textQ: "Quel type de logement est proposé ?", text: ["Un studio", "Un loft", "Une maison"], textC: 1,
    img: ["Studio", "Loft", "Maison"], imgC: 1,
    fillQ: "Elle propose un _________.", fill: "loft",
  },
  {
    id: "m13-q2", textQ: "Où se situe le logement ?", text: ["Près de la gare", "Près de la bibliothèque", "Près de la piscine"], textC: 1,
    img: ["Gare", "Bibliothèque", "Piscine"], imgC: 1,
    fillQ: "Le loft est près de la bibliothèque _________.", fill: "municipale",
  },
  {
    id: "m13-q3", textQ: "Avant quand faut-il rappeler pour visiter ?", text: ["Mardi 18 heures", "Mercredi 18 heures", "Jeudi 18 heures"], textC: 1,
    img: ["Mardi 18 h", "Mercredi 18 h", "Jeudi 18 h"], imgC: 1,
    fillQ: "Il faut rappeler avant _________, 18 heures.", fill: "mercredi",
  },
  {
    id: "m13-q4", textQ: "Pourquoi appelle-t-on ?", text: ["Pour une recherche de logement", "Pour une voiture", "Pour un voyage"], textC: 0,
    img: ["Logement", "Voiture", "Voyage"], imgC: 0,
    fillQ: "C'est pour une recherche de _________.", fill: "logement",
  },
  {
    id: "m13-q5", textQ: "Quel type d'agence appelle ?", text: ["Une agence immobilière", "Une agence de voyages", "Un garage"], textC: 0,
    img: ["Immobilier", "Voyages", "Garage"], imgC: 0,
    fillQ: "C'est une agence _________.", fill: "immobilière", fillA: ["immobiliere"],
  },
  {
    id: "m13-q6", textQ: "À quelle heure faut-il rappeler au plus tard ?", text: ["17 heures", "18 heures", "19 heures"], textC: 1,
    img: ["17 h", "18 h", "19 h"], imgC: 1,
    fillQ: "Il faut rappeler avant mercredi, _________ heures.", fill: "18", fillA: ["dix-huit"],
  },
  {
    id: "m13-q7", textQ: "Que peut-on faire si on est intéressé ?", text: ["Visiter le loft", "Acheter une voiture", "Réserver un hôtel"], textC: 0,
    img: ["Visite", "Voiture", "Hôtel"], imgC: 0,
    fillQ: "On peut _________ le loft.", fill: "visiter",
  },
  {
    id: "m13-q8", textQ: "Le loft est près de quel lieu public ?", text: ["La bibliothèque", "Le cinéma", "Le stade"], textC: 0,
    img: ["Bibliothèque", "Cinéma", "Stade"], imgC: 0,
    fillQ: "Le loft est près de la _________.", fill: "bibliothèque", fillA: ["bibliotheque"],
  },
  {
    id: "m13-q9", textQ: "Faut-il rappeler pour visiter ?", text: ["Oui", "Non", "On ne sait pas"], textC: 0,
    img: ["Téléphone", "Visite", "Loft"], imgC: 0,
    fillQ: "Si vous voulez le visiter, _________-moi.", fill: "rappelez", fillA: ["rapelle"],
  },
  {
    id: "m13-q10", textQ: "Quel jour est la date limite ?", text: ["Mardi", "Mercredi", "Jeudi"], textC: 1,
    img: ["Mardi", "Mercredi", "Jeudi"], imgC: 1,
    fillQ: "Il faut rappeler avant _________.", fill: "mercredi",
  },
]);

const MESSAGE_14 = buildPool("base", "message-14", [
  {
    id: "m14-q1", textQ: "Combien coûte l'abonnement par mois ?", text: ["30 euros", "40 euros", "50 euros"], textC: 1,
    img: ["30 €", "40 €", "50 €"], imgC: 1,
    fillQ: "L'abonnement coûte _________ euros par mois.", fill: "40", fillA: ["quarante"],
  },
  {
    id: "m14-q2", textQ: "Quelles installations peut-on utiliser ?", text: ["La salle de fitness et la piscine", "Le tennis et le football", "Le sauna seulement"], textC: 0,
    img: ["Fitness", "Piscine", "Tennis"], imgC: 0,
    fillQ: "On peut utiliser la salle de fitness et la _________.", fill: "piscine",
  },
  {
    id: "m14-q3", textQ: "Quels jours peut-on venir au club ?", text: ["Du lundi au vendredi", "Du lundi au samedi", "Tous les jours"], textC: 1,
    img: ["Lun–ven", "Lun–sam", "7 jours"], imgC: 1,
    fillQ: "Le club est ouvert du lundi au _________.", fill: "samedi",
  },
  {
    id: "m14-q4", textQ: "À quelle heure ferme-t-on en semaine le soir ?", text: ["19 heures", "21 heures", "23 heures"], textC: 1,
    img: ["19 h", "21 h", "23 h"], imgC: 1,
    fillQ: "Fermeture à _________ heures en semaine.", fill: "21", fillA: ["vingt-et-un"],
  },
  {
    id: "m14-q5", textQ: "À quelle heure ferme-t-on le week-end ?", text: ["17 heures", "19 heures", "21 heures"], textC: 1,
    img: ["17 h", "19 h", "21 h"], imgC: 1,
    fillQ: "Le week-end, fermeture à _________ heures.", fill: "19", fillA: ["dix-neuf"],
  },
  {
    id: "m14-q6", textQ: "Quand peut-on venir voir l'offre au club ?", text: ["Vendredi ou samedi", "Lundi ou mardi", "Dimanche"], textC: 0,
    img: ["Vendredi", "Lundi", "Dimanche"], imgC: 0,
    fillQ: "Venez me voir au club _________ ou samedi.", fill: "vendredi",
  },
  {
    id: "m14-q7", textQ: "Qu'est-ce qui est proposé ?", text: ["Un abonnement", "Un cours de cuisine", "Un billet de train"], textC: 0,
    img: ["Abonnement", "Cuisine", "Train"], imgC: 0,
    fillQ: "On propose un _________ à 40 euros.", fill: "abonnement",
  },
  {
    id: "m14-q8", textQ: "Quel type de club appelle ?", text: ["Un club de sports", "Un club de lecture", "Un club de musique"], textC: 0,
    img: ["Sports", "Lecture", "Musique"], imgC: 0,
    fillQ: "C'est un club de _________.", fill: "sports",
  },
  {
    id: "m14-q9", textQ: "Peut-on utiliser la piscine avec cet abonnement ?", text: ["Oui", "Non", "Seulement le week-end"], textC: 0,
    img: ["Piscine", "Fitness", "Tennis"], imgC: 0,
    fillQ: "On peut utiliser la _________ avec ce tarif.", fill: "piscine",
  },
  {
    id: "m14-q10", textQ: "Ferme-t-on plus tôt le week-end qu'en semaine ?", text: ["Oui, à 19 h", "Non", "On ne sait pas"], textC: 0,
    img: ["19 h", "21 h", "23 h"], imgC: 0,
    fillQ: "Le week-end, fermeture à _________ heures.", fill: "19", fillA: ["dix-neuf"],
  },
]);

const MESSAGE_15 = buildPool("base", "message-15", [
  {
    id: "m15-q1", textQ: "Qu'est-ce qui est inclus dans la réservation ?", text: ["Le petit-déjeuner et Internet", "Le déjeuner et le parking", "Le dîner et la télévision"], textC: 0,
    img: ["Petit-déjeuner", "Internet", "Parking"], imgC: 0,
    fillQ: "Le petit-déjeuner et _________ sont inclus.", fill: "Internet", fillA: ["internet"],
  },
  {
    id: "m15-q2", textQ: "Comment conseille-t-on d'aller à l'hôtel ?", text: ["En bus", "En taxi", "À pied"], textC: 1,
    img: ["Bus", "Taxi", "À pied"], imgC: 1,
    fillQ: "Il est conseillé d'y aller en _________.", fill: "taxi",
  },
  {
    id: "m15-q3", textQ: "Quel type d'hébergement ?", text: ["Un hôtel", "Un camping", "Une auberge"], textC: 0,
    img: ["Hôtel", "Camping", "Auberge"], imgC: 0,
    fillQ: "Vous logez à l'_________.", fill: "hôtel", fillA: ["hotel"],
  },
  {
    id: "m15-q4", textQ: "Le séjour va du jeudi 25 au dimanche combien ?", text: ["26", "27", "28"], textC: 2,
    img: ["26", "27", "28"], imgC: 2,
    fillQ: "Le séjour va du jeudi 25 au dimanche _________.", fill: "28",
  },
  {
    id: "m15-q5", textQ: "Quel type d'agence appelle ?", text: ["Une agence de voyages", "Une agence immobilière", "Un garage"], textC: 0,
    img: ["Voyages", "Immobilier", "Garage"], imgC: 0,
    fillQ: "C'est une agence de _________.", fill: "voyages",
  },
  {
    id: "m15-q6", textQ: "Internet est-il inclus ?", text: ["Oui", "Non", "Seulement le matin"], textC: 0,
    img: ["Internet", "Télévision", "Parking"], imgC: 0,
    fillQ: "Internet est _________.", fill: "inclus", fillA: ["inclus dans la réservation"],
  },
  {
    id: "m15-q7", textQ: "Que confirme l'agence ?", text: ["La réservation", "L'annulation", "Le retard"], textC: 0,
    img: ["Réservation", "Annulation", "Retard"], imgC: 0,
    fillQ: "L'agence confirme votre _________.", fill: "réservation", fillA: ["reservation"],
  },
  {
    id: "m15-q8", textQ: "Le petit-déjeuner est-il inclus ?", text: ["Oui", "Non", "Seulement le week-end"], textC: 0,
    img: ["Petit-déjeuner", "Déjeuner", "Dîner"], imgC: 0,
    fillQ: "Le _________ est inclus.", fill: "petit-déjeuner", fillA: ["petit-dejeuner", "petit déjeuner"],
  },
  {
    id: "m15-q9", textQ: "Quel moyen de transport est recommandé pour l'hôtel ?", text: ["Le taxi", "Le bus", "Le train"], textC: 0,
    img: ["Taxi", "Bus", "Train"], imgC: 0,
    fillQ: "Allez à l'hôtel en _________.", fill: "taxi",
  },
  {
    id: "m15-q10", textQ: "Combien de jours dure le séjour (du 25 au 28) ?", text: ["Deux jours", "Trois jours", "Quatre jours"], textC: 2,
    img: ["2 jours", "3 jours", "4 jours"], imgC: 2,
    fillQ: "Le séjour dure _________ jours.", fill: "quatre", fillA: ["4"],
  },
]);

const MESSAGE_16 = buildPool("base", "message-16", [
  {
    id: "m16-q1", textQ: "Qu'est-ce qui est arrivé au magasin ?", text: ["Un livre", "Un jeu vidéo", "Un vêtement"], textC: 1,
    img: ["Livre", "Jeu vidéo", "Vêtement"], imgC: 1,
    fillQ: "La commande est un jeu _________.", fill: "vidéo", fillA: ["video"],
  },
  {
    id: "m16-q2", textQ: "À partir de quand peut-on le chercher ?", text: ["Jeudi", "Vendredi", "Samedi"], textC: 1,
    img: ["Jeu vidéo", "Magasin", "Vendredi"], imgC: 0,
    fillQ: "On peut venir le chercher à partir de _________.", fill: "vendredi",
  },
  {
    id: "m16-q3", textQ: "Quels sont les horaires du magasin ?", text: ["De 8 h à 18 h", "De 9 h à 19 h", "De 10 h à 20 h"], textC: 1,
    img: ["8 h–18 h", "9 h–19 h", "10 h–20 h"], imgC: 1,
    fillQ: "Le magasin est ouvert de 9 h à _________ h.", fill: "19", fillA: ["dix-neuf"],
  },
  {
    id: "m16-q4", textQ: "Qu'est-ce qu'il ne faut pas oublier ?", text: ["Sa carte bancaire", "Sa pièce d'identité", "Son téléphone"], textC: 1,
    img: ["Carte bancaire", "Pièce d'identité", "Téléphone"], imgC: 1,
    fillQ: "Il ne faut pas oublier sa pièce d'_________.", fill: "identité", fillA: ["identite"],
  },
  {
    id: "m16-q5", textQ: "Quand a-t-on commandé ?", text: ["Cette semaine", "La semaine dernière", "Le mois dernier"], textC: 1,
    img: ["Cette semaine", "Semaine dernière", "Mois dernier"], imgC: 1,
    fillQ: "La commande a été faite la semaine _________.", fill: "dernière",
  },
  {
    id: "m16-q6", textQ: "Le magasin est-il ouvert sans interruption ?", text: ["Oui, non-stop", "Non, fermé à midi", "Non, fermé le soir"], textC: 0,
    img: ["Non-stop", "Fermé midi", "Fermé soir"], imgC: 0,
    fillQ: "Le magasin est ouvert de 9 h à 19 h _________.", fill: "non-stop", fillA: ["non stop"],
  },
  {
    id: "m16-q7", textQ: "Quel type de magasin appelle ?", text: ["Un magasin de jeux", "Un garage", "Une boulangerie"], textC: 0,
    img: ["Jeu vidéo", "Garage", "Boulangerie"], imgC: 0,
    fillQ: "C'est un magasin de _________.", fill: "jeux", fillA: ["jeu vidéo", "jeux vidéo"],
  },
  {
    id: "m16-q8", textQ: "La commande est-elle prête ?", text: ["Oui", "Non", "Elle est annulée"], textC: 0,
    img: ["Prêt", "Attente", "Annulé"], imgC: 0,
    fillQ: "La commande est _________.", fill: "arrivée", fillA: ["prête", "prete"],
  },
  {
    id: "m16-q9", textQ: "À quelle heure ouvre le magasin ?", text: ["8 heures", "9 heures", "10 heures"], textC: 1,
    img: ["8 h", "9 h", "10 h"], imgC: 1,
    fillQ: "Le magasin ouvre à _________ heures.", fill: "9", fillA: ["neuf"],
  },
  {
    id: "m16-q10", textQ: "Quel document faut-il apporter ?", text: ["Un passeport", "Une pièce d'identité", "Un ticket"], textC: 1,
    img: ["Passeport", "Pièce d'identité", "Ticket"], imgC: 1,
    fillQ: "N'oubliez pas votre pièce d'_________.", fill: "identité", fillA: ["identite"],
  },
]);

export const CO_QUESTION_POOLS_BASE_MESSAGES: Record<string, COMultiQuestion[]> = {
  "base-message-1": MESSAGE_1,
  "base-message-2": MESSAGE_2,
  "base-message-3": MESSAGE_3,
  "base-message-4": MESSAGE_4,
  "base-message-5": MESSAGE_5,
  "base-message-6": MESSAGE_6,
  "base-message-7": MESSAGE_7,
  "base-message-8": MESSAGE_8,
  "base-message-9": MESSAGE_9,
  "base-message-10": MESSAGE_10,
  "base-message-11": MESSAGE_11,
  "base-message-12": MESSAGE_12,
  "base-message-13": MESSAGE_13,
  "base-message-14": MESSAGE_14,
  "base-message-15": MESSAGE_15,
  "base-message-16": MESSAGE_16,
};
