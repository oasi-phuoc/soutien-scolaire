"use client";

import { useMemo, useState, useTransition } from "react";
import Link from "next/link";
import { MATH_MODULES } from "@/lib/curriculum/math-data";
import { LECTURE_MODULES } from "@/lib/curriculum/lecture-data";
import { FRENCH_THEMES } from "@/lib/curriculum/french-data";
import { COMM_MODULES } from "@/lib/curriculum/communication-data";
import {
  catalogCommKey,
  catalogFrenchKey,
  catalogLectureKey,
  catalogMathKey,
  lectureLetterKey,
  mathLessonKey,
  vocabThemeKey,
  grammarLessonKey,
} from "@/lib/content-editor/keys";
import {
  resolveCommModules,
  resolveFrenchThemes,
  resolveLectureModules,
  resolveMathModules,
  snapshotCommCatalog,
  snapshotFrenchCatalog,
  snapshotLectureCatalog,
  snapshotMathCatalog,
} from "@/lib/content-editor/catalog";
import type {
  CommCatalogPayload,
  FrenchCatalogPayload,
  LectureCatalogPayload,
  MathCatalogPayload,
} from "@/lib/content-editor/types";
import { useContentEditor } from "./ContentEditorProvider";
import { ImageUploadField } from "./ImageUploadField";

type Tab = "math" | "lecture" | "french" | "comm" | "images";

function slugify(s: string) {
  return s
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 60);
}

/**
 * Gestion catalogue : ajouter / masquer modules et leçons,
 * puis persister via overrides (Supabase + Git).
 */
export function CatalogManager() {
  const { overrides, saveOverride, capabilities, resolve } = useContentEditor();
  const [tab, setTab] = useState<Tab>("french");
  const [pending, startTransition] = useTransition();
  const [status, setStatus] = useState<string | null>(null);

  const mathCatalog = useMemo(() => {
    const ov = overrides[catalogMathKey()]?.payload as MathCatalogPayload | undefined;
    return ov ?? snapshotMathCatalog(MATH_MODULES);
  }, [overrides]);

  const lectureCatalog = useMemo(() => {
    const ov = overrides[catalogLectureKey()]?.payload as LectureCatalogPayload | undefined;
    return ov ?? snapshotLectureCatalog(LECTURE_MODULES);
  }, [overrides]);

  const frenchCatalog = useMemo(() => {
    const ov = overrides[catalogFrenchKey()]?.payload as FrenchCatalogPayload | undefined;
    return ov ?? snapshotFrenchCatalog(FRENCH_THEMES);
  }, [overrides]);

  const commCatalog = useMemo(() => {
    const ov = overrides[catalogCommKey()]?.payload as CommCatalogPayload | undefined;
    return ov ?? snapshotCommCatalog(COMM_MODULES);
  }, [overrides]);

  // Ensure resolve helpers stay typed / used (list previews)
  const _previewMath = resolveMathModules(MATH_MODULES, overrides);
  const _previewLecture = resolveLectureModules(LECTURE_MODULES, overrides);
  const _previewFrench = resolveFrenchThemes(FRENCH_THEMES, overrides);
  const _previewComm = resolveCommModules(COMM_MODULES, overrides);
  void _previewMath;
  void _previewLecture;
  void _previewFrench;
  void _previewComm;
  void resolve;

  async function persist(
    key: string,
    label: string,
    payload: unknown,
  ) {
    setStatus(null);
    const res = await saveOverride({ key, label, payload, syncGit: true });
    if (!res.ok) {
      setStatus(res.reason);
      return;
    }
    const parts = [
      res.persisted.supabase ? "Supabase" : null,
      res.persisted.git ? "Git" : null,
      "local",
    ].filter(Boolean);
    setStatus(`Catalogue enregistré (${parts.join(" + ")})${res.message ? ` — ${res.message}` : ""}`);
  }

  function addMathModule() {
    const id = prompt("ID module (ex. A11)", "A11");
    if (!id) return;
    const title = prompt("Titre", `Module ${id}`) ?? `Module ${id}`;
    const branch = (prompt("Branche (algebra|geometry|stats)", "algebra") ??
      "algebra") as MathCatalogPayload["modules"][0]["branch"];
    const next: MathCatalogPayload = {
      modules: [
        ...mathCatalog.modules,
        {
          id,
          code: id,
          title,
          branch,
          submodules: [],
          prerequisiteIds: [],
        },
      ],
    };
    startTransition(() => void persist(catalogMathKey(), "Catalogue maths", next));
  }

  function addMathSubmodule(moduleId: string) {
    const code = prompt("Code sous-module (ex. A11.1)", `${moduleId}.1`);
    if (!code) return;
    const title = prompt("Titre", "Nouvelle leçon") ?? "Nouvelle leçon";
    const subId = code.replace(/\./g, "-");
    const next: MathCatalogPayload = {
      modules: mathCatalog.modules.map((m) =>
        m.id === moduleId
          ? {
              ...m,
              submodules: [...m.submodules, { id: subId, code, title }],
            }
          : m,
      ),
    };
    startTransition(async () => {
      await persist(catalogMathKey(), "Catalogue maths", next);
      await saveOverride({
        key: mathLessonKey(subId),
        label: `Maths — ${subId}`,
        payload: {
          submoduleId: subId,
          submoduleCode: code,
          theory: {
            title: { fr: title },
            paragraphs: { fr: ["Contenu à rédiger."] },
            blocks: [{ type: "plain", fr: "Contenu à rédiger." }],
          },
          exercises: [],
        },
        syncGit: true,
      });
    });
  }

  function hideMathModule(moduleId: string) {
    const next: MathCatalogPayload = {
      modules: mathCatalog.modules.map((m) =>
        m.id === moduleId ? { ...m, hidden: true } : m,
      ),
    };
    startTransition(() => void persist(catalogMathKey(), "Catalogue maths", next));
  }

  function addLectureModule() {
    const id = prompt("ID module lecture (ex. l9)", "l9");
    if (!id) return;
    const code = prompt("Code (ex. L9)", id.toUpperCase()) ?? id.toUpperCase();
    const title = prompt("Titre", `Module ${code}`) ?? `Module ${code}`;
    const next: LectureCatalogPayload = {
      modules: [
        ...lectureCatalog.modules,
        { id, code, title, description: "", letterKeys: [] },
      ],
    };
    startTransition(() => void persist(catalogLectureKey(), "Catalogue lecture", next));
  }

  function addLectureLetter(moduleId: string) {
    const letter = prompt("Lettre / grapheme (minuscule)", "ch");
    if (!letter) return;
    const phoneme = prompt("Phonème", `/${letter}/`) ?? `/${letter}/`;
    const next: LectureCatalogPayload = {
      modules: lectureCatalog.modules.map((m) =>
        m.id === moduleId
          ? { ...m, letterKeys: [...m.letterKeys, letter.toLowerCase()] }
          : m,
      ),
    };
    startTransition(async () => {
      await persist(catalogLectureKey(), "Catalogue lecture", next);
      await saveOverride({
        key: lectureLetterKey(letter),
        label: `Lecture — ${letter}`,
        payload: {
          type: "vowel",
          letter: letter.toUpperCase(),
          letterLower: letter.toLowerCase(),
          phoneme,
          exampleWord: letter,
          upperGrid: Array(20).fill(letter.toUpperCase()),
          lowerGrid: Array(20).fill(letter.toLowerCase()),
          upperWords: [],
          lowerWords: [],
          soundItems: [],
          pronunciationChain: [],
        },
        syncGit: true,
      });
    });
  }

  function addFrenchTheme(tab: "vocabulaire" | "grammaire" | "conjugaison") {
    const section = prompt("Section (ex. V11 ou R10)", tab === "vocabulaire" ? "V11" : "R10");
    if (!section) return;
    const code = prompt("Code (ex. V11.1)", `${section}.1`) ?? `${section}.1`;
    const title = prompt("Titre", "Nouveau thème") ?? "Nouveau thème";
    const slug = slugify(prompt("Slug URL", title) ?? title);
    const id = `${section}-${slug}`;
    const next: FrenchCatalogPayload = {
      themes: [
        ...frenchCatalog.themes,
        {
          id,
          slug,
          code,
          title,
          section,
          summary: title,
          tab,
          markers: [],
        },
      ],
    };
    startTransition(async () => {
      await persist(catalogFrenchKey(), "Catalogue français", next);
      if (tab === "vocabulaire") {
        await saveOverride({
          key: vocabThemeKey(slug),
          label: `Vocabulaire — ${slug}`,
          payload: {
            slug,
            code,
            title,
            section,
            words: [],
            sentences: [],
          },
          syncGit: true,
        });
      } else {
        await saveOverride({
          key: grammarLessonKey(slug),
          label: `${tab} — ${slug}`,
          payload: {
            slug,
            code,
            level: "A1",
            title,
            theory: [{ type: "heading", text: title }],
            exercises: [],
          },
          syncGit: true,
        });
      }
    });
  }

  function hideFrenchTheme(slug: string) {
    const next: FrenchCatalogPayload = {
      themes: frenchCatalog.themes.map((t) =>
        t.slug === slug ? { ...t, hidden: true } : t,
      ),
    };
    startTransition(() => void persist(catalogFrenchKey(), "Catalogue français", next));
  }

  function addCommSubmodule(moduleId: string) {
    const id = prompt("ID sous-module (ex. E1-4)", `${moduleId}-4`);
    if (!id) return;
    const code = prompt("Code", id.replace("-", ".")) ?? id;
    const title = prompt("Titre", "Nouvelle leçon") ?? "Nouvelle leçon";
    const next: CommCatalogPayload = {
      modules: commCatalog.modules.map((m) =>
        m.id === moduleId
          ? {
              ...m,
              submodules: [
                ...m.submodules,
                { id, code, title, available: true, lessonId: id },
              ],
            }
          : m,
      ),
    };
    startTransition(() => void persist(catalogCommKey(), "Catalogue communication", next));
  }

  const tabs: { id: Tab; label: string }[] = [
    { id: "french", label: "Français / Vocab" },
    { id: "lecture", label: "Lecture" },
    { id: "math", label: "Maths" },
    { id: "comm", label: "Communication" },
    { id: "images", label: "Images CE/CO" },
  ];

  return (
    <div className="space-y-4 rounded-xl border border-zinc-200 bg-white p-4 shadow-sm">
      <div>
        <h2 className="text-base font-bold text-zinc-900">
          Modules &amp; leçons
        </h2>
        <p className="mt-1 text-sm text-zinc-600">
          Ajoutez ou masquez des entrées du curriculum. Les contenus sont
          éditables ensuite en mode édition sur la leçon. Visible pour tous via
          Supabase{capabilities.gitConfigured ? " + Git" : ""}.
        </p>
      </div>

      <div className="flex flex-wrap gap-1.5">
        {tabs.map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => setTab(t.id)}
            className={`rounded-lg px-3 py-1.5 text-xs font-bold ${
              tab === t.id
                ? "bg-[var(--color-theme)] text-white"
                : "border border-zinc-200 bg-zinc-50 text-zinc-700"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {status && (
        <p className="text-xs text-amber-900" role="status">
          {status}
        </p>
      )}
      {pending && <p className="text-xs text-zinc-500">Enregistrement…</p>}

      {tab === "math" && (
        <div className="space-y-3">
          <button
            type="button"
            onClick={addMathModule}
            className="rounded-lg bg-amber-700 px-3 py-1.5 text-xs font-bold text-white"
          >
            + Module maths
          </button>
          <ul className="space-y-2">
            {mathCatalog.modules
              .filter((m) => !m.hidden)
              .map((m) => (
                <li key={m.id} className="rounded-lg border border-zinc-100 p-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-semibold text-zinc-900">
                      {m.code} — {m.title}
                    </span>
                    <button
                      type="button"
                      className="text-[11px] font-bold text-amber-800"
                      onClick={() => addMathSubmodule(m.id)}
                    >
                      + Leçon
                    </button>
                    <button
                      type="button"
                      className="text-[11px] font-bold text-red-700"
                      onClick={() => hideMathModule(m.id)}
                    >
                      Masquer
                    </button>
                  </div>
                  <ul className="mt-2 space-y-1 text-xs text-zinc-600">
                    {m.submodules.map((s) => (
                      <li key={s.id}>
                        <Link
                          href={`/mathematiques/${s.id}`}
                          className="text-[var(--color-theme)] underline"
                        >
                          {s.code} — {s.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
          </ul>
        </div>
      )}

      {tab === "lecture" && (
        <div className="space-y-3">
          <button
            type="button"
            onClick={addLectureModule}
            className="rounded-lg bg-amber-700 px-3 py-1.5 text-xs font-bold text-white"
          >
            + Module lecture
          </button>
          <ul className="space-y-2">
            {lectureCatalog.modules
              .filter((m) => !m.hidden)
              .map((m) => (
                <li key={m.id} className="rounded-lg border border-zinc-100 p-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-semibold">
                      {m.code} — {m.title}
                    </span>
                    <button
                      type="button"
                      className="text-[11px] font-bold text-amber-800"
                      onClick={() => addLectureLetter(m.id)}
                    >
                      + Lettre / leçon
                    </button>
                  </div>
                  <p className="mt-1 text-xs text-zinc-500">
                    Lettres : {m.letterKeys.join(", ") || "—"}
                  </p>
                </li>
              ))}
          </ul>
        </div>
      )}

      {tab === "french" && (
        <div className="space-y-3">
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => addFrenchTheme("vocabulaire")}
              className="rounded-lg bg-amber-700 px-3 py-1.5 text-xs font-bold text-white"
            >
              + Thème vocabulaire
            </button>
            <button
              type="button"
              onClick={() => addFrenchTheme("grammaire")}
              className="rounded-lg border border-amber-300 px-3 py-1.5 text-xs font-bold text-amber-900"
            >
              + Leçon grammaire
            </button>
            <button
              type="button"
              onClick={() => addFrenchTheme("conjugaison")}
              className="rounded-lg border border-amber-300 px-3 py-1.5 text-xs font-bold text-amber-900"
            >
              + Leçon conjugaison
            </button>
          </div>
          <ul className="max-h-80 space-y-1 overflow-y-auto text-sm">
            {frenchCatalog.themes
              .filter((t) => !t.hidden)
              .slice()
              .reverse()
              .slice(0, 40)
              .map((t) => (
                <li
                  key={t.id}
                  className="flex flex-wrap items-center gap-2 rounded border border-zinc-50 px-2 py-1.5"
                >
                  <span className="min-w-0 flex-1 truncate">
                    <span className="font-semibold">{t.code}</span> {t.title}
                    <span className="text-zinc-400"> · {t.tab ?? "général"}</span>
                  </span>
                  <Link
                    href={
                      t.tab === "vocabulaire"
                        ? `/francais/vocabulaire/${t.slug}`
                        : t.tab === "conjugaison"
                          ? `/francais/conjugaison/${t.slug}`
                          : `/francais/grammaire/${t.slug}`
                    }
                    className="text-[11px] font-bold text-[var(--color-theme)]"
                  >
                    Ouvrir
                  </Link>
                  <button
                    type="button"
                    className="text-[11px] font-bold text-red-700"
                    onClick={() => hideFrenchTheme(t.slug)}
                  >
                    Masquer
                  </button>
                </li>
              ))}
          </ul>
        </div>
      )}

      {tab === "comm" && (
        <div className="space-y-3">
          <ul className="space-y-2">
            {commCatalog.modules
              .filter((m) => !m.hidden)
              .map((m) => (
                <li key={m.id} className="rounded-lg border border-zinc-100 p-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-semibold">
                      {m.id} — {m.title}
                    </span>
                    <button
                      type="button"
                      className="text-[11px] font-bold text-amber-800"
                      onClick={() => addCommSubmodule(m.id)}
                    >
                      + Sous-module
                    </button>
                  </div>
                  <ul className="mt-2 space-y-1 text-xs text-zinc-600">
                    {m.submodules
                      .filter((s) => !s.hidden)
                      .map((s) => (
                        <li key={s.id}>
                          <Link
                            href={`/communication/${s.id}`}
                            className="text-[var(--color-theme)] underline"
                          >
                            {s.code} — {s.title}
                          </Link>
                        </li>
                      ))}
                  </ul>
                </li>
              ))}
          </ul>
          <p className="text-xs text-zinc-500">
            CE / CO : uploadez des images liées aux mots dans l&apos;onglet Images
            (alias global utilisé par les QCM).
          </p>
        </div>
      )}

      {tab === "images" && (
        <div className="space-y-3">
          <p className="text-sm text-zinc-600">
            Associez une image à un mot (vocab, lecture, CE, CO). L&apos;upload
            part sur Supabase (immédiat pour tous) et GitHub (`public/assets/…`).
          </p>
          <CeCoImageBinder />
        </div>
      )}
    </div>
  );
}

function CeCoImageBinder() {
  const { saveOverride, getOverride } = useContentEditor();
  const [word, setWord] = useState("");
  const [domain, setDomain] = useState<"vocab" | "lecture" | "ce" | "co">("ce");
  const [url, setUrl] = useState("");
  const [msg, setMsg] = useState<string | null>(null);

  async function bind() {
    if (!word.trim() || !url.trim()) {
      setMsg("Indiquez un mot et une image");
      return;
    }
    const slug = slugify(word);
    const prev =
      (getOverride("catalog:image:aliases")?.payload as Record<string, string>) ??
      {};
    const next = { ...prev, [slug]: url };
    const res = await saveOverride({
      key: "catalog:image:aliases",
      label: "Alias images (mots)",
      payload: next,
      syncGit: true,
    });
    setMsg(res.ok ? `Alias « ${slug} » enregistré` : res.reason);
  }

  return (
    <div className="space-y-3 rounded-lg border border-amber-200 bg-amber-50/50 p-3">
      <label className="block text-xs">
        <span className="font-semibold text-amber-950">Mot / label</span>
        <input
          value={word}
          onChange={(e) => setWord(e.target.value)}
          className="mt-1 w-full rounded-md border border-amber-200 bg-white px-2 py-1.5 text-sm"
          placeholder="ex. pomme, bus, gare"
        />
      </label>
      <label className="block text-xs">
        <span className="font-semibold text-amber-950">Domaine upload</span>
        <select
          value={domain}
          onChange={(e) => setDomain(e.target.value as typeof domain)}
          className="mt-1 w-full rounded-md border border-amber-200 bg-white px-2 py-1.5 text-sm"
        >
          <option value="ce">CE</option>
          <option value="co">CO</option>
          <option value="vocab">Vocabulaire</option>
          <option value="lecture">Lecture</option>
        </select>
      </label>
      <ImageUploadField
        label="Image"
        value={url}
        word={word}
        domain={domain}
        onChange={setUrl}
      />
      <button
        type="button"
        onClick={() => void bind()}
        className="rounded-lg bg-amber-700 px-3 py-2 text-xs font-bold text-white"
      >
        Lier le mot à l&apos;image (tous les utilisateurs)
      </button>
      {msg && <p className="text-xs text-amber-900">{msg}</p>}
    </div>
  );
}
