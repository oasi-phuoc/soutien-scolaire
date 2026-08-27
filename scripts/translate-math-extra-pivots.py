#!/usr/bin/env python3
"""Translate unique math FR strings into new pivot languages. Resume-safe cache."""
from __future__ import annotations

import json
import re
import time
from pathlib import Path

from deep_translator import GoogleTranslator

SRC = Path("/tmp/math-trad-strings.json")
CACHE = Path("/tmp/math-extra-pivot-cache.json")
OUT = Path("/workspace/lib/curriculum/content/math/trad/extra-pivot-dict.json")

NEW_LANGS = ["sq", "am", "es", "it", "ru"]  # Google codes
# Dari: copy Persian (fa) already in curriculum, else Google fa
CHUNK_CHARS = 3500
MAX_RETRY = 4

EXTRA_FR = [
    "Écoutez l'enregistrement, puis répétez à voix haute.",
    "Écoutez l'enregistrement puis répétez à voix haute.",
    "Comment lire les nombres",
    "Écrivez les nombres en lettres correctement.",
    "Écrivez les dizaines en lettres correctement.",
    "Écoutez et écrivez les nombres.",
    "Écoutez et écrivez les dizaines.",
    "Complétez les cases bleues du tableau.",
    "Complétez les séries de nombres.",
    "Choisissez le nombre représenté par les blocs.",
    "Comptez tous les blocs et écrivez le nombre total.",
    "Comptez chaque type de blocs et complétez la décomposition.",
    "Comptez le nombre total de cubes dans la figure.",
    "Décomposez le nombre en milliers, centaines, dizaines et unités.",
    "Sélectionnez toutes les étiquettes qui représentent le même nombre que l'étiquette rose.",
    "Suivez les flèches pour trouver les nombres manquants.",
    "Lisez l'échelle et trouvez le nombre pointé par chaque flèche.",
    "Complétez les dizaines encadrantes.",
    "Complétez les centaines encadrantes.",
    "Cliquez sur les nombres qui correspondent à la consigne.",
    "Complétez avec le symbole de comparaison.",
    "Cliquez sur □ pour faire défiler < > =",
    "Cochez chaque nombre dans la bonne bulle (un nombre peut être dans plusieurs bulles).",
    "Écrivez n'importe quel nombre entier entre les deux bornes.",
    "Comptez le nombre de formes.",
    "Posez et effectuez les calculs en colonnes.",
    "Posez et effectuez les multiplications en colonnes.",
    "Posez et effectuez les divisions en colonnes.",
    "Observez les formes coloriées et écrivez la fraction représentée.",
    "Effectuez les calculs.",
    "Trouvez la valeur de x.",
    "Écrivez les nombres en toutes lettres correctement.",
    "Écoutez et écrivez les nombres en chiffres.",
    "Complétez les suites de nombres.",
    "Écrivez combien il y a de milliers, centaines, dizaines, unités.",
    "Comptez combien il y a de cubes.",
    "Décomposez les nombres.",
    "Cliquez sur chaque nombre pour lui attribuer la bonne couleur.",
    "Sélectionnez tous les nombres qui correspondent à la consigne.",
]

BOLD = re.compile(r"\*\*(.+?)\*\*", re.S)
FRAC = re.compile(r"\[\[frac:[^\]]+\]\]")


def protect(s: str) -> tuple[str, list[str]]:
    tokens: list[str] = []

    def keep(m: re.Match[str]) -> str:
        tokens.append(m.group(0))
        return f"⟦P{len(tokens) - 1}⟧"

    s2 = FRAC.sub(keep, s)
    s2 = BOLD.sub(keep, s2)
    return s2, tokens


def restore(s: str, tokens: list[str]) -> str:
    for i, tok in enumerate(tokens):
        for form in (f"⟦P{i}⟧", f"[[P{i}]]", f"[P{i}]", f"P{i}"):
            if form in s:
                s = s.replace(form, tok)
    return s


def load_cache() -> dict:
    if CACHE.exists():
        return json.loads(CACHE.read_text(encoding="utf-8"))
    return {}


def save_cache(cache: dict) -> None:
    CACHE.write_text(json.dumps(cache, ensure_ascii=False), encoding="utf-8")


def _esc(s: str) -> str:
    return s.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")


def _unesc(s: str) -> str:
    return s.replace("&lt;", "<").replace("&gt;", ">").replace("&amp;", "&")


def _translate_blob(texts: list[str], target: str) -> list[str] | None:
    protected = [protect(t) for t in texts]
    blob = "\n".join(f"<t{i}>{_esc(p)}</t{i}>" for i, (p, _) in enumerate(protected))
    out = GoogleTranslator(source="fr", target=target).translate(blob)
    found = dict(re.findall(r"<t(\d+)>(.*?)</t\1>", out, re.S))
    if len(found) != len(texts):
        return None
    return [
        restore(_unesc(found[str(i)].strip()), protected[i][1])
        for i in range(len(texts))
    ]


def translate_chunk(texts: list[str], target: str) -> list[str]:
    if len(texts) == 1:
        last_err = None
        for attempt in range(MAX_RETRY):
            try:
                p, toks = protect(texts[0])
                piece = GoogleTranslator(source="fr", target=target).translate(p)
                return [restore(piece.strip(), toks)]
            except Exception as e:
                last_err = e
                time.sleep(1.2 * (attempt + 1))
        print(f"  WARN single-fail {target}: {last_err}; keeping FR", flush=True)
        return [texts[0]]
    last_err = None
    for attempt in range(MAX_RETRY):
        try:
            got = _translate_blob(texts, target)
            if got is not None:
                return got
            break
        except Exception as e:
            last_err = e
            time.sleep(1.2 * (attempt + 1))
    mid = max(1, len(texts) // 2)
    print(f"  split {len(texts)} -> {mid}+{len(texts)-mid} ({target}) {last_err or 'tag mismatch'}", flush=True)
    return translate_chunk(texts[:mid], target) + translate_chunk(texts[mid:], target)


def chunk_rows(rows: list[str]) -> list[list[str]]:
    chunks: list[list[str]] = []
    cur: list[str] = []
    size = 0
    for s in rows:
        extra = len(s) + 12
        if cur and size + extra > CHUNK_CHARS:
            chunks.append(cur)
            cur, size = [], 0
        cur.append(s)
        size += extra
    if cur:
        chunks.append(cur)
    return chunks


def main() -> None:
    data = json.loads(SRC.read_text(encoding="utf-8"))
    rows = data["rows"]
    fr_list = [r["fr"] for r in rows]
    fa_map = {r["fr"]: r.get("fa") for r in rows if r.get("fa")}
    for extra in EXTRA_FR:
        if extra not in fa_map and extra not in fr_list:
            fr_list.append(extra)
            rows.append({"fr": extra, "missing": NEW_LANGS + ["prs", "pt", "so", "tr", "ps"]})

    cache = load_cache()
    # cache[fr][lang] = text
    langs_google = NEW_LANGS + ["pt", "so", "tr", "ps", "fa"]

    pending_by_lang: dict[str, list[str]] = {lg: [] for lg in langs_google}
    for r in rows:
        fr = r["fr"]
        entry = cache.setdefault(fr, {})
        missing = set(r.get("missing") or [])
        for lg in NEW_LANGS:
            if lg not in entry:
                pending_by_lang[lg].append(fr)
        if "prs" not in entry:
            if fa_map.get(fr):
                entry["prs"] = fa_map[fr]
            else:
                pending_by_lang["fa"].append(fr)
        for lg in ["pt", "so", "tr", "ps"]:
            if lg in missing and lg not in entry:
                pending_by_lang[lg].append(fr)

    for lg, pending in pending_by_lang.items():
        # unique preserve order
        seen = set()
        uniq = []
        for s in pending:
            if s not in seen:
                seen.add(s)
                uniq.append(s)
        pending_by_lang[lg] = uniq

    total = sum(len(v) for v in pending_by_lang.values())
    print(f"pending translations: {total}", flush=True)
    done = 0
    for lg, pending in pending_by_lang.items():
        if not pending:
            continue
        target = lg
        chunks = chunk_rows(pending)
        print(f"== {lg}: {len(pending)} strings, {len(chunks)} chunks", flush=True)
        for ci, ch in enumerate(chunks):
            translated = translate_chunk(ch, target)
            for fr, tr in zip(ch, translated):
                cache.setdefault(fr, {})
                if lg == "fa":
                    cache[fr]["prs"] = tr
                else:
                    cache[fr][lg] = tr
            done += len(ch)
            save_cache(cache)
            print(f"  chunk {ci+1}/{len(chunks)} ({done}/{total})", flush=True)
            time.sleep(0.08)

    # build output dict: only extra langs
    out: dict[str, dict[str, str]] = {}
    extra_keys = ["sq", "am", "prs", "es", "it", "ru", "pt", "so", "tr", "ps"]
    for fr, langs in cache.items():
        row = {k: v for k, v in langs.items() if k in extra_keys and v}
        if row:
            out[fr] = row
    OUT.write_text(json.dumps(out, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"wrote {len(out)} entries -> {OUT}", flush=True)


if __name__ == "__main__":
    main()
