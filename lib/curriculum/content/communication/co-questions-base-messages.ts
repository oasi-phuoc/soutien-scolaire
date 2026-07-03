import { buildPool, type COMultiQuestion } from "./co-questions-helpers";

const MESSAGE_1 = buildPool("base", "message-1", [
  {
    id: "m1-q1", textQ: "Qui laisse ce message ?", text: ["Isabelle", "Laëtitia", "Rose"], textC: 0,
    img: ["Isabelle", "Laëtitia", "Rose"], imgC: 0,
    fillQ: "C'est _________ qui laisse le message.", fill: "Isabelle", fillA: ["isabelle"],
  },
  {
    id: "m1-q2", textQ: "Quel jour veut-elle sortir ?", text: ["Jeudi soir", "Vendredi soir", "Samedi soir"], textC: 1,
    img: ["Jeudi", "Vendredi", "Samedi"], imgC: 1,
    fillQ: "Elle propose de sortir _________ soir.", fill: "vendredi", fillA: ["vendredi soir"],
  },
  {
    id: "m1-q3", textQ: "Comment s'appelle le bar ?", text: ["Le Mambo", "Le Giovanni", "Le Bolide"], textC: 0,
    img: ["Le Mambo", "Le Giovanni", "Le Bolide"], imgC: 0,
    fillQ: "Le bar s'appelle le _________.", fill: "Mambo", fillA: ["mambo"],
  },
  {
    id: "m1-q4", textQ: "Quel moyen de transport faut-il prendre ?", text: ["Le tramway", "Le bus", "Le train"], textC: 1,
    img: ["Tramway", "Bus", "Train"], imgC: 1,
    fillQ: "Il faut prendre le _________.", fill: "bus",
  },
  {
    id: "m1-q5", textQ: "À quelle adresse se trouve le bar ?", text: ["15, rue des Peupliers", "42, rue des Guerriers-Samouraïs", "23, rue des Clochottes"], textC: 1,
    img: ["Rue des Peupliers", "Rue des Guerriers-Samouraïs", "Rue des Clochottes"], imgC: 1,
    fillQ: "Le bar est au 42, rue des _________.", fill: "Guerriers-Samouraïs", fillA: ["guerriers-samourais"],
  },
]);

const MESSAGE_2 = buildPool("base", "message-2", [
  {
    id: "m2-q1", textQ: "Qui laisse ce message ?", text: ["Davy", "Laëtitia", "Geneviève"], textC: 1,
    img: ["Davy", "Laëtitia", "Geneviève"], imgC: 1,
    fillQ: "C'est _________ qui appelle.", fill: "Laëtitia", fillA: ["laetitia"],
  },
  {
    id: "m2-q2", textQ: "À quelle heure est le rendez-vous ?", text: ["Midi", "Midi et quart", "Midi et demi"], textC: 1,
    img: ["12 h", "12 h 15", "12 h 30"], imgC: 1,
    fillQ: "Le rendez-vous est à midi et _________.", fill: "quart",
  },
  {
    id: "m2-q3", textQ: "Où mangent-ils ?", text: ["Au restaurant", "Chez Laëtitia", "À la piscine"], textC: 1,
    img: ["Restaurant", "Chez Laëtitia", "Piscine"], imgC: 1,
    fillQ: "Ils mangent chez _________.", fill: "moi", fillA: ["laetitia", "elle"],
  },
  {
    id: "m2-q4", textQ: "Quelle activité font-ils après le repas ?", text: ["Aller au cinéma", "Aller à la piscine", "Faire les courses"], textC: 1,
    img: ["Cinéma", "Piscine", "Courses"], imgC: 1,
    fillQ: "Après, ils vont à la _________.", fill: "piscine",
  },
  {
    id: "m2-q5", textQ: "Qu'est-ce qu'il ne faut pas oublier ?", text: ["Un maillot de bain", "Des lunettes de soleil", "Un appareil photo"], textC: 1,
    img: ["Maillot", "Lunettes de soleil", "Appareil photo"], imgC: 1,
    fillQ: "Il ne faut pas oublier les lunettes de _________.", fill: "soleil",
  },
]);

const MESSAGE_3 = buildPool("base", "message-3", [
  {
    id: "m3-q1", textQ: "Qui laisse ce message ?", text: ["Florian", "Hugo", "Alex"], textC: 1,
    img: ["Florian", "Hugo", "Alex"], imgC: 1,
    fillQ: "C'est _________ qui appelle.", fill: "Hugo",
  },
  {
    id: "m3-q2", textQ: "D'où revient Florian ?", text: ["D'Allemagne", "De Suisse", "De Belgique"], textC: 0,
    img: ["Allemagne", "Suisse", "Belgique"], imgC: 0,
    fillQ: "Florian revient d'_________.", fill: "Allemagne", fillA: ["allemagne"],
  },
  {
    id: "m3-q3", textQ: "Combien de temps reste Florian à Toulouse ?", text: ["Deux jours", "Quatre jours", "Une semaine"], textC: 1,
    img: ["2 jours", "4 jours", "7 jours"], imgC: 1,
    fillQ: "Il reste _________ jours à Toulouse.", fill: "quatre", fillA: ["4"],
  },
  {
    id: "m3-q4", textQ: "Quand Hugo propose-t-il le dîner ?", text: ["Mercredi soir", "Jeudi soir", "Vendredi soir"], textC: 1,
    img: ["Mercredi", "Jeudi", "Vendredi"], imgC: 1,
    fillQ: "Le dîner est proposé _________ soir.", fill: "jeudi",
  },
  {
    id: "m3-q5", textQ: "Qu'est-ce que l'interlocuteur doit apporter ?", text: ["Du pain", "Des tomates", "Du fromage"], textC: 1,
    img: ["Pain", "Tomates", "Fromage"], imgC: 1,
    fillQ: "Il faut apporter des _________.", fill: "tomates",
  },
]);

const MESSAGE_4 = buildPool("base", "message-4", [
  {
    id: "m4-q1", textQ: "Qui laisse ce message ?", text: ["Alex", "Rose", "Mégane"], textC: 1,
    img: ["Alex", "Rose", "Mégane"], imgC: 1,
    fillQ: "C'est _________ qui appelle.", fill: "Rose",
  },
  {
    id: "m4-q2", textQ: "Où est la réservation ?", text: ["Au restaurant Giovanni", "À la pizzeria Giovanni", "Au bar Mambo"], textC: 1,
    img: ["Restaurant Giovanni", "Pizzeria Giovanni", "Bar Mambo"], imgC: 1,
    fillQ: "La réservation est à la pizzeria _________.", fill: "Giovanni", fillA: ["giovanni"],
  },
  {
    id: "m4-q3", textQ: "À quelle heure est le rendez-vous ?", text: ["Midi", "Midi et quart", "Midi et demi"], textC: 2,
    img: ["12 h", "12 h 15", "12 h 30"], imgC: 2,
    fillQ: "Le rendez-vous est à midi et _________.", fill: "demi", fillA: ["demie"],
  },
  {
    id: "m4-q4", textQ: "Combien de personnes seront présentes ?", text: ["Deux", "Trois", "Quatre"], textC: 1,
    img: ["2", "3", "4"], imgC: 1,
    fillQ: "Ils seront _________ personnes.", fill: "trois", fillA: ["3"],
  },
  {
    id: "m4-q5", textQ: "Quelle est l'adresse du restaurant ?", text: ["3, rue de la Gare", "15, rue des Peupliers", "42, rue des Guerriers-Samouraïs"], textC: 1,
    img: ["Rue de la Gare", "Rue des Peupliers", "Rue des Guerriers-Samouraïs"], imgC: 1,
    fillQ: "L'adresse est 15, rue des _________.", fill: "Peupliers", fillA: ["peupliers"],
  },
]);

const MESSAGE_5 = buildPool("base", "message-5", [
  {
    id: "m5-q1", textQ: "Qui laisse ce message ?", text: ["Alex", "Antony", "Sylvain"], textC: 0,
    img: ["Alex", "Antony", "Sylvain"], imgC: 0,
    fillQ: "C'est _________ qui appelle.", fill: "Alex", fillA: ["alex"],
  },
  {
    id: "m5-q2", textQ: "Où donne-t-il rendez-vous ?", text: ["Au nouveau cinéma", "À la pizzeria", "Au bar Mambo"], textC: 0,
    img: ["Cinéma", "Pizzeria", "Bar"], imgC: 0,
    fillQ: "Le rendez-vous est au nouveau _________.", fill: "cinéma", fillA: ["cinema"],
  },
  {
    id: "m5-q3", textQ: "Quel bus faut-il prendre ?", text: ["Le bus 16", "Le bus 112", "Le bus 4"], textC: 0,
    img: ["Bus 16", "Bus 112", "Bus 4"], imgC: 0,
    fillQ: "Il faut prendre le bus numéro _________.", fill: "16",
  },
  {
    id: "m5-q4", textQ: "À quel arrêt doit-on descendre ?", text: ["Nouveau Cinéma", "Centre commercial", "Rue de la Gare"], textC: 0,
    img: ["Nouveau Cinéma", "Centre commercial", "Rue de la Gare"], imgC: 0,
    fillQ: "Il faut descendre à l'arrêt Nouveau _________.", fill: "Cinéma", fillA: ["cinema"],
  },
  {
    id: "m5-q5", textQ: "Combien coûte une place de cinéma ?", text: ["5 euros", "7 euros", "7,50 euros"], textC: 1,
    img: ["5 €", "7 €", "7,50 €"], imgC: 1,
    fillQ: "La place coûte _________ euros.", fill: "7", fillA: ["sept"],
  },
]);

const MESSAGE_6 = buildPool("base", "message-6", [
  {
    id: "m6-q1", textQ: "Qui laisse ce message ?", text: ["Sylvain", "Hugo", "Adil"], textC: 0,
    img: ["Sylvain", "Hugo", "Adil"], imgC: 0,
    fillQ: "C'est _________ qui appelle.", fill: "Sylvain", fillA: ["sylvain"],
  },
  {
    id: "m6-q2", textQ: "Quelle ville vont-ils visiter ?", text: ["Toulouse", "Strasbourg", "Bruxelles"], textC: 1,
    img: ["Toulouse", "Strasbourg", "Bruxelles"], imgC: 1,
    fillQ: "Ils vont visiter _________.", fill: "Strasbourg", fillA: ["strasbourg"],
  },
  {
    id: "m6-q3", textQ: "Quel moyen de transport prennent-ils ?", text: ["Le bus", "Le train", "La voiture"], textC: 1,
    img: ["Bus", "Train", "Voiture"], imgC: 1,
    fillQ: "Ils prennent le _________.", fill: "train",
  },
  {
    id: "m6-q4", textQ: "À quelle heure part le train ?", text: ["8 h 56", "9 h", "15 h"], textC: 0,
    img: ["8 h 56", "9 h", "15 h"], imgC: 0,
    fillQ: "Le train part à 8 h _________.", fill: "56",
  },
  {
    id: "m6-q5", textQ: "Qu'est-ce qu'il ne faut pas oublier ?", text: ["Les lunettes de soleil", "L'appareil photo", "La pièce d'identité"], textC: 1,
    img: ["Lunettes", "Appareil photo", "Pièce d'identité"], imgC: 1,
    fillQ: "Il ne faut pas oublier l'appareil _________.", fill: "photo",
  },
]);

const MESSAGE_7 = buildPool("base", "message-7", [
  {
    id: "m7-q1", textQ: "Qui laisse ce message ?", text: ["Antony", "Alex", "Cristina"], textC: 0,
    img: ["Antony", "Alex", "Cristina"], imgC: 0,
    fillQ: "C'est _________ qui appelle.", fill: "Antony", fillA: ["antony"],
  },
  {
    id: "m7-q2", textQ: "Combien d'invitations a-t-il ?", text: ["Une", "Deux", "Trois"], textC: 1,
    img: ["1", "2", "3"], imgC: 1,
    fillQ: "Il a _________ invitations.", fill: "deux", fillA: ["2"],
  },
  {
    id: "m7-q3", textQ: "À quelle heure finit-il le travail ?", text: ["14 heures", "15 heures", "16 heures"], textC: 1,
    img: ["14 h", "15 h", "16 h"], imgC: 1,
    fillQ: "Il finit le travail à _________ heures.", fill: "15", fillA: ["quinze"],
  },
  {
    id: "m7-q4", textQ: "À quelle heure va-t-il chez le dentiste ?", text: ["15 heures", "16 heures", "18 heures"], textC: 1,
    img: ["15 h", "16 h", "18 h"], imgC: 1,
    fillQ: "Il va chez le dentiste à _________ heures.", fill: "16", fillA: ["seize"],
  },
  {
    id: "m7-q5", textQ: "À quelle séance propose-t-il d'aller ?", text: ["16 heures", "17 heures", "18 heures"], textC: 2,
    img: ["16 h", "17 h", "18 h"], imgC: 2,
    fillQ: "Il propose la séance de _________ heures.", fill: "18", fillA: ["dix-huit"],
  },
]);

const MESSAGE_8 = buildPool("base", "message-8", [
  {
    id: "m8-q1", textQ: "Qui laisse ce message ?", text: ["Mégane", "Rose", "Cristina"], textC: 0,
    img: ["Mégane", "Rose", "Cristina"], imgC: 0,
    fillQ: "C'est _________ qui appelle.", fill: "Mégane", fillA: ["megane"],
  },
  {
    id: "m8-q2", textQ: "Pour quelle date appelle-t-elle ?", text: ["Le 16 mars", "Le 26 mars", "Le 6 avril"], textC: 1,
    img: ["16 mars", "26 mars", "6 avril"], imgC: 1,
    fillQ: "Elle appelle pour le 26 _________.", fill: "mars",
  },
  {
    id: "m8-q3", textQ: "À partir de quelle heure est-elle libre ?", text: ["1 heure", "2 heures", "3 heures"], textC: 1,
    img: ["13 h", "14 h", "15 h"], imgC: 1,
    fillQ: "Elle est libre à partir de 2 heures de l'_________.", fill: "après-midi", fillA: ["apres-midi"],
  },
  {
    id: "m8-q4", textQ: "Quelle activité propose-t-elle l'après-midi ?", text: ["Aller au musée ou au cinéma", "Faire du sport", "Aller au restaurant"], textC: 0,
    img: ["Musée ou cinéma", "Sport", "Restaurant"], imgC: 0,
    fillQ: "L'après-midi, on peut aller au musée ou au _________.", fill: "cinéma", fillA: ["cinema"],
  },
  {
    id: "m8-q5", textQ: "À quelle heure propose-t-elle de dîner si l'autre personne ne peut pas ?", text: ["6 heures", "7 heures", "8 heures"], textC: 1,
    img: ["18 h", "19 h", "20 h"], imgC: 1,
    fillQ: "Le dîner est proposé vers _________ heures.", fill: "7", fillA: ["sept", "19"],
  },
]);

const MESSAGE_9 = buildPool("base", "message-9", [
  {
    id: "m9-q1", textQ: "Qui laisse ce message ?", text: ["Adil", "Sylvain", "Hugo"], textC: 0,
    img: ["Adil", "Sylvain", "Hugo"], imgC: 0,
    fillQ: "C'est _________ qui appelle.", fill: "Adil", fillA: ["adil"],
  },
  {
    id: "m9-q2", textQ: "Quel pays a-t-il visité ?", text: ["L'Allemagne", "La Suisse", "La Belgique"], textC: 1,
    img: ["Allemagne", "Suisse", "Belgique"], imgC: 1,
    fillQ: "Il a adoré la _________.", fill: "Suisse", fillA: ["suisse"],
  },
  {
    id: "m9-q3", textQ: "Quel sport a-t-il pratiqué ?", text: ["La natation", "Le ski", "Le tennis"], textC: 1,
    img: ["Natation", "Ski", "Tennis"], imgC: 1,
    fillQ: "Il a fait du _________ tous les jours.", fill: "ski",
  },
  {
    id: "m9-q4", textQ: "Quel plat suisse n'a-t-il pas aimé ?", text: ["La fondue", "Le chocolat", "Les röstis"], textC: 2,
    img: ["Fondue", "Chocolat", "Röstis"], imgC: 2,
    fillQ: "Il a détesté les _________.", fill: "röstis", fillA: ["rostis"],
  },
  {
    id: "m9-q5", textQ: "Quel cadeau a-t-il pour son ami ?", text: ["Un livre", "Une montre", "Un jeu vidéo"], textC: 1,
    img: ["Livre", "Montre", "Jeu vidéo"], imgC: 1,
    fillQ: "Le cadeau est une _________.", fill: "montre",
  },
]);

const MESSAGE_10 = buildPool("base", "message-10", [
  {
    id: "m10-q1", textQ: "Qui laisse ce message ?", text: ["Cristina", "Armelle", "Mégane"], textC: 0,
    img: ["Cristina", "Armelle", "Mégane"], imgC: 0,
    fillQ: "C'est _________ qui appelle.", fill: "Cristina", fillA: ["cristina"],
  },
  {
    id: "m10-q2", textQ: "Quel type d'événement est-ce ?", text: ["Un concert", "Une exposition de peintures", "Un match de sport"], textC: 1,
    img: ["Concert", "Exposition", "Match"], imgC: 1,
    fillQ: "C'est une exposition de _________.", fill: "peintures",
  },
  {
    id: "m10-q3", textQ: "Où se retrouvent-ils ?", text: ["Devant l'espace Matisse", "Devant le cinéma", "Devant la piscine"], textC: 0,
    img: ["Espace Matisse", "Cinéma", "Piscine"], imgC: 0,
    fillQ: "Le rendez-vous est devant l'espace _________.", fill: "Matisse", fillA: ["matisse"],
  },
  {
    id: "m10-q4", textQ: "À quelle heure est le rendez-vous ?", text: ["5 heures", "6 heures", "7 heures"], textC: 1,
    img: ["17 h", "18 h", "19 h"], imgC: 1,
    fillQ: "Le rendez-vous est à _________ heures.", fill: "6", fillA: ["six", "18"],
  },
  {
    id: "m10-q5", textQ: "Combien coûte l'entrée ?", text: ["5 euros", "7 euros", "7,50 euros"], textC: 2,
    img: ["5 €", "7 €", "7,50 €"], imgC: 2,
    fillQ: "L'entrée coûte 7,50 _________.", fill: "euros",
  },
]);

const MESSAGE_11 = buildPool("base", "message-11", [
  {
    id: "m11-q1", textQ: "Qui appelle ?", text: ["Le garage Bolide", "Le magasin Méga J", "L'agence Lacrosse"], textC: 0,
    img: ["Garage Bolide", "Méga J", "Lacrosse"], imgC: 0,
    fillQ: "C'est le garage _________ qui appelle.", fill: "Bolide", fillA: ["bolide"],
  },
  {
    id: "m11-q2", textQ: "Qu'est-ce qui est prêt ?", text: ["Une commande", "La voiture", "Une réservation"], textC: 1,
    img: ["Commande", "Voiture", "Réservation"], imgC: 1,
    fillQ: "La _________ est prête.", fill: "voiture",
  },
  {
    id: "m11-q3", textQ: "Jusqu'à quelle heure le garage est-il ouvert le matin ?", text: ["11 heures", "Midi", "13 heures"], textC: 1,
    img: ["11 h", "12 h", "13 h"], imgC: 1,
    fillQ: "Le garage ouvre de huit heures à _________.", fill: "midi",
  },
  {
    id: "m11-q4", textQ: "Combien coûtent les réparations ?", text: ["123 euros", "223 euros", "323 euros"], textC: 1,
    img: ["123 €", "223 €", "323 €"], imgC: 1,
    fillQ: "Les réparations sont de _________ euros.", fill: "223",
  },
  {
    id: "m11-q5", textQ: "Comment faut-il payer ?", text: ["En espèces", "Par carte bancaire", "Par chèque"], textC: 1,
    img: ["Espèces", "Carte bancaire", "Chèque"], imgC: 1,
    fillQ: "Il faut payer par carte _________.", fill: "bancaire",
  },
]);

const MESSAGE_12 = buildPool("base", "message-12", [
  {
    id: "m12-q1", textQ: "Qui appelle ?", text: ["Monsieur Dujardin", "Madame Lara", "Le directeur commercial"], textC: 0,
    img: ["M. Dujardin", "Mme Lara", "Directeur"], imgC: 0,
    fillQ: "C'est monsieur _________ qui appelle.", fill: "Dujardin", fillA: ["dujardin"],
  },
  {
    id: "m12-q2", textQ: "Quand a lieu la réunion ?", text: ["Ce matin", "Demain matin", "Demain soir"], textC: 1,
    img: ["Ce matin", "Demain matin", "Demain soir"], imgC: 1,
    fillQ: "La réunion est _________ matin.", fill: "demain",
  },
  {
    id: "m12-q3", textQ: "À quelle heure est la réunion ?", text: ["10 heures", "10 heures et demie", "11 heures"], textC: 1,
    img: ["10 h", "10 h 30", "11 h"], imgC: 1,
    fillQ: "La réunion est à dix heures et _________.", fill: "demie", fillA: ["demi"],
  },
  {
    id: "m12-q4", textQ: "Qui sera présent à la réunion ?", text: ["Le directeur commercial et la comptable", "Le directeur et le garage", "La comptable seule"], textC: 0,
    img: ["Directeur + comptable", "Directeur + garage", "Comptable seule"], imgC: 0,
    fillQ: "Le directeur commercial et la _________ seront présents.", fill: "comptable",
  },
  {
    id: "m12-q5", textQ: "Quel est le numéro de téléphone ?", text: ["03 88 17 40 15", "04 78 96 12 14", "01 57 32 32 33"], textC: 1,
    img: ["03 88...", "04 78...", "01 57..."], imgC: 1,
    fillQ: "Le numéro commence par 04 78 _________.", fill: "96", fillA: ["04 78 96 12 14"],
  },
]);

const MESSAGE_13 = buildPool("base", "message-13", [
  {
    id: "m13-q1", textQ: "Qui appelle ?", text: ["Madame Lara", "Monsieur Dujardin", "Le club Formule +"], textC: 0,
    img: ["Mme Lara", "M. Dujardin", "Formule +"], imgC: 0,
    fillQ: "C'est madame _________ qui appelle.", fill: "Lara", fillA: ["lara"],
  },
  {
    id: "m13-q2", textQ: "Quel type de logement propose-t-elle ?", text: ["Un studio", "Un loft", "Une maison"], textC: 1,
    img: ["Studio", "Loft", "Maison"], imgC: 1,
    fillQ: "Elle propose un _________.", fill: "loft",
  },
  {
    id: "m13-q3", textQ: "Où se situe le logement ?", text: ["Près de la gare", "Près de la bibliothèque municipale", "Près de la piscine"], textC: 1,
    img: ["Gare", "Bibliothèque", "Piscine"], imgC: 1,
    fillQ: "Le loft est près de la bibliothèque _________.", fill: "municipale",
  },
  {
    id: "m13-q4", textQ: "Avant quand faut-il rappeler pour visiter ?", text: ["Mardi 18 heures", "Mercredi 18 heures", "Jeudi 18 heures"], textC: 1,
    img: ["Mardi 18 h", "Mercredi 18 h", "Jeudi 18 h"], imgC: 1,
    fillQ: "Il faut rappeler avant _________, 18 heures.", fill: "mercredi",
  },
  {
    id: "m13-q5", textQ: "Quel est le numéro de téléphone ?", text: ["03 88 17 40 15", "04 78 96 12 14", "07 56 13 88 42"], textC: 0,
    img: ["03 88...", "04 78...", "07 56..."], imgC: 0,
    fillQ: "Le numéro est 03 88 17 40 _________.", fill: "15",
  },
]);

const MESSAGE_14 = buildPool("base", "message-14", [
  {
    id: "m14-q1", textQ: "Qui appelle ?", text: ["Le club Formule +", "Le garage Bolide", "L'agence immobilière"], textC: 0,
    img: ["Formule +", "Garage Bolide", "Agence immo"], imgC: 0,
    fillQ: "C'est le club de sports _________ qui appelle.", fill: "Formule +", fillA: ["formule +", "formule"],
  },
  {
    id: "m14-q2", textQ: "Combien coûte l'abonnement par mois ?", text: ["30 euros", "40 euros", "50 euros"], textC: 1,
    img: ["30 €", "40 €", "50 €"], imgC: 1,
    fillQ: "L'abonnement coûte _________ euros par mois.", fill: "40", fillA: ["quarante"],
  },
  {
    id: "m14-q3", textQ: "Quelles installations peut-on utiliser ?", text: ["La salle de fitness et la piscine", "Le tennis et le football", "Le sauna seulement"], textC: 0,
    img: ["Fitness + piscine", "Tennis + foot", "Sauna"], imgC: 0,
    fillQ: "On peut utiliser la salle de fitness et la _________.", fill: "piscine",
  },
  {
    id: "m14-q4", textQ: "Quels jours peut-on venir au club ?", text: ["Du lundi au vendredi", "Du lundi au samedi", "Tous les jours"], textC: 1,
    img: ["Lun–ven", "Lun–sam", "Tous les jours"], imgC: 1,
    fillQ: "Le club est ouvert du lundi au _________.", fill: "samedi",
  },
  {
    id: "m14-q5", textQ: "À quelle heure ferme-t-on le week-end ?", text: ["19 heures", "21 heures", "23 heures"], textC: 0,
    img: ["19 h", "21 h", "23 h"], imgC: 0,
    fillQ: "Le week-end, fermeture à _________ heures.", fill: "19", fillA: ["dix-neuf"],
  },
]);

const MESSAGE_15 = buildPool("base", "message-15", [
  {
    id: "m15-q1", textQ: "Qui appelle ?", text: ["L'agence Lacrosse", "Le magasin Méga J", "L'hôtel Gamma"], textC: 0,
    img: ["Lacrosse", "Méga J", "Hôtel Gamma"], imgC: 0,
    fillQ: "C'est l'agence de voyages _________ qui appelle.", fill: "Lacrosse", fillA: ["lacrosse"],
  },
  {
    id: "m15-q2", textQ: "Dans quel hôtel loge le client ?", text: ["Hôtel Gamma", "Hôtel Beaulieu", "Hôtel Matisse"], textC: 0,
    img: ["Gamma", "Beaulieu", "Matisse"], imgC: 0,
    fillQ: "Le client loge à l'hôtel _________.", fill: "Gamma", fillA: ["gamma"],
  },
  {
    id: "m15-q3", textQ: "Dans quelle ville ?", text: ["Paris", "Bruxelles", "Berlin"], textC: 1,
    img: ["Paris", "Bruxelles", "Berlin"], imgC: 1,
    fillQ: "L'hôtel est à _________.", fill: "Bruxelles", fillA: ["bruxelles"],
  },
  {
    id: "m15-q4", textQ: "Qu'est-ce qui est inclus ?", text: ["Le déjeuner et Internet", "Le petit-déjeuner et Internet", "Le dîner et le parking"], textC: 1,
    img: ["Déjeuner + Internet", "Petit-déj + Internet", "Dîner + parking"], imgC: 1,
    fillQ: "Le petit-déjeuner et _________ sont inclus.", fill: "Internet", fillA: ["internet"],
  },
  {
    id: "m15-q5", textQ: "Comment conseille-t-on d'aller à l'hôtel ?", text: ["En bus", "En taxi", "À pied"], textC: 1,
    img: ["Bus", "Taxi", "À pied"], imgC: 1,
    fillQ: "Il est conseillé d'y aller en _________.", fill: "taxi",
  },
]);

const MESSAGE_16 = buildPool("base", "message-16", [
  {
    id: "m16-q1", textQ: "Qui appelle ?", text: ["Le magasin Méga J", "Le garage Bolide", "Le club Formule +"], textC: 0,
    img: ["Méga J", "Garage Bolide", "Formule +"], imgC: 0,
    fillQ: "C'est le magasin _________ qui appelle.", fill: "Méga J", fillA: ["mega j", "méga j"],
  },
  {
    id: "m16-q2", textQ: "Qu'est-ce qui est arrivé au magasin ?", text: ["Un livre", "Un jeu vidéo", "Une télévision"], textC: 1,
    img: ["Livre", "Jeu vidéo", "Télévision"], imgC: 1,
    fillQ: "La commande est un jeu _________.", fill: "vidéo", fillA: ["video"],
  },
  {
    id: "m16-q3", textQ: "À partir de quand peut-on le chercher ?", text: ["Jeudi", "Vendredi", "Samedi"], textC: 1,
    img: ["Jeudi", "Vendredi", "Samedi"], imgC: 1,
    fillQ: "On peut venir le chercher à partir de _________.", fill: "vendredi",
  },
  {
    id: "m16-q4", textQ: "Quelle est l'adresse du magasin ?", text: ["15, rue des Peupliers", "23, rue des Clochottes", "42, rue des Guerriers-Samouraïs"], textC: 1,
    img: ["Rue des Peupliers", "Rue des Clochottes", "Rue des Guerriers-Samouraïs"], imgC: 1,
    fillQ: "Le magasin est au 23, rue des _________.", fill: "Clochottes", fillA: ["clochottes"],
  },
  {
    id: "m16-q5", textQ: "Qu'est-ce qu'il ne faut pas oublier ?", text: ["Sa carte bancaire", "Sa pièce d'identité", "Son téléphone"], textC: 1,
    img: ["Carte bancaire", "Pièce d'identité", "Téléphone"], imgC: 1,
    fillQ: "Il ne faut pas oublier sa pièce d'_________.", fill: "identité", fillA: ["identite"],
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
