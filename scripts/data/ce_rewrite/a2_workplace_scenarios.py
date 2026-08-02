"""Shared A2 CE builders for Express E13-E14.

The patcher imports scenario modules from this directory and writes the
generated TypeScript constants.  Keep these builders deterministic: they are
curriculum fixtures, not random data.
"""
from __future__ import annotations

EMPTY_IMG = ["", "", ""]

DATES = [
    "lundi 4 mars",
    "mardi 12 mars",
    "mercredi 20 mars",
    "jeudi 28 mars",
    "vendredi 5 avril",
    "samedi 13 avril",
    "lundi 22 avril",
    "mardi 30 avril",
    "mercredi 8 mai",
    "jeudi 16 mai",
    "vendredi 24 mai",
    "lundi 3 juin",
    "mardi 11 juin",
    "mercredi 19 juin",
    "jeudi 27 juin",
    "vendredi 5 juillet",
    "lundi 15 juillet",
    "mardi 23 juillet",
    "mercredi 31 juillet",
    "jeudi 8 août",
]

TIMES = [
    "8 h 30",
    "9 h",
    "9 h 15",
    "10 h",
    "10 h 30",
    "11 h",
    "13 h 30",
    "14 h",
    "14 h 30",
    "15 h",
    "15 h 30",
    "16 h",
    "16 h 30",
    "17 h",
    "17 h 30",
    "18 h",
    "18 h 30",
    "19 h",
    "19 h 30",
    "20 h",
]

GENRES = [
    "Affiche",
    "SMS",
    "Note interne",
    "Page web",
    "Programme",
    "Planning",
    "Règlement",
    "Ticket",
    "Article local",
    "Fil de discussion",
    "Fiche pratique",
    "Avis sur la porte",
    "Invitation",
    "Confirmation",
    "Formulaire",
    "Petite annonce",
    "Compte rendu",
    "FAQ",
    "Plan d'accès",
    "Message vocal transcrit",
]

EMAIL_SENDERS = [
    "Accueil Horizon",
    "Mme Bernard",
    "Secrétariat Central",
    "M. Lopez",
    "Service administratif",
    "Mme Garcia",
    "Bureau des inscriptions",
    "M. Girard",
    "Service planning",
    "Mme Nguyen",
    "Accueil formation",
    "M. Robert",
    "Service dossiers",
    "Mme Moreau",
    "Équipe coordination",
    "M. Petit",
    "Service suivi",
    "Mme Leroy",
    "Accueil principal",
    "M. Simon",
]

EMAIL_SUBJECTS = [
    "Confirmation de rendez-vous",
    "Documents à apporter",
    "Changement d'horaire",
    "Réponse à votre demande",
    "Programme de la journée",
    "Rappel avant la visite",
    "Invitation à une réunion",
    "Résultat de votre dossier",
    "Pièce manquante",
    "Nouveau créneau proposé",
    "Deux choix possibles",
    "Suite à notre appel",
    "Premier jour",
    "Merci pour votre réponse",
    "Contact à noter",
    "Message au groupe",
    "Résumé de la rencontre",
    "Rendez-vous individuel",
    "Solution proposée",
    "Dernières informations",
]


def Q(text_q, ans, w1, w2, fill_q, fill, vf, vfc=0, fill_a=None):
    d = {
        "textQ": text_q,
        "text": [ans, w1, w2],
        "textC": 0,
        "img": EMPTY_IMG,
        "imgC": 0,
        "fillQ": fill_q,
        "fill": fill,
        "vfQ": vf,
        "vfC": vfc,
    }
    if fill_a:
        d["fillA"] = fill_a
    return d


def first_word(value: str) -> str:
    return value.split()[0].strip(".,;:!?")


def content_word(value: str) -> str:
    skip = {
        "un",
        "une",
        "du",
        "de",
        "des",
        "d'un",
        "d'une",
        "d'",
        "d",
        "le",
        "la",
        "les",
        "l'",
        "votre",
        "vos",
        "nos",
        "au",
        "aux",
        "pour",
        "sur",
        "avec",
        "avant",
        "après",
        "chez",
        "dans",
        "formation",
        "atelier",
        "cours",
        "séance",
        "rendez-vous",
        "visite",
        "réunion",
        "stage",
        "offre",
        "entretien",
        "rappel",
        "candidature",
        "réponse",
        "dépôt",
        "préparation",
        "présentation",
        "accueil",
        "rue",
        "avenue",
        "place",
        "salle",
        "bureau",
        "cabinet",
        "centre",
        "service",
        "agence",
        "école",
        "bibliothèque",
        "entreprise",
        "mme",
        "m.",
        "m",
        "dr",
    }
    for raw in value.replace("'", "' ").split():
        word = raw.strip(".,;:!?")
        if word.lower() not in skip:
            return word
    return first_word(value)


def time_accept(value: str) -> list[str]:
    return [value.replace(" h ", "h").replace(" h", "h"), value.replace(" h", " heures")]


def make_questions(genre, activity, place, date, time, person, requirement, false_place):
    return [
        Q(
            "Quel type de document est-ce ?",
            genre,
            "Une recette",
            "Une publicité de vacances",
            "Document : _________.",
            first_word(genre),
            f"Le type de document est : {genre}.",
            0,
        ),
        Q(
            "Quelle activité est indiquée ?",
            activity,
            "Un repas de famille",
            "Un cours de sport",
            "Thème principal : _________.",
            content_word(activity),
            f"L'activité indiquée est : {activity}.",
            0,
        ),
        Q(
            "Où faut-il aller ?",
            place,
            false_place,
            "Au cinéma Rex",
            "Lieu : _________.",
            content_word(place),
            f"Le lieu indiqué est : {place}.",
            0,
        ),
        Q(
            "Quel jour est indiqué ?",
            date,
            "dimanche 1 septembre",
            "samedi 25 décembre",
            f"Date : {date.split()[0]} _________.",
            date.split()[1],
            f"La date indiquée est {date}.",
            0,
        ),
        Q(
            "À quelle heure faut-il venir ?",
            time,
            "7 h",
            "22 h",
            "Heure : _________.",
            time,
            f"Il faut venir à {time}.",
            0,
            time_accept(time),
        ),
        Q(
            "Qui est la personne de contact ?",
            person,
            "le gardien",
            "la voisine",
            f"Contact : {first_word(person)} _________.",
            person.split()[-1],
            f"La personne de contact est {person}.",
            0,
        ),
        Q(
            "Que faut-il préparer ?",
            requirement,
            "un maillot de bain",
            "une lampe de poche",
            "À préparer : _________.",
            content_word(requirement),
            f"Il faut préparer {requirement}.",
            0,
        ),
    ]


ARTICLE_BY_FIRST = {
    "accueil": "l'", "achat": "l'", "appel": "l'", "atelier": "l'", "bilan": "le ",
    "candidature": "la ", "changement": "le ", "commande": "la ", "compte": "le ", "cours": "le ",
    "découverte": "la ", "demande": "la ", "démarche": "la ", "dépôt": "le ", "dossier": "le ",
    "envoi": "l'", "entretien": "l'", "formation": "la ", "forum": "le ", "garde": "la ",
    "inscription": "l'", "lecture": "la ", "marché": "le ", "message": "le ", "module": "le ",
    "nouvel": "le ", "offre": "l'", "organisation": "l'", "pause": "la ", "permanence": "la ",
    "point": "le ", "poste": "le ", "préparation": "la ", "présentation": "la ", "rappel": "le ",
    "recherche": "la ", "relecture": "la ", "remise": "la ", "rendez-vous": "le ", "réparation": "la ",
    "réponse": "la ", "réservation": "la ", "repas": "le ", "retour": "le ", "réunion": "la ",
    "sac": "le ", "séance": "la ", "simulation": "la ", "stage": "le ", "test": "le ",
    "tri": "le ", "visite": "la ",
}


def activity_phrase(value: str) -> str:
    lowered = value.lower()
    if lowered.startswith(("un ", "une ", "le ", "la ", "les ", "l'", "des ", "du ", "de l'")):
        return value
    first = lowered.split()[0]
    return f"{ARTICLE_BY_FIRST.get(first, 'la ')}{value}"


def place_phrase(value: str) -> str:
    if value.startswith("Rue "):
        return f"à l'adresse {value}"
    if value.startswith("Salle "):
        return f"dans la {value}"
    if value.startswith(("Centre ", "Bureau ", "Cabinet ", "Jardin ", "Marché ", "Service ")):
        return f"au {value}"
    if value.startswith(("École ", "Agence ", "Accueil ", "Entreprise ", "Immeuble ", "Hôtel ")):
        return f"à l'{value}"
    if value.startswith(("Gare ", "Piscine ", "Bibliothèque ", "Banque ", "Mairie ", "Pharmacie ", "Place ")):
        return f"à la {value}"
    if value.startswith("Arrêt "):
        return f"à l'{value}"
    return f"à {value}"


def message_text(i, title, activity, place, date, time, person, requirement, phone):
    a = activity_phrase(activity)
    p = place_phrase(place)
    if i == 0:
        return (
            f"Affiche — Porte ouverte {title}\n\n"
            f"{place} ouvre ses portes le {date} dès {time}. Le public pourra découvrir {a} avec {person}.\n"
            f"L'entrée est libre, mais chaque visiteur doit venir avec {requirement}.\n"
            f"Pour les questions de dernière minute, le numéro à garder est le {phone}."
        )
    if i == 1:
        return (
            f"SMS — {person}\n\n"
            f"Bonjour ! Je vous confirme le rendez-vous pour {a}.\n"
            f"On se voit {date} à {time}, directement {p}.\n"
            f"N'oubliez pas {requirement}. Répondez OUI si vous pouvez venir."
        )
    if i == 2:
        return (
            f"Note interne — accueil\n\n"
            f"Une personne se présentera {date} à {time} pour {a}.\n"
            f"Merci de l'orienter vers {place} et de prévenir {person} dès son arrivée.\n"
            f"Son dossier doit contenir {requirement}; sans ce document, le rendez-vous sera reporté."
        )
    if i == 3:
        return (
            f"Page web — informations pratiques\n\n"
            f"Vous cherchez des renseignements sur {a} ? La prochaine session est prévue le {date}.\n"
            f"L'accueil commence à {time} {p}. {person} répond aux questions simples par téléphone au {phone}.\n"
            f"Avant de partir, vérifiez que vous avez {requirement}."
        )
    if i == 4:
        return (
            f"Programme — matinée {title}\n\n"
            f"{time} : arrivée du groupe {p}.\n"
            f"Ensuite, {person} présente {a} avec des exemples concrets.\n"
            f"La rencontre dure environ une heure. Le {date}, chaque participant apporte {requirement}."
        )
    if i == 5:
        return (
            f"Planning partagé\n\n"
            f"Dans le calendrier de l'équipe, le créneau du {date} est réservé à {a}.\n"
            f"Le groupe se retrouve à {time} {p}.\n"
            f"{person} fera l'appel; merci de préparer {requirement} avant d'entrer."
        )
    if i == 6:
        return (
            f"Règlement — participation\n\n"
            f"Pour {a}, la ponctualité est importante : les portes de {place} ferment dix minutes après {time}.\n"
            f"La date retenue est le {date}. Les personnes sans {requirement} doivent passer à l'accueil.\n"
            f"En cas de difficulté, demandez {person}; il ou elle vous indiquera la bonne salle."
        )
    if i == 7:
        return (
            f"Ticket de passage — A2-{i + 11}\n\n"
            f"Conservez ce ticket jusqu'à la fin de {a}.\n"
            f"Il donne accès à {place} le {date}, à partir de {time}.\n"
            f"Le contrôle sera fait par {person}. Le document demandé est {requirement}."
        )
    if i == 8:
        return (
            f"Article local — service de proximité\n\n"
            f"Le quartier annonce {a} pour aider les habitants dans leurs démarches.\n"
            f"La rencontre aura lieu le {date} à {time}, {p}.\n"
            f"Selon {person}, il suffit d'apporter {requirement} et de poser ses questions simplement."
        )
    if i == 9:
        return (
            f"Fil de discussion — groupe A2\n\n"
            f"Mina : Tu viens à {a} ?\n"
            f"Ali : Oui, c'est {date} à {time}.\n"
            f"Mina : Je vais où ?\n"
            f"Ali : {p}. {person} nous attendra, et il faut prendre {requirement}."
        )
    if i == 10:
        return (
            f"Fiche pratique — avant de venir\n\n"
            f"Pour {a}, notez trois informations : le rendez-vous est {date}, l'heure est {time}, le lieu est {place}.\n"
            f"La personne à contacter est {person}.\n"
            f"Dernière vérification dans le sac : {requirement}."
        )
    if i == 11:
        return (
            f"Avis sur la porte\n\n"
            f"Changement d'organisation pour {a}.\n"
            f"Le rendez-vous reste le {date} à {time}, mais l'entrée se fait par {place}.\n"
            f"Sonnez chez {person} et gardez {requirement} à la main pour gagner du temps."
        )
    if i == 12:
        return (
            f"Invitation — rencontre utile\n\n"
            f"Vous êtes invité(e) à participer à {a}.\n"
            f"La rencontre se déroule {date} à {time}, {p}.\n"
            f"{person} expliquera les étapes et répondra aux questions. Merci d'apporter {requirement}."
        )
    if i == 13:
        return (
            f"Confirmation imprimée\n\n"
            f"Votre place est gardée pour {a}.\n"
            f"Présentez-vous {p} le {date}, quelques minutes avant {time}.\n"
            f"{person} vous accueillera à l'entrée. Le jour même, montrez {requirement}."
        )
    if i == 14:
        return (
            f"Formulaire commenté — {title}\n\n"
            f"Le formulaire est court : il demande votre nom, puis il confirme {a}.\n"
            f"La ligne suivante indique {place}, avec un rendez-vous le {date} à {time}.\n"
            f"À la fin, {person} rappelle d'ajouter {requirement} au dossier."
        )
    if i == 15:
        return (
            f"Petite annonce — besoin de participants\n\n"
            f"Nous cherchons des personnes intéressées par {a}.\n"
            f"Une présentation simple est organisée le {date} à {time}, {p}.\n"
            f"Aucun achat n'est demandé; venez seulement avec {requirement}. Contact rapide : {person}."
        )
    if i == 16:
        return (
            f"Compte rendu — décision du groupe\n\n"
            f"Pendant la réunion, {person} a proposé de continuer avec {a}.\n"
            f"Le groupe a choisi {place} pour la prochaine étape.\n"
            f"La date retenue est {date} à {time}. Chaque participant prépare {requirement}."
        )
    if i == 17:
        return (
            f"FAQ — questions fréquentes\n\n"
            f"Quand commence {a} ? Le {date} à {time}.\n"
            f"Où faut-il aller ? {p}.\n"
            f"Qui peut aider ? {person}.\n"
            f"Que faut-il préparer ? {requirement}."
        )
    if i == 18:
        return (
            f"Plan d'accès — entrée conseillée\n\n"
            f"Pour {a}, entrez par la porte principale de {place}.\n"
            f"Prenez le couloir à gauche et attendez {person} près du panneau bleu.\n"
            f"Le rendez-vous est fixé au {date} à {time}. Gardez {requirement} dans votre sac."
        )
    return (
        f"Message vocal transcrit — {person}\n\n"
        f"Bonjour, c'est {person}. Je vous laisse un message pour confirmer {a}.\n"
        f"Nous nous retrouvons {date} à {time} {p}.\n"
        f"N'oubliez pas {requirement}. Si besoin, rappelez-moi au {phone}."
    )


def email_text(i, title, activity, place, date, time, person, requirement, phone):
    sender = EMAIL_SENDERS[i]
    subject = f"{EMAIL_SUBJECTS[i]} — {title}"
    greeting = "Bonjour,"
    closing = f"Merci,\n{sender}"
    a = activity_phrase(activity)
    p = place_phrase(place)
    if i == 0:
        body = (
            f"Votre rendez-vous est confirmé pour {a}.\n"
            f"Nous vous accueillerons le {date} à {time} {p}.\n"
            f"{person} sera à l'entrée pour vous guider. Merci d'apporter {requirement}."
        )
    elif i == 1:
        body = (
            f"Pour préparer {a}, mettez {requirement} dans votre sac.\n"
            f"La rencontre aura lieu le {date} à {time}, {p}.\n"
            f"Si vous avez une question, {person} répond au {phone}."
        )
    elif i == 2:
        body = (
            f"L'horaire de {a} change légèrement.\n"
            f"Le nouveau rendez-vous est fixé au {date} à {time}.\n"
            f"Le lieu reste {place}. Pensez à prévenir {person} si vous ne pouvez pas venir."
        )
    elif i == 3:
        body = (
            f"Nous avons bien reçu votre demande concernant {a}.\n"
            f"Vous pouvez passer le {date}; l'accueil ouvrira à {time} {p}.\n"
            f"Le dossier sera plus vite traité avec {requirement}."
        )
    elif i == 4:
        body = (
            f"Voici le déroulement prévu le {date}.\n"
            f"À {time}, accueil {p}. Ensuite, {person} présentera {a}.\n"
            f"La séance est courte; gardez simplement {requirement} avec vous."
        )
    elif i == 5:
        body = (
            f"Petit rappel avant votre visite : {a} est bien prévu le {date}.\n"
            f"Merci d'arriver à {time} {p}.\n"
            f"{person} vérifiera que votre dossier contient {requirement}."
        )
    elif i == 6:
        body = (
            f"Nous vous invitons à une réunion au sujet de {a}.\n"
            f"Elle se tiendra le {date} à {time}, {p}.\n"
            f"Répondez avant vendredi et signalez à {person} si {requirement} manque encore."
        )
    elif i == 7:
        body = (
            f"Votre dossier pour {a} est maintenant complet.\n"
            f"La prochaine étape se fera le {date} à {time}.\n"
            f"Rendez-vous {p}; gardez {requirement} avec vous jusqu'à la fin."
        )
    elif i == 8:
        body = (
            f"Il manque encore {requirement}.\n"
            f"Vous pouvez le déposer le {date} à partir de {time}, {p}.\n"
            f"Demandez {person} à l'accueil pour éviter une attente trop longue."
        )
    elif i == 9:
        body = (
            f"Le rendez-vous pour {a} est reporté.\n"
            f"Nous proposons maintenant le {date} à {time}, toujours {p}.\n"
            f"Merci de confirmer votre présence à {person}."
        )
    elif i == 10:
        body = (
            f"Deux choix étaient possibles pour {a}.\n"
            f"Vous avez choisi le créneau du {date} à {time}.\n"
            f"La rencontre aura lieu {p}; apportez {requirement}."
        )
    elif i == 11:
        body = (
            f"Suite à notre appel, je résume les informations.\n"
            f"{activity_phrase(activity).capitalize()} aura lieu le {date} à {time}, {p}.\n"
            f"{person} vous attendra avec la liste des participants."
        )
    elif i == 12:
        body = (
            f"Pour votre premier jour lié à {a}, arrivez un peu avant {time}.\n"
            f"La date est le {date}, et l'accueil se trouve {p}.\n"
            f"Merci d'apporter {requirement}; cela facilitera l'inscription."
        )
    elif i == 13:
        body = (
            f"Merci pour votre réponse positive.\n"
            f"Votre place pour {a} est gardée le {date} à {time}.\n"
            f"{p.capitalize()}, {person} donnera les consignes et vérifiera {requirement}."
        )
    elif i == 14:
        body = (
            f"Voici le contact à noter pour {a} : {person}.\n"
            f"Vous pouvez appeler le {phone} seulement le matin.\n"
            f"La prochaine rencontre aura lieu le {date} à {time}, {p}."
        )
    elif i == 15:
        body = (
            f"Message pour tout le groupe : {activity_phrase(activity).capitalize()} commence bientôt.\n"
            f"Soyez présent(e) le {date} à {time}, {p}.\n"
            f"Chaque personne prépare {requirement}; {person} fera l'appel."
        )
    elif i == 16:
        body = (
            f"Résumé de la rencontre : nous avons parlé de {a}.\n"
            f"Le groupe a choisi {place} pour la suite.\n"
            f"La prochaine date est {date} à {time}. À faire avant : préparer {requirement}."
        )
    elif i == 17:
        body = (
            f"Votre rendez-vous individuel avec {person} est fixé.\n"
            f"Il concerne {a}. Venez le {date} à {time}, {p}.\n"
            f"N'oubliez pas {requirement}."
        )
    elif i == 18:
        body = (
            f"Nous avons trouvé une solution pour {a}.\n"
            f"Vous pouvez passer le {date} à {time} {p}.\n"
            f"{person} vous expliquera la suite; apportez aussi {requirement}."
        )
    else:
        body = (
            f"Dernières informations avant {a}.\n"
            f"Le rendez-vous est confirmé pour le {date} à {time}.\n"
            f"Le lieu est {place}, le contact est {person}, et le document à préparer est {requirement}."
        )
    return f"De : {sender}\n\nObjet : {subject}\n\n{greeting}\n\n{body}\n\n{closing}"

def email_questions(i, title, activity, place, date, time, person, requirement, false_place):
    sender = EMAIL_SENDERS[i]
    subject = f"{EMAIL_SUBJECTS[i]} — {title}"
    return [
        Q(
            "Qui envoie l'e-mail ?",
            sender,
            "La bibliothèque",
            "Un voisin",
            "De : _________.",
            sender.split()[-1],
            f"L'e-mail est envoyé par {sender}.",
            0,
        ),
        Q(
            "Quel est l'objet de l'e-mail ?",
            subject,
            "Facture d'électricité",
            "Invitation au cinéma",
            "Objet : _________.",
            first_word(subject),
            f"L'objet parle de {subject}.",
            0,
        ),
        Q(
            "De quelle activité parle l'e-mail ?",
            activity,
            "Un déménagement",
            "Un match de foot",
            "Thème principal : _________.",
            content_word(activity),
            f"L'e-mail parle de {activity}.",
            0,
        ),
        Q(
            "Quel jour est indiqué ?",
            date,
            "dimanche 1 septembre",
            "samedi 25 décembre",
            f"Date : {date.split()[0]} _________.",
            date.split()[1],
            f"La date indiquée est {date}.",
            0,
        ),
        Q(
            "À quelle heure est le rendez-vous ?",
            time,
            "7 h",
            "22 h",
            "Heure : _________.",
            time,
            f"Le rendez-vous est à {time}.",
            0,
            time_accept(time),
        ),
        Q(
            "Où faut-il aller ?",
            place,
            false_place,
            "Au stade municipal",
            "Lieu : _________.",
            content_word(place),
            f"Le lieu indiqué est : {place}.",
            0,
        ),
        Q(
            "Que faut-il apporter ou préparer ?",
            requirement,
            "un gâteau",
            "une serviette de plage",
            "À préparer : _________.",
            content_word(requirement),
            f"Il faut préparer {requirement}.",
            0,
        ),
    ]


def build_items(config):
    messages = []
    emails = []
    activities = config["activities"]
    places = config["places"]
    persons = config["persons"]
    requirements = config["requirements"]
    false_places = config.get("false_places") or ["la gare centrale"] * 20
    phone_prefix = config.get("phone_prefix", "021 555")
    for i in range(20):
        genre = GENRES[i]
        activity = activities[i]
        place = places[i % len(places)]
        date = config.get("dates", DATES)[i]
        time = config.get("times", TIMES)[i]
        person = persons[i % len(persons)]
        requirement = requirements[i % len(requirements)]
        false_place = false_places[i % len(false_places)]
        phone = f"{phone_prefix} {30 + i:02d} {40 + i:02d}"
        title = config["title"]
        messages.append(
            {
                "text": message_text(i, title, activity, place, date, time, person, requirement, phone),
                "questions": make_questions(genre, activity, place, date, time, person, requirement, false_place),
            }
        )
        emails.append(
            {
                "text": email_text(i, title, activity, place, date, time, person, requirement, phone),
                "questions": email_questions(i, title, activity, place, date, time, person, requirement, false_place),
            }
        )
    return {"messages": messages, "emails": emails, "title": config["title"]}
