#!/usr/bin/env python3
"""Convert generated PNGs to 800x600 WebP in public/expression/co/situation-2/."""
from __future__ import annotations
import sys
from pathlib import Path
from PIL import Image

OUT = Path("public/expression/co/situation-2")
ART = Path("/opt/cursor/artifacts/assets")
SIZE = (800, 600)


def convert(slug: str, src: Path | None = None) -> Path:
    candidates = [
        src,
        ART / f"co-sit2-{slug}.png",
        ART / f"co-sit2-{slug}.webp",
        ART / f"{slug}.png",
        Path(f"/tmp/co-sit2-{slug}.png"),
    ]
    src_path = next((p for p in candidates if p and p.exists()), None)
    if src_path is None:
        raise FileNotFoundError(f"missing source for {slug}")
    img = Image.open(src_path).convert("RGBA")
    img = img.resize(SIZE, Image.Resampling.LANCZOS)
    OUT.mkdir(parents=True, exist_ok=True)
    dst = OUT / f"{slug}.webp"
    img.save(dst, "WEBP", quality=88, method=4)
    print(f"OK {dst} {img.size}")
    return dst


if __name__ == "__main__":
    for slug in sys.argv[1:]:
        convert(slug)
