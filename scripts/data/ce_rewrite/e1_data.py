"""CE content data for E1 lessons (se présenter, famille, inviter)."""
from helpers import q, prof_q, EMPTY_IMG

LESSONS = {}

# ═══════════════════════════════════════════════════════════════════════════════
# E1.1 — Se présenter
# ═══════════════════════════════════════════════════════════════════════════════

E1_1_MESSAGES = [
    {
        "text": """Message sur le forum de l'école de langues

Bonjour à tous !
Je m'appelle Amina. J'ai 28 ans. Je suis tunisienne.
J'habite à Lausanne depuis six mois. Je suis mariée.
J'ai une petite fille de trois ans. Je suis cuisinière.
Je travaille dans un restaurant au centre-ville.
Le soir, j'étudie le français le lundi et le jeudi.
J'aime la musique et la natation.
Je cherche des amis pour parler français après les cours.
À bientôt, Amina""",
        "questions": [
            q("Quel âge a Amina ?", "28 ans", "38 ans", "18 ans", "J'ai _________ ans.", "28", "Amina a 28 ans.", 0, ["vingt-huit"]),
            prof_q("Quelle est la profession d'Amina ?", "Cuisinière", "Journaliste", "Fleuriste", "Je suis _________.", "cuisinière", "Amina est journaliste.", 1, ["cuisiniere"]),
            q("Quand Amina étudie-t-elle le français ?", "Le lundi et le jeudi", "Le mardi", "Le samedi", "Les cours sont le _________ et le jeudi.", "lundi", "Amina étudie le français le soir.", 0),
            q("Est-ce qu'Amina a des enfants ?", "Oui, une fille", "Non", "Oui, deux garçons", "J'ai une petite fille de _________ ans.", "trois", "Amina a deux enfants.", 1, ["3"]),
            q("Qu'est-ce qu'Amina aime ?", "La musique et la natation", "Le cinéma", "Le football", "J'aime la musique et la _________.", "natation", "Amina aime la natation.", 0),
            q("Pourquoi Amina écrit-elle ?", "Pour chercher des amis", "Pour vendre un vélo", "Pour un travail", "Je cherche des _________ pour parler français.", "amis", "Amina cherche un travail.", 1, ["amies", "ami"]),
            q("Depuis combien de temps Amina habite à Lausanne ?", "Six mois", "Six ans", "Deux semaines", "J'habite à Lausanne depuis six _________.", "mois", "Amina habite à Lausanne depuis six ans.", 1),
        ],
    },
    {
        "text": """Carte postale

Salut Julie !
Ici Marco, de Milan. Je suis en vacances à Montreux.
J'ai 32 ans. Je suis italien. Je parle italien et un peu français.
Je suis architecte. Je travaille dans un bureau à Milan.
J'habite dans un petit appartement avec mon chat.
J'aime la photo et les longues promenades au bord du lac.
Je reviens en Italie vendredi. On se voit bientôt ?
Bises, Marco""",
        "questions": [
            q("D'où vient Marco ?", "De Milan", "De Rome", "De Paris", "Je viens de _________.", "Milan", "Marco vient de Rome.", 1),
            q("Où est Marco en vacances ?", "À Montreux", "À Genève", "À Lyon", "Je suis en vacances à _________.", "Montreux", "Marco est à Montreux.", 0),
            prof_q("Quelle est la profession de Marco ?", "Architecte", "Médecin", "Cuisinier", "Je suis _________.", "architecte", "Marco est médecin.", 1),
            q("Avec qui Marco habite-t-il ?", "Avec son chat", "Avec sa femme", "Avec ses parents", "J'habite avec mon _________.", "chat", "Marco habite avec sa femme.", 1),
            q("Quand Marco revient-il en Italie ?", "Vendredi", "Lundi", "Dimanche", "Je reviens en Italie _________.", "vendredi", "Marco revient vendredi.", 0),
            q("Qu'est-ce que Marco aime ?", "La photo et les promenades", "Le football", "La cuisine", "J'aime la photo et les longues _________.", "promenades", "Marco aime le football.", 1),
            q("Quelles langues parle Marco ?", "Italien et un peu français", "Seulement l'italien", "Français et allemand", "Je parle italien et un peu _________.", "français", "Marco parle seulement l'italien.", 1, ["francais"]),
        ],
    },
    {
        "text": """SMS — WhatsApp

Léa 🌸
Salut ! C'est Léa. J'ai 22 ans.
Je suis étudiante en médecine à Genève.
J'habite en colocation près de l'université.
Je parle français et anglais.
J'aime le cinéma et la danse.
Tu veux aller au cinéma samedi ?
Réponds-moi ! 😊""",
        "questions": [
            q("Comment s'appelle la personne ?", "Léa", "Marie", "Sophie", "C'est _________.", "Léa", "La personne s'appelle Léa.", 0),
            q("Quel âge a Léa ?", "22 ans", "32 ans", "12 ans", "J'ai _________ ans.", "22", "Léa a 22 ans.", 0, ["vingt-deux"]),
            q("Où Léa étudie-t-elle ?", "À Genève", "À Lausanne", "À Berne", "Je suis étudiante à _________.", "Genève", "Léa étudie à Genève.", 0),
            q("En quoi Léa est-elle étudiante ?", "En médecine", "En droit", "En histoire", "Je suis étudiante en _________.", "médecine", "Léa étudie le droit.", 1),
            q("Où habite Léa ?", "En colocation", "Chez ses parents", "Seule", "J'habite en _________.", "colocation", "Léa habite chez ses parents.", 1),
            q("Qu'est-ce que Léa propose ?", "Aller au cinéma samedi", "Faire du sport", "Étudier ensemble", "Tu veux aller au _________ samedi ?", "cinéma", "Léa propose d'aller au cinéma.", 0),
            q("Quelles langues parle Léa ?", "Français et anglais", "Français seulement", "Allemand et italien", "Je parle français et _________.", "anglais", "Léa parle seulement le français.", 1),
        ],
    },
    {
        "text": """Petite annonce — colocation

CHERCHE COLOCATAIRE
Bonjour, je m'appelle Nina. J'ai 25 ans.
Je suis portugaise. J'habite à Fribourg.
Je cherche une colocataire pour un appartement de trois pièces.
L'appartement est lumineux. Il a un balcon et une cuisine équipée.
Le loyer est de 650 francs par mois.
Je suis vendeuse dans une boutique de vêtements.
J'aime la cuisine et les sorties entre amis.
Contact : nina.coloc@mail.ch — Tél. 079 123 45 67""",
        "questions": [
            q("Que cherche Nina ?", "Une colocataire", "Un appartement seul", "Un chat", "Je cherche une _________.", "colocataire", "Nina cherche un appartement seul.", 1),
            q("Où habite Nina ?", "À Fribourg", "À Zurich", "À Berne", "J'habite à _________.", "Fribourg", "Nina habite à Fribourg.", 0),
            q("Combien de pièces a l'appartement ?", "Trois", "Deux", "Quatre", "Un appartement de _________ pièces.", "trois", "L'appartement a trois pièces.", 0, ["3"]),
            q("Combien coûte le loyer ?", "650 francs", "550 francs", "750 francs", "Le loyer est de _________ francs.", "650", "Le loyer est de 650 francs.", 0, ["six cent cinquante"]),
            prof_q("Quelle est la profession de Nina ?", "Vendeuse", "Infirmière", "Professeure", "Je suis _________ dans une boutique.", "vendeuse", "Nina est infirmière.", 1),
            q("Qu'est-ce que Nina aime ?", "La cuisine et les sorties", "Le sport seul", "La lecture", "J'aime la cuisine et les _________.", "sorties", "Nina aime le sport seul.", 1),
            q("L'appartement a-t-il un balcon ?", "Oui", "Non", "On ne sait pas", "Il a un _________ et une cuisine.", "balcon", "L'appartement n'a pas de balcon.", 1),
        ],
    },
    {
        "text": """Note d'accueil — nouvel employé

Bienvenue à Thomas !
Thomas Martin rejoint notre équipe lundi.
Il a 35 ans. Il est infirmier à l'hôpital cantonal.
Il habite à Neuchâtel avec sa femme et son fils de 5 ans.
Thomas parle français et allemand.
Il aime le vélo et la randonnée en montagne.
Son bureau est au deuxième étage, porte 204.
N'hésitez pas à lui dire bonjour !""",
        "questions": [
            q("Quel est le prénom du nouvel employé ?", "Thomas", "Marc", "Paul", "Bienvenue à _________ !", "Thomas", "Le nouvel employé s'appelle Thomas.", 0),
            prof_q("Quelle est la profession de Thomas ?", "Infirmier", "Médecin", "Secrétaire", "Il est _________ à l'hôpital.", "infirmier", "Thomas est médecin.", 1),
            q("Où habite Thomas ?", "À Neuchâtel", "À Genève", "À Lausanne", "Il habite à _________.", "Neuchâtel", "Thomas habite à Neuchâtel.", 0),
            q("Combien d'enfants Thomas a-t-il ?", "Un fils", "Deux filles", "Aucun", "Il a un fils de _________ ans.", "cinq", "Thomas a deux enfants.", 1, ["5"]),
            q("Quelles langues parle Thomas ?", "Français et allemand", "Français seulement", "Italien et anglais", "Il parle français et _________.", "allemand", "Thomas parle seulement le français.", 1),
            q("Où est le bureau de Thomas ?", "Deuxième étage, porte 204", "Premier étage", "Rez-de-chaussée", "Son bureau est au _________ étage.", "deuxième", "Le bureau est au premier étage.", 1, ["deuxieme", "2e"]),
            q("Quand Thomas commence-t-il ?", "Lundi", "Mardi", "Vendredi", "Il rejoint notre équipe _________.", "lundi", "Thomas commence mardi.", 1),
        ],
    },
]

# Continue building - need 15 more for E1.1, then E1.2 and E1.3
print(f"E1.1 partial: {len(E1_1_MESSAGES)} messages")
