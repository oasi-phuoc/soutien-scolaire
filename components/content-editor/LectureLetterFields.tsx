"use client";

import type { LetterData } from "@/lib/curriculum/lecture-data";

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

function ListEditor({
  label,
  items,
  onChange,
}: {
  label: string;
  items: string[];
  onChange: (items: string[]) => void;
}) {
  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold text-amber-950">{label}</span>
        <button
          type="button"
          className="text-[11px] font-bold text-amber-800 hover:underline"
          onClick={() => onChange([...items, ""])}
        >
          + Ajouter
        </button>
      </div>
      <div className="space-y-1">
        {items.map((item, i) => (
          <div key={i} className="flex gap-1">
            <input
              type="text"
              value={item}
              onChange={(e) => {
                const next = items.slice();
                next[i] = e.target.value;
                onChange(next);
              }}
              className="min-w-0 flex-1 rounded-md border border-amber-200 bg-white px-2 py-1 text-sm outline-none focus:border-amber-500"
            />
            <button
              type="button"
              className="rounded-md px-2 text-xs font-bold text-red-700 hover:bg-red-50"
              onClick={() => onChange(items.filter((_, j) => j !== i))}
              aria-label="Supprimer"
            >
              ×
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export function LectureLetterFields({
  value,
  setValue,
}: {
  value: unknown;
  setValue: (next: unknown, history?: "debounce" | "immediate") => void;
}) {
  const data = value as LetterData;

  function patch(partial: Record<string, unknown>, history: "debounce" | "immediate" = "debounce") {
    setValue({ ...data, ...partial }, history);
  }

  return (
    <div className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-2">
        <Field
          label="Phonème"
          value={data.phoneme ?? ""}
          onChange={(v) => patch({ phoneme: v })}
        />
        {"title" in data && (
          <Field
            label="Titre"
            value={(data as { title?: string }).title ?? ""}
            onChange={(v) => patch({ title: v })}
          />
        )}
        {"exampleWord" in data && (
          <Field
            label="Mot exemple"
            value={(data as { exampleWord?: string }).exampleWord ?? ""}
            onChange={(v) => patch({ exampleWord: v })}
          />
        )}
        <Field
          label="Lettre (minuscule)"
          value={data.letterLower ?? ""}
          onChange={(v) => patch({ letterLower: v, letter: v.toUpperCase() })}
        />
      </div>

      {"upperWords" in data && Array.isArray(data.upperWords) && (
        <ListEditor
          label="Mots (majuscules)"
          items={data.upperWords}
          onChange={(items) => patch({ upperWords: items }, "immediate")}
        />
      )}
      {"lowerWords" in data && Array.isArray(data.lowerWords) && (
        <ListEditor
          label="Mots (minuscules)"
          items={data.lowerWords}
          onChange={(items) => patch({ lowerWords: items }, "immediate")}
        />
      )}
      {"upperWordsSet1" in data && Array.isArray((data as { upperWordsSet1: string[] }).upperWordsSet1) && (
        <ListEditor
          label="Mots maj. — série 1"
          items={(data as { upperWordsSet1: string[] }).upperWordsSet1}
          onChange={(items) => patch({ upperWordsSet1: items }, "immediate")}
        />
      )}
      {"upperWordsSet2" in data && Array.isArray((data as { upperWordsSet2: string[] }).upperWordsSet2) && (
        <ListEditor
          label="Mots maj. — série 2"
          items={(data as { upperWordsSet2: string[] }).upperWordsSet2}
          onChange={(items) => patch({ upperWordsSet2: items }, "immediate")}
        />
      )}
      {"upperGrid" in data && Array.isArray(data.upperGrid) && (
        <ListEditor
          label="Grille majuscules"
          items={data.upperGrid}
          onChange={(items) => patch({ upperGrid: items }, "immediate")}
        />
      )}
      {"lowerGrid" in data && Array.isArray(data.lowerGrid) && (
        <ListEditor
          label="Grille minuscules"
          items={data.lowerGrid}
          onChange={(items) => patch({ lowerGrid: items }, "immediate")}
        />
      )}
      {"grids" in data && Array.isArray((data as { grids: { key: string; label: string; items: string[] }[] }).grids) && (
        <div className="space-y-3">
          <p className="text-xs font-semibold text-amber-950">Grilles de lecture</p>
          {(data as { grids: { key: string; label: string; items: string[] }[] }).grids.map((g, gi) => (
            <div key={g.key || gi} className="rounded-lg border border-amber-200 bg-white/70 p-2">
              <Field
                label="Label de grille"
                value={g.label}
                onChange={(v) => {
                  const grids = (data as { grids: { key: string; label: string; items: string[] }[] }).grids.slice();
                  grids[gi] = { ...g, label: v };
                  patch({ grids }, "debounce");
                }}
              />
              <div className="mt-2">
                <ListEditor
                  label="Items"
                  items={g.items}
                  onChange={(items) => {
                    const grids = (data as { grids: { key: string; label: string; items: string[] }[] }).grids.slice();
                    grids[gi] = { ...g, items };
                    patch({ grids }, "immediate");
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      )}
      {"pronunciationChain" in data && Array.isArray((data as { pronunciationChain: { phoneme: string; syllable: string; word: string }[] }).pronunciationChain) && (
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-amber-950">Chaîne de prononciation</span>
            <button
              type="button"
              className="text-[11px] font-bold text-amber-800 hover:underline"
              onClick={() => {
                const chain = [
                  ...(data as { pronunciationChain: { phoneme: string; syllable: string; word: string }[] }).pronunciationChain,
                  { phoneme: "", syllable: "", word: "" },
                ];
                patch({ pronunciationChain: chain }, "immediate");
              }}
            >
              + Étape
            </button>
          </div>
          {(data as { pronunciationChain: { phoneme: string; syllable: string; word: string }[] }).pronunciationChain.map((step, i) => (
            <div key={i} className="grid grid-cols-[1fr_1fr_1fr_auto] gap-1">
              <input
                placeholder="phonème"
                value={step.phoneme}
                onChange={(e) => {
                  const chain = (data as { pronunciationChain: { phoneme: string; syllable: string; word: string }[] }).pronunciationChain.slice();
                  chain[i] = { ...step, phoneme: e.target.value };
                  patch({ pronunciationChain: chain });
                }}
                className="rounded-md border border-amber-200 bg-white px-2 py-1 text-sm"
              />
              <input
                placeholder="syllabe"
                value={step.syllable}
                onChange={(e) => {
                  const chain = (data as { pronunciationChain: { phoneme: string; syllable: string; word: string }[] }).pronunciationChain.slice();
                  chain[i] = { ...step, syllable: e.target.value };
                  patch({ pronunciationChain: chain });
                }}
                className="rounded-md border border-amber-200 bg-white px-2 py-1 text-sm"
              />
              <input
                placeholder="mot"
                value={step.word}
                onChange={(e) => {
                  const chain = (data as { pronunciationChain: { phoneme: string; syllable: string; word: string }[] }).pronunciationChain.slice();
                  chain[i] = { ...step, word: e.target.value };
                  patch({ pronunciationChain: chain });
                }}
                className="rounded-md border border-amber-200 bg-white px-2 py-1 text-sm"
              />
              <button
                type="button"
                className="rounded-md px-2 text-xs font-bold text-red-700"
                onClick={() => {
                  const chain = (data as { pronunciationChain: unknown[] }).pronunciationChain.filter((_, j) => j !== i);
                  patch({ pronunciationChain: chain }, "immediate");
                }}
              >
                ×
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
