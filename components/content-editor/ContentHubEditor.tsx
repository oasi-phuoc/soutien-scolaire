"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState, useTransition } from "react";
import { useContentEditor } from "./ContentEditorProvider";
import { MarkdownToolbar } from "./MarkdownToolbar";
import { useEditorHistory } from "@/lib/content-editor/use-editor-history";
import {
  HUB_DOMAINS,
  listHubPages,
  type HubDomain,
  type HubPage,
  type HubSubmenu,
} from "@/lib/content-editor/hub-pages";

type EditorDoc = {
  title: string;
  body: string;
  raw: unknown;
};

function extractDoc(payload: unknown, fallbackTitle: string): EditorDoc {
  if (!payload || typeof payload !== "object") {
    return { title: fallbackTitle, body: "", raw: payload ?? {} };
  }
  const p = payload as Record<string, unknown>;

  // Maths lesson
  const theory = p.theory as
    | { title?: { fr?: string }; paragraphs?: { fr?: string[] }; blocks?: unknown }
    | undefined;
  if (theory) {
    const title = theory.title?.fr ?? fallbackTitle;
    const paragraphs = (theory.paragraphs?.fr ?? []).join("\n\n");
    const blocks = theory.blocks
      ? `\n\n\`\`\`blocks\n${JSON.stringify(theory.blocks, null, 2)}\n\`\`\``
      : "";
    const exercises = p.exercises
      ? `\n\n\`\`\`exercises\n${JSON.stringify(p.exercises, null, 2)}\n\`\`\``
      : "";
    return {
      title,
      body: `${paragraphs}${blocks}${exercises}`.trim(),
      raw: payload,
    };
  }

  // Vocab
  if (Array.isArray(p.words) || Array.isArray(p.sentences)) {
    return {
      title: String(p.title ?? fallbackTitle),
      body: JSON.stringify(
        { words: p.words ?? [], sentences: p.sentences ?? [] },
        null,
        2,
      ),
      raw: payload,
    };
  }

  // Grammar
  if (Array.isArray(p.theory) || Array.isArray(p.exercises)) {
    return {
      title: String(p.title ?? fallbackTitle),
      body: JSON.stringify(
        { theory: p.theory ?? [], exercises: p.exercises ?? [] },
        null,
        2,
      ),
      raw: payload,
    };
  }

  // Lecture letter
  if (typeof p.letterLower === "string" || typeof p.phoneme === "string") {
    return {
      title: String(p.letter ?? p.letterLower ?? fallbackTitle),
      body: JSON.stringify(payload, null, 2),
      raw: payload,
    };
  }

  // Story
  if (Array.isArray(p.sentences) && typeof p.level === "string") {
    return {
      title: String(p.title ?? fallbackTitle),
      body: (p.sentences as string[]).join("\n"),
      raw: payload,
    };
  }

  // Generic
  return {
    title: String(p.title ?? fallbackTitle),
    body:
      typeof p.notes === "string" || typeof p.instructions === "string"
        ? String(p.notes ?? p.instructions ?? "")
        : JSON.stringify(payload, null, 2),
    raw: payload,
  };
}

function applyDocToPayload(doc: EditorDoc): unknown {
  const raw = (doc.raw && typeof doc.raw === "object" ? doc.raw : {}) as Record<
    string,
    unknown
  >;

  // Maths
  if (raw.theory && typeof raw.theory === "object") {
    const theory = { ...(raw.theory as Record<string, unknown>) };
    const titleObj = {
      ...((theory.title as Record<string, unknown>) ?? {}),
      fr: doc.title,
    };
    const blocksMatch = doc.body.match(/```blocks\n([\s\S]*?)```/);
    const exercisesMatch = doc.body.match(/```exercises\n([\s\S]*?)```/);
    const main = doc.body
      .replace(/```blocks\n[\s\S]*?```/g, "")
      .replace(/```exercises\n[\s\S]*?```/g, "")
      .trim();
    const paragraphs = {
      ...((theory.paragraphs as Record<string, unknown>) ?? {}),
      fr: main ? main.split(/\n\n+/).filter(Boolean) : [],
    };
    let blocks = theory.blocks;
    let exercises = raw.exercises;
    try {
      if (blocksMatch?.[1]) blocks = JSON.parse(blocksMatch[1]);
    } catch {
      /* keep */
    }
    try {
      if (exercisesMatch?.[1]) exercises = JSON.parse(exercisesMatch[1]);
    } catch {
      /* keep */
    }
    return {
      ...raw,
      theory: { ...theory, title: titleObj, paragraphs, blocks },
      exercises,
    };
  }

  // Vocab
  if (Array.isArray(raw.words) || "words" in raw) {
    try {
      const parsed = JSON.parse(doc.body) as {
        words?: unknown;
        sentences?: unknown;
      };
      return {
        ...raw,
        title: doc.title,
        words: parsed.words ?? raw.words,
        sentences: parsed.sentences ?? raw.sentences,
      };
    } catch {
      return { ...raw, title: doc.title };
    }
  }

  // Grammar
  if (Array.isArray(raw.theory) || "theory" in raw) {
    try {
      const parsed = JSON.parse(doc.body) as {
        theory?: unknown;
        exercises?: unknown;
      };
      return {
        ...raw,
        title: doc.title,
        theory: parsed.theory ?? raw.theory,
        exercises: parsed.exercises ?? raw.exercises,
      };
    } catch {
      return { ...raw, title: doc.title };
    }
  }

  // Story
  if (Array.isArray(raw.sentences) && typeof raw.level === "string") {
    return {
      ...raw,
      title: doc.title,
      sentences: doc.body.split("\n").filter((l) => l.length > 0),
    };
  }

  // Letter / generic JSON body
  if (doc.body.trim().startsWith("{") || doc.body.trim().startsWith("[")) {
    try {
      const parsed = JSON.parse(doc.body) as Record<string, unknown>;
      return { ...raw, ...parsed, title: doc.title };
    } catch {
      /* fall through */
    }
  }

  return {
    ...raw,
    title: doc.title,
    notes: doc.body,
    instructions: doc.body,
  };
}

function simpleMarkdownPreview(text: string) {
  const lines = text.split("\n");
  return lines.map((line, i) => {
    if (line.startsWith("### "))
      return (
        <h3 key={i} className="mt-3 text-base font-bold text-[var(--color-text-primary)]">
          {line.slice(4)}
        </h3>
      );
    if (line.startsWith("## "))
      return (
        <h2 key={i} className="mt-4 text-lg font-bold text-[var(--color-theme-muted)]">
          {line.slice(3)}
        </h2>
      );
    if (line.startsWith("# "))
      return (
        <h1 key={i} className="mt-4 text-xl font-bold text-[var(--color-text-primary)]">
          {line.slice(2)}
        </h1>
      );
    if (line.startsWith("> "))
      return (
        <blockquote
          key={i}
          className="my-2 border-l-4 border-[var(--color-theme)] pl-3 text-[var(--color-text-secondary)]"
        >
          {line.slice(2)}
        </blockquote>
      );
    if (line.trim() === "---")
      return <hr key={i} className="my-4 border-[var(--color-border-default)]" />;
    if (line.startsWith("- ") || line.startsWith("* "))
      return (
        <li key={i} className="ml-5 list-disc text-sm text-[var(--color-text-primary)]">
          {line.slice(2)}
        </li>
      );
    if (/^\d+\.\s/.test(line))
      return (
        <li key={i} className="ml-5 list-decimal text-sm text-[var(--color-text-primary)]">
          {line.replace(/^\d+\.\s/, "")}
        </li>
      );
    if (!line.trim()) return <div key={i} className="h-2" />;
    const html = line
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.+?)\*/g, "<em>$1</em>")
      .replace(/==(.+?)==/g, '<mark class="bg-[var(--color-correction-soft)]">$1</mark>');
    return (
      <p
        key={i}
        className="text-sm leading-relaxed text-[var(--color-text-primary)]"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  });
}

function docsEqual(a: EditorDoc, b: EditorDoc) {
  return a.title === b.title && a.body === b.body;
}

function PageEditor({
  page,
  basePayload: _basePayload,
  initialDoc,
  baselineDoc,
  onDraftChange,
  onDiscardDraft,
  onSaved,
}: {
  page: HubPage;
  basePayload: unknown;
  initialDoc: EditorDoc;
  baselineDoc: EditorDoc;
  onDraftChange: (key: string, doc: EditorDoc) => void;
  onDiscardDraft: (key: string) => void;
  onSaved: () => void;
}) {
  const { saveOverride } = useContentEditor();
  const { present, setPresent, undo, redo, canUndo, canRedo, historyDepth, historyLimit, reset } =
    useEditorHistory<EditorDoc>(initialDoc);
  const [mode, setMode] = useState<"edit" | "preview">("edit");
  const [status, setStatus] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const dirty = !docsEqual(present, baselineDoc);

  useEffect(() => {
    if (docsEqual(present, baselineDoc)) {
      onDiscardDraft(page.contentKey);
    } else {
      onDraftChange(page.contentKey, present);
    }
  }, [page.contentKey, present, baselineDoc, onDraftChange, onDiscardDraft]);

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
    const payload = applyDocToPayload(present);
    const res = await saveOverride({
      key: page.contentKey,
      label: `${page.code} — ${present.title || page.title}`,
      payload,
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
    const nextDoc = { ...present, raw: payload };
    reset(nextDoc);
    onDiscardDraft(page.contentKey);
    onSaved();
  }

  function handleDiscard() {
    if (dirty && !confirm("Annuler le brouillon de cette page ?")) return;
    reset(baselineDoc);
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
          className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold ${
            mode === "edit"
              ? "bg-[var(--color-theme)] text-white"
              : "border border-[var(--color-border-default)] bg-white text-[var(--color-text-primary)]"
          }`}
        >
          ✎ Édition
        </button>
        <button
          type="button"
          onClick={() => setMode("preview")}
          className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold ${
            mode === "preview"
              ? "bg-[var(--color-theme)] text-white"
              : "border border-[var(--color-border-default)] bg-white text-[var(--color-text-primary)]"
          }`}
        >
          👁 Preview
        </button>

        <div className="flex flex-wrap items-center gap-1 border-l border-[var(--color-border-default)] pl-2">
          <button
            type="button"
            disabled={!canUndo}
            onClick={undo}
            title="Annuler (Ctrl+Z)"
            className="rounded-lg px-2 py-1.5 text-xs font-semibold text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-secondary)] disabled:opacity-30"
          >
            ← Précédent
          </button>
          <button
            type="button"
            disabled={!canRedo}
            onClick={redo}
            title="Rétablir (Ctrl+Y)"
            className="rounded-lg px-2 py-1.5 text-xs font-semibold text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-secondary)] disabled:opacity-30"
          >
            Suivant →
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

      <label className="block text-sm">
        <span className="mb-1 block font-medium text-[var(--color-text-primary)]">
          Titre de la page
        </span>
        <input
          type="text"
          value={present.title}
          onChange={(e) =>
            setPresent(
              (prev) => ({ ...prev, title: e.target.value }),
              { history: "debounce" },
            )
          }
          className="w-full rounded-[10px] border border-[var(--color-border-default)] bg-white px-3 py-2.5 text-sm outline-none focus:border-[var(--color-theme)]"
          required
        />
      </label>

      {mode === "edit" ? (
        <>
          <MarkdownToolbar
            textareaRef={textareaRef}
            value={present.body}
            onChange={(next) =>
              setPresent((prev) => ({ ...prev, body: next }), {
                history: "immediate",
              })
            }
          />
          <label className="block text-sm">
            <span className="mb-1 block font-medium text-[var(--color-text-primary)]">
              Contenu complet
            </span>
            <textarea
              ref={textareaRef}
              value={present.body}
              onChange={(e) =>
                setPresent(
                  (prev) => ({ ...prev, body: e.target.value }),
                  { history: "debounce" },
                )
              }
              className="min-h-72 w-full rounded-[10px] border border-[var(--color-border-default)] bg-white px-3 py-3 font-mono text-sm leading-relaxed outline-none focus:border-[var(--color-theme)]"
              spellCheck={false}
            />
            <span className="mt-1 block text-xs text-[var(--color-text-secondary)]">
              Modifs en brouillon jusqu&apos;à Enregistrer. Ctrl+Z / Ctrl+Y ·
              Ctrl+S pour enregistrer.
            </span>
          </label>
        </>
      ) : (
        <div className="rounded-[10px] border border-[var(--color-border-default)] bg-[var(--color-bg-secondary)]/40 p-4 sm:p-5">
          <p className="mb-2 text-[10px] font-bold uppercase tracking-wide text-[var(--color-theme-muted)]">
            Preview{dirty ? " (brouillon)" : ""}
          </p>
          <h2 className="mb-4 text-2xl font-bold text-[var(--color-text-primary)]">
            {present.title || "Sans titre"}
          </h2>
          <div className="space-y-1">{simpleMarkdownPreview(present.body)}</div>
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
 * Hub d'édition contenu style EPCAS (bureau uniquement) :
 * module (4) → sous-menu obligatoire → liste de pages → éditeur Édition/Preview.
 * Les modifications restent en brouillon jusqu'à Enregistrer.
 */
export function ContentHubEditor() {
  const { overrides, refresh } = useContentEditor();
  const [domain, setDomain] = useState<HubDomain | null>(null);
  const [submenu, setSubmenu] = useState<HubSubmenu | null>(null);
  const [query, setQuery] = useState("");
  const [pageId, setPageId] = useState<string | null>(null);
  const [drafts, setDrafts] = useState<Record<string, EditorDoc>>({});

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

  const onDraftChange = useCallback((key: string, doc: EditorDoc) => {
    setDrafts((prev) => {
      const prevDoc = prev[key];
      if (prevDoc && docsEqual(prevDoc, doc)) return prev;
      return { ...prev, [key]: doc };
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

  let baselineDoc: EditorDoc | null = null;
  let initialDoc: EditorDoc | null = null;
  if (selectedPage) {
    const basePayload = selectedPage.loadBase();
    baselineDoc = extractDoc(
      overrides[selectedPage.contentKey]?.payload ?? basePayload,
      selectedPage.title,
    );
    initialDoc = drafts[selectedPage.contentKey] ?? baselineDoc;
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
              : "Choisissez un module et son sous-menu, puis une page à éditer — sans quitter cette page."}
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
          publier (Supabase + Git).
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
                <span className="mt-1 inline-block rounded-md bg-[var(--color-correction-soft)] px-2 py-0.5 text-[10px] font-semibold text-[var(--color-text-primary)]">
                  {domainMeta?.label} · {submenuLabel}
                </span>
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
              <p className="mt-2 text-xs text-[var(--color-text-secondary)]">
                Tapez pour filtrer, puis touchez une page — l&apos;éditeur
                s&apos;ouvre ici (pas besoin de naviguer).
              </p>
            </div>
          </>
        )}
      </div>

      {selectedPage && baselineDoc && initialDoc && (
        <PageEditor
          key={selectedPage.contentKey}
          page={selectedPage}
          basePayload={
            overrides[selectedPage.contentKey]?.payload ??
            selectedPage.loadBase()
          }
          initialDoc={initialDoc}
          baselineDoc={baselineDoc}
          onDraftChange={onDraftChange}
          onDiscardDraft={onDiscardDraft}
          onSaved={() => void refresh()}
        />
      )}
    </div>
  );
}
