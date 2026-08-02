#!/usr/bin/env python3
"""Validate the focused E9.1 CPE cleanup."""
from __future__ import annotations

import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DATA_DIR = ROOT / "scripts/data/ce_rewrite"
sys.path.insert(0, str(DATA_DIR))

from scenarios_e9_1_cpe_unique import LESSONS  # noqa: E402

FORBIDDEN = ["Avantage principal", "Offre complémentaire : ."]


def signature(text: str) -> str:
    sig = re.sub(r"\b\d+(?:[ hH:,.€-]\d+)*\b", "0", text)
    sig = re.sub(r"\b[A-ZÉÈÊÀÂÎÔÛÇ][A-Za-zÀ-ÖØ-öø-ÿ'’-]+\b", "Nom", sig)
    return re.sub(r"\s+", " ", sig.lower()).strip()


def main() -> None:
    items = LESSONS["e9-1"]["messages"]
    assert len(items) == 20, len(items)
    for idx, item in enumerate(items, 1):
        nonblank = [line for line in item["text"].splitlines() if line.strip()]
        assert 6 <= len(nonblank) <= 10, (idx, len(nonblank))
        assert 6 <= len(item["questions"]) <= 7, (idx, len(item["questions"]))
        for q in item["questions"]:
            assert len(q["text"]) == 3
            assert q["img"] == ["", "", ""]
            assert "_________" in q["fillQ"]
        for forbidden in FORBIDDEN:
            assert forbidden not in item["text"]
    score = len({signature(item["text"]) for item in items})
    assert score >= 18, score

    generated = (ROOT / "lib/curriculum/content/communication/express-e9-cpe.ts").read_text(encoding="utf-8")
    for forbidden in FORBIDDEN:
        assert forbidden not in generated, forbidden

    print(json.dumps({"e9-1": {"messages": score}, "remaining_thin_markers": 0}, ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()
