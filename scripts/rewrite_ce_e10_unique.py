#!/usr/bin/env python3
"""Rewrite E10 CE message + email sections from the unique scenario data."""
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
    emit_ce_email_constants,
    emit_ce_email_export,
    emit_ce_export,
    patch_cpe_sublesson,
    patch_email_sublesson,
)
from scenarios_e10_unique import LESSONS  # noqa: E402


def main() -> None:
    cpe_path = COMM / "express-e10-cpe.ts"
    email_path = COMM / "express-e10-email.ts"
    cpe = cpe_path.read_text(encoding="utf-8")
    email = email_path.read_text(encoding="utf-8")

    for key, lesson in LESSONS.items():
        label, prefix, slug = LESSON_MAP[key]
        messages = lesson["messages"]
        emails = lesson["emails"]
        assert len(messages) == 20, f"{key}: {len(messages)} messages"
        assert len(emails) == 20, f"{key}: {len(emails)} emails"

        ce_block = emit_ce_constants(prefix, f"{slug}-ce", messages)
        ce_block += "\n\n" + emit_ce_export(prefix, f"{slug}-ce", 20)
        cpe = patch_cpe_sublesson(cpe, label, prefix, ce_block)

        email_block = emit_ce_email_constants(prefix, f"{slug}-ce-email", emails)
        email_block += "\n\n" + emit_ce_email_export(prefix, f"{slug}-ce-email", 20)
        email = patch_email_sublesson(email, label, prefix, email_block)
        print(f"{key}: 20 CE messages + 20 CE emails")

    cpe_path.write_text(cpe, encoding="utf-8")
    email_path.write_text(email, encoding="utf-8")
    print("Patched express-e10-cpe.ts and express-e10-email.ts")


if __name__ == "__main__":
    main()
