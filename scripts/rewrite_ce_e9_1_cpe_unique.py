#!/usr/bin/env python3
"""Rewrite the remaining thin E9.1 CPE CE messages."""
from __future__ import annotations

import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DATA_DIR = ROOT / "scripts/data/ce_rewrite"
sys.path.insert(0, str(ROOT / "scripts"))
sys.path.insert(0, str(DATA_DIR))

from rewrite_ce_e9_e14 import (  # noqa: E402
    COMM,
    LESSON_MAP,
    emit_ce_constants,
    emit_ce_export,
    patch_cpe_sublesson,
)
from scenarios_e9_1_cpe_unique import LESSONS  # noqa: E402


def main() -> None:
    key = "e9-1"
    label, prefix, slug = LESSON_MAP[key]
    messages = LESSONS[key]["messages"]
    assert len(messages) == 20, f"{key}: {len(messages)} messages"

    cpe_path = COMM / "express-e9-cpe.ts"
    cpe = cpe_path.read_text(encoding="utf-8")
    ce_block = emit_ce_constants(prefix, f"{slug}-ce", messages)
    ce_block += "\n\n" + emit_ce_export(prefix, f"{slug}-ce", 20)
    cpe = patch_cpe_sublesson(cpe, label, prefix, ce_block)
    cpe_path.write_text(cpe, encoding="utf-8")
    print("e9-1: 20 CE messages")
    print("Patched express-e9-cpe.ts")


if __name__ == "__main__":
    main()
