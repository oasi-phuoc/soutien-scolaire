"""Shared text renderers for CE scenario generation."""
from generate_all_data import Q


def render_forum(name, age, nationality, city, since, job, workplace, study_days, hobbies, purpose):
    text = f"""Message sur le forum de l'école de langues

Bonjour à tous !
Je m'appelle {name}. J'ai {age} ans. Je suis {nationality}.
J'habite à {city} depuis {since}.
Je suis {job}. Je travaille dans {workplace}.
J'étudie le français {study_days}.
J'aime {hobbies}.
{purpose}
À bientôt, {name}"""
    qs = [
        Q(f"Comment s'appelle la personne ?", name, "Marie", "Paul", f"Je m'appelle _________.", name, f"La personne s'appelle {name}.", 0),
        Q(f"Quel âge a {name} ?", f"{age} ans", f"{age+10} ans", f"{age-5} ans", "J'ai _________ ans.", str(age), f"{name} a {age} ans.", 0),
        Q(f"Où habite {name} ?", f"À {city}", "À Paris", "À Lyon", f"J'habite à _________.", city, f"{name} habite à {city}.", 0),
        Q(f"Quelle est la profession de {name} ?", job.capitalize(), "Médecin", "Avocat", f"Je suis _________.", job, f"{name} est médecin.", 1, prof=True),
        Q(f"Qu'est-ce que {name} aime ?", hobbies.capitalize(), "Le football", "La télévision", f"J'aime _________.", hobbies.split(" et ")[0], f"{name} aime {hobbies}.", 0),
        Q(f"Pourquoi {name} écrit-il/elle ?", purpose.split(".")[0].capitalize(), "Pour vendre un vélo", "Pour un examen", f"Je cherche des _________ pour parler français.", "amis", f"{name} vend un vélo.", 1),
        Q(f"Depuis combien de temps {name} habite à {city} ?", f"Depuis {since}", "Depuis un jour", "Depuis vingt ans", f"J'habite à {city} depuis _________.", since.split()[-1], f"{name} habite à {city} depuis {since}.", 0),
    ]
    return {"text": text, "questions": qs}


def render_sms(name, age, study, city, hobbies, proposal):
    text = f"""SMS — WhatsApp

{name} 🌸
Salut ! C'est {name}. J'ai {age} ans.
{study}
J'habite à {city}.
J'aime {hobbies}.
{proposal}
Réponds-moi ! 😊"""
    qs = [
        Q(f"Comment s'appelle la personne ?", name, "Sophie", "Lucas", f"C'est _________.", name, f"La personne s'appelle {name}.", 0),
        Q(f"Quel âge a {name} ?", f"{age} ans", f"{age+5} ans", f"{age-3} ans", "J'ai _________ ans.", str(age), f"{name} a {age} ans.", 0),
        Q(f"Où habite {name} ?", f"À {city}", "À Berne", "À Bâle", f"J'habite à _________.", city, f"{name} habite à {city}.", 0),
        Q(f"Qu'est-ce que {name} propose ?", proposal.rstrip("?").capitalize(), "Rien", "Un voyage loin", "Tu veux aller au _________ ?", "cinéma", f"{name} ne propose rien.", 1),
        Q(f"Qu'est-ce que {name} aime ?", hobbies.capitalize(), "La télé", "Les jeux vidéo", f"J'aime _________.", hobbies.split(" et ")[0], f"{name} aime {hobbies}.", 0),
        Q(f"Quel type de message est-ce ?", "Un SMS", "Une lettre", "Un e-mail", "SMS — _________", "WhatsApp", "C'est une lettre.", 1),
        Q(f"Quelle filière d'études est mentionnée ?", "Médecine", "Droit", "Histoire", "étudiante en _________", "médecine", "Elle étudie le droit.", 1),
    ]
    return {"text": text, "questions": qs}


def render_postcard(name, from_city, vacation_city, age, nationality, job, hobbies, return_day):
    text = f"""Carte postale

Salut !
Ici {name}, de {from_city}. Je suis en vacances à {vacation_city}.
J'ai {age} ans. Je suis {nationality}.
Je suis {job}.
J'aime {hobbies}.
Je reviens {return_day}. On se voit bientôt ?
Bises, {name}"""
    qs = [
        Q(f"D'où vient {name} ?", f"De {from_city}", "De Paris", "De Berlin", f"Je viens de _________.", from_city, f"{name} vient de {from_city}.", 0),
        Q(f"Où est {name} en vacances ?", f"À {vacation_city}", "À Rome", "À Madrid", f"Je suis en vacances à _________.", vacation_city, f"{name} est à {vacation_city}.", 0),
        Q(f"Quelle est la profession de {name} ?", job.capitalize(), "Pilote", "Boucher", f"Je suis _________.", job, f"{name} est {job}.", 0, prof=True),
        Q(f"Quand {name} revient-il/elle ?", return_day.capitalize(), "Lundi", "Mardi", f"Je reviens _________.", return_day, f"{name} revient {return_day}.", 0),
        Q(f"Qu'est-ce que {name} aime ?", hobbies.capitalize(), "Le ski", "La boxe", f"J'aime _________.", hobbies.split(" et ")[0], f"{name} aime {hobbies}.", 0),
        Q(f"Quel type de texte est-ce ?", "Une carte postale", "Un SMS", "Une facture", "Carte _________", "postale", "C'est un SMS.", 1),
        Q(f"D'où écrit {name} ?", f"De {from_city}", "De Paris", "De Berlin", f"Ici {name}, de _________.", from_city, f"{name} écrit de {from_city}.", 0),
    ]
    return {"text": text, "questions": qs}


def render_ad_coloc(name, age, nationality, city, rooms, rent, job, hobbies, contact):
    text = f"""Petite annonce — colocation

CHERCHE COLOCATAIRE
Bonjour, je m'appelle {name}. J'ai {age} ans.
Je suis {nationality}. J'habite à {city}.
Je cherche une colocataire pour un appartement de {rooms} pièces.
Le loyer est de {rent} francs par mois.
Je suis {job}.
J'aime {hobbies}.
Contact : {contact}"""
    qs = [
        Q(f"Que cherche {name} ?", "Une colocataire", "Un chat", "Un travail", "Je cherche une _________.", "colocataire", f"{name} cherche une colocataire.", 0),
        Q(f"Où habite {name} ?", f"À {city}", "À Zurich", "À Berne", f"J'habite à _________.", city, f"{name} habite à {city}.", 0),
        Q(f"Combien de pièces a l'appartement ?", rooms, "Une", "Dix", f"Un appartement de _________ pièces.", rooms.split()[0], f"L'appartement a {rooms} pièces.", 0),
        Q(f"Combien coûte le loyer ?", f"{rent} francs", "100 francs", "2000 francs", f"Le loyer est de _________ francs.", rent, f"Le loyer est de {rent} francs.", 0),
        Q(f"Quelle est la profession de {name} ?", job.capitalize(), "Médecin", "Pilote", f"Je suis _________.", job, f"{name} est {job}.", 0, prof=True),
        Q(f"Qu'est-ce que {name} aime ?", hobbies.capitalize(), "La télé", "Les voitures", f"J'aime _________.", hobbies.split(" et ")[0], f"{name} aime {hobbies}.", 0),
        Q(f"Comment contacter {name} ?", contact, "Par courrier", "En personne", f"Contact : _________.", contact.split("@")[0] if "@" in contact else contact.split()[0], f"Contact : {contact}.", 0),
    ]
    return {"text": text, "questions": qs}


def render_welcome_note(name, age, job, hospital, city, family, languages, floor, hobbies):
    text = f"""Note d'accueil — nouvel employé

Bienvenue à {name} !
{name} rejoint notre équipe lundi.
Il/Elle a {age} ans. Il/Elle est {job} à {hospital}.
Il/Elle habite à {city} avec {family}.
Il/Elle parle {languages}.
Il/Elle aime {hobbies}.
Son bureau est au {floor} étage.
N'hésitez pas à lui dire bonjour !"""
    qs = [
        Q(f"Quel est le prénom du nouvel employé ?", name, "Marc", "Paul", f"Bienvenue à _________ !", name, f"Le nouvel employé s'appelle {name}.", 0),
        Q(f"Quelle est sa profession ?", job.capitalize(), "Avocat", "Pilote", f"Il/Elle est _________.", job, f"Il/Elle est {job}.", 0, prof=True),
        Q(f"Où habite {name} ?", f"À {city}", "À Paris", "À Lyon", f"Il/Elle habite à _________.", city, f"{name} habite à {city}.", 0),
        Q(f"Quelles langues parle {name} ?", languages.capitalize(), "Chinois", "Russe", f"Il/Elle parle _________.", languages.split(" et ")[0], f"{name} parle {languages}.", 0),
        Q(f"Où est le bureau ?", f"Au {floor} étage", "Au sous-sol", "Dehors", f"Son bureau est au _________ étage.", floor.split()[0], f"Le bureau est au {floor} étage.", 0),
        Q(f"Quand {name} commence-t-il/elle ?", "Lundi", "Vendredi", "Dimanche", "Il/Elle rejoint notre équipe _________.", "lundi", f"{name} commence vendredi.", 1),
        Q(f"Où travaille {name} ?", hospital.capitalize(), "À la plage", "En mer", f"Il/Elle est {job} à _________.", hospital.split()[-1], f"{name} travaille à {hospital}.", 0),
    ]
    return {"text": text, "questions": qs}


def render_email(sender, subject, body_lines, questions):
    header = f"De : {sender}\nObjet : {subject}\n\nBonjour,\n\n"
    footer = "\n\nÀ bientôt,\n" + sender.split()[0] if " " not in sender else "\n\nCordialement,\n" + sender
    text = header + "\n".join(body_lines) + footer
    return {"text": text, "questions": questions}
