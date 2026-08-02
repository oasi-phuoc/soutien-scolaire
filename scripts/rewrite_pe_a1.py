#!/usr/bin/env python3
"""Patch Express A1 PE (message + email) pools with continuous-phrase prompts."""
from __future__ import annotations

import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
COMM = ROOT / "lib/curriculum/content/communication"
sys.path.insert(0, str(ROOT / "scripts/data"))

from pe_a1_e1_e4 import PE_EMAIL as PE_EMAIL_14  # noqa: E402
from pe_a1_e1_e4 import PE_MESSAGE as PE_MESSAGE_14  # noqa: E402
from pe_a1_e5_e8 import PE_EMAIL as PE_EMAIL_58  # noqa: E402
from pe_a1_e5_e8 import PE_MESSAGE as PE_MESSAGE_58  # noqa: E402

PE_MESSAGE = {**PE_MESSAGE_14, **PE_MESSAGE_58}
PE_EMAIL = {**PE_EMAIL_14, **PE_EMAIL_58}

LESSON_FILES_MESSAGE = {
    "e1-1": "express-e1-1-cpe.ts",
    "e1-2": "express-e1-2-cpe.ts",
    "e1-3": "express-e1-3-cpe.ts",
    "e2-1": "express-e2-1-cpe.ts",
    "e2-2": "express-e2-2-cpe.ts",
    "e2-3": "express-e2-3-cpe.ts",
    "e3-1": "express-e3-1-cpe.ts",
    "e3-2": "express-e3-2-cpe.ts",
    "e3-3": "express-e3-3-cpe.ts",
    "e4-1": "express-e4-1-cpe.ts",
    "e4-2": "express-e4-2-cpe.ts",
    "e4-3": "express-e4-3-cpe.ts",
    "e5-1": "express-e5-1-cpe.ts",
    "e5-2": "express-e5-2-cpe.ts",
    "e6-1": "express-e6-1-cpe.ts",
    "e6-2": "express-e6-2-cpe.ts",
    "e6-3": "express-e6-3-cpe.ts",
    "e7-1": "express-e7-1-cpe.ts",
    "e7-2": "express-e7-2-cpe.ts",
    "e7-3": "express-e7-3-cpe.ts",
    "e8-1": "express-e8-1-cpe.ts",
}

EMAIL_FILE_BY_MODULE = {
    "e1": "express-e1-email.ts",
    "e2": "express-e2-email.ts",
    "e3": "express-e3-email.ts",
    "e4": "express-e4-email.ts",
    "e5": "express-e5-email.ts",
    "e6": "express-e6-email.ts",
    "e7": "express-e7-email.ts",
    "e8": "express-e8-email.ts",
}


def ts_escape(s: str) -> str:
    return s.replace("\\", "\\\\").replace("`", "\\`").replace("${", "\\${")


def emit_message_prompt(p: dict) -> str:
    return f"""  {{
    id: "{p["id"]}",
    title: "{ts_escape(p["title"])}",
    situation: "{ts_escape(p.get("situation") or "")}",
    instruction: "{ts_escape(p["instruction"])}",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  }},"""


def emit_email_prompt(p: dict) -> str:
    lines = [
        "  {",
        f'    id: "{p["id"]}",',
        f'    title: "{ts_escape(p["title"])}",',
        f'    situation: "{ts_escape(p.get("situation") or "")}",',
    ]
    src = p.get("sourceMessage")
    if src:
        body = ts_escape(src["body"])
        lines.append("    sourceMessage: {")
        if src.get("from"):
            lines.append(f'      from: "{ts_escape(src["from"])}",')
        if src.get("subject"):
            lines.append(f'      subject: "{ts_escape(src["subject"])}",')
        # body may contain newlines — use template literal
        lines.append(f"      body: `{body}`,")
        lines.append("    },")
    lines.append(f'    instruction: "{ts_escape(p["instruction"])}",')
    lines.append("    points: [],")
    lines.append("    minWords: PE_MIN,")
    lines.append("    maxWords: PE_MAX,")
    lines.append("  },")
    return "\n".join(lines)


def replace_export_array(src: str, export_name: str, new_items: str) -> str:
    pattern = re.compile(
        rf"(export const {export_name}: ExpressPePrompt\[\] = \[)([\s\S]*?)(\n\];)",
        re.M,
    )
    m = pattern.search(src)
    if not m:
        raise ValueError(f"Export not found: {export_name}")
    return pattern.sub(rf"\1\n{new_items}\n\3", src, count=1)


def patch_message_lesson(lesson_key: str) -> None:
    filename = LESSON_FILES_MESSAGE[lesson_key]
    path = COMM / filename
    src = path.read_text(encoding="utf-8")
    export = lesson_key.replace("-", "_").upper() + "_PE"
    prompts = PE_MESSAGE[lesson_key]
    assert len(prompts) == 20, lesson_key
    body = "\n".join(emit_message_prompt(p) for p in prompts)
    path.write_text(replace_export_array(src, export, body), encoding="utf-8")
    print(f"Patched {filename}::{export}")


def patch_email_lesson(lesson_key: str) -> None:
    module = lesson_key.split("-")[0]
    filename = EMAIL_FILE_BY_MODULE[module]
    path = COMM / filename
    src = path.read_text(encoding="utf-8")
    export = lesson_key.replace("-", "_").upper() + "_PE_EMAIL"
    prompts = PE_EMAIL[lesson_key]
    assert len(prompts) == 20, lesson_key
    body = "\n".join(emit_email_prompt(p) for p in prompts)
    path.write_text(replace_export_array(src, export, body), encoding="utf-8")
    print(f"Patched {filename}::{export}")


def main() -> None:
    for key in sorted(PE_MESSAGE.keys()):
        patch_message_lesson(key)
    for key in sorted(PE_EMAIL.keys()):
        patch_email_lesson(key)
    print("Done: A1 PE message + email rewritten.")


if __name__ == "__main__":
    main()
