#!/bin/bash
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
OUT="$ROOT/public/downloads/expression-images.zip"
mkdir -p "$ROOT/public/downloads"
cd "$ROOT/public/assets/expression"
zip -r "$OUT" images
echo "Archive créée : $OUT ($(du -h "$OUT" | cut -f1))"
