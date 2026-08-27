/**
 * Extrait les chaînes FR uniques des fichiers trad maths (théorie + consignes).
 * Usage: npx tsx scripts/extract-math-trad-strings.ts
 */
import { writeFileSync } from "node:fs";
import type { BlockTrad, SubmoduleTrad, TradString } from "../lib/curriculum/content/math/trad/trad-types";

type ExtraLang = "sq" | "am" | "prs" | "es" | "it" | "ru" | "pt" | "so" | "tr" | "ps";
const EXTRA: ExtraLang[] = ["sq", "am", "prs", "es", "it", "ru", "pt", "so", "tr", "ps"];

type Row = {
  fr: string;
  en?: string;
  fa?: string;
  missing: ExtraLang[];
};

const byFr = new Map<string, Row>();

function note(ts: TradString | undefined) {
  const fr = ts?.fr?.trim();
  if (!fr) return;
  const existing = byFr.get(fr);
  const missing = EXTRA.filter((l) => !ts?.[l]);
  if (!existing) {
    byFr.set(fr, { fr, en: ts?.en, fa: ts?.fa, missing });
    return;
  }
  if (!existing.en && ts?.en) existing.en = ts.en;
  if (!existing.fa && ts?.fa) existing.fa = ts.fa;
  existing.missing = existing.missing.filter((l) => missing.includes(l) || !ts?.[l]);
  // Keep a lang as missing only if ANY occurrence lacks it? Better: missing if we still need it for SOME files.
  // For dictionary we want to fill all EXTRA langs always for new langs, and pt/so/tr/ps when missing anywhere.
}

function noteItems(items: BlockTrad["items"]) {
  if (!items?.fr) return;
  for (let i = 0; i < items.fr.length; i++) {
    const fr = items.fr[i];
    if (!fr?.trim()) continue;
    note({
      fr,
      en: items.en?.[i],
      ar: items.ar?.[i],
      fa: items.fa?.[i],
      ti: items.ti?.[i],
      uk: items.uk?.[i],
      pt: items.pt?.[i],
      so: items.so?.[i],
      tr: items.tr?.[i],
      ps: items.ps?.[i],
    });
  }
}

function walkBlock(b: BlockTrad) {
  note(b.text);
  note(b.label);
  note(b.caption);
  noteItems(b.items);
  noteItems(b.headers);
}

function walk(t: SubmoduleTrad) {
  note(t.title);
  if (t.paragraphs?.fr) {
    for (let i = 0; i < t.paragraphs.fr.length; i++) {
      note({
        fr: t.paragraphs.fr[i],
        en: t.paragraphs.en?.[i],
        ar: t.paragraphs.ar?.[i],
        fa: t.paragraphs.fa?.[i],
        ti: t.paragraphs.ti?.[i],
        uk: t.paragraphs.uk?.[i],
        pt: t.paragraphs.pt?.[i],
        so: t.paragraphs.so?.[i],
        tr: t.paragraphs.tr?.[i],
        ps: t.paragraphs.ps?.[i],
      });
    }
  }
  t.blocks?.forEach(walkBlock);
  if (t.consignes) {
    for (const ts of Object.values(t.consignes)) note(ts);
  }
  if (t.readAloud) {
    note(t.readAloud.heading);
    t.readAloud.legend.forEach((l) => note(l.label));
  }
}

async function main() {
  const { getTrad } = await import("../lib/curriculum/content/math/trad/index.ts");
  const ids = [
    ...["A1-1","A1-2","A1-3","A1-4","A1-5"],
    ...["A2-1","A2-2","A2-3","A2-4"],
    ...["A3-1","A3-2","A3-3","A3-4","A3-5","A3-6","A3-7"],
    ...["A4-1","A4-2","A4-3","A4-4","A4-5","A4-6","A4-7","A4-8"],
    ...["A5-1","A5-2","A5-3","A5-4","A5-5","A5-6","A5-7"],
    ...["A6-1","A6-2","A6-3","A6-4","A6-5","A6-6","A6-7"],
    ...["A7-1","A7-2","A7-3","A7-4","A7-5"],
    ...["A8-1","A8-2","A8-3","A8-4","A8-5"],
    ...["A9-1","A9-2","A9-3","A9-4","A9-5","A9-6"],
    ...["A10-1","A10-2","A10-3","A10-4"],
    ...["A11-1","A11-2","A11-3","A11-4","A11-5","A11-6","A11-7"],
    ...["G1-1","G1-2","G1-3","G1-4"],
    ...["G2-1","G2-2"],
    ...["G3-1","G3-2","G3-3","G3-4","G3-5"],
    ...["G4-1","G4-2","G4-3","G4-4","G4-5","G4-6","G4-7","G4-8"],
    ...["G5-1","G5-2","G5-3","G5-4","G5-5","G5-6"],
    ...["G6-1","G6-2","G6-3","G6-4","G6-5","G6-6","G6-7"],
    ...["G7-1","G7-2","G7-3","G7-4","G7-5"],
  ];
  let found = 0;
  for (const id of ids) {
    const t = getTrad(id);
    if (!t) continue;
    found++;
    walk(t);
  }
  const rows = [...byFr.values()].sort((a, b) => a.fr.localeCompare(b.fr, "fr"));
  const newLangMissing = rows.filter((r) =>
    ["sq", "am", "prs", "es", "it", "ru"].some((l) => r.missing.includes(l as ExtraLang)),
  );
  writeFileSync(
    "/tmp/math-trad-strings.json",
    JSON.stringify({ submoduleCount: found, unique: rows.length, rows }, null, 2),
  );
  console.log(`submodules=${found} uniqueFr=${rows.length} needingNewLangs=${newLangMissing.length}`);
  const lens = rows.map((r) => r.fr.length);
  const totalChars = lens.reduce((a, b) => a + b, 0);
  console.log(`totalFrChars=${totalChars} avgLen=${Math.round(totalChars / rows.length)}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
