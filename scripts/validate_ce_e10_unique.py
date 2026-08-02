#!/usr/bin/env python3
"""Validate the E10 CE rewrite source data and generated TypeScript output."""
from __future__ import annotations

import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DATA_DIR = ROOT / "scripts/data/ce_rewrite"
sys.path.insert(0, str(DATA_DIR))

from scenarios_e10_unique import LESSONS  # noqa: E402

FORBIDDEN = [
    "information principale numéro",
    "Annonce officielle — information",
    "Concernant sujet",
    "sujet N : détail",
    "Message 1 — information",
]


def assert_ok(condition: bool, message: str) -> None:
    if not condition:
        raise AssertionError(message)


def line_count(text: str) -> int:
    return len([line for line in text.splitlines() if line.strip()])


def signature(text: str) -> str:
    sig = re.sub(r"\b\d+(?:[ hH:,.€-]\d+)*\b", "0", text)
    sig = re.sub(
        r"\b(janvier|février|fevrier|mars|avril|mai|juin|juillet|août|aout|septembre|octobre|novembre|décembre|decembre)\b",
        "mois",
        sig,
        flags=re.IGNORECASE,
    )
    sig = re.sub(r"\b[A-ZÉÈÊÀÂÎÔÛÇ][A-Za-zÀ-ÖØ-öø-ÿ'’-]+\b", "Nom", sig)
    sig = re.sub(r"[A-Za-zÀ-ÖØ-öø-ÿ0-9_.+-]+@[A-Za-zÀ-ÖØ-öø-ÿ0-9_.+-]+", "email", sig)
    sig = re.sub(r"\s+", " ", sig.lower()).strip()
    return sig


def validate_item(key: str, family: str, idx: int, item: dict) -> None:
    text = item["text"]
    count = line_count(text)
    assert_ok(6 <= count <= 10, f"{key} {family} {idx}: {count} nonblank lines")
    if family == "emails":
        assert_ok(text.startswith("De : "), f"{key} email {idx}: missing De")
        assert_ok("\nObjet : " in text, f"{key} email {idx}: missing Objet")
        assert_ok("\nBonjour " in text, f"{key} email {idx}: missing Bonjour")
    for forbidden in FORBIDDEN:
        assert_ok(forbidden not in text, f"{key} {family} {idx}: forbidden text {forbidden!r}")

    questions = item["questions"]
    assert_ok(6 <= len(questions) <= 7, f"{key} {family} {idx}: {len(questions)} questions")
    for q_idx, q in enumerate(questions, 1):
        assert_ok(len(q["text"]) == 3, f"{key} {family} {idx} q{q_idx}: bad choices")
        assert_ok(q["textC"] in (0, 1, 2), f"{key} {family} {idx} q{q_idx}: bad textC")
        assert_ok("_________" in q["fillQ"], f"{key} {family} {idx} q{q_idx}: missing blank")
        assert_ok(q["fill"], f"{key} {family} {idx} q{q_idx}: empty fill")
        assert_ok(q["vfC"] in (0, 1, 2), f"{key} {family} {idx} q{q_idx}: bad vfC")
        assert_ok(q.get("img") == ["", "", ""], f"{key} {family} {idx} q{q_idx}: image should be empty")
        for forbidden in FORBIDDEN:
            packed = json.dumps(q, ensure_ascii=False)
            assert_ok(forbidden not in packed, f"{key} {family} {idx} q{q_idx}: forbidden {forbidden!r}")


def main() -> None:
    result: dict[str, dict[str, int]] = {}
    for key, lesson in LESSONS.items():
        result[key] = {}
        for family in ("messages", "emails"):
            items = lesson[family]
            assert_ok(len(items) == 20, f"{key} {family}: {len(items)} items")
            for idx, item in enumerate(items, 1):
                validate_item(key, family, idx, item)
            score = len({signature(item["text"]) for item in items})
            assert_ok(score >= 18, f"{key} {family}: uniqueness score {score}")
            result[key][family] = score

    generated_files = [
        ROOT / "lib/curriculum/content/communication/express-e10-cpe.ts",
        ROOT / "lib/curriculum/content/communication/express-e10-email.ts",
    ]
    for path in generated_files:
        content = path.read_text(encoding="utf-8")
        for forbidden in FORBIDDEN:
            assert_ok(forbidden not in content, f"{path.name}: forbidden {forbidden!r}")

    print(json.dumps({"lessons": result, "total_messages": 100, "total_emails": 100}, ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()
