#!/usr/bin/env python3
"""Expand E9–E14 communication pools: CE×20, CE email×20, PO×20, PE×20, PE email×20."""
from __future__ import annotations

import json
import re
import sys
from pathlib import Path
from textwrap import dedent

ROOT = Path(__file__).resolve().parents[1]
COMM = ROOT / "lib/curriculum/content/communication"
sys.path.insert(0, str(ROOT / "scripts"))
from expand_comm_pool_data import EXPANSIONS  # noqa: E402


def esc(s: str) -> str:
    return s.replace("\\", "\\\\").replace("`", "\\`").replace("${", "\\${")


def render_q(qid: str, spec: dict) -> str:
    lines = ["  q({", f'    id: "{qid}",']
    lines.append(f'    textQ: {json.dumps(spec["textQ"], ensure_ascii=False)},')
    lines.append(f'    text: {json.dumps(spec["text"], ensure_ascii=False)},')
    lines.append(f'    textC: {spec["textC"]},')
    img = spec.get("img", ["", "", ""])
    lines.append(f'    img: {json.dumps(img, ensure_ascii=False)},')
    lines.append(f'    imgC: {spec.get("imgC", 0)},')
    lines.append(f'    fillQ: {json.dumps(spec["fillQ"], ensure_ascii=False)},')
    lines.append(f'    fill: {json.dumps(spec["fill"], ensure_ascii=False)},')
    if spec.get("fillA"):
        lines.append(f'    fillA: {json.dumps(spec["fillA"], ensure_ascii=False)},')
    lines.append(f'    vfQ: {json.dumps(spec["vfQ"], ensure_ascii=False)},')
    lines.append(f'    vfC: {spec.get("vfC", 0)},')
    lines.append("  }),")
    return "\n".join(lines)


def render_pool_var(var_name: str, slug: str, questions: list[dict]) -> str:
    qs = "\n".join(render_q(f"ce-q{i}", q) for i, q in enumerate(questions, 1))
    return f"const {var_name} = buildExpressPool(\"{slug}\", [\n{qs}\n]);"


def render_ce_extra_constants(prefix: str, extras: list[dict]) -> str:
    upper = prefix.replace("-", "_").upper()
    parts = []
    for i, e in enumerate(extras, 2):
        slug = e.get("slug", f"{prefix}-ce-{i}")
        text_var = f"{upper}_CE_{i}_TEXT"
        pool_var = f"{upper}_CE_{i}_POOL"
        parts.append(f"\nconst {text_var} = `{esc(e['text'])}`;")
        parts.append(render_pool_var(pool_var, slug, e["questions"]))
    return "\n".join(parts)


def render_ce_array_export(prefix: str, count: int) -> str:
    upper = prefix.replace("-", "_").upper()
    items = []
    for i in range(1, count + 1):
        if i == 1:
            slug = f"{prefix}-ce"
            text_v = f"{upper}_CE_TEXT"
            pool_v = f"{upper}_CE_POOL"
        else:
            slug = f"{prefix}-ce-{i}"
            text_v = f"{upper}_CE_{i}_TEXT"
            pool_v = f"{upper}_CE_{i}_POOL"
        items.append(dedent(f"""\
  readingPoolExercise({{
    id: "{slug}",
    readingText: {text_v},
    questionPool: {pool_v},
  }})"""))
    return f"export const {upper}_CE: CommunicationExercise[] = [\n" + ",\n".join(items) + ",\n];"


def render_ce_email_extra_constants(prefix: str, extras: list[dict]) -> str:
    upper = prefix.replace("-", "_").upper()
    parts = []
    for i, e in enumerate(extras, 2):
        slug = e.get("slug", f"{prefix}-ce-email-{i}")
        text_var = f"{upper}_CE_EMAIL_{i}_TEXT"
        pool_var = f"{upper}_CE_EMAIL_{i}_POOL"
        parts.append(f"\nconst {text_var} = `{esc(e['text'])}`;")
        parts.append(render_pool_var(pool_var, slug, e["questions"]))
    return "\n".join(parts)


def render_ce_email_array_export(prefix: str, count: int) -> str:
    upper = prefix.replace("-", "_").upper()
    items = []
    for i in range(1, count + 1):
        if i == 1:
            slug = f"{prefix}-ce-email"
            text_v = f"{upper}_CE_EMAIL_TEXT"
            pool_v = f"{upper}_CE_EMAIL_POOL"
            instr = ',\n  instruction: "Lisez l\'e-mail et répondez aux questions."'
        else:
            slug = f"{prefix}-ce-email-{i}"
            text_v = f"{upper}_CE_EMAIL_{i}_TEXT"
            pool_v = f"{upper}_CE_EMAIL_{i}_POOL"
            instr = ""
        items.append(dedent(f"""\
  readingPoolExercise({{
    id: "{slug}",
    readingText: {text_v},
    questionPool: {pool_v}{instr}
  }})"""))
    return f"export const {upper}_CE_EMAIL: CommunicationExercise[] = [\n" + ",\n".join(items) + ",\n];"


def render_po_dialogue(d: dict) -> str:
    lines = "\n".join(
        f'      {{ role: "{l["role"]}", text: {json.dumps(l["text"], ensure_ascii=False)} }},'
        for l in d["lines"]
    )
    ra, rb = d["roleA"], d["roleB"]
    return dedent(f"""\
  {{
    id: "{d['id']}",
    title: {json.dumps(d['title'], ensure_ascii=False)},
    context: {json.dumps(d['context'], ensure_ascii=False)},
    roleA: {{ title: {json.dumps(ra['title'], ensure_ascii=False)}, vous: {json.dumps(ra['vous'], ensure_ascii=False)} }},
    roleB: {{ title: {json.dumps(rb['title'], ensure_ascii=False)}, vous: {json.dumps(rb['vous'], ensure_ascii=False)} }},
    lines: [
{lines}
    ],
  }}""")


def render_pe_prompt(p: dict) -> str:
    src = ""
    if p.get("sourceMessage"):
        sm = p["sourceMessage"]
        src = dedent(f"""\
    sourceMessage: {{
      from: {json.dumps(sm.get('from', ''), ensure_ascii=False)},
      subject: {json.dumps(sm.get('subject', ''), ensure_ascii=False)},
      body: {json.dumps(sm['body'], ensure_ascii=False)},
    }},""")
    return dedent(f"""\
  {{
    id: "{p['id']}",
    title: {json.dumps(p['title'], ensure_ascii=False)},
    situation: {json.dumps(p['situation'], ensure_ascii=False)},
{src}    instruction: {json.dumps(p['instruction'], ensure_ascii=False)},
    points: {json.dumps(p['points'], ensure_ascii=False)},
    minWords: PE_MIN,
    maxWords: PE_MAX,
  }}""")


def expand_array_section(text: str, export_name: str, extras: list, renderer) -> str:
    pat = rf"export const {export_name}: [^\[]+\[([\s\S]*?)\];"
    m = re.search(pat, text)
    if not m:
        print(f"WARN: {export_name} not found")
        return text
    existing = m.group(1).rstrip().rstrip(",")
    extra = ",\n".join(renderer(x) for x in extras)
    new_block = f"export const {export_name}: CommunicationExercise[] = [\n{existing},\n{extra}\n];" if "CE" in export_name and False else ""
    # Fix: handle PO/PE arrays
    if "PO" in export_name or "PE" in export_name:
        new_block = f"export const {export_name} = [\n{existing},\n{extra}\n];"
        # preserve type annotation
        type_pat = rf"export const ({export_name}): ([^\[]+)\["
        tm = re.search(type_pat, text)
        if tm:
            new_block = f"export const {export_name}: {tm.group(2).strip()}[] = [\n{existing},\n{extra}\n];"
    return text[:m.start()] + new_block + text[m.end():]


def transform_cpe_file(mod: int) -> None:
    path = COMM / f"express-e{mod}-cpe.ts"
    text = path.read_text(encoding="utf-8")

    for key, data in EXPANSIONS.items():
        if not key.startswith(f"e{mod}-"):
            continue
        upper = key.replace("-", "_").upper()
        extras = data.get("ce_extra", [])
        if extras:
            # Replace single export with array + insert extra constants
            old_export = rf"export const {upper}_CE: CommunicationExercise = readingPoolExercise\(\{{[\s\S]*?\}}\);"
            extra_consts = render_ce_extra_constants(key, extras)
            new_export = render_ce_array_export(key, 1 + len(extras))
            text, n = re.subn(old_export, extra_consts + "\n\n" + new_export, text, count=1)
            if n == 0:
                # maybe already expanded
                if f"{upper}_CE: CommunicationExercise[]" in text:
                    print(f"SKIP CE already expanded: {key}")
                else:
                    print(f"WARN CE not replaced: {key}")

        po_export = f"{upper}_PO"
        po_pat = rf"export const {po_export}: ExpressPoDialogue\[\] = \[([\s\S]*?)\];"
        po_m = re.search(po_pat, text)
        if po_m and data.get("po_extra"):
            existing = po_m.group(1).rstrip().rstrip(",")
            extra = ",\n".join(render_po_dialogue(d) for d in data["po_extra"])
            new_po = f"export const {po_export}: ExpressPoDialogue[] = [\n{existing},\n{extra}\n];"
            text = text[:po_m.start()] + new_po + text[po_m.end():]

        pe_export = f"{upper}_PE"
        pe_pat = rf"export const {pe_export}: ExpressPePrompt\[\] = \[([\s\S]*?)\];"
        pe_m = re.search(pe_pat, text)
        if pe_m and data.get("pe_extra"):
            existing = pe_m.group(1).rstrip().rstrip(",")
            extra = ",\n".join(render_pe_prompt(p) for p in data["pe_extra"])
            new_pe = f"export const {pe_export}: ExpressPePrompt[] = [\n{existing},\n{extra}\n];"
            text = text[:pe_m.start()] + new_pe + text[pe_m.end():]

    path.write_text(text, encoding="utf-8")
    print(f"Updated {path.name}")


def transform_email_file(mod: int) -> None:
    path = COMM / f"express-e{mod}-email.ts"
    text = path.read_text(encoding="utf-8")

    for key, data in EXPANSIONS.items():
        if not key.startswith(f"e{mod}-"):
            continue
        upper = key.replace("-", "_").upper()
        extras = data.get("ce_email_extra", [])
        if extras:
            old_export = rf"export const {upper}_CE_EMAIL: CommunicationExercise = readingPoolExercise\(\{{[\s\S]*?\}}\);"
            extra_consts = render_ce_email_extra_constants(key, extras)
            new_export = render_ce_email_array_export(key, 1 + len(extras))
            text, n = re.subn(old_export, extra_consts + "\n\n" + new_export, text, count=1)
            if n == 0:
                if f"{upper}_CE_EMAIL: CommunicationExercise[]" in text:
                    print(f"SKIP CE_EMAIL already expanded: {key}")
                else:
                    print(f"WARN CE_EMAIL not replaced: {key}")

        pee_export = f"{upper}_PE_EMAIL"
        pee_pat = rf"export const {pee_export}: ExpressPePrompt\[\] = \[([\s\S]*?)\];"
        pee_m = re.search(pee_pat, text)
        if pee_m and data.get("pe_email_extra"):
            existing = pee_m.group(1).rstrip().rstrip(",")
            extra = ",\n".join(render_pe_prompt(p) for p in data["pe_email_extra"])
            new_pee = f"export const {pee_export}: ExpressPePrompt[] = [\n{existing},\n{extra}\n];"
            text = text[:pee_m.start()] + new_pee + text[pee_m.end():]

    path.write_text(text, encoding="utf-8")
    print(f"Updated {path.name}")


def wire_lesson_file(mod: int) -> None:
    path = COMM / f"express-e{mod}.ts"
    text = path.read_text(encoding="utf-8")
    text = text.replace("ceExercise:", "ceExercises:")
    text = text.replace("ceEmailExercise:", "ceEmailExercises:")
    path.write_text(text, encoding="utf-8")
    print(f"Wired {path.name}")


def main():
    mods = [int(m) for m in sys.argv[1:]] if len(sys.argv) > 1 else [9, 10, 11, 12, 13, 14]
    for mod in mods:
        transform_cpe_file(mod)
        transform_email_file(mod)
        wire_lesson_file(mod)


if __name__ == "__main__":
    main()
