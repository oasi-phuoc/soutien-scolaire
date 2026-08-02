"""Structured CE content builders for Express E11/E12.

The source data stays compact, but the emitted TypeScript contains full texts
and six concrete questions for every CE message and CE e-mail.
"""
from __future__ import annotations

EMPTY_IMG = ["", "", ""]

DATES = [
    "lundi 6 mai",
    "mardi 14 mai",
    "mercredi 22 mai",
    "jeudi 30 mai",
    "vendredi 7 juin",
    "samedi 15 juin",
    "dimanche 23 juin",
    "lundi 1er juillet",
    "mardi 9 juillet",
    "mercredi 17 juillet",
    "jeudi 25 juillet",
    "vendredi 2 août",
    "samedi 10 août",
    "dimanche 18 août",
    "lundi 26 août",
    "mardi 3 septembre",
    "mercredi 11 septembre",
    "jeudi 19 septembre",
    "vendredi 27 septembre",
    "samedi 5 octobre",
]

TIMES = [
    "9 h",
    "10 h 15",
    "11 h",
    "12 h 30",
    "14 h",
    "15 h 15",
    "16 h",
    "17 h 30",
    "18 h",
    "18 h 45",
    "19 h",
    "8 h 30",
    "13 h",
    "14 h 45",
    "16 h 30",
    "17 h",
    "9 h 45",
    "11 h 30",
    "15 h 45",
    "18 h 15",
]

PLACES = [
    "la Maison des Acacias",
    "la salle Jean-Monnet",
    "le centre du Lac",
    "la ferme des Lilas",
    "le foyer Bellevue",
    "la bibliothèque Nord",
    "la terrasse du Marché",
    "le local des Jeunes",
    "la salle des Fêtes",
    "le jardin partagé",
    "le café du Pont",
    "la maison médicale",
    "le parc des Amandiers",
    "la boutique Horizon",
    "le centre scolaire",
    "la place du Village",
    "la halle des Sports",
    "le salon Harmonie",
    "la résidence du Parc",
    "le centre culturel",
]

PEOPLE = [
    "la responsable Nadia",
    "l'animateur Hugo",
    "la conseillère Samira",
    "le bénévole Marco",
    "la formatrice Julie",
    "le responsable Karim",
    "la médiatrice Claire",
    "l'animatrice Zoé",
    "le coordinateur Alex",
    "la spécialiste Lina",
    "le voisin Paul",
    "la docteure Morel",
    "l'entraîneuse Emma",
    "le commerçant Yanis",
    "la professeure Léa",
    "le guide Romain",
    "la coach Ana",
    "la coiffeuse Inès",
    "l'infirmier Malik",
    "la directrice Sonia",
]

CONTACTS = [
    "à l'accueil",
    "par téléphone avant vendredi",
    "sur le site de la commune",
    "par message au groupe",
    "au bureau du centre",
    "avec le formulaire papier",
    "par e-mail avant 18 h",
    "directement sur place",
    "au secrétariat",
    "avec le QR code de l'affiche",
    "au comptoir",
    "avec la carte de membre",
    "auprès de la coach",
    "au magasin partenaire",
    "dans le carnet de classe",
    "au stand d'information",
    "à la réception du club",
    "en appelant le salon",
    "auprès de l'infirmier",
    "dans l'agenda en ligne",
]

PRICES = [
    "gratuit",
    "5 CHF",
    "8 CHF",
    "10 CHF",
    "12 CHF",
    "15 CHF",
    "18 CHF",
    "20 CHF",
    "25 CHF",
    "30 CHF",
    "4 CHF",
    "6 CHF",
    "9 CHF",
    "11 CHF",
    "14 CHF",
    "16 CHF",
    "22 CHF",
    "28 CHF",
    "35 CHF",
    "40 CHF",
]

LIMITS = [
    "8 places",
    "10 places",
    "12 places",
    "14 places",
    "15 places",
    "16 places",
    "18 places",
    "20 places",
    "22 places",
    "24 places",
    "6 personnes",
    "9 personnes",
    "11 personnes",
    "13 personnes",
    "17 personnes",
    "19 personnes",
    "deux groupes",
    "un petit groupe",
    "toute la classe",
    "les vingt premiers inscrits",
]


def q(text_q, correct, wrong1, wrong2, fill_q, fill, vf_q, vf_c=0, fill_a=None):
    item = {
        "textQ": text_q,
        "text": [correct, wrong1, wrong2],
        "textC": 0,
        "img": EMPTY_IMG,
        "imgC": 0,
        "fillQ": fill_q,
        "fill": fill,
        "vfQ": vf_q,
        "vfC": vf_c,
    }
    if fill_a:
        item["fillA"] = fill_a
    return item


def _safe_word(value: str) -> str:
    for raw in value.replace("'", " ").replace("-", " ").split():
        word = raw.strip(".,;:!?()")
        if len(word) > 2 and word.lower() not in {
            "les", "des", "une", "un", "de", "du", "la", "le", "l", "avec", "pour",
            "avant", "après", "dans", "sur", "sans", "chez", "aux", "au",
        }:
            return word
    return value.split()[0].strip(".,;:!?()")


def _time_word(value: str) -> str:
    return value.split()[0]


def _date_word(value: str) -> str:
    return value.split()[0]


def _price_word(value: str) -> str:
    return value.split()[0]


def _cap(value: str) -> str:
    return value[:1].upper() + value[1:]


def _price_sentence(value: str) -> str:
    if value == "gratuit":
        return "La participation est gratuite."
    return f"La participation est de {value}."


def _scene(cfg: dict, idx: int) -> dict:
    return {
        "lesson": cfg["lesson"],
        "theme": cfg["theme"],
        "activity": cfg["activities"][idx],
        "item": cfg["items"][idx],
        "benefit": cfg["benefits"][idx],
        "warning": cfg["warnings"][idx],
        "place": PLACES[idx],
        "date": DATES[idx],
        "time": TIMES[idx],
        "price": PRICES[idx],
        "limit": LIMITS[idx],
        "person": PEOPLE[idx],
        "contact": CONTACTS[idx],
        "wrong_activity": cfg["wrong_activities"][idx % len(cfg["wrong_activities"])],
        "wrong_item": cfg["wrong_items"][idx % len(cfg["wrong_items"])],
        "wrong_place": cfg["wrong_places"][idx % len(cfg["wrong_places"])],
        "wrong_place_2": cfg["wrong_places"][(idx + 1) % len(cfg["wrong_places"])],
        "wrong_benefit": cfg["wrong_benefits"][idx % len(cfg["wrong_benefits"])],
    }


def _questions(s: dict, source: str) -> list[dict]:
    return [
        q(
            f"Quel est le lieu indiqué dans {source} ?",
            s["place"],
            s["wrong_place"],
            s["wrong_place_2"],
            f"Le lieu est {s['place']} : _________.",
            _safe_word(s["place"]),
            f"{_cap(source)} indique {s['place']}.",
        ),
        q(
            "Quand cela a-t-il lieu ?",
            s["date"],
            "la semaine prochaine sans date",
            "un dimanche de novembre",
            f"La date est _________ {s['date'].split(' ', 1)[1]}.",
            _date_word(s["date"]),
            f"L'activité a lieu {s['date']}.",
        ),
        q(
            "À quelle heure faut-il arriver ?",
            s["time"],
            "7 h",
            "21 h 30",
            "Il faut arriver à _________.",
            _time_word(s["time"]),
            f"L'heure indiquée est {s['time']}.",
        ),
        q(
            "Quelle activité est proposée ?",
            s["activity"],
            s["wrong_activity"],
            "une réunion sans thème",
            f"L'activité proposée est : _________.",
            _safe_word(s["activity"]),
            f"Le texte parle de l'activité suivante : {s['activity']}.",
        ),
        q(
            "Que faut-il apporter ou préparer ?",
            s["item"],
            s["wrong_item"],
            "un ordinateur cassé",
            f"Il faut apporter ou préparer _________.",
            _safe_word(s["item"]),
            f"Il faut prévoir {s['item']}.",
        ),
        q(
            "Quelle information pratique est donnée ?",
            s["price"],
            s["limit"],
            "aucun horaire",
            f"Le prix indiqué est _________.",
            _price_word(s["price"]),
            f"Le prix indiqué est {s['price']}.",
        ),
    ]


def _email_questions(s: dict, source: str, sender: str, subject: str) -> list[dict]:
    return [
        q(
            "Quel est l'objet de l'e-mail ?",
            subject,
            "Facture oubliée",
            "Invitation sans date",
            "Objet : _________.",
            _safe_word(subject),
            f"L'objet de l'e-mail est « {subject} ».",
        ),
        q(
            "Qui envoie l'e-mail ?",
            sender,
            "un voisin inconnu",
            "le service des impôts",
            "De : _________.",
            _safe_word(sender),
            f"L'e-mail est envoyé par {sender}.",
        ),
        *_questions(s, source)[1:],
    ]


def _entry(title: str, lines: list[str], questions: list[dict]) -> dict:
    return {"text": title + "\n\n" + "\n".join(lines), "questions": questions}


def _email(sender: str, subject: str, greet: str, lines: list[str], closing: str, signature: str, questions: list[dict]) -> dict:
    body = [
        f"De : {sender}",
        "",
        f"Objet : {subject}",
        "",
        greet,
        "",
        *lines,
        "",
        closing,
        "",
        signature,
    ]
    return {"text": "\n".join(body), "questions": questions}


def _message_patterns(s: dict, idx: int) -> dict:
    patterns = [
        lambda: _entry(
            f"Affiche — {_cap(s['activity'])}",
            [
                f"{_cap(s['place'])} organise {s['activity']} {s['date']} à {s['time']}.",
                f"Activité animée par {s['person']}. {_price_sentence(s['price'])}",
                f"Il reste {s['limit']}. Apportez {s['item']}.",
                f"Objectif : {s['benefit']}. Inscription {s['contact']}.",
            ],
            _questions(s, "l'affiche"),
        ),
        lambda: _entry(
            "SMS — petit rappel",
            [
                f"Salut ! N'oublie pas {s['activity']} {s['date']}.",
                f"Rendez-vous à {s['time']} devant {s['place']}.",
                f"Prends {s['item']}, c'est important.",
                f"{_cap(s['person'])} dit que {s['warning']}. Réponse attendue {s['contact']}.",
            ],
            _questions(s, "le SMS"),
        ),
        lambda: _entry(
            f"Programme — Après-midi {s['theme']}",
            [
                f"Accueil à {s['time']} à {s['place']}.",
                f"Première partie : {s['activity']} avec {s['person']}.",
                f"Pause courte, puis échange sur {s['benefit']}.",
                f"Participation : {s['price']}. Maximum : {s['limit']}. Prévoir {s['item']}.",
            ],
            _questions(s, "le programme"),
        ),
        lambda: _entry(
            "Article local — une initiative du quartier",
            [
                f"{s['date']}, {s['place']} lance {s['activity']}.",
                f"Selon {s['person']}, cette activité aide les habitants à {s['benefit']}.",
                f"Les participants apportent {s['item']} et paient {s['price']}.",
                f"Attention : {s['warning']}. Les inscriptions se font {s['contact']}.",
            ],
            _questions(s, "l'article"),
        ),
        lambda: _entry(
            "Fiche pratique — comment participer",
            [
                f"1. Vérifiez la date : {s['date']}.",
                f"2. Arrivez à {s['time']} à {s['place']}.",
                f"3. Gardez {s['item']} avec vous.",
                f"4. Demandez conseil à {s['person']}.",
                f"5. Budget : {s['price']}. But : {s['benefit']}.",
            ],
            _questions(s, "la fiche pratique"),
        ),
        lambda: _entry(
            f"Règlement — espace {s['theme']}",
            [
                f"Pendant {s['activity']}, chacun respecte le calme de {s['place']}.",
                f"L'entrée se fait {s['date']} à partir de {s['time']}.",
                f"Pour éviter les problèmes, {s['warning']}.",
                f"Chaque participant apporte {s['item']}. Les questions passent {s['contact']}.",
            ],
            _questions(s, "le règlement"),
        ),
        lambda: _entry(
            "Billet de blog — j'ai testé",
            [
                f"Hier, j'ai découvert {s['activity']} à {s['place']}.",
                f"Je suis arrivé à {s['time']} avec {s['item']}.",
                f"{_cap(s['person'])} a donné des explications simples.",
                f"J'ai aimé parce que cela permet de {s['benefit']}. Prix annoncé : {s['price']}.",
            ],
            _questions(s, "le billet de blog"),
        ),
        lambda: _entry(
            "Invitation — viens avec nous",
            [
                f"Nous allons à {s['place']} {s['date']} pour {s['activity']}.",
                f"Le départ est prévu à {s['time']}.",
                f"Si tu viens, prends {s['item']} et confirme {s['contact']}.",
                f"Il y a {s['limit']}, donc il faut répondre vite.",
            ],
            _questions(s, "l'invitation"),
        ),
        lambda: _entry(
            "Mini interview — trois questions",
            [
                f"Question : Pourquoi proposer {s['activity']} ?",
                f"Réponse de {s['person']} : « Pour {s['benefit']}. »",
                f"Question : Que doit préparer le public ? Réponse : « {s['item']}. »",
                f"Question : Où et quand ? Réponse : « {s['place']}, {s['date']} à {s['time']}. »",
            ],
            _questions(s, "l'interview"),
        ),
        lambda: _entry(
            "Alerte — changement d'organisation",
            [
                f"{s['activity'].capitalize()} n'aura pas lieu dans l'ancienne salle.",
                f"Le nouveau lieu est {s['place']}, toujours {s['date']} à {s['time']}.",
                f"Le prix reste {s['price']} et {s['limit']} sont disponibles.",
                f"N'oubliez pas {s['item']}. Raison du changement : {s['warning']}.",
            ],
            _questions(s, "l'alerte"),
        ),
        lambda: _entry(
            "Carnet personnel — ma journée",
            [
                f"Ce matin, j'avais un peu peur avant {s['activity']}.",
                f"À {s['time']}, {s['person']} nous a accueillis à {s['place']}.",
                f"J'avais préparé {s['item']} comme demandé.",
                f"Finalement, j'ai compris que je pouvais {s['benefit']}.",
            ],
            _questions(s, "le carnet"),
        ),
        lambda: _entry(
            "Ticket d'inscription",
            [
                f"Activité : {s['activity']}.",
                f"Lieu : {s['place']}. Date : {s['date']}. Heure : {s['time']}.",
                f"Responsable : {s['person']}. Tarif : {s['price']}.",
                f"À apporter : {s['item']}. Remarque : {s['warning']}.",
            ],
            _questions(s, "le ticket"),
        ),
        lambda: _entry(
            "Formulaire — informations utiles",
            [
                f"Nom de l'activité : {s['activity']}.",
                f"Niveau conseillé : débutant A2, avec aide de {s['person']}.",
                f"Rendez-vous {s['date']} à {s['time']} à {s['place']}.",
                f"Le formulaire demande de confirmer {s['contact']} et de prévoir {s['item']}.",
            ],
            _questions(s, "le formulaire"),
        ),
        lambda: _entry(
            "Forum — question d'un habitant",
            [
                f"Bonjour, je voudrais essayer {s['activity']} {s['date']}.",
                f"Est-ce que {s['place']} est facile à trouver avant {s['time']} ?",
                f"J'ai déjà {s['item']}, mais je ne connais pas {s['person']}.",
                f"On m'a dit que {s['warning']}. Quelqu'un peut confirmer ?",
            ],
            _questions(s, "le message du forum"),
        ),
        lambda: _entry(
            "Comparatif — deux possibilités",
            [
                f"Option A : venir à {s['place']} pour {s['activity']}, {s['date']} à {s['time']}.",
                f"Option B : rester chez soi et lire une fiche, sans aide.",
                f"L'option A coûte {s['price']}, mais elle permet de {s['benefit']}.",
                f"Il faut seulement apporter {s['item']} et réserver {s['contact']}.",
            ],
            _questions(s, "le comparatif"),
        ),
        lambda: _entry(
            "Checklist — avant de partir",
            [
                f"Vérifier la date : {s['date']}.",
                f"Noter l'heure : {s['time']}.",
                f"Mettre {s['item']} dans son sac.",
                f"Relire le conseil de {s['person']} : {s['warning']}.",
                f"Garder {s['price']} si la participation est payante.",
            ],
            _questions(s, "la checklist"),
        ),
        lambda: _entry(
            "Reportage — au cœur de l'activité",
            [
                f"À {s['place']}, les tables sont prêtes pour {s['activity']}.",
                f"Les participants arrivent {s['date']} vers {s['time']} avec {s['item']}.",
                f"{_cap(s['person'])} explique chaque étape lentement.",
                f"À la fin, chacun repart avec une idée simple pour {s['benefit']}.",
            ],
            _questions(s, "le reportage"),
        ),
        lambda: _entry(
            "Panneau d'accueil",
            [
                f"Bienvenue à {s['place']}.",
                f"Aujourd'hui : {s['activity']} à {s['time']}.",
                f"Merci de préparer {s['item']} avant d'entrer.",
                f"Pour la sécurité, {s['warning']}. Contact : {s['person']}.",
            ],
            _questions(s, "le panneau"),
        ),
        lambda: _entry(
            "Petit récit — une erreur utile",
            [
                f"Amel est arrivée trop tôt à {s['place']} pour {s['activity']}.",
                f"Elle avait oublié {s['item']}, mais {s['person']} l'a aidée.",
                f"L'activité commençait seulement à {s['time']}, {s['date']}.",
                f"Depuis, Amel lit toujours la ligne « {s['warning']} » sur les annonces.",
            ],
            _questions(s, "le récit"),
        ),
        lambda: _entry(
            "Avis — après participation",
            [
                f"Note : 5 étoiles pour {s['activity']} à {s['place']}.",
                f"L'accueil de {s['person']} était clair et chaleureux.",
                f"Le prix de {s['price']} est correct pour {s['benefit']}.",
                f"Petit conseil : venez à {s['time']} avec {s['item']}.",
            ],
            _questions(s, "l'avis"),
        ),
    ]
    return patterns[idx]()


def _email_patterns(s: dict, idx: int) -> dict:
    subjects = [
        f"Inscription à {s['activity']}",
        f"Rappel pour {s['date']}",
        f"Question avant {s['activity']}",
        f"Confirmation de votre place",
        f"Conseil pratique : {s['item']}",
        f"Changement de salle",
        f"Merci pour votre participation",
        f"Invitation {s['theme']}",
        f"Liste du matériel",
        f"Places disponibles",
        f"Retour sur l'activité",
        f"Rendez-vous à {s['time']}",
        f"Préparation de groupe",
        f"Demande d'information",
        f"Choix entre deux dates",
        f"Dernier rappel",
        f"Message de la responsable",
        f"Organisation du samedi",
        f"Votre avis nous intéresse",
        f"Prochaine rencontre",
    ]
    senders = [
        s["person"],
        "Accueil du quartier",
        "Service activités",
        "Association Bellevue",
        "Secrétariat du centre",
        "Équipe organisation",
        "Club des habitants",
        "Maison commune",
        "Bureau des inscriptions",
        "Info loisirs",
        "Groupe des bénévoles",
        "Réception",
        "Atelier A2",
        "Coordination locale",
        "Agenda citoyen",
        "Service rappel",
        "Responsable du projet",
        "Équipe du samedi",
        "Questionnaire qualité",
        "Centre culturel",
    ]
    sender = _cap(senders[idx])
    subject = subjects[idx]
    base_q = _email_questions(s, "l'e-mail", sender, subject)
    patterns = [
        lambda: _email(
            sender,
            subject,
            "Bonjour,",
            [
                f"Votre inscription à {s['activity']} est bien notée.",
                f"Le rendez-vous est fixé {s['date']} à {s['time']} à {s['place']}.",
                f"Merci d'apporter {s['item']}. {_price_sentence(s['price'])}",
                f"Cette rencontre aide à {s['benefit']}.",
            ],
            "À bientôt,",
            sender,
            base_q,
        ),
        lambda: _email(
            sender,
            subject,
            "Bonjour à toutes et à tous,",
            [
                f"Petit rappel : {s['activity']} aura lieu {s['date']}.",
                f"Nous vous attendons à {s['time']} devant {s['place']}.",
                f"Comme il y a {s['limit']}, merci de prévenir en cas d'absence.",
                f"N'oubliez pas {s['item']} et lisez bien cette consigne : {s['warning']}.",
            ],
            "Bonne journée,",
            sender,
            base_q,
        ),
        lambda: _email(
            sender,
            subject,
            "Bonjour,",
            [
                f"Je voudrais participer à {s['activity']}, mais j'ai une question.",
                f"Faut-il vraiment apporter {s['item']} ?",
                f"Je peux venir {s['date']} à {s['time']} à {s['place']}.",
                f"Mon objectif est de {s['benefit']}. Merci pour votre réponse.",
            ],
            "Cordialement,",
            "Rami",
            base_q,
        ),
        lambda: _email(
            sender,
            subject,
            "Madame, Monsieur,",
            [
                f"Nous confirmons votre place pour {s['activity']}.",
                f"La séance se passe à {s['place']} {s['date']}.",
                f"Merci d'arriver à {s['time']}. {_price_sentence(s['price'])}",
                f"{_cap(s['person'])} sera sur place pour vous accueillir.",
            ],
            "Avec nos salutations,",
            sender,
            base_q,
        ),
        lambda: _email(
            sender,
            subject,
            "Salut,",
            [
                f"Pour {s['activity']}, pense à mettre {s['item']} dans ton sac.",
                f"On se retrouve {s['date']} à {s['time']} à {s['place']}.",
                f"Si tu veux {s['benefit']}, cette séance est très utile.",
                f"Attention : {s['warning']}.",
            ],
            "À demain,",
            "Noé",
            base_q,
        ),
        lambda: _email(
            sender,
            subject,
            "Bonjour,",
            [
                f"La salle prévue n'est plus disponible pour {s['activity']}.",
                f"Le nouveau lieu est {s['place']}. La date et l'heure ne changent pas : {s['date']} à {s['time']}.",
                f"Le prix reste {s['price']} et {s['limit']} sont gardées.",
                f"Merci de préparer {s['item']}.",
            ],
            "Merci de votre compréhension,",
            sender,
            base_q,
        ),
        lambda: _email(
            sender,
            subject,
            "Bonjour,",
            [
                f"Merci d'être venu à {s['activity']} à {s['place']}.",
                f"Plusieurs participants ont dit que cela aide à {s['benefit']}.",
                f"Pour la prochaine fois, nous garderons {s['date']} à {s['time']}.",
                f"Votre remarque sur {s['item']} a été notée.",
            ],
            "Bien à vous,",
            sender,
            base_q,
        ),
        lambda: _email(
            sender,
            subject,
            "Bonjour les amis,",
            [
                f"Je vous propose de venir avec moi à {s['activity']}.",
                f"C'est {s['date']} à {s['time']} à {s['place']}.",
                f"Il faut réserver {s['contact']} car il y a seulement {s['limit']}.",
                f"Apportez {s['item']} et un peu de bonne humeur.",
            ],
            "À très vite,",
            "Mina",
            base_q,
        ),
        lambda: _email(
            sender,
            subject,
            "Bonjour,",
            [
                f"Voici la liste pour {s['activity']} : {s['item']}, une bouteille d'eau et un stylo.",
                f"Le rendez-vous reste {s['date']} à {s['time']} à {s['place']}.",
                f"Le tarif est {s['price']}.",
                f"Nous parlerons surtout de la manière de {s['benefit']}.",
            ],
            "Merci,",
            sender,
            base_q,
        ),
        lambda: _email(
            sender,
            subject,
            "Bonjour,",
            [
                f"Bonne nouvelle : il reste {s['limit']} pour {s['activity']}.",
                f"La séance aura lieu {s['date']} à {s['time']} à {s['place']}.",
                f"Inscrivez-vous {s['contact']} avant demain soir.",
                f"Prévoyez {s['item']}. Le prix est {s['price']}.",
            ],
            "Cordialement,",
            sender,
            base_q,
        ),
        lambda: _email(
            sender,
            subject,
            "Bonjour,",
            [
                f"Après {s['activity']}, nous avons reçu beaucoup de messages positifs.",
                f"Les participants ont apprécié {s['benefit']}.",
                f"La prochaine date est {s['date']} à {s['time']} à {s['place']}.",
                f"Cette fois, merci d'apporter {s['item']}.",
            ],
            "Au plaisir de vous revoir,",
            sender,
            base_q,
        ),
        lambda: _email(
            sender,
            subject,
            "Bonjour,",
            [
                f"Votre rendez-vous pour {s['activity']} commence à {s['time']}.",
                f"Merci d'être à {s['place']} dix minutes avant.",
                f"La date est {s['date']} et le prix est {s['price']}.",
                f"{_cap(s['person'])} conseille de préparer {s['item']}.",
            ],
            "Meilleures salutations,",
            sender,
            base_q,
        ),
        lambda: _email(
            sender,
            subject,
            "Chers participants,",
            [
                f"Pour préparer {s['activity']}, nous faisons deux petits groupes.",
                f"Le premier groupe arrive à {s['time']} à {s['place']}.",
                f"La séance a lieu {s['date']} avec {s['person']}.",
                f"Merci de vérifier {s['item']} avant de partir.",
            ],
            "À bientôt,",
            sender,
            base_q,
        ),
        lambda: _email(
            sender,
            subject,
            "Bonjour,",
            [
                f"Je cherche des informations sur {s['activity']}.",
                f"J'ai lu que c'était {s['date']} à {s['time']} à {s['place']}.",
                f"Pouvez-vous confirmer le prix de {s['price']} ?",
                f"Je viens surtout pour {s['benefit']}.",
            ],
            "Merci d'avance,",
            "Salma",
            base_q,
        ),
        lambda: _email(
            sender,
            subject,
            "Bonjour,",
            [
                f"Deux dates étaient proposées, mais nous gardons {s['date']}.",
                f"L'horaire choisi est {s['time']} à {s['place']}.",
                f"Ce choix convient mieux à {s['person']} et au groupe.",
                f"Le contenu reste {s['activity']} avec {s['item']}.",
            ],
            "Merci pour vos réponses,",
            sender,
            base_q,
        ),
        lambda: _email(
            sender,
            subject,
            "Bonjour,",
            [
                f"Dernier rappel avant {s['activity']} !",
                f"Rendez-vous {s['date']} à {s['time']} à {s['place']}.",
                f"Sans inscription {s['contact']}, l'entrée n'est pas garantie.",
                f"Apportez {s['item']} et gardez {s['price']} si besoin.",
            ],
            "À tout à l'heure,",
            sender,
            base_q,
        ),
        lambda: _email(
            sender,
            subject,
            "Bonjour,",
            [
                f"{_cap(s['person'])} vous écrit au sujet de {s['activity']}.",
                f"La rencontre est prévue {s['date']} à {s['time']} à {s['place']}.",
                f"Le but est simple : {s['benefit']}.",
                f"Merci de respecter cette règle : {s['warning']}.",
            ],
            "Bien cordialement,",
            sender,
            base_q,
        ),
        lambda: _email(
            sender,
            subject,
            "Bonjour,",
            [
                f"Samedi, l'équipe installe {s['place']} pour {s['activity']}.",
                f"Les participants arrivent à {s['time']} avec {s['item']}.",
                f"La date exacte est {s['date']}.",
                f"Après la séance, un court échange expliquera comment {s['benefit']}.",
            ],
            "Merci de votre aide,",
            sender,
            base_q,
        ),
        lambda: _email(
            sender,
            subject,
            "Bonjour,",
            [
                f"Vous avez participé à {s['activity']} à {s['place']}.",
                f"Pouvez-vous dire si l'horaire de {s['time']} vous convient ?",
                f"La prochaine séance est prévue {s['date']}.",
                f"Votre avis nous aidera à mieux {s['benefit']}.",
            ],
            "Merci pour votre retour,",
            sender,
            base_q,
        ),
        lambda: _email(
            sender,
            subject,
            "Bonjour,",
            [
                f"Nous préparons une nouvelle rencontre autour de {s['activity']}.",
                f"Elle aura lieu {s['date']} à {s['time']} à {s['place']}.",
                f"Le tarif annoncé est {s['price']} et il reste {s['limit']}.",
                f"Cette fois, nous demanderons à chacun d'apporter {s['item']}.",
            ],
            "À bientôt,",
            sender,
            base_q,
        ),
    ]
    return patterns[idx]()


def build_lesson(cfg: dict) -> dict:
    scenes = [_scene(cfg, idx) for idx in range(20)]
    return {
        "messages": [_message_patterns(scene, idx) for idx, scene in enumerate(scenes)],
        "emails": [_email_patterns(scene, idx) for idx, scene in enumerate(scenes)],
    }
