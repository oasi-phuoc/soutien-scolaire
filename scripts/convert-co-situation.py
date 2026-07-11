#!/usr/bin/env python3
"""Convert generated PNGs to 800x600 WebP in public/expression/co/situations/."""
from __future__ import annotations
import sys
from pathlib import Path
from PIL import Image

OUT = Path("public/expression/co/situations")
ART = Path("/opt/cursor/artifacts/assets")
SIZE = (800, 600)

def convert(slug: str, src: Path | None = None) -> Path:
    src = src or ART / f"co-sit-{slug}.png"
    if not src.exists():
        # try without prefix
        alt = ART / f"{slug}.png"
        src = alt if alt.exists() else src
    if not src.exists():
        raise FileNotFoundError(src)
    img = Image.open(src).convert("RGBA")
    img = img.resize(SIZE, Image.Resampling.LANCZOS)
    dst = OUT / f"{slug}.webp"
    img.save(dst, "WEBP", quality=88, method=4)
    print(f"OK {dst} {img.size}")
    return dst

if __name__ == "__main__":
    for slug in sys.argv[1:]:
        convert(slug)
