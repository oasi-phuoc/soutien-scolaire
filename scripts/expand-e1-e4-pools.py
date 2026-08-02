#!/usr/bin/env python3
"""Expand E1–E4 communication pools to 20 items (CE, CE email, PO, PE, PE email)."""
from __future__ import annotations

import json
import re
import textwrap
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
COMM = ROOT / "lib/curriculum/content/communication"

PE_MIN = 50
PE_MAX = 120

CLOSING_AB = ("Ravi(e) de faire votre connaissance.", "Moi aussi. À bientôt !")
CLOSING_TU = ("Enchanté(e) de te connaître !", "Moi aussi. À tout à l'heure !")


def ts_str(s: str) -> str:
    return json.dumps(s, ensure_ascii=False)


def emit_q(q: dict, indent: str = "  ") -> str:
    lines = [f"{indent}q({{"]
    lines.append(f'{indent}  id: {ts_str(q["id"])},')
    lines.append(f'{indent}  textQ: {ts_str(q["textQ"])},')
    text = q["text"]
    lines.append(f'{indent}  text: [{", ".join(ts_str(t) for t in text)}],')
    lines.append(f'{indent}  textC: {q["textC"]},')
    img = q.get("img", ["", "", ""])
    lines.append(f'{indent}  img: [{", ".join(ts_str(i) for i in img)}],')
    lines.append(f'{indent}  imgC: {q.get("imgC", 0)},')
    lines.append(f'{indent}  fillQ: {ts_str(q["fillQ"])},')
    lines.append(f'{indent}  fill: {ts_str(q["fill"])},')
    if q.get("fillA"):
        lines.append(f'{indent}  fillA: [{", ".join(ts_str(a) for a in q["fillA"])}],')
    lines.append(f'{indent}  vfQ: {ts_str(q["vfQ"])},')
    lines.append(f'{indent}  vfC: {q["vfC"]},')
    lines.append(f"{indent}}}),")
    return "\n".join(lines)


def emit_pool(slug: str, questions: list[dict]) -> str:
    body = "\n".join(emit_q(q) for q in questions)
    return f'const {slug.upper().replace("-", "_")}_POOL = buildExpressPool({ts_str(slug)}, [\n{body}\n]);'


def emit_reading_exercise(ex_id: str, text_var: str, pool_var: str, instruction: str | None = None) -> str:
    inst = f",\n  instruction: {ts_str(instruction)}" if instruction else ""
    return (
        f"readingPoolExercise({{\n"
        f"  id: {ts_str(ex_id)},\n"
        f"  readingText: {text_var},\n"
        f"  questionPool: {pool_var}{inst}\n"
        f"}})"
    )


def make_q(
    idx: int,
    text_q: str,
    answer: str,
    wrong: tuple[str, str],
    fill_q: str,
    fill: str,
    vf_true: str,
    vf_c: int = 0,
    img: tuple[str, str, str] = ("", "", ""),
    img_c: int = 0,
    fill_a: list[str] | None = None,
) -> dict:
    return {
        "id": f"ce-q{idx}",
        "textQ": text_q,
        "text": [answer, wrong[0], wrong[1]],
        "textC": 0,
        "img": list(img),
        "imgC": img_c,
        "fillQ": fill_q,
        "fill": fill,
        "fillA": fill_a,
        "vfQ": vf_true,
        "vfC": vf_c,
    }


# ── CE message generators (items 2–20) ───────────────────────────────────────

def ce_e1_1_extra() -> list[tuple[str, list[dict]]]:
    profiles = [
        ("Lucas", 19, "brésilien", "Genève", "étudiant", "le foot et la lecture", "un an"),
        ("Nadia", 35, "marocaine", "Fribourg", "infirmière", "la danse et le cinéma", "deux ans"),
        ("Yuki", 27, "japonaise", "Zurich", "graphiste", "la photo et les voyages", "huit mois"),
        ("Pierre", 45, "français", "Neuchâtel", "professeur", "la randonnée et la cuisine", "cinq ans"),
        ("Sara", 22, "espagnole", "Bâle", "serveuse", "la musique et le sport", "trois mois"),
        ("Omar", 31, "algérien", "Lausanne", "mécanicien", "le basketball et les films", "un an"),
        ("Elena", 26, "ukrainienne", "Berne", "coiffeuse", "la natation et la peinture", "six mois"),
        ("Tom", 40, "belge", "Sion", "boulanger", "le vélo et le jardinage", "dix ans"),
        ("Fatou", 33, "sénégalaise", "Lugano", "vendeuse", "la couture et la cuisine", "quatre mois"),
        ("Ivan", 29, "croate", "Vevey", "plombier", "le ski et la pêche", "deux ans"),
        ("Mei", 24, "chinoise", "Montreux", "étudiante", "le piano et les mangas", "un an"),
        ("Hassan", 38, "égyptien", "Yverdon", "chauffeur", "le football et la famille", "trois ans"),
        ("Clara", 21, "portugaise", "Nyon", "babysitter", "les animaux et la plage", "cinq mois"),
        ("Raj", 36, "indien", "Delémont", "informaticien", "le tennis et les jeux", "deux ans"),
        ("Inès", 30, "tunisienne", "Payerne", "pharmacienne", "la lecture et le yoga", "un an"),
        ("Miguel", 42, "mexicain", "Aigle", "cuisinier", "la guitare et le foot", "quatre ans"),
        ("Lina", 18, "libanaise", "Morges", "élève", "le dessin et les amis", "six mois"),
        ("Klaus", 50, "allemand", "Bienne", "architecte", "la photo et la nature", "quinze ans"),
        ("Zoé", 28, "canadienne", "Renens", "journaliste", "le théâtre et les voyages", "neuf mois"),
    ]
    out = []
    for i, (name, age, nat, city, job, hobbies, since) in enumerate(profiles, 2):
        text = textwrap.dedent(f"""\
            Note sur le forum de l'école

            Bonjour !
            Je m'appelle {name}. J'ai {age} ans. Je suis {nat}. J'habite à {city} depuis {since}.
            Je suis {job}. Le soir, j'étudie le français à l'école.
            J'aime {hobbies}. Je cherche des amis pour parler français.
            À bientôt,
            {name}""")
        pool = [
            make_q(1, f"Comment s'appelle la personne ?", name, ("Marie", "Paul"), f"Je m'appelle _________.", name, f"La personne s'appelle {name}."),
            make_q(2, f"Quel âge a {name} ?", f"{age} ans", ("20 ans", "50 ans"), f"J'ai _________ ans.", str(age), f"{name} a {age} ans."),
            make_q(3, f"Où habite {name} ?", f"À {city}", ("À Paris", "À Lyon"), f"J'habite à _________.", city, f"{name} habite à {city}."),
            make_q(4, f"Quelle est la profession de {name} ?", job.capitalize() if job != "étudiant" and job != "élève" else job.capitalize(), ("médecin", "avocat"), f"Je suis _________.", job, f"{name} est {job}.", img=("étudiant", "médecin", "avocat") if job in ("étudiant", "élève") else ("", "", "")),
            make_q(5, f"Pourquoi {name} écrit ce message ?", "Pour chercher des amis", ("Pour vendre un vélo", "Pour trouver un travail"), "Je cherche des _________ pour parler français.", "amis", f"{name} cherche un nouveau travail.", vf_c=1),
            make_q(6, f"Depuis combien de temps {name} habite dans la ville ?", f"Depuis {since}", ("Depuis une semaine", "Depuis vingt ans"), f"J'habite à {city} depuis _________.", since.split()[-1] if since.split()[-1].isdigit() or since.split()[-1] in ("mois", "ans") else since, f"{name} habite à {city} depuis {since}."),
        ]
        out.append((text, pool))
    return out


def ce_e1_2_extra() -> list[tuple[str, list[dict]]]:
    families = [
        ("Karim", 4, "père chauffeur 48 ans, mère vendeuse 44 ans, sœur 15 ans", "Le père est chauffeur", "chauffeur"),
        ("Léa", 3, "parents agriculteurs, frère jumeau 12 ans", "Ils sont trois à la maison", "trois"),
        ("Diego", 5, "père médecin, mère professeur, deux sœurs", "Le père est médecin", "médecin", ("médecin", "boulanger", "facteur")),
        ("Hana", 6, "grands-parents, parents, elle et son frère", "Ils sont six à la maison", "six"),
        ("Noah", 4, "mère infirmière célibataire, lui et sa sœur", "La mère est infirmière", "infirmière", ("infirmière", "vendeuse", "coiffeuse")),
        ("Sofia", 5, "père cuisinier, mère secrétaire, frère et sœur", "Le père est cuisinier", "cuisinier", ("cuisinier", "plombier", "peintre")),
        ("Adam", 3, "ses parents et lui seulement", "Ils sont trois", "trois"),
        ("Mila", 4, "père retraité, mère fleuriste, grand-mère", "La mère est fleuriste", "fleuriste"),
        ("Youssef", 5, "deux frères, deux sœurs, parents", "Il a deux frères", "deux"),
        ("Chloé", 4, "père policier, mère coiffeuse, petit frère 6 ans", "Le père est policier", "policier"),
        ("Emre", 3, "parents et sœur aînée mariée", "Sa sœur est mariée", "mariée"),
        ("Anna", 5, "père ingénieur, mère dentiste, jumeaux", "La mère est dentiste", "dentiste", ("dentiste", "serveuse", "vendeuse")),
        ("Bilal", 4, "famille nombreuse : 4 enfants", "Il y a quatre enfants", "quatre"),
        ("Emma", 3, "mère et père professeurs, elle seule enfant", "Elle est fille unique", "unique"),
        ("Ravi", 5, "oncle, tante, cousins à la maison le week-end", "Des cousins viennent le week-end", "week-end"),
        ("Lucie", 4, "père boulanger, mère à la maison, deux frères", "Le père est boulanger", "boulanger", ("boulanger", "journaliste", "pilote")),
        ("Samir", 6, "parents, trois frères, grand-père", "Le grand-père habite avec eux", "grand-père"),
        ("Julie", 4, "mère divorcée, Julie et son frère", "La mère est divorcée", "divorcée"),
        ("Mateo", 5, "père musicien, mère traductrice, sœur bébé", "Le père est musicien", "musicien"),
    ]
    out = []
    for i, row in enumerate(families, 2):
        name, count, desc, q_ans, fill = row[0], row[1], row[2], row[3], row[4]
        img = row[5] if len(row) > 5 else ("", "", "")
        text = textwrap.dedent(f"""\
            Message à un ami

            Salut !
            Je m'appelle {name}. Je te parle de ma famille. Nous sommes {count} à la maison.
            {desc.capitalize()}.
            Ma famille est très sympa. On mange ensemble le soir.
            Et toi, tu as une grande famille ?
            {name}""")
        pool = [
            make_q(1, f"Comment s'appelle la personne ?", name, ("Paul", "Marie"), f"Je m'appelle _________.", name, f"La personne s'appelle {name}."),
            make_q(2, f"Combien de personnes habitent à la maison ?", str(count), ("deux", "dix"), f"Nous sommes _________ à la maison.", str(count), f"Ils sont {count} à la maison."),
            make_q(3, q_ans + " ?", q_ans.split()[-1].capitalize() if "est" in q_ans else q_ans, ("facteur", "pilote"), f"Ma famille : {fill}.", fill, f"{q_ans}.", img=img),
            make_q(4, "Quand la famille mange-t-elle ensemble ?", "Le soir", ("Le matin", "À midi"), "On mange ensemble le _________.", "soir", "La famille mange ensemble le soir."),
            make_q(5, "De quoi parle le message ?", "De la famille", ("Du travail", "Des vacances"), "Je te parle de ma _________.", "famille", "Le message parle de vacances.", vf_c=1),
            make_q(6, "La famille est-elle sympa ?", "Oui, très sympa", ("Non, pas sympa", "On ne sait pas"), "Ma famille est très _________.", "sympa", "La famille est sympa."),
        ]
        out.append((text, pool))
    return out


def ce_e1_3_extra() -> list[tuple[str, list[dict]]]:
    parties = [
        ("Samir", "samedi 5 juillet", "19 h", "22 h", "anniversaire", "jardin", "gâteau"),
        ("Nina", "vendredi 20 mars", "18 h 30", "23 h", "soirée jeux", "salon", "chips"),
        ("Paul", "dimanche 12 avril", "12 h", "16 h", "barbecue", "terrasse", "salade"),
        ("Aïcha", "samedi 8 mai", "20 h", "minuit", "fête de fin d'année", "appartement", "boissons"),
        ("Marc", "jeudi 1er juin", "17 h", "20 h", "apéro", "balcon", "fromage"),
        ("Léa", "samedi 15 août", "11 h", "15 h", "brunch", "cuisine", "fruits"),
        ("Hugo", "vendredi 25 septembre", "19 h", "23 h 30", "Halloween", "maison", "bonbons"),
        ("Inès", "samedi 10 octobre", "18 h", "22 h", "fête des voisins", "cour", "tarte"),
        ("David", "samedi 21 novembre", "20 h", "1 h", "soirée dansante", "salle", "pizza"),
        ("Camille", "dimanche 6 décembre", "16 h", "19 h", "goûter de Noël", "salon", "chocolat"),
        ("Romain", "samedi 14 février", "19 h 30", "23 h", "Saint-Valentin", "restaurant maison", "dessert"),
        ("Salma", "samedi 3 avril", "18 h", "21 h", "fête de printemps", "parc", "jus"),
        ("Victor", "vendredi 17 mai", "19 h", "22 h", "pot de départ", "bureau transformé", "vin"),
        ("Élise", "samedi 28 juin", "17 h", "20 h", "pique-nique", "lac", "sandwichs"),
        ("Karim", "samedi 9 juillet", "20 h", "23 h", "fête surprise", "jardin", "bougie"),
        ("Julie", "dimanche 20 septembre", "12 h 30", "17 h", "déjeuner familial", "salle à manger", "tarte"),
        ("Antoine", "samedi 31 octobre", "19 h", "23 h", "soirée costumée", "maison", "citrouille"),
        ("Maya", "samedi 12 décembre", "18 h", "22 h", "fête de fin d'année", "loft", "champagne"),
        ("Thomas", "samedi 16 janvier", "19 h", "22 h 30", "réveillon", "appartement", "galette"),
    ]
    out = []
    for host, day, start, end, event, place, bring in parties:
        text = textwrap.dedent(f"""\
            Invitation

            Chers amis,
            {host} organise une {event}. C'est {day}.
            La fête commence à {start}. Elle finit vers {end}.
            C'est dans le {place}. Vous pouvez apporter du {bring}.
            Merci de répondre avant mercredi.
            À bientôt !
            {host}""")
        pool = [
            make_q(1, "Qui organise la fête ?", host, ("Marie", "Paul"), f"{host} organise une _________.", event, f"{host} organise la fête."),
            make_q(2, "Quel jour a lieu la fête ?", day.capitalize(), ("Lundi prochain", "Mercredi"), f"C'est _________.", day.split()[0], f"La fête est {day}."),
            make_q(3, "À quelle heure commence la fête ?", start, ("8 h", "midi"), f"La fête commence à _________.", start.replace(" h", "").replace(" 30", ""), f"La fête commence à {start}."),
            make_q(4, "Où a lieu la fête ?", f"Dans le {place}", ("À l'école", "Au cinéma"), f"C'est dans le _________.", place, f"La fête est dans le {place}."),
            make_q(5, "Que peut-on apporter ?", bring.capitalize(), ("Un livre", "Un vélo"), f"Vous pouvez apporter du _________.", bring, f"On peut apporter du {bring}."),
            make_q(6, "Faut-il répondre à l'invitation ?", "Oui, avant mercredi", ("Non", "On ne sait pas"), "Merci de répondre avant _________.", "mercredi", "Il faut répondre avant mercredi."),
        ]
        out.append((text, pool))
    return out


def ce_e2_1_extra() -> list[tuple[str, list[dict]]]:
    apts = [
        ("Emma", "3e", "lumineux", 2, "balcon", "calme", "parc"),
        ("Lucas", "1er", "petit", 1, "cuisine", "bruyant", "rue"),
        ("Sofia", "5e", "grand", 3, "terrasse", "calme", "lac"),
        ("Noah", "rez-de-chaussée", "sombre", 1, "jardin", "calme", "cour"),
        ("Lina", "4e", "lumineux", 2, "balcon", "animé", "ville"),
        ("Marco", "2e", "moderne", 2, "cave", "calme", "montagne"),
        ("Amina", "6e", "spacieux", 3, "vue", "très calme", "forêt"),
        ("Julien", "7e", "petit", 1, "fenêtre", "bruyant", "gare"),
        ("Fatima", "3e", "chaleureux", 2, "loggia", "calme", "jardin"),
        ("Pierre", "8e", "lumineux", 4, "balcon", "calme", "ciel"),
        ("Nadia", "2e", "neuf", 2, "ascenseur", "calme", "parc"),
        ("Yann", "1er", "ancien", 1, "grenier", "bruyant", "rue"),
        ("Clara", "4e", "grand", 2, "balcon", "calme", "rivière"),
        ("Omar", "5e", "lumineux", 3, "terrasse", "animé", "centre"),
        ("Zoé", "rez-de-chaussée", "spacieux", 2, "jardin", "calme", "fleurs"),
        ("Hugo", "3e", "petit", 1, "fenêtre", "calme", "église"),
        ("Inès", "6e", "lumineux", 2, "balcon", "très calme", "lac"),
        ("David", "2e", "moderne", 3, "cuisine", "calme", "quartier"),
        ("Maya", "7e", "grand", 2, "vue", "calme", "ville"),
    ]
    out = []
    for name, floor, salon, rooms, extra, quartier, view in apts:
        text = textwrap.dedent(f"""\
            Message à une amie

            Salut {name} !
            J'habite dans un nouvel appartement. Il est au {floor} étage.
            Le salon est {salon}. Il y a {rooms} chambres et une cuisine équipée.
            J'ai un {extra} avec vue sur le {view}. Le quartier est {quartier}.
            Tu veux venir visiter samedi ?
            {name}""")
        pool = [
            make_q(1, f"À quel étage est l'appartement ?", f"Au {floor}", ("Au 10e", "Au sous-sol"), f"Il est au _________ étage.", floor.split()[0] if "rez" not in floor else "rez-de-chaussée", f"L'appartement est au {floor} étage."),
            make_q(2, "Comment est le salon ?", salon.capitalize(), ("sombre", "vieux"), f"Le salon est _________.", salon, f"Le salon est {salon}."),
            make_q(3, "Combien de chambres y a-t-il ?", str(rooms), ("cinq", "zéro"), f"Il y a {rooms} _________.", "chambres" if rooms > 1 else "chambre", f"Il y a {rooms} chambres."),
            make_q(4, f"Comment est le quartier ?", quartier.capitalize(), ("dangereux", "vide"), f"Le quartier est _________.", quartier.replace("très ", ""), f"Le quartier est {quartier}."),
            make_q(5, "Que propose l'auteur pour samedi ?", "Une visite", ("Un dîner au restaurant", "Un voyage"), "Tu veux venir _________ samedi ?", "visiter", "L'auteur propose une visite samedi."),
            make_q(6, "Qu'est-ce qu'on voit depuis le logement ?", view.capitalize(), ("la mer", "le désert"), f"Vue sur le _________.", view, f"On voit le {view}."),
        ]
        out.append((text, pool))
    return out


def ce_e2_2_extra() -> list[tuple[str, list[dict]]]:
    issues = [
        ("fuite d'eau", "plombier", "lundi", "devis gratuit", "sous l'évier"),
        ("panne d'électricité", "électricien", "mardi", "devis gratuit", "dans la cuisine"),
        ("chauffage en panne", "technicien", "mercredi", "devis gratuit", "dans le salon"),
        ("machine à laver", "réparateur", "jeudi", "devis gratuit", "dans la salle de bains"),
        ("porte bloquée", "serrurier", "vendredi", "devis gratuit", "à l'entrée"),
        ("fenêtre cassée", "vitrier", "samedi", "devis gratuit", "dans la chambre"),
        ("fuite de gaz", "urgence", "tout de suite", "numéro d'urgence", "dans la cuisine"),
        ("robinet qui goutte", "plombier", "lundi", "devis gratuit", "dans la salle de bains"),
        ("prise électrique", "électricien", "mardi", "devis gratuit", "dans le bureau"),
        ("chaudière", "chauffagiste", "mercredi", "devis gratuit", "dans la cave"),
        ("lave-vaisselle", "réparateur", "jeudi", "devis gratuit", "dans la cuisine"),
        ("toilettes bouchées", "plombier", "vendredi", "devis gratuit", "aux toilettes"),
        ("ampoule grillée", "électricien", "samedi", "devis gratuit", "dans le couloir"),
        ("radiateur froid", "technicien", "lundi", "devis gratuit", "dans la chambre"),
        ("évier bouché", "plombier", "mardi", "devis gratuit", "dans la cuisine"),
        ("disjoncteur", "électricien", "mercredi", "devis gratuit", "dans le tableau"),
        ("frigo en panne", "réparateur", "jeudi", "devis gratuit", "dans la cuisine"),
        ("serrure cassée", "serrurier", "vendredi", "devis gratuit", "à la porte"),
        ("volet bloqué", "réparateur", "samedi", "devis gratuit", "dans le salon"),
    ]
    out = []
    for problem, worker, day, price, place in issues:
        text = textwrap.dedent(f"""\
            Annonce — Dépann'Express

            Vous avez une {problem} ? Appelez Dépann'Express !
            Un {worker} peut venir {day}. Il travaille de 7 h à 20 h.
            Le {worker} regarde la panne {place}. Puis il fait un {price}.
            Vous payez seulement si vous êtes d'accord.""")
        pool = [
            make_q(1, "Quel est le problème ?", problem.capitalize(), ("un chat perdu", "un colis"), f"Vous avez une _________ ?", problem.split()[-1] if "d'" in problem else problem, f"Le problème est une {problem}."),
            make_q(2, "Qui peut venir ?", worker.capitalize(), ("un facteur", "un professeur"), f"Un _________ peut venir.", worker, f"Un {worker} peut venir.", img=(worker, "facteur", "professeur") if worker in ("plombier", "électricien", "mécanicien") else ("", "", "")),
            make_q(3, "Quand peut-on appeler ?", day.capitalize(), ("jamais", "dans un an"), f"Un {worker} peut venir _________.", day, f"Le {worker} vient {day}."),
            make_q(4, "Le devis est-il payant ?", "Non, il est gratuit", ("Oui, 100 francs", "On ne sait pas"), f"Il fait un _________.", price.split()[0], "Le devis est gratuit."),
            make_q(5, "Où est la panne ?", place.capitalize(), ("à l'école", "au parc"), f"La panne est _________.", place.replace("dans ", "").replace("à ", "").replace("l'", ""), f"La panne est {place}."),
            make_q(6, "Faut-il payer avant le travail ?", "Non, seulement si on est d'accord", ("Oui, tout de suite", "On ne sait pas"), "Vous payez seulement si vous êtes _________.", "d'accord", "Il faut payer avant le travail.", vf_c=1),
        ]
        out.append((text, pool))
    return out


def ce_e2_3_extra() -> list[tuple[str, list[dict]]]:
    rules = [
        ("22 heures", "bruit", "vélos", "local vélo", "ascenseur", "animaux"),
        ("21 heures", "musique", "poussettes", "hall", "escalier", "fêtes"),
        ("23 heures", "télévision", "objets", "cave", "parking", "barbecue"),
        ("20 heures", "voix", "colis", "boîtes aux lettres", "jardin", "ballons"),
        ("22 h 30", "bruit", "vélos", "garage", "local poubelles", "fenêtres"),
        ("21 h 30", "fêtes", "trottinettes", "local", "hall", "musique"),
        ("22 heures", "enfants", "jouets", "hall", "ascenseur", "portes"),
        ("20 h 30", "bruit", "vélos", "cave", "escalier", "voitures"),
        ("23 heures", "musique", "objets", "local vélo", "parking", "fêtes"),
        ("22 heures", "télé", "poussettes", "hall", "jardin", "animaux"),
        ("21 heures", "bruit", "colis", "boîtes aux lettres", "ascenseur", "fenêtres"),
        ("22 h 30", "voix", "vélos", "garage", "local poubelles", "barbecue"),
        ("20 heures", "musique", "trottinettes", "local", "hall", "ballons"),
        ("23 heures", "bruit", "objets", "cave", "parking", "portes"),
        ("22 heures", "fêtes", "poussettes", "hall", "escalier", "animaux"),
        ("21 h 30", "télé", "vélos", "local vélo", "jardin", "voitures"),
        ("22 heures", "enfants", "colis", "boîtes aux lettres", "ascenseur", "musique"),
        ("20 h 30", "bruit", "objets", "garage", "local poubelles", "fenêtres"),
        ("23 heures", "musique", "trottinettes", "local", "parking", "barbecue"),
    ]
    out = []
    for i, (hour, noise, bikes, bike_place, zone, extra) in enumerate(rules, 2):
        text = textwrap.dedent(f"""\
            Règlement — Résidence {i}

            Chers habitants,
            Merci de respecter ces règles :
            — Pas de {noise} après {hour}.
            — Rangez les {bikes} dans le {bike_place}.
            — Le {zone} doit rester libre.
            — Les {extra} sont interdits après {hour}.
            Merci de votre compréhension.""")
        pool = [
            make_q(1, "Jusqu'à quelle heure faut-il être calme ?", hour, ("midi", "6 h"), f"Pas de {noise} après _________.", hour.replace(" h 30", "").replace(" h", ""), f"Il faut être calme après {hour}."),
            make_q(2, f"Que faut-il faire avec les {bikes} ?", f"Les ranger dans le {bike_place}", ("Les laisser dans le hall", "Les vendre"), f"Rangez les {bikes} dans le _________.", bike_place.split()[-1], f"Il faut ranger les {bikes}."),
            make_q(3, "Quelle zone doit rester libre ?", zone.capitalize(), ("la cave", "le toit"), f"Le {zone} doit rester _________.", "libre", f"Le {zone} doit rester libre."),
            make_q(4, "Que dit le règlement sur le bruit ?", f"Pas de {noise} après {hour}", ("Du bruit toute la nuit", "Rien"), f"Pas de _________ après {hour}.", noise, f"Pas de {noise} après {hour}."),
            make_q(5, f"Que dit le règlement sur les {extra} ?", f"Interdits après {hour}", ("Toujours autorisés", "On ne sait pas"), f"Les {extra} sont _________ après {hour}.", "interdits", f"Les {extra} sont interdits après {hour}."),
            make_q(6, "À qui s'adresse ce texte ?", "Aux habitants", ("Aux touristes", "Aux enfants"), "Chers _________,", "habitants", "Le texte s'adresse aux habitants."),
        ]
        out.append((text, pool))
    return out


def ce_e3_1_extra() -> list[tuple[str, list[dict]]]:
    schools = [
        ("Marie", "8 h 15", "maths", "salle 12", "cantine", "bibliothèque", "15 h 30"),
        ("Paul", "8 h", "français", "salle 3", "cour", "gymnase", "16 h"),
        ("Léa", "8 h 30", "histoire", "salle 7", "réfectoire", "labo", "15 h"),
        ("Tom", "7 h 45", "sciences", "salle 5", "cantine", "bibliothèque", "16 h 15"),
        ("Sara", "8 h", "anglais", "salle 9", "cour", "salle info", "15 h 45"),
        ("Noah", "8 h 15", "sport", "gymnase", "vestiaire", "bibliothèque", "16 h"),
        ("Emma", "8 h 30", "arts", "salle 2", "cantine", "labo", "15 h 30"),
        ("Lucas", "8 h", "géographie", "salle 11", "cour", "CDI", "16 h"),
        ("Inès", "7 h 50", "musique", "salle 4", "réfectoire", "gymnase", "15 h 15"),
        ("Hugo", "8 h 15", "technologie", "salle 8", "cantine", "atelier", "16 h 30"),
        ("Mila", "8 h", "allemand", "salle 6", "cour", "bibliothèque", "15 h"),
        ("Adam", "8 h 30", "EPS", "stade", "vestiaire", "gymnase", "16 h"),
        ("Zoé", "8 h", "philosophie", "salle 10", "cantine", "CDI", "15 h 45"),
        ("Yann", "7 h 45", "informatique", "salle info", "cour", "labo", "16 h 15"),
        ("Clara", "8 h 15", "biologie", "labo", "réfectoire", "bibliothèque", "15 h 30"),
        ("Omar", "8 h", "économie", "salle 1", "cantine", "CDI", "16 h"),
        ("Nadia", "8 h 30", "latin", "salle 14", "cour", "bibliothèque", "15 h"),
        ("Victor", "8 h", "chimie", "labo", "cantine", "salle info", "16 h 30"),
        ("Julie", "7 h 50", "théâtre", "salle 13", "réfectoire", "gymnase", "15 h 15"),
    ]
    out = []
    for name, start, subject, room, lunch, after, end in schools:
        text = textwrap.dedent(f"""\
            Note de l'école

            Bonjour,
            Les cours commencent à {start}. Le premier cours est {subject} en {room}.
            À midi, les élèves mangent à la {lunch}. L'après-midi, il y a cours.
            La bibliothèque et le {after} sont ouverts après les cours jusqu'à {end}.
            Cordialement,
            L'école""")
        pool = [
            make_q(1, "À quelle heure commencent les cours ?", start, ("10 h", "midi"), f"Les cours commencent à _________.", start.replace(" h 15", "").replace(" h 30", "").replace(" h 45", "").replace(" h", ""), f"Les cours commencent à {start}."),
            make_q(2, "Quel est le premier cours ?", subject.capitalize(), ("danse", "cuisine"), f"Le premier cours est _________.", subject, f"Le premier cours est {subject}."),
            make_q(3, "Où a lieu le premier cours ?", room.capitalize(), ("au parc", "à la plage"), f"En _________.", room, f"Le cours est en {room}."),
            make_q(4, "Où mangent les élèves à midi ?", lunch.capitalize(), ("au cinéma", "à la gare"), f"À la _________.", lunch, f"Les élèves mangent à la {lunch}."),
            make_q(5, "Jusqu'à quelle heure la bibliothèque est-elle ouverte ?", end, ("8 h", "20 h"), f"Ouverts jusqu'à _________.", end.replace(" h 15", "").replace(" h 30", "").replace(" h 45", "").replace(" h", ""), f"Ouvert jusqu'à {end}."),
            make_q(6, "Quel lieu est ouvert après les cours ?", after.capitalize(), ("la piscine", "le zoo"), f"Le _________ est ouvert.", after, f"Le {after} est ouvert."),
        ]
        out.append((text, pool))
    return out


def ce_e3_2_extra() -> list[tuple[str, list[dict]]]:
    routines = [
        ("Camille", "6 h 30", "8 h 30", "17 h", "22 h", "10 h", "courses"),
        ("Marc", "7 h", "9 h", "18 h", "23 h", "9 h", "sport"),
        ("Nina", "6 h", "8 h", "16 h 30", "21 h 30", "11 h", "ménage"),
        ("Paul", "6 h 45", "8 h 15", "17 h 30", "22 h 30", "9 h 30", "lecture"),
        ("Léa", "7 h 15", "9 h 30", "18 h 30", "23 h", "10 h 30", "amis"),
        ("Tom", "6 h 30", "8 h", "17 h", "22 h", "8 h", "jardinage"),
        ("Sara", "7 h", "8 h 45", "16 h 45", "21 h", "10 h", "cinéma"),
        ("Noah", "6 h 15", "8 h 30", "17 h 15", "22 h 15", "9 h 15", "vélo"),
        ("Emma", "7 h 30", "9 h", "18 h", "23 h 30", "11 h 30", "yoga"),
        ("Lucas", "6 h 45", "8 h 15", "17 h 45", "22 h 45", "9 h 45", "musique"),
        ("Inès", "7 h", "8 h 30", "16 h 30", "21 h 30", "10 h", "cuisine"),
        ("Hugo", "6 h 30", "8 h", "17 h", "22 h", "8 h 30", "football"),
        ("Mila", "7 h 15", "9 h 15", "18 h 15", "23 h 15", "10 h 15", "peinture"),
        ("Adam", "6 h", "8 h 45", "16 h 45", "21 h 45", "9 h", "natation"),
        ("Zoé", "7 h 30", "9 h 30", "18 h 30", "22 h 30", "11 h", "danse"),
        ("Yann", "6 h 45", "8 h 15", "17 h 15", "22 h 15", "9 h 30", "photo"),
        ("Clara", "7 h", "8 h 30", "17 h 30", "23 h", "10 h 30", "théâtre"),
        ("Omar", "6 h 30", "8 h", "16 h", "21 h", "8 h", "course"),
        ("Nadia", "7 h 15", "9 h", "18 h", "22 h 45", "11 h 15", "famille"),
    ]
    out = []
    for name, wake, work_start, work_end, sleep, weekend, activity in routines:
        text = textwrap.dedent(f"""\
            Blog — Ma semaine de {name}

            Du lundi au vendredi, je me lève à {wake}. Je commence le travail à {work_start}.
            Je finis à {work_end}. Le soir, je fais du {activity}.
            Je me couche à {sleep}. Le week-end, je me lève à {weekend}.""")
        pool = [
            make_q(1, "À quelle heure se lève-t-on en semaine ?", wake, ("midi", "14 h"), f"Je me lève à _________.", wake.replace(" h 15", "").replace(" h 30", "").replace(" h 45", "").replace(" h", ""), f"Réveil à {wake} en semaine."),
            make_q(2, "À quelle heure commence le travail ?", work_start, ("minuit", "20 h"), f"Je commence le travail à _________.", work_start.replace(" h 15", "").replace(" h 30", "").replace(" h", ""), f"Le travail commence à {work_start}."),
            make_q(3, "À quelle heure finit le travail ?", work_end, ("8 h", "10 h"), f"Je finis à _________.", work_end.replace(" h 15", "").replace(" h 30", "").replace(" h 45", "").replace(" h", ""), f"Le travail finit à {work_end}."),
            make_q(4, "Quelle activité le soir ?", activity.capitalize(), ("ski", "plongée"), f"Je fais du _________.", activity, f"Activité du soir : {activity}."),
            make_q(5, "À quelle heure se couche-t-on ?", sleep, ("6 h", "8 h"), f"Je me couche à _________.", sleep.replace(" h 15", "").replace(" h 30", "").replace(" h 45", "").replace(" h", ""), f"Coucher à {sleep}."),
            make_q(6, "À quelle heure le week-end ?", weekend, ("5 h", "6 h"), f"Le week-end, je me lève à _________.", weekend.replace(" h 15", "").replace(" h 30", "").replace(" h 45", "").replace(" h", ""), f"Week-end : réveil à {weekend}."),
        ]
        out.append((text, pool))
    return out


def ce_e3_3_extra() -> list[tuple[str, list[dict]]]:
    jobs = [
        ("vendeur", "mardi au samedi", "9 h 30", "18 h", "centre commercial", "pharmacie"),
        ("serveur", "mercredi au dimanche", "11 h", "22 h", "restaurant", "cinéma"),
        ("secrétaire", "lundi au vendredi", "8 h", "17 h", "bureau", "banque"),
        ("coiffeur", "mardi au samedi", "9 h", "19 h", "salon", "magasin"),
        ("boulanger", "tous les jours", "4 h", "14 h", "boulangerie", "marché"),
        ("infirmier", "lundi au dimanche", "7 h", "19 h", "hôpital", "pharmacie"),
        ("mécanicien", "lundi au samedi", "8 h", "18 h", "garage", "station"),
        ("vendeuse", "mardi au samedi", "10 h", "19 h", "boutique", "librairie"),
        ("cuisinier", "mercredi au dimanche", "10 h", "23 h", "restaurant", "hôtel"),
        ("professeur", "lundi au vendredi", "8 h", "16 h", "école", "bibliothèque"),
        ("pharmacien", "lundi au samedi", "8 h 30", "18 h 30", "pharmacie", "hôpital"),
        ("journaliste", "lundi au vendredi", "9 h", "18 h", "journal", "radio"),
        ("plombier", "lundi au vendredi", "7 h 30", "17 h 30", "entreprise", "magasin"),
        ("dentiste", "mardi au samedi", "8 h", "18 h", "cabinet", "hôpital"),
        ("électricien", "lundi au vendredi", "7 h", "17 h", "entreprise", "chantier"),
        ("libraire", "mardi au samedi", "9 h 30", "18 h 30", "librairie", "école"),
        ("agent", "lundi au vendredi", "8 h 30", "17 h 30", "agence", "banque"),
        ("caissier", "mardi au dimanche", "9 h", "20 h", "supermarché", "boulangerie"),
        ("graphiste", "lundi au vendredi", "9 h", "18 h", "studio", "agence"),
    ]
    out = []
    for job, days, start, end, place, near in jobs:
        text = textwrap.dedent(f"""\
            Offre d'emploi

            Notre entreprise cherche un {job} ou une {job.replace('eur', 'euse').replace('ien', 'ienne').replace('ier', 'ière') if job.endswith(('eur', 'ien', 'ier')) else job + 'e'}.
            Vous travaillez du {days}. Les horaires sont de {start} à {end}.
            Le lieu de travail est au {place}. Il est à côté de la {near}.
            Envoyez votre CV par e-mail.""")
        pool = [
            make_q(1, "Quel poste est proposé ?", job.capitalize(), ("pilote", "astronaute"), f"On cherche un _________.", job, f"Poste : {job}.", img=(job, "pilote", "astronaute") if job in ("vendeur", "serveur", "boulanger", "cuisinier", "mécanicien", "professeur", "infirmier", "coiffeur", "plombier", "électricien", "pharmacien", "journaliste", "dentiste", "libraire") else ("", "", "")),
            make_q(2, "Quels jours travaille-t-on ?", f"Du {days}", ("Le dimanche seulement", "Jamais"), f"Du _________.", days.split()[0], f"Travail du {days}."),
            make_q(3, "Quels sont les horaires ?", f"De {start} à {end}", ("De minuit à 2 h", "De 20 h à 6 h"), f"De {start} à _________.", end.replace(" h 30", "").replace(" h", ""), f"Horaires : {start} – {end}."),
            make_q(4, "Où est le lieu de travail ?", place.capitalize(), ("à la plage", "dans l'espace"), f"Au _________.", place, f"Lieu : {place}."),
            make_q(5, "Qu'est-ce qui est à côté ?", near.capitalize(), ("un zoo", "un volcan"), f"À côté de la _________.", near, f"À côté de la {near}."),
            make_q(6, "Comment postuler ?", "Par e-mail avec un CV", ("Par téléphone seulement", "En personne sans CV"), "Envoyez votre _________ par e-mail.", "CV", "Il faut envoyer un CV par e-mail."),
        ]
        out.append((text, pool))
    return out


def ce_e4_1_extra() -> list[tuple[str, list[dict]]]:
    promos = [
        ("manteaux", "50 %", "pulls", "30 francs", "écharpes", "10 francs"),
        ("robes", "40 %", "pantalons", "45 francs", "chaussettes", "5 francs"),
        ("vestes", "30 %", "jeans", "60 francs", "gants", "12 francs"),
        ("chemises", "25 %", "shorts", "25 francs", "ceintures", "15 francs"),
        ("bottes", "50 %", "sweats", "35 francs", "bonnets", "8 francs"),
        ("costumes", "20 %", "cravates", "20 francs", "chaussons", "10 francs"),
        ("jupes", "35 %", "blousons", "55 francs", "foulards", "18 francs"),
        ("pyjamas", "30 %", "maillots", "40 francs", "sandales", "22 francs"),
        ("parkas", "45 %", "polos", "28 francs", "baskets", "70 francs"),
        ("cardigans", "40 %", "leggings", "20 francs", "chapeaux", "25 francs"),
        ("manteaux", "50 %", "gilets", "32 francs", "écharpes", "9 francs"),
        ("robes", "30 %", "combinaisons", "65 francs", "gants", "11 francs"),
        ("vestes", "35 %", "pullovers", "38 francs", "chaussettes", "6 francs"),
        ("chemises", "20 %", "bermudas", "30 francs", "ceintures", "14 francs"),
        ("bottes", "40 %", "hoodies", "42 francs", "bonnets", "7 francs"),
        ("costumes", "25 %", "nœuds papillon", "18 francs", "chaussons", "9 francs"),
        ("jupes", "45 %", "doudounes", "80 francs", "foulards", "16 francs"),
        ("pyjamas", "35 %", "bikinis", "35 francs", "sandales", "20 francs"),
        ("parkas", "50 %", "t-shirts", "15 francs", "baskets", "65 francs"),
    ]
    out = []
    for item1, disc1, item2, price2, item3, price3 in promos:
        text = textwrap.dedent(f"""\
            Boutique Mode — Soldes

            Cette semaine, les {item1} sont à {disc1} de réduction.
            Les {item2} coûtent {price2}. Les {item3} coûtent {price3}.
            Les cabines d'essayage sont au premier étage.
            Vous pouvez essayer trois vêtements maximum.""")
        pool = [
            make_q(1, f"Quels articles sont en soldes ?", item1.capitalize(), ("voitures", "maisons"), f"Les _________ sont en soldes.", item1, f"Soldes sur les {item1}."),
            make_q(2, f"Quelle est la réduction sur les {item1} ?", disc1, ("100 %", "0 %"), f"Réduction de _________.", disc1.replace(" %", ""), f"Réduction : {disc1}."),
            make_q(3, f"Combien coûtent les {item2} ?", price2, ("1000 francs", "1 franc"), f"Les {item2} coûtent _________.", price2.split()[0], f"Prix des {item2} : {price2}."),
            make_q(4, f"Combien coûtent les {item3} ?", price3, ("500 francs", "gratuit"), f"Les {item3} coûtent _________.", price3.split()[0], f"Prix des {item3} : {price3}."),
            make_q(5, "Où sont les cabines ?", "Au premier étage", ("Au sous-sol", "Dehors"), "Les cabines sont au _________ étage.", "premier", "Cabines au premier étage."),
            make_q(6, "Combien de vêtements peut-on essayer ?", "Trois maximum", ("Dix", "Aucun"), "Essayer _________ vêtements maximum.", "trois", "Maximum trois vêtements."),
        ]
        out.append((text, pool))
    return out


def ce_e4_2_extra() -> list[tuple[str, list[dict]]]:
    menus = [
        ("mardi au dimanche", "19 francs", "soupe", "poulet", "tarte"),
        ("mercredi au lundi", "22 francs", "salade", "poisson", "glace"),
        ("jeudi au mardi", "18 francs", "quiche", "steak", "mousse"),
        ("vendredi au mercredi", "25 francs", "velouté", "pâtes", "crème"),
        ("samedi au jeudi", "20 francs", "carottes", "riz", "fruit"),
        ("dimanche au vendredi", "21 francs", "tomate", "canard", "brownie"),
        ("lundi au samedi", "17 francs", "légumes", "saumon", "yaourt"),
        ("mardi au dimanche", "23 francs", "potage", "agneau", "sorbet"),
        ("mercredi au lundi", "19 francs", "crudités", "dinde", "flan"),
        ("jeudi au mardi", "24 francs", "oignon", "bœuf", "tiramisu"),
        ("vendredi au mercredi", "20 francs", "épinards", "truite", "compote"),
        ("samedi au jeudi", "18 francs", "champignons", "porc", "cookie"),
        ("dimanche au vendredi", "26 francs", "céleri", "veau", "profiterole"),
        ("lundi au samedi", "19 francs", "brocoli", "cabillaud", "muffin"),
        ("mardi au dimanche", "22 francs", "courgette", "lapin", "macaron"),
        ("mercredi au lundi", "21 francs", "navet", "colin", "clafoutis"),
        ("jeudi au mardi", "20 francs", "poireau", "saucisse", "éclair"),
        ("vendredi au mercredi", "23 francs", "haricots", "omelette", "donut"),
        ("samedi au jeudi", "19 francs", "maïs", "burger", "panna cotta"),
    ]
    out = []
    for days, price, starter, main, dessert in menus:
        text = textwrap.dedent(f"""\
            Restaurant Le Gourmet — Infos

            Ouvert du {days}. Fermé le lundi.
            Menu du jour : {price}. Entrée, plat, dessert.
            Aujourd'hui : {starter}, {main} et {dessert}.
            Plat végétarien disponible. Réservation conseillée.""")
        pool = [
            make_q(1, "Quels jours le restaurant est-il ouvert ?", f"Du {days}", ("Tous les jours", "Jamais"), f"Ouvert du _________.", days.split()[0], f"Ouvert du {days}."),
            make_q(2, "Combien coûte le menu du jour ?", price, ("100 francs", "gratuit"), f"Menu à _________.", price.split()[0], f"Menu : {price}."),
            make_q(3, "Quelle est l'entrée du jour ?", starter.capitalize(), ("pizza", "sushi"), f"Entrée : _________.", starter, f"Entrée : {starter}."),
            make_q(4, "Quel est le plat du jour ?", main.capitalize(), ("glace", "pain"), f"Plat : _________.", main, f"Plat : {main}."),
            make_q(5, "Quel est le dessert ?", dessert.capitalize(), ("salade", "soupe"), f"Dessert : _________.", dessert, f"Dessert : {dessert}."),
            make_q(6, "Y a-t-il un plat végétarien ?", "Oui", ("Non", "On ne sait pas"), "Plat _________ disponible.", "végétarien", "Plat végétarien disponible."),
        ]
        out.append((text, pool))
    return out


def ce_e4_3_extra() -> list[tuple[str, list[dict]]]:
    bakeries = [
        ("6 h 30", "19 h", "1,20", "12", "pommes"),
        ("7 h", "18 h 30", "1,30", "11", "citron"),
        ("6 h", "20 h", "1,10", "13", "fraises"),
        ("6 h 30", "19 h 30", "1,25", "12", "chocolat"),
        ("7 h", "18 h", "1,40", "14", "abricot"),
        ("6 h 15", "19 h", "1,15", "11", "pommes"),
        ("6 h 30", "18 h 30", "1,35", "12", "myrtilles"),
        ("7 h", "19 h", "1,20", "13", "citron"),
        ("6 h", "19 h 30", "1,10", "11", "framboises"),
        ("6 h 30", "18 h", "1,45", "15", "pommes"),
        ("7 h", "20 h", "1,30", "12", "poire"),
        ("6 h 15", "19 h", "1,20", "11", "fraises"),
        ("6 h 30", "18 h 30", "1,25", "13", "chocolat"),
        ("7 h", "19 h", "1,15", "12", "citron"),
        ("6 h", "18 h", "1,40", "14", "pommes"),
        ("6 h 30", "19 h 30", "1,10", "11", "abricot"),
        ("7 h", "20 h", "1,35", "12", "fraises"),
        ("6 h 15", "18 h 30", "1,20", "13", "myrtilles"),
        ("6 h 30", "19 h", "1,30", "12", "chocolat"),
    ]
    out = []
    for open_h, close_h, baguette, formule, tarte in bakeries:
        text = textwrap.dedent(f"""\
            Boulangerie du Coin

            Ouverte de {open_h} à {close_h}. Fermée le dimanche après-midi.
            Baguette : {baguette} francs. Croissants chauds dès 7 h.
            Formule midi : {formule} francs (sandwich, boisson, dessert).
            Tartes aux {tarte} sur commande, deux jours avant.""")
        pool = [
            make_q(1, "À quelle heure ouvre la boulangerie ?", open_h, ("midi", "minuit"), f"Ouverte de _________ à {close_h}.", open_h.replace(" h 15", "").replace(" h 30", "").replace(" h", ""), f"Ouverture : {open_h}."),
            make_q(2, "À quelle heure ferme-t-elle ?", close_h, ("3 h", "5 h"), f"Fermée à _________.", close_h.replace(" h 15", "").replace(" h 30", "").replace(" h", ""), f"Fermeture : {close_h}."),
            make_q(3, "Combien coûte la baguette ?", f"{baguette} francs", ("10 francs", "gratuit"), f"Baguette : _________ francs.", baguette.replace(",", ""), f"Baguette : {baguette} francs."),
            make_q(4, "Combien coûte la formule midi ?", f"{formule} francs", ("50 francs", "1 franc"), f"Formule : _________ francs.", formule, f"Formule : {formule} francs."),
            make_q(5, "Quelles tartes sont disponibles ?", f"Aux {tarte}", ("aux carottes", "au fromage"), f"Tartes aux _________.", tarte, f"Tartes aux {tarte}."),
            make_q(6, "Quand commander une tarte ?", "Deux jours avant", ("Le jour même", "Un mois avant"), "Commander _________ jours avant.", "deux", "Commander deux jours avant."),
        ]
        out.append((text, pool))
    return out


CE_EXTRA = {
    "e1-1": ce_e1_1_extra,
    "e1-2": ce_e1_2_extra,
    "e1-3": ce_e1_3_extra,
    "e2-1": ce_e2_1_extra,
    "e2-2": ce_e2_2_extra,
    "e2-3": ce_e2_3_extra,
    "e3-1": ce_e3_1_extra,
    "e3-2": ce_e3_2_extra,
    "e3-3": ce_e3_3_extra,
    "e4-1": ce_e4_1_extra,
    "e4-2": ce_e4_2_extra,
    "e4-3": ce_e4_3_extra,
}


def parse_ce_section(content: str) -> tuple[str, str, str]:
    """Return (prefix before CE, CE_TEXT var body, CE_POOL block)."""
    m = re.search(
        r"(/\* ── Compréhension écrite.*?\*/\s*\n)(const CE_TEXT = `)(.*?)(`;\s*\nconst CE_POOL = buildExpressPool\([^)]+\, \[\s*)(.*?)(\s*\]\);)",
        content,
        re.DOTALL,
    )
    if not m:
        raise ValueError("Cannot parse CE section")
    prefix = content[: m.start()]
    text_body = m.group(3)
    pool_body = m.group(5)
    suffix_start = m.end()
    return prefix + m.group(1), text_body, pool_body, content[suffix_start:]


def build_ce_array(lesson_slug: str, export_name: str, text1: str, pool1: str, extra_fn, section_title: str) -> str:
    slug_base = lesson_slug
    blocks = [f"const CE_TEXT_1 = `{text1}`;\n\nconst CE_POOL_1 = buildExpressPool({ts_str(f'{slug_base}-1')}, [\n{pool1}\n]);"]
    for i, (text, pool_qs) in enumerate(extra_fn(), 2):
        pool_ts = "\n".join(emit_q(q) for q in pool_qs)
        blocks.append(
            f"const CE_TEXT_{i} = `{text}`;\n\n"
            f"const CE_POOL_{i} = buildExpressPool({ts_str(f'{slug_base}-{i}')}, [\n{pool_ts}\n]);"
        )
    array = ",\n  ".join(
        emit_reading_exercise(f"{slug_base}-{idx}", f"CE_TEXT_{idx}", f"CE_POOL_{idx}")
        for idx in range(1, 21)
    )
    return (
        f"/* ── Compréhension écrite — {section_title} ── */\n\n"
        + "\n\n".join(blocks)
        + f"\n\nexport const {export_name}: CommunicationExercise[] = [\n  {array},\n];"
    )


# PO extra dialogues per lesson (10 each) — abbreviated generator
def po_dialogue(idx: str, title: str, context: str, role_a: str, role_b: str, vous_a: str, vous_b: str, lines: list[tuple[str, str]], formal: bool = False) -> str:
    close_a, close_b = CLOSING_AB if formal else CLOSING_TU
    full_lines = list(lines)
    if len(full_lines) == 8:
        full_lines.append(("A", close_a))
        full_lines.append(("B", close_b))
    body = ",\n".join(
        f'      {{ role: {ts_str(r)}, text: {ts_str(t)} }}' for r, t in full_lines[:10]
    )
    return textwrap.dedent(f"""\
  {{
    id: {ts_str(idx)},
    title: {ts_str(title)},
    context: {ts_str(context)},
    roleA: {{ title: {ts_str(role_a)}, vous: {ts_str(vous_a)} }},
    roleB: {{ title: {ts_str(role_b)}, vous: {ts_str(vous_b)} }},
    lines: [
{body},
    ],
  }}""")


def gen_po_e1_1() -> list[str]:
    scenes = [
        ("Au parc", "Vous rencontrez quelqu'un au parc.", "La promeneuse", "Le promeneur", "la promeneuse", "le promeneur"),
        ("À la piscine", "Premier jour à la piscine municipale.", "Le moniteur", "Le nageur", "le moniteur / la monitrice", "le nageur / la nageuse"),
        ("Chez le médecin", "Première visite chez le médecin.", "La secrétaire", "Le patient", "le secrétaire / la secrétaire", "le patient / la patiente"),
        ("À l'université", "Journée portes ouvertes.", "L'étudiant", "Le visiteur", "l'étudiant / l'étudiante", "le visiteur / la visiteuse"),
        ("Au marché", "Vous parlez avec un vendeur.", "Le vendeur", "Le client", "le vendeur / la vendeuse", "le client / la cliente"),
        ("À la gare", "Vous attendez le train.", "Le voyageur", "La voyageuse", "le voyageur / la voyageuse", "le voyageur / la voyageuse"),
        ("En ligne", "Premier cours en visio.", "Le professeur", "L'élève", "le professeur / la professeure", "l'élève / l'élève"),
        ("Au café", "Vous commandez un café.", "Le serveur", "Le client", "le serveur / la serveuse", "le client / la cliente"),
        ("À l'hôtel", "Vous arrivez à l'hôtel.", "La réceptionniste", "Le client", "la réceptionniste", "le client / la cliente"),
        ("Au musée", "Vous visitez un musée.", "Le guide", "Le visiteur", "le guide / la guide", "le visiteur / la visiteuse"),
    ]
    out = []
    for i, (title, ctx, ra, rb, va, vb) in enumerate(scenes, 11):
        lines = [
            ("A", "Bonjour ! Comment vous appelez-vous ?"),
            ("B", "Bonjour, je m'appelle Karim."),
            ("A", "Enchanté ! Vous êtes de quelle nationalité ?"),
            ("B", "Je suis marocain. Et vous ?"),
            ("A", "Je suis suisse. Vous habitez où ?"),
            ("B", "J'habite à Lausanne, près du lac."),
            ("A", "Vous faites quoi dans la vie ?"),
            ("B", "Je suis étudiant en informatique."),
        ]
        out.append(po_dialogue(f"e1-1-po-{i}", title, ctx, ra, rb, va, vb, lines, formal=True))
    return out


# Load PO/PE extras from compact definitions
PO_EXTRA: dict[str, list[str]] = {}
PE_EXTRA: dict[str, list[str]] = {}


def pe_prompt(idx: str, title: str, situation: str, instruction: str, points: list[str]) -> str:
    pts = ",\n".join(f'      {ts_str(p)}' for p in points)
    return textwrap.dedent(f"""\
  {{
    id: {ts_str(idx)},
    title: {ts_str(title)},
    situation: {ts_str(situation)},
    instruction: {ts_str(instruction)},
    points: [
{pts},
    ],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  }}""")


def gen_pe_prompts(prefix: str, theme: str, titles: list[str]) -> list[str]:
    out = []
    for i, title in enumerate(titles, 11):
        out.append(pe_prompt(
            f"{prefix}-pe-{i}",
            title,
            f"Situation liée au thème « {theme} ».",
            f"Écrivez un texte de {PE_MIN} à {PE_MAX} mots sur le thème : {title.lower()}.",
            ["Votre introduction", "Les détails importants", "Une conclusion ou une question"],
        ))
    return out


def init_pe_po_extras():
    themes = {
        "e1-1": ("se présenter", gen_po_e1_1(), [
            "Présentation sur un blog", "Message à un nouveau collègue", "Texte pour un site de rencontre amicale",
            "Présentation pour un club", "Message sur un réseau social", "Lettre à un correspondant",
            "Présentation pour un groupe Facebook", "Texte pour une application de langue",
            "Message à un nouveau voisin", "Présentation pour un atelier",
        ]),
    }
    # Generate PO/PE for all lessons with generic but themed content
    lesson_themes = {
        "e1-1": "se présenter",
        "e1-2": "la famille",
        "e1-3": "inviter",
        "e2-1": "le logement",
        "e2-2": "un problème domestique",
        "e2-3": "le règlement",
        "e3-1": "l'école",
        "e3-2": "le quotidien",
        "e3-3": "le travail",
        "e4-1": "les vêtements",
        "e4-2": "le restaurant",
        "e4-3": "la boulangerie",
    }
    po_scenes_generic = [
        "À la mairie", "Au téléphone", "Chez le voisin", "À l'accueil", "Dans la rue",
        "Au bureau", "À la réception", "En visio", "Au guichet", "Dans un magasin",
    ]
    for key, theme in lesson_themes.items():
        prefix = key.replace("-", "-").replace("e", "e", 1)
        # map e1-1 -> e1-1
        parts = key.split("-")
        export_prefix = f"e{parts[0][1:]}-{parts[1]}" if len(parts) == 2 else key
        if key == "e1-1":
            PO_EXTRA[key] = gen_po_e1_1()
        else:
            PO_EXTRA[key] = []
            for i, scene in enumerate(po_scenes_generic, 11):
                lines = [
                    ("A", "Bonjour, je peux vous aider ?"),
                    ("B", "Oui, bonjour. J'ai une question."),
                    ("A", "Bien sûr. Dites-moi tout."),
                    ("B", f"C'est au sujet de {theme}."),
                    ("A", "D'accord. Pouvez-vous préciser ?"),
                    ("B", "Oui, je voudrais plus d'informations."),
                    ("A", "Très bien, je note."),
                    ("B", "Merci beaucoup pour votre aide."),
                ]
                PO_EXTRA[key].append(po_dialogue(
                    f"{export_prefix}-po-{i}", scene, f"Situation : {scene.lower()}. Thème : {theme}.",
                    "L'interlocuteur A", "L'interlocuteur B",
                    "l'interlocuteur A", "l'interlocuteur B", lines, formal=True,
                ))
        pe_titles = [f"Texte sur {theme} — variante {i}" for i in range(11, 21)]
        PE_EXTRA[key] = gen_pe_prompts(export_prefix, theme, pe_titles)


init_pe_po_extras()


def append_to_array(inner: str, extras: list[str]) -> str:
    count = len(re.findall(r'\bid:\s*"', inner))
    if count >= 20 or not extras:
        return inner
    trimmed = inner.rstrip()
    if trimmed.endswith(","):
        trimmed = trimmed[:-1]
    return trimmed + ",\n" + ",\n".join(extras[: 20 - count]) + "\n"


def process_cpe_file(path: Path):
    content = path.read_text(encoding="utf-8")
    if "CommunicationExercise[]" in content and content.count("CE_TEXT_20") > 0:
        print(f"already expanded {path.name}")
        return
    m = re.search(r"express-(e\d+-\d+)-cpe", path.name)
    if not m:
        return
    lesson_key = m.group(1)
    if lesson_key not in CE_EXTRA:
        print(f"skip {path.name}")
        return

    export_m = re.search(r"export const (E\d+_\d+_CE)", content)
    if not export_m:
        raise ValueError(f"No CE export in {path.name}")
    export_name = export_m.group(1)

    section_m = re.search(r"/\* ── Compréhension écrite — (.+?) ──", content)
    section_title = section_m.group(1) if section_m else lesson_key

    _, text1, pool1, rest = parse_ce_section(content)

    po_m = re.search(
        r"(/\* ── Production orale.*?\*/\s*(?:const \w+ = \{[^}]*\};\s*\n)*export const \w+_PO: ExpressPoDialogue\[\] = \[)(.*?)(\];)",
        rest,
        re.DOTALL,
    )
    pe_m = re.search(
        r"(/\* ── Production écrite.*?\*/\s*\nconst PE_MIN.*?\nconst PE_MAX.*?\n\nexport const \w+_PE: ExpressPePrompt\[\] = \[)(.*?)(\];)",
        rest,
        re.DOTALL,
    )
    if not pe_m:
        pe_m = re.search(
            r"(/\* ── Production écrite.*?\*/\s*\nexport const \w+_PE: ExpressPePrompt\[\] = \[)(.*?)(\];)",
            rest,
            re.DOTALL,
        )

    ce_block = build_ce_array(lesson_key, export_name, text1, pool1, CE_EXTRA[lesson_key], section_title)

    header = content.split("/* ── Compréhension écrite")[0]

    po_block = ""
    if po_m:
        po_inner = append_to_array(po_m.group(2), PO_EXTRA.get(lesson_key, []))
        po_block = po_m.group(1) + po_inner + po_m.group(3)

    pe_block = ""
    if pe_m:
        pe_inner = append_to_array(pe_m.group(2), PE_EXTRA.get(lesson_key, []))
        pe_block = pe_m.group(1) + pe_inner + pe_m.group(3)

    new_content = header + ce_block + "\n\n" + po_block + "\n\n" + pe_block + "\n"
    path.write_text(new_content, encoding="utf-8")
    print(f"updated {path.name}")


def ce_email_extra(lesson_key: str) -> list[tuple[str, str, list[dict]]]:
    """Return list of (from_line, body, questions) for items 2-20."""
    theme = {
        "e1-1": "présentation",
        "e1-2": "famille",
        "e1-3": "invitation",
        "e2-1": "logement",
        "e2-2": "dépannage",
        "e2-3": "règlement",
        "e3-1": "école",
        "e3-2": "quotidien",
        "e3-3": "emploi",
        "e4-1": "mode",
        "e4-2": "restaurant",
        "e4-3": "boulangerie",
    }[lesson_key]
    out = []
    names = ["Lucas", "Nina", "Paul", "Sara", "Tom", "Emma", "Hugo", "Léa", "Marc", "Julie",
             "Omar", "Clara", "Yann", "Inès", "David", "Maya", "Antoine", "Salma", "Victor"]
    for i, name in enumerate(names, 2):
        body = textwrap.dedent(f"""\
            Bonjour,

            Je m'appelle {name}. Je vous écris au sujet de {theme}.
            J'habite en Suisse depuis {i} ans. Je parle français et une autre langue.
            Merci de lire mon message avec attention.
            À bientôt,
            {name}""")
        from_line = f"De : {name}\nObjet : Message sur {theme}"
        full_text = from_line + "\n\n" + body
        pool = [
            make_q(1, "Qui écrit cet e-mail ?", name, ("Marie", "Paul"), f"Je m'appelle _________.", name, f"{name} écrit l'e-mail."),
            make_q(2, "De quoi parle l'e-mail ?", theme.capitalize(), ("vacances", "sport"), f"Au sujet de _________.", theme, f"L'e-mail parle de {theme}."),
            make_q(3, "Où habite l'auteur ?", "En Suisse", ("En France", "En Italie"), "J'habite en _________.", "Suisse", "L'auteur habite en Suisse."),
            make_q(4, "Combien de langues sont mentionnées ?", "Deux", ("Cinq", "Une"), "Je parle français et une autre _________.", "langue", "Deux langues sont mentionnées."),
            make_q(5, "L'e-mail est-il formel ?", "Oui, assez formel", ("Non, très familier", "En colère"), "Merci de lire mon message avec _________.", "attention", "Le ton est formel."),
            make_q(6, "Que dit l'auteur à la fin ?", "À bientôt", ("Au revoir pour toujours", "Rien"), "_________,", "À bientôt", "L'auteur dit à bientôt."),
        ]
        out.append((full_text, full_text, pool))
    return out


def pe_email_prompt(idx: str, title: str, from_who: str, subject: str, body: str, instruction: str, points: list[str]) -> str:
    pts = ",\n".join(f"      {ts_str(p)}" for p in points)
    body_escaped = body.replace("\\", "\\\\")
    return textwrap.dedent(f"""\
  {{
    id: {ts_str(idx)},
    title: {ts_str(title)},
    situation: {ts_str(f"Vous recevez un e-mail de {from_who}.")},
    sourceMessage: {{
      from: {ts_str(from_who)},
      subject: {ts_str(subject)},
      body: {ts_str(body)},
    }},
    instruction: {ts_str(instruction)},
    points: [
{pts},
    ],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  }}""")


def process_email_file(path: Path):
    content = path.read_text(encoding="utf-8")
    if "CommunicationExercise[]" in content and "CE_EMAIL_TEXT_20" in content:
        print(f"already expanded {path.name}")
        return

    lesson_re = re.compile(
        r"const (E\d+_\d+_CE_EMAIL)_TEXT = `(.*?)`;\s*\n"
        r"const \1_POOL = buildExpressPool\(([^)]+), \[(.*?)\]\);\s*\n"
        r"export const \1: CommunicationExercise = readingPoolExercise\(\{[^}]+readingText: \1_TEXT,\s*questionPool: \1_POOL,?\s*(?:instruction: [^,]+,?\s*)?\}\);",
        re.DOTALL,
    )

    def repl(m: re.Match) -> str:
        export_ce = m.group(1)
        text1 = m.group(2)
        pool_slug = m.group(3).strip().strip('"')
        pool1 = m.group(4)
        lesson_num = pool_slug.replace("-ce-email", "").replace('"', "")
        if not lesson_num.startswith("e"):
            lesson_num = re.search(r"(e\d+-\d+)", pool_slug)
            lesson_num = lesson_num.group(1) if lesson_num else "e1-1"

        blocks = [
            f"const {export_ce}_TEXT_1 = `{text1}`;\n\n"
            f"const {export_ce}_POOL_1 = buildExpressPool({ts_str(lesson_num + '-ce-email-1')}, [\n{pool1}\n]);"
        ]
        for i, (full_text, _, pool_qs) in enumerate(ce_email_extra(lesson_num), 2):
            pool_ts = "\n".join(emit_q(q) for q in pool_qs)
            blocks.append(
                f"const {export_ce}_TEXT_{i} = `{full_text}`;\n\n"
                f"const {export_ce}_POOL_{i} = buildExpressPool({ts_str(lesson_num + f'-ce-email-{i}')}, [\n{pool_ts}\n]);"
            )
        ce_array = ",\n  ".join(
            emit_reading_exercise(
                f"{lesson_num}-ce-email-{idx}",
                f"{export_ce}_TEXT_{idx}",
                f"{export_ce}_POOL_{idx}",
                "Lisez l'e-mail et répondez aux questions.",
            )
            for idx in range(1, 21)
        )
        return "\n\n".join(blocks) + f"\n\nexport const {export_ce}: CommunicationExercise[] = [\n  {ce_array},\n];"

    content = lesson_re.sub(repl, content)

    # Expand PE_EMAIL arrays
    for export_pe in re.findall(r"export const (E\d+_\d+_PE_EMAIL): ExpressPePrompt\[\] = \[", content):
        lesson_num = export_pe.lower().replace("_pee", "").replace("_pe_email", "").replace("e", "e", 1)
        # E1_1_PE_EMAIL -> e1-1
        parts = export_pe.split("_")
        lesson_num = f"e{parts[0][1:]}-{parts[1]}"

        pe_m = re.search(rf"(export const {export_pe}: ExpressPePrompt\[\] = \[)(.*?)(\];)", content, re.DOTALL)
        if not pe_m:
            continue
        extras = []
        for i in range(11, 21):
            extras.append(pe_email_prompt(
                f"{lesson_num}-pee-{i}",
                f"Répondre à un e-mail — variante {i}",
                f"Contact {i}",
                f"Question sur {lesson_num}",
                f"Bonjour,\nJ'ai une question pour vous. Pouvez-vous me répondre ?\nMerci,\nContact {i}",
                "Répondez à l'e-mail : remerciez, donnez les informations demandées et posez une question.",
                ["Un remerciement", "Votre réponse", "Une question"],
            ))
        pe_inner = append_to_array(pe_m.group(2), extras)
        new_pe = pe_m.group(1) + pe_inner + pe_m.group(3)
        content = content[: pe_m.start()] + new_pe + content[pe_m.end() :]

    path.write_text(content, encoding="utf-8")
    print(f"updated {path.name}")


def wire_lesson_file(path: Path):
    content = path.read_text(encoding="utf-8")
    if "ceExercises:" in content:
        return
    content = content.replace("ceExercise:", "ceExercises:")
    content = content.replace("ceEmailExercise:", "ceEmailExercises:")
    path.write_text(content, encoding="utf-8")
    print(f"wired {path.name}")


def main():
    init_pe_po_extras()
    for pattern in ["express-e1-*-cpe.ts", "express-e2-*-cpe.ts", "express-e3-*-cpe.ts", "express-e4-*-cpe.ts"]:
        for path in sorted(COMM.glob(pattern)):
            process_cpe_file(path)
    for name in ["express-e1-email.ts", "express-e2-email.ts", "express-e3-email.ts", "express-e4-email.ts"]:
        p = COMM / name
        if p.exists():
            process_email_file(p)
    for name in [
        "express-e1.ts", "express-e1-family.ts", "express-e1-3.ts",
        "express-e2-1.ts", "express-e2-2.ts", "express-e2-3.ts",
        "express-e3-1.ts", "express-e3-2.ts", "express-e3-3.ts",
        "express-e4-1.ts", "express-e4-2.ts", "express-e4-3.ts",
    ]:
        p = COMM / name
        if p.exists():
            wire_lesson_file(p)


if __name__ == "__main__":
    main()
