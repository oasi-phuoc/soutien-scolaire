#!/usr/bin/env python3
"""
Build complete scenarios_e9.py … scenarios_e14.py with unique CE content.
Run: python3 build_all_e9_e14.py
Then: python3 /workspace/scripts/rewrite_ce_e9_e14.py
"""
from __future__ import annotations

import importlib.util
import sys
from pathlib import Path

HERE = Path(__file__).parent
sys.path.insert(0, str(HERE))

# Import scenario content modules as they're written
from content_e9 import LESSONS as E9_LESSONS
from content_e10 import LESSONS as E10_LESSONS
from content_e11 import LESSONS as E11_LESSONS
from content_e12 import LESSONS as E12_LESSONS
from content_e13 import LESSONS as E13_LESSONS
from content_e14 import LESSONS as E14_LESSONS

MODULE_DATA = {
    9: E9_LESSONS,
    10: E10_LESSONS,
    11: E11_LESSONS,
    12: E12_LESSONS,
    13: E13_LESSONS,
    14: E14_LESSONS,
}

HEADER = '''"""E{mod} scenarios — unique CE genres (auto-generated)."""
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
    d = {{"textQ": text_q, "text": text, "textC": 0, "img": img, "imgC": 0,
         "fillQ": fill_q, "fill": fill, "vfQ": vf, "vfC": vfc}}
    if fill_a: d["fillA"] = fill_a
    return d


def build_lessons():
    return {{
{entries}
    }}
'''


def py_repr(s: str) -> str:
    return repr(s)


def render_q(q: dict) -> str:
    parts = [
        f'Q({py_repr(q["textQ"])}, {py_repr(q["text"][0])}, {py_repr(q["text"][1])}, {py_repr(q["text"][2])}',
        f'{py_repr(q["fillQ"])}, {py_repr(q["fill"])}, {py_repr(q["vfQ"])}, {q["vfC"]}',
    ]
    if q.get("fillA"):
        parts[-1] += f', {py_repr(q["fillA"])}'
    if q.get("_prof"):
        parts[-1] += ", prof=True"
    if q.get("_transport"):
        parts[-1] += ", transport=True"
    return "            " + ", ".join(parts) + ")"


def render_scenario(s: dict, indent: str = "    ") -> str:
    qs = ",\n".join(render_q(q) for q in s["questions"])
    return f'{indent}{{"text": {py_repr(s["text"])},\n{indent} "questions": [\n{qs},\n{indent} ]}}'


def render_fn(name: str, items: list[dict]) -> str:
    body = ",\n".join(render_scenario(s) for s in items)
    return f"def {name}():\n    return [\n{body}\n    ]\n\n"


def write_module(mod: int, lessons: dict) -> None:
    fns = []
    entries = []
    for key, data in lessons.items():
        msg_fn = f"_{key.replace('-', '_')}_msg"
        email_fn = f"_{key.replace('-', '_')}_email"
        fns.append(render_fn(msg_fn, data["messages"]))
        fns.append(render_fn(email_fn, data["emails"]))
        entries.append(
            f'        "{key}": {{"title": {py_repr(data["title"])}, '
            f'"messages": {msg_fn}(), "emails": {email_fn}()}},'
        )
    content = HEADER.format(mod=mod, entries="\n".join(entries)) + "\n".join(fns)
    out = HERE / f"scenarios_e{mod}.py"
    out.write_text(content, encoding="utf-8")
    n_msg = sum(len(v["messages"]) for v in lessons.values())
    n_em = sum(len(v["emails"]) for v in lessons.values())
    print(f"E{mod}: {len(lessons)} lessons, {n_msg} msg, {n_em} email -> {out.name} ({out.stat().st_size:,} B)")


def validate(lessons: dict) -> None:
    for key, data in lessons.items():
        assert len(data["messages"]) == 20, f"{key}: {len(data['messages'])} msg"
        assert len(data["emails"]) == 20, f"{key}: {len(data['emails'])} email"
        for kind in ("messages", "emails"):
            for i, s in enumerate(data[kind]):
                nq = len(s["questions"])
                assert 6 <= nq <= 8, f"{key}/{kind}[{i}]: {nq} questions"
                assert 80 <= len(s["text"].split()) <= 160, f"{key}/{kind}[{i}]: {len(s['text'].split())} words"


def main():
    for mod, lessons in MODULE_DATA.items():
        validate(lessons)
        write_module(mod, lessons)


if __name__ == "__main__":
    main()
