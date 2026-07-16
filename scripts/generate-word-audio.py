#!/usr/bin/env python3
"""
Génère les MP3 manquants pour playWord() / playSyllable() via Piper TTS.

Entrée  : /tmp/lecture-audio-labels.json  (produit par generate-word-audio-list.ts)
Sortie  : public/assets/words/son_f/{mots,syllable}/{slug}.mp3

Ne régénère pas les fichiers déjà présents. Utilise la voix française
« siwis medium » (Rhasspy / Piper). Une seule voix féminine : playWord
retombe déjà sur son_f si son_m est absent.

Usage :
  npx --yes tsx scripts/generate-word-audio-list.ts
  python3 scripts/generate-word-audio.py
  python3 scripts/generate-word-audio.py --force   # régénère tout
"""
from __future__ import annotations

import argparse
import json
import subprocess
import sys
import tempfile
import wave
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / "public" / "assets" / "words" / "son_f"
LABELS = Path("/tmp/lecture-audio-labels.json")
VOICE = Path("/tmp/piper-voices/fr_FR-siwis-medium.onnx")
BITRATE = "96k"


def slug(text: str) -> str:
    return text.lower()


def synthesize(voice, text: str, wav_path: Path) -> None:
    with wave.open(str(wav_path), "wb") as wf:
        voice.synthesize_wav(text, wf)


def wav_to_mp3(wav_path: Path, mp3_path: Path) -> None:
    mp3_path.parent.mkdir(parents=True, exist_ok=True)
    subprocess.run(
        [
            "ffmpeg", "-y", "-loglevel", "error",
            "-i", str(wav_path),
            "-codec:a", "libmp3lame", "-b:a", BITRATE,
            str(mp3_path),
        ],
        check=True,
    )


def generate_batch(voice, items: list[str], kind: str, force: bool) -> tuple[int, int]:
    out_dir = PUBLIC / kind
    out_dir.mkdir(parents=True, exist_ok=True)
    created = 0
    skipped = 0
    total = len(items)

    with tempfile.TemporaryDirectory(prefix="piper-") as tmp:
        tmp_dir = Path(tmp)
        for i, text in enumerate(items, 1):
            s = slug(text)
            if not s:
                continue
            dest = out_dir / f"{s}.mp3"
            if dest.exists() and not force:
                skipped += 1
                continue
            wav = tmp_dir / f"{i}.wav"
            try:
                synthesize(voice, text, wav)
                wav_to_mp3(wav, dest)
                created += 1
            except Exception as exc:  # noqa: BLE001
                print(f"  ! échec « {text} » ({kind}): {exc}", file=sys.stderr)
            if i % 100 == 0 or i == total:
                print(f"  [{kind}] {i}/{total} — créés {created}, déjà présents {skipped}", flush=True)
            wav.unlink(missing_ok=True)

    return created, skipped


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--force", action="store_true", help="Régénère même si le MP3 existe")
    parser.add_argument("--mots-only", action="store_true")
    parser.add_argument("--syllables-only", action="store_true")
    args = parser.parse_args()

    if not LABELS.exists():
        print(f"Manquant : {LABELS} — lancer d'abord generate-word-audio-list.ts", file=sys.stderr)
        return 1
    if not VOICE.exists():
        print(f"Manquant : {VOICE}", file=sys.stderr)
        return 1

    data = json.loads(LABELS.read_text(encoding="utf-8"))
    mots: list[str] = data["mots"]
    syllables: list[str] = data["syllables"]

    print(f"Chargement Piper ({VOICE.name})…", flush=True)
    from piper import PiperVoice

    voice = PiperVoice.load(str(VOICE))
    print(f"Prêt — {len(mots)} mots, {len(syllables)} syllabes", flush=True)

    total_created = 0
    total_skipped = 0

    if not args.syllables_only:
        print("=== mots ===", flush=True)
        c, s = generate_batch(voice, mots, "mots", args.force)
        total_created += c
        total_skipped += s

    if not args.mots_only:
        print("=== syllables ===", flush=True)
        c, s = generate_batch(voice, syllables, "syllable", args.force)
        total_created += c
        total_skipped += s

    print(f"Terminé : {total_created} créés, {total_skipped} déjà présents.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
