#!/usr/bin/env python3
"""Rewrite CE messages + emails for Express E6–E8 (E5-style naming)."""
from __future__ import annotations

import argparse
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
COMM = ROOT / "lib/curriculum/content/communication"
sys.path.insert(0, str(ROOT / "scripts/data/ce_rewrite"))

from rewrite_ce_e1_e4 import (  # noqa: E402
    auto_img,
    emit_q,
    json_text_array,
    ts_str,
)


def mod_prefix(lesson_key: str) -> str:
    a, b = lesson_key.split("-")
    return f"{a.upper()}_{b}"


def emit_message_block(lesson_key: str, idx: int, text: str, questions: list[dict]) -> str:
    pfx = mod_prefix(lesson_key)
    pool_slug = f"{lesson_key}-ce-{idx}"
    qs = "\n".join(emit_q(q, i + 1) for i, q in enumerate(questions))
    return f"""const {pfx}_CE_TEXT_{idx} = `{text}`;

const {pfx}_CE_POOL_{idx} = buildExpressPool("{pool_slug}", [
{qs}
]);
"""


def emit_email_block(lesson_key: str, idx: int, text: str, questions: list[dict]) -> str:
    pfx = mod_prefix(lesson_key)
    pool_slug = f"{lesson_key}-ce-email-{idx}"
    qs = "\n".join(emit_q(q, i + 1, email=True) for i, q in enumerate(questions))
    return f"""const {pfx}_CE_EMAIL_TEXT_{idx} = `{text}`;

const {pfx}_CE_EMAIL_POOL_{idx} = buildExpressPool("{pool_slug}", [
{qs}
]);
"""


def emit_message_export(lesson_key: str, count: int = 20) -> str:
    pfx = mod_prefix(lesson_key)
    parts = []
    for i in range(1, count + 1):
        parts.append(
            f"""  readingPoolExercise({{
    id: "{lesson_key}-ce-{i}",
    readingText: {pfx}_CE_TEXT_{i},
    questionPool: {pfx}_CE_POOL_{i},
  }}),"""
        )
    return f"export const {pfx}_CE: CommunicationExercise[] = [\n" + "\n".join(parts) + "\n];"


def emit_email_export(lesson_key: str, count: int = 20) -> str:
    pfx = mod_prefix(lesson_key)
    parts = []
    for i in range(1, count + 1):
        parts.append(
            f"""  readingPoolExercise({{
    id: "{lesson_key}-ce-email-{i}",
    readingText: {pfx}_CE_EMAIL_TEXT_{i},
    questionPool: {pfx}_CE_EMAIL_POOL_{i},
    instruction: "Lisez l'e-mail et répondez aux questions.",
  }}),"""
        )
    return f"export const {pfx}_CE_EMAIL: CommunicationExercise[] = [\n" + "\n".join(parts) + "\n];"


def patch_cpe_file(filepath: Path, lesson_key: str, title: str, messages: list[dict]) -> None:
    src = filepath.read_text(encoding="utf-8")
    header_end = src.index("/* ── Compréhension écrite")
    po_start = src.index("/* ── Production orale")
    header = src[:header_end]
    po_rest = src[po_start:]

    blocks = [f"/* ── Compréhension écrite — {title} ── */\n\n"]
    for i, m in enumerate(messages, 1):
        blocks.append(emit_message_block(lesson_key, i, m["text"], m["questions"]))
    blocks.append("\n")
    blocks.append(emit_message_export(lesson_key))
    blocks.append("\n\n")

    filepath.write_text(header + "".join(blocks) + po_rest, encoding="utf-8")
    print(f"Patched {filepath.name}")


def patch_email_lesson(filepath: Path, lesson_key: str, title: str, emails: list[dict]) -> None:
    src = filepath.read_text(encoding="utf-8")
    label = lesson_key.upper().replace("-", ".")
    pattern = re.compile(
        rf"/\* ══+\s*\n\s*{re.escape(label)} — [^\n]+\n\s*═+ \*/",
        re.MULTILINE,
    )
    m = pattern.search(src)
    if not m:
        raise ValueError(f"Section not found for {lesson_key} ({label}) in {filepath}")
    start = m.start()
    pe_name = f"export const {mod_prefix(lesson_key)}_PE_EMAIL"
    pe_start = src.index(pe_name, m.end())

    blocks = [src[m.start():m.end()] + "\n\n"]
    for i, em in enumerate(emails, 1):
        blocks.append(emit_email_block(lesson_key, i, em["text"], em["questions"]))
    blocks.append("\n")
    blocks.append(emit_email_export(lesson_key))
    blocks.append("\n\n")

    filepath.write_text(src[:start] + "".join(blocks) + src[pe_start:], encoding="utf-8")
    print(f"Patched {filepath.name} — {lesson_key}")


def run_level(level: int) -> None:
    builders = {6: "build_e6_lessons", 7: "build_e7_lessons", 8: "build_e8_lessons"}
    mod = __import__(f"scenarios_e{level}", fromlist=[builders[level]])
    lessons = getattr(mod, builders[level])()
    for lesson_key, lesson in lessons.items():
        assert len(lesson["messages"]) == 20, f"{lesson_key} messages"
        assert len(lesson["emails"]) == 20, f"{lesson_key} emails"
        cpe_file = COMM / f"express-{lesson_key}-cpe.ts"
        patch_cpe_file(cpe_file, lesson_key, lesson["title"], lesson["messages"])
    email_file = COMM / f"express-e{level}-email.ts"
    for lesson_key, lesson in lessons.items():
        patch_email_lesson(email_file, lesson_key, lesson["title"], lesson["emails"])


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("level", choices=["6", "7", "8", "all"], default="all", nargs="?")
    args = parser.parse_args()
    levels = [6, 7, 8] if args.level == "all" else [int(args.level)]
    for lv in levels:
        run_level(lv)


if __name__ == "__main__":
    main()
