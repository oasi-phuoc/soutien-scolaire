#!/usr/bin/env python3
"""
Build scenarios_e9.py … scenarios_e14.py with unique CE content.
Pattern: same as scenarios_e1.py — compact helpers + unique genres per item.
Run: python3 build_scenarios_e9_e14.py && python3 /workspace/scripts/rewrite_ce_e9_e14.py
"""
from __future__ import annotations

import importlib.util
import sys
from pathlib import Path

HERE = Path(__file__).parent
sys.path.insert(0, str(HERE))

# Import per-module builders
from builders_e9 import build_e9_lessons
from builders_e10 import (
    build_e10_lessons,
    build_e11_lessons,
    build_e12_lessons,
    build_e13_lessons,
    build_e14_lessons,
)

BUILDERS = {
    9: build_e9_lessons,
    10: build_e10_lessons,
    11: build_e11_lessons,
    12: build_e12_lessons,
    13: build_e13_lessons,
    14: build_e14_lessons,
}

HEADER = '''"""E{mod} scenarios — unique CE genres."""
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
    return LESSONS


LESSONS = None  # replaced below
'''


def py_repr(obj) -> str:
    import pprint
    return pprint.pformat(obj, width=120, compact=False)


def write_module(mod: int, lessons: dict) -> None:
    body = py_repr(lessons)
    content = HEADER.format(mod=mod).replace("LESSONS = None  # replaced below", f"LESSONS = {body}")
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
                assert 6 <= nq <= 8, f"{key}/{kind}[{i}]: {nq} q"
                nw = len(s["text"].split())
                assert 25 <= nw <= 200, f"{key}/{kind}[{i}]: {nw} words"


def main():
    for mod, builder in BUILDERS.items():
        lessons = builder()
        validate(lessons)
        write_module(mod, lessons)


if __name__ == "__main__":
    main()
