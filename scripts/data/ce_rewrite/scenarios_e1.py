"""E1 scenarios — se présenter, famille, inviter."""
from generate_all_data import Q, norm_prof
from scenarios_common import (
    render_ad_coloc, render_email, render_forum, render_postcard,
    render_sms, render_welcome_note,
)
from e1_2_unique_family import e1_2_emails, e1_2_messages


def build_e1_lessons():
    return {
        "e1-1": {"title": "E1.1 Se présenter", "messages": _e1_1_messages(), "emails": _e1_1_emails()},
        "e1-2": {"title": "E1.2 Parler de sa famille", "messages": _e1_2_messages(), "emails": _e1_2_emails()},
        "e1-3": {"title": "E1.3 Inviter quelqu'un", "messages": _e1_3_messages(), "emails": _e1_3_emails()},
    }


def _e1_1_messages():
    msgs = [
        render_forum("Amina", 28, "tunisienne", "Lausanne", "six mois", "cuisinière",
                     "un restaurant au centre-ville", "le lundi et le jeudi",
                     "la musique et la natation", "Je cherche des amis pour parler français."),
        render_postcard("Marco", "Milan", "Montreux", 32, "italien", "architecte",
                        "la photo et les promenades au lac", "vendredi"),
        render_sms("Léa", 22, "Je suis étudiante en médecine à Genève.", "Genève",
                   "le cinéma et la danse", "Tu veux aller au cinéma samedi ?"),
        render_ad_coloc("Nina", 25, "portugaise", "Fribourg", "trois", "650",
                        "vendeuse", "la cuisine et les sorties", "nina.coloc@mail.ch"),
        render_welcome_note("Thomas", 35, "infirmier", "l'hôpital cantonal", "Neuchâtel",
                            "sa femme et son fils de 5 ans", "français et allemand",
                            "deuxième", "le vélo et la randonnée"),
    ]
    # 6. Profil club de lecture
    msgs.append({"text": """Profil — Club de lecture « Les Mots »

Nom : Sophie Martin | Âge : 45 ans
Profession : bibliothécaire à la médiathèque de Sion
Langues : français, allemand
J'habite à Sion avec mon mari et nos deux chats.
J'aime la lecture, le théâtre et les promenades en montagne.
Je cherche des membres pour notre club. On se réunit chaque mardi à 19 h.
Contact : sophie.martin@club-mots.ch""",
        "questions": [
            Q("Quel est le nom de la personne ?", "Sophie Martin", "Marie Dubois", "Paul Ritter", "Nom : _________", "Sophie Martin", "La personne s'appelle Sophie Martin.", 0),
            Q("Quel âge a Sophie ?", "45 ans", "35 ans", "55 ans", "Âge : _________ ans", "45", "Sophie a 45 ans.", 0),
            Q("Quelle est sa profession ?", "Bibliothécaire", "Cuisinière", "Pilote", "Profession : _________", "bibliothécaire", "Sophie est cuisinière.", 1, prof=True),
            Q("Où habite Sophie ?", "À Sion", "À Genève", "À Zurich", "J'habite à _________.", "Sion", "Sophie habite à Sion.", 0),
            Q("Quand le club se réunit-il ?", "Chaque mardi à 19 h", "Le dimanche", "Le vendredi matin", "On se réunit chaque _________ à 19 h.", "mardi", "Le club se réunit le mardi.", 0),
            Q("Qu'est-ce que Sophie aime ?", "La lecture et le théâtre", "Le football", "La pêche", "J'aime la _________, le théâtre et les promenades.", "lecture", "Sophie aime la lecture.", 0),
        ]})
    # 7. Message groupe voisins
    msgs.append({"text": """Groupe Facebook — Quartier des Lilas

Bonjour les voisins !
Je m'appelle Karim. J'ai 40 ans. Je suis électricien.
J'habite au 12, rue des Lilas à Yverdon depuis trois ans.
Je suis marié. J'ai deux fils de 8 et 12 ans.
Je parle français et arabe.
J'organise un apéro de bienvenue samedi à 18 h dans la cour.
Venez nombreux ! Karim""",
        "questions": [
            Q("Comment s'appelle la personne ?", "Karim", "Ali", "Omar", "Je m'appelle _________.", "Karim", "La personne s'appelle Karim.", 0),
            Q("Quelle est la profession de Karim ?", "Électricien", "Plombier", "Médecin", "Je suis _________.", "électricien", "Karim est électricien.", 0, prof=True),
            Q("Où habite Karim ?", "À Yverdon", "À Lausanne", "À Berne", "J'habite à _________.", "Yverdon", "Karim habite à Yverdon.", 0),
            Q("Combien d'enfants Karim a-t-il ?", "Deux fils", "Une fille", "Aucun", "J'ai deux _________ de 8 et 12 ans.", "fils", "Karim a deux fils.", 0),
            Q("Qu'est-ce que Karim organise ?", "Un apéro samedi", "Un examen", "Une vente", "J'organise un _________ samedi à 18 h.", "apéro", "Karim organise un apéro.", 0, ["apero"]),
            Q("Quand a lieu l'événement ?", "Samedi à 18 h", "Lundi matin", "Mercredi soir", "Samedi à _________ h.", "18", "L'événement est samedi à 18 h.", 0),
        ]})
    # 8. Étiquette bagage
    msgs.append({"text": """Étiquette de bagage — Aéroport

NOM : Yuki Tanaka
ÂGE : 26 ans | NATIONALITÉ : japonaise
DESTINATION : Genève, Suisse
PROFESSION : étudiante en design
ADRESSE : 8, rue du Rhône, 1204 Genève
TÉLÉPHONE : +41 79 456 78 90
REMARQUE : Je parle japonais, anglais et un peu français.""",
        "questions": [
            Q("Comment s'appelle la personne ?", "Yuki Tanaka", "Marie Tanaka", "Paul Tanaka", "NOM : _________", "Yuki Tanaka", "La personne s'appelle Yuki Tanaka.", 0),
            Q("Quelle est sa nationalité ?", "Japonaise", "Chinoise", "Coréenne", "NATIONALITÉ : _________", "japonaise", "Elle est japonaise.", 0),
            Q("Quelle est sa destination ?", "Genève", "Paris", "Berlin", "DESTINATION : _________, Suisse", "Genève", "La destination est Genève.", 0),
            Q("Quel âge a Yuki ?", "26 ans", "36 ans", "16 ans", "ÂGE : _________ ans", "26", "Yuki a 26 ans.", 0),
            Q("En quoi Yuki est-elle étudiante ?", "En design", "En médecine", "En droit", "étudiante en _________", "design", "Yuki étudie le design.", 0),
            Q("Quelles langues parle Yuki ?", "Japonais, anglais et un peu français", "Seulement le japonais", "Allemand et italien", "Je parle japonais, anglais et un peu _________.", "français", "Yuki parle un peu français.", 0, ["francais"]),
        ]})
    # 9. Bio club de foot
    msgs.append({"text": """Fiche joueur — FC Vernier

Joueur : Omar Benali | 24 ans
Nationalité : marocaine | Ville : Vernier
Profession : chauffeur de bus
Position : milieu de terrain
Langues : français, arabe, espagnol
Hobbies : le football, la musique, la cuisine marocaine
Objectif : intégrer l'équipe senior cette saison
Contact : omar.benali@fc-vernier.ch""",
        "questions": [
            Q("Comment s'appelle le joueur ?", "Omar Benali", "Karim Ali", "Hassan Ben", "Joueur : _________", "Omar Benali", "Le joueur s'appelle Omar Benali.", 0),
            Q("Quel âge a Omar ?", "24 ans", "34 ans", "14 ans", "24 _________", "ans", "Omar a 24 ans.", 0),
            Q("Quelle est sa profession ?", "Chauffeur de bus", "Médecin", "Professeur", "Profession : _________ de bus", "chauffeur", "Omar est chauffeur.", 0, prof=True),
            Q("Quelle est sa position ?", "Milieu de terrain", "Gardien", "Arbitre", "Position : _________ de terrain", "milieu", "Omar joue milieu de terrain.", 0),
            Q("Où habite Omar ?", "À Vernier", "À Genève", "À Lausanne", "Ville : _________", "Vernier", "Omar habite à Vernier.", 0),
            Q("Quel est son objectif ?", "Intégrer l'équipe senior", "Arrêter le foot", "Devenir arbitre", "intégrer l'équipe _________", "senior", "Omar veut intégrer l'équipe senior.", 0),
        ]})
    # 10. Transcription message vocal
    msgs.append({"text": """Transcription — message vocal

« Bonjour, c'est Clara. J'ai 30 ans.
Je suis coiffeuse dans un salon à Nyon.
J'habite en colocation avec deux amies.
Je suis espagnole. Je parle espagnol et français.
J'aime la danse et les sorties entre amis.
Rappelez-moi au 079 321 65 43. Merci ! »""",
        "questions": [
            Q("Comment s'appelle la personne ?", "Clara", "Carla", "Claire", "c'est _________.", "Clara", "La personne s'appelle Clara.", 0),
            Q("Quelle est la profession de Clara ?", "Coiffeuse", "Cuisinière", "Vendeuse", "Je suis _________ dans un salon.", "coiffeuse", "Clara est coiffeuse.", 0, prof=True),
            Q("Où travaille Clara ?", "À Nyon", "À Genève", "À Berne", "dans un salon à _________.", "Nyon", "Clara travaille à Nyon.", 0),
            Q("Avec qui Clara habite-t-elle ?", "Deux amies", "Ses parents", "Seule", "en colocation avec deux _________.", "amies", "Clara habite avec deux amies.", 0, ["amis"]),
            Q("Quelle est sa nationalité ?", "Espagnole", "Italienne", "Française", "Je suis _________.", "espagnole", "Clara est espagnole.", 0),
            Q("Quel est le numéro de téléphone ?", "079 321 65 43", "079 123 45 67", "022 123 45 67", "au _________.", "079 321 65 43", "Le numéro est 079 321 65 43.", 0),
        ]})
    # 11–20: more unique genres
    more = [
        ("Fiche inscription — salle de sport FitPlus", "David", 27, "ingénieur", "Lausanne", "la musculation et la course", "le lundi, mercredi et vendredi"),
        ("Note au professeur de français", "Inès", 20, "étudiante", "Genève", "la lecture et les langues", "le cours du mardi matin"),
        ("Présentation — Meetup « Parler français »", "Antoine", 33, "journaliste", "Neuchâtel", "le cinéma et les voyages", "chaque jeudi soir"),
        ("Réponse — questionnaire mairie", "Salma", 29, "secrétaire", "Bienne", "la cuisine et la famille", "depuis un an"),
        ("Profil — réseau professionnel", "Hugo", 38, "pharmacien", "Fribourg", "le ski et la randonnée", "la pharmacie du centre"),
        ("Présentation — appli Tandem", "Maya", 23, "étudiante", "Lausanne", "la musique et le théâtre", "l'allemand et l'anglais"),
        ("Annonce — intranet entreprise", "Paul", 42, "comptable", "Genève", "le tennis et la lecture", "le service financier"),
        ("Message — BlaBlaCar", "Emma", 31, "infirmière", "Montreux", "la natation et les animaux", "Genève–Lausanne chaque lundi"),
        ("Carte membre — association culturelle", "Victor", 50, "professeur", "Sion", "l'histoire et les musées", "depuis dix ans"),
        ("Réponse — annonce cours particuliers", "Julie", 34, "professeure", "Yverdon", "la pédagogie et le piano", "les mathématiques et le français"),
    ]
    for header, name, age, job, city, hobbies, extra in more:
        msgs.append({"text": f"""{header}

Je m'appelle {name}. J'ai {age} ans.
Je suis {job}. J'habite à {city}.
J'aime {hobbies}.
Information importante : {extra}.
Merci de lire ma présentation avec attention.
{name}""",
            "questions": [
                Q(f"Comment s'appelle la personne ?", name, "Marie", "Lucas", f"Je m'appelle _________.", name, f"La personne s'appelle {name}.", 0),
                Q(f"Quel âge a {name} ?", f"{age} ans", f"{age+10} ans", f"{age-5} ans", "J'ai _________ ans.", str(age), f"{name} a {age} ans.", 0),
                Q(f"Quelle est la profession de {name} ?", job.capitalize(), "Médecin", "Pilote", f"Je suis _________.", job, f"{name} est {job}.", 0, prof=True),
                Q(f"Où habite {name} ?", f"À {city}", "À Paris", "À Lyon", f"J'habite à _________.", city, f"{name} habite à {city}.", 0),
                Q(f"Qu'est-ce que {name} aime ?", hobbies.capitalize(), "La télé", "Les jeux", f"J'aime _________.", hobbies.split(" et ")[0], f"{name} aime {hobbies}.", 0),
                Q(f"Quelle information importante est donnée ?", extra.capitalize(), "Rien", "Un prix", f"Information importante : _________.", extra.split()[0], f"L'information est : {extra}.", 0),
                Q(f"Quel type de document est-ce ?", header.split("—")[0].strip() if "—" in header else header.split()[0], "Une facture", "Un ticket de métro", f"_________ —", header.split()[0], "C'est une facture.", 1),
            ]})
    assert len(msgs) == 20
    return msgs


def _e1_1_emails():
    emails = []
    specs = [
        ("Marco Rossi", "Je me présente", "Marco Rossi", 32, "italien", "Milan", "cuisinier", "restaurant au centre-ville", "troisième", "12", "Elena", "infirmière", "078 555 21 40"),
        ("Lucas Ferreira", "Nouveau dans le quartier", "Lucas", 19, "brésilien", "São Paulo", "étudiant", "l'université de Genève", "premier", "3", None, None, "079 111 22 33"),
        ("Nina Costa", "Présentation rapide", "Nina", 25, "portugaise", "Lisbonne", "vendeuse", "une boutique à Fribourg", "deuxième", "7", None, None, "076 222 33 44"),
        ("Paul Dubois", "Enchanté !", "Paul", 45, "français", "Lyon", "mécanicien", "un garage à Lausanne", "rez-de-chaussée", "1", "Marie", "coiffeuse", "021 345 67 89"),
        ("Sara Alami", "Bonjour de Sara", "Sara", 22, "marocaine", "Casablanca", "étudiante", "l'école de commerce", "quatrième", "15", None, None, "078 999 88 77"),
        ("Tom Müller", "Je suis Tom", "Tom", 28, "suisse allemand", "Berne", "électricien", "une entreprise à Bienne", "cinquième", "22", "Anna", "secrétaire", "032 123 45 67"),
        ("Emma Laurent", "Présentation", "Emma", 35, "française", "Marseille", "infirmière", "l'hôpital de Montreux", "troisième", "8", "Pierre", "boulanger", "079 456 12 34"),
        ("Hugo Martin", "Bonjour !", "Hugo", 30, "belge", "Bruxelles", "journaliste", "un journal à Neuchâtel", "deuxième", "5", None, None, "079 567 89 01"),
        ("Léa Bernard", "Coucou !", "Léa", 21, "suisse", "Genève", "étudiante", "la faculté de médecine", "sixième", "18", None, None, "079 678 90 12"),
        ("Marc Weber", "Présentation courte", "Marc", 50, "allemand", "Berlin", "professeur", "un collège à Sion", "premier", "2", "Claudia", "vendeuse", "027 234 56 78"),
        ("Julie Petit", "Bonjour à tous", "Julie", 27, "française", "Nice", "pharmacienne", "une pharmacie à Yverdon", "rez-de-chaussée", "4", None, None, "024 345 67 89"),
        ("Omar Hassan", "Salut !", "Omar", 24, "égyptien", "Le Caire", "serveur", "un restaurant à Genève", "troisième", "9", None, None, "079 789 01 23"),
        ("Clara Rossi", "Je me présente", "Clara", 29, "italienne", "Turin", "coiffeuse", "un salon à Lausanne", "deuxième", "6", "Marco", "cuisinier", "021 456 78 90"),
        ("Yann Leroy", "Bonjour", "Yann", 38, "français", "Bordeaux", "plombier", "une entreprise à Fribourg", "quatrième", "11", "Sophie", "infirmière", "026 567 89 01"),
        ("Inès Moreau", "Enchantée", "Inès", 20, "espagnole", "Madrid", "étudiante", "l'école de langues", "cinquième", "14", None, None, "079 890 12 34"),
        ("David Kim", "Présentation", "David", 33, "coréen", "Séoul", "ingénieur", "une start-up à Genève", "septième", "20", "Min", "médecin", "079 901 23 45"),
        ("Maya Singh", "Bonjour !", "Maya", 26, "indienne", "Delhi", "vendeuse", "un magasin à Berne", "premier", "3", None, None, "031 678 90 12"),
        ("Antoine Blanc", "Salut", "Antoine", 40, "français", "Toulouse", "chauffeur", "une société de transport", "deuxième", "7", "Camille", "professeure", "079 012 34 56"),
        ("Salma Ben", "Je me présente", "Salma", 31, "tunisienne", "Tunis", "secrétaire", "un bureau à Lausanne", "troisième", "10", None, None, "021 789 01 23"),
        ("Victor Pop", "Bonjour", "Victor", 55, "roumain", "Bucarest", "professeur", "un lycée à Neuchâtel", "rez-de-chaussée", "1", "Elena", "dentiste", "032 890 12 34"),
    ]
    for sender, subject, name, age, nat, origin, job, work, floor, apt, spouse, spouse_job, phone in specs:
        nat_wrong = [n for n in ("Italienne", "Allemande", "Marocaine", "Portugaise", "Brésilienne") if norm_prof(n) != norm_prof(nat)][:2]
        work_line = f"Je travaille {work}." if work.startswith(("à ", "dans ", "chez ")) else f"Je travaille dans {work}."
        lines = [
            f"Je m'appelle {name}. J'ai {age} ans et je suis {nat}.",
            f"Je viens de {origin}.",
            f"Je suis {job}. {work_line}",
            f"J'habite au {floor} étage, appartement {apt}.",
        ]
        if spouse:
            lines.append(f"Mon conjoint s'appelle {spouse}. Il/Elle est {spouse_job}.")
        lines.append(f"Mon numéro de téléphone est le {phone}.")
        qs = [
            Q(f"Qui écrit cet e-mail ?", name.split()[0], "Le facteur", "Le propriétaire", f"Je m'appelle _________.", name.split()[0], f"{name} écrit l'e-mail.", 0),
            Q(f"Quel âge a {name.split()[0]} ?", f"{age} ans", f"{age+10} ans", f"{age-5} ans", "J'ai _________ ans.", str(age), f"{name.split()[0]} a {age} ans.", 0),
            Q(f"Quelle est la nationalité ?", nat.capitalize(), nat_wrong[0], nat_wrong[1], f"Je suis _________.", nat, f"La nationalité est {nat}.", 0),
            Q(f"Quelle est la profession ?", job.capitalize(), "Pilote", "Avocat", f"Je suis _________.", job, f"La profession est {job}.", 0, prof=True),
            Q(f"De quelle ville vient {name.split()[0]} ?", f"De {origin}", "De Paris", "De Rome", f"Je viens de _________.", origin, f"{name.split()[0]} vient de {origin}.", 0),
            Q(f"À quel étage habite {name.split()[0]} ?", f"Au {floor} étage", "Au sous-sol", "Au 10e étage", f"J'habite au _________ étage.", floor.split()[0] if " " in floor else floor, f"{name.split()[0]} habite au {floor} étage.", 0),
            Q(f"Quel est le numéro de téléphone ?", phone, "079 000 00 00", "022 000 00 00", f"Mon numéro est le _________.", phone, f"Le numéro est {phone}.", 0),
        ]
        emails.append(render_email(sender, subject, lines, qs))
    assert len(emails) == 20
    return emails


def _e1_2_messages():
    return e1_2_messages()


def _e1_2_emails():
    return e1_2_emails()


def _e1_3_messages():
    genres = [
        ("Invitation anniversaire", "Chère Sophie,", "samedi 15 mars", "19 h", "chez moi", "gâteau et musique", "Confirme ta présence !", "Julie"),
        ("SMS — soirée cinéma", "Salut Tom !", "vendredi soir", "20 h", "au cinéma du centre", "le nouveau film français", "Tu viens ?", "Léa"),
        ("Carte d'invitation", "Cher Paul,", "dimanche prochain", "14 h", "au parc de la Tournette", "un pique-nique", "Apporte une boisson !", "Emma"),
        ("Message WhatsApp — apéro", "Coucou !", "jeudi", "18 h 30", "sur mon balcon", "des tapas", "Dis-moi si tu peux venir.", "Nina"),
        ("Affichage salle commune", "Chers voisins,", "samedi 22", "17 h", "dans la cour", "un barbecue", "Inscrivez-vous à la loge.", "Karim"),
        ("E-mail informel", "Bonjour Marc,", "mercredi prochain", "12 h 30", "au restaurant Le Lac", "le déjeuner", "C'est pour mon anniversaire !", "Hugo"),
        ("Invitation mariage civil", "Chers amis,", "le 5 juin", "11 h", "à la mairie de Nyon", "notre mariage", "Réponse avant le 1er mai.", "Clara et Yann"),
        ("Note sur la porte", "Chers collègues,", "vendredi", "16 h", "dans la salle de pause", "un gâteau d'adieu", "Je pars à la retraite !", "Michel"),
        ("Forum école — sortie", "Bonjour à tous,", "le 10 avril", "8 h", "devant l'école", "une visite au musée", "Les parents sont les bienvenus.", "Prof. Martin"),
        ("Message vocal transcrit", "Salut !", "samedi", "15 h", "à la piscine", "une baignade", "Amène ton maillot !", "Omar"),
        ("Petite annonce — fête", "FÊTE DE QUARTIER", "le 1er juillet", "18 h", "place du Marché", "musique et jeux", "Entrée gratuite.", "Comité des fêtes"),
        ("Invitation baby shower", "Chère amie,", "le 20 mai", "14 h", "chez Anna", "une fête pour le bébé", "Cadeau surprise bienvenue.", "Sara"),
        ("SMS — match de foot", "Hey !", "dimanche", "10 h", "au stade municipal", "le match", "On se retrouve à l'entrée.", "Antoine"),
        ("Carte — goûter enfants", "Chers parents,", "mercredi", "16 h", "à l'école", "un goûter de fin d'année", "Merci d'apporter un plat.", "École du Lac"),
        ("Invitation exposition", "Bonjour,", "jeudi soir", "19 h", "à la galerie Art Plus", "l'exposition de photos", "Vernissage avec vin et fromage.", "Sophie"),
        ("Message groupe amis", "Les amis !", "le 8 août", "20 h", "à la plage", "une soirée feu de camp", "Chacun apporte à manger.", "David"),
        ("Invitation réunion", "Bonjour à tous,", "lundi", "9 h", "en salle 3", "la réunion de projet", "Préparez vos idées.", "Chef de projet"),
        ("Billet concert", "Salut !", "le 12 octobre", "20 h 30", "à la salle Métropole", "le concert de jazz", "J'ai deux places. Tu en veux une ?", "Maya"),
        ("Invitation brunch", "Coucou !", "dimanche matin", "10 h", "au café du Port", "un brunch", "Réserve ta place vite !", "Inès"),
        ("Message — cours de cuisine", "Bonjour !", "mardi prochain", "18 h", "dans ma cuisine", "un atelier pasta", "Places limitées à 6 personnes.", "Marco"),
    ]
    msgs = []
    for header, greeting, date, hour, place, event, closing, sender in genres:
        text = f"""{header}

{greeting}
Je t'invite {event} !
C'est {date} à {hour}, {place}.
{closing}
{sender}"""
        msgs.append({"text": text, "questions": [
            Q("Quel type de texte est-ce ?", header.split("—")[0].strip() if "—" in header else header.split(" ")[0], "Une facture", "Un horaire de bus", f"{header.split()[0]} _________", header.split()[-1] if len(header.split()) > 1 else header, "C'est une facture.", 1),
            Q("Quand a lieu l'événement ?", date.capitalize(), "Hier", "En hiver seulement", f"C'est _________", date.split()[0], f"L'événement est {date}.", 0),
            Q("À quelle heure ?", hour, "Minuit", "6 h du matin", f"à _________,", hour.replace(" h", ""), f"L'heure est {hour}.", 0),
            Q("Où a lieu l'événement ?", place.capitalize(), "À l'hôpital", "À l'aéroport", f"{place.split()[0]} _________", place.split()[-1], f"C'est {place}.", 0),
            Q("Quel est l'événement ?", event.capitalize(), "Un examen", "Un déménagement", f"Je t'invite {event.split()[0]} _________ !", event.split()[-1].rstrip("!"), f"C'est {event}.", 0),
            Q("Qui écrit le message ?", sender, "Le maire", "Le facteur", f"_________", sender, f"{sender} écrit le message.", 0),
            Q("Est-ce une invitation ?", "Oui", "Non", "On ne sait pas", "Je t'invite _________ !", event.split()[0], "C'est une invitation.", 0),
        ]})
    assert len(msgs) == 20
    return msgs


def _e1_3_emails():
    emails = []
    specs = [
        ("Julie Martin", "Invitation anniversaire", "samedi 20 avril", "19 h", "chez moi à Lausanne", "mon anniversaire", "gâteau et musique"),
        ("Lucas Ferreira", "Soirée jeux", "vendredi 8 mars", "20 h", "chez Lucas", "une soirée jeux de société", "pizza et boissons"),
        ("Nina Costa", "Apéro sur le balcon", "jeudi 14 mars", "18 h 30", "son balcon à Fribourg", "un apéro", "vue sur la cathédrale"),
        ("Paul Dubois", "Barbecue", "dimanche 24 mars", "12 h", "le jardin de Paul", "un barbecue", "viande et salades"),
        ("Sara Alami", "Cinéma", "mercredi 3 avril", "20 h", "le cinéma ABC", "un film", "places déjà réservées"),
        ("Tom Müller", "Randonnée", "samedi 6 avril", "8 h", "devant la gare de Bienne", "une randonnée", "pique-nique à prévoir"),
        ("Emma Laurent", "Brunch", "dimanche 21 avril", "10 h", "le café du Port à Montreux", "un brunch", "réservation faite"),
        ("Hugo Martin", "Concert", "vendredi 26 avril", "21 h", "la salle Métropole", "un concert de jazz", "deux billets gratuits"),
        ("Léa Bernard", "Pique-nique", "samedi 4 mai", "14 h", "le parc des Eaux-Vives", "un pique-nique", "chacun apporte quelque chose"),
        ("Marc Weber", "Dîner", "samedi 11 mai", "19 h 30", "le restaurant Le Sapin", "un dîner", "menu à 35 francs"),
        ("Julie Petit", "Fête des voisins", "samedi 18 mai", "17 h", "la cour de l'immeuble", "la fête des voisins", "musique et jeux pour enfants"),
        ("Omar Hassan", "Match de foot", "dimanche 26 mai", "10 h", "le stade de Genève", "un match amical", "maillot et chaussures"),
        ("Clara Rossi", "Atelier cuisine", "mardi 28 mai", "18 h", "sa cuisine", "un atelier pasta", "6 places maximum"),
        ("Yann Leroy", "Exposition", "jeudi 30 mai", "19 h", "la galerie Art Plus", "une exposition photo", "vin et fromage"),
        ("Inès Moreau", "Soirée dansante", "samedi 1 juin", "21 h", "la salle des fêtes", "une soirée salsa", "cours débutant à 20 h"),
        ("David Kim", "Visite musée", "mercredi 5 juin", "14 h", "le musée d'art", "une visite guidée", "entrée gratuite"),
        ("Maya Singh", "Goûter enfants", "mercredi 12 juin", "16 h", "l'école du Lac", "un goûter de fin d'année", "apporter un plat"),
        ("Antoine Blanc", "Piscine", "samedi 15 juin", "15 h", "la piscine municipale", "une après-midi piscine", "maillot obligatoire"),
        ("Salma Ben", "Thé", "dimanche 23 juin", "16 h", "chez Salma", "un thé marocain", "pâtisseries maison"),
        ("Victor Pop", "Réunion amicale", "lundi 1 juillet", "19 h", "le café Central", "une réunion de l'association", "ordre du jour en pièce jointe"),
    ]
    for sender, subject, date, hour, place, event, detail in specs:
        lines = [
            f"J'organise {event} et je t'invite !",
            f"C'est {date} à {hour}.",
            f"On se retrouve {place}.",
            f"{detail.capitalize()}.",
            "Dis-moi si tu peux venir avant jeudi.",
        ]
        qs = [
            Q("Quel est l'objet de l'e-mail ?", subject, "Un travail", "Une facture", f"Objet : _________", subject.split()[0], f"L'objet est {subject}.", 0),
            Q("Quel événement est proposé ?", event.capitalize(), "Un examen", "Un déménagement", f"J'organise _________", event.split()[-1], f"C'est {event}.", 0),
            Q("Quand a lieu l'événement ?", date.capitalize(), "Hier", "En janvier", f"C'est _________", date.split()[0], f"C'est {date}.", 0),
            Q("À quelle heure ?", hour, "3 h du matin", "Midi seulement", f"à _________.", hour.replace(" h", "").replace(" 30", ""), f"L'heure est {hour}.", 0),
            Q("Où a lieu l'événement ?", place.capitalize(), "À l'hôpital", "À l'aéroport", f"On se retrouve _________.", place.split()[0], f"C'est {place}.", 0),
            Q("Que doit-on apporter ou savoir ?", detail.capitalize(), "Rien", "Un passeport", f"_________ .", detail.split()[0], f"Info : {detail}.", 0),
            Q("Quand faut-il répondre ?", "Avant jeudi", "Après l'événement", "Jamais", "avant _________.", "jeudi", "Il faut répondre avant jeudi.", 0),
        ]
        emails.append(render_email(sender, subject, lines, qs))
    assert len(emails) == 20
    return emails
