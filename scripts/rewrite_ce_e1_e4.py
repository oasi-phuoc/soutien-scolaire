#!/usr/bin/env python3
"""Rewrite CE message + CE email sections for Express E1–E4 lessons."""
from __future__ import annotations

import argparse
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
COMM = ROOT / "lib/curriculum/content/communication"

PROFESSION_IMG = {
    "agriculteur": "agriculteur",
    "architecte": "architecte",
    "avocat": "avocat",
    "boucher": "boucher",
    "boulanger": "boulanger",
    "boulangère": "boulanger",
    "chanteur": "chanteur",
    "chanteuse": "chanteuse",
    "chauffeur": "chauffeur",
    "coiffeur": "coiffeur",
    "coiffeuse": "coiffeuse",
    "cuisinier": "cuisinier",
    "cuisinière": "cuisinier",
    "dentiste": "dentiste",
    "docteur": "docteur",
    "électricien": "électricien",
    "facteur": "facteur",
    "fermier": "fermier",
    "infirmier": "infirmier",
    "infirmière": "infirmier",
    "ingénieur": "ingénieur",
    "ingénieure": "ingénieur",
    "jardinier": "jardinier",
    "journaliste": "journaliste",
    "libraire": "libraire",
    "maçon": "maçon",
    "mécanicien": "mécanicien",
    "médecin": "médecin",
    "menuisier": "menuisier",
    "peintre": "peintre",
    "pharmacien": "pharmacien",
    "pharmacienne": "pharmacien",
    "pilote": "pilote",
    "plombier": "plombier",
    "policier": "policier",
    "pompier": "pompier",
    "professeur": "professeur",
    "professeure": "professeur",
    "secrétaire": "secrétaire",
    "serveur": "serveur",
    "serveuse": "serveur",
    "vendeur": "vendeur",
    "vendeuse": "vendeur",
    "vétérinaire": "vétérinaire",
    "étudiant": "professeur",
    "étudiante": "professeur",
}


def norm_key(s: str) -> str:
    return s.strip().lower().replace("é", "e").replace("è", "e").replace("ê", "e")


def auto_img(text_choices: list[str], img_c: int = 0) -> list[str]:
    imgs: list[str] = []
    for t in text_choices:
        k = t.strip().lower()
        if k in PROFESSION_IMG:
            imgs.append(PROFESSION_IMG[k])
        else:
            return ["", "", ""]
    return imgs


def ts_str(s: str) -> str:
    return s.replace("\\", "\\\\").replace("`", "\\`").replace("${", "\\${")


def emit_q(q: dict, q_idx: int, email: bool = False) -> str:
    qid = q.get("id", f"ce{'m' if email else ''}-q{q_idx}")
    text = q["text"]
    text_c = q["textC"]
    img = q.get("img")
    if img is None:
        img = auto_img(text, q.get("imgC", text_c))
    img_c = q.get("imgC", text_c)
    lines = [
        "  q({",
        f'    id: "{qid}",',
        f'    textQ: "{ts_str(q["textQ"])}",',
        f'    text: {json_text_array(text)},',
        f"    textC: {text_c},",
        f'    img: {json_text_array(img)},',
        f"    imgC: {img_c},",
        f'    fillQ: "{ts_str(q["fillQ"])}",',
        f'    fill: "{ts_str(q["fill"])}",',
    ]
    if q.get("fillA"):
        lines.append(f'    fillA: {json_text_array(q["fillA"])},')
    lines.append(f'    vfQ: "{ts_str(q["vfQ"])}",')
    lines.append(f"    vfC: {q['vfC']},")
    lines.append("  }),")
    return "\n".join(lines)


def json_text_array(items: list[str]) -> str:
    inner = ", ".join(f'"{ts_str(x)}"' for x in items)
    return f"[{inner}]"


def emit_message_block(lesson_slug: str, idx: int, text: str, questions: list[dict]) -> str:
    pool_slug = f"{lesson_slug}-{idx}"
    qs = "\n".join(emit_q(q, i + 1) for i, q in enumerate(questions))
    return f"""const CE_TEXT_{idx} = `{text}`;

const CE_POOL_{idx} = buildExpressPool("{pool_slug}", [
{qs}
]);
"""


def emit_email_block(lesson_key: str, idx: int, text: str, questions: list[dict]) -> str:
    prefix = lesson_key.replace("-", "_").upper()
    pool_slug = f"{lesson_key}-ce-email-{idx}"
    qs = "\n".join(emit_q(q, i + 1, email=True) for i, q in enumerate(questions))
    return f"""const {prefix}_CE_EMAIL_TEXT_{idx} = `{text}`;

const {prefix}_CE_EMAIL_POOL_{idx} = buildExpressPool("{pool_slug}", [
{qs}
]);
"""


def emit_message_export(lesson_id: str, count: int = 20) -> str:
    export = lesson_id.replace("-", "_").upper()
    parts = []
    for i in range(1, count + 1):
        parts.append(
            f"""  readingPoolExercise({{
  id: "{lesson_id}-{i}",
  readingText: CE_TEXT_{i},
  questionPool: CE_POOL_{i}
}}),"""
        )
    return f"export const {export}_CE: CommunicationExercise[] = [\n" + "\n".join(parts) + "\n];"


def emit_email_export(lesson_key: str, count: int = 20) -> str:
    export = lesson_key.replace("-", "_").upper()
    parts = []
    for i in range(1, count + 1):
        parts.append(
            f"""  readingPoolExercise({{
  id: "{lesson_key}-ce-email-{i}",
  readingText: {export}_CE_EMAIL_TEXT_{i},
  questionPool: {export}_CE_EMAIL_POOL_{i},
  instruction: "Lisez l'e-mail et répondez aux questions."
}}),"""
        )
    return f"export const {export}_CE_EMAIL: CommunicationExercise[] = [\n" + "\n".join(parts) + "\n];"


def patch_cpe_file(filepath: Path, lesson_id: str, title: str, messages: list[dict]) -> None:
    src = filepath.read_text(encoding="utf-8")
    header_end = src.index("/* ── Compréhension écrite")
    po_start = src.index("/* ── Production orale")
    header = src[:header_end]
    po_rest = src[po_start:]

    blocks = [f"/* ── Compréhension écrite — {title} ── */\n\n"]
    for i, m in enumerate(messages, 1):
        blocks.append(emit_message_block(lesson_id, i, m["text"], m["questions"]))
    blocks.append("\n")
    blocks.append(emit_message_export(lesson_id))
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

    pe_name = f"export const {lesson_key.replace('-', '_').upper()}_PE_EMAIL"
    pe_start = src.index(pe_name, m.end())

    blocks = [src[m.start():m.end()] + "\n\n"]
    for i, em in enumerate(emails, 1):
        blocks.append(emit_email_block(lesson_key, i, em["text"], em["questions"]))
    blocks.append("\n")
    blocks.append(emit_email_export(lesson_key))
    blocks.append("\n\n")

    new_src = src[:start] + "".join(blocks) + src[pe_start:]
    filepath.write_text(new_src, encoding="utf-8")
    print(f"Patched {filepath.name} — {lesson_key}")


def load_module(name: str):
    sys.path.insert(0, str(ROOT / "scripts/data/ce_rewrite"))
    mod = __import__(name)
    return mod.LESSONS


def run_level(level: str) -> None:
    data = load_module(f"e{level}_data")
    for lesson_key, lesson in data.items():
        cpe_file = COMM / f"express-{lesson_key}-cpe.ts"
        patch_cpe_file(cpe_file, lesson_key, lesson["title"], lesson["messages"])
    email_file = COMM / f"express-e{level}-email.ts"
    for lesson_key, lesson in data.items():
        patch_email_lesson(email_file, lesson_key, lesson["title"], lesson["emails"])


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("level", choices=["1", "2", "3", "4", "all"], default="all", nargs="?")
    args = parser.parse_args()
    levels = ["1", "2", "3", "4"] if args.level == "all" else [args.level]
    for lv in levels:
        run_level(lv)


if __name__ == "__main__":
    main()
