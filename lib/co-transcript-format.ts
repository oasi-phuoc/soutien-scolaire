/** Bloc de transcription CO pour l'affichage. */
export type COTranscriptBlock =
  | { kind: "preamble"; text: string }
  | { kind: "dialogue"; title: string; lines: string[] }
  | { kind: "paragraph"; text: string };

const EM_DASH = "—";
const DASH_LINE = /^(?:[—–-]\s*)(.+)$/;

/** Normalise les tirets de dialogue vers le cadratin. */
function normalizeDashes(text: string): string {
  return text.replace(/\r\n/g, "\n").replace(/^([ \t]*)–\s/gm, `$1${EM_DASH} `);
}

/** Découpe un bloc plat (style Whisper scolaire) en répliques. */
function splitFlatTurns(flat: string): string[] {
  return flat
    .trim()
    .split(
      /(?<=[?.!])\s+(?=[A-ZÀÂÄÉÈÊËÏÎÔÙÛÜŸÇ«"]|Oui |Non |Merci|Ah |Allez|Tiens|Bonjour|Salut|D'accord|Exactement|Bien |Moi |Pendant|Regarde|Attends|Oh |Il |Elle |Ils |Elles |Nous |Vous |Tu |Je |On |Mon |Ma |Mes |Dans |C'est |C'était |Comme |Pour |Vraiment |Exactement)/,
    )
    .map((s) => s.trim())
    .filter(Boolean);
}

function linesFromBody(body: string): string[] {
  const trimmed = body.trim();
  if (!trimmed) return [];

  const rawLines = trimmed.split("\n").map((l) => l.trim()).filter(Boolean);
  const dashLines = rawLines.filter((l) => DASH_LINE.test(l));

  if (dashLines.length > 0) {
    return rawLines.map((line) => {
      const m = line.match(DASH_LINE);
      return m ? m[1]!.trim() : line;
    });
  }

  return splitFlatTurns(trimmed);
}

/** « Dialogue 1. », « Dialogue 1\n », « Situation numéro 2\n », etc. */
const SECTION_HEADER = /(?:Dialogue|Situation numéro|Situation)\s+(\d+)\.?(?:\s+|$)/gi;

function isDialogueLike(text: string): boolean {
  return (
    /(?:Dialogue|Situation numéro|Situation \d|Activité \d)/i.test(text) ||
    /(?:^|\n)\s*[—–-]\s/m.test(text)
  );
}

function sectionTitle(matchText: string, num: string): string {
  if (/situation/i.test(matchText)) return `Situation numéro ${num}`;
  if (/activité/i.test(matchText)) return `Activité ${num}`;
  return `Dialogue ${num}`;
}

/**
 * Transforme une transcription brute CO en blocs structurés pour l'affichage.
 */
export function parseCOTranscript(raw: string): COTranscriptBlock[] {
  const text = normalizeDashes(raw.trim());
  if (!text) return [];

  if (!isDialogueLike(text)) {
    return [{ kind: "paragraph", text }];
  }

  const blocks: COTranscriptBlock[] = [];

  // Préambule « Exercice N. » (scolaire)
  const exMatch = text.match(/^Exercice (\d+)\.\s*/);
  const body = exMatch ? text.slice(exMatch[0].length) : text;

  // En-têtes Dialogue N / Situation numéro N (y compris en milieu de phrase scolaire)
  const headers: Array<{ index: number; end: number; title: string }> = [];
  const re = new RegExp(SECTION_HEADER.source, "gi");
  let m: RegExpExecArray | null;
  while ((m = re.exec(body)) !== null) {
    headers.push({
      index: m.index,
      end: m.index + m[0].length,
      title: sectionTitle(m[0], m[1]!),
    });
  }

  if (headers.length > 0) {
    if (headers[0]!.index > 0) {
      const pre = body.slice(0, headers[0]!.index).trim();
      if (pre) blocks.push({ kind: "preamble", text: pre });
    }

    for (let i = 0; i < headers.length; i++) {
      const start = headers[i]!.end;
      const end = i + 1 < headers.length ? headers[i + 1]!.index : body.length;
      const chunk = body.slice(start, end).trim();
      const lines = linesFromBody(chunk);
      if (lines.length > 0) {
        blocks.push({ kind: "dialogue", title: headers[i]!.title, lines });
      }
    }
    return blocks;
  }

  // Pas d'en-têtes numérotés : blocs séparés par ligne vide (avance, etc.)
  const chunks = body.split(/\n{2,}/).map((c) => c.trim()).filter(Boolean);
  let dialogueNum = 0;

  for (const chunk of chunks) {
    const hasDash = /(?:^|\n)\s*[—–-]\s/m.test(chunk);
    if (hasDash) {
      dialogueNum += 1;
      const lines = linesFromBody(chunk);
      const title = lines.length > 0 ? `Dialogue ${dialogueNum}` : "";
      if (lines.length > 0) {
        blocks.push({ kind: "dialogue", title, lines });
      }
    } else if (/^Activité \d+/i.test(chunk)) {
      blocks.push({ kind: "preamble", text: chunk });
    } else {
      blocks.push({ kind: "paragraph", text: chunk });
    }
  }

  if (blocks.length === 0) {
    const lines = linesFromBody(body);
    if (lines.length > 1) {
      blocks.push({ kind: "dialogue", title: "Dialogue 1", lines });
    } else {
      blocks.push({ kind: "paragraph", text: body });
    }
  }

  return blocks;
}
