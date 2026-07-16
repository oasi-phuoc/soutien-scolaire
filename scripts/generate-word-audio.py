#!/usr/bin/env python3
"""
Génère les MP3 lecture / vocabulaire via Piper TTS.

Voix :
  f → /tmp/piper-voices/fr_FR-siwis-medium.onnx  → public/.../son_f/
  m → /tmp/piper-voices/fr_FR-tom-medium.onnx    → public/.../son_m/

Sources :
  /tmp/lecture-audio-labels.json  (mots + syllables)
  /tmp/vocab-audio-labels.json    (entries folder/slug/text)

Usage :
  python3 scripts/generate-word-audio.py --voice m
  python3 scripts/generate-word-audio.py --voice f --vocab-only
  python3 scripts/generate-word-audio.py --voice m --lecture-only
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
PUBLIC_WORDS = ROOT / "public" / "assets" / "words"
LECTURE_LABELS = Path("/tmp/lecture-audio-labels.json")
VOCAB_LABELS = Path("/tmp/vocab-audio-labels.json")
VOICES = {
    "f": Path("/tmp/piper-voices/fr_FR-siwis-medium.onnx"),
    "m": Path("/tmp/piper-voices/fr_FR-tom-medium.onnx"),
}
BITRATE = "96k"


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


def generate_pairs(
    voice,
    pairs: list[tuple[str, Path]],
    label: str,
    force: bool,
) -> tuple[int, int]:
    """pairs = [(texte_à_dire, chemin_mp3), ...]"""
    created = 0
    skipped = 0
    total = len(pairs)
    with tempfile.TemporaryDirectory(prefix="piper-") as tmp:
        tmp_dir = Path(tmp)
        for i, (text, dest) in enumerate(pairs, 1):
            if not text.strip():
                continue
            if dest.exists() and not force:
                skipped += 1
                continue
            wav = tmp_dir / f"{i}.wav"
            try:
                synthesize(voice, text, wav)
                wav_to_mp3(wav, dest)
                created += 1
            except Exception as exc:  # noqa: BLE001
                print(f"  ! échec « {text} » → {dest.name}: {exc}", file=sys.stderr)
            if i % 100 == 0 or i == total:
                print(
                    f"  [{label}] {i}/{total} — créés {created}, déjà présents {skipped}",
                    flush=True,
                )
            wav.unlink(missing_ok=True)
    return created, skipped


def lecture_pairs(gender: str) -> list[tuple[str, Path]]:
    data = json.loads(LECTURE_LABELS.read_text(encoding="utf-8"))
    base = PUBLIC_WORDS / f"son_{gender}"
    pairs: list[tuple[str, Path]] = []
    for word in data["mots"]:
        s = word.lower().strip()
        if s:
            pairs.append((word, base / "mots" / f"{s}.mp3"))
    for syl in data["syllables"]:
        s = syl.lower().strip()
        if s:
            pairs.append((syl, base / "syllable" / f"{s}.mp3"))
    return pairs


def vocab_pairs(gender: str) -> list[tuple[str, Path]]:
    data = json.loads(VOCAB_LABELS.read_text(encoding="utf-8"))
    base = PUBLIC_WORDS / f"son_{gender}" / "vocab"
    pairs: list[tuple[str, Path]] = []
    for entry in data["entries"]:
        folder = entry["folder"]
        slug = entry["slug"]
        text = entry["text"]
        pairs.append((text, base / folder / f"{slug}.mp3"))
    return pairs


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--voice", choices=("f", "m"), required=True)
    parser.add_argument("--force", action="store_true")
    parser.add_argument("--lecture-only", action="store_true")
    parser.add_argument("--vocab-only", action="store_true")
    args = parser.parse_args()

    model = VOICES[args.voice]
    if not model.exists():
        print(f"Manquant : {model}", file=sys.stderr)
        return 1

    do_lecture = not args.vocab_only
    do_vocab = not args.lecture_only

    if do_lecture and not LECTURE_LABELS.exists():
        print(f"Manquant : {LECTURE_LABELS}", file=sys.stderr)
        return 1
    if do_vocab and not VOCAB_LABELS.exists():
        print(f"Manquant : {VOCAB_LABELS}", file=sys.stderr)
        return 1

    print(f"Chargement Piper {args.voice} ({model.name})…", flush=True)
    from piper import PiperVoice

    voice = PiperVoice.load(str(model))
    total_c = total_s = 0

    if do_lecture:
        pairs = lecture_pairs(args.voice)
        print(f"=== lecture son_{args.voice} ({len(pairs)} clips) ===", flush=True)
        c, s = generate_pairs(voice, pairs, f"lecture-{args.voice}", args.force)
        total_c += c
        total_s += s

    if do_vocab:
        pairs = vocab_pairs(args.voice)
        print(f"=== vocab son_{args.voice} ({len(pairs)} clips) ===", flush=True)
        c, s = generate_pairs(voice, pairs, f"vocab-{args.voice}", args.force)
        total_c += c
        total_s += s

    print(f"Terminé (voix {args.voice}) : {total_c} créés, {total_s} déjà présents.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
