"""E2 scenarios — logement, pannes, règlement."""
from generate_all_data import Q
from scenarios_common import render_email


def build_e2_lessons():
    return {
        "e2-1": {"title": "E2.1 Décrire son logement", "messages": _e2_1_messages(), "emails": _e2_1_emails()},
        "e2-2": {"title": "E2.2 Signaler un problème domestique", "messages": _e2_2_messages(), "emails": _e2_2_emails()},
        "e2-3": {"title": "E2.3 Le règlement de l'immeuble", "messages": _e2_3_messages(), "emails": _e2_3_emails()},
    }


def _housing_msg(header, writer, rooms, floor, city, rent, feature, neighbor, extra):
    text = f"""{header}

{writer}
Mon logement a {rooms} pièces. Il est au {floor} étage à {city}.
Le loyer est de {rent} francs par mois.
Il y a {feature}.
Mon voisin du dessus s'appelle {neighbor}. {extra}
Merci de lire mon message."""
    return {"text": text, "questions": [
        Q("Combien de pièces a le logement ?", rooms, "Une seule", "Dix", f"Mon logement a _________ pièces.", rooms.split()[0], f"Le logement a {rooms} pièces.", 0),
        Q("À quel étage est le logement ?", f"Au {floor} étage", "Au sous-sol", "Au 20e étage", f"Il est au _________ étage.", floor.split()[0] if " " not in floor else floor, f"C'est au {floor} étage.", 0),
        Q("Dans quelle ville ?", f"À {city}", "À Paris", "À Berlin", f"à _________.", city, f"C'est à {city}.", 0),
        Q("Combien coûte le loyer ?", f"{rent} francs", "100 francs", "5000 francs", f"Le loyer est de _________ francs.", rent, f"Le loyer est {rent} francs.", 0),
        Q("Quelle particularité du logement ?", feature.capitalize(), "Une piscine olympique", "Un ascenseur secret", f"Il y a _________.", feature.split()[-1], f"Il y a {feature}.", 0),
        Q("Comment s'appelle le voisin ?", neighbor, "Pierre", "Jean", f"Mon voisin s'appelle _________.", neighbor, f"Le voisin s'appelle {neighbor}.", 0),
        Q("Quelle information supplémentaire est donnée ?", extra.split(".")[0].capitalize(), "Rien", "Un prix", f"_________ .", extra.split()[0], f"Info : {extra}.", 0),
    ]}


def _e2_1_messages():
    specs = [
        ("SMS à une amie", "Salut Emma !", "trois", "deuxième", "Genève", "1200", "un balcon avec vue sur le lac", "Marc", "Il est très sympa."),
        ("E-mail au propriétaire", "Bonjour Monsieur,", "deux", "premier", "Lausanne", "950", "une cuisine équipée", "Sophie", "Elle habite depuis deux ans."),
        ("Petite annonce — sous-location", "À LOUER", "quatre", "troisième", "Fribourg", "1400", "deux chambres et un bureau", "Paul", "L'appartement est lumineux."),
        ("Message groupe immeuble", "Chers voisins,", "trois", "cinquième", "Neuchâtel", "1100", "un ascenseur et une cave", "Anna", "La cave est au sous-sol."),
        ("Carte postale", "Coucou !", "deux", "quatrième", "Montreux", "1300", "une grande terrasse", "Lucas", "La vue est magnifique."),
        ("Note sur la porte", "Chers colocataires,", "cinq", "rez-de-chaussée", "Yverdon", "1600", "un jardin partagé", "Karim", "Le jardin est calme."),
        ("Forum locataires", "Bonjour,", "trois", "sixième", "Bienne", "980", "un parking souterrain", "Julie", "La place est numéro 12."),
        ("WhatsApp — visite", "Salut !", "deux", "septième", "Sion", "1050", "un petit bureau", "Hugo", "L'appartement est meublé."),
        ("Réponse annonce", "Bonjour,", "quatre", "huitième", "Nyon", "1500", "deux salles de bain", "Emma", "Le chauffage est inclus."),
        ("Description pour assurance", "Madame, Monsieur,", "trois", "neuvième", "Vevey", "1250", "un parquet neuf", "Tom", "Les fenêtres sont doubles."),
        ("Message au colocataire", "Salut !", "quatre", "dixième", "Delémont", "900", "un grand salon", "Nina", "Le loyer est partagé."),
        ("Annonce intranet", "Bonjour,", "deux", "onzième", "Payerne", "850", "une cuisine ouverte", "David", "Proche des transports."),
        ("SMS propriétaire", "Bonjour,", "trois", "douzième", "Aigle", "1000", "un cellier", "Sara", "Le cellier est grand."),
        ("Lettre recommandation", "Madame, Monsieur,", "cinq", "treizième", "Morges", "1700", "un jardin privatif", "Antoine", "Quartier calme."),
        ("Message covoiturage coloc", "Hey !", "trois", "quatorzième", "Gland", "1150", "un balcon fermé", "Léa", "Proche de la gare."),
        ("Fiche état des lieux", "Appartement n° 8", "deux", "quinzième", "Rolle", "1080", "peinture neuve", "Marc", "État impeccable."),
        ("Blog expatrié", "Bonjour !", "quatre", "seizième", "Genève", "2000", "vue sur les Alpes", "Omar", "Cher mais magnifique."),
        ("Réponse questionnaire", "Bonjour,", "trois", "dix-septième", "Carouge", "1180", "un parquet ancien", "Clara", "Charme ancien."),
        ("Message gardien", "Bonjour,", "deux", "dix-huitième", "Plan-les-Ouates", "1020", "un interphone vidéo", "Victor", "Sécurité renforcée."),
        ("Annonce Facebook", "À vendre visite !", "quatre", "dix-neuvième", "Thônex", "1350", "proche école et parc", "Inès", "Idéal pour famille."),
    ]
    return [_housing_msg(h, w, r, f, c, rent, feat, n, e) for h, w, r, f, c, rent, feat, n, e in specs]


def _e2_1_emails():
    emails = []
    specs = [
        ("Thomas Keller", "Mon nouvel appartement", "trois", "deuxième", "Genève", "1250", "balcon", "parc", "15 mars"),
        ("Sophie Martin", "Notre maison", "cinq", "rez-de-chaussée", "Lausanne", "2200", "jardin", "école", "1er avril"),
        ("Marc Dubois", "Mon studio", "une", "quatrième", "Fribourg", "780", "cuisine équipée", "gare", "immédiat"),
        ("Anna Weber", "Appartement à louer", "quatre", "troisième", "Neuchâtel", "1350", "terrasse", "lac", "1er mai"),
        ("Lucas Ferreira", "Visite appartement", "trois", "cinquième", "Montreux", "1400", "vue lac", "centre", "samedi 10 h"),
        ("Emma Laurent", "Description logement", "deux", "premier", "Yverdon", "950", "cave", "commerces", "juin"),
        ("Hugo Blanc", "Colocation", "quatre", "sixième", "Bienne", "1100", "salon grand", "université", "septembre"),
        ("Nina Costa", "Sous-location été", "trois", "septième", "Sion", "1000", "meublé", "montagne", "juillet-août"),
        ("David Kim", "État des lieux", "deux", "huitième", "Nyon", "1200", "parquet neuf", "lac", "20 avril"),
        ("Sara Alami", "Mon logement", "trois", "neuvième", "Vevey", "1150", "ascenseur", "gare", "octobre"),
        ("Paul Garcia", "Appartement familial", "cinq", "dixième", "Delémont", "1500", "deux salles de bain", "parc", "décembre"),
        ("Léa Bernard", "Studio étudiant", "une", "onzième", "Genève", "900", "proche tram", "université", "août"),
        ("Tom Müller", "Maison avec jardin", "six", "rez-de-chaussée", "Payerne", "1800", "garage", "campagne", "mai"),
        ("Julie Petit", "Appartement lumineux", "trois", "douzième", "Aigle", "1050", "double vitrage", "vignobles", "mars"),
        ("Omar Hassan", "Colocation cherchée", "quatre", "treizième", "Morges", "1300", "bureau", "lac", "avril"),
        ("Clara Rossi", "Visite possible", "deux", "quatorzième", "Gland", "1100", "balcon", "CERN", "mercredi"),
        ("Yann Leroy", "Location longue durée", "quatre", "quinzième", "Rolle", "1250", "terrasse", "plage", "année"),
        ("Inès Moreau", "Petit appartement", "deux", "seizième", "Carouge", "1080", "charme ancien", "Genève", "juin"),
        ("Victor Pop", "Appartement proche gare", "trois", "dix-septième", "Thônex", "1180", "parking", "tram", "juillet"),
        ("Maya Singh", "Logement neuf", "quatre", "dix-huitième", "Plan-les-Ouates", "1450", "isolation", "entreprises", "septembre"),
    ]
    for sender, subject, rooms, floor, city, rent, feature, near, date in specs:
        lines = [
            f"Je vous écris au sujet de mon logement.",
            f"C'est un appartement de {rooms} pièce(s) au {floor} étage à {city}.",
            f"Le loyer est de {rent} francs par mois.",
            f"Il y a un(e) {feature}. C'est proche de {near}.",
            f"Disponible à partir du {date}.",
        ]
        qs = [
            Q("Combien de pièces ?", rooms.capitalize(), "Dix", "Aucune", f"appartement de _________ pièce(s)", rooms.split()[0], f"C'est {rooms} pièce(s).", 0),
            Q("À quel étage ?", f"Au {floor} étage", "Au sous-sol", "Au 30e", f"au _________ étage", floor.split()[0] if " " not in floor else floor, f"Au {floor} étage.", 0),
            Q("Dans quelle ville ?", f"À {city}", "À Paris", "À Rome", f"à _________.", city, f"À {city}.", 0),
            Q("Combien coûte le loyer ?", f"{rent} francs", "50 francs", "10000 francs", f"Le loyer est de _________ francs.", rent, f"{rent} francs.", 0),
            Q("Quelle particularité ?", feature.capitalize(), "Une piscine", "Un cinéma", f"un(e) _________.", feature, f"Il y a {feature}.", 0),
            Q("Proche de quoi ?", near.capitalize(), "L'océan", "Un volcan", f"proche de _________.", near, f"Proche de {near}.", 0),
            Q("Quand est-ce disponible ?", date.capitalize(), "Jamais", "Hier", f"à partir du _________.", date.split()[0], f"Disponible {date}.", 0),
        ]
        emails.append(render_email(sender, subject, lines, qs))
    return emails


def _problem_msg(header, writer, problem, since, urgency, action, contact):
    text = f"""{header}

{writer}
J'ai un problème : {problem}.
Cela dure depuis {since}. C'est {urgency}.
Pouvez-vous {action} ?
Contact : {contact}"""
    return {"text": text, "questions": [
        Q("Quel est le problème ?", problem.capitalize(), "Un chat perdu", "Une fête", f"un problème : _________.", problem.split()[0], f"Le problème est {problem}.", 0),
        Q("Depuis combien de temps ?", since, "Un jour", "Dix ans", f"Cela dure depuis _________.", since.split()[0], f"Depuis {since}.", 0),
        Q("Quel est le niveau d'urgence ?", urgency, "Pas grave", "Aucun", f"C'est _________.", urgency, f"C'est {urgency}.", 0),
        Q("Quelle action demande-t-on ?", action.capitalize(), "Rien", "Un voyage", f"Pouvez-vous _________ ?", action.split()[0], f"Demande : {action}.", 0),
        Q("Comment contacter ?", contact, "Par courrier", "En personne", f"Contact : _________.", contact.split()[0], f"Contact : {contact}.", 0),
        Q("Le problème est-il urgent ?", "Oui" if "urgent" in urgency else "Non", "Non" if "urgent" in urgency else "Oui", "On ne sait pas", f"C'est _________.", urgency.split()[0], f"Urgence : {urgency}.", 0),
    ]}


def _e2_2_messages():
    problems = [
        ("SMS au propriétaire", "Bonjour,", "la chaudière ne marche plus", "deux jours", "urgent", "envoyer un plombier", "079 123 45 67"),
        ("E-mail régie", "Madame, Monsieur,", "une fuite d'eau sous l'évier", "ce matin", "très urgent", "intervenir rapidement", "regie@immo.ch"),
        ("Message gardien", "Bonjour,", "la porte d'entrée ne ferme plus", "une semaine", "important", "faire réparer la serrure", "gardien@immeuble.ch"),
        ("WhatsApp voisin", "Salut,", "plus d'électricité dans la cuisine", "hier soir", "urgent", "vérifier le disjoncteur", "076 234 56 78"),
        ("Note sur la porte", "Chers voisins,", "l'ascenseur est en panne", "trois jours", "gênant", "appeler la régie", "032 345 67 89"),
        ("Appel transcrit", "Allô,", "le chauffage ne fonctionne pas", "cinq jours", "très froid", "envoyer un technicien", "079 456 78 90"),
        ("E-mail assurance", "Bonjour,", "un dégât des eaux au plafond", "la semaine dernière", "grave", "envoyer un expert", "assurance@home.ch"),
        ("Forum locataires", "Bonjour,", "des nuisances sonores la nuit", "un mois", "insupportable", "parler au voisin", "forum@locataires.ch"),
        ("SMS plombier", "Bonjour,", "les toilettes sont bouchées", "aujourd'hui", "urgent", "passer cet après-midi", "079 567 89 01"),
        ("Message syndic", "Madame, Monsieur,", "la fenêtre ne ferme plus", "deux semaines", "important", "remplacer la fenêtre", "syndic@copro.ch"),
        ("Réclamation écrite", "Madame, Monsieur,", "pas d'eau chaude", "quatre jours", "urgent", "réparer la chaudière", "reclamation@mail.ch"),
        ("WhatsApp coloc", "Salut,", "le lave-linge est en panne", "hier", "gênant", "appeler le réparateur", "078 678 90 12"),
        ("E-mail propriétaire", "Bonjour,", "des cafards dans la cuisine", "plusieurs jours", "urgent", "faire désinsectiser", "proprio@mail.ch"),
        ("Note urgente", "URGENT —", "odeur de gaz dans l'appartement", "maintenant", "très dangereux", "appeler le gaz d'urgence", "144"),
        ("Message régie", "Bonjour,", "le voisin fume dans les parties communes", "longtemps", "gênant", "rappeler le règlement", "regie2@immo.ch"),
        ("SMS électricien", "Bonjour,", "les prises ne marchent plus", "ce matin", "urgent", "passer aujourd'hui", "079 789 01 23"),
        ("E-mail voisin", "Bonjour,", "de l'eau qui coule du plafond", "deux heures", "très urgent", "fermer la vanne d'eau", "voisin@mail.ch"),
        ("Appel SAMU transcrit", "Allô,", "un problème de moisissure", "plusieurs mois", "mauvais pour la santé", "envoyer un expert", "sante@mail.ch"),
        ("Forum dépannage", "Bonjour,", "la hotte de cuisine ne marche plus", "une semaine", "gênant", "envoyer un électricien", "forum@depannage.ch"),
        ("Message assurance habitation", "Bonjour,", "une vitre cassée par la tempête", "hier", "important", "envoyer un vitrier", "assur@home.ch"),
    ]
    return [_problem_msg(h, w, p, s, u, a, c) for h, w, p, s, u, a, c in problems]


def _e2_2_emails():
    emails = []
    specs = [
        ("Lucas Martin", "Problème de chauffage", "la chaudière", "trois jours", "urgent", "envoyer un technicien", "lundi"),
        ("Emma Dubois", "Fuite d'eau", "une fuite sous l'évier", "ce matin", "très urgent", "intervenir rapidement", "aujourd'hui"),
        ("Paul Garcia", "Serrure cassée", "la porte ne ferme plus", "une semaine", "important", "changer la serrure", "cette semaine"),
        ("Sara Kim", "Plus d'électricité", "pas de courant dans la cuisine", "hier", "urgent", "vérifier l'installation", "demain"),
        ("Tom Weber", "Ascenseur en panne", "l'ascenseur ne marche pas", "deux jours", "gênant", "appeler le réparateur", "vite"),
        ("Nina Costa", "Toilettes bouchées", "les WC sont bouchés", "aujourd'hui", "urgent", "envoyer un plombier", "cet après-midi"),
        ("David Kim", "Fenêtre cassée", "la fenêtre du salon est fissurée", "la tempête d'hier", "important", "remplacer la vitre", "semaine prochaine"),
        ("Hugo Blanc", "Nuisances sonores", "bruit la nuit du voisin", "un mois", "insupportable", "intervenir", "rapidement"),
        ("Léa Bernard", "Pas d'eau chaude", "l'eau reste froide", "quatre jours", "urgent", "réparer la chaudière", "urgence"),
        ("Marc Singh", "Lave-linge en panne", "le lave-linge ne démarre plus", "hier", "gênant", "envoyer un réparateur", "cette semaine"),
        ("Julie Petit", "Odeur de gaz", "odeur suspecte dans la cuisine", "maintenant", "très dangereux", "intervenir immédiatement", "tout de suite"),
        ("Omar Hassan", "Cafards", "des insectes dans la cuisine", "plusieurs jours", "urgent", "faire désinsectiser", "rapidement"),
        ("Clara Rossi", "Moisissure", "taches noires sur le mur", "deux mois", "mauvais pour la santé", "envoyer un expert", "bientôt"),
        ("Yann Leroy", "Hotte en panne", "la hotte ne marche plus", "une semaine", "gênant", "envoyer un électricien", "semaine prochaine"),
        ("Inès Moreau", "Dégât des eaux", "eau qui coule du plafond", "deux heures", "très urgent", "fermer la vanne", "immédiatement"),
        ("Antoine Blanc", "Prises défectueuses", "les prises ne fonctionnent plus", "ce matin", "urgent", "envoyer un électricien", "aujourd'hui"),
        ("Salma Ben", "Fumée dans les parties communes", "le voisin fume dans le couloir", "longtemps", "gênant", "rappeler le règlement", "bientôt"),
        ("Victor Pop", "Vitre cassée", "vitre brisée par la grêle", "hier", "important", "envoyer un vitrier", "cette semaine"),
        ("Maya Singh", "Interphone en panne", "l'interphone ne fonctionne plus", "cinq jours", "gênant", "faire réparer", "rapidement"),
        ("Emma Laurent", "Radiateur froid", "le radiateur du salon est froid", "une semaine", "urgent", "purger le radiateur", "demain"),
    ]
    for sender, subject, problem, since, urgency, action, deadline in specs:
        lines = [
            f"Je vous signale un problème dans mon logement.",
            f"Problème : {problem}.",
            f"Cela dure depuis {since}. C'est {urgency}.",
            f"Pouvez-vous {action} ?",
            f"Merci d'intervenir {deadline}.",
        ]
        qs = [
            Q("Quel est le problème ?", problem.capitalize(), "Une fête", "Un chat", f"Problème : _________.", problem.split()[0], f"C'est {problem}.", 0),
            Q("Depuis combien de temps ?", since.capitalize(), "Dix ans", "Jamais", f"depuis _________.", since.split()[0], f"Depuis {since}.", 0),
            Q("Quel est le niveau d'urgence ?", urgency.capitalize(), "Aucun", "Pas grave", f"C'est _________.", urgency, f"C'est {urgency}.", 0),
            Q("Quelle action est demandée ?", action.capitalize(), "Rien", "Un voyage", f"Pouvez-vous _________ ?", action.split()[0], f"Demande : {action}.", 0),
            Q("Quand interviendra-t-on ?", deadline.capitalize(), "Jamais", "L'an prochain", f"intervenir _________.", deadline.split()[0], f"Intervention {deadline}.", 0),
            Q("Quel est l'objet de l'e-mail ?", subject, "Une invitation", "Un menu", f"Objet : _________", subject.split()[0], f"L'objet est {subject}.", 0),
        ]
        emails.append(render_email(sender, subject, lines, qs))
    return emails


def _rule_msg(header, rule_num, rule_text, penalty, hours, contact):
    text = f"""{header}

Règlement de l'immeuble — Article {rule_num}
{rule_text}
Sanction : {penalty}.
Horaires concernés : {hours}.
Pour toute question : {contact}."""
    return {"text": text, "questions": [
        Q("Quel article du règlement ?", f"Article {rule_num}", "Article 99", "Article 1", f"Article _________.", rule_num, f"C'est l'article {rule_num}.", 0),
        Q("Quelle est la règle ?", rule_text.split(".")[0].capitalize(), "Faire la fête", "Casser les murs", f"_________ .", rule_text.split()[0], f"Règle : {rule_text[:40]}...", 0),
        Q("Quelle sanction ?", penalty.capitalize(), "Rien", "Un cadeau", f"Sanction : _________.", penalty.split()[0], f"Sanction : {penalty}.", 0),
        Q("Quels horaires ?", hours.capitalize(), "Toute la nuit", "Jamais", f"Horaires : _________.", hours.split()[0], f"Horaires : {hours}.", 0),
        Q("Qui contacter ?", contact, "Le facteur", "Un ami", f"question : _________.", contact.split()[0], f"Contact : {contact}.", 0),
        Q("Quel type de document ?", "Règlement d'immeuble", "Une facture", "Un menu", "Règlement de _________", "l'immeuble", "C'est une facture.", 1),
        Q("Y a-t-il une sanction prévue ?", "Oui", "Non", "On ne sait pas", f"Sanction : _________.", penalty.split()[0], "Il y a une sanction.", 0),
    ]}


def _e2_3_messages():
    rules = [
        ("Affichage hall d'entrée", "3", "Le silence est obligatoire après 22 h.", "avertissement écrit", "22 h – 7 h", "le gardien"),
        ("Note syndic", "7", "Les animaux doivent être tenus en laisse.", "amende de 50 francs", "tous les jours", "syndic@copro.ch"),
        ("Rappel locataires", "12", "Interdiction de fumer dans les parties communes.", "amende de 100 francs", "24 h/24", "la régie"),
        ("Message groupe immeuble", "5", "Le linge ne doit pas sécher sur les balcons.", "avertissement", "8 h – 20 h", "le concierge"),
        ("Avis ascenseur", "9", "Maximum 4 personnes dans l'ascenseur.", "interdiction d'usage", "tous les jours", "079 111 22 33"),
        ("Règlement piscine", "15", "Douche obligatoire avant la baignade.", "exclusion temporaire", "7 h – 21 h", "piscine@immeuble.ch"),
        ("Note parking", "8", "Une place par appartement seulement.", "amende de 80 francs", "24 h/24", "le gardien"),
        ("Affichage cave", "11", "Interdiction de stocker des produits inflammables.", "retrait immédiat", "tous les jours", "syndic@copro.ch"),
        ("Rappel bruit", "2", "Pas de musique forte après 20 h.", "amende de 200 francs", "20 h – 8 h", "voisins@immeuble.ch"),
        ("Règlement jardin", "18", "Le jardin ferme à 21 h.", "exclusion", "7 h – 21 h", "le jardinier"),
        ("Note poubelles", "6", "Les poubelles doivent être sorties le lundi matin.", "frais de nettoyage", "6 h – 8 h", "concierge@mail.ch"),
        ("Avis vélo", "14", "Les vélos ne doivent pas bloquer l'entrée.", "mise en fourrière", "24 h/24", "le gardien"),
        ("Règlement visiteurs", "10", "Les visiteurs doivent annoncer leur arrivée.", "refus d'accès", "8 h – 22 h", "interphone"),
        ("Affichage laverie", "16", "Une machine à la fois par foyer.", "interdiction 1 semaine", "7 h – 22 h", "laverie@immeuble.ch"),
        ("Note déménagement", "4", "Déménagement uniquement en semaine.", "amende de 150 francs", "lundi – vendredi", "régie@immo.ch"),
        ("Rappel animaux", "13", "Maximum un animal par appartement.", "avertissement", "tous les jours", "syndic@copro.ch"),
        ("Règlement barbecue", "19", "Barbecue interdit sur les balcons.", "amende de 100 francs", "été seulement", "le syndic"),
        ("Avis interphone", "17", "Ne pas laisser entrer des inconnus.", "responsabilité locataire", "24 h/24", "la sécurité"),
        ("Note parties communes", "1", "Respecter la propreté des lieux.", "frais de nettoyage", "tous les jours", "le concierge"),
        ("Règlement chauffage", "20", "Ne pas couvrir les radiateurs.", "avertissement", "hiver", "technicien@chauffage.ch"),
    ]
    return [_rule_msg(h, n, t, p, hrs, c) for h, n, t, p, hrs, c in rules]


def _e2_3_emails():
    emails = []
    specs = [
        ("Régie Immobilière", "Rappel règlement — bruit", "Article 2", "pas de musique forte après 20 h", "amende de 200 francs", "20 h – 8 h"),
        ("Syndic Copro", "Animaux dans l'immeuble", "Article 7", "chiens en laisse obligatoire", "amende de 50 francs", "tous les jours"),
        ("Gardien", "Poubelles", "Article 6", "sortir les poubelles le lundi", "frais de nettoyage", "6 h – 8 h"),
        ("Régie du Lac", "Parking", "Article 8", "une place par logement", "amende de 80 francs", "24 h/24"),
        ("Syndic", "Parties communes", "Article 1", "respecter la propreté", "frais de nettoyage", "tous les jours"),
        ("Concierge", "Ascenseur", "Article 9", "maximum 4 personnes", "interdiction", "tous les jours"),
        ("Régie Centrale", "Fumer", "Article 12", "interdiction de fumer dans les couloirs", "amende de 100 francs", "24 h/24"),
        ("Syndic Alpes", "Linge sur balcon", "Article 5", "interdiction de sécher le linge", "avertissement", "8 h – 20 h"),
        ("Gardien", "Vélos", "Article 14", "ne pas bloquer l'entrée", "mise en fourrière", "24 h/24"),
        ("Régie Soleil", "Visiteurs", "Article 10", "annoncer les visiteurs", "refus d'accès", "8 h – 22 h"),
        ("Syndic", "Déménagement", "Article 4", "déménagement en semaine seulement", "amende de 150 francs", "lundi – vendredi"),
        ("Concierge", "Laverie", "Article 16", "une machine par foyer", "interdiction 1 semaine", "7 h – 22 h"),
        ("Régie", "Cave", "Article 11", "pas de produits inflammables", "retrait immédiat", "tous les jours"),
        ("Syndic", "Jardin", "Article 18", "fermeture du jardin à 21 h", "exclusion", "7 h – 21 h"),
        ("Gardien", "Piscine", "Article 15", "douche obligatoire", "exclusion temporaire", "7 h – 21 h"),
        ("Régie", "Barbecue", "Article 19", "interdit sur les balcons", "amende de 100 francs", "été"),
        ("Syndic", "Interphone", "Article 17", "ne pas laisser entrer des inconnus", "responsabilité locataire", "24 h/24"),
        ("Concierge", "Chauffage", "Article 20", "ne pas couvrir les radiateurs", "avertissement", "hiver"),
        ("Régie", "Silence", "Article 3", "silence après 22 h", "avertissement écrit", "22 h – 7 h"),
        ("Syndic", "Animaux nombre", "Article 13", "un animal maximum par logement", "avertissement", "tous les jours"),
    ]
    for sender, subject, article, rule, penalty, hours in specs:
        lines = [
            f"Nous vous rappelons une règle du règlement de l'immeuble.",
            f"{article} : {rule}.",
            f"Sanction en cas de non-respect : {penalty}.",
            f"Horaires concernés : {hours}.",
            "Merci de respecter ces règles pour le bien de tous.",
        ]
        qs = [
            Q("Quel article ?", article, "Article 99", "Article 0", f"_________ :", article.split()[-1], f"C'est {article}.", 0),
            Q("Quelle règle ?", rule.capitalize(), "Faire la fête", "Casser les murs", f"_________ .", rule.split()[0], f"Règle : {rule}.", 0),
            Q("Quelle sanction ?", penalty.capitalize(), "Rien", "Un cadeau", f"Sanction : _________.", penalty.split()[0], f"Sanction : {penalty}.", 0),
            Q("Quels horaires ?", hours.capitalize(), "Toute la nuit", "Jamais", f"Horaires : _________.", hours.split()[0], f"Horaires : {hours}.", 0),
            Q("Quel est l'objet ?", subject, "Une invitation", "Un menu", f"Objet : _________", subject.split()[0], f"Objet : {subject}.", 0),
            Q("Qui envoie l'e-mail ?", sender, "Un ami", "Un élève", f"De : _________", sender.split()[0], f"C'est {sender}.", 0),
        ]
        emails.append(render_email(sender, subject, lines, qs))
    return emails
