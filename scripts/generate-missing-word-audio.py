#!/usr/bin/env python3
"""
Génère les MP3 lecture MANQUANTS (son_f) avec une voix neurale féminine
lente et bien articulée (edge-tts, fr-FR-DeniseNeural, débit -25 %),
adaptée aux élèves allophones.

Ne touche jamais aux fichiers existants (enregistrements ElevenLabs) :
seuls les mots/syllabes sans MP3 sont générés.

Prérequis :
  npx --yes tsx scripts/generate-word-audio-list.ts   → /tmp/lecture-audio-labels.json
  pip install edge-tts

Usage :
  python3 scripts/generate-missing-word-audio.py
  python3 scripts/generate-missing-word-audio.py --dry-run
"""
from __future__ import annotations

import argparse
import asyncio
import json
import subprocess
import sys
import tempfile
from pathlib import Path

import edge_tts

ROOT = Path(__file__).resolve().parents[1]
SON_F = ROOT / "public" / "assets" / "words" / "son_f"
LECTURE_LABELS = Path("/tmp/lecture-audio-labels.json")

VOICE = "fr-FR-DeniseNeural"
RATE = "-25%"  # débit ralenti pour élèves allophones
BITRATE = "96k"
CONCURRENCY = 4
RETRIES = 4


def missing_pairs() -> list[tuple[str, Path]]:
    data = json.loads(LECTURE_LABELS.read_text(encoding="utf-8"))
    pairs: list[tuple[str, Path]] = []
    for word in data["mots"]:
        s = word.lower().strip()
        if s and not (SON_F / "mots" / f"{s}.mp3").exists():
            pairs.append((word, SON_F / "mots" / f"{s}.mp3"))
    for syl in data["syllables"]:
        s = syl.lower().strip()
        if s and not (SON_F / "syllable" / f"{s}.mp3").exists():
            pairs.append((syl, SON_F / "syllable" / f"{s}.mp3"))
    return pairs


async def generate_one(
    text: str,
    dest: Path,
    sem: asyncio.Semaphore,
    tmp_dir: Path,
) -> bool:
    async with sem:
        for attempt in range(RETRIES):
            tmp = tmp_dir / f"{dest.stem}.raw.mp3"
            try:
                communicate = edge_tts.Communicate(text, VOICE, rate=RATE)
                await communicate.save(str(tmp))
                if tmp.stat().st_size < 1000:
                    raise RuntimeError("fichier trop petit")
                dest.parent.mkdir(parents=True, exist_ok=True)
                subprocess.run(
                    [
                        "ffmpeg", "-y", "-loglevel", "error",
                        "-i", str(tmp),
                        "-codec:a", "libmp3lame", "-b:a", BITRATE,
                        str(dest),
                    ],
                    check=True,
                )
                return True
            except Exception as exc:  # noqa: BLE001
                if attempt == RETRIES - 1:
                    print(f"  ! échec « {text} » : {exc}", file=sys.stderr)
                else:
                    await asyncio.sleep(2 * (attempt + 1))
            finally:
                tmp.unlink(missing_ok=True)
        return False


async def run(pairs: list[tuple[str, Path]]) -> int:
    sem = asyncio.Semaphore(CONCURRENCY)
    done = 0
    failed = 0
    with tempfile.TemporaryDirectory(prefix="edge-tts-") as tmp:
        tmp_dir = Path(tmp)
        tasks = [generate_one(text, dest, sem, tmp_dir) for text, dest in pairs]
        for i, coro in enumerate(asyncio.as_completed(tasks), 1):
            ok = await coro
            done += 1 if ok else 0
            failed += 0 if ok else 1
            if i % 50 == 0 or i == len(tasks):
                print(f"  {i}/{len(tasks)} — créés {done}, échecs {failed}", flush=True)
    return failed


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--dry-run", action="store_true")
    args = parser.parse_args()

    if not LECTURE_LABELS.exists():
        print(f"Manquant : {LECTURE_LABELS}", file=sys.stderr)
        print("Lancer : npx --yes tsx scripts/generate-word-audio-list.ts", file=sys.stderr)
        return 1

    pairs = missing_pairs()
    print(f"{len(pairs)} clips manquants (voix {VOICE}, débit {RATE})")
    if args.dry_run:
        for text, dest in pairs[:30]:
            print(f"  {text} → {dest.relative_to(ROOT)}")
        return 0
    if not pairs:
        print("Rien à générer.")
        return 0

    failed = asyncio.run(run(pairs))
    print(f"Terminé : {len(pairs) - failed} créés, {failed} échecs.")
    return 1 if failed else 0


if __name__ == "__main__":
    raise SystemExit(main())
