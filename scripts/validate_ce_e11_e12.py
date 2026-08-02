#!/usr/bin/env python3
"""Validate Express E11/E12 CE rewrite source data and generated TS files."""
from __future__ import annotations

import importlib
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DATA_DIR = ROOT / "scripts/data/ce_rewrite"
COMM_DIR = ROOT / "lib/curriculum/content/communication"

sys.path.insert(0, str(DATA_DIR))

PLACEHOLDER_RE = re.compile(
    r"Annonce officielle|Programme événement|Guide pratique|Information principale numéro|"
    r"détail pratique|condition particulière|Concernant sujet \d|Sujet \d|"
    r"Message \d+ — information|Service E1[12] \d|délai \d+ jours|"
    r"Action \d|Contact \d|remarque complémentaire",
    re.IGNORECASE,
)


def _walk_strings(value):
    if isinstance(value, str):
        yield value
    elif isinstance(value, dict):
        for child in value.values():
            yield from _walk_strings(child)
    elif isinstance(value, list):
        for child in value:
            yield from _walk_strings(child)


def _check_no_placeholders(label: str, value) -> None:
    for text in _walk_strings(value):
        match = PLACEHOLDER_RE.search(text)
        if match:
            raise AssertionError(f"{label}: placeholder remains: {match.group(0)!r}")


def _check_item(label: str, item: dict) -> None:
    questions = item["questions"]
    if not 6 <= len(questions) <= 7:
        raise AssertionError(f"{label}: expected 6-7 questions, got {len(questions)}")
    for idx, question in enumerate(questions, 1):
        if len(question["text"]) != 3:
            raise AssertionError(f"{label} q{idx}: expected 3 text choices")
        if question.get("textC") != 0:
            raise AssertionError(f"{label} q{idx}: generated answer must be first choice")
        if question.get("img") != ["", "", ""]:
            raise AssertionError(f"{label} q{idx}: unexpected image choices {question.get('img')!r}")
        if "___" not in question["fillQ"]:
            raise AssertionError(f"{label} q{idx}: fillQ has no blank")


def _check_lesson(key: str, lesson: dict) -> tuple[int, int]:
    messages = lesson["messages"]
    emails = lesson["emails"]
    if len(messages) != 20:
        raise AssertionError(f"{key}: expected 20 messages, got {len(messages)}")
    if len(emails) != 20:
        raise AssertionError(f"{key}: expected 20 emails, got {len(emails)}")

    message_texts = [item["text"] for item in messages]
    email_texts = [item["text"] for item in emails]
    if len(set(message_texts)) != 20:
        raise AssertionError(f"{key}: duplicate CE message texts")
    if len(set(email_texts)) != 20:
        raise AssertionError(f"{key}: duplicate CE email texts")

    for idx, item in enumerate(messages, 1):
        _check_item(f"{key} message {idx}", item)
    for idx, item in enumerate(emails, 1):
        if not item["text"].startswith("De : ") or "\nObjet : " not in item["text"]:
            raise AssertionError(f"{key} email {idx}: missing real De/Objet header")
        _check_item(f"{key} email {idx}", item)
    _check_no_placeholders(key, lesson)
    return len(messages), len(emails)


def _check_generated_ts(module: int, lesson_keys: list[str]) -> None:
    for suffix in ("cpe", "email"):
        path = COMM_DIR / f"express-e{module}-{suffix}.ts"
        content = path.read_text(encoding="utf-8")
        _check_no_placeholders(str(path), content)
        for key in lesson_keys:
            prefix = key.replace("e", "E").replace("-", "_")
            export_name = f"{prefix}_CE_EMAIL" if suffix == "email" else f"{prefix}_CE"
            match = re.search(rf"export const {export_name}: CommunicationExercise\[] = \[(.*?)\n\];", content, re.S)
            if not match:
                raise AssertionError(f"{path}: missing export {export_name}")
            if match.group(1).count("readingPoolExercise({") != 20:
                raise AssertionError(f"{path}: {export_name} does not export 20 exercises")
            if match.group(1).count("questionCount: 6") != 20:
                raise AssertionError(f"{path}: {export_name} does not set 20 questionCount values")


def main() -> None:
    total_messages = 0
    total_emails = 0
    for module in (11, 12):
        mod = importlib.import_module(f"scenarios_e{module}")
        keys = sorted(mod.LESSONS)
        for key in keys:
            messages, emails = _check_lesson(key, mod.LESSONS[key])
            total_messages += messages
            total_emails += emails
        _check_generated_ts(module, keys)
    print(f"Validated CE E11-E12: {total_messages} messages, {total_emails} emails.")


if __name__ == "__main__":
    main()
