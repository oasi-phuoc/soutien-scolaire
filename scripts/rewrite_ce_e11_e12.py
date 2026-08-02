#!/usr/bin/env python3
"""Rewrite CE message + CE email sections for Express E11 and E12."""
from __future__ import annotations

from rewrite_ce_e9_e14 import patch_module


def main() -> None:
    for module in (11, 12):
        print(f"E{module}...")
        patch_module(module)


if __name__ == "__main__":
    main()
