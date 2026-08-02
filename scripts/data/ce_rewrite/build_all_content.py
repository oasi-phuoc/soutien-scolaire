#!/usr/bin/env python3
"""Build and patch CE content for Express E1–E4 from structured lesson data."""
from __future__ import annotations

import importlib.util
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[3]
sys.path.insert(0, str(ROOT / "scripts"))
sys.path.insert(0, str(ROOT / "scripts/data/ce_rewrite"))

from rewrite_ce_e1_e4 import patch_cpe_file, patch_email_lesson  # noqa: E402

COMM = ROOT / "lib/curriculum/content/communication"

BUILDERS = {
    "1": ("scenarios_e1", COMM / "express-e1-email.ts"),
    "2": ("scenarios_e2", COMM / "express-e2-email.ts"),
    "3": ("scenarios_e3", COMM / "express-e3-email.ts"),
    "4": ("scenarios_e4", COMM / "express-e4-email.ts"),
}


def load_lessons(module_name: str):
    spec = importlib.util.spec_from_file_location(
        module_name,
        ROOT / "scripts/data/ce_rewrite" / f"{module_name}.py",
    )
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod.build_e1_lessons() if module_name == "scenarios_e1" else (
        mod.build_e2_lessons() if module_name == "scenarios_e2" else (
            mod.build_e3_lessons() if module_name == "scenarios_e3" else mod.build_e4_lessons()
        )
    )


def patch_level(level: str) -> None:
    module_name, email_path = BUILDERS[level]
    lessons = load_lessons(module_name)
    for lesson_key, lesson in lessons.items():
        cpe_path = COMM / f"express-{lesson_key}-cpe.ts"
        patch_cpe_file(cpe_path, lesson_key, lesson["title"], lesson["messages"])
        patch_email_lesson(email_path, lesson_key, lesson["title"], lesson["emails"])
    print(f"Level E{level} complete.")


def main() -> None:
    import argparse

    p = argparse.ArgumentParser()
    p.add_argument("level", nargs="?", default="all", choices=["1", "2", "3", "4", "all"])
    args = p.parse_args()
    levels = ["1", "2", "3", "4"] if args.level == "all" else [args.level]
    for lv in levels:
        patch_level(lv)


if __name__ == "__main__":
    main()
