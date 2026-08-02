#!/usr/bin/env python3
"""
Generate scenarios_e9.py … scenarios_e14.py with unique CE content.
Each scenario = distinct genre with coherent questions (6–8).
"""
from __future__ import annotations

import textwrap
from pathlib import Path

OUT = Path(__file__).parent

HEADER = '''"""E{mod} scenarios — auto-generated, unique genres per item."""
from __future__ import annotations

EMPTY_IMG = ["", "", ""]
PROFESSION_IMG = {{
    "vendeur": "vendeur", "vendeuse": "vendeur", "boulanger": "boulanger",
    "pharmacien": "pharmacien", "pharmacienne": "pharmacien", "infirmier": "infirmier",
    "infirmière": "infirmier", "médecin": "médecin", "professeur": "professeur",
    "serveur": "serveur", "serveuse": "serveur", "coiffeur": "coiffeur",
    "coiffeuse": "coiffeuse", "facteur": "facteur", "secrétaire": "secrétaire",
    "chauffeur": "chauffeur", "mécanicien": "mécanicien", "libraire": "libraire",
    "conducteur": "chauffeur", "agent": "vendeur",
}}

TRANSPORT_IMG = {{"train": "train", "avion": "avion", "voiture": "voiture", "vélo": "vélo", "bus": "bus", "métro": "métro"}}


def Q(text_q, ans, w1, w2, fill_q, fill, vf, vfc, fill_a=None, prof=False, transport=False):
    text = [ans, w1, w2]
    img = EMPTY_IMG
    if prof:
        imgs = [PROFESSION_IMG.get(t.lower().strip(), "") for t in text]
        if all(imgs): img = imgs
    if transport:
        imgs = [TRANSPORT_IMG.get(t.lower().strip(), "") for t in text]
        if all(imgs): img = imgs
    return {{
        "textQ": text_q, "text": text, "textC": 0, "img": img, "imgC": 0,
        "fillQ": fill_q, "fill": fill, "fillA": fill_a, "vfQ": vf, "vfC": vfc,
    }}


def em(sender, subject, lines, qs):
    body = "\\n\\n".join(["De : " + sender, "Objet : " + subject, "Bonjour,"] + lines + ["Cordialement,", sender.split()[0]])
    return {{"text": body, "questions": qs}}


def build_lessons():
    return {{
{lesson_entries}
    }}
'''

LESSON_BUILDERS = {
    9: [
        ("e9-1", "E9.1 — Faire des achats", "_e9_1_msg", "_e9_1_email"),
        ("e9-2", "E9.2 — Se déplacer", "_e9_2_msg", "_e9_2_email"),
        ("e9-3", "E9.3 — Chercher un logement", "_e9_3_msg", "_e9_3_email"),
        ("e9-4", "E9.4 — Démarches administratives", "_e9_4_msg", "_e9_4_email"),
        ("e9-5", "E9.5 — S'informer sur l'actualité", "_e9_5_msg", "_e9_5_email"),
    ],
    10: [
        ("e10-1", "E10.1 — Inviter et être invité", "_e10_1_msg", "_e10_1_email"),
        ("e10-2", "E10.2 — Faire des rencontres", "_e10_2_msg", "_e10_2_email"),
        ("e10-3", "E10.3 — Organiser un événement", "_e10_3_msg", "_e10_3_email"),
        ("e10-4", "E10.4 — Vie scolaire", "_e10_4_msg", "_e10_4_email"),
        ("e10-5", "E10.5 — Vie associative", "_e10_5_msg", "_e10_5_email"),
    ],
    11: [
        ("e11-1", "E11.1 — Apprécier la cuisine", "_e11_1_msg", "_e11_1_email"),
        ("e11-2", "E11.2 — Pratiquer une activité", "_e11_2_msg", "_e11_2_email"),
        ("e11-3", "E11.3 — Partager ses goûts", "_e11_3_msg", "_e11_3_email"),
        ("e11-4", "E11.4 — Passer des vacances", "_e11_4_msg", "_e11_4_email"),
    ],
    12: [
        ("e12-1", "E12.1 — S'occuper de sa santé", "_e12_1_msg", "_e12_1_email"),
        ("e12-2", "E12.2 — Faire du sport", "_e12_2_msg", "_e12_2_email"),
        ("e12-3", "E12.3 — Manger équilibré", "_e12_3_msg", "_e12_3_email"),
        ("e12-4", "E12.4 — Vivre en ville", "_e12_4_msg", "_e12_4_email"),
        ("e12-5", "E12.5 — Prendre soin de soi", "_e12_5_msg", "_e12_5_email"),
    ],
    13: [
        ("e13-1", "E13.1 — Suivre une formation", "_e13_1_msg", "_e13_1_email"),
        ("e13-2", "E13.2 — Trouver un stage", "_e13_2_msg", "_e13_2_email"),
        ("e13-3", "E13.3 — Répondre à une offre d'emploi", "_e13_3_msg", "_e13_3_email"),
        ("e13-4", "E13.4 — Passer un entretien", "_e13_4_msg", "_e13_4_email"),
        ("e13-5", "E13.5 — S'intégrer à l'entreprise", "_e13_5_msg", "_e13_5_email"),
    ],
    14: [
        ("e14-1", "E14.1 — Bilan A2", "_e14_1_msg", "_e14_1_email"),
    ],
}


def py_str(s: str) -> str:
    return repr(s)


def py_list(items) -> str:
    return "[" + ", ".join(items) + "]"


def render_scenario(d: dict) -> str:
    qs = ",\n            ".join(
        f'Q({py_str(q["textQ"])}, {py_str(q["text"][0])}, {py_str(q["text"][1])}, {py_str(q["text"][2])}, '
        f'{py_str(q["fillQ"])}, {py_str(q["fill"])}, {py_str(q["vfQ"])}, {q["vfC"]}'
        + (f', {py_str(q["fillA"])}' if q.get("fillA") else "")
        + (", prof=True" if q.get("_prof") else "")
        + (", transport=True" if q.get("_transport") else "")
        + ")"
        for q in d["questions"]
    )
    return f'''    {{"text": {py_str(d["text"])},
         "questions": [
            {qs},
         ]}}'''


def render_fn(name: str, scenarios: list[dict]) -> str:
    body = ",\n".join(render_scenario(s) for s in scenarios)
    return f"def {name}():\n    return [\n{body}\n    ]\n\n"


# Import all scenario data
from scenario_data import ALL_SCENARIOS  # noqa: E402


def write_module(mod: int) -> None:
    builders = LESSON_BUILDERS[mod]
    fns = []
    entries = []
    for key, title, msg_fn, email_fn in builders:
        data = ALL_SCENARIOS[key]
        fns.append(render_fn(msg_fn, data["msg"]))
        fns.append(render_fn(email_fn, data["email"]))
        entries.append(f'        "{key}": {{"title": {py_str(title)}, "messages": {msg_fn}(), "emails": {email_fn}()}},')
    content = HEADER.format(mod=mod, lesson_entries="\n".join(entries)) + "\n".join(fns)
    path = OUT / f"scenarios_e{mod}.py"
    path.write_text(content, encoding="utf-8")
    print(f"Wrote {path} ({path.stat().st_size:,} bytes)")


def main():
    for mod in range(9, 15):
        write_module(mod)


if __name__ == "__main__":
    main()
