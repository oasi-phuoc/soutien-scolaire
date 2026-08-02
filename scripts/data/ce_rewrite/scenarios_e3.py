"""E3 scenarios — école, quotidien, travail."""
from generate_all_data import Q

PROMPTS = {
    "document": ("Quel type de document est-ce ?", "C'est _________.", ["une facture", "une recette"]),
    "matière": ("Quelle matière est mentionnée ?", "La matière est _________.", ["la cuisine", "le dessin libre"]),
    "activité": ("Quelle activité est mentionnée ?", "L'activité est _________.", ["un examen", "dormir"]),
    "entreprise": ("Quel lieu de travail est mentionné ?", "Le lieu de travail est _________.", ["un musée", "une école vide"]),
    "profession": ("Quelle est la profession ?", "La profession est _________.", ["serveur", "pompier"]),
    "heure": ("Quand cela se passe-t-il ?", "C'est _________.", ["à minuit", "en 1990"]),
    "lieu": ("Où cela se passe-t-il ?", "Le lieu est _________.", ["à la plage", "à l'aéroport"]),
    "personne": ("Qui est mentionné ?", "La personne est _________.", ["un voisin", "le facteur"]),
    "action": ("Que faut-il faire ?", "Il faut _________.", ["acheter une voiture", "partir loin"]),
    "transport": ("Quel transport est mentionné ?", "Le transport est _________.", ["l'avion", "le bateau"]),
}
PROFS = ["secrétaire", "infirmier", "serveur", "mécanicien", "pharmacien", "professeur", "vendeur", "boulanger", "réceptionniste", "maçon", "libraire", "coiffeur", "ingénieur", "médecin", "agriculteur", "journaliste", "pompier", "jardinier"]

MSG_PATTERNS = [
    "{genre}\n\nLe sujet principal est {main}. {person} donne l'information.\nLe moment indiqué est {when}. Le rendez-vous est {place}.\nConsigne : {action}. Détail : {detail}.",
    '{genre}\n\nPetit message pour {main}.\n{person} propose un rendez-vous {place} {when}.\nAction demandée : {action}.\n{detail}.',
    '{genre}\n\nÀ noter : {main}.\nOn voit {person} {place}. Le moment choisi est {when}.\nAprès cela, action simple : {action}.\nRappel : Détail : {detail}.',
    '{genre}\n\nInformation courte. {person} parle de {main}.\nLe lieu change ou se confirme : {place}.\nLe moment est {when}. La consigne reste claire : {action}.\n{detail}.',
    "{genre}\n\nAujourd'hui, on organise {main}.\nDépart ou début {when}. Le groupe arrive {place}.\n{person} explique la suite. Pendant l'activité : {action}.\n{detail}.",
    '{genre}\n\nBonjour. Le dossier concerne {main}.\nIl est possible de voir {person} {when}.\nLe point de rendez-vous est {place}.\nPour continuer, action nécessaire : {action}. Détail : {detail}.',
    '{genre}\n\nMessage pour la famille ou le groupe.\n{main} est prévu {when}, {place}.\n{person} accueille les personnes.\nMerci : {action}. Détail : {detail}.',
    '{genre}\n\nNotification : changement autour de {main}.\nLa personne à suivre est {person}. Le lieu est {place}.\nLe moment indiqué est {when}. Action demandée : {action}.\n{detail}.',
    '{genre}\n\nCarte de rendez-vous.\nSujet : {main}. Présence de {person}.\nEntrée ou arrivée {place} {when}.\nAvant le début, consigne : {action}. Détail : {detail}.',
    "{genre}\n\nRègle simple : attendre {person}.\nLe sujet est {main}. Le groupe arrive {place} {when}.\nPersonne ne commence avant l'action suivante : {action}.\n{detail}.",
    "{genre}\n\nOrganisation modifiée.\n{person} accompagne le groupe {place}.\nEnsuite, {main} reprend {when}.\nPendant l'attente, action calme : {action}. Détail : {detail}.",
    "{genre}\n\nBesoin d'aide pour {main} ?\nLa prochaine rencontre est {when}, {place}.\n{person} note les prénoms. Pour participer, action simple : {action}.\n{detail}.",
    '{genre}\n\nMadame, Monsieur, voici une information sur {main}.\nLa présentation ou le rendez-vous est prévu {when}, {place}.\n{person} confirmera demain. Consigne : {action}.\n{detail}.',
    "{genre}\n\nAttention, changement pour {main}.\n{person} ne peut pas garder l'organisation habituelle.\nRendez-vous {place} {when}. Le groupe doit {action}.\n{detail}.",
    '{genre}\n\nBonjour, on cherche deux personnes pour {main}.\nLa rencontre est {place} {when}.\n{person} apporte le matériel. Si tu viens, action demandée : {action}.\n{detail}.',
    '{genre}\n\nSéance de révision ou de préparation : {main}.\n{person} répond aux questions {when}.\nLe groupe travaille {place}, puis action finale : {action}.\n{detail}.',
    '{genre}\n\nPetit article. Le sujet {main} avance bien.\n{person} montre un exemple {place}.\n{when}, le groupe compare ses notes. Action finale : {action}.\n{detail}.',
    '{genre}\n\nBonjour à tous. Pour {main}, on sort ou on se déplace.\nLe rendez-vous est {place} {when}.\n{person} prend la liste. Consigne obligatoire : {action}.\n{detail}.',
    "{genre}\n\nNouvelle tâche : {main}.\nLa ressource ou l'adresse est {place}. Fin prévue {when}.\n{person} vérifiera ensuite. Pour répondre, action demandée : {action}.\n{detail}.",
    '{genre}\n\nJournée spéciale autour de {main}.\nLe matin, passage {place} avec {person}.\nLa présentation commence {when}. Chaque groupe doit {action}.\n{detail}.'
]

EMAIL_PATTERNS = [
    'De : {person}\nObjet : {main}\n\nBonjour,\n\n{detail}. Le rendez-vous est {when}, {place}.\nConsigne : {action}.\n\nCordialement,\n{person}',
    'De : Secrétariat\nObjet : Information\n\nBonjour,\n\nNous confirmons {main} {when}.\n{person} accueillera le groupe {place}. Action demandée : {action}.\n\nLe secrétariat',
    'De : Portail\nObjet : À faire\n\nBonjour,\n\nUne nouvelle consigne est disponible pour {main}.\nOuvrez-la avant {when}; elle concerne {place}.\n{person} demande cette action : {action}. Détail : {detail}.\n\nMessage automatique',
    'De : {person}\nObjet : Rappel\n\nBonjour à tous,\n\nJe confirme {main}. Le moment est {when}, {place}.\nVenez calmement. Action à prévoir : {action}.\n{detail}.\n\nÀ bientôt',
    "De : Vie scolaire\nObjet : Organisation\n\nBonjour,\n\nPour {main}, l'entrée se fait autrement.\n{person} attend {place} {when}.\nUne seule consigne : {action}. Détail : {detail}.\n\nVie scolaire",
    'De : Bibliothèque\nObjet : Document prêt\n\nBonjour,\n\nLe document ou dossier pour {main} est prêt.\nVous pouvez le demander {when}, {place}. {person} connaît votre nom.\nAction à prévoir : {action}.\n\nMerci',
    "De : Association\nObjet : Invitation\n\nBonjour,\n\nLes familles ou amis sont invités pour {main} {when}.\nLes informations seront visibles {place}. {person} commencera l'accueil.\nConsigne : {action}.\n\nAssociation",
    'De : Application\nObjet : Notification\n\nBonjour,\n\nUne modification concerne {main}.\nLe rendez-vous est {place} {when}. {person} ajoute : Détail : {detail}.\nAction demandée : {action}.\n\nApplication',
    "De : Service des examens\nObjet : Convocation\n\nBonjour,\n\nVotre rendez-vous pour {main} est confirmé {when}.\nL'entrée se fait {place}; {person} vérifie la salle.\nAvant le début, consigne : {action}.\n\nService des examens",
    'De : Laboratoire\nObjet : Sécurité\n\nBonjour,\n\nPour {main}, attendez {person}.\nLe groupe arrive {place} {when}. Détail : {detail}.\nConsigne : {action}.\n\nResponsable',
    "De : Surveillance\nObjet : Pause\n\nBonjour,\n\n{person} accompagne les personnes {place}.\nAprès la pause, {main} reprend {when}.\nPendant l'attente, action calme : {action}.\n\nBonne journée",
    'De : Club\nObjet : Inscription\n\nBonjour,\n\nLe club aide pour {main}. Prochaine séance : {when}.\nElle a lieu {place} avec {person}.\nPour participer, action simple : {action}. Détail : {detail}.\n\nClub',
    'De : {person}\nObjet : Travail\n\nBonjour,\n\nJe rappelle le travail ou rendez-vous de {main}.\nIl est prévu {when}, {place}.\nAvant la séance, consigne : {action}. Détail : {detail}.\n\n{person}',
    "De : Direction\nObjet : Changement\n\nBonjour,\n\n{main} change d'organisation. {person} accompagne le groupe {place} {when}.\nLa consigne pour tous : {action}.\n{detail}.\n\nDirection",
    'De : Forum\nObjet : Groupe\n\nBonjour,\n\nUn groupe se forme pour {main}.\nLa rencontre est {when}, {place}. {person} organise les rôles.\nSi vous venez, pensez à {action}.\n\nForum',
    'De : Tutorats\nObjet : Révision\n\nBonjour,\n\nLa préparation de {main} commence {when}.\nElle se passe {place}. {person} répond aux questions.\nEnsuite, action finale : {action}. Détail : {detail}.\n\nTutorats',
    'De : Journal\nObjet : Article\n\nBonjour,\n\nNous préparons une brève nouvelle sur {main}.\nLe groupe travaille {when}, {place}. {person} vérifie les noms.\nConsigne : {action}.\n\nJournal',
    "De : {person}\nObjet : Sortie\n\nBonjour,\n\nPour {main}, le rendez-vous est {place} {when}.\nLa tenue ou préparation doit être simple. Détail : {detail}.\nN'oubliez pas cette action : {action}.\n\n{person}",
    'De : Portail étudiant\nObjet : Nouveau devoir\n\nBonjour,\n\nUne tâche de {main} est disponible.\nIl faut la faire avant {when}. La ressource se trouve {place}.\n{person} corrigera après. Consigne : {action}.\n\nPortail',
    'De : Équipe pédagogique\nObjet : Journée spéciale\n\nBonjour,\n\nLa journée autour de {main} aura lieu {when}.\nLe matin, les groupes passent {place} avec {person}.\nEn fin de journée, consigne : {action}. Détail : {detail}.\n\nÉquipe pédagogique'
]


def build_e3_lessons():
    return {
        "e3-1": {"title": "E3.1 À l'école / à l'université", "messages": _make(SCHOOL, school_facts, False), "emails": _make(SCHOOL_EMAILS, school_facts, True)},
        "e3-2": {"title": "E3.2 La vie quotidienne", "messages": _make(DAILY, daily_facts, False), "emails": _make(DAILY_EMAILS, daily_facts, True)},
        "e3-3": {"title": "E3.3 Au travail", "messages": _make(WORK, work_facts, False), "emails": _make(WORK_EMAILS, work_facts, True)},
    }


def _prof_wrongs(answer):
    return [p for p in PROFS if p != answer][:2]


def F(kind, answer):
    q, fill_q, wrongs = PROMPTS[kind]
    if kind == "profession":
        wrongs = _prof_wrongs(answer)
    return Q(q, answer, wrongs[0], wrongs[1], fill_q, answer, f"Le texte mentionne {answer}.", 0, prof=kind == "profession")


def _make(rows, fact_builder, email):
    patterns = EMAIL_PATTERNS if email else MSG_PATTERNS
    items = []
    for idx, row in enumerate(rows):
        genre, doc, main, when, place, person, action, detail = row
        text = patterns[idx].format(genre=genre, main=main, when=when, place=place, person=person, action=action, detail=detail)
        items.append({"text": text, "questions": [F(k, v) for k, v in fact_builder(row)]})
    return items


def school_facts(r):
    return [("document", r[1]), ("matière", r[2]), ("heure", r[3]), ("lieu", r[4]), ("personne", r[5]), ("action", r[6])]


def daily_facts(r):
    return [("document", r[1]), ("activité", r[2]), ("heure", r[3]), ("lieu", r[4]), ("personne", r[5]), ("transport", r[6])]


def work_facts(r):
    return [("document", r[1]), ("entreprise", r[2]), ("profession", r[7]), ("heure", r[3]), ("lieu", r[4]), ("action", r[6])]

SCHOOL = [
    ("Panneau à l'entrée du collège", "un panneau", "les mathématiques", "lundi à 8 h 15", "en salle 12", "Mme Martin", "prendre un cahier bleu", "Les parents restent devant le portail"),
    ("Message vocal transcrit", "un message vocal", "le français", "dans dix minutes", "devant la salle 5", "M. Girard", "entrer doucement", "Le chapitre 3 est sur le bureau"),
    ("Page d'agenda de Léo", "une page d'agenda", "l'anglais", "mercredi à 9 h", "à la bibliothèque", "Mme Rossi", "rendre le roman", "Un contrôle de vocabulaire suit la pause"),
    ("Billet collé sur la porte", "un billet", "les sciences", "ce matin à 13 h", "en salle 8", "Mme Petit", "travailler par groupes de trois", "Le laboratoire 2 est fermé"),
    ("Programme de la sortie scolaire", "un programme", "l'histoire", "jeudi à 8 h 30", "au musée d'histoire", "M. Weber", "garder son plan", "Le pique-nique se prend dans le jardin"),
    ("Ticket de la bibliothèque", "un ticket", "la lecture", "avant mardi prochain", "au bureau d'accueil", "Mme Costa", "présenter la carte d'étudiant", "Le livre réservé est Le Petit Prince"),
    ("Invitation aux parents", "une invitation", "la géographie", "vendredi entre 16 h et 17 h", "dans le couloir", "M. Blanc", "entrer par la porte principale", "Les élèves présentent leur pays préféré"),
    ("Notification de l'application école", "une notification", "l'allemand", "aujourd'hui après la récréation", "en salle 7", "M. Müller", "ouvrir les cahiers", "La séance commence par une dictée"),
    ("Carte d'examen", "une carte d'examen", "la chimie", "mercredi 20 avril à 13 h 45", "dans l'amphi B", "le surveillant", "éteindre le téléphone", "La calculatrice simple est autorisée"),
    ("Règles affichées au laboratoire", "des règles", "la physique", "avant le cours", "près de la porte", "M. Leroy", "mettre la blouse blanche", "Le travail se fait à deux"),
    ("Mot du surveillant", "un mot", "l'histoire", "après la pause de 10 h 20", "au foyer", "le surveillant", "jouer à des jeux calmes", "La cour est trop mouillée"),
    ("Tract du club devoirs", "un tract", "le français et les maths", "mardi à 16 h", "dans la salle polyvalente", "deux étudiants", "s'inscrire au secrétariat", "L'aide est gratuite"),
    ("Carnet de liaison", "un carnet de liaison", "les sciences", "lundi", "devant la classe", "votre enfant", "signer le mot ce soir", "L'exposé porte sur une planète"),
    ("Annonce au micro", "une annonce au micro", "la musique", "mardi prochain", "en étude", "M. Rossi", "rester calme", "Le cours de 15 h est annulé"),
    ("Forum des étudiants", "un message de forum", "l'informatique", "jeudi de 14 h à 16 h", "en salle info 4", "Karim", "écrire son nom", "Le projet est une application météo"),
    ("Fiche de tutorat", "une fiche de tutorat", "le droit", "mardi", "dans l'amphi C", "Prof. Dubois", "lire un petit cas", "Les documents sont autorisés"),
    ("Mini article du journal de l'école", "un mini article", "la biologie", "vendredi", "près de la serre", "Dr. Martin", "dessiner les plantes", "Les élèves observent des graines"),
    ("Message du professeur d'EPS", "un message", "l'EPS", "demain à 10 h", "au stade municipal", "M. Antoine", "porter des baskets propres", "Le rendez-vous est devant l'arrêt de tram"),
    ("Page du portail étudiant", "une page du portail", "l'économie", "avant jeudi soir", "dans l'onglet cours", "Mme Kim", "répondre aux cinq questions", "Une vidéo courte est disponible"),
    ("Carte de la journée interdisciplinaire", "une carte de journée", "l'eau", "vendredi à 16 h", "dans le hall", "l'équipe pédagogique", "préparer une affiche", "Les familles sont invitées"),
]
SCHOOL_EMAILS = [
    ("E-mail de rentrée", "un e-mail", "la rentrée", "lundi 26 août à 8 h", "dans la cour", "École du Lac", "apporter une trousse", "Un café est prévu pour les parents"),
    ("E-mail de professeur", "un e-mail", "l'anglais oral", "jeudi à 9 h", "en salle 3", "Mme Rossi", "prendre la liste de mots", "Le manuel reste à la maison"),
    ("E-mail de bibliothèque", "un e-mail", "la lecture", "mercredi soir", "au rez-de-chaussée", "Bibliothèque scolaire", "présenter la carte d'étudiant", "Le roman réservé attend au bureau"),
    ("E-mail d'histoire", "un e-mail", "l'exposé sur Rome", "lundi prochain", "en salle 8", "M. Weber", "envoyer trois images", "Chaque élève parle deux minutes"),
    ("E-mail d'examen", "un e-mail", "la chimie", "20 avril à 13 h 30", "dans l'amphi B", "Service des examens", "prendre une calculatrice simple", "La place de Sara est au rang 4"),
    ("E-mail du club sciences", "un e-mail", "les fusées à eau", "mercredi à 14 h", "derrière le gymnase", "Club sciences", "apporter une bouteille vide", "Le club fournit les lunettes"),
    ("E-mail des parents", "un e-mail", "la rencontre école-famille", "mardi à 19 h", "dans la salle polyvalente", "Association des parents", "préparer une question", "La directrice présente le projet lecture"),
    ("E-mail automatique", "un e-mail", "le devoir en ligne", "avant vendredi minuit", "sur Moodle", "Application Classe+", "déposer le fichier", "Le brouillon peut rester privé"),
    ("E-mail de laboratoire", "un e-mail", "la physique", "mercredi à 13 h", "au labo 1", "Laboratoire", "mettre la blouse", "Les lunettes sont dans l'armoire"),
    ("E-mail d'orientation", "un e-mail", "l'orientation", "jeudi à 15 h", "au bureau 2", "Mme Pop", "apporter les bulletins", "Le rendez-vous dure vingt minutes"),
    ("E-mail sport scolaire", "un e-mail", "l'entraînement", "mardi à 17 h", "au gymnase", "M. Antoine", "porter une tenue de sport", "Les vestiaires ouvrent avant"),
    ("E-mail de conférence", "un e-mail", "la conférence de droit", "mardi 14 mai à 18 h", "dans l'amphi C", "Faculté de droit", "s'inscrire en ligne", "L'entrée est gratuite"),
    ("E-mail de goûter", "un e-mail", "le goûter de fin d'année", "mercredi 26 juin à 16 h", "dans la cour", "École primaire", "apporter un plat à partager", "Les classes chantent deux chansons"),
    ("E-mail cours annulé", "un e-mail", "la musique", "lundi 1 avril", "en salle de musique", "Gymnase", "noter le report à mardi", "Aucun élève ne doit venir à 15 h"),
    ("E-mail intégration", "un e-mail", "la soirée d'intégration", "samedi 21 septembre à 20 h", "sur le campus", "Association étudiante", "apporter une boisson", "Les nouveaux étudiants reçoivent un badge"),
    ("E-mail projet informatique", "un e-mail", "le projet météo", "lundi 29 avril", "en salle info 4", "M. Garcia", "préparer une présentation", "Les groupes comptent trois personnes"),
    ("E-mail biologie", "un e-mail", "le QCM de biologie", "mercredi 15 mai à 10 h", "dans l'amphi B", "Dr. Martin", "réviser les chapitres 1 à 5", "Le QCM dure trente minutes"),
    ("E-mail photo scolaire", "un e-mail", "la photo de classe", "vendredi à 11 h", "dans le jardin", "Photographe scolaire", "porter un haut clair", "La commande des photos viendra plus tard"),
    ("E-mail certificat", "un e-mail", "le certificat de scolarité", "dès lundi", "au secrétariat", "Service scolarité", "montrer une pièce d'identité", "Le document est gratuit"),
    ("E-mail journée spéciale", "un e-mail", "le thème de l'eau", "vendredi", "dans le hall", "Équipe pédagogique", "inviter les familles", "Un jus de fruit sera offert"),
]
DAILY = [
    ("SMS après le travail", "un SMS", "les courses", "à 17 h", "à la Migros du centre", "ma mère", "venir à pied", "le budget est de 45 francs"),
    ("Agenda personnel", "un agenda", "un rendez-vous médical", "à 10 h 30", "au cabinet du Dr Martin", "le médecin", "prendre le bus 5", "la carte d'assurance est dans le sac"),
    ("WhatsApp famille", "un WhatsApp", "un déjeuner", "à 12 h 30", "au restaurant Le Lac", "mes parents", "venir en voiture", "la table est près de la fenêtre"),
    ("Note sur la porte", "une note", "le sport", "à 19 h", "chez FitPlus", "Tom", "venir à vélo", "le badge est dans la poche"),
    ("Notification bancaire", "une notification", "un retrait", "à 14 h", "à la banque UBS", "le conseiller", "venir à pied", "le retrait prévu est de 200 francs"),
    ("Message du coiffeur", "un message", "une coupe de cheveux", "à 16 h", "au salon Élégance", "Clara", "prendre le tram 12", "arriver cinq minutes avant"),
    ("Liste de courses", "une liste", "acheter du pain et des fruits", "à 18 h", "à la Coop du quartier", "ma sœur", "venir à pied", "le total prévu est de 25 francs"),
    ("SMS du dentiste", "un SMS", "un contrôle dentaire", "à 9 h", "au cabinet dentaire", "la dentiste", "prendre le bus", "le contrôle est couvert"),
    ("Planning de la semaine", "un planning", "le cinéma", "mercredi à 20 h", "au cinéma ABC", "Léa et Marc", "prendre le métro", "le billet coûte 18 francs"),
    ("Message de pharmacie", "un message", "chercher des médicaments", "à 11 h", "à la pharmacie du centre", "mon fils", "venir à pied", "l'ordonnance est prête"),
    ("WhatsApp tennis", "un WhatsApp", "un match de tennis", "à 15 h", "au club de tennis", "Hugo", "venir en voiture", "la raquette rouge est dans le coffre"),
    ("Note sur le frigo", "une note", "un cours de cuisine", "à 18 h 30", "à l'école culinaire", "un groupe de huit", "prendre le bus 3", "il faut un tablier"),
    ("SMS bibliothèque", "un SMS", "rendre des livres", "à 17 h 30", "à la bibliothèque municipale", "Nora", "venir à vélo", "aucune amende aujourd'hui"),
    ("Mémo marché", "un mémo", "le marché", "samedi à 8 h", "place du Marché", "ma grand-mère", "prendre le tram", "prendre un sac réutilisable"),
    ("Message vélo", "un message", "une balade à vélo", "à 10 h", "au bord du lac", "Emma", "venir à vélo", "la sortie est gratuite"),
    ("Rappel téléphone", "un rappel", "appeler la banque", "à 14 h", "depuis la maison", "Mme Keller", "aucun transport", "préparer le numéro de compte"),
    ("WhatsApp voisins", "un WhatsApp", "un apéro de quartier", "à 18 h", "dans la cour de l'immeuble", "les voisins", "venir à pied", "apporter une boisson"),
    ("Note laverie", "une note", "faire la lessive", "demain à 9 h", "à la laverie automatique", "Sami", "venir à pied", "prévoir des pièces de 2 francs"),
    ("SMS piscine", "un SMS", "la natation", "à 7 h", "à la piscine municipale", "David", "prendre le bus 8", "l'entrée coûte 7 francs"),
    ("Planning du dimanche", "un planning", "un brunch", "dimanche à 10 h", "au café du Port", "mes amis", "venir en voiture", "la réservation est pour quatre"),
]
DAILY_EMAILS = DAILY
WORK = [
    ("E-mail interne", "un e-mail interne", "SwissTech SA", "à 8 h", "au bureau d'accueil", "Marie", "répondre aux e-mails", "secrétaire"),
    ("Note du bureau", "une note", "Hôpital cantonal", "à 5 h 45", "en salle de réunion", "Dr. Keller", "préparer les soins", "infirmier"),
    ("SMS du collègue", "un SMS", "Restaurant Le Sapin", "à 10 h 30", "en cuisine", "Chef Marco", "servir les clients", "serveur"),
    ("WhatsApp équipe", "un WhatsApp", "Garage Central", "à 7 h", "à l'atelier", "Paul", "réparer une voiture", "mécanicien"),
    ("Annonce RH", "une annonce RH", "Banque Populaire", "mardi à 14 h", "en salle formation", "Sophie", "accueillir les clients", "secrétaire"),
    ("Message du manager", "un message", "Pharmacie du Lac", "vendredi à 18 h", "dans la pharmacie", "Julie", "compter les stocks", "pharmacien"),
    ("Planning de semaine", "un planning", "École primaire", "jeudi à 17 h", "en salle des profs", "Mme Martin", "préparer les bulletins", "professeur"),
    ("E-mail client", "un e-mail client", "Agence Voyage", "mercredi à 11 h", "au bureau", "Emma", "préparer un devis", "vendeur"),
    ("Note de réunion", "une note de réunion", "Boulangerie Martin", "lundi à 6 h", "au laboratoire", "Thomas", "faire le pain", "boulanger"),
    ("SMS du cabinet", "un SMS", "Cabinet d'avocats", "mardi à 10 h", "au tribunal", "Maître Blanc", "classer les dossiers", "secrétaire"),
    ("Info intranet", "une info intranet", "Hôtel Bellevue", "à 15 h", "à la réception", "Hugo", "accueillir les clients", "réceptionniste"),
    ("WhatsApp chantier", "un WhatsApp", "BTP Construction", "à 6 h 15", "sur le chantier", "Karim", "monter un mur", "maçon"),
    ("E-mail équipe", "un e-mail", "Librairie du Centre", "vendredi à 18 h", "au rayon jeunesse", "Nina", "ranger les livres", "libraire"),
    ("Note du salon", "une note", "Salon de coiffure", "mardi à 9 h", "près du fauteuil 2", "Clara", "couper les cheveux", "coiffeur"),
    ("Message RH", "un message RH", "Usine Omega", "jeudi à 8 h", "dans l'usine", "David", "contrôler la production", "ingénieur"),
    ("Planning médical", "un planning", "Cabinet médical", "à 8 h", "dans le cabinet", "Infirmière Léa", "consulter les patients", "médecin"),
    ("SMS de la ferme", "un SMS", "Ferme des Alpes", "samedi à 6 h", "au marché de Sion", "Victor", "charger le camion", "agriculteur"),
    ("E-mail rédaction", "un e-mail", "Journal Le Quotidien", "à 11 h", "en salle de rédaction", "Antoine", "écrire un article", "journaliste"),
    ("Annonce de caserne", "une annonce", "Service pompiers", "chaque matin", "à la caserne", "Marc", "préparer les interventions", "pompier"),
    ("WhatsApp crèche", "un WhatsApp", "Crèche Les Petits", "jeudi à 18 h", "dans le jardin", "Sara", "préparer les plantes", "jardinier"),
]
WORK_EMAILS = WORK
