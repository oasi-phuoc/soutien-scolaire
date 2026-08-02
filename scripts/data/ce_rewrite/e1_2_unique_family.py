"""Unique E1.2 family CE scenarios for messages and e-mails."""
from generate_all_data import Q


def e1_2_messages():
    msgs = [
        {
            "text": """SMS de maman

Lina, pense au pain pour ce soir.
Papa rentre tard du garage, il est mécanicien.
Ta sœur Zoé met la table avec moi.
Mamie dort ici ce week-end, dans la petite chambre.
Nous sommes cinq pour le dîner.
Après le repas, on appelle ton oncle à Lyon.
Bisous, maman""",
            "questions": [
                Q("Qui écrit le SMS ?", "Maman", "La sœur", "Le voisin", "Bisous, _________", "maman", "La maman écrit le SMS.", 0),
                Q("Quel métier fait papa ?", "Mécanicien", "Vendeur", "Pilote", "Papa est _________.", "mécanicien", "Papa est mécanicien.", 0, prof=True),
                Q("Qui met la table ?", "Zoé", "Mamie", "L'oncle", "Ta sœur _________ met la table.", "Zoé", "Zoé met la table.", 0),
                Q("Qui dort à la maison ce week-end ?", "Mamie", "Le facteur", "La maîtresse", "_________ dort ici ce week-end.", "Mamie", "Mamie dort à la maison.", 0),
                Q("Combien de personnes dînent ?", "Cinq", "Trois", "Huit", "Nous sommes _________ pour le dîner.", "cinq", "Ils sont cinq pour le dîner.", 0),
                Q("Qui la famille appelle après le repas ?", "L'oncle à Lyon", "Le médecin", "Une amie à Paris", "On appelle ton _________ à Lyon.", "oncle", "La famille appelle l'oncle.", 0),
            ],
        },
        {
            "text": """Carte postale de vacances

Chers cousins,
Ici, à Nice, la mer est bleue et le soleil est chaud.
Je suis avec mon père, ma mère et mon petit frère Noé.
Maman lit sous le parasol ; elle est infirmière et elle se repose.
Papa apprend à Noé à nager près du bord.
Nous envoyons une photo à grand-père ce soir.
Je vous embrasse, Clara""",
            "questions": [
                Q("Où est Clara ?", "À Nice", "À Genève", "À Bruxelles", "Ici, à _________.", "Nice", "Clara est à Nice.", 0),
                Q("Avec qui Clara est-elle ?", "Ses parents et Noé", "Ses voisins", "Sa professeure", "Je suis avec mon père, ma mère et mon petit frère _________.", "Noé", "Clara est avec ses parents et son frère.", 0),
                Q("Quelle est la profession de maman ?", "Infirmière", "Coiffeuse", "Avocate", "Maman est _________.", "infirmière", "La maman est infirmière.", 0, prof=True),
                Q("Que fait maman ?", "Elle lit", "Elle cuisine", "Elle conduit", "Maman _________ sous le parasol.", "lit", "Maman lit sous le parasol.", 0),
                Q("Que fait papa avec Noé ?", "Il apprend à nager", "Il fait les courses", "Il dort", "Papa apprend à Noé à _________.", "nager", "Papa apprend à Noé à nager.", 0),
                Q("À qui envoient-ils une photo ?", "À grand-père", "Au dentiste", "Au directeur", "Nous envoyons une photo à _________.", "grand-père", "Ils envoient une photo à grand-père.", 0),
            ],
        },
        {
            "text": """Journal intime — mardi

Aujourd'hui, j'ai dessiné mon arbre de famille.
En haut, j'ai écrit les noms de mes grands-parents.
Mon père s'appelle Karim ; il est boulanger et il se lève très tôt.
Ma mère, Sara, travaille à la bibliothèque.
Mon frère Sami a neuf ans et il pose beaucoup de questions.
Moi, je suis la grande sœur.
Je colle le dessin dans mon cahier de français.""",
            "questions": [
                Q("Que dessine la personne ?", "Un arbre de famille", "Une carte de ville", "Un animal", "J'ai dessiné mon arbre de _________.", "famille", "La personne dessine un arbre de famille.", 0),
                Q("Où sont les noms des grands-parents ?", "En haut", "En bas", "Au dos", "_________, j'ai écrit les noms.", "En haut", "Les noms sont en haut.", 0),
                Q("Quelle est la profession du père ?", "Boulanger", "Plombier", "Dentiste", "Il est _________.", "boulanger", "Le père est boulanger.", 0, prof=True),
                Q("Comment s'appelle la mère ?", "Sara", "Sofia", "Lina", "Ma mère, _________, travaille à la bibliothèque.", "Sara", "La mère s'appelle Sara.", 0),
                Q("Quel âge a Sami ?", "Neuf ans", "Six ans", "Douze ans", "Sami a _________ ans.", "neuf", "Sami a neuf ans.", 0),
                Q("Où va le dessin ?", "Dans le cahier de français", "Sur la porte", "Dans la cuisine", "Je colle le dessin dans mon _________.", "cahier", "Le dessin va dans le cahier.", 0),
            ],
        },
        {
            "text": """Fiche scolaire — ma famille

Prénom : Amadou.
Je vis avec ma tante Awa depuis septembre.
Mes parents habitent à Dakar et téléphonent le dimanche.
Ma tante est secrétaire dans une école.
À la maison, il y a aussi mon cousin Malik, treize ans.
Nous parlons français pour les devoirs.
Personne à prévenir : tante Awa.""",
            "questions": [
                Q("Comment s'appelle l'élève ?", "Amadou", "Malik", "Omar", "Prénom : _________.", "Amadou", "L'élève s'appelle Amadou.", 0),
                Q("Avec qui vit Amadou ?", "Sa tante Awa", "Son grand-père", "Une voisine", "Je vis avec ma tante _________.", "Awa", "Amadou vit avec sa tante.", 0),
                Q("Où habitent ses parents ?", "À Dakar", "À Paris", "À Sion", "Mes parents habitent à _________.", "Dakar", "Ses parents habitent à Dakar.", 0),
                Q("Quand les parents téléphonent-ils ?", "Le dimanche", "Le mardi", "Jamais", "Ils téléphonent le _________.", "dimanche", "Ils téléphonent le dimanche.", 0),
                Q("Quelle est la profession de la tante ?", "Secrétaire", "Dentiste", "Pilote", "Ma tante est _________.", "secrétaire", "La tante est secrétaire.", 0, prof=True),
                Q("Quel âge a Malik ?", "Treize ans", "Sept ans", "Vingt ans", "Malik a _________ ans.", "treize", "Malik a treize ans.", 0),
            ],
        },
        {
            "text": """Annonce baby-sitter

Famille Martin cherche baby-sitter le mercredi après-midi.
Nous avons deux enfants : Émile, six ans, et Rose, trois ans.
Le père est chauffeur et part à 13 h.
La mère est vendeuse dans une boutique du centre.
La baby-sitter donne le goûter et lit une petite histoire.
Adresse : rue du Lac 8, Lausanne.
Contact : madame Martin.""",
            "questions": [
                Q("Que cherche la famille Martin ?", "Une baby-sitter", "Un professeur", "Un médecin", "Famille Martin cherche _________.", "baby-sitter", "La famille cherche une baby-sitter.", 0),
                Q("Quand faut-il venir ?", "Le mercredi après-midi", "Le lundi matin", "La nuit", "le mercredi _________.", "après-midi", "Il faut venir le mercredi après-midi.", 0),
                Q("Combien d'enfants y a-t-il ?", "Deux", "Quatre", "Un", "Nous avons _________ enfants.", "deux", "Il y a deux enfants.", 0),
                Q("Quel métier fait le père ?", "Chauffeur", "Boulanger", "Avocat", "Le père est _________.", "chauffeur", "Le père est chauffeur.", 0, prof=True),
                Q("Quelle est la profession de la mère ?", "Vendeuse", "Médecin", "Jardinière", "La mère est _________.", "vendeuse", "La mère est vendeuse.", 0, prof=True),
                Q("Où habite la famille ?", "Rue du Lac 8", "Rue des Fleurs 2", "Avenue du Midi 10", "Adresse : rue du Lac _________.", "8", "La famille habite rue du Lac 8.", 0),
            ],
        },
        {
            "text": """Photo WhatsApp — dimanche

Regardez la photo !
À gauche, c'est ma grand-mère avec son chapeau rouge.
Au centre, mon père porte le bébé, ma petite sœur Inès.
Ma mère prend la photo ; elle est coiffeuse.
Mon frère Léo fait une grimace derrière moi.
Nous sommes au parc pour l'anniversaire d'Inès.
Elle a un an aujourd'hui.""",
            "questions": [
                Q("Qui est à gauche sur la photo ?", "La grand-mère", "Le frère", "La mère", "À gauche, c'est ma _________.", "grand-mère", "La grand-mère est à gauche.", 0),
                Q("Qui est le bébé ?", "Inès", "Léo", "Rose", "ma petite sœur _________.", "Inès", "Le bébé est Inès.", 0),
                Q("Quelle est la profession de la mère ?", "Coiffeuse", "Infirmière", "Pharmacienne", "Ma mère est _________.", "coiffeuse", "La mère est coiffeuse.", 0, prof=True),
                Q("Qui fait une grimace ?", "Léo", "Le père", "La grand-mère", "Mon frère _________ fait une grimace.", "Léo", "Léo fait une grimace.", 0),
                Q("Où est la famille ?", "Au parc", "À la gare", "À l'hôpital", "Nous sommes au _________.", "parc", "La famille est au parc.", 0),
                Q("Quel âge a Inès aujourd'hui ?", "Un an", "Cinq ans", "Dix ans", "Elle a _________ an aujourd'hui.", "un", "Inès a un an.", 0),
            ],
        },
        {
            "text": """Blog — Ma maison bruyante

Chez nous, le matin commence avec beaucoup de bruit.
Papa, qui est facteur, sort son vélo jaune à sept heures.
Maman prépare du thé et aide ma sœur Nora à lire.
Mon frère Adam cherche toujours ses chaussures.
Notre chat Moka dort sur le sac d'école.
Nous sommes quatre enfants, alors la cuisine est petite.
Mais j'aime cette maison pleine de voix.""",
            "questions": [
                Q("Quand commence le bruit ?", "Le matin", "Le soir", "La nuit", "Chez nous, le _________ commence avec du bruit.", "matin", "Le bruit commence le matin.", 0),
                Q("Quelle est la profession de papa ?", "Facteur", "Mécanicien", "Serveur", "Papa est _________.", "facteur", "Papa est facteur.", 0, prof=True),
                Q("Quel objet papa sort-il ?", "Son vélo jaune", "Une valise", "Un piano", "Il sort son _________ jaune.", "vélo", "Papa sort son vélo jaune.", 0),
                Q("Qui apprend à lire ?", "Nora", "Adam", "Moka", "Maman aide ma sœur _________ à lire.", "Nora", "Nora apprend à lire.", 0),
                Q("Où dort le chat ?", "Sur le sac d'école", "Dans le jardin", "Sous la table", "Moka dort sur le sac d'_________.", "école", "Le chat dort sur le sac d'école.", 0),
                Q("Combien d'enfants y a-t-il ?", "Quatre", "Deux", "Sept", "Nous sommes _________ enfants.", "quatre", "Il y a quatre enfants.", 0),
            ],
        },
        {
            "text": """Message vocal transcrit

« Salut, c'est Hugo.
Je viens samedi avec ma famille.
Ma femme Claire est dentiste, mais elle ne travaille pas ce jour-là.
Notre fille Emma a onze ans et adore les jeux.
Mon père vient aussi ; il marche lentement.
Est-ce qu'il y a une chaise près de la table ?
Merci et à samedi ! »""",
            "questions": [
                Q("Qui laisse le message vocal ?", "Hugo", "Claire", "Emma", "Salut, c'est _________.", "Hugo", "Hugo laisse le message.", 0),
                Q("Quand vient la famille ?", "Samedi", "Lundi", "Jeudi", "Je viens _________ avec ma famille.", "samedi", "La famille vient samedi.", 0),
                Q("Quelle est la profession de Claire ?", "Dentiste", "Libraire", "Pilote", "Claire est _________.", "dentiste", "Claire est dentiste.", 0, prof=True),
                Q("Quel âge a Emma ?", "Onze ans", "Trois ans", "Dix-huit ans", "Emma a _________ ans.", "onze", "Emma a onze ans.", 0),
                Q("Qui marche lentement ?", "Le père de Hugo", "La fille", "La voisine", "Mon père marche _________.", "lentement", "Le père de Hugo marche lentement.", 0),
                Q("Que demande Hugo ?", "Une chaise près de la table", "Un billet de train", "Un chien", "une chaise près de la _________", "table", "Hugo demande une chaise.", 0),
            ],
        },
        {
            "text": """Invitation mariage

Avec joie, nous invitons toute la famille au mariage de Nadia et Marc.
La cérémonie est samedi à 11 h à la mairie.
Les parents de Nadia arrivent du Maroc vendredi soir.
La sœur de Marc chante une chanson simple.
Le grand-père porte les alliances.
Après la mairie, repas chez tante Leïla.
Réponse avant le 10 mai.""",
            "questions": [
                Q("Quel événement est annoncé ?", "Un mariage", "Un examen", "Une réunion", "au _________ de Nadia et Marc.", "mariage", "C'est un mariage.", 0),
                Q("Quand est la cérémonie ?", "Samedi à 11 h", "Lundi à 8 h", "Dimanche soir", "La cérémonie est samedi à _________ h.", "11", "La cérémonie est samedi à 11 h.", 0),
                Q("D'où arrivent les parents de Nadia ?", "Du Maroc", "Du Canada", "De Suisse", "arrivent du _________.", "Maroc", "Les parents arrivent du Maroc.", 0),
                Q("Qui chante une chanson ?", "La sœur de Marc", "Le grand-père", "Tante Leïla", "La sœur de _________ chante.", "Marc", "La sœur de Marc chante.", 0),
                Q("Qui porte les alliances ?", "Le grand-père", "Le bébé", "La voisine", "Le _________ porte les alliances.", "grand-père", "Le grand-père porte les alliances.", 0),
                Q("Où est le repas ?", "Chez tante Leïla", "Au cinéma", "À l'école", "repas chez tante _________.", "Leïla", "Le repas est chez tante Leïla.", 0),
            ],
        },
        {
            "text": """Profil réseau — Famille de Mateo

Bonjour, je suis Mateo.
Je partage ici des petites nouvelles de notre famille.
Mon mari Paul est architecte et dessine des maisons.
Notre fils Tom a cinq ans ; il aime les trains.
Ma belle-mère habite au troisième étage du même immeuble.
Le vendredi, nous mangeons tous ensemble une soupe.
Bienvenue sur mon profil familial.""",
            "questions": [
                Q("Qui écrit le profil ?", "Mateo", "Paul", "Tom", "je suis _________.", "Mateo", "Mateo écrit le profil.", 0),
                Q("Quelle est la profession de Paul ?", "Architecte", "Serveur", "Boucher", "Paul est _________.", "architecte", "Paul est architecte.", 0, prof=True),
                Q("Que dessine Paul ?", "Des maisons", "Des robes", "Des affiches", "Il dessine des _________.", "maisons", "Paul dessine des maisons.", 0),
                Q("Quel âge a Tom ?", "Cinq ans", "Dix ans", "Un an", "Tom a _________ ans.", "cinq", "Tom a cinq ans.", 0),
                Q("Où habite la belle-mère ?", "Au troisième étage", "À la campagne", "À l'hôtel", "au _________ étage.", "troisième", "Elle habite au troisième étage.", 0),
                Q("Quel jour la famille mange ensemble ?", "Le vendredi", "Le mardi", "Le dimanche matin", "Le _________, nous mangeons ensemble.", "vendredi", "La famille mange ensemble le vendredi.", 0),
            ],
        },
        {
            "text": """Note sur le frigo

Papi vient chercher Mila à 16 h.
Le goûter est dans le sac bleu.
Papa travaille au restaurant ; il est cuisinier ce soir.
Maman rentre après son cours de français.
N'oubliez pas d'appeler tante Sofia pour son anniversaire.
Le dessin de Mila est pour elle.
Merci, Lucas""",
            "questions": [
                Q("Qui vient chercher Mila ?", "Papi", "Papa", "Tante Sofia", "_________ vient chercher Mila.", "Papi", "Papi vient chercher Mila.", 0),
                Q("À quelle heure vient-il ?", "À 16 h", "À 8 h", "À midi", "à _________ h.", "16", "Il vient à 16 h.", 0),
                Q("Où est le goûter ?", "Dans le sac bleu", "Sur la table", "Dans la voiture", "Le goûter est dans le sac _________.", "bleu", "Le goûter est dans le sac bleu.", 0),
                Q("Quelle est la profession de papa ?", "Cuisinier", "Pharmacien", "Journaliste", "Papa est _________.", "cuisinier", "Papa est cuisinier.", 0, prof=True),
                Q("Qui a un anniversaire ?", "Tante Sofia", "Mila", "Lucas", "appelez tante _________ pour son anniversaire.", "Sofia", "Tante Sofia a un anniversaire.", 0),
                Q("Pour qui est le dessin ?", "Pour tante Sofia", "Pour le voisin", "Pour papa", "Le dessin de Mila est pour _________.", "elle", "Le dessin est pour tante Sofia.", 0),
            ],
        },
        {
            "text": """Lettre à grand-mère

Chère Mamie,
Dans notre nouvel appartement, j'ai une chambre verte.
Mon frère Noam dort dans la chambre près de la porte.
Maman est pharmacienne et connaît déjà la pharmacie du quartier.
Papa garde les plantes sur le balcon.
Dimanche, nous venons te voir avec un gâteau.
Je veux te montrer ma photo de classe.
Je t'embrasse, Elsa""",
            "questions": [
                Q("À qui est la lettre ?", "À Mamie", "À Noam", "Au directeur", "Chère _________.", "Mamie", "La lettre est pour Mamie.", 0),
                Q("Quelle couleur a la chambre d'Elsa ?", "Verte", "Bleue", "Rouge", "j'ai une chambre _________.", "verte", "La chambre est verte.", 0),
                Q("Où dort Noam ?", "Près de la porte", "Sur le balcon", "Dans la cuisine", "près de la _________.", "porte", "Noam dort près de la porte.", 0),
                Q("Quelle est la profession de maman ?", "Pharmacienne", "Peintre", "Factrice", "Maman est _________.", "pharmacienne", "Maman est pharmacienne.", 0, prof=True),
                Q("Que garde papa sur le balcon ?", "Les plantes", "Les valises", "Les livres", "Papa garde les _________.", "plantes", "Papa garde les plantes.", 0),
                Q("Quand la famille vient-elle voir Mamie ?", "Dimanche", "Jeudi", "Aujourd'hui", "_________, nous venons te voir.", "Dimanche", "La famille vient dimanche.", 0),
            ],
        },
        {
            "text": """Forum — Familles en Suisse

Bonjour, je suis Rania.
Je vis à Bienne avec mes deux fils et ma mère.
Mon fils aîné, Sami, est étudiant en informatique.
Le plus jeune, Yanis, a dix ans et joue au basket.
Ma mère ne parle pas allemand, alors je traduis souvent.
Le soir, chacun raconte sa journée en français.
Avez-vous aussi une famille bilingue ?""",
            "questions": [
                Q("Où vit Rania ?", "À Bienne", "À Marseille", "À Lugano", "Je vis à _________.", "Bienne", "Rania vit à Bienne.", 0),
                Q("Avec qui vit-elle ?", "Ses deux fils et sa mère", "Ses collègues", "Son voisin", "avec mes deux fils et ma _________.", "mère", "Elle vit avec ses fils et sa mère.", 0),
                Q("Que fait Sami ?", "Il est étudiant", "Il est pilote", "Il est bébé", "Sami est _________.", "étudiant", "Sami est étudiant.", 0),
                Q("Quel âge a Yanis ?", "Dix ans", "Quinze ans", "Deux ans", "Yanis a _________ ans.", "dix", "Yanis a dix ans.", 0),
                Q("Quelle langue la mère ne parle-t-elle pas ?", "Allemand", "Français", "Arabe", "Ma mère ne parle pas _________.", "allemand", "Elle ne parle pas allemand.", 0),
                Q("Quelle langue la famille utilise-t-elle le soir ?", "Le français", "Le japonais", "Le portugais", "en _________.", "français", "La famille parle français le soir.", 0),
            ],
        },
        {
            "text": """Message de la prof

Chers parents de Léo,
Demain, les élèves présentent une personne de leur famille.
Léo veut parler de son oncle Victor.
Victor est pompier à Genève et porte un casque rouge.
Merci d'apporter une petite photo de lui.
La présentation dure deux minutes.
Bien cordialement, Madame Perret""",
            "questions": [
                Q("Qui écrit le message ?", "Madame Perret", "Léo", "Victor", "Bien cordialement, Madame _________.", "Perret", "La prof écrit le message.", 0),
                Q("Que font les élèves demain ?", "Ils présentent une personne", "Ils partent en vacances", "Ils dorment", "les élèves présentent une _________.", "personne", "Les élèves présentent une personne.", 0),
                Q("De qui Léo veut-il parler ?", "De son oncle Victor", "De sa sœur", "De sa voisine", "parler de son oncle _________.", "Victor", "Léo veut parler de Victor.", 0),
                Q("Quelle est la profession de Victor ?", "Pompier", "Coiffeur", "Vendeur", "Victor est _________.", "pompier", "Victor est pompier.", 0, prof=True),
                Q("Quelle photo faut-il apporter ?", "Une photo de Victor", "Une photo de l'école", "Une photo du chien", "une petite photo de _________.", "lui", "Il faut apporter une photo de Victor.", 0),
                Q("Combien de temps dure la présentation ?", "Deux minutes", "Une heure", "Dix secondes", "La présentation dure _________ minutes.", "deux", "La présentation dure deux minutes.", 0),
            ],
        },
        {
            "text": """Carte de vœux

Bonne année, chère tante Maria !
Chez nous, tout le monde va bien.
Papa apprend le français avec une application.
Maman ouvre bientôt son petit salon de coiffure.
Les jumeaux, Ali et Nora, entrent à l'école lundi.
Nous pensons souvent à toi en Italie.
Gros bisous de toute la famille.""",
            "questions": [
                Q("À qui est la carte ?", "À tante Maria", "À Ali", "Au professeur", "chère tante _________", "Maria", "La carte est pour tante Maria.", 0),
                Q("Que fait papa ?", "Il apprend le français", "Il répare une voiture", "Il vend la maison", "Papa apprend le _________.", "français", "Papa apprend le français.", 0),
                Q("Quelle est la profession de maman ?", "Coiffeuse", "Mécanicienne", "Serveuse", "salon de _________.", "coiffure", "Maman est coiffeuse.", 0, prof=True),
                Q("Comment s'appellent les jumeaux ?", "Ali et Nora", "Léo et Rose", "Sam et Tom", "Les jumeaux, _________ et Nora.", "Ali", "Les jumeaux s'appellent Ali et Nora.", 0),
                Q("Quand les jumeaux entrent-ils à l'école ?", "Lundi", "Vendredi", "En été", "à l'école _________.", "lundi", "Ils entrent à l'école lundi.", 0),
                Q("Où habite tante Maria ?", "En Italie", "En Espagne", "En Suisse", "à toi en _________.", "Italie", "Tante Maria habite en Italie.", 0),
            ],
        },
        {
            "text": """Règlement colonie — chambre 4

Dans la chambre 4, il y a trois cousins : Yan, Malo et Sami.
Yan téléphone à ses parents après le dîner.
Malo écrit une carte à sa petite sœur.
Sami garde la photo de sa mère sous son oreiller.
Les familles peuvent appeler entre 18 h et 19 h.
Après 21 h, les enfants lisent en silence.
Merci de respecter le calme.""",
            "questions": [
                Q("Combien de cousins sont dans la chambre 4 ?", "Trois", "Deux", "Six", "il y a _________ cousins.", "trois", "Il y a trois cousins.", 0),
                Q("Qui téléphone à ses parents ?", "Yan", "Malo", "Sami", "_________ téléphone à ses parents.", "Yan", "Yan téléphone à ses parents.", 0),
                Q("À qui Malo écrit-il ?", "À sa petite sœur", "À son père", "Au cuisinier", "à sa petite _________.", "sœur", "Malo écrit à sa petite sœur.", 0),
                Q("Que garde Sami sous son oreiller ?", "La photo de sa mère", "Un téléphone", "Des clés", "la photo de sa _________.", "mère", "Sami garde la photo de sa mère.", 0),
                Q("Quand les familles peuvent-elles appeler ?", "Entre 18 h et 19 h", "Le matin seulement", "Après minuit", "entre _________ h et 19 h.", "18", "Les familles peuvent appeler entre 18 h et 19 h.", 0),
                Q("Que font les enfants après 21 h ?", "Ils lisent en silence", "Ils jouent au ballon", "Ils téléphonent", "les enfants lisent en _________.", "silence", "Les enfants lisent en silence.", 0),
            ],
        },
        {
            "text": """Affiche — Fête des mères

Dimanche, salle du quartier : grande fête des mères.
Les enfants chantent à 15 h.
Les pères préparent le café et les jus.
Madame Rossi, boulangère, apporte deux tartes.
Une table est réservée pour les grands-mères.
Apportez une photo de famille pour le mur des souvenirs.
Entrée gratuite pour tous.""",
            "questions": [
                Q("Quel événement annonce l'affiche ?", "La fête des mères", "Un match", "Une visite médicale", "grande fête des _________.", "mères", "L'affiche annonce la fête des mères.", 0),
                Q("Où a lieu la fête ?", "Dans la salle du quartier", "À la gare", "Au zoo", "salle du _________.", "quartier", "La fête est dans la salle du quartier.", 0),
                Q("À quelle heure chantent les enfants ?", "À 15 h", "À 9 h", "À 22 h", "Les enfants chantent à _________ h.", "15", "Les enfants chantent à 15 h.", 0),
                Q("Que préparent les pères ?", "Le café et les jus", "Les devoirs", "Les billets", "préparent le _________ et les jus.", "café", "Les pères préparent le café et les jus.", 0),
                Q("Quelle est la profession de Madame Rossi ?", "Boulangère", "Dentiste", "Secrétaire", "Madame Rossi est _________.", "boulangère", "Madame Rossi est boulangère.", 0, prof=True),
                Q("Que faut-il apporter ?", "Une photo de famille", "Un passeport", "Un manteau rouge", "Apportez une photo de _________.", "famille", "Il faut apporter une photo de famille.", 0),
            ],
        },
        {
            "text": """Transcription d'appel

— Allô, papa ? C'est Ana.
— Oui, ma fille, tout va bien ?
— Oui. Le train arrive à 18 h 20.
— Ton frère Diego vient aussi à la gare.
— Super. Maman travaille encore à l'hôpital ; elle est médecin.
— Elle prépare le dîner après son service.
— Alors à tout à l'heure !""",
            "questions": [
                Q("Qui appelle papa ?", "Ana", "Diego", "Maman", "C'est _________.", "Ana", "Ana appelle papa.", 0),
                Q("À quelle heure arrive le train ?", "À 18 h 20", "À 12 h", "À 20 h 18", "Le train arrive à 18 h _________.", "20", "Le train arrive à 18 h 20.", 0),
                Q("Qui vient à la gare ?", "Diego", "La tante", "Le médecin", "Ton frère _________ vient aussi.", "Diego", "Diego vient à la gare.", 0),
                Q("Où travaille maman ?", "À l'hôpital", "À la poste", "À la bibliothèque", "Maman travaille à l'_________.", "hôpital", "Maman travaille à l'hôpital.", 0),
                Q("Quelle est la profession de maman ?", "Médecin", "Libraire", "Vendeuse", "Elle est _________.", "médecin", "Maman est médecin.", 0, prof=True),
                Q("Que prépare maman après son service ?", "Le dîner", "Une valise", "Une leçon", "Elle prépare le _________.", "dîner", "Maman prépare le dîner.", 0),
            ],
        },
        {
            "text": """Témoignage podcast — Une famille, deux langues

Je m'appelle Julie et je parle français avec mon père.
Avec ma mère, je parle espagnol.
Mon père est journaliste ; il pose beaucoup de questions.
Ma mère est jardinière et connaît les noms des fleurs.
Ma petite sœur Lola mélange les deux langues.
Le dimanche, nous appelons les cousins à Madrid.
Chez nous, les mots voyagent.""",
            "questions": [
                Q("Avec qui Julie parle-t-elle français ?", "Avec son père", "Avec sa voisine", "Avec Lola", "avec mon _________.", "père", "Julie parle français avec son père.", 0),
                Q("Quelle langue parle-t-elle avec sa mère ?", "Espagnol", "Allemand", "Italien", "je parle _________.", "espagnol", "Elle parle espagnol avec sa mère.", 0),
                Q("Quelle est la profession du père ?", "Journaliste", "Pompier", "Serveur", "Mon père est _________.", "journaliste", "Le père est journaliste.", 0, prof=True),
                Q("Quelle est la profession de la mère ?", "Jardinière", "Avocate", "Pharmacienne", "Ma mère est _________.", "jardinière", "La mère est jardinière.", 0, prof=True),
                Q("Qui mélange les deux langues ?", "Lola", "Le père", "Les cousins", "Ma petite sœur _________ mélange.", "Lola", "Lola mélange les deux langues.", 0),
                Q("Où habitent les cousins ?", "À Madrid", "À Rome", "À Lausanne", "les cousins à _________.", "Madrid", "Les cousins habitent à Madrid.", 0),
            ],
        },
        {
            "text": """Petite annonce — colocation avec famille

Chambre libre chez la famille Besson à Fribourg.
Nous sommes un couple avec une fille de huit ans.
Le père est menuisier et répare souvent des meubles.
La mère est professeure de français.
Nous cherchons une étudiante calme pour six mois.
Repas possible avec la famille le soir.
Écrire à famille.besson@mail.ch.""",
            "questions": [
                Q("Où est la chambre libre ?", "À Fribourg", "À Nyon", "À Berne", "à _________.", "Fribourg", "La chambre est à Fribourg.", 0),
                Q("Quel âge a la fille ?", "Huit ans", "Trois ans", "Seize ans", "une fille de _________ ans.", "huit", "La fille a huit ans.", 0),
                Q("Quelle est la profession du père ?", "Menuisier", "Pilote", "Vétérinaire", "Le père est _________.", "menuisier", "Le père est menuisier.", 0, prof=True),
                Q("Quelle est la profession de la mère ?", "Professeure", "Dentiste", "Coiffeuse", "La mère est _________.", "professeure", "La mère est professeure.", 0, prof=True),
                Q("Qui cherche la famille ?", "Une étudiante calme", "Un bébé", "Un médecin", "Nous cherchons une étudiante _________.", "calme", "La famille cherche une étudiante calme.", 0),
                Q("Quand le repas est-il possible avec la famille ?", "Le soir", "Le matin seulement", "Jamais", "Repas possible avec la famille le _________.", "soir", "Le repas est possible le soir.", 0),
            ],
        },
    ]
    assert len(msgs) == 20
    return msgs


def e1_2_emails():
    emails = [
        {
            "text": """De : Amina Benali
Objet : Avant ton arrivée

Bonjour Léa,

Tu vas dormir chez nous vendredi.
Ma mère prépare une chambre pour toi.
Mon père est chauffeur et il peut venir à la gare.
Mon petit frère Sami a sept ans ; il aime les cartes.
Le soir, nous mangeons avec ma grand-mère.
Elle raconte toujours une histoire courte.

À bientôt,
Amina""",
            "questions": [
                Q("Quand Léa dort-elle chez Amina ?", "Vendredi", "Lundi", "Dimanche", "chez nous _________.", "vendredi", "Léa dort chez Amina vendredi.", 0),
                Q("Qui prépare une chambre ?", "La mère", "Sami", "La grand-mère", "Ma mère prépare une _________.", "chambre", "La mère prépare une chambre.", 0),
                Q("Quelle est la profession du père ?", "Chauffeur", "Pompier", "Avocat", "Mon père est _________.", "chauffeur", "Le père est chauffeur.", 0, prof=True),
                Q("Où le père peut-il venir ?", "À la gare", "À l'école", "Au cinéma", "venir à la _________.", "gare", "Le père peut venir à la gare.", 0),
                Q("Quel âge a Sami ?", "Sept ans", "Douze ans", "Deux ans", "Sami a _________ ans.", "sept", "Sami a sept ans.", 0),
                Q("Qui raconte une histoire ?", "La grand-mère", "La mère", "Léa", "Elle raconte toujours une _________.", "histoire", "La grand-mère raconte une histoire.", 0),
            ],
        },
        {
            "text": """De : Lucas Martin
Objet : Mon dessin pour le cours

Bonjour Madame,

Pour jeudi, je prépare un dessin de ma famille.
Je mets mon père en bleu, car il travaille comme infirmier.
Ma mère est architecte ; je dessine une maison près d'elle.
Ma sœur Alice a quinze ans et porte des lunettes.
Notre chien Pico est aussi sur le dessin.
Je peux présenter le dessin en deux minutes.

Cordialement,
Lucas Martin""",
            "questions": [
                Q("Que prépare Lucas ?", "Un dessin de sa famille", "Un gâteau", "Une chanson", "un dessin de ma _________.", "famille", "Lucas prépare un dessin de sa famille.", 0),
                Q("Pour quel jour ?", "Jeudi", "Mardi", "Samedi", "Pour _________.", "jeudi", "Le dessin est pour jeudi.", 0),
                Q("Quelle est la profession du père ?", "Infirmier", "Vendeur", "Pilote", "il travaille comme _________.", "infirmier", "Le père est infirmier.", 0, prof=True),
                Q("Quelle est la profession de la mère ?", "Architecte", "Serveuse", "Dentiste", "Ma mère est _________.", "architecte", "La mère est architecte.", 0, prof=True),
                Q("Quel âge a Alice ?", "Quinze ans", "Huit ans", "Vingt ans", "Alice a _________ ans.", "quinze", "Alice a quinze ans.", 0),
                Q("Combien de temps dure la présentation ?", "Deux minutes", "Dix minutes", "Une heure", "en _________ minutes.", "deux", "La présentation dure deux minutes.", 0),
            ],
        },
        {
            "text": """De : Nina Rossi
Objet : Repas de dimanche

Bonjour Marco,

Dimanche, toute ma famille vient à midi.
Mon oncle Paolo apporte les pâtes.
Ma tante Lucia est boulangère ; elle fait le dessert.
Mes parents mettent la grande table dans le jardin.
Nous sommes neuf avec les cousins.
Tu peux venir aussi si tu veux.

Bises,
Nina""",
            "questions": [
                Q("Quand a lieu le repas ?", "Dimanche à midi", "Vendredi soir", "Lundi matin", "Dimanche, toute ma famille vient à _________.", "midi", "Le repas a lieu dimanche à midi.", 0),
                Q("Qui apporte les pâtes ?", "L'oncle Paolo", "La tante Lucia", "Marco", "Mon oncle _________ apporte les pâtes.", "Paolo", "L'oncle Paolo apporte les pâtes.", 0),
                Q("Quelle est la profession de Lucia ?", "Boulangère", "Secrétaire", "Dentiste", "Ma tante Lucia est _________.", "boulangère", "Lucia est boulangère.", 0, prof=True),
                Q("Que fait Lucia ?", "Le dessert", "Les devoirs", "Le café", "elle fait le _________.", "dessert", "Lucia fait le dessert.", 0),
                Q("Où les parents mettent-ils la table ?", "Dans le jardin", "Dans la rue", "Dans la chambre", "la grande table dans le _________.", "jardin", "La table est dans le jardin.", 0),
                Q("Combien sont-ils avec les cousins ?", "Neuf", "Quatre", "Deux", "Nous sommes _________ avec les cousins.", "neuf", "Ils sont neuf avec les cousins.", 0),
            ],
        },
        {
            "text": """De : Paul Garcia
Objet : La photo jointe

Bonjour,

Je vous envoie la photo pour le dossier.
Au premier rang, il y a mes deux filles.
Derrière elles, mon père porte une veste noire.
Ma mère est vétérinaire et tient notre chat.
Mon mari David sourit à droite.
Nous habitons tous près du lac Léman.

Cordialement,
Paul Garcia""",
            "questions": [
                Q("Qu'envoie Paul ?", "Une photo", "Un billet", "Un plan", "Je vous envoie la _________.", "photo", "Paul envoie une photo.", 0),
                Q("Qui est au premier rang ?", "Ses deux filles", "Son père", "Le chat seul", "mes deux _________.", "filles", "Les deux filles sont au premier rang.", 0),
                Q("Que porte le père ?", "Une veste noire", "Un chapeau rouge", "Un sac bleu", "une veste _________.", "noire", "Le père porte une veste noire.", 0),
                Q("Quelle est la profession de la mère ?", "Vétérinaire", "Coiffeuse", "Mécanicienne", "Ma mère est _________.", "vétérinaire", "La mère est vétérinaire.", 0, prof=True),
                Q("Où est David sur la photo ?", "À droite", "À gauche", "Au centre", "David sourit à _________.", "droite", "David est à droite.", 0),
                Q("Près de quel lac habitent-ils ?", "Le lac Léman", "Le lac Majeur", "Le lac de Côme", "près du lac _________.", "Léman", "Ils habitent près du lac Léman.", 0),
            ],
        },
        {
            "text": """De : Sara Kim
Objet : Pour la colonie

Bonjour,

Ma fille Mina part en colonie lundi.
Elle a besoin d'appeler son père chaque soir.
Son père est pharmacien et travaille tard.
Sa grand-mère peut répondre si le père est absent.
Mina garde une photo de son frère dans sa valise.
Merci de noter le numéro de la famille.

Cordialement,
Sara Kim""",
            "questions": [
                Q("Qui part en colonie ?", "Mina", "Sara", "La grand-mère", "Ma fille _________ part.", "Mina", "Mina part en colonie.", 0),
                Q("Quand part-elle ?", "Lundi", "Mercredi", "Dimanche", "part en colonie _________.", "lundi", "Elle part lundi.", 0),
                Q("Qui Mina veut-elle appeler ?", "Son père", "Son professeur", "Un cousin", "appeler son _________ chaque soir.", "père", "Mina veut appeler son père.", 0),
                Q("Quelle est la profession du père ?", "Pharmacien", "Serveur", "Peintre", "Son père est _________.", "pharmacien", "Le père est pharmacien.", 0, prof=True),
                Q("Qui peut répondre si le père est absent ?", "La grand-mère", "Le frère", "La directrice", "Sa _________ peut répondre.", "grand-mère", "La grand-mère peut répondre.", 0),
                Q("Que garde Mina dans sa valise ?", "Une photo de son frère", "Un gâteau", "Un ballon", "une photo de son _________.", "frère", "Mina garde une photo de son frère.", 0),
            ],
        },
        {
            "text": """De : Tom Weber
Objet : Changement d'adresse

Bonjour Madame,

Notre famille habite maintenant rue des Roses 12.
Je vis avec ma mère, mon beau-père et ma sœur Mia.
Ma mère est serveuse dans un café.
Mon beau-père est électricien.
Mia a quatre ans et commence l'école en août.
Merci d'envoyer les lettres à la nouvelle adresse.

Cordialement,
Tom Weber""",
            "questions": [
                Q("Quelle est la nouvelle adresse ?", "Rue des Roses 12", "Rue du Lac 5", "Avenue Gare 8", "rue des Roses _________.", "12", "La nouvelle adresse est rue des Roses 12.", 0),
                Q("Avec qui Tom vit-il ?", "Sa mère, son beau-père et Mia", "Ses grands-parents", "Deux amis", "avec ma mère, mon beau-père et ma sœur _________.", "Mia", "Tom vit avec sa mère, son beau-père et Mia.", 0),
                Q("Quelle est la profession de la mère ?", "Serveuse", "Architecte", "Pompier", "Ma mère est _________.", "serveuse", "La mère est serveuse.", 0, prof=True),
                Q("Quelle est la profession du beau-père ?", "Électricien", "Libraire", "Médecin", "Mon beau-père est _________.", "électricien", "Le beau-père est électricien.", 0, prof=True),
                Q("Quel âge a Mia ?", "Quatre ans", "Dix ans", "Un an", "Mia a _________ ans.", "quatre", "Mia a quatre ans.", 0),
                Q("Quand Mia commence-t-elle l'école ?", "En août", "En janvier", "Demain", "commence l'école en _________.", "août", "Mia commence l'école en août.", 0),
            ],
        },
        {
            "text": """De : Emma Dubois
Objet : Question pour le livre de classe

Bonjour Monsieur,

Vous demandez une phrase sur notre famille.
J'écris : « Chez moi, on aime lire ensemble. »
Mon père est libraire et rapporte souvent des albums.
Ma mère raconte une histoire à mon frère Jules.
Jules a six ans et lit les titres tout seul.
Est-ce que cette phrase est assez simple ?

Cordialement,
Emma Dubois""",
            "questions": [
                Q("Que demande le professeur ?", "Une phrase sur la famille", "Une facture", "Une recette", "une phrase sur notre _________.", "famille", "Le professeur demande une phrase.", 0),
                Q("Qu'aime faire la famille ?", "Lire ensemble", "Courir vite", "Regarder le train", "on aime _________ ensemble.", "lire", "La famille aime lire ensemble.", 0),
                Q("Quelle est la profession du père ?", "Libraire", "Boucher", "Chauffeur", "Mon père est _________.", "libraire", "Le père est libraire.", 0, prof=True),
                Q("Que rapporte le père ?", "Des albums", "Des vélos", "Des fleurs", "rapporte souvent des _________.", "albums", "Le père rapporte des albums.", 0),
                Q("À qui la mère raconte-t-elle une histoire ?", "À Jules", "Au voisin", "Au professeur", "à mon frère _________.", "Jules", "La mère raconte une histoire à Jules.", 0),
                Q("Quel âge a Jules ?", "Six ans", "Onze ans", "Trois ans", "Jules a _________ ans.", "six", "Jules a six ans.", 0),
            ],
        },
        {
            "text": """De : Hugo Blanc
Objet : Absence de ma sœur

Bonjour,

Ma sœur Léonie ne vient pas au cours aujourd'hui.
Elle accompagne notre mère chez le médecin.
Notre père est policier et il travaille de nuit.
Je donne les devoirs à Léonie ce soir.
Nous habitons dans le même immeuble que notre tante.
Merci pour votre compréhension.

Cordialement,
Hugo Blanc""",
            "questions": [
                Q("Qui est absente du cours ?", "Léonie", "La mère", "La tante", "Ma sœur _________ ne vient pas.", "Léonie", "Léonie est absente.", 0),
                Q("Pourquoi Léonie est-elle absente ?", "Elle accompagne sa mère", "Elle part en vacances", "Elle dort", "Elle accompagne notre _________.", "mère", "Léonie accompagne sa mère.", 0),
                Q("Où va la mère ?", "Chez le médecin", "À la plage", "Au théâtre", "chez le _________.", "médecin", "La mère va chez le médecin.", 0),
                Q("Quelle est la profession du père ?", "Policier", "Coiffeur", "Boulanger", "Notre père est _________.", "policier", "Le père est policier.", 0, prof=True),
                Q("Quand Hugo donne-t-il les devoirs ?", "Ce soir", "Demain matin", "Dimanche", "ce _________.", "soir", "Hugo donne les devoirs ce soir.", 0),
                Q("Qui habite dans le même immeuble ?", "La tante", "Le directeur", "Un cousin à Rome", "notre _________.", "tante", "La tante habite dans le même immeuble.", 0),
            ],
        },
        {
            "text": """De : Léa Costa
Objet : Anniversaire de grand-père

Bonjour les cousins,

Grand-père a quatre-vingts ans samedi.
Nous préparons une petite fête dans le salon.
Mon père fait la soupe, car il est cuisinier.
Ma mère choisit les photos de famille.
Chaque petit-enfant apporte un dessin.
La fête commence à 17 h.

Bises,
Léa""",
            "questions": [
                Q("Qui a un anniversaire ?", "Grand-père", "La mère", "Un cousin", "_________ a quatre-vingts ans.", "Grand-père", "Grand-père a un anniversaire.", 0),
                Q("Quel âge a grand-père ?", "Quatre-vingts ans", "Quarante ans", "Dix ans", "a _________ ans samedi.", "quatre-vingts", "Grand-père a quatre-vingts ans.", 0),
                Q("Où est la fête ?", "Dans le salon", "Dans la rue", "À la piscine", "dans le _________.", "salon", "La fête est dans le salon.", 0),
                Q("Quelle est la profession du père ?", "Cuisinier", "Facteur", "Avocat", "il est _________.", "cuisinier", "Le père est cuisinier.", 0, prof=True),
                Q("Que choisit la mère ?", "Les photos de famille", "Les billets", "Les chaussures", "les photos de _________.", "famille", "La mère choisit les photos.", 0),
                Q("À quelle heure commence la fête ?", "À 17 h", "À 8 h", "À midi", "commence à _________ h.", "17", "La fête commence à 17 h.", 0),
            ],
        },
        {
            "text": """De : Marc Singh
Objet : Au sujet du bébé

Bonjour Madame Morel,

Notre bébé Ravi vient avec nous au rendez-vous.
Il a six mois et dort souvent le matin.
Ma femme Maya est ingénieure et arrive de son travail.
Moi, je garde le sac avec les biberons.
Notre fille Tara reste chez sa grand-mère.
Merci de prévoir un endroit calme.

Cordialement,
Marc Singh""",
            "questions": [
                Q("Qui vient au rendez-vous ?", "Le bébé Ravi", "La grand-mère", "Tara seule", "Notre bébé _________ vient.", "Ravi", "Le bébé Ravi vient au rendez-vous.", 0),
                Q("Quel âge a Ravi ?", "Six mois", "Deux ans", "Neuf ans", "Il a six _________.", "mois", "Ravi a six mois.", 0),
                Q("Quand Ravi dort-il souvent ?", "Le matin", "Le soir", "À midi seulement", "dort souvent le _________.", "matin", "Ravi dort souvent le matin.", 0),
                Q("Quelle est la profession de Maya ?", "Ingénieure", "Vendeuse", "Dentiste", "Maya est _________.", "ingénieure", "Maya est ingénieure.", 0, prof=True),
                Q("Que garde Marc ?", "Le sac avec les biberons", "Les clés de l'école", "Une guitare", "le sac avec les _________.", "biberons", "Marc garde le sac avec les biberons.", 0),
                Q("Où reste Tara ?", "Chez sa grand-mère", "Au restaurant", "À l'aéroport", "chez sa _________.", "grand-mère", "Tara reste chez sa grand-mère.", 0),
            ],
        },
        {
            "text": """De : Julie Petit
Objet : Pour l'affiche du quartier

Bonjour,

Je propose une affiche avec les familles de notre immeuble.
Au rez-de-chaussée, il y a la famille Lopez avec trois enfants.
Madame Lopez est peintre et donne un atelier samedi.
Au deuxième étage, mon frère et moi aidons à installer les tables.
Notre mère prépare du thé à la menthe.
Le but est de mieux connaître les voisins.

Cordialement,
Julie Petit""",
            "questions": [
                Q("Que propose Julie ?", "Une affiche", "Un examen", "Un voyage", "Je propose une _________.", "affiche", "Julie propose une affiche.", 0),
                Q("Où habite la famille Lopez ?", "Au rez-de-chaussée", "Au cinquième étage", "Dans une ferme", "Au _________.", "rez-de-chaussée", "La famille Lopez habite au rez-de-chaussée.", 0),
                Q("Combien d'enfants ont les Lopez ?", "Trois", "Un", "Huit", "avec _________ enfants.", "trois", "Les Lopez ont trois enfants.", 0),
                Q("Quelle est la profession de Madame Lopez ?", "Peintre", "Boulangère", "Infirmière", "Madame Lopez est _________.", "peintre", "Madame Lopez est peintre.", 0, prof=True),
                Q("Qui installe les tables ?", "Julie et son frère", "Les voisins seuls", "Madame Lopez", "mon frère et moi aidons à installer les _________.", "tables", "Julie et son frère installent les tables.", 0),
                Q("Que prépare la mère ?", "Du thé à la menthe", "Une pizza", "Une soupe", "du thé à la _________.", "menthe", "La mère prépare du thé à la menthe.", 0),
            ],
        },
        {
            "text": """De : Omar Hassan
Objet : Nouvelle pour la famille

Bonjour tante Nadia,

Nous avons une bonne nouvelle.
Ma sœur Samira se marie en juin.
Son futur mari est jardinier dans un grand parc.
Papa écrit les invitations à la main.
Maman cherche une robe bleue pour la fête.
Toute la famille parle déjà de musique et de gâteau.

Affectueusement,
Omar""",
            "questions": [
                Q("Qui reçoit l'e-mail ?", "Tante Nadia", "Samira", "Papa", "Bonjour tante _________.", "Nadia", "L'e-mail est pour tante Nadia.", 0),
                Q("Qui se marie en juin ?", "Samira", "Omar", "La mère", "Ma sœur _________ se marie.", "Samira", "Samira se marie en juin.", 0),
                Q("Quelle est la profession du futur mari ?", "Jardinier", "Médecin", "Pilote", "Son futur mari est _________.", "jardinier", "Le futur mari est jardinier.", 0, prof=True),
                Q("Que fait papa ?", "Il écrit les invitations", "Il chante", "Il conduit un bus", "Papa écrit les _________.", "invitations", "Papa écrit les invitations.", 0),
                Q("Quelle couleur de robe cherche maman ?", "Bleue", "Rouge", "Noire", "une robe _________.", "bleue", "Maman cherche une robe bleue.", 0),
                Q("De quoi parle la famille ?", "De musique et de gâteau", "De sport", "De travail seulement", "de musique et de _________.", "gâteau", "La famille parle de musique et de gâteau.", 0),
            ],
        },
        {
            "text": """De : Clara Rossi
Objet : Fiche médicale de Lili

Bonjour Docteur,

Je remplis la fiche pour ma fille Lili.
Elle a trois ans et vit avec moi une semaine sur deux.
Son père Marco est serveur et finit tard le soir.
La grand-mère garde Lili le mercredi.
Lili aime son doudou rose pendant les visites.
Je joins aussi le numéro de Marco.

Cordialement,
Clara Rossi""",
            "questions": [
                Q("Pour qui Clara remplit-elle la fiche ?", "Pour Lili", "Pour Marco", "Pour la grand-mère", "pour ma fille _________.", "Lili", "Clara remplit la fiche pour Lili.", 0),
                Q("Quel âge a Lili ?", "Trois ans", "Huit ans", "Un an", "Elle a _________ ans.", "trois", "Lili a trois ans.", 0),
                Q("Quelle est la profession de Marco ?", "Serveur", "Boucher", "Architecte", "Marco est _________.", "serveur", "Marco est serveur.", 0, prof=True),
                Q("Quand Marco finit-il son travail ?", "Tard le soir", "Le matin", "À midi", "finit tard le _________.", "soir", "Marco finit tard le soir.", 0),
                Q("Qui garde Lili le mercredi ?", "La grand-mère", "Le docteur", "Un voisin", "La _________ garde Lili.", "grand-mère", "La grand-mère garde Lili.", 0),
                Q("Quel objet Lili aime-t-elle pendant les visites ?", "Son doudou rose", "Un livre noir", "Une balle verte", "son doudou _________.", "rose", "Lili aime son doudou rose.", 0),
            ],
        },
        {
            "text": """De : Yann Leroy
Objet : Famille et transport

Bonjour,

Pour la sortie, je viens avec mes deux enfants.
Ma fille Anna a douze ans et mon fils Max a neuf ans.
Ma compagne Sophie est conductrice de bus.
Elle peut nous déposer devant le musée.
Mon père vient aussi, mais il marche avec une canne.
Nous aurons besoin de temps pour entrer.

Cordialement,
Yann Leroy""",
            "questions": [
                Q("Avec qui Yann vient-il ?", "Ses deux enfants", "Ses collègues", "Son chien", "avec mes deux _________.", "enfants", "Yann vient avec ses deux enfants.", 0),
                Q("Quel âge a Anna ?", "Douze ans", "Neuf ans", "Vingt ans", "Anna a _________ ans.", "douze", "Anna a douze ans.", 0),
                Q("Quel âge a Max ?", "Neuf ans", "Douze ans", "Quatre ans", "Max a _________ ans.", "neuf", "Max a neuf ans.", 0),
                Q("Quelle est la profession de Sophie ?", "Chauffeur", "Dentiste", "Coiffeuse", "Sophie est _________ de bus.", "conductrice", "Sophie conduit un bus.", 0, prof=True),
                Q("Où Sophie peut-elle les déposer ?", "Devant le musée", "À la plage", "Chez le médecin", "devant le _________.", "musée", "Sophie peut les déposer devant le musée.", 0),
                Q("Avec quoi le père marche-t-il ?", "Une canne", "Un vélo", "Une valise", "avec une _________.", "canne", "Le père marche avec une canne.", 0),
            ],
        },
        {
            "text": """De : Inès Moreau
Objet : Recette de ma mère

Bonjour Ana,

Tu demandes la recette de la soupe familiale.
Ma mère la prépare quand mes cousins viennent.
Elle coupe les légumes avec ma sœur Chloé.
Mon père est agriculteur et apporte les pommes de terre.
Nous mangeons la soupe avec du pain chaud.
Cette recette vient de ma grand-mère espagnole.

Bises,
Inès""",
            "questions": [
                Q("Quelle recette Ana demande-t-elle ?", "La soupe familiale", "Un gâteau", "Une salade", "la recette de la soupe _________.", "familiale", "Ana demande la recette de la soupe.", 0),
                Q("Quand la mère prépare-t-elle la soupe ?", "Quand les cousins viennent", "Tous les matins", "Jamais", "quand mes _________ viennent.", "cousins", "La mère prépare la soupe quand les cousins viennent.", 0),
                Q("Qui coupe les légumes avec la mère ?", "Chloé", "Ana", "La grand-mère", "avec ma sœur _________.", "Chloé", "Chloé coupe les légumes.", 0),
                Q("Quelle est la profession du père ?", "Agriculteur", "Journaliste", "Serveur", "Mon père est _________.", "agriculteur", "Le père est agriculteur.", 0, prof=True),
                Q("Qu'apporte le père ?", "Les pommes de terre", "Les cahiers", "Les fleurs", "apporte les pommes de _________.", "terre", "Le père apporte les pommes de terre.", 0),
                Q("De qui vient la recette ?", "De la grand-mère espagnole", "Du voisin", "Du professeur", "de ma grand-mère _________.", "espagnole", "La recette vient de la grand-mère.", 0),
            ],
        },
        {
            "text": """De : David Kim
Objet : Présentation pour le club

Bonjour,

Je viens au club avec mon fils Jun.
Jun a dix ans et veut jouer au football.
Ma femme Lina est professeure ; elle peut aider pour les devoirs.
Mon frère Min habite près du stade.
Le samedi, il accompagne souvent Jun.
Nous cherchons une équipe pour débutants.

Cordialement,
David Kim""",
            "questions": [
                Q("Avec qui David vient-il au club ?", "Son fils Jun", "Sa femme seule", "Son frère seul", "avec mon fils _________.", "Jun", "David vient avec Jun.", 0),
                Q("Quel âge a Jun ?", "Dix ans", "Six ans", "Quinze ans", "Jun a _________ ans.", "dix", "Jun a dix ans.", 0),
                Q("Quel sport Jun veut-il jouer ?", "Le football", "Le tennis", "La natation", "jouer au _________.", "football", "Jun veut jouer au football.", 0),
                Q("Quelle est la profession de Lina ?", "Professeure", "Vendeuse", "Pompier", "Lina est _________.", "professeure", "Lina est professeure.", 0, prof=True),
                Q("Où habite Min ?", "Près du stade", "À la montagne", "Dans l'école", "près du _________.", "stade", "Min habite près du stade.", 0),
                Q("Quel jour Min accompagne-t-il souvent Jun ?", "Le samedi", "Le mardi", "Le jeudi", "Le _________.", "samedi", "Min accompagne Jun le samedi.", 0),
            ],
        },
        {
            "text": """De : Maya Patel
Objet : Mes grands-parents

Bonjour Sophie,

Je prépare un petit texte sur mes grands-parents.
Ils vivent dans une maison blanche à Sion.
Mon grand-père était menuisier ; il aime encore le bois.
Ma grand-mère fait du thé avec beaucoup de lait.
Leur fille, ma mère, va les voir chaque vendredi.
Moi, je téléphone le mercredi soir.

Amitiés,
Maya""",
            "questions": [
                Q("Sur qui Maya prépare-t-elle un texte ?", "Ses grands-parents", "Ses voisins", "Ses professeurs", "sur mes _________.", "grands-parents", "Maya prépare un texte sur ses grands-parents.", 0),
                Q("Où vivent les grands-parents ?", "À Sion", "À Genève", "À Paris", "à _________.", "Sion", "Ils vivent à Sion.", 0),
                Q("Quelle était la profession du grand-père ?", "Menuisier", "Dentiste", "Vendeur", "Mon grand-père était _________.", "menuisier", "Le grand-père était menuisier.", 0, prof=True),
                Q("Qu'aime encore le grand-père ?", "Le bois", "Les trains", "La danse", "il aime encore le _________.", "bois", "Le grand-père aime encore le bois.", 0),
                Q("Que fait la grand-mère ?", "Du thé", "Une valise", "Un journal", "Ma grand-mère fait du _________.", "thé", "La grand-mère fait du thé.", 0),
                Q("Quand la mère va-t-elle les voir ?", "Chaque vendredi", "Chaque lundi", "Une fois par an", "chaque _________.", "vendredi", "La mère va les voir le vendredi.", 0),
            ],
        },
        {
            "text": """De : Antoine Blanc
Objet : Organisation du week-end

Bonjour Camille,

Samedi matin, je garde les enfants de mon frère.
Lou a cinq ans et Basile a huit ans.
Mon frère est boucher et travaille tôt au marché.
Sa femme est coiffeuse et finit à 14 h.
Nous irons au parc si le temps est bon.
Tu peux passer prendre un café vers 16 h.

À bientôt,
Antoine""",
            "questions": [
                Q("Quand Antoine garde-t-il les enfants ?", "Samedi matin", "Dimanche soir", "Mardi", "_________ matin.", "Samedi", "Antoine garde les enfants samedi matin.", 0),
                Q("De qui sont les enfants ?", "De son frère", "De Camille", "Du voisin", "les enfants de mon _________.", "frère", "Ce sont les enfants de son frère.", 0),
                Q("Quel âge a Lou ?", "Cinq ans", "Huit ans", "Douze ans", "Lou a _________ ans.", "cinq", "Lou a cinq ans.", 0),
                Q("Quelle est la profession du frère ?", "Boucher", "Pilote", "Pharmacien", "Mon frère est _________.", "boucher", "Le frère est boucher.", 0, prof=True),
                Q("Quelle est la profession de sa femme ?", "Coiffeuse", "Architecte", "Pompier", "Sa femme est _________.", "coiffeuse", "Sa femme est coiffeuse.", 0, prof=True),
                Q("Où iront-ils si le temps est bon ?", "Au parc", "À l'hôpital", "À la gare", "Nous irons au _________.", "parc", "Ils iront au parc.", 0),
            ],
        },
        {
            "text": """De : Salma Ben
Objet : Arbre généalogique

Bonjour Madame Perret,

Je vous envoie mon arbre généalogique en pièce jointe.
Il commence avec mes arrière-grands-parents.
Ma grand-mère Fatou a quatre enfants.
Mon père, le plus jeune, est médecin à Lausanne.
Ma mère est dentiste dans le même quartier.
Je peux expliquer l'arbre lundi en classe.

Cordialement,
Salma Ben""",
            "questions": [
                Q("Qu'envoie Salma ?", "Son arbre généalogique", "Une photo de vacances", "Un billet", "mon arbre _________.", "généalogique", "Salma envoie son arbre généalogique.", 0),
                Q("Avec qui commence l'arbre ?", "Les arrière-grands-parents", "Les voisins", "Les amis", "avec mes _________.", "arrière-grands-parents", "L'arbre commence avec les arrière-grands-parents.", 0),
                Q("Combien d'enfants a Fatou ?", "Quatre", "Deux", "Dix", "Fatou a _________ enfants.", "quatre", "Fatou a quatre enfants.", 0),
                Q("Quelle est la profession du père ?", "Médecin", "Serveur", "Libraire", "Mon père est _________.", "médecin", "Le père est médecin.", 0, prof=True),
                Q("Quelle est la profession de la mère ?", "Dentiste", "Boulangère", "Jardinière", "Ma mère est _________.", "dentiste", "La mère est dentiste.", 0, prof=True),
                Q("Quand Salma peut-elle expliquer l'arbre ?", "Lundi", "Vendredi", "Ce soir", "expliquer l'arbre _________.", "lundi", "Salma peut expliquer lundi.", 0),
            ],
        },
        {
            "text": """De : Victor Pop
Objet : Visite de ma nièce

Bonjour,

Ma nièce Elena arrive de Roumanie jeudi.
Elle reste chez nous pendant deux semaines.
Ma femme Irina est réceptionniste et parle roumain.
Notre fils Alex prépare son ancien bureau pour Elena.
Le soir de son arrivée, nous invitons aussi mon oncle.
Nous serons six autour de la table.

Cordialement,
Victor Pop""",
            "questions": [
                Q("Qui arrive jeudi ?", "La nièce Elena", "Le fils Alex", "La femme Irina", "Ma nièce _________ arrive.", "Elena", "Elena arrive jeudi.", 0),
                Q("D'où arrive Elena ?", "De Roumanie", "De France", "Du Canada", "arrive de _________.", "Roumanie", "Elena arrive de Roumanie.", 0),
                Q("Combien de temps reste-t-elle ?", "Deux semaines", "Un jour", "Six mois", "pendant deux _________.", "semaines", "Elle reste deux semaines.", 0),
                Q("Quelle est la profession d'Irina ?", "Réceptionniste", "Mécanicienne", "Pharmacienne", "Irina est _________.", "réceptionniste", "Irina est réceptionniste.", 0, prof=True),
                Q("Que prépare Alex ?", "Son ancien bureau", "Le dîner", "Une voiture", "son ancien _________.", "bureau", "Alex prépare son ancien bureau.", 0),
                Q("Combien seront-ils autour de la table ?", "Six", "Trois", "Dix", "Nous serons _________ autour de la table.", "six", "Ils seront six autour de la table.", 0),
            ],
        },
    ]
    assert len(emails) == 20
    return emails
