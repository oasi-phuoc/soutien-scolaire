"""Hand-authored E10 CE scenarios with varied A2 reading structures."""
from __future__ import annotations

EMPTY_IMG = ["", "", ""]


def r(source, subject, place, when, detail, amount, action, contact, person):
    return {
        "source": source,
        "subject": subject,
        "place": place,
        "when": when,
        "detail": detail,
        "amount": amount,
        "action": action,
        "contact": contact,
        "person": person,
    }


MESSAGE_PATTERNS = [
    ["Affiche — {source}", "{subject}.", "Lieu : {place}.", "Date : {when}.", "{detail}.", "{amount}.", "À faire : {action}. Contact : {contact}."],
    ["SMS — {source} à {person}", "Bonjour {person}, petit rappel : {subject}.", "On se retrouve {when}.", "Adresse : {place}.", "{detail}.", "Merci de {action}. Réponse : {contact}."],
    ["Billet dans l'entrée — {source}", "Bonjour à tous,", "Nous préparons {subject}.", "Le rendez-vous est fixé {when}, à {place}.", "{amount}.", "{detail}.", "Pour aider, merci de {action}. Contact : {contact}."],
    ["Message de groupe — {source}", "{person} a partagé une information.", "Sujet : {subject}.", "Point de rencontre : {place}.", "Horaire prévu : {when}.", "{detail}.", "{action}. Questions : {contact}."],
    ["Brève locale — {source}", "{subject} est annoncé cette semaine.", "Le public est attendu {when}.", "L'adresse exacte est {place}.", "{detail}.", "{amount}.", "Inscription ou question : {contact}; il faut {action}."],
    ["Carte d'invitation — {source}", "Chère/cher {person},", "Vous êtes invité(e) pour {subject}.", "Cela aura lieu {when}.", "Rendez-vous à {place}.", "{detail}.", "Merci de {action}. Contact : {contact}."],
    ["Note pratique — {source}", "Objet : {subject}.", "Les participants arrivent à {place}.", "Début : {when}.", "{detail}.", "Prévoir : {amount}.", "Avant de venir, {action}. Contact : {contact}."],
    ["Page web — {source}", "Nouvelle annonce : {subject}.", "Où ? {place}.", "Quand ? {when}.", "Ce qui est prévu : {detail}.", "Participation : {amount}.", "Bouton à utiliser : {action}. Aide : {contact}."],
    ["Flyer distribué au quartier — {source}", "Envie de sortir ?", "{subject} est ouvert aux voisins.", "Accueil à {place}.", "Rendez-vous {when}.", "{detail}. {amount}.", "Pour participer : {action}. Contact : {contact}."],
    ["Mémo pour les familles — {source}", "Information importante : {subject}.", "Les familles se présentent à {place}.", "Le créneau retenu est {when}.", "{detail}.", "{amount}.", "Merci de {action}; contact : {contact}."],
    ["Annonce au micro — {source}", "Attention, une information concerne {subject}.", "Les personnes intéressées vont à {place}.", "L'activité commence {when}.", "{detail}.", "Il faut aussi noter : {amount}.", "Dernière étape : {action}. Contact : {contact}."],
    ["Post sur le réseau du quartier — {source}", "{person} recommande {subject}.", "Le groupe se donne rendez-vous à {place}.", "Moment choisi : {when}.", "{detail}.", "{amount}.", "Répondez au message pour {action}. Contact : {contact}."],
    ["Invitation imprimée — {source}", "Nous serons heureux de vous accueillir.", "Programme : {subject}.", "Adresse : {place}.", "Début prévu {when}.", "{detail}.", "Réponse demandée : {action}. Contact : {contact}."],
    ["Compte rendu court — {source}", "La réunion a confirmé {subject}.", "Le lieu retenu est {place}.", "La date choisie est {when}.", "{detail}.", "{amount}.", "Prochaine action : {action}. Contact : {contact}."],
    ["Encart dans le journal de l'école — {source}", "À noter cette semaine : {subject}.", "Tout se passe à {place}.", "Le rendez-vous est {when}.", "{detail}.", "{amount}.", "Les lecteurs doivent {action}. Contact : {contact}."],
    ["Message vocal retranscrit — {source}", "Bonjour {person}, voici les informations.", "On maintient {subject}.", "Retrouvons-nous à {place}.", "L'heure reste {when}.", "{detail}.", "Merci de {action}. Contact : {contact}."],
    ["Programme de la semaine — {source}", "Activité principale : {subject}.", "Salle ou adresse : {place}.", "Créneau : {when}.", "{detail}.", "{amount}.", "Pour valider sa place, {action}. Contact : {contact}."],
    ["Petit mot sur le cahier — {source}", "Bonjour,", "Merci de lire l'information sur {subject}.", "Le lieu indiqué est {place}.", "La date est {when}.", "{detail}.", "{amount}. Action demandée : {action}. Contact : {contact}."],
    ["Publication du club — {source}", "{subject} aura bientôt lieu.", "Les membres entrent par {place}.", "Accueil {when}.", "{detail}.", "{amount}.", "Merci de {action}; renseignements : {contact}."],
    ["Avis affiché à la porte — {source}", "Changement ou rappel : {subject}.", "L'adresse à retenir est {place}.", "Le moment à retenir est {when}.", "{detail}.", "Condition pratique : {amount}.", "Avant la date, {action}. Contact : {contact}."],
]


EMAIL_PATTERNS = [
    ["De : {source}", "Objet : Confirmation — {subject}", "Bonjour {person},", "Je vous confirme {subject}.", "Le rendez-vous est prévu {when}, à {place}.", "{detail}.", "{amount}.", "Merci de {action}.", "Vous pouvez répondre par {contact}.", "Cordialement, {source}"],
    ["De : {source}", "Objet : Petite organisation pour {subject}", "Bonjour {person},", "Nous préparons les derniers détails.", "Tout aura lieu à {place}, {when}.", "{detail}.", "À retenir : {amount}.", "Pouvez-vous {action} ?", "Contact direct : {contact}.", "À bientôt, {source}"],
    ["De : {source}", "Objet : Réponse attendue — {subject}", "Bonjour {person},", "Votre présence nous aidera beaucoup.", "Le lieu reste {place}.", "L'horaire confirmé est {when}.", "{detail}.", "{amount}.", "Merci de {action} avant la date.", "Bien à vous, {source}"],
    ["De : {source}", "Objet : Informations pratiques", "Bonjour {person},", "Voici les informations pour {subject}.", "Nous vous attendons à {place}.", "Le début est fixé {when}.", "{detail}.", "Prévoir aussi : {amount}.", "Pour toute question : {contact}.", "Merci, {source}"],
    ["De : {source}", "Objet : Invitation mise à jour", "Bonjour {person},", "Nous avons modifié un détail pour {subject}.", "Le point de rendez-vous est maintenant {place}.", "La date ne change pas : {when}.", "{detail}.", "{amount}.", "Merci de {action}.", "Bonne journée, {source}"],
    ["De : {source}", "Objet : Votre aide pour {subject}", "Bonjour {person},", "Nous cherchons encore quelques personnes pour aider.", "L'équipe se retrouve à {place}.", "Rendez-vous {when}.", "{detail}.", "Indication pratique : {amount}.", "Si vous êtes disponible, {action}.", "Réponse à {contact}."],
    ["De : {source}", "Objet : Rappel avant demain", "Bonjour {person},", "Je vous rappelle {subject}.", "Tout se passera à {place}.", "Merci d'arriver {when}.", "{detail}.", "{amount}.", "N'oubliez pas de {action}.", "Cordialement, {source}"],
    ["De : {source}", "Objet : Documents et horaires", "Bonjour {person},", "Pour {subject}, voici ce qu'il faut savoir.", "Adresse : {place}.", "Horaire : {when}.", "{detail}.", "Frais ou matériel : {amount}.", "Merci de {action}; contact : {contact}.", "Avec nos salutations, {source}"],
    ["De : {source}", "Objet : Merci de confirmer", "Bonjour {person},", "Nous devons compter les participants pour {subject}.", "Le rendez-vous aura lieu à {place}.", "Il est prévu {when}.", "{detail}.", "{amount}.", "Merci de {action}.", "Réponse souhaitée : {contact}."],
    ["De : {source}", "Objet : Changement de salle", "Bonjour {person},", "Une précision concerne {subject}.", "Le nouveau lieu est {place}.", "L'horaire reste {when}.", "{detail}.", "{amount}.", "Merci de {action}.", "À bientôt, {source}"],
    ["De : {source}", "Objet : Programme court", "Bonjour {person},", "Voici le programme de {subject}.", "Accueil à {place}.", "Début {when}.", "{detail}.", "{amount}.", "Pour participer, {action}.", "Questions : {contact}."],
    ["De : {source}", "Objet : Suite à votre inscription", "Bonjour {person},", "Nous avons bien reçu votre inscription pour {subject}.", "Vous êtes attendu(e) à {place}.", "La rencontre commence {when}.", "{detail}.", "{amount}.", "Merci de {action}.", "Cordialement, {source}"],
    ["De : {source}", "Objet : Message aux participants", "Bonjour {person},", "Ce message est envoyé à toutes les personnes inscrites.", "Sujet : {subject}.", "Lieu : {place}.", "Horaire : {when}.", "{detail}.", "{amount}. Merci de {action}.", "Contact : {contact}."],
    ["De : {source}", "Objet : Dernière vérification", "Bonjour {person},", "Avant {subject}, nous vérifions les détails.", "Le groupe se retrouve à {place}.", "Le rendez-vous est {when}.", "{detail}.", "{amount}.", "Pouvez-vous {action} ?", "Merci, {source}"],
    ["De : {source}", "Objet : Invitation personnelle", "Bonjour {person},", "Je serais content(e) de vous voir pour {subject}.", "Je propose {place}.", "La date choisie est {when}.", "{detail}.", "{amount}.", "Merci de {action}.", "À très vite, {source}"],
    ["De : {source}", "Objet : Organisation du groupe", "Bonjour {person},", "Le groupe confirme {subject}.", "Nous partirons de {place}.", "Le départ est prévu {when}.", "{detail}.", "{amount}.", "Merci de {action}; contact : {contact}.", "Amicalement, {source}"],
    ["De : {source}", "Objet : À lire avant de venir", "Bonjour {person},", "Avant {subject}, lisez ces informations.", "Entrée par {place}.", "Accueil {when}.", "{detail}.", "{amount}.", "Il faudra {action}.", "Bonne réception, {source}"],
    ["De : {source}", "Objet : Compte rendu et prochaine étape", "Bonjour {person},", "Après notre échange, nous gardons {subject}.", "Le lieu choisi est {place}.", "La prochaine date est {when}.", "{detail}.", "{amount}.", "La prochaine étape est de {action}.", "Contact : {contact}."],
    ["De : {source}", "Objet : Participation confirmée", "Bonjour {person},", "Votre participation à {subject} est confirmée.", "Merci de venir à {place}.", "Nous commencerons {when}.", "{detail}.", "{amount}.", "Merci aussi de {action}.", "Cordialement, {source}"],
    ["De : {source}", "Objet : Question rapide", "Bonjour {person},", "J'ai une question au sujet de {subject}.", "Est-ce que {place} vous convient ?", "Le moment proposé est {when}.", "{detail}.", "{amount}.", "Pouvez-vous {action} ?", "Répondez à {contact}."],
]


WRONG_PLACES = ["à la gare centrale", "dans une pharmacie", "sur une plage privée"]
WRONG_TIMES = ["lundi à 7 h", "le 31 décembre à minuit", "dimanche prochain à 22 h"]
WRONG_ACTIONS = ["annuler sans prévenir", "apporter un passeport", "payer en espèces seulement"]
WRONG_DETAILS = ["les animaux sont obligatoires", "le repas est interdit", "la salle est fermée"]
WRONG_CONTACTS = ["le 144", "la caisse du supermarché", "un guichet inconnu"]


def first_word(value: str) -> str:
    cleaned = value.replace(":", " ").replace(";", " ").replace(",", " ").replace(".", " ")
    for word in cleaned.split():
        word = word.strip("'()")
        if word.lower() not in {"le", "la", "les", "un", "une", "des", "de", "du", "à", "au", "aux", "pour", "avec"}:
            return word
    return cleaned.split()[0]


def q(text_q, answer, wrong1, wrong2, fill_q, fill, vf_q, vf_c):
    return {
        "textQ": text_q,
        "text": [answer, wrong1, wrong2],
        "textC": 0,
        "img": EMPTY_IMG,
        "imgC": 0,
        "fillQ": fill_q,
        "fill": fill,
        "vfQ": vf_q,
        "vfC": vf_c,
    }


def questions(spec: dict, email: bool) -> list[dict]:
    channel = "l'e-mail" if email else "le message"
    return [
        q(f"Qui envoie {channel} ?", spec["source"], "La mairie de Lyon", "Un magasin de meubles", "Le message vient de _________.", first_word(spec["source"]), f"{channel.capitalize()} vient de {spec['source']}.", 0),
        q("De quoi parle le texte ?", spec["subject"], "D'un problème de facture", "D'une location de voiture", "Le texte parle de _________.", first_word(spec["subject"]), f"Le texte parle de {spec['subject']}.", 0),
        q("Où cela se passe-t-il ?", spec["place"], WRONG_PLACES[0], WRONG_PLACES[1], "Lieu : _________.", first_word(spec["place"]), f"Cela se passe {WRONG_PLACES[2]}.", 1),
        q("Quand est le rendez-vous ou l'activité ?", spec["when"], WRONG_TIMES[0], WRONG_TIMES[1], "Moment : _________.", first_word(spec["when"]), f"Le moment indiqué est {spec['when']}.", 0),
        q("Quel détail est donné ?", spec["detail"], WRONG_DETAILS[0], WRONG_DETAILS[1], "Détail : _________.", first_word(spec["detail"]), f"Le texte précise que {spec['detail']}.", 0),
        q("Que faut-il faire ?", spec["action"], WRONG_ACTIONS[0], WRONG_ACTIONS[1], "Il faut _________.", first_word(spec["action"]), f"Il faut {spec['action']}.", 0),
        q("Comment demander des informations ?", spec["contact"], WRONG_CONTACTS[0], WRONG_CONTACTS[1], "Contact : _________.", first_word(spec["contact"]), f"Le contact indiqué est {spec['contact']}.", 0),
    ]


def render(patterns: list[list[str]], spec: dict, idx: int) -> str:
    return "\n".join(line.format(**spec) for line in patterns[idx])


def make_lesson(rows: list[dict]) -> dict:
    messages = []
    emails = []
    for idx, spec in enumerate(rows):
        messages.append({"text": render(MESSAGE_PATTERNS, spec, idx), "questions": questions(spec, email=False)})
        emails.append({"text": render(EMAIL_PATTERNS, spec, idx), "questions": questions(spec, email=True)})
    return {"messages": messages, "emails": emails}


LESSON_ROWS = {
    "e10-1": [
        r("Camille", "un dîner maison samedi soir", "chez Camille, rue des Roses 4", "samedi à 19 h 30", "il y aura une soupe, une tarte et une option végétarienne", "Participation libre : chacun apporte une boisson", "confirmer avant jeudi soir", "camille@exemple.fr", "Nadia"),
        r("Famille Morel", "un anniversaire surprise pour Inès", "salle du Parc, entrée côté jardin", "dimanche à 15 h", "les invités doivent arriver dix minutes avant Inès", "Cadeau commun : 5 € maximum par personne", "garder le secret jusqu'à dimanche", "message à Hugo", "Lina"),
        r("Voisins du 3e étage", "un apéritif de bienvenue", "palier du troisième étage", "vendredi à 18 h 45", "les nouveaux voisins s'appellent Nora et Sami", "Prévoir un verre ou une petite assiette salée", "indiquer si vous venez", "groupe WhatsApp de l'immeuble", "Marc"),
        r("Médiathèque Jean-Jaurès", "une invitation à rencontrer une autrice", "salle bleue de la médiathèque", "mercredi à 17 h", "l'autrice parlera de son roman pendant trente minutes", "Entrée gratuite sur réservation", "réserver une place en ligne", "accueil@mediatheque.fr", "Ariane"),
        r("Club Photo Lumière", "un vernissage ouvert aux amis", "galerie du quai, 12 rue du Port", "jeudi à 18 h", "trois élèves présentent leurs photos de voyage", "Un jus de fruit est offert à l'entrée", "venir avec une personne maximum", "021 555 14 14", "Omar"),
        r("Sofia", "un pique-nique au bord du lac", "pelouse près du ponton nord", "dimanche à 12 h 30", "Sofia apporte des couvertures et des jeux de cartes", "Chacun prépare un plat facile à partager", "dire ce que vous apportez", "sms à Sofia", "Clara"),
        r("Restaurant Le Safran", "une table réservée pour six personnes", "18 rue des Écoles", "mardi à 20 h", "la réservation est au nom de Bensaïd", "Menu du soir : 24 € hors boissons", "prévenir en cas de retard", "restaurant@safran.fr", "Yanis"),
        r("Centre social Bellevue", "une soirée crêpes entre voisins", "grande cuisine du centre", "vendredi à 19 h", "les enfants peuvent venir avec un adulte", "Ingrédients fournis, boisson à apporter", "s'inscrire à l'accueil", "04 76 20 30 40", "Élise"),
        r("Association Horizon", "une sortie cinéma en groupe", "cinéma Palace, devant l'entrée", "mercredi à 18 h 20", "le film commence à 18 h 45 en version française", "Billet réduit : 7 € pour les inscrits", "acheter le billet avant mardi", "horizon.sorties@mail.fr", "Malik"),
        r("École des Lilas", "un café des parents", "préau couvert de l'école", "vendredi à 8 h 15", "la directrice présentera les projets du trimestre", "Café offert, gâteaux bienvenus", "signaler votre présence dans le cahier", "secrétariat des Lilas", "Fatou"),
        r("Comité des fêtes", "une invitation au feu d'artifice", "place du Château", "samedi à 21 h 30", "la musique commencera avant le spectacle", "Apporter une veste chaude", "venir quinze minutes avant le début", "info@fetes-locales.fr", "Romain"),
        r("Groupe Randonnée Douce", "une marche facile avec invités", "parking de la forêt basse", "dimanche à 9 h 15", "le parcours dure environ deux heures", "Prévoir eau, chaussures fermées et 2 € pour le covoiturage", "confirmer le nombre de participants", "Nadia au 06 22 10 10 10", "Sébastien"),
        r("Atelier Cuisine Partagée", "un repas syrien ouvert aux curieux", "cuisine B du centre associatif", "samedi à 11 h", "Maha montrera comment préparer le houmous", "Participation : 6 € pour les ingrédients", "indiquer les allergies alimentaires", "atelier.cuisine@mail.fr", "Julie"),
        r("Bibliothèque du Lac", "un club lecture spécial polar", "coin lecture au premier étage", "jeudi à 18 h 10", "le livre choisi est disponible à l'accueil", "Aucun achat n'est nécessaire", "lire les deux premiers chapitres", "bibliolac@ville.fr", "Thomas"),
        r("Amina", "une invitation personnelle à prendre un café", "Café du Théâtre, table près de la fenêtre", "lundi à 16 h 30", "Amina veut discuter de son nouveau travail", "Chacun paie sa consommation", "répondre avant midi", "amina.mobile", "Luc"),
        r("Parents de Zoé", "un goûter après le spectacle", "cour de l'école, près du marronnier", "mardi à 16 h 45", "les enfants chanteront deux chansons avant le goûter", "Merci d'apporter un fruit ou un gâteau simple", "noter votre contribution sur la feuille", "Zoé via Pronote", "Mehdi"),
        r("Maison de quartier Ouest", "une soirée jeux ouverte aux nouveaux", "salle 2, maison de quartier", "vendredi à 20 h", "des jeux courts seront expliqués par les bénévoles", "Entrée gratuite, boisson à 1 €", "s'inscrire pour préparer les tables", "accueil.mqo@ville.fr", "Priya"),
        r("Compagnie des Amis", "une répétition publique de théâtre", "petite salle du conservatoire", "samedi à 14 h", "le public pourra donner son avis après la scène", "Entrée libre dans la limite de 30 places", "arriver sans faire de bruit", "compagnie.amis@mail.fr", "Nolan"),
        r("Réseau Familles", "une invitation à un brunch partagé", "local familles, avenue Pasteur 9", "dimanche à 10 h 30", "un coin jeux sera installé pour les petits", "Apporter un plat froid avec une étiquette", "confirmer le nombre d'enfants", "familles@reseau.fr", "Sara"),
        r("Mairie annexe", "une réception pour les nouveaux habitants", "salle des mariages de la mairie annexe", "jeudi à 18 h 30", "le maire présentera les services du quartier", "Pièce d'identité demandée à l'entrée", "répondre au formulaire d'invitation", "mairie-annexe@ville.fr", "Antoine"),
    ],
    "e10-2": [
        r("Café des langues", "une table pour pratiquer le français", "Café Central, salle du fond", "mardi à 18 h", "chaque table change de langue toutes les vingt minutes", "Une boisson minimum est demandée", "s'inscrire sur la liste en ligne", "cafedeslangues@ville.fr", "Lena"),
        r("Club Salsa Débutants", "une séance d'essai pour rencontrer le groupe", "studio Mambo, rue Verte 3", "jeudi à 19 h", "aucun partenaire n'est nécessaire pour commencer", "Essai gratuit, chaussures propres obligatoires", "envoyer votre prénom avant mercredi", "sms à Diego", "Nour"),
        r("Application Voisins Actifs", "une rencontre autour du jardin partagé", "jardin des Coccinelles", "samedi à 10 h", "les anciens membres expliqueront les parcelles", "Apporter des gants si possible", "cliquer sur Je participe", "appli Voisins Actifs", "Mina"),
        r("Atelier Cuisine du Monde", "une activité pour faire connaissance", "cuisine de la MJC", "vendredi à 18 h 30", "les participants cuisineront par groupes de trois", "Participation : 4 € pour les ingrédients", "indiquer si vous mangez végétarien", "mjc-cuisine@mail.fr", "Karim"),
        r("Groupe Nouveaux en ville", "un parcours découverte du centre", "fontaine de la place Royale", "dimanche à 14 h", "la balade finit par un café partagé", "Prévoir un ticket de tram au cas où", "répondre au sondage du groupe", "forum Nouveaux en ville", "Olga"),
        r("Médiathèque", "un atelier conversation entre lecteurs", "espace presse de la médiathèque", "mercredi à 16 h", "chacun présente un article court qu'il a aimé", "Carte de médiathèque demandée", "choisir un article avant de venir", "accueil de la médiathèque", "Sami"),
        r("Club Randonnée Urbaine", "une marche pour nouveaux amis", "devant l'office du tourisme", "samedi à 9 h 45", "le parcours passe par trois parcs", "Prévoir de l'eau et des baskets", "confirmer sa présence sur le groupe", "Marion au 06 30 44 55 10", "Éva"),
        r("Soirée Jeux Coopératifs", "une table ouverte aux personnes seules", "bar associatif La Pioche", "vendredi à 20 h 15", "un animateur expliquera les règles", "Adhésion journée : 2 €", "arriver avant le début de la première partie", "contact@lapioche.fr", "Boris"),
        r("Cours de français A2", "un binôme de conversation", "salle 14 du centre Alpha", "lundi à 17 h 30", "les binômes changent toutes les semaines", "Cahier et stylo nécessaires", "noter trois questions à poser", "professeur Claire", "Jade"),
        r("Groupe Parents Solo", "un café rencontre sans inscription compliquée", "salon du centre familial", "samedi à 15 h", "un coin dessin est prévu pour les enfants", "Participation libre pour le goûter", "prévenir si un enfant vient aussi", "parentsolo@asso.fr", "Hassan"),
        r("Maison des Jeunes", "une soirée karaoké pour nouveaux membres", "salle musique de la MJ", "jeudi à 19 h 30", "les chansons faciles seront affichées sur écran", "Entrée gratuite avant 20 h", "choisir une chanson ou venir écouter", "MJ au 04 90 12 12 12", "Ana"),
        r("Club Échecs Loisir", "une rencontre amicale débutants", "bibliothèque de quartier, table ronde", "mercredi à 18 h", "les règles seront rappelées au début", "Aucun matériel à acheter", "venir cinq minutes en avance", "echecs.loisir@mail.fr", "Pavel"),
        r("Atelier Couture Partagée", "une séance pour discuter en cousant", "local textile, 5 rue Neuve", "samedi à 13 h 30", "la première heure est réservée aux présentations", "Apporter un vêtement simple à réparer", "envoyer une photo du vêtement", "ateliertextile@ville.fr", "Maya"),
        r("Groupe Balades avec chiens", "une promenade pour maîtres et animaux", "entrée sud du parc Martin", "dimanche à 10 h", "les chiens doivent rester en laisse", "Sacs propres obligatoires", "indiquer le nom de votre chien", "groupe Balades chiens", "Tom"),
        r("Cercle Ciné Discussion", "une rencontre après un film", "hall du cinéma Rex", "mardi à 20 h 40", "la discussion durera trente minutes au café voisin", "Billet à acheter soi-même", "venir avec une question sur le film", "cine-discussion@mail.fr", "Leïla"),
        r("Réseau Étudiants Adultes", "un déjeuner pour nouveaux inscrits", "restaurant universitaire, table 12", "vendredi à 12 h 10", "un tuteur accueillera les personnes à l'entrée", "Menu étudiant : 3,30 € avec carte", "prévenir en cas de retard", "tuteur Ali", "Sonia"),
        r("Club Photo Mobile", "une sortie pour apprendre à se connaître", "devant la fresque du marché", "samedi à 16 h", "chacun prendra trois photos du quartier", "Téléphone chargé recommandé", "partager une photo après la sortie", "clubphotomobile@net.fr", "Ilyas"),
        r("Association Bienvenue", "un parrainage entre habitants", "bureau 2 de la maison citoyenne", "lundi à 18 h", "chaque nouveau rencontre une personne du quartier", "Service gratuit sur inscription", "remplir la fiche de présentation", "bienvenue@quartier.fr", "Greta"),
        r("Groupe Volley Détente", "un entraînement ouvert aux débutants", "gymnase Victor-Hugo", "mercredi à 19 h", "les équipes seront mélangées après chaque set", "Baskets propres demandées", "signaler votre niveau au responsable", "responsable volley", "Nico"),
        r("Atelier Podcast Amateur", "une rencontre pour créer une équipe", "studio radio de la MJC", "jeudi à 18 h 15", "le thème proposé est la vie du quartier", "Casque prêté sur place", "préparer une idée de sujet", "podcast@mjc.fr", "Rita"),
    ],
    "e10-3": [
        r("Comité Mariage Lina et Paul", "l'organisation du mariage civil", "mairie centrale, salle des mariages", "samedi à 10 h 45", "les témoins doivent arriver avec leur pièce d'identité", "Photos autorisées seulement après la cérémonie", "confirmer votre présence au repas", "mariage.lina.paul@mail.fr", "Emma"),
        r("Fête du Quartier Nord", "la préparation des stands", "place des Tilleuls", "vendredi à 17 h", "les tables seront montées par les bénévoles", "Chaque stand reçoit deux chaises", "choisir un créneau de montage", "comite.nord@ville.fr", "Farid"),
        r("Équipe Concert Solidaire", "un concert au profit de l'épicerie sociale", "salle Mandela", "samedi à 20 h", "trois groupes locaux joueront chacun trente minutes", "Entrée : 8 € ou don alimentaire", "réserver les billets avant jeudi", "concert.solidaire@mail.fr", "Claire"),
        r("MJC Bellevue", "un vide-greniers de printemps", "cour de la MJC", "dimanche à 8 h", "les exposants entrent par le portail gris", "Emplacement : 6 € avec table", "envoyer la fiche d'inscription", "mjc-bellevue@ville.fr", "Youssef"),
        r("Club Sport Santé", "un tournoi amical de badminton", "gymnase des Acacias", "mercredi à 18 h 30", "les équipes seront tirées au sort sur place", "Raquette prêtée si besoin", "apporter des chaussures propres", "sport-sante@mail.fr", "Lou"),
        r("Collectif Rue Verte", "une inauguration de fresque", "mur du passage Colbert", "jeudi à 17 h 45", "les artistes expliqueront leur travail", "Goûter offert par les commerçants", "venir sans vélo dans le passage", "collectif.rueverte@net.fr", "Sacha"),
        r("Festival des Saveurs", "la réunion des bénévoles avant le festival", "salle 3 du centre culturel", "mardi à 19 h", "les tâches seront réparties par équipe", "Badge bénévole remis à l'entrée", "choisir une mission sur le tableau", "benevoles.saveurs@mail.fr", "Nora"),
        r("École de Musique", "une audition de fin d'année", "auditorium du conservatoire", "vendredi à 18 h", "chaque élève jouera un morceau court", "Entrée libre pour deux proches", "arriver avec l'instrument accordé", "secretariat.musique@ville.fr", "Adrien"),
        r("Association Culture Plus", "une conférence sur les jardins urbains", "salle Victor-Schœlcher", "lundi à 18 h 30", "la conférencière répondra aux questions à la fin", "Participation conseillée : 3 €", "réserver car la salle est petite", "cultureplus@asso.fr", "Mila"),
        r("Parents de CM2", "la kermesse de fin d'année", "cour de l'école Jean-Moulin", "samedi à 14 h", "les jeux ouvriront après le spectacle des élèves", "Chaque famille apporte un gâteau étiqueté", "s'inscrire pour tenir un stand", "cahier de liaison", "Rania"),
        r("Cinéma Rex", "une projection débat", "salle 2 du cinéma Rex", "jeudi à 20 h", "le réalisateur participera par visioconférence", "Tarif unique : 6 €", "acheter la place en avance", "contact@cinemarex.fr", "Victor"),
        r("Office du Tourisme", "une visite guidée nocturne", "devant la tour de l'Horloge", "vendredi à 21 h", "le guide racontera trois légendes locales", "Lampe de poche recommandée", "réserver avant mercredi midi", "tourisme@ville.fr", "Inès"),
        r("Chorale Arc-en-Ciel", "un concert participatif", "église Saint-Luc", "dimanche à 16 h", "le public chantera le dernier refrain", "Entrée gratuite, panier à la sortie", "arriver avant la fermeture des portes", "chorale.arc@mail.fr", "Mathis"),
        r("Librairie Pages Ouvertes", "une séance de dédicace", "librairie, espace jeunesse", "samedi à 11 h", "l'autrice signera son album après la lecture", "Livre disponible sur place à 12 €", "demander un ticket d'attente", "librairie.pages@net.fr", "Salomé"),
        r("Collectif Étudiants", "une soirée internationale", "foyer universitaire", "mercredi à 19 h", "chaque table présentera un pays", "Apporter un petit plat si possible", "indiquer le pays choisi", "collectif.etudiants@mail.fr", "Kenji"),
        r("Service Culture", "une exposition photo en plein air", "grilles du parc central", "mardi à 12 h", "les photos resteront visibles pendant trois semaines", "Accès libre sans billet", "respecter le sens de visite", "culture@ville.fr", "Maëlle"),
        r("Club Cyclo", "une course lente et familiale", "piste du stade municipal", "dimanche à 10 h 30", "le gagnant sera le dernier sans poser le pied", "Casque obligatoire pour tous", "vérifier les freins du vélo", "clubcyclo@asso.fr", "Jules"),
        r("Atelier Théâtre", "une soirée d'improvisation", "salle noire de la MJC", "vendredi à 20 h 30", "le public proposera des mots au début", "Participation : 5 €", "réserver par message", "theatre.mjc@mail.fr", "Lola"),
        r("Comité Jumelage", "un accueil de visiteurs italiens", "hall de la gare", "jeudi à 16 h 20", "les familles porteront un badge bleu", "Prévoir un ticket de bus pour le retour", "envoyer votre numéro de téléphone", "jumelage@ville.fr", "Marco"),
        r("Marché des Créateurs", "l'installation des exposants", "halle couverte du marché", "samedi à 7 h 30", "les voitures doivent partir avant 9 h", "Table fournie, rallonge non fournie", "imprimer votre autorisation", "createurs@marche.fr", "Zoé"),
    ],
    "e10-4": [
        r("École Jean-Moulin", "la réunion parents-professeurs", "salle polyvalente de l'école", "mardi à 18 h", "les familles entreront par le portail vert", "Bulletin du trimestre à apporter", "prendre un créneau avec le professeur principal", "pronote de la classe", "Mme Diallo"),
        r("Collège Victor-Hugo", "une sortie au musée d'histoire", "devant le collège", "jeudi à 8 h 15", "le retour est prévu avant la fin des cours", "Pique-nique froid obligatoire", "signer l'autorisation parentale", "vie scolaire", "M. Lopez"),
        r("Association des Parents", "un café d'accueil pour nouvelles familles", "hall du bâtiment B", "vendredi à 8 h 30", "deux parents expliqueront le fonctionnement de l'école", "Café offert par l'association", "confirmer votre présence", "parents.jeanmoulin@mail.fr", "Nora"),
        r("Cantine Municipale", "le changement de menu de vendredi", "restaurant scolaire", "vendredi à midi", "le poisson sera remplacé par une omelette", "Menu végétarien disponible sur demande", "prévenir en cas d'allergie", "cantine@ville.fr", "Adam"),
        r("Professeur de français", "un devoir de lecture à rendre", "salle 204", "lundi à 9 h", "les élèves doivent écrire dix lignes sur le chapitre 3", "Cahier bleu obligatoire", "relire le texte avant le cours", "messagerie ENT", "Sofia"),
        r("École des Platanes", "la photo de classe", "préau de l'école", "jeudi à 10 h 20", "les frères et sœurs seront photographiés après la récréation", "Tenue simple recommandée", "rapporter le bon de commande signé", "secrétariat", "Léo"),
        r("Conseil d'École", "une demande de représentants de parents", "bureau de la directrice", "mardi à 17 h 45", "deux postes sont encore libres", "Réunion prévue quatre fois par an", "envoyer votre candidature", "direction@ecole.fr", "Hajar"),
        r("Bibliothèque Scolaire", "un prêt de livres pour les vacances", "salle BCD", "vendredi à 15 h", "chaque élève pourra emprunter deux livres", "Carte de lecteur à présenter", "rendre les anciens livres", "bibliotheque.ecole@mail.fr", "Yanis"),
        r("Club Devoirs", "une aide aux devoirs après la classe", "salle 12 du collège", "lundi et jeudi à 16 h 45", "les groupes seront limités à huit élèves", "Service gratuit sur inscription", "remplir la fiche avec un parent", "cpe du collège", "Maya"),
        r("Équipe EPS", "la journée sportive de printemps", "stade municipal", "mercredi à 13 h 30", "les classes tourneront sur quatre ateliers", "Bouteille d'eau et casquette demandées", "venir en tenue de sport", "professeur d'EPS", "Noé"),
        r("Secrétariat du lycée", "la remise des dossiers de bourse", "bureau 1 du secrétariat", "avant vendredi à 16 h", "les dossiers incomplets seront rendus aux familles", "Avis d'imposition à joindre", "déposer le dossier signé", "secretariat.lycee@mail.fr", "Inès"),
        r("Classe de CE2", "une collecte de matériel pour les arts", "carton près de la porte de classe", "jusqu'à mardi matin", "les bouchons et boîtes propres seront utilisés", "Pas de verre ni d'objet coupant", "apporter seulement du matériel lavé", "enseignante Mme Roy", "Mila"),
        r("Transport Scolaire", "un retard possible du car 4", "arrêt Les Pins", "vendredi à 7 h 40", "des travaux ralentissent la route principale", "Attente possible de dix minutes", "rester à l'arrêt avec un adulte", "ligne info transport", "Basile"),
        r("Infirmerie du collège", "une séance sur le sommeil des adolescents", "salle de permanence", "mardi à 14 h", "l'infirmière donnera des conseils simples", "Autorisation nécessaire pour les externes", "rapporter le coupon réponse", "infirmerie@college.fr", "Amel"),
        r("Atelier Théâtre Scolaire", "les inscriptions au spectacle de fin d'année", "salle culturelle", "jeudi à 12 h 30", "les répétitions auront lieu pendant la pause déjeuner", "Texte distribué après l'inscription", "choisir un rôle court ou long", "Mme Garnier", "Ruben"),
        r("Foyer Socio-Éducatif", "une vente de gâteaux pour financer le voyage", "devant la salle des professeurs", "vendredi à 10 h", "les élèves tiendront le stand par groupes de deux", "Prix conseillé : 1 € la part", "apporter les gâteaux le matin", "foyer.college@mail.fr", "Salma"),
        r("Direction de l'école", "un exercice d'évacuation incendie", "dans toutes les classes", "lundi à 10 h 05", "l'alarme sonnera pendant deux minutes", "Les parents ne doivent pas entrer dans la cour", "rassurer les enfants avant l'école", "direction@platanes.fr", "Éric"),
        r("Classe de 5e B", "un exposé par groupes", "salle 305", "mercredi à 11 h", "chaque groupe parlera pendant cinq minutes", "Affiche A3 autorisée", "envoyer le plan au professeur", "ENT de français", "Lina"),
        r("Service Périscolaire", "l'inscription à l'étude surveillée", "bureau périscolaire", "avant le 5 septembre", "les places sont données selon l'ordre d'arrivée", "Tarif calculé avec le quotient familial", "compléter le formulaire municipal", "periscolaire@ville.fr", "Pablo"),
        r("Musique au Collège", "une répétition de chorale", "salle de musique", "mardi à 12 h 15", "les élèves prépareront deux chansons pour la fête", "Repas rapide à prévoir avant la répétition", "apprendre le refrain", "professeur de musique", "Élina"),
    ],
    "e10-5": [
        r("Maison du Bénévolat", "une réunion d'accueil des nouveaux bénévoles", "salle 1 de la maison citoyenne", "mardi à 18 h", "trois associations présenteront leurs missions", "Entrée libre sans cotisation le premier soir", "remplir la fiche de disponibilité", "benevolat@ville.fr", "Samir"),
        r("Association Les Paniers Solidaires", "une distribution alimentaire", "local rue des Frères 8", "jeudi à 14 h", "les bénévoles prépareront les sacs avant l'ouverture", "Chaussures fermées recommandées", "indiquer vos horaires possibles", "paniers.solidaires@mail.fr", "Claire"),
        r("Club Nature du Canal", "un nettoyage des berges", "pont de la Minoterie", "samedi à 9 h 30", "les sacs et pinces seront fournis", "Gants personnels conseillés", "s'inscrire pour prévoir le matériel", "clubnature@asso.fr", "Nina"),
        r("Secours Amitié Local", "une permanence d'écoute bénévole", "bureau 4 du centre social", "lundi à 17 h", "une formation courte est obligatoire avant de commencer", "Adhésion annuelle : 10 €", "prendre rendez-vous avec la coordinatrice", "coordination@secoursamitie.fr", "Olivier"),
        r("Association Sport Pour Tous", "une séance adaptée aux seniors", "gymnase des Prés", "mercredi à 10 h", "les bénévoles aideront à installer les tapis", "Tenue confortable demandée", "arriver quinze minutes avant la séance", "sportpourtous@mail.fr", "Maya"),
        r("Collectif Zéro Déchet", "un atelier réparation d'objets", "atelier municipal, porte jaune", "samedi à 14 h", "les bénévoles essaieront de réparer petit électroménager et jouets", "Un seul objet par personne", "décrire l'objet à l'avance", "zerodechet@ville.fr", "Rachid"),
        r("Bibliothèque de Rue", "une lecture pour enfants au square", "square des Marronniers", "mercredi à 15 h", "les bénévoles liront des albums sous la tente", "Livres prêtés par la médiathèque", "venir avec une couverture", "bibliorue@mail.fr", "Anaïs"),
        r("Comité de Quartier Sud", "l'assemblée générale annuelle", "salle des associations", "vendredi à 19 h", "le budget et les projets seront présentés", "Cotisation possible sur place : 5 €", "voter pour le nouveau bureau", "quartiersud@asso.fr", "Kamel"),
        r("Atelier Vélo Solidaire", "une permanence de réparation", "garage partagé, rue du Moulin", "jeudi à 18 h", "les bénévoles apprennent à régler les freins", "Pièces neuves à prix coûtant", "venir avec son vélo propre", "atelier.velo@mail.fr", "Lise"),
        r("Association Lire Ensemble", "un appel à lecteurs bénévoles", "école Paul-Bert", "mardi à 16 h 30", "les lecteurs accompagnent de petits groupes pendant trente minutes", "Extrait de casier demandé après inscription", "choisir un jour de présence", "lireensemble@asso.fr", "Gabriel"),
        r("Jardins Partagés Est", "une matinée de plantation", "jardin derrière la piscine", "dimanche à 9 h", "des plants de tomates et de basilic seront distribués", "Apporter une bouteille d'eau", "noter votre nom sur le tableau", "jardins.est@mail.fr", "Sara"),
        r("Association Culture Ouverte", "un accueil de visiteurs au musée", "hall du musée municipal", "samedi à 13 h", "les bénévoles orienteront les familles vers les ateliers", "Badge remis à l'arrivée", "lire le plan du musée avant samedi", "cultureouverte@ville.fr", "Théo"),
        r("Banque du Temps", "un échange de services entre habitants", "local associatif du marché", "lundi à 18 h 30", "une heure donnée vaut une heure reçue", "Inscription gratuite avec adresse du quartier", "préparer une compétence à proposer", "banquedutemps@net.fr", "Yara"),
        r("Association Refuge Animal", "une collecte de couvertures", "devant la clinique vétérinaire", "samedi de 10 h à 12 h", "les couvertures doivent être propres et sans trous", "Croquettes acceptées en petits sacs", "déposer les dons dans les cartons marqués", "refuge.local@mail.fr", "Hugo"),
        r("Radio Associative Onde Libre", "une réunion pour nouveaux chroniqueurs", "studio 2, maison des médias", "jeudi à 18 h 45", "la première émission parlera des initiatives locales", "Aucune expérience radio nécessaire", "préparer une idée de rubrique", "ondelibre@radio.fr", "Iris"),
        r("Collectif Couture Solidaire", "un atelier de sacs en tissu", "salle textile du centre social", "vendredi à 14 h", "les sacs seront donnés à l'épicerie sociale", "Machines disponibles sur place", "apporter du tissu propre si possible", "couturesolidaire@mail.fr", "Mehdi"),
        r("Association Mémoire du Quartier", "une collecte de photos anciennes", "archives municipales, salle 2", "mercredi à 17 h", "les photos seront scannées puis rendues", "Écrire le nom des personnes au dos si possible", "prendre rendez-vous pour scanner", "memoirequartier@ville.fr", "Jeanne"),
        r("Club Handi-Loisirs", "une sortie accompagnée au parc", "arrêt de tram Université", "samedi à 10 h 15", "chaque bénévole accompagne une personne pendant la balade", "Pique-nique fourni par l'association", "confirmer votre disponibilité", "handiloisirs@asso.fr", "Benoît"),
        r("Association Aide Numérique", "un atelier pour apprendre les démarches en ligne", "salle informatique de la mairie", "mardi à 9 h 30", "les bénévoles aident à créer une adresse e-mail", "Ordinateurs fournis sur place", "venir avec une pièce d'identité", "aidenumerique@ville.fr", "Rosa"),
        r("Collectif Fête Solidaire", "la préparation d'un repas partagé", "cuisine du centre Fraternité", "dimanche à 11 h", "les plats seront servis aux habitants isolés", "Tablier conseillé", "choisir une équipe cuisine ou service", "fetesolidaire@mail.fr", "Mounir"),
    ],
}


LESSONS = {key: make_lesson(rows) for key, rows in LESSON_ROWS.items()}


def build_lessons():
    return LESSONS
