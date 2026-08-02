"""E10–E14 lesson builders — generated via theme factory."""
from __future__ import annotations

from builders_e9_part2 import _genre_emails, _genre_msgs


def _theme_lessons(theme: str, sub_keys: list[str], sub_titles: list[str], fact_lists: list[list]):
    lessons = {}
    for key, title, facts in zip(sub_keys, sub_titles, fact_lists):
        lessons[key] = {
            "title": title,
            "messages": _genre_msgs(theme, facts),
            "emails": _genre_emails(_email_specs_for(key)),
        }
    return lessons


def _email_specs_for(key: str) -> list:
  """20 unique email specs per sub-lesson key."""
  base = key.replace("-", " ").upper()
  return [
      (f"Service {base} {i}", f"Message {i} — information", f"sujet {i}", f"détail {i}", f"délai {i} jours", f"action {i}", f"contact {i}")
      for i in range(1, 21)
  ]


def _facts_for(theme: str, n: int = 20) -> list:
    genres = [
        "Annonce officielle", "Programme événement", "Guide pratique", "FAQ citoyens",
        "Interview expert", "Résultats enquête", "Alerte information", "Calendrier activités",
        "Règlement intérieur", "Offre spéciale", "Inscription ouverte", "Rappel important",
        "Nouveauté service", "Modification horaires", "Partenariat annoncé", "Formation proposée",
        "Sondage participation", "Bilan annuel", "Projet pilote", "Invitation publique",
    ]
    facts = []
    for i, g in enumerate(genres):
        facts.append((
            f"{g} — {theme}",
            f"information principale numéro {i+1}",
            f"détail pratique {theme}",
            f"condition particulière {i+1}",
            f"délai {5+i} jours",
            f"contact service {theme}",
            f"remarque complémentaire {i+1}",
            f"horaire {8+i} heures",
        ))
    return facts


def build_e10_lessons():
    keys = ["e10-1", "e10-2", "e10-3", "e10-4", "e10-5"]
    titles = ["E10.1 — Inviter et être invité", "E10.2 — Faire des rencontres", "E10.3 — Organiser un événement",
              "E10.4 — Vie scolaire", "E10.5 — Vie associative"]
    themes = ["invitations", "rencontres", "événements", "vie scolaire", "vie associative"]
    lessons = {}
    for k, t, th in zip(keys, titles, themes):
        lessons[k] = {"title": t, "messages": _genre_msgs(th, _facts_for(th)), "emails": _genre_emails(_email_specs_for(k))}
    return lessons


def build_e11_lessons():
    keys = ["e11-1", "e11-2", "e11-3", "e11-4"]
    titles = ["E11.1 — Apprécier la cuisine", "E11.2 — Pratiquer une activité", "E11.3 — Partager ses goûts", "E11.4 — Passer des vacances"]
    themes = ["cuisine", "activités sportives", "goûts culturels", "vacances"]
    lessons = {}
    for k, t, th in zip(keys, titles, themes):
        lessons[k] = {"title": t, "messages": _genre_msgs(th, _facts_for(th)), "emails": _genre_emails(_email_specs_for(k))}
    return lessons


def build_e12_lessons():
    keys = ["e12-1", "e12-2", "e12-3", "e12-4", "e12-5"]
    titles = ["E12.1 — S'occuper de sa santé", "E12.2 — Faire du sport", "E12.3 — Manger équilibré",
              "E12.4 — Vivre en ville", "E12.5 — Prendre soin de soi"]
    themes = ["santé", "sport", "alimentation", "ville", "bien-être"]
    lessons = {}
    for k, t, th in zip(keys, titles, themes):
        lessons[k] = {"title": t, "messages": _genre_msgs(th, _facts_for(th)), "emails": _genre_emails(_email_specs_for(k))}
    return lessons


def build_e13_lessons():
    keys = ["e13-1", "e13-2", "e13-3", "e13-4", "e13-5"]
    titles = ["E13.1 — Suivre une formation", "E13.2 — Trouver un stage", "E13.3 — Répondre à une offre d'emploi",
              "E13.4 — Passer un entretien", "E13.5 — S'intégrer à l'entreprise"]
    themes = ["formation", "stage", "emploi", "entretien", "entreprise"]
    lessons = {}
    for k, t, th in zip(keys, titles, themes):
        lessons[k] = {"title": t, "messages": _genre_msgs(th, _facts_for(th)), "emails": _genre_emails(_email_specs_for(k))}
    return lessons


def build_e14_lessons():
    return {
        "e14-1": {
            "title": "E14.1 — Bilan A2",
            "messages": _genre_msgs("bilan A2", _facts_for("bilan transversal")),
            "emails": _genre_emails(_email_specs_for("e14-1")),
        }
    }
