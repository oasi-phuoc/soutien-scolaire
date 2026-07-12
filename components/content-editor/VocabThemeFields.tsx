"use client";

import type { VocabSentence, VocabTheme, VocabWord } from "@/lib/curriculum/vocabulary-data";

function Field({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <label className="block text-xs">
      <span className="mb-1 block font-semibold text-amber-950">{label}</span>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-md border border-amber-200 bg-white px-2 py-1.5 text-sm outline-none focus:border-amber-500"
      />
    </label>
  );
}

export function VocabThemeFields({
  value,
  setValue,
}: {
  value: unknown;
  setValue: (next: unknown, history?: "debounce" | "immediate") => void;
}) {
  const theme = value as VocabTheme;

  function patch(partial: Partial<VocabTheme>, history: "debounce" | "immediate" = "debounce") {
    setValue({ ...theme, ...partial }, history);
  }

  function updateWord(i: number, next: VocabWord) {
    const words = theme.words.slice();
    words[i] = next;
    patch({ words }, "debounce");
  }

  function updateSentence(i: number, next: VocabSentence) {
    const sentences = (theme.sentences ?? []).slice();
    sentences[i] = next;
    patch({ sentences }, "debounce");
  }

  return (
    <div className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-2">
        <Field label="Titre" value={theme.title ?? ""} onChange={(v) => patch({ title: v })} />
        <Field label="Code" value={theme.code ?? ""} onChange={(v) => patch({ code: v })} />
        <Field label="Slug" value={theme.slug ?? ""} onChange={(v) => patch({ slug: v })} />
        <Field
          label="Section"
          value={theme.section ?? ""}
          onChange={(v) => patch({ section: v as VocabTheme["section"] })}
        />
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <h4 className="text-xs font-bold uppercase tracking-wide text-amber-950">
            Mots ({theme.words.length})
          </h4>
          <button
            type="button"
            className="text-[11px] font-bold text-amber-800 hover:underline"
            onClick={() =>
              patch(
                { words: [...theme.words, { word: "", article: "un", gender: "m" }] },
                "immediate",
              )
            }
          >
            + Mot
          </button>
        </div>
        <div className="max-h-[280px] space-y-2 overflow-y-auto pr-1">
          {theme.words.map((w, i) => (
            <div
              key={i}
              className="grid gap-1 rounded-lg border border-amber-200 bg-white/80 p-2 sm:grid-cols-[1fr_1fr_1fr_auto]"
            >
              <input
                placeholder="mot"
                value={w.word}
                onChange={(e) => updateWord(i, { ...w, word: e.target.value })}
                className="rounded-md border border-amber-200 px-2 py-1 text-sm"
              />
              <input
                placeholder="article"
                value={w.article ?? ""}
                onChange={(e) => updateWord(i, { ...w, article: e.target.value })}
                className="rounded-md border border-amber-200 px-2 py-1 text-sm"
              />
              <input
                placeholder="féminin"
                value={w.feminine ?? ""}
                onChange={(e) => updateWord(i, { ...w, feminine: e.target.value || undefined })}
                className="rounded-md border border-amber-200 px-2 py-1 text-sm"
              />
              <button
                type="button"
                className="rounded-md px-2 text-xs font-bold text-red-700"
                onClick={() =>
                  patch({ words: theme.words.filter((_, j) => j !== i) }, "immediate")
                }
              >
                ×
              </button>
              <input
                placeholder="définition"
                value={Array.isArray(w.definition) ? w.definition.join(" / ") : (w.definition ?? "")}
                onChange={(e) =>
                  updateWord(i, {
                    ...w,
                    definition: e.target.value || undefined,
                  })
                }
                className="rounded-md border border-amber-200 px-2 py-1 text-sm sm:col-span-3"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <h4 className="text-xs font-bold uppercase tracking-wide text-amber-950">
            Phrases ({(theme.sentences ?? []).length})
          </h4>
          <button
            type="button"
            className="text-[11px] font-bold text-amber-800 hover:underline"
            onClick={() =>
              patch(
                {
                  sentences: [
                    ...(theme.sentences ?? []),
                    { sentence: "___", answer: "" },
                  ],
                },
                "immediate",
              )
            }
          >
            + Phrase
          </button>
        </div>
        <div className="max-h-[220px] space-y-2 overflow-y-auto pr-1">
          {(theme.sentences ?? []).map((s, i) => (
            <div key={i} className="grid gap-1 rounded-lg border border-amber-200 bg-white/80 p-2 sm:grid-cols-[1fr_1fr_auto]">
              <input
                placeholder="phrase (___ = trou)"
                value={s.sentence}
                onChange={(e) => updateSentence(i, { ...s, sentence: e.target.value })}
                className="rounded-md border border-amber-200 px-2 py-1 text-sm"
              />
              <input
                placeholder="réponse"
                value={s.answer}
                onChange={(e) => updateSentence(i, { ...s, answer: e.target.value })}
                className="rounded-md border border-amber-200 px-2 py-1 text-sm"
              />
              <button
                type="button"
                className="rounded-md px-2 text-xs font-bold text-red-700"
                onClick={() =>
                  patch(
                    {
                      sentences: (theme.sentences ?? []).filter((_, j) => j !== i),
                    },
                    "immediate",
                  )
                }
              >
                ×
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
