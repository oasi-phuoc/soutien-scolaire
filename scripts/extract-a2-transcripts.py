#!/usr/bin/env python3
# -*- coding: utf-8 -*-
from pathlib import Path
import re
import json

text = Path("/tmp/express-a2-gen/corriges.txt").read_text(errors="replace")
lines = text.splitlines()
blocks = []
i = 0
while i < len(lines):
    if "Transcription" in lines[i]:
        prev = " ".join(lines[max(0, i - 5) : i + 1])
        nums = re.findall(r"\b(\d{1,3})\b", prev)
        j = i + 1
        buf = []
        while j < len(lines) and j < i + 45:
            l = lines[j].strip()
            if "Transcription" in l or l.startswith("--- Page") or "CORRIGÉS" in l:
                break
            if re.match(r"^[a-e]\.\s", l) and buf:
                break
            if l.startswith("-") or (buf and l and not re.match(r"^[a-e]\.\s", l)):
                # skip OCR garbage answer fragments mixed in
                if re.match(r"^[a-e]\.\s", l):
                    break
                buf.append(l)
            elif buf and l == "":
                # allow one blank then stop if next isn't dialogue
                pass
            j += 1
            if len(buf) > 30:
                break
        dialogue = [b for b in buf if b.startswith("-") or (len(b) > 20 and not b.startswith("a."))]
        if dialogue:
            blocks.append({"nums": nums[-6:], "lines": dialogue[:25]})
        i = j
    else:
        i += 1

out = Path("/tmp/express-a2-gen/blocks.json")
out.write_text(json.dumps(blocks, ensure_ascii=False, indent=2))
print(f"Wrote {len(blocks)} blocks to {out}")
for b in blocks[:40]:
    print("NUMS", b["nums"], "->", b["lines"][0][:70])
