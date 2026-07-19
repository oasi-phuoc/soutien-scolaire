import { buildPool, type COMultiQuestion } from "./co-questions-helpers";

const CONVERSATION_11 = buildPool("avance", "conversation-11", [
  {
    id: "ac11-q1", textQ: "Pourquoi le premier candidat arrive-t-il en retard ?", text: ["Son réveil n'a pas sonné et il a été bloqué dans les embouteillages","Il a oublié l'heure du rendez-vous","Il a pris le mauvais bus"], textC: 0,
    img: ["Réveil/embouteillages","Heure oubliée","Mauvais bus"], imgC: 0,
    fillQ: "Le candidat a été bloqué dans les _________.", fill: "embouteillages",
  },
  {
    id: "ac11-q2", textQ: "Que s'est-il passé avec la tasse de café du deuxième candidat ?", text: ["Il l'a renversée sur son chemisier","Il l'a offerte à la recruteuse","Il l'a oubliée chez lui"], textC: 0,
    img: ["Renversée chemisier","Offerte","Oubliée"], imgC: 0,
    fillQ: "Il a renversé son café sur son _________.", fill: "chemisier",
  },
  {
    id: "ac11-q3", textQ: "Quelle qualité la recruteuse apprécie-t-elle chez ce candidat ?", text: ["L'humour","La ponctualité","Le silence"], textC: 0,
    img: ["Humour","Ponctualité","Silence"], imgC: 0,
    fillQ: "La recruteuse apprécie beaucoup l'_________.", fill: "humour",
  },
  {
    id: "ac11-q4", textQ: "Que fait la troisième candidate quand elle est stressée ?", text: ["Elle rougit","Elle pleure","Elle s'en va"], textC: 0,
    img: ["Rougit","Pleure","Part"], imgC: 0,
    fillQ: "Quand elle est stressée, elle _________.", fill: "rougit",
  },
  {
    id: "ac11-q5", textQ: "Quel conseil lui donne-t-on pour se calmer ?", text: ["Respirer profondément","Parler plus vite","S'excuser encore"], textC: 0,
    img: ["Respirer","Parler vite","S'excuser"], imgC: 0,
    fillQ: "On lui conseille de respirer _________.", fill: "profondément",
    fillA: ["profondement"],
  },
  {
    id: "ac11-q6", textQ: "Où la candidate a-t-elle vu l'annonce d'embauche ?", text: ["Sur Internet et dans des publications","Uniquement à la radio","Dans une vitrine"], textC: 0,
    img: ["Internet/publications","Radio","Vitrine"], imgC: 0,
    fillQ: "Elle a vu l'annonce sur _________.", fill: "Internet",
    fillA: ["internet"],
  },
]);

const CONVERSATION_12 = buildPool("avance", "conversation-12", [
  {
    id: "ac12-q1", textQ: "Quel est le site le plus visité de France?", text: ["Disneyland Paris","La Tour Eiffel","Le Louvre"], textC: 0,
    img: ["Disneyland","Tour Eiffel","Louvre"], imgC: 0,
    fillQ: "Le plus visité est _________ Paris.", fill: "Disneyland",
    fillA: ["disneyland"],
  },
  {
    id: "ac12-q2", textQ: "Combien de visiteurs environ pour Disneyland Paris ?", text: ["Près de 16 millions","Près de 7 millions","Près de 6 millions"], textC: 0,
    img: ["16 M","7 M","6 M"], imgC: 0,
    fillQ: "Disneyland Paris compte près de ___ millions de visiteurs.", fill: "16",
  },
  {
    id: "ac12-q3", textQ: "Quels sites sont ex aequo à la deuxième place ?", text: ["Versailles et le Louvre","La Tour Eiffel et le Louvre","Versailles et Disneyland"], textC: 0,
    img: ["Versailles/Louvre","Eiffel/Louvre","Versailles/Disney"], imgC: 0,
    fillQ: "Versailles et le _________ sont ex aequo.", fill: "Louvre",
    fillA: ["louvre"],
  },
  {
    id: "ac12-q4", textQ: "Combien de visiteurs pour la Tour Eiffel ?", text: ["6 millions","7 millions","3 millions"], textC: 0,
    img: ["6 M","7 M","3 M"], imgC: 0,
    fillQ: "La Tour Eiffel attire ___ millions de visiteurs.", fill: "6",
  },
  {
    id: "ac12-q5", textQ: "Quelle place occupe le Puy du Fou ?", text: ["Septième","Deuxième","Dixième"], textC: 0,
    img: ["7e","2e","10e"], imgC: 0,
    fillQ: "Le Puy du Fou est en ___ position.", fill: "septième",
    fillA: ["7e","7","septieme"],
  },
  {
    id: "ac12-q6", textQ: "Quel monument parmi les dix derniers est un pont ?", text: ["Le pont du Gard","Le pont de Millau","Le pont Neuf"], textC: 0,
    img: ["Pont du Gard","Pont Millau","Pont Neuf"], imgC: 0,
    fillQ: "Le pont cité est le pont du _________.", fill: "Gard",
    fillA: ["gard"],
  },
]);

const CONVERSATION_13 = buildPool("avance", "conversation-13", [
  {
    id: "ac13-q1", textQ: "Quelle marque de livre photo est mentionnée ?", text: ["CEWE","CANON","FUJIFILM"], textC: 0,
    img: ["CEWE","CANON","FUJIFILM"], imgC: 0,
    fillQ: "Il s'agit d'un livre photo _________.", fill: "CEWE",
    fillA: ["cewe"],
  },
  {
    id: "ac13-q2", textQ: "Qui définit le nombre de pages et de photos par page ?", text: ["L'utilisateur","Le logiciel automatiquement","Le service client"], textC: 0,
    img: ["Utilisateur","Logiciel","Service client"], imgC: 0,
    fillQ: "C'est à vous de le _________.", fill: "définir",
    fillA: ["definir"],
  },
  {
    id: "ac13-q3", textQ: "Faut-il ajouter commentaires et cliparts manuellement ?", text: ["Oui","Non, tout est automatique","Non, c'est interdit"], textC: 0,
    img: ["Oui","Automatique","Interdit"], imgC: 0,
    fillQ: "Il faut le faire _________.", fill: "manuellement",
  },
  {
    id: "ac13-q4", textQ: "Que conseille-t-on de faire régulièrement ?", text: ["Sauvegarder ses modifications","Imprimer immédiatement","Supprimer les photos"], textC: 0,
    img: ["Sauvegarder","Imprimer","Supprimer"], imgC: 0,
    fillQ: "Pensez à _________ régulièrement vos modifications.", fill: "sauvegarder",
  },
  {
    id: "ac13-q5", textQ: "Comment importer ses photos dans le logiciel ?", text: ["Glisser-déposer le dossier","Envoyer par courrier","Scanner une à une"], textC: 0,
    img: ["Glisser-déposer","Courrier","Scanner"], imgC: 0,
    fillQ: "Il faut glisser-déposer le dossier au centre de la _________.", fill: "fenêtre",
  },
  {
    id: "ac13-q6", textQ: "Peut-on choisir le type de couverture ?", text: ["Oui","Non","Seulement en noir et blanc"], textC: 0,
    img: ["Oui","Non","N/B seul"], imgC: 0,
    fillQ: "On peut choisir le type de _________.", fill: "couverture",
  },
]);

const CONVERSATION_14 = buildPool("avance", "conversation-14", [
  {
    id: "ac14-q1", textQ: "Quel est le plat préféré des Français?", text: ["Le magret de canard","Les moules-frites","Le couscous"], textC: 0,
    img: ["Magret","Moules-frites","Couscous"], imgC: 0,
    fillQ: "Le plat préféré est le magret de _________.", fill: "canard",
  },
  {
    id: "ac14-q2", textQ: "Quelle place pour les moules-frites ?", text: ["Deuxième","Troisième","Huitième"], textC: 0,
    img: ["2e","3e","8e"], imgC: 0,
    fillQ: "Les moules-frites sont classées en ___ position.", fill: "deuxième",
    fillA: ["2e","2","deuxieme"],
  },
  {
    id: "ac14-q3", textQ: "Quelle place pour le couscous ?", text: ["Troisième","Quatrième","Septième"], textC: 0,
    img: ["3e","4e","7e"], imgC: 0,
    fillQ: "Le couscous est ___ plat préféré.", fill: "troisième",
    fillA: ["3e","3","troisieme"],
  },
  {
    id: "ac14-q4", textQ: "Où se situe la blanquette de veau ?", text: ["Quatrième","Cinquième","Huitième"], textC: 0,
    img: ["4e","5e","8e"], imgC: 0,
    fillQ: "La blanquette de veau est ___ de la liste.", fill: "quatrième",
    fillA: ["4e","4","quatrieme"],
  },
  {
    id: "ac14-q5", textQ: "Quelle place pour le bœuf bourguignon ?", text: ["Huitième","Cinquième","Deuxième"], textC: 0,
    img: ["8e","5e","2e"], imgC: 0,
    fillQ: "Le bœuf bourguignon est classé _________.", fill: "huitième",
    fillA: ["8e","8","huitieme"],
  },
  {
    id: "ac14-q6", textQ: "Quel plat mijoté Lou prépare-t-elle ce soir ?", text: ["Du magret de canard","Un couscous","Une blanquette"], textC: 0,
    img: ["Magret","Couscous","Blanquette"], imgC: 0,
    fillQ: "Ce soir, on mange du magret de _________.", fill: "canard",
  },
]);

const CONVERSATION_15 = buildPool("avance", "conversation-15", [
  {
    id: "ac15-q1", textQ: "Combien coûte la séance avec le couteau fabriqué ?", text: ["40 € chacun","60 € chacun","25 € chacun"], textC: 0,
    img: ["40 €","60 €","25 €"], imgC: 0,
    fillQ: "La séance coûte ___ € chacun.", fill: "40",
  },
  {
    id: "ac15-q2", textQ: "À quelle heure Isabelle a-t-elle choisi la séance ?", text: ["À 16 heures","À 10 heures","À 14 heures"], textC: 0,
    img: ["16 h","10 h","14 h"], imgC: 0,
    fillQ: "Elle a choisi la séance de ___ heures.", fill: "16",
  },
  {
    id: "ac15-q3", textQ: "Quel bois est utilisé pour le manche ?", text: ["Bois d'olivier","Bois de chêne","Bois de hêtre"], textC: 0,
    img: ["Olivier","Chêne","Hêtre"], imgC: 0,
    fillQ: "Le manche est en bois d'_________.", fill: "olivier",
  },
  {
    id: "ac15-q4", textQ: "Dans quelle ville a lieu l'atelier ?", text: ["Thiers","Clermont-Ferrand","Lyon"], textC: 0,
    img: ["Thiers","Clermont","Lyon"], imgC: 0,
    fillQ: "L'atelier se trouve à _________.", fill: "Thiers",
    fillA: ["thiers"],
  },
  {
    id: "ac15-q5", textQ: "Quel couteau fabriquent-ils ?", text: ["Le Thiers","Le Laguiole","Le Opinel"], textC: 0,
    img: ["Le Thiers","Laguiole","Opinel"], imgC: 0,
    fillQ: "Ils fabriquent le couteau _________.", fill: "Le Thiers",
    fillA: ["Thiers","le Thiers"],
  },
  {
    id: "ac15-q6", textQ: "Qui a fabriqué un couteau chacun ?", text: ["Gérard et Isabelle","Isabelle seule","Le coutelier pour eux"], textC: 0,
    img: ["Gérard/Isabelle","Isabelle","Coutelier"], imgC: 0,
    fillQ: "Gérard et Isabelle ont chacun fabriqué un _________.", fill: "couteau",
  },
]);

const CONVERSATION_16 = buildPool("avance", "conversation-16", [
  {
    id: "ac16-q1", textQ: "Quel âge a la petite fille de Madame Thierry ?", text: ["18 mois","3 ans","5 ans"], textC: 0,
    img: ["18 mois","3 ans","5 ans"], imgC: 0,
    fillQ: "La petite fille a seulement ___ mois.", fill: "18",
  },
  {
    id: "ac16-q2", textQ: "Quel âge ont les parents de Madame Thierry ?", text: ["84 et 86 ans","70 et 72 ans","90 et 92 ans"], textC: 0,
    img: ["84/86","70/72","90/92"], imgC: 0,
    fillQ: "Ses parents ont ___ et 86 ans.", fill: "84",
  },
  {
    id: "ac16-q3", textQ: "Avec quoi rafraîchit-elle l'enfant à la maison ?", text: ["Un brumisateur","Un ventilateur seul","De la glace"], textC: 0,
    img: ["Brumisateur","Ventilateur","Glace"], imgC: 0,
    fillQ: "Elle la rafraîchit avec un _________.", fill: "brumisateur",
  },
  {
    id: "ac16-q4", textQ: "Que doivent fermer ses parents en journée ?", text: ["Les volets","Les fenêtres la nuit","La porte d'entrée"], textC: 0,
    img: ["Volets","Fenêtres nuit","Porte"], imgC: 0,
    fillQ: "Il faut fermer les _________ dans la journée.", fill: "volets",
  },
  {
    id: "ac16-q5", textQ: "Quand sort-elle surtout la petite fille ?", text: ["Tôt le matin et un peu le soir","Uniquement l'après-midi","Seulement la nuit"], textC: 0,
    img: ["Matin/soir","Après-midi","Nuit"], imgC: 0,
    fillQ: "Elle la sort tôt le _________.", fill: "matin",
  },
  {
    id: "ac16-q6", textQ: "Quand aère-t-on l'appartement ?", text: ["Pendant la nuit","En plein midi","Jamais"], textC: 0,
    img: ["Nuit","Midi","Jamais"], imgC: 0,
    fillQ: "On aère pendant la _________.", fill: "nuit",
  },
]);

const CONVERSATION_17 = buildPool("avance", "conversation-17", [
  {
    id: "ac17-q1", textQ: "Comment Chantal vend-elle parfois ses vêtements ?", text: ["En ligne et en dépôt-vente","Uniquement en friperie","Elle ne vend jamais"], textC: 0,
    img: ["En ligne/dépôt-vente","Friperie","Jamais"], imgC: 0,
    fillQ: "Elle vend en ligne et en _________-vente.", fill: "dépôt",
    fillA: ["depot"],
  },
  {
    id: "ac17-q2", textQ: "Où Annie donne-t-elle ses vêtements ?", text: ["Au Secours populaire et à la Croix-Rouge","En ligne uniquement","À la déchèterie"], textC: 0,
    img: ["Secours pop./C.R.","En ligne","Déchèterie"], imgC: 0,
    fillQ: "Elle les donne au Secours _________.", fill: "populaire",
  },
  {
    id: "ac17-q3", textQ: "Où Chantal dépose-t-elle les vêtements usés ?", text: ["Dans une borne de collecte","Chez le boulanger","À la poste"], textC: 0,
    img: ["Borne collecte","Boulanger","Poste"], imgC: 0,
    fillQ: "Elle les met dans une borne de _________.", fill: "collecte",
  },
  {
    id: "ac17-q4", textQ: "Que préfère Annie plutôt que vendre ?", text: ["Donner","Jeter","Garder tout"], textC: 0,
    img: ["Donner","Jeter","Garder"], imgC: 0,
    fillQ: "Annie préfère _________.", fill: "donner",
  },
  {
    id: "ac17-q5", textQ: "À qui remet-elle des vêtements via le club de gym ?", text: ["À Claude pour le Secours populaire","À Chantal","Au dépôt-vente"], textC: 0,
    img: ["Claude","Chantal","Dépôt-vente"], imgC: 0,
    fillQ: "Elle les remet à _________ pour le Secours populaire.", fill: "Claude",
    fillA: ["claude"],
  },
  {
    id: "ac17-q6", textQ: "Que deviennent les vêtements déposés en borne ?", text: ["Ils sont recyclés","Ils sont brûlés","Ils sont exportés"], textC: 0,
    img: ["Recyclés","Brûlés","Exportés"], imgC: 0,
    fillQ: "Ils sont alors _________.", fill: "recyclés",
    fillA: ["recycles"],
  },
]);

const CONVERSATION_18 = buildPool("avance", "conversation-18", [
  {
    id: "ac18-q1", textQ: "Combien vaut la pièce monégasque en hommage à Grace Kelly ?", text: ["2 000 €","200 €","50 €"], textC: 0,
    img: ["2000 €","200 €","50 €"], imgC: 0,
    fillQ: "La pièce de Monaco vaut ___ €.", fill: "2000",
    fillA: ["2 000"],
  },
  {
    id: "ac18-q2", textQ: "Quelle pièce allemande de 2008 vaut environ 50 € ?", text: ["Une pièce sans carte de l'Europe","Une pièce en or","Une pièce de 1 euro"], textC: 0,
    img: ["Sans carte Europe","En or","1 euro"], imgC: 0,
    fillQ: "L'Allemagne a frappé une pièce sans carte de l'_________.", fill: "Europe",
    fillA: ["europe"],
  },
  {
    id: "ac18-q3", textQ: "Quelle pièce belge de 2005 est recherchée ?", text: ["Celle pour la réouverture de l'Atomium","Celle avec le roi des Belges","Celle pour l'euro 2002"], textC: 0,
    img: ["Atomium","Roi Belges","Euro 2002"], imgC: 0,
    fillQ: "Pièce belge pour la réouverture de l'_________.", fill: "Atomium",
    fillA: ["atomium"],
  },
  {
    id: "ac18-q4", textQ: "Quel côté de la pièce varie selon les pays ?", text: ["Le côté face","Le côté pile uniquement","Aucun côté"], textC: 0,
    img: ["Face","Pile","Aucun"], imgC: 0,
    fillQ: "Chaque pays imprime une effigie sur le côté _________.", fill: "face",
  },
  {
    id: "ac18-q5", textQ: "Quel est le côté commun à toutes les pièces de 2 € ?", text: ["Le 2 avec la carte de l'Europe","Le portrait du roi","Le drapeau national"], textC: 0,
    img: ["2 + Europe","Portrait roi","Drapeau"], imgC: 0,
    fillQ: "Le côté pile montre le 2 avec la carte de l'_________.", fill: "Europe",
    fillA: ["europe"],
  },
  {
    id: "ac18-q6", textQ: "Pourquoi les pièces de Saint-Marin sont recherchées ?", text: ["Ce sont des éditions limitées","Elles sont en or","Elles datent de 1970"], textC: 0,
    img: ["Éditions limitées","En or","1970"], imgC: 0,
    fillQ: "Les collectionneurs recherchent des éditions _________.", fill: "limitées",
    fillA: ["limitees"],
  },
]);

const RADIO_1 = buildPool("avance", "radio-1", [
  {
    id: "ar1-q1", textQ: "Quel pourcentage mangent des plats venant de leurs grands-parents ?", text: ["87 %","70 %","50 %"], textC: 0,
    img: ["87 %","70 %","50 %"], imgC: 0,
    fillQ: "___ % mangent des recettes de grands-parents.", fill: "87",
  },
  {
    id: "ar1-q2", textQ: "Quelle fondation a publié l'enquête ?", text: ["La Fondation Nestlé","L'Unesco","Le ministère de la Culture"], textC: 0,
    img: ["Nestlé","Unesco","Culture"], imgC: 0,
    fillQ: "L'enquête est publiée par la Fondation _________.", fill: "Nestlé",
    fillA: ["nestle"],
  },
  {
    id: "ar1-q3", textQ: "Qui parle de transmission lors des assises Nestlé ?", text: ["Erik Orsenna","Gérard Mermet","Emmanuel Jaffelin"], textC: 0,
    img: ["Orsenna","Mermet","Jaffelin"], imgC: 0,
    fillQ: "_________ parle de la transmission.", fill: "Erik Orsenna",
    fillA: ["Orsenna","orsenna"],
  },
  {
    id: "ar1-q4", textQ: "Quel repas français a été inscrit au patrimoine Unesco ?", text: ["Le repas gastronomique français","La baguette","Le fromage"], textC: 0,
    img: ["Repas gastro.","Baguette","Fromage"], imgC: 0,
    fillQ: "Le repas _________ français est inscrit à l'Unesco.", fill: "gastronomique",
    fillA: ["gastronomique"],
  },
  {
    id: "ar1-q5", textQ: "Par qui la transmission culinaire passe-t-elle souvent ?", text: ["De mère en fille","De père en fils uniquement","Par les écoles"], textC: 0,
    img: ["Mère/fille","Père/fils","Écoles"], imgC: 0,
    fillQ: "La transmission passe souvent de mère en _________.", fill: "fille",
  },
  {
    id: "ar1-q6", textQ: "Quand a été publiée l'enquête Nestlé ?", text: ["En novembre 2011","En 2007","En 2019"], textC: 0,
    img: ["Nov. 2011","2007","2019"], imgC: 0,
    fillQ: "L'enquête date de novembre _________.", fill: "2011",
  },
]);

const RADIO_2 = buildPool("avance", "radio-2", [
  {
    id: "ar2-q1", textQ: "Quelle couleur symbolise le tourisme rural ?", text: ["Vert","Bleu","Gris"], textC: 0,
    img: ["Vert","Bleu","Gris"], imgC: 0,
    fillQ: "Le tourisme _________ correspond au rural.", fill: "vert",
  },
  {
    id: "ar2-q2", textQ: "Quel tourisme est orienté vers la mer ?", text: ["Le tourisme bleu","Le tourisme blanc","Le tourisme jaune"], textC: 0,
    img: ["Bleu","Blanc","Jaune"], imgC: 0,
    fillQ: "Le tourisme _________ vise la mer.", fill: "bleu",
  },
  {
    id: "ar2-q3", textQ: "Quel tourisme concerne les montagnes enneigées ?", text: ["Blanc","Vert","Multicolore"], textC: 0,
    img: ["Blanc","Vert","Multicolore"], imgC: 0,
    fillQ: "Le tourisme _________ mène aux montagnes.", fill: "blanc",
  },
  {
    id: "ar2-q4", textQ: "Quel tourisme se pratique dans les villes ?", text: ["Gris","Bleu","Jaune"], textC: 0,
    img: ["Gris","Bleu","Jaune"], imgC: 0,
    fillQ: "Le tourisme _________ est urbain.", fill: "gris",
  },
  {
    id: "ar2-q5", textQ: "Quelle couleur évoque le désert ?", text: ["Jaune","Vert","Blanc"], textC: 0,
    img: ["Jaune","Vert","Blanc"], imgC: 0,
    fillQ: "Le tourisme _________ mène au désert.", fill: "jaune",
  },
  {
    id: "ar2-q6", textQ: "Comment appelle-t-on les circuits mélangeant plusieurs types ?", text: ["Tourisme multicolore","Tourisme unique","Tourisme gris"], textC: 0,
    img: ["Multicolore","Unique","Gris"], imgC: 0,
    fillQ: "Les circuits forment un tourisme _________.", fill: "multicolore",
  },
]);

const RADIO_3 = buildPool("avance", "radio-3", [
  {
    id: "ar3-q1", textQ: "Quelle étiquette apparaît sur de nombreux produits ?", text: ["L'étiquette verte","L'étiquette rouge","L'étiquette bleue"], textC: 0,
    img: ["Verte","Rouge","Bleue"], imgC: 0,
    fillQ: "On voit l'étiquette _________.", fill: "verte",
  },
  {
    id: "ar3-q2", textQ: "Quel gaz est surtout visé par l'étiquette ?", text: ["Le gaz carbonique","L'azote","L'hélium"], textC: 0,
    img: ["CO2","Azote","Hélium"], imgC: 0,
    fillQ: "Elle mesure surtout le gaz _________.", fill: "carbonique",
    fillA: ["carbonique"],
  },
  {
    id: "ar3-q3", textQ: "À quelle réunion environnementale renvoie cette mesure ?", text: ["Le Grenelle de l'environnement","La COP21","Le sommet de Rio"], textC: 0,
    img: ["Grenelle","COP21","Rio"], imgC: 0,
    fillQ: "Cela fait suite au Grenelle de l'_________.", fill: "environnement",
  },
  {
    id: "ar3-q4", textQ: "Que chiffre l'étiquette verte ?", text: ["L'impact écologique du cycle de vie","Le prix du produit","La date de péremption"], textC: 0,
    img: ["Impact écologique","Prix","Péremption"], imgC: 0,
    fillQ: "Elle chiffre l'impact _________ du produit.", fill: "écologique",
    fillA: ["ecologique"],
  },
  {
    id: "ar3-q5", textQ: "La démarche est-elle obligatoire pour les entreprises ?", text: ["Non, elle reste volontaire","Oui, pour toutes","Oui, seulement alimentaire"], textC: 0,
    img: ["Volontaire","Obligatoire","Alimentaire seul"], imgC: 0,
    fillQ: "Pour l'instant, la démarche reste _________.", fill: "volontaire",
  },
  {
    id: "ar3-q6", textQ: "Combien de temps durait la période expérimentale ?", text: ["Un an","Six mois","Cinq ans"], textC: 0,
    img: ["1 an","6 mois","5 ans"], imgC: 0,
    fillQ: "L'expérience durait ___ an.", fill: "un",
    fillA: ["1"],
  },
]);

const RADIO_4 = buildPool("avance", "radio-4", [
  {
    id: "ar4-q1", textQ: "Quel est le titre du roman évoqué ?", text: ["Les Souvenirs","La Délicatesse","L'Éloge de la gentillesse"], textC: 0,
    img: ["Souvenirs","Délicatesse","Gentillesse"], imgC: 0,
    fillQ: "Le roman s'appelle Les _________.", fill: "Souvenirs",
    fillA: ["souvenirs"],
  },
  {
    id: "ar4-q2", textQ: "Qui en est l'auteur ?", text: ["David Foenkinos","Erik Orsenna","Rémi Bezançon"], textC: 0,
    img: ["Foenkinos","Orsenna","Bezançon"], imgC: 0,
    fillQ: "L'auteur est David _________.", fill: "Foenkinos",
    fillA: ["foenkinos"],
  },
  {
    id: "ar4-q3", textQ: "Dans quel hôpital le narrateur rend-il visite à son grand-père ?", text: ["Kremlin-Bicêtre","Necker","Pitié-Salpêtrière"], textC: 0,
    img: ["Kremlin-Bicêtre","Necker","Pitié"], imgC: 0,
    fillQ: "Visite à l'hôpital du _________.", fill: "Kremlin-Bicêtre",
    fillA: ["Kremlin-Bicetre","kremlin-bicetre"],
  },
  {
    id: "ar4-q4", textQ: "Quel personnage vient d'être enterré ?", text: ["Le grand-père du narrateur","Sa mère","Son frère"], textC: 0,
    img: ["Grand-père","Mère","Frère"], imgC: 0,
    fillQ: "Le narrateur vient d'enterrer son _________.", fill: "grand-père",
    fillA: ["grand-pere","grandpere"],
  },
  {
    id: "ar4-q5", textQ: "Comment aide-t-il son grand-père à boire ?", text: ["Avec une paille","Avec une cuillère","Avec un verre"], textC: 0,
    img: ["Paille","Cuillère","Verre"], imgC: 0,
    fillQ: "Il l'aide à boire avec une _________.", fill: "paille",
  },
  {
    id: "ar4-q6", textQ: "En quelle année David Foenkinos est-il né ?", text: ["1974","1961","1980"], textC: 0,
    img: ["1974","1961","1980"], imgC: 0,
    fillQ: "David Foenkinos est né en _________.", fill: "1974",
  },
]);

const RADIO_5 = buildPool("avance", "radio-5", [
  {
    id: "ar5-q1", textQ: "Combien d'emplois verts étaient annoncés après le Grenelle ?", text: ["Plus de 500 000","Plus de 50 000","Plus de 5 000"], textC: 0,
    img: ["500 000+","50 000+","5 000+"], imgC: 0,
    fillQ: "Plus de ___ emplois devaient être créés.", fill: "500 000",
    fillA: ["500000"],
  },
  {
    id: "ar5-q2", textQ: "Quand le Grenelle de l'environnement a-t-il été lancé ?", text: ["En 2007","En 2011","En 2019"], textC: 0,
    img: ["2007","2011","2019"], imgC: 0,
    fillQ: "Le Grenelle a été lancé en _________.", fill: "2007",
  },
  {
    id: "ar5-q3", textQ: "Quel conseil avant de choisir une formation ?", text: ["Faire des stages ou du bénévolat","Choisir au hasard","Éviter le secteur"], textC: 0,
    img: ["Stages/bénévolat","Hasard","Éviter"], imgC: 0,
    fillQ: "Il faut se renseigner via des _________ ou du bénévolat.", fill: "stages",
  },
  {
    id: "ar5-q4", textQ: "Quel problème note le Cereq en 2011 ?", text: ["Un décalage entre aspirations et emploi","Un manque d'étudiants","Trop de postes"], textC: 0,
    img: ["Décalage","Manque étudiants","Trop postes"], imgC: 0,
    fillQ: "Il y a un _________ entre aspirations et emploi.", fill: "décalage",
    fillA: ["decalage"],
  },
  {
    id: "ar5-q5", textQ: "Quel exemple de métier environnemental est cité ?", text: ["Agent de station d'épuration","Pilote de ligne","Vendeur"], textC: 0,
    img: ["Station épuration","Pilote","Vendeur"], imgC: 0,
    fillQ: "Exemple : agent de station d'_________.", fill: "épuration",
    fillA: ["epuration"],
  },
  {
    id: "ar5-q6", textQ: "Où travaille-t-on souvent malgré l'image de nature ?", text: ["Dans un bureau","Sur un glacier","En forêt"], textC: 0,
    img: ["Bureau","Glacier","Forêt"], imgC: 0,
    fillQ: "On travaille souvent dans un _________.", fill: "bureau",
  },
]);

const RADIO_6 = buildPool("avance", "radio-6", [
  {
    id: "ar6-q1", textQ: "Combien d'espèces d'insectes sont consommées ?", text: ["Plus de 1 350","Plus de 350","Plus de 13 500"], textC: 0,
    img: ["1350+","350+","13500+"], imgC: 0,
    fillQ: "Plus de ___ espèces d'insectes sont consommées.", fill: "1350",
    fillA: ["1 350"],
  },
  {
    id: "ar6-q2", textQ: "Dans combien de pays mange-t-on des insectes ?", text: ["Une centaine","Une dizaine","Un millier"], textC: 0,
    img: ["100","10","1000"], imgC: 0,
    fillQ: "Dans une _________ de pays.", fill: "centaine",
  },
  {
    id: "ar6-q3", textQ: "Où les recherches sur les insectes sont-elles les plus avancées ?", text: ["En Thaïlande","En France","Au Canada"], textC: 0,
    img: ["Thaïlande","France","Canada"], imgC: 0,
    fillQ: "Les recherches sont avancées en _________.", fill: "Thaïlande",
    fillA: ["Thailande","thailande"],
  },
  {
    id: "ar6-q4", textQ: "Quelle organisation est mentionnée ?", text: ["La FAO","L'Unesco","L'OMS"], textC: 0,
    img: ["FAO","Unesco","OMS"], imgC: 0,
    fillQ: "L'organisation s'appelle la _________.", fill: "FAO",
    fillA: ["fao"],
  },
  {
    id: "ar6-q5", textQ: "Pourquoi la FAO encourage-t-elle les insectes ?", text: ["Pour ne pas tout miser sur la viande","Pour interdire la viande","Pour exporter"], textC: 0,
    img: ["Pas que viande","Interdire viande","Exporter"], imgC: 0,
    fillQ: "Il ne faut pas délaisser les insectes au profit de la _________.", fill: "viande",
  },
  {
    id: "ar6-q6", textQ: "Comment obtient-on la plupart de ces insectes ?", text: ["En les ramassant à l'état sauvage","En les achetant au supermarché","En les important"], textC: 0,
    img: ["Sauvages","Supermarché","Import"], imgC: 0,
    fillQ: "Ce sont surtout des espèces _________ ramassées.", fill: "sauvages",
  },
]);

const RADIO_7 = buildPool("avance", "radio-7", [
  {
    id: "ar7-q1", textQ: "Quel philosophe a publié L'Éloge de la gentillesse ?", text: ["Emmanuel Jaffelin","David Foenkinos","Gérard Mermet"], textC: 0,
    img: ["Jaffelin","Foenkinos","Mermet"], imgC: 0,
    fillQ: "L'auteur est Emmanuel _________.", fill: "Jaffelin",
    fillA: ["jaffelin"],
  },
  {
    id: "ar7-q2", textQ: "Quand célèbre-t-on la journée internationale de la gentillesse ?", text: ["Le 13 novembre","Le 1er mai","Le 14 juillet"], textC: 0,
    img: ["13 nov.","1er mai","14 juil."], imgC: 0,
    fillQ: "La journée a lieu le ___ novembre.", fill: "13",
  },
  {
    id: "ar7-q3", textQ: "Quel est le contraire de la gentillesse?", text: ["Le cynisme","La méchanceté","La colère"], textC: 0,
    img: ["Cynisme","Méchanceté","Colère"], imgC: 0,
    fillQ: "Le contraire n'est pas la méchanceté, mais le _________.", fill: "cynisme",
  },
  {
    id: "ar7-q4", textQ: "Chez quelles éditions est paru le livre ?", text: ["François Bourin","Albert René","Gallimard"], textC: 0,
    img: ["François Bourin","Albert René","Gallimard"], imgC: 0,
    fillQ: "Éditions François _________.", fill: "Bourin",
    fillA: ["bourin"],
  },
  {
    id: "ar7-q5", textQ: "Où la gentillesse est-elle née?", text: ["Dans la noblesse romaine","Dans les usines","Dans les écoles"], textC: 0,
    img: ["Noblesse romaine","Usines","Écoles"], imgC: 0,
    fillQ: "Elle est née dans la noblesse _________.", fill: "romaine",
  },
  {
    id: "ar7-q6", textQ: "Comment l'auteur qualifie-t-il la gentillesse aujourd'hui ?", text: ["Reléguée aux petites vertus","Très reconnue","Interdite"], textC: 0,
    img: ["Petites vertus","Reconnue","Interdite"], imgC: 0,
    fillQ: "Elle est reléguée aux petites _________.", fill: "vertus",
  },
]);

const RADIO_8 = buildPool("avance", "radio-8", [
  {
    id: "ar8-q1", textQ: "Quel lieu est présenté pour le week-end ?", text: ["Le Train Bleu à la Gare de Lyon","Le Louvre","Le pont du Gard"], textC: 0,
    img: ["Train Bleu","Louvre","Pont Gard"], imgC: 0,
    fillQ: "Visite du _________ à la Gare de Lyon.", fill: "Train Bleu",
    fillA: ["train bleu"],
  },
  {
    id: "ar8-q2", textQ: "Quand le buffet a-t-il été inauguré ?", text: ["Le 7 avril 1901","En 1973","En 1900"], textC: 0,
    img: ["7 avr. 1901","1973","1900"], imgC: 0,
    fillQ: "Inauguration le 7 avril _________.", fill: "1901",
  },
  {
    id: "ar8-q3", textQ: "Quel président l'a inauguré ?", text: ["Émile Loubet","André Malraux","Émile Zola"], textC: 0,
    img: ["Loubet","Malraux","Zola"], imgC: 0,
    fillQ: "Inauguré par Émile _________.", fill: "Loubet",
    fillA: ["loubet"],
  },
  {
    id: "ar8-q4", textQ: "Quelles trois villes figurent sur les plafonds ?", text: ["Paris, Lyon et Marseille","Paris, Nice et Bordeaux","Lyon, Lille et Toulouse"], textC: 0,
    img: ["Paris/Lyon/Marseille","Paris/Nice/Bordeaux","Lyon/Lille/Toulouse"], imgC: 0,
    fillQ: "Les plafonds montrent Paris, Lyon et _________.", fill: "Marseille",
    fillA: ["marseille"],
  },
  {
    id: "ar8-q5", textQ: "Quand le buffet a-t-il été rebaptisé Train Bleu ?", text: ["En 1973","En 1901","En 1972"], textC: 0,
    img: ["1973","1901","1972"], imgC: 0,
    fillQ: "Rebaptisé Train Bleu en _________.", fill: "1973",
  },
  {
    id: "ar8-q6", textQ: "Quelle compagnie ferroviaire aménageait le buffet ?", text: ["La Compagnie PLM","La SNCF","La RATP"], textC: 0,
    img: ["PLM","SNCF","RATP"], imgC: 0,
    fillQ: "Aménagé par la Compagnie _________.", fill: "PLM",
    fillA: ["plm"],
  },
]);

const RADIO_9 = buildPool("avance", "radio-9", [
  {
    id: "ar9-q1", textQ: "Que garantit l'AOC ?", text: ["L'origine et la qualité dans une zone géographique","Un prix bas","Un produit importé"], textC: 0,
    img: ["Origine/qualité","Prix bas","Importé"], imgC: 0,
    fillQ: "L'AOC garantit l'origine et la _________.", fill: "qualité",
    fillA: ["qualite"],
  },
  {
    id: "ar9-q2", textQ: "Que signifie AOP ?", text: ["Appellation d'origine protégée","Agriculture officielle paysanne","Association des producteurs"], textC: 0,
    img: ["Origine protégée","Agri. paysanne","Assoc. prod."], imgC: 0,
    fillQ: "AOP signifie appellation d'origine _________.", fill: "protégée",
    fillA: ["protegee"],
  },
  {
    id: "ar9-q3", textQ: "Que certifie le logo STG ?", text: ["Une spécialité traditionnelle garantie","Un produit bio","Un label rouge"], textC: 0,
    img: ["STG","Bio","Label rouge"], imgC: 0,
    fillQ: "STG signifie spécialité traditionnelle _________.", fill: "garantie",
  },
  {
    id: "ar9-q4", textQ: "Que concerne l'IGP ?", text: ["Des aliments liés au lieu d'origine","Uniquement le vin","Les produits surgelés"], textC: 0,
    img: ["Lieu origine","Vin seul","Surgelés"], imgC: 0,
    fillQ: "L'IGP concerne des produits liés au lieu d'_________.", fill: "origine",
  },
  {
    id: "ar9-q5", textQ: "Que garantissent les logos bio européen et AB ?", text: ["Une production respectueuse de l'environnement","Un prix réduit","Un emballage recyclable seul"], textC: 0,
    img: ["Bio/environnement","Prix réduit","Emballage"], imgC: 0,
    fillQ: "Le bio garantit une production respectueuse de l'_________.", fill: "environnement",
  },
  {
    id: "ar9-q6", textQ: "Quel label couronne des produits de qualité supérieure sans appellation d'origine ?", text: ["Label rouge","IGP","STG"], textC: 0,
    img: ["Label rouge","IGP","STG"], imgC: 0,
    fillQ: "Le _________ rouge couronne des produits de qualité supérieure.", fill: "Label",
    fillA: ["label"],
  },
]);

const RADIO_10 = buildPool("avance", "radio-10", [
  {
    id: "ar10-q1", textQ: "Où la pétanque a-t-elle été inventée ?", text: ["À La Ciotat en 1910","À Marseille en 1900","À Paris en 1920"], textC: 0,
    img: ["La Ciotat 1910","Marseille 1900","Paris 1920"], imgC: 0,
    fillQ: "Inventée à La Ciotat en _________.", fill: "1910",
  },
  {
    id: "ar10-q2", textQ: "Que signifie « pieds tanqués » ?", text: ["Pieds joints","Pieds en mouvement","Pieds surélevés"], textC: 0,
    img: ["Pieds joints","En mouvement","Surélevés"], imgC: 0,
    fillQ: "Les pieds tanqués sont les pieds _________.", fill: "joints",
  },
  {
    id: "ar10-q3", textQ: "À combien de points gagne-t-on une partie ?", text: ["13 points","10 points","21 points"], textC: 0,
    img: ["13","10","21"], imgC: 0,
    fillQ: "La partie se gagne à ___ points.", fill: "13",
    fillA: ["treize"],
  },
  {
    id: "ar10-q4", textQ: "Combien de joueurs le Mondial la Marseillaise rassemble-t-il ?", text: ["Plus de 14 000","Plus de 1 400","Plus de 140"], textC: 0,
    img: ["14000+","1400+","140+"], imgC: 0,
    fillQ: "Plus de ___ joueurs participent.", fill: "14 000",
    fillA: ["14000"],
  },
  {
    id: "ar10-q5", textQ: "Quel rôle a le tireur ?", text: ["Chasser une boule adverse","Rapprocher la boule du but","Arbitrer"], textC: 0,
    img: ["Chasser","Rapprocher","Arbitrer"], imgC: 0,
    fillQ: "Le tireur chasse une boule _________.", fill: "adverse",
  },
  {
    id: "ar10-q6", textQ: "Comment appelle-t-on le tir le plus admiré ?", text: ["Le carreau","Le point","Le cochonnet"], textC: 0,
    img: ["Carreau","Point","Cochonnet"], imgC: 0,
    fillQ: "Le tir remarquable s'appelle le _________.", fill: "carreau",
  },
]);

const RADIO_11 = buildPool("avance", "radio-11", [
  {
    id: "ar11-q1", textQ: "Quels numéros de plastique faut-il éviter ?", text: ["1, 3, 6 et 7","2, 4 et 5","8 et 9"], textC: 0,
    img: ["1/3/6/7","2/4/5","8/9"], imgC: 0,
    fillQ: "Évitez les numéros 1, 3, 6 et ___.", fill: "7",
  },
  {
    id: "ar11-q2", textQ: "Quels numéros peut-on garder ?", text: ["2, 4 et 5","1, 3 et 6","7 et 8"], textC: 0,
    img: ["2/4/5","1/3/6","7/8"], imgC: 0,
    fillQ: "On peut garder les numéros 2, 4 et ___.", fill: "5",
  },
  {
    id: "ar11-q3", textQ: "Que signifie le numéro 1 ?", text: ["PET","PVC","Polystyrène"], textC: 0,
    img: ["PET","PVC","Polystyrène"], imgC: 0,
    fillQ: "Le numéro 1 correspond au _________.", fill: "PET",
    fillA: ["pet"],
  },
  {
    id: "ar11-q4", textQ: "Quels récipients préférer ?", text: ["Acier inoxydable ou verre","PVC coloré","Polystyrène rayé"], textC: 0,
    img: ["Inox/verre","PVC","Polystyrène"], imgC: 0,
    fillQ: "Préférez l'acier inoxydable ou le _________.", fill: "verre",
  },
  {
    id: "ar11-q5", textQ: "Pourquoi éviter une boîte rayée ou fondue ?", text: ["Les additifs migrent plus","Elle est plus légère","Elle coûte moins"], textC: 0,
    img: ["Additifs","Légère","Moins chère"], imgC: 0,
    fillQ: "Les additifs ont tendance à _________.", fill: "migrer",
  },
  {
    id: "ar11-q6", textQ: "Où trouve-t-on les numéros sur les boîtes ?", text: ["Sous les récipients","Sur le couvercle seulement","Dans la notice"], textC: 0,
    img: ["Dessous","Couvercle","Notice"], imgC: 0,
    fillQ: "Les numéros se trouvent sous les _________.", fill: "récipients",
    fillA: ["recipients"],
  },
]);

const RADIO_12 = buildPool("avance", "radio-12", [
  {
    id: "ar12-q1", textQ: "Quel est le titre du livre refusé au centre du récit ?", text: ["Les Dernières heures d'une histoire d'amour","Les Souvenirs","Henri Pick"], textC: 0,
    img: ["Dernières heures","Souvenirs","Henri Pick"], imgC: 0,
    fillQ: "L'ouvrage s'intitule Les Dernières heures d'une histoire d'_________.", fill: "amour",
  },
  {
    id: "ar12-q2", textQ: "Qui est l'auteur du manuscrit découvert ?", text: ["Henri Pick","Jean-Michel Rouche","Richard Brautigan"], textC: 0,
    img: ["Henri Pick","Rouche","Brautigan"], imgC: 0,
    fillQ: "Le manuscrit est signé Henri _________.", fill: "Pick",
    fillA: ["pick"],
  },
  {
    id: "ar12-q3", textQ: "Dans quelle ville bretonne se situe la bibliothèque ?", text: ["Crozon","Brest","Rennes"], textC: 0,
    img: ["Crozon","Brest","Rennes"], imgC: 0,
    fillQ: "La bibliothèque est à _________, en Bretagne.", fill: "Crozon",
    fillA: ["crozon"],
  },
  {
    id: "ar12-q4", textQ: "Que contient cette bibliothèque particulière ?", text: ["Des livres refusés par les éditeurs","Des manuscrits anciens du roi","Des bandes dessinées"], textC: 0,
    img: ["Livres refusés","Manuscrits roi","BD"], imgC: 0,
    fillQ: "Elle propose des ouvrages _________ par les éditeurs.", fill: "refusés",
    fillA: ["refuses"],
  },
  {
    id: "ar12-q5", textQ: "Quel métier exerçait Henri Pick ?", text: ["Pizzaiolo","Critique littéraire","Éditeur"], textC: 0,
    img: ["Pizzaiolo","Critique","Éditeur"], imgC: 0,
    fillQ: "Henri Pick était surtout connu pour ses _________.", fill: "pizzas",
  },
  {
    id: "ar12-q6", textQ: "Qui mène l'enquête pour savoir qui a écrit le livre ?", text: ["Fabrice Luchini","Delphine Despero","Rémi Bezançon"], textC: 0,
    img: ["Luchini","Despero","Bezançon"], imgC: 0,
    fillQ: "L'enquêteur est Fabrice _________.", fill: "Luchini",
    fillA: ["luchini"],
  },
]);

const RADIO_13 = buildPool("avance", "radio-13", [
  {
    id: "ar13-q1", textQ: "Quel est le titre du court-métrage ?", text: ["#Anita","Greta","Future View"], textC: 0,
    img: ["#Anita","Greta","Future View"], imgC: 0,
    fillQ: "Le court-métrage s'appelle _________.", fill: "#Anita",
    fillA: ["Anita","anita"],
  },
  {
    id: "ar13-q2", textQ: "Quelle actrice interprète Anita ?", text: ["Fantine Harduin","Greta Thunberg","Anne Goscinny"], textC: 0,
    img: ["Harduin","Thunberg","Goscinny"], imgC: 0,
    fillQ: "Anita est interprétée par Fantine _________.", fill: "Harduin",
    fillA: ["harduin"],
  },
  {
    id: "ar13-q3", textQ: "Quelle militante suédoise inspire le personnage ?", text: ["Greta Thunberg","Anita Harduin","Fantine Thunberg"], textC: 0,
    img: ["Greta","Anita","Fantine"], imgC: 0,
    fillQ: "Le personnage s'inspire de Greta _________.", fill: "Thunberg",
    fillA: ["thunberg"],
  },
  {
    id: "ar13-q4", textQ: "Quelle est la durée du film ?", text: ["Treize minutes","Trente minutes","Une heure"], textC: 0,
    img: ["13 min","30 min","1 h"], imgC: 0,
    fillQ: "Le film dure ___ minutes.", fill: "treize",
    fillA: ["13"],
  },
  {
    id: "ar13-q5", textQ: "De quoi traite le combat d'Anita ?", text: ["Le réchauffement climatique","La cuisine","Le tourisme"], textC: 0,
    img: ["Climat","Cuisine","Tourisme"], imgC: 0,
    fillQ: "Elle personnifie l'urgence du _________ climatique.", fill: "réchauffement",
    fillA: ["rechauffement"],
  },
  {
    id: "ar13-q6", textQ: "Sur quelle plateforme le film est-il mis en ligne ?", text: ["YouTube B-Voir et Imago.tv","Netflix","France 2"], textC: 0,
    img: ["B-Voir/Imago","Netflix","France 2"], imgC: 0,
    fillQ: "Mis en ligne sur YouTube B-_________.", fill: "Voir",
    fillA: ["voir"],
  },
]);

const RADIO_14 = buildPool("avance", "radio-14", [
  {
    id: "ar14-q1", textQ: "Quel problème rencontre le voyageur dans le train ?", text: ["Sa place réservée est occupée","Son train est annulé","Il a perdu son billet"], textC: 0,
    img: ["Place occupée","Train annulé","Billet perdu"], imgC: 0,
    fillQ: "Sa place _________ est occupée.", fill: "réservée",
    fillA: ["reservee"],
  },
  {
    id: "ar14-q2", textQ: "Que fait la personne installée sur les deux sièges ?", text: ["Elle regarde un film avec des écouteurs","Elle dort","Elle lit un journal"], textC: 0,
    img: ["Film/écouteurs","Dort","Journal"], imgC: 0,
    fillQ: "Elle regarde un film avec des _________.", fill: "écouteurs",
    fillA: ["ecouteurs"],
  },
  {
    id: "ar14-q3", textQ: "Comment réagit-elle quand on lui parle ?", text: ["Elle enlève ses écouteurs moqueusement","Elle s'excuse tout de suite","Elle change de wagon"], textC: 0,
    img: ["Écouteurs moqueurs","S'excuse","Change wagon"], imgC: 0,
    fillQ: "Elle enlève ses _________ d'un air moqueur.", fill: "écouteurs",
    fillA: ["ecouteurs"],
  },
  {
    id: "ar14-q4", textQ: "Que cherche-t-elle en balayant le wagon du regard ?", text: ["D'autres places libres","Un contrôleur","Sa valise"], textC: 0,
    img: ["Places libres","Contrôleur","Valise"], imgC: 0,
    fillQ: "Elle cherche d'autres places _________.", fill: "libres",
  },
  {
    id: "ar14-q5", textQ: "Quel paquet le narrateur lui tend à la fin ?", text: ["Un paquet de Petit Lu","Un sandwich","Un magazine"], textC: 0,
    img: ["Petit Lu","Sandwich","Magazine"], imgC: 0,
    fillQ: "Il lui tend son paquet de Petit _________.", fill: "Lu",
    fillA: ["lu"],
  },
  {
    id: "ar14-q6", textQ: "Comment se sent le narrateur après l'incident ?", text: ["Très serein","Très en colère","Triste"], textC: 0,
    img: ["Serein","Colère","Triste"], imgC: 0,
    fillQ: "Il se sent très _________.", fill: "serein",
  },
]);

const RADIO_15 = buildPool("avance", "radio-15", [
  {
    id: "ar15-q1", textQ: "Dans quelle ville se trouve le salon Les Essentielles ?", text: ["La Roche-sur-Yon","Marseille","Lyon"], textC: 0,
    img: ["La Roche-sur-Yon","Marseille","Lyon"], imgC: 0,
    fillQ: "Le salon est à La _________-sur-Yon.", fill: "Roche",
    fillA: ["roche"],
  },
  {
    id: "ar15-q2", textQ: "Quelle association rend possible le recyclage des cheveux ?", text: ["Coiffeurs Justes","Secours populaire","Greenpeace"], textC: 0,
    img: ["Coiffeurs Justes","Secours pop.","Greenpeace"], imgC: 0,
    fillQ: "Grâce à l'association Coiffeurs _________.", fill: "Justes",
    fillA: ["justes"],
  },
  {
    id: "ar15-q3", textQ: "À quoi servent les cheveux recyclés ?", text: ["À absorber les hydrocarbures dans les océans","À fabriquer des vêtements","À nourrir les animaux"], textC: 0,
    img: ["Hydrocarbures","Vêtements","Animaux"], imgC: 0,
    fillQ: "Ils absorbent les _________ dans les océans.", fill: "hydrocarbures",
  },
  {
    id: "ar15-q4", textQ: "Dans quels cas pourraient-ils être utilisés ?", text: ["En cas de marée noire","Pour chauffer","Pour construire"], textC: 0,
    img: ["Marée noire","Chauffer","Construire"], imgC: 0,
    fillQ: "Utiles en cas de marée _________.", fill: "noire",
  },
  {
    id: "ar15-q5", textQ: "Comment Virginie Beasse considère-t-elle les cheveux ?", text: ["Comme une matière noble","Comme un déchet inutile","Comme un plastique"], textC: 0,
    img: ["Matière noble","Déchet","Plastique"], imgC: 0,
    fillQ: "Elle les voit comme une matière _________.", fill: "noble",
  },
  {
    id: "ar15-q6", textQ: "Quel type de coloration utilise le salon depuis deux ans ?", text: ["100 % végétales","100 % chimiques","Uniquement des mèches"], textC: 0,
    img: ["Végétales","Chimiques","Mèches"], imgC: 0,
    fillQ: "Colorations ___ % végétales.", fill: "100",
  },
]);

const RADIO_16 = buildPool("avance", "radio-16", [
  {
    id: "ar16-q1", textQ: "En quelle année les Grandes Écuries ont-elles été édifiées ?", text: ["1719","1834","2013"], textC: 0,
    img: ["1719","1834","2013"], imgC: 0,
    fillQ: "Édifiées en _________.", fill: "1719",
  },
  {
    id: "ar16-q2", textQ: "Où se trouvent ces Grandes Écuries ?", text: ["À Chantilly","À Versailles","À Fontainebleau"], textC: 0,
    img: ["Chantilly","Versailles","Fontainebleau"], imgC: 0,
    fillQ: "Les Grandes Écuries de _________.", fill: "Chantilly",
    fillA: ["chantilly"],
  },
  {
    id: "ar16-q3", textQ: "Quelle est la longueur du bâtiment ?", text: ["181 mètres","28 mètres","100 mètres"], textC: 0,
    img: ["181 m","28 m","100 m"], imgC: 0,
    fillQ: "Le bâtiment mesure ___ mètres de long.", fill: "181",
  },
  {
    id: "ar16-q4", textQ: "Quel prix hippique prestigieux est cité ?", text: ["Le Prix de Diane","Le Prix de l'Arc","Le Grand Steeple"], textC: 0,
    img: ["Prix Diane","Arc","Steeple"], imgC: 0,
    fillQ: "C'est le théâtre du Prix de _________.", fill: "Diane",
    fillA: ["diane"],
  },
  {
    id: "ar16-q5", textQ: "Quand le musée du Cheval a-t-il rouvert après rénovation ?", text: ["2013","1982","2006"], textC: 0,
    img: ["2013","1982","2006"], imgC: 0,
    fillQ: "Rouverture en _________.", fill: "2013",
  },
  {
    id: "ar16-q6", textQ: "Combien de spectacles sont présentés chaque année ?", text: ["Plus de 150","Plus de 50","Plus de 500"], textC: 0,
    img: ["150+","50+","500+"], imgC: 0,
    fillQ: "Plus de ___ spectacles par an.", fill: "150",
  },
]);

const RADIO_17 = buildPool("avance", "radio-17", [
  {
    id: "ar17-q1", textQ: "Quel pourcentage de chiens souffrent d'embonpoint ?", text: ["40 %","25 %","80 %"], textC: 0,
    img: ["40 %","25 %","80 %"], imgC: 0,
    fillQ: "___ % des chiens sont en surpoids.", fill: "40",
  },
  {
    id: "ar17-q2", textQ: "Quel pourcentage de chats est concerné ?", text: ["25 %","40 %","10 %"], textC: 0,
    img: ["25 %","40 %","10 %"], imgC: 0,
    fillQ: "___ % des chats souffrent d'embonpoint.", fill: "25",
  },
  {
    id: "ar17-q3", textQ: "Quelle est la principale cause du surpoids ?", text: ["La sédentarité","La stérilisation seule","Les friandises uniquement"], textC: 0,
    img: ["Sédentarité","Stérilisation","Friandises"], imgC: 0,
    fillQ: "La principale cause : la _________.", fill: "sédentarité",
    fillA: ["sedentarite"],
  },
  {
    id: "ar17-q4", textQ: "Quel pourcentage de chats domestiques est stérilisé en France ?", text: ["80 %","40 %","25 %"], textC: 0,
    img: ["80 %","40 %","25 %"], imgC: 0,
    fillQ: "___ % des chats domestiques sont stérilisés.", fill: "80",
  },
  {
    id: "ar17-q5", textQ: "Qui présente la rubrique « la minute du véto » ?", text: ["Le docteur Géraldine Blanchard","Anne Rodier","Édouard Bergeon"], textC: 0,
    img: ["Dr Blanchard","Rodier","Bergeon"], imgC: 0,
    fillQ: "C'est le docteur Géraldine _________.", fill: "Blanchard",
    fillA: ["blanchard"],
  },
  {
    id: "ar17-q6", textQ: "Quel conseil est donné en priorité à la fin ?", text: ["Supprimer les friandises","Donner du pain","Regarder la télé"], textC: 0,
    img: ["Pas de friandises","Du pain","Télé"], imgC: 0,
    fillQ: "Il faut surtout supprimer les _________.", fill: "friandises",
  },
]);

const RADIO_21 = buildPool("avance", "radio-21", [
  {
    id: "ar21-q1", textQ: "Où se déroule le film évoqué ?", text: ["À Saint-Denis","À Paris","En Ardèche"], textC: 0,
    img: ["Saint-Denis","Paris","Ardèche"], imgC: 0,
    fillQ: "Le film se passe à _________-Denis.", fill: "Saint",
  },
  {
    id: "ar21-q2", textQ: "Que signifie ZEP ?", text: ["Zone d'Éducation Prioritaire","Zone d'Enseignement Public","Zone d'Études Professionnelles"], textC: 0,
    img: ["Éducation Prioritaire","Enseignement Public","Études Pro"], imgC: 0,
    fillQ: "ZEP signifie Zone d'Éducation _________.", fill: "Prioritaire",
  },
  {
    id: "ar21-q3", textQ: "Comment s'appelle la conseillère principale ?", text: ["Samia","Yanis","Mehdi"], textC: 0,
    img: ["Samia","Yanis","Mehdi"], imgC: 0,
    fillQ: "La conseillère s'appelle _________.", fill: "Samia",
    fillA: ["samia"],
  },
  {
    id: "ar21-q4", textQ: "Dans quel établissement le film a-t-il été tourné ?", text: ["Les Francs-Moisins","Le Louvre","La Sorbonne"], textC: 0,
    img: ["Francs-Moisins","Louvre","Sorbonne"], imgC: 0,
    fillQ: "Tourné aux Francs-_________.", fill: "Moisins",
    fillA: ["moisins"],
  },
  {
    id: "ar21-q5", textQ: "Quel film les réalisateurs avaient-ils fait avant ?", text: ["Patients","Astérix","Au nom de la Terre"], textC: 0,
    img: ["Patients","Astérix","Au nom Terre"], imgC: 0,
    fillQ: "Ils avaient réalisé _________.", fill: "Patients",
    fillA: ["patients"],
  },
  {
    id: "ar21-q6", textQ: "À quel élève Samia s'attache-t-elle ?", text: ["Yanis","Zita","Grand Corps Malade"], textC: 0,
    img: ["Yanis","Zita","GCM"], imgC: 0,
    fillQ: "Elle s'attache à _________, un élève turbulent.", fill: "Yanis",
    fillA: ["yanis"],
  },
]);

const RADIO_22 = buildPool("avance", "radio-22", [
  {
    id: "ar22-q1", textQ: "Combien de temps passe-t-on en moyenne sur son téléphone en France ?", text: ["Entre 1 h 42 et 2 h 16","30 minutes","5 heures"], textC: 0,
    img: ["1h42-2h16","30 min","5 h"], imgC: 0,
    fillQ: "Entre 1 h 42 et ___ h 16 par jour.", fill: "2",
  },
  {
    id: "ar22-q2", textQ: "Qui a co-signé l'étude citée ?", text: ["Alexis Hiniker","Anne Rodier","Gérard Mermet"], textC: 0,
    img: ["Hiniker","Rodier","Mermet"], imgC: 0,
    fillQ: "La chercheuse s'appelle Alexis _________.", fill: "Hiniker",
    fillA: ["hiniker"],
  },
  {
    id: "ar22-q3", textQ: "Combien de situations poussent à utiliser frénétiquement le smartphone ?", text: ["Quatre","Deux","Six"], textC: 0,
    img: ["4","2","6"], imgC: 0,
    fillQ: "Elle a noté ___ situations types.", fill: "quatre",
    fillA: ["4"],
  },
  {
    id: "ar22-q4", textQ: "Après combien de minutes sur le téléphone arrête-t-on souvent ?", text: ["30 minutes","10 minutes","1 heure"], textC: 0,
    img: ["30 min","10 min","1 h"], imgC: 0,
    fillQ: "On s'arrête après ___ minutes.", fill: "30",
  },
  {
    id: "ar22-q5", textQ: "Que conseillent les scientifiques pour les smartphones ?", text: ["Redonner le libre-arbitre à l'utilisateur","Interdire les écrans","Supprimer Internet"], textC: 0,
    img: ["Libre-arbitre","Interdire","Supprimer"], imgC: 0,
    fillQ: "Des smartphones qui redonnent le _________-arbitre.", fill: "libre",
  },
  {
    id: "ar22-q6", textQ: "Où travaille Alexis Hiniker ?", text: ["Université de Washington","Université de Paris","MIT"], textC: 0,
    img: ["Washington","Paris","MIT"], imgC: 0,
    fillQ: "Elle travaille à l'Université de _________.", fill: "Washington",
    fillA: ["washington"],
  },
]);

const RADIO_18 = buildPool("avance", "radio-18", [
  {
    id: "ar18-q1", textQ: "Où se déroule le jeu d'évasion décrit au début ?", text: ["Au château de Vincennes","À l'Opéra Garnier","À Chinon"], textC: 0,
    img: ["Vincennes","Opéra","Chinon"], imgC: 0,
    fillQ: "Dans un donjon du château de _________.", fill: "Vincennes",
    fillA: ["vincennes"],
  },
  {
    id: "ar18-q2", textQ: "Quand la tendance arrive-t-elle en France ?", text: ["En 2014","En 2018","En 2000"], textC: 0,
    img: ["2014","2018","2000"], imgC: 0,
    fillQ: "Arrivée en France en _________.", fill: "2014",
  },
  {
    id: "ar18-q3", textQ: "Quel est le prix pratiqué ?", text: ["Entre 20 et 30 euros","Entre 5 et 10 euros","Plus de 100 euros"], textC: 0,
    img: ["20-30 €","5-10 €","100+ €"], imgC: 0,
    fillQ: "Prix compris entre 20 et ___ euros.", fill: "30",
  },
  {
    id: "ar18-q4", textQ: "Combien de temps maximum pour sortir ?", text: ["Une heure","Trente minutes","Deux heures"], textC: 0,
    img: ["1 h","30 min","2 h"], imgC: 0,
    fillQ: "Il faut sortir en ___ heure maximum.", fill: "une",
    fillA: ["1"],
  },
  {
    id: "ar18-q5", textQ: "De combien la fréquentation a-t-elle augmenté dans certains musées ?", text: ["Plus de 150 %","Plus de 50 %","Plus de 10 %"], textC: 0,
    img: ["150 %+","50 %+","10 %+"], imgC: 0,
    fillQ: "Hausse de plus de ___ %.", fill: "150",
  },
  {
    id: "ar18-q6", textQ: "Quel philosophe est évoqué dans le scénario de Vincennes ?", text: ["Denis Diderot","Voltaire","Rousseau"], textC: 0,
    img: ["Diderot","Voltaire","Rousseau"], imgC: 0,
    fillQ: "Le philosophe Denis _________ a été empoisonné.", fill: "Diderot",
    fillA: ["diderot"],
  },
]);

const RADIO_19 = buildPool("avance", "radio-19", [
  {
    id: "ar19-q1", textQ: "Quel est le numéro du nouvel album d'Astérix ?", text: ["Le 38e","Le 28e","Le 18e"], textC: 0,
    img: ["38e","28e","18e"], imgC: 0,
    fillQ: "C'est le ___e album.", fill: "38",
  },
  {
    id: "ar19-q2", textQ: "Comment se prénomme la nouvelle héroïne ?", text: ["Adrénaline","Falbala","Assurancetourix"], textC: 0,
    img: ["Adrénaline","Falbala","Assurancetourix"], imgC: 0,
    fillQ: "La jeune fille s'appelle _________.", fill: "Adrénaline",
    fillA: ["adrenaline"],
  },
  {
    id: "ar19-q3", textQ: "Quel est le tirage global de l'album ?", text: ["5 millions d'exemplaires","2 millions","500 000"], textC: 0,
    img: ["5 M","2 M","500 k"], imgC: 0,
    fillQ: "Tirage global de ___ millions.", fill: "5",
  },
  {
    id: "ar19-q4", textQ: "Qui est le père d'Adrénaline ?", text: ["Vercassivétrix","Ordralfabétix","Astérix"], textC: 0,
    img: ["Vercassivétrix","Ordralfabétix","Astérix"], imgC: 0,
    fillQ: "Elle est la fille de _________.", fill: "Vercassivétrix",
    fillA: ["Vercassivetrix","vercassivetrix"],
  },
  {
    id: "ar19-q5", textQ: "Combien d'albums Astérix se sont vendus dans le monde ?", text: ["380 millions","38 millions","111 millions"], textC: 0,
    img: ["380 M","38 M","111 M"], imgC: 0,
    fillQ: "___ millions d'albums vendus.", fill: "380",
  },
  {
    id: "ar19-q6", textQ: "Dans combien de langues les albums sont-ils traduits ?", text: ["111 langues","38 langues","50 langues"], textC: 0,
    img: ["111","38","50"], imgC: 0,
    fillQ: "Traduits en ___ langues.", fill: "111",
  },
]);

const RADIO_20 = buildPool("avance", "radio-20", [
  {
    id: "ar20-q1", textQ: "Combien de salariés privés sont exposés au bruit selon Sumale 2017 ?", text: ["5,8 millions","3,2 millions","1 million"], textC: 0,
    img: ["5,8 M","3,2 M","1 M"], imgC: 0,
    fillQ: "___ millions de salariés exposés.", fill: "5,8",
    fillA: ["5.8","5,8"],
  },
  {
    id: "ar20-q2", textQ: "Quel type de lieu de travail est cité ?", text: ["L'open space","La ferme","La montagne"], textC: 0,
    img: ["Open space","Ferme","Montagne"], imgC: 0,
    fillQ: "Exemple : l'_________ space.", fill: "open",
  },
  {
    id: "ar20-q3", textQ: "Depuis quand le bruit est-il reconnu comme maladie professionnelle ?", text: ["1963","2007","2017"], textC: 0,
    img: ["1963","2007","2017"], imgC: 0,
    fillQ: "Reconnu depuis _________.", fill: "1963",
  },
  {
    id: "ar20-q4", textQ: "Quelle enquête est mentionnée ?", text: ["Sumale 2017","Nestlé 2011","Francoscopie"], textC: 0,
    img: ["Sumale 2017","Nestlé 2011","Francoscopie"], imgC: 0,
    fillQ: "L'enquête _________ 2017.", fill: "Sumale",
    fillA: ["sumale","SUMER"],
  },
  {
    id: "ar20-q5", textQ: "Quels effets peuvent avoir les perturbateurs d'attention ?", text: ["Stress, fatigue et accidents","Sommeil uniquement","Aucun effet"], textC: 0,
    img: ["Stress/fatigue","Sommeil","Aucun"], imgC: 0,
    fillQ: "Ils produisent du stress et de la _________.", fill: "fatigue",
  },
  {
    id: "ar20-q6", textQ: "Quelle surface minimum par personne recommande la Carsat ?", text: ["10 mètres carrés","5 mètres carrés","20 mètres carrés"], textC: 0,
    img: ["10 m²","5 m²","20 m²"], imgC: 0,
    fillQ: "La Carsat recommande ___ mètres carrés par personne.", fill: "10",
  },
]);

const RADIO_23 = buildPool("avance", "radio-23", [
  {
    id: "ar23-q1", textQ: "Quel est le titre du film évoqué ?", text: ["Au nom de la Terre","Les Souvenirs","#Anita"], textC: 0,
    img: ["Au nom Terre","Souvenirs","#Anita"], imgC: 0,
    fillQ: "Le film s'appelle Au nom de la _________.", fill: "Terre",
    fillA: ["terre"],
  },
  {
    id: "ar23-q2", textQ: "Qui est le réalisateur du film ?", text: ["Édouard Bergeon","Rémi Bezançon","Grand Corps Malade"], textC: 0,
    img: ["Bergeon","Bezançon","GCM"], imgC: 0,
    fillQ: "Le réalisateur est Édouard _________.", fill: "Bergeon",
    fillA: ["bergeon"],
  },
  {
    id: "ar23-q3", textQ: "Quel métier exerce le personnage principal ?", text: ["Agriculteur","Critique littéraire","Coiffeur"], textC: 0,
    img: ["Agriculteur","Critique","Coiffeur"], imgC: 0,
    fillQ: "Il est _________ en détresse.", fill: "agriculteur",
  },
  {
    id: "ar23-q4", textQ: "Quel est le résultat du film au box-office ?", text: ["Il cartonne en tête","Il est interdit","Il n'est pas sorti"], textC: 0,
    img: ["Cartonne","Interdit","Non sorti"], imgC: 0,
    fillQ: "Le film _________ en tête du box-office.", fill: "cartonne",
  },
  {
    id: "ar23-q5", textQ: "Quel sujet traite le film selon un spectateur ?", text: ["L'agriculture","Le tourisme","La pétanque"], textC: 0,
    img: ["Agriculture","Tourisme","Pétanque"], imgC: 0,
    fillQ: "Sujet intéressant sur l'_________.", fill: "agriculture",
  },
  {
    id: "ar23-q6", textQ: "Pour qui le film est-il conseillé ?", text: ["Un public non initié au milieu agricole","Uniquement les enfants","Les collectionneurs"], textC: 0,
    img: ["Non initié","Enfants","Collectionneurs"], imgC: 0,
    fillQ: "À conseiller pour un public non _________ au milieu agricole.", fill: "initié",
    fillA: ["initie"],
  },
]);

const RADIO_24 = buildPool("avance", "radio-24", [
  {
    id: "ar24-q1", textQ: "Quand McDonald's s'est-il implanté en France ?", text: ["Le 17 septembre 1979","En 2003","En 1990"], textC: 0,
    img: ["17 sept. 1979","2003","1990"], imgC: 0,
    fillQ: "Implanté le 17 septembre _________.", fill: "1979",
  },
  {
    id: "ar24-q2", textQ: "Qui s'est adapté aux habitudes alimentaires françaises ?", text: ["Le fast-food","Les familles uniquement","Les agriculteurs"], textC: 0,
    img: ["Fast-food","Familles","Agriculteurs"], imgC: 0,
    fillQ: "C'est le _________ qui s'est adapté.", fill: "fast-food",
    fillA: ["fast food","fastfood"],
  },
  {
    id: "ar24-q3", textQ: "Combien de calories peut contenir un menu type ?", text: ["800 à 1 000","200 à 300","1 500 à 2 000"], textC: 0,
    img: ["800-1000","200-300","1500-2000"], imgC: 0,
    fillQ: "Un menu peut contenir 800 à ___ calories.", fill: "1000",
    fillA: ["1 000"],
  },
  {
    id: "ar24-q4", textQ: "Quel est le slogan cité de McDonald's ?", text: ["Venez comme vous êtes","I'm lovin' it","C'est ça qu'on aime"], textC: 0,
    img: ["Venez comme vous êtes","Lovin' it","C'est ça"], imgC: 0,
    fillQ: "Slogan : Venez comme vous _________.", fill: "êtes",
    fillA: ["etes"],
  },
  {
    id: "ar24-q5", textQ: "Combien de temps pour avaler un menu?", text: ["Moins de trente minutes","Une heure","Deux heures"], textC: 0,
    img: ["< 30 min","1 h","2 h"], imgC: 0,
    fillQ: "Avaler un menu en moins de ___ minutes.", fill: "trente",
    fillA: ["30"],
  },
  {
    id: "ar24-q6", textQ: "Quel sociologue est cité ?", text: ["Thibaut de Saint Pol","Gérard Mermet","Emmanuel Jaffelin"], textC: 0,
    img: ["Saint Pol","Mermet","Jaffelin"], imgC: 0,
    fillQ: "Thibaut de Saint _________ est sociologue.", fill: "Pol",
    fillA: ["pol"],
  },
]);

const RADIO_25 = buildPool("avance", "radio-25", [
  {
    id: "ar25-q1", textQ: "Combien pèse environ un vélo cargo électrique ?", text: ["Plus de 100 kg","Plus de 50 kg","Plus de 200 kg"], textC: 0,
    img: ["100+ kg","50+ kg","200+ kg"], imgC: 0,
    fillQ: "Très lourds, plus de ___ kg.", fill: "100",
  },
  {
    id: "ar25-q2", textQ: "Quelle est la différence entre biporteur et triporteur ?", text: ["Deux roues contre trois","Un moteur contre deux","Un enfant contre dix"], textC: 0,
    img: ["2 vs 3 roues","1 vs 2 moteurs","1 vs 10 enfants"], imgC: 0,
    fillQ: "Le biporteur a deux roues, le triporteur en a _________.", fill: "trois",
    fillA: ["3"],
  },
  {
    id: "ar25-q3", textQ: "Quel vélo est plus stable ?", text: ["Le triporteur","Le biporteur","Le vélo classique"], textC: 0,
    img: ["Triporteur","Biporteur","Classique"], imgC: 0,
    fillQ: "Plus stable : le _________.", fill: "triporteur",
  },
  {
    id: "ar25-q4", textQ: "Pour combien d'enfants le biporteur est-il idéal ?", text: ["Deux enfants","Quatre enfants","Un seul"], textC: 0,
    img: ["2","4","1"], imgC: 0,
    fillQ: "Le biporteur est idéal pour ___ enfants.", fill: "deux",
    fillA: ["2"],
  },
  {
    id: "ar25-q5", textQ: "La grande majorité de ces vélos sont :", text: ["Électriques","Manuels uniquement","Sans panier"], textC: 0,
    img: ["Électriques","Manuels","Sans panier"], imgC: 0,
    fillQ: "La majorité sont _________.", fill: "électriques",
    fillA: ["electriques"],
  },
  {
    id: "ar25-q6", textQ: "Quand les vélos de fret reviennent-ils à la mode ?", text: ["À la fin des années 1980","Dans les années 1930","En 1899"], textC: 0,
    img: ["Années 1980","Années 1930","1899"], imgC: 0,
    fillQ: "Ils reviennent à la mode à la fin des années _________.", fill: "1980",
  },
]);

const RADIO_26 = buildPool("avance", "radio-26", [
  {
    id: "ar26-q1", textQ: "Combien d'années de températures ont été retracées ?", text: ["Deux mille ans","Cent cinquante ans","Cinq cents ans"], textC: 0,
    img: ["2000 ans","150 ans","500 ans"], imgC: 0,
    fillQ: "Retrace de ___ mille ans de températures.", fill: "deux",
    fillA: ["2"],
  },
  {
    id: "ar26-q2", textQ: "Quel est le caractère inédit du réchauffement actuel ?", text: ["Universel et homogène","Limité au Groenland","Très lent"], textC: 0,
    img: ["Universel","Groenland","Lent"], imgC: 0,
    fillQ: "Il est sans précédent de par son caractère _________.", fill: "universel",
  },
  {
    id: "ar26-q3", textQ: "Combien d'indicateurs climatiques ont été étudiés ?", text: ["Près de 700","Près de 70","Près de 7 000"], textC: 0,
    img: ["700","70","7000"], imgC: 0,
    fillQ: "Près de ___ indicateurs climatiques.", fill: "700",
  },
  {
    id: "ar26-q4", textQ: "Dans quelles revues les analyses ont-elles été publiées ?", text: ["Nature et Nature Geoscience","Le Monde","Femme actuelle"], textC: 0,
    img: ["Nature","Le Monde","Femme actuelle"], imgC: 0,
    fillQ: "Publié dans Nature et Nature _________.", fill: "Geoscience",
    fillA: ["geoscience"],
  },
  {
    id: "ar26-q5", textQ: "Qui est la paléoclimatologue citée ?", text: ["Valérie Masson-Delmotte","Jennifer Brandon","Anne Rodier"], textC: 0,
    img: ["Masson-Delmotte","Brandon","Rodier"], imgC: 0,
    fillQ: "Valérie Masson-_________ est paléoclimatologue.", fill: "Delmotte",
    fillA: ["delmotte"],
  },
  {
    id: "ar26-q6", textQ: "Où la banquise a-t-elle fondu très tôt en juin 2019 ?", text: ["Dans le fjord d'Inglefield au Groenland","À Paris","En Suisse"], textC: 0,
    img: ["Groenland","Paris","Suisse"], imgC: 0,
    fillQ: "Fonte précoce au fjord d'_________ au Groenland.", fill: "Inglefield",
    fillA: ["inglefield"],
  },
]);

const RADIO_27 = buildPool("avance", "radio-27", [
  {
    id: "ar27-q1", textQ: "Qui est Jennifer Brandon ?", text: ["Une chercheuse en océanographie","Une paléoclimatologue","Une vétérinaire"], textC: 0,
    img: ["Océanographie","Paléoclimat","Vétérinaire"], imgC: 0,
    fillQ: "Chercheuse à la Scripps Institution of _________.", fill: "Oceanography",
    fillA: ["oceanography"],
  },
  {
    id: "ar27-q2", textQ: "Où les prélèvements ont-ils été réalisés ?", text: ["Au large de Santa Barbara","À Monterey uniquement","Dans le Pacifique à 10 927 m"], textC: 0,
    img: ["Santa Barbara","Monterey","Abysses"], imgC: 0,
    fillQ: "Prélèvements au large de Santa _________.", fill: "Barbara",
    fillA: ["barbara"],
  },
  {
    id: "ar27-q3", textQ: "À quelle fréquence les microplastiques ont-ils doublé ?", text: ["Tous les quinze ans","Tous les cinq ans","Chaque année"], textC: 0,
    img: ["15 ans","5 ans","1 an"], imgC: 0,
    fillQ: "Doublé tous les ___ ans environ.", fill: "quinze",
    fillA: ["15"],
  },
  {
    id: "ar27-q4", textQ: "Quand les plastiques étaient-ils quasi inexistants dans les sédiments ?", text: ["Avant la fin de la Seconde Guerre mondiale","Avant 1834","Avant 2010"], textC: 0,
    img: ["Avant 1945","Avant 1834","Avant 2010"], imgC: 0,
    fillQ: "Quasi inexistants avant la fin de la Seconde Guerre _________.", fill: "mondiale",
  },
  {
    id: "ar27-q5", textQ: "Quel âge historique compare Jennifer Brandon ?", text: ["L'âge du plastique","L'âge du bronze","L'âge de pierre"], textC: 0,
    img: ["Plastique","Bronze","Pierre"], imgC: 0,
    fillQ: "Sera-t-on connus comme l'âge du _________ ?", fill: "plastique",
  },
  {
    id: "ar27-q6", textQ: "Qu'a trouvé Victor Vescovo dans les abysses ?", text: ["Un sac plastique et des emballages de bonbons","Une carotte de glace","Un corail"], textC: 0,
    img: ["Sac plastique","Carotte glace","Corail"], imgC: 0,
    fillQ: "Il a trouvé un sac _________ et des emballages.", fill: "plastique",
  },
]);

const RADIO_28 = buildPool("avance", "radio-28", [
  {
    id: "ar28-q1", textQ: "Quel groupe lance l'appel à projets ?", text: ["Groupe SOS","Nestlé","McDonald's"], textC: 0,
    img: ["Groupe SOS","Nestlé","McDonald's"], imgC: 0,
    fillQ: "Le groupe _________ lance l'appel.", fill: "SOS",
  },
  {
    id: "ar28-q2", textQ: "Qui est le président de Groupe SOS ?", text: ["Jean-Marc Borello","Édouard Philippe","Pascal Samama"], textC: 0,
    img: ["Borello","Philippe","Samama"], imgC: 0,
    fillQ: "Son président s'appelle Jean-Marc _________.", fill: "Borello",
    fillA: ["borello"],
  },
  {
    id: "ar28-q3", textQ: "Combien de cafés veut-on créer ou reprendre ?", text: ["1 000","100","10 000"], textC: 0,
    img: ["1000","100","10000"], imgC: 0,
    fillQ: "Créer ou reprendre ___ cafés.", fill: "1000",
    fillA: ["1 000"],
  },
  {
    id: "ar28-q4", textQ: "Quels services auront ces lieux en plus du bistrot ?", text: ["Relais de poste, accès numérique, épicerie et dépôt de pain","Uniquement des boissons","Des salles de sport"], textC: 0,
    img: ["Poste/numérique","Boissons","Sport"], imgC: 0,
    fillQ: "Ce seront aussi des relais de _________.", fill: "poste",
  },
  {
    id: "ar28-q5", textQ: "Sur quel site l'appel à candidature sera-t-il lancé ?", text: ["1000 Cafés","BFMTV","Le site de l'État"], textC: 0,
    img: ["1000 Cafés","BFMTV","État"], imgC: 0,
    fillQ: "L'appel sera lancé sur le site « ___ Cafés ».", fill: "1000",
    fillA: ["1 000"],
  },
  {
    id: "ar28-q6", textQ: "Qui détaillera l'agenda rural le 20 septembre ?", text: ["Édouard Philippe","Jean-Marc Borello","Pascal Samama"], textC: 0,
    img: ["Philippe","Borello","Samama"], imgC: 0,
    fillQ: "L'agenda rural sera détaillé par Édouard _________.", fill: "Philippe",
  },
]);

const RADIO_29 = buildPool("avance", "radio-29", [
  {
    id: "ar29-q1", textQ: "Dans quelle ville se trouvent les cabines particulières ?", text: ["Nantes","Paris","Lyon"], textC: 0,
    img: ["Nantes","Paris","Lyon"], imgC: 0,
    fillQ: "Le reportage se situe à _________.", fill: "Nantes",
  },
  {
    id: "ar29-q2", textQ: "Que peut-on faire dans ces cabines ?", text: ["Écouter des œuvres littéraires","Téléphoner","Acheter des livres"], textC: 0,
    img: ["Écouter","Téléphoner","Acheter"], imgC: 0,
    fillQ: "On peut écouter des œuvres _________.", fill: "littéraires",
    fillA: ["litteraires"],
  },
  {
    id: "ar29-q3", textQ: "Comment « contacter » les auteurs ?", text: ["En tapant leur date de naissance","En composant un numéro","En envoyant un SMS"], textC: 0,
    img: ["Date naissance","Numéro","SMS"], imgC: 0,
    fillQ: "Il faut taper leur date de _________.", fill: "naissance",
  },
  {
    id: "ar29-q4", textQ: "Quels auteurs sont mentionnés ?", text: ["Georges Orwell, Marguerite Yourcenar et Sylvain Tesson","Charles Aznavour et Édouard Philippe","Victor Hugo et Molière"], textC: 0,
    img: ["Orwell/Yourcenar/Tesson","Aznavour/Philippe","Hugo/Molière"], imgC: 0,
    fillQ: "On entend notamment Georges _________.", fill: "Orwell",
  },
  {
    id: "ar29-q5", textQ: "Quelle librairie est à l'origine de l'initiative ?", text: ["Coiffard","Gallimard","Hachette"], textC: 0,
    img: ["Coiffard","Gallimard","Hachette"], imgC: 0,
    fillQ: "La librairie _________ est à l'origine du projet.", fill: "Coiffard",
    fillA: ["coiffard"],
  },
  {
    id: "ar29-q6", textQ: "D'où viennent ces cabines ?", text: ["D'Angleterre","D'Écosse","D'Irlande"], textC: 0,
    img: ["Angleterre","Écosse","Irlande"], imgC: 0,
    fillQ: "Ces cabines ont été importées d'_________.", fill: "Angleterre",
  },
]);

const RADIO_30 = buildPool("avance", "radio-30", [
  {
    id: "ar30-q1", textQ: "Combien d'adeptes compte Instagram sur la planète ?", text: ["Un milliard","Un million","Cent mille"], textC: 0,
    img: ["1 milliard","1 million","100 000"], imgC: 0,
    fillQ: "Instagram compte un _________ d'adeptes.", fill: "milliard",
  },
  {
    id: "ar30-q2", textQ: "Quel effet recherche-t-on le plus souvent sur Insta ?", text: ["Un effet avantageux ou esthétique","Un effet spontané et brut","Un effet comique"], textC: 0,
    img: ["Esthétique","Spontané","Comique"], imgC: 0,
    fillQ: "L'effet recherché doit être avantageux ou _________.", fill: "esthétique",
    fillA: ["esthetique"],
  },
  {
    id: "ar30-q3", textQ: "Quand Instagram a-t-il annoncé de nouveaux outils contre le harcèlement ?", text: ["En juillet dernier","En janvier","En décembre"], textC: 0,
    img: ["Juillet","Janvier","Décembre"], imgC: 0,
    fillQ: "Annoncé en _________ dernier.", fill: "juillet",
  },
  {
    id: "ar30-q4", textQ: "Dans combien de pays le nombre de likes est-il caché ?", text: ["Six pays","Trois pays","Dix pays"], textC: 0,
    img: ["6 pays","3 pays","10 pays"], imgC: 0,
    fillQ: "Le nombre de likes est caché dans ___ pays.", fill: "six",
    fillA: ["6"],
  },
  {
    id: "ar30-q5", textQ: "Pourquoi l'exclusion des réseaux sociaux est-elle douloureuse pour les ados ?", text: ["Parce qu'ils veulent appartenir à un groupe","Parce qu'ils détestent les photos","Parce qu'ils n'ont pas de smartphone"], textC: 0,
    img: ["Appartenir groupe","Détestent photos","Pas smartphone"], imgC: 0,
    fillQ: "La force d'attraction réside dans le sentiment d'_________ à un groupe.", fill: "appartenir",
  },
  {
    id: "ar30-q6", textQ: "Que peuvent faire les parents pour aider leurs ados ?", text: ["S'abonner à Instagram et suivre des comptes","Interdire tout smartphone","Supprimer toutes les photos"], textC: 0,
    img: ["S'abonner Insta","Interdire smartphone","Supprimer photos"], imgC: 0,
    fillQ: "Les parents peuvent s'abonner à _________.", fill: "Instagram",
    fillA: ["instagram", "Insta"],
  },
]);

const RADIO_31 = buildPool("avance", "radio-31", [
  {
    id: "ar31-q1", textQ: "Quel est le secret pour bien manger seul ?", text: ["L'anticipation","L'improvisation","Commander toujours à emporter"], textC: 0,
    img: ["Anticipation","Improvisation","À emporter"], imgC: 0,
    fillQ: "Le secret, c'est l'_________.", fill: "anticipation",
  },
  {
    id: "ar31-q2", textQ: "Comment appelle-t-on aujourd'hui l'art d'accommoder les restes ?", text: ["Le slash cooking","Le batch cooking","Le slow cooking"], textC: 0,
    img: ["Slash cooking","Batch cooking","Slow cooking"], imgC: 0,
    fillQ: "On appelle cela le slash _________.", fill: "cooking",
  },
  {
    id: "ar31-q3", textQ: "Que peut-on faire avec un bouillon de pot-au-feu congelé ?", text: ["Parfumer des ravioles ou pocher un poisson","Faire un sorbet","Remplacer le camembert"], textC: 0,
    img: ["Ravioles/poisson","Sorbet","Camembert"], imgC: 0,
    fillQ: "Un bouillon congelé peut parfumer des _________.", fill: "ravioles",
  },
  {
    id: "ar31-q4", textQ: "Quel dessert rapide est cité ?", text: ["Le pavlova","Le tiramisu","La tarte Tatin"], textC: 0,
    img: ["Pavlova","Tiramisu","Tarte Tatin"], imgC: 0,
    fillQ: "Un dessert cité est le _________.", fill: "pavlova",
  },
  {
    id: "ar31-q5", textQ: "Quel bénéfice d'une cuisine plus saine est mentionné ?", text: ["On dort mieux et on est plus en forme","On voyage plus","On cuisine moins"], textC: 0,
    img: ["Dort mieux","Voyage plus","Cuisine moins"], imgC: 0,
    fillQ: "On dort mieux, on est plus en _________.", fill: "forme",
  },
  {
    id: "ar31-q6", textQ: "D'où provient ce texte ?", text: ["La Vie n° 3872","La Croix","France Inter"], textC: 0,
    img: ["La Vie","La Croix","France Inter"], imgC: 0,
    fillQ: "D'après : ___ Vie n° 3872.", fill: "La",
  },
]);

const RADIO_32 = buildPool("avance", "radio-32", [
  {
    id: "ar32-q1", textQ: "Quel règlement est mentionné ?", text: ["Le RGPD","Le GDPR américain","Le règlement SNCF"], textC: 0,
    img: ["RGPD","GDPR US","SNCF"], imgC: 0,
    fillQ: "Règlement général sur la protection des _________.", fill: "données",
  },
  {
    id: "ar32-q2", textQ: "Quelle entreprise est concernée ?", text: ["OUI.sncf","La Poste","Orange"], textC: 0,
    img: ["OUI.sncf","La Poste","Orange"], imgC: 0,
    fillQ: "Les droits concernent _________.sncf.", fill: "OUI",
    fillA: ["oui"],
  },
  {
    id: "ar32-q3", textQ: "Sous quel format les données de portabilité sont-elles transmises ?", text: ["Fichier csv","Fichier pdf","Fichier mp3"], textC: 0,
    img: ["CSV","PDF","MP3"], imgC: 0,
    fillQ: "Sous un format électronique fichier _________.", fill: "csv",
    fillA: ["CSV"],
  },
  {
    id: "ar32-q4", textQ: "Où envoyer une demande par courrier ?", text: ["2, place de la Défense – Paris La Défense Cedex","Gare de Lyon","1, rue de Rivoli"], textC: 0,
    img: ["La Défense","Gare de Lyon","Rivoli"], imgC: 0,
    fillQ: "Courrier à la place de la _________.", fill: "Défense",
    fillA: ["Defense", "defense"],
  },
  {
    id: "ar32-q5", textQ: "Comment se désinscrire des newsletters commerciales ?", text: ["En cliquant sur le lien de désinscription","En appelant le 36 35","En supprimant son compte"], textC: 0,
    img: ["Lien désinscription","Appel 36 35","Supprimer compte"], imgC: 0,
    fillQ: "En cliquant sur le lien de _________.", fill: "désinscription",
    fillA: ["desinscription"],
  },
  {
    id: "ar32-q6", textQ: "Que peut-on faire via son compte client ?", text: ["La plupart des opérations d'accès, correction et effacement","Uniquement acheter des billets","Rien du tout"], textC: 0,
    img: ["Accès/correction","Acheter billets","Rien"], imgC: 0,
    fillQ: "Via son compte _________ client.", fill: "client",
  },
]);

export const CO_QUESTION_POOLS_AVANCE_EXTRA: Record<string, COMultiQuestion[]> = {
  "avance-conversation-11": CONVERSATION_11,
  "avance-conversation-12": CONVERSATION_12,
  "avance-conversation-13": CONVERSATION_13,
  "avance-conversation-14": CONVERSATION_14,
  "avance-conversation-15": CONVERSATION_15,
  "avance-conversation-16": CONVERSATION_16,
  "avance-conversation-17": CONVERSATION_17,
  "avance-conversation-18": CONVERSATION_18,
  "avance-radio-1": RADIO_1,
  "avance-radio-2": RADIO_2,
  "avance-radio-3": RADIO_3,
  "avance-radio-4": RADIO_4,
  "avance-radio-5": RADIO_5,
  "avance-radio-6": RADIO_6,
  "avance-radio-7": RADIO_7,
  "avance-radio-8": RADIO_8,
  "avance-radio-9": RADIO_9,
  "avance-radio-10": RADIO_10,
  "avance-radio-11": RADIO_11,
  "avance-radio-12": RADIO_12,
  "avance-radio-13": RADIO_13,
  "avance-radio-14": RADIO_14,
  "avance-radio-15": RADIO_15,
  "avance-radio-16": RADIO_16,
  "avance-radio-17": RADIO_17,
  "avance-radio-18": RADIO_18,
  "avance-radio-19": RADIO_19,
  "avance-radio-20": RADIO_20,
  "avance-radio-21": RADIO_21,
  "avance-radio-22": RADIO_22,
  "avance-radio-23": RADIO_23,
  "avance-radio-24": RADIO_24,
  "avance-radio-25": RADIO_25,
  "avance-radio-26": RADIO_26,
  "avance-radio-27": RADIO_27,
  "avance-radio-28": RADIO_28,
  "avance-radio-29": RADIO_29,
  "avance-radio-30": RADIO_30,
  "avance-radio-31": RADIO_31,
  "avance-radio-32": RADIO_32,
};
