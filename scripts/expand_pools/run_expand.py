#!/usr/bin/env python3
"""Expand E5–E8 express pools to 20 items per lesson."""
from __future__ import annotations

import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
COMM = ROOT / "lib/curriculum/content/communication"

sys.path.insert(0, str(Path(__file__).resolve().parent))

from emit import cpe_header, emit_q, emit_po_dialogue, emit_pe_prompt, extract_array_body
from content_all import EXTRA_CE, EXTRA_PO, EXTRA_PE  # triggers content_generator
from patch_email import patch_email_module


def extract_ce_single(content: str, text_var: str = "CE_TEXT", pool_var: str = "CE_POOL") -> tuple[str, str]:
    text_m = re.search(rf"const {text_var} = `([\s\S]*?)`;", content)
    pool_m = re.search(
        rf"const {pool_var} = buildExpressPool\([^,]+,\s*\[([\s\S]*?)\n\]\);",
        content,
    )
    if not text_m or not pool_m:
        raise ValueError(f"Cannot extract CE block ({text_var})")
    return text_m.group(1), pool_m.group(1).strip()


def extract_role_constants(content: str) -> str:
    m = re.search(
        r"(/\* ── Production orale[\s\S]*?)(export const E\d+_\d+_PO)",
        content,
    )
    if not m:
        return ""
    block = m.group(1)
    # Keep only const ROLE = ... lines
    lines = []
    for line in block.split("\n"):
        if line.startswith("const ") and "= {" in line:
            lines.append(line)
    if lines:
        return "\n".join(lines) + "\n\n"
    return ""


def patch_cpe(lesson_key: str, section_comment: str) -> None:
    mod, sub = lesson_key.split("-")
    fname = COMM / f"express-{mod}-{sub}-cpe.ts"
    content = fname.read_text(encoding="utf-8")

    text, pool_body = extract_ce_single(content)
    ce_items: list[dict] = [{"text": text, "pool_body": pool_body}]
    ce_items.extend(EXTRA_CE[lesson_key])

    export_base = lesson_key.upper().replace("-", "_") + "_CE"
    prefix = lesson_key + "-ce"

    parts: list[str] = [cpe_header(), f"/* ── {section_comment} ── */\n"]
    for i, item in enumerate(ce_items, 1):
        pid = f"{prefix}-{i}"
        parts.append(f"const {export_base}_TEXT_{i} = `{item['text']}`;\n")
        if "pool_body" in item:
            parts.append(f'const {export_base}_POOL_{i} = buildExpressPool("{pid}", [')
            parts.append(item["pool_body"])
            parts.append("]);\n")
        else:
            parts.append(f'const {export_base}_POOL_{i} = buildExpressPool("{pid}", [')
            for q in item["questions"]:
                parts.append(emit_q(q))
            parts.append("]);\n")

    parts.append(f"export const {export_base}: CommunicationExercise[] = [")
    for i in range(1, len(ce_items) + 1):
        pid = f"{prefix}-{i}"
        parts.append("  readingPoolExercise({")
        parts.append(f'    id: "{pid}",')
        parts.append(f"    readingText: {export_base}_TEXT_{i},")
        parts.append(f"    questionPool: {export_base}_POOL_{i},")
        parts.append("  }),")
    parts.append("];\n")

    role_section = extract_role_constants(content)
    po_export = export_base.replace("_CE", "_PO")
    po_existing = extract_array_body(content, po_export).rstrip().rstrip(",")
    po_new = "\n".join(emit_po_dialogue(d) for d in EXTRA_PO[lesson_key])

    parts.append(f"/* ── Production orale — dialogues à jouer ──────────────────────────────────── */\n\n")
    parts.append(role_section)
    parts.append(f"export const {po_export}: ExpressPoDialogue[] = [\n{po_existing},\n{po_new}\n];\n")

    pe_export = export_base.replace("_CE", "_PE")
    pe_existing = extract_array_body(content, pe_export).rstrip().rstrip(",")
    pe_new = "\n".join(emit_pe_prompt(p) for p in EXTRA_PE[lesson_key])

    parts.append(f"""
/* ── Production écrite — consignes (A1 : 50 mots minimum) ─────────────────── */

const PE_MIN = 50;
const PE_MAX = 120;

export const {pe_export}: ExpressPePrompt[] = [
{pe_existing},
{pe_new}
];
""")

    fname.write_text("\n".join(parts), encoding="utf-8")
    print(f"  patched {fname.name}")


def patch_lesson(lesson_key: str) -> None:
    mod, sub = lesson_key.split("-")
    fname = COMM / f"express-{mod}-{sub}.ts"
    content = fname.read_text(encoding="utf-8")
    export = lesson_key.upper().replace("-", "_")
    content = content.replace(f"ceExercise: {export}_CE,", f"ceExercises: {export}_CE,")
    content = content.replace(f"ceEmailExercise: {export}_CE_EMAIL,", f"ceEmailExercises: {export}_CE_EMAIL,")
    fname.write_text(content, encoding="utf-8")
    print(f"  wired {fname.name}")


MODULES = {
    "e5": {
        "lessons": [("e5-1", "Compréhension écrite — E5.1 Aller chez le médecin"), ("e5-2", "Compréhension écrite — E5.2 Aller à la pharmacie")],
        "email_nums": ["1", "2"],
    },
    "e6": {
        "lessons": [
            ("e6-1", "Compréhension écrite — E6.1 Demander son chemin"),
            ("e6-2", "Compréhension écrite — E6.2 Voyager en transport public"),
            ("e6-3", "Compréhension écrite — E6.3 Aller à l'aéroport"),
        ],
        "email_nums": ["1", "2", "3"],
    },
    "e7": {
        "lessons": [
            ("e7-1", "Compréhension écrite — E7.1 Aller à l'hôtel"),
            ("e7-2", "Compréhension écrite — E7.2 Pratiquer une activité sportive"),
            ("e7-3", "Compréhension écrite — E7.3 Visiter des lieux culturels"),
        ],
        "email_nums": ["1", "2", "3"],
    },
    "e8": {
        "lessons": [("e8-1", "Compréhension écrite — E8.1 Bilan A1")],
        "email_nums": ["1"],
    },
}


def run_module(module: str) -> None:
    print(f"\n=== Module {module.upper()} ===")
    spec = MODULES[module]
    for lk, comment in spec["lessons"]:
        patch_cpe(lk, comment)
        patch_lesson(lk)
    patch_email_module(module, spec["email_nums"])


if __name__ == "__main__":
    mod = sys.argv[1] if len(sys.argv) > 1 else "all"
    if mod == "all":
        for m in MODULES:
            run_module(m)
    else:
        run_module(mod)
