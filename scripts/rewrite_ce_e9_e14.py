#!/usr/bin/env python3
"""Rewrite CE message + CE email sections for Express E9–E14 lessons."""
from __future__ import annotations

import importlib
import argparse
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
COMM = ROOT / "lib/curriculum/content/communication"
DATA_DIR = ROOT / "scripts/data/ce_rewrite"

sys.path.insert(0, str(DATA_DIR))

EMPTY_IMG = ["", "", ""]

PROFESSION_IMG = {
    "cuisinier": "cuisinier", "cuisinière": "cuisinier", "architecte": "architecte",
    "infirmier": "infirmier", "infirmière": "infirmier", "vendeur": "vendeur",
    "vendeuse": "vendeur", "mécanicien": "mécanicien", "coiffeur": "coiffeur",
    "coiffeuse": "coiffeuse", "journaliste": "journaliste", "secrétaire": "secrétaire",
    "professeur": "professeur", "professeure": "professeur", "chauffeur": "chauffeur",
    "électricien": "électricien", "boulanger": "boulanger", "boulangère": "boulanger",
    "serveur": "serveur", "serveuse": "serveur", "médecin": "médecin",
    "pharmacien": "pharmacien", "plombier": "plombier", "facteur": "facteur",
    "pompier": "pompier", "policier": "policier", "jardinier": "jardinier",
    "menuisier": "menuisier", "peintre": "peintre", "dentiste": "dentiste",
    "vétérinaire": "vétérinaire", "libraire": "libraire", "agriculteur": "agriculteur",
    "pharmacienne": "pharmacien", "avocat": "avocat",
}

TRANSPORT_IMG = {
    "train": "train", "avion": "avion", "voiture": "voiture",
    "vélo": "vélo", "velo": "vélo", "bus": "bus", "métro": "métro", "metro": "métro",
}


def ts_str(s: str) -> str:
    return s.replace("\\", "\\\\").replace("`", "\\`").replace("${", "\\${")


def auto_img(text_choices: list[str]) -> list[str]:
    imgs: list[str] = []
    for t in text_choices:
        k = t.strip().lower()
        if k in PROFESSION_IMG:
            imgs.append(PROFESSION_IMG[k])
        elif k in TRANSPORT_IMG:
            imgs.append(TRANSPORT_IMG[k])
        else:
            for label, img in {**PROFESSION_IMG, **TRANSPORT_IMG}.items():
                if label in k:
                    imgs.append(img)
                    break
            else:
                return EMPTY_IMG
    return imgs if len(set(imgs)) == 3 else EMPTY_IMG


def emit_q(q: dict, q_idx: int, email: bool = False) -> str:
    qid = q.get("id", f"ce{'m' if email else ''}-q{q_idx}")
    text = q["text"]
    text_c = q["textC"]
    img = q.get("img")
    if img is None:
        img = auto_img(text)
    img_c = q.get("imgC", text_c)
    lines = [
        "  q({",
        f'    id: "{qid}",',
        f'    textQ: {json.dumps(q["textQ"], ensure_ascii=False)},',
        f'    text: {json.dumps(text, ensure_ascii=False)},',
        f"    textC: {text_c},",
        f'    img: {json.dumps(img, ensure_ascii=False)},',
        f"    imgC: {img_c},",
        f'    fillQ: {json.dumps(q["fillQ"], ensure_ascii=False)},',
        f'    fill: {json.dumps(q["fill"], ensure_ascii=False)},',
    ]
    if q.get("fillA"):
        lines.append(f'    fillA: {json.dumps(q["fillA"], ensure_ascii=False)},')
    lines.append(f'    vfQ: {json.dumps(q["vfQ"], ensure_ascii=False)},')
    lines.append(f"    vfC: {q['vfC']},")
    lines.append("  }),")
    return "\n".join(lines)


def emit_ce_constants(prefix: str, slug_base: str, items: list[dict]) -> str:
    parts: list[str] = []
    for i, item in enumerate(items, 1):
        suffix = "" if i == 1 else f"_{i}"
        slug = slug_base if i == 1 else f"{slug_base}-{i}"
        text_var = f"{prefix}_CE{suffix}_TEXT"
        pool_var = f"{prefix}_CE{suffix}_POOL"
        qs = "\n".join(emit_q(q, j + 1) for j, q in enumerate(item["questions"]))
        parts.append(f"const {text_var} = `{ts_str(item['text'])}`;")
        parts.append(f"const {pool_var} = buildExpressPool(\"{slug}\", [\n{qs}\n]);")
    return "\n\n".join(parts)


def emit_ce_export(prefix: str, slug_base: str, count: int = 20) -> str:
    items = []
    for i in range(1, count + 1):
        suffix = "" if i == 1 else f"_{i}"
        slug = slug_base if i == 1 else f"{slug_base}-{i}"
        items.append(
            f"""readingPoolExercise({{
  id: "{slug}",
  readingText: {prefix}_CE{suffix}_TEXT,
  questionPool: {prefix}_CE{suffix}_POOL,
}})"""
        )
    return f"export const {prefix}_CE: CommunicationExercise[] = [\n" + ",\n".join(items) + ",\n];"


def emit_ce_email_constants(prefix: str, slug_base: str, items: list[dict]) -> str:
    parts: list[str] = []
    for i, item in enumerate(items, 1):
        suffix = "" if i == 1 else f"_{i}"
        slug = slug_base if i == 1 else f"{slug_base}-{i}"
        text_var = f"{prefix}_CE_EMAIL{suffix}_TEXT"
        pool_var = f"{prefix}_CE_EMAIL{suffix}_POOL"
        qs = "\n".join(emit_q(q, j + 1, email=True) for j, q in enumerate(item["questions"]))
        parts.append(f"const {text_var} = `{ts_str(item['text'])}`;")
        parts.append(f"const {pool_var} = buildExpressPool(\"{slug}\", [\n{qs}\n]);")
    return "\n\n".join(parts)


def emit_ce_email_export(prefix: str, slug_base: str, count: int = 20) -> str:
    items = []
    for i in range(1, count + 1):
        suffix = "" if i == 1 else f"_{i}"
        slug = slug_base if i == 1 else f"{slug_base}-{i}"
        instr = (
            ',\n  instruction: "Lisez l\'e-mail et répondez aux questions."'
            if i == 1
            else ""
        )
        items.append(
            f"""readingPoolExercise({{
  id: "{slug}",
  readingText: {prefix}_CE_EMAIL{suffix}_TEXT,
  questionPool: {prefix}_CE_EMAIL{suffix}_POOL{instr}
}})"""
        )
    return f"export const {prefix}_CE_EMAIL: CommunicationExercise[] = [\n" + ",\n".join(items) + ",\n];"


ROLE_BLOCK_RE = re.compile(
    r"(\n(?:const [A-Z][A-Z0-9_]* = \{ title: \"[^\"]*\", vous: \"[^\"]*\" \};\n?)+)\s*$"
)


def patch_cpe_sublesson(content: str, lesson_label: str, prefix: str, ce_block: str) -> str:
    section_re = rf"/\* ═+[\s\S]*?{re.escape(lesson_label)}[\s\S]*?══ \*/"
    m = re.search(section_re, content)
    if not m:
        raise ValueError(f"Section {lesson_label} not found")
    rest = content[m.end():]
    po_m = re.search(rf"\nexport const {prefix}_PO", rest)
    if not po_m:
        raise ValueError(f"PO section for {prefix} not found after {lesson_label}")
    before_po = rest[: po_m.start()]
    role_m = ROLE_BLOCK_RE.search(before_po)
    role_block = role_m.group(1) if role_m else ""
    tail = role_block + rest[po_m.start() :]
    return content[: m.end()] + "\n\n" + ce_block + "\n" + tail


def patch_email_sublesson(content: str, lesson_label: str, prefix: str, ce_block: str) -> str:
    section_re = rf"/\* ═+[\s\S]*?{re.escape(lesson_label)}[\s\S]*?══ \*/"
    m = re.search(section_re, content)
    if not m:
        raise ValueError(f"Section {lesson_label} not found in email")
    start = m.start()
    em = re.search(rf"\nexport const {prefix}_PE_EMAIL", content[m.end():])
    if not em:
        raise ValueError(f"PE_EMAIL for {prefix} not found")
    end = m.end() + em.start()
    return content[:start] + m.group(0) + "\n\n" + ce_block + "\n" + content[end:]


LESSON_MAP = {
    "e9-1": ("E9.1", "E9_1", "e9-1"),
    "e9-2": ("E9.2", "E9_2", "e9-2"),
    "e9-3": ("E9.3", "E9_3", "e9-3"),
    "e9-4": ("E9.4", "E9_4", "e9-4"),
    "e9-5": ("E9.5", "E9_5", "e9-5"),
    "e10-1": ("E10.1", "E10_1", "e10-1"),
    "e10-2": ("E10.2", "E10_2", "e10-2"),
    "e10-3": ("E10.3", "E10_3", "e10-3"),
    "e10-4": ("E10.4", "E10_4", "e10-4"),
    "e10-5": ("E10.5", "E10_5", "e10-5"),
    "e11-1": ("E11.1", "E11_1", "e11-1"),
    "e11-2": ("E11.2", "E11_2", "e11-2"),
    "e11-3": ("E11.3", "E11_3", "e11-3"),
    "e11-4": ("E11.4", "E11_4", "e11-4"),
    "e12-1": ("E12.1", "E12_1", "e12-1"),
    "e12-2": ("E12.2", "E12_2", "e12-2"),
    "e12-3": ("E12.3", "E12_3", "e12-3"),
    "e12-4": ("E12.4", "E12_4", "e12-4"),
    "e12-5": ("E12.5", "E12_5", "e12-5"),
    "e13-1": ("E13.1", "E13_1", "e13-1"),
    "e13-2": ("E13.2", "E13_2", "e13-2"),
    "e13-3": ("E13.3", "E13_3", "e13-3"),
    "e13-4": ("E13.4", "E13_4", "e13-4"),
    "e13-5": ("E13.5", "E13_5", "e13-5"),
    "e14-1": ("E14.1", "E14_1", "e14-1"),
}


def load_lessons(module: int) -> dict:
    mod = importlib.import_module(f"scenarios_e{module}")
    return mod.LESSONS


def patch_module(module: int) -> None:
    lessons = load_lessons(module)
    cpe_path = COMM / f"express-e{module}-cpe.ts"
    email_path = COMM / f"express-e{module}-email.ts"
    cpe = cpe_path.read_text(encoding="utf-8")
    email = email_path.read_text(encoding="utf-8")

    for key, lesson in lessons.items():
        label, prefix, slug = LESSON_MAP[key]
        msgs = lesson["messages"]
        emails = lesson["emails"]
        assert len(msgs) == 20, f"{key}: {len(msgs)} messages"
        assert len(emails) == 20, f"{key}: {len(emails)} emails"

        ce_block = emit_ce_constants(prefix, f"{slug}-ce", msgs)
        ce_block += "\n\n" + emit_ce_export(prefix, f"{slug}-ce", 20)
        cpe = patch_cpe_sublesson(cpe, label, prefix, ce_block)

        email_block = emit_ce_email_constants(prefix, f"{slug}-ce-email", emails)
        email_block += "\n\n" + emit_ce_email_export(prefix, f"{slug}-ce-email", 20)
        email = patch_email_sublesson(email, label, prefix, email_block)
        print(f"  {key}: 20 msg + 20 email")

    cpe_path.write_text(cpe, encoding="utf-8")
    email_path.write_text(email, encoding="utf-8")
    print(f"Patched express-e{module}-cpe.ts and express-e{module}-email.ts")


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("modules", nargs="*", type=int, default=list(range(9, 15)))
    args = parser.parse_args()
    for mod in args.modules:
        print(f"E{mod}...")
        patch_module(mod)


if __name__ == "__main__":
    main()
