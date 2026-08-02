"""Question builders from reading-comprehension facts."""
from __future__ import annotations

from typing import Any


def facts_to_questions(facts: list[dict[str, Any]], img_idx: int | None = None) -> list[dict[str, Any]]:
    """Convert fact dicts to ExpressRawQ items (6+ questions)."""
    out: list[dict[str, Any]] = []
    for i, f in enumerate(facts, 1):
        img = f.get("img", ["", "", ""])
        img_c = f.get("imgC", 0)
        if img_idx is not None and i - 1 == img_idx:
            pass  # keep provided img
        q: dict[str, Any] = {
            "id": f"ce-q{i}",
            "textQ": f["textQ"],
            "text": f["text"],
            "textC": f["textC"],
            "img": img,
            "imgC": img_c,
            "fillQ": f["fillQ"],
            "fill": f["fill"],
            "vfQ": f["vfQ"],
            "vfC": f["vfC"],
        }
        if f.get("fillA"):
            q["fillA"] = f["fillA"]
        out.append(q)
    return out


def cant_say_vf(text_snippet: str) -> dict[str, Any]:
    """Generic 'on ne sait pas' vf question."""
    return {
        "textQ": "Que dit le texte sur les prix ?",
        "text": ["Le prix n'est pas indiqué", "C'est gratuit", "C'est très cher"],
        "textC": 0,
        "fillQ": "Le texte ne donne pas le _________.",
        "fill": "prix",
        "vfQ": f"Le prix est indiqué dans le texte.",
        "vfC": 1,
    }
