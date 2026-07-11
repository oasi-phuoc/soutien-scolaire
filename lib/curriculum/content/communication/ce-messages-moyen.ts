import type { CEMessageItem } from "./ce-questions-helpers";
import { ceQ } from "./ce-questions-helpers";

/** Messages « Lire des messages » — CE moyen (pool 12 questions multi-format). */
export const CE_MESSAGES_MOYEN: CEMessageItem[] = [
  {
    id: "melina-plongee",
    from: "melina@amis.ch",
    subject: "Sortie plongée samedi",
    body:
      "Salut !\n\n" +
      "Samedi, l'école de plongée organise une sortie au lac de Neuchâtel. On part à 8 h du port et on revient vers 16 h. " +
      "Il faut apporter un maillot, une serviette, des lunettes de soleil et un pique-nique. " +
      "Le matériel de plongée est fourni sur place. Le prix est de 45 francs par personne. " +
      "Inscris-toi avant jeudi au secrétariat du club.\n\n" +
      "Amuse-toi bien si tu viens !\nMéline",
    image: "/assets/expression/images-temp/ce-moyen-message-melina-plongee.webp",
    pool: [
      ceQ("mel-q1", "Quelle activité est proposée ?", ["La plongée", "Le ski", "Le vélo"], 0, "C'est une sortie de _________.", "plongée", ["plongee"]),
      ceQ("mel-q2", "Où a lieu la sortie ?", ["Au lac de Neuchâtel", "À la piscine de Genève", "À la montagne"], 0, "La sortie est au lac de _________.", "Neuchâtel", ["neuchatel"]),
      ceQ("mel-q3", "À quelle heure part le groupe ?", ["8 h", "10 h", "14 h"], 0, "Le départ est à ___ h.", "8", ["huit"]),
      ceQ("mel-q4", "Que faut-il apporter à manger ?", ["Un pique-nique", "Un gâteau", "Rien"], 0, "Il faut un _________.", "pique-nique", ["pique nique"]),
      ceQ("mel-q5", "Le matériel de plongée est-il fourni ?", ["Oui, sur place", "Non, à acheter", "Non, à louer"], 0, "Le matériel est _________ sur place.", "fourni"),
      ceQ("mel-q6", "Combien coûte la sortie ?", ["25 francs", "45 francs", "65 francs"], 1, "Le prix est de ___ francs.", "45", ["quarante-cinq"]),
      ceQ("mel-q7", "Quand faut-il s'inscrire au plus tard ?", ["Avant jeudi", "Avant samedi", "Le jour même"], 0, "Inscription avant _________.", "jeudi"),
      ceQ("mel-q8", "Où faut-il s'inscrire ?", ["Au secrétariat du club", "À la gare", "Au restaurant"], 0, "L'inscription est au _________ du club.", "secrétariat", ["secretariat"]),
      ceQ("mel-q9", "Quel objet protège les yeux ?", ["Des lunettes de soleil", "Un parapluie", "Un bonnet"], 0, "Il faut des lunettes de _________.", "soleil"),
      ceQ("mel-q10", "À quelle heure revient le groupe ?", ["12 h", "16 h", "20 h"], 1, "Le retour est vers ___ h.", "16", ["seize"]),
      ceQ("mel-q11", "Que faut-il aussi apporter pour la baignade ?", ["Un maillot", "Un manteau", "Un livre"], 0, "Il faut un _________.", "maillot"),
      ceQ("mel-q12", "Qui écrit ce message ?", ["Méline", "Le directeur du lac", "Un moniteur de ski"], 0, "Le message est de _________.", "Méline", ["meline", "melina"]),
    ],
  },
  {
    id: "fred-anniversaire",
    from: "fred@mail.ch",
    subject: "Anniversaire de Sophie",
    body:
      "Bonjour,\n\n" +
      "Dimanche, c'est l'anniversaire de Sophie. La fête aura lieu dans son appartement à Lausanne à 15 h. " +
      "Peux-tu apporter un dessert ? Moi, j'apporte les boissons et Ahmad prépare une salade pour tout le monde. " +
      "Réponds-moi avant vendredi, car j'ai besoin de savoir combien de personnes viennent pour organiser la soirée.\n\n" +
      "Merci,\nFred",
    image: "/assets/expression/images-temp/ce-moyen-message-fred-anniversaire.webp",
    pool: [
      ceQ("fred-q1", "Pour qui est la fête ?", ["Sophie", "Fred", "Ahmad"], 0, "C'est l'anniversaire de _________.", "Sophie", ["sophie"]),
      ceQ("fred-q2", "Quel jour a lieu la fête ?", ["Dimanche", "Lundi", "Samedi"], 0, "La fête est _________.", "dimanche"),
      ceQ("fred-q3", "À quelle heure commence la fête ?", ["13 h", "15 h", "18 h"], 1, "La fête commence à ___ h.", "15", ["quinze"]),
      ceQ("fred-q4", "Que doit apporter la personne qui reçoit le message ?", ["Un dessert", "Les boissons", "Une salade"], 0, "Il faut apporter un _________.", "dessert"),
      ceQ("fred-q5", "Qui apporte les boissons ?", ["Fred", "Sophie", "Ahmad"], 0, "______ apporte les boissons.", "Fred", ["fred"]),
      ceQ("fred-q6", "Que prépare Ahmad ?", ["Une salade", "Un gâteau", "Du pain"], 0, "Ahmad prépare une _________.", "salade"),
      ceQ("fred-q7", "Où a lieu la fête ?", ["Dans un appartement", "Au restaurant", "Au parc"], 0, "La fête est dans un _________.", "appartement"),
      ceQ("fred-q8", "Avant quel jour faut-il répondre ?", ["Vendredi", "Dimanche", "Lundi"], 0, "Il faut répondre avant _________.", "vendredi"),
      ceQ("fred-q9", "Pourquoi faut-il répondre vite ?", ["Pour compter les invités", "Pour payer", "Pour réserver un bus"], 0, "Fred veut savoir combien de _________.", "personnes"),
      ceQ("fred-q10", "Dans quelle ville est l'appartement ?", ["À Lausanne", "À Berne", "À Bâle"], 0, "L'appartement est à _________.", "Lausanne", ["lausanne"]),
      ceQ("fred-q11", "Quel plat n'est pas mentionné ?", ["Une pizza", "Un dessert", "Une salade"], 0, "Le message ne parle pas de _______.", "pizza"),
      ceQ("fred-q12", "Qui organise la soirée ?", ["Fred", "Sophie seule", "Le voisin"], 0, "______ organise la soirée.", "Fred", ["fred"]),
    ],
  },
  {
    id: "julia-vacances",
    from: "julia@famille.ch",
    subject: "Vacances chez ma cousine",
    body:
      "Coucou !\n\n" +
      "Pendant les vacances de printemps, je vais passer une semaine chez ma cousine Carmen à Lugano. " +
      "Elle habite près du lac et elle veut me faire visiter la ville. Je pars en train vendredi matin et je rentre le dimanche suivant. " +
      "Est-ce que tu peux garder mon chat pendant mon absence ? Il a juste besoin d'eau et de croquettes matin et soir. " +
      "Je te laisse les clés mardi soir.\n\n" +
      "Bisous,\nJulia",
    image: "/assets/expression/images-temp/ce-moyen-message-julia-vacances.webp",
    pool: [
      ceQ("jul-q1", "Où va Julia pendant les vacances ?", ["Chez sa cousine", "À l'école", "Au travail"], 0, "Julia va chez sa _________.", "cousine"),
      ceQ("jul-q2", "Comment s'appelle sa cousine ?", ["Carmen", "Fatima", "Olena"], 0, "Sa cousine s'appelle _________.", "Carmen", ["carmen"]),
      ceQ("jul-q3", "Combien de temps reste-t-elle ?", ["Une semaine", "Un jour", "Un mois"], 0, "Elle reste une _________.", "semaine"),
      ceQ("jul-q4", "Quel moyen de transport utilise-t-elle ?", ["Le train", "L'avion", "Le bateau"], 0, "Elle part en _________.", "train"),
      ceQ("jul-q5", "Quel jour part-elle ?", ["Vendredi", "Lundi", "Mercredi"], 0, "Le départ est _________.", "vendredi"),
      ceQ("jul-q6", "Quel animal faut-il garder ?", ["Un chat", "Un chien", "Un poisson"], 0, "Il faut garder un _________.", "chat"),
      ceQ("jul-q7", "Que faut-il donner au chat ?", ["Eau et croquettes", "Du lait seulement", "De la viande"], 0, "Le chat a besoin d'eau et de _________.", "croquettes"),
      ceQ("jul-q8", "Combien de fois par jour nourrir le chat ?", ["Matin et soir", "Une fois", "Trois fois"], 0, "Il mange matin et _________.", "soir"),
      ceQ("jul-q9", "Quand Julia laisse-t-elle les clés ?", ["Mardi soir", "Vendredi matin", "Dimanche"], 0, "Les clés sont données _________ soir.", "mardi"),
      ceQ("jul-q10", "Où habite la cousine ?", ["Près du lac", "À la montagne", "À la campagne"], 0, "Carmen habite près du _________.", "lac"),
      ceQ("jul-q11", "Quand Julia rentre-t-elle ?", ["Le dimanche suivant", "Le vendredi", "Le lundi"], 0, "Elle rentre le _________ suivant.", "dimanche"),
      ceQ("jul-q12", "Quelle saison de vacances ?", ["Printemps", "Été", "Hiver"], 0, "Ce sont les vacances de _________.", "printemps"),
    ],
  },
  {
    id: "sophie-pizza",
    from: "sophie@amis.ch",
    subject: "Soirée pizza vendredi",
    body:
      "Salut tout le monde !\n\n" +
      "Vendredi soir, j'organise une soirée pizza chez moi à Genève. On commence à 19 h. " +
      "Chacun apporte une boisson ou une salade. Moi, je prépare les pizzas et Matteo s'occupe de la musique. " +
      "Si vous venez en tram, descendez à l'arrêt Florissant. Confirmez votre présence par message avant jeudi.\n\n" +
      "À vendredi !\nSophie",
    image: "/assets/expression/images-temp/ce-moyen-message-sophie-pizza.webp",
    pool: [
      ceQ("sop-q1", "Quel type de soirée organise Sophie ?", ["Une soirée pizza", "Un barbecue", "Un cours de cuisine"], 0, "C'est une soirée _________.", "pizza"),
      ceQ("sop-q2", "Quel jour a lieu la soirée ?", ["Vendredi", "Samedi", "Dimanche"], 0, "La soirée est _________.", "vendredi"),
      ceQ("sop-q3", "À quelle heure commence-t-elle ?", ["18 h", "19 h", "20 h"], 1, "On commence à ___ h.", "19", ["dix-neuf"]),
      ceQ("sop-q4", "Que doit apporter chaque invité ?", ["Une boisson ou une salade", "Une pizza", "De la musique"], 0, "Chacun apporte une boisson ou une _________.", "salade"),
      ceQ("sop-q5", "Qui prépare les pizzas ?", ["Sophie", "Matteo", "Les invités"], 0, "______ prépare les pizzas.", "Sophie", ["sophie"]),
      ceQ("sop-q6", "Que fait Matteo ?", ["Il s'occupe de la musique", "Il cuisine", "Il nettoie"], 0, "Matteo s'occupe de la _________.", "musique"),
      ceQ("sop-q7", "Quel arrêt de tram faut-il ?", ["Florissant", "Bel-Air", "Cornavin"], 0, "Descendez à l'arrêt _________.", "Florissant", ["florissant"]),
      ceQ("sop-q8", "Comment confirmer sa présence ?", ["Par message", "Par téléphone seulement", "En venant sans prévenir"], 0, "Il faut confirmer par _________.", "message"),
      ceQ("sop-q9", "Avant quel jour confirmer ?", ["Jeudi", "Vendredi", "Samedi"], 0, "Confirmez avant _________.", "jeudi"),
      ceQ("sop-q10", "Où a lieu la soirée ?", ["Chez Sophie à Genève", "Au restaurant", "À l'école"], 0, "La soirée est chez Sophie à _________.", "Genève", ["geneve", "genève"]),
      ceQ("sop-q11", "Quel transport est conseillé ?", ["Le tram", "La voiture seulement", "Le bateau"], 0, "On peut venir en _________.", "tram"),
      ceQ("sop-q12", "Sophie prépare-t-elle les boissons ?", ["Non, les invités en apportent", "Oui, toutes", "Oui, seulement de l'eau"], 0, "Les invités apportent les _________.", "boissons"),
    ],
  },
  {
    id: "karl-danse",
    from: "karl@ecole.ch",
    subject: "Fête de l'école de danse",
    body:
      "Chers parents et élèves,\n\n" +
      "Samedi 20 mars, l'école de danse de Fribourg organise sa fête annuelle à la salle communale. " +
      "Le spectacle commence à 14 h 30. Les enfants doivent arriver à 13 h 45 pour s'habiller. " +
      "Entrée : 10 francs pour les adultes, gratuite pour les enfants. " +
      "Après le spectacle, un goûter sera servi dans la salle voisine. Merci d'inscrire votre enfant sur la liste à l'accueil avant le 15 mars.\n\n" +
      "Karl, moniteur de danse",
    image: "/assets/expression/images-temp/ce-moyen-message-karl-danse.webp",
    pool: [
      ceQ("karl-q1", "Quel événement est annoncé ?", ["Une fête de danse", "Un match de foot", "Une vente de livres"], 0, "C'est la fête de _________.", "danse"),
      ceQ("karl-q2", "Où a lieu le spectacle ?", ["À la salle communale", "Au stade", "À la piscine"], 0, "Le spectacle est à la salle _________.", "communale"),
      ceQ("karl-q3", "À quelle heure commence le spectacle ?", ["13 h 45", "14 h 30", "16 h"], 1, "Le spectacle commence à 14 h ___.", "30", ["trente"]),
      ceQ("karl-q4", "À quelle heure les enfants doivent-ils arriver ?", ["13 h 45", "14 h 30", "15 h"], 0, "Les enfants arrivent à 13 h ___.", "45", ["quarante-cinq"]),
      ceQ("karl-q5", "Combien coûte l'entrée pour un adulte ?", ["5 francs", "10 francs", "20 francs"], 1, "L'entrée adulte coûte ___ francs.", "10", ["dix"]),
      ceQ("karl-q6", "L'entrée est-elle gratuite pour les enfants ?", ["Oui", "Non", "Seulement le matin"], 0, "Pour les enfants, c'est _________.", "gratuit", ["gratuite"]),
      ceQ("karl-q7", "Que se passe-t-il après le spectacle ?", ["Un goûter", "Un examen", "Une réunion"], 0, "Après le spectacle, il y a un _________.", "goûter", ["gouter"]),
      ceQ("karl-q8", "Avant quelle date faut-il inscrire l'enfant ?", ["Le 15 mars", "Le 20 mars", "Le 25 mars"], 0, "Inscription avant le ___ mars.", "15", ["quinze"]),
      ceQ("karl-q9", "Où faut-il inscrire l'enfant ?", ["À l'accueil", "Sur Internet seulement", "Par téléphone"], 0, "Inscription sur la liste à l'_________.", "accueil"),
      ceQ("karl-q10", "Pourquoi arriver tôt ?", ["Pour s'habiller", "Pour manger", "Pour dormir"], 0, "Les enfants arrivent tôt pour s'_________.", "habiller"),
      ceQ("karl-q11", "Dans quelle ville est l'école ?", ["À Fribourg", "À Zurich", "À Sion"], 0, "L'école est à _________.", "Fribourg", ["fribourg"]),
      ceQ("karl-q12", "Qui écrit le message ?", ["Le moniteur de danse", "Le directeur de l'école", "Un parent"], 0, "Le message vient du moniteur de _________.", "danse"),
    ],
  },
  {
    id: "stefanie-correspondante",
    from: "stefanie@ecole.ch",
    subject: "Correspondance avec l'Allemagne",
    body:
      "Chers élèves,\n\n" +
      "Cette année, notre classe participe à un échange de lettres avec une école de Munich. " +
      "Chaque élève aura une correspondante ou un correspondant allemand. " +
      "La première lettre, en français simple, doit être envoyée avant le 10 avril. " +
      "Écrivez au moins dix lignes : présentez-vous, parlez de votre famille et de vos loisirs. " +
      "Les enveloppes et les timbres sont à retirer au secrétariat.\n\n" +
      "Bonne rédaction !\nMme Stefanie",
    image: "/assets/expression/images-temp/ce-moyen-message-stefanie-correspondante.webp",
    pool: [
      ceQ("stef-q1", "Avec quel pays est l'échange ?", ["L'Allemagne", "L'Italie", "L'Espagne"], 0, "L'échange est avec l'_________.", "Allemagne", ["allemagne"]),
      ceQ("stef-q2", "Dans quelle ville est l'école partenaire ?", ["Munich", "Berlin", "Hambourg"], 0, "L'école est à _________.", "Munich", ["munich"]),
      ceQ("stef-q3", "Que reçoit chaque élève ?", ["Un correspondant", "Un ordinateur", "Un livre"], 0, "Chaque élève a un _________.", "correspondant"),
      ceQ("stef-q4", "Dans quelle langue écrire la première lettre ?", ["En français", "En allemand", "En anglais"], 0, "La lettre est en _________.", "français", ["francais"]),
      ceQ("stef-q5", "Avant quelle date envoyer la lettre ?", ["Le 10 avril", "Le 1er mai", "Le 20 juin"], 0, "Envoi avant le 10 _________.", "avril"),
      ceQ("stef-q6", "Combien de lignes minimum ?", ["Dix lignes", "Cinq lignes", "Vingt lignes"], 0, "Il faut au moins ___ lignes.", "dix", ["10"]),
      ceQ("stef-q7", "Que faut-il mentionner dans la lettre ?", ["Sa famille et ses loisirs", "Seulement l'école", "Le prix du timbre"], 0, "On parle de sa famille et de ses _________.", "loisirs"),
      ceQ("stef-q8", "Où retirer les enveloppes ?", ["Au secrétariat", "À la poste", "À la bibliothèque"], 0, "Les enveloppes sont au _________.", "secrétariat", ["secretariat"]),
      ceQ("stef-q9", "Que faut-il aussi retirer au secrétariat ?", ["Des timbres", "Des pizzas", "Des skis"], 0, "Il faut aussi des _________.", "timbres"),
      ceQ("stef-q10", "Quel type de projet est-ce ?", ["Un échange de lettres", "Un voyage", "Un examen"], 0, "C'est un échange de _________.", "lettres"),
      ceQ("stef-q11", "Qui écrit aux élèves ?", ["Mme Stefanie", "La correspondante", "Le directeur"], 0, "Le message est de Mme _________.", "Stefanie", ["stefanie"]),
      ceQ("stef-q12", "Faut-il se présenter dans la lettre ?", ["Oui", "Non", "Seulement en allemand"], 0, "Il faut se _________.", "présenter", ["presenter"]),
    ],
  },
  {
    id: "anabelle-album",
    from: "anabelle@voyage.ch",
    subject: "Album photos de Turquie",
    body:
      "Salut !\n\n" +
      "Je reviens de deux semaines en Turquie chez ma famille. J'ai pris beaucoup de photos ! " +
      "Samedi prochain, je vous invite chez moi à 17 h pour regarder l'album sur mon ordinateur et goûter des spécialités turques. " +
      "Apportez si possible une clé USB vide : je peux vous copier les photos que vous aimez. " +
      "Répondez-moi pour que je sache combien de baklavas préparer.\n\n" +
      "À bientôt,\nAnabelle",
    image: "/assets/expression/images-temp/ce-moyen-message-anabelle-album.webp",
    pool: [
      ceQ("ana-q1", "D'où revient Anabelle ?", ["De Turquie", "D'Italie", "De France"], 0, "Elle revient de _________.", "Turquie", ["turquie"]),
      ceQ("ana-q2", "Combien de temps est-elle partie ?", ["Deux semaines", "Deux jours", "Deux mois"], 0, "Le voyage dure ___ semaines.", "deux", ["2"]),
      ceQ("ana-q3", "Quel jour est l'invitation ?", ["Samedi prochain", "Lundi", "Mercredi"], 0, "L'invitation est _________ prochain.", "samedi"),
      ceQ("ana-q4", "À quelle heure ?", ["17 h", "12 h", "20 h"], 0, "Rendez-vous à ___ h.", "17", ["dix-sept"]),
      ceQ("ana-q5", "Que regardera-t-on ?", ["Des photos", "Un film", "La télévision"], 0, "On regardera des _________.", "photos"),
      ceQ("ana-q6", "Sur quel appareil ?", ["Sur l'ordinateur", "Sur le téléphone seulement", "Au cinéma"], 0, "Les photos sont sur l'_________.", "ordinateur"),
      ceQ("ana-q7", "Que peut-on goûter ?", ["Des spécialités turques", "De la pizza", "Du fromage suisse"], 0, "On goûte des spécialités _________.", "turques"),
      ceQ("ana-q8", "Que peut-on apporter ?", ["Une clé USB vide", "Un livre", "Un ski"], 0, "Apportez une clé _________ vide.", "USB", ["usb"]),
      ceQ("ana-q9", "Pourquoi apporter une clé USB ?", ["Pour copier des photos", "Pour écouter de la musique", "Pour téléphoner"], 0, "On peut _________ des photos.", "copier"),
      ceQ("ana-q10", "Pourquoi faut-il répondre ?", ["Pour préparer assez de baklavas", "Pour payer", "Pour réserver un hôtel"], 0, "Anabelle prépare des _________.", "baklavas"),
      ceQ("ana-q11", "Où a-t-elle passé ses vacances ?", ["Chez sa famille", "À l'hôtel seule", "À l'école"], 0, "Elle était chez sa _________.", "famille"),
      ceQ("ana-q12", "Quel objet pour partager les images ?", ["Une clé USB", "Un parapluie", "Un gâteau"], 0, "Une _________ USB est utile.", "clé", ["cle"]),
    ],
  },
  {
    id: "bibliotheque-emprunt",
    from: "bibliotheque@ville.ch",
    subject: "Prolongation d'emprunt",
    body:
      "Bonjour,\n\n" +
      "Vous avez emprunté trois livres à la bibliothèque municipale de Sion. " +
      "La date de retour prévue est le 18 avril. Si vous n'avez pas fini la lecture, vous pouvez prolonger l'emprunt une fois sur notre site ou par téléphone avant cette date. " +
      "Passé le 18 avril, une amende de 2 francs par livre et par semaine sera appliquée. " +
      "Pour prolonger, vous avez besoin de votre numéro de carte et du code reçu par courriel.\n\n" +
      "Cordialement,\nLa bibliothèque",
    image: "/assets/expression/images-temp/ce-moyen-message-bibliotheque-emprunt.webp",
    pool: [
      ceQ("bib-q1", "Combien de livres sont empruntés ?", ["Trois", "Deux", "Cinq"], 0, "Il y a ___ livres empruntés.", "trois", ["3"]),
      ceQ("bib-q2", "Quelle est la date de retour ?", ["Le 18 avril", "Le 8 avril", "Le 28 avril"], 0, "Retour prévu le 18 _________.", "avril"),
      ceQ("bib-q3", "Comment peut-on prolonger l'emprunt ?", ["Sur le site ou par téléphone", "Seulement en agence", "Par courrier uniquement"], 0, "Prolongation sur le site ou par _________.", "téléphone", ["telephone"]),
      ceQ("bib-q4", "Combien de fois peut-on prolonger ?", ["Une fois", "Trois fois", "Autant qu'on veut"], 0, "On peut prolonger ___ fois.", "une", ["1"]),
      ceQ("bib-q5", "Quelle amende après la date limite ?", ["2 francs par livre et par semaine", "10 francs par jour", "Aucune"], 0, "L'amende est de 2 francs par livre et par _________.", "semaine"),
      ceQ("bib-q6", "Que faut-il pour prolonger ?", ["Numéro de carte et code", "Un passeport", "De l'argent en liquide"], 0, "Il faut le numéro de _________ et le code.", "carte"),
      ceQ("bib-q7", "Où a lieu l'emprunt ?", ["Bibliothèque de Sion", "Bibliothèque de Genève", "École"], 0, "C'est la bibliothèque de _________.", "Sion", ["sion"]),
      ceQ("bib-q8", "Quand appliquer l'amende ?", ["Après le 18 avril", "Avant le 18 avril", "Jamais"], 0, "L'amende est après le 18 _________.", "avril"),
      ceQ("bib-q9", "Où a-t-on reçu le code ?", ["Par courriel", "Par SMS", "À la radio"], 0, "Le code est reçu par _________.", "courriel", ["email", "mail"]),
      ceQ("bib-q10", "Faut-il avoir fini la lecture pour prolonger ?", ["Non, on peut prolonger si pas fini", "Oui, obligatoire", "Interdit de prolonger"], 0, "On prolonge si on n'a pas _________ la lecture.", "fini", ["finie"]),
      ceQ("bib-q11", "Quel objet est emprunté ?", ["Des livres", "Des DVD seulement", "Des vélos"], 0, "On a emprunté des _________.", "livres"),
      ceQ("bib-q12", "Qui envoie ce message ?", ["La bibliothèque", "Un libraire", "Un professeur"], 0, "Le message vient de la _________.", "bibliothèque", ["bibliotheque"]),
    ],
  },
  {
    id: "musikenligne",
    from: "info@musikenligne.ch",
    subject: "Abonnements musique en ligne",
    body:
      "Bonjour,\n\n" +
      "Musikenligne propose trois formules pour écouter de la musique sans publicité :\n" +
      "– Formule Solo : 9,90 francs par mois, une seule personne.\n" +
      "– Formule Duo : 14,90 francs par mois, deux comptes.\n" +
      "– Formule Famille : 19,90 francs par mois, jusqu'à six personnes.\n\n" +
      "Vous pouvez essayer gratuitement pendant 14 jours. Pour annuler, rendez-vous dans les réglages de votre compte avant la fin de la période d'essai. " +
      "Le paiement se fait par carte bancaire ou Twint.\n\n" +
      "L'équipe Musikenligne",
    image: "/assets/expression/images-temp/ce-moyen-message-musikenligne.webp",
    pool: [
      ceQ("mus-q1", "Quel service est proposé ?", ["De la musique en ligne", "Des cours de danse", "Des livres"], 0, "C'est de la musique en _________.", "ligne"),
      ceQ("mus-q2", "Combien coûte la formule Solo ?", ["9,90 francs", "14,90 francs", "19,90 francs"], 0, "La formule Solo coûte 9,90 _________.", "francs"),
      ceQ("mus-q3", "Combien de personnes pour la formule Duo ?", ["Deux", "Une", "Six"], 0, "La formule Duo est pour ___ personnes.", "deux", ["2"]),
      ceQ("mus-q4", "Combien pour la formule Famille ?", ["Jusqu'à six personnes", "Deux personnes", "Une personne"], 0, "La famille : jusqu'à ___ personnes.", "six", ["6"]),
      ceQ("mus-q5", "Y a-t-il de la publicité ?", ["Non, sans publicité", "Oui, beaucoup", "Seulement le soir"], 0, "C'est sans _________.", "publicité", ["publicite"]),
      ceQ("mus-q6", "Combien de jours d'essai gratuit ?", ["14 jours", "7 jours", "30 jours"], 0, "L'essai dure ___ jours.", "14", ["quatorze"]),
      ceQ("mus-q7", "Comment annuler l'essai ?", ["Dans les réglages du compte", "Par courrier", "En allant au magasin"], 0, "Annulation dans les _________ du compte.", "réglages", ["reglages"]),
      ceQ("mus-q8", "Quand faut-il annuler pour ne pas payer ?", ["Avant la fin de l'essai", "Après un an", "Jamais"], 0, "Annuler avant la fin de la période d'_________.", "essai"),
      ceQ("mus-q9", "Quels moyens de paiement ?", ["Carte bancaire ou Twint", "Chèque seulement", "Espèces"], 0, "Paiement par carte bancaire ou _________.", "Twint", ["twint"]),
      ceQ("mus-q10", "Quelle formule pour une seule personne ?", ["Solo", "Duo", "Famille"], 0, "Une personne : formule _________.", "Solo", ["solo"]),
      ceQ("mus-q11", "Prix de la formule Famille ?", ["19,90 francs", "9,90 francs", "14,90 francs"], 0, "La famille coûte 19,90 _________.", "francs"),
      ceQ("mus-q12", "Quel avantage principal ?", ["Écouter sans publicité", "Acheter des CD", "Voir des films"], 0, "On écoute sans _________.", "publicité", ["publicite"]),
    ],
  },
];
