// Conversion verbes → bloc sélecteur (onglets de conjugaison).
// Module séparé de grammar-data pour éviter un cycle d'import :
// les fichiers de leçons appellent verbsToSelector() au chargement,
// alors que grammar-data importe ces mêmes leçons.

import type { ConjugTable, TheoryBlock, VerbToggleVerb } from "./grammar-data";

const VOWEL_RE = /[aeiouàâæéèêëîïôœùûüÿh]/i;

function accentMarkup(s: string): string {
  return s ? `{a}${s}{/a}` : "";
}

/** Tableau de conjugaison (terminaisons / négation / pronoms réfléchis en accent). */
export function verbToConjugTable(verb: VerbToggleVerb, negation?: boolean): ConjugTable {
  return {
    verb: verb.infinitive,
    rows: verb.rows.map((row, ri) => {
      const radical = row.radical !== undefined ? row.radical : verb.radical;
      const stem = radical ?? "";
      const refl = verb.reflexivePronouns?.[ri];
      const startsWithVowel = VOWEL_RE.test((stem || verb.radical)[0] ?? "");

      if (negation) {
        const reflPart = refl ? (refl.endsWith("'") ? refl : `${refl} `) : "";
        const body = `${reflPart}${stem}${row.ending}`;
        const ne = startsWithVowel ? accentMarkup("n'") : `${accentMarkup("ne")} `;
        return { pronoun: row.pronoun, form: `${ne}${body} ${accentMarkup("pas")}` };
      }

      const reflMarkup = refl
        ? (refl.endsWith("'") ? accentMarkup(refl) : `${accentMarkup(refl)} `)
        : "";
      return {
        pronoun: row.pronoun,
        form: `${reflMarkup}${stem}${accentMarkup(row.ending)}`,
      };
    }),
  };
}

/** Convertit une liste de verbes en bloc sélecteur (un onglet par infinitif). */
export function verbsToSelector(
  verbs: VerbToggleVerb[],
  opts?: { buttonCols?: number; negation?: boolean },
): Extract<TheoryBlock, { type: "selector" }> {
  return {
    type: "selector",
    buttonCols: opts?.buttonCols,
    tabs: verbs.map((v) => ({
      label: v.infinitive,
      content: [{ type: "table", tables: [verbToConjugTable(v, opts?.negation)] }],
    })),
  };
}
