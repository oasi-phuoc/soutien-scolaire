#!/usr/bin/env python3
"""Generate e1_data.py from compact text+fact definitions."""
from __future__ import annotations

from pathlib import Path

OUT = Path(__file__).parent / "e1_data.py"


def F(q, answer, w1, w2, fill_q, fill, vf, vfc, fill_a=None, prof=False):
    return {
        "q": q,
        "answer": answer,
        "wrong": [w1, w2],
        "fillQ": fill_q,
        "fill": fill,
        "fillA": fill_a,
        "vfQ": vf,
        "vfC": vfc,
        "prof": prof,
    }


def facts_to_questions(facts):
    from helpers import EMPTY_IMG

    PROFESSION_IMG = {
        "cuisinière": "cuisinier", "cuisinier": "cuisinier",
        "architecte": "architecte", "infirmier": "infirmier", "infirmière": "infirmier",
        "vendeuse": "vendeur", "vendeur": "vendeur", "mécanicien": "mécanicien",
        "coiffeuse": "coiffeuse", "journaliste": "journaliste", "secrétaire": "secrétaire",
        "professeure": "professeur", "professeur": "professeur", "chauffeur": "chauffeur",
        "électricien": "électricien", "boulanger": "boulanger", "serveur": "serveur",
        "serveuse": "serveur", "médecin": "médecin", "pharmacien": "pharmacien",
        "plombier": "plombier", "coiffeur": "coiffeur",
    }
    qs = []
    for f in facts:
        ans, w1, w2 = f["answer"], f["wrong"][0], f["wrong"][1]
        if f.get("prof"):
            img = []
            for t in [ans, w1, w2]:
                k = t.lower().strip()
                img.append(PROFESSION_IMG.get(k, ""))
            if not all(img):
                img = EMPTY_IMG
        else:
            img = EMPTY_IMG
        qs.append({
            "textQ": f["q"],
            "text": [ans, w1, w2],
            "textC": 0,
            "img": img,
            "imgC": 0,
            "fillQ": f["fillQ"],
            "fill": f["fill"],
            "fillA": f.get("fillA"),
            "vfQ": f["vfQ"],
            "vfC": f["vfC"],
        })
    return qs


def msg(text, facts):
    return {"text": text.strip(), "questions": facts_to_questions(facts)}


# ═══════════════════════════════════════════════════════════════════════════════
# E1.1 — Se présenter (20 messages)
# ═══════════════════════════════════════════════════════════════════════════════

E1_1_MSG = [
msg("""Message sur le forum de l'école de langues

Bonjour à tous !
Je m'appelle Amina. J'ai 28 ans. Je suis tunisienne.
J'habite à Lausanne depuis six mois. Je suis mariée.
J'ai une petite fille de trois ans. Je suis cuisinière.
Je travaille dans un restaurant au centre-ville.
Le soir, j'étudie le français le lundi et le jeudi.
J'aime la musique et la natation.
Je cherche des amis pour parler français après les cours.
À bientôt, Amina""", [
    F("Quel âge a Amina ?", "28 ans", "38 ans", "18 ans", "J'ai _________ ans.", "28", "Amina a 28 ans.", 0, ["vingt-huit"]),
    F("Quelle est la profession d'Amina ?", "Cuisinière", "Journaliste", "Fleuriste", "Je suis _________.", "cuisinière", "Amina est journaliste.", 1, ["cuisiniere"], prof=True),
    F("Quand Amina étudie-t-elle le français ?", "Le lundi et le jeudi", "Le mardi", "Le samedi", "Les cours sont le _________ et le jeudi.", "lundi", "Amina étudie le français le soir.", 0),
    F("Est-ce qu'Amina a des enfants ?", "Oui, une fille", "Non", "Oui, deux garçons", "J'ai une petite fille de _________ ans.", "trois", "Amina a deux enfants.", 1, ["3"]),
    F("Qu'est-ce qu'Amina aime ?", "La musique et la natation", "Le cinéma", "Le football", "J'aime la musique et la _________.", "natation", "Amina aime la natation.", 0),
    F("Pourquoi Amina écrit-elle ?", "Pour chercher des amis", "Pour vendre un vélo", "Pour un travail", "Je cherche des _________ pour parler français.", "amis", "Amina cherche un travail.", 1, ["amies", "ami"]),
    F("Depuis combien de temps Amina habite à Lausanne ?", "Six mois", "Six ans", "Deux semaines", "J'habite à Lausanne depuis six _________.", "mois", "Amina habite à Lausanne depuis six ans.", 1),
]),
msg("""Carte postale

Salut Julie !
Ici Marco, de Milan. Je suis en vacances à Montreux.
J'ai 32 ans. Je suis italien. Je parle italien et un peu français.
Je suis architecte. Je travaille dans un bureau à Milan.
J'habite dans un petit appartement avec mon chat.
J'aime la photo et les longues promenades au bord du lac.
Je reviens en Italie vendredi. On se voit bientôt ?
Bises, Marco""", [
    F("D'où vient Marco ?", "De Milan", "De Rome", "De Paris", "Je viens de _________.", "Milan", "Marco vient de Rome.", 1),
    F("Où est Marco en vacances ?", "À Montreux", "À Genève", "À Lyon", "Je suis en vacances à _________.", "Montreux", "Marco est à Montreux.", 0),
    F("Quelle est la profession de Marco ?", "Architecte", "Médecin", "Cuisinier", "Je suis _________.", "architecte", "Marco est médecin.", 1, prof=True),
    F("Avec qui Marco habite-t-il ?", "Avec son chat", "Avec sa femme", "Avec ses parents", "J'habite avec mon _________.", "chat", "Marco habite avec sa femme.", 1),
    F("Quand Marco revient-il en Italie ?", "Vendredi", "Lundi", "Dimanche", "Je reviens en Italie _________.", "vendredi", "Marco revient vendredi.", 0),
    F("Qu'est-ce que Marco aime ?", "La photo et les promenades", "Le football", "La cuisine", "J'aime la photo et les longues _________.", "promenades", "Marco aime le football.", 1),
    F("Quelles langues parle Marco ?", "Italien et un peu français", "Seulement l'italien", "Français et allemand", "Je parle italien et un peu _________.", "français", "Marco parle seulement l'italien.", 1, ["francais"]),
]),
]

print(f"E1.1 partial: {len(E1_1_MSG)} messages defined in gen_e1.py")
print("Run full generator after completing all texts")
