#!/usr/bin/env python3
"""Populate content_e9.py … content_e14.py from scenarios_data_e*.py modules."""
from __future__ import annotations

import importlib
import sys
from pathlib import Path

HERE = Path(__file__).parent

for mod in range(9, 15):
    name = f"scenarios_data_e{mod}"
    try:
        m = importlib.import_module(name)
    except ModuleNotFoundError:
        print(f"SKIP {name} (not found)")
        continue
    lessons = m.LESSONS
    out = HERE / f"content_e{mod}.py"
    out.write_text(
        f'"""E{mod} CE content."""\nLESSONS = {repr(lessons)}\n',
        encoding="utf-8",
    )
    n_msg = sum(len(v["messages"]) for v in lessons.values())
    n_em = sum(len(v["emails"]) for v in lessons.values())
    print(f"E{mod}: {n_msg} msg, {n_em} email -> {out.name}")
