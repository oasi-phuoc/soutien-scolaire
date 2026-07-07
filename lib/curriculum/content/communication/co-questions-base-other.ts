import { buildPool, type COMultiQuestion } from "./co-questions-helpers";

const ANNONCE_1 = buildPool("base", "annonce-1", [
  {
    id: "an1-q1", textQ: "Selon l'annonce, quel événement est célébré ?", text: ["Les 10 ans du festival","Les 20 ans du festival","L'ouverture d'un théâtre"], textC: 0,
    img: ["10 ans","20 ans","ouverture"], imgC: 0,
    fillQ: "Selon l'annonce, le festival fête ses _________ ans.", fill: "dix", fillA: ["10"]
  },
  {
    id: "an1-q2", textQ: "Selon l'annonce, combien de pièces sont au programme ?", text: ["4 pièces","6 pièces","10 pièces"], textC: 1,
    img: ["4","6","10"], imgC: 1,
    fillQ: "Selon l'annonce, il y a _________ pièces de théâtre.", fill: "6", fillA: ["six"]
  },
  {
    id: "an1-q3", textQ: "Selon l'annonce, combien de spectateurs viennent chaque année ?", text: ["1 000","3 000","5 000"], textC: 1,
    img: ["1000","3000","5000"], imgC: 1,
    fillQ: "Selon l'annonce, _________ personnes assistent au spectacle.", fill: "3000", fillA: ["3 000"]
  },
  {
    id: "an1-q4", textQ: "Selon l'annonce, quelle date est annoncée ?", text: ["Le 20 juillet","Le 20 juin","Le 30 juillet"], textC: 0,
    img: ["20/07","20/06","30/07"], imgC: 0,
    fillQ: "Selon l'annonce, l'événement est le 20 _________.", fill: "juillet"
  },
  {
    id: "an1-q5", textQ: "Selon l'annonce, comment réserver ?", text: ["Par téléphone ou sur Internet","Uniquement au guichet","Par courrier"], textC: 0,
    img: ["téléphone/web","guichet","courrier"], imgC: 0,
    fillQ: "Selon l'annonce, réserver par téléphone ou sur _________.", fill: "Internet", fillA: ["internet"]
  },
  {
    id: "an1-q6", textQ: "Selon l'annonce, de quel type d'événement s'agit-il ?", text: ["Un festival de théâtre","Un festival de musique","Un festival de cinéma"], textC: 0,
    img: ["théâtre","musique","cinéma"], imgC: 0,
    fillQ: "Selon l'annonce, c'est un festival de _________.", fill: "théâtre", fillA: ["theatre"]
  },
  {
    id: "an1-q7", textQ: "Selon l'annonce, peut-on réserver maintenant ?", text: ["Oui","Non","Seulement en juillet"], textC: 0,
    img: ["oui","non","plus tard"], imgC: 0,
    fillQ: "Selon l'annonce, on peut réserver dès _________.", fill: "maintenant"
  },
  {
    id: "an1-q8", textQ: "Selon l'annonce, le festival est-il populaire ?", text: ["Oui, il a beaucoup de succès","Non","On ne sait pas"], textC: 0,
    img: ["succès","échec","inconnu"], imgC: 0,
    fillQ: "Selon l'annonce, le festival a beaucoup de _________.", fill: "succès", fillA: ["succes"]
  },
  {
    id: "an1-q9", textQ: "Selon l'annonce, que réserve-t-on ?", text: ["Des places","Des billets de train","Des chambres"], textC: 0,
    img: ["places","trains","chambres"], imgC: 0,
    fillQ: "Selon l'annonce, on peut réserver des _________.", fill: "places"
  },
  {
    id: "an1-q10", textQ: "Selon l'annonce, combien d'années le festival existe-t-il ?", text: ["10 ans","5 ans","20 ans"], textC: 0,
    img: ["10","5","20"], imgC: 0,
    fillQ: "Selon l'annonce, le festival a _________ ans.", fill: "dix", fillA: ["10"]
  }
]);

const ANNONCE_2 = buildPool("base", "annonce-2", [
  {
    id: "an2-q1", textQ: "Selon l'annonce, quelle réduction sur les jeux vidéo ?", text: ["10 %","20 %","30 %"], textC: 0,
    img: ["10 %","20 %","30 %"], imgC: 0,
    fillQ: "Selon l'annonce, moins _________ % sur les jeux vidéo.", fill: "10", fillA: ["dix"]
  },
  {
    id: "an2-q2", textQ: "Selon l'annonce, quelle réduction sur les accessoires ?", text: ["10 %","20 %","30 %"], textC: 1,
    img: ["10 %","20 %","30 %"], imgC: 1,
    fillQ: "Selon l'annonce, moins _________ % sur les accessoires.", fill: "20", fillA: ["vingt"]
  },
  {
    id: "an2-q3", textQ: "Selon l'annonce, à partir de quel montant une remise est offerte ?", text: ["100 €","150 €","200 €"], textC: 1,
    img: ["100 €","150 €","200 €"], imgC: 1,
    fillQ: "Selon l'annonce, si vous dépensez _________ euros.", fill: "150"
  },
  {
    id: "an2-q4", textQ: "Selon l'annonce, combien de remise en euros ?", text: ["15 €","25 €","35 €"], textC: 1,
    img: ["15 €","25 €","35 €"], imgC: 1,
    fillQ: "Selon l'annonce, remise de _________ euros.", fill: "25"
  },
  {
    id: "an2-q5", textQ: "Selon l'annonce, jusqu'à quand l'offre est valable ?", text: ["Le 30 janvier","Le 29 janvier","Le 15 février"], textC: 0,
    img: ["30/01","29/01","15/02"], imgC: 0,
    fillQ: "Selon l'annonce, offre valable jusqu'au 30 _________.", fill: "janvier"
  },
  {
    id: "an2-q6", textQ: "Selon l'annonce, quand ouvre-t-on exceptionnellement ?", text: ["Le dimanche 29","Le samedi 29","Le lundi 30"], textC: 0,
    img: ["29/01","28/01","30/01"], imgC: 0,
    fillQ: "Selon l'annonce, ouverture exceptionnelle le _________ 29.", fill: "dimanche"
  },
  {
    id: "an2-q7", textQ: "Selon l'annonce, quel type de produits est en promotion ?", text: ["Jeux vidéo et accessoires","Vêtements","Alimentaire"], textC: 0,
    img: ["jeux","vêtements","alimentaire"], imgC: 0,
    fillQ: "Selon l'annonce, promotions sur les jeux _________.", fill: "vidéo", fillA: ["video"]
  },
  {
    id: "an2-q8", textQ: "Selon l'annonce, les promotions sont-elles exceptionnelles ?", text: ["Oui","Non","Seulement en ligne"], textC: 0,
    img: ["oui","non","ligne"], imgC: 0,
    fillQ: "Selon l'annonce, promotions _________.", fill: "exceptionnelles", fillA: ["exceptionnelle"]
  },
  {
    id: "an2-q9", textQ: "Selon l'annonce, faut-il dépenser 150 € pour la remise ?", text: ["Oui","Non","Il faut 200 €"], textC: 0,
    img: ["oui","non","200 €"], imgC: 0,
    fillQ: "Selon l'annonce, dépenser 150 € pour une remise de 25 _________.", fill: "euros"
  },
  {
    id: "an2-q10", textQ: "Selon l'annonce, l'offre se termine en janvier ?", text: ["Oui","Non, en février","Non, en mars"], textC: 0,
    img: ["30/01","15/02","15/03"], imgC: 0,
    fillQ: "Selon l'annonce, valable jusqu'au 30 _________.", fill: "janvier"
  }
]);

const ANNONCE_3 = buildPool("base", "annonce-3", [
  {
    id: "an3-q1", textQ: "Selon l'annonce, quelle heure est-il ?", text: ["14 h","12 h","16 h"], textC: 0,
    img: ["14 h","12 h","16 h"], imgC: 0,
    fillQ: "Selon l'annonce, il est _________ h.", fill: "14", fillA: ["quatorze"]
  },
  {
    id: "an3-q2", textQ: "Selon l'annonce, que peut-on gagner ?", text: ["Des places pour un festival","Un vélo","Un livre"], textC: 0,
    img: ["places festival","vélo","livre"], imgC: 0,
    fillQ: "Selon l'annonce, gagner des places pour un _________.", fill: "festival"
  },
  {
    id: "an3-q3", textQ: "Selon l'annonce, quand a lieu le festival ?", text: ["Du 27 au 31 mai","Du 20 au 25 juillet","Du 17 au 19 avril"], textC: 0,
    img: ["27-31/05","20-25/07","17-19/04"], imgC: 0,
    fillQ: "Selon l'annonce, le festival est du 27 au 31 _________.", fill: "mai"
  },
  {
    id: "an3-q4", textQ: "Selon l'annonce, comment participer au jeu ?", text: ["Appeler et reconnaître une chanson","Envoyer un SMS","Aller au studio"], textC: 0,
    img: ["appeler","SMS","studio"], imgC: 0,
    fillQ: "Selon l'annonce, il faut écouter une _________ et dire son titre.", fill: "chanson"
  },
  {
    id: "an3-q5", textQ: "Selon l'annonce, combien de places peut-on gagner ?", text: ["Deux","Une","Quatre"], textC: 0,
    img: ["2 billets","1 billet","4 billets"], imgC: 0,
    fillQ: "Selon l'annonce, vous gagnez deux _________.", fill: "places"
  },
  {
    id: "an3-q6", textQ: "Selon l'annonce, quel type de festival ?", text: ["Festival musical","Festival de théâtre","Festival de cinéma"], textC: 0,
    img: ["musique","théâtre","cinéma"], imgC: 0,
    fillQ: "Selon l'annonce, festival _________.", fill: "musical"
  },
  {
    id: "an3-q7", textQ: "Selon l'annonce, faut-il reconnaître une chanson ?", text: ["Oui","Non","Seulement pour les enfants"], textC: 0,
    img: ["oui","non","enfants"], imgC: 0,
    fillQ: "Selon l'annonce, dire le titre de la _________.", fill: "chanson"
  },
  {
    id: "an3-q8", textQ: "Selon l'annonce, le festival dure combien de jours ?", text: ["5 jours","3 jours","7 jours"], textC: 0,
    img: ["5 jours","3 jours","7 jours"], imgC: 0,
    fillQ: "Selon l'annonce, du 27 au 31, soit _________ jours.", fill: "5", fillA: ["cinq"]
  },
  {
    id: "an3-q9", textQ: "Selon l'annonce, quelle émission diffuse le message ?", text: ["Une radio","La télévision","Un podcast"], textC: 0,
    img: ["radio","télévision","podcast"], imgC: 0,
    fillQ: "Selon l'annonce, message à la _________.", fill: "radio"
  },
  {
    id: "an3-q10", textQ: "Selon l'annonce, que faut-il faire pour jouer ?", text: ["Appeler","Acheter un billet","S'inscrire en ligne"], textC: 0,
    img: ["appeler","acheter","s'inscrire"], imgC: 0,
    fillQ: "Selon l'annonce, pour jouer, _________.", fill: "appelez", fillA: ["appeler"]
  }
]);

const ANNONCE_4 = buildPool("base", "annonce-4", [
  {
    id: "an4-q1", textQ: "Selon l'annonce, quel jour sommes-nous ?", text: ["Mercredi","Samedi","Dimanche"], textC: 0,
    img: ["jour 3","week-end","jour 7"], imgC: 0,
    fillQ: "Selon l'annonce, aujourd'hui _________.", fill: "mercredi"
  },
  {
    id: "an4-q2", textQ: "Selon l'annonce, quel film est recommandé pour les enfants ?", text: ["La Petite Fabrique du monde","La Belle et la Bête","Un film d'action"], textC: 0,
    img: ["dessins animés","film classique","action"], imgC: 0,
    fillQ: "Selon l'annonce, pour les enfants : La Petite Fabrique du _________.", fill: "monde"
  },
  {
    id: "an4-q3", textQ: "Selon l'annonce, combien de dessins animés compose le film pour enfants ?", text: ["Sept","Cinq","Dix"], textC: 0,
    img: ["7","5","10"], imgC: 0,
    fillQ: "Selon l'annonce, _________ dessins animés.", fill: "sept", fillA: ["7"]
  },
  {
    id: "an4-q4", textQ: "Selon l'annonce, quel film classique est cité ?", text: ["La Belle et la Bête","Le Roi lion","Titanic"], textC: 0,
    img: ["conte classique","animation","drame"], imgC: 0,
    fillQ: "Selon l'annonce, voir La Belle et la _________.", fill: "Bête", fillA: ["bete","Bete"]
  },
  {
    id: "an4-q5", textQ: "Selon l'annonce, quand ce film classique est-il sorti ?", text: ["En 1946","En 1994","En 2000"], textC: 0,
    img: ["1946","1994","2000"], imgC: 0,
    fillQ: "Selon l'annonce, sorti en _________.", fill: "1946"
  },
  {
    id: "an4-q6", textQ: "Selon l'annonce, combien de temps revient le film classique au cinéma ?", text: ["Une semaine","Un mois","Un jour"], textC: 0,
    img: ["1 semaine","1 mois","1 jour"], imgC: 0,
    fillQ: "Selon l'annonce, il revient pendant une _________.", fill: "semaine"
  },
  {
    id: "an4-q7", textQ: "Selon l'annonce, que peut-on gagner en appelant ?", text: ["Deux places gratuites","Un DVD","Un poster"], textC: 0,
    img: ["2 billets","DVD","poster"], imgC: 0,
    fillQ: "Selon l'annonce, gagner deux places _________.", fill: "gratuites", fillA: ["gratuit"]
  },
  {
    id: "an4-q8", textQ: "Selon l'annonce, les films pour enfants parlent de quoi ?", text: ["Émotion et imagination","Sport","Histoire"], textC: 0,
    img: ["émotion","sport","histoire"], imgC: 0,
    fillQ: "Selon l'annonce, sur l'émotion et l'_________.", fill: "imagination"
  },
  {
    id: "an4-q9", textQ: "Selon l'annonce, quel type de cinéma pour La Belle et la Bête ?", text: ["Cinéma classique","Film d'horreur","Comédie moderne"], textC: 0,
    img: ["classique","horreur","comédie"], imgC: 0,
    fillQ: "Selon l'annonce, cinéma _________.", fill: "classique"
  },
  {
    id: "an4-q10", textQ: "Selon l'annonce, l'annonce parle de quoi ?", text: ["De nouveaux films","De concerts","De livres"], textC: 0,
    img: ["films","concerts","livres"], imgC: 0,
    fillQ: "Selon l'annonce, on parle de nouveaux _________.", fill: "films"
  }
]);

const ANNONCE_5 = buildPool("base", "annonce-5", [
  {
    id: "an5-q1", textQ: "Selon l'annonce, quel musée va ouvrir ?", text: ["Un musée d'art moderne","Un musée de sciences","Un musée d'histoire"], textC: 0,
    img: ["art moderne","sciences","histoire"], imgC: 0,
    fillQ: "Selon l'annonce, nouveau musée d'art _________.", fill: "moderne"
  },
  {
    id: "an5-q2", textQ: "Selon l'annonce, quand ouvre-t-il ?", text: ["Jeudi prochain","Lundi prochain","Samedi prochain"], textC: 0,
    img: ["bientôt","après-demain","plus tard"], imgC: 0,
    fillQ: "Selon l'annonce, ouverture _________ prochain.", fill: "jeudi"
  },
  {
    id: "an5-q3", textQ: "Selon l'annonce, quels horaires du mardi au vendredi ?", text: ["9 h – 19 h","9 h 30 – 17 h 30","10 h – 18 h"], textC: 0,
    img: ["9-19 h","9h30-17h30","10-18 h"], imgC: 0,
    fillQ: "Selon l'annonce, de 9 h à _________ h.", fill: "19", fillA: ["dix-neuf"]
  },
  {
    id: "an5-q4", textQ: "Selon l'annonce, quels horaires le week-end ?", text: ["9 h 30 – 17 h 30","9 h – 19 h","10 h – 20 h"], textC: 0,
    img: ["9h30-17h30","9-19 h","10-20 h"], imgC: 0,
    fillQ: "Selon l'annonce, le week-end de 9 h 30 à 17 h _________.", fill: "30"
  },
  {
    id: "an5-q5", textQ: "Selon l'annonce, combien de places sont offertes ?", text: ["Vingt","Dix","Trente"], textC: 0,
    img: ["20","10","30"], imgC: 0,
    fillQ: "Selon l'annonce, _________ places offertes.", fill: "vingt", fillA: ["20"]
  },
  {
    id: "an5-q6", textQ: "Selon l'annonce, comment participer ?", text: ["En appelant","En écrivant","En allant au musée"], textC: 0,
    img: ["appeler","écrire","musée"], imgC: 0,
    fillQ: "Selon l'annonce, pour participer, _________.", fill: "appelez", fillA: ["appeler"]
  },
  {
    id: "an5-q7", textQ: "Selon l'annonce, quelle heure est-il ?", text: ["10 h","11 h","9 h"], textC: 0,
    img: ["10 h","11 h","9 h"], imgC: 0,
    fillQ: "Selon l'annonce, il est _________ h.", fill: "10", fillA: ["dix"]
  },
  {
    id: "an5-q8", textQ: "Selon l'annonce, le musée est-il fermé le lundi ?", text: ["On ne sait pas / pas précisé","Oui","Non, ouvert"], textC: 0,
    img: ["non précisé","fermé","ouvert"], imgC: 0,
    fillQ: "Selon l'annonce, horaires du _________ au vendredi.", fill: "mardi"
  },
  {
    id: "an5-q9", textQ: "Selon l'annonce, qui offre les places ?", text: ["Radio France","La mairie","Un magasin"], textC: 0,
    img: ["radio","mairie","magasin"], imgC: 0,
    fillQ: "Selon l'annonce, _________ France offre vingt places.", fill: "Radio", fillA: ["radio"]
  },
  {
    id: "an5-q10", textQ: "Selon l'annonce, le musée ouvre-t-il en semaine à 9 h ?", text: ["Oui","Non, à 10 h","Non, à 9 h 30"], textC: 0,
    img: ["9 h","10 h","9 h 30"], imgC: 0,
    fillQ: "Selon l'annonce, horaires de 9 h à 19 h du _________ au vendredi.", fill: "mardi"
  }
]);

const ANNONCE_6 = buildPool("base", "annonce-6", [
  {
    id: "an6-q1", textQ: "Selon l'annonce, quel sport commence mal ?", text: ["Le football","Le hockey","Le basket"], textC: 0,
    img: ["football","hockey","basket"], imgC: 0,
    fillQ: "Selon l'annonce, la saison de _________ commence mal.", fill: "football"
  },
  {
    id: "an6-q2", textQ: "Selon l'annonce, quelle équipe ne participera pas à la Super Ligue ?", text: ["L'équipe de Lausanne","L'équipe de Fribourg","L'équipe de France"], textC: 0,
    img: ["équipe A","équipe B","équipe C"], imgC: 0,
    fillQ: "Selon l'annonce, une équipe ne va pas _________.", fill: "participer"
  },
  {
    id: "an6-q3", textQ: "Selon l'annonce, combien de buts a marqué l'équipe de hockey ?", text: ["6 buts","3 buts","1 but"], textC: 0,
    img: ["6","3","1"], imgC: 0,
    fillQ: "Selon l'annonce, l'équipe a marqué _________ buts.", fill: "6", fillA: ["six"]
  },
  {
    id: "an6-q4", textQ: "Selon l'annonce, quel sport a gagné la coupe d'Europe ?", text: ["Le basket","Le football","Le hockey"], textC: 0,
    img: ["basket","football","hockey"], imgC: 0,
    fillQ: "Selon l'annonce, coupe d'Europe de _________.", fill: "basket", fillA: ["basket-ball"]
  },
  {
    id: "an6-q5", textQ: "Selon l'annonce, la victoire a-t-elle été fêtée longtemps ?", text: ["Oui, toute la nuit","Non","Une heure"], textC: 0,
    img: ["toute la nuit","non","1 h"], imgC: 0,
    fillQ: "Selon l'annonce, célébré toute la _________.", fill: "nuit"
  },
  {
    id: "an6-q6", textQ: "Selon l'annonce, l'équipe de hockey a-t-elle gagné ?", text: ["Oui","Non","Match nul"], textC: 0,
    img: ["victoire","défaite","nul"], imgC: 0,
    fillQ: "Selon l'annonce, l'équipe a _________ le match.", fill: "gagné", fillA: ["gagne"]
  },
  {
    id: "an6-q7", textQ: "Selon l'annonce, combien de temps a duré la fête ?", text: ["Toute la nuit","Une heure","Un jour"], textC: 0,
    img: ["nuit","1 h","1 jour"], imgC: 0,
    fillQ: "Selon l'annonce, célébré toute la _________.", fill: "nuit"
  },
  {
    id: "an6-q8", textQ: "Selon l'annonce, quel type d'information ?", text: ["Résultats sportifs","Météo","Culture"], textC: 0,
    img: ["sport","météo","culture"], imgC: 0,
    fillQ: "Selon l'annonce, suivez le _________ en direct.", fill: "sport"
  },
  {
    id: "an6-q9", textQ: "Selon l'annonce, le basket a gagné quelle coupe ?", text: ["Coupe d'Europe","Coupe du monde","Super Ligue"], textC: 0,
    img: ["europe","monde","super ligue"], imgC: 0,
    fillQ: "Selon l'annonce, coupe d'_________ de basket.", fill: "Europe", fillA: ["europe"]
  },
  {
    id: "an6-q10", textQ: "Selon l'annonce, le football de Lausanne participe-t-il à la Super Ligue ?", text: ["Non","Oui","On ne sait pas"], textC: 0,
    img: ["non","oui","inconnu"], imgC: 0,
    fillQ: "Selon l'annonce, l'équipe ne va pas _________.", fill: "participer"
  }
]);

const ANNONCE_7 = buildPool("base", "annonce-7", [
  {
    id: "an7-q1", textQ: "Selon l'annonce, quel type de festival musical ?", text: ["Un grand festival solidaire","Un festival de jazz","Un festival de rock"], textC: 0,
    img: ["grand festival","jazz","rock"], imgC: 0,
    fillQ: "Selon l'annonce, festival de _________.", fill: "musique", fillA: ["concerts"]
  },
  {
    id: "an7-q2", textQ: "Selon l'annonce, combien de jours dure le festival ?", text: ["3 jours","2 jours","5 jours"], textC: 0,
    img: ["3 jours","2 jours","5 jours"], imgC: 0,
    fillQ: "Selon l'annonce, le festival dure _________ jours.", fill: "trois", fillA: ["3"]
  },
  {
    id: "an7-q3", textQ: "Selon l'annonce, combien de personnes vont venir ?", text: ["170 000","70 000","17 000"], textC: 0,
    img: ["170000","70000","17000"], imgC: 0,
    fillQ: "Selon l'annonce, plus de _________ personnes.", fill: "170000", fillA: ["170 000"]
  },
  {
    id: "an7-q4", textQ: "Selon l'annonce, combien d'artistes ?", text: ["Cinquante","Trente","Cent"], textC: 0,
    img: ["50","30","100"], imgC: 0,
    fillQ: "Selon l'annonce, _________ artistes.", fill: "cinquante", fillA: ["50"]
  },
  {
    id: "an7-q5", textQ: "Selon l'annonce, quand commence le festival ?", text: ["Le 28 juin","Le 30 juin","Le 20 juillet"], textC: 0,
    img: ["28/06","30/06","20/07"], imgC: 0,
    fillQ: "Selon l'annonce, du vendredi 28 _________.", fill: "juin"
  },
  {
    id: "an7-q6", textQ: "Selon l'annonce, quand finit le festival ?", text: ["Le 30 juin","Le 28 juin","Le 31 mai"], textC: 0,
    img: ["30/06","28/06","31/05"], imgC: 0,
    fillQ: "Selon l'annonce, au dimanche 30 _________.", fill: "juin"
  },
  {
    id: "an7-q7", textQ: "Selon l'annonce, quel type d'événement ?", text: ["Des concerts","Du théâtre","Du cinéma"], textC: 0,
    img: ["concerts","théâtre","cinéma"], imgC: 0,
    fillQ: "Selon l'annonce, assister aux _________.", fill: "concerts"
  },
  {
    id: "an7-q8", textQ: "Selon l'annonce, le message est-il encourageant ?", text: ["Oui, amusez-vous bien","Non","Ne venez pas"], textC: 0,
    img: ["amusez-vous","non","interdit"], imgC: 0,
    fillQ: "Selon l'annonce, amusez-vous _________.", fill: "bien"
  },
  {
    id: "an7-q9", textQ: "Selon l'annonce, le festival dure-t-il un week-end ?", text: ["Oui, 3 jours","Non, 1 jour","Non, 1 semaine"], textC: 0,
    img: ["3 jours","1 jour","1 semaine"], imgC: 0,
    fillQ: "Selon l'annonce, trois _________.", fill: "jours"
  },
  {
    id: "an7-q10", textQ: "Selon l'annonce, parle-t-on de musique ?", text: ["Oui","Non","De sport"], textC: 0,
    img: ["musique","non","sport"], imgC: 0,
    fillQ: "Selon l'annonce, concerts de _________.", fill: "musique", fillA: ["artistes"]
  }
]);

const ANNONCE_8 = buildPool("base", "annonce-8", [
  {
    id: "an8-q1", textQ: "Selon l'annonce, quel temps dans le nord ?", text: ["Beau, 20 degrés","Pluvieux","Neigeux"], textC: 0,
    img: ["soleil 20°","pluie","neige"], imgC: 0,
    fillQ: "Selon l'annonce, 20 degrés dans le _________.", fill: "nord"
  },
  {
    id: "an8-q2", textQ: "Selon l'annonce, quelle température dans le sud ?", text: ["24 degrés","20 degrés","18 degrés"], textC: 0,
    img: ["24°","20°","18°"], imgC: 0,
    fillQ: "Selon l'annonce, _________ degrés dans le sud.", fill: "24", fillA: ["vingt-quatre"]
  },
  {
    id: "an8-q3", textQ: "Selon l'annonce, quel temps dans l'ouest ?", text: ["Nuages et vent","Grand soleil","Neige"], textC: 0,
    img: ["nuages/vent","soleil","neige"], imgC: 0,
    fillQ: "Selon l'annonce, nuages et beaucoup de _________.", fill: "vent"
  },
  {
    id: "an8-q4", textQ: "Selon l'annonce, quelle température en Bretagne ?", text: ["18 degrés","24 degrés","30 degrés"], textC: 0,
    img: ["18°","24°","30°"], imgC: 0,
    fillQ: "Selon l'annonce, 18 degrés en _________.", fill: "Bretagne", fillA: ["bretagne"]
  },
  {
    id: "an8-q5", textQ: "Selon l'annonce, fait-il beau aujourd'hui ?", text: ["Oui, en grande partie","Non, partout","On ne sait pas"], textC: 0,
    img: ["beau","mauvais","inconnu"], imgC: 0,
    fillQ: "Selon l'annonce, il fait _________ en France.", fill: "beau"
  },
  {
    id: "an8-q6", textQ: "Selon l'annonce, le soleil brille-t-il ?", text: ["Oui","Non","Seulement le soir"], textC: 0,
    img: ["oui","non","soir"], imgC: 0,
    fillQ: "Selon l'annonce, le soleil _________.", fill: "brille"
  },
  {
    id: "an8-q7", textQ: "Selon l'annonce, quelle heure est-il ?", text: ["11 h 17","10 h","14 h"], textC: 0,
    img: ["11h17","10h","14h"], imgC: 0,
    fillQ: "Selon l'annonce, il est 11 h _________.", fill: "17", fillA: ["dix-sept"]
  },
  {
    id: "an8-q8", textQ: "Selon l'annonce, où fait-il plus chaud ?", text: ["Dans le sud","Dans le nord","En Bretagne"], textC: 0,
    img: ["sud","nord","ouest"], imgC: 0,
    fillQ: "Selon l'annonce, plus chaud dans le _________.", fill: "sud"
  },
  {
    id: "an8-q9", textQ: "Selon l'annonce, la température est-elle fraîche en Bretagne ?", text: ["Oui","Non","Très chaude"], textC: 0,
    img: ["fraîche","chaude","très chaude"], imgC: 0,
    fillQ: "Selon l'annonce, température _________.", fill: "fraîche"
  },
  {
    id: "an8-q10", textQ: "Selon l'annonce, quel bulletin ?", text: ["Météo","Sport","Infos"], textC: 0,
    img: ["météo","sport","infos"], imgC: 0,
    fillQ: "Selon l'annonce, bulletin _________.", fill: "météo", fillA: ["meteo"]
  }
]);

const ANNONCE_9 = buildPool("base", "annonce-9", [
  {
    id: "an9-q1", textQ: "Selon l'annonce, quand ouvre Super J exceptionnellement ?", text: ["Samedi et dimanche","Lundi et mardi","Toute la semaine"], textC: 0,
    img: ["week-end","semaine","un jour"], imgC: 0,
    fillQ: "Selon l'annonce, ouvert ce samedi et ce _________.", fill: "dimanche"
  },
  {
    id: "an9-q2", textQ: "Selon l'annonce, quels horaires ?", text: ["9 h – 19 h","10 h – 18 h","8 h – 20 h"], textC: 0,
    img: ["9-19 h","10-18 h","8-20 h"], imgC: 0,
    fillQ: "Selon l'annonce, de 9 h à _________ h.", fill: "19", fillA: ["dix-neuf"]
  },
  {
    id: "an9-q3", textQ: "Selon l'annonce, quelle réduction sur le chocolat ?", text: ["10 %","20 %","25 %"], textC: 0,
    img: ["10 %","20 %","25 %"], imgC: 0,
    fillQ: "Selon l'annonce, moins _________ % sur le chocolat.", fill: "10", fillA: ["dix"]
  },
  {
    id: "an9-q4", textQ: "Selon l'annonce, quelle réduction sur les vêtements ?", text: ["20 %","10 %","25 %"], textC: 0,
    img: ["20 %","10 %","25 %"], imgC: 0,
    fillQ: "Selon l'annonce, moins _________ % sur les vêtements.", fill: "20", fillA: ["vingt"]
  },
  {
    id: "an9-q5", textQ: "Selon l'annonce, quelle réduction sur les DVD ?", text: ["25 %","10 %","20 %"], textC: 0,
    img: ["25 %","10 %","20 %"], imgC: 0,
    fillQ: "Selon l'annonce, moins _________ % sur les DVD.", fill: "25", fillA: ["vingt-cinq"]
  },
  {
    id: "an9-q6", textQ: "Selon l'annonce, quel cadeau pour 200 € d'achats ?", text: ["Une clé USB","Un DVD","Un chocolat"], textC: 0,
    img: ["clé USB","DVD","chocolat"], imgC: 0,
    fillQ: "Selon l'annonce, offre une clé _________.", fill: "USB", fillA: ["usb"]
  },
  {
    id: "an9-q7", textQ: "Selon l'annonce, à partir de quel montant le cadeau ?", text: ["200 €","150 €","100 €"], textC: 0,
    img: ["200 €","150 €","100 €"], imgC: 0,
    fillQ: "Selon l'annonce, si vous dépensez _________ euros.", fill: "200", fillA: ["deux cents"]
  },
  {
    id: "an9-q8", textQ: "Selon l'annonce, l'ouverture est-elle sans interruption ?", text: ["Oui","Non","Seulement le matin"], textC: 0,
    img: ["oui","non","matin"], imgC: 0,
    fillQ: "Selon l'annonce, sans _________.", fill: "interruption"
  },
  {
    id: "an9-q9", textQ: "Selon l'annonce, quel magasin ?", text: ["Super J","Mega Jeux","Super U"], textC: 0,
    img: ["magasin J","jeux","supermarché"], imgC: 0,
    fillQ: "Selon l'annonce, magasins Super _________.", fill: "J"
  },
  {
    id: "an9-q10", textQ: "Selon l'annonce, y a-t-il des promotions ?", text: ["Oui, beaucoup","Non","Seulement sur le pain"], textC: 0,
    img: ["oui","non","pain"], imgC: 0,
    fillQ: "Selon l'annonce, beaucoup de _________.", fill: "promotions"
  }
]);

const ANNONCE_10 = buildPool("base", "annonce-10", [
  {
    id: "an10-q1", textQ: "Selon l'annonce, sur quelle voie part le train ?", text: ["Voie 5","Voie 7","Voie 12"], textC: 0,
    img: ["voie 5","voie 7","voie 12"], imgC: 0,
    fillQ: "Selon l'annonce, voie numéro _________.", fill: "5", fillA: ["cinq"]
  },
  {
    id: "an10-q2", textQ: "Selon l'annonce, à quelle heure arrive-t-on à Blois ?", text: ["11 h 22","11 h 48","12 h 03"], textC: 0,
    img: ["11h22","11h48","12h03"], imgC: 0,
    fillQ: "Selon l'annonce, arrêt à 11 h _________.", fill: "22", fillA: ["vingt-deux"]
  },
  {
    id: "an10-q3", textQ: "Selon l'annonce, à quelle heure à Saint-Pierre-des-Corps ?", text: ["11 h 48","11 h 22","12 h 03"], textC: 0,
    img: ["11h48","11h22","12h03"], imgC: 0,
    fillQ: "Selon l'annonce, à 11 h _________.", fill: "48", fillA: ["quarante-huit"]
  },
  {
    id: "an10-q4", textQ: "Selon l'annonce, à quelle heure arrive-t-on au terminus ?", text: ["12 h 03","11 h 48","13 h"], textC: 0,
    img: ["12h03","11h48","13h"], imgC: 0,
    fillQ: "Selon l'annonce, arrivée à 12 h _________.", fill: "03", fillA: ["trois"]
  },
  {
    id: "an10-q5", textQ: "Selon l'annonce, que faut-il faire avant de monter ?", text: ["Valider son billet","Acheter un sandwich","Réserver une place"], textC: 0,
    img: ["valider billet","sandwich","réserver"], imgC: 0,
    fillQ: "Selon l'annonce, valider votre _________.", fill: "billet"
  },
  {
    id: "an10-q6", textQ: "Selon l'annonce, le train a-t-il plusieurs arrêts avant le terminus ?", text: ["Oui, deux arrêts","Non","Trois arrêts"], textC: 0,
    img: ["2 arrêts","aucun","3 arrêts"], imgC: 0,
    fillQ: "Selon l'annonce, il s'arrête avant le _________.", fill: "terminus"
  },
  {
    id: "an10-q7", textQ: "Selon l'annonce, qui souhaite bon voyage ?", text: ["La SNCF","La RATP","Air France"], textC: 0,
    img: ["SNCF","RATP","avion"], imgC: 0,
    fillQ: "Selon l'annonce, la _________ vous souhaite bon voyage.", fill: "SNCF", fillA: ["sncf"]
  },
  {
    id: "an10-q8", textQ: "Selon l'annonce, faut-il valider le billet dans le train ?", text: ["Non, avant de monter","Oui, dans le train","Ce n'est pas nécessaire"], textC: 0,
    img: ["avant","dans train","non"], imgC: 0,
    fillQ: "Selon l'annonce, valider avant de _________ dans le train.", fill: "monter"
  }
]);

const ANNONCE_11 = buildPool("base", "annonce-11", [
  {
    id: "an11-q1", textQ: "Selon l'annonce, quelle réduction sur le poisson ?", text: ["20 %","10 %","30 %"], textC: 0,
    img: ["20 %","10 %","30 %"], imgC: 0,
    fillQ: "Selon l'annonce, moins _________ % sur le poisson.", fill: "20", fillA: ["vingt"]
  },
  {
    id: "an11-q2", textQ: "Selon l'annonce, dans quel rayon ?", text: ["Le rayon frais","Le rayon boucherie","Le rayon surgelés"], textC: 0,
    img: ["frais","boucherie","surgelés"], imgC: 0,
    fillQ: "Selon l'annonce, au rayon _________.", fill: "frais"
  },
  {
    id: "an11-q3", textQ: "Selon l'annonce, quelle réduction sur le camembert ?", text: ["2 euros","5 euros","10 %"], textC: 0,
    img: ["2 €","5 €","10 %"], imgC: 0,
    fillQ: "Selon l'annonce, deux euros sur le _________.", fill: "camembert"
  },
  {
    id: "an11-q4", textQ: "Selon l'annonce, quels fromages sont en promotion ?", text: ["Camembert, brie et roquefort","Chèvre seulement","Aucun"], textC: 0,
    img: ["3 fromages","chèvre","aucun"], imgC: 0,
    fillQ: "Selon l'annonce, camembert, brie et _________.", fill: "roquefort"
  },
  {
    id: "an11-q5", textQ: "Selon l'annonce, dans combien de temps finissent les promos ?", text: ["Dans 15 minutes","Dans 30 minutes","Dans 1 heure"], textC: 0,
    img: ["15 min","30 min","1 h"], imgC: 0,
    fillQ: "Selon l'annonce, se terminent dans quinze _________.", fill: "minutes"
  },
  {
    id: "an11-q6", textQ: "Selon l'annonce, faut-il se dépêcher ?", text: ["Oui","Non","Revenir demain"], textC: 0,
    img: ["oui","non","demain"], imgC: 0,
    fillQ: "Selon l'annonce, _________-vous.", fill: "Dépêchez", fillA: ["depechez"]
  },
  {
    id: "an11-q7", textQ: "Selon l'annonce, y a-t-il une promo sur les fromages ?", text: ["Oui","Non","Seulement le poisson"], textC: 0,
    img: ["oui","non","poisson"], imgC: 0,
    fillQ: "Selon l'annonce, réduction sur les _________.", fill: "fromages"
  },
  {
    id: "an11-q8", textQ: "Selon l'annonce, la promotion sur le poisson est exceptionnelle ?", text: ["Oui","Non","Permanente"], textC: 0,
    img: ["oui","non","permanente"], imgC: 0,
    fillQ: "Selon l'annonce, promotion _________.", fill: "exceptionnelle", fillA: ["exceptionnel"]
  },
  {
    id: "an11-q9", textQ: "Selon l'annonce, la réduction fromage est en euros ou en % ?", text: ["En euros","En %","Gratuit"], textC: 0,
    img: ["euros","%","gratuit"], imgC: 0,
    fillQ: "Selon l'annonce, deux _________ de réduction.", fill: "euros"
  },
  {
    id: "an11-q10", textQ: "Selon l'annonce, le poisson est en promo à combien ?", text: ["-20 %","-10 %","-30 %"], textC: 0,
    img: ["-20 %","-10 %","-30 %"], imgC: 0,
    fillQ: "Selon l'annonce, moins vingt _________.", fill: "%", fillA: ["pour cent"]
  }
]);

const ANNONCE_12 = buildPool("base", "annonce-12", [
  {
    id: "an12-q1", textQ: "Selon l'annonce, quel est le numéro du vol ?", text: ["354","456","717"], textC: 0,
    img: ["354","456","717"], imgC: 0,
    fillQ: "Selon l'annonce, vol _________.", fill: "354"
  },
  {
    id: "an12-q2", textQ: "Selon l'annonce, combien coûte une boisson ?", text: ["2 euros","4 euros","9 euros"], textC: 0,
    img: ["2 €","4 €","9 €"], imgC: 0,
    fillQ: "Selon l'annonce, boissons pour 2 _________.", fill: "euros"
  },
  {
    id: "an12-q3", textQ: "Selon l'annonce, combien coûte un sandwich ?", text: ["4 euros","2 euros","9 euros"], textC: 0,
    img: ["4 €","2 €","9 €"], imgC: 0,
    fillQ: "Selon l'annonce, sandwichs pour 4 _________.", fill: "euros"
  },
  {
    id: "an12-q4", textQ: "Selon l'annonce, combien coûte un menu ?", text: ["9 euros","4 euros","2 euros"], textC: 0,
    img: ["9 €","4 €","2 €"], imgC: 0,
    fillQ: "Selon l'annonce, menus à 9 _________.", fill: "euros"
  },
  {
    id: "an12-q5", textQ: "Selon l'annonce, combien coûte un journal ?", text: ["1 euro","2 euros","4 euros"], textC: 0,
    img: ["1 €","2 €","4 €"], imgC: 0,
    fillQ: "Selon l'annonce, journaux à 1 _________.", fill: "euro"
  },
  {
    id: "an12-q6", textQ: "Selon l'annonce, en quelles langues les journaux ?", text: ["Français et anglais","Français seulement","Anglais seulement"], textC: 0,
    img: ["FR/EN","FR","EN"], imgC: 0,
    fillQ: "Selon l'annonce, en français et en _________.", fill: "anglais"
  },
  {
    id: "an12-q7", textQ: "Selon l'annonce, peut-on acheter à manger ?", text: ["Oui","Non","Seulement des boissons"], textC: 0,
    img: ["oui","non","boissons"], imgC: 0,
    fillQ: "Selon l'annonce, acheter des sandwichs et des _________.", fill: "menus"
  },
  {
    id: "an12-q8", textQ: "Selon l'annonce, peut-on lire un journal ?", text: ["Oui","Non","Seulement en ligne"], textC: 0,
    img: ["oui","non","ligne"], imgC: 0,
    fillQ: "Selon l'annonce, des journaux sont _________.", fill: "disponibles"
  },
  {
    id: "an12-q9", textQ: "Selon l'annonce, le message souhaite-t-il bon voyage ?", text: ["Oui","Non","Bonne arrivée"], textC: 0,
    img: ["bon voyage","non","arrivée"], imgC: 0,
    fillQ: "Selon l'annonce, bon _________.", fill: "voyage"
  },
  {
    id: "an12-q10", textQ: "Selon l'annonce, les boissons sont-elles plus chères que les journaux ?", text: ["Oui","Non","Même prix"], textC: 0,
    img: ["oui","non","égal"], imgC: 0,
    fillQ: "Selon l'annonce, boissons 2 €, journaux 1 _________.", fill: "euro"
  }
]);

const ANNONCE_13 = buildPool("base", "annonce-13", [
  {
    id: "an13-q1", textQ: "Selon l'annonce, dans combien de temps ferme le magasin ?", text: ["Dans 30 minutes","Dans 15 minutes","Dans 1 heure"], textC: 0,
    img: ["30 min","15 min","1 h"], imgC: 0,
    fillQ: "Selon l'annonce, ferme dans trente _________.", fill: "minutes"
  },
  {
    id: "an13-q2", textQ: "Selon l'annonce, où faut-il aller pour payer ?", text: ["À la caisse","À l'accueil","En ligne"], textC: 0,
    img: ["caisse","accueil","ligne"], imgC: 0,
    fillQ: "Selon l'annonce, présentez-vous à la _________.", fill: "caisse"
  },
  {
    id: "an13-q3", textQ: "Selon l'annonce, à quelle heure ouvre le magasin demain ?", text: ["9 h 15","9 h","10 h"], textC: 0,
    img: ["9h15","9h","10h"], imgC: 0,
    fillQ: "Selon l'annonce, ouvre à 9 h _________.", fill: "15", fillA: ["quinze"]
  },
  {
    id: "an13-q4", textQ: "Selon l'annonce, à quelle heure ferme-t-il demain ?", text: ["20 h","19 h","21 h"], textC: 0,
    img: ["20h","19h","21h"], imgC: 0,
    fillQ: "Selon l'annonce, ferme à _________ h.", fill: "20", fillA: ["vingt"]
  },
  {
    id: "an13-q5", textQ: "Selon l'annonce, y aura-t-il des promotions demain ?", text: ["Oui, toute la journée","Non","Seulement le matin"], textC: 0,
    img: ["toute la journée","non","matin"], imgC: 0,
    fillQ: "Selon l'annonce, promotions toute la _________.", fill: "journée", fillA: ["journee"]
  },
  {
    id: "an13-q6", textQ: "Selon l'annonce, que faut-il faire avant la fermeture ?", text: ["Payer ses achats","Sortir vite","Appeler"], textC: 0,
    img: ["payer","sortir","appeler"], imgC: 0,
    fillQ: "Selon l'annonce, payer vos _________.", fill: "achats"
  },
  {
    id: "an13-q7", textQ: "Selon l'annonce, le magasin ferme-t-il bientôt ?", text: ["Oui","Non","Il est déjà fermé"], textC: 0,
    img: ["oui","non","fermé"], imgC: 0,
    fillQ: "Selon l'annonce, ferme dans _________ minutes.", fill: "trente", fillA: ["30"]
  },
  {
    id: "an13-q8", textQ: "Selon l'annonce, demain ouvre-t-il plus tard que 9 h ?", text: ["Oui, 9 h 15","Non, 9 h","Oui, 10 h"], textC: 0,
    img: ["9h15","9h","10h"], imgC: 0,
    fillQ: "Selon l'annonce, ouvre à 9 h _________.", fill: "15", fillA: ["quinze"]
  },
  {
    id: "an13-q9", textQ: "Selon l'annonce, le message dit-il bonne soirée ?", text: ["Oui","Non","Bonne journée"], textC: 0,
    img: ["bonne soirée","non","bonne journée"], imgC: 0,
    fillQ: "Selon l'annonce, bonne _________.", fill: "soirée", fillA: ["soiree"]
  },
  {
    id: "an13-q10", textQ: "Selon l'annonce, les promotions de demain durent combien de temps ?", text: ["Toute la journée","1 heure","Le matin"], textC: 0,
    img: ["journée","1 h","matin"], imgC: 0,
    fillQ: "Selon l'annonce, promotions toute la _________.", fill: "journée", fillA: ["journee"]
  }
]);

const ANNONCE_14 = buildPool("base", "annonce-14", [
  {
    id: "an14-q1", textQ: "Selon l'annonce, quelle ligne de tramway est fermée ?", text: ["La ligne 4","La ligne 8","La ligne 13"], textC: 0,
    img: ["ligne 4","ligne 8","ligne 13"], imgC: 0,
    fillQ: "Selon l'annonce, la ligne _________ du tramway est fermée.", fill: "4", fillA: ["quatre"]
  },
  {
    id: "an14-q2", textQ: "Selon l'annonce, pourquoi la fermeture ?", text: ["Travaux","Grève","Fête"], textC: 0,
    img: ["travaux","grève","fête"], imgC: 0,
    fillQ: "Selon l'annonce, pour cause de _________.", fill: "travaux"
  },
  {
    id: "an14-q3", textQ: "Selon l'annonce, quels jours la ligne est fermée ?", text: ["Du 20 au 23 septembre","Du 1er au 5 mai","Tout l'été"], textC: 0,
    img: ["20-23/09","1-5/05","été"], imgC: 0,
    fillQ: "Selon l'annonce, du 20 au 23 _________.", fill: "septembre"
  },
  {
    id: "an14-q4", textQ: "Selon l'annonce, à quelles heures la fermeture ?", text: ["De 19 h à 23 h","De 9 h à 17 h","Toute la journée"], textC: 0,
    img: ["19-23 h","9-17 h","24 h"], imgC: 0,
    fillQ: "Selon l'annonce, de 19 h à _________ h.", fill: "23", fillA: ["vingt-trois"]
  },
  {
    id: "an14-q5", textQ: "Selon l'annonce, quel bus pour la cathédrale ?", text: ["Le bus 13","Le bus 4","Le bus 8"], textC: 0,
    img: ["bus 13","bus 4","bus 8"], imgC: 0,
    fillQ: "Selon l'annonce, prendre le bus numéro _________.", fill: "13", fillA: ["treize"]
  },
  {
    id: "an14-q6", textQ: "Selon l'annonce, quel métro pour le centre-ville ?", text: ["La ligne 8","La ligne 4","La ligne 13"], textC: 0,
    img: ["ligne 8","ligne 4","ligne 13"], imgC: 0,
    fillQ: "Selon l'annonce, ligne 8 du _________.", fill: "métro", fillA: ["metro"]
  },
  {
    id: "an14-q7", textQ: "Selon l'annonce, la ligne 4 est-elle fermée toute la journée ?", text: ["Non, seulement le soir","Oui","Non, le matin"], textC: 0,
    img: ["soir","journée","matin"], imgC: 0,
    fillQ: "Selon l'annonce, fermée de 19 h à 23 _________.", fill: "h"
  },
  {
    id: "an14-q8", textQ: "Selon l'annonce, peut-on prendre le tramway pour le centre ?", text: ["Non, prendre le métro 8","Oui","Prendre le bus 13"], textC: 0,
    img: ["métro 8","tramway","bus 13"], imgC: 0,
    fillQ: "Selon l'annonce, prendre la ligne 8 du _________.", fill: "métro", fillA: ["metro"]
  },
  {
    id: "an14-q9", textQ: "Selon l'annonce, la fermeture dure combien de jours ?", text: ["4 jours","2 jours","1 semaine"], textC: 0,
    img: ["4 jours","2 jours","7 jours"], imgC: 0,
    fillQ: "Selon l'annonce, du 20 au 23, soit _________ jours.", fill: "quatre", fillA: ["4"]
  },
  {
    id: "an14-q10", textQ: "Selon l'annonce, y a-t-il des alternatives ?", text: ["Oui, bus et métro","Non","Seulement à pied"], textC: 0,
    img: ["bus/métro","non","pied"], imgC: 0,
    fillQ: "Selon l'annonce, prendre le bus ou le _________.", fill: "métro", fillA: ["metro"]
  }
]);

const ANNONCE_16 = buildPool("base", "annonce-16", [
  {
    id: "an16-q1", textQ: "Selon l'annonce, quel train est annulé ?", text: ["Le train 8664","Le train 468","Le train 1608"], textC: 0,
    img: ["8664","468","1608"], imgC: 0,
    fillQ: "Selon l'annonce, train numéro _________.", fill: "8664"
  },
  {
    id: "an16-q2", textQ: "Selon l'annonce, à quelle heure était prévu le départ ?", text: ["14 h 27","16 h 18","12 h 02"], textC: 0,
    img: ["14h27","16h18","12h02"], imgC: 0,
    fillQ: "Selon l'annonce, départ prévu à 14 h _________.", fill: "27", fillA: ["vingt-sept"]
  },
  {
    id: "an16-q3", textQ: "Selon l'annonce, à quelle heure part le train suivant ?", text: ["16 h 18","14 h 27","18 h"], textC: 0,
    img: ["16h18","14h27","18h"], imgC: 0,
    fillQ: "Selon l'annonce, train suivant à 16 h _________.", fill: "18", fillA: ["dix-huit"]
  },
  {
    id: "an16-q4", textQ: "Selon l'annonce, sur quelle voie part le train suivant ?", text: ["Voie 6","Voie 5","Voie 12"], textC: 0,
    img: ["voie 6","voie 5","voie 12"], imgC: 0,
    fillQ: "Selon l'annonce, voie numéro _________.", fill: "6", fillA: ["six"]
  },
  {
    id: "an16-q5", textQ: "Selon l'annonce, peut-on demander un remboursement ?", text: ["Oui, à l'accueil","Non","Seulement en ligne"], textC: 0,
    img: ["accueil","non","ligne"], imgC: 0,
    fillQ: "Selon l'annonce, remboursement à l'_________.", fill: "accueil"
  },
  {
    id: "an16-q6", textQ: "Selon l'annonce, le train annulé allait-il vers le sud ?", text: ["On ne précise pas la direction comme réponse","Oui","Non"], textC: 0,
    img: ["annulé","parti","retardé"], imgC: 0,
    fillQ: "Selon l'annonce, le train est _________.", fill: "annulé", fillA: ["annule"]
  },
  {
    id: "an16-q7", textQ: "Selon l'annonce, la SNCF présente-t-elle des excuses ?", text: ["Oui","Non","Seulement par SMS"], textC: 0,
    img: ["oui","non","SMS"], imgC: 0,
    fillQ: "Selon l'annonce, présente ses _________.", fill: "excuses"
  },
  {
    id: "an16-q8", textQ: "Selon l'annonce, faut-il attendre le train de 16 h 18 ?", text: ["Oui, si on veut partir","Non","Prendre un taxi"], textC: 0,
    img: ["attendre","non","taxi"], imgC: 0,
    fillQ: "Selon l'annonce, train suivant à _________ h 18.", fill: "16", fillA: ["seize"]
  },
  {
    id: "an16-q9", textQ: "Selon l'annonce, où demander un remboursement ?", text: ["À l'accueil","Dans le train","Sur Internet uniquement"], textC: 0,
    img: ["accueil","train","internet"], imgC: 0,
    fillQ: "Selon l'annonce, remboursement à l'_________.", fill: "accueil"
  },
  {
    id: "an16-q10", textQ: "Selon l'annonce, le train suivant part-il sur la voie 6 ?", text: ["Oui","Non, voie 5","Non, voie 12"], textC: 0,
    img: ["voie 6","voie 5","voie 12"], imgC: 0,
    fillQ: "Selon l'annonce, voie numéro _________.", fill: "6", fillA: ["six"]
  }
]);

const ANNONCE_17 = buildPool("base", "annonce-17", [
  {
    id: "an17-q1", textQ: "Selon l'annonce, dans combien de temps commence l'embarquement ?", text: ["Dans 15 minutes","Dans 30 minutes","Dans 1 heure"], textC: 0,
    img: ["15 min","30 min","1 h"], imgC: 0,
    fillQ: "Selon l'annonce, embarquement dans quinze _________.", fill: "minutes"
  },
  {
    id: "an17-q2", textQ: "Selon l'annonce, quel numéro de vol ?", text: ["AF717","AF4568","354"], textC: 0,
    img: ["AF717","AF4568","354"], imgC: 0,
    fillQ: "Selon l'annonce, vol Air France _________.", fill: "AF717", fillA: ["717"]
  },
  {
    id: "an17-q3", textQ: "Selon l'annonce, à quelle heure part le vol ?", text: ["8 h 17","8 h 30","14 h 27"], textC: 0,
    img: ["8h17","8h30","14h27"], imgC: 0,
    fillQ: "Selon l'annonce, il part à 8 h _________.", fill: "17", fillA: ["dix-sept"]
  },
  {
    id: "an17-q4", textQ: "Selon l'annonce, combien de temps dure le vol ?", text: ["2 h 20","1 h","3 h"], textC: 0,
    img: ["2h20","1h","3h"], imgC: 0,
    fillQ: "Selon l'annonce, dure environ deux heures et vingt _________.", fill: "minutes"
  },
  {
    id: "an17-q5", textQ: "Selon l'annonce, quels documents préparer ?", text: ["Billet et passeport","Carte d'identité seulement","Rien"], textC: 0,
    img: ["billet/passeport","carte ID","rien"], imgC: 0,
    fillQ: "Selon l'annonce, préparer billet et _________.", fill: "passeport"
  },
  {
    id: "an17-q6", textQ: "Selon l'annonce, qui peut embarquer maintenant ?", text: ["Passagers avec enfants","Tout le monde","Personne"], textC: 0,
    img: ["avec enfants","tous","personne"], imgC: 0,
    fillQ: "Selon l'annonce, passagers avec des _________.", fill: "enfants"
  },
  {
    id: "an17-q7", textQ: "Selon l'annonce, quelle compagnie aérienne ?", text: ["Air France","Ryanair","EasyJet"], textC: 0,
    img: ["compagnie française","low cost 1","low cost 2"], imgC: 0,
    fillQ: "Selon l'annonce, vol d'une compagnie _________.", fill: "aérienne", fillA: ["aerienne"]
  },
  {
    id: "an17-q8", textQ: "Selon l'annonce, faut-il le passeport ?", text: ["Oui","Non","Seulement pour les enfants"], textC: 0,
    img: ["oui","non","enfants"], imgC: 0,
    fillQ: "Selon l'annonce, préparer votre _________.", fill: "passeport"
  },
  {
    id: "an17-q9", textQ: "Selon l'annonce, l'embarquement commence bientôt ?", text: ["Oui, dans 15 minutes","Non","Dans 1 heure"], textC: 0,
    img: ["15 min","non","1 h"], imgC: 0,
    fillQ: "Selon l'annonce, commence dans _________ minutes.", fill: "quinze", fillA: ["15"]
  },
  {
    id: "an17-q10", textQ: "Selon l'annonce, le vol dure-t-il plus de 2 heures ?", text: ["Oui, 2 h 20","Non, 1 h","Non, 30 min"], textC: 0,
    img: ["2h20","1h","30 min"], imgC: 0,
    fillQ: "Selon l'annonce, environ deux heures et _________ minutes.", fill: "vingt", fillA: ["20"]
  }
]);

const INSTRUCTION_1 = buildPool("base", "instruction-1", [
  {
    id: "in1-q1", textQ: "Selon le message, quel rendez-vous est rappelé ?", text: ["Un rendez-vous chez le dentiste","Un rendez-vous chez le médecin","Un rendez-vous à l'école"], textC: 0,
    img: ["dentiste","médecin","école"], imgC: 0,
    fillQ: "Selon le message, rendez-vous chez le _________.", fill: "dentiste"
  },
  {
    id: "in1-q2", textQ: "Selon le message, quelle date ?", text: ["Le 13 janvier","Le 30 janvier","Le 15 février"], textC: 0,
    img: ["13/01","30/01","15/02"], imgC: 0,
    fillQ: "Selon le message, le 13 _________.", fill: "janvier"
  },
  {
    id: "in1-q3", textQ: "Selon le message, à quelle heure ?", text: ["14 h","10 h","16 h"], textC: 0,
    img: ["14 h","10 h","16 h"], imgC: 0,
    fillQ: "Selon le message, à _________ heures.", fill: "14", fillA: ["quatorze"]
  },
  {
    id: "in1-q4", textQ: "Selon le message, après combien de minutes de retard le RDV est annulé ?", text: ["10 minutes","15 minutes","30 minutes"], textC: 0,
    img: ["10 min","15 min","30 min"], imgC: 0,
    fillQ: "Selon le message, annulé si 10 minutes de _________.", fill: "retard"
  },
  {
    id: "in1-q5", textQ: "Selon le message, quelle carte apporter ?", text: ["La carte Vitale","La carte d'identité","La carte de bus"], textC: 0,
    img: ["santé","identité","transport"], imgC: 0,
    fillQ: "Selon le message, apporter votre carte _________.", fill: "Vitale", fillA: ["vitale"]
  },
  {
    id: "in1-q6", textQ: "Selon le message, quel transport prendre ?", text: ["Le métro","Le bus","La voiture"], textC: 0,
    img: ["métro","bus","voiture"], imgC: 0,
    fillQ: "Selon le message, prendre le _________.", fill: "métro", fillA: ["metro"]
  },
  {
    id: "in1-q7", textQ: "Selon le message, quel transport éviter ?", text: ["Le bus et la voiture","Le métro","Le vélo"], textC: 0,
    img: ["bus/voiture","métro","vélo"], imgC: 0,
    fillQ: "Selon le message, éviter le bus ou la _________.", fill: "voiture"
  },
  {
    id: "in1-q8", textQ: "Selon le message, pourquoi éviter la voiture ?", text: ["Il y a des travaux","Il pleut","C'est fermé"], textC: 0,
    img: ["travaux","pluie","fermé"], imgC: 0,
    fillQ: "Selon le message, il y a des _________ actuellement.", fill: "travaux"
  },
  {
    id: "in1-q9", textQ: "Selon le message, où a lieu le rendez-vous ?", text: ["Au cabinet dentaire","À l'hôpital","À la pharmacie"], textC: 0,
    img: ["cabinet","hôpital","pharmacie"], imgC: 0,
    fillQ: "Selon le message, cabinet _________.", fill: "dentaire"
  },
  {
    id: "in1-q10", textQ: "Selon le message, faut-il être à l'heure ?", text: ["Oui, sinon annulé","Non","Peu importe"], textC: 0,
    img: ["oui","non","peu importe"], imgC: 0,
    fillQ: "Selon le message, annulé en cas de _________.", fill: "retard"
  }
]);

const INSTRUCTION_2 = buildPool("base", "instruction-2", [
  {
    id: "in2-q1", textQ: "Selon le message, quel rendez-vous est annulé ?", text: ["Un déjeuner au restaurant","Un cinéma","Un cours"], textC: 0,
    img: ["restaurant","cinéma","cours"], imgC: 0,
    fillQ: "Selon le message, annuler notre rendez-vous au _________.", fill: "restaurant"
  },
  {
    id: "in2-q2", textQ: "Selon le message, quelle activité est proposée à la place ?", text: ["Un cinéma","Un musée","Une promenade"], textC: 0,
    img: ["cinéma","musée","promenade"], imgC: 0,
    fillQ: "Selon le message, aller au _________ demain.", fill: "cinéma", fillA: ["cinema"]
  },
  {
    id: "in2-q3", textQ: "Selon le message, à quelle heure le cinéma ?", text: ["18 h","12 h","20 h"], textC: 0,
    img: ["18 h","12 h","20 h"], imgC: 0,
    fillQ: "Selon le message, cinéma demain à _________ heures.", fill: "18", fillA: ["dix-huit"]
  },
  {
    id: "in2-q4", textQ: "Selon le message, a-t-elle des entrées gratuites pour le musée ?", text: ["Oui","Non","Seulement pour le cinéma"], textC: 0,
    img: ["oui","non","cinéma"], imgC: 0,
    fillQ: "Selon le message, entrées gratuites pour le _________.", fill: "musée", fillA: ["musee"]
  },
  {
    id: "in2-q5", textQ: "Selon le message, quelles dates pour le musée ?", text: ["Le 15 ou le 25 juin","Le 13 janvier","Le 30 janvier"], textC: 0,
    img: ["15/06 ou 25/06","13/01","30/01"], imgC: 0,
    fillQ: "Selon le message, le 15 ou le 25 _________.", fill: "juin"
  },
  {
    id: "in2-q6", textQ: "Selon le message, comment réserver le musée ?", text: ["Par téléphone","Par SMS","Au guichet"], textC: 0,
    img: ["téléphone","SMS","guichet"], imgC: 0,
    fillQ: "Selon le message, réserver par _________.", fill: "téléphone", fillA: ["telephone"]
  },
  {
    id: "in2-q7", textQ: "Selon le message, comment confirmer ?", text: ["Envoyer un SMS","Téléphoner","Écrire un courrier"], textC: 0,
    img: ["SMS","téléphone","courrier"], imgC: 0,
    fillQ: "Selon le message, envoyez-moi un _________.", fill: "SMS", fillA: ["sms"]
  },
  {
    id: "in2-q8", textQ: "Selon le message, pourquoi annule-t-elle ?", text: ["Trop de travail","Elle est malade","Il pleut"], textC: 0,
    img: ["travail","malade","pluie"], imgC: 0,
    fillQ: "Selon le message, j'ai trop de _________.", fill: "travail"
  },
  {
    id: "in2-q9", textQ: "Selon le message, le restaurant était prévu quand ?", text: ["Ce midi","Ce soir","Demain matin"], textC: 0,
    img: ["midi","soir","matin"], imgC: 0,
    fillQ: "Selon le message, rendez-vous ce _________.", fill: "midi"
  },
  {
    id: "in2-q10", textQ: "Selon le message, les entrées du musée sont-elles payantes ?", text: ["Non, gratuites","Oui","On ne sait pas"], textC: 0,
    img: ["gratuites","payantes","inconnu"], imgC: 0,
    fillQ: "Selon le message, entrées _________.", fill: "gratuites", fillA: ["gratuit"]
  }
]);

const INSTRUCTION_3 = buildPool("base", "instruction-3", [
  {
    id: "in3-q1", textQ: "Selon le message, quel rendez-vous au bureau ?", text: ["À 10 h 30","À 12 h 30","À 17 h"], textC: 0,
    img: ["10h30","12h30","17h"], imgC: 0,
    fillQ: "Selon le message, rendez-vous à 10 h _________.", fill: "30", fillA: ["trente"]
  },
  {
    id: "in3-q2", textQ: "Selon le message, à quelle heure le déjeuner ?", text: ["12 h 30","10 h 30","17 h"], textC: 0,
    img: ["12h30","10h30","17h"], imgC: 0,
    fillQ: "Selon le message, déjeuner à 12 h _________.", fill: "30", fillA: ["trente"]
  },
  {
    id: "in3-q3", textQ: "Selon le message, où a lieu le déjeuner ?", text: ["Au restaurant","Au bureau","À la maison"], textC: 0,
    img: ["restaurant","bureau","maison"], imgC: 0,
    fillQ: "Selon le message, déjeuner au _________.", fill: "restaurant"
  },
  {
    id: "in3-q4", textQ: "Selon le message, quel rendez-vous de 17 h est annulé ?", text: ["Avec le comptable","Avec le directeur","Avec le médecin"], textC: 0,
    img: ["comptable","directeur","médecin"], imgC: 0,
    fillQ: "Selon le message, le comptable a annulé le rendez-vous de _________ h.", fill: "17", fillA: ["dix-sept"]
  },
  {
    id: "in3-q5", textQ: "Selon le message, pourquoi le comptable a-t-il annulé ?", text: ["Il est à l'hôpital","Il est en vacances","Il travaille"], textC: 0,
    img: ["hôpital","vacances","travail"], imgC: 0,
    fillQ: "Selon le message, il est à l'_________.", fill: "hôpital", fillA: ["hopital"]
  },
  {
    id: "in3-q6", textQ: "Selon le message, quel événement ce soir ?", text: ["L'anniversaire de sa femme","Un concert","Un dîner au restaurant"], textC: 0,
    img: ["anniversaire","concert","dîner"], imgC: 0,
    fillQ: "Selon le message, anniversaire de votre _________.", fill: "femme"
  },
  {
    id: "in3-q7", textQ: "Selon le message, qui viendra le chercher ?", text: ["Sa fille","Son fils","Sa femme"], textC: 0,
    img: ["fille","fils","femme"], imgC: 0,
    fillQ: "Selon le message, votre fille passera vous _________.", fill: "chercher"
  },
  {
    id: "in3-q8", textQ: "Selon le message, combien de rendez-vous au bureau le matin ?", text: ["Un à 10 h 30","Deux","Aucun"], textC: 0,
    img: ["1","2","0"], imgC: 0,
    fillQ: "Selon le message, rendez-vous à 10 h _________.", fill: "30", fillA: ["trente"]
  },
  {
    id: "in3-q9", textQ: "Selon le message, le déjeuner est avec qui ?", text: ["Avec un collègue","Avec le comptable","Avec sa fille"], textC: 0,
    img: ["collègue","comptable","fille"], imgC: 0,
    fillQ: "Selon le message, déjeuner avec un _________.", fill: "collègue"
  },
  {
    id: "in3-q10", textQ: "Selon le message, faut-il penser à l'anniversaire ?", text: ["Oui","Non","C'est demain"], textC: 0,
    img: ["oui","non","demain"], imgC: 0,
    fillQ: "Selon le message, n'oubliez pas l'_________ de votre femme.", fill: "anniversaire"
  }
]);

const INSTRUCTION_4 = buildPool("base", "instruction-4", [
  {
    id: "in4-q1", textQ: "Selon le message, qu'a-t-il oublié ?", text: ["Ses clés","Son téléphone","Son portefeuille"], textC: 0,
    img: ["clés","téléphone","portefeuille"], imgC: 0,
    fillQ: "Selon le message, j'ai oublié mes _________.", fill: "clés", fillA: ["cles"]
  },
  {
    id: "in4-q2", textQ: "Selon le message, où sont les clés ?", text: ["Sur la table à manger","Dans la voiture","Dans la poche"], textC: 0,
    img: ["table","voiture","poche"], imgC: 0,
    fillQ: "Selon le message, sur la table à _________.", fill: "manger"
  },
  {
    id: "in4-q3", textQ: "Selon le message, où apporter les clés ?", text: ["Au bureau","À la maison","Au parc"], textC: 0,
    img: ["bureau","maison","parc"], imgC: 0,
    fillQ: "Selon le message, les apporter au _________.", fill: "bureau"
  },
  {
    id: "in4-q4", textQ: "Selon le message, à quelle heure finit-il le travail ?", text: ["17 h 30","17 h","18 h"], textC: 0,
    img: ["17h30","17h","18h"], imgC: 0,
    fillQ: "Selon le message, je finis à 17 h _________.", fill: "30", fillA: ["trente"]
  },
  {
    id: "in4-q5", textQ: "Selon le message, quelle activité après le travail ?", text: ["Se promener au parc","Aller au cinéma","Rentrer directement"], textC: 0,
    img: ["parc","cinéma","maison"], imgC: 0,
    fillQ: "Selon le message, aller au _________ et manger.", fill: "parc"
  },
  {
    id: "in4-q6", textQ: "Selon le message, où manger ?", text: ["Chez l'italien","Au bureau","À la maison"], textC: 0,
    img: ["italien","bureau","maison"], imgC: 0,
    fillQ: "Selon le message, manger chez l'_________.", fill: "italien"
  },
  {
    id: "in4-q7", textQ: "Selon le message, avant quelle heure rentrer ?", text: ["Avant 20 h","Avant 18 h","Avant 22 h"], textC: 0,
    img: ["20 h","18 h","22 h"], imgC: 0,
    fillQ: "Selon le message, rentrer avant _________ heures.", fill: "20", fillA: ["vingt"]
  },
  {
    id: "in4-q8", textQ: "Selon le message, pourquoi rentrer tôt ?", text: ["Réunion importante demain","Il est fatigué","Le restaurant ferme"], textC: 0,
    img: ["réunion","fatigue","fermeture"], imgC: 0,
    fillQ: "Selon le message, réunion importante demain à 9 _________.", fill: "heures", fillA: ["h"]
  },
  {
    id: "in4-q9", textQ: "Selon le message, le restaurant est près de quoi ?", text: ["Du cinéma","Du parc","Du bureau"], textC: 0,
    img: ["cinéma","parc","bureau"], imgC: 0,
    fillQ: "Selon le message, en face du _________.", fill: "cinéma", fillA: ["cinema"]
  },
  {
    id: "in4-q10", textQ: "Selon le message, à quelle heure la réunion de demain ?", text: ["9 h","10 h 30","17 h 30"], textC: 0,
    img: ["9 h","10h30","17h30"], imgC: 0,
    fillQ: "Selon le message, réunion demain à _________ heures.", fill: "9", fillA: ["neuf"]
  }
]);

const INSTRUCTION_5 = buildPool("base", "instruction-5", [
  {
    id: "in5-q1", textQ: "Selon le message, où récupérer la commande ?", text: ["À la boulangerie","Au restaurant","Au supermarché"], textC: 0,
    img: ["boulangerie","restaurant","supermarché"], imgC: 0,
    fillQ: "Selon le message, commande à la _________.", fill: "boulangerie"
  },
  {
    id: "in5-q2", textQ: "Selon le message, à partir de quelle heure ?", text: ["15 h","14 h","18 h"], textC: 0,
    img: ["15 h","14 h","18 h"], imgC: 0,
    fillQ: "Selon le message, récupérer dès _________ heures.", fill: "15", fillA: ["quinze"]
  },
  {
    id: "in5-q3", textQ: "Selon le message, à quelle heure ferme la boutique lundi et mardi ?", text: ["18 h 30","20 h","19 h"], textC: 0,
    img: ["18h30","20h","19h"], imgC: 0,
    fillQ: "Selon le message, ferme à 18 h _________.", fill: "30", fillA: ["trente"]
  },
  {
    id: "in5-q4", textQ: "Selon le message, à quelle heure ferme les autres jours ?", text: ["20 h","18 h 30","21 h"], textC: 0,
    img: ["20h","18h30","21h"], imgC: 0,
    fillQ: "Selon le message, ferme à _________ heures.", fill: "20", fillA: ["vingt"]
  },
  {
    id: "in5-q5", textQ: "Selon le message, accepte-t-on les chèques ?", text: ["Non","Oui","Seulement la carte"], textC: 0,
    img: ["non","oui","carte"], imgC: 0,
    fillQ: "Selon le message, nous n'acceptons pas les _________.", fill: "chèques", fillA: ["cheques"]
  },
  {
    id: "in5-q6", textQ: "Selon le message, la commande est-elle prête ?", text: ["Oui","Non","Demain"], textC: 0,
    img: ["oui","non","demain"], imgC: 0,
    fillQ: "Selon le message, commande est _________.", fill: "prête", fillA: ["prete"]
  },
  {
    id: "in5-q7", textQ: "Selon le message, quels jours ferment plus tôt ?", text: ["Lundi et mardi","Samedi et dimanche","Mercredi et jeudi"], textC: 0,
    img: ["début semaine","week-end","milieu semaine"], imgC: 0,
    fillQ: "Selon le message, tous les lundis et _________.", fill: "mardis"
  },
  {
    id: "in5-q8", textQ: "Selon le message, peut-on payer par chèque ?", text: ["Non","Oui","Seulement en espèces"], textC: 0,
    img: ["non","oui","espèces"], imgC: 0,
    fillQ: "Selon le message, pas de _________.", fill: "chèques", fillA: ["cheques"]
  },
  {
    id: "in5-q9", textQ: "Selon le message, la boutique ferme-t-elle à 20 h le mercredi ?", text: ["Oui","Non, 18 h 30","Non, 19 h"], textC: 0,
    img: ["20 h","18h30","19h"], imgC: 0,
    fillQ: "Selon le message, ferme à 20 _________.", fill: "heures", fillA: ["h"]
  },
  {
    id: "in5-q10", textQ: "Selon le message, quand peut-on récupérer la commande ?", text: ["Dès 15 h","Dès 9 h","Le soir"], textC: 0,
    img: ["15 h","9 h","soir"], imgC: 0,
    fillQ: "Selon le message, dès _________ heures.", fill: "15", fillA: ["quinze"]
  }
]);

const CONVERSATION_1 = buildPool("base", "conversation-1", [
  {
    id: "cv1-q1", textQ: "Situation 1 — Quel rayon cherche-t-il ?", text: ["Bandes dessinées","Autobiographies","Romans"], textC: 0,
    img: ["BD","autobiographies","romans"], imgC: 0,
    fillQ: "Situation 1 — Le rayon _________ dessinées.", fill: "bandes", fillA: ["BD"]
  },
  {
    id: "cv1-q2", textQ: "Situation 1 — Où se trouve le rayon ?", text: ["Au fond à droite","À l'entrée","À gauche"], textC: 0,
    img: ["fond droite","entrée","gauche"], imgC: 0,
    fillQ: "Situation 1 — Au fond à _________.", fill: "droite"
  },
  {
    id: "cv1-q3", textQ: "Situation 2 — Combien de kilos de tomates ?", text: ["5 kilos","2 kilos","12 kilos"], textC: 0,
    img: ["5 kg","2 kg","12 kg"], imgC: 0,
    fillQ: "Situation 2 — Cinq _________ de tomates.", fill: "kilos"
  },
  {
    id: "cv1-q4", textQ: "Situation 2 — Combien coûte tout ?", text: ["12 euros 50","5 euros","2 euros"], textC: 0,
    img: ["12,50 €","5 €","2 €"], imgC: 0,
    fillQ: "Situation 2 — Ça fera 12 euros _________.", fill: "50", fillA: ["cinquante"]
  },
  {
    id: "cv1-q5", textQ: "Situation 3 — Quelle direction indique-t-on ?", text: ["Première à droite","Première à gauche","Tout droit"], textC: 0,
    img: ["droite","gauche","tout droit"], imgC: 0,
    fillQ: "Situation 3 — C'est la première à _________.", fill: "droite"
  },
  {
    id: "cv1-q6", textQ: "Situation 3 — Où veut-elle aller ?", text: ["À la bibliothèque","Au marché","À la poste"], textC: 0,
    img: ["bibliothèque","marché","poste"], imgC: 0,
    fillQ: "Situation 3 — Le chemin pour la _________.", fill: "bibliothèque", fillA: ["bibliotheque"]
  },
  {
    id: "cv1-q7", textQ: "Situation 4 — Qu'a-t-il acheté ?", text: ["De nouvelles chaises","Une table","Un canapé"], textC: 0,
    img: ["chaises","table","canapé"], imgC: 0,
    fillQ: "Situation 4 — J'ai acheté de nouvelles _________.", fill: "chaises"
  },
  {
    id: "cv1-q8", textQ: "Situation 4 — Qu'est-ce qu'elle n'aime pas ?", text: ["La couleur","La forme","Le prix"], textC: 0,
    img: ["couleur","forme","prix"], imgC: 0,
    fillQ: "Situation 4 — Je n'aime pas trop la _________.", fill: "couleur"
  },
  {
    id: "cv1-q9", textQ: "Situation 2 — Qu'ajoute-t-elle aussi ?", text: ["Deux melons","Des pommes","Du pain"], textC: 0,
    img: ["melons","pommes","pain"], imgC: 0,
    fillQ: "Situation 2 — Deux _________ aussi.", fill: "melons"
  },
  {
    id: "cv1-q10", textQ: "Situation 1 — À côté de quel rayon ?", text: ["Autobiographies","BD","Cuisine"], textC: 0,
    img: ["autobiographies","BD","cuisine"], imgC: 0,
    fillQ: "Situation 1 — À côté du rayon _________.", fill: "autobiographies"
  }
]);

const CONVERSATION_2 = buildPool("base", "conversation-2", [
  {
    id: "cv2-q1", textQ: "Situation 1 — Où veut-il aller ?", text: ["En capitale","À la mer","À la montagne"], textC: 0,
    img: ["capitale","plage","montagne"], imgC: 0,
    fillQ: "Situation 1 — Un billet pour la _________.", fill: "capitale"
  },
  {
    id: "cv2-q2", textQ: "Situation 1 — À quelle heure veut-il partir ?", text: ["Vers 14 h","Vers 10 h","Vers 18 h"], textC: 0,
    img: ["14 h","10 h","18 h"], imgC: 0,
    fillQ: "Situation 1 — Vers _________ heures.", fill: "14", fillA: ["quatorze"]
  },
  {
    id: "cv2-q3", textQ: "Situation 2 — Où est-ce ?", text: ["À l'hôtel","À la gare","Au restaurant"], textC: 0,
    img: ["hôtel","station","restaurant"], imgC: 0,
    fillQ: "Situation 2 — Bienvenue à l'_________.", fill: "hôtel", fillA: ["hotel"]
  },
  {
    id: "cv2-q4", textQ: "Situation 2 — A-t-il une réservation ?", text: ["Oui, hier","Non","Pour demain"], textC: 0,
    img: ["oui","non","demain"], imgC: 0,
    fillQ: "Situation 2 — J'ai réservé une chambre _________.", fill: "hier"
  },
  {
    id: "cv2-q5", textQ: "Situation 3 — Que commande-t-elle ?", text: ["Un café et un croissant","Un thé","Un jus"], textC: 0,
    img: ["café/croissant","thé","jus"], imgC: 0,
    fillQ: "Situation 3 — Un café et un _________.", fill: "croissant"
  },
  {
    id: "cv2-q6", textQ: "Situation 3 — Quand veut-elle payer ?", text: ["Tout de suite","Plus tard","Demain"], textC: 0,
    img: ["tout de suite","plus tard","demain"], imgC: 0,
    fillQ: "Situation 3 — Je veux payer tout de _________.", fill: "suite"
  },
  {
    id: "cv2-q7", textQ: "Situation 4 — Que demande-t-il ?", text: ["Deux pains au chocolat et trois croissants","Un sandwich","Un café"], textC: 0,
    img: ["viennoiseries","sandwich","café"], imgC: 0,
    fillQ: "Situation 4 — Deux pains au chocolat et trois _________.", fill: "croissants"
  },
  {
    id: "cv2-q8", textQ: "Situation 4 — Combien paie-t-il ?", text: ["3 euros","12 euros 50","5 euros"], textC: 0,
    img: ["3 €","12,50 €","5 €"], imgC: 0,
    fillQ: "Situation 4 — _________ euros s'il vous plaît.", fill: "3", fillA: ["trois"]
  },
  {
    id: "cv2-q9", textQ: "Situation 4 — Prend-il du pain ?", text: ["Non merci","Oui","Deux baguettes"], textC: 0,
    img: ["non","oui","baguettes"], imgC: 0,
    fillQ: "Situation 4 — Non _________, ça sera tout.", fill: "merci"
  },
  {
    id: "cv2-q10", textQ: "Situation 3 — Demande-t-elle l'addition ?", text: ["Oui","Non","Plus tard"], textC: 0,
    img: ["oui","non","plus tard"], imgC: 0,
    fillQ: "Situation 3 — Et l'_________ aussi.", fill: "addition"
  }
]);

const CONVERSATION_3 = buildPool("base", "conversation-3", [
  {
    id: "cv3-q1", textQ: "Situation 1 — Le bus est-il déjà passé ?", text: ["Non, pas encore","Oui","Il y a une heure"], textC: 0,
    img: ["non","oui","1 h"], imgC: 0,
    fillQ: "Situation 1 — Non pas _________.", fill: "encore"
  },
  {
    id: "cv3-q2", textQ: "Situation 1 — Dans combien de temps le bus ?", text: ["Cinq minutes","Dix minutes","Une heure"], textC: 0,
    img: ["5 min","10 min","1 h"], imgC: 0,
    fillQ: "Situation 1 — Dans _________ minutes.", fill: "cinq", fillA: ["5"]
  },
  {
    id: "cv3-q3", textQ: "Situation 2 — À quelle heure part le train ?", text: ["6 h 15","14 h","18 h"], textC: 0,
    img: ["6h15","14h","18h"], imgC: 0,
    fillQ: "Situation 2 — À 6 h _________.", fill: "15", fillA: ["quinze"]
  },
  {
    id: "cv3-q4", textQ: "Situation 3 — Que veut-il boire ?", text: ["Un café","Un thé","De l'eau"], textC: 0,
    img: ["café","thé","eau"], imgC: 0,
    fillQ: "Situation 3 — Un _________, s'il te plaît.", fill: "café", fillA: ["cafe"]
  },
  {
    id: "cv3-q5", textQ: "Situation 3 — Veut-il du sucre ?", text: ["Non, nature","Oui","Avec du lait"], textC: 0,
    img: ["nature","sucre","lait"], imgC: 0,
    fillQ: "Situation 3 — Je le bois _________.", fill: "nature"
  },
  {
    id: "cv3-q6", textQ: "Situation 4 — À quelle heure ferme le musée ?", text: ["17 h 30","18 h","16 h"], textC: 0,
    img: ["17h30","18h","16h"], imgC: 0,
    fillQ: "Situation 4 — Ferme à 17 h _________.", fill: "30", fillA: ["trente"]
  },
  {
    id: "cv3-q7", textQ: "Situation 4 — Combien de temps avant la fermeture ?", text: ["Une heure","Deux heures","Cinq minutes"], textC: 0,
    img: ["1 h","2 h","5 min"], imgC: 0,
    fillQ: "Situation 4 — Il reste une _________ avant la fermeture.", fill: "heure"
  },
  {
    id: "cv3-q8", textQ: "Situation 1 — Quel numéro de bus ?", text: ["Le bus 2","Le bus 16","Le bus 112"], textC: 0,
    img: ["2","16","112"], imgC: 0,
    fillQ: "Situation 1 — Le bus numéro _________.", fill: "2", fillA: ["deux"]
  },
  {
    id: "cv3-q9", textQ: "Situation 2 — Le client demande l'heure d'un train : pour quelle destination ?", text: ["Une grande ville","La mer","La montagne"], textC: 0,
    img: ["ville","plage","montagne"], imgC: 0,
    fillQ: "Situation 2 — Train pour une grande _________.", fill: "ville"
  },
  {
    id: "cv3-q10", textQ: "Situation 4 — Le musée ferme-t-il bientôt ?", text: ["Oui, dans une heure","Non","Dans 5 minutes"], textC: 0,
    img: ["1 h","non","5 min"], imgC: 0,
    fillQ: "Situation 4 — Il reste une _________.", fill: "heure"
  }
]);

const CONVERSATION_4 = buildPool("base", "conversation-4", [
  {
    id: "cv4-q1", textQ: "Situation 1 — Où trouver les dates du DELF ?", text: ["Sur Internet","À la bibliothèque","À la mairie"], textC: 0,
    img: ["internet","bibliothèque","mairie"], imgC: 0,
    fillQ: "Situation 1 — Voir les dates sur _________.", fill: "Internet", fillA: ["internet"]
  },
  {
    id: "cv4-q2", textQ: "Situation 2 — Que veut-il manger ?", text: ["Une pizza","Une salade","Un sandwich"], textC: 0,
    img: ["pizza","salade","sandwich"], imgC: 0,
    fillQ: "Situation 2 — Pourquoi pas une _________ ?", fill: "pizza"
  },
  {
    id: "cv4-q3", textQ: "Situation 3 — Quel temps fait-il ?", text: ["Mauvais","Beau","Chaud"], textC: 0,
    img: ["mauvais","beau","chaud"], imgC: 0,
    fillQ: "Situation 3 — Quel mauvais _________ aujourd'hui !", fill: "temps"
  },
  {
    id: "cv4-q4", textQ: "Situation 3 — Qu'espérait-il organiser ?", text: ["Un barbecue","Un pique-nique","Une fête"], textC: 0,
    img: ["barbecue","pique-nique","fête"], imgC: 0,
    fillQ: "Situation 3 — Organiser un _________ ce week-end.", fill: "barbecue"
  },
  {
    id: "cv4-q5", textQ: "Situation 4 — Quel numéro de vol ?", text: ["AF 340","AF 717","354"], textC: 0,
    img: ["AF340","AF717","354"], imgC: 0,
    fillQ: "Situation 4 — C'est le AF _________.", fill: "340"
  },
  {
    id: "cv4-q6", textQ: "Situation 4 — Dans combien de temps décolle l'avion ?", text: ["Dans deux heures","Dans 30 minutes","Demain"], textC: 0,
    img: ["2 h","30 min","demain"], imgC: 0,
    fillQ: "Situation 4 — Décolle dans deux _________.", fill: "heures"
  },
  {
    id: "cv4-q7", textQ: "Situation 4 — A-t-il le temps d'aller au café ?", text: ["Oui","Non","Peut-être"], textC: 0,
    img: ["oui","non","peut-être"], imgC: 0,
    fillQ: "Situation 4 — J'ai le temps d'aller me chercher un _________.", fill: "café", fillA: ["cafe"]
  },
  {
    id: "cv4-q8", textQ: "Situation 2 — Accepte-t-elle la pizza ?", text: ["Oui, bonne idée","Non","Elle préfère une salade"], textC: 0,
    img: ["oui","non","salade"], imgC: 0,
    fillQ: "Situation 2 — Oui, c'est une bonne _________.", fill: "idée", fillA: ["idee"]
  },
  {
    id: "cv4-q9", textQ: "Situation 3 — Le mauvais temps va-t-il durer ?", text: ["Oui, toute la semaine","Non","Seulement aujourd'hui"], textC: 0,
    img: ["semaine","non","aujourd'hui"], imgC: 0,
    fillQ: "Situation 3 — Ça va durer toute la _________.", fill: "semaine"
  },
  {
    id: "cv4-q10", textQ: "Situation 1 — Les dates sont-elles en ligne ?", text: ["Oui","Non","À la bibliothèque"], textC: 0,
    img: ["oui","non","bibliothèque"], imgC: 0,
    fillQ: "Situation 1 — Voir sur _________.", fill: "Internet", fillA: ["internet"]
  }
]);

const CONVERSATION_5 = buildPool("base", "conversation-5", [
  {
    id: "cv5-q1", textQ: "Situation 1 — Que dit le message annulé ?", text: ["Un rendez-vous de 11 h","Un rendez-vous de 17 h","Un déjeuner"], textC: 0,
    img: ["11 h","17 h","déjeuner"], imgC: 0,
    fillQ: "Situation 1 — Annule son rendez-vous de 11 _________.", fill: "heures", fillA: ["h"]
  },
  {
    id: "cv5-q2", textQ: "Situation 2 — Où va-t-il ?", text: ["Chez le docteur","Au cinéma","À l'école"], textC: 0,
    img: ["docteur","cinéma","école"], imgC: 0,
    fillQ: "Situation 2 — Chez le _________.", fill: "docteur"
  },
  {
    id: "cv5-q3", textQ: "Situation 2 — Quel est son problème ?", text: ["Mal au bras","Mal à la tête","Mal au dos"], textC: 0,
    img: ["bras","tête","dos"], imgC: 0,
    fillQ: "Situation 2 — J'ai très mal au _________.", fill: "bras"
  },
  {
    id: "cv5-q4", textQ: "Situation 3 — Dans combien de temps commence le film ?", text: ["Dans 20 minutes","Dans 5 minutes","Dans 1 heure"], textC: 0,
    img: ["20 min","5 min","1 h"], imgC: 0,
    fillQ: "Situation 3 — Dans vingt _________.", fill: "minutes"
  },
  {
    id: "cv5-q5", textQ: "Situation 3 — Que doit-il faire avant ?", text: ["Téléphoner","Acheter des pop-corn","Partir"], textC: 0,
    img: ["téléphoner","pop-corn","partir"], imgC: 0,
    fillQ: "Situation 3 — Je dois _________ avant.", fill: "téléphoner", fillA: ["telephoner"]
  },
  {
    id: "cv5-q6", textQ: "Situation 4 — L'examen est-il facile ?", text: ["Non, difficile","Oui","Moyen"], textC: 0,
    img: ["difficile","facile","moyen"], imgC: 0,
    fillQ: "Situation 4 — Les examens sont _________.", fill: "difficiles"
  },
  {
    id: "cv5-q7", textQ: "Situation 4 — Que doivent-ils faire ce soir ?", text: ["Étudier","Sortir","Dormir"], textC: 0,
    img: ["étudier","sortir","dormir"], imgC: 0,
    fillQ: "Situation 4 — Nous devons _________ toute la soirée.", fill: "étudier", fillA: ["etudier"]
  },
  {
    id: "cv5-q8", textQ: "Situation 1 — Y a-t-il des messages ?", text: ["Oui","Non","Un seul"], textC: 0,
    img: ["oui","non","un"], imgC: 0,
    fillQ: "Situation 1 — Oui, vous avez des _________.", fill: "messages"
  },
  {
    id: "cv5-q9", textQ: "Situation 2 — Le docteur va faire quoi ?", text: ["Regarder le bras","Donner un médicament","Appeler"], textC: 0,
    img: ["regarder","médicament","appeler"], imgC: 0,
    fillQ: "Situation 2 — On va regarder _________.", fill: "ça", fillA: ["ca"]
  },
  {
    id: "cv5-q10", textQ: "Situation 3 — Doit-il se dépêcher ?", text: ["Oui, le film commence bientôt","Non","Il a une heure"], textC: 0,
    img: ["vite","non","1 h"], imgC: 0,
    fillQ: "Situation 3 — Le film commence dans vingt _________.", fill: "minutes"
  }
]);

const CONVERSATION_6 = buildPool("base", "conversation-6", [
  {
    id: "cv6-q1", textQ: "Situation 1 — Que cherche-t-il à la pharmacie ?", text: ["De l'aspirine","Du sirop","Des vitamines"], textC: 0,
    img: ["aspirine","sirop","vitamines"], imgC: 0,
    fillQ: "Situation 1 — Avez-vous de l'_________ ?", fill: "aspirine"
  },
  {
    id: "cv6-q2", textQ: "Situation 1 — Combien coûte la boîte ?", text: ["2 euros 50","5 euros","10 euros"], textC: 0,
    img: ["2,50 €","5 €","10 €"], imgC: 0,
    fillQ: "Situation 1 — Ça fera 2 euros _________.", fill: "50", fillA: ["cinquante"]
  },
  {
    id: "cv6-q3", textQ: "Situation 2 — Que fait-il ?", text: ["Il écoute de la musique","Il dort","Il mange"], textC: 0,
    img: ["musique","dort","mange"], imgC: 0,
    fillQ: "Situation 2 — J'écoute de la _________.", fill: "musique"
  },
  {
    id: "cv6-q4", textQ: "Situation 2 — Que demande-t-elle ?", text: ["De l'aide pour ranger","D'aller au cinéma","De faire les courses"], textC: 0,
    img: ["ranger","cinéma","courses"], imgC: 0,
    fillQ: "Situation 2 — Un coup de main pour _________.", fill: "ranger"
  },
  {
    id: "cv6-q5", textQ: "Situation 3 — Qu'a-t-elle gagné ?", text: ["Un voyage","Un vélo","Un livre"], textC: 0,
    img: ["voyage","vélo","livre"], imgC: 0,
    fillQ: "Situation 3 — Vous avez gagné un _________.", fill: "voyage"
  },
  {
    id: "cv6-q6", textQ: "Situation 3 — Que recevra-t-elle ?", text: ["Des billets d'avion","Un chèque","Un colis"], textC: 0,
    img: ["billets","chèque","colis"], imgC: 0,
    fillQ: "Situation 3 — Vos billets d'_________ bientôt.", fill: "avion"
  },
  {
    id: "cv6-q7", textQ: "Situation 4 — Qu'achète-t-elle ?", text: ["Une casquette","Un chapeau","Un sac"], textC: 0,
    img: ["casquette","chapeau","sac"], imgC: 0,
    fillQ: "Situation 4 — Cette _________ ?", fill: "casquette"
  },
  {
    id: "cv6-q8", textQ: "Situation 4 — Qu'est-ce qu'elle n'aime pas ?", text: ["La couleur","La taille","Le prix"], textC: 0,
    img: ["couleur","taille","prix"], imgC: 0,
    fillQ: "Situation 4 — Je n'aime pas la _________.", fill: "couleur"
  },
  {
    id: "cv6-q9", textQ: "Situation 1 — Quel est son problème ?", text: ["Mal à la tête","Mal au ventre","Mal aux dents"], textC: 0,
    img: ["tête","ventre","dents"], imgC: 0,
    fillQ: "Situation 1 — J'ai très mal à la _________.", fill: "tête", fillA: ["tete"]
  },
  {
    id: "cv6-q10", textQ: "Situation 4 — Propose-t-on une autre couleur ?", text: ["Oui","Non","Un autre modèle"], textC: 0,
    img: ["oui","non","modèle"], imgC: 0,
    fillQ: "Situation 4 — Une autre _________ si vous voulez.", fill: "couleur"
  }
]);

const CONVERSATION_7 = buildPool("base", "conversation-7", [
  {
    id: "cv7-q1", textQ: "Situation 1 — Que font-ils ?", text: ["Ils s'amusent et dansent","Ils mangent","Ils travaillent"], textC: 0,
    img: ["danser","manger","travailler"], imgC: 0,
    fillQ: "Situation 1 — J'adore _________ !", fill: "danser"
  },
  {
    id: "cv7-q2", textQ: "Situation 2 — Que prépare-t-elle ?", text: ["Un gâteau au chocolat","Une salade","Une pizza"], textC: 0,
    img: ["gâteau","salade","pizza"], imgC: 0,
    fillQ: "Situation 2 — Un gâteau au _________.", fill: "chocolat"
  },
  {
    id: "cv7-q3", textQ: "Situation 2 — Veut-elle de l'aide ?", text: ["On lui propose de l'aide","Non","Elle refuse"], textC: 0,
    img: ["aide","non","refuse"], imgC: 0,
    fillQ: "Situation 2 — Tu veux de l'_________ ?", fill: "aide"
  },
  {
    id: "cv7-q4", textQ: "Situation 3 — Que veut-elle regarder ?", text: ["Un documentaire","Un film","Une série"], textC: 0,
    img: ["documentaire","film","série"], imgC: 0,
    fillQ: "Situation 3 — Je préfère un _________.", fill: "documentaire"
  },
  {
    id: "cv7-q5", textQ: "Situation 4 — Que veut-elle acheter ?", text: ["Trois pots de miel","Du pain","Du lait"], textC: 0,
    img: ["miel","pain","lait"], imgC: 0,
    fillQ: "Situation 4 — Trois pots de _________.", fill: "miel"
  },
  {
    id: "cv7-q6", textQ: "Situation 5 — À qui est le CD ?", text: ["À la personne qui parle","À son ami","À la boutique"], textC: 0,
    img: ["moi","ami","boutique"], imgC: 0,
    fillQ: "Situation 5 — C'est le _________.", fill: "mien"
  },
  {
    id: "cv7-q7", textQ: "Situation 5 — Quand l'a-t-il acheté ?", text: ["Ce matin","Hier","La semaine dernière"], textC: 0,
    img: ["matin","hier","semaine"], imgC: 0,
    fillQ: "Situation 5 — Je l'ai acheté ce _________.", fill: "matin"
  },
  {
    id: "cv7-q8", textQ: "Situation 3 — Accepte-t-il le documentaire ?", text: ["Oui, ça lui convient","Non","Il préfère un film"], textC: 0,
    img: ["oui","non","film"], imgC: 0,
    fillQ: "Situation 3 — D'accord, ça me _________.", fill: "convient"
  },
  {
    id: "cv7-q9", textQ: "Situation 1 — S'amusent-ils ?", text: ["Oui beaucoup","Non","Un peu"], textC: 0,
    img: ["beaucoup","non","un peu"], imgC: 0,
    fillQ: "Situation 1 — Je m'amuse _________.", fill: "beaucoup"
  },
  {
    id: "cv7-q10", textQ: "Situation 5 — Peut-on l'écouter maintenant ?", text: ["Oui","Non","Plus tard"], textC: 0,
    img: ["oui","non","plus tard"], imgC: 0,
    fillQ: "Situation 5 — On peut l'_________ maintenant.", fill: "écouter", fillA: ["ecouter"]
  }
]);

const CONVERSATION_8 = buildPool("base", "conversation-8", [
  {
    id: "cv8-q1", textQ: "Situation 1 — Que cherche-t-elle ?", text: ["Les céréales","Le lait","Le pain"], textC: 0,
    img: ["céréales","lait","pain"], imgC: 0,
    fillQ: "Situation 1 — Où sont les _________ ?", fill: "céréales", fillA: ["cereales"]
  },
  {
    id: "cv8-q2", textQ: "Situation 1 — Où sont-elles ?", text: ["Au fond du magasin","À l'entrée","À la caisse"], textC: 0,
    img: ["fond","entrée","caisse"], imgC: 0,
    fillQ: "Situation 1 — Au fond du _________.", fill: "magasin"
  },
  {
    id: "cv8-q3", textQ: "Situation 2 — Qu'a-t-elle perdu ?", text: ["Ses clés","Son téléphone","Son sac"], textC: 0,
    img: ["clés","téléphone","sac"], imgC: 0,
    fillQ: "Situation 2 — Où sont mes _________ ?", fill: "clés", fillA: ["cles"]
  },
  {
    id: "cv8-q4", textQ: "Situation 2 — Où sont les clés ?", text: ["Sur la table","Dans la poche","Dehors"], textC: 0,
    img: ["table","poche","dehors"], imgC: 0,
    fillQ: "Situation 2 — Elles sont sur la _________.", fill: "table"
  },
  {
    id: "cv8-q5", textQ: "Situation 3 — Quel type de film ?", text: ["Une comédie","Un film d'horreur","Un documentaire"], textC: 0,
    img: ["comédie","horreur","documentaire"], imgC: 0,
    fillQ: "Situation 3 — Pourquoi pas une _________ ?", fill: "comédie"
  },
  {
    id: "cv8-q6", textQ: "Situation 3 — Pourquoi refuse-t-elle l'horreur ?", text: ["Elle dormira mal","C'est trop long","C'est cher"], textC: 0,
    img: ["mal dormir","long","cher"], imgC: 0,
    fillQ: "Situation 3 — Je vais mal _________ cette nuit.", fill: "dormir"
  },
  {
    id: "cv8-q7", textQ: "Situation 4 — Que prend l'un ?", text: ["Un menu du jour","Un sandwich","Une salade"], textC: 0,
    img: ["menu","sandwich","salade"], imgC: 0,
    fillQ: "Situation 4 — Un menu du _________.", fill: "jour"
  },
  {
    id: "cv8-q8", textQ: "Situation 4 — Que prend l'autre ?", text: ["Un plat du jour","Un menu","Rien"], textC: 0,
    img: ["plat","menu","rien"], imgC: 0,
    fillQ: "Situation 4 — Un plat du _________.", fill: "jour"
  },
  {
    id: "cv8-q9", textQ: "Situation 5 — Qu'oublie-t-elle ?", text: ["Son casque","Son sac","Son téléphone"], textC: 0,
    img: ["casque","sac","téléphone"], imgC: 0,
    fillQ: "Situation 5 — Je vais chercher mon _________.", fill: "casque"
  },
  {
    id: "cv8-q10", textQ: "Situation 5 — Ont-ils le temps ?", text: ["Oui","Non","Ils sont en retard"], textC: 0,
    img: ["oui","non","retard"], imgC: 0,
    fillQ: "Situation 5 — On a le _________.", fill: "temps"
  }
]);

const OBJET_1 = buildPool("base", "objet-1", [
  {
    id: "ob1-q1", textQ: "Selon l'enregistrement, où sont les clés de voiture ?", text: ["Sur la table du salon","Dans la cuisine","Dans la voiture"], textC: 0,
    img: ["table salon","cuisine","voiture"], imgC: 0,
    fillQ: "Selon l'enregistrement, clés sur la table du _________.", fill: "salon"
  },
  {
    id: "ob1-q2", textQ: "Selon l'enregistrement, quoi faire avec la poubelle ?", text: ["La sortir","La laver","La vider dans la cuisine"], textC: 0,
    img: ["sortir","laver","vider"], imgC: 0,
    fillQ: "Selon l'enregistrement, sortir la _________.", fill: "poubelle"
  },
  {
    id: "ob1-q3", textQ: "Selon l'enregistrement, où est la poubelle ?", text: ["Dans la cuisine","Dans le salon","Dehors"], textC: 0,
    img: ["cuisine","salon","dehors"], imgC: 0,
    fillQ: "Selon l'enregistrement, poubelle dans la _________.", fill: "cuisine"
  },
  {
    id: "ob1-q4", textQ: "Selon l'enregistrement, que faire avant de partir ?", text: ["Éteindre les lumières","Ouvrir les fenêtres","Allumer le chauffage"], textC: 0,
    img: ["éteindre","ouvrir","chauffage"], imgC: 0,
    fillQ: "Selon l'enregistrement, éteindre les _________.", fill: "lumières", fillA: ["lumieres"]
  },
  {
    id: "ob1-q5", textQ: "Selon l'enregistrement, quel temps sur la route ?", text: ["Des averses","Du soleil","De la neige"], textC: 0,
    img: ["averses","soleil","neige"], imgC: 0,
    fillQ: "Selon l'enregistrement, attention, il y a des _________.", fill: "averses"
  },
  {
    id: "ob1-q6", textQ: "Selon l'enregistrement, à côté de quoi sont les clés ?", text: ["D'un pot de fleurs","De la télévision","Du frigo"], textC: 0,
    img: ["fleurs","télé","frigo"], imgC: 0,
    fillQ: "Selon l'enregistrement, à côté du pot de _________.", fill: "fleurs"
  },
  {
    id: "ob1-q7", textQ: "Selon l'enregistrement, où dans la cuisine est la poubelle ?", text: ["À droite du frigo","À gauche","Sous l'évier"], textC: 0,
    img: ["droite frigo","gauche","évier"], imgC: 0,
    fillQ: "Selon l'enregistrement, à droite du _________.", fill: "frigo"
  },
  {
    id: "ob1-q8", textQ: "Selon l'enregistrement, faut-il faire attention en conduisant ?", text: ["Oui","Non","Seulement la nuit"], textC: 0,
    img: ["oui","non","nuit"], imgC: 0,
    fillQ: "Selon l'enregistrement, faire attention sur la _________.", fill: "route"
  },
  {
    id: "ob1-q9", textQ: "Selon l'enregistrement, quelles clés sont mentionnées ?", text: ["Les clés de la voiture","Les clés de la maison","Les clés du bureau"], textC: 0,
    img: ["voiture","maison","bureau"], imgC: 0,
    fillQ: "Selon l'enregistrement, clés de la _________.", fill: "voiture"
  },
  {
    id: "ob1-q10", textQ: "Selon l'enregistrement, doit-on laisser les lumières allumées ?", text: ["Non, les éteindre","Oui","Seulement une"], textC: 0,
    img: ["éteindre","laisser","une"], imgC: 0,
    fillQ: "Selon l'enregistrement, éteindre toutes les _________.", fill: "lumières", fillA: ["lumieres"]
  }
]);

const OBJET_2 = buildPool("base", "objet-2", [
  {
    id: "ob2-q1", textQ: "Selon l'enregistrement, qu'a-t-elle acheté ?", text: ["Une robe rouge","Un pantalon","Une veste"], textC: 0,
    img: ["robe","pantalon","veste"], imgC: 0,
    fillQ: "Selon l'enregistrement, une robe _________.", fill: "rouge"
  },
  {
    id: "ob2-q2", textQ: "Selon l'enregistrement, pour quelle occasion ?", text: ["Une fête d'anniversaire","Un mariage","Un concert"], textC: 0,
    img: ["anniversaire","mariage","concert"], imgC: 0,
    fillQ: "Selon l'enregistrement, fête d'_________.", fill: "anniversaire"
  },
  {
    id: "ob2-q3", textQ: "Selon l'enregistrement, qu'emporte-t-elle ?", text: ["Sa guitare","Un gâteau","Des fleurs"], textC: 0,
    img: ["guitare","gâteau","fleurs"], imgC: 0,
    fillQ: "Selon l'enregistrement, j'apporte ma _________.", fill: "guitare"
  },
  {
    id: "ob2-q4", textQ: "Selon l'enregistrement, que va-t-elle faire ?", text: ["Chanter une chanson","Danser","Jouer du piano"], textC: 0,
    img: ["chanter","danser","piano"], imgC: 0,
    fillQ: "Selon l'enregistrement, lui chanter une belle _________.", fill: "chanson"
  },
  {
    id: "ob2-q5", textQ: "Selon l'enregistrement, quel type de gâteau ?", text: ["Au chocolat blanc et fruits rouges","Au citron","À la vanille"], textC: 0,
    img: ["chocolat blanc","citron","vanille"], imgC: 0,
    fillQ: "Selon l'enregistrement, chocolat blanc et fruits _________.", fill: "rouges"
  },
  {
    id: "ob2-q6", textQ: "Selon l'enregistrement, qui prête des chaussures ?", text: ["Une amie","Sa sœur","Sa mère"], textC: 0,
    img: ["amie","sœur","mère"], imgC: 0,
    fillQ: "Selon l'enregistrement, une amie prête ses _________.", fill: "chaussures"
  },
  {
    id: "ob2-q7", textQ: "Selon l'enregistrement, qui s'occupe de la décoration ?", text: ["Quelqu'un du groupe","Elle","Personne"], textC: 0,
    img: ["ami","elle","personne"], imgC: 0,
    fillQ: "Selon l'enregistrement, quelqu'un s'occupe de la _________.", fill: "décoration", fillA: ["decoration"]
  },
  {
    id: "ob2-q8", textQ: "Selon l'enregistrement, a-t-on commandé le gâteau ?", text: ["On lui demande de le faire","Oui, c'est fait","Non"], textC: 0,
    img: ["commander","fait","non"], imgC: 0,
    fillQ: "Selon l'enregistrement, as-tu commandé le _________ ?", fill: "gâteau", fillA: ["gateau"]
  },
  {
    id: "ob2-q9", textQ: "Selon l'enregistrement, la robe a un détail en soie ?", text: ["Oui, un nœud","Non","Des boutons"], textC: 0,
    img: ["nœud","non","boutons"], imgC: 0,
    fillQ: "Selon l'enregistrement, un nœud en _________.", fill: "soie"
  },
  {
    id: "ob2-q10", textQ: "Selon l'enregistrement, quel instrument ?", text: ["La guitare","Le piano","La flûte"], textC: 0,
    img: ["guitare","piano","flûte"], imgC: 0,
    fillQ: "Selon l'enregistrement, j'apporte ma _________.", fill: "guitare"
  }
]);

const OBJET_3 = buildPool("base", "objet-3", [
  {
    id: "ob3-q1", textQ: "Selon l'enregistrement, quels documents apporter ?", text: ["Relevés de notes et carte d'identité","Un passeport seulement","Un livre"], textC: 0,
    img: ["documents","passeport","livre"], imgC: 0,
    fillQ: "Selon l'enregistrement, relevés de notes et carte d'_________.", fill: "identité", fillA: ["identite"]
  },
  {
    id: "ob3-q2", textQ: "Selon l'enregistrement, faut-il un chèque ?", text: ["Oui","Non","Une carte seulement"], textC: 0,
    img: ["oui","non","carte"], imgC: 0,
    fillQ: "Selon l'enregistrement, apporter un _________.", fill: "chèque"
  },
  {
    id: "ob3-q3", textQ: "Selon l'enregistrement, quand recevra-t-on un message ?", text: ["Quand le dossier est validé","Immédiatement","Dans un mois"], textC: 0,
    img: ["validation","immédiat","1 mois"], imgC: 0,
    fillQ: "Selon l'enregistrement, message de _________ quand validé.", fill: "confirmation"
  },
  {
    id: "ob3-q4", textQ: "Selon l'enregistrement, faut-il une photo ?", text: ["Oui, pour la carte d'étudiant","Non","Deux photos"], textC: 0,
    img: ["oui","non","2 photos"], imgC: 0,
    fillQ: "Selon l'enregistrement, photo pour la carte d'_________.", fill: "étudiant", fillA: ["etudiant"]
  },
  {
    id: "ob3-q5", textQ: "Selon l'enregistrement, où récupérer la carte ?", text: ["Au guichet 320","À l'accueil","En ligne"], textC: 0,
    img: ["guichet 320","accueil","ligne"], imgC: 0,
    fillQ: "Selon l'enregistrement, guichet _________.", fill: "320"
  },
  {
    id: "ob3-q6", textQ: "Selon l'enregistrement, pour quoi s'inscrire ?", text: ["À l'université","À un club","À un cours de sport"], textC: 0,
    img: ["université","club","sport"], imgC: 0,
    fillQ: "Selon l'enregistrement, inscription à l'_________.", fill: "université", fillA: ["universite"]
  },
  {
    id: "ob3-q7", textQ: "Selon l'enregistrement, combien de types de papiers principaux ?", text: ["Trois","Deux","Cinq"], textC: 0,
    img: ["3","2","5"], imgC: 0,
    fillQ: "Selon l'enregistrement, relevés, carte d'identité et _________.", fill: "chèque"
  },
  {
    id: "ob3-q8", textQ: "Selon l'enregistrement, la carte d'étudiant est à récupérer où ?", text: ["Au guichet","Par courrier","En classe"], textC: 0,
    img: ["guichet","courrier","classe"], imgC: 0,
    fillQ: "Selon l'enregistrement, à récupérer au _________.", fill: "guichet"
  },
  {
    id: "ob3-q9", textQ: "Selon l'enregistrement, le dossier doit être validé ?", text: ["Oui","Non","Peu importe"], textC: 0,
    img: ["oui","non","peu importe"], imgC: 0,
    fillQ: "Selon l'enregistrement, quand le dossier sera _________.", fill: "validé", fillA: ["valide"]
  },
  {
    id: "ob3-q10", textQ: "Selon l'enregistrement, oublier la photo ?", text: ["Non, il ne faut pas oublier","Oui, ce n'est pas grave","Une photo n'est pas demandée"], textC: 0,
    img: ["ne pas oublier","oublier","pas demandée"], imgC: 0,
    fillQ: "Selon l'enregistrement, n'oubliez pas une _________.", fill: "photo"
  }
]);

const OBJET_4 = buildPool("base", "objet-4", [
  {
    id: "ob4-q1", textQ: "Selon l'enregistrement, que veut-il acheter ?", text: ["Un carnet et des stylos","Un ordinateur","Un sac"], textC: 0,
    img: ["carnet/stylos","ordinateur","sac"], imgC: 0,
    fillQ: "Selon l'enregistrement, un carnet et des _________.", fill: "stylos"
  },
  {
    id: "ob4-q2", textQ: "Selon l'enregistrement, quelle autre fourniture ?", text: ["Une règle","Une gomme","Un cartable"], textC: 0,
    img: ["règle","gomme","cartable"], imgC: 0,
    fillQ: "Selon l'enregistrement, et une _________.", fill: "règle", fillA: ["regle"]
  },
  {
    id: "ob4-q3", textQ: "Selon l'enregistrement, pourquoi s'organiser ?", text: ["Pour un nouveau projet","Pour les vacances","Pour un examen"], textC: 0,
    img: ["projet","vacances","examen"], imgC: 0,
    fillQ: "Selon l'enregistrement, pour ce nouveau _________.", fill: "projet"
  },
  {
    id: "ob4-q4", textQ: "Selon l'enregistrement, que veut-il noter ?", text: ["Événements et tâches","Des recettes","Des numéros"], textC: 0,
    img: ["événements","recettes","numéros"], imgC: 0,
    fillQ: "Selon l'enregistrement, noter les événements et les _________.", fill: "tâches", fillA: ["taches"]
  },
  {
    id: "ob4-q5", textQ: "Selon l'enregistrement, que collera-t-il au mur ?", text: ["Des images du résultat final","Des posters","Rien"], textC: 0,
    img: ["images","posters","rien"], imgC: 0,
    fillQ: "Selon l'enregistrement, coller des _________ sur les murs.", fill: "images"
  },
  {
    id: "ob4-q6", textQ: "Selon l'enregistrement, où coller les images ?", text: ["Sur les murs du bureau","Dans le carnet","À la cuisine"], textC: 0,
    img: ["murs bureau","carnet","cuisine"], imgC: 0,
    fillQ: "Selon l'enregistrement, sur les murs de mon _________.", fill: "bureau"
  },
  {
    id: "ob4-q7", textQ: "Selon l'enregistrement, les stylos sont de quelle couleur ?", text: ["De couleurs","Noirs","Bleus"], textC: 0,
    img: ["couleurs","noirs","bleus"], imgC: 0,
    fillQ: "Selon l'enregistrement, stylos de _________.", fill: "couleurs"
  },
  {
    id: "ob4-q8", textQ: "Selon l'enregistrement, tout doit être comment ?", text: ["Parfait","Rapide","Simple"], textC: 0,
    img: ["parfait","rapide","simple"], imgC: 0,
    fillQ: "Selon l'enregistrement, tout doit être _________.", fill: "parfait", fillA: ["parfaite"]
  },
  {
    id: "ob4-q9", textQ: "Selon l'enregistrement, veut-il être organisé ?", text: ["Oui","Non","Peu importe"], textC: 0,
    img: ["oui","non","peu importe"], imgC: 0,
    fillQ: "Selon l'enregistrement, je dois être _________.", fill: "organisé", fillA: ["organise"]
  },
  {
    id: "ob4-q10", textQ: "Selon l'enregistrement, quel objet pour écrire ?", text: ["Un carnet","Un tableau","Un ordinateur"], textC: 0,
    img: ["carnet","tableau","ordinateur"], imgC: 0,
    fillQ: "Selon l'enregistrement, acheter un _________.", fill: "carnet"
  }
]);

const OBJET_5 = buildPool("base", "objet-5", [
  {
    id: "ob5-q1", textQ: "Selon l'enregistrement, où voyage-t-il ?", text: ["Très loin, outre-mer","En Europe","En Asie"], textC: 0,
    img: ["avion long","train","bateau"], imgC: 0,
    fillQ: "Selon l'enregistrement, il part très _________.", fill: "loin"
  },
  {
    id: "ob5-q2", textQ: "Selon l'enregistrement, combien de villes visitera-t-il ?", text: ["Trois","Deux","Cinq"], textC: 0,
    img: ["3","2","5"], imgC: 0,
    fillQ: "Selon l'enregistrement, trois grandes _________.", fill: "villes"
  },
  {
    id: "ob5-q3", textQ: "Selon l'enregistrement, comment se déplacer ?", text: ["En voiture louée","En train","À pied"], textC: 0,
    img: ["voiture","train","pied"], imgC: 0,
    fillQ: "Selon l'enregistrement, louer une _________.", fill: "voiture"
  },
  {
    id: "ob5-q4", textQ: "Selon l'enregistrement, comment visiter le canyon ?", text: ["En hélicoptère","En bus","En bateau"], textC: 0,
    img: ["hélicoptère","bus","bateau"], imgC: 0,
    fillQ: "Selon l'enregistrement, en _________ pour le canyon.", fill: "hélicoptère", fillA: ["helicoptere"]
  },
  {
    id: "ob5-q5", textQ: "Selon l'enregistrement, avec quoi prendre des photos ?", text: ["Un appareil photo","Un téléphone","Une caméra"], textC: 0,
    img: ["appareil photo","téléphone","caméra"], imgC: 0,
    fillQ: "Selon l'enregistrement, photos avec l'_________ photo.", fill: "appareil"
  },
  {
    id: "ob5-q6", textQ: "Selon l'enregistrement, qui a offert l'appareil photo ?", text: ["Ses grands-parents","Ses parents","Un ami"], textC: 0,
    img: ["grands-parents","parents","ami"], imgC: 0,
    fillQ: "Selon l'enregistrement, offert par ses grands-_________.", fill: "parents"
  },
  {
    id: "ob5-q7", textQ: "Selon l'enregistrement, quand a-t-il reçu le cadeau ?", text: ["À Noël","Pour son anniversaire","En été"], textC: 0,
    img: ["fêtes","anniversaire","été"], imgC: 0,
    fillQ: "Selon l'enregistrement, offert à _________.", fill: "Noël", fillA: ["noel"]
  },
  {
    id: "ob5-q8", textQ: "Selon l'enregistrement, visitera-t-il la capitale ?", text: ["Oui","Non","Seulement les villes"], textC: 0,
    img: ["oui","non","villes"], imgC: 0,
    fillQ: "Selon l'enregistrement, visiter la _________.", fill: "capitale"
  },
  {
    id: "ob5-q9", textQ: "Selon l'enregistrement, la voiture est-elle pratique ?", text: ["Oui, plus facile","Non","On ne sait pas"], textC: 0,
    img: ["facile","difficile","inconnu"], imgC: 0,
    fillQ: "Selon l'enregistrement, c'est plus _________.", fill: "facile"
  },
  {
    id: "ob5-q10", textQ: "Selon l'enregistrement, quand part-il ?", text: ["Cet été","Cet hiver","Au printemps"], textC: 0,
    img: ["été","hiver","printemps"], imgC: 0,
    fillQ: "Selon l'enregistrement, voyage cet _________.", fill: "été", fillA: ["ete"]
  }
]);

const OBJET_6 = buildPool("base", "objet-6", [
  {
    id: "ob6-q1", textQ: "Selon l'enregistrement, quels matériaux faut-il ?", text: ["Scotch et papiers colorés","Peinture et pinceaux","Ciseaux seulement"], textC: 0,
    img: ["scotch/papier","peinture","ciseaux"], imgC: 0,
    fillQ: "Selon l'enregistrement, du Scotch et des papiers _________.", fill: "colorés", fillA: ["colores"]
  },
  {
    id: "ob6-q2", textQ: "Selon l'enregistrement, quelle est la première étape ?", text: ["Découper les formes","Coller","Colorier"], textC: 0,
    img: ["découper","coller","colorier"], imgC: 0,
    fillQ: "Selon l'enregistrement, commencer par _________ les formes.", fill: "découper", fillA: ["decouper"]
  },
  {
    id: "ob6-q3", textQ: "Selon l'enregistrement, sur quoi coller ?", text: ["Sur du papier blanc","Sur le mur","Sur du carton"], textC: 0,
    img: ["papier blanc","mur","carton"], imgC: 0,
    fillQ: "Selon l'enregistrement, coller sur du papier _________.", fill: "blanc"
  },
  {
    id: "ob6-q4", textQ: "Selon l'enregistrement, avec quoi colorier ?", text: ["Crayons de couleur ou feutres","Peinture","Stylos"], textC: 0,
    img: ["crayons/feutres","peinture","stylos"], imgC: 0,
    fillQ: "Selon l'enregistrement, crayons de couleur ou _________.", fill: "feutres"
  },
  {
    id: "ob6-q5", textQ: "Selon l'enregistrement, qui adore cette activité ?", text: ["Les enfants","Les adultes","Personne"], textC: 0,
    img: ["enfants","adultes","personne"], imgC: 0,
    fillQ: "Selon l'enregistrement, les enfants adorent faire _________.", fill: "ça", fillA: ["ca"]
  },
  {
    id: "ob6-q6", textQ: "Selon l'enregistrement, que faire des vides ?", text: ["Les colorier","Les couper","Les jeter"], textC: 0,
    img: ["colorier","couper","jeter"], imgC: 0,
    fillQ: "Selon l'enregistrement, les laisser _________.", fill: "colorier"
  },
  {
    id: "ob6-q7", textQ: "Selon l'enregistrement, quel type d'activité ?", text: ["Activité créative","Sport","Lecture"], textC: 0,
    img: ["créative","sport","lecture"], imgC: 0,
    fillQ: "Selon l'enregistrement, activité _________.", fill: "créative", fillA: ["creative"]
  },
  {
    id: "ob6-q8", textQ: "Selon l'enregistrement, faut-il du Scotch ?", text: ["Oui","Non","De la colle seulement"], textC: 0,
    img: ["oui","non","colle"], imgC: 0,
    fillQ: "Selon l'enregistrement, il nous faut du _________.", fill: "Scotch", fillA: ["scotch"]
  },
  {
    id: "ob6-q9", textQ: "Selon l'enregistrement, dans quel ordre : découper puis ?", text: ["Coller","Colorier d'abord","Ranger"], textC: 0,
    img: ["coller","colorier","ranger"], imgC: 0,
    fillQ: "Selon l'enregistrement, puis nous les _________.", fill: "collons", fillA: ["coller"]
  },
  {
    id: "ob6-q10", textQ: "Selon l'enregistrement, les papiers sont-ils colorés ?", text: ["Oui","Non, blancs","Transparents"], textC: 0,
    img: ["colorés","blancs","transparents"], imgC: 0,
    fillQ: "Selon l'enregistrement, papiers _________.", fill: "colorés", fillA: ["colores"]
  }
]);

const OBJET_7 = buildPool("base", "objet-7", [
  {
    id: "ob7-q1", textQ: "Selon l'enregistrement, qu'a-t-elle préparé ?", text: ["Un gâteau, une salade de fruits et un poulet","Une pizza","Des pâtes"], textC: 0,
    img: ["gâteau/poulet","pizza","pâtes"], imgC: 0,
    fillQ: "Selon l'enregistrement, un gâteau et un poulet _________.", fill: "rôti", fillA: ["roti"]
  },
  {
    id: "ob7-q2", textQ: "Selon l'enregistrement, quels légumes manquent ?", text: ["Carottes et pommes de terre","Tomates","Haricots"], textC: 0,
    img: ["carottes/pommes","tomates","haricots"], imgC: 0,
    fillQ: "Selon l'enregistrement, carottes et pommes de _________.", fill: "terre"
  },
  {
    id: "ob7-q3", textQ: "Selon l'enregistrement, pour qui une salade spéciale ?", text: ["Pour une amie","Pour elle","Pour tout le monde"], textC: 0,
    img: ["amie","elle","tous"], imgC: 0,
    fillQ: "Selon l'enregistrement, une salade pour une _________.", fill: "amie"
  },
  {
    id: "ob7-q4", textQ: "Selon l'enregistrement, pourquoi la salade spéciale ?", text: ["Pour se faire pardonner","Parce qu'elle est malade","Pour un régime"], textC: 0,
    img: ["pardonner","malade","régime"], imgC: 0,
    fillQ: "Selon l'enregistrement, pour me faire _________.", fill: "pardonner"
  },
  {
    id: "ob7-q5", textQ: "Selon l'enregistrement, l'ami aime quoi ?", text: ["Les légumes","La viande","Le poisson"], textC: 0,
    img: ["légumes","viande","poisson"], imgC: 0,
    fillQ: "Selon l'enregistrement, elle aime les _________.", fill: "légumes", fillA: ["legumes"]
  },
  {
    id: "ob7-q6", textQ: "Selon l'enregistrement, y a-t-il un dessert ?", text: ["Oui, gâteau et salade de fruits","Non","Seulement des fruits"], textC: 0,
    img: ["gâteau/fruits","non","fruits"], imgC: 0,
    fillQ: "Selon l'enregistrement, gâteau et salade de _________.", fill: "fruits"
  },
  {
    id: "ob7-q7", textQ: "Selon l'enregistrement, avait-elle des carottes ?", text: ["Non, pas à la maison","Oui","Elles sont au marché"], textC: 0,
    img: ["non","oui","marché"], imgC: 0,
    fillQ: "Selon l'enregistrement, je n'en ai pas à la _________.", fill: "maison"
  },
  {
    id: "ob7-q8", textQ: "Selon l'enregistrement, quel plat principal ?", text: ["Poulet rôti","Poisson","Steak"], textC: 0,
    img: ["poulet","poisson","steak"], imgC: 0,
    fillQ: "Selon l'enregistrement, un poulet _________.", fill: "rôti", fillA: ["roti"]
  },
  {
    id: "ob7-q9", textQ: "Selon l'enregistrement, le repas est pour quand ?", text: ["Ce soir","Demain midi","Hier"], textC: 0,
    img: ["soir","midi","hier"], imgC: 0,
    fillQ: "Selon l'enregistrement, repas de ce _________.", fill: "soir"
  },
  {
    id: "ob7-q10", textQ: "Selon l'enregistrement, combien de plats principaux ?", text: ["Poulet plus accompagnements","Un seul","Trois viandes"], textC: 0,
    img: ["poulet","un","trois"], imgC: 0,
    fillQ: "Selon l'enregistrement, un poulet rôti et une _________.", fill: "salade"
  }
]);

const OBJET_8 = buildPool("base", "objet-8", [
  {
    id: "ob8-q1", textQ: "Selon l'enregistrement, quel est son problème ?", text: ["Mal au dos","Mal à la tête","Mal aux dents"], textC: 0,
    img: ["dos","tête","dents"], imgC: 0,
    fillQ: "Selon l'enregistrement, mal au _________.", fill: "dos"
  },
  {
    id: "ob8-q2", textQ: "Selon l'enregistrement, que veut-il changer ?", text: ["Sa chaise de bureau","Son ordinateur","Son bureau"], textC: 0,
    img: ["chaise","ordinateur","bureau"], imgC: 0,
    fillQ: "Selon l'enregistrement, changer de chaise de _________.", fill: "bureau"
  },
  {
    id: "ob8-q3", textQ: "Selon l'enregistrement, pourquoi changer la chaise ?", text: ["Elle est ancienne","Elle est cassée","Elle est trop petite"], textC: 0,
    img: ["ancienne","cassée","petite"], imgC: 0,
    fillQ: "Selon l'enregistrement, la mienne est _________.", fill: "ancienne"
  },
  {
    id: "ob8-q4", textQ: "Selon l'enregistrement, que lui a donné le médecin ?", text: ["Des médicaments","Un certificat","Un rendez-vous"], textC: 0,
    img: ["médicaments","certificat","RDV"], imgC: 0,
    fillQ: "Selon l'enregistrement, des _________ pour calmer les douleurs.", fill: "médicaments", fillA: ["medicaments"]
  },
  {
    id: "ob8-q5", textQ: "Selon l'enregistrement, sent-il une amélioration ?", text: ["Non","Oui","Un peu"], textC: 0,
    img: ["non","oui","un peu"], imgC: 0,
    fillQ: "Selon l'enregistrement, je ne sens pas d'_________.", fill: "amélioration", fillA: ["amelioration"]
  },
  {
    id: "ob8-q6", textQ: "Selon l'enregistrement, pourquoi pas d'amélioration ?", text: ["Il travaille assis tout le temps","Il ne prend pas les médicaments","Il fait du sport"], textC: 0,
    img: ["assis","pas médicaments","sport"], imgC: 0,
    fillQ: "Selon l'enregistrement, je travaille tout le temps _________.", fill: "assise", fillA: ["assis"]
  },
  {
    id: "ob8-q7", textQ: "Selon l'enregistrement, devant quoi travaille-t-il ?", text: ["Un ordinateur","Une télévision","Un livre"], textC: 0,
    img: ["ordinateur","télé","livre"], imgC: 0,
    fillQ: "Selon l'enregistrement, devant mon _________.", fill: "ordinateur"
  },
  {
    id: "ob8-q8", textQ: "Selon l'enregistrement, la cause du mal de dos ?", text: ["Son travail","Un accident","Le sport"], textC: 0,
    img: ["travail","accident","sport"], imgC: 0,
    fillQ: "Selon l'enregistrement, à cause de mon _________.", fill: "travail"
  },
  {
    id: "ob8-q9", textQ: "Selon l'enregistrement, quand changer la chaise ?", text: ["Cette semaine","L'année prochaine","Demain"], textC: 0,
    img: ["cette semaine","année prochaine","demain"], imgC: 0,
    fillQ: "Selon l'enregistrement, changer cette _________.", fill: "semaine"
  },
  {
    id: "ob8-q10", textQ: "Selon l'enregistrement, les médicaments calment-ils les douleurs ?", text: ["Ils sont censés le faire","Non","On ne sait pas"], textC: 0,
    img: ["oui","non","inconnu"], imgC: 0,
    fillQ: "Selon l'enregistrement, pour calmer les _________.", fill: "douleurs"
  }
]);

const OBJET_9 = buildPool("base", "objet-9", [
  {
    id: "ob9-q1", textQ: "Selon l'enregistrement, quel événement ?", text: ["Un mariage","Un anniversaire","Une fête"], textC: 0,
    img: ["mariage","anniversaire","fête"], imgC: 0,
    fillQ: "Selon l'enregistrement, pour le _________ de deux personnes.", fill: "mariage"
  },
  {
    id: "ob9-q2", textQ: "Selon l'enregistrement, quelle couleur de fleurs ?", text: ["Blanches","Rouges","Jaunes"], textC: 0,
    img: ["blanches","rouges","jaunes"], imgC: 0,
    fillQ: "Selon l'enregistrement, fleurs _________.", fill: "blanches"
  },
  {
    id: "ob9-q3", textQ: "Selon l'enregistrement, quel dessert ?", text: ["Gâteau à la vanille","Chocolat","Fruits"], textC: 0,
    img: ["vanille","chocolat","fruits"], imgC: 0,
    fillQ: "Selon l'enregistrement, gâteau à la _________ de Madagascar.", fill: "vanille"
  },
  {
    id: "ob9-q4", textQ: "Selon l'enregistrement, quel type de voiture ?", text: ["Une grande voiture blanche","Une petite voiture rouge","Un bus"], textC: 0,
    img: ["grande blanche","petite rouge","bus"], imgC: 0,
    fillQ: "Selon l'enregistrement, très grande voiture _________.", fill: "blanche"
  },
  {
    id: "ob9-q5", textQ: "Selon l'enregistrement, quel tissu sur les chaises ?", text: ["De la soie","Du coton","De la laine"], textC: 0,
    img: ["soie","coton","laine"], imgC: 0,
    fillQ: "Selon l'enregistrement, draps en _________.", fill: "soie"
  },
  {
    id: "ob9-q6", textQ: "Selon l'enregistrement, que met-on sur les chaises ?", text: ["Des plumes","Des fleurs","Des rubans"], textC: 0,
    img: ["plumes","fleurs","rubans"], imgC: 0,
    fillQ: "Selon l'enregistrement, des _________ sur les chaises.", fill: "plumes"
  },
  {
    id: "ob9-q7", textQ: "Selon l'enregistrement, comment sera le décor ?", text: ["Féerique","Simple","Sombre"], textC: 0,
    img: ["féerique","simple","sombre"], imgC: 0,
    fillQ: "Selon l'enregistrement, le décor va être _________.", fill: "féerique", fillA: ["feerique"]
  },
  {
    id: "ob9-q8", textQ: "Selon l'enregistrement, où se sont-ils rencontrés ?", text: ["Sur une île","À l'école","Au travail"], textC: 0,
    img: ["île","école","travail"], imgC: 0,
    fillQ: "Selon l'enregistrement, ils se sont rencontrés sur une _________.", fill: "île", fillA: ["ile"]
  },
  {
    id: "ob9-q9", textQ: "Selon l'enregistrement, met-on des fleurs partout ?", text: ["Oui","Non","Seulement dehors"], textC: 0,
    img: ["oui","non","dehors"], imgC: 0,
    fillQ: "Selon l'enregistrement, des fleurs blanches _________.", fill: "partout"
  },
  {
    id: "ob9-q10", textQ: "Selon l'enregistrement, le gâteau est à quelle saveur ?", text: ["Vanille","Chocolat","Fraise"], textC: 0,
    img: ["vanille","chocolat","fraise"], imgC: 0,
    fillQ: "Selon l'enregistrement, gâteau à la _________.", fill: "vanille"
  }
]);

const OBJET_10 = buildPool("base", "objet-10", [
  {
    id: "ob10-q1", textQ: "Selon l'enregistrement, que demande la maîtresse ?", text: ["Un cahier de souvenirs","Un exposé oral","Un dessin"], textC: 0,
    img: ["cahier","exposé","dessin"], imgC: 0,
    fillQ: "Selon l'enregistrement, fabriquer un cahier de _________.", fill: "souvenirs"
  },
  {
    id: "ob10-q2", textQ: "Selon l'enregistrement, avec quoi a-t-il fait le carnet ?", text: ["Feuilles vieilles et corde","Carton neuf","Agrafes"], textC: 0,
    img: ["feuilles/corde","carton","agrafes"], imgC: 0,
    fillQ: "Selon l'enregistrement, feuilles vieilles et de la _________.", fill: "corde"
  },
  {
    id: "ob10-q3", textQ: "Selon l'enregistrement, que demandera aux amis ?", text: ["D'écrire dedans","De le décorer","De le vendre"], textC: 0,
    img: ["écrire","décorer","vendre"], imgC: 0,
    fillQ: "Selon l'enregistrement, de m'écrire quelque chose _________.", fill: "dedans"
  },
  {
    id: "ob10-q4", textQ: "Selon l'enregistrement, quel stylo pour les amis ?", text: ["Un stylo-plume","Un crayon","Un feutre"], textC: 0,
    img: ["stylo-plume","crayon","feutre"], imgC: 0,
    fillQ: "Selon l'enregistrement, acheter un _________-plume.", fill: "stylo"
  },
  {
    id: "ob10-q5", textQ: "Selon l'enregistrement, pour quel cours ?", text: ["Un exposé","Les maths","Le sport"], textC: 0,
    img: ["exposé","maths","sport"], imgC: 0,
    fillQ: "Selon l'enregistrement, pour l'_________.", fill: "exposé", fillA: ["expose"]
  },
  {
    id: "ob10-q6", textQ: "Selon l'enregistrement, le carnet est-il neuf ?", text: ["Non, feuilles vieilles","Oui","En plastique"], textC: 0,
    img: ["vieilles feuilles","neuf","plastique"], imgC: 0,
    fillQ: "Selon l'enregistrement, feuilles _________.", fill: "vieilles"
  },
  {
    id: "ob10-q7", textQ: "Selon l'enregistrement, tous écriront avec le même stylo ?", text: ["Oui","Non","Chacun le sien"], textC: 0,
    img: ["oui","non","chacun"], imgC: 0,
    fillQ: "Selon l'enregistrement, écrivent tous avec _________.", fill: "lui", fillA: ["ce stylo"]
  },
  {
    id: "ob10-q8", textQ: "Selon l'enregistrement, qui écrira dans le carnet ?", text: ["Ses amis","Ses parents","La maîtresse"], textC: 0,
    img: ["amis","parents","maîtresse"], imgC: 0,
    fillQ: "Selon l'enregistrement, tous mes _________.", fill: "amis"
  },
  {
    id: "ob10-q9", textQ: "Selon l'enregistrement, le projet est-il déjà commencé ?", text: ["Oui, carnet préparé","Non","Presque fini"], textC: 0,
    img: ["commencé","non","fini"], imgC: 0,
    fillQ: "Selon l'enregistrement, j'ai préparé un _________.", fill: "carnet"
  },
  {
    id: "ob10-q10", textQ: "Selon l'enregistrement, achètera-t-il un stylo spécial ?", text: ["Oui","Non","Il en a déjà un"], textC: 0,
    img: ["oui","non","déjà"], imgC: 0,
    fillQ: "Selon l'enregistrement, je vais acheter un stylo-_________.", fill: "plume"
  }
]);

const OBJET_11 = buildPool("base", "objet-11", [
  {
    id: "ob11-q1", textQ: "Selon l'enregistrement, quel événement ?", text: ["Un anniversaire","Un mariage","Une fête de fin d'année"], textC: 0,
    img: ["anniversaire","mariage","fête"], imgC: 0,
    fillQ: "Selon l'enregistrement, un _________ a lieu bientôt.", fill: "anniversaire"
  },
  {
    id: "ob11-q2", textQ: "Selon l'enregistrement, qui prépare les pizzas ?", text: ["La personne qui parle","Un ami","Tout le monde"], textC: 0,
    img: ["moi","ami","tous"], imgC: 0,
    fillQ: "Selon l'enregistrement, je prépare des _________.", fill: "pizzas"
  },
  {
    id: "ob11-q3", textQ: "Selon l'enregistrement, qui s'occupe du gâteau ?", text: ["Un ami","Elle","Sa sœur"], textC: 0,
    img: ["ami","elle","sœur"], imgC: 0,
    fillQ: "Selon l'enregistrement, quelqu'un s'occupe du _________.", fill: "gâteau", fillA: ["gateau"]
  },
  {
    id: "ob11-q4", textQ: "Selon l'enregistrement, qu'apportent les autres ?", text: ["Cacahuètes et chips","Boissons","Musique"], textC: 0,
    img: ["cacahuètes/chips","boissons","musique"], imgC: 0,
    fillQ: "Selon l'enregistrement, cacahuètes et _________.", fill: "chips"
  },
  {
    id: "ob11-q5", textQ: "Selon l'enregistrement, que doit apporter l'invité ?", text: ["Les boissons","Le gâteau","Les pizzas"], textC: 0,
    img: ["boissons","gâteau","pizzas"], imgC: 0,
    fillQ: "Selon l'enregistrement, tu peux ramener les _________.", fill: "boissons"
  },
  {
    id: "ob11-q6", textQ: "Selon l'enregistrement, peut-on amener quelqu'un ?", text: ["Oui, sa copine","Non","Seulement la famille"], textC: 0,
    img: ["oui","non","famille"], imgC: 0,
    fillQ: "Selon l'enregistrement, tu peux ramener ta _________.", fill: "copine"
  },
  {
    id: "ob11-q7", textQ: "Selon l'enregistrement, quand est l'anniversaire ?", text: ["Samedi prochain","Demain","Ce soir"], textC: 0,
    img: ["dans 6 jours","demain","soir"], imgC: 0,
    fillQ: "Selon l'enregistrement, _________ prochain.", fill: "samedi"
  },
  {
    id: "ob11-q8", textQ: "Selon l'enregistrement, combien de personnes préparent ?", text: ["Plusieurs","Une seule","Personne"], textC: 0,
    img: ["plusieurs","une","personne"], imgC: 0,
    fillQ: "Selon l'enregistrement, chacun apporte quelque _________.", fill: "chose"
  },
  {
    id: "ob11-q9", textQ: "Selon l'enregistrement, est-ce mieux à plusieurs ?", text: ["Oui","Non","Peu importe"], textC: 0,
    img: ["oui","non","peu importe"], imgC: 0,
    fillQ: "Selon l'enregistrement, mieux d'être à plusieurs pour s'_________.", fill: "amuser"
  },
  {
    id: "ob11-q10", textQ: "Selon l'enregistrement, que ramènent les amies ?", text: ["Cacahuètes et chips","Boissons","Pizzas"], textC: 0,
    img: ["cacahuètes","boissons","pizzas"], imgC: 0,
    fillQ: "Selon l'enregistrement, ramener cacahuètes et _________.", fill: "chips"
  }
]);

const OBJET_12 = buildPool("base", "objet-12", [
  {
    id: "ob12-q1", textQ: "Selon l'enregistrement, pour qui est le cadeau ?", text: ["Pour une remise de diplômes","Pour un anniversaire","Pour Noël"], textC: 0,
    img: ["diplômes","anniversaire","fêtes"], imgC: 0,
    fillQ: "Selon l'enregistrement, remise des _________.", fill: "diplômes", fillA: ["diplomes"]
  },
  {
    id: "ob12-q2", textQ: "Selon l'enregistrement, quel cadeau ?", text: ["Une activité de saut à l'élastique","Un livre","Un vélo"], textC: 0,
    img: ["élastique","livre","vélo"], imgC: 0,
    fillQ: "Selon l'enregistrement, saut à l'_________.", fill: "élastique"
  },
  {
    id: "ob12-q3", textQ: "Selon l'enregistrement, aime-t-il les sensations fortes ?", text: ["Oui","Non","On ne sait pas"], textC: 0,
    img: ["oui","non","inconnu"], imgC: 0,
    fillQ: "Selon l'enregistrement, il aime les sensations _________.", fill: "fortes"
  },
  {
    id: "ob12-q4", textQ: "Selon l'enregistrement, à quelle heure ?", text: ["17 h","14 h","20 h"], textC: 0,
    img: ["17 h","14 h","20 h"], imgC: 0,
    fillQ: "Selon l'enregistrement, à _________ heures.", fill: "17", fillA: ["dix-sept"]
  },
  {
    id: "ob12-q5", textQ: "Selon l'enregistrement, que faut-il apporter à manger ?", text: ["Un pique-nique","Un gâteau","Rien"], textC: 0,
    img: ["pique-nique","gâteau","rien"], imgC: 0,
    fillQ: "Selon l'enregistrement, apporter un _________.", fill: "pique-nique", fillA: ["pique nique"]
  },
  {
    id: "ob12-q6", textQ: "Selon l'enregistrement, où dîner ?", text: ["Sous le pont","Au restaurant","À la maison"], textC: 0,
    img: ["sous pont","restaurant","maison"], imgC: 0,
    fillQ: "Selon l'enregistrement, dîner sous le _________.", fill: "pont"
  },
  {
    id: "ob12-q7", textQ: "Selon l'enregistrement, invite-t-on à participer ?", text: ["Oui","Non","C'est obligatoire"], textC: 0,
    img: ["oui","non","obligatoire"], imgC: 0,
    fillQ: "Selon l'enregistrement, veux-tu _________ ?", fill: "participer"
  },
  {
    id: "ob12-q8", textQ: "Selon l'enregistrement, l'activité est-elle adaptée à ses goûts ?", text: ["Oui, il va adorer","Non","Peut-être"], textC: 0,
    img: ["adorer","non","peut-être"], imgC: 0,
    fillQ: "Selon l'enregistrement, il va _________.", fill: "adorer"
  },
  {
    id: "ob12-q9", textQ: "Selon l'enregistrement, où a lieu l'activité ?", text: ["Au viaduc","Au parc","À la piscine"], textC: 0,
    img: ["viaduc","parc","piscine"], imgC: 0,
    fillQ: "Selon l'enregistrement, ce sera au _________.", fill: "viaduc"
  },
  {
    id: "ob12-q10", textQ: "Selon l'enregistrement, faut-il prévoir le repas ?", text: ["Oui, pique-nique","Non","On commande"], textC: 0,
    img: ["pique-nique","non","commande"], imgC: 0,
    fillQ: "Selon l'enregistrement, il faut apporter un pique-_________.", fill: "nique"
  }
]);
export const CO_QUESTION_POOLS_BASE_OTHER: Record<string, COMultiQuestion[]> = {
  "base-annonce-1": ANNONCE_1,
  "base-annonce-2": ANNONCE_2,
  "base-annonce-3": ANNONCE_3,
  "base-annonce-4": ANNONCE_4,
  "base-annonce-5": ANNONCE_5,
  "base-annonce-6": ANNONCE_6,
  "base-annonce-7": ANNONCE_7,
  "base-annonce-8": ANNONCE_8,
  "base-annonce-9": ANNONCE_9,
  "base-annonce-10": ANNONCE_10,
  "base-annonce-11": ANNONCE_11,
  "base-annonce-12": ANNONCE_12,
  "base-annonce-13": ANNONCE_13,
  "base-annonce-14": ANNONCE_14,
  "base-annonce-16": ANNONCE_16,
  "base-annonce-17": ANNONCE_17,
  "base-instruction-1": INSTRUCTION_1,
  "base-instruction-2": INSTRUCTION_2,
  "base-instruction-3": INSTRUCTION_3,
  "base-instruction-4": INSTRUCTION_4,
  "base-instruction-5": INSTRUCTION_5,
  "base-conversation-1": CONVERSATION_1,
  "base-conversation-2": CONVERSATION_2,
  "base-conversation-3": CONVERSATION_3,
  "base-conversation-4": CONVERSATION_4,
  "base-conversation-5": CONVERSATION_5,
  "base-conversation-6": CONVERSATION_6,
  "base-conversation-7": CONVERSATION_7,
  "base-conversation-8": CONVERSATION_8,
  "base-objet-1": OBJET_1,
  "base-objet-2": OBJET_2,
  "base-objet-3": OBJET_3,
  "base-objet-4": OBJET_4,
  "base-objet-5": OBJET_5,
  "base-objet-6": OBJET_6,
  "base-objet-7": OBJET_7,
  "base-objet-8": OBJET_8,
  "base-objet-9": OBJET_9,
  "base-objet-10": OBJET_10,
  "base-objet-11": OBJET_11,
  "base-objet-12": OBJET_12,
};
