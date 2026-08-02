#!/usr/bin/env python3
"""
Generate all CE content (E1–E4) from unique scenario definitions.
Each scenario = distinct genre/situation with auto-generated coherent questions.
"""
from __future__ import annotations

import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[3]
OUT_DIR = Path(__file__).parent
sys.path.insert(0, str(ROOT / "scripts"))
sys.path.insert(0, str(OUT_DIR))

EMPTY_IMG = ["", "", ""]

PROFESSION_IMG = {
    "agriculteur": "agriculteur", "architecte": "architecte", "avocat": "avocat",
    "bibliothécaire": "libraire", "boucher": "boucher", "boulanger": "boulanger",
    "boulangère": "boulanger", "chanteur": "chanteur", "chanteuse": "chanteuse",
    "chauffeur": "chauffeur", "coiffeur": "coiffeur", "coiffeuse": "coiffeuse",
    "comptable": "secrétaire", "cuisinier": "cuisinier", "cuisinière": "cuisinier",
    "dentiste": "dentiste", "docteur": "docteur", "électricien": "électricien",
    "facteur": "facteur", "fermier": "fermier", "fermière": "fermier",
    "infirmier": "infirmier", "infirmière": "infirmier", "ingénieur": "ingénieur",
    "ingénieure": "ingénieur", "jardinier": "jardinier", "journaliste": "journaliste",
    "libraire": "libraire", "maçon": "maçon", "mécanicien": "mécanicien",
    "médecin": "médecin", "menuisier": "menuisier", "peintre": "peintre",
    "pharmacien": "pharmacien", "pharmacienne": "pharmacien", "pilote": "pilote",
    "plombier": "plombier", "policier": "policier", "pompier": "pompier",
    "professeur": "professeur", "professeure": "professeur", "réceptionniste": "vendeur",
    "secrétaire": "secrétaire", "serveur": "serveur", "serveuse": "serveur",
    "vendeur": "vendeur", "vendeuse": "vendeur", "vétérinaire": "vétérinaire",
    "étudiant": "professeur", "étudiante": "professeur",
}


def norm_prof(label: str) -> str:
    import unicodedata
    s = label.strip().lower()
    return "".join(ch for ch in unicodedata.normalize("NFD", s) if unicodedata.category(ch) != "Mn")


_NORM_PROFESSION_IMG = {norm_prof(k): v for k, v in PROFESSION_IMG.items()}


def prof_img(choices: list[str]) -> list[str]:
    imgs = [_NORM_PROFESSION_IMG.get(norm_prof(c), "") for c in choices]
    return imgs if all(imgs) else EMPTY_IMG


def Q(text_q, ans, w1, w2, fill_q, fill, vf, vfc, fill_a=None, prof=False, transport=False):
    text = [ans, w1, w2]
    img = EMPTY_IMG
    if prof:
        img = prof_img(text)
    elif transport:
        img = transport_img(text)
    return {
        "textQ": text_q, "text": text, "textC": 0,
        "img": img, "imgC": 0,
        "fillQ": fill_q, "fill": fill, "fillA": fill_a,
        "vfQ": vf, "vfC": vfc,
    }


TRANSPORT_LABEL_IMG = {
    "bus": "bus", "train": "train", "métro": "métro", "metro": "métro",
    "tram": "tramway", "tramway": "tramway", "vélo": "vélo", "velo": "vélo",
    "avion": "avion", "taxi": "taxi", "bateau": "bateau", "gare": "gare",
    "aéroport": "aéroport", "aeroport": "aéroport", "hôtel": "hôtel", "hotel": "hôtel",
    "métro": "métro",
}


def transport_img(choices: list[str]) -> list[str]:
    imgs = [TRANSPORT_LABEL_IMG.get(norm_prof(c), "") for c in choices]
    return imgs if all(imgs) else EMPTY_IMG


def write_data_py(level: int, lessons: dict) -> None:
    path = OUT_DIR / f"e{level}_data.py"
    lines = ['"""Auto-generated CE data."""\n', "LESSONS = "]
    lines.append(json.dumps(lessons, ensure_ascii=False, indent=2))
    lines.append("\n")
    path.write_text("".join(lines), encoding="utf-8")
    print(f"Wrote {path} ({path.stat().st_size} bytes)")


# Import scenario modules
from scenarios_e1 import build_e1_lessons  # noqa: E402
from scenarios_e2 import build_e2_lessons  # noqa: E402
from scenarios_e3 import build_e3_lessons  # noqa: E402
from scenarios_e4 import build_e4_lessons  # noqa: E402

BUILDERS = {1: build_e1_lessons, 2: build_e2_lessons, 3: build_e3_lessons, 4: build_e4_lessons}


def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument("level", nargs="?", default="all")
    args = p.parse_args()
    levels = [1, 2, 3, 4] if args.level == "all" else [int(args.level)]
    for lv in levels:
        lessons = BUILDERS[lv]()
        for k, v in lessons.items():
            assert len(v["messages"]) == 20, f"{k} messages: {len(v['messages'])}"
            assert len(v["emails"]) == 20, f"{k} emails: {len(v['emails'])}"
            for m in v["messages"] + v["emails"]:
                nq = len(m["questions"])
                assert 6 <= nq <= 8, f"{k}: {nq} questions"
        write_data_py(lv, lessons)


if __name__ == "__main__":
    main()
