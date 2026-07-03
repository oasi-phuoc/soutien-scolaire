import { buildPool, type COMultiQuestion } from "./co-questions-helpers";

const MESSAGE_26 = buildPool("moyen", "message-26", [
  {
    id: "m26-q1", textQ: "Qui laisse ce message ?", text: ["Lucie","Max","Thomas"], textC: 0,
    img: ["Lucie","Max","Thomas"], imgC: 0,
    fillQ: "C'est _________ qui laisse le message.", fill: "Lucie",
    fillA: ["lucie"],
  },
  {
    id: "m26-q2", textQ: "Combien de temps part-elle en vacances ?", text: ["Une semaine","Deux semaines","Un mois"], textC: 1,
    img: ["1 semaine","2 semaines","1 mois"], imgC: 1,
    fillQ: "Lucie part en vacances _________.", fill: "deux semaines",
    fillA: ["2 semaines"],
  },
  {
    id: "m26-q3", textQ: "À quelle heure faut-il venir nourrir le chat ?", text: ["À 8 h","À 9 h","À 10 h"], textC: 1,
    img: ["8 h","9 h","10 h"], imgC: 1,
    fillQ: "Il faut venir chaque jour à ___ h.", fill: "9",
    fillA: ["9h"],
  },
  {
    id: "m26-q4", textQ: "Qu'est-ce qu'il ne faut surtout pas donner au chat ?", text: ["De la pâtée","Du lait","Des croquettes"], textC: 1,
    img: ["Pâtée","Lait","Croquettes"], imgC: 1,
    fillQ: "Il ne faut surtout pas lui donner de _______.", fill: "lait"
  },
  {
    id: "m26-q5", textQ: "Quel est le code de l'immeuble ?", text: ["6991","6990","6919"], textC: 0,
    img: ["6991","6990","6919"], imgC: 0,
    fillQ: "Le code de l'immeuble est _________.", fill: "6991"
  },
  {
    id: "m26-q6", textQ: "À quel étage habite Lucie ?", text: ["Au 1er étage","Au 2ème étage","Au 3ème étage"], textC: 1,
    img: ["1er","2ème","3ème"], imgC: 1,
    fillQ: "L'appartement est au _________ étage.", fill: "2ème",
    fillA: ["2e","deuxième"],
  }
]);

const MESSAGE_27 = buildPool("moyen", "message-27", [
  {
    id: "m27-q1", textQ: "Qui laisse ce message ?", text: ["Max","Lucie","Thomas"], textC: 0,
    img: ["Max","Lucie","Thomas"], imgC: 0,
    fillQ: "C'est _________ qui appelle.", fill: "Max",
    fillA: ["max"],
  },
  {
    id: "m27-q2", textQ: "Quelle est la date du concert ?", text: ["Samedi 18 juin","Samedi 18 juillet","Dimanche 18 juin"], textC: 0,
    img: ["18 juin","18 juil.","Dim. 18"], imgC: 0,
    fillQ: "Le concert a lieu le samedi ___ juin.", fill: "18"
  },
  {
    id: "m27-q3", textQ: "À quelle heure commence le concert ?", text: ["À 19 h 30","À 21 h","À 22 h 30"], textC: 1,
    img: ["19h30","21h","22h30"], imgC: 1,
    fillQ: "Le concert commence à ___ h.", fill: "21",
    fillA: ["21h"],
  },
  {
    id: "m27-q4", textQ: "Qui invite à manger ?", text: ["Max","Son ami","Personne"], textC: 0,
    img: ["Max","L'ami","Personne"], imgC: 0,
    fillQ: "C'est _________ qui invite à manger.", fill: "Max",
    fillA: ["max"],
  },
  {
    id: "m27-q5", textQ: "Quel moyen de transport faut-il prendre ?", text: ["Le bus","Le métro","Le tramway"], textC: 1,
    img: ["Bus","Métro","Tram"], imgC: 1,
    fillQ: "Il faudra prendre le _________.", fill: "métro",
    fillA: ["metro"],
  },
  {
    id: "m27-q6", textQ: "Où habite Max ?", text: ["152 avenue du Président","152 rue du Président","125 avenue du Président"], textC: 0,
    img: ["Av. Président 152","Rue Président 152","Av. Président 125"], imgC: 0,
    fillQ: "Max habite au ___ avenue du Président.", fill: "152"
  }
]);

const MESSAGE_28 = buildPool("moyen", "message-28", [
  {
    id: "m28-q1", textQ: "Qui appelle ?", text: ["Le cabinet dentaire du Dr Molaire","Le Dr Robichet","Formation ABC"], textC: 0,
    img: ["Cabinet dentaire","Dr Robichet","Formation ABC"], imgC: 0,
    fillQ: "L'appel vient du cabinet du Dr _________.", fill: "Molaire",
    fillA: ["molaire"],
  },
  {
    id: "m28-q2", textQ: "Qu'arrive-t-il au rendez-vous de 15h30 ?", text: ["Il est confirmé","Il est annulé","Il est décalé à 16h30"], textC: 1,
    img: ["Confirmé","Annulé","Décalé 16h30"], imgC: 1,
    fillQ: "Le rendez-vous de 15h30 est _________.", fill: "annulé",
    fillA: ["annule"],
  },
  {
    id: "m28-q3", textQ: "Pourquoi le rendez-vous est-il annulé ?", text: ["Le docteur est souffrant","Le patient est malade","Le cabinet est fermé"], textC: 0,
    img: ["Docteur malade","Patient malade","Cabinet fermé"], imgC: 0,
    fillQ: "Le docteur est _________.", fill: "souffrant"
  },
  {
    id: "m28-q4", textQ: "Quel créneau est proposé le jeudi 14 ?", text: ["À 11h15","À 15h30","À 16h"], textC: 0,
    img: ["11h15","15h30","16h"], imgC: 0,
    fillQ: "Jeudi 14, une place est disponible à ___ h 15.", fill: "11"
  },
  {
    id: "m28-q5", textQ: "Quel créneau est proposé le vendredi 15 ?", text: ["À 11h15","À 15h30","À 16h"], textC: 1,
    img: ["11h15","15h30","16h"], imgC: 1,
    fillQ: "Vendredi 15, une place est disponible à ___ h 30.", fill: "15"
  },
  {
    id: "m28-q6", textQ: "Qu'est-ce qu'il ne faut pas oublier ?", text: ["Sa carte d'assurance maladie","Sa pièce d'identité","Son ordonnance"], textC: 0,
    img: ["Carte assurance","Pièce d'identité","Ordonnance"], imgC: 0,
    fillQ: "N'oubliez pas votre carte d'_________ maladie.", fill: "assurance"
  }
]);

const MESSAGE_29 = buildPool("moyen", "message-29", [
  {
    id: "m29-q1", textQ: "Qui appelle ?", text: ["Jérôme de Formation ABC","Le marché de Rungis","L'hôtel Beaulieu"], textC: 0,
    img: ["Formation ABC","Rungis","Hôtel Beaulieu"], imgC: 0,
    fillQ: "C'est _________ de Formation ABC qui appelle.", fill: "Jérôme",
    fillA: ["jerome"],
  },
  {
    id: "m29-q2", textQ: "Combien de jours dure la formation ?", text: ["2 jours","4 jours","5 jours"], textC: 1,
    img: ["2 jours","4 jours","5 jours"], imgC: 1,
    fillQ: "La formation dure ___ jours.", fill: "4"
  },
  {
    id: "m29-q3", textQ: "À quelle heure commence la formation le matin ?", text: ["À 8 h","À 9 h","À 10 h"], textC: 1,
    img: ["8h","9h","10h"], imgC: 1,
    fillQ: "Le matin, la formation est de ___ h à midi.", fill: "9"
  },
  {
    id: "m29-q4", textQ: "Comment peut-on payer ?", text: ["Par carte bancaire sur Internet ou à l'accueil","Uniquement en espèces","Par chèque uniquement"], textC: 0,
    img: ["Carte bancaire","Espèces","Chèque"], imgC: 0,
    fillQ: "On peut payer par _________ bancaire.", fill: "carte"
  },
  {
    id: "m29-q5", textQ: "Qu'est-ce qui sera donné le premier jour ?", text: ["Un stylo et du papier","Un ordinateur","Un livre"], textC: 0,
    img: ["Stylo et papier","Ordinateur","Livre"], imgC: 0,
    fillQ: "Le premier jour, on donnera un stylo et du _________.", fill: "papier"
  },
  {
    id: "m29-q6", textQ: "Quel est le numéro de téléphone ?", text: ["02 54 18 87 61","02 50 88 23 40","04 97 22 63 13"], textC: 0,
    img: ["02 54 18 87 61","02 50 88 23 40","04 97 22 63 13"], imgC: 0,
    fillQ: "Le numéro est le 02 54 18 ___ 61.", fill: "87"
  }
]);

const MESSAGE_30 = buildPool("moyen", "message-30", [
  {
    id: "m30-q1", textQ: "Qui appelle ?", text: ["Le service client du marché de Rungis","Formation ABC","L'agence Lacrosse"], textC: 0,
    img: ["Marché Rungis","Formation ABC","Agence Lacrosse"], imgC: 0,
    fillQ: "L'appel vient du marché de _________.", fill: "Rungis",
    fillA: ["rungis"],
  },
  {
    id: "m30-q2", textQ: "Quel produit n'est plus disponible ?", text: ["Le poisson","Les fraises","Les produits laitiers"], textC: 0,
    img: ["Poisson","Fraises","Laitiers"], imgC: 0,
    fillQ: "Ils n'ont plus de _________.", fill: "poisson"
  },
  {
    id: "m30-q3", textQ: "Qu'offrent-ils en compensation ?", text: ["2 paquets de fraises et myrtilles","Un bon de réduction","La livraison gratuite"], textC: 0,
    img: ["Fraises et myrtilles","Bon réduction","Livraison gratuite"], imgC: 0,
    fillQ: "Ils offrent 2 paquets de fraises et de _________.", fill: "myrtilles"
  },
  {
    id: "m30-q4", textQ: "Quand peut-on retirer le colis en semaine ?", text: ["De 8h à midi","De 13h à 18h","De 8h à 19h"], textC: 0,
    img: ["8h-midi","13h-18h","8h-19h"], imgC: 0,
    fillQ: "En semaine, le colis est à l'accueil de 8h à _______.", fill: "midi"
  },
  {
    id: "m30-q5", textQ: "Quel est le minimum d'achat pour la livraison gratuite le week-end ?", text: ["10 €","15 €","20 €"], textC: 1,
    img: ["10 €","15 €","20 €"], imgC: 1,
    fillQ: "Le week-end, la livraison est gratuite pour un minimum de ___ €.", fill: "15"
  },
  {
    id: "m30-q6", textQ: "Quel poids font les paquets offerts ?", text: ["250 g","500 g","1 kg"], textC: 1,
    img: ["250 g","500 g","1 kg"], imgC: 1,
    fillQ: "Les paquets font ___ g chacun.", fill: "500"
  }
]);

const MESSAGE_31 = buildPool("moyen", "message-31", [
  {
    id: "m31-q1", textQ: "Qui laisse ce message ?", text: ["Thomas","Elsa","Marianne"], textC: 0,
    img: ["Thomas","Elsa","Marianne"], imgC: 0,
    fillQ: "C'est _________ qui appelle.", fill: "Thomas",
    fillA: ["thomas"],
  },
  {
    id: "m31-q2", textQ: "Quelle matière concerne l'examen ?", text: ["Le portugais","L'espagnol","Le français"], textC: 0,
    img: ["Portugais","Espagnol","Français"], imgC: 0,
    fillQ: "L'examen est de _________.", fill: "portugais"
  },
  {
    id: "m31-q3", textQ: "À quelle heure aura lieu l'examen ?", text: ["À 9 h","À 10 h","À 11 h"], textC: 1,
    img: ["9h","10h","11h"], imgC: 1,
    fillQ: "L'examen est à ___ h.", fill: "10"
  },
  {
    id: "m31-q4", textQ: "Dans quelle salle aura-t-il lieu ?", text: ["Salle 10","Salle 12","Salle 14"], textC: 1,
    img: ["Salle 10","Salle 12","Salle 14"], imgC: 1,
    fillQ: "L'examen sera dans la salle numéro ___.", fill: "12"
  },
  {
    id: "m31-q5", textQ: "À quelle heure propose-t-il de se retrouver au café ?", text: ["À 7 h","À 8 h","À 9 h"], textC: 1,
    img: ["7h","8h","9h"], imgC: 1,
    fillQ: "Rendez-vous au café demain à ___ h.", fill: "8"
  },
  {
    id: "m31-q6", textQ: "À quel étage est la salle d'examen ?", text: ["Au premier étage","Au deuxième étage","Au troisième étage"], textC: 1,
    img: ["1er étage","2ème étage","3ème étage"], imgC: 1,
    fillQ: "La salle est au _________ étage.", fill: "deuxième",
    fillA: ["2ème","2e"],
  }
]);

const MESSAGE_32 = buildPool("moyen", "message-32", [
  {
    id: "m32-q1", textQ: "Qui laisse ce message ?", text: ["Marianne","Elsa","Lucie"], textC: 0,
    img: ["Marianne","Elsa","Lucie"], imgC: 0,
    fillQ: "C'est _________ qui appelle.", fill: "Marianne",
    fillA: ["marianne"],
  },
  {
    id: "m32-q2", textQ: "Qui faut-il aller chercher à l'école ?", text: ["Olga","Nicole","Fatima"], textC: 0,
    img: ["Olga","Nicole","Fatima"], imgC: 0,
    fillQ: "Il faut aller chercher _________.", fill: "Olga",
    fillA: ["olga"],
  },
  {
    id: "m32-q3", textQ: "À quelle heure sort-elle de l'école ?", text: ["À 16 h","À 16 h 30","À 17 h"], textC: 1,
    img: ["16h","16h30","17h"], imgC: 1,
    fillQ: "Olga sort de l'école à ___ h 30.", fill: "16"
  },
  {
    id: "m32-q4", textQ: "À quelle heure a-t-elle son cours de danse ?", text: ["À 17 h","À 17 h 30","À 19 h"], textC: 1,
    img: ["17h","17h30","19h"], imgC: 1,
    fillQ: "Le cours de danse est à ___ h 30.", fill: "17"
  },
  {
    id: "m32-q5", textQ: "À quelle heure Marianne viendra la chercher ?", text: ["Vers 17 h","Vers 18 h","Vers 19 h"], textC: 2,
    img: ["17h","18h","19h"], imgC: 2,
    fillQ: "Marianne viendra la chercher vers ___ h.", fill: "19"
  },
  {
    id: "m32-q6", textQ: "Quel est le numéro de téléphone de Marianne ?", text: ["06 77 89 20 12","06 79 14 78 49","07 74 12 29 30"], textC: 0,
    img: ["06 77 89 20 12","06 79 14 78 49","07 74 12 29 30"], imgC: 0,
    fillQ: "Son numéro est le 06 77 89 ___ 12.", fill: "20"
  }
]);

const MESSAGE_33 = buildPool("moyen", "message-33", [
  {
    id: "m33-q1", textQ: "Qui laisse ce message ?", text: ["Elsa","Nicole","Amir"], textC: 0,
    img: ["Elsa","Nicole","Amir"], imgC: 0,
    fillQ: "C'est _________ qui appelle.", fill: "Elsa",
    fillA: ["elsa"],
  },
  {
    id: "m33-q2", textQ: "Quel sport propose-t-elle ?", text: ["Le tennis","Le football","La natation"], textC: 0,
    img: ["Tennis","Football","Natation"], imgC: 0,
    fillQ: "Elle propose de jouer au _________.", fill: "tennis"
  },
  {
    id: "m33-q3", textQ: "Qui va faire une salade ?", text: ["Nicole","Amir","Elsa"], textC: 0,
    img: ["Nicole","Amir","Elsa"], imgC: 0,
    fillQ: "_________ va faire une salade.", fill: "Nicole",
    fillA: ["nicole"],
  },
  {
    id: "m33-q4", textQ: "Qui propose de ramener des fruits ?", text: ["Amir","Nicole","Fatima"], textC: 0,
    img: ["Amir","Nicole","Fatima"], imgC: 0,
    fillQ: "_________ propose de ramener des fruits.", fill: "Amir",
    fillA: ["amir"],
  },
  {
    id: "m33-q5", textQ: "Qu'est-ce qu'Elsa pense préparer ?", text: ["Une tarte","Une salade","Des boissons"], textC: 0,
    img: ["Tarte","Salade","Boissons"], imgC: 0,
    fillQ: "Elsa pense faire une _________.", fill: "tarte"
  },
  {
    id: "m33-q6", textQ: "Avant quelle heure faut-il rappeler ?", text: ["Avant 16 h","Avant 17 h","Avant 18 h"], textC: 1,
    img: ["16h","17h","18h"], imgC: 1,
    fillQ: "Il faut rappeler avant ___ h.", fill: "17"
  }
]);

const MESSAGE_34 = buildPool("moyen", "message-34", [
  {
    id: "m34-q1", textQ: "Qui appelle ?", text: ["Madame Bouquin","Madame Lara","Madame Bouquin la directrice"], textC: 0,
    img: ["Mme Bouquin","Mme Lara","Directrice"], imgC: 0,
    fillQ: "C'est madame _________ qui appelle.", fill: "Bouquin",
    fillA: ["bouquin"],
  },
  {
    id: "m34-q2", textQ: "De quel auteur faut-il les livres ?", text: ["Marc Lévy","Jacques Hadji","Stendhal"], textC: 0,
    img: ["Marc Lévy","Jacques Hadji","Stendhal"], imgC: 0,
    fillQ: "Il faut 15 exemplaires du roman de Marc _________.", fill: "Lévy",
    fillA: ["Levy"],
  },
  {
    id: "m34-q3", textQ: "Combien d'exemplaires faut-il ?", text: ["10","15","20"], textC: 1,
    img: ["10","15","20"], imgC: 1,
    fillQ: "Il faut ___ exemplaires.", fill: "15"
  },
  {
    id: "m34-q4", textQ: "À quelle heure peut-elle recevoir jeudi matin ?", text: ["À 10 h","À 10 h 30","À 11 h"], textC: 1,
    img: ["10h","10h30","11h"], imgC: 1,
    fillQ: "Jeudi matin, rendez-vous à ___ h et demie.", fill: "10"
  },
  {
    id: "m34-q5", textQ: "Quand est l'autre créneau proposé ?", text: ["Jeudi matin","Vendredi entre 14h et 18h","Samedi matin"], textC: 1,
    img: ["Jeudi matin","Vendredi 14-18h","Samedi"], imgC: 1,
    fillQ: "L'autre créneau est le _________.", fill: "vendredi",
    fillA: ["vendredi entre 14h et 18h"],
  },
  {
    id: "m34-q6", textQ: "Quel est son numéro de téléphone ?", text: ["07 74 12 29 30","06 77 89 20 12","01 42 18 93 27"], textC: 0,
    img: ["07 74 12 29 30","06 77 89 20 12","01 42 18 93 27"], imgC: 0,
    fillQ: "Son numéro est le 07 74 12 ___ 30.", fill: "29"
  }
]);

const MESSAGE_35 = buildPool("moyen", "message-35", [
  {
    id: "m35-q1", textQ: "Qui appelle ?", text: ["L'hôtel Beaulieu","L'agence Lacrosse","La société FMAC"], textC: 0,
    img: ["Hôtel Beaulieu","Agence Lacrosse","FMAC"], imgC: 0,
    fillQ: "L'appel vient de l'hôtel _________.", fill: "Beaulieu",
    fillA: ["beaulieu"],
  },
  {
    id: "m35-q2", textQ: "Quel type de chambre est réservé ?", text: ["Chambre simple","Chambre double","Suite"], textC: 1,
    img: ["Simple","Double","Suite"], imgC: 1,
    fillQ: "La réservation est pour une chambre _________.", fill: "double"
  },
  {
    id: "m35-q3", textQ: "Le petit-déjeuner coûte combien ?", text: ["5 € 50","7 € 50","10 €"], textC: 1,
    img: ["5,50 €","7,50 €","10 €"], imgC: 1,
    fillQ: "Le petit-déjeuner coûte ___ euros 50.", fill: "7"
  },
  {
    id: "m35-q4", textQ: "Entre quelles heures faut-il s'enregistrer ?", text: ["Entre 11h et 14h","Entre 13h et 16h","Entre 15h et 18h"], textC: 1,
    img: ["11h-14h","13h-16h","15h-18h"], imgC: 1,
    fillQ: "Enregistrement entre ___ h et 16 h.", fill: "13"
  },
  {
    id: "m35-q5", textQ: "Quel bus peut-on prendre ?", text: ["Le bus 4","Le bus 13","Le bus 16"], textC: 0,
    img: ["Bus 4","Bus 13","Bus 16"], imgC: 0,
    fillQ: "On peut prendre le bus numéro ___.", fill: "4"
  },
  {
    id: "m35-q6", textQ: "Quelle date est confirmée ?", text: ["Le samedi 27","Le dimanche 28","Le vendredi 26"], textC: 0,
    img: ["Samedi 27","Dimanche 28","Vendredi 26"], imgC: 0,
    fillQ: "La réservation est pour le samedi ___.", fill: "27"
  }
]);

const MESSAGE_36 = buildPool("moyen", "message-36", [
  {
    id: "m36-q1", textQ: "Qui appelle ?", text: ["L'agence de voyages Lacrosse","L'hôtel Beaulieu","La société FMAC"], textC: 0,
    img: ["Agence Lacrosse","Hôtel Beaulieu","FMAC"], imgC: 0,
    fillQ: "C'est l'agence de voyages _________ qui appelle.", fill: "Lacrosse",
    fillA: ["lacrosse"],
  },
  {
    id: "m36-q2", textQ: "Quelle destination concerne le voyage ?", text: ["La Turquie","La Belgique","La Suisse"], textC: 0,
    img: ["Turquie","Belgique","Suisse"], imgC: 0,
    fillQ: "Le voyage est en _________.", fill: "Turquie",
    fillA: ["turquie"],
  },
  {
    id: "m36-q3", textQ: "À quelle heure part le vol modifié ?", text: ["À 7 h 25","À 9 h 25","À 11 h 25"], textC: 1,
    img: ["7h25","9h25","11h25"], imgC: 1,
    fillQ: "Le départ sera à ___ h 25.", fill: "9"
  },
  {
    id: "m36-q4", textQ: "Quel est le numéro de vol ?", text: ["AF 0305","AF 3050","DY 7040"], textC: 0,
    img: ["AF 0305","AF 3050","DY 7040"], imgC: 0,
    fillQ: "Le vol est le AF _______.", fill: "0305",
    fillA: ["305"],
  },
  {
    id: "m36-q5", textQ: "Quelle chambre d'hôtel est attribuée ?", text: ["La 23B","La 24B","La 23A"], textC: 0,
    img: ["23B","24B","23A"], imgC: 0,
    fillQ: "La chambre sera la ___ B.", fill: "23"
  },
  {
    id: "m36-q6", textQ: "Quel bus peut-on prendre de l'aéroport ?", text: ["Le bus 4","Le bus 13","Le bus 16"], textC: 1,
    img: ["Bus 4","Bus 13","Bus 16"], imgC: 1,
    fillQ: "On peut prendre le bus numéro ___.", fill: "13"
  }
]);

const MESSAGE_37 = buildPool("moyen", "message-37", [
  {
    id: "m37-q1", textQ: "Qui appelle ?", text: ["La société FMAC","Formation ABC","L'agence Lacrosse"], textC: 0,
    img: ["FMAC","Formation ABC","Lacrosse"], imgC: 0,
    fillQ: "L'appel vient de la société _________.", fill: "FMAC",
    fillA: ["fmac"],
  },
  {
    id: "m37-q2", textQ: "Qu'a gagné la personne ?", text: ["Une télévision","Un ordinateur","Un lecteur DVD"], textC: 0,
    img: ["Télévision","Ordinateur","Lecteur DVD"], imgC: 0,
    fillQ: "La personne a gagné une _________.", fill: "télévision",
    fillA: ["television","tv"],
  },
  {
    id: "m37-q3", textQ: "Quel numéro faut-il appeler ?", text: ["02 50 88 23 40","02 54 18 87 61","04 97 22 63 13"], textC: 0,
    img: ["02 50 88 23 40","02 54 18 87 61","04 97 22 63 13"], imgC: 0,
    fillQ: "Il faut rappeler au 02 50 88 ___ 40.", fill: "23"
  },
  {
    id: "m37-q4", textQ: "Quelle est l'adresse du site internet ?", text: ["www.fmac.fr","www.lacrosse.fr","www.fleursenligne.fr"], textC: 0,
    img: ["fmac.fr","lacrosse.fr","fleursenligne.fr"], imgC: 0,
    fillQ: "Le site est www._______.fr.", fill: "fmac"
  },
  {
    id: "m37-q5", textQ: "Quelle réduction sur les lecteurs DVD ?", text: ["25 %","30 %","40 %"], textC: 1,
    img: ["25 %","30 %","40 %"], imgC: 1,
    fillQ: "Réduction de ___ % sur les lecteurs DVD.", fill: "30"
  },
  {
    id: "m37-q6", textQ: "Quelle réduction sur les ordinateurs ?", text: ["20 %","25 %","30 %"], textC: 1,
    img: ["20 %","25 %","30 %"], imgC: 1,
    fillQ: "Réduction de ___ % sur les ordinateurs.", fill: "25"
  }
]);

const ANNONCE_1 = buildPool("moyen", "annonce-1", [
  {
    id: "a1-q1", textQ: "Audio 1 — Quelle ligne de métro est concernée ?", text: ["La ligne 1","La ligne 9","La ligne 14"], textC: 0,
    img: ["Ligne 1","Ligne 9","Ligne 14"], imgC: 0,
    fillQ: "Audio 1 — La ligne ___ du métro sera fermée.", fill: "1"
  },
  {
    id: "a1-q2", textQ: "Audio 1 — À partir de quelle heure la ligne ferme-t-elle ?", text: ["À 22h","À 22h30","À 23h"], textC: 1,
    img: ["22h","22h30","23h"], imgC: 1,
    fillQ: "Audio 1 — Fermeture à partir de ___ h 30.", fill: "22"
  },
  {
    id: "a1-q3", textQ: "Audio 2 — Sur quels produits y a-t-il une remise ?", text: ["Les bijoux","Les livres","Les téléviseurs"], textC: 0,
    img: ["Bijoux","Livres","Téléviseurs"], imgC: 0,
    fillQ: "Audio 2 — Remise de 30 % sur les _________.", fill: "bijoux"
  },
  {
    id: "a1-q4", textQ: "Audio 3 — À quelle heure commence le film ?", text: ["À 18h","À 18h30","À 19h"], textC: 1,
    img: ["18h","18h30","19h"], imgC: 1,
    fillQ: "Audio 3 — Le film commence à ___ h 30.", fill: "18"
  },
  {
    id: "a1-q5", textQ: "Audio 4 — Quelle est la destination du vol ?", text: ["Berlin","Montréal","Bruxelles"], textC: 1,
    img: ["Berlin","Montréal","Bruxelles"], imgC: 1,
    fillQ: "Audio 4 — Le vol DY7040 va à _________.", fill: "Montréal",
    fillA: ["montreal"],
  },
  {
    id: "a1-q6", textQ: "Audio 5 — Où s'est perdu Grégoire ?", text: ["Au rayon fruits et légumes","À l'entrée du magasin","Dans les toilettes"], textC: 0,
    img: ["Fruits et légumes","Entrée","Toilettes"], imgC: 0,
    fillQ: "Audio 5 — Grégoire s'est perdu au rayon _________ et légumes.", fill: "fruits"
  }
]);

const ANNONCE_2 = buildPool("moyen", "annonce-2", [
  {
    id: "a2-q1", textQ: "Audio 1 — Où se trouve l'attraction ?", text: ["Au Parc Astérix","Au cinéma","À la bibliothèque"], textC: 0,
    img: ["Parc Astérix","Cinéma","Bibliothèque"], imgC: 0,
    fillQ: "Audio 1 — L'attraction est au Parc _________.", fill: "Astérix",
    fillA: ["asterix"],
  },
  {
    id: "a2-q2", textQ: "Audio 1 — Quelle taille minimum faut-il pour monter ?", text: ["1 m","1 m 20","1 m 40"], textC: 1,
    img: ["1 m","1 m 20","1 m 40"], imgC: 1,
    fillQ: "Audio 1 — Il faut mesurer au moins ___ m 20.", fill: "1"
  },
  {
    id: "a2-q3", textQ: "Audio 2 — Qu'est-ce qui est interdit au concert ?", text: ["Prendre des photos","Manger","Parler"], textC: 0,
    img: ["Photos","Manger","Parler"], imgC: 0,
    fillQ: "Audio 2 — Il est interdit de prendre des _________.", fill: "photos"
  },
  {
    id: "a2-q4", textQ: "Audio 3 — À quelle heure ferme la bibliothèque ?", text: ["À 15h","À 15h30","À 19h"], textC: 1,
    img: ["15h","15h30","19h"], imgC: 1,
    fillQ: "Audio 3 — Fermeture exceptionnelle à ___ h 30.", fill: "15"
  },
  {
    id: "a2-q5", textQ: "Audio 4 — Quelle réduction sur l'électroménager ?", text: ["30 %","40 %","50 %"], textC: 2,
    img: ["30 %","40 %","50 %"], imgC: 2,
    fillQ: "Audio 4 — Réduction de ___ % sur l'électroménager.", fill: "50"
  },
  {
    id: "a2-q6", textQ: "Audio 6 — Quelle réduction au cinéma sur les bonbons ?", text: ["30 %","50 %","70 %"], textC: 1,
    img: ["30 %","50 %","70 %"], imgC: 1,
    fillQ: "Audio 6 — ___ % de réduction sur les bonbons.", fill: "50"
  }
]);

const ANNONCE_3 = buildPool("moyen", "annonce-3", [
  {
    id: "a3-q1", textQ: "Audio 1 — Quelle est la destination du vol Air France 4568 ?", text: ["Berlin","Montréal","Nice"], textC: 0,
    img: ["Berlin","Montréal","Nice"], imgC: 0,
    fillQ: "Audio 1 — Le vol va à _________.", fill: "Berlin",
    fillA: ["berlin"],
  },
  {
    id: "a3-q2", textQ: "Audio 1 — Quel numéro de porte d'embarquement ?", text: ["Porte 45","Porte 12","Porte 7"], textC: 0,
    img: ["45","12","7"], imgC: 0,
    fillQ: "Audio 1 — Porte d'embarquement numéro ___.", fill: "45"
  },
  {
    id: "a3-q3", textQ: "Audio 2 — Quelle ligne de métro est fermée ?", text: ["La ligne 1","La ligne 9","La ligne 14"], textC: 1,
    img: ["Ligne 1","Ligne 9","Ligne 14"], imgC: 1,
    fillQ: "Audio 2 — La ligne ___ sera fermée.", fill: "9"
  },
  {
    id: "a3-q4", textQ: "Audio 4 — Quelle carte faut-il présenter à l'université ?", text: ["Carte d'étudiant","Carte d'identité","Carte de bibliothèque"], textC: 0,
    img: ["Étudiant","Identité","Bibliothèque"], imgC: 0,
    fillQ: "Audio 4 — Il faut la carte d'_________.", fill: "étudiant",
    fillA: ["etudiant"],
  },
  {
    id: "a3-q5", textQ: "Audio 5 — Où faut-il passer ses appels ?", text: ["Dans les couloirs","Dans le wagon","À la gare"], textC: 0,
    img: ["Couloirs","Wagon","Gare"], imgC: 0,
    fillQ: "Audio 5 — Appels uniquement dans les _________.", fill: "couloirs"
  },
  {
    id: "a3-q6", textQ: "Audio 6 — Quel cadeau pour l'achat d'un livre ou de deux CDs ?", text: ["Une place de cinéma","Un bon de réduction","Un café offert"], textC: 0,
    img: ["Place cinéma","Bon réduction","Café"], imgC: 0,
    fillQ: "Audio 6 — Cadeau : une place de _________.", fill: "cinéma",
    fillA: ["cinema"],
  }
]);

const ANNONCE_4 = buildPool("moyen", "annonce-4", [
  {
    id: "a4-q1", textQ: "Audio 1 — Combien de temps dure le spectacle du cirque ?", text: ["1 heure","1 h 30","2 heures"], textC: 1,
    img: ["1 h","1 h 30","2 h"], imgC: 1,
    fillQ: "Audio 1 — Spectacle de ___ h 30.", fill: "1"
  },
  {
    id: "a4-q2", textQ: "Audio 2 — À quelle heure ferme le magasin le week-end ?", text: ["À 12h15","À 19h","À 20h30"], textC: 0,
    img: ["12h15","19h","20h30"], imgC: 0,
    fillQ: "Audio 2 — Fermeture week-end à ___ h 15.", fill: "12"
  },
  {
    id: "a4-q3", textQ: "Audio 3 — Sur quelle voie part le train n°55 ?", text: ["Voie 12","Voie 15","Voie 7"], textC: 0,
    img: ["12","15","7"], imgC: 0,
    fillQ: "Audio 3 — Départ sur la voie ___.", fill: "12"
  },
  {
    id: "a4-q4", textQ: "Audio 4 — Quelle réduction sur les télévisions aujourd'hui ?", text: ["30 %","40 %","50 %"], textC: 1,
    img: ["30 %","40 %","50 %"], imgC: 1,
    fillQ: "Audio 4 — Jusqu'à ___ % sur les télévisions.", fill: "40"
  },
  {
    id: "a4-q5", textQ: "Audio 5 — Où trouve-t-on les produits alimentaires ?", text: ["Au 1er étage","Au 2ème étage","Au 3ème étage"], textC: 0,
    img: ["1er étage","2ème étage","3ème étage"], imgC: 0,
    fillQ: "Audio 5 — Alimentaire au ___ étage.", fill: "premier",
    fillA: ["1er","1"],
  },
  {
    id: "a4-q6", textQ: "Audio 6 — Quand l'établissement rouvre-t-il ?", text: ["Le 8 janvier","Le 9 janvier","Le 23 décembre"], textC: 1,
    img: ["8 janv.","9 janv.","23 déc."], imgC: 1,
    fillQ: "Audio 6 — Réouverture le ___ janvier.", fill: "9"
  }
]);

const ANNONCE_5 = buildPool("moyen", "annonce-5", [
  {
    id: "a5-q1", textQ: "Audio 1 — Quelle promotion est annoncée ?", text: ["Livres de recettes","Bijoux","Sandwichs"], textC: 0,
    img: ["Recettes","Bijoux","Sandwichs"], imgC: 0,
    fillQ: "Audio 1 — Promotion sur les livres de _________.", fill: "recettes"
  },
  {
    id: "a5-q2", textQ: "Audio 2 — Quelle est l'immatriculation de la moto ?", text: ["AG56KL","AG65LK","GA56KL"], textC: 0,
    img: ["AG56KL","AG65LK","GA56KL"], imgC: 0,
    fillQ: "Audio 2 — Moto immatriculée _________.", fill: "AG56KL"
  },
  {
    id: "a5-q3", textQ: "Audio 3 — Pour qui l'entrée est-elle gratuite ?", text: ["Les enfants","Les adultes","Les adolescents"], textC: 0,
    img: ["Enfants","Adultes","Adolescents"], imgC: 0,
    fillQ: "Audio 3 — Entrées gratuites pour les _________.", fill: "enfants"
  },
  {
    id: "a5-q4", textQ: "Audio 3 — Quelle remise pour les adolescents ?", text: ["15 %","25 %","30 %"], textC: 1,
    img: ["15 %","25 %","30 %"], imgC: 1,
    fillQ: "Audio 3 — Remise de ___ % pour les adolescents.", fill: "25"
  },
  {
    id: "a5-q5", textQ: "Audio 4 — Qu'est-ce qui est interdit autour du grand bassin ?", text: ["Courir et manger","Nager","Parler"], textC: 0,
    img: ["Courir/manger","Nager","Parler"], imgC: 0,
    fillQ: "Audio 4 — Interdit de _________ ou de manger.", fill: "courir"
  },
  {
    id: "a5-q6", textQ: "Audio 6 — Où récupérer les clés trouvées ?", text: ["À l'accueil","Aux caisses","À la poste"], textC: 0,
    img: ["Accueil","Caisses","Poste"], imgC: 0,
    fillQ: "Audio 6 — Récupération des clés à l'_________.", fill: "accueil"
  }
]);

const ANNONCE_6 = buildPool("moyen", "annonce-6", [
  {
    id: "a6-q1", textQ: "Audio 1 — Quel bus ne marquera pas certains arrêts ?", text: ["Le bus 160","Le bus 171","Le bus 112"], textC: 0,
    img: ["160","171","112"], imgC: 0,
    fillQ: "Audio 1 — Le bus ___ ne marquera pas certains arrêts.", fill: "160"
  },
  {
    id: "a6-q2", textQ: "Audio 2 — Quelle remise sur les bijoux ?", text: ["50 %","70 %","30 %"], textC: 1,
    img: ["50 %","70 %","30 %"], imgC: 1,
    fillQ: "Audio 2 — Remise de ___ % sur les bijoux.", fill: "70"
  },
  {
    id: "a6-q3", textQ: "Audio 3 — Quel type de séjours est proposé ?", text: ["Séjours au soleil","Séjours à la montagne","Séjours en ville"], textC: 0,
    img: ["Au soleil","Montagne","Ville"], imgC: 0,
    fillQ: "Audio 3 — Séjours au _________.", fill: "soleil"
  },
  {
    id: "a6-q4", textQ: "Audio 4 — Que faut-il acheter pour avoir un café offert ?", text: ["Trois viennoiseries","Deux sandwichs","Un croissant"], textC: 0,
    img: ["3 viennoiseries","2 sandwichs","1 croissant"], imgC: 0,
    fillQ: "Audio 4 — Achat de trois _________.", fill: "viennoiseries"
  },
  {
    id: "a6-q5", textQ: "Audio 5 — Quel nouveau service est proposé ?", text: ["La laverie","La livraison","Le pressing"], textC: 0,
    img: ["Laverie","Livraison","Pressing"], imgC: 0,
    fillQ: "Audio 5 — Nouveau service de _________.", fill: "laverie"
  },
  {
    id: "a6-q6", textQ: "Audio 6 — À quelle heure a lieu le spectacle des félins ?", text: ["À 12h","À 14h","À 16h"], textC: 1,
    img: ["12h","14h","16h"], imgC: 1,
    fillQ: "Audio 6 — Spectacle des félins à ___ h.", fill: "14"
  }
]);

const ANNONCE_7 = buildPool("moyen", "annonce-7", [
  {
    id: "a7-q1", textQ: "Audio 1 — Quelle est la destination finale du train 6749 ?", text: ["Strasbourg","Zurich","Reims"], textC: 1,
    img: ["Strasbourg","Zurich","Reims"], imgC: 1,
    fillQ: "Audio 1 — Destination finale : _________.", fill: "Zurich",
    fillA: ["zurich"],
  },
  {
    id: "a7-q2", textQ: "Audio 2 — Qu'est-ce qui est autorisé au musée ?", text: ["Les photos","La nourriture","Courir"], textC: 0,
    img: ["Photos","Nourriture","Courir"], imgC: 0,
    fillQ: "Audio 2 — Les _________ sont autorisées.", fill: "photos"
  },
  {
    id: "a7-q3", textQ: "Audio 3 — À partir de quel montant la livraison est gratuite ?", text: ["100 €","150 €","200 €"], textC: 1,
    img: ["100 €","150 €","200 €"], imgC: 1,
    fillQ: "Audio 3 — Livraison gratuite au-dessus de ___ €.", fill: "150"
  },
  {
    id: "a7-q4", textQ: "Audio 4 — Quelle réduction sur les livres ?", text: ["10 %","15 %","20 %"], textC: 0,
    img: ["10 %","15 %","20 %"], imgC: 0,
    fillQ: "Audio 4 — ___ % de réduction sur les livres.", fill: "10"
  },
  {
    id: "a7-q5", textQ: "Audio 5 — Quel prix pour les adultes au cinéma ?", text: ["5,50 €","7,50 €","10,50 €"], textC: 1,
    img: ["5,50 €","7,50 €","10,50 €"], imgC: 1,
    fillQ: "Audio 5 — Places adultes à ___ €.", fill: "7,50",
    fillA: ["7.50"],
  },
  {
    id: "a7-q6", textQ: "Audio 6 — Quel nouveau moyen de paiement est accepté ?", text: ["Le téléphone portable","Le chèque","Les espèces uniquement"], textC: 0,
    img: ["Téléphone","Chèque","Espèces"], imgC: 0,
    fillQ: "Audio 6 — Paiement avec le _________ portable.", fill: "téléphone",
    fillA: ["telephone"],
  }
]);

const ANNONCE_8 = buildPool("moyen", "annonce-8", [
  {
    id: "a8-q1", textQ: "Quelle est la destination du train 1608 ?", text: ["Paris","Orléans","Montpellier"], textC: 0,
    img: ["Paris","Orléans","Montpellier"], imgC: 0,
    fillQ: "Le train va à _________.", fill: "Paris",
    fillA: ["paris"],
  },
  {
    id: "a8-q2", textQ: "De combien de minutes le train a-t-il de retard ?", text: ["5 minutes","7 minutes","10 minutes"], textC: 1,
    img: ["5 min","7 min","10 min"], imgC: 1,
    fillQ: "Le train part avec ___ minutes de retard.", fill: "7"
  },
  {
    id: "a8-q3", textQ: "À quelle heure le train s'arrête-t-il à Orléans ?", text: ["À 11 h 55","À 12 h 02","À 13 h 12"], textC: 1,
    img: ["11h55","12h02","13h12"], imgC: 1,
    fillQ: "Arrêt à Orléans à ___ h 02.", fill: "12"
  },
  {
    id: "a8-q4", textQ: "À quelle heure arrive-t-il à Paris ?", text: ["À 12 h 02","À 13 h 12","À 14 h"], textC: 1,
    img: ["12h02","13h12","14h"], imgC: 1,
    fillQ: "Arrivée à Paris à ___ h 12.", fill: "13"
  },
  {
    id: "a8-q5", textQ: "Où faut-il passer ses appels téléphoniques ?", text: ["Dans le couloir","Dans le wagon","À la gare"], textC: 0,
    img: ["Couloir","Wagon","Gare"], imgC: 0,
    fillQ: "Passez vos appels dans le _________.", fill: "couloir"
  },
  {
    id: "a8-q6", textQ: "Dans quel wagon se trouve la cafétéria ?", text: ["Wagon 7","Wagon 9","Wagon 12"], textC: 1,
    img: ["7","9","12"], imgC: 1,
    fillQ: "La cafétéria est dans le wagon numéro ___.", fill: "9"
  }
]);

const ANNONCE_9 = buildPool("moyen", "annonce-9", [
  {
    id: "a9-q1", textQ: "Dans quelle gare sommes-nous arrivés ?", text: ["Montpellier","Perpignan","Paris"], textC: 0,
    img: ["Montpellier","Perpignan","Paris"], imgC: 0,
    fillQ: "Vous êtes à la gare de _________.", fill: "Montpellier",
    fillA: ["montpellier"],
  },
  {
    id: "a9-q2", textQ: "Où conseille-t-on de regarder avant de descendre ?", text: ["Sous le siège","Dans le couloir","Au-dessus du siège"], textC: 0,
    img: ["Sous siège","Couloir","Au-dessus"], imgC: 0,
    fillQ: "Regardez sous votre _________.", fill: "siège",
    fillA: ["siege"],
  },
  {
    id: "a9-q3", textQ: "Quel train faut-il prendre pour aller à Perpignan ?", text: ["Le train 468","Le train 1608","Le train 6749"], textC: 0,
    img: ["468","1608","6749"], imgC: 0,
    fillQ: "Pour Perpignan, prenez le train numéro ___.", fill: "468"
  },
  {
    id: "a9-q4", textQ: "À quelle heure part le train pour Perpignan ?", text: ["À 11 h 55","À 12 h 02","À 13 h 12"], textC: 1,
    img: ["11h55","12h02","13h12"], imgC: 1,
    fillQ: "Départ à ___ h 02.", fill: "12"
  },
  {
    id: "a9-q5", textQ: "Sur quel quai se trouve ce train ?", text: ["Quai 5","Quai 7","Quai 12"], textC: 1,
    img: ["5","7","12"], imgC: 1,
    fillQ: "Le train est au quai numéro ___.", fill: "7"
  },
  {
    id: "a9-q6", textQ: "Où peut-on consulter les horaires d'autres trains ?", text: ["Sur le panneau d'affichage","À la cafétéria","Au guichet uniquement"], textC: 0,
    img: ["Panneau","Cafétéria","Guichet"], imgC: 0,
    fillQ: "Consultez le panneau d'_________.", fill: "affichage"
  }
]);

const ANNONCE_10 = buildPool("moyen", "annonce-10", [
  {
    id: "a10-q1", textQ: "Quelle est la destination du vol Air France 4568 ?", text: ["Berlin","Montréal","Bruxelles"], textC: 0,
    img: ["Berlin","Montréal","Bruxelles"], imgC: 0,
    fillQ: "Le vol va à _________.", fill: "Berlin",
    fillA: ["berlin"],
  },
  {
    id: "a10-q2", textQ: "Quel numéro de porte d'embarquement ?", text: ["Porte 12","Porte 45","Porte 7"], textC: 1,
    img: ["12","45","7"], imgC: 1,
    fillQ: "Porte d'embarquement numéro ___.", fill: "45"
  },
  {
    id: "a10-q3", textQ: "Qui peut utiliser la file prioritaire ?", text: ["Classe affaires ou enfant de moins de 3 ans","Tous les passagers","Uniquement les enfants"], textC: 0,
    img: ["Affaires/enfant -3 ans","Tous","Enfants"], imgC: 0,
    fillQ: "File prioritaire pour la classe _________ ou enfant -3 ans.", fill: "affaires"
  },
  {
    id: "a10-q4", textQ: "Combien de bagages à main par passager ?", text: ["Un seul","Deux","Trois"], textC: 0,
    img: ["1","2","3"], imgC: 0,
    fillQ: "Un seul bagage à _________ par passager.", fill: "main"
  },
  {
    id: "a10-q5", textQ: "Quels documents faut-il présenter ?", text: ["Billet et pièce d'identité","Passeport uniquement","Carte d'embarquement seule"], textC: 0,
    img: ["Billet + ID","Passeport","Carte embarquement"], imgC: 0,
    fillQ: "Présentez votre billet et votre pièce d'_________.", fill: "identité",
    fillA: ["identite"],
  },
  {
    id: "a10-q6", textQ: "Quelle compagnie aérienne est concernée ?", text: ["Air France","Ryanair","EasyJet"], textC: 0,
    img: ["Air France","Ryanair","EasyJet"], imgC: 0,
    fillQ: "Vol de la compagnie _________ France.", fill: "Air"
  }
]);

const ANNONCE_11 = buildPool("moyen", "annonce-11", [
  {
    id: "a11-q1", textQ: "Dans combien de temps la bibliothèque ferme-t-elle ?", text: ["Dans 5 minutes","Dans 15 minutes","Dans 30 minutes"], textC: 0,
    img: ["5 min","15 min","30 min"], imgC: 0,
    fillQ: "Fermeture dans ___ minutes.", fill: "5"
  },
  {
    id: "a11-q2", textQ: "À quelle heure fermera-t-elle exceptionnellement demain ?", text: ["À 19 h","À 21 h","À 23 h"], textC: 1,
    img: ["19h","21h","23h"], imgC: 1,
    fillQ: "Fermeture exceptionnelle à ___ h.", fill: "21"
  },
  {
    id: "a11-q3", textQ: "Quel est le titre du roman présenté ?", text: ["Les vagues de l'océan","La roue tourne","Toute ma vie"], textC: 0,
    img: ["Vagues océan","Roue tourne","Toute ma vie"], imgC: 0,
    fillQ: "Roman : Les vagues de l'_________.", fill: "océan",
    fillA: ["ocean"],
  },
  {
    id: "a11-q4", textQ: "Qui présente le roman ?", text: ["Jacques Hadji","Marc Lévy","Stéphanie Roncin"], textC: 0,
    img: ["Jacques Hadji","Marc Lévy","Stéphanie Roncin"], imgC: 0,
    fillQ: "Présentation par Jacques _________.", fill: "Hadji",
    fillA: ["hadji"],
  },
  {
    id: "a11-q5", textQ: "Combien coûte un exemplaire du livre ?", text: ["10 €","14 €","17 €"], textC: 1,
    img: ["10 €","14 €","17 €"], imgC: 1,
    fillQ: "Le livre coûte ___ euros.", fill: "14"
  },
  {
    id: "a11-q6", textQ: "La réservation d'une place est-elle payante ?", text: ["Non, c'est gratuit","Oui, 5 €","Oui, 14 €"], textC: 0,
    img: ["Gratuit","5 €","14 €"], imgC: 0,
    fillQ: "La réservation est _________.", fill: "gratuite",
    fillA: ["gratuit"],
  }
]);

const ANNONCE_12 = buildPool("moyen", "annonce-12", [
  {
    id: "a12-q1", textQ: "Dans quel magasin a lieu la promotion ?", text: ["Autoprix","Méga J","Formule +"], textC: 0,
    img: ["Autoprix","Méga J","Formule +"], imgC: 0,
    fillQ: "Promotions chez _________.", fill: "Autoprix",
    fillA: ["autoprix"],
  },
  {
    id: "a12-q2", textQ: "Quelle offre sur les produits de beauté ?", text: ["Le 2e est offert","50 % de réduction","Un parfum offert"], textC: 0,
    img: ["2e offert","50 %","Parfum offert"], imgC: 0,
    fillQ: "Pour un gel douche acheté, le deuxième est _________.", fill: "offert"
  },
  {
    id: "a12-q3", textQ: "Où peut-on jouer à la loterie ?", text: ["Dans l'allée centrale","À l'accueil","Au 1er étage"], textC: 0,
    img: ["Allée centrale","Accueil","1er étage"], imgC: 0,
    fillQ: "Loterie dans l'allée _________.", fill: "centrale"
  },
  {
    id: "a12-q4", textQ: "À partir de quand les promotions sur les télévisions ?", text: ["Le 1er avril","Le 1er mai","Le 1er juin"], textC: 1,
    img: ["1er avril","1er mai","1er juin"], imgC: 1,
    fillQ: "Promos TV à partir du 1er _________.", fill: "mai"
  },
  {
    id: "a12-q5", textQ: "Quelle réduction sur les télévisions ?", text: ["30 %","40 %","50 %"], textC: 1,
    img: ["30 %","40 %","50 %"], imgC: 1,
    fillQ: "Jusqu'à ___ % sur les télévisions.", fill: "40"
  },
  {
    id: "a12-q6", textQ: "Quel est le slogan du magasin ?", text: ["Les prix sont mini","Ne laissez pas passer","Bonne visite"], textC: 0,
    img: ["Prix mini","Ne ratez pas","Bonne visite"], imgC: 0,
    fillQ: "Slogan : les prix sont _________.", fill: "mini"
  }
]);

const ANNONCE_13 = buildPool("moyen", "annonce-13", [
  {
    id: "a13-q1", textQ: "Dans quel parc se trouve l'attraction ?", text: ["Parc Astérix","Parc du Château","Disneyland"], textC: 0,
    img: ["Astérix","Château","Disneyland"], imgC: 0,
    fillQ: "Bienvenue au parc _________.", fill: "Astérix",
    fillA: ["asterix"],
  },
  {
    id: "a13-q2", textQ: "Quelle taille minimum pour monter dans le manège ?", text: ["1 m","1 m 20","1 m 40"], textC: 1,
    img: ["1 m","1 m 20","1 m 40"], imgC: 1,
    fillQ: "Il faut mesurer au moins ___ m 20.", fill: "1"
  },
  {
    id: "a13-q3", textQ: "Où ranger ses affaires ?", text: ["Dans le sac","Sur le siège","À la sortie"], textC: 0,
    img: ["Dans le sac","Sur siège","Sortie"], imgC: 0,
    fillQ: "Rangez vos affaires dans votre _________.", fill: "sac"
  },
  {
    id: "a13-q4", textQ: "Comment garder sa tête dans le train ?", text: ["Contre le siège","Debout","Penchée en avant"], textC: 0,
    img: ["Contre siège","Debout","Penchée"], imgC: 0,
    fillQ: "Gardez votre tête contre le _________.", fill: "siège",
    fillA: ["siege"],
  },
  {
    id: "a13-q5", textQ: "Pourquoi faut-il sourire ?", text: ["Pour la photo","Pour la sécurité","Pour le personnel"], textC: 0,
    img: ["Photo","Sécurité","Personnel"], imgC: 0,
    fillQ: "Souriez pour la _________.", fill: "photo"
  },
  {
    id: "a13-q6", textQ: "Où acheter la photo ?", text: ["Au stand à la sortie","À l'entrée","En ligne"], textC: 0,
    img: ["Stand sortie","Entrée","En ligne"], imgC: 0,
    fillQ: "Photo à acheter au stand à la _________.", fill: "sortie"
  }
]);

const RADIO_14 = buildPool("moyen", "radio-14", [
  {
    id: "r14-q1", textQ: "Audio 1 — Quel temps fait-il aujourd'hui dans la majeure partie de la France ?", text: ["Pluvieux","Ensoleillé","Neigeux"], textC: 0,
    img: ["Pluie","Soleil","Neige"], imgC: 0,
    fillQ: "Audio 1 — Temps _________ sur la France.", fill: "pluvieux",
    fillA: ["pluvieuse"],
  },
  {
    id: "r14-q2", textQ: "Audio 1 — Où y aura-t-il quelques rayons de soleil ?", text: ["Au sud","Au nord","À l'est"], textC: 0,
    img: ["Sud","Nord","Est"], imgC: 0,
    fillQ: "Audio 1 — Quelques rayons de soleil au _________.", fill: "sud"
  },
  {
    id: "r14-q3", textQ: "Audio 2 — Quelle série est mentionnée ?", text: ["La maison de papier","La roue tourne","Amour"], textC: 0,
    img: ["Maison papier","Roue tourne","Amour"], imgC: 0,
    fillQ: "Audio 2 — Série : La maison de _________.", fill: "papier"
  },
  {
    id: "r14-q4", textQ: "Audio 2 — Où les acteurs feront-ils des photos ?", text: ["À la Cité du cinéma à Saint-Denis","À l'Olympia","Au musée Monet"], textC: 0,
    img: ["Cité cinéma","Olympia","Musée Monet"], imgC: 0,
    fillQ: "Audio 2 — Photos à la Cité du _________.", fill: "cinéma",
    fillA: ["cinema"],
  },
  {
    id: "r14-q5", textQ: "Audio 3 — Quel problème dans le métro parisien ?", text: ["Une grève","Un accident","Des travaux"], textC: 0,
    img: ["Grève","Accident","Travaux"], imgC: 0,
    fillQ: "Audio 3 — Le personnel organise une _________.", fill: "grève",
    fillA: ["greve"],
  },
  {
    id: "r14-q6", textQ: "Audio 3 — Combien de trains circulent ?", text: ["2 sur 4","1 sur 5","3 sur 4"], textC: 0,
    img: ["2/4","1/5","3/4"], imgC: 0,
    fillQ: "Audio 3 — Seuls ___ trains sur 4 circulent.", fill: "2"
  }
]);

const RADIO_15 = buildPool("moyen", "radio-15", [
  {
    id: "r15-q1", textQ: "Audio 1 — Quelle est la température à Orléans ?", text: ["-7°","-5°","0°"], textC: 0,
    img: ["-7°","-5°","0°"], imgC: 0,
    fillQ: "Audio 1 — Il fait ___°.", fill: "-7",
    fillA: ["-7°","moins 7"],
  },
  {
    id: "r15-q2", textQ: "Audio 1 — Quel conseil est donné aux automobilistes ?", text: ["Ne pas prendre la voiture","Rouler lentement","Prendre le bus"], textC: 0,
    img: ["Pas de voiture","Rouler lent","Bus"], imgC: 0,
    fillQ: "Audio 1 — Ne prenez pas votre _________.", fill: "voiture"
  },
  {
    id: "r15-q3", textQ: "Audio 2 — Combien de jours dure le printemps du cinéma ?", text: ["2 jours","3 jours","5 jours"], textC: 1,
    img: ["2 jours","3 jours","5 jours"], imgC: 1,
    fillQ: "Audio 2 — Du 17 au 19 avril, soit ___ jours.", fill: "3"
  },
  {
    id: "r15-q4", textQ: "Audio 2 — Quel est le tarif exceptionnel ?", text: ["3,50 €","5,50 €","7,50 €"], textC: 0,
    img: ["3,50 €","5,50 €","7,50 €"], imgC: 0,
    fillQ: "Audio 2 — Films à ___ €.", fill: "3,50",
    fillA: ["3.50"],
  },
  {
    id: "r15-q5", textQ: "Audio 3 — Où a lieu le concert de Paul Durand ?", text: ["À l'Olympia","À la Cité du cinéma","À RockFM"], textC: 0,
    img: ["Olympia","Cité cinéma","RockFM"], imgC: 0,
    fillQ: "Audio 3 — Concert à l'_________.", fill: "Olympia",
    fillA: ["olympia"],
  },
  {
    id: "r15-q6", textQ: "Audio 3 — Quel numéro envoyer pour gagner des places ?", text: ["6505","4568","7040"], textC: 0,
    img: ["6505","4568","7040"], imgC: 0,
    fillQ: "Audio 3 — SMS au _________.", fill: "6505"
  }
]);

const RADIO_16 = buildPool("moyen", "radio-16", [
  {
    id: "r16-q1", textQ: "Audio 1 — Quel secteur utilise beaucoup l'apprentissage ?", text: ["L'hôtellerie-restauration","L'informatique","Le commerce"], textC: 0,
    img: ["Hôtellerie","Informatique","Commerce"], imgC: 0,
    fillQ: "Audio 1 — Secteur : hôtellerie-_________.", fill: "restauration"
  },
  {
    id: "r16-q2", textQ: "Audio 1 — Que permet l'apprentissage ?", text: ["Étudier et travailler","Voyager","Gagner beaucoup d'argent"], textC: 0,
    img: ["Étudier/travailler","Voyager","Gagner"], imgC: 0,
    fillQ: "Audio 1 — On peut étudier et _________.", fill: "travailler"
  },
  {
    id: "r16-q3", textQ: "Audio 2 — Quelle remise sur les bouquets de fleurs ?", text: ["15 %","25 %","30 %"], textC: 1,
    img: ["15 %","25 %","30 %"], imgC: 1,
    fillQ: "Audio 2 — Remise de ___ % sur les fleurs.", fill: "25"
  },
  {
    id: "r16-q4", textQ: "Audio 2 — Quel code promo utiliser ?", text: ["FLEURSENFÊTE","FLEURSENLIGNE","VOYAGESPLUS"], textC: 0,
    img: ["FLEURSENFÊTE","FLEURSENLIGNE","VOYAGES+"], imgC: 0,
    fillQ: "Audio 2 — Code : _________.", fill: "FLEURSENFÊTE",
    fillA: ["FLEURSENFETE"],
  },
  {
    id: "r16-q5", textQ: "Audio 3 — De qui parle l'exposition ?", text: ["Stéphanie Roncin","Jacques Hadji","Marc Lévy"], textC: 0,
    img: ["S. Roncin","J. Hadji","M. Lévy"], imgC: 0,
    fillQ: "Audio 3 — Exposition sur Stéphanie _________.", fill: "Roncin",
    fillA: ["roncin"],
  },
  {
    id: "r16-q6", textQ: "Audio 3 — Où a lieu l'exposition ?", text: ["Musée Monet à Paris","Musée à Lisieux","Cité du cinéma"], textC: 0,
    img: ["Monet Paris","Lisieux","Cité cinéma"], imgC: 0,
    fillQ: "Audio 3 — Au musée _________ à Paris.", fill: "Monet",
    fillA: ["monet"],
  }
]);

const RADIO_17 = buildPool("moyen", "radio-17", [
  {
    id: "r17-q1", textQ: "Audio 1 — Combien de minutes de promenade sont conseillées ?", text: ["10 minutes","20 minutes","30 minutes"], textC: 1,
    img: ["10 min","20 min","30 min"], imgC: 1,
    fillQ: "Audio 1 — Promenade de ___ minutes.", fill: "20"
  },
  {
    id: "r17-q2", textQ: "Audio 1 — Quels sports sont conseillés aux sportifs ?", text: ["Vélo et natation","Football et rugby","Ski et tennis"], textC: 0,
    img: ["Vélo/natation","Foot/rugby","Ski/tennis"], imgC: 0,
    fillQ: "Audio 1 — Le vélo et la _________ sont conseillés.", fill: "natation"
  },
  {
    id: "r17-q3", textQ: "Audio 2 — Combien de trains circulent au niveau national ?", text: ["1 sur 3","1 sur 5","2 sur 4"], textC: 1,
    img: ["1/3","1/5","2/4"], imgC: 1,
    fillQ: "Audio 2 — ___ train sur 5 circule.", fill: "1"
  },
  {
    id: "r17-q4", textQ: "Audio 2 — Où consulter le programme des trains ?", text: ["Site SNCF","Site RATP","Site Air France"], textC: 0,
    img: ["SNCF","RATP","Air France"], imgC: 0,
    fillQ: "Audio 2 — Consultez le site de la _________.", fill: "SNCF",
    fillA: ["sncf"],
  },
  {
    id: "r17-q5", textQ: "Audio 3 — Quel est le score du match Paris-Monaco ?", text: ["2 à 1","3 à 1","1 à 0"], textC: 1,
    img: ["2-1","3-1","1-0"], imgC: 1,
    fillQ: "Audio 3 — Paris gagne ___ à 1.", fill: "3"
  },
  {
    id: "r17-q6", textQ: "Audio 3 — Quand commence la saison de courses de chevaux ?", text: ["Demain à 13h","Aujourd'hui à 14h","Samedi à 10h"], textC: 0,
    img: ["Demain 13h","Auj. 14h","Sam. 10h"], imgC: 0,
    fillQ: "Audio 3 — Courses de chevaux demain à ___ h.", fill: "13"
  }
]);

const RADIO_18 = buildPool("moyen", "radio-18", [
  {
    id: "r18-q1", textQ: "Audio 1 — Dans combien de semaines ouvre la fromagerie ?", text: ["3 semaines","5 semaines","7 semaines"], textC: 1,
    img: ["3 sem.","5 sem.","7 sem."], imgC: 1,
    fillQ: "Audio 1 — Ouverture dans ___ semaines.", fill: "5"
  },
  {
    id: "r18-q2", textQ: "Audio 1 — Quand la boutique est-elle ouverte ?", text: ["Tous les jours sauf le week-end","Uniquement le week-end","Du lundi au vendredi"], textC: 0,
    img: ["Jours sauf WE","WE seul","Lun-ven"], imgC: 0,
    fillQ: "Audio 1 — Ouverte tous les jours sauf le _________.", fill: "week-end",
    fillA: ["weekend"],
  },
  {
    id: "r18-q3", textQ: "Audio 2 — Qui est en grève ?", text: ["Les hôtesses de l'air","Les conducteurs de train","Les enseignants"], textC: 0,
    img: ["Hôtesses","Conducteurs","Enseignants"], imgC: 0,
    fillQ: "Audio 2 — Grève des hôtesses de l'_________.", fill: "air"
  },
  {
    id: "r18-q4", textQ: "Audio 2 — Que réclament-elles ?", text: ["Meilleur salaire et congés","Moins d'heures","Plus de vacances seules"], textC: 0,
    img: ["Salaire/congés","Moins heures","Vacances"], imgC: 0,
    fillQ: "Audio 2 — Elles réclament un meilleur _________.", fill: "salaire"
  },
  {
    id: "r18-q5", textQ: "Audio 3 — Où a lieu le festival de gastronomie ?", text: ["À Paris","À Nice","À Bruxelles"], textC: 0,
    img: ["Paris","Nice","Bruxelles"], imgC: 0,
    fillQ: "Audio 3 — Festival à _________.", fill: "Paris",
    fillA: ["paris"],
  },
  {
    id: "r18-q6", textQ: "Audio 3 — Quel est le site pour réserver ?", text: ["www.festivalculinaire.fr","www.fmac.fr","www.voyagesplus.fr"], textC: 0,
    img: ["festivalculinaire.fr","fmac.fr","voyagesplus.fr"], imgC: 0,
    fillQ: "Audio 3 — Réservation sur www._________.fr.", fill: "festivalculinaire"
  }
]);

const RADIO_19 = buildPool("moyen", "radio-19", [
  {
    id: "r19-q1", textQ: "Audio 1 — Quel est le titre du livre de Charlie Chaillot ?", text: ["Toute ma vie","Les vagues de l'océan","La maison de papier"], textC: 0,
    img: ["Toute ma vie","Vagues océan","Maison papier"], imgC: 0,
    fillQ: "Audio 1 — Livre : _________ ma vie.", fill: "Toute"
  },
  {
    id: "r19-q2", textQ: "Audio 1 — De quoi parle le livre ?", text: ["Ses voyages en Europe","Sa carrière musicale","Son enfance"], textC: 0,
    img: ["Voyages Europe","Musique","Enfance"], imgC: 0,
    fillQ: "Audio 1 — Voyages à travers l'_________.", fill: "Europe",
    fillA: ["europe"],
  },
  {
    id: "r19-q3", textQ: "Audio 2 — De combien augmentent les consultations ?", text: ["10 %","12 %","25 %"], textC: 1,
    img: ["10 %","12 %","25 %"], imgC: 1,
    fillQ: "Audio 2 — Hausse de ___ % des consultations.", fill: "12"
  },
  {
    id: "r19-q4", textQ: "Audio 2 — Quel est le nouveau tarif des consultations ?", text: ["25 €","28 €","30 €"], textC: 1,
    img: ["25 €","28 €","30 €"], imgC: 1,
    fillQ: "Audio 2 — Consultations à ___ €.", fill: "28"
  },
  {
    id: "r19-q5", textQ: "Audio 3 — Quel temps fait-il aujourd'hui ?", text: ["Magnifique, grand soleil","Pluvieux","Neigeux"], textC: 0,
    img: ["Soleil","Pluie","Neige"], imgC: 0,
    fillQ: "Audio 3 — Temps magnifique, grand _________.", fill: "soleil"
  },
  {
    id: "r19-q6", textQ: "Audio 3 — Quel temps est prévu demain ?", text: ["Pluie et vent fort","Grand soleil","Neige"], textC: 0,
    img: ["Pluie/vent","Soleil","Neige"], imgC: 0,
    fillQ: "Audio 3 — Demain, pluie et _________ fort.", fill: "vent"
  }
]);

const RADIO_20 = buildPool("moyen", "radio-20", [
  {
    id: "r20-q1", textQ: "Audio 1 — Quelle température dans la moitié nord ?", text: ["Jusqu'à 42°","Jusqu'à 38°","Jusqu'à 30°"], textC: 0,
    img: ["42°","38°","30°"], imgC: 0,
    fillQ: "Audio 1 — Jusqu'à ___° dans le nord.", fill: "42"
  },
  {
    id: "r20-q2", textQ: "Audio 1 — Quel conseil est donné ?", text: ["Boire beaucoup d'eau","Rester chez soi","Porter un manteau"], textC: 0,
    img: ["Boire eau","Rester","Manteau"], imgC: 0,
    fillQ: "Audio 1 — N'oubliez pas de boire de l'_________.", fill: "eau"
  },
  {
    id: "r20-q3", textQ: "Audio 2 — Combien de photographes seront présents ?", text: ["20","27","30"], textC: 1,
    img: ["20","27","30"], imgC: 1,
    fillQ: "Audio 2 — ___ photographes seront présents.", fill: "27"
  },
  {
    id: "r20-q4", textQ: "Audio 2 — Où a lieu la rencontre ?", text: ["Grande salle des fêtes","Musée Monet","Bibliothèque"], textC: 0,
    img: ["Salle fêtes","Musée Monet","Bibliothèque"], imgC: 0,
    fillQ: "Audio 2 — Rencontre dans la grande salle des _________.", fill: "fêtes",
    fillA: ["fetes"],
  },
  {
    id: "r20-q5", textQ: "Audio 3 — Quel problème sur l'autoroute A10 ?", text: ["Mouvement social des routiers","Accident","Travaux"], textC: 0,
    img: ["Grève routiers","Accident","Travaux"], imgC: 0,
    fillQ: "Audio 3 — Problème : mouvement social des _________.", fill: "transporteurs",
    fillA: ["routiers"],
  },
  {
    id: "r20-q6", textQ: "Audio 3 — Quelle route alternative est conseillée ?", text: ["La route nationale 19","La route nationale 10","L'autoroute A6"], textC: 0,
    img: ["RN 19","RN 10","A6"], imgC: 0,
    fillQ: "Audio 3 — Prenez la route nationale ___.", fill: "19"
  }
]);

const RADIO_21 = buildPool("moyen", "radio-21", [
  {
    id: "r21-q1", textQ: "Quel pays est recommandé pour les vacances ?", text: ["La Belgique","La France","L'Allemagne"], textC: 0,
    img: ["Belgique","France","Allemagne"], imgC: 0,
    fillQ: "On conseille d'aller en _________.", fill: "Belgique",
    fillA: ["belgique"],
  },
  {
    id: "r21-q2", textQ: "D'où viennent surtout les touristes ?", text: ["D'Europe","D'Asie","D'Amérique"], textC: 0,
    img: ["Europe","Asie","Amérique"], imgC: 0,
    fillQ: "Ils viennent surtout d'_________.", fill: "Europe",
    fillA: ["europe"],
  },
  {
    id: "r21-q3", textQ: "Quel musée est mentionné pour les amateurs de BD ?", text: ["Centre Belge de la Bande Dessinée","Musée Monet","Musée Matisse"], textC: 0,
    img: ["Centre BD","Monet","Matisse"], imgC: 0,
    fillQ: "Musée : Centre Belge de la Bande _________.", fill: "Dessinée",
    fillA: ["Dessinee","BD"],
  },
  {
    id: "r21-q4", textQ: "Quelle spécialité gastronomique est citée ?", text: ["Les frites belges","Le chocolat","Les crêpes"], textC: 0,
    img: ["Frites","Chocolat","Crêpes"], imgC: 0,
    fillQ: "Les touristes veulent manger les frites _________.", fill: "belges"
  },
  {
    id: "r21-q5", textQ: "Combien de touristes viennent chaque année ?", text: ["5 millions","7 millions","10 millions"], textC: 1,
    img: ["5 M","7 M","10 M"], imgC: 1,
    fillQ: "___ millions de touristes par an.", fill: "7"
  },
  {
    id: "r21-q6", textQ: "Quelle est la capitale de la Belgique ?", text: ["Bruxelles","Bruges","Liège"], textC: 0,
    img: ["Bruxelles","Bruges","Liège"], imgC: 0,
    fillQ: "À _________, capitale du royaume.", fill: "Bruxelles",
    fillA: ["bruxelles"],
  }
]);

const RADIO_22 = buildPool("moyen", "radio-22", [
  {
    id: "r22-q1", textQ: "Combien de trains circulent au niveau national ?", text: ["1 sur 3","1 sur 5","2 sur 5"], textC: 1,
    img: ["1/3","1/5","2/5"], imgC: 1,
    fillQ: "Au niveau national, ___ train sur 5 circule.", fill: "1"
  },
  {
    id: "r22-q2", textQ: "À Paris, à quelle fréquence circule le métro ?", text: ["Toutes les 15 minutes","Toutes les 30 minutes","Toutes les heures"], textC: 1,
    img: ["15 min","30 min","1 h"], imgC: 1,
    fillQ: "À Paris, métro toutes les ___ minutes.", fill: "30"
  },
  {
    id: "r22-q3", textQ: "Dans quelle ville n'y a-t-il pas de bus ?", text: ["Perpignan","Tours","Nantes"], textC: 0,
    img: ["Perpignan","Tours","Nantes"], imgC: 0,
    fillQ: "Pas de bus à _________.", fill: "Perpignan",
    fillA: ["perpignan"],
  },
  {
    id: "r22-q4", textQ: "À Tours ou Nantes, quel transport reste ouvert ?", text: ["Le tramway","Le bus","Le métro"], textC: 0,
    img: ["Tramway","Bus","Métro"], imgC: 0,
    fillQ: "Le _________ sera l'unique transport ouvert.", fill: "tramway"
  },
  {
    id: "r22-q5", textQ: "Combien de jours la grève pourrait-elle encore durer ?", text: ["3 jours","5 jours","7 jours"], textC: 1,
    img: ["3 jours","5 jours","7 jours"], imgC: 1,
    fillQ: "La grève pourrait durer encore ___ jours.", fill: "5"
  },
  {
    id: "r22-q6", textQ: "Quel site consulter pour les horaires ?", text: ["www.sncf.com","www.ratp.fr","www.airfrance.com"], textC: 0,
    img: ["sncf.com","ratp.fr","airfrance.com"], imgC: 0,
    fillQ: "Consultez www._______.com.", fill: "sncf"
  }
]);

const RADIO_23 = buildPool("moyen", "radio-23", [
  {
    id: "r23-q1", textQ: "Quel site internet est présenté ?", text: ["Voyages +","FMAC","Lacrosse"], textC: 0,
    img: ["Voyages +","FMAC","Lacrosse"], imgC: 0,
    fillQ: "Site : _________ +.", fill: "Voyages"
  },
  {
    id: "r23-q2", textQ: "Jusqu'à quand les promotions sont-elles valables ?", text: ["Le 20 mai","Le 15 mars","Le 17 avril"], textC: 0,
    img: ["20 mai","15 mars","17 avril"], imgC: 0,
    fillQ: "Promotions jusqu'au ___ mai.", fill: "20"
  },
  {
    id: "r23-q3", textQ: "Quelle réduction à l'hôtel des 4 stars à Nice ?", text: ["30 %","40 %","50 %"], textC: 1,
    img: ["30 %","40 %","50 %"], imgC: 1,
    fillQ: "___ % de réduction à Nice.", fill: "40"
  },
  {
    id: "r23-q4", textQ: "Combien de jours faut-il passer pour cette offre ?", text: ["2 jours","3 jours","7 jours"], textC: 1,
    img: ["2 jours","3 jours","7 jours"], imgC: 1,
    fillQ: "Offre pour ___ jours à Nice.", fill: "3"
  },
  {
    id: "r23-q5", textQ: "Quel voyage peut-on gagner ?", text: ["Une semaine à la Réunion","Un week-end à Nice","Un séjour en Belgique"], textC: 0,
    img: ["Réunion","Nice","Belgique"], imgC: 0,
    fillQ: "Gagner un voyage à la _________.", fill: "Réunion",
    fillA: ["reunion"],
  },
  {
    id: "r23-q6", textQ: "Avant quelle date faut-il appeler pour participer ?", text: ["Avant le 15 mars","Avant le 20 mai","Avant le 17 avril"], textC: 0,
    img: ["15 mars","20 mai","17 avril"], imgC: 0,
    fillQ: "Appeler avant le ___ mars.", fill: "15"
  }
]);

const RADIO_24 = buildPool("moyen", "radio-24", [
  {
    id: "r24-q1", textQ: "Quel est le nom du chanteur interviewé ?", text: ["Chris Lombrete","Paul Durand","Charlie Chaillot"], textC: 0,
    img: ["Chris Lombrete","Paul Durand","Charlie Chaillot"], imgC: 0,
    fillQ: "Le chanteur s'appelle Chris _________.", fill: "Lombrete",
    fillA: ["lombrete"],
  },
  {
    id: "r24-q2", textQ: "Combien de concerts a-t-il faits ?", text: ["8","12","20"], textC: 1,
    img: ["8","12","20"], imgC: 1,
    fillQ: "Il a fait ___ concerts.", fill: "12"
  },
  {
    id: "r24-q3", textQ: "Combien de temps a duré la tournée ?", text: ["1 mois","2 mois","3 mois"], textC: 1,
    img: ["1 mois","2 mois","3 mois"], imgC: 1,
    fillQ: "Tournée pendant ___ mois.", fill: "2"
  },
  {
    id: "r24-q4", textQ: "Où était son meilleur souvenir de concert ?", text: ["À Cayenne en Guyane","À Fort-de-France","À Pointe-à-Pitre"], textC: 0,
    img: ["Cayenne","Fort-de-France","Pointe-à-Pitre"], imgC: 0,
    fillQ: "Meilleur souvenir à _________, en Guyane.", fill: "Cayenne",
    fillA: ["cayenne"],
  },
  {
    id: "r24-q5", textQ: "Combien de personnes étaient au concert mémorable ?", text: ["Environ 100","Environ 300","Environ 500"], textC: 1,
    img: ["100","300","500"], imgC: 1,
    fillQ: "Environ ___ personnes.", fill: "300"
  },
  {
    id: "r24-q6", textQ: "Dans combien de mois le CD sera-t-il prêt ?", text: ["Dans 1-2 mois","Dans 3-4 mois","Dans 6 mois"], textC: 1,
    img: ["1-2 mois","3-4 mois","6 mois"], imgC: 1,
    fillQ: "CD prêt dans ___-4 mois.", fill: "3"
  }
]);

const RADIO_25 = buildPool("moyen", "radio-25", [
  {
    id: "r25-q1", textQ: "Quel film est annoncé ?", text: ["Astérix et Obélix : Au service de sa Majesté","La maison de papier","Amour"], textC: 0,
    img: ["Astérix Obélix","Maison papier","Amour"], imgC: 0,
    fillQ: "Film : Astérix et _________.", fill: "Obélix",
    fillA: ["obelix"],
  },
  {
    id: "r25-q2", textQ: "Quelle est la date de sortie ?", text: ["Le 17 octobre","Le 17 avril","Le 20 juillet"], textC: 0,
    img: ["17 oct.","17 avr.","20 juil."], imgC: 0,
    fillQ: "Sortie le ___ octobre.", fill: "17"
  },
  {
    id: "r25-q3", textQ: "Quel village les héros vont-ils aider ?", text: ["Un village de Britannia","Un village gaulois","Un village romain"], textC: 0,
    img: ["Britannia","Gaulois","Romain"], imgC: 0,
    fillQ: "Ils aident un village de _________.", fill: "Britannia",
    fillA: ["britannia","Royaume-Uni"],
  },
  {
    id: "r25-q4", textQ: "Qui joue le rôle d'Obélix ?", text: ["Gérard Depardieu","Chris Lombrete","Paul Durand"], textC: 0,
    img: ["Depardieu","Lombrete","Durand"], imgC: 0,
    fillQ: "Obélix est joué par Gérard _________.", fill: "Depardieu",
    fillA: ["depardieu"],
  },
  {
    id: "r25-q5", textQ: "Combien de places peut-on gagner ?", text: ["Une place","Deux places","Quatre places"], textC: 1,
    img: ["1","2","4"], imgC: 1,
    fillQ: "Concours pour gagner ___ places.", fill: "deux",
    fillA: ["2"],
  },
  {
    id: "r25-q6", textQ: "Quelle question faut-il pour gagner ?", text: ["La date de sortie de la première BD Astérix","Le nom du réalisateur","Le prix du billet"], textC: 0,
    img: ["Date 1re BD","Réalisateur","Prix billet"], imgC: 0,
    fillQ: "Dire la date de sortie de la première _________ d'Astérix.", fill: "bande dessinée",
    fillA: ["BD"],
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
