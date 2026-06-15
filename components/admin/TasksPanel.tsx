"use client";

import { useState, useTransition } from "react";
import { createTaskAction, type StudentOption } from "@/app/actions/tasks";

// ─── Curriculum options for module selector ────────────────────────────────

type LessonOpt = { id: string; label: string };
type ModuleOpt = { id: string; label: string; lessons: LessonOpt[] };
type MatiereOpt = { matiere: string; modules: ModuleOpt[] };

const CURRICULUM: MatiereOpt[] = [
  {
    matiere: "Maths",
    modules: [
      { id: "A1", label: "A1 — Nombres naturels", lessons: [
        { id: "A1.1", label: "A1.1 — Compter en français" },
        { id: "A1.2", label: "A1.2 — Valeur positionnelle" },
        { id: "A1.3", label: "A1.3 — Comparer les nombres" },
        { id: "A1.4", label: "A1.4 — Droite numérique" },
        { id: "A1.5", label: "A1.5 — Suites numériques" },
      ]},
      { id: "A2", label: "A2 — Addition et soustraction", lessons: [
        { id: "A2.1", label: "A2.1 — Addition" },
        { id: "A2.2", label: "A2.2 — Soustraction" },
        { id: "A2.3", label: "A2.3 — Estimation et arrondi" },
        { id: "A2.4", label: "A2.4 — Problèmes" },
      ]},
      { id: "A3", label: "A3 — Multiplication et division", lessons: [
        { id: "A3.1", label: "A3.1 — Multiplication" },
        { id: "A3.2", label: "A3.2 — Multiplication en colonnes" },
        { id: "A3.3", label: "A3.3 — Division" },
        { id: "A3.4", label: "A3.4 — Division en colonnes" },
        { id: "A3.5", label: "A3.5 — Tables" },
        { id: "A3.6", label: "A3.6 — Problèmes" },
      ]},
      { id: "A4", label: "A4 — Fractions", lessons: [
        { id: "A4.1", label: "A4.1 — Introduction aux fractions" },
        { id: "A4.2", label: "A4.2 — Fractions équivalentes" },
        { id: "A4.3", label: "A4.3 — Comparer les fractions" },
        { id: "A4.4", label: "A4.4 — Additionner les fractions" },
        { id: "A4.5", label: "A4.5 — Soustraire les fractions" },
        { id: "A4.6", label: "A4.6 — Multiplier les fractions" },
        { id: "A4.7", label: "A4.7 — Diviser les fractions" },
      ]},
      { id: "A5", label: "A5 — Décimaux", lessons: [
        { id: "A5.1", label: "A5.1 — Nombres décimaux" },
        { id: "A5.2", label: "A5.2 — Additionner les décimaux" },
        { id: "A5.3", label: "A5.3 — Soustraire les décimaux" },
        { id: "A5.4", label: "A5.4 — Multiplier les décimaux" },
        { id: "A5.5", label: "A5.5 — Diviser les décimaux" },
        { id: "A5.6", label: "A5.6 — Problèmes" },
      ]},
      { id: "G1", label: "G1 — Figures planes", lessons: [
        { id: "G1.1", label: "G1.1 — Reconnaître les figures" },
        { id: "G1.2", label: "G1.2 — Propriétés des figures" },
      ]},
      { id: "G2", label: "G2 — Périmètre", lessons: [
        { id: "G2.1", label: "G2.1 — Périmètre du rectangle" },
        { id: "G2.2", label: "G2.2 — Périmètre du triangle" },
      ]},
      { id: "G3", label: "G3 — Aire", lessons: [
        { id: "G3.1", label: "G3.1 — Aire du rectangle" },
        { id: "G3.2", label: "G3.2 — Aire du triangle" },
        { id: "G3.3", label: "G3.3 — Aire du parallélogramme" },
        { id: "G3.4", label: "G3.4 — Aire du trapèze" },
        { id: "G3.5", label: "G3.5 — Aire du disque" },
      ]},
      { id: "G4", label: "G4 — Périmètre et aire avancés", lessons: [
        { id: "G4.1", label: "G4.1 — Périmètre" },
        { id: "G4.2", label: "G4.2 — Aire du rectangle" },
        { id: "G4.3", label: "G4.3 — Aire du triangle" },
        { id: "G4.4", label: "G4.4 — Aire du parallélogramme" },
        { id: "G4.5", label: "G4.5 — Aire du trapèze" },
        { id: "G4.6", label: "G4.6 — Aire du disque" },
        { id: "G4.7", label: "G4.7 — Aire du losange" },
        { id: "G4.8", label: "G4.8 — Périmètre du cercle" },
      ]},
      { id: "G5", label: "G5 — Volumes", lessons: [
        { id: "G5.1", label: "G5.1 — Reconnaître les solides" },
        { id: "G5.2", label: "G5.2 — Volume du cube" },
        { id: "G5.3", label: "G5.3 — Volume du pavé droit" },
        { id: "G5.4", label: "G5.4 — Volume du prisme et pyramide" },
        { id: "G5.5", label: "G5.5 — Volume du cylindre" },
        { id: "G5.6", label: "G5.6 — Volume du cône et sphère" },
      ]},
    ],
  },
  {
    matiere: "Lecture",
    modules: [
      { id: "lecture-voyelles", label: "Voyelles", lessons: [
        { id: "A", label: "A" }, { id: "E", label: "E" }, { id: "I", label: "I" },
        { id: "O", label: "O" }, { id: "U", label: "U" }, { id: "Y", label: "Y" },
      ]},
      { id: "lecture-consonnes", label: "Consonnes", lessons: [
        { id: "B", label: "B" }, { id: "C", label: "C" }, { id: "D", label: "D" },
        { id: "F", label: "F" }, { id: "G", label: "G" }, { id: "H", label: "H" },
        { id: "J", label: "J" }, { id: "K", label: "K" }, { id: "L", label: "L" },
        { id: "M", label: "M" }, { id: "N", label: "N" }, { id: "P", label: "P" },
        { id: "Q", label: "Q" }, { id: "R", label: "R" }, { id: "S", label: "S" },
        { id: "T", label: "T" }, { id: "V", label: "V" }, { id: "W", label: "W" },
        { id: "X", label: "X" }, { id: "Z", label: "Z" },
      ]},
    ],
  },
  {
    matiere: "Français",
    modules: [
      { id: "A0", label: "A0 — Débutant absolu", lessons: [
        { id: "A.1", label: "A.1 — Salutations et politesse" },
        { id: "A.2", label: "A.2 — Chiffres, nombres et âge" },
        { id: "A.3", label: "A.3 — Couleurs, formes et descriptions" },
        { id: "A.4", label: "A.4 — La famille" },
        { id: "A.5", label: "A.5 — Le corps et la santé" },
        { id: "A.6", label: "A.6 — Objets du quotidien et la classe" },
      ]},
      { id: "A1", label: "A1 — Communication essentielle", lessons: [
        { id: "A.7", label: "A.7 — Enchanté !" },
        { id: "A.8", label: "A.8 — Ma journée" },
        { id: "A.9", label: "A.9 — Les métiers" },
        { id: "A.10", label: "A.10 — La nourriture" },
      ]},
      { id: "B1-ortho", label: "Orthographe B1", lessons: [
        { id: "ortho-1", label: "Accord sujet-verbe" },
        { id: "ortho-2", label: "Accord du participe passé" },
        { id: "ortho-3", label: "Homophones" },
      ]},
      { id: "grammaire", label: "Grammaire", lessons: [
        { id: "gram-1", label: "Les temps du passé" },
        { id: "gram-2", label: "Le futur" },
        { id: "gram-3", label: "Le conditionnel" },
      ]},
    ],
  },
];

// ─── Component ─────────────────────────────────────────────────────────────

export function TasksPanel({ students }: { students: StudentOption[] }) {
  // Form state
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [matiere, setMatiere] = useState("");
  const [moduleId, setModuleId] = useState("");
  const [lessonId, setLessonId] = useState("");
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [studentSearch, setStudentSearch] = useState("");
  const [formError, setFormError] = useState<string | null>(null);
  const [formSuccess, setFormSuccess] = useState(false);
  const [isPending, startTransition] = useTransition();

  // Derived curriculum options
  const matiereOpt = CURRICULUM.find((m) => m.matiere === matiere);
  const moduleOpt = matiereOpt?.modules.find((m) => m.id === moduleId);
  const moduleRef = moduleOpt ? `${matiere} — ${moduleOpt.label}` : null;
  const lessonRef = moduleOpt?.lessons.find((l) => l.id === lessonId)?.label ?? null;

  // Filtered + grouped students
  const q = studentSearch.toLowerCase();
  const filtered = q
    ? students.filter((s) =>
        [s.prenom, s.nom, s.classe].filter(Boolean).join(" ").toLowerCase().includes(q)
      )
    : students;

  const byClasse = filtered.reduce<Record<string, StudentOption[]>>((acc, s) => {
    const key = s.classe ?? "—";
    (acc[key] ??= []).push(s);
    return acc;
  }, {});
  const classes = Object.keys(byClasse).sort();

  function toggleStudent(id: string) {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id); else next.add(id);
      return next;
    });
  }

  function toggleClasse(classe: string) {
    const ids = (byClasse[classe] ?? []).map((s) => s.id);
    const allSelected = ids.every((id) => selectedIds.has(id));
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (allSelected) ids.forEach((id) => next.delete(id));
      else ids.forEach((id) => next.add(id));
      return next;
    });
  }

  function toggleAll() {
    if (selectedIds.size === students.length) setSelectedIds(new Set());
    else setSelectedIds(new Set(students.map((s) => s.id)));
  }

  function handleMatiereChange(v: string) {
    setMatiere(v);
    setModuleId("");
    setLessonId("");
  }

  function handleModuleChange(v: string) {
    setModuleId(v);
    setLessonId("");
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFormError(null);
    setFormSuccess(false);
    startTransition(async () => {
      const res = await createTaskAction(
        title, description, dueDate || null,
        Array.from(selectedIds),
        moduleRef, lessonRef,
      );
      if (!res.ok) { setFormError(res.reason ?? "Erreur inconnue."); return; }
      setTitle(""); setDescription(""); setDueDate("");
      setMatiere(""); setModuleId(""); setLessonId("");
      setSelectedIds(new Set());
      setFormSuccess(true);
      setTimeout(() => setFormSuccess(false), 3000);
    });
  }

  const inputCls = "w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900 outline-none transition-colors focus:border-green-500 focus:ring-2 focus:ring-green-500/15 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50";
  const selectCls = `${inputCls} cursor-pointer`;

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950">

      {/* Title */}
      <div>
        <label className="mb-1 block text-xs font-semibold text-zinc-500 dark:text-zinc-400">Titre *</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Ex : Réviser les tables de multiplication"
          required
          className={inputCls}
        />
      </div>

      {/* Description */}
      <div>
        <label className="mb-1 block text-xs font-semibold text-zinc-500 dark:text-zinc-400">Description (optionnel)</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={2}
          placeholder="Précisions supplémentaires…"
          className={`${inputCls} resize-none`}
        />
      </div>

      {/* Module selector */}
      <div className="space-y-2">
        <label className="block text-xs font-semibold text-zinc-500 dark:text-zinc-400">Lier à un module (optionnel)</label>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
          <select value={matiere} onChange={(e) => handleMatiereChange(e.target.value)} className={selectCls}>
            <option value="">— Matière —</option>
            {CURRICULUM.map((m) => <option key={m.matiere} value={m.matiere}>{m.matiere}</option>)}
          </select>
          <select value={moduleId} onChange={(e) => handleModuleChange(e.target.value)} disabled={!matiere} className={selectCls}>
            <option value="">— Module —</option>
            {(matiereOpt?.modules ?? []).map((m) => <option key={m.id} value={m.id}>{m.label}</option>)}
          </select>
          <select value={lessonId} onChange={(e) => setLessonId(e.target.value)} disabled={!moduleId} className={selectCls}>
            <option value="">— Leçon —</option>
            {(moduleOpt?.lessons ?? []).map((l) => <option key={l.id} value={l.id}>{l.label}</option>)}
          </select>
        </div>
        {moduleRef && (
          <p className="text-xs text-green-600 dark:text-green-400">
            ↳ {moduleRef}{lessonRef ? ` — ${lessonRef}` : ""}
          </p>
        )}
      </div>

      {/* Due date */}
      <div>
        <label className="mb-1 block text-xs font-semibold text-zinc-500 dark:text-zinc-400">Date limite (optionnel)</label>
        <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} className={inputCls} />
      </div>

      {/* Student selector */}
      <div>
        <div className="mb-2 flex items-center justify-between">
          <label className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">
            Élèves *{" "}
            <span className="font-normal text-zinc-400">({selectedIds.size} sélectionné{selectedIds.size !== 1 ? "s" : ""})</span>
          </label>
          {students.length > 0 && (
            <button type="button" onClick={toggleAll} className="text-xs text-green-600 hover:underline">
              {selectedIds.size === students.length ? "Tout désélectionner" : "Tout sélectionner"}
            </button>
          )}
        </div>

        {students.length === 0 ? (
          <p className="text-xs italic text-zinc-400">Aucun élève enregistré.</p>
        ) : (
          <div className="rounded-xl border border-zinc-200 dark:border-zinc-700">
            {/* Search */}
            <div className="flex items-center gap-2 border-b border-zinc-100 px-3 py-2 dark:border-zinc-800">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-zinc-400" aria-hidden>
                <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
              </svg>
              <input
                type="text"
                value={studentSearch}
                onChange={(e) => setStudentSearch(e.target.value)}
                placeholder="Rechercher un élève…"
                className="w-full bg-transparent text-sm outline-none placeholder:text-zinc-400"
              />
              {studentSearch && (
                <button type="button" onClick={() => setStudentSearch("")} className="text-zinc-400 hover:text-zinc-600">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden>
                    <path d="M18 6 6 18M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>

            {/* Student list */}
            <div className="max-h-56 overflow-y-auto">
              {classes.length === 0 ? (
                <p className="px-4 py-3 text-xs italic text-zinc-400">Aucun résultat.</p>
              ) : classes.map((classe) => {
                const classeStudents = byClasse[classe] ?? [];
                const allInClasse = classeStudents.every((s) => selectedIds.has(s.id));
                return (
                  <div key={classe}>
                    <button
                      type="button"
                      onClick={() => toggleClasse(classe)}
                      className="flex w-full items-center gap-2 border-b border-zinc-100 bg-zinc-50 px-3 py-1.5 text-left text-xs font-semibold text-zinc-600 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800"
                    >
                      <Checkbox checked={allInClasse} />
                      Classe : {classe}
                    </button>
                    {classeStudents.map((s) => {
                      const checked = selectedIds.has(s.id);
                      const name = [s.prenom, s.nom].filter(Boolean).join(" ") || s.id.slice(0, 8);
                      return (
                        <label
                          key={s.id}
                          className="flex cursor-pointer items-center gap-2.5 border-b border-zinc-100 px-4 py-2 text-sm text-zinc-700 hover:bg-green-50 last:border-0 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-green-950/20"
                        >
                          <Checkbox checked={checked} />
                          <input type="checkbox" checked={checked} onChange={() => toggleStudent(s.id)} className="sr-only" />
                          {name}
                        </label>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {formError && <p className="text-sm text-red-600 dark:text-red-400">{formError}</p>}
      {formSuccess && <p className="text-sm text-green-600 dark:text-green-400">Tâche créée et assignée !</p>}

      <button
        type="submit"
        disabled={isPending || !title.trim() || selectedIds.size === 0}
        className="w-full rounded-xl bg-green-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-green-700 disabled:opacity-50"
      >
        {isPending ? "Envoi…" : "Assigner la tâche"}
      </button>
    </form>
  );
}

function Checkbox({ checked }: { checked: boolean }) {
  return (
    <span className={`flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded border text-[10px] leading-none ${checked ? "border-green-500 bg-green-500 text-white" : "border-zinc-300 dark:border-zinc-600"}`}>
      {checked ? "✓" : ""}
    </span>
  );
}
