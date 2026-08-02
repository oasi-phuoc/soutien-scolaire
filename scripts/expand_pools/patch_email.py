#!/usr/bin/env python3
"""Patch express email files for pool expansion."""
from __future__ import annotations

import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
COMM = ROOT / "lib/curriculum/content/communication"
sys.path.insert(0, str(Path(__file__).resolve().parent))

from emit import emit_q, email_header, emit_pe_prompt, extract_array_body
from content_all import EXTRA_CE_EMAIL, EXTRA_PE_EMAIL


def extract_ce_single(content: str, text_var: str, pool_var: str) -> tuple[str, str]:
    text_m = re.search(rf"const {re.escape(text_var)} = `([\s\S]*?)`;", content)
    pool_m = re.search(
        rf"const {re.escape(pool_var)} = buildExpressPool\([^,]+,\s*\[([\s\S]*?)\n\]\);",
        content,
    )
    if not text_m or not pool_m:
        raise ValueError(f"Cannot extract {text_var}")
    return text_m.group(1), pool_m.group(1).strip()


def export_names(module: str, num: str) -> tuple[str, str, str, str]:
    """e5, 1 -> E5_1_CE_EMAIL, E5_1_CE_EMAIL_TEXT, E5_1_CE_EMAIL_POOL, E5_1_PE_EMAIL"""
    base = f"E{module[1]}_{num}"
    return f"{base}_CE_EMAIL", f"{base}_CE_EMAIL_TEXT", f"{base}_CE_EMAIL_POOL", f"{base}_PE_EMAIL"


def patch_email_module(module: str, lesson_nums: list[str]) -> None:
    fname = COMM / f"express-{module}-email.ts"
    content = fname.read_text(encoding="utf-8")
    out: list[str] = [email_header()]

    for num in lesson_nums:
        lk = f"{module}-{num}"
        export, text_var, pool_var, pe_export = export_names(module, num)

        sec_start = content.find(f"const {text_var}")
        if sec_start < 0:
            raise ValueError(f"Section not found: {text_var} in {fname.name}")
        sec_header_start = content.rfind("/* ═", 0, sec_start)
        sec_header = content[sec_header_start:sec_start]

        pe_start = content.find(f"export const {pe_export}", sec_start)
        block = content[sec_start:pe_start]
        text, pool_body = extract_ce_single(block, text_var, pool_var)

        items: list[dict] = [{"text": text, "pool_body": pool_body}]
        items.extend(EXTRA_CE_EMAIL[lk])

        out.append(sec_header)
        prefix = f"{lk}-ce-email"
        for i, item in enumerate(items, 1):
            pid = f"{prefix}-{i}"
            out.append(f"const {export}_TEXT_{i} = `{item['text']}`;\n")
            if "pool_body" in item:
                out.append(f'const {export}_POOL_{i} = buildExpressPool("{pid}", [')
                out.append(item["pool_body"])
                out.append("]);\n")
            else:
                out.append(f'const {export}_POOL_{i} = buildExpressPool("{pid}", [')
                for q in item["questions"]:
                    out.append(emit_q(q))
                out.append("]);\n")

        out.append(f"export const {export}: CommunicationExercise[] = [")
        for i in range(1, len(items) + 1):
            pid = f"{prefix}-{i}"
            out.append("  readingPoolExercise({")
            out.append(f'    id: "{pid}",')
            out.append(f"    readingText: {export}_TEXT_{i},")
            out.append(f"    questionPool: {export}_POOL_{i},")
            out.append('    instruction: "Lisez l\'e-mail et répondez aux questions.",')
            out.append("  }),")
        out.append("];\n")

        pe_existing = extract_array_body(content, pe_export).rstrip().rstrip(",")
        pe_new = "\n".join(emit_pe_prompt(p) for p in EXTRA_PE_EMAIL[lk])
        out.append(f"export const {pe_export}: ExpressPePrompt[] = [\n{pe_existing},\n{pe_new}\n];\n\n")

    fname.write_text("\n".join(out), encoding="utf-8")
    print(f"  patched {fname.name}")
