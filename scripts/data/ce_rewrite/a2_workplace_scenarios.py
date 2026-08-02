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
            "Activité : _________.",
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


def message_text(i, title, activity, place, date, time, person, requirement, phone):
    genre = GENRES[i]
    if i == 0:
        return (
            f"Affiche — {title}\n\n"
            f"Activité : {activity}.\n"
            f"Réunion d'information le {date} à {time}.\n"
            f"Lieu : {place}. Entrée gratuite.\n"
            f"À préparer : {requirement}.\n"
            f"Contact : {person}, {phone}."
        )
    if i == 1:
        return (
            f"SMS — {person}\n\n"
            f"Bonjour, petit rappel : activité prévue le {date} : {activity}.\n"
            f"Rendez-vous à {time}. Lieu : {place}.\n"
            f"Merci de préparer {requirement}.\n"
            f"Répondez OUI si vous venez."
        )
    if i == 2:
        return (
            f"Note interne — {title}\n\n"
            f"Pour l'équipe d'accueil : une personne vient pour {activity}.\n"
            f"Elle arrive le {date} à {time}.\n"
            f"Lieu à indiquer : {place}. Merci d'appeler {person}.\n"
            f"Le dossier doit contenir {requirement}."
        )
    if i == 3:
        return (
            f"Page web — {title}\n\n"
            f"Nouvelle page ouverte : {activity}.\n"
            f"Les informations pratiques sont simples : {date}, {time}. Lieu : {place}.\n"
            f"Avant de venir, préparez {requirement}.\n"
            f"Besoin d'aide ? Écrivez à {person} ou appelez le {phone}."
        )
    if i == 4:
        return (
            f"Programme — {title}\n\n"
            f"{time} : accueil des participants à {place}.\n"
            f"{time} : présentation de {activity}.\n"
            f"Fin prévue une heure plus tard.\n"
            f"Date : {date}. Responsable : {person}.\n"
            f"Matériel demandé : {requirement}."
        )
    if i == 5:
        return (
            f"Planning — {title}\n\n"
            f"Semaine du {date}.\n"
            f"{time} | {activity} | salle ou lieu : {place}.\n"
            f"{person} vérifie la présence des participants.\n"
            f"Chaque personne apporte {requirement}."
        )
    if i == 6:
        return (
            f"Règlement — {title}\n\n"
            f"Pour {activity}, soyez à l'heure : arrivée à {time} le {date}.\n"
            f"L'accueil se fait ici : {place}.\n"
            f"Il est interdit de manger dans la salle.\n"
            f"Le document obligatoire est {requirement}.\n"
            f"En cas de problème, demandez {person}."
        )
    if i == 7:
        return (
            f"Ticket — {title}\n\n"
            f"Numéro : A2-{i + 11}.\n"
            f"Service : {activity}.\n"
            f"Date et heure : {date}, {time}.\n"
            f"Guichet : {place}.\n"
            f"Agent : {person}.\n"
            f"À montrer : {requirement}."
        )
    if i == 8:
        return (
            f"Article local — {title}\n\n"
            f"La maison de quartier annonce {activity}.\n"
            f"La rencontre aura lieu le {date} à {time}.\n"
            f"Lieu : {place}.\n"
            f"{person} explique que les places sont limitées.\n"
            f"Les participants doivent apporter {requirement}."
        )
    if i == 9:
        return (
            f"Fil de discussion — {title}\n\n"
            f"Mina : Tu vas à {activity} ?\n"
            f"Ali : Oui, c'est le {date} à {time}.\n"
            f"Mina : Où exactement ?\n"
            f"Ali : Lieu : {place}. {person} nous attend.\n"
            f"Mina : D'accord, je prépare {requirement}."
        )
    if i == 10:
        return (
            f"Fiche pratique — {title}\n\n"
            f"Objectif : comprendre {activity}.\n"
            f"Quand : {date}, à {time}.\n"
            f"Où : {place}.\n"
            f"Qui contacter : {person}.\n"
            f"À ne pas oublier : {requirement}."
        )
    if i == 11:
        return (
            f"Avis sur la porte — {title}\n\n"
            f"Attention : changement de lieu le {date}.\n"
            f"Nouveau lieu : {place}.\n"
            f"Les personnes inscrites à {activity} sont attendues à {time}.\n"
            f"Merci de préparer {requirement} avant l'arrivée.\n"
            f"Pour entrer, sonnez chez {person}."
        )
    if i == 12:
        return (
            f"Invitation — {title}\n\n"
            f"Vous êtes invité(e) à une rencontre sur {activity}.\n"
            f"Elle aura lieu le {date} à {time}.\n"
            f"Lieu : {place}.\n"
            f"{person} présentera les étapes et répondra aux questions.\n"
            f"Merci d'apporter {requirement}."
        )
    if i == 13:
        return (
            f"Confirmation — {title}\n\n"
            f"Votre place est confirmée pour {activity}.\n"
            f"Rendez-vous le {date} à {time}.\n"
            f"Lieu : {place}.\n"
            f"{person} vous accueillera à l'entrée.\n"
            f"Le jour même, montrez {requirement}."
        )
    if i == 14:
        return (
            f"Formulaire — {title}\n\n"
            f"Nom de la démarche : {activity}.\n"
            f"Date choisie : {date}.\n"
            f"Heure choisie : {time}.\n"
            f"Lieu choisi : {place}.\n"
            f"Référent : {person}.\n"
            f"Pièce à joindre : {requirement}."
        )
    if i == 15:
        return (
            f"Petite annonce — {title}\n\n"
            f"Nous cherchons des personnes intéressées par {activity}.\n"
            f"Présentation le {date} à {time}.\n"
            f"Lieu : {place}.\n"
            f"Aucun frais à payer sur place.\n"
            f"Apportez seulement {requirement}.\n"
            f"Contact rapide : {person}."
        )
    if i == 16:
        return (
            f"Compte rendu — {title}\n\n"
            f"Réunion du matin : {person} a présenté {activity}.\n"
            f"La prochaine étape est fixée au {date} à {time}.\n"
            f"Le groupe se retrouve au lieu indiqué : {place}.\n"
            f"Chaque participant prépare {requirement}."
        )
    if i == 17:
        return (
            f"FAQ — {title}\n\n"
            f"Question : Quand commence {activity} ?\n"
            f"Réponse : le {date} à {time}.\n"
            f"Question : Où aller ?\n"
            f"Réponse : {place}.\n"
            f"Question : Qui peut aider ?\n"
            f"Réponse : {person}. Il faut préparer {requirement}."
        )
    if i == 18:
        return (
            f"Plan d'accès — {title}\n\n"
            f"Pour {activity}, entrez par la porte bleue de {place}.\n"
            f"Prenez l'escalier à gauche et attendez {person}.\n"
            f"Le rendez-vous est le {date} à {time}.\n"
            f"Gardez {requirement} dans votre sac."
        )
    return (
        f"Message vocal transcrit — {title}\n\n"
        f"Bonjour, c'est {person}.\n"
        f"Je confirme {activity} le {date} à {time}.\n"
        f"Le lieu est : {place}.\n"
        f"N'oubliez pas {requirement}.\n"
        f"Vous pouvez rappeler au {phone}."
    )


def email_text(i, title, activity, place, date, time, person, requirement, phone):
    sender = EMAIL_SENDERS[i]
    subject = f"{EMAIL_SUBJECTS[i]} — {title}"
    greeting = "Bonjour,"
    closing = f"Merci,\n{sender}"
    if i == 0:
        body = (
            f"Votre rendez-vous est confirmé.\n"
            f"Activité : {activity}.\n"
            f"Nous vous attendons le {date} à {time}.\n"
            f"Lieu : {place}.\n"
            f"{person} vous recevra à l'accueil.\n"
            f"Merci d'apporter {requirement}."
        )
    elif i == 1:
        body = (
            f"Pour préparer cette activité ({activity}), merci d'apporter :\n"
            f"- {requirement}\n"
            f"- un stylo\n"
            f"La rencontre aura lieu le {date} à {time}.\n"
            f"Lieu : {place}.\n"
            f"Votre contact est {person}."
        )
    elif i == 2:
        body = (
            f"Attention, l'horaire de {activity} change.\n"
            f"Le nouveau rendez-vous est le {date} à {time}.\n"
            f"Le lieu ne change pas : {place}.\n"
            f"En cas de question, appelez {person} au {phone}."
        )
    elif i == 3:
        body = (
            f"Nous avons bien reçu votre demande pour {activity}.\n"
            f"Vous pouvez venir le {date}.\n"
            f"L'accueil ouvre à {time}. Lieu : {place}.\n"
            f"Pensez à préparer {requirement}."
        )
    elif i == 4:
        body = (
            f"Voici le programme de la journée :\n"
            f"{time} : accueil. Lieu : {place}\n"
            f"{time} : présentation de {activity}\n"
            f"{person} animera la rencontre.\n"
            f"À apporter : {requirement}."
        )
    elif i == 5:
        body = (
            f"Petit rappel avant votre visite : activité prévue le {date} ({activity}).\n"
            f"Merci d'arriver à {time}. Lieu : {place}.\n"
            f"Le dossier doit contenir {requirement}.\n"
            f"{person} vérifiera les documents."
        )
    elif i == 6:
        body = (
            f"Vous êtes invité(e) à une réunion sur {activity}.\n"
            f"La réunion aura lieu le {date} à {time}.\n"
            f"Lieu : {place}.\n"
            f"Merci de répondre avant vendredi.\n"
            f"Contact : {person}."
        )
    elif i == 7:
        body = (
            f"Votre dossier pour {activity} est complet.\n"
            f"Prochaine étape : venir le {date} à {time}.\n"
            f"L'adresse est : {place}.\n"
            f"Gardez {requirement} avec vous."
        )
    elif i == 8:
        body = (
            f"Il manque encore {requirement} dans votre dossier.\n"
            f"Vous pouvez le déposer le {date}.\n"
            f"Le bureau est ouvert à partir de {time}. Lieu : {place}.\n"
            f"Demandez {person} à l'accueil."
        )
    elif i == 9:
        body = (
            f"Le rendez-vous pour {activity} est reporté.\n"
            f"Nous proposons le {date} à {time}.\n"
            f"Le lieu est toujours : {place}.\n"
            f"Merci de confirmer à {person}."
        )
    elif i == 10:
        body = (
            f"Pour {activity}, deux choix étaient possibles.\n"
            f"Vous avez choisi le {date} à {time}.\n"
            f"Lieu de la rencontre : {place}.\n"
            f"Apportez {requirement}."
        )
    elif i == 11:
        body = (
            f"Suite à notre appel, je confirme les informations.\n"
            f"{activity} aura lieu le {date} à {time}.\n"
            f"Le lieu du rendez-vous est : {place}.\n"
            f"{person} vous attendra avec la liste des participants."
        )
    elif i == 12:
        body = (
            f"Pour votre premier jour lié à {activity}, arrivez à {time}.\n"
            f"La date est le {date}.\n"
            f"L'accueil se trouve ici : {place}.\n"
            f"Merci d'apporter {requirement}."
        )
    elif i == 13:
        body = (
            f"Merci pour votre réponse positive.\n"
            f"Votre place pour {activity} est gardée.\n"
            f"Rendez-vous le {date} à {time}.\n"
            f"Lieu : {place}.\n"
            f"{person} vous donnera les consignes."
        )
    elif i == 14:
        body = (
            f"Voici le contact à noter pour {activity} : {person}.\n"
            f"Vous pouvez appeler le {phone} seulement le matin.\n"
            f"La prochaine rencontre est le {date} à {time}.\n"
            f"Lieu : {place}."
        )
    elif i == 15:
        body = (
            f"Message pour tout le groupe : {activity} commence bientôt.\n"
            f"Merci d'être présent(e) le {date} à {time}.\n"
            f"Lieu : {place}.\n"
            f"Chaque personne prépare {requirement}.\n"
            f"{person} fera l'appel."
        )
    elif i == 16:
        body = (
            f"Résumé de la rencontre : nous avons parlé de {activity}.\n"
            f"Le groupe a choisi ce lieu pour la suite : {place}.\n"
            f"La prochaine date est le {date} à {time}.\n"
            f"À faire avant : préparer {requirement}."
        )
    elif i == 17:
        body = (
            f"Votre rendez-vous individuel avec {person} est fixé.\n"
            f"Il concerne {activity}.\n"
            f"Venez le {date} à {time}. Lieu : {place}.\n"
            f"N'oubliez pas {requirement}."
        )
    elif i == 18:
        body = (
            f"Nous avons trouvé une solution pour {activity}.\n"
            f"Vous pouvez passer le {date} à {time}.\n"
            f"Lieu : {place}.\n"
            f"{person} vous expliquera la suite.\n"
            f"Apportez aussi {requirement}."
        )
    else:
        body = (
            f"Dernières informations avant {activity} :\n"
            f"date : {date}\n"
            f"heure : {time}\n"
            f"lieu : {place}\n"
            f"contact : {person}\n"
            f"à préparer : {requirement}"
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
            "Activité : _________.",
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
