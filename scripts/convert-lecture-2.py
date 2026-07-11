#!/usr/bin/env python3
"""Convert generated PNGs to 800x600 WebP in public/assets/words/lecture-2/."""
from __future__ import annotations
import sys
from pathlib import Path
from PIL import Image

OUT = Path("public/assets/words/lecture-2")
ART = Path("/opt/cursor/artifacts/assets")
SIZE = (800, 600)


def convert(slug: str, src: Path | None = None) -> Path:
    candidates = [
        src,
        ART / f"lecture2-{slug}.png",
        ART / f"lecture2-{slug}.webp",
        ART / f"co-sit2-{slug}.png",
        Path(f"/tmp/lecture2-{slug}.png"),
    ]
    src_path = next((p for p in candidates if p and Path(p).exists()), None)
    if src_path is None:
        # search artifacts recursively for filename
        hits = list(Path("/opt/cursor/artifacts").rglob(f"*{slug}*.png")) if Path("/opt/cursor/artifacts").exists() else []
        hits = [h for h in hits if "lecture2" in h.name or h.stem.endswith(slug) or h.stem == slug]
        src_path = hits[0] if hits else None
    if src_path is None:
        raise FileNotFoundError(f"missing source for {slug}")
    img = Image.open(src_path).convert("RGBA")
    # composite on white to ensure opaque white bg
    bg = Image.new("RGBA", img.size, (255, 255, 255, 255))
    bg.paste(img, mask=img.split()[-1] if img.mode == "RGBA" else None)
    img = bg.convert("RGB").resize(SIZE, Image.Resampling.LANCZOS)
    OUT.mkdir(parents=True, exist_ok=True)
    dst = OUT / f"{slug}.webp"
    img.save(dst, "WEBP", quality=88, method=4)
    print(f"OK {dst} {img.size}")
    return dst


if __name__ == "__main__":
    for slug in sys.argv[1:]:
        convert(slug)
