"""E9 scenarios — vie quotidienne A2 (achats, déplacements, logement, admin, actualité)."""
from __future__ import annotations

EMPTY_IMG = ["", "", ""]
PROFESSION_IMG = {
    "vendeur": "vendeur", "vendeuse": "vendeur", "boulanger": "boulanger",
    "pharmacien": "pharmacien", "pharmacienne": "pharmacien", "infirmier": "infirmier",
    "infirmière": "infirmier", "médecin": "médecin", "professeur": "professeur",
    "serveur": "serveur", "serveuse": "serveur", "coiffeur": "coiffeur",
    "coiffeuse": "coiffeuse", "facteur": "facteur", "secrétaire": "secrétaire",
    "chauffeur": "chauffeur", "mécanicien": "mécanicien", "libraire": "libraire",
}


def Q(text_q, ans, w1, w2, fill_q, fill, vf, vfc, fill_a=None, prof=False):
    text = [ans, w1, w2]
    img = EMPTY_IMG
    if prof:
        imgs = [PROFESSION_IMG.get(t.lower().strip(), "") for t in text]
        if all(imgs):
            img = imgs
    return {
        "textQ": text_q, "text": text, "textC": 0, "img": img, "imgC": 0,
        "fillQ": fill_q, "fill": fill, "fillA": fill_a, "vfQ": vf, "vfC": vfc,
    }


def email(sender, subject, body_lines, questions):
    body = "\n\n".join([
        f"De : {sender}",
        f"Objet : {subject}",
        "Bonjour,",
        *body_lines,
        "Cordialement,",
        sender.split("—")[0].strip() if "—" in sender else sender,
    ])
    return {"text": body, "questions": questions}


def build_lessons():
    return {
        "e9-1": {"title": "E9.1 — Faire des achats", "messages": _e9_1_msg(), "emails": _e9_1_email()},
        "e9-2": {"title": "E9.2 — Se déplacer", "messages": _e9_2_msg(), "emails": _e9_2_email()},
        "e9-3": {"title": "E9.3 — Chercher un logement", "messages": _e9_3_msg(), "emails": _e9_3_email()},
        "e9-4": {"title": "E9.4 — Démarches administratives", "messages": _e9_4_msg(), "emails": _e9_4_email()},
        "e9-5": {"title": "E9.5 — S'informer sur l'actualité", "messages": _e9_5_msg(), "emails": _e9_5_email()},
    }


def _e9_1_msg():
    return [
        {"text": """Frip'Art — Brocante de printemps

Le samedi 12 avril, la brocante Frip'Art investit la place du Marché de 8 h à 17 h. Plus de soixante exposants proposent vaisselle vintage, livres rares, vinyles et petits meubles restaurés.
L'entrée est gratuite pour les visiteurs. Les exposants paient quinze euros pour un emplacement de trois mètres sur deux.
Un service de restauration locale propose tartines et boissons chaudes de midi à quinze heures, sous le grand chapiteau blanc à l'est de la place.
Pour vendre vos objets, inscrivez-vous avant le 5 avril sur le site fripart.fr ou à la mairie, bureau culturel, du mardi au vendredi.""",
         "questions": [
             Q("Quel jour a lieu la brocante ?", "Le samedi 12 avril", "Le dimanche 13 avril", "Le vendredi 11 avril", "La brocante a lieu le samedi 12 _________.", "avril", "La brocante est le samedi 12 avril.", 0),
             Q("Combien coûte l'emplacement pour un exposant ?", "Quinze euros", "Trente euros", "C'est gratuit", "Les exposants paient _________ euros.", "quinze", "L'emplacement coûte quinze euros.", 0, ["15"]),
             Q("Que peut-on manger sur place ?", "Des tartines et des boissons chaudes", "Un menu gastronomique", "Rien", "On propose tartines et boissons _________.", "chaudes", "Il y a un service de restauration.", 0),
             Q("Où se trouve le chapiteau ?", "À l'est de la place", "Au nord du parc", "Dans la mairie", "Le chapiteau est à l'______ de la place.", "est", "Le chapiteau est à l'est.", 0),
             Q("Jusqu'à quand faut-il s'inscrire pour vendre ?", "Avant le 5 avril", "Le jour même", "Après la brocante", "Inscrivez-vous avant le 5 _________.", "avril", "Il faut s'inscrire avant le 5 avril.", 0),
             Q("L'entrée est-elle payante ?", "Non, elle est gratuite", "Oui, cinq euros", "Oui, dix euros", "L'entrée est _________ pour les visiteurs.", "gratuite", "L'entrée est gratuite.", 0),
             Q("Combien d'exposants participent ?", "Plus de soixante", "Une dizaine", "Deux cents", "Plus de _________ exposants.", "soixante", "Il y a plus de soixante exposants.", 0, ["60"]),
         ]},
    ]


def _e9_1_email():
    return []


def _e9_2_msg():
    return []


def _e9_2_email():
    return []


def _e9_3_msg():
    return []


def _e9_3_email():
    return []


def _e9_4_msg():
    return []


def _e9_4_email():
    return []


def _e9_5_msg():
    return []


def _e9_5_email():
    return []
