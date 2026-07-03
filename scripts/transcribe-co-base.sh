#!/bin/bash
# Transcribe CO.1 base audios (non-message) with whisper tiny
export PATH="$HOME/.local/bin:$PATH"
DIR="/workspace/public/expression/co/base/public"
OUT="/workspace/lib/curriculum/content/communication/co-transcripts-base.json"

echo "{" > "$OUT"
first=1
for f in annonce-*.mp3 instruction-*.mp3 conversation-*.mp3 objet-*.mp3; do
  [ -f "$DIR/$f" ] || continue
  name="${f%.mp3}"
  echo "Transcribing $name..."
  text=$(whisper "$DIR/$f" --model tiny --language French --output_format txt --output_dir /tmp/whisper-co 2>/dev/null && cat "/tmp/whisper-co/${f%.mp3}.txt" | tr '\n' ' ' | sed 's/  */ /g')
  [ -z "$text" ] && text="(transcription failed)"
  if [ "$first" -eq 0 ]; then echo "," >> "$OUT"; fi
  first=0
  # JSON escape quotes
  esc=$(echo "$text" | sed 's/\\/\\\\/g; s/"/\\"/g')
  printf '  "%s": "%s"' "$name" "$esc" >> "$OUT"
done
echo "" >> "$OUT"
echo "}" >> "$OUT"
echo "Done: $OUT"
