"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useState, useTransition } from "react";
import { Eye, Pencil, Redo2, Undo2 } from "lucide-react";
import { useContentEditor } from "./ContentEditorProvider";
import { useEditorHistory } from "@/lib/content-editor/use-editor-history";
import {
  HUB_DOMAINS,
  listHubPages,
  type HubDomain,
  type HubPage,
  type HubSubmenu,
} from "@/lib/content-editor/hub-pages";
import { MathLessonFields } from "./MathLessonFields";
import { VocabThemeFields } from "./VocabThemeFields";
import { GrammarLessonFields } from "./GrammarLessonFields";
import { LectureLetterFields } from "./LectureLetterFields";
import type { MathSubmoduleLesson } from "@/lib/curriculum/content/math/math-a1-types";
import type { MathRichBlock } from "@/lib/curriculum/content/math/math-a1-types";

type EditorKind =
  | "math"
  | "vocab"
  | "grammar"
  | "conjugation"
  | "lecture"
  | "story"
  | "generic";

function kindFromKey(key: string): EditorKind {
  if (key.startsWith("math:")) return "math";
  if (key.startsWith("vocab:")) return "vocab";
  if (key.startsWith("grammar:")) return "grammar";
  if (key.startsWith("conjugation:")) return "conjugation";
  if (key.startsWith("lecture:letter:")) return "lecture";
  if (key.startsWith("lecture:story:")) return "story";
  return "generic";
}

function payloadsEqual(a: unknown, b: unknown) {
  try {
    return JSON.stringify(a) === JSON.stringify(b);
  } catch {
    return a === b;
  }
}

function labelFromPayload(payload: unknown, fallback: string): string {
  if (!payload || typeof payload !== "object") return fallback;
  const p = payload as Record<string, unknown>;
  if (typeof p.title === "string" && p.title.trim()) return p.title;
  const theory = p.theory as { title?: { fr?: string } } | undefined;
  if (theory?.title?.fr) return theory.title.fr;
  if (typeof p.letter === "string") return p.letter;
  return fallback;
}

function SimpleBlockPreview({ blocks }: { blocks: MathRichBlock[] }) {
  return (
    <div className="space-y-3">
      {blocks.map((b, i) => {
        if (b.type === "heading")
          return (
            <h3
              key={i}
              className={`text-base font-bold ${b.black ? "text-[var(--color-text-primary)]" : "text-[var(--color-theme-muted)]"}`}
            >
              {b.fr}
            </h3>
          );
        if (b.type === "highlight")
          return (
            <p key={i} className="font-bold text-[var(--color-theme-muted)]">
              {b.fr}
            </p>
          );
        if (b.type === "plain")
          return (
            <p key={i} className="text-sm text-[var(--color-text-primary)]">
              {b.fr || "\u00a0"}
            </p>
          );
        if (b.type === "note" || b.type === "example")
          return (
            <p
              key={i}
              className="rounded-[var(--radius-sm)] bg-[var(--color-bg-secondary)] px-3 py-2 text-sm"
            >
              {b.fr}
            </p>
          );
        if (b.type === "section" || b.type === "bullets" || b.type === "rule") {
          const items =
            b.type === "rule"
              ? b.itemsFr
              : b.type === "section"
                ? b.itemsFr
                : b.itemsFr;
          const label =
            b.type === "rule"
              ? b.titleFr
              : b.type === "section"
                ? b.labelFr
                : b.labelFr;
          return (
            <div key={i} className="space-y-1">
              {label ? (
                <p className="text-sm font-bold text-[var(--color-theme-muted)]">
                  {label}
                </p>
              ) : null}
              <ul className="space-y-0.5 border-l-2 border-[var(--color-theme)] pl-3 text-sm">
                {items.map((it, j) => (
                  <li key={j}>{it}</li>
                ))}
              </ul>
            </div>
          );
        }
        if (b.type === "table")
          return (
            <div key={i} className="overflow-x-auto text-sm">
              <table className="min-w-full border-collapse">
                <thead>
                  <tr>
                    {b.headersFr.map((h, j) => (
                      <th
                        key={j}
                        className="bg-[var(--color-theme-light)] px-2 py-1 text-left text-[10px] font-bold uppercase text-[var(--color-theme-muted)]"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {b.rows.map((row, ri) => (
                    <tr key={ri} className={ri % 2 ? "bg-[var(--color-bg-secondary)]/50" : ""}>
                      {row.map((cell, ci) => (
                        <td key={ci} className="px-2 py-1">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        if (b.type === "theory_tabs")
          return (
            <div key={i} className="space-y-2 rounded-[var(--radius-sm)] border border-[var(--color-border-default)] p-3">
              <p className="text-[10px] font-bold uppercase text-[var(--color-theme-muted)]">
                Onglets
              </p>
              {b.tabs.map((t, ti) => (
                <div key={ti}>
                  <p className="mb-1 text-sm font-bold text-[var(--color-theme-muted)]">
                    {t.label}
                  </p>
                  <SimpleBlockPreview blocks={t.blocks} />
                </div>
              ))}
            </div>
          );
        return (
          <p key={i} className="text-xs text-[var(--color-text-secondary)]">
            [{b.type}]
          </p>
        );
      })}
    </div>
  );
}

function StructuredPreview({ kind, value }: { kind: EditorKind; value: unknown }) {
  if (kind === "math" && value && typeof value === "object") {
    const lesson = value as MathSubmoduleLesson;
    return (
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">
          {lesson.theory?.title?.fr || "Sans titre"}
        </h2>
        {(lesson.theory?.paragraphs?.fr ?? []).map((p, i) => (
          <p key={i} className="text-sm text-[var(--color-text-primary)]">
            {p}
          </p>
        ))}
        <SimpleBlockPreview blocks={lesson.theory?.blocks ?? []} />
      </div>
    );
  }

  if (value && typeof value === "object") {
    const p = value as Record<string, unknown>;
    return (
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">
          {labelFromPayload(value, "Sans titre")}
        </h2>
        {kind === "story" && Array.isArray(p.sentences) ? (
          <div className="space-y-2 text-sm">
            {(p.sentences as string[]).map((s, i) => (
              <p key={i}>{s}</p>
            ))}
          </div>
        ) : (
          <p className="text-sm text-[var(--color-text-secondary)]">
            Aperçu structuré — utilisez Édition pour modifier les champs.
          </p>
        )}
      </div>
    );
  }

  return null;
}

function GenericFields({
  value,
  setValue,
}: {
  value: unknown;
  setValue: (next: unknown, history?: "debounce" | "immediate") => void;
}) {
  const obj = (value && typeof value === "object" ? value : {}) as Record<
    string,
    unknown
  >;
  const title = typeof obj.title === "string" ? obj.title : "";
  const notes =
    typeof obj.notes === "string"
      ? obj.notes
      : typeof obj.instructions === "string"
        ? obj.instructions
        : "";

  return (
    <div className="space-y-4">
      <label className="block text-sm">
        <span className="mb-1 block text-xs font-semibold text-[var(--color-theme-muted)]">
          Titre
        </span>
        <input
          type="text"
          value={title}
          onChange={(e) =>
            setValue({ ...obj, title: e.target.value }, "debounce")
          }
          className="w-full rounded-[var(--radius-sm)] border border-[var(--color-border-default)] bg-white px-3 py-2.5 text-sm outline-none focus:border-[var(--color-theme)]"
        />
      </label>
      <label className="block text-sm">
        <span className="mb-1 block text-xs font-semibold text-[var(--color-theme-muted)]">
          Notes / consignes
        </span>
        <textarea
          value={notes}
          onChange={(e) =>
            setValue(
              { ...obj, notes: e.target.value, instructions: e.target.value },
              "debounce",
            )
          }
          className="min-h-40 w-full rounded-[var(--radius-sm)] border border-[var(--color-border-default)] bg-white px-3 py-2.5 text-sm outline-none focus:border-[var(--color-theme)]"
        />
      </label>
    </div>
  );
}

function StoryFields({
  value,
  setValue,
}: {
  value: unknown;
  setValue: (next: unknown, history?: "debounce" | "immediate") => void;
}) {
  const story = (value && typeof value === "object" ? value : {}) as {
    title?: string;
    level?: string;
    sentences?: string[];
  };
  return (
    <div className="space-y-4">
      <label className="block text-sm">
        <span className="mb-1 block text-xs font-semibold text-[var(--color-theme-muted)]">
          Titre
        </span>
        <input
          type="text"
          value={story.title ?? ""}
          onChange={(e) =>
            setValue({ ...story, title: e.target.value }, "debounce")
          }
          className="w-full rounded-[var(--radius-sm)] border border-[var(--color-border-default)] bg-white px-3 py-2.5 text-sm outline-none focus:border-[var(--color-theme)]"
        />
      </label>
      <label className="block text-sm">
        <span className="mb-1 block text-xs font-semibold text-[var(--color-theme-muted)]">
          Phrases (une par ligne)
        </span>
        <textarea
          value={(story.sentences ?? []).join("\n")}
          onChange={(e) =>
            setValue(
              {
                ...story,
                sentences: e.target.value.split("\n"),
              },
              "debounce",
            )
          }
          className="min-h-48 w-full rounded-[var(--radius-sm)] border border-[var(--color-border-default)] bg-white px-3 py-2.5 font-mono text-sm outline-none focus:border-[var(--color-theme)]"
        />
      </label>
    </div>
  );
}

function PageEditor({
  page,
  initialPayload,
  baselinePayload,
  onDraftChange,
  onDiscardDraft,
  onSaved,
}: {
  page: HubPage;
  initialPayload: unknown;
  baselinePayload: unknown;
  onDraftChange: (key: string, payload: unknown) => void;
  onDiscardDraft: (key: string) => void;
  onSaved: () => void;
}) {
  const { saveOverride } = useContentEditor();
  const kind = kindFromKey(page.contentKey);
  const { present, setPresent, undo, redo, canUndo, canRedo, historyDepth, historyLimit, reset } =
    useEditorHistory<unknown>(initialPayload);
  const [mode, setMode] = useState<"edit" | "preview">("edit");
  const [status, setStatus] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();
  const dirty = !payloadsEqual(present, baselinePayload);

  const setValue = useCallback(
    (next: unknown, history: "debounce" | "immediate" = "debounce") => {
      setPresent(next, { history });
    },
    [setPresent],
  );

  useEffect(() => {
    if (payloadsEqual(present, baselinePayload)) {
      onDiscardDraft(page.contentKey);
    } else {
      onDraftChange(page.contentKey, present);
    }
  }, [page.contentKey, present, baselinePayload, onDraftChange, onDiscardDraft]);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      const mod = e.metaKey || e.ctrlKey;
      if (!mod) return;
      const key = e.key.toLowerCase();
      if (key === "z" && !e.shiftKey) {
        e.preventDefault();
        undo();
      } else if (key === "y" || (key === "z" && e.shiftKey)) {
        e.preventDefault();
        redo();
      } else if (key === "s") {
        e.preventDefault();
        if (dirty) void handleSave();
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [undo, redo, present, dirty]);

  async function handleSave() {
    setStatus(null);
    const res = await saveOverride({
      key: page.contentKey,
      label: `${page.code} — ${labelFromPayload(present, page.title)}`,
      payload: present,
      syncGit: true,
    });
    if (!res.ok) {
      setStatus(res.reason);
      return;
    }
    const parts = [
      res.persisted.supabase ? "Supabase" : null,
      res.persisted.git ? "Git" : null,
      "local",
    ].filter(Boolean);
    setStatus(
      `Enregistré (${parts.join(" + ")})${res.message ? ` — ${res.message}` : ""}`,
    );
    reset(present);
    onDiscardDraft(page.contentKey);
    onSaved();
  }

  function handleDiscard() {
    if (dirty && !confirm("Annuler le brouillon de cette page ?")) return;
    reset(baselinePayload);
    onDiscardDraft(page.contentKey);
    setMode("edit");
    setStatus("Brouillon annulé");
  }

  return (
    <div className="space-y-4 rounded-[14px] border border-[var(--color-border-default)] bg-white p-4 shadow-sm sm:p-5">
      <div className="flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={() => setMode("edit")}
          className={`inline-flex items-center gap-1.5 rounded-[var(--radius-sm)] px-3 py-1.5 text-xs font-bold ${
            mode === "edit"
              ? "bg-[var(--color-theme)] text-white"
              : "border border-[var(--color-border-default)] bg-white text-[var(--color-text-primary)]"
          }`}
        >
          <Pencil className="h-4 w-4" />
          Édition
        </button>
        <button
          type="button"
          onClick={() => setMode("preview")}
          className={`inline-flex items-center gap-1.5 rounded-[var(--radius-sm)] px-3 py-1.5 text-xs font-bold ${
            mode === "preview"
              ? "bg-[var(--color-theme)] text-white"
              : "border border-[var(--color-border-default)] bg-white text-[var(--color-text-primary)]"
          }`}
        >
          <Eye className="h-4 w-4" />
          Preview
        </button>

        <div className="flex flex-wrap items-center gap-1 border-l border-[var(--color-border-default)] pl-2">
          <button
            type="button"
            disabled={!canUndo}
            onClick={undo}
            title="Annuler (Ctrl+Z)"
            className="inline-flex items-center gap-1 rounded-[var(--radius-sm)] px-2 py-1.5 text-xs font-semibold text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-secondary)] disabled:opacity-30"
          >
            <Undo2 className="h-4 w-4" />
            Précédent
          </button>
          <button
            type="button"
            disabled={!canRedo}
            onClick={redo}
            title="Rétablir (Ctrl+Y)"
            className="inline-flex items-center gap-1 rounded-[var(--radius-sm)] px-2 py-1.5 text-xs font-semibold text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-secondary)] disabled:opacity-30"
          >
            <Redo2 className="h-4 w-4" />
            Suivant
          </button>
          <span className="px-1 text-xs text-[var(--color-text-secondary)]">
            {historyDepth}/{historyLimit}
          </span>
        </div>

        {dirty ? (
          <span className="rounded-md bg-amber-100 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-amber-900">
            Brouillon
          </span>
        ) : (
          <span className="rounded-md bg-[var(--color-theme-light)] px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-[var(--color-theme-muted)]">
            À jour
          </span>
        )}
      </div>

      {mode === "edit" ? (
        <div className="space-y-2">
          <p className="text-xs text-[var(--color-text-secondary)]">
            Modifiez les blocs et champs ci-dessous. Rien n&apos;est publié tant
            que vous n&apos;avez pas cliqué Enregistrer.
          </p>
          {kind === "math" && (
            <MathLessonFields value={present} setValue={setValue} />
          )}
          {kind === "vocab" && (
            <VocabThemeFields value={present} setValue={setValue} />
          )}
          {(kind === "grammar" || kind === "conjugation") && (
            <GrammarLessonFields value={present} setValue={setValue} />
          )}
          {kind === "lecture" && (
            <LectureLetterFields value={present} setValue={setValue} />
          )}
          {kind === "story" && (
            <StoryFields value={present} setValue={setValue} />
          )}
          {kind === "generic" && (
            <GenericFields value={present} setValue={setValue} />
          )}
        </div>
      ) : (
        <div className="rounded-[10px] border border-[var(--color-border-default)] bg-[var(--color-bg-secondary)]/40 p-4 sm:p-5">
          <p className="mb-2 text-[10px] font-bold uppercase tracking-wide text-[var(--color-theme-muted)]">
            Preview{dirty ? " (brouillon)" : ""}
          </p>
          <StructuredPreview kind={kind} value={present} />
        </div>
      )}

      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          disabled={pending || !dirty}
          onClick={() => startTransition(() => void handleSave())}
          className="rounded-lg bg-[var(--color-theme)] px-4 py-2.5 text-sm font-bold text-white disabled:opacity-50"
        >
          {pending ? "Enregistrement…" : "Enregistrer"}
        </button>
        <button
          type="button"
          disabled={!dirty || pending}
          onClick={handleDiscard}
          className="rounded-lg border border-[var(--color-border-default)] bg-white px-4 py-2.5 text-sm font-semibold text-[var(--color-text-primary)] disabled:opacity-50"
        >
          Annuler le brouillon
        </button>
        {mode === "edit" ? (
          <button
            type="button"
            onClick={() => setMode("preview")}
            className="rounded-lg border border-[var(--color-border-default)] bg-white px-4 py-2.5 text-sm font-semibold text-[var(--color-text-primary)]"
          >
            Voir le Preview
          </button>
        ) : (
          <button
            type="button"
            onClick={() => setMode("edit")}
            className="rounded-lg border border-[var(--color-border-default)] bg-white px-4 py-2.5 text-sm font-semibold text-[var(--color-text-primary)]"
          >
            Revenir à l&apos;édition
          </button>
        )}
      </div>
      {status && (
        <p className="text-sm text-[var(--color-theme-muted)]" role="status">
          {status}
        </p>
      )}
    </div>
  );
}

/**
 * Hub d'édition contenu style EPCAS (bureau) :
 * module → sous-menu → page → éditeur structuré (blocs / champs), brouillon jusqu'à Enregistrer.
 */
export function ContentHubEditor() {
  const { overrides, refresh } = useContentEditor();
  const [domain, setDomain] = useState<HubDomain | null>(null);
  const [submenu, setSubmenu] = useState<HubSubmenu | null>(null);
  const [query, setQuery] = useState("");
  const [pageId, setPageId] = useState<string | null>(null);
  const [drafts, setDrafts] = useState<Record<string, unknown>>({});

  const domainMeta = HUB_DOMAINS.find((d) => d.id === domain) ?? null;
  const submenus = domainMeta?.submenus ?? [];

  useEffect(() => {
    setSubmenu(null);
    setPageId(null);
    setQuery("");
  }, [domain]);

  useEffect(() => {
    setPageId(null);
    setQuery("");
  }, [submenu]);

  const pages = useMemo(() => {
    if (!domain || !submenu) return [];
    return listHubPages(domain, submenu, overrides);
  }, [domain, submenu, overrides]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return pages;
    return pages.filter(
      (p) =>
        p.code.toLowerCase().includes(q) ||
        p.title.toLowerCase().includes(q) ||
        p.id.toLowerCase().includes(q),
    );
  }, [pages, query]);

  const selectedPage =
    filtered.find((p) => p.id === pageId) ??
    pages.find((p) => p.id === pageId) ??
    null;

  const ready = Boolean(domain && submenu);
  const draftCount = Object.keys(drafts).length;

  useEffect(() => {
    if (draftCount === 0) return;
    function onBeforeUnload(e: BeforeUnloadEvent) {
      e.preventDefault();
      e.returnValue = "";
    }
    window.addEventListener("beforeunload", onBeforeUnload);
    return () => window.removeEventListener("beforeunload", onBeforeUnload);
  }, [draftCount]);

  const onDraftChange = useCallback((key: string, payload: unknown) => {
    setDrafts((prev) => {
      if (payloadsEqual(prev[key], payload)) return prev;
      return { ...prev, [key]: payload };
    });
  }, []);

  const onDiscardDraft = useCallback((key: string) => {
    setDrafts((prev) => {
      if (!(key in prev)) return prev;
      const next = { ...prev };
      delete next[key];
      return next;
    });
  }, []);

  const submenuLabel = submenus.find((s) => s.id === submenu)?.label;

  let baselinePayload: unknown = null;
  let initialPayload: unknown = null;
  if (selectedPage) {
    baselinePayload =
      overrides[selectedPage.contentKey]?.payload ?? selectedPage.loadBase();
    initialPayload = drafts[selectedPage.contentKey] ?? baselinePayload;
  }

  return (
    <div className="space-y-4">
      <header className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-[var(--color-text-primary)] sm:text-4xl">
            Théorie
          </h2>
          <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
            {domainMeta && submenuLabel
              ? `${domainMeta.label} · ${submenuLabel}`
              : "Choisissez un module et son sous-menu, puis une page — édition par blocs sur cette page."}
          </p>
        </div>
        <Link
          href="/admin"
          className="text-sm font-semibold text-[var(--color-theme)] hover:underline"
        >
          ← Contenu
        </Link>
      </header>

      {draftCount > 0 && (
        <p className="rounded-[10px] border border-amber-200 bg-amber-50 px-3 py-2 text-sm text-amber-950">
          {draftCount} brouillon{draftCount > 1 ? "s" : ""} non enregistré
          {draftCount > 1 ? "s" : ""}. Cliquez <strong>Enregistrer</strong> pour
          publier.
        </p>
      )}

      <div className="rounded-[14px] border border-[var(--color-border-default)] bg-white p-4 shadow-sm sm:p-5">
        <p className="mb-2 text-sm font-medium text-[var(--color-text-primary)]">
          Module
        </p>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {HUB_DOMAINS.map((d) => (
            <button
              key={d.id}
              type="button"
              onClick={() => setDomain(d.id)}
              className={`rounded-lg px-3 py-2.5 text-sm font-bold transition ${
                domain === d.id
                  ? "bg-[var(--color-theme)] text-white"
                  : "border border-[var(--color-border-default)] bg-white text-[var(--color-text-primary)] hover:bg-[var(--color-theme-light)]"
              }`}
            >
              {d.label}
            </button>
          ))}
        </div>

        {domain && (
          <>
            <p className="mb-2 mt-4 text-sm font-medium text-[var(--color-text-primary)]">
              Sous-menu
            </p>
            <div className="flex flex-wrap gap-2">
              {submenus.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setSubmenu(s.id)}
                  className={`rounded-full px-3.5 py-1.5 text-sm font-semibold transition ${
                    submenu === s.id
                      ? "bg-[var(--color-theme-light)] text-[var(--color-theme-muted)]"
                      : "border border-[var(--color-border-default)] bg-white text-[var(--color-text-secondary)] hover:border-[var(--color-theme)]/40"
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </>
        )}

        {!domain && (
          <p className="mt-4 rounded-[10px] border border-dashed border-[var(--color-border-default)] px-3 py-4 text-center text-sm text-[var(--color-text-secondary)]">
            Choisissez un module pour afficher ses sous-menus.
          </p>
        )}

        {domain && !submenu && (
          <p className="mt-4 rounded-[10px] border border-dashed border-[var(--color-border-default)] px-3 py-4 text-center text-sm text-[var(--color-text-secondary)]">
            Choisissez un <strong>sous-menu</strong> (
            {submenus.map((s) => s.label).join(", ")}) pour continuer.
          </p>
        )}

        {ready && (
          <>
            {selectedPage && (
              <div className="mt-4 rounded-[10px] border border-[var(--color-theme)] bg-[var(--color-theme-light)]/50 px-3 py-2">
                <p className="text-xs font-medium text-[var(--color-theme-muted)]">
                  Page sélectionnée
                </p>
                <p className="text-sm font-medium text-[var(--color-text-primary)]">
                  {selectedPage.code} — {selectedPage.title}
                  {drafts[selectedPage.contentKey] ? " · brouillon" : ""}
                </p>
              </div>
            )}

            <label className="mt-4 block text-sm">
              <span className="mb-1 block font-medium text-[var(--color-text-primary)]">
                Rechercher une page
              </span>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Ex. A1.1, vocabulaire, heure…"
                className="w-full rounded-[10px] border border-[var(--color-border-default)] bg-white px-3 py-2.5 text-sm outline-none focus:border-[var(--color-theme)]"
              />
            </label>

            <div className="mt-3">
              <p className="mb-2 text-sm font-medium text-[var(--color-text-primary)]">
                Choisir une page ({filtered.length})
              </p>
              {filtered.length === 0 ? (
                <p className="rounded-[10px] border border-dashed border-[var(--color-border-default)] px-3 py-4 text-center text-sm text-[var(--color-text-secondary)]">
                  Aucune page pour cette sélection
                  {query ? ` (« ${query} »)` : ""}.
                </p>
              ) : (
                <ul
                  className="max-h-56 touch-pan-y space-y-1.5 overflow-y-auto overscroll-contain rounded-[10px] border border-[var(--color-border-default)] bg-[var(--color-bg-secondary)]/40 p-2 sm:max-h-72"
                  role="listbox"
                  aria-label="Pages"
                >
                  {filtered.map((p) => {
                    const selected = p.id === selectedPage?.id;
                    const hasDraft = Boolean(drafts[p.contentKey]);
                    return (
                      <li key={p.id}>
                        <button
                          type="button"
                          role="option"
                          aria-selected={selected}
                          onClick={() => {
                            setPageId(p.id);
                            setQuery("");
                          }}
                          className={`flex min-h-12 w-full items-start gap-2 rounded-[10px] border px-3 py-2.5 text-left transition active:scale-[0.99] ${
                            selected
                              ? "border-[var(--color-theme)] bg-[var(--color-theme-light)] text-[var(--color-text-primary)] shadow-sm"
                              : "border-transparent bg-white text-[var(--color-text-primary)] hover:border-[var(--color-border-default)]"
                          }`}
                        >
                          <span className="shrink-0 text-xs font-semibold text-[var(--color-theme-muted)]">
                            {p.code}
                          </span>
                          <span className="min-w-0 flex-1 text-sm leading-snug">
                            {p.title}
                            {hasDraft ? (
                              <span className="ml-1 text-[10px] font-bold text-amber-700">
                                · brouillon
                              </span>
                            ) : null}
                          </span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          </>
        )}
      </div>

      {selectedPage && baselinePayload !== null && initialPayload !== null && (
        <PageEditor
          key={selectedPage.contentKey}
          page={selectedPage}
          initialPayload={initialPayload}
          baselinePayload={baselinePayload}
          onDraftChange={onDraftChange}
          onDiscardDraft={onDiscardDraft}
          onSaved={() => void refresh()}
        />
      )}
    </div>
  );
}
