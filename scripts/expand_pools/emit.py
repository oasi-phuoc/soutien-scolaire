"""TypeScript emission helpers for express pool expansion."""
from __future__ import annotations

import json
import re
from typing import Any


def ts_str(s: str) -> str:
    return json.dumps(s, ensure_ascii=False)


def emit_q(q: dict[str, Any], indent: str = "  ") -> str:
    lines = [f"{indent}q({{"]
    lines.append(f'{indent}  id: {ts_str(q["id"])},')
    lines.append(f'{indent}  textQ: {ts_str(q["textQ"])},')
    lines.append(f'{indent}  text: {json.dumps(q["text"], ensure_ascii=False)},')
    lines.append(f'{indent}  textC: {q["textC"]},')
    img = q.get("img", ["", "", ""])
    lines.append(f'{indent}  img: {json.dumps(img, ensure_ascii=False)},')
    lines.append(f'{indent}  imgC: {q.get("imgC", 0)},')
    lines.append(f'{indent}  fillQ: {ts_str(q["fillQ"])},')
    lines.append(f'{indent}  fill: {ts_str(q["fill"])},')
    if q.get("fillA"):
        lines.append(f'{indent}  fillA: {json.dumps(q["fillA"], ensure_ascii=False)},')
    lines.append(f'{indent}  vfQ: {ts_str(q["vfQ"])},')
    lines.append(f'{indent}  vfC: {q["vfC"]},')
    lines.append(f"{indent}}}),")
    return "\n".join(lines)


def emit_ce_array(export_name: str, prefix: str, items: list[dict[str, Any]], instruction: str | None = None) -> str:
    parts: list[str] = []
    for i, item in enumerate(items, 1):
        pid = f"{prefix}-{i}"
        parts.append(f"const {export_name}_TEXT_{i} = `{item['text']}`;")
        parts.append("")
        parts.append(f"const {export_name}_POOL_{i} = buildExpressPool({ts_str(pid)}, [")
        for q in item["questions"]:
            parts.append(emit_q(q))
        parts.append("]);")
        parts.append("")

    parts.append(f"export const {export_name}: CommunicationExercise[] = [")
    for i in range(1, len(items) + 1):
        pid = f"{prefix}-{i}"
        extra = ""
        if instruction:
            extra = f",\n    instruction: {ts_str(instruction)}"
        parts.append(f"  readingPoolExercise({{")
        parts.append(f"    id: {ts_str(pid)},")
        parts.append(f"    readingText: {export_name}_TEXT_{i},")
        parts.append(f"    questionPool: {export_name}_POOL_{i}{extra},")
        parts.append(f"  }}),")
    parts.append("];")
    return "\n".join(parts)


def emit_po_dialogue(d: dict[str, Any]) -> str:
    lines = [
        "  {",
        f'    id: {ts_str(d["id"])},',
        f'    title: {ts_str(d["title"])},',
        f'    context: {ts_str(d["context"])},',
        f'    roleA: {emit_role(d["roleA"])},',
        f'    roleB: {emit_role(d["roleB"])},',
        "    lines: [",
    ]
    for line in d["lines"]:
        lines.append(f'      {{ role: {ts_str(line["role"])}, text: {ts_str(line["text"])} }},')
    lines.append("    ],")
    lines.append("  },")
    return "\n".join(lines)


def emit_role(r: dict[str, str] | str) -> str:
    if isinstance(r, str):
        return r
    return f'{{ title: {ts_str(r["title"])}, vous: {ts_str(r["vous"])} }}'


def emit_pe_prompt(p: dict[str, Any]) -> str:
    lines = [
        "  {",
        f'    id: {ts_str(p["id"])},',
        f'    title: {ts_str(p["title"])},',
        f'    situation: {ts_str(p["situation"])},',
    ]
    if p.get("sourceMessage"):
        sm = p["sourceMessage"]
        lines.append("    sourceMessage: {")
        if sm.get("from"):
            lines.append(f'      from: {ts_str(sm["from"])},')
        if sm.get("subject"):
            lines.append(f'      subject: {ts_str(sm["subject"])},')
        lines.append(f'      body: {ts_str(sm["body"])},')
        lines.append("    },")
    lines.append(f'    instruction: {ts_str(p["instruction"])},')
    lines.append(f'    points: {json.dumps(p["points"], ensure_ascii=False)},')
    lines.append(f'    minWords: {p["minWords"]},')
    lines.append(f'    maxWords: {p["maxWords"]},')
    lines.append("  },")
    return "\n".join(lines)


def po_close() -> list[dict[str, str]]:
    return [
        {"role": "A", "text": "Ravi(e) de faire votre connaissance."},
        {"role": "B", "text": "Moi aussi. À bientôt !"},
    ]


def make_po(
    pid: str,
    title: str,
    context: str,
    role_a: dict[str, str] | str,
    role_b: dict[str, str] | str,
    exchanges: list[tuple[str, str]],
) -> dict[str, Any]:
    """exchanges: list of (A_text, B_text) — padded to 4 pairs + close = 10 lines."""
    pairs = list(exchanges)
    fillers = [
        ("Très bien.", "Merci beaucoup."),
        ("Je vous en prie.", "Au revoir !"),
        ("Bonne journée !", "Merci, à bientôt !"),
        ("Parfait.", "C'est noté, merci."),
    ]
    fi = 0
    while len(pairs) < 4:
        pairs.append(fillers[fi % len(fillers)])
        fi += 1
    lines: list[dict[str, str]] = []
    for a, b in pairs:
        lines.append({"role": "A", "text": a})
        lines.append({"role": "B", "text": b})
    lines.extend(po_close())
    return {
        "id": pid,
        "title": title,
        "context": context,
        "roleA": role_a,
        "roleB": role_b,
        "lines": lines,
    }


def extract_array_body(content: str, export_name: str) -> str:
    """Inner elements of export const NAME: Type[] = [...] (without brackets)."""
    pattern = rf"export const {re.escape(export_name)}(?::[^=]+)?\s*=\s*\["
    m = re.search(pattern, content)
    if not m:
        raise ValueError(f"Cannot find export {export_name}")
    start = m.end()
    depth = 1
    i = start
    while i < len(content) and depth > 0:
        if content[i] == "[":
            depth += 1
        elif content[i] == "]":
            depth -= 1
        i += 1
    return content[start : i - 1].strip()


def extract_export_array(content: str, export_name: str) -> str:
    """Extract raw array body for export const NAME: Type[] = [...]"""
    pattern = rf"export const {re.escape(export_name)}(?::[^=]+)?\s*=\s*\["
    m = re.search(pattern, content)
    if not m:
        raise ValueError(f"Cannot find export {export_name}")
    start = m.end()
    depth = 1
    i = start
    while i < len(content) and depth > 0:
        if content[i] == "[":
            depth += 1
        elif content[i] == "]":
            depth -= 1
        i += 1
    return content[m.start():i]


def extract_between_markers(content: str, start_marker: str, end_marker: str) -> str:
    s = content.index(start_marker)
    e = content.index(end_marker, s)
    return content[s:e]


def cpe_header() -> str:
    return """import {
  readingPoolExercise,
  type CommunicationExercise,
  type ExpressPoDialogue,
  type ExpressPePrompt,
} from "./express-types";
import { buildExpressPool, type ExpressRawQ } from "./express-listening-helpers";

function q(item: ExpressRawQ): ExpressRawQ {
  return item;
}

"""


def email_header() -> str:
    return """import {
  readingPoolExercise,
  type CommunicationExercise,
  type ExpressPePrompt,
} from "./express-types";
import { buildExpressPool, type ExpressRawQ } from "./express-listening-helpers";

function q(item: ExpressRawQ): ExpressRawQ {
  return item;
}

const PE_MIN = 50;
const PE_MAX = 120;

"""
