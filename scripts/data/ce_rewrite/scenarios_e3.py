"""E3 scenarios — école, quotidien, travail."""
from generate_all_data import Q
from scenarios_common import render_email


def build_e3_lessons():
    return {
        "e3-1": {"title": "E3.1 À l'école / à l'université", "messages": _e3_1_messages(), "emails": _e3_1_emails()},
        "e3-2": {"title": "E3.2 La vie quotidienne", "messages": _e3_2_messages(), "emails": _e3_2_emails()},
        "e3-3": {"title": "E3.3 Au travail", "messages": _e3_3_messages(), "emails": _e3_3_emails()},
    }


def _school_msg(header, writer, subject, schedule, room, teacher, exam, extra):
    text = f"""{header}

{writer}
Matière : {subject}. Horaire : {schedule}.
Salle : {room}. Professeur : {teacher}.
{exam}
{extra}"""
    return {"text": text, "questions": [
        Q("Quelle matière ?", subject.capitalize(), "Sport seul", "Cuisine", f"Matière : _________.", subject, f"C'est {subject}.", 0),
        Q("Quel horaire ?", schedule, "Minuit", "3 h du matin", f"Horaire : _________.", schedule.split()[0], f"Horaire : {schedule}.", 0),
        Q("Quelle salle ?", room.capitalize(), "Dehors", "À la plage", f"Salle : _________.", room, f"Salle : {room}.", 0),
        Q("Quel professeur ?", teacher, "Personne", "Un chat", f"Professeur : _________.", teacher, f"Professeur : {teacher}.", 0, prof=True),
        Q("Y a-t-il un examen ?", exam.split(".")[0].capitalize(), "Non", "Jamais", f"_________ .", exam.split()[0], f"Examen : {exam}.", 0),
        Q("Quelle information supplémentaire ?", extra.split(".")[0].capitalize(), "Rien", "Un chat", f"_________ .", extra.split()[0], f"Info : {extra}.", 0),
    ]}


def _e3_1_messages():
    specs = [
        ("Affichage école", "École du Lac —", "Mathématiques", "lundi 8 h – 9 h", "salle 12", "M. Dupont", "Examen le 15 mars.", "Apporter calculatrice et règle."),
        ("SMS groupe classe", "Salut la classe !", "Français", "mardi 10 h – 11 h", "salle 5", "Mme Martin", "Contrôle de lecture vendredi.", "Lire le chapitre 3."),
        ("Note du professeur", "Chers élèves,", "Histoire", "mercredi 14 h – 15 h", "salle 8", "M. Weber", "Devoir à rendre lundi.", "Préparer un exposé."),
        ("E-mail étudiant", "Bonjour,", "Anglais", "jeudi 9 h – 10 h 30", "salle 3", "Mme Rossi", "Test oral la semaine prochaine.", "Réviser le vocabulaire."),
        ("Agenda université", "Faculté de médecine —", "Anatomie", "vendredi 8 h – 12 h", "amphi A", "Dr. Keller", "Examen final en juin.", "Apporter blouse blanche."),
        ("Message parents", "Chers parents,", "Sciences", "lundi 13 h – 14 h", "labo 2", "Mme Petit", "Sortie au musée jeudi.", "Autorisation parentale obligatoire."),
        ("Forum étudiants", "Bonjour,", "Informatique", "mardi 15 h – 17 h", "salle info 4", "M. Garcia", "Projet en groupe à rendre.", "Travailler en équipe de 3."),
        ("WhatsApp cours", "Hey !", "Allemand", "mercredi 11 h – 12 h", "salle 7", "M. Müller", "Dictée vendredi.", "Apprendre les verbes."),
        ("Annonce bibliothèque", "Bibliothèque scolaire —", "Recherche documentaire", "jeudi 10 h – 11 h", "bibliothèque", "Mme Costa", "Pas d'examen.", "Apporter carte étudiant."),
        ("Note directeur", "Chers élèves,", "Éducation civique", "vendredi 9 h – 10 h", "salle 1", "M. Blanc", "Débat en classe.", "Préparer ses arguments."),
        ("SMS rappel", "Rappel !", "Géographie", "lundi 11 h – 12 h", "salle 9", "Mme Hassan", "Carte à rendre mardi.", "Couleurs obligatoires."),
        ("E-mail prof", "Bonjour Monsieur,", "Physique", "mardi 8 h – 9 h 30", "labo 1", "M. Leroy", "TP mercredi.", "Apporter blouse."),
        ("Affichage examen", "IMPORTANT —", "Chimie", "mercredi 13 h – 15 h", "labo 3", "Mme Singh", "Examen écrit le 20 avril.", "Réviser chapitres 4 et 5."),
        ("Message secrétariat", "Secrétariat —", "Orientation", "jeudi 14 h – 15 h", "bureau 2", "Mme Pop", "Pas d'examen.", "Prendre rendez-vous."),
        ("Groupe WhatsApp fac", "Salut !", "Biologie", "vendredi 10 h – 12 h", "amphi B", "Dr. Martin", "QCM la semaine prochaine.", "Réviser les cours."),
        ("Note tableau", "Cours annulé —", "Musique", "lundi 15 h – 16 h", "salle musique", "M. Rossi", "Pas de cours lundi.", "Reporté à mardi."),
        ("E-mail université", "Service scolarité —", "Droit", "mardi 14 h – 16 h", "amphi C", "Prof. Dubois", "Examen partiel en mai.", "Documents autorisés."),
        ("SMS prof remplaçant", "Bonjour,", "EPS", "mercredi 10 h – 11 h", "gymnase", "M. Antoine", "Pas d'examen.", "Tenue de sport obligatoire."),
        ("Annonce portail", "Portail étudiant —", "Économie", "jeudi 8 h – 10 h", "salle 15", "Mme Kim", "Devoir en ligne.", "Date limite : vendredi."),
        ("Message association", "Association étudiante —", "Projet interdisciplinaire", "vendredi 14 h – 17 h", "salle polyvalente", "Équipe pédagogique", "Présentation finale.", "Inviter les familles."),
    ]
    return [_school_msg(h, w, s, sch, r, t, e, x) for h, w, s, sch, r, t, e, x in specs]


def _e3_1_emails():
    emails = []
    specs = [
        ("École du Lac", "Rentrée scolaire", "lundi 26 août", "8 h", "cour de l'école", "cahiers et stylos", "M. Dupont"),
        ("Faculté de médecine", "Horaires de cours", "septembre", "8 h – 17 h", "campus principal", "carte étudiant", "Dr. Keller"),
        ("M. Martin", "Devoir de français", "vendredi 15 mars", "23 h 59", "plateforme en ligne", "dissertation 300 mots", "Mme Martin"),
        ("Secrétariat", "Sortie scolaire", "jeudi 20 mars", "8 h 30", "musée d'histoire", "pique-nique", "Mme Petit"),
        ("Université de Genève", "Examen partiel", "mardi 8 avril", "14 h", "amphi A", "calculatrice", "Prof. Dubois"),
        ("Bibliothèque", "Horaires vacances", "juillet-août", "9 h – 17 h", "bibliothèque centrale", "carte membre", "Mme Costa"),
        ("Association parents", "Réunion", "mercredi 3 avril", "19 h", "salle polyvalente", "questions sur le projet", "M. Blanc"),
        ("Service scolarité", "Inscription", "avant le 30 avril", "en ligne", "portail étudiant", "pièces d'identité", "Mme Singh"),
        ("M. Weber", "Exposé histoire", "lundi 10 mars", "en classe", "salle 8", "diapositives", "M. Weber"),
        ("Club sport scolaire", "Entraînement", "mardi et jeudi", "17 h", "gymnase", "tenue de sport", "M. Antoine"),
        ("Mme Rossi", "Test d'anglais", "vendredi 22 mars", "10 h", "salle 3", "vocabulaire unité 4", "Mme Rossi"),
        ("Laboratoire", "TP chimie", "mercredi 17 avril", "13 h", "labo 3", "blouse et lunettes", "Mme Hassan"),
        ("Orientation", "Conseil orientation", "jeudi 25 avril", "15 h", "bureau 2", "bulletins scolaires", "Mme Pop"),
        ("Faculté droit", "Conférence", "mardi 14 mai", "18 h", "amphi C", "inscription gratuite", "Prof. Dubois"),
        ("École primaire", "Goûter fin d'année", "mercredi 26 juin", "16 h", "cour de l'école", "plat à partager", "Mme Martin"),
        ("Portail étudiant", "Devoir en ligne", "vendredi 5 avril", "minuit", "plateforme Moodle", "rapport de 5 pages", "Mme Kim"),
        ("Gymnase", "Cours annulé", "lundi 1 avril", "—", "salle musique", "reporté à mardi", "M. Rossi"),
        ("Association étudiante", "Soirée intégration", "samedi 21 septembre", "20 h", "campus", "boisson à apporter", "Bureau AE"),
        ("M. Garcia", "Projet informatique", "lundi 29 avril", "en groupe", "salle info 4", "présentation PowerPoint", "M. Garcia"),
        ("Dr. Martin", "QCM biologie", "mercredi 15 mai", "10 h", "amphi B", "réviser chapitres 1-5", "Dr. Martin"),
    ]
    for sender, subject, date, hour, place, bring, contact in specs:
        lines = [
            f"Information importante pour les élèves/étudiants.",
            f"Événement : {subject}.",
            f"Date : {date}. Heure : {hour}.",
            f"Lieu : {place}.",
            f"À apporter : {bring}. Contact : {contact}.",
        ]
        qs = [
            Q("Quel est l'événement ?", subject, "Un barbecue", "Un film", f"Événement : _________.", subject.split()[0], f"C'est {subject}.", 0),
            Q("Quelle date ?", date.capitalize(), "Hier", "En 1990", f"Date : _________.", date.split()[0], f"Date : {date}.", 0),
            Q("À quelle heure ?", hour, "3 h du matin", "Minuit", f"Heure : _________.", hour.replace(" h", "").split("–")[0].strip(), f"Heure : {hour}.", 0),
            Q("Où ?", place.capitalize(), "À la plage", "À l'aéroport", f"Lieu : _________.", place.split()[0], f"Lieu : {place}.", 0),
            Q("Quoi apporter ?", bring.capitalize(), "Rien", "Un passeport", f"À apporter : _________.", bring.split()[0], f"Apporter : {bring}.", 0),
            Q("Qui contacter ?", contact, "Le facteur", "Un voisin", f"Contact : _________.", contact.split()[-1], f"Contact : {contact}.", 0),
        ]
        emails.append(render_email(sender, subject, lines, qs))
    return emails


def _daily_msg(header, writer, activity, time, place, with_who, transport, cost):
    text = f"""{header}

{writer}
Activité : {activity}. Heure : {time}.
Lieu : {place}. Avec : {with_who}.
Transport : {transport}. Coût : {cost}."""
    return {"text": text, "questions": [
        Q("Quelle activité ?", activity.capitalize(), "Dormir", "Travailler seul", f"Activité : _________.", activity, f"C'est {activity}.", 0),
        Q("À quelle heure ?", time, "Minuit", "4 h du matin", f"Heure : _________.", time.split()[0], f"Heure : {time}.", 0),
        Q("Où ?", place.capitalize(), "À l'hôpital", "En mer", f"Lieu : _________.", place.split()[0], f"Lieu : {place}.", 0),
        Q("Avec qui ?", with_who.capitalize(), "Seul", "Personne", f"Avec : _________.", with_who.split()[0], f"Avec {with_who}.", 0),
        Q("Quel transport ?", transport.capitalize(), "Avion privé", "Fusée", f"Transport : _________.", transport.split()[0], f"Transport : {transport}.", 0),
        Q("Quel coût ?", cost, "Gratuit toujours", "10000 francs", f"Coût : _________.", cost.split()[0], f"Coût : {cost}.", 0),
        Q("L'activité est-elle en groupe ?", "Oui" if with_who not in ("seul", "seule") else "Non", "Non" if with_who not in ("seul", "seule") else "Oui", "On ne sait pas", f"Avec : _________.", with_who.split()[0], f"Avec {with_who}.", 0),
    ]}


def _e3_2_messages():
    specs = [
        ("SMS à un ami", "Salut !", "courses au supermarché", "17 h", "Migros du centre", "ma mère", "à pied", "45 francs"),
        ("Agenda personnel", "Aujourd'hui —", "rendez-vous chez le médecin", "10 h 30", "cabinet Dr. Martin", "seul", "bus n° 5", "gratuit avec assurance"),
        ("WhatsApp famille", "Coucou !", "déjeuner en famille", "12 h 30", "restaurant Le Lac", "mes parents", "voiture", "35 francs"),
        ("Note rappel", "N'oublie pas —", "sport à la salle", "19 h", "FitPlus", "mon ami Tom", "vélo", "abonnement mensuel"),
        ("E-mail banque", "Bonjour,", "retrait au distributeur", "14 h", "banque UBS", "seul", "à pied", "200 francs"),
        ("Message coiffeur", "Bonjour,", "coupe de cheveux", "16 h", "salon Élégance", "seule", "tram 12", "45 francs"),
        ("Liste courses", "À acheter —", "pain, lait et fruits", "18 h", "Coop du quartier", "ma sœur", "à pied", "25 francs"),
        ("SMS dentiste", "Rappel :", "contrôle dentaire", "9 h", "cabinet dentaire", "seul", "bus", "couverte par assurance"),
        ("Planning semaine", "Mercredi —", "cinéma", "20 h", "cinéma ABC", "Léa et Marc", "métro", "18 francs"),
        ("Message pharmacie", "Bonjour,", "chercher médicaments", "11 h", "pharmacie du centre", "pour mon fils", "à pied", "15 francs"),
        ("WhatsApp sport", "Hey !", "match de tennis", "15 h", "club de tennis", "Hugo", "voiture", "20 francs"),
        ("Note frigo", "Ce soir —", "cours de cuisine", "18 h 30", "école culinaire", "groupe de 8", "bus 3", "60 francs"),
        ("SMS bibliothèque", "Bonjour,", "rendre des livres", "17 h 30", "bibliothèque municipale", "seul", "vélo", "gratuit"),
        ("Agenda", "Samedi —", "marché", "8 h", "place du Marché", "ma grand-mère", "tram", "30 francs"),
        ("Message vélo", "Salut !", "balade à vélo", "10 h", "bord du lac", "Emma", "vélo", "gratuit"),
        ("Rappel téléphone", "Rappel —", "appeler la banque", "14 h", "de la maison", "seul", "téléphone", "gratuit"),
        ("WhatsApp voisins", "Bonjour,", "apéro de quartier", "18 h", "cour de l'immeuble", "les voisins", "à pied", "gratuit"),
        ("Note", "Demain —", "laverie", "9 h", "laverie automatique", "seul", "à pied", "8 francs"),
        ("SMS piscine", "Salut !", "natation", "7 h", "piscine municipale", "David", "bus 8", "entrée 7 francs"),
        ("Planning", "Dimanche —", "brunch", "10 h", "café du Port", "mes amis", "voiture", "28 francs"),
    ]
    return [_daily_msg(h, w, a, t, p, w2, tr, c) for h, w, a, t, p, w2, tr, c in specs]


def _e3_2_emails():
    emails = []
    specs = [
        ("Dr. Martin", "Rendez-vous médical", "contrôle annuel", "mardi 12 mars", "10 h 30", "cabinet médical", "carte d'assurance"),
        ("Salon Élégance", "Confirmation RDV", "coupe + brushing", "vendredi 8 mars", "16 h", "salon du centre", "arriver 5 min avant"),
        ("FitPlus", "Cours de yoga", "cours débutant", "lundi et mercredi", "19 h", "salle de sport", "tapis de yoga"),
        ("Cinéma ABC", "Réservation", "film français", "samedi 9 mars", "20 h", "salle 3", "billets en pièce jointe"),
        ("Pharmacie Centrale", "Médicaments prêts", "ordonnance", "aujourd'hui", "toute la journée", "pharmacie", "carte d'assurance"),
        ("Bibliothèque", "Livres en retard", "rappel retour", "avant vendredi", "17 h", "bibliothèque", "éviter pénalité"),
        ("Restaurant Le Lac", "Réservation confirmée", "dîner", "samedi 16 mars", "19 h 30", "table près de la fenêtre", "menu 45 francs"),
        ("Banque UBS", "Relevé de compte", "document mensuel", "disponible", "en ligne", "portail bancaire", "mot de passe"),
        ("Club de tennis", "Match amical", "tennis double", "dimanche 10 mars", "15 h", "court n° 2", "raquette"),
        ("École culinaire", "Atelier pasta", "cours cuisine", "mardi 19 mars", "18 h 30", "cuisine école", "tablier"),
        ("Coiffeur Express", "Rappel RDV", "coloration", "jeudi 21 mars", "14 h", "salon Express", "test allergie"),
        ("Piscine municipale", "Horaires Pâques", "ouverture spéciale", "lundi de Pâques", "9 h – 18 h", "piscine", "entrée réduite"),
        ("Marché", "Marché bio", "producteurs locaux", "samedi", "8 h – 13 h", "place du Marché", "sac réutilisable"),
        ("Dentiste", "Rappel contrôle", "examen dentaire", "mercredi 27 mars", "9 h", "cabinet", "brosse à dents"),
        ("Café du Port", "Brunch réservé", "brunch dominical", "dimanche 24 mars", "10 h", "terrasse", "réservation 2 personnes"),
        ("Laverie", "Machine disponible", "lave-linge libre", "maintenant", "—", "laverie rez-de-chaussée", "pièces de 2 francs"),
        ("Médecin", "Résultats analyses", "documents médicaux", "à retirer", "14 h – 17 h", "secrétariat", "pièce d'identité"),
        ("Supermarché", "Offre spéciale", "promotions semaine", "jusqu'à dimanche", "toute la journée", "Migros centre", "carte fidélité"),
        ("Voisins", "Fête de quartier", "apéro collectif", "samedi 30 mars", "17 h", "cour", "boisson à apporter"),
        ("Sport club", "Entraînement", "football", "mardi et jeudi", "18 h", "stade municipal", "chaussures de sport"),
    ]
    for sender, subject, activity, date, hour, place, note in specs:
        lines = [
            f"Information sur votre activité quotidienne.",
            f"Activité : {activity}.",
            f"Date : {date}. Heure : {hour}.",
            f"Lieu : {place}.",
            f"Note : {note}.",
        ]
        qs = [
            Q("Quelle activité ?", activity.capitalize(), "Dormir", "Voyager loin", f"Activité : _________.", activity.split()[0], f"C'est {activity}.", 0),
            Q("Quelle date ?", date.capitalize(), "Hier", "En 1800", f"Date : _________.", date.split()[0], f"Date : {date}.", 0),
            Q("À quelle heure ?", hour, "Minuit", "4 h", f"Heure : _________.", hour.replace(" h", "").split("–")[0].strip(), f"Heure : {hour}.", 0),
            Q("Où ?", place.capitalize(), "En mer", "Dans l'espace", f"Lieu : _________.", place.split()[0], f"Lieu : {place}.", 0),
            Q("Quelle note importante ?", note.capitalize(), "Rien", "Un chat", f"Note : _________.", note.split()[0], f"Note : {note}.", 0),
            Q("Quel est l'objet ?", subject, "Une facture d'électricité", "Un divorce", f"Objet : _________", subject.split()[0], f"Objet : {subject}.", 0),
        ]
        emails.append(render_email(sender, subject, lines, qs))
    return emails


def _work_msg(header, writer, company, job, schedule, colleague, task, meeting):
    text = f"""{header}

{writer}
Entreprise : {company}. Poste : {job}.
Horaires : {schedule}. Collègue : {colleague}.
Tâche du jour : {task}.
Réunion : {meeting}."""
    return {"text": text, "questions": [
        Q("Quelle entreprise ?", company, "Une école", "Un zoo", f"Entreprise : _________.", company, f"C'est {company}.", 0),
        Q("Quel poste ?", job.capitalize(), "Roi", "Astronaute", f"Poste : _________.", job, f"Poste : {job}.", 0, prof=True),
        Q("Quels horaires ?", schedule, "Toute la nuit", "Jamais", f"Horaires : _________.", schedule.split()[0], f"Horaires : {schedule}.", 0),
        Q("Quel collègue ?", colleague, "Personne", "Un chat", f"Collègue : _________.", colleague, f"Collègue : {colleague}.", 0),
        Q("Quelle tâche ?", task.capitalize(), "Dormir", "Voyager", f"Tâche : _________.", task.split()[0], f"Tâche : {task}.", 0),
        Q("Quelle réunion ?", meeting.capitalize(), "Aucune", "Une fête", f"Réunion : _________.", meeting.split()[0], f"Réunion : {meeting}.", 0),
        Q("Le message vient-il du travail ?", "Oui", "Non", "On ne sait pas", f"Entreprise : _________.", company.split()[0], "Le message vient du travail.", 0),
    ]}


def _e3_3_messages():
    specs = [
        ("E-mail interne", "Bonjour l'équipe,", "SwissTech SA", "secrétaire", "8 h – 17 h", "Marie", "répondre aux e-mails", "lundi 9 h en salle 2"),
        ("Note bureau", "Rappel —", "Hôpital cantonal", "infirmier", "6 h – 14 h", "Dr. Keller", "soins aux patients", "briefing à 5 h 45"),
        ("SMS collègue", "Salut !", "Restaurant Le Sapin", "serveur", "11 h – 23 h", "Chef Marco", "servir les clients", "réunion service à 10 h 30"),
        ("WhatsApp équipe", "Hey !", "Garage Central", "mécanicien", "7 h – 16 h", "Paul", "réparer une voiture", "point équipe à 7 h"),
        ("Annonce RH", "Ressources Humaines —", "Banque Populaire", "conseiller", "9 h – 18 h", "Sophie", "accueillir les clients", "formation mardi 14 h"),
        ("Message manager", "Bonjour,", "Pharmacie du Lac", "pharmacien", "8 h 30 – 18 h 30", "Julie", "préparer les ordonnances", "inventaire vendredi"),
        ("Planning", "Semaine 12 —", "École primaire", "professeur", "8 h – 16 h", "Mme Martin", "cours de mathématiques", "conseil de classe jeudi"),
        ("E-mail client", "Bonjour,", "Agence Voyage", "vendeur", "9 h – 19 h", "Emma", "préparer un devis", "réunion commerciale mercredi"),
        ("Note réunion", "Ordre du jour —", "Boulangerie Martin", "boulanger", "4 h – 12 h", "Thomas", "faire le pain", "réunion qualité lundi 6 h"),
        ("SMS manager", "Rappel :", "Cabinet d'avocats", "secrétaire", "8 h 30 – 17 h 30", "Maître Blanc", "classer les dossiers", "audience mardi 10 h"),
        ("Intranet", "Info —", "Hôtel Bellevue", "réceptionniste", "7 h – 15 h ou 15 h – 23 h", "Hugo", "accueillir les clients", "briefing à chaque shift"),
        ("WhatsApp chantier", "Salut !", "BTP Construction", "maçon", "6 h 30 – 15 h 30", "Karim", "monter un mur", "sécurité à 6 h 15"),
        ("E-mail équipe", "Bonjour,", "Librairie du Centre", "libraire", "9 h 30 – 18 h 30", "Nina", "ranger les livres", "réunion mensuelle vendredi"),
        ("Note", "Aujourd'hui —", "Salon de coiffure", "coiffeur", "9 h – 19 h", "Clara", "couper les cheveux", "réunion tendances mardi"),
        ("Message RH", "RH —", "Usine Omega", "ingénieur", "7 h – 16 h", "David", "contrôler la production", "audit jeudi 8 h"),
        ("Planning", "Lundi —", "Cabinet médical", "médecin", "8 h – 18 h", "Infirmière Léa", "consulter les patients", "réunion équipe 8 h"),
        ("SMS", "Salut !", "Ferme des Alpes", "agriculteur", "5 h – 18 h", "Victor", "traire les vaches", "marché samedi 6 h"),
        ("E-mail", "Bonjour,", "Journal Le Quotidien", "journaliste", "10 h – 19 h", "Antoine", "écrire un article", "conférence de presse 11 h"),
        ("Annonce", "Direction —", "Pompier service", "pompier", "24 h/24 en rotation", "Marc", "interventions", "briefing chaque matin"),
        ("WhatsApp", "Hey !", "Crèche Les Petits", "éducatrice", "7 h 30 – 17 h", "Sara", "s'occuper des enfants", "réunion parents jeudi 18 h"),
    ]
    return [_work_msg(h, w, c, j, s, col, t, m) for h, w, c, j, s, col, t, m in specs]


def _e3_3_emails():
    emails = []
    specs = [
        ("Marie Dubois", "Réunion lundi", "SwissTech SA", "secrétaire", "lundi 9 h", "salle 2", "ordre du jour en pièce jointe"),
        ("Dr. Keller", "Briefing matinal", "Hôpital cantonal", "infirmier", "5 h 45", "salle de réunion", "présence obligatoire"),
        ("Chef Marco", "Service du soir", "Restaurant Le Sapin", "serveur", "10 h 30", "cuisine", "tenue impeccable"),
        ("Paul Garcia", "Voiture à réparer", "Garage Central", "mécanicien", "7 h", "atelier", "pièces commandées"),
        ("Sophie Martin", "Formation", "Banque Populaire", "conseiller", "mardi 14 h", "salle formation", "apporter cahier"),
        ("Julie Petit", "Inventaire", "Pharmacie du Lac", "pharmacien", "vendredi 18 h", "pharmacie", "compter les stocks"),
        ("M. Martin", "Conseil de classe", "École primaire", "professeur", "jeudi 17 h", "salle des profs", "bulletins à préparer"),
        ("Emma Laurent", "Devis client", "Agence Voyage", "vendeur", "mercredi 11 h", "bureau", "devis Bali en pièce jointe"),
        ("Thomas Keller", "Contrôle qualité", "Boulangerie Martin", "boulanger", "lundi 6 h", "laboratoire", "checklist à remplir"),
        ("Maître Blanc", "Audience", "Cabinet d'avocats", "secrétaire", "mardi 10 h", "tribunal", "dossier n° 45"),
        ("Hugo Martin", "Shift soir", "Hôtel Bellevue", "réceptionniste", "15 h", "réception", "arriver 10 min avant"),
        ("Karim Ben", "Sécurité chantier", "BTP Construction", "maçon", "6 h 15", "chantier", "casque obligatoire"),
        ("Nina Costa", "Réunion mensuelle", "Librairie du Centre", "libraire", "vendredi 18 h", "librairie", "chiffres du mois"),
        ("Clara Rossi", "Nouvelle collection", "Salon de coiffure", "coiffeur", "mardi 9 h", "salon", "photos tendances"),
        ("David Kim", "Audit production", "Usine Omega", "ingénieur", "jeudi 8 h", "usine", "rapport trimestriel"),
        ("Dr. Martin", "Réunion équipe", "Cabinet médical", "médecin", "8 h", "cabinet", "planning semaine"),
        ("Victor Pop", "Marché", "Ferme des Alpes", "agriculteur", "samedi 6 h", "marché de Sion", "charger le camion"),
        ("Antoine Blanc", "Article urgent", "Journal Le Quotidien", "journaliste", "11 h", "salle de rédaction", "deadline 17 h"),
        ("Marc Singh", "Intervention", "Service pompiers", "pompier", "immédiat", "caserne", "équipe Alpha"),
        ("Sara Alami", "Réunion parents", "Crèche Les Petits", "éducatrice", "jeudi 18 h", "crèche", "rapport mensuel enfant"),
    ]
    for sender, subject, company, job, when, where, detail in specs:
        lines = [
            f"Message professionnel de {company}.",
            f"Poste concerné : {job}.",
            f"Quand : {when}. Où : {where}.",
            f"Détail : {detail}.",
            "Merci de confirmer votre présence.",
        ]
        qs = [
            Q("Quelle entreprise ?", company, "Une plage", "Un volcan", f"Entreprise : _________.", company.split()[0], f"C'est {company}.", 0),
            Q("Quel poste ?", job.capitalize(), "Pilote de F1", "Astronaute", f"Poste : _________.", job, f"Poste : {job}.", 0, prof=True),
            Q("Quand ?", when.capitalize(), "Jamais", "En 1800", f"Quand : _________.", when.split()[0], f"Quand : {when}.", 0),
            Q("Où ?", where.capitalize(), "En mer", "Dans l'espace", f"Où : _________.", where.split()[0], f"Où : {where}.", 0),
            Q("Quel détail important ?", detail.capitalize(), "Rien", "Un chat", f"Détail : _________.", detail.split()[0], f"Détail : {detail}.", 0),
            Q("Quel est l'objet ?", subject, "Une invitation à un mariage", "Un menu", f"Objet : _________", subject.split()[0], f"Objet : {subject}.", 0),
        ]
        emails.append(render_email(sender, subject, lines, qs))
    return emails
